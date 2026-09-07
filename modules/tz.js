function tzInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"readingmaps","title":"Reading Maps","subtitle":"What is a Map? · Distance, Direction & Symbols","emoji":"🗺️","gradient":"linear-gradient(135deg,#38BDF8 0%,#0369A1 100%)","glow":"#38BDF8","levels":[
  {"id":1,"title":"What is a Map?","intro":"Maps let a huge world fit onto a small page — but how do they work?","questions":[
    {"type":"mcq","prompt":"A map is a representation or drawing of an area, viewed as if from the ______.","options":["top","side","ground level","underneath"],"answer":"top","explanation":"This bird's-eye view is what makes maps so useful for navigation."},
    {"type":"mcq","prompt":"A book or collection of maps is called an ______.","options":["atlas","almanac","encyclopedia","index"],"answer":"atlas","explanation":"Atlases can contain maps of a city, a country, or the whole world."},
    {"type":"mcq","prompt":"Which type of map mainly shows natural features like mountains, oceans and rivers?","options":["Physical maps","Political maps","Thematic maps","Road maps"],"answer":"Physical maps","explanation":"Political maps, by contrast, show boundaries, cities and countries."},
    {"type":"mcq","prompt":"Which type of map shows details of countries or states, their boundaries and cities?","options":["Political maps","Physical maps","Thematic maps","Weather maps"],"answer":"Political maps","explanation":"A map of India with all its States and Union Territories is a political map."}
  ]},
  {"id":2,"title":"Distance, Direction & Symbols","intro":"Three components turn a flat drawing into a genuinely useful map.","questions":[
    {"type":"mcq","prompt":"The relationship between distance on a map and the actual distance on the ground is called the map's ______.","options":["scale","legend","grid","symbol"],"answer":"scale","explanation":"For example, a scale of 1 cm = 500 m means every centimetre on the map equals 500 metres in reality."},
    {"type":"mcq","prompt":"Moving clockwise from north, the four cardinal directions are north, east, south and ______.","options":["west","northeast","southwest","northwest"],"answer":"west","explanation":"Northeast, southeast, southwest and northwest are the intermediate directions."},
    {"type":"mcq","prompt":"Why do maps use symbols instead of drawing every feature in full detail?","options":["There isn't enough space to draw every feature in detail","Symbols are prettier than drawings","Maps don't allow any text","Only symbols are legal on maps"],"answer":"There isn't enough space to draw every feature in detail","explanation":"Symbols let maps pack in a lot of information in a small space."},
    {"type":"mcq","prompt":"Which Indian government body has fixed a set of standard symbols for maps of India?","options":["The Survey of India","The Reserve Bank of India","The Archaeological Survey of India","The Geological Survey of India"],"answer":"The Survey of India","explanation":"These standard symbols make Indian maps easier for everyone to read."}
  ]},
  {"id":3,"title":"Boss: The Cartographer's Test","intro":"The Symbol Sentinel challenges your map-reading skills!","isBoss":true,"bossName":"Symbol Sentinel","questions":[
    {"type":"mcq","prompt":"Which type of map shows specific information like population density or rainfall patterns?","options":["Thematic maps","Physical maps","Political maps","Road maps"],"answer":"Thematic maps","explanation":"These maps focus on one particular kind of data."},
    {"type":"mcq","prompt":"If a map's scale is 1 cm = 500 m, how many metres does 2 cm on the map represent?","options":["1000 m","500 m","250 m","2000 m"],"answer":"1000 m","explanation":"Simply multiply the scale by the number of centimetres measured."},
    {"type":"mcq","prompt":"The four cardinal directions, plus NE, SE, SW and NW, together are used to describe ______.","options":["direction on a map","the map's scale","the map's symbols","the map's title"],"answer":"direction on a map","explanation":"These eight directions help you navigate precisely using a map."}
  ]}
]},
{"id":2,"slug":"coordinates","title":"Coordinates & Time","subtitle":"Latitude & Longitude · The Ujjayin Meridian · Time Zones","emoji":"🧭","gradient":"linear-gradient(135deg,#818CF8 0%,#3730A3 100%)","glow":"#818CF8","levels":[
  {"id":1,"title":"Latitude and Longitude","intro":"A grid of imaginary lines lets us pinpoint any place on Earth.","questions":[
    {"type":"mcq","prompt":"The imaginary line halfway between the North and South Poles, marking 0° latitude, is called the ______.","options":["Equator","Prime Meridian","Tropic of Cancer","International Date Line"],"answer":"Equator","explanation":"It is the largest circle you can draw around the globe."},
    {"type":"mcq","prompt":"Latitude measures the distance from the Equator, while longitude measures the distance from the ______.","options":["Prime Meridian","North Pole","South Pole","Tropic of Capricorn"],"answer":"Prime Meridian","explanation":"Together, latitude and longitude form a place's coordinates."},
    {"type":"mcq","prompt":"The Prime Meridian, marked as 0° longitude, passes through Greenwich, an area of which city?","options":["London","Paris","New York","Ujjain"],"answer":"London","explanation":"In 1884, nations agreed this meridian would be the international standard."},
    {"type":"mcq","prompt":"Centuries before Greenwich, India had its own prime meridian, called madhya rekha, passing through which ancient city?","options":["Ujjayin (Ujjain)","Delhi","Varanasi","Prayagraj"],"answer":"Ujjayin (Ujjain)","explanation":"This became a reference point for calculations in Indian astronomical texts."}
  ]},
  {"id":2,"title":"Time Zones","intro":"As the Earth spins, different places experience morning, noon and night at once.","questions":[
    {"type":"mcq","prompt":"The Earth makes one full rotation (360°) every 24 hours, which works out to how many degrees of longitude per hour?","options":["15°","24°","30°","60°"],"answer":"15°","explanation":"This is why each 15° meridian roughly marks a one-hour time difference."},
    {"type":"mcq","prompt":"Indian Standard Time (IST) is how many hours and minutes ahead of Greenwich Mean Time (GMT)?","options":["5 hours 30 minutes","6 hours","3 hours 30 minutes","10 hours"],"answer":"5 hours 30 minutes","explanation":"This is also written as 5.5 hours ahead of GMT."},
    {"type":"mcq","prompt":"The imaginary line located approximately at 180° longitude, opposite the Prime Meridian, where the date changes when crossed, is called the ______.","options":["International Date Line","Tropic of Cancer","Arctic Circle","Equator"],"answer":"International Date Line","explanation":"Crossing it eastward, you subtract a day; crossing it westward, you add a day."},
    {"type":"truefalse","prompt":"Some countries, like Russia, Canada and the USA, are too large to have a single time zone.","options":["True","False"],"answer":"True","explanation":"Russia alone has 11 time zones!"}
  ]},
  {"id":3,"title":"Boss: Grid Guardian","intro":"The Grid Guardian tests your mastery of coordinates and time!","isBoss":true,"bossName":"Grid Guardian","questions":[
    {"type":"mcq","prompt":"Latitude and longitude together are called the two ______ of a place, allowing us to locate it precisely.","options":["coordinates","symbols","scales","hemispheres"],"answer":"coordinates","explanation":"This grid system works just like the coordinates on a chessboard."},
    {"type":"mcq","prompt":"The famous ancient Indian astronomer Varahamihira, associated with the Ujjayin meridian, lived and worked about how many years ago?","options":["1,500 years ago","100 years ago","5,000 years ago","500 years ago"],"answer":"1,500 years ago","explanation":"Ujjayin was a reputed centre for astronomy for many centuries."},
    {"type":"mcq","prompt":"If it is noon at Greenwich, what time would it be at a place located at 30°E longitude?","options":["2 pm","10 am","12 pm","6 pm"],"answer":"2 pm","explanation":"Each 15° of eastward longitude adds one hour to the local time."},
    {"type":"mcq","prompt":"Why is it useful for a country to adopt one standard time rather than using many different local times?","options":["It avoids confusion and makes coordination easier across the country","It makes maps prettier","It is required by international law only","It has no real benefit"],"answer":"It avoids confusion and makes coordination easier across the country","explanation":"This is why India, despite its width, uses a single Indian Standard Time."}
  ]}
]},
{"id":3,"slug":"waterworld","title":"Water World","subtitle":"Water & Land on Earth · The Five Oceans · Counting Continents","emoji":"🌊","gradient":"linear-gradient(135deg,#22D3EE 0%,#155E75 100%)","glow":"#22D3EE","levels":[
  {"id":1,"title":"Water and Land on Earth","intro":"Seen from space, our planet is mostly one colour — blue.","questions":[
    {"type":"mcq","prompt":"About how much of the Earth's surface is covered with water?","options":["Almost three-fourths","About one-tenth","Exactly half","Almost all of it"],"answer":"Almost three-fourths","explanation":"This is why early astronauts called Earth the 'blue planet'."},
    {"type":"mcq","prompt":"A large continuous expanse of land is called a ______.","options":["continent","peninsula","archipelago","plateau"],"answer":"continent","explanation":"Land covers a little over one-fourth of the globe."},
    {"type":"mcq","prompt":"Most of the Earth's water is found in the oceans, but this water is unfit for human consumption because it is ______.","options":["salty","too cold","radioactive","frozen"],"answer":"salty","explanation":"Freshwater, found in glaciers, rivers and lakes, makes up only a small proportion of the planet's water."}
  ]},
  {"id":2,"title":"The Five Oceans","intro":"Though we count five oceans, the seas of the world are all connected.","questions":[
    {"type":"mcq","prompt":"Which is the largest of the world's five oceans?","options":["The Pacific Ocean","The Atlantic Ocean","The Indian Ocean","The Arctic Ocean"],"answer":"The Pacific Ocean","explanation":"The Atlantic Ocean is the second largest."},
    {"type":"mcq","prompt":"Which is the smallest of the world's five oceans?","options":["The Arctic Ocean","The Pacific Ocean","The Southern Ocean","The Indian Ocean"],"answer":"The Arctic Ocean","explanation":"It is located around the North Pole."},
    {"type":"mcq","prompt":"On either side of India, which two parts of the Indian Ocean are found?","options":["The Arabian Sea and the Bay of Bengal","The Atlantic and Pacific","The Red Sea and Black Sea","The Mediterranean and Caspian Sea"],"answer":"The Arabian Sea and the Bay of Bengal","explanation":"The Arabian Sea lies to India's west and the Bay of Bengal to its east."},
    {"type":"truefalse","prompt":"Although we count five oceans, they are not truly separate — seawater flows continuously between them.","options":["True","False"],"answer":"True","explanation":"The lines dividing oceans on maps are just conventions, not real boundaries."}
  ]},
  {"id":3,"title":"Counting Continents","intro":"Believe it or not, there's more than one right answer to 'how many continents are there?'","questions":[
    {"type":"mcq","prompt":"Depending on how they are counted, how many continents can be listed, according to the chapter?","options":["Between four and seven","Always exactly seven","Always exactly five","Between ten and twelve"],"answer":"Between four and seven","explanation":"This depends on whether landmasses like Europe-Asia or North-South America are counted separately."},
    {"type":"mcq","prompt":"Geologists sometimes regard Europe and Asia as a single continent called ______.","options":["Eurasia","Afro-Eurasia","Pangaea","Laurasia"],"answer":"Eurasia","explanation":"Though culturally distinct, they form one continuous landmass."},
    {"type":"mcq","prompt":"The five Olympic rings represent which five inhabited continents?","options":["Africa, America, Asia, Australia and Europe","Only Asia and Europe","Only Africa and America","All seven continents"],"answer":"Africa, America, Asia, Australia and Europe","explanation":"Antarctica is not included, as it has no permanent population."}
  ]},
  {"id":4,"title":"Boss: Continental Divide","intro":"The Continent Counter tests your knowledge of Earth's great landmasses!","isBoss":true,"bossName":"Continent Counter","questions":[
    {"type":"mcq","prompt":"How many continents are counted in the most widely used classification?","options":["Seven","Four","Five","Six"],"answer":"Seven","explanation":"This count treats North America, South America, Africa, Antarctica, Asia, Australia and Europe separately."},
    {"type":"mcq","prompt":"Which is the third largest of the five oceans?","options":["The Indian Ocean","The Pacific Ocean","The Atlantic Ocean","The Arctic Ocean"],"answer":"The Indian Ocean","explanation":"The Southern Ocean is the fourth largest, and the Arctic Ocean is the smallest."},
    {"type":"truefalse","prompt":"The Northern Hemisphere has more land than the Southern Hemisphere.","options":["True","False"],"answer":"True","explanation":"Oceans and continents are not distributed equally between the two hemispheres."}
  ]}
]},
{"id":4,"slug":"islandslife","title":"Islands & Ocean Life","subtitle":"Islands & Antarctica · Ocean Disasters · Oceans and Life","emoji":"🏝️","gradient":"linear-gradient(135deg,#2DD4BF 0%,#134E4A 100%)","glow":"#2DD4BF","levels":[
  {"id":1,"title":"Islands & Antarctica","intro":"Some landmasses are too small to be continents — but they're still remarkable.","questions":[
    {"type":"mcq","prompt":"Which is the largest island in the world?","options":["Greenland","Madagascar","Borneo","Iceland"],"answer":"Greenland","explanation":"It is so large you would need to combine India's 10 largest states to match its size."},
    {"type":"mcq","prompt":"India's two major island groups are the Lakshadweep Islands and the ______.","options":["Andaman and Nicobar Islands","Maldives","Sri Lankan Islands","Seychelles"],"answer":"Andaman and Nicobar Islands","explanation":"Lakshadweep is in the Arabian Sea, while Andaman and Nicobar are in the Bay of Bengal."},
    {"type":"mcq","prompt":"India established its first scientific base station in Antarctica in 1983, called ______.","options":["Dakshin Gangotri","Uttar Gangotri","Bharati Station","Maitri Station"],"answer":"Dakshin Gangotri","explanation":"The Indian Antarctica Programme has been exploring the continent since 1981."},
    {"type":"truefalse","prompt":"India has more than 1,300 small islands, in addition to its two major island groups.","options":["True","False"],"answer":"True","explanation":"This shows the remarkable diversity of India's geography."}
  ]},
  {"id":2,"title":"Oceans and Disasters","intro":"The same oceans that bring life-giving rain can also unleash devastating storms.","questions":[
    {"type":"mcq","prompt":"What natural disaster, often caused by an underwater earthquake or volcanic eruption, produces a huge and powerful ocean wave?","options":["A tsunami","A cyclone","A monsoon","A drought"],"answer":"A tsunami","explanation":"Tsunamis can travel thousands of kilometres and submerge coastal areas."},
    {"type":"mcq","prompt":"On 26 December 2004, a powerful tsunami struck India and 13 other countries around which ocean, following an earthquake in Indonesia?","options":["The Indian Ocean","The Pacific Ocean","The Atlantic Ocean","The Arctic Ocean"],"answer":"The Indian Ocean","explanation":"More than two lakh people lost their lives in this disaster."},
    {"type":"mcq","prompt":"More than half of the world's oxygen is produced by which part of the environment, earning oceans the nickname 'the planet's lungs'?","options":["The oceans' flora (algae and seaweed)","Mountain forests","Desert plants","Underground caves"],"answer":"The oceans' flora (algae and seaweed)","explanation":"This makes healthy oceans essential for life on Earth."}
  ]},
  {"id":3,"title":"Boss: Guardian of the Deep","intro":"The Ocean Sentinel challenges your understanding of how oceans shape our world!","isBoss":true,"bossName":"Ocean Sentinel","questions":[
    {"type":"mcq","prompt":"Which human activities threaten ocean health, according to the chapter?","options":["Plastic pollution and overfishing","Only fishing, which is otherwise harmless","Only shipping traffic","None, oceans are unaffected by humans"],"answer":"Plastic pollution and overfishing","explanation":"Millions of tonnes of plastic waste enter the oceans every year, choking marine life."},
    {"type":"mcq","prompt":"Which UN-designated day, June 8, reminds us of the ocean's role in daily life?","options":["World Oceans Day","World Water Day","Earth Day","World Environment Day"],"answer":"World Oceans Day","explanation":"It highlights the ocean's role as a source of food, medicine and climate regulation."},
    {"type":"mcq","prompt":"India's National Disaster Management Authority deals with disasters such as ______.","options":["Tsunamis and other calamities","Only earthquakes","Only floods","Nothing related to oceans"],"answer":"Tsunamis and other calamities","explanation":"India also contributes to the Indian Ocean Tsunami Warning System, an early-warning collaboration between countries."}
  ]}
]},
{"id":5,"slug":"mountainsplateaus","title":"Mountains & Plateaus","subtitle":"The Three Landforms · Life in the Mountains · Plateaus","emoji":"⛰️","gradient":"linear-gradient(135deg,#F59E0B 0%,#78350F 100%)","glow":"#F59E0B","levels":[
  {"id":1,"title":"The Three Landforms","intro":"Mountains, plateaus and plains — Earth's surface takes three main forms.","questions":[
    {"type":"mcq","prompt":"Landforms are broadly divided into three categories: mountains, plateaus and ______.","options":["plains","deserts","islands","valleys"],"answer":"plains","explanation":"Each landform has its own climate, flora, fauna and human way of life."},
    {"type":"mcq","prompt":"Mountains are recognised by a broad base, steep slopes and a narrow ______.","options":["summit","valley","plateau","delta"],"answer":"summit","explanation":"Shorter, more rounded highlands with gentler slopes are called hills."},
    {"type":"mcq","prompt":"Which two peaks are the highest of the Himalayan range, mentioned in the chapter?","options":["Mount Everest and Kanchenjunga","Mont Blanc and Mount Aconcagua","Mount Kilimanjaro and Anamudi","Mount Kailash and Mount Abu"],"answer":"Mount Everest and Kanchenjunga","explanation":"Mont Blanc is the highest peak of the Alps, and Aconcagua of the Andes."}
  ]},
  {"id":2,"title":"Life in the Mountains","intro":"Steep slopes bring both challenges and remarkable human achievement.","questions":[
    {"type":"mcq","prompt":"Cultivation practised on mountain slopes by cutting steps into them is called ______.","options":["terrace farming","floodplain farming","lava farming","desert farming"],"answer":"terrace farming","explanation":"This technique allows farming even on rugged, steep terrain."},
    {"type":"mcq","prompt":"Who was the first Indian woman to climb Mount Everest, in 1984?","options":["Bachendri Pal","Arunima Sinha","Kalpana Chawla","Kiran Bedi"],"answer":"Bachendri Pal","explanation":"She was awarded the Padma Shri that same year."},
    {"type":"mcq","prompt":"Which mountaineer, who lost a leg in an accident, went on to climb Mount Everest in 2013 and the highest peaks of every continent?","options":["Arunima Sinha","Bachendri Pal","Santosh Yadav","Premlata Agarwal"],"answer":"Arunima Sinha","explanation":"She climbed Mount Vinson in Antarctica among many other peaks, and received the Padma Shri in 2015."},
    {"type":"tap","prompt":"Tap the natural hazards associated with life in the mountains, mentioned in the chapter.","options":["Landslides","Avalanches","Flash floods","Tsunamis","Desertification"],"answer":["Landslides","Avalanches","Flash floods"],"explanation":"Tsunamis and desertification are not typically mountain hazards."}
  ]},
  {"id":3,"title":"Plateaus","intro":"Flat-topped highlands, rich in minerals and home to spectacular waterfalls.","questions":[
    {"type":"mcq","prompt":"A landform that rises up from the surrounding land with a more or less flat top and steep sides is called a ______.","options":["plateau","plain","valley","delta"],"answer":"plateau","explanation":"Plateaus can range from a few hundred to several thousand metres in height."},
    {"type":"mcq","prompt":"Which plateau, with an average altitude of 4,500 m, is nicknamed the 'Roof of the World'?","options":["The Tibetan Plateau","The Deccan Plateau","The Chhota Nagpur Plateau","The East African Plateau"],"answer":"The Tibetan Plateau","explanation":"It is the largest and highest plateau in the world."},
    {"type":"mcq","prompt":"The Deccan Plateau of central and south India was formed millions of years ago through ______.","options":["volcanic activity","river erosion","glacial melting","wind erosion"],"answer":"volcanic activity","explanation":"This makes it one of the oldest plateaus in the world."},
    {"type":"mcq","prompt":"Plateaus are often called 'storehouses of ______' because they are rich in valuable deposits.","options":["minerals","water","forests","fish"],"answer":"minerals","explanation":"Many of the world's largest mines are located on plateaus."}
  ]},
  {"id":4,"title":"Boss: Peak Keeper","intro":"The Peak Keeper puts your knowledge of mountains and plateaus to the test!","isBoss":true,"bossName":"Peak Keeper","questions":[
    {"type":"mcq","prompt":"Tibetans call Mount Everest 'Chomolungma', meaning ______.","options":["Mother Goddess of the World","Roof of the Sky","King of Mountains","Snow Palace"],"answer":"Mother Goddess of the World","explanation":"Nepalis call it 'Sagarmatha', meaning 'Goddess of the Sky'."},
    {"type":"mcq","prompt":"Which plateau in India is rich in iron, coal and manganese reserves?","options":["The Chhota Nagpur Plateau","The Tibetan Plateau","The Deccan Plateau's coast","The Malwa Plateau"],"answer":"The Chhota Nagpur Plateau","explanation":"This makes it an important centre of mining activity."},
    {"type":"truefalse","prompt":"Lava plateaus, formed through volcanic activity, often have rich black soil.","options":["True","False"],"answer":"True","explanation":"This is an exception to the generally rocky, less fertile soil of most plateaus."}
  ]}
]},
{"id":6,"slug":"plainsdeserts","title":"Plains, Deserts & Culture","subtitle":"Life in the Plains · Deserts · The Five Tinais","emoji":"🏞️","gradient":"linear-gradient(135deg,#A3E635 0%,#3F6212 100%)","glow":"#A3E635","levels":[
  {"id":1,"title":"Plains","intro":"Flat and fertile, plains have cradled civilisations for thousands of years.","questions":[
    {"type":"mcq","prompt":"Plains formed by rivers depositing sediments like rock, sand and silt are called ______.","options":["floodplains","lava plains","desert plains","glacial plains"],"answer":"floodplains","explanation":"These sediments make the soil extremely fertile."},
    {"type":"mcq","prompt":"Why are floodplains generally very fertile and ideal for growing crops?","options":["Rivers deposit nutrient-rich sediments there","They receive no rainfall at all","They are the highest landform","They have rocky, infertile soil"],"answer":"Rivers deposit nutrient-rich sediments there","explanation":"This is why agriculture thrives in river plains around the world."},
    {"type":"mcq","prompt":"About how many people live in India's Ganga (Gangetic) plain, more than one-fourth of India's total population?","options":["About 40 crore","About 4 crore","About 400 crore","About 4 lakh"],"answer":"About 40 crore","explanation":"This makes it one of the most densely populated regions on Earth."},
    {"type":"truefalse","prompt":"Because plains have a gentle slope, river navigation is easy and has supported trade and travel for centuries.","options":["True","False"],"answer":"True","explanation":"Even today, boats are used along stretches of the Ganga."}
  ]},
  {"id":2,"title":"Deserts","intro":"Dry, harsh, and yet home to rich cultures and unique life.","questions":[
    {"type":"mcq","prompt":"Large and dry expanses of land with very little precipitation are called ______.","options":["deserts","plateaus","plains","valleys"],"answer":"deserts","explanation":"Deserts can be hot or cold, but all share very low rainfall."},
    {"type":"mcq","prompt":"Which desert, in the northwest of the Indian Subcontinent, is a hot desert?","options":["The Thar Desert","The Gobi Desert","The Sahara Desert","The Atacama Desert"],"answer":"The Thar Desert","explanation":"Communities there hold rich cultural traditions, including folk songs and legends about the desert."},
    {"type":"mcq","prompt":"The Gobi Desert, found in Asia, is an example of a ______ desert.","options":["cold","hot","underwater","forest"],"answer":"cold","explanation":"Not all deserts are hot — some, like the Gobi, are cold."}
  ]},
  {"id":3,"title":"The Five Tinais","intro":"Ancient Tamil poetry mapped landscapes to human life in a beautifully precise way.","questions":[
    {"type":"mcq","prompt":"In ancient Tamil Sangam poetry, the five tinais associate different landscapes with specific human occupations. Which tinai corresponds to mountainous regions?","options":["Kurinji","Mullai","Marudam","Neydal"],"answer":"Kurinji","explanation":"This landscape is associated with hunting and gathering."},
    {"type":"mcq","prompt":"According to the five tinais, which landscape is associated with fishing and seafaring?","options":["Neydal (coastal regions)","Kurinji (mountains)","Mullai (grassland/forests)","Palai (arid regions)"],"answer":"Neydal (coastal regions)","explanation":"Each tinai reflects a deep connection between geography and daily life."},
    {"type":"mcq","prompt":"Which tinai is associated with fertile agricultural plains and farming?","options":["Marudam","Mullai","Palai","Kurinji"],"answer":"Marudam","explanation":"This landscape supported the main occupation of farming."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Land","intro":"The final challenge! The Landform Keeper tests everything you've learned about Earth's varied terrain.","isBoss":true,"bossName":"Landform Keeper","questions":[
    {"type":"truefalse","prompt":"Thousands of years ago, the first civilisations developed around rivers in fertile plains.","options":["True","False"],"answer":"True","explanation":"Plains have always been attractive for settlement due to their fertility and flat terrain."},
    {"type":"mcq","prompt":"What is the overall lesson of this chapter about landforms and human life?","options":["Humans have adapted to live in all types of landforms, each with its own challenges and opportunities","Only plains can support human life","Mountains are impossible to live in","All landforms are exactly the same for human life"],"answer":"Humans have adapted to live in all types of landforms, each with its own challenges and opportunities","explanation":"From mountains to deserts, human adaptability and resilience shine through."},
    {"type":"mcq","prompt":"What does the diversity of landforms across India show about human culture?","options":["Landforms have deeply shaped India's diverse cultures, occupations and traditions","Landforms have no cultural impact","Only mountains have cultural significance","Culture is unrelated to geography"],"answer":"Landforms have deeply shaped India's diverse cultures, occupations and traditions","explanation":"From the five tinais to mountain pilgrimages, geography and culture are deeply intertwined."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.TZ_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.TZ_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['🧭','🗺️','⛰️','🌊','🏝️','🏞️'];

/* ============================== STATE ============================== */
const STORE_KEY = 'terra-quest-v1';
function defaultState(){ return {avatar:'🧭', name:'Cartographer', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldTz(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('tz', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedTz(i){
  const active = activeUnreviewedWorldTz();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewTz(i){
  const active = activeUnreviewedWorldTz();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewTz = ()=>{
  const active = activeUnreviewedWorldTz();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'tz',
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
  const mouth = sad ? `<path d="M42 70 Q 50 63, 58 70" stroke="#1b2a3a" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    : mood==='think' ? `<circle cx="50" cy="70" r="2" fill="#1b2a3a"/>`
    : `<path d="M42 68 Q 50 78, 58 68" stroke="#1b2a3a" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(56,189,248,0.55))">
    <defs>
      <radialGradient id="mCompass" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#E0F2FE"/><stop offset="60%" stop-color="#7DD3FC"/><stop offset="100%" stop-color="#0369A1"/>
      </radialGradient>
      <radialGradient id="mGlowTz" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#BAE6FD" stop-opacity="0.7"/><stop offset="100%" stop-color="#BAE6FD" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowTz)"/>
    <circle cx="50" cy="55" r="38" fill="url(#mCompass)"/>
    <path d="M50 25 L58 55 L50 85 L42 55 Z" fill="#DC2626" opacity="0.5"/>
    <ellipse cx="40" cy="55" rx="4" ry="${sad?2:5}" fill="#1b2a3a"/>
    <ellipse cx="60" cy="55" rx="4" ry="${sad?2:5}" fill="#1b2a3a"/>
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
if(window.__tzHashListener) window.removeEventListener('hashchange', window.__tzHashListener);
window.__tzHashListener = function(){ if(!location.hash.startsWith('#/tz')) return; render(); };
window.addEventListener('hashchange', window.__tzHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/tz\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='🧭';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">The world awaits</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Chart the <span class="text-gradient-aurora">Earth itself.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From reading maps to crossing time zones, from the five oceans to the highest mountains — six worlds explore our planet's geography.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Start exploring →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Cartographer</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Cartographer" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter Terra Quest →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Cartographer', avatar); render(); };
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
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">World Explorer</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Dishari</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to chart the Earth?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedTz(i);
        const needsReview = worldNeedsReviewTz(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/tz/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewTz();return false;"` : '';
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
      <span>India and the World: Land and the People</span>
    </div>
  </main>`;
  window.__resetAll = resetSave;
}

/* ---------------- WORLD (level select) ---------------- */
function renderWorld(slug){
  const w = WORLDS.find(w=>w.slug===slug);
  if(!w){ nav('#/tz/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedTz(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/tz/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/tz/lesson/'+w.id+'/'+lv.id:'#'}">
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
  if(!w||!lv){ nav('#/tz/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedTz(wIdx)){ renderHome(); return; }
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
        <a href="#/tz/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/tz/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/tz/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/tz/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('tz', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['tz'] = { init: tzInit };
