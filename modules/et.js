function etInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"what-is-energy","title":"What is Energy?","subtitle":"Defining Energy · Food & Fuel · Fuel at Home","emoji":"⚡","gradient":"linear-gradient(135deg,#FBBF24 0%,#92400E 100%)","glow":"#FBBF24","levels":[
  {"id":1,"title":"Defining Energy","intro":"What makes things move, light up, and make sounds all around us?","questions":[
    {"type":"mcq","prompt":"Energy is what makes things move, light up, produce sound, do work and ______.","options":["change temperature","disappear completely","become invisible","stop existing"],"answer":"change temperature","explanation":"Energy is behind nearly every kind of change we observe."},
    {"type":"mcq","prompt":"In the balloon activity, what happens when air rushes out of a released balloon?","options":["It pushes the balloon forward, showing how moving air generates energy","The balloon stays perfectly still","The balloon becomes heavier","Nothing observable happens"],"answer":"It pushes the balloon forward, showing how moving air generates energy","explanation":"This simple activity shows energy in action."},
    {"type":"mcq","prompt":"In the rubber band guitar activity, plucking the rubber bands makes them vibrate and produce ______.","options":["sound energy","heat energy","light energy","no energy at all"],"answer":"sound energy","explanation":"Vibrations from plucking create sound waves we can hear."}
  ]},
  {"id":2,"title":"Food & Fuel","intro":"Living things and machines both need energy — but from different sources.","questions":[
    {"type":"mcq","prompt":"According to the chapter, what gives humans and animals the energy they need to move, run and play?","options":["Food","Only sunlight","Only water","Only sleep"],"answer":"Food","explanation":"Food is the source of energy for all living things."},
    {"type":"mcq","prompt":"Just like food is a source of energy for us, what is a source of energy for cars and scooters?","options":["Fuels such as petrol and diesel","Only electricity","Only sunlight","Only air"],"answer":"Fuels such as petrol and diesel","explanation":"Vehicles need fuel just like we need food."},
    {"type":"mcq","prompt":"In the diya (lamp) activity, what acted as the fuel that helped one diya burn longer than the other?","options":["The oil","The cotton wick alone","The flat surface","The matchstick"],"answer":"The oil","explanation":"Without oil, the wick alone burns out very quickly."}
  ]},
  {"id":3,"title":"Fuel at Home","intro":"From cooking gas to firewood, fuel powers our kitchens too.","questions":[
    {"type":"mcq","prompt":"Which of these is described as a fuel commonly used for cooking in homes?","options":["Cooking gas","Only electricity","Only sunlight","Only ice"],"answer":"Cooking gas","explanation":"Some homes also use wood or coal to cook food."},
    {"type":"mcq","prompt":"What problem does the chapter mention with burning wood or coal for cooking?","options":["It creates smoke and pollution, so it must be used carefully","It has no downsides at all","It cannot cook food properly","It is completely free everywhere"],"answer":"It creates smoke and pollution, so it must be used carefully","explanation":"This is why many households are shifting to cleaner cooking fuels."},
    {"type":"mcq","prompt":"According to the chapter, our brain uses energy even when we are ______.","options":["simply sitting, sleeping or thinking","only running","only during exams","never, brains don't use energy"],"answer":"simply sitting, sleeping or thinking","explanation":"Our body constantly uses energy, even at rest."}
  ]},
  {"id":4,"title":"Boss: Guardian of Motion","intro":"The Energy Sentinel tests your understanding of energy's many forms!","isBoss":true,"bossName":"Energy Sentinel","questions":[
    {"type":"mcq","prompt":"What is the connection between the balloon rocket, the rubber band guitar and the Sun-powered water warmer activities?","options":["They all demonstrate different forms of energy — movement, sound and heat","They all demonstrate the same exact type of energy","They show that energy does not really exist","They are unrelated to the concept of energy"],"answer":"They all demonstrate different forms of energy — movement, sound and heat","explanation":"Each activity reveals a different way energy shows itself."},
    {"type":"mcq","prompt":"Batteries, used in torches and toys, are an example of ______.","options":["stored energy","food energy","fuel energy","wind energy"],"answer":"stored energy","explanation":"Our bodies also store energy for later use, similar to batteries."},
    {"type":"mcq","prompt":"What is the overall lesson of the first half of the chapter about energy?","options":["Energy is what makes our world active — from food powering us to fuel powering vehicles","Only electricity counts as real energy","Energy cannot be found in nature","Only machines need energy"],"answer":"Energy is what makes our world active — from food powering us to fuel powering vehicles","explanation":"Energy connects everything from our bodies to the machines we use."}
  ]}
]},
{"id":2,"slug":"electricity-clean","title":"Electricity & Clean Energy","subtitle":"Electricity in Daily Life · Staying Safe with Electricity · Sun, Wind & Water","emoji":"🔌","gradient":"linear-gradient(135deg,#60A5FA 0%,#1E3A8A 100%)","glow":"#60A5FA","levels":[
  {"id":1,"title":"Electricity in Daily Life","intro":"Electricity quietly powers nearly everything we do.","questions":[
    {"type":"mcq","prompt":"From the activity of listing devices at home, electricity can be used for movement, sound, light and ______.","options":["heat","taste","smell","nothing else"],"answer":"heat","explanation":"Electricity powers many different kinds of devices in our homes."},
    {"type":"mcq","prompt":"Besides homes and schools, where else does electricity play an important role, according to the chapter?","options":["Industries and factories that make things we need","Only outer space","Only underwater areas","Nowhere else"],"answer":"Industries and factories that make things we need","explanation":"Electricity powers the machines that make clothes, toys, books and more."},
    {"type":"truefalse","prompt":"Electricity is very useful, but it can also be dangerous if it is not used carefully.","options":["True","False"],"answer":"True","explanation":"This is why the chapter includes important electrical safety tips."}
  ]},
  {"id":2,"title":"Staying Safe with Electricity","intro":"A few simple rules can keep everyone safe around electricity.","questions":[
    {"type":"mcq","prompt":"What should you do if you see broken wires or fallen electric poles?","options":["Stay away and tell an adult about it immediately","Touch them to check if they are working","Play near them","Ignore them completely"],"answer":"Stay away and tell an adult about it immediately","explanation":"Broken wires can be extremely dangerous."},
    {"type":"mcq","prompt":"According to the chapter's safety tips, what should you NEVER put into electrical sockets?","options":["Fingers, pens or sticks","Nothing, sockets are always safe to touch","Only metal objects, plastic is fine","Water only"],"answer":"Fingers, pens or sticks","explanation":"This is one of the most important electrical safety rules."},
    {"type":"mcq","prompt":"Energy efficiency means using less energy to do the same work — which of these is an example given in the chapter?","options":["Using LED bulbs instead of incandescent bulbs","Leaving all lights on all day","Using more electricity for the same task","Avoiding light bulbs altogether"],"answer":"Using LED bulbs instead of incandescent bulbs","explanation":"LED bulbs give the same light while using much less electricity."}
  ]},
  {"id":3,"title":"Sun, Wind & Water","intro":"Nature itself can generate the electricity we use every day.","questions":[
    {"type":"mcq","prompt":"Solar panels capture sunlight and turn it into ______.","options":["electricity","water","wind","fuel oil"],"answer":"electricity","explanation":"Solar panels are a clean way to generate power."},
    {"type":"mcq","prompt":"Windmills spin with the wind to make ______.","options":["electricity","heat only","sound only","nothing useful"],"answer":"electricity","explanation":"Wind energy is captured through the spinning motion of windmill blades."},
    {"type":"mcq","prompt":"Fast-moving rivers or falling water can also be used to generate ______.","options":["electricity","only irrigation","only transportation","only cooling"],"answer":"electricity","explanation":"This is called hydroelectric power."}
  ]},
  {"id":4,"title":"Boss: Guardian of Clean Power","intro":"The final challenge! Face the Clean Energy Champion.","isBoss":true,"bossName":"Clean Energy Champion","questions":[
    {"type":"mcq","prompt":"Electricity generated using natural sources like wind, water or the Sun, which does not pollute the planet, is called ______.","options":["clean energy","fuel energy","fossil energy","waste energy"],"answer":"clean energy","explanation":"Clean energy sources do not release smoke or harmful gases."},
    {"type":"mcq","prompt":"Most of India's electricity historically comes from burning fuels like coal, which creates a lot of smoke and harmful gases. What is one downside of this?","options":["It pollutes the air, which is bad for health and the environment","It has absolutely no downsides","It makes electricity too expensive","It cannot power homes"],"answer":"It pollutes the air, which is bad for health and the environment","explanation":"This is why clean energy sources are becoming more important."},
    {"type":"mcq","prompt":"What is the overall message about energy at the end of the chapter?","options":["We should use and save energy wisely, choosing clean sources whenever possible","Energy use should never be questioned","Clean energy sources are not real options","Only fossil fuels can power modern life"],"answer":"We should use and save energy wisely, choosing clean sources whenever possible","explanation":"This is the central takeaway of the whole chapter."}
  ]}
]},
{"id":3,"slug":"weaving-threads","title":"Weaving & Threads","subtitle":"Nature's Weavers · Handloom Traditions · Spinning Thread","emoji":"🧵","gradient":"linear-gradient(135deg,#34D399 0%,#065F46 100%)","glow":"#34D399","levels":[
  {"id":1,"title":"Nature's Weavers","intro":"Long before humans wove cloth, nature had its own expert weavers.","questions":[
    {"type":"mcq","prompt":"Which bird is described as an expert weaver, building hanging pouch-shaped nests from grass strands crossed over and under?","options":["The male baya weaverbird","The tailorbird","The peacock","The hornbill"],"answer":"The male baya weaverbird","explanation":"Expert weaverbirds make very fine nests, while young ones make rougher ones."},
    {"type":"mcq","prompt":"Weaving combines strips or threads of material into a patterned fabric by placing one set of threads ______ and the other horizontally.","options":["vertically","diagonally only","randomly","in a circle only"],"answer":"vertically","explanation":"Crossing these two sets of threads over and under creates a unified fabric."},
    {"type":"mcq","prompt":"For a long time, people have woven natural materials like coconut fibre, palm reeds, bamboo, grass, jute, cotton and ______ into mats, baskets and cloth.","options":["silk","plastic","metal wire","glass"],"answer":"silk","explanation":"These natural materials have been used for weaving for thousands of years."}
  ]},
  {"id":2,"title":"Handloom Traditions","intro":"India's handloom weavers carry a craft that is thousands of years old.","questions":[
    {"type":"mcq","prompt":"People in India knew how to weave even how many years ago?","options":["4,000 years ago","400 years ago","40 years ago","40,000 years ago"],"answer":"4,000 years ago","explanation":"Weaving is one of India's oldest and richest traditions."},
    {"type":"mcq","prompt":"Traditional weaving done by hand on an instrument called a loom produces cloth known as ______.","options":["handloom fabric","synthetic fabric","factory fabric","plastic fabric"],"answer":"handloom fabric","explanation":"India has some of the best handloom weavers in the world."},
    {"type":"mcq","prompt":"Which of these is a traditional Indian handloom style mentioned in the chapter, along with Kanjeevaram and Ikat?","options":["Pashmina from Kashmir","Denim from Punjab","Polyester from Gujarat","Nylon from Odisha"],"answer":"Pashmina from Kashmir","explanation":"Each handloom tradition has its own unique technique and pattern."}
  ]},
  {"id":3,"title":"Spinning Thread","intro":"How does a soft ball of cotton become a strong, usable thread?","questions":[
    {"type":"mcq","prompt":"The process of twisting cotton fibres together to make thread or yarn is called ______.","options":["spinning","weaving","stitching","dyeing"],"answer":"spinning","explanation":"Spinning turns loose fibres into a strong, continuous thread."},
    {"type":"mcq","prompt":"A charkha, or spinning wheel, helps spin thread from ______.","options":["cotton","only silk","only wool","only synthetic fibres"],"answer":"cotton","explanation":"The charkha became a powerful symbol during India's freedom struggle."},
    {"type":"mcq","prompt":"Cloth made by hand-spinning cotton thread and weaving it, which became a symbol of the freedom struggle and self-sufficiency, is known as ______.","options":["khadi","muslin only","polyester","denim"],"answer":"khadi","explanation":"Gandhi ji promoted khadi as a symbol of becoming atmanirbhar, or self-sufficient."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Loom","intro":"The Weaver's Champion tests your knowledge of threads and traditions!","isBoss":true,"bossName":"Weaver's Champion","questions":[
    {"type":"mcq","prompt":"Silk thread comes from the cocoon of which insect?","options":["The silk moth","The honeybee","The spider","The tailorbird"],"answer":"The silk moth","explanation":"Silk cocoons are put in hot water to gently pull out the silk thread."},
    {"type":"mcq","prompt":"Which of these is a synthetic fibre, made by humans using artificial materials, rather than a natural fibre?","options":["Nylon","Cotton","Wool","Silk"],"answer":"Nylon","explanation":"Cotton, wool and silk are all natural fibres, unlike nylon."},
    {"type":"mcq","prompt":"What did Gandhi ji show through the practice of spinning and weaving one's own cloth?","options":["The importance of becoming self-sufficient (atmanirbhar)","That machines are always better than handwork","That cloth-making has no cultural significance","That weaving is only a modern invention"],"answer":"The importance of becoming self-sufficient (atmanirbhar)","explanation":"Khadi became a powerful symbol of this idea during the freedom struggle."}
  ]}
]},
{"id":4,"slug":"stitching-traditions","title":"Stitching & Traditions","subtitle":"Nature's Tailor · Threads with a Story · Reduce, Reuse, Recycle Cloth","emoji":"🪡","gradient":"linear-gradient(135deg,#F472B6 0%,#831843 100%)","glow":"#F472B6","levels":[
  {"id":1,"title":"Nature's Tailor","intro":"Meet the tiny bird that sews its own nest, leaf by leaf.","questions":[
    {"type":"mcq","prompt":"Which small green bird is known for stitching its own nest using plant fibres or spider silk, poking holes and pulling thread through its beak?","options":["The tailorbird","The weaverbird","The peacock","The hornbill"],"answer":"The tailorbird","explanation":"It sews the edges of a big leaf together, just like a tailor stitches cloth."},
    {"type":"mcq","prompt":"The tailorbird pads its stitched leaf 'sleeve' to make a soft and safe place to ______.","options":["lay its eggs and raise its babies","store food","hide from predators only","attract other birds"],"answer":"lay its eggs and raise its babies","explanation":"This clever nest design keeps its young safe and comfortable."},
    {"type":"mcq","prompt":"What basic sewing pattern involves going up-down-up-down in a straight line through cloth?","options":["The running stitch","The zigzag stitch","The cross stitch","The chain stitch"],"answer":"The running stitch","explanation":"This is one of the simplest and most useful stitches to learn."}
  ]},
  {"id":2,"title":"Threads with a Story","intro":"Every region of India has its own beautiful embroidery tradition.","questions":[
    {"type":"mcq","prompt":"Chikankari, a delicate embroidery style, originated from which city?","options":["Lucknow, Uttar Pradesh","Jaipur, Rajasthan","Chennai, Tamil Nadu","Kolkata, West Bengal"],"answer":"Lucknow, Uttar Pradesh","explanation":"Chikankari is known for its fine, delicate needlework."},
    {"type":"mcq","prompt":"Kantha embroidery originated from East Indian states like West Bengal, Odisha and ______.","options":["Tripura","Kerala","Gujarat","Punjab"],"answer":"Tripura","explanation":"Kantha is a traditional running-stitch embroidery style."},
    {"type":"mcq","prompt":"Phulkari, a colourful embroidery tradition, originated from which state?","options":["Punjab","Kashmir","Meghalaya","Tamil Nadu"],"answer":"Punjab","explanation":"Phulkari means 'flower work' and features vibrant floral patterns."}
  ]},
  {"id":3,"title":"Reduce, Reuse, Recycle Cloth","intro":"In India, old clothes rarely go to waste.","questions":[
    {"type":"mcq","prompt":"According to the chapter, what do people in India traditionally do with clothes that no longer fit them?","options":["Give them to a younger sibling or anyone who can use them","Always throw them away","Burn them immediately","Sell them only to strangers"],"answer":"Give them to a younger sibling or anyone who can use them","explanation":"This tradition of reuse reduces waste significantly."},
    {"type":"mcq","prompt":"There is an old Indian tradition of making beautiful ______ by joining small pieces of cloth together.","options":["quilts","curtains only","shoes","umbrellas"],"answer":"quilts","explanation":"This creative reuse turns old fabric scraps into something new and useful."},
    {"type":"mcq","prompt":"Why does the chapter emphasise that each thread in a stitched or woven piece is important?","options":["Because if one thread breaks, it can affect the strength of the whole piece","Because threads have no real function","Because only the first thread matters","Because thread colour is the only important factor"],"answer":"Because if one thread breaks, it can affect the strength of the whole piece","explanation":"This is a reminder of how connected and dependent each part of a woven piece is."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Thread","intro":"The final challenge! Face the Stitch Sentinel to complete Energy & Threads Quest.","isBoss":true,"bossName":"Stitch Sentinel","questions":[
    {"type":"mcq","prompt":"The Patola saree from Patan, Gujarat, is so complex that it can take how long to weave just one saree?","options":["6 months to 1 year","A single day","One week","10 years"],"answer":"6 months to 1 year","explanation":"This shows the incredible skill and patience behind traditional weaving."},
    {"type":"mcq","prompt":"Why is handloom weaving described as eco-friendly and sustainable in the chapter?","options":["It supports thousands of families and uses no electricity","It uses more electricity than factories","It creates more pollution than machines","It has no connection to sustainability"],"answer":"It supports thousands of families and uses no electricity","explanation":"Handloom weaving combines livelihood support with environmental friendliness."},
    {"type":"mcq","prompt":"What is the overall lesson of the 'Clothes — How Things are Made' chapter?","options":["From nature's weavers to human traditions of spinning, weaving and stitching, cloth-making combines skill, culture and creativity","Cloth can only be made by machines","Weaving and stitching have no cultural value","Natural fibres are inferior to synthetic ones"],"answer":"From nature's weavers to human traditions of spinning, weaving and stitching, cloth-making combines skill, culture and creativity","explanation":"This ties together everything explored throughout the chapter."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.ET_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.ET_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['⚡','🔌','🧵','🪡','☀️','🧶'];

/* ============================== STATE ============================== */
const STORE_KEY = 'energy-threads-quest-v1';
function defaultState(){ return {avatar:'⚡', name:'Karigar', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldEt(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('et', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedEt(i){
  const active = activeUnreviewedWorldEt();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewEt(i){
  const active = activeUnreviewedWorldEt();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewEt = ()=>{
  const active = activeUnreviewedWorldEt();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'et',
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
  const mouth = sad ? `<path d="M42 70 Q 50 63, 58 70" stroke="#4a2c0a" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    : mood==='think' ? `<circle cx="50" cy="70" r="2" fill="#4a2c0a"/>`
    : `<path d="M42 68 Q 50 78, 58 68" stroke="#4a2c0a" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(251,191,36,0.55))">
    <defs>
      <radialGradient id="mBolt" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#FEF3C7"/><stop offset="60%" stop-color="#FCD34D"/><stop offset="100%" stop-color="#D97706"/>
      </radialGradient>
      <radialGradient id="mGlowEt" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FDE68A" stop-opacity="0.7"/><stop offset="100%" stop-color="#FDE68A" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowEt)"/>
    <path d="M56 10 L30 55 H46 L40 92 L72 45 H54 Z" fill="url(#mBolt)" stroke="#D97706" stroke-width="2" opacity="0.35"/>
    <circle cx="50" cy="58" r="30" fill="url(#mBolt)" stroke="#D97706" stroke-width="2"/>
    <ellipse cx="40" cy="58" rx="4" ry="${sad?2:5}" fill="#4a2c0a"/>
    <ellipse cx="60" cy="58" rx="4" ry="${sad?2:5}" fill="#4a2c0a"/>
    <circle cx="41.5" cy="56.5" r="1.2" fill="white"/>
    <circle cx="61.5" cy="56.5" r="1.2" fill="white"/>
    ${mouth}
    <circle cx="34" cy="68" r="3" fill="#60A5FA" opacity="0.7"/>
    <circle cx="66" cy="68" r="3" fill="#60A5FA" opacity="0.7"/>
  </svg>`;
}

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
function nav(hash){ location.hash = hash; }
if(window.__etHashListener) window.removeEventListener('hashchange', window.__etHashListener);
window.__etHashListener = function(){ if(!location.hash.startsWith('#/et')) return; render(); };
window.addEventListener('hashchange', window.__etHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/et\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='⚡';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">From sunlight to thread</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Discover <span class="text-gradient-aurora">energy & threads.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From what makes things move and light up, to how cotton becomes cloth — four worlds explore the hidden processes behind everyday things.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Begin the journey →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Karigar</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Karigar" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter Energy & Threads Quest →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Karigar', avatar); render(); };
  draw();
}

/* ---------------- HOME (Adventure Map) ---------------- */
function renderHome(){
  const lv = levelNum(STATE.xp), frac = levelFrac(STATE.xp);
  const lessonsDone = Object.values(STATE.progress).filter(p=>p.stars>0).length;
  app.innerHTML = `${Nav()}<main>
    <div class="glass-strong rounded-3xl" style="padding:18px;display:flex;align-items:center;gap:16px">
      <div style="font-size:44px;width:60px;height:60px;border-radius:16px;background:#fbbf2433;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px -6px #fbbf2488">${STATE.avatar}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Energy & Threads Explorer</div>
        <div class="font-display" style="font-size:22px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${STATE.name}</div>
        <div class="progress-track" style="margin-top:6px;height:8px"><div class="progress-fill" style="width:${frac*100}%"></div></div>
      </div>
      <div style="text-align:right">
        <div class="pillbox" style="background:#fbbf2433;border:1px solid #fbbf2455">Lv ${lv}</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Urja</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to explore energy and threads?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedEt(i);
        const needsReview = worldNeedsReviewEt(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/et/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewEt();return false;"` : '';
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
  if(!w){ nav('#/et/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedEt(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/et/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/et/lesson/'+w.id+'/'+lv.id:'#'}">
          <div class="lesson-icon" style="${lv.isBoss?'background:#f26d6d55;box-shadow:0 0 20px -4px #f26d6d':'background:linear-gradient(135deg,'+(w.gradient.match(/#\\w+/g)?.[0]||'#fbbf24')+'55, transparent)'}">${lv.isBoss?'👹':lv.id}</div>
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
  if(!w||!lv){ nav('#/et/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedEt(wIdx)){ renderHome(); return; }
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
        <a href="#/et/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/et/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/et/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/et/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('et', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['et'] = { init: etInit };
