// Netlify serverless function: generates an AI review quiz covering everything
// taught in one module (world) of a subject, used as a required checkpoint
// before the next module unlocks.
// Configure ANTHROPIC_API_KEY in Netlify: Site settings -> Environment variables.

const MODEL = 'claude-sonnet-5';

const SUBJECT_NAMES = {
  bb: 'Chemistry (Bond Builder — ionic/covalent bonds)',
  cq: 'History (Empire Chronicles — medieval India)',
  gq: 'Geography (Gaia Quest — natural resources)',
  tq: 'English (Tense Quest — the 12 tenses)',
  no: 'Math (Math Odyssey — number systems)',
};

exports.handler = async function (event) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'ANTHROPIC_API_KEY is not configured on this site. Add it in Netlify: Site settings → Environment variables.' }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (e) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const subject = payload.subject;
  const moduleTitle = typeof payload.moduleTitle === 'string' ? payload.moduleTitle.slice(0, 200) : '';
  const lessonTitles = Array.isArray(payload.lessonTitles) ? payload.lessonTitles.slice(0, 20) : [];
  if (!SUBJECT_NAMES[subject] || !moduleTitle || lessonTitles.length === 0) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing subject, moduleTitle, or lessonTitles' }) };
  }

  const systemPrompt = [
    'You are a quiz generator for a study app called The Study Atlas, used by a middle/high school student.',
    'The student just finished every lesson in one module and must pass a review quiz before the next module unlocks.',
    'Write 5 multiple-choice review questions covering the module as a whole — a fair, representative check of the material, not just one lesson.',
    'Each question must be self-contained, factually correct, and appropriate for the subject and level implied by the lesson list.',
    'Respond with ONLY a raw JSON array (no markdown fences, no commentary), where each element has this exact shape:',
    '{"prompt": "<question text>", "options": ["<a>","<b>","<c>","<d>"], "answerIndex": <0-3>, "explanation": "<one sentence why>"}',
    'Exactly 4 options per question, only one correct.',
  ].join('\n');

  const userMessage = `Subject: ${SUBJECT_NAMES[subject]}\nModule: ${moduleTitle}\nLessons covered:\n${lessonTitles.map(t => '- ' + t).join('\n')}\n\nGenerate the 5-question review quiz now.`;

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
        max_tokens: 1536,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }],
      }),
    });

    const data = await resp.json();
    if (!resp.ok) {
      const msg = (data && data.error && data.error.message) || `Anthropic API error (${resp.status})`;
      return { statusCode: resp.status, headers, body: JSON.stringify({ error: msg }) };
    }
    const raw = (data.content || []).map((b) => (b.type === 'text' ? b.text : '')).join('').trim();
    const cleaned = raw.replace(/^```(json)?/i, '').replace(/```$/, '').trim();

    let questions;
    try {
      questions = JSON.parse(cleaned);
    } catch (e) {
      return { statusCode: 502, headers, body: JSON.stringify({ error: 'The AI returned an unexpected format. Try again.' }) };
    }
    if (!Array.isArray(questions) || questions.length === 0) {
      return { statusCode: 502, headers, body: JSON.stringify({ error: 'The AI did not return any questions. Try again.' }) };
    }

    return { statusCode: 200, headers, body: JSON.stringify({ questions }) };
  } catch (err) {
    return { statusCode: 502, headers, body: JSON.stringify({ error: 'Could not reach the AI provider: ' + err.message }) };
  }
};
