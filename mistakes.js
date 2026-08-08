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
