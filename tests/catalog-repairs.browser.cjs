/* Bundled language data and synthetic history only; no personal browser profile. */
const assert=require('node:assert/strict'),path=require('node:path'),{pathToFileURL}=require('node:url'),{chromium}=require('playwright');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage({reducedMotion:'reduce'}),errors=[],network=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(/^https?:/.test(r.url()))network.push(r.url())});
  await page.goto(pathToFileURL(path.resolve(__dirname,'../src/VocabDesk/Website/index.html')).href+'?desktop=1');await page.waitForFunction(()=>window.WordOrbitMyWords&&window.CATALOG_REPAIRS);
  const summary=await page.evaluate(()=>{
   const formal=qEligibleWords(),bad=formal.filter(w=>!/^\/.+\/$/.test(w.ipa)||/[0-9\\^\u0400-\u04ff\u4e00-\u9fff]|[ɒə]ː|^\/\./.test(w.ipa)||!w.pos);
   return {total:state.words.length,formal:formal.length,review:state.words.filter(qReview).map(w=>w.word),bad:bad.map(w=>w.word),whole:wholeBookWords().length};
  });
  assert.deepEqual(summary,{total:4248,formal:4247,review:['revoltive'],bad:[],whole:4247});
  // Every formal entry must support four unique, current choices in both directions.
  for(let offset=0;offset<summary.formal;offset+=250){const bad=await page.evaluate(({offset})=>{
   const all=qEligibleWords(),meanings=new Set(all.map(qFullMeaning)),words=new Set(all.map(w=>w.word)),fail=[];
   for(const w of all.slice(offset,offset+250))for(const reverse of [false,true]){
    const options=makeOptions(w,reverse),allowed=reverse?words:meanings;
    if(options.length!==4||new Set(options).size!==4||!options.includes(reverse?w.word:qFullMeaning(w))||options.some(o=>!allowed.has(o)))fail.push(w.word);
   }return fail;
  },{offset});assert.deepEqual(bad,[]);}
  const migration=await page.evaluate(()=>{
   const pill=state.words.find(w=>w.word==='pill');
   state.words.push({...pill,id:'ocr-pil',word:'pil',source:'ocr',meaning:'丸剂旧译',fullMeaning:'丸剂旧译',notes:'Synthetic old note',tags:['synthetic']});
   state.records[pill.id]={seen:7,correct:5,wrong:2,level:3,due:2000,lastSeen:3000};state.records['ocr-pil']={seen:4,correct:2,wrong:2,level:1,due:1000,lastSeen:4000};
   state.favorites=[pill.id,'ocr-pil'];state.attempts=[{wordId:'ocr-pil',correct:false,time:111},{wordId:pill.id,correct:true,time:222}];
   const mall=state.words.find(w=>w.word==='mall');mall.meaning='旧版购物释义';mall.fullMeaning=mall.meaning;
   const pack=w=>({wordId:w.id,variant:0,status:'pending',attempts:0,selected:null,checked:false,optionKind:'single',options:['旧版购物释义','错误残片','甲','乙']});
   state.lastSession=qNewSession([pack(mall),{...pack(mall),checked:true,status:'correct',selected:'旧版购物释义'}],'single');save();
   return {pillId:pill.id,mallId:mall.id};
  });
  await page.reload();await page.waitForFunction(()=>window.CATALOG_REPAIRS&&window.WordOrbitMyWords);
  const check=await page.evaluate(({pillId,mallId})=>{
   const pill=state.words.find(w=>w.id===pillId),mall=state.words.find(w=>w.id===mallId);
   session=state.lastSession;session.index=0;session.type='single';showView('practice');renderQuestion();
   const before=session.queue[0].options.slice();session.queue[0].selected=before[0];renderAnswerArea(mall,session.queue[0]);const stable=JSON.stringify(before)===JSON.stringify(session.queue[0].options);
   const pendingOK=session.queue[0].options.includes(qFullMeaning(mall));session.index=1;renderQuestion();
   const attemptsBefore=state.attempts.length;checkAnswer();
   return {record:state.records[pillId],oldRecord:state.records['ocr-pil']||null,favorites:state.favorites,attempts:state.attempts.map(a=>a.wordId),old:state.words.some(w=>w.word==='pil'),notes:pill.notes,tags:pill.tags,alias:state.catalogAliases['ocr-pil'],pendingOK,stable,checkedOK:session.queue[1].options.includes(qFullMeaning(mall)),recounted:state.attempts.length!==attemptsBefore};
  },migration);
  assert.equal(check.record.seen,11);assert.equal(check.record.correct,7);assert.equal(check.record.wrong,4);assert.equal(check.record.level,3);assert.equal(check.record.due,1000);assert.equal(check.record.lastSeen,4000);
  assert.equal(check.oldRecord,null);assert.deepEqual(check.favorites,[migration.pillId]);assert.deepEqual(check.attempts,[migration.pillId,migration.pillId]);assert.equal(check.old,false);assert.ok(check.notes.includes('Synthetic old note'));assert.ok(check.tags.includes('synthetic'));assert.equal(check.alias,migration.pillId);
  assert.equal(check.pendingOK,true);assert.equal(check.stable,true);assert.equal(check.checkedOK,true);assert.equal(check.recounted,false);
  await page.reload();await page.waitForFunction(()=>window.CATALOG_REPAIRS);assert.equal(await page.evaluate(id=>state.records[id].seen,migration.pillId),11,'Repeated upgrade cannot double-count merged history');
  await page.evaluate(()=>{const w=state.words.find(w=>w.word==='record');session=qNewSession([{wordId:w.id,variant:1,checked:false,selected:null,status:'pending',attempts:0}],'reverse');showView('practice');renderQuestion()});
  assert.equal(await page.locator('#questionContext .ipa-badge').count(),0);assert.equal(await page.locator('.answer-pronunciation').count(),0);
  await page.evaluate(()=>{currentItem().selected=currentWord().word;checkAnswer()});assert.equal(await page.locator('#questionContext .ipa-badge').count(),1);assert.ok((await page.locator('.answer-pronunciation').textContent()).includes('ˈrekɔːd'));
  await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),true);
  assert.deepEqual(errors,[]);assert.deepEqual(network,[]);console.log(JSON.stringify({passed:true,...summary,allBidirectionalOptions:true,duplicateHistoryMerged:true,savedOptionsUpgraded:true,offline:true}));
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
