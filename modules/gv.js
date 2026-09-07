function gvInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"govbasics","title":"What is Government?","subtitle":"Functions of Government · Democracy · Core Principles","emoji":"🏛️","gradient":"linear-gradient(135deg,#60A5FA 0%,#1E3A8A 100%)","glow":"#60A5FA","levels":[
  {"id":1,"title":"Functions of Government","intro":"Every government does three basic jobs — making rules, running them, and enforcing them.","questions":[
    {"type":"mcq","prompt":"The creation of rules and laws is called the ______ function of government.","options":["legislative","executive","judicial","administrative"],"answer":"legislative","explanation":"These rules form the framework for running the country."},
    {"type":"mcq","prompt":"The implementation of rules and administration of the country is known as the ______ function.","options":["executive","legislative","judicial","diplomatic"],"answer":"executive","explanation":"This function carries out what the legislature has decided."},
    {"type":"mcq","prompt":"Ensuring that the rules are followed and settling disputes is called the ______ function.","options":["judicial","legislative","executive","electoral"],"answer":"judicial","explanation":"This function checks that laws are properly applied."}
  ]},
  {"id":2,"title":"What is Democracy?","intro":"A school committee story reveals what 'rule of the people' really means.","questions":[
    {"type":"mcq","prompt":"'Democracy' is best understood as ______.","options":["rule of the people","rule of the wealthy","rule of the military","rule of religious leaders"],"answer":"rule of the people","explanation":"The source of power and authority in a democracy is the people themselves."},
    {"type":"mcq","prompt":"Abraham Lincoln famously described democracy as a government 'of the people, by the people, ______.'","options":["for the people","for the king","for the army","for the wealthy"],"answer":"for the people","explanation":"This phrase remains widely used to describe democracy today."},
    {"type":"mcq","prompt":"In the school example, which method of forming a student committee was identified as the most democratic?","options":["Students choose their representatives through voting","The Head Teacher chooses the students herself","Every single student joins the committee","Only the senior-most grade decides"],"answer":"Students choose their representatives through voting","explanation":"This mirrors how representative democracy works at a national level."}
  ]},
  {"id":3,"title":"Fundamental Principles of Democracy","intro":"Equality, freedom, and a voice for every citizen — the ideals every democracy aspires to.","questions":[
    {"type":"mcq","prompt":"Which principle means every citizen above a certain age has the right to vote?","options":["Universal adult franchise","Separation of powers","Fraternity","Federalism"],"answer":"Universal adult franchise","explanation":"India granted this right to all adults from the very start of the republic."},
    {"type":"tap","prompt":"Tap the fundamental principles of democracy mentioned in the chapter.","options":["Equality","Freedom","Representative participation","Hereditary succession","Independent judiciary"],"answer":["Equality","Freedom","Representative participation","Independent judiciary"],"explanation":"Hereditary succession is a feature of monarchy, not democracy."},
    {"type":"mcq","prompt":"India provided universal adult franchise to all adults from the very beginning of the republic in 1950, while women in Switzerland got the right to vote only in ______.","options":["1971","1950","1900","2000"],"answer":"1971","explanation":"This shows how democratic principles have evolved differently across countries."}
  ]},
  {"id":4,"title":"Boss: The People's Trial","intro":"The Sabha Sentinel tests your grasp of democracy's foundations!","isBoss":true,"bossName":"Sabha Sentinel","questions":[
    {"type":"mcq","prompt":"What does 'accountability' mean in a democracy?","options":["The government is answerable to the people who elected it","The government has no responsibilities","Only the judiciary is accountable","Citizens are accountable to the government only"],"answer":"The government is answerable to the people who elected it","explanation":"This keeps a constant check on how the government performs."},
    {"type":"mcq","prompt":"Which organ of government is responsible for implementing laws?","options":["The executive","The legislature","The judiciary","The electorate"],"answer":"The executive","explanation":"The executive administers the country according to the laws made."},
    {"type":"mcq","prompt":"Which organ of government is responsible for making laws?","options":["The legislature","The executive","The judiciary","The electorate"],"answer":"The legislature","explanation":"This body creates the rules and framework for running the country."},
    {"type":"truefalse","prompt":"Even democracies have their problems, such as corruption, wealth disparity and erosion of judicial independence.","options":["True","False"],"answer":"True","explanation":"Citizens need to remain vigilant to protect democratic ideals."}
  ]}
]},
{"id":2,"slug":"democracies","title":"Democracy Around the World","subtitle":"Direct & Representative Democracy · Early Republics","emoji":"🗳️","gradient":"linear-gradient(135deg,#34D399 0%,#065F46 100%)","glow":"#34D399","levels":[
  {"id":1,"title":"Direct vs Representative Democracy","intro":"Not all democracies work the same way — some let everyone decide directly, others through elected voices.","questions":[
    {"type":"mcq","prompt":"In a ______ democracy, all citizens directly participate in every decision, a form still practised in parts of Switzerland.","options":["direct","representative","presidential","parliamentary"],"answer":"direct","explanation":"This is difficult to carry out in larger countries."},
    {"type":"mcq","prompt":"In a ______ democracy, people elect representatives who govern on their behalf, and the government remains accountable to the people.","options":["representative","direct","absolute","hereditary"],"answer":"representative","explanation":"This is the most common form of democracy in the world today, including in India."},
    {"type":"mcq","prompt":"What is a key limitation of direct democracy, especially in large countries?","options":["It is very hard to carry out in practice with everyone deciding on every issue","It gives too much power to one person","It has no elections at all","It cannot be found anywhere in the world"],"answer":"It is very hard to carry out in practice with everyone deciding on every issue","explanation":"Decision-making becomes difficult when everyone must be involved in everything."}
  ]},
  {"id":2,"title":"Parliamentary & Presidential Democracy","intro":"Two ways representative democracies structure the relationship between executive and legislature.","questions":[
    {"type":"mcq","prompt":"In a parliamentary democracy like India, the members of the executive (like the prime minister) are also members of the ______.","options":["legislature","judiciary","military","opposition only"],"answer":"legislature","explanation":"This is a defining feature of parliamentary systems."},
    {"type":"mcq","prompt":"In a presidential democracy, the executive works independently of the legislature, and the president is elected directly by the ______.","options":["people","legislature only","judiciary","monarch"],"answer":"people","explanation":"The president does not need the legislature's confidence to remain in office."},
    {"type":"mcq","prompt":"In India, the council of ministers can continue governing as long as they have the confidence of the ______.","options":["Lok Sabha","Rajya Sabha","Supreme Court","President alone"],"answer":"Lok Sabha","explanation":"This is the lower house of India's Parliament."}
  ]},
  {"id":3,"title":"Early Republics in India","intro":"Long before the word 'democracy' reached India, some ancient states practised its principles.","questions":[
    {"type":"mcq","prompt":"In the Vajji mahajanapada, which clan practised collective decision-making and chose leaders based on merit rather than birth?","options":["The Lichchhavi clan","The Nanda clan","The Maurya clan","The Gupta clan"],"answer":"The Lichchhavi clan","explanation":"Key positions were filled through elections among clan representatives."},
    {"type":"mcq","prompt":"The Uttaramerur inscriptions from 10th-century Tamil Nadu describe the election of members to which local administrative body?","options":["The village sabha","The royal court","The Constituent Assembly","The Lok Sabha"],"answer":"The village sabha","explanation":"They describe sealed ballot boxes, qualifications and even conditions for dismissal."},
    {"type":"truefalse","prompt":"According to the Uttaramerur inscriptions, members found guilty of corruption could be immediately removed from the village sabha.","options":["True","False"],"answer":"True","explanation":"This reflects an early, sophisticated system of local accountability."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Republic","intro":"The Republic Warden challenges your knowledge of democracy's many forms!","isBoss":true,"bossName":"Republic Warden","questions":[
    {"type":"mcq","prompt":"A republic is a form of government in which the head of state is ______.","options":["elected, not a hereditary monarch","always a king","chosen by a religious leader","chosen by a foreign power"],"answer":"elected, not a hereditary monarch","explanation":"India's ancient mahajanapadas of Vajji and Malla were early examples of this."},
    {"type":"mcq","prompt":"In some parts of ancient Greece, who was excluded from voting even though free men could vote?","options":["Women, workers and slaves","Only foreigners","Only children","Only the wealthy"],"answer":"Women, workers and slaves","explanation":"Ancient republics did not always practise the equality we associate with democracy today."},
    {"type":"mcq","prompt":"India holds general elections at regular intervals of every ______ years.","options":["five","four","seven","ten"],"answer":"five","explanation":"Regular elections allow people to express changes in their choices."},
    {"type":"truefalse","prompt":"The USA holds presidential elections every four years, a different interval from India's general elections.","options":["True","False"],"answer":"True","explanation":"Different representative democracies set their own election schedules."}
  ]}
]},
{"id":3,"slug":"otherforms","title":"Other Forms of Government","subtitle":"Monarchy · Theocracy · Dictatorship · Oligarchy","emoji":"👑","gradient":"linear-gradient(135deg,#F87171 0%,#7C2D12 100%)","glow":"#F87171","levels":[
  {"id":1,"title":"Monarchy — Absolute & Constitutional","intro":"Not all monarchs rule the same way — some hold total power, others almost none.","questions":[
    {"type":"mcq","prompt":"In an absolute monarchy, the monarch has complete control over making laws, enforcing them and ______.","options":["adjudicating disputes","holding elections","forming a parliament","sharing power equally"],"answer":"adjudicating disputes","explanation":"This means the monarch also judges cases when there is a dispute."},
    {"type":"mcq","prompt":"Which country is given as an example of an absolute monarchy, where the king governs according to Islamic law?","options":["Saudi Arabia","The United Kingdom","Japan","Sweden"],"answer":"Saudi Arabia","explanation":"The king appoints an advisory council but is not bound by its advice."},
    {"type":"mcq","prompt":"In a constitutional monarchy like the United Kingdom, who exercises the real executive power, while the monarch holds only nominal power?","options":["The prime minister","The king or queen","The Supreme Court","The military"],"answer":"The prime minister","explanation":"This makes the UK, in practice, a parliamentary democracy despite having a monarch."}
  ]},
  {"id":2,"title":"Theocracy & Dictatorship","intro":"Rule by religious authority, and rule by unchecked absolute power.","questions":[
    {"type":"mcq","prompt":"A theocracy is a form of government where the country is ruled by the rules of religion and ______.","options":["religious leaders","elected representatives only","the military only","foreign powers"],"answer":"religious leaders","explanation":"Iran, Afghanistan and Vatican City are given as examples of theocracies."},
    {"type":"mcq","prompt":"Which country is described as combining elements of theocratic and democratic governance, with a Supreme Leader selected by Islamic clerics for life?","options":["Iran","Saudi Arabia","Vatican City","Afghanistan"],"answer":"Iran","explanation":"Iran also has an elected president and parliament for everyday governance."},
    {"type":"mcq","prompt":"A dictatorship is a form of government where one person or a small group has absolute power with no limits imposed by a ______.","options":["constitution or law","the people","a legislature","an election"],"answer":"constitution or law","explanation":"This lack of limits is what makes dictatorship especially dangerous for citizens' rights."},
    {"type":"mcq","prompt":"Which dictator was responsible for the Holocaust and the deaths of at least six million Jews?","options":["Adolf Hitler","Idi Amin","Abraham Lincoln","Kanishka"],"answer":"Adolf Hitler","explanation":"He also caused World War II, which resulted in immense loss of life and property."}
  ]},
  {"id":3,"title":"Oligarchy & Comparing Governments","intro":"When a small, powerful few make all the decisions — and how it compares to democracy.","questions":[
    {"type":"mcq","prompt":"The word 'oligarchy' comes from Greek words meaning 'rule by a ______.'","options":["few","king","majority","religious body"],"answer":"few","explanation":"In ancient Greece, some aristocratic families ruled as oligarchies."},
    {"type":"mcq","prompt":"In an oligarchy, who typically makes all the important decisions?","options":["A small, powerful group, often wealthy families or influential people","Every citizen equally","Only the judiciary","A hereditary monarch alone"],"answer":"A small, powerful group, often wealthy families or influential people","explanation":"This differs from both democracy and monarchy."},
    {"type":"truefalse","prompt":"Political commentators have observed that even some democracies can show signs of oligarchy when a small group holds too much influence.","options":["True","False"],"answer":"True","explanation":"This is a reason why citizens must remain vigilant to protect democratic ideals."}
  ]},
  {"id":4,"title":"Boss: The Ruler's Reckoning","intro":"The Throne Keeper tests your mastery of every form of government!","isBoss":true,"bossName":"Throne Keeper","questions":[
    {"type":"mcq","prompt":"Idi Amin was a military dictator in which country, responsible for the killing of thousands of people?","options":["Uganda","Germany","Iran","Saudi Arabia"],"answer":"Uganda","explanation":"Many Indians whose ancestors had migrated to Uganda were forced to flee."},
    {"type":"mcq","prompt":"According to Kautilya's Arthashastra, a ruler's three-fold duties included protection of the state, maintenance of law and order, and ______.","options":["safeguarding the welfare of the people","expanding the empire endlessly","collecting maximum taxes","building the largest army"],"answer":"safeguarding the welfare of the people","explanation":"This ancient text laid out clear expectations for good governance."},
    {"type":"mcq","prompt":"In the Mahabharata's Shanti Parva, Bhishma teaches Yudhishthira that a raja's authority is temporary and bound by ______.","options":["dharma","force","wealth","fear"],"answer":"dharma","explanation":"A raja was expected to place the welfare of his people above all else."},
    {"type":"mcq","prompt":"Why is democracy generally considered a better form of government by most countries today?","options":["It offers universal adult franchise, equality, freedom of speech and separation of powers to its citizens","It requires no elections at all","It gives all power to one ruler","It has no accountability mechanisms"],"answer":"It offers universal adult franchise, equality, freedom of speech and separation of powers to its citizens","explanation":"These features distinguish democracy from monarchy, dictatorship and oligarchy."}
  ]}
]},
{"id":4,"slug":"constituent","title":"Writing India's Constitution","subtitle":"The Constituent Assembly · Ambedkar · Three Sources of Influence","emoji":"📜","gradient":"linear-gradient(135deg,#FBBF24 0%,#92400E 100%)","glow":"#FBBF24","levels":[
  {"id":1,"title":"What is a Constitution?","intro":"A rulebook for an entire nation — carefully written, and carefully preserved.","questions":[
    {"type":"mcq","prompt":"A constitution is a document that spells out a nation's basic ______.","options":["principles and laws","festivals and holidays","trade agreements only","sports rules only"],"answer":"principles and laws","explanation":"It also outlines the roles of government and the rights and duties of citizens."},
    {"type":"mcq","prompt":"The Constitution of India came into effect on 26 January 1950, which is celebrated every year as ______.","options":["Republic Day","Independence Day","Constitution Day","Gandhi Jayanti"],"answer":"Republic Day","explanation":"This marks the day the Constitution came into force."},
    {"type":"mcq","prompt":"The Constitution of India is preserved in a glass case filled with which gas, which does not react with paper or ink?","options":["Helium","Oxygen","Nitrogen","Hydrogen"],"answer":"Helium","explanation":"This helps preserve the original handwritten document over time."}
  ]},
  {"id":2,"title":"The Constituent Assembly","intro":"389 members, three years of work, and one of the world's largest written constitutions.","questions":[
    {"type":"mcq","prompt":"The Constituent Assembly, formed in 1946, initially had how many members before the Partition of India reduced it to 299?","options":["389","100","500","250"],"answer":"389","explanation":"Of these, 15 were women, representing India's diverse regions and social groups."},
    {"type":"mcq","prompt":"Who was the Chairman of the Constituent Assembly?","options":["Dr. Rajendra Prasad","Dr. B.R. Ambedkar","Mahatma Gandhi","Jawaharlal Nehru"],"answer":"Dr. Rajendra Prasad","explanation":"He later became the first President of India."},
    {"type":"mcq","prompt":"Who chaired the Drafting Committee that prepared the initial text of the Constitution?","options":["Dr. B.R. Ambedkar","Dr. Rajendra Prasad","Dr. Sachidananda Sinha","Begum Aizaz Rasul"],"answer":"Dr. B.R. Ambedkar","explanation":"He was an eminent social reformer and independent India's first Law and Justice minister."},
    {"type":"mcq","prompt":"The Constitution was adopted on 26 November 1949 and came into effect on 26 January 1950 — how long did the Constituent Assembly take to develop it?","options":["Almost three years","One month","Ten years","One week"],"answer":"Almost three years","explanation":"It was formed on 9 December 1946, and the drafting work took years of careful deliberation."}
  ]},
  {"id":3,"title":"Three Sources of Influence","intro":"The Constitution drew on India's own struggle, its ancient heritage, and lessons from abroad.","questions":[
    {"type":"mcq","prompt":"Besides India's freedom movement and civilisational heritage, what else influenced the framing of the Constitution?","options":["Useful learnings from the constitutions of other democratic countries","Only the British government's instructions","No outside influence at all","Only religious texts"],"answer":"Useful learnings from the constitutions of other democratic countries","explanation":"The makers studied constitutions of France, USA, UK, Ireland, Australia and others."},
    {"type":"mcq","prompt":"The ideals of 'liberty, equality, fraternity' in the Indian Constitution were adopted from which country's constitution?","options":["France","Ireland","USA","UK"],"answer":"France","explanation":"These ideals trace back to the French Revolution of 1789."},
    {"type":"mcq","prompt":"The idea of the Directive Principles of State Policy was inspired by the constitution of which country?","options":["Ireland","France","USA","UK"],"answer":"Ireland","explanation":"These principles represent long-term goals for governance."},
    {"type":"mcq","prompt":"The concept of an independent judiciary in the Indian Constitution was shaped by which country's constitution?","options":["USA","France","Ireland","Iran"],"answer":"USA","explanation":"An independent judiciary helps ensure fundamental rights are protected."}
  ]},
  {"id":4,"title":"Boss: Keeper of the Assembly","intro":"The Assembly Keeper guards the memory of India's Constitution-makers!","isBoss":true,"bossName":"Assembly Keeper","questions":[
    {"type":"mcq","prompt":"Which Indian civilisational concept, meaning 'the world is one family', is echoed in the values of the Constitution?","options":["Vasudhaiva kutumbakam","Rajadharma","Saptanga","Ashvamedha"],"answer":"Vasudhaiva kutumbakam","explanation":"This ancient idea reflects a spirit of universal fraternity."},
    {"type":"mcq","prompt":"'Fundamental Duties' were included in the Constitution partly inspired by India's own civilisational emphasis on ______.","options":["the duties and role of the people in governance","military conquest","religious conversion","foreign trade"],"answer":"the duties and role of the people in governance","explanation":"This reflects ideas going back to janapadas, sanghas and Kautilya's saptanga."},
    {"type":"mcq","prompt":"Begum Aizaz Rasul, speaking in the Constituent Assembly in 1949, argued that equality for women was not a new concept for India but ______.","options":["an ideal long cherished by India","a foreign idea being imposed","impossible to achieve","only relevant to men"],"answer":"an ideal long cherished by India","explanation":"She said the Constitution affirmed and formalised this long-held ideal."},
    {"type":"mcq","prompt":"The Indian Constitution's text was handwritten by calligrapher Prem Behari Narain Raizada, while its illustrations, from Mohenjo-daro to the freedom movement, were created by ______.","options":["Nandalal Bose and his team","B.R. Ambedkar","Rajendra Prasad","Mahatma Gandhi"],"answer":"Nandalal Bose and his team","explanation":"This makes the Constitution both a legal document and a work of art."}
  ]}
]},
{"id":5,"slug":"rights","title":"Key Features & Rights","subtitle":"Fundamental Rights & Duties · DPSP · A Living Document","emoji":"⚖️","gradient":"linear-gradient(135deg,#38BDF8 0%,#1E3A8A 100%)","glow":"#38BDF8","levels":[
  {"id":1,"title":"Rights, Duties & DPSP","intro":"Some promises must be kept immediately — others are goals for the country to grow into.","questions":[
    {"type":"mcq","prompt":"Fundamental Rights are described as promises that must be kept — if violated, a citizen can go to ______.","options":["court","the Prime Minister directly","the legislature only","no one"],"answer":"court","explanation":"A judge can help enforce these rights when they are violated."},
    {"type":"mcq","prompt":"The Directive Principles of State Policy (DPSP) are best described as ______ for the government to follow, rather than strict enforceable rules.","options":["guidelines/goals","punishments","taxes","elections"],"answer":"guidelines/goals","explanation":"They reflect the social and economic vision the framers had for India."},
    {"type":"mcq","prompt":"Which of these is an example of a Fundamental Duty listed in the Constitution?","options":["To value and preserve the rich heritage of our composite culture","To pay the maximum possible tax","To always agree with the government","To avoid voting in elections"],"answer":"To value and preserve the rich heritage of our composite culture","explanation":"Fundamental Duties call on citizens to actively support the country's wellbeing."}
  ]},
  {"id":2,"title":"Three-Tier Government","intro":"Central, state and local — India's governance operates at three interlocking levels.","questions":[
    {"type":"mcq","prompt":"India has a three-tier system of government — central, state and ______.","options":["local (Panchayati Raj system)","military","religious","international"],"answer":"local (Panchayati Raj system)","explanation":"Each tier handles different responsibilities."},
    {"type":"mcq","prompt":"Which body ensures that all laws made are in accordance with the Constitution?","options":["The judiciary","The executive only","The legislature only","The electorate only"],"answer":"The judiciary","explanation":"It also decides whether a law has been broken and the resulting punishment."},
    {"type":"truefalse","prompt":"Some functions and responsibilities are reserved for the central government, and others are assigned to state governments.","options":["True","False"],"answer":"True","explanation":"This division of responsibility is a key part of India's federal structure."}
  ]},
  {"id":3,"title":"A Living Document","intro":"The Constitution has grown and changed since 1950 — always through careful, deliberate process.","questions":[
    {"type":"mcq","prompt":"Changes to the Constitution are called ______, and they are rigorously debated in Parliament before being accepted.","options":["amendments","edicts","ordinances","decrees"],"answer":"amendments","explanation":"Some amendments also require debate in state legislative assemblies."},
    {"type":"mcq","prompt":"The Panchayati Raj System was integrated into the Constitution through which amendment in 1992?","options":["The 73rd Constitutional Amendment Act","The 42nd Constitutional Amendment Act","The 1st Constitutional Amendment Act","The 100th Constitutional Amendment Act"],"answer":"The 73rd Constitutional Amendment Act","explanation":"It was not part of the original 1950 Constitution."},
    {"type":"mcq","prompt":"In 2004, the Supreme Court ruled that flying the national flag at one's home is part of which Fundamental Right?","options":["Freedom of Expression","Right to Property","Right to Equality","Right against Exploitation"],"answer":"Freedom of Expression","explanation":"A citizen had challenged the earlier restriction in court."}
  ]},
  {"id":4,"title":"Boss: Trial of the Living Document","intro":"The Amendment Sentinel puts your understanding of the Constitution's growth to the test!","isBoss":true,"bossName":"Amendment Sentinel","questions":[
    {"type":"mcq","prompt":"'Part IV-A: Fundamental Duties' was added to the Constitution in which year?","options":["1976","1950","1992","2004"],"answer":"1976","explanation":"This shows how the Constitution continues to evolve."},
    {"type":"mcq","prompt":"When the Constitution came into effect in 1950, it had 22 Parts and 8 schedules. How many parts and schedules does it have today?","options":["25 Parts and 12 schedules","22 Parts and 8 schedules (unchanged)","10 Parts and 5 schedules","50 Parts and 20 schedules"],"answer":"25 Parts and 12 schedules","explanation":"It has grown over time through amendments, making it the world's largest written constitution."},
    {"type":"truefalse","prompt":"The Indian Constitution is the world's largest written constitution.","options":["True","False"],"answer":"True","explanation":"Its comprehensive scope reflects the complexity and diversity of India."},
    {"type":"mcq","prompt":"Why is the Indian Constitution described as a 'living document'?","options":["It can be amended and improved as the country's needs change over time","It cannot ever be changed","It only applies to one generation","It has never been amended since 1950"],"answer":"It can be amended and improved as the country's needs change over time","explanation":"This flexibility allows it to remain relevant decades after it was written."}
  ]}
]},
{"id":6,"slug":"preamble","title":"The Preamble","subtitle":"Sovereign, Socialist, Secular · Justice, Liberty, Equality, Fraternity","emoji":"📖","gradient":"linear-gradient(135deg,#A78BFA 0%,#4C1D95 100%)","glow":"#A78BFA","levels":[
  {"id":1,"title":"Sovereign, Socialist & Secular","intro":"The Preamble's opening words carry deep meaning, one term at a time.","questions":[
    {"type":"mcq","prompt":"'Sovereign' in the Preamble means that the people have the supreme right to make decisions, and ______.","options":["no external power can dictate the government of India","only the king can make decisions","foreign countries control India's laws","the judiciary has no power"],"answer":"no external power can dictate the government of India","explanation":"This applies to both internal and external matters."},
    {"type":"mcq","prompt":"'Secular' in the Preamble means citizens have complete freedom to follow any religion, and the government ______.","options":["treats all religious beliefs with equal respect and has no official religion","promotes one official religion","bans all religions","favours only one religion"],"answer":"treats all religious beliefs with equal respect and has no official religion","explanation":"This ensures fairness across India's many faiths."},
    {"type":"mcq","prompt":"The terms 'Socialist', 'Secular' and 'Integrity' were added to the Preamble through which amendment in 1976?","options":["The 42nd Constitutional Amendment","The 73rd Constitutional Amendment","The 1st Constitutional Amendment","The 100th Constitutional Amendment"],"answer":"The 42nd Constitutional Amendment","explanation":"This shows how even the Preamble itself has evolved."}
  ]},
  {"id":2,"title":"Democratic & Republic","intro":"Two words that define how power is chosen and held accountable in India.","questions":[
    {"type":"mcq","prompt":"'Democratic' in the Preamble means people enjoy equal political rights, elect their rulers, and ______.","options":["hold them accountable","never question them","have no say in government","are ruled by a king"],"answer":"hold them accountable","explanation":"The government is run according to basic rules that everyone must follow."},
    {"type":"mcq","prompt":"'Republic' in the Preamble means the head of state is ______.","options":["an elected person, not a hereditary position","always a king","chosen by a religious leader","selected by a foreign power"],"answer":"an elected person, not a hereditary position","explanation":"This distinguishes India's system from a monarchy."},
    {"type":"mcq","prompt":"According to the Preamble, the Constitution has been drawn up and enacted by the people through their ______, not handed down by a king.","options":["representatives","army","religious leaders","foreign rulers"],"answer":"representatives","explanation":"This reflects the Constituent Assembly's democratic origins."}
  ]},
  {"id":3,"title":"Justice, Liberty, Equality & Fraternity","intro":"Four values that together define how India's citizens should treat one another.","questions":[
    {"type":"mcq","prompt":"'Justice' in the Preamble means citizens cannot be discriminated against on grounds of ______, and social inequalities have to be reduced.","options":["caste, religion and gender","height and weight","favourite sport","place of birth alone"],"answer":"caste, religion and gender","explanation":"The government is expected to work for the welfare of all, especially disadvantaged groups."},
    {"type":"mcq","prompt":"'Liberty' in the Preamble means there are no unreasonable restrictions on what citizens ______.","options":["think, express and act upon","must believe","must wear","must eat"],"answer":"think, express and act upon","explanation":"Citizens have freedom in their thoughts, expression and actions, within reasonable limits."},
    {"type":"mcq","prompt":"'Fraternity' in the Preamble means all citizens should behave as if they are members of the same ______, without treating anyone as inferior.","options":["family","army","political party","religion"],"answer":"family","explanation":"This value encourages unity and mutual respect among all Indians."},
    {"type":"mcq","prompt":"'Equality' in the Preamble means all are equal before the law, and the government should ensure ______.","options":["equal opportunity for all","special treatment for the wealthy","privileges for a few","no opportunities at all"],"answer":"equal opportunity for all","explanation":"Social inequalities are meant to be ended under this principle."}
  ]},
  {"id":4,"title":"Boss: Voice of the Preamble","intro":"The final challenge! The Preamble Oracle tests your mastery of the Constitution's guiding values.","isBoss":true,"bossName":"Preamble Oracle","questions":[
    {"type":"mcq","prompt":"How many key values are named in the Preamble of the Indian Constitution — Sovereign, Socialist, Secular, Democratic, Republic, Justice, Liberty, Equality and Fraternity?","options":["Nine","Five","Twelve","Three"],"answer":"Nine","explanation":"Together, these values capture the essence of the entire Constitution."},
    {"type":"mcq","prompt":"What is the overall purpose of studying the Preamble, according to the chapter?","options":["It captures the essence of the Constitution's guiding values in one place","It lists every law in India","It replaces the need for a judiciary","It only applies to government officials"],"answer":"It captures the essence of the Constitution's guiding values in one place","explanation":"These guiding values appear across the whole Constitution, but the Preamble states them concisely."},
    {"type":"mcq","prompt":"'Socialist' in the Preamble means wealth is generated socially and should be ______.","options":["shared by society","kept only by the wealthy","controlled by a monarch","ignored by government"],"answer":"shared by society","explanation":"Government is expected to regulate land and industry to reduce inequalities."},
    {"type":"mcq","prompt":"What overall lesson does the chapter draw about the Constitution of India, decades after it was written?","options":["It remains a living, relevant document that guides the country's values and institutions today","It is outdated and no longer used","It was written by a single person","It has never needed any explanation"],"answer":"It remains a living, relevant document that guides the country's values and institutions today","explanation":"Its ability to be amended keeps it relevant to a changing nation."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.GV_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.GV_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['⚖️','🗳️','📜','🏛️','🕊️','👩‍⚖️'];

/* ============================== STATE ============================== */
const STORE_KEY = 'governance-quest-v1';
function defaultState(){ return {avatar:'⚖️', name:'Citizen', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldGv(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('gv', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedGv(i){
  const active = activeUnreviewedWorldGv();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewGv(i){
  const active = activeUnreviewedWorldGv();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewGv = ()=>{
  const active = activeUnreviewedWorldGv();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'gv',
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
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(96,165,250,0.55))">
    <defs>
      <radialGradient id="mScale" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#DBEAFE"/><stop offset="60%" stop-color="#93C5FD"/><stop offset="100%" stop-color="#1D4ED8"/>
      </radialGradient>
      <radialGradient id="mGlowGv" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#BFDBFE" stop-opacity="0.7"/><stop offset="100%" stop-color="#BFDBFE" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowGv)"/>
    <rect x="24" y="20" width="52" height="66" rx="10" fill="url(#mScale)"/>
    <path d="M50 20 L50 86" stroke="#1D4ED8" stroke-width="1.5" opacity="0.4"/>
    <ellipse cx="40" cy="55" rx="4" ry="${sad?2:5}" fill="#1b2a3a"/>
    <ellipse cx="60" cy="55" rx="4" ry="${sad?2:5}" fill="#1b2a3a"/>
    <circle cx="41.5" cy="53.5" r="1.2" fill="white"/>
    <circle cx="61.5" cy="53.5" r="1.2" fill="white"/>
    ${mouth}
    <circle cx="34" cy="65" r="3" fill="#fbbf24" opacity="0.6"/>
    <circle cx="66" cy="65" r="3" fill="#fbbf24" opacity="0.6"/>
  </svg>`;
}

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
function nav(hash){ location.hash = hash; }
if(window.__gvHashListener) window.removeEventListener('hashchange', window.__gvHashListener);
window.__gvHashListener = function(){ if(!location.hash.startsWith('#/gv')) return; render(); };
window.addEventListener('hashchange', window.__gvHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/gv\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='⚖️';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">The republic calls</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Master the art of <span class="text-gradient-aurora">governance and democracy.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From ancient republics to modern monarchies, from the Constituent Assembly to the Preamble itself — six worlds explore how nations govern themselves.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Take your oath →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Citizen</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Citizen" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter the Assembly →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Citizen', avatar); render(); };
  draw();
}

/* ---------------- HOME (Adventure Map) ---------------- */
function renderHome(){
  const lv = levelNum(STATE.xp), frac = levelFrac(STATE.xp);
  const lessonsDone = Object.values(STATE.progress).filter(p=>p.stars>0).length;
  app.innerHTML = `${Nav()}<main>
    <div class="glass-strong rounded-3xl" style="padding:18px;display:flex;align-items:center;gap:16px">
      <div style="font-size:44px;width:60px;height:60px;border-radius:16px;background:#60a5fa33;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px -6px #60a5fa88">${STATE.avatar}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Citizen of the Republic</div>
        <div class="font-display" style="font-size:22px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${STATE.name}</div>
        <div class="progress-track" style="margin-top:6px;height:8px"><div class="progress-fill" style="width:${frac*100}%"></div></div>
      </div>
      <div style="text-align:right">
        <div class="pillbox" style="background:#60a5fa33;border:1px solid #60a5fa55">Lv ${lv}</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Nyaya</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to explore how nations govern themselves?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedGv(i);
        const needsReview = worldNeedsReviewGv(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/gv/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewGv();return false;"` : '';
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
      <span>Governance and Democracy</span>
    </div>
  </main>`;
  window.__resetAll = resetSave;
}

/* ---------------- WORLD (level select) ---------------- */
function renderWorld(slug){
  const w = WORLDS.find(w=>w.slug===slug);
  if(!w){ nav('#/gv/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedGv(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/gv/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/gv/lesson/'+w.id+'/'+lv.id:'#'}">
          <div class="lesson-icon" style="${lv.isBoss?'background:#f26d6d55;box-shadow:0 0 20px -4px #f26d6d':'background:linear-gradient(135deg,'+(w.gradient.match(/#\\w+/g)?.[0]||'#60a5fa')+'55, transparent)'}">${lv.isBoss?'👹':lv.id}</div>
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
  if(!w||!lv){ nav('#/gv/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedGv(wIdx)){ renderHome(); return; }
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
        <a href="#/gv/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/gv/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/gv/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/gv/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('gv', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['gv'] = { init: gvInit };
