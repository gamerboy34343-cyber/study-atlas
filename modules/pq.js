function pqInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"governance","title":"What Is Governance?","subtitle":"Rules and Order · Three Organs · Separation of Powers","emoji":"⚖️","gradient":"linear-gradient(135deg,#FBBF24 0%,#B45309 100%)","glow":"#FBBF24","levels":[
  {"id":1,"title":"Rules and Order","intro":"Every community needs rules — and someone to make and enforce them.","questions":[
    {"type":"mcq","prompt":"The process of taking decisions, organising society's life with rules, and ensuring they are followed is called ______.","options":["governance","anarchy","diplomacy","taxation"],"answer":"governance","explanation":"Governance ensures order and harmony in society."},
    {"type":"mcq","prompt":"The group of individuals or system that makes rules and ensures they are followed is called a ______.","options":["government","panchayat","judiciary","ward"],"answer":"government","explanation":"A Panchayat is just one type of local government, not the general term."},
    {"type":"mcq","prompt":"Some of the more important rules made by a government are called ______.","options":["laws","customs","suggestions","by-laws only"],"answer":"laws","explanation":"Laws are formal rules that citizens are expected to follow."}
  ]},
  {"id":2,"title":"Three Organs of Government","intro":"Every modern government has three key branches working together.","questions":[
    {"type":"mcq","prompt":"The organ of government that makes new laws is called the ______.","options":["legislature","executive","judiciary","bureaucracy"],"answer":"legislature","explanation":"The legislature is an assembly of representatives of the people."},
    {"type":"mcq","prompt":"The organ of government that implements or 'executes' the laws, including the head of state and ministers, is called the ______.","options":["executive","legislature","judiciary","panchayat"],"answer":"executive","explanation":"This includes the president, prime minister or chief minister, and law enforcement agencies."},
    {"type":"mcq","prompt":"The system of courts that decides whether someone has broken the law is called the ______.","options":["judiciary","legislature","executive","cabinet"],"answer":"judiciary","explanation":"The judiciary can also examine whether laws or executive decisions are fair."},
    {"type":"mcq","prompt":"In the chapter's cybercrime example, which agency (part of the executive) is responsible for enforcing law and order against cybercriminals?","options":["The cyber police","The Supreme Court","The Panchayat","The Gram Sabha"],"answer":"The cyber police","explanation":"The legislature passes laws against cybercrime; the cyber police enforce them; the judiciary decides guilt and punishment."}
  ]},
  {"id":3,"title":"Separation of Powers","intro":"Why must the three organs of government stay separate, yet work together?","questions":[
    {"type":"mcq","prompt":"Keeping the legislature, executive and judiciary separate, so each can check the others, is called the ______.","options":["separation of powers","division of labour","rule of law","federal structure"],"answer":"separation of powers","explanation":"This principle helps prevent any one organ from becoming too powerful."},
    {"type":"mcq","prompt":"The idea that each organ of government can check what the other is doing is known as a system of ______.","options":["checks and balances","absolute power","single command","silent consent"],"answer":"checks and balances","explanation":"This restores balance if one organ acts beyond its expected role."},
    {"type":"truefalse","prompt":"If all three organs of government were controlled by the same group of people, it could lead to disorder and abuse of power.","options":["True","False"],"answer":"True","explanation":"This is exactly why the separation of powers is considered so important."}
  ]},
  {"id":4,"title":"Boss: Guardian of Governance","intro":"The Lawkeeper tests your understanding of governance and its organs!","isBoss":true,"bossName":"The Lawkeeper","questions":[
    {"type":"mcq","prompt":"The Government of India's motto, meaning 'Truth alone triumphs', is written as ______.","options":["Satyameva Jayate","Yato Dharmastato Jayah","Vasudhaiva Kutumbakam","Jai Hind"],"answer":"Satyameva Jayate","explanation":"This motto is inspired by ancient Indian texts."},
    {"type":"mcq","prompt":"The Supreme Court's motto, meaning 'Where there is dharma, there is victory', is ______.","options":["Yato Dharmastato Jayah","Satyameva Jayate","Ahimsa Paramo Dharma","Satyam Shivam Sundaram"],"answer":"Yato Dharmastato Jayah","explanation":"This reflects the judiciary's role in upholding justice."},
    {"type":"mcq","prompt":"What would happen, according to the chapter, if no one followed society's rules?","options":["Society would not be able to function","Nothing would change at all","Only the government would be affected","Rules are not actually necessary"],"answer":"Society would not be able to function","explanation":"Rules and governance are essential for order and harmony."}
  ]}
]},
{"id":2,"slug":"tiers","title":"Three Tiers, One Nation","subtitle":"Local, State & National · Government at Work · Democracy & Representatives","emoji":"🏛️","gradient":"linear-gradient(135deg,#60A5FA 0%,#1E3A8A 100%)","glow":"#60A5FA","levels":[
  {"id":1,"title":"Local, State & National","intro":"India's government operates at three levels, each handling different matters.","questions":[
    {"type":"mcq","prompt":"A democratic government like India's typically functions at how many levels or tiers?","options":["Three","Two","Five","One"],"answer":"Three","explanation":"These are the local, State and national (Central) levels."},
    {"type":"mcq","prompt":"In the chapter's flood example, if a massive flood affects vast areas across a State, which level of government may send relief supplies and the army to help?","options":["The Central Government","Only the local authorities","Only the district Panchayat","No government body is involved"],"answer":"The Central Government","explanation":"Smaller floods may be handled by local authorities or the State Government instead."},
    {"type":"mcq","prompt":"Which level of government would typically deal with a small, localised problem, like a single street's issue?","options":["Local government","State government","Central government","None of these"],"answer":"Local government","explanation":"Local governments are closest to the people and their everyday concerns."}
  ]},
  {"id":2,"title":"Government at Work","intro":"Each level of government has its own institutions and responsibilities.","questions":[
    {"type":"mcq","prompt":"At the national level, laws are made by two houses called the Lok Sabha and the ______.","options":["Rajya Sabha","Vidhan Sabha","Zila Parishad","Panchayat Samiti"],"answer":"Rajya Sabha","explanation":"Together, these two houses form India's Parliament."},
    {"type":"mcq","prompt":"At the State level, the assembly where laws are discussed and passed is generally called the State Assembly or ______.","options":["Vidhan Sabha","Rajya Sabha","Lok Sabha","Gram Sabha"],"answer":"Vidhan Sabha","explanation":"Most States have a single assembly, though a few have two."},
    {"type":"mcq","prompt":"According to Fig. 10.5, which of these is a function of the Central Government but NOT the State Government?","options":["Defence and Foreign Affairs","Police, law and order","Education","Agriculture"],"answer":"Defence and Foreign Affairs","explanation":"Police and agriculture, for example, fall under State responsibilities."},
    {"type":"mcq","prompt":"According to the chapter, the President of India and a State's Governor are described as ______ heads of the executive.","options":["nominal","the only real","unelected and powerless","judicial"],"answer":"nominal","explanation":"The Prime Minister and Chief Minister are the actual executive heads."}
  ]},
  {"id":3,"title":"Democracy & Representatives","intro":"India is a representative democracy — but what does that really mean?","questions":[
    {"type":"mcq","prompt":"The word 'democracy' comes from Greek words meaning 'people' and 'rule' or 'power' — so it literally means ______.","options":["rule of the people","rule of the wise","rule of the rich","rule of the elders"],"answer":"rule of the people","explanation":"This is the foundation of democratic governance."},
    {"type":"mcq","prompt":"Elected members of a State's legislative assembly are generally called ______.","options":["MLAs (Members of Legislative Assembly)","MPs (Members of Parliament)","Sarpanchs","Governors"],"answer":"MLAs (Members of Legislative Assembly)","explanation":"MPs, by contrast, are elected at the national level."},
    {"type":"mcq","prompt":"Elected members of the national Parliament are generally called ______.","options":["MPs (Members of Parliament)","MLAs (Members of Legislative Assembly)","Ministers only","Judges"],"answer":"MPs (Members of Parliament)","explanation":"MPs sit in the Lok Sabha or Rajya Sabha."},
    {"type":"mcq","prompt":"A system where citizens vote directly on an issue, such as a class voting by show of hands on a picnic spot, is called ______.","options":["direct democracy","representative democracy","monarchy","autocracy"],"answer":"direct democracy","explanation":"In representative democracy, elected representatives vote and decide on citizens' behalf instead."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Republic","intro":"The Vote Keeper challenges your knowledge of India's democracy!","isBoss":true,"bossName":"The Vote Keeper","questions":[
    {"type":"mcq","prompt":"India is described as the world's largest democracy, with about how many voters in 2024?","options":["970 million","10 million","5 billion","100 million"],"answer":"970 million","explanation":"This makes India's elections the largest democratic exercise on Earth."},
    {"type":"mcq","prompt":"The term for a system that enables and encourages the participation of ordinary citizens, at the base of the governance pyramid, is ______.","options":["grassroots democracy","autocracy","monarchy","bureaucracy"],"answer":"grassroots democracy","explanation":"This gives citizens a say in decisions that directly affect them."},
    {"type":"mcq","prompt":"Dr. A.P.J. Abdul Kalam, though his position as President was nominal, is remembered for playing an important role by ______.","options":["inspiring millions through education and innovation","controlling all three organs of government","abolishing the Parliament","ending democracy in India"],"answer":"inspiring millions through education and innovation","explanation":"He served as India's 11th President from 2002 to 2007."}
  ]}
]},
{"id":3,"slug":"panchayati-raj","title":"The Panchayati Raj System","subtitle":"Meet the Panchayat · Gram Sabha & Gram Panchayat · Voices of the Village","emoji":"🏘️","gradient":"linear-gradient(135deg,#34D399 0%,#065F46 100%)","glow":"#34D399","levels":[
  {"id":1,"title":"Meet the Panchayat","intro":"How do India's 600,000 villages govern themselves?","questions":[
    {"type":"mcq","prompt":"The local system of self-government in Indian villages is called the ______.","options":["Panchayat","Zila Parishad","Municipal Council","Ward Committee"],"answer":"Panchayat","explanation":"'Panchayat' refers to a village council."},
    {"type":"mcq","prompt":"The Panchayati Raj system, working from the village to the district, is organised into how many tiers?","options":["Three","Two","Four","One"],"answer":"Three","explanation":"These tiers are the village, block and district levels."},
    {"type":"mcq","prompt":"Roughly how many villages does India have, according to the chapter?","options":["About 600,000","About 6,000","About 60,000,000","About 600"],"answer":"About 600,000","explanation":"Almost two-thirds of India's population lives in rural areas."}
  ]},
  {"id":2,"title":"Gram Sabha & Gram Panchayat","intro":"At the base of the pyramid is the institution closest to village life.","questions":[
    {"type":"mcq","prompt":"The group of adults from a village enrolled as voters, who directly elect the Gram Panchayat, is called the ______.","options":["Gram Sabha","Zila Parishad","Ward Committee","Panchayat Samiti"],"answer":"Gram Sabha","explanation":"Women and men in the Gram Sabha discuss matters and take decisions together."},
    {"type":"mcq","prompt":"The elected head or president of a Gram Panchayat is called the ______ or Pradhan.","options":["Sarpanch","Governor","Chief Minister","Patwari"],"answer":"Sarpanch","explanation":"In recent years, more and more women have become Sarpanchs."},
    {"type":"mcq","prompt":"The officer who assists the Gram Panchayat by calling meetings and maintaining records is the ______.","options":["Panchayat Secretary","Patwari","Sarpanch","Zila Parishad"],"answer":"Panchayat Secretary","explanation":"This role handles the administrative functions of the Panchayat."},
    {"type":"mcq","prompt":"In many parts of India, the officer who maintains villagers' land records, sometimes using maps that are generations old, is called the ______.","options":["Patwari","Panchayat Secretary","Sarpanch","Block Officer"],"answer":"Patwari","explanation":"These old maps can reveal much about a village's past and present."}
  ]},
  {"id":3,"title":"Voices of the Village","intro":"Panchayats are meant to listen to everyone — including children.","questions":[
    {"type":"mcq","prompt":"The Child-Friendly Panchayat Initiative creates opportunities for children to express ideas through groups called Bal Sabhas and ______.","options":["Bal Panchayats","Zila Parishads","Ward Committees","Municipal Councils"],"answer":"Bal Panchayats","explanation":"Village elders work with these groups to find solutions to children's concerns."},
    {"type":"mcq","prompt":"In Rajasthan, the 'Children's Parliament', an offshoot of Bunker Roy's Barefoot College initiative, engaged children in governance through night schools and ______.","options":["parliament-like elections","only sports activities","only religious festivals","only farming work"],"answer":"parliament-like elections","explanation":"It even included voter ID cards and campaigning, just like real elections."},
    {"type":"mcq","prompt":"The Sangkhu Radhu Khandu Gram Panchayat in Sikkim was declared child-friendly for building compound walls for schools and constructing ______ for hygienic mid-day meals.","options":["kitchens","stadiums","libraries","hospitals"],"answer":"kitchens","explanation":"This Panchayat has given great importance to children's needs and rights."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Gram Sabha","intro":"The Village Sentinel tests your knowledge of grassroots participation!","isBoss":true,"bossName":"Village Sentinel","questions":[
    {"type":"mcq","prompt":"In Bal Panchayats in Maharashtra, children have worked to eliminate child labour and ______.","options":["child marriage","farming","festivals","voting"],"answer":"child marriage","explanation":"They have also worked to bring many children back to school."},
    {"type":"mcq","prompt":"The Children's Parliament initiative in Rajasthan received which international recognition in 2001?","options":["World's Children's Honorary Award","Nobel Peace Prize","Padma Shri","Bharat Ratna"],"answer":"World's Children's Honorary Award","explanation":"This recognised its impact on leadership and social awareness among children."},
    {"type":"truefalse","prompt":"Panchayats are meant to listen to everyone's voice, including the voice of children.","options":["True","False"],"answer":"True","explanation":"This is why child-friendly initiatives like Bal Panchayats exist."}
  ]}
]},
{"id":4,"slug":"champions","title":"Champions of the Village","subtitle":"Breaking Barriers · Transforming a Village · Ancient Wisdom, Modern System","emoji":"🌟","gradient":"linear-gradient(135deg,#F472B6 0%,#831843 100%)","glow":"#F472B6","levels":[
  {"id":1,"title":"Breaking Barriers","intro":"Meet Sarpanchs who broke new ground for their communities.","questions":[
    {"type":"mcq","prompt":"Dnyaneshwar Kamble, elected Sarpanch of Tarangfal village in Maharashtra in 2017, is notable for being a ______ person.","options":["transgender","foreign-born","child","royal"],"answer":"transgender","explanation":"Kamble defeated six other candidates to win the election."},
    {"type":"mcq","prompt":"Dnyaneshwar Kamble's motto, 'lok seva, gram seva', means ______.","options":["Service to the village is service to the public","Power belongs to the people","Knowledge is strength","Unity is victory"],"answer":"Service to the village is service to the public","explanation":"This motto reflects a strong commitment to community service."},
    {"type":"mcq","prompt":"Vandana Bahadur Maida, a member of the Bhil community, became the first female Sarpanch of her village, defying ______.","options":["patriarchal norms","the Gram Sabha","the district government","her own family"],"answer":"patriarchal norms","explanation":"She addressed critical issues like education and sanitation in her village."}
  ]},
  {"id":2,"title":"Transforming a Village","intro":"How one Sarpanch turned a drought-hit village into a green success story.","questions":[
    {"type":"mcq","prompt":"Popatrao Baguji Pawar, Sarpanch of Hiware Bazar in Maharashtra, transformed the drought-affected village using rainwater harvesting, watershed conservation and ______.","options":["massive tree planting","new road construction only","building a shopping mall","importing water from cities"],"answer":"massive tree planting","explanation":"These efforts helped recharge groundwater in the village."},
    {"type":"mcq","prompt":"Popatrao Pawar's water conservation model, inspired by Anna Hazare, was awarded which honour in 2020?","options":["Padma Shri","Bharat Ratna","Nobel Prize","Ashoka Chakra"],"answer":"Padma Shri","explanation":"Hiware Bazar became a green and prosperous village through his leadership."},
    {"type":"mcq","prompt":"What did Vandana Bahadur Maida convince the women of her village to do, in order to address issues like education and sanitation?","options":["Attend the Sabha meetings","Move to the city","Stop farming","Avoid voting"],"answer":"Attend the Sabha meetings","explanation":"Her efforts earned her recognition far and wide."}
  ]},
  {"id":3,"title":"Ancient Wisdom, Modern System","intro":"India's structured local governance has roots stretching back over two millennia.","questions":[
    {"type":"mcq","prompt":"The Arthashastra, an ancient text of governance, was written about 2,300 years ago by ______.","options":["Kautilya (also known as Chanakya)","Ashoka","Chandragupta Maurya","Harshavardhana"],"answer":"Kautilya (also known as Chanakya)","explanation":"He was an expert in statecraft and administration."},
    {"type":"mcq","prompt":"According to the Arthashastra, the king was to establish a headquarters for every 10 villages, called a ______.","options":["sangrahana","dronamukha","sthaniya","kharvatika"],"answer":"sangrahana","explanation":"Larger headquarters covered 100, 400 and 800 villages respectively."},
    {"type":"truefalse","prompt":"The Arthashastra describes an administrative structure from the village up to the regional capital, similar in idea to today's Panchayati Raj system.","options":["True","False"],"answer":"True","explanation":"This shows how deep the roots of structured local governance run in India."}
  ]},
  {"id":4,"title":"Boss: Guardian of Local Leadership","intro":"The final challenge of this world! Face the Panchayat Champion.","isBoss":true,"bossName":"Panchayat Champion","questions":[
    {"type":"mcq","prompt":"At all three levels of the Panchayati Raj system, what fraction of seats is reserved for women?","options":["One-third","One-tenth","One-half","None"],"answer":"One-third","explanation":"This reservation has helped many women, like Vandana Bahadur Maida, take up leadership roles."},
    {"type":"mcq","prompt":"What is a common thread among Dnyaneshwar Kamble, Vandana Bahadur Maida and Popatrao Pawar?","options":["They are all Sarpanchs who broke barriers or transformed their villages","They are all Members of Parliament","They are all Supreme Court judges","They are all Prime Ministers of India"],"answer":"They are all Sarpanchs who broke barriers or transformed their villages","explanation":"Their stories show the impact of dedicated grassroots leadership."},
    {"type":"mcq","prompt":"Why does the chapter say special rules exist so disadvantaged sections of the population can be heard in Panchayati Raj institutions?","options":["To ensure their needs and problems are represented in governance","Because they are not allowed to vote otherwise","Because they do not pay taxes","Because they live outside villages"],"answer":"To ensure their needs and problems are represented in governance","explanation":"This is part of making local governance truly participatory."}
  ]}
]},
{"id":5,"slug":"block-district","title":"Panchayat Samiti & Zila Parishad","subtitle":"Linking Village to District · Coordinating Development · Governance Across Time","emoji":"🗺️","gradient":"linear-gradient(135deg,#38BDF8 0%,#0C4A6E 100%)","glow":"#38BDF8","levels":[
  {"id":1,"title":"Linking Village to District","intro":"Above the Gram Panchayat sit two more layers of the Panchayati Raj pyramid.","questions":[
    {"type":"mcq","prompt":"The institution at the block level, which links the Gram Panchayat to the Zila Parishad, is called the ______.","options":["Panchayat Samiti","Ward Committee","Municipal Corporation","Gram Sabha"],"answer":"Panchayat Samiti","explanation":"Its composition differs from State to State."},
    {"type":"mcq","prompt":"The institution at the district level of the Panchayati Raj system is called the ______.","options":["Zila Parishad","Panchayat Samiti","Gram Panchayat","Nagar Palika"],"answer":"Zila Parishad","explanation":"This is the topmost tier of the three-tier Panchayati Raj system."},
    {"type":"mcq","prompt":"Members of the Panchayat Samiti and Zila Parishad are elected by local people, but may also include Sarpanchs and local members of the ______.","options":["State Legislative Assembly","Lok Sabha","Supreme Court","Rajya Sabha"],"answer":"State Legislative Assembly","explanation":"This helps connect local governance to the State level."}
  ]},
  {"id":2,"title":"Coordinating Development","intro":"These institutions help bring village needs together for larger action.","questions":[
    {"type":"mcq","prompt":"The Panchayat Samiti helps coordinate matters across Gram Panchayats, for instance by collecting ______ and presenting them at the District or State level.","options":["development plans","election ballots","school report cards","court rulings"],"answer":"development plans","explanation":"This helps in the allotment of funds for development projects."},
    {"type":"mcq","prompt":"The Pradhan Mantri Gram Sadak Yojana is a government scheme that promotes the construction of ______ in rural areas.","options":["all-weather roads","new cities","universities","airports"],"answer":"all-weather roads","explanation":"Good roads help connect villages to markets, schools and hospitals."},
    {"type":"truefalse","prompt":"The exact structure and functions of Panchayati Raj institutions can differ a little from State to State, because States have authority over these institutions.","options":["True","False"],"answer":"True","explanation":"Despite these differences, their core objectives remain the same across India."}
  ]},
  {"id":3,"title":"Governance Across Time","intro":"From Kautilya's era to today, India's local governance has deep roots.","questions":[
    {"type":"mcq","prompt":"According to the chapter, all three tiers of the Panchayati Raj system together cover almost all aspects of district life, from agriculture and housing to ______.","options":["education, health care and social welfare","only defence matters","only foreign policy","only currency management"],"answer":"education, health care and social welfare","explanation":"This shows the wide-ranging responsibilities of these institutions."},
    {"type":"mcq","prompt":"What is the shared objective of Panchayati Raj institutions across all States, despite some structural differences?","options":["To enable villagers to actively manage and develop their own villages and local area","To centralise all power in the national capital","To eliminate local self-governance","To replace elections with appointments"],"answer":"To enable villagers to actively manage and develop their own villages and local area","explanation":"This is the essence of self-governance at the grassroots level."},
    {"type":"mcq","prompt":"Why does the chapter compare governance in the Panchayati Raj system to that of ancient India, as described in the Arthashastra?","options":["To show that structured, multi-level local administration has ancient roots in India","To argue that ancient systems should completely replace modern ones","To show that governance in ancient India had no structure at all","To prove villages did not exist in ancient India"],"answer":"To show that structured, multi-level local administration has ancient roots in India","explanation":"Kautilya's structure closely parallels today's village-block-district tiers."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Tiers","intro":"The District Overseer challenges your mastery of the Panchayati Raj system!","isBoss":true,"bossName":"District Overseer","questions":[
    {"type":"mcq","prompt":"What is the correct order of the Panchayati Raj system's three tiers, from the village upward?","options":["Gram Panchayat → Panchayat Samiti → Zila Parishad","Zila Parishad → Panchayat Samiti → Gram Panchayat","Panchayat Samiti → Gram Panchayat → Zila Parishad","Gram Sabha → Zila Parishad → Panchayat Samiti"],"answer":"Gram Panchayat → Panchayat Samiti → Zila Parishad","explanation":"This is the bottom-up structure of local rural governance."},
    {"type":"mcq","prompt":"Democracy in the Panchayati Raj system works both through direct participation of people and through ______.","options":["their elected representatives","royal appointment","military selection","random lottery"],"answer":"their elected representatives","explanation":"This blend of direct and representative democracy is central to the system."},
    {"type":"mcq","prompt":"What overall benefit do Panchayati Raj institutions give to people in rural areas, according to the chapter's summary?","options":["A measure of self-governance to manage their own issues and development","Complete independence from all higher levels of government","Exemption from all national laws","Direct control over the national budget"],"answer":"A measure of self-governance to manage their own issues and development","explanation":"This is the core purpose of grassroots democracy in rural India."}
  ]}
]},
{"id":6,"slug":"urban","title":"Urban Local Bodies","subtitle":"Governing the City · Municipal Bodies · Cities of India","emoji":"🏙️","gradient":"linear-gradient(135deg,#A78BFA 0%,#4C1D95 100%)","glow":"#A78BFA","levels":[
  {"id":1,"title":"Governing the City","intro":"Cities and towns need their own form of local government too.","questions":[
    {"type":"mcq","prompt":"Local government structures in urban (city and town) areas are called ______.","options":["urban local bodies","Gram Panchayats","Zila Parishads","Panchayat Samitis"],"answer":"urban local bodies","explanation":"These parallel the rural Panchayati Raj system."},
    {"type":"mcq","prompt":"Cities and towns are divided into smaller units, whose committees handle local activities like health camps and reporting problems, called ______.","options":["wards","districts","blocks","provinces"],"answer":"wards","explanation":"Ward committees also watch for issues like water leaks and damaged roads."},
    {"type":"mcq","prompt":"Urban local bodies are described as 'decentralised', meaning ______.","options":["local communities have a direct say in how their areas are managed, instead of a central authority alone deciding","only the national government makes all decisions","cities have no local government at all","only the State Governor manages cities"],"answer":"local communities have a direct say in how their areas are managed, instead of a central authority alone deciding","explanation":"This mirrors the principle of participatory democracy seen in rural areas."}
  ]},
  {"id":2,"title":"Municipal Bodies","intro":"Different sizes of cities have different top-level municipal bodies.","questions":[
    {"type":"mcq","prompt":"Only cities with a population above 10 lakhs have the highest urban body called a ______.","options":["Municipal Corporation (Mahanagar Nigam)","Nagar Panchayat","Ward Committee","Gram Sabha"],"answer":"Municipal Corporation (Mahanagar Nigam)","explanation":"Chennai and Indore are examples of cities with Municipal Corporations."},
    {"type":"mcq","prompt":"Cities with a population between 1 and 10 lakhs typically have a ______ as their highest urban body.","options":["Municipal Council (Nagar Palika)","Municipal Corporation","Zila Parishad","Panchayat Samiti"],"answer":"Municipal Council (Nagar Palika)","explanation":"This is a step below a full Municipal Corporation."},
    {"type":"mcq","prompt":"Towns with smaller populations, below the Municipal Council threshold, typically have a ______.","options":["Nagar Panchayat","Municipal Corporation","Gram Panchayat","Ward Committee only"],"answer":"Nagar Panchayat","explanation":"This is the smallest of the three urban local body types."},
    {"type":"mcq","prompt":"Urban local bodies are responsible for functions such as garbage collection, maintaining infrastructure and ______.","options":["collecting local taxes and fines","commanding the armed forces","printing national currency","conducting foreign policy"],"answer":"collecting local taxes and fines","explanation":"They also play a role in planning the area's economic and social development."}
  ]},
  {"id":3,"title":"Cities of India","intro":"From Chennai's ancient corporation to Indore's cleanliness record.","questions":[
    {"type":"mcq","prompt":"Which is described as the oldest municipal institution in India, established in 1688?","options":["The Madras Corporation (now Greater Chennai Corporation)","The Bombay Municipal Corporation","The Delhi Municipal Corporation","The Kolkata Municipal Corporation"],"answer":"The Madras Corporation (now Greater Chennai Corporation)","explanation":"A Parliamentary Act of 1792 gave it the power to levy municipal taxes."},
    {"type":"mcq","prompt":"The Municipal Corporation of Greater Mumbai, originally called the 'Bombay Municipal Corporation', was created in which year?","options":["1865","1688","1947","1992"],"answer":"1865","explanation":"This institution has served Mumbai for over 150 years."},
    {"type":"mcq","prompt":"Indore in Madhya Pradesh has repeatedly been awarded India's cleanest city under which government scheme?","options":["Swachh Survekshan","Smart Cities Mission","Pradhan Mantri Awas Yojana","Digital India"],"answer":"Swachh Survekshan","explanation":"Indore won this recognition for seven years in a row."}
  ]},
  {"id":4,"title":"Boss: Guardian of the City","intro":"The final challenge! Face the Ward Sentinel to complete Panchayat Quest.","isBoss":true,"bossName":"Ward Sentinel","questions":[
    {"type":"mcq","prompt":"In the chapter's dialogue, Sameer compares his village Panchayat to the urban local body Anita describes, noting it is 'like our village Panchayat, only ______.'","options":["bigger","smaller","older","less democratic"],"answer":"bigger","explanation":"Both systems rely on elected representatives serving their communities."},
    {"type":"mcq","prompt":"According to the chapter, for urban local bodies to function efficiently, citizens must also ______.","options":["perform their duties, such as following waste segregation rules","pay no attention to local issues","avoid contacting local representatives","rely only on the national government"],"answer":"perform their duties, such as following waste segregation rules","explanation":"This is part of participatory democracy in urban areas."},
    {"type":"mcq","prompt":"What common theme runs through both the rural Panchayati Raj system and urban local bodies, according to the chapters?","options":["Both have elected members who represent local citizens in a participatory democracy","Only rural areas practice democracy","Urban bodies have no elected members","Only the national government has real power"],"answer":"Both have elected members who represent local citizens in a participatory democracy","explanation":"This connects grassroots democracy across both rural and urban India."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.PQ_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.PQ_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['🏛️','🗳️','🌾','🏘️','🧑‍⚖️','🛖'];

/* ============================== STATE ============================== */
const STORE_KEY = 'panchayat-quest-v1';
function defaultState(){ return {avatar:'🏛️', name:'Nagrik', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldPq(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('pq', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedPq(i){
  const active = activeUnreviewedWorldPq();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewPq(i){
  const active = activeUnreviewedWorldPq();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewPq = ()=>{
  const active = activeUnreviewedWorldPq();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'pq',
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
  const mouth = sad ? `<path d="M42 70 Q 50 63, 58 70" stroke="#3a2b0f" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    : mood==='think' ? `<circle cx="50" cy="70" r="2" fill="#3a2b0f"/>`
    : `<path d="M42 68 Q 50 78, 58 68" stroke="#3a2b0f" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(251,191,36,0.55))">
    <defs>
      <radialGradient id="mDome" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#FEF3C7"/><stop offset="60%" stop-color="#FCD34D"/><stop offset="100%" stop-color="#B45309"/>
      </radialGradient>
      <radialGradient id="mGlowPq" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FDE68A" stop-opacity="0.7"/><stop offset="100%" stop-color="#FDE68A" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowPq)"/>
    <path d="M50 8 L82 30 H18 Z" fill="#B45309"/>
    <rect x="22" y="28" width="56" height="8" rx="2" fill="#92400E"/>
    <circle cx="50" cy="58" r="30" fill="url(#mDome)"/>
    <ellipse cx="40" cy="58" rx="4" ry="${sad?2:5}" fill="#3a2b0f"/>
    <ellipse cx="60" cy="58" rx="4" ry="${sad?2:5}" fill="#3a2b0f"/>
    <circle cx="41.5" cy="56.5" r="1.2" fill="white"/>
    <circle cx="61.5" cy="56.5" r="1.2" fill="white"/>
    ${mouth}
    <circle cx="34" cy="68" r="3" fill="#F97316" opacity="0.6"/>
    <circle cx="66" cy="68" r="3" fill="#F97316" opacity="0.6"/>
  </svg>`;
}

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
function nav(hash){ location.hash = hash; }
if(window.__pqHashListener) window.removeEventListener('hashchange', window.__pqHashListener);
window.__pqHashListener = function(){ if(!location.hash.startsWith('#/pq')) return; render(); };
window.addEventListener('hashchange', window.__pqHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/pq\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='🏛️';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">From village to city</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Discover <span class="text-gradient-aurora">grassroots democracy.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From governance basics to the Panchayati Raj system and urban local bodies — six worlds explore how India governs itself, from the ground up.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Begin the journey →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Nagrik</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Nagrik" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter Panchayat Quest →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Nagrik', avatar); render(); };
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
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Panchayat Explorer</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Sarpanch Ji</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to explore how India governs from the ground up?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedPq(i);
        const needsReview = worldNeedsReviewPq(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/pq/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewPq();return false;"` : '';
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
  if(!w){ nav('#/pq/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedPq(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/pq/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/pq/lesson/'+w.id+'/'+lv.id:'#'}">
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
  if(!w||!lv){ nav('#/pq/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedPq(wIdx)){ renderHome(); return; }
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
        <a href="#/pq/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/pq/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/pq/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/pq/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('pq', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['pq'] = { init: pqInit };
