const {chromium}=require('playwright'),assert=require('node:assert/strict'),http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const site=path.resolve(__dirname,'../src/VocabDesk/Website'),types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.svg':'image/svg+xml'};
const server=http.createServer((req,res)=>{const target=path.resolve(site,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/\/$/,'/index.html'));if(!target.startsWith(site+path.sep)){res.writeHead(403).end();return;}fs.readFile(target,(err,data)=>{if(err){res.writeHead(404).end();return;}res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream'});res.end(data);});});
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));let browser;
 try{
 browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});const context=await browser.newContext({reducedMotion:'reduce'}),page=await context.newPage(),errors=[];
 page.on('pageerror',err=>errors.push(err.message));await page.goto('http://127.0.0.1:'+server.address().port+'/index.html');await page.waitForFunction(()=>!!navigator.serviceWorker.controller);
 const assets=await page.evaluate(async()=>{const cache=await caches.open('wordorbit-nebula-v26');return(await cache.keys()).map(r=>new URL(r.url).pathname);});
 for(const name of ['nebula-core.js','nebula-store.js','nebula.js','nebula.css'])assert.ok(assets.includes('/'+name));assert.equal(assets.filter(p=>p.includes('/assets/constellation/display/')).length,22);
 await context.setOffline(true);await page.reload();await page.waitForFunction(()=>!!window.WordOrbitNebula);
 await page.locator('.primary-nav [data-view=nebula]').click();await page.locator('[data-neb-action=new]').first().waitFor();
 await page.evaluate(async()=>{await NebulaStore.save(NebulaCore.cleanArticle({id:'neb-offline-test',title:'Synthetic offline test',body:'We explore space without a network connection.',notes:'Private synthetic note'}));});
 await page.reload();await page.locator('.primary-nav [data-view=nebula]').click();await page.locator('[data-neb-action=open]').click();assert.equal(await page.locator('#nebNotes').inputValue(),'Private synthetic note');
 const cached=await page.evaluate(async()=>{const cache=await caches.open('wordorbit-nebula-v26');return(await cache.keys()).map(r=>r.url);});assert.ok(!cached.some(url=>/neb-offline-test|Private%20synthetic/.test(url)),'Private bodies are never placed in the app asset cache');
 assert.deepEqual(errors,[]);console.log(JSON.stringify({passed:true,offlineReload:true,nebulaAssets:4,constellationAssets:22,privatePersistence:true}));
 }finally{if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(err=>{console.error(err);process.exit(1)});
