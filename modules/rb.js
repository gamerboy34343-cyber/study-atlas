function rbInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"timeline","title":"Measuring Time & Sources","subtitle":"BCE & CE · Centuries & Millenniums · Sources of History","emoji":"⏳","gradient":"linear-gradient(135deg,#FBBF24 0%,#92400E 100%)","glow":"#FBBF24","levels":[
  {"id":1,"title":"BCE, CE & Calendars","intro":"How do we count years before and after a fixed point in time?","questions":[
    {"type":"mcq","prompt":"In the Gregorian calendar, years counted forward from Jesus Christ's traditional birth year are marked CE, which stands for ______.","options":["Common Era","Christian Era","Calendar Era","Central Era"],"answer":"Common Era","explanation":"This term is now used worldwide instead of the older 'AD'."},
    {"type":"mcq","prompt":"Years counted backward from that same starting point are marked BCE, meaning ______.","options":["Before Common Era","British Common Era","Before Calendar Era","Basic Common Era"],"answer":"Before Common Era","explanation":"This replaced the older term 'BC'."},
    {"type":"mcq","prompt":"Because the Gregorian calendar has no 'year zero', to calculate years between a BCE date and a CE date, you should add them and then ______.","options":["subtract 1","add 1","multiply by 2","divide by 2"],"answer":"subtract 1","explanation":"The year 1 CE follows immediately after the year 1 BCE."},
    {"type":"mcq","prompt":"A panchanga, an Indian book of astronomical tables still widely used today, predicts events like ______.","options":["solar and lunar eclipses, sunrise and sunset times","stock market prices","sports match results","weather only in winter"],"answer":"solar and lunar eclipses, sunrise and sunset times","explanation":"It also gives festival dates and timings."}
  ]},
  {"id":2,"title":"Centuries & Millenniums","intro":"Beyond years, historians use bigger units of time to measure the past.","questions":[
    {"type":"mcq","prompt":"We are currently living in which century CE?","options":["The 21st century","The 20th century","The 19th century","The 22nd century"],"answer":"The 21st century","explanation":"This century runs from 2001 to 2100."},
    {"type":"mcq","prompt":"A period of 1,000 years is called a ______.","options":["millennium","century","decade","era"],"answer":"millennium","explanation":"We are currently in the 3rd millennium CE."},
    {"type":"mcq","prompt":"The 3rd century BCE would include which range of years?","options":["300 BCE to 201 BCE","200 BCE to 101 BCE","300 BCE to 400 BCE","1 BCE to 100 BCE"],"answer":"300 BCE to 201 BCE","explanation":"Centuries BCE are counted backward starting from 1 BCE."},
    {"type":"mcq","prompt":"A timeline is a useful tool because it helps us understand the ______ in which historical events occurred.","options":["order (sequence)","cost","language","population"],"answer":"order (sequence)","explanation":"Even without exact dates, a timeline shows what happened before or after other events."}
  ]},
  {"id":3,"title":"Sources of History","intro":"Historians piece together the past from many different kinds of clues.","questions":[
    {"type":"mcq","prompt":"Which experts study the remains of plants, animals and humans from millions of years ago in the form of fossils?","options":["Palaeontologists","Geologists","Anthropologists","Epigraphists"],"answer":"Palaeontologists","explanation":"Geologists, by contrast, study the physical features of the Earth."},
    {"type":"mcq","prompt":"Which experts study the past by digging up remains like tools, pots, beads and bones?","options":["Archaeologists","Palaeontologists","Geologists","Historians only"],"answer":"Archaeologists","explanation":"Their excavations often reveal details of daily life in ancient times."},
    {"type":"mcq","prompt":"Sources of history can broadly be grouped into archaeological, literary, artistic and ______ sources.","options":["oral","digital","mathematical","musical"],"answer":"oral","explanation":"Oral sources include folklore and stories passed down through generations."},
    {"type":"truefalse","prompt":"In recent decades, scientific studies of ancient climates and genetics have added new insights to our understanding of history.","options":["True","False"],"answer":"True","explanation":"These modern techniques supplement traditional historical sources."}
  ]},
  {"id":4,"title":"Boss: Keeper of the Timeline","intro":"The Chronos Sentinel challenges your understanding of history's building blocks!","isBoss":true,"bossName":"Chronos Sentinel","questions":[
    {"type":"mcq","prompt":"Who studies human societies and cultures from the oldest times to the present?","options":["Anthropologists","Geologists","Palaeontologists","Epigraphists"],"answer":"Anthropologists","explanation":"Epigraphists, meanwhile, specialise in studying ancient inscriptions."},
    {"type":"mcq","prompt":"If the Buddha was born around 560 BCE, and we are now in 2024 CE, about how many years ago was that?","options":["About 2,583 years ago","About 1,464 years ago","About 560 years ago","About 3,000 years ago"],"answer":"About 2,583 years ago","explanation":"This is calculated as 560 + 2024 - 1, accounting for the missing year zero."},
    {"type":"mcq","prompt":"Why might historians compare their work to solving a jigsaw puzzle?","options":["They piece together information from many sources, some of which may be missing or contradictory","They only use one single source for every event","History has no missing information","Puzzles have nothing to do with history"],"answer":"They piece together information from many sources, some of which may be missing or contradictory","explanation":"When sources disagree, historians must judge which to trust more."}
  ]}
]},
{"id":2,"slug":"earlyhumans","title":"The First Humans","subtitle":"Hunter-Gatherers · The First Crops · Villages to Towns","emoji":"🏕️","gradient":"linear-gradient(135deg,#84CC16 0%,#3F6212 100%)","glow":"#84CC16","levels":[
  {"id":1,"title":"Hunter-Gatherers","intro":"Long before farming, humans survived by hunting and gathering what nature provided.","questions":[
    {"type":"mcq","prompt":"Modern humans (Homo sapiens) have walked the planet for about how many years?","options":["300,000 years","30,000 years","3 million years","30 years"],"answer":"300,000 years","explanation":"This is still only a tiny fraction of the Earth's total history."},
    {"type":"mcq","prompt":"Early humans who relied on hunting animals and collecting edible plants for survival are called ______.","options":["hunter-gatherers","farmers","traders","chieftains"],"answer":"hunter-gatherers","explanation":"They lived in bands or groups to help each other survive."},
    {"type":"mcq","prompt":"Evidence of early human life, including scenes with animals or humans, can be found in ______ across hundreds of caves worldwide.","options":["rock paintings","written manuscripts","metal coins","clay tablets"],"answer":"rock paintings","explanation":"Some paintings show simple figures, while others depict detailed scenes."}
  ]},
  {"id":2,"title":"The First Crops","intro":"As the Ice Age ended, humans began to settle down and grow their own food.","questions":[
    {"type":"mcq","prompt":"A period when much of the Earth was covered with ice is called a(n) ______.","options":["Ice Age","Bronze Age","Stone Age","Iron Age"],"answer":"Ice Age","explanation":"The last Ice Age deeply shaped where and how early humans could live."},
    {"type":"mcq","prompt":"The last Ice Age lasted from over 100,000 years ago to around how many years ago?","options":["12,000 years ago","1,000 years ago","1 million years ago","500 years ago"],"answer":"12,000 years ago","explanation":"After this, living conditions improved and humans began settling down."},
    {"type":"mcq","prompt":"After the Ice Age, many human communities began settling down near rivers mainly because rivers provided water and ______.","options":["fertile soil","gold","stone tools","warm weather only"],"answer":"fertile soil","explanation":"This made growing crops much easier."}
  ]},
  {"id":3,"title":"From Villages to Towns","intro":"As farming communities grew, so did their social organisation and technology.","questions":[
    {"type":"mcq","prompt":"As communities grew, leaders responsible for the people's well-being were called ______.","options":["chieftains","kings only","priests only","farmers"],"answer":"chieftains","explanation":"Everyone in the community worked collectively toward shared welfare."},
    {"type":"mcq","prompt":"A small settlement or small village is called a ______.","options":["hamlet","metropolis","civilisation","empire"],"answer":"hamlet","explanation":"Over time, hamlets grew into sizeable villages, and some into towns."},
    {"type":"mcq","prompt":"Which new technology, alongside pottery, helped make durable tools, objects and ornaments in early village societies?","options":["The use of metal (copper, then iron)","Plastic","Paper","Glass"],"answer":"The use of metal (copper, then iron)","explanation":"These new technologies prepared the way for what we call civilisation."}
  ]},
  {"id":4,"title":"Boss: Dawn of Community","intro":"The Hearth Keeper tests your knowledge of humanity's earliest societies!","isBoss":true,"bossName":"Hearth Keeper","questions":[
    {"type":"mcq","prompt":"In early agricultural communities, how was land ownership generally organised?","options":["Collectively — lands were sowed and harvested together","Individually owned by each farmer","Owned entirely by the king","Not used for farming at all"],"answer":"Collectively — lands were sowed and harvested together","explanation":"There was no sense of individual land ownership at this early stage."},
    {"type":"mcq","prompt":"What kinds of ornaments did early humans learn to make and sometimes exchange with other groups?","options":["Stone or shell beads, and pendants made of animal teeth","Gold rings only","Diamond necklaces","Plastic bracelets"],"answer":"Stone or shell beads, and pendants made of animal teeth","explanation":"These early ornaments show the beginnings of trade and craft."},
    {"type":"truefalse","prompt":"As hamlets grew into villages and then towns, networks of communication and exchange were established among them.","options":["True","False"],"answer":"True","explanation":"This laid the foundation for the rise of civilisation."}
  ]}
]},
{"id":3,"slug":"naming","title":"Naming India","subtitle":"Sapta Sindhava · Bharatavarsha · Foreign Names","emoji":"🏷️","gradient":"linear-gradient(135deg,#F472B6 0%,#831843 100%)","glow":"#F472B6","levels":[
  {"id":1,"title":"Sapta Sindhava & Bharatavarsha","intro":"India has carried many names across its long history.","questions":[
    {"type":"mcq","prompt":"The Rig Veda, India's most ancient text, calls the northwest region of the Subcontinent 'Sapta Sindhava', meaning 'land of the ______'.","options":["seven rivers","seven mountains","seven cities","seven kings"],"answer":"seven rivers","explanation":"'Sindhava' comes from 'Sindhu', referring to the Indus River."},
    {"type":"mcq","prompt":"The Mahabharata term 'Bharatavarsha' means 'the country of the ______'.","options":["Bharatas","rivers","mountains","oceans"],"answer":"Bharatas","explanation":"'Bharata' first appears in the Rig Veda as the name of one of the main Vedic groups."},
    {"type":"mcq","prompt":"'Jambudvipa', another name used in the Mahabharata for the Subcontinent, means 'the island of the fruit of the ______ tree'.","options":["jamun","mango","banyan","neem"],"answer":"jamun","explanation":"The jamun tree, native to India, is also called the Malabar plum tree."}
  ]},
  {"id":2,"title":"Bharata & Ancient Definitions","intro":"Ancient texts across India described the country's boundaries in strikingly similar ways.","questions":[
    {"type":"mcq","prompt":"According to the Vishnu Purana, 'Bharata' is the country that lies north of the ocean and south of the ______.","options":["snowy mountains","desert","rivers","forests"],"answer":"snowy mountains","explanation":"This refers to the Himalayas."},
    {"type":"mcq","prompt":"An ancient Tamil poem, about 2,000 years old, describes a king's fame reaching from Cape Kumari in the south to the great mountain in the ______.","options":["north","east","west","centre"],"answer":"north","explanation":"This shows that ancient Tamil poets shared a similar geographical understanding of India."},
    {"type":"mcq","prompt":"The Indian Constitution begins with the phrase '______' right at the start.","options":["India, that is Bharat","We, the people of India","India, a sovereign nation","Bharat, land of rivers"],"answer":"India, that is Bharat","explanation":"This phrase honours both the modern and ancient names of the country."}
  ]},
  {"id":3,"title":"Foreign Names for India","intro":"Travellers, traders and invaders each gave India their own name.","questions":[
    {"type":"mcq","prompt":"The ancient Persians referred to India as 'Hind', 'Hidu' or 'Hindu' — adaptations of which original word?","options":["Sindhu","Bharata","Jambudvipa","Ganga"],"answer":"Sindhu","explanation":"This reflects their contact with the region of the Indus River."},
    {"type":"mcq","prompt":"The ancient Greeks named the region 'Indoi' or 'Indike', dropping the initial letter of 'Hindu' because ______.","options":["that letter did not exist in the Greek language","they never visited India","they preferred shorter words","it was a religious term"],"answer":"that letter did not exist in the Greek language","explanation":"This is how the name 'India' eventually emerged."},
    {"type":"mcq","prompt":"Which Chinese scholar travelled from China to India in the 7th century CE, collected Buddhist texts, and translated them into Chinese?","options":["Xuanzang","Ashoka","Kalidasa","Megasthenes"],"answer":"Xuanzang","explanation":"He spent 17 years travelling in India before returning to China."},
    {"type":"mcq","prompt":"The term 'Hindustan' was first used in a Persian inscription about how many years ago?","options":["1,800 years ago","500 years ago","5,000 years ago","200 years ago"],"answer":"1,800 years ago","explanation":"It later became the term used by most invaders to describe the Indian Subcontinent."}
  ]},
  {"id":4,"title":"Boss: Guardian of Names","intro":"The Nomenclature Sentinel puts your knowledge of India's many names to the test!","isBoss":true,"bossName":"Nomenclature Sentinel","questions":[
    {"type":"mcq","prompt":"In ancient Persian, the word 'Hindu' was originally ______.","options":["a purely geographical term, not a reference to the Hindu religion","only a religious term","a word for 'king'","a word meaning 'foreigner'"],"answer":"a purely geographical term, not a reference to the Hindu religion","explanation":"This distinction is important for understanding the word's original meaning."},
    {"type":"mcq","prompt":"Emperor Ashoka, around 250 BCE, used the term 'Jambudvipa' in his inscriptions to describe a region that included today's India as well as parts of ______.","options":["Afghanistan, Bangladesh and Pakistan","only South India","only the Himalayas","only Sri Lanka"],"answer":"Afghanistan, Bangladesh and Pakistan","explanation":"This shows how expansive the ancient concept of the Subcontinent was."},
    {"type":"mcq","prompt":"Why does India have so many different historical names?","options":["Because both its own inhabitants and foreign visitors gave it names across many centuries and languages","Because it changed its name every year","Because ancient India had no name at all","Because only one name has ever been used"],"answer":"Because both its own inhabitants and foreign visitors gave it names across many centuries and languages","explanation":"These names come from ancient texts, travellers' accounts and inscriptions."}
  ]}
]},
{"id":4,"slug":"harappa","title":"Harappan Civilisation","subtitle":"Planned Cities · The Great Bath · Trade & Decline","emoji":"🏛️","gradient":"linear-gradient(135deg,#A78BFA 0%,#4C1D95 100%)","glow":"#A78BFA","levels":[
  {"id":1,"title":"What Is a Civilisation?","intro":"India's first great urban society rose along the Indus and Sarasvati rivers.","questions":[
    {"type":"mcq","prompt":"According to the chapter, one key characteristic of a civilisation is urbanism, which includes town planning and ______.","options":["water management and drainage systems","only large armies","only religious temples","only trade with one country"],"answer":"water management and drainage systems","explanation":"A civilisation also needs government, crafts, trade, writing and productive agriculture."},
    {"type":"mcq","prompt":"The Indus, Harappan, or Indus-Sarasvati Civilisation is generally dated to roughly which period?","options":["About 2600 to 1900 BCE","About 600 to 200 BCE","About 5000 to 4000 BCE","About 1000 to 500 CE"],"answer":"About 2600 to 1900 BCE","explanation":"This makes it one of the oldest civilisations in the world."},
    {"type":"mcq","prompt":"Why are the people of this civilisation called 'Harappans'?","options":["Because Harappa, in Punjab (Pakistan), was the first city of this civilisation to be excavated, in 1921","Because they worshipped a god named Harappa","Because Harappa was their capital city only","Because it is a random name with no connection"],"answer":"Because Harappa, in Punjab (Pakistan), was the first city of this civilisation to be excavated, in 1921","explanation":"This discovery is also called the 'First Urbanisation' of India."}
  ]},
  {"id":2,"title":"Planned Cities","intro":"Wide streets, fortified walls, and a mysterious, elaborate bath.","questions":[
    {"type":"mcq","prompt":"Which two Harappan cities were the first to be discovered and excavated, both now in Pakistan?","options":["Harappa and Mohenjo-daro","Dholavira and Kalibangan","Lothal and Rakhigarhi","Ganweriwala and Banawali"],"answer":"Harappa and Mohenjo-daro","explanation":"Their discovery, about a century ago, initially led to the term 'Indus Valley civilisation'."},
    {"type":"mcq","prompt":"Harappan cities generally had two distinct parts — the 'upper town' where the elite lived, and the ______, where common people lived.","options":["lower town","royal palace","market district","temple district"],"answer":"lower town","explanation":"Most cities were also surrounded by fortifications."},
    {"type":"mcq","prompt":"Unlike most Harappan cities which had two zones, which city uniquely had three distinct zones?","options":["Dholavira","Mohenjo-daro","Harappa","Kalibangan"],"answer":"Dholavira","explanation":"Dholavira's building foundations were also uniquely made with stones."},
    {"type":"mcq","prompt":"What is the famous structure in Mohenjo-daro, waterproofed with natural bitumen, whose exact purpose is still debated by archaeologists?","options":["The Great Bath","The Great Stupa","The Iron Pillar","The Sanchi Gate"],"answer":"The Great Bath","explanation":"Since most houses in the city had individual bathrooms, it was probably not a public bath."}
  ]},
  {"id":3,"title":"Water, Trade & Daily Life","intro":"From rock-cut reservoirs to distant sea trade, the Harappans were remarkably resourceful.","questions":[
    {"type":"mcq","prompt":"At Dholavira, in the Rann of Kutch, Gujarat, archaeologists found large reservoirs, some cut directly into ______.","options":["rock","wood","sand","ice"],"answer":"rock","explanation":"At least six large reservoirs were built there for efficient water harvesting."},
    {"type":"mcq","prompt":"Harappans were the first in Eurasia to grow which crop, which they wove into clothes?","options":["Cotton","Wheat","Rice","Barley"],"answer":"Cotton","explanation":"They also grew cereals, pulses and a variety of vegetables."},
    {"type":"mcq","prompt":"The most favoured Harappan ornament, made from a reddish semiprecious stone found mostly in Gujarat, was made of ______ beads.","options":["carnelian","gold","diamond","pearl"],"answer":"carnelian","explanation":"Harappan craftspeople developed special techniques to drill and decorate these beads."},
    {"type":"mcq","prompt":"Lothal, in Gujarat, had a huge basin believed to be a ______, used to receive and send boats for trade.","options":["dockyard","reservoir only","granary","temple tank"],"answer":"dockyard","explanation":"This reflects the Harappans' active maritime trade."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Great Bath","intro":"The Citadel Warden challenges your mastery of Harappan civilisation!","isBoss":true,"bossName":"Citadel Warden","questions":[
    {"type":"mcq","prompt":"Harappan seals, made of steatite, generally depicted animal figures along with signs from an undeciphered ______.","options":["writing system","musical notation","mathematical system","calendar system"],"answer":"writing system","explanation":"These seals likely relate to trade activities, though their full meaning remains unknown."},
    {"type":"mcq","prompt":"What material did the Harappans create by combining copper with tin?","options":["Bronze","Steel","Brass","Iron"],"answer":"Bronze","explanation":"This harder metal was used to make tools, pots and figurines."},
    {"type":"mcq","prompt":"What evidence suggests the Harappan civilisation was relatively peaceful?","options":["No traces of warfare or invasion, and no significant army or weapons have been found","Many weapons were found in every home","Records describe constant warfare","Cities were built entirely underground for defence"],"answer":"No traces of warfare or invasion, and no significant army or weapons have been found","explanation":"This makes the Harappan civilisation notably different from many other ancient societies."},
    {"type":"mcq","prompt":"What are the two most agreed-upon factors behind the decline of the Harappan civilisation?","options":["Climatic change causing reduced rainfall, and the drying up of the Sarasvati River","A massive foreign invasion and a great fire","Overpopulation and a plague","Loss of a war against Mesopotamia"],"answer":"Climatic change causing reduced rainfall, and the drying up of the Sarasvati River","explanation":"These environmental changes made agriculture harder and forced cities to be abandoned."}
  ]}
]},
{"id":5,"slug":"vedas","title":"The Vedas & Vedic Thought","subtitle":"The Four Vedas · Vedic Society · Upanishads & Vedanta","emoji":"📿","gradient":"linear-gradient(135deg,#38BDF8 0%,#1E3A8A 100%)","glow":"#38BDF8","levels":[
  {"id":1,"title":"What Are the Vedas?","intro":"India's most ancient texts were memorised and chanted for thousands of years before ever being written.","questions":[
    {"type":"mcq","prompt":"The word 'Veda' comes from the Sanskrit 'vid', meaning ______.","options":["knowledge","fire","river","truth"],"answer":"knowledge","explanation":"This is also the root of the word 'vidya'."},
    {"type":"mcq","prompt":"How many Vedas are there in total?","options":["Four","Two","Six","Ten"],"answer":"Four","explanation":"They are the Rig Veda, Yajur Veda, Sama Veda and Atharva Veda."},
    {"type":"mcq","prompt":"The Vedic hymns were composed by rishis and rishikas and were transmitted ______ for many generations before being written down.","options":["orally","only through paintings","only through sculpture","through video recordings"],"answer":"orally","explanation":"This remarkable oral tradition preserved the texts with hardly any alterations."},
    {"type":"mcq","prompt":"In 2008, UNESCO recognised Vedic chanting as a masterpiece of which kind of heritage of humanity?","options":["Oral and intangible heritage","Written heritage only","Architectural heritage","Culinary heritage"],"answer":"Oral and intangible heritage","explanation":"This honour reflects the extraordinary precision of this oral transmission."}
  ]},
  {"id":2,"title":"Vedic Society","intro":"Clans, assemblies and a wide range of professions shaped early Vedic life.","questions":[
    {"type":"mcq","prompt":"Early Vedic society was organised into larger clan groups called ______.","options":["janas","varnas","sanghas","gurukulas"],"answer":"janas","explanation":"The Rig Veda alone lists over 30 such clans."},
    {"type":"mcq","prompt":"Which Vedic terms refer to a collective gathering or assembly?","options":["Sabha and samiti","Raja and rishi","Yajna and mantra","Karma and dharma"],"answer":"Sabha and samiti","explanation":"These give us a few clues about how early Vedic society was governed."},
    {"type":"mcq","prompt":"Which of these was NOT a profession mentioned in Vedic texts?","options":["Astronaut","Weaver","Potter","Priest"],"answer":"Astronaut","explanation":"Vedic texts mention many professions, including agriculturist, carpenter, healer and dancer."}
  ]},
  {"id":3,"title":"Upanishads, Vedanta & Yoga","intro":"New ideas grew out of Vedic thought — rebirth, karma, and the oneness of all existence.","questions":[
    {"type":"mcq","prompt":"The Upanishads introduced concepts such as rebirth and ______, referring to the results of our actions.","options":["karma","dharma","yajna","brahman"],"answer":"karma","explanation":"These ideas built upon and expanded earlier Vedic concepts."},
    {"type":"mcq","prompt":"According to Vedanta, the one divine essence underlying human life, nature and the universe is called ______.","options":["brahman","atman only","yajna","dharma"],"answer":"brahman","explanation":"This is not to be confused with the god Brahma."},
    {"type":"mcq","prompt":"The Upanishadic concept of atman refers to the ______.","options":["divine essence or Self within every being","name of a Vedic god","ritual fire offering","royal title"],"answer":"divine essence or Self within every being","explanation":"Atman is ultimately understood to be one with brahman."},
    {"type":"mcq","prompt":"Which school of thought, developed early in the 1st millennium BCE, focused on methods to realise brahman within one's own consciousness?","options":["Yoga","Buddhism","Jainism","Charvaka"],"answer":"Yoga","explanation":"Together with Vedanta, it became a foundation of what is called Hinduism today."}
  ]},
  {"id":4,"title":"Boss: Seeker's Trial","intro":"The Rishi's Riddle tests your understanding of the Vedas and Upanishads!","isBoss":true,"bossName":"Rishi's Riddle","questions":[
    {"type":"mcq","prompt":"The Vedic hymn 'ekam sat vipra bahudha vadanti' expresses the idea that ______.","options":["truth is one, though sages call it by many names","there are many separate truths","only one sage knows the truth","truth changes every day"],"answer":"truth is one, though sages call it by many names","explanation":"This reflects the Vedic view that different deities are manifestations of the same reality."},
    {"type":"mcq","prompt":"In the story of Shvetaketu, his father Uddalaka used the example of a banyan seed and different pots made from the same clay to explain ______.","options":["how brahman, though invisible, is present in everything","how to become a king","how to build a house","how to grow crops"],"answer":"how brahman, though invisible, is present in everything","explanation":"He concluded, 'You are That, Shvetaketu.'"},
    {"type":"mcq","prompt":"In the story of Nachiketa, the god Yama eventually reveals that the atman (self) is ______.","options":["immortal — neither born nor does it die","destroyed after death","visible to everyone","the same as the physical body"],"answer":"immortal — neither born nor does it die","explanation":"This profound knowledge is what Nachiketa sought from Yama, the god of death."}
  ]}
]},
{"id":6,"slug":"beliefs","title":"Buddhism, Jainism & Tribal Roots","subtitle":"The Buddha · Mahavira · Folk and Tribal Traditions","emoji":"🕉️","gradient":"linear-gradient(135deg,#F59E0B 0%,#78350F 100%)","glow":"#F59E0B","levels":[
  {"id":1,"title":"The Buddha's Path","intro":"A prince's encounter with suffering led to one of the world's great spiritual traditions.","questions":[
    {"type":"mcq","prompt":"Siddhartha Gautama, who later became the Buddha, was born as a prince in ______.","options":["Lumbini","Vaishali","Bodh Gaya","Sarnath"],"answer":"Lumbini","explanation":"He attained enlightenment later, at Bodh Gaya, in modern-day Bihar."},
    {"type":"mcq","prompt":"Siddhartha decided to leave his palace life after seeing an old man, a sick man, a dead body and ______.","options":["a peaceful ascetic","a rich merchant","a great warrior","a foreign traveller"],"answer":"a peaceful ascetic","explanation":"This encounter set him on his search for the root cause of suffering."},
    {"type":"mcq","prompt":"According to Buddhist teaching, what are the two root causes of human suffering?","options":["Ignorance (avidya) and attachment","Wealth and poverty","War and peace","Hunger and thirst"],"answer":"Ignorance (avidya) and attachment","explanation":"The Buddha conceived a method to remove these two causes."},
    {"type":"mcq","prompt":"The word 'ahimsa', central to Buddhist teaching, originally means ______.","options":["non-hurting or non-injuring","strength in battle","wealth and prosperity","spiritual leadership"],"answer":"non-hurting or non-injuring","explanation":"It is often translated simply as 'non-violence'."}
  ]},
  {"id":2,"title":"Mahavira & Jain Teachings","intro":"Around the same era, another prince renounced his royal life in search of higher wisdom.","questions":[
    {"type":"mcq","prompt":"Prince Vardhamana, who became known as 'Mahavira' or 'great hero', was born near the city of ______, in modern Bihar.","options":["Vaishali","Lumbini","Bodh Gaya","Sarnath"],"answer":"Vaishali","explanation":"After 12 years of ascetic discipline, he achieved supreme wisdom."},
    {"type":"mcq","prompt":"The word 'Jain' comes from 'jina', meaning 'conqueror' — referring to conquest over ______.","options":["ignorance and attachments","enemy territory","rival kingdoms","other religions"],"answer":"ignorance and attachments","explanation":"This is a spiritual, not military, kind of conquest."},
    {"type":"mcq","prompt":"The Jain principle of anekantavada means that truth ______.","options":["has many aspects and cannot be fully described by a single statement","is always simple and singular","does not exist","can only be known by kings"],"answer":"has many aspects and cannot be fully described by a single statement","explanation":"This principle encourages openness to multiple perspectives."},
    {"type":"mcq","prompt":"The Jain principle of aparigraha advises ______.","options":["non-possession and detachment from material things","accumulating as much wealth as possible","strict obedience to kings","avoiding all forms of work"],"answer":"non-possession and detachment from material things","explanation":"It encourages limiting oneself to what is truly necessary in life."}
  ]},
  {"id":3,"title":"Folk & Tribal Traditions","intro":"India's cultural roots also run deep through its many folk and tribal communities.","questions":[
    {"type":"mcq","prompt":"According to the 2011 figures mentioned in the chapter, India had how many tribes, with a population of about 104 million people?","options":["705 tribes","70 tribes","7,000 tribes","7 tribes"],"answer":"705 tribes","explanation":"This population is larger than that of Australia and the United Kingdom combined."},
    {"type":"mcq","prompt":"According to tradition, which deity worshipped at Puri, Odisha, was originally a tribal deity?","options":["Jagannath","Shiva","Ganesha","Surya"],"answer":"Jagannath","explanation":"This shows the deep interaction between tribal and mainstream traditions."},
    {"type":"mcq","prompt":"Several tribes of Arunachal Pradesh worship Donyipolo, a combined form of which two celestial bodies?","options":["The Sun and the Moon","The Sun and the Stars","The Moon and the Stars","Venus and Mars"],"answer":"The Sun and the Moon","explanation":"This deity later rose to the status of a supreme god."},
    {"type":"mcq","prompt":"For the Toda tribals of the Nilgiris, over thirty mountain peaks are considered ______.","options":["residences of a god or goddess, and are treated as sacred","dangerous and avoided entirely","sources of gold and minerals only","unrelated to their beliefs"],"answer":"residences of a god or goddess, and are treated as sacred","explanation":"The Todas even avoid pointing at these peaks with a finger, out of reverence."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Banyan Tree","intro":"The final challenge! The Trunk Keeper tests everything you know about India's cultural roots.","isBoss":true,"bossName":"Trunk Keeper","questions":[
    {"type":"mcq","prompt":"According to sociologist André Béteille, quoted in the chapter, how have tribal religions and Hinduism influenced each other?","options":["They have mutually influenced each other throughout history","Only tribal religions influenced Hinduism, never the reverse","Only Hinduism influenced tribal religions, never the reverse","They have had no contact or influence on each other"],"answer":"They have mutually influenced each other throughout history","explanation":"This mutual exchange has enriched both traditions."},
    {"type":"mcq","prompt":"What shared concepts did the Vedic, Buddhist and Jain schools of thought have in common, despite their differences?","options":["Dharma, karma, rebirth and the search for an end to suffering","A belief in exactly one god","A rejection of all forms of meditation","A shared political system"],"answer":"Dharma, karma, rebirth and the search for an end to suffering","explanation":"These shared concepts form the 'trunk' of India's cultural tree."},
    {"type":"mcq","prompt":"The banyan tree is used as a symbol for Indian civilisation in the chapter because ______.","options":["like the tree, Indian culture has deep roots, a common trunk, and many branches spreading in different directions","it is the only tree mentioned in the Vedas","it produces the most fruit of any Indian tree","it is unrelated to any of the schools of thought discussed"],"answer":"like the tree, Indian culture has deep roots, a common trunk, and many branches spreading in different directions","explanation":"Hinduism, Buddhism and Jainism all regard the banyan tree as sacred."},
    {"type":"mcq","prompt":"The Charvaka (or Lokayata) school of thought believed that ______.","options":["the material world is the only thing that exists, so there is no life after death","the Vedas are the ultimate source of truth","ahimsa is the highest value","only kings could achieve enlightenment"],"answer":"the material world is the only thing that exists, so there is no life after death","explanation":"This shows the wide diversity of belief systems in ancient India."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.RB_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.RB_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['📜','🕉️','🏛️','⏳','🌳','🙏'];

/* ============================== STATE ============================== */
const STORE_KEY = 'roots-bharat-v1';
function defaultState(){ return {avatar:'📜', name:'Seeker', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldRb(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('rb', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedRb(i){
  const active = activeUnreviewedWorldRb();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewRb(i){
  const active = activeUnreviewedWorldRb();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewRb = ()=>{
  const active = activeUnreviewedWorldRb();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'rb',
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
      <radialGradient id="mScroll" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#FEF3C7"/><stop offset="60%" stop-color="#FBBF24"/><stop offset="100%" stop-color="#92400E"/>
      </radialGradient>
      <radialGradient id="mGlowRb" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FDE68A" stop-opacity="0.7"/><stop offset="100%" stop-color="#FDE68A" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowRb)"/>
    <rect x="20" y="30" width="60" height="50" rx="8" fill="url(#mScroll)"/>
    <circle cx="20" cy="55" r="6" fill="#B45309"/>
    <circle cx="80" cy="55" r="6" fill="#B45309"/>
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
if(window.__rbHashListener) window.removeEventListener('hashchange', window.__rbHashListener);
window.__rbHashListener = function(){ if(!location.hash.startsWith('#/rb')) return; render(); };
window.addEventListener('hashchange', window.__rbHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/rb\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='📜';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">A tapestry begins</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Discover India's <span class="text-gradient-aurora">deepest roots.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From the first humans to the Harappan cities, from the Vedas to the Buddha and Mahavira — six worlds trace the origins of Indian civilisation.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Begin the journey →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Seeker</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Seeker" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter Roots of Bharat →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Seeker', avatar); render(); };
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
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Cultural Seeker</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Itihasa</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to trace India's ancient roots?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedRb(i);
        const needsReview = worldNeedsReviewRb(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/rb/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewRb();return false;"` : '';
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
      <span>Tapestry of the Past</span>
    </div>
  </main>`;
  window.__resetAll = resetSave;
}

/* ---------------- WORLD (level select) ---------------- */
function renderWorld(slug){
  const w = WORLDS.find(w=>w.slug===slug);
  if(!w){ nav('#/rb/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedRb(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/rb/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/rb/lesson/'+w.id+'/'+lv.id:'#'}">
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
  if(!w||!lv){ nav('#/rb/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedRb(wIdx)){ renderHome(); return; }
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
        <a href="#/rb/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/rb/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/rb/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/rb/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('rb', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['rb'] = { init: rbInit };
