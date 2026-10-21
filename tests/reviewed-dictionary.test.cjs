const assert=require('node:assert/strict'),test=require('node:test'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
const file=path.resolve(__dirname,'../src/VocabDesk/Website/reviewed-dictionary.js'),glossary=require(file);
const expected='facilitate jeopardise equal fertilise situate ripen wither enzyme undermine elephant prey flyby enable inspire dividend diagonal sphere acidification compulsory consult submit advanced condense hydraulic transform adapt alienate version collect indoors recycle lubricate sweeten fix outward assembly submerge aboard due immigrate populate outlook prospect enrich expand instalment prompt payment pay obligation reject reconcile own opponent frighten rival humiliate promise herald couple marry accustom revive amaze astonish annoy bewilder astound terrify reassure saturate disable paralyse transplant refresh refreshing negligible exhilarate rejoice satisfy promising grieve disappoint discourage unpleasant vex harass confuse embarrass preceding precede counterbalance conform detach eco-friendly expose former isolate mesmerise oversee ox sideways'.split(' ');
test('102 个待核验词及两个英式拼写引用词均有离线释义、词性、音标和来源',()=>{
 assert.equal(glossary.count,104);assert.deepEqual(Object.keys(glossary.entries).sort(),[...expected,'hybridise','hybridisation'].sort());
 for(const [word,e] of Object.entries(glossary.entries)){
  assert.match(word,/^[a-z]+(?:-[a-z]+)*$/);assert.equal(e.reviewed,true);assert.ok(e.pos);assert.match(e.ipa,/^\/.+\/$/);assert.doesNotMatch(e.ipa,/[0-9\\]/);
  assert.match(e.meaning,/[\u4e00-\u9fff]/);assert.doesNotMatch(e.meaning,/待核验|DOS|命令行|<|>|[。！？!?]/);assert.ok(e.meaning.length<=180);
  assert.ok(e.sourceUrl.startsWith('https://dictionary.cambridge.org/')||e.sourceUrl.startsWith('https://www.collinsdictionary.com/'));
 }
 assert.match(glossary.entries.flyby.meaning,/近距飞掠/);assert.match(glossary.entries.instalment.meaning,/一期款/);assert.match(glossary.entries.instalment.meaning,/连载/);
 assert.equal(glossary.entries.enzyme.meaning,'酶');assert.equal(glossary.entries.jeopardise.ipa,'/ˈdʒepədaɪz/');assert.equal(glossary.entries.fertilise.ipa,'/ˈfɜːtɪlaɪz/');
});
test('词典覆盖加载幂等，保留其它离线词条，不依赖联网或学习存储',()=>{
 const existing={meaning:'保留的测试词'},window={EXTERNAL_VOCAB:{synthetic:existing}},sandbox={window};vm.createContext(sandbox);
 vm.runInContext(fs.readFileSync(file,'utf8'),sandbox);vm.runInContext(fs.readFileSync(file,'utf8'),sandbox);
 assert.equal(window.EXTERNAL_VOCAB.synthetic,existing);assert.equal(window.REVIEWED_DICTIONARY.count,104);assert.equal(Object.keys(window.EXTERNAL_VOCAB).length,105);
 assert.equal(window.EXTERNAL_VOCAB['eco-friendly'].meaning,glossary.entries['eco-friendly'].meaning);
});
