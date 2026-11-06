const test=require('node:test'),assert=require('node:assert/strict');
const C=require('../src/VocabDesk/Website/sense-training-core.js'),pack=require('../src/VocabDesk/Website/sense-catalog.js');
// Original first-two-batch baseline: 165 examples; five-entry completion adds 17.
const entries=Object.entries(pack.entries).filter(([,e])=>e.batch==='01'||e.batch==='02'),ready=entries.filter(([,e])=>C.validateEntry(e));
const words=ready.map(([word])=>({id:'test-'+word,word}));
const get=(word,id)=>pack.entries[word].senses.find(s=>s.id===id);
function random(seed){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}
function targetPattern(word){const base=word.endsWith('e')?word.slice(0,-1):word;return new RegExp('\\b'+base+(word.endsWith('e')?'(?:e|es|ed|ing|er|est)':'(?:s|es|ed|ing|er|est)?')+'\\b','i');}

test('first two batches and the five-entry completion contain 30 words and 182 original examples',()=>{
  assert.equal(entries.length,30);assert.equal(entries.filter(([,e])=>e.batch==='02').length,20);
  const sentences=new Set();
  for(const [word,entry]of entries){
    const ids=new Set();assert.ok(entry.scope);assert.equal(entry.reviewed,true);
    for(const s of entry.senses){
      assert.ok(!ids.has(s.id));ids.add(s.id);assert.ok(s.aliases.length&&s.concepts.length&&s.pos);
      assert.match(s.source,/^https:\/\/(dictionary\.cambridge\.org|www\.collinsdictionary\.com|www\.merriam-webster\.com)\//);
      assert.ok(entry.sources.includes(s.source));assert.equal(s.example.origin,'original-wordorbit');assert.equal(s.example.reviewed,true);
      assert.match(s.example.zh,/[\u4e00-\u9fff]/);assert.ok(!sentences.has(s.example.en));sentences.add(s.example.en);
      assert.match(s.example.en,targetPattern(word),word+' target word must occur in its own context');
      assert.doesNotMatch(s.example.en,/role of .* modern society|study explored .*changing world/);
    }
  }
  assert.equal(sentences.size,165+17);
});

test('all five formerly partial entries have explicit reviewed completions and resolved legacy decisions',()=>{
  for(const word of ['steep','fine','interest','approach']){
    assert.equal(C.validateEntry(pack.entries[word]),true);assert.ok(pack.entries[word].referenceOnly.every(r=>r.decision&&r.source));
  }
  assert.equal(ready.length,30);
  for(const word of ['branch','trunk','stem','field','range']){
    const e=pack.entries[word];assert.equal(e.complete,true);assert.equal(e.completionRevision,1);assert.equal(e.pendingReview,undefined);assert.deepEqual(e.unresolvedReferences,[]);assert.equal(C.validateEntry(e),true);
    assert.ok(e.referenceOnly.every(r=>r.decision!=='outside-scope-unresolved'&&r.reason&&r.source));
    assert.ok(C.build([{id:word,word}],pack.entries,{date:'2026-11-06'}));
  }
  assert.equal(pack.entries.steep.referenceOnly.find(r=>r.terms.includes('夸大的')).decision,'restricted-verified');
  assert.equal(pack.entries.hydrogen.senses.length,1);assert.ok(pack.entries.hydrogen.referenceOnly.some(r=>r.terms.includes('氢H-2')));
});

test('expanded real examples build variable question counts without modifying public words',()=>{
  const before=JSON.stringify(words),b=C.build(words,pack.entries,{date:'2026-11-04',random:random(4)});
  assert.equal(b.targetIds.length,30);assert.ok(b.baseLength>50);
  const expectedSenses=ready.reduce((n,[,e])=>n+e.senses.length,0);
  assert.equal(b.queue.filter(q=>q.stage===0).length,expectedSenses);
  assert.ok(b.queue.filter(q=>q.stage===0).every(q=>q.kind==='context'||q.kind==='recall'));
  assert.equal(b.queue.filter(q=>q.stage===1).length,30);
  for(const q of b.queue)assert.equal(new Set(q.options.map(o=>o.text)).size,q.options.length);
  assert.equal(JSON.stringify(words),before);
  for(let i=0;i<b.baseLength;i++)C.grade(b,i,b.queue[i].expected,{selfRecall:true});
  assert.equal(C.progress(b).completed,true);assert.equal(C.progress(b).wordsDone,30);
});

test('shared concepts prevent cross-word synonyms from becoming false answers',()=>{
  for(const [a,b]of [[get('issue','problem'),get('matter','affair')],[get('atmosphere','mood'),get('climate','situation')],[get('testimony','proof'),get('support','evidence')],[get('spring','originate'),get('stem','originate')],[get('root','cheer'),get('support','endorse')]])assert.equal(C.overlaps(a,b),true);
  for(const seed of [7,31,97]){
    const b=C.build(words,pack.entries,{date:'2026-11-04',random:random(seed)});
    for(const q of b.queue){
      const own=pack.entries[q.word].senses;
      for(const option of q.options.filter(o=>!o.correct)){
        const separator=option.id.indexOf(':'),otherWord=option.id.slice(0,separator).replace(/^test-/,''),otherSenseId=option.id.slice(separator+1);
        assert.equal(C.validateEntry(pack.entries[otherWord]),true);
        const other=q.originalKind==='reverse'?pack.entries[otherWord].senses:[get(otherWord,otherSenseId)];
        const target=q.originalKind==='reverse'?own.filter(s=>q.senseIds.includes(s.id)):own;
        assert.ok(!target.some(a=>other.some(b=>C.overlaps(a,b))),q.word+' / '+option.text);
      }
    }
  }
});

test('uncertain references and generic translation fragments never enter answer options',()=>{
  const b=C.build(words,pack.entries,{date:'2026-11-04',random:random(11)});
  const texts=b.queue.flatMap(q=>q.options.map(o=>o.text));
  for(const fragment of ['氢H-2','围绕','待核验','用枝状叶脉刺绣花纹装饰','把...放入旅行箱内'])assert.ok(!texts.includes(fragment));
  assert.match(get('plateau','level').pos,/v\./);assert.equal(get('erode','weaken').label,'逐渐削弱；逐步损害');
  assert.ok(pack.entries.testimony.senses.every(s=>s.pos==='n.'));
});
