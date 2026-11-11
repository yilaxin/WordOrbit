const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const pack=require('../src/VocabDesk/Website/sense-catalog.js'),C=require('../src/VocabDesk/Website/sense-training-core.js');
const batch=Object.entries(pack.entries).filter(([,e])=>e.batch==='10');
const get=(w,id)=>pack.entries[w].senses.find(s=>s.id===id);
function random(seed){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}
function target(word,text){
  const forms=[word,word+'s',word+'es',word+'ed',word+'ing',word+'d'];
  if(word.endsWith('e'))forms.push(word.slice(0,-1)+'ing');
  if(word.endsWith('y'))forms.push(word.slice(0,-1)+'ies',word.slice(0,-1)+'ied');
  if(/[bdfglmnprst]$/.test(word))forms.push(word+word.at(-1)+'ed');
  if(word.endsWith('c'))forms.push(word+'ked',word+'king');
  forms.push(...({knife:['knives','knifing'],knit:['knitted','knitting'],pedal:['pedalled','pedalling'],stool:['stooled'],medal:['medalled'],man:['men']}[word]||[]));
  return forms.some(f=>new RegExp('\\b'+f.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b','i').test(text));
}

test('batch 10 excludes concrete new/historical near equivalents and preserves explicit old-translation decisions',()=>{
  for(const[a,ai,b,bi]of [['alga','organism','algae','organisms'],['attorney','lawyer','lawyer','profession'],['thoughtful','considerate','considerate','kind'],['undermine','weaken','erode','weaken'],['limb','tree','branch','tree'],['saucer','dish','dish','container'],['juice','vitality','energy','vigour'],['sympathy','resonance','sympathetic','vibration']])assert.equal(C.overlaps(get(a,ai),get(b,bi)),true,a+'/'+b);
  for(const [w,term]of [['outcome','出口'],['stainless','污染的'],['meltdown','变卖(财产)'],['apology','辩解者']])assert.equal(pack.entries[w].referenceOnly.find(r=>r.terms.includes(term)).decision,'scope-excluded');
  assert.equal(get('infringe','rights').construction,'infringe on/upon');assert.equal(get('grandfather','exemption').construction,'grandfather in');
  assert.equal(C.overlaps(get('cricket','insect'),get('cricket','sport')),false);
  assert.match(get('hybridise','breed').source,/hybridize$/);assert.match(get('apologise','regret').source,/apologize$/);
});

test('actual 2471-word pool supplies four disjoint new 50-word rounds covering all 446 new senses',()=>{
  const words=Object.keys(pack.entries).map(word=>({id:'pool-'+word,word}));
  const completed=words.filter(w=>pack.entries[w.word].batch!=='10').map(w=>w.id),chosen=[];let goals=0,fallbacks=0;
  for(let n=0;n<4;n++){
    const b=C.build(words,pack.entries,{date:'2026-11-06',completedIds:[...completed,...chosen],random:random(1001+n)});
    assert.equal(b.targetIds.length,50);assert.ok(b.targetIds.every(id=>!chosen.includes(id)));chosen.push(...b.targetIds);goals+=b.goals.length;fallbacks+=b.queue.filter(q=>q.kind==='recall').length;
    for(let i=0;i<b.queue.length;i++)C.grade(b,i,b.queue[i].expected,{selfRecall:true});assert.equal(C.progress(b).completed,true);
  }
  assert.equal(chosen.length,200);assert.equal(new Set(chosen).size,200);assert.equal(goals,446);assert.equal(fallbacks,0);
});
test('batch 10 adds 200 distinct words, 446 distinct sense-specific original bilingual examples',()=>{
  assert.equal(batch.length,200);assert.equal(new Set(batch.map(([w])=>w)).size,200);
  const old=Object.entries(pack.entries).filter(([,e])=>e.batch<'10'),sentences=new Set(old.flatMap(([,e])=>e.senses.map(s=>s.example.en)));
  assert.equal(old.length,1330);assert.equal(sentences.size,3342);
  let count=0;for(const[word,e]of batch){
    assert.equal(e.reviewDate,'2026-11-06');assert.equal(C.validateEntry(e),true,word);assert.deepEqual(e.unresolvedReferences,[]);
    assert.equal(new Set(e.senses.map(s=>s.id)).size,e.senses.length);
    for(const s of e.senses){count++;assert.ok(target(word,s.example.en),word+':'+s.example.en);assert.match(s.example.zh,/[\u4e00-\u9fff]/);assert.ok(!sentences.has(s.example.en),s.example.en);sentences.add(s.example.en);
      assert.equal(s.example.reviewed,true);assert.equal(s.example.origin,'original-wordorbit');assert.ok(s.aliases.length&&s.concepts.length&&s.pos);assert.ok(e.sources.includes(s.source));
      assert.match(s.source,/^https:\/\/(www\.collinsdictionary\.com|www\.merriam-webster\.com|learn\.microsoft\.com)\//);
      assert.doesNotMatch(s.example.en,/role of .*modern society|study explored .*changing world|is an important word/i);
    }
    for(const r of e.referenceOnly)assert.ok(r.terms.length&&r.reason&&e.sources.includes(r.source)&&r.decision!=='outside-scope-unresolved');
  }
  assert.equal(count,446);assert.equal(sentences.size,3788);
});
test('four 50-word batches cover every new goal with locked choices, serialization and true tail retries',()=>{
  const words=batch.map(([word])=>({id:'batch10-'+word,word})),before=JSON.stringify(words),done=[];let goals=0,fallbacks=0;
  for(let n=0;n<4;n++){
    const b=C.build(words,pack.entries,{date:'2026-11-06',completedIds:done,random:random(901+n)});assert.equal(b.targetIds.length,50);assert.ok(b.targetIds.every(id=>!done.includes(id)));done.push(...b.targetIds);goals+=b.goals.length;
    assert.equal(b.queue.filter(q=>q.stage===0).length,b.goals.length);assert.equal(b.queue.filter(q=>q.stage===1).length,50);
    const snapshot=JSON.stringify(b.queue[0].options),base=b.baseLength;C.grade(b,0,[],{selfRecall:false});assert.equal(b.queue.length,base+1);assert.equal(b.queue.at(-1).root,b.queue[0].id);assert.equal(JSON.stringify(b.queue[0].options),snapshot);assert.equal(C.grade(b,0,[]).alreadyChecked,true);
    const restored=JSON.parse(JSON.stringify(b));assert.equal(JSON.stringify(restored),JSON.stringify(b));
    for(const q of b.queue){
      fallbacks+=Number(q.kind==='recall');assert.equal(new Set(q.options.map(o=>o.text)).size,q.options.length);
      for(const o of q.options.filter(o=>!o.correct)){
        const [id,sense]=o.id.split(':'),other=words.find(w=>w.id===id);assert.ok(other);
        const ts=q.originalKind==='reverse'?pack.entries[q.word].senses.filter(s=>q.senseIds.includes(s.id)):pack.entries[q.word].senses;
        const cs=q.originalKind==='reverse'?pack.entries[other.word].senses:[get(other.word,sense)];assert.ok(!ts.some(t=>cs.some(c=>C.overlaps(t,c))),q.word+' / '+o.text);
      }
    }
    for(let i=1;i<b.queue.length;i++)C.grade(b,i,b.queue[i].expected,{selfRecall:true});assert.equal(C.progress(b).completed,true);
  }
  assert.equal(new Set(done).size,200);assert.equal(goals,446);assert.equal(fallbacks,0,'The real pool must provide sufficient unambiguous choices');assert.equal(JSON.stringify(words),before);
});
test('all eleven modules load offline on demand and the shipped scope contains 2,471 ready words',()=>{
  const site=path.join(__dirname,'../src/VocabDesk/Website'),window={},ctx={window};vm.createContext(ctx);
  for(const name of ['03','04','05','06','07','08','09','10','11','12','13','14','15'])vm.runInContext(fs.readFileSync(path.join(site,'sense-batch-'+name+'.js'),'utf8'),ctx);
  for(const name of ['sense-completion-02.js','sense-catalog.js','sense-ready-index.js'])vm.runInContext(fs.readFileSync(path.join(site,name),'utf8'),ctx);
  assert.equal(JSON.stringify(window.WORDORBIT_SENSE_CATALOG),JSON.stringify(pack));assert.equal(pack.version,15);assert.equal(window.WordOrbitSenseIndex.words,2471);assert.equal(window.WordOrbitSenseIndex.senses,6431);
  assert.equal(Object.values(pack.entries).filter(C.validateEntry).length,2471);
  assert.doesNotMatch(fs.readFileSync(path.join(site,'index.html'),'utf8'),/src=["'][^"']*sense-(?:batch|catalog|training|completion)/);
});
