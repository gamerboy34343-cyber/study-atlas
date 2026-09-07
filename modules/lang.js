/* Hindi-medium language support: merges an optional Hindi lesson-content
   overlay onto the English curriculum data, field by field, so partial
   translation coverage never breaks the app — anything untranslated simply
   falls back to English. UI chrome (buttons, nav) is never translated here;
   only lesson content: title, story, teach cards, and question text. */

window.ATLAS_LANG = localStorage.getItem('atlas-lang') || 'en';

function setLang(lang){
  localStorage.setItem('atlas-lang', lang);
  location.reload();
}

function atlasMergeHindiLesson(en, hi){
  if(!hi) return en;
  const merged = Object.assign({}, en);
  if(hi.title) merged.title = hi.title;
  if(hi.story) merged.story = hi.story;
  if(Array.isArray(hi.teach) && Array.isArray(en.teach)){
    merged.teach = en.teach.map((t,i)=>{
      const ht = hi.teach[i];
      if(!ht) return t;
      return Object.assign({}, t, ht.title?{title:ht.title}:{}, ht.body?{body:ht.body}:{});
    });
  }
  if(Array.isArray(hi.questions) && Array.isArray(en.questions)){
    merged.questions = en.questions.map((q,i)=>{
      const hq = hi.questions[i];
      if(!hq) return q;
      const mq = Object.assign({}, q);
      if(hq.prompt) mq.prompt = hq.prompt;
      if(Array.isArray(hq.options)) mq.options = hq.options;
      if(hq.explain) mq.explain = hq.explain;
      // 'order' and 'match' question kinds carry their answer as translatable
      // text (it must match the translated items exactly), unlike mcq/numeric
      // answers which are indices/numbers and are never translated.
      if(Array.isArray(hq.items)) mq.items = hq.items;
      if((q.kind==='order' || q.kind==='match') && (Array.isArray(hq.answer) || typeof hq.answer==='object')) mq.answer = hq.answer;
      return mq;
    });
  }
  if(hi.boss) merged.boss = Object.assign({}, en.boss, hi.boss);
  return merged;
}

function atlasMergeHindiCurriculum(enArr, hiArr){
  if(!Array.isArray(enArr)) return enArr;
  if(!Array.isArray(hiArr) || window.ATLAS_LANG!=='hi') return enArr;
  const hiByWorld = {};
  hiArr.forEach(w=>{ if(w && w.id) hiByWorld[w.id]=w; });
  return enArr.map(w=>{
    const hw = hiByWorld[w.id];
    if(!hw) return w;
    const hlByLesson = {};
    (hw.lessons||[]).forEach(l=>{ if(l && l.id) hlByLesson[l.id]=l; });
    return Object.assign({}, w, {
      lessons: w.lessons.map(l=>{
        const hl = hlByLesson[l.id];
        return hl ? atlasMergeHindiLesson(l, hl) : l;
      })
    });
  });
}

/* ---- Social Science/EVS "quest" engines: Family A (WORLDS -> levels -> questions) ----
   Unlike Math/Science's index-based mcq answers, these engines check the picked option
   STRING against `answer` directly (o===q.answer), so a translated `answer` must exactly
   match one of the translated `options`. */
function atlasMergeHindiFamilyA(worldsEn, hiData){
  if(!Array.isArray(worldsEn)) return worldsEn;
  if(!hiData || window.ATLAS_LANG!=='hi' || !Array.isArray(hiData.worlds)) return worldsEn;
  const hiByWorld = {};
  hiData.worlds.forEach(w=>{ if(w && w.id!=null) hiByWorld[w.id]=w; });
  return worldsEn.map(w=>{
    const hw = hiByWorld[w.id];
    if(!hw) return w;
    const hlByLevel = {};
    (hw.levels||[]).forEach(l=>{ if(l && l.id!=null) hlByLevel[l.id]=l; });
    return Object.assign({}, w, {
      levels: w.levels.map(l=>{
        const hl = hlByLevel[l.id];
        if(!hl) return l;
        const merged = Object.assign({}, l);
        if(hl.title) merged.title = hl.title;
        if(hl.intro) merged.intro = hl.intro;
        if(hl.bossName) merged.bossName = hl.bossName;
        if(Array.isArray(hl.questions) && Array.isArray(l.questions)){
          merged.questions = l.questions.map((q,i)=>{
            const hq = hl.questions[i];
            if(!hq) return q;
            const mq = Object.assign({}, q);
            if(hq.prompt) mq.prompt = hq.prompt;
            if(Array.isArray(hq.options)) mq.options = hq.options;
            if(hq.explanation) mq.explanation = hq.explanation;
            if(hq.answer!==undefined) mq.answer = hq.answer;
            return mq;
          });
        }
        return merged;
      })
    });
  });
}

/* ---- History engines: Family B (CHAPTERS + separate QUESTIONS array) ----
   Here `answer` is a numeric option index (like Math/Science), so it's never translated. */
function atlasMergeHindiFamilyBChapters(chaptersEn, hiData){
  if(!Array.isArray(chaptersEn)) return chaptersEn;
  if(!hiData || window.ATLAS_LANG!=='hi' || !Array.isArray(hiData.chapters)) return chaptersEn;
  const hiById = {};
  hiData.chapters.forEach(c=>{ if(c && c.id) hiById[c.id]=c; });
  return chaptersEn.map(c=>{
    const hc = hiById[c.id];
    if(!hc) return c;
    const merged = Object.assign({}, c);
    if(hc.title) merged.title = hc.title;
    if(hc.subtitle) merged.subtitle = hc.subtitle;
    if(hc.intro) merged.intro = hc.intro;
    if(hc.boss) merged.boss = Object.assign({}, c.boss, hc.boss);
    return merged;
  });
}
function atlasMergeHindiFamilyBQuestions(questionsEn, hiData){
  if(!Array.isArray(questionsEn)) return questionsEn;
  if(!hiData || window.ATLAS_LANG!=='hi' || !Array.isArray(hiData.questions)) return questionsEn;
  const hiById = {};
  hiData.questions.forEach(q=>{ if(q && q.id!=null) hiById[q.id]=q; });
  return questionsEn.map(q=>{
    const hq = hiById[q.id];
    if(!hq) return q;
    const merged = Object.assign({}, q);
    if(hq.q) merged.q = hq.q;
    if(Array.isArray(hq.options)) merged.options = hq.options;
    if(hq.explain) merged.explain = hq.explain;
    return merged;
  });
}
