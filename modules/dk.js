function dkInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"urbanisation","title":"The Second Urbanisation","subtitle":"Janapadas · Mahajanapadas · Early Republics","emoji":"🏯","gradient":"linear-gradient(135deg,#F59E0B 0%,#7C2D12 100%)","glow":"#F59E0B","levels":[
  {"id":1,"title":"Cities Reborn","intro":"After the Harappan cities faded, India's urban story began again — this time in the Ganga plains.","questions":[
    {"type":"mcq","prompt":"What do historians call the wave of urbanisation in the Ganga plains during the 1st millennium BCE, since Harappan cities were India's first?","options":["The Second Urbanisation","The First Urbanisation","The Vedic Revolution","The Iron Age Boom"],"answer":"The Second Urbanisation","explanation":"This new phase has continued, in a sense, right up to today."},
    {"type":"mcq","prompt":"For about how long did urban life remain largely absent from India after the Harappan civilisation declined?","options":["About a thousand years","About a hundred years","About ten years","It never disappeared"],"answer":"About a thousand years","explanation":"All the components of the Harappan urban order had disappeared during this gap."},
    {"type":"tap","prompt":"Tap the sources historians use to learn about India's Second Urbanisation.","options":["Archaeological excavations","Ancient Vedic, Buddhist and Jain literature","Modern newspapers","Satellite photographs"],"answer":["Archaeological excavations","Ancient Vedic, Buddhist and Jain literature"],"explanation":"Both physical excavations and ancient texts confirm the existence of these urban centres."}
  ]},
  {"id":2,"title":"Janapadas & Mahajanapadas","intro":"Small clan territories grew into sixteen powerful states.","questions":[
    {"type":"mcq","prompt":"The Sanskrit word 'janapada' literally means 'where the people have ______.'","options":["set foot (settled down)","gone to war","built temples","grown crops"],"answer":"set foot (settled down)","explanation":"Jana means 'people' and pada means 'foot' — where people have settled."},
    {"type":"mcq","prompt":"By the 8th or 7th centuries BCE, many janapadas had merged into larger states known as ______, of which the most common list names sixteen.","options":["mahajanapadas","empires","republics","guilds"],"answer":"mahajanapadas","explanation":"They extended from Gandhara in the northwest to Anga in the east."},
    {"type":"mcq","prompt":"Most mahajanapada capitals were well-fortified cities, often surrounded outside their walls by a deep, water-filled ditch called a ______.","options":["moat","canal","aqueduct","reservoir"],"answer":"moat","explanation":"Gateways through the fortification walls were kept narrow to control movement."},
    {"type":"mcq","prompt":"Which region were most mahajanapadas concentrated in, likely due to fertile soil, nearby iron ore, and growing trade networks?","options":["The Ganga plains","The Thar Desert","The Deccan Plateau","The Himalayas"],"answer":"The Ganga plains","explanation":"Fertile land, iron and trade all favoured this region."}
  ]},
  {"id":3,"title":"Early Republics","intro":"Not every mahajanapada was ruled by a king alone — some let assemblies decide.","questions":[
    {"type":"mcq","prompt":"In each janapada, matters concerning the clan were discussed in an assembly called the ______.","options":["sabha or samiti","durbar","gana","varna"],"answer":"sabha or samiti","explanation":"These words first appear in the Vedas, India's most ancient texts."},
    {"type":"mcq","prompt":"Which two mahajanapadas were known for a more democratic system, where the assembly — not a hereditary king — took major decisions, even selecting the ruler?","options":["Vajji and Malla","Magadha and Kosala","Avanti and Vatsa","Kuru and Panchala"],"answer":"Vajji and Malla","explanation":"These were called gana-sanghas rather than monarchies."},
    {"type":"truefalse","prompt":"Scholars have sometimes called the gana-sangha mahajanapadas 'early republics', among the earliest such systems in world history.","options":["True","False"],"answer":"True","explanation":"Members of their assemblies selected the ruler and made major decisions, sometimes through voting."},
    {"type":"mcq","prompt":"In most other mahajanapadas, the position of the raja (ruler) was ______, usually passing from father to son.","options":["hereditary","elected","chosen by lottery","rotated yearly"],"answer":"hereditary","explanation":"A good ruler was still expected to take advice from ministers and assemblies of elders."}
  ]},
  {"id":4,"title":"Iron, Coins & Varna-Jati","intro":"New technologies and a new social order shaped daily life across the mahajanapadas.","questions":[
    {"type":"mcq","prompt":"The Second Urbanisation was powered by a major shift in metallurgy — the widespread use of ______ tools and weapons.","options":["iron","bronze","gold","tin"],"answer":"iron","explanation":"Iron ploughs boosted farming, and iron weapons were lighter and sharper than bronze."},
    {"type":"mcq","prompt":"India's first coins, made of silver with symbols hammered into them, are known as ______ coins.","options":["punch-marked","stamped","cast","woven"],"answer":"punch-marked","explanation":"Later, coins of copper, gold and other metals were also made."},
    {"type":"mcq","prompt":"In the varna-jati system, which varna was responsible for defending society and engaging in warfare when necessary?","options":["Kshatriyas","Brahmins","Vaishyas","Shudras"],"answer":"Kshatriyas","explanation":"Brahmins preserved knowledge, Vaishyas handled trade and agriculture, and Shudras were artisans and workers."},
    {"type":"fill","prompt":"A jati was a community of people who shared a specific ______, often passed down from generation to generation.","options":["professional occupation","royal title","language only","religion only"],"answer":"professional occupation","explanation":"Skills in agriculture, metallurgy, commerce or craft defined each jati."}
  ]},
  {"id":5,"title":"Boss: Guardian of the Ancient Cities","intro":"The Iron Age Sentinel guards the gates of the mahajanapadas!","isBoss":true,"bossName":"Iron Age Sentinel","questions":[
    {"type":"mcq","prompt":"The most powerful mahajanapadas mentioned in the chapter include Magadha, Kosala, Vatsa and ______.","options":["Avanti","Kalinga","Chola","Chera"],"answer":"Avanti","explanation":"These four were among the strongest of the sixteen mahajanapadas."},
    {"type":"mcq","prompt":"By around 300-200 BCE, what had happened to the mahajanapadas?","options":["They had ceased to exist, giving way to new developments","They had all become empires","They had all become republics","Nothing changed"],"answer":"They had ceased to exist, giving way to new developments","explanation":"Fresh political developments were about to reshape India."},
    {"type":"mcq","prompt":"The English word 'caste' comes from a Portuguese word used by 16th-century travellers trying to make sense of India's ______ system.","options":["varna-jati","empire","trade guild","language"],"answer":"varna-jati","explanation":"The Portuguese word was 'casta'."},
    {"type":"truefalse","prompt":"Historical evidence shows that in early periods, individuals and communities sometimes changed their professional occupation if circumstances demanded.","options":["True","False"],"answer":"True","explanation":"A drought could force farmers to migrate to cities and take up other work, for example."}
  ]}
]},
{"id":2,"slug":"empire","title":"Rise of an Empire","subtitle":"Trade Guilds · Magadha · The Nanda Dynasty","emoji":"👑","gradient":"linear-gradient(135deg,#FBBF24 0%,#92400E 100%)","glow":"#FBBF24","levels":[
  {"id":1,"title":"What Is an Empire?","intro":"A kingdom is one thing. An empire is something bigger, and more demanding to hold together.","questions":[
    {"type":"mcq","prompt":"The word 'empire' comes from the Latin 'imperium', meaning ______.","options":["supreme power","many kingdoms","great wealth","holy land"],"answer":"supreme power","explanation":"An empire is a collection of smaller kingdoms under one powerful ruler."},
    {"type":"mcq","prompt":"In ancient Sanskrit texts, a title used for an emperor meaning 'king of kings' was ______.","options":["rajadhiraja","janapada","jati","guild"],"answer":"rajadhiraja","explanation":"Other titles included samrat ('lord of all') and adhiraja ('overlord')."},
    {"type":"tap","prompt":"Tap the features of an empire mentioned in the chapter.","options":["Maintains an army","Designs an administration for tax collection","Encourages art and learning","Has no ruler at all","Controls access to resources"],"answer":["Maintains an army","Designs an administration for tax collection","Encourages art and learning","Controls access to resources"],"explanation":"An emperor exerts central authority over the empire's tributary territories and kings."}
  ]},
  {"id":2,"title":"Trade & Guilds","intro":"Behind every powerful empire was a flourishing, well-organised trade network.","questions":[
    {"type":"mcq","prompt":"Powerful associations of traders, craftsmen or moneylenders in ancient India were called ______.","options":["guilds (shrenis)","janapadas","varnas","satraps"],"answer":"guilds (shrenis)","explanation":"A guild usually had an elected head and executive officers."},
    {"type":"mcq","prompt":"The two major ancient trade routes mentioned were the Uttarapatha (connecting the northwest to the Ganga plains) and the ______.","options":["Dakshinapatha","Silk Route","Grand Trunk Road","Spice Route"],"answer":"Dakshinapatha","explanation":"The Dakshinapatha crossed the Vindhya Range and headed south."},
    {"type":"truefalse","prompt":"Guilds had the autonomy to create their own internal rules, and kings generally did not interfere with them.","options":["True","False"],"answer":"True","explanation":"An ancient text notes that cultivators, traders, herdsmen and artisans had authority to lay down rules for their own classes."}
  ]},
  {"id":3,"title":"The Rise of Magadha","intro":"Fertile land, iron and elephants — Magadha had everything it needed to dominate.","questions":[
    {"type":"mcq","prompt":"Magadha rose to dominance partly because it was located in the resource-rich Ganga plains with fertile land, forests and ______.","options":["elephants and iron ore","gold mines","coral reefs","desert oases"],"answer":"elephants and iron ore","explanation":"Iron ore from nearby hills strengthened both farming tools and weapons."},
    {"type":"mcq","prompt":"Which powerful early king of Magadha played a crucial role in establishing it as a dominant power?","options":["Ajatashatru","Chandragupta Maurya","Ashoka","Porus"],"answer":"Ajatashatru","explanation":"Ajatashatru's reign coincided with major religious developments too."},
    {"type":"truefalse","prompt":"The Buddha and Mahavira, two of the most famed religious teachers in the world, lived during the time of King Ajatashatru.","options":["True","False"],"answer":"True","explanation":"Their teachings shaped Indian thought for centuries to come."}
  ]},
  {"id":4,"title":"The Nanda Dynasty","intro":"Great wealth, then great unpopularity — the Nandas' story sets the stage for what comes next.","questions":[
    {"type":"mcq","prompt":"Around the 5th century BCE, who rose to prominence in Magadha and founded the Nanda dynasty?","options":["Mahapadma Nanda","Dhana Nanda","Chandragupta Maurya","Kautilya"],"answer":"Mahapadma Nanda","explanation":"He unified many smaller kingdoms and extended his empire across eastern and northern India."},
    {"type":"mcq","prompt":"The last Nanda emperor, Dhana Nanda, became highly unpopular because he ______.","options":["oppressed and exploited his people","gave away all his wealth","refused to collect taxes","never went to war"],"answer":"oppressed and exploited his people","explanation":"Though very rich, his unpopularity paved the way for his empire's downfall."},
    {"type":"mcq","prompt":"The famous Sanskrit grammarian Panini, who composed the Ashtadhyayi, lived around the time of the ______ dynasty.","options":["Nanda","Gupta","Maurya","Kushana"],"answer":"Nanda","explanation":"His Ashtadhyayi listed the rules of Sanskrit grammar in nearly 4,000 short sutras."}
  ]},
  {"id":5,"title":"Boss: The Unifier's Trial","intro":"The Empire Warden tests your knowledge of Magadha's rise!","isBoss":true,"bossName":"Empire Warden","questions":[
    {"type":"mcq","prompt":"What ultimately paved the way for the Nanda empire to be conquered and absorbed into the Maurya empire?","options":["Dhana Nanda's unpopularity due to oppressing his people","A foreign invasion","A natural disaster","A peace treaty"],"answer":"Dhana Nanda's unpopularity due to oppressing his people","explanation":"His harsh rule created the conditions for a new dynasty to rise."},
    {"type":"mcq","prompt":"Which river system provided Magadha with a major geographical advantage for trade and transportation?","options":["The Ganga and Son rivers","The Indus and Jhelum rivers","The Godavari and Krishna rivers","The Narmada and Tapti rivers"],"answer":"The Ganga and Son rivers","explanation":"These rivers boosted Magadha's income through trade."},
    {"type":"truefalse","prompt":"According to Greek accounts, the Nanda dynasty maintained a large army.","options":["True","False"],"answer":"True","explanation":"This showed the Nandas' considerable military and economic power."},
    {"type":"mcq","prompt":"What made Ajatashatru's era especially significant in the history of world religions?","options":["Two of the world's most famed religious figures, the Buddha and Mahavira, lived during his reign","He built the first temple in India","He invented Sanskrit","He founded Buddhism himself"],"answer":"Two of the world's most famed religious figures, the Buddha and Mahavira, lived during his reign","explanation":"Their teachings continue to influence India and the world today."}
  ]}
]},
{"id":3,"slug":"alexander","title":"Alexander's India","subtitle":"The Macedonian Campaign · Porus · Retreat","emoji":"⚔️","gradient":"linear-gradient(135deg,#94A3B8 0%,#1E293B 100%)","glow":"#94A3B8","levels":[
  {"id":1,"title":"The Conqueror from Macedonia","intro":"A young king from Greece set out to conquer the known world — and reached India's doorstep.","questions":[
    {"type":"mcq","prompt":"Alexander was a young and powerful king from which region?","options":["Macedonia","Persia","Rome","Egypt"],"answer":"Macedonia","explanation":"He campaigned from 334-331 BCE against the Persian Empire."},
    {"type":"mcq","prompt":"What was Alexander's original goal when he campaigned against the Persian Empire?","options":["To avenge earlier Persian invasions of Greece","To reach India directly","To find gold","To spread a new religion"],"answer":"To avenge earlier Persian invasions of Greece","explanation":"Some Indian soldiers from the Persian-ruled northwest had even fought against Greeks earlier."},
    {"type":"truefalse","prompt":"After conquering Persia, Alexander's empire spread over three continents, making it one of the largest in world history.","options":["True","False"],"answer":"True","explanation":"Greek culture's influence spread widely as a result."}
  ]},
  {"id":2,"title":"Battle with Porus","intro":"On the banks of the Jhelum, two powerful rulers faced off.","questions":[
    {"type":"mcq","prompt":"Which Indian king, ruler of the Pauravas, fought against Alexander in Punjab?","options":["Porus","Ajatashatru","Chandragupta","Ashoka"],"answer":"Porus","explanation":"Greek records describe fierce resistance during this campaign."},
    {"type":"mcq","prompt":"When Alexander asked Porus how he wished to be treated after being defeated, Porus famously replied, 'Like a ______.'","options":["King","Prisoner","Slave","Friend"],"answer":"King","explanation":"Alexander then left Porus at the head of his own kingdom, as a satrap."},
    {"type":"mcq","prompt":"Governors left behind by conquerors like Alexander to manage far-off territories were called ______.","options":["satraps","samrats","jatis","gurus"],"answer":"satraps","explanation":"These officials had significant power and freedom despite serving the overlord."}
  ]},
  {"id":3,"title":"Retreat & the Gymnosophists","intro":"Even the mightiest campaign has its limits — and its moments of wisdom.","questions":[
    {"type":"mcq","prompt":"Why did Alexander's soldiers refuse to move deeper into India, towards the Ganga River?","options":["They were tired and homesick","They ran out of gold","They were defeated in battle","They converted to a new religion"],"answer":"They were tired and homesick","explanation":"Alexander himself had also been seriously wounded in battle."},
    {"type":"mcq","prompt":"The Greeks called a group of renowned Indian sages 'Gymnosophists', meaning ______.","options":["naked philosophers","wise warriors","holy kings","desert wanderers"],"answer":"naked philosophers","explanation":"Alexander challenged them with tricky riddles and was impressed by their calm, wise answers."},
    {"type":"mcq","prompt":"When Alexander asked the Gymnosophists which was stronger, life or death, one sage replied that life was stronger because ______.","options":["it endures while death does not","death is more powerful","both are equal","neither is stronger"],"answer":"it endures while death does not","explanation":"Historians view this exchange as a meeting of Greek and Indian philosophical traditions."}
  ]},
  {"id":4,"title":"Boss: Shadow of the Conqueror","intro":"The Macedonian Phantom rises! Prove you understand how empires — even great ones — end.","isBoss":true,"bossName":"Macedonian Phantom","questions":[
    {"type":"mcq","prompt":"How did Alexander's retreat from India, through the coastal south and Iran's harsh deserts, affect his troops?","options":["It resulted in heavy losses from thirst, hunger and disease","It was smooth and easy","They gained new territory","They found a shortcut home"],"answer":"It resulted in heavy losses from thirst, hunger and disease","explanation":"The journey home proved as costly as the campaign itself."},
    {"type":"mcq","prompt":"What eventually happened to Alexander's vast empire after he died in Babylon at the age of 32?","options":["It was divided between his generals and satraps","It stayed united for centuries","It was inherited by his son","It became part of India"],"answer":"It was divided between his generals and satraps","explanation":"They created their own separate kingdoms after his death."},
    {"type":"truefalse","prompt":"Historians view Alexander's exchange with the Gymnosophists as a meeting of two great traditions — Greek and Indian philosophies.","options":["True","False"],"answer":"True","explanation":"Different versions of this story have been told over the centuries."}
  ]}
]},
{"id":4,"slug":"kautilya","title":"Chandragupta & Kautilya","subtitle":"Founding the Mauryas · The Arthashastra · The Saptanga","emoji":"🦚","gradient":"linear-gradient(135deg,#F87171 0%,#7C2D12 100%)","glow":"#F87171","levels":[
  {"id":1,"title":"Founding the Maurya Empire","intro":"From the ashes of the Nanda empire, a new dynasty rises.","questions":[
    {"type":"mcq","prompt":"Around 321 BCE, who founded the Maurya Empire after overthrowing the Nandas?","options":["Chandragupta Maurya","Ashoka","Kautilya","Samudragupta"],"answer":"Chandragupta Maurya","explanation":"His empire quickly absorbed the Nanda empire's territories."},
    {"type":"mcq","prompt":"What was the capital city of the Maurya Empire?","options":["Pataliputra","Taxila","Ujjain","Kanchipuram"],"answer":"Pataliputra","explanation":"Pataliputra is located around present-day Patna."},
    {"type":"mcq","prompt":"Chandragupta Maurya defeated which foreign-appointed governors left behind by Alexander in the northwest?","options":["The Greek satraps","The Persian kings","The Roman generals","The Chinese emperors"],"answer":"The Greek satraps","explanation":"He then integrated the region into his growing empire."}
  ]},
  {"id":2,"title":"Kautilya's Arthashastra","intro":"Behind every great emperor was an even greater strategist.","questions":[
    {"type":"mcq","prompt":"Which brilliant strategist, sometimes called Chanakya, mentored Chandragupta Maurya in founding his empire?","options":["Kautilya","Megasthenes","Panini","Ashoka"],"answer":"Kautilya","explanation":"Kautilya used his knowledge of politics, governance and economics to help build the empire."},
    {"type":"mcq","prompt":"Kautilya's famous work, the Arthashastra, literally means 'the science of ______.'","options":["governance and economics","warfare and weapons","poetry and drama","astronomy and mathematics"],"answer":"governance and economics","explanation":"It covered defence, administration, justice, urban planning and more."},
    {"type":"mcq","prompt":"Which Greek historian and diplomat lived in Chandragupta Maurya's court and wrote about his travels in a book called Indika?","options":["Megasthenes","Herodotus","Alexander","Porus"],"answer":"Megasthenes","explanation":"Sadly, the original book is lost except for excerpts quoted by later scholars."}
  ]},
  {"id":3,"title":"The Saptanga","intro":"Kautilya's blueprint for a stable kingdom had seven essential parts.","questions":[
    {"type":"mcq","prompt":"Kautilya's concept of the saptanga refers to the ______ parts that constitute a kingdom.","options":["seven","four","twelve","three"],"answer":"seven","explanation":"Saptanga literally means 'seven limbs'."},
    {"type":"tap","prompt":"Tap the elements that are part of Kautilya's saptanga (seven limbs of a kingdom).","options":["The king","Ministers and officials","The treasury","The territory and its people","Fortified towns","The national anthem"],"answer":["The king","Ministers and officials","The treasury","The territory and its people","Fortified towns"],"explanation":"The seventh limb is the kingdom's allies."},
    {"type":"mcq","prompt":"According to Kautilya, in whose happiness does the king's own happiness lie?","options":["His subjects' happiness","Only his own happiness","His ministers' happiness","His allies' happiness"],"answer":"His subjects' happiness","explanation":"Kautilya said a king must treat as beneficial whatever pleases his subjects."}
  ]},
  {"id":4,"title":"Boss: The Strategist's Challenge","intro":"The Arthashastra Oracle awaits — show your mastery of Kautilya's teachings!","isBoss":true,"bossName":"Arthashastra Oracle","questions":[
    {"type":"mcq","prompt":"According to Kautilya, a king should show special favour to people in the countryside who do things like building embankments or ______.","options":["road bridges and beautifying villages","collecting extra taxes","training soldiers only","building only palaces"],"answer":"road bridges and beautifying villages","explanation":"He believed a king's power came from the countryside, the source of economic activity."},
    {"type":"mcq","prompt":"Chandragupta Maurya's empire eventually stretched from the northern plains to the ______.","options":["Deccan plateau","Himalayas only","Thar Desert only","Bay of Bengal islands"],"answer":"Deccan plateau","explanation":"Magadha's advantages, combined with Kautilya's strategy, helped this expansion."},
    {"type":"truefalse","prompt":"Megasthenes' book Indika survives today only through excerpts quoted by later Greek scholars, as the original was lost.","options":["True","False"],"answer":"True","explanation":"It remains the first known written Greek account of travels in India."}
  ]}
]},
{"id":5,"slug":"ashoka","title":"Ashoka's Transformation","subtitle":"The Kalinga War · Edicts · Dharma","emoji":"🕊️","gradient":"linear-gradient(135deg,#38BDF8 0%,#1E3A8A 100%)","glow":"#38BDF8","levels":[
  {"id":1,"title":"A Warrior King's Ambition","intro":"Before he became known for peace, Ashoka was an ambitious conqueror.","questions":[
    {"type":"mcq","prompt":"Ashoka, who ruled from 268-232 BCE, was the grandson of which Maurya emperor?","options":["Chandragupta Maurya","Ajatashatru","Porus","Kanishka"],"answer":"Chandragupta Maurya","explanation":"Ashoka came to be credited with major administrative and religious achievements."},
    {"type":"mcq","prompt":"At the beginning of his reign, Ashoka expanded his empire to cover almost the entire Indian subcontinent except for ______.","options":["the southernmost region","the Himalayas","the northwest","the Ganga plains"],"answer":"the southernmost region","explanation":"His empire included present-day Bangladesh, Pakistan and parts of Afghanistan."},
    {"type":"truefalse","prompt":"Ashoka's empire included parts of present-day Bangladesh, Pakistan and Afghanistan.","options":["True","False"],"answer":"True","explanation":"It was one of the largest empires the Subcontinent had ever seen."}
  ]},
  {"id":2,"title":"The Kalinga War","intro":"One brutal battle changed the course of Ashoka's life — and Indian history.","questions":[
    {"type":"mcq","prompt":"Which region, modern-day Odisha, did Ashoka wage a ferocious war against, according to his edicts?","options":["Kalinga","Magadha","Avanti","Gandhara"],"answer":"Kalinga","explanation":"The war's aftermath would transform Ashoka's entire outlook."},
    {"type":"mcq","prompt":"What made Ashoka choose to give up violence after the Kalinga war?","options":["Seeing the enormous death and destruction on the battlefield","A dream he had","Advice from Kautilya","A defeat in battle"],"answer":"Seeing the enormous death and destruction on the battlefield","explanation":"He chose, to the greatest extent possible, the path of peace."},
    {"type":"mcq","prompt":"After the Kalinga war, Ashoka adopted the path of peace and non-violence taught by ______.","options":["the Buddha","Kautilya","Mahavira","Panini"],"answer":"the Buddha","explanation":"This marked a major turning point in his reign."}
  ]},
  {"id":3,"title":"Edicts & Dharma","intro":"Ashoka carved his message into rock and stone across the empire, for all to see.","questions":[
    {"type":"mcq","prompt":"Ashoka's official declarations, engraved on rocks and pillars across his empire, are called ______.","options":["edicts","saptangas","sutras","samhitas"],"answer":"edicts","explanation":"These edicts encouraged people to follow dharma."},
    {"type":"mcq","prompt":"Most of Ashoka's edicts were inscribed in the Prakrit language, written in which script — described as 'the mother of all regional scripts of India'?","options":["Brahmi","Devanagari","Greek","Latin"],"answer":"Brahmi","explanation":"Edicts have been found across many parts of the Subcontinent."},
    {"type":"mcq","prompt":"In his edicts, Ashoka called himself 'Devanampiya Piyadasi', meaning 'Beloved of the Gods' and one who ______.","options":["regards others with kindness","conquers all enemies","never makes mistakes","rules alone"],"answer":"regards others with kindness","explanation":"He wanted to be seen as a benevolent, compassionate ruler."},
    {"type":"fill","prompt":"Dharma, in its broadest sense, means duty, law, truth, order and ______ together.","options":["ethics","wealth","war","trade"],"answer":"ethics","explanation":"It also extends to living in harmony with the cosmic order."}
  ]},
  {"id":4,"title":"A Compassionate Ruler","intro":"Ashoka's edicts describe a king deeply concerned with his people's — and animals' — welfare.","questions":[
    {"type":"mcq","prompt":"Ashoka claimed to have provided medical care for people and ______ even beyond his own empire.","options":["animals","foreign kings","soldiers only","priests only"],"answer":"animals","explanation":"He is considered an early contributor to nature conservation and animal welfare."},
    {"type":"tap","prompt":"Tap the welfare measures Ashoka claimed to have taken for his people, according to his edicts.","options":["Rest houses and wells along roads","Planting fruit and shade trees","Prohibiting cruelty to animals","Building only palaces for himself","Encouraging all schools of thought to respect each other"],"answer":["Rest houses and wells along roads","Planting fruit and shade trees","Prohibiting cruelty to animals","Encouraging all schools of thought to respect each other"],"explanation":"These measures reflect Kautilya's philosophy of ruler's welfare-focused governance too."},
    {"type":"mcq","prompt":"Embracing Buddhist teachings, Ashoka sent emissaries to spread the Buddha's message to Sri Lanka, Thailand, Central Asia and ______.","options":["beyond","only within his own empire","only to Persia","nowhere else"],"answer":"beyond","explanation":"His reach as a 'great communicator' extended far past his own borders."}
  ]},
  {"id":5,"title":"Boss: Trial of the Compassionate King","intro":"The Dharma Guardian tests all you've learned about Ashoka's transformation!","isBoss":true,"bossName":"Dharma Guardian","questions":[
    {"type":"mcq","prompt":"Why do historians consider it remarkable that Ashoka mentioned the destructive Kalinga war in his own edicts?","options":["He could have hidden it to preserve his peaceful image, but chose honesty instead","It made him look more powerful","It was required by law","He didn't actually fight that war"],"answer":"He could have hidden it to preserve his peaceful image, but chose honesty instead","explanation":"This honesty is one reason historians admire his edicts."},
    {"type":"mcq","prompt":"Historians have sometimes called Ashoka a 'great communicator' because he ______.","options":["issued edicts across his empire to reach ordinary people","never spoke to his officials","built no monuments","hid all his achievements"],"answer":"issued edicts across his empire to reach ordinary people","explanation":"His edicts were engraved on rocks and pillars in many parts of his empire."},
    {"type":"truefalse","prompt":"Ashoka instructed his officers to ensure that men were never imprisoned or tortured without good reason.","options":["True","False"],"answer":"True","explanation":"He sent officers on tour every five years to check that his instructions were followed."},
    {"type":"mcq","prompt":"What did Ashoka say was the 'root' of good governance, according to his instructions to officials?","options":["Being even-tempered and not rash in one's work","Collecting maximum taxes","Building the biggest army","Expanding the empire endlessly"],"answer":"Being even-tempered and not rash in one's work","explanation":"He wanted officials to practise impartiality and gain the affection of the people."}
  ]}
]},
{"id":6,"slug":"legacy","title":"Legacy of the Mauryas","subtitle":"Mauryan Cities · Art & Architecture · The Fall of Empires","emoji":"🏛️","gradient":"linear-gradient(135deg,#A78BFA 0%,#4C1D95 100%)","glow":"#A78BFA","levels":[
  {"id":1,"title":"Life in Mauryan Cities","intro":"Bustling streets, granaries and fire-safety — Mauryan cities were remarkably organised.","questions":[
    {"type":"mcq","prompt":"According to Megasthenes' account, farmers in the Mauryan empire benefited from two crops a year because rain fell in both ______.","options":["summer and winter","spring and autumn","only summer","only winter"],"answer":"summer and winter","explanation":"This ensured famines were rare and people had ample food."},
    {"type":"mcq","prompt":"What was the purpose of the granaries described in the Sohgaura copper plate inscription, one of India's earliest administrative records?","options":["To store grain as a precaution against famines","To store gold and jewels","To house soldiers","To keep royal records only"],"answer":"To store grain as a precaution against famines","explanation":"It highlights the state's efforts to ensure food security."},
    {"type":"truefalse","prompt":"In Mauryan cities, streets had vessels of water stored at regular intervals in case of fire.","options":["True","False"],"answer":"True","explanation":"Houses were made of wood and could be up to two storeys tall, so fire safety mattered."}
  ]},
  {"id":2,"title":"Mauryan Art & Architecture","intro":"Polished stone pillars and great stupas — Mauryan art set a lasting standard for beauty.","questions":[
    {"type":"mcq","prompt":"The famous Sarnath pillar capital, with its four lions symbolising royal power, was chosen to become India's ______.","options":["national emblem","currency symbol","first coin","royal seal only"],"answer":"national emblem","explanation":"It was erected by Ashoka where the Buddha gave his first teaching."},
    {"type":"mcq","prompt":"The Sanskrit motto added beneath the national emblem, 'truth alone triumphs', is written as ______.","options":["satyameva jayate","dharma chakra","ahimsa parmo dharma","vasudhaiva kutumbakam"],"answer":"satyameva jayate","explanation":"It comes from the ancient Mundaka Upanishad."},
    {"type":"mcq","prompt":"The Great Stupa at Sanchi, one of India's oldest stone structures, was originally made of ______ and later enlarged using stone.","options":["bricks","wood","iron","gold"],"answer":"bricks","explanation":"Ashoka is said to have constructed many such stupas, chaityas and viharas."}
  ]},
  {"id":3,"title":"Why Empires Fall","intro":"Even the mightiest empires eventually crumble — and the Mauryas were no exception.","questions":[
    {"type":"mcq","prompt":"One common cause of an empire's decline was that far-off territories, burdened by demands for tribute, would often ______.","options":["try to break away and become independent","become the empire's strongest allies","grow richer than the capital","never rebel"],"answer":"try to break away and become independent","explanation":"The larger an empire, the harder it was to hold together."},
    {"type":"mcq","prompt":"According to the chapter, empires are described as something of a 'paradox' because they bring political unity but are usually established through ______.","options":["war and maintained through force","peaceful elections only","trade agreements only","religious conversion only"],"answer":"war and maintained through force","explanation":"This makes empires fragile at their core and unstable over time."},
    {"type":"truefalse","prompt":"The Maurya empire continued for about half a century after Ashoka's death before it broke apart.","options":["True","False"],"answer":"True","explanation":"His successors were unable to hold the vast empire together."}
  ]},
  {"id":4,"title":"Boss: Echoes of the Mauryas","intro":"The Legacy Keeper guards the memory of India's first great empire. Prove you've mastered it all!","isBoss":true,"bossName":"Legacy Keeper","questions":[
    {"type":"mcq","prompt":"Which of these is a lasting Mauryan legacy still visible in modern India?","options":["The national emblem, based on Ashoka's Sarnath pillar","The Iron Pillar of Delhi","The Taj Mahal","The Red Fort"],"answer":"The national emblem, based on Ashoka's Sarnath pillar","explanation":"The dharmachakra also appears at the centre of India's national flag."},
    {"type":"mcq","prompt":"What ultimately weakened the Mauryan empire's ability to survive after Ashoka's death?","options":["His successors could not hold the vast empire together","A foreign invasion destroyed it overnight","It merged peacefully with Alexander's empire","It was never actually a large empire"],"answer":"His successors could not hold the vast empire together","explanation":"Many smaller kingdoms broke off and became independent."},
    {"type":"mcq","prompt":"Which two Mauryan figures are especially remembered for combining strong governance with attention to their subjects' welfare?","options":["Chandragupta Maurya (guided by Kautilya) and Ashoka","Porus and Alexander","Mahapadma Nanda and Dhana Nanda","Megasthenes and Panini"],"answer":"Chandragupta Maurya (guided by Kautilya) and Ashoka","explanation":"Both rulers, in different ways, emphasised the welfare of their people."},
    {"type":"mcq","prompt":"What best describes the overall legacy of the Maurya empire on Indian civilisation?","options":["Strengthened trade, coinage, urban planning, administration, art and architecture for centuries to come","It left no lasting impact","It only affected the region around Pataliputra","It ended all use of coins in India"],"answer":"Strengthened trade, coinage, urban planning, administration, art and architecture for centuries to come","explanation":"The Mauryan legacy shaped Indian civilisation for generations."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.DK_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.DK_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['🛡️','🏹','📜','🐘','⚔️','🕊️'];

/* ============================== STATE ============================== */
const STORE_KEY = 'dawn-kingdoms-v1';
function defaultState(){ return {avatar:'🛡️', name:'Chronicler', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldDk(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('dk', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedDk(i){
  const active = activeUnreviewedWorldDk();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewDk(i){
  const active = activeUnreviewedWorldDk();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewDk = ()=>{
  const active = activeUnreviewedWorldDk();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'dk',
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
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(245,158,11,0.55))">
    <defs>
      <radialGradient id="mSeal" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#FFE9C2"/><stop offset="60%" stop-color="#F5B25E"/><stop offset="100%" stop-color="#B45309"/>
      </radialGradient>
      <radialGradient id="mGlowD" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FDE68A" stop-opacity="0.7"/><stop offset="100%" stop-color="#FDE68A" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowD)"/>
    <path d="M50 14 L82 30 V56 C82 76 68 88 50 94 C32 88 18 76 18 56 V30 Z" fill="url(#mSeal)"/>
    <ellipse cx="40" cy="55" rx="4" ry="${sad?2:5}" fill="#3a2a1b"/>
    <ellipse cx="60" cy="55" rx="4" ry="${sad?2:5}" fill="#3a2a1b"/>
    <circle cx="41.5" cy="53.5" r="1.2" fill="white"/>
    <circle cx="61.5" cy="53.5" r="1.2" fill="white"/>
    ${mouth}
    <circle cx="34" cy="65" r="3" fill="#e07850" opacity="0.6"/>
    <circle cx="66" cy="65" r="3" fill="#e07850" opacity="0.6"/>
  </svg>`;
}

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
function nav(hash){ location.hash = hash; }
if(window.__dkHashListener) window.removeEventListener('hashchange', window.__dkHashListener);
window.__dkHashListener = function(){ if(!location.hash.startsWith('#/dk')) return; render(); };
window.addEventListener('hashchange', window.__dkHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/dk\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='🛡️';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">A time machine awaits</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Witness the <span class="text-gradient-aurora">dawn of India's first empires.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From the mahajanapadas to Alexander's campaign, from Kautilya's strategy to Ashoka's transformation — travel through six worlds of ancient history.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Activate Itihasa →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Chronicler</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Chronicler" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Begin the journey →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Chronicler', avatar); render(); };
  draw();
}

/* ---------------- HOME (Adventure Map) ---------------- */
function renderHome(){
  const lv = levelNum(STATE.xp), frac = levelFrac(STATE.xp);
  const lessonsDone = Object.values(STATE.progress).filter(p=>p.stars>0).length;
  app.innerHTML = `${Nav()}<main>
    <div class="glass-strong rounded-3xl" style="padding:18px;display:flex;align-items:center;gap:16px">
      <div style="font-size:44px;width:60px;height:60px;border-radius:16px;background:#f59e0b33;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px -6px #f59e0b88">${STATE.avatar}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Time Chronicler</div>
        <div class="font-display" style="font-size:22px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${STATE.name}</div>
        <div class="progress-track" style="margin-top:6px;height:8px"><div class="progress-fill" style="width:${frac*100}%"></div></div>
      </div>
      <div style="text-align:right">
        <div class="pillbox" style="background:#f59e0b33;border:1px solid #f59e0b55">Lv ${lv}</div>
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
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to travel through ancient India?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedDk(i);
        const needsReview = worldNeedsReviewDk(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/dk/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewDk();return false;"` : '';
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
  if(!w){ nav('#/dk/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedDk(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/dk/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/dk/lesson/'+w.id+'/'+lv.id:'#'}">
          <div class="lesson-icon" style="${lv.isBoss?'background:#f26d6d55;box-shadow:0 0 20px -4px #f26d6d':'background:linear-gradient(135deg,'+(w.gradient.match(/#\\w+/g)?.[0]||'#f59e0b')+'55, transparent)'}">${lv.isBoss?'👹':lv.id}</div>
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
  if(!w||!lv){ nav('#/dk/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedDk(wIdx)){ renderHome(); return; }
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
        <a href="#/dk/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/dk/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/dk/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/dk/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('dk', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['dk'] = { init: dkInit };
