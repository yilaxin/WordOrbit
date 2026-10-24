/* Tiny real 3D polygon models for vessels, satellites and stations. No external engine. */
(()=>{
  const G=OrbitSpace;
  function draw(canvas,item,camera,t,diameter){
    const dpr=Math.min(devicePixelRatio||1,1.5),pixels=Math.ceil(diameter*dpr);if(canvas.width!==pixels){canvas.width=canvas.height=pixels;}const ctx=canvas.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,diameter,diameter);
    const {right,up,forward}=G.basis(camera),direction=item.heading,side=G.normal(G.cross(direction,[0,1,0])),vertical=G.normal(G.cross(side,direction)),faces=[];
    const world=p=>G.add(G.add(G.mul(direction,p[0]),G.mul(vertical,p[1])),G.mul(side,p[2]));
    const project=p=>{const v=world(p),z=G.dot(v,forward);return [diameter/2+G.dot(v,right)*diameter*.33,diameter/2-G.dot(v,up)*diameter*.33,z];};
    function polygon(points,color){faces.push({points:points.map(project),color,z:points.reduce((sum,p)=>sum+project(p)[2],0)/points.length});}
    function box(x,y,z,dx,dy,dz,color){const p=[[x-dx,y-dy,z-dz],[x+dx,y-dy,z-dz],[x+dx,y+dy,z-dz],[x-dx,y+dy,z-dz],[x-dx,y-dy,z+dz],[x+dx,y-dy,z+dz],[x+dx,y+dy,z+dz],[x-dx,y+dy,z+dz]];for(const [ids,c] of [[[0,1,2,3],color],[[4,7,6,5],color],[[0,4,5,1],'#536a85'],[[3,2,6,7],'#c4d6e6'],[[1,5,6,2],'#8ba9c0'],[[0,3,7,4],'#354960']])polygon(ids.map(i=>p[i]),c);}
    const behavior=item.row.behavior;
    if(behavior==='satellite'){
      box(0,0,0,.27,.22,.21,'#c1cbd4');for(const sign of [-1,1]){box(0,0,sign*.68,.37,.025,.32,'#274c88');for(let j=0;j<3;j++)box(-.25+j*.25,.03,sign*.68,.009,.006,.32,'#7aaade');}
      const center=[.52,0,0],rim=Array.from({length:12},(_,i)=>[.33,.38*Math.cos(i*Math.PI/6),.38*Math.sin(i*Math.PI/6)]);for(let i=0;i<12;i++)polygon([center,rim[i],rim[(i+1)%12]],i%2?'#cad6e0':'#93a8c4');box(.64,0,0,.13,.025,.025,'#f6df9d');
    }else if(behavior==='station'){
      const angle=t*.025;for(let i=0;i<16;i++){const a=i*Math.PI/8+angle,b=(i+1)*Math.PI/8+angle;polygon([[.12,.78*Math.cos(a),.78*Math.sin(a)],[.12,.78*Math.cos(b),.78*Math.sin(b)],[-.12,.78*Math.cos(b),.78*Math.sin(b)],[-.12,.78*Math.cos(a),.78*Math.sin(a)]],i%3?'#8aa3be':item.row.color);}
      box(0,0,0,.38,.23,.23,'#a7c7d5');box(0,0,0,.08,.08,.81,'#ddc99c');box(0,0,0,.08,.81,.08,'#718da8');
    }else{
      const patrol=behavior==='patrol',transport=behavior==='transport';
      box(-.15,0,0,transport?.65:.52,patrol?.17:.11,patrol?.23:.14,patrol?'#8393a8':'#a9c8d9');
      polygon([[.85,0,0],[.30,.17,.22],[.30,-.14,.22]],'#c9e9f2');polygon([[.85,0,0],[.30,.17,-.22],[.30,.17,.22]],'#daedf4');polygon([[.85,0,0],[.30,-.14,-.22],[.30,.17,-.22]],'#68869b');
      for(const sign of [-1,1]){polygon([[.35,0,sign*.10],[-.5,0,sign*(patrol?.72:.57)],[-.66,-.07,sign*.15]],patrol?'#6a7c96':item.row.color);box(-.55,0,sign*(patrol?.35:.27),.23,.09,.09,'#6d8f9e');}
      box(.16,.13,0,.20,.06,.12,'#68c5e9');if(patrol){box(-.18,.24,0,.23,.09,.17,'#b0bdcb');box(-.02,.29,0,.35,.025,.025,'#6e849d');}if(transport)for(const sign of [-1,1])box(-.18,.09,sign*.28,.34,.17,.14,'#bfad8c');
      const p=project([-.88,0,0]),r=diameter*(.055+.025*item.thrust),glow=ctx.createRadialGradient(p[0],p[1],0,p[0],p[1],r*3);glow.addColorStop(0,'#c5f5ff');glow.addColorStop(.3,'#73d5ff88');glow.addColorStop(1,'#70baff00');ctx.fillStyle=glow;ctx.beginPath();ctx.ellipse(p[0],p[1],r*3,r*1.4,0,0,Math.PI*2);ctx.fill();
    }
    faces.sort((a,b)=>b.z-a.z);for(const face of faces){ctx.beginPath();face.points.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();ctx.fillStyle=face.color;ctx.fill();ctx.strokeStyle='#d5eaff40';ctx.lineWidth=.6;ctx.stroke();}
  }
  window.OrbitFleet={draw};
})();
