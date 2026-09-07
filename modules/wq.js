function wqInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"water-forms","title":"Water's Many Forms","subtitle":"Freshwater & Saltwater · Forms of Water · Groundwater","emoji":"💧","gradient":"linear-gradient(135deg,#38BDF8 0%,#0C4A6E 100%)","glow":"#38BDF8","levels":[
  {"id":1,"title":"Freshwater & Saltwater","intro":"Most of Earth is covered in water — but how much of it can we actually drink?","questions":[
    {"type":"mcq","prompt":"Although most of Earth's surface is covered with water, most of it is salty, leaving only a small amount of ______.","options":["freshwater","ice","vapour","groundwater"],"answer":"freshwater","explanation":"All living beings depend on this small amount of freshwater to survive."},
    {"type":"mcq","prompt":"If all the water on Earth were in a glass, how much of it would be freshwater, according to the chapter's comparison?","options":["Only as much as in a teaspoon","About half the glass","Almost all of it","None at all"],"answer":"Only as much as in a teaspoon","explanation":"This striking comparison shows just how limited freshwater really is."},
    {"type":"mcq","prompt":"Vast flatlands in Gujarat where seawater is dried to collect salt are called ______.","options":["salt pans","johads","matkas","reservoirs"],"answer":"salt pans","explanation":"Gujarat's salt pans are one of the largest salt-producing areas in India."}
  ]},
  {"id":2,"title":"Forms of Water","intro":"Water is a shape-shifter — ice, liquid, and vapour, always on the move.","questions":[
    {"type":"mcq","prompt":"Water exists in three different forms: liquid, solid (as in ice) and ______.","options":["vapour (as in steam)","sand","light","gas only"],"answer":"vapour (as in steam)","explanation":"Water can change between these three forms depending on temperature."},
    {"type":"mcq","prompt":"In the water cycle, what causes water from oceans and rivers to turn into water vapour?","options":["The Sun's heat","The Moon's gravity","Cold temperatures","Wind alone"],"answer":"The Sun's heat","explanation":"Heat causes water to evaporate and rise into the sky as vapour."},
    {"type":"mcq","prompt":"The constant circular movement of water in nature — evaporating, forming clouds, and falling as rain, snow or hail — is called the ______.","options":["water cycle","food chain","rock cycle","carbon cycle"],"answer":"water cycle","explanation":"This cycle keeps water moving between the sky, land and sea."}
  ]},
  {"id":3,"title":"Groundwater","intro":"Where does rainwater go after it soaks into the earth?","questions":[
    {"type":"mcq","prompt":"Water that sinks through layers of soil and rocks and gets stored deep underground is called ______.","options":["groundwater","surface water","seawater","rainwater"],"answer":"groundwater","explanation":"We access groundwater through wells, borewells and handpumps."},
    {"type":"mcq","prompt":"Which of these structures help rainwater soak into the ground and recharge groundwater?","options":["Soak pits, ponds and trees","Concrete roads","Paved parking lots","Cemented rooftops"],"answer":"Soak pits, ponds and trees","explanation":"Open, uncovered areas allow water to seep into the ground more easily."},
    {"type":"mcq","prompt":"'Johads' in Rajasthan are traditional small earthen dams built to ______.","options":["collect rainwater and recharge groundwater","store food grains","generate electricity","block rivers permanently"],"answer":"collect rainwater and recharge groundwater","explanation":"These traditional structures are still valued for water conservation today."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Cycle","intro":"The Water Keeper tests your understanding of water's many forms and journeys!","isBoss":true,"bossName":"The Water Keeper","questions":[
    {"type":"mcq","prompt":"Which structures do we dig to draw groundwater for our use?","options":["Wells, borewells, tube wells and handpumps","Only rivers","Only lakes","Only oceans"],"answer":"Wells, borewells, tube wells and handpumps","explanation":"These structures help bring underground water up for daily use."},
    {"type":"truefalse","prompt":"In cities with many cemented surfaces, rainwater cannot easily go into the ground, which stops groundwater from being recharged.","options":["True","False"],"answer":"True","explanation":"This is why open, green spaces are important for groundwater recharge."},
    {"type":"mcq","prompt":"What did the mustard seed activity in the chapter demonstrate about rivers?","options":["Water flows, stops or curves according to the shape of the land","Water always flows in a straight line","Water never changes direction","Rivers only flow uphill"],"answer":"Water flows, stops or curves according to the shape of the land","explanation":"The seeds followed the slopes and folds of the paper, just like rivers follow land formations."}
  ]}
]},
{"id":2,"slug":"life-in-water","title":"Life in Water","subtitle":"Rivers of India · Freshwater Habitats · Aquatic Plants","emoji":"🐸","gradient":"linear-gradient(135deg,#34D399 0%,#065F46 100%)","glow":"#34D399","levels":[
  {"id":1,"title":"Rivers of India","intro":"From mountain peaks to distant seas, India's rivers carve their own paths.","questions":[
    {"type":"mcq","prompt":"A river often begins its journey high up in the ______ and flows down across the land.","options":["mountains","deserts","oceans","cities"],"answer":"mountains","explanation":"Gravity pulls the water down across the land as the river flows."},
    {"type":"mcq","prompt":"Some rivers in India flow towards the Bay of Bengal, while others flow towards the ______.","options":["Arabian Sea","Pacific Ocean","Atlantic Ocean","Indian Ocean only"],"answer":"Arabian Sea","explanation":"The direction depends on the shape of the land and mountain ranges."},
    {"type":"mcq","prompt":"The Luni river, originating in the Aravalli Range, is unique because it does not drain into a sea but instead ends in the marshy lands of the ______.","options":["Rann of Kutch","Sundarbans","Thar Desert dunes","Deccan Plateau"],"answer":"Rann of Kutch","explanation":"This makes the Luni one of the few major Indian rivers that does not reach the sea."}
  ]},
  {"id":2,"title":"Freshwater Habitats","intro":"A pond may look calm, but it is full of specially adapted life.","questions":[
    {"type":"mcq","prompt":"Which of these is a key difference between animals on land and animals in water, as discussed in the chapter?","options":["Water animals often have fins to swim, while land animals cannot breathe in water","Land animals always live longer","Water animals cannot move at all","There is no real difference"],"answer":"Water animals often have fins to swim, while land animals cannot breathe in water","explanation":"These adaptations help each type of animal survive in its own habitat."},
    {"type":"mcq","prompt":"The Water Scorpion, an insect that lives underwater, breathes using a ______.","options":["tail tube","gill on its back","nose","pair of lungs"],"answer":"tail tube","explanation":"This tube lets it reach the surface for air while staying mostly underwater."},
    {"type":"mcq","prompt":"Which water bird, with long legs, stands still to catch fish?","options":["Pond Heron","Dragonfly","Water Snake","Freshwater Turtle"],"answer":"Pond Heron","explanation":"Its stillness helps it catch fish by surprise."}
  ]},
  {"id":3,"title":"Aquatic Plants","intro":"Plants in water have their own clever ways of surviving.","questions":[
    {"type":"mcq","prompt":"Lotus and Water Lily are examples of ______ plants — their flowers float on water while their roots stay in the pond bed.","options":["rooted floating","free-floating","edge","underwater"],"answer":"rooted floating","explanation":"This is different from plants that float freely without being rooted."},
    {"type":"mcq","prompt":"Water Hyacinth is an example of a ______ plant that grows and spreads quickly across the surface of water.","options":["free-floating","rooted floating","edge","underground"],"answer":"free-floating","explanation":"It is not attached to the pond bed at all."},
    {"type":"mcq","prompt":"The waxy coating on the leaves of water plants like the lotus makes them ______.","options":["waterproof, so they do not get damaged by too much water","edible for humans","transparent","magnetic"],"answer":"waterproof, so they do not get damaged by too much water","explanation":"This helps the plant stay healthy in its wet environment."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Pond","intro":"The Wetland Warden tests your knowledge of freshwater life!","isBoss":true,"bossName":"The Wetland Warden","questions":[
    {"type":"mcq","prompt":"Wular Lake in Jammu and Kashmir, one of the largest freshwater lakes in Asia, helps regulate river flow to prevent ______.","options":["floods","droughts","earthquakes","landslides"],"answer":"floods","explanation":"Large lakes like Wular can absorb excess water during heavy rains."},
    {"type":"mcq","prompt":"The 'Who Eats Whom' river food chain activity in the chapter helps students understand ______.","options":["how living things depend on each other for food","how to build a dam","how rivers change shape","how to make paper"],"answer":"how living things depend on each other for food","explanation":"This activity shows how removing one species can affect the whole chain."},
    {"type":"mcq","prompt":"Why is it important to have such a rich variety of plants and animals living in and around freshwater habitats?","options":["Because freshwater is essential for supporting many forms of life on Earth","Because freshwater habitats have no real ecological value","Because only humans depend on freshwater","Because ponds are not connected to the water cycle"],"answer":"Because freshwater is essential for supporting many forms of life on Earth","explanation":"Freshwater habitats sustain a huge diversity of plants and animals."}
  ]}
]},
{"id":3,"slug":"godavari","title":"The Godavari's Journey","subtitle":"Birth of a River · A Sacred and Perennial River · Supporting Lives","emoji":"🏞️","gradient":"linear-gradient(135deg,#FBBF24 0%,#92400E 100%)","glow":"#FBBF24","levels":[
  {"id":1,"title":"Birth of a River","intro":"Follow the Godavari from a small stream in the Western Ghats to a mighty river.","questions":[
    {"type":"mcq","prompt":"The river Godavari begins its journey high up in the Western Ghats at ______ in Maharashtra.","options":["Trimbakeshwar","Nashik city centre","Mumbai","Pune"],"answer":"Trimbakeshwar","explanation":"From here, it grows wider and stronger as tributaries join it."},
    {"type":"mcq","prompt":"The smaller streams that join a river as it moves across the land, making it wider and stronger, are called its ______.","options":["tributaries","deltas","estuaries","reservoirs"],"answer":"tributaries","explanation":"The Godavari has several important tributaries, like the Indravati and Manjira."},
    {"type":"mcq","prompt":"The Godavari is the second longest river in India after which river?","options":["Ganga","Yamuna","Krishna","Narmada"],"answer":"Ganga","explanation":"The Godavari travels 1,465 kilometres before joining the Bay of Bengal."}
  ]},
  {"id":2,"title":"A Sacred and Perennial River","intro":"Why is the Godavari called 'Dakshina Ganga'?","questions":[
    {"type":"mcq","prompt":"The Godavari is called 'Dakshina Ganga' because it flows through southern India and is regarded as ______.","options":["sacred","polluted","seasonal","artificial"],"answer":"sacred","explanation":"Many stories from the Ramayana and Puranas are connected to the Godavari."},
    {"type":"mcq","prompt":"A river that flows all year round, like the Godavari, is called a ______ river.","options":["perennial","seasonal","artificial","underground"],"answer":"perennial","explanation":"Seasonal rivers, by contrast, only flow during the rainy season."},
    {"type":"mcq","prompt":"Where the Godavari spreads into many small streams as it meets the sea, forming the Coringa Mangrove Forests, is called a ______.","options":["delta","tributary","reservoir","dam"],"answer":"delta","explanation":"This is where the river's freshwater meets the salty sea."}
  ]},
  {"id":3,"title":"Supporting Lives","intro":"Every day, the Godavari supports millions of people along its banks.","questions":[
    {"type":"mcq","prompt":"According to the chapter, what does the Godavari provide to the many towns and villages around it?","options":["Water for drinking, cooking, washing, farming and factories","Only electricity","Only transportation","Nothing of real value"],"answer":"Water for drinking, cooking, washing, farming and factories","explanation":"The river supports countless livelihoods along its course."},
    {"type":"mcq","prompt":"There are more than how many dams that store the Godavari's water for use during dry seasons?","options":["900","90","9,000","9"],"answer":"900","explanation":"These dams help provide water for drinking, farming and electricity."},
    {"type":"mcq","prompt":"What is one major downside of building a dam, according to the chapter?","options":["It floods land that was once home to animals and people, forcing them to relocate","It always makes rivers dirtier","It has no effect on nearby communities","It stops rain from falling"],"answer":"It floods land that was once home to animals and people, forcing them to relocate","explanation":"Dams help many people, but also come with real costs for local communities."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Delta","intro":"The River Sentinel tests your understanding of the Godavari's remarkable journey!","isBoss":true,"bossName":"River Sentinel","questions":[
    {"type":"mcq","prompt":"Which forests, home to tigers, barking deer and the Indian golden gecko, does the Godavari pass through?","options":["Rich forests along its course, including the Coringa Mangrove Forests at its delta","Only desert regions","No forests at all","Only the Himalayan forests"],"answer":"Rich forests along its course, including the Coringa Mangrove Forests at its delta","explanation":"These forests are home to a wide variety of wildlife."},
    {"type":"mcq","prompt":"During special events like the Godavari Pushkaram, people come from all around Nashik to ______.","options":["take a dip in the river's holy waters","build new dams","cut down forests","pollute the water"],"answer":"take a dip in the river's holy waters","explanation":"This reflects the river's deep cultural and spiritual significance."},
    {"type":"mcq","prompt":"What is the overall message of the Godavari's story about rivers and dams?","options":["Dams help many people but also have serious costs for nature and communities near the river","Dams have no impact on rivers at all","Rivers do not need to be protected","Building more dams is always beneficial with no drawbacks"],"answer":"Dams help many people but also have serious costs for nature and communities near the river","explanation":"This balanced understanding is key to using rivers wisely."}
  ]}
]},
{"id":4,"slug":"rivers-in-danger","title":"Rivers in Danger","subtitle":"Pollution · Floods · When a River Runs Dry","emoji":"🌊","gradient":"linear-gradient(135deg,#F472B6 0%,#831843 100%)","glow":"#F472B6","levels":[
  {"id":1,"title":"Pollution","intro":"Rivers give so much to us — but they need our care in return.","questions":[
    {"type":"mcq","prompt":"With more people and factories near river banks, what pollutes rivers like the Godavari?","options":["Waste, plastic and dirty water","Only rainwater","Only fish","Only sunlight"],"answer":"Waste, plastic and dirty water","explanation":"This pollution can make river water unsafe for people and animals."},
    {"type":"mcq","prompt":"When fertilisers used to grow crops get washed into a river, they can cause plants to grow so fast that they cover the surface like a ______.","options":["green blanket","rainbow","layer of ice","sheet of sand"],"answer":"green blanket","explanation":"This makes it hard for fish to breathe and for people to use the water safely."},
    {"type":"mcq","prompt":"Which government programme is helping to clean the Ganga river so it stays healthy for people, fish and birds?","options":["Namami Gange","Swachh Bharat Abhiyan","Jal Shakti Abhiyan","Digital India"],"answer":"Namami Gange","explanation":"This programme focuses specifically on cleaning and protecting the Ganga."}
  ]},
  {"id":2,"title":"Floods","intro":"A gentle river can become powerful and dangerous during heavy rain.","questions":[
    {"type":"mcq","prompt":"When there is too much rain, a river expands and can overflow its banks, causing ______.","options":["flooding of houses, fields and roads","the river to dry up completely","less water in the river","no change at all"],"answer":"flooding of houses, fields and roads","explanation":"This can cause great damage and force people to leave their homes."},
    {"type":"mcq","prompt":"According to the chapter, trees help during heavy rain by ______.","options":["slowing down rainwater and helping soil soak it up","causing more flooding","blocking all rainfall","making rivers dirtier"],"answer":"slowing down rainwater and helping soil soak it up","explanation":"Without trees, water runs off the land faster and causes more flooding."},
    {"type":"mcq","prompt":"During a flood, what should people do according to the chapter's safety tips?","options":["Get to higher ground and avoid contact with flood water","Swim through the flood water for fun","Touch fallen power lines to check if they work","Stay in the flooded area as long as possible"],"answer":"Get to higher ground and avoid contact with flood water","explanation":"Flood water can be dangerous due to contamination and hidden hazards."}
  ]},
  {"id":3,"title":"When a River Runs Dry","intro":"Too little water can cause just as many problems as too much.","questions":[
    {"type":"mcq","prompt":"In 2019, which Indian city had to run special water trains from other districts because its reservoirs dried up?","options":["Chennai","Mumbai","Delhi","Kolkata"],"answer":"Chennai","explanation":"This shows how serious water scarcity can become in a city."},
    {"type":"mcq","prompt":"Special machines that give clean water when you insert a card or coin, used in some water-scarce areas, are called ______.","options":["water ATMs","water cycles","water wheels","water pumps"],"answer":"water ATMs","explanation":"These help people access clean water more efficiently."},
    {"type":"mcq","prompt":"Which government mission works to manage water properly and help people use it wisely across India?","options":["The National Water Mission","The Namami Gange programme","The Swachh Bharat Mission","The Digital India Mission"],"answer":"The National Water Mission","explanation":"This mission encourages responsible water use nationwide."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Flow","intro":"The final challenge! Face the Flood & Drought Warden to complete Water Wonders Quest.","isBoss":true,"bossName":"Flood & Drought Warden","questions":[
    {"type":"mcq","prompt":"Which of these is a simple everyday action the chapter suggests to help save water?","options":["Turning off the tap while brushing your teeth","Leaving taps running all day","Using drinking water to wash the floor","Ignoring leaking taps"],"answer":"Turning off the tap while brushing your teeth","explanation":"Small daily actions like this can add up to real water savings."},
    {"type":"mcq","prompt":"What can happen to fish when too many plants grow on a river's surface due to fertiliser pollution?","options":["It becomes hard for fish to breathe","Fish grow much faster","Fish become immune to pollution","Nothing changes for the fish"],"answer":"It becomes hard for fish to breathe","explanation":"The overgrowth of plants can choke the oxygen supply in the water."},
    {"type":"mcq","prompt":"What is the overall lesson from the chapter about rivers like the Godavari?","options":["Water is a limited and shared resource which must be used wisely and protected","Rivers can never be harmed by human activity","Only dams are important for managing rivers","Pollution and floods have no real solutions"],"answer":"Water is a limited and shared resource which must be used wisely and protected","explanation":"This is the central message that ties the whole story of the Godavari together."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.WQ_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.WQ_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['💧','🐸','🏞️','🌊','🐟','🪷'];

/* ============================== STATE ============================== */
const STORE_KEY = 'water-wonders-quest-v1';
function defaultState(){ return {avatar:'💧', name:'Jal Mitra', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldWq(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('wq', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedWq(i){
  const active = activeUnreviewedWorldWq();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewWq(i){
  const active = activeUnreviewedWorldWq();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewWq = ()=>{
  const active = activeUnreviewedWorldWq();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'wq',
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
  const mouth = sad ? `<path d="M42 70 Q 50 63, 58 70" stroke="#0c3a4a" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    : mood==='think' ? `<circle cx="50" cy="70" r="2" fill="#0c3a4a"/>`
    : `<path d="M42 68 Q 50 78, 58 68" stroke="#0c3a4a" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(56,189,248,0.55))">
    <defs>
      <radialGradient id="mDrop" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#E0F2FE"/><stop offset="60%" stop-color="#7DD3FC"/><stop offset="100%" stop-color="#0369A1"/>
      </radialGradient>
      <radialGradient id="mGlowWq" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#BAE6FD" stop-opacity="0.7"/><stop offset="100%" stop-color="#BAE6FD" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowWq)"/>
    <path d="M50 12 C 65 35, 78 52, 78 65 C 78 82, 65 92, 50 92 C 35 92, 22 82, 22 65 C 22 52, 35 35, 50 12 Z" fill="url(#mDrop)" stroke="#0369A1" stroke-width="2"/>
    <ellipse cx="40" cy="62" rx="4" ry="${sad?2:5}" fill="#0c3a4a"/>
    <ellipse cx="60" cy="62" rx="4" ry="${sad?2:5}" fill="#0c3a4a"/>
    <circle cx="41.5" cy="60.5" r="1.2" fill="white"/>
    <circle cx="61.5" cy="60.5" r="1.2" fill="white"/>
    ${mouth}
    <circle cx="34" cy="72" r="3" fill="#67E8F9" opacity="0.7"/>
    <circle cx="66" cy="72" r="3" fill="#67E8F9" opacity="0.7"/>
  </svg>`;
}

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
function nav(hash){ location.hash = hash; }
if(window.__wqHashListener) window.removeEventListener('hashchange', window.__wqHashListener);
window.__wqHashListener = function(){ if(!location.hash.startsWith('#/wq')) return; render(); };
window.addEventListener('hashchange', window.__wqHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/wq\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='💧';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">Every drop counts</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Discover <span class="text-gradient-aurora">water's wondrous journey.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From tiny raindrops to mighty rivers, from freshwater habitats to floods and droughts — four worlds explore the essence of life itself.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Begin the journey →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Jal Mitra</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Jal Mitra" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter Water Wonders Quest →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Jal Mitra', avatar); render(); };
  draw();
}

/* ---------------- HOME (Adventure Map) ---------------- */
function renderHome(){
  const lv = levelNum(STATE.xp), frac = levelFrac(STATE.xp);
  const lessonsDone = Object.values(STATE.progress).filter(p=>p.stars>0).length;
  app.innerHTML = `${Nav()}<main>
    <div class="glass-strong rounded-3xl" style="padding:18px;display:flex;align-items:center;gap:16px">
      <div style="font-size:44px;width:60px;height:60px;border-radius:16px;background:#38bdf833;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px -6px #38bdf888">${STATE.avatar}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Water Explorer</div>
        <div class="font-display" style="font-size:22px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${STATE.name}</div>
        <div class="progress-track" style="margin-top:6px;height:8px"><div class="progress-fill" style="width:${frac*100}%"></div></div>
      </div>
      <div style="text-align:right">
        <div class="pillbox" style="background:#38bdf833;border:1px solid #38bdf855">Lv ${lv}</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Boondh</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to trace water's wondrous journey?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedWq(i);
        const needsReview = worldNeedsReviewWq(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/wq/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewWq();return false;"` : '';
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
  if(!w){ nav('#/wq/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedWq(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/wq/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/wq/lesson/'+w.id+'/'+lv.id:'#'}">
          <div class="lesson-icon" style="${lv.isBoss?'background:#f26d6d55;box-shadow:0 0 20px -4px #f26d6d':'background:linear-gradient(135deg,'+(w.gradient.match(/#\\w+/g)?.[0]||'#38bdf8')+'55, transparent)'}">${lv.isBoss?'👹':lv.id}</div>
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
  if(!w||!lv){ nav('#/wq/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedWq(wIdx)){ renderHome(); return; }
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
        <a href="#/wq/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/wq/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/wq/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/wq/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('wq', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['wq'] = { init: wqInit };
