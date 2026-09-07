function uqInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"diversity","title":"India's Rich Diversity","subtitle":"A Nation of Many · Food for All · Textiles & the Sari","emoji":"🌈","gradient":"linear-gradient(135deg,#F472B6 0%,#7C3AED 100%)","glow":"#F472B6","levels":[
  {"id":1,"title":"A Nation of Many","intro":"India's staggering diversity is often the first thing visitors notice.","questions":[
    {"type":"mcq","prompt":"India's population of over 1.4 billion represents about what percentage of the world's population?","options":["About 18 percent","About 5 percent","About 50 percent","About 2 percent"],"answer":"About 18 percent","explanation":"With such a large population, great diversity is only natural."},
    {"type":"mcq","prompt":"The Anthropological Survey of India's 'People of India' project surveyed 4,635 communities and counted how many languages, using 25 scripts?","options":["325 languages","25 languages","1,000 languages","50 languages"],"answer":"325 languages","explanation":"This massive survey documented India's linguistic diversity in detail."},
    {"type":"mcq","prompt":"British historian Vincent Smith wondered how a history of India could be written given its bewildering diversity — what answer does the chapter suggest?","options":["India offers unity in diversity","India has no real unity at all","History cannot be written about India","Diversity should be eliminated"],"answer":"India offers unity in diversity","explanation":"This phrase captures the central theme of the whole chapter."},
    {"type":"mcq","prompt":"As a class activity mentioned in the chapter, students are asked to list the birthplaces of classmates and their parents to explore ______.","options":["diversity within their own class","only their favourite foods","only sports interests","nothing related to the chapter"],"answer":"diversity within their own class","explanation":"This helps students notice diversity close to home."}
  ]},
  {"id":2,"title":"Food for All","intro":"Thousands of dishes, but many shared basic ingredients.","questions":[
    {"type":"mcq","prompt":"Food grains that are the basic food for most Indians across regions, like rice, wheat and various pulses, are called ______.","options":["staple grains","luxury grains","festival grains","royal grains"],"answer":"staple grains","explanation":"Millets like bajra, jowar and ragi are also common staples."},
    {"type":"mcq","prompt":"Which spices are mentioned as being common throughout India, despite regional variety in cooking?","options":["Turmeric, cumin, cardamom and ginger","Only turmeric","Only chili powder","Only salt"],"answer":"Turmeric, cumin, cardamom and ginger","explanation":"These shared spices appear in countless regional dishes."},
    {"type":"mcq","prompt":"What does the variety of Indian dishes made from the same basic ingredients illustrate?","options":["Unity in diversity — same ingredients, many combinations","Only diversity, with no underlying unity","Only unity, with no real diversity","Nothing about Indian culture"],"answer":"Unity in diversity — same ingredients, many combinations","explanation":"This is a recurring theme across many aspects of Indian life."}
  ]},
  {"id":3,"title":"Textiles & the Sari","intro":"One simple garment, worn in hundreds of different styles across the country.","questions":[
    {"type":"mcq","prompt":"The sari, worn in most parts of India, is traditionally made from an unstitched length of cloth, mostly ______ or silk.","options":["cotton","wool","leather","plastic"],"answer":"cotton","explanation":"Famous silk saris include Banarasi, Kanjivaram and Paithani varieties."},
    {"type":"mcq","prompt":"A beautiful type of printed Indian cotton called 'chintz' became so popular in 17th-century Europe that some countries decided to ______ its import.","options":["ban","celebrate","tax lightly","ignore"],"answer":"ban","explanation":"England and France banned chintz imports to protect their own textile industries."},
    {"type":"truefalse","prompt":"Besides being worn as a dress, the sari has traditionally been put to many other creative uses by women in India.","options":["True","False"],"answer":"True","explanation":"This versatility is another example of the sari's rich cultural role."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Weave","intro":"The Pattern Keeper tests your understanding of India's diverse yet unified culture!","isBoss":true,"bossName":"Pattern Keeper","questions":[
    {"type":"mcq","prompt":"A stone relief from Vaishali (Bihar) shows a woman wearing a sari dating back how far?","options":["A few centuries BCE","Only 50 years","About 10,000 years","Only after 1900 CE"],"answer":"A few centuries BCE","explanation":"This shows just how ancient the sari's history is."},
    {"type":"mcq","prompt":"What does the example of the sari — one basic garment worn in countless regional styles — best illustrate?","options":["Unity in diversity","Only diversity","Only unity","Neither unity nor diversity"],"answer":"Unity in diversity","explanation":"A single dress, endlessly varied in fabric, colour and draping style."},
    {"type":"truefalse","prompt":"The 'People of India' project observed that many Indians could be called migrants, not living near their birthplace or original community.","options":["True","False"],"answer":"True","explanation":"This mobility adds yet another layer to India's diversity."}
  ]}
]},
{"id":2,"slug":"epics","title":"Festivals & Epics","subtitle":"One Festival, Many Names · The Panchatantra · Ramayana & Mahabharata","emoji":"📖","gradient":"linear-gradient(135deg,#FBBF24 0%,#92400E 100%)","glow":"#FBBF24","levels":[
  {"id":1,"title":"One Festival, Many Names","intro":"The same harvest celebration, called by dozens of different regional names.","questions":[
    {"type":"mcq","prompt":"Which harvest festival, celebrated around January 14 across India under many different regional names, is highlighted in the chapter?","options":["Makara Sankranti","Diwali","Holi","Navratri"],"answer":"Makara Sankranti","explanation":"It is called Lohri, Pongal, Bihu and many other names depending on the region."},
    {"type":"mcq","prompt":"What does the existence of the same festival under many different regional names illustrate?","options":["Unity in diversity","Complete disunity","A single uniform celebration everywhere","No connection between regions"],"answer":"Unity in diversity","explanation":"The underlying celebration is shared, even as its name and customs vary."},
    {"type":"mcq","prompt":"Besides Makara Sankranti in January, the chapter notes many major festivals take place in India during which other months?","options":["October-November","June-July","February-March","August only"],"answer":"October-November","explanation":"This is another season rich with festivals across the country."},
    {"type":"truefalse","prompt":"Diversity in Indian festivals is often accompanied by underlying similarities in timing or purpose across regions.","options":["True","False"],"answer":"True","explanation":"This reflects the chapter's central theme of unity within diversity."}
  ]},
  {"id":2,"title":"The Panchatantra","intro":"A single ancient book of animal fables that spread across the world.","questions":[
    {"type":"mcq","prompt":"The Panchatantra, a collection of stories with animals as main characters, is at least how old?","options":["2,200 years old","200 years old","22,000 years old","20 years old"],"answer":"2,200 years old","explanation":"Its original Sanskrit text has inspired adaptations across the world."},
    {"type":"mcq","prompt":"About how many adaptations of the Panchatantra are estimated to exist in more than 50 languages?","options":["About 200","About 20","About 2,000","About 2"],"answer":"About 200","explanation":"This includes adaptations across Southeast Asia, the Arab world and Europe."},
    {"type":"mcq","prompt":"The spread of the Panchatantra beyond India illustrates that this collection of stories became ______.","options":["'many' from 'one'","forgotten over time","only popular within India","only known in Sanskrit"],"answer":"'many' from 'one'","explanation":"A single original text became many different regional and international versions."}
  ]},
  {"id":3,"title":"The Two Great Epics","intro":"The Ramayana and Mahabharata together span thousands of pages — and countless retellings.","questions":[
    {"type":"mcq","prompt":"In the Mahabharata, the Pandavas, with Krishna's help, fight their cousins, the ______, to recover their kingdom.","options":["Kauravas","Vrishnis","Yadavas","Angas"],"answer":"Kauravas","explanation":"This central conflict drives the entire epic."},
    {"type":"mcq","prompt":"In the Ramayana, Rama, with the help of Lakshmana and Hanuman, defeats the demon ______, who had kidnapped his wife Sita.","options":["Ravana","Kumbhakarna","Indrajit","Vibhishana"],"answer":"Ravana","explanation":"This is one of the most well-known stories in Indian literature."},
    {"type":"mcq","prompt":"A scholar's survey in Tamil Nadu alone found about how many folk versions of the Mahabharata?","options":["About a hundred","About five","About a thousand","About two"],"answer":"About a hundred","explanation":"This is from just one state — imagine the number across all of India!"}
  ]},
  {"id":4,"title":"Boss: Keeper of the Epics","intro":"The Storyteller's Trial challenges your knowledge of India's shared literary heritage!","isBoss":true,"bossName":"Storyteller's Trial","questions":[
    {"type":"mcq","prompt":"Which tribal communities, such as the Bhils, Gonds and Mundas, are noted for preserving their own versions of the Ramayana and Mahabharata?","options":["Tribal communities across India, especially the northeast and Himalayan regions","Only communities in South India","No tribal communities have such versions","Only communities outside India"],"answer":"Tribal communities across India, especially the northeast and Himalayan regions","explanation":"These oral adaptations connect tribal history with the great epics."},
    {"type":"mcq","prompt":"The carved stone 'Pancha Pavar' in the Nilgiris, maintained by Irula tribals, commemorates which epic heroes passing through the area?","options":["The five Pandava brothers","The Kauravas","Rama and Sita","Hanuman alone"],"answer":"The five Pandava brothers","explanation":"This local legend connects the Nilgiris to the wider story of the Mahabharata."},
    {"type":"mcq","prompt":"What do the countless regional and tribal adaptations of the two epics best illustrate?","options":["Unity in diversity across Indian culture","That there is only one correct version of each epic","That the epics have no cultural significance","That epics are unrelated to Indian identity"],"answer":"Unity in diversity across Indian culture","explanation":"These epics have created a dense web of cultural connections across the Subcontinent."}
  ]}
]},
{"id":3,"slug":"family","title":"Family Life","subtitle":"Joint & Nuclear Families · Roles & Responsibilities · Two Stories","emoji":"👨‍👩‍👧‍👦","gradient":"linear-gradient(135deg,#34D399 0%,#065F46 100%)","glow":"#34D399","levels":[
  {"id":1,"title":"Joint & Nuclear Families","intro":"Indian families come in many forms, but share deep bonds.","questions":[
    {"type":"mcq","prompt":"A family type where several generations — grandparents, parents, uncles, aunts, cousins — live together is called a ______ family.","options":["joint","nuclear","extended-only","single"],"answer":"joint","explanation":"A nuclear family, by contrast, is usually limited to a couple and their children."},
    {"type":"mcq","prompt":"A family limited mainly to a couple and their children is called a ______ family.","options":["nuclear","joint","tribal","communal"],"answer":"nuclear","explanation":"Both family types are common in Indian society today."},
    {"type":"mcq","prompt":"Why does the chapter note that many Indian languages have no separate word for 'cousin'?","options":["Because cousins are considered as close as brothers and sisters","Because Indian languages have fewer words overall","Because cousins are not considered family","Because the concept of cousin does not exist"],"answer":"Because cousins are considered as close as brothers and sisters","explanation":"This reflects the deep bonds among all children in a joint family."}
  ]},
  {"id":2,"title":"Roles & Responsibilities","intro":"Every family member has a part to play — and values are passed down through daily life.","questions":[
    {"type":"mcq","prompt":"Relationships among family members, according to the chapter, are based on love, care, cooperation and ______.","options":["interdependence","competition","isolation","strict hierarchy only"],"answer":"interdependence","explanation":"'Cooperation' means working together toward shared goals."},
    {"type":"mcq","prompt":"Values that children learn within the family, according to the chapter, include ahimsa, dana (giving), seva (service) and ______.","options":["tyaga (sacrifice)","only wealth","only obedience","only fear"],"answer":"tyaga (sacrifice)","explanation":"These values are often described as being learned in the family, as if it were a 'school'."},
    {"type":"mcq","prompt":"In Shalini's story from Kerala, why did her parents buy new clothes for her uncle's family too, even though it meant she got a simpler dress?","options":["Because families support each other and share what they have","Because they had no money for a better dress","Because Shalini asked for a simple dress","Because it was cheaper to buy for everyone"],"answer":"Because families support each other and share what they have","explanation":"Shalini's grandmother, Acchamma, explained this value to her."}
  ]},
  {"id":3,"title":"Two Family Stories","intro":"From Kerala to Meghalaya, families adapt and support one another in their own ways.","questions":[
    {"type":"mcq","prompt":"In Tenzing's story from Meghalaya, what change happened in the household after his mother got busy with a handicraft cooperative?","options":["His father took on more household chores, like cleaning and cooking","His father stopped working entirely","The family moved away","His grandmother left the household"],"answer":"His father took on more household chores, like cleaning and cooking","explanation":"This shows how family roles can adapt to changing circumstances."},
    {"type":"mcq","prompt":"In Tenzing's family, who helps him with homework and takes him to the school bus stop?","options":["His grandfather","His mother","A neighbour","A teacher"],"answer":"His grandfather","explanation":"His grandfather is also active in social work in their community."},
    {"type":"truefalse","prompt":"Tenzing's parents discuss special expenses together before making decisions.","options":["True","False"],"answer":"True","explanation":"His mother also emphasises saving money for unexpected future needs."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Hearth","intro":"The Family Sentinel tests everything you've learned about family life in India!","isBoss":true,"bossName":"Family Sentinel","questions":[
    {"type":"mcq","prompt":"What Tamil word, appearing in the chapter's opening quotation by Tiruvalluvar, describes the 'flower and fruit of family life'?","options":["Love and dharma","Wealth and power","Fear and duty","War and peace"],"answer":"Love and dharma","explanation":"This ancient quotation frames the whole chapter's theme."},
    {"type":"mcq","prompt":"Why do Indian languages often have many more specific kinship terms than English, such as Hindi's bua, tau, tai, chacha and mausi?","options":["They precisely distinguish different family relationships that English groups under general terms like 'aunt' or 'uncle'","English has more kinship terms than Indian languages","Indian languages have no kinship terms","Kinship terms are unrelated to family structure"],"answer":"They precisely distinguish different family relationships that English groups under general terms like 'aunt' or 'uncle'","explanation":"This reflects how important precise family relationships are in Indian culture."},
    {"type":"mcq","prompt":"What is one key lesson children learn through daily participation in household life, according to the chapter?","options":["To take on responsibilities and continue family traditions and practices","To avoid all responsibility until adulthood","To live entirely independently from birth","To ignore family traditions"],"answer":"To take on responsibilities and continue family traditions and practices","explanation":"This daily practice helps children become responsible members of society."}
  ]}
]},
{"id":4,"slug":"community","title":"Community & Belonging","subtitle":"What Is a Community? · Community in Action · Urban Communities","emoji":"🤝","gradient":"linear-gradient(135deg,#38BDF8 0%,#1E3A8A 100%)","glow":"#38BDF8","levels":[
  {"id":1,"title":"What Is a Community?","intro":"Families connect to form something larger — bound by shared purpose and mutual support.","questions":[
    {"type":"mcq","prompt":"A group of connected families and people who come together for shared purposes, like festivals or shared resources, is called a ______.","options":["community","nation","empire","tribe only"],"answer":"community","explanation":"Communities can be defined in many different ways, depending on context."},
    {"type":"mcq","prompt":"In many village communities, unwritten agreements about the use of shared resources like water and grazing lands function as ______.","options":["informal 'rules' that give secure access but also require duties","strict written laws only","government orders","optional suggestions with no real effect"],"answer":"informal 'rules' that give secure access but also require duties","explanation":"This is especially common among many tribal and rural communities."},
    {"type":"mcq","prompt":"The word 'jati', or a subdivision of it, is also often referred to as a kind of ______ in the chapter.","options":["community","nation","festival","language"],"answer":"community","explanation":"The chapter shows how flexible and varied the concept of 'community' can be."},
    {"type":"truefalse","prompt":"A school's sports team, drama club, or science club can also be considered a type of community.","options":["True","False"],"answer":"True","explanation":"The chapter lists many such examples, showing how varied communities can be."}
  ]},
  {"id":2,"title":"Community in Action","intro":"When crisis strikes, communities often come together without expecting anything in return.","questions":[
    {"type":"mcq","prompt":"Following the halma tradition, the Bhil community in the Jhabua region of Madhya Pradesh planted thousands of trees and built water harvesting structures to address a ______ crisis.","options":["water","food","housing","education"],"answer":"water","explanation":"This work was done voluntarily, as a duty to the community and environment."},
    {"type":"mcq","prompt":"In the halma tradition, the objective of community members coming together to help is to serve ______.","options":["Mother Earth","only their own families","the government","no one in particular"],"answer":"Mother Earth","explanation":"This reflects a deep sense of collective environmental responsibility."},
    {"type":"mcq","prompt":"During the 2015 Chennai floods, what did many private and religious organisations do to help affected people?","options":["Cooked and distributed large quantities of food","Closed all roads permanently","Refused to help anyone","Left the city entirely"],"answer":"Cooked and distributed large quantities of food","explanation":"This is a powerful example of community support during a crisis."}
  ]},
  {"id":3,"title":"Urban Communities","intro":"Community spirit thrives in cities too, though it often takes different forms.","questions":[
    {"type":"mcq","prompt":"In Ahmedabad, Kamal Parmar, a workshop owner, began teaching underprivileged children after work hours, eventually reaching how many regular students?","options":["150 children","15 children","1,500 children","5 children"],"answer":"150 children","explanation":"He also provided the children with a free dinner every day."},
    {"type":"mcq","prompt":"Modern urban groups that make their own rules about waste management and cleanliness of shared spaces are called ______.","options":["Residents' Welfare Associations","Village panchayats only","Royal courts","National assemblies"],"answer":"Residents' Welfare Associations","explanation":"These have emerged as a newer type of community over the last few decades."},
    {"type":"truefalse","prompt":"According to the chapter, communities are ultimately interdependent — even Residents' Welfare Associations depend on traders and municipal workers.","options":["True","False"],"answer":"True","explanation":"This shows how everyone depends on many other people and communities in a complex society."}
  ]},
  {"id":4,"title":"Boss: Guardian of Belonging","intro":"The final challenge! The Community Keeper tests everything you've learned about family and community.","isBoss":true,"bossName":"Community Keeper","questions":[
    {"type":"mcq","prompt":"Which of these is NOT given as an example of a 'community' in the chapter?","options":["A single isolated individual with no connections","Mumbai's Parsi community","A school's sports community","A village's farming community"],"answer":"A single isolated individual with no connections","explanation":"By definition, a community involves connections between people."},
    {"type":"mcq","prompt":"What is the overall lesson of Chapters 8 and 9 about Indian society?","options":["Family and community, like the nation itself, thrive on cooperation, shared duty and interdependence within diversity","Family and community have no connection to national unity","Only large institutions matter, not families or communities","Diversity always leads to division, never unity"],"answer":"Family and community, like the nation itself, thrive on cooperation, shared duty and interdependence within diversity","explanation":"This theme connects the smallest social units to the nation as a whole."},
    {"type":"mcq","prompt":"In 2019, who was honoured with the Padma Shri for transformational work with the Bhil communities through the Shivganga movement?","options":["Shri Mahesh Sharma","Kamal Parmar","Vincent Smith","K.S. Singh"],"answer":"Shri Mahesh Sharma","explanation":"His work helped address a serious water crisis in the Jhabua region."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.UQ_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.UQ_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['🌸','🪔','👨‍👩‍👧','🤝','🎭','🧶'];

/* ============================== STATE ============================== */
const STORE_KEY = 'unity-quest-v1';
function defaultState(){ return {avatar:'🌸', name:'Sathi', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldUq(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('uq', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedUq(i){
  const active = activeUnreviewedWorldUq();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewUq(i){
  const active = activeUnreviewedWorldUq();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewUq = ()=>{
  const active = activeUnreviewedWorldUq();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'uq',
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
  const mouth = sad ? `<path d="M42 70 Q 50 63, 58 70" stroke="#3a1b30" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    : mood==='think' ? `<circle cx="50" cy="70" r="2" fill="#3a1b30"/>`
    : `<path d="M42 68 Q 50 78, 58 68" stroke="#3a1b30" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(244,114,182,0.55))">
    <defs>
      <radialGradient id="mBloom" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#FCE7F3"/><stop offset="60%" stop-color="#F0ABFC"/><stop offset="100%" stop-color="#A21CAF"/>
      </radialGradient>
      <radialGradient id="mGlowUq" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#F5D0FE" stop-opacity="0.7"/><stop offset="100%" stop-color="#F5D0FE" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowUq)"/>
    <circle cx="50" cy="30" r="14" fill="#F0ABFC"/>
    <circle cx="30" cy="45" r="14" fill="#F0ABFC"/>
    <circle cx="70" cy="45" r="14" fill="#F0ABFC"/>
    <circle cx="35" cy="70" r="14" fill="#F0ABFC"/>
    <circle cx="65" cy="70" r="14" fill="#F0ABFC"/>
    <circle cx="50" cy="55" r="30" fill="url(#mBloom)"/>
    <ellipse cx="40" cy="55" rx="4" ry="${sad?2:5}" fill="#3a1b30"/>
    <ellipse cx="60" cy="55" rx="4" ry="${sad?2:5}" fill="#3a1b30"/>
    <circle cx="41.5" cy="53.5" r="1.2" fill="white"/>
    <circle cx="61.5" cy="53.5" r="1.2" fill="white"/>
    ${mouth}
    <circle cx="34" cy="65" r="3" fill="#fb923c" opacity="0.6"/>
    <circle cx="66" cy="65" r="3" fill="#fb923c" opacity="0.6"/>
  </svg>`;
}

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
function nav(hash){ location.hash = hash; }
if(window.__uqHashListener) window.removeEventListener('hashchange', window.__uqHashListener);
window.__uqHashListener = function(){ if(!location.hash.startsWith('#/uq')) return; render(); };
window.addEventListener('hashchange', window.__uqHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/uq\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='🌸';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">Many threads, one fabric</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Discover <span class="text-gradient-aurora">unity in diversity.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From shared foods and festivals to family bonds and community spirit — four worlds explore what unites India's incredible diversity.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Begin the journey →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Sathi</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Sathi" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter Unity Quest →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Sathi', avatar); render(); };
  draw();
}

/* ---------------- HOME (Adventure Map) ---------------- */
function renderHome(){
  const lv = levelNum(STATE.xp), frac = levelFrac(STATE.xp);
  const lessonsDone = Object.values(STATE.progress).filter(p=>p.stars>0).length;
  app.innerHTML = `${Nav()}<main>
    <div class="glass-strong rounded-3xl" style="padding:18px;display:flex;align-items:center;gap:16px">
      <div style="font-size:44px;width:60px;height:60px;border-radius:16px;background:#f472b633;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px -6px #f472b688">${STATE.avatar}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Unity Explorer</div>
        <div class="font-display" style="font-size:22px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${STATE.name}</div>
        <div class="progress-track" style="margin-top:6px;height:8px"><div class="progress-fill" style="width:${frac*100}%"></div></div>
      </div>
      <div style="text-align:right">
        <div class="pillbox" style="background:#f472b633;border:1px solid #f472b655">Lv ${lv}</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Ekta</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to explore the many in the one?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedUq(i);
        const needsReview = worldNeedsReviewUq(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/uq/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewUq();return false;"` : '';
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
  if(!w){ nav('#/uq/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedUq(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/uq/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/uq/lesson/'+w.id+'/'+lv.id:'#'}">
          <div class="lesson-icon" style="${lv.isBoss?'background:#f26d6d55;box-shadow:0 0 20px -4px #f26d6d':'background:linear-gradient(135deg,'+(w.gradient.match(/#\\w+/g)?.[0]||'#f472b6')+'55, transparent)'}">${lv.isBoss?'👹':lv.id}</div>
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
  if(!w||!lv){ nav('#/uq/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedUq(wIdx)){ renderHome(); return; }
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
        <a href="#/uq/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/uq/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/uq/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/uq/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('uq', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['uq'] = { init: uqInit };
