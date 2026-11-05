/* Persistence contracts for public sense practice. No DOM, storage or private databases. */
(function(scope){
  'use strict';
  const key=w=>String(w||'').trim().toLowerCase(),clone=v=>JSON.parse(JSON.stringify(v));
  function hideEnglishHints(text){return String(text||'').replace(/[A-Za-z][A-Za-z0-9'’/-]*(?:\s+[A-Za-z][A-Za-z0-9'’/-]*)*/g,'…');}
  function eligible(words,catalog,index){
    const used=new Set();return words.filter(w=>{const name=key(w.word),e=catalog[name];if(index.entries[name]?.id!==w.id||used.has(name)||!e?.complete||!e.reviewed||e.unresolvedReferences?.length)return false;used.add(name);return true;});
  }
  function history(attempts){const out={};for(const a of attempts||[])if(a.mode?.startsWith('sense-'))for(const s of a.senseResults||[]){const k=a.id+':'+s.id,r=out[k]||{seen:0,correct:0,wrong:0};r.seen++;r[s.correct?'correct':'wrong']++;out[k]=r;}return out;}
  function validRound(round,words,catalog,core){
    try{
      if(!round||round.type!=='senses'||round.schema!=='wordorbit-sense-batch'||round.version!==1||!/^\d{4}-\d{2}-\d{2}$/.test(round.date))return false;
      const byId=new Map(words.map(w=>[w.id,w]));
      if(!Array.isArray(round.targetIds)||!round.targetIds.length||round.targetIds.length>50||new Set(round.targetIds).size!==round.targetIds.length)return false;
      if(round.targetIds.some(id=>!byId.has(id)||!core.validateEntry(catalog[key(byId.get(id).word)])))return false;
      if(!Array.isArray(round.queue)||round.queue.length>5000||!Number.isInteger(round.baseLength)||round.baseLength<1||round.baseLength>round.queue.length||!Number.isInteger(round.index)||round.index<0||round.index>=round.queue.length)return false;
      const goalKeys=round.targetIds.flatMap(id=>catalog[key(byId.get(id).word)].senses.map(s=>id+':'+s.id));
      if(!Array.isArray(round.goals)||round.goals.length!==goalKeys.length||new Set(round.goals.map(g=>g.wordId+':'+g.senseId)).size!==goalKeys.length||round.goals.some(g=>!goalKeys.includes(g.wordId+':'+g.senseId)))return false;
      const ids=new Set(),baseRoots=new Set(round.queue.slice(0,round.baseLength).map(q=>q.id));
      for(const [i,q]of round.queue.entries()){
        if(!q||typeof q.id!=='string'||ids.has(q.id)||!round.targetIds.includes(q.wordId)||key(q.word)!==key(byId.get(q.wordId).word)||!baseRoots.has(q.root)||i<round.baseLength&&q.root!==q.id)return false;ids.add(q.id);
        if(!Array.isArray(q.senseIds)||!q.senseIds.length||new Set(q.senseIds).size!==q.senseIds.length||q.senseIds.some(id=>!catalog[key(q.word)].senses.some(s=>s.id===id)))return false;
        if(!['context','single','multi','reverse','recall'].includes(q.kind)||!['context','single','multi','reverse'].includes(q.originalKind)||![0,1,2].includes(q.stage)||typeof q.checked!=='boolean'||!['pending','correct','wrong'].includes(q.status))return false;
        if(q.checked===(q.status==='pending'))return false;
        if(!Array.isArray(q.options)||q.options.length>6||new Set(q.options.map(o=>o.id)).size!==q.options.length||q.options.some(o=>typeof o.id!=='string'||typeof o.text!=='string'||o.text.length>1200||typeof o.correct!=='boolean'))return false;
        if(!Array.isArray(q.expected)||JSON.stringify([...q.expected].sort())!==JSON.stringify(q.options.filter(o=>o.correct).map(o=>o.id).sort()))return false;
        if(q.kind==='recall'&&q.options.length||q.kind!=='recall'&&!q.expected.length)return false;
        if(!Array.isArray(q.selected)||q.selected.some(id=>!q.options.some(o=>o.id===id)))return false;
      }
      if(!round.roots||Object.keys(round.roots).length!==baseRoots.size||Object.entries(round.roots).some(([id,done])=>!baseRoots.has(id)||typeof done!=='boolean'||done!==round.queue.some(q=>q.root===id&&q.checked&&q.status==='correct')))return false;
      if(round.answers!==round.queue.filter(q=>q.checked).length||round.correct!==round.queue.filter(q=>q.status==='correct').length)return false;
      return true;
    }catch{return false;}
  }
  function cleanProgress(value,words){
    const known=new Set(words.map(w=>w.id)),out={version:1,cycle:1,completed:{}};
    if(!value)return out;
    if(value.version!==1||!Number.isInteger(value.cycle)||value.cycle<1||!value.completed||typeof value.completed!=='object'||Array.isArray(value.completed))throw Error('义项进度格式无效');
    out.cycle=value.cycle;
    for(const[id,p]of Object.entries(value.completed)){
      if(!known.has(id))continue;
      if(!p||typeof p.sessionId!=='string'||p.sessionId.length>160||!/^\d{4}-\d{2}-\d{2}$/.test(p.date))throw Error('义项完成记录无效');
      out.completed[id]={sessionId:p.sessionId,date:p.date};
    }return out;
  }
  function clearProgress(value,removedSessionIds,all=false){const out=clone(value||{version:1,cycle:1,completed:{}});if(all)return {version:1,cycle:1,completed:{}};for(const[id,p]of Object.entries(out.completed||{}))if(removedSessionIds.includes(p.sessionId))delete out.completed[id];return out;}
  const api={eligible,history,validRound,cleanProgress,clearProgress,hideEnglishHints};if(typeof module==='object'&&module.exports)module.exports=api;else scope.WordOrbitSenseState=api;
})(typeof window==='object'?window:globalThis);
