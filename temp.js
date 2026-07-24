
/* ---------- 題庫初始化 ---------- */
const STAGES = [
  {
    key:'word', label:'單字', desc:'看到單字，念出聲就好——不用完美，只要開口。',
    items:[
      {en:'candidate', zh:'應徵者、候選人', cat:'面試'},
      {en:'strength', zh:'優勢、強項', cat:'面試'},
      {en:'weakness', zh:'弱點', cat:'面試'},
      {en:'available', zh:'有空的、可到職的', cat:'面試'},
      {en:'internship', zh:'實習', cat:'面試'},
      {en:'agenda', zh:'議程', cat:'開會'},
      {en:'deadline', zh:'截止日期', cat:'開會'},
      {en:'collaborate', zh:'合作', cat:'開會'},
      {en:'update', zh:'進度更新', cat:'開會'},
      {en:'feedback', zh:'回饋、意見', cat:'開會'},
      {en:'research', zh:'研究', cat:'學術'},
      {en:'hypothesis', zh:'假設', cat:'學術'},
      {en:'methodology', zh:'研究方法', cat:'學術'},
      {en:'significant', zh:'顯著的', cat:'學術'},
      {en:'literature', zh:'文獻', cat:'學術'},
      {en:'introduce', zh:'介紹', cat:'社交'},
      {en:'industry', zh:'產業', cat:'社交'},
      {en:'network', zh:'建立人脈', cat:'社交'},
      {en:'appreciate', zh:'感激', cat:'社交'},
      {en:'colleague', zh:'同事', cat:'社交'}
    ]
  },
  {
    key:'phrase', label:'片語', desc:'兩三個字一組，開始練習講話的節奏感。',
    items:[
      {en:'apply for a position', zh:'應徵一個職缺', cat:'面試'},
      {en:'a good fit for', zh:'很適合...', cat:'面試'},
      {en:'work under pressure', zh:'在壓力下工作', cat:'面試'},
      {en:'take the initiative', zh:'主動採取行動', cat:'面試'},
      {en:'strengths and weaknesses', zh:'優點與缺點', cat:'面試'},
      {en:'be responsible for', zh:'負責...', cat:'開會'},
      {en:'follow up on', zh:'追蹤、後續跟進', cat:'開會'},
      {en:'meet the deadline', zh:'趕上截止日期', cat:'開會'},
      {en:'give an update on', zh:'報告...的進度', cat:'開會'},
      {en:'run into an issue', zh:'遇到一個問題', cat:'開會'},
      {en:'present my findings', zh:'發表我的研究結果', cat:'學術'},
      {en:'based on the data', zh:'根據這些數據', cat:'學術'},
      {en:'in terms of', zh:'就...方面而言', cat:'學術'},
      {en:'further research is needed', zh:'需要進一步研究', cat:'學術'},
      {en:'nice to meet you', zh:'很高興認識你', cat:'社交'},
      {en:'what do you do', zh:'你是做什麼工作的', cat:'社交'},
      {en:'keep in touch', zh:'保持聯絡', cat:'社交'},
      {en:'look forward to', zh:'期待', cat:'社交'}
    ]
  },
  {
    key:'sentence', label:'句子', desc:'完整句子，練語調跟停頓，講出一整句話。',
    items:[
      {en:"Could you tell me a bit about yourself?", zh:'可以簡單自我介紹一下嗎？', cat:'面試'},
      {en:"I'm currently finishing my master's degree in...", zh:'我目前正在完成…的碩士學位。', cat:'面試'},
      {en:"I believe my background makes me a strong fit for this role.", zh:'我相信我的背景讓我很適合這個職位。', cat:'面試'},
      {en:"Can you tell me more about the team I'd be working with?", zh:'可以多說一些我會加入的團隊嗎？', cat:'面試'},
      {en:"Could we push the meeting to tomorrow?", zh:'我們可以把會議延到明天嗎？', cat:'開會'},
      {en:"I'm not sure, let me check and get back to you.", zh:'我不確定，讓我確認後回覆你。', cat:'開會'},
      {en:"Could you clarify what the timeline looks like?", zh:'可以請你說明一下時程大概是怎樣嗎？', cat:'開會'},
      {en:"I'd like to walk you through my results.", zh:'我想跟你說明一下我的研究結果。', cat:'學術'},
      {en:"My research focuses on how X affects Y.", zh:'我的研究聚焦在X如何影響Y。', cat:'學術'},
      {en:"That's a great question, let me think about it.", zh:'這是個好問題，讓我想一下。', cat:'學術'},
      {en:"So, what brings you to this event?", zh:'那，是什麼讓你來參加這個活動的呢？', cat:'社交'},
      {en:"Thanks for your time, it was great talking to you.", zh:'謝謝你的時間，很高興跟你聊天。', cat:'社交'}
    ]
  },
  {
    key:'free', label:'自由回答', desc:'看到情境，自己講一句——沒有標準答案，講出來就是贏。',
    items:[
      {en:"Introduce yourself in 30 seconds, as if in a job interview.", zh:'用30秒自我介紹，想像是在面試場合。', cat:'面試'},
      {en:"Tell me why you're interested in this industry.", zh:'說說你為什麼對這個產業有興趣。', cat:'面試'},
      {en:"Describe a challenge you faced and how you handled it.", zh:'描述一個你遇到的挑戰，還有你怎麼處理的。', cat:'面試'},
      {en:"Explain a time you worked in a team.", zh:'描述一次你在團隊中合作的經驗。', cat:'開會'},
      {en:"Give a 1-minute status update on a made-up project.", zh:'假裝有個專案，做一分鐘的進度報告。', cat:'開會'},
      {en:"Explain your thesis topic to someone outside your field.", zh:'跟一個非本科系的人解釋你的論文主題。', cat:'學術'},
      {en:"Describe a challenge you faced during your research.", zh:'描述你在研究過程中遇到的一個挑戰。', cat:'學術'},
      {en:"Introduce yourself at a networking event.", zh:'想像在一場社交活動中自我介紹。', cat:'社交'}
    ]
  }
];

/* ---------- 本地儲存進度記憶 ---------- */
let savedStageIdx = localStorage.getItem('speakup_stageIdx');
let savedCat = localStorage.getItem('speakup_cat');
let savedCatProgressStr = localStorage.getItem('speakup_cat_progress');
let catProgress = savedCatProgressStr ? JSON.parse(savedCatProgressStr) : {};
let geminiApiKey = localStorage.getItem('speakup_apikey') || '';
let appMode = localStorage.getItem('speakup_appMode') || 'general';

function getSavedItemIdx(sIdx, cat) {
  const key = `${sIdx}_${cat}`;
  return catProgress[key] || 0;
}

let stageIdx = savedStageIdx ? parseInt(savedStageIdx, 10) : 0;
let activeCat = savedCat || 'all';
let itemIdx = getSavedItemIdx(stageIdx, activeCat);

function saveProgress(){
  localStorage.setItem('speakup_stageIdx', stageIdx);
  localStorage.setItem('speakup_cat', activeCat);
  const key = `${stageIdx}_${activeCat}`;
  catProgress[key] = itemIdx;
  localStorage.setItem('speakup_cat_progress', JSON.stringify(catProgress));
}

function setAppMode(mode) {
  appMode = mode;
  localStorage.setItem('speakup_appMode', appMode);
  
  el('tabGeneral').classList.toggle('active', mode === 'general');
  el('tabAI').classList.toggle('active', mode === 'ai');
  
  el('aiActions').style.display = mode === 'ai' ? 'block' : 'none';
  el('ladder').style.display = mode === 'ai' ? 'none' : 'flex';
  el('stageDesc').style.display = mode === 'ai' ? 'none' : 'block';
  
  activeCat = 'all';
  itemIdx = getSavedItemIdx(stageIdx, activeCat);
  saveProgress();
  render();
}

el('tabGeneral').onclick = () => setAppMode('general');
el('tabAI').onclick = () => setAppMode('ai');

let aiGeneratedItems = [];
try {
  const savedAI = localStorage.getItem('speakup_ai_items');
  if(savedAI) aiGeneratedItems = JSON.parse(savedAI);
} catch(e) {}

/* ---------- 題庫擴充 ---------- */
// 已存在的 en 集合（避免重複）
function existingEnSet(stage){
  const set = new Set();
  stage.items.forEach(it => set.add(it.en.toLowerCase()));
  return set;
}

// 初始化時將 WORD_BANK 的所有內容載入，確保所有類別都會顯示
function initBank(){
  if(typeof WORD_BANK === 'undefined') return;
  
  // 注入 AI 生成的題目
  aiGeneratedItems.forEach(item => {
    const targetKey = item._type || 'word';
    if(WORD_BANK[targetKey]) {
      WORD_BANK[targetKey].push(item);
    }
  });

  STAGES.forEach(stage => {
    const bankItems = WORD_BANK[stage.key];
    if(bankItems && bankItems.length){
      const existing = existingEnSet(stage);
      bankItems.forEach(item => {
        if(!existing.has(item.en.toLowerCase())){
          stage.items.push({...item});
          existing.add(item.en.toLowerCase());
        }
      });
    }
  });
}
initBank();

const DICT_API = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

let recognition = null;
let isRecording = false;
let accentPref = 'us';

const el = id => document.getElementById(id);

/* ---------- 字典 API 串接 (Free Dictionary API) ---------- */

async function fetchWordData(word){
  const clean = word.toLowerCase().trim();
  const url = DICT_API + encodeURIComponent(clean);
  const res = await fetch(url);
  if(!res.ok) throw new Error('查詢失敗 (' + res.status + ')');
  const data = await res.json();
  if(!Array.isArray(data) || !data.length) throw new Error('無資料');
  const entry = data[0];
  // 擷取音標與音檔
  const variants = {};
  const phonetics = entry.phonetics || [];
  // 全局音標
  const globalPhon = entry.phonetic || '';
  phonetics.forEach(p => {
    if(!p.audio) return;
    const audioUrl = p.audio;
    const isUS = audioUrl.includes('-us') || audioUrl.includes('_us');
    const isUK = audioUrl.includes('-uk') || audioUrl.includes('_uk');
    const key = isUS ? 'us' : isUK ? 'uk' : null;
    if(key && !variants[key]){
      variants[key] = { audio: audioUrl, phon: p.text || globalPhon };
    }
  });
  // 如果只有一個音檔但沒被分類
  if(!variants.us && !variants.uk && phonetics.length > 0){
    const p = phonetics.find(x => x.audio) || phonetics[0];
    variants.us = { audio: p.audio || '', phon: p.text || globalPhon };
  }
  // 如果連音檔都沒有，至少給音標
  if(!variants.us && !variants.uk && globalPhon){
    variants.us = { audio: '', phon: globalPhon };
  }
  return { zh: null, variants };
}

function getVariant(item){
  if(!item || !item.variants) return null;
  return item.variants[accentPref] || item.variants.us || item.variants.uk || null;
}

// 背景查詢單字資料（音檔、音標），完成後如果還在看同一題就重繪
function fetchAndEnrich(item){
  if(item._fetching || item._fetched) return;
  item._fetching = true;
  fetchWordData(item.en).then(data => {
    item.variants = data.variants;
    item._fetched = true;
  }).catch(() => {
    item._fetched = true;
  }).finally(() => {
    item._fetching = false;
    if(currentItem() === item) render();
  });
}

// 把音標字串拆成音節，並把重音節放大加粗
function renderPhonetics(phon){
  const block = el('phonBlock');
  const visual = el('phonVisual');
  if(!phon){ block.style.display = 'none'; visual.innerHTML = ''; return; }
  block.style.display = 'block';
  const clean = phon.replace(/^\/|\/$/g,'').trim().replace(/ɹ/g, 'r').replace(/ɡ/g, 'g');

  // 確保重音符號和句點都可以作為音節分隔
  // 先把重音符號替換成具有分隔功能的格式，例如在前面加上句點
  let marked = clean.replace(/([ˈˌ])/g, '.$1');
  // 移除連續的句點（例如原本就有句點的地方變成 ..）
  marked = marked.replace(/\.+/g, '.');
  // 移除開頭的句點
  marked = marked.replace(/^\./, '');

  const parts = marked.split('.').filter(Boolean);
  if(parts.length <= 1){
    // 單音節，直接顯示
    visual.innerHTML = '<span class="phon-raw">/' + clean + '/</span>';
    return;
  }

  const syllables = parts.map(syl => ({
    text: syl.replace(/[ˈˌ]/g,''),
    stressed: syl.includes('ˈ'),
    secondary: syl.includes('ˌ')
  }));

  visual.innerHTML = syllables.map(s => {
    const cls = s.stressed ? ' stressed' : '';
    return '<span class="syl' + cls + '">' + s.text + '</span>';
  }).join('<span class="dot"> · </span>');
}

function categoriesForMode(mode) {
  const set = new Set();
  STAGES.forEach(stg => {
    stg.items.forEach(it => {
      if(it.cat) {
        const isAI = it.cat.startsWith('(AI)');
        if(mode === 'ai' && isAI) set.add(it.cat);
        if(mode === 'general' && !isAI && stg === currentStage()) set.add(it.cat); // General mode is stage-specific
      }
    });
  });
  return Array.from(set);
}

function filteredItems(){
  if(appMode === 'ai') {
    let items = [];
    STAGES.forEach(stg => {
      stg.items.forEach(it => {
        if(it.cat && it.cat.startsWith('(AI)')) {
          if(activeCat === 'all' || it.cat === activeCat) items.push(it);
        }
      });
    });
    return items;
  } else {
    const stage = currentStage();
    const items = stage.items.filter(it => !it.cat || !it.cat.startsWith('(AI)'));
    if(activeCat === 'all') return items;
    return items.filter(it => it.cat === activeCat);
  }
}

function renderLadder(){
  const ladder = el('ladder');
  ladder.innerHTML = '';
  STAGES.forEach((s, i) => {
    const d = document.createElement('div');
    d.className = 'rung' + (i===stageIdx?' active':'');
    d.textContent = s.label;
    d.onclick = () => { stageIdx = i; activeCat = 'all'; itemIdx = getSavedItemIdx(stageIdx, activeCat); saveProgress(); render(); };
    ladder.appendChild(d);
  });
}

function renderCats(){
  const wrap = el('cats');
  wrap.innerHTML = '';
  const cats = categoriesForMode(appMode);
  const allPill = document.createElement('div');
  allPill.className = 'cat-pill' + (activeCat==='all'?' active':'');
  allPill.textContent = '全部';
  allPill.onclick = () => { activeCat='all'; itemIdx = getSavedItemIdx(stageIdx, 'all'); saveProgress(); render(); };
  wrap.appendChild(allPill);
  cats.forEach(c => {
    const displayName = c.startsWith('(AI) ') ? c.replace('(AI) ', '✨ ') : c;
    const p = document.createElement('div');
    p.className = 'cat-pill' + (activeCat===c?' active':'');
    p.textContent = displayName;
    p.onclick = () => { activeCat=c; itemIdx = getSavedItemIdx(stageIdx, c); saveProgress(); render(); };
    wrap.appendChild(p);
  });
}

function currentStage(){ return STAGES[stageIdx]; }
function currentItem(){
  const items = filteredItems();
  if(itemIdx >= items.length) itemIdx = 0;
  return items[itemIdx];
}

function render(){
  renderLadder();
  const stage = currentStage();
  el('stageDesc').textContent = stage.desc;
  renderCats();
  
  el('targetLabel').textContent = appMode === 'ai' ? 'AI 專屬情境' : (stage.label === '自由回答' ? '看情境,講一句' : '跟著念');
  
  const items = filteredItems();
  const item = items[itemIdx];
  if(!item){ el('target').textContent = '這個類別還沒有題目'; el('targetZh').textContent=''; el('targetCat').textContent=''; el('counter').textContent=''; renderPhonetics(null); return; }
  
  el('target').textContent = item.en;
  el('targetZh').textContent = item.zh || '';
  el('targetCat').textContent = item.cat ? (item.cat.startsWith('(AI) ') ? item.cat.replace('(AI) ', '✨ ') : item.cat) : '';
  el('counter').textContent = (itemIdx+1) + ' / ' + items.length;
  el('result').classList.remove('show');
  
  el('recBtn').innerHTML = '🎙';
  el('recBtn').classList.remove('recording');
  el('liveTranscript').textContent = '';

  renderPhonetics(getVariant(item) ? getVariant(item).phon : null);

  // 對所有單字（不含空格的英文）自動查字典取得音標
  if(!/\s/.test(item.en) && !item._fetched && !item._fetching){
    fetchAndEnrich(item);
  }
}

function speak(text){
  if(!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

// 播放發音：改為全面使用瀏覽器內建 TTS (speechSynthesis)
// 原因：1. 無雜音 (Free Dictionary 的 MP3 常有嚴重底噪)
//       2. 同步執行 (iOS Safari 嚴格禁止非同步或 Promise catch 內的語音合成，導致先前音檔失效時連備援 TTS 都播不出來)
function playAudio(item){
  if(!('speechSynthesis' in window)) return;
  speechSynthesis.cancel(); // 確保不會有聲音重疊
  const u = new SpeechSynthesisUtterance(item.en);
  u.lang = accentPref === 'uk' ? 'en-GB' : 'en-US';
  u.rate = 0.9;
  speechSynthesis.speak(u);
}

function levenshtein(a, b){
  const m = a.length, n = b.length;
  const dp = Array.from({length:m+1}, () => new Array(n+1).fill(0));
  for(let i=0;i<=m;i++) dp[i][0]=i;
  for(let j=0;j<=n;j++) dp[0][j]=j;
  for(let i=1;i<=m;i++){
    for(let j=1;j<=n;j++){
      dp[i][j] = a[i-1]===b[j-1] ? dp[i-1][j-1] : 1+Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  }
  return dp[m][n];
}

function normalize(s){
  return s.toLowerCase().replace(/[^\w\s']/g,'').trim();
}

function showResult(heardText){
  const item = currentItem();
  const isFree = currentStage().key === 'free';
  el('heard').textContent = heardText || '(沒聽到聲音)';
  el('result').classList.add('show');
  const fb = el('feedback');

  if(isFree){
    fb.className = 'feedback';
    fb.textContent = heardText ? '你講出來了——這就是重點,內容不用完美。' : '再試一次,講出你想到的任何一句話就好。';
    return;
  }

  if(!heardText){
    fb.className = 'feedback retry';
    fb.textContent = '沒聽清楚,再按一次錄音試試看。';
    return;
  }

  const a = normalize(heardText);
  const b = normalize(item.en);
  const dist = levenshtein(a, b);
  const closeness = 1 - dist / Math.max(a.length, b.length, 1);

  if(closeness > 0.85){
    fb.className = 'feedback';
    fb.textContent = '很接近了,講得不錯!';
  } else if(closeness > 0.5){
    fb.className = 'feedback retry';
    fb.textContent = '有講到重點,但跟原句有點差距,可以再跟讀一次原音。';
  } else {
    fb.className = 'feedback retry';
    fb.textContent = '差距比較大,先聽一次發音,再慢慢跟讀試試。';
  }
}

let SRClass = null;
let finalTranscript = '';
let gotResult = false;
let recStartTime = 0;
let recTimeoutTimer = null;
let micReady = false;

/* ---------- 麥克風預熱 ---------- */
async function warmUpMic(){
  if(micReady) return;
  try{
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach(t => t.stop());
    micReady = true;
  }catch(e){
    // 權限被拒或不支援,後續 SpeechRecognition 會處理
  }
}

function setupRecognition(){
  SRClass = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SRClass){
    el('unsupported').style.display = 'block';
    el('recBtn').disabled = true;
    return;
  }
}

function buildRecognition(){
  const r = new SRClass();
  r.lang = 'en-US';
  r.interimResults = true;
  r.continuous = false;
  r.maxAlternatives = 1;

  r.onresult = (e) => {
    // 關鍵修正：iOS Safari 不一定送出 isFinal=true
    // 因此持續儲存最新 transcript，不論 isFinal 狀態
    let interim = '';
    let final = '';
    for(let i = 0; i < e.results.length; i++){
      const t = e.results[i][0].transcript;
      if(e.results[i].isFinal) final += t;
      else interim += t;
    }
    // 優先用 final，沒有就用 interim
    finalTranscript = final || interim;
    // 只要有任何內容就算有結果
    if(finalTranscript) gotResult = true;
    // 即時顯示辨識文字
    el('liveTranscript').textContent = finalTranscript ? '聽到: ' + finalTranscript : '';
    // 收到結果就重置超時
    resetRecTimeout();
  };

  r.onspeechstart = () => {
    // 偵測到說話聲,重置超時
    resetRecTimeout();
  };

  r.onerror = (e) => {
    clearTimeout(recTimeoutTimer);
    const messages = {
      'not-allowed':'麥克風權限被拒絕,請到設定 > Safari > 麥克風開啟權限。',
      'no-speech':'沒偵測到說話聲,請靠近麥克風再試一次。',
      'audio-capture':'抓不到麥克風,請確認沒有其他 App 正在使用麥克風。',
      'network':'網路連線問題,語音辨識需要網路連線。',
      'aborted':''
    };
    const msg = messages[e.error];
    if(msg){
      // 標記已有結果以防 onend 重複處理
      gotResult = true;
      finalTranscript = '';
      showErrorMsg(msg);
    }
  };

  r.onend = () => {
    clearTimeout(recTimeoutTimer);
    isRecording = false;
    el('recBtn').innerHTML = '🎙';
    el('recBtn').classList.remove('recording');
    el('liveTranscript').textContent = '';
    // 關鍵修正：只要 finalTranscript 有內容就視為成功
    if(finalTranscript){
      showResult(finalTranscript);
    } else if(!gotResult){
      // 真的完全沒收到任何東西
      showErrorMsg('沒有聽到聲音。請確認麥克風正常,點擊錄音後立刻開口說話。');
    }
    // 如果 gotResult=true 但 finalTranscript='' → onerror 已經處理過了,不重複顯示
  };
  return r;
}

function resetRecTimeout(){
  clearTimeout(recTimeoutTimer);
  // 8 秒無新結果就自動停止
  recTimeoutTimer = setTimeout(() => {
    if(isRecording && recognition){
      try{ recognition.stop(); }catch(e){}
    }
  }, 8000);
}

function showErrorMsg(msg){
  el('heard').textContent = '';
  el('result').classList.add('show');
  const fb = el('feedback');
  fb.className = 'feedback retry';
  fb.textContent = msg;
}

function checkMobile(){
  const ua = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/.test(ua);
  const isAndroid = /Android/.test(ua);
}

el('playBtn').onclick = () => playAudio(currentItem());

function updateAccentButtons(){
  el('accentUS').classList.toggle('active', accentPref === 'us');
  el('accentUK').classList.toggle('active', accentPref === 'uk');
}
el('accentUS').onclick = () => { accentPref = 'us'; updateAccentButtons(); const it=currentItem(); if(it) renderPhonetics(getVariant(it) ? getVariant(it).phon : null); };
el('accentUK').onclick = () => { accentPref = 'uk'; updateAccentButtons(); const it=currentItem(); if(it) renderPhonetics(getVariant(it) ? getVariant(it).phon : null); };

/* ---------- 錄音：點擊切換模式 ---------- */
const MIN_REC_MS = 1500; // 最小錄音時間,防止太快 stop

function startRecording(){
  if(!SRClass) return;
  warmUpMic();
  speechSynthesis.cancel();
  isRecording = true;
  gotResult = false;
  finalTranscript = '';
  recStartTime = Date.now();
  el('recBtn').classList.add('recording');
  el('liveTranscript').textContent = '正在聆聽...';
  el('result').classList.remove('show');
  recognition = buildRecognition();
  try{ recognition.start(); }catch(e){
    isRecording = false;
    el('recBtn').innerHTML = '🎙';
    el('recBtn').classList.remove('recording');
    el('liveTranscript').textContent = '';
    showErrorMsg('無法啟動麥克風，重新整理頁面後再試一次。');
  }
  // 啟動超時保護
  resetRecTimeout();
}

function stopRecording(){
  if(!isRecording) return;
  // 確保至少錄 MIN_REC_MS 毫秒
  const elapsed = Date.now() - recStartTime;
  if(elapsed < MIN_REC_MS){
    setTimeout(() => {
      if(isRecording && recognition){
        try{ recognition.stop(); }catch(e){}
      }
    }, MIN_REC_MS - elapsed);
  } else {
    if(recognition) try{ recognition.stop(); }catch(e){}
  }
}

/* ---------- 錄音按鈕：點擊切換 ---------- */
const recBtn = el('recBtn');
recBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if(isRecording){
    stopRecording();
  } else {
    startRecording();
  }
});

el('skipBtn').onclick = () => {
  const items = filteredItems();
  itemIdx = (itemIdx + 1) % items.length;
  saveProgress();
  render();
};

el('prevBtn').onclick = () => {
  const items = filteredItems();
  itemIdx = (itemIdx - 1 + items.length) % items.length;
  saveProgress();
  render();
};

function populateCustomStageSelect(){
  const sel = el('customStage');
  sel.innerHTML = '';
  STAGES.forEach((s, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = s.label;
    sel.appendChild(opt);
  });
}

el('addBtn').onclick = async () => {
  const en = el('customEn').value.trim();
  const zh = el('customZh').value.trim();
  const idx = parseInt(el('customStage').value, 10);
  if(!en) return;
  const stage = STAGES[idx];
  const item = { en, zh, cat:'自訂' };
  const isSingleWord = !/\s/.test(en);
  const addBtn = el('addBtn');

  if(isSingleWord){
    addBtn.disabled = true;
    addBtn.textContent = '查詢中...';
    try{
      const data = await fetchWordData(en);
      item.variants = data.variants;
      item._fetched = true;
    }catch(err){
      item._fetched = true; // 查不到就交給 speechSynthesis,不擋住新增流程
    }
    addBtn.disabled = false;
  }

  stage.items.push(item);
  el('customEn').value = '';
  el('customZh').value = '';
  addBtn.textContent = '已加入 ✓';
  setTimeout(()=>{ addBtn.textContent = '加入'; }, 1200);
  if(idx === stageIdx) render();
};

/* ---------- AI 情境生成器 ---------- */
if(geminiApiKey) el('apiKeyInput').value = geminiApiKey;
el('apiKeyInput').addEventListener('input', (e) => {
  geminiApiKey = e.target.value.trim();
  localStorage.setItem('speakup_apikey', geminiApiKey);
});

el('openAiModalBtn').onclick = () => {
  el('aiModal').classList.add('show');
};
el('closeAiModalBtn').onclick = () => {
  el('aiModal').classList.remove('show');
};
el('aiModal').addEventListener('click', (e) => {
  if(e.target === el('aiModal')) el('aiModal').classList.remove('show');
});

el('aiGenerateBtn').onclick = async () => {
  const scenario = el('aiScenarioInput').value.trim();
  if(!geminiApiKey){ el('aiStatus').textContent = '⚠️ 請先輸入 Gemini API Key'; return; }
  if(!scenario){ el('aiStatus').textContent = '⚠️ 請輸入你想練習的情境'; return; }
  
  const btn = el('aiGenerateBtn');
  btn.disabled = true;
  btn.textContent = '⏳ 生成中，請稍候... (約需 5~10 秒)';
  el('aiStatus').textContent = '';

  const prompt = `你是一個專業的英文老師。請根據情境：「${scenario}」，生成相關的英文練習題目。
請嚴格輸出 JSON 陣列，包含 10 個單字、5 個片語、5 個句子。每個物件必須有 en, zh, cat 三個屬性。cat 必須固定填入 "(AI) ${scenario}"。
zh (中文) 必須是繁體中文(台灣)。
格式範例：
[
  {"en":"passport", "zh":"護照", "cat":"(AI) ${scenario}"},
  {"en":"check in", "zh":"報到", "cat":"(AI) ${scenario}"},
  {"en":"Where is the boarding gate?", "zh":"登機門在哪裡？", "cat":"(AI) ${scenario}"}
]
不要輸出任何 Markdown 語法（例如 \`\`\`json ），只要純 JSON 文字陣列即可。`;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${geminiApiKey}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        contents: [{ parts: [{text: prompt}] }],
        generationConfig: { response_mime_type: "application/json" }
      })
    });
    
    if(!res.ok) {
      let errText = '';
      try {
        const errJson = await res.json();
        errText = errJson.error.message;
      } catch(e) {
        errText = res.statusText;
      }
      throw new Error(`API 請求失敗 (${res.status}): ${errText}`);
    }
    
    const data = await res.json();
    let resultText = data.candidates[0].content.parts[0].text;
    resultText = resultText.replace(/```json/g, '').replace(/```/g, '').trim();
    const items = JSON.parse(resultText);
    
    const catName = `(AI) ${scenario}`;
    items.forEach(it => {
      if(!it.en) return;
      const wordCount = it.en.trim().split(/\s+/).length;
      let targetKey = 'word';
      if(wordCount > 3 || it.en.includes('?')) targetKey = 'sentence';
      else if(wordCount > 1) targetKey = 'phrase';
      
      const stage = STAGES.find(s => s.key === targetKey);
      if(stage) {
        const newItem = { en: it.en, zh: it.zh, cat: catName, _type: targetKey };
        stage.items.push(newItem);
        aiGeneratedItems.push(newItem);
        if(WORD_BANK[targetKey]) {
          WORD_BANK[targetKey].push(newItem);
        }
      }
    });
    
    localStorage.setItem('speakup_ai_items', JSON.stringify(aiGeneratedItems));
    
    el('aiStatus').textContent = '✅ 生成成功！已幫你切換到新類別。';
    setTimeout(() => {
      el('aiModal').classList.remove('show');
    }, 1500);
    
    activeCat = catName;
    itemIdx = 0;
    saveProgress();
    render();
    
  } catch(err) {
    el('aiStatus').textContent = '❌ 生成失敗：' + err.message;
  }
  
  btn.disabled = false;
  btn.textContent = '🚀 立即生成題目';
};

checkMobile();
initBank();
populateCustomStageSelect();
setupRecognition();
// Initial App mode setup
setAppMode(appMode);
