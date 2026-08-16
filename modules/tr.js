function trInit(){

/* ============================== DATA ============================== */
const WORLDS = [{"id":1,"slug":"factors","title":"The Four Factors","subtitle":"Land · Labour · Capital · Enterprise","emoji":"🏗️","gradient":"linear-gradient(135deg,#F59E0B 0%,#84CC16 100%)","glow":"#F59E0B","levels":[{"id":1,"title":"What Does It Take to Run a Business?","intro":"Meet Ratna, who runs a small restaurant. Every product around you goes through a production process — let's find out what that really takes.","questions":[{"xp":12,"id":"1-1-1","type":"pricetag","prompt":"The resources or inputs used to produce goods and services are called:","options":["Products","Factors of production","Profits","Assets"],"answer":"Factors of production","explanation":"Everything from a phone to a meal is made using these inputs."},{"xp":12,"id":"1-1-2","type":"tap","prompt":"Tap every one of the four classic factors of production.","options":["Land","Labour","Capital","Entrepreneurship","Advertising"],"answer":["Land","Labour","Capital","Entrepreneurship"],"explanation":"Advertising helps sell a product, but it isn't one of the four classic factors of production."},{"xp":12,"id":"1-1-3","type":"mcq","prompt":"In economics, the word 'land' includes:","options":["Only city plots for sale","Natural resources like soil, forests, water, minerals and sunlight","Only farmland","Only ocean territory"],"answer":"Natural resources like soil, forests, water, minerals and sunlight","explanation":"'Land' is a broad economic term for everything nature provides."}]},{"id":2,"title":"Labour and Effort","intro":"Carpenters, teachers, doctors, farmers — every job needs labour. But what turns labour into something more valuable?","questions":[{"xp":12,"id":"1-2-1","type":"mcq","prompt":"'Labour' in economics refers to:","options":["Only manual work","The physical and mental effort people put into production","Machines doing work","Money invested in a business"],"answer":"The physical and mental effort people put into production","explanation":"Everyone from a police officer to a scientist contributes labour through knowledge and effort."},{"xp":12,"id":"1-2-2","type":"mcq","prompt":"'Human capital' is best described as:","options":["The money a person has saved","The specialised skills, knowledge and expertise behind someone's labour","A company's machinery","A type of natural resource"],"answer":"The specialised skills, knowledge and expertise behind someone's labour","explanation":"Human capital is about the quality and efficiency of labour, not just effort alone."},{"xp":12,"id":"1-2-3","type":"truefalse","prompt":"A civil engineer applies human capital gained through education and training when designing a bridge.","options":["True","False"],"answer":"True","explanation":"Their specialised knowledge is exactly what makes their labour more valuable."}]},{"id":3,"title":"Meet the Entrepreneur","intro":"Someone has to take the risk, gather the resources, and make the business happen. That's the entrepreneur.","questions":[{"xp":12,"id":"1-3-1","type":"mcq","prompt":"Entrepreneurship means:","options":["Working for a fixed salary only","Starting your own business or creating something new to solve a problem","Buying shares in the stock market","Collecting taxes"],"answer":"Starting your own business or creating something new to solve a problem","explanation":"An entrepreneur combines the other factors of production and takes on risk to bring an idea to life."},{"xp":12,"id":"1-3-2","type":"tap","prompt":"Tap everything an entrepreneur typically does.","options":["Identifies a problem and looks for a solution","Combines land, labour and capital","Takes risks with money and time","Guarantees a fixed monthly salary for themselves","Makes key business decisions"],"answer":["Identifies a problem and looks for a solution","Combines land, labour and capital","Takes risks with money and time","Makes key business decisions"],"explanation":"Entrepreneurs take on risk rather than guaranteeing themselves steady income."}]},{"id":4,"title":"Ratna's Restaurant","intro":"Let's put it all together using Ratna's restaurant, Pause Point, as our example.","questions":[{"xp":12,"id":"1-4-1","type":"mcq","prompt":"When Ratna started her restaurant, she needed money for rent and equipment. In economics, this need is met through:","options":["Land only","Capital","Labour only","Entrepreneurship alone"],"answer":"Capital","explanation":"Capital covers the monetary resources and durable assets a business needs to operate."},{"xp":12,"id":"1-4-2","type":"sort","prompt":"Sort each of Ratna's needs by which factor of production it represents.","buckets":[{"id":"land","label":"Land","emoji":"🌍"},{"id":"labour","label":"Labour","emoji":"💪"},{"id":"capital","label":"Capital","emoji":"💰"}],"items":[{"label":"The plot her restaurant sits on","bucket":"land","emoji":"🏞️"},{"label":"Her seven staff members","bucket":"labour","emoji":"👥"},{"label":"Kitchen equipment bought on loan","bucket":"capital","emoji":"🍳"}],"explanation":"Every business input can be traced back to one of these classic factors."}]},{"id":5,"title":"Boss: The Idle Investor","intro":"The Idle Investor thinks money alone builds a business. Show why every factor matters together!","isBoss":true,"bossName":"The Idle Investor","questions":[{"xp":12,"id":"1-5-1","type":"pricetag","prompt":"Which of these is NOT one of the four classic factors of production?","options":["Land","Labour","Marketing","Capital"],"answer":"Marketing","explanation":"Marketing helps sell a product but isn't one of the four classic production inputs."},{"xp":12,"id":"1-5-2","type":"mcq","prompt":"Human capital differs from basic labour because it includes:","options":["Only physical strength","Specialised skills, knowledge and expertise","Land ownership","Stock market shares"],"answer":"Specialised skills, knowledge and expertise","explanation":"Human capital is about the quality behind the effort, not effort alone."},{"xp":12,"id":"1-5-3","type":"tap","prompt":"Tap every true statement about entrepreneurs.","options":["They take on risk","They combine the other factors of production","They are guaranteed to profit","They make key business decisions"],"answer":["They take on risk","They combine the other factors of production","They make key business decisions"],"explanation":"Entrepreneurship involves real risk — profit is never guaranteed."}]}]},{"id":2,"slug":"humancapital","title":"Human Capital","subtitle":"Education · Health · Culture · Heritage","emoji":"🎓","gradient":"linear-gradient(135deg,#3B82F6 0%,#06B6D4 100%)","glow":"#3B82F6","levels":[{"id":1,"title":"Education & Health Build Capital","intro":"Two things quietly shape how productive a person can be: how well they're educated, and how healthy they are.","questions":[{"xp":12,"id":"2-1-1","type":"mcq","prompt":"How does education contribute to human capital?","options":["It has no real effect","It builds knowledge and prepares people to solve real-world problems","It only matters for doctors","It replaces the need for training"],"answer":"It builds knowledge and prepares people to solve real-world problems","explanation":"From basic literacy to specialised expertise, education strengthens human capital."},{"xp":12,"id":"2-1-2","type":"mcq","prompt":"Good healthcare supports human capital because:","options":["Healthy workers can focus, be creative, and miss less work","It has nothing to do with productivity","Only children benefit from healthcare","It replaces the need for education"],"answer":"Healthy workers can focus, be creative, and miss less work","explanation":"Physical and mental well-being directly affects how much people can contribute."},{"xp":12,"id":"2-1-3","type":"truefalse","prompt":"As of 2023 World Bank estimates, India's adult literacy rate is higher for males (85%) than for females (70%).","options":["True","False"],"answer":"True","explanation":"This literacy gap is one of the real challenges India faces in developing human capital."}]},{"id":2,"title":"Culture of Work","intro":"Values and habits shape human capital too — from Japan's kaizen to Germany's precision engineering.","questions":[{"xp":12,"id":"2-2-1","type":"mcq","prompt":"The Japanese concept of 'kaizen' means:","options":["Fast profit","Continuous improvement","Strict hierarchy","Cheap labour"],"answer":"Continuous improvement","explanation":"Kaizen has been applied in Japan since the 1940s and helped raise living standards."},{"xp":12,"id":"2-2-2","type":"mcq","prompt":"Germany's reputation for high-quality industrial output is often linked to a work ethic valuing:","options":["Speed over quality","Punctuality, attention to detail and quality","Low wages","Avoiding new technology"],"answer":"Punctuality, attention to detail and quality","explanation":"These cultural values contributed to Germany's rise in technology and manufacturing."},{"xp":12,"id":"2-2-3","type":"mcq","prompt":"India's demographic dividend refers to the benefit of having:","options":["More natural resources than any country","A large number of young, working-age people","The world's largest currency reserve","More farmland than factories"],"answer":"A large number of young, working-age people","explanation":"About 65% of India's population is under 35 — a huge potential workforce, if given education, health and skills."}]},{"id":3,"title":"India's Ancient Skill Heritage","intro":"Long before factories, Indian artisans passed down extraordinary skills across generations.","questions":[{"xp":12,"id":"2-3-1","type":"mcq","prompt":"The shilpa shastras are ancient Indian texts containing:","options":["Tax records","Detailed design guidelines for sculptures, buildings and jewellery","Trade agreements","Only religious hymns"],"answer":"Detailed design guidelines for sculptures, buildings and jewellery","explanation":"These texts prescribed exact specifications for generations of craftspeople."},{"xp":12,"id":"2-3-2","type":"mcq","prompt":"India's ancient 'stitched shipbuilding' technique involved:","options":["Welding metal plates","Stitching wooden planks together with cords instead of nails","3-D printed hulls","Using only stone"],"answer":"Stitching wooden planks together with cords instead of nails","explanation":"This made ships flexible enough to navigate the Indian Ocean, a technique over 2000 years old."},{"xp":12,"id":"2-3-3","type":"truefalse","prompt":"Stitched shipbuilding is now mostly used only for small fishing boats, after declining once Europeans arrived in the Indian Ocean.","options":["True","False"],"answer":"True","explanation":"Many traditional production techniques have declined as newer technologies took over."}]},{"id":4,"title":"Challenges to Human Capital","intro":"Not everyone gets an equal chance to build their human capital. Let's look at the real barriers.","questions":[{"xp":12,"id":"2-4-1","type":"mcq","prompt":"If a student drops out of school because a parent lost their job, this is most likely to affect their future:","options":["Not at all","Human capital, and therefore their future productivity and opportunities","Only their hobbies","Only their friendships"],"answer":"Human capital, and therefore their future productivity and opportunities","explanation":"Lost years of schooling can have long-term effects on skills and earning potential."},{"xp":12,"id":"2-4-2","type":"mcq","prompt":"If businesses can't find workers with the skills they need, this is a sign of:","options":["Too much human capital","A gap between the skills needed and the skills available","Too many entrepreneurs","A land shortage"],"answer":"A gap between the skills needed and the skills available","explanation":"This mismatch is a real challenge for developing human capital in a growing economy."}]},{"id":5,"title":"Boss: The Untrained Crowd","intro":"The Untrained Crowd believes effort alone is enough. Prove why skills, health and culture matter too!","isBoss":true,"bossName":"The Untrained Crowd","questions":[{"xp":12,"id":"2-5-1","type":"pricetag","prompt":"Which combination best builds strong human capital?","options":["Effort alone, without training","Education, healthcare, and a culture of continuous improvement","Only natural talent","Only owning capital"],"answer":"Education, healthcare, and a culture of continuous improvement","explanation":"Human capital is shaped by more than raw effort — training, health and values all matter."},{"xp":12,"id":"2-5-2","type":"mcq","prompt":"India's demographic dividend can only be fully realised if young people have access to:","options":["Quality education, health and skills training","More land only","Lower taxes only","Foreign investment alone"],"answer":"Quality education, health and skills training","explanation":"Without these, a young population doesn't automatically translate into productivity."},{"xp":12,"id":"2-5-3","type":"tap","prompt":"Tap every real example of India's ancient skill heritage mentioned in the chapter.","options":["Shilpa shastras for sculpture and architecture","Stitched shipbuilding","3-D printed circuit boards","Generations of temple sculptors"],"answer":["Shilpa shastras for sculpture and architecture","Stitched shipbuilding","Generations of temple sculptors"],"explanation":"3-D printing is a modern technology, not part of India's ancient skill heritage."}]}]},{"id":3,"slug":"capital","title":"Capital & Enterprise","subtitle":"Money · Machines · Risk · Reward","emoji":"💰","gradient":"linear-gradient(135deg,#10B981 0%,#FBBF24 100%)","glow":"#10B981","levels":[{"id":1,"title":"What Counts as Capital?","intro":"Money alone isn't capital — machines, tools and buildings count too.","questions":[{"xp":12,"id":"3-1-1","type":"pricetag","prompt":"In economics, 'capital' includes:","options":["Only cash in a bank account","Monetary resources plus durable assets like machinery, tools and buildings","Only natural resources","Only a business's employees"],"answer":"Monetary resources plus durable assets like machinery, tools and buildings","explanation":"Capital is money plus human-made resources used to produce goods and services."},{"xp":12,"id":"3-1-2","type":"tap","prompt":"Tap everything that would count as 'capital' for a business.","options":["Delivery van","Factory building","Sunlight","Kitchen equipment","Farmland (as natural land)"],"answer":["Delivery van","Factory building","Kitchen equipment"],"explanation":"Sunlight and farmland are 'land' — natural resources, not human-made capital."}]},{"id":2,"title":"Where Does Capital Come From?","intro":"Ratna needed a loan to start her restaurant. Where else does business money come from?","questions":[{"xp":12,"id":"3-2-1","type":"pricetag","prompt":"For most people starting a small business, the first source of funds is usually:","options":["The stock market","Personal savings, family and friends","Government grants only","Foreign investors"],"answer":"Personal savings, family and friends","explanation":"Larger funding sources like bank loans or the stock market usually come later."},{"xp":12,"id":"3-2-2","type":"mcq","prompt":"When a business borrows money from a bank, it repays the loan plus:","options":["A dividend","Interest","A tax","Nothing extra"],"answer":"Interest","explanation":"Interest is the cost of borrowing someone else's money for a period of time."},{"xp":12,"id":"3-2-3","type":"mcq","prompt":"Large companies can raise money from the public by selling shares on the:","options":["Stock market","Post office","Land registry","Labour market"],"answer":"Stock market","explanation":"In exchange, shareholders may receive a portion of the profits, called a dividend."}]},{"id":3,"title":"Meet the Entrepreneur: J.R.D. Tata","intro":"One of India's greatest entrepreneurs believed business should do more than just make money.","questions":[{"xp":12,"id":"3-3-1","type":"mcq","prompt":"J.R.D. Tata started India's first airline in 1932, which later became:","options":["IndiGo","Air India","SpiceJet","Vistara"],"answer":"Air India","explanation":"Tata Airlines, founded in 1932, eventually became Air India."},{"xp":12,"id":"3-3-2","type":"mcq","prompt":"J.R.D. Tata believed businesses should:","options":["Only maximise profit, nothing else","Make money but also help society","Avoid caring about their workers","Stay small forever"],"answer":"Make money but also help society","explanation":"He was known for caring about workers' conditions as well as the Tata Group's growth."},{"xp":12,"id":"3-3-3","type":"truefalse","prompt":"J.R.D. Tata received the Bharat Ratna, India's highest civilian award, in 1992.","options":["True","False"],"answer":"True","explanation":"He was honoured for his vision, hard work and service to the nation."}]},{"id":4,"title":"Risk and Reward","intro":"No entrepreneur is guaranteed success. Let's look at what taking a risk really means.","questions":[{"xp":12,"id":"3-4-1","type":"mcq","prompt":"Why is entrepreneurship often described as risky?","options":["Because entrepreneurs are guaranteed a government salary","Because they invest money and time without a guaranteed return","Because they never make decisions","Because they only work with capital, not people"],"answer":"Because they invest money and time without a guaranteed return","explanation":"Unlike a fixed salary, an entrepreneur's income depends on the business succeeding."},{"xp":12,"id":"3-4-2","type":"mcq","prompt":"Besides making profit, what else can a successful entrepreneur create for society?","options":["Nothing beyond their own wealth","Job opportunities and innovative solutions to problems","Higher taxes only","Fewer choices for consumers"],"answer":"Job opportunities and innovative solutions to problems","explanation":"Entrepreneurs like J.R.D. Tata created jobs across steel, aviation, power and more."}]},{"id":5,"title":"Boss: The Reckless Lender","intro":"The Reckless Lender thinks capital alone guarantees success. Show what really builds a business!","isBoss":true,"bossName":"The Reckless Lender","questions":[{"xp":12,"id":"3-5-1","type":"mcq","prompt":"Which of these is considered 'capital' in economics?","options":["Farmland's natural fertility","A factory's machinery","A worker's skill","Sunlight"],"answer":"A factory's machinery","explanation":"Machinery is a human-made durable asset — classic capital."},{"xp":12,"id":"3-5-2","type":"mcq","prompt":"A company that sells shares to the public in exchange for a portion of future profits is raising money through:","options":["A bank loan","The stock market","Personal savings","A government grant"],"answer":"The stock market","explanation":"Shareholders receive dividends from the company's profits in return."},{"xp":12,"id":"3-5-3","type":"mcq","prompt":"What made J.R.D. Tata a notable entrepreneur, beyond starting businesses?","options":["He avoided all financial risk","He cared about workers' wellbeing and believed business should serve society too","He refused to expand the Tata Group","He worked alone without any team"],"answer":"He cared about workers' wellbeing and believed business should serve society too","explanation":"This combination of ambition and responsibility defined his legacy."}]}]},{"id":4,"slug":"technology","title":"Technology & Connection","subtitle":"Enablers · Supply Chains · Responsibility","emoji":"⚙️","gradient":"linear-gradient(135deg,#EC4899 0%,#8B5CF6 100%)","glow":"#EC4899","levels":[{"id":1,"title":"Technology as an Enabler","intro":"From UPI payments to GPS routes, technology quietly powers modern production.","questions":[{"xp":12,"id":"4-1-1","type":"mcq","prompt":"In this chapter, 'technology' is best defined as:","options":["Only smartphones and computers","The application of scientific knowledge to production","A fifth factor of production, unrelated to the other four","Only factory robots"],"answer":"The application of scientific knowledge to production","explanation":"Technology is a facilitator that helps businesses produce more with the same or fewer inputs."},{"xp":12,"id":"4-1-2","type":"tap","prompt":"Tap every real example of technology mentioned as helping production or daily life.","options":["UPI payments","GPS for shortest delivery routes","Drones spraying fertiliser","Wheelbarrows and pulleys still in daily use","Time travel"],"answer":["UPI payments","GPS for shortest delivery routes","Drones spraying fertiliser","Wheelbarrows and pulleys still in daily use"],"explanation":"Technological progress doesn't always mean old tools disappear — some remain useful."},{"xp":12,"id":"4-1-3","type":"mcq","prompt":"Platforms like SWAYAM and the National Career Service help people by:","options":["Charging high fees for online courses","Providing free courses and job listings, reducing geographic barriers","Replacing the need for any skills","Only serving people in big cities"],"answer":"Providing free courses and job listings, reducing geographic barriers","explanation":"Technology can open access to knowledge and jobs regardless of location."}]},{"id":2,"title":"How the Factors Connect","intro":"Land, labour, capital, entrepreneurship and technology don't work alone — they combine in different proportions.","questions":[{"xp":12,"id":"4-2-1","type":"mcq","prompt":"A handicraft business that relies heavily on skilled workers rather than machines is described as:","options":["Capital-intensive","Labour-intensive","Land-intensive","Technology-free"],"answer":"Labour-intensive","explanation":"Agriculture, construction and handicrafts often rely more on labour than capital."},{"xp":12,"id":"4-2-2","type":"mcq","prompt":"Producing semiconductor chips or satellites is usually described as:","options":["Labour-intensive","Capital-intensive, requiring specialised machinery","Land-intensive","Entrepreneurship-free"],"answer":"Capital-intensive, requiring specialised machinery","explanation":"These products need heavy investment in equipment and technology."},{"xp":12,"id":"4-2-3","type":"truefalse","prompt":"Increased machine use in agriculture is an example of technology changing the proportion of factors used in production.","options":["True","False"],"answer":"True","explanation":"New techniques like this can lower dependence on labour."}]},{"id":3,"title":"Supply Chains","intro":"A mobile phone travels through many hands and places before it reaches you.","questions":[{"xp":12,"id":"4-3-1","type":"mcq","prompt":"A 'supply chain' is:","options":["A single factory's assembly line only","A network of people, organisations and resources involved in producing and selling goods","A type of loan","A government tax policy"],"answer":"A network of people, organisations and resources involved in producing and selling goods","explanation":"From raw materials to retail stores, many links make up a supply chain."},{"xp":12,"id":"4-3-2","type":"order","prompt":"Put the mobile phone manufacturing process in order.","steps":["R&D team conceptualises new features","Acquire land and set up factory","Acquire raw materials and assemble components","Test, mass produce, package and distribute to retail"],"explanation":"Every stage relies on combining land, labour, capital, entrepreneurship and technology."},{"xp":12,"id":"4-3-3","type":"mcq","prompt":"What happened to production during the COVID-19 pandemic when supply chains from far-off places were disrupted?","options":["Nothing changed","Production processes halted","Prices dropped everywhere","Supply chains became unnecessary"],"answer":"Production processes halted","explanation":"Relying on distant sources instead of local inputs made supply chains vulnerable to disruption."}]},{"id":4,"title":"Responsibility & Sustainability","intro":"Using natural resources and workers responsibly isn't optional — it's part of running a business well.","questions":[{"xp":12,"id":"4-4-1","type":"mcq","prompt":"Why must producers use natural resources responsibly?","options":["Resources are unlimited, so it doesn't matter","Resources are limited and can be harmed, affecting future generations","Only governments need to worry about this","It has no economic impact"],"answer":"Resources are limited and can be harmed, affecting future generations","explanation":"Sustainable use means meeting today's needs without making it harder for the future."},{"xp":12,"id":"4-4-2","type":"tap","prompt":"Tap every responsibility businesses have toward their workers.","options":["Fair compensation and safe working conditions","Investing in skill development and training","Protecting workplace rights against discrimination","Paying workers as little as legally possible","Providing benefits like healthcare or paid leave"],"answer":["Fair compensation and safe working conditions","Investing in skill development and training","Protecting workplace rights against discrimination","Providing benefits like healthcare or paid leave"],"explanation":"Responsible businesses invest in their workers, not just minimise costs."},{"xp":12,"id":"4-4-3","type":"mcq","prompt":"India was the first country in the world to legally mandate what?","options":["A minimum wage","Corporate Social Responsibility (CSR) spending","Free education","Universal healthcare"],"answer":"Corporate Social Responsibility (CSR) spending","explanation":"India's 2014 CSR law requires companies to spend 2% of average profits on CSR activities."}]},{"id":5,"title":"Final Boss: The Wasteful Producer","intro":"The final trial! The Wasteful Producer ignores technology, connections and responsibility. Prove you understand how it all fits together.","isBoss":true,"bossName":"The Wasteful Producer","questions":[{"xp":12,"id":"4-5-1","type":"pricetag","prompt":"Which factor acts as an enabler, helping combine the other four more efficiently?","options":["Land","Labour","Technology","Capital"],"answer":"Technology","explanation":"Technology helps businesses produce more goods with the same or fewer other inputs."},{"xp":12,"id":"4-5-2","type":"mcq","prompt":"A business that depends heavily on skilled human effort rather than machinery is called:","options":["Capital-intensive","Labour-intensive","Technology-intensive","Land-intensive"],"answer":"Labour-intensive","explanation":"Agriculture, construction and handicrafts are classic examples."},{"xp":12,"id":"4-5-3","type":"mcq","prompt":"India's 2014 law was the world's first to mandate:","options":["A minimum wage","Corporate Social Responsibility (CSR) spending","Universal literacy","A four-day work week"],"answer":"Corporate Social Responsibility (CSR) spending","explanation":"Companies must spend 2% of their average profits on CSR activities."},{"xp":12,"id":"4-5-4","type":"tap","prompt":"Tap every genuine responsibility of a business toward people and the planet.","options":["Fair pay and safe conditions","Reducing pollution and waste","Investing in worker training","Dumping waste to save costs","Respecting workplace rights"],"answer":["Fair pay and safe conditions","Reducing pollution and waste","Investing in worker training","Respecting workplace rights"],"explanation":"Responsible production balances profit with people and the environment."}]}]}];

const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['🧑‍💼','🧑‍🌾','🧑‍🏭','🧑‍🔧','🧑‍🎨','🧑‍💻'];

/* ============================== STATE ============================== */
const STORE_KEY = 'trade-quest-v1';
function defaultState(){ return {avatar:'🧑‍💼', name:'Trader', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function worldPrevDone(i){
  if(i===0) return true;
  const prevWorld = WORLDS[i-1];
  return prevWorld.levels.every(l=>(STATE.progress[progKey(prevWorld.id,l.id)]?.stars??0)>0);
}
function worldReviewPassed(i){
  if(i===0) return true;
  return typeof atlasModulePassed !== 'function' || atlasModulePassed('tr', WORLDS[i-1].id);
}
function worldAlreadyStarted(i){
  const w = WORLDS[i];
  return w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length > 0;
}
function isWorldUnlockedTr(i){ return i===0 || worldAlreadyStarted(i) || (worldPrevDone(i) && worldReviewPassed(i)); }
function worldNeedsReviewTr(i){ return i>0 && !worldAlreadyStarted(i) && worldPrevDone(i) && !worldReviewPassed(i); }
window.__openWorldReviewTr = (i)=>{
  const prev = WORLDS[i-1];
  atlasShowModuleReviewGate(app, {
    subject: 'tr',
    moduleId: String(prev.id),
    moduleTitle: prev.title,
    lessonTitles: prev.levels.map(l=>l.title),
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
  const mouth = sad ? `<path d="M42 70 Q 50 63, 58 70" stroke="#1f2e1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    : mood==='think' ? `<circle cx="50" cy="70" r="2" fill="#1f2e1a"/>`
    : `<path d="M42 68 Q 50 78, 58 68" stroke="#1f2e1a" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(16,185,129,0.55))">
    <defs>
      <radialGradient id="trCoin" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#FEF3C7"/><stop offset="55%" stop-color="#FBBF24"/><stop offset="100%" stop-color="#B45309"/>
      </radialGradient>
      <radialGradient id="trGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#84CC16" stop-opacity="0.6"/><stop offset="100%" stop-color="#84CC16" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#trGlow)"/>
    <circle cx="50" cy="52" r="38" fill="url(#trCoin)"/>
    <circle cx="50" cy="52" r="31" fill="none" stroke="#B45309" stroke-width="1.5" opacity="0.5"/>
    <ellipse cx="40" cy="52" rx="4" ry="${sad?2:5}" fill="#1f2e1a"/>
    <ellipse cx="60" cy="52" rx="4" ry="${sad?2:5}" fill="#1f2e1a"/>
    <circle cx="41.5" cy="50.5" r="1.2" fill="white"/>
    <circle cx="61.5" cy="50.5" r="1.2" fill="white"/>
    ${mouth}
    <circle cx="34" cy="62" r="3" fill="#fb923c" opacity="0.55"/>
    <circle cx="66" cy="62" r="3" fill="#fb923c" opacity="0.55"/>
  </svg>`;
}

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
function nav(hash){ location.hash = hash; }
if(window.__trHashListener) window.removeEventListener('hashchange', window.__trHashListener);
window.__trHashListener = function(){ if(!location.hash.startsWith('#/tr')) return; render(); };
window.addEventListener('hashchange', window.__trHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/tr\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='🧑‍💼';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">Every rupee tells a story</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Land. Labour. Capital. <span class="text-gradient-aurora">Enterprise.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">Artha, the spirit of enterprise, needs you. Travel through the worlds of production, meet real entrepreneurs, and learn how India builds, earns, and grows.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Start the venture →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Trader</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Trader" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Open for business →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Trader', avatar); render(); };
  draw();
}

/* ---------------- HOME (Adventure Map) ---------------- */
function renderHome(){
  const lv = levelNum(STATE.xp), frac = levelFrac(STATE.xp);
  const lessonsDone = Object.values(STATE.progress).filter(p=>p.stars>0).length;
  app.innerHTML = `${Nav()}<main>
    <div class="glass-strong rounded-3xl" style="padding:18px;display:flex;align-items:center;gap:16px">
      <div style="font-size:44px;width:60px;height:60px;border-radius:16px;background:#10b98133;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px -6px #10b98188">${STATE.avatar}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Enterprise Builder</div>
        <div class="font-display" style="font-size:22px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${STATE.name}</div>
        <div class="progress-track" style="margin-top:6px;height:8px"><div class="progress-fill" style="width:${frac*100}%"></div></div>
      </div>
      <div style="text-align:right">
        <div class="pillbox" style="background:#10b98133;border:1px solid #10b98155">Lv ${lv}</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Artha</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to grow the enterprise?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedTr(i);
        const needsReview = worldNeedsReviewTr(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/tr/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewTr(${i});return false;"` : '';
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
      <span>Chapter 1 · Factors of Production</span>
    </div>
  </main>`;
  window.__resetAll = resetSave;
}

/* ---------------- WORLD (level select) ---------------- */
function renderWorld(slug){
  const w = WORLDS.find(w=>w.slug===slug);
  if(!w){ nav('#/tr/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedTr(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/tr/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/tr/lesson/'+w.id+'/'+lv.id:'#'}">
          <div class="lesson-icon" style="${lv.isBoss?'background:#f26d6d55;box-shadow:0 0 20px -4px #f26d6d':'background:linear-gradient(135deg,'+(w.gradient.match(/#\\w+/g)?.[0]||'#10b981')+'55, transparent)'}">${lv.isBoss?'👹':lv.id}</div>
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
  if(!w||!lv){ nav('#/tr/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedTr(wIdx)){ renderHome(); return; }
  const P = lv.questions.length;
  let qi = -1, correctCount=0, wrongCount=0, combo=0, mood='happy', bossHp=100, playerHp=100, flash=null;

  function questionInner(q, onAnswer, locked, picked){
    if(q.type==='mcq'||q.type==='truefalse'||q.type==='fill'){
      return `<div class="opt-grid">${q.options.map(o=>{
        let cls='opt-btn'; if(locked){ cls += picked===o ? (o===q.answer?' right':' wrong') : (o===q.answer?' reveal':' dim'); }
        return `<button class="${cls}" ${locked?'disabled':''} onclick='__qPick(${JSON.stringify(o)})'>${o}</button>`;
      }).join('')}</div>`;
    }
    if(q.type==='pricetag'){
      return `<div class="stall-rack">${q.options.map((o,i)=>{
        let cls='price-tag'; if(locked){ cls += picked===o ? (o===q.answer?' right':' wrong') : (o===q.answer?' reveal':' dim'); }
        return `<button class="${cls}" style="--tilt:${(i%2===0?-1:1)*(2+i)}deg" ${locked?'disabled':''} onclick='__qPick(${JSON.stringify(o)})'>
          <span class="tag-string"></span>
          <span class="tag-hole"></span>
          <span class="tag-text">${o}</span>
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
        <a href="#/tr/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/tr/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/tr/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/tr/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('tr', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['tr'] = { init: trInit };
