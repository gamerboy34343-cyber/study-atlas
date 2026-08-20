function coInit(){

/* ============================== DATA ============================== */
const CHAPTERS = [{"id":"europeans","title":"European Powers Arrive","subtitle":"Trade, Conquest, and the Company's Rise","color":"navy","emoji":"⛵","years":"1498 – 1757","intro":"Vasco da Gama's arrival at Calicut in 1498 opened India to two and a half centuries of European trade and conquest — the Portuguese, Dutch and French each carved out footholds, before the English East India Company out-manoeuvred them all to become the dominant power after the Battle of Plassey.","rulers":[{"name":"Vasco da Gama","reign":"arrived 1498","facts":["First European to reach India by sea, landing near Kozhikode","His aggressive tactics on his second voyage soured relations with local rulers"]},{"name":"Rani Abbakka I & II","reign":"16th century","facts":["Queens of Ullal who repeatedly repelled Portuguese attempts to seize their port","Abbakka II reportedly used coconut-shell fireballs to burn Portuguese ships"]},{"name":"King Marthanda Varma","reign":"1741","facts":["Ruler of Travancore who decisively defeated the Dutch at the Battle of Colachel","A rare instance of an Asian power repelling a European colonial force"]},{"name":"Dupleix","reign":"Governor-General of French India, 1742–1754","facts":["Pioneered training Indian soldiers as disciplined 'sepoys'","Developed the strategy of indirect rule through puppet Indian rulers"]},{"name":"Robert Clive","reign":"East India Company, 1750s","facts":["Led the Company to victory at the Battle of Plassey (1757)","Conspired with Mir Jafar to betray the Nawab of Bengal"]}],"keyEvents":["1498 — Vasco da Gama arrives at Calicut","1510 — Portuguese capture Goa","1741 — Battle of Colachel; Travancore defeats the Dutch","1746–1763 — The Carnatic Wars between Britain and France","1757 — Battle of Plassey; the British defeat the Nawab of Bengal"],"administration":["Portuguese cartaz system forced all ships in the Arabian Sea to buy naval trade passes","The Goa Inquisition (from 1560) persecuted non-Christians and suspected converts","The East India Company used 'divide and rule' — exploiting rivalries between Indian rulers","The Doctrine of Lapse allowed the Company to annex any princely state whose ruler died without a natural male heir","Subsidiary alliances installed a British 'Resident' in Indian courts while transferring real power to the Company"],"monuments":["Goa's Portuguese forts","Fort St. George, Madras","Pondicherry's French quarter","Vellore Fort"],"boss":{"name":"Robert Clive","title":"Architect of Plassey","hp":150,"quote":"Trade was only ever the beginning. Show me you understand what came after."}},{"id":"companyraj","title":"The Company Raj & 1857","subtitle":"Economic Drain and the Great Rebellion","color":"blood","emoji":"⚖","years":"1757 – 1858","intro":"As the East India Company's rule expanded across India, catastrophic famines, the deliberate ruin of Indian industry, and decades of exploitation built up a wave of resistance that finally erupted in the Great Rebellion of 1857 — bringing an end to Company rule and the start of the British Raj.","rulers":[{"name":"Lord Lytton","reign":"Viceroy, 1876–1880","facts":["Refused government interference to lower food prices during the Great Famine of 1876-78","Held an extravagant durbar in Delhi even as millions starved"]},{"name":"Dadabhai Naoroji","reign":"active late 19th century","facts":["Authored 'Poverty and Un-British Rule in India' (1901)","First Indian elected to the British House of Commons"]},{"name":"Mangal Pandey","reign":"1857","facts":["Sepoy at Barrackpore whose attack on British officers helped spark the 1857 rebellion"]},{"name":"Rani Lakshmibai","reign":"d. 1858","facts":["Fought to save Jhansi from British annexation","Escaped a siege and seized the Gwalior fort before dying in battle"]},{"name":"Begum Hazrat Mahal","reign":"1857–1858","facts":["Led the defence of Lucknow during the 1857 uprising","Rejected British offers of safe passage and took refuge in Nepal"]}],"keyEvents":["1770–1772 — Bengal famine kills nearly a third of the population","1855–1856 — The Santhal Rebellion against moneylenders and British-backed landlords","1857 — The Great Rebellion begins at Meerut and spreads across northern India","1858 — The British Crown ends East India Company rule; the British Raj begins"],"administration":["The Company extracted maximum land revenue from Bengal while investing almost nothing in governance","Heavy duties on Indian textile exports, paired with low tariffs on British imports, ruined India's manufacturing industries","Traditional village self-governance and customary law were replaced by a centralised bureaucracy focused on tax collection","Macaulay's 1835 'Minute on Indian Education' pushed English-medium education to create Indian clerks for the colonial administration"],"monuments":["Jhansi Fort","Red Fort (site of Bahadur Shah Zafar's trial)","Residency ruins, Lucknow"],"boss":{"name":"Rani Lakshmibai","title":"Queen of Jhansi","hp":160,"quote":"I fought to my last breath for Jhansi. Fight through these questions for your answer."}}];

const QUESTIONS = [{"id":0,"chapter":"europeans","difficulty":"easy","type":"mcq","q":"Vasco da Gama's arrival in India in 1498 marked the beginning of:","options":["Mughal rule","European colonisation of India","The Delhi Sultanate","The Maratha empire"],"answer":1,"explain":"His landing near Kozhikode opened the sea route that European colonial powers would use for centuries.","render":"cargo"},{"id":1,"chapter":"europeans","difficulty":"medium","type":"mcq","q":"The Portuguese cartaz system required:","options":["Indian traders to convert to Christianity","All ships in the Arabian Sea to buy a Portuguese naval pass","Ships to pay taxes only in Goa","Free passage for all traders"],"answer":1,"explain":"Ships without a cartaz pass were seized by the Portuguese navy."},{"id":2,"chapter":"europeans","difficulty":"hard","type":"mcq","q":"Who defeated the Dutch at the Battle of Colachel in 1741?","options":["The Marathas","King Marthanda Varma of Travancore","The Mughals","The British"],"answer":1,"explain":"This was a rare case of an Asian power decisively repelling a European colonial force.","render":"cargo"},{"id":3,"chapter":"europeans","difficulty":"medium","type":"mcq","q":"Dupleix, Governor-General of French India, pioneered training Indian soldiers known as:","options":["Mansabdars","Sepoys","Jagirdars","Nawabs"],"answer":1,"explain":"French-trained 'sepoys' became a model later widely adopted by the British."},{"id":4,"chapter":"europeans","difficulty":"easy","type":"mcq","q":"The Battle of Plassey (1757) was fought between the East India Company and:","options":["The Mughal Emperor","Siraj-ud-daulah, the Nawab of Bengal","The Marathas","The Sikh Empire"],"answer":1,"explain":"Robert Clive's Company forces defeated Nawab Siraj-ud-daulah with the help of the traitor Mir Jafar.","render":"cargo"},{"id":5,"chapter":"europeans","difficulty":"medium","type":"tf","q":"Mir Jafar's betrayal of the Nawab of Bengal helped ensure a British victory at Plassey despite their smaller army.","options":["True","False"],"answer":0,"explain":"Mir Jafar's forces, the majority of the Nawab's army, stood aside during the battle."},{"id":6,"chapter":"europeans","difficulty":"hard","type":"mcq","q":"The Doctrine of Lapse allowed the British to annex a princely state if:","options":["Its ruler refused to pay taxes","Its ruler died without a natural male heir","It lost a war","Its population requested it"],"answer":1,"explain":"This disregarded the Hindu tradition of adoption as a legitimate means of succession."},{"id":7,"chapter":"europeans","difficulty":"medium","type":"mcq","q":"Under the 'subsidiary alliance' system, Indian rulers had to:","options":["Pay to maintain British troops and conduct foreign relations only through the British","Convert to Christianity","Give up their thrones immediately","Move their capital to Calcutta"],"answer":0,"explain":"This transferred real power to the British while burdening Indian rulers with the cost of their own subjugation."},{"id":8,"chapter":"europeans","difficulty":"hard","type":"whoami","q":"I conspired with a Nawab's own military commander to secure victory at Plassey in 1757. Who am I?","options":["Robert Clive","Dupleix","Warren Hastings","Lord Lytton"],"answer":0,"explain":"Robert Clive struck a secret deal with Mir Jafar before the battle."},{"id":9,"chapter":"europeans","difficulty":"medium","type":"fill","q":"Rani ___ of Ullal was known for repelling the Portuguese by burning their ships with coconut-shell fireballs.","options":["Abbakka II"],"answer":0,"explain":"Rani Abbakka II continued her predecessor's resistance to Portuguese conquest."},{"id":10,"chapter":"companyraj","difficulty":"medium","type":"mcq","q":"The Bengal famine of 1770-1772 killed an estimated:","options":["1 million people","10 million people — about a third of Bengal's population","100,000 people","50 million people"],"answer":1,"explain":"Harsh revenue collection during crop failure caused a catastrophic famine even as the Company raised taxes further.","render":"cargo"},{"id":11,"chapter":"companyraj","difficulty":"hard","type":"mcq","q":"According to historian Utsa Patnaik's estimate, how much wealth did Britain drain from India between 1765 and 1938 (in today's value)?","options":["$1 trillion","$10 trillion","$45 trillion","$100 billion"],"answer":2,"explain":"This estimate is about 13 times Britain's entire 2023 GDP."},{"id":12,"chapter":"companyraj","difficulty":"medium","type":"mcq","q":"British policy on Indian textiles involved:","options":["Heavy duties on Indian textile imports into Britain while allowing British goods into India with minimal tariffs","Banning all textile production","Equal tariffs for both countries","Investing heavily in Indian textile mills"],"answer":0,"explain":"This one-sided policy devastated India's once-dominant textile industry."},{"id":13,"chapter":"companyraj","difficulty":"easy","type":"mcq","q":"Macaulay's 1835 'Minute on Indian Education' aimed to create Indians who were:","options":["Fluent only in Sanskrit","'Indian in blood and colour, but English in taste, in opinions, in morals, and in intellect'","Trained exclusively as soldiers","Excluded from all education"],"answer":1,"explain":"This quote is from Macaulay's own Minute, which redirected Indian education toward English-medium schooling."},{"id":14,"chapter":"companyraj","difficulty":"medium","type":"mcq","q":"The Santhal Rebellion of 1855-56 was led by:","options":["Mangal Pandey","Sidhu and Kanhu Murmu","Nana Saheb","Tatia Tope"],"answer":1,"explain":"The Murmu brothers led the Santhals against moneylenders and British-backed landlords.","render":"cargo"},{"id":15,"chapter":"companyraj","difficulty":"easy","type":"mcq","q":"The immediate spark for the 1857 rebellion was rumours about:","options":["A new tax on land","Rifle cartridges greased with cow and pig fat","A ban on religious festivals","The Doctrine of Lapse"],"answer":1,"explain":"This offended the religious sensibilities of both Hindu and Muslim sepoys.","render":"cargo"},{"id":16,"chapter":"companyraj","difficulty":"medium","type":"tf","q":"During the 1857 rebellion, rebels proclaimed the aging Mughal emperor Bahadur Shah Zafar as their symbolic leader.","options":["True","False"],"answer":0,"explain":"True — although real military decisions were made by the rebel commanders, not the powerless emperor."},{"id":17,"chapter":"companyraj","difficulty":"hard","type":"mcq","q":"Rani Lakshmibai of Jhansi ultimately died:","options":["In exile in Nepal","On the battlefield after seizing the Gwalior fort","By execution in Delhi","Of old age"],"answer":1,"explain":"She was killed in battle on 18 June 1858, having escaped a siege of Jhansi and captured Gwalior."},{"id":18,"chapter":"companyraj","difficulty":"medium","type":"mcq","q":"In 1858, control of India passed from the East India Company to:","options":["The Mughal Emperor","The British Crown, beginning the British Raj","The Marathas","The United Nations"],"answer":1,"explain":"This marked the formal start of direct British Crown rule over India.","render":"cargo"},{"id":19,"chapter":"companyraj","difficulty":"hard","type":"whoami","q":"I led the defence of Lucknow in 1857, rejected British offers of safe passage, and took refuge in Nepal rather than surrender. Who am I?","options":["Rani Lakshmibai","Begum Hazrat Mahal","Tarabai","Ahilyabai Holkar"],"answer":1,"explain":"Begum Hazrat Mahal of Awadh."},{"id":20,"chapter":"companyraj","difficulty":"medium","type":"fill","q":"The 1859-1862 uprising in which Bengal peasants refused to grow a forced cash crop was called the ___ Revolt.","options":["Indigo"],"answer":0,"explain":"European planters forced peasants to grow indigo instead of food crops, trapping them in debt."}];

const DATES = [{"year":1741,"event":"Battle of Colachel — Travancore defeats the Dutch"},{"year":1757,"event":"Battle of Plassey — the British defeat the Nawab of Bengal"},{"year":1770,"event":"Bengal famine begins under East India Company rule"},{"year":1857,"event":"The Great Rebellion begins at Meerut"},{"year":1858,"event":"British Crown ends Company rule; the British Raj begins"}];

const VOCAB = [{"term":"Cartaz","meaning":"A Portuguese naval trade pass — ships without one were seized in the Arabian Sea."},{"term":"Doctrine of Lapse","meaning":"British policy annexing any princely state whose ruler died without a natural male heir."},{"term":"Subsidiary Alliance","meaning":"A system installing a British 'Resident' in Indian courts while transferring real power to the British."},{"term":"Sepoy","meaning":"An Indian soldier trained in European military techniques, first by the French, later the British."},{"term":"Princely State","meaning":"A region ruled by an Indian prince under British protection, retaining internal autonomy."},{"term":"Great Rebellion of 1857","meaning":"The largest 19th-century uprising against British rule, once called the 'Sepoy Mutiny'."},{"term":"British Raj","meaning":"Direct British Crown rule over India, beginning in 1858 after the East India Company's rule ended."}];

const KINGDOMS = [{"id":"goa","name":"Goa (Portuguese)","x":28,"y":64,"chapter":"europeans"},{"id":"plassey","name":"Plassey (Bengal)","x":66,"y":40,"chapter":"companyraj"}];

const MONUMENT_TILES = [{"id":"goafort","name":"Goa's Portuguese Forts","builder":"Portuguese Empire","cols":3,"rows":2,"glyph":"⛪","fact":"Goa became the capital of Portuguese India after its capture in 1510."},{"id":"redfort1857","name":"Red Fort","builder":"Bahadur Shah Zafar's trial site","cols":3,"rows":2,"glyph":"🏯","fact":"Where the last Mughal emperor was tried after the 1857 rebellion."},{"id":"residency","name":"Residency Ruins, Lucknow","builder":"British East India Company","cols":2,"rows":3,"glyph":"🏛","fact":"Site of the dramatic 1857 siege of Lucknow."}];

const MEMORY_PAIRS = [["Vasco da Gama","Arrived at Calicut, 1498"],["Robert Clive","Victory at Plassey, 1757"],["Rani Lakshmibai","Defended Jhansi"],["Begum Hazrat Mahal","Defended Lucknow"],["Mangal Pandey","Sparked the 1857 revolt"],["Dadabhai Naoroji","Wrote of the wealth drain"]];

const ACHIEVEMENT_DEFS = [
  {id:'first-chapter',label:'First Scroll',desc:'Complete any chapter',icon:'📜',test:s=>s.completedChapters.length>=1},
  {id:'hundred',label:'100% Reader',desc:`Complete all ${CHAPTERS.length} chapters`,icon:'📚',test:s=>s.completedChapters.length===CHAPTERS.length},
  {id:'king-slayer',label:'King Slayer',desc:'Defeat any boss',icon:'⚔',test:s=>s.bossesDefeated.length>=1},
  {id:'history-legend',label:'History Legend',desc:'Defeat all bosses',icon:'👑',test:s=>s.bossesDefeated.length===CHAPTERS.length},
  {id:'map-genius',label:'Map Genius',desc:`Visit all ${KINGDOMS.length} kingdoms`,icon:'🗺',test:s=>s.visitedKingdoms.length===KINGDOMS.length},
  {id:'timeline',label:'Perfect Timeline',desc:'Sort the timeline correctly',icon:'⏳',test:s=>s.timelineCompleted},
  {id:'sharp',label:'Sharp Mind',desc:'Reach 80% accuracy (20+ Qs)',icon:'🧠',test:s=>s.questionsAnswered>=20 && Math.round(s.correctAnswers/Math.max(1,s.questionsAnswered)*100)>=80},
  {id:'grinder',label:'Grinder',desc:'Answer 100 questions',icon:'💎',test:s=>s.questionsAnswered>=100},
];

const RANKS = [{min:0,title:'Village Student'},{min:200,title:'Historian'},{min:500,title:'Commander'},{min:1000,title:'Royal Advisor'},{min:2000,title:'Empire Builder'},{min:4000,title:'Legend'}];

const INDIA_PATH = "M 42 5 L 52 6 L 58 12 L 62 20 L 60 28 L 66 34 L 72 34 L 82 30 L 82 38 L 76 44 L 72 46 L 68 50 L 66 60 L 62 70 L 56 80 L 50 88 L 44 94 L 40 90 L 36 80 L 30 68 L 26 58 L 24 50 L 22 44 L 20 36 L 24 28 L 30 20 L 36 12 Z";

const NAV = [
  {href:'story',emoji:'▶',label:'Start Adventure'},{href:'map',emoji:'🗺',label:'Explore Map'},
  {href:'timeline',emoji:'📜',label:'Timeline Trial'},{href:'quiz',emoji:'🧠',label:'Practice Quiz'},
  {href:'boss',emoji:'⚔',label:'Battle Arena'},{href:'rapidfire',emoji:'⚡',label:'Rapid Fire'},
  {href:'memory',emoji:'🃏',label:'Memory Match'},{href:'puzzle',emoji:'🏛',label:'Monument Puzzle'},
  {href:'mapchallenge',emoji:'📍',label:'Map Challenge'},{href:'flashcards',emoji:'🗂',label:'Flashcards'},
  {href:'exam',emoji:'🎯',label:'Mock Test'},{href:'revision',emoji:'🩹',label:'Revision'},
  {href:'missions',emoji:'🎁',label:'Daily Missions'},{href:'achievements',emoji:'🏆',label:'Achievements'},
  {href:'analytics',emoji:'📊',label:'Analytics'},{href:'inventory',emoji:'🎒',label:'Inventory'},
  {href:'progress',emoji:'📈',label:'Progress'},{href:'settings',emoji:'⚙',label:'Settings'},
];

/* ============================== STATE ============================== */
const STORE_KEY = 'co-quest-save';
function defaultState(){
  return {playerName:'Young Historian',avatar:'🧙',banner:'🏳',xp:0,coins:0,crowns:0,scrolls:0,diamonds:0,
    completedChapters:[],bossesDefeated:[],questionsAnswered:0,correctAnswers:0,wrongIds:[],seenIds:[],
    chapterAcc:{},typeAcc:{},timelineCompleted:false,visitedKingdoms:[],mapChallengeBest:0,memoryBest:0,rapidBest:0,
    inventory:[],favorites:[],mastered:[],streak:0,lastPlayed:'',dailyDate:'',
    dailyProgress:{qs:0,timeline:false,boss:false,chapter:false},history:[],
    settings:{sound:true,animations:true,language:'en',difficulty:'adaptive'}};
}
function todayStr(){ return new Date().toISOString().slice(0,10); }
function loadState(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(!raw) return rollDaily(defaultState());
    const parsed = JSON.parse(raw);
    return rollDaily({...defaultState(), ...parsed, settings:{...defaultState().settings, ...(parsed.settings||{})}, dailyProgress:{...defaultState().dailyProgress, ...(parsed.dailyProgress||{})}});
  }catch(e){ return rollDaily(defaultState()); }
}
function rollDaily(s){
  const t = todayStr();
  if(s.dailyDate !== t){
    const yesterday = new Date(Date.now()-86400000).toISOString().slice(0,10);
    const streak = s.dailyDate===yesterday ? s.streak : (s.lastPlayed ? 0 : s.streak);
    return {...s, dailyDate:t, dailyProgress:{qs:0,timeline:false,boss:false,chapter:false}, streak};
  }
  return s;
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
function activeUnreviewedChapterCo(){
  for(const c of CHAPTERS){
    const started = (STATE.chapterAcc[c.id]?.seen ?? 0) > 0;
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('co', String(c.id));
    if(started && !reviewed) return c;
  }
  return null;
}
function isChapterUnlockedCo(i){
  const active = activeUnreviewedChapterCo();
  return !active || active.id===CHAPTERS[i].id;
}
function chapterNeedsReviewCo(i){
  const active = activeUnreviewedChapterCo();
  return !!active && active.id!==CHAPTERS[i].id;
}
window.__openChapterReviewCo = ()=>{
  const active = activeUnreviewedChapterCo();
  if(!active){ renderStoryList(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'co',
    moduleId: String(active.id),
    moduleTitle: active.title,
    lessonTitles: [active.title],
    onPass: renderStoryList,
    onExit: renderStoryList,
  });
};
function recordHistory(correct){
  const t = todayStr();
  const h = [...STATE.history];
  const last = h[h.length-1];
  if(last && last.date===t){ last.qs++; if(correct) last.right++; }
  else { h.push({date:t, qs:1, right: correct?1:0}); if(h.length>30) h.shift(); }
  return {history:h, lastPlayed:t};
}
function grant(g){
  update({
    coins: STATE.coins+(g.coins||0), crowns: STATE.crowns+(g.crowns||0), scrolls: STATE.scrolls+(g.scrolls||0),
    diamonds: STATE.diamonds+(g.diamonds||0), xp: STATE.xp+(g.xp||0),
    inventory: g.item && !STATE.inventory.includes(g.item) ? [...STATE.inventory, g.item] : STATE.inventory,
  });
}
function addXp(n){ update({xp: STATE.xp+n}); }
function recordAnswer(e){
  if(!e.correct && typeof atlasRecordMistake === 'function') atlasRecordMistake('co', e.type||'general', e);
  STATE = {...STATE, ...recordHistory(e.correct)};
  const chAcc = STATE.chapterAcc[e.chapter] || {seen:0,right:0};
  const tyAcc = STATE.typeAcc[e.type] || {seen:0,right:0};
  const wrongIds = e.correct ? STATE.wrongIds.filter(id=>id!==e.id) : (STATE.wrongIds.includes(e.id)?STATE.wrongIds:[...STATE.wrongIds,e.id]);
  const seenIds = STATE.seenIds.includes(e.id) ? STATE.seenIds : [...STATE.seenIds, e.id];
  update({
    questionsAnswered: STATE.questionsAnswered+1, correctAnswers: STATE.correctAnswers + (e.correct?1:0),
    xp: STATE.xp + (e.correct?15:0), coins: STATE.coins + (e.correct?8:0),
    wrongIds, seenIds,
    chapterAcc: {...STATE.chapterAcc, [e.chapter]: {seen:chAcc.seen+1, right:chAcc.right+(e.correct?1:0)}},
    typeAcc: {...STATE.typeAcc, [e.type]: {seen:tyAcc.seen+1, right:tyAcc.right+(e.correct?1:0)}},
    dailyProgress: {...STATE.dailyProgress, qs: STATE.dailyProgress.qs+1},
  });
}
function completeChapter(id){
  if(STATE.completedChapters.includes(id)) return;
  update({completedChapters:[...STATE.completedChapters,id], crowns:STATE.crowns+1, scrolls:STATE.scrolls+1, xp:STATE.xp+100,
    dailyProgress:{...STATE.dailyProgress, chapter:true}});
}
function defeatBoss(id){
  if(STATE.bossesDefeated.includes(id)) return;
  update({bossesDefeated:[...STATE.bossesDefeated,id], crowns:STATE.crowns+2, diamonds:STATE.diamonds+1, xp:STATE.xp+200,
    dailyProgress:{...STATE.dailyProgress, boss:true}});
}
function visitKingdom(id){
  if(STATE.visitedKingdoms.includes(id)) return;
  update({visitedKingdoms:[...STATE.visitedKingdoms,id], xp:STATE.xp+20});
}
function toggleFavorite(id){ update({favorites: STATE.favorites.includes(id)?STATE.favorites.filter(x=>x!==id):[...STATE.favorites,id]}); }
function toggleMastered(id){ update({mastered: STATE.mastered.includes(id)?STATE.mastered.filter(x=>x!==id):[...STATE.mastered,id]}); }
function completeDailyStreak(){
  const d = STATE.dailyProgress;
  if(d.qs>=25 && d.timeline && d.boss && d.chapter && STATE.lastPlayed===todayStr()) update({streak: STATE.streak+1, diamonds: STATE.diamonds+2});
}
function updateSettings(patch){ update({settings:{...STATE.settings, ...patch}}); }
function resetSave(){ STATE = defaultState(); if(typeof atlasProfile !== 'undefined' && atlasProfile){ STATE.xp = atlasProfile.xp||0; STATE.coins = atlasProfile.coins||0; } save(); }
function levelInfo(xp){
  let idx=1;
  for(let i=0;i<RANKS.length;i++) if(xp>=RANKS[i].min) idx=i+1;
  const cur = RANKS[idx-1], next = RANKS[idx] || {min:cur.min+2000,title:'Legend'};
  const progress = Math.min(1, (xp-cur.min)/(next.min-cur.min));
  return {level:idx, title:cur.title, progress, next:next.min};
}
function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function chapterTitle(id){ const c = CHAPTERS.find(c=>c.id===id); return c?c.title:id; }
function renderOpts(q, picked, onClickFn){
  if(q.render==='cargo'){
    return `<div class="cargo-dock">${q.options.map((o,i)=>{
      let cls='cargo-crate'; if(picked!=null){ cls += i===q.answer?' correct':(i===picked?' wrong':' dim'); }
      return `<button class="${cls}" ${picked!=null?'disabled':''} onclick="${onClickFn(i)}"><span class="crate-icon">📦</span><span class="crate-text">${o}</span></button>`;
    }).join('')}</div>`;
  }
  return `<div class="opt-grid">${q.options.map((o,i)=>{
    let cls='opt-btn'; if(picked!=null) cls += i===q.answer?' correct':(i===picked?' wrong':' dim');
    return `<button class="${cls}" ${picked!=null?'disabled':''} onclick="${onClickFn(i)}"><b>${String.fromCharCode(65+i)}.</b>${o}</button>`;
  }).join('')}</div>`;
}

/* ============================== ROUTER / SHELL ============================== */
const app = document.getElementById('app');
function route(){
  const hash = location.hash.replace(/^#\/co\/?/,'') || '';
  const [path, qs] = hash.split('?');
  const params = Object.fromEntries(new URLSearchParams(qs||''));
  render(path||'home', params);
}
if(window.__coHashListener) window.removeEventListener('hashchange', window.__coHashListener);
window.__coHashListener = function(){ if(!location.hash.startsWith('#/co')) return; route(); };
window.addEventListener('hashchange', window.__coHashListener);
function nav(path){ location.hash = '#/co/'+path; }

function Shell(title, subtitle, bodyHtml){
  const lv = levelInfo(STATE.xp);
  return `
    <div class="topbar">
      <button class="back" onclick="history.length>1?history.back():nav('home')">← Back</button>
      <div class="stats">
        <span>✦ Lv${lv.level}</span>
        <span>🪙 ${STATE.coins}</span>
        <span>👑 ${STATE.crowns}</span>
        <span>💎 ${STATE.diamonds}</span>
        <span>🔥 ${STATE.streak}</span>
      </div>
    </div>
    <div class="wrap">
      <div class="shell-head">
        <div class="eyebrow">Colonial Quest</div>
        <h1>${title}</h1>
        <p class="sub">${subtitle}</p>
      </div>
      ${bodyHtml}
    </div>`;
}

function render(path, params){
  window.scrollTo(0,0);
  if(path==='home') return renderHome();
  if(path==='story') return params.chapter ? renderStoryChapter(params.chapter) : renderStoryList();
  if(path==='map') return renderMap();
  if(path==='timeline') return renderTimeline();
  if(path==='quiz') return renderQuiz();
  if(path==='boss') return params.chapter ? renderBossBattle(params.chapter) : renderBossList();
  if(path==='rapidfire') return renderRapidFire();
  if(path==='memory') return renderMemory();
  if(path==='puzzle') return renderPuzzle();
  if(path==='mapchallenge') return renderMapChallenge();
  if(path==='flashcards') return renderFlashcards();
  if(path==='exam') return renderExam();
  if(path==='revision') return renderRevision();
  if(path==='missions') return renderMissions();
  if(path==='achievements') return renderAchievements();
  if(path==='analytics') return renderAnalytics();
  if(path==='inventory') return renderInventory();
  if(path==='progress') return renderProgress();
  if(path==='settings') return renderSettings();
  return renderHome();
}

/* ---------------- HOME ---------------- */
function renderHome(){
  app.innerHTML = `
    <div class="topbar"><div style="flex:1"></div>
      <div class="stats"><span>✦ Lv${levelInfo(STATE.xp).level}</span><span>🪙 ${STATE.coins}</span><span>👑 ${STATE.crowns}</span><span>🔥 ${STATE.streak}</span></div>
    </div>
    <div id="home-hero">
      <div class="badge">📜</div>
      <div class="eyebrow">NCERT · Grade 8 · History Chapter 4</div>
      <h1>Colonial Quest</h1>
      <p class="sub">Trade, Conquest & the Company's Rise</p>
    </div>
    <div class="wrap">
      <div class="nav-grid">
        ${NAV.map(n=>`<a class="nav-card" href="#/co/${n.href}"><div class="ic">${n.emoji}</div><div class="lb">${n.label}</div></a>`).join('')}
      </div>
      <p class="footnote">Progress saves automatically. Trace two centuries from the first European ships to the Great Rebellion of 1857.</p>
    </div>`;
}

/* ---------------- STORY LIST ---------------- */
function renderStoryList(){
  const body = `<div>${CHAPTERS.map((c,i)=>{
    const unlocked = isChapterUnlockedCo(i);
    const needsReview = chapterNeedsReviewCo(i);
    const href = unlocked ? '#/co/story?chapter='+c.id : '#';
    const clickAttr = needsReview ? `onclick="__openChapterReviewCo();return false;"` : '';
    return `<a class="chapter-card ${unlocked?'':(needsReview?'needs-review':'locked')}" href="${href}" ${clickAttr}>
      <div class="ic">${unlocked?c.emoji:(needsReview?'📝':'🔒')}</div>
      <div>
        <div class="yrs">Chapter ${i+1} · ${c.years}</div>
        <h3>${c.title}</h3>
        <div class="sub">${needsReview?'Tap to take the Module Review →':c.subtitle}</div>
        <p>${unlocked?c.intro:''}</p>
      </div>
    </a>`;
  }).join('')}</div>`;
  app.innerHTML = Shell('Choose Your Chapter', 'Each kingdom holds a story. Each story holds a boss.', body);
}

/* ---------------- STORY CHAPTER READER ---------------- */
function renderStoryChapter(id){
  const ch = CHAPTERS.find(c=>c.id===id);
  if(!ch){ nav('story'); return; }
  const chIdx = CHAPTERS.findIndex(c=>c.id===id);
  if(!isChapterUnlockedCo(chIdx)){ renderStoryList(); return; }
  const qs = shuffle(QUESTIONS.filter(q=>q.chapter===id)).slice(0,3);
  const total = 4 + qs.length;
  let page = 0, answered = {};

  function pageHtml(){
    if(page===0) return `<div class="pill" style="margin-bottom:10px;display:inline-block">✦ The Scroll Unfurls</div><p style="font-size:18px;line-height:1.7">${ch.intro}</p>`;
    if(page===1) return `<div class="pill" style="margin-bottom:10px;display:inline-block">✦ The Rulers</div><div class="opt-grid" style="grid-template-columns:1fr 1fr">${ch.rulers.map(r=>`<div class="card" style="padding:14px"><div class="disp" style="color:var(--gold)">${r.name}</div><div style="font-size:12px;color:var(--muted)">${r.reign}</div><ul style="margin:8px 0 0;padding-left:18px;font-size:13.5px">${r.facts.map(f=>`<li>${f}</li>`).join('')}</ul></div>`).join('')}</div>`;
    if(page===2) return `<div class="pill" style="margin-bottom:10px;display:inline-block">✦ Administration</div><ul style="padding-left:20px;line-height:1.8">${ch.administration.map(a=>`<li>${a}</li>`).join('')}</ul><div class="pill" style="margin:16px 0 10px;display:inline-block">✦ Key Events</div><ul style="padding-left:20px;line-height:1.8">${ch.keyEvents.map(e=>`<li>⚔ ${e}</li>`).join('')}</ul>`;
    if(page===3) return `<div class="pill" style="margin-bottom:10px;display:inline-block">✦ Monuments Left Behind</div><div class="pillrow">${ch.monuments.map(m=>`<span class="pill" style="border-color:var(--gold);color:var(--gold)">🏛 ${m}</span>`).join('')}</div>`;
    const qi = page-4;
    const q = qs[qi];
    const picked = answered[qi];
    return `<div class="pill" style="margin-bottom:10px;display:inline-block">✦ Prove Your Knowledge</div>
      <h3 style="margin-top:6px">${q.q}</h3>
      ${renderOpts(q, picked, i=>`__storyAnswer(${qi},${i})`)}
      ${picked!==undefined?`<div class="explain-box"><div class="verdict">${picked===q.answer?'✓ Correct!':'✗ Not quite'}</div><p style="margin:6px 0 12px">${q.explain}</p><button class="btn btn-primary" onclick="__storyNext()">Continue →</button></div>`:''}`;
  }
  function footer(){
    const done = STATE.completedChapters.includes(id);
    if(page<4) return `<div style="display:flex;justify-content:space-between;margin-top:20px">
        <button class="btn btn-outline" ${page===0?'disabled':''} onclick="__storyBack()">← Back</button>
        <button class="btn btn-primary" onclick="__storyForward()">Continue →</button>
      </div>`;
    if(page < total-1) return `<div style="display:flex;justify-content:space-between;margin-top:20px"><button class="btn btn-outline" onclick="__storyBack()">← Back</button><div></div></div>`;
    return `<div style="display:flex;justify-content:space-between;margin-top:20px">
        <button class="btn btn-outline" onclick="__storyBack()">← Back</button>
        <div style="display:flex;gap:10px">
          <button class="btn btn-primary" onclick="__storyClaim()">${done?'✓ Chapter Read':'Claim +100 XP'}</button>
          <a class="btn" style="background:var(--destructive);color:#fff" href="#/co/boss?chapter=${id}">⚔ Face ${ch.boss.name}</a>
        </div>
      </div>`;
  }
  function draw(){
    app.innerHTML = Shell(`${ch.emoji} ${ch.title}`, `${ch.years} · ${ch.subtitle}`, `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
        <div class="progress-bar" style="flex:1"><div class="progress-fill" style="width:${(page+1)/total*100}%"></div></div>
        <div style="font-size:12px;color:var(--muted)">${page+1}/${total}</div>
      </div>
      <div class="card" style="min-height:340px">${pageHtml()}</div>
      ${footer()}`);
  }
  window.__storyForward = ()=>{ page = Math.min(total-1, page+1); draw(); };
  window.__storyBack = ()=>{ page = Math.max(0, page-1); draw(); };
  window.__storyAnswer = (qi,i)=>{ answered[qi]=i; recordAnswer({id:qs[qi].id, correct:i===qs[qi].answer, chapter:qs[qi].chapter, type:qs[qi].type}); draw(); };
  window.__storyNext = ()=>{ page = Math.min(total-1, page+1); draw(); };
  window.__storyClaim = ()=>{ completeChapter(id); draw(); };
  draw();
}

/* ---------------- MAP ---------------- */
function renderMap(){
  let selected = null;
  function draw(){
    const sel = KINGDOMS.find(k=>k.id===selected);
    const ch = sel ? CHAPTERS.find(c=>c.id===sel.chapter) : null;
    const body = `<div class="map-grid">
      <div class="map-svg-wrap">
        <svg viewBox="0 0 100 100" style="width:100%;height:100%">
          <path d="${INDIA_PATH}" fill="#4d3f80" stroke="var(--gold)" stroke-width="0.4" opacity="0.9"/>
          ${KINGDOMS.map(k=>{
            const visited = STATE.visitedKingdoms.includes(k.id);
            const active = selected===k.id;
            return `<g style="cursor:pointer" onclick="__mapPick('${k.id}')">
              <circle cx="${k.x}" cy="${k.y}" r="${active?2.6:1.8}" fill="${visited?'var(--gold)':'#a89fce'}"/>
              <circle cx="${k.x}" cy="${k.y}" r="4" fill="var(--gold)" opacity="0.15"/>
              <text x="${k.x}" y="${k.y-3}" class="map-pin-label">${k.name}</text>
            </g>`;
          }).join('')}
        </svg>
      </div>
      <div class="card" style="min-height:380px">
        ${ch ? `
          <div class="pill" style="display:inline-block">${ch.years}</div>
          <h3 style="margin:10px 0 4px">${ch.emoji} ${sel.name}</h3>
          <p style="font-size:14px;color:#cfc7ea">${ch.intro}</p>
          <div style="margin-top:14px"><div class="disp" style="color:var(--primary);font-size:13px">Rulers</div>
            <ul style="padding-left:18px;font-size:13.5px">${ch.rulers.slice(0,4).map(r=>`<li>◆ ${r.name} <span style="color:var(--muted);font-size:12px">(${r.reign})</span></li>`).join('')}</ul></div>
          <div style="margin-top:12px"><div class="disp" style="color:var(--primary);font-size:13px">Monuments</div>
            <div class="pillrow" style="margin-top:8px">${ch.monuments.map(m=>`<span class="pill">${m}</span>`).join('')}</div></div>
          <a class="btn btn-primary" style="display:inline-block;margin-top:16px" href="#/co/story?chapter=${ch.id}">Enter this chapter →</a>
        ` : `<div style="text-align:center;color:var(--muted);padding-top:60px"><div style="font-size:40px">🗺</div><p style="font-style:italic;margin-top:14px">Select a kingdom banner on the map.</p><p style="font-size:12px">Visited: ${STATE.visitedKingdoms.length} / ${KINGDOMS.length}</p></div>`}
      </div>
    </div>`;
    app.innerHTML = Shell('Bharatavarsha', 'Click a banner to survey a kingdom', body);
  }
  window.__mapPick = (id)=>{ selected=id; visitKingdom(id); draw(); };
  draw();
}

/* ---------------- TIMELINE ---------------- */
function renderTimeline(){
  let order = shuffle(DATES);
  let checked = false;
  function draw(){
    const sorted = [...DATES].sort((a,b)=>a.year-b.year);
    const matches = order.map((e,i)=>e.year===sorted[i].year);
    const allOk = matches.every(Boolean);
    const body = `
      <div class="pillrow">
        <button class="btn btn-outline" onclick="__tlShuffle()">🔀 Shuffle</button>
        <button class="btn btn-primary" onclick="__tlCheck()">✓ Check Order</button>
        ${checked?`<div class="pill" style="${allOk?'border-color:var(--gold);color:var(--gold)':'border-color:var(--destructive);color:var(--destructive)'}">${allOk?'Perfect! +150 XP':matches.filter(Boolean).length+'/'+order.length+' in place'}</div>`:''}
      </div>
      <div>${order.map((e,i)=>{
        const ok = checked && matches[i], bad = checked && !matches[i];
        return `<div class="tl-item ${ok?'correct':bad?'wrong':''}">
          <div class="tl-year">${checked?e.year:'????'}</div>
          <div style="flex:1">${e.event}</div>
          <div class="tl-ud"><button onclick="__tlMove(${i},${i-1})">↑</button><button onclick="__tlMove(${i},${i+1})">↓</button></div>
        </div>`;
      }).join('')}</div>`;
    app.innerHTML = Shell('Timeline of Empires', 'Order the events. Golden glow means truth.', body);
  }
  window.__tlShuffle = ()=>{ order=shuffle(DATES); checked=false; draw(); };
  window.__tlMove = (i,j)=>{ if(j<0||j>=order.length) return; const a=[...order]; const [x]=a.splice(i,1); a.splice(j,0,x); order=a; checked=false; draw(); };
  window.__tlCheck = ()=>{
    checked = true;
    const sorted=[...DATES].sort((a,b)=>a.year-b.year);
    const allOk = order.every((e,i)=>e.year===sorted[i].year);
    if(allOk){ addXp(150); update({timelineCompleted:true, dailyProgress:{...STATE.dailyProgress, timeline:true}}); }
    draw();
  };
  draw();
}

/* ---------------- QUIZ (Practice) ---------------- */
function renderQuiz(){
  let filter='all', round=0, idx=0, picked=null, score=0, pool=[];
  function buildPool(){ pool = shuffle(filter==='all'?QUESTIONS:QUESTIONS.filter(q=>q.chapter===filter||q.difficulty===filter)).slice(0,10); }
  buildPool();
  function draw(){
    const doneAll = idx>=pool.length;
    const q = pool[idx];
    const filters = [{v:'all',l:'All'},{v:'easy',l:'Easy'},{v:'medium',l:'Medium'},{v:'hard',l:'Hard'},...CHAPTERS.map(c=>({v:c.id,l:c.title}))];
    const body = `
      <div class="pillrow">${filters.map(f=>`<button class="pill ${filter===f.v?'active':''}" onclick="__quizFilter('${f.v}')">${f.l}</button>`).join('')}</div>
      <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--muted);margin-bottom:8px"><span>Question ${Math.min(idx+1,pool.length)} of ${pool.length}</span><span style="color:var(--gold)">Score: ${score}</span></div>
      <div class="progress-bar" style="margin-bottom:18px"><div class="progress-fill" style="width:${(doneAll?pool.length:idx)/pool.length*100}%"></div></div>
      <div class="card" style="min-height:340px">
      ${doneAll ? `<div style="text-align:center;padding:30px 0"><div style="font-size:50px">🏆</div><h3 class="shimmer" style="font-size:26px;margin-top:10px">Round Complete</h3><p style="color:var(--muted);margin-top:8px">You scored <b style="color:var(--gold)">${score} / ${pool.length}</b></p><button class="btn btn-primary" style="margin-top:16px" onclick="__quizAgain()">Play Again</button></div>`
        : `<div class="pill" style="display:inline-block">${q.difficulty} · ${chapterTitle(q.chapter)}</div>
           <h3 style="margin-top:10px">${q.q}</h3>
           ${renderOpts(q, picked, i=>`__quizPick(${i})`)}
           ${picked!==null?`<div class="explain-box"><div class="verdict">${picked===q.answer?'✓ Correct':'✗ Wrong'}</div><p style="margin:6px 0 12px">${q.explain}</p><button class="btn btn-primary" onclick="__quizNext()">Next →</button></div>`:''}`}
      </div>`;
    app.innerHTML = Shell('Practice Quiz', 'Ten questions. No pattern. No mercy.', body);
  }
  window.__quizFilter = (v)=>{ filter=v; round++; idx=0; picked=null; score=0; buildPool(); draw(); };
  window.__quizPick = (i)=>{ if(picked!==null) return; picked=i; const q=pool[idx]; const correct=i===q.answer; if(correct) score++; recordAnswer({id:q.id, correct, chapter:q.chapter, type:q.type}); draw(); };
  window.__quizNext = ()=>{ picked=null; idx++; draw(); };
  window.__quizAgain = ()=>{ round++; idx=0; picked=null; score=0; buildPool(); draw(); };
  draw();
}

/* ---------------- BOSS LIST + BATTLE ---------------- */
function renderBossList(){
  const body = `<div class="opt-grid" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">
    ${CHAPTERS.map(c=>`<a class="card" href="#/co/boss?chapter=${c.id}" style="display:block">
      <div style="font-size:30px">${c.emoji}</div>
      <div class="disp" style="color:var(--gold);margin-top:6px">${c.boss.name}</div>
      <div style="font-size:12px;color:var(--muted)">${c.boss.title}</div>
      <p style="font-size:13px;font-style:italic;color:#cfc7ea;margin-top:6px">"${c.boss.quote}"</p>
      <div style="margin-top:8px;display:flex;gap:8px;font-size:11.5px">
        <span class="pill" style="border-color:var(--destructive);color:var(--destructive)">HP ${c.boss.hp}</span>
        <span class="pill">${c.title}</span>
      </div>
    </a>`).join('')}
  </div>`;
  app.innerHTML = Shell('Battle Arena', 'Choose your foe', body);
}
function renderBossBattle(chapterId){
  const ch = CHAPTERS.find(c=>c.id===chapterId);
  if(!ch){ nav('boss'); return; }
  const own = shuffle(QUESTIONS.filter(q=>q.chapter===chapterId));
  const rest = shuffle(QUESTIONS.filter(q=>q.chapter!==chapterId));
  const rounds = [...own, ...rest].slice(0,8);
  let bossHp=ch.boss.hp, playerHp=100, round=0, combo=0, picked=null, shake=false;
  function draw(){
    const q = rounds[round];
    const bossDead = bossHp<=0, playerDead = playerHp<=0, over = bossDead||playerDead||round>=rounds.length;
    const body = `<div class="duel-grid">
      <div class="hpcard"><div class="em">${ch.emoji}</div><div class="disp" style="color:var(--gold)">${ch.boss.name}</div>
        <div class="hpbar"><div class="fill" style="width:${Math.max(0,bossHp/ch.boss.hp*100)}%;background:linear-gradient(90deg,var(--destructive),var(--blood))"></div></div>
        <div style="font-size:12px;color:var(--muted);margin-top:4px">HP ${Math.max(0,bossHp)} / ${ch.boss.hp}</div></div>
      <div class="hpcard"><div class="em">${STATE.avatar}</div><div class="disp" style="color:var(--gold)">${STATE.playerName}</div>
        <div class="hpbar"><div class="fill" style="width:${Math.max(0,playerHp)}%;background:linear-gradient(90deg,var(--primary),#c8b8ff)"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--muted);margin-top:4px"><span>HP ${Math.max(0,playerHp)}/100</span><span>Combo ×${combo}</span></div></div>
    </div>
    <div class="card" style="margin-top:18px;min-height:220px">
      ${over ? `<div style="text-align:center">
          ${bossDead?`<div style="font-size:50px">👑</div><h3 class="shimmer" style="font-size:26px">Victory!</h3><p style="color:var(--muted);margin-top:8px">You have defeated ${ch.boss.name}. +200 XP · +2 Crowns</p>`
          : playerDead?`<div style="font-size:50px">💀</div><h3 style="font-size:24px;color:var(--destructive)">Defeat</h3><p style="color:var(--muted);margin-top:8px">The boss prevails. Study more and return.</p>`
          : `<div style="font-size:50px">🏳</div><h3 style="font-size:22px">Stalemate</h3>`}
          <div style="display:flex;gap:10px;justify-content:center;margin-top:18px">
            <a class="btn btn-outline" href="#/co/boss">Choose another foe</a>
            <a class="btn btn-primary" href="#/co/quiz">Train more</a>
          </div></div>`
      : `<div style="font-size:11px;color:var(--destructive);text-transform:uppercase;letter-spacing:.08em">Round ${round+1} · Combo ×${combo}</div>
         <h3 style="margin-top:8px">${q.q}</h3>
         ${renderOpts(q, picked, i=>`__bossPick(${i})`)}
         ${picked!==null?`<div class="explain-box" style="display:flex;justify-content:space-between;align-items:center;gap:14px"><p style="margin:0"><b style="color:var(--gold)">Truth:</b> ${q.explain}</p><button class="btn btn-primary" onclick="__bossNext()">Strike again →</button></div>`:''}`}
    </div>`;
    app.innerHTML = Shell(`⚔ Duel: ${ch.boss.name}`, ch.boss.title, body);
    if(bossDead) defeatBoss(chapterId);
  }
  window.__bossPick = (i)=>{
    if(picked!==null) return; picked=i;
    const q = rounds[round]; const correct = i===q.answer;
    recordAnswer({id:q.id, correct, chapter:q.chapter, type:q.type});
    if(correct){ const dmg=25+combo*5; bossHp=Math.max(0,bossHp-dmg); combo++; }
    else { playerHp=Math.max(0,playerHp-20); combo=0; }
    draw();
  };
  window.__bossNext = ()=>{ picked=null; round++; draw(); };
  draw();
}

/* ---------------- RAPID FIRE ---------------- */
function renderRapidFire(){
  let playing=false, timeLeft=60, round=0, idx=0, combo=0, bestCombo=0, score=0, timer=null;
  const pool = shuffle(QUESTIONS);
  function draw(){
    const q = pool[idx % pool.length];
    const body = `
      <div class="pillrow">
        <div class="pill" style="font-family:'Cinzel',serif;color:var(--gold)">⏱ ${timeLeft}s</div>
        <div class="pill">Score <b style="color:var(--gold)">${score}</b></div>
        <div class="pill">Combo ×${combo}</div>
        <div class="pill">Best combo: ${STATE.rapidBest}</div>
      </div>
      ${playing ? `<div class="card"><h3>${q.q}</h3><div class="opt-grid">${q.options.map((o,i)=>`<button class="opt-btn" onclick="__rfPick(${i})"><b>${String.fromCharCode(65+i)}.</b>${o}</button>`).join('')}</div></div>`
      : `<div class="card" style="text-align:center;padding:50px 0"><div style="font-size:50px">⚡</div><h3 style="margin-top:10px">${timeLeft<=0?`Time up! Score ${score}`:'Ready?'}</h3><button class="btn btn-primary" style="margin-top:18px" onclick="__rfStart()">${timeLeft<=0?'Play Again':'Start'}</button></div>`}`;
    app.innerHTML = Shell('Rapid Fire', '60 seconds. Combos multiply.', body);
  }
  window.__rfStart = ()=>{
    round++; idx=0; combo=0; score=0; timeLeft=60; playing=true; draw();
    timer = setInterval(()=>{ timeLeft--; if(timeLeft<=0){ clearInterval(timer); playing=false; grant({xp:score*5, coins:score*3}); if(combo>STATE.rapidBest) update({rapidBest:combo}); } draw(); },1000);
  };
  window.__rfPick = (i)=>{
    const q = pool[idx % pool.length]; const correct = i===q.answer;
    recordAnswer({id:q.id, correct, chapter:q.chapter, type:q.type});
    if(correct){ combo++; bestCombo=Math.max(bestCombo,combo); score += 1+Math.floor(combo/3); if(combo>STATE.rapidBest) update({rapidBest:combo}); }
    else combo=0;
    idx++; draw();
  };
  draw();
}

/* ---------------- MEMORY MATCH ---------------- */
function renderMemory(){
  let round=0, deck=[], flipped=[], matched=[], moves=0;
  function buildDeck(){ deck = shuffle(MEMORY_PAIRS.flatMap((pair,pi)=>pair.map(v=>({v,pair:pi})))); }
  buildDeck();
  function draw(){
    const complete = matched.length===MEMORY_PAIRS.length;
    const body = `<div class="pillrow">
        <div class="pill">Moves: <b style="color:var(--gold)">${moves}</b></div>
        <div class="pill">Matched: <b style="color:var(--gold)">${matched.length}/${MEMORY_PAIRS.length}</b></div>
        ${STATE.memoryBest>0?`<div class="pill" style="border-color:var(--primary);color:var(--primary)">Best: ${STATE.memoryBest}</div>`:''}
        <button class="btn btn-outline" style="margin-left:auto" onclick="__memNew()">🔀 New game</button>
      </div>
      <div class="mem-grid">${deck.map((c,i)=>{
        const shown = flipped.includes(i) || matched.includes(c.pair);
        return `<button class="mem-card ${shown?'flipped':''} ${matched.includes(c.pair)?'matched':''}" onclick="__memFlip(${i})">${shown?c.v:'📜'}</button>`;
      }).join('')}</div>
      ${complete?`<div style="text-align:center;margin-top:20px" class="shimmer disp" style="font-size:22px">Perfect Memory! +80 XP · +1 Scroll</div>`:''}`;
    app.innerHTML = Shell('Memory Match', 'Pair rulers with their empires, battles, and monuments', body);
  }
  window.__memNew = ()=>{ round++; buildDeck(); flipped=[]; matched=[]; moves=0; draw(); };
  window.__memFlip = (i)=>{
    if(flipped.length>=2 || flipped.includes(i) || matched.includes(deck[i].pair)) return;
    flipped=[...flipped,i];
    if(flipped.length===2){
      moves++;
      const [a,b]=flipped;
      if(deck[a].pair===deck[b].pair){
        matched=[...matched, deck[a].pair];
        setTimeout(()=>{ flipped=[]; draw(); if(matched.length===MEMORY_PAIRS.length){ grant({xp:80,coins:30,scrolls:1}); if(!STATE.memoryBest||moves<STATE.memoryBest) update({memoryBest:moves}); } },400);
      } else setTimeout(()=>{ flipped=[]; draw(); },700);
    }
    draw();
  };
  draw();
}

/* ---------------- MONUMENT PUZZLE ---------------- */
function renderPuzzle(){
  let sel=0, tiles, hold=null;
  function shuffleTiles(){ tiles = shuffle([...Array(MONUMENT_TILES[sel].cols*MONUMENT_TILES[sel].rows).keys()]); hold=null; }
  shuffleTiles();
  function draw(){
    const m = MONUMENT_TILES[sel];
    const done = tiles.every((v,i)=>v===i);
    const body = `<div class="pillrow">${MONUMENT_TILES.map((mm,i)=>`<button class="pill ${sel===i?'active':''}" onclick="__pzSel(${i})">${mm.name}</button>`).join('')}</div>
      <div style="max-width:420px;margin:0 auto">
        <p style="text-align:center;font-style:italic;color:var(--muted);font-size:13.5px">${m.fact} — built by ${m.builder}</p>
        <div style="display:grid;gap:4px;grid-template-columns:repeat(${m.cols},1fr);margin-top:12px">
          ${tiles.map((v,i)=>{
            const r0=Math.floor(v/m.cols), c0=v%m.cols, correct=v===i;
            return `<button onclick="__pzClick(${i})" style="aspect-ratio:1;border-radius:8px;border:2px solid ${correct?'var(--primary)':'var(--border)'};${hold===i?'outline:2px solid var(--gold);':''}background:linear-gradient(135deg,#4a3d7a,#241f3d);position:relative;overflow:hidden">
              <div style="position:absolute;font-size:120px;left:${-c0*100}%;top:${-r0*100}%;width:${m.cols*100}%;height:${m.rows*100}%;display:flex;align-items:center;justify-content:center;${correct?'filter:drop-shadow(0 0 6px var(--gold))':''}">${m.glyph}</div>
            </button>`;
          }).join('')}
        </div>
        ${done?`<div class="shimmer disp" style="text-align:center;font-size:20px;margin-top:18px">✨ Restored! ${m.name} added to inventory</div>`:''}
      </div>`;
    app.innerHTML = Shell('Monument Puzzle', 'Rearrange tiles to restore the monument', body);
    if(done) grant({xp:60,coins:25,scrolls:1,item:m.name});
  }
  window.__pzSel = (i)=>{ sel=i; shuffleTiles(); draw(); };
  window.__pzClick = (i)=>{
    if(hold===null) hold=i;
    else { const t=[...tiles]; [t[i],t[hold]]=[t[hold],t[i]]; tiles=t; hold=null; }
    draw();
  };
  draw();
}

/* ---------------- MAP CHALLENGE ---------------- */
function renderMapChallenge(){
  let round=0, order=[], ri=0, correctCount=0, mark=null;
  function reset(){ order=shuffle(KINGDOMS); ri=0; correctCount=0; mark=null; }
  reset();
  function draw(){
    const target = order[ri];
    const complete = ri>=order.length;
    const pct = Math.round(correctCount/order.length*100);
    const body = `<div class="pillrow">
        <div class="pill">Round ${Math.min(ri+1,order.length)} / ${order.length}</div>
        <div class="pill">Correct: <b style="color:var(--gold)">${correctCount}</b></div>
        <div class="pill" style="margin-left:auto">Best: ${STATE.mapChallengeBest}%</div>
        <button class="btn btn-outline" onclick="__mcNew()">🔀 New round</button>
      </div>
      <div class="map-svg-wrap" style="max-width:420px;margin:0 auto">
        <svg viewBox="0 0 100 100" style="width:100%;height:100%;cursor:crosshair" onclick="${complete?'':'__mcClick(event)'}">
          <path d="${INDIA_PATH}" fill="#4d3f80" stroke="var(--gold)" stroke-width="0.4"/>
          ${mark?`<circle cx="${mark.x}" cy="${mark.y}" r="2.5" fill="${mark.ok?'var(--gold)':'var(--destructive)'}"/>`:''}
          ${complete?KINGDOMS.map(k=>`<g><circle cx="${k.x}" cy="${k.y}" r="1.5" fill="var(--gold)"/><text x="${k.x}" y="${k.y-2.5}" class="map-pin-label">${k.name}</text></g>`).join(''):''}
        </svg>
      </div>
      <p style="text-align:center;margin-top:10px">${complete?`You scored ${pct}%`:`Click on: <b style="color:var(--gold)">${target?.name}</b>`}</p>`;
    app.innerHTML = Shell('Map Challenge', complete?`You scored ${pct}%`:`Click on: ${target?.name}`, body);
  }
  window.__mcNew = ()=>{ round++; reset(); draw(); };
  window.__mcClick = (ev)=>{
    const rect = ev.currentTarget.getBoundingClientRect();
    const x = (ev.clientX-rect.left)/rect.width*100, y=(ev.clientY-rect.top)/rect.height*100;
    const target = order[ri];
    const dx=x-target.x, dy=y-target.y, ok = Math.sqrt(dx*dx+dy*dy)<8;
    mark = {ok,x,y};
    if(ok) correctCount++;
    draw();
    setTimeout(()=>{
      mark=null; ri++;
      if(ri>=order.length){ const pct=Math.round(correctCount/order.length*100); grant({xp:pct,coins:pct}); if(pct>STATE.mapChallengeBest) update({mapChallengeBest:pct}); }
      draw();
    },900);
  };
  draw();
}

/* ---------------- FLASHCARDS ---------------- */
function renderFlashcards(){
  let cat='all', i=0, flip=false;
  function buildCards(){
    const cards=[];
    if(cat==='all'||cat==='rulers') CHAPTERS.forEach(c=>c.rulers.forEach(r=>cards.push({front:r.name, back:`${r.reign} · ${c.title}\n${r.facts.join(' · ')}`, tag:'Ruler'})));
    if(cat==='all'||cat==='dates') DATES.forEach(d=>cards.push({front:String(d.year), back:d.event, tag:'Date'}));
    if(cat==='all'||cat==='vocab') VOCAB.forEach(v=>cards.push({front:v.term, back:v.meaning, tag:'Vocabulary'}));
    if(cat==='all'||cat==='monuments') CHAPTERS.forEach(c=>c.monuments.forEach(m=>cards.push({front:m, back:`Associated with ${c.title} (${c.years})`, tag:'Monument'})));
    return cards;
  }
  let cards = buildCards();
  function draw(){
    const c = cards[i % cards.length];
    const body = `
      <div class="pillrow">${[{v:'all',l:'All'},{v:'rulers',l:'Rulers'},{v:'dates',l:'Dates'},{v:'vocab',l:'Vocabulary'},{v:'monuments',l:'Monuments'}].map(o=>`<button class="pill ${cat===o.v?'active':''}" onclick="__fcCat('${o.v}')">${o.l}</button>`).join('')}</div>
      <div class="flash-wrap">
        <div style="text-align:center;font-size:12px;color:var(--muted);margin-bottom:8px">Card ${i%cards.length+1} of ${cards.length}</div>
        <div class="flash-card" onclick="__fcFlip()">
          <div class="tag">${c.tag}</div>
          ${flip?`<div class="back">${c.back}</div>`:`<div class="front">${c.front}</div>`}
          <div style="margin-top:16px;font-size:11px;opacity:.6">Tap to ${flip?'hide':'reveal'}</div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:16px">
          <button class="btn btn-outline" onclick="__fcPrev()">← Prev</button>
          <button class="btn btn-primary" onclick="__fcNextCard()">Next →</button>
        </div>
      </div>`;
    app.innerHTML = Shell('Flashcards', 'Tap to flip. Slide to the next.', body);
  }
  window.__fcCat = (v)=>{ cat=v; i=0; flip=false; cards=buildCards(); draw(); };
  window.__fcFlip = ()=>{ flip=!flip; draw(); };
  window.__fcPrev = ()=>{ i=(i-1+cards.length)%cards.length; flip=false; draw(); };
  window.__fcNextCard = ()=>{ i=(i+1)%cards.length; flip=false; draw(); };
  draw();
}

/* ---------------- MOCK TEST (EXAM) ---------------- */
function renderExam(){
  let count=20, run=0, pool=[], picks={}, submitted=false;
  function buildPool(){ pool = shuffle(QUESTIONS).slice(0,count); }
  buildPool();
  function draw(){
    const scoreVal = pool.reduce((s,q,i)=>s+(picks[i]===q.answer?1:0),0);
    const body = `
      <div class="pillrow">
        ${[10,20,40].map(n=>`<button class="pill ${count===n?'active':''}" onclick="__exSet(${n})">${n} Questions</button>`).join('')}
        <div style="margin-left:auto;font-size:12px;color:var(--muted)">Answered ${Object.keys(picks).length} / ${pool.length}</div>
      </div>
      ${submitted?`<div class="card" style="text-align:center;margin-bottom:20px;border-color:var(--primary)"><div class="shimmer disp" style="font-size:26px">Score: ${scoreVal} / ${pool.length}</div><div style="color:var(--muted);margin-top:4px">${Math.round(scoreVal/pool.length*100)}% · Review answers below</div></div>`:''}
      <div>${pool.map((q,i)=>{
        const picked = picks[i];
        return `<div class="card" style="margin-bottom:14px;${submitted?(picked===q.answer?'border-color:var(--primary)':'border-color:var(--destructive)'):''}">
          <div style="display:flex;gap:8px;align-items:center;font-size:12px;color:var(--muted);margin-bottom:6px"><span style="color:var(--gold);font-family:'Cinzel',serif">Q${i+1}.</span><span style="text-transform:uppercase;color:var(--primary)">${q.difficulty}</span></div>
          <h3 style="margin:0 0 10px">${q.q}</h3>
          <div class="opt-grid">${q.options.map((o,oi)=>{
            let cls='opt-btn';
            if(submitted){ if(oi===q.answer) cls+=' correct'; else if(oi===picked) cls+=' wrong'; }
            else if(oi===picked) cls+=' correct';
            return `<button class="${cls}" ${submitted?'disabled':''} onclick="__exPick(${i},${oi})"><b>${String.fromCharCode(65+oi)}.</b>${o}</button>`;
          }).join('')}</div>
          ${submitted?`<p style="font-size:12.5px;color:var(--muted);font-style:italic;margin-top:10px">${q.explain}</p>`:''}
        </div>`;
      }).join('')}</div>
      <div style="text-align:center;margin-top:10px">${submitted?`<button class="btn btn-outline" onclick="__exNew()">New Test</button>`:`<button class="btn btn-primary" onclick="__exSubmit()">Submit Test</button>`}</div>`;
    app.innerHTML = Shell('Mock Board Test', 'Answer all. Submit for report.', body);
  }
  window.__exSet = (n)=>{ count=n; run++; picks={}; submitted=false; buildPool(); draw(); };
  window.__exPick = (i,oi)=>{ if(submitted) return; picks={...picks,[i]:oi}; draw(); };
  window.__exSubmit = ()=>{ submitted=true; const scoreVal = pool.reduce((s,q,i)=>s+(picks[i]===q.answer?1:0),0); addXp(scoreVal*10); draw(); };
  window.__exNew = ()=>{ run++; picks={}; submitted=false; buildPool(); draw(); };
  draw();
}

/* ---------------- REVISION (local review of wrong answers) ---------------- */
function renderRevision(){
  const wrong = STATE.wrongIds.map(id=>QUESTIONS.find(q=>q.id===id)).filter(Boolean);
  const body = wrong.length===0
    ? `<div class="card" style="text-align:center;padding:40px 0"><div style="font-size:40px">🩹</div><p style="color:var(--muted);margin-top:12px">No weak spots logged yet — answer some questions wrong (it happens!) and they'll appear here for review.</p><a class="btn btn-primary" style="margin-top:14px;display:inline-block" href="#/co/quiz">Go to Practice Quiz</a></div>`
    : `<p style="color:var(--muted);font-size:13.5px;margin-bottom:16px">Local revision review, built from your own missed questions and their explanations — no external AI needed.</p>
       <div>${wrong.map(q=>`<div class="card" style="margin-bottom:12px">
          <div class="pill" style="display:inline-block;margin-bottom:8px">${chapterTitle(q.chapter)} · ${q.difficulty}</div>
          <h3 style="margin:0 0 8px">${q.q}</h3>
          <p style="font-size:13.5px"><b style="color:var(--gold)">Answer:</b> ${q.options[q.answer]}</p>
          <p style="font-size:13px;color:var(--muted)">${q.explain}</p>
        </div>`).join('')}</div>`;
  app.innerHTML = Shell('AI Revision', 'Review of your weak spots (local, from your answer history)', body);
}

/* ---------------- DAILY MISSIONS ---------------- */
function renderMissions(){
  const d = STATE.dailyProgress;
  const items = [
    {label:'Answer 25 questions', done:d.qs>=25, value:`${Math.min(d.qs,25)}/25`, link:'quiz'},
    {label:'Complete the timeline', done:d.timeline, value:d.timeline?'✓':'○', link:'timeline'},
    {label:'Defeat any boss', done:d.boss, value:d.boss?'✓':'○', link:'boss'},
    {label:'Complete a chapter', done:d.chapter, value:d.chapter?'✓':'○', link:'story'},
  ];
  const allDone = items.every(i=>i.done);
  const body = `<div style="max-width:520px;margin:0 auto">
    ${items.map(i=>`<a class="chapter-card" href="#/co/${i.link}" style="align-items:center">
        <div class="ic">${i.done?'✅':'◽'}</div>
        <div><div class="disp" style="color:var(--gold)">${i.label}</div><div style="font-size:12px;color:var(--muted)">${i.value}</div></div>
      </a>`).join('')}
    <button class="btn btn-primary" style="width:100%;margin-top:8px" ${allDone?'':'disabled style="opacity:.3"'} onclick="__claimStreak()">${allDone?'Claim +1 Streak · +2 💎':'Complete all to claim'}</button>
  </div>`;
  app.innerHTML = Shell('Daily Missions', `Streak: ${STATE.streak} 🔥 · Resets at midnight`, body);
  window.__claimStreak = ()=>{ completeDailyStreak(); renderMissions(); };
}

/* ---------------- ACHIEVEMENTS ---------------- */
function renderAchievements(){
  const list = ACHIEVEMENT_DEFS.map(a=>({...a, earned:a.test(STATE)}));
  const body = `<div class="ach-grid">${list.map(a=>`<div class="ach-card ${a.earned?'earned':''}">
      <div class="ic" style="${a.earned?'':'filter:grayscale(1);opacity:.6'}">${a.icon}</div>
      <div class="disp" style="color:var(--gold);margin-top:6px">${a.label}</div>
      <p style="font-size:12.5px;color:var(--muted)">${a.desc}</p>
      <div style="margin-top:8px;font-family:'Cinzel',serif;font-size:11.5px;color:${a.earned?'var(--primary)':'var(--muted)'}">${a.earned?'✓ EARNED':'○ LOCKED'}</div>
    </div>`).join('')}</div>`;
  app.innerHTML = Shell('Hall of Achievements', `${list.filter(a=>a.earned).length} / ${list.length} unlocked`, body);
}

/* ---------------- ANALYTICS ---------------- */
function renderAnalytics(){
  const acc = STATE.questionsAnswered ? Math.round(STATE.correctAnswers/STATE.questionsAnswered*100) : 0;
  const maxQs = Math.max(1, ...STATE.history.map(h=>h.qs));
  const chapterRows = Object.entries(STATE.chapterAcc).map(([id,a])=>`<div class="stat-tile" style="text-align:left;padding:10px 14px"><div style="display:flex;justify-content:space-between"><span>${chapterTitle(id)}</span><span style="color:var(--gold)">${a.right}/${a.seen}</span></div><div class="progress-bar" style="margin-top:6px"><div class="progress-fill" style="width:${a.seen?a.right/a.seen*100:0}%"></div></div></div>`).join('') || `<p style="color:var(--muted)">Answer some questions to see your chapter breakdown.</p>`;
  const bars = STATE.history.map(h=>`<div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1"><div style="width:100%;background:#00000030;border-radius:4px;height:70px;display:flex;align-items:flex-end"><div style="width:100%;background:linear-gradient(180deg,var(--primary),var(--gold));border-radius:4px;height:${h.qs/maxQs*100}%"></div></div><div style="font-size:9px;color:var(--muted)">${h.date.slice(5)}</div></div>`).join('') || `<p style="color:var(--muted)">No activity yet.</p>`;
  const body = `
    <div class="opt-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:20px">
      <div class="stat-tile"><div class="n">${STATE.questionsAnswered}</div><div class="l">Questions</div></div>
      <div class="stat-tile"><div class="n">${acc}%</div><div class="l">Accuracy</div></div>
      <div class="stat-tile"><div class="n">${STATE.completedChapters.length}</div><div class="l">Chapters</div></div>
      <div class="stat-tile"><div class="n">${STATE.bossesDefeated.length}</div><div class="l">Bosses</div></div>
    </div>
    <div class="card" style="margin-bottom:16px"><h3 style="margin-top:0;font-size:15px;color:var(--gold)">Last ${STATE.history.length} active days</h3><div style="display:flex;gap:6px;align-items:flex-end;margin-top:14px">${bars}</div></div>
    <div class="card"><h3 style="margin-top:0;font-size:15px;color:var(--gold)">Accuracy by chapter</h3><div style="display:grid;gap:8px;margin-top:12px">${chapterRows}</div></div>`;
  app.innerHTML = Shell('Analytics', 'Your study patterns, measured', body);
}

/* ---------------- INVENTORY ---------------- */
function renderInventory(){
  const banners = ['🏳','🚩','🏴','⚔','☬','🕌','🏰'];
  const body = `<div class="opt-grid" style="grid-template-columns:1fr 1fr">
    <div>
      <h3 style="color:var(--gold);font-size:15px">Kingdom Banner</h3>
      <div class="pillrow">${banners.map(b=>`<button class="pill ${STATE.banner===b?'active':''}" style="font-size:20px;padding:8px 14px" onclick="__invBanner('${b}')">${b}</button>`).join('')}</div>
      <h3 style="color:var(--gold);font-size:15px;margin-top:20px">Treasury</h3>
      <div class="opt-grid" style="grid-template-columns:repeat(4,1fr)">
        <div class="stat-tile"><div style="font-size:20px">🪙</div><div class="n">${STATE.coins}</div></div>
        <div class="stat-tile"><div style="font-size:20px">👑</div><div class="n">${STATE.crowns}</div></div>
        <div class="stat-tile"><div style="font-size:20px">📜</div><div class="n">${STATE.scrolls}</div></div>
        <div class="stat-tile"><div style="font-size:20px">💎</div><div class="n">${STATE.diamonds}</div></div>
      </div>
    </div>
    <div>
      <h3 style="color:var(--gold);font-size:15px">Artifacts (${STATE.inventory.length})</h3>
      ${STATE.inventory.length===0?`<p style="color:var(--muted);font-style:italic;font-size:13.5px">Restore monuments in Puzzle Mode to collect artifacts.</p>`
        :`<div>${STATE.inventory.map(i=>`<div class="chapter-card" style="padding:10px 14px"><div class="ic" style="font-size:22px">🏛</div><div class="disp">${i}</div></div>`).join('')}</div>`}
    </div>
  </div>`;
  app.innerHTML = Shell('Royal Inventory', 'Artifacts collected on your journey', body);
  window.__invBanner = (b)=>{ update({banner:b}); renderInventory(); };
}

/* ---------------- PROGRESS ---------------- */
function renderProgress(){
  const lv = levelInfo(STATE.xp);
  const acc = STATE.questionsAnswered ? Math.round(STATE.correctAnswers/STATE.questionsAnswered*100) : 0;
  const avatars = ['🧙','🤴','👸','🥷','👳','🧝','🧛'];
  function bar(label,val,max){ return `<div><div style="display:flex;justify-content:space-between;font-size:12px;color:var(--muted);margin-bottom:4px"><span>${label}</span><span style="color:var(--gold)">${val} / ${max}</span></div><div class="progress-bar"><div class="progress-fill" style="width:${max?Math.min(100,val/max*100):0}%"></div></div></div>`; }
  const body = `<div class="opt-grid" style="grid-template-columns:1fr 2fr;align-items:start">
    <div class="card">
      <div style="text-align:center">
        <div style="font-size:56px">${STATE.avatar}</div>
        <input type="text" value="${STATE.playerName}" id="pname" onchange="__setName(this.value)">
        <div style="font-size:11px;letter-spacing:.1em;color:var(--primary);text-transform:uppercase;margin-top:10px">Level ${lv.level}</div>
        <div class="disp" style="font-size:17px">${lv.title}</div>
        <div class="progress-bar" style="margin-top:8px"><div class="progress-fill" style="width:${lv.progress*100}%"></div></div>
        <div style="font-size:11.5px;color:var(--muted);margin-top:4px">${STATE.xp} XP · next at ${lv.next}</div>
      </div>
      <div class="opt-grid" style="grid-template-columns:repeat(3,1fr);margin-top:18px">
        <div class="stat-tile"><div class="n">${STATE.crowns}</div><div class="l">👑</div></div>
        <div class="stat-tile"><div class="n">${STATE.coins}</div><div class="l">🪙</div></div>
        <div class="stat-tile"><div class="n">${acc}%</div><div class="l">Acc</div></div>
      </div>
      <div class="pillrow" style="margin-top:14px">${avatars.map(a=>`<button class="pill ${STATE.avatar===a?'active':''}" style="font-size:18px;padding:6px 10px" onclick="__setAvatar('${a}')">${a}</button>`).join('')}</div>
      <button class="btn btn-outline" style="width:100%;margin-top:16px;border-color:var(--destructive);color:var(--destructive)" onclick="__resetSave()">Reset save</button>
    </div>
    <div>
      <div class="card" style="margin-bottom:16px">
        <h3 style="margin-top:0;color:var(--gold);font-size:15px">Mastery</h3>
        <div style="display:grid;gap:12px;margin-top:12px">
          ${bar('Chapters completed', STATE.completedChapters.length, CHAPTERS.length)}
          ${bar('Bosses defeated', STATE.bossesDefeated.length, CHAPTERS.length)}
          ${bar('Kingdoms explored', STATE.visitedKingdoms.length, KINGDOMS.length)}
          ${bar('Questions answered', STATE.questionsAnswered, Math.max(100,STATE.questionsAnswered))}
        </div>
      </div>
      <div class="card">
        <h3 style="margin-top:0;color:var(--gold);font-size:15px">Chapter Progress</h3>
        <div class="opt-grid" style="margin-top:10px">
          ${CHAPTERS.map(c=>`<a class="chapter-card" style="padding:10px 14px" href="#/co/story?chapter=${c.id}">
            <div class="ic" style="font-size:22px">${c.emoji}</div>
            <div><div class="disp" style="color:var(--gold);font-size:14px">${c.title}</div><div style="font-size:11.5px;color:var(--muted)">${c.years}</div></div>
            <div style="margin-left:auto;font-size:12px">${STATE.completedChapters.includes(c.id)?'📖':'○'} ${STATE.bossesDefeated.includes(c.id)?'⚔':'○'}</div>
          </a>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
  app.innerHTML = Shell('Your Chronicle', 'Every step across the colonial era in India', body);
  window.__setName = (v)=>{ update({playerName:v}); };
  window.__setAvatar = (a)=>{ update({avatar:a}); renderProgress(); };
  window.__resetSave = ()=>{ if(confirm('Erase all progress?')){ resetSave(); renderProgress(); } };
}

/* ---------------- SETTINGS ---------------- */
function renderSettings(){
  const s = STATE.settings;
  const body = `<div style="max-width:460px;margin:0 auto">
    <div class="toggle"><span class="disp">🔊 Sound effects</span><div class="switch ${s.sound?'on':''}" onclick="__toggle('sound')"><div class="knob"></div></div></div>
    <div class="toggle"><span class="disp">✨ Animations</span><div class="switch ${s.animations?'on':''}" onclick="__toggle('animations')"><div class="knob"></div></div></div>
    <div class="card" style="margin-bottom:10px">
      <div class="disp" style="margin-bottom:10px">🎯 Difficulty</div>
      <div class="pillrow">${['adaptive','easy','medium','hard'].map(d=>`<button class="pill ${s.difficulty===d?'active':''}" onclick="__setDiff('${d}')">${d}</button>`).join('')}</div>
    </div>
    <div class="card">
      <div class="disp" style="margin-bottom:10px">🌐 Language</div>
      <div class="pillrow">${[{v:'en',l:'English'},{v:'hi',l:'हिंदी'}].map(l=>`<button class="pill ${s.language===l.v?'active':''}" onclick="__setLang('${l.v}')">${l.l}</button>`).join('')}</div>
      <p style="font-size:12px;color:var(--muted);font-style:italic;margin-top:10px">Hindi mode partial — quiz explanations remain in English for accuracy to NCERT wording.</p>
    </div>
  </div>`;
  app.innerHTML = Shell('Settings', 'Customise your experience', body);
  window.__toggle = (k)=>{ updateSettings({[k]: !STATE.settings[k]}); renderSettings(); };
  window.__setDiff = (d)=>{ updateSettings({difficulty:d}); renderSettings(); };
  window.__setLang = (l)=>{ updateSettings({language:l}); renderSettings(); };
}

/* ============================== INIT ============================== */
route();

}
window.SubjectApps = window.SubjectApps || {};
window.SubjectApps['co'] = { init: coInit };
