/* ============================== SHOP ============================== */
const SHOP_AVATARS = [
  { id:'🦊', name:'Fox', price:0 },
  { id:'🧙', name:'Wizard', price:50 },
  { id:'🥷', name:'Ninja', price:80 },
  { id:'🧑‍🚀', name:'Astronaut', price:120 },
  { id:'🐉', name:'Dragon', price:150 },
  { id:'🦉', name:'Owl', price:80 },
  { id:'🦁', name:'Lion', price:100 },
  { id:'🐼', name:'Panda', price:100 },
];

const THEME_PALETTES = {
  default: { name:'Midnight', primary:'#8b7bf0', bg1:'#1b1533', bg2:'#08070f', price:0 },
  ocean:   { name:'Ocean',    primary:'#22a6d9', bg1:'#0f2a3a', bg2:'#050f16', price:100 },
  sunset:  { name:'Sunset',   primary:'#f0728b', bg1:'#3a1f2e', bg2:'#160a10', price:100 },
  forest:  { name:'Forest',   primary:'#4caf6d', bg1:'#16301f', bg2:'#070f0a', price:100 },
};

const SHOP_BOOSTS = [
  { id:'extra_hint', name:'Extra Hint', emoji:'💡', price:20, desc:'One extra hint in a level (currently usable in Bond Builder).' },
  { id:'skip_question', name:'Skip Token', emoji:'⏭️', price:30, desc:'Skip a tough question without breaking your streak.' },
  { id:'streak_freeze', name:'Streak Freeze', emoji:'🧊', price:50, desc:'Protects your streak for one missed day.' },
];

const GAME_SKINS = {
  bb: { item:'skin_bb', name:'Emerald Lab',     emoji:'🧪', price:150, vars:{'--purple':'#34d399','--cyan':'#22d3ee'} },
  cq: { item:'skin_cq', name:'Imperial Crimson', emoji:'🏰', price:150, vars:{'--primary':'#e0555f','--accent':'#fbbf24'} },
  mr: { item:'skin_mr', name:'Saffron Swarajya', emoji:'🚩', price:150, vars:{'--primary':'#e0555f','--accent':'#fb923c'} },
  co: { item:'skin_co', name:'East India Navy', emoji:'⛵', price:150, vars:{'--primary':'#4a7fb5','--accent':'#fbbf24'} },
  gq: { item:'skin_gq', name:'Autumn Grove',     emoji:'🌱', price:150, vars:{'--primary':'#e08a3d','--accent':'#fbbf24'} },
  tq: { item:'skin_tq', name:'Rose Quartz',      emoji:'📖', price:150, vars:{'--primary':'#ec6f9c'} },
  no: { item:'skin_no', name:'Emerald Odyssey',  emoji:'🔢', price:150, vars:{'--primary':'#34d399'} },
  sc: { item:'skin_sc', name:'Ozone Investigator', emoji:'🔬', price:150, vars:{'--primary':'#0ea5e9','--gold':'#22c55e'} },
  hi: { item:'skin_hi', name:'Kesariya Kalam', emoji:'📖', price:150, vars:{'--primary':'#d97706','--gold':'#f59e0b'} },
  cv: { item:'skin_cv', name:'Republic Gold',    emoji:'🗳️', price:150, vars:{'--primary':'#fbbf24','--accent':'#3b82f6'} },
  tr: { item:'skin_tr', name:'Merchant Emerald', emoji:'💰', price:150, vars:{'--primary':'#22c55e','--accent':'#fbbf24'} },
};

let atlasInventory = {}; // { item_id: quantity }

async function atlasLoadInventory(){
  if(!atlasUser) return;
  const { data, error } = await atlasSB.from('inventory').select('item_id, quantity').eq('user_id', atlasUser.id);
  if(error){ console.error('could not load inventory', error); return; }
  atlasInventory = {};
  (data || []).forEach(row => { atlasInventory[row.item_id] = row.quantity; });
}

function atlasOwns(itemId){ return !!atlasInventory[itemId]; }

function atlasApplyTheme(themeId){
  const t = THEME_PALETTES[themeId] || THEME_PALETTES.default;
  document.documentElement.style.setProperty('--shell-primary', t.primary);
  document.documentElement.style.setProperty('--shell-bg1', t.bg1);
  document.documentElement.style.setProperty('--shell-bg2', t.bg2);
}

async function atlasBuyItem(itemId, price){
  if(!atlasProfile) return;
  if(atlasProfile.coins < price){ alert("You don't have enough coins for that yet."); return; }
  const { error } = await atlasSB.from('inventory')
    .upsert({ user_id: atlasUser.id, item_id: itemId, quantity: (atlasInventory[itemId]||0) + 1, updated_at: new Date().toISOString() });
  if(error){ alert('Purchase failed: ' + error.message); return; }
  atlasInventory[itemId] = (atlasInventory[itemId]||0) + 1;
  await atlasAddCoins(-price);
  renderShop();
}

async function atlasEquipAvatar(emoji){
  const item = SHOP_AVATARS.find(a => a.id === emoji);
  if(item && item.price > 0 && !atlasOwns(emoji)) return;
  atlasProfile.avatar = emoji;
  await atlasPatchProfile({ avatar: emoji });
  renderNavProfile();
  renderShop();
}

async function atlasEquipTheme(themeId){
  const t = THEME_PALETTES[themeId];
  if(t.price > 0 && !atlasOwns('theme_'+themeId)) return;
  atlasProfile.equipped_theme = themeId;
  await atlasPatchProfile({ equipped_theme: themeId });
  atlasApplyTheme(themeId);
  renderShop();
}

async function atlasUseBoost(itemId){
  const qty = atlasInventory[itemId] || 0;
  if(qty <= 0) return;
  const { error } = await atlasSB.from('inventory').update({ quantity: qty - 1 }).eq('user_id', atlasUser.id).eq('item_id', itemId);
  if(error){ alert('Could not use that item: ' + error.message); return; }
  atlasInventory[itemId] = qty - 1;
  renderShop();
}

function shopEscape(s){ const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

function shopItemCard({ label, sub, emoji, price, owned, equipped, onBuy, onEquip }){
  let action;
  if(price === 0 || owned){
    action = equipped
      ? `<button class="shop-btn equipped" disabled>Equipped</button>`
      : `<button class="shop-btn" onclick="${onEquip}">Equip</button>`;
  }else{
    action = `<button class="shop-btn buy" onclick="${onBuy}">🪙 ${price}</button>`;
  }
  return `<div class="shop-card ${equipped?'equipped-card':''}">
    <div class="shop-card-emoji">${emoji}</div>
    <div class="shop-card-name">${shopEscape(label)}</div>
    ${sub ? `<div class="shop-card-sub">${shopEscape(sub)}</div>` : ''}
    ${action}
  </div>`;
}

function renderShop(){
  if(!atlasProfile){ content.innerHTML = `<div class="lb-wrap"><div style="text-align:center;color:var(--shell-muted);padding:40px 0">Loading…</div></div>`; return; }

  const avatarCards = SHOP_AVATARS.map(a => shopItemCard({
    label: a.name, emoji: a.id, price: a.price,
    owned: a.price===0 || atlasOwns(a.id), equipped: atlasProfile.avatar === a.id,
    onBuy: `atlasBuyItem('${a.id}', ${a.price})`, onEquip: `atlasEquipAvatar('${a.id}')`,
  })).join('');

  const themeCards = Object.entries(THEME_PALETTES).map(([id, t]) => shopItemCard({
    label: t.name, emoji: '🎨', price: t.price,
    owned: t.price===0 || atlasOwns('theme_'+id), equipped: (atlasProfile.equipped_theme||'default') === id,
    onBuy: `atlasBuyItem('theme_${id}', ${t.price}).then(()=>atlasEquipTheme('${id}'))`, onEquip: `atlasEquipTheme('${id}')`,
  })).join('');

  const boostCards = SHOP_BOOSTS.map(b => {
    const owned = atlasInventory[b.id] || 0;
    return `<div class="shop-card">
      <div class="shop-card-emoji">${b.emoji}</div>
      <div class="shop-card-name">${shopEscape(b.name)}</div>
      <div class="shop-card-sub">${shopEscape(b.desc)}</div>
      <div class="shop-owned">Owned: ${owned}</div>
      <div class="shop-card-row">
        <button class="shop-btn buy" onclick="atlasBuyItem('${b.id}', ${b.price})">🪙 ${b.price}</button>
        ${owned > 0 ? `<button class="shop-btn" onclick="atlasUseBoost('${b.id}')">Use</button>` : ''}
      </div>
    </div>`;
  }).join('');

  const skinCards = Object.entries(GAME_SKINS).map(([prefix, s]) => shopItemCard({
    label: s.name, sub: SUBJECTS_INFO.find(x=>x.prefix===prefix)?.name, emoji: s.emoji, price: s.price,
    owned: atlasOwns(s.item), equipped: atlasOwns(s.item),
    onBuy: `atlasBuyItem('${s.item}', ${s.price})`, onEquip: `void 0`,
  })).join('');

  content.innerHTML = `<div class="lb-wrap" style="max-width:900px">
    <div class="home-hero" style="margin-bottom:16px">
      <div class="badge" style="background:linear-gradient(135deg,#fbbf24,#f59e0b)">🛍️</div>
      <h1 class="font-display" style="font-size:28px">Shop</h1>
      <p>Spend coins earned across every game on avatars, themes, boosts, and game skins.</p>
      <p style="color:var(--shell-gold, #fbbf24); font-weight:800; margin-top:6px;">🪙 ${atlasProfile.coins || 0} coins</p>
    </div>

    <h3 class="shop-section-title">Avatars</h3>
    <div class="shop-grid">${avatarCards}</div>

    <h3 class="shop-section-title">Nav Themes</h3>
    <div class="shop-grid">${themeCards}</div>

    <h3 class="shop-section-title">Boosts</h3>
    <div class="shop-grid">${boostCards}</div>

    <h3 class="shop-section-title">Game Skins</h3>
    <p style="color:var(--shell-muted);font-size:13px;margin-top:-8px">Owning a skin applies it automatically the next time you open that game.</p>
    <div class="shop-grid">${skinCards}</div>
  </div>`;
}
