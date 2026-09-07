function iiInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"symbols","title":"Symbols of India","subtitle":"The National Flag · Republic Day & Independence Day · Stories in Currency","emoji":"🇮🇳","gradient":"linear-gradient(135deg,#FBBF24 0%,#B45309 100%)","glow":"#FBBF24","levels":[
  {"id":1,"title":"The National Flag","intro":"Every colour and symbol on our flag carries deep meaning.","questions":[
    {"type":"mcq","prompt":"On the Indian National Flag, the saffron colour at the top stands for ______.","options":["strength and courage","peace and truth","growth and prosperity","duty (dharma)"],"answer":"strength and courage","explanation":"Each colour band on the flag has its own special meaning."},
    {"type":"mcq","prompt":"The white middle band of the National Flag stands for ______, with the blue Ashoka Chakra at its centre representing duty.","options":["peace and truth","strength and courage","growth and prosperity","unity and diversity"],"answer":"peace and truth","explanation":"The Ashoka Chakra represents dharma, or duty."},
    {"type":"mcq","prompt":"The green band at the bottom of the National Flag stands for ______.","options":["growth and prosperity","peace and truth","strength and courage","freedom and justice"],"answer":"growth and prosperity","explanation":"Together, the three colours and the chakra represent India's core values."}
  ]},
  {"id":2,"title":"Republic Day & Independence Day","intro":"Two important days remind us of India's freedom and its Constitution.","questions":[
    {"type":"mcq","prompt":"India became independent from British rule on ______.","options":["15 August 1947","26 January 1950","2 October 1947","15 August 1950"],"answer":"15 August 1947","explanation":"We celebrate this day every year as Independence Day."},
    {"type":"mcq","prompt":"On 26 January 1950, India decided to follow a special book of rules called the ______.","options":["Constitution","Panchatantra","Arthashastra","Ramayana"],"answer":"Constitution","explanation":"This is why 26 January is celebrated as Republic Day."},
    {"type":"mcq","prompt":"Why do we celebrate 26 January as Republic Day every year?","options":["Because this is when India's Constitution came into effect","Because this is when India became independent","Because this is when Gandhi ji was born","Because this is when the National Flag was first designed"],"answer":"Because this is when India's Constitution came into effect","explanation":"The Constitution is a set of rules that helps the country run smoothly."}
  ]},
  {"id":3,"title":"Stories in Currency","intro":"A simple currency note holds many hidden stories.","questions":[
    {"type":"mcq","prompt":"Whose image appears on Indian currency notes?","options":["Mahatma Gandhi","Jawaharlal Nehru","Dr. B.R. Ambedkar","Sardar Patel"],"answer":"Mahatma Gandhi","explanation":"There are actually two images of him on each note — one visible only when held to the light."},
    {"type":"mcq","prompt":"The tiny round spectacles hidden on Indian currency notes are the symbol of which nationwide mission?","options":["Swachh Bharat Abhiyan (Clean India Mission)","Digital India Mission","Jal Shakti Abhiyan","Skill India Mission"],"answer":"Swachh Bharat Abhiyan (Clean India Mission)","explanation":"Gandhi ji was very particular about cleanliness, inspiring this symbol."},
    {"type":"mcq","prompt":"What helps people with visual impairment identify different currency notes by listening to and feeling vibrations?","options":["The MANI app","The DIGIPIN system","The UPI system","Aadhaar"],"answer":"The MANI app","explanation":"This app makes currency notes more accessible for everyone."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Emblem","intro":"The Symbol Sentinel tests your knowledge of India's national symbols!","isBoss":true,"bossName":"Symbol Sentinel","questions":[
    {"type":"mcq","prompt":"The National Emblem of India shows three lions standing on a circular platform, representing ______.","options":["strength, courage and confidence","peace and unity","wealth and prosperity","only royal power"],"answer":"strength, courage and confidence","explanation":"The emblem also features the Ashoka Chakra beneath the lions."},
    {"type":"mcq","prompt":"Where else, besides official documents, can you also find the Ashoka Chakra?","options":["On the Aadhaar card","Only on currency notes","Only in temples","Nowhere else"],"answer":"On the Aadhaar card","explanation":"National symbols appear in many places in daily life."},
    {"type":"mcq","prompt":"About 150 years ago, the population of lions in India had gone down to only a few dozen. Where are wild lions found in India today?","options":["The Gir forests of Gujarat","The Sundarbans","The Western Ghats","The Himalayas"],"answer":"The Gir forests of Gujarat","explanation":"Conservation efforts helped India's lion population recover to several hundred today."}
  ]}
]},
{"id":2,"slug":"diversity","title":"India's Living Diversity","subtitle":"National Symbols · Languages & Headgear · Music, Dance & Togetherness","emoji":"🎭","gradient":"linear-gradient(135deg,#F472B6 0%,#831843 100%)","glow":"#F472B6","levels":[
  {"id":1,"title":"National Symbols","intro":"Every state, and the nation itself, has symbols that tell its story.","questions":[
    {"type":"mcq","prompt":"The National Animal of India, known for its mighty roar, is the ______.","options":["tiger","lion","elephant","peacock"],"answer":"tiger","explanation":"The tiger is a powerful symbol of India's wildlife heritage."},
    {"type":"mcq","prompt":"The National Bird of India, known for dancing in the rain with bright feathers, is the ______.","options":["peacock","tiger","parrot","crane"],"answer":"peacock","explanation":"The peacock's colourful display is celebrated across Indian culture."},
    {"type":"mcq","prompt":"Besides national symbols, India's individual states also have their own symbols, such as a state animal, state bird, state tree and ______.","options":["state flower","state currency","state flag","state language only"],"answer":"state flower","explanation":"These symbols reflect each state's unique natural heritage."}
  ]},
  {"id":2,"title":"Languages & Headgear","intro":"India's diversity shows in the words we speak and the way we dress.","questions":[
    {"type":"mcq","prompt":"According to the chapter, more than how many languages are spoken across India?","options":["A thousand","Ten","A hundred","Ten thousand"],"answer":"A thousand","explanation":"Each language carries its own history, songs and stories."},
    {"type":"mcq","prompt":"In Rajasthan, men traditionally wear a colourful headgear called a saafa or ______.","options":["pagri","topi","dupatta","turban only in English"],"answer":"pagri","explanation":"Headgear styles vary widely across India's different regions."},
    {"type":"mcq","prompt":"Besides tradition, what is one practical reason people wear certain kinds of headgear, like helmets?","options":["Protection from heat, cold or injury","Only for decoration","Only for religious reasons","Only for sports"],"answer":"Protection from heat, cold or injury","explanation":"Helmets, for example, are compulsory for safety on two-wheelers."}
  ]},
  {"id":3,"title":"Music, Dance & Togetherness","intro":"India's rhythms and movements are as diverse as its languages.","questions":[
    {"type":"mcq","prompt":"The chapter notes that even a simple instrument like a drum looks and sounds different in various parts of the country because it is shaped by ______.","options":["local culture, traditions and materials","only factory production methods","only the price of materials","government regulations"],"answer":"local culture, traditions and materials","explanation":"Each region's drum has its own distinct rhythm and sound."},
    {"type":"mcq","prompt":"Which musical instrument is associated with Carnatic music, according to the chapter?","options":["Mridangam","Sitar","Shehnai only in Hindustani music","Guitar"],"answer":"Mridangam","explanation":"The sitar and shehnai, by contrast, are associated with Hindustani music."},
    {"type":"mcq","prompt":"The chapter compares India's diversity to a forest, where many different plants, trees, animals and birds together make the forest ______.","options":["stronger and more beautiful","weaker and less stable","exactly identical everywhere","impossible to protect"],"answer":"stronger and more beautiful","explanation":"This comparison shows how diversity can be a source of strength."}
  ]},
  {"id":4,"title":"Boss: Guardian of Unity","intro":"The Culture Keeper tests your understanding of India's spirit of togetherness!","isBoss":true,"bossName":"Culture Keeper","questions":[
    {"type":"mcq","prompt":"Which ancient Indian belief, meaning 'the world is one family', reflects India's spirit of togetherness across its diversity?","options":["Vasudhaiva Kutumbakam","Satyameva Jayate","Ahimsa Paramo Dharma","Sarve Bhavantu Sukhinah"],"answer":"Vasudhaiva Kutumbakam","explanation":"This belief connects people across all their differences."},
    {"type":"mcq","prompt":"According to the chapter, how does the country's rich variety of languages, religions, clothing and traditions affect Indian society?","options":["People live together, helping and supporting each other despite differences","It causes constant division with no unity","It only affects a small part of the country","It has no real impact on daily life"],"answer":"People live together, helping and supporting each other despite differences","explanation":"This is the central theme of India's unity in diversity."},
    {"type":"mcq","prompt":"What is the chapter's central message about India's incredible diversity?","options":["Diversity, like threads woven together, makes the country stronger, richer and more vibrant","Diversity should be minimized for the country to succeed","Only uniformity can make a nation strong","India's diversity has no cultural value"],"answer":"Diversity, like threads woven together, makes the country stronger, richer and more vibrant","explanation":"This weaving metaphor captures the essence of the whole chapter."}
  ]}
]},
{"id":3,"slug":"islands-mangroves","title":"Islands & Mangroves","subtitle":"Andaman & Nicobar Islands · Life in the Sea · The Sundarbans","emoji":"🏝️","gradient":"linear-gradient(135deg,#38BDF8 0%,#0C4A6E 100%)","glow":"#38BDF8","levels":[
  {"id":1,"title":"Andaman & Nicobar Islands","intro":"Journey to India's southernmost tip and its unique island forests.","questions":[
    {"type":"mcq","prompt":"Indira Point, the southernmost tip of India, is part of which chain of islands?","options":["The Andaman and Nicobar Islands","The Lakshadweep Islands","The Sundarbans","The Western Ghats"],"answer":"The Andaman and Nicobar Islands","explanation":"This is a long chain of over a thousand islands."},
    {"type":"mcq","prompt":"Which birds, found only in the Andaman forests, make these forests especially unique and important to protect?","options":["The Andaman wood pigeon and Andaman hornbill","The peacock and sparrow","The rosy starling and koel","The parrot and crow"],"answer":"The Andaman wood pigeon and Andaman hornbill","explanation":"These birds are found nowhere else in the world."},
    {"type":"mcq","prompt":"Why must everyone wear a life jacket on a ferry, even if they know how to swim?","options":["Life jackets keep you afloat if you fall into the water","Life jackets are only a fashion requirement","Life jackets help you swim faster","Life jackets are not actually necessary"],"answer":"Life jackets keep you afloat if you fall into the water","explanation":"This is an important safety measure for everyone on the water."}
  ]},
  {"id":2,"title":"Life in the Sea","intro":"Beneath the waves, an entire world of coral and marine life thrives.","questions":[
    {"type":"mcq","prompt":"At the Marine Interpretation Centre, Shanti and her family learned how tiny corals give ______ to many sea creatures.","options":["shelter","food only","nothing of value","only decoration"],"answer":"shelter","explanation":"Coral reefs are vital habitats for countless marine species."},
    {"type":"mcq","prompt":"Why are the people of North Sentinel Island not visited, and why are outsiders not allowed to go there?","options":["They live like ancient hunter-gatherers and do not want visitors","There is no way to reach the island at all","The island has no people living on it","It is a heavily industrialized area"],"answer":"They live like ancient hunter-gatherers and do not want visitors","explanation":"Their way of life is respected and protected from outside contact."},
    {"type":"mcq","prompt":"In 2004, how might the people of North Sentinel Island have survived a tsunami?","options":["By noticing natural signs like changes in wind, sea and animal behaviour","By using advanced warning technology","By living far inland with no connection to the coast","By pure chance, with no connection to nature"],"answer":"By noticing natural signs like changes in wind, sea and animal behaviour","explanation":"Their deep connection with nature likely helped keep them safe."}
  ]},
  {"id":3,"title":"The Sundarbans","intro":"Where the Ganga meets the sea, a forest of mangroves comes alive.","questions":[
    {"type":"mcq","prompt":"The Sundarbans, seen where the river Ganga meets the sea, is the world's largest ______ forest.","options":["mangrove","rainforest","pine","bamboo"],"answer":"mangrove","explanation":"Mangroves grow in this wet, muddy and salty land."},
    {"type":"mcq","prompt":"Why are mangrove roots important in the Sundarbans?","options":["They hold the soil together and help stop waves from washing the land away","They have no ecological function","They only provide firewood","They prevent all fishing in the area"],"answer":"They hold the soil together and help stop waves from washing the land away","explanation":"This makes mangroves vital for protecting coastal land."},
    {"type":"mcq","prompt":"In the Sundarbans, some fishermen wear a mask on the back of their head as a safety measure against which animal?","options":["Tigers, which may get confused by the mask","Snakes","Crocodiles","Sharks"],"answer":"Tigers, which may get confused by the mask","explanation":"Tigers often attack from behind, so this mask may help confuse them."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Coast","intro":"The Coastal Keeper tests your knowledge of India's island and mangrove wonders!","isBoss":true,"bossName":"Coastal Keeper","questions":[
    {"type":"mcq","prompt":"What does the story of the Andaman Islands and the Sundarbans together teach us about India's coastal regions?","options":["They are full of unique wonders that need our care and respect","They have no unique wildlife or ecosystems","They are identical to inland regions","They do not need any protection"],"answer":"They are full of unique wonders that need our care and respect","explanation":"Both regions showcase India's remarkable natural diversity."},
    {"type":"mcq","prompt":"How do people in the Sundarbans depend on the mangrove forest, according to the chapter?","options":["They depend on it for their daily needs, living in harmony with nature for generations","They avoid the forest entirely","They only use it for tourism","They have no connection to the forest at all"],"answer":"They depend on it for their daily needs, living in harmony with nature for generations","explanation":"This deep connection has lasted for many generations."},
    {"type":"mcq","prompt":"What is a common theme between the story of North Sentinel Island and the mangroves of the Sundarbans?","options":["Both show deep, traditional connections between people and nature that help them survive","Both show that nature has no influence on human survival","Both are examples of places with no biodiversity","Both are entirely unrelated to conservation"],"answer":"Both show deep, traditional connections between people and nature that help them survive","explanation":"Traditional knowledge and nature are deeply intertwined in both places."}
  ]}
]},
{"id":4,"slug":"hills-hotspots","title":"Hills & Hotspots","subtitle":"Northeast India · The Western Ghats · Protecting the Ghats","emoji":"⛰️","gradient":"linear-gradient(135deg,#34D399 0%,#065F46 100%)","glow":"#34D399","levels":[
  {"id":1,"title":"Northeast India","intro":"Green hills, living bridges, and a deep bond with nature.","questions":[
    {"type":"mcq","prompt":"The 'Seven Sisters' states, along with which other state, make up Northeast India?","options":["Sikkim","Bihar","West Bengal","Odisha"],"answer":"Sikkim","explanation":"Together, these eight states form Northeast India."},
    {"type":"mcq","prompt":"In the Northeast, communities help protect the Hargila bird, also known as the ______.","options":["Greater Adjutant Stork","Andaman hornbill","Rosy starling","Sarus crane"],"answer":"Greater Adjutant Stork","explanation":"Local women teach children to help protect the birds' nests."},
    {"type":"mcq","prompt":"What are 'living root bridges', found in parts of Northeast India?","options":["Bridges made from the strong, grown roots of trees across streams","Bridges made entirely of steel","Bridges made of stone blocks","Bridges made of woven bamboo only"],"answer":"Bridges made from the strong, grown roots of trees across streams","explanation":"These bridges are grown and maintained over many years."}
  ]},
  {"id":2,"title":"The Western Ghats","intro":"A long chain of hills, rich with rare and unique life.","questions":[
    {"type":"mcq","prompt":"The Western Ghats are a long chain of forested hills known for their rich ______.","options":["plant and animal life","desert landscapes","glaciers","coral reefs"],"answer":"plant and animal life","explanation":"This mountain range passes through six Indian states."},
    {"type":"mcq","prompt":"Which animal, found only in the Western Ghats, is known as the lion-tailed macaque's home region?","options":["The lion-tailed macaque itself, endemic to this region","The Bengal tiger","The Asiatic lion","The snow leopard"],"answer":"The lion-tailed macaque itself, endemic to this region","explanation":"This species is not found naturally anywhere else."},
    {"type":"mcq","prompt":"According to the chapter, several important rivers of India begin from which mountain range?","options":["The Western Ghats","The Aravalli Range","The Vindhya Range","The Eastern Ghats"],"answer":"The Western Ghats","explanation":"These hills are a vital water source for much of peninsular India."}
  ]},
  {"id":3,"title":"Protecting the Ghats","intro":"How people came together to save a rare and silent forest.","questions":[
    {"type":"mcq","prompt":"The Silent Valley National Park in Kerala got its name because, unlike other rainforests, it lacks the buzzing sound of which insect?","options":["Cicadas","Mosquitoes","Bees","Crickets"],"answer":"Cicadas","explanation":"This unusual silence gave the valley its distinctive name."},
    {"type":"mcq","prompt":"The 'Save Silent Valley Movement' succeeded in stopping the construction of a ______ that would have flooded the forest.","options":["dam","highway","factory","mine"],"answer":"dam","explanation":"Villagers, students and scientists joined together to protect this special forest."},
    {"type":"mcq","prompt":"The Western Ghats have over how many protected areas, such as wildlife sanctuaries, national parks and tiger reserves?","options":["50","5","500","15"],"answer":"50","explanation":"These protected areas help keep the region's forests and rivers healthy."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Hills","intro":"The final challenge! Face the Ghats Guardian to complete Incredible India Quest.","isBoss":true,"bossName":"Ghats Guardian","questions":[
    {"type":"mcq","prompt":"Which point marks the southernmost tip of the Indian mainland, where three seas meet?","options":["Kanyakumari","Indira Point","Trimbakeshwar","Mumbai"],"answer":"Kanyakumari","explanation":"Indira Point, by contrast, is the southernmost point of India including its islands."},
    {"type":"mcq","prompt":"What lesson does the Save Silent Valley Movement teach us about protecting nature?","options":["People can save forests when they care enough to act together","Forests cannot be saved once a dam is planned","Only the government can protect forests","Movements to save nature never succeed"],"answer":"People can save forests when they care enough to act together","explanation":"Collective action made a real difference for this unique forest."},
    {"type":"mcq","prompt":"What is the overall message of 'Some Unique Places' about India's diverse ecological regions?","options":["Each region is home to unique wildlife and people who depend on and care for nature in their own way","All regions of India look and function exactly the same","Only forests need to be protected, not islands or coasts","Ecological diversity is unrelated to cultural diversity"],"answer":"Each region is home to unique wildlife and people who depend on and care for nature in their own way","explanation":"This theme ties together the islands, mangroves, hills and forests explored throughout the chapter."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.II_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.II_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['🇮🇳','🎭','🏝️','⛰️','🦚','🐯'];

/* ============================== STATE ============================== */
const STORE_KEY = 'incredible-india-quest-v1';
function defaultState(){ return {avatar:'🇮🇳', name:'Yatri', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldIi(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('ii', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedIi(i){
  const active = activeUnreviewedWorldIi();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewIi(i){
  const active = activeUnreviewedWorldIi();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewIi = ()=>{
  const active = activeUnreviewedWorldIi();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'ii',
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
  const mouth = sad ? `<path d="M42 70 Q 50 63, 58 70" stroke="#4a1c0c" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    : mood==='think' ? `<circle cx="50" cy="70" r="2" fill="#4a1c0c"/>`
    : `<path d="M42 68 Q 50 78, 58 68" stroke="#4a1c0c" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(251,191,36,0.55))">
    <defs>
      <linearGradient id="mTri" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FB923C"/><stop offset="50%" stop-color="#F8FAFC"/><stop offset="100%" stop-color="#22C55E"/>
      </linearGradient>
      <radialGradient id="mGlowIi" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FDE68A" stop-opacity="0.7"/><stop offset="100%" stop-color="#FDE68A" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowIi)"/>
    <circle cx="50" cy="55" r="32" fill="url(#mTri)" stroke="#1E3A8A" stroke-width="2"/>
    <circle cx="50" cy="55" r="7" fill="none" stroke="#1E3A8A" stroke-width="1.4"/>
    <ellipse cx="40" cy="58" rx="4" ry="${sad?2:5}" fill="#4a1c0c"/>
    <ellipse cx="60" cy="58" rx="4" ry="${sad?2:5}" fill="#4a1c0c"/>
    <circle cx="41.5" cy="56.5" r="1.2" fill="white"/>
    <circle cx="61.5" cy="56.5" r="1.2" fill="white"/>
    ${mouth}
    <circle cx="34" cy="68" r="3" fill="#38BDF8" opacity="0.7"/>
    <circle cx="66" cy="68" r="3" fill="#38BDF8" opacity="0.7"/>
  </svg>`;
}

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
function nav(hash){ location.hash = hash; }
if(window.__iiHashListener) window.removeEventListener('hashchange', window.__iiHashListener);
window.__iiHashListener = function(){ if(!location.hash.startsWith('#/ii')) return; render(); };
window.addEventListener('hashchange', window.__iiHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/ii\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='🇮🇳';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">From the flag to the far coasts</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Discover <span class="text-gradient-aurora">incredible India.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From national symbols and vibrant diversity to island forests and misty hills — four worlds explore India's incredible richness.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Begin the journey →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Yatri</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Yatri" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter Incredible India Quest →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Yatri', avatar); render(); };
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
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">India Explorer</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Tirangi</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to discover incredible India?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedIi(i);
        const needsReview = worldNeedsReviewIi(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/ii/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewIi();return false;"` : '';
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
  if(!w){ nav('#/ii/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedIi(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/ii/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/ii/lesson/'+w.id+'/'+lv.id:'#'}">
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
  if(!w||!lv){ nav('#/ii/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedIi(wIdx)){ renderHome(); return; }
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
        <a href="#/ii/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/ii/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/ii/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/ii/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('ii', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['ii'] = { init: iiInit };
