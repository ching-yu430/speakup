/* Speak Up: clearer navigation, daily practice and editable conversation drafts. */
(() => {
  const sections = {
    practice: ['general', 'ai', 'news'], conversation: ['roleplay'],
    review: ['random', 'weak', 'completed', 'favorites', 'weakpractice'], personal: ['progress', 'review']
  };
  const modeIds = { general:'tabGeneral', ai:'tabAI', news:'tabNews', roleplay:'tabRoleplay', random:'tabRandom', weak:'tabWeak', completed:'tabCompleted', favorites:'tabFavorites', progress:'tabProgress', review:'tabReview' };
  let section = Object.keys(sections).find(key => sections[key].includes(appMode)) || 'practice';
  const originalMode = setAppMode;
  function updateNavigation() {
    document.querySelectorAll('[data-section]').forEach(button => {
      button.classList.toggle('active', button.dataset.section === section);
      button.setAttribute('aria-current', button.dataset.section === section ? 'page' : 'false');
    });
    Object.entries(modeIds).forEach(([mode,id]) => { el(id).hidden = !sections[section].includes(mode); });
    el('modeDropdown').classList.add('section-menu');
    el('dailyHome').hidden = section !== 'practice' && !dailySession;
  }
  setAppMode = function(mode, ...args) {
    section = Object.keys(sections).find(key => sections[key].includes(mode)) || 'practice';
    originalMode(mode, ...args);
    updateNavigation();
  };
  document.querySelectorAll('[data-section]').forEach(button => {
    button.onclick = () => {
      if(section === button.dataset.section) return;
      const first = sections[button.dataset.section][0];
      el(modeIds[first]).click();
    };
  });
  el('modeTrigger').hidden = true;
  el('continueBtn').onclick = () => { setAppMode('general'); el('mainCard').scrollIntoView({behavior:'smooth',block:'start'}); };

  const originalRender = render;
  render = function(...args) {
    originalRender(...args);
    const item = currentItem();
    if(item) el('itemLearningState').textContent = isItemMastered(item.en) ? '已熟練 · 持續鞏固' : practiced[item.en] ? '已練過 · 待鞏固' : '新題目';
    updateDaily();
  };
  const originalShowResult = showResult;
  showResult = function(heard) {
    originalShowResult(heard);
    const item = currentItem();
    if(item && heard && dailySession?.items.some(it => it.en === item.en)) {
      dailySession.done = [...new Set([...dailySession.done,item.en])];
      lsSet('speakup_daily_session',JSON.stringify(dailySession));
    }
    if(item) { el('itemLearningState').textContent = isItemMastered(item.en) ? '已熟練 · 持續鞏固' : '已練過 · 待鞏固'; updateCatProgress(filteredItems()); }
    updateDaily();
  };

  let dailySession = safeParse(lsGet('speakup_daily_session'),null);
  if(dailySession?.date !== localDateStr() || !Array.isArray(dailySession?.items) || !Array.isArray(dailySession?.done)) dailySession = null;
  function updateDaily() {
    const due = Object.values(practiced).filter(it => (it.dueAt || 0) <= Date.now()).length;
    el('dailySummary').textContent = `今天有 ${due} 題到期複習。先複習 3 題，再練 3 個新句子，最後試著對話。`;
    const panel = el('dailySession');
    panel.hidden = !dailySession;
    if(!dailySession) return;
    const count = dailySession.done.length;
    panel.replaceChildren();
    const text = document.createElement('p');
    text.textContent = count >= dailySession.items.length ? `今日題目已練完：${count} 題！接著用一段短對話活用。` : `今日練習 ${count} / ${dailySession.items.length} 題 · 約 5 分鐘，可依自己的速度完成`;
    panel.appendChild(text);
    const next = document.createElement('button'); next.className='settings-btn settings-btn-secondary';
    next.textContent = count >= dailySession.items.length ? '進入短對話' : '繼續今日練習';
    next.onclick = () => {
      if(count >= dailySession.items.length) { setAppMode('roleplay'); el('rpScenarioInput').value='在咖啡店點餐，進行三輪簡短英文對話'; return; }
      enterDaily();
    };
    panel.appendChild(next);
  }
  function enterDaily() {
    randomReviewItems = dailySession.items;
    randomSessionDone = Object.fromEntries(dailySession.done.map(en => [en,true]));
    setAppMode('random'); activeCat='all'; itemIdx=Math.max(0,randomReviewItems.findIndex(it => !randomSessionDone[it.en])); render(true);
    el('mainCard').scrollIntoView({behavior:'smooth',block:'start'});
  }
  el('startDailyBtn').onclick = () => {
    if(!dailySession) {
      const due = Object.values(practiced).filter(it => (it.dueAt || 0) <= Date.now()).sort((a,b)=>(a.dueAt||0)-(b.dueAt||0)).slice(0,3);
      const sentences = STAGES.find(stage => stage.key === 'sentence') || STAGES.find(stage => stage.items.some(it => it.en.includes(' ')));
      const candidates = (sentences?.items || []).filter(it => !practiced[it.en]);
      const items = [...due,...candidates.slice(0,6-due.length).map(it=>({...it,stage:STAGES.indexOf(sentences)}))];
      if(!items.length) items.push(...STAGES[0].items.slice(0,6));
      dailySession={date:localDateStr(),items:[...new Map(items.map(it=>[it.en,it])).values()],done:[]};
      lsSet('speakup_daily_session',JSON.stringify(dailySession));
    }
    enterDaily();
  };

  el('aiModelInput').value=getAiModel();
  el('aiModelInput').onchange = e => {
    const value=e.target.value.trim();
    if(!/^[a-zA-Z0-9._-]+$/.test(value)) { el('aiConnectionStatus').textContent='模型名稱只可包含英文、數字、點、底線與連字號。'; return; }
    lsSet('speakup_ai_model',value);
  };
  el('testAiBtn').onclick=async () => {
    const status=el('aiConnectionStatus');
    if(!geminiApiKey) { status.textContent='請先輸入 API Key。'; el('apiKeyInput').focus(); return; }
    const button=el('testAiBtn'); button.disabled=true; status.textContent='檢查連線中…';
    try {
      const response=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(getAiModel())}`,{headers:{'x-goog-api-key':geminiApiKey},signal:AbortSignal.timeout(15000)});
      if(!response.ok) throw new Error(`連線失敗（${response.status}）。請確認金鑰、權限與模型名稱。`);
      status.textContent='連線成功，可以使用 AI 功能。生成額度仍以 Google 帳戶為準。';
    } catch(error) { status.textContent=error.name==='TimeoutError'?'連線逾時，請稍後重試。':error.message; }
    finally {button.disabled=false;}
  };
  el('aiSettingsLink').onclick=()=>{ closeAiModal(); el('settingsBtn').click(); el('aiConnectionCard').scrollIntoView({behavior:'smooth'}); };

  // Preserve playback preferences across reloads.
  const speed=lsGet('speakup_speed'); if(speed) {el('speedSlider').value=speed;el('speedSlider').dispatchEvent(new Event('input'));}
  const accent=lsGet('speakup_accent'); if(accent==='uk') el('accentUK').click();
  el('speedSlider').addEventListener('input',e=>lsSet('speakup_speed',e.target.value));
  ['US','UK'].forEach(code=>el('accent'+code).addEventListener('click',()=>lsSet('speakup_accent',code.toLowerCase())));
  const recordingObserver=new MutationObserver(()=>{
    [el('recBtn'),el('rpRecBtn')].forEach(button=>{
      const recording=button.classList.contains('recording');
      const label=recording?'停止錄音':'開始說話';
      if(button.querySelector('span')?.textContent!==label) button.innerHTML=`🎙<span>${label}</span>`;
      button.setAttribute('aria-label',label);button.setAttribute('aria-pressed',String(recording));
    });
  });
  [el('recBtn'),el('rpRecBtn')].forEach(button=>recordingObserver.observe(button,{attributes:true,attributeFilter:['class'],childList:true}));
  updateNavigation(); render();
})();

let rpLastRequest = null;
async function runRpRequest(contents) {
  if(rpRequestBusy) return false;
  rpLastRequest=contents; rpRequestBusy=true;
  el('rpSendBtn').disabled=true;el('rpRecBtn').disabled=true;el('rpRetryBtn').hidden=true;
  el('rpRestartBtn').disabled=true;
  el('rpStatus').textContent='AI 思考中...';
  try {
    const ok=await fetchRpResponse(contents);
    el('rpRetryBtn').hidden=ok;
    return ok;
  } finally {
    rpRequestBusy=false;el('rpSendBtn').disabled=false;el('rpRecBtn').disabled=!SRClass;el('rpRestartBtn').disabled=false;
  }
}
el('rpSendBtn').onclick=async ()=>{
  const input=el('rpReplyInput'),heard=input.value.trim();
  if(!heard || rpRequestBusy) return;
  if(!geminiApiKey) {el('rpStatus').textContent='請先到右上角設定輸入 API Key。';return;}
  if(rpIsRecording && rpSR) {try{rpSR.abort();}catch(e){} rpIsRecording=false;}
  speechSynthesis.cancel();
  const div=document.createElement('div');div.className='msg-user';div.textContent='你：'+heard;el('rpChat').appendChild(div);
  input.value='';
  const prompt=`我說了：${JSON.stringify(heard)}。請評估用字、文法與情境，不要把文字辨識當作發音評分。用繁體中文提供簡短 feedback，並用英文繼續對話。回傳 JSON：{"next_response_en":"","next_response_zh":"","feedback":""}`;
  const ok=await runRpRequest([...rpHistory,{role:'user',parts:[{text:prompt}]}]);
  if(!ok && !input.value) input.value=heard;
};
el('rpRetryBtn').onclick=async ()=>{if(rpLastRequest) {const ok=await runRpRequest(rpLastRequest);if(ok)el('rpReplyInput').value='';}};
el('rpRecBtn').disabled=!SRClass;
const originalRestart=el('rpRestartBtn').onclick;
el('rpRestartBtn').onclick=()=>{if(rpRequestBusy)return;originalRestart();rpLastRequest=null;el('rpReplyInput').value='';el('rpRetryBtn').hidden=true;};

if('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(registration=>{
    function showUpdate() {
      if(!registration.waiting || el('updateBanner')) return;
      const banner=document.createElement('div');banner.id='updateBanner';banner.setAttribute('role','status');
      const text=document.createElement('span');text.textContent='新版已準備好，練習紀錄會保留。';
      const button=document.createElement('button');button.className='settings-btn settings-btn-secondary';button.textContent='更新網頁';
      button.onclick=()=>{
        if(isRecording || rpIsRecording || rpRequestBusy) {text.textContent='請先結束錄音或等待 AI 回覆，再更新。';return;}
        navigator.serviceWorker.addEventListener('controllerchange',()=>location.reload(),{once:true});
        registration.waiting?.postMessage({type:'ACTIVATE_UPDATE'});
      };
      banner.append(text,button);document.querySelector('.wrap').prepend(banner);
    }
    showUpdate();registration.addEventListener('updatefound',()=>{
      const worker=registration.installing;
      worker?.addEventListener('statechange',()=>{if(worker.state==='installed'&&navigator.serviceWorker.controller)showUpdate();});
    });
  }).catch(()=>{});
}
