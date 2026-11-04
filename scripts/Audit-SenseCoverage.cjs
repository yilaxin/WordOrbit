/* Read only the captured public catalog, never a user's learning profile.
 * Candidate fragments are an editorial worklist, NOT certified senses or quiz options.
 */
const fs=require('node:fs'),path=require('node:path'),root=path.resolve(__dirname,'..');
const core=require('../src/VocabDesk/Website/sense-training-core.js'),pack=require('../src/VocabDesk/Website/sense-catalog.js');
const rows=JSON.parse(fs.readFileSync(path.join(root,'.build/vocabulary-audit-catalog.json'),'utf8')).filter(w=>w.formal);
const entries=rows.map(w=>({id:w.id,word:w.word,pos:w.pos,fullMeaning:w.meaning,candidateFragments:[...new Set(w.meaning.split(/[；;]/).map(s=>s.trim()).filter(Boolean))],reviewed:false,complete:false}));
const catalog=pack.entries,audit=core.audit(rows,catalog),reviewed=entries.filter(w=>catalog[w.word]);
const trace=reviewed.map(w=>({word:w.word,batch:catalog[w.word].batch,fullMeaning:w.fullMeaning,ready:core.validateEntry(catalog[w.word]),pendingReview:catalog[w.word].pendingReview||null,fragments:w.candidateFragments.map(text=>({text,senseIds:catalog[w.word].senses.filter(s=>s.aliases.includes(text)).map(s=>s.id),referenceOnly:catalog[w.word].referenceOnly.filter(r=>r.terms.includes(text)).map(r=>({decision:r.decision,reason:r.reason,source:r.source}))}))}));
const unmapped=trace.flatMap(w=>w.fragments.filter(f=>!f.senseIds.length&&!f.referenceOnly.length).map(f=>({word:w.word,text:f.text})));
const unresolved=reviewed.flatMap(w=>(catalog[w.word].unresolvedReferences||[]).map(text=>({word:w.word,text})));
const catalogWordsMissingFromFormal=Object.keys(catalog).filter(word=>!rows.some(w=>w.word===word));
const readyEntries=reviewed.filter(w=>core.validateEntry(catalog[w.word]));
const summary={formalWords:entries.length,structuredReviewedWords:reviewed.length,trainingReadyWords:audit.ready,trainingReadySenseGroups:readyEntries.reduce((n,w)=>n+catalog[w.word].senses.length,0),partialReviewWords:reviewed.length-audit.ready,notYetStructured:entries.length-reviewed.length,reviewedSenseGroups:reviewed.reduce((n,w)=>n+catalog[w.word].senses.length,0),reviewedExamples:reviewed.reduce((n,w)=>n+catalog[w.word].senses.filter(s=>s.example?.reviewed).length,0),unresolvedLegacyFragments:unresolved.length,unmappedReviewedFragments:unmapped.length,catalogWordsMissingFromFormal:catalogWordsMissingFromFormal.length,multipleFragmentWords:entries.filter(w=>w.candidateFragments.length>1).length,singleFragmentWords:entries.filter(w=>w.candidateFragments.length===1).length,candidateFragments:entries.reduce((n,w)=>n+w.candidateFragments.length,0),note:'Structured review and training readiness are separate. Reference-only fragments are not silently deleted or certified as learning senses. Desktop integration is not enabled.'};
const folder=path.join(root,'.build');fs.mkdirSync(folder,{recursive:true});fs.writeFileSync(path.join(folder,'sense-editorial-worklist.json'),JSON.stringify({summary,entries},null,2));console.log(JSON.stringify(summary,null,2));
fs.writeFileSync(path.join(folder,'sense-editorial-trace.json'),JSON.stringify({summary,trace,unmapped,unresolved,catalogWordsMissingFromFormal},null,2));
function render(items,title){
  const lines=['# '+title,'','开发资料，尚未接入正式桌面训练；已审核范围不等于穷尽词典或全书覆盖。',''];
  for(const [word,entry]of items){
    lines.push('## '+word+'（批次 '+entry.batch+'）','',entry.complete?'已通过本批声明学习范围检查。':'整词仍待核对：'+entry.pendingReview,'');
    if(entry.groupingNote||entry.editorialNote)lines.push(entry.groupingNote||entry.editorialNote,'');
    for(const sense of entry.senses){lines.push('### '+sense.id+' · '+sense.pos+' · '+sense.label,'',...(sense.construction?['搭配：'+sense.construction,'']:[]),sense.example.en,'',sense.example.zh,'','词义核对来源：'+sense.source,'','例句：WordOrbit 原创，非词典例句摘录。','');}
    for(const r of entry.referenceOnly)lines.push('参考保留（'+r.decision+'）：'+r.terms.join('；')+'。'+r.reason,'','核对条目：'+r.source,'');
  }
  return lines.join('\n');
}
fs.writeFileSync(path.join(folder,'sense-editorial-review.md'),render(Object.entries(catalog),'累计义项与原创例句核对单'));
for(const batch of pack.batches){
  const items=Object.entries(catalog).filter(([,e])=>e.batch===batch),batchTrace=trace.filter(w=>w.batch===batch);
  fs.writeFileSync(path.join(folder,'sense-batch-'+batch+'-review.md'),render(items,'批次 '+batch+' 义项与原创例句核对单'));
  fs.writeFileSync(path.join(folder,'sense-batch-'+batch+'-trace.json'),JSON.stringify({batch,trace:batchTrace,unmapped:unmapped.filter(w=>catalog[w.word].batch===batch),unresolved:unresolved.filter(w=>catalog[w.word].batch===batch)},null,2));
}
// A broken mapping is a failing audit, not a successful report with hidden gaps.
if(unmapped.length||catalogWordsMissingFromFormal.length)process.exitCode=1;
