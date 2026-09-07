function cmInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"barter","title":"The Barter System","subtitle":"Trading Goods for Goods · The Farmer's Dilemma","emoji":"🔄","gradient":"linear-gradient(135deg,#34D399 0%,#065F46 100%)","glow":"#34D399","levels":[
  {"id":1,"title":"Before Money","intro":"Long before coins and notes, people traded goods directly for other goods.","questions":[
    {"type":"mcq","prompt":"Before money existed, people exchanged goods or services directly for other goods and services — this is called the ______.","options":["barter system","credit system","currency system","tax system"],"answer":"barter system","explanation":"This was the earliest form of exchange, with evidence found from around the world."},
    {"type":"tap","prompt":"Tap the commodities historically used in barter systems around the world, according to the chapter.","options":["Cowrie shells","Salt","Cattle","Credit cards","Tea"],"answer":["Cowrie shells","Salt","Cattle","Tea"],"explanation":"People also used tobacco, cloth and seeds in barter exchanges."},
    {"type":"mcq","prompt":"Which island nation used giant stone discs called 'Rai stones' as a form of money?","options":["Yap Island, Micronesia","Solomon Islands","Central Mexico","China"],"answer":"Yap Island, Micronesia","explanation":"The Solomon Islands, meanwhile, used red feather coils called Tevau."}
  ]},
  {"id":2,"title":"The Farmer's Dilemma","intro":"An ox, a pair of shoes, and a whole lot of problems — barter isn't as simple as it sounds.","questions":[
    {"type":"mcq","prompt":"In the farmer's ox story, what economic problem describes needing to find someone who wants exactly what you have and has exactly what you want?","options":["Double coincidence of wants","Common standard measure","Divisibility","Portability"],"answer":"Double coincidence of wants","explanation":"Finding such a perfect match was often very difficult."},
    {"type":"mcq","prompt":"The problem of not being able to exchange just a part of a large item, like an ox, for a smaller item is called the problem of ______.","options":["divisibility","portability","durability","common measure"],"answer":"divisibility","explanation":"You cannot easily split an ox into smaller, tradable pieces."},
    {"type":"mcq","prompt":"The difficulty of carrying a bulky item like wheat or an ox from place to place is called the problem of ______.","options":["portability","divisibility","durability","common measure"],"answer":"portability","explanation":"This makes trading over long distances especially hard."},
    {"type":"mcq","prompt":"The fact that wheat would rot and could not be stored for long illustrates the problem of ______.","options":["durability","divisibility","portability","common measure"],"answer":"durability","explanation":"Money solves this by not spoiling the way perishable goods do."}
  ]},
  {"id":3,"title":"Barter Today","intro":"Barter never fully disappeared — it survives in fascinating living traditions.","questions":[
    {"type":"mcq","prompt":"The Junbeel Mela, an annual fair in Assam that still uses barter, begins with the Agni Puja, a prayer for ______.","options":["universal wellbeing","good harvests only","military victory","royal succession"],"answer":"universal wellbeing","explanation":"This three-day fair dates back to the 15th century."},
    {"type":"mcq","prompt":"At the Junbeel Mela, people from the hills exchange forest products with people from the plains for what kind of goods?","options":["Rice cakes and other food","Gold and silver","Modern electronics","Foreign currency"],"answer":"Rice cakes and other food","explanation":"This exchange reflects the different resources available in each region."},
    {"type":"truefalse","prompt":"A common example of barter that persists today is exchanging old clothes for new utensils, practised by travelling vendors.","options":["True","False"],"answer":"True","explanation":"This benefits both households and vendors, who resell or recycle the collected materials."}
  ]},
  {"id":4,"title":"Boss: The Barter Trial","intro":"The Exchange Warden challenges your understanding of trade before money!","isBoss":true,"bossName":"Exchange Warden","questions":[
    {"type":"mcq","prompt":"Why did the barter system eventually give way to money, according to the chapter?","options":["As trade grew in scale and distance, the barter system's limitations made a common medium of exchange necessary","Barter was made illegal by rulers","People stopped wanting to trade at all","Money existed before barter"],"answer":"As trade grew in scale and distance, the barter system's limitations made a common medium of exchange necessary","explanation":"Necessity, as the saying goes, is the mother of invention."},
    {"type":"mcq","prompt":"In the guava example, when a buyer and seller cannot agree on a fair exchange rate for two different goods, this reflects the lack of a ______.","options":["common standard measure of value","legal contract","physical marketplace","government tax"],"answer":"common standard measure of value","explanation":"Without an agreed value, it's hard to judge if an exchange is fair."},
    {"type":"mcq","prompt":"Which of these is NOT one of the problems of the barter system discussed in the chapter?","options":["Universal adult franchise","Double coincidence of wants","Divisibility","Durability"],"answer":"Universal adult franchise","explanation":"That term relates to voting rights, not to barter's economic limitations."},
    {"type":"truefalse","prompt":"The barter system was the earliest form of exchange, with evidence found from around the world.","options":["True","False"],"answer":"True","explanation":"From cowrie shells to cattle, evidence spans many cultures and continents."}
  ]}
]},
{"id":2,"slug":"moneyfunctions","title":"The Birth of Money","subtitle":"Medium of Exchange · Store of Value · Deferred Payment","emoji":"💰","gradient":"linear-gradient(135deg,#FBBF24 0%,#92400E 100%)","glow":"#FBBF24","levels":[
  {"id":1,"title":"Money as a Medium of Exchange","intro":"Money solved barter's biggest headaches in one elegant stroke.","questions":[
    {"type":"mcq","prompt":"Money came into existence to serve as a common ______ that made trade easier than barter.","options":["medium of exchange","form of tax","religious symbol","military weapon"],"answer":"medium of exchange","explanation":"As trade grew in scale, a shared medium became essential."},
    {"type":"mcq","prompt":"Unlike wheat, which the farmer could not store for long, money can be kept for a longer time and used later — this makes money a ______.","options":["store of value","means of production","form of barter","tax instrument"],"answer":"store of value","explanation":"This solves the durability problem that plagued barter."},
    {"type":"truefalse","prompt":"As more people began using money for transactions, it became the widely accepted method of payment.","options":["True","False"],"answer":"True","explanation":"Wide acceptance is what makes money useful as a medium of exchange."}
  ]},
  {"id":2,"title":"Measuring & Deferring Value","intro":"Money doesn't just help you trade today — it helps you compare value and pay later too.","questions":[
    {"type":"mcq","prompt":"Money serving as a common denomination that measures and compares the value of different goods and services is called a ______.","options":["common measure of value","store of grain","barter token","tax receipt"],"answer":"common measure of value","explanation":"This makes it easy to compare the price of very different items."},
    {"type":"mcq","prompt":"The fact that money can be used to make payments at a later date, like paying the rest of a bill after some time, makes money a ______.","options":["standard of deferred payment","store of value only","medium of barter","form of tax"],"answer":"standard of deferred payment","explanation":"This function allows for credit and instalment payments."},
    {"type":"mcq","prompt":"In the example of parents paying shopkeepers, who pay workers, who then buy essentials — what does this chain of transactions show about money?","options":["Money flows through the economy as a widely accepted medium of exchange","Money can only be used once","Only shopkeepers can use money","Workers cannot use money to buy goods"],"answer":"Money flows through the economy as a widely accepted medium of exchange","explanation":"This continuous circulation is central to how economies function."}
  ]},
  {"id":3,"title":"Boss: Guardian of Value","intro":"The Value Keeper tests your grasp of what money truly does!","isBoss":true,"bossName":"Value Keeper","questions":[
    {"type":"mcq","prompt":"Which of these is NOT one of the basic functions of money discussed in the chapter?","options":["A tool for growing crops","A medium of exchange","A store of value","A common measure of value"],"answer":"A tool for growing crops","explanation":"Money's functions are economic, not agricultural."},
    {"type":"tap","prompt":"Tap the basic functions of money mentioned in the chapter.","options":["Medium of exchange","Store of value","Common measure of value","Standard of deferred payment","A type of food"],"answer":["Medium of exchange","Store of value","Common measure of value","Standard of deferred payment"],"explanation":"Together, these four functions explain why money replaced barter."},
    {"type":"mcq","prompt":"Why is money considered better than wheat as a store of value?","options":["Money does not rot or get eaten by rats over time","Money tastes better","Money is heavier","Money cannot be exchanged for goods"],"answer":"Money does not rot or get eaten by rats over time","explanation":"This durability is one of money's key advantages over perishable barter goods."}
  ]}
]},
{"id":3,"slug":"journey","title":"Coins to Cryptocurrency","subtitle":"Ancient Coinage · Paper Money · Digital Payments","emoji":"🪙","gradient":"linear-gradient(135deg,#A78BFA 0%,#4C1D95 100%)","glow":"#A78BFA","levels":[
  {"id":1,"title":"Ancient Coinage","intro":"Kings and empires once controlled every coin that changed hands.","questions":[
    {"type":"mcq","prompt":"In ancient India, coins made from precious metals like gold, silver and copper were called karshapanas or ______.","options":["panas","rupees","annas","tolas"],"answer":"panas","explanation":"These were among the earliest coin forms used in India."},
    {"type":"mcq","prompt":"Symbols punched onto ancient Indian coins were called ______.","options":["rupas","panas","annas","mudras"],"answer":"rupas","explanation":"These punch-marks helped identify the coin's issuing authority."},
    {"type":"mcq","prompt":"Variations of the ancient word 'pana' continue to be used for money today as 'panam' in Tamil, Telugu and Malayalam, and as ______ in Kannada.","options":["hana","rupaiya","taka","mudra"],"answer":"hana","explanation":"This shows how ancient economic vocabulary survives in modern languages."},
    {"type":"mcq","prompt":"The coins of the Chalukyas featured a Varaha (avatar of Vishnu) on one side and what on the other?","options":["A decorated three-tiered parasol","A tiger emblem","A lotus flower","A peacock"],"answer":"A decorated three-tiered parasol","explanation":"The Chola coins, by contrast, featured a tiger emblem."}
  ]},
  {"id":2,"title":"Paper Money & the Rupee","intro":"From bulky coin sacks to a single note — and now a globally recognised symbol.","questions":[
    {"type":"mcq","prompt":"Paper money was first used in which country before being introduced in India in the late 18th century?","options":["China","Britain","France","Rome"],"answer":"China","explanation":"Coins became too heavy and difficult to carry for large transactions."},
    {"type":"mcq","prompt":"Who is the sole legal authority permitted to issue currency in India today?","options":["The Reserve Bank of India (RBI)","Any state government","Any private bank","Any citizen"],"answer":"The Reserve Bank of India (RBI)","explanation":"It is not legal for anyone else to issue currency in India."},
    {"type":"mcq","prompt":"The ₹ symbol for the Indian Rupee, adopted in 2010, combines the Devanagari 'Ra' with the Roman 'R' and two parallel stripes representing the ______.","options":["national flag and the 'equal to' sign","royal crown","national emblem","Ashoka Chakra"],"answer":"national flag and the 'equal to' sign","explanation":"It was designed by Udaya Kumar of IIT Bombay."},
    {"type":"truefalse","prompt":"1 anna, an old denomination equal to 1/16th of a rupee, could buy a dozen bananas in 1947.","options":["True","False"],"answer":"True","explanation":"This shows how much the value of money has changed over the decades."}
  ]},
  {"id":3,"title":"Digital Money","intro":"Today's money doesn't need to be touched at all.","questions":[
    {"type":"mcq","prompt":"Money in electronic form, which we cannot physically touch or feel, is called ______.","options":["digital money","paper money","commodity money","barter money"],"answer":"digital money","explanation":"Debit cards, credit cards, net banking and UPI are all forms of this."},
    {"type":"mcq","prompt":"A QR code used for payments contains information about the receiver's ______.","options":["bank account","home address","phone number only","tax records"],"answer":"bank account","explanation":"Scanning it lets the payment go directly into that account."},
    {"type":"mcq","prompt":"Which of these is a modern digital payment method mentioned in the chapter, standing for Unified Payments Interface?","options":["UPI","QR","RBI","ISI"],"answer":"UPI","explanation":"It transfers money directly between bank accounts."}
  ]},
  {"id":4,"title":"Boss: The Currency Chronicle","intro":"The Mint Master challenges you to trace money's entire journey!","isBoss":true,"bossName":"Mint Master","questions":[
    {"type":"mcq","prompt":"According to the chapter's broad timeline, in what order did forms of money in India generally evolve?","options":["Barter → coinage → paper money → digital money","Digital money → coinage → barter → paper money","Paper money → barter → coinage → digital money","Coinage → digital money → barter → paper money"],"answer":"Barter → coinage → paper money → digital money","explanation":"Each stage solved limitations of the one before it."},
    {"type":"mcq","prompt":"Roman gold coins excavated in Pudukkottai, Tamil Nadu, suggest that ancient India had significant ______ with the outside world.","options":["maritime trade","military conflict","religious conflict","no contact at all"],"answer":"maritime trade","explanation":"Scholars conclude that this trade was in India's favour."},
    {"type":"mcq","prompt":"What material combination is used to make coins strong, both in ancient times and today?","options":["Alloys of two or more metals","Pure gold only","Pure silver only","Plastic"],"answer":"Alloys of two or more metals","explanation":"Modern coins use alloys largely of iron with other materials in precise proportions."},
    {"type":"truefalse","prompt":"In ancient times, coins often had nature motifs like animals, trees and hills, as well as images of kings, queens or deities.","options":["True","False"],"answer":"True","explanation":"These motifs often reveal a great deal about the issuing kingdom's culture."}
  ]}
]},
{"id":4,"slug":"markets","title":"What is a Market?","subtitle":"The Hampi Bazaar · Price & Negotiation","emoji":"🏪","gradient":"linear-gradient(135deg,#F87171 0%,#7C2D12 100%)","glow":"#F87171","levels":[
  {"id":1,"title":"Defining a Market","intro":"From a 16th-century bazaar to today's malls, markets have always connected people.","questions":[
    {"type":"mcq","prompt":"A place where people buy and sell goods, also known as bazaar or haat, is called a ______.","options":["market","mint","mandap","mela only"],"answer":"market","explanation":"Markets can be physical places or, increasingly, online."},
    {"type":"mcq","prompt":"The 16th-century Hampi Bazaar in Karnataka was located opposite which famous temple?","options":["Virupaksha temple","Meenakshi temple","Somnath temple","Konark temple"],"answer":"Virupaksha temple","explanation":"Hampi was a prosperous centre of trade in the Vijayanagara Empire."},
    {"type":"mcq","prompt":"Portuguese traveller Domingos Paes called Hampi 'the best-provided city in the world' due to its ______.","options":["wide variety of traded products","military strength","religious importance only","small size"],"answer":"wide variety of traded products","explanation":"Grains, silk, precious stones and animals were all traded there."}
  ]},
  {"id":2,"title":"Price & Negotiation","intro":"How do buyers and sellers settle on a price that works for both?","questions":[
    {"type":"mcq","prompt":"The amount at which a buyer is willing to buy and a seller is willing to sell is called the ______.","options":["price","tax","wage","import"],"answer":"price","explanation":"Price is central to completing any market transaction."},
    {"type":"mcq","prompt":"In the guava price example, what happens over time as buyers and sellers interact repeatedly in the market?","options":["The price settles at a point that is fair to both buyer and seller","The price always stays at the seller's first offer","The price becomes random each time","There is never any agreement"],"answer":"The price settles at a point that is fair to both buyer and seller","explanation":"This is neither too high for the buyer nor too low for the seller."},
    {"type":"mcq","prompt":"Why might vegetables be sold cheaper late at night at a weekly market compared to during the day?","options":["Sellers want to sell perishable stock before it spoils, rather than carry it home unsold","Vegetables become more valuable at night","The government fixes lower night-time prices","There are more buyers at night"],"answer":"Sellers want to sell perishable stock before it spoils, rather than carry it home unsold","explanation":"This same logic explains end-of-season discounts on woollen clothing."}
  ]},
  {"id":3,"title":"Boss: The Marketplace Trial","intro":"The Bazaar Keeper puts your understanding of markets to the test!","isBoss":true,"bossName":"Bazaar Keeper","questions":[
    {"type":"mcq","prompt":"What two essential parties must every market have to complete a transaction?","options":["A buyer and a seller","Only a government official","Only a wholesaler","Only a manufacturer"],"answer":"A buyer and a seller","explanation":"Both must agree on a price for the transaction to take place."},
    {"type":"mcq","prompt":"How do buyers and sellers typically arrive at an acceptable price in a market?","options":["Through negotiation and bargaining","By government decree only","By random selection","By avoiding any discussion"],"answer":"Through negotiation and bargaining","explanation":"This process helps balance what buyers can pay and what sellers need to earn."},
    {"type":"truefalse","prompt":"Garment stores often offer heavy discounts on woollen clothing at the end of winter because demand for those goods drops as the season ends.","options":["True","False"],"answer":"True","explanation":"This reflects how demand influences market prices."}
  ]}
]},
{"id":5,"slug":"marketchain","title":"Markets Around Us","subtitle":"Physical & Online · Domestic & International · The Supply Chain","emoji":"🚚","gradient":"linear-gradient(135deg,#38BDF8 0%,#1E3A8A 100%)","glow":"#38BDF8","levels":[
  {"id":1,"title":"Physical & Online Markets","intro":"Buying and selling no longer requires standing face to face.","questions":[
    {"type":"mcq","prompt":"A market where buyers physically meet sellers to purchase goods is called a ______ market.","options":["physical","online","domestic","international"],"answer":"physical","explanation":"This includes weekly markets, haats, local shops and malls."},
    {"type":"mcq","prompt":"Businesses that organise and combine offers from multiple online sellers for consumers are called ______.","options":["aggregators","wholesalers","retailers","distributors"],"answer":"aggregators","explanation":"They pack and deliver products to online buyers from a central warehouse."},
    {"type":"truefalse","prompt":"Some services, like tailoring, require in-person contact and cannot easily be provided through online markets.","options":["True","False"],"answer":"True","explanation":"Not every good or service fits neatly into an online transaction."}
  ]},
  {"id":2,"title":"Domestic & International Trade","intro":"Some transactions stay within a country's borders — others cross the whole world.","questions":[
    {"type":"mcq","prompt":"A market where goods and services are bought and sold within a country's geographical boundaries is called a ______ market.","options":["domestic","international","wholesale","retail"],"answer":"domestic","explanation":"For example, paper procured from Indian mills to print a book sold in India."},
    {"type":"mcq","prompt":"When a seller in one country sells goods to a buyer in another country, this is called an ______.","options":["export","import","aggregator sale","internal trade"],"answer":"export","explanation":"India exports items like engineering goods and pharmaceuticals to many regions."},
    {"type":"mcq","prompt":"When a buyer in one country brings in goods produced in another country, this is called an ______.","options":["import","export","internal transfer","domestic sale"],"answer":"import","explanation":"India, for example, imports large quantities of vegetable oils."}
  ]},
  {"id":3,"title":"From Producer to Consumer","intro":"Goods travel through many hands before they ever reach your shopping bag.","questions":[
    {"type":"mcq","prompt":"In the chain of physical goods movement, who typically buys goods in large quantities directly from producers or manufacturers?","options":["Wholesalers","Retailers only","Consumers directly","The government only"],"answer":"Wholesalers","explanation":"They then supply goods onward to retailers or distributors."},
    {"type":"mcq","prompt":"Shopkeepers who sell goods in smaller quantities directly to final consumers are called ______.","options":["retailers","wholesalers","distributors","manufacturers"],"answer":"retailers","explanation":"Their goods are meant for consumption, not resale."},
    {"type":"mcq","prompt":"Individuals or businesses who help supply goods from manufacturers and wholesalers to retailers, especially across difficult terrain, are called ______.","options":["distributors","aggregators","consumers","producers"],"answer":"distributors","explanation":"They help bridge gaps that wholesalers may struggle to cover alone."},
    {"type":"mcq","prompt":"Surat, Gujarat, known as Asia's oldest textile market, is also home to the world's largest industry in which precious material?","options":["Diamonds","Gold","Silver","Pearls"],"answer":"Diamonds","explanation":"About 1.5 million artisans there are involved in cutting and polishing diamonds."}
  ]},
  {"id":4,"title":"Boss: The Supply Chain Sentinel","intro":"The Supply Chain Sentinel tests your knowledge of how goods reach your doorstep!","isBoss":true,"bossName":"Supply Chain Sentinel","questions":[
    {"type":"mcq","prompt":"In the case of perishable goods like vegetables and fruits, wholesalers often store them in warehouses with special ______ facilities.","options":["cold storage","heating","broadcasting","printing"],"answer":"cold storage","explanation":"This helps preserve the goods before they reach markets."},
    {"type":"mcq","prompt":"What role do wholesalers play in ensuring uninterrupted supply to retailers and consumers?","options":["They assess how much product is required and help maintain stock for manufacturers","They only manufacture goods","They only sell directly to farmers","They have no role in the supply chain"],"answer":"They assess how much product is required and help maintain stock for manufacturers","explanation":"This coordination keeps goods flowing smoothly through the market."},
    {"type":"mcq","prompt":"Large markets for grains, vegetables, and fruits bought in bulk from farms are called ______.","options":["mandis","malls","haats only","bazaars only"],"answer":"mandis","explanation":"Wholesalers bring produce here after collecting it from farms."},
    {"type":"truefalse","prompt":"In online markets, aggregators receive bulk products from manufacturers, then pack and deliver them to online buyers.","options":["True","False"],"answer":"True","explanation":"This is a distinct distribution channel compared to physical markets."}
  ]}
]},
{"id":6,"slug":"govmarket","title":"Markets, Government & Quality","subtitle":"Ima Keithal · Price Controls · FSSAI, ISI & BEE Star","emoji":"🛡️","gradient":"linear-gradient(135deg,#F472B6 0%,#831843 100%)","glow":"#F472B6","levels":[
  {"id":1,"title":"The Social Side of Markets","intro":"Markets aren't only about money — they're about community too.","questions":[
    {"type":"mcq","prompt":"Besides economic exchange, markets can also build long-lasting relationships between buyers and sellers across ______.","options":["generations","borders only","one transaction only","governments only"],"answer":"generations","explanation":"Many families maintain trusted, decades-long relationships with their local grocer or tailor."},
    {"type":"mcq","prompt":"Ima Keithal, or 'Mother's Market', in Imphal, Manipur, is unique because it is entirely owned and run by ______.","options":["about 3000 women","government officials","foreign traders only","children"],"answer":"about 3000 women","explanation":"It provides employment and serves as a melting pot of cultures."},
    {"type":"mcq","prompt":"In south India, sellers of haldi and kumkum often give a small free quantity to buyers as a mark of ______.","options":["auspiciousness and good wishes","a legal requirement","a government tax rebate","punishment"],"answer":"auspiciousness and good wishes","explanation":"This tradition goes beyond the purely economic side of a transaction."}
  ]},
  {"id":2,"title":"Government Price Controls","intro":"Sometimes the government steps in to keep prices fair for everyone.","questions":[
    {"type":"mcq","prompt":"The government sometimes sets a maximum price for essential goods like lifesaving drugs — this protects ______.","options":["buyers from being overcharged","only sellers' profits","only the government's revenue","no one in particular"],"answer":"buyers from being overcharged","explanation":"This ensures essential goods remain accessible."},
    {"type":"mcq","prompt":"The government sometimes sets a minimum price for agricultural products like wheat and paddy to ensure ______.","options":["farmers do not incur losses","prices are always highest","buyers pay more than necessary","sellers cannot sell at all"],"answer":"farmers do not incur losses","explanation":"This protects farmers' livelihoods from unpredictable market swings."},
    {"type":"mcq","prompt":"According to Kautilya's Arthashastra, traders selling ghee had to give buyers a little extra (manasrava) to compensate for what?","options":["Reduction in quantity from ghee sticking to the measuring can","Extra taxes","Transport costs","Spoilage during storage"],"answer":"Reduction in quantity from ghee sticking to the measuring can","explanation":"This shows that consumer protection in markets has ancient roots in India."}
  ]},
  {"id":3,"title":"Ensuring Quality & Safety","intro":"Certification marks help you trust what you're buying.","questions":[
    {"type":"mcq","prompt":"The FSSAI mark on food packaging indicates that the food has been tested by the government and is ______.","options":["safe to consume","the cheapest option","imported from abroad","organic only"],"answer":"safe to consume","explanation":"FSSAI stands for the Food Safety & Standards Authority of India."},
    {"type":"mcq","prompt":"The ISI mark, issued by the Bureau of Indian Standards, is commonly found on which type of products?","options":["Electrical appliances and construction materials","Only food items","Only clothing","Only vehicles"],"answer":"Electrical appliances and construction materials","explanation":"It ensures such products meet safety and quality standards."},
    {"type":"mcq","prompt":"The BEE Star rating, found on electronics like TVs and air conditioners, indicates a product's ______.","options":["energy efficiency","price range","country of manufacture","warranty period"],"answer":"energy efficiency","explanation":"More stars mean the appliance uses less electricity."},
    {"type":"mcq","prompt":"AGMARK is a certification mark specifically for which category of products?","options":["Agricultural products like fruits, cereals and spices","Electronics","Automobiles","Textiles only"],"answer":"Agricultural products like fruits, cereals and spices","explanation":"'Ag' in AGMARK stands for agriculture."}
  ]},
  {"id":4,"title":"Boss: Guardian of Fair Trade","intro":"The final challenge! The Fair Trade Guardian tests everything you know about markets and government.","isBoss":true,"bossName":"Fair Trade Guardian","questions":[
    {"type":"mcq","prompt":"Why does the government sometimes intervene to control the negative effects of markets, like pollution from factories?","options":["To mitigate harmful external effects on the environment and public health","To increase factory profits","To ban all manufacturing","To eliminate all markets"],"answer":"To mitigate harmful external effects on the environment and public health","explanation":"This is one of several important regulatory roles government plays."},
    {"type":"mcq","prompt":"Goods and services like public parks, roads and policing, which producers do not expect to profit from, are called ______.","options":["public goods","luxury goods","export goods","import goods"],"answer":"public goods","explanation":"The government provides these because private markets alone would not."},
    {"type":"mcq","prompt":"Besides certification marks, what other modern source of information helps consumers assess product quality before buying online?","options":["Online reviews and feedback from other consumers","Only the seller's own claims","Nothing at all","Government price lists only"],"answer":"Online reviews and feedback from other consumers","explanation":"Word of mouth has always shaped buying decisions, and reviews are its digital form."},
    {"type":"mcq","prompt":"What is the overall role of government in markets, as summarised in the chapter?","options":["To ensure fair prices, quality standards, and to provide public goods while regulating negative effects","To eliminate all private trade","To fix every price permanently","To have no involvement in markets at all"],"answer":"To ensure fair prices, quality standards, and to provide public goods while regulating negative effects","explanation":"This balance keeps markets functioning fairly for both buyers and sellers."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.CM_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.CM_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['🪙','💰','🧺','🏪','🛒','⚖️'];

/* ============================== STATE ============================== */
const STORE_KEY = 'coin-market-v1';
function defaultState(){ return {avatar:'🪙', name:'Trader', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldCm(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('cm', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedCm(i){
  const active = activeUnreviewedWorldCm();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewCm(i){
  const active = activeUnreviewedWorldCm();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewCm = ()=>{
  const active = activeUnreviewedWorldCm();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'cm',
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
      <radialGradient id="mCoin" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#FEF3C7"/><stop offset="60%" stop-color="#FBBF24"/><stop offset="100%" stop-color="#92400E"/>
      </radialGradient>
      <radialGradient id="mGlowCm" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FDE68A" stop-opacity="0.7"/><stop offset="100%" stop-color="#FDE68A" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowCm)"/>
    <circle cx="50" cy="55" r="38" fill="url(#mCoin)"/>
    <circle cx="50" cy="55" r="30" fill="none" stroke="#B45309" stroke-width="2" opacity="0.5"/>
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
if(window.__cmHashListener) window.removeEventListener('hashchange', window.__cmHashListener);
window.__cmHashListener = function(){ if(!location.hash.startsWith('#/cm')) return; render(); };
window.addEventListener('hashchange', window.__cmHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/cm\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='🪙';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">The marketplace awaits</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Trace the story of <span class="text-gradient-aurora">money and markets.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From ancient barter to digital payments, from the Hampi Bazaar to today's supply chains — six worlds explore how India buys, sells and trades.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Open for business →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Trader</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Trader" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter the market →</button>
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
      <div style="font-size:44px;width:60px;height:60px;border-radius:16px;background:#fbbf2433;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px -6px #fbbf2488">${STATE.avatar}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Market Trader</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Lakshmi</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to explore money and markets?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedCm(i);
        const needsReview = worldNeedsReviewCm(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/cm/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewCm();return false;"` : '';
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
      <span>Economic Life Around Us</span>
    </div>
  </main>`;
  window.__resetAll = resetSave;
}

/* ---------------- WORLD (level select) ---------------- */
function renderWorld(slug){
  const w = WORLDS.find(w=>w.slug===slug);
  if(!w){ nav('#/cm/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedCm(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/cm/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/cm/lesson/'+w.id+'/'+lv.id:'#'}">
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
  if(!w||!lv){ nav('#/cm/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedCm(wIdx)){ renderHome(); return; }
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
        <a href="#/cm/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/cm/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/cm/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/cm/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('cm', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['cm'] = { init: cmInit };
