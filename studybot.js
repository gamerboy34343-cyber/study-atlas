/* ============================== STUDY BOT ============================== */
const SB_STORE_KEY = 'study-atlas-studybot-chats-v1';
let sbChats = [];         // [{id, title, pdfName, pdfText, pdfPages, messages:[{role,content}], updatedAt}]
let sbActiveChatId = null;
let sbPdfJsLoaded = false;

function sbMakeChat(){
  return { id: 'c'+Date.now().toString(36)+Math.random().toString(36).slice(2,7), title:'New chat', pdfName:'', pdfText:'', pdfPages:[], messages:[], updatedAt: Date.now() };
}

function sbLoad(){
  try{
    const raw = localStorage.getItem(SB_STORE_KEY);
    if(raw){
      const data = JSON.parse(raw);
      sbChats = Array.isArray(data.chats) ? data.chats : [];
      sbActiveChatId = data.activeId || null;
    }
  }catch(e){ sbChats = []; }
  if(sbChats.length === 0) sbChats.push(sbMakeChat());
  if(!sbChats.find(c=>c.id===sbActiveChatId)) sbActiveChatId = sbChats[0].id;
}

function sbSave(){
  try{
    localStorage.setItem(SB_STORE_KEY, JSON.stringify({chats: sbChats, activeId: sbActiveChatId}));
  }catch(e){
    // storage quota likely exceeded (large PDFs) — drop the oldest chat's extracted text and retry once
    if(sbChats.length > 1){
      const oldest = sbChats.reduce((a,b)=> a.updatedAt < b.updatedAt ? a : b);
      if(oldest.id !== sbActiveChatId){ oldest.pdfText=''; oldest.pdfPages=[]; }
      try{ localStorage.setItem(SB_STORE_KEY, JSON.stringify({chats: sbChats, activeId: sbActiveChatId})); }catch(e2){}
    }
  }
}

function sbActiveChat(){ return sbChats.find(c=>c.id===sbActiveChatId) || sbChats[0]; }

function sbNewChat(){
  const chat = sbMakeChat();
  sbChats.unshift(chat);
  sbActiveChatId = chat.id;
  sbSave();
  renderStudyBot();
}

function sbSwitchChat(id){
  if(id === sbActiveChatId) return;
  sbActiveChatId = id;
  sbSave();
  renderStudyBot();
}

function sbDeleteChat(id, ev){
  if(ev) ev.stopPropagation();
  if(!confirm('Delete this chat? This cannot be undone.')) return;
  sbChats = sbChats.filter(c=>c.id!==id);
  if(sbChats.length === 0) sbChats.push(sbMakeChat());
  if(sbActiveChatId === id) sbActiveChatId = sbChats[0].id;
  sbSave();
  renderStudyBot();
}

function loadPdfJs(){
  return new Promise((resolve, reject) => {
    if(window.pdfjsLib){ sbPdfJsLoaded = true; resolve(); return; }
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    s.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      sbPdfJsLoaded = true;
      resolve();
    };
    s.onerror = () => reject(new Error('Could not load the PDF reader library. Check your internet connection.'));
    document.head.appendChild(s);
  });
}

function sbRelTime(ts){
  const diff = Date.now() - ts;
  const m = Math.floor(diff/60000);
  if(m < 1) return 'just now';
  if(m < 60) return m+'m ago';
  const h = Math.floor(m/60);
  if(h < 24) return h+'h ago';
  const d = Math.floor(h/24);
  return d+'d ago';
}

function renderStudyBot(){
  if(sbChats.length === 0) sbLoad();
  const chat = sbActiveChat();

  content.innerHTML = `<div class="bot-wrap">
    <div class="bot-sidebar">
      <div class="bot-sidebar-header"><strong style="font-size:13px;color:var(--shell-muted);text-transform:uppercase;letter-spacing:.05em">Chats</strong></div>
      <button class="bot-new-chat-btn" onclick="sbNewChat()">+ New chat</button>
      <div class="bot-chat-list">
        ${sbChats.slice().sort((a,b)=>b.updatedAt-a.updatedAt).map(c=>`
          <div class="bot-chat-item ${c.id===chat.id?'active':''}" onclick="sbSwitchChat('${c.id}')">
            <div class="t">${sbEscape(c.title || 'New chat')}</div>
            <div class="s">${c.pdfName ? '📄 '+sbEscape(c.pdfName) : 'No PDF yet'} · ${sbRelTime(c.updatedAt)}</div>
            <button class="del" onclick="sbDeleteChat('${c.id}', event)" title="Delete chat">✕</button>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="bot-main">
      <div class="home-hero" style="margin-bottom:16px">
        <div class="badge">🤖</div>
        <h1 class="font-display" style="font-size:28px">Study Bot</h1>
        <p>Upload a PDF — your notes, a textbook chapter, anything — and ask it questions.</p>
      </div>
      <div class="bot-upload" id="sb-upload-area">
        ${chat.pdfName ? `
          <div class="bot-doc-chip">📄 ${sbEscape(chat.pdfName)} <button onclick="sbClearPdf()" style="background:none;border:none;color:inherit;font-weight:800;cursor:pointer">✕</button></div>
          <div style="margin-top:8px;font-size:12.5px;color:var(--shell-muted)">${chat.pdfPages.length} page${chat.pdfPages.length===1?'':'s'} extracted · ready to answer questions</div>
        ` : `
          <div style="font-size:34px">📄</div>
          <div style="margin-top:8px;font-weight:700">Upload a PDF to get started</div>
          <div style="font-size:12.5px;color:var(--shell-muted);margin-top:4px">Text is extracted right in your browser — the file itself is never uploaded anywhere.</div>
          <input type="file" id="sb-file-input" accept="application/pdf">
          <div id="sb-upload-status" style="margin-top:10px;font-size:13px;color:var(--shell-muted)"></div>
        `}
      </div>
      <div class="bot-chat" id="sb-chat">
        ${chat.messages.length===0 ? `<div style="text-align:center;color:var(--shell-muted);font-size:13.5px;margin-top:20px">${chat.pdfName ? 'Ask a question about your PDF below.' : 'Upload a PDF above, then ask away.'}</div>` : ''}
        ${chat.messages.map(m=>`<div class="bot-msg ${m.role==='user'?'user':m.role==='error'?'error':'bot'}">${sbEscape(m.content)}</div>`).join('')}
      </div>
      <div class="bot-inputrow">
        <input type="text" id="sb-question" placeholder="${chat.pdfName?'Ask a question about the PDF…':'Upload a PDF first…'}" ${chat.pdfName?'':'disabled'} onkeydown="if(event.key==='Enter') sbAsk()">
        <button onclick="sbAsk()" ${chat.pdfName?'':'disabled'} id="sb-ask-btn">Ask</button>
      </div>
    </div>
  </div>`;

  const fileInput = document.getElementById('sb-file-input');
  if(fileInput) fileInput.addEventListener('change', sbHandleFile);
  const chatEl = document.getElementById('sb-chat');
  if(chatEl) chatEl.scrollTop = chatEl.scrollHeight;
}

function sbEscape(s){
  const d = document.createElement('div'); d.textContent = s; return d.innerHTML;
}

async function sbHandleFile(e){
  const file = e.target.files[0];
  if(!file) return;
  const chat = sbActiveChat();
  const statusEl = document.getElementById('sb-upload-status');
  try{
    statusEl.textContent = 'Loading PDF reader…';
    await loadPdfJs();
    statusEl.textContent = 'Extracting text…';
    const buf = await file.arrayBuffer();
    const pdf = await window.pdfjsLib.getDocument({data: buf}).promise;
    const pages = [];
    for(let i=1;i<=pdf.numPages;i++){
      statusEl.textContent = `Extracting text… page ${i} of ${pdf.numPages}`;
      const page = await pdf.getPage(i);
      const tc = await page.getTextContent();
      const text = tc.items.map(it=>it.str).join(' ');
      pages.push({page:i, text});
    }
    chat.pdfPages = pages;
    chat.pdfText = pages.map(p=>p.text).join('\n\n');
    chat.pdfName = file.name;
    chat.messages = [];
    if(!chat.title || chat.title === 'New chat'){
      chat.title = file.name.replace(/\.pdf$/i, '').slice(0, 40);
    }
    chat.updatedAt = Date.now();
    sbSave();
    renderStudyBot();
  }catch(err){
    statusEl.textContent = '';
    alert('Could not read that PDF: ' + err.message);
  }
}

function sbClearPdf(){
  const chat = sbActiveChat();
  chat.pdfText=''; chat.pdfName=''; chat.pdfPages=[]; chat.messages=[];
  chat.title = 'New chat';
  chat.updatedAt = Date.now();
  sbSave();
  renderStudyBot();
}

/* naive keyword-overlap chunk selection: pick the most relevant paragraphs so we don't
   send the whole PDF (and its token cost) on every question. */
function sbSelectContext(pdfText, question, maxChars){
  const paras = pdfText.split(/\n\s*\n/).map(p=>p.trim()).filter(p=>p.length>20);
  if(paras.join('').length <= maxChars) return pdfText;
  const qWords = question.toLowerCase().match(/[a-z0-9]{3,}/g) || [];
  const scored = paras.map(p=>{
    const lower = p.toLowerCase();
    let score = 0;
    for(const w of qWords) if(lower.includes(w)) score++;
    return {p, score};
  });
  scored.sort((a,b)=>b.score-a.score);
  let out = '', used = 0;
  for(const {p} of scored){
    if(used + p.length > maxChars) continue;
    out += p + '\n\n'; used += p.length;
    if(used >= maxChars*0.9) break;
  }
  return out || paras.slice(0, 5).join('\n\n').slice(0, maxChars);
}

async function sbAsk(){
  const input = document.getElementById('sb-question');
  const question = input.value.trim();
  if(!question) return;
  const chat = sbActiveChat();
  input.value='';
  chat.messages.push({role:'user', content: question});
  if(chat.title === 'New chat' || !chat.title) chat.title = question.slice(0, 40);
  chat.updatedAt = Date.now();
  sbSave();
  renderStudyBot();
  const btn = document.getElementById('sb-ask-btn');
  btn.disabled = true;
  const chatEl = document.getElementById('sb-chat');
  chatEl.insertAdjacentHTML('beforeend', `<div class="bot-msg bot" id="sb-typing"><span class="typing-dots"><span></span><span></span><span></span></span></div>`);
  chatEl.scrollTop = chatEl.scrollHeight;

  try{
    const context = sbSelectContext(chat.pdfText, question, 12000);
    const res = await fetch('/.netlify/functions/ask', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ question, context, docName: chat.pdfName, history: chat.messages.slice(-6) })
    });
    if(!res.ok){
      const errText = await res.text().catch(()=> '');
      throw new Error(`Server returned ${res.status}. ${errText.slice(0,200)}`);
    }
    const data = await res.json();
    chat.messages.push({role:'assistant', content: data.answer || '(no answer returned)'});
  }catch(err){
    let msg = err.message || String(err);
    if(location.protocol === 'file:'){
      msg = "Study Bot's AI needs the site deployed to Netlify with the /netlify/functions/ask function and ANTHROPIC_API_KEY configured — it can't reach that from a local file. Try it after deploying.";
    }
    chat.messages.push({role:'error', content: '⚠️ ' + msg});
  }
  chat.updatedAt = Date.now();
  sbSave();
  document.getElementById('sb-ask-btn') && (document.getElementById('sb-ask-btn').disabled = false);
  renderStudyBot();
}
