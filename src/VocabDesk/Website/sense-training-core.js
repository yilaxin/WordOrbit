/* Offline sense-training foundation, used by the reviewed-subset practice adapter.
 * Input words must be the formal public catalog. No storage, DOM, network or old records.
 */
(function(scope){
  'use strict';
  const key=s=>String(s||'').trim().toLowerCase(),clone=o=>JSON.parse(JSON.stringify(o));
  const unique=a=>[...new Set(a)],norm=s=>String(s).replace(/[\s；;，,。()（）]/g,'');
  function shuffle(values,random=Math.random){const a=values.slice();for(let i=a.length-1;i>0;i--){const n=random();if(!Number.isFinite(n)||n<0||n>=1)throw Error('Invalid random source');const j=Math.floor(n*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  function spaced(values,random=Math.random,previous=null){const pending=shuffle(values,random),out=[];while(pending.length){let i=pending.findIndex(q=>q.wordId!==previous);if(i<0)i=0;const q=pending.splice(i,1)[0];out.push(q);previous=q.wordId;}return out;}
  function validateEntry(entry){
    if(!entry||entry.complete!==true||entry.reviewed!==true||!Array.isArray(entry.senses)||!entry.senses.length)return false;
    const ids=new Set(),labels=new Set();for(const s of entry.senses){
      if(!/^[a-z0-9-]+$/.test(s.id||'')||ids.has(s.id)||!s.label||!s.pos||!Array.isArray(s.concepts)||!s.concepts.length||!Array.isArray(s.aliases)||!s.aliases.length)return false;
      if(!s.source||!/^https:\/\//.test(s.source))return false;
      if(s.example&&(!s.example.en||!s.example.zh||s.example.reviewed!==true))return false;
      if(labels.has(norm(s.label)))return false;
      ids.add(s.id);labels.add(norm(s.label));
    }return true;
  }
  function audit(words,catalog){const missing=[],ready=[];for(const w of words)(validateEntry(catalog[key(w.word)])?ready:missing).push({id:w.id,word:w.word});return {total:words.length,ready:ready.length,missing:missing.length,readyWords:ready,missingWords:missing};}
  function overlaps(a,b){
    if(a.concepts.some(c=>b.concepts.includes(c)))return true;
    return [a.label,...a.aliases].some(x=>[b.label,...b.aliases].some(y=>{x=norm(x);y=norm(y);return x===y||Math.min(x.length,y.length)>=2&&(x.includes(y)||y.includes(x));}));
  }
  function build(words,catalog,{completedIds=[],limit=50,date,random=Math.random,senseHistory={}}={}){
    if(!/^\d{4}-\d{2}-\d{2}$/.test(date||''))throw Error('Explicit local batch date required');
    const byId=new Set(),byWord=new Set();words=words.filter(w=>{if(!w.id||!w.word||byId.has(w.id)||byWord.has(key(w.word)))return false;byId.add(w.id);byWord.add(key(w.word));return true;});
    const selected=shuffle(words.filter(w=>!completedIds.includes(w.id)),random).slice(0,Math.min(50,Math.max(1,limit)));
    if(!selected.length)return null;
    const coverage=audit(selected,catalog);if(coverage.missing){const e=Error('义项未整理完整，不能生成声称全覆盖的训练');e.code='SENSE_COVERAGE_REQUIRED';e.missing=coverage.missingWords;throw e;}
    const all=words.filter(w=>validateEntry(catalog[key(w.word)])).flatMap(w=>catalog[key(w.word)].senses.map(s=>({...clone(s),wordId:w.id,word:w.word})));
    // Reverse choices check every meaning of one candidate word, without rescanning the entire pool.
    const sensesByWord=new Map();for(const s of all){if(!sensesByWord.has(s.wordId))sensesByWord.set(s.wordId,[]);sensesByWord.get(s.wordId).push(s);}
    const goals=selected.flatMap(w=>catalog[key(w.word)].senses.map(s=>({...clone(s),wordId:w.id,word:w.word}))),stages=[[],[],[]];let sequence=0;
    function question(w,senses,kind,stage){
      const targets=senses.map(s=>({...s,wordId:w.id,word:w.word}));
      const validMeanings=kind==='reverse'?targets:catalog[key(w.word)].senses;
      const distractors=shuffle(all.filter(s=>s.wordId!==w.id&&!validMeanings.some(t=>overlaps(t,s))&&(kind!=='reverse'||!sensesByWord.get(s.wordId).some(other=>targets.some(t=>overlaps(t,other))))),random);
      const options=[],labels=new Set(),usedWords=new Set([w.id]);
      const add=(id,text,correct)=>{if(labels.has(text))return;labels.add(text);options.push({id,text,correct});};
      targets.forEach(s=>add(w.id+':'+s.id,kind==='reverse'?w.word:s.label,true));
      for(const s of distractors){const text=kind==='reverse'?s.word:s.label;if(usedWords.has(s.wordId)||labels.has(text))continue;add(s.wordId+':'+s.id,text,false);usedWords.add(s.wordId);if(options.length>=targets.length+3)break;}
      // No fabricated fillers or ambiguous same-word meanings in a reverse question.
      const fallback=options.length<targets.length+3;
      const id='base-'+(++sequence);return {id,root:id,wordId:w.id,word:w.word,stage,kind:fallback?'recall':kind,originalKind:kind,senseIds:senses.map(s=>s.id),prompt:kind==='reverse'?senses[0].label:w.word,context:kind==='context'?senses[0].example.en:null,contextZh:kind==='context'?senses[0].example.zh:null,options:fallback?[]:shuffle(options,random),expected:fallback?[]:options.filter(o=>o.correct).map(o=>o.id),checked:false,status:'pending',selected:[],redo:false,attempts:0};
    }
    for(const w of selected){const senses=catalog[key(w.word)].senses;
      for(const s of senses)stages[0].push(question(w,[s],s.example?'context':'single',0));
      const score=s=>{const h=senseHistory[w.id+':'+s.id]||{};return (h.wrong||0)*2-(h.correct||0);};
      const reverseSense=shuffle(senses,random).sort((a,b)=>score(b)-score(a))[0];
      stages[1].push(question(w,[reverseSense],'reverse',1));
      if(senses.length>1)for(let i=0;i<senses.length;i+=3)stages[2].push(question(w,senses.slice(i,i+3),'multi',2));
    }
    const queue=[];stages.forEach(stage=>queue.push(...spaced(stage,random,queue.at(-1)?.wordId)));
    return {schema:'wordorbit-sense-batch',version:1,date,targetIds:selected.map(w=>w.id),goals:goals.map(s=>({wordId:s.wordId,senseId:s.id,label:s.label,pos:s.pos})),queue,baseLength:queue.length,index:0,roots:Object.fromEntries(queue.map(q=>[q.id,false])),senseRecords:{},answers:0,correct:0};
  }
  function grade(batch,index,selected,{selfRecall}={}){
    const q=batch.queue[index];if(!q)throw Error('Question not found');if(q.checked)return {alreadyChecked:true,correct:q.status==='correct'};
    const values=q.kind==='recall'?[]:unique(Array.isArray(selected)?selected:[selected]);
    if(q.kind==='recall'){if(typeof selfRecall!=='boolean')throw Error('Explicit self evaluation required');}
    else if(values.some(id=>!q.options.some(o=>o.id===id)))throw Error('Unknown option');
    const expected=q.expected,missed=expected.filter(id=>!values.includes(id)),wrong=values.filter(id=>!expected.includes(id));
    const correct=q.kind==='recall'?selfRecall:!missed.length&&!wrong.length;
    q.selected=q.kind==='recall'?[]:values;q.checked=true;q.status=correct?'correct':'wrong';q.attempts++;q.selfAssessed=q.kind==='recall';batch.answers++;if(correct)batch.correct++;
    if(correct)batch.roots[q.root]=true;
    for(const senseId of q.senseIds){const k=q.wordId+':'+senseId,r=batch.senseRecords[k]||{seen:0,correct:0,wrong:0};r.seen++;const senseOK=q.kind!=='recall'&&q.originalKind==='multi'?values.includes(k):correct;if(senseOK)r.correct++;else r.wrong++;batch.senseRecords[k]=r;}
    if(!correct){const retry=clone(q);retry.id='retry-'+batch.queue.length;retry.checked=false;retry.status='pending';retry.selected=[];retry.attempts=0;retry.redo=true;delete retry.selfAssessed;batch.queue.push(retry);}
    return {correct,missed,wrong,expected:expected.slice(),selfAssessed:q.selfAssessed};
  }
  function progress(batch){const roots=batch.queue.slice(0,batch.baseLength),doneWords=batch.targetIds.filter(id=>roots.filter(q=>q.wordId===id).every(q=>batch.roots[q.root]));const senseDone=batch.goals.filter(s=>(batch.senseRecords[s.wordId+':'+s.senseId]?.correct||0)>0).length;return {words:batch.targetIds.length,wordsDone:doneWords.length,senses:batch.goals.length,sensesDone:senseDone,baseQuestions:batch.baseLength,totalQuestions:batch.queue.length,answers:batch.answers,pendingRedo:batch.queue.slice(batch.baseLength).filter(q=>!q.checked).length,completed:doneWords.length===batch.targetIds.length&&batch.queue.every(q=>q.checked)};}
  function next(batch){const first=batch.queue.slice(0,batch.baseLength).findIndex(q=>!q.checked);return first>=0?first:batch.queue.findIndex(q=>!q.checked);}
  const api={shuffle,spaced,validateEntry,audit,overlaps,build,grade,progress,next};if(typeof module==='object'&&module.exports)module.exports=api;else scope.WordOrbitSenseCore=api;
})(typeof window==='object'?window:globalThis);
