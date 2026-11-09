/* Isolated profiles and synthetic progress only. Never reads the real desktop profile. */
const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const context=await browser.newContext({reducedMotion:'reduce',viewport:{width:1440,height:1080}}),page=await context.newPage(),errors=[],network=[];
  page.on('pageerror',error=>errors.push(error.message));page.on('request',request=>{if(/^https?:/.test(request.url()))network.push(request.url());});
  const url=pathToFileURL(path.resolve(__dirname,'../src/VocabDesk/Website/index.html')).href+'?desktop=1';
  await page.goto(url);await page.waitForFunction(()=>window.WordOrbitSenseStudy&&state.words.length>4000);
  assert.deepEqual(await page.evaluate(()=>WordOrbitSenseStudy.snapshot()),{loaded:false,readyWords:2130,readySenses:5639,active:false});
  await page.screenshot({path:'.build/sense-study-home.png',fullPage:true});
  const before=await page.evaluate(()=>JSON.stringify({words:state.words,records:state.records,attempts:state.attempts,favorites:state.favorites,lastSession:state.lastSession}));
  const coverage=await page.evaluate(async()=>{await WordOrbitSenseStudy.ensure();return {ready:WordOrbitSenseState.eligible(state.words,WORDORBIT_SENSE_CATALOG.entries,WordOrbitSenseIndex).length,formal:qEligibleWords().length,partial:['branch','trunk','stem','field','range'].every(word=>!!WordOrbitSenseIndex.entries[word]),seed:qFullMeaning(state.words.find(w=>w.word==='seed'))};});
  assert.equal(coverage.ready,2130);assert.equal(coverage.formal,4247);assert.equal(coverage.partial,true);assert.match(coverage.seed,/去除.*籽/);
  assert.equal(await page.evaluate(()=>JSON.stringify({words:state.words,records:state.records,attempts:state.attempts,favorites:state.favorites,lastSession:state.lastSession})),before,'Loading public data must not rewrite learner records or catalog rows');
  await page.click('#senseBrowseButton');await page.fill('#searchInput','seed');await page.locator('.sense-library-details').first().click();
  await page.waitForSelector('.sense-answer-item');assert.ok(await page.locator('.sense-answer-item').count()>=9);
  assert.match(await page.locator('#wordTable').innerText(),/种子选手|去除/);
  await page.screenshot({path:'.build/sense-study-library.png',fullPage:true});
  await page.fill('#searchInput','cap');
  const capRow=page.locator('#wordTable .word-row').filter({has:page.locator('.word-main strong').filter({hasText:/^cap$/})});
  await capRow.locator('.sense-library-details').click();
  await capRow.locator('.sense-answer-item').nth(4).waitFor();
  assert.equal(await capRow.locator('.sense-answer-item').count(),5);
  assert.match(await capRow.innerText(),/限定（开支、收费等）/);
  assert.match(await capRow.innerText(),/capped annual parking charges/);
  await page.screenshot({path:'.build/sense11-cap-library.png',fullPage:true});
  await page.fill('#searchInput','import');
  const importRow=page.locator('#wordTable .word-row').filter({has:page.locator('.word-main strong').filter({hasText:/^import$/})});
  await importRow.locator('.sense-library-details').click();
  await importRow.locator('.sense-answer-item').nth(3).waitFor();
  assert.equal(await importRow.locator('.sense-answer-item').count(),4);
  assert.match(await importRow.innerText(),/含义；重要性/);
  assert.match(await importRow.innerText(),/import a list of names/);
  await page.screenshot({path:'.build/sense12-import-library.png',fullPage:true});
  await page.fill('#searchInput','scale');
  const scaleRow=page.locator('#wordTable .word-row').filter({has:page.locator('.word-main strong').filter({hasText:/^scale$/})});
  await scaleRow.locator('.sense-library-details').click();
  await scaleRow.locator('.sense-answer-item').nth(9).waitFor();
  assert.equal(await scaleRow.locator('.sense-answer-item').count(),10);
  assert.match(await scaleRow.innerText(),/比例尺/);assert.match(await scaleRow.innerText(),/Scale the fish before washing it/);
  await page.screenshot({path:'.build/sense13-scale-library.png',fullPage:true});
  await page.click('[data-view=home]');await page.click('[data-practice=senses]');assert.equal(await page.locator('#senseSetupNote').isVisible(),true);
  assert.equal(await page.locator('#countChoices').isVisible(),false);await page.click('#launchPracticeBtn');
  await page.waitForFunction(()=>session?.type==='senses'&&document.querySelectorAll('[data-sense-option]').length>0,null,{timeout:60000});
  const start=await page.evaluate(()=>({words:session.targetIds.length,goals:session.goals.length,base:session.baseLength,unique:new Set(session.targetIds).size,stages:session.queue.map(q=>q.stage),valid:WordOrbitSenseState.validRound(session,state.words,WORDORBIT_SENSE_CATALOG.entries,WordOrbitSenseCore),theme:document.querySelector('#questionContext').textContent}));
  assert.equal(start.words,50);assert.equal(start.unique,50);assert.equal(start.valid,true);assert.ok(start.goals>=50&&start.base>100);assert.deepEqual(start.stages,[...start.stages].sort());assert.doesNotMatch(start.theme,/自然地理|学校教育|p\./);
  const options=await page.evaluate(()=>JSON.stringify(currentItem().options));
  const wrong=await page.evaluate(()=>currentItem().options.findIndex(o=>!o.correct));await page.keyboard.press(String(wrong+1));
  assert.equal(await page.evaluate(()=>JSON.stringify(currentItem().options)),options);await page.click('#nextQuestionBtn');
  const checked=await page.evaluate(()=>({queue:session.queue.length,base:session.baseLength,root:session.queue.at(-1).root,status:currentItem().status,id:currentItem().id,answers:session.answers,record:state.records[currentWord().id],round:JSON.stringify(session)}));
  assert.equal(checked.queue,checked.base+1);assert.equal(checked.root,checked.id);assert.equal(checked.status,'wrong');assert.equal(checked.answers,1);assert.equal(checked.record.level,0);
  assert.equal(await page.locator('.answer-option.correct').count(),1);assert.match(await page.locator('#explanation').innerText(),/末尾重做/);
  await page.reload();await page.waitForFunction(()=>window.WordOrbitSenseStudy&&state.lastSession?.type==='senses');await page.click('#continueBtn');
  await page.waitForFunction(()=>WordOrbitSenseStudy.snapshot().loaded&&document.querySelector('#explanation:not(.hidden)'),null,{timeout:60000});
  assert.equal(await page.evaluate(()=>JSON.stringify(session)),checked.round,'Resume must preserve the exact questions, grading and option order');
  await page.evaluate(()=>{session.index=session.queue.findIndex(q=>q.originalKind==='reverse');renderQuestion();});
  assert.equal(await page.locator('#questionContext .ipa-badge').count(),0);assert.equal(await page.locator('#speakBtn').isVisible(),false);
  await page.screenshot({path:'.build/sense-study-reverse.png',fullPage:true});
  const right=await page.evaluate(()=>currentItem().options.findIndex(o=>o.correct));await page.keyboard.press(String(right+1));await page.keyboard.press('Enter');
  assert.equal(await page.locator('#questionContext .ipa-badge').count(),1);assert.equal(await page.locator('#speakBtn').isVisible(),true);
  await page.evaluate(()=>{session.index=session.queue.findIndex(q=>q.originalKind==='multi'&&q.expected.length>1);renderQuestion();});
  const one=await page.evaluate(()=>currentItem().options.findIndex(o=>o.correct));await page.keyboard.press(String(one+1));await page.click('#nextQuestionBtn');
  assert.equal(await page.evaluate(()=>currentItem().status),'wrong');assert.match(await page.locator('#explanation').innerText(),/漏选/);
  await page.screenshot({path:'.build/sense-study-multi.png',fullPage:true});
  await page.setViewportSize({width:390,height:844});await page.click('#themeBtn');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'Narrow light-mode practice must not overflow horizontally');
  await page.screenshot({path:'.build/sense-study-mobile.png',fullPage:true});await page.click('#themeBtn');await page.setViewportSize({width:1440,height:1080});
  const downloadPromise=page.waitForEvent('download');await page.evaluate(()=>exportData());const download=await downloadPromise;await download.saveAs('.build/sense-study-export-synthetic.json');
  const payload=JSON.parse(fs.readFileSync('.build/sense-study-export-synthetic.json','utf8'));assert.equal(payload.schemaVersion,3);assert.equal(payload.senseSession.type,'senses');assert.equal(payload.senseStudy.version,1);
  await page.evaluate(()=>showView('stats'));page.once('dialog',dialog=>dialog.accept());await page.click('[data-clear-learning=all]');
  assert.equal(await page.evaluate(()=>state.attempts.length),0);assert.equal(await page.evaluate(()=>state.lastSession),null);assert.deepEqual(await page.evaluate(()=>state.senseStudy.completed),{});
  await page.evaluate(()=>showView('library'));await page.setInputFiles('#importFile','.build/sense-study-export-synthetic.json');await page.waitForFunction(()=>state.lastSession?.type==='senses');
  assert.equal(await page.evaluate(()=>state.lastSession.answers),3);assert.equal(await page.evaluate(()=>state.attempts.length),3);
  await page.setInputFiles('#importFile','.build/sense-study-export-synthetic.json');await page.waitForTimeout(150);assert.equal(await page.evaluate(()=>state.attempts.length),3,'Import is idempotent');
  // A short final remainder is legal. Complete it through the real submit and next controls.
  await page.evaluate(()=>{const words=WordOrbitSenseState.eligible(state.words,WORDORBIT_SENSE_CATALOG.entries,WordOrbitSenseIndex);const round=WordOrbitSenseCore.build(words,WORDORBIT_SENSE_CATALOG.entries,{limit:1,date:todayKey(),random:()=>0.42});Object.assign(round,{type:'senses',id:'synthetic-final-round',started:Date.now(),attemptStart:state.attempts.length,answered:0});session=round;state.lastSession=session;save();showView('practice');renderQuestion();});
  // Exercise the explicit recall fallback even when the real pool has ample distractors.
  await page.evaluate(()=>{const q=currentItem();q.kind='recall';q.options=[];q.expected=[];q.selected=[];renderQuestion();});
  await page.locator('#questionPrompt').click();await page.keyboard.press('Enter');assert.equal(await page.evaluate(()=>currentItem().revealed),true);await page.locator('[data-sense-recall=yes]').click();
  let loops=0;
  while(await page.evaluate(()=>session?.type==='senses')){
   assert.ok(++loops<50);
   const info=await page.evaluate(()=>({checked:currentItem().checked,kind:currentItem().kind,options:currentItem().options.map((o,i)=>o.correct?i:-1).filter(i=>i>=0)}));
   if(info.checked){await page.click('#nextQuestionBtn');continue;}
   if(info.kind==='recall'){await page.click('[data-sense-reveal]');await page.click('[data-sense-recall=yes]');}
   else{for(const i of info.options)await page.locator('[data-sense-option="'+i+'"]').click();await page.click('#nextQuestionBtn');}
  }
  const complete=await page.evaluate(()=>({done:Object.keys(state.senseStudy.completed).length,record:state.records[Object.keys(state.senseStudy.completed)[0]],last:state.lastSession}));
  assert.equal(complete.done,1);assert.equal(complete.last,null);assert.equal(complete.record.level,0,'Sense successes must not automatically become legacy word mastery');
  await page.evaluate(()=>showView('stats'));page.once('dialog',dialog=>dialog.accept());await page.click('[data-clear-learning=today]');
  assert.equal(await page.evaluate(()=>Object.keys(state.senseStudy.completed).length),0);
  // Upgrade a legacy unfinished round: new library meanings must not reshuffle it.
  const old=await browser.newContext({reducedMotion:'reduce'}),legacy=await old.newPage();await legacy.goto(url);await legacy.waitForFunction(()=>state.words.length>4000);
  const saved=await legacy.evaluate(()=>{const w=state.words.find(w=>w.word==='seed');const q={wordId:w.id,status:'pending',attempts:0,checked:false,selected:null,options:makeOptions(w),optionKind:'single'};state.lastSession=qNewSession([q],'single');state.lastSession.id='synthetic-old-round';save();return JSON.stringify(state.lastSession);});
  await legacy.reload();await legacy.waitForFunction(()=>window.WordOrbitSenseStudy);await legacy.evaluate(()=>WordOrbitSenseStudy.ensure());await legacy.click('#continueBtn');
  assert.equal(await legacy.evaluate(()=>JSON.stringify(session)),saved);assert.equal(await legacy.evaluate(()=>qFullMeaning(currentWord())),await legacy.evaluate(()=>qExternalEntry(currentWord()).meaning));
  // Native replacement imports must preserve both legacy public IDs and schema-3 sense state.
  const nativeScript=data=>{
   const source=fs.readFileSync(path.resolve(__dirname,'../src/VocabDesk/MainWindow.xaml.cs'),'utf8').split('private static string BuildImportScript(string raw)')[1];
   return source.split('return $$"""')[1].split('""";')[0].replace('{{escapedPayload}}',JSON.stringify(JSON.stringify(data))).replaceAll('{{StateKey}}','vocab-offline-state-v1').replaceAll('{{CatalogKey}}','vocab-offline-catalog-v1');
  };
  await legacy.evaluate(()=>{const [word,e]=Object.entries(WordOrbitSenseIndex.entries).find(([,e])=>e.aliases?.length),w=state.words.find(w=>w.word===word);w.id=e.aliases[0];w.notes='Synthetic old ID note';state.records[w.id]={level:2,seen:4,correct:3,wrong:1,due:null,lastSeen:null};state.lastSession=null;save();});
  await legacy.reload();await legacy.waitForFunction(()=>window.WordOrbitSenseStudy);await legacy.evaluate(()=>WordOrbitSenseStudy.ensure());
  assert.equal(await legacy.evaluate(()=>WordOrbitSenseState.eligible(state.words,WORDORBIT_SENSE_CATALOG.entries,WordOrbitSenseIndex).length),2130);
  assert.equal(await legacy.evaluate(()=>state.words.some(w=>w.notes==='Synthetic old ID note'&&state.records[w.id]?.seen===4&&WordOrbitSenseIndex.entries[w.word].aliases.includes(w.id))),true);
  await legacy.evaluate(nativeScript(JSON.parse(fs.readFileSync(path.resolve(__dirname,'sample-export.json'),'utf8'))));
  await legacy.waitForTimeout(400);await legacy.waitForFunction(()=>window.WordOrbitSenseStudy&&state.records['seed-1-1']?.seen===7);await legacy.evaluate(()=>WordOrbitSenseStudy.ensure());
  assert.equal(await legacy.evaluate(()=>qEligibleWords().length),4247,'Partial old native backups cannot erase bundled public words');
  assert.equal(await legacy.evaluate(()=>WordOrbitSenseState.eligible(state.words,WORDORBIT_SENSE_CATALOG.entries,WordOrbitSenseIndex).length),2130);
  assert.deepEqual(await legacy.evaluate(()=>state.senseStudy.completed),{});
  await legacy.evaluate(nativeScript(payload));await legacy.waitForTimeout(400);await legacy.waitForFunction(()=>state.lastSession?.type==='senses');
  assert.equal(await legacy.evaluate(()=>JSON.stringify(state.lastSession)),JSON.stringify(payload.senseSession));
  assert.deepEqual(await legacy.evaluate(()=>state.senseStudy),payload.senseStudy);
  await legacy.click('#continueBtn');await legacy.waitForFunction(()=>WordOrbitSenseStudy.snapshot().loaded);
  assert.equal(await legacy.evaluate(()=>JSON.stringify(session)),JSON.stringify(payload.senseSession));
  assert.deepEqual(errors,[]);assert.deepEqual(network,[]);
  console.log(JSON.stringify({passed:true,lazyLoading:true,readyWords:2130,senses:5639,targets:start.words,goals:start.goals,baseQuestions:start.base,exactResume:true,legacyResume:true,multiFeedback:true,backupRestore:true,clearModes:true,offline:true}));
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});
