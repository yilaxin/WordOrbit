const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const pack=require('../src/VocabDesk/Website/sense-catalog.js'),core=require('../src/VocabDesk/Website/sense-training-core.js');
const entries=Object.entries(pack.entries).filter(([,e])=>e.batch==='07');
const get=(w,id)=>pack.entries[w].senses.find(s=>s.id===id);
function random(seed){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}
function containsTarget(word,text){
  const forms=[word,word+'s',word+'es',word+'ed',word+'ing'];
  if(word.endsWith('e'))forms.push(word+'d',word.slice(0,-1)+'ing');
  if(word.endsWith('y'))forms.push(word.slice(0,-1)+'ies',word.slice(0,-1)+'ied');
  const irregular={creep:['crept'],scan:['scanned','scanning'],submit:['submitted','submitting'],drum:['drummed','drumming'],pad:['padded','padding'],plug:['plugged','plugging'],jam:['jammed','jamming'],dip:['dipped','dipping'],wrap:['wrapped','wrapping'],model:['modelled','modelling'],span:['spanned','spanning'],bleed:['bled'],sunset:['sunsetting','sunsets'],maximum:['maxima'],minimum:['minima']};
  forms.push(...(irregular[word]||[]));return forms.some(f=>new RegExp('\\b'+f+'\\b','i').test(text));
}

test('batch 07 adds 200 distinct words, 628 scoped senses and 628 original bilingual examples',()=>{
  assert.equal(entries.length,200);assert.equal(Object.values(pack.entries).filter(e=>e.batch<='07').length,930);
  const older=Object.values(pack.entries).filter(e=>e.batch<'07'),sentences=new Set(older.flatMap(e=>e.senses.map(s=>s.example.en)));
  assert.equal(older.length,730);assert.equal(sentences.size,1660);let count=0;
  for(const [word,e]of entries){
    assert.equal(e.reviewDate,'2026-11-05');assert.equal(core.validateEntry(e),true,word);assert.deepEqual(e.unresolvedReferences,[]);
    for(const s of e.senses){
      count++;assert.equal(s.example.origin,'original-wordorbit');assert.equal(s.example.reviewed,true);
      assert.match(s.example.zh,/[\u4e00-\u9fff]/);assert.ok(containsTarget(word,s.example.en),word+': '+s.example.en);
      assert.ok(!sentences.has(s.example.en),'Repeated example: '+s.example.en);sentences.add(s.example.en);
      assert.doesNotMatch(s.example.en,/role of .* modern society|is an important word|study explored .*changing world/i);
      assert.match(s.source,/^https:\/\/(dictionary\.cambridge\.org|www\.collinsdictionary\.com|developer\.mozilla\.org|learn\.microsoft\.com|docs\.github\.com)\//);
      assert.ok(e.sources.includes(s.source));
    }
    for(const r of e.referenceOnly)assert.ok(r.terms.length&&r.decision&&r.reason&&e.sources.includes(r.source),word);
  }
  assert.equal(count,628);assert.equal(sentences.size,2288);
});

test('distinct uses, restricted constructions, technical sources and legacy corrections stay explicit',()=>{
  for(const[w,ids]of Object.entries({float:['buoyancy','drift','suggest','shares','currency','parade','cash','fishing'],scan:['search','read','digital','medical','metre'],application:['request','use','software','surface','effort'],medium:['middle','meat','communication','substance','art','spiritualist'],press:['push','iron','extract','urge','media','machine','publisher','crowd','continue'],bow:['weapon','knot','music','ship','respect','yield','bend'],stroke:['illness','mark','hit','movement','touch','event','time']}))for(const id of ids)assert.ok(get(w,id),w+':'+id);
  assert.equal(get('consist','parts').construction,'consist of');assert.equal(get('consist','essence').construction,'consist in');
  assert.match(get('specialise','expertise').source,/specialize$/);assert.match(pack.entries.organisation.senses[0].source,/organization$/);
  assert.match(get('wrap','text').source,/developer.mozilla.org/);assert.match(get('tile','screen').source,/learn.microsoft.com/);assert.match(get('fork','software').source,/docs.github.com/);
  for(const[w,term]of [['cream','乳酪'],['bulb','球茎'],['embryo','胎儿'],['mortal','临终的'],['orientation','向东方'],['scan','押韵'],['sentence','命题'],['mercury','使者']]){
    assert.ok(pack.entries[w].referenceOnly.some(r=>r.terms.includes(term)),w);
    assert.ok(!pack.entries[w].senses.some(s=>s.aliases.includes(term)),w);
  }
});

test('four disjoint 50-word batches target all 628 senses with fixed safe options and true tail retries',()=>{
  const words=entries.map(([word])=>({id:'b07-'+word,word})),byId=new Map(words.map(w=>[w.id,w])),done=[],before=JSON.stringify({words,entries});let goals=0;
  for(let n=0;n<4;n++){
    const batch=core.build(words,pack.entries,{date:'2026-11-05',completedIds:done,random:random(709+n*67)});
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
  assert.equal(goals,628);assert.equal(new Set(done).size,200);assert.equal(core.build(words,pack.entries,{date:'2026-11-05',completedIds:done}),null);
  assert.equal(JSON.stringify({words,entries}),before);
});

test('new cross-batch near equivalents are excluded and all seven batches load offline without UI activation',()=>{
  for(const[a,b]of [[get('sunshine','light'),get('sunlight','light')],[get('consult','reference'),get('reference','consult')],[get('liquid','substance'),get('fluid','substance')],[get('component','part'),get('assembly','unit')],[get('wrap','finish'),get('conclude','finish')],[get('express','communicate'),get('expression','show')],[get('fascinate','interest'),get('absorb','attention')],[get('influence','effect'),get('govern','determine')]])assert.equal(core.overlaps(a,b),true);
  const site=path.join(__dirname,'../src/VocabDesk/Website'),window={},context={window};vm.createContext(context);
  for(const f of ['sense-batch-03.js','sense-batch-04.js','sense-batch-05.js','sense-batch-06.js','sense-batch-07.js','sense-batch-08.js','sense-catalog.js'])vm.runInContext(fs.readFileSync(path.join(site,f),'utf8'),context);
  assert.equal(JSON.stringify(window.WORDORBIT_SENSE_CATALOG),JSON.stringify(pack));assert.equal(pack.publicationState,'editorial-development');
  assert.doesNotMatch(fs.readFileSync(path.join(site,'index.html'),'utf8'),/src=["'][^"']*sense-(?:batch|catalog|training)/);
});
