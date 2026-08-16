// Vercel serverless function: generates a short mixed-subject practice quiz
// from a student's recent wrong answers, via the Anthropic API.
// Configure ANTHROPIC_API_KEY in Vercel: Project Settings -> Environment Variables.

const MODEL = 'claude-sonnet-5';

const SUBJECT_NAMES = {
  bb: 'Chemistry (Bond Builder — ionic/covalent bonds)',
  cq: 'History (Empire Chronicles — medieval India)',
  mr: 'History (Maratha Quest — rise of the Marathas)',
  co: 'History (Colonial Quest — European powers and the Company Raj)',
  gq: 'Geography (Gaia Quest — natural resources)',
  tq: 'English (Tense Quest — the 12 tenses)',
  no: 'Math (Math Odyssey — number systems)',
  sc: 'Science (Curiosity Quest — cells to the cosmos)',
  hi: 'Hindi (Malhar — poetry, stories, and literature)',
  cv: 'Civics (Vote Quest — elections and democracy)',
  tr: 'Geography (Trade Quest — factors of production)',
};

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') { res.status(204).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'ANTHROPIC_API_KEY is not configured on this project. Add it in Vercel: Project Settings → Environment Variables.' });
    return;
  }

  const payload = req.body || {};
  const mistakes = Array.isArray(payload.mistakes) ? payload.mistakes.slice(0, 30) : [];
  if (mistakes.length === 0) {
    res.status(400).json({ error: 'No mistakes provided' });
    return;
  }

  const grouped = {};
  for (const m of mistakes) {
    if (!m || !m.subject || !m.topic) continue;
    const key = m.subject + '::' + m.topic;
    grouped[key] = (grouped[key] || 0) + 1;
  }
  const weakSpots = Object.entries(grouped)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([key, count]) => {
      const [subject, topic] = key.split('::');
      return `- ${SUBJECT_NAMES[subject] || subject}: "${topic}" (missed ${count}x)`;
    })
    .join('\n');

  const systemPrompt = [
    'You are a quiz generator for a study app called The Study Atlas, used by a middle/high school student.',
    'Given a list of topics the student has recently gotten wrong across several subjects, write a short mixed practice quiz of 6-8 NEW multiple-choice questions targeting those exact weak spots.',
    'Each question must be self-contained, factually correct, and appropriate for the subject and level implied by the topic name.',
    'Respond with ONLY a raw JSON array (no markdown fences, no commentary), where each element has this exact shape:',
    '{"subject": "<2-letter code from the list below>", "topic": "<short topic label>", "prompt": "<question text>", "options": ["<a>","<b>","<c>","<d>"], "answerIndex": <0-3>, "explanation": "<one sentence why>"}',
    'Valid subject codes: bb (Chemistry), cq (History), mr (History-Marathas), co (History-Colonial), gq (Geography), tq (English), no (Math), sc (Science), hi (Hindi), cv (Civics), tr (Geography-Trade).',
    'Exactly 4 options per question, only one correct.',
  ].join('\n');

  const userMessage = `The student's weak spots, most-missed first:\n${weakSpots}\n\nGenerate the quiz now.`;

  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 2048,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }],
      }),
    });

    const data = await resp.json();
    if (!resp.ok) {
      const msg = (data && data.error && data.error.message) || `Anthropic API error (${resp.status})`;
      res.status(resp.status).json({ error: msg });
      return;
    }
    const raw = (data.content || []).map((b) => (b.type === 'text' ? b.text : '')).join('').trim();
    const cleaned = raw.replace(/^```(json)?/i, '').replace(/```$/, '').trim();

    let questions;
    try {
      questions = JSON.parse(cleaned);
    } catch (e) {
      res.status(502).json({ error: 'The AI returned an unexpected format. Try again.' });
      return;
    }
    if (!Array.isArray(questions) || questions.length === 0) {
      res.status(502).json({ error: 'The AI did not return any questions. Try again.' });
      return;
    }

    res.status(200).json({ questions });
  } catch (err) {
    res.status(502).json({ error: 'Could not reach the AI provider: ' + err.message });
  }
};
