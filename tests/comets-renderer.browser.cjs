const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('node:path'),{pathToFileURL}=require('node:url');
const exe='C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',url=pathToFileURL(path.resolve(__dirname,'../src/VocabDesk/Website/index.html')).href+'?desktop=1';
(async()=>{
 for(const fallback of [false,true]){
  const browser=await chromium.launch({executablePath:exe,headless:true,args:fallback?['--disable-webgl']:[]});
  try{
   const page=await browser.newPage({viewport:{width:1300,height:1100},reducedMotion:'reduce'}),errors=[];page.on('pageerror',e=>errors.push(e.message));
   await page.goto(url);await page.waitForFunction(()=>window.WordOrbitComets);
   await page.evaluate(async()=>{const date=CometsCore.localDate();await CometsStore.commit({puts:Array.from({length:6},(_,i)=>CometsCore.clean({id:'comet-render-'+i,date,time:'10:00',title:'Synthetic moment '+i,english:'Synthetic English '+i}))});showView('comets');});await page.waitForFunction(()=>WordOrbitComets.snapshot().scene?.count===6);
   await page.locator('.cf-space').scrollIntoViewIfNeeded();await page.waitForTimeout(350);const reduced=await page.evaluate(()=>WordOrbitComets.snapshot().scene);assert.equal(reduced.playing,false);assert.equal(reduced.scheduled,false);assert.equal(reduced.renderMode,fallback?'canvas-3d':'webgl');
   await page.locator('[data-cf-action=play]').click();await page.waitForTimeout(300);const running=await page.evaluate(()=>WordOrbitComets.snapshot().scene);assert.equal(running.playing,true);assert.ok(running.frameCount>reduced.frameCount);
   await page.locator('[data-cf-action=list]').click();await page.locator('[data-cf-select]').first().click();await page.waitForFunction(()=>!WordOrbitComets.snapshot().scene.scheduled,{},{timeout:7000});const selected=await page.evaluate(()=>WordOrbitComets.snapshot().scene);await page.waitForTimeout(250);const stationary=await page.evaluate(()=>WordOrbitComets.snapshot().scene);assert.deepEqual(stationary.objects.map(o=>o.t),selected.objects.map(o=>o.t));assert.equal(stationary.scheduled,false);assert.equal(await page.locator('.cf-english').count(),0);
   await page.keyboard.press('Escape');await page.waitForTimeout(250);assert.equal((await page.evaluate(()=>WordOrbitComets.snapshot().scene.selected)),null);
   // Editing pauses even if the page was playing; cancel restores it.
   await page.locator('[data-comets-action=new]').first().click();await page.waitForTimeout(300);assert.equal((await page.evaluate(()=>WordOrbitComets.snapshot().scene.playing)),false);await page.locator('#cometsEditorCancel').click();await page.waitForTimeout(200);assert.equal((await page.evaluate(()=>WordOrbitComets.snapshot().scene.playing)),true);
   // Hidden tab does no work. Simulate visibility deterministically in this isolated context.
   await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});document.dispatchEvent(new Event('visibilitychange'));});const hidden=await page.evaluate(()=>WordOrbitComets.snapshot().scene.frameCount);await page.waitForTimeout(300);assert.equal((await page.evaluate(()=>WordOrbitComets.snapshot().scene.frameCount)),hidden);
   await page.evaluate(()=>{delete document.hidden;document.dispatchEvent(new Event('visibilitychange'));});await page.emulateMedia({reducedMotion:'no-preference'});await page.waitForTimeout(150);await page.emulateMedia({reducedMotion:'reduce'});await page.waitForTimeout(150);assert.equal((await page.evaluate(()=>WordOrbitComets.snapshot().scene.playing)),false);
   if(!fallback)await page.evaluate(()=>{window.__testGL=document.querySelector('#cometsScene canvas').getContext('webgl');});
   await page.evaluate(()=>showView('home'));await page.waitForTimeout(150);assert.equal(await page.locator('#cometsContent canvas').count(),0);assert.equal((await page.evaluate(()=>WordOrbitComets.snapshot().loadedRecords)),0);if(!fallback)assert.equal(await page.evaluate(()=>__testGL.isContextLost()),true);
   // Re-entering yields deterministic paused initial positions, with a new renderer.
   await page.evaluate(()=>showView('comets'));await page.waitForFunction(()=>WordOrbitComets.snapshot().scene?.count===6);const reset=await page.evaluate(()=>WordOrbitComets.snapshot().scene);assert.deepEqual(reset.objects.map(o=>o.xyz),reduced.objects.map(o=>o.xyz));
   assert.deepEqual(errors,[]);console.log(JSON.stringify({passed:true,mode:reset.renderMode,checks:['reduce motion','selection freezes all','modal pause','hidden stop','explicit GPU disposal','stable seeded positions','re-entry']}));
  }finally{await browser.close();}
 }
})().catch(error=>{console.error(error);process.exit(1);});
