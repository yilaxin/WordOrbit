/* Pure article helpers. Never changes the IELTS catalog or its learning records. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.NebulaCore = api;
})(typeof window !== 'undefined' ? window : globalThis, () => {
  'use strict';
  const LIMIT = 100000;
  const integer=(value,max=Number.MAX_SAFE_INTEGER)=>Math.min(max,Math.max(0,Math.trunc(Number(value)||0)));
  const key = value => String(value || '').trim().toLowerCase().replace(/’/g, "'");
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const wordRegex = () => /[A-Za-z]+(?:['’\-][A-Za-z]+)*/g;
  const normalize = text => String(text || '').replace(/\r\n?/g,'\n').replace(/\u00a0/g,' ').split('\n').map(line => line.trim()).join('\n').replace(/\n{3,}/g,'\n\n').trim();
  const countWords = text => (text.match(wordRegex()) || []).length;
  function pages(text) {
    const chunks=[]; let page='', offset=0, start=0;
    while (offset < text.length) {
      let end=Math.min(text.length,offset+3800);
      if(end<text.length){
        const endings=[...text.slice(offset,end).matchAll(/[.!?]["']?\s|\n\n/g)];
        const last=endings.at(-1);if(last&&last.index>2400)end=offset+last.index+last[0].length;
        else{const boundary=text.lastIndexOf(' ',end);if(boundary>offset+2400)end=boundary;}
      }
      const chunk=text.slice(offset,end);
      if(page && page.length+chunk.length>4600){chunks.push({text:page,offset:start});page='';}
      if(!page)start=offset;
      page+=chunk;offset=end;
    }
    if(page)chunks.push({text:page,offset:start});
    return chunks.length?chunks:[{text:'',offset:0}];
  }
  function candidates(value) {
    const word=key(value), result=[word];
    const irregular={went:'go',gone:'go',ran:'run',written:'write',wrote:'write',taken:'take',took:'take',seen:'see',saw:'see',made:'make',grew:'grow',grown:'grow',children:'child',mice:'mouse',feet:'foot',teeth:'tooth'};
    if(irregular[word])result.push(irregular[word]);
    if(word.endsWith("'s"))result.push(word.slice(0,-2));
    if(word.endsWith('ies'))result.push(word.slice(0,-3)+'y');
    if(word.endsWith('s')&&!word.endsWith('ss'))result.push(word.slice(0,-1));
    if(word.endsWith('es'))result.push(word.slice(0,-2));
    for(const suffix of ['ing','ed'])if(word.endsWith(suffix)){
      const base=word.slice(0,-suffix.length);result.push(base,base+'e');
      if(/([b-df-hj-np-tv-z])\1$/.test(base))result.push(base.slice(0,-1));
      if(suffix==='ed'&&base.endsWith('i'))result.push(base.slice(0,-1)+'y');
    }
    return [...new Set(result.filter(w=>w.length>1))];
  }
  function sentence(text,start,end) {
    let left=start,right=end;
    while(left>0&&!/[.!?\n]/.test(text[left-1]))left--;
    while(right<text.length&&!/[.!?\n]/.test(text[right]))right++;
    if(right<text.length)right++;
    // A very long unpunctuated paragraph should not turn into an entire exercise page.
    if(start-left>250){left=Math.max(left,start-200);while(left<start&&/\S/.test(text[left]))left++;}
    if(right-end>250){right=Math.min(right,end+200);while(right>end&&/\S/.test(text[right-1]))right--;}
    return text.slice(left,right).trim();
  }
  function mask(context,surface) {
    const escaped=surface.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    return context.replace(new RegExp('(?<![A-Za-z])'+escaped+'(?![A-Za-z])','gi'),'________');
  }
  function summary(article) {
    const vocab=Object.values(article.vocab||{}),totalPages=pages(article.body).length;
    const read=Math.min(totalPages,new Set(article.readPages||[]).size);
    return {id:article.id,title:article.title,source:article.source,tags:article.tags,createdAt:article.createdAt,updatedAt:article.updatedAt,wordCount:countWords(article.body),pageCount:totalPages,readCount:read,readPercent:Math.round(read/totalPages*100),vocabCount:vocab.length,mastered:vocab.filter(w=>(w.level||0)>=3).length,due:vocab.filter(w=>!w.due||Date.parse(w.due)<=Date.now()).length,nextDue:Math.min(...vocab.filter(w=>w.due).map(w=>Date.parse(w.due)),Infinity),quotes:(article.quotes||[]).length,hasRound:!!article.round};
  }
  function cleanArticle(raw) {
    if(!raw||typeof raw!=='object')throw Error('文章格式不正确');
    const body=normalize(raw.body),title=String(raw.title||'').trim().slice(0,160);
    if(!title||!body||body.length>LIMIT)throw Error('请填写标题和正文；每篇正文最多 100,000 字符');
    if(!countWords(body))throw Error('正文中没有可识别的英文单词');
    const id=String(raw.id||'');if(!/^[a-zA-Z0-9_-]{8,100}$/.test(id))throw Error('文章编号不正确');
    const vocab={};
    for(const value of Object.values(raw.vocab||{}).slice(0,1000)){
      const word=key(value?.word);if(!/^[a-z]+(?:['-][a-z]+)*$/.test(word))continue;
      const meaning=String(value.meaning||'').trim().slice(0,1000);if(!meaning)continue;
      vocab[word]={word,surface:String(value.surface||word).slice(0,100),meaning,pos:String(value.pos||'').slice(0,60),ipa:String(value.ipa||'').slice(0,120),context:String(value.context||'').slice(0,1000),dictId:String(value.dictId||'').slice(0,100),level:integer(value.level,4),seen:integer(value.seen),correct:integer(value.correct),wrong:integer(value.wrong),due:typeof value.due==='string'&&Number.isFinite(Date.parse(value.due))?value.due:null};
    }
    const total=pages(body).length;
    const readPages=[...new Set((Array.isArray(raw.readPages)?raw.readPages:[]).filter(n=>Number.isInteger(n)&&n>=0&&n<total))];
    const marks={};for(const [word,value] of Object.entries(raw.marks||{}).slice(0,2000))if(/^[a-z]+(?:['-][a-z]+)*$/.test(word)&&['known','unfamiliar'].includes(value))marks[word]=value;
    const quotes=(Array.isArray(raw.quotes)?raw.quotes:[]).slice(0,300).map(q=>({id:String(q.id||'').slice(0,100),text:String(q.text||'').slice(0,4000),note:String(q.note||'').slice(0,4000)})).filter(q=>q.id&&q.text);
    const date=value=>typeof value==='string'&&Number.isFinite(Date.parse(value))?new Date(value).toISOString():new Date().toISOString();
    return {id,title,body,source:String(raw.source||'').slice(0,500),tags:[...new Set((Array.isArray(raw.tags)?raw.tags:[]).slice(0,10).map(t=>String(t).trim().slice(0,30)).filter(Boolean))],notes:String(raw.notes||'').slice(0,10000),vocab,quotes,marks,readPages,page:integer(raw.page,total-1),scroll:integer(raw.scroll),createdAt:date(raw.createdAt),updatedAt:date(raw.updatedAt),round:null};
  }
  function newRound(article,mode='mixed',scope='due',limit=20) {
    let words=Object.values(article.vocab).filter(w=>scope!=='due'||!w.due||Date.parse(w.due)<=Date.now());
    for(let i=words.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[words[i],words[j]]=[words[j],words[i]];}
    words=words.slice(0,limit==='all'?words.length:Number(limit));
    const queue=words.map((w,i)=>{const type=mode==='mixed'?(i%2?'recall':'fill'):mode;return {key:w.word,mode:type==='fill'&&mask(w.context,w.surface)!==w.context?'fill':'recall',checked:false,answer:'',correct:false};});
    return queue.length?{queue,index:0,answered:0,correct:0,baseCount:queue.length}:null;
  }
  function grade(article,answer) {
    const round=article.round,item=round?.queue[round.index];if(!item||item.checked)return null;
    const word=article.vocab[item.key];if(!word)return null;
    const accepted=item.mode==='fill'?[word.surface]:[word.word,word.surface];
    item.answer=String(answer).trim().slice(0,100);item.correct=accepted.some(w=>key(w)===key(item.answer));item.checked=true;
    round.answered++;word.seen++;
    if(item.correct){round.correct++;word.correct++;word.level=Math.min(4,word.level+1);word.due=new Date(Date.now()+[0,1,3,7,21][word.level]*86400000).toISOString();}
    else{word.wrong++;word.level=Math.max(0,word.level-1);word.due=new Date().toISOString();round.queue.push({key:item.key,mode:item.mode,checked:false,answer:'',correct:false,redo:true});}
    return item;
  }
  return {LIMIT,key,esc,wordRegex,normalize,countWords,pages,candidates,sentence,mask,summary,cleanArticle,newRound,grade};
});
