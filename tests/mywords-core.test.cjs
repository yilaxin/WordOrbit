const test=require('node:test'),assert=require('node:assert/strict'),C=require('../src/VocabDesk/Website/mywords-core.js');
const word=(name,meaning)=>C.clean({word:name,meaning});
const fallback=[{word:'forest',meaning:'森林；林区'},{word:'justice',meaning:'正义；公正'},{word:'shelter',meaning:'庇护；遮蔽'},{word:'route',meaning:'路线；路径'}];
test('private entry normalization supports phrases, full meanings and bounded records',()=>{
 const w=C.clean({word:'  Take  into account ',meaning:'考虑到；把……计算在内',record:{level:2.8,seen:Infinity,due:'bad'}});assert.equal(w.id,'take into account');assert.equal(w.word,'Take into account');assert.equal(w.meaning,'考虑到；把……计算在内');assert.equal(w.record.level,2);assert.ok(Number.isFinite(w.record.seen));assert.equal(w.record.due,null);
 assert.equal(C.key('CHILD’S'),'child\'s');assert.equal(C.eligible(word('hydrogen','氢')),true);assert.equal(C.eligible(word('qaxvex','')),false);assert.equal(C.eligible(word('qaxvex','释义待核验')),false);
 assert.equal(word('cafe\u0301','咖啡馆').id,'café');assert.equal(C.validWord('naïve'),true);
 for(const name of ['<script>','https://test.com','中文','a'.repeat(101),'one two three four five six seven eight nine'])assert.throws(()=>word(name,'测试'));
 assert.throws(()=>word('orbit','中'.repeat(1001)));
});
test('bulk paste accepts plain words, tab columns, pipes and Chinese senses without splitting semicolons',()=>{
 const rows=C.parseBatch('orbit\nresilient | 有韧性的；能恢复的 | adj. | /rɪˈzɪliənt/\nadapt\t适应；改编\tv.\t/əˈdæpt/\ntake into account 考虑到\nqaxvex\nORBIT | 不覆盖\n<script>',[word('adapt','原有释义')],name=>name==='orbit'?{meaning:'轨道；绕行',ipa:'/ˈɔːbɪt/'}:null);
 assert.deepEqual(rows.map(r=>r.status),['ready','ready','duplicate','ready','pending','duplicate','invalid']);assert.equal(rows[1].entry.meaning,'有韧性的；能恢复的');assert.equal(rows[1].entry.ipa,'/rɪˈzɪliənt/');assert.equal(rows[3].entry.word,'take into account');
 assert.throws(()=>C.parseBatch('orbit\n'.repeat(1001)));assert.throws(()=>C.parseBatch('a'.repeat(100001)));
});
test('questions use four unique real entries, keep complete meanings and stable options',()=>{
 const w=word('orbit','轨道；常轨；眼眶；绕轨道运行'),r=C.newRound([w],{mode:'reverse',scope:'all'},[...fallback,{word:'ORBIT',meaning:'轨道'},{word:'another',meaning:w.meaning}]);
 assert.equal(r.baseCount,1);assert.equal(r.queue[0].mode,'reverse');assert.equal(r.queue[0].meaning,w.meaning);assert.equal(r.queue[0].options.length,4);assert.equal(new Set(r.queue[0].options.map(o=>C.key(o.word))).size,4);assert.equal(new Set(r.queue[0].options.map(o=>o.meaning)).size,4);
 const choices=JSON.stringify(r.queue[0].options);r.queue[0].selected=0;r.queue[0].selected=2;assert.equal(JSON.stringify(r.queue[0].options),choices);
 assert.throws(()=>C.newRound([word('unknown','')],{},fallback));assert.throws(()=>C.newRound([w],{},[]));
});
test('mistakes append to the tail, grading is idempotent and records are independent',()=>{
 const entries=[word('orbit','轨道；绕行')],r=C.newRound(entries,{scope:'all'},fallback),q=r.queue[0];q.selected=q.options.findIndex(o=>o.word!=='orbit');assert.ok(C.grade(entries,r,fallback));assert.equal(r.queue.length,2);assert.equal(r.queue[1].redo,true);assert.equal(entries[0].record.wrong,1);assert.equal(C.grade(entries,r,fallback),null);
 r.index=1;r.queue[1].selected=r.queue[1].options.findIndex(o=>o.word==='orbit');C.grade(entries,r,fallback);assert.equal(entries[0].record.correct,1);assert.equal(entries[0].record.level,1);assert.equal(C.summary(entries).done,0);assert.equal(C.due(entries[0]),false);
 assert.throws(()=>C.newRound(entries,{scope:'due'},fallback));for(let i=0;i<2;i++){const round=C.newRound(entries,{scope:'all'},fallback);round.queue[0].selected=round.queue[0].options.findIndex(o=>o.word==='orbit');C.grade(entries,round,fallback);}assert.equal(C.summary(entries).done,1);
});
