/* Index only bundled public IDs. The input is produced by Audit-Vocabulary.cjs,
 * never a learner export. Rebuild after adding or revising an editorial batch. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),root=path.resolve(__dirname,'..');
const pack=require('../src/VocabDesk/Website/sense-catalog.js'),core=require('../src/VocabDesk/Website/sense-training-core.js');
const words=JSON.parse(fs.readFileSync(path.join(root,'.build/vocabulary-audit-catalog.json'),'utf8')).filter(w=>w.formal);
const scope={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'src/VocabDesk/Website/full-ocr-data.js'),'utf8'),scope);
const entries={};for(const [word,e]of Object.entries(pack.entries))if(core.validateEntry(e)){const w=words.find(w=>w.word===word);if(!w)throw Error('Missing formal public word '+word);const aliases=[...new Set(scope.window.FULL_OCR_WORDS.filter(row=>row.word.toLowerCase()===word&&row.id!==w.id).map(row=>row.id))];entries[word]={id:w.id,count:e.senses.length,...(aliases.length?{aliases}:{})};}
const index={version:1,catalogVersion:pack.version,words:Object.keys(entries).length,senses:Object.values(entries).reduce((n,e)=>n+e.count,0),entries};
fs.writeFileSync(path.join(root,'src/VocabDesk/Website/sense-ready-index.js'),'/* Generated public ID index; contains no learner state. */\nwindow.WordOrbitSenseIndex='+JSON.stringify(index)+';\n');
console.log({words:index.words,senses:index.senses});
