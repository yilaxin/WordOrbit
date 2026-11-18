const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const site=path.join(__dirname,'../src/VocabDesk/Website'),pack=require('../src/VocabDesk/Website/sense-catalog.js'),C=require('../src/VocabDesk/Website/sense-training-core.js'),S=require('../src/VocabDesk/Website/sense-study-state.js'),repairs=require('../src/VocabDesk/Website/catalog-repairs.js');
const batch=Object.entries(pack.entries).filter(([,e])=>e.batch==='25');
const ctx={window:{}};vm.createContext(ctx);for(let i=3;i<=25;i++)vm.runInContext(fs.readFileSync(path.join(site,'sense-batch-'+String(i).padStart(2,'0')+'.js'),'utf8'),ctx);for(const f of ['sense-completion-02.js','sense-catalog.js','sense-ready-index.js'])vm.runInContext(fs.readFileSync(path.join(site,f),'utf8'),ctx);const index=ctx.window.WordOrbitSenseIndex;

test('batch 25 ships all 4246 deduplicated formal words and all 10560 reviewed senses',()=>{
 assert.equal(pack.version,25);assert.equal(pack.batches.at(-1),'25');assert.equal(pack.reviewDate,'2026-11-18');assert.equal(Object.keys(pack.entries).length,4246);assert.equal(index.words,4246);assert.equal(index.senses,10560);assert.equal(JSON.stringify(ctx.window.WORDORBIT_SENSE_CATALOG),JSON.stringify(pack));
 assert.deepEqual(batch.map(([w])=>w),['primate','proliferate','sterility']);assert.equal(pack.entries.nino,undefined);
 for(const name of ['sense-study.js','service-worker.js'])assert.match(fs.readFileSync(path.join(site,name),'utf8'),/'23','24','25'/);
});
test('ten original bilingual examples complete the three genuine pending words without changing prior senses',()=>{
 const previous=Object.values(pack.entries).filter(e=>e.batch<'25').flatMap(e=>e.senses),examples=new Set(previous.map(s=>s.example.en));assert.equal(previous.length,10550);assert.equal(examples.size,10550);
 for(const[word,e]of batch){assert.equal(C.validateEntry(e),true,word);assert.equal(e.reviewDate,'2026-11-18');assert.equal(e.unresolvedReferences.length,0);for(const s of e.senses){assert.ok(!examples.has(s.example.en));examples.add(s.example.en);assert.match(s.example.en,new RegExp('\\b'+word,'i'));assert.match(s.example.zh,/[\u4e00-\u9fff]/);assert.equal(s.example.origin,'original-wordorbit');assert.equal(s.example.reviewed,true);assert.match(s.source,/^https:\/\/(www\.collinsdictionary\.com|www\.merriam-webster\.com)\//);}}
 assert.equal(examples.size,10560);assert.deepEqual(batch.map(([,e])=>e.senses.length),[3,3,4]);
});
test('the final three-word remainder exercises every sense with stable unambiguous options',()=>{
 const words=Object.entries(pack.entries).map(([word])=>({word,id:index.entries[word].id})),done=words.filter(w=>pack.entries[w.word].batch!=='25').map(w=>w.id),r=C.build(words,pack.entries,{date:'2026-11-18',completedIds:done,random:()=>0.38});assert.equal(r.targetIds.length,3);assert.equal(r.goals.length,10);assert.equal(r.queue.some(q=>q.kind==='recall'),false);for(let i=0;i<r.queue.length;i++)C.grade(r,i,r.queue[i].expected);assert.equal(C.progress(r).completed,true);assert.equal(C.progress(r).sensesDone,10);
 const another=C.build(words,pack.entries,{date:'2026-11-18',completedIds:[...done,...r.targetIds],random:()=>0.38});assert.equal(another,null);
});
test('source-checked pronunciations retain valid variants and distinguish church rank from all archbishops',()=>{
 assert.equal(repairs.entries.primate.ipa,'/ˈpraɪmeɪt/');assert.match(repairs.entries.primate.pronunciationNote,/ˈpraɪmɪt/);assert.match(pack.entries.primate.senses[1].construction,/ˈpraɪmət/);assert.match(pack.entries.primate.senses[1].label,/首席主教/);assert.equal(pack.entries.primate.senses[2].pos,'adj.');
 assert.equal(repairs.entries.proliferate.ipa,'/prəˈlɪfəˌreɪt/');assert.equal(repairs.entries.sterility.ipa,'/stɛˈrɪlɪtɪ/');assert.match(repairs.entries.sterility.pronunciationNote,/并非错误/);assert.equal(repairs.entries['el nino'].ipa,'/el ˈniːnjəʊ/');
 for(const w of ['primate','proliferate','sterility','el nino'])assert.equal(repairs.entries[w].reviewDate,'2026-11-18');
});
test('merged El Niño retains the old OCR ID while an uncorrected nino is never admitted',()=>{
 const e=index.entries['el nino'];assert.ok(e.aliases.includes('ocr-nino'));assert.equal(S.publicMatch({id:'ocr-nino',word:'el nino'},index),true);assert.equal(S.publicMatch({id:'ocr-nino',word:'nino'},index),false);
 assert.equal(S.eligible([{id:e.id,word:'el nino'},{id:'ocr-nino',word:'el nino'}],pack.entries,index).length,1);assert.equal(pack.entries['el nino'].senses.length,1);assert.match(pack.entries['el nino'].senses[0].example.en,/El Niño/);
});
test('biological and quantitative proliferation avoid ambiguous synonym distractors',()=>{
 for(const a of ['proliferate'])for(const b of ['multiply','mushroom','increase'])if(pack.entries[b])assert.ok(pack.entries[a].senses.some(s=>pack.entries[b].senses.some(t=>C.overlaps(s,t))),a+'/'+b);
 assert.equal(C.overlaps(pack.entries.primate.senses[0],pack.entries.proliferate.senses[0]),false);
});
