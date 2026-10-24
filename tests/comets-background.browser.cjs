/* Generated public sky asset, synthetic records, disposable browser profiles only. */
const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('node:path'),fs=require('node:fs'),{pathToFileURL}=require('node:url');
const root=path.resolve(__dirname,'..'),site=path.join(root,'src/VocabDesk/Website');
(async()=>{
 for(const width of [768,1536])assert.ok(fs.statSync(path.join(site,`assets/comets/milkyway-v1-${width}.webp`)).size<450000,'Bounded compressed background asset');
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  fs.mkdirSync(path.join(root,'.build'),{recursive:true});
  for(const width of [1440,390]){
   const context=await browser.newContext({viewport:{width,height:1050},deviceScaleFactor:1,reducedMotion:'reduce'}),page=await context.newPage(),errors=[],assets=[];
   page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(r.url().includes('/assets/comets/'))assets.push(r.url());});
   await page.goto(pathToFileURL(path.join(site,'index.html')).href+'?desktop=1');await page.waitForFunction(()=>window.WordOrbitComets);assert.equal(await page.locator('#cometsContent .cf-sky-image').count(),0,'Comet renderer remains unmounted; the topic universe may share the sky asset');
   await page.evaluate(async()=>{const date=CometsCore.localDate();await CometsStore.commit({puts:[['morning','08:40','早餐时换成燕麦奶','买咖啡时，想把牛奶换成燕麦奶。','Could I have it with oat milk?','可以换成燕麦奶吗？'],['journey','09:15','坐过了一站','看窗外的风景，错过了下车的站。','I missed my stop.','我坐过站了。'],['sunshine','14:35','雨后的一束阳光','雨停后，阳光重新照到路面。','The sky is clearing up.','天渐渐放晴了。'],['walk','19:20','晚饭后出去散步','晚饭后，和朋友一起散步。','Shall we go for a walk?','我们去散步好吗？']].map(([id,time,title,context,english,meaning])=>CometsCore.clean({id:'comet-synthetic-'+id,date,time,title,context,english,meaning,tag:'生活片段'}))});document.body.classList.add('dark');showView('comets');});
   await page.waitForFunction(()=>WordOrbitComets.snapshot().scene?.count===4);await page.locator('.cf-space').scrollIntoViewIfNeeded();await page.waitForFunction(()=>{const image=document.querySelector('.cf-sky-image');return image?.complete&&image.naturalWidth>0;});
   const image=await page.locator('.cf-sky-image').evaluate(image=>({width:image.naturalWidth,height:image.naturalHeight,source:image.currentSrc,pointer:getComputedStyle(image).pointerEvents,animations:image.getAnimations().length}));
   assert.ok(image.width<=1536&&image.height<=864);assert.match(image.source,/milkyway-v1-(768|1536)\.webp$/);assert.ok(image.source.endsWith(`milkyway-v1-${width<600?768:1536}.webp`));assert.equal(image.pointer,'none');assert.equal(image.animations,0);assert.equal(await page.evaluate(()=>WordOrbitComets.snapshot().scene.scheduled),false,'Static background has no extra render loop');
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false);await page.waitForTimeout(300);
   await page.locator('.cf-space').screenshot({path:path.join(root,`.build/comets-galaxy-${width}.png`)});
   await page.locator('[data-cf-action=list]').click();await page.locator('[data-cf-select]').first().click();assert.equal(await page.locator('.cf-english').count(),0);await page.locator('[data-cf-action=reveal]').click();assert.equal(await page.locator('.cf-english').count(),1);
   await page.evaluate(()=>showView('home'));assert.equal(await page.locator('#cometsContent img,#cometsContent canvas').count(),0);assert.equal(await page.evaluate(()=>WordOrbitComets.snapshot().loadedRecords),0);assert.deepEqual(errors,[]);await context.close();
   console.log(JSON.stringify({passed:true,viewport:width,background:image.width,checks:['lazy local asset','responsive decode bound','static background','layered interaction','answer reveal','DOM release']}));
  }
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});
