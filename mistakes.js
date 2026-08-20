/* ============================== MISTAKE TRACKING ==============================
   Each game reports wrong answers here so the home page can compile an
   adaptive practice session across all five subjects. Best-effort: a failed
   write here should never interrupt gameplay, so every call is fire-and-forget. */

function atlasRecordMistake(subject, topic, question){
  if(!atlasUser) return;
  atlasSB.from('mistakes').insert({
    user_id: atlasUser.id,
    subject,
    topic: String(topic || 'general'),
    question: question || null,
  }).then(({error}) => { if(error) console.error('could not record mistake', error); });
}

/* Called once a weak spot has been answered correctly in an Adaptive Practice
   round, so it stops being logged as an outstanding mistake and stops
   resurfacing in future practice sessions. */
function atlasResolveMistake(subject, topic){
  if(!atlasUser) return;
  atlasSB.from('mistakes').delete()
    .eq('user_id', atlasUser.id)
    .eq('subject', subject)
    .eq('topic', String(topic || 'general'))
    .then(({error}) => { if(error) console.error('could not resolve mistake', error); });
}
