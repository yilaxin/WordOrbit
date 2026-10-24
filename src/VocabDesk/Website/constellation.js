/* Perspective topic universe with one original illustration per destination. No private word bodies. */
(()=>{
  'use strict';
  const G=OrbitSpace,ART=window.WORDORBIT_TOPIC_ART||[],WORLD={width:1240,height:760},RINGS=[{count:3,phase:-.8},{count:5,phase:.33},{count:6,phase:-.23},{count:7,phase:.24}];
  const $map=s=>document.querySelector(s),clamp=G.clamp,esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let root,viewport,camera,bodies,lanes,ctx,model=[],nodeViews=[],signature='',mounted=false;
  let hovered=null,selected=null,view='map',elapsed=0,fit=1,zoom=1,visible=false,expanded=false,keyboardFocus=false,manualPause=false,frame=null,lastFrame=null,drag=null,pinch=0,overview=null;
  let dimensions={width:1000,height:600},previousOverflow='',returnFocus=null,search='',filter='all',lastPoints=[];
  const cam={yaw:.12,pitch:.85,zoom:1,target:[0,0,0]},wanted={yaw:.12,pitch:.85,zoom:1,target:[0,0,0]},pointers=new Map();
  function readModel() {
    const buckets = new Map(CHAPTERS.map(chapter => [chapter, { count: 0, done: 0, due:0, unseen:0 }]));
    state.words.forEach(word => {
      const bucket = buckets.get(word.chapter);
      if (!bucket || !qVerified(word)) return;
      bucket.count++;
      if (mastered(word)) bucket.done++;
      if (isDue(word)) bucket.due++;
      if (!(state.records[word.id]?.seen>0)) bucket.unseen++;
    });
    const rows = ART.map((art, index) => ({ ...art, index, ...buckets.get(art.chapter) }));
    const previousStar = model.find(row => row.star)?.chapter;
    const ranked = rows.slice().sort((a, b) => b.count - a.count || Number(b.chapter === previousStar) - Number(a.chapter === previousStar) || a.index - b.index);
    const star = ranked.shift();
    const minimum = Math.min(...rows.map(row => row.count));
    const maximum = Math.max(...rows.map(row => row.count));
    const denominator = Math.sqrt(maximum) - Math.sqrt(minimum);
    rows.forEach(row => {
      row.percent = row.count ? Math.round(row.done / row.count * 100) : 0;
      row.star = row === star;
      // Give the central star a distinct visual tier, rather than letting a similarly
      // sized topic planet compete with it. Orbiting bodies keep their count ranking.
      row.size = row.star ? 174 : denominator ? 40 + 32 * (Math.sqrt(row.count) - Math.sqrt(minimum)) / denominator : 56;
      row.ring = -1;
      row.angle = 0;
    });
    let cursor = 0;
    RINGS.forEach((ring, ringIndex) => {
      const group = ranked.slice(cursor, cursor + ring.count);
      group.forEach((row, index) => { row.ring = ringIndex; row.angle = ring.phase + index * Math.PI * 2 / group.length; });
      cursor += group.length;
    });
    // A private planet is optional. It never changes the book's 22-topic central star.
    const personal = window.WordOrbitMyWords?.summary();
    if (personal?.total > 0) {
      const outer = rows.filter(row => !row.star && row.ring === 3);
      outer.forEach((row,index) => { row.angle = RINGS[3].phase + index * Math.PI * 2 / (outer.length + 1); });
      rows.push({id:'mywords-private',chapter:'我的词库',title:'私人词汇星球',kind:'personal',color:'#74d4f8',src:'assets/display-brand.png',fit:1.15,index:rows.length,count:personal.total,ready:personal.ready,done:personal.done,percent:personal.ready?Math.round(personal.done/personal.ready*100):0,due:personal.due,unseen:0,personal:true,star:false,size:Math.min(72,40+Math.sqrt(personal.total)*.6),ring:3,angle:RINGS[3].phase+outer.length*Math.PI*2/(outer.length+1)});
    }
    return G.prepare(rows);
  }

  function decorateList() {
    const personal = model.find(row => row.personal);
    let privateCard = $map('#myWordsChapterCard');
    if (personal && !privateCard) {
      privateCard = document.createElement('button');
      privateCard.id = 'myWordsChapterCard';privateCard.className = 'chapter-card is-personal';privateCard.dataset.chapter = '我的词库';
      $map('#chapterGrid').append(privateCard);
    }
    if (!personal && privateCard) { privateCard.remove(); privateCard = null; }
    if (privateCard) {
      privateCard.innerHTML = '<div class="chapter-topline"><img class="chapter-art" src="assets/display-brand.png" alt="" width="48" height="48"/><small>PRIVATE / 仅本机</small></div><strong>我的词库</strong><div class="mini-track"><span style="width:'+personal.percent+'%"></span></div><div class="chapter-bottom"><span>'+personal.done+' / '+personal.ready+' 可练习词已掌握</span><b>'+personal.percent+'%</b></div>';
      privateCard.setAttribute('aria-label','我的词库，'+personal.count+' 个私人词条，'+personal.ready+' 个可练习词');
    }
    const byChapter = new Map(model.map(row => [row.chapter, row]));
    document.querySelectorAll('#chapterGrid .chapter-card').forEach(button => {
      const row = byChapter.get(button.dataset.chapter);
      if (!row) return;
      button.classList.toggle('selected', selected === row.chapter);
      button.setAttribute('aria-pressed', String(selected === row.chapter));
      const old = button.querySelector('.chapter-planet');
      if (old) old.outerHTML = '<img class="chapter-art" src="' + esc(row.src) + '" alt="" width="48" height="48" loading="lazy"/>';
      const caption = button.querySelector('.chapter-topline small');
      if (caption) caption.textContent = row.star ? '中央恒星' : row.title;
      button.onclick = () => selectTopic(row.chapter, true);
    });
  }

  function home(){return !!$map('#view-home')?.classList.contains('active');}
  function ensureMounted(){if(root)return true;root=$map('#topicExplorer');if(!root)return false;viewport=$map('#constellationViewport');camera=$map('#constellationCamera');bodies=$map('#constellationBodies');
    view=state.settings?.constellationView==='list'?'list':'map';manualPause=state.settings?.constellationPaused===true;
    $map('#starMapViewBtn').onclick=()=>setView('map');$map('#starListViewBtn').onclick=()=>setView('list');$map('#starMapZoomIn').onclick=()=>setZoom(zoom*1.2);$map('#starMapZoomOut').onclick=()=>setZoom(zoom/1.2);$map('#starMapReset').onclick=()=>clearSelection(true);$map('#starMapExpand').onclick=()=>setExpanded(!expanded);
    $map('#starMapPlayBtn').onclick=()=>{if(selected){clearSelection();manualPause=false;}else manualPause=!manualPause;state.settings.constellationPaused=manualPause;save();synchronizeAnimation();};
    $map('#constellationStart').onclick=launchTopic;$map('#constellationBrowse').onclick=browseTopic;$map('#constellationReturn').onclick=()=>clearSelection();
    $map('#constellationSearch').addEventListener('input',event=>{search=event.target.value.trim();draw();updateLocator();});
    $map('#constellationSearch').addEventListener('keydown',event=>{if(event.key==='Enter'){const row=model.find(matches);if(row)selectTopic(row.chapter,true);}});
    $map('#constellationFilter').onchange=event=>{filter=event.target.value;draw();updateLocator();};$map('#constellationLocator').onchange=event=>{if(event.target.value)selectTopic(event.target.value,true);};
    viewport.addEventListener('focusin',event=>{keyboardFocus=event.target.matches(':focus-visible');synchronizeAnimation();});viewport.addEventListener('focusout',event=>{if(!viewport.contains(event.relatedTarget)){keyboardFocus=false;synchronizeAnimation();}});
    viewport.addEventListener('pointerdown',event=>{if(event.pointerType==='mouse')keyboardFocus=false;const control=event.target.closest('button,input,select,textarea,a,[contenteditable]');if(control||event.button!==0)return;pointers.set(event.pointerId,{x:event.clientX,y:event.clientY});if(pointers.size===2){const p=[...pointers.values()];pinch=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);return;}drag={id:event.pointerId,x:event.clientX,y:event.clientY};viewport.setPointerCapture(event.pointerId);viewport.classList.add('is-dragging');});
    viewport.addEventListener('pointermove',event=>{if(!pointers.has(event.pointerId))return;pointers.set(event.pointerId,{x:event.clientX,y:event.clientY});if(pointers.size===2){const p=[...pointers.values()],distance=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);if(pinch>0)setZoom(zoom*distance/pinch);pinch=distance;return;}if(!drag||drag.id!==event.pointerId)return;wanted.yaw-=(event.clientX-drag.x)*.005;wanted.pitch=clamp(wanted.pitch+(event.clientY-drag.y)*.004,-.2,1.45);drag.x=event.clientX;drag.y=event.clientY;cam.yaw=wanted.yaw;cam.pitch=wanted.pitch;draw();});
    const end=event=>{pointers.delete(event.pointerId);pinch=0;if(drag?.id===event.pointerId){drag=null;viewport.classList.remove('is-dragging');if(viewport.hasPointerCapture(event.pointerId))viewport.releasePointerCapture(event.pointerId);}};viewport.addEventListener('pointerup',end);viewport.addEventListener('pointercancel',end);
    viewport.addEventListener('wheel',event=>{if(!event.ctrlKey)return;event.preventDefault();setZoom(zoom*Math.exp(-event.deltaY*.002));},{passive:false});
    viewport.addEventListener('keydown',event=>{if(event.target!==viewport)return;const moves={ArrowLeft:[.12,0],ArrowRight:[-.12,0],ArrowUp:[0,.08],ArrowDown:[0,-.08]};if(moves[event.key]){event.preventDefault();wanted.yaw+=moves[event.key][0];wanted.pitch=clamp(wanted.pitch+moves[event.key][1],-.2,1.45);cam.yaw=wanted.yaw;cam.pitch=wanted.pitch;draw();}else if(['+','='].includes(event.key)){event.preventDefault();setZoom(zoom*1.2);}else if(event.key==='-'){event.preventDefault();setZoom(zoom/1.2);}else if(event.key==='0'){event.preventDefault();clearSelection(true);}});
    root.addEventListener('keydown',event=>{if(event.key==='Escape'&&selected){event.preventDefault();event.stopPropagation();clearSelection();return;}if(!expanded)return;if(event.key==='Escape'){event.preventDefault();setExpanded(false);}if(event.key==='Tab'){const controls=[...root.querySelectorAll('button:not(:disabled),input,select,[tabindex="0"]')].filter(e=>e.getClientRects().length&&e.tabIndex>=0),first=controls[0],last=controls[controls.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}});
    new ResizeObserver(resize).observe(viewport);new IntersectionObserver(entries=>{visible=!!entries[0]?.isIntersecting;synchronizeAnimation();},{threshold:.01}).observe(viewport);
    new MutationObserver(synchronizeAnimation).observe(document.body,{attributes:true,attributeFilter:['data-motion','data-active-view']});matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',synchronizeAnimation);document.addEventListener('visibilitychange',synchronizeAnimation);window.addEventListener('pagehide',disposeGraphics);applyView();return true;
  }
  function matches(row){return (!search||(row.chapter+' '+row.title).includes(search))&&(filter==='all'||filter==='due'&&row.due>0||filter==='unseen'&&row.unseen>0);}
  function updateLocator(){const locator=$map('#constellationLocator');if(!locator)return;locator.innerHTML='<option value="">定位目的地</option>'+model.filter(matches).map(r=>`<option value="${esc(r.chapter)}">${esc(r.chapter)} · ${r.count} 词</option>`).join('');locator.value=model.some(r=>r.chapter===selected&&matches(r))?selected:'';$map('#constellationFilterCount').textContent=model.filter(matches).length+'/'+model.length+' 个目的地';}
  function mountGraphics(){if(mounted||view!=='map'||!home())return;mounted=true;$map('.constellation-background').innerHTML='<img class="topic-galaxy" src="assets/comets/milkyway-v1-1536.webp" srcset="assets/comets/milkyway-v1-768.webp 768w, assets/comets/milkyway-v1-1536.webp 1536w" sizes="(max-width:600px) 100vw,1200px" width="1536" height="864" alt="" loading="lazy" decoding="async"/>';lanes=document.createElement('canvas');lanes.className='constellation-lanes';lanes.setAttribute('aria-hidden','true');camera.prepend(lanes);ctx=lanes.getContext('2d');rebuildBodies();resize();}
  function disposeGraphics(){if(frame!==null)cancelAnimationFrame(frame);frame=null;lastFrame=null;pointers.clear();drag=null;viewport?.classList.remove('is-dragging');if(lanes){lanes.width=lanes.height=0;lanes.remove();}lanes=ctx=null;nodeViews=[];lastPoints=[];bodies?.replaceChildren();$map('.constellation-background')?.replaceChildren();mounted=false;}
  function rebuildBodies(){if(!mounted)return;const starArt=ART.find(r=>r.kind==='star');bodies.innerHTML=model.map(row=>{const image=row.star?starArt||row:row;return `<button type="button" class="celestial-body ${row.star?'is-star':''}" data-topic="${esc(row.chapter)}" data-kind="${row.kind}" data-behavior="${row.behavior}" style="--body-color:${row.color}" aria-pressed="false">${row.star?'<span class="stellar-corona" aria-hidden="true"></span>':''}<span class="celestial-object" aria-hidden="true"><img src="${esc(image.src)}" alt="" draggable="false" style="--art-fit:${image.fit||1};--art-offset-x:${image.offsetX||'0%'};--art-offset-y:${image.offsetY||'0%'}"/></span><svg class="celestial-progress" viewBox="0 0 120 120" aria-hidden="true"><circle class="celestial-progress-track" cx="60" cy="60" r="53"/><circle class="celestial-progress-value" cx="60" cy="60" r="53" pathLength="100" stroke-dasharray="${row.percent} 100"/></svg>${row.star&&row.kind!=='star'?`<span class="stellar-theme-mark"><img src="${esc(row.src)}" alt=""/></span>`:''}<span class="celestial-label"><strong>${esc(row.chapter)}</strong>${row.star?'<small>中央恒星</small>':''}</span></button>`;}).join('');nodeViews=[...bodies.children].map((element,index)=>{const row=model[index];element.onclick=()=>selectTopic(row.chapter);element.onpointerenter=element.onfocus=()=>{hovered=row.chapter;draw();};element.onpointerleave=element.onblur=()=>{if(hovered===row.chapter)hovered=null;draw();};element.setAttribute('aria-label',`${row.chapter}，${row.count} 个${row.personal?'私人词条':'可练习词'}，已掌握 ${row.done} 个，${row.behaviorLabel}`);element.title=`${row.chapter} · ${row.count} 词 · ${row.behaviorLabel}`;const image=element.querySelector('.celestial-object img');image.onerror=()=>element.classList.add('asset-missing');return {row,element,image,object:element.querySelector('.celestial-object'),progress:element.querySelector('.celestial-progress'),label:element.querySelector('.celestial-label')};});updateSelection();}
  function render(){if(!ensureMounted())return;const rows=readModel(),key=rows.map(r=>[r.chapter,r.count,r.done,r.due,r.unseen,r.star,r.ready||0].join(':')).join('|');if(key!==signature){model=rows;signature=key;if(selected&&!model.some(r=>r.chapter===selected)){selected=null;overview=null;}if(mounted)rebuildBodies();}decorateList();const star=model.find(r=>r.star),personal=model.find(r=>r.personal);$map('#constellationSummary').textContent=`22 个主题 · ${model.filter(r=>!r.personal).reduce((s,r)=>s+r.count,0).toLocaleString('zh-CN')} 个可练习词${personal?' · 私人 '+personal.count+' 词':''}`;$map('#constellationCenterLabel').textContent=star.chapter+' · 中央恒星';updateLocator();updateSelection();if(view==='map'&&home())mountGraphics();resize();synchronizeAnimation();}
  function resize(){if(!viewport||view!=='map'||!viewport.clientWidth)return;dimensions={width:viewport.clientWidth,height:viewport.clientHeight};fit=Math.max(.22,Math.min((dimensions.width-70)/WORLD.width,(dimensions.height-100)/WORLD.height));if(lanes){const dpr=Math.min(devicePixelRatio||1,1.5);lanes.width=Math.round(dimensions.width*dpr);lanes.height=Math.round(dimensions.height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);}draw();}
  function overlap(a,b){return Math.max(0,Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x))*Math.max(0,Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y));}
  function drawLanes(items,prepared){if(!ctx)return;ctx.clearRect(0,0,dimensions.width,dimensions.height);ctx.lineWidth=1;
    for(const item of items){const row=item.row;if(['star','explorer','transport','patrol','station'].includes(row.behavior))continue;ctx.strokeStyle=row.chapter===selected?'#c6b3ffb0':row.hostId?'#82cfe840':'#b3b6ee29';ctx.setLineDash(row.behavior==='comet'?[2,7]:[]);ctx.beginPath();let started=false;
      for(let j=0;j<=80;j++){let p;if(row.hostId){const a=j*Math.PI/40,r=row.hostRadius;p=G.add(item.host,[r*Math.cos(a),r*.36*Math.sin(a+.6),r*.73*Math.sin(a)]);}else if(row.behavior==='comet'){const a=j*Math.PI/40;p=[650*Math.cos(a)+80,80*Math.sin(a+.8),290*Math.sin(a)];}else p=G.orbit(row,elapsed,j*Math.PI/40);const v=G.project(p,cam,fit,dimensions.width,dimensions.height,prepared);if(!v){started=false;continue;}if(!started){ctx.moveTo(v.x,v.y);started=true;}else ctx.lineTo(v.x,v.y);}ctx.stroke();}
    ctx.setLineDash([]);for(const item of items.filter(i=>i.row.behavior==='satellite')){if(Math.floor(elapsed/8)%2!==item.row.index%2)continue;const p=G.project(item.position,cam,fit,dimensions.width,dimensions.height,prepared),h=G.project(item.host,cam,fit,dimensions.width,dimensions.height,prepared);if(p&&h){ctx.strokeStyle='#8ed9f53d';ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(h.x,h.y);ctx.stroke();}}
  }
  function draw(){if(!mounted||view!=='map'||!model.length)return;const items=G.frame(model,elapsed),prepared=G.basis(cam);drawLanes(items,prepared);const star=model.find(r=>r.star),starProjection=G.project([0,0,0],cam,fit,dimensions.width,dimensions.height,prepared),starSize=clamp(star.size*(starProjection?.scale||fit),dimensions.width<600?92:128,260);
    const points=items.map(item=>({...item,screen:G.project(item.position,cam,fit,dimensions.width,dimensions.height,prepared)}));lastPoints=points;
    const occupied=[],obstacles=points.filter(p=>p.screen).map(p=>{const s=p.row.star?starSize:clamp(p.row.size*p.screen.scale,26,Math.min(94,starSize*.43));p.size=s;return {id:p.row.id,x:p.screen.x-s/2,y:p.screen.y-s/2,w:s,h:s};});
    const ordered=points.filter(p=>p.screen).sort((a,b)=>Number(b.row.chapter===selected)-Number(a.row.chapter===selected)||Number(b.row.chapter===hovered)-Number(a.row.chapter===hovered)||Number(b.row.star)-Number(a.row.star)||a.screen.depth-b.screen.depth),labels=new Map();
    for(const point of ordered){const {row,screen:p}=point,r=point.size/2+9,w=Math.max(67,row.chapter.length*11+16),h=row.star?37:25;let best=null,score=Infinity;
      for(const [dx,dy] of [[-w/2,r],[-w/2,-r-h],[r,-h/2],[-r-w,-h/2],[r*.6,r*.7],[-r*.6-w,r*.7],[-w/2,r+29],[-w/2,-r-h-29]]){const candidate={x:clamp(p.x+dx,8,dimensions.width-w-8),y:clamp(p.y+dy,64,dimensions.height-h-48),w,h};const value=occupied.reduce((s,o)=>s+overlap(candidate,o)*20,0)+obstacles.filter(o=>o.id!==row.id).reduce((s,o)=>s+overlap(candidate,o)*4,0)+Math.hypot(candidate.x-(p.x+dx),candidate.y-(p.y+dy))*6;if(value<score){score=value;best=candidate;}}
      const priority=row.chapter===selected||row.chapter===hovered||row.star,inside=p.x>=-20&&p.x<=dimensions.width+20&&p.y>=35&&p.y<=dimensions.height-35,show=inside&&(priority||score<20);if(show){occupied.push(best);labels.set(row.id,best);}
    }
    points.forEach((point,index)=>{const item=nodeViews[index];if(!item)return;const p=point.screen,row=point.row;item.element.hidden=!p||p.x< -160||p.x>dimensions.width+160||p.y< -160||p.y>dimensions.height+160;if(!p)return;item.element.tabIndex=p.x>=24&&p.x<dimensions.width-24&&p.y>=48&&p.y<dimensions.height-48?0:-1;const title=row.chapter+' · '+point.activity+' · '+row.count+' 词';if(item.element.title!==title)item.element.title=title;const size=point.size||26,hit=Math.max(48,size);item.element.style.width=item.element.style.height=hit+'px';item.element.style.transform=`translate(${p.x-hit/2}px,${p.y-hit/2}px)`;item.element.style.zIndex=String(row.chapter===selected?4000:Math.round(3000-p.depth));item.element.style.opacity=selected&&row.chapter!==selected?'.42':matches(row)?'1':'.22';item.object.style.width=item.object.style.height=size+'px';item.progress.style.width=item.progress.style.height=size+13+'px';
      // Keep the detailed artwork as the only body. Rotate its face in screen space,
      // never flatten it into an edge or replace it with an unrelated placeholder mesh.
      const vessel=['explorer','transport','patrol'].includes(row.behavior),dt=elapsed-(item.headingTime??elapsed);
      if(vessel){item.heading=item.heading&&dt>=0&&dt<.5?G.turn(item.heading,point.heading,dt*(row.behavior==='patrol'?.6:1.1)):point.heading;point.heading=item.heading;}
      let angle=row.star?elapsed*.25:row.behavior==='station'?0:elapsed*(row.kind==='asteroid'?.6:.16);
      if(vessel||row.behavior==='satellite'||row.kind==='comet'){
        const x=G.dot(point.heading,prepared.right),y=-G.dot(point.heading,prepared.up);
        const target=Math.hypot(x,y)>.08?Math.atan2(y,x)*180/Math.PI-(row.artHeading??25):(item.artAngle??0);
        const delta=((target-(item.artAngle??target)+540)%360+360)%360-180;
        const cameraChanged=item.artYaw!==cam.yaw||item.artPitch!==cam.pitch,step=100*Math.max(0,dt);
        angle=item.artAngle===undefined||cameraChanged?target:item.artAngle+clamp(delta,-step,step);
      }
      item.headingTime=elapsed;item.artAngle=angle;item.artYaw=cam.yaw;item.artPitch=cam.pitch;item.image.style.rotate=angle+'deg';
      if(row.star)item.element.querySelector('.stellar-corona').style.opacity=String(.70+.10*Math.sin(elapsed*.4));
      const label=labels.get(row.id);item.label.hidden=!label;item.element.classList.toggle('label-visible',!!label);if(label){item.label.style.width=label.w+'px';item.label.style.height=label.h+'px';item.label.style.transform=`translate(${label.x-p.x}px,${label.y-p.y}px)`;}
    });camera.style.setProperty('--camera-yaw',cam.yaw);camera.style.setProperty('--camera-pitch',cam.pitch);$map('#starMapZoomValue').textContent=Math.round(zoom*100)+'%';$map('#starMapZoomOut').disabled=zoom<=.66;$map('#starMapZoomIn').disabled=zoom>=2.79;
  }
  function canAnimate(){return mounted&&view==='map'&&visible&&home()&&!document.hidden&&document.body.dataset.motion!=='off'&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&!keyboardFocus&&!manualPause&&!selected;}
  function cameraMoving(){return Math.abs(cam.yaw-wanted.yaw)+Math.abs(cam.pitch-wanted.pitch)+Math.abs(cam.zoom-wanted.zoom)+Math.hypot(...G.sub(cam.target,wanted.target))>.06;}
  function animate(now){frame=null;if(!mounted||!visible||!home()||document.hidden)return;if(lastFrame===null)lastFrame=now;const dt=now-lastFrame;if(dt>=1000/25){if(canAnimate())elapsed+=Math.min(dt,100)/1000;lastFrame=now;const ease=.22;cam.yaw+=(wanted.yaw-cam.yaw)*ease;cam.pitch+=(wanted.pitch-cam.pitch)*ease;cam.zoom+=(wanted.zoom-cam.zoom)*ease;cam.target=G.add(cam.target,G.mul(G.sub(wanted.target,cam.target),ease));if(!cameraMoving()){cam.yaw=wanted.yaw;cam.pitch=wanted.pitch;cam.zoom=wanted.zoom;cam.target=wanted.target.slice();}draw();}if(canAnimate()||cameraMoving())frame=requestAnimationFrame(animate);else lastFrame=null;}
  function synchronizeAnimation(){if(!root)return;if(!home()||view!=='map'){if(expanded&&!home())setExpanded(false);disposeGraphics();return;}mountGraphics();const globalOff=document.body.dataset.motion==='off'||matchMedia('(prefers-reduced-motion: reduce)').matches,paused=!canAnimate();root.dataset.paused=String(paused);$map('#constellationMotionStatus').textContent=selected?'聚焦停泊 · Esc 返回星系':globalOff?'静态浏览 · 已跟随动效设置':manualPause?'已暂停 · 点击继续航行':keyboardFocus?'键盘定位 · 航行暂停':'自主航行 · 悬停时继续';const button=$map('#starMapPlayBtn');button.textContent=selected||manualPause||globalOff?'▶':'Ⅱ';button.disabled=globalOff&&!selected;button.title=selected?'返回星系并继续航行':manualPause?'继续航行':'暂停航行';button.setAttribute('aria-label',button.title);
    if((!visible||document.hidden||(!canAnimate()&&!cameraMoving()))&&frame!==null){cancelAnimationFrame(frame);frame=null;lastFrame=null;}if(visible&&!document.hidden&&(canAnimate()||cameraMoving())&&frame===null)frame=requestAnimationFrame(animate);
  }
  function selectTopic(chapter,scroll=false){const row=model.find(r=>r.chapter===chapter);if(!row)return;if(!selected)overview={yaw:cam.yaw,pitch:cam.pitch,zoom,target:cam.target.slice()};selected=chapter;const point=G.frame(model,elapsed).find(p=>p.row.chapter===chapter);wanted.target=point.position.slice();wanted.zoom=zoom=Math.max(zoom,1.25);if(matchMedia('(prefers-reduced-motion: reduce)').matches||document.body.dataset.motion==='off'){cam.target=wanted.target.slice();cam.zoom=zoom;}updateSelection();decorateList();updateLocator();draw();synchronizeAnimation();if(scroll&&!expanded)(view==='map'?viewport:$map('#constellationSelection')).scrollIntoView({block:'nearest',behavior:'instant'});}
  function clearSelection(reset=false){selected=null;const goal=!reset&&overview?overview:{yaw:.12,pitch:.85,zoom:1,target:[0,0,0]};Object.assign(wanted,{...goal,target:goal.target.slice()});zoom=goal.zoom;overview=null;if(matchMedia('(prefers-reduced-motion: reduce)').matches||document.body.dataset.motion==='off'){Object.assign(cam,{...wanted,target:wanted.target.slice()});}updateSelection();decorateList();updateLocator();draw();synchronizeAnimation();}
  function updateSelection(){nodeViews.forEach(item=>{const chosen=item.row.chapter===selected;item.element.classList.toggle('selected',chosen);item.element.setAttribute('aria-pressed',String(chosen));});const row=model.find(r=>r.chapter===selected);$map('#constellationEmpty').hidden=!!row;$map('#constellationSelectedInfo').hidden=!row;$map('#constellationStart').disabled=!row||!row.count;$map('#constellationBrowse').hidden=!row;$map('#constellationReturn').hidden=!row;$map('#constellationStart').textContent=row?.personal&&!row.ready?'补充我的词库释义 ↗':'开始练习 ↗';if(!row)return;$map('#selectedTopicImage').src=row.src;const host=model.find(r=>r.id===row.hostId);$map('#selectedTopicKind').textContent=row.behaviorLabel+' · '+G.frame(model,elapsed).find(p=>p.row.id===row.id).activity+' · '+row.title+(host?' · 环绕 '+host.chapter+'（仅空间关系）':'');$map('#selectedTopicName').textContent=row.chapter;$map('#selectedTopicCounts').textContent=row.personal?`${row.count} 个私人词条 · 可练习 ${row.ready} 个 · 已掌握 ${row.done} 个`:`${row.count} 个可练习词 · 已掌握 ${row.done} 个 · 待复习 ${row.due} 个 · 未开始 ${row.unseen} 个`;$map('#selectedTopicPercent').textContent=row.percent+'%';$map('#selectedTopicProgress').style.width=row.percent+'%';}
  function launchTopic() {
    const row = model.find(item => item.chapter === selected);
    if (!row?.count) return;
    if (expanded) setExpanded(false);
    if (row.personal) {
      if (row.ready) window.WordOrbitMyWords.openPractice();
      else showView('mywords');
      return;
    }
    setup = { ...setup, type: 'mixed', count: 20, chapter: row.chapter, source: 'all', order: 'smart' };
    openSetup('mixed');
    $map('#chapterSelect').value = row.chapter;
    $map('#sourceSelect').value = 'all';
    document.querySelectorAll('#orderChoices .choice').forEach(button => button.classList.toggle('active', button.dataset.order === 'smart'));
  }

  function browseTopic(){const row=model.find(r=>r.chapter===selected);if(!row)return;if(expanded)setExpanded(false);if(row.personal){showView('mywords');return;}showView('library');$map('#searchInput').value='';$map('#libraryStatus').value='all';$map('#libraryChapter').value=row.chapter;$map('#libraryChapter').dispatchEvent(new Event('change'));}
  function applyView(){if(!root)return;viewport.hidden=view!=='map';$map('#chapterGrid').hidden=view!=='list';root.dataset.topicView=view;for(const mode of ['map','list']){const button=$map(mode==='map'?'#starMapViewBtn':'#starListViewBtn');button.classList.toggle('active',view===mode);button.setAttribute('aria-pressed',String(view===mode));}$map('.constellation-controls').hidden=view!=='map';resize();synchronizeAnimation();}
  function setView(next){view=next;state.settings.constellationView=view;save();applyView();}
  function setZoom(value){zoom=clamp(value,.65,2.8);cam.zoom=wanted.zoom=zoom;draw();}
  function setExpanded(value){if(expanded===value)return;expanded=value;root.classList.toggle('is-expanded',expanded);$map('#starMapExpand').setAttribute('aria-expanded',String(expanded));$map('#starMapExpand').textContent=expanded?'⤡':'⤢';$map('#starMapExpand').title=expanded?'收起星图（Esc）':'展开星图';if(expanded){previousOverflow=document.body.style.overflow;returnFocus=document.activeElement;root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');document.body.style.overflow='hidden';keyboardFocus=false;viewport.focus({preventScroll:true});}else{root.removeAttribute('role');root.removeAttribute('aria-modal');document.body.style.overflow=previousOverflow;returnFocus?.focus({preventScroll:true});}resize();synchronizeAnimation();}
  window.WordOrbitConstellation={render,select:selectTopic,clear:clearSelection,snapshot:()=>({selected,view,expanded,zoom,elapsed,paused:!canAnimate(),mounted,scheduled:frame!==null,camera:{...cam,target:cam.target.slice()},nodes:model.map(row=>({chapter:row.chapter,id:row.id,count:row.count,done:row.done,size:row.size,star:row.star,ring:row.ring,src:row.src,personal:!!row.personal,ready:row.ready,behavior:row.behavior,hostId:row.hostId,hostRadius:row.hostRadius,...(()=>{const p=lastPoints.find(p=>p.row.id===row.id);return p?{xyz:p.position.slice(),heading:p.heading.slice(),screen:p.screen,activity:p.activity}:{};})()}))})};
  document.addEventListener('DOMContentLoaded',render);
})();
