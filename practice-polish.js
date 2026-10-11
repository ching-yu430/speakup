/* Keep the prompt and pronunciation visible while practice feedback is collapsed. */
(() => {
  el('catTrigger').after(el('aiActions'));
  function updateInlinePhon() {
    const item=currentItem(),node=el('inlinePhon');
    const phon=getVariant(item)?.phon;
    const phrase=item && /\s/.test(item.en.trim());
    el('inlinePhonText').textContent=phon || (phrase ? '片語音標：點「音標與注音」選字' : item?._fetching ? '音標查詢中…' : item?._phonError || '音標待查詢');
    el('inlinePhonRetry').hidden=!!phon || !!phrase || !!item?._fetching;
    node.classList.toggle('phon-unavailable',!phon);
    // Hidden prompts must not be revealed through their phonetic transcription.
    node.hidden=!item || typeof isBlindMode!=='undefined' && isBlindMode && !el('target').classList.contains('revealed');
    el('targetCat').hidden=appMode==='ai';
    el('catTrigger').title=el('catTriggerText').textContent;
  }
  const originalPhon=renderPhonetics;
  renderPhonetics=function(...args){originalPhon(...args);updateInlinePhon();};
  const originalRender=render;
  render=function(...args){originalRender(...args);el('resultDetails').open=false;document.body.classList.remove('has-practice-result');updateInlinePhon();};
  function summarizeResult() {
    const text=el('feedback').textContent;
    el('resultStatus').textContent=text.includes('高度一致')?'辨識文字一致，繼續練習重音與語調。':el('heard').textContent?el('feedback').classList.contains('retry')?'文字有差異，可查看逐字比較。':'已完成這次開口練習。':text;
    el('resultStatus').title=text;
    el('detailTranscript').textContent=el('heard').textContent?'辨識內容：'+el('heard').textContent:'尚未取得辨識內容';
    document.body.classList.add('has-practice-result');
    updateInlinePhon();
  }
  const originalResult=showResult;
  showResult=function(...args){originalResult(...args);el('resultDetails').open=false;summarizeResult();};
  const originalError=showErrorMsg;
  showErrorMsg=function(...args){originalError(...args);el('resultDetails').open=false;summarizeResult();};
  const blindHandler=el('blindToggleBtn').onclick;
  el('blindToggleBtn').onclick=function(...args){blindHandler?.apply(this,args);updateInlinePhon();};
  el('closeResultDetails').onclick=()=>{el('resultDetails').open=false;el('resultDetails').querySelector('summary').focus();};
  el('resultDetails').addEventListener('toggle',()=>{if(el('resultDetails').open)el('closeResultDetails').focus();});
  el('resultDetails').querySelector('.result-detail-overlay').onclick=e=>{if(e.target.classList.contains('result-detail-overlay'))el('closeResultDetails').click();};
  el('inlinePhonRetry').onclick=()=>{const item=currentItem();if(item)fetchAndEnrich(item,true);};
  document.addEventListener('keydown',e=>{if(e.key==='Escape')el('resultDetails').open=false;});
  updateInlinePhon();
})();
