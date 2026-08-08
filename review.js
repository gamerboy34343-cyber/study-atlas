/* ============================== MODULE REVIEW GATE ==============================
   A required checkpoint shown between modules (worlds) in every game: pass a short
   AI-generated review quiz on everything in the module you just finished before the
   next one unlocks. Each game calls atlasShowModuleReviewGate(container, opts) into
   its own DOM and re-renders itself in the onPass/onExit callbacks. */

let atlasModuleReviewCache = {}; // { subject: { moduleId: passed } }

async function atlasLoadModuleReviews(subject){
  if(!atlasUser || atlasModuleReviewCache[subject]) return;
  atlasModuleReviewCache[subject] = {}; // set before await so concurrent callers don't double-fetch
  const { data, error } = await atlasSB.from('module_reviews')
    .select('module_id, passed')
    .eq('user_id', atlasUser.id)
    .eq('subject', subject);
  if(error){ console.error('could not load module reviews', error); return; }
  (data || []).forEach(r => { atlasModuleReviewCache[subject][r.module_id] = r.passed; });
}

function atlasModulePassed(subject, moduleId){
  return !!(atlasModuleReviewCache[subject] && atlasModuleReviewCache[subject][moduleId]);
}

async function atlasSaveModuleReview(subject, moduleId, passed, score){
  if(!atlasModuleReviewCache[subject]) atlasModuleReviewCache[subject] = {};
  atlasModuleReviewCache[subject][moduleId] = passed;
  if(!atlasUser) return;
  const { error } = await atlasSB.from('module_reviews').upsert({
    user_id: atlasUser.id, subject, module_id: moduleId, passed, best_score: score, updated_at: new Date().toISOString(),
  });
  if(error) console.error('could not save module review', error);
}

function reviewEscape(s){ const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

function atlasShowModuleReviewGate(container, opts){
  const { subject, moduleId, moduleTitle, lessonTitles, onPass, onExit } = opts;
  let quiz = null, idx = 0, score = 0, picked = null;

  function renderIntro(errorMsg){
    container.innerHTML = `
      <div class="review-gate">
        <div class="review-gate-icon">🔒</div>
        <h2 class="font-display" style="margin:10px 0 4px">Module Review</h2>
        <p style="color:var(--shell-muted);font-size:14px">Pass a short review of <strong>${reviewEscape(moduleTitle)}</strong> to unlock the next module.</p>
        ${errorMsg ? `<div class="auth-error" style="margin-top:14px">${reviewEscape(errorMsg)}</div>` : ''}
        <button class="auth-btn review-start-btn" style="margin-top:16px">Start Review</button>
        <button class="review-gate-exit review-exit-btn">← Back</button>
      </div>`;
    container.querySelector('.review-start-btn').addEventListener('click', startQuiz);
    container.querySelector('.review-exit-btn').addEventListener('click', () => onExit && onExit());
  }

  async function startQuiz(){
    container.innerHTML = `<div class="review-gate"><div style="padding:40px 0;text-align:center;color:var(--shell-muted)">Generating your review…</div></div>`;
    try{
      const res = await fetch('/.netlify/functions/module-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, moduleTitle, lessonTitles }),
      });
      if(!res.ok){
        const errText = await res.text().catch(() => '');
        throw new Error(`Server returned ${res.status}. ${errText.slice(0, 200)}`);
      }
      const data = await res.json();
      if(!Array.isArray(data.questions) || data.questions.length === 0) throw new Error('No questions were generated.');
      quiz = data.questions; idx = 0; score = 0; picked = null;
      drawQuestion();
    }catch(err){
      let msg = err.message || String(err);
      if(location.protocol === 'file:'){
        msg = 'Module Review needs the site deployed to Netlify with ANTHROPIC_API_KEY configured — it can\'t reach that from a local file.';
      }
      renderIntro(msg);
    }
  }

  function drawQuestion(){
    if(idx >= quiz.length){
      const passThreshold = Math.ceil(quiz.length * 0.6);
      const passed = score >= passThreshold;
      if(passed) atlasSaveModuleReview(subject, moduleId, true, score);
      container.innerHTML = `<div class="review-gate">
        <div class="review-gate-icon">${passed ? '🎉' : '📚'}</div>
        <h2 class="font-display" style="margin:10px 0 4px">${passed ? 'Module passed!' : 'Not quite yet'}</h2>
        <p style="color:var(--shell-muted);font-size:14px">${score}/${quiz.length} correct${passed ? '' : ` — need ${passThreshold}/${quiz.length} to pass`}</p>
        ${passed
          ? `<button class="auth-btn review-continue-btn" style="margin-top:16px">Continue →</button>`
          : `<button class="auth-btn review-retry-btn" style="margin-top:16px">Try again</button><button class="review-gate-exit review-exit-btn">← Back</button>`}
      </div>`;
      if(passed) container.querySelector('.review-continue-btn').addEventListener('click', () => onPass && onPass());
      else{
        container.querySelector('.review-retry-btn').addEventListener('click', startQuiz);
        container.querySelector('.review-exit-btn').addEventListener('click', () => onExit && onExit());
      }
      return;
    }

    const q = quiz[idx];
    container.innerHTML = `<div class="review-gate" style="text-align:left;max-width:520px">
      <div style="font-size:12px;color:var(--shell-muted);font-weight:700">Review · Question ${idx+1} of ${quiz.length}</div>
      <div style="font-size:16px;font-weight:700;margin:10px 0;color:var(--shell-text)">${reviewEscape(q.prompt)}</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${q.options.map((opt, i) => {
          let cls = 'review-opt';
          if(picked !== null){ if(i === q.answerIndex) cls += ' correct'; else if(i === picked) cls += ' wrong'; }
          return `<button class="${cls}" data-i="${i}" ${picked!==null?'disabled':''}>${reviewEscape(opt)}</button>`;
        }).join('')}
      </div>
      ${picked !== null ? `<div style="margin-top:10px;font-size:13px;color:var(--shell-muted)">${reviewEscape(q.explanation||'')}</div>
        <button class="auth-btn review-next-btn" style="margin-top:14px">${idx+1<quiz.length?'Next question →':'See results'}</button>` : ''}
    </div>`;

    if(picked === null){
      container.querySelectorAll('.review-opt').forEach(btn => {
        btn.addEventListener('click', () => {
          if(picked !== null) return;
          picked = +btn.dataset.i;
          if(picked === q.answerIndex) score++;
          drawQuestion();
        });
      });
    }else{
      container.querySelector('.review-next-btn').addEventListener('click', () => { idx++; picked = null; drawQuestion(); });
    }
  }

  renderIntro();
}
