/* Read a user-authorized export only. Never open or mutate a live study profile.
 * Learner-specific evidence goes exclusively into ignored .build, never public docs.
 * Usage: node scripts/Audit-SenseBatchSelection.cjs --progress <local-export.json> --batch 04 --count 200
 */
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),pack=require('../src/VocabDesk/Website/sense-catalog.js');
function auditSelection(progress,publicWords,entries,batch='03',expectedCount=100){
  if(!/^\d{2}$/.test(batch)||!Number.isInteger(expectedCount)||expectedCount<1||expectedCount>1000)throw Error('Specify a two-digit batch and an expected count between 1 and 1000.');
  if(!progress||!Array.isArray(progress.words)||!progress.words.length||!progress.records||Array.isArray(progress.records)||typeof progress.records!=='object'||!Array.isArray(progress.attempts)||!Number.isFinite(Date.parse(progress.exportedAt)))throw Error('A complete dated study export is required; missing progress is not proof that words are unseen.');
  const normalize=w=>String(w||'').trim().toLowerCase(),touchedIds=new Set();
  for(const [id,r]of Object.entries(progress.records))if(r&&((r.seen||0)>0||(r.correct||0)>0||(r.wrong||0)>0||r.lastSeen))touchedIds.add(id);
  for(const a of progress.attempts){if(a?.id)touchedIds.add(a.id);if(a?.wordId)touchedIds.add(a.wordId);}
  for(const id of Object.keys(progress.senseStudy?.completed||{}))touchedIds.add(id);
  const touchedNames=new Set([...progress.words,...publicWords].filter(w=>touchedIds.has(w.id)).map(w=>normalize(w.word)));
  const selected=Object.entries(entries).filter(([,e])=>e.batch===batch).map(([word])=>word);
  const missing=[],alreadySeen=[],notInExport=[];
  for(const word of selected){
    const matches=publicWords.filter(w=>normalize(w.word)===word&&w.formal);
    if(!matches.length)missing.push(word);
    if(!progress.words.some(w=>normalize(w.word)===word))notInExport.push(word);
    if(touchedNames.has(word)||matches.some(w=>touchedIds.has(w.id)))alreadySeen.push(word);
  }
  return {batch,expectedCount,progressExportedAt:progress.exportedAt,selectedCount:selected.length,uniqueCount:new Set(selected).size,missing,alreadySeen,notInExport,passed:selected.length===expectedCount&&new Set(selected).size===expectedCount&&!missing.length&&!alreadySeen.length&&!notInExport.length};
}
module.exports={auditSelection};
if(require.main===module){
  const index=process.argv.indexOf('--progress');if(index<0||!process.argv[index+1])throw Error('Specify an authorized local export with --progress.');
  const progress=JSON.parse(fs.readFileSync(path.resolve(process.argv[index+1]),'utf8'));
  const publicWords=JSON.parse(fs.readFileSync(path.join(root,'.build/vocabulary-audit-catalog.json'),'utf8'));
  const option=(name,fallback)=>{const i=process.argv.indexOf(name);if(i<0)return fallback;if(!process.argv[i+1]||process.argv[i+1].startsWith('--'))throw Error('Missing value for '+name);return process.argv[i+1];};
  const result=auditSelection(progress,publicWords,pack.entries,option('--batch','03'),Number(option('--count','100')));
  fs.mkdirSync(path.join(root,'.build'),{recursive:true});
  fs.writeFileSync(path.join(root,'.build/sense-selection-'+result.batch+'-check-private.json'),JSON.stringify(result,null,2));
  console.log(JSON.stringify({batch:result.batch,selected:result.selectedCount,alreadySeen:result.alreadySeen.length,missing:result.missing.length,notInExport:result.notInExport.length,passed:result.passed}));
  if(!result.passed)process.exitCode=1;
}
