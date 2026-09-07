function gaInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"shungas","title":"Shungas & Satavahanas","subtitle":"The Ashvamedha · Shunga Art · Trade by Sea","emoji":"🏹","gradient":"linear-gradient(135deg,#C084FC 0%,#581C87 100%)","glow":"#C084FC","levels":[
  {"id":1,"title":"Pushyamitra & the Ashvamedha","intro":"After the Mauryas fell, a new dynasty rose in the north.","questions":[
    {"type":"mcq","prompt":"Who assassinated the last Maurya emperor around 185 BCE and founded the Shunga dynasty?","options":["Pushyamitra Shunga","Chandragupta Maurya","Kharavela","Kanishka"],"answer":"Pushyamitra Shunga","explanation":"His new dynasty ruled over parts of north and central India."},
    {"type":"mcq","prompt":"What was the ashvamedha yajna, a Vedic ritual Pushyamitra performed to declare his power?","options":["A horse was let to wander freely, and any land it crossed unchallenged became part of the king's territory","A horse race between rival kings","A ritual sacrifice of cattle","A ceremony to crown a new capital city"],"answer":"A horse was let to wander freely, and any land it crossed unchallenged became part of the king's territory","explanation":"If any ruler stopped the horse, it led to a battle to determine supremacy."},
    {"type":"truefalse","prompt":"The period after the Maurya empire's breakup is sometimes called the 'Age of Reorganisation' because existing regions were reorganised into new, competing kingdoms.","options":["True","False"],"answer":"True","explanation":"The map of India changed significantly during this age."}
  ]},
  {"id":2,"title":"Sanskrit & Shunga Art","intro":"Even amid political change, learning and art flourished.","questions":[
    {"type":"mcq","prompt":"During the Shunga period, who compiled the Yoga Sutras, still studied today?","options":["Patanjali","Panini","Kautilya","Aryabhata"],"answer":"Patanjali","explanation":"Sanskrit emerged as a preferred language for philosophical and literary works in this era."},
    {"type":"mcq","prompt":"The Bharhut Stupa, with its beautifully carved railings depicting stories from the Buddha's life, is a fine example of ______ art.","options":["Shunga","Gupta","Kushana","Mauryan"],"answer":"Shunga","explanation":"These are considered some of the earliest examples of Buddhist art."},
    {"type":"mcq","prompt":"Which language emerged as a preferred language for philosophical and literary works during this age?","options":["Sanskrit","Latin","Greek","Tamil"],"answer":"Sanskrit","explanation":"This trend continued and grew even stronger in later centuries."}
  ]},
  {"id":3,"title":"The Satavahana Traders","intro":"South of the Shungas, a powerful trading dynasty ruled the Deccan.","questions":[
    {"type":"mcq","prompt":"The Satavahanas, sometimes called 'Andhras', ruled large parts of which region from the 2nd century BCE onward?","options":["The Deccan","The Himalayas","The Thar Desert","The Northeast"],"answer":"The Deccan","explanation":"Their empire largely comprised present-day Andhra Pradesh, Telangana and Maharashtra."},
    {"type":"mcq","prompt":"In the Satavahana tradition, princes were often named after their ______.","options":["mothers","fathers only","gurus","capital cities"],"answer":"mothers","explanation":"Gautamiputra Satakarni, for example, was named after his mother, Gautami Balashri."},
    {"type":"mcq","prompt":"Numerals found in the Naneghat cave inscriptions near Pune provide some of the earliest evidence that modern numerals ultimately originated in ______.","options":["India","Greece","Rome","China"],"answer":"India","explanation":"Some of these ancient symbols resemble today's number shapes."},
    {"type":"truefalse","prompt":"Coins of the Satavahanas, depicting seafaring ships, suggest that maritime trade was an important part of their economic life.","options":["True","False"],"answer":"True","explanation":"Their trade networks reached as far as the Roman Empire."}
  ]},
  {"id":4,"title":"Boss: The Reorganiser's Trial","intro":"The Age Warden guards the memory of this era of shifting power!","isBoss":true,"bossName":"Age Warden","questions":[
    {"type":"mcq","prompt":"What was the most significant factor in the Satavahana Empire's disintegration in the 3rd century CE?","options":["Weak central control and gradual economic decline","A single catastrophic battle","A natural disaster","Loss of all trade routes"],"answer":"Weak central control and gradual economic decline","explanation":"This paved the way for regional powers to reassert their dominance."},
    {"type":"mcq","prompt":"What is remarkable about the widow queen mentioned in the Naneghat cave inscriptions?","options":["She performed Vedic rituals, including the ashvamedha yajna, and made generous donations","She built the Bharhut Stupa","She defeated Alexander","She wrote the Arthashastra"],"answer":"She performed Vedic rituals, including the ashvamedha yajna, and made generous donations","explanation":"Her donations included land, cows, horses, elephants and silver coins."},
    {"type":"mcq","prompt":"Satavahana kings often granted tax-free agricultural land to Vedic scholars, and Jaina and Buddhist ______.","options":["monks","soldiers","traders only","farmers only"],"answer":"monks","explanation":"This helped them pursue their studies and practices, even as the kings patronised other schools of thought too."}
  ]}
]},
{"id":2,"slug":"south","title":"Kingdoms of the South","subtitle":"Kharavela · The Sangam Age · Cholas, Cheras & Pandyas","emoji":"🌴","gradient":"linear-gradient(135deg,#34D399 0%,#065F46 100%)","glow":"#34D399","levels":[
  {"id":1,"title":"Kharavela & the Chedis","intro":"After Kalinga's terrible war with Ashoka, it rose again under a new dynasty.","questions":[
    {"type":"mcq","prompt":"Kharavela, a ruler of the Chedi dynasty who rose to power in Kalinga, was a devoted follower of ______ teachings.","options":["Jain","Buddhist","Vedic","Zoroastrian"],"answer":"Jain","explanation":"He was sometimes called bhikshu-raja, or 'monk-king', though he respected all schools of thought."},
    {"type":"mcq","prompt":"The Hathigumpha inscription, found near Bhubaneswar, records the accomplishments of which king?","options":["Kharavela","Pushyamitra Shunga","Karikala","Kanishka"],"answer":"Kharavela","explanation":"It describes his victorious military campaigns and benevolent works."},
    {"type":"mcq","prompt":"The Udayagiri-Khandagiri caves near Bhubaneswar are notable early examples of which style of architecture?","options":["Rock-cut architecture","Wooden architecture","Brick temple architecture","Glass architecture"],"answer":"Rock-cut architecture","explanation":"These caves were likely developed for Jain monks."}
  ]},
  {"id":2,"title":"The Sangam Age","intro":"South India's oldest literature captured an entire era in verse.","questions":[
    {"type":"mcq","prompt":"The collective body of ancient Tamil poetry from this era, the oldest literature in south India, is known as ______ literature.","options":["Sangam","Vedic","Puranic","Prakrit"],"answer":"Sangam","explanation":"It is much consulted by historians investigating the society and culture of the time."},
    {"type":"mcq","prompt":"The word 'sangam' comes from the Sanskrit 'sangha', meaning ______.","options":["association or coming together","kingdom","victory","temple"],"answer":"association or coming together","explanation":"It refers to an assembly of poets."},
    {"type":"mcq","prompt":"The Sangams refer to three 'crowned kings' — which three south Indian dynasties?","options":["The Cholas, Cheras and Pandyas","The Guptas, Mauryas and Shungas","The Kushanas, Shakas and Indo-Greeks","The Pallavas, Chalukyas and Cheras"],"answer":"The Cholas, Cheras and Pandyas","explanation":"These three powerful kingdoms often competed for control over the South."}
  ]},
  {"id":3,"title":"The Cholas","intro":"A water-diversion system built two millennia ago still irrigates Tamil Nadu today.","questions":[
    {"type":"mcq","prompt":"Which Chola king is said to have defeated a combined force of the Cheras and Pandyas to establish his supremacy?","options":["Karikala","Kharavela","Pushyamitra","Ashoka"],"answer":"Karikala","explanation":"He ruled parts of south India during the Sangam Age."},
    {"type":"mcq","prompt":"Karikala's Kallanai, or Grand Anicut, was a water diversion system that helped make the Kaveri delta known as the ______.","options":["rice bowl of the South","gateway to the Himalayas","cradle of civilisation","land of a thousand temples"],"answer":"rice bowl of the South","explanation":"It diverted water from the Kaveri to the central and southern parts of the delta."},
    {"type":"truefalse","prompt":"The Grand Anicut, restored several times over the centuries, is still in use today, supporting irrigation in Tamil Nadu.","options":["True","False"],"answer":"True","explanation":"It remains one of the oldest water-management structures still functioning in the world."}
  ]},
  {"id":4,"title":"Cheras, Pandyas & the Tale of the Anklet","intro":"Trade, pearls, and a famous epic of justice and loss.","questions":[
    {"type":"mcq","prompt":"The Cheras, also known as Keralaputra, ruled over which regions, with their capital at Vanji?","options":["Western Tamil Nadu and Kerala","Northern India","Eastern Odisha","Central Deccan"],"answer":"Western Tamil Nadu and Kerala","explanation":"They exported spices, timber, ivory and pearls to the Roman Empire and West Asia."},
    {"type":"mcq","prompt":"The Pandyas' capital, mentioned by Megasthenes as a prosperous kingdom involved in active trade, was at present-day ______.","options":["Madurai","Kanchipuram","Pataliputra","Ujjain"],"answer":"Madurai","explanation":"The Pandyas were also an important naval power of the subcontinent."},
    {"type":"mcq","prompt":"In the epic Silappadikaram, Kannagi proves her husband Kovalan's innocence of theft by revealing her second ______.","options":["anklet","ring","sword","letter"],"answer":"anklet","explanation":"He had been falsely accused and executed by the Pandya king before she could prove his innocence."}
  ]},
  {"id":5,"title":"Boss: Guardian of the Sangam","intro":"The Sangam Sentinel tests your knowledge of the ancient South!","isBoss":true,"bossName":"Sangam Sentinel","questions":[
    {"type":"mcq","prompt":"What were the main themes explored in Sangam poetry?","options":["Personal emotions like love, and societal values like heroism and generosity","Only religious hymns","Only war strategy","Only royal genealogies"],"answer":"Personal emotions like love, and societal values like heroism and generosity","explanation":"Sangam poetry expressed these themes with great skill and delicacy."},
    {"type":"mcq","prompt":"Which south Indian kingdom was famous for extensive trade connections with the Roman Empire, exporting spices, timber, ivory and pearls?","options":["The Cheras","The Guptas","The Shungas","The Kushanas"],"answer":"The Cheras","explanation":"Their kingdom became a hub for exports to the outside world."},
    {"type":"truefalse","prompt":"According to his edicts, Ashoka's empire never conquered the far south, where the Cholas, Cheras and Pandyas remained independent.","options":["True","False"],"answer":"True","explanation":"These southern kingdoms are mentioned in Ashoka's own edicts as being outside his rule."},
    {"type":"mcq","prompt":"In Silappadikaram, after Kovalan's unjust execution, Kannagi curses which city, invoking the god of fire?","options":["Madurai","Kanchipuram","Puhar","Vanji"],"answer":"Madurai","explanation":"The god of fire destroyed the city in response to her curse."}
  ]}
]},
{"id":3,"slug":"invaders","title":"Invaders Who Stayed","subtitle":"Indo-Greeks · Shakas · The Mighty Kushanas","emoji":"🐎","gradient":"linear-gradient(135deg,#60A5FA 0%,#1E3A8A 100%)","glow":"#60A5FA","levels":[
  {"id":1,"title":"The Indo-Greeks","intro":"Alexander's satraps never left India — their descendants built new kingdoms.","questions":[
    {"type":"mcq","prompt":"Regional rulers descended from Alexander's satraps, who established independent domains in the northwest, came to be known as ______.","options":["Indo-Greeks","Indo-Scythians","Kushanas","Huna"],"answer":"Indo-Greeks","explanation":"They arrived as conquerors but were much influenced by local Indian culture."},
    {"type":"mcq","prompt":"The Heliodorus pillar near Vidisha is named after an Indo-Greek ambassador who praised which deity as the 'god of gods' in his inscription?","options":["Vasudeva","Shiva","Buddha","Surya"],"answer":"Vasudeva","explanation":"This is a notable example of cultural blending between Greek and Indian traditions."},
    {"type":"truefalse","prompt":"Indo-Greek coins have provided most of the information historians have about these rulers, sometimes showing Indian deities instead of Greek ones.","options":["True","False"],"answer":"True","explanation":"Some coins depicted Vasudeva-Krishna or Lakshmi alongside Greek imagery."}
  ]},
  {"id":2,"title":"The Shakas","intro":"A new wave of invaders from the steppes left behind a calendar still used today.","questions":[
    {"type":"mcq","prompt":"The Shakas, sometimes called Indo-Scythians, ruled the northwest from the late 2nd century BCE to about which century CE?","options":["5th century","2nd century","10th century","1st century"],"answer":"5th century","explanation":"They came to power after the Indo-Greeks and ruled until the arrival of the Kushanas."},
    {"type":"mcq","prompt":"The Shaka Samvat calendar, developed during Shaka rule, was adopted as India's National Calendar in which year?","options":["1957","1947","1900","2000"],"answer":"1957","explanation":"It is still used today alongside the Gregorian calendar."},
    {"type":"mcq","prompt":"How many years behind the Gregorian calendar is the Shaka Samvat calendar, for most of the year?","options":["78 years","100 years","50 years","10 years"],"answer":"78 years","explanation":"From January to March, it is behind by 79 years instead."}
  ]},
  {"id":3,"title":"The Mighty Kushanas","intro":"Originally from Central Asia, the Kushanas built an empire that connected China to Rome.","questions":[
    {"type":"mcq","prompt":"Which Kushana emperor, whose headless statue survives, was titled 'the great king, king of kings, son of God'?","options":["Kanishka","Kharavela","Karikala","Samudragupta"],"answer":"Kanishka","explanation":"His statue's inscription reads 'maharaja rajadhiraja devaputra Kanishka'."},
    {"type":"mcq","prompt":"The Kushanas held control over significant sections of which major ancient trade route, connecting China to the Mediterranean?","options":["The Silk Route","The Spice Route","The Grand Trunk Road","The Amber Road"],"answer":"The Silk Route","explanation":"Trade grew substantially under their control of this route."},
    {"type":"tap","prompt":"Tap the two schools of art celebrated for fusing Indian and Greek/Greco-Roman styles during the Kushana period.","options":["Gandhara school","Mathura school","Chola school","Pallava school"],"answer":["Gandhara school","Mathura school"],"explanation":"Together, they left a lasting mark on Indian religious art."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Silk Route","intro":"The Silk Route Warden defends the crossroads of empires!","isBoss":true,"bossName":"Silk Route Warden","questions":[
    {"type":"mcq","prompt":"The Gandhara style of art, which blended Greco-Roman elements with Indian features, mainly used which material?","options":["Grey-black schist stone","Red sandstone","Bronze","Marble"],"answer":"Grey-black schist stone","explanation":"Sculptors produced many fine Buddha images with realistic anatomy in this style."},
    {"type":"mcq","prompt":"The Mathura style of art, known for its distinctly Indian character, primarily used which material?","options":["Red sandstone","Grey-black schist stone","Terracotta only","Gold"],"answer":"Red sandstone","explanation":"It depicted Indian deities like Kubera, Lakshmi, Shiva and Buddha."},
    {"type":"mcq","prompt":"Despite political conflicts, this era of foreign invasions saw remarkable cultural exchange, with a dominance of ______ themes in art and architecture.","options":["Indian (especially Hindu and Buddhist)","Persian","Roman","Egyptian"],"answer":"Indian (especially Hindu and Buddhist)","explanation":"It was also the age when major Sanskrit texts like the Mahabharata and Ramayana flourished."}
  ]}
]},
{"id":4,"slug":"guptas","title":"Rise of the Guptas","subtitle":"The Iron Pillar · Samudragupta · Faxian's Journey","emoji":"🏺","gradient":"linear-gradient(135deg,#FBBF24 0%,#92400E 100%)","glow":"#FBBF24","levels":[
  {"id":1,"title":"A New Power Emerges","intro":"As the Kushana Empire weakened, a new dynasty rose in the Gangetic plains.","questions":[
    {"type":"mcq","prompt":"By the 3rd century CE, which weakening empire set the stage for the rise of the Gupta dynasty?","options":["The Kushana Empire","The Maurya Empire","The Chola Empire","The Chera Empire"],"answer":"The Kushana Empire","explanation":"New kingdoms emerged as the Kushanas' control faded."},
    {"type":"mcq","prompt":"The Gupta Empire, with its capital at Pataliputra, flourished from roughly the 3rd to the ______ century CE.","options":["6th","2nd","10th","1st"],"answer":"6th","explanation":"This era is considered one of the high points of Indian history."},
    {"type":"mcq","prompt":"Which ally of the Guptas ruled the central part of the subcontinent from their capital Nandivardhana, near present-day Nagpur?","options":["The Vakatakas","The Pallavas","The Kamarupas","The Shakas"],"answer":"The Vakatakas","explanation":"They remained close allies and marriage partners of the Guptas."}
  ]},
  {"id":2,"title":"The Iron Pillar & Chandragupta II","intro":"1,600 years old and still standing without rust — a testament to ancient Indian metallurgy.","questions":[
    {"type":"mcq","prompt":"The famous Iron Pillar of Delhi, over 1,600 years old and still not rusted, was erected during the reign of which Gupta king?","options":["Chandragupta II","Chandragupta I","Samudragupta","Kanishka"],"answer":"Chandragupta II","explanation":"It was probably erected first near the Udayagiri caves before being moved to Delhi."},
    {"type":"mcq","prompt":"Chandragupta II, a devotee of Vishnu, was also known by which title?","options":["Vikramaditya","Devanampiya","Chakravartin","Rajadhiraja"],"answer":"Vikramaditya","explanation":"He was one of the most renowned rulers of the Gupta dynasty."},
    {"type":"mcq","prompt":"Scientists believe the Iron Pillar resists rust because of a special thin protective layer formed by the unique iron used and ______.","options":["oxygen from the air","a chemical coating applied later","constant polishing","being kept indoors"],"answer":"oxygen from the air","explanation":"This natural process has protected it from corrosion for over 1,600 years."}
  ]},
  {"id":3,"title":"Samudragupta, the Warrior King","intro":"Chandragupta II's father expanded the empire through relentless military campaigns.","questions":[
    {"type":"mcq","prompt":"The Prayaga Prashasti, a pillar inscription praising Samudragupta's achievements, was composed by his court poet ______.","options":["Harisena","Kalidasa","Aryabhata","Varahamihira"],"answer":"Harisena","explanation":"It also describes how Samudragupta supported art, learning and trade."},
    {"type":"mcq","prompt":"Samudragupta's ambition, as described in the inscription, was to 'unify the Earth' or ______.","options":["dharani-bandha","chakravartin","ashvamedha","saptanga"],"answer":"dharani-bandha","explanation":"He fought many wars to expand his empire, defeating and often reinstating kings as tributaries."},
    {"type":"mcq","prompt":"On one of his coins, Samudragupta is portrayed playing which musical instrument?","options":["The veena","The flute","The drum","The sitar"],"answer":"The veena","explanation":"This reflects his support for the arts alongside his military conquests."}
  ]},
  {"id":4,"title":"Faxian's Journey","intro":"A Chinese pilgrim's travelogue gives us a rare eyewitness view of Gupta society.","questions":[
    {"type":"mcq","prompt":"Which Chinese Buddhist traveller visited India in the early 5th century CE and left behind a detailed travelogue?","options":["Faxian","Megasthenes","Ptolemy","Marco Polo"],"answer":"Faxian","explanation":"He travelled to visit sacred Buddhist sites and collect manuscripts to take back to China."},
    {"type":"mcq","prompt":"According to Faxian's travelogue, wealthy Vaishya families in Gupta cities established houses for ______.","options":["charity and medicines","soldiers only","royal guests only","trade only"],"answer":"charity and medicines","explanation":"He described the poor, orphans and sick as being cared for in such institutions."},
    {"type":"truefalse","prompt":"Faxian's travelogue also describes the harsh treatment of the chandalas, who were regarded as outcastes living outside city limits.","options":["True","False"],"answer":"True","explanation":"This reminds us that even glowing accounts of a period reveal its inequalities too."}
  ]},
  {"id":5,"title":"Boss: Trial of the Warrior King","intro":"The Prashasti Keeper challenges you to prove your knowledge of the early Guptas!","isBoss":true,"bossName":"Prashasti Keeper","questions":[
    {"type":"mcq","prompt":"According to the Vishnu Purana, the Gupta dynasty's core regions included Prayaga, Saketa (Ayodhya) and ______.","options":["Magadha","Kalinga","Gandhara","Kerala"],"answer":"Magadha","explanation":"At its peak, though, the empire covered a much larger area than this."},
    {"type":"mcq","prompt":"What happened to many kings Samudragupta defeated in his military campaigns?","options":["Many were reinstated and made to pay tribute","All were executed","All were exiled forever","Nothing changed for them"],"answer":"Many were reinstated and made to pay tribute","explanation":"Others, fearing his might, submitted without protest."},
    {"type":"mcq","prompt":"Why should historians be cautious when using a single traveller's account, like Faxian's, as their only source?","options":["It reflects only the writer's perspective and a limited portion of society at one point in time","Travellers always lie","Only Faxian's account survives from this period","Foreign travellers were never allowed in India"],"answer":"It reflects only the writer's perspective and a limited portion of society at one point in time","explanation":"Historians look at multiple sources to corroborate their understanding."}
  ]}
]},
{"id":5,"slug":"classical","title":"The Classical Age","subtitle":"Governance · Trade · Aryabhata, Kalidasa & Ayurveda","emoji":"🔭","gradient":"linear-gradient(135deg,#38BDF8 0%,#6366F1 100%)","glow":"#38BDF8","levels":[
  {"id":1,"title":"Governance & New Titles","intro":"The Guptas ruled a vast empire through a careful mix of central authority and local trust.","questions":[
    {"type":"mcq","prompt":"Gupta rulers adopted grand titles like 'maharajadhiraja' and 'chakravartin', reflecting their claim to ______.","options":["supreme authority","local governance only","religious leadership only","trade dominance"],"answer":"supreme authority","explanation":"These titles emphasised their superiority over earlier rulers who used simpler titles."},
    {"type":"mcq","prompt":"The Gupta Empire's administration granted land to local rulers and priests, with the grants carefully inscribed on ______ plates for record-keeping.","options":["copper","gold","stone","palm-leaf"],"answer":"copper","explanation":"Many of these copper plates have been discovered by archaeologists."},
    {"type":"mcq","prompt":"Prabhavati Gupta, daughter of Chandragupta II, became regent ruler of which allied kingdom after her husband's early death?","options":["The Vakataka kingdom","The Pallava kingdom","The Kamarupa kingdom","The Chola kingdom"],"answer":"The Vakataka kingdom","explanation":"She ensured strong ties between the Vakatakas and the Guptas during her reign."}
  ]},
  {"id":2,"title":"Thriving Trade","intro":"From land taxes to distant sea routes, the Gupta economy connected the world.","questions":[
    {"type":"mcq","prompt":"What was the primary source of revenue for the Gupta Empire?","options":["Land tax","Gold mining","War plunder","Foreign aid"],"answer":"Land tax","explanation":"Other sources included fines and taxes on mines, irrigation, trade and crafts."},
    {"type":"mcq","prompt":"Which small but strategically located island in the Arabian Sea shows archaeological evidence of Indian traders during the Gupta era?","options":["Socotra Island","Lakshadweep","Andaman Island","Sri Lanka"],"answer":"Socotra Island","explanation":"It was a significant stop on the way to Mediterranean markets."},
    {"type":"tap","prompt":"Tap the goods India exported during the Gupta era, according to the chapter.","options":["Textiles","Spices","Ivory and gemstones","Petroleum","Automobiles"],"answer":["Textiles","Spices","Ivory and gemstones"],"explanation":"The Indian Ocean trade network connected Indian ports to distant markets in the Mediterranean world, Southeast Asia and China."}
  ]},
  {"id":3,"title":"Great Scholars — Aryabhata & Varahamihira","intro":"The Gupta era produced two of ancient India's greatest scientific minds.","questions":[
    {"type":"mcq","prompt":"Which Gupta-era mathematician and astronomer proposed that the Earth spins on its axis, explaining day and night?","options":["Aryabhata","Varahamihira","Kalidasa","Panini"],"answer":"Aryabhata","explanation":"He also gave formulas to calculate the motions of the Sun, Moon and planets."},
    {"type":"mcq","prompt":"Aryabhata's estimate of the length of a year was remarkably close to the modern value — off by just a few ______.","options":["minutes","years","centuries","days"],"answer":"minutes","explanation":"He calculated 365 days, 6 hours, 12 minutes and 30 seconds."},
    {"type":"mcq","prompt":"Varahamihira's encyclopedic work, the Brihat Samhita, covered subjects ranging from astronomy to weather forecasting and ______.","options":["architecture and farming","only poetry","only warfare","only religious rituals"],"answer":"architecture and farming","explanation":"He combined careful observation with logical reasoning and traditional knowledge."}
  ]},
  {"id":4,"title":"Kalidasa & Ayurveda","intro":"India's greatest Sanskrit poet, and a medical tradition still practised today.","questions":[
    {"type":"mcq","prompt":"Kalidasa's celebrated poem Meghadutam, or 'The Cloud Messenger', tells the story of a yaksha who sends a message to his beloved through a ______.","options":["passing cloud","royal messenger","flying bird","river current"],"answer":"passing cloud","explanation":"The poem also describes the landscapes and weather of north India in great detail."},
    {"type":"mcq","prompt":"Which traditional Indian system of medicine was codified during the Gupta period, in texts like the Charaka Samhita and Sushruta Samhita?","options":["Ayurveda","Homeopathy","Unani","Siddha"],"answer":"Ayurveda","explanation":"These texts covered diagnosis, treatment, diet and even surgical techniques."},
    {"type":"truefalse","prompt":"Ayurveda emphasises holistic healing and a deep connection between the mind, body and nature.","options":["True","False"],"answer":"True","explanation":"Ayurveda's roots go back several centuries BCE, but it was given its final shape during the Gupta era."}
  ]},
  {"id":5,"title":"Boss: The Scholar's Riddle","intro":"The Classical Sage tests everything you know about this golden age of learning!","isBoss":true,"bossName":"Classical Sage","questions":[
    {"type":"mcq","prompt":"Why is the Gupta period sometimes called the 'classical age' of Indian history?","options":["Because a prolonged period of peace and stability enabled remarkable achievements in art, science and literature","Because it was the shortest period in Indian history","Because no wars occurred at all","Because only one language was spoken"],"answer":"Because a prolonged period of peace and stability enabled remarkable achievements in art, science and literature","explanation":"Knowledge from previous eras was also consolidated into numerous texts during this time."},
    {"type":"mcq","prompt":"Chandragupta II surrounded himself with learned men, poets and artists — this practice is best described as ______.","options":["royal patronage of the arts and sciences","military strategy","tax collection","religious conversion"],"answer":"royal patronage of the arts and sciences","explanation":"His court's diverse talent enriched Gupta culture greatly."},
    {"type":"mcq","prompt":"Which of these was NOT a major achievement of the Gupta 'classical age'?","options":["The invention of gunpowder","Advances in mathematics and astronomy","Flourishing Sanskrit literature","Codification of Ayurvedic texts"],"answer":"The invention of gunpowder","explanation":"The classical age's real achievements spanned mathematics, astronomy, literature and medicine."}
  ]}
]},
{"id":6,"slug":"legacy2","title":"Gupta Art, Decline & Beyond","subtitle":"Ajanta & Sarnath · The Fall · Pallavas & Kamarupa","emoji":"🎨","gradient":"linear-gradient(135deg,#F472B6 0%,#831843 100%)","glow":"#F472B6","levels":[
  {"id":1,"title":"The Quest for Beauty","intro":"Gupta patronage produced some of the most iconic art in Indian history.","questions":[
    {"type":"mcq","prompt":"Which caves in present-day Maharashtra, carved with Gupta and Vakataka support, are renowned for exquisite paintings and sculptures?","options":["The Ajanta Caves","The Udayagiri Caves","The Karla Caves","The Barabar Caves"],"answer":"The Ajanta Caves","explanation":"They date from the 2nd century BCE to about 480 CE."},
    {"type":"mcq","prompt":"Sarnath, near Varanasi, became a key centre of Gupta art known especially for its exquisite sculptures of the ______.","options":["Buddha","Shiva","Vishnu","Kartikeya"],"answer":"Buddha","explanation":"Sarnath is where the Buddha gave his first teaching."},
    {"type":"truefalse","prompt":"'Gupta art' set high standards of aesthetics and beauty that left a lasting impact on Indian art.","options":["True","False"],"answer":"True","explanation":"Key centres included Sarnath, Ajanta and Udayagiri."}
  ]},
  {"id":2,"title":"The Decline of the Guptas","intro":"Even the classical age could not last forever.","questions":[
    {"type":"mcq","prompt":"By the 6th century CE, which fierce tribe from central Asia repeatedly attacked and weakened the Gupta Empire's control over north India?","options":["The Huna","The Shaka","The Kushana","The Indo-Greek"],"answer":"The Huna","explanation":"Their repeated attacks weakened Gupta authority over the north."},
    {"type":"truefalse","prompt":"Alongside external invasions, the rise of powerful regional rulers led to internal conflicts that weakened the Gupta Empire.","options":["True","False"],"answer":"True","explanation":"Both external pressure and internal fragmentation contributed to the empire's decline."},
    {"type":"mcq","prompt":"What ultimately happened to the Gupta Empire's control over north India by the 6th century CE?","options":["It began showing clear signs of decline","It expanded to its largest size ever","It became stronger than ever","It merged peacefully with the Hunas"],"answer":"It began showing clear signs of decline","explanation":"This marked the end of one of Indian history's great classical ages."}
  ]},
  {"id":3,"title":"The Pallavas","intro":"While the Guptas ruled the north, a new power was rising in the south.","questions":[
    {"type":"mcq","prompt":"The Pallavas, great patrons of art and architecture, rose to power in the south after the decline of which dynasty?","options":["The Satavahanas","The Mauryas","The Guptas","The Kushanas"],"answer":"The Satavahanas","explanation":"They gradually consolidated power in parts of present-day Tamil Nadu, Karnataka, Telangana and Andhra Pradesh."},
    {"type":"mcq","prompt":"Kanchipuram, the Pallava capital, is often known as the 'city of a thousand ______.'","options":["temples","markets","palaces","rivers"],"answer":"temples","explanation":"It also became a major centre of learning in the south."},
    {"type":"mcq","prompt":"Most Pallava rulers were devotees of which deity?","options":["Shiva","Vishnu","Surya","Brahma"],"answer":"Shiva","explanation":"They are credited with constructing magnificent temples and rock-cut caves."}
  ]},
  {"id":4,"title":"The Kamarupa Kingdom","intro":"In the northeast, another kingdom flourished as a centre of culture and learning.","questions":[
    {"type":"mcq","prompt":"The Kamarupa kingdom, ruled by the Varman dynasty, extended over which river valley in the northeast?","options":["The Brahmaputra valley","The Ganga valley","The Godavari valley","The Narmada valley"],"answer":"The Brahmaputra valley","explanation":"This broadly corresponds to present-day Assam."},
    {"type":"mcq","prompt":"The ancient name for the Brahmaputra valley of Assam, mentioned in the Ramayana and Mahabharata, is ______.","options":["Pragjyotisha","Magadha","Avanti","Kalinga"],"answer":"Pragjyotisha","explanation":"The Mahabharata mentions Bhagadatta, a king of this region, fighting for the Kauravas."},
    {"type":"truefalse","prompt":"During his southern and northeastern campaigns, Samudragupta often let defeated local kings keep their thrones as long as they paid tribute and accepted his rule.","options":["True","False"],"answer":"True","explanation":"This pattern helped maintain peaceful relations across a very large empire."}
  ]},
  {"id":5,"title":"Boss: Echoes of the Golden Age","intro":"The final challenge! The Golden Age Oracle awaits your mastery of this entire era.","isBoss":true,"bossName":"Golden Age Oracle","questions":[
    {"type":"mcq","prompt":"What is considered the most enduring legacy of the Gupta 'classical age' on Indian civilisation?","options":["Its lasting contributions to art, science, mathematics and Sanskrit literature","The complete disappearance of Sanskrit","The end of all trade in India","The abolition of coinage"],"answer":"Its lasting contributions to art, science, mathematics and Sanskrit literature","explanation":"This legacy continues to inspire India's culture and traditions today."},
    {"type":"mcq","prompt":"The period from the Shungas to the Guptas is best described as a time of political reorganisation alongside what?","options":["Remarkable cultural exchange and assimilation","Total isolation from the outside world","The complete disappearance of trade","A single unbroken empire"],"answer":"Remarkable cultural exchange and assimilation","explanation":"Kingdoms rose and fell, but art, ideas and trade kept connecting regions and peoples."},
    {"type":"mcq","prompt":"Both the Kushana and Gupta periods saw art dominated by which broad category of religious themes?","options":["Indian themes, especially Hindu and Buddhist","Only Greek mythology","Only Egyptian gods","Only Roman deities"],"answer":"Indian themes, especially Hindu and Buddhist","explanation":"Despite foreign influences, Indian themes remained dominant in art and architecture."},
    {"type":"mcq","prompt":"Why do historians study multiple sources — inscriptions, coins, travelogues and archaeology — together rather than relying on just one?","options":["Each source has its own limitations and perspective, so combining them gives a fuller picture","Only inscriptions are ever reliable","Coins never provide useful information","Travelogues are always completely accurate"],"answer":"Each source has its own limitations and perspective, so combining them gives a fuller picture","explanation":"This is a fundamental principle of how historians build reliable knowledge of the past."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.GA_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.GA_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['🎭','📿','🏺','🎨','🕉️','🪷'];

/* ============================== STATE ============================== */
const STORE_KEY = 'golden-age-v1';
function defaultState(){ return {avatar:'🎭', name:'Scholar', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldGa(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('ga', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedGa(i){
  const active = activeUnreviewedWorldGa();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewGa(i){
  const active = activeUnreviewedWorldGa();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewGa = ()=>{
  const active = activeUnreviewedWorldGa();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'ga',
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
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(192,132,252,0.55))">
    <defs>
      <radialGradient id="mLotus" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#FCE7F3"/><stop offset="60%" stop-color="#F0ABFC"/><stop offset="100%" stop-color="#A21CAF"/>
      </radialGradient>
      <radialGradient id="mGlowGa" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#F5D0FE" stop-opacity="0.7"/><stop offset="100%" stop-color="#F5D0FE" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowGa)"/>
    <path d="M50 15 C 30 25, 20 50, 50 90 C 80 50, 70 25, 50 15 Z" fill="url(#mLotus)"/>
    <path d="M50 25 C 38 38, 34 55, 50 78 C 66 55, 62 38, 50 25 Z" fill="#fff" opacity="0.25"/>
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
if(window.__gaHashListener) window.removeEventListener('hashchange', window.__gaHashListener);
window.__gaHashListener = function(){ if(!location.hash.startsWith('#/ga')) return; render(); };
window.addEventListener('hashchange', window.__gaHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/ga\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='🎭';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">A golden era beckons</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Explore India's <span class="text-gradient-aurora">classical age.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From the Shungas and Satavahanas to the Sangam kings, from Silk Route invaders to the dazzling Gupta classical age — six worlds of art, science and empire await.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Begin the journey →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Scholar</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Scholar" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter the Golden Age →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Scholar', avatar); render(); };
  draw();
}

/* ---------------- HOME (Adventure Map) ---------------- */
function renderHome(){
  const lv = levelNum(STATE.xp), frac = levelFrac(STATE.xp);
  const lessonsDone = Object.values(STATE.progress).filter(p=>p.stars>0).length;
  app.innerHTML = `${Nav()}<main>
    <div class="glass-strong rounded-3xl" style="padding:18px;display:flex;align-items:center;gap:16px">
      <div style="font-size:44px;width:60px;height:60px;border-radius:16px;background:#c084fc33;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px -6px #c084fc88">${STATE.avatar}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Golden Age Scholar</div>
        <div class="font-display" style="font-size:22px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${STATE.name}</div>
        <div class="progress-track" style="margin-top:6px;height:8px"><div class="progress-fill" style="width:${frac*100}%"></div></div>
      </div>
      <div style="text-align:right">
        <div class="pillbox" style="background:#c084fc33;border:1px solid #c084fc55">Lv ${lv}</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Saraswati</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to uncover India's golden age?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedGa(i);
        const needsReview = worldNeedsReviewGa(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/ga/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewGa();return false;"` : '';
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
  if(!w){ nav('#/ga/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedGa(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/ga/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/ga/lesson/'+w.id+'/'+lv.id:'#'}">
          <div class="lesson-icon" style="${lv.isBoss?'background:#f26d6d55;box-shadow:0 0 20px -4px #f26d6d':'background:linear-gradient(135deg,'+(w.gradient.match(/#\\w+/g)?.[0]||'#c084fc')+'55, transparent)'}">${lv.isBoss?'👹':lv.id}</div>
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
  if(!w||!lv){ nav('#/ga/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedGa(wIdx)){ renderHome(); return; }
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
        <a href="#/ga/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/ga/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/ga/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/ga/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('ga', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['ga'] = { init: gaInit };
