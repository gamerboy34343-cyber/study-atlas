// Vercel serverless function: proxies Study Bot questions to the Anthropic API.
// Keeps ANTHROPIC_API_KEY server-side only — never sent to the browser.
// Configure the key in Vercel: Project Settings -> Environment Variables -> ANTHROPIC_API_KEY.

const MODEL = 'claude-sonnet-5';

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
  const { question, context, docName, history } = payload;
  if (!question || typeof question !== 'string') {
    res.status(400).json({ error: 'Missing "question"' });
    return;
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
      res.status(resp.status).json({ error: msg });
      return;
    }
    const answer = (data.content || []).map((b) => (b.type === 'text' ? b.text : '')).join('').trim();
    res.status(200).json({ answer });
  } catch (err) {
    res.status(502).json({ error: 'Could not reach the AI provider: ' + err.message });
  }
};
