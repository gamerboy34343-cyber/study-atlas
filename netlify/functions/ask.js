// Netlify serverless function: proxies Study Bot questions to the Anthropic API.
// Keeps ANTHROPIC_API_KEY server-side only — never sent to the browser.
// Configure the key in Netlify: Site settings -> Environment variables -> ANTHROPIC_API_KEY.

const MODEL = 'claude-sonnet-5';

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

  const { question, context, docName, history } = payload;
  if (!question || typeof question !== 'string') {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing "question"' }) };
  }

  const contextText = typeof context === 'string' ? context.slice(0, 16000) : '';
  const systemPrompt = [
    'You are Study Bot, a helpful study assistant embedded in a student learning app called The Study Atlas.',
    docName ? `The student uploaded a PDF named "${docName}".` : 'No PDF has been uploaded.',
    'Answer the student\'s question using ONLY the provided excerpt from their PDF below.',
    'If the excerpt does not contain the answer, say so plainly instead of guessing.',
    'Keep answers concise and clear, suitable for a student studying the material. Use short paragraphs or bullet points where helpful.',
    '--- PDF EXCERPT START ---',
    contextText || '(no text extracted)',
    '--- PDF EXCERPT END ---',
  ].join('\n');

  const messages = [];
  if (Array.isArray(history)) {
    for (const m of history) {
      if (m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string') {
        messages.push({ role: m.role, content: m.content });
      }
    }
  }
  messages.push({ role: 'user', content: question });

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
        max_tokens: 1024,
        system: systemPrompt,
        messages,
      }),
    });

    const data = await resp.json();
    if (!resp.ok) {
      const msg = (data && data.error && data.error.message) || `Anthropic API error (${resp.status})`;
      return { statusCode: resp.status, headers, body: JSON.stringify({ error: msg }) };
    }
    const answer = (data.content || []).map((b) => (b.type === 'text' ? b.text : '')).join('').trim();
    return { statusCode: 200, headers, body: JSON.stringify({ answer }) };
  } catch (err) {
    return { statusCode: 502, headers, body: JSON.stringify({ error: 'Could not reach the AI provider: ' + err.message }) };
  }
};
