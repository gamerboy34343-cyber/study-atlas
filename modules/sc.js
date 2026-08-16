function scInit(){

const CU = window.SCIENCE_CURRICULUM;
const ACHIEVEMENTS = [
  {id:'first-steps', title:'First Steps', icon:'👣', desc:'Complete your first lesson.'},
  {id:'perfect-lesson', title:'Perfect Lesson', icon:'💯', desc:'Get every question right in a lesson.'},
  {id:'perfect-world', title:'Perfect World', icon:'🌟', desc:'Complete every lesson in a world.'},
  {id:'boss-slayer', title:'Boss Slayer', icon:'⚔️', desc:'Defeat a boss battle.'},
  {id:'speed-master', title:'Speed Master', icon:'⚡', desc:'Reach a combo of 5 correct in a row.'},
  {id:'science-genius', title:'Science Genius', icon:'🧠', desc:'Earn 1000 XP.'},
  {id:'explorer-badge', title:'Explorer', icon:'🗺️', desc:'Visit lessons across 5 worlds.'},
  {id:'planet-guardian', title:'Guardian of Earth', icon:'🌍', desc:'Defeat the Planetary Guardian.'},
];
const AVATARS = [{id:'explorer',emoji:'🔬'},{id:'scribe',emoji:'🧪'},{id:'sage',emoji:'🧑‍🔬'},{id:'astro',emoji:'🛰️'}];
const PETS = [{id:'owl',emoji:'🦉'},{id:'fox',emoji:'🐸'},{id:'cat',emoji:'🐛'},{id:'dragon',emoji:'🦎'}];

/* ============================== STATE ============================== */
const STORE_KEY = 'curiosity-quest-save-v1';
function defaultState(){ return {xp:0,coins:60,diamonds:0,scrolls:0,keys:0,hearts:5,streak:1,lastPlayed:null,completed:{},badges:[],ownedAvatars:['explorer'],ownedPets:['owl'],ownedCostumes:[],avatar:'explorer',pet:'owl',costume:null,weakTopics:[],wheelClaimed:null,bestCombo:0}; }
function loadState(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(!raw) return defaultState();
    const t = JSON.parse(raw);
    const today = new Date().toDateString();
    let streak = t.streak ?? 1;
    if(t.lastPlayed && t.lastPlayed!==today){
      const diffDays = Math.round((new Date(today).getTime()-new Date(t.lastPlayed).getTime())/86400000);
      streak = diffDays===1 ? streak+1 : 1;
    }
    return {...defaultState(), ...t, streak, hearts: Math.max(t.hearts ?? 5, 3)};
  }catch(e){ return defaultState(); }
}
let STATE = loadState();
if(typeof atlasProfile !== 'undefined' && atlasProfile){ STATE.xp = atlasProfile.xp||0; STATE.coins = atlasProfile.coins||0; }
function save(){ localStorage.setItem(STORE_KEY, JSON.stringify(STATE)); }
function update(patch){
  const oldXp = STATE.xp||0, oldCoins = STATE.coins||0;
  STATE = {...STATE, ...patch};
  save();
  const dXp = (STATE.xp||0) - oldXp, dCoins = (STATE.coins||0) - oldCoins;
  if(dXp || dCoins){
    if(typeof atlasBumpActivity === 'function') atlasBumpActivity();
    if(dXp && typeof atlasAddXp === 'function') atlasAddXp(dXp);
    if(dCoins && typeof atlasAddCoins === 'function') atlasAddCoins(dCoins);
  }
}
const key = (w,l)=>`${w}:${l}`;
function worldPrevDoneSc(idx){
  if(idx<=0) return true;
  const prev = CU[idx-1];
  return !prev || prev.lessons.every(l=>!!STATE.completed[key(prev.id,l.id)]);
}
function worldReviewPassedSc(idx){
  if(idx<=0) return true;
  return typeof atlasModulePassed !== 'function' || atlasModulePassed('sc', String(CU[idx-1].id));
}
function isWorldUnlocked(worldId){
  const idx = CU.findIndex(w=>w.id===worldId);
  return worldPrevDoneSc(idx) && worldReviewPassedSc(idx);
}
function worldNeedsReviewSc(worldId){
  const idx = CU.findIndex(w=>w.id===worldId);
  return idx>0 && worldPrevDoneSc(idx) && !worldReviewPassedSc(idx);
}
window.__openWorldReviewSc = (worldId)=>{
  const idx = CU.findIndex(w=>w.id===worldId);
  const prev = CU[idx-1];
  atlasShowModuleReviewGate(app, {
    subject: 'sc',
    moduleId: String(prev.id),
    moduleTitle: prev.name,
    lessonTitles: prev.lessons.map(l=>l.title),
    onPass: render,
    onExit: render,
  });
};
function isNodeUnlocked(worldId, lessonId){
  if(!isWorldUnlocked(worldId)) return false;
  const w = CU.find(w=>w.id===worldId);
  if(!w) return false;
  const idx = w.lessons.findIndex(l=>l.id===lessonId);
  if(idx<=0) return true;
  const prevLesson = w.lessons[idx-1];
  return !!STATE.completed[key(worldId, prevLesson.id)];
}
function worldProgress(worldId){
  const w = CU.find(w=>w.id===worldId);
  if(!w) return {done:0,total:0};
  return {done: w.lessons.filter(l=>STATE.completed[key(worldId,l.id)]).length, total: w.lessons.length};
}
function completeNode(e){
  const newBadges = [];
  const k = key(e.worldId, e.lessonId);
  const existing = STATE.completed[k];
  const completed = {...STATE.completed, [k]: {stars: Math.max(existing?.stars ?? 0, e.stars), perfect: (existing?.perfect ?? false) || e.perfect, attempts: (existing?.attempts ?? 0)+1}};
  const xp = STATE.xp + e.xp;
  const badges = [...STATE.badges];
  const grantBadge = id => { if(!badges.includes(id)){ badges.push(id); newBadges.push(id); } };
  grantBadge('first-steps');
  if(e.perfect) grantBadge('perfect-lesson');
  if(e.isBoss) grantBadge('boss-slayer');
  if(e.combo>=5) grantBadge('speed-master');
  if(xp>=1000) grantBadge('science-genius');
  const w = CU.find(w=>w.id===e.worldId);
  if(w && w.lessons.every(l=>completed[key(w.id,l.id)])) grantBadge('perfect-world');
  if(CU.filter(w2=>w2.lessons.some(l=>completed[key(w2.id,l.id)])).length>=5) grantBadge('explorer-badge');
  if(e.worldId==='earthhome' && e.lessonId==='eh-boss') grantBadge('planet-guardian');
  const weakTopics = Array.from(new Set([...STATE.weakTopics, ...e.weak])).slice(-8);
  update({completed, xp, coins: STATE.coins+e.coins, scrolls: STATE.scrolls+(e.perfect?1:0), keys: STATE.keys+(e.isBoss?1:0),
    diamonds: STATE.diamonds+(e.isBoss?1:0), badges, weakTopics: e.perfect ? weakTopics.filter(t=>!e.weak.includes(t)) : weakTopics,
    bestCombo: Math.max(STATE.bestCombo, e.combo), lastPlayed: new Date().toDateString(), hearts:5});
  return newBadges;
}
function loseHeart(){ update({hearts: Math.max(0, STATE.hearts-1)}); }
function grant(g){ update({coins: STATE.coins+(g.coins||0), xp: STATE.xp+(g.xp||0), diamonds: STATE.diamonds+(g.diamonds||0)}); }
function claimWheel(g){ update({coins: STATE.coins+g.coins, xp: STATE.xp+g.xp, diamonds: STATE.diamonds+g.diamonds, wheelClaimed: new Date().toDateString()}); }
function buyItem(type, id, cost){
  if(STATE.coins<cost) return false;
  if(type==='avatar') update({coins:STATE.coins-cost, ownedAvatars:[...STATE.ownedAvatars,id], avatar:id});
  else update({coins:STATE.coins-cost, ownedPets:[...STATE.ownedPets,id], pet:id});
  return true;
}
function equip(type,id){ update(type==='avatar'?{avatar:id}:{pet:id}); }
function resetProgress(){ STATE = defaultState(); if(typeof atlasProfile !== 'undefined' && atlasProfile){ STATE.xp = atlasProfile.xp||0; STATE.coins = atlasProfile.coins||0; } save(); }
function levelInfo(xp){ return {level: Math.floor(xp/300)+1, progress: (xp%300)/300, into: xp%300, need:300}; }
function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
if(window.__scHashListener) window.removeEventListener('hashchange', window.__scHashListener);
window.__scHashListener = function(){ if(!location.hash.startsWith('#/sc')) return; render(); };
window.addEventListener('hashchange', window.__scHashListener);
function render(){
  window.scrollTo(0,0);
  const hash = location.hash.replace(/^#\/sc\/?/,'');
  const [path,a,b] = hash.split('/');
  if(path==='lesson'){ renderLesson(a,b); return; }
  if(path==='achievements'){ renderAchievements(); return; }
  if(path==='shop'){ renderShop(); return; }
  renderHome();
}
function Topbar(){
  const lv = levelInfo(STATE.xp);
  return `<div class="topbar">
    <div class="stat-chip">⭐ Lv${lv.level}</div>
    <div class="stat-chip">🪙 ${STATE.coins}</div>
    <div class="stat-chip">💎 ${STATE.diamonds}</div>
    <div class="stat-chip">❤️ ${STATE.hearts}</div>
    <div class="stat-chip">🔥 ${STATE.streak}</div>
    <a class="stat-chip" href="#/sc/achievements">🏅 ${STATE.badges.length}/${ACHIEVEMENTS.length}</a>
    <a class="stat-chip" href="#/sc/shop">🛍 Shop</a>
  </div>`;
}

/* ---------------- HOME ---------------- */
function renderHome(){
  const totalLessons = CU.reduce((s,w)=>s+w.lessons.length,0);
  const doneLessons = Object.keys(STATE.completed).length;
  const lv = levelInfo(STATE.xp);
  const avatarEmoji = AVATARS.find(a=>a.id===STATE.avatar)?.emoji || '🧭';
  const petEmoji = PETS.find(p=>p.id===STATE.pet)?.emoji || '🦉';
  const wheelToday = STATE.wheelClaimed === new Date().toDateString();
  let curTarget = null;
  outer: for(const w of CU){ for(const l of w.lessons){ if(!STATE.completed[key(w.id,l.id)]){ curTarget={w,l}; break outer; } } }

  const body = `
    <div class="card" style="text-align:center">
      <div style="font-size:40px;display:flex;justify-content:center;gap:6px">${avatarEmoji}${petEmoji}</div>
      <h1 class="font-display" style="font-size:30px;margin:8px 0 4px">Curiosity Quest</h1>
      <p style="color:var(--muted);max-width:520px;margin:0 auto">Become an investigator, not just a learner. Travel through thirteen realms of science — from invisible microbes to the mysteries of Earth and sky — and answer every "why?" along the way.</p>
      <div style="margin-top:18px">
        ${curTarget?`<a class="btn btn-primary" href="#/sc/lesson/${curTarget.w.id}/${curTarget.l.id}">${doneLessons?'Continue':'Start'} the adventure →</a>`:`<div class="btn btn-primary" style="display:inline-block">🏆 All missions recovered!</div>`}
      </div>
    </div>

    <div class="card" style="margin-top:14px">
      <div style="display:flex;align-items:center;gap:14px">
        <div style="font-size:34px">${avatarEmoji}</div>
        <div style="flex:1">
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted)">Guardian · Lv ${lv.level}</div>
          <div class="progress-track" style="margin-top:4px"><div class="progress-fill" style="width:${lv.progress*100}%"></div></div>
          <div style="font-size:11.5px;color:var(--muted);margin-top:3px">${lv.into} / ${lv.need} XP · 🔥 ${STATE.streak} day streak</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:16px">
        <div class="stat-tile"><div class="n">🪙${STATE.coins}</div></div>
        <div class="stat-tile"><div class="n">💎${STATE.diamonds}</div></div>
        <div class="stat-tile"><div class="n">📜${STATE.scrolls}</div></div>
        <div class="stat-tile"><div class="n">🗝${STATE.keys}</div></div>
        <div class="stat-tile"><div class="n">🏅${STATE.badges.length}</div></div>
      </div>
    </div>

    <div class="card" style="margin-top:14px">
      <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--muted);margin-bottom:8px"><span>Quest Progress</span><span>${doneLessons}/${totalLessons}</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${doneLessons/totalLessons*100}%"></div></div>
      <div style="font-size:12px;color:var(--muted);margin-top:6px">missions recovered${curTarget?` · Current world: ${curTarget.w.emoji} ${curTarget.w.name}`:''}</div>
    </div>

    <div class="card" style="margin-top:14px;text-align:center">
      <div class="font-display" style="font-size:16px">🎡 Daily Rewards</div>
      <p style="color:var(--muted);font-size:13px;margin:6px 0 12px">${wheelToday?'Come back tomorrow for another spin!':'Your lucky wheel is ready!'}</p>
      <button class="btn btn-outline" ${wheelToday?'disabled style="opacity:.4"':''} onclick="__spinWheel()">🎡 Spin the lucky wheel</button>
    </div>

    <h2 class="font-display" style="font-size:20px;margin:24px 0 10px">🗺 Progress Map</h2>
    <div>
      ${CU.map(w=>{
        const unlocked = isWorldUnlocked(w.id);
        const needsReview = worldNeedsReviewSc(w.id);
        const prog = worldProgress(w.id);
        const clickAttr = needsReview ? `onclick='__openWorldReviewSc(${JSON.stringify(w.id)})'` : '';
        return `<div class="world-card ${unlocked?'':(needsReview?'needs-review':'locked')}" ${clickAttr} style="background:linear-gradient(135deg,${w.palette.from},${w.palette.to});${needsReview?'cursor:pointer':''}">
          <div style="display:flex;align-items:center;gap:12px">
            <div style="font-size:32px">${unlocked?w.emoji:(needsReview?'📝':'🔒')}</div>
            <div style="flex:1">
              <div style="font-size:10.5px;text-transform:uppercase;letter-spacing:.06em;opacity:.85">World ${w.index}</div>
              <div class="font-display" style="font-size:19px;font-weight:800">${w.name}</div>
              <div style="font-size:12.5px;opacity:.9">${needsReview?'Tap to take the Module Review →':(unlocked?w.subtitle:'Complete the previous world to reveal this land')}</div>
            </div>
            <div style="font-weight:800">${prog.done}/${prog.total}</div>
          </div>
          ${unlocked?`<div class="node-grid">${w.lessons.map(l=>{
            const done = !!STATE.completed[key(w.id,l.id)];
            const nodeUnlocked = isNodeUnlocked(w.id,l.id);
            const label = l.kind==='boss'?'BOSS BATTLE':l.kind==='minigame'?'MINI GAME':'LESSON';
            return `<a class="node ${nodeUnlocked?'':'locked'} ${done?'done':''}" href="${nodeUnlocked?'#/sc/lesson/'+w.id+'/'+l.id:'#'}">
              <div class="ic">${nodeUnlocked?(done?'✅':l.icon):'🔒'}</div>
              <div style="margin-top:4px">${l.title}</div>
              <div style="font-size:9px;opacity:.7;margin-top:2px">${label}</div>
            </a>`;
          }).join('')}</div>`:''}
        </div>`;
      }).join('')}
    </div>
    <div style="text-align:center;margin-top:20px">
      <button onclick="if(confirm('Reset all progress?')){resetProgress();render();}" style="font-size:12px;color:var(--muted);text-decoration:underline">Reset progress</button>
    </div>
  `;
  app.innerHTML = Topbar() + `<main>${body}</main>`;
  window.__spinWheel = ()=>{
    if(STATE.wheelClaimed === new Date().toDateString()) return;
    const rewards = [{coins:20,xp:10,diamonds:0},{coins:10,xp:20,diamonds:0},{coins:30,xp:0,diamonds:1},{coins:50,xp:5,diamonds:0},{coins:15,xp:15,diamonds:0}];
    const r = rewards[Math.floor(Math.random()*rewards.length)];
    claimWheel(r);
    alert(`🎉 You won: ${r.coins?`🪙${r.coins} `:''}${r.xp?`⭐${r.xp}xp `:''}${r.diamonds?`💎${r.diamonds}`:''}`);
    renderHome();
  };
}

/* ---------------- ACHIEVEMENTS ---------------- */
function renderAchievements(){
  const body = `<a href="#/sc/" style="font-size:13px;color:var(--muted)">← Home</a>
    <h1 class="font-display" style="font-size:26px;margin:10px 0 4px">Achievements</h1>
    <p style="color:var(--muted);margin:0 0 16px">${STATE.badges.length} / ${ACHIEVEMENTS.length} unlocked</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px">
      ${ACHIEVEMENTS.map(a=>{
        const earned = STATE.badges.includes(a.id);
        return `<div class="ach-card ${earned?'earned':''}"><div style="font-size:30px;${earned?'':'filter:grayscale(1);opacity:.6'}">${a.icon}</div>
          <div class="font-display" style="margin-top:6px;font-size:14px">${a.title}</div>
          <div style="font-size:11.5px;color:var(--muted);margin-top:2px">${a.desc}</div></div>`;
      }).join('')}
    </div>`;
  app.innerHTML = Topbar() + `<main>${body}</main>`;
}

/* ---------------- SHOP ---------------- */
function renderShop(){
  const body = `<a href="#/sc/" style="font-size:13px;color:var(--muted)">← Home</a>
    <h1 class="font-display" style="font-size:26px;margin:10px 0 16px">Guardian Shop · 🪙 ${STATE.coins}</h1>
    <div class="card">
      <div class="font-display" style="font-size:16px;margin-bottom:10px">Avatars</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px">
        ${AVATARS.map(a=>{
          const owned = STATE.ownedAvatars.includes(a.id);
          const equipped = STATE.avatar===a.id;
          return `<div class="stat-tile" style="${equipped?'border-color:var(--gold)':''}"><div style="font-size:28px">${a.emoji}</div>
            ${equipped?`<div style="font-size:10px;color:var(--gold);margin-top:4px">EQUIPPED</div>`
              :owned?`<button class="btn btn-outline" style="margin-top:6px;padding:4px 8px;font-size:11px" onclick="__equip('avatar','${a.id}')">Equip</button>`
              :`<button class="btn btn-outline" style="margin-top:6px;padding:4px 8px;font-size:11px" onclick="__buy('avatar','${a.id}',40)">🪙40</button>`}</div>`;
        }).join('')}
      </div>
      <div class="font-display" style="font-size:16px;margin:18px 0 10px">Pets</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px">
        ${PETS.map(p=>{
          const owned = STATE.ownedPets.includes(p.id);
          const equipped = STATE.pet===p.id;
          return `<div class="stat-tile" style="${equipped?'border-color:var(--gold)':''}"><div style="font-size:28px">${p.emoji}</div>
            ${equipped?`<div style="font-size:10px;color:var(--gold);margin-top:4px">EQUIPPED</div>`
              :owned?`<button class="btn btn-outline" style="margin-top:6px;padding:4px 8px;font-size:11px" onclick="__equip('pet','${p.id}')">Equip</button>`
              :`<button class="btn btn-outline" style="margin-top:6px;padding:4px 8px;font-size:11px" onclick="__buy('pet','${p.id}',40)">🪙40</button>`}</div>`;
        }).join('')}
      </div>
    </div>`;
  app.innerHTML = Topbar() + `<main>${body}</main>`;
  window.__buy = (type,id,cost)=>{ if(buyItem(type,id,cost)) renderShop(); else alert('Not enough coins!'); };
  window.__equip = (type,id)=>{ equip(type,id); renderShop(); };
}

/* ---------------- LESSON PLAYER ---------------- */
function renderLesson(worldId, lessonId){
  const w = CU.find(w=>w.id===worldId);
  const lesson = w?.lessons.find(l=>l.id===lessonId);
  if(!w||!lesson){ location.hash='#/sc/'; return; }
  if(!isNodeUnlocked(worldId, lessonId)){ renderHome(); return; }
  const grad = `linear-gradient(150deg, ${w.palette.from}, ${w.palette.to})`;
  let stage = 'story', teachIdx=0, qIdx=0, correctCount=0, combo=0, bestCombo=0, hearts=STATE.hearts, weak=[], status='none', qState={};
  const questions = lesson.questions;
  const Q = questions.length;

  function topHeader(progressFrac){
    return `<div style="border-radius:32px;padding:2px;background:${grad}">
      <div style="border-radius:30px;background:#0d0818cc;backdrop-filter:blur(14px);padding:20px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
          <a href="#/sc/" style="border:2px solid var(--border);border-radius:12px;padding:6px 12px;font-weight:800">✕</a>
          <div class="progress-track" style="flex:1"><div class="progress-fill" style="width:${progressFrac*100}%;background:${grad}"></div></div>
          <span style="font-weight:800">${'❤️'.repeat(Math.max(hearts,0))||'💀'}</span>
        </div>`;
  }

  function draw(){
    if(stage==='story'){
      app.innerHTML = `<main>${topHeader(0)}
        <div style="text-align:center">
          <div style="font-size:56px">${lesson.icon}</div>
          <h1 class="font-display" style="font-size:26px;margin:10px 0" >${lesson.title}</h1>
          <p style="color:var(--muted);font-size:15.5px;line-height:1.6">${lesson.story}</p>
          ${lesson.boss?`<div style="margin-top:16px;border:2px solid #f8717166;background:#f8717118;border-radius:16px;padding:14px">
            <div class="font-display" style="color:var(--destructive)">👹 ${lesson.boss.name}</div>
            <p style="font-style:italic;margin:6px 0 0;font-size:14px">"${lesson.boss.taunt}"</p></div>`:''}
          <button class="btn btn-primary" style="margin-top:20px" onclick="__lNext()">${lesson.kind==='boss'?'Begin the battle ⚔️':"Let's go →"}</button>
        </div>
      </div></main>`;
      return;
    }
    if(stage==='teach'){
      const t = lesson.teach[teachIdx];
      app.innerHTML = `<main>${topHeader(0.15)}
        <div style="text-align:center">
          ${t.visual?`<div style="font-size:32px;margin-bottom:10px">${t.visual}</div>`:''}
          <h2 class="font-display" style="font-size:22px;margin:0 0 10px">${t.title}</h2>
          <p style="color:var(--muted);font-size:15.5px;line-height:1.65">${t.body}</p>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:22px">
          <button class="btn btn-outline" ${teachIdx===0?'disabled style="opacity:.3"':''} onclick="__lBack()">← Back</button>
          <button class="btn btn-primary" onclick="__lNext()">Continue →</button>
        </div>
      </div></main>`;
      return;
    }
    if(stage==='done'){
      const ratio = correctCount/Q;
      app.innerHTML = `<main>
        <div class="card" style="text-align:center;background:${grad};color:#fff">
          <div style="font-size:54px">${ratio===1?'🏆':ratio>=.5?'🎉':'💫'}</div>
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;opacity:.85">Mission complete</div>
          <h2 class="font-display" style="font-size:28px;margin:6px 0">${lesson.title}</h2>
          <div style="margin-top:10px;font-size:26px">${'★'.repeat(qState.__stars||0)}${'☆'.repeat(3-(qState.__stars||0))}</div>
          <div style="display:flex;gap:10px;justify-content:center;margin-top:16px;flex-wrap:wrap">
            <div style="background:#ffffff26;border-radius:14px;padding:8px 16px">✅ ${correctCount}/${Q}</div>
            <div style="background:#ffffff26;border-radius:14px;padding:8px 16px">⭐ +${qState.__xp||0} XP</div>
            <div style="background:#ffffff26;border-radius:14px;padding:8px 16px">🪙 +${qState.__coins||0}</div>
          </div>
          ${qState.__newBadges && qState.__newBadges.length ? `<div style="margin-top:16px">${qState.__newBadges.map(id=>{const a=ACHIEVEMENTS.find(x=>x.id===id); return a?`<div style="background:#ffffff26;border-radius:14px;padding:8px 14px;display:inline-block;margin:3px">${a.icon} ${a.title} unlocked!</div>`:'';}).join('')}</div>`:''}
          <div style="margin-top:20px"><a class="btn" style="background:#fff;color:#1a1030" href="#/sc/">Back to Progress Map</a></div>
        </div>
      </main>`;
      return;
    }
    // stage === 'question'
    const q = questions[qIdx];
    app.innerHTML = `<main>${topHeader((qIdx)/Q)}
      <div class="card" style="padding:20px">
        <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--gold)">Question ${qIdx+1} of ${Q} · Combo ×${combo}</div>
        <h3 class="font-display" style="font-size:19px;margin:10px 0 16px">${q.prompt}</h3>
        <div id="qbody">${questionBody(q)}</div>
        ${status!=='none' ? `<div class="explain-box ${status==='right'?'ok':'bad'}"><b>${status==='right'?'✓ Correct!':'✗ Not quite'}</b><div style="margin-top:4px">${q.explain||''}</div></div>
          <button class="btn btn-primary" style="margin-top:14px;width:100%" onclick="__lContinueQ()">Continue →</button>`:''}
      </div>
    </div></main>`;
  }

  function questionBody(q){
    const st = qState[qIdx] || (qState[qIdx]={});
    if(q.kind==='mcq' || q.kind==='tap'){
      return `<div style="display:grid;gap:10px">${q.options.map((o,i)=>{
        let cls='opt-btn'; if(st.picked!==undefined){ if(i===q.answer) cls+=' correct'; else if(i===st.picked) cls+=' wrong'; }
        return `<button class="${cls}" ${st.picked!==undefined?'disabled':''} onclick="__ansPick(${i})"><span class="opt-letter">${String.fromCharCode(65+i)}</span>${o}</button>`;
      }).join('')}</div>`;
    }
    if(q.kind==='fill'){
      return `<input type="text" id="fillInput" placeholder="${q.placeholder||'your answer'}" ${st.locked?'disabled':''} value="${st.value||''}" oninput="__fillInput(this.value)">
        <button class="btn btn-primary" style="margin-top:12px;width:100%" ${st.locked?'disabled':''} onclick="__ansFill()">Submit</button>`;
    }
    if(q.kind==='sort'){
      const dropped = st.picked!==undefined;
      const wrong = dropped && st.picked!==q.answer;
      return `<div class="sort-item ${dropped?(wrong?'dropped-wrong':'dropped-correct'):''}">${q.item}</div>
        <div class="sort-bins">${q.bins.map((bin,i)=>{
          let cls='sort-bin'; if(dropped){ if(i===q.answer) cls+=' correct'; else if(i===st.picked) cls+=' wrong'; }
          return `<button class="${cls}" ${dropped?'disabled':''} onclick="__ansSort(${i})"><span class="bin-icon">\u{1F5C2}️</span><span class="bin-label">${bin}</span></button>`;
        }).join('')}</div>`;
    }
    if(q.kind==='numeric'){
      st.entry = st.entry||'';
      const wrong = st.locked && +st.entry!==q.answer;
      return `<div class="numeric-display ${st.locked?(wrong?'wrong':'correct'):''}">${st.entry || '<span style="opacity:.4">0</span>'}</div>
        <div class="numeric-pad">${['1','2','3','4','5','6','7','8','9','-','0','⌫'].map(k=>
          `<button class="numeric-key" ${st.locked?'disabled':''} onclick="__numKey('${k}')">${k}</button>`
        ).join('')}</div>
        <button class="btn btn-primary" style="margin-top:12px;width:100%" ${st.locked?'disabled':''} onclick="__ansNumeric()">Submit</button>`;
    }
    if(q.kind==='order'){
      if(!st.order) st.order = shuffle(q.items);
      return `<div>${st.order.map((it,i)=>{
        let cls='order-item'; if(st.locked){ cls += it===q.answer[i] ? ' correct':' wrong'; }
        return `<div class="${cls}"><span class="opt-letter">${i+1}</span><span style="flex:1">${it}</span>
          <span style="display:flex;gap:4px"><button ${st.locked?'disabled':''} onclick="__orderMove(${i},-1)" style="width:28px;height:28px;border-radius:8px;background:#00000040">↑</button><button ${st.locked?'disabled':''} onclick="__orderMove(${i},1)" style="width:28px;height:28px;border-radius:8px;background:#00000040">↓</button></span></div>`;
      }).join('')}</div>
      <button class="btn btn-primary" style="margin-top:10px;width:100%" ${st.locked?'disabled':''} onclick="__ansOrder()">Check order</button>`;
    }
    if(q.kind==='match'){
      if(!st.right) st.right = shuffle(q.pairs.map((p,i)=>({r:p[1],i})));
      st.matched = st.matched || {};
      return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <div>${q.pairs.map((p,i)=>{ const done=i in st.matched; const sel=st.sel===i; return `<button class="match-btn ${done?'done':''} ${sel&&!done?'sel':''}" ${done?'disabled':''} onclick="__matchLeft(${i})">${p[0]}</button>`; }).join('')}</div>
        <div>${st.right.map(p=>{ const done=p.i in st.matched; return `<button class="match-btn ${done?'done':''}" ${done?'disabled':''} onclick="__matchRight(${p.i})">${p.r}</button>`; }).join('')}</div>
      </div>`;
    }
    if(q.kind==='tally'){
      st.count = st.count||0;
      const marks = [];
      for(let i=0;i<st.count;i++) marks.push(`<span class="tally-mark" style="${(i+1)%5===0?'margin-right:14px;transform:rotate(-30deg)':'margin-right:3px'}"></span>`);
      return `<div style="min-height:70px;border:2px dashed var(--border);border-radius:14px;padding:14px;display:flex;flex-wrap:wrap;align-items:center;background:#00000020">${marks.join('')||'<span style="color:var(--muted)">Tap Carve to make a notch</span>'}</div>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:14px;align-items:center">
        <button class="btn btn-primary" ${st.locked?'disabled':''} onclick="__tallyCarve()">Carve ▎</button>
        <button class="btn btn-outline" ${st.locked?'disabled':''} onclick="__tallyClear()">Clear</button>
        <span class="font-display" style="font-size:22px">${st.count}</span>
      </div>
      <button class="btn btn-primary" style="margin-top:14px;width:100%" ${st.locked?'disabled':''} onclick="__ansTally()">Done</button>`;
    }
    if(q.kind==='build'){
      st.built = st.built || [];
      return `<div class="dropzone">${st.built.length===0?'<span style="color:var(--muted)">Your answer appears here…</span>':st.built.map((tk,i)=>`<button class="wordchip" onclick="__buildRemove(${i})">${tk}</button>`).join('')}</div>
      <div class="chiprow" style="margin-top:12px">${q.tokens.map(tk=>`<button class="wordchip" ${st.locked?'disabled':''} onclick="__buildAdd('${tk.replace(/'/g,"\\'")}')">${tk}</button>`).join('')}</div>
      <div style="display:flex;gap:10px;margin-top:12px">
        <button class="btn btn-outline" style="flex:1" ${st.locked?'disabled':''} onclick="__buildClear()">Clear</button>
        <button class="btn btn-primary" style="flex:1" ${st.locked?'disabled':''} onclick="__ansBuild()">Submit</button>
      </div>`;
    }
    return '';
  }

  function resolve(correct){
    const st = qState[qIdx];
    st.locked = true;
    status = correct ? 'right' : 'wrong';
    if(correct){ correctCount++; combo++; bestCombo=Math.max(bestCombo,combo); }
    else {
      combo=0; hearts=Math.max(0,hearts-1); update({hearts}); weak.push(w.name);
      const q = questions[qIdx];
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('sc', w.name||'general', q ? {prompt:q.prompt, type:q.type} : null);
    }
    draw();
  }
  window.__ansPick = (i)=>{ const st=qState[qIdx]; if(st.picked!==undefined) return; st.picked=i; resolve(i===questions[qIdx].answer); };
  window.__fillInput = (v)=>{ const st=qState[qIdx]; if(st) st.value=v; };
  window.__ansFill = ()=>{ const st=qState[qIdx]; if(st.locked) return; const val=(st.value||'').trim().toLowerCase(); resolve(val===String(questions[qIdx].answer).toLowerCase()); };
  window.__ansSort = (i)=>{ const st=qState[qIdx]; if(st.picked!==undefined) return; st.picked=i; resolve(i===questions[qIdx].answer); };
  window.__numKey = (k)=>{
    const st=qState[qIdx]; if(!st || st.locked) return;
    if(k==='⌫') st.entry = (st.entry||'').slice(0,-1);
    else if(k==='-'){ if(!(st.entry||'').includes('-')) st.entry=(st.entry||'')+'-'; }
    else st.entry = (st.entry||'')+k;
    draw();
  };
  window.__ansNumeric = ()=>{ const st=qState[qIdx]; if(!st || st.locked) return; resolve(+st.entry===questions[qIdx].answer); };
  window.__orderMove = (i,d)=>{ const st=qState[qIdx]; if(st.locked) return; const j=i+d; if(j<0||j>=st.order.length) return; const a=[...st.order]; [a[i],a[j]]=[a[j],a[i]]; st.order=a; draw(); };
  window.__ansOrder = ()=>{ const st=qState[qIdx]; if(st.locked) return; const q=questions[qIdx]; resolve(st.order.every((it,i)=>it===q.answer[i])); };
  window.__matchLeft = (i)=>{ const st=qState[qIdx]; if(i in st.matched) return; st.sel=i; draw(); };
  window.__matchRight = (i)=>{
    const st=qState[qIdx]; if(st.sel==null || i in st.matched) return;
    if(st.sel===i){ st.matched={...st.matched,[i]:true}; st.sel=null; draw(); if(Object.keys(st.matched).length===questions[qIdx].pairs.length) resolve(true); }
    else { st.sel=null; draw(); resolve(false); }
  };
  window.__tallyCarve = ()=>{ const st=qState[qIdx]; if(st.locked) return; st.count=(st.count||0)+1; draw(); };
  window.__tallyClear = ()=>{ const st=qState[qIdx]; if(st.locked) return; st.count=0; draw(); };
  window.__ansTally = ()=>{ const st=qState[qIdx]; if(st.locked) return; resolve(st.count===questions[qIdx].count); };
  window.__buildAdd = (tk)=>{ const st=qState[qIdx]; if(st.locked) return; st.built=[...st.built,tk]; draw(); };
  window.__buildRemove = (i)=>{ const st=qState[qIdx]; if(st.locked) return; st.built=st.built.filter((_,p)=>p!==i); draw(); };
  window.__buildClear = ()=>{ const st=qState[qIdx]; if(st.locked) return; st.built=[]; draw(); };
  window.__ansBuild = ()=>{ const st=qState[qIdx]; if(st.locked) return; resolve(st.built.join('-')===questions[qIdx].answer); };

  window.__lNext = ()=>{
    if(stage==='story'){ stage = lesson.teach.length ? 'teach' : 'question'; if(stage==='question'){ status='none'; } draw(); return; }
    if(stage==='teach'){ if(teachIdx<lesson.teach.length-1){ teachIdx++; } else { stage='question'; status='none'; } draw(); return; }
  };
  window.__lBack = ()=>{ if(stage==='teach'){ if(teachIdx>0) teachIdx--; else stage='story'; draw(); } };
  window.__lContinueQ = ()=>{
    status='none';
    if(qIdx<Q-1){ qIdx++; draw(); return; }
    const ratio = correctCount/Q;
    const stars = ratio===1?3:ratio>=.66?2:(ratio>0?1:0);
    const isBoss = lesson.kind==='boss';
    const xp = 40 + correctCount*20 + (isBoss?60:0);
    const coins = 15 + correctCount*10 + (isBoss?50:0);
    const perfect = correctCount===Q;
    const newBadges = completeNode({worldId:w.id, lessonId:lesson.id, stars, perfect, isBoss, xp, coins, combo:bestCombo, weak});
    qState.__stars=stars; qState.__xp=xp; qState.__coins=coins; qState.__newBadges=newBadges;
    hearts = 5;
    stage='done';
    draw();
  };

  draw();
}

/* ============================== INIT ============================== */
render();

}
window.SubjectApps = window.SubjectApps || {};
window.SubjectApps['sc'] = { init: scInit };
