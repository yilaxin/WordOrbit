/* Only bundled vocabulary and synthetic records; disposable browser context. */
const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('node:path'),{pathToFileURL}=require('node:url');
const glossary=require('../src/VocabDesk/Website/reviewed-dictionary.js');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const context=await browser.newContext({reducedMotion:'reduce',viewport:{width:1320,height:1000}}),page=await context.newPage(),errors=[],network=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(/^https?:/.test(r.url()))network.push(r.url());});
  const url=pathToFileURL(path.resolve(__dirname,'../src/VocabDesk/Website/index.html')).href+'?desktop=1';await page.goto(url);
  await page.waitForFunction(()=>window.WordOrbitMyWords&&state.words.length>4000);
  const audit=await page.evaluate(()=>{
   const entries=REVIEWED_DICTIONARY.entries,reviewed=state.words.filter(w=>entries[w.word]);
   const failures=[];
   for(const w of reviewed){
    if(!qVerified(w)||w.meaning!==entries[w.word].meaning||w.fullMeaning!==entries[w.word].meaning||w.ipa!==entries[w.word].ipa||w.pos!==entries[w.word].pos)failures.push(w.word);
    for(const reverse of [false,true]){const options=makeOptions(w,reverse);if(options.length!==4||new Set(options).size!==4||!options.includes(reverse?w.word:qFullMeaning(w))||options.some(o=>!state.words.some(other=>qVerified(other)&&(reverse?other.word===o:qFullMeaning(other)===o))))failures.push(w.word+' options');}
   }
   const bad=['她觉得自己的','不要拿你的前途','我们只是时间长河中的一瞬闪光，但我们的影','释义待核验','查阅图','<img src=x>','海浪侵'];
   const cleanRejects=bad.every(value=>!qMeaningClean(value));
   const queue=makeWholeQueue();
   return {total:state.words.length,official:qEligibleWords().length,review:state.words.filter(qReview).length,reviewed:reviewed.length,failures,cleanRejects,wholeCount:queue.length,first:new Set(queue.slice(0,50).map(q=>q.wordId)).size,second:new Set(queue.slice(50).map(q=>q.wordId)).size,phases:queue.slice(0,50).every(q=>q.variant===0)&&queue.slice(50).every(q=>q.variant===1),sameWords:queue.slice(0,50).every(q=>queue.slice(50).some(other=>q.wordId===other.wordId))};
  });
  assert.deepEqual(audit,{total:4248,official:4247,review:1,reviewed:104,failures:[],cleanRejects:true,wholeCount:100,first:50,second:50,phases:true,sameWords:true});
  // Simulate upgrading a persisted older catalog, including original IDs and user notes.
  const before=await page.evaluate(async()=>{
   const w=state.words.find(w=>w.word==='jeopardise');w.meaning='使受危险；危及；危害';w.fullMeaning=w.meaning;w.ipa="/'d3epadaiz/";w.pos='vt.';w.translationSource='ECDICT';w.notes='Synthetic personal note';w.tags=['synthetic'];
   const enzyme=state.words.find(w=>w.word==='enzyme');enzyme.meaning='酶';enzyme.fullMeaning='酶';
   state.records[w.id]={level:2,due:null,correct:3,wrong:1,seen:4,lastSeen:123456789};state.favorites=[w.id];
   state.attempts=[{wordId:w.id,time:123456789,correct:false,sessionId:'synthetic-upgrade'}];
   state.settings.dailyNew=37;state.lastSession=qNewSession(makeWholeQueue(),'whole');state.lastSession.index=7;
   const first=state.lastSession.queue[0],firstWord=state.words.find(word=>word.id===first.wordId);first.options=makeOptions(firstWord);first.selected=qFullMeaning(firstWord);first.checked=true;first.status='correct';
   state.wholeBook={cycle:2,completedIds:[w.id]};save();
   const article=NebulaCore.cleanArticle({id:'neb-review-upgrade',title:'Synthetic private article',body:'A synthetic article about an orbit.',notes:'Private synthetic note'});await NebulaStore.save(article);
   const entry=MyWordsCore.clean({word:'jeopardise',meaning:'我自己的私人释义',notes:'Synthetic private note'});await MyWordsStore.commit({puts:[entry],round:null,summary:MyWordsCore.summary([entry])});
   return {id:w.id,records:state.records,attempts:state.attempts,favorites:state.favorites,settings:state.settings,lastSession:state.lastSession,wholeBook:state.wholeBook,nebula:await NebulaStore.get(article.id),mywords:await MyWordsStore.load()};
  });
  await page.reload();await page.waitForFunction(()=>window.WordOrbitMyWords&&qEligibleWords().length===4247);
  const after=await page.evaluate(async()=>{const w=state.words.find(w=>w.word==='jeopardise');return {id:w.id,records:state.records,attempts:state.attempts,favorites:state.favorites,settings:state.settings,lastSession:state.lastSession,wholeBook:state.wholeBook,nebula:await NebulaStore.get('neb-review-upgrade'),mywords:await MyWordsStore.load(),word:w};});
  const {word,...retained}=after;assert.deepEqual(retained,before,'Upgrade preserves original progress, sessions, favorites and both private databases');
  assert.equal(word.notes,'Synthetic personal note');assert.deepEqual(word.tags,['synthetic']);assert.equal(word.meaning,glossary.entries.jeopardise.meaning);assert.equal(word.ipa,glossary.entries.jeopardise.ipa);
  const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('vocab-offline-catalog-v1')).find(w=>w.word==='jeopardise'));assert.equal(saved.meaning,word.meaning);assert.equal(saved.id,before.id);
  await page.evaluate(()=>{session=state.lastSession;session.queue=[{wordId:state.words.find(w=>w.word==='jeopardise').id,variant:1,status:'pending',attempts:0,selected:null,checked:false,options:null}];session.index=0;session.type='reverse';showView('practice');renderQuestion();});
  assert.equal(await page.locator('#questionContext .ipa-badge').count(),0);await page.evaluate(()=>{currentItem().selected=currentWord().word;checkAnswer();});assert.equal(await page.locator('#questionContext .ipa-badge').count(),1);
  assert.deepEqual(errors,[]);assert.deepEqual(network,[]);console.log(JSON.stringify({passed:true,...audit,upgradePreservesRecords:true,privateStoresUnchanged:true,offline:true}));
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1)});
