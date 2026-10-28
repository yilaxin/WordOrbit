/* Six bounded, code-native comet looks shared by WebGL, Canvas and the editor. */
(function(scope){
  'use strict';
  const catalog=[
    {id:'frost',name:'霜蓝彗星',description:'冰青细长尾 · 清透冷冽',near:[.43,.85,1],far:[.18,.44,1],core:[1,.99,.96],width:.42,span:1.18,curve:.04,fork:0,halo:.80,dust:3},
    {id:'amethyst',name:'紫晶彗星',description:'紫晶雾状尾 · 柔和梦幻',near:[.83,.66,1],far:[.68,.22,.94],core:[1,.97,1],width:1.15,span:.90,curve:.22,fork:.05,halo:1.20,dust:5},
    {id:'aurora',name:'极光彗星',description:'青绿丝带尾 · 轻盈流动',near:[.38,1,.80],far:[.16,.69,.98],core:[.96,1,.98],width:.72,span:1.07,curve:.32,fork:.22,halo:.90,dust:4},
    {id:'amber',name:'琥珀彗星',description:'橙金扇形尾 · 温暖微尘',near:[1,.78,.34],far:[1,.36,.10],core:[1,.97,.86],width:1.08,span:.83,curve:.12,fork:.06,halo:1.05,dust:9},
    {id:'rose',name:'玫瑰彗星',description:'粉紫双束尾 · 柔光分岔',near:[1,.67,.82],far:[.78,.33,1],core:[1,.97,.99],width:.70,span:1.05,curve:.19,fork:.75,halo:1,dust:5},
    {id:'silver',name:'银辉彗星',description:'银白纤细尾 · 安静通透',near:[.87,.95,1],far:[.55,.66,.85],core:[1,1,1],width:.27,span:1.34,curve:.02,fork:0,halo:.62,dust:2}
  ];
  catalog.forEach(look=>{['near','far','core'].forEach(k=>Object.freeze(look[k]));Object.freeze(look);});Object.freeze(catalog);
  const byId=new Map(catalog.map(look=>[look.id,look]));
  const hash=id=>Array.from(String(id||'')).reduce((h,c)=>(Math.imul(h,31)+c.codePointAt(0))>>>0,7);
  function resolve(entry){return byId.has(entry?.appearance)?entry.appearance:catalog[hash(entry?.id)%catalog.length].id;}
  function get(id){return byId.get(id)||catalog[0];}
  function choose(entries,seed=Math.random(),avoid=''){
    const counts=new Map(catalog.map(look=>[look.id,0]));for(const entry of entries)counts.set(resolve(entry),counts.get(resolve(entry))+1);
    let candidates=catalog.filter(look=>look.id!==avoid),least=Math.min(...candidates.map(look=>counts.get(look.id)));candidates=candidates.filter(look=>counts.get(look.id)===least);
    return candidates[Math.min(candidates.length-1,Math.max(0,Math.floor((Number.isFinite(seed)?seed:0)*candidates.length)))].id;
  }
  const mix=(a,b,t)=>a.map((v,i)=>v+(b[i]-v)*t);
  const css=(color,alpha=1)=>'rgba('+color.map(v=>Math.round(v*255)).join(',')+','+alpha+')';
  function color(look,layer,u){return mix(layer===0?look.near:mix(look.near,look.core,layer===1?.28:.55),look.far,Math.pow(u,.78));}
  function width(look,layer,u){return (layer===0?.035+.52*Math.pow(u,.72):layer===1?.02+.20*Math.pow(u,.76):look.fork>.35?.012+.095*Math.pow(u,.76):.009+.014*u)*look.width;}
  function offset(look,layer,u){return (layer===2?1:layer===1?-.28:0)*look.fork*Math.pow(u,1.35);}
  // Static SVG thumbnails: no images, separate renderers or animation loops per choice.
  function icon(id,prefix){const look=get(id),gradient=prefix+'-'+look.id,w=5+look.width*13,bend=look.curve*25;
    return `<svg viewBox="0 0 160 62" aria-hidden="true" focusable="false"><defs><linearGradient id="${gradient}"><stop stop-color="${css(look.near)}"/><stop offset="1" stop-color="${css(look.far,0)}"/></linearGradient></defs><path d="M25 37 Q80 ${31-bend} 148 ${31-w-bend} Q100 45 25 37Z" fill="url(#${gradient})"/><path d="M25 37 Q85 ${36-bend} 148 ${42-bend}" stroke="url(#${gradient})" stroke-width="3" fill="none"/>${look.fork>.1?`<path d="M25 37 Q82 42 148 ${42+look.fork*18}" stroke="url(#${gradient})" stroke-width="3" fill="none"/>`:''}<circle cx="25" cy="37" r="${7*look.halo}" fill="${css(look.near,.16)}"/><circle cx="25" cy="37" r="3" fill="${css(look.core)}"/>${id==='amber'?'<g fill="#f6c578" opacity=".65"><circle cx="67" cy="44" r="1"/><circle cx="94" cy="42" r="1"/><circle cx="116" cy="48" r=".8"/></g>':''}</svg>`;
  }
  function preview(ctx,id,w,h,time=0){const look=get(id),head={x:w*.22+Math.sin(time*.8)*5,y:h*.53+Math.sin(time*.6)*5},length=Math.min(w*.65*look.span,w*.74),scale=h*.17;
    ctx.clearRect(0,0,w,h);for(let i=0;i<25;i++){ctx.fillStyle=i%4?'#c4d8ff55':'#edf5ffa0';ctx.fillRect((i*73+19)%w,(i*47+13)%h,i%4?1:1.6,1);}
    ctx.globalCompositeOperation='lighter';
    for(let layer=0;layer<3;layer++){const gradient=ctx.createLinearGradient(head.x,head.y,head.x+length,head.y);for(const u of [0,.3,.7,1])gradient.addColorStop(u,css(color(look,layer,u),(layer===0?.30:.70)*Math.pow(1-u,1.1)));ctx.fillStyle=gradient;ctx.beginPath();
      for(const sign of [1,-1])for(let j=0;j<=36;j++){const u=(sign===1?j:36-j)/36,x=head.x+length*u,y=head.y-Math.sin(u*Math.PI)*look.curve*scale*2+offset(look,layer,u)*scale+sign*width(look,layer,u)*scale*1.9;if(sign===1&&j===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.closePath();ctx.fill();
    }
    for(let j=0;j<look.dust;j++){const u=(j+1)/(look.dust+1);ctx.fillStyle=css(color(look,1,u),.55*(1-u));ctx.beginPath();ctx.arc(head.x+length*u,head.y-Math.sin(u*Math.PI)*look.curve*scale*2+Math.sin(j*5.3)*scale*.2,(id==='amber'?1.2:.7),0,Math.PI*2);ctx.fill();}
    const radius=scale*1.45*look.halo,g=ctx.createRadialGradient(head.x,head.y,0,head.x,head.y,radius);g.addColorStop(0,css(look.core));g.addColorStop(.07,css(look.core,.95));g.addColorStop(.22,css(look.near,.55));g.addColorStop(.6,css(look.far,.12));g.addColorStop(1,css(look.far,0));ctx.fillStyle=g;ctx.beginPath();ctx.arc(head.x,head.y,radius,0,Math.PI*2);ctx.fill();ctx.globalCompositeOperation='source-over';
  }
  const api={catalog,resolve,get,choose,color,width,offset,css,icon,preview};
  if(typeof module==='object'&&module.exports)module.exports=api;else scope.CometLooks=api;
})(typeof window==='object'?window:globalThis);
