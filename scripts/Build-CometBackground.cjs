/* Developer-only mechanical resizing/format conversion; no semantic image edits.
   Run with sharp available. App/publishing uses the committed WebP assets, not Node or sharp. */
const sharp=require('sharp'),path=require('node:path'),fs=require('node:fs');
const root=path.resolve(__dirname,'..'),source=path.join(root,'design/comets-milkyway-v1.png'),destination=path.join(root,'src/VocabDesk/Website/assets/comets');
(async()=>{fs.mkdirSync(destination,{recursive:true});for(const width of [768,1536]){const file=path.join(destination,`milkyway-v1-${width}.webp`);const info=await sharp(source).resize({width,withoutEnlargement:true}).webp({quality:86,effort:6}).toFile(file);console.log(JSON.stringify({file,width:info.width,height:info.height,bytes:info.size}));}})().catch(error=>{console.error(error);process.exit(1);});
