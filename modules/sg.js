function sgInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"faiths","title":"What Makes a Place Sacred?","subtitle":"Sacredness · Shrines of Many Faiths · Takhts & Stupas","emoji":"🕌","gradient":"linear-gradient(135deg,#FBBF24 0%,#92400E 100%)","glow":"#FBBF24","levels":[
  {"id":1,"title":"Understanding Sacredness","intro":"What does it mean for a place — or a journey — to be sacred?","questions":[
    {"type":"mcq","prompt":"In this chapter, 'sacredness' is described as finding something of deep religious or spiritual significance, worthy of ______.","options":["respect and reverence","monetary value","political power","scientific study"],"answer":"respect and reverence","explanation":"It can be a special location, a journey (pilgrimage), or even the land itself."},
    {"type":"mcq","prompt":"According to the chapter, sacredness can be connected with religion and spirituality, but also with ______.","options":["geography and tradition","only architecture","only economics","only politics"],"answer":"geography and tradition","explanation":"In India, sacred geography connects countless places across the land."},
    {"type":"truefalse","prompt":"Jawaharlal Nehru observed that pilgrimages across India, from north to south, reflect a feeling of one country and one culture.","options":["True","False"],"answer":"True","explanation":"He wrote this in 1961, reflecting on India's ancient pilgrimage traditions."}
  ]},
  {"id":2,"title":"Sacred Sites of Many Faiths","intro":"India is home to sacred places of religions that both began here and arrived from elsewhere.","questions":[
    {"type":"mcq","prompt":"The Dargah Sharif of Ajmer (Rajasthan) and the Velankanni Church in Tamil Nadu are visited by people of many faiths, showing that sacred sites of religions that ______ still draw diverse devotees.","options":["originated outside India","are only for one religion","have disappeared from India","have no visitors"],"answer":"originated outside India","explanation":"People from many faiths visit these shrines, not just their own."},
    {"type":"mcq","prompt":"Which religions, originating outside India, are mentioned as having revered sacred places within India?","options":["Islam, Christianity, Judaism and Zoroastrianism","Buddhism, Jainism, Sikhism and Hinduism","Only Christianity","Only Islam"],"answer":"Islam, Christianity, Judaism and Zoroastrianism","explanation":"Followers from other faiths also visit these places, even though they originated elsewhere."},
    {"type":"truefalse","prompt":"People from faiths other than the one a shrine belongs to often visit it too, as seen at the Dargah Sharif of Ajmer.","options":["True","False"],"answer":"True","explanation":"This reflects a shared reverence that crosses religious lines."}
  ]},
  {"id":3,"title":"Buddhist & Sikh Sacred Places","intro":"From Bodh Gaya's ancient tree to the Golden Temple's Akal Takht.","questions":[
    {"type":"mcq","prompt":"The Mahabodhi Stupa in Bodh Gaya is significant because, according to tradition, this is where the Buddha ______.","options":["attained enlightenment","was born","passed away","gave his first teaching"],"answer":"attained enlightenment","explanation":"It receives more than four million visitors every year."},
    {"type":"mcq","prompt":"In Sikhism, seats or centres of spiritual authority are called ______.","options":["takhts","tirthas","stupas","kshetras"],"answer":"takhts","explanation":"Examples include Takht Sri Patna Sahib and the Akal Takht."},
    {"type":"mcq","prompt":"Bodh Gaya receives more than how many visitors every year, according to the chapter?","options":["Four million","Four thousand","Four hundred","Forty million"],"answer":"Four million","explanation":"It is one of Buddhism's most important pilgrimage sites."}
  ]},
  {"id":4,"title":"Boss: Keeper of Many Faiths","intro":"The Faith Keeper watches over India's countless sacred traditions!","isBoss":true,"bossName":"Faith Keeper","questions":[
    {"type":"mcq","prompt":"The Akal Takht, one of Sikhism's important spiritual centres, is located as part of which famous site?","options":["The Golden Temple at Amritsar","The Sanchi Stupa","Bodh Gaya","Mount Abu"],"answer":"The Golden Temple at Amritsar","explanation":"Sikhs aspire to undertake pilgrimages to such takhts at least once in their lifetime."},
    {"type":"mcq","prompt":"Sikh tradition records pilgrimages by Guru Nanak to places including Haridwar, Prayag, Mathura, Varanasi, Ayodhya and ______.","options":["Puri","Rome","Mecca","Jerusalem"],"answer":"Puri","explanation":"He also visited a few Muslim shrines during his travels."},
    {"type":"mcq","prompt":"What common thread connects sacred sites of Islam, Christianity, Judaism, Zoroastrianism, Buddhism and Sikhism within India?","options":["Each has its own places of deep religious significance, often visited by pilgrims of many backgrounds","They are all located in the same city","They were all built in the same century","None of them are visited today"],"answer":"Each has its own places of deep religious significance, often visited by pilgrims of many backgrounds","explanation":"India's sacred landscape reflects an extraordinary diversity of traditions."}
  ]}
]},
{"id":2,"slug":"paths","title":"Pilgrim Paths","subtitle":"Jain Tirthas · Sabarimala & Pandharpur · Sacred Nature","emoji":"🚶","gradient":"linear-gradient(135deg,#34D399 0%,#065F46 100%)","glow":"#34D399","levels":[
  {"id":1,"title":"Jain Tirthas","intro":"For Jains, sacred places mark where the Tirthankaras found liberation.","questions":[
    {"type":"mcq","prompt":"In the Jain tradition, tirthas are associated with places where the Tirthankaras attained ______.","options":["liberation","wealth","kingship","military victory"],"answer":"liberation","explanation":"Trees, ponds, hills and mountains they visited are also considered sacred."},
    {"type":"mcq","prompt":"Which of these is NOT mentioned as a sacred Jain site in the chapter?","options":["Sabarimala","Mount Abu","Girnar","Shatrunjaya hill"],"answer":"Sabarimala","explanation":"Sabarimala is a Hindu pilgrimage site dedicated to Ayyappa, discussed separately in the chapter."},
    {"type":"mcq","prompt":"A Tirthankara is literally someone who guides the crossing from ordinary to ______ life.","options":["higher (spiritual)","urban","rural","ordinary"],"answer":"higher (spiritual)","explanation":"Tirthankaras are the supreme preachers of dharma in Jainism."}
  ]},
  {"id":2,"title":"Sabarimala & Pandharpur","intro":"Two very different pilgrimages — one an arduous hilltop trek, the other a 21-day walking tradition.","questions":[
    {"type":"mcq","prompt":"The Sabarimala temple in Kerala, dedicated to the deity Ayyappa, draws over how many devotees every year?","options":["Ten million","One million","One hundred thousand","One hundred million"],"answer":"Ten million","explanation":"It was traditionally reached by an immensely difficult trek through hills and forests."},
    {"type":"mcq","prompt":"The Pandharpur wari, an 800-year-old Maharashtra tradition, involves pilgrims walking for how many days to the Vithoba temple?","options":["21 days","3 days","100 days","1 day"],"answer":"21 days","explanation":"'Wari' means a pilgrimage held regularly, in this case annually."},
    {"type":"mcq","prompt":"The difficult trek to hilltop shrines like Sabarimala symbolises what, according to the chapter?","options":["The difficulties of the inner spiritual path","A test of wealth","A military exercise","A trade requirement"],"answer":"The difficulties of the inner spiritual path","explanation":"This challenging approach is common to many hilltop or mountain shrines in India."}
  ]},
  {"id":3,"title":"Sacred Nature — Tribal Traditions","intro":"For many tribal communities, mountains, forests and rivers are themselves living, sacred beings.","questions":[
    {"type":"mcq","prompt":"The Dongria Khond tribe considers the Niyam Dongar hill sacred as the abode of which deity?","options":["Niyam Raja","Ayyappa","Vithoba","Shiva"],"answer":"Niyam Raja","explanation":"They believe this deity provides everything they need for sustenance."},
    {"type":"mcq","prompt":"In the Nilgiris of Tamil Nadu, which tribal community regards many mountain peaks, plants and forests as sacred?","options":["The Todas","The Bhils","The Gonds","The Santhals"],"answer":"The Todas","explanation":"Their sense of sacredness extends to Shola forests, wetlands and even specific stones."},
    {"type":"truefalse","prompt":"In the early 2000s, the Government of Sikkim identified several sacred mountains, caves, lakes, rocks and hot springs to be protected against damage.","options":["True","False"],"answer":"True","explanation":"This reflects official recognition of long-standing sacred traditions."}
  ]},
  {"id":4,"title":"Boss: Guardian of Sacred Nature","intro":"Nature's Guardian protects the mountains, rivers and forests held sacred across India!","isBoss":true,"bossName":"Nature's Guardian","questions":[
    {"type":"mcq","prompt":"What underlying belief connects Hindu and many tribal traditions in seeing Nature as sacred?","options":["A perception of divine presence in all of Nature","A belief that Nature has no spiritual value","A rule that only mountains can be sacred","A law requiring worship of rivers only"],"answer":"A perception of divine presence in all of Nature","explanation":"This tradition sees mountains, rivers, trees, plants and even stones as sacred."},
    {"type":"mcq","prompt":"In this worldview, the whole of planet Earth is ultimately considered sacred and referred to as ______.","options":["Bhudevi (Mother Earth)","Saraswati","Ganga ji","Vithoba"],"answer":"Bhudevi (Mother Earth)","explanation":"This reflects a deep, unifying reverence for the planet itself."},
    {"type":"mcq","prompt":"Why is cutting trees on the Niyam Dongar hill prohibited by the Dongria Khond tribe?","options":["It is considered a sign of disrespect to their deity","It is against government law only","Trees there have no economic value","There are no trees on the hill"],"answer":"It is considered a sign of disrespect to their deity","explanation":"This belief has helped protect the hill's forests for generations."}
  ]}
]},
{"id":3,"slug":"networks","title":"Sacred Networks & Rivers","subtitle":"Char Dham · Jyotirlingas & Shakti Pithas · The Kumbh Mela","emoji":"🌊","gradient":"linear-gradient(135deg,#38BDF8 0%,#1E3A8A 100%)","glow":"#38BDF8","levels":[
  {"id":1,"title":"Char Dham, Jyotirlingas & Shakti Pithas","intro":"Sacred sites are woven into networks that stretch across the whole of India.","questions":[
    {"type":"mcq","prompt":"The Char Dham pilgrimage sites appear to have been deliberately located in which four directions of India?","options":["Southern, northern, eastern and western corners","All in the north only","All in the south only","All in one state"],"answer":"Southern, northern, eastern and western corners","explanation":"This deliberate spread encouraged pilgrims to travel across the whole country."},
    {"type":"mcq","prompt":"The 12 jyotirlingas are sacred shrines dedicated to which major Hindu deity?","options":["Shiva","Vishnu","Brahma","Ganesha"],"answer":"Shiva","explanation":"Each shrine has its own unique mythology and name."},
    {"type":"mcq","prompt":"How many Shakti Pithas cover the map of India, extending even into present-day Bangladesh and Pakistan?","options":["51","12","4","100"],"answer":"51","explanation":"These sites are believed to mark where parts of the divine mother's body fell."},
    {"type":"mcq","prompt":"According to the legend, the Shakti Pithas mark the places where the body parts of the divine mother fell after ______ used his chakra to cut up Sati's body.","options":["Vishnu","Shiva","Brahma","Indra"],"answer":"Vishnu","explanation":"This was done to calm Shiva's grief and anger after Sati's self-immolation."}
  ]},
  {"id":2,"title":"Rivers & the Nadastuti Sukta","intro":"Since Vedic times, India's rivers have been honoured as living, sacred presences.","questions":[
    {"type":"mcq","prompt":"The nadastuti sukta, a hymn from which ancient text, invokes 19 major rivers of ancient northwest India?","options":["The Rigveda","The Mahabharata","The Arthashastra","The Puranas"],"answer":"The Rigveda","explanation":"This hymn is one of the earliest recorded examples of river worship in India."},
    {"type":"mcq","prompt":"In local languages, important rivers like the Ganga and Yamuna are often referred to respectfully as ______.","options":["'ji' (e.g. Ganga ji)","just numbers","foreign names","nothing special"],"answer":"'ji' (e.g. Ganga ji)","explanation":"This honorific reflects the deep reverence rivers receive."},
    {"type":"truefalse","prompt":"Rivers have been worshipped in India since Vedic times, and their sources and tributaries are often considered sacred too.","options":["True","False"],"answer":"True","explanation":"Their sources are often pilgrimage destinations in their own right."}
  ]},
  {"id":3,"title":"The Kumbh Mela","intro":"A legend of gods, demons and a pot of immortal nectar gave rise to the world's largest gathering.","questions":[
    {"type":"mcq","prompt":"The Kumbh Mela originates in the legend of samudra manthana, where devas and asuras churned the cosmic ocean to obtain ______.","options":["amrita, the divine nectar of immortality","gold","the Vedas","weapons"],"answer":"amrita, the divine nectar of immortality","explanation":"Vishnu, as Mohini, snatched the pot (kumbha) of amrita to keep it from the asuras."},
    {"type":"mcq","prompt":"Drops of amrita are said to have fallen at four places, where the Kumbh Mela is now held. Which of these is one of them?","options":["Prayagraj","Delhi","Mumbai","Bengaluru"],"answer":"Prayagraj","explanation":"Haridwar, Nashik and Ujjain are the other three sites."},
    {"type":"mcq","prompt":"UNESCO listed the Kumbh Mela as what kind of heritage of the world?","options":["Intangible heritage","Natural heritage","Underwater heritage","Industrial heritage"],"answer":"Intangible heritage","explanation":"An estimated 660 million people participated in the Kumbh Mela of 2025."},
    {"type":"mcq","prompt":"Prayagraj is located at the confluence (sangam) of the Ganga, Yamuna and which invisible river, according to tradition?","options":["Sarasvati","Godavari","Kaveri","Narmada"],"answer":"Sarasvati","explanation":"Prayagraj hosts a Kumbh Mela every six years."}
  ]},
  {"id":4,"title":"Boss: Sentinel of Sacred Networks","intro":"The Network Sentinel challenges you to map India's sacred geography!","isBoss":true,"bossName":"Network Sentinel","questions":[
    {"type":"mcq","prompt":"What do the Char Dham, the 12 jyotirlingas and the 51 Shakti Pithas all have in common?","options":["They form pilgrimage networks that crisscross the length and breadth of India, making the land itself sacred","They are all located in a single city","They were all built in the 20th century","They are only found outside India"],"answer":"They form pilgrimage networks that crisscross the length and breadth of India, making the land itself sacred","explanation":"These networks connect distant regions through shared journeys of faith."},
    {"type":"mcq","prompt":"When pilgrims travelled across India to visit these sacred networks, what did they naturally encounter along the way?","options":["Diverse languages, customs, clothing and foods","Only silence and isolation","No other people at all","Only merchants, never pilgrims"],"answer":"Diverse languages, customs, clothing and foods","explanation":"They would notice differences, but also commonalities, along their journeys."},
    {"type":"truefalse","prompt":"This complex process of pilgrims travelling, discussing and sharing ideas became a major factor in the cultural integration of the Indian Subcontinent.","options":["True","False"],"answer":"True","explanation":"Pilgrimage routes helped weave together India's many regions and cultures."}
  ]}
]},
{"id":4,"slug":"legacy3","title":"Mountains, Trees & Legacy","subtitle":"Sacred Peaks · The Peepul Tree · Pilgrimage & Trade","emoji":"🌳","gradient":"linear-gradient(135deg,#A78BFA 0%,#4C1D95 100%)","glow":"#A78BFA","levels":[
  {"id":1,"title":"Sacred Mountains","intro":"Peaks that touch the sky have long been seen as gateways to the divine.","questions":[
    {"type":"mcq","prompt":"Mountains are often seen as a symbolic gateway from earth to heaven because of their ______.","options":["height","colour","shape only","location near rivers"],"answer":"height","explanation":"This is a belief found in many cultures around the world, not just India."},
    {"type":"mcq","prompt":"Why are many tirthas and temples located on hilltops, according to the chapter?","options":["The physical journey to the peak symbolises a journey to reach the divine","Hilltops are cheaper to build on","There is more space on hilltops","Ancient rulers required it"],"answer":"The physical journey to the peak symbolises a journey to reach the divine","explanation":"The arduous climb tests both physical ability and mental strength."},
    {"type":"truefalse","prompt":"The Maoris, indigenous people of New Zealand, regard the Taranaki Maunga mountain as their ancestor and consider it sacred.","options":["True","False"],"answer":"True","explanation":"A law recently granted this mountain the rights and responsibilities of a human being."}
  ]},
  {"id":2,"title":"The Peepul Tree & Sacred Groves","intro":"From an ancient Harappan seal to today's protected forests, one tree connects millennia.","questions":[
    {"type":"mcq","prompt":"The peepul (or bodhi) tree's botanical name, Ficus religiosa, literally means the ______ fig tree in Latin.","options":["religious (sacred)","forest","river","mountain"],"answer":"religious (sacred)","explanation":"It is sacred to Hinduism, Buddhism, Sikhism and Jainism alike."},
    {"type":"mcq","prompt":"The tree at the Mahabodhi Temple in Bodh Gaya is often cited as a direct descendant of the tree under which the Buddha ______.","options":["attained enlightenment","was born","first spoke","died"],"answer":"attained enlightenment","explanation":"This is where the names 'bodhi tree' and 'Bodh Gaya' come from."},
    {"type":"mcq","prompt":"Special forests protected by rural and tribal communities as the abodes of deities are called ______ in English.","options":["sacred groves","national parks","reserve forests","botanical gardens"],"answer":"sacred groves","explanation":"They are known by many regional names, such as 'kavu' in Malayalam and 'devarai' in Marathi."},
    {"type":"truefalse","prompt":"Sacred groves have helped shelter great biodiversity of flora and fauna, though their numbers have been shrinking due to encroachment.","options":["True","False"],"answer":"True","explanation":"Many are still protected today, but they face growing pressure from agriculture and industry."}
  ]},
  {"id":3,"title":"Pilgrimage, Trade & the World Beyond","intro":"Sacred journeys never happened in isolation — they connected people, goods and ideas.","questions":[
    {"type":"mcq","prompt":"Why did pilgrimage routes and trade routes often overlap in ancient India?","options":["Pilgrims needed goods that traders could provide, and some traders doubled as pilgrims","Traders were never allowed near sacred sites","Trade routes and pilgrimage routes never overlapped","Only pilgrims used any road"],"answer":"Pilgrims needed goods that traders could provide, and some traders doubled as pilgrims","explanation":"This overlap benefited both pilgrims and merchants."},
    {"type":"mcq","prompt":"Which ancient civilisation, besides India, is mentioned as having its own tradition of sacred mountains and groves?","options":["Ancient Greece","Ancient Egypt only","Ancient China only","No other civilisation"],"answer":"Ancient Greece","explanation":"Sacred geography is a practice found across many cultures worldwide, including Native Americans."},
    {"type":"mcq","prompt":"What modern challenge does the chapter highlight regarding India's sacred rivers, like the Yamuna, Mahanadi and Kaveri?","options":["They have become polluted despite being considered sacred","They have all dried up completely","They are no longer visited by anyone","They were never considered sacred"],"answer":"They have become polluted despite being considered sacred","explanation":"This raises questions about whose responsibility it is to preserve their sanctity."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Sacred Land","intro":"The final challenge! Bhudevi's Champion tests everything you've learned about India's sacred geography.","isBoss":true,"bossName":"Bhudevi's Champion","questions":[
    {"type":"mcq","prompt":"What is the main message of the chapter about sacred geography's relevance today?","options":["A worldview that sees Nature as sacred can make a real contribution to sustainability and conservation","Sacred geography has no relevance in modern times","Only ancient people cared about sacred places","Sacred sites should be turned into industrial zones"],"answer":"A worldview that sees Nature as sacred can make a real contribution to sustainability and conservation","explanation":"This becomes especially important as sustainability grows into a global issue."},
    {"type":"mcq","prompt":"According to environmental thinker David Suzuki, quoted in the chapter, seeing a mountain as a deity rather than 'a pile of ore' would lead people to treat the world with greater ______.","options":["respect","profit","speed","indifference"],"answer":"respect","explanation":"This reflects how our worldview shapes the way we treat the world around us."},
    {"type":"mcq","prompt":"What does the chapter suggest is 'our duty' regarding sacred places that are being polluted or neglected?","options":["To protect our national heritage, as our Constitution also reminds us","To ignore the problem","To relocate all sacred sites","To stop all pilgrimages permanently"],"answer":"To protect our national heritage, as our Constitution also reminds us","explanation":"Neglect and pollution threaten places that have been cherished for millennia."},
    {"type":"mcq","prompt":"Overall, how did sacred geography contribute to the cultural integration of the Indian Subcontinent?","options":["Pilgrimage networks connected diverse regions, languages and peoples through shared journeys, trade and the exchange of ideas","It kept every region completely isolated from others","It only affected a single small region","It had no effect on trade or culture"],"answer":"Pilgrimage networks connected diverse regions, languages and peoples through shared journeys, trade and the exchange of ideas","explanation":"This is the central theme that ties the whole chapter together."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.SG_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.SG_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['🙏','🪷','🕯️','🧘','🛕','🌺'];

/* ============================== STATE ============================== */
const STORE_KEY = 'sacred-geo-v1';
function defaultState(){ return {avatar:'🙏', name:'Yatri', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldSg(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('sg', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedSg(i){
  const active = activeUnreviewedWorldSg();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewSg(i){
  const active = activeUnreviewedWorldSg();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewSg = ()=>{
  const active = activeUnreviewedWorldSg();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'sg',
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
  const mouth = sad ? `<path d="M42 70 Q 50 63, 58 70" stroke="#3a2a1b" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    : mood==='think' ? `<circle cx="50" cy="70" r="2" fill="#3a2a1b"/>`
    : `<path d="M42 68 Q 50 78, 58 68" stroke="#3a2a1b" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(251,191,36,0.55))">
    <defs>
      <radialGradient id="mDiya" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#FEF3C7"/><stop offset="60%" stop-color="#FBBF24"/><stop offset="100%" stop-color="#B45309"/>
      </radialGradient>
      <radialGradient id="mGlowSg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FDE68A" stop-opacity="0.7"/><stop offset="100%" stop-color="#FDE68A" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowSg)"/>
    <path d="M50 12 C 60 30, 68 45, 50 60 C 32 45, 40 30, 50 12 Z" fill="#FDBA74"/>
    <circle cx="50" cy="58" r="34" fill="url(#mDiya)"/>
    <ellipse cx="40" cy="55" rx="4" ry="${sad?2:5}" fill="#3a2a1b"/>
    <ellipse cx="60" cy="55" rx="4" ry="${sad?2:5}" fill="#3a2a1b"/>
    <circle cx="41.5" cy="53.5" r="1.2" fill="white"/>
    <circle cx="61.5" cy="53.5" r="1.2" fill="white"/>
    ${mouth}
    <circle cx="34" cy="65" r="3" fill="#f97316" opacity="0.6"/>
    <circle cx="66" cy="65" r="3" fill="#f97316" opacity="0.6"/>
  </svg>`;
}

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
function nav(hash){ location.hash = hash; }
if(window.__sgHashListener) window.removeEventListener('hashchange', window.__sgHashListener);
window.__sgHashListener = function(){ if(!location.hash.startsWith('#/sg')) return; render(); };
window.addEventListener('hashchange', window.__sgHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/sg\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='🙏';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">A journey of faith begins</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Trace India's <span class="text-gradient-aurora">sacred geography.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From ancient shrines to mighty rivers, from sacred mountains to the peepul tree — discover how pilgrimage wove the whole subcontinent together.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Begin the pilgrimage →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Yatri</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Yatri" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Set out on the trail →</button>
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
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Sacred Wanderer</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Bhudevi</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to walk the sacred trails?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedSg(i);
        const needsReview = worldNeedsReviewSg(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/sg/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewSg();return false;"` : '';
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
      <span>Our Cultural Heritage and Knowledge Traditions</span>
    </div>
  </main>`;
  window.__resetAll = resetSave;
}

/* ---------------- WORLD (level select) ---------------- */
function renderWorld(slug){
  const w = WORLDS.find(w=>w.slug===slug);
  if(!w){ nav('#/sg/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedSg(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/sg/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/sg/lesson/'+w.id+'/'+lv.id:'#'}">
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
  if(!w||!lv){ nav('#/sg/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedSg(wIdx)){ renderHome(); return; }
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
        <a href="#/sg/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/sg/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/sg/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/sg/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('sg', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['sg'] = { init: sgInit };
