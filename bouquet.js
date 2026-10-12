// Original botanical illustrations. SVG and exported canvas use the same scene.
const BotanicalBouquet = (() => {
  const paper = '#f7f3eb';
  const palettes = [
    ['#ee817b','#f4c5bf','#e8a125','#105963','#737d35'],
    ['#d87883','#f1cfc6','#dd9c38','#246874','#7c8147'],
    ['#ed9481','#f6d7cc','#d78632','#155866','#69783c'],
    ['#ca6d82','#eab8bf','#e0b24e','#285f69','#747847']
  ];
  const slots = [[-36,-78,27],[36,-118,26],[-8,-157,25],[58,-61,28],[-64,-112,18],
    [63,-165,19],[-57,-174,15],[5,-104,20],[79,-103,14],[-74,-59,19],
    [13,-54,15],[34,-190,13],[-28,-200,12],[-83,-146,12],[74,-203,11]];
  function seed() {
    const saved = lsGet('speakup_bouquet_seed');
    if(saved && /^\d+$/.test(saved)) return Number(saved) >>> 0;
    const value = Math.floor(Math.random()*4294967295) || 1;
    lsSet('speakup_bouquet_seed',String(value));
    return value;
  }
  function rng(value) { let n=value>>>0; return () => { n+=0x6D2B79F5; let t=Math.imul(n^(n>>>15),1|n);t^=t+Math.imul(t^(t>>>7),61|t); return ((t^(t>>>14))>>>0)/4294967296; }; }
  const f = n => Number(n.toFixed(2));
  function mix(a,b,t){return '#'+[1,3,5].map(i=>Math.round(parseInt(a.slice(i,i+2),16)*(1-t)+parseInt(b.slice(i,i+2),16)*t).toString(16).padStart(2,'0')).join('');}
  function rotatePath(d,x,y,angle){let coordinate=0,px;return d.replace(/-?\d+(?:\.\d+)?/g,value=>{if(coordinate++%2===0){px=Number(value);return '@';}const py=Number(value),dx=px-x,dy=py-y;return `${f(x+dx*Math.cos(angle)-dy*Math.sin(angle))} ${f(y+dx*Math.sin(angle)+dy*Math.cos(angle))}`;}).replace(/@\s*/g,'');}
  function smooth(points) {
    const last=points[points.length-1], first=points[0];
    let d=`M${f((last[0]+first[0])/2)} ${f((last[1]+first[1])/2)}`;
    points.forEach((p,i)=>{const next=points[(i+1)%points.length];d+=`Q${f(p[0])} ${f(p[1])} ${f((p[0]+next[0])/2)} ${f((p[1]+next[1])/2)}`;});
    return d+'Z';
  }
  function ellipse(x,y,rx,ry,angle,random) {
    return smooth(Array.from({length:20},(_,i)=>{const a=i*Math.PI/10, jitter=.92+random()*.16;
      const dx=Math.cos(a)*rx*jitter,dy=Math.sin(a)*ry*jitter;
      return [x+dx*Math.cos(angle)-dy*Math.sin(angle),y+dx*Math.sin(angle)+dy*Math.cos(angle)];}));
  }
  const flowerNames=['虞美人','波斯菊','鬱金香','牡丹','玫瑰','雛菊','向日葵','銀蓮花','桔梗','大麗花'];
  const levels=[
    [0,9,'初遇花種',2],[10,24,'破土新芽',2],[25,49,'晨露含苞',8],
    [50,79,'雛菊初綻',5],[80,119,'風中波斯菊',1],[120,179,'鬱金香時光',2],
    [180,249,'向陽盛放',6],[250,349,'玫瑰花語',4],[350,499,'牡丹滿枝',3],
    [500,699,'大麗花庭',9],[700,999,'四季花集',7],[1000,1299,'花藝工坊',0],
    [1300,1699,'百花庭院',8],[1700,1999,'繁花長廊',9],[2000,Infinity,'花語典藏',3]
  ].map(([min,max,label,kind],i)=>({min,max,label,kind,id:'botanical-'+i,color:['#c38378','#59878a','#bd9148'][i%3]}));
  function paintFlower(add,x,y,r,kind,color,accent,own,isRare=false){
    const dark='#36483c';
    if(kind===4){
      const shade=mix(color,'#783748',.4),phase=own()*6.28;
      add(smooth(Array.from({length:70},(_,j)=>{const a=j*Math.PI*2/70,rr=r*(.89+.075*Math.cos(a*7+phase));return [x+Math.cos(a)*rr,y+Math.sin(a)*rr];})),mix(color,'#ffffff',.07),shade,.7,1,true);
      // Cupped, overlapping petals in three rings, with a curled centre.
      [7,5,3].forEach((n,ring)=>{
        const reach=r*[.53,.34,.15][ring],size=r*[.43,.34,.23][ring];
        for(let j=0;j<n;j++){
          const a=phase+j*Math.PI*2/n+ring*.6;
          add(ellipse(x+Math.cos(a)*reach,y+Math.sin(a)*reach,size,size*.76,a+Math.PI/2,own),mix(color,ring===2?shade:'#fff4ef',ring===2?.2:.08+own()*.18),shade,.85,.98,true);
        }
      });
      add(`M${f(x-r*.12)} ${f(y+r*.09)} C${f(x-r*.33)} ${f(y-r*.18)} ${f(x+r*.26)} ${f(y-r*.28)} ${f(x+r*.14)} ${f(y+r*.02)} C${f(x+r*.04)} ${f(y+r*.2)} ${f(x-r*.1)} ${f(y-r*.07)} ${f(x+r*.04)} ${f(y-r*.08)}`,null,shade,1.25);
      return;
    }
    if(kind===2){
      add(`M${f(x-r*.72)} ${f(y-r*.65)} Q${f(x-r*.9)} ${f(y+r*.7)} ${f(x)} ${f(y+r*.65)} Q${f(x+r*.9)} ${f(y+r*.7)} ${f(x+r*.72)} ${f(y-r*.65)} L${f(x+r*.22)} ${f(y-r*.25)} L${f(x)} ${f(y-r*.75)} L${f(x-r*.22)} ${f(y-r*.25)}Z`,color,null,1,1,true);
      add(`M${f(x-r*.22)} ${f(y-r*.25)} Q${f(x-r*.45)} ${f(y+r*.3)} ${f(x)} ${f(y+r*.5)} M${f(x+r*.22)} ${f(y-r*.25)} Q${f(x+r*.4)} ${f(y+r*.2)} ${f(x)} ${f(y+r*.5)}`,null,accent,1,.45);
      return;
    }
    if(kind===5||kind===6){
      const n=kind===5?12:10;
      for(let j=0;j<n;j++){
        const a=j*Math.PI*2/n;
        add(ellipse(x+Math.cos(a)*r*.57,y+Math.sin(a)*r*.57,r*.19,r*.49,a+Math.PI/2,own),kind===6?'#e0a336':color,null,1,1,true);
      }
      add(ellipse(x,y,r*(kind===6?.36:.23),r*(kind===6?.36:.23),0,own),kind===6?'#655538':accent,null,1,1,true);
      if(kind===6)for(let j=0;j<15;j++){const a=j*2.4,rr=r*.27*Math.sqrt(j/15);add(ellipse(x+Math.cos(a)*rr,y+Math.sin(a)*rr,.8,.8,0,own),'#d1ad5f');}
    }else{
      const petals=[5,8,0,14,7,0,0,6,5,12][kind],phase=own()*Math.PI*2;
      const pts=Array.from({length:90},(_,j)=>{const a=j*Math.PI*2/90;
        const rr=r*(kind===8?.7+.27*Math.cos(a*5+phase):.83+.14*Math.cos(a*petals+phase))*(.96+own()*.08);
        return [x+Math.cos(a)*rr,y+Math.sin(a)*rr];});
      add(smooth(pts),color,null,1,1,true);
      if(kind===9){
        for(let ring=1;ring<4;ring++)for(let j=0;j<10;j++){
          const a=j*Math.PI/5+ring*.25,rr=r*ring*.2;
          add(ellipse(x+Math.cos(a)*rr,y+Math.sin(a)*rr,r*.095,r*.17,a+Math.PI/2,own),ring%2?accent:color,null,1,.64,true);
        }
      }else{
        const n=kind===1?8:petals*2;
        for(let j=0;j<n;j++){
          const a=j*Math.PI*2/n,inner=r*.17,outer=r*(kind===1?.38:.52+own()*.13);
          add(`M${f(x+Math.cos(a)*inner)} ${f(y+Math.sin(a)*inner)} Q${f(x+Math.cos(a+.1)*outer*.7)} ${f(y+Math.sin(a+.1)*outer*.7)} ${f(x+Math.cos(a+.05)*outer)} ${f(y+Math.sin(a+.05)*outer)}`,null,kind===0||kind===7?dark:accent,kind===0?1.7:1.1,.8);
        }
        add(ellipse(x,y,r*(kind===7?.23:.13),r*(kind===7?.23:.13),0,own),kind===0||kind===7?dark:accent,null,1,1,true);
      }
    }
    if(isRare)add(ellipse(x+r*.82,y-r*.62,2.4,4,-.4,own),'#c49b38');
  }
  function leaf(add,x,y,angle,length,width,color,random){
    angle=Math.max(-Math.PI+.18,Math.min(-.18,angle));
    const bx=x+Math.cos(angle)*4,by=y+Math.sin(angle)*4;
    const tx=bx+Math.cos(angle)*length,ty=by+Math.sin(angle)*length;
    const px=-Math.sin(angle)*width,py=Math.cos(angle)*width;
    add(`M${f(x)} ${f(y)} L${f(bx)} ${f(by)}`,null,color,1);
    const shape=add(`M${f(bx)} ${f(by)} C${f(bx+(tx-bx)*.25+px)} ${f(by+(ty-by)*.25+py)} ${f(bx+(tx-bx)*.7+px)} ${f(by+(ty-by)*.7+py)} ${f(tx)} ${f(ty)} C${f(bx+(tx-bx)*.7-px)} ${f(by+(ty-by)*.7-py)} ${f(bx+(tx-bx)*.25-px)} ${f(by+(ty-by)*.25-py)} ${f(bx)} ${f(by)}Z`,mix(color,'#d8e6cb',.09),mix(color,'#d8e6cb',.3),.55,.96,true);
    if(shape&&typeof shape==='object')shape.leaf=true;
    add(`M${f(bx)} ${f(by)} Q${f((bx+tx)/2)} ${f((by+ty)/2)} ${f(tx)} ${f(ty)}`,null,'#dce4c3',.6,.45);
    for(let j=1;j<4;j++){
      const t=j*.19,lx=bx+(tx-bx)*t,ly=by+(ty-by)*t;
      add(`M${f(lx)} ${f(ly)} L${f(lx+(tx-bx)*.17+px*.54)} ${f(ly+(ty-by)*.17+py*.54)} M${f(lx)} ${f(ly)} L${f(lx+(tx-bx)*.17-px*.54)} ${f(ly+(ty-by)*.17-py*.54)}`,null,'#dce4c3',.4,.32);
    }
  }
  function branchPoint(start,control,end,t){
    return [0,1].map(i=>(1-t)**2*start[i]+2*(1-t)*t*control[i]+t*t*end[i]);
  }
  function branchAngle(start,control,end,t){return Math.atan2((1-t)*(control[1]-start[1])+t*(end[1]-control[1]),(1-t)*(control[0]-start[0])+t*(end[0]-control[0]));}
  function scene(count,offset,rare=[]) {
    count=Math.max(0,Math.min(15,count));
    const random=rng(seed() ^ Math.imul(Math.floor(offset/15)+1,2654435761));
    const colors=palettes[Math.floor(random()*palettes.length)], shapes=[];
    const add=(d,fill,stroke=null,width=1,opacity=1,grain=false)=>{const shape={d,fill,stroke,width,opacity,grain};shapes.push(shape);return shape;};
    // A painted alcove and shelf behind the vase, shared with exported cards.
    Object.assign(add('M76 339 L76 190 Q76 104 180 102 Q284 104 284 190 L284 339Z','#e9ddce'),{backdrop:'arch',darkFill:'#314943'});
    Object.assign(add(ellipse(222,190,45,57,-.2,random),'#ecc7bb',null,1,.48),{backdrop:'wash',darkFill:'#735849'});
    Object.assign(add('M78 335 Q172 330 282 335 L282 341 L78 341Z','#cdbfa9',null,1,.5),{backdrop:'shelf',darkFill:'#61766a'});
    // Paper-grounded shadow, followed by stems and leaves behind the blossoms.
    add(ellipse(180,338,55,4,0,random),'#c8c0ad',null,1,.24);
    if(count) {
      for(let b=0;b<Math.min(3,Math.ceil(count/6)+(count>=3?1:0));b++) {
        const side=b%2?-1:1,start=[180,241],control=[180+side*32,207],end=[180+side*(60+random()*17),148+random()*28];
        add(`M${start.join(' ')} Q${control.join(' ')} ${end.map(f).join(' ')}`,null,colors[3],1.7);
        add(`M${180+side*8} 325 L180 241`,null,colors[3],1.1,.6);
        for(let l=0;l<5;l++) {
          const t=.23+l*.15,[lx,ly]=branchPoint(start,control,end,t);
          leaf(add,lx,ly,branchAngle(start,control,end,t)+(l%2?-.78:.78),19+random()*8,7+random()*2,colors[b%2?4:3],random);
        }
      }
    }
    const flowers=[];
    for(let i=0;i<count;i++) {
      const own=rng(seed() ^ Math.imul(offset+i+1,1597334677));
      const [sx,sy,sr]=slots[i];
      const x=180+sx+(own()-.5)*13,y=254+sy*.70+(own()-.5)*12,r=sr*(.88+own()*.23);
      const kind=rare[i]?3:Math.floor(own()*flowerNames.length), color=colors[rare[i]?1:i<4?[0,1,2,1][i]:Math.floor(own()*3)];
      const rootX=180+(own()-.5)*25,neckX=180+(own()-.5)*7;
      const start=[neckX,240],control=[neckX+(x-neckX)*.22,y+(240-y)*.4],end=[x,y];
      // Bare, fine stems below the neck. Leaves attach only above the waterline.
      add(`M${f(rootX)} 325 L${f(neckX)} 240`,null,colors[i%3===0?3:4],1.35,.65);
      add(`M${f(neckX)} 240 Q${control.map(f).join(' ')} ${end.map(f).join(' ')}`,null,colors[i%3===0?3:4],1.6);
      const [lx,ly]=branchPoint(start,control,end,.32+own()*.16);
      const angle=branchAngle(start,control,end,.4)+(i%2?-.72:.72);
      leaf(add,lx,ly,angle,17+own()*8,6+own()*2,colors[4],own);
      const rotation=Math.max(-32,Math.min(32,Math.atan2(x-control[0],control[1]-y)*180/Math.PI))+(own()-.5)*8;
      flowers.push({x,y,r,kind,color,own,rotation,idx:offset+i,rare:rare[i]});
    }
    // The glass overlays visible stems. Its uneven outline suggests painted glass.
    add('M153 245 Q151 236 163 235 L197 235 Q208 236 206 245 L205 259 Q223 266 226 281 L231 325 Q232 339 218 341 L144 341 Q130 341 132 325 L136 281 Q138 265 154 259Z','#9fc6cc','#6b9ca7',1.3,.64,true);
    add('M145 286 Q173 280 220 286 L225 326 Q224 333 216 334 L144 334Z','#88b5c1',null,1,.3,true);
    add('M153 240 Q178 245 206 240',null,'#739eaa',2,.65);
    add('M144 279 L140 322',null,'#fffdf5',3,.5);
    // Rear flowers first, broad lower blossoms in front: a natural overlapping bouquet.
    flowers.sort((a,b)=>a.y-b.y).forEach(({x,y,r,kind,color,own,rotation,idx,rare:isRare})=>{
      paintFlower((d,...args)=>{const shape=add(rotatePath(d,x,y,rotation*Math.PI/180),...args);shape.flowerAngle=rotation;shape.flowerKind=kind;shape.flowerIndex=idx;},x,y,r,kind,color,colors[2],own,isRare);
    });
    // Repeatable dry-brush flecks, clipped inside the painted shapes.
    shapes.forEach((shape,i)=>{
      const numbers=shape.d.match(/-?\d+(?:\.\d+)?/g).map(Number);
      if(!shape.grain)return;
      const rr=rng(i*7717+offset+seed());
      const xs=numbers.filter((_,n)=>n%2===0),ys=numbers.filter((_,n)=>n%2===1);
      const x=Math.min(...xs),y=Math.min(...ys),w=Math.max(...xs)-x,h=Math.max(...ys)-y;
      shape.flecks=Array.from({length:70},()=>({x:f(x+rr()*w),y:f(y+rr()*h),r:f(.22+rr()*.55)}));
    });
    return shapes;
  }
  function markup(shapes,prefix) {
    const defs=shapes.map((s,i)=>s.grain?`<clipPath id="${prefix}-${i}"><path d="${s.d}"/></clipPath>`:'').join('');
    const body=shapes.map((s,i)=>`<g opacity="${s.opacity}"><path d="${s.d}" class="${s.backdrop?'bouquet-backdrop-'+s.backdrop:''}" fill="${s.fill||'none'}" stroke="${s.stroke||'none'}" stroke-width="${s.width}" stroke-linecap="round" stroke-linejoin="round"/>${s.flecks?`<g clip-path="url(#${prefix}-${i})" fill="${paper}" opacity=".5"><path d="${s.flecks.map(p=>`M${p.x} ${p.y}h${p.r}v${p.r}h-${p.r}z`).join('')}"/></g>`:''}</g>`).join('');
    return `<defs>${defs}</defs>${body}`;
  }
  function icon(kind,index,prefix='level'){
    const shapes=[],colors=palettes[index%palettes.length],own=rng(13579+index*771);
    paintFlower((d,fill,stroke=null,width=1,opacity=1,grain=false)=>shapes.push({d,fill,stroke,width,opacity,grain}),40,40,28,kind,kind===6?colors[2]:colors[index%2],colors[2],own);
    return `<svg class="garden-flower-icon" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${markup(shapes,prefix+'-'+index)}</svg>`;
  }
  function svg(count,offset,rare=[]) {
    const art=markup(scene(count,offset,rare),'bouquet-'+offset);
    return `<svg class="botanical-bouquet" viewBox="60 90 240 255" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${count?count+' 朵花的手繪花束':'等待第一朵花的玻璃花瓶'}" xmlns="http://www.w3.org/2000/svg">${art}</svg>`;
  }
  function draw(ctx,cx,baseY,count,offset,rare=[],scale=.88,dark=false) {
    ctx.save();ctx.translate(cx-180*scale,baseY-341*scale);ctx.scale(scale,scale);
    scene(count,offset,rare).forEach(s=>{
      ctx.save();ctx.globalAlpha=s.opacity;
      const path=new Path2D(s.d);ctx.lineCap='round';ctx.lineJoin='round';
      if(s.fill){ctx.fillStyle=dark&&s.darkFill?s.darkFill:s.fill;ctx.fill(path);}
      if(s.stroke){ctx.strokeStyle=s.stroke;ctx.lineWidth=s.width;ctx.stroke(path);}
      if(s.flecks){ctx.clip(path);ctx.fillStyle=paper;ctx.globalAlpha=s.opacity*.5;s.flecks.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();});}
      ctx.restore();
    });ctx.restore();
  }
  // Decorative sprigs share the room's petals, attached leaves and dry-brush marks.
  // They have fixed seeds and never touch the learner's earned bouquet seed.
  function sprig(kind,index,prefix='sprig') {
    const shapes=[],colors=palettes[index%palettes.length],own=rng(9041+index*771);
    const add=(d,fill,stroke=null,width=1,opacity=1,grain=false)=>{const s={d,fill,stroke,width,opacity,grain};shapes.push(s);return s;};
    add('M77 166 Q78 105 95 47',null,colors[4],2.2);
    add('M79 151 Q55 122 42 90',null,colors[4],1.7);
    leaf(add,80,135,-.7,33,8,colors[3],own);
    leaf(add,85,106,-2.6,26,7,colors[4],own);
    leaf(add,64,132,-2.8,28,8,colors[4],own);
    paintFlower((d,...args)=>add(rotatePath(d,95,47,.12),...args),95,47,30,kind,colors[0],colors[2],own);
    paintFlower((d,...args)=>add(rotatePath(d,42,90,-.3),...args),42,90,18,2,colors[1],colors[2],own);
    shapes.forEach((s,i)=>{
      if(!s.grain)return;
      const coords=s.d.match(/-?\d+(?:\.\d+)?/g).map(Number),xs=coords.filter((_,n)=>n%2===0),ys=coords.filter((_,n)=>n%2===1);
      const x=Math.min(...xs),y=Math.min(...ys),w=Math.max(...xs)-x,h=Math.max(...ys)-y,rr=rng(818+i*771+index);
      s.flecks=Array.from({length:24},()=>({x:f(x+rr()*w),y:f(y+rr()*h),r:f(.3+rr()*.5)}));
    });
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 180" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${markup(shapes,prefix+'-'+index)}</svg>`;
  }
  return {svg,draw,scene,icon,sprig,levels,flowerNames};
})();

// Theme is stored with the learning backup; system changes update an open room.
function applyGardenTheme(){
  const preference=lsGet('speakup_garden_theme','system');
  document.body.dataset.gardenTheme=preference==='dark'||(preference!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';
}
matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change',applyGardenTheme);
