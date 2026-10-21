/* Pure helpers for private vocabulary; no writes to the original IELTS catalog. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.MyWordsCore=api;})(typeof window!=='undefined'?window:globalThis,()=>{
  'use strict';
  const MAX_WORDS=10000,MAX_BATCH=1000,MAX_TEXT=100000;
  const text=value=>String(value??'').trim();
  const key=value=>text(value).normalize('NFC').toLowerCase().replace(/’/g,"'").replace(/[‐‑–]/g,'-').replace(/\s+/g,' ');
  const validWord=value=>{const word=key(value);return word.length<=100&&word.split(' ').length<=8&&/^[\p{Script=Latin}]+(?:[ .'-][\p{Script=Latin}]+)*\.?$/u.test(word);};
  const int=(value,max=Number.MAX_SAFE_INTEGER)=>Math.min(max,Math.max(0,Math.trunc(Number(value)||0)));
  const date=value=>typeof value==='string'&&Number.isFinite(Date.parse(value))?new Date(value).toISOString():null;
  function clean(raw){
    if(!raw||typeof raw!=='object')throw Error('词条格式不正确');
    const word=text(raw.word).normalize('NFC').replace(/’/g,"'").replace(/[‐‑–]/g,'-').replace(/\s+/g,' '),id=key(word);
    if(!validWord(word))throw Error('请输入英文单词或短语（最多 100 字符、8 个词）');
    const lengths={meaning:1000,pos:80,ipa:160,example:2000,exampleZh:2000,notes:2000};
    const fields={};for(const [name,max] of Object.entries(lengths)){fields[name]=text(raw[name]);if(fields[name].length>max)throw Error(`${name} 内容过长，最多 ${max} 字符`);}
    const record=raw.record||{};
    return {id,word,...fields,tags:[...new Set((Array.isArray(raw.tags)?raw.tags:[]).map(text).filter(Boolean))].slice(0,10).map(t=>t.slice(0,30)),record:{seen:int(record.seen),correct:int(record.correct),wrong:int(record.wrong),level:int(record.level,4),due:date(record.due)},createdAt:date(raw.createdAt)||new Date().toISOString(),updatedAt:date(raw.updatedAt)||new Date().toISOString()};
  }
  const eligible=entry=>!!entry.meaning&&/[\u4e00-\u9fff]/.test(entry.meaning)&&!/(待核验|待补充|待翻译)/.test(entry.meaning);
  const due=entry=>!entry.record.due||Date.parse(entry.record.due)<=Date.now();
  function summary(entries){return {total:entries.length,ready:entries.filter(eligible).length,done:entries.filter(w=>eligible(w)&&w.record.level>=3).length,due:entries.filter(w=>eligible(w)&&due(w)).length};}
  function parseBatch(value,existing=[],lookup=()=>null){
    if(value.length>MAX_TEXT)throw Error('每次最多粘贴 100,000 字符');
    const lines=value.split(/\r?\n/).map((line,i)=>({line:line.trim(),number:i+1})).filter(row=>row.line);
    if(lines.length>MAX_BATCH)throw Error('每次最多 1,000 行，请分批添加');
    const known=new Set(existing.map(w=>w.id)),seen=new Set();
    return lines.map(({line,number})=>{
      try{
        let parts;
        if(line.includes('\t'))parts=line.split('\t');
        else if(line.includes('|'))parts=line.split('|');
        else{
          const han=line.search(/[\u4e00-\u9fff]/);
          parts=han<0?[line]:[line.slice(0,han).replace(/[\s=:：—-]+$/g,''),line.slice(han)];
        }
        if(parts.length>4)throw Error('最多四列：英文、中文、词性、音标');
        const [word,meaning,pos,ipa]=parts.map(text),matched=lookup(word)||{};
        const entry=clean({word,meaning:meaning||matched.meaning||'',pos:pos||matched.pos||'',ipa:ipa||matched.ipa||''});
        const duplicate=known.has(entry.id)||seen.has(entry.id);seen.add(entry.id);
        return {number,entry,status:duplicate?'duplicate':eligible(entry)?'ready':'pending',reason:duplicate?'重复，跳过':eligible(entry)?'可加入并练习':'可加入，待补中文释义'};
      }catch(error){return {number,status:'invalid',reason:error.message,raw:line.slice(0,160)};}
    });
  }
  function shuffle(items){const result=items.slice();for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;}
  const meaningKey=value=>text(value).replace(/\s/g,'').toLowerCase();
  function question(entry,mode,pool){
    const seenWords=new Set([key(entry.word)]),seenMeanings=new Set([meaningKey(entry.meaning)]),options=[{word:entry.word,meaning:entry.meaning}];
    for(const other of shuffle(pool)){
      if(!other.meaning||!/[\u4e00-\u9fff]/.test(other.meaning)||/待核验/.test(other.meaning))continue;
      const word=key(other.word),meaning=meaningKey(other.meaning);if(!word||seenWords.has(word)||seenMeanings.has(meaning))continue;
      options.push({word:other.word,meaning:other.meaning});seenWords.add(word);seenMeanings.add(meaning);if(options.length===4)break;
    }
    if(options.length!==4)throw Error('可用干扰词不足，无法生成四个不重复选项');
    return {id:entry.id,mode,word:entry.word,meaning:entry.meaning,ipa:entry.ipa,pos:entry.pos,example:entry.example,exampleZh:entry.exampleZh,options:shuffle(options),selected:null,checked:false,correct:false};
  }
  function newRound(entries,{mode='mixed',scope='due',count=20}={},fallback=[]){
    const words=shuffle(entries.filter(w=>eligible(w)&&(scope!=='due'||due(w)))).slice(0,Math.min(100,Math.max(1,Number(count)||20)));
    if(!words.length)throw Error('当前范围没有可练习的词，请补充中文释义，或选择“全部可练习词”');
    const pool=[...entries.filter(eligible),...fallback];
    const queue=words.map((w,i)=>question(w,mode==='mixed'?(i%2?'reverse':'single'):mode,pool));
    return {queue,index:0,answered:0,correct:0,baseCount:queue.length,createdAt:new Date().toISOString()};
  }
  function grade(entries,round,fallback=[]){
    const item=round?.queue[round.index];if(!item||item.checked||!Number.isInteger(item.selected)||!item.options[item.selected])return null;
    const entry=entries.find(w=>w.id===item.id);if(!entry)throw Error('当前词条已移除，请重新开始练习');
    item.checked=true;item.correct=key(item.options[item.selected].word)===key(item.word);round.answered++;entry.record.seen++;
    if(item.correct){round.correct++;entry.record.correct++;entry.record.level=Math.min(4,entry.record.level+1);entry.record.due=new Date(Date.now()+[0,1,3,7,21][entry.record.level]*86400000).toISOString();}
    else{entry.record.wrong++;entry.record.level=Math.max(0,entry.record.level-1);entry.record.due=new Date().toISOString();round.queue.push({...question(entry,item.mode,[...entries.filter(eligible),...fallback]),redo:true});}
    entry.updatedAt=new Date().toISOString();return entry;
  }
  return {MAX_WORDS,MAX_BATCH,MAX_TEXT,key,validWord,clean,eligible,due,summary,parseBatch,shuffle,question,newRound,grade};
});
