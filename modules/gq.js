function gqInit(){

/* ============================== DATA ============================== */
const WORLDS = [{"id":1,"slug":"beginning","title":"Nature's Beginning","subtitle":"When does Nature become a Resource?","emoji":"🌱","gradient":"linear-gradient(135deg,#3DDC97 0%,#22D3EE 100%)","glow":"#3DDC97","levels":[{"id":1,"title":"What is Nature?","intro":"Natura here! Let's find things that Nature made — not humans.","questions":[{"xp":12,"id":"1-1-1","type":"tap","prompt":"Tap everything that is part of Nature.","options":["🌳 Tree","🪑 Chair","🌊 Ocean","📱 Phone","🐝 Bee","🏠 House","☀️ Sun","🍞 Bread"],"answer":["🌳 Tree","🌊 Ocean","🐝 Bee","☀️ Sun"],"explanation":"Nature is the totality of life and non-life forms that exist without being created by humans."},{"xp":12,"id":"1-1-2","type":"mappin","prompt":"Which of these was NOT created by humans?","options":["A wooden chair","A river","A plastic bottle","A brick wall"],"answer":"A river","explanation":"Rivers form naturally. The rest are made by humans, though from natural materials."},{"xp":12,"id":"1-1-3","type":"truefalse","prompt":"Even a plastic button on your shirt ultimately comes from Nature.","options":["True","False"],"answer":"True","explanation":"Trace anything back far enough and it began as a natural resource — petroleum, in the case of plastic."}]},{"id":2,"title":"When it becomes a Resource","intro":"Trees just standing there = Nature. Trees turned into furniture = Resource!","questions":[{"xp":12,"id":"1-2-1","type":"mcq","prompt":"A tree standing in a forest is __. The same tree cut for wood is __.","options":["a resource / Nature","Nature / a resource","both a resource","neither"],"answer":"Nature / a resource","explanation":"Elements of Nature become resources when humans use them for sustenance or to make things."},{"xp":12,"id":"1-2-2","type":"sort","prompt":"Sort each item.","buckets":[{"id":"nat","label":"Nature","emoji":"🌿"},{"id":"res","label":"Resource","emoji":"⛏️"}],"items":[{"label":"Wild bees in a forest","bucket":"nat","emoji":"🐝"},{"label":"Honey in a jar","bucket":"res","emoji":"🍯"},{"label":"River water","bucket":"nat","emoji":"🌊"},{"label":"Bottled drinking water","bucket":"res","emoji":"💧"},{"label":"Iron ore underground","bucket":"nat","emoji":"🪨"},{"label":"Steel rod","bucket":"res","emoji":"🔩"}],"explanation":"The moment we extract and use something from Nature, it becomes a resource."},{"xp":12,"id":"1-2-3","type":"fill","prompt":"For something to be called a resource it must be technologically ______, economically feasible and culturally acceptable.","options":["sacred","accessible","expensive","invisible"],"answer":"accessible","explanation":"Petroleum deep under the sea we cannot reach is not a resource — yet."}]},{"id":3,"title":"Nature vs Human-made","intro":"Quick eyes! Spot the difference.","questions":[{"xp":12,"id":"1-3-1","type":"tap","prompt":"Tap everything that is HUMAN-MADE.","options":["🌵 Cactus","🚗 Car","☁️ Cloud","💡 Lightbulb","🍎 Apple","🪟 Window","🐠 Fish","⚙️ Gear"],"answer":["🚗 Car","💡 Lightbulb","🪟 Window","⚙️ Gear"],"explanation":"Humans transform natural materials into new objects with new functions."},{"xp":12,"id":"1-3-2","type":"truefalse","prompt":"Cutting trees in sacred groves is culturally acceptable everywhere in India.","options":["True","False"],"answer":"False","explanation":"In many traditions, sacred groves are protected — trees there are not treated as a resource."}]},{"id":4,"title":"Nature the Nurturer","intro":"In many Indian traditions, Nature is sacred. Let's see why!","questions":[{"xp":12,"id":"1-4-1","type":"mcq","prompt":"In indigenous traditions, Nature is often seen as…","options":["a machine to be controlled","a nurturer and nourisher","a warehouse of goods","an enemy"],"answer":"a nurturer and nourisher","explanation":"This view leads to respectful, sustainable use of resources."},{"xp":12,"id":"1-4-2","type":"sort","prompt":"Which practices reflect reverence for Nature?","buckets":[{"id":"yes","label":"Reflects reverence","emoji":"🙏"},{"id":"no","label":"Does not","emoji":"❌"}],"items":[{"label":"Tulasi puja at home","bucket":"yes","emoji":"🌿"},{"label":"Overfishing to sell abroad","bucket":"no","emoji":"🎣"},{"label":"Sacred grove protection","bucket":"yes","emoji":"🌳"},{"label":"Clearing forest for a mall","bucket":"no","emoji":"🏬"}],"explanation":"Traditions of reverence naturally align with sustainable stewardship."}]},{"id":5,"title":"Boss: The Collector","intro":"The Collector hoards Nature as loot! Answer to strike back.","isBoss":true,"bossName":"The Collector","questions":[{"xp":12,"id":"1-5-1","type":"mcq","prompt":"Which best defines a 'natural resource'?","options":["Anything expensive","Materials in Nature valuable to humans","Only metals and oil","Anything a factory makes"],"answer":"Materials in Nature valuable to humans","explanation":"Natural resources are materials and substances that occur in Nature and are valuable to humans."},{"xp":12,"id":"1-5-2","type":"tap","prompt":"Tap every requirement for something to be counted as a resource.","options":["Technologically accessible","Economically feasible","Culturally acceptable","Owned by government","Photographed"],"answer":["Technologically accessible","Economically feasible","Culturally acceptable"],"explanation":"All three conditions must be met."},{"xp":12,"id":"1-5-3","type":"truefalse","prompt":"'Exploitation' in this chapter has ONLY a negative meaning.","options":["True","False"],"answer":"False","explanation":"Here it means extraction, utilisation and consumption — a neutral term."}]}]},{"id":2,"slug":"forest","title":"Resource Forest","subtitle":"Life · Materials · Energy","emoji":"🌳","gradient":"linear-gradient(135deg,#22C55E 0%,#84CC16 100%)","glow":"#22C55E","levels":[{"id":1,"title":"Resources for Life","intro":"Air, water, food — the essentials of being alive.","questions":[{"xp":12,"id":"2-1-1","type":"tap","prompt":"Tap all resources ESSENTIAL for life.","options":["💨 Air","💎 Diamond","💧 Water","🌾 Food","🥇 Gold","☀️ Sun"],"answer":["💨 Air","💧 Water","🌾 Food","☀️ Sun"],"explanation":"We cannot make air, water, or the soil that grows our food — they are essential resources."},{"xp":12,"id":"2-1-2","type":"fill","prompt":"We take air from the __, water from rivers and ponds, and food from the __.","options":["atmosphere / cultivation of soil","factory / shop","moon / desert","cloud / mountain"],"answer":"atmosphere / cultivation of soil","explanation":"Straight from the chapter."}]},{"id":2,"title":"Resources for Materials","intro":"A piece of wood → a chair, a statue, a boat. Materials transform!","questions":[{"xp":12,"id":"2-2-1","type":"sort","prompt":"Sort each material by its typical source.","buckets":[{"id":"forest","label":"Forest","emoji":"🌳"},{"id":"earth","label":"Earth / Rocks","emoji":"🪨"}],"items":[{"label":"Timber","bucket":"forest","emoji":"🪵"},{"label":"Marble","bucket":"earth","emoji":"🏛️"},{"label":"Bamboo","bucket":"forest","emoji":"🎋"},{"label":"Gold","bucket":"earth","emoji":"🥇"},{"label":"Rubber","bucket":"forest","emoji":"🌴"},{"label":"Coal","bucket":"earth","emoji":"⚫"}],"explanation":"India's geographical diversity gives us wood to marble, coal to gold."},{"xp":12,"id":"2-2-2","type":"mappin","prompt":"Which is NOT a 'material' resource?","options":["Wood","Marble","Sunlight","Iron"],"answer":"Sunlight","explanation":"Sunlight is an energy resource."}]},{"id":3,"title":"Resources for Energy","intro":"Electricity, transport, factories — all powered by nature.","questions":[{"xp":12,"id":"2-3-1","type":"tap","prompt":"Tap every ENERGY resource.","options":["☀️ Sunlight","🪑 Chair","💨 Wind","⚫ Coal","🌊 Flowing water","🥭 Mango","🛢️ Petroleum","🌫️ Natural gas"],"answer":["☀️ Sunlight","💨 Wind","⚫ Coal","🌊 Flowing water","🛢️ Petroleum","🌫️ Natural gas"],"explanation":"Energy can come from many natural sources — some renewable, some not."},{"xp":12,"id":"2-3-2","type":"truefalse","prompt":"A microhydel plant converts the power of flowing water into electricity.","options":["True","False"],"answer":"True","explanation":"Exactly what the plant in Himachal Pradesh does (Fig 1.2)."}]},{"id":4,"title":"Three-Category Sort","intro":"Big test! Life, Material, or Energy?","questions":[{"xp":12,"id":"2-4-1","type":"sort","prompt":"Bucket each resource.","buckets":[{"id":"life","label":"Life","emoji":"🫁"},{"id":"mat","label":"Material","emoji":"🔨"},{"id":"en","label":"Energy","emoji":"⚡"}],"items":[{"label":"Air","bucket":"life","emoji":"💨"},{"label":"Marble","bucket":"mat","emoji":"🏛️"},{"label":"Coal","bucket":"en","emoji":"⚫"},{"label":"Drinking water","bucket":"life","emoji":"💧"},{"label":"Timber","bucket":"mat","emoji":"🪵"},{"label":"Sunlight","bucket":"en","emoji":"☀️"}],"explanation":"One useful way to categorise is by how we use them — for life, materials, or energy."}]},{"id":5,"title":"Boss: The Miscategoriser","intro":"This shape-shifter mixes labels up! Set them straight.","isBoss":true,"bossName":"The Miscategoriser","questions":[{"xp":12,"id":"2-5-1","type":"mcq","prompt":"One useful way of categorising resources is by:","options":["Weight","The uses we put them to","Colour","Age"],"answer":"The uses we put them to","explanation":"Life, materials, or energy — grouped by use."},{"xp":12,"id":"2-5-2","type":"order","prompt":"Order the flow: tree → furniture.","steps":["Tree grows in forest","Wood is harvested","Wood is shaped","Chair is made"],"explanation":"The transformation is what turns a natural entity into a material resource."},{"xp":12,"id":"2-5-3","type":"tap","prompt":"Tap ALL correct examples of energy resources.","options":["Solar","Wind","Coal","Wood-carving","Petroleum","Chair"],"answer":["Solar","Wind","Coal","Petroleum"],"explanation":"Wood-carving is a craft; chair is an object — not energy sources."}]}]},{"id":3,"slug":"renewable","title":"Renewable Kingdom","subtitle":"Restoration · Regeneration · Cycles","emoji":"☀️","gradient":"linear-gradient(135deg,#FDE68A 0%,#22D3EE 100%)","glow":"#FDE68A","levels":[{"id":1,"title":"Nature's Restoration","intro":"A cut heals. A forest recovers. That's restoration!","questions":[{"xp":12,"id":"3-1-1","type":"mcq","prompt":"Restoration is…","options":["Creating brand new species","Returning something to its healthy state","Destroying old things","Building factories"],"answer":"Returning something to its healthy state","explanation":"Restoration returns a degraded thing back to health."},{"xp":12,"id":"3-1-2","type":"truefalse","prompt":"Regeneration goes BEYOND restoration — it's Nature creating new life.","options":["True","False"],"answer":"True","explanation":"Regeneration is about creating new life and conditions for thriving."}]},{"id":2,"title":"Cycles of Nature","intro":"In Nature, waste doesn't exist. Everything cycles back.","questions":[{"xp":12,"id":"3-2-1","type":"order","prompt":"Order the forest cycle after a tree falls.","steps":["Tree falls in the forest","Fungi and insects decompose it","Nutrients enrich the soil","Seeds grow into new trees"],"explanation":"This is Nature's principle of no-waste cycles."},{"xp":12,"id":"3-2-2","type":"tap","prompt":"Tap RENEWABLE resources.","options":["☀️ Solar","💨 Wind","🌊 Flowing water","🛢️ Petroleum","🪵 Timber (managed)","⚫ Coal"],"answer":["☀️ Solar","💨 Wind","🌊 Flowing water","🪵 Timber (managed)"],"explanation":"Renewable — as long as we don't disturb Nature's rhythm."}]},{"id":3,"title":"The One Big Condition","intro":"Renewable ≠ infinite. Watch the rhythm!","questions":[{"xp":12,"id":"3-3-1","type":"fill","prompt":"For resources to remain renewable, the natural rhythm of ______ and regeneration must not be disturbed.","options":["destruction","restoration","pollution","invention"],"answer":"restoration","explanation":"Straight from the chapter."},{"xp":12,"id":"3-3-2","type":"mcq","prompt":"If we harvest timber FASTER than the forest regrows…","options":["The forest becomes richer","The forest is eventually depleted","Nothing happens","Trees grow faster"],"answer":"The forest is eventually depleted","explanation":"Even renewable resources can be exhausted if used unsustainably."}]},{"id":4,"title":"Ecosystem Services","intro":"Forests do so much more than give us wood!","questions":[{"xp":12,"id":"3-4-1","type":"tap","prompt":"Tap every service a healthy forest provides.","options":["Habitat for animals","Clean air","Prevents soil erosion","Free Wi-Fi","Regulates water cycle","Manufactures cars"],"answer":["Habitat for animals","Clean air","Prevents soil erosion","Regulates water cycle"],"explanation":"These are called ecosystem services."},{"xp":12,"id":"3-4-2","type":"truefalse","prompt":"Planting the SAME types of trees originally growing there helps restore the ecosystem.","options":["True","False"],"answer":"True","explanation":"Native species bring back birds, insects and other creatures too."}]},{"id":5,"title":"Boss: The Forest Destroyer","intro":"It burns forests for profit. Restore what it ruins!","isBoss":true,"bossName":"Forest Destroyer","questions":[{"xp":12,"id":"3-5-1","type":"mappin","prompt":"Which is a RENEWABLE resource?","options":["Coal","Petroleum","Wind","Iron ore"],"answer":"Wind","explanation":"Wind is a classic renewable — it never runs out on human timescales."},{"xp":12,"id":"3-5-2","type":"sort","prompt":"Renewable or Non-renewable?","buckets":[{"id":"r","label":"Renewable","emoji":"♻️"},{"id":"n","label":"Non-renewable","emoji":"⛽"}],"items":[{"label":"Solar","bucket":"r","emoji":"☀️"},{"label":"Coal","bucket":"n","emoji":"⚫"},{"label":"Wind","bucket":"r","emoji":"💨"},{"label":"Petroleum","bucket":"n","emoji":"🛢️"},{"label":"Timber (managed)","bucket":"r","emoji":"🪵"},{"label":"Natural gas","bucket":"n","emoji":"🌫️"}],"explanation":"Renewables restore themselves; non-renewables take millions of years."},{"xp":12,"id":"3-5-3","type":"order","prompt":"Restore a degraded forest — in order.","steps":["Study the original ecosystem","Plant native species","Protect from grazing and fires","Wildlife returns naturally"],"explanation":"Restoration is patient, native, and protective."}]}]},{"id":4,"slug":"underground","title":"Underground Empire","subtitle":"Coal · Petroleum · Minerals","emoji":"⛏️","gradient":"linear-gradient(135deg,#F59E0B 0%,#EF4444 100%)","glow":"#F59E0B","levels":[{"id":1,"title":"Millions of Years","intro":"Some treasures took millions of years to form. Handle with care!","questions":[{"xp":12,"id":"4-1-1","type":"mcq","prompt":"Coal and petroleum formed over…","options":["A few decades","Millions of years","Since 2001","A single monsoon"],"answer":"Millions of years","explanation":"Fossil fuels form on geological timescales — practically impossible to replace."},{"xp":12,"id":"4-1-2","type":"truefalse","prompt":"Non-renewable resources can be replaced within a human lifetime.","options":["True","False"],"answer":"False","explanation":"That's what makes them non-renewable."}]},{"id":2,"title":"The Fossil Family","intro":"Coal, petroleum, natural gas — the fossil fuel siblings.","questions":[{"xp":12,"id":"4-2-1","type":"tap","prompt":"Tap every FOSSIL fuel.","options":["Coal","Petroleum","Solar","Natural gas","Wind","Hydro"],"answer":["Coal","Petroleum","Natural gas"],"explanation":"Fossil fuels come from ancient organic matter."},{"xp":12,"id":"4-2-2","type":"mcq","prompt":"An offshore oil rig extracts…","options":["Solar power","Petroleum from below the seabed","Iron ore","Rainwater"],"answer":"Petroleum from below the seabed","explanation":"Fig 1.3 shows exactly this."}]},{"id":3,"title":"Metals & Minerals","intro":"Iron for buildings, copper for wires, bauxite for aluminium!","questions":[{"xp":12,"id":"4-3-1","type":"sort","prompt":"Match mineral to its main use.","buckets":[{"id":"build","label":"Construction","emoji":"🏗️"},{"id":"elec","label":"Electronics","emoji":"🔌"},{"id":"alum","label":"Aluminium","emoji":"🥫"}],"items":[{"label":"Iron ore","bucket":"build","emoji":"🪨"},{"label":"Copper","bucket":"elec","emoji":"🟠"},{"label":"Bauxite","bucket":"alum","emoji":"⚪"},{"label":"Limestone","bucket":"build","emoji":"🧱"},{"label":"Silicon","bucket":"elec","emoji":"💻"}],"explanation":"Different minerals — different industries."}]},{"id":4,"title":"Overuse Consequences","intro":"Mine badly and everything suffers.","questions":[{"xp":12,"id":"4-4-1","type":"tap","prompt":"Tap consequences of unsustainable mining.","options":["Air pollution","Loss of habitat","Water contamination","Cleaner cities","Healthier soil","Deforestation"],"answer":["Air pollution","Loss of habitat","Water contamination","Deforestation"],"explanation":"Reckless mining damages air, water, land and life."},{"xp":12,"id":"4-4-2","type":"mcq","prompt":"The best long-term response to fossil fuel depletion is…","options":["Dig faster","Shift to renewables and efficiency","Ban all energy use","Ignore the problem"],"answer":"Shift to renewables and efficiency","explanation":"Sustainable alternatives buy Nature — and us — time."}]},{"id":5,"title":"Boss: Coal Titan","intro":"The Coal Titan feasts on smog. Prove renewables can win!","isBoss":true,"bossName":"Coal Titan","questions":[{"xp":12,"id":"4-5-1","type":"mappin","prompt":"Which is NON-renewable?","options":["Sunlight","Wind","Coal","Flowing water"],"answer":"Coal","explanation":"Coal cannot be replenished on human timescales."},{"xp":12,"id":"4-5-2","type":"truefalse","prompt":"Using minerals sustainably means extracting only what we truly need.","options":["True","False"],"answer":"True","explanation":"Sustainability = matching use to Nature's ability to provide."},{"xp":12,"id":"4-5-3","type":"fill","prompt":"The best alternative to fossil fuels for the power grid is _____ energy.","options":["renewable","imported","invisible","instant"],"answer":"renewable","explanation":"Solar, wind, hydro — clean and lasting."}]}]},{"id":5,"slug":"worldmap","title":"Resource World Map","subtitle":"Distribution · Trade · Conflicts","emoji":"🗺️","gradient":"linear-gradient(135deg,#38BDF8 0%,#8B5CF6 100%)","glow":"#38BDF8","levels":[{"id":1,"title":"Uneven Distribution","intro":"Not every state has every resource — that's why we trade!","questions":[{"xp":12,"id":"5-1-1","type":"sort","prompt":"Match resource to a state famous for it.","buckets":[{"id":"jh","label":"Jharkhand","emoji":"⚫"},{"id":"raj","label":"Rajasthan","emoji":"🏜️"},{"id":"gj","label":"Gujarat","emoji":"🛢️"}],"items":[{"label":"Coal","bucket":"jh","emoji":"⚫"},{"label":"Iron ore","bucket":"jh","emoji":"🪨"},{"label":"Solar power","bucket":"raj","emoji":"☀️"},{"label":"Marble","bucket":"raj","emoji":"🏛️"},{"label":"Petroleum","bucket":"gj","emoji":"🛢️"}],"explanation":"India's geography spreads resources unevenly across states."}]},{"id":2,"title":"Trade & Industries","intro":"Resources move; industries rise where they land.","questions":[{"xp":12,"id":"5-2-1","type":"mappin","prompt":"A steel plant is usually located near…","options":["Deserts","Iron ore + coal deposits","Beaches","Airports"],"answer":"Iron ore + coal deposits","explanation":"Heavy raw materials pull industry to their source."},{"xp":12,"id":"5-2-2","type":"truefalse","prompt":"Trade helps distribute resources between regions that have and don't have them.","options":["True","False"],"answer":"True","explanation":"That's the whole point of trade."}]},{"id":3,"title":"Resource Curse","intro":"Being rich in one resource can sometimes hurt a nation. Really!","questions":[{"xp":12,"id":"5-3-1","type":"mcq","prompt":"The 'resource curse' means…","options":["Resources give magical powers","Nations rich in one resource often fail to develop other industries","Resources always vanish","Curses come from mines"],"answer":"Nations rich in one resource often fail to develop other industries","explanation":"Dependence on a single export can distort an economy."},{"xp":12,"id":"5-3-2","type":"tap","prompt":"Tap risks of exporting only raw materials.","options":["Few local jobs in industry","Price shocks hurt economy","Low value addition","Guaranteed wealth","Diverse economy"],"answer":["Few local jobs in industry","Price shocks hurt economy","Low value addition"],"explanation":"Building industries at home avoids the curse."}]},{"id":4,"title":"Conflicts over Resources","intro":"Water, oil, minerals — history is full of struggles.","questions":[{"xp":12,"id":"5-4-1","type":"truefalse","prompt":"Rivers shared across states or countries can cause disputes.","options":["True","False"],"answer":"True","explanation":"River-water sharing is a real-world conflict."},{"xp":12,"id":"5-4-2","type":"mcq","prompt":"The best way to prevent resource conflicts is…","options":["Grab as much as possible","Fair sharing and agreements","Hide the resources","Waste them fast"],"answer":"Fair sharing and agreements","explanation":"Cooperation beats competition."}]},{"id":5,"title":"Boss: The Greedy Merchant","intro":"He hoards resources for himself. Break his monopoly!","isBoss":true,"bossName":"Greedy Merchant","questions":[{"xp":12,"id":"5-5-1","type":"mappin","prompt":"Uneven distribution of resources is best handled through…","options":["War","Trade & cooperation","Ignoring it","Hoarding"],"answer":"Trade & cooperation","explanation":"Trade turns scarcity into a shared solution."},{"xp":12,"id":"5-5-2","type":"sort","prompt":"Which are BENEFITS vs RISKS of resource abundance?","buckets":[{"id":"b","label":"Benefit","emoji":"✅"},{"id":"r","label":"Risk","emoji":"⚠️"}],"items":[{"label":"Jobs and revenue","bucket":"b","emoji":"💼"},{"label":"Over-dependence","bucket":"r","emoji":"🎯"},{"label":"Environmental damage","bucket":"r","emoji":"🌫️"},{"label":"Industrial growth","bucket":"b","emoji":"🏭"},{"label":"Corruption / conflicts","bucket":"r","emoji":"⚔️"}],"explanation":"Resources are a double-edged sword — depend on governance."}]}]},{"id":6,"slug":"stewardship","title":"Stewardship Valley","subtitle":"Groundwater · Organic Farming · Solar","emoji":"🌾","gradient":"linear-gradient(135deg,#10B981 0%,#FDE68A 100%)","glow":"#10B981","levels":[{"id":1,"title":"What is Stewardship?","intro":"Being a caretaker, not an owner, of Earth's gifts.","questions":[{"xp":12,"id":"6-1-1","type":"mcq","prompt":"Stewardship of resources means…","options":["Use it all as fast as possible","Care for and use resources responsibly","Never touch anything","Sell everything"],"answer":"Care for and use resources responsibly","explanation":"Stewardship balances use today with health for tomorrow."},{"xp":12,"id":"6-1-2","type":"truefalse","prompt":"Sustainable use means using resources at a rate they can be replenished.","options":["True","False"],"answer":"True","explanation":"The core idea of sustainability."}]},{"id":2,"title":"Save Groundwater (Punjab)","intro":"Punjab's water table is falling. Choose wisely!","questions":[{"xp":12,"id":"6-2-1","type":"mcq","prompt":"Overpumping groundwater causes…","options":["Rivers to overflow","Water table to fall","More rainfall","Bigger fish"],"answer":"Water table to fall","explanation":"Once the table drops, wells fail and crops suffer."},{"xp":12,"id":"6-2-2","type":"tap","prompt":"Tap actions that SAVE groundwater.","options":["Rainwater harvesting","Drip irrigation","Flood irrigation","Growing water-heavy crops in dry areas","Planting native trees"],"answer":["Rainwater harvesting","Drip irrigation","Planting native trees"],"explanation":"Save what falls; use only what you need."},{"xp":12,"id":"6-2-3","type":"order","prompt":"Correct order to recover a falling water table:","steps":["Reduce water-heavy crops","Adopt drip irrigation","Harvest rainwater into recharge pits","Water table rises over years"],"explanation":"Restoration takes patience and coordinated action."}]},{"id":3,"title":"Organic Farming (Sikkim)","intro":"Sikkim became India's first fully organic state!","questions":[{"xp":12,"id":"6-3-1","type":"mappin","prompt":"In 2016, Sikkim became India's first fully…","options":["Solar state","Organic state","Coal-free state","Desert state"],"answer":"Organic state","explanation":"A landmark stewardship achievement."},{"xp":12,"id":"6-3-2","type":"sort","prompt":"Chemical or Organic farming?","buckets":[{"id":"c","label":"Chemical","emoji":"🧪"},{"id":"o","label":"Organic","emoji":"🌱"}],"items":[{"label":"Synthetic pesticides","bucket":"c","emoji":"☠️"},{"label":"Compost","bucket":"o","emoji":"🍂"},{"label":"Urea fertiliser","bucket":"c","emoji":"🧴"},{"label":"Crop rotation","bucket":"o","emoji":"🔄"},{"label":"Cow manure","bucket":"o","emoji":"🐄"}],"explanation":"Organic mimics natural cycles — chemical shortcuts break them."}]},{"id":4,"title":"Solar & the ISA","intro":"India helps lead the world into a solar future.","questions":[{"xp":12,"id":"6-4-1","type":"fill","prompt":"The International Solar Alliance (ISA) was co-founded by India and _____.","options":["France","Japan","Brazil","Egypt"],"answer":"France","explanation":"Launched by India and France at COP21 in Paris (2015)."},{"xp":12,"id":"6-4-2","type":"tap","prompt":"Tap benefits of solar energy.","options":["Renewable","Low emissions","Runs out in a year","Reduces fuel imports","Creates jobs"],"answer":["Renewable","Low emissions","Reduces fuel imports","Creates jobs"],"explanation":"Solar checks nearly every box for sustainability."}]},{"id":5,"title":"Final Boss: Lord Overexploitation","intro":"This is it! Everything you've learned — for Gaia!","isBoss":true,"bossName":"Lord Overexploitation","questions":[{"xp":12,"id":"6-5-1","type":"mcq","prompt":"Which is the BEST summary of sustainable resource use?","options":["Extract, use, discard","Meet today's needs without hurting tomorrow's","Grow forever, no limits","Freeze all use"],"answer":"Meet today's needs without hurting tomorrow's","explanation":"The definition of sustainability."},{"xp":12,"id":"6-5-2","type":"sort","prompt":"Sustainable or Unsustainable?","buckets":[{"id":"s","label":"Sustainable","emoji":"🌍"},{"id":"u","label":"Unsustainable","emoji":"🔥"}],"items":[{"label":"Solar rooftop","bucket":"s","emoji":"☀️"},{"label":"Clear-cutting rainforest","bucket":"u","emoji":"🪓"},{"label":"Rainwater harvesting","bucket":"s","emoji":"💧"},{"label":"Flaring natural gas","bucket":"u","emoji":"🔥"},{"label":"Organic farming","bucket":"s","emoji":"🌱"},{"label":"Over-mining coal","bucket":"u","emoji":"⚫"}],"explanation":"Sustainable choices align with Nature's cycles."},{"xp":12,"id":"6-5-3","type":"order","prompt":"The Nature Guardian's oath — order the steps.","steps":["Know your resources","Use only what regenerates","Restore what's damaged","Share fairly with others"],"explanation":"Know → use wisely → restore → share. The path of a Guardian."},{"xp":12,"id":"6-5-4","type":"tap","prompt":"Tap every real Indian stewardship story from this chapter.","options":["Sikkim organic state","Punjab groundwater crisis","International Solar Alliance","Mars colony","Sacred groves"],"answer":["Sikkim organic state","Punjab groundwater crisis","International Solar Alliance","Sacred groves"],"explanation":"These are the real examples — you know them now!"}]}]}];

const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['🧝‍♀️','🧑‍🌾','🧑‍🔬','🧑‍🚀','🥷','🧙'];

/* ============================== STATE ============================== */
const STORE_KEY = 'gaia-guardian-v1';
function defaultState(){ return {avatar:'🧝‍♀️', name:'Guardian', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldGq(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('gq', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedGq(i){
  const active = activeUnreviewedWorldGq();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewGq(i){
  const active = activeUnreviewedWorldGq();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewGq = ()=>{
  const active = activeUnreviewedWorldGq();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 'gq',
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
  const mouth = sad ? `<path d="M42 70 Q 50 63, 58 70" stroke="#1b3a2c" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    : mood==='think' ? `<circle cx="50" cy="70" r="2" fill="#1b3a2c"/>`
    : `<path d="M42 68 Q 50 78, 58 68" stroke="#1b3a2c" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(140,100,255,0.55))">
    <defs>
      <radialGradient id="mLeaf" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#DFFFCF"/><stop offset="60%" stop-color="#7CE495"/><stop offset="100%" stop-color="#3EA76F"/>
      </radialGradient>
      <radialGradient id="mGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#B9F7C7" stop-opacity="0.7"/><stop offset="100%" stop-color="#B9F7C7" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlow)"/>
    <path d="M50 12 C 25 25, 15 55, 50 92 C 85 55, 75 25, 50 12 Z" fill="url(#mLeaf)"/>
    <path d="M50 20 Q 48 55, 50 85" stroke="#2C7A4E" stroke-width="1.5" fill="none" opacity="0.5"/>
    <ellipse cx="40" cy="55" rx="4" ry="${sad?2:5}" fill="#1b3a2c"/>
    <ellipse cx="60" cy="55" rx="4" ry="${sad?2:5}" fill="#1b3a2c"/>
    <circle cx="41.5" cy="53.5" r="1.2" fill="white"/>
    <circle cx="61.5" cy="53.5" r="1.2" fill="white"/>
    ${mouth}
    <circle cx="34" cy="65" r="3" fill="#ff9fbe" opacity="0.6"/>
    <circle cx="66" cy="65" r="3" fill="#ff9fbe" opacity="0.6"/>
  </svg>`;
}

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
function nav(hash){ location.hash = hash; }
if(window.__gqHashListener) window.removeEventListener('hashchange', window.__gqHashListener);
window.__gqHashListener = function(){ if(!location.hash.startsWith('#/gq')) return; render(); };
window.addEventListener('hashchange', window.__gqHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/gq\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='🧝‍♀️';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">A journey begins</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">The planet <span class="text-gradient-aurora">Gaia</span> is out of balance.</h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">The Earth Spirit has chosen you. Travel six worlds, defeat Overexploitation, and learn how humanity uses Nature's gifts.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Accept your quest →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Guardian</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Guardian" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter Gaia →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Guardian', avatar); render(); };
  draw();
}

/* ---------------- HOME (Adventure Map) ---------------- */
function renderHome(){
  const lv = levelNum(STATE.xp), frac = levelFrac(STATE.xp);
  const lessonsDone = Object.values(STATE.progress).filter(p=>p.stars>0).length;
  app.innerHTML = `${Nav()}<main>
    <div class="glass-strong rounded-3xl" style="padding:18px;display:flex;align-items:center;gap:16px">
      <div style="font-size:44px;width:60px;height:60px;border-radius:16px;background:#8b7bf033;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px -6px #8b7bf088">${STATE.avatar}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Nature Guardian</div>
        <div class="font-display" style="font-size:22px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${STATE.name}</div>
        <div class="progress-track" style="margin-top:6px;height:8px"><div class="progress-fill" style="width:${frac*100}%"></div></div>
      </div>
      <div style="text-align:right">
        <div class="pillbox" style="background:#8b7bf033;border:1px solid #8b7bf055">Lv ${lv}</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Natura</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to restore Gaia?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedGq(i);
        const needsReview = worldNeedsReviewGq(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/gq/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewGq();return false;"` : '';
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
      <span>Chapter 1 · Natural Resources &amp; Their Use</span>
    </div>
  </main>`;
  window.__resetAll = resetSave;
}

/* ---------------- WORLD (level select) ---------------- */
function renderWorld(slug){
  const w = WORLDS.find(w=>w.slug===slug);
  if(!w){ nav('#/gq/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedGq(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/gq/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/gq/lesson/'+w.id+'/'+lv.id:'#'}">
          <div class="lesson-icon" style="${lv.isBoss?'background:#f26d6d55;box-shadow:0 0 20px -4px #f26d6d':'background:linear-gradient(135deg,'+(w.gradient.match(/#\\w+/g)?.[0]||'#8b7bf0')+'55, transparent)'}">${lv.isBoss?'👹':lv.id}</div>
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
  if(!w||!lv){ nav('#/gq/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedGq(wIdx)){ renderHome(); return; }
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
        <a href="#/gq/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/gq/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/gq/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/gq/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('gq', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['gq'] = { init: gqInit };
