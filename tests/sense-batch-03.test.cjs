const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const pack=require('../src/VocabDesk/Website/sense-catalog.js'),core=require('../src/VocabDesk/Website/sense-training-core.js');
const entries=Object.entries(pack.entries).filter(([,e])=>e.batch==='03');
const get=(word,id)=>pack.entries[word].senses.find(s=>s.id===id);
function random(seed){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}
function containsTarget(word,text){
  const forms=[word,word+'s',word+'es',word+'ed',word+'ing'];
  if(word.endsWith('e'))forms.push(word+'d',word.slice(0,-1)+'ing');
  if(word.endsWith('y'))forms.push(word.slice(0,-1)+'ies',word.slice(0,-1)+'ied');
  return forms.some(f=>new RegExp('\\b'+f+'\\b','i').test(text));
}
test('batch 03 has exactly 100 new reviewed words and 229 sense-specific original examples',()=>{
  assert.equal(entries.length,100);assert.equal(new Set(entries.map(([w])=>w)).size,100);
  assert.equal(Object.values(pack.entries).filter(e=>e.batch<='03').length,130);
  const sentences=new Set(Object.values(pack.entries).filter(e=>e.batch<'03').flatMap(e=>e.senses.map(s=>s.example.en)));
  let count=0;
  for(const [word,e]of entries){
    assert.equal(core.validateEntry(e),true,word);assert.equal(e.unresolvedReferences.length,0);
    for(const s of e.senses){
      count++;assert.equal(s.example.origin,'original-wordorbit');assert.equal(s.example.reviewed,true);
      assert.match(s.example.zh,/[\u4e00-\u9fff]/);assert.ok(containsTarget(word,s.example.en),word+': '+s.example.en);
      assert.ok(!sentences.has(s.example.en),'Repeated example: '+s.example.en);sentences.add(s.example.en);
      assert.doesNotMatch(s.example.en,/role of .* modern society|study explored .*changing world|is an important word/i);
      assert.ok(e.sources.includes(s.source));assert.match(s.source,/^https:\/\/(dictionary\.cambridge\.org|www\.collinsdictionary\.com)\//);
    }
    for(const r of e.referenceOnly)assert.ok(r.terms.length&&r.decision&&r.reason&&e.sources.includes(r.source));
  }
  assert.equal(count,229);assert.equal(sentences.size,411);
});
test('important formerly omitted meanings and usage limits remain explicit',()=>{
  assert.equal(pack.entries.resilient.senses.length,2);assert.ok(get('resilient','recover'));
  assert.ok(get('venue','event'));assert.ok(get('immunity','legal'));assert.ok(get('contemporary','modern'));
  assert.equal(pack.entries.scent.senses.length,6);assert.ok(get('gauge','judge'));
  assert.ok(get('yield','pressure'));assert.ok(get('yield','traffic'));
  assert.equal(get('witness','proof').construction,'bear witness to');
  assert.ok(pack.entries.venue.referenceOnly.some(r=>r.terms.includes('犯罪地点')));
  assert.ok(pack.entries.pollen.referenceOnly.some(r=>r.terms.includes('传授花粉给')&&r.decision==='restricted-verified'));
  assert.ok(pack.entries.fabric.referenceOnly.some(r=>r.terms.includes('工厂')&&r.decision==='unsupported-as-standalone'));
});
test('100 real words create two different 50-word batches with all chosen senses targeted',()=>{
  const words=entries.map(([word])=>({id:'batch03-'+word,word})),before=JSON.stringify(words);
  const first=core.build(words,pack.entries,{date:'2026-11-04',random:random(311)});
  const second=core.build(words,pack.entries,{date:'2026-11-04',completedIds:first.targetIds,random:random(97)});
  assert.equal(first.targetIds.length,50);assert.equal(second.targetIds.length,50);
  assert.equal(new Set([...first.targetIds,...second.targetIds]).size,100);
  for(const b of [first,second]){
    const targets=words.filter(w=>b.targetIds.includes(w.id));
    assert.equal(b.queue.filter(q=>q.stage===0).length,targets.reduce((n,w)=>n+pack.entries[w.word].senses.length,0));
    assert.equal(b.queue.filter(q=>q.stage===1).length,50);
    assert.ok(b.baseLength>100);assert.equal(b.queue.filter(q=>q.kind==='recall').length,0);
    const serial=JSON.stringify(b);assert.deepEqual(JSON.parse(serial),b);
    for(const q of b.queue){
      assert.equal(new Set(q.options.map(o=>o.text)).size,q.options.length);
      for(const o of q.options.filter(o=>!o.correct)){
        const [otherId,senseId]=o.id.split(':'),otherWord=words.find(w=>w.id===otherId).word;
        const target=q.originalKind==='reverse'?pack.entries[q.word].senses.filter(s=>q.senseIds.includes(s.id)):pack.entries[q.word].senses;
        const candidate=q.originalKind==='reverse'?pack.entries[otherWord].senses:[get(otherWord,senseId)];
        assert.ok(!target.some(a=>candidate.some(b=>core.overlaps(a,b))));
      }
    }
  }
  assert.equal(JSON.stringify(words),before);
});
test('new cross-word equivalents are excluded and the data load offline in a browser context',()=>{
  for(const [a,b]of [[get('research','study'),get('scholarship','study')],[get('cushion','protection'),get('mitigate','lessen')],[get('surrender','give-up'),get('yield','give-way')],[get('contemporary','modern'),get('current','now')],[get('organism','system'),get('ecosystem','network')],[get('evidence','proof'),get('testimony','proof')]])assert.equal(core.overlaps(a,b),true);
  const site=path.join(__dirname,'../src/VocabDesk/Website'),window={},context={window};vm.createContext(context);
  for(const name of ['sense-batch-03.js','sense-batch-04.js','sense-batch-05.js','sense-batch-06.js','sense-batch-07.js','sense-batch-08.js','sense-completion-02.js','sense-batch-09.js','sense-batch-10.js','sense-batch-11.js','sense-batch-12.js','sense-batch-13.js','sense-batch-14.js','sense-batch-15.js','sense-catalog.js'])vm.runInContext(fs.readFileSync(path.join(site,name),'utf8'),context);
  assert.equal(Object.values(window.WORDORBIT_SENSE_CATALOG.entries).filter(e=>e.batch<='03').length,130);
  assert.equal(JSON.stringify(window.WORDORBIT_SENSE_CATALOG),JSON.stringify(pack));
  // The production UI remains on its existing training system until integration.
  assert.doesNotMatch(fs.readFileSync(path.join(site,'index.html'),'utf8'),/src=["'][^"']*sense-(?:batch|catalog|training)/);
});
