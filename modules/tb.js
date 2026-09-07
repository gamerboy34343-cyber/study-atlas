function tbInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"himalayas","title":"The Mighty Himalayas","subtitle":"Formation · Ranges · The Cold Desert","emoji":"🏔️","gradient":"linear-gradient(135deg,#60A5FA 0%,#1E3A8A 100%)","glow":"#60A5FA","levels":[
  {"id":1,"title":"Land of Diversity","intro":"India stretches from icy mountains to sun-baked deserts. Let's take a bird's-eye view!","questions":[
    {"type":"mcq","prompt":"India is the ______ largest country in the world.","options":["seventh","third","tenth","fifth"],"answer":"seventh","explanation":"India is the seventh-largest country in the world, and a part of Asia."},
    {"type":"tap","prompt":"Tap all of India's neighbours that together form the 'Indian Subcontinent'.","options":["Pakistan","Bangladesh","Nepal","Bhutan","Sri Lanka","Myanmar","China","Iran"],"answer":["Pakistan","Bangladesh","Nepal","Bhutan","Sri Lanka","Myanmar"],"explanation":"Along with these six neighbours, India forms the region known as the Indian Subcontinent."},
    {"type":"mcq","prompt":"Which sea, along with the Thar Desert, marks India's western limit?","options":["Arabian Sea","Bay of Bengal","Indian Ocean","Pacific Ocean"],"answer":"Arabian Sea","explanation":"The Thar Desert and the Arabian Sea mark India's western limits."}
  ]},
  {"id":2,"title":"Birth of a Giant","intro":"How were the Himalayas born? It's a story of continents on the move!","questions":[
    {"type":"mcq","prompt":"India was once part of a much bigger landmass called ______, along with Africa.","options":["Gondwana","Pangaea","Laurasia","Eurasia"],"answer":"Gondwana","explanation":"India broke away from Gondwana and slowly moved north."},
    {"type":"truefalse","prompt":"India collided with the landmass of Eurasia about 50 million years ago, crumpling up the land to form the Himalayas.","options":["True","False"],"answer":"True","explanation":"As India pushed against Eurasia, the land between them crumpled and rose up — just like a carpet wrinkling."},
    {"type":"fill","prompt":"'Himalaya' comes from Sanskrit — hima meaning 'snow' and alaya meaning ______.","options":["abode","river","peak","valley"],"answer":"abode","explanation":"Himalaya literally means 'abode of snow'."}
  ]},
  {"id":3,"title":"Three Ranges","intro":"The Himalayas aren't just one wall of rock — they have three distinct ranges.","questions":[
    {"type":"mcq","prompt":"Which range is home to Mount Everest and Kanchenjunga, and stays snow-covered all year?","options":["The Himadri (Greater Himalayas)","The Himachal (Lower Himalayas)","The Shivalik Hills","The Aravallis"],"answer":"The Himadri (Greater Himalayas)","explanation":"The Himadri is the highest and most rugged part of the range."},
    {"type":"sort","prompt":"Sort each place or feature to its Himalayan range.","buckets":[{"id":"himadri","label":"Himadri","emoji":"🏔️"},{"id":"himachal","label":"Himachal","emoji":"⛰️"},{"id":"shivalik","label":"Shivalik","emoji":"🌲"}],"items":[{"label":"Shimla hill station","bucket":"himachal","emoji":"🏘️"},{"label":"Mount Everest","bucket":"himadri","emoji":"🗻"},{"label":"Dense foothill forests","bucket":"shivalik","emoji":"🌳"},{"label":"Darjeeling","bucket":"himachal","emoji":"🍵"}],"explanation":"Himadri = highest peaks; Himachal = hill stations; Shivalik = the lowest, outermost foothills."},
    {"type":"mcq","prompt":"The traditional 'kath-kuni' style of house-building in the western Himalayas combines stone with ______.","options":["wood","brick","glass","plastic"],"answer":"wood","explanation":"This combination keeps the house warm and resists earthquake damage."}
  ]},
  {"id":4,"title":"Ladakh — The Cold Desert","intro":"Not all deserts are hot! Ladakh proves it.","questions":[
    {"type":"mcq","prompt":"Ladakh is called a cold desert because winter temperatures can drop below ______.","options":["-30°C","0°C","-5°C","10°C"],"answer":"-30°C","explanation":"Ladakh has very little rainfall and a rugged, rocky landscape."},
    {"type":"mcq","prompt":"What is the name of the salty lake found in Ladakh's rugged terrain?","options":["Pangong Tso","Chilika Lake","Dal Lake","Wular Lake"],"answer":"Pangong Tso","explanation":"'Tso' means lake — Pangong Tso's saltiness comes from minerals dissolving from the surrounding mountains."},
    {"type":"tap","prompt":"Tap all the ways yaks are important to people living in the Himalayas.","options":["Milk","Meat","Wool","Transport","Flying","Fishing"],"answer":["Milk","Meat","Wool","Transport"],"explanation":"Yaks are reared for their milk, meat, wool and dung, and are also used for transport."}
  ]},
  {"id":5,"title":"Boss: The Himalaya Test","intro":"The Frost Titan guards the highest peaks. Prove your knowledge!","isBoss":true,"bossName":"Frost Titan","questions":[
    {"type":"mcq","prompt":"The Himalayas stretch across six countries. Which of these is NOT one of them?","options":["Sri Lanka","Nepal","Bhutan","China"],"answer":"Sri Lanka","explanation":"The six countries are India, Nepal, Bhutan, China, Pakistan and Afghanistan."},
    {"type":"mcq","prompt":"The Himalayas are sometimes called the ______ of Asia because they feed major rivers with snowmelt.","options":["Water Tower","Green Wall","Sky Bridge","Sun Shield"],"answer":"Water Tower","explanation":"Rivers like the Ganga, Indus and Brahmaputra depend on Himalayan snowmelt."},
    {"type":"truefalse","prompt":"The Himalayas are still growing taller today, very slowly, as India keeps pushing into Asia.","options":["True","False"],"answer":"True","explanation":"India moves north about five centimetres a year, adding roughly five metres of height every millennium."},
    {"type":"mcq","prompt":"The Bhagirathi River, a major tributary of the Ganga, originates from Gaumukh, at the edge of which glacier?","options":["Gangotri Glacier","Siachen Glacier","Rongbuk Glacier","Baltoro Glacier"],"answer":"Gangotri Glacier","explanation":"Gaumukh means 'Cow's Mouth' and is a popular pilgrimage and trekking site."}
  ]}
]},
{"id":2,"slug":"plains","title":"Plains, Desert & Ancient Hills","subtitle":"Gangetic Plains · Thar Desert · The Aravallis","emoji":"🏜️","gradient":"linear-gradient(135deg,#FBBF24 0%,#B45309 100%)","glow":"#FBBF24","levels":[
  {"id":1,"title":"The Gangetic Plains","intro":"Fertile, flat, and full of life — the plains feed a nation.","questions":[
    {"type":"mcq","prompt":"Which three major river systems, fed by the Himalayas, nourish the Gangetic Plains?","options":["Ganga, Indus and Brahmaputra","Godavari, Krishna and Kaveri","Narmada, Tapti and Mahanadi","Chenab, Beas and Sutlej"],"answer":"Ganga, Indus and Brahmaputra","explanation":"These rivers and their tributaries enrich the soil with minerals, making the plains ideal for farming."},
    {"type":"truefalse","prompt":"A large proportion of India's population lives in the Gangetic Plains.","options":["True","False"],"answer":"True","explanation":"The fertile plains have long supported dense human settlement."},
    {"type":"mcq","prompt":"Why does the Brahmaputra river get bigger in summer instead of drying up?","options":["Melting Himalayan snow feeds it","It rains only in summer there","It is dammed in summer","It reverses direction"],"answer":"Melting Himalayan snow feeds it","explanation":"Summer snowmelt swells the river's flow."}
  ]},
  {"id":2,"title":"Thar — The Great Indian Desert","intro":"Golden dunes, rugged terrain, and clever ways to save every drop of water.","questions":[
    {"type":"mcq","prompt":"The Thar Desert spans which four Indian states?","options":["Rajasthan, Gujarat, Punjab and Haryana","Rajasthan, Maharashtra, Goa and Kerala","Punjab, Haryana, Delhi and UP","Gujarat, Maharashtra, MP and Karnataka"],"answer":"Rajasthan, Gujarat, Punjab and Haryana","explanation":"Most of the Thar lies within these four states."},
    {"type":"fill","prompt":"Rajasthan's traditional rainwater collection systems, often used for drinking water, are called taanka or ______.","options":["kunds","baolis","talaabs","johads"],"answer":"kunds","explanation":"These special systems store rainwater in a region where water is scarce."},
    {"type":"mcq","prompt":"Sand dunes in the Thar Desert can rise as high as ______.","options":["150 metres","15 metres","1500 metres","5 metres"],"answer":"150 metres","explanation":"Sand dunes form when shifting wind shapes the sand into hill-like formations."}
  ]},
  {"id":3,"title":"The Aravallis","intro":"Ancient, mineral-rich, and dotted with forts — the Aravallis have seen it all.","questions":[
    {"type":"mcq","prompt":"About how old are the Aravalli Hills, among the oldest mountains in the world?","options":["2.5 billion years","250 million years","25,000 years","2.5 million years"],"answer":"2.5 billion years","explanation":"The range has many peaks and ridges shaped over immense stretches of time."},
    {"type":"mcq","prompt":"Evidence from the ancient mines at Zawar in the Aravallis shows Indians were the first in the world to master extracting which metal, over eight centuries ago?","options":["Zinc","Gold","Iron","Aluminium"],"answer":"Zinc","explanation":"The Aravallis are rich in marble, granite, zinc and copper."},
    {"type":"tap","prompt":"Tap the historic forts located in the Aravalli Hills.","options":["Chittorgarh","Kumbhalgarh","Ranthambore","Red Fort","Gwalior Fort"],"answer":["Chittorgarh","Kumbhalgarh","Ranthambore"],"explanation":"These forts made excellent use of the hilly terrain as a natural defence."}
  ]},
  {"id":4,"title":"Boss: Desert Storm","intro":"The Sandstorm Djinn whips up the dunes! Show what you've learned.","isBoss":true,"bossName":"Sandstorm Djinn","questions":[
    {"type":"mcq","prompt":"The Aravallis act as a natural barrier that prevents the Thar Desert from expanding further in which direction?","options":["Eastward","Westward","Northward","Southward"],"answer":"Eastward","explanation":"This is one of the Aravallis' most important geographical functions."},
    {"type":"mcq","prompt":"The Aravallis' highest peak, over 1700 metres, is called ______.","options":["Mount Abu","Mount Everest","Kanchenjunga","Anamudi"],"answer":"Mount Abu","explanation":"Most Aravalli hills are between 300 and 900 metres, but Mount Abu towers above them."},
    {"type":"truefalse","prompt":"Women in the Thar Desert often need to travel long distances every day to fetch water.","options":["True","False"],"answer":"True","explanation":"Water is scarce, so traditional cleaning methods use sand instead, saving water for essentials."},
    {"type":"sort","prompt":"Sort each feature to its region.","buckets":[{"id":"plains","label":"Gangetic Plains","emoji":"🌾"},{"id":"thar","label":"Thar Desert","emoji":"🏜️"},{"id":"aravalli","label":"Aravallis","emoji":"⛰️"}],"items":[{"label":"Fertile farmland","bucket":"plains","emoji":"🌾"},{"label":"Golden sand dunes","bucket":"thar","emoji":"🏖️"},{"label":"Zawar zinc mines","bucket":"aravalli","emoji":"⛏️"},{"label":"Jaisalmer, the 'Golden City'","bucket":"thar","emoji":"🏯"}],"explanation":"Each region of northern India has its own distinct geography and resources."}
  ]}
]},
{"id":3,"slug":"plateau","title":"Plateau, Coasts & Islands","subtitle":"Deccan Plateau · Coastlines · Island Territories","emoji":"🏝️","gradient":"linear-gradient(135deg,#34D399 0%,#0369A1 100%)","glow":"#34D399","levels":[
  {"id":1,"title":"The Peninsular Plateau","intro":"Bordered by two great mountain ranges, this ancient triangular plateau is rich in minerals and forests.","questions":[
    {"type":"mcq","prompt":"The peninsular plateau is bordered by which two mountain ranges?","options":["The Western Ghats and Eastern Ghats","The Himadri and Himachal","The Aravallis and Vindhyas","The Shivaliks and Nilgiris"],"answer":"The Western Ghats and Eastern Ghats","explanation":"The Western Ghats run taller along the west coast; the Eastern Ghats are lower and broken."},
    {"type":"mcq","prompt":"What is the vast area of flat highlands between the Western and Eastern Ghats called?","options":["The Deccan Plateau","The Malwa Plateau","The Chotanagpur Plateau","The Karnataka Plateau"],"answer":"The Deccan Plateau","explanation":"Rivers like the Godavari, Krishna and Kaveri flow across it from west to east."},
    {"type":"tap","prompt":"Tap the tribal communities mentioned as living in the forests of the peninsular plateau.","options":["Santhal","Gond","Baiga","Bhil","Maratha","Rajput"],"answer":["Santhal","Gond","Baiga","Bhil"],"explanation":"These tribes have distinct languages, traditions and ways of life closely connected to Nature."}
  ]},
  {"id":2,"title":"India's Coastlines","intro":"Over 7500 km of beaches, cliffs, estuaries and deltas.","questions":[
    {"type":"mcq","prompt":"About how long is India's coastline?","options":["Over 7500 km","Over 1000 km","Over 25000 km","Over 3000 km"],"answer":"Over 7500 km","explanation":"India's coastline is dotted with beautiful beaches, rocky cliffs and lush forests."},
    {"type":"mcq","prompt":"The West Coast of India stretches from Gujarat to which state?","options":["Kerala","West Bengal","Odisha","Tamil Nadu"],"answer":"Kerala","explanation":"It passes through Maharashtra, Goa and Karnataka along the way."},
    {"type":"fill","prompt":"Deltas are landforms formed at the mouth of a river when it deposits ______ into a larger body of water.","options":["sediments","rocks","minerals","salt"],"answer":"sediments","explanation":"Over time, these sediments build up into a triangular or fan-shaped area."}
  ]},
  {"id":3,"title":"Islands of India","intro":"Coral reefs, volcanic peaks, and a chapter of India's freedom struggle.","questions":[
    {"type":"mcq","prompt":"Lakshadweep, made up of 36 coral islands, is located in which sea?","options":["Arabian Sea","Bay of Bengal","Indian Ocean","Pacific Ocean"],"answer":"Arabian Sea","explanation":"Lakshadweep lies close to the Malabar coast of Kerala."},
    {"type":"mcq","prompt":"Which is the only active volcano in India, found in the Andaman and Nicobar Islands?","options":["Barren Island","Narcondam Island","Havelock Island","Ross Island"],"answer":"Barren Island","explanation":"It sometimes erupts, sending smoke and lava into the sky."},
    {"type":"mcq","prompt":"During India's freedom struggle, many freedom fighters were imprisoned in a complex in the Andaman Islands called the ______.","options":["Cellular Jail","Red Fort Prison","Kala Pani Camp","Fort William"],"answer":"Cellular Jail","explanation":"It has been preserved to remind us of the sacrifices our forefathers made."}
  ]},
  {"id":4,"title":"Sundarbans & the Northeast","intro":"Mangrove forests, tigers, and the wettest, greenest hills in India.","questions":[
    {"type":"mcq","prompt":"The Sundarbans, a UNESCO Heritage Site, is home to which famous big cat?","options":["The Royal Bengal Tiger","The Snow Leopard","The Asiatic Lion","The Clouded Leopard"],"answer":"The Royal Bengal Tiger","explanation":"The Sundarbans is located in the delta of the Ganga, Brahmaputra and their tributaries."},
    {"type":"truefalse","prompt":"The Sundarbans delta is shared between India and Bangladesh.","options":["True","False"],"answer":"True","explanation":"About half of it is located in India, and the rest is in Bangladesh."},
    {"type":"mcq","prompt":"Which village in Meghalaya's East Khasi Hills is renowned as the 'cleanest village in Asia'?","options":["Mawlynnong","Cherrapunjee","Shillong","Tawang"],"answer":"Mawlynnong","explanation":"It is famous for bamboo dustbins and eco-friendly living practices."},
    {"type":"mcq","prompt":"What are the tree-root structures, woven over many years in the Northeast hills, called?","options":["Living root bridges","Hanging gardens","Rope bridges","Bamboo walkways"],"answer":"Living root bridges","explanation":"They showcase the craftsmanship of the tribes of the Northeast."}
  ]},
  {"id":5,"title":"Boss: Coastal Guardian","intro":"The Tide Wraith rules the shoreline! Answer to hold your ground.","isBoss":true,"bossName":"Tide Wraith","questions":[
    {"type":"mcq","prompt":"The Western Ghats, a UNESCO World Heritage Site, are also known in their northern portion as the ______ Hills.","options":["Sahyadri","Nilgiri","Cardamom","Palani"],"answer":"Sahyadri","explanation":"The Western Ghats have many rivers and rich biodiversity."},
    {"type":"mcq","prompt":"Which two rivers form the largest estuaries on India's West Coast?","options":["Narmada and Tapti","Godavari and Krishna","Ganga and Brahmaputra","Mahanadi and Kaveri"],"answer":"Narmada and Tapti","explanation":"The coastline here is shaped by alluvial deposits from short, swift rivers."},
    {"type":"mcq","prompt":"Chilika Lake and Pulicat Lake, found on India's East Coast, are examples of what kind of water body?","options":["Lagoons","Glaciers","Waterfalls","Deltas"],"answer":"Lagoons","explanation":"A lagoon is a body of water separated from larger bodies of water by a natural barrier."},
    {"type":"truefalse","prompt":"The Andaman and Nicobar Islands, like Lakshadweep, are entirely made of coral.","options":["True","False"],"answer":"False","explanation":"The Andaman and Nicobar Islands are volcanic islands, unlike the coral islands of Lakshadweep."}
  ]}
]},
{"id":4,"slug":"weather","title":"Weather Watchers","subtitle":"Elements of Weather · Instruments · Forecasting","emoji":"🌡️","gradient":"linear-gradient(135deg,#38BDF8 0%,#6366F1 100%)","glow":"#38BDF8","levels":[
  {"id":1,"title":"What is Weather?","intro":"Hot, cold, rainy, windy — weather is what we feel every single day.","questions":[
    {"type":"mcq","prompt":"Weather is defined as the state of the Earth's ______ at a particular time and place.","options":["atmosphere","ocean","soil","sky colour"],"answer":"atmosphere","explanation":"The atmosphere is the layer of gases — air — surrounding the Earth."},
    {"type":"mcq","prompt":"Which layer of the atmosphere, closest to Earth's surface, is where nearly all weather happens?","options":["The troposphere","The stratosphere","The ozone layer","The exosphere"],"answer":"The troposphere","explanation":"The troposphere extends 6 to 18 kilometres from the ground."},
    {"type":"tap","prompt":"Tap all the elements of weather described in the chapter.","options":["Temperature","Precipitation","Atmospheric pressure","Wind","Humidity","Population","Currency"],"answer":["Temperature","Precipitation","Atmospheric pressure","Wind","Humidity"],"explanation":"These five elements together define the weather at any place and time."}
  ]},
  {"id":2,"title":"Measuring Temperature & Rain","intro":"To compare weather across places, we need instruments that everyone can trust.","questions":[
    {"type":"mcq","prompt":"Which instrument measures rainfall, using a funnel and a measuring cylinder?","options":["Rain gauge","Barometer","Anemometer","Hygrometer"],"answer":"Rain gauge","explanation":"The depth of rainwater collected tells us how much rainfall an area received."},
    {"type":"mcq","prompt":"15 degrees Celsius is the same temperature as how many degrees Fahrenheit?","options":["59°F","15°F","32°F","100°F"],"answer":"59°F","explanation":"Celsius and Fahrenheit are two common temperature scales."},
    {"type":"fill","prompt":"The India Meteorological Department was set up in the year ______.","options":["1875","1947","1901","1800"],"answer":"1875","explanation":"Its motto, from the Manusmriti, means 'From the sun arises rain.'"}
  ]},
  {"id":3,"title":"Pressure, Wind & Humidity","intro":"Some weather elements are invisible — but instruments can still measure them precisely.","questions":[
    {"type":"mcq","prompt":"Which instrument is used to measure atmospheric pressure?","options":["Barometer","Thermometer","Rain gauge","Wind vane"],"answer":"Barometer","explanation":"Pressure is usually shown in millibars (mb); normal sea-level pressure is around 1013 mb."},
    {"type":"mcq","prompt":"The simplest instrument to measure wind speed, using rotating metal cups, is a(n) ______.","options":["Anemometer","Barometer","Hygrometer","Thermometer"],"answer":"Anemometer","explanation":"The stronger the wind, the faster the cups rotate."},
    {"type":"mcq","prompt":"Humidity refers to the amount of ______ present in the air.","options":["water vapour","dust","oxygen","carbon dioxide"],"answer":"water vapour","explanation":"Humidity is measured using an instrument called a hygrometer."}
  ]},
  {"id":4,"title":"Weather Stations & Forecasts","intro":"Bringing all the instruments together helps us track — and predict — the weather.","questions":[
    {"type":"mcq","prompt":"An Automated Weather Station (AWS) records weather data without needing what?","options":["Human intervention","Electricity","Satellites","The internet"],"answer":"Human intervention","explanation":"AWS units are widely used in agriculture, aviation and environmental monitoring."},
    {"type":"truefalse","prompt":"Weather predictions help fishermen know when it may be unsafe to venture out to sea.","options":["True","False"],"answer":"True","explanation":"Accurate forecasts also help governments mobilise resources before disasters."},
    {"type":"mcq","prompt":"An atmospheric pressure that has dropped dramatically, which can develop into a storm, is called a ______.","options":["depression (low-pressure system)","high-pressure ridge","anticyclone","monsoon trough"],"answer":"depression (low-pressure system)","explanation":"A pressure below 1000 mb indicates a depression."}
  ]},
  {"id":5,"title":"Boss: The Instrument Master","intro":"The Cloud Sentinel tests every gauge and gadget you know!","isBoss":true,"bossName":"Cloud Sentinel","questions":[
    {"type":"mcq","prompt":"Which instrument measures humidity?","options":["Hygrometer","Anemometer","Barometer","Rain gauge"],"answer":"Hygrometer","explanation":"Museums use hygrometers too, to keep exhibits from getting damp."},
    {"type":"mcq","prompt":"At high altitudes, like Khardung La in Ladakh (over 5600 m), what happens to atmospheric pressure?","options":["It becomes much lower","It becomes much higher","It stays the same","It becomes unmeasurable"],"answer":"It becomes much lower","explanation":"Lower pressure means less oxygen, which is why people feel breathless at altitude."},
    {"type":"mcq","prompt":"A wind vane's rotating arm points in the direction the wind blows — what is its tarmac version called, used by pilots?","options":["A wind sock","A weather balloon","A rain gauge","A cloud chart"],"answer":"A wind sock","explanation":"It shows pilots the wind direction during take-off and landing."},
    {"type":"truefalse","prompt":"The range of temperature is calculated as the maximum temperature minus the minimum temperature over a period of time.","options":["True","False"],"answer":"True","explanation":"This is one of the key statistics recorded by weather stations."}
  ]}
]},
{"id":5,"slug":"climates","title":"Climates & Monsoons","subtitle":"Climate Types · What Shapes Them · The Monsoon","emoji":"☔","gradient":"linear-gradient(135deg,#22D3EE 0%,#1E40AF 100%)","glow":"#22D3EE","levels":[
  {"id":1,"title":"Weather vs Climate vs Seasons","intro":"People mix these words up all the time — let's get them straight!","questions":[
    {"type":"mcq","prompt":"What is the key difference between weather and climate?","options":["Weather changes daily; climate is the long-term pattern over decades","Weather and climate mean exactly the same thing","Climate changes daily; weather is long-term","There is no difference"],"answer":"Weather changes daily; climate is the long-term pattern over decades","explanation":"Climate is the pattern of weather a region experiences over several decades at least."},
    {"type":"mcq","prompt":"Traditionally, into how many seasons or ritus is the year divided in many parts of India?","options":["Six","Four","Three","Twelve"],"answer":"Six","explanation":"Vasanta, grishma, varsha, harad, hemanta and hishir — each with its own rituals and festivals."},
    {"type":"truefalse","prompt":"Seasons occur as the Earth revolves around the Sun.","options":["True","False"],"answer":"True","explanation":"Each season lasts a few months and recurs every year."}
  ]},
  {"id":2,"title":"Types of Indian Climates","intro":"From alpine snow to tropical rain — India has almost every climate type!","questions":[
    {"type":"mcq","prompt":"The Himalayan region has which type of climate, with cold snowy winters and cool summers?","options":["Alpine","Tropical wet","Arid","Subtropical"],"answer":"Alpine","explanation":"'Alpine' comes from the Alps, a mountain range in Europe."},
    {"type":"mcq","prompt":"The Thar Desert has which type of climate, with extremely hot days, cool nights and very little rainfall?","options":["Arid","Alpine","Temperate","Tropical wet"],"answer":"Arid","explanation":"People there have developed unique ways to collect and save water."},
    {"type":"mcq","prompt":"The western coastal strip, favourable for growing rice and spices, has which type of climate?","options":["Tropical wet","Arid","Alpine","Subtropical"],"answer":"Tropical wet","explanation":"It receives heavy rainfall during the monsoon months."},
    {"type":"mcq","prompt":"The northern plains, where most of India's wheat is grown, have which type of climate?","options":["Subtropical","Tropical wet","Alpine","Semi-arid"],"answer":"Subtropical","explanation":"The subtropical climate here brings very hot summers and cold winters."}
  ]},
  {"id":3,"title":"What Shapes Climate","intro":"Latitude, altitude, the sea, wind, topography — five forces that sculpt a region's climate.","questions":[
    {"type":"mcq","prompt":"Places near the Equator are warmer than places near the poles mainly because of differences in ______.","options":["latitude (the angle of the sun's rays)","altitude","ocean currents only","wind speed only"],"answer":"latitude (the angle of the sun's rays)","explanation":"At the Equator, the sun's rays are nearly perpendicular and focused on a smaller area."},
    {"type":"mcq","prompt":"Why do hill stations like Shimla and Ooty have cooler temperatures than the plains below?","options":["Higher altitude means thinner, cooler air","They are closer to the sea","They receive less sunlight overall","They are near deserts"],"answer":"Higher altitude means thinner, cooler air","explanation":"As altitude increases, air density and temperature both decrease."},
    {"type":"mcq","prompt":"Why do coastal areas like Mumbai have milder temperatures than inland areas like Nagpur at a similar latitude?","options":["The sea moderates temperature by absorbing and losing heat slowly","Coastal areas get less sunlight","Coastal areas are always colder","Inland areas are closer to the Equator"],"answer":"The sea moderates temperature by absorbing and losing heat slowly","explanation":"Mumbai's temperature range is much smaller than Nagpur's as a result."},
    {"type":"mcq","prompt":"The Himalayas and Karakoram ranges protect the Indian subcontinent from cold winds coming from where?","options":["The cold deserts of Central Asia","The Arabian Sea","The Bay of Bengal","The Indian Ocean"],"answer":"The cold deserts of Central Asia","explanation":"This is an example of topography shaping climate."}
  ]},
  {"id":4,"title":"The Monsoon Story","intro":"Rivers fill, soil soaks, crops grow — the monsoon is the heartbeat of India.","questions":[
    {"type":"mcq","prompt":"The word 'monsoon' comes from the Arabic word mausim, meaning ______.","options":["season","rain","wind","cloud"],"answer":"season","explanation":"It refers to seasonal winds over the Indian Ocean and surrounding regions."},
    {"type":"mcq","prompt":"During the summer monsoon, winds blow from the ocean towards the hot land — from which direction?","options":["Southwest","Northeast","North","East only"],"answer":"Southwest","explanation":"This is why it is called the southwest monsoon."},
    {"type":"mcq","prompt":"Which place in Meghalaya receives the highest average annual rainfall in the world, about 11,000 mm?","options":["Mawsynram","Cherrapunjee","Shillong","Tawang"],"answer":"Mawsynram","explanation":"11,000 mm is the same as 11 metres of rainfall in a year!"},
    {"type":"truefalse","prompt":"The winter monsoon brings mostly dry winds from land to ocean, though part of it picks up moisture over the Bay of Bengal and brings some rain to east and south India.","options":["True","False"],"answer":"True","explanation":"This is called the winter or northeast monsoon."}
  ]},
  {"id":5,"title":"Boss: Monsoon Guardian","intro":"The Storm Herald commands the winds! Prove you understand the monsoon.","isBoss":true,"bossName":"Storm Herald","questions":[
    {"type":"mcq","prompt":"Which mountain range acts as a natural barrier during the summer monsoon, with its western slopes receiving far more rain than the Deccan Plateau to the east?","options":["The Western Ghats","The Eastern Ghats","The Aravallis","The Vindhyas"],"answer":"The Western Ghats","explanation":"The eastern side of the Ghats often receives interrupted, lighter rainfall."},
    {"type":"mcq","prompt":"By which month do the monsoon rains typically cover the entire Indian subcontinent?","options":["Mid-July","Early June","Late September","December"],"answer":"Mid-July","explanation":"The rains advance from the southern tip of India in early June, moving north over several weeks."},
    {"type":"mcq","prompt":"A climate localised in a small area — such as a concrete-heavy city trapping extra heat — is called a(n) ______.","options":["urban heat island","rain shadow","monsoon trough","alpine zone"],"answer":"urban heat island","explanation":"This is one example of a microclimate."},
    {"type":"tap","prompt":"Tap all the factors mentioned that determine a region's climate.","options":["Latitude","Altitude","Proximity to the sea","Winds","Topography","Population","Currency"],"answer":["Latitude","Altitude","Proximity to the sea","Winds","Topography"],"explanation":"Together, these five factors shape the climate of any region."}
  ]}
]},
{"id":6,"slug":"disasters","title":"Climate, Culture & Disasters","subtitle":"Festivals · Cyclones · Floods · Climate Change","emoji":"🌪️","gradient":"linear-gradient(135deg,#F87171 0%,#7C2D12 100%)","glow":"#F87171","levels":[
  {"id":1,"title":"Climate & Our Lives","intro":"Festivals, farming, food prices — climate touches everything.","questions":[
    {"type":"mcq","prompt":"The phrase 'monsoon failure' refers to what?","options":["Poor rainfall during the monsoon season, hurting agriculture","A cyclone hitting the coast","Too much rainfall causing floods","A drop in temperature"],"answer":"Poor rainfall during the monsoon season, hurting agriculture","explanation":"Monsoon failure can push food prices up and drive migration to cities."},
    {"type":"truefalse","prompt":"Climate has a direct impact on the economy, including agriculture and industrial activity.","options":["True","False"],"answer":"True","explanation":"Predictable weather and water availability matter for many industries too."},
    {"type":"mcq","prompt":"Which of these festivals is directly linked to the harvest and seasonal change, according to the chapter?","options":["Pongal","Diwali","Republic Day","Independence Day"],"answer":"Pongal","explanation":"India has many festivals connected to seasons and agricultural activity, like Pongal, Baisakhi and Onam."}
  ]},
  {"id":2,"title":"Cyclones & Floods","intro":"When pressure drops and rivers rise, disaster can follow — but preparation saves lives.","questions":[
    {"type":"mcq","prompt":"Cyclones form when atmospheric pressure near the sea becomes ______ than surrounding areas.","options":["much lower","much higher","exactly equal","unpredictable"],"answer":"much lower","explanation":"Air rushes in from surrounding areas, bringing moisture and forming clouds."},
    {"type":"mcq","prompt":"What is the cloudless centre of a cyclone called?","options":["The eye of the cyclone","The cyclone's core","The storm wall","The pressure dome"],"answer":"The eye of the cyclone","explanation":"Winds rotate inward towards this calm centre."},
    {"type":"mcq","prompt":"In the Himalayan regions, when a barrier of rock and ice holding a glacial lake suddenly breaks, it is called a ______.","options":["glacial burst","flash flood","monsoon trough","landslide"],"answer":"glacial burst","explanation":"Fast glacier melting or heavy rain can trigger a glacial burst."},
    {"type":"truefalse","prompt":"The 2013 Uttarakhand glacial burst near Kedarnath caused widespread destruction and loss of life.","options":["True","False"],"answer":"True","explanation":"About 6,000 people, many of them pilgrims, lost their lives in that disaster."}
  ]},
  {"id":3,"title":"Landslides & Forest Fires","intro":"Two more dangers of the hills — often made worse by human choices.","questions":[
    {"type":"mcq","prompt":"Landslides can be triggered by heavy rain, earthquakes, or ______.","options":["volcanic activity","cold waves","droughts","strong winds only"],"answer":"volcanic activity","explanation":"Landslides are common in hilly regions like Himachal Pradesh, Uttarakhand and the Western Ghats."},
    {"type":"tap","prompt":"Tap all the human activities mentioned that increase the chances of landslides.","options":["Cutting down forests","Unapproved construction","Blocking natural water flow","Planting trees","Reducing traffic"],"answer":["Cutting down forests","Unapproved construction","Blocking natural water flow"],"explanation":"These human activities disturb the natural stability of hillsides."},
    {"type":"mcq","prompt":"Forest fires are often fuelled by dry climatic conditions, droughts, high winds, and frequently by ______.","options":["human carelessness","heavy rainfall","cold waves","snowfall"],"answer":"human carelessness","explanation":"Forest fires harm wildlife, degrade ecosystems and displace communities."}
  ]},
  {"id":4,"title":"Climate Change","intro":"The planet is warming — and human activity is the main reason why.","questions":[
    {"type":"mcq","prompt":"Since the 19th century, climate change has been largely driven by which human activity?","options":["Burning of fossil fuels","Farming rice","Building temples","Fishing"],"answer":"Burning of fossil fuels","explanation":"Deforestation and harmful industrial practices add to the problem too."},
    {"type":"mcq","prompt":"The natural process where CO2 and other gases trap heat from the Sun, warming Earth enough to support life, is the ______.","options":["greenhouse effect","ozone layer","carbon cycle","water cycle"],"answer":"greenhouse effect","explanation":"Human activity has released far more of these gases than natural processes intended."},
    {"type":"mcq","prompt":"Steps taken to help slow down global warming and reduce its causes are called climate ______.","options":["mitigation","migration","monsoon","meteorology"],"answer":"mitigation","explanation":"Mitigation includes cutting emissions, planting trees and boosting renewable energy."},
    {"type":"tap","prompt":"Tap all the measures governments promote to mitigate climate change, as mentioned in the chapter.","options":["Cutting greenhouse gas emissions","Planting trees","Boosting renewable energy","Burning more coal","Improving energy efficiency"],"answer":["Cutting greenhouse gas emissions","Planting trees","Boosting renewable energy","Improving energy efficiency"],"explanation":"These measures often clash with a desire for fast economic growth — a real-world trade-off."}
  ]},
  {"id":5,"title":"Boss: Lord of Extreme Weather","intro":"The final challenge! Everything you've learned about India's climate comes together here.","isBoss":true,"bossName":"Lord of Extreme Weather","questions":[
    {"type":"mcq","prompt":"Which of these is NOT one of the four climate-related disasters discussed in this chapter?","options":["Earthquakes","Cyclones","Floods","Landslides"],"answer":"Earthquakes","explanation":"The chapter focuses on cyclones, floods, landslides and forest fires."},
    {"type":"mcq","prompt":"Which coast of India, in particular, witnesses several cyclones every year?","options":["The eastern coast","The western coast","The northern coast","The southern coast only"],"answer":"The eastern coast","explanation":"The IMD keeps track of these cyclones' formation and likely landing place."},
    {"type":"mcq","prompt":"Which organisation is specially trained to respond to natural and human-made disasters, with battalions at 12 locations in India?","options":["The National Disaster Response Force (NDRF)","The India Meteorological Department (IMD)","The Indian Army","The Coast Guard"],"answer":"The National Disaster Response Force (NDRF)","explanation":"The NDRF plays a key role in rescue and evacuation during disasters."},
    {"type":"mcq","prompt":"Understanding the relationship between climate change and disasters mainly helps us to do what?","options":["Prepare better and build resilience","Ignore the warnings","Stop all economic growth","Avoid using weather instruments"],"answer":"Prepare better and build resilience","explanation":"It also supports the case for more environment-friendly practices."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.TB_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.TB_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['🧭','🧑‍🌾','🧑‍🚀','🥷','🧙','🧗'];

/* ============================== STATE ============================== */
const STORE_KEY = 'terra-bharat-v1';
function defaultState(){ return {avatar:'🧭', name:'Explorer', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldTb(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('tb', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedTb(i){
  const active = activeUnreviewedWorldTb();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewTb(i){
  const active = activeUnreviewedWorldTb();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewTb = ()=>{
  const active = activeUnreviewedWorldTb();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'tb',
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
      <radialGradient id="mGlobe" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#DFF6FF"/><stop offset="60%" stop-color="#7CD4E4"/><stop offset="100%" stop-color="#1E7A9E"/>
      </radialGradient>
      <radialGradient id="mGlowT" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#B9E9F7" stop-opacity="0.7"/><stop offset="100%" stop-color="#B9E9F7" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowT)"/>
    <circle cx="50" cy="55" r="38" fill="url(#mGlobe)"/>
    <path d="M18 45 Q 50 35, 82 45" stroke="#1E7A9E" stroke-width="1.5" fill="none" opacity="0.5"/>
    <path d="M18 65 Q 50 75, 82 65" stroke="#1E7A9E" stroke-width="1.5" fill="none" opacity="0.5"/>
    <ellipse cx="40" cy="55" rx="4" ry="${sad?2:5}" fill="#1b2a3a"/>
    <ellipse cx="60" cy="55" rx="4" ry="${sad?2:5}" fill="#1b2a3a"/>
    <circle cx="41.5" cy="53.5" r="1.2" fill="white"/>
    <circle cx="61.5" cy="53.5" r="1.2" fill="white"/>
    ${mouth}
    <circle cx="34" cy="65" r="3" fill="#ffb37f" opacity="0.6"/>
    <circle cx="66" cy="65" r="3" fill="#ffb37f" opacity="0.6"/>
  </svg>`;
}

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
function nav(hash){ location.hash = hash; }
if(window.__tbHashListener) window.removeEventListener('hashchange', window.__tbHashListener);
window.__tbHashListener = function(){ if(!location.hash.startsWith('#/tb')) return; render(); };
window.addEventListener('hashchange', window.__tbHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/tb\/?/,'');
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
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">An expedition begins</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Chart the <span class="text-gradient-aurora">geography and climate</span> of Bharat.</h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From the Himalayas to the islands, from monsoon winds to cyclones — journey across six worlds to master India's land, weather and climate.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Begin the expedition →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Explorer</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Explorer" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter Terra Bharat →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Explorer', avatar); render(); };
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
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Terra Explorer</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Bhoomi</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to explore India's land and sky?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedTb(i);
        const needsReview = worldNeedsReviewTb(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/tb/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewTb();return false;"` : '';
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
  if(!w){ nav('#/tb/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedTb(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/tb/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/tb/lesson/'+w.id+'/'+lv.id:'#'}">
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
  if(!w||!lv){ nav('#/tb/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedTb(wIdx)){ renderHome(); return; }
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
        <a href="#/tb/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/tb/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/tb/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/tb/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('tb', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['tb'] = { init: tbInit };
