/* Nebula: personal, offline reading. Deliberately separate from the IELTS learning state. */
(() => {
  'use strict';
  const C=window.NebulaCore,S=window.NebulaStore,root=document.getElementById('nebulaContent');
  const $=id=>document.getElementById(id),e=C.esc,own=(obj,key)=>Object.hasOwn(obj||{},key);
  document.querySelector('#view-stats .data-controls .muted')?.append(' 此处仅清理雅思题库学习数据，不删除星云文章及其独立记录。');
  let summaries=[],article=null,chunks=[],selected=null,screen='list',active=false,epoch=0;
  let search='',category='',listPage=0,wordPage=0,quotePage=0,dict=null,editorId=null,editorInitial='',savingEditor=false;
  let saveTimer,scrollTimer,saveError='',busy=false,practiceBusy=false,practiceResult='';
  const btn=(action,label,style='secondary-btn',extra='')=>`<button type="button" class="${style}" data-neb-action="${action}" ${extra}>${label}</button>`;
  function message(text,error=false){let node=$('nebMessage');if(!node){node=document.createElement('div');node.id='nebMessage';node.className='neb-message';node.setAttribute('role','status');document.body.append(node);}node.textContent=text;node.classList.toggle('is-error',error);clearTimeout(message.timer);message.timer=setTimeout(()=>node.remove(),5000);}
  function status(text,error=false){const node=$('nebSaveStatus');if(node){node.textContent=text;node.classList.toggle('neb-error',error);}}
  async function persist(index=false){
    clearTimeout(saveTimer);if(!article)return;
    const target=article;target.updatedAt=new Date().toISOString();status('保存中…');
    try{await S.save(target,index);saveError='';if(article?.id===target.id)status('已保存在本机');}
    catch(err){saveError='保存失败：'+err.message;if(article?.id===target.id)status(saveError,true);throw err;}
  }
  function later(){status('尚未保存…');clearTimeout(saveTimer);saveTimer=setTimeout(()=>persist().catch(()=>{}),600);}
  async function finishPending(){clearTimeout(saveTimer);clearTimeout(scrollTimer);if(article&&screen==='read'){article.scroll=window.scrollY;const notes=$('nebNotes');if(notes)article.notes=notes.value;}if(article)await persist();await S.flush();}
  function header(title,sub,actions=''){return `<div class="neb-header"><div><p class="eyebrow">NEBULA / YOUR PRIVATE UNIVERSE</p><h1 id="nebulaHeading">${e(title)}</h1><p class="muted">${e(sub)}</p></div><div class="neb-actions">${actions}</div></div>`;}
  async function list(){
    const ticket=++epoch;screen='list';root.innerHTML=header('星云','正在打开你的本地文章库…');
    try{await S.flush();const data=await S.list();if(!active||ticket!==epoch)return;summaries=data.sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt));article=null;chunks=[];selected=null;practiceResult='';renderList();}
    catch(err){if(active&&ticket===epoch)root.innerHTML=header('星云','本地文章库暂时无法打开',btn('list','重试'))+`<p class="neb-error" role="alert">${e(err.message)}</p>`;}
  }
  function renderList(){
    const tags=[...new Set(summaries.flatMap(a=>a.tags))].sort();
    root.innerHTML=header('星云','把喜欢的文章收进宇宙，让词汇在真实语境中留下轨迹。',btn('new','＋ 新建星云','primary-btn'))+
    `<div class="neb-privacy"><span aria-hidden="true">◇</span><span>私人文章，仅存本机 · 不随应用更新上传到 GitHub · 不识图、不自动翻译全文</span></div><div class="neb-toolbar panel"><label class="neb-search">搜索文章<input id="nebSearch" type="search" value="${e(search)}" placeholder="标题、来源或分类"/></label><label>分类<select id="nebCategory"><option value="">全部分类</option>${tags.map(t=>`<option ${t===category?'selected':''} value="${e(t)}">${e(t)}</option>`).join('')}</select></label><div class="neb-backups">${btn('export','备份星云')}${btn('import','导入备份')}<input id="nebImport" type="file" accept=".json,application/json" hidden/></div></div><div id="nebCards"></div>`;
    renderCards();
  }
  function renderCards(){
    const needle=search.toLowerCase(),items=summaries.filter(a=>(!category||a.tags.includes(category))&&[a.title,a.source,...a.tags].join(' ').toLowerCase().includes(needle));
    listPage=Math.max(0,Math.min(listPage,Math.ceil(items.length/12)-1));
    if(!items.length){$('nebCards').innerHTML=`<div class="neb-empty panel"><div class="neb-cloud" aria-hidden="true"></div><h2>${summaries.length?'没有找到这片星云':'你的第一片星云，从一段文字开始'}</h2><p class="muted">${summaries.length?'试试其他标题或分类。':'收藏一篇喜欢的英文文章，点词查义、留下笔记，再用原句复习。'}</p>${summaries.length?'':btn('new','粘贴一篇文章','primary-btn')}</div>`;return;}
    $('nebCards').innerHTML=`<div class="neb-grid">${items.slice(listPage*12,listPage*12+12).map(a=>{
      let hash=0;for(const ch of a.id)hash=(hash*31+ch.charCodeAt(0))|0;const mastery=a.vocabCount?Math.round(a.mastered/a.vocabCount*100):0;
      return `<button class="neb-card panel" data-neb-action="open" data-id="${e(a.id)}" style="--neb-hue:${230+Math.abs(hash)%90};--neb-size:${90+Math.min(45,Math.sqrt(a.wordCount)*1.4)}px;--neb-bright:${.65+mastery/240}"><div class="neb-card-top"><div class="neb-cloud" aria-hidden="true"></div><span class="neb-local">LOCAL / 私人</span></div><h2>${e(a.title)}</h2><p class="neb-card-source">${e(a.source||'我的文章')} · ${a.wordCount} 词</p><div class="neb-tags">${a.tags.map(t=>`<span>${e(t)}</span>`).join('')}</div><div class="neb-progress-label"><span>阅读</span><strong>${a.readPercent}%</strong></div><div class="neb-track"><i style="width:${a.readPercent}%"></i></div><div class="neb-progress-label"><span>生词掌握 ${a.mastered}/${a.vocabCount}</span><strong>${mastery}%</strong></div><div class="neb-track is-vocab"><i style="width:${mastery}%"></i></div><p class="neb-card-foot">${a.hasRound?'有未完成练习':a.due||a.nextDue<=Date.now()?'有生词待复习':a.quotes+' 条佳句'}<span>进入阅读 ↗</span></p></button>`;
    }).join('')}</div><div class="neb-pagination">${btn('list-prev','上一页','secondary-btn',listPage?'':'disabled')}<span>第 ${listPage+1}/${Math.ceil(items.length/12)} 页 · ${items.length} 篇</span>${btn('list-next','下一页','secondary-btn',(listPage+1)*12<items.length?'':'disabled')}</div>`;
  }
  function editorValues(){return JSON.stringify(['nebulaTitle','nebulaSource','nebulaTags','nebulaBody'].map(id=>$(id).value));}
  function clearEditor(){for(const id of ['nebulaTitle','nebulaSource','nebulaTags','nebulaBody'])$(id).value='';editorInitial='';editorId=null;}
  function openEditor(edit=false){
    editorId=edit?article.id:null;$('nebulaEditorTitle').textContent=edit?'编辑星云':'新建星云';
    $('nebulaTitle').value=edit?article.title:'';$('nebulaSource').value=edit?article.source:'';$('nebulaTags').value=edit?article.tags.join(', '):'';$('nebulaBody').value=edit?article.body:'';
    $('nebulaEditorError').textContent='';$('nebulaBodyCount').textContent=C.countWords($('nebulaBody').value)+' 词';editorInitial=editorValues();$('nebulaEditor').showModal();$('nebulaTitle').focus();
  }
  function closeEditor(){if(savingEditor)return;if(editorInitial!==editorValues()&&!confirm('放弃尚未保存的文章修改？'))return;$('nebulaEditor').close();clearEditor();}
  $('nebulaEditorClose').onclick=closeEditor;$('nebulaEditorCancel').onclick=closeEditor;
  $('nebulaEditor').addEventListener('cancel',event=>{event.preventDefault();closeEditor();});
  $('nebulaBody').addEventListener('input',()=>{$('nebulaBodyCount').textContent=C.countWords($('nebulaBody').value)+' 词';});
  $('nebulaEditorForm').addEventListener('submit',async event=>{
    event.preventDefault();if(savingEditor)return;savingEditor=true;$('nebulaEditorSave').disabled=true;
    try{
      if(article)await finishPending();const old=editorId?article:null;
      const value=C.cleanArticle({...old,id:editorId||'neb-'+crypto.randomUUID(),title:$('nebulaTitle').value,source:$('nebulaSource').value,tags:$('nebulaTags').value.split(/[,，]/),body:$('nebulaBody').value,updatedAt:new Date().toISOString()});
      if(old){if(value.body===old.body)value.round=old.round;else{if(!confirm('修改正文会重置阅读进度和未完成练习；已收藏的生词原句、佳句和笔记会保留。继续？'))return;value.page=0;value.scroll=0;value.readPages=[];}}
      await S.save(value);article=null;$('nebulaEditor').close();clearEditor();await openArticle(value.id);message('文章已保存在本机');
    }catch(err){$('nebulaEditorError').textContent=err.message;}
    finally{savingEditor=false;$('nebulaEditorSave').disabled=false;}
  });
  async function openArticle(id){
    if(article)await finishPending();const ticket=++epoch;
    const value=await S.get(id);if(!active||ticket!==epoch)return;if(!value)throw Error('这篇文章已不存在');
    article=value;chunks=C.pages(article.body);screen='read';selected=null;wordPage=0;quotePage=0;renderRead();
    const offset=article.scroll||0;requestAnimationFrame(()=>{if(active&&screen==='read'&&ticket===epoch)window.scrollTo(0,offset);});
  }
  function bodyHtml(){
    const page=chunks[article.page],saved=new Set(Object.values(article.vocab).flatMap(w=>[C.key(w.word),C.key(w.surface)]));let offset=0,out='';
    for(const match of page.text.matchAll(C.wordRegex())){out+=e(page.text.slice(offset,match.index));const k=C.key(match[0]),mark=own(article.marks,k)?article.marks[k]:'';
      out+=`<button type="button" class="neb-word ${saved.has(k)?'is-saved':mark==='known'?'is-known':mark==='unfamiliar'?'is-unfamiliar':''}" data-start="${page.offset+match.index}" data-end="${page.offset+match.index+match[0].length}" data-surface="${e(match[0])}">${e(match[0])}</button>`;offset=match.index+match[0].length;
    }return out+e(page.text.slice(offset));
  }
  function renderRead(){
    if(!active||!article)return;
    screen='read';const meta=C.summary(article);
    root.innerHTML=header(article.title,article.source||'我的私人文章',btn('back','← 全部星云')+btn('save','保存')+btn('edit','编辑文章')+btn('delete','删除','secondary-btn neb-danger'))+
    `<div class="neb-reading-meta"><div class="neb-tags">${article.tags.map(t=>`<span>${e(t)}</span>`).join('')}</div><span>${meta.wordCount} 词 · 阅读 ${meta.readPercent}% · 生词掌握 ${meta.mastered}/${meta.vocabCount}</span><span id="nebSaveStatus" role="status">${e(saveError||'已保存在本机')}</span></div>
    <div class="neb-reader-layout"><article class="panel neb-reader"><div class="neb-reader-top"><span>READ AT YOUR OWN PACE</span><span>第 ${article.page+1}/${chunks.length} 页</span></div><div id="nebArticleBody" class="neb-body" lang="en">${bodyHtml()}</div><div class="neb-page-actions">${btn('read-prev','← 上一页','secondary-btn',article.page?'':'disabled')}${btn('read-mark',article.readPages.includes(article.page)?'✓ 本页已读':'标记本页已读',article.readPages.includes(article.page)?'secondary-btn':'primary-btn')}${btn('read-next','下一页 →','secondary-btn',article.page+1<chunks.length?'':'disabled')}</div><div class="neb-reader-tools">${btn('quote-selection','收藏所选句子','text-btn')}${btn('read-all','标记全文已读','text-btn')}</div><p class="neb-tip">点词查义不会自动算作已掌握。阅读进度由你标记；生词通过练习单独积累。</p></article>
    <aside class="neb-sidebar"><section class="panel neb-lookup" id="nebLookup"><p class="eyebrow">WORD SIGNAL / 词语信号</p><h2>点亮一个单词</h2><p class="muted">点击文章中的英文词，查询离线词库；也可以手动补充它在本文中的含义。</p></section><section class="panel neb-note"><label for="nebNotes">阅读笔记</label><textarea id="nebNotes" rows="5" maxlength="10000" placeholder="记下观点、联想和疑问…">${e(article.notes)}</textarea><p class="neb-tip">自动保存在本机，不参与题库统计。</p></section></aside></div>
    <section class="panel neb-collection"><div class="neb-section-title"><h2>从文章里带走的词</h2><span>掌握 ${meta.mastered}/${meta.vocabCount} · ${meta.due} 词待复习</span></div><div class="neb-training-setup"><label>题型<select id="nebMode"><option value="mixed">混合练习</option><option value="fill">原句填空</option><option value="recall">中文 → 英文</option></select></label><label>范围<select id="nebScope"><option value="due">到期与新生词</option><option value="all">全部生词</option></select></label><label>题量<select id="nebCount"><option value="10">10</option><option value="20" selected>20</option><option value="all">全部</option></select></label>${btn('practice-start','开始练习','primary-btn')}${article.round?btn('practice-resume','继续上次练习'):''}</div><p class="neb-tip">使用收藏时的原句与本文语境义；答错排到本轮末尾。与全书遍历和雅思题库记录互不影响。</p><div id="nebVocabList"></div></section>
    <section class="panel neb-collection"><div class="neb-section-title"><h2>佳句收藏</h2><span>${article.quotes.length} 条</span></div><div id="nebQuotes"></div></section>`;
    renderVocab();renderQuotes();if(selected)renderLookup();
  }
  function dictionary(){
    if(dict)return dict;dict=new Map();
    for(const word of state.words){
      const external=typeof qExternalEntry==='function'?qExternalEntry(word):null;
      if(!external?.meaning&&!(typeof qVerified==='function'&&qVerified(word)))continue;
      const k=C.key(word.word);if(!dict.has(k))dict.set(k,{word,external:false});
    }
    const external=window.EXTERNAL_VOCAB||{};for(const [key,value] of Object.entries(external)){const k=C.key(value.word||key);if(!dict.has(k))dict.set(k,{word:value,external:true});}
    return dict;
  }
  async function selectWord(button){
    const surface=button.dataset.surface;let found;
    for(const candidate of C.candidates(surface)){if(dictionary().has(candidate)){found={...dictionary().get(candidate),key:candidate};break;}}
    const lemma=found?.key||C.key(surface),saved=own(article.vocab,lemma)?article.vocab[lemma]:null,word=found?.word;
    const external=found?.external?word:word&&typeof qExternalEntry==='function'?qExternalEntry(word):null;
    const ipa=String(external?.ipa||word?.ipa||''),pos=String(external?.pos||word?.pos||'');
    selected={key:lemma,surface,context:C.sentence(article.body,Number(button.dataset.start),Number(button.dataset.end)),meaning:saved?.meaning||(word?(found.external?word.meaning:typeof qFullMeaning==='function'?qFullMeaning(word):word.meaning)||'':''),pos:saved?.pos||(/待核验|—/.test(pos)?'':pos),ipa:saved?.ipa||(/待核验|—/.test(ipa)?'':ipa),dictId:found&&!found.external?word.id:'',matched:!!found};
    renderLookup();if(innerWidth<=850)$('nebLookup').scrollIntoView({block:'start'});
    const current=selected,refs=await S.references(lemma);if(!active||selected!==current)return;
    const node=$('nebOtherSources');if(node)node.textContent=refs.filter(a=>a.articleId!==article.id).slice(0,4).map(a=>a.title).join('、')||'暂无其他文章收藏';
  }
  function renderLookup(){
    if(!selected)return;const w=selected,saved=own(article.vocab,w.key),linked=w.dictId?state.words.find(a=>a.id===w.dictId):null,record=linked?state.records[linked.id]:null;
    $('nebLookup').innerHTML=`<p class="eyebrow">WORD SIGNAL / 词语信号</p><div class="neb-word-heading"><h2>${e(w.key)}</h2>${btn('speak','◖)) 发音','text-btn')}</div>${C.key(w.surface)!==w.key?`<p class="muted">原文词形：${e(w.surface)}</p>`:''}<p class="neb-dict-status">${w.matched?'已关联本地词典':'本地词典暂无匹配，请手动补充'}</p><label>本文语境义（用于练习）<textarea id="nebMeaning" rows="3" maxlength="1000">${e(w.meaning)}</textarea></label><div class="neb-form-grid"><label>词性<input id="nebPos" maxlength="60" value="${e(w.pos)}"/></label><label>音标<input id="nebIpa" maxlength="120" value="${e(w.ipa)}"/></label></div><blockquote class="neb-context" lang="en">${e(w.context)}</blockquote><div class="neb-actions">${btn('known','认识')}${btn('unfamiliar','不熟悉')}${btn('vocab-save',saved?'更新生词':'加入生词','primary-btn')}</div><p class="neb-tip">“认识 / 不熟悉”只做阅读标记，不改变掌握度。发音使用系统已安装语音。</p>${btn('quote-current','收藏这句原文','text-btn')}${linked?`<p class="neb-link-info">雅思词库：${e(linked.word)} · ${record?.level>=3?'已掌握':record?.seen?'学习中':'未练习'}（只读关联）</p>`:''}<p class="neb-tip">也收藏于：<span id="nebOtherSources">正在查询…</span></p>`;
  }
  function renderVocab(){
    const words=Object.values(article.vocab);wordPage=Math.max(0,Math.min(wordPage,Math.ceil(words.length/30)-1));
    $('nebVocabList').innerHTML=words.length?words.slice(wordPage*30,wordPage*30+30).map(w=>`<div class="neb-vocab-row"><div><strong>${e(w.word)}</strong> <span class="muted">${e(w.pos)} ${e(w.ipa)}</span><p>${e(w.meaning)}</p></div><div><small>${w.level>=3?'已掌握':'学习中 '+w.level+'/3'} · 答对 ${w.correct} 次</small>${btn('vocab-remove','移除','text-btn neb-danger',`data-key="${e(w.word)}"`)}</div></div>`).join('')+(words.length>30?`<div class="neb-pagination">${btn('vocab-prev','上一页','secondary-btn',wordPage?'':'disabled')}<span>${wordPage+1}/${Math.ceil(words.length/30)}</span>${btn('vocab-next','下一页','secondary-btn',(wordPage+1)*30<words.length?'':'disabled')}</div>`:''):`<p class="muted neb-empty-copy">还没有收藏生词。阅读时点词，补充语境义后加入这里。</p>`;
  }
  function renderQuotes(){
    quotePage=Math.max(0,Math.min(quotePage,Math.ceil(article.quotes.length/20)-1));
    $('nebQuotes').innerHTML=article.quotes.length?article.quotes.slice(quotePage*20,quotePage*20+20).map(q=>`<article class="neb-quote"><blockquote lang="en">${e(q.text)}</blockquote><label>我的译文 / 笔记<textarea rows="2" maxlength="4000" data-quote-note="${e(q.id)}">${e(q.note)}</textarea></label>${btn('quote-remove','移除佳句','text-btn neb-danger',`data-id="${e(q.id)}"`)}</article>`).join('')+(article.quotes.length>20?`<div class="neb-pagination">${btn('quote-prev','上一页','secondary-btn',quotePage?'':'disabled')}<span>${quotePage+1}/${Math.ceil(article.quotes.length/20)}</span>${btn('quote-next','下一页','secondary-btn',(quotePage+1)*20<article.quotes.length?'':'disabled')}</div>`:''):'<p class="muted neb-empty-copy">选中文章里的句子，再点击“收藏所选句子”；也可收藏点词面板中的原句。</p>';
  }
  async function addQuote(text){
    text=text.trim();if(!text)throw Error('请先在正文中选中要收藏的句子');if(text.length>4000)throw Error('每条佳句最多 4,000 字符，请缩小选取范围');
    if(article.quotes.some(q=>q.text===text)){message('这句话已经收藏过了');return;}if(article.quotes.length>=300)throw Error('每篇最多收藏 300 条佳句');
    article.quotes.push({id:crypto.randomUUID(),text,note:''});await persist();quotePage=Math.floor((article.quotes.length-1)/20);renderQuotes();message('佳句已收藏');
  }
  function renderPractice(){
    if(!active||!article?.round)return;
    screen='practice';const r=article.round,item=r.queue[r.index],w=article.vocab[item.key];
    root.innerHTML=header('语境航行',article.title,btn('practice-exit','保存并返回阅读'))+`<div class="neb-practice-progress"><span>第 ${r.index+1}/${r.queue.length} 题 · 原定 ${r.baseCount} 题 · 待重做 ${r.queue.filter(i=>i.redo&&!i.checked).length}</span><span>已提交 ${r.answered} · 正确 ${r.correct}</span></div><div class="neb-track"><i style="width:${r.answered/r.queue.length*100}%"></i></div><article class="panel neb-practice"><p class="eyebrow">${item.mode==='fill'?'CONTEXT / 原句填空':'RECALL / 中文回忆英文'}</p><h2>${item.mode==='fill'?'把单词放回它的句子':'根据本文语境义，写出英文'}</h2><p class="neb-practice-prompt" ${item.mode==='fill'?'lang="en"':''}>${e(item.mode==='fill'?C.mask(w.context,w.surface):w.meaning)}</p><p class="neb-tip">${item.mode==='fill'?'按原文词形填写；不区分大小写。':'填写收藏的词条或原文词形；不区分大小写。'}</p><form id="nebAnswerForm"><label for="nebAnswer">你的答案</label><input id="nebAnswer" maxlength="100" autocomplete="off" autocapitalize="off" spellcheck="false" value="${e(item.answer)}" ${item.checked?'disabled':''}/>${item.checked?'':`<button type="submit" class="primary-btn">提交答案 →</button>`}</form>${item.checked?`<div class="neb-feedback ${item.correct?'is-correct':'is-wrong'}" role="status"><h3>${item.correct?'✓ 答对了':'✕ 再记住这个词，稍后会重做'}</h3><p class="neb-answer-word">${e(w.word)} <small>${e(w.pos)} ${e(w.ipa)}</small></p><p>${e(w.meaning)}</p><blockquote lang="en">${e(w.context)}</blockquote>${btn('speak-answer','听发音','secondary-btn')}${btn('practice-next',r.index+1<r.queue.length?'下一题 →':'完成本轮','primary-btn')}</div>`:''}</article>`;
    window.scrollTo(0,0);if(!item.checked)$('nebAnswer').focus({preventScroll:true});
  }
  async function exportBackup(){
    if(!confirm('备份包含你的私人文章、笔记、佳句和生词记录。仅保存到你选择的本机位置，请勿放进公开仓库。继续？'))return;
    await finishPending();const metadata=await S.list(),stamp=new Date().toISOString(),encoder=new TextEncoder();let pieces=[],bytes=0,part=0;
    const download=()=>{
      const prefix=JSON.stringify({format:'wordorbit-nebula',version:1,exportedAt:stamp}).slice(0,-1)+',"articles":[';
      const blob=new Blob([prefix,pieces.join(','),']}'],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');
      link.href=url;link.download='wordorbit-nebula-backup-'+stamp.slice(0,10)+'-part'+String(++part).padStart(2,'0')+'.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);pieces=[];bytes=0;
    };
    // Read one private body at a time, and create independently importable volumes.
    for(const meta of metadata){const value=await S.get(meta.id);if(!value)continue;const json=JSON.stringify(value),size=encoder.encode(json).length;
      if(size>18*1024*1024)throw Error('文章“'+meta.title+'”的未完成练习过大，请完成该篇练习后再备份');
      if(pieces.length&&(bytes+size>18*1024*1024||pieces.length>=500))download();pieces.push(json);bytes+=size+1;
    }
    if(pieces.length||!part)download();message(`已导出 ${part} 个星云备份分卷，请妥善保管；多分卷需逐个导入`);
  }
  async function importBackup(file){
    if(!file)return;if(file.size>20*1024*1024)throw Error('备份最多 20 MB');const data=JSON.parse(await file.text());
    if(data.format!=='wordorbit-nebula'||data.version!==1||!Array.isArray(data.articles)||data.articles.length>500)throw Error('不是支持的星云备份（每次最多 500 篇）');
    const values=data.articles.map(C.cleanArticle);if(!confirm(`导入 ${values.length} 篇私人文章？相同编号会跳过，不覆盖现有内容。备份中的进行中题目将重置，生词进度保留。`))return;
    await S.flush();const ids=new Set((await S.list()).map(a=>a.id));let count=0;for(const value of values){if(ids.has(value.id))continue;await S.save(value);ids.add(value.id);count++;}await list();message(`已导入 ${count} 篇，跳过 ${values.length-count} 篇重复文章`);
  }
  root.addEventListener('submit',async event=>{
    if(event.target.id!=='nebAnswerForm')return;event.preventDefault();if(practiceBusy)return;const answer=$('nebAnswer').value.trim();if(!answer){$('nebAnswer').focus();return;}
    practiceBusy=true;const before=structuredClone(article);
    try{if(C.grade(article,answer)){await persist();renderPractice();}}
    catch(err){article=before;message('答案未保存，请重试：'+err.message,true);}finally{practiceBusy=false;}
  });
  root.addEventListener('input',event=>{
    if(event.target.id==='nebSearch'){search=event.target.value;listPage=0;renderCards();}
    if(event.target.id==='nebNotes'){article.notes=event.target.value;later();}
    const id=event.target.dataset.quoteNote;if(id&&article){const quote=article.quotes.find(q=>q.id===id);if(quote){quote.note=event.target.value;later();}}
  });
  root.addEventListener('change',event=>{
    if(event.target.id==='nebCategory'){category=event.target.value;listPage=0;renderCards();}
    if(event.target.id==='nebImport'){busy=true;importBackup(event.target.files[0]).catch(err=>message('导入未完成：'+err.message,true)).finally(()=>{busy=false;});event.target.value='';}
  });
  root.addEventListener('click',async event=>{
    const word=event.target.closest('.neb-word');if(word){selectWord(word).catch(err=>message(err.message,true));return;}
    const button=event.target.closest('[data-neb-action]');if(!button||busy||practiceBusy)return;const action=button.dataset.nebAction;
    busy=true;
    try{
      switch(action){
        case 'list':await list();break;
        case 'new':openEditor();break;
        case 'edit':openEditor(true);break;
        case 'save':await finishPending();message('文章与学习内容已保存在本机');break;
        case 'open':await openArticle(button.dataset.id);break;
        case 'back':await finishPending();await list();window.scrollTo(0,0);break;
        case 'list-prev':listPage--;renderCards();break;
        case 'list-next':listPage++;renderCards();break;
        case 'delete':if(confirm('删除这篇私人文章及其生词、佳句、笔记和练习？此操作不能撤销，不影响雅思题库。')){clearTimeout(saveTimer);clearTimeout(scrollTimer);await S.remove(article);article=null;await list();message('这片星云已删除；如有手动备份可重新导入');}break;
        case 'read-prev':case 'read-next':await finishPending();article.page+=action==='read-next'?1:-1;article.scroll=0;selected=null;await persist();renderRead();window.scrollTo(0,0);break;
        case 'read-mark':if(!article.readPages.includes(article.page)){article.readPages.push(article.page);await persist();renderRead();}break;
        case 'read-all':if(confirm('将整篇文章标记为已读？这不会改变生词掌握度。')){article.readPages=chunks.map((_,i)=>i);await persist();renderRead();}break;
        case 'known':case 'unfamiliar':article.marks[C.key(selected.surface)]=action;await persist();$('nebArticleBody').innerHTML=bodyHtml();message(action==='known'?'已标记认识；不改变掌握度':'已标记不熟悉；加入生词后可练习');break;
        case 'vocab-save':{
          const meaning=$('nebMeaning').value.trim();if(!meaning)throw Error('请先补充这个词在本文中的含义');if(!own(article.vocab,selected.key)&&Object.keys(article.vocab).length>=1000)throw Error('每篇最多收藏 1,000 个生词');
          const previous=own(article.vocab,selected.key)?article.vocab[selected.key]:{};
          article.vocab[selected.key]={level:0,seen:0,correct:0,wrong:0,due:null,...previous,word:selected.key,surface:selected.surface,context:selected.context,dictId:selected.dictId,meaning,pos:$('nebPos').value.trim(),ipa:$('nebIpa').value.trim()};
          selected={...selected,meaning,pos:$('nebPos').value.trim(),ipa:$('nebIpa').value.trim()};await persist(true);renderRead();message('生词已保存，原句也已保留');break;
        }
        case 'vocab-remove':if(confirm('移除这个生词？它的个人复习记录也会移除，进行中的文章练习将重置。')){delete article.vocab[button.dataset.key];article.round=null;await persist(true);renderRead();}break;
        case 'vocab-prev':wordPage--;renderVocab();break;case 'vocab-next':wordPage++;renderVocab();break;
        case 'quote-prev':quotePage--;renderQuotes();break;case 'quote-next':quotePage++;renderQuotes();break;
        case 'quote-current':await addQuote(selected.context);break;
        case 'quote-selection':{const selection=window.getSelection(),body=$('nebArticleBody');if(!selection.rangeCount||!body.contains(selection.anchorNode)||!body.contains(selection.focusNode))throw Error('请先在文章正文中选中句子');await addQuote(selection.toString());break;}
        case 'quote-remove':if(confirm('移除这条佳句及其笔记？')){article.quotes=article.quotes.filter(q=>q.id!==button.dataset.id);await persist();renderQuotes();}break;
        case 'speak':speak(selected.key);break;
        case 'speak-answer':speak(article.round.queue[article.round.index].key);break;
        case 'practice-start':{
          if(article.round&&!confirm('重新开始会替换本篇未完成练习，已累计的生词记录保留。继续？'))break;
          const round=C.newRound(article,$('nebMode').value,$('nebScope').value,$('nebCount').value);if(!round)throw Error('当前范围没有可练习的生词，请先收藏生词或改选“全部生词”');
          await finishPending();article.round=round;await persist();renderPractice();break;
        }
        case 'practice-resume':await finishPending();renderPractice();break;
        case 'practice-exit':await persist();renderRead();window.scrollTo(0,0);break;
        case 'practice-next':{
          const r=article.round;if(!r.queue[r.index].checked)break;
          if(r.index+1<r.queue.length){r.index++;await persist();renderPractice();}
          else{practiceResult=`本轮完成：${r.answered} 次作答，答对 ${r.correct} 次。生词进度已保存。`;article.round=null;await persist();renderRead();window.scrollTo(0,0);message(practiceResult);}break;
        }
        case 'export':await exportBackup();break;case 'import':$('nebImport').click();break;
      }
    }catch(err){message(err.message,true);}finally{busy=false;}
  });
  window.addEventListener('scroll',()=>{
    if(!active||screen!=='read'||!article)return;clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>{if(active&&screen==='read'&&article){article.scroll=window.scrollY;persist().catch(()=>{});}},800);
  },{passive:true});
  window.addEventListener('pagehide',()=>{if(active&&article){if(screen==='read')article.scroll=window.scrollY;persist().catch(()=>{});}});
  window.addEventListener('beforeunload',event=>{if(saveError){event.preventDefault();event.returnValue='';}});
  const previousShowView=showView;
  showView=function(name){
    if(active&&name!=='nebula'){
      if(busy||practiceBusy){message('正在保存当前操作，请稍候再切换页面');return;}
      if(saveError){message('星云内容尚未保存，请重试保存或备份后再离开',true);return;}
      const exiting=article;clearTimeout(scrollTimer);clearTimeout(saveTimer);
      if(exiting){if(screen==='read'){exiting.scroll=window.scrollY;const notes=$('nebNotes');if(notes)exiting.notes=notes.value;}
        // Snapshot first; free rendered private text only after the transaction succeeds.
        S.save(exiting,false).then(()=>{if(!active&&article===exiting){article=null;chunks=[];selected=null;root.replaceChildren();}},err=>{saveError=err.message;message('星云保存失败，请返回星云重试：'+err.message,true);});
      }else root.replaceChildren();active=false;++epoch;dict=null;
    }
    previousShowView(name);
    if(name==='nebula'&&!active){active=true;if(article){chunks=C.pages(article.body);screen==='practice'&&article.round?renderPractice():renderRead();}else list();}
  };
  window.WordOrbitNebula={snapshot:()=>({active,screen,articleId:article?.id||null,loadedArticles:article?1:0,renderedWords:root.querySelectorAll('.neb-word').length,summaryCount:summaries.length}),flush:()=>finishPending()};
})();
