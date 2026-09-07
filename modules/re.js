function reInit(){

/* ============================== DATA ============================== */
const WORLDS_EN = [
{"id":1,"slug":"day-night","title":"Day & Night","subtitle":"Why Day Becomes Night · Land, Sea & Address · Changes All Around","emoji":"🌗","gradient":"linear-gradient(135deg,#60A5FA 0%,#1E3A8A 100%)","glow":"#60A5FA","levels":[
  {"id":1,"title":"Why Day Becomes Night","intro":"Does the Sun really move across the sky, or is something else happening?","questions":[
    {"type":"mcq","prompt":"In the Sun-Earth game and torch-globe demonstration, what actually causes day and night?","options":["The Earth rotates, while the Sun stays in one place","The Sun moves around the Earth every day","The Moon blocks the Sun's light at night","Clouds cover the Sun at night"],"answer":"The Earth rotates, while the Sun stays in one place","explanation":"This is why different parts of Earth face the Sun at different times."},
    {"type":"mcq","prompt":"In the torch and globe demonstration, the side of the globe facing the torchlight represents ______.","options":["day","night","summer","winter"],"answer":"day","explanation":"The side without light represents night."},
    {"type":"mcq","prompt":"A globe is a model that represents Earth, shaped like a ______.","options":["ball, just like the real Earth","flat disc","cube","pyramid"],"answer":"ball, just like the real Earth","explanation":"Globes help us understand Earth's true shape and geography."}
  ]},
  {"id":2,"title":"Land, Sea & Address","intro":"How much of our planet is actually covered in water?","questions":[
    {"type":"mcq","prompt":"According to the chapter, the blue parts of the globe — seas and oceans — cover about how much of the Earth?","options":["Three-fourths","One-fourth","Half","Almost none"],"answer":"Three-fourths","explanation":"The remaining land masses hold all the countries we know."},
    {"type":"mcq","prompt":"What is the key difference between a sea and an ocean, according to the chapter?","options":["Seas are usually smaller and partly enclosed by land, while oceans are vast and open","Seas are always freshwater while oceans are always salty","Oceans are smaller than seas","There is no real difference between them"],"answer":"Seas are usually smaller and partly enclosed by land, while oceans are vast and open","explanation":"This helps explain the difference in scale between these two water bodies."},
    {"type":"mcq","prompt":"DIGIPIN gives every small place in India its own special code, acting like a digital version of your ______.","options":["address","name","photograph","passport"],"answer":"address","explanation":"This helps delivery services and emergency responders find places quickly."}
  ]},
  {"id":3,"title":"Changes All Around","intro":"Some changes happen in seconds, others take years — but many repeat.","questions":[
    {"type":"mcq","prompt":"According to the chapter, which of these changes happens repeatedly, following a pattern every single day?","options":["Day turning into night and back again","A person's height increasing","A tree growing taller","A river changing its course permanently"],"answer":"Day turning into night and back again","explanation":"This daily cycle is caused by Earth's rotation."},
    {"type":"truefalse","prompt":"Some changes in nature take years, while others happen in just days or even minutes.","options":["True","False"],"answer":"True","explanation":"Change happens at many different speeds in the natural world."},
    {"type":"mcq","prompt":"What repeating pattern in nature, based on changes over months, is described in the chapter as a 'natural rhythm'?","options":["Seasons","Only day and night","Only festivals","Only school terms"],"answer":"Seasons","explanation":"Seasons repeat in a predictable yearly pattern."}
  ]},
  {"id":4,"title":"Boss: Guardian of Time","intro":"The Rhythm Keeper tests your understanding of nature's repeating patterns!","isBoss":true,"bossName":"Rhythm Keeper","questions":[
    {"type":"mcq","prompt":"What did the activity of a student playing 'Earth' and another playing 'Sun' help demonstrate?","options":["How rotation causes day and night as different parts face or turn away from the Sun","How the Moon controls the tides","How seasons change throughout the year","How rain forms in clouds"],"answer":"How rotation causes day and night as different parts face or turn away from the Sun","explanation":"This simple role-play makes an abstract idea easy to visualise."},
    {"type":"mcq","prompt":"Why does the chapter say that studying the same place in nature over time, again and again, is valuable?","options":["It helps us notice patterns and rhythms that repeat, like seasons","It has no real educational value","It only works for scientists, not students","Patterns in nature never repeat"],"answer":"It helps us notice patterns and rhythms that repeat, like seasons","explanation":"This is the idea behind the chapter's seasons' journal activity."},
    {"type":"mcq","prompt":"What is the overall lesson of exploring day, night and repeating natural changes?","options":["Nature follows patterns and rhythms that we can observe and understand","Nature is completely random with no patterns","Only humans experience regular daily changes","Time has no connection to nature"],"answer":"Nature follows patterns and rhythms that we can observe and understand","explanation":"This understanding helps us connect more deeply with the world around us."}
  ]}
]},
{"id":2,"slug":"six-seasons","title":"Six Seasons of India","subtitle":"Naming the Seasons · Farming with the Seasons · Festivals of the Seasons","emoji":"🍁","gradient":"linear-gradient(135deg,#FBBF24 0%,#92400E 100%)","glow":"#FBBF24","levels":[
  {"id":1,"title":"Naming the Seasons","intro":"India experiences a rich cycle of six traditional seasons.","questions":[
    {"type":"mcq","prompt":"According to the chapter, India experiences how many seasons based on how nature changes through the year?","options":["Six","Four","Two","Twelve"],"answer":"Six","explanation":"These are Vasanta, Grishma, Varsha, Sharad, Hemant and Shishir."},
    {"type":"mcq","prompt":"The monsoon season, when heavy rains occur, is called ______ in the traditional list of Indian seasons.","options":["Varsha","Grishma","Shishir","Hemant"],"answer":"Varsha","explanation":"Varsha brings the rains that many crops and rivers depend on."},
    {"type":"mcq","prompt":"The traditional Indian season name for winter is ______.","options":["Shishir","Vasanta","Grishma","Sharad"],"answer":"Shishir","explanation":"Shishir marks the coldest part of the year."}
  ]},
  {"id":2,"title":"Farming with the Seasons","intro":"Farmers plan their crops around the rhythm of the seasons.","questions":[
    {"type":"mcq","prompt":"According to the chapter, why do farmers grow different crops in different seasons?","options":["Some crops grow best in winter heat, cold, or with more water in the rainy season","All crops grow equally well in every season","Farmers choose crops randomly regardless of season","Seasons have no effect on farming at all"],"answer":"Some crops grow best in winter heat, cold, or with more water in the rainy season","explanation":"Matching crops to seasons helps ensure a good harvest."},
    {"type":"mcq","prompt":"Crops that need a lot of water to grow are typically planted during which season?","options":["The rainy season","The dry winter season","Only in summer heat","Never — crops do not need water"],"answer":"The rainy season","explanation":"The monsoon provides the water these crops depend on."},
    {"type":"truefalse","prompt":"Winter in Kerala is different from winter in the Kashmir valley, showing how seasons vary across India's regions.","options":["True","False"],"answer":"True","explanation":"India's huge size means the same season can feel very different in different places."}
  ]},
  {"id":3,"title":"Festivals of the Seasons","intro":"Many of India's festivals are tied closely to the changing seasons.","questions":[
    {"type":"mcq","prompt":"Pongal and Makar Sankranti are harvest festivals that mark ______.","options":["a new year and harvest celebration, typically in winter","only the start of the monsoon","only the peak of summer heat","a festival with no seasonal connection"],"answer":"a new year and harvest celebration, typically in winter","explanation":"These festivals celebrate the fruits of the harvest season."},
    {"type":"mcq","prompt":"Holi, a festival of colours, is associated with which season, when flowers bloom?","options":["Spring","Autumn","Monsoon","Winter"],"answer":"Spring","explanation":"Holi's bright colours reflect the blossoming of spring."},
    {"type":"mcq","prompt":"Diwali is associated with which season, celebrated after crops are harvested?","options":["Autumn","Spring","Monsoon","Summer"],"answer":"Autumn","explanation":"Diwali often marks a season of abundance after the harvest."}
  ]},
  {"id":4,"title":"Boss: Guardian of the Harvest","intro":"The Season Sentinel tests your knowledge of India's seasons and festivals!","isBoss":true,"bossName":"Season Sentinel","questions":[
    {"type":"mcq","prompt":"Baisakhi, Gudi Padwa, Vishu and Rongali Bihu are all festivals that mark ______.","options":["the new year and harvest, celebrated around spring","the coldest days of winter","only the monsoon season","the same single festival with different names, unrelated to season"],"answer":"the new year and harvest, celebrated around spring","explanation":"Different regions of India celebrate the same seasonal moment with their own names and traditions."},
    {"type":"mcq","prompt":"What is the overall lesson connecting Indian festivals to the seasons, according to the chapter?","options":["Many Indian festivals are deeply connected to seasonal changes and agricultural cycles","Festivals have no connection to nature or farming","Every Indian festival occurs at the exact same time each year regardless of season","Only northern Indian festivals are connected to seasons"],"answer":"Many Indian festivals are deeply connected to seasonal changes and agricultural cycles","explanation":"This connection between culture and nature runs throughout the chapter."},
    {"type":"mcq","prompt":"What does the chapter say seasons teach us, beyond just changes in weather?","options":["The cycles of life, and how change is natural and necessary","That nothing in nature ever really changes","That only humans experience seasonal changes","That seasons have no impact on daily life"],"answer":"The cycles of life, and how change is natural and necessary","explanation":"This is the deeper lesson behind the chapter's exploration of seasons."}
  ]}
]},
{"id":3,"slug":"traveled-stories","title":"Stories That Traveled","subtitle":"The Travelling Birds · Yoga's Journey · Chilli & Sugar's Journeys","emoji":"🦜","gradient":"linear-gradient(135deg,#34D399 0%,#065F46 100%)","glow":"#34D399","levels":[
  {"id":1,"title":"The Travelling Birds","intro":"Every winter, tiny birds cross thousands of kilometres to reach India.","questions":[
    {"type":"mcq","prompt":"Rosy starlings fly thousands of kilometres every winter from the southern part of Russia, Mongolia and nearby countries to ______.","options":["India","Africa","Australia","South America"],"answer":"India","explanation":"They come to enjoy India's warmer winter weather."},
    {"type":"mcq","prompt":"How do rosy starlings help farmers during their winter visit to India?","options":["They feed on locusts and grasshoppers, eating pests that harm crops","They pollinate crops directly","They scare away all other birds","They have no effect on farming at all"],"answer":"They feed on locusts and grasshoppers, eating pests that harm crops","explanation":"This makes them helpful visitors for Indian farmers."},
    {"type":"mcq","prompt":"What does the story of the rosy starling's long journey tell us about nature?","options":["Nature is deeply connected across the globe, with no real boundaries","Birds never travel beyond their home country","Only large animals migrate long distances","Migration has no benefit to ecosystems"],"answer":"Nature is deeply connected across the globe, with no real boundaries","explanation":"Migration shows how nature moves freely across countries."}
  ]},
  {"id":2,"title":"Yoga's Journey","intro":"A practice thousands of years old is now loved across the world.","questions":[
    {"type":"mcq","prompt":"According to the chapter, yoga has been practised in India for more than how many years?","options":["3,000 years","300 years","30 years","30,000 years"],"answer":"3,000 years","explanation":"Yoga has ancient roots in Indian tradition."},
    {"type":"mcq","prompt":"The United Nations declared 21 June as the International Day of ______ in 2014.","options":["Yoga","Peace","Meditation","Wellness"],"answer":"Yoga","explanation":"Millions of people around the world now celebrate this day together."},
    {"type":"mcq","prompt":"How did yoga spread from India to become practised in almost every country today?","options":["Travellers, scholars and teachers from India shared it with the world over time","It was invented independently in every country","It spread only through modern social media","It never actually spread beyond India"],"answer":"Travellers, scholars and teachers from India shared it with the world over time","explanation":"This gradual spread is a wonderful example of cultural exchange."}
  ]},
  {"id":3,"title":"Chilli & Sugar's Journeys","intro":"Two flavours that changed Indian cooking forever — one arriving, one departing.","questions":[
    {"type":"mcq","prompt":"Chilli plants, originally found only in South America, were brought to India by travellers from which country, 400 to 500 years ago?","options":["Portugal","China","England","Egypt"],"answer":"Portugal","explanation":"Chillies quickly became a beloved part of Indian cuisine."},
    {"type":"mcq","prompt":"Before chillies arrived in India, which spice was commonly used to add heat to food?","options":["Black pepper","Sugar","Salt only","Cardamom only"],"answer":"Black pepper","explanation":"Black pepper was India's original source of spicy heat."},
    {"type":"mcq","prompt":"According to the chapter, in which country was the method of making jaggery from sugarcane juice first discovered?","options":["India","China","Portugal","Mexico"],"answer":"India","explanation":"This discovery eventually led to sugar spreading around the world through trade."}
  ]},
  {"id":4,"title":"Boss: Guardian of Exchange","intro":"The Trade Wind Keeper tests your knowledge of these traveling stories!","isBoss":true,"bossName":"Trade Wind Keeper","questions":[
    {"type":"mcq","prompt":"What common theme runs through the stories of rosy starlings, yoga, chilli and sugar?","options":["Living things, practices and foods travel across the world, connecting different cultures","Nothing from India has ever influenced other countries","Only modern technology allows things to travel between countries","Every country developed its foods and practices in complete isolation"],"answer":"Living things, practices and foods travel across the world, connecting different cultures","explanation":"Each story shows a different kind of connection across the globe."},
    {"type":"mcq","prompt":"Besides chillies, which other foods does the chapter mention as having 'travelled' a long way to become common in Indian cuisine today?","options":["Potatoes, tomatoes, peanuts and cashews","Only rice","Only wheat","Only mangoes"],"answer":"Potatoes, tomatoes, peanuts and cashews","explanation":"Many familiar Indian ingredients actually originated far away."},
    {"type":"mcq","prompt":"What does the sweet story of sugar tell us about India's connection to the rest of the world?","options":["Indian discoveries and knowledge, like making sugar from jaggery, spread to other parts of the world through trade","Sugar was always known everywhere in the world","India never shared any knowledge with other countries","Sugar has no real history of travel or trade"],"answer":"Indian discoveries and knowledge, like making sugar from jaggery, spread to other parts of the world through trade","explanation":"This shows exchange flowing both into and out of India."}
  ]}
]},
{"id":4,"slug":"one-family","title":"One Earth, One Family","subtitle":"The Marigold & The Cow · Views from Space · One Family","emoji":"🌍","gradient":"linear-gradient(135deg,#F472B6 0%,#831843 100%)","glow":"#F472B6","levels":[
  {"id":1,"title":"The Marigold & The Cow","intro":"Two more stories of things that found new homes far from where they began.","questions":[
    {"type":"mcq","prompt":"The marigold flower, now common in Indian festivals and temples, originally came from which country?","options":["Mexico","China","Portugal","Egypt"],"answer":"Mexico","explanation":"Marigolds found a special place in Indian celebrations after arriving from far away."},
    {"type":"mcq","prompt":"Portuguese traders once took Indian cows to which country, where their breeds later became very important?","options":["Brazil","Mexico","Russia","Japan"],"answer":"Brazil","explanation":"These cows thrived in Brazil's climate over time."},
    {"type":"mcq","prompt":"Today, more than three-fourths of Brazil's milk comes from which three Indian cow breeds?","options":["Gir, Kankrej and Ongole","Jersey, Holstein and Angus","Only the Gir breed","No Indian breeds are used in Brazil"],"answer":"Gir, Kankrej and Ongole","explanation":"These breeds became so important that their images even appear on Brazilian stamps and coins."}
  ]},
  {"id":2,"title":"Views from Space","intro":"What do Indian astronauts see when they look down at Earth?","questions":[
    {"type":"mcq","prompt":"Which Indian astronaut was the first to see the Earth from space, describing India as 'Saare Jahaan Se Achcha'?","options":["Wing Commander Rakesh Sharma","Group Captain Shubhanshu Shukla","Kalpana Chawla","Sunita Williams"],"answer":"Wing Commander Rakesh Sharma","explanation":"His words are still remembered as a proud moment for India."},
    {"type":"mcq","prompt":"According to Group Captain Shubhanshu Shukla's reflection from the International Space Station, what did the Earth look like from space?","options":["Completely one, with no visible borders between countries","Clearly divided into different coloured countries","Covered in visible national flags","Impossible to see at all"],"answer":"Completely one, with no visible borders between countries","explanation":"This powerful observation reminds us that borders are human-made, not natural."},
    {"type":"mcq","prompt":"From high up in space, what can we NOT see on Earth, according to the chapter?","options":["Small details like our own city or village","The broad shapes of land masses","The blue colour of the oceans","The overall shape of the planet"],"answer":"Small details like our own city or village","explanation":"From space, Earth looks tiny, and only broad shapes are visible."}
  ]},
  {"id":3,"title":"One Family","intro":"An ancient Indian idea reminds us that we all share one home.","questions":[
    {"type":"mcq","prompt":"The ancient Indian saying 'Vasudhaiva Kutumbakam' means ______.","options":["the world is one family","only India is important","borders must be strictly guarded","every country stands alone"],"answer":"the world is one family","explanation":"This idea connects all people, animals and nature as one family."},
    {"type":"mcq","prompt":"According to the chapter, when we see the world as one family, what do we learn to do?","options":["Live with respect, care and love for one another and the Earth","Ignore the needs of other countries","Compete constantly with other nations","Avoid learning about other cultures"],"answer":"Live with respect, care and love for one another and the Earth","explanation":"This mindset encourages global responsibility and kindness."},
    {"type":"mcq","prompt":"What does the chapter say makes Earth truly special compared to other planets we know of?","options":["It is the only planet known to have life","It is the largest planet in the solar system","It is the closest planet to the Sun","It has no water at all"],"answer":"It is the only planet known to have life","explanation":"This uniqueness is why the chapter urges us to protect our planet."}
  ]},
  {"id":4,"title":"Boss: Guardian of Belonging","intro":"The final challenge! Face the Kutumbakam Keeper to complete Rhythms of Earth Quest.","isBoss":true,"bossName":"Kutumbakam Keeper","questions":[
    {"type":"mcq","prompt":"What is the shared message across the stories of rosy starlings, yoga, chilli, sugar, marigolds and Indian cows?","options":["The Earth is a connected, living planet where people, animals, plants and ideas travel and grow together","Every country developed entirely on its own with no outside influence","Only large countries can influence global culture","Nature and culture have no meaningful connections across borders"],"answer":"The Earth is a connected, living planet where people, animals, plants and ideas travel and grow together","explanation":"Every story in this chapter reinforces this central idea of connection."},
    {"type":"mcq","prompt":"Why does the chapter say 'Earth is not just our home, it is a gift we must protect'?","options":["Because caring for the Earth means caring for each other, as one shared family","Because Earth belongs to only one country","Because Earth has unlimited resources with no need for care","Because protecting Earth is unrelated to human wellbeing"],"answer":"Because caring for the Earth means caring for each other, as one shared family","explanation":"This ties the idea of Vasudhaiva Kutumbakam directly to environmental care."},
    {"type":"mcq","prompt":"What is the overall lesson of 'Earth: Our Shared Home'?","options":["Nature, culture and people are deeply connected across the globe, and we all share responsibility for our one planet","Every nation must remain completely isolated from others","Only India has valuable stories to share with the world","The Earth is divided into separate, unconnected worlds"],"answer":"Nature, culture and people are deeply connected across the globe, and we all share responsibility for our one planet","explanation":"This message brings together everything explored throughout the chapter."}
  ]}
]}
];

const WORLDS = (typeof atlasMergeHindiFamilyA==='function' && window.RE_HI) ? atlasMergeHindiFamilyA(WORLDS_EN, window.RE_HI) : WORLDS_EN;
const TOTAL_LEVELS = WORLDS.reduce((s,w)=>s+w.levels.length,0);
const AVATARS = ['🌗','🍁','🦜','🌍','🌸','🐦'];

/* ============================== STATE ============================== */
const STORE_KEY = 'rhythms-earth-quest-v1';
function defaultState(){ return {avatar:'🌍', name:'Prakritik', xp:0, coins:0, streak:1, progress:{}, onboarded:false}; }
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
function activeUnreviewedWorldRe(){
  for(const w of WORLDS){
    const started = w.levels.some(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0);
    const reviewed = typeof atlasModulePassed !== 'function' || atlasModulePassed('re', String(w.id));
    if(started && !reviewed) return w;
  }
  return null;
}
function isWorldUnlockedRe(i){
  const active = activeUnreviewedWorldRe();
  return !active || active.id===WORLDS[i].id;
}
function worldNeedsReviewRe(i){
  const active = activeUnreviewedWorldRe();
  return !!active && active.id!==WORLDS[i].id;
}
window.__openWorldReviewRe = ()=>{
  const active = activeUnreviewedWorldRe();
  if(!active){ render(); return; }
  atlasShowModuleReviewGate(app, {
    subject: 're',
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
  const mouth = sad ? `<path d="M42 70 Q 50 63, 58 70" stroke="#0c2a4a" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    : mood==='think' ? `<circle cx="50" cy="70" r="2" fill="#0c2a4a"/>`
    : `<path d="M42 68 Q 50 78, 58 68" stroke="#0c2a4a" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" style="filter:drop-shadow(0 8px 20px rgba(96,165,250,0.55))">
    <defs>
      <radialGradient id="mGlobe" cx="45%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#DBEAFE"/><stop offset="50%" stop-color="#60A5FA"/><stop offset="100%" stop-color="#1E3A8A"/>
      </radialGradient>
      <radialGradient id="mGlowRe" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#BFDBFE" stop-opacity="0.7"/><stop offset="100%" stop-color="#BFDBFE" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="55" r="42" fill="url(#mGlowRe)"/>
    <circle cx="50" cy="58" r="32" fill="url(#mGlobe)" stroke="#1E3A8A" stroke-width="2"/>
    <path d="M20 58 Q 50 46, 80 58" stroke="#34D399" stroke-width="4" fill="none" opacity="0.7"/>
    <path d="M28 44 Q 50 36, 70 46" stroke="#34D399" stroke-width="3" fill="none" opacity="0.6"/>
    <ellipse cx="40" cy="58" rx="4" ry="${sad?2:5}" fill="#0c2a4a"/>
    <ellipse cx="60" cy="58" rx="4" ry="${sad?2:5}" fill="#0c2a4a"/>
    <circle cx="41.5" cy="56.5" r="1.2" fill="white"/>
    <circle cx="61.5" cy="56.5" r="1.2" fill="white"/>
    ${mouth}
    <circle cx="34" cy="68" r="3" fill="#FBBF24" opacity="0.7"/>
    <circle cx="66" cy="68" r="3" fill="#FBBF24" opacity="0.7"/>
  </svg>`;
}

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
function nav(hash){ location.hash = hash; }
if(window.__reHashListener) window.removeEventListener('hashchange', window.__reHashListener);
window.__reHashListener = function(){ if(!location.hash.startsWith('#/re')) return; render(); };
window.addEventListener('hashchange', window.__reHashListener);
function render(){
  window.scrollTo(0,0);
  if(!STATE.onboarded){ renderOnboarding(); return; }
  const hash = location.hash.replace(/^#\/re\/?/,'');
  if(!hash){ renderHome(); return; }
  const [path, a, b] = hash.split('/');
  if(path==='world'){ renderWorld(a); return; }
  if(path==='lesson'){ renderLesson(+a, +b); return; }
  renderHome();
}
function Nav(){ return `<div class="topnav"></div>`; }

/* ---------------- ONBOARDING ---------------- */
function renderOnboarding(){
  let step=0, name='', avatar='🌍';
  function draw(){
    app.innerHTML = `${Nav()}<main>
      ${step===0 ? `
        <div class="glass-strong rounded-3xl shadow-glow" style="padding:32px;text-align:center">
          <div style="display:flex;justify-content:center;margin-bottom:16px">${mascotSvg('cheer',110)}</div>
          <div class="pillbox" style="background:none;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">One planet, endless rhythms</div>
          <h1 class="font-display" style="font-size:30px;margin:8px 0 0">Discover <span class="text-gradient-aurora">rhythms of the Earth.</span></h1>
          <p style="color:var(--muted);margin-top:12px;font-size:15px">From day and night to India's six seasons, and from travelling birds to Vasudhaiva Kutumbakam — four worlds explore our shared, living planet.</p>
          <button class="btn-primary" style="margin-top:22px" onclick="__obNext()">Begin the journey →</button>
        </div>` : `
        <div class="glass-strong rounded-3xl" style="padding:28px">
          <h2 class="font-display" style="font-size:24px;margin:0">Choose your Prakritik</h2>
          <p style="color:var(--muted);font-size:14px;margin:4px 0 0">Pick an avatar (you can change later).</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
            ${AVATARS.map(a=>`<button class="avatar-pick ${avatar===a?'sel':''}" onclick="__obAvatar('${a}')">${a}</button>`).join('')}
          </div>
          <label style="display:block;margin-top:20px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Your name</label>
          <input type="text" id="obname" placeholder="Prakritik" value="${name}" style="margin-top:6px" oninput="__obName(this.value)">
          <button class="btn-primary" style="margin-top:22px" onclick="__obDone()">Enter Rhythms of Earth Quest →</button>
        </div>`}
    </main>`;
  }
  window.__obNext = ()=>{ step=1; draw(); };
  window.__obAvatar = (a)=>{ avatar=a; draw(); document.getElementById('obname')?.focus(); };
  window.__obName = (v)=>{ name=v.slice(0,18); };
  window.__obDone = ()=>{ setProfile(name.trim()||'Prakritik', avatar); render(); };
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
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">Earth Explorer</div>
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
        <div style="font-size:11px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em">Dharti</div>
        <div style="font-size:14.5px;margin-top:2px">Welcome back, ${STATE.name}! Ready to explore Earth's rhythms and stories?</div>
      </div>
    </div>
    <h2 class="font-display" style="font-size:26px;margin:26px 0 12px"><span class="text-gradient-aurora">Adventure Map</span></h2>
    <div style="display:grid;gap:14px">
      ${WORLDS.map((w,i)=>{
        const completed = w.levels.filter(l=>(STATE.progress[progKey(w.id,l.id)]?.stars??0)>0).length;
        const unlocked = isWorldUnlockedRe(i);
        const needsReview = worldNeedsReviewRe(i);
        const pct = completed/w.levels.length*100;
        const href = unlocked ? '#/re/world/'+w.slug : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReviewRe();return false;"` : '';
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
      <span>Our Wondrous World</span>
    </div>
  </main>`;
  window.__resetAll = resetSave;
}

/* ---------------- WORLD (level select) ---------------- */
function renderWorld(slug){
  const w = WORLDS.find(w=>w.slug===slug);
  if(!w){ nav('#/re/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedRe(wIdx)){ renderHome(); return; }
  app.innerHTML = `${Nav()}<main>
    <a href="#/re/" style="font-size:13px;color:var(--muted)">← Adventure Map</a>
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
        return `<a class="lesson-row glass-strong ${unlocked?'':'locked'}" href="${unlocked?'#/re/lesson/'+w.id+'/'+lv.id:'#'}">
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
  if(!w||!lv){ nav('#/re/'); return; }
  const wIdx = WORLDS.findIndex(x=>x.id===w.id);
  if(!isWorldUnlockedRe(wIdx)){ renderHome(); return; }
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
        <a href="#/re/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
        <a href="#/re/world/${w.slug}" style="width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center" class="glass">✕</a>
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
          ${nextLevel?`<button class="btn-primary" onclick="location.hash='#/re/lesson/${w.id}/${nextLevel.id}'">Next lesson →</button>`:''}
          <a class="btn-outline glass" href="#/re/world/${w.slug}">Back to ${w.title}</a>
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
      if(typeof atlasRecordMistake === 'function') atlasRecordMistake('re', lv.title||'general', q ? {type:q.type, prompt:q.prompt} : null);
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
window.SubjectApps['re'] = { init: reInit };
