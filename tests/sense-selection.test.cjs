const test=require('node:test'),assert=require('node:assert/strict'),{auditSelection}=require('../scripts/Audit-SenseBatchSelection.cjs');
function fixture(){const words=Array.from({length:100},(_,i)=>({id:'synthetic-'+i,word:'syntheticword'+i,formal:true}));return {words,entries:Object.fromEntries(words.map(w=>[w.word,{batch:'03'}])),progress:{exportedAt:'2026-11-04T10:00:00Z',words,records:{},attempts:[]}};}
test('unseen selection requires a complete dated export and excludes all signs of prior study',()=>{
  const {words,entries,progress}=fixture(),before=JSON.stringify(progress);
  assert.equal(auditSelection(progress,words,entries).passed,true);assert.equal(JSON.stringify(progress),before);
  assert.throws(()=>auditSelection({...progress,records:undefined},words,entries));
  for(const record of [{seen:1},{correct:1},{wrong:1},{lastSeen:'2026-11-03'}]){
    const r=auditSelection({...progress,records:{'synthetic-3':record}},words,entries);assert.equal(r.passed,false);assert.deepEqual(r.alreadySeen,['syntheticword3']);
  }
  assert.equal(auditSelection({...progress,attempts:[{wordId:'synthetic-5'}]},words,entries).passed,false);
});
test('word aliases cannot bypass seen checks and missing/nonformal catalog rows cannot count',()=>{
  const {words,entries,progress}=fixture();
  const alias={id:'old-alias',word:'SYNTHETICWORD7'};
  const r=auditSelection({...progress,words:[...words,alias],records:{'old-alias':{seen:1}}},words,entries);
  assert.equal(r.passed,false);assert.deepEqual(r.alreadySeen,['syntheticword7']);
  assert.equal(auditSelection(progress,words.slice(1),entries).passed,false);
  assert.equal(auditSelection({...progress,words:words.slice(1)},words,entries).passed,false);
});
