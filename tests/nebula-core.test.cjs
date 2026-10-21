const test=require('node:test'),assert=require('node:assert/strict');
const C=require('../src/VocabDesk/Website/nebula-core.js');
const article=()=>C.cleanArticle({id:'neb-test-article',title:'A synthetic test',body:'The planet follows a stable orbit. Scientists study the planet.'});
test('bounded pages reconstruct all text and offsets, including unbroken tokens',()=>{
 for(const body of ['A word. '.repeat(14000),'a'.repeat(100000),'A\nB\n\nC']){
  const pages=C.pages(body);assert.equal(pages.map(p=>p.text).join(''),body);let offset=0;
  for(const p of pages){assert.equal(p.offset,offset);assert.ok(p.text.length<=4600);offset+=p.text.length;}
 }
});
test('case-insensitive full-word masking, punctuation escape and context',()=>{
 assert.equal(C.mask('Planet and planet, not planetary.','planet'),'________ and ________, not planetary.');
 assert.equal(C.mask('Her mother-in-law agreed.','mother-in-law'),'Her ________ agreed.');
 assert.equal(C.mask("It's Ada's book.","Ada's"),"It's ________ book.");
 const text='First sentence. The planet is bright! Next sentence.';assert.equal(C.sentence(text,20,26),'The planet is bright!');
 assert.ok(C.candidates('studies').includes('study'));assert.ok(C.candidates('running').includes('run'));assert.ok(C.candidates('went').includes('go'));
});
test('manual/import validation bounds and strips untrusted exercise queues',()=>{
 assert.throws(()=>C.cleanArticle({id:'x',title:'a',body:'A body'}));
 assert.throws(()=>C.cleanArticle({id:'valid-id',title:'a',body:'全中文'}));
 assert.throws(()=>C.cleanArticle({id:'valid-id',title:'a',body:'a'.repeat(100001)}));
 const a=C.cleanArticle({...article(),round:{queue:[{}]},readPages:[0,0,999,-1],vocab:{planet:{word:'planet',meaning:'行星',level:999},bad:{word:'bad',meaning:''}}});
 assert.equal(a.round,null);assert.deepEqual(a.readPages,[0]);assert.equal(Object.keys(a.vocab).length,1);assert.equal(a.vocab.planet.level,4);
 const fractional=C.cleanArticle({...a,page:.5,vocab:{planet:{...a.vocab.planet,level:2.5,seen:Infinity}},updatedAt:'not-a-date'});assert.equal(fractional.page,0);assert.equal(fractional.vocab.planet.level,2);assert.ok(Number.isFinite(fractional.vocab.planet.seen));assert.ok(Number.isFinite(Date.parse(fractional.updatedAt)));
});
test('personal training hides no unknown answers in a fake sentence and appends mistakes',()=>{
 const a=article();a.vocab.planet={word:'planet',surface:'planet',meaning:'行星',context:'The planet follows a stable orbit.',level:0,seen:0,correct:0,wrong:0,due:null};
 a.round=C.newRound(a,'fill','due',20);assert.equal(a.round.queue[0].mode,'fill');
 assert.equal(C.grade(a,'wrong').correct,false);assert.equal(a.round.queue.length,2);assert.equal(a.round.queue[1].redo,true);assert.equal(a.vocab.planet.wrong,1);
 assert.equal(C.grade(a,'planet'),null,'one submission per question');a.round.index++;
 assert.equal(C.grade(a,'PLANET').correct,true);assert.equal(a.vocab.planet.correct,1);assert.equal(a.vocab.planet.level,1);
 assert.equal(C.summary(a).mastered,0,'clicking / one correct answer is not mastered');
 assert.equal(C.newRound(a,'mixed','due',20),null,'future-due words excluded');
 a.vocab.planet.context='No matching sentence.';a.round=C.newRound(a,'fill','all',20);assert.equal(a.round.queue[0].mode,'recall');
});
