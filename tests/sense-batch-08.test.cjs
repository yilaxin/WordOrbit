const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const pack=require('../src/VocabDesk/Website/sense-catalog.js'),core=require('../src/VocabDesk/Website/sense-training-core.js');
const entries=Object.entries(pack.entries).filter(([,e])=>e.batch==='08');
const get=(w,id)=>pack.entries[w].senses.find(s=>s.id===id);
function random(seed){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}
function containsTarget(word,text){
  const w=word.toLowerCase(),forms=[w,w+'s',w+'es',w+'ed',w+'ing',w+'d'];
  if(w.endsWith('e'))forms.push(w.slice(0,-1)+'ing',w.slice(0,-1)+'ed');
  if(w.endsWith('y'))forms.push(w.slice(0,-1)+'ies',w.slice(0,-1)+'ied');
  const last=w.slice(-1);if(/[bdfglmnprt]/.test(last))forms.push(w+last+'ed',w+last+'ing');
  const irregular={stride:['strode','stridden'],sting:['stung'],rot:['rotted','rotting'],smuggle:['smuggled','smuggling'],flip:['flipped','flipping'],rob:['robbed','robbing'],toss:['tossed'],kneel:['knelt'],weep:['wept'],fur:['furred','furring']};
  forms.push(...(irregular[w]||[]));
  return forms.some(f=>new RegExp('\\b'+f.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b','i').test(text));
}
const allowedSource=/^https:\/\/(api\.dictionaryapi\.dev|www\.vocabulary\.com|www\.merriam-webster\.com|dictionary\.cambridge\.org|www\.collinsdictionary\.com|developer\.mozilla\.org|learn\.microsoft\.com|docs\.github\.com)\//;

test('reviewed batch 08 has 200 distinct words, 538 scoped senses and 538 original bilingual examples',()=>{
  assert.equal(entries.length,200);assert.equal(Object.values(pack.entries).filter(e=>e.batch<='08').length,1130);
  const older=Object.values(pack.entries).filter(e=>e.batch<'08'),sentences=new Set(older.flatMap(e=>e.senses.map(s=>s.example.en)));
  assert.equal(older.length,930);assert.equal(sentences.size,2305);let count=0;
  for(const [word,e]of entries){
    assert.equal(e.reviewDate,'2026-11-05');assert.equal(core.validateEntry(e),true,word);assert.deepEqual(e.unresolvedReferences,[]);
    assert.ok(Array.isArray(e.sources)&&e.sources.length,word);
    for(const s of e.senses){
      count++;assert.equal(s.example.origin,'original-wordorbit');assert.equal(s.example.reviewed,true);
      assert.match(s.example.zh,/[\u4e00-\u9fff]/);assert.ok(containsTarget(word,s.example.en),word+': '+s.example.en);
      assert.ok(!sentences.has(s.example.en),'Repeated example: '+s.example.en);sentences.add(s.example.en);
      assert.doesNotMatch(s.example.en,/role of .* modern society|is an important word|study explored .*changing world/i);
      assert.match(s.source,allowedSource);assert.ok(e.sources.includes(s.source),word+':'+s.id);
      assert.ok(Array.isArray(s.concepts)&&s.concepts.length,word+':'+s.id);
      assert.ok(Array.isArray(s.aliases)&&s.aliases.length,word+':'+s.id);
    }
    for(const r of e.referenceOnly){
      assert.ok(r.terms.length&&r.decision&&r.reason&&e.sources.includes(r.source),word);
      assert.notEqual(r.decision,'outside-scope-unresolved',word);
    }
  }
  assert.equal(count,538);assert.equal(sentences.size,2843);
});

test('distinct uses, restricted constructions, technical sources and legacy corrections stay explicit',()=>{
  for(const[w,ids]of Object.entries({crack:['fissure','sharp-sound','sharp-sound-verb','break-apart','solve','joke','first-rate','attempt'],margin:['page-margin','surface-edge','group-limit','leeway','difference','profit','deposit','annotate'],fringe:['tassels','periphery','marginal-group','decorate-edge','nonmainstream'],vice:['bad-habit','wickedness','clamp-tool','grip','deputy','instead-of'],revolution:['uprising','radical-change','rotation','single-turn','cycle'],steward:['estate-manager','ship-steward','flight-attendant','union-rep','fiscal-agent'],seed:['plant-seed','origin','offspring','sow','produce-seed','tournament-ranking'],usage:['manner','amount-used','convention'],rug:['floor-rug','blanket-throw']})){
    if(!ids.length)continue;for(const id of ids)assert.ok(get(w,id),w+':'+id);
  }
  assert.equal(get('crack','attempt').construction,'take a crack at');
  assert.equal(get('outskirts','city-edge').construction,'on the outskirts of');
  assert.equal(get('stride','progress').construction,'make strides');
  assert.equal(get('pledge','drinking-toast').construction,"pledge someone's health");
  assert.equal(get('flip','flip-through').construction,'flip through');
  assert.match(get('high-definition','high-resolution').source,/api\.dictionaryapi\.dev\/api\/v2\/entries\/en\/high%20definition$/);
  assert.match(get('usage','amount-used').source,/api\.dictionaryapi\.dev/);
  assert.equal(get('rug','blanket-throw').label,'（主要英式）盖毯；旅行毯');
  assert.equal(get('notify','inform').pos,'vt.');
  for(const[w,term,decision]of [['heroine','海洛因','scope-excluded'],['surgery','换球术','scope-excluded'],['rug','揭露某人','scope-excluded'],['fringe','附加的','context-required'],['pot','奖杯','restricted-verified'],['tape','窄带','scope-excluded'],['hybridisation','杂化','scope-excluded'],['metabolic','变化的','scope-excluded']]){
    const ref=pack.entries[w]?.referenceOnly.find(r=>r.terms.includes(term));
    assert.ok(ref,w+':'+term);assert.equal(ref.decision,decision,w+':'+term);
    assert.ok(!pack.entries[w].senses.some(s=>s.aliases.includes(term)),w+':'+term);
  }
});

test('four disjoint 50-word batches target all 538 senses with fixed safe options and true tail retries',()=>{
  const words=entries.map(([word])=>({id:'b08-'+word,word})),byId=new Map(words.map(w=>[w.id,w])),done=[],before=JSON.stringify({words,entries});let goals=0;
  for(let n=0;n<4;n++){
    const batch=core.build(words,pack.entries,{date:'2026-11-05',completedIds:done,random:random(809+n*71)});
    assert.equal(batch.targetIds.length,50);assert.ok(batch.targetIds.every(id=>!done.includes(id)));done.push(...batch.targetIds);
    const expected=words.filter(w=>batch.targetIds.includes(w.id)).flatMap(w=>pack.entries[w.word].senses.map(s=>w.id+':'+s.id));goals+=expected.length;
    assert.deepEqual(new Set(batch.goals.map(s=>s.wordId+':'+s.senseId)),new Set(expected));
    assert.equal(batch.queue.filter(q=>q.stage===0).length,expected.length);assert.equal(batch.queue.filter(q=>q.stage===1).length,50);
    assert.equal(batch.queue.filter(q=>q.kind==='recall').length,0);assert.ok(batch.baseLength>100);assert.deepEqual(JSON.parse(JSON.stringify(batch)),batch);
    for(const q of batch.queue){
      assert.equal(new Set(q.options.map(o=>o.text)).size,q.options.length);
      const target=q.originalKind==='reverse'?pack.entries[q.word].senses.filter(s=>q.senseIds.includes(s.id)):pack.entries[q.word].senses;
      for(const o of q.options.filter(o=>!o.correct)){
        const[wordId,senseId]=o.id.split(':'),w=byId.get(wordId).word,candidate=q.originalKind==='reverse'?pack.entries[w].senses:[get(w,senseId)];
        assert.ok(!target.some(a=>candidate.some(b=>core.overlaps(a,b))),q.word+'/'+w);
      }
    }
    const length=batch.queue.length,snapshot=JSON.stringify(batch.queue.map(q=>q.options));
    core.grade(batch,0,[]);assert.equal(batch.queue.length,length+1);assert.equal(batch.queue.at(-1).root,batch.queue[0].id);
    assert.equal(core.progress(batch).completed,false);assert.equal(snapshot,JSON.stringify(batch.queue.slice(0,length).map(q=>q.options)));
    for(let i=1;i<batch.queue.length;i++)core.grade(batch,i,batch.queue[i].expected);
    assert.equal(core.progress(batch).completed,true);
  }
  assert.equal(goals,538);assert.equal(new Set(done).size,200);assert.equal(core.build(words,pack.entries,{date:'2026-11-05',completedIds:done}),null);
  assert.equal(JSON.stringify({words,entries}),before);
});

test('new cross-batch near equivalents are excluded and all eight batches load offline without eager editorial scripts',()=>{
  for(const[a,b]of [[get('crack','attempt'),get('essay','attempt')],[get('desolate','lay-waste'),get('devastate','damage')],[get('desolate','make-sad'),get('devastate','emotion')],[get('investigation','inquiry'),get('inquiry','investigation')],[get('oath','solemn-vow'),get('pledge','solemn-promise-n')]])assert.equal(core.overlaps(a,b),true);
  const site=path.join(__dirname,'../src/VocabDesk/Website'),window={},context={window};vm.createContext(context);
  for(const f of ['sense-batch-03.js','sense-batch-04.js','sense-batch-05.js','sense-batch-06.js','sense-batch-07.js','sense-batch-08.js','sense-completion-02.js','sense-batch-09.js','sense-batch-10.js','sense-catalog.js'])vm.runInContext(fs.readFileSync(path.join(site,f),'utf8'),context);
  assert.equal(JSON.stringify(window.WORDORBIT_SENSE_CATALOG),JSON.stringify(pack));assert.equal(pack.publicationState,'reviewed-subset-production');
  assert.equal(pack.version,10);assert.deepEqual(pack.batches,['01','02','03','04','05','06','07','08','09','10']);
  assert.doesNotMatch(fs.readFileSync(path.join(site,'index.html'),'utf8'),/src=["'][^"']*sense-(?:batch|catalog|training)/);
});
