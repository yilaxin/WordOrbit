/* Read-only inspection of the public bundled catalog in a disposable browser.
 * Reports go under ignored .build; never reads the user's WebView2 profile.
 */
const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const root=path.resolve(__dirname,'..');
async function capture(){
 const {chromium}=require('playwright'),browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{const page=await browser.newPage({reducedMotion:'reduce'});await page.goto(pathToFileURL(path.join(root,'src/VocabDesk/Website/index.html')).href+'?desktop=1');
  await page.waitForFunction(()=>window.REVIEWED_DICTIONARY&&state.words.length>4000);
  return await page.evaluate(()=>state.words.map(w=>({id:w.id,word:w.word,meaning:qFullMeaning(w),ipa:w.ipa||'',pos:w.pos||'',chapter:w.chapter,page:w.source_page,formal:qVerified(w),referenceOnly:!!w.referenceOnly})));
 }finally{await browser.close();}
}
function inspect(rows){
 const checks={
  missingIpa:w=>!w.ipa||/待核验|^—$/.test(w.ipa),
  malformedIpa:w=>w.ipa&&!/待核验|^—$/.test(w.ipa)&&(!/^\/.+\/$/.test(w.ipa)||/[0-9\\^<>\[\]{}\u4e00-\u9fff]/.test(w.ipa)),
  legacyVowels:w=>/[ɒə]ː/.test(w.ipa),
  legacyStress:w=>/[',]|^\/\./.test(w.ipa),
  quotedReference:w=>/[<>]|\b(?:DOS|Windows|MS-DOS)\b|命令|缩写|过去式|过去分词|第三人称|现在分词|=\s*[a-z]/i.test(w.meaning),
  suspectMeaning:w=>/待核验|[。！？!?]|^abbr\.|[A-Za-z]{3}|[=<>]|自动.*(?:程序|技术)|系统.*语言|协议|计算机.*(?:技术|程序)|\bDOS\b/i.test(w.meaning),
  missingPos:w=>!w.pos||/待核验/.test(w.pos),
 };
 const groups=Object.fromEntries(Object.entries(checks).map(([key,check])=>[key,rows.filter(check)]));
 return {total:rows.length,formal:rows.filter(w=>w.formal).length,counts:Object.fromEntries(Object.entries(groups).map(([k,v])=>[k,v.length])),formalCounts:Object.fromEntries(Object.entries(groups).map(([k,v])=>[k,v.filter(w=>w.formal).length])),groups};
}
module.exports={inspect};
if(require.main===module)(async()=>{const folder=path.join(root,'.build');fs.mkdirSync(folder,{recursive:true});const rows=process.argv.includes('--saved')?JSON.parse(fs.readFileSync(path.join(folder,'vocabulary-audit-catalog.json'),'utf8')):await capture();
 const report=inspect(rows);if(!process.argv.includes('--saved'))fs.writeFileSync(path.join(folder,'vocabulary-audit-catalog.json'),JSON.stringify(rows,null,2));fs.writeFileSync(path.join(folder,'vocabulary-audit-report.json'),JSON.stringify(report,null,2));
 console.log(JSON.stringify({total:report.total,formal:report.formal,counts:report.counts,formalCounts:report.formalCounts}));const selected=process.argv.find(a=>a.startsWith('--group='));if(selected)console.log(JSON.stringify(report.groups[selected.slice(8)]||[],null,2));
})().catch(error=>{console.error(error);process.exit(1)});
