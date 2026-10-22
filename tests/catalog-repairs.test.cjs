const test=require('node:test'),assert=require('node:assert/strict');
const repairs=require('../src/VocabDesk/Website/catalog-repairs.js');
test('offline overlay is repeatable and does not mark the book doubt as verified',()=>{
 const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
 const source=fs.readFileSync(path.resolve(__dirname,'../src/VocabDesk/Website/catalog-repairs.js'),'utf8');
 const context={window:{EXTERNAL_VOCAB:{orbit:{meaning:'Existing unrelated entry'},coed:{meaning:'Old gloss'}}}};
 vm.createContext(context);vm.runInContext(source,context);const first=JSON.stringify(context.window.EXTERNAL_VOCAB);vm.runInContext(source,context);
 assert.equal(JSON.stringify(context.window.EXTERNAL_VOCAB),first);assert.equal(context.window.EXTERNAL_VOCAB.orbit.meaning,'Existing unrelated entry');
 assert.equal(context.window.EXTERNAL_VOCAB.revoltive.reviewed,false);assert.equal(context.window.EXTERNAL_VOCAB.revoltive.reviewedIpa,false);
 assert.equal(context.window.EXTERNAL_VOCAB.coed.ipa,'/ˌkəʊˈed/');
});
test('whole-catalog corrections have source references, real glosses and well-formed IPA',()=>{
 assert.equal(repairs.meaningCount,153);assert.equal(repairs.ipaCount,596);
 for(const [word,e]of Object.entries(repairs.entries)){
  if(e.reviewedMeaning){assert.ok(e.meaningSourceUrl?.startsWith('https://'),word);assert.match(e.meaning,/[\u4e00-\u9fff]/);assert.ok(e.pos);assert.doesNotMatch(e.meaning,/DOS|Windows|网络命令|interj\./);}
  if(e.ipa&&!e.referenceOnly){assert.match(e.ipa,/^\/.+\/$/,word);assert.doesNotMatch(e.ipa,/[0-9\\^\u0400-\u04ff\u4e00-\u9fff]|[ɒə]ː/,word);assert.ok(e.pronunciationSourceUrl?.startsWith('https://'),word);}
 }
 assert.equal(repairs.entries.coed.ipa,'/ˌkəʊˈed/');assert.equal(repairs.entries.alumni.ipa,'/əˈlʌmnaɪ/');
 assert.ok(repairs.entries.mall.meaning.includes('购物中心'));assert.ok(repairs.entries.discipline.meaning.includes('学科'));
 assert.equal(repairs.entries.revoltive.referenceOnly,true);assert.equal(repairs.entries.revoltive.ipa,'—');
 assert.ok(repairs.entries.record.pronunciationNote.includes('ˈrekɔːd'));
});
