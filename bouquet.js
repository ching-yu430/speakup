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
  function scene(count,offset,rare=[]) {
    count=Math.max(0,Math.min(15,count));
    const random=rng(seed() ^ Math.imul(Math.floor(offset/15)+1,2654435761));
    const colors=palettes[Math.floor(random()*palettes.length)], shapes=[];
    const add=(d,fill,stroke=null,width=1,opacity=1,grain=false)=>shapes.push({d,fill,stroke,width,opacity,grain});
    // Paper-grounded shadow, followed by stems and leaves behind the blossoms.
    add(ellipse(180,338,55,4,0,random),'#c8c0ad',null,1,.24);
    if(count) {
      for(let b=0;b<Math.min(5,Math.ceil(count/3)+1);b++) {
        const side=b%2?-1:1, x=180+side*(56+random()*24), y=166+random()*60;
        add(`M180 259 Q${180+side*12} 207 ${f(x)} ${f(y-52)}`,null,colors[3],2.6);
        for(let l=0;l<5;l++) {
          const ly=y-l*13, lx=180+(x-180)*(1-(l*13+30)/105);
          add(ellipse(lx+side*10,ly,7,22,side*(.6+l*.13),random),colors[b%3===0?4:3],null,1,.94,true);
        }
      }
    }
    const flowers=[];
    for(let i=0;i<count;i++) {
      const own=rng(seed() ^ Math.imul(offset+i+1,1597334677));
      const [sx,sy,sr]=slots[i];
      const x=180+sx+(own()-.5)*13,y=254+sy+(own()-.5)*12,r=sr*(.88+own()*.23);
      const kind=rare[i]?3:Math.floor(own()*4), color=colors[rare[i]?1:i<4?[0,1,2,1][i]:Math.floor(own()*3)];
      const rootX=180+(own()-.5)*23;
      add(`M${f(rootX)} 324 Q${f(180+(x-180)*.18)} 236 ${f(x)} ${f(y)}`,null,colors[i%3===0?3:4],2+own());
      // A pair of small leaves on each individual stem connects the bloom to the vase.
      const ly=(y+254)/2,lx=(x+180)/2;
      add(ellipse(lx+9,ly,5,17,.65,own),colors[4],null,1,.92,true);
      flowers.push({x,y,r,kind,color,own,rare:rare[i]});
    }
    // The glass overlays visible stems. Its uneven outline suggests painted glass.
    add('M153 245 Q151 236 163 235 L197 235 Q208 236 206 245 L205 259 Q223 266 226 281 L231 325 Q232 339 218 341 L144 341 Q130 341 132 325 L136 281 Q138 265 154 259Z','#9fc6cc','#6b9ca7',1.3,.64,true);
    add('M145 286 Q173 280 220 286 L225 326 Q224 333 216 334 L144 334Z','#88b5c1',null,1,.3,true);
    add('M153 240 Q178 245 206 240',null,'#739eaa',2,.65);
    add('M144 279 L140 322',null,'#fffdf5',3,.5);
    // Rear flowers first, broad lower blossoms in front: a natural overlapping bouquet.
    flowers.sort((a,b)=>a.y-b.y).forEach(({x,y,r,kind,color,own,rare:isRare})=>{
      if(kind===2) {
        add(`M${f(x-r*.8)} ${f(y-r*.4)} Q${f(x-r)} ${f(y+r)} ${f(x)} ${f(y+r*.7)} Q${f(x+r)} ${f(y+r)} ${f(x+r*.8)} ${f(y-r*.4)} L${f(x+r*.3)} ${f(y-r*.05)} L${f(x)} ${f(y-r*.7)} L${f(x-r*.25)} ${f(y-r*.1)}Z`,color,null,1,1,true);
        add(`M${f(x-r*.5)} ${f(y+r*.4)} Q${f(x)} ${f(y+r*.9)} ${f(x+r*.5)} ${f(y+r*.4)}`,null,colors[4],2.5);
        return;
      }
      const petals=kind===0?5:kind===1?10:14, phase=own()*6.28;
      const pts=Array.from({length:80},(_,j)=>{const a=j*Math.PI/40;
        const rr=r*(.82+.16*Math.cos(a*petals+phase))*(.95+own()*.1);
        return [x+Math.cos(a)*rr,y+Math.sin(a)*rr];});
      add(smooth(pts),color,null,1,1,true);
      for(let j=0;j<petals*2;j++) {
        const a=j*Math.PI/petals,inner=r*(.14+own()*.12),outer=r*(.42+own()*.2);
        add(`M${f(x+Math.cos(a)*inner)} ${f(y+Math.sin(a)*inner)} Q${f(x+Math.cos(a+.13)*outer*.7)} ${f(y+Math.sin(a+.13)*outer*.7)} ${f(x+Math.cos(a+.06)*outer)} ${f(y+Math.sin(a+.06)*outer)}`,null,kind===0?'#293c30':colors[2],kind===0?1.8:1.2,.86);
      }
      add(ellipse(x,y,r*.13,r*.12,0,own),kind===0?'#283b2d':colors[2],null,1,1,true);
      if(isRare) add(ellipse(x+r*.82,y-r*.62,2.4,4,-.4,own),'#c49b38');
    });
    // Repeatable dry-brush flecks, clipped inside the painted shapes.
    shapes.forEach((shape,i)=>{
      // Broader, compact silhouette suited to the phone's central illustration area.
      const numbers=shape.d.match(/-?\d+(?:\.\d+)?/g).map(Number);
      let coordinate=0;
      shape.d=shape.d.replace(/-?\d+(?:\.\d+)?/g,value=>f(coordinate++%2 ? 341-(341-Number(value))*.75 : 180+(Number(value)-180)*1.12));
      if(!shape.grain)return;
      const rr=rng(i*7717+offset+seed());
      const xs=numbers.filter((_,n)=>n%2===0).map(x=>180+(x-180)*1.12),ys=numbers.filter((_,n)=>n%2===1).map(y=>341-(341-y)*.75);
      const x=Math.min(...xs),y=Math.min(...ys),w=Math.max(...xs)-x,h=Math.max(...ys)-y;
      shape.flecks=Array.from({length:70},()=>({x:f(x+rr()*w),y:f(y+rr()*h),r:f(.22+rr()*.55)}));
    });
    return shapes;
  }
  function svg(count,offset,rare=[]) {
    const shapes=scene(count,offset,rare),prefix='bouquet-'+offset;
    const defs=shapes.map((s,i)=>s.grain?`<clipPath id="${prefix}-${i}"><path d="${s.d}"/></clipPath>`:'').join('');
    const body=shapes.map((s,i)=>`<g opacity="${s.opacity}"><path d="${s.d}" fill="${s.fill||'none'}" stroke="${s.stroke||'none'}" stroke-width="${s.width}" stroke-linecap="round" stroke-linejoin="round"/>${s.flecks?`<g clip-path="url(#${prefix}-${i})" fill="${paper}" opacity=".5"><path d="${s.flecks.map(p=>`M${p.x} ${p.y}h${p.r}v${p.r}h-${p.r}z`).join('')}"/></g>`:''}</g>`).join('');
    return `<svg class="botanical-bouquet" viewBox="65 113 230 231" role="img" aria-label="${count?count+' 朵花的手繪花束':'等待第一朵花的玻璃花瓶'}" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${body}</svg>`;
  }
  function draw(ctx,cx,baseY,count,offset,rare=[]) {
    const scale=1.18;
    ctx.save();ctx.translate(cx-180*scale,baseY-341*scale);ctx.scale(scale,scale);
    scene(count,offset,rare).forEach(s=>{
      ctx.save();ctx.globalAlpha=s.opacity;
      const path=new Path2D(s.d);ctx.lineCap='round';ctx.lineJoin='round';
      if(s.fill){ctx.fillStyle=s.fill;ctx.fill(path);}
      if(s.stroke){ctx.strokeStyle=s.stroke;ctx.lineWidth=s.width;ctx.stroke(path);}
      if(s.flecks){ctx.clip(path);ctx.fillStyle=paper;ctx.globalAlpha=s.opacity*.5;s.flecks.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();});}
      ctx.restore();
    });ctx.restore();
  }
  return {svg,draw,scene};
})();
