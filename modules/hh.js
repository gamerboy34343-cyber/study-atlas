function hhInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"food-detectives","title":"Food Detectives","subtitle":"What is Mould? · Where Microbes Live · Good Microbes","emoji":"🔬","gradient":"linear-gradient(135deg,#34D399 0%,#065F46 100%)","glow":"#34D399","levels":[
  {"id":1,"title":"What is Mould?","intro":"Detective Disha investigates why her forgotten uttapam turned strange.","questions":[
    {"type":"mcq","prompt":"The coloured patches and foul smell that appeared on Disha's forgotten uttapam were caused by tiny living things called ______.","options":["microbes","vitamins","enzymes","minerals"],"answer":"microbes","explanation":"Microbes grew on the food and changed its taste and smell."},
    {"type":"mcq","prompt":"Mould, which can grow on spoiled food, is made up of a colony of thousands of ______.","options":["microbes","insects","seeds","crystals"],"answer":"microbes","explanation":"This is why mould looks like a visible patch even though each microbe is tiny."},
    {"type":"mcq","prompt":"According to Anna, microbes are so tiny that you need an instrument called a ______ to see them clearly.","options":["microscope","telescope","magnifying glass only","thermometer"],"answer":"microscope","explanation":"Microbes are everywhere around us, but invisible to the naked eye."}
  ]},
  {"id":2,"title":"Where Microbes Live","intro":"Microbes are everywhere — but what do they actually need to grow?","questions":[
    {"type":"mcq","prompt":"According to Disha's first finding, microbes can be found in soil, water, the air, and even ______.","options":["inside plants, animals and us","only in dirty places","only in cold places","only in factories"],"answer":"inside plants, animals and us","explanation":"Microbes are found almost everywhere in nature."},
    {"type":"mcq","prompt":"What do microbes need in order to grow, according to Anna?","options":["Moisture, air and the right temperature","Only sunlight","Only darkness","Only cold temperatures"],"answer":"Moisture, air and the right temperature","explanation":"Removing any one of these can slow or stop microbe growth."},
    {"type":"mcq","prompt":"If we remove moisture, air or the right temperature from food, what happens to microbes?","options":["We can stop them from growing","They grow even faster","They turn into a different food","Nothing changes"],"answer":"We can stop them from growing","explanation":"This is the basic science behind most food preservation methods."}
  ]},
  {"id":3,"title":"Good Microbes","intro":"Not all microbes are troublemakers — some actually help us!","questions":[
    {"type":"mcq","prompt":"Which of these is described as something microbes help make, rather than spoil?","options":["Curd","Rotten fruit","Mouldy bread","Spoiled milk"],"answer":"Curd","explanation":"Curd is made using good microbes that transform milk."},
    {"type":"mcq","prompt":"The small microbes in curd join the good microbes in your stomach to help with ______.","options":["digestion","breathing","hearing","vision"],"answer":"digestion","explanation":"This is why curd or buttermilk is often given for an upset stomach."},
    {"type":"mcq","prompt":"What helps idli batter rise and become fluffy?","options":["Microbes in the air","Extra salt","Boiling water","Only stirring"],"answer":"Microbes in the air","explanation":"These microbes ferment the batter, making it light and fluffy."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Mystery","intro":"The Microbe Detective tests everything you've learned about food and microbes!","isBoss":true,"bossName":"Microbe Detective","questions":[
    {"type":"mcq","prompt":"What was the final discovery Disha made about microbes in her notebook?","options":["Some microbes spoil food while some help us make and digest food","All microbes are harmful","Microbes cannot survive in food","Microbes only exist in factories"],"answer":"Some microbes spoil food while some help us make and digest food","explanation":"This balanced understanding solved Disha's whole mystery."},
    {"type":"mcq","prompt":"Why did Disha's Paati's pickle, made two months earlier, stay delicious while a slice of bread spoiled in just two days?","options":["The pickle was covered with oil, which helped preserve it, while the bread was exposed to air and moisture","The pickle had no microbes near it at all","Bread never spoils","The pickle was kept in a freezer"],"answer":"The pickle was covered with oil, which helped preserve it, while the bread was exposed to air and moisture","explanation":"Oil keeps air out, stopping microbe growth."},
    {"type":"mcq","prompt":"What is the connection between microbes, food spoilage and food preservation, as Disha discovered?","options":["Preserving food often means removing what microbes need to grow, like moisture or air","Preservation has nothing to do with microbes","Only heat destroys all microbes","Food preservation was invented very recently"],"answer":"Preserving food often means removing what microbes need to grow, like moisture or air","explanation":"This is the central scientific idea behind the whole chapter."}
  ]}
]},
{"id":2,"slug":"preserving-food","title":"Preserving Food","subtitle":"Drying & Pickling · Cold & Sealed Storage · Seasonal Food & Preservation Products","emoji":"🫙","gradient":"linear-gradient(135deg,#FBBF24 0%,#92400E 100%)","glow":"#FBBF24","levels":[
  {"id":1,"title":"Drying & Pickling","intro":"Traditional methods have kept Indian food fresh for generations.","questions":[
    {"type":"mcq","prompt":"Drying chillies in the Sun to make chilli powder works by removing ______ so microbes cannot grow.","options":["moisture","air","sugar","salt"],"answer":"moisture","explanation":"Without moisture, microbes cannot survive on the chillies."},
    {"type":"mcq","prompt":"In pickle-making, oil is added around the jar to ______.","options":["stop air from getting in","add more moisture","make it sweeter","cool it down"],"answer":"stop air from getting in","explanation":"This keeps the pickle safe from microbe growth for a long time."},
    {"type":"mcq","prompt":"What did Disha's grandfather say people traditionally used to keep food from spoiling, besides oil?","options":["Salt, sugar and spices like pepper","Only water","Only ice","Only sunlight"],"answer":"Salt, sugar and spices like pepper","explanation":"These traditional preservation methods are still used today."}
  ]},
  {"id":2,"title":"Cold & Sealed Storage","intro":"From refrigerators to airtight cans, modern preservation keeps food fresh longer.","questions":[
    {"type":"mcq","prompt":"Fridges help preserve food by making the temperature ______ for microbes to grow.","options":["too cold","too warm","too dry","too wet"],"answer":"too cold","explanation":"Cold temperatures slow down microbe activity significantly."},
    {"type":"mcq","prompt":"Why does butter typically need refrigeration while ghee does not?","options":["Ghee is made by heating butter until the water evaporates, making it more shelf-stable","Butter has no water in it at all","Ghee is a completely different food from butter","Refrigeration has no effect on either"],"answer":"Ghee is made by heating butter until the water evaporates, making it more shelf-stable","explanation":"Removing water from ghee makes it much harder for microbes to grow in it."},
    {"type":"mcq","prompt":"In food factories, food is often preserved by sealing it in ______ to keep microbes away.","options":["air-tight cans and packaging","open baskets","wet cloth","paper bags only"],"answer":"air-tight cans and packaging","explanation":"Sealing out air is a key part of many preservation techniques."}
  ]},
  {"id":3,"title":"Seasonal Food & Preservation Products","intro":"Waiting for a fruit's season makes it taste even sweeter.","questions":[
    {"type":"mcq","prompt":"Why did Disha say lychees were extra special when Appa brought them home?","options":["Lychee is a seasonal fruit, so people wait almost a year to enjoy it again","Lychees are available every day of the year","Lychees never go out of season","Lychees are the most common fruit in India"],"answer":"Lychee is a seasonal fruit, so people wait almost a year to enjoy it again","explanation":"Waiting for seasonal fruit increases the joy of eating it."},
    {"type":"mcq","prompt":"According to the chapter, fruits taste best when ______.","options":["they are eaten in their own season","they are eaten as soon as they are picked, regardless of season","they are imported from far away","they are always eaten dried"],"answer":"they are eaten in their own season","explanation":"Seasonal eating is a recurring theme in Disha's investigation."},
    {"type":"mcq","prompt":"Roti preserved through dehydration becomes which product?","options":["Khakhra","Papad","Aam papad","Chilli powder"],"answer":"Khakhra","explanation":"Dehydration is used to make many different long-lasting food items."}
  ]},
  {"id":4,"title":"Boss: Guardian of Preservation","intro":"The Pantry Keeper tests your knowledge of food preservation methods!","isBoss":true,"bossName":"Pantry Keeper","questions":[
    {"type":"mcq","prompt":"What is the connecting idea between drying, pickling, refrigeration and using salt or sugar?","options":["They are all traditional or modern methods of preserving food by stopping microbes from growing","They all make food taste sweeter","They all require electricity","They are unrelated methods with no shared purpose"],"answer":"They are all traditional or modern methods of preserving food by stopping microbes from growing","explanation":"Each method removes something microbes need — moisture, air or warmth."},
    {"type":"mcq","prompt":"Mango preserved this way becomes 'aam papad', while lemon preserved this way becomes lemon pickle. What preservation method is being described in both cases?","options":["Traditional preservation using drying or oil/salt-based methods","Freezing only","Boiling in plain water","Storing at room temperature with no preparation"],"answer":"Traditional preservation using drying or oil/salt-based methods","explanation":"These are classic examples of Indian food preservation traditions."},
    {"type":"mcq","prompt":"Why is it important to know different food preservation methods, according to the chapter?","options":["They help us store food safely, avoid spoilage, and enjoy food for longer periods","Preservation methods have no real benefit","Only factories need to preserve food","Fresh food never needs any preservation at all"],"answer":"They help us store food safely, avoid spoilage, and enjoy food for longer periods","explanation":"This is the practical value behind Disha's whole investigation."}
  ]}
]},
{"id":3,"slug":"chew-digest","title":"Chew, Digest & Stay Healthy","subtitle":"Types of Teeth · Chewing & Digestion · Oral Hygiene & Safety","emoji":"🦷","gradient":"linear-gradient(135deg,#F472B6 0%,#831843 100%)","glow":"#F472B6","levels":[
  {"id":1,"title":"Types of Teeth","intro":"Different teeth do different jobs when you eat.","questions":[
    {"type":"mcq","prompt":"Which type of teeth are used to cut food?","options":["Incisors","Canines","Premolars","Molars"],"answer":"Incisors","explanation":"Incisors are at the front and are shaped for cutting."},
    {"type":"mcq","prompt":"Which type of teeth are used to tear food?","options":["Canines","Incisors","Molars","Premolars"],"answer":"Canines","explanation":"Canines are pointed, which helps them tear food."},
    {"type":"mcq","prompt":"Which type of teeth are used to grind food?","options":["Molars","Incisors","Canines","None of these"],"answer":"Molars","explanation":"Molars are flat and strong, ideal for grinding food into smaller pieces."}
  ]},
  {"id":2,"title":"Chewing & Digestion","intro":"What really happens to food inside your mouth?","questions":[
    {"type":"mcq","prompt":"According to Anna, chewing food properly releases ______, which helps in digestion.","options":["saliva","sugar","salt","extra water"],"answer":"saliva","explanation":"Saliva begins breaking down food even before it reaches your stomach."},
    {"type":"mcq","prompt":"What happens to food as you chew it properly, according to Activity 5?","options":["It breaks down into smaller pieces and then into mush","It becomes larger","It changes colour completely","It stops being food"],"answer":"It breaks down into smaller pieces and then into mush","explanation":"This makes food easier to swallow and digest."},
    {"type":"mcq","prompt":"Why does the chapter say eating with your hands, common in India, can be helpful?","options":["It helps you feel the texture of food and prepares your stomach for digestion","It has no real benefit","It makes food spoil faster","It is only a matter of tradition with no health value"],"answer":"It helps you feel the texture of food and prepares your stomach for digestion","explanation":"This is one interesting connection the chapter draws between culture and digestion."}
  ]},
  {"id":3,"title":"Oral Hygiene & Safety","intro":"Taking care of your teeth — and eating safely — matters every day.","questions":[
    {"type":"mcq","prompt":"What did the dentist find and treat when Disha had a toothache?","options":["A cavity, a hole in the tooth","A missing tooth","A broken jaw","An allergy"],"answer":"A cavity, a hole in the tooth","explanation":"Cavities need to be treated by a dentist to prevent further damage."},
    {"type":"mcq","prompt":"Which of these did the dentist advise Disha to do for good oral hygiene?","options":["Rinse your mouth after eating, brush regularly, and eat fewer sweets","Never brush your teeth","Eat as many sweets as possible","Avoid seeing a dentist at all"],"answer":"Rinse your mouth after eating, brush regularly, and eat fewer sweets","explanation":"These simple habits help prevent cavities and other dental problems."},
    {"type":"mcq","prompt":"Why did Amma warn at dinner, 'Do not gulp down your food'?","options":["To avoid the danger of choking","Because gulping food tastes better","Because it wastes food","Because it makes food digest faster"],"answer":"To avoid the danger of choking","explanation":"Eating slowly and chewing well helps prevent choking."}
  ]},
  {"id":4,"title":"Boss: Guardian of Good Health","intro":"The Wellness Warden tests your understanding of digestion and healthy habits!","isBoss":true,"bossName":"Wellness Warden","questions":[
    {"type":"mcq","prompt":"What can help with an upset stomach, according to the chapter, because it contains microbes that join the good microbes in your stomach?","options":["Curd or buttermilk","Extra sugar","Cold water only","Uncooked rice"],"answer":"Curd or buttermilk","explanation":"This connects back to the good microbes discussed earlier in the chapter."},
    {"type":"mcq","prompt":"What is one home remedy or safety habit mentioned in the chapter for avoiding choking while eating?","options":["Eating slowly and chewing food properly","Eating as fast as possible","Talking loudly while eating","Skipping meals"],"answer":"Eating slowly and chewing food properly","explanation":"Careful, unhurried eating reduces the risk of choking."},
    {"type":"mcq","prompt":"What is the overall lesson from the chapter's investigation into chewing, digestion and oral health?","options":["Eating right, chewing well, and maintaining oral hygiene all support good health and digestion","Chewing has no connection to digestion","Oral hygiene is unrelated to overall health","Only medicines can help with digestion"],"answer":"Eating right, chewing well, and maintaining oral hygiene all support good health and digestion","explanation":"This ties together everything Disha discovered as a food detective."}
  ]}
]},
{"id":4,"slug":"green-school","title":"Green School Champions","subtitle":"What Makes a Green School? · Managing Waste · Cool, Green & Safe","emoji":"🌱","gradient":"linear-gradient(135deg,#60A5FA 0%,#1E3A8A 100%)","glow":"#60A5FA","levels":[
  {"id":1,"title":"What Makes a Green School?","intro":"Aasha and Mohit dream of turning their school into a green school.","questions":[
    {"type":"mcq","prompt":"According to Aasha, a green school is one where students manage waste, save water, use electricity carefully, and ______.","options":["plant and care for more trees","avoid going to school","ignore recycling","never use electricity at all"],"answer":"plant and care for more trees","explanation":"A green school actively works to make its campus greener and healthier."},
    {"type":"mcq","prompt":"The 'Swachh Bharat Swachh Vidyalaya' initiative, part of the Swachh Bharat Mission, focuses on clean toilets, safe drinking water, proper waste management and ______.","options":["hygiene education","only sports facilities","only exam results","only new buildings"],"answer":"hygiene education","explanation":"Every child has the right to study in a clean and safe environment."},
    {"type":"mcq","prompt":"Which 'School Explorer Team' would be responsible for checking if lights and fans are left on when no one is using them?","options":["Electricity Savers","Waste Warriors","Water Watchers","Traffic Trackers"],"answer":"Electricity Savers","explanation":"Each team focuses on a different aspect of making the school greener."}
  ]},
  {"id":2,"title":"Managing Waste","intro":"Where does our waste go, and how can we handle it better?","questions":[
    {"type":"mcq","prompt":"According to the chapter, we can reduce waste by using only what we need, and by ______ things instead of throwing them away.","options":["reusing","burning","burying","ignoring"],"answer":"reusing","explanation":"Reusing items is a simple but powerful way to cut down on waste."},
    {"type":"mcq","prompt":"The chapter recommends separating waste into which two main categories to manage it better?","options":["Dry waste and wet waste","Big waste and small waste","Old waste and new waste","Cheap waste and expensive waste"],"answer":"Dry waste and wet waste","explanation":"This separation makes recycling and composting much more effective."},
    {"type":"mcq","prompt":"Items like old newspapers are often kept aside and given to ______ instead of being thrown into regular bins.","options":["traditional recyclers","the school garden","the science lab","the kitchen"],"answer":"traditional recyclers","explanation":"Recyclers help make sure useful materials are reused rather than wasted."}
  ]},
  {"id":3,"title":"Cool, Green & Safe","intro":"Simple choices can keep a school cooler, greener and safer for everyone.","questions":[
    {"type":"mcq","prompt":"In the black vs. white tile activity, which colour surface felt cooler after being kept under the Sun?","options":["White","Black","Both felt the same","Neither felt any different"],"answer":"White","explanation":"White surfaces reflect more sunlight, while black surfaces absorb more heat."},
    {"type":"mcq","prompt":"According to the chapter, a white roof helps keep a room cool because it ______ the Sun's heat.","options":["reflects","absorbs","traps","ignores"],"answer":"reflects","explanation":"This is a simple, low-cost way to reduce indoor heat."},
    {"type":"mcq","prompt":"The Jal Shakti Abhiyan is a campaign that encourages people to plant trees, catch rainwater and ______.","options":["use water wisely","waste more water","cut down trees","avoid recycling"],"answer":"use water wisely","explanation":"This campaign helps protect water resources for the future."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Happy School","intro":"The final challenge! Face the Green Guardian to complete Health & Habitat Quest.","isBoss":true,"bossName":"Green Guardian","questions":[
    {"type":"mcq","prompt":"During a fire drill, what should you do if you see smoke, according to the chapter's safety steps?","options":["Crawl low under the smoke with your mouth covered to breathe cleaner air","Stand up straight and walk normally through the smoke","Hide in a closet or bathroom","Go back inside to get your belongings"],"answer":"Crawl low under the smoke with your mouth covered to breathe cleaner air","explanation":"Smoke rises, so staying low helps you breathe cleaner air during an emergency."},
    {"type":"mcq","prompt":"What does the chapter say about how our behaviour affects the people and places around us?","options":["Kindness and respect, like waiting our turn and using kind words, make places more peaceful and welcoming","Behaviour has no real effect on others","Only teachers need to behave well","Being unkind has no consequences"],"answer":"Kindness and respect, like waiting our turn and using kind words, make places more peaceful and welcoming","explanation":"Small daily choices in behaviour shape the whole school community."},
    {"type":"mcq","prompt":"What is the overall message of the 'Our School — A Happy Place' chapter?","options":["A school becomes a happy place through care for the environment, safety, and kindness among everyone","A happy school only depends on having a big building","Green initiatives are unrelated to a school's happiness","Only teachers are responsible for a happy school"],"answer":"A school becomes a happy place through care for the environment, safety, and kindness among everyone","explanation":"This ties together every theme explored throughout the chapter."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.HH_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.HH_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['🔬','🫙','🦷','🌱','🍎','🧺'];

/* ============================== STATE ============================== */
const STORE_KEY = 'health-habitat-quest-v1';
function defaultState(){ return {avatar:'🔬', name:'Explorer', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
let STATE = (()=>{ try{ const raw = localStorage.getItem(STORE_KEY); return raw ? {...defaultState(), ...JSON.parse(raw)} : defaultState(); }catch(e){ return defaultState(); } })();
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
function progKey(w,l){ return `${w}-${l}`; }
function activeUnreviewedWorldHh(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('hh', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedHh(i){
  const active = activeUnreviewedWorldHh();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewHh(i){
  const active = activeUnreviewedWorldHh();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewHh = ()=>{
  const active = activeUnreviewedWorldHh();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'hh',
    moduleId: String(active.id),
    moduleTitle: active.title,
    lessonTitles: active.levels.map(l=>l.title),
    onPass: render,
    onExit: render,
  });
};
function levelNum(xp){ return Math.floor(xp/100)+1; }
function levelFrac(xp){ return (xp%100)/100; }
function setProfile(name, avatar){ update({name, avatar, onboarded:true}); }
function completeLevel(worldId, levelId, ratio, xpEarned){
  const key = progKey(worldId, levelId);
  const old = STATE.progress[key] ?? {stars:0, bestXp:0, attempts:0};
  const stars = ratio>=.95?3:ratio>=.75?2:+(ratio>=.5);
  update({
    xp: STATE.xp + xpEarned,
    coins: STATE.coins + Math.round(xpEarned*0.4),
    progress: {...STATE.progress, [key]: {stars:Math.max(old.stars,stars), bestXp:Math.max(old.bestXp,xpEarned), attempts:old.attempts+1}},
  });
}
function resetSave(){ STATE = defaultState(); if(typeof atlasProfile !== 'undefined' && atlasProfile){ STATE.xp = atlasProfile.xp||0; STATE.coins = atlasProfile.coins||0; } save(); render(); }
function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

/* ============================== MASCOT ============================== */
function mascotSvg(mood, size){
  size = size||64;
  const sad = mood==='sad';
  const mouth = sad ? `<path d="M42 70 Q 50 63, 58 70" stroke="#0f3a1c" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    : mood==='think' ? `<circle cx="50" cy="70" r="2" fill="#0f3a1c"/>`
    : `<path d="M42 68 Q 50 78, 58 68" stroke="#0f3a1c" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(52,211,153,0.55))">
    <defs>
      <radialGradient id="mLeaf" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#D1FAE5"/><stop offset="60%" stop-color="#6EE7B7"/><stop offset="100%" stop-color="#047857"/>
      </radialGradient>
      <radialGradient id="mGlowHh" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#A7F3D0" stop-opacity="0.7"/><stop offset="100%" stop-color="#A7F3D0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowHh)"/>
    <path d="M50 10 C 30 20, 20 45, 35 65 C 45 78, 55 78, 65 65 C 80 45, 70 20, 50 10 Z" fill="url(#mLeaf)" stroke="#047857" stroke-width="2"/>
    <line x1="50" y1="20" x2="50" y2="70" stroke="#047857" stroke-width="1.4" opacity="0.5"/>
    <ellipse cx="40" cy="58" rx="4" ry="${sad?2:5}" fill="#0f3a1c"/>
    <ellipse cx="60" cy="58" rx="4" ry="${sad?2:5}" fill="#0f3a1c"/>
    <circle cx="41.5" cy="56.5" r="1.2" fill="white"/>
    <circle cx="61.5" cy="56.5" r="1.2" fill="white"/>
    ${mouth}
    <circle cx="34" cy="68" r="3" fill="#FBBF24" opacity="0.7"/>
    <circle cx="66" cy="68" r="3" fill="#FBBF24" opacity="0.7"/>
  </svg>`;
}

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
function nav(hash){ location.hash = hash; }
if(window.__hhHashListener) window.removeEventListener('hashchange', window.__hhHashListener);
window.__hhHashListener = function(){ if(!location.hash.startsWith('#/hh')) return; render(); };
window.addEventListener('hashchange', window.__hhHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/hh\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='🔬';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">From tiffin box to green school</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Discover <span class="text-gradient-aurora">health & habitat.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From detective work on food and microbes to making your school a happy, green place — four worlds explore wellbeing all around us.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Begin the journey →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Explorer</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Explorer" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter Health & Habitat Quest →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Explorer', avatar); render(); };
  draw();
}

/* ---------------- HOME (Adventure Map) ---------------- */
function renderHome(){
  const lv = levelNum(STATE.xp), frac = levelFrac(STATE.xp);
  const lessonsDone = Object.values(STATE.progress).filter(p=>p.stars>0).length;
  app.innerHTML = `${Nav()}<main>
    <div class="glass-strong rounded-3xl" style="padding:18px;display:flex;align-items:center;gap:16px">
      <div style="font-size:44px;width:60px;height:60px;border-radius:16px;background:#34d39933;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px -6px #34d39988">${STATE.avatar}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Health & Habitat Explorer</div>
        <div class="font-display" style="font-size:22px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${STATE.name}</div>
        <div class="progress-track" style="margin-top:6px;height:8px"><div class="progress-fill" style="width:${frac*100}%"></div></div>
      </div>
      <div style="text-align:right">
        <div class="pillbox" style="background:#34d39933;border:1px solid #34d39955">Lv ${lv}</div>
        <div style="margin-top:4px"><span class="pillbox" style="background:#fde68a33;border:1px solid #fde68a55">⭐ ${STATE.xp}</span></div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:14px">
      <div class="stat-tile"><div style="font-size:22px">🪙</div><div class="font-display" style="font-size:18px">${STATE.coins}</div><div style="font-size:10px;color:var(--muted);text-transform:uppercase">Coins</div></div>
      <div class="stat-tile"><div style="font-size:22px">🔥</div><div class="font-display" style="font-size:18px">${STATE.streak}d</div><div style="font-size:10px;color:var(--muted);text-transform:uppercase">Streak</div></div>
      <div class="stat-tile"><div style="font-size:22px">🏆</div><div class="font-display" style="font-size:18px">${lessonsDone}/${TOTAL_LEVELS}</div><div style="font-size:10px;color:var(--muted);text-transform:uppercase">Lessons</div></div>
    </div>
    <div style="margin-top:26px;display:flex;align-items:center;gap:14px">
      ${mascotSvg('happy',68)}
      <div class="glass rounded-2xl" style="padding:12px 16px;flex:1">
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Hariyali</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to explore health and habitat?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedHh(i);
        const needsReview = worldNeedsReviewHh(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/hh/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewHh();return false;"` : '';
        const stateClass = unlocked ? '' : (needsReview ? 'needs-review' : 'locked');
        return `<a class="world-card glass-strong ${stateClass}" href="${href}" ${clickAttr}>
          <div class="glow" style="background:${w.gradient}"></div>
          <div style="position:relative;display:flex;align-items:flex-start;gap:12px">
            <div style="font-size:36px">${unlocked?w.emoji:(needsReview?'📝':w.emoji)}</div>
            <div style="flex:1">
              <div style="font-size:10px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:.06em">World ${w.id}</div>
              <div class="font-display" style="font-size:20px">${w.title}</div>
              <div style="font-size:12.5px;color:var(--muted)">${needsReview?'Tap to take the Module Review →':w.subtitle}</div>
            </div>
            ${unlocked?'':(needsReview?'':'<div style="font-size:22px">🔒</div>')}
          </div>
          <div style="position:relative;margin-top:14px">
            <div style="display:flex;justify-content:space-between;font-size:12px;opacity:.85;margin-bottom:6px"><span>${completed}/${w.levels.length} levels</span><span>${Math.round(pct)}%</span></div>
            <div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:${w.gradient}"></div></div>
          </div>
        </a>`;
      }).join('')}
    </div>
    <div style="margin-top:30px;display:flex;justify-content:space-between;font-size:12px;color:var(--muted)">
      <button onclick="if(confirm('Reset all progress?')) __resetAll()">Reset progress</button>
      <span>Our Wondrous World</span>
    </div>
  </main>`;
  window.__resetAll = resetSave;
}

/* ---------------- WORLD (level select) ---------------- */
function renderWorld(slug){
  const w = WORLDS.find(w=>w.slug===slug);
  if(!w){ nav('#/hh/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedHh(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/hh/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
    <div class="glass-strong rounded-3xl world-card" style="margin-top:12px">
      <div class="glow" style="background:${w.gradient}"></div>
      <div style="position:relative">
        <div style="font-size:44px">${w.emoji}</div>
        <div style="font-size:11px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-top:8px">World ${w.id}</div>
        <h1 class="font-display" style="font-size:30px;margin:2px 0">${w.title}</h1>
        <p style="color:var(--muted);margin:0">${w.subtitle}</p>
      </div>
    </div>
    <div style="margin-top:20px;display:grid;gap:12px">
      ${w.levels.map((lv,i)=>{
        const key = progKey(w.id, lv.id);
        const info = STATE.progress[key];
        const prevInfo = i===0 ? {stars:3} : STATE.progress[progKey(w.id, w.levels[i-1].id)];
        const unlocked = i===0 || (prevInfo?.stars??0)>0 || (info?.stars??0)>0;
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/hh/lesson/'+w.id+'/'+lv.id:'#'}">
          <div class="lesson-icon" style="${lv.isBoss?'background:#f26d6d55;box-shadow:0 0 20px -4px #f26d6d':'background:linear-gradient(135deg,'+(w.gradient.match(/#\\w+/g)?.[0]||'#34d399')+'55, transparent)'}">${lv.isBoss?'👹':lv.id}</div>
          <div style="flex:1;min-width:0">
            <div style="display:flex;align-items:center;gap:8px">
              <div class="font-display" style="font-size:17px">${lv.title}</div>
              ${lv.isBoss?'<span style="font-size:9px;font-weight:900;padding:2px 8px;border-radius:999px;background:#f26d6d55;border:1px solid #f26d6d88;text-transform:uppercase;letter-spacing:.06em">Boss</span>':''}
            </div>
            <div style="font-size:12px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${lv.intro}</div>
            <div style="margin-top:5px;display:flex;gap:2px;font-size:17px">${[1,2,3].map(n=>`<span style="${n<=(info?.stars??0)?'color:var(--gold)':'opacity:.25'}">★</span>`).join('')}</div>
          </div>
          ${unlocked?'':'<div style="font-size:22px">🔒</div>'}
        </a>`;
      }).join('')}
    </div>
  </main>`;
}

/* ---------------- LESSON PLAYER ---------------- */
function renderLesson(worldId, levelId){
  const w = WORLDS.find(w=>w.id===worldId);
  const lv = w?.levels.find(l=>l.id===levelId);
  if(!w||!lv){ nav('#/hh/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedHh(wIdx)){ renderHome(); return; }
  const P = lv.questions.length;
  let qi = -1, correctCount=0, wrongCount=0, combo=0, mood='happy', bossHp=100, playerHp=100, flash=null;

  function questionInner(q, onAnswer, locked, picked){
    if(q.type==='mcq'||q.type==='truefalse'||q.type==='fill'){
      return `<div class="opt-grid">${q.options.map(o=>{
        let cls='opt-btn'; if(locked){ cls += picked===o ? (o===q.answer?' right':' wrong') : (o===q.answer?' reveal':' dim'); }
        return `<button class="${cls}" ${locked?'disabled':''} onclick='__qPick(${JSON.stringify(o)})'>${o}</button>`;
      }).join('')}</div>`;
    }
    if(q.type==='mappin'){
      const spots = [{x:22,y:26},{x:73,y:20},{x:46,y:56},{x:20,y:76},{x:78,y:72},{x:50,y:14}];
      return `<div class="map-canvas">${q.options.map((o,i)=>{
        const pos = spots[i % spots.length];
        let cls='map-pin'; if(locked){ cls += picked===o ? (o===q.answer?' right':' wrong') : (o===q.answer?' reveal':' dim'); }
        return `<button class="${cls}" style="left:${pos.x}%;top:${pos.y}%" ${locked?'disabled':''} onclick='__qPick(${JSON.stringify(o)})'>
          <span class="pin-marker">📍</span><span class="pin-label">${o}</span>
        </button>`;
      }).join('')}</div>`;
    }
    if(q.type==='tap'){
      const sel = window.__tapSel || [];
      return `<div class="tap-grid">${q.options.map(o=>{
        const on = sel.includes(o), isAns = q.answer.includes(o);
        let cls='tap-btn'; if(locked) cls += isAns?' right':(on?' wrong':' dim'); else if(on) cls+=' on';
        return `<button class="${cls}" onclick='__tapToggle(${JSON.stringify(o)})'>${o}</button>`;
      }).join('')}</div>
      <button class="btn-primary" style="margin-top:18px" ${locked||!sel.length?'disabled':''} onclick="__tapCheck()">Check answer</button>`;
    }
    if(q.type==='sort'){
      const placed = window.__sortPlaced || {};
      const remaining = q.items.filter(it=>!placed[it.label]);
      return `
        ${remaining.length?`<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px">${remaining.map(it=>`
          <div class="chip" style="display:flex;align-items:center;gap:6px">${it.emoji} ${it.label}
            <span style="display:flex;gap:3px;margin-left:6px">${q.buckets.map(b=>`<button class="roundbtn" style="width:22px;height:22px;font-size:11px" onclick='__sortPlace(${JSON.stringify(it.label)},${JSON.stringify(b.id)})' title="${b.label}">${b.emoji}</button>`).join('')}</span>
          </div>`).join('')}</div>`:''}
        <div class="bucket-grid" style="grid-template-columns:repeat(${q.buckets.length},1fr)">
          ${q.buckets.map(b=>{
            const inBucket = q.items.filter(it=>placed[it.label]===b.id);
            return `<div class="bucket"><div class="lbl">${b.emoji} ${b.label}</div><div style="display:flex;flex-wrap:wrap;gap:6px">${inBucket.map(it=>{
              const right = it.bucket===b.id;
              return `<button class="chip ${locked?(right?'right':'wrong'):''}" ${locked?'disabled':''} onclick='__sortRemove(${JSON.stringify(it.label)})'>${it.emoji} ${it.label}</button>`;
            }).join('')}</div></div>`;
          }).join('')}
        </div>
        <button class="btn-primary" style="margin-top:18px" ${locked||remaining.length?'disabled':''} onclick="__sortCheck()">Check answer</button>`;
    }
    if(q.type==='order'){
      const cur = window.__orderCur || q.steps;
      return `<ol style="list-style:none;padding:0;margin:0">${cur.map((s,i)=>{
        const correctIdx = q.steps.indexOf(s);
        let cls='order-item'; if(locked) cls += correctIdx===i?' right':' wrong';
        return `<li class="${cls}" draggable="${locked?'false':'true'}" ondragstart="__orderDragStart(event,${i})" ondragover="event.preventDefault()" ondrop="__orderDrop(event,${i})" style="cursor:${locked?'default':'grab'}"><span class="order-num">${i+1}</span><span style="flex:1;font-size:14px;font-weight:600">${s}</span>
          <span style="display:flex;gap:4px"><button class="roundbtn" ${locked?'disabled':''} onclick="__orderMove(${i},-1)">↑</button><button class="roundbtn" ${locked?'disabled':''} onclick="__orderMove(${i},1)">↓</button></span></li>`;
      }).join('')}</ol>
      <button class="btn-primary" style="margin-top:18px" ${locked?'disabled':''} onclick="__orderCheck()">Check answer</button>`;
    }
    return '';
  }

  function drawQuestion(){
    const q = lv.questions[qi];
    const locked = window.__locked||false;
    const picked = window.__picked;
    const correct = window.__lastCorrect;
    app.innerHTML = `${Nav()}<main>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
        <a href="#/hh/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
        <div class="progress-track" style="flex:1;height:12px"><div class="progress-fill" style="width:${qi/P*100}%"></div></div>
        <div style="font-size:13px;font-weight:800;color:var(--gold)">🔥 ${combo}</div>
      </div>
      ${lv.isBoss?`<div class="glass-strong rounded-3xl" style="padding:16px;margin-bottom:16px">
        <div style="display:flex;align-items:center;gap:12px">
          <div style="font-size:38px">👹</div>
          <div style="flex:1"><div class="font-display">${lv.bossName}</div><div class="hpbar"><div class="f" style="width:${Math.max(0,bossHp)}%;background:linear-gradient(90deg,#F26D6D,#B91C1C)"></div></div></div>
        </div>
        <div style="display:flex;align-items:center;gap:12px;margin-top:12px">
          <div style="font-size:30px">🛡️</div>
          <div style="flex:1"><div style="font-size:10px;font-weight:800;color:var(--muted);text-transform:uppercase">You</div><div class="hpbar"><div class="f" style="width:${Math.max(0,playerHp)}%;background:linear-gradient(90deg,#7CE495,#22C55E)"></div></div></div>
        </div>
      </div>`:''}
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">${mascotSvg(mood,50)}<div style="font-size:12px;color:var(--muted)">Question ${qi+1} of ${P}</div></div>
      <div class="glass-strong rounded-3xl shadow-glow" style="padding:20px">
        <h3 class="font-display" style="font-size:20px;margin:0 0 14px">${q.prompt}</h3>
        <div id="qbody">${questionInner(q, null, locked, picked)}</div>
        ${locked?`<div class="explain ${correct?'right':'wrong'}"><div style="font-weight:800">${correct?'✨ Correct!':'💫 Almost!'}</div><div style="margin-top:4px;opacity:.9">${q.explanation}</div></div>`:''}
      </div>
    </main>`;
  }
  function drawIntro(){
    app.innerHTML = `${Nav()}<main>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
        <a href="#/hh/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
        <div class="progress-track" style="flex:1;height:12px"><div class="progress-fill" style="width:0%"></div></div>
      </div>
      <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
        <div style="display:flex;justify-content:center;margin-bottom:12px">${mascotSvg('cheer',100)}</div>
        <div class="text-gradient-aurora" style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em">${lv.isBoss?'Boss Battle':'Lesson '+lv.id}</div>
        <h1 class="font-display" style="font-size:28px;margin:4px 0 0">${lv.title}</h1>
        <p style="color:var(--muted);margin-top:10px">${lv.intro}</p>
        <button class="btn-primary" style="margin-top:22px" onclick="__lessonStart()">${lv.isBoss?'Begin the battle ⚔️':"Let's go →"}</button>
      </div>
    </main>`;
  }
  function drawSummary(){
    const ratio = correctCount/P;
    const xpEarned = correctCount*12 + (ratio===1?50:0);
    completeLevel(w.id, lv.id, ratio, xpEarned);
    const stars = ratio>=.95?3:ratio>=.75?2:+(ratio>=.5);
    const nextLevel = w.levels.find(l=>l.id===lv.id+1);
    app.innerHTML = `${Nav()}<main>
      <div class="glass-strong rounded-3xl shadow-glow" style="padding:30px;text-align:center">
        <div style="display:flex;justify-content:center">${mascotSvg('cheer',120)}</div>
        <div class="text-gradient-aurora" style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;margin-top:8px">${ratio===1?'Perfect!':ratio>=.6?'Well done!':'Keep trying!'}</div>
        <h1 class="font-display" style="font-size:28px;margin:2px 0">${lv.title} complete</h1>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:18px">
          <div class="stat-tile"><div style="font-size:20px">✅</div><div class="font-display" style="font-size:17px">${correctCount}/${P}</div><div style="font-size:10px;color:var(--muted)">Correct</div></div>
          <div class="stat-tile"><div style="font-size:20px">⭐</div><div class="font-display" style="font-size:17px">+${xpEarned}</div><div style="font-size:10px;color:var(--muted)">XP earned</div></div>
          <div class="stat-tile"><div style="font-size:20px">🔥</div><div class="font-display" style="font-size:17px">${combo||correctCount}</div><div style="font-size:10px;color:var(--muted)">Best combo</div></div>
        </div>
        <div style="margin-top:14px;display:flex;justify-content:center;gap:4px;font-size:30px">
          ${[1,2,3].map(n=>`<span style="${n<=stars?'color:var(--gold);filter:drop-shadow(0 0 10px #fde68acc)':'opacity:.25'}">★</span>`).join('')}
        </div>
        <div style="margin-top:22px;display:grid;gap:10px">
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/hh/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/hh/world/${w.slug}">Back to ${w.title}</a>
        </div>
      </div>
    </main>`;
  }

  window.__lessonStart = ()=>{ qi=0; window.__locked=false; window.__picked=null; window.__tapSel=[]; window.__sortPlaced={}; window.__orderCur=shuffle(lv.questions[0].steps||[]); drawQuestion(); };
  function afterAnswer(correct){
    if(correct){ correctCount++; combo++; mood='cheer'; if(lv.isBoss){ bossHp=Math.max(0,bossHp-Math.ceil(100/P)); } }
    else {
      wrongCount++; combo=0; mood='sad'; if(lv.isBoss) playerHp=Math.max(0,playerHp-20);
      const q = lv.questions[qi];
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('hh', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
    }
    window.__locked=true; window.__lastCorrect=correct;
    drawQuestion();
    setTimeout(()=>{ mood='happy'; }, 900);
    setTimeout(()=>{
      qi++;
      if(qi>=P){ drawSummary(); }
      else { window.__locked=false; window.__picked=null; window.__tapSel=[]; window.__sortPlaced={}; const nq=lv.questions[qi]; window.__orderCur = nq.type==='order'?shuffle(nq.steps):null; drawQuestion(); }
    }, 1400);
  }
  window.__qPick = (o)=>{ if(window.__locked) return; window.__picked=o; afterAnswer(o===lv.questions[qi].answer); };
  window.__tapToggle = (o)=>{ if(window.__locked) return; const s=window.__tapSel||[]; window.__tapSel = s.includes(o)? s.filter(x=>x!==o) : [...s,o]; drawQuestion(); };
  window.__tapCheck = ()=>{ const q=lv.questions[qi]; const sel=new Set(window.__tapSel||[]); const correct = sel.size===q.answer.length && q.answer.every(a=>sel.has(a)); afterAnswer(correct); };
  window.__sortPlace = (label, bucketId)=>{ window.__sortPlaced = {...(window.__sortPlaced||{}), [label]: bucketId}; drawQuestion(); };
  window.__sortRemove = (label)=>{ if(window.__locked) return; const p={...(window.__sortPlaced||{})}; delete p[label]; window.__sortPlaced=p; drawQuestion(); };
  window.__sortCheck = ()=>{ const q=lv.questions[qi]; const p=window.__sortPlaced||{}; const correct = q.items.every(it=>p[it.label]===it.bucket); afterAnswer(correct); };
  window.__orderMove = (i,d)=>{ if(window.__locked) return; const arr=[...window.__orderCur]; const j=i+d; if(j<0||j>=arr.length) return; [arr[i],arr[j]]=[arr[j],arr[i]]; window.__orderCur=arr; drawQuestion(); };
  window.__orderCheck = ()=>{ const q=lv.questions[qi]; const correct = window.__orderCur.every((s,i)=>s===q.steps[i]); afterAnswer(correct); };
  window.__orderDragStart = (ev,i)=>{ if(window.__locked) return; ev.dataTransfer.setData('text/plain', String(i)); ev.dataTransfer.effectAllowed='move'; };
  window.__orderDrop = (ev,i)=>{
    ev.preventDefault();
    if(window.__locked) return;
    const from = +ev.dataTransfer.getData('text/plain');
    if(Number.isNaN(from) || from===i) return;
    const arr=[...window.__orderCur];
    const [moved] = arr.splice(from,1);
    arr.splice(i,0,moved);
    window.__orderCur=arr;
    drawQuestion();
  };

  qi=-1; drawIntro();
}

/* ============================== INIT ============================== */
render();

}
window.SubjectApps = window.SubjectApps || {};
window.SubjectApps['hh'] = { init: hhInit };
