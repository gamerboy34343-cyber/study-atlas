/* ============================== LEADERBOARD ============================== */
const LB_MEDALS = ['🥇','🥈','🥉'];

async function renderLeaderboard(){
  content.innerHTML = `<div class="lb-wrap">
    <div class="home-hero" style="margin-bottom:16px">
      <div class="badge" style="background:linear-gradient(135deg,#fbbf24,#f59e0b)">🏆</div>
      <h1 class="font-display" style="font-size:28px">Leaderboard</h1>
      <p>Ranked by total XP across every subject. Keep learning to climb.</p>
    </div>
    <div id="lb-body"><div style="text-align:center;color:var(--shell-muted);padding:40px 0">Loading…</div></div>
  </div>`;

  try{
    const { data: rows, error } = await atlasSB.from('profiles')
      .select('id, display_name, avatar, xp, coins, streak')
      .order('xp', { ascending: false })
      .limit(50);
    if(error) throw error;

    let myRank = null;
    if(atlasProfile){
      const idx = rows.findIndex(r => r.id === atlasUser.id);
      if(idx >= 0){ myRank = idx + 1; }
      else{
        const { count } = await atlasSB.from('profiles')
          .select('id', { count: 'exact', head: true })
          .gt('xp', atlasProfile.xp);
        myRank = (count || 0) + 1;
      }
    }

    const body = document.getElementById('lb-body');
    if(!body) return; // user navigated away while this was loading

    if(rows.length === 0){
      body.innerHTML = `<div style="text-align:center;color:var(--shell-muted);padding:40px 0">No learners yet — be the first to earn XP!</div>`;
      return;
    }

    body.innerHTML = `
      <div class="lb-list">
        ${rows.map((r, i) => {
          const rank = i + 1;
          const isMe = atlasUser && r.id === atlasUser.id;
          return `<div class="lb-row ${isMe ? 'me' : ''}">
            <div class="lb-rank">${LB_MEDALS[i] || '#'+rank}</div>
            <div class="lb-avatar">${lbEscape(r.avatar || '🦊')}</div>
            <div class="lb-name">${lbEscape(r.display_name || 'Learner')}${isMe ? ' <span class="lb-you">(you)</span>' : ''}</div>
            <div class="lb-stat">✨ ${r.xp || 0} XP</div>
            <div class="lb-stat">🔥 ${r.streak || 0}</div>
          </div>`;
        }).join('')}
      </div>
      ${myRank && myRank > rows.length ? `
        <div class="lb-me-footer">
          Your rank: <strong>#${myRank}</strong> · ✨ ${atlasProfile.xp || 0} XP
        </div>` : ''}
    `;
  }catch(err){
    const body = document.getElementById('lb-body');
    if(body) body.innerHTML = `<div style="text-align:center;color:#fda4af;padding:40px 0">Could not load the leaderboard: ${lbEscape(err.message || String(err))}</div>`;
  }
}

function lbEscape(s){ const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
