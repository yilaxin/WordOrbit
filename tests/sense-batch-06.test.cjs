const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const pack=require('../src/VocabDesk/Website/sense-catalog.js'),core=require('../src/VocabDesk/Website/sense-training-core.js');
const entries=Object.entries(pack.entries).filter(([,e])=>e.batch==='06');
const get=(w,id)=>pack.entries[w].senses.find(s=>s.id===id);
function random(seed){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}
function containsTarget(word,text){
  const forms=[word,word+'s',word+'es',word+'ed',word+'ing'];
  if(word.endsWith('e'))forms.push(word+'d',word.slice(0,-1)+'ing');
  if(word.endsWith('y'))forms.push(word.slice(0,-1)+'ies',word.slice(0,-1)+'ied');
  const irregular={feed:['fed'],spin:['spun','spinning'],sew:['sewn'],clothe:['clad'],shelf:['shelves'],rag:['ragged','ragging'],barrel:['barrelled','barrelling'],distil:['distilled','distilling'],matrix:['matrices']};
  forms.push(...(irregular[word]||[]));return forms.some(f=>new RegExp('\\b'+f+'\\b','i').test(text));
}

test('batch 06 adds 200 distinct words, 475 scoped senses and 475 original bilingual examples',()=>{
  assert.equal(entries.length,200);assert.equal(Object.values(pack.entries).filter(e=>e.batch<='06').length,730);
  const older=Object.values(pack.entries).filter(e=>e.batch<'06'),sentences=new Set(older.flatMap(e=>e.senses.map(s=>s.example.en)));
  assert.equal(older.length,530);assert.equal(sentences.size,1202);let count=0;
  for(const [word,e]of entries){
    assert.equal(e.reviewDate,'2026-11-05');assert.equal(core.validateEntry(e),true,word);assert.deepEqual(e.unresolvedReferences,[]);
    for(const s of e.senses){
      count++;assert.equal(s.example.origin,'original-wordorbit');assert.equal(s.example.reviewed,true);
      assert.match(s.example.zh,/[\u4e00-\u9fff]/);assert.ok(containsTarget(word,s.example.en),word+': '+s.example.en);
      assert.ok(!sentences.has(s.example.en),'Repeated example: '+s.example.en);sentences.add(s.example.en);
      assert.doesNotMatch(s.example.en,/role of .* modern society|is an important word|study explored .*changing world/i);
      assert.match(s.source,/^https:\/\/(dictionary\.cambridge\.org|www\.collinsdictionary\.com|www\.oxfordlearnersdictionaries\.co\.uk|learn\.microsoft\.com)\//);
      assert.ok(e.sources.includes(s.source));
    }
    for(const r of e.referenceOnly)assert.ok(r.terms.length&&r.decision&&r.reason&&e.sources.includes(r.source),word);
  }
  assert.equal(count,475);assert.equal(sentences.size,1677);
});

test('distinct uses, named constructions, source differences and legacy corrections remain explicit',()=>{
  for(const [w,ids]of Object.entries({feed:['food','animal-food','supply','stream','depend'],pupil:['learner','eye'],reference:['mention','consult','source','recommendation','code'],optics:['science','perception'],critical:['disapproval','analysis','crucial','illness','threshold'],grace:['movement','conduct','mercy','prayer','time','adorn'],prospect:['possibility','success','candidate','view','mineral'],suspension:['pause','support','vehicle','mixture']}))for(const id of ids)assert.ok(get(w,id),w+':'+id);
  assert.equal(get('jazz','liven').construction,'jazz up');assert.match(get('jazz','liven').source,/jazz-up$/);
  assert.match(get('minister','care').construction,/minister to/);assert.match(get('minister','care').source,/minister-to$/);
  assert.match(get('pane','screen').source,/learn.microsoft.com/);assert.match(get('courtship','animals').source,/oxfordlearnersdictionaries/);
  assert.match(get('principal','party').source,/collinsdictionary/);assert.match(get('critical','threshold').source,/collinsdictionary/);
  for(const [w,term]of [['fertilise','使受粉'],['excrete','分泌'],['lane','单行道'],['spin','情绪低落'],['refrigerator','冷冻机'],['plural','两个以上的'],['atlas','自动测试和负载分析系统'],['insurance','保险费']]){
    assert.ok(pack.entries[w].referenceOnly.some(r=>r.terms.includes(term)),w);
    assert.ok(!pack.entries[w].senses.some(s=>s.aliases.includes(term)),w);
  }
});

test('four disjoint 50-word batches cover all 475 goals and preserve choices through tail retries',()=>{
  const words=entries.map(([word])=>({id:'b06-'+word,word})),byId=new Map(words.map(w=>[w.id,w])),done=[],before=JSON.stringify({words,entries});let goals=0;
  for(let n=0;n<4;n++){
    const batch=core.build(words,pack.entries,{date:'2026-11-05',completedIds:done,random:random(607+n*53)});
    assert.equal(batch.targetIds.length,50);assert.ok(batch.targetIds.every(id=>!done.includes(id)));done.push(...batch.targetIds);
    const expected=words.filter(w=>batch.targetIds.includes(w.id)).flatMap(w=>pack.entries[w.word].senses.map(s=>w.id+':'+s.id));goals+=expected.length;
    assert.deepEqual(new Set(batch.goals.map(s=>s.wordId+':'+s.senseId)),new Set(expected));
    assert.equal(batch.queue.filter(q=>q.stage===0).length,expected.length);assert.equal(batch.queue.filter(q=>q.stage===1).length,50);
    assert.equal(batch.queue.filter(q=>q.kind==='recall').length,0);assert.ok(batch.baseLength>100);
    assert.deepEqual(JSON.parse(JSON.stringify(batch)),batch);
    for(const q of batch.queue){
      assert.equal(new Set(q.options.map(o=>o.text)).size,q.options.length);
      const target=q.originalKind==='reverse'?pack.entries[q.word].senses.filter(s=>q.senseIds.includes(s.id)):pack.entries[q.word].senses;
      for(const o of q.options.filter(o=>!o.correct)){
        const [wordId,senseId]=o.id.split(':'),w=byId.get(wordId).word,candidate=q.originalKind==='reverse'?pack.entries[w].senses:[get(w,senseId)];
        assert.ok(!target.some(a=>candidate.some(b=>core.overlaps(a,b))),q.word+'/'+w);
      }
    }
    const length=batch.queue.length,snapshot=JSON.stringify(batch.queue.map(q=>q.options));
    core.grade(batch,0,[]);assert.equal(batch.queue.length,length+1);assert.equal(batch.queue.at(-1).root,batch.queue[0].id);
    assert.equal(core.progress(batch).completed,false);
    assert.equal(snapshot,JSON.stringify(batch.queue.slice(0,length).map(q=>q.options)));
    for(let i=1;i<batch.queue.length;i++)core.grade(batch,i,batch.queue[i].expected);
    assert.equal(core.progress(batch).completed,true);
  }
  assert.equal(goals,475);assert.equal(new Set(done).size,200);
  assert.equal(core.build(words,pack.entries,{date:'2026-11-05',completedIds:done}),null);assert.equal(JSON.stringify({words,entries}),before);
});

test('batch 06 near equivalents are excluded and the catalog loads offline without eager editorial scripts',()=>{
  for(const [a,b]of [[get('grace','movement'),get('elegance','grace')],[get('energetic','energy'),get('vigorous','energy')],[get('collaborate','joint-work'),get('cooperate','joint')],[get('immigration','settlement'),get('immigrate','settle')],[get('restrict','limit'),get('confine','limit')],[get('plague','disease'),get('disease','illness')],[get('perform','function'),get('function','operate')]])assert.equal(core.overlaps(a,b),true);
  const site=path.join(__dirname,'../src/VocabDesk/Website'),window={},context={window};vm.createContext(context);
  for(const f of ['sense-batch-03.js','sense-batch-04.js','sense-batch-05.js','sense-batch-06.js','sense-batch-07.js','sense-batch-08.js','sense-completion-02.js','sense-batch-09.js','sense-batch-10.js','sense-catalog.js'])vm.runInContext(fs.readFileSync(path.join(site,f),'utf8'),context);
  assert.equal(JSON.stringify(window.WORDORBIT_SENSE_CATALOG),JSON.stringify(pack));
  assert.equal(pack.publicationState,'reviewed-subset-production');
  assert.doesNotMatch(fs.readFileSync(path.join(site,'index.html'),'utf8'),/src=["'][^"']*sense-(?:batch|catalog|training)/);
});
