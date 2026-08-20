function tqInit(){

/* ============================== DATA ============================== */
const COLOR_MAP = {
  'sky-400':'#38bdf8','sky-500':'#0ea5e9','blue-500':'#3b82f6','blue-600':'#2563eb',
  'indigo-500':'#6366f1','indigo-600':'#4f46e5','emerald-400':'#34d399','emerald-500':'#10b981',
  'teal-400':'#2dd4bf','teal-500':'#14b8a6','cyan-400':'#22d3ee','cyan-600':'#0891b2',
  'rose-400':'#fb7185','rose-500':'#f43f5e','pink-500':'#ec4899',
  'fuchsia-400':'#e879f9','fuchsia-500':'#d946ef','fuchsia-600':'#c026d3',
  'violet-500':'#8b5cf6','purple-500':'#a855f7','amber-400':'#fbbf24','amber-500':'#f59e0b',
  'orange-500':'#f97316','red-500':'#ef4444','yellow-400':'#facc15','yellow-500':'#eab308',
  'green-600':'#16a34a','slate-300':'#cbd5e1','slate-400':'#94a3b8','slate-700':'#334155',
};
function grad(str){
  const stops = str.split(' ').map(tok=>{
    const m = tok.match(/^(from|via|to)-(.+)$/);
    if(!m) return null;
    return COLOR_MAP[m[2]] || '#8b7bf0';
  }).filter(Boolean);
  return `linear-gradient(135deg, ${stops.join(', ')})`;
}

const WORLDS_BASE = [{"id":"w1","index":1,"title":"Introduction to Tenses","tagline":"What tenses are and why they matter","gradient":"from-sky-400 via-blue-500 to-indigo-600","icon":"✨","lessons":[{"id":"w1-l1","title":"What are Tenses?","subtitle":"The idea behind every verb","steps":[{"kind":"intro","title":"What is a Tense?","body":"A tense is a form of a verb that tells us when an action takes place. Tenses help us understand whether an action happened in the past, is happening in the present, or will happen in the future."},{"kind":"list","title":"The three main tenses","items":["Present Tense","Past Tense","Future Tense"]},{"kind":"timeline","position":"past","caption":"Past — actions that already happened"},{"kind":"timeline","position":"present","caption":"Present — actions happening now or generally true"},{"kind":"timeline","position":"future","caption":"Future — actions that will happen"},{"kind":"note","body":"Each of the three main tenses is divided into four forms, making a total of 12 tenses."},{"kind":"summary","points":["A tense shows when an action takes place.","There are 3 main tenses: Present, Past and Future.","Each tense has 4 forms — 12 tenses in total."]}]},{"id":"w1-l2","title":"The 12 Tenses at a Glance","subtitle":"A map of the whole journey","steps":[{"kind":"intro","title":"The 12 English Tenses","body":"Every tense in English fits into one of three time zones and one of four forms: Simple, Continuous, Perfect, and Perfect Continuous."},{"kind":"table","columns":["Time","Simple","Continuous","Perfect","Perfect Continuous"],"rows":[["Present","Simple Present","Present Continuous","Present Perfect","Present Perfect Continuous"],["Past","Simple Past","Past Continuous","Past Perfect","Past Perfect Continuous"],["Future","Simple Future","Future Continuous","Future Perfect","Future Perfect Continuous"]]},{"kind":"summary","points":["3 time zones × 4 forms = 12 tenses.","You'll meet each one in the worlds ahead."]}]}]},{"id":"w2","index":2,"title":"Present Tense","tagline":"Actions of the here and now","gradient":"from-emerald-400 via-teal-500 to-cyan-600","icon":"☀️","lessons":[{"id":"w2-l1","title":"Simple Present Tense","subtitle":"Habits, facts and universal truths","steps":[{"kind":"intro","title":"Simple Present Tense","body":"The Simple Present is used to describe actions that happen now, occur regularly, or are generally true."},{"kind":"uses","items":["Daily routines","Habits","Facts","Universal truths","Fixed schedules"]},{"kind":"structure","formula":"Subject + Base Verb (V1) + s/es","parts":[{"label":"Subject","value":"She","color":"from-sky-400 to-blue-500"},{"label":"V1 + s/es","value":"studies","color":"from-amber-400 to-yellow-500"},{"label":"Rest","value":"hard.","color":"from-slate-300 to-slate-400"}]},{"kind":"timeline","position":"present","caption":"Happens regularly or is always true"},{"kind":"examples","items":["I play football every evening.","She studies hard.","The Earth revolves around the Sun.","Water boils at 100°C."]},{"kind":"summary","points":["Used for habits, routines, facts and universal truths.","Add s/es to the verb for third person singular."]}]},{"id":"w2-l2","title":"Present Continuous Tense","subtitle":"Actions in progress right now","steps":[{"kind":"intro","title":"Present Continuous Tense","body":"The Present Continuous is used for actions happening at this moment, temporary situations, or planned future arrangements."},{"kind":"uses","items":["Actions happening right now","Temporary situations","Planned future arrangements"]},{"kind":"structure","formula":"Subject + am/is/are + Verb + ing","parts":[{"label":"Subject","value":"I","color":"from-sky-400 to-blue-500"},{"label":"am/is/are","value":"am","color":"from-emerald-400 to-teal-500"},{"label":"Verb + ing","value":"reading","color":"from-amber-400 to-yellow-500"}]},{"kind":"timeline","position":"present","caption":"In progress right now"},{"kind":"examples","items":["I am reading a novel.","They are playing cricket.","She is preparing dinner.","We are meeting our teacher tomorrow."]},{"kind":"summary","points":["For actions happening now or temporary situations.","Uses am / is / are + verb ending in -ing."]}]},{"id":"w2-l3","title":"Present Perfect Tense","subtitle":"Completed actions that touch the present","steps":[{"kind":"intro","title":"Present Perfect Tense","body":"The Present Perfect links a past action to the present — recent completions, experiences, and achievements."},{"kind":"uses","items":["Recently completed actions","Experiences","Actions connected to the present","Achievements"]},{"kind":"structure","formula":"Subject + has/have + Past Participle (V3)","parts":[{"label":"Subject","value":"I","color":"from-sky-400 to-blue-500"},{"label":"has/have","value":"have","color":"from-emerald-400 to-teal-500"},{"label":"V3","value":"completed","color":"from-fuchsia-400 to-purple-500"}]},{"kind":"timeline","position":"present","caption":"Finished, but still felt in the present"},{"kind":"examples","items":["I have completed my homework.","She has visited Jaipur.","They have won the match.","We have already eaten."]},{"kind":"summary","points":["Bridges past and present.","Uses has / have + the past participle (V3)."]}]},{"id":"w2-l4","title":"Present Perfect Continuous","subtitle":"Started in the past, still going","steps":[{"kind":"intro","title":"Present Perfect Continuous","body":"The Present Perfect Continuous describes actions that started in the past and are still continuing, with emphasis on duration."},{"kind":"uses","items":["Actions that started in the past and are still continuing","Emphasizes the duration of an action"]},{"kind":"structure","formula":"Subject + has/have been + Verb + ing","parts":[{"label":"Subject","value":"I","color":"from-sky-400 to-blue-500"},{"label":"has/have been","value":"have been","color":"from-emerald-400 to-teal-500"},{"label":"Verb + ing","value":"studying","color":"from-amber-400 to-yellow-500"}]},{"kind":"timeline","position":"present","caption":"Started in the past, still happening"},{"kind":"examples","items":["I have been studying for three hours.","She has been working since morning.","They have been waiting for a long time.","We have been living here since 2020."]},{"kind":"summary","points":["Highlights how long an action has been going on.","Uses has / have been + verb-ing."]}]}]},{"id":"w3","index":3,"title":"Past Tense","tagline":"Everything that already happened","gradient":"from-rose-400 via-pink-500 to-fuchsia-600","icon":"🕐","lessons":[{"id":"w3-l1","title":"Simple Past Tense","subtitle":"Completed actions in the past","steps":[{"kind":"intro","title":"Simple Past Tense","body":"The Simple Past describes completed actions, past habits and historical events."},{"kind":"uses","items":["Completed actions in the past","Past habits","Historical events"]},{"kind":"structure","formula":"Subject + Past Form of Verb (V2)","parts":[{"label":"Subject","value":"I","color":"from-sky-400 to-blue-500"},{"label":"V2","value":"visited","color":"from-rose-400 to-red-500"},{"label":"Rest","value":"Delhi last year.","color":"from-slate-300 to-slate-400"}]},{"kind":"timeline","position":"past","caption":"A finished action in the past"},{"kind":"examples","items":["I visited Delhi last year.","She wrote a letter.","We watched a movie yesterday.","They played football after school."]},{"kind":"summary","points":["For actions completed in the past.","Uses the past form (V2) of the verb."]}]},{"id":"w3-l2","title":"Past Continuous Tense","subtitle":"In-progress actions of the past","steps":[{"kind":"intro","title":"Past Continuous Tense","body":"The Past Continuous describes actions that were happening at a particular time in the past, often interrupted by another event."},{"kind":"uses","items":["Actions that were happening at a particular time in the past","Background actions interrupted by another event"]},{"kind":"structure","formula":"Subject + was/were + Verb + ing","parts":[{"label":"Subject","value":"I","color":"from-sky-400 to-blue-500"},{"label":"was/were","value":"was","color":"from-emerald-400 to-teal-500"},{"label":"Verb + ing","value":"reading","color":"from-amber-400 to-yellow-500"}]},{"kind":"timeline","position":"past","caption":"Was happening at a moment in the past"},{"kind":"examples","items":["I was reading when the phone rang.","They were playing outside.","She was sleeping at midnight.","We were travelling during the holidays."]},{"kind":"summary","points":["For actions in progress in the past.","Uses was / were + verb-ing."]}]},{"id":"w3-l3","title":"Past Perfect Tense","subtitle":"The earlier of two past actions","steps":[{"kind":"intro","title":"Past Perfect Tense","body":"The Past Perfect shows an action that was completed before another action in the past."},{"kind":"uses","items":["An action completed before another action in the past"]},{"kind":"structure","formula":"Subject + had + Past Participle (V3)","parts":[{"label":"Subject","value":"She","color":"from-sky-400 to-blue-500"},{"label":"had","value":"had","color":"from-emerald-400 to-teal-500"},{"label":"V3","value":"finished","color":"from-fuchsia-400 to-purple-500"}]},{"kind":"timeline","position":"past","caption":"Finished before another past event"},{"kind":"examples","items":["She had finished her homework before dinner.","We had left before it started raining.","The train had already departed.","They had completed the project."]},{"kind":"summary","points":["Shows which past action happened first.","Uses had + past participle (V3)."]}]},{"id":"w3-l4","title":"Past Perfect Continuous","subtitle":"Ongoing action before another past event","steps":[{"kind":"intro","title":"Past Perfect Continuous","body":"The Past Perfect Continuous describes an action that continued for some time before another action in the past, emphasising duration."},{"kind":"uses","items":["An action that continued for some time before another action in the past","Shows duration before a past event"]},{"kind":"structure","formula":"Subject + had been + Verb + ing","parts":[{"label":"Subject","value":"He","color":"from-sky-400 to-blue-500"},{"label":"had been","value":"had been","color":"from-emerald-400 to-teal-500"},{"label":"Verb + ing","value":"studying","color":"from-amber-400 to-yellow-500"}]},{"kind":"timeline","position":"past","caption":"Was going on for a while, before a past event"},{"kind":"examples","items":["He had been studying for two hours before the exam began.","They had been waiting since morning.","We had been travelling all day.","She had been practising regularly."]},{"kind":"summary","points":["Emphasises how long something had been happening in the past.","Uses had been + verb-ing."]}]}]},{"id":"w4","index":4,"title":"Future Tense","tagline":"Everything that lies ahead","gradient":"from-violet-500 via-purple-500 to-indigo-600","icon":"🚀","lessons":[{"id":"w4-l1","title":"Simple Future Tense","subtitle":"Predictions, promises and plans","steps":[{"kind":"intro","title":"Simple Future Tense","body":"The Simple Future is used for predictions, promises, decisions made at the moment and future events."},{"kind":"uses","items":["Predictions","Promises","Decisions made at the moment","Future events"]},{"kind":"structure","formula":"Subject + will + Base Verb (V1)","parts":[{"label":"Subject","value":"I","color":"from-sky-400 to-blue-500"},{"label":"will","value":"will","color":"from-emerald-400 to-teal-500"},{"label":"V1","value":"help","color":"from-amber-400 to-yellow-500"}]},{"kind":"timeline","position":"future","caption":"Will happen after now"},{"kind":"examples","items":["I will help you.","She will visit her grandparents.","They will arrive tomorrow.","We will complete the project."]},{"kind":"summary","points":["For future actions, predictions and promises.","Uses will + base verb (V1)."]}]},{"id":"w4-l2","title":"Future Continuous Tense","subtitle":"In progress at a future moment","steps":[{"kind":"intro","title":"Future Continuous Tense","body":"The Future Continuous describes actions that will be in progress at a specific time in the future."},{"kind":"uses","items":["Actions that will be in progress at a specific time in the future"]},{"kind":"structure","formula":"Subject + will be + Verb + ing","parts":[{"label":"Subject","value":"I","color":"from-sky-400 to-blue-500"},{"label":"will be","value":"will be","color":"from-emerald-400 to-teal-500"},{"label":"Verb + ing","value":"studying","color":"from-amber-400 to-yellow-500"}]},{"kind":"timeline","position":"future","caption":"Will be in progress at a future time"},{"kind":"examples","items":["I will be studying tonight.","They will be travelling next week.","She will be sleeping at 11 p.m.","We will be celebrating tomorrow evening."]},{"kind":"summary","points":["For actions in progress at a future point.","Uses will be + verb-ing."]}]},{"id":"w4-l3","title":"Future Perfect Tense","subtitle":"Done before a future moment","steps":[{"kind":"intro","title":"Future Perfect Tense","body":"The Future Perfect describes actions that will be completed before a particular time in the future."},{"kind":"uses","items":["Actions that will be completed before a particular time in the future"]},{"kind":"structure","formula":"Subject + will have + Past Participle (V3)","parts":[{"label":"Subject","value":"I","color":"from-sky-400 to-blue-500"},{"label":"will have","value":"will have","color":"from-emerald-400 to-teal-500"},{"label":"V3","value":"finished","color":"from-fuchsia-400 to-purple-500"}]},{"kind":"timeline","position":"future","caption":"Will be finished before a future moment"},{"kind":"examples","items":["I will have finished my homework by 8 p.m.","She will have reached home before sunset.","They will have completed the assignment.","We will have built the bridge by next year."]},{"kind":"summary","points":["For actions finished by a future point.","Uses will have + past participle (V3)."]}]},{"id":"w4-l4","title":"Future Perfect Continuous","subtitle":"Will have been going on","steps":[{"kind":"intro","title":"Future Perfect Continuous","body":"The Future Perfect Continuous describes actions that will continue up to a certain point in the future, emphasising duration."},{"kind":"uses","items":["Actions that will continue up to a certain point in the future","Emphasizes the duration of future actions"]},{"kind":"structure","formula":"Subject + will have been + Verb + ing","parts":[{"label":"Subject","value":"I","color":"from-sky-400 to-blue-500"},{"label":"will have been","value":"will have been","color":"from-emerald-400 to-teal-500"},{"label":"Verb + ing","value":"studying","color":"from-amber-400 to-yellow-500"}]},{"kind":"timeline","position":"future","caption":"Will have been happening up to a future moment"},{"kind":"examples","items":["I will have been studying for five hours by evening.","They will have been working here for ten years.","She will have been living in Mumbai for six years.","We will have been travelling all day."]},{"kind":"summary","points":["For ongoing actions leading up to a future moment.","Uses will have been + verb-ing."]}]}]},{"id":"w5","index":5,"title":"Verb Forms","tagline":"The building blocks of every tense","gradient":"from-amber-400 via-orange-500 to-red-500","icon":"🧱","lessons":[{"id":"w5-l1","title":"V1, V2, V3","subtitle":"The three key forms of a verb","steps":[{"kind":"intro","title":"Three forms of a verb","body":"English verbs usually have three important forms. Different tenses use different forms."},{"kind":"table","columns":["Form","Example"],"rows":[["Base Form (V1)","Go"],["Past Form (V2)","Went"],["Past Participle (V3)","Gone"]]},{"kind":"summary","points":["V1 is the base form (Go).","V2 is the past form (Went).","V3 is the past participle (Gone)."]}]},{"id":"w5-l2","title":"Common Verbs","subtitle":"V1 → V2 → V3 in action","steps":[{"kind":"intro","title":"Examples of common verbs","body":"Learning these three forms together makes it easy to build any tense correctly."},{"kind":"table","columns":["V1","V2","V3"],"rows":[["Eat","Ate","Eaten"],["Write","Wrote","Written"],["Speak","Spoke","Spoken"],["See","Saw","Seen"],["Take","Took","Taken"],["Begin","Began","Begun"],["Drive","Drove","Driven"],["Give","Gave","Given"],["Come","Came","Come"],["Break","Broke","Broken"]]},{"kind":"summary","points":["Memorising V1–V2–V3 unlocks every tense.","Some verbs keep the same form (Come → Came → Come)."]}]}]},{"id":"w6","index":6,"title":"Helping Verbs","tagline":"The little words that carry a tense","gradient":"from-teal-400 via-emerald-500 to-green-600","icon":"🪄","lessons":[{"id":"w6-l1","title":"Helping Verbs — Present & Past","subtitle":"The helpers behind every tense","steps":[{"kind":"intro","title":"Helping verbs","body":"Helping verbs work with the main verb to form a tense. Each tense has its own set of helpers."},{"kind":"table","columns":["Tense","Helping Verbs"],"rows":[["Simple Present","do, does (for questions and negatives)"],["Present Continuous","am, is, are"],["Present Perfect","has, have"],["Present Perfect Continuous","has been, have been"],["Simple Past","did (for questions and negatives)"],["Past Continuous","was, were"],["Past Perfect","had"],["Past Perfect Continuous","had been"]]},{"kind":"summary","points":["Helping verbs are an essential part of most tenses.","Recognise them to spot the tense of any sentence."]}]},{"id":"w6-l2","title":"Helping Verbs — Future","subtitle":"How future tenses are built","steps":[{"kind":"intro","title":"Future helpers","body":"All four future tenses are built on will, extended with be, have, and have been."},{"kind":"table","columns":["Tense","Helping Verbs"],"rows":[["Simple Future","will"],["Future Continuous","will be"],["Future Perfect","will have"],["Future Perfect Continuous","will have been"]]},{"kind":"summary","points":["Every future tense starts with will.","Add be, have, or have been to shift the meaning."]}]}]},{"id":"w7","index":7,"title":"Time Expressions","tagline":"Clues that reveal the tense","gradient":"from-cyan-400 via-sky-500 to-blue-600","icon":"⏱️","lessons":[{"id":"w7-l1","title":"Present Time Words","subtitle":"Signals of the present","steps":[{"kind":"intro","title":"Time expressions","body":"Different tenses are often used with particular time expressions."},{"kind":"list","title":"Simple Present","items":["always","usually","often","sometimes","every day","never"]},{"kind":"list","title":"Present Continuous","items":["now","right now","at the moment","currently"]},{"kind":"list","title":"Present Perfect","items":["already","just","yet","ever","never"]},{"kind":"list","title":"Present Perfect Continuous","items":["since","for"]},{"kind":"summary","points":["These words often signal a specific present tense.","'Since' + point in time, 'for' + length of time."]}]},{"id":"w7-l2","title":"Past & Future Time Words","subtitle":"Signals of past and future","steps":[{"kind":"intro","title":"Time words for past and future","body":"Past and future tenses also come with their own set of clue words."},{"kind":"list","title":"Simple Past","items":["yesterday","last week","ago","in 2020"]},{"kind":"list","title":"Past Continuous","items":["while","when"]},{"kind":"list","title":"Past Perfect","items":["before","after","by the time"]},{"kind":"list","title":"Future Tenses","items":["tomorrow","next week","soon","later","by next year"]},{"kind":"summary","points":["Time expressions often provide clues about which tense to use.","Spot the clue word first — the tense usually follows."]}]}]},{"id":"w8","index":8,"title":"Tense Comparison","tagline":"See all 12 tenses side by side","gradient":"from-indigo-500 via-blue-600 to-slate-700","icon":"⚖️","lessons":[{"id":"w8-l1","title":"Quick Comparison of the 12 Tenses","subtitle":"One purpose per tense","steps":[{"kind":"intro","title":"All 12 tenses on one page","body":"Each tense has a clear main purpose. This is the fastest way to keep them straight."},{"kind":"table","columns":["Tense","Main Purpose"],"rows":[["Simple Present","Habits and facts"],["Present Continuous","Actions happening now"],["Present Perfect","Completed actions connected to the present"],["Present Perfect Continuous","Ongoing actions that started in the past"],["Simple Past","Completed past actions"],["Past Continuous","Actions in progress in the past"],["Past Perfect","Earlier of two past actions"],["Past Perfect Continuous","Ongoing action before another past event"],["Simple Future","Future actions and predictions"],["Future Continuous","Actions in progress in the future"],["Future Perfect","Actions completed before a future time"],["Future Perfect Continuous","Ongoing action up to a future point"]]},{"kind":"summary","points":["One-line purpose per tense.","Great to revisit before writing anything in English."]}]}]},{"id":"w9","index":9,"title":"Master Review","tagline":"Key points to remember","gradient":"from-yellow-400 via-amber-500 to-orange-500","icon":"📖","lessons":[{"id":"w9-l1","title":"Key Points to Remember","subtitle":"The rules that never change","steps":[{"kind":"intro","title":"Key points to remember","body":"A short set of principles that hold true across every tense."},{"kind":"list","title":"Core rules","items":["Every sentence has a tense.","The verb changes according to the tense.","Helping verbs are an important part of many tenses.","Time expressions often provide clues about which tense to use.","Learning the structure of each tense makes it easier to speak and write correctly.","Reading English books and listening to spoken English regularly can help you recognise and use tenses naturally."]},{"kind":"summary","points":["Tense = when. Verb form = how.","Helpers + time words = strong clues.","Regular reading and listening make tenses feel natural."]}]}]},{"id":"w10","index":10,"title":"Grammar Champion","tagline":"You've reached the summit","gradient":"from-fuchsia-500 via-pink-500 to-rose-500","icon":"🏆","lessons":[{"id":"w10-l1","title":"The Big Summary","subtitle":"Everything, in one breath","steps":[{"kind":"intro","title":"You made it, Champion!","body":"English has 12 tenses, grouped into the Present, Past and Future. Each tense serves a specific purpose — describing habits, actions in progress, completed events or future plans."},{"kind":"note","body":"By understanding the structure, uses, and examples of each tense, students can improve their grammar, writing and communication skills."},{"kind":"summary","points":["3 time zones — Present, Past, Future.","4 forms — Simple, Continuous, Perfect, Perfect Continuous.","12 tenses in total, each with its own use, structure and clues.","You now have the map of every tense in English."]}]}]},{"id":"w11","index":11,"title":"Modals","tagline":"Can, could, may, might, must and more","gradient":"from-blue-500 via-indigo-500 to-purple-500","icon":"🔑","lessons":[{"id":"w11-l1","title":"What Are Modals?","subtitle":"Special helping verbs with fixed meanings","steps":[{"kind":"intro","title":"What is a Modal?","body":"Modals are a special group of helping verbs — can, could, may, might, must, shall, should, will, would, and ought to — that add meaning like ability, permission, possibility, or obligation to a main verb. Unlike other helping verbs, modals never change form and are never followed by 'to' (except ought to)."},{"kind":"list","title":"The common modals","items":["can","could","may","might","must","shall","should","will","would","ought to"]},{"kind":"uses","items":["Ability","Permission","Possibility","Obligation","Advice","Request"]},{"kind":"structure","formula":"Subject + Modal + Base Verb (V1)","parts":[{"label":"Subject","value":"You","color":"from-sky-400 to-blue-500"},{"label":"Modal","value":"must","color":"from-emerald-400 to-teal-500"},{"label":"V1","value":"finish","color":"from-amber-400 to-yellow-500"}]},{"kind":"examples","items":["She can swim very well.","You may leave the room now.","It might rain this evening.","We must respect our elders.","You should apologise to her."]},{"kind":"summary","points":["Modals add meaning like ability, permission, possibility or obligation.","A modal is always followed by the base form (V1) of the verb.","Modals never take -s, -ing, or -ed endings."]}]},{"id":"w11-l2","title":"Choosing the Right Modal","subtitle":"Matching the modal to the meaning","steps":[{"kind":"intro","title":"Picking the correct modal","body":"Different modals suit different situations. Knowing which one to use makes your meaning precise — 'can' shows ability, 'must' shows a strong obligation, and 'might' shows only a small possibility."},{"kind":"table","columns":["Modal","Meaning","Example"],"rows":[["Can","Ability / informal permission","I can ride a bicycle."],["Must","Strong obligation / certainty","You must wear a helmet."],["May","Formal permission / possibility","May I come in?"],["Might","Weak possibility","It might snow tonight."],["Should","Advice / recommendation","You should see a doctor."]]},{"kind":"uses","items":["Giving advice","Making a strong rule","Asking politely","Expressing a guess","Talking about ability"]},{"kind":"summary","points":["'Must' is stronger than 'should'.","'May' is more formal than 'can' for permission.","'Might' shows less certainty than 'may'."]}]}]},{"id":"w12","index":12,"title":"Active & Passive Voice","tagline":"Two ways to say the same thing","gradient":"from-orange-500 via-red-500 to-rose-500","icon":"🔄","lessons":[{"id":"w12-l1","title":"What is Voice?","subtitle":"Who does the action, and who receives it","steps":[{"kind":"intro","title":"Active and Passive Voice","body":"Voice tells us whether the subject of a sentence performs the action (active) or receives the action (passive). Both describe the same event, just from a different angle."},{"kind":"list","title":"The two voices","items":["Active Voice","Passive Voice"]},{"kind":"examples","items":["Active: The chef cooked the meal.","Passive: The meal was cooked by the chef.","Active: Rina wrote the letter.","Passive: The letter was written by Rina."]},{"kind":"summary","points":["Active voice: subject performs the action.","Passive voice: subject receives the action.","The same event can be written in either voice."]}]},{"id":"w12-l2","title":"Changing Active to Passive","subtitle":"The object becomes the new subject","steps":[{"kind":"intro","title":"How to form the passive","body":"To change a sentence from active to passive, the object of the active sentence becomes the subject, the verb changes to a form of 'be' plus the past participle (V3), and the original subject moves after 'by'."},{"kind":"structure","formula":"Object + be + Past Participle (V3) + by + Subject","parts":[{"label":"Object→Subject","value":"The cake","color":"from-sky-400 to-blue-500"},{"label":"be + V3","value":"was baked","color":"from-emerald-400 to-teal-500"},{"label":"by + Subject","value":"by Meera.","color":"from-amber-400 to-yellow-500"}]},{"kind":"uses","items":["When the doer is unknown","When the action matters more than the doer","In formal or scientific writing","When the doer is obvious from context"]},{"kind":"examples","items":["Active: Meera baked the cake. → Passive: The cake was baked by Meera.","Active: They build houses here. → Passive: Houses are built here.","Active: Someone stole my bicycle. → Passive: My bicycle was stolen."]},{"kind":"summary","points":["The object of the active sentence becomes the subject of the passive.","Use the correct form of 'be' + the past participle (V3).","'by + doer' can be dropped if the doer is unknown or unimportant."]}]}]},{"id":"w13","index":13,"title":"Direct & Indirect Speech","tagline":"Reporting what someone said","gradient":"from-teal-400 via-cyan-400 to-blue-500","icon":"💬","lessons":[{"id":"w13-l1","title":"Direct vs Indirect Speech","subtitle":"Exact words, or reported words","steps":[{"kind":"intro","title":"Two ways to report speech","body":"Direct speech repeats a speaker's exact words inside quotation marks. Indirect (reported) speech tells us what was said without quoting it word for word."},{"kind":"list","title":"The two forms","items":["Direct Speech","Indirect Speech"]},{"kind":"examples","items":["Direct: Riya said, \"I am tired.\"","Indirect: Riya said that she was tired.","Direct: He said, \"I will call you.\"","Indirect: He said that he would call me."]},{"kind":"summary","points":["Direct speech uses quotation marks and the speaker's exact words.","Indirect speech reports the meaning without quotation marks.","The verb tense usually shifts backward in indirect speech."]}]},{"id":"w13-l2","title":"Reporting Rules","subtitle":"What changes when you report speech","steps":[{"kind":"intro","title":"Rules for indirect speech","body":"When direct speech becomes indirect, three things typically change: the tense moves one step into the past, pronouns adjust to match the new speaker, and time or place words update to match the new context."},{"kind":"uses","items":["Shift the tense backward","Change pronouns to match the speaker","Change time words (today → that day)","Change place words (here → there)","Remove quotation marks"]},{"kind":"table","columns":["Direct","Indirect"],"rows":[["\"I am happy,\" she said.","She said that she was happy."],["\"We will win,\" they said.","They said that they would win."],["\"I saw him yesterday,\" he said.","He said that he had seen him the day before."]]},{"kind":"summary","points":["Present tense in direct speech usually becomes past tense in indirect speech.","'Today' becomes 'that day'; 'here' becomes 'there'.","Pronouns change to match who is reporting the speech."]}]}]},{"id":"w14","index":14,"title":"Determiners & Articles","tagline":"a, an, the — and their friends","gradient":"from-emerald-500 via-green-600 to-teal-500","icon":"🔍","lessons":[{"id":"w14-l1","title":"Articles: a, an, the","subtitle":"The smallest words with the biggest job","steps":[{"kind":"intro","title":"What are articles?","body":"Articles — a, an, and the — are used before nouns to show whether we mean any one example of something, or one specific, particular thing."},{"kind":"uses","items":["'a' before a consonant sound","'an' before a vowel sound","'the' for something specific or already known","'the' for something unique"]},{"kind":"structure","formula":"Article + (Adjective) + Noun","parts":[{"label":"Article","value":"an","color":"from-sky-400 to-blue-500"},{"label":"Adjective","value":"honest","color":"from-emerald-400 to-teal-500"},{"label":"Noun","value":"man","color":"from-amber-400 to-yellow-500"}]},{"kind":"examples","items":["I saw a dog in the park.","She is an honest student.","The Sun rises in the east.","Please pass me the book on the table."]},{"kind":"summary","points":["Use 'a' before consonant sounds, 'an' before vowel sounds.","Use 'the' when both speaker and listener know exactly what is meant.","'the' is also used for one-of-a-kind things like the Sun or the Moon."]}]},{"id":"w14-l2","title":"Other Determiners","subtitle":"some, any, this, that, and their friends","steps":[{"kind":"intro","title":"Beyond articles","body":"Determiners are words placed before nouns to make their meaning more specific — showing quantity, possession, or which one is meant. Articles are one type; there are several others."},{"kind":"list","title":"Common determiner groups","items":["this / that / these / those","some / any","many / much","few / little","my / your / our / their"]},{"kind":"table","columns":["Determiner","Used with","Example"],"rows":[["this / that","Singular nouns","This book is mine."],["these / those","Plural nouns","Those shoes are new."],["many","Countable nouns","Many students passed."],["much","Uncountable nouns","There isn't much time."],["some / any","Both, in statements/questions","Is there any milk left?"]]},{"kind":"summary","points":["Demonstratives (this/that/these/those) point to something specific.","'Many' goes with countable nouns; 'much' goes with uncountable nouns.","'Some' is usually for positive sentences; 'any' for questions and negatives."]}]}]}];

const ACHIEVEMENTS = [
  {id:'first-lesson',title:'First Lesson',description:'Complete your very first lesson.',icon:'✨',check:s=>s.completed.length>=1},
  {id:'grammar-explorer',title:'Grammar Explorer',description:'Finish the Introduction world.',icon:'🧭',check:s=>WORLDS_BASE[0].lessons.every(l=>s.completed.includes(l.id))},
  {id:'present-master',title:'Present Master',description:'Complete every lesson in the Present Tense world.',icon:'☀️',check:s=>WORLDS_BASE[1].lessons.every(l=>s.completed.includes(l.id))},
  {id:'past-master',title:'Past Master',description:'Complete every lesson in the Past Tense world.',icon:'🕐',check:s=>WORLDS_BASE[2].lessons.every(l=>s.completed.includes(l.id))},
  {id:'future-master',title:'Future Master',description:'Complete every lesson in the Future Tense world.',icon:'🚀',check:s=>WORLDS_BASE[3].lessons.every(l=>s.completed.includes(l.id))},
  {id:'verb-expert',title:'Verb Expert',description:'Master V1, V2 and V3 in the Verb Forms world.',icon:'🧱',check:s=>WORLDS_BASE[4].lessons.every(l=>s.completed.includes(l.id))},
  {id:'perfect-progress',title:'Perfect Progress',description:'Reach 50% completion overall.',icon:'📈',check:s=>s.completed.length>=Math.ceil(ALL_LESSONS.length/2)},
  {id:'speed-learner',title:'Speed Learner',description:'Earn 500 XP.',icon:'⚡',check:s=>s.xp>=500},
  {id:'grammar-champion',title:'Grammar Champion',description:'Unlock the Grammar Champion world.',icon:'👑',check:s=>worldsUnlocked(s.completed)>=10},
  {id:'complete-100',title:'100% Completion',description:'Finish every lesson in every world.',icon:'🏆',check:s=>s.completed.length>=ALL_LESSONS.length},
];
const ALL_LESSONS = WORLDS_BASE.flatMap(w=>w.lessons.map(l=>({...l, worldId:w.id})));

/* ---------------- procedural quiz generator (matches source exactly) ---------------- */
function GV(seed){ let t=2166136261; for(let n=0;n<seed.length;n++){ t^=seed.charCodeAt(n); t=Math.imul(t,16777619); } return ()=>{ t=Math.imul(t^t>>>15,2246822507); t=Math.imul(t^t>>>13,3266489909); return ((t^t>>>16)>>>0)/4294967296; }; }
function KV(pool,exclude,n,seed){ let rnd=GV(seed), avail=Array.from(new Set(pool.filter(x=>x!==exclude))), out=[]; while(out.length<n && avail.length){ out.push(avail.splice(Math.floor(rnd()*avail.length),1)[0]); } return out; }
function qShuffle(arr,seed){ let rnd=GV(seed), r=[...arr]; for(let i=r.length-1;i>0;i--){ let j=Math.floor(rnd()*(i+1)); [r[i],r[j]]=[r[j],r[i]]; } return r; }
function JV(prompt,correct,wrong,seed,explain){ let opts=qShuffle([correct,...wrong],seed+'-opt'); return {kind:'quiz-choice',prompt,options:opts,answer:opts.indexOf(correct),explain}; }
const byKind = k => s => s.kind===k;
const XV = WORLDS_BASE.flatMap(w=>w.lessons.flatMap(l=>l.steps.filter(byKind('structure')).map(s=>s.formula)));
const ZV = WORLDS_BASE.flatMap(w=>w.lessons.flatMap(l=>l.steps.filter(byKind('uses')).flatMap(s=>s.items)));
const QV = WORLDS_BASE.flatMap(w=>w.lessons.map(l=>l.title));
const TIME_LABEL = {past:'In the past', present:'In the present', future:'In the future'};

const WORLDS = JSON.parse(JSON.stringify(WORLDS_BASE));
for(const w of WORLDS) for(const t of w.lessons){
  const steps = t.steps;
  const n = steps.find(byKind('structure'));
  const r = steps.find(byKind('timeline'));
  const i = steps.find(byKind('examples'));
  const a = steps.find(byKind('uses'));
  const o = steps.find(byKind('table'));
  const c = steps.find(byKind('list'));

  // Insert each generated quiz right after the reading step that teaches it,
  // instead of bunching every quiz at the end of the lesson — keeps a question
  // within a step or two of any new material instead of a wall of reading.
  const inserts = [];
  if(a && a.items.length){ const first=a.items[0]; inserts.push({after:'uses', step: JV(`Which of these is a use of the ${t.title}?`, first, KV(ZV.filter(z=>!a.items.includes(z)), first, 3, t.id+'-u'), t.id+'-use')}); }
  if(n) inserts.push({after:'structure', step: JV(`Which structure belongs to the ${t.title}?`, n.formula, KV(XV, n.formula, 3, t.id+'-f'), t.id+'-formula', `Remember: ${n.formula}`)});
  if(r && n) inserts.push({after:'timeline', step: JV(`When does the action in "${t.title}" take place?`, TIME_LABEL[r.position], Object.entries(TIME_LABEL).filter(([k])=>k!==r.position).map(([,v])=>v), t.id+'-time', r.caption)});
  if(i && i.items.length){ const ex=i.items[+(i.items.length>1)]; const wc=ex.split(/\s+/).length; if(wc>=3 && wc<=12) inserts.push({after:'examples', step:{kind:'quiz-build', prompt:'Tap the words in the right order to build the sentence', sentence:ex}}); }
  if(o && o.rows.length>=3 && o.columns.length>=3){ const pairs=o.rows.slice(0,3).map(row=>({left:row[0],right:row[1]})); inserts.push({after:'table', step:{kind:'quiz-match', prompt:`Match each time with its ${o.columns[1]} tense`, pairs}}); }
  if(inserts.length===0 && c && c.items.length){ const first=c.items[0]; inserts.push({after:'list', step: JV(`Which of these belongs to "${c.title}"?`, first, KV(QV.filter(z=>!c.items.includes(z)), first, 3, t.id+'-l'), t.id+'-list')}); }
  if(!inserts.length) continue;

  for(const {after, step} of inserts){
    const idx = steps.findIndex(s=>s.kind===after);
    if(idx===-1) continue;
    steps.splice(idx+1, 0, step);
  }
}

/* ============================== STATE ============================== */
const STORE_KEY = 'tenses-quest-v1';
const XP_PER_LESSON=60, STARS_PER_LESSON=3, COINS_PER_LESSON=25, XP_PER_LEVEL=200, XP_PER_CORRECT=15, COINS_PER_CORRECT=5;
function defaultState(){ return {completed:[], xp:0, coins:0, stars:0, streak:0, lastCompletionDate:null, unlockedAchievements:[], quizCorrect:0, quizWrong:0, darkMode:true}; }
let STATE = (()=>{ try{ const raw=localStorage.getItem(STORE_KEY); return raw? {...defaultState(), ...JSON.parse(raw).state} : defaultState(); }catch(e){ return defaultState(); } })();
if(typeof atlasProfile !== 'undefined' && atlasProfile){ STATE.xp = atlasProfile.xp||0; STATE.coins = atlasProfile.coins||0; }
function save(){ localStorage.setItem(STORE_KEY, JSON.stringify({state:STATE, version:0})); app.parentElement.setAttribute('data-theme', STATE.darkMode?'dark':'light'); }
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
function todayStr(){ return new Date().toISOString().slice(0,10); }
function daysBetween(a,b){ return Math.round((new Date(b).getTime()-new Date(a).getTime())/86400000); }
function worldsUnlocked(completed){ let n=1; for(let i=0;i<WORLDS_BASE.length-1 && WORLDS_BASE[i].lessons.every(l=>completed.includes(l.id)); i++) n=Math.min(WORLDS_BASE.length, n+1); return n; }
function isWorldUnlocked(idx){
  if(idx===0) return true;
  const prev=WORLDS_BASE[idx-1];
  const prevDone = prev.lessons.every(l=>STATE.completed.includes(l.id));
  const reviewPassed = typeof atlasModulePassed !== 'function' || atlasModulePassed('tq', prev.id);
  return prevDone && reviewPassed;
}
function worldNeedsReview(idx){
  if(idx===0) return false;
  const prev=WORLDS_BASE[idx-1];
  const prevDone = prev.lessons.every(l=>STATE.completed.includes(l.id));
  const reviewPassed = typeof atlasModulePassed !== 'function' || atlasModulePassed('tq', prev.id);
  return prevDone && !reviewPassed;
}
function isLessonUnlocked(lessonId){
  const idx=ALL_LESSONS.findIndex(l=>l.id===lessonId);
  if(idx<=0) return true;
  if(!STATE.completed.includes(ALL_LESSONS[idx-1].id)) return false;
  const lesson = ALL_LESSONS[idx];
  const worldIdx = WORLDS_BASE.findIndex(w=>w.id===lesson.worldId);
  if(worldIdx>0 && WORLDS_BASE[worldIdx].lessons[0].id===lessonId) return isWorldUnlocked(worldIdx);
  return true;
}
window.__openWorldReview = (idx)=>{
  const prev = WORLDS_BASE[idx-1];
  atlasShowModuleReviewGate(app, {
    subject: 'tq',
    moduleId: prev.id,
    moduleTitle: prev.title,
    lessonTitles: prev.lessons.map(l=>l.title),
    onPass: renderWorldMap,
    onExit: renderWorldMap,
  });
};
function currentLessonId(){ const l=ALL_LESSONS.find(l=>!STATE.completed.includes(l.id)); return l?l.id:null; }
function levelInfo(xp){ const level=Math.floor(xp/XP_PER_LEVEL)+1; const into=xp%XP_PER_LEVEL; return {level, into, need:XP_PER_LEVEL}; }
function recordQuizAnswer(correct, topic, question){
  if(!correct){ update({quizWrong: STATE.quizWrong+1}); if(typeof atlasRecordMistake === 'function') atlasRecordMistake('tq', topic||'general', question||null); return; }
  const xp = STATE.xp + XP_PER_CORRECT;
  const unlocked = worldsUnlocked(STATE.completed);
  const newly = ACHIEVEMENTS.filter(a=>a.check({completed:STATE.completed, xp, worldsUnlocked:unlocked})).map(a=>a.id);
  update({xp, coins: STATE.coins+COINS_PER_CORRECT, quizCorrect: STATE.quizCorrect+1, unlockedAchievements: Array.from(new Set([...STATE.unlockedAchievements, ...newly]))});
}
function completeLesson(lessonId){
  if(STATE.completed.includes(lessonId)) return {newAchievements:[], leveledUp:false};
  const beforeLevel = Math.floor(STATE.xp/XP_PER_LEVEL)+1;
  const completed = [...STATE.completed, lessonId];
  const xp = STATE.xp+XP_PER_LESSON, stars = STATE.stars+STARS_PER_LESSON, coins = STATE.coins+COINS_PER_LESSON;
  const afterLevel = Math.floor(xp/XP_PER_LEVEL)+1;
  const today = todayStr();
  let streak = STATE.streak;
  if(STATE.lastCompletionDate===null) streak=1;
  else{ const d=daysBetween(STATE.lastCompletionDate, today); streak = d===0? Math.max(streak,1) : d===1? streak+1 : 1; }
  const unlocked = worldsUnlocked(completed);
  const allNow = ACHIEVEMENTS.filter(a=>a.check({completed, xp, worldsUnlocked:unlocked})).map(a=>a.id);
  const newAchievements = allNow.filter(id=>!STATE.unlockedAchievements.includes(id));
  update({completed, xp, stars, coins, streak, lastCompletionDate:today, unlockedAchievements:Array.from(new Set([...STATE.unlockedAchievements, ...allNow]))});
  return {newAchievements, leveledUp: afterLevel>beforeLevel};
}
function resetProgress(){ STATE=defaultState(); if(typeof atlasProfile !== 'undefined' && atlasProfile){ STATE.xp = atlasProfile.xp||0; STATE.coins = atlasProfile.coins||0; } save(); }

/* ============================== ROUTER ============================== */
const app = document.getElementById('app');
app.parentElement.setAttribute('data-theme', STATE.darkMode?'dark':'light');
if(window.__tqHashListener) window.removeEventListener('hashchange', window.__tqHashListener);
window.__tqHashListener = function(){ if(!location.hash.startsWith('#/tq')) return; render(); };
window.addEventListener('hashchange', window.__tqHashListener);
function render(){
  window.scrollTo(0,0);
  const hash = location.hash.replace(/^#\/tq\/?/,'');
  const [path,a,b] = hash.split('/');
  if(path==='worlds'){ renderWorldMap(); return; }
  if(path==='world'){ renderWorldDetail(a); return; }
  if(path==='lesson'){ renderLesson(a); return; }
  if(path==='achievements'){ renderAchievements(); return; }
  if(path==='settings'){ renderSettings(); return; }
  renderHome();
}
function Topbar(){
  return `<div style="display:flex;justify-content:flex-end;gap:10px;padding:14px 18px 0;max-width:900px;margin:0 auto">
    <a href="#/tq/achievements" class="btn btn-outline" style="padding:8px 14px;font-size:12.5px;border-radius:12px">🏆 Achievements</a>
    <a href="#/tq/settings" class="btn btn-outline" style="padding:8px 14px;font-size:12.5px;border-radius:12px">⚙️ Settings</a>
  </div>`;
}

/* ---------------- HOME ---------------- */
function renderHome(){
  const lv = levelInfo(STATE.xp);
  const curId = currentLessonId();
  const curLesson = curId ? ALL_LESSONS.find(l=>l.id===curId) : null;
  const curWorld = curLesson ? WORLDS.find(w=>w.id===curLesson.worldId) : null;
  const pct = Math.round(STATE.completed.length/ALL_LESSONS.length*100);
  app.innerHTML = `${Topbar()}<main>
    <div class="card" style="text-align:center">
      <div class="pill" style="background:linear-gradient(135deg,#8b7bf0,#6d5cd6)">✨ Welcome back, Learner</div>
      <h1 class="font-display" style="font-size:32px;margin:10px 0 4px">Master every tense — one adventure at a time.</h1>
      <p style="color:var(--muted);max-width:520px;margin:0 auto">Explore fourteen themed worlds. Unlock lessons. Turn Class 8 grammar into a beautiful, cinematic journey.</p>
      <div style="display:flex;gap:12px;justify-content:center;margin-top:22px;flex-wrap:wrap">
        ${curLesson?`<a class="btn btn-primary" href="#/tq/lesson/${curLesson.id}">Continue: ${curLesson.title} →</a>`:''}
        <a class="btn btn-outline" href="#/tq/worlds">Open World Map</a>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:16px">
      <div class="stat-tile"><div class="n">${STATE.xp}</div><div class="l">✨ XP · Lv ${lv.level}</div></div>
      <div class="stat-tile"><div class="n">${STATE.stars}</div><div class="l">⭐ Stars</div></div>
      <div class="stat-tile"><div class="n">${STATE.coins}</div><div class="l">🪙 Coins</div></div>
      <div class="stat-tile"><div class="n">${STATE.streak}</div><div class="l">🔥 Streak</div></div>
    </div>
    <div class="card" style="margin-top:16px">
      <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--muted);margin-bottom:8px"><span>Overall Progress</span><span>${pct}% Complete</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:linear-gradient(90deg,#8b7bf0,#22d3ee)"></div></div>
      <div style="font-size:12.5px;color:var(--muted);margin-top:6px">${STATE.completed.length} of ${ALL_LESSONS.length} lessons finished</div>
    </div>
    ${curWorld?`<div class="card" style="margin-top:16px">
      <div class="pill" style="background:${grad(curWorld.gradient)}">World ${curWorld.index} · ${curWorld.title}</div>
      <div style="margin-top:14px;font-size:13px;color:var(--muted)">Level Progress</div>
      <div class="progress-track" style="margin-top:6px"><div class="progress-fill" style="width:${lv.into/lv.need*100}%;background:${grad(curWorld.gradient)}"></div></div>
      <div style="font-size:12px;color:var(--muted);margin-top:4px">${lv.into} / ${lv.need} XP to Level ${lv.level+1}</div>
    </div>`:''}
    <h2 class="font-display" style="font-size:22px;margin:26px 0 12px">World Map</h2>
    <div style="display:grid;gap:12px">
      ${WORLDS.map((w,i)=>{
        const unlocked = isWorldUnlocked(i);
        const needsReview = worldNeedsReview(i);
        const done = w.lessons.filter(l=>STATE.completed.includes(l.id)).length;
        const href = unlocked ? '#/tq/world/'+w.id : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReview(${i});return false;"` : '';
        return `<a class="world-card" href="${href}" ${clickAttr} style="background:${grad(w.gradient)};${unlocked||needsReview?'':'filter:grayscale(.6);opacity:.55;pointer-events:none'}">
          <div style="display:flex;align-items:center;gap:14px">
            <div style="font-size:32px">${unlocked?w.icon:(needsReview?'📝':'🔒')}</div>
            <div>
              <div style="font-size:10.5px;text-transform:uppercase;letter-spacing:.06em;opacity:.85">World ${w.index}</div>
              <div class="font-display" style="font-size:18px;font-weight:800">${w.title}</div>
              <div style="font-size:12.5px;opacity:.9">${needsReview?'Tap to take the Module Review →':w.tagline}</div>
            </div>
            <div style="margin-left:auto;font-weight:800">${done} / ${w.lessons.length}</div>
          </div>
        </a>`;
      }).join('')}
    </div>
    <div style="text-align:center;margin-top:24px">
      <button onclick="if(confirm('Reset all progress?')){ resetProgress(); render(); }" style="font-size:12px;color:var(--muted);text-decoration:underline">Reset progress</button>
    </div>
  </main>`;
}

/* ---------------- WORLD MAP ---------------- */
function renderWorldMap(){
  app.innerHTML = `${Topbar()}<main>
    <a href="#/tq/" style="font-size:13px;color:var(--muted)">← Home</a>
    <h1 class="font-display" style="font-size:28px;margin:10px 0 16px">World Map</h1>
    <div style="display:grid;gap:12px">
      ${WORLDS.map((w,i)=>{
        const unlocked = isWorldUnlocked(i);
        const needsReview = worldNeedsReview(i);
        const done = w.lessons.filter(l=>STATE.completed.includes(l.id)).length;
        const pct = Math.round(done/w.lessons.length*100);
        const href = unlocked ? '#/tq/world/'+w.id : '#';
        const clickAttr = needsReview ? `onclick="__openWorldReview(${i});return false;"` : '';
        return `<a class="world-card" href="${href}" ${clickAttr} style="background:${grad(w.gradient)};${unlocked||needsReview?'':'filter:grayscale(.6);opacity:.55;pointer-events:none'}">
          <div style="display:flex;align-items:center;gap:14px">
            <div style="font-size:32px">${unlocked?w.icon:(needsReview?'📝':'🔒')}</div>
            <div style="flex:1">
              <div style="font-size:10.5px;text-transform:uppercase;letter-spacing:.06em;opacity:.85">World ${w.index}</div>
              <div class="font-display" style="font-size:19px;font-weight:800">${w.title}</div>
              <div style="font-size:12.5px;opacity:.9">${needsReview?'Tap to take the Module Review →':w.tagline}</div>
            </div>
          </div>
          <div style="margin-top:14px"><div style="display:flex;justify-content:space-between;font-size:11.5px;opacity:.9;margin-bottom:4px"><span>${done}/${w.lessons.length} lessons</span><span>${pct}%</span></div>
          <div style="height:8px;border-radius:99px;background:#ffffff40;overflow:hidden"><div style="height:100%;width:${pct}%;background:#fff"></div></div></div>
        </a>`;
      }).join('')}
    </div>
  </main>`;
}

/* ---------------- WORLD DETAIL ---------------- */
function renderWorldDetail(worldId){
  const w = WORLDS.find(w=>w.id===worldId);
  if(!w){ nav('#/tq/worlds'); return; }
  const idx = WORLDS.findIndex(x=>x.id===worldId);
  if(!isWorldUnlocked(idx)){ renderWorldMap(); return; }
  app.innerHTML = `${Topbar()}<main>
    <a href="#/tq/worlds" style="font-size:13px;color:var(--muted)">← World Map</a>
    <div class="world-card" style="background:${grad(w.gradient)};margin-top:12px">
      <div style="font-size:40px">${w.icon}</div>
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:.06em;opacity:.85;margin-top:6px">World ${w.index}</div>
      <h1 class="font-display" style="font-size:28px;margin:2px 0">${w.title}</h1>
      <p style="opacity:.92;margin:0">${w.tagline}</p>
    </div>
    <div style="margin-top:16px">
      ${w.lessons.map((l,i)=>{
        const done = STATE.completed.includes(l.id);
        const unlocked = isLessonUnlocked(l.id);
        return `<a class="lesson-row ${unlocked?'':'locked'}" href="${unlocked?'#/tq/lesson/'+l.id:'#'}">
          <div style="width:48px;height:48px;border-radius:14px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff;background:${done?'linear-gradient(135deg,#34d399,#22d3ee)':grad(w.gradient)}">${done?'✓':i+1}</div>
          <div style="flex:1">
            <div class="font-display" style="font-size:16px">${l.title}</div>
            <div style="font-size:12.5px;color:var(--muted)">${l.subtitle}</div>
          </div>
          ${unlocked?'':'<div style="font-size:20px">🔒</div>'}
        </a>`;
      }).join('')}
    </div>
  </main>`;
}

/* ---------------- LESSON PLAYER ---------------- */
function renderLesson(lessonId){
  const meta = ALL_LESSONS.find(l=>l.id===lessonId);
  const w = WORLDS.find(w=>w.id===meta?.worldId);
  const lesson = w?.lessons.find(l=>l.id===lessonId);
  if(!w||!lesson){ nav('#/tq/worlds'); return; }
  if(!isLessonUnlocked(lessonId)){ renderWorldMap(); return; }
  const steps = lesson.steps;
  const H = steps.length;
  let a=0, solvedDone=false, solvedSteps=[];
  let quizState = {}; // per-step transient UI state

  function quizChallengeCount(){ return steps.filter(s=>s.kind.startsWith('quiz-')).length; }

  function stepBody(step){
    const cardCls = 'card';
    if(step.kind.startsWith('quiz-')) return quizBody(step);
    if(step.kind==='intro') return `<div class="${cardCls}"><div class="badge-cat" style="background:${grad(w.gradient)}">Concept</div><h2 class="font-display" style="font-size:26px;margin:12px 0 4px">${step.title}</h2><p style="font-size:16px;color:var(--muted);line-height:1.7">${step.body}</p></div>`;
    if(step.kind==='uses') return `<div class="${cardCls}"><div class="badge-cat" style="background:${grad(w.gradient)}">Uses</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px">${step.items.map(it=>`<div style="display:flex;gap:10px;align-items:flex-start;padding:12px;border-radius:16px;background:var(--bg);border:1px solid var(--border)"><div style="width:22px;height:22px;border-radius:8px;background:${grad(w.gradient)};color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0">✓</div><span style="font-weight:600">${it}</span></div>`).join('')}</div></div>`;
    if(step.kind==='structure') return `<div class="${cardCls}"><div class="badge-cat" style="background:${grad(w.gradient)}">Structure</div>
      <div style="margin-top:16px;padding:20px;border-radius:16px;background:var(--bg);border:1px solid var(--border);text-align:center;font-family:monospace;font-size:18px">${step.formula}</div>
      ${step.parts?`<div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:16px">${step.parts.map(p=>`<div style="padding:10px 16px;border-radius:14px;color:#fff;background:${grad(p.color)}"><div style="font-size:9px;text-transform:uppercase;opacity:.85">${p.label}</div><div class="font-display" style="font-weight:800">${p.value}</div></div>`).join('')}</div>`:''}</div>`;
    if(step.kind==='timeline'){
      const posIdx = step.position==='past'?0:step.position==='present'?1:2;
      return `<div class="${cardCls}"><div class="badge-cat" style="background:${grad(w.gradient)}">Timeline</div>
        <div style="margin-top:20px"><div style="height:6px;border-radius:99px;background:linear-gradient(90deg,#fda4af,#6ee7b7,#c4b5fd)"></div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;text-align:center;margin-top:8px">
          ${['Past','Present','Future'].map((lbl,i)=>`<div><div style="margin:0 auto;width:20px;height:20px;border-radius:50%;background:${i===0?'#f43f5e':i===1?'#10b981':'#8b5cf6'};${i===posIdx?'box-shadow:0 0 0 5px '+(i===0?'#f43f5e33':i===1?'#10b98133':'#8b5cf633'):'opacity:.35'}"></div><div class="font-display" style="margin-top:6px;font-weight:800;${i===posIdx?'':'opacity:.4'}">${lbl}</div></div>`).join('')}
        </div></div>
        <div style="margin-top:20px;padding:16px;border-radius:14px;background:var(--bg);border:1px solid var(--border);text-align:center">${step.caption}</div></div>`;
    }
    if(step.kind==='examples') return `<div class="${cardCls}"><div class="badge-cat" style="background:${grad(w.gradient)}">Examples</div><div style="margin-top:16px;display:grid;gap:10px">${step.items.map(ex=>`<div style="padding:14px;border-radius:14px;background:var(--bg);border:1px solid var(--border);font-size:15.5px">“${ex}”</div>`).join('')}</div></div>`;
    if(step.kind==='note') return `<div class="${cardCls}" style="border:2px solid #fcd34d;background:linear-gradient(135deg,#fffbeb,#fef9c3)"><div class="badge-cat" style="background:#f59e0b">Good to know</div><p style="font-size:16px;margin-top:10px;color:#78350f">${step.body}</p></div>`;
    if(step.kind==='table') return `<div class="${cardCls}"><div class="badge-cat" style="background:${grad(w.gradient)}">Reference</div><div style="overflow-x:auto;margin-top:16px"><table><thead><tr>${step.columns.map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>${step.rows.map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
    if(step.kind==='list') return `<div class="${cardCls}"><div class="badge-cat" style="background:${grad(w.gradient)}">${step.title}</div><div class="chiprow" style="margin-top:16px">${step.items.map(it=>`<span class="wordchip" style="color:#fff;border:none;background:${grad(w.gradient)}">${it}</span>`).join('')}</div></div>`;
    if(step.kind==='summary') return `<div class="${cardCls}"><div class="badge-cat" style="background:${grad(w.gradient)}">Recap</div><div style="margin-top:16px;display:grid;gap:10px">${step.points.map(p=>`<div style="display:flex;gap:10px;align-items:flex-start"><div style="width:20px;height:20px;border-radius:50%;background:${grad(w.gradient)};color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;margin-top:2px">✓</div><span style="font-size:15.5px">${p}</span></div>`).join('')}</div></div>`;
    return '';
  }

  function quizBody(step){
    const st = quizState[a] || (quizState[a]={});
    if(step.kind==='quiz-choice'){
      const picked = st.picked;
      return `<div class="card"><div class="badge-cat" style="background:${grad(w.gradient)}">Challenge</div><h3 class="font-display" style="font-size:20px;margin:12px 0">${step.prompt}</h3>
        <div style="display:grid;gap:10px">${step.options.map((o,i)=>{
          let cls='opt-btn'; if(picked!==undefined){ if(i===step.answer) cls+=' correct'; else if(i===picked) cls+=' wrong'; }
          return `<button class="${cls}" ${picked!==undefined?'disabled':''} onclick="__qcPick(${i})"><span class="opt-letter">${String.fromCharCode(65+i)}</span>${o}</button>`;
        }).join('')}</div>
        ${picked!==undefined?`<div class="explain-box ${picked===step.answer?'ok':'bad'}"><b>${picked===step.answer?'✓ Correct':'✗ Not quite'}</b>${step.explain?`<div style="margin-top:4px">${step.explain}</div>`:''}</div>`:''}</div>`;
    }
    if(step.kind==='quiz-build'){
      if(!st.words){ const words = step.sentence.split(/\s+/); st.words = words.map((wd,i)=>({w:wd,i})).sort((x,y)=>(x.w.length*7+x.i*13)%11-(y.w.length*7+y.i*13)%11); st.placed=[]; st.wrong=false; }
      const words = step.sentence.split(/\s+/);
      return `<div class="card"><div class="badge-cat" style="background:${grad(w.gradient)}">Challenge</div><h3 class="font-display" style="font-size:20px;margin:12px 0">${step.prompt}</h3>
        <div class="dropzone" style="${st.wrong?'border-color:#f87171':''}">${st.placed.length===0?`<span style="color:var(--muted)">Your sentence appears here…</span>`:st.placed.map((wi,pos)=>`<button class="wordchip" style="color:#fff;border:none;background:${grad(w.gradient)}" onclick="__qbRemove(${pos})">${words[wi]}</button>`).join('')}</div>
        <div class="chiprow" style="margin-top:14px">${st.words.map(({w:wd,i})=>{ const used = st.placed.includes(i); return `<button class="wordchip ${used?'dim':''}" ${used?'disabled':''} onclick="__qbAdd(${i})">${wd}</button>`; }).join('')}</div>
        ${(st.wrong||st.done)?`<div class="explain-box ${st.done?'ok':'bad'}"><b>${st.done?'✓ Correct':'✗ Not quite'}</b>${st.done?`<div style="margin-top:4px">${step.sentence}</div>`:''}</div>${!st.done?`<button class="btn btn-outline" style="margin-top:10px" onclick="__qbReset()">↺ Reset the sentence</button>`:''}`:''}</div>`;
    }
    if(step.kind==='quiz-match'){
      if(!st.order){ st.order = step.pairs.map((p,i)=>({...p,i})).sort((x,y)=>x.right.length%5-y.right.length%5); st.matched={}; st.sel=null; st.shake=false; }
      return `<div class="card"><div class="badge-cat" style="background:${grad(w.gradient)}">Challenge</div><h3 class="font-display" style="font-size:20px;margin:12px 0">${step.prompt}</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
          <div>${step.pairs.map((p,i)=>{ const done=i in st.matched; const sel=st.sel===i; return `<button class="match-btn ${done?'done':''} ${sel&&!done?'sel':''}" ${done?'disabled':''} style="${sel&&!done?'background:'+grad(w.gradient):''}" onclick="__qmLeft(${i})">${p.left}</button>`; }).join('')}</div>
          <div>${st.order.map(p=>{ const done=p.i in st.matched; return `<button class="match-btn ${done?'done':''}" ${done?'disabled':''} onclick="__qmRight(${p.i})">${p.right}</button>`; }).join('')}</div>
        </div>
        ${Object.keys(st.matched).length===step.pairs.length?`<div class="explain-box ok"><b>✓ Correct</b><div style="margin-top:4px">All pairs matched.</div></div>`:''}</div>`;
    }
    return '';
  }

  function draw(){
    if(solvedDone){
      const summary = STATE.completed.includes(lesson.id);
      app.innerHTML = `${Topbar()}<main>
        <div class="world-card" style="background:${grad(w.gradient)};text-align:center;padding:44px 28px">
          <div style="font-size:60px">🎉</div>
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;opacity:.85;margin-top:8px">Lesson complete</div>
          <h2 class="font-display" style="font-size:34px;margin:6px 0">Beautifully done!</h2>
          <p style="opacity:.9">You've unlocked more of the story.</p>
          <div style="display:flex;gap:10px;justify-content:center;margin-top:20px;flex-wrap:wrap">
            <div style="background:#ffffff26;border:1px solid #ffffff40;border-radius:16px;padding:10px 18px">✨ +${XP_PER_LESSON} XP</div>
            <div style="background:#ffffff26;border:1px solid #ffffff40;border-radius:16px;padding:10px 18px">⭐ +${STARS_PER_LESSON} Stars</div>
            <div style="background:#ffffff26;border:1px solid #ffffff40;border-radius:16px;padding:10px 18px">🪙 +${COINS_PER_LESSON} Coins</div>
          </div>
          <div style="margin-top:26px;display:flex;gap:10px;justify-content:center">
            <a class="btn btn-outline" style="background:#fff;color:#1e293b" href="#/tq/world/${w.id}">Back to World Map</a>
          </div>
        </div>
      </main>`;
      return;
    }
    const step = steps[a];
    const qCount = quizChallengeCount();
    app.innerHTML = `
      <div style="background:${grad(w.gradient)};color:#fff;padding-bottom:24px">
        <main style="padding-top:18px">
          <a href="#/tq/world/${w.id}" style="font-size:13px;color:#ffffffcc">← Back to World Map</a>
          <div style="margin-top:10px">
            <div style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;opacity:.85">World ${w.index} · ${w.title}</div>
            <h1 class="font-display" style="font-size:30px;margin:4px 0">${lesson.title}</h1>
            <div style="opacity:.9">${lesson.subtitle}</div>
          </div>
          <div style="margin-top:16px">
            <div style="display:flex;justify-content:space-between;font-size:12px;opacity:.85;margin-bottom:5px"><span>Step ${Math.min(a+1,H)} of ${H}${qCount?` · ${qCount} practice challenges`:''}</span><span>${Math.round((a+ +!!solvedSteps.includes(a))/H*100)}%</span></div>
            <div style="height:8px;border-radius:99px;background:#ffffff30;overflow:hidden"><div style="height:100%;width:${(a/H)*100}%;background:#fff"></div></div>
          </div>
        </main>
      </div>
      <main style="max-width:700px;margin:0 auto;padding:24px 18px 90px">
        ${stepBody(step)}
        <div style="display:flex;justify-content:space-between;margin-top:24px">
          <button class="btn btn-outline" ${a===0?'disabled':''} onclick="__lessonPrev()">← Back</button>
          <button class="btn btn-primary" onclick="__lessonNext()">${step.kind.startsWith('quiz-')?'Skip':'Continue →'}</button>
        </div>
      </main>`;
  }

  window.__qcPick = (i)=>{
    const st = quizState[a];
    if(st.picked!==undefined) return;
    st.picked = i;
    const correct = i===steps[a].answer;
    recordQuizAnswer(correct, lesson.title, {kind: steps[a].kind, prompt: steps[a].prompt});
    if(correct) solvedSteps.push(a);
    draw();
  };
  window.__qbAdd = (i)=>{ const st=quizState[a]; if(st.done) return; st.placed=[...st.placed,i]; const step=steps[a]; if(st.placed.length===st.words.length){ const ok=st.placed.every((wi,pos)=>wi===pos); if(ok){ st.done=true; st.wrong=false; recordQuizAnswer(true); solvedSteps.push(a); } else { st.wrong=true; recordQuizAnswer(false, lesson.title, {kind: steps[a].kind, prompt: steps[a].prompt}); } } draw(); };
  window.__qbRemove = (pos)=>{ const st=quizState[a]; if(st.done) return; st.placed = st.placed.filter((_,p)=>p!==pos); draw(); };
  window.__qbReset = ()=>{ const st=quizState[a]; st.placed=[]; st.wrong=false; draw(); };
  window.__qmLeft = (i)=>{ const st=quizState[a]; if(i in st.matched) return; st.sel=i; draw(); };
  window.__qmRight = (i)=>{
    const st=quizState[a]; if(st.sel===null || i in st.matched) return;
    if(st.sel===i){ st.matched={...st.matched,[i]:true}; st.sel=null; if(Object.keys(st.matched).length===steps[a].pairs.length){ recordQuizAnswer(true); solvedSteps.push(a); } }
    else { st.shake=true; setTimeout(()=>{ st.shake=false; },400); st.sel=null; recordQuizAnswer(false, lesson.title, {kind: steps[a].kind, prompt: steps[a].prompt}); }
    draw();
  };
  window.__lessonNext = ()=>{
    if(a<H-1){ a++; draw(); }
    else { const res = completeLesson(lesson.id); solvedDone=true; draw(); }
  };
  window.__lessonPrev = ()=>{ if(a>0){ a--; draw(); } };

  draw();
}

/* ---------------- ACHIEVEMENTS ---------------- */
function renderAchievements(){
  const list = ACHIEVEMENTS.map(a=>({...a, earned: STATE.unlockedAchievements.includes(a.id)}));
  app.innerHTML = `${Topbar()}<main>
    <a href="#/tq/" style="font-size:13px;color:var(--muted)">← Home</a>
    <h1 class="font-display" style="font-size:28px;margin:10px 0 4px">Achievements</h1>
    <p style="color:var(--muted);margin:0 0 16px">${list.filter(a=>a.earned).length} / ${list.length} unlocked</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px">
      ${list.map(a=>`<div class="ach-card ${a.earned?'earned':''}">
        <div style="font-size:30px;${a.earned?'':'filter:grayscale(1);opacity:.6'}">${a.icon}</div>
        <div class="font-display" style="margin-top:8px">${a.title}</div>
        <div style="font-size:12.5px;color:var(--muted)">${a.description}</div>
        <div style="margin-top:8px;font-size:11px;font-weight:800;text-transform:uppercase;color:${a.earned?'#8b7bf0':'var(--muted)'}">${a.earned?'✓ Earned':'○ Locked'}</div>
      </div>`).join('')}
    </div>
  </main>`;
}

/* ---------------- SETTINGS ---------------- */
function renderSettings(){
  app.innerHTML = `${Topbar()}<main>
    <a href="#/tq/" style="font-size:13px;color:var(--muted)">← Home</a>
    <h1 class="font-display" style="font-size:28px;margin:10px 0 16px">Settings</h1>
    <div style="max-width:460px">
      <div class="toggle-row"><span>🌙 Dark mode</span><div class="switch ${STATE.darkMode?'on':''}" onclick="__toggleDark()"><div class="k"></div></div></div>
      <div class="toggle-row"><span>♿ High contrast</span><div class="switch ${STATE.highContrast?'on':''}" onclick="__toggleSetting('highContrast')"><div class="k"></div></div></div>
      <div class="toggle-row"><span>🔠 Large text</span><div class="switch ${STATE.largeText?'on':''}" onclick="__toggleSetting('largeText')"><div class="k"></div></div></div>
      <div class="toggle-row"><span>🎬 Reduced motion</span><div class="switch ${STATE.reducedMotion?'on':''}" onclick="__toggleSetting('reducedMotion')"><div class="k"></div></div></div>
      <div class="toggle-row"><span>🔊 Sound effects</span><div class="switch ${STATE.soundOn!==false?'on':''}" onclick="__toggleSetting('soundOn')"><div class="k"></div></div></div>
      <button class="btn btn-outline" style="width:100%;margin-top:10px;color:#e11d48;border-color:#e11d48" onclick="if(confirm('Erase all progress?')){resetProgress();render();}">Reset progress</button>
    </div>
  </main>`;
  window.__toggleDark = ()=>{ update({darkMode: !STATE.darkMode}); renderSettings(); };
  window.__toggleSetting = (key)=>{ update({[key]: !STATE[key]}); renderSettings(); };
}

function nav(h){ location.hash = h; }

/* ============================== INIT ============================== */
render();

}
window.SubjectApps = window.SubjectApps || {};
window.SubjectApps['tq'] = { init: tqInit };
