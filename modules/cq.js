function cqInit(){

/* ============================== DATA ============================== */
const CHAPTERS = [{"id":"delhi","title":"Delhi Sultanate","subtitle":"The Turkish Dawn","color":"royal","emoji":"🏰","years":"1206 – 1526","intro":"After Muhammad Ghori's death in 1206, Qutbuddin Aibak founded the Mamluk (Slave) dynasty in Delhi, beginning three centuries of Turkish-Afghan rule under five dynasties — Slave, Khilji, Tughlaq, Sayyid and Lodi.","rulers":[{"name":"Qutbuddin Aibak","reign":"1206–1210","facts":["Founder of the Slave dynasty","Began the Qutub Minar","Built Quwwat-ul-Islam mosque"]},{"name":"Iltutmish","reign":"1211–1236","facts":["Consolidated the Sultanate","Introduced silver tanka and copper jital","Completed the Qutub Minar"]},{"name":"Razia Sultan","reign":"1236–1240","facts":["First and only woman ruler of Delhi","Faced revolt by Turkish nobles (Chahalgani)"]},{"name":"Balban","reign":"1266–1287","facts":["Introduced sijda and paibos court etiquette","Crushed the Mongol threat","Broke power of the Chahalgani"]},{"name":"Alauddin Khilji","reign":"1296–1316","facts":["Captured Chittor (1303)","Market price control system","Repelled Mongol invasions","Sent Malik Kafur to the Deccan"]},{"name":"Muhammad bin Tughlaq","reign":"1325–1351","facts":["Shifted capital Delhi → Daulatabad","Introduced token currency (copper coins)","Called the 'wisest fool'"]},{"name":"Firoz Shah Tughlaq","reign":"1351–1388","facts":["Built canals and cities (Firozabad, Hisar)","Levied jizya on Brahmans","Restored the Qutub Minar"]},{"name":"Ibrahim Lodi","reign":"1517–1526","facts":["Last Sultan of Delhi","Defeated by Babur at Panipat"]}],"keyEvents":["1206 — Delhi Sultanate founded by Qutbuddin Aibak","1303 — Alauddin Khilji captures Chittor","1398 — Timur invades and sacks Delhi","1526 — Ibrahim Lodi defeated at First Battle of Panipat"],"administration":["Sultan was head of state, army and judiciary","Iqta system — land assigned to nobles (iqtadars) for revenue","Diwan-i-Wizarat handled finance; Diwan-i-Arz the army","Silver tanka and copper jital as standard coins"],"monuments":["Qutub Minar","Quwwat-ul-Islam Mosque","Alai Darwaza","Tughlaqabad Fort"],"boss":{"name":"Alauddin Khilji","title":"Sikandar-i-Sani","hp":100,"quote":"Delhi belongs to the strong. Prove your strength, scholar."}},{"id":"resistance","title":"Kingdoms of Resistance","subtitle":"Regions that would not bow","color":"forest","emoji":"🛡","years":"13th – 15th century","intro":"As the Sultanate expanded, regional powers rose against it — the Rajputs of Mewar, the Gajapatis of Odisha, the Sultans of Gujarat and Bengal, each defending their soil.","rulers":[{"name":"Rana Hammir","reign":"c. 1326","facts":["Recaptured Mewar from Delhi's grip","Sisodia line of Mewar"]},{"name":"Rana Kumbha","reign":"1433–1468","facts":["Built Kumbhalgarh Fort","Raised Vijay Stambha at Chittor after victory over Malwa"]},{"name":"Kapilendra Deva","reign":"1435–1467","facts":["Founded Gajapati dynasty of Odisha","Fought the Bahmanis and Vijayanagara"]},{"name":"Zafar Khan (Muzaffar Shah)","reign":"1407","facts":["Founded independent Gujarat Sultanate"]},{"name":"Shamsuddin Ilyas Shah","reign":"1352–1358","facts":["Founded Bengal Sultanate","Capital at Pandua"]}],"keyEvents":["1326 — Rana Hammir restores Mewar","1352 — Ilyas Shah founds Bengal Sultanate","1398 — Timur's invasion weakens Delhi, regions break away","15th c. — Kumbhalgarh Fort raised"],"administration":["Fortified hill capitals — Chittor, Kumbhalgarh","Jagir grants to clan chiefs","Fierce Rajput code of honour (jauhar and saka)"],"monuments":["Kumbhalgarh Fort","Vijay Stambha, Chittor","Konark Sun Temple","Jagannath Temple, Puri"],"boss":{"name":"Rana Kumbha","title":"Lord of the Hills","hp":120,"quote":"Mewar never yields. Answer well, traveler."}},{"id":"hoysala","title":"Hoysalas, Gajapatis & the Gonds","subtitle":"Kingdoms that held their ground","color":"emerald","emoji":"🛕","years":"11th – 16th century","intro":"Not every kingdom bowed to the Sultanate. In Karnataka, the Hoysalas raised soaring temples before being absorbed into Vijayanagara; in Odisha, the Eastern Ganga king Narasimhadeva I built the Sun Temple at Konark after repelling the Sultanate; and in central India, Rani Durgavati of the Gonds fought to her last breath rather than surrender.","rulers":[{"name":"Vishnuvardhana","reign":"1108–1152","facts":["Hoysala king who built the Chennakeshava Temple at Belur","Hoysala power grew as the Chalukyas declined"]},{"name":"Ballala III","reign":"1292–1343","facts":["Last major Hoysala ruler","Weakened by repeated Delhi Sultanate raids; kingdom absorbed into Vijayanagara by the mid-14th century"]},{"name":"Narasimhadeva I","reign":"1238–1264","facts":["Eastern Ganga king of Kalinga, in present-day Odisha","Repelled the Delhi Sultanate's governor of Bengal","Built the Sun Temple at Konark to mark his victories"]},{"name":"Rani Durgavati","reign":"1550–1564","facts":["Queen of the Gond kingdom of Garha in central India","Commanded an army of 20,000 soldiers and 1,000 elephants","Took her own life on the battlefield in 1564 rather than be captured by Akbar's forces"]}],"keyEvents":["1268 — Konark Sun Temple raised by Narasimhadeva I","c. 1330–1336 — Musunuri Nayakas of Warangal expel Muhammad bin Tughlaq's army","Mid-14th century — Hoysala kingdom absorbed into the rising Vijayanagara Empire","1564 — Rani Durgavati dies defending Garha against Akbar's forces"],"administration":["The Hoysala emblem shows Sala striking a lion — origin story of the dynasty's name","Eastern Gangas commemorated military victories through temple-building as much as inscriptions","Gond kingdoms were organised around fortified capitals defended by large standing forces"],"monuments":["Chennakeshava Temple, Belur","Hoysaleswara Temple, Halebidu","Konark Sun Temple","Jagannath Temple, Puri"],"boss":{"name":"Rani Durgavati","title":"Queen of Garha","hp":125,"quote":"I kept my kingdom prosperous and my army ready. Show me you are ready too."}},{"id":"vijayanagara","title":"Vijayanagara Empire","subtitle":"City of Victory","color":"gold","emoji":"🕌","years":"1336 – 1646","intro":"Founded in 1336 by Harihara and Bukka on the banks of the Tungabhadra, Vijayanagara became the greatest Hindu empire of the south, ruled by four dynasties — Sangama, Saluva, Tuluva and Aravidu.","rulers":[{"name":"Harihara & Bukka","reign":"1336","facts":["Founders of the Sangama dynasty","Set up capital at Hampi on the Tungabhadra"]},{"name":"Krishnadevaraya","reign":"1509–1529","facts":["Peak of Vijayanagara power (Tuluva dynasty)","Patron of Telugu literature — 'Ashtadiggajas' at court","Wrote Amuktamalyada"]},{"name":"Rama Raya","reign":"regent 1542–1565","facts":["Regent who lost the Battle of Talikota","Alienated the Deccan Sultans"]}],"keyEvents":["1336 — Vijayanagara founded","1509 — Krishnadevaraya crowned","1565 — Battle of Talikota shatters the empire"],"administration":["Amara-nayaka system — military commanders held land for troops","Rich trade in horses, textiles and spices","Persian, Portuguese and Arab merchants at Hampi","Provinces (mandalams) under governors"],"monuments":["Vitthala Temple","Virupaksha Temple","Lotus Mahal","Stone Chariot of Hampi","Hazara Rama Temple"],"boss":{"name":"Krishnadevaraya","title":"Andhra Bhoja","hp":130,"quote":"Wisdom rules the south. Show me yours."}},{"id":"bahmani","title":"Bahmani Sultanate","subtitle":"The Deccan crescent","color":"bronze","emoji":"⚔","years":"1347 – 1518","intro":"Founded by Alauddin Bahman Shah in 1347 after a revolt against Muhammad bin Tughlaq, the Bahmani Sultanate ruled the Deccan for 170 years before splitting into five Deccan Sultanates — Bijapur, Golconda, Ahmadnagar, Berar and Bidar.","rulers":[{"name":"Alauddin Bahman Shah","reign":"1347–1358","facts":["Founder of Bahmani Sultanate","Capital at Gulbarga"]},{"name":"Mahmud Gawan","reign":"PM 1466–1481","facts":["Great Persian minister-scholar","Reformed administration and army","Built a famous madrasa at Bidar"]}],"keyEvents":["1347 — Bahmani Sultanate founded","1518 — Splits into Bijapur, Golconda, Ahmadnagar, Berar, Bidar"],"administration":["Divided into tarafs (provinces)","Persian influence in art, architecture and court language","Rivalry between afaqi (foreign) and dakhini (local) nobles"],"monuments":["Gol Gumbaz (Bijapur)","Charminar (Golconda)","Gulbarga Fort","Madrasa of Mahmud Gawan"],"boss":{"name":"Mahmud Gawan","title":"Malik-ut-Tujjar","hp":110,"quote":"The Deccan tests every mind. Begin."}},{"id":"mughal","title":"Mughal Empire","subtitle":"Emperors of Hindustan","color":"royal","emoji":"👑","years":"1526 – 1857","intro":"Babur, descendant of Timur and Chengiz Khan, defeated Ibrahim Lodi at Panipat in 1526 and founded the Mughal Empire — the greatest empire of medieval India, spanning almost the whole subcontinent under Aurangzeb.","rulers":[{"name":"Babur","reign":"1526–1530","facts":["Won First Battle of Panipat","Used cannons and tulughma tactics","Wrote Baburnama in Turkish"]},{"name":"Humayun","reign":"1530–1540, 1555–1556","facts":["Lost throne to Sher Shah Suri","Regained empire from Persia before death"]},{"name":"Sher Shah Suri","reign":"1540–1545","facts":["Interrupted the Mughals","Built Grand Trunk Road","Introduced the rupiya"]},{"name":"Akbar","reign":"1556–1605","facts":["Won Second Battle of Panipat (1556) against Hemu","Abolished jizya (1564)","Founded Din-i-Ilahi (1582)","Mansabdari system","Built Fatehpur Sikri"]},{"name":"Jahangir","reign":"1605–1627","facts":["Patron of Mughal painting","Chain of justice at Agra fort","Married Nur Jahan"]},{"name":"Shah Jahan","reign":"1628–1658","facts":["Built the Taj Mahal for Mumtaz Mahal","Commissioned the Peacock throne","Built Red Fort at Delhi"]},{"name":"Aurangzeb","reign":"1658–1707","facts":["Empire reached largest extent","Re-imposed jizya (1679)","Long Deccan wars weakened the empire"]}],"keyEvents":["1526 — First Battle of Panipat, Babur defeats Ibrahim Lodi","1556 — Second Battle of Panipat, Akbar defeats Hemu","1576 — Battle of Haldighati, Akbar vs Maharana Pratap","1707 — Death of Aurangzeb, decline begins"],"administration":["Mansabdari system — ranks (zat and sawar) for nobles","Jagir land assignments in place of salary","Zabti revenue system under Todar Mal","Provinces (subas) under subadars; districts (sarkars) under faujdars"],"monuments":["Taj Mahal","Red Fort","Humayun's Tomb","Fatehpur Sikri","Buland Darwaza","Jama Masjid"],"boss":{"name":"Aurangzeb","title":"Alamgir","hp":160,"quote":"None have out-lasted the Mughal. Try, historian."}},{"id":"rajputs","title":"Rajputs","subtitle":"Sons of Kings","color":"blood","emoji":"🗡","years":"8th – 18th century","intro":"Divided into clans — Sisodias of Mewar, Rathores of Marwar, Kachwahas of Amber, Hadas of Bundi — the Rajputs both allied with and defied the Mughals.","rulers":[{"name":"Maharana Pratap","reign":"1572–1597","facts":["Refused Akbar's submission","Fought Battle of Haldighati (1576) on Chetak","Retook most of Mewar before death"]},{"name":"Raja Man Singh","reign":"1550–1614","facts":["Kachwaha of Amber","Trusted general and mansabdar of Akbar"]},{"name":"Jai Singh","reign":"1611–1667","facts":["Kachwaha commander for Aurangzeb","Negotiated treaty of Purandar with Shivaji (1665)"]}],"keyEvents":["1576 — Battle of Haldighati","Jauhar of Chittor performed thrice in history"],"administration":["Clan-based (kula) organisation","Bhumi (land) granted to warrior nobles","Fortified capitals — Chittor, Amber, Mehrangarh"],"monuments":["Chittorgarh Fort","Kumbhalgarh","Amber Fort","Mehrangarh","Vijay Stambha"],"boss":{"name":"Maharana Pratap","title":"Rana of Mewar","hp":140,"quote":"Chetak carried me through Haldighati. Can you carry these questions?"}},{"id":"ahoms","title":"Ahom Kingdom","subtitle":"Rulers of Assam","color":"forest","emoji":"🐘","years":"1228 – 1826","intro":"Founded by Sukaphaa in 1228, the Ahoms — a Tai people from Upper Burma — ruled Assam for nearly 600 years and repeatedly repulsed Mughal invasions.","rulers":[{"name":"Sukaphaa","reign":"1228–1268","facts":["Founder of the Ahom kingdom","Came from Upper Burma across the Patkai"]},{"name":"Lachit Borphukan","reign":"commander 1667–1672","facts":["Defeated Mughals at Battle of Saraighat (1671)","Used naval warfare on the Brahmaputra","Said 'My uncle is not greater than my country'"]},{"name":"Rudra Singha","reign":"1696–1714","facts":["Peak of Ahom power","Patron of Assamese culture and Shakta worship"]}],"keyEvents":["1228 — Ahom kingdom founded","1671 — Battle of Saraighat, Ahoms defeat Mughals"],"administration":["Paik system — every adult male gave rotational service","Divided under Borphukan (west) and Borbarua (east)","Buranjis — Ahom court chronicles"],"monuments":["Rang Ghar","Kareng Ghar","Talatal Ghar"],"boss":{"name":"Lachit Borphukan","title":"Hero of Saraighat","hp":130,"quote":"My uncle was less dear than my country. Face me."}},{"id":"sikhs","title":"Sikh Power","subtitle":"From Guru to Empire","color":"gold","emoji":"☬","years":"1469 – 1849","intro":"From Guru Nanak's teachings (b. 1469) to Guru Gobind Singh's Khalsa (1699) to Maharaja Ranjit Singh's Sikh Empire (1799), the Sikhs became a formidable power in Punjab.","rulers":[{"name":"Guru Nanak","reign":"1469–1539","facts":["Founder of Sikhism","Taught oneness of God and equality"]},{"name":"Guru Arjan","reign":"1581–1606","facts":["Compiled the Adi Granth","Martyred under Jahangir"]},{"name":"Guru Gobind Singh","reign":"1666–1708","facts":["Founded the Khalsa in 1699 at Anandpur Sahib","Tenth and last Sikh Guru"]},{"name":"Banda Bahadur","reign":"1708–1716","facts":["Led armed struggle against Mughals","Captured Sirhind"]},{"name":"Maharaja Ranjit Singh","reign":"1799–1839","facts":["Founded Sikh Empire at Lahore in 1799","Modernised army (Fauj-i-Khas) with European officers"]}],"keyEvents":["1699 — Khalsa founded at Anandpur Sahib","1799 — Ranjit Singh captures Lahore"],"administration":["Misl confederacy before Ranjit Singh","Ranjit Singh's Fauj-i-Khas modernised infantry","Territory divided into subas and parganas"],"monuments":["Golden Temple, Amritsar","Gobindgarh Fort","Anandpur Sahib","Samadhi of Ranjit Singh"],"boss":{"name":"Guru Gobind Singh","title":"Founder of the Khalsa","hp":150,"quote":"Sava lakh se ek ladaun. Test your courage."}},{"id":"administration","title":"Administration & Society","subtitle":"How empires were run","color":"bronze","emoji":"⚖","years":"13th – 18th century","intro":"Beneath every crown was a system — land revenue, taxes, provincial officers, coins, and armies. Learn how Sultans, Vijayanagara, Mughals, Ahoms and Sikhs actually governed their people.","rulers":[{"name":"Todar Mal","reign":"under Akbar","facts":["Devised the zabti / dahsala revenue system","Measured land in bighas"]},{"name":"Malik Ambar","reign":"1600–1626","facts":["Ethiopian minister of Ahmadnagar","Introduced zabt revenue in the Deccan"]}],"keyEvents":["1564 — Akbar abolishes jizya","1580s — Todar Mal's dahsala system introduced","1679 — Aurangzeb re-imposes jizya"],"administration":["Iqta (Sultanate) → Jagir (Mughal) — revenue assignments to nobles","Mansabdars ranked by zat (personal) and sawar (cavalry)","Zabti / dahsala — 10-year average yield used to fix revenue","Amara-nayaka (Vijayanagara) and Paik (Ahom) as parallel systems","Coins — Iltutmish's tanka, Sher Shah's rupiya"],"monuments":["Diwan-i-Am, Red Fort","Diwan-i-Khas, Fatehpur Sikri"],"boss":{"name":"Raja Todar Mal","title":"Master of Revenue","hp":120,"quote":"Every bigha matters. Prove your accounts."}},{"id":"final","title":"Final Revision","subtitle":"The whole chapter, at once","color":"gold","emoji":"🎓","years":"1206 – 1849","intro":"The scroll closes. Test yourself across every kingdom, every date, every ruler and every monument from the chapter. Master this trial and you have mastered the map of medieval India.","rulers":[],"keyEvents":["1206 — Delhi Sultanate begins","1526 — Mughals arrive","1707 — Aurangzeb dies; decline","1799 — Ranjit Singh's Sikh Empire"],"administration":["This chapter is your final trial — no new content, only mastery."],"monuments":[],"boss":{"name":"Grand Historian","title":"Final Trial","hp":180,"quote":"Show me all you have learned."}}];

const QUESTIONS = [{"id":0,"chapter":"delhi","difficulty":"easy","type":"mcq","q":"Who founded the Delhi Sultanate in 1206?","options":["Iltutmish","Qutbuddin Aibak","Balban","Muhammad Ghori"],"answer":1,"explain":"Qutbuddin Aibak, a slave-general of Muhammad Ghori, founded the Mamluk (Slave) dynasty in 1206.","render":"seal"},{"id":1,"chapter":"delhi","difficulty":"easy","type":"mcq","q":"Who was the first and only woman ruler of the Delhi Sultanate?","options":["Nur Jahan","Razia Sultan","Chand Bibi","Jahanara"],"answer":1,"explain":"Razia Sultan, daughter of Iltutmish, ruled 1236–1240 before being overthrown.","render":"seal"},{"id":2,"chapter":"delhi","difficulty":"medium","type":"mcq","q":"Alauddin Khilji is famous for introducing:","options":["The mansabdari system","Market price controls","Din-i-Ilahi","The Khalsa"],"answer":1,"explain":"Alauddin Khilji's market regulations fixed prices to sustain his large standing army."},{"id":3,"chapter":"delhi","difficulty":"medium","type":"mcq","q":"Which sultan shifted the capital from Delhi to Daulatabad?","options":["Iltutmish","Balban","Muhammad bin Tughlaq","Firoz Shah Tughlaq"],"answer":2,"explain":"Muhammad bin Tughlaq shifted the capital in 1327 — a costly failure that earned him the nickname 'wisest fool'."},{"id":4,"chapter":"delhi","difficulty":"easy","type":"mcq","q":"The Qutub Minar was begun by:","options":["Iltutmish","Balban","Qutbuddin Aibak","Alauddin Khilji"],"answer":2,"explain":"Qutbuddin Aibak began the Qutub Minar; Iltutmish completed most of it."},{"id":5,"chapter":"delhi","difficulty":"medium","type":"mcq","q":"Iltutmish introduced which two coins?","options":["Rupiya and mohur","Tanka and jital","Pana and dinar","Dam and paisa"],"answer":1,"explain":"Iltutmish issued the silver tanka and the copper jital — foundations of Sultanate currency."},{"id":6,"chapter":"delhi","difficulty":"medium","type":"mcq","q":"Timur invaded Delhi in:","options":["1206","1398","1526","1556"],"answer":1,"explain":"Timur sacked Delhi in 1398, shattering the Tughlaq Sultanate."},{"id":7,"chapter":"delhi","difficulty":"hard","type":"mcq","q":"Balban introduced which court practices?","options":["Din-i-Ilahi and Sulh-i-Kul","Sijda and paibos","Zabt and dahsala","Mansab and jagir"],"answer":1,"explain":"Balban enforced sijda (prostration) and paibos (kissing the sultan's feet) to elevate royal dignity."},{"id":8,"chapter":"delhi","difficulty":"hard","type":"mcq","q":"Muhammad bin Tughlaq's failed 'token currency' was made of:","options":["Silver","Copper (as substitute for gold/silver)","Iron","Paper"],"answer":1,"explain":"He tried to circulate copper coins at the value of silver — forgery ruined the scheme."},{"id":9,"chapter":"delhi","difficulty":"medium","type":"tf","q":"Razia Sultan was the daughter of Iltutmish.","options":["True","False"],"answer":0,"explain":"True. Razia was Iltutmish's chosen successor over her brothers."},{"id":10,"chapter":"delhi","difficulty":"easy","type":"tf","q":"The Delhi Sultanate was ruled by five dynasties.","options":["True","False"],"answer":0,"explain":"True — Slave, Khilji, Tughlaq, Sayyid and Lodi dynasties ruled Delhi."},{"id":11,"chapter":"delhi","difficulty":"medium","type":"fill","q":"The land-revenue assignment given to nobles under the Sultanate was called ___.","options":["Iqta"],"answer":0,"explain":"Iqta — revenue assignments granted to iqtadars."},{"id":12,"chapter":"delhi","difficulty":"hard","type":"ar","q":"Assertion: Alauddin Khilji fixed market prices in Delhi. Reason: He needed to maintain a large standing army cheaply.","options":["Both true, reason explains","Both true, reason does not explain","Assertion true, reason false","Assertion false"],"answer":0,"explain":"Both statements are true and the reason correctly explains the market-control policy."},{"id":13,"chapter":"delhi","difficulty":"medium","type":"whoami","q":"I ruled Delhi for four years and was the only woman to sit on the throne. Who am I?","options":["Nur Jahan","Razia Sultan","Jahanara","Chand Bibi"],"answer":1,"explain":"Razia Sultan (1236–1240)."},{"id":14,"chapter":"delhi","difficulty":"hard","type":"mcq","q":"Alauddin Khilji's general who led the Deccan campaigns was:","options":["Zafar Khan","Malik Kafur","Ulugh Khan","Nusrat Khan"],"answer":1,"explain":"Malik Kafur led three major Deccan expeditions between 1307 and 1311."},{"id":15,"chapter":"resistance","difficulty":"easy","type":"mcq","q":"Rana Kumbha built which famous fort?","options":["Amber","Kumbhalgarh","Mehrangarh","Gwalior"],"answer":1,"explain":"Kumbhalgarh, with the second-longest wall in the world, was built by Rana Kumbha."},{"id":16,"chapter":"resistance","difficulty":"medium","type":"mcq","q":"The Vijay Stambha at Chittor was raised by:","options":["Rana Sanga","Rana Kumbha","Rana Pratap","Rana Hammir"],"answer":1,"explain":"Rana Kumbha built the Vijay Stambha to commemorate his victory over Malwa."},{"id":17,"chapter":"resistance","difficulty":"medium","type":"mcq","q":"The Gajapati dynasty ruled which region?","options":["Bengal","Odisha","Gujarat","Mewar"],"answer":1,"explain":"Kapilendra Deva founded the Gajapati dynasty of Odisha in 1435."},{"id":18,"chapter":"resistance","difficulty":"hard","type":"mcq","q":"The founder of the independent Bengal Sultanate was:","options":["Zafar Khan","Ilyas Shah","Hussain Shah","Sikandar Shah"],"answer":1,"explain":"Shamsuddin Ilyas Shah founded the Bengal Sultanate in 1352 with capital at Pandua.","render":"seal"},{"id":19,"chapter":"resistance","difficulty":"medium","type":"tf","q":"The Gujarat Sultanate was founded by Zafar Khan (Muzaffar Shah) in 1407.","options":["True","False"],"answer":0,"explain":"True. He declared independence when the Delhi Sultanate weakened after Timur."},{"id":20,"chapter":"resistance","difficulty":"hard","type":"whoami","q":"I restored Mewar to Sisodia rule around 1326 after the Khiljis. Who am I?","options":["Rana Kumbha","Rana Hammir","Rana Sanga","Maharana Pratap"],"answer":1,"explain":"Rana Hammir, founder of the Sisodia line of Mewar."},{"id":21,"chapter":"vijayanagara","difficulty":"easy","type":"mcq","q":"Vijayanagara was founded in 1336 by:","options":["Krishnadevaraya","Harihara and Bukka","Kapilendra Deva","Alauddin Bahman Shah"],"answer":1,"explain":"The brothers Harihara and Bukka founded Vijayanagara on the Tungabhadra river.","render":"seal"},{"id":22,"chapter":"vijayanagara","difficulty":"hard","type":"mcq","q":"Krishnadevaraya wrote which famous Telugu literary work?","options":["Baburnama","Amuktamalyada","Akbarnama","Rajatarangini"],"answer":1,"explain":"Krishnadevaraya himself composed Amuktamalyada in Telugu."},{"id":23,"chapter":"vijayanagara","difficulty":"medium","type":"mcq","q":"The Battle of Talikota (1565) was fought between Vijayanagara and:","options":["The Mughals","The Deccan Sultanates","The Portuguese","The Bahmanis"],"answer":1,"explain":"A confederacy of the Deccan Sultanates crushed Vijayanagara at Talikota in 1565."},{"id":24,"chapter":"vijayanagara","difficulty":"medium","type":"mcq","q":"Krishnadevaraya belonged to which dynasty of Vijayanagara?","options":["Sangama","Saluva","Tuluva","Aravidu"],"answer":2,"explain":"He was the greatest ruler of the Tuluva dynasty."},{"id":25,"chapter":"vijayanagara","difficulty":"hard","type":"mcq","q":"The Amara-nayaka system was:","options":["A Mughal land-tax","A Vijayanagara military-land system","A Sikh confederacy","A Rajput code"],"answer":1,"explain":"Amara-nayakas were Vijayanagara commanders holding land in return for maintaining troops."},{"id":26,"chapter":"vijayanagara","difficulty":"easy","type":"mcq","q":"Which temple in Hampi has the famous stone chariot?","options":["Virupaksha","Vitthala","Lotus Mahal","Hazara Rama"],"answer":1,"explain":"The Vitthala Temple complex houses the iconic stone chariot."},{"id":27,"chapter":"vijayanagara","difficulty":"medium","type":"tf","q":"Vijayanagara's capital was on the Tungabhadra river.","options":["True","False"],"answer":0,"explain":"True — the ruins of Hampi lie on the Tungabhadra."},{"id":28,"chapter":"vijayanagara","difficulty":"hard","type":"whoami","q":"My court had the 'Ashtadiggajas' — eight great Telugu poets. Who am I?","options":["Rama Raya","Bukka","Krishnadevaraya","Harihara II"],"answer":2,"explain":"Krishnadevaraya's court hosted the eight poet-elephants of Telugu literature."},{"id":29,"chapter":"vijayanagara","difficulty":"medium","type":"fill","q":"The city of Vijayanagara stood on the ___ river.","options":["Tungabhadra"],"answer":0,"explain":"Tungabhadra."},{"id":30,"chapter":"bahmani","difficulty":"medium","type":"mcq","q":"The Bahmani Sultanate was founded in:","options":["1206","1336","1347","1526"],"answer":2,"explain":"Alauddin Bahman Shah founded the Bahmani Sultanate in 1347 after revolting against Muhammad bin Tughlaq.","render":"seal"},{"id":31,"chapter":"bahmani","difficulty":"hard","type":"mcq","q":"Mahmud Gawan served as prime minister of which kingdom?","options":["Vijayanagara","Bahmani","Mewar","Mughal"],"answer":1,"explain":"Mahmud Gawan was the great Persian minister of the Bahmani Sultanate."},{"id":32,"chapter":"bahmani","difficulty":"medium","type":"mcq","q":"The Bahmani Sultanate split into how many successor Deccan Sultanates?","options":["3","4","5","6"],"answer":2,"explain":"Five — Bijapur, Golconda, Ahmadnagar, Berar and Bidar (1518)."},{"id":33,"chapter":"bahmani","difficulty":"hard","type":"mcq","q":"The Gol Gumbaz is located in which former Deccan capital?","options":["Golconda","Bijapur","Ahmadnagar","Bidar"],"answer":1,"explain":"Gol Gumbaz, tomb of Muhammad Adil Shah, stands at Bijapur."},{"id":34,"chapter":"bahmani","difficulty":"medium","type":"tf","q":"Mahmud Gawan built a famous madrasa at Bidar.","options":["True","False"],"answer":0,"explain":"True — the Madrasa of Mahmud Gawan at Bidar."},{"id":35,"chapter":"mughal","difficulty":"easy","type":"mcq","q":"Who won the First Battle of Panipat (1526)?","options":["Akbar","Babur","Sher Shah","Aurangzeb"],"answer":1,"explain":"Babur defeated Ibrahim Lodi at Panipat in 1526 using cannons and tulughma flanking.","render":"seal"},{"id":36,"chapter":"mughal","difficulty":"easy","type":"mcq","q":"Which Mughal emperor built the Taj Mahal?","options":["Akbar","Jahangir","Shah Jahan","Aurangzeb"],"answer":2,"explain":"Shah Jahan built the Taj Mahal in memory of Mumtaz Mahal.","render":"seal"},{"id":37,"chapter":"mughal","difficulty":"medium","type":"mcq","q":"Akbar's revenue system was developed by:","options":["Birbal","Abul Fazl","Todar Mal","Man Singh"],"answer":2,"explain":"Raja Todar Mal devised the zabti / dahsala system."},{"id":38,"chapter":"mughal","difficulty":"medium","type":"mcq","q":"The mansabdari system was introduced by:","options":["Babur","Humayun","Akbar","Shah Jahan"],"answer":2,"explain":"Akbar organised his nobility through mansabs — ranks of zat and sawar."},{"id":39,"chapter":"mughal","difficulty":"medium","type":"mcq","q":"Aurangzeb re-imposed which tax abolished by Akbar?","options":["Zabti","Jizya","Kharaj","Zakat"],"answer":1,"explain":"Aurangzeb re-imposed jizya on non-Muslims in 1679; Akbar had abolished it in 1564."},{"id":40,"chapter":"mughal","difficulty":"easy","type":"mcq","q":"The Second Battle of Panipat (1556) was fought between Akbar and:","options":["Ibrahim Lodi","Hemu","Rana Pratap","Sher Shah"],"answer":1,"explain":"Bairam Khan led Akbar's forces to victory over Hemu at Panipat."},{"id":41,"chapter":"mughal","difficulty":"hard","type":"mcq","q":"Sher Shah Suri introduced which coin?","options":["Tanka","Rupiya","Mohur","Dinar"],"answer":1,"explain":"Sher Shah issued the silver rupiya — ancestor of the modern rupee."},{"id":42,"chapter":"mughal","difficulty":"medium","type":"mcq","q":"Fatehpur Sikri was built by:","options":["Babur","Humayun","Akbar","Jahangir"],"answer":2,"explain":"Akbar built Fatehpur Sikri as his capital 1571–1585."},{"id":43,"chapter":"mughal","difficulty":"hard","type":"mcq","q":"Akbar's syncretic religion was called:","options":["Din-i-Ilahi","Sulh-i-Kul","Bhakti","Chishti"],"answer":0,"explain":"Din-i-Ilahi (1582) drew from many faiths."},{"id":44,"chapter":"mughal","difficulty":"easy","type":"tf","q":"Babur wrote his memoirs called the Baburnama.","options":["True","False"],"answer":0,"explain":"True — the Baburnama, in Chagatai Turkish."},{"id":45,"chapter":"mughal","difficulty":"medium","type":"tf","q":"Humayun regained his throne with Persian help before dying in 1556.","options":["True","False"],"answer":0,"explain":"True. He recovered Delhi in 1555 and died the next year."},{"id":46,"chapter":"mughal","difficulty":"medium","type":"fill","q":"The Mughal noble's rank of cavalry was called ___.","options":["Sawar"],"answer":0,"explain":"Sawar — the cavalry rank in the mansabdari system."},{"id":47,"chapter":"mughal","difficulty":"hard","type":"ar","q":"Assertion: Aurangzeb's Deccan wars weakened the Mughal Empire. Reason: They exhausted treasury and army while regional powers rose.","options":["Both true, reason explains","Both true, reason does not explain","Assertion true, reason false","Assertion false"],"answer":0,"explain":"Correct — the endless Deccan campaigns drained Mughal resources while Marathas, Sikhs and Rajputs grew."},{"id":48,"chapter":"mughal","difficulty":"hard","type":"whoami","q":"I built Fatehpur Sikri, abolished jizya and founded Din-i-Ilahi. Who am I?","options":["Babur","Akbar","Jahangir","Aurangzeb"],"answer":1,"explain":"Akbar the Great."},{"id":49,"chapter":"mughal","difficulty":"medium","type":"chrono","q":"Which Mughal ruled first?","options":["Jahangir","Akbar","Humayun","Shah Jahan"],"answer":2,"explain":"Order: Babur → Humayun → Akbar → Jahangir → Shah Jahan → Aurangzeb."},{"id":50,"chapter":"mughal","difficulty":"hard","type":"mcq","q":"Sher Shah Suri built which famous road?","options":["Silk Road","Grand Trunk Road","Royal Highway","King's Way"],"answer":1,"explain":"Sher Shah rebuilt the Grand Trunk Road from Bengal to Kabul."},{"id":51,"chapter":"rajputs","difficulty":"easy","type":"mcq","q":"The Battle of Haldighati (1576) was fought between:","options":["Akbar and Rana Pratap","Babur and Ibrahim Lodi","Akbar and Hemu","Aurangzeb and Shivaji"],"answer":0,"explain":"Akbar's forces under Man Singh met Maharana Pratap at Haldighati.","render":"seal"},{"id":52,"chapter":"rajputs","difficulty":"easy","type":"mcq","q":"Maharana Pratap's horse was named:","options":["Badal","Chetak","Sarangi","Meghdoot"],"answer":1,"explain":"Chetak carried Rana Pratap to safety at Haldighati."},{"id":53,"chapter":"rajputs","difficulty":"medium","type":"mcq","q":"Man Singh was a general of which Mughal emperor?","options":["Babur","Akbar","Aurangzeb","Shah Jahan"],"answer":1,"explain":"Raja Man Singh of Amber was one of Akbar's most trusted mansabdars."},{"id":54,"chapter":"rajputs","difficulty":"medium","type":"mcq","q":"Maharana Pratap belonged to which Rajput clan?","options":["Rathore","Sisodia","Kachwaha","Hada"],"answer":1,"explain":"The Sisodias of Mewar — Pratap's clan."},{"id":55,"chapter":"rajputs","difficulty":"hard","type":"tf","q":"The city of Jaipur was later founded by the Kachwahas of Amber.","options":["True","False"],"answer":0,"explain":"True — Sawai Jai Singh II founded Jaipur in 1727."},{"id":56,"chapter":"rajputs","difficulty":"medium","type":"whoami","q":"I refused Akbar's submission, lost Haldighati but retook most of Mewar before my death. Who am I?","options":["Rana Sanga","Rana Kumbha","Maharana Pratap","Bappa Rawal"],"answer":2,"explain":"Maharana Pratap (1572–1597)."},{"id":57,"chapter":"ahoms","difficulty":"medium","type":"mcq","q":"The Ahom kingdom was founded in 1228 by:","options":["Lachit Borphukan","Sukaphaa","Rudra Singha","Chakradhwaj"],"answer":1,"explain":"Sukaphaa, a Tai prince from Upper Burma, founded the Ahom kingdom."},{"id":58,"chapter":"ahoms","difficulty":"medium","type":"mcq","q":"Lachit Borphukan defeated the Mughals at the Battle of:","options":["Panipat","Saraighat","Haldighati","Talikota"],"answer":1,"explain":"In 1671 Lachit Borphukan won the naval Battle of Saraighat on the Brahmaputra.","render":"seal"},{"id":59,"chapter":"ahoms","difficulty":"medium","type":"mcq","q":"The Paik system was practised by the:","options":["Mughals","Vijayanagara","Ahoms","Sikhs"],"answer":2,"explain":"Ahoms — every adult male gave rotational service under the paik system."},{"id":60,"chapter":"ahoms","difficulty":"hard","type":"mcq","q":"The court chronicles of the Ahoms are called:","options":["Puranas","Buranjis","Akhbarats","Firmans"],"answer":1,"explain":"Buranjis — the Ahom historical chronicles."},{"id":61,"chapter":"ahoms","difficulty":"medium","type":"tf","q":"The Battle of Saraighat was a naval battle on the Brahmaputra.","options":["True","False"],"answer":0,"explain":"True — Lachit used the river to devastate the Mughal fleet."},{"id":62,"chapter":"ahoms","difficulty":"medium","type":"whoami","q":"I came from Upper Burma across the Patkai and founded a kingdom that lasted 600 years. Who am I?","options":["Rudra Singha","Lachit Borphukan","Sukaphaa","Chakradhwaj"],"answer":2,"explain":"Sukaphaa, founder of the Ahom kingdom in 1228."},{"id":63,"chapter":"sikhs","difficulty":"easy","type":"mcq","q":"The Khalsa was founded in 1699 by:","options":["Guru Nanak","Guru Arjan","Guru Gobind Singh","Banda Bahadur"],"answer":2,"explain":"Guru Gobind Singh founded the Khalsa at Anandpur Sahib in 1699.","render":"seal"},{"id":64,"chapter":"sikhs","difficulty":"medium","type":"mcq","q":"Maharaja Ranjit Singh established the Sikh Empire in which year?","options":["1699","1757","1799","1849"],"answer":2,"explain":"Ranjit Singh captured Lahore in 1799 and made it his capital."},{"id":65,"chapter":"sikhs","difficulty":"medium","type":"mcq","q":"The founder of Sikhism was:","options":["Guru Nanak","Guru Arjan","Guru Gobind Singh","Guru Tegh Bahadur"],"answer":0,"explain":"Guru Nanak (1469–1539) founded Sikhism."},{"id":66,"chapter":"sikhs","difficulty":"hard","type":"mcq","q":"The Adi Granth was compiled by:","options":["Guru Nanak","Guru Arjan","Guru Ram Das","Guru Hargobind"],"answer":1,"explain":"Guru Arjan compiled the Adi Granth in 1604."},{"id":67,"chapter":"sikhs","difficulty":"medium","type":"mcq","q":"Ranjit Singh's elite modernised army corps was called:","options":["Khalsa","Fauj-i-Khas","Fauj-i-Ain","Misl"],"answer":1,"explain":"The Fauj-i-Khas was trained by European officers."},{"id":68,"chapter":"sikhs","difficulty":"hard","type":"mcq","q":"Before Ranjit Singh, Sikh territory was organised as:","options":["Subas","Misls","Iqtas","Jagirs"],"answer":1,"explain":"Twelve Sikh misls formed a confederacy across Punjab."},{"id":69,"chapter":"sikhs","difficulty":"medium","type":"tf","q":"Banda Bahadur led armed struggle against the Mughals after Guru Gobind Singh.","options":["True","False"],"answer":0,"explain":"True — Banda captured Sirhind and challenged Mughal power."},{"id":70,"chapter":"sikhs","difficulty":"medium","type":"whoami","q":"I was the tenth Sikh Guru and founder of the Khalsa. Who am I?","options":["Guru Nanak","Guru Arjan","Guru Tegh Bahadur","Guru Gobind Singh"],"answer":3,"explain":"Guru Gobind Singh."},{"id":71,"chapter":"administration","difficulty":"medium","type":"mcq","q":"Iqta was:","options":["A coin","A land assignment","A prayer","A weapon"],"answer":1,"explain":"Iqta was a revenue assignment given to nobles under the Delhi Sultanate.","render":"seal"},{"id":72,"chapter":"administration","difficulty":"hard","type":"mcq","q":"The Amara-nayaka system belonged to:","options":["Mughals","Vijayanagara","Sikhs","Ahoms"],"answer":1,"explain":"Under Vijayanagara, amara-nayakas were military commanders holding land."},{"id":73,"chapter":"administration","difficulty":"medium","type":"mcq","q":"Zabti / dahsala revenue was designed by:","options":["Birbal","Abul Fazl","Todar Mal","Sher Shah"],"answer":2,"explain":"Todar Mal used a 10-year average yield to fix revenue."},{"id":74,"chapter":"administration","difficulty":"hard","type":"mcq","q":"In the mansabdari system, 'zat' referred to:","options":["Cavalry rank","Personal rank","Land rank","Court title"],"answer":1,"explain":"Zat was the personal rank; sawar the cavalry obligation."},{"id":75,"chapter":"administration","difficulty":"medium","type":"mcq","q":"Malik Ambar served in which Deccan sultanate?","options":["Bijapur","Golconda","Ahmadnagar","Berar"],"answer":2,"explain":"Malik Ambar was the great minister of Ahmadnagar."},{"id":76,"chapter":"administration","difficulty":"medium","type":"tf","q":"The rupiya was introduced by Sher Shah Suri.","options":["True","False"],"answer":0,"explain":"True — Sher Shah introduced the silver rupiya."},{"id":77,"chapter":"administration","difficulty":"hard","type":"ar","q":"Assertion: The paik system supplied labour and soldiers to the Ahom state. Reason: Every adult male gave rotational service.","options":["Both true, reason explains","Both true, reason does not explain","Assertion true, reason false","Assertion false"],"answer":0,"explain":"Correct — rotational adult-male service was the paik system's mechanism."},{"id":78,"chapter":"administration","difficulty":"medium","type":"fill","q":"The Mughal province was called a ___.","options":["Suba"],"answer":0,"explain":"Suba, governed by a subadar."},{"id":79,"chapter":"administration","difficulty":"hard","type":"whoami","q":"I devised the dahsala revenue system for Akbar using a 10-year yield average. Who am I?","options":["Abul Fazl","Birbal","Todar Mal","Man Singh"],"answer":2,"explain":"Raja Todar Mal."},{"id":80,"chapter":"final","difficulty":"easy","type":"chrono","q":"Which came first?","options":["Battle of Panipat 1526","Battle of Haldighati 1576","Battle of Talikota 1565","Battle of Saraighat 1671"],"answer":0,"explain":"Panipat (1526) — Babur's victory came first."},{"id":81,"chapter":"final","difficulty":"medium","type":"mcq","q":"Which of these did NOT rule Delhi?","options":["Iltutmish","Balban","Krishnadevaraya","Firoz Shah Tughlaq"],"answer":2,"explain":"Krishnadevaraya ruled Vijayanagara, not Delhi.","render":"seal"},{"id":82,"chapter":"final","difficulty":"hard","type":"mcq","q":"Match: builder → monument. Who built the Vitthala Temple at Hampi?","options":["Rana Kumbha","Krishnadevaraya","Shah Jahan","Aurangzeb"],"answer":1,"explain":"The Vitthala Temple reached its grand form under Krishnadevaraya."},{"id":83,"chapter":"final","difficulty":"medium","type":"tf","q":"The Battle of Saraighat was fought between the Ahoms and the Mughals.","options":["True","False"],"answer":0,"explain":"True — Lachit Borphukan defeated the Mughals in 1671."},{"id":84,"chapter":"final","difficulty":"hard","type":"chrono","q":"Which happened last?","options":["Founding of Khalsa 1699","Battle of Talikota 1565","Battle of Haldighati 1576","First Panipat 1526"],"answer":0,"explain":"Khalsa (1699) is the latest."},{"id":85,"chapter":"hoysala","difficulty":"easy","type":"mcq","q":"The Hoysala emblem shows a young man named Sala fighting a:","options":["Lion","Tiger","Elephant","Bear"],"answer":0,"explain":"Kannada folklore recounts Sala striking a lion to save his guru — 'Hoy! Sala' gave the dynasty its name.","render":"seal"},{"id":86,"chapter":"hoysala","difficulty":"medium","type":"mcq","q":"The Chennakeshava Temple, built by Vishnuvardhana, stands at:","options":["Halebidu","Belur","Hampi","Konark"],"answer":1,"explain":"Vishnuvardhana built the Chennakeshava Temple at Belur in the early 12th century."},{"id":87,"chapter":"hoysala","difficulty":"medium","type":"mcq","q":"The Eastern Ganga kingdom of Kalinga covered present-day:","options":["Karnataka","Odisha, and parts of Bengal and Andhra Pradesh","Rajasthan","Assam"],"answer":1,"explain":"Kalinga, ruled by the Eastern Gangas, roughly matched present-day Odisha and neighbouring areas."},{"id":88,"chapter":"hoysala","difficulty":"hard","type":"mcq","q":"Narasimhadeva I built the Konark Sun Temple mainly to:","options":["Honour a marriage alliance","Commemorate his victories over the Delhi Sultanate's governor of Bengal","Mark the founding of his capital","Celebrate a trade treaty"],"answer":1,"explain":"The Sun Temple at Konark partly commemorated Narasimhadeva I's military successes against the Sultanate."},{"id":89,"chapter":"hoysala","difficulty":"easy","type":"tf","q":"The Hoysala kingdom was eventually absorbed into the Vijayanagara Empire.","options":["True","False"],"answer":0,"explain":"True — weakened by Sultanate raids and internal conflict, the Hoysalas were absorbed by the mid-14th century."},{"id":90,"chapter":"hoysala","difficulty":"easy","type":"mcq","q":"Rani Durgavati ruled which kingdom?","options":["Mewar","Garha, a Gond kingdom in central India","Bengal","The Ahom kingdom"],"answer":1,"explain":"Rani Durgavati ruled the Garha kingdom, one of the Gond kingdoms of central India."},{"id":91,"chapter":"hoysala","difficulty":"medium","type":"mcq","q":"According to historical accounts, Rani Durgavati's army included about how many elephants?","options":["100","500","1,000","5,000"],"answer":2,"explain":"She kept an army of 20,000 soldiers and 1,000 elephants."},{"id":92,"chapter":"hoysala","difficulty":"hard","type":"whoami","q":"I commanded 20,000 soldiers and took my own life on the battlefield in 1564 rather than be captured by Akbar's general. Who am I?","options":["Chand Bibi","Rani Durgavati","Razia Sultan","Ahilyabai Holkar"],"answer":1,"explain":"Rani Durgavati, queen of Garha, chose death over capture in 1564."},{"id":93,"chapter":"hoysala","difficulty":"medium","type":"fill","q":"The Hoysala capital later moved from Belur to ___.","options":["Halebidu"],"answer":0,"explain":"Halebidu became the later Hoysala capital."},{"id":94,"chapter":"hoysala","difficulty":"hard","type":"ar","q":"Assertion: The Musunuri Nayakas of Warangal formed a confederacy against the Delhi Sultanate. Reason: They wanted to expel Muhammad bin Tughlaq's army from the Deccan.","options":["Both true, reason explains","Both true, reason does not explain","Assertion true, reason false","Assertion false"],"answer":0,"explain":"Correct — around 75 Telugu chieftains united and expelled the Sultanate's forces from Warangal, c. 1330–1336."},{"id":95,"chapter":"hoysala","difficulty":"medium","type":"chrono","q":"Which of these came first?","options":["Konark Sun Temple built (1268)","Rani Durgavati's death (1564)","Battle of Talikota (1565)","Founding of Vijayanagara (1336)"],"answer":0,"explain":"The Konark Sun Temple (1268) predates the others by decades or centuries."}];

const DATES = [{"year":1206,"event":"Delhi Sultanate founded by Qutbuddin Aibak"},{"year":1268,"event":"Narasimhadeva I builds the Konark Sun Temple"},{"year":1326,"event":"Rana Hammir restores Mewar"},{"year":1336,"event":"Vijayanagara Empire founded"},{"year":1347,"event":"Bahmani Sultanate founded"},{"year":1398,"event":"Timur invades Delhi"},{"year":1498,"event":"Vasco da Gama reaches Calicut"},{"year":1526,"event":"First Battle of Panipat — Babur wins"},{"year":1556,"event":"Second Battle of Panipat — Akbar wins"},{"year":1564,"event":"Rani Durgavati dies defending Garha against Akbar's forces"},{"year":1565,"event":"Battle of Talikota — fall of Vijayanagara"},{"year":1576,"event":"Battle of Haldighati — Pratap vs Akbar"},{"year":1671,"event":"Battle of Saraighat — Ahoms defeat Mughals"},{"year":1699,"event":"Khalsa founded by Guru Gobind Singh"},{"year":1799,"event":"Ranjit Singh captures Lahore"}];

const VOCAB = [{"term":"Iqta","meaning":"Land revenue assignment to a noble under the Delhi Sultanate."},{"term":"Jizya","meaning":"Tax on non-Muslim subjects, abolished by Akbar, re-imposed by Aurangzeb."},{"term":"Mansabdar","meaning":"Mughal officer holding a rank (zat) and cavalry (sawar)."},{"term":"Zabti / Dahsala","meaning":"Akbar's land-revenue system under Todar Mal, based on a 10-year yield average."},{"term":"Amara-nayaka","meaning":"Vijayanagara military commander holding land for troops."},{"term":"Paik","meaning":"Ahom system of rotational military and labour service."},{"term":"Khalsa","meaning":"Community of initiated Sikhs founded by Guru Gobind Singh in 1699."},{"term":"Jauhar","meaning":"Rajput practice of mass self-immolation to avoid capture."},{"term":"Saka","meaning":"Rajput last stand — warriors dressed in saffron and fought to the death."},{"term":"Tanka","meaning":"Silver coin of the Delhi Sultanate introduced by Iltutmish."},{"term":"Jital","meaning":"Copper coin of the Delhi Sultanate paired with the tanka."},{"term":"Rupiya","meaning":"Silver coin introduced by Sher Shah Suri — ancestor of the rupee."},{"term":"Sijda","meaning":"Court prostration introduced by Balban."},{"term":"Paibos","meaning":"Court practice of kissing the sultan's feet, introduced by Balban."},{"term":"Suba","meaning":"Mughal province, governed by a subadar."},{"term":"Sarkar","meaning":"Mughal district within a suba, under a faujdar."},{"term":"Iqtadar","meaning":"Holder of an iqta under the Sultanate."},{"term":"Buranji","meaning":"Ahom court chronicles maintained in Assamese and Ahom."},{"term":"Misl","meaning":"One of the twelve Sikh confederacies before Ranjit Singh."},{"term":"Fauj-i-Khas","meaning":"Ranjit Singh's elite European-trained army."}];

const KINGDOMS = [{"id":"delhi","name":"Delhi","x":42,"y":30,"chapter":"delhi"},{"id":"mewar","name":"Mewar","x":34,"y":40,"chapter":"rajputs"},{"id":"hoysala","name":"Hoysala (Belur)","x":38,"y":66,"chapter":"hoysala"},{"id":"garha","name":"Garha (Gonds)","x":50,"y":48,"chapter":"hoysala"},{"id":"vijayanagara","name":"Vijayanagara","x":42,"y":72,"chapter":"vijayanagara"},{"id":"bahmani","name":"Bahmani","x":44,"y":62,"chapter":"bahmani"},{"id":"agra","name":"Agra (Mughal)","x":44,"y":34,"chapter":"mughal"},{"id":"ahom","name":"Ahom (Assam)","x":78,"y":34,"chapter":"ahoms"},{"id":"punjab","name":"Punjab (Sikh)","x":36,"y":22,"chapter":"sikhs"},{"id":"odisha","name":"Odisha","x":60,"y":52,"chapter":"resistance"},{"id":"gujarat","name":"Gujarat","x":24,"y":45,"chapter":"resistance"},{"id":"bengal","name":"Bengal","x":68,"y":44,"chapter":"resistance"}];

const MONUMENT_TILES = [{"id":"qutub","name":"Qutub Minar","builder":"Qutbuddin Aibak (begun) & Iltutmish","cols":2,"rows":3,"glyph":"🗼","fact":"Tallest brick minaret in the world, begun 1199."},{"id":"taj","name":"Taj Mahal","builder":"Shah Jahan","cols":3,"rows":2,"glyph":"🕌","fact":"Built for Mumtaz Mahal, 1632–1653."},{"id":"vitthala","name":"Vitthala Temple","builder":"Krishnadevaraya","cols":3,"rows":2,"glyph":"🏛","fact":"Famed for its musical pillars and stone chariot."},{"id":"kumbhal","name":"Kumbhalgarh Fort","builder":"Rana Kumbha","cols":3,"rows":2,"glyph":"🏰","fact":"Second-longest fortification wall in the world."},{"id":"red","name":"Red Fort","builder":"Shah Jahan","cols":3,"rows":2,"glyph":"🏯","fact":"Shah Jahan's Delhi citadel, from 1638."},{"id":"konark","name":"Konark Sun Temple","builder":"Narasimhadeva I (Gajapati era temple)","cols":3,"rows":2,"glyph":"🛕","fact":"Chariot-shaped temple of Surya on the Odisha coast."}];

const MEMORY_PAIRS = [["Babur","First Panipat 1526"],["Akbar","Second Panipat 1556"],["Rana Pratap","Haldighati 1576"],["Krishnadevaraya","Vijayanagara"],["Lachit Borphukan","Saraighat 1671"],["Guru Gobind Singh","Khalsa 1699"],["Shah Jahan","Taj Mahal"],["Rana Kumbha","Kumbhalgarh"]];

const ACHIEVEMENT_DEFS = [
  {id:'first-chapter',label:'First Scroll',desc:'Complete any chapter',icon:'📜',test:s=>s.completedChapters.length>=1},
  {id:'empire-builder',label:'Empire Builder',desc:'Complete 4 chapters',icon:'🏰',test:s=>s.completedChapters.length>=4},
  {id:'hundred',label:'100% Reader',desc:`Complete all ${CHAPTERS.length} chapters`,icon:'📚',test:s=>s.completedChapters.length===CHAPTERS.length},
  {id:'king-slayer',label:'King Slayer',desc:'Defeat any boss',icon:'⚔',test:s=>s.bossesDefeated.length>=1},
  {id:'battle-master',label:'Battle Master',desc:'Defeat 5 bosses',icon:'🛡',test:s=>s.bossesDefeated.length>=5},
  {id:'history-legend',label:'History Legend',desc:'Defeat all bosses',icon:'👑',test:s=>s.bossesDefeated.length===CHAPTERS.length},
  {id:'map-genius',label:'Map Genius',desc:`Visit all ${KINGDOMS.length} kingdoms`,icon:'🗺',test:s=>s.visitedKingdoms.length===KINGDOMS.length},
  {id:'timeline',label:'Perfect Timeline',desc:'Sort the timeline correctly',icon:'⏳',test:s=>s.timelineCompleted},
  {id:'sharp',label:'Sharp Mind',desc:'Reach 80% accuracy (20+ Qs)',icon:'🧠',test:s=>s.questionsAnswered>=20 && Math.round(s.correctAnswers/Math.max(1,s.questionsAnswered)*100)>=80},
  {id:'grinder',label:'Grinder',desc:'Answer 100 questions',icon:'💎',test:s=>s.questionsAnswered>=100},
];

const RANKS = [{min:0,title:'Village Student'},{min:200,title:'Historian'},{min:500,title:'Commander'},{min:1000,title:'Royal Advisor'},{min:2000,title:'Empire Builder'},{min:4000,title:'Legend'}];

const INDIA_PATH = "M 42 5 L 52 6 L 58 12 L 62 20 L 60 28 L 66 34 L 72 34 L 82 30 L 82 38 L 76 44 L 72 46 L 68 50 L 66 60 L 62 70 L 56 80 L 50 88 L 44 94 L 40 90 L 36 80 L 30 68 L 26 58 L 24 50 L 22 44 L 20 36 L 24 28 L 30 20 L 36 12 Z";

const NAV = [
  {href:'story',emoji:'▶',label:'Start Adventure'},{href:'map',emoji:'🗺',label:'Explore Map'},
  {href:'timeline',emoji:'📜',label:'Timeline Trial'},{href:'quiz',emoji:'🧠',label:'Practice Quiz'},
  {href:'boss',emoji:'⚔',label:'Battle Arena'},{href:'rapidfire',emoji:'⚡',label:'Rapid Fire'},
  {href:'memory',emoji:'🃏',label:'Memory Match'},{href:'puzzle',emoji:'🏛',label:'Monument Puzzle'},
  {href:'mapchallenge',emoji:'📍',label:'Map Challenge'},{href:'flashcards',emoji:'🗂',label:'Flashcards'},
  {href:'exam',emoji:'🎯',label:'Mock Test'},{href:'revision',emoji:'🩹',label:'Revision'},
  {href:'missions',emoji:'🎁',label:'Daily Missions'},{href:'achievements',emoji:'🏆',label:'Achievements'},
  {href:'analytics',emoji:'📊',label:'Analytics'},{href:'inventory',emoji:'🎒',label:'Inventory'},
  {href:'progress',emoji:'📈',label:'Progress'},{href:'settings',emoji:'⚙',label:'Settings'},
];

/* ============================== STATE ============================== */
const STORE_KEY = 'empire-chronicles-save';
function defaultState(){
  return {playerName:'Young Historian',avatar:'🧙',banner:'🏳',xp:0,coins:0,crowns:0,scrolls:0,diamonds:0,
    completedChapters:[],bossesDefeated:[],questionsAnswered:0,correctAnswers:0,wrongIds:[],seenIds:[],
    chapterAcc:{},typeAcc:{},timelineCompleted:false,visitedKingdoms:[],mapChallengeBest:0,memoryBest:0,rapidBest:0,
    inventory:[],favorites:[],mastered:[],streak:0,lastPlayed:'',dailyDate:'',
    dailyProgress:{qs:0,timeline:false,boss:false,chapter:false},history:[],
    settings:{sound:true,animations:true,language:'en',difficulty:'adaptive'}};
}
function todayStr(){ return new Date().toISOString().slice(0,10); }
function loadState(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(!raw) return rollDaily(defaultState());
    const parsed = JSON.parse(raw);
    return rollDaily({...defaultState(), ...parsed, settings:{...defaultState().settings, ...(parsed.settings||{})}, dailyProgress:{...defaultState().dailyProgress, ...(parsed.dailyProgress||{})}});
  }catch(e){ return rollDaily(defaultState()); }
}
function rollDaily(s){
  const t = todayStr();
  if(s.dailyDate !== t){
    const yesterday = new Date(Date.now()-86400000).toISOString().slice(0,10);
    const streak = s.dailyDate===yesterday ? s.streak : (s.lastPlayed ? 0 : s.streak);
    return {...s, dailyDate:t, dailyProgress:{qs:0,timeline:false,boss:false,chapter:false}, streak};
  }
  return s;
}
let STATE = loadState();
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
function activeUnreviewedChapterCq(){
  for(const c of CHAPTERS){
    const started = (STATE.chapterAcc[c.id]?.seen ?? 0) > 0;
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('cq', String(c.id));
    if(started && !reviewed) return c;
  }
  return null;
}
function isChapterUnlockedCq(i){
  const active = activeUnreviewedChapterCq();
  return !active || active.id===CHAPTERS[i].id;
}
function chapterNeedsReviewCq(i){
  const active = activeUnreviewedChapterCq();
  return !!active && active.id!==CHAPTERS[i].id;
}
window.__openChapterReviewCq = ()=>{
  const active = activeUnreviewedChapterCq();
  if(!active){ renderStoryList(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'cq',
    moduleId: String(active.id),
    moduleTitle: active.title,
    lessonTitles: [active.title],
    onPass: renderStoryList,
    onExit: renderStoryList,
  });
};
function recordHistory(correct){
  const t = todayStr();
  const h = [...STATE.history];
  const last = h[h.length-1];
  if(last && last.date===t){ last.qs++; if(correct) last.right++; }
  else { h.push({date:t, qs:1, right: correct?1:0}); if(h.length>30) h.shift(); }
  return {history:h, lastPlayed:t};
}
function grant(g){
  update({
    coins: STATE.coins+(g.coins||0), crowns: STATE.crowns+(g.crowns||0), scrolls: STATE.scrolls+(g.scrolls||0),
    diamonds: STATE.diamonds+(g.diamonds||0), xp: STATE.xp+(g.xp||0),
    inventory: g.item && !STATE.inventory.includes(g.item) ? [...STATE.inventory, g.item] : STATE.inventory,
  });
}
function addXp(n){ update({xp: STATE.xp+n}); }
function recordAnswer(e){
  if(!e.correct && typeof atlasRecordMistake === 'function') atlasRecordMistake('cq', e.type||'general', e);
  STATE = {...STATE, ...recordHistory(e.correct)};
  const chAcc = STATE.chapterAcc[e.chapter] || {seen:0,right:0};
  const tyAcc = STATE.typeAcc[e.type] || {seen:0,right:0};
  const wrongIds = e.correct ? STATE.wrongIds.filter(id=>id!==e.id) : (STATE.wrongIds.includes(e.id)?STATE.wrongIds:[...STATE.wrongIds,e.id]);
  const seenIds = STATE.seenIds.includes(e.id) ? STATE.seenIds : [...STATE.seenIds, e.id];
  update({
    questionsAnswered: STATE.questionsAnswered+1, correctAnswers: STATE.correctAnswers + (e.correct?1:0),
    xp: STATE.xp + (e.correct?15:0), coins: STATE.coins + (e.correct?8:0),
    wrongIds, seenIds,
    chapterAcc: {...STATE.chapterAcc, [e.chapter]: {seen:chAcc.seen+1, right:chAcc.right+(e.correct?1:0)}},
    typeAcc: {...STATE.typeAcc, [e.type]: {seen:tyAcc.seen+1, right:tyAcc.right+(e.correct?1:0)}},
    dailyProgress: {...STATE.dailyProgress, qs: STATE.dailyProgress.qs+1},
  });
}
function completeChapter(id){
  if(STATE.completedChapters.includes(id)) return;
  update({completedChapters:[...STATE.completedChapters,id], crowns:STATE.crowns+1, scrolls:STATE.scrolls+1, xp:STATE.xp+100,
    dailyProgress:{...STATE.dailyProgress, chapter:true}});
}
function defeatBoss(id){
  if(STATE.bossesDefeated.includes(id)) return;
  update({bossesDefeated:[...STATE.bossesDefeated,id], crowns:STATE.crowns+2, diamonds:STATE.diamonds+1, xp:STATE.xp+200,
    dailyProgress:{...STATE.dailyProgress, boss:true}});
}
function visitKingdom(id){
  if(STATE.visitedKingdoms.includes(id)) return;
  update({visitedKingdoms:[...STATE.visitedKingdoms,id], xp:STATE.xp+20});
}
function toggleFavorite(id){ update({favorites: STATE.favorites.includes(id)?STATE.favorites.filter(x=>x!==id):[...STATE.favorites,id]}); }
function toggleMastered(id){ update({mastered: STATE.mastered.includes(id)?STATE.mastered.filter(x=>x!==id):[...STATE.mastered,id]}); }
function completeDailyStreak(){
  const d = STATE.dailyProgress;
  if(d.qs>=25 && d.timeline && d.boss && d.chapter && STATE.lastPlayed===todayStr()) update({streak: STATE.streak+1, diamonds: STATE.diamonds+2});
}
function updateSettings(patch){ update({settings:{...STATE.settings, ...patch}}); }
function resetSave(){ STATE = defaultState(); if(typeof atlasProfile !== 'undefined' && atlasProfile){ STATE.xp = atlasProfile.xp||0; STATE.coins = atlasProfile.coins||0; } save(); }
function levelInfo(xp){
  let idx=1;
  for(let i=0;i<RANKS.length;i++) if(xp>=RANKS[i].min) idx=i+1;
  const cur = RANKS[idx-1], next = RANKS[idx] || {min:cur.min+2000,title:'Legend'};
  const progress = Math.min(1, (xp-cur.min)/(next.min-cur.min));
  return {level:idx, title:cur.title, progress, next:next.min};
}
function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function chapterTitle(id){ const c = CHAPTERS.find(c=>c.id===id); return c?c.title:id; }
function renderOpts(q, picked, onClickFn){
  if(q.render==='seal'){
    return `<div class="seal-grid">${q.options.map((o,i)=>{
      let cls='seal-scroll'; if(picked!=null){ cls += i===q.answer?' correct':(i===picked?' wrong':' dim'); }
      return `<button class="${cls}" ${picked!=null?'disabled':''} onclick="${onClickFn(i)}"><span class="seal-wax">${String.fromCharCode(65+i)}</span><span class="seal-text">${o}</span></button>`;
    }).join('')}</div>`;
  }
  return `<div class="opt-grid">${q.options.map((o,i)=>{
    let cls='opt-btn'; if(picked!=null) cls += i===q.answer?' correct':(i===picked?' wrong':' dim');
    return `<button class="${cls}" ${picked!=null?'disabled':''} onclick="${onClickFn(i)}"><b>${String.fromCharCode(65+i)}.</b>${o}</button>`;
  }).join('')}</div>`;
}

/* ============================== ROUTER / SHELL ============================== */
const app = document.getElementById('app');
function route(){
  const hash = location.hash.replace(/^#\/cq\/?/,'') || '';
  const [path, qs] = hash.split('?');
  const params = Object.fromEntries(new URLSearchParams(qs||''));
  render(path||'home', params);
}
if(window.__cqHashListener) window.removeEventListener('hashchange', window.__cqHashListener);
window.__cqHashListener = function(){ if(!location.hash.startsWith('#/cq')) return; route(); };
window.addEventListener('hashchange', window.__cqHashListener);
function nav(path){ location.hash = '#/cq/'+path; }

function Shell(title, subtitle, bodyHtml){
  const lv = levelInfo(STATE.xp);
  return `
    <div class="topbar">
      <button class="back" onclick="history.length>1?history.back():nav('home')">← Back</button>
      <div class="stats">
        <span>✦ Lv${lv.level}</span>
        <span>🪙 ${STATE.coins}</span>
        <span>👑 ${STATE.crowns}</span>
        <span>💎 ${STATE.diamonds}</span>
        <span>🔥 ${STATE.streak}</span>
      </div>
    </div>
    <div class="wrap">
      <div class="shell-head">
        <div class="eyebrow">Empire Chronicles</div>
        <h1>${title}</h1>
        <p class="sub">${subtitle}</p>
      </div>
      ${bodyHtml}
    </div>`;
}

function render(path, params){
  window.scrollTo(0,0);
  if(path==='home') return renderHome();
  if(path==='story') return params.chapter ? renderStoryChapter(params.chapter) : renderStoryList();
  if(path==='map') return renderMap();
  if(path==='timeline') return renderTimeline();
  if(path==='quiz') return renderQuiz();
  if(path==='boss') return params.chapter ? renderBossBattle(params.chapter) : renderBossList();
  if(path==='rapidfire') return renderRapidFire();
  if(path==='memory') return renderMemory();
  if(path==='puzzle') return renderPuzzle();
  if(path==='mapchallenge') return renderMapChallenge();
  if(path==='flashcards') return renderFlashcards();
  if(path==='exam') return renderExam();
  if(path==='revision') return renderRevision();
  if(path==='missions') return renderMissions();
  if(path==='achievements') return renderAchievements();
  if(path==='analytics') return renderAnalytics();
  if(path==='inventory') return renderInventory();
  if(path==='progress') return renderProgress();
  if(path==='settings') return renderSettings();
  return renderHome();
}

/* ---------------- HOME ---------------- */
function renderHome(){
  app.innerHTML = `
    <div class="topbar"><div style="flex:1"></div>
      <div class="stats"><span>✦ Lv${levelInfo(STATE.xp).level}</span><span>🪙 ${STATE.coins}</span><span>👑 ${STATE.crowns}</span><span>🔥 ${STATE.streak}</span></div>
    </div>
    <div id="home-hero">
      <div class="badge">📜</div>
      <div class="eyebrow">NCERT · Grade 8 · History Chapter 2</div>
      <h1>Empire Chronicles</h1>
      <p class="sub">The Rise and Fall of Medieval India</p>
    </div>
    <div class="wrap">
      <div class="nav-grid">
        ${NAV.map(n=>`<a class="nav-card" href="#/cq/${n.href}"><div class="ic">${n.emoji}</div><div class="lb">${n.label}</div></a>`).join('')}
      </div>
      <p class="footnote">Progress saves automatically. Journey through eight kingdoms, face nine bosses, and master three centuries of history.</p>
    </div>`;
}

/* ---------------- STORY LIST ---------------- */
function renderStoryList(){
  const body = `<div>${CHAPTERS.map((c,i)=>{
    const unlocked = isChapterUnlockedCq(i);
    const needsReview = chapterNeedsReviewCq(i);
    const href = unlocked ? '#/cq/story?chapter='+c.id : '#';
    const clickAttr = needsReview ? `onclick="__openChapterReviewCq();return false;"` : '';
    return `<a class="chapter-card ${unlocked?'':(needsReview?'needs-review':'locked')}" href="${href}" ${clickAttr}>
      <div class="ic">${unlocked?c.emoji:(needsReview?'📝':'🔒')}</div>
      <div>
        <div class="yrs">Chapter ${i+1} · ${c.years}</div>
        <h3>${c.title}</h3>
        <div class="sub">${needsReview?'Tap to take the Module Review →':c.subtitle}</div>
        <p>${unlocked?c.intro:''}</p>
      </div>
    </a>`;
  }).join('')}</div>`;
  app.innerHTML = Shell('Choose Your Chapter', 'Each kingdom holds a story. Each story holds a boss.', body);
}

/* ---------------- STORY CHAPTER READER ---------------- */
function renderStoryChapter(id){
  const ch = CHAPTERS.find(c=>c.id===id);
  if(!ch){ nav('story'); return; }
  const chIdx = CHAPTERS.findIndex(c=>c.id===id);
  if(!isChapterUnlockedCq(chIdx)){ renderStoryList(); return; }
  const qs = shuffle(QUESTIONS.filter(q=>q.chapter===id)).slice(0,3);
  const total = 4 + qs.length;
  let page = 0, answered = {};

  function pageHtml(){
    if(page===0) return `<div class="pill" style="margin-bottom:10px;display:inline-block">✦ The Scroll Unfurls</div><p style="font-size:18px;line-height:1.7">${ch.intro}</p>`;
    if(page===1) return `<div class="pill" style="margin-bottom:10px;display:inline-block">✦ The Rulers</div><div class="opt-grid" style="grid-template-columns:1fr 1fr">${ch.rulers.map(r=>`<div class="card" style="padding:14px"><div class="disp" style="color:var(--gold)">${r.name}</div><div style="font-size:12px;color:var(--muted)">${r.reign}</div><ul style="margin:8px 0 0;padding-left:18px;font-size:13.5px">${r.facts.map(f=>`<li>${f}</li>`).join('')}</ul></div>`).join('')}</div>`;
    if(page===2) return `<div class="pill" style="margin-bottom:10px;display:inline-block">✦ Administration</div><ul style="padding-left:20px;line-height:1.8">${ch.administration.map(a=>`<li>${a}</li>`).join('')}</ul><div class="pill" style="margin:16px 0 10px;display:inline-block">✦ Key Events</div><ul style="padding-left:20px;line-height:1.8">${ch.keyEvents.map(e=>`<li>⚔ ${e}</li>`).join('')}</ul>`;
    if(page===3) return `<div class="pill" style="margin-bottom:10px;display:inline-block">✦ Monuments Left Behind</div><div class="pillrow">${ch.monuments.map(m=>`<span class="pill" style="border-color:var(--gold);color:var(--gold)">🏛 ${m}</span>`).join('')}</div>`;
    const qi = page-4;
    const q = qs[qi];
    const picked = answered[qi];
    return `<div class="pill" style="margin-bottom:10px;display:inline-block">✦ Prove Your Knowledge</div>
      <h3 style="margin-top:6px">${q.q}</h3>
      ${renderOpts(q, picked, i=>`__storyAnswer(${qi},${i})`)}
      ${picked!==undefined?`<div class="explain-box"><div class="verdict">${picked===q.answer?'✓ Correct!':'✗ Not quite'}</div><p style="margin:6px 0 12px">${q.explain}</p><button class="btn btn-primary" onclick="__storyNext()">Continue →</button></div>`:''}`;
  }
  function footer(){
    const done = STATE.completedChapters.includes(id);
    if(page<4) return `<div style="display:flex;justify-content:space-between;margin-top:20px">
        <button class="btn btn-outline" ${page===0?'disabled':''} onclick="__storyBack()">← Back</button>
        <button class="btn btn-primary" onclick="__storyForward()">Continue →</button>
      </div>`;
    if(page < total-1) return `<div style="display:flex;justify-content:space-between;margin-top:20px"><button class="btn btn-outline" onclick="__storyBack()">← Back</button><div></div></div>`;
    return `<div style="display:flex;justify-content:space-between;margin-top:20px">
        <button class="btn btn-outline" onclick="__storyBack()">← Back</button>
        <div style="display:flex;gap:10px">
          <button class="btn btn-primary" onclick="__storyClaim()">${done?'✓ Chapter Read':'Claim +100 XP'}</button>
          <a class="btn" style="background:var(--destructive);color:#fff" href="#/cq/boss?chapter=${id}">⚔ Face ${ch.boss.name}</a>
        </div>
      </div>`;
  }
  function draw(){
    app.innerHTML = Shell(`${ch.emoji} ${ch.title}`, `${ch.years} · ${ch.subtitle}`, `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
        <div class="progress-bar" style="flex:1"><div class="progress-fill" style="width:${(page+1)/total*100}%"></div></div>
        <div style="font-size:12px;color:var(--muted)">${page+1}/${total}</div>
      </div>
      <div class="card" style="min-height:340px">${pageHtml()}</div>
      ${footer()}`);
  }
  window.__storyForward = ()=>{ page = Math.min(total-1, page+1); draw(); };
  window.__storyBack = ()=>{ page = Math.max(0, page-1); draw(); };
  window.__storyAnswer = (qi,i)=>{ answered[qi]=i; recordAnswer({id:qs[qi].id, correct:i===qs[qi].answer, chapter:qs[qi].chapter, type:qs[qi].type}); draw(); };
  window.__storyNext = ()=>{ page = Math.min(total-1, page+1); draw(); };
  window.__storyClaim = ()=>{ completeChapter(id); draw(); };
  draw();
}

/* ---------------- MAP ---------------- */
function renderMap(){
  let selected = null;
  function draw(){
    const sel = KINGDOMS.find(k=>k.id===selected);
    const ch = sel ? CHAPTERS.find(c=>c.id===sel.chapter) : null;
    const body = `<div class="map-grid">
      <div class="map-svg-wrap">
        <svg viewBox="0 0 100 100" style="width:100%;height:100%">
          <path d="${INDIA_PATH}" fill="#4d3f80" stroke="var(--gold)" stroke-width="0.4" opacity="0.9"/>
          ${KINGDOMS.map(k=>{
            const visited = STATE.visitedKingdoms.includes(k.id);
            const active = selected===k.id;
            return `<g style="cursor:pointer" onclick="__mapPick('${k.id}')">
              <circle cx="${k.x}" cy="${k.y}" r="${active?2.6:1.8}" fill="${visited?'var(--gold)':'#a89fce'}"/>
              <circle cx="${k.x}" cy="${k.y}" r="4" fill="var(--gold)" opacity="0.15"/>
              <text x="${k.x}" y="${k.y-3}" class="map-pin-label">${k.name}</text>
            </g>`;
          }).join('')}
        </svg>
      </div>
      <div class="card" style="min-height:380px">
        ${ch ? `
          <div class="pill" style="display:inline-block">${ch.years}</div>
          <h3 style="margin:10px 0 4px">${ch.emoji} ${sel.name}</h3>
          <p style="font-size:14px;color:#cfc7ea">${ch.intro}</p>
          <div style="margin-top:14px"><div class="disp" style="color:var(--primary);font-size:13px">Rulers</div>
            <ul style="padding-left:18px;font-size:13.5px">${ch.rulers.slice(0,4).map(r=>`<li>◆ ${r.name} <span style="color:var(--muted);font-size:12px">(${r.reign})</span></li>`).join('')}</ul></div>
          <div style="margin-top:12px"><div class="disp" style="color:var(--primary);font-size:13px">Monuments</div>
            <div class="pillrow" style="margin-top:8px">${ch.monuments.map(m=>`<span class="pill">${m}</span>`).join('')}</div></div>
          <a class="btn btn-primary" style="display:inline-block;margin-top:16px" href="#/cq/story?chapter=${ch.id}">Enter this chapter →</a>
        ` : `<div style="text-align:center;color:var(--muted);padding-top:60px"><div style="font-size:40px">🗺</div><p style="font-style:italic;margin-top:14px">Select a kingdom banner on the map.</p><p style="font-size:12px">Visited: ${STATE.visitedKingdoms.length} / ${KINGDOMS.length}</p></div>`}
      </div>
    </div>`;
    app.innerHTML = Shell('Bharatavarsha', 'Click a banner to survey a kingdom', body);
  }
  window.__mapPick = (id)=>{ selected=id; visitKingdom(id); draw(); };
  draw();
}

/* ---------------- TIMELINE ---------------- */
function renderTimeline(){
  let order = shuffle(DATES);
  let checked = false;
  function draw(){
    const sorted = [...DATES].sort((a,b)=>a.year-b.year);
    const matches = order.map((e,i)=>e.year===sorted[i].year);
    const allOk = matches.every(Boolean);
    const body = `
      <div class="pillrow">
        <button class="btn btn-outline" onclick="__tlShuffle()">🔀 Shuffle</button>
        <button class="btn btn-primary" onclick="__tlCheck()">✓ Check Order</button>
        ${checked?`<div class="pill" style="${allOk?'border-color:var(--gold);color:var(--gold)':'border-color:var(--destructive);color:var(--destructive)'}">${allOk?'Perfect! +150 XP':matches.filter(Boolean).length+'/'+order.length+' in place'}</div>`:''}
      </div>
      <div>${order.map((e,i)=>{
        const ok = checked && matches[i], bad = checked && !matches[i];
        return `<div class="tl-item ${ok?'correct':bad?'wrong':''}">
          <div class="tl-year">${checked?e.year:'????'}</div>
          <div style="flex:1">${e.event}</div>
          <div class="tl-ud"><button onclick="__tlMove(${i},${i-1})">↑</button><button onclick="__tlMove(${i},${i+1})">↓</button></div>
        </div>`;
      }).join('')}</div>`;
    app.innerHTML = Shell('Timeline of Empires', 'Order the events. Golden glow means truth.', body);
  }
  window.__tlShuffle = ()=>{ order=shuffle(DATES); checked=false; draw(); };
  window.__tlMove = (i,j)=>{ if(j<0||j>=order.length) return; const a=[...order]; const [x]=a.splice(i,1); a.splice(j,0,x); order=a; checked=false; draw(); };
  window.__tlCheck = ()=>{
    checked = true;
    const sorted=[...DATES].sort((a,b)=>a.year-b.year);
    const allOk = order.every((e,i)=>e.year===sorted[i].year);
    if(allOk){ addXp(150); update({timelineCompleted:true, dailyProgress:{...STATE.dailyProgress, timeline:true}}); }
    draw();
  };
  draw();
}

/* ---------------- QUIZ (Practice) ---------------- */
function renderQuiz(){
  let filter='all', round=0, idx=0, picked=null, score=0, pool=[];
  function buildPool(){ pool = shuffle(filter==='all'?QUESTIONS:QUESTIONS.filter(q=>q.chapter===filter||q.difficulty===filter)).slice(0,10); }
  buildPool();
  function draw(){
    const doneAll = idx>=pool.length;
    const q = pool[idx];
    const filters = [{v:'all',l:'All'},{v:'easy',l:'Easy'},{v:'medium',l:'Medium'},{v:'hard',l:'Hard'},...CHAPTERS.map(c=>({v:c.id,l:c.title}))];
    const body = `
      <div class="pillrow">${filters.map(f=>`<button class="pill ${filter===f.v?'active':''}" onclick="__quizFilter('${f.v}')">${f.l}</button>`).join('')}</div>
      <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--muted);margin-bottom:8px"><span>Question ${Math.min(idx+1,pool.length)} of ${pool.length}</span><span style="color:var(--gold)">Score: ${score}</span></div>
      <div class="progress-bar" style="margin-bottom:18px"><div class="progress-fill" style="width:${(doneAll?pool.length:idx)/pool.length*100}%"></div></div>
      <div class="card" style="min-height:340px">
      ${doneAll ? `<div style="text-align:center;padding:30px 0"><div style="font-size:50px">🏆</div><h3 class="shimmer" style="font-size:26px;margin-top:10px">Round Complete</h3><p style="color:var(--muted);margin-top:8px">You scored <b style="color:var(--gold)">${score} / ${pool.length}</b></p><button class="btn btn-primary" style="margin-top:16px" onclick="__quizAgain()">Play Again</button></div>`
        : `<div class="pill" style="display:inline-block">${q.difficulty} · ${chapterTitle(q.chapter)}</div>
           <h3 style="margin-top:10px">${q.q}</h3>
           ${renderOpts(q, picked, i=>`__quizPick(${i})`)}
           ${picked!==null?`<div class="explain-box"><div class="verdict">${picked===q.answer?'✓ Correct':'✗ Wrong'}</div><p style="margin:6px 0 12px">${q.explain}</p><button class="btn btn-primary" onclick="__quizNext()">Next →</button></div>`:''}`}
      </div>`;
    app.innerHTML = Shell('Practice Quiz', 'Ten questions. No pattern. No mercy.', body);
  }
  window.__quizFilter = (v)=>{ filter=v; round++; idx=0; picked=null; score=0; buildPool(); draw(); };
  window.__quizPick = (i)=>{ if(picked!==null) return; picked=i; const q=pool[idx]; const correct=i===q.answer; if(correct) score++; recordAnswer({id:q.id, correct, chapter:q.chapter, type:q.type}); draw(); };
  window.__quizNext = ()=>{ picked=null; idx++; draw(); };
  window.__quizAgain = ()=>{ round++; idx=0; picked=null; score=0; buildPool(); draw(); };
  draw();
}

/* ---------------- BOSS LIST + BATTLE ---------------- */
function renderBossList(){
  const body = `<div class="opt-grid" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">
    ${CHAPTERS.map(c=>`<a class="card" href="#/cq/boss?chapter=${c.id}" style="display:block">
      <div style="font-size:30px">${c.emoji}</div>
      <div class="disp" style="color:var(--gold);margin-top:6px">${c.boss.name}</div>
      <div style="font-size:12px;color:var(--muted)">${c.boss.title}</div>
      <p style="font-size:13px;font-style:italic;color:#cfc7ea;margin-top:6px">"${c.boss.quote}"</p>
      <div style="margin-top:8px;display:flex;gap:8px;font-size:11.5px">
        <span class="pill" style="border-color:var(--destructive);color:var(--destructive)">HP ${c.boss.hp}</span>
        <span class="pill">${c.title}</span>
      </div>
    </a>`).join('')}
  </div>`;
  app.innerHTML = Shell('Battle Arena', 'Choose your foe', body);
}
function renderBossBattle(chapterId){
  const ch = CHAPTERS.find(c=>c.id===chapterId);
  if(!ch){ nav('boss'); return; }
  const own = shuffle(QUESTIONS.filter(q=>q.chapter===chapterId));
  const rest = shuffle(QUESTIONS.filter(q=>q.chapter!==chapterId));
  const rounds = [...own, ...rest].slice(0,8);
  let bossHp=ch.boss.hp, playerHp=100, round=0, combo=0, picked=null, shake=false;
  function draw(){
    const q = rounds[round];
    const bossDead = bossHp<=0, playerDead = playerHp<=0, over = bossDead||playerDead||round>=rounds.length;
    const body = `<div class="duel-grid">
      <div class="hpcard"><div class="em">${ch.emoji}</div><div class="disp" style="color:var(--gold)">${ch.boss.name}</div>
        <div class="hpbar"><div class="fill" style="width:${Math.max(0,bossHp/ch.boss.hp*100)}%;background:linear-gradient(90deg,var(--destructive),var(--blood))"></div></div>
        <div style="font-size:12px;color:var(--muted);margin-top:4px">HP ${Math.max(0,bossHp)} / ${ch.boss.hp}</div></div>
      <div class="hpcard"><div class="em">${STATE.avatar}</div><div class="disp" style="color:var(--gold)">${STATE.playerName}</div>
        <div class="hpbar"><div class="fill" style="width:${Math.max(0,playerHp)}%;background:linear-gradient(90deg,var(--primary),#c8b8ff)"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--muted);margin-top:4px"><span>HP ${Math.max(0,playerHp)}/100</span><span>Combo ×${combo}</span></div></div>
    </div>
    <div class="card" style="margin-top:18px;min-height:220px">
      ${over ? `<div style="text-align:center">
          ${bossDead?`<div style="font-size:50px">👑</div><h3 class="shimmer" style="font-size:26px">Victory!</h3><p style="color:var(--muted);margin-top:8px">You have defeated ${ch.boss.name}. +200 XP · +2 Crowns</p>`
          : playerDead?`<div style="font-size:50px">💀</div><h3 style="font-size:24px;color:var(--destructive)">Defeat</h3><p style="color:var(--muted);margin-top:8px">The boss prevails. Study more and return.</p>`
          : `<div style="font-size:50px">🏳</div><h3 style="font-size:22px">Stalemate</h3>`}
          <div style="display:flex;gap:10px;justify-content:center;margin-top:18px">
            <a class="btn btn-outline" href="#/cq/boss">Choose another foe</a>
            <a class="btn btn-primary" href="#/cq/quiz">Train more</a>
          </div></div>`
      : `<div style="font-size:11px;color:var(--destructive);text-transform:uppercase;letter-spacing:.08em">Round ${round+1} · Combo ×${combo}</div>
         <h3 style="margin-top:8px">${q.q}</h3>
         ${renderOpts(q, picked, i=>`__bossPick(${i})`)}
         ${picked!==null?`<div class="explain-box" style="display:flex;justify-content:space-between;align-items:center;gap:14px"><p style="margin:0"><b style="color:var(--gold)">Truth:</b> ${q.explain}</p><button class="btn btn-primary" onclick="__bossNext()">Strike again →</button></div>`:''}`}
    </div>`;
    app.innerHTML = Shell(`⚔ Duel: ${ch.boss.name}`, ch.boss.title, body);
    if(bossDead) defeatBoss(chapterId);
  }
  window.__bossPick = (i)=>{
    if(picked!==null) return; picked=i;
    const q = rounds[round]; const correct = i===q.answer;
    recordAnswer({id:q.id, correct, chapter:q.chapter, type:q.type});
    if(correct){ const dmg=25+combo*5; bossHp=Math.max(0,bossHp-dmg); combo++; }
    else { playerHp=Math.max(0,playerHp-20); combo=0; }
    draw();
  };
  window.__bossNext = ()=>{ picked=null; round++; draw(); };
  draw();
}

/* ---------------- RAPID FIRE ---------------- */
function renderRapidFire(){
  let playing=false, timeLeft=60, round=0, idx=0, combo=0, bestCombo=0, score=0, timer=null;
  const pool = shuffle(QUESTIONS);
  function draw(){
    const q = pool[idx % pool.length];
    const body = `
      <div class="pillrow">
        <div class="pill" style="font-family:'Cinzel',serif;color:var(--gold)">⏱ ${timeLeft}s</div>
        <div class="pill">Score <b style="color:var(--gold)">${score}</b></div>
        <div class="pill">Combo ×${combo}</div>
        <div class="pill">Best combo: ${STATE.rapidBest}</div>
      </div>
      ${playing ? `<div class="card"><h3>${q.q}</h3><div class="opt-grid">${q.options.map((o,i)=>`<button class="opt-btn" onclick="__rfPick(${i})"><b>${String.fromCharCode(65+i)}.</b>${o}</button>`).join('')}</div></div>`
      : `<div class="card" style="text-align:center;padding:50px 0"><div style="font-size:50px">⚡</div><h3 style="margin-top:10px">${timeLeft<=0?`Time up! Score ${score}`:'Ready?'}</h3><button class="btn btn-primary" style="margin-top:18px" onclick="__rfStart()">${timeLeft<=0?'Play Again':'Start'}</button></div>`}`;
    app.innerHTML = Shell('Rapid Fire', '60 seconds. Combos multiply.', body);
  }
  window.__rfStart = ()=>{
    round++; idx=0; combo=0; score=0; timeLeft=60; playing=true; draw();
    timer = setInterval(()=>{ timeLeft--; if(timeLeft<=0){ clearInterval(timer); playing=false; grant({xp:score*5, coins:score*3}); if(combo>STATE.rapidBest) update({rapidBest:combo}); } draw(); },1000);
  };
  window.__rfPick = (i)=>{
    const q = pool[idx % pool.length]; const correct = i===q.answer;
    recordAnswer({id:q.id, correct, chapter:q.chapter, type:q.type});
    if(correct){ combo++; bestCombo=Math.max(bestCombo,combo); score += 1+Math.floor(combo/3); if(combo>STATE.rapidBest) update({rapidBest:combo}); }
    else combo=0;
    idx++; draw();
  };
  draw();
}

/* ---------------- MEMORY MATCH ---------------- */
function renderMemory(){
  let round=0, deck=[], flipped=[], matched=[], moves=0;
  function buildDeck(){ deck = shuffle(MEMORY_PAIRS.flatMap((pair,pi)=>pair.map(v=>({v,pair:pi})))); }
  buildDeck();
  function draw(){
    const complete = matched.length===MEMORY_PAIRS.length;
    const body = `<div class="pillrow">
        <div class="pill">Moves: <b style="color:var(--gold)">${moves}</b></div>
        <div class="pill">Matched: <b style="color:var(--gold)">${matched.length}/${MEMORY_PAIRS.length}</b></div>
        ${STATE.memoryBest>0?`<div class="pill" style="border-color:var(--primary);color:var(--primary)">Best: ${STATE.memoryBest}</div>`:''}
        <button class="btn btn-outline" style="margin-left:auto" onclick="__memNew()">🔀 New game</button>
      </div>
      <div class="mem-grid">${deck.map((c,i)=>{
        const shown = flipped.includes(i) || matched.includes(c.pair);
        return `<button class="mem-card ${shown?'flipped':''} ${matched.includes(c.pair)?'matched':''}" onclick="__memFlip(${i})">${shown?c.v:'📜'}</button>`;
      }).join('')}</div>
      ${complete?`<div style="text-align:center;margin-top:20px" class="shimmer disp" style="font-size:22px">Perfect Memory! +80 XP · +1 Scroll</div>`:''}`;
    app.innerHTML = Shell('Memory Match', 'Pair rulers with their empires, battles, and monuments', body);
  }
  window.__memNew = ()=>{ round++; buildDeck(); flipped=[]; matched=[]; moves=0; draw(); };
  window.__memFlip = (i)=>{
    if(flipped.length>=2 || flipped.includes(i) || matched.includes(deck[i].pair)) return;
    flipped=[...flipped,i];
    if(flipped.length===2){
      moves++;
      const [a,b]=flipped;
      if(deck[a].pair===deck[b].pair){
        matched=[...matched, deck[a].pair];
        setTimeout(()=>{ flipped=[]; draw(); if(matched.length===MEMORY_PAIRS.length){ grant({xp:80,coins:30,scrolls:1}); if(!STATE.memoryBest||moves<STATE.memoryBest) update({memoryBest:moves}); } },400);
      } else setTimeout(()=>{ flipped=[]; draw(); },700);
    }
    draw();
  };
  draw();
}

/* ---------------- MONUMENT PUZZLE ---------------- */
function renderPuzzle(){
  let sel=0, tiles, hold=null;
  function shuffleTiles(){ tiles = shuffle([...Array(MONUMENT_TILES[sel].cols*MONUMENT_TILES[sel].rows).keys()]); hold=null; }
  shuffleTiles();
  function draw(){
    const m = MONUMENT_TILES[sel];
    const done = tiles.every((v,i)=>v===i);
    const body = `<div class="pillrow">${MONUMENT_TILES.map((mm,i)=>`<button class="pill ${sel===i?'active':''}" onclick="__pzSel(${i})">${mm.name}</button>`).join('')}</div>
      <div style="max-width:420px;margin:0 auto">
        <p style="text-align:center;font-style:italic;color:var(--muted);font-size:13.5px">${m.fact} — built by ${m.builder}</p>
        <div style="display:grid;gap:4px;grid-template-columns:repeat(${m.cols},1fr);margin-top:12px">
          ${tiles.map((v,i)=>{
            const r0=Math.floor(v/m.cols), c0=v%m.cols, correct=v===i;
            return `<button onclick="__pzClick(${i})" style="aspect-ratio:1;border-radius:8px;border:2px solid ${correct?'var(--primary)':'var(--border)'};${hold===i?'outline:2px solid var(--gold);':''}background:linear-gradient(135deg,#4a3d7a,#241f3d);position:relative;overflow:hidden">
              <div style="position:absolute;font-size:120px;left:${-c0*100}%;top:${-r0*100}%;width:${m.cols*100}%;height:${m.rows*100}%;display:flex;align-items:center;justify-content:center;${correct?'filter:drop-shadow(0 0 6px var(--gold))':''}">${m.glyph}</div>
            </button>`;
          }).join('')}
        </div>
        ${done?`<div class="shimmer disp" style="text-align:center;font-size:20px;margin-top:18px">✨ Restored! ${m.name} added to inventory</div>`:''}
      </div>`;
    app.innerHTML = Shell('Monument Puzzle', 'Rearrange tiles to restore the monument', body);
    if(done) grant({xp:60,coins:25,scrolls:1,item:m.name});
  }
  window.__pzSel = (i)=>{ sel=i; shuffleTiles(); draw(); };
  window.__pzClick = (i)=>{
    if(hold===null) hold=i;
    else { const t=[...tiles]; [t[i],t[hold]]=[t[hold],t[i]]; tiles=t; hold=null; }
    draw();
  };
  draw();
}

/* ---------------- MAP CHALLENGE ---------------- */
function renderMapChallenge(){
  let round=0, order=[], ri=0, correctCount=0, mark=null;
  function reset(){ order=shuffle(KINGDOMS); ri=0; correctCount=0; mark=null; }
  reset();
  function draw(){
    const target = order[ri];
    const complete = ri>=order.length;
    const pct = Math.round(correctCount/order.length*100);
    const body = `<div class="pillrow">
        <div class="pill">Round ${Math.min(ri+1,order.length)} / ${order.length}</div>
        <div class="pill">Correct: <b style="color:var(--gold)">${correctCount}</b></div>
        <div class="pill" style="margin-left:auto">Best: ${STATE.mapChallengeBest}%</div>
        <button class="btn btn-outline" onclick="__mcNew()">🔀 New round</button>
      </div>
      <div class="map-svg-wrap" style="max-width:420px;margin:0 auto">
        <svg viewBox="0 0 100 100" style="width:100%;height:100%;cursor:crosshair" onclick="${complete?'':'__mcClick(event)'}">
          <path d="${INDIA_PATH}" fill="#4d3f80" stroke="var(--gold)" stroke-width="0.4"/>
          ${mark?`<circle cx="${mark.x}" cy="${mark.y}" r="2.5" fill="${mark.ok?'var(--gold)':'var(--destructive)'}"/>`:''}
          ${complete?KINGDOMS.map(k=>`<g><circle cx="${k.x}" cy="${k.y}" r="1.5" fill="var(--gold)"/><text x="${k.x}" y="${k.y-2.5}" class="map-pin-label">${k.name}</text></g>`).join(''):''}
        </svg>
      </div>
      <p style="text-align:center;margin-top:10px">${complete?`You scored ${pct}%`:`Click on: <b style="color:var(--gold)">${target?.name}</b>`}</p>`;
    app.innerHTML = Shell('Map Challenge', complete?`You scored ${pct}%`:`Click on: ${target?.name}`, body);
  }
  window.__mcNew = ()=>{ round++; reset(); draw(); };
  window.__mcClick = (ev)=>{
    const rect = ev.currentTarget.getBoundingClientRect();
    const x = (ev.clientX-rect.left)/rect.width*100, y=(ev.clientY-rect.top)/rect.height*100;
    const target = order[ri];
    const dx=x-target.x, dy=y-target.y, ok = Math.sqrt(dx*dx+dy*dy)<8;
    mark = {ok,x,y};
    if(ok) correctCount++;
    draw();
    setTimeout(()=>{
      mark=null; ri++;
      if(ri>=order.length){ const pct=Math.round(correctCount/order.length*100); grant({xp:pct,coins:pct}); if(pct>STATE.mapChallengeBest) update({mapChallengeBest:pct}); }
      draw();
    },900);
  };
  draw();
}

/* ---------------- FLASHCARDS ---------------- */
function renderFlashcards(){
  let cat='all', i=0, flip=false;
  function buildCards(){
    const cards=[];
    if(cat==='all'||cat==='rulers') CHAPTERS.forEach(c=>c.rulers.forEach(r=>cards.push({front:r.name, back:`${r.reign} · ${c.title}\n${r.facts.join(' · ')}`, tag:'Ruler'})));
    if(cat==='all'||cat==='dates') DATES.forEach(d=>cards.push({front:String(d.year), back:d.event, tag:'Date'}));
    if(cat==='all'||cat==='vocab') VOCAB.forEach(v=>cards.push({front:v.term, back:v.meaning, tag:'Vocabulary'}));
    if(cat==='all'||cat==='monuments') CHAPTERS.forEach(c=>c.monuments.forEach(m=>cards.push({front:m, back:`Associated with ${c.title} (${c.years})`, tag:'Monument'})));
    return cards;
  }
  let cards = buildCards();
  function draw(){
    const c = cards[i % cards.length];
    const body = `
      <div class="pillrow">${[{v:'all',l:'All'},{v:'rulers',l:'Rulers'},{v:'dates',l:'Dates'},{v:'vocab',l:'Vocabulary'},{v:'monuments',l:'Monuments'}].map(o=>`<button class="pill ${cat===o.v?'active':''}" onclick="__fcCat('${o.v}')">${o.l}</button>`).join('')}</div>
      <div class="flash-wrap">
        <div style="text-align:center;font-size:12px;color:var(--muted);margin-bottom:8px">Card ${i%cards.length+1} of ${cards.length}</div>
        <div class="flash-card" onclick="__fcFlip()">
          <div class="tag">${c.tag}</div>
          ${flip?`<div class="back">${c.back}</div>`:`<div class="front">${c.front}</div>`}
          <div style="margin-top:16px;font-size:11px;opacity:.6">Tap to ${flip?'hide':'reveal'}</div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:16px">
          <button class="btn btn-outline" onclick="__fcPrev()">← Prev</button>
          <button class="btn btn-primary" onclick="__fcNextCard()">Next →</button>
        </div>
      </div>`;
    app.innerHTML = Shell('Flashcards', 'Tap to flip. Slide to the next.', body);
  }
  window.__fcCat = (v)=>{ cat=v; i=0; flip=false; cards=buildCards(); draw(); };
  window.__fcFlip = ()=>{ flip=!flip; draw(); };
  window.__fcPrev = ()=>{ i=(i-1+cards.length)%cards.length; flip=false; draw(); };
  window.__fcNextCard = ()=>{ i=(i+1)%cards.length; flip=false; draw(); };
  draw();
}

/* ---------------- MOCK TEST (EXAM) ---------------- */
function renderExam(){
  let count=20, run=0, pool=[], picks={}, submitted=false;
  function buildPool(){ pool = shuffle(QUESTIONS).slice(0,count); }
  buildPool();
  function draw(){
    const scoreVal = pool.reduce((s,q,i)=>s+(picks[i]===q.answer?1:0),0);
    const body = `
      <div class="pillrow">
        ${[10,20,40].map(n=>`<button class="pill ${count===n?'active':''}" onclick="__exSet(${n})">${n} Questions</button>`).join('')}
        <div style="margin-left:auto;font-size:12px;color:var(--muted)">Answered ${Object.keys(picks).length} / ${pool.length}</div>
      </div>
      ${submitted?`<div class="card" style="text-align:center;margin-bottom:20px;border-color:var(--primary)"><div class="shimmer disp" style="font-size:26px">Score: ${scoreVal} / ${pool.length}</div><div style="color:var(--muted);margin-top:4px">${Math.round(scoreVal/pool.length*100)}% · Review answers below</div></div>`:''}
      <div>${pool.map((q,i)=>{
        const picked = picks[i];
        return `<div class="card" style="margin-bottom:14px;${submitted?(picked===q.answer?'border-color:var(--primary)':'border-color:var(--destructive)'):''}">
          <div style="display:flex;gap:8px;align-items:center;font-size:12px;color:var(--muted);margin-bottom:6px"><span style="color:var(--gold);font-family:'Cinzel',serif">Q${i+1}.</span><span style="text-transform:uppercase;color:var(--primary)">${q.difficulty}</span></div>
          <h3 style="margin:0 0 10px">${q.q}</h3>
          <div class="opt-grid">${q.options.map((o,oi)=>{
            let cls='opt-btn';
            if(submitted){ if(oi===q.answer) cls+=' correct'; else if(oi===picked) cls+=' wrong'; }
            else if(oi===picked) cls+=' correct';
            return `<button class="${cls}" ${submitted?'disabled':''} onclick="__exPick(${i},${oi})"><b>${String.fromCharCode(65+oi)}.</b>${o}</button>`;
          }).join('')}</div>
          ${submitted?`<p style="font-size:12.5px;color:var(--muted);font-style:italic;margin-top:10px">${q.explain}</p>`:''}
        </div>`;
      }).join('')}</div>
      <div style="text-align:center;margin-top:10px">${submitted?`<button class="btn btn-outline" onclick="__exNew()">New Test</button>`:`<button class="btn btn-primary" onclick="__exSubmit()">Submit Test</button>`}</div>`;
    app.innerHTML = Shell('Mock Board Test', 'Answer all. Submit for report.', body);
  }
  window.__exSet = (n)=>{ count=n; run++; picks={}; submitted=false; buildPool(); draw(); };
  window.__exPick = (i,oi)=>{ if(submitted) return; picks={...picks,[i]:oi}; draw(); };
  window.__exSubmit = ()=>{ submitted=true; const scoreVal = pool.reduce((s,q,i)=>s+(picks[i]===q.answer?1:0),0); addXp(scoreVal*10); draw(); };
  window.__exNew = ()=>{ run++; picks={}; submitted=false; buildPool(); draw(); };
  draw();
}

/* ---------------- REVISION (local review of wrong answers) ---------------- */
function renderRevision(){
  const wrong = STATE.wrongIds.map(id=>QUESTIONS.find(q=>q.id===id)).filter(Boolean);
  const body = wrong.length===0
    ? `<div class="card" style="text-align:center;padding:40px 0"><div style="font-size:40px">🩹</div><p style="color:var(--muted);margin-top:12px">No weak spots logged yet — answer some questions wrong (it happens!) and they'll appear here for review.</p><a class="btn btn-primary" style="margin-top:14px;display:inline-block" href="#/cq/quiz">Go to Practice Quiz</a></div>`
    : `<p style="color:var(--muted);font-size:13.5px;margin-bottom:16px">Local revision review, built from your own missed questions and their explanations — no external AI needed.</p>
       <div>${wrong.map(q=>`<div class="card" style="margin-bottom:12px">
          <div class="pill" style="display:inline-block;margin-bottom:8px">${chapterTitle(q.chapter)} · ${q.difficulty}</div>
          <h3 style="margin:0 0 8px">${q.q}</h3>
          <p style="font-size:13.5px"><b style="color:var(--gold)">Answer:</b> ${q.options[q.answer]}</p>
          <p style="font-size:13px;color:var(--muted)">${q.explain}</p>
        </div>`).join('')}</div>`;
  app.innerHTML = Shell('AI Revision', 'Review of your weak spots (local, from your answer history)', body);
}

/* ---------------- DAILY MISSIONS ---------------- */
function renderMissions(){
  const d = STATE.dailyProgress;
  const items = [
    {label:'Answer 25 questions', done:d.qs>=25, value:`${Math.min(d.qs,25)}/25`, link:'quiz'},
    {label:'Complete the timeline', done:d.timeline, value:d.timeline?'✓':'○', link:'timeline'},
    {label:'Defeat any boss', done:d.boss, value:d.boss?'✓':'○', link:'boss'},
    {label:'Complete a chapter', done:d.chapter, value:d.chapter?'✓':'○', link:'story'},
  ];
  const allDone = items.every(i=>i.done);
  const body = `<div style="max-width:520px;margin:0 auto">
    ${items.map(i=>`<a class="chapter-card" href="#/cq/${i.link}" style="align-items:center">
        <div class="ic">${i.done?'✅':'◽'}</div>
        <div><div class="disp" style="color:var(--gold)">${i.label}</div><div style="font-size:12px;color:var(--muted)">${i.value}</div></div>
      </a>`).join('')}
    <button class="btn btn-primary" style="width:100%;margin-top:8px" ${allDone?'':'disabled style="opacity:.3"'} onclick="__claimStreak()">${allDone?'Claim +1 Streak · +2 💎':'Complete all to claim'}</button>
  </div>`;
  app.innerHTML = Shell('Daily Missions', `Streak: ${STATE.streak} 🔥 · Resets at midnight`, body);
  window.__claimStreak = ()=>{ completeDailyStreak(); renderMissions(); };
}

/* ---------------- ACHIEVEMENTS ---------------- */
function renderAchievements(){
  const list = ACHIEVEMENT_DEFS.map(a=>({...a, earned:a.test(STATE)}));
  const body = `<div class="ach-grid">${list.map(a=>`<div class="ach-card ${a.earned?'earned':''}">
      <div class="ic" style="${a.earned?'':'filter:grayscale(1);opacity:.6'}">${a.icon}</div>
      <div class="disp" style="color:var(--gold);margin-top:6px">${a.label}</div>
      <p style="font-size:12.5px;color:var(--muted)">${a.desc}</p>
      <div style="margin-top:8px;font-family:'Cinzel',serif;font-size:11.5px;color:${a.earned?'var(--primary)':'var(--muted)'}">${a.earned?'✓ EARNED':'○ LOCKED'}</div>
    </div>`).join('')}</div>`;
  app.innerHTML = Shell('Hall of Achievements', `${list.filter(a=>a.earned).length} / ${list.length} unlocked`, body);
}

/* ---------------- ANALYTICS ---------------- */
function renderAnalytics(){
  const acc = STATE.questionsAnswered ? Math.round(STATE.correctAnswers/STATE.questionsAnswered*100) : 0;
  const maxQs = Math.max(1, ...STATE.history.map(h=>h.qs));
  const chapterRows = Object.entries(STATE.chapterAcc).map(([id,a])=>`<div class="stat-tile" style="text-align:left;padding:10px 14px"><div style="display:flex;justify-content:space-between"><span>${chapterTitle(id)}</span><span style="color:var(--gold)">${a.right}/${a.seen}</span></div><div class="progress-bar" style="margin-top:6px"><div class="progress-fill" style="width:${a.seen?a.right/a.seen*100:0}%"></div></div></div>`).join('') || `<p style="color:var(--muted)">Answer some questions to see your chapter breakdown.</p>`;
  const bars = STATE.history.map(h=>`<div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1"><div style="width:100%;background:#00000030;border-radius:4px;height:70px;display:flex;align-items:flex-end"><div style="width:100%;background:linear-gradient(180deg,var(--primary),var(--gold));border-radius:4px;height:${h.qs/maxQs*100}%"></div></div><div style="font-size:9px;color:var(--muted)">${h.date.slice(5)}</div></div>`).join('') || `<p style="color:var(--muted)">No activity yet.</p>`;
  const body = `
    <div class="opt-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:20px">
      <div class="stat-tile"><div class="n">${STATE.questionsAnswered}</div><div class="l">Questions</div></div>
      <div class="stat-tile"><div class="n">${acc}%</div><div class="l">Accuracy</div></div>
      <div class="stat-tile"><div class="n">${STATE.completedChapters.length}</div><div class="l">Chapters</div></div>
      <div class="stat-tile"><div class="n">${STATE.bossesDefeated.length}</div><div class="l">Bosses</div></div>
    </div>
    <div class="card" style="margin-bottom:16px"><h3 style="margin-top:0;font-size:15px;color:var(--gold)">Last ${STATE.history.length} active days</h3><div style="display:flex;gap:6px;align-items:flex-end;margin-top:14px">${bars}</div></div>
    <div class="card"><h3 style="margin-top:0;font-size:15px;color:var(--gold)">Accuracy by chapter</h3><div style="display:grid;gap:8px;margin-top:12px">${chapterRows}</div></div>`;
  app.innerHTML = Shell('Analytics', 'Your study patterns, measured', body);
}

/* ---------------- INVENTORY ---------------- */
function renderInventory(){
  const banners = ['🏳','🚩','🏴','⚔','☬','🕌','🏰'];
  const body = `<div class="opt-grid" style="grid-template-columns:1fr 1fr">
    <div>
      <h3 style="color:var(--gold);font-size:15px">Kingdom Banner</h3>
      <div class="pillrow">${banners.map(b=>`<button class="pill ${STATE.banner===b?'active':''}" style="font-size:20px;padding:8px 14px" onclick="__invBanner('${b}')">${b}</button>`).join('')}</div>
      <h3 style="color:var(--gold);font-size:15px;margin-top:20px">Treasury</h3>
      <div class="opt-grid" style="grid-template-columns:repeat(4,1fr)">
        <div class="stat-tile"><div style="font-size:20px">🪙</div><div class="n">${STATE.coins}</div></div>
        <div class="stat-tile"><div style="font-size:20px">👑</div><div class="n">${STATE.crowns}</div></div>
        <div class="stat-tile"><div style="font-size:20px">📜</div><div class="n">${STATE.scrolls}</div></div>
        <div class="stat-tile"><div style="font-size:20px">💎</div><div class="n">${STATE.diamonds}</div></div>
      </div>
    </div>
    <div>
      <h3 style="color:var(--gold);font-size:15px">Artifacts (${STATE.inventory.length})</h3>
      ${STATE.inventory.length===0?`<p style="color:var(--muted);font-style:italic;font-size:13.5px">Restore monuments in Puzzle Mode to collect artifacts.</p>`
        :`<div>${STATE.inventory.map(i=>`<div class="chapter-card" style="padding:10px 14px"><div class="ic" style="font-size:22px">🏛</div><div class="disp">${i}</div></div>`).join('')}</div>`}
    </div>
  </div>`;
  app.innerHTML = Shell('Royal Inventory', 'Artifacts collected on your journey', body);
  window.__invBanner = (b)=>{ update({banner:b}); renderInventory(); };
}

/* ---------------- PROGRESS ---------------- */
function renderProgress(){
  const lv = levelInfo(STATE.xp);
  const acc = STATE.questionsAnswered ? Math.round(STATE.correctAnswers/STATE.questionsAnswered*100) : 0;
  const avatars = ['🧙','🤴','👸','🥷','👳','🧝','🧛'];
  function bar(label,val,max){ return `<div><div style="display:flex;justify-content:space-between;font-size:12px;color:var(--muted);margin-bottom:4px"><span>${label}</span><span style="color:var(--gold)">${val} / ${max}</span></div><div class="progress-bar"><div class="progress-fill" style="width:${max?Math.min(100,val/max*100):0}%"></div></div></div>`; }
  const body = `<div class="opt-grid" style="grid-template-columns:1fr 2fr;align-items:start">
    <div class="card">
      <div style="text-align:center">
        <div style="font-size:56px">${STATE.avatar}</div>
        <input type="text" value="${STATE.playerName}" id="pname" onchange="__setName(this.value)">
        <div style="font-size:11px;letter-spacing:.1em;color:var(--primary);text-transform:uppercase;margin-top:10px">Level ${lv.level}</div>
        <div class="disp" style="font-size:17px">${lv.title}</div>
        <div class="progress-bar" style="margin-top:8px"><div class="progress-fill" style="width:${lv.progress*100}%"></div></div>
        <div style="font-size:11.5px;color:var(--muted);margin-top:4px">${STATE.xp} XP · next at ${lv.next}</div>
      </div>
      <div class="opt-grid" style="grid-template-columns:repeat(3,1fr);margin-top:18px">
        <div class="stat-tile"><div class="n">${STATE.crowns}</div><div class="l">👑</div></div>
        <div class="stat-tile"><div class="n">${STATE.coins}</div><div class="l">🪙</div></div>
        <div class="stat-tile"><div class="n">${acc}%</div><div class="l">Acc</div></div>
      </div>
      <div class="pillrow" style="margin-top:14px">${avatars.map(a=>`<button class="pill ${STATE.avatar===a?'active':''}" style="font-size:18px;padding:6px 10px" onclick="__setAvatar('${a}')">${a}</button>`).join('')}</div>
      <button class="btn btn-outline" style="width:100%;margin-top:16px;border-color:var(--destructive);color:var(--destructive)" onclick="__resetSave()">Reset save</button>
    </div>
    <div>
      <div class="card" style="margin-bottom:16px">
        <h3 style="margin-top:0;color:var(--gold);font-size:15px">Mastery</h3>
        <div style="display:grid;gap:12px;margin-top:12px">
          ${bar('Chapters completed', STATE.completedChapters.length, CHAPTERS.length)}
          ${bar('Bosses defeated', STATE.bossesDefeated.length, CHAPTERS.length)}
          ${bar('Kingdoms explored', STATE.visitedKingdoms.length, KINGDOMS.length)}
          ${bar('Questions answered', STATE.questionsAnswered, Math.max(100,STATE.questionsAnswered))}
        </div>
      </div>
      <div class="card">
        <h3 style="margin-top:0;color:var(--gold);font-size:15px">Chapter Progress</h3>
        <div class="opt-grid" style="margin-top:10px">
          ${CHAPTERS.map(c=>`<a class="chapter-card" style="padding:10px 14px" href="#/cq/story?chapter=${c.id}">
            <div class="ic" style="font-size:22px">${c.emoji}</div>
            <div><div class="disp" style="color:var(--gold);font-size:14px">${c.title}</div><div style="font-size:11.5px;color:var(--muted)">${c.years}</div></div>
            <div style="margin-left:auto;font-size:12px">${STATE.completedChapters.includes(c.id)?'📖':'○'} ${STATE.bossesDefeated.includes(c.id)?'⚔':'○'}</div>
          </a>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
  app.innerHTML = Shell('Your Chronicle', 'Every step across medieval India', body);
  window.__setName = (v)=>{ update({playerName:v}); };
  window.__setAvatar = (a)=>{ update({avatar:a}); renderProgress(); };
  window.__resetSave = ()=>{ if(confirm('Erase all progress?')){ resetSave(); renderProgress(); } };
}

/* ---------------- SETTINGS ---------------- */
function renderSettings(){
  const s = STATE.settings;
  const body = `<div style="max-width:460px;margin:0 auto">
    <div class="toggle"><span class="disp">🔊 Sound effects</span><div class="switch ${s.sound?'on':''}" onclick="__toggle('sound')"><div class="knob"></div></div></div>
    <div class="toggle"><span class="disp">✨ Animations</span><div class="switch ${s.animations?'on':''}" onclick="__toggle('animations')"><div class="knob"></div></div></div>
    <div class="card" style="margin-bottom:10px">
      <div class="disp" style="margin-bottom:10px">🎯 Difficulty</div>
      <div class="pillrow">${['adaptive','easy','medium','hard'].map(d=>`<button class="pill ${s.difficulty===d?'active':''}" onclick="__setDiff('${d}')">${d}</button>`).join('')}</div>
    </div>
    <div class="card">
      <div class="disp" style="margin-bottom:10px">🌐 Language</div>
      <div class="pillrow">${[{v:'en',l:'English'},{v:'hi',l:'हिंदी'}].map(l=>`<button class="pill ${s.language===l.v?'active':''}" onclick="__setLang('${l.v}')">${l.l}</button>`).join('')}</div>
      <p style="font-size:12px;color:var(--muted);font-style:italic;margin-top:10px">Hindi mode partial — quiz explanations remain in English for accuracy to NCERT wording.</p>
    </div>
  </div>`;
  app.innerHTML = Shell('Settings', 'Customise your experience', body);
  window.__toggle = (k)=>{ updateSettings({[k]: !STATE.settings[k]}); renderSettings(); };
  window.__setDiff = (d)=>{ updateSettings({difficulty:d}); renderSettings(); };
  window.__setLang = (l)=>{ updateSettings({language:l}); renderSettings(); };
}

/* ============================== INIT ============================== */
route();

}
window.SubjectApps = window.SubjectApps || {};
window.SubjectApps['cq'] = { init: cqInit };
