function cvInit(){

/* ============================== DATA ============================== */
const WORLDS = [{"id":1,"slug":"franchise","title":"Universal Franchise","subtitle":"One Person, One Equal Vote","emoji":"🗳️","gradient":"linear-gradient(135deg,#3B82F6 0%,#8B5CF6 100%)","glow":"#3B82F6","levels":[{"id":1,"title":"What is Franchise?","intro":"Every adult Indian gets one vote — and every vote counts the same. Let's learn what that really means.","questions":[{"xp":12,"id":"1-1-1","type":"ballot","prompt":"What is 'universal adult franchise'?","options":["Only the rich can vote","Every adult citizen gets one equal vote","Only educated citizens can vote","Voting is optional for certain castes"],"answer":"Every adult citizen gets one equal vote","explanation":"It means every adult citizen — regardless of caste, creed, religion, gender, education or income — has one equal vote."},{"xp":12,"id":"1-1-2","type":"mcq","prompt":"The right to vote for Lok Sabha and state elections comes from which Article of the Constitution?","options":["Article 21","Article 326","Article 370","Article 44"],"answer":"Article 326","explanation":"Article 326 of the Constitution guarantees universal adult franchise."},{"xp":12,"id":"1-1-3","type":"truefalse","prompt":"You can ask a trusted friend to vote on your behalf if you're busy.","options":["True","False"],"answer":"False","explanation":"No one can vote on another's behalf — each citizen must cast their own vote."},{"xp":12,"id":"1-1-4","type":"fill","prompt":"Every Indian citizen aged ___ and above has the right to vote.","options":["16","18","21","25"],"answer":"18","explanation":"India lowered the voting age from 21 to 18 in 1988."}]},{"id":2,"title":"Winning the Right to Vote","intro":"Universal franchise wasn't always guaranteed. Here's how India compares to the rest of the world.","questions":[{"xp":12,"id":"1-2-1","type":"mcq","prompt":"Before Independence, what percentage of Indians were allowed to vote?","options":["13%","50%","75%","100%"],"answer":"13%","explanation":"Only about 13% of Indians could vote before Independence — franchise was far from universal."},{"xp":12,"id":"1-2-2","type":"mcq","prompt":"India gave women the right to vote from the very beginning of the Constitution. Switzerland only gave women that right in:","options":["1947","1950","1971","1990"],"answer":"1971","explanation":"India was ahead of many nations — Switzerland only granted women's suffrage in 1971."},{"xp":12,"id":"1-2-3","type":"truefalse","prompt":"In 1947, India's literacy rate was only about 14%, yet the Constitution makers still chose universal adult franchise over literacy-based voting.","options":["True","False"],"answer":"True","explanation":"Despite low literacy, the Constitution makers trusted every citizen with an equal vote."}]},{"id":3,"title":"Numbers That Matter","intro":"India's elections are the largest democratic exercise on Earth. Let's look at the scale.","questions":[{"xp":12,"id":"1-3-1","type":"mcq","prompt":"About how many voters were eligible in India's 2024 general election?","options":["98 million","400 million","980 million","2 billion"],"answer":"980 million","explanation":"About 980 million voters were eligible for the 2024 Lok Sabha elections."},{"xp":12,"id":"1-3-2","type":"ballot","prompt":"How many parliamentary constituencies does India have for the Lok Sabha?","options":["245","350","543","750"],"answer":"543","explanation":"India is divided into 543 Lok Sabha constituencies."},{"xp":12,"id":"1-3-3","type":"truefalse","prompt":"About 34% of eligible voters did not vote in the 2024 elections.","options":["True","False"],"answer":"True","explanation":"Roughly a third of eligible voters stayed home in 2024 — a real challenge for Indian democracy."}]},{"id":4,"title":"Why Every Vote Matters","intro":"Universal franchise isn't just a rule — it's the foundation democracy stands on.","questions":[{"xp":12,"id":"1-4-1","type":"tap","prompt":"Tap every reason universal adult franchise matters.","options":["Everyone is treated as equal","No discrimination by caste, wealth or education","Elected leaders answer to voters","Only the wealthy decide the future","People help solve local problems"],"answer":["Everyone is treated as equal","No discrimination by caste, wealth or education","Elected leaders answer to voters","People help solve local problems"],"explanation":"Universal franchise ensures equality, accountability and participation for every citizen."},{"xp":12,"id":"1-4-2","type":"ballot","prompt":"What happens to elected representatives if voters are unhappy with them?","options":["Nothing, ever","Voters can vote them out in the next election","They rule for life","Only the courts can remove them"],"answer":"Voters can vote them out in the next election","explanation":"Regular elections keep representatives answerable to the people who elected them."}]},{"id":5,"title":"Boss: The Excluder","intro":"The Excluder wants only the 'right' people to vote. Prove that every citizen's voice counts equally!","isBoss":true,"bossName":"The Excluder","questions":[{"xp":12,"id":"1-5-1","type":"ballot","prompt":"Universal adult franchise means every citizen's vote:","options":["Counts differently based on income","Counts equally, regardless of background","Only counts in local elections","Is optional for minorities"],"answer":"Counts equally, regardless of background","explanation":"That's the core of universal franchise — one person, one equal vote."},{"xp":12,"id":"1-5-2","type":"mcq","prompt":"The minimum voting age in India was changed from 21 to 18 in:","options":["1950","1988","2000","2019"],"answer":"1988","explanation":"The Constitution's voting age was lowered to 18 in 1988."},{"xp":12,"id":"1-5-3","type":"tap","prompt":"Tap every group that CANNOT be denied the right to vote under universal franchise.","options":["Women","The poor","People without formal education","Only landowners","Religious minorities"],"answer":["Women","The poor","People without formal education","Religious minorities"],"explanation":"Universal franchise excludes no one by caste, creed, gender, education, or income."}]}]},{"id":2,"slug":"access","title":"Every Vote Counts","subtitle":"Access · Secrecy · Fair Counting","emoji":"🎫","gradient":"linear-gradient(135deg,#14B8A6 0%,#22D3EE 100%)","glow":"#14B8A6","levels":[{"id":1,"title":"No Voter Left Behind","intro":"The Election Commission works hard to make sure no citizen is left out — however far away or however they vote.","questions":[{"xp":12,"id":"2-1-1","type":"tap","prompt":"Tap every accessibility measure the ECI has introduced.","options":["Postal voting for specific voters","Home voting for the elderly and disabled (from 2024)","Braille-enabled voter cards","Charging voters a fee to vote","Wheelchair and ramp assistance at booths"],"answer":["Postal voting for specific voters","Home voting for the elderly and disabled (from 2024)","Braille-enabled voter cards","Wheelchair and ramp assistance at booths"],"explanation":"The ECI has taken many innovative steps so no eligible voter is left behind."},{"xp":12,"id":"2-1-2","type":"truefalse","prompt":"2024 was the first year the elderly and people with disabilities could vote from home in India.","options":["True","False"],"answer":"True","explanation":"This accessibility option was introduced for the first time in the 2024 general election."},{"xp":12,"id":"2-1-3","type":"mcq","prompt":"Why does India's size and diversity make organising elections especially challenging?","options":["It doesn't — India is a small country","India's voter population and area are far larger than most nations, and very geographically diverse","Elections are only held in cities","There is only one language to manage"],"answer":"India's voter population and area are far larger than most nations, and very geographically diverse","explanation":"India's eligible voters outnumber the UK's population 15 times over, and its area is six times that of France."}]},{"id":2,"title":"Election Day at Suryodaya School","intro":"Three classmates — Ahmed, Gurmat and Ravi — are running for Class Representative. Let's watch democracy in action.","questions":[{"xp":12,"id":"2-2-1","type":"mcq","prompt":"What did Ms. Usha, the class teacher, do during the election?","options":["She picked the winner herself","She was appointed Election Officer to keep the process fair","She voted twice","She cancelled the election"],"answer":"She was appointed Election Officer to keep the process fair","explanation":"Ms. Usha ensured the election followed fair, transparent rules — just like a real Returning Officer."},{"xp":12,"id":"2-2-2","type":"truefalse","prompt":"In a secret ballot, no one is supposed to know who voted for whom.","options":["True","False"],"answer":"True","explanation":"Secret ballots protect voters from pressure or retaliation by keeping their choice private."},{"xp":12,"id":"2-2-3","type":"mcq","prompt":"How did Ms. Usha make sure Neha, a visually impaired student, could vote independently?","options":["She voted for Neha","She provided a ballot paper in braille","She skipped Neha's vote","She asked another student to vote for Neha"],"answer":"She provided a ballot paper in braille","explanation":"A braille ballot paper let Neha cast her own vote independently and in secret."}]},{"id":3,"title":"Counting the Votes","intro":"33 votes were cast for Class Rep. Let's see who won — and why the rules matter.","questions":[{"xp":12,"id":"2-3-1","type":"mcq","prompt":"Gurmat won the Class Rep election with only 12 of 33 votes. Which electoral system allows a winner without a majority?","options":["Proportional representation","First-Past-the-Post","Single transferable vote","Electoral college"],"answer":"First-Past-the-Post","explanation":"Under First-Past-the-Post, the candidate with the most votes wins — even without 50%+ support."},{"xp":12,"id":"2-3-2","type":"mcq","prompt":"One ballot paper was left unmarked. What happened to it during counting?","options":["It was counted for the leading candidate","It was declared invalid","It was given to Ms. Usha to decide","The election was cancelled"],"answer":"It was declared invalid","explanation":"An unmarked ballot cannot show voter intent, so it's excluded from the count as invalid."},{"xp":12,"id":"2-3-3","type":"mcq","prompt":"What does the NOTA option on a ballot let a voter do?","options":["Vote for two candidates at once","Reject all candidates without changing the result","Cancel the entire election","Get a refund"],"answer":"Reject all candidates without changing the result","explanation":"NOTA ('None Of The Above') lets voters register dissatisfaction, though it doesn't change who wins."}]},{"id":4,"title":"Uttaramerur's Ancient Ballot","intro":"Long before ballot boxes, a South Indian village had its own clever way to choose leaders fairly.","questions":[{"xp":12,"id":"2-4-1","type":"mcq","prompt":"The 10th-century Uttaramerur inscriptions describe choosing village representatives by:","options":["Hereditary succession","Randomly drawing names from a sealed pot","Royal appointment","A show of hands"],"answer":"Randomly drawing names from a sealed pot","explanation":"Names were written on palm leaves, sealed in a pot, and drawn publicly by a young boy — a remarkably transparent process."},{"xp":12,"id":"2-4-2","type":"truefalse","prompt":"The Uttaramerur selection process was designed to be seen as transparent and fair by the public.","options":["True","False"],"answer":"True","explanation":"The pot was opened publicly, and an individual showed empty hands before reading names — visible fairness."}]},{"id":5,"title":"Boss: The Silent Voter","intro":"The Silent Voter convinces people their vote doesn't matter. Show why every accessible, secret, counted vote matters!","isBoss":true,"bossName":"The Silent Voter","questions":[{"xp":12,"id":"2-5-1","type":"ballot","prompt":"What is the main purpose of a secret ballot?","options":["To make voting faster","To protect voters from pressure or intimidation","To help count votes quicker","To identify who voted for whom"],"answer":"To protect voters from pressure or intimidation","explanation":"Secrecy protects voters' freedom to choose without fear."},{"xp":12,"id":"2-5-2","type":"tap","prompt":"Tap every measure that helps 'no voter is left behind'.","options":["Braille ballots","Home voting for elderly/disabled","Postal voting","Making voting compulsory with fines","Wheelchair assistance"],"answer":["Braille ballots","Home voting for elderly/disabled","Postal voting","Wheelchair assistance"],"explanation":"These are the real accessibility measures the ECI introduced — voting isn't compulsory in India."},{"xp":12,"id":"2-5-3","type":"mcq","prompt":"Which historic Indian practice already showed a commitment to transparent elections centuries ago?","options":["The Uttaramerur inscriptions","The Mughal mansabdari system","The zamindari system","The jizya tax"],"answer":"The Uttaramerur inscriptions","explanation":"This 10th-century South Indian village system publicly and transparently selected representatives."}]}]},{"id":3,"slug":"eci","title":"Meet the ECI","subtitle":"The Referee of Indian Democracy","emoji":"🏛️","gradient":"linear-gradient(135deg,#F59E0B 0%,#FBBF24 100%)","glow":"#F59E0B","levels":[{"id":1,"title":"Who Runs the Elections?","intro":"One institution manages India's massive elections from top to bottom. Meet the Election Commission of India.","questions":[{"xp":12,"id":"3-1-1","type":"mcq","prompt":"The Election Commission of India (ECI) was established in:","options":["1947","1950","1951","1962"],"answer":"1950","explanation":"The ECI was established in 1950, an independent constitutional body."},{"xp":12,"id":"3-1-2","type":"tap","prompt":"Tap every election the ECI conducts.","options":["Lok Sabha","Rajya Sabha","State Legislative Assemblies","President & Vice President","Gram Panchayat elections directly"],"answer":["Lok Sabha","Rajya Sabha","State Legislative Assemblies","President & Vice President"],"explanation":"Gram panchayat and urban local body elections are managed by State Election Commissions, not the ECI."},{"xp":12,"id":"3-1-3","type":"truefalse","prompt":"India's first general election under the Constitution was held in 1951–52.","options":["True","False"],"answer":"True","explanation":"The first general elections in independent India took place in 1951–1952."}]},{"id":2,"title":"Three Levels of Officers","intro":"Running an election this size takes officers at every level — national, state and district.","questions":[{"xp":12,"id":"3-2-1","type":"mcq","prompt":"At the national level, the ECI is headed by the Chief Election Commissioner plus how many other Election Commissioners?","options":["One","Two","Three","Five"],"answer":"Two","explanation":"The ECI at the national level has a Chief Election Commissioner and two Election Commissioners."},{"xp":12,"id":"3-2-2","type":"sort","prompt":"Sort each officer to their level.","buckets":[{"id":"nat","label":"National","emoji":"🏛️"},{"id":"state","label":"State/UT","emoji":"🗺️"},{"id":"dist","label":"District","emoji":"📍"}],"items":[{"label":"Chief Election Commissioner","bucket":"nat","emoji":"👤"},{"label":"Chief Electoral Officer","bucket":"state","emoji":"👤"},{"label":"District Election Officer","bucket":"dist","emoji":"👤"},{"label":"Returning Officer","bucket":"dist","emoji":"👤"}],"explanation":"Elections are organised through a chain of officers from Delhi down to each district."},{"xp":12,"id":"3-2-3","type":"mcq","prompt":"Who manages the voter list at the constituency level?","options":["The Prime Minister","The Electoral Registration Officer (ERO)","The Chief Justice","A political party"],"answer":"The Electoral Registration Officer (ERO)","explanation":"EROs manage voter lists, while Returning Officers actually conduct the elections."}]},{"id":3,"title":"The Rulebook","intro":"Free and fair elections need rules everyone follows. Meet the Model Code of Conduct — and the man who made it stick.","questions":[{"xp":12,"id":"3-3-1","type":"mcq","prompt":"The Model Code of Conduct (MCC) lists the dos and don'ts for:","options":["Only voters","Leaders, political parties and candidates","Only the media","Only the ECI staff"],"answer":"Leaders, political parties and candidates","explanation":"The MCC keeps campaigning fair for everyone contesting or supporting an election."},{"xp":12,"id":"3-3-2","type":"truefalse","prompt":"Under the MCC, the ruling government cannot announce new schemes that might influence voters right before an election.","options":["True","False"],"answer":"True","explanation":"This rule stops the party in power from misusing government resources to sway voters."},{"xp":12,"id":"3-3-3","type":"mcq","prompt":"T.N. Seshan, Chief Election Commissioner from 1990, is remembered for:","options":["Cancelling all elections","Reforms like voter IDs and strict spending vigilance","Removing the ECI entirely","Reducing the voting age to 15"],"answer":"Reforms like voter IDs and strict spending vigilance","explanation":"Seshan's reforms — including voter IDs to stop proxy voting — made Indian elections fairer and more transparent."}]},{"id":4,"title":"Casting Your Vote","intro":"Ever wondered what actually happens when you walk into a polling booth? Follow the steps.","questions":[{"xp":12,"id":"3-4-1","type":"order","prompt":"Put the voting process in the correct order.","steps":["Polling officer checks your name and ID proof","Your finger is inked and you sign the register","Your ballot chit is checked at the EVM","You press the button and hear a beep — vote cast"],"explanation":"Each of the three polling officers has a distinct role before you finally cast your vote."},{"xp":12,"id":"3-4-2","type":"mcq","prompt":"What does VVPAT let a voter do?","options":["Vote twice","Verify their electronic vote was recorded correctly via a paper slip","Change their vote after casting it","Skip the ID check"],"answer":"Verify their electronic vote was recorded correctly via a paper slip","explanation":"The Voter Verifiable Paper Audit Trail gives a physical backup for verification and recounts."},{"xp":12,"id":"3-4-3","type":"mcq","prompt":"How many Lok Sabha seats are reserved for Scheduled Castes and Scheduled Tribes combined?","options":["47","84","131","200"],"answer":"131","explanation":"84 seats are reserved for Scheduled Castes and 47 for Scheduled Tribes — 131 in total."}]},{"id":5,"title":"Boss: The Rule Breaker","intro":"The Rule Breaker bends every election rule for personal gain. Enforce the Code!","isBoss":true,"bossName":"The Rule Breaker","questions":[{"xp":12,"id":"3-5-1","type":"ballot","prompt":"Which body enforces the Model Code of Conduct?","options":["The Supreme Court only","The Election Commission of India","The Prime Minister's Office","State police alone"],"answer":"The Election Commission of India","explanation":"The ECI monitors and enforces the MCC throughout the election period."},{"xp":12,"id":"3-5-2","type":"truefalse","prompt":"Offering gifts to voters in exchange for votes is punishable under election law.","options":["True","False"],"answer":"True","explanation":"Influencing voters through gifts or money is a clear violation of the Model Code of Conduct."},{"xp":12,"id":"3-5-3","type":"mcq","prompt":"What was one of T.N. Seshan's key reforms as Chief Election Commissioner?","options":["Abolishing the ECI","Introducing voter photo ID cards","Ending the Model Code of Conduct","Making elections indirect"],"answer":"Introducing voter photo ID cards","explanation":"Voter IDs helped eliminate proxy voting and improved election integrity."}]}]},{"id":4,"slug":"representatives","title":"Who Gets Elected","subtitle":"Lok Sabha · Rajya Sabha · President","emoji":"⚖️","gradient":"linear-gradient(135deg,#EF4444 0%,#F59E0B 100%)","glow":"#EF4444","levels":[{"id":1,"title":"Lok Sabha & State Assemblies","intro":"From your constituency to Parliament — here's how India chooses MPs and MLAs.","questions":[{"xp":12,"id":"4-1-1","type":"mcq","prompt":"Members elected to the Lok Sabha are called:","options":["MLAs","MPs","Councillors","Sarpanchs"],"answer":"MPs","explanation":"MPs (Members of Parliament) represent constituencies in the Lok Sabha."},{"xp":12,"id":"4-1-2","type":"mcq","prompt":"India uses which electoral system for Lok Sabha and State Assembly elections?","options":["Proportional representation","First-Past-the-Post","Single transferable vote","Electoral college"],"answer":"First-Past-the-Post","explanation":"The candidate with the most votes in a constituency wins — even without a majority."},{"xp":12,"id":"4-1-3","type":"mcq","prompt":"Who typically becomes Prime Minister after a Lok Sabha election?","options":["The oldest MP","The leader of the party/coalition with a majority of seats","The President's personal choice","The Chief Election Commissioner"],"answer":"The leader of the party/coalition with a majority of seats","explanation":"The majority party or coalition forms the government, and its leader becomes PM."}]},{"id":2,"title":"The Council of States","intro":"Not every house of Parliament is directly elected. Meet the Rajya Sabha.","questions":[{"xp":12,"id":"4-2-1","type":"mcq","prompt":"How many total members does the Rajya Sabha have?","options":["245","350","543","33"],"answer":"245","explanation":"Of the Rajya Sabha's 245 members, 233 are elected by MLAs and 12 are nominated by the President."},{"xp":12,"id":"4-2-2","type":"mcq","prompt":"Rajya Sabha members are elected using which voting method?","options":["First-Past-the-Post","Single transferable vote","Direct popular vote","Lottery"],"answer":"Single transferable vote","explanation":"MLAs rank candidates by preference under the single transferable vote system, helping smaller states get fair representation."},{"xp":12,"id":"4-2-3","type":"truefalse","prompt":"The Rajya Sabha is a permanent body that is never fully dissolved — one-third of its members retire every two years.","options":["True","False"],"answer":"True","explanation":"That's why it's sometimes called the 'Permanent House' of Parliament."}]},{"id":3,"title":"Electing the President & VP","intro":"The President isn't voted for directly by citizens. Here's who actually chooses them.","questions":[{"xp":12,"id":"4-3-1","type":"mcq","prompt":"Who is part of the Electoral College that elects the President of India?","options":["Only MPs","Only MLAs","MPs from both Houses of Parliament and MLAs from the states","All Indian citizens directly"],"answer":"MPs from both Houses of Parliament and MLAs from the states","explanation":"This mix ensures the President has support from both the central and state governments."},{"xp":12,"id":"4-3-2","type":"mcq","prompt":"Which voting system is used to elect the President?","options":["First-Past-the-Post","Single transferable vote","Direct popular ballot","Sortition (random draw)"],"answer":"Single transferable vote","explanation":"The single transferable vote system is used, giving more populous states a greater say."},{"xp":12,"id":"4-3-3","type":"truefalse","prompt":"Nominated members of the Rajya Sabha are allowed to vote in the President's election.","options":["True","False"],"answer":"False","explanation":"Nominated members of the Rajya Sabha and state assemblies are excluded — only directly elected representatives vote."}]},{"id":4,"title":"Democracy's Road Ahead","intro":"India's elections are the world's largest democratic exercise — but real challenges remain.","questions":[{"xp":12,"id":"4-4-1","type":"tap","prompt":"Tap every challenge facing India's electoral system today.","options":["Growing influence of money in elections","Candidates with criminal records","Voter apathy in urban areas","Too many polling stations","Declining trust because elections happen too rarely"],"answer":["Growing influence of money in elections","Candidates with criminal records","Voter apathy in urban areas"],"explanation":"These are the real challenges named in the chapter — polling-station count and election frequency aren't the issue."},{"xp":12,"id":"4-4-2","type":"mcq","prompt":"What does the chapter suggest is the strongest safeguard of a healthy democracy?","options":["More police at polling booths","An aware and vigilant voter","Cancelling elections with low turnout","Reducing the number of candidates"],"answer":"An aware and vigilant voter","explanation":"Informed, engaged voters are described as democracy's strongest safeguard."}]},{"id":5,"title":"Final Boss: The Vote Buyer","intro":"The final trial! The Vote Buyer thinks money and manipulation can beat democracy. Prove everything you've learned about India's electoral system.","isBoss":true,"bossName":"The Vote Buyer","questions":[{"xp":12,"id":"4-5-1","type":"ballot","prompt":"What keeps an elected government accountable between elections?","options":["Nothing — they rule freely","Regular elections and universal franchise","Only the Supreme Court","Foreign governments"],"answer":"Regular elections and universal franchise","explanation":"Periodic elections under universal franchise let citizens hold leaders accountable."},{"xp":12,"id":"4-5-2","type":"mcq","prompt":"Which system does India use for Lok Sabha elections, allowing a winner without a majority of votes?","options":["Single transferable vote","First-Past-the-Post","Proportional representation","Electoral college"],"answer":"First-Past-the-Post","explanation":"FPTP means the candidate with the most votes wins, majority or not."},{"xp":12,"id":"4-5-3","type":"mcq","prompt":"The Election Commission of India was established in which year, and conducts elections up to which highest office?","options":["1947 — Prime Minister","1950 — President and Vice President","1962 — Supreme Court judges","1991 — Governors"],"answer":"1950 — President and Vice President","explanation":"Established in 1950, the ECI conducts elections up to and including the President and Vice President."},{"xp":12,"id":"4-5-4","type":"tap","prompt":"Tap every real accessibility or integrity measure introduced by the ECI.","options":["Braille ballots","VVPAT paper trail","Home voting for elderly/disabled","Selling extra votes to the highest bidder","Voter photo ID cards"],"answer":["Braille ballots","VVPAT paper trail","Home voting for elderly/disabled","Voter photo ID cards"],"explanation":"These are genuine ECI measures — vote-buying is illegal, the opposite of what the ECI protects against."}]}]},{"id":5,"slug":"parliament","title":"The Parliamentary System","subtitle":"Legislature, Executive & the Checks Between","emoji":"🏢","gradient":"linear-gradient(135deg,#8B5CF6 0%,#EC4899 100%)","glow":"#8B5CF6","levels":[{"id":1,"title":"Two Houses, One Parliament","intro":"India's Parliament has two houses working together, each with its own presiding officer. Let's meet them.","questions":[{"xp":12,"id":"5-1-1","type":"mcq","prompt":"India's Parliament is described as 'bicameral' because it has:","options":["One house","Two houses — Lok Sabha and Rajya Sabha","Three houses","No fixed structure"],"answer":"Two houses — Lok Sabha and Rajya Sabha","explanation":"'Bi' means two, 'cameral' means chamber — the Lok Sabha (Lower House) and Rajya Sabha (Upper House)."},{"xp":12,"id":"5-1-2","type":"mcq","prompt":"Who presides over sessions of the Lok Sabha?","options":["The President","A Speaker elected by its members","The Vice President","The Prime Minister"],"answer":"A Speaker elected by its members","explanation":"The Speaker maintains discipline and ensures rules are followed during Lok Sabha sessions."},{"xp":12,"id":"5-1-3","type":"mcq","prompt":"Who acts as the chairperson of the Rajya Sabha?","options":["The Speaker","The Vice President of India","The Chief Justice","The Prime Minister"],"answer":"The Vice President of India","explanation":"The Vice President presides over the Rajya Sabha."},{"xp":12,"id":"5-1-4","type":"tap","prompt":"Tap every member of India's Union Executive.","options":["The President","The Vice President","The Council of Ministers headed by the PM","The Chief Election Commissioner","The Chief Justice"],"answer":["The President","The Vice President","The Council of Ministers headed by the PM"],"explanation":"The Union Executive consists of the President, Vice President, and the Council of Ministers headed by the Prime Minister."}]},{"id":2,"title":"From Bill to Act","intro":"Every law starts life as a bill. Follow its journey through Parliament — using the Right to Education Act as our example.","questions":[{"xp":12,"id":"5-2-1","type":"mcq","prompt":"A 'bill' is:","options":["A finished law","A draft of a proposed law that needs Parliament's approval","A tax notice","A court verdict"],"answer":"A draft of a proposed law that needs Parliament's approval","explanation":"Once passed by both Houses and given the President's assent, a bill becomes an Act."},{"xp":12,"id":"5-2-2","type":"order","prompt":"Put the journey of a bill into law in order.","steps":["Bill introduced and read in a House","Referred to a Standing Committee for review","Clause-by-clause discussion, amendments and vote","Process repeated in the other House, then Presidential assent"],"explanation":"This is the simplified path a bill like the RTE Act followed to become law."},{"xp":12,"id":"5-2-3","type":"mcq","prompt":"A 'Money Bill' (dealing with taxation and government borrowing) can only be introduced in:","options":["The Rajya Sabha","The Lok Sabha","Either House equally","The Supreme Court"],"answer":"The Lok Sabha","explanation":"Money Bills require the President's prior recommendation and can only start in the Lok Sabha."},{"xp":12,"id":"5-2-4","type":"mcq","prompt":"'Question Hour' in the Lok Sabha is when:","options":["MPs vote on the budget","MPs question ministers about government policies and actions","The President addresses Parliament","New bills are drafted"],"answer":"MPs question ministers about government policies and actions","explanation":"It's a key tool that holds the Executive accountable to the Legislature."}]},{"id":3,"title":"The Executive at Work","intro":"Who actually runs the government day to day? Meet the President, the Prime Minister, and the Council of Ministers.","questions":[{"xp":12,"id":"5-3-1","type":"mcq","prompt":"The President of India is:","options":["The de facto executive authority who runs daily government","The Head of State and nominal head of the Executive","Elected directly by all citizens","The presiding officer of the Lok Sabha"],"answer":"The Head of State and nominal head of the Executive","explanation":"The Prime Minister and Council of Ministers are responsible for actually running the government."},{"xp":12,"id":"5-3-2","type":"mcq","prompt":"The President appoints as Prime Minister:","options":["The oldest MP","The leader of the majority party or coalition in the Lok Sabha","A retired judge","Any citizen the President chooses freely"],"answer":"The leader of the majority party or coalition in the Lok Sabha","explanation":"The PM serves with the support of the majority of Lok Sabha MPs."},{"xp":12,"id":"5-3-3","type":"mcq","prompt":"Which best describes the Legislature's main role, compared to the Executive's?","options":["Legislature makes laws and oversees the Executive; Executive enforces laws","Legislature enforces laws; Executive makes laws","Both have identical roles","Only the Executive can introduce bills"],"answer":"Legislature makes laws and oversees the Executive; Executive enforces laws","explanation":"This is the core division of function between the two organs."},{"xp":12,"id":"5-3-4","type":"truefalse","prompt":"Most bills discussed in Parliament are actually initiated by the government (the Executive), not individual MPs.","options":["True","False"],"answer":"True","explanation":"While MPs can introduce bills too, most originate from the government."}]},{"id":4,"title":"Checks, Balances & the States","intro":"No single organ of government should hold all the power. See how the Judiciary, and the states, fit into the picture.","questions":[{"xp":12,"id":"5-4-1","type":"mcq","prompt":"The Judiciary's role in India's system of checks and balances is to:","options":["Make all the laws","Interpret laws and ensure they don't violate the Constitution","Collect taxes","Command the armed forces"],"answer":"Interpret laws and ensure they don't violate the Constitution","explanation":"The Judiciary acts as the custodian of the Constitution."},{"xp":12,"id":"5-4-2","type":"sort","prompt":"Sort each subject to its list.","buckets":[{"id":"union","label":"Union List","emoji":"🇮🇳"},{"id":"state","label":"State List","emoji":"🗺️"},{"id":"concurrent","label":"Concurrent List","emoji":"🤝"}],"items":[{"label":"Defence","bucket":"union","emoji":"🛡️"},{"label":"Police","bucket":"state","emoji":"👮"},{"label":"Education","bucket":"concurrent","emoji":"📚"}],"explanation":"Union List = only the Centre legislates; State List = only states; Concurrent = both, with Union law prevailing in conflicts."},{"xp":12,"id":"5-4-3","type":"mcq","prompt":"At the state level, who is the nominal head, similar to the President at the Centre?","options":["The Chief Minister","The Governor","The Speaker","The Vidhan Sabha"],"answer":"The Governor","explanation":"Like the President, the Governor is nominal head; the Chief Minister is the de facto executive authority."},{"xp":12,"id":"5-4-4","type":"mcq","prompt":"A state's upper house, where it exists, is called the:","options":["Rajya Sabha","Vidhan Parishad","Lok Sabha","Vidhan Sabha"],"answer":"Vidhan Parishad","explanation":"Only a few states (like Maharashtra, Karnataka, UP) have this optional upper house; the lower house, the Vidhan Sabha, exists in every state."}]},{"id":5,"title":"Final Boss: The Power Grabber","intro":"The final trial! The Power Grabber wants one organ of government to control everything. Prove why India's checks and balances stop that.","isBoss":true,"bossName":"The Power Grabber","questions":[{"xp":12,"id":"5-5-1","type":"ballot","prompt":"Which organ of government enforces the laws made by Parliament?","options":["The Legislature","The Executive","The Judiciary","The Election Commission"],"answer":"The Executive","explanation":"The Executive — President, VP, and Council of Ministers — enforces and implements laws."},{"xp":12,"id":"5-5-2","type":"mcq","prompt":"A Money Bill must first be introduced in:","options":["The Rajya Sabha","The Lok Sabha","The Supreme Court","A State Assembly"],"answer":"The Lok Sabha","explanation":"This is one of the special financial powers reserved for the Lok Sabha."},{"xp":12,"id":"5-5-3","type":"mcq","prompt":"Who presides over the Rajya Sabha?","options":["The Speaker","The Prime Minister","The Vice President","The Chief Justice"],"answer":"The Vice President","explanation":"Unlike the Lok Sabha's elected Speaker, the Rajya Sabha is chaired by the Vice President of India."},{"xp":12,"id":"5-5-4","type":"tap","prompt":"Tap every check that keeps government power balanced.","options":["Judiciary reviewing laws against the Constitution","Question Hour holding ministers accountable","Parliament approving the budget","One person holding all three powers","Standing Committees scrutinising government activities"],"answer":["Judiciary reviewing laws against the Constitution","Question Hour holding ministers accountable","Parliament approving the budget","Standing Committees scrutinising government activities"],"explanation":"Separation of powers means no single organ — Legislature, Executive, or Judiciary — holds all control."}]}]},{"id":6,"slug":"judiciary","title":"The Judiciary","subtitle":"Courts, Justice & the Rule of Law","emoji":"⚖️","gradient":"linear-gradient(135deg,#7C3AED 0%,#4C1D95 100%)","glow":"#7C3AED","levels":[{"id":1,"title":"Justice and the Law","intro":"Laws alone aren't enough — societies need justice too. Let's explore what makes a law fair, and what happens when it isn't.","questions":[{"xp":12,"id":"6-1-1","type":"mcq","prompt":"What are the two important aspects of justice described in the chapter?","options":["Speed and cost","Substantive justice and procedural justice","Written and unwritten law","Local and national law"],"answer":"Substantive justice and procedural justice","explanation":"Substantive justice asks whether the final outcome is fair, just, and reasonable; procedural justice ensures every person gets a full hearing before a decision is taken."},{"xp":12,"id":"6-1-2","type":"truefalse","prompt":"Procedural justice is built on the presumption that every person is innocent until proven guilty.","options":["True","False"],"answer":"True","explanation":"As a rule, it is presumed that every person is innocent till proved guilty — a key part of procedural justice."},{"xp":12,"id":"6-1-3","type":"tap","prompt":"Tap every law that has been repealed for being unjust or discriminatory.","options":["Criminal Tribes Act, 1871 (India)","Right to Education Act","Vernacular Press Act, 1878 (India)","Jim Crow laws (USA)","Fundamental Rights (India)"],"answer":["Criminal Tribes Act, 1871 (India)","Vernacular Press Act, 1878 (India)","Jim Crow laws (USA)"],"explanation":"India has repealed over 1500 discriminatory colonial-era laws, including these two. The Jim Crow laws in the USA were officially repealed in the 1960s."},{"xp":12,"id":"6-1-4","type":"mcq","prompt":"Apartheid-era laws that divided people by race in South Africa were repealed in:","options":["1960","1975","1991","2000"],"answer":"1991","explanation":"Apartheid-era laws in South Africa, which severely restricted people by race, were repealed in 1991."}]},{"id":2,"title":"The Supreme Court","intro":"At the very top of India's unified court system sits one court — in New Delhi.","questions":[{"xp":12,"id":"6-2-1","type":"mcq","prompt":"India's judicial system is a unified hierarchy. Which court sits at the apex?","options":["District Court","High Court","Supreme Court","Gram Nyayalaya"],"answer":"Supreme Court","explanation":"The hierarchy runs Supreme Court (apex) → High Courts (State level) → Subordinate Courts (District level)."},{"xp":12,"id":"6-2-2","type":"fill","prompt":"The Supreme Court of India is established under Article ___ of the Constitution.","options":["21","32","124","370"],"answer":"124","explanation":"Article 124 provides for the establishment of the Supreme Court of India, seated in New Delhi."},{"xp":12,"id":"6-2-3","type":"mcq","prompt":"The Supreme Court came into existence on the same day as:","options":["India's independence, 15 August 1947","the Constitution coming into effect, 26 January 1950","the first general election, 1951-52","the first Republic Day parade, 1955"],"answer":"the Constitution coming into effect, 26 January 1950","explanation":"The Supreme Court came into existence on 26 January 1950, the date the Constitution of India came into effect."},{"xp":12,"id":"6-2-4","type":"mcq","prompt":"What is the current sanctioned strength of the Supreme Court?","options":["15 judges","21 judges","the Chief Justice of India plus 33 judges","50 judges"],"answer":"the Chief Justice of India plus 33 judges","explanation":"The Supreme Court's current strength is 33+1 — the Chief Justice of India and 33 other judges."}]},{"id":3,"title":"Writs, PILs & Powers","intro":"When your Fundamental Rights are violated, the Constitution gives you a direct route to the courts.","questions":[{"xp":12,"id":"6-3-1","type":"mcq","prompt":"To enforce a Fundamental Right directly before the Supreme Court, a citizen files a writ petition under:","options":["Article 21","Article 32","Article 124","Article 226"],"answer":"Article 32","explanation":"Article 32 lets a citizen file a writ petition directly before the Supreme Court where the issue has all-India ramifications; Article 226 covers the High Court."},{"xp":12,"id":"6-3-2","type":"mcq","prompt":"Who filed India's first reported Public Interest Litigation (PIL), leading to the release of almost 40,000 undertrial prisoners?","options":["M.C. Mehta","Kapila Hingorani","Vishaka","Dr. B.R. Ambedkar"],"answer":"Kapila Hingorani","explanation":"Lawyer Kapila Hingorani's PIL secured the release of undertrial prisoners in Bihar, and the Supreme Court's guidelines eventually freed almost 40,000 undertrials nationwide."},{"xp":12,"id":"6-3-3","type":"mcq","prompt":"The 1997 Supreme Court case that led to guidelines against sexual harassment at the workplace was:","options":["M.C. Mehta v. Union of India","Vishaka & Ors. v. State of Rajasthan","Kesavananda Bharati case","Golaknath case"],"answer":"Vishaka & Ors. v. State of Rajasthan","explanation":"The Vishaka guidelines (1997) later led to the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013."},{"xp":12,"id":"6-3-4","type":"mcq","prompt":"Disputes between the Centre and a State fall under the Supreme Court's:","options":["Advisory jurisdiction","Original jurisdiction","Appellate jurisdiction","Writ jurisdiction only"],"answer":"Original jurisdiction","explanation":"Article 131 gives the Supreme Court exclusive original jurisdiction over disputes between the Centre and States, or between States."}]},{"id":4,"title":"High Courts & Beyond","intro":"Below the Supreme Court stands a court for every state — and below that, the courts closest to the people.","questions":[{"xp":12,"id":"6-4-1","type":"mcq","prompt":"Article 214 of the Constitution provides for a High Court in each:","options":["District","State","Village","Tribunal"],"answer":"State","explanation":"Article 214 provides that there shall be a High Court in each State."},{"xp":12,"id":"6-4-2","type":"truefalse","prompt":"India has exactly one High Court for every one of its 28 States.","options":["True","False"],"answer":"False","explanation":"India has 25 High Courts for 28 States — some High Courts, like Gauhati and Bombay, serve more than one State or Union Territory."},{"xp":12,"id":"6-4-3","type":"mcq","prompt":"At what age does a High Court judge retire?","options":["58 years","60 years","62 years","65 years"],"answer":"62 years","explanation":"High Court judges retire at the age of 62, while Supreme Court judges retire at 65."},{"xp":12,"id":"6-4-4","type":"sort","prompt":"Sort each dispute into the tribunal that handles it.","buckets":[{"id":"ngt","label":"National Green Tribunal","emoji":"🌳"},{"id":"nclt","label":"National Company Law Tribunal","emoji":"🏢"}],"items":[{"label":"A factory polluting a river","bucket":"ngt","emoji":"🌊"},{"label":"A company facing insolvency","bucket":"nclt","emoji":"💼"},{"label":"Illegal deforestation","bucket":"ngt","emoji":"🌲"},{"label":"A dispute between company shareholders","bucket":"nclt","emoji":"📊"}],"explanation":"The National Green Tribunal handles environmental disputes; the National Company Law Tribunal handles corporate and insolvency disputes."}]},{"id":5,"title":"Final Boss: The Backlog Beast","intro":"Millions of cases, one overloaded system. Can alternate paths to justice save the day?","isBoss":true,"bossName":"The Backlog Beast","questions":[{"xp":12,"id":"6-5-1","type":"ballot","prompt":"Which Act replaced the Indian Penal Code, 1860?","options":["Bharatiya Nagarik Suraksha Sanhita, 2023","Bhartiya Nyaya Sanhita, 2023","Bharatiya Sakshya Adhiniyam, 2023","Mediation Act, 2023"],"answer":"Bhartiya Nyaya Sanhita, 2023","explanation":"The Indian Penal Code, 1860 has been replaced by the Bhartiya Nyaya Sanhita, 2023."},{"xp":12,"id":"6-5-2","type":"mcq","prompt":"In arbitration, who makes the final, legally binding decision?","options":["Both parties together","An independent arbitrator or panel","A jury","The police"],"answer":"An independent arbitrator or panel","explanation":"The arbitrator's decision is final and legally binding, enforceable by a court of law, under the Arbitration and Conciliation Act, 1996."},{"xp":12,"id":"6-5-3","type":"mcq","prompt":"How is mediation different from arbitration?","options":["A mediator has no power to impose a decision; an arbitrator's decision is binding","A mediator's decision is binding; an arbitrator only advises","They are exactly the same","Mediation is only for criminal cases"],"answer":"A mediator has no power to impose a decision; an arbitrator's decision is binding","explanation":"A mediator only helps the parties reach a mutual settlement, unlike an arbitrator, whose decision is legally binding."},{"xp":12,"id":"6-5-4","type":"tap","prompt":"Tap every genuine mode of Alternate Dispute Resolution mentioned in the chapter.","options":["Arbitration","Mediation","Lok Adalats","Gram Nyayalayas","Special Leave Petition"],"answer":["Arbitration","Mediation","Lok Adalats","Gram Nyayalayas"],"explanation":"A Special Leave Petition (Article 136) is a Supreme Court appeal mechanism, not an alternate dispute resolution method."}]}]}];

const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['🧑‍⚖️','🧑‍💼','🧑‍🏫','🧑‍🎓','🧓','🕵️'];

/* ============================== STATE ============================== */
const STORE_KEY = 'vote-quest-v1';
function defaultState(){ return {avatar:'🧑‍⚖️', name:'Citizen', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldCv(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('cv', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedCv(i){
  const active = activeUnreviewedWorldCv();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewCv(i){
  const active = activeUnreviewedWorldCv();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewCv = ()=>{
  const active = activeUnreviewedWorldCv();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'cv',
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
  const mouth = sad ? `<path d="M42 70 Q 50 63, 58 70" stroke="#1b2a4a" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    : mood==='think' ? `<circle cx="50" cy="70" r="2" fill="#1b2a4a"/>`
    : `<path d="M42 68 Q 50 78, 58 68" stroke="#1b2a4a" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(59,130,246,0.55))">
    <defs>
      <radialGradient id="cvBadge" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#DCEAFF"/><stop offset="60%" stop-color="#6699FF"/><stop offset="100%" stop-color="#2452C7"/>
      </radialGradient>
      <radialGradient id="cvGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FDE68A" stop-opacity="0.7"/><stop offset="100%" stop-color="#FDE68A" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#cvGlow)"/>
    <path d="M50 8 L80 20 L80 46 C80 72 66 88 50 96 C34 88 20 72 20 46 L20 20 Z" fill="url(#cvBadge)"/>
    <path d="M50 8 L50 96" stroke="#FBBF24" stroke-width="1.2" opacity="0.4"/>
    <ellipse cx="40" cy="55" rx="4" ry="${sad?2:5}" fill="#1b2a4a"/>
    <ellipse cx="60" cy="55" rx="4" ry="${sad?2:5}" fill="#1b2a4a"/>
    <circle cx="41.5" cy="53.5" r="1.2" fill="white"/>
    <circle cx="61.5" cy="53.5" r="1.2" fill="white"/>
    ${mouth}
    <circle cx="34" cy="65" r="3" fill="#ffb84d" opacity="0.55"/>
    <circle cx="66" cy="65" r="3" fill="#ffb84d" opacity="0.55"/>
  </svg>`;
}

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
function nav(hash){ location.hash = hash; }
if(window.__cvHashListener) window.removeEventListener('hashchange', window.__cvHashListener);
window.__cvHashListener = function(){ if(!location.hash.startsWith('#/cv')) return; render(); };
window.addEventListener('hashchange', window.__cvHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/cv\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='🧑‍⚖️';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">A republic needs guardians</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">980 million voters. One <span class="text-gradient-aurora">republic</span>.</h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">Nyaya, the spirit of the Constitution, needs you. Travel through the worlds of Indian democracy, defeat those who'd undermine it, and learn how your vote actually works.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Take the oath →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Citizen</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Citizen" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter the Republic →</button>
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
      <div style="font-size:44px;width:60px;height:60px;border-radius:16px;background:#3b82f633;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px -6px #3b82f688">${STATE.avatar}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Democracy Guardian</div>
        <div class="font-display" style="font-size:22px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${STATE.name}</div>
        <div class="progress-track" style="margin-top:6px;height:8px"><div class="progress-fill" style="width:${frac*100}%"></div></div>
      </div>
      <div style="text-align:right">
        <div class="pillbox" style="background:#3b82f633;border:1px solid #3b82f655">Lv ${lv}</div>
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
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to defend the republic?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedCv(i);
        const needsReview = worldNeedsReviewCv(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/cv/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewCv();return false;"` : '';
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
      <span>Chapters 1–2 · Elections, Parliament &amp; the Executive</span>
    </div>
  </main>`;
  window.__resetAll = resetSave;
}

/* ---------------- WORLD (level select) ---------------- */
function renderWorld(slug){
  const w = WORLDS.find(w=>w.slug===slug);
  if(!w){ nav('#/cv/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedCv(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/cv/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/cv/lesson/'+w.id+'/'+lv.id:'#'}">
          <div class="lesson-icon" style="${lv.isBoss?'background:#f26d6d55;box-shadow:0 0 20px -4px #f26d6d':'background:linear-gradient(135deg,'+(w.gradient.match(/#\\w+/g)?.[0]||'#3b82f6')+'55, transparent)'}">${lv.isBoss?'👹':lv.id}</div>
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
  if(!w||!lv){ nav('#/cv/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedCv(wIdx)){ renderHome(); return; }
  const P = lv.questions.length;
  let qi = -1, correctCount=0, wrongCount=0, combo=0, mood='happy', bossHp=100, playerHp=100, flash=null;

  function questionInner(q, onAnswer, locked, picked){
    if(q.type==='mcq'||q.type==='truefalse'||q.type==='fill'){
      return `<div class="opt-grid">${q.options.map(o=>{
        let cls='opt-btn'; if(locked){ cls += picked===o ? (o===q.answer?' right':' wrong') : (o===q.answer?' reveal':' dim'); }
        return `<button class="${cls}" ${locked?'disabled':''} onclick='__qPick(${JSON.stringify(o)})'>${o}</button>`;
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
    if(q.type==='ballot'){
      return `<div class="ballot-list">${q.options.map(o=>{
        let cls='ballot-row'; if(locked){ cls += picked===o ? (o===q.answer?' right':' wrong') : (o===q.answer?' reveal':' dim'); }
        return `<button class="${cls}" ${locked?'disabled':''} onclick='__qPick(${JSON.stringify(o)})'>
          <span class="ballot-symbol">🗳️</span><span class="ballot-name">${o}</span>
          <span class="ballot-stamp"><span class="ballot-led"></span></span>
        </button>`;
      }).join('')}</div>`;
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
        <a href="#/cv/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/cv/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/cv/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/cv/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('cv', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['cv'] = { init: cvInit };
