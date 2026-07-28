function lsGet(key, defVal = null) {
  try { return localStorage.getItem(key) || defVal; } catch(e) { return defVal; }
}
function lsSet(key, val) {
  try { localStorage.setItem(key, val); } catch(e) {}
}

// 用「使用者所在時區」的日期,而不是 UTC 日期。
// toISOString() 會用 UTC 時間,對臺灣(UTC+8)來說,每天 00:00~08:00 之間
// 算出來的日期其實還是「昨天」,導致連續天數/今日題數在這段時間算錯。
function localDateStr(d = new Date()){
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// 保護用:localStorage 裡的資料萬一損毀(例如匯入的備份檔壞掉、手動改壞),
// 直接 JSON.parse 會丟出例外,讓整個頁面在載入階段就整個掛掉。
// 用這個包一層,壞掉時安靜地回傳預設值,不會拖垮其他功能。
function safeParse(str, fallback){
  try {
    const v = JSON.parse(str);
    return (v === null || v === undefined) ? fallback : v;
  } catch(e) { return fallback; }
}

const el = id => document.getElementById(id);

/* ---------- 頂部三顆選單按鈕：各自獨立展開/收合 ---------- */
const DROPDOWNS = {
  mode:  { panel: 'modeDropdown',  trigger: 'modeTrigger'  },
  stage: { panel: 'stageDropdown', trigger: 'stageTrigger' },
  cat:   { panel: 'catDropdown',   trigger: 'catTrigger'   }
};

function closeDropdown(name){
  const d = DROPDOWNS[name];
  el(d.panel).classList.remove('open');
  el(d.trigger).classList.remove('open');
}
function toggleDropdown(name){
  const wasOpen = el(DROPDOWNS[name].panel).classList.contains('open');
  Object.keys(DROPDOWNS).forEach(closeDropdown);
  if(!wasOpen){
    el(DROPDOWNS[name].panel).classList.add('open');
    el(DROPDOWNS[name].trigger).classList.add('open');
  }
}
el('modeTrigger').onclick = () => toggleDropdown('mode');
el('stageTrigger').onclick = () => toggleDropdown('stage');
el('catTrigger').onclick = () => toggleDropdown('cat');

// 選了模式/階段/分類之後，短暫停留讓使用者看到選取狀態，再自動收合該面板
el('modeDropdown').addEventListener('click', (e) => {
  if(e.target.closest('.app-tab')) setTimeout(() => closeDropdown('mode'), 150);
});
el('stageDropdown').addEventListener('click', (e) => {
  if(e.target.closest('.rung')) setTimeout(() => closeDropdown('stage'), 150);
});
el('catDropdown').addEventListener('click', (e) => {
  if(e.target.closest('.cat-pill')) setTimeout(() => closeDropdown('cat'), 150);
});

/* ---------- 搜尋單字/片語 ---------- */
function closeSearchPanel(){
  el('searchPanel').classList.remove('open');
  el('searchBtn').classList.remove('open');
}
function searchAllItems(query){
  const qLower = query.trim().toLowerCase();
  const qRaw = query.trim();
  if(!qLower) return [];
  const seen = new Set();
  const results = [];
  STAGES.forEach(stage => {
    if(stage.key === 'favorites') return; // 收藏是既有題目的副本,跳過避免同一個字出現兩次
    stage.items.forEach(it => {
      if(seen.has(it.en)) return;
      const enMatch = it.en.toLowerCase().includes(qLower);
      const zhMatch = it.zh && it.zh.includes(qRaw);
      if(enMatch || zhMatch){
        seen.add(it.en);
        results.push(it);
      }
    });
  });
  return results.slice(0, 30);
}
function renderSearchResults(query){
  const box = el('searchResults');
  if(!query.trim()){
    box.innerHTML = '';
    return;
  }
  const results = searchAllItems(query);
  if(results.length === 0){
    box.innerHTML = `<div style="padding:12px; color:var(--muted); font-size:13px; text-align:center;">找不到符合的單字或片語</div>`;
    return;
  }
  box.innerHTML = results.map((it, idx) => `
    <div class="search-result-item anim-gentle-in" style="padding:10px 12px; border-radius:8px; cursor:pointer; display:flex; justify-content:space-between; align-items:center; gap:8px; animation-delay:${Math.min(idx * 0.03, 0.3)}s; opacity:0;" data-en="${it.en.replace(/"/g, '&quot;')}">
      <div style="min-width:0;">
        <div style="font-weight:600; font-size:14px; color:var(--ink); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${it.en}</div>
        <div style="font-size:12px; color:var(--muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${it.zh || ''}</div>
      </div>
      <div style="font-size:11px; color:var(--sage-dark); background:var(--card); padding:2px 8px; border-radius:999px; flex-shrink:0;">${(it.cat || '').replace('(AI) ', '✨')}</div>
    </div>
  `).join('');
}
el('searchBtn').onclick = () => {
  const willOpen = !el('searchPanel').classList.contains('open');
  Object.keys(DROPDOWNS).forEach(closeDropdown);
  el('searchPanel').classList.toggle('open', willOpen);
  el('searchBtn').classList.toggle('open', willOpen);
  if(willOpen){
    setTimeout(() => el('searchInput').focus(), 60);
  } else {
    el('searchInput').value = '';
    el('searchResults').innerHTML = '';
  }
};
el('searchInput').addEventListener('input', (e) => renderSearchResults(e.target.value));
el('searchResults').addEventListener('click', (e) => {
  const itemEl = e.target.closest('.search-result-item');
  if(!itemEl) return;
  const en = itemEl.getAttribute('data-en');
  closeSearchPanel();
  el('searchInput').value = '';
  el('searchResults').innerHTML = '';
  jumpToItem(en);
});

function updateTriggerTexts(){
  let modeName = '📚 系統題庫';
  if(appMode==='ai') modeName = '✨ AI 情境';
  if(appMode==='roleplay') modeName = '💬 實戰對話';
  if(appMode==='completed') modeName = '✅ 已完成';
  if(appMode==='favorites') modeName = '⭐ 收藏';
  if(appMode==='review') modeName = '🏺 語感花室';
  if(appMode==='news') modeName = '📰 新聞時事';
  if(appMode==='random') modeName = '🔁 隨機抽考';
  
  el('modeTriggerText').textContent = modeName;
  if(appMode === 'random') {
    el('stageTriggerText').textContent = '複習中';
    el('catTriggerText').textContent = '全部';
  } else {
    el('stageTriggerText').textContent = STAGES[stageIdx] ? STAGES[stageIdx].label : '';
    let displayCat = activeCat;
    if (displayCat.startsWith('(AI) ')) displayCat = displayCat.replace('(AI) ', '');
    el('catTriggerText').textContent = displayCat==='all' ? '全部' : displayCat;
  }
  
  const showStageAndCat = (appMode === 'general' || appMode === 'ai');
  el('stageTrigger').classList.toggle('trigger-collapsed', appMode !== 'general');
  el('catTrigger').classList.toggle('trigger-collapsed', !showStageAndCat);
  
  // Dynamically adjust widths based on mode
  if (appMode === 'ai') {
    el('modeTrigger').style.flex = '0 0 auto';
    el('catTrigger').style.flex = '1 1 0';
  } else if (!showStageAndCat) {
    el('modeTrigger').style.flex = '1 1 100%';
    el('catTrigger').style.flex = '0 0 0';
  } else {
    el('modeTrigger').style.flex = '1.5';
    el('catTrigger').style.flex = '1.1';
  }
  
  if(!showStageAndCat){
    closeDropdown('stage');
    closeDropdown('cat');
  }
}

/* ---------- 收藏與初始化 ---------- */
let favorites = [];
try {
  const f = lsGet('speakup_favorites');
  if(f) favorites = JSON.parse(f);
} catch(e){}

function saveFavorites() {
  lsSet('speakup_favorites', JSON.stringify(favorites));
}

/* ---------- 已完成題目記錄(記憶功能) ---------- */
let practiced = {};
try {
  const p = lsGet('speakup_practiced');
  if(p) practiced = JSON.parse(p);
} catch(e){}

function savePracticed() {
  lsSet('speakup_practiced', JSON.stringify(practiced));
}

let streakData = { count: 0, lastActive: '' };
try {
  const s = lsGet('speakup_streak');
  if(s) streakData = JSON.parse(s);
} catch(e){}

function updateStreak(todayStr) {
  if (streakData.lastActive === todayStr) return;
  if (streakData.lastActive) {
    const todayDate = new Date(todayStr);
    const lastDate = new Date(streakData.lastActive);
    const diff = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
    if (diff === 1) streakData.count++;
    else if (diff > 1) streakData.count = 1;
  } else {
    streakData.count = 1;
  }
  streakData.lastActive = todayStr;
  lsSet('speakup_streak', JSON.stringify(streakData));
}

// 裡程碑慶祝動畫:每累積 25 個新單字就撒一次花瓣,給一個小小的儀式感
function celebrateMilestone(count){
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed; inset:0; pointer-events:none; z-index:9998; overflow:hidden;';
  const petals = ['🌸', '🌷', '🌼', '🌻', '✨'];
  for(let i = 0; i < 22; i++){
    const p = document.createElement('div');
    const emoji = petals[i % petals.length];
    const left = Math.random() * 100;
    const duration = (2.2 + Math.random() * 1.4).toFixed(2);
    const delay = (Math.random() * 0.5).toFixed(2);
    const size = Math.round(16 + Math.random() * 14);
    const drift = Math.round((Math.random() - 0.5) * 80);
    p.textContent = emoji;
    p.style.cssText = `position:absolute; top:-40px; left:${left}%; font-size:${size}px; --drift:${drift}px; animation:milestoneFall ${duration}s ease-in ${delay}s forwards;`;
    overlay.appendChild(p);
  }
  const banner = document.createElement('div');
  banner.textContent = `🎉 已掌握 ${count} 詞！`;
  banner.style.cssText = 'position:absolute; top:32%; left:50%; background:var(--sage); color:#fff; padding:12px 22px; border-radius:999px; font-weight:800; font-size:16px; box-shadow:0 8px 24px rgba(0,0,0,0.25); animation:milestonePop 2.6s ease forwards; white-space:nowrap;';
  overlay.appendChild(banner);
  document.body.appendChild(overlay);
  setTimeout(() => overlay.remove(), 4000);
}

// 升級的慶祝效果:比一般里程碑更隆重一點,花瓣飄落速度放慢、橫幅用漸入漸出取代快速彈出，整體步調更和緩優雅
function celebrateLevelUp(levelLabel, levelColor){
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed; inset:0; pointer-events:none; z-index:9998; overflow:hidden;';
  const petals = ['🌸', '🌼', '✨', '🌟', '💫'];
  for(let i = 0; i < 18; i++){
    const p = document.createElement('div');
    const emoji = petals[i % petals.length];
    const left = Math.random() * 100;
    const duration = (3.4 + Math.random() * 1.8).toFixed(2); // 比里程碑更慢,飄落更久、更悠然
    const delay = (Math.random() * 0.8).toFixed(2);
    const size = Math.round(18 + Math.random() * 14);
    const drift = Math.round((Math.random() - 0.5) * 60);
    p.textContent = emoji;
    p.style.cssText = `position:absolute; top:-40px; left:${left}%; font-size:${size}px; --drift:${drift}px; animation:milestoneFall ${duration}s ease-in-out ${delay}s forwards;`;
    overlay.appendChild(p);
  }
  const banner = document.createElement('div');
  banner.innerHTML = `🎉 升級了！<br><span style="font-size:22px;">${levelLabel}</span>`;
  banner.style.cssText = `position:absolute; top:34%; left:50%; background:linear-gradient(135deg, ${levelColor || 'var(--sage)'}, var(--sage-dark)); color:#fff; padding:18px 28px; border-radius:20px; font-weight:800; font-size:15px; text-align:center; line-height:1.6; box-shadow:0 10px 30px rgba(0,0,0,0.25); white-space:nowrap; opacity:0; animation:gentleModalIn 0.7s cubic-bezier(0.22,1,0.36,1) forwards, gentleOut 0.7s cubic-bezier(0.4,0,1,1) 3.4s forwards;`;
  overlay.appendChild(banner);
  document.body.appendChild(overlay);
  setTimeout(() => overlay.remove(), 5200);
}

// -- 花園小卡的畫圖小工具 --

// 決定性的假隨機函式(同一顆種子每次結果一致,畫面不會每次重新整理就亂跳)。
// 提升到全域,讓小卡的 canvas 繪製跟網頁本體的花瓶用「同一份」函式,兩邊才會真正一致,
// 不會變成兩份各自維護、容易慢慢長歪的複製程式碼。
const hash01 = (n) => {
  n = Math.imul(n ^ (n >>> 16), 2246822519);
  n = Math.imul(n ^ (n >>> 13), 3266489917);
  n = (n ^ (n >>> 16)) >>> 0;
  return n / 4294967296;
};
const RARE_TYPE = '💮'; // 連續練習7天以上時學會的詞,開出的花會是這種稀有花當獎勵

function canvasRoundRect(ctx, x, y, w, h, r){
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawStatPill(ctx, x, y, w, h, icon, label, value, color, wide = false){
  canvasRoundRect(ctx, x, y, w, h, 16);
  ctx.fillStyle = '#f7f4ea';
  ctx.fill();
  ctx.strokeStyle = '#e6ddc7';
  ctx.lineWidth = 1.2;
  ctx.stroke();

  if (wide) {
    // 寬版排版：左側 Icon + Label，右側 Value
    ctx.textAlign = 'left';
    ctx.font = '32px serif';
    ctx.fillText(icon, x + 20, y + h / 2 + 12);
    
    ctx.font = '600 18px Inter, "Noto Sans TC", sans-serif';
    ctx.fillStyle = '#9a9488';
    ctx.fillText(label, x + 62, y + h / 2 + 6);
    
    ctx.textAlign = 'right';
    ctx.font = '700 32px Inter, "Noto Sans TC", sans-serif';
    ctx.fillStyle = color;
    ctx.fillText(value, x + w - 20, y + h / 2 + 12);
  } else {
    // 窄版排版：上下置中
    ctx.textAlign = 'center';
    ctx.font = '28px serif';
    const iconOffsetX = icon === '🎙️' ? -12 : 0; // 修正麥克風的視覺偏心(向左移更多)
    ctx.fillText(icon, x + w / 2 + iconOffsetX, y + 36);
    
    ctx.font = '500 14px Inter, "Noto Sans TC", sans-serif';
    ctx.fillStyle = '#9a9488';
    ctx.fillText(label, x + w / 2, y + 62);
    
    ctx.font = '700 24px Inter, "Noto Sans TC", sans-serif';
    ctx.fillStyle = color;
    ctx.fillText(value, x + w / 2, y + 92);
  }
}

// 依「實際擁有的花朵數量」畫花瓶,而不是每次都固定畫滿 5 朵——
// 沒有花的時候就只畫空花瓶(也不畫葉子),忠實反映目前真正的進度。
// 花朵與葉子的排列數學跟主畫面「三層扇形」用同一套常數、同一個 hash01、
// 而且連隨機抖動、旋轉、疊層順序都完全比照,兩邊才會長得一模一樣。
// globalIdxOffset:這一瓶花在「所有花」裡的起始編號(第幾瓶 * 15),
// 用來讓 hash01 種子跟網頁本體算出來的完全對應同一朵花。
function drawVaseIllustration(ctx, cx, baseY, flowerTypes, globalIdxOffset = 0){
  const s = 1.85; // 整組花瓶+花+葉共用的縮放係數
  const neckY = baseY - 84 * s; // 對應主畫面 NECK_TOP_Y=84 的瓶口錨點

  // 花瓶陰影
  ctx.beginPath();
  ctx.ellipse(cx, baseY - 2 * s, 19 * s, 3 * s, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(0,0,0,0.08)';
  ctx.fill();

  // 花瓶主體(跟主畫面 SVG 同一條路徑,座標系原點對齊瓶身 (30,50))
  ctx.save();
  ctx.translate(cx - 30 * s, baseY - 99 * s);
  ctx.scale(s, s);
  const vasePath = new Path2D('M24,1 C20,3 21,12 23,22 C25,32 26,40 27,46 C15,54 8,64 8,77 C8,90 14,97 22,99 L38,99 C46,97 52,90 52,77 C52,64 45,54 33,46 C34,40 35,32 37,22 C39,12 40,3 36,1 C33,-0.6 27,-0.6 24,1 Z');
  const vaseGrad = ctx.createLinearGradient(8, 0, 52, 0);
  vaseGrad.addColorStop(0, '#ffffff');
  vaseGrad.addColorStop(0.5, '#fdfcfa');
  vaseGrad.addColorStop(1, '#eee9db');
  ctx.fillStyle = vaseGrad;
  ctx.fill(vasePath);
  ctx.strokeStyle = '#ddd6c6';
  ctx.lineWidth = 1.2;
  ctx.stroke(vasePath);
  ctx.beginPath();
  ctx.ellipse(30, 2, 6.2, 1.7, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#efece0';
  ctx.strokeStyle = '#ddd6c6';
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  const flowerCount = flowerTypes.length;
  if(flowerCount === 0) return; // 還沒有花:花瓶維持空的,不畫葉子也不畫花

  // 瓶口一圈葉子:5 片、彼此左右緊靠部分重疊,其中一半左右翻轉,完全比照主畫面的 leafDefs
  const leafDefs = [
    { tx: -22, angle: -38, size: 18, flip: false, ty: 0  },
    { tx: -11, angle: -18, size: 19, flip: true,  ty: -3 },
    { tx:   0, angle:   0, size: 20, flip: false, ty: -5 },
    { tx:  11, angle:  18, size: 19, flip: true,  ty: -3 },
    { tx:  22, angle:  38, size: 18, flip: false, ty: 0  }
  ];
  leafDefs.forEach(lf => {
    ctx.save();
    ctx.translate(cx + lf.tx * s, neckY + lf.ty * s);
    ctx.rotate(lf.angle * Math.PI / 180);
    if(lf.flip) ctx.scale(-1, 1);
    ctx.globalAlpha = 0.93;
    ctx.font = `${(lf.size * s).toFixed(1)}px serif`;
    ctx.textAlign = 'center';
    ctx.fillText('🌿', 0, 0);
    ctx.restore();
  });

  // 花朵:三層扇形排列,常數、抖動、旋轉、疊層順序都跟主畫面完全一致
  const PER_LAYER = 5;
  const SLOT_GAP = 9;
  const LAYER_X_OFFSET = [0, 0, 0]; // 移除寫死的偏移，讓花朵根據真實數量自然置中對齊
  const LAYER_STEM = [6, 18, 30], LAYER_STEM_JITTER = 2; // 將第二、第三層的高度拉高，避免無莖花朵被遮擋太多
  const LAYER_ARC = 15;
  const LAYER_SIZE = [21, 19, 17], LAYER_SIZE_JITTER = 2;

  const flowerDraws = flowerTypes.map((fType, i) => {
    const globalIdx = globalIdxOffset + i;
    const layer = Math.min(Math.floor(i / PER_LAYER), LAYER_STEM.length - 1);
    const slot = i - layer * PER_LAYER;
    const flowersInLayer = Math.min(PER_LAYER, flowerCount - layer * PER_LAYER);

    const slotX = (slot - (flowersInLayer - 1) / 2) * SLOT_GAP;
    const jitterX = (hash01(globalIdx * 2) - 0.5) * 2;
    const tx = slotX + LAYER_X_OFFSET[layer] + jitterX;

    // 修正：無論該層有幾朵花，計算弧度時都應該使用滿層的寬度，否則不滿層時邊緣的花會因為 arcBoost 過小而掉到前一層下方。
    const fullHalfWidth = ((PER_LAYER - 1) / 2) * SLOT_GAP + 1;
    const normalized = Math.abs(slotX) / fullHalfWidth;
    const arcBoost = LAYER_ARC * (1 - normalized * normalized);
    const jitterY = (hash01(globalIdx * 2 + 1) - 0.5) * 4;
    const stem = LAYER_STEM[layer] + (hash01(globalIdx * 4 + 3) - 0.5) * LAYER_STEM_JITTER;
    const ty = -(stem + arcBoost + jitterY);

    const rawAngle = Math.atan2(tx, -ty) * (180 / Math.PI);
    const clampedAngle = Math.max(-18, Math.min(18, rawAngle)); // 強制不超過±18°
    const rot = clampedAngle + (hash01(globalIdx * 7 + 3) - 0.5) * 4;

    const size = LAYER_SIZE[layer] + hash01(globalIdx * 5 + 11) * LAYER_SIZE_JITTER;
    const zIdx = 50 - layer * 8 + slot; // 跟主畫面同一套公式:第一層(靠瓶口)最大、永遠在最上面

    return { fType, tx, ty, rot, size, zIdx };
  });

  // canvas 是「後畫的蓋在先畫的上面」,所以要先按 zIdx 由小到大排序,z 越大的最後畫、疊在最上層
  flowerDraws.sort((a, b) => a.zIdx - b.zIdx);

  flowerDraws.forEach(fd => {
    ctx.save();
    ctx.translate(cx + fd.tx * s, neckY + fd.ty * s);
    ctx.rotate(fd.rot * Math.PI / 180);
    if(fd.fType === RARE_TYPE){ ctx.shadowColor = 'gold'; ctx.shadowBlur = 8; } // 稀有花加一點柔光
    ctx.font = `${(fd.size * s).toFixed(1)}px serif`;
    ctx.textAlign = 'center';
    ctx.fillText(fd.fType, 0, 0);
    ctx.restore();
  });
}

// 花園小卡分享:用 canvas 畫一張成果卡,支援手機原生分享或直接下載。
// flowerTypes 是「目前這一瓶實際擁有的花」陣列(可能是空陣列),不是寫死畫 5 朵。
async function shareGardenCard(flowerTypes, wordCount, levelLabel, levelColor, renderStreak, toNextFlower, globalIdxOffset = 0){
  // 先確保字型載入完成,匯出的圖片才不會臨時吃到瀏覽器預設字型
  try {
    await Promise.all([
      document.fonts.load('700 40px Fraunces'),
      document.fonts.load('500 14px Inter'),
      document.fonts.load('700 19px Inter')
    ]);
  } catch(e) { /* 字型載入失敗就用系統預設,不影響功能 */ }

  const W = 640, H = 860;
  const dpr = 2; // 用兩倍解析度匯出,圖片文字才夠銳利
  const canvas = document.createElement('canvas');
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  // 背景漸層
  const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
  bgGrad.addColorStop(0, '#f3ede0');
  bgGrad.addColorStop(1, '#dce6da');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // 四角落淡淡的葉子裝飾,增加一點花園的氛圍感
  ctx.save();
  ctx.globalAlpha = 0.12;
  ctx.font = '70px serif';
  ctx.textAlign = 'left';
  ctx.fillText('🌿', -14, 66);
  ctx.save();
  ctx.translate(W + 14, H - 10);
  ctx.rotate(Math.PI);
  ctx.fillText('🌿', 0, 0);
  ctx.restore();
  ctx.restore();

  // 卡片主體:圓角白卡 + 柔和陰影
  const pad = 28;
  const cardX = pad, cardY = pad, cardW = W - pad * 2, cardH = H - pad * 2;
  ctx.save();
  ctx.shadowColor = 'rgba(60,50,30,0.18)';
  ctx.shadowBlur = 34;
  ctx.shadowOffsetY = 14;
  canvasRoundRect(ctx, cardX, cardY, cardW, cardH, 28);
  ctx.fillStyle = '#fffdf8';
  ctx.fill();
  ctx.restore();
  canvasRoundRect(ctx, cardX, cardY, cardW, cardH, 28);
  ctx.strokeStyle = 'rgba(125,160,128,0.28)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // 標題
  ctx.textAlign = 'center';
  ctx.fillStyle = '#3f5c43';
  ctx.font = '700 36px Fraunces, serif';
  ctx.fillText('💐 我的語感花室', W / 2, cardY + 64);
  ctx.font = '500 13px Inter, sans-serif';
  ctx.fillStyle = '#9a9488';
  ctx.fillText('S P E A K   U P   ·   V O C A B   G A R D E N', W / 2, cardY + 90);

  // 花瓶+花朵(依實際數量畫,可能是空花瓶)
  drawVaseIllustration(ctx, W / 2, cardY + 420, flowerTypes, globalIdxOffset);

  if(flowerTypes.length > 0) {
    const list = Object.values(practiced);
    const vaseWordStart = globalIdxOffset * 5;
    const vaseWordEnd = Math.min(list.length, vaseWordStart + flowerTypes.length * 5);
    const vaseWords = list.slice(vaseWordStart, vaseWordEnd);
    let vaseDateLabel = '';
    if (vaseWords.length > 0) {
      const times = vaseWords.map(w => w.lastPracticed).filter(Boolean);
      if(times.length){
        const fmtDate = (t) => { const d = new Date(t); return `${d.getMonth() + 1}/${d.getDate()}`; };
        const minT = Math.min(...times), maxT = Math.max(...times);
        vaseDateLabel = (fmtDate(minT) === fmtDate(maxT)) ? fmtDate(minT) : `${fmtDate(minT)}~${fmtDate(maxT)}`;
      }
    }
    const vNum = Math.floor(globalIdxOffset / 15) + 1;
    const pillText = `第${vNum}瓶${vaseDateLabel ? ' · ' + vaseDateLabel : ''}`;

    ctx.font = '700 15px Inter, "Noto Sans TC", sans-serif';
    const tw = ctx.measureText(pillText).width;
    const ph = 32;
    const pw = tw + 32;
    const px = W / 2 - pw / 2;
    const py = cardY + 420 + 24;

    ctx.save();
    ctx.shadowColor = 'rgba(60,50,30,0.08)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 4;
    canvasRoundRect(ctx, px, py, pw, ph, ph / 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fill();
    ctx.restore();

    canvasRoundRect(ctx, px, py, pw, ph, ph / 2);
    ctx.strokeStyle = 'rgba(125,160,128,0.25)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#3f5c43';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(pillText, W / 2, py + ph / 2 + 1.5);
    ctx.textBaseline = 'alphabetic'; // Reset baseline for subsequent rendering
  } else {
    ctx.font = '500 15px Inter, "Noto Sans TC", sans-serif';
    ctx.fillStyle = '#9a9488';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(`🌱 再練 ${toNextFlower} 詞就會開出第一朵花`, W / 2, cardY + 308);
  }

  // 統計卡(三個並排的圓角小卡)——文字比原本放大約1.35倍,方框也一起等比調整避免裁切
  const pillW = 168, pillH = 110, gap = 14;
  const totalW = pillW * 3 + gap * 2;
  const startX = W / 2 - totalW / 2;
  const pillY = cardY + 520;
  drawStatPill(ctx, startX, pillY, pillW, pillH, '🌷', '已掌握', `${wordCount} 詞`, '#5aa06a');
  drawStatPill(ctx, startX + (pillW + gap), pillY, pillW, pillH, '🏅', '等級', levelLabel, levelColor || '#c98a4b');
  drawStatPill(ctx, startX + (pillW + gap) * 2, pillY, pillW, pillH, '🔥', '連續天數', renderStreak > 0 ? `${renderStreak} 天` : '今天開始', '#e0703f');

  // 升級進度條
  const levelDefs = [
    { min:0,    max:9,    label:'🌱 嫩芽',     color:'#8fba6c' },
    { min:10,   max:24,   label:'🪴 小苗',     color:'#6dba8c' },
    { min:25,   max:49,   label:'🌿 茁壯',   color:'#5aaa82' },
    { min:50,   max:79,   label:'🌼 初綻放',   color:'#f0c040' },
    { min:80,   max:119,  label:'🌸 嬌嫩花',   color:'#e88fad' },
    { min:120,  max:179,  label:'🌺 豔麗花',   color:'#e05090' },
    { min:180,  max:249,  label:'🌻 向陽花',   color:'#f5a623' },
    { min:250,  max:349,  label:'🌹 含情玫',   color:'#d63060' },
    { min:350,  max:499,  label:'🌷 鬱金香',   color:'#9b59b6' },
    { min:500,  max:699,  label:'🪻 薰衣草',   color:'#7e57c2' },
    { min:700,  max:999,  label:'🏵️ 花藝師',  color:'#4caf8a' },
    { min:1000, max:1299, label:'💐 花束大師', color:'#e67e22' },
    { min:1300, max:1699, label:'🌳 語言之樹', color:'#27ae60' },
    { min:1700, max:1999, label:'🌲 百年古木', color:'#1a6b3a' },
    { min:2000, max:Infinity, label:'👑 花語宗師', color:'#c0a000' }
  ];
  const currentLvl = levelDefs.find(l => wordCount >= l.min && wordCount <= l.max) || levelDefs[0];
  const nextLvl = levelDefs[levelDefs.indexOf(currentLvl) + 1];
  
  if (nextLvl) {
    const barW = totalW;
    const barH = 10;
    const barX = startX;
    const barY = cardY + 690;
    
    ctx.font = '500 13px Inter, "Noto Sans TC", sans-serif';
    ctx.fillStyle = '#9a9488';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(`距離下一階「${nextLvl.label}」還需 ${nextLvl.min - wordCount} 詞`, W / 2, barY - 12);
    
    ctx.save();
    canvasRoundRect(ctx, barX, barY, barW, barH, barH / 2);
    ctx.fillStyle = '#efece3';
    ctx.fill();
    ctx.restore();
    
    const progress = Math.max(0, Math.min(1, (wordCount - currentLvl.min) / (nextLvl.min - currentLvl.min)));
    if (progress > 0) {
      canvasRoundRect(ctx, barX, barY, barW * progress, barH, barH / 2);
      ctx.fillStyle = nextLvl.color || '#5aa06a';
      ctx.fill();
    }
  } else {
    ctx.font = '700 14px Inter, "Noto Sans TC", sans-serif';
    ctx.fillStyle = '#c0a000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(`👑 你已達成最高等級！`, W / 2, cardY + 690);
  }

  // 底部footer
  ctx.font = '13px Inter, sans-serif';
  ctx.fillStyle = '#b0aa9a';
  const dateStr = new Date().toLocaleDateString('zh-TW', { year:'numeric', month:'2-digit', day:'2-digit' });
  ctx.fillText(`Speak Up · 開口練習英文 · ${dateStr}`, W / 2, cardY + cardH - 24);

  canvas.toBlob(async (blob) => {
    if(!blob) return;
    const file = new File([blob], 'speakup-garden.png', { type: 'image/png' });
    if(navigator.share && navigator.canShare && navigator.canShare({ files: [file] })){
      try {
        await navigator.share({ files: [file], title: '我的語感花室', text: `已掌握 ${wordCount} 詞！` });
        return;
      } catch(e) { /* 使用者取消分享,不需額外處理 */ }
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'speakup-garden.png'; a.click();
    URL.revokeObjectURL(url);
  }, 'image/png');
}

// 每日練習次數的歷史紀錄(供週報統計用)，只保留最近60天避免資料無限增長
function bumpDailyHistory(dateStr){
  let hist = safeParse(lsGet('speakup_daily_history'), {});
  hist[dateStr] = (hist[dateStr] || 0) + 1;
  const keys = Object.keys(hist).sort();
  if(keys.length > 60){
    keys.slice(0, keys.length - 60).forEach(k => delete hist[k]);
  }
  lsSet('speakup_daily_history', JSON.stringify(hist));
}

// 統計「這週」(含今天往前算7天)的學習狀況:新學了幾個詞、複習了幾次、平均正確率
function getWeeklyStats(){
  const now = new Date();
  const DAY = 24 * 60 * 60 * 1000;
  const hist = safeParse(lsGet('speakup_daily_history'), {});
  const days = [];
  for(let i = 6; i >= 0; i--){
    const d = new Date(now.getTime() - i * DAY);
    const key = localDateStr(d);
    days.push({ key, count: hist[key] || 0, label: `${d.getMonth() + 1}/${d.getDate()}` });
  }
  const practiceCount = days.reduce((sum, d) => sum + d.count, 0);
  const weekStart = new Date(now.getTime() - 6 * DAY);
  weekStart.setHours(0, 0, 0, 0);
  const list = Object.values(practiced);
  const newWordsThisWeek = list.filter(it => it.firstPracticed && it.firstPracticed >= weekStart.getTime()).length;
  const scoresThisWeek = list
    .filter(it => it.lastPracticed && it.lastPracticed >= weekStart.getTime() && typeof it.lastScore === 'number')
    .map(it => it.lastScore);
  const avgScore = scoresThisWeek.length ? Math.round(scoresThisWeek.reduce((a, b) => a + b, 0) / scoresThisWeek.length * 100) : null;
  return { days, practiceCount, newWordsThisWeek, avgScore };
}

// 週報小卡:延伸花園小卡的畫法,改成長條圖呈現這七天的練習量,一樣支援原生分享或直接下載
async function shareWeeklyCard(){
  try {
    await Promise.all([
      document.fonts.load('700 40px Fraunces'),
      document.fonts.load('500 14px Inter'),
      document.fonts.load('700 19px Inter')
    ]);
  } catch(e) { /* 字型載入失敗就用系統預設,不影響功能 */ }

  const stats = getWeeklyStats();
  const W = 640, H = 860;
  const dpr = 2;
  const canvas = document.createElement('canvas');
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
  bgGrad.addColorStop(0, '#eef2ea');
  bgGrad.addColorStop(1, '#dde8e0');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  ctx.save();
  ctx.globalAlpha = 0.12;
  ctx.font = '70px serif';
  ctx.textAlign = 'left';
  ctx.fillText('📅', -14, 66);
  ctx.save();
  ctx.translate(W + 14, H - 10);
  ctx.rotate(Math.PI);
  ctx.fillText('🌿', 0, 0);
  ctx.restore();
  ctx.restore();

  const pad = 28, cardX = pad, cardY = pad, cardW = W - pad * 2, cardH = H - pad * 2;
  ctx.save();
  ctx.shadowColor = 'rgba(60,50,30,0.18)';
  ctx.shadowBlur = 34;
  ctx.shadowOffsetY = 14;
  canvasRoundRect(ctx, cardX, cardY, cardW, cardH, 28);
  ctx.fillStyle = '#fffdf8';
  ctx.fill();
  ctx.restore();
  canvasRoundRect(ctx, cardX, cardY, cardW, cardH, 28);
  ctx.strokeStyle = 'rgba(125,160,128,0.28)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.fillStyle = '#3f5c43';
  ctx.font = '700 36px Fraunces, serif';
  ctx.fillText('📅 本週學習週報', W / 2, cardY + 90);
  ctx.font = '500 13px Inter, sans-serif';
  ctx.fillStyle = '#9a9488';
  ctx.fillText('S P E A K   U P   ·   W E E K L Y   R E P O R T', W / 2, cardY + 126);

  // 長條圖:這七天每天的練習次數
  const chartX = cardX + 40, chartW = cardW - 80;
  const chartBaseY = cardY + 390;
  const chartH = 180;
  const maxCount = Math.max(1, ...stats.days.map(d => d.count));
  const barGap = 16;
  const barW = (chartW - barGap * 6) / 7;
  stats.days.forEach((d, i) => {
    const bx = chartX + i * (barW + barGap);
    const bh = Math.round((d.count / maxCount) * chartH);
    const by = chartBaseY - bh;
    const isToday = i === 6;
    canvasRoundRect(ctx, bx, by, barW, Math.max(bh, 4), 6);
    ctx.fillStyle = d.count > 0 ? (isToday ? '#5aa06a' : '#8fba9c') : '#eee9db';
    ctx.fill();
    ctx.font = '600 12px Inter, sans-serif';
    ctx.fillStyle = '#9a9488';
    ctx.fillText(d.label, bx + barW / 2, chartBaseY + 24);
    if(d.count > 0){
      ctx.font = '700 13px Inter, sans-serif';
      ctx.fillStyle = '#3f5c43';
      ctx.fillText(String(d.count), bx + barW / 2, by - 8);
    }
  });
  ctx.strokeStyle = '#e6ddc7';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(chartX - 10, chartBaseY + 0.5);
  ctx.lineTo(chartX + chartW + 10, chartBaseY + 0.5);
  ctx.stroke();

  // 統計卡(5個並排的圓角小卡，分兩排)
  const pillW = 168, pillH = 104, gap = 14;
  const row1W = pillW * 3 + gap * 2;
  const startX1 = W / 2 - row1W / 2;
  const pillY1 = cardY + 450; // 下移，增加與上方長條圖的距離
  drawStatPill(ctx, startX1, pillY1, pillW, pillH, '🌱', '本週新學', `${stats.newWordsThisWeek} 詞`, '#5aa06a');
  drawStatPill(ctx, startX1 + (pillW + gap), pillY1, pillW, pillH, '🎙️', '複習次數', `${stats.practiceCount} 次`, '#4a90c2');
  drawStatPill(ctx, startX1 + (pillW + gap) * 2, pillY1, pillW, pillH, '🎯', '平均正確率', stats.avgScore !== null ? `${stats.avgScore}%` : '無', '#e0703f');

  const row2W = row1W; // 下排總寬度與上排相同
  const pillW2 = (row2W - gap) / 2; // 下排方塊的各自寬度
  const startX2 = W / 2 - row2W / 2;
  const pillY2 = pillY1 + pillH + gap;
  
  let streak = streakData.count;
  const todayStr = localDateStr();
  if(streakData.lastActive && streakData.lastActive !== todayStr) {
    const diff = Math.floor((new Date(todayStr) - new Date(streakData.lastActive)) / (1000*60*60*24));
    if(diff > 1) streak = 0;
  }
  
  const maxCountVal = Math.max(0, ...stats.days.map(d => d.count));
  const bestDays = stats.days.filter(d => d.count === maxCountVal && d.count > 0);
  const bestDayLabel = bestDays.length > 0 ? bestDays[bestDays.length - 1].label : '無紀錄';

  drawStatPill(ctx, startX2, pillY2, pillW2, pillH, '👑', '本週最佳', bestDayLabel, '#f0c040', true);
  drawStatPill(ctx, startX2 + (pillW2 + gap), pillY2, pillW2, pillH, '🔥', '目前連勝', `${streak} 天`, '#e0703f', true);

  ctx.textAlign = 'center';
  ctx.font = '500 16px Inter, "Noto Sans TC", sans-serif';
  ctx.fillStyle = '#8a8f86';
  const encourage = stats.practiceCount === 0
    ? '這週還沒開始練習,現在動手正是時候！'
    : (stats.newWordsThisWeek > 0 ? `這週又多會了 ${stats.newWordsThisWeek} 個詞,保持下去！` : '持續複習也是進步,繼續加油！');
  ctx.fillText(encourage, W / 2, pillY2 + pillH + 56);

  ctx.font = '13px Inter, sans-serif';
  ctx.fillStyle = '#b0aa9a';
  const rangeLabel = `${stats.days[0].label} – ${stats.days[6].label}`;
  ctx.fillText(`Speak Up · 開口練習英文 · ${rangeLabel}`, W / 2, cardY + cardH - 32);

  canvas.toBlob(async (blob) => {
    if(!blob) return;
    const file = new File([blob], 'speakup-weekly.png', { type: 'image/png' });
    if(navigator.share && navigator.canShare && navigator.canShare({ files: [file] })){
      try {
        await navigator.share({ files: [file], title: '本週學習週報', text: `這週新學了 ${stats.newWordsThisWeek} 個詞！` });
        return;
      } catch(e) { /* 使用者取消分享,不需額外處理 */ }
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'speakup-weekly.png'; a.click();
    URL.revokeObjectURL(url);
  }, 'image/png');
}

function recordPracticed(item, stageIdx, score){
  if(!item || !item.en) return;
  const today = localDateStr();
  updateStreak(today); // 先更新連續天數,才能正確記錄「這次練習當下」的連續天數
  const prevRecord = practiced[item.en];

  // weakCount:間隔複習排序用——分數不理想就+1,講好了就慢慢-1(不會低於0)
  let weakCount = (prevRecord && prevRecord.weakCount) || 0;
  if(typeof score === 'number'){
    weakCount = score < 0.85 ? Math.min(5, weakCount + 1) : Math.max(0, weakCount - 1);
  }

  practiced[item.en] = {
    en: item.en,
    zh: item.zh || '',
    cat: item.cat || '無',
    stage: stageIdx,
    lastPracticed: new Date().getTime(),
    // 保留第一次學會這個詞的時間,之後重複練習不會被洗掉(週報「本週新學」要用)
    firstPracticed: (prevRecord && prevRecord.firstPracticed) ? prevRecord.firstPracticed : new Date().getTime(),
    // 保留第一次練會這個詞當下的連續天數,之後重複練習不會被洗掉
    streakAtPractice: (prevRecord && prevRecord.streakAtPractice !== undefined) ? prevRecord.streakAtPractice : streakData.count,
    lastScore: (typeof score === 'number') ? score : (prevRecord ? prevRecord.lastScore : undefined),
    weakCount
  };
  savePracticed();
  bumpDailyHistory(today);
  const stored = safeParse(lsGet('speakup_daily'), {date:"",count:0});
  if(stored.date === today) {
    stored.count++;
  } else {
    stored.date = today;
    stored.count = 1;
  }
  lsSet('speakup_daily', JSON.stringify(stored));
}

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
      {en:'based on the data', zh:'根據這些資料', cat:'學術'},
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

  { key:'favorites', label:'⭐ 收藏', desc:'你收藏的重點，隨時複習。', items: favorites }
];

/* ---------- 本地儲存進度記憶 ---------- */
let savedStageIdx = null;
let savedCat = null;
let savedCatProgressStr = null;
let savedLastCatStr = null;
let geminiApiKey = '';
let savedMode = null;
try {
  savedStageIdx = lsGet('speakup_stageIdx');
  savedCat = lsGet('speakup_cat');
  if(savedCat === '📰 新聞時事') savedCat = '新聞時事';
  savedCatProgressStr = lsGet('speakup_cat_progress');
  savedLastCatStr = lsGet('speakup_last_cat');
  geminiApiKey = lsGet('speakup_apikey') || '';
  savedMode = lsGet('speakup_appMode');
} catch(e) {
  console.warn("localStorage not accessible", e);
}
let catProgress = savedCatProgressStr ? safeParse(savedCatProgressStr, {}) : {};
// 記住「每個模式(或模式+階段)上次選的分類」,切換分頁/階段時才能還原到原本選的分類,
// 而不是每次都被重置回「全部」。
let lastCat = savedLastCatStr ? safeParse(savedLastCatStr, {}) : {};

let savedRecentCatsStr = null;
try { savedRecentCatsStr = lsGet('speakup_recent_cats'); } catch(e){}
let recentCats = savedRecentCatsStr ? safeParse(savedRecentCatsStr, []) : [];

function saveRecentCats() {
  lsSet('speakup_recent_cats', JSON.stringify(recentCats));
}

function updateRecentCats(cat) {
  if(cat === 'all') return;
  recentCats = recentCats.filter(c => c !== cat);
  recentCats.unshift(cat);
  if (recentCats.length > 3) recentCats = recentCats.slice(0, 3);
  saveRecentCats();
}
const VALID_MODES = ['general', 'ai', 'roleplay', 'favorites', 'completed', 'review', 'random'];
let appMode = (savedMode && VALID_MODES.includes(savedMode)) ? savedMode : 'general';

let returnSnapshot = null;
function clearReturnSnapshot() {
  returnSnapshot = null;
  const banner = el('returnBanner');
  if(banner) banner.style.display = 'none';
}
function showReturnBanner() {
  const banner = el('returnBanner');
  if(banner) banner.style.display = 'block';
}
function restoreSnapshot() {
  if (!returnSnapshot) return;
  appMode = returnSnapshot.appMode;
  stageIdx = returnSnapshot.stageIdx;
  activeCat = returnSnapshot.activeCat;
  itemIdx = returnSnapshot.itemIdx;
  
  clearReturnSnapshot();
  saveProgress();
  setAppMode(appMode, false, true);
  render(true);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getSavedItemIdx(sIdx, cat) {
  const key = `${sIdx}_${cat}`;
  return catProgress[key] || 0;
}

let stageIdx = savedStageIdx ? parseInt(savedStageIdx, 10) : 0;
let activeCat = savedCat || 'all';
let itemIdx = getSavedItemIdx(stageIdx, activeCat);
let randomReviewItems = [];

function saveProgress(){
  lsSet('speakup_stageIdx', stageIdx);
  lsSet('speakup_cat', activeCat);
  const key = `${stageIdx}_${activeCat}`;
  catProgress[key] = itemIdx;
  lsSet('speakup_cat_progress', JSON.stringify(catProgress));

  // 記住這個模式(一般模式再細分到每個階段)上次選的分類,
  // 下次切回來才能還原,而不是每次都跳回「全部」。
  if(appMode === 'general' || appMode === 'ai'){
    const catKey = (appMode === 'ai') ? 'ai' : `general_${stageIdx}`;
    lastCat[catKey] = activeCat;
    lsSet('speakup_last_cat', JSON.stringify(lastCat));
  }
}

function generateRandomReview() {
  const list = Object.values(practiced);
  if (list.length === 0) {
    randomReviewItems = [{en: 'Practice more', zh: '請先在其他模式練習', cat: '提示'}];
    return;
  }
  const now = Date.now();
  const DAY = 24 * 60 * 60 * 1000;
  // 間隔複習(Spaced Repetition):優先度 = 「講得不好的次數」加權 + 「多久沒複習」,
  // weakCount 影響比較大(真的講不好的字要常常出現),天數設個上限避免久遠到誇張的字一直霸榜。
  const scored = list.map(it => {
    const daysSince = (now - (it.lastPracticed || 0)) / DAY;
    const weak = it.weakCount || 0;
    const priority = weak * 4 + Math.min(daysSince, 14);
    return { it, priority };
  });
  scored.sort((a, b) => b.priority - a.priority);

  // 優先度高的那一群裡面做輕微洗牌,才不會每次順序都一模一樣、但仍然維持「弱點優先」的大方向
  const topCount = Math.max(15, Math.ceil(scored.length * 0.5));
  const topPool = scored.slice(0, topCount);
  const rest = scored.slice(topCount);
  const shuffle = arr => arr.sort(() => 0.5 - Math.random());
  shuffle(topPool);
  shuffle(rest);

  const pickCount = Math.min(20, scored.length);
  randomReviewItems = [...topPool, ...rest].slice(0, pickCount).map(x => x.it);
}

function triggerAnim(elId, animClass) {
  const elem = el(elId);
  if (!elem || elem.style.display === 'none') return;
  elem.classList.remove(animClass);
  void elem.offsetWidth;
  elem.classList.add(animClass);
  // 動畫播完就把 class 拿掉——用 forwards 讓動畫停在最後一幀本身沒問題,
  // 但如果最後一幀還留著非 none 的 transform(例如 translateY(0)),
  // 這個元素就會變成裡面 position:fixed 子元素(例如彈出視窗)的定位基準,
  // 導致那些視窗不是真的相對「整個畫面」置中,而是相對這個容器置中。
  // 動畫結束後拿掉 class,把 transform 恢復成 none 就能避免這個問題。
  const handler = (e) => {
    if(e.target === elem){
      elem.classList.remove(animClass);
      elem.removeEventListener('animationend', handler);
    }
  };
  elem.addEventListener('animationend', handler);
}

// 已完成/收藏/語感花室這幾個清單,都是用 <details> 把題目摺疊在分類底下,
// 摺疊起來的內容本來就看不到,初次渲染時逐項淡入是浪費;
// 真正有意義的時機是「使用者展開某個分類」的當下，那時候才讓裡面的題目淡入。
function bindReviewGroupToggleAnim(container){
  container.querySelectorAll('.review-group').forEach(details => {
    details.addEventListener('toggle', () => {
      if(details.open){
        const items = details.querySelector('.review-group-items');
        if(items){
          items.classList.remove('anim-gentle-in');
          void items.offsetWidth;
          items.classList.add('anim-gentle-in');
        }
      }
    });
  });
}

// 「想加自己的內容?」展開區塊,跟上面已完成/收藏/花室的清單用同一套手法:
// 摺疊/展開本身讓瀏覽器原生處理,只在「展開的當下」讓裡面的欄位平滑淡入,
// 感覺是輕輕展開,而不是內容瞬間彈出來。
(function bindAddPanelToggleAnim(){
  const addPanelEl = document.querySelector('details.add-panel');
  if(!addPanelEl) return;
  addPanelEl.addEventListener('toggle', () => {
    if(addPanelEl.open){
      const body = addPanelEl.querySelector('.add-body');
      if(body){
        body.classList.remove('anim-gentle-in');
        void body.offsetWidth;
        body.classList.add('anim-gentle-in');
      }
    }
  });
})();

// 等級表彈出視窗:開啟時淡入+輕微放大,關閉時反過來淡出+縮小,
// 兩段時間都刻意抓短一點(0.28~0.4s),感覺俐落但不生硬。
function openLevelModal(){
  const modal = el('levelModal');
  const box = el('levelModalBox');
  if(!modal) return;
  modal.style.display = 'flex';
  modal.classList.remove('anim-fade-out');
  void modal.offsetWidth;
  modal.classList.add('anim-fade-in');
  if(box){
    box.classList.remove('anim-gentle-modal-out');
    void box.offsetWidth;
    box.classList.add('anim-gentle-modal');
  }
}

function closeLevelModal(){
  const modal = el('levelModal');
  const box = el('levelModalBox');
  if(!modal) return;
  modal.classList.remove('anim-fade-in');
  modal.classList.add('anim-fade-out');
  if(box){
    box.classList.remove('anim-gentle-modal');
    box.classList.add('anim-gentle-modal-out');
  }
  setTimeout(() => {
    modal.style.display = 'none';
    modal.classList.remove('anim-fade-out');
    if(box) box.classList.remove('anim-gentle-modal-out');
  }, 300);
}

function setAppMode(mode, isInitial = false, preserveState = false) {
  if (!preserveState) clearReturnSnapshot();
  appMode = mode;
  lsSet('speakup_appMode', appMode);
  
  el('tabGeneral').classList.toggle('active', mode === 'general');
  el('tabAI').classList.toggle('active', mode === 'ai');
  if(el('tabRoleplay')) el('tabRoleplay').classList.toggle('active', mode === 'roleplay');
  if(el('tabNews')) el('tabNews').classList.toggle('active', mode === 'news');
  if(el('tabFavorites')) el('tabFavorites').classList.toggle('active', mode === 'favorites');
  if(el('tabCompleted')) el('tabCompleted').classList.toggle('active', mode === 'completed');
  if(el('tabReview')) el('tabReview').classList.toggle('active', mode === 'review');
  if(el('tabRandom')) el('tabRandom').classList.toggle('active', mode === 'random');
  
  const isSpecialMode = (mode === 'roleplay' || mode === 'review' || mode === 'completed' || mode === 'favorites' || mode === 'news');
  
  el('aiActions').style.display = mode === 'ai' ? 'block' : 'none';
  el('ladder').style.display = (mode === 'general') ? 'flex' : 'none';
  el('stageDesc').style.display = (mode === 'general') ? 'block' : 'none';
  el('cats').style.display = isSpecialMode ? 'none' : 'flex';
  
  if(el('mainCard')) el('mainCard').style.display = isSpecialMode ? 'none' : 'block';
  if(el('rpContainer')) el('rpContainer').style.display = (mode === 'roleplay') ? 'block' : 'none';
  if(el('newsContainer')) el('newsContainer').style.display = (mode === 'news') ? 'block' : 'none';
  if(el('favoritesContainer')) el('favoritesContainer').style.display = (mode === 'favorites') ? 'block' : 'none';
  if(el('completedContainer')) el('completedContainer').style.display = (mode === 'completed') ? 'block' : 'none';
  if(el('reviewContainer')) el('reviewContainer').style.display = (mode === 'review') ? 'block' : 'none';
  
  if(mode === 'news' && el('newsList').innerHTML === '載入中...') {
    if(typeof fetchBBCNews === 'function') fetchBBCNews();
  }
  
  const addPanel = document.querySelector('.add-panel');
  if(addPanel) addPanel.style.display = isSpecialMode ? 'none' : 'block';
  
  const quickNav = el('quickNav');
  if(quickNav) quickNav.style.display = isSpecialMode ? 'none' : 'flex';
  
  if(!isInitial && !isSpecialMode && !preserveState) {
    const catKey = (mode === 'ai') ? 'ai' : `general_${stageIdx}`;
    activeCat = lastCat[catKey] || 'all';
    itemIdx = getSavedItemIdx(stageIdx, activeCat);
    saveProgress();
  }
  if(mode === 'review') renderReview();
  if(mode === 'completed') renderCompleted();
  if(mode === 'favorites') renderFavorites();
  render(!isInitial);
  updateTriggerTexts();

  if (!isInitial) {
    if (mode === 'roleplay') triggerAnim('rpContainer', 'anim-slide-up-fade');
    else if (mode === 'news') triggerAnim('newsContainer', 'anim-slide-up-fade');
    else if (mode === 'favorites') triggerAnim('favoritesContainer', 'anim-slide-up-fade');
    else if (mode === 'completed') triggerAnim('completedContainer', 'anim-slide-up-fade');
    else if (mode === 'review') triggerAnim('reviewContainer', 'anim-slide-up-fade');
    else triggerAnim('mainCard', 'anim-slide-up-fade'); // general / ai / random 都共用同一張卡片
  }
}

if(el('returnBtn')) el('returnBtn').onclick = restoreSnapshot;
el('tabGeneral').onclick = () => setAppMode('general');
el('tabAI').onclick = () => setAppMode('ai');
el('tabRoleplay').onclick = () => setAppMode('roleplay');
el('tabFavorites').onclick = () => setAppMode('favorites');
el('tabCompleted').onclick = () => setAppMode('completed');
el('tabReview').onclick = () => setAppMode('review');
el('tabNews').onclick = () => setAppMode('news');
el('tabRandom').onclick = () => {
  generateRandomReview();
  setAppMode('random');
  activeCat = 'all';
  itemIdx = 0;
  render(true);
};

el('refreshNewsBtn').onclick = () => fetchBBCNews();

async function fetchBBCNews() {
  const listEl = el('newsList');
  const statusEl = el('newsStatus');
  if(!geminiApiKey){
    listEl.innerHTML = '<div style="text-align:center; padding: 20px; color:var(--muted);">請先在「✨ AI情境」設定 Gemini API Key,才能使用新聞雙語翻譯功能。</div>';
    return;
  }
  const shimmerHTML = `
    <div class="anim-shimmer" style="height:110px; background:var(--card); border:1px solid var(--line); border-radius:10px; opacity:0.7; margin-bottom:12px;"></div>
    <div class="anim-shimmer" style="height:110px; background:var(--card); border:1px solid var(--line); border-radius:10px; opacity:0.7; margin-bottom:12px;"></div>
    <div class="anim-shimmer" style="height:110px; background:var(--card); border:1px solid var(--line); border-radius:10px; opacity:0.7;"></div>
  `;
  listEl.innerHTML = shimmerHTML;
  statusEl.textContent = '🌍 正在抓取 BBC 最新頭條...'; triggerAnim('newsStatus', 'anim-gentle-in');
  try {
    const rssUrl = encodeURIComponent('http://feeds.bbci.co.uk/news/rss.xml');
    const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
    const data = await res.json();
    if(data.status !== 'ok') throw new Error('抓取 BBC 新聞來源失敗,該服務可能暫時無法使用。');
    const items = data.items.slice(0, 5);
    
    statusEl.textContent = '✨ AI 正在幫您雙語翻譯今日新聞...'; triggerAnim('newsStatus', 'anim-gentle-in');
    
    const prompt = `請將以下 5 則英文新聞標題與摘要翻譯為繁體中文(臺灣)。
請只回傳 JSON 格式，必須是一個陣列，不需要 markdown 標籤。
格式：[{"enTitle":"...", "zhTitle":"...", "enDesc":"...", "zhDesc":"..."}]
新聞內容：
${JSON.stringify(items.map(it => ({title: it.title, desc: it.description})))}`;
    
    const aiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': geminiApiKey },
      body: JSON.stringify({
        contents: [{role: "user", parts: [{text: prompt}]}],
        generationConfig: { responseMimeType: "application/json" }
      })
    });
    if(!aiRes.ok){
      let detail = aiRes.statusText;
      try{ const errJson = await aiRes.json(); detail = errJson.error?.message || detail; }catch(e){}
      if(aiRes.status === 429) throw new Error('今日 AI 額度已用完(429),明天太平洋時間午夜後(約臺灣下午3點)重置。');
      throw new Error('AI 翻譯請求失敗(' + aiRes.status + '):' + detail);
    }
    const aiData = await aiRes.json();
    let text = aiData.candidates?.[0]?.content?.parts?.[0]?.text;
    if(!text) throw new Error('AI 沒有回傳內容,可能被安全機制擋下。');
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const translatedItems = JSON.parse(text);
    
    let html = '';
    const makeClickable = (txt) => txt.split(' ').map(w => `<span class="clickable-word" style="cursor:pointer;" onclick="playAudio({en:'${w.replace(/[^a-zA-Z0-9'-]/g, '').replace(/'/g, "\\'")}'})">${w}</span>`).join(' ');
    
    translatedItems.forEach((item, idx) => {
      html += `
        <div class="news-item anim-gentle-in" style="cursor:default; animation-delay:${Math.min(idx * 0.08, 0.4)}s; opacity:0;">
          <div class="news-title" style="margin-bottom:4px;">${makeClickable(item.enTitle)}</div>
          <div style="font-size:14px; font-weight:700; color:var(--sage-dark); margin-bottom:10px;">${item.zhTitle}</div>
          <div class="news-desc" style="display:block; margin-bottom:4px;">${makeClickable(item.enDesc)}</div>
          <div style="font-size:13px; color:var(--muted); margin-bottom:14px;">${item.zhDesc}</div>
          <div style="display:flex; gap:8px;">
            <button class="accent-btn" style="flex:1; padding:0 8px;" onclick="generateNewsVocab(${idx})">📝 單字與句型</button>
            <button class="accent-btn" style="flex:1; padding:0 8px; background:var(--sage-light); color:var(--sage-dark); border:none;" onclick="generateNewsRP(${idx})">💬 實戰對話</button>
          </div>
        </div>
      `;
    });
    listEl.innerHTML = html;
    window.currentNewsItems = translatedItems;
    
  } catch (e) {
    listEl.innerHTML = '<div class="anim-gentle-in" style="text-align:center; padding: 20px; color:#8a4a26;">⚠️ ' + e.message + '</div>';
    console.error(e);
  }
}

async function generateNewsVocab(idx) {
  const item = window.currentNewsItems[idx];
  const statusEl = el('newsStatus');
  if(!geminiApiKey){ statusEl.textContent = '⚠️ 請先在「✨ AI情境」設定 Gemini API Key'; triggerAnim('newsStatus', 'anim-gentle-in'); return; }
  statusEl.textContent = '📝 AI 正在萃取單字與句型...'; triggerAnim('newsStatus', 'anim-gentle-in');
  try {
    const prompt = `請根據以下新聞，萃取 3 個重要單字與 2 個實用句型。
新聞標題：${item.enTitle}
摘要：${item.enDesc}
請只回傳 JSON 格式，包含這5個專案，不需要 markdown 標籤。
格式：{"words": [{"en":"單字或句型", "zh":"繁體中文意思"}]}`;
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': geminiApiKey },
      body: JSON.stringify({
        contents: [{role: "user", parts: [{text: prompt}]}],
        generationConfig: { responseMimeType: "application/json" }
      })
    });
    if(!res.ok){
      let detail = res.statusText;
      try{ const errJson = await res.json(); detail = errJson.error?.message || detail; }catch(e){}
      if(res.status === 429) throw new Error('今日 AI 額度已用完(429),明天太平洋時間午夜後(約臺灣下午3點)重置。');
      throw new Error('API 請求失敗(' + res.status + '):' + detail);
    }
    const data = await res.json();
    let text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if(!text) throw new Error('AI 沒有回傳內容,可能被安全機制擋下。');
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(text);
    
    if(!WORD_BANK.word) WORD_BANK.word = [];
    parsed.words.forEach(w => {
      w.cat = "新聞時事";
      w._type = 'word';
      WORD_BANK.word.push(w);
      aiGeneratedItems.push(w);
    });
    lsSet('speakup_ai_items', JSON.stringify(aiGeneratedItems));
    
    initBank();
    statusEl.textContent = '✅ 已加入題庫！'; triggerAnim('newsStatus', 'anim-gentle-in');
    
    setAppMode('general');
    activeCat = "新聞時事";
    itemIdx = 0;
    render(true);
    updateTriggerTexts();
  } catch(e) {
    statusEl.textContent = '⚠️ ' + e.message; triggerAnim('newsStatus', 'anim-gentle-in');
    console.error(e);
  }
}

async function generateNewsRP(idx) {
  const item = window.currentNewsItems[idx];
  const statusEl = el('newsStatus');
  if(!geminiApiKey){ statusEl.textContent = '⚠️ 請先在「✨ AI情境」設定 Gemini API Key'; triggerAnim('newsStatus', 'anim-gentle-in'); return; }
  statusEl.textContent = '💬 AI 正在設計實戰對話情境...'; triggerAnim('newsStatus', 'anim-gentle-in');
  try {
    const prompt = `請根據這則新聞，設計一個日常口語的「實戰對話情境」描述 (例如：你正在和朋友聊這則新聞...)。
新聞標題：${item.enTitle}
摘要：${item.enDesc}
請只回傳 JSON 格式，不需要 markdown 標籤。
格式：{"scenario": "情境描述"}`;
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': geminiApiKey },
      body: JSON.stringify({
        contents: [{role: "user", parts: [{text: prompt}]}],
        generationConfig: { responseMimeType: "application/json" }
      })
    });
    if(!res.ok){
      let detail = res.statusText;
      try{ const errJson = await res.json(); detail = errJson.error?.message || detail; }catch(e){}
      if(res.status === 429) throw new Error('今日 AI 額度已用完(429),明天太平洋時間午夜後(約臺灣下午3點)重置。');
      throw new Error('API 請求失敗(' + res.status + '):' + detail);
    }
    const data = await res.json();
    let text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if(!text) throw new Error('AI 沒有回傳內容,可能被安全機制擋下。');
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(text);
    
    el('rpScenarioInput').value = parsed.scenario;
    setAppMode('roleplay');
    el('rpStartBtn').click();
    statusEl.textContent = '';
  } catch(e) {
    statusEl.textContent = '⚠️ ' + e.message; triggerAnim('newsStatus', 'anim-gentle-in');
    console.error(e);
  }
}

/* ---------- 已完成清單畫面 ---------- */
function jumpToItem(en){
  for(let i=0;i<STAGES.length;i++){
    if(STAGES[i].key === 'favorites') continue; // skip the favorites pseudo-stage
    const idx = STAGES[i].items.findIndex(x => x.en === en);
    if(idx !== -1){
      const inferredMode = (activeCat && activeCat.startsWith('(AI)')) ? 'ai' : 'general';
      returnSnapshot = {
        appMode: (appMode === 'general' || appMode === 'ai') ? appMode : inferredMode,
        stageIdx: stageIdx,
        activeCat: activeCat,
        itemIdx: itemIdx
      };
      showReturnBanner();
      
      const item = STAGES[i].items[idx];
      stageIdx = i;
      activeCat = 'all';
      
      // 判斷該題目是否屬於純 AI 模式（例如角色扮演生成的，開頭是 '(AI)'）
      // 例如：如果新聞時事是 "新聞時事"，無 "(AI)"，所以會落在 general 模式
      const isAI = item.cat && item.cat.startsWith('(AI)');
      const targetMode = isAI ? 'ai' : 'general';
      
      // 計算在目標模式的過濾陣列中，真實的 index
      let filtered;
      if (isAI) {
        filtered = [];
        STAGES.forEach(stg => {
          stg.items.forEach(it => {
            if(it.cat && it.cat.startsWith('(AI)')) filtered.push(it);
          });
        });
      } else {
        filtered = STAGES[i].items.filter(it => !it.cat || !it.cat.startsWith('(AI)'));
      }
      
      const fIdx = filtered.findIndex(x => x.en === en);
      itemIdx = fIdx !== -1 ? fIdx : 0;
      
      saveProgress();
      setAppMode(targetMode, false, true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
  }
}

function renderCompleted(){
  const container = el('completedContainer');
  const list = Object.values(practiced);
  if(list.length === 0){
    container.innerHTML = '<div class="review-empty">還沒有練習紀錄喔。<br>在「系統題庫」開始練習，這裡會自動列出！</div>';
    return;
  }

  const groups = {};
  list.forEach(it => {
    const cat = it.cat || '未分類';
    if(!groups[cat]) groups[cat] = [];
    groups[cat].push(it);
  });

  const sortedCats = Object.keys(groups).sort();
  let html = '<div style="margin-bottom:14px;font-size:13px;color:var(--muted);text-align:center;">這裡是你所有練習過的單字與句子</div>';
  sortedCats.forEach((cat, gIdx) => {
    const items = groups[cat];
    html += `<details class="review-group anim-gentle-in" style="animation-delay:${Math.min(gIdx * 0.05, 0.3)}s; opacity:0;">
      <summary><div class="review-group-title-left"><span>${cat}</span></div><span class="review-group-count">${items.length} 題</span></summary>
      <div class="review-group-items">`;
    items.forEach(it => {
      html += `<div class="review-item" data-en="${it.en.replace(/"/g,'&quot;')}">
        <div>
          <div class="review-item-en">${it.en}</div>
          ${it.zh ? `<div class="review-item-zh">${it.zh}</div>` : ''}
        </div>
        <div style="color:var(--muted);">▶</div>
      </div>`;
    });
    html += `</div></details>`;
  });
  container.innerHTML = html;

  container.querySelectorAll('.review-item').forEach(row => {
    row.onclick = () => jumpToItem(row.getAttribute('data-en'));
  });
  bindReviewGroupToggleAnim(container);
}

function renderReview(){
  const container = el('reviewContainer');
  const list = Object.values(practiced);
  if(list.length === 0){
    container.innerHTML = '<div class="review-empty">還沒有練習紀錄。<br>回「系統題庫」開口練習,講過的題目會自動出現在這裡。</div>';
    return;
  }

  const groups = {};
  list.forEach(it => {
    const cat = it.cat || '未分類';
    if(!groups[cat]) groups[cat] = [];
    groups[cat].push(it);
  });

  const totalFlowers = Math.floor(list.length / 5);

  // 每 25 個新單字就慶祝一次(用 setTimeout 延後,等這次畫面渲染完成再撒花瓣,且只在真的「跨過」新裡程碑時觸發一次)
  const MILESTONE_STEP = 25;
  const currentMilestone = Math.floor(list.length / MILESTONE_STEP) * MILESTONE_STEP;
  const lastCelebrated = parseInt(lsGet('speakup_last_celebrated') || '0', 10);
  if(currentMilestone > 0 && currentMilestone > lastCelebrated){
    lsSet('speakup_last_celebrated', String(currentMilestone));
    setTimeout(() => celebrateMilestone(currentMilestone), 400);
  }

  const types = ['🌷', '🌹', '🌻', '🌼', '🌸', '🌺', '🪻'];
  // RARE_TYPE 現在是全域共用常數(跟花園小卡用同一個),這裡不用再宣告一次
  const getFlowerType = (idx) => {
    const wordSlice = list.slice(idx * 5, idx * 5 + 5);
    const isRare = wordSlice.some(w => (w && w.streakAtPractice || 0) >= 7);
    if(isRare) return RARE_TYPE;
    // 使用 hash01 產生真正的偽隨機分佈，避免因為 15 朵花剛好是 3 的倍數而造成每瓶長得一樣
    const typeIndex = Math.floor(hash01(idx * 17 + 5) * types.length);
    return types[typeIndex];
  };

  // hash01 現在是全域共用函式(跟花園小卡用同一份),這裡不用再宣告一次

  const VASE_CAPACITY = 15;
  const totalVases = Math.max(1, Math.ceil(totalFlowers / VASE_CAPACITY));

  // 花瓶開口(瓶頸最上緣)距離花瓶底部的高度,花朵的莖都是從這個點往外散開
  const VASE_H = 92;
  const NECK_TOP_Y = 84; // 花朵錨點,略微插入瓶口營造花莖插進瓶裡的感覺

  let vasesHtml = '';
  for (let v = totalVases - 1; v >= 0; v--) {
    const flowersInThisVase = Math.min(totalFlowers - v * VASE_CAPACITY, VASE_CAPACITY);
    let flowersHtml = '';
    const n = flowersInThisVase;

    // 扇形三層排列:由靠近花瓶開始算第一層,每層最多5朵花。
    // 同一層內用「固定水平間距的格子」排花,保證同層絕對不會疊在一起;
    // 層與層之間再用高度(莖長)差 + 左右錯位,做出交錯又不重疊的層次感。
    // 莖長整體壓低,即使三層都滿(15朵)也確保不會超出容器範圍,且花會更靠近瓶口的葉子。
    const PER_LAYER = 5;
    const SLOT_GAP = 9;                    // 張開用 slotX 計算：5朵的總寬度 = 4×9 = 36px，最外側共±18px
    const LAYER_X_OFFSET = [0, 0, 0];    // 移除寫死的偏移，讓花朵根據真實數量自然置中對齊
    const LAYER_STEM = [6, 18, 30];
    const LAYER_STEM_JITTER = 2;
    const LAYER_ARC = 15;                  // 微縮弧幅，不讓中間花跟外側花建差太大
    const LAYER_SIZE = [21, 19, 17];
    const LAYER_SIZE_JITTER = 2;

    for (let i = 0; i < flowersInThisVase; i++) {
      const globalIdx = v * VASE_CAPACITY + i;
      const fType = getFlowerType(globalIdx);

      const layer = Math.min(Math.floor(i / PER_LAYER), LAYER_STEM.length - 1);
      const slot = i - layer * PER_LAYER;
      const flowersInLayer = Math.min(PER_LAYER, flowersInThisVase - layer * PER_LAYER);

      const slotX = (slot - (flowersInLayer - 1) / 2) * SLOT_GAP;
      const jitterX = (hash01(globalIdx * 2) - 0.5) * 2; // 抖動改為固定小値，不隨 SLOT_GAP 放大
      const tx = slotX + LAYER_X_OFFSET[layer] + jitterX;

      const fullHalfWidth = ((PER_LAYER - 1) / 2) * SLOT_GAP + 1;
      const normalized = Math.abs(slotX) / fullHalfWidth; // 0=中央, 1=兩側
      const arcBoost = LAYER_ARC * (1 - normalized * normalized); // 拋物線弧度 → 中央高兩側低更自然
      const jitterY = (hash01(globalIdx * 2 + 1) - 0.5) * 4;
      const stem = LAYER_STEM[layer] + (hash01(globalIdx * 4 + 3) - 0.5) * LAYER_STEM_JITTER;
      const ty = -(stem + arcBoost + jitterY);

      // 花朵旋轉：用 atan2 計算莖方向角，強制限制在±18°以內，就算兩側花也不會倒得太過去
      const rawAngle = Math.atan2(tx, -ty) * (180 / Math.PI);
      const clampedAngle = Math.max(-18, Math.min(18, rawAngle)); // 強制不超過±18°
      const flowerRot = clampedAngle + (hash01(globalIdx * 7 + 3) - 0.5) * 4;

      const size = LAYER_SIZE[layer] + hash01(globalIdx * 5 + 11) * LAYER_SIZE_JITTER;
      // 層次 z-index：第一層(靠近瓶口)最大、第三層最小，但全部都大於葉子(8~12)，確保花永遠不會被葉子避擋
      const zIdx = 50 - layer * 8 + slot;  // layer0=50~54, layer1=42~46, layer2=34~38，都遠大於葉子的最大z=12
      const delay = (i * 0.03).toFixed(2);

      const isRareFlower = fType === RARE_TYPE;
      const animStyle = isRareFlower
        ? `animation:popIn 0.4s both, rareGlow 1.8s ease-in-out infinite; animation-delay:${delay}s, 0s;`
        : `animation:popIn 0.4s both; animation-delay:${delay}s;`;
      
      // 將動畫與座標定位分離，解決 iOS Safari 的 CSS 變數動畫 bug
      flowersHtml += `<div style="position:absolute; bottom:${NECK_TOP_Y}px; left:50%; margin-left:${-(size / 2)}px; font-size:${size.toFixed(0)}px; line-height:1; transform-origin:50% 100%; transform:translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px) rotate(${flowerRot.toFixed(1)}deg); z-index:${zIdx};" title="${isRareFlower ? '連續練習7天以上的獎勵花!' : ''}"><div style="${animStyle}; transform-origin:50% 100%;">${fType}</div></div>`;
    }

    // 瓶口貼一圈葉子:彼此左右緊靠、部分重疊,牢牢貼在瓶口位置,像是花插進葉叢裡的底座。
    // 其中一半刻意左右翻轉(scaleX(-1)),葉形不會全部一模一樣。
    let leavesHtml = '';
    if (flowersInThisVase > 0) {
      // 葉子：沿瓶口水平分散各自的起點，再各自傾斜向外，形成自然的部份重疊扇形
      // 5 片葉子，水平間距 11px（葉寬 ~18px，所以相鄰葉子約重疊 7px）
      const LEAF_SPREAD = 11;
      const leafDefs = [
        { tx: -22, angle: -38, size: 18, flip: false, ty: 0  },
        { tx: -11, angle: -18, size: 19, flip: true,  ty: -3 },
        { tx:   0, angle:   0, size: 20, flip: false, ty: -5 },
        { tx:  11, angle:  18, size: 19, flip: true,  ty: -3 },
        { tx:  22, angle:  38, size: 18, flip: false, ty: 0  }
      ];
      leavesHtml = leafDefs.map((lf, li) => {
        const leafDelay = (flowersInThisVase * 0.03 + li * 0.03).toFixed(2);
        return `<div style="position:absolute; bottom:${NECK_TOP_Y}px; left:50%; margin-left:${(lf.tx - lf.size / 2).toFixed(1)}px; font-size:${lf.size}px; line-height:1; transform:translateY(${lf.ty}px) rotate(${lf.angle}deg)${lf.flip ? ' scaleX(-1)' : ''}; transform-origin:50% 100%; z-index:${8 + li}; opacity:0.93;"><div style="animation:popIn 0.3s both; animation-delay:${leafDelay}s; transform-origin:50% 100%;">🌿</div></div>`;
      }).join('');
    }

    const vaseWordStart = v * VASE_CAPACITY * 5;
    const vaseWordEnd = Math.min(list.length, vaseWordStart + flowersInThisVase * 5);
    const vaseWords = list.slice(vaseWordStart, vaseWordEnd);
    let vaseDateLabel = '';
    if(vaseWords.length > 0){
      const times = vaseWords.map(w => w.lastPracticed).filter(Boolean);
      if(times.length){
        const fmtDate = (t) => { const d = new Date(t); return `${d.getMonth() + 1}/${d.getDate()}`; };
        const minT = Math.min(...times), maxT = Math.max(...times);
        vaseDateLabel = (fmtDate(minT) === fmtDate(maxT)) ? fmtDate(minT) : `${fmtDate(minT)}~${fmtDate(maxT)}`;
      }
    }

    vasesHtml += `
      <div class="vase-slide" style="flex:0 0 100%; scroll-snap-align:center; position:relative; width:100%; height:240px; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; padding-bottom:8px; gap:8px;">
        <div style="position:relative; width:100%; height:165px; transform:scale(1.3); transform-origin:bottom center;">
          ${flowersHtml}
          ${leavesHtml}
          <svg class="anim-fade-in" viewBox="0 0 60 100" width="58" height="${VASE_H}" style="position:absolute; bottom:0; left:50%; transform:translateX(-50%); z-index:1; overflow:visible;">
            <defs>
              <filter id="vaseShadow${v}" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.12"/>
              </filter>
            </defs>
            <ellipse cx="30" cy="98" rx="19" ry="3" fill="#000000" opacity="0.08"/>
            <path d="M24,1 C20,3 21,12 23,22 C25,32 26,40 27,46 C15,54 8,64 8,77 C8,90 14,97 22,99 L38,99 C46,97 52,90 52,77 C52,64 45,54 33,46 C34,40 35,32 37,22 C39,12 40,3 36,1 C33,-0.6 27,-0.6 24,1 Z"
                  fill="#fdfcfa" stroke="#ddd7c9" stroke-width="1.2" filter="url(#vaseShadow${v})"/>
            <path d="M24,1 C20,3 21,12 23,22 C25,32 26,40 27,46 C18,53 11,61 9,72" fill="none" stroke="#00000008" stroke-width="4" stroke-linecap="round"/>
            <ellipse cx="30" cy="2" rx="6.2" ry="1.7" fill="#efece3" stroke="#ddd7c9" stroke-width="0.6"/>
          </svg>
        </div>
        ${flowersInThisVase > 0 ? `<div style="background:rgba(255,255,255,0.85); border:1px solid var(--line); border-radius:999px; padding:3px 12px; font-size:11px; font-weight:700; color:var(--sage-dark); box-shadow:0 1px 4px rgba(0,0,0,0.06); z-index:5;">第${v + 1}瓶${vaseDateLabel ? ' · ' + vaseDateLabel : ''}</div>` : ''}
        ${flowersInThisVase === 0 ? `<div style="font-size:13px; color:var(--muted); position:absolute; top:40px; width:100%; text-align:center; z-index:2;">🌱 再練 ${5 - (list.length % 5)} 詞<br>會開出第一朵花</div>` : ''}
      </div>
    `;
  }

  const todayStr = localDateStr();
  let renderStreak = streakData.count;
  if(streakData.lastActive && streakData.lastActive !== todayStr) {
    const diff = Math.floor((new Date(todayStr) - new Date(streakData.lastActive)) / (1000*60*60*24));
    if(diff > 1) renderStreak = 0;
  }
  let gardenBg = 'var(--card)';
  let gardenColor = 'var(--sage-dark)';
  let streakText = '';
  // 跟花園小卡用同一組漸層色(米白 → 淡綠),連續天數越多,漸層從瓶底往上填得越高
  const GARDEN_GRAD_TOP = '#f3ede0';
  const GARDEN_GRAD_BOTTOM = '#dce6da';
  if(renderStreak > 0 && renderStreak < 7) {
    const p = Math.min(100, Math.floor((renderStreak/7)*100));
    gardenBg = `linear-gradient(to top, ${GARDEN_GRAD_BOTTOM} 0%, ${GARDEN_GRAD_TOP} ${p}%, var(--card) ${p}%, var(--card) 100%)`;
    streakText = `🔥 連續 ${renderStreak} 天`;
  } else if (renderStreak >= 7) {
    gardenBg = `linear-gradient(to top, ${GARDEN_GRAD_BOTTOM} 0%, ${GARDEN_GRAD_TOP} 100%)`;
    gardenColor = 'var(--sage-dark)'; // 背景變淺了,文字改回深色才看得清楚(原本白字是配深色背景用的)
    streakText = `🔥 完美連勝 (${renderStreak} 天)`;
  }
  
  // 等級系統（15 階，涵蓋 0–2000+ 詞）
  const levelDefs = [
    { min:0,    max:9,    label:'🌱 嫩芽',     color:'#8fba6c' },
    { min:10,   max:24,   label:'🪴 小苗',     color:'#6dba8c' },
    { min:25,   max:49,   label:'🌿 茁壯',   color:'#5aaa82' },
    { min:50,   max:79,   label:'🌼 初綻放',   color:'#f0c040' },
    { min:80,   max:119,  label:'🌸 嬌嫩花',   color:'#e88fad' },
    { min:120,  max:179,  label:'🌺 豔麗花',   color:'#e05090' },
    { min:180,  max:249,  label:'🌻 向陽花',   color:'#f5a623' },
    { min:250,  max:349,  label:'🌹 含情玫',   color:'#d63060' },
    { min:350,  max:499,  label:'🌷 鬱金香',   color:'#9b59b6' },
    { min:500,  max:699,  label:'🪻 薰衣草',   color:'#7e57c2' },
    { min:700,  max:999,  label:'🏵️ 花藝師',  color:'#4caf8a' },
    { min:1000, max:1299, label:'💐 花束大師', color:'#e67e22' },
    { min:1300, max:1699, label:'🌳 語言之樹', color:'#27ae60' },
    { min:1700, max:1999, label:'🌲 百年古木', color:'#1a6b3a' },
    { min:2000, max:Infinity, label:'👑 花語宗師', color:'#c0a000' }
  ];
  const level = levelDefs.find(l => list.length >= l.min && list.length <= l.max) || levelDefs[0];
  const nextLevel = levelDefs[levelDefs.indexOf(level) + 1];

  // 偵測「升級」這個時刻:跟上次記錄的等級不一樣才慶祝,避免每次重新整理都跳出來
  const prevLevelLabel = lsGet('speakup_last_level');
  if(prevLevelLabel && prevLevelLabel !== level.label){
    setTimeout(() => celebrateLevelUp(level.label, level.color), 500);
  }
  lsSet('speakup_last_level', level.label);

  // 今日練習題數
  const today = localDateStr();
  const dailyStored = safeParse(lsGet('speakup_daily'), {date:"",count:0});
  const todayCount = (dailyStored.date === today) ? dailyStored.count : 0;

  // 距離下一朵花：永遠算「還差幾詞才會長出下一朵」
  // 30 % 5 === 0 代表剛好整數朵，但下一朵還需要再練 5 詞
  const remainder = list.length % 5;
  const toNextFlower = remainder === 0 ? 5 : (5 - remainder);

  const statCard = (icon, label, value, color) =>
    `<div style="background:var(--bg); border:1px solid var(--line); border-radius:10px; padding:8px 10px; text-align:left;">
      <div style="font-size:10px; color:var(--muted); margin-bottom:2px;">${icon} ${label}</div>
      <div style="font-size:15px; font-weight:700; color:${color || 'var(--sage-dark)'};">${value}</div>
    </div>`;

  const levelModalRows = levelDefs.map((l, i) => {
    const isCurrent = list.length >= l.min && list.length <= l.max;
    return `<tr style="background:${isCurrent ? 'rgba(123,174,127,0.12)' : 'transparent'}; font-weight:${isCurrent ? '700' : '400'}">
      <td style="padding:5px 8px; font-size:13px;">${l.label}</td>
      <td style="padding:5px 8px; font-size:12px; color:var(--muted); text-align:right;">${l.max === Infinity ? `${l.min}+` : `${l.min}–${l.max}`} 詞</td>
      ${isCurrent ? `<td style="padding:5px 4px; font-size:11px; color:#7BAE7F;">← 你在這</td>` : '<td></td>'}
    </tr>`;
  }).join('');

  const levelCardHtml = `
    <div id="levelStatCard" onclick="openLevelModal()" style="background:var(--bg); border:1px solid var(--line); border-radius:10px; padding:8px 10px; text-align:left; cursor:pointer; user-select:none;">
      <div style="font-size:11px; color:var(--muted); margin-bottom:2px; white-space:nowrap;">🏅 等級 <span style="font-size:9px; opacity:0.6;">（點選檢視）</span></div>
      <div style="font-size:16px; font-weight:700; color:${level.color};">${level.label}</div>
      ${nextLevel ? `<div style="font-size:10px; color:var(--muted); margin-top:1px;">下一階：${nextLevel.label}</div>` : `<div style="font-size:10px; color:#c0a000; margin-top:1px;">已達最高階！</div>`}
    </div>
    <div id="levelModal" onclick="if(event.target===this)closeLevelModal()" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.4); z-index:9999; align-items:center; justify-content:center; padding:20px;">
      <div id="levelModalBox" style="background:var(--card); border-radius:16px; padding:20px; max-width:320px; width:100%; max-height:80vh; overflow-y:auto; box-shadow:0 8px 32px rgba(0,0,0,0.2);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
          <div style="font-size:15px; font-weight:700; color:var(--sage-dark);">🌸 等級表</div>
          <button onclick="closeLevelModal()" style="border:none; background:none; font-size:20px; color:var(--muted); cursor:pointer; line-height:1;">×</button>
        </div>
        <table style="width:100%; border-collapse:collapse;">
          ${levelModalRows}
        </table>
        <div style="margin-top:12px; font-size:11px; color:var(--muted); text-align:center;">目前已掌握 ${list.length} 詞</div>
      </div>
    </div>`;

  let gardenHtml = `
  <style>.vase-carousel::-webkit-scrollbar { display: none; }</style>
  <div style="background:var(--card); border:1px solid var(--line); border-radius:14px; padding:16px; margin-bottom:20px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
    <div style="font-size:18px; color:var(--sage-dark); font-weight:800; text-align:left; letter-spacing:0.5px; padding-left:4px; margin-bottom:12px;">
      💐 語感花室
    </div>
    <div style="display:flex; gap:12px; align-items:stretch;">
      <!-- 左欄：花瓶漸層背景 -->
      <div style="flex:1; min-width:0; position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; background:${gardenBg}; border-radius:12px; padding:24px 4px 10px; border:1px solid var(--line); transition: background 0.5s ease;">
        <div style="position:absolute; top:8px; right:10px; font-size:12px; font-weight:700; color:${gardenColor};" class="${renderStreak > 0 ? 'anim-flame' : ''}">${streakText}</div>
        <div style="position:relative; display:flex; align-items:center; width:100%;">
          <button id="vasePrevBtn" style="flex-shrink:0; width:24px; height:24px; border-radius:50%; border:1px solid var(--line); background:var(--card); color:${totalVases > 1 ? 'var(--sage-dark)' : 'var(--line)'}; font-size:14px; cursor:${totalVases > 1 ? 'pointer' : 'default'}; display:flex; align-items:center; justify-content:center;" ${totalVases <= 1 ? 'disabled' : ''}>&#8249;</button>
          <div id="vaseCarousel" class="vase-carousel" style="flex:1; display:flex; overflow-x:auto; scroll-snap-type:x mandatory; gap:0; scrollbar-width:none; scroll-behavior:smooth;">
            ${vasesHtml}
          </div>
          <button id="vaseNextBtn" style="flex-shrink:0; width:24px; height:24px; border-radius:50%; border:1px solid var(--line); background:var(--card); color:${totalVases > 1 ? 'var(--sage-dark)' : 'var(--line)'}; font-size:14px; cursor:${totalVases > 1 ? 'pointer' : 'default'}; display:flex; align-items:center; justify-content:center;" ${totalVases <= 1 ? 'disabled' : ''}>&#8250;</button>
        </div>
        ${totalVases > 1 ? `<div style="font-size:10px; color:var(--sage); margin-top:8px;">共 ${totalVases} 瓶，滑動檢視</div>` : ''}
      </div>
      <!-- 右欄：統計 (4個卡片) -->
      <div style="width:115px; flex-shrink:0; display:flex; flex-direction:column; gap:8px;">
        <div style="background:var(--bg); border:1px solid var(--line); border-radius:10px; padding:8px 10px;">
          <div style="font-size:11px; color:var(--muted); margin-bottom:2px;">🌷 已掌握</div>
          <div style="font-size:22px; font-weight:700; color:var(--sage-dark); line-height:1.1;">${list.length} <span style="font-size:14px; font-weight:500;">詞</span></div>
        </div>
        <div style="background:var(--bg); border:1px solid var(--line); border-radius:10px; padding:8px 10px;">
          <div style="font-size:11px; color:var(--muted); margin-bottom:2px;">🌱 下一朵花</div>
          <div style="font-size:15px; font-weight:700; color:#7BAE7F; line-height:1.2;">還需 ${toNextFlower} 詞</div>
        </div>
        <div style="background:var(--bg); border:1px solid var(--line); border-radius:10px; padding:8px 10px;">
          <div style="font-size:11px; color:var(--muted); margin-bottom:2px;">✏️ 今日練習</div>
          <div style="font-size:15px; font-weight:700; color:#e8a24b; line-height:1.2;">${todayCount > 0 ? `+${todayCount} 題` : '尚未開始'}</div>
        </div>
        ${levelCardHtml}
      </div>
    </div>
    <div style="display:flex; gap:8px; margin-top:12px;">
      <button id="shareGardenBtn" style="flex:1; padding:10px; border-radius:10px; border:1px solid var(--line); background:var(--bg); color:var(--sage-dark); font-weight:700; font-size:13px; cursor:pointer;">📤 分享花園小卡</button>
      <button id="shareWeeklyBtn" style="flex:1; padding:10px; border-radius:10px; border:1px solid var(--line); background:var(--bg); color:var(--sage-dark); font-weight:700; font-size:13px; cursor:pointer;">📅 分享本週週報</button>
    </div>
  </div>`;

  let html = gardenHtml;
  container.innerHTML = html;

  const shareWeeklyBtn = container.querySelector('#shareWeeklyBtn');
  if(shareWeeklyBtn){
    shareWeeklyBtn.onclick = () => shareWeeklyCard();
  }

  const shareGardenBtn = container.querySelector('#shareGardenBtn');
  if(shareGardenBtn){
    const latestVaseIdx = totalVases - 1;
    const flowersInLatestVase = Math.max(0, Math.min(totalFlowers - latestVaseIdx * VASE_CAPACITY, VASE_CAPACITY));
    const shareFlowerTypes = [];
    for(let i = 0; i < flowersInLatestVase; i++){
      shareFlowerTypes.push(getFlowerType(latestVaseIdx * VASE_CAPACITY + i));
    }
    shareGardenBtn.onclick = () => shareGardenCard(shareFlowerTypes, list.length, level.label, level.color, renderStreak, toNextFlower, latestVaseIdx * VASE_CAPACITY);
  }

  const vaseCarousel = container.querySelector('#vaseCarousel');
  const vasePrevBtn = container.querySelector('#vasePrevBtn');
  const vaseNextBtn = container.querySelector('#vaseNextBtn');
  if(vaseCarousel && vasePrevBtn && vaseNextBtn){
    const scrollByOneVase = (dir) => {
      const slide = vaseCarousel.querySelector('.vase-slide');
      const step = slide ? slide.getBoundingClientRect().width : vaseCarousel.clientWidth;
      vaseCarousel.scrollBy({ left: dir * step, behavior: 'smooth' });
    };
    vasePrevBtn.onclick = () => scrollByOneVase(-1);
    vaseNextBtn.onclick = () => scrollByOneVase(1);
  }
}

function renderFavorites(){
  const container = el('favoritesContainer');
  if(favorites.length === 0){
    container.innerHTML = '<div class="review-empty">⭐ 還沒有收藏。<br>在練習卷片右上角點 <strong>☆</strong> 可以將題目加入收藏。</div>';
    return;
  }

  const groups = {};
  favorites.forEach(it => {
    const cat = it.cat || '未分類';
    const displayCat = cat.startsWith('(AI) ') ? cat.replace('(AI) ','✨ ') : cat;
    if(!groups[displayCat]) groups[displayCat] = [];
    groups[displayCat].push(it);
  });

  const sortedCats = Object.keys(groups).sort();
  let html = '<div style="margin-bottom:14px;font-size:13px;color:var(--muted);">\u9ede專案可回到練習，點⭐可取消收藏。</div>';
  sortedCats.forEach((cat, gIdx) => {
    const items = groups[cat];
    html += `<div class="review-group anim-gentle-in" style="animation-delay:${Math.min(gIdx * 0.05, 0.3)}s; opacity:0;">
      <div class="review-group-title"><span>${cat}</span><span class="review-group-count">${items.length} \u984c</span></div>`;
    items.forEach(it => {
      html += `<div class="review-item" data-en="${it.en.replace(/"/g,'&quot;')}">
        <div style="flex:1;min-width:0;">
          <div class="review-item-en">${it.en}</div>
          ${it.zh ? `<div class="review-item-zh">${it.zh}</div>` : ''}
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-shrink:0;">
          <button class="fav-remove-btn" data-en="${it.en.replace(/"/g,'&quot;')}" title="\u53d6消收藏" style="background:none;border:none;cursor:pointer;font-size:20px;padding:6px;line-height:1;min-width:36px;min-height:36px;">⭐</button>
          <span style="color:var(--muted);font-size:14px;">→</span>
        </div>
      </div>`;
    });
    html += `</div>`;
  });
  container.innerHTML = html;

  container.querySelectorAll('.review-item').forEach(row => {
    row.onclick = (e) => {
      if(e.target.closest('.fav-remove-btn')) return;
      jumpToItem(row.getAttribute('data-en'));
    };
  });

  container.querySelectorAll('.fav-remove-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const en = btn.getAttribute('data-en');
      favorites = favorites.filter(f => f.en !== en);
      saveFavorites();
      // Also update the favorites STAGE items
      const favStage = STAGES.find(s => s.key === 'favorites');
      if(favStage) favStage.items = favorites;
      renderFavorites();
    };
  });
}

let aiGeneratedItems = [];
try {
  const savedAI = lsGet('speakup_ai_items');
  if(savedAI) aiGeneratedItems = JSON.parse(savedAI);
} catch(e) {}

// 使用者自訂加入的題目(透過「想加自己的內容」表單)，需另外持久化，
// 不然重新整理頁面後「已完成」清單裡的自訂專案會找不到資料而點不回去。
let customItems = [];
try {
  const savedCustom = lsGet('speakup_custom_items');
  if(savedCustom) customItems = JSON.parse(savedCustom);
} catch(e) {}
function saveCustomItems(){
  lsSet('speakup_custom_items', JSON.stringify(customItems));
}
function restoreCustomItems(){
  customItems.forEach(saved => {
    const stage = STAGES.find(s => s.key === saved._stageKey);
    if(!stage) return;
    if(stage.items.some(x => x.en === saved.en)) return; // 避免重複加入
    const { _stageKey, ...item } = saved;
    stage.items.push(item);
  });
}

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
  
  // 注入 AI 生成的題目(先檢查是否已經在裡面,避免 initBank 被重複呼叫時無限疊加)
  aiGeneratedItems.forEach(item => {
    const targetKey = item._type || 'word';
    if(WORD_BANK[targetKey]) {
      const alreadyIn = WORD_BANK[targetKey].some(x => x.en === item.en);
      if(!alreadyIn) WORD_BANK[targetKey].push(item);
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

  // 復原已練習但遺失的專案 (例如未存入 aiGeneratedItems 的舊新聞單字)
  Object.values(practiced).forEach(p => {
    const stage = STAGES[p.stage] || STAGES[0];
    const existing = existingEnSet(stage);
    if (!existing.has(p.en.toLowerCase())) {
      stage.items.push({ en: p.en, zh: p.zh, cat: p.cat });
    }
  });
}
initBank();
restoreCustomItems();

const DICT_API = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

let recognition = null;
let isRecording = false;
let accentPref = 'us';

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
  // 全域性音標
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

/* ---------- 用 Gemini 自動翻譯中文(當使用者沒填中文時) ---------- */
async function fetchZhViaGemini(text){
  if(!geminiApiKey) return '';
  const prompt = `請給出英文「${text}」最常用、最自然的繁體中文(臺灣)翻譯。只要輸出翻譯本身,不要加任何解釋、標點或多餘文字,控制在12個字以內。`;
  try{
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': geminiApiKey },
      body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: prompt }] }] })
    });
    if(!res.ok) return '';
    const data = await res.json();
    const text2 = (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) ? data.candidates[0].content.parts[0].text : '';
    return text2 ? text2.trim().replace(/^["「]|["」]$/g, '') : '';
  }catch(e){
    return '';
  }
}

function applyVoice(u, langCode) {
  u.lang = langCode;
  const voices = speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    let voice = voices.find(v => v.lang === langCode || v.lang.replace('_','-') === langCode);
    if (!voice) voice = voices.find(v => v.lang.startsWith(langCode.split('-')[0]));
    if (voice) u.voice = voice;
  }
}

function speak(text){
  if(!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  applyVoice(u, 'en-US');
  u.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

// 發音：改為全面使用瀏覽器內建 TTS (speechSynthesis)
function playAudio(item, rate = 0.9){
  if(!('speechSynthesis' in window)) return;
  speechSynthesis.cancel(); // 中斷現有音訊
  const u = new SpeechSynthesisUtterance(item.en);
  applyVoice(u, accentPref === 'uk' ? 'en-GB' : 'en-US');
  u.rate = rate;
  speechSynthesis.speak(u);
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

// 把 IPA/KK 音標符號轉換成看得懂的英文字母拼法（近似值，幫助抓感覺，不是精確音標）
// IPA → 白話英文拼法對照表（讓臺灣人直覺讀出英文發音）
const IPA_TO_PLAIN = [
  // 子音組合（優先處理，避免被單音節拆散）
  ['tʃ','ch'], ['dʒ','j'],
  // 雙母音與三母音（Diphthongs & Triphthongs）
  ['aɪə','ai-uh'], ['aʊə','ow-uh'],
  ['eɪ','ay'], ['aɪ','ai'], ['ɔɪ','oy'], ['aʊ','ow'], ['oʊ','oh'], ['əʊ','oh'],
  ['eə','air'], ['ɪə','eer'], ['ʊə','oor'],
  // R音化母音
  ['ɜːr','er'], ['ɜː','er'], ['ɝ','er'], ['ər','er'], ['ɚ','er'],
  ['ɔːr','or'], ['ɑːr','ar'],
  // 長母音
  ['ɔː','aw'], ['ɑː','ah'], ['iː','ee'], ['uː','oo'],
  // 特殊子音
  ['ʃ','sh'], ['ʒ','zh'], ['θ','th'], ['ð','th'], ['ŋ','ng'],
  // 短母音（schwa ə 放最後，因為它很常見且不能覆蓋其他音）
  ['ɪ','i'],   // bit → bit
  ['ɛ','e'],   // bed → bed
  ['æ','a'],   // cat → cat
  ['ɒ','o'],   // lot → lot（英式短o）
  ['ɑ','ah'],  // lot → laht（美音）
  ['ʌ','u'],   // cup → cup（比 uh 更直覺）
  ['ʊ','oo'],  // book → book（短oo）
  ['ə','uh'],  // schwa，輕讀音節
  // 其他符號標準化
  ['ɹ','r'], ['ɡ','g'], ['j','y'],
  ['x','k'],   // loch → lock
  ['ʔ',''],    // 喉塞音，略去
];

function ipaToPlain(syl){
  let s = syl;
  IPA_TO_PLAIN.forEach(([ipa, plain]) => { s = s.split(ipa).join(plain); });
  return s.replace(/[ːˑ]/g, '');
}

// 把音標字串拆成音節，轉換成白話拼音，並把重音節放大加粗
function renderPhonetics(phon){
  const block = el('phonBlock');
  const visual = el('phonVisual');
  const rawRow = el('phonRawRow');
  if(!phon){ block.style.display = 'none'; visual.innerHTML = ''; if(rawRow) rawRow.textContent = ''; return; }
  block.style.display = 'block';
  const clean = phon.replace(/^\/|\/$/g,'').trim().replace(/ɹ/g, 'r').replace(/ɡ/g, 'g');

  // 確保重音符號和句點都可以作為音節分隔
  let marked = clean.replace(/([ˈˌ])/g, '.$1');
  marked = marked.replace(/\.+/g, '.');
  marked = marked.replace(/^\./, '');

  const parts = marked.split('.').filter(Boolean);

  const syllables = parts.map(syl => ({
    raw: syl.replace(/[ˈˌ]/g,''),
    stressed: syl.includes('ˈ'),
    secondary: syl.includes('ˌ')
  }));

  visual.innerHTML = syllables.map(s => {
    const cls = s.stressed ? ' stressed' : (s.secondary ? ' secondary' : '');
    const plain = ipaToPlain(s.raw) || s.raw;
    return '<span class="syl' + cls + '">' + plain + '</span>';
  }).join('<span class="dot">-</span>');

  if(rawRow) rawRow.textContent = '音標參考：/' + clean + '/';
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
  if(appMode === 'random') return randomReviewItems;
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
    if(s.key === 'favorites') return; // favorites is now a top-level mode tab
    const d = document.createElement('div');
    d.className = 'rung' + (i===stageIdx?' active':'');
    d.textContent = s.label;
    d.onclick = () => {
      clearReturnSnapshot();
      stageIdx = i;
      activeCat = lastCat[`general_${stageIdx}`] || 'all';
      itemIdx = getSavedItemIdx(stageIdx, activeCat);
      saveProgress();
      render();
    };
    ladder.appendChild(d);
  });
}

function renderCats(){
  const wrap = el('cats');
  wrap.innerHTML = '';
  const cats = categoriesForMode(appMode);

  function getProgressHint(cName) {
    if (cName === 'all') return '';
    let catItems = [];
    if (appMode === 'ai') {
      STAGES.forEach(stg => stg.items.forEach(it => {
        if(it.cat && it.cat.startsWith('(AI)') && it.cat === cName) catItems.push(it);
      }));
    } else {
      const stage = STAGES[stageIdx] || STAGES[0];
      catItems = stage.items.filter(it => (!it.cat || !it.cat.startsWith('(AI)')) && it.cat === cName);
    }
    const total = catItems.length;
    if(total === 0) return '';
    const practicedCount = catItems.filter(it => practiced[it.en]).length;
    const remaining = total - practicedCount;
    if (remaining <= 0) return '<span class="cat-hint anim-fade-in" style="font-size:11px; opacity:0.7; margin-left:4px;">(已完成)</span>';
    return `<span class="cat-hint anim-fade-in" style="font-size:11px; opacity:0.7; margin-left:4px;">(剩 ${remaining})</span>`;
  }

  function createPill(c, isRecentSection = false) {
    const isAll = (c === 'all');
    let displayName = isAll ? '全部' : c;
    if(!isAll && displayName.startsWith('(AI) ')) displayName = displayName.replace('(AI) ', '✨ ');
    
    const p = document.createElement('div');
    p.className = 'cat-pill anim-gentle-in' + (activeCat === c ? ' active' : '');
    p.innerHTML = displayName + (isAll ? '' : getProgressHint(c));
    
    p.onclick = () => { 
      clearReturnSnapshot(); 
      activeCat = c; 
      if (!isAll) updateRecentCats(c);
      itemIdx = getSavedItemIdx(stageIdx, c); 
      saveProgress(); 
      render(); 
    };
    return p;
  }

  const validRecentCats = recentCats.filter(rc => cats.includes(rc));
  if (validRecentCats.length > 0) {
    const recentLabel = document.createElement('div');
    recentLabel.className = 'anim-fade-in';
    recentLabel.style.fontSize = '12px';
    recentLabel.style.color = 'var(--muted)';
    recentLabel.style.width = '100%';
    recentLabel.style.margin = '4px 0 2px 4px';
    recentLabel.textContent = '最近使用';
    wrap.appendChild(recentLabel);
    
    validRecentCats.forEach(c => wrap.appendChild(createPill(c, true)));
    
    const div = document.createElement('div');
    div.className = 'anim-fade-in';
    div.style.width = '100%';
    div.style.height = '1px';
    div.style.background = 'var(--line)';
    div.style.margin = '8px 0';
    wrap.appendChild(div);
  }

  wrap.appendChild(createPill('all'));
  cats.forEach(c => wrap.appendChild(createPill(c)));
}

function currentStage(){ return STAGES[stageIdx]; }
function currentItem(){
  const items = filteredItems();
  if(itemIdx >= items.length) itemIdx = 0;
  return items[itemIdx];
}

function render(skipTargetAnim = false){
  if(appMode === 'roleplay' || appMode === 'favorites' || appMode === 'review' || appMode === 'completed') return;
  renderLadder();
  const stage = currentStage();
  el('stageDesc').textContent = stage.desc;
  renderCats();
  updateTriggerTexts();
  
  el('targetLabel').textContent = appMode === 'ai' ? 'AI 專屬情境' : (stage.label === '自由回答' ? '看情境,講一句' : '跟著念');
  
  const items = filteredItems();
  const item = items[itemIdx];
  if(!item){ 
    el('target').textContent = '找不到題庫資料，請確認是否已上傳 word_bank.js！'; 
    el('targetZh').textContent=''; el('targetCat').textContent=''; el('counter').textContent=''; renderPhonetics(null); return; 
  }
  
  el('target').innerHTML = '';
  el('target').classList.remove('anim-fade-in');
  el('targetZh').classList.remove('anim-fade-in');
  void el('target').offsetWidth;

  const words = item.en.split(' ');
  words.forEach((w, i) => {
    const span = document.createElement('span');
    span.textContent = w;
    span.className = 'clickable-word';
    span.title = '點選發音';
    span.onclick = () => {
      if(typeof isBlindMode !== 'undefined' && isBlindMode && !el('target').classList.contains('revealed')) return;
      const cleanWord = w.replace(/[^a-zA-Z0-9'-]/g, '');
      if(cleanWord) playAudio({en: cleanWord});
    };
    el('target').appendChild(span);
    if(i < words.length - 1) el('target').appendChild(document.createTextNode(' '));
  });
  
  el('target').classList.add('anim-fade-in');
  el('targetZh').classList.add('anim-fade-in');
  if(skipTargetAnim){
    // 這次的內容更新已經由外層容器(整個分頁切換、或上一題/下一題的左右滑動)負責動畫了,
    // 這裡的淡入只是保底用的樣式狀態,不用真的重播一次,不然兩層動畫疊在一起節奏會亂掉。
    el('target').classList.remove('anim-fade-in');
    el('targetZh').classList.remove('anim-fade-in');
  }

  if(typeof isBlindMode !== 'undefined' && isBlindMode) {
    el('target').classList.add('blind');
    el('target').classList.remove('revealed');
  } else {
    el('target').classList.remove('blind', 'revealed');
  }
  
  el('target').onclick = () => {
    if(typeof isBlindMode !== 'undefined' && isBlindMode) {
      el('target').classList.add('revealed');
    }
  };
  el('targetZh').textContent = item.zh || '';
  el('targetCat').textContent = item.cat ? (item.cat.startsWith('(AI) ') ? item.cat.replace('(AI) ', '✨ ') : item.cat) : '';
  el('counter').textContent = (itemIdx+1) + ' / ' + items.length;

  // Update Favorite Button
  const isFav = favorites.some(f => f.en === item.en);
  const favBtn = el('favBtn');
  favBtn.textContent = isFav ? '⭐' : '☆';
  favBtn.style.color = isFav ? '#f59e0b' : 'var(--muted)';
  
  // Apply pop if newly favorited (handled in onclick to avoid popping on every render, wait, render is called on next/prev too)
  
  favBtn.onclick = () => {
    if(isFav) {
      favorites = favorites.filter(f => f.en !== item.en);
    } else {
      favorites.push({...item});
      triggerAnim('favBtn', 'anim-pop');
    }
    saveFavorites();
    const favStage = STAGES.find(s => s.key === 'favorites');
    if(favStage) favStage.items = favorites;
    if(currentStage().key === 'favorites' && isFav) {
      itemIdx = Math.max(0, itemIdx - 1);
    }
    render();
  };

  el('result').classList.remove('show');
  el('coachBtn').style.display = 'none';
  el('coachBtn').textContent = '💡 請 AI 教練抓漏';
  el('coachBtn').disabled = false;
  el('coachFeedback').style.display = 'none';
  el('coachFeedback').style.color = '';
  el('coachFeedback').textContent = '';
  if(el('coachVocabArea')) el('coachVocabArea').style.display = 'none';
  
  el('recBtn').innerHTML = '🎙';
  el('recBtn').classList.remove('recording');
  el('liveTranscript').textContent = '';

  renderPhonetics(getVariant(item) ? getVariant(item).phon : null);

  // 對所有單字（不含空格的英文）自動查字典取得音標
  if(!/\s/.test(item.en) && !item._fetched && !item._fetching){
    fetchAndEnrich(item);
  }
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

function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// 用最長共同子序列(LCS)找出「目標句子」裡哪些字有在使用者講的話裡對上,
// 用來做逐字染色(對到=綠色,沒對到=紅色,不論是講錯還是漏掉都算)。
function wordDiffMatch(targetWords, heardWords){
  const m = targetWords.length, n = heardWords.length;
  const dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));
  for(let i = 1; i <= m; i++){
    for(let j = 1; j <= n; j++){
      dp[i][j] = targetWords[i-1] === heardWords[j-1] ? dp[i-1][j-1] + 1 : Math.max(dp[i-1][j], dp[i][j-1]);
    }
  }
  const matched = new Array(m).fill(false);
  let i = m, j = n;
  while(i > 0 && j > 0){
    if(targetWords[i-1] === heardWords[j-1]){
      matched[i-1] = true; i--; j--;
    } else if(dp[i-1][j] >= dp[i][j-1]){
      i--;
    } else {
      j--;
    }
  }
  return matched;
}

function renderWordDiff(targetText, heardText){
  const targetRaw = targetText.split(/\s+/).filter(Boolean);
  const heardRaw = heardText.split(/\s+/).filter(Boolean);
  const cleanWord = w => w.toLowerCase().replace(/[^\w']/g, '');
  const targetClean = targetRaw.map(cleanWord);
  const heardClean = heardRaw.map(cleanWord);
  const matched = wordDiffMatch(targetClean, heardClean);
  const spans = targetRaw.map((w, i) => {
    const ok = matched[i];
    const color = ok ? 'var(--sage-dark)' : 'var(--danger)';
    return `<span style="color:${color}; font-weight:700;">${escapeHtml(w)}</span>`;
  });
  return `<div style="font-size:11px; color:var(--muted); margin-bottom:4px; letter-spacing:.04em;">逐字比對(綠色=講對，紅色=講錯或漏掉)</div><div style="font-size:16px; line-height:1.7; font-family:'Inter',sans-serif;">${spans.join(' ')}</div>`;
}

// 講對時的小小慶祝效果: 像煙火一樣先綻放再掉落
function celebrateCorrectAnswer(){
  triggerAnim('mainCard', 'anim-bounce');
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed; inset:0; pointer-events:none; z-index:9997; overflow:hidden;';
  const petals = ['🌸', '🌷', '✨', '💮', '🎉', '🌟'];
  
  for(let i = 0; i < 15; i++){
    const p = document.createElement('div');
    const emoji = petals[i % petals.length];
    p.textContent = emoji;
    
    const size = Math.round(16 + Math.random() * 12);
    const angle = Math.random() * Math.PI * 2;
    const velocity = 60 + Math.random() * 100;
    
    const burstX = Math.cos(angle) * velocity;
    const burstY = Math.sin(angle) * velocity - 20; // 稍微偏上綻放
    const fallY = burstY + 160 + Math.random() * 100; 
    const rot = (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 360);
    
    p.style.cssText = `position:absolute; top:40%; left:50%; font-size:${size}px; transform:translate(-50%, -50%); opacity:0;`;
    
    p.animate([
      { transform: `translate(-50%, -50%) scale(0)`, opacity: 0, offset: 0 },
      { transform: `translate(calc(-50% + ${burstX}px), calc(-50% + ${burstY}px)) scale(1.2)`, opacity: 1, offset: 0.2, easing: 'ease-out' },
      { transform: `translate(calc(-50% + ${burstX * 1.3}px), calc(-50% + ${fallY}px)) rotate(${rot}deg)`, opacity: 0, offset: 1, easing: 'ease-in' }
    ], {
      duration: 1200 + Math.random() * 600,
      fill: 'forwards'
    });
    
    overlay.appendChild(p);
  }
  document.body.appendChild(overlay);
  setTimeout(() => overlay.remove(), 2000);
}

function showResult(heardText){
  const item = currentItem();
  const isFree = currentStage().key === 'free';
  el('heard').textContent = heardText || '(沒聽到聲音)';
  el('result').classList.add('show');
  triggerAnim('result', 'anim-gentle-in');
  const fb = el('feedback');
  const diffBox = el('wordDiff');
  if(diffBox) diffBox.innerHTML = '';

  if(isFree){
    if(heardText) recordPracticed(item, stageIdx);
    fb.className = 'feedback';
    fb.textContent = heardText ? '你講出來了——這就是重點,內容不用完美。' : '再試一次,講出你想到的任何一句話就好。';
    return;
  }

  if(!heardText){
    fb.className = 'feedback retry';
    fb.textContent = '沒聽清楚，請再試一次。';
    el('coachBtn').style.display = 'none';
    return;
  }

  const a = normalize(heardText);
  const b = normalize(item.en);
  const dist = levenshtein(a, b);
  const closeness = 1 - dist / Math.max(a.length, b.length, 1);

  // 先算出這次的分數,再記錄練習(這樣間隔複習才能依分數判斷這個字「講得好不好」)
  recordPracticed(item, stageIdx, closeness);

  // 逐字比對:目標句子裡,講對的字綠色、講錯或漏掉的字紅色
  if(diffBox) diffBox.innerHTML = renderWordDiff(item.en, heardText);

  if(closeness > 0.85){
    fb.className = 'feedback';
    fb.textContent = '非常棒，完全正確！';
    el('coachBtn').style.display = 'none';
    if(typeof isBlindMode !== 'undefined' && isBlindMode) el('target').classList.add('revealed');
    celebrateCorrectAnswer();
  } else if(closeness > 0.5){
    fb.className = 'feedback retry';
    fb.textContent = '抓到重點了，稍微有點差異，可以再聽一次看看。';
    el('coachBtn').style.display = 'inline-block';
  } else {
    fb.className = 'feedback retry';
    fb.textContent = '差異較大，別灰心，慢慢念再試一次。';
    el('coachBtn').style.display = 'inline-block';
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
    // 許可權被拒或不支援,後續 SpeechRecognition 會處理
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
      'not-allowed':'麥克風許可權被拒絕,請到設定 > Safari > 麥克風開啟許可權。',
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
      showErrorMsg('沒有聽到聲音。請確認麥克風正常,點選錄音後立刻開口說話。');
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
  triggerAnim('result', 'anim-gentle-in');
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
el('slowPlayBtn').onclick = () => {
  const speed = parseFloat(el('speedSlider').value) || 0.5;
  playAudio(currentItem(), speed);
};

if(el('speedSlider') && el('speedValueDisplay')) {
  el('speedSlider').oninput = (e) => {
    el('speedValueDisplay').textContent = parseFloat(e.target.value).toFixed(1) + 'x';
  };
}

function updateAccentButtons(){
  el('accentUS').classList.toggle('active', accentPref === 'us');
  el('accentUK').classList.toggle('active', accentPref === 'uk');
}
el('accentUS').onclick = () => { accentPref = 'us'; updateAccentButtons(); const it=currentItem(); if(it) renderPhonetics(getVariant(it) ? getVariant(it).phon : null); };
el('accentUK').onclick = () => { accentPref = 'uk'; updateAccentButtons(); const it=currentItem(); if(it) renderPhonetics(getVariant(it) ? getVariant(it).phon : null); };

/* ---------- 錄音：點選切換模式 ---------- */
const MIN_REC_MS = 1500; // 最小錄音時間,防止太快 stop

function startRecording(){
  if(!SRClass) return;
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

/* ---------- 錄音按鈕：點選切換 ---------- */
const recBtn = el('recBtn');
recBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if(isRecording){
    stopRecording();
  } else {
    startRecording();
  }
});

// 上一題/下一題時,讓卡片內容像翻頁一樣先滑出、換好內容後再從另一側滑入,
// 而不是內容瞬間跳掉——速度刻意放得和緩,滑出快、滑入稍微慢一點更有「輕輕落定」的感覺。
function navigateItem(direction){
  const content = el('cardContent');
  const items = filteredItems();
  if(!items.length) return;

  const outClass = direction === 1 ? 'anim-slide-out-left' : 'anim-slide-out-right';
  const inClass = direction === 1 ? 'anim-slide-in-right' : 'anim-slide-in-left';

  content.classList.remove('anim-slide-in-left', 'anim-slide-in-right', outClass, inClass);
  void content.offsetWidth; // 強制重新計算樣式,確保動畫每次都能重新觸發
  content.classList.add(outClass);

  setTimeout(() => {
    itemIdx = (itemIdx + direction + items.length) % items.length;
    saveProgress();
    render(true);

    content.classList.remove(outClass);
    void content.offsetWidth;
    content.classList.add(inClass);
  }, 180);
}

el('skipBtn').onclick = () => navigateItem(1);
el('prevBtn').onclick = () => navigateItem(-1);

function populateCustomStageSelect(){
  const sel = el('customStage');
  sel.innerHTML = '';
  STAGES.forEach((s, i) => {
    if(s.key === 'favorites') return; // skip favorites in the add-content selector
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = s.label;
    sel.appendChild(opt);
  });
}

el('addBtn').onclick = async () => {
  const en = el('customEn').value.trim();
  let zh = el('customZh').value.trim();
  const idx = parseInt(el('customStage').value, 10);
  if(!en) return;
  const stage = STAGES[idx];
  const item = { en, zh, cat:'自訂' };
  const isSingleWord = !/\s/.test(en);
  const addBtn = el('addBtn');
  addBtn.disabled = true;
  addBtn.classList.add('anim-soft-pulse');

  if(isSingleWord){
    addBtn.textContent = '查詢音標中...';
    try{
      const data = await fetchWordData(en);
      item.variants = data.variants;
      item._fetched = true;
    }catch(err){
      item._fetched = true; // 查不到就交給 speechSynthesis,不擋住新增流程
    }
  }

  if(!zh){
    if(geminiApiKey){
      addBtn.textContent = '翻譯中...';
      const translated = await fetchZhViaGemini(en);
      if(translated){ item.zh = translated; }
    }
    // 沒有 API Key 或翻譯失敗時,zh 保持空白,使用者仍可事後手動編輯題庫
  }

  addBtn.disabled = false;
  addBtn.classList.remove('anim-soft-pulse');
  stage.items.push(item);
  customItems.push({ _stageKey: stage.key, ...item });
  saveCustomItems();
  el('customEn').value = '';
  el('customZh').value = '';
  addBtn.textContent = '已加入 ✓';
  triggerAnim('addBtn', 'anim-pop');
  setTimeout(()=>{ addBtn.textContent = '＋ 加入題庫'; }, 1200);
  if(idx === stageIdx) render();
};

/* ---------- AI 情境生成器 ---------- */
if(geminiApiKey) el('apiKeyInput').value = geminiApiKey;
el('apiKeyInput').addEventListener('input', (e) => {
  geminiApiKey = e.target.value.trim();
  lsSet('speakup_apikey', geminiApiKey);
});

// AI 生成彈窗:開啟時 anim-pop 蹦一下比較搶眼(呼應「生成新內容」的興奮感),
// 關閉時改用溫和的 anim-gentle-modal-out,避免「開很有戲、關卻瞬間消失」的落差。
function closeAiModal(){
  const modal = el('aiModal');
  const box = modal.querySelector('.ai-modal');
  if(box){
    box.classList.remove('anim-pop');
    void box.offsetWidth;
    box.classList.add('anim-gentle-modal-out');
  }
  setTimeout(() => {
    modal.classList.remove('show');
    if(box) box.classList.remove('anim-gentle-modal-out');
  }, 300);
}

el('openAiModalBtn').onclick = () => {
  el('aiModal').classList.add('show');
  const box = el('aiModal').querySelector('.ai-modal');
  if(box) {
    box.classList.remove('anim-pop');
    void box.offsetWidth;
    box.classList.add('anim-pop');
  }
};
el('closeAiModalBtn').onclick = () => closeAiModal();
el('aiModal').addEventListener('click', (e) => {
  if(e.target === el('aiModal')) closeAiModal();
});

const RANDOM_SCENARIOS = [
  "在國外點麥當勞點不到薯條", "跟外國同事解釋為什麼遲到", "在路上被問路不知所措",
  "在服飾店試穿衣服想換尺寸", "遇到瘋狂推銷員想脫身", "去藥局買感冒藥",
  "搭Uber遇到健談的司機", "在飯店櫃檯抱怨冷氣不冷", "和外國朋友聊最近看的影集",
  "在機場海關被詢問目的", "在咖啡廳遇到外國人搭訕", "去外國超市找不到雞蛋",
  "在酒吧不知道怎麼點調酒", "打電話去診所預約看診", "跟室友溝通打掃房間的問題",
  "在火車上請別人讓座", "參加國外派對跟陌生人破冰", "去銀行開戶被問一堆問題",
  "在租車公司租車遇到保險推銷", "去超市結帳不知道怎麼用自助結帳機", "在餐廳吃飯發現帳單算錯了",
  "跟教授討論期末報告的題目", "在遊樂園找不到廁所", "搭飛機時想跟空服員多要一杯水",
  "在國外弄丟護照去警局報案", "向老闆報告專案進度落後", "與客戶開會討論合約細節",
  "去健身房詢問會員方案", "在捷運上被人踩到腳", "去美髮院想剪一個新髮型",
  "向店員詢問這件衣服有沒有別的顏色", "打電話叫外送披薩", "向朋友推薦一家超讚的餐廳",
  "抱怨昨晚失眠睡不好", "討論哪裡有不錯的約會地點", "在書店詢問某本暢銷書",
  "請外國朋友推薦當地的私房景點", "在路上遇到外國人搭訕推銷", "搭計程車司機繞路",
  "買錯電影票想退票", "在郵局寄包裹到臺灣", "向房東抱怨馬桶不通"
];
el('aiRandomBtn').onclick = () => {
  const r = RANDOM_SCENARIOS[Math.floor(Math.random() * RANDOM_SCENARIOS.length)];
  el('aiScenarioInput').value = r;
};

el('aiGenerateBtn').onclick = async () => {
  const scenario = el('aiScenarioInput').value.trim();
  if(!geminiApiKey){ el('aiStatus').textContent = '⚠️ 請先輸入 Gemini API Key'; triggerAnim('aiStatus', 'anim-gentle-in'); return; }
  if(!scenario){ el('aiStatus').textContent = '⚠️ 請輸入你想練習的情境'; triggerAnim('aiStatus', 'anim-gentle-in'); return; }
  
  const btn = el('aiGenerateBtn');
  btn.disabled = true;
  btn.textContent = '⏳ 生成中，請稍候... (約需 5~10 秒)';
  el('aiStatus').textContent = '';
  
  const modalBox = el('aiModal').querySelector('.ai-modal');
  if(modalBox) modalBox.classList.add('anim-pulse-border');

  const prompt = `你是一個專業的英文老師。請根據情境：「${scenario}」，生成相關的英文練習題目。
請嚴格輸出 JSON 陣列，包含 10 個單字、5 個片語、5 個句子。每個物件必須有 en, zh, cat 三個屬性。cat 必須固定填入 "(AI) ${scenario}"。
zh (中文) 必須是繁體中文(臺灣)。
格式範例：
[
  {"en":"passport", "zh":"護照", "cat":"(AI) ${scenario}"},
  {"en":"check in", "zh":"報到", "cat":"(AI) ${scenario}"},
  {"en":"Where is the boarding gate?", "zh":"登機門在哪裡？", "cat":"(AI) ${scenario}"}
]
不要輸出任何 Markdown 語法（例如 \`\`\`json ），只要純 JSON 文字陣列即可。`;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'x-goog-api-key': geminiApiKey},
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{text: prompt}] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    if(!res.ok) {
      let errText = '';
      try {
        const errJson = await res.json();
        errText = (errJson.error && errJson.error.message) ? errJson.error.message : res.statusText;
      } catch(e) {
        errText = res.statusText;
      }
      if(res.status === 429) throw new Error('今日 AI 額度已用完(429),明天太平洋時間午夜後(約臺灣下午3點)重置。');
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
    
    lsSet('speakup_ai_items', JSON.stringify(aiGeneratedItems));
    
    el('aiStatus').textContent = '✅ 生成成功！已幫你切換到新類別。'; triggerAnim('aiStatus', 'anim-gentle-in');
    setTimeout(() => {
      closeAiModal();
    }, 1500);
    
    activeCat = catName;
    itemIdx = 0;
    saveProgress();
    render();
    
  } catch(err) {
    el('aiStatus').textContent = '❌ 生成失敗：' + err.message; triggerAnim('aiStatus', 'anim-gentle-in');
  }
  
  if(modalBox) modalBox.classList.remove('anim-pulse-border');
  btn.disabled = false;
  btn.textContent = '🚀 立即生成題目';
};

checkMobile();
initBank();

/* ---------- 盲測模式與設定管理 ---------- */
let isBlindMode = false;
if(el('blindToggleBtn')) {
  el('blindToggleBtn').onclick = () => {
    isBlindMode = !isBlindMode;
    el('blindToggleBtn').textContent = isBlindMode ? '👁️ 盲測: 開' : '👁️ 盲測: 關';
    if(isBlindMode) {
      el('blindToggleBtn').style.background = 'var(--sage)';
      el('blindToggleBtn').style.color = '#fff';
      el('blindToggleBtn').style.borderColor = 'var(--sage)';
      el('target').classList.add('blind');
      el('target').classList.remove('revealed');
    } else {
      el('blindToggleBtn').style.background = 'var(--card)';
      el('blindToggleBtn').style.color = 'var(--muted)';
      el('blindToggleBtn').style.borderColor = 'var(--line)';
      el('target').classList.remove('blind', 'revealed');
    }
  };
}

if(el('settingsBtn')) {
  let settingsOpen = false;
  function setSettingsOpen(open){
    settingsOpen = open;
    const panel = el('settingsPage');
    const tripleBar = document.querySelector('.triple-bar');

    if(open){
      Object.keys(DROPDOWNS).forEach(closeDropdown); // 開啟設定前,先收起三顆選單的下拉麵板
      closeSearchPanel();
      el('mainAppContent').style.display = 'none';
      if(tripleBar) tripleBar.style.display = 'none';
      el('searchBtn').style.display = 'none';

      panel.style.display = 'block';
      panel.classList.remove('anim-gentle-out');
      void panel.offsetWidth;
      panel.classList.add('anim-gentle-in');
    } else {
      panel.classList.remove('anim-gentle-in');
      void panel.offsetWidth;
      panel.classList.add('anim-gentle-out');
      panel.addEventListener('animationend', function onEnd(){
        panel.style.display = 'none';
        panel.classList.remove('anim-gentle-out');
        el('mainAppContent').style.display = '';
        if(tripleBar) tripleBar.style.display = 'flex';
        el('searchBtn').style.display = 'inline-block';
        panel.removeEventListener('animationend', onEnd);
      }, { once: true });
    }
  }
  el('settingsBtn').onclick = () => setSettingsOpen(!settingsOpen);
  el('closeSettingsBtn').onclick = () => setSettingsOpen(false);

  function closeGuideModal(){
    const modal = el('guideModal');
    const box = modal.querySelector('.ai-modal');
    if(box){
      box.classList.remove('anim-gentle-modal');
      void box.offsetWidth;
      box.classList.add('anim-gentle-modal-out');
    }
    setTimeout(() => {
      modal.classList.remove('show');
      if(box) box.classList.remove('anim-gentle-modal-out');
    }, 300);
  }
  el('openGuideBtn').onclick = () => {
    el('guideModal').classList.add('show');
    const box = el('guideModal').querySelector('.ai-modal');
    if(box){
      box.classList.remove('anim-gentle-modal');
      void box.offsetWidth;
      box.classList.add('anim-gentle-modal');
    }
  };
  el('guideCloseBtn').onclick = () => closeGuideModal();
  el('guideModal').addEventListener('click', (e) => {
    if(e.target === el('guideModal')) closeGuideModal();
  });
  
  // 所有需要納入「完整備份」的 localStorage key(不包含 speakup_custom,
  // 因為那是舊版題庫覆寫用的快取,匯入時交給 word_bank.js 本身管理即可)
  const BACKUP_KEYS = [
    'speakup_ai_items', 'speakup_apikey', 'speakup_appMode', 'speakup_cat',
    'speakup_cat_progress', 'speakup_custom_items', 'speakup_daily',
    'speakup_favorites', 'speakup_practiced', 'speakup_stageIdx',
    'speakup_streak', 'speakup_last_cat', 'speakup_last_celebrated', 'speakup_last_level'
  ];

  el('exportBackupBtn').onclick = () => {
    const data = {};
    BACKUP_KEYS.forEach(k => {
      const v = lsGet(k);
      if(v !== null && v !== undefined) data[k] = v;
    });
    const payload = { app: 'SpeakUp', version: 1, exportedAt: new Date().toISOString(), data };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const stamp = localDateStr();
    a.href = url;
    a.download = `speakup_backup_${stamp}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  el('importBackupBtn').onclick = () => el('importBackupFile').click();

  el('importBackupFile').addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = ''; // 清空,讓同一個檔案下次還能重新選取
    if(!file) return;
    if(!confirm('匯入備份會覆蓋這臺裝置上目前的學習進度與資料,確定要繼續嗎？')) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result);
        const data = (parsed && typeof parsed === 'object' && parsed.data) ? parsed.data : parsed;
        if(!data || typeof data !== 'object') throw new Error('empty');

        let count = 0;
        BACKUP_KEYS.forEach(k => {
          if(Object.prototype.hasOwnProperty.call(data, k)){
            lsSet(k, data[k]);
            count++;
          }
        });
        if(count === 0){
          alert('這個檔案裡沒有找到可以還原的備份資料,請確認選的是「匯出完整備份」下載的 .json 檔。');
          return;
        }
        alert(`已還原 ${count} 項備份資料,頁面即將重新整理套用。`);
        location.reload();
      } catch(err) {
        alert('匯入失敗:檔案格式不正確或已損毀,請確認選的是「匯出完整備份」下載的 .json 檔。');
      }
    };
    reader.readAsText(file);
  });

  el('exportBtn').onclick = () => {
    const combinedBank = {};
    for (let key in WORD_BANK) {
      combinedBank[key] = WORD_BANK[key].map(item => ({
        en: item.en,
        zh: item.zh,
        cat: item.cat,
        enDesc: item.enDesc,
        zhDesc: item.zhDesc
      }));
    }
    const jsContent = `const WORD_BANK = ${JSON.stringify(combinedBank, null, 2)};`;
    const blob = new Blob([jsContent], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'word_bank.js';
    a.click();
    URL.revokeObjectURL(url);
    alert('匯出成功！請將下載的「word_bank.js」覆蓋你原本資料夾裡的舊檔。');
  };

  el('clearDataBtn').onclick = () => {
    if(confirm('⚠️ 確定要清除所有學習紀錄、收藏與快取單字嗎？\n如果你沒有點選上方按鈕匯出，你的自訂與 AI 生成單字將會永久遺失！')) {
      try{localStorage.clear()}catch(e){};
      alert('已清除所有資料，網頁即將重新載入。');
      location.reload();
    }
  };
}

el('coachBtn').onclick = async () => {
  const item = currentItem();
  const heard = el('heard').textContent;
  if(!geminiApiKey) { alert('請先設定 Gemini API Key！'); return; }
  
  const btn = el('coachBtn');
  btn.disabled = true;
  btn.textContent = '✨ 分析中...';
  btn.classList.add('anim-soft-pulse');
  
  const prompt = `目標英文句子: "${item.en}"\n使用者唸成了: "${heard}"\n請分析使用者可能的發音錯誤。請回傳嚴格的 JSON 格式，包含兩個欄位：\n1. "feedback": (字串) 給使用者的簡單反饋，3句以內。\n2. "vocab": (陣列) 從目標句子或發音錯誤中，挑出 1~3 個有價值的單字或片語，每個包含 "en" (英文), "zh" (繁體中文), "cat" (類別名稱，例如'AI糾音')。\n\n請務必只回傳 JSON，不要加 markdown 標記。`;
  
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': geminiApiKey },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }]
      })
    });
    if(!res.ok){
      let detail = res.statusText;
      try{ const errJson = await res.json(); detail = (errJson.error && errJson.error.message) ? errJson.error.message : detail; }catch(e){}
      throw new Error('API 錯誤: ' + detail);
    }
    const data = await res.json();
    let text = (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) ? data.candidates[0].content.parts[0].text : '';
    if(!text) throw new Error('AI 回傳為空');
    
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(text);
    
    el('coachFeedback').style.display = 'block';
    el('coachFeedback').style.color = 'var(--ink)';
    el('coachFeedback').textContent = parsed.feedback;
    triggerAnim('coachFeedback', 'anim-gentle-in');
    
    const vocabArea = el('coachVocabArea');
    if (parsed.vocab && parsed.vocab.length > 0) {
      vocabArea.style.display = 'block';
      triggerAnim('coachVocabArea', 'anim-gentle-in');
      vocabArea.innerHTML = `<button id="coachAddVocabBtn" style="background:var(--ai-dark); border:none; padding:10px 14px; border-radius:8px; color:var(--card); cursor:pointer; font-weight:bold; font-size:13px; width:100%;">➕ 將這 ${parsed.vocab.length} 個道地單字加入題庫</button>`;
      
      el('coachAddVocabBtn').onclick = () => {
        parsed.vocab.forEach(v => {
          if (!WORD_BANK.word) WORD_BANK.word = [];
          v._type = 'word';
          v.cat = v.cat || '教練推薦';
          WORD_BANK.word.unshift(v);
          aiGeneratedItems.unshift(v);
        });
        lsSet('speakup_ai_items', JSON.stringify(aiGeneratedItems));
        initBank(); // 立即把新單字補進 STAGES,不用重新整理頁面才看得到
        if (typeof generateRandomReview === 'function') generateRandomReview();
        vocabArea.innerHTML = `<div class="anim-gentle-in" style="text-align:center; color:var(--sage); font-size:13px; font-weight:bold; padding:8px;">✅ 已成功加入你的專屬題庫！</div>`;
      };
    } else {
      vocabArea.style.display = 'none';
    }
  } catch(e) {
    console.error('Coach API error:', e);
    el('coachFeedback').style.display = 'block';
    el('coachFeedback').style.color = 'var(--warn-text)';
    el('coachFeedback').textContent = '⚠️ 分析失敗，請檢查 API 或是稍後再試。';
    triggerAnim('coachFeedback', 'anim-gentle-in');
    btn.textContent = '💡 請 AI 教練抓漏';
  } finally {
    btn.disabled = false;
    btn.textContent = '✨ 請 AI 教練抓漏';
    btn.classList.remove('anim-soft-pulse');
  }
};

populateCustomStageSelect();
/* ---------- 實戰對話模式 (Roleplay) ---------- */
let rpHistory = [];
let rpIsRecording = false;
let rpSR = null;

el('rpRandomBtn').onclick = () => {
  const r = RANDOM_SCENARIOS[Math.floor(Math.random() * RANDOM_SCENARIOS.length)];
  el('rpScenarioInput').value = r;
};

el('rpStartBtn').onclick = async () => {
  if(!geminiApiKey) { alert('請先在「✨ AI情境」輸入你的 Gemini API Key！'); return; }
  const scenario = el('rpScenarioInput').value.trim();
  if(!scenario) return;
  
  el('rpSetup').style.display = 'none';
  el('rpChat').style.display = 'flex';
  el('rpChat').innerHTML = '';
  el('rpControls').style.display = 'block';
  triggerAnim('rpControls', 'anim-gentle-in');
  el('rpStatus').textContent = 'AI 思考中...'; triggerAnim('rpStatus', 'anim-status-fade');
  
  rpHistory = [];
  
  const prompt = `我們現在來進行英文對話演練。情境是：「${scenario}」。你先開始跟我對話，說第一句話。請強制回傳 JSON 格式：{"next_response_en": "英文回覆", "next_response_zh": "中文翻譯", "feedback": ""}`;
  
  await fetchRpResponse([{role: "user", parts: [{text: prompt}]}]);
};

async function fetchRpResponse(contents) {
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': geminiApiKey },
      body: JSON.stringify({
        contents: contents,
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    if(!res.ok){
      let detail = res.statusText;
      try{
        const errJson = await res.json();
        detail = (errJson.error && errJson.error.message) ? errJson.error.message : detail;
      }catch(e){}
      if(res.status === 400) throw new Error('請求格式錯誤或 API Key 無效(400):' + detail);
      if(res.status === 403) throw new Error('API Key 沒有許可權或被拒絕(403):' + detail);
      if(res.status === 404) throw new Error('找不到這個模型(404),可能模型名稱已變更:' + detail);
      if(res.status === 429) throw new Error('已達使用額度上限,請稍後再試(429):' + detail);
      throw new Error('API 請求失敗(' + res.status + '):' + detail);
    }

    const data = await res.json();
    let text = (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) ? data.candidates[0].content.parts[0].text : '';
    if(!text) throw new Error('AI 回傳內容為空,可能是被安全機制擋下或觸發了長度上限。');

    // Clean up potential markdown formatting from JSON
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    let parsed;
    try{
      parsed = JSON.parse(text);
    }catch(e){
      throw new Error('AI 回傳的內容不是有效 JSON,可能是模型格式跑掉了。原始內容:' + text.slice(0, 80));
    }
    
    // Add AI message to history
    rpHistory.push(contents[contents.length-1]); 
    rpHistory.push({role: "model", parts: [{text: text}]});
    
    // UI update
    const div = document.createElement('div');
    div.className = 'msg-ai anim-bubble-in';
    div.innerHTML = `<strong>AI:</strong> ${parsed.next_response_en}<div style="font-size:12px;opacity:0.7;margin-top:4px;">${parsed.next_response_zh}</div>`;
    if(parsed.feedback) {
      div.innerHTML += `<div class="msg-tip">💡 教練提示：${parsed.feedback}</div>`;
    }
    el('rpChat').appendChild(div);
    
    // Auto scroll
    el('rpChat').scrollTop = el('rpChat').scrollHeight;
    
    // Play audio
    const u = new SpeechSynthesisUtterance(parsed.next_response_en);
    applyVoice(u, accentPref === 'uk' ? 'en-GB' : 'en-US');
    u.rate = 0.9;
    speechSynthesis.speak(u);
    
    el('rpStatus').textContent = '請按下麥克風開始說話'; triggerAnim('rpStatus', 'anim-status-fade');
    el('rpHintBox').style.display = 'none';
    el('rpHintBox').innerHTML = '';
  } catch(err) {
    console.error('Roleplay API error:', err);
    el('rpStatus').textContent = '⚠️ ' + err.message; triggerAnim('rpStatus', 'anim-status-fade');
  }
}

function initRpSR() {
  if(!SRClass) return;
  rpSR = new SRClass();
  rpSR.lang = 'en-US';
  rpSR.continuous = false;
  rpSR.interimResults = false;
  
  rpSR.onstart = () => {
    rpIsRecording = true;
    el('rpRecBtn').classList.add('recording');
    el('rpStatus').textContent = '聆聽中... (請說話)'; triggerAnim('rpStatus', 'anim-status-fade');
  };
  
  rpSR.onresult = async (e) => {
    const heard = e.results[0][0].transcript;
    if(!heard) return;
    
    const div = document.createElement('div');
    div.className = 'msg-user anim-bubble-in';
    div.innerHTML = `<strong>你:</strong> ${heard}`;
    el('rpChat').appendChild(div);
    el('rpChat').scrollTop = el('rpChat').scrollHeight;
    
    el('rpStatus').textContent = 'AI 思考中...'; triggerAnim('rpStatus', 'anim-status-fade');
    
    const prompt = `我說了："${heard}"。請評估這句話是否符合情境與文法，給予簡單的繁體中文回饋(feedback)，並順著對話繼續回覆我(next_response_en)。請強制回傳 JSON 格式：{"next_response_en": "", "next_response_zh": "", "feedback": "中文提示"}`;
    
    await fetchRpResponse([...rpHistory, {role: "user", parts: [{text: prompt}]}]);
  };
  
  rpSR.onerror = (e) => {
    if(el('rpStatus').textContent !== 'AI 思考中...') {
      el('rpStatus').textContent = '聽不清楚，請再按一次麥克風。'; triggerAnim('rpStatus', 'anim-status-fade');
    }
  };
  
  rpSR.onend = () => {
    rpIsRecording = false;
    el('rpRecBtn').classList.remove('recording');
    if(el('rpStatus').textContent.includes('聆聽中')) {
      el('rpStatus').textContent = '請按下麥克風開始說話'; triggerAnim('rpStatus', 'anim-status-fade');
    }
    // iOS fix: SpeechRecognition instance becomes unusable after onend,
    // must create a new one before next start()
    rpSR = null;
  };
}

el('rpRecBtn').onclick = () => {
  if(!SRClass) { alert('您的瀏覽器不支援語音辨識'); return; }
  if(!rpSR) initRpSR();
  
  if(el('rpStatus').textContent === 'AI 思考中...') return;
  
  if(rpIsRecording && rpSR) {
    try { rpSR.stop(); } catch(e){}
    rpIsRecording = false;
    return;
  }
  
  try {
    rpSR.start();
  } catch(e) {
    console.error(e);
  }
};

el('rpHintBtn').onclick = async () => {
  if(!rpHistory.length) return;
  const hintBtn = el('rpHintBtn');
  const hintBox = el('rpHintBox');
  hintBtn.disabled = true;
  hintBtn.textContent = '思考中...';
  
  try {
    const prompt = `請根據我們以上的對話，提供 3 個簡短、口語化的英文回覆選項（附帶中文翻譯），讓使用者可以直接照著念來推進對話。回傳 JSON 格式：{"hints": [{"en":"...", "zh":"..."}, ...]}`;
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': geminiApiKey },
      body: JSON.stringify({
        contents: [...rpHistory, {role: "user", parts: [{text: prompt}]}],
        generationConfig: { responseMimeType: "application/json" }
      })
    });
    if(!res.ok){
      let detail = res.statusText;
      try{ const errJson = await res.json(); detail = errJson.error?.message || detail; }catch(e){}
      if(res.status === 429) throw new Error('今日 AI 額度已用完(429),明天太平洋時間午夜後(約臺灣下午3點)重置。');
      throw new Error('API 請求失敗(' + res.status + '):' + detail);
    }
    const data = await res.json();
    const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if(!resultText) throw new Error('AI 沒有回傳內容,可能被安全機制擋下。');
    const parsed = JSON.parse(resultText);
    
    hintBox.style.display = 'block';
    hintBox.innerHTML = '<div style="color:var(--sage-dark); font-weight:bold; margin-bottom:6px;">你可以這樣說：</div>' + 
      parsed.hints.map(h => `<div style="margin-bottom:6px;">• <b>${h.en}</b> <br><span style="color:var(--muted); font-size:12px;">(${h.zh})</span></div>`).join('');
    triggerAnim('rpHintBox', 'anim-gentle-in');
  } catch(e) {
    hintBox.style.display = 'block';
    hintBox.textContent = '⚠️ ' + e.message;
    triggerAnim('rpHintBox', 'anim-gentle-in');
  }
  
  hintBtn.disabled = false;
  hintBtn.textContent = '💡 提示怎麼回';
};

el('rpRestartBtn').onclick = () => {
  if(rpIsRecording && rpSR) {
    try { rpSR.stop(); } catch(e){}
    rpIsRecording = false;
  }
  speechSynthesis.cancel();
  el('rpChat').innerHTML = '';
  el('rpChat').style.display = 'none';
  el('rpControls').style.display = 'none';
  el('rpHintBox').style.display = 'none';
  el('rpSetup').style.display = 'block';
  triggerAnim('rpSetup', 'anim-gentle-in');
  el('rpStatus').textContent = '';
  el('rpRecBtn').classList.remove('recording');
};

setupRecognition();
// Initial App mode setup
setAppMode(appMode, true);