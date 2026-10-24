/* Small deterministic 3D world. Placement relationships never change vocabulary ownership. */
(function(scope){
  'use strict';
  const TAU=Math.PI*2,clamp=(n,a,b)=>Math.max(a,Math.min(b,n)),add=(a,b)=>a.map((n,i)=>n+b[i]),sub=(a,b)=>a.map((n,i)=>n-b[i]),mul=(a,n)=>a.map(v=>v*n),length=a=>Math.hypot(...a),normal=a=>mul(a,1/(length(a)||1)),dot=(a,b)=>a.reduce((s,n,i)=>s+n*b[i],0),cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  const BINDINGS={ 'language-evolution':['natural-geography',126,.7], 'laws-regulations':['countries-government',122,3.1], 'entertainment-sport':['fashion-trends',143,2.1], 'diet-health':['plant-research',146,4.2], 'society-economy':['countries-government',160,.1], 'social-roles':['animal-protection',143,5.1] };
  const NAMES={star:'中央恒星',planet:'行星公转',asteroid:'小行星漫游',comet:'长椭圆航迹',satellite:'卫星公转',station:'轨道驻留',explorer:'目的地探索',transport:'补给航线',patrol:'外围巡航',companion:'伴星公转',personal:'私人星球'};
  function prepare(rows){
    const planets=rows.filter(r=>!r.star&&['planet','personal'].includes(r.kind)),fallback=planets[0];
    return rows.map(row=>{
      const behavior=row.star?'star':row.personal?'personal':row.kind==='ship'?(row.id==='battle-conflict'?'patrol':row.id==='transport-travel'?'transport':'explorer'):row.kind==='star'?'companion':row.kind;
      const binding=BINDINGS[row.id],host=binding&&(planets.find(r=>r.id===binding[0])||fallback);
      const ring=Math.max(0,row.ring),radii=[180,285,410,555];
      return {...row,behavior,behaviorLabel:NAMES[behavior],hostId:host?.id||null,hostRadius:binding?.[1]||0,hostPhase:binding?.[2]||0,orbit:{rx:radii[ring],rz:radii[ring]*.73,tilt:(row.index%5-2)*.075,phase:row.angle||row.index*.71,period:[190,250,330,430][ring]}};
    });
  }
  function orbit(row,t,phase){const o=row.orbit,a=phase??o.phase+t*TAU/o.period,z=o.rz*Math.sin(a);return [o.rx*Math.cos(a),z*Math.sin(o.tilt)+24*Math.sin(a*.7+row.index),z*Math.cos(o.tilt)];}
  const ROUTES=[[-620,125,-220],[-340,180,255],[220,115,365],[620,85,60],[330,170,-310],[-150,100,-350]];
  function route(row,t){
    const shifted=t+(row.index*13.7),legSeconds=row.behavior==='transport'?24:29,leg=Math.floor(shifted/legSeconds),fraction=((shifted/legSeconds)%1+1)%1;
    const i=((leg%ROUTES.length)+ROUTES.length)%ROUTES.length,offset=row.id==='technology-invention'?2:row.behavior==='transport'?4:0;
    const a=ROUTES[(i+offset)%6],b=ROUTES[(i+1+offset)%6],u=clamp((fraction-.12)/.80,0,1),s=u*u*(3-2*u),p=add(mul(a,1-s),mul(b,s));
    p[1]+=(row.index%3-1)*85;const radius=Math.hypot(p[0],p[2]);if(radius<220){const ratio=220/Math.max(radius,1);p[0]*=ratio;p[2]*=ratio;}
    return {position:p,activity:u<=0?'观察停驻':u>=1?'进港停泊':u<.25?'离港加速':u>.78?'接近减速':'深空巡航',thrust:u>0&&u<1?.28+.72*Math.sin(u*Math.PI):.10};
  }
  function raw(rows,t){const result=new Map();
    for(const row of rows){if(row.hostId)continue;let position,activity=row.behaviorLabel,thrust=0;
      if(row.star)position=[0,0,0];
      else if(['explorer','transport'].includes(row.behavior)){const r=route(row,t);position=r.position;activity=r.activity;thrust=r.thrust;}
      else if(row.behavior==='patrol'){const a=t*TAU/260+.45;position=[690*Math.cos(a),-115+35*Math.sin(a*2),440*Math.sin(a)];activity='外缘防御巡航';thrust=.34;}
      else if(row.behavior==='comet'){const a=t*TAU/(row.index===19?220:310)+row.index*1.31;position=[650*Math.cos(a)+80,80*Math.sin(a+.8),290*Math.sin(a)];}
      else position=orbit(row,t);
      result.set(row.id,{row,position,activity,thrust});
    }
    for(const row of rows.filter(r=>r.hostId)){const host=result.get(row.hostId);if(!host)continue;const a=row.hostPhase+(row.behavior==='satellite'?t*TAU/(row.index===7?58:74):0),r=row.hostRadius;
      const offset=[r*Math.cos(a),r*.36*Math.sin(a+.6),r*.73*Math.sin(a)];result.set(row.id,{row,position:add(host.position,offset),activity:row.behavior==='satellite'?'环绕宿主 · 天线指向':'稳定驻留 · 环体工作',thrust:0,host:host.position,heading:normal(mul(offset,-1))});
    }
    // Smooth avoidance only adjusts independent vessels, never a satellite's host relationship.
    for(const item of result.values())if(['explorer','transport','patrol'].includes(item.row.behavior))for(const other of result.values()){
      if(item===other||['explorer','transport','patrol'].includes(other.row.behavior))continue;
      const delta=sub(item.position,other.position),distance=length(delta),safe=other.row.star?225:115;
      if(distance<safe)item.position=add(item.position,mul(normal(distance>.01?delta:[1,.5,0]),(safe-distance)*.85));
    }
    return result;
  }
  function frame(rows,t){const current=raw(rows,t),next=raw(rows,t+.12);return rows.map(row=>{const item=current.get(row.id);if(!item)return {row,position:[0,0,0],heading:[1,0,0],activity:'驻留',thrust:0};let delta=sub(next.get(row.id).position,item.position);if(length(delta)<.01&&['explorer','transport'].includes(row.behavior))delta=sub(raw(rows,t+4).get(row.id).position,item.position);return {...item,heading:item.heading||normal(length(delta)>.001?delta:[1,0,0])};});}
  function basis(camera){const pitch=camera.pitch,yaw=camera.yaw,forward=normal([-Math.sin(yaw)*Math.cos(pitch),-Math.sin(pitch),-Math.cos(yaw)*Math.cos(pitch)]),right=normal(cross(forward,[0,1,0])),up=normal(cross(right,forward));return {forward,right,up,eye:sub(camera.target,mul(forward,1800/camera.zoom))};}
  function project(position,camera,fit,width,height,prepared){const b=prepared||basis(camera),x=position[0]-b.eye[0],y=position[1]-b.eye[1],z=position[2]-b.eye[2],depth=x*b.forward[0]+y*b.forward[1]+z*b.forward[2];if(depth<90)return null;const scale=1800*fit/depth;return {x:width/2+(x*b.right[0]+y*b.right[1]+z*b.right[2])*scale,y:height/2-(x*b.up[0]+y*b.up[1]+z*b.up[2])*scale,depth,scale};}
  function turn(from,to,maxAngle){const a=normal(from),b=normal(to),angle=Math.acos(clamp(dot(a,b),-1,1));if(angle<maxAngle)return b;let axis=cross(a,b);if(length(axis)<.001)axis=cross(a,Math.abs(a[1])<.9?[0,1,0]:[1,0,0]);axis=normal(axis);const c=Math.cos(maxAngle),s=Math.sin(maxAngle);return normal(add(add(mul(a,c),mul(cross(axis,a),s)),mul(axis,dot(axis,a)*(1-c))));}
  const api={prepare,frame,orbit,basis,project,turn,add,sub,mul,dot,cross,normal,clamp,NAMES};if(typeof module==='object'&&module.exports)module.exports=api;else scope.OrbitSpace=api;
})(typeof window==='object'?window:globalThis);
