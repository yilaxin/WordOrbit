const CACHE='vocab-offline-v20';
const ASSETS=['./','./index.html','./styles.css','./dark-overrides.css','./answer-details.css','./data-controls.css','./app.js','./quality-overrides.js','./manifest.json','./full-ocr-data.js','./external-dictionary.js','./example-sentences.js','./icon.svg'];
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));return response}).catch(()=>caches.match('./index.html')))));
