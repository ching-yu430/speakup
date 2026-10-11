// Share posters use the same botanical scene, level definitions and active theme.
const FlowerCards=(()=>{
  function palette(){const dark=document.body.dataset.gardenTheme==='dark';return {dark,ground:dark?'#14231f':'#eee5d9',paper:dark?'#21322c':'#fffaf2',ink:dark?'#c6dfd4':'#28565b',muted:dark?'#b3baac':'#827668',line:dark?'#42564a':'#dcd0be',panel:dark?'#2c4037':'#f1e8db',coral:dark?'#dba998':'#b47c6a',teal:dark?'#9dbdaf':'#648d82'};}
  function frame(title,subtitle){
    const p=palette(),canvas=document.createElement('canvas');canvas.width=1280;canvas.height=1720;
    const c=canvas.getContext('2d');c.scale(2,2);
    c.fillStyle=p.ground;c.fillRect(0,0,640,860);
    c.save();c.shadowColor='#00000018';c.shadowBlur=22;c.shadowOffsetY=9;
    canvasRoundRect(c,24,24,592,812,26);c.fillStyle=p.paper;c.fill();c.restore();
    c.strokeStyle=p.line;c.lineWidth=1;canvasRoundRect(c,24,24,592,812,26);c.stroke();
    c.fillStyle=p.dark?'#ffffff06':'#6c503d0b';
    for(let i=0;i<1200;i++)c.fillRect(hash01(i*3+1)*640,hash01(i*3+2)*860,.65,.65);
    text(c,'SPEAK UP  /  BOTANICAL ATELIER',56,59,10,p.muted);
    text(c,title,56,103,32,p.ink,'left',600);
    text(c,subtitle,56,133,13,p.muted);
    return {canvas,c,p};
  }
  function text(c,value,x,y,size,color,align='left',weight=400){c.textAlign=align;c.textBaseline='alphabetic';c.font=`${weight} ${size}px Inter, "Noto Sans TC", sans-serif`;c.fillStyle=color;c.fillText(String(value),x,y);}
  function box(c,p,x,y,w,h){canvasRoundRect(c,x,y,w,h,14);c.fillStyle=p.panel;c.fill();c.strokeStyle=p.line;c.lineWidth=1;c.stroke();}
  function stat(c,p,x,y,w,label,value){box(c,p,x,y,w,72);text(c,label,x+16,y+25,12,p.muted);text(c,value,x+16,y+54,23,p.ink,'left',600);}
  function footer(c,p,value){text(c,value,320,814,11,p.muted,'center');}
  function dateLabel(offset,count){
    const times=Object.values(practiced).slice(offset*5,(offset+count)*5).map(it=>it.lastPracticed).filter(Number.isFinite);
    if(!times.length)return '';
    const fmt=t=>{const d=new Date(t);return `${d.getMonth()+1}/${d.getDate()}`;};
    const first=fmt(Math.min(...times)),last=fmt(Math.max(...times));return first===last?first:first+'–'+last;
  }
  function garden(types,wordCount,levelLabel,streak,toNext,offset){
    const {canvas,c,p}=frame('我的語感花室',`把每次開口，收藏成一束花。  ·  連續 ${streak} 天`);
    box(c,p,56,156,528,380);
    text(c,`收藏 ${String(Math.floor(offset/15)+1).padStart(2,'0')}  /  ${types.length} 朵花`,74,182,11,p.muted);
    BotanicalBouquet.draw(c,320,522,types.length,offset,types.map(t=>t===RARE_TYPE),1.45,p.dark);
    const date=dateLabel(offset,types.length);
    text(c,types.length?(date?'這瓶的開口日子 · '+date:'每一朵，都是開口的累積'):`再練 ${toNext} 題，迎接第一朵花`,320,563,13,p.muted,'center');
    const list=Object.values(practiced),mastered=list.filter(it=>isItemMastered(it.en)).length;
    stat(c,p,56,588,256,'已練習題數',wordCount+' 題');stat(c,p,328,588,256,'已熟練題數',mastered+' 題');
    stat(c,p,56,674,256,'花朵收藏',Math.floor(wordCount/5)+' 朵');stat(c,p,328,674,256,'目前等級',levelLabel);
    const current=BotanicalBouquet.levels.find(l=>wordCount>=l.min&&wordCount<=l.max),next=BotanicalBouquet.levels[BotanicalBouquet.levels.indexOf(current)+1];
    text(c,next?`距離「${next.label}」還差 ${next.min-wordCount} 道新題目`:'花語典藏 · 每一次開口都繼續盛放',320,773,12,p.muted,'center');
    canvasRoundRect(c,56,785,528,6,3);c.fillStyle=p.line;c.fill();
    if(next&&wordCount>current.min){canvasRoundRect(c,56,785,528*(wordCount-current.min)/(next.min-current.min),6,3);c.fillStyle=p.coral;c.fill();}
    footer(c,p,'Speak Up · '+new Date().toLocaleDateString('zh-TW',{year:'numeric',month:'2-digit',day:'2-digit'}));
    return canvas;
  }
  function weekly(stats,streak){
    const range=stats.days[0].label+' – '+stats.days[6].label;
    const {canvas,c,p}=frame('本週開口週報',range+'  ·  最近七天的練習紀錄');
    text(c,stats.practiceCount,60,206,50,p.ink,'left',600);text(c,'次練習，讓語感繼續生長',60,235,14,p.muted);
    const list=Object.values(practiced),total=Math.floor(list.length/5),offset=Math.max(0,Math.ceil(total/15)-1)*15,count=Math.max(0,total-offset);
    const rare=Array.from({length:count},(_,i)=>list.slice((offset+i)*5,(offset+i+1)*5).some(it=>it.streakAtPractice>=7));
    BotanicalBouquet.draw(c,512,247,count,offset,rare,.43,p.dark);
    box(c,p,56,271,528,235);
    text(c,'每天的練習次數',74,297,12,p.muted);
    const base=460,chartH=133,max=Math.max(1,...stats.days.map(d=>d.count)),step=68.8;
    [0,.5,1].forEach(t=>{c.beginPath();c.moveTo(75,base-chartH*t);c.lineTo(565,base-chartH*t);c.strokeStyle=p.line;c.lineWidth=.7;c.stroke();});
    stats.days.forEach((d,i)=>{
      const x=79+i*step,height=chartH*Math.max(0,d.count)/max;
      if(d.count>0){canvasRoundRect(c,x,base-height,36,height,Math.min(5,height/2));c.fillStyle=i===6?p.coral:p.teal;c.fill();text(c,d.count,x+18,base-height-9,12,p.ink,'center',600);}
      else{c.beginPath();c.arc(x+18,base,2.2,0,Math.PI*2);c.fillStyle=p.muted;c.fill();}
      text(c,d.label,x+18,487,11,p.muted,'center');
    });
    stat(c,p,56,523,164,'本週新練',stats.newWordsThisWeek+' 題');
    stat(c,p,238,523,164,'練習次數',stats.practiceCount+' 次');
    stat(c,p,420,523,164,'文字一致度',stats.avgScore===null?'尚無評分':stats.avgScore+'%');
    const maxCount=Math.max(...stats.days.map(d=>d.count)),best=stats.days.filter(d=>d.count===maxCount&&maxCount>0).at(-1);
    stat(c,p,56,612,256,'練習最多的一天',best?best.label+' · '+best.count+' 次':'等待第一次開口');
    stat(c,p,328,612,256,'目前連續開口',streak+' 天');
    text(c,stats.practiceCount?`這週新練 ${stats.newWordsThisWeek} 題，每次開口都值得收藏。`:'從一句英文開始，讓這週開出第一朵花。',320,732,15,p.ink,'center');
    text(c,'文字一致度採本週各題最近一次評分的平均值。',320,764,11,p.muted,'center');
    footer(c,p,'Speak Up · '+range);
    return canvas;
  }
  return {garden,weekly};
})();
