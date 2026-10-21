/* Synthetic articles only. Browser contexts never touch the user's WebView2 profile. */
const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('node:path'),{pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
 try{
 const page=await browser.newPage({viewport:{width:1320,height:1000},reducedMotion:'reduce'}),errors=[],network=[];
 page.on('pageerror',err=>errors.push(err.message));page.on('request',r=>{if(/^https?:/.test(r.url()))network.push(r.url());});page.on('dialog',d=>d.accept());
 const url=pathToFileURL(path.resolve(__dirname,'../src/VocabDesk/Website/index.html')).href+'?desktop=1';await page.goto(url);await page.waitForFunction(()=>window.WordOrbitNebula);
 const baseline=await page.evaluate(()=>JSON.stringify({records:state.records,attempts:state.attempts,favorites:state.favorites,lastSession:state.lastSession}));
 const action=name=>page.locator(`[data-neb-action="${name}"]`);
 const open=async()=>{await page.locator('.primary-nav [data-view="nebula"]').click();await action('new').first().waitFor();};
 await open();assert.match(await page.locator('#nebCards').innerText(),/第一片星云/);
 await action('new').first().click();await page.locator('#nebulaTitle').fill('Synthetic orbit <img src=x onerror="window.bad=1">');await page.locator('#nebulaSource').fill('Synthetic QA only');await page.locator('#nebulaTags').fill('Science, Test');
 const text='The planet follows a stable orbit. Scientists study the planet. Zorvex is a fictional term.\n\n'+('We observe distant stars and explore space. '.repeat(140));
 await page.locator('#nebulaBody').fill(text);await page.locator('#nebulaEditorSave').click();await page.locator('#nebArticleBody').waitFor();
 assert.equal(await page.evaluate(()=>window.bad),undefined);assert.equal(await page.locator('#nebulaHeading img').count(),0);assert.ok(await page.locator('.neb-word').count()<1000);
 await page.locator('.neb-word[data-surface="orbit"]').first().click();await page.locator('#nebMeaning').waitFor();assert.ok((await page.locator('#nebMeaning').inputValue()).includes('轨道'));assert.ok(await page.locator('#nebIpa').inputValue());
 await action('known').click();assert.equal(await page.evaluate(()=>JSON.stringify({records:state.records,attempts:state.attempts,favorites:state.favorites,lastSession:state.lastSession})),baseline);
 await page.locator('#nebMeaning').fill('轨道；围绕天体运行的路径');await action('vocab-save').click();await page.waitForFunction(()=>document.querySelectorAll('.neb-vocab-row').length===1);
 await action('quote-current').click();await page.locator('.neb-quote').waitFor();await page.locator('[data-quote-note]').fill('我的合成测试译文。');await page.locator('#nebNotes').fill('A private synthetic reading note.');await page.waitForFunction(async()=>{const a=await NebulaStore.get(WordOrbitNebula.snapshot().articleId);return a?.notes==='A private synthetic reading note.';});
 await page.evaluate(()=>{const text=document.querySelector('.neb-word[data-surface="Scientists"]').firstChild,range=document.createRange();range.selectNodeContents(text);const selection=getSelection();selection.removeAllRanges();selection.addRange(range);});await action('quote-selection').click();await page.waitForFunction(()=>document.querySelectorAll('.neb-quote').length===2);await action('quote-remove').last().click();await page.waitForFunction(()=>document.querySelectorAll('.neb-quote').length===1);
 await page.locator('.neb-word[data-surface="Zorvex"]').click();assert.equal(await page.locator('#nebMeaning').inputValue(),'');await page.locator('#nebMeaning').fill('虚构术语');await action('vocab-save').click();await page.waitForFunction(()=>document.querySelectorAll('.neb-vocab-row').length===2);
 await action('read-mark').click();await page.waitForFunction(()=>document.querySelector('[data-neb-action="read-mark"]').textContent.includes('已读'));
 await action('read-next').click();await page.waitForFunction(()=>document.querySelector('.neb-reader-top').textContent.includes('第 2/'));await page.locator('#nebNotes').fill('A note on the second page.');await page.evaluate(()=>WordOrbitNebula.flush());
 const id=await page.evaluate(()=>WordOrbitNebula.snapshot().articleId);
 await page.evaluate(()=>showView('home'));await page.waitForFunction(()=>WordOrbitNebula.snapshot().loadedArticles===0);assert.equal(await page.locator('.neb-word').count(),0);
 await open();await action('open').first().click();await page.locator('#nebArticleBody').waitFor();assert.match(await page.locator('.neb-reader-top').innerText(),/第 2\//);assert.equal(await page.locator('#nebNotes').inputValue(),'A note on the second page.');assert.equal(await page.locator('[data-quote-note]').inputValue(),'我的合成测试译文。');
 await action('edit').click();await page.locator('#nebulaTitle').fill('Edited synthetic article');await page.locator('#nebulaEditorSave').click();await page.waitForFunction(()=>document.querySelector('#nebulaHeading').textContent==='Edited synthetic article');assert.equal(await page.locator('#nebNotes').inputValue(),'A note on the second page.');
 await page.locator('#nebMode').selectOption('fill');await page.locator('#nebScope').selectOption('all');await action('practice-start').click();await page.locator('#nebAnswer').waitFor();
 const current=await page.evaluate(async()=>{const a=await NebulaStore.get(WordOrbitNebula.snapshot().articleId);return {word:a.round.queue[0].key,mode:a.round.queue[0].mode};});
 assert.equal(await page.locator('.neb-feedback').count(),0);assert.equal(await page.locator('#nebulaContent').innerText().then(t=>t.includes('/ˈɒːbit/')),false);
 await page.evaluate(()=>{const original=NebulaStore.save;NebulaStore.save=(...args)=>{NebulaStore.save=original;return Promise.reject(Error('Synthetic storage failure'));};});
 await page.locator('#nebAnswer').fill('wrong');await page.locator('#nebAnswerForm button[type=submit]').click();await page.waitForFunction(()=>document.querySelector('#nebMessage')?.textContent.includes('答案未保存'));assert.equal((await page.evaluate(id=>NebulaStore.get(id),id)).round.answered,0);
 await page.locator('#nebAnswerForm button[type=submit]').click();await page.locator('.neb-feedback.is-wrong').waitFor();
 let stored=await page.evaluate(id=>NebulaStore.get(id),id);assert.equal(stored.round.queue.length,3);assert.equal(stored.round.queue[2].redo,true);
 await action('practice-exit').click();await page.locator('#nebArticleBody').waitFor();await action('practice-resume').click();await page.locator('.neb-feedback').waitFor();
 await action('practice-next').click();await page.locator('#nebAnswer').waitFor();
 for(let i=0;i<2;i++){stored=await page.evaluate(id=>NebulaStore.get(id),id);const q=stored.round.queue[stored.round.index],w=stored.vocab[q.key];await page.locator('#nebAnswer').fill(q.mode==='fill'?w.surface:w.word);await page.locator('#nebAnswerForm button[type=submit]').click();await page.locator('.neb-feedback.is-correct').waitFor();await action('practice-next').click();}
 await page.locator('#nebArticleBody').waitFor();stored=await page.evaluate(id=>NebulaStore.get(id),id);assert.equal(stored.round,null);assert.equal(stored.vocab[current.word].wrong,1);
 assert.equal(await page.evaluate(()=>JSON.stringify({records:state.records,attempts:state.attempts,favorites:state.favorites,lastSession:state.lastSession})),baseline,'Nebula never writes IELTS state');
 await action('back').click();await action('open').waitFor();const downloadPromise=page.waitForEvent('download');await action('export').click();const download=await downloadPromise;assert.match(download.suggestedFilename(),/^wordorbit-nebula-backup/);
 const stream=await download.createReadStream();let content='';for await(const chunk of stream)content+=chunk;const backup=JSON.parse(content);assert.equal(backup.articles[0].body,text.trim());assert.equal(backup.articles[0].notes,'A note on the second page.');
 await page.locator('#nebImport').setInputFiles({name:'synthetic-backup.json',mimeType:'application/json',buffer:Buffer.from(content)});await page.waitForFunction(()=>document.querySelector('#nebMessage')?.textContent.includes('跳过 1'));
 assert.equal(await action('open').count(),1);
 // Metadata cards are paged; large private bodies are not attached to list DOM.
 await page.evaluate(async()=>{const base=await NebulaStore.get((await NebulaStore.list())[0].id);for(let i=0;i<15;i++)await NebulaStore.save({...base,id:'neb-synthetic-'+i,title:'Synthetic '+i,round:null});});
 assert.equal((await page.evaluate(()=>NebulaStore.references('orbit'))).length,16);
 await page.evaluate(()=>showView('home'));await open();assert.equal(await action('open').count(),12);await action('list-next').click();assert.equal(await action('open').count(),4);
 await page.locator('#nebSearch').fill('Synthetic 14');assert.equal(await action('open').count(),1);await page.locator('#nebSearch').fill('');await page.locator('#nebCategory').selectOption('Science');assert.equal(await action('open').count(),12);await page.locator('#nebCategory').selectOption('');
 await page.evaluate(()=>window.scrollTo(0,0));await page.screenshot({path:path.resolve(__dirname,'../.build/nebula-list-dark.png'),fullPage:true});
 for(const width of [1024,800,390]){await page.setViewportSize({width,height:1000});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,'list width '+width);}
 await action('open').first().click();await page.locator('#nebArticleBody').waitFor();assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,'reader narrow layout');
 await page.evaluate(()=>{document.body.classList.remove('dark');});
 await page.screenshot({path:path.resolve(__dirname,'../.build/nebula-reader-mobile.png'),fullPage:true});
 await page.setViewportSize({width:1320,height:1000});await page.screenshot({path:path.resolve(__dirname,'../.build/nebula-reader.png'),fullPage:true});
 await action('delete').click();await action('open').first().waitFor();assert.equal((await page.evaluate(()=>NebulaStore.list())).length,15);
 await page.reload();await open();assert.equal((await page.evaluate(()=>NebulaStore.list())).length,15);assert.equal(await page.evaluate(()=>WordOrbitNebula.snapshot().loadedArticles),0);
 assert.deepEqual(errors,[]);assert.deepEqual(network,[],'Private article workflows make no network requests');
 console.log(JSON.stringify({passed:true,checks:['CRUD + safe HTML','dictionary/IPA','manual unknown words','notes/quotes','reading position','independent state','wrong retry','resume','backup/import duplicates','bounded DOM','narrow layouts','reload','offline/no network']},null,2));
 }finally{await browser.close();}
})().catch(err=>{console.error(err);process.exit(1)});
