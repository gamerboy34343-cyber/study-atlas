function bbInit(){

/* ================= DATA ================= */
const ELEMENTS = {
  H:{name:'Hydrogen',valence:1,metal:false,color:'#e5e7eb',shells:[1]},
  Li:{name:'Lithium',valence:1,metal:true,color:'#f472b6',shells:[2,1]},
  Na:{name:'Sodium',valence:1,metal:true,color:'#f5a95f',shells:[2,8,1]},
  K:{name:'Potassium',valence:1,metal:true,color:'#e29cf2',shells:[2,8,8,1]},
  Mg:{name:'Magnesium',valence:2,metal:true,color:'#c9a0e8',shells:[2,8,2]},
  Ca:{name:'Calcium',valence:2,metal:true,color:'#93c5fd',shells:[2,8,8,2]},
  Al:{name:'Aluminum',valence:3,metal:true,color:'#b0b3bd',shells:[2,8,3]},
  C:{name:'Carbon',valence:4,metal:false,color:'#9ca3af',shells:[2,4]},
  N:{name:'Nitrogen',valence:5,metal:false,color:'#60a5fa',shells:[2,5]},
  O:{name:'Oxygen',valence:6,metal:false,color:'#f08a7a',shells:[2,6]},
  F:{name:'Fluorine',valence:7,metal:false,color:'#7be0c4',shells:[2,7]},
  Cl:{name:'Chlorine',valence:7,metal:false,color:'#7fd9a0',shells:[2,8,7]},
  Br:{name:'Bromine',valence:7,metal:false,color:'#c08a5a',shells:[2,8,18,7]},
  S:{name:'Sulfur',valence:6,metal:false,color:'#f4e07a',shells:[2,8,6]},
  P:{name:'Phosphorus',valence:5,metal:false,color:'#f0a8d0',shells:[2,8,5]},
};
const IONS = {
  OH:{name:'Hydroxide',charge:-1}, NO3:{name:'Nitrate',charge:-1},
  SO4:{name:'Sulfate',charge:-2}, CO3:{name:'Carbonate',charge:-2},
  PO4:{name:'Phosphate',charge:-3}, NH4:{name:'Ammonium',charge:1},
};
function metalCharge(el){ return ELEMENTS[el].valence; }
function nonmetalCharge(el){ return ELEMENTS[el].valence - 8; }
function gcd(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){[a,b]=[b,a%b];} return a||1; }

let uid = 0;
function V(el){ return {id:++uid, type:'valence', title:`${ELEMENTS[el].name}'s Valence`, el}; }
function VT(el,title){ return {id:++uid, type:'valence', title, el}; }
function C(el){ return {id:++uid, type:'classify', title:`Classify ${ELEMENTS[el].name}`, el}; }
function CT(el,title){ return {id:++uid, type:'classify', title, el}; }
function I(metal,nonmetal,titleOverride){
  const name = ionicName(metal,nonmetal);
  return {id:++uid, type:'ionic', title: titleOverride || name.title, metal, nonmetal};
}
function ionicName(metal,nonmetal){
  const mc = metalCharge(metal), nc = nonmetalCharge(nonmetal);
  const g = gcd(mc,nc);
  const cM = Math.abs(nc)/g, cN = Math.abs(mc)/g;
  const suffixMap = {O:'Oxide',F:'Fluoride',Cl:'Chloride',Br:'Bromide',N:'Nitride',S:'Sulfide',P:'Phosphide'};
  return { title:`${ELEMENTS[metal].name} ${cN>1?'':''}${suffixMap[nonmetal]||nonmetal}`.trim(), cM, cN };
}
function CV(name, center, arms, titleOverride){
  return {id:++uid, type:'covalent', title: titleOverride||name, name, center, arms};
}
function CVG(name, atoms, bonds, titleOverride){
  return {id:++uid, type:'covalent', title: titleOverride||name, name, graph:{atoms,bonds}};
}
function P(cation, anion, titleOverride){
  return {id:++uid, type:'polyionic', title: titleOverride || polyName(cation,anion), cation, anion};
}
function polyName(cation, anion){
  const cIsIon = !!IONS[cation], aIsIon = !!IONS[anion];
  const cName = cIsIon ? IONS[cation].name : ELEMENTS[cation].name;
  const aName = aIsIon ? IONS[anion].name : (({O:'Oxide',F:'Fluoride',Cl:'Chloride',Br:'Bromide'})[anion]||anion);
  return `${cName} ${aName}`;
}

const WORLDS = [
  {title:'Atoms & Electrons', levels:[V('Na'),V('O'),V('Cl')]},
  {title:'Metals vs Non-metals', levels:[C('Na'),C('Cl'),C('Mg')]},
  {title:'Ionic Bonds', levels:[I('Na','Cl'),I('Mg','O'),I('Ca','F'),I('Al','O')]},
  {title:'Covalent Bonds', levels:[
    CV('Hydrogen Molecule','H',[{el:'H',order:1}]),
    CV('Water','O',[{el:'H',order:1},{el:'H',order:1}]),
    CV('Oxygen Gas','O',[{el:'O',order:2}]),
    CV('Methane','C',[{el:'H',order:1},{el:'H',order:1},{el:'H',order:1},{el:'H',order:1}]),
    CV('Nitrogen Gas','N',[{el:'N',order:3}]),
    CV('Carbon Dioxide','C',[{el:'O',order:2},{el:'O',order:2}]),
    CV('Ammonia','N',[{el:'H',order:1},{el:'H',order:1},{el:'H',order:1}]),
  ]},
  {title:'Master Chemist', levels:[I('K','Br'),CV('Hydrogen Chloride','Cl',[{el:'H',order:1}]),I('Li','F')]},
  {title:'Valence Mastery', levels:[V('Li'),V('C'),V('N'),V('F'),V('Mg'),V('Al'),V('K'),V('Ca'),V('Br'),V('H')]},
  {title:'Metals vs Non-metals', levels:[C('Li'),C('K'),C('Ca'),C('Al'),C('H'),C('C'),C('N'),C('F'),C('O'),C('Br')]},
  {title:'Simple Salts', levels:[I('Li','Cl'),I('Li','Br'),I('Na','F'),I('Na','Br'),I('K','F'),I('K','Cl'),I('Ca','O'),I('Li','O'),I('Na','O'),I('K','O')]},
  {title:'Charge Balancing', levels:[I('Mg','F'),I('Mg','Cl'),I('Mg','Br'),I('Ca','Cl'),I('Ca','Br'),I('Al','F'),I('Al','Cl'),I('Al','Br'),I('Mg','N'),I('Ca','N')]},
  {title:'Diatomics & Beyond', levels:[
    CV('Fluorine Gas','F',[{el:'F',order:1}]),
    CV('Chlorine Gas','Cl',[{el:'Cl',order:1}]),
    CV('Bromine Liquid','Br',[{el:'Br',order:1}]),
    CV('Hydrogen Fluoride','F',[{el:'H',order:1}]),
    CV('Hydrogen Bromide','Br',[{el:'H',order:1}]),
    CV('Carbon Monoxide','C',[{el:'O',order:3}]),
    CV('Carbon Tetrafluoride','C',[{el:'F',order:1},{el:'F',order:1},{el:'F',order:1},{el:'F',order:1}]),
    CV('Carbon Tetrachloride','C',[{el:'Cl',order:1},{el:'Cl',order:1},{el:'Cl',order:1},{el:'Cl',order:1}]),
    CV('Carbon Tetrabromide','C',[{el:'Br',order:1},{el:'Br',order:1},{el:'Br',order:1},{el:'Br',order:1}]),
    CV('Nitrogen Trifluoride','N',[{el:'F',order:1},{el:'F',order:1},{el:'F',order:1}]),
  ]},
  {title:'Molecule Shapes', levels:[
    CV('Nitrogen Trichloride','N',[{el:'Cl',order:1},{el:'Cl',order:1},{el:'Cl',order:1}]),
    CV('Nitrogen Tribromide','N',[{el:'Br',order:1},{el:'Br',order:1},{el:'Br',order:1}]),
    CV('Oxygen Difluoride','O',[{el:'F',order:1},{el:'F',order:1}]),
    CV('Dichlorine Monoxide','O',[{el:'Cl',order:1},{el:'Cl',order:1}]),
    CV('Dibromine Monoxide','O',[{el:'Br',order:1},{el:'Br',order:1}]),
    Object.assign(CV('Hydrogen Cyanide','C',[{el:'H',order:1},{el:'N',order:3}]),{formulaOverride:'HCN'}),
    Object.assign(CV('Cyanogen Chloride','C',[{el:'Cl',order:1},{el:'N',order:3}]),{formulaOverride:'ClCN'}),
    CV('Formaldehyde','C',[{el:'H',order:1},{el:'H',order:1},{el:'O',order:2}]),
    CVG('Acetylene',[{id:'a',el:'H',x:20,y:50},{id:'b',el:'C',x:38,y:50},{id:'c',el:'C',x:62,y:50},{id:'d',el:'H',x:80,y:50}],
        [{a:'a',b:'b',order:1},{a:'b',b:'c',order:3},{a:'c',b:'d',order:1}]),
    CVG('Ethylene',[{id:'h1',el:'H',x:14,y:30},{id:'h2',el:'H',x:14,y:70},{id:'c1',el:'C',x:38,y:50},{id:'c2',el:'C',x:62,y:50},{id:'h3',el:'H',x:86,y:30},{id:'h4',el:'H',x:86,y:70}],
        [{a:'h1',b:'c1',order:1},{a:'h2',b:'c1',order:1},{a:'c1',b:'c2',order:2},{a:'c2',b:'h3',order:1},{a:'c2',b:'h4',order:1}]),
  ]},
  {title:'Halide Hunt', levels:[
    VT('Cl',"Chlorine's Valence Again"), VT('Br',"Bromine's Outer Shell"),
    CT('F','Is Fluorine a Metal?'), CT('Br','Is Bromine a Metal?'),
    I('Li','F','Lithium Fluoride Redux'), I('K','Br','Potassium Bromide Redux'),
    I('Ca','F','Fluorite'), I('K','Cl',"Rock Salt's Cousin"),
    I('Al','F','Aluminum in Toothpaste?'), I('Al','Cl','Aluminum Trichloride'),
  ]},
  {title:'Oxide Odyssey', levels:[
    I('Na','O','Sodium Oxide Encore'), I('K','O','Potassium Oxide Encore'), I('Li','O','Lithium Oxide Encore'),
    I('Ca','O','Quicklime'), I('Mg','O','Magnesia'), I('Al','O','Corundum'),
    CV('Carbon Dioxide Redux','C',[{el:'O',order:2},{el:'O',order:2}]),
    CV('Carbon Monoxide Redux','C',[{el:'O',order:3}]),
    CV('Oxygen Difluoride Redux','O',[{el:'F',order:1},{el:'F',order:1}]),
    CV('Oxygen Gas Redux','O',[{el:'O',order:2}]),
  ]},
  {title:'Nitrogen & Hydrogen', levels:[
    V('N'), V('H'), C('N'), C('H'),
    CV('Ammonia Redux','N',[{el:'H',order:1},{el:'H',order:1},{el:'H',order:1}]),
    CV('Hydrogen Gas Redux','H',[{el:'H',order:1}]),
    CV('Water Redux','O',[{el:'H',order:1},{el:'H',order:1}]),
    CV('Hydrogen Chloride Redux','Cl',[{el:'H',order:1}]),
    CV('Nitrogen Gas Redux','N',[{el:'N',order:3}]),
    CV('Methane Redux','C',[{el:'H',order:1},{el:'H',order:1},{el:'H',order:1},{el:'H',order:1}]),
  ]},
  {title:'Grand Finale', levels:[
    VT('Al',"Aluminum's Valence"), CT('Ca','Classify Calcium'),
    I('Na','Cl','Table Salt Finale'), I('Ca','F','Fluorite Finale'), I('Al','O','Sapphire Finale'),
    CV('Hydrogen Finale','H',[{el:'H',order:1}]),
    CV('Oxygen Finale','O',[{el:'O',order:2}]),
    CV('Nitrogen Finale','N',[{el:'N',order:3}]),
    CV('Water Finale','O',[{el:'H',order:1},{el:'H',order:1}]),
    CV('Methane Finale','C',[{el:'H',order:1},{el:'H',order:1},{el:'H',order:1},{el:'H',order:1}]),
  ]},
  {title:'Polyatomic Ions', levels:[
    P('Na','OH','Sodium Hydroxide'), P('K','OH','Potassium Hydroxide'),
    P('NH4','Cl','Ammonium Chloride'), P('Na','NO3','Sodium Nitrate'), P('K','NO3','Potassium Nitrate'),
    P('Ca','OH','Calcium Hydroxide'), P('Mg','OH','Magnesium Hydroxide'),
  ]},
  {title:'Sulfates & Carbonates', levels:[
    P('Na','SO4','Sodium Sulfate'), P('K','SO4','Potassium Sulfate'), P('Ca','SO4','Calcium Sulfate'),
    P('NH4','SO4','Ammonium Sulfate'), P('Na','CO3','Sodium Carbonate'), P('Ca','CO3','Calcium Carbonate'),
    P('K','PO4','Potassium Phosphate'), P('Ca','PO4','Calcium Phosphate'), P('NH4','NO3','Ammonium Nitrate'),
  ]},
  {title:'More Molecules', levels:[
    CV('Sulfur Dioxide','S',[{el:'O',order:2},{el:'O',order:2}]),
    CV('Sulfur Trioxide','S',[{el:'O',order:2},{el:'O',order:2},{el:'O',order:2}]),
    CV('Hydrogen Sulfide','S',[{el:'H',order:1},{el:'H',order:1}]),
    CV('Phosphine','P',[{el:'H',order:1},{el:'H',order:1},{el:'H',order:1}]),
    CV('Phosphorus Trichloride','P',[{el:'Cl',order:1},{el:'Cl',order:1},{el:'Cl',order:1}]),
    CV('Nitric Oxide','N',[{el:'O',order:2}]),
    CV('Nitrogen Dioxide','N',[{el:'O',order:1},{el:'O',order:2}]),
    CVG('Hydrogen Peroxide',[{id:'h1',el:'H',x:16,y:50},{id:'o1',el:'O',x:38,y:40},{id:'o2',el:'O',x:62,y:60},{id:'h2',el:'H',x:84,y:50}],
        [{a:'h1',b:'o1',order:1},{a:'o1',b:'o2',order:1},{a:'o2',b:'h2',order:1}]),
    CVG('Ethane',[{id:'h1',el:'H',x:14,y:30},{id:'h2',el:'H',x:14,y:70},{id:'h3',el:'H',x:30,y:14},{id:'c1',el:'C',x:38,y:50},{id:'c2',el:'C',x:62,y:50},{id:'h4',el:'H',x:70,y:86},{id:'h5',el:'H',x:86,y:30},{id:'h6',el:'H',x:86,y:70}],
        [{a:'h1',b:'c1',order:1},{a:'h2',b:'c1',order:1},{a:'h3',b:'c1',order:1},{a:'c1',b:'c2',order:1},{a:'c2',b:'h4',order:1},{a:'c2',b:'h5',order:1},{a:'c2',b:'h6',order:1}]),
    CVG('Methanol',[{id:'h1',el:'H',x:10,y:30},{id:'h2',el:'H',x:10,y:70},{id:'h3',el:'H',x:26,y:12},{id:'c1',el:'C',x:34,y:50},{id:'o1',el:'O',x:62,y:50},{id:'h4',el:'H',x:84,y:50}],
        [{a:'h1',b:'c1',order:1},{a:'h2',b:'c1',order:1},{a:'h3',b:'c1',order:1},{a:'c1',b:'o1',order:1},{a:'o1',b:'h4',order:1}]),
  ]},
];

/* flatten with world/level numbering */
const LEVELS = [];
WORLDS.forEach((w,wi)=>{
  w.levels.forEach(lv=>{
    lv.world = wi; lv.num = LEVELS.length+1;
    LEVELS.push(lv);
  });
});

/* ================= STATE ================= */
const STORE_KEY = 'atlas-bond-builder-progress';
let progress = JSON.parse(localStorage.getItem(STORE_KEY) || '{"stars":{},"xp":0,"coins":0,"weak":{}}');
if(typeof atlasProfile !== 'undefined' && atlasProfile){ progress.xp = atlasProfile.xp||0; progress.coins = atlasProfile.coins||0; }
function saveProgress(){ localStorage.setItem(STORE_KEY, JSON.stringify(progress)); }
function totalStars(){ return Object.values(progress.stars).reduce((a,b)=>a+b,0); }
function activeUnreviewedWorldBb(){
  for(let wi=0; wi<WORLDS.length; wi++){
    const started = WORLDS[wi].levels.some(l=>progress.stars[l.num]!==undefined);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('bb', String(wi));
    if(started && !reviewed) return wi;
  }
  return -1;
}
function isWorldUnlockedBb(worldIdx){
  const active = activeUnreviewedWorldBb();
  return active===-1 || active===worldIdx;
}
function worldNeedsReviewBb(worldIdx){
  const active = activeUnreviewedWorldBb();
  return active!==-1 && active!==worldIdx;
}
function openWorldReviewBb(){
  const active = activeUnreviewedWorldBb();
  if(active===-1){ renderMap(); return; }
  const w = WORLDS[active];
  atlasShowModuleReviewGate(document.getElementById('worlds'), {
    subject: 'bb',
    moduleId: String(active),
    moduleTitle: w.title,
    lessonTitles: w.levels.map(l=>l.title),
    onPass: renderMap,
    onExit: renderMap,
  });
}
function isUnlocked(num){
  if(num===1) return true;
  if(progress.stars[num-1] === undefined) return false;
  const lv = LEVELS.find(l=>l.num===num);
  if(!lv) return false;
  if(lv.world>0 && WORLDS[lv.world].levels[0].num===num) return isWorldUnlockedBb(lv.world);
  return true;
}

/* ================= BACKGROUND DOTS ================= */
(function(){
  const el = document.getElementById('bgdots'); let html='';
  for(let i=0;i<40;i++){ html += `<span style="left:${Math.random()*100}%;top:${Math.random()*100}%;opacity:${(Math.random()*.6+.2).toFixed(2)}"></span>`; }
  el.innerHTML = html;
})();

/* ================= NAV ================= */
const homeEl = document.getElementById('home'), mapEl = document.getElementById('map'), levelEl = document.getElementById('level');
function showHome(){ homeEl.style.display='flex'; mapEl.style.display='none'; levelEl.style.display='none'; renderHomeStats(); }
function showMap(){ homeEl.style.display='none'; mapEl.style.display='block'; levelEl.style.display='none'; renderMap(); }
function showLevel(num){ homeEl.style.display='none'; mapEl.style.display='none'; levelEl.style.display='flex'; startLevel(num); }

function renderHomeStats(){
  document.getElementById('home-stars').textContent = totalStars();
  document.getElementById('home-xp').textContent = progress.xp;
}
document.getElementById('play-btn').onclick = showMap;
document.getElementById('map-menu-btn').onclick = showHome;
document.getElementById('exit-btn').onclick = showMap;
document.getElementById('adaptive-btn').onclick = ()=>{
  const done = Object.keys(progress.stars).map(Number);
  if(done.length < 5){ alert('Play a few levels first to unlock adaptive practice.'); return; }
  const weakTypes = Object.entries(progress.weak).sort((a,b)=>b[1]-a[1]);
  let pool = LEVELS;
  if(weakTypes.length){ const t = weakTypes[0][0]; pool = LEVELS.filter(l=>l.type===t && isUnlocked(l.num)); }
  if(!pool.length) pool = LEVELS.filter(l=>isUnlocked(l.num));
  const pick = pool[Math.floor(Math.random()*pool.length)];
  showLevel(pick.num);
};

function renderMap(){
  document.getElementById('map-stars').textContent = totalStars();
  const wrap = document.getElementById('worlds'); wrap.innerHTML='';
  WORLDS.forEach((w,wi)=>{
    const block = document.createElement('div'); block.className='world-block';
    const needsReview = worldNeedsReviewBb(wi);
    block.innerHTML = `<div class="world-label">World ${wi+1}</div><div class="world-title">${w.title}</div>
      ${needsReview ? `<button class="world-review-banner">📝 Module Review required to unlock — tap to start</button>` : ''}
      <div class="level-grid"></div>`;
    if(needsReview) block.querySelector('.world-review-banner').onclick = ()=>openWorldReviewBb();
    const grid = block.querySelector('.level-grid');
    w.levels.forEach(lv=>{
      const unlocked = isUnlocked(lv.num);
      const stars = progress.stars[lv.num];
      const card = document.createElement('div');
      card.className = 'lvl-card' + (unlocked?'':' locked') + (stars?' done':'');
      card.innerHTML = `
        ${unlocked?'':'<span class="lock-icon">🔒</span>'}
        <div class="lvl-num">Level ${lv.num}</div>
        <div class="lvl-name">${lv.title}</div>
        <div class="lvl-stars">${starString(stars||0)}</div>
        <div class="lvl-type">${lv.type}</div>`;
      if(unlocked) card.onclick = ()=>showLevel(lv.num);
      grid.appendChild(card);
    });
    wrap.appendChild(block);
  });
}
function starString(n){ let s=''; for(let i=0;i<5;i++) s += i<n?'★':'☆'; return s; }

/* ================= LEVEL ENGINE ================= */
let cur = null; // current level runtime state
let levelToken = 0;
const stageEl = document.getElementById('stage');

const SPEED_BONUS_SECONDS = 20, SPEED_BONUS_COINS = 10;
let speedTimerInterval = null;
function startLevel(num){
  const lv = LEVELS.find(l=>l.num===num);
  const token = ++levelToken;
  cur = { lv, mistakes:0, hints:0, stage:1, token, startTime: Date.now() };
  document.getElementById('crumb-world').textContent = `World ${lv.world+1} · ${WORLDS[lv.world].title.toUpperCase()}`;
  document.getElementById('crumb-title').textContent = lv.title;
  document.getElementById('mistake-count').textContent = 0;
  document.getElementById('hint-count').textContent = 0;
  document.getElementById('hint-box').style.display='none';
  if(speedTimerInterval) clearInterval(speedTimerInterval);
  const timerEl = document.getElementById('speed-timer');
  const updateTimer = ()=>{
    const elapsed = Math.floor((Date.now()-cur.startTime)/1000);
    timerEl.textContent = elapsed+'s';
    timerEl.parentElement.classList.toggle('hot', elapsed < SPEED_BONUS_SECONDS);
  };
  updateTimer();
  speedTimerInterval = setInterval(updateTimer, 1000);
  renderStage();
}
document.getElementById('hint-btn').onclick = ()=>{
  const maxHints = 3 + (cur.extraHints||0);
  if(cur.hints>=maxHints){
    if(typeof atlasInventory !== 'undefined' && (atlasInventory['extra_hint']||0) > 0 && typeof atlasUseBoost === 'function'){
      if(!confirm('Use an Extra Hint boost from your inventory to unlock one more hint?')) return;
      atlasUseBoost('extra_hint');
      cur.extraHints = (cur.extraHints||0) + 1;
    }else{
      return;
    }
  }
  cur.hints++; document.getElementById('hint-count').textContent = cur.hints;
  const box = document.getElementById('hint-box');
  box.style.display='block';
  box.textContent = hintFor(cur.lv, Math.min(cur.hints,3));
};
function hintFor(lv, tier){
  const generic = {
    valence: ['Valence electrons are the ones in the outermost shell.','Main-group elements: the group number gives a strong clue.',`${ELEMENTS[lv.el].name}'s valence electron count is ${ELEMENTS[lv.el].valence}.`],
    classify: ['Metals are shiny, malleable, and lose electrons easily.','Non-metals sit on the right side of the periodic table.',`${ELEMENTS[lv.el].name} is a ${ELEMENTS[lv.el].metal?'metal':'non-metal'}.`],
    ionic: ['Metals lose electrons; non-metals gain them.','The total charge of the compound must equal zero.','Use crisscross: cation count = |anion charge|, anion count = |cation charge| (then simplify).'],
    covalent: ['Atoms share electron pairs to complete their outer shell.','Hydrogen only needs 2 electrons total (1 shared pair).','Count each line\'s bond order — double and triple bonds need more shared pairs.'],
    polyionic: ['Treat the polyatomic ion as one unglued unit.','Balance total charge to zero, same as simple ionic compounds.','Use parentheses around a polyatomic ion if you need more than one of it.'],
  };
  return generic[lv.type][Math.min(tier-1,2)];
}
function mistake(){
  cur.mistakes++; document.getElementById('mistake-count').textContent = cur.mistakes;
  progress.weak[cur.lv.type] = (progress.weak[cur.lv.type]||0)+1; saveProgress();
  if(typeof atlasRecordMistake === 'function') atlasRecordMistake('bb', cur.lv.type, {title: cur.lv.title, type: cur.lv.type, element: cur.lv.el});
}
function completeLevel(){
  if(speedTimerInterval){ clearInterval(speedTimerInterval); speedTimerInterval = null; }
  const elapsed = Math.floor((Date.now()-cur.startTime)/1000);
  const speedBonus = elapsed <= SPEED_BONUS_SECONDS;
  const stars = Math.max(1, 5-cur.mistakes);
  const first = progress.stars[cur.lv.num]===undefined;
  if(first || progress.stars[cur.lv.num] < stars) progress.stars[cur.lv.num] = stars;
  if(first){
    progress.xp += 200;
    progress.coins += 15;
    if(typeof atlasBumpActivity === 'function') atlasBumpActivity();
    if(typeof atlasAddXp === 'function') atlasAddXp(200);
    if(typeof atlasAddCoins === 'function') atlasAddCoins(15);
  }
  if(speedBonus){
    progress.coins += SPEED_BONUS_COINS;
    if(typeof atlasAddCoins === 'function') atlasAddCoins(SPEED_BONUS_COINS);
  }
  saveProgress();
  return {stars, speedBonus};
}

function renderStage(){
  stageEl.innerHTML='';
  const lv = cur.lv;
  if(lv.type==='valence') renderValence(lv);
  else if(lv.type==='classify') renderClassify(lv);
  else if(lv.type==='ionic') renderIonic(lv);
  else if(lv.type==='covalent') renderCovalent(lv);
  else if(lv.type==='polyionic') renderPolyionic(lv);
}

function atomBadgeHTML(el, size){
  size = size||120;
  const c = ELEMENTS[el].color;
  const shells = ELEMENTS[el].shells || [ELEMENTS[el].valence];
  const nucleusSize = Math.max(34, Math.round(size*0.36));
  const outerR = size/2 - 2;
  const innerR = nucleusSize/2 + 12;
  let shellsHtml = '';
  shells.forEach((n, si)=>{
    const r = shells.length===1 ? outerR : innerR + (outerR-innerR) * (si/Math.max(1,shells.length-1));
    const dur = (8 + si*4).toFixed(1);
    const dir = si%2===0 ? 'normal' : 'reverse';
    let dots = '';
    for(let i=0;i<n;i++){
      const a = (i/n)*2*Math.PI - Math.PI/2;
      const x = size/2 + r*Math.cos(a), y = size/2 + r*Math.sin(a);
      dots += `<span class="atom-dot" style="left:${x}px;top:${y}px;transform:translate(-50%,-50%)"></span>`;
    }
    shellsHtml += `<div class="atom-shell" style="width:${size}px;height:${size}px;animation-duration:${dur}s;animation-direction:${dir}">
      <span class="atom-orbit" style="width:${r*2}px;height:${r*2}px;left:${size/2-r}px;top:${size/2-r}px;"></span>
      ${dots}
    </div>`;
  });
  return `<div style="position:relative;width:${size}px;height:${size}px;margin:0 auto;">
    ${shellsHtml}
    <div class="atom-badge" style="width:${nucleusSize}px;height:${nucleusSize}px;font-size:${Math.round(nucleusSize*0.4)}px;background:${c};color:#0b0a1f;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);">${el}</div>
  </div>`;
}

/* ---- VALENCE ---- */
function renderValence(lv){
  const el = lv.el;
  stageEl.innerHTML = `
    ${atomBadgeHTML(el)}
    <div class="atom-label">${ELEMENTS[el].name}</div>
    <div class="prompt" style="margin-top:26px;">How many <b>valence electrons</b> does ${ELEMENTS[el].name} have?</div>
    <div class="choice-grid" id="choices"></div>`;
  const grid = document.getElementById('choices');
  for(let n=1;n<=8;n++){
    const b = document.createElement('button'); b.className='choice-btn'; b.textContent=n;
    b.onclick = ()=>{
      if(n===ELEMENTS[el].valence){ b.classList.add('correct'); setTimeout(()=>finishAndNext(`${ELEMENTS[el].valence} valence e⁻`,`${ELEMENTS[el].name} has ${ELEMENTS[el].valence} valence electron${ELEMENTS[el].valence>1?'s':''}.`),350); }
      else { b.classList.add('wrong'); mistake(); setTimeout(()=>b.classList.remove('wrong'),450); }
    };
    grid.appendChild(b);
  }
}

/* ---- CLASSIFY ---- */
function renderClassify(lv){
  const el = lv.el;
  stageEl.innerHTML = `
    ${atomBadgeHTML(el)}
    <div class="atom-label">${ELEMENTS[el].name}</div>
    <div class="prompt" style="margin-top:26px;">Is ${ELEMENTS[el].name} a metal or non-metal?</div>
    <div class="mc-row" id="choices"></div>`;
  const row = document.getElementById('choices');
  ['Metal','Non-Metal'].forEach(label=>{
    const isMetalChoice = label==='Metal';
    const b = document.createElement('button'); b.className='mc-btn'; b.textContent=label;
    b.onclick = ()=>{
      if(isMetalChoice===ELEMENTS[el].metal){ b.classList.add('correct'); setTimeout(()=>finishAndNext(ELEMENTS[el].metal?'Metal':'Non-Metal',`${ELEMENTS[el].name} is a ${ELEMENTS[el].metal?'metal':'non-metal'}.`),350); }
      else { b.classList.add('wrong'); mistake(); setTimeout(()=>b.classList.remove('wrong'),450); }
    };
    row.appendChild(b);
  });
}

/* ---- IONIC (2 stage) ---- */
function renderIonic(lv){
  const metal=lv.metal, nonmetal=lv.nonmetal;
  const mc = metalCharge(metal), nc = Math.abs(nonmetalCharge(nonmetal));
  let lost=0, gained=0;
  stageEl.innerHTML = `
    <div class="prompt">Transfer electrons from <b>${ELEMENTS[metal].name}</b> to <em>${ELEMENTS[nonmetal].name}</em> until both are stable.</div>
    <div class="field">
      <div class="fnode">${atomBadgeHTML(metal,100)}<div class="name">${ELEMENTS[metal].name}<span class="charge" id="mcharge"></span></div></div>
      <div class="bolt">⚡</div>
      <div class="fnode">${atomBadgeHTML(nonmetal,100)}<div class="name">${ELEMENTS[nonmetal].name}<span class="charge" id="ncharge"></span></div></div>
    </div>
    <div class="stage-actions">
      <button class="btn btn-primary" id="transfer-btn">Transfer 1 electron</button>
      <button class="btn btn-ghost" id="build-btn" disabled>Build compound →</button>
    </div>
    <div class="stage-note" id="ionic-note">${ELEMENTS[metal].symbol||metal} needs to lose <b>${mc}</b> · ${nonmetal} needs to gain <b>${nc}</b></div>`;
  const note = document.getElementById('ionic-note');
  const tbtn = document.getElementById('transfer-btn'), bbtn = document.getElementById('build-btn');
  tbtn.onclick = ()=>{
    if(lost<mc) lost++; if(gained<nc) gained++;
    note.innerHTML = `${metal} needs to lose <b>${Math.max(0,mc-lost)}</b> · ${nonmetal} needs to gain <b>${Math.max(0,nc-gained)}</b>`;
    if(lost>=mc && gained>=nc){ tbtn.disabled=true; tbtn.style.opacity=.4; bbtn.disabled=false; bbtn.style.opacity=1;
      document.getElementById('mcharge').textContent = ` (+${mc})`;
      document.getElementById('ncharge').textContent = ` (−${nc})`;
    }
  };
  bbtn.onclick = ()=> renderIonicStage2(lv, mc, nc);
}
function renderIonicStage2(lv, mc, nc){
  const metal=lv.metal, nonmetal=lv.nonmetal;
  const g = gcd(mc,nc);
  const targetM = nc/g, targetN = mc/g;
  let cM=1, cN=1;
  stageEl.innerHTML = `
    <div class="prompt">Balance the charges. How many of each ion do you need?</div>
    <div class="counter-row">
      <div class="counter"><div class="ion" style="color:${ELEMENTS[metal].color}">${metal}<sup>${mc}+</sup></div>
        <div class="ctr-controls"><button class="round-btn" id="m-minus">−</button><span class="val" id="m-val">1</span><button class="round-btn" id="m-plus">+</button></div></div>
      <div class="counter"><div class="ion" style="color:${ELEMENTS[nonmetal].color}">${nonmetal}<sup>${nc}−</sup></div>
        <div class="ctr-controls"><button class="round-btn" id="n-minus">−</button><span class="val" id="n-val">1</span><button class="round-btn" id="n-plus">+</button></div></div>
    </div>
    <div class="stage-note" id="charge-note">Total charge: <b id="tot">${mc-nc}</b> (must be 0)</div>
    <div class="stage-actions"><button class="btn btn-primary" id="form-btn">Form Compound</button></div>`;
  function upd(){
    document.getElementById('m-val').textContent=cM; document.getElementById('n-val').textContent=cN;
    const tot = cM*mc - cN*nc;
    document.getElementById('tot').textContent = tot;
  }
  document.getElementById('m-minus').onclick=()=>{ if(cM>1) cM--; upd(); };
  document.getElementById('m-plus').onclick=()=>{ if(cM<9) cM++; upd(); };
  document.getElementById('n-minus').onclick=()=>{ if(cN>1) cN--; upd(); };
  document.getElementById('n-plus').onclick=()=>{ if(cN<9) cN++; upd(); };
  document.getElementById('form-btn').onclick=()=>{
    if(cM*mc - cN*nc === 0){
      const formula = fmtUnit(metal)+sub(cM) + fmtUnit(nonmetal)+sub(cN);
      const name = ionicName(metal,nonmetal).title;
      finishAndNext(formula, `${ELEMENTS[metal].name} loses electrons to ${ELEMENTS[nonmetal].name}; ${cM} ${metal} + ${cN} ${nonmetal} balance to a neutral charge.`, name);
    } else { mistake(); const c = document.getElementById('charge-note'); c.style.color='var(--red)'; setTimeout(()=>c.style.color='',450); }
  };
}

/* ---- COVALENT ---- */
function molGraph(lv){
  if(lv.graph) return lv.graph;
  const atoms=[{id:'c',el:lv.center,x:50,y:50}];
  const n = lv.arms.length;
  lv.arms.forEach((arm,i)=>{
    let angle;
    if(n===1) angle = 0;
    else if(n===2) angle = i===0?180:0;
    else angle = -90 + i*(360/n);
    const rad = angle*Math.PI/180;
    const R = 34;
    atoms.push({id:'a'+i, el:arm.el, x:50+R*Math.cos(rad), y:50+R*Math.sin(rad)});
  });
  const bonds = lv.arms.map((arm,i)=>({a:'c', b:'a'+i, order:arm.order}));
  return {atoms, bonds};
}
function renderCovalent(lv){
  const g = molGraph(lv);
  const totalPairs = g.bonds.reduce((s,b)=>s+b.order,0);
  let shared = 0;
  const W=340,H=280;
  let svg = `<svg class="bond-svg" width="${W}" height="${H}" viewBox="0 0 100 100" preserveAspectRatio="none">`;
  g.bonds.forEach((b,bi)=>{
    const A = g.atoms.find(x=>x.id===b.a), B = g.atoms.find(x=>x.id===b.b);
    for(let k=0;k<b.order;k++){
      const off = (k-(b.order-1)/2)*5.5;
      const dx=B.y-A.y, dy=A.x-B.x; const len=Math.hypot(dx,dy)||1;
      const ox=dx/len*off, oy=dy/len*off;
      svg += `<line class="bond-line" data-bond="${bi}" data-slot="${k}" x1="${A.x+ox}" y1="${A.y+oy}" x2="${B.x+ox}" y2="${B.y+oy}"/>`;
    }
  });
  svg += `</svg>`;
  let atomsHtml='';
  g.atoms.forEach(a=>{
    const c = ELEMENTS[a.el].color;
    atomsHtml += `<div class="m-atom" style="left:${a.x/100*W}px;top:${a.y/100*H}px;background:${c};">${a.el}</div>`;
    atomsHtml += `<div class="m-label" style="left:${a.x/100*W}px;top:${a.y/100*H+40}px;">${ELEMENTS[a.el].name}</div>`;
  });
  stageEl.innerHTML = `
    <div class="prompt">Share electron pairs so every atom completes its outer shell.</div>
    <div class="molecule-field" style="width:${W}px;height:${H}px;">${svg}${atomsHtml}</div>
    <div class="stage-note" id="pair-note">Pairs shared: <b id="pv">0</b> / ${totalPairs}</div>
    <div class="stage-actions">
      <button class="btn btn-primary" id="share-btn">Share a pair</button>
      <button class="btn btn-ghost" id="undo-btn">Undo</button>
      <button class="btn btn-primary" id="form-mol-btn" style="background:linear-gradient(135deg,var(--green),#22d3ee)">Form Molecule</button>
    </div>`;
  function refreshLines(){
    let filled = shared;
    document.querySelectorAll('.bond-line').forEach(line=>{
      const bi = +line.dataset.bond, k = +line.dataset.slot;
      let priorPairs = 0;
      for(let i=0;i<bi;i++) priorPairs += g.bonds[i].order;
      const idxInAll = priorPairs + k;
      line.classList.toggle('lit', idxInAll < shared);
    });
  }
  document.getElementById('share-btn').onclick=()=>{
    if(shared<totalPairs){ shared++; document.getElementById('pv').textContent=shared; refreshLines(); }
    if(shared>=totalPairs){ const sb=document.getElementById('share-btn'); sb.disabled=true; sb.style.opacity=.4; }
  };
  document.getElementById('undo-btn').onclick=()=>{
    if(shared>0){ shared--; document.getElementById('pv').textContent=shared; refreshLines();
      const sb=document.getElementById('share-btn'); sb.disabled=false; sb.style.opacity=1; }
  };
  document.getElementById('form-mol-btn').onclick=()=>{
    if(shared===totalPairs){
      const formula = molFormula(lv);
      finishAndNext(formula, `${lv.name}: atoms share ${totalPairs} electron pair${totalPairs>1?'s':''} to complete their outer shells.`, lv.name);
    } else { mistake(); const n=document.getElementById('pair-note'); n.style.color='var(--red)'; setTimeout(()=>n.style.color='',450); }
  };
}
function molFormula(lv){
  if(lv.formulaOverride) return lv.formulaOverride;
  const g = molGraph(lv);
  const counts={};
  g.atoms.forEach(a=>counts[a.el]=(counts[a.el]||0)+1);
  const order=['C','N','P','H','S','Cl','Br','O','F'];
  let s='';
  order.filter(e=>counts[e]).forEach(e=>{ s+= e+sub(counts[e]); });
  Object.keys(counts).filter(e=>!order.includes(e)).forEach(e=>{ s+= e+sub(counts[e]); });
  return s;
}

/* ---- POLYIONIC ---- */
function renderPolyionic(lv){
  const cation=lv.cation, anion=lv.anion;
  const cIsIon = !!IONS[cation], aIsIon = !!IONS[anion];
  const cCharge = cIsIon? IONS[cation].charge : metalCharge(cation);
  const aCharge = aIsIon? IONS[anion].charge : nonmetalCharge(anion);
  let cCount=1, aCount=1;
  const cLabel = cIsIon? cation.replace(/(\d+)/,'<sub>$1</sub>') : cation;
  const aLabel = aIsIon? anion.replace(/(\d+)/,'<sub>$1</sub>') : anion;
  const cName = cIsIon? IONS[cation].name : ELEMENTS[cation].name;
  const aName = aIsIon? IONS[anion].name : (({O:'Oxide',F:'Fluoride',Cl:'Chloride',Br:'Bromide'})[anion]||anion);
  const article = w => /^[aeiou]/i.test(w) ? 'an' : 'a';
  stageEl.innerHTML = `
    <div class="prompt">Balance ${article(cName)} <b>${cName}</b> ion with ${article(aName)} <em>${aName}</em> ion. Polyatomic ions travel as one unit.</div>
    <div class="field">
      <div class="ion-card" style="background:${cIsIon?'#f5a95f22':'#f5a95f22'};color:#f5a95f;border:1px solid #f5a95f55;">${cLabel}<sup>${Math.abs(cCharge)}${cCharge>0?'+':'−'}</sup><span class="sub">${cName}</span></div>
      <div class="ion-card" style="background:#34d39922;color:#34d399;border:1px solid #34d39955;">${aLabel}<sup>${Math.abs(aCharge)}${aCharge>0?'+':'−'}</sup><span class="sub">${aName}</span></div>
    </div>
    <div class="counter-row">
      <div class="counter"><div class="ion" style="color:#f5a95f;">${cLabel}<sup>${Math.abs(cCharge)}${cCharge>0?'+':'−'}</sup></div>
        <div class="ctr-controls"><button class="round-btn" id="c-minus">−</button><span class="val" id="c-val">1</span><button class="round-btn" id="c-plus">+</button></div></div>
      <div class="counter"><div class="ion" style="color:#34d399;">${aLabel}<sup>${Math.abs(aCharge)}${aCharge>0?'+':'−'}</sup></div>
        <div class="ctr-controls"><button class="round-btn" id="a-minus">−</button><span class="val" id="a-val">1</span><button class="round-btn" id="a-plus">+</button></div></div>
    </div>
    <div class="stage-note" id="pnote">Total charge: <b id="ptot">${cCharge-aCharge}</b> (must be 0)</div>
    <div class="stage-actions"><button class="btn btn-primary" id="pform-btn">Form Compound</button></div>`;
  function upd(){
    document.getElementById('c-val').textContent=cCount; document.getElementById('a-val').textContent=aCount;
    document.getElementById('ptot').textContent = cCount*cCharge + aCount*aCharge;
  }
  document.getElementById('c-minus').onclick=()=>{ if(cCount>1) cCount--; upd(); };
  document.getElementById('c-plus').onclick=()=>{ if(cCount<9) cCount++; upd(); };
  document.getElementById('a-minus').onclick=()=>{ if(aCount>1) aCount--; upd(); };
  document.getElementById('a-plus').onclick=()=>{ if(aCount<9) aCount++; upd(); };
  document.getElementById('pform-btn').onclick=()=>{
    if(cCount*cCharge + aCount*aCharge === 0){
      let s1 = fmtUnit(cation); if(cIsIon && cCount>1) s1='('+s1+')'+sub(cCount); else if(cCount>1) s1+=sub(cCount);
      let s2 = fmtUnit(anion); if(aIsIon && aCount>1) s2='('+s2+')'+sub(aCount); else if(aCount>1) s2+=sub(aCount);
      finishAndNext(s1+s2, `${cName} and ${aName} balance charges: ${cCount} ${cation} + ${aCount} ${anion}.`, lv.title);
    } else { mistake(); const n=document.getElementById('pnote'); n.style.color='var(--red)'; setTimeout(()=>n.style.color='',450); }
  };
}
function fmtUnit(sym){ return sym.replace(/(\d+)/,'<sub>$1</sub>'); }
function sub(n){ return n>1 ? `<sub>${n}</sub>` : ''; }

/* ---- SUCCESS + ADVANCE ---- */
function finishAndNext(formula, explain, nameOverride){
  const {stars, speedBonus} = completeLevel();
  const myToken = cur.token;
  const card = document.createElement('div');
  card.className='success-card';
  card.innerHTML = `
    <div class="success-emoji">✨</div>
    <div class="success-title">${nameOverride?nameOverride+' formed!':'Correct!'}</div>
    <div class="success-formula">${formula}</div>
    <div class="success-stars">${starString(stars)}</div>
    ${speedBonus?`<div class="success-speedbonus">⚡ Speed Bonus! +${SPEED_BONUS_COINS} coins</div>`:''}
    <div class="success-explain">${explain}</div>`;
  stageEl.appendChild(card);
  setTimeout(()=>{
    if(!cur || cur.token !== myToken || levelEl.style.display==='none') return; // user navigated away — don't hijack their state
    const nextNum = cur.lv.num+1;
    if(nextNum<=LEVELS.length){ startLevel(nextNum); }
    else { showMap(); }
  }, 1600);
}

/* ================= INIT ================= */
showHome();

}
window.SubjectApps = window.SubjectApps || {};
window.SubjectApps['bb'] = { init: bbInit };
