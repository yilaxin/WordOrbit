/* Exercise real pointer/wheel input, not programmatic form submission. Synthetic data only. */
const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('node:path'),{pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1200,height:660},reducedMotion:'reduce'}),errors=[];page.on('pageerror',error=>errors.push(error.message));page.on('dialog',d=>d.accept());
  await page.goto(pathToFileURL(path.resolve(__dirname,'../src/VocabDesk/Website/index.html')).href+'?desktop=1');await page.waitForFunction(()=>window.WordOrbitComets);
  await page.locator('.primary-nav [data-view=comets]').click();await page.waitForFunction(()=>WordOrbitComets.snapshot().scene!==null);
  const add=page.locator('.comets-empty [data-comets-action=new]');await add.scrollIntoViewIfNeeded();await add.click();
  const opened=await page.locator('#cometsEditor').evaluate(d=>d.open);
  if(process.env.COMETS_DIAGNOSE){
   if(opened)await page.locator('#cometsEditorCancel').click();await page.locator('.cf-space').scrollIntoViewIfNeeded();const box=await page.locator('.cf-space').boundingBox();await page.mouse.move(box.x+box.width*.8,box.y+box.height*.4);const before=await page.evaluate(()=>({y:scrollY,distance:WordOrbitComets.snapshot().scene.camera.distance}));await page.mouse.wheel(0,-200);await page.waitForTimeout(350);const after=await page.evaluate(()=>({y:scrollY,distance:WordOrbitComets.snapshot().scene.camera.distance}));console.log(JSON.stringify({openedByEmptyStateButton:opened,before,after}));return;
  }
  assert.equal(opened,true,'The first-comet button must not be captured by the drag surface');
  const saveBox=await page.locator('#cometsSave').boundingBox(),editorBox=await page.locator('#cometsEditor').boundingBox();assert.ok(saveBox.y>=editorBox.y&&saveBox.y+saveBox.height<=editorBox.y+editorBox.height,'Save action stays visible in a short window');
  await page.locator('#cometsField_title').fill('Synthetic wheel and pointer scene');
  const dialog=page.locator('#cometsEditor'),dialogBox=await dialog.boundingBox();await page.mouse.move(dialogBox.x+dialogBox.width-35,dialogBox.y+dialogBox.height*.5);await page.mouse.wheel(0,520);await page.waitForTimeout(250);assert.ok(await dialog.evaluate(d=>d.scrollTop)>0,'Short-window editor must scroll with a real wheel');
  await page.locator('#cometsField_english').fill('I missed my stop.');await page.locator('#cometsField_meaning').fill('我坐过站了。');await page.locator('#cometsSave').click();await page.waitForFunction(()=>WordOrbitComets.snapshot().loadedRecords===1);
  assert.equal((await page.evaluate(()=>CometsStore.all()))[0].english,'I missed my stop.');assert.equal(await dialog.evaluate(d=>d.open),false);
  // Normal wheel navigates the page even while the pointer is inside the star field.
  await page.locator('.cf-space').scrollIntoViewIfNeeded();let box=await page.locator('.cf-space').boundingBox();await page.mouse.move(box.x+box.width*.8,box.y+box.height*.4);let before=await page.evaluate(()=>({y:scrollY,distance:WordOrbitComets.snapshot().scene.camera.distance}));await page.mouse.wheel(0,-200);await page.waitForTimeout(300);let after=await page.evaluate(()=>({y:scrollY,distance:WordOrbitComets.snapshot().scene.camera.distance}));assert.ok(after.y<before.y,'Wheel over the scene must scroll the page');assert.equal(after.distance,before.distance,'Plain wheel must not hijack page scrolling for zoom');
  await page.locator('.cf-space').scrollIntoViewIfNeeded();box=await page.locator('.cf-space').boundingBox();await page.mouse.move(box.x+box.width*.8,box.y+box.height*.4);before=await page.evaluate(()=>({y:scrollY,distance:WordOrbitComets.snapshot().scene.camera.distance}));await page.keyboard.down('Control');await page.mouse.wheel(0,-120);await page.keyboard.up('Control');await page.waitForTimeout(250);after=await page.evaluate(()=>({y:scrollY,distance:WordOrbitComets.snapshot().scene.camera.distance}));assert.ok(after.distance<before.distance,'Ctrl+wheel retains intentional star field zoom');assert.equal(after.y,before.y);assert.equal(await page.evaluate(()=>visualViewport.scale),1);
  await page.locator('[data-cf-action=zoom-out]').click();assert.ok((await page.evaluate(()=>WordOrbitComets.snapshot().scene.camera.distance))>after.distance);
  // The header entry still works and opens at the top after a previously scrolled form.
  await page.locator('#cometsContent>[class=section-head] [data-comets-action=new]').click();assert.equal(await dialog.evaluate(d=>d.open),true);assert.equal(await dialog.evaluate(d=>d.scrollTop),0);await page.locator('#cometsEditorCancel').click();
  assert.deepEqual(errors,[]);console.log(JSON.stringify({passed:true,checks:['empty-state real click','header click','dialog wheel in short window','save and persistence','plain wheel page navigation','Ctrl+wheel and button zoom','dialog resets scroll position']}));
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});
