/* Compact practice layout and IPA lessons; all controls remain available without page scrolling. */
(() => {
  let previousFocus = null;
  function setPhonOpen(open) {
    const modal=el('phonModal');modal.hidden=!open;
    if(open){previousFocus=document.activeElement;el('closePhonBtn').focus();}
    else previousFocus?.focus?.();
  }
  const tokens=document.createElement('div');tokens.className='phon-word-picker';tokens.id='phonWordPicker';
  el('phonStatus').after(tokens);
  let selectedPhonWord='';
  function showWordPhonetics(word,force=false) {
    selectedPhonWord=word;
    const item=STAGES.flatMap(stage=>stage.items).find(item=>item.en.toLowerCase()===word.toLowerCase()) || {en:word};
    const key='speakup_phon_'+word.toLowerCase();
    const cached=safeParse(lsGet(key),null);
    const fallback=OFFLINE_PHONETICS[word.toLowerCase()];
    const phon=(cached?.[accentPref]||cached?.us||fallback?.[accentPref]||fallback?.us||getVariant(item))?.phon;
    el('phonModalTitle').textContent=word+' · 音標與注音';
    renderPhonetics(phon||null);
    if(phon&&!force)return;
    el('phonStatus').textContent='正在查詢 '+word+' 的音標…';
    el('retryPhonBtn').disabled=true;
    fetchWordData(word).then(data=>{
      lsSet(key,JSON.stringify(data.variants));item.variants=data.variants;
      if(selectedPhonWord===word){renderPhonetics(getVariant(item)?.phon||null);el('phonStatus').textContent='音標與注音近似提示';}
    }).catch(()=>{
      if(selectedPhonWord===word)el('phonStatus').textContent=phon?'線上查詢失敗，仍顯示已保存的音標。':'暫時查不到這個字的音標。可連網後重試，或先使用音標練習。';
    }).finally(()=>{el('retryPhonBtn').disabled=false;});
  }
  el('openPhonBtn').onclick=()=>{
    const item=currentItem();if(!item)return;
    const words=[...new Set((item.en.match(/[a-zA-Z]+(?:['’-][a-zA-Z]+)*/g)||[]))];
    tokens.replaceChildren();
    if(words.length>1)words.forEach(word=>{
      const button=document.createElement('button');button.className='phon-word';button.textContent=word;
      button.onclick=()=>showWordPhonetics(word);tokens.appendChild(button);
    });
    setPhonOpen(true);showWordPhonetics(words[0]||item.en);
  };
  el('closePhonBtn').onclick=()=>setPhonOpen(false);
  el('phonModal').onclick=e=>{if(e.target===el('phonModal'))setPhonOpen(false);};
  el('retryPhonBtn').onclick=()=>{if(selectedPhonWord)showWordPhonetics(selectedPhonWord,true);};
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){setPhonOpen(false);setDailyVisible(false);}});
  const addPanel=document.querySelector('.add-panel');
  if(addPanel)el('aiConnectionCard').after(addPanel);

  // Use Safari's current visual viewport, including changes to browser chrome and the keyboard.
  function updateViewport() {
    const height=window.visualViewport?.height||window.innerHeight;
    document.documentElement.style.setProperty('--practice-height',height+'px');
  }
  updateViewport();window.visualViewport?.addEventListener('resize',updateViewport);window.addEventListener('resize',updateViewport);

  let index=Math.max(0,Math.min(IPA_LESSONS.length-1,Number(lsGet('speakup_ipa_index',0))||0));
  let group='全部',testing=false,answer=null,correct=0,total=0,choices=[];
  const container=el('ipaContainer');
  el('modeDropdown').after(container);
  container.innerHTML=`<div class="ipa-heading"><h2>音標練習</h2><div class="ipa-mode"><button id="ipaLearnBtn">認識音標</button><button id="ipaQuizBtn">辨識測驗</button></div></div>
    <div class="ipa-toolbar"><label for="ipaGroup">分類</label><select id="ipaGroup"><option>全部</option><option>母音</option><option>雙母音</option><option>子音</option></select><button id="ipaPickerBtn">選音標</button></div>
    <div id="ipaContent" class="ipa-content"></div><div id="ipaResult" class="ipa-result" role="status"></div>
    <p class="ipa-gesture-hint">左右滑動換音標</p><div class="ipa-controls"><button id="ipaPrevBtn" class="nav-arrow" aria-label="上一個音標">←</button><span id="ipaCounter"></span><button id="ipaNextBtn" class="nav-arrow" aria-label="下一個音標">→</button></div>
    <div id="ipaPicker" class="practice-overlay" hidden><section class="practice-sheet" role="dialog" aria-modal="true" aria-label="選擇音標"><div class="sheet-heading"><h2>選擇音標</h2><button id="ipaPickerClose" class="sheet-close" aria-label="關閉音標選擇">✕</button></div><div id="ipaSymbolGrid" class="ipa-symbol-grid"></div></section></div>`;
  document.body.appendChild(el('ipaPicker'));
  const filtered=()=>IPA_LESSONS.filter(it=>group==='全部'||it.group===group);
  function sample(item,contrast=false) {
    // IPA alone is not a reliable TTS input. Demonstrate the complete example word instead.
    if(!('speechSynthesis' in window)){el('ipaResult').textContent='此瀏覽器沒有語音播放功能。';return;}
    speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(contrast?item.contrast:item.word);
    applyVoice(u,'en-US');u.rate=.75;speechSynthesis.speak(u);
  }
  function position(item) {
    if(item.symbol==='ə')return '第一音節的弱讀母音';
    if(item.symbol==='ɚ')return '結尾的弱讀母音';
    if(item.symbol==='ŋ')return '結尾子音';
    if(item.symbol==='ʒ')return '中間子音';
    return item.group==='子音'?'開頭子音':item.group==='雙母音'?'雙母音':'重讀母音';
  }
  function renderLesson() {
    const list=filtered();index=Math.min(index,list.length-1);const item=list[index];
    lsSet('speakup_ipa_index',IPA_LESSONS.indexOf(item));
    el('ipaLearnBtn').classList.toggle('active',!testing);el('ipaQuizBtn').classList.toggle('active',testing);
    el('ipaCounter').textContent=`${index+1} / ${list.length}`;
    el('ipaResult').textContent='';answer=null;
    if(!testing) {
      el('ipaContent').innerHTML=`<span class="ipa-group">美式英文 · ${escapeHtml(item.group)}</span><div class="ipa-symbol">/${escapeHtml(item.symbol)}/</div>
       <button id="ipaListen" class="ipa-example">🔊 ${escapeHtml(item.word)} <span>${escapeHtml(item.phon)}</span></button>
       <p class="ipa-hint">${escapeHtml(item.hint)}</p><div class="ipa-example-actions"><button id="ipaCompare">比較聽：${escapeHtml(item.contrast)} ${escapeHtml(item.other)}</button><button id="ipaPractice">🎙 跟讀例字</button></div>
       <p class="ipa-note">聽完整例字，留意${escapeHtml(position(item))}。語音辨識用於例字跟讀，不評估單獨音素。</p>`;
      el('ipaListen').onclick=()=>sample(item);el('ipaCompare').onclick=()=>sample(item,true);
      el('ipaPractice').onclick=()=>{
        if(isRecording||rpIsRecording)return;
        const entry={en:item.word,zh:'音標例字 /'+item.symbol+'/',cat:'音標例字',variants:OFFLINE_PHONETICS[item.word],_fetched:true};
        if(!STAGES[0].items.some(it=>it.en===entry.en&&it.cat===entry.cat))STAGES[0].items.push(entry);
        setAppMode('general');stageIdx=0;activeCat='音標例字';itemIdx=STAGES[0].items.filter(it=>it.cat==='音標例字').findIndex(it=>it.en===item.word);render(true);
      };
    } else {
      const pool=[item.symbol,item.other.replace(/\//g,''),...list.map(it=>it.symbol)];
      choices=[...new Set(pool)].slice(0,4);
      for(let i=choices.length-1;i>0;i--){const n=Math.floor(Math.random()*(i+1));[choices[i],choices[n]]=[choices[n],choices[i]];}
      el('ipaContent').innerHTML=`<p class="ipa-quiz-prompt">${escapeHtml(item.word)} 的${escapeHtml(position(item))}對應哪個音標？</p><button id="ipaListen" class="ipa-example">🔊 聽例字：${escapeHtml(item.word)}</button><div class="ipa-answers" id="ipaAnswers"></div><p class="ipa-note" id="ipaQuizScore">答完按右箭頭繼續。已答 ${total} 題，答對 ${correct} 題。</p>`;
      el('ipaListen').onclick=()=>sample(item);
      choices.forEach(symbol=>{
        const button=document.createElement('button');button.textContent='/'+symbol+'/';button.onclick=()=>{
          if(answer!==null)return;answer=symbol;total++;if(symbol===item.symbol)correct++;
          button.classList.add(symbol===item.symbol?'correct':'incorrect');
          el('ipaResult').textContent=(symbol===item.symbol?'答對了！':'這題是 /'+item.symbol+'/。')+' '+item.hint;
          el('ipaQuizScore').textContent=`答完按右箭頭繼續。已答 ${total} 題，答對 ${correct} 題。`;
          el('ipaAnswers').querySelectorAll('button').forEach(b=>{b.disabled=true;if(b.textContent==='/'+item.symbol+'/')b.classList.add('correct');});
        };el('ipaAnswers').appendChild(button);
      });
    }
  }
  function move(step) {if(testing&&answer===null){el('ipaResult').textContent='請先選擇一個音標。';return;}index=(index+step+filtered().length)%filtered().length;renderLesson();}
  // Keep vertical reading scroll native; a deliberate horizontal gesture changes the lesson.
  let swipeStart=null;
  container.addEventListener('touchstart',e=>{
    if(e.touches.length!==1 || e.target.closest('button,input,select,textarea,.practice-overlay')) {swipeStart=null;return;}
    const touch=e.touches[0];swipeStart={x:touch.clientX,y:touch.clientY,time:Date.now()};
  },{passive:true});
  container.addEventListener('touchend',e=>{
    const start=swipeStart;swipeStart=null;if(!start||e.changedTouches.length!==1)return;
    const touch=e.changedTouches[0],dx=touch.clientX-start.x,dy=touch.clientY-start.y;
    if(Date.now()-start.time>900 || Math.abs(dx)<48 || Math.abs(dx)<Math.abs(dy)*1.5)return;
    move(dx<0?1:-1);
  },{passive:true});
  container.addEventListener('touchcancel',()=>{swipeStart=null;},{passive:true});
  el('ipaPrevBtn').onclick=()=>move(-1);el('ipaNextBtn').onclick=()=>move(1);
  el('ipaLearnBtn').onclick=()=>{testing=false;renderLesson();};el('ipaQuizBtn').onclick=()=>{testing=true;renderLesson();};
  el('ipaGroup').onchange=e=>{group=e.target.value;index=0;renderLesson();};
  el('ipaPickerBtn').onclick=()=>{
    el('ipaPicker').hidden=false;el('ipaSymbolGrid').replaceChildren();
    filtered().forEach((item,n)=>{const button=document.createElement('button');button.textContent='/'+item.symbol+'/';button.onclick=()=>{index=n;el('ipaPicker').hidden=true;renderLesson();};el('ipaSymbolGrid').appendChild(button);});
    el('ipaPickerClose').focus();
  };
  el('ipaPickerClose').onclick=()=>{el('ipaPicker').hidden=true;el('ipaPickerBtn').focus();};
  renderLesson();
})();
