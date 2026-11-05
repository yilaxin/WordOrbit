const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const pack=require('../src/VocabDesk/Website/sense-catalog.js'),core=require('../src/VocabDesk/Website/sense-training-core.js');
const entries=Object.entries(pack.entries).filter(([,e])=>e.batch==='04');
const get=(word,id)=>pack.entries[word].senses.find(s=>s.id===id);
function random(seed){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}
function containsTarget(word,text){
  const forms=[word,word+'s',word+'es',word+'ed',word+'ing'];
  if(word.endsWith('e'))forms.push(word+'d',word.slice(0,-1)+'ing');
  if(word.endsWith('y'))forms.push(word.slice(0,-1)+'ies',word.slice(0,-1)+'ied');
  if(word==='fulfil')forms.push('fulfilled','fulfilling');
  if(word==='crop')forms.push('cropped','cropping');
  if(word==='undertake')forms.push('undertook','undertaken');
  return forms.some(f=>new RegExp('\\b'+f+'\\b','i').test(text));
}

test('batch 04 adds exactly 200 distinct words and 415 original sense-specific bilingual examples',()=>{
  assert.equal(entries.length,200);assert.equal(Object.values(pack.entries).filter(e=>e.batch<='04').length,330);
  assert.equal(new Set(entries.map(([w])=>w)).size,200);
  const sentences=new Set(Object.values(pack.entries).filter(e=>e.batch<'04').flatMap(e=>e.senses.map(s=>s.example.en)));
  assert.equal(sentences.size,394);let count=0;
  for(const [word,e]of entries){
    assert.equal(core.validateEntry(e),true,word);assert.equal(e.unresolvedReferences.length,0,word);
    assert.equal(new Set(e.senses.map(s=>s.id)).size,e.senses.length,word);
    for(const s of e.senses){
      count++;assert.equal(s.example.origin,'original-wordorbit');assert.equal(s.example.reviewed,true);
      assert.match(s.example.zh,/[\u4e00-\u9fff]/);assert.ok(containsTarget(word,s.example.en),word+': '+s.example.en);
      assert.ok(!sentences.has(s.example.en),'Repeated example: '+s.example.en);sentences.add(s.example.en);
      assert.doesNotMatch(s.example.en,/role of .* modern society|study explored .*changing world|is an important word/i);
      assert.ok(e.sources.includes(s.source),word);assert.match(s.source,/^https:\/\/(dictionary\.cambridge\.org|www\.collinsdictionary\.com)\//);
    }
    for(const r of e.referenceOnly)assert.ok(r.terms.length&&r.decision&&r.reason&&e.sources.includes(r.source),word);
  }
  assert.equal(count,415);assert.equal(sentences.size,809);
});

test('common omitted meanings, contextual limits and source overrides remain distinct',()=>{
  for(const [word,ids]of Object.entries({crop:['plant','cut'],ceiling:['room','limit'],harbour:['port','feelings','contain'],sustainable:['environment','continuable'],dependent:['reliant','conditional','person'],prescription:['medicine','vision','proposal'],trauma:['emotional','injury'],justify:['reason','text'],distinguish:['difference','feature','perceive','excel']}))for(const id of ids)assert.ok(get(word,id),word+':'+id);
  assert.match(get('numerate','ability').label,/计算/);
  assert.equal(get('cater','needs').construction,'cater for/to');
  assert.equal(get('sober','sober-up').construction,'sober up');
  assert.equal(get('wellbeing','welfare').source,'https://dictionary.cambridge.org/dictionary/english/well-being');
  for(const [word,id]of [['certificate','certify'],['ancestor','precursor'],['questionnaire','form'],['justify','text']])assert.match(get(word,id).source,/collinsdictionary/);
  for(const [word,term]of [['consultant','征询意见者'],['neutral','无色的'],['crude','未成熟的'],['municipal','内政的'],['metabolism','变态']]){
    assert.ok(pack.entries[word].referenceOnly.some(r=>r.terms.includes(term)),word);
    assert.ok(!pack.entries[word].senses.some(s=>s.aliases.includes(term)),word);
  }
});

test('200 real words produce four disjoint 50-word batches with complete sense goals and safe options',()=>{
  const words=entries.map(([word])=>({id:'b04-'+word,word})),byId=new Map(words.map(w=>[w.id,w])),completed=[];
  const before=JSON.stringify({words,entries});let totalGoals=0;
  for(let n=0;n<4;n++){
    const batch=core.build(words,pack.entries,{date:'2026-11-04',completedIds:completed,random:random(421+n*29)});
    assert.equal(batch.targetIds.length,50);assert.ok(batch.targetIds.every(id=>!completed.includes(id)));
    completed.push(...batch.targetIds);
    const targets=words.filter(w=>batch.targetIds.includes(w.id)),expected=targets.flatMap(w=>pack.entries[w.word].senses.map(s=>w.id+':'+s.id));
    totalGoals+=expected.length;
    assert.deepEqual(new Set(batch.goals.map(s=>s.wordId+':'+s.senseId)),new Set(expected));
    assert.equal(batch.queue.filter(q=>q.stage===0).length,expected.length);
    assert.equal(batch.queue.filter(q=>q.stage===1).length,50);
    assert.equal(batch.queue.filter(q=>q.kind==='recall').length,0);
    assert.ok(batch.baseLength>100);assert.deepEqual(JSON.parse(JSON.stringify(batch)),batch);
    for(const q of batch.queue){
      assert.equal(new Set(q.options.map(o=>o.text)).size,q.options.length);
      const target=q.originalKind==='reverse'?pack.entries[q.word].senses.filter(s=>q.senseIds.includes(s.id)):pack.entries[q.word].senses;
      for(const o of q.options.filter(o=>!o.correct)){
        const [otherId,senseId]=o.id.split(':'),otherWord=byId.get(otherId).word;
        const candidate=q.originalKind==='reverse'?pack.entries[otherWord].senses:[get(otherWord,senseId)];
        assert.ok(!target.some(a=>candidate.some(b=>core.overlaps(a,b))),q.word+' / '+otherWord);
      }
    }
    // A real-word error goes to the tail; later success on another sense cannot clear it.
    const optionsBefore=JSON.stringify(batch.queue.map(q=>q.options)),tail=batch.queue.length;
    assert.equal(core.grade(batch,0,[]).correct,false);assert.equal(batch.queue.length,tail+1);
    assert.equal(batch.queue.at(-1).root,batch.queue[0].id);
    assert.equal(JSON.stringify(batch.queue.slice(0,tail).map(q=>q.options)),optionsBefore);
    for(let i=1;i<batch.queue.length;i++)core.grade(batch,i,batch.queue[i].expected);
    assert.equal(core.progress(batch).completed,true);
  }
  assert.equal(new Set(completed).size,200);assert.equal(totalGoals,415);
  assert.equal(core.build(words,pack.entries,{date:'2026-11-04',completedIds:completed}),null);
  assert.equal(JSON.stringify({words,entries}),before);
});

test('cross-word equivalents are excluded and the full pack loads without network or production activation',()=>{
  for(const [a,b]of [[get('adapt','adjust'),get('adjust','adapt')],[get('accurate','precise'),get('precise','exact')],[get('entertainment','amusement'),get('recreation','leisure')],[get('mediate','dispute'),get('intervene','involve')]])assert.equal(core.overlaps(a,b),true);
  const site=path.join(__dirname,'../src/VocabDesk/Website'),window={},context={window};vm.createContext(context);
  for(const file of ['sense-batch-03.js','sense-batch-04.js','sense-batch-05.js','sense-batch-06.js','sense-batch-07.js','sense-catalog.js'])vm.runInContext(fs.readFileSync(path.join(site,file),'utf8'),context);
  assert.equal(JSON.stringify(window.WORDORBIT_SENSE_CATALOG),JSON.stringify(pack));
  assert.doesNotMatch(fs.readFileSync(path.join(site,'index.html'),'utf8'),/src=["'][^"']*sense-(?:batch|catalog|training)/);
});
