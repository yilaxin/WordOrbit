const {chromium}=require('playwright'),assert=require('node:assert/strict'),http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const site=path.resolve(__dirname,'../src/VocabDesk/Website'),types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.svg':'image/svg+xml'};
const server=http.createServer((req,res)=>{const target=path.resolve(site,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/\/$/,'/index.html'));if(!target.startsWith(site+path.sep)){res.writeHead(403).end();return;}fs.readFile(target,(err,data)=>{if(err){res.writeHead(404).end();return;}res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream'});res.end(data);});});
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));let browser;
 try{
 browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});const context=await browser.newContext({reducedMotion:'reduce'}),page=await context.newPage(),errors=[];
 page.on('pageerror',err=>errors.push(err.message));await page.goto('http://127.0.0.1:'+server.address().port+'/index.html');await page.waitForFunction(()=>!!navigator.serviceWorker.controller);
 const assets=await page.evaluate(async()=>{const cache=await caches.open('wordorbit-reviewed-v30');return(await cache.keys()).map(r=>new URL(r.url).pathname);});
 assert.equal((await page.locator('.primary-nav [data-view=mywords]').innerText()).replace('◎','').trim(),'我的星球');assert.ok(assets.includes('/reviewed-dictionary.js'));assert.ok(assets.includes('/catalog-repairs.js'));assert.equal(await page.evaluate(()=>qEligibleWords().length),4247);assert.equal(await page.evaluate(()=>state.words.filter(qReview).length),1);
 for(const name of ['nebula-core.js','nebula-store.js','nebula.js','nebula.css'])assert.ok(assets.includes('/'+name));assert.equal(assets.filter(p=>p.includes('/assets/constellation/display/')).length,22);
 for(const name of ['mywords-core.js','mywords-store.js','mywords.js','mywords.css'])assert.ok(assets.includes('/'+name));
 await context.setOffline(true);await page.reload();await page.waitForFunction(()=>!!window.WordOrbitNebula);assert.equal((await page.locator('.primary-nav [data-view=mywords]').innerText()).replace('◎','').trim(),'我的星球');
 await page.locator('.primary-nav [data-view=nebula]').click();await page.locator('[data-neb-action=new]').first().waitFor();
 await page.evaluate(async()=>{await NebulaStore.save(NebulaCore.cleanArticle({id:'neb-offline-test',title:'Synthetic offline test',body:'We explore space without a network connection.',notes:'Private synthetic note'}));});
 await page.reload();await page.locator('.primary-nav [data-view=nebula]').click();await page.locator('[data-neb-action=open]').click();assert.equal(await page.locator('#nebNotes').inputValue(),'Private synthetic note');
 const cached=await page.evaluate(async()=>{const cache=await caches.open('wordorbit-reviewed-v30');return(await cache.keys()).map(r=>r.url);});assert.ok(!cached.some(url=>/neb-offline-test|Private%20synthetic/.test(url)),'Private bodies are never placed in the app asset cache');
 await page.evaluate(async()=>{const sample=MyWordsCore.clean({word:'offline-private-word',meaning:'离线私人测试词'});await MyWordsStore.commit({puts:[sample],round:null,summary:MyWordsCore.summary([sample])});});
 await page.reload();await page.waitForFunction(()=>WordOrbitConstellation.snapshot().nodes.length===23);await page.locator('.primary-nav [data-view=mywords]').click();await page.locator('.my-word-row').waitFor();assert.match(await page.locator('.my-word-row').innerText(),/离线私人测试词/);
 await page.locator('#myMode').selectOption('reverse');await page.locator('[data-my-action=start]').click();await page.locator('.my-question').waitFor();assert.equal(await page.locator('.my-option').count(),4);assert.equal(await page.locator('.my-pronunciation').count(),0);
 const correct=await page.evaluate(async()=>{const {round}=await MyWordsStore.load(),q=round.queue[0];return q.options.findIndex(o=>o.word===q.word);});await page.keyboard.press(String(correct+1));await page.keyboard.press('Enter');await page.locator('.neb-feedback.is-correct').waitFor();assert.equal((await page.evaluate(()=>MyWordsStore.load())).entries[0].record.correct,1);
 assert.deepEqual(errors,[]);console.log(JSON.stringify({passed:true,offlineReload:true,nebulaAssets:4,myWordsAssets:4,constellationAssets:22,privatePersistence:true,privatePlanet:true,privateQuizOffline:true}));
 }finally{if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(err=>{console.error(err);process.exit(1)});
