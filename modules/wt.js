function wtInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"economic-activities","title":"Economic vs Non-Economic","subtitle":"Types of Activities · Economic Examples · Non-Economic Examples","emoji":"💰","gradient":"linear-gradient(135deg,#34D399 0%,#065F46 100%)","glow":"#34D399","levels":[
  {"id":1,"title":"Types of Activities","intro":"Every day, people around us are busy doing all kinds of things — but not all of it is 'work' in the same way.","questions":[
    {"type":"mcq","prompt":"Activities that involve money or are performed in exchange for money or money's worth are called ______ activities.","options":["economic","non-economic","voluntary","spiritual"],"answer":"economic","explanation":"A shopkeeper selling goods or a lawyer earning a fee are both economic activities."},
    {"type":"mcq","prompt":"Activities that do not generate income or wealth but are done out of feelings like gratitude, love, care and respect are called ______ activities.","options":["non-economic","economic","commercial","industrial"],"answer":"non-economic","explanation":"Cooking for family or helping with schoolwork are examples of non-economic activities."},
    {"type":"mcq","prompt":"In the chapter's opening story, Geeta Aunty is a pilot in the Indian Air Force. Which of these best describes her work?","options":["An economic activity, since she receives a salary","A non-economic activity, since she serves the country","Neither economic nor non-economic","Both economic and illegal"],"answer":"An economic activity, since she receives a salary","explanation":"Even service to the nation can be an economic activity if it involves regular payment."}
  ]},
  {"id":2,"title":"Economic Examples","intro":"From selling goods to earning fees, economic activities take many forms.","questions":[
    {"type":"mcq","prompt":"Which of these is an example of an economic activity given in the chapter?","options":["A truck driver transporting goods from one place to another","A parent cooking food for the family","Youth taking care of grandparents","Family members helping renovate the house"],"answer":"A truck driver transporting goods from one place to another","explanation":"The truck driver is paid for transporting goods, making it an economic activity."},
    {"type":"mcq","prompt":"A payment made to a person or organisation in exchange for professional advice or services, such as to a doctor or lawyer, is called a ______.","options":["fee","wage","tax","donation"],"answer":"fee","explanation":"Fees are common payments for professional services."},
    {"type":"mcq","prompt":"Rohan, Anu's brother, works for a software company and earns a salary. On weekends he volunteers to teach computer skills for free. What is this volunteering an example of?","options":["A non-economic activity","An economic activity","A form of payment in kind","A type of wage"],"answer":"A non-economic activity","explanation":"Since he isn't paid for the volunteering, it is a non-economic activity."}
  ]},
  {"id":3,"title":"Non-Economic Examples","intro":"Some of the most meaningful things people do are never paid for.","questions":[
    {"type":"mcq","prompt":"Which of these is an example of a non-economic activity given in the chapter?","options":["Parents cooking food for the family","A lawyer arguing a case for a fee","A farmer selling produce in the market","Workers employed in a car manufacturing factory"],"answer":"Parents cooking food for the family","explanation":"This is done out of love and care, not for monetary gain."},
    {"type":"truefalse","prompt":"Kabir's grandfather, who retired from the Border Security Force, now voluntarily provides free Geography classes to neighbourhood kids — this is a non-economic activity.","options":["True","False"],"answer":"True","explanation":"Since he does this for free, it does not generate income."},
    {"type":"mcq","prompt":"A place where people engage in the exchange of goods and services, usually for money, is called a ______.","options":["market","factory","warehouse","cooperative"],"answer":"market","explanation":"Markets are central to most economic activities."}
  ]},
  {"id":4,"title":"Boss: Guardian of Activity","intro":"The Value Keeper tests your understanding of economic and non-economic activities!","isBoss":true,"bossName":"The Value Keeper","questions":[
    {"type":"mcq","prompt":"What is the key difference between economic and non-economic activities, according to the chapter?","options":["Economic activities involve money or money's worth, while non-economic activities do not","Economic activities are always illegal","Non-economic activities always involve more people","There is no real difference between them"],"answer":"Economic activities involve money or money's worth, while non-economic activities do not","explanation":"This is the central distinction explored throughout the chapter."},
    {"type":"mcq","prompt":"Anu's parents run a shop selling uniforms and garments. What kind of activity is this?","options":["An economic activity","A non-economic activity","Neither, since it is a family business","A type of volunteering"],"answer":"An economic activity","explanation":"Running a shop for profit is clearly an economic activity."},
    {"type":"mcq","prompt":"Why does the chapter emphasise that non-economic activities are still valuable, even without monetary exchange?","options":["Because they contribute to wellbeing, care and social bonds","Because they are actually secretly paid","Because they are required by law","Because they always involve strangers"],"answer":"Because they contribute to wellbeing, care and social bonds","explanation":"Their value lies in emotional and social contribution, not money."}
  ]}
]},
{"id":2,"slug":"getting-paid","title":"Getting Paid for Work","subtitle":"Salary, Wage & More · Stories of Payment · Value Addition","emoji":"💵","gradient":"linear-gradient(135deg,#FBBF24 0%,#92400E 100%)","glow":"#FBBF24","levels":[
  {"id":1,"title":"Salary, Wage & More","intro":"There are many different ways people are compensated for economic activities.","questions":[
    {"type":"mcq","prompt":"A fixed regular payment, generally paid monthly by an employer to an employee, is called a ______.","options":["salary","wage","fee","tax"],"answer":"salary","explanation":"Salaries are typically paid on a monthly basis."},
    {"type":"mcq","prompt":"A payment made by an employer to a worker for a specific period of time, often calculated daily, is called a ______.","options":["wage","salary","pension","bonus"],"answer":"wage","explanation":"Wages are common for daily or task-based labour."},
    {"type":"mcq","prompt":"A non-cash payment received for work performed, such as receiving mangoes instead of money, is called ______.","options":["payment in kind","a wage","a salary","a fee"],"answer":"payment in kind","explanation":"This kind of payment is common in some agricultural work."}
  ]},
  {"id":2,"title":"Stories of Payment","intro":"Kavya's family shows us many real examples of how people get paid.","questions":[
    {"type":"mcq","prompt":"In Kavya's story, her uncle operates a bulldozer for a construction company and receives a ______ for his services.","options":["monthly salary","daily wage only","payment in kind only","nothing, as a volunteer"],"answer":"monthly salary","explanation":"He is a technician employed regularly by the construction company."},
    {"type":"mcq","prompt":"Sahil, a farm labourer using a tractor to till land, earns a daily wage partly in cash and partly in the form of ______.","options":["mangoes of equal value","free housing","a company car","shares in the farm"],"answer":"mangoes of equal value","explanation":"This is a classic example of payment in kind."},
    {"type":"mcq","prompt":"Kavya's aunt is employed at the village post office and earns a monthly salary. In the evenings, she also conducts online classes and charges a weekly ______ for them.","options":["fee","wage","salary","tax"],"answer":"fee","explanation":"She earns a fee for the extra classes she conducts."}
  ]},
  {"id":3,"title":"Value Addition","intro":"How does raw wood become a valuable piece of furniture?","questions":[
    {"type":"mcq","prompt":"The process by which economic activities add value at each stage of transforming something into another form is called ______.","options":["value addition","payment in kind","monetary exchange","market pricing"],"answer":"value addition","explanation":"This concept explains why finished products cost more than raw materials."},
    {"type":"mcq","prompt":"In the chapter's example, Rajesh the carpenter buys wood for ₹600 and sells a finished chair for ₹1,000. What does the remaining ₹400 represent?","options":["The monetary value of Rajesh's skill, time and effort","A government tax","The cost of transporting the wood","A donation to charity"],"answer":"The monetary value of Rajesh's skill, time and effort","explanation":"This is the value Rajesh added through his craftsmanship."},
    {"type":"truefalse","prompt":"By turning wood into furniture, Rajesh has added value to the raw material through his skill and effort.","options":["True","False"],"answer":"True","explanation":"This is a clear example of value addition in economic activity."}
  ]},
  {"id":4,"title":"Boss: Guardian of Payment","intro":"The Wage Warden challenges your knowledge of pay and value!","isBoss":true,"bossName":"The Wage Warden","questions":[
    {"type":"mcq","prompt":"Which of these is the correct match: a fixed monthly payment to an employee is called a ______, while a payment for a specific period of work is called a ______.","options":["salary; wage","wage; salary","fee; salary","salary; fee"],"answer":"salary; wage","explanation":"Salaries are regular and fixed; wages are tied to specific periods of work."},
    {"type":"mcq","prompt":"What term describes the monetary value that a person places on an object based on the benefit they derive from it?","options":["Money's worth","Payment in kind","Value addition","Market price"],"answer":"Money's worth","explanation":"This concept helps define what counts as an economic activity."},
    {"type":"mcq","prompt":"From buying wood to selling a finished chair, why are Rajesh's activities considered part of economic activities?","options":["Because these activities involve payment and generate monetary value","Because carpentry is a hobby, not a job","Because wood is a natural resource","Because chairs are always expensive"],"answer":"Because these activities involve payment and generate monetary value","explanation":"Every step, from purchase to sale, involves money."}
  ]}
]},
{"id":3,"slug":"service","title":"The Value of Service","subtitle":"Selfless Service · Community Movements · Why Non-Economic Activities Matter","emoji":"🤲","gradient":"linear-gradient(135deg,#F472B6 0%,#831843 100%)","glow":"#F472B6","levels":[
  {"id":1,"title":"Selfless Service","intro":"Not everything valuable comes with a price tag.","questions":[
    {"type":"mcq","prompt":"The concept of selfless service, seen in temples, gurudwaras, mosques and churches, is called ______.","options":["sev","wage","fee","market"],"answer":"sev","explanation":"Sev is practiced across many religious and community traditions in India."},
    {"type":"mcq","prompt":"Community kitchens at gurudwaras that serve free food to every visitor are called ______.","options":["langars","warehouses","cooperatives","factories"],"answer":"langars","explanation":"Langars are a well-known example of sev in action."},
    {"type":"truefalse","prompt":"Practices of sev foster a sense of satisfaction and gratitude, and are a way of contributing to society without expecting anything in return.","options":["True","False"],"answer":"True","explanation":"This is central to the spirit of selfless service."}
  ]},
  {"id":2,"title":"Community Movements","intro":"When communities work together, the results can transform a whole nation.","questions":[
    {"type":"mcq","prompt":"The Swachh Bharat Abhiyan is based on the collective efforts of all Indian citizens to ______.","options":["keep our surroundings clean","increase agricultural output","build more highways","reduce taxes"],"answer":"keep our surroundings clean","explanation":"This national movement encourages both individual and community participation."},
    {"type":"mcq","prompt":"The festival celebrated in India to promote awareness about the value of trees and conservation of forests through tree plantation drives is called ______.","options":["Van Mahotsav","Swachh Bharat Abhiyan","Republic Day","Van Vigyan Kendra"],"answer":"Van Mahotsav","explanation":"'Van Mahotsav' literally means 'festival of forests'."},
    {"type":"mcq","prompt":"What do the Swachh Bharat Abhiyan and Van Mahotsav have in common, according to the chapter?","options":["Both rely on collective community participation for a shared social good","Both are purely economic activities for profit","Both are only run by the government with no citizen involvement","Both are unrelated to non-economic activities"],"answer":"Both rely on collective community participation for a shared social good","explanation":"Both movements demonstrate the power of non-economic community action."}
  ]},
  {"id":3,"title":"Why Non-Economic Activities Matter","intro":"Money isn't the only measure of value in our lives.","questions":[
    {"type":"mcq","prompt":"Even though non-economic activities may not involve money, what does the chapter say about their value?","options":["The value they generate is important in our lives","They have no real value at all","They are less important than economic activities","They should be converted into paid work"],"answer":"The value they generate is important in our lives","explanation":"Non-economic activities enrich our lives in ways money cannot measure."},
    {"type":"mcq","prompt":"According to the chapter's summary, non-economic activities contribute to social welfare, personal wellbeing and ______.","options":["the overall quality of life","only religious practices","only government schemes","only rural development"],"answer":"the overall quality of life","explanation":"This shows the broad impact of non-economic activities on society."},
    {"type":"mcq","prompt":"During Indian festivals, people gather to decorate places together and share food they cook. What kind of value do these activities hold, according to the chapter?","options":["Non-economic value, through community bonding and shared effort","Only economic value, since food is expensive","No value, since no money changes hands","Only religious value, unrelated to community"],"answer":"Non-economic value, through community bonding and shared effort","explanation":"These shared efforts strengthen social bonds within communities."}
  ]},
  {"id":4,"title":"Boss: Guardian of Selfless Giving","intro":"The Seva Sentinel tests your understanding of community and service!","isBoss":true,"bossName":"Seva Sentinel","questions":[
    {"type":"mcq","prompt":"What is a common thread linking sev, the Swachh Bharat Abhiyan and Van Mahotsav?","options":["They are all non-economic activities driven by community participation for the common good","They are all economic activities that generate profit","They are all government-mandated taxes","They all require formal payment to participants"],"answer":"They are all non-economic activities driven by community participation for the common good","explanation":"All three demonstrate the power of collective, unpaid community effort."},
    {"type":"mcq","prompt":"In the langar tradition, why is food served to every visitor for free?","options":["As an act of selfless service (sev) and community contribution","Because visitors pay a hidden fee","Because it is required by law","Because it generates monetary value for the gurudwara"],"answer":"As an act of selfless service (sev) and community contribution","explanation":"This reflects the spirit of giving without expecting anything in return."},
    {"type":"mcq","prompt":"How does the chapter connect non-economic activities to overall national wellbeing?","options":["Collective non-economic efforts, like cleanliness drives and tree planting, benefit the whole community and nation","Non-economic activities have no connection to national wellbeing","Only economic activities can benefit a nation","Non-economic activities always require government funding"],"answer":"Collective non-economic efforts, like cleanliness drives and tree planting, benefit the whole community and nation","explanation":"This shows how individual and community non-economic actions add up to national benefit."}
  ]}
]},
{"id":4,"slug":"sectors","title":"Three Economic Sectors","subtitle":"Classifying Activities · Primary & Secondary Sectors · The Tertiary Sector","emoji":"🏭","gradient":"linear-gradient(135deg,#60A5FA 0%,#1E3A8A 100%)","glow":"#60A5FA","levels":[
  {"id":1,"title":"Classifying Activities","intro":"With so many kinds of economic activity, how do we make sense of it all?","questions":[
    {"type":"mcq","prompt":"Broad groups that include various activities helping with the economic prosperity of a nation are called economic ______.","options":["sectors","fees","wages","markets"],"answer":"sectors","explanation":"Grouping activities into sectors helps us understand how they function and connect."},
    {"type":"mcq","prompt":"The three main types of economic sectors described in the chapter are primary, secondary and ______.","options":["tertiary","quaternary","informal","industrial"],"answer":"tertiary","explanation":"These three sectors together cover nearly all economic activity."},
    {"type":"mcq","prompt":"Economic activities in which people are directly dependent on nature to produce goods, such as farming or fishing, are called ______ activities.","options":["primary","secondary","tertiary","non-economic"],"answer":"primary","explanation":"Primary activities extract raw materials directly from nature."}
  ]},
  {"id":2,"title":"Primary & Secondary Sectors","intro":"From raw materials to finished goods — two sectors that work hand in hand.","questions":[
    {"type":"mcq","prompt":"Which of these is an example of a primary sector activity?","options":["Extracting coal from mines","Manufacturing cars in a factory","A doctor treating patients","A bank processing a loan"],"answer":"Extracting coal from mines","explanation":"Mining is a classic primary sector activity, extracting resources directly from nature."},
    {"type":"mcq","prompt":"Economic activities in which people transform outputs of the primary sector into new products are known as ______ activities.","options":["secondary","primary","tertiary","informal"],"answer":"secondary","explanation":"The secondary sector processes raw materials into usable products."},
    {"type":"mcq","prompt":"Which of these is an example of a secondary sector activity?","options":["Processing tea leaves and converting them into packaged tea","Milking cows on a dairy farm","Fishing in a river","Mining coal from the earth"],"answer":"Processing tea leaves and converting them into packaged tea","explanation":"This transforms a raw agricultural product into a finished good."},
    {"type":"mcq","prompt":"The secondary sector includes construction, manufacturing, and providing utilities like water, electricity and ______.","options":["gas","farmland","forests","fish"],"answer":"gas","explanation":"These utilities are essential services provided through secondary sector activities."}
  ]},
  {"id":3,"title":"The Tertiary Sector","intro":"The services that quietly keep everything else running.","questions":[
    {"type":"mcq","prompt":"Economic activities that provide support to people involved in primary and secondary activities, such as transport and banking, are called ______ activities.","options":["tertiary","primary","secondary","informal"],"answer":"tertiary","explanation":"The tertiary sector supports and connects the other two sectors."},
    {"type":"mcq","prompt":"The tertiary sector is also commonly known as the ______ sector.","options":["service","manufacturing","agricultural","industrial"],"answer":"service","explanation":"This includes doctors, teachers, banks, hotels and many other services."},
    {"type":"mcq","prompt":"Which of these is an example of a tertiary sector activity?","options":["A truck driver transporting grains from a farm to a market","A farmer growing wheat","A factory converting cotton into cloth","A miner extracting iron ore"],"answer":"A truck driver transporting grains from a farm to a market","explanation":"Transportation is a key tertiary sector service."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Sectors","intro":"The Sector Sentinel tests your mastery of primary, secondary and tertiary activities!","isBoss":true,"bossName":"Sector Sentinel","questions":[
    {"type":"mcq","prompt":"Which sector would a fisherman catching fish from the sea belong to?","options":["Primary sector","Secondary sector","Tertiary sector","None of these"],"answer":"Primary sector","explanation":"He is extracting a resource directly from nature."},
    {"type":"mcq","prompt":"Which sector would a software developer creating a mobile app belong to?","options":["Tertiary sector","Primary sector","Secondary sector","None of these"],"answer":"Tertiary sector","explanation":"Software development is a service, placing it in the tertiary sector."},
    {"type":"mcq","prompt":"Which sector would a factory converting steel from iron ore to make cars belong to?","options":["Secondary sector","Primary sector","Tertiary sector","None of these"],"answer":"Secondary sector","explanation":"This factory is transforming a raw material into a finished product."}
  ]}
]},
{"id":5,"slug":"amul","title":"The AMUL Story","subtitle":"Milk Without Middlemen · Birth of a Cooperative · Sectors Working Together","emoji":"🥛","gradient":"linear-gradient(135deg,#38BDF8 0%,#0C4A6E 100%)","glow":"#38BDF8","levels":[
  {"id":1,"title":"Milk Without Middlemen","intro":"How Gujarat's dairy farmers took control of their own livelihoods.","questions":[
    {"type":"mcq","prompt":"In the 1940s, farmers in Anand district of Gujarat had to sell their milk quickly to nearby villages because milk ______.","options":["spoils or curdles fast in hot weather","was illegal to store","had no market value","could only be sold at night"],"answer":"spoils or curdles fast in hot weather","explanation":"This urgency forced farmers to accept low prices from middlemen."},
    {"type":"mcq","prompt":"Before the cooperative was formed, farmers depended on people who bought milk in bulk at low prices and resold it, called ______.","options":["middlemen","cooperators","pasteurisers","retailers"],"answer":"middlemen","explanation":"Middlemen often left farmers feeling cheated and harassed."},
    {"type":"mcq","prompt":"Which national leader advised the farmers of Anand to form a cooperative to become independent of middlemen?","options":["Sardar Vallabhbhai Patel","Mahatma Gandhi","Jawaharlal Nehru","Dr. B.R. Ambedkar"],"answer":"Sardar Vallabhbhai Patel","explanation":"His advice led to the founding of what became AMUL."}
  ]},
  {"id":2,"title":"Birth of a Cooperative","intro":"From a farmers' struggle to one of India's greatest cooperative success stories.","questions":[
    {"type":"mcq","prompt":"A group of people who voluntarily come together to meet their economic and social needs, where decisions are taken collectively, is called a ______.","options":["cooperative","corporation","monopoly","syndicate"],"answer":"cooperative","explanation":"Cooperatives are owned and run by their members collectively."},
    {"type":"mcq","prompt":"AMUL, the milk cooperative, was set up in 1946 under the leadership of Tribhuvandas Patel and which other figure?","options":["Dr. Varghese Kurien","Dr. A.P.J. Abdul Kalam","Popatrao Pawar","Bunker Roy"],"answer":"Dr. Varghese Kurien","explanation":"Dr. Kurien was an engineer who had been working at a dairy factory in Mumbai."},
    {"type":"mcq","prompt":"What was one major benefit the cooperative brought to the farmers of Anand, according to the chapter?","options":["They gained control over the production and sale of milk, without needing middlemen","They stopped farming altogether","They had to pay higher taxes","They lost ownership of their cows"],"answer":"They gained control over the production and sale of milk, without needing middlemen","explanation":"This gave farmers a fairer share of the income from their own produce."}
  ]},
  {"id":3,"title":"Sectors Working Together","intro":"AMUL's journey from farm to shop shelf shows all three sectors in action.","questions":[
    {"type":"mcq","prompt":"In the AMUL story, farmers milking their cows to sell the milk is an example of which sector's activity?","options":["Primary sector","Secondary sector","Tertiary sector","None of these"],"answer":"Primary sector","explanation":"Milk is derived directly from a natural source — livestock."},
    {"type":"mcq","prompt":"Processing milk into butter, cheese and milk powder in AMUL's factories is an example of which sector's activity?","options":["Secondary sector","Primary sector","Tertiary sector","None of these"],"answer":"Secondary sector","explanation":"This transforms raw milk into new, finished products."},
    {"type":"mcq","prompt":"AMUL's use of trucks, railways and retail stores to transport and sell its products is an example of which sector's activity?","options":["Tertiary sector","Primary sector","Secondary sector","None of these"],"answer":"Tertiary sector","explanation":"Transportation, trading and retail are all tertiary sector services."}
  ]},
  {"id":4,"title":"Boss: Guardian of Interdependence","intro":"The final challenge! Face the Cooperative Champion to complete Work & Trade Quest.","isBoss":true,"bossName":"Cooperative Champion","questions":[
    {"type":"mcq","prompt":"Besides AMUL, which of these is another milk cooperative mentioned in the chapter?","options":["Nandini from Karnataka","Reliance Dairy","Tata Milk","Britannia Dairy"],"answer":"Nandini from Karnataka","explanation":"Other examples include Mother Dairy, Aavin, Vijaya, Kevi, Sudha and Verka."},
    {"type":"mcq","prompt":"What does the chapter's example of turning tree pulp into paper and then books demonstrate?","options":["That all three economic sectors must work together to create a finished product","That only the primary sector matters in production","That books can be made without any economic activity","That the secondary sector works completely alone"],"answer":"That all three economic sectors must work together to create a finished product","explanation":"From harvesting wood to manufacturing paper to selling books, every sector plays a role."},
    {"type":"mcq","prompt":"What is the overall lesson of the AMUL story about the three economic sectors?","options":["The three sectors are interconnected and support each other, from raw material to finished, sold product","The three sectors are completely independent of one another","Only the tertiary sector generates real value","The primary sector should always operate without help from other sectors"],"answer":"The three sectors are interconnected and support each other, from raw material to finished, sold product","explanation":"This interdependence is the central theme of the chapter."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.WT_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.WT_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['💰','🥛','🏭','🧑‍🌾','🧑‍🔧','🤝'];

/* ============================== STATE ============================== */
const STORE_KEY = 'work-trade-quest-v1';
function defaultState(){ return {avatar:'💰', name:'Karyakarta', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldWt(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('wt', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedWt(i){
  const active = activeUnreviewedWorldWt();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewWt(i){
  const active = activeUnreviewedWorldWt();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewWt = ()=>{
  const active = activeUnreviewedWorldWt();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'wt',
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
  const mouth = sad ? `<path d="M42 70 Q 50 63, 58 70" stroke="#1c3a24" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    : mood==='think' ? `<circle cx="50" cy="70" r="2" fill="#1c3a24"/>`
    : `<path d="M42 68 Q 50 78, 58 68" stroke="#1c3a24" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(52,211,153,0.55))">
    <defs>
      <radialGradient id="mCoin" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#D1FAE5"/><stop offset="60%" stop-color="#6EE7B7"/><stop offset="100%" stop-color="#047857"/>
      </radialGradient>
      <radialGradient id="mGlowWt" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#A7F3D0" stop-opacity="0.7"/><stop offset="100%" stop-color="#A7F3D0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowWt)"/>
    <circle cx="50" cy="55" r="34" fill="url(#mCoin)" stroke="#047857" stroke-width="2"/>
    <text x="50" y="34" text-anchor="middle" font-size="12" font-weight="900" fill="#047857">₹</text>
    <ellipse cx="40" cy="58" rx="4" ry="${sad?2:5}" fill="#1c3a24"/>
    <ellipse cx="60" cy="58" rx="4" ry="${sad?2:5}" fill="#1c3a24"/>
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
if(window.__wtHashListener) window.removeEventListener('hashchange', window.__wtHashListener);
window.__wtHashListener = function(){ if(!location.hash.startsWith('#/wt')) return; render(); };
window.addEventListener('hashchange', window.__wtHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/wt\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='💰';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">From farm to factory to shop</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Discover the <span class="text-gradient-aurora">value of work.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From economic and non-economic activities to the three sectors of the economy and the amazing AMUL story — five worlds explore how India works, earns and grows.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Begin the journey →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Karyakarta</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Karyakarta" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter Work & Trade Quest →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Karyakarta', avatar); render(); };
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
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Work & Trade Explorer</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Rupaiya</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to explore how work creates value?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedWt(i);
        const needsReview = worldNeedsReviewWt(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/wt/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewWt();return false;"` : '';
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
  if(!w){ nav('#/wt/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedWt(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/wt/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/wt/lesson/'+w.id+'/'+lv.id:'#'}">
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
  if(!w||!lv){ nav('#/wt/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedWt(wIdx)){ renderHome(); return; }
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
        <a href="#/wt/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/wt/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/wt/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/wt/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('wt', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['wt'] = { init: wtInit };
