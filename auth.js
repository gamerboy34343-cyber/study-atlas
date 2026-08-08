/* ============================== AUTH GATE ==============================
   Accounts are required to use The Study Atlas. This file blocks the shell
   nav + content behind a login/sign-up screen until a Supabase session
   exists, then hands control back to the router in index.html via
   atlasStartApp(). Nothing here reads or stores real credentials itself —
   Supabase's client library owns the password field and the session token. */

let atlasUser = null;   // the current Supabase auth user, or null
let atlasMode = 'login'; // 'login' | 'signup'

function atlasGate(){ return document.getElementById('auth-gate'); }

function renderAuthGate(errorMsg, noticeMsg){
  const isSignup = atlasMode === 'signup';
  atlasGate().innerHTML = `
    <div class="auth-gate">
      <div class="auth-card">
        <div class="badge">🗺</div>
        <h1 class="font-display">${isSignup ? 'Create your account' : 'Welcome back'}</h1>
        <p class="sub">${isSignup ? 'One account, one XP pool, all six subjects.' : 'Log in to continue your streak.'}</p>
        ${errorMsg ? `<div class="auth-error">${atlasEscape(errorMsg)}</div>` : ''}
        ${noticeMsg ? `<div class="auth-notice">${atlasEscape(noticeMsg)}</div>` : ''}
        <form id="auth-form">
          ${isSignup ? `
          <div class="auth-field">
            <label>Display name</label>
            <input class="auth-input" id="auth-name" type="text" placeholder="What should we call you?" maxlength="30" required>
          </div>` : ''}
          <div class="auth-field">
            <label>Email</label>
            <input class="auth-input" id="auth-email" type="email" placeholder="you@example.com" required>
          </div>
          <div class="auth-field">
            <label>Password</label>
            <input class="auth-input" id="auth-password" type="password" placeholder="${isSignup ? 'At least 6 characters' : 'Your password'}" minlength="6" required>
          </div>
          <button class="auth-btn" id="auth-submit" type="submit">${isSignup ? 'Sign up' : 'Log in'}</button>
        </form>
        <div class="auth-switch">
          ${isSignup ? `Already have an account? <button onclick="atlasSwitchMode('login')">Log in</button>`
                     : `New here? <button onclick="atlasSwitchMode('signup')">Create an account</button>`}
        </div>
      </div>
    </div>`;
  document.getElementById('auth-form').addEventListener('submit', atlasHandleSubmit);
}

function atlasEscape(s){ const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

function atlasSwitchMode(mode){
  atlasMode = mode;
  renderAuthGate();
}

async function atlasHandleSubmit(e){
  e.preventDefault();
  const btn = document.getElementById('auth-submit');
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  btn.disabled = true;
  btn.textContent = '…';
  try{
    if(atlasMode === 'signup'){
      const displayName = document.getElementById('auth-name').value.trim() || 'Learner';
      const { data, error } = await atlasSB.auth.signUp({
        email, password,
        options: { data: { display_name: displayName } }
      });
      if(error) throw error;
      if(!data.session){
        atlasMode = 'login';
        renderAuthGate(null, 'Account created! Check your email to confirm it, then log in below.');
        return;
      }
      // email confirmation is off on this project — session exists immediately
      atlasUser = data.user;
      atlasStartApp();
    }else{
      const { data, error } = await atlasSB.auth.signInWithPassword({ email, password });
      if(error) throw error;
      atlasUser = data.user;
      atlasStartApp();
    }
  }catch(err){
    renderAuthGate(err.message || 'Something went wrong. Try again.');
  }
}

async function atlasLogout(){
  try{ await atlasSB.auth.signOut(); }catch(e){ /* still clear local state below even if this fails */ }
  atlasUser = null;
  document.getElementById('shell-nav').style.display = 'none';
  document.getElementById('content').style.display = 'none';
  atlasGate().style.display = '';
  atlasMode = 'login';
  renderAuthGate();
}

function renderNavProfile(){
  const el = document.getElementById('nav-profile');
  if(!el || !atlasUser) return;
  const name = (atlasUser.user_metadata && atlasUser.user_metadata.display_name) || atlasUser.email;
  const p = typeof atlasProfile !== 'undefined' ? atlasProfile : null;
  el.innerHTML = `
    <span class="nav-stats" id="nav-stats">${p ? `
      <span>${p.avatar || '🦊'} Lv ${atlasLevel()}</span>
      <span>✨ ${p.xp || 0} XP</span>
      <span>🪙 ${p.coins || 0}</span>
      <span>🔥 ${p.streak || 0}</span>
    ` : ''}</span>
    <span style="font-size:12.5px;color:var(--shell-muted);white-space:nowrap;max-width:120px;overflow:hidden;text-overflow:ellipsis">${atlasEscape(name)}</span>
    <button class="nav-logout" onclick="atlasLogout()">Log out</button>`;
}

async function atlasInit(){
  const { data: { session } } = await atlasSB.auth.getSession();
  atlasSB.auth.onAuthStateChange((event, sess) => {
    if(event === 'SIGNED_OUT'){
      atlasUser = null;
    }
  });
  if(session){
    atlasUser = session.user;
    atlasStartApp();
  }else{
    atlasGate().style.display = '';
    renderAuthGate();
  }
}
