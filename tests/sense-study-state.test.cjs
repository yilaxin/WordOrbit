const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const S=require('../src/VocabDesk/Website/sense-study-state.js'),core=require('../src/VocabDesk/Website/sense-training-core.js'),pack=require('../src/VocabDesk/Website/sense-catalog.js');
const ctx={window:{}};vm.runInNewContext(fs.readFileSync(require('node:path').join(__dirname,'../src/VocabDesk/Website/sense-ready-index.js'),'utf8'),ctx);const index=ctx.window.WordOrbitSenseIndex;
const words=Object.entries(index.entries).map(([word,e])=>({word,id:e.id})),clone=v=>JSON.parse(JSON.stringify(v));
function round(){const r=core.build(words.slice(0,12),pack.entries,{limit:3,date:'2026-11-05',random:()=>0.25});Object.assign(r,{type:'senses',id:'synthetic-round',started:1,answered:0});return r;}

test('shipping index contains exactly the reviewed public range and includes all five completed entries',()=>{
 assert.equal(index.words,2871);assert.equal(index.senses,7464);assert.equal(index.catalogVersion,pack.version);
 for(const w of ['branch','trunk','stem','field','range'])assert.ok(index.entries[w]);
 for(const[w,e]of Object.entries(pack.entries))assert.equal(!!index.entries[w],core.validateEntry(e),w);
 const bad=[...words,{word:words[0].word,id:'synthetic-private-alias'},{word:'branch',id:'synthetic-partial'}];
 assert.equal(S.eligible(bad,pack.entries,index).length,2871);
 assert.equal(S.eligible([{...words[0],id:'synthetic-private-alias'}],pack.entries,index).length,0);
 const known=Object.entries(index.entries).find(([,e])=>e.aliases?.length),alias={word:known[0],id:known[1].aliases[0]};
 assert.equal(S.eligible([alias],pack.entries,index).length,1,'A bundled OCR/index alias retains its original progress ID');
 assert.equal(S.eligible([alias,{...alias,id:known[1].id}],pack.entries,index).length,1,'Alias IDs cannot duplicate a word in a batch');
 assert.equal(S.eligible([{...alias,referenceOnly:true}],pack.entries,index).length,0);
});

test('resume validates locked goals, word IDs, immutable option shape, roots and counters',()=>{
 const r=round();assert.equal(S.validRound(r,words,pack.entries,core),true);
 core.grade(r,0,[]);r.answered=r.answers;assert.equal(S.validRound(clone(r),words,pack.entries,core),true);
 for(const change of [r=>r.goals.pop(),r=>r.queue[0].wordId='private',r=>r.queue[0].options.push(r.queue[0].options[0]),r=>r.queue[0].checked=false,r=>r.roots[r.queue[0].root]=true,r=>r.answers++,r=>r.index=-1,r=>r.targetIds.push(r.targetIds[0]),r=>r.queue.at(-1).root='missing-root']){
  const broken=clone(r);change(broken);assert.equal(S.validRound(broken,words,pack.entries,core),false);
 }
 assert.equal(S.validRound({type:'whole'},words,pack.entries,core),false);
});

test('sense history is independent of old whole-word scores and tracks individual multi-select goals',()=>{
 const attempts=[{id:'synthetic',correct:true,mode:'single'},{id:'synthetic',mode:'sense-multi',senseResults:[{id:'one',correct:true},{id:'two',correct:false}]},{id:'synthetic',mode:'sense-context',senseResults:[{id:'two',correct:true}]}],before=JSON.stringify(attempts);
 assert.deepEqual(S.history(attempts),{'synthetic:one':{seen:1,correct:1,wrong:0},'synthetic:two':{seen:2,correct:1,wrong:1}});assert.equal(JSON.stringify(attempts),before);
});

test('Chinese prompts cannot leak the English answer through a restricted construction label',()=>{
 assert.equal(S.hideEnglishHints('尿崩症（仅限 diabetes insipidus 搭配）'),'尿崩症（仅限 … 搭配）');
 assert.equal(S.hideEnglishHints('附加福利（fringe benefits）'),'附加福利（…）');
 assert.equal(S.hideEnglishHints('生成；创造（正式）'),'生成；创造（正式）');
});

test('clear and backup normalization retain other sessions, do not invent completion, and reject bad versions',()=>{
 const [a,b]=words,p={version:1,cycle:2,completed:{[a.id]:{sessionId:'a',date:'2026-11-04'},[b.id]:{sessionId:'b',date:'2026-11-05'}}},before=JSON.stringify(p);
 assert.deepEqual(S.cleanProgress(p,words),p);assert.deepEqual(Object.keys(S.clearProgress(p,['b']).completed),[a.id]);assert.deepEqual(S.clearProgress(p,[],true),{version:1,cycle:1,completed:{}});assert.equal(JSON.stringify(p),before);
 assert.throws(()=>S.cleanProgress({...p,version:99},words));assert.throws(()=>S.cleanProgress({...p,completed:{[a.id]:{sessionId:'a',date:'invalid'}}},words));
 assert.deepEqual(S.cleanProgress(undefined,words),{version:1,cycle:1,completed:{}});
});
