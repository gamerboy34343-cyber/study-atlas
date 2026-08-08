/* ============================== ADAPTIVE PRACTICE ============================== */
let apQuestions = [];
let apIdx = 0;
let apScore = 0;
let apPicked = null;

async function atlasFetchMistakes(limit){
  if(!atlasUser) return [];
  const { data, error } = await atlasSB.from('mistakes')
    .select('subject, topic, question, created_at')
    .eq('user_id', atlasUser.id)
    .order('created_at', { ascending: false })
    .limit(limit || 50);
  if(error){ console.error('could not load mistakes', error); return []; }
  return data || [];
}

function apGroupMistakes(mistakes){
  const map = {};
  mistakes.forEach(m => {
    const key = m.subject + '::' + m.topic;
    if(!map[key]) map[key] = { subject: m.subject, topic: m.topic, count: 0 };
    map[key].count++;
  });
  return Object.values(map).sort((a, b) => b.count - a.count);
}

function apSubjectMeta(prefix){
  return (typeof SUBJECTS_INFO !== 'undefined' && SUBJECTS_INFO.find(s => s.prefix === prefix)) || { emoji: '📚', name: prefix };
}

function apEscape(s){ const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

async function renderAdaptivePractice(){
  content.innerHTML = `<div class="lb-wrap" style="max-width:760px">
    <div class="home-hero" style="margin-bottom:16px">
      <div class="badge" style="background:linear-gradient(135deg,#22d3ee,#8b7bf0)">🎯</div>
      <h1 class="font-display" style="font-size:28px">Adaptive Practice</h1>
      <p>Compiled from everything you've gotten wrong, across every subject.</p>
    </div>
    <div id="ap-body"><div style="text-align:center;color:var(--shell-muted);padding:40px 0">Loading…</div></div>
  </div>`;

  const mistakes = await atlasFetchMistakes(50);
  const groups = apGroupMistakes(mistakes);
  const body = document.getElementById('ap-body');
  if(!body) return;

  if(groups.length === 0){
    body.innerHTML = `<div style="text-align:center;color:var(--shell-muted);padding:40px 0">
      No weak spots on record yet — play a few lessons and missed questions will show up here for focused practice.
    </div>`;
    return;
  }

  body.innerHTML = `
    <h3 class="shop-section-title" style="margin-top:0">Your weak spots</h3>
    <div class="ap-weak-list">
      ${groups.map(g => {
        const meta = apSubjectMeta(g.subject);
        return `<div class="ap-weak-row">
          <span class="ap-weak-emoji">${meta.emoji}</span>
          <span class="ap-weak-topic">${apEscape(g.topic)}</span>
          <span class="ap-weak-sub">${apEscape(meta.name)}</span>
          <span class="ap-weak-count">${g.count}×</span>
        </div>`;
      }).join('')}
    </div>
    <button class="auth-btn" style="margin-top:20px" id="ap-generate-btn" onclick="atlasGenerateAdaptiveQuiz()">✨ Generate practice quiz</button>
    <div id="ap-quiz-area" style="margin-top:20px"></div>
  `;
}

async function atlasGenerateAdaptiveQuiz(){
  const btn = document.getElementById('ap-generate-btn');
  const area = document.getElementById('ap-quiz-area');
  if(btn){ btn.disabled = true; btn.textContent = 'Thinking…'; }
  area.innerHTML = '';

  try{
    const mistakes = await atlasFetchMistakes(50);
    const res = await fetch('/.netlify/functions/adaptive-practice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mistakes: mistakes.map(m => ({ subject: m.subject, topic: m.topic })) }),
    });
    if(!res.ok){
      const errText = await res.text().catch(() => '');
      throw new Error(`Server returned ${res.status}. ${errText.slice(0, 200)}`);
    }
    const data = await res.json();
    if(!Array.isArray(data.questions) || data.questions.length === 0) throw new Error('No questions were generated.');
    apQuestions = data.questions;
    apIdx = 0; apScore = 0; apPicked = null;
    if(btn) btn.style.display = 'none';
    apDrawQuestion();
  }catch(err){
    let msg = err.message || String(err);
    if(location.protocol === 'file:'){
      msg = 'The adaptive practice AI needs the site deployed to Netlify with ANTHROPIC_API_KEY configured — it can\'t reach that from a local file.';
    }
    area.innerHTML = `<div style="text-align:center;color:#fda4af;padding:20px 0">⚠️ ${apEscape(msg)}</div>`;
  }finally{
    if(btn){ btn.disabled = false; btn.textContent = '✨ Generate practice quiz'; }
  }
}

function apDrawQuestion(){
  const area = document.getElementById('ap-quiz-area');
  if(!area) return;

  if(apIdx >= apQuestions.length){
    const pct = Math.round((apScore / apQuestions.length) * 100);
    const xpEarned = apScore * 10, coinsEarned = apScore * 3;
    if(xpEarned && typeof atlasAddXp === 'function') atlasAddXp(xpEarned);
    if(coinsEarned && typeof atlasAddCoins === 'function') atlasAddCoins(coinsEarned);
    area.innerHTML = `<div class="lb-me-footer" style="margin-top:0">
      <div style="font-size:20px;font-weight:800;margin-bottom:6px">🎉 ${apScore}/${apQuestions.length} correct (${pct}%)</div>
      <div>✨ +${xpEarned} XP · 🪙 +${coinsEarned} coins</div>
      <button class="auth-btn" style="margin-top:14px;max-width:220px" onclick="renderAdaptivePractice()">Back to weak spots</button>
    </div>`;
    return;
  }

  const q = apQuestions[apIdx];
  const meta = apSubjectMeta(q.subject);
  area.innerHTML = `
    <div class="shop-card" style="text-align:left;align-items:stretch">
      <div style="font-size:12px;color:var(--shell-muted);font-weight:700">${meta.emoji} ${apEscape(meta.name)} · Question ${apIdx+1} of ${apQuestions.length}</div>
      <div style="font-size:16px;font-weight:700;margin:10px 0">${apEscape(q.prompt)}</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${(q.options||[]).map((opt, i) => {
          let cls = 'shop-btn';
          if(apPicked !== null){
            if(i === q.answerIndex) cls += ' equipped';
            else if(i === apPicked) cls += ' wrong';
          }
          return `<button class="${cls}" style="text-align:left" ${apPicked!==null?'disabled':''} onclick="apAnswer(${i})">${apEscape(opt)}</button>`;
        }).join('')}
      </div>
      ${apPicked !== null ? `<div style="margin-top:10px;font-size:13px;color:var(--shell-muted)">${apEscape(q.explanation||'')}</div>
        <button class="auth-btn" style="margin-top:14px" onclick="apNext()">${apIdx+1<apQuestions.length?'Next question →':'See results'}</button>` : ''}
    </div>`;
}

function apAnswer(i){
  if(apPicked !== null) return;
  apPicked = i;
  if(i === apQuestions[apIdx].answerIndex) apScore++;
  apDrawQuestion();
}

function apNext(){
  apIdx++;
  apPicked = null;
  apDrawQuestion();
}
