/* ============================== SHARED PROFILE ==============================
   One XP/coins/streak pool for the whole account, backed by the `profiles`
   table in Supabase. Games call atlasAddXp/atlasAddCoins/atlasBumpActivity
   instead of keeping their own totals (see Task #17 for the per-game rewire). */

let atlasProfile = null; // {id, display_name, avatar, xp, coins, streak, last_activity_date}

function atlasTodayStr(){ return new Date().toISOString().slice(0,10); }

function atlasDaysBetween(a, b){
  return Math.round((new Date(b) - new Date(a)) / 86400000);
}

async function atlasLoadProfile(){
  if(!atlasUser) return;
  let { data } = await atlasSB.from('profiles').select('*').eq('id', atlasUser.id).maybeSingle();
  if(!data){
    // fallback for accounts whose signup trigger hasn't run yet
    const displayName = (atlasUser.user_metadata && atlasUser.user_metadata.display_name) || 'Learner';
    const { data: created, error } = await atlasSB.from('profiles')
      .insert({ id: atlasUser.id, display_name: displayName })
      .select().single();
    if(error){ console.error('could not create profile', error); return; }
    data = created;
  }
  atlasProfile = data;
  atlasCheckStreak();
}

function atlasCheckStreak(){
  if(!atlasProfile || !atlasProfile.last_activity_date) return;
  const diff = atlasDaysBetween(atlasProfile.last_activity_date, atlasTodayStr());
  if(diff >= 2){
    atlasProfile.streak = 0;
    atlasPatchProfile({ streak: 0 });
  }
}

function atlasBumpActivity(){
  if(!atlasProfile) return;
  const today = atlasTodayStr();
  if(atlasProfile.last_activity_date === today) return; // already counted today
  const last = atlasProfile.last_activity_date;
  let streak = atlasProfile.streak || 0;
  if(!last) streak = 1;
  else{
    const diff = atlasDaysBetween(last, today);
    streak = diff === 1 ? streak + 1 : 1;
  }
  atlasProfile.streak = streak;
  atlasProfile.last_activity_date = today;
  atlasPatchProfile({ streak, last_activity_date: today });
}

async function atlasPatchProfile(patch){
  if(!atlasUser) return;
  const { error } = await atlasSB.from('profiles').update(patch).eq('id', atlasUser.id);
  if(error) console.error('profile save failed', error);
}

async function atlasAddXp(amount){
  if(!atlasProfile || !amount) return;
  atlasProfile.xp = (atlasProfile.xp || 0) + amount;
  atlasBumpActivity();
  await atlasPatchProfile({ xp: atlasProfile.xp });
  renderNavProfile();
}

async function atlasAddCoins(amount){
  if(!atlasProfile || !amount) return;
  atlasProfile.coins = (atlasProfile.coins || 0) + amount;
  await atlasPatchProfile({ coins: atlasProfile.coins });
  renderNavProfile();
}

function atlasLevel(){
  return Math.floor((atlasProfile && atlasProfile.xp || 0) / 200) + 1;
}
