/* Positive study-history audit for an already-studied editorial batch.
 * Reuses the unseen auditor's ID/name reconciliation, without reading live profiles.
 * Evidence is written exclusively into ignored .build.
 */
const fs=require('node:fs'),path=require('node:path'),{auditSelection}=require('./Audit-SenseBatchSelection.cjs');
function auditLearnedSelection(progress,publicWords,entries,batch='16',expectedCount=200){
 const base=auditSelection(progress,publicWords,entries,batch,expectedCount);
 const selected=Object.entries(entries).filter(([,e])=>e.batch===batch).map(([word])=>word);
 const {alreadySeen,...rest}=base,notPreviouslySeen=selected.filter(w=>!alreadySeen.includes(w));
 return {...rest,selectionStatus:'learned',learnedMatches:alreadySeen,notPreviouslySeen,passed:selected.length===expectedCount&&base.uniqueCount===expectedCount&&!base.missing.length&&!base.notInExport.length&&!notPreviouslySeen.length};
}
module.exports={auditLearnedSelection};
if(require.main===module){
 const option=(name,fallback)=>{const i=process.argv.indexOf(name);if(i<0)return fallback;if(!process.argv[i+1]||process.argv[i+1].startsWith('--'))throw Error('Missing '+name);return process.argv[i+1];};
 const file=option('--progress',null);if(!file)throw Error('Specify an authorized export with --progress.');
 const root=path.resolve(__dirname,'..'),progress=JSON.parse(fs.readFileSync(path.resolve(file),'utf8')),pub=JSON.parse(fs.readFileSync(path.join(root,'.build/vocabulary-audit-catalog.json'),'utf8')),pack=require('../src/VocabDesk/Website/sense-catalog.js');
 const result=auditLearnedSelection(progress,pub,pack.entries,option('--batch','16'),Number(option('--count','200')));
 fs.mkdirSync(path.join(root,'.build'),{recursive:true});fs.writeFileSync(path.join(root,'.build/sense-learned-selection-'+result.batch+'-check-private.json'),JSON.stringify(result,null,2));
 console.log(JSON.stringify({batch:result.batch,selected:result.selectedCount,learned:result.learnedMatches.length,notPreviouslySeen:result.notPreviouslySeen.length,missing:result.missing.length,notInExport:result.notInExport.length,passed:result.passed}));if(!result.passed)process.exitCode=1;
}
