/* My Words: private vocabulary, bounded lists, independent exercises and backups. */
(() => {
  'use strict';
  const C=MyWordsCore,S=MyWordsStore,e=NebulaCore.esc,$=id=>document.getElementById(id),root=$('myWordsContent');
  document.querySelector('#view-stats .data-controls .muted')?.append(' “我的词库”的私人词条和独立练习记录也不受此处影响。');
  let entries=[],round=null,counts={total:0,ready:0,done:0,due:0},active=false,screen='list',busy=false,epoch=0,loading=Promise.resolve();
  let search='',filter='all',page=0,editing=null,initial='',preview=[],previewPage=0,previewText='',dictionary=null;
  const fields={word:'myWordValue',meaning:'myWordMeaning',pos:'myWordPos',ipa:'myWordIpa',example:'myWordExample',exampleZh:'myWordExampleZh',notes:'myWordNotes',tags:'myWordTags'};
  const button=(action,label,css='secondary-btn',extra='')=>`<button type="button" class="${css}" data-my-action="${action}" ${extra}>${label}</button>`;
  function notify(text,error=false){let node=$('myWordsMessage');if(!node){node=document.createElement('div');node.id='myWordsMessage';node.className='neb-message';node.setAttribute('role','status');document.body.append(node);}node.textContent=text;node.classList.toggle('is-error',error);clearTimeout(notify.timer);notify.timer=setTimeout(()=>node.remove(),5500);}
  function setCounts(value){counts={total:Number(value?.total)||0,ready:Number(value?.ready)||0,done:Number(value?.done)||0,due:Number(value?.due)||0};if(document.querySelector('#view-home')?.classList.contains('active'))window.WordOrbitConstellation?.render();}
  function dictionaryEntry(value){
    if(!dictionary){dictionary=new Map();for(const word of state.words)if(qExternalEntry(word)?.meaning||qVerified(word))dictionary.set(C.key(word.word),word);}
    const key=C.key(value),external=window.EXTERNAL_VOCAB?.[key],book=dictionary.get(key),example=window.EXAMPLE_SENTENCES?.[key];
    if(!external?.meaning&&!book)return null;
    const ipa=String(external?.ipa||book?.ipa||''),pos=String(external?.pos||book?.pos||'');
    return {meaning:external?.meaning||qFullMeaning(book),ipa:/待核验|—/.test(ipa)?'':ipa,pos:/待核验|—/.test(pos)?'':pos,example:example?.en||'',exampleZh:example?.zh||''};
  }
  function fallback(){return state.words.filter(word=>C.validWord(word.word)&&qVerified(word)).map(word=>({word:word.word,meaning:qFullMeaning(word)}));}
  async function commit(next,nextRound,puts=[],removes=[]){const summary=C.summary(next);await S.commit({puts,removes,round:nextRound,summary});entries=next;round=nextRound;setCounts(summary);}
  function heading(actions=''){return `<div class="neb-header"><div><p class="eyebrow">MY WORDS / YOUR OWN ORBIT</p><h1 id="myWordsHeading">我的词库</h1><p class="muted">把遇见的每一个新词，放进自己的轨道。</p></div><div class="neb-actions">${actions}</div></div>`;}
  async function enter(){
    const ticket=++epoch;screen='list';root.innerHTML=heading()+'<p class="muted">正在打开本机私人词库…</p>';
    loading=(async()=>{
      try{const data=await S.load();if(!active||ticket!==epoch)return;entries=data.entries.map(C.clean);round=data.round;
        if(round&&(!Array.isArray(round.queue)||!Number.isInteger(round.index)||!round.queue[round.index]||round.queue.some(q=>!entries.some(w=>w.id===q.id)||!['single','reverse'].includes(q.mode)||q.options?.length!==4)))round=null;
        setCounts(C.summary(entries));renderList();
      }catch(error){if(active&&ticket===epoch)root.innerHTML=heading(button('retry','重试'))+`<p class="neb-error" role="alert">${e(error.message)}</p>`;}
    })();return loading;
  }
  function renderList(){
    if(!active)return;screen='list';const pending=counts.total-counts.ready;
    root.innerHTML=heading(button('new','＋ 添加单词','primary-btn')+button('batch','批量粘贴'))+
    `<div class="neb-privacy"><span aria-hidden="true">◇</span><span>私人词库仅存本机，不上传 GitHub。独立于原书 22 个主题和星云文章；新增词后会在首页星图出现你的私人星球。</span></div><div class="my-metrics"><div class="panel"><span>私人词条</span><strong>${counts.total}</strong></div><div class="panel"><span>可练习</span><strong>${counts.ready}</strong></div><div class="panel"><span>待补释义</span><strong>${pending}</strong></div><div class="panel"><span>已掌握</span><strong>${counts.done}</strong></div></div>
    <section class="panel my-train"><div><h2>沿着自己的词轨练习</h2><p class="neb-tip">英选中 / 中选英 / 混合 · 答错排到末尾 · 支持数字键 1–4</p></div><div class="neb-training-setup"><label>题型<select id="myMode"><option value="mixed">混合练习</option><option value="single">英文 → 中文</option><option value="reverse">中文 → 英文</option></select></label><label>范围<select id="myScope"><option value="due">到期与新词</option><option value="all">全部可练习词</option></select></label><label>题量<select id="myCount"><option>10</option><option selected>20</option><option>50</option><option>100</option></select></label>${button('start','开始练习','primary-btn',counts.ready?'':'disabled')}${round?button('resume','继续上次练习'):''}</div><p class="neb-tip">释义未补齐的词不会出题。私人词太少时，干扰项从原词库的其他有效词条中补足；不计入整本遍历或原题库成绩。</p></section>
    <div class="neb-toolbar panel"><label class="neb-search">搜索私人词库<input id="mySearch" type="search" value="${e(search)}" placeholder="英文、中文或标签"/></label><label>状态<select id="myFilter"><option value="all">全部</option><option value="due">待复习</option><option value="pending">待补释义</option><option value="mastered">已掌握</option></select></label><div class="neb-backups">${button('export','备份我的词库')}${button('import','导入备份')}<input type="file" id="myBackupFile" accept=".json,application/json" hidden/></div></div><div id="myWordRows"></div>`;
    $('myFilter').value=filter;renderRows();
  }
  function renderRows(){
    const needle=search.toLowerCase(),items=entries.filter(w=>[w.word,w.meaning,...w.tags].join(' ').toLowerCase().includes(needle)&&(filter==='all'||filter==='pending'&&!C.eligible(w)||filter==='due'&&C.eligible(w)&&C.due(w)||filter==='mastered'&&C.eligible(w)&&w.record.level>=3)).sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt)||a.word.localeCompare(b.word));
    page=Math.max(0,Math.min(page,Math.ceil(items.length/40)-1));
    $('myWordRows').innerHTML=items.length?items.slice(page*40,page*40+40).map(w=>`<article class="panel my-word-row"><div class="my-word-main"><strong>${e(w.word)}</strong><span>${e(w.ipa)} ${e(w.pos)}</span><div class="neb-tags">${w.tags.map(t=>`<span>${e(t)}</span>`).join('')}</div></div><div class="my-word-meaning"><p>${e(w.meaning||'待补中文释义，暂不出题')}</p><small>${!C.eligible(w)?'待补释义':w.record.level>=3?'已掌握':'学习中 '+w.record.level+'/3'} · 答对 ${w.record.correct} 次</small>${w.example||w.notes?`<details><summary>例句与笔记</summary>${w.example?`<p lang="en">${e(w.example)}</p><p>${e(w.exampleZh)}</p>`:''}${w.notes?`<p>${e(w.notes)}</p>`:''}</details>`:''}</div><div class="my-word-actions">${button('edit','编辑','text-btn',`data-id="${e(w.id)}"`)}${button('remove','删除','text-btn neb-danger',`data-id="${e(w.id)}"`)}</div></article>`).join('')+`<div class="neb-pagination">${button('prev','上一页','secondary-btn',page?'':'disabled')}<span>第 ${page+1}/${Math.ceil(items.length/40)} 页 · ${items.length} 词</span>${button('next','下一页','secondary-btn',(page+1)*40<items.length?'':'disabled')}</div>`:
      `<div class="panel neb-empty"><img src="orbit-earth.svg" width="160" height="116" alt=""/><h2>${entries.length?'没有找到匹配的词':'你的私人星球，从第一个词开始'}</h2><p class="muted">${entries.length?'试试其他关键词或状态。':'单个添加，或每行一个词批量粘贴。本地词典能匹配到的内容可自动补全。'}</p>${entries.length?'':button('new','添加第一个词','primary-btn')}</div>`;
  }
  function formValues(){return JSON.stringify(Object.values(fields).map(id=>$(id).value));}
  function clearForm(){Object.values(fields).forEach(id=>$(id).value='');editing=null;initial='';}
  function edit(entry=null){
    editing=entry?.id||null;Object.entries(fields).forEach(([name,id])=>{$(id).value=name==='tags'?(entry?.tags||[]).join(', '):entry?.[name]||'';});
    $('myWordValue').disabled=!!entry;$('myWordDialogTitle').textContent=entry?'编辑私人词条':'添加一个单词';$('myWordError').textContent='';$('myLookupStatus').textContent='只补全空白项，不覆盖你填写的内容。';initial=formValues();$('myWordDialog').showModal();$(entry?'myWordMeaning':'myWordValue').focus();
  }
  function closeForm(){if(busy)return;if(formValues()!==initial&&!confirm('放弃尚未保存的词条修改？'))return;$('myWordDialog').close();clearForm();}
  $('myWordCancel').onclick=closeForm;$('myWordClose').onclick=closeForm;$('myWordDialog').addEventListener('cancel',event=>{event.preventDefault();closeForm();});
  $('myLookupButton').onclick=()=>{
    const matched=dictionaryEntry($('myWordValue').value);if(!matched){$('myLookupStatus').textContent='离线词典未找到这个词，请手动填写；不会自动联网或猜测。';return;}
    for(const name of ['meaning','pos','ipa','example','exampleZh'])if(!$(fields[name]).value.trim())$(fields[name]).value=matched[name]||'';
    $('myLookupStatus').textContent='已补全离线词典中的可用内容；请检查是否符合你想记的意思。';
  };
  $('myWordForm').addEventListener('submit',async event=>{
    event.preventDefault();if(busy)return;busy=true;$('myWordSave').disabled=true;
    try{
      const old=editing?entries.find(w=>w.id===editing):null,raw={...old};Object.entries(fields).forEach(([name,id])=>raw[name]=name==='tags'?$(id).value.split(/[,，]/):$(id).value);
      const value=C.clean({...raw,updatedAt:new Date().toISOString()});
      if(!old&&entries.some(w=>w.id===value.id))throw Error('这个词已在我的词库，请在列表中编辑，不会重复添加');
      if(!old&&entries.length>=C.MAX_WORDS)throw Error('私人词库最多 10,000 词');
      if(old&&round&&!confirm('编辑词条会重置这次未完成的私人练习，累计学习记录保留。继续？'))return;
      const next=old?entries.map(w=>w.id===old.id?value:w):[...entries,value];await commit(next,old?null:round,[value]);
      $('myWordDialog').close();clearForm();page=0;renderList();notify(C.eligible(value)?'词条已保存在本机，可以开始练习':'词条已保存；补充中文释义后即可练习');
    }catch(error){$('myWordError').textContent=error.message;}finally{busy=false;$('myWordSave').disabled=false;}
  });
  function clearBatch(){preview=[];previewText='';previewPage=0;$('myBatchText').value='';$('myBatchPreview').replaceChildren();$('myBatchError').textContent='';$('myBatchSave').disabled=true;}
  function openBatch(){clearBatch();$('myBatchDialog').showModal();$('myBatchText').focus();}
  function closeBatch(){if(busy)return;if($('myBatchText').value.trim()&&!confirm('放弃尚未添加的批量内容？'))return;$('myBatchDialog').close();clearBatch();}
  $('myBatchCancel').onclick=closeBatch;$('myBatchClose').onclick=closeBatch;$('myBatchDialog').addEventListener('cancel',event=>{event.preventDefault();closeBatch();});
  $('myBatchText').addEventListener('input',()=>{preview=[];previewText='';$('myBatchSave').disabled=true;$('myBatchPreview').replaceChildren();});
  function renderPreview(){
    const add=preview.filter(r=>['ready','pending'].includes(r.status)),duplicate=preview.filter(r=>r.status==='duplicate').length,invalid=preview.filter(r=>r.status==='invalid').length,pending=add.filter(r=>r.status==='pending').length;
    $('myBatchPreview').innerHTML=`<p class="my-preview-summary">可添加 ${add.length} 词（其中 ${pending} 词待补释义） · 重复 ${duplicate} · 无效 ${invalid}</p><div class="my-preview-rows">${preview.slice(previewPage*40,previewPage*40+40).map(r=>`<div class="my-preview-row ${r.status==='invalid'?'neb-error':''}"><span>${r.number}</span><strong>${e(r.entry?.word||r.raw)}</strong><span>${e(r.entry?.meaning||'—')}</span><small>${e(r.reason)}</small></div>`).join('')}</div>${preview.length>40?`<div class="neb-pagination">${button('preview-prev','上一页','secondary-btn',previewPage?'':'disabled')}<span>${previewPage+1}/${Math.ceil(preview.length/40)}</span>${button('preview-next','下一页','secondary-btn',(previewPage+1)*40<preview.length?'':'disabled')}</div>`:''}`;
    $('myBatchSave').disabled=!add.length;
  }
  $('myBatchCheck').onclick=()=>{try{previewText=$('myBatchText').value;preview=C.parseBatch(previewText,entries,dictionaryEntry);previewPage=0;$('myBatchError').textContent='';renderPreview();}catch(error){$('myBatchError').textContent=error.message;$('myBatchSave').disabled=true;}};
  $('myBatchDialog').addEventListener('click',event=>{const action=event.target.closest('[data-my-action]')?.dataset.myAction;if(action==='preview-prev'){previewPage--;renderPreview();}if(action==='preview-next'){previewPage++;renderPreview();}});
  $('myBatchForm').addEventListener('submit',async event=>{
    event.preventDefault();if(busy||!preview.length)return;busy=true;$('myBatchSave').disabled=true;
    try{if(previewText!==$('myBatchText').value)throw Error('内容已改变，请重新预览');const added=preview.filter(r=>['ready','pending'].includes(r.status)).map(r=>r.entry);if(entries.length+added.length>C.MAX_WORDS)throw Error('超过 10,000 词上限，请减少本批数量');
      await commit([...entries,...added],round,added);$('myBatchDialog').close();clearBatch();page=0;renderList();notify(`已添加 ${added.length} 词；重复和无效行未写入，原词条与学习进度保持不变`);
    }catch(error){$('myBatchError').textContent=error.message;$('myBatchSave').disabled=false;}finally{busy=false;}
  });
  async function start(options){if(round&&!confirm('新练习会替换未完成的私人训练，累计记录保留。继续？'))return;const next=C.newRound(entries,options,fallback());await commit(entries,next);renderPractice();}
  function renderPractice(){
    if(!active||!round)return;screen='practice';const item=round.queue[round.index],reverse=item.mode==='reverse';
    root.innerHTML=heading(button('exit','保存并返回我的词库'))+`<div class="neb-practice-progress"><span>第 ${round.index+1}/${round.queue.length} 题 · 原定 ${round.baseCount} 题 · 待重做 ${round.queue.filter(q=>q.redo&&!q.checked).length}</span><span>已提交 ${round.answered} · 答对 ${round.correct}</span></div><div class="neb-track"><i style="width:${round.answered/round.queue.length*100}%"></i></div><article class="panel my-question"><p class="eyebrow">${item.redo?'RETRY / 末尾重做 · ':''}${reverse?'REVERSE / 中文选英文':'MEANING / 英文选中文'}</p><h2 class="my-question-prompt ${reverse?'is-reverse':''}">${e(reverse?item.meaning:item.word)}</h2>${!reverse||item.checked?`<p class="my-pronunciation">${e(item.ipa)} ${e(item.pos)}</p>`:''}<div id="myOptions" class="my-options">${item.options.map((option,index)=>{
      const correct=C.key(option.word)===C.key(item.word),checked=item.checked,selected=item.selected===index;
      return `<button type="button" class="my-option ${selected?'selected':''} ${checked&&correct?'correct':''} ${checked&&selected&&!correct?'incorrect':''}" data-my-action="choose" data-index="${index}" ${checked?'disabled':''}><span class="my-option-key">${index+1}</span><span>${e(reverse?option.word:option.meaning)}</span>${checked&&correct?'<strong>✓ 正确</strong>':checked&&selected?'<strong>✕ 你的选择</strong>':''}</button>`;
    }).join('')}</div>${item.checked?`<section class="neb-feedback ${item.correct?'is-correct':'is-wrong'}" role="status"><h3>${item.correct?'✓ 答对了':'✕ 记住这个词，已排到本轮末尾'}</h3><p class="neb-answer-word">${e(item.word)} <small>${e(item.pos)} ${e(item.ipa)}</small></p><p>${e(item.meaning)}</p>${item.example?`<blockquote lang="en">${e(item.example)}</blockquote><p>${e(item.exampleZh)}</p>`:''}${button('pronounce','听发音')}</section>`:''}<div class="my-question-footer"><span class="neb-tip">1–4 选择 · Enter ${item.checked?'下一题':'提交'} · 选项不会因点击重新打乱</span><button type="button" class="primary-btn" id="myCheck" data-my-action="${item.checked?'advance':'check'}">${item.checked?(round.index+1<round.queue.length?'下一题 →':'完成本轮'):'提交答案 →'}</button></div></article>`;
    window.scrollTo(0,0);
  }
  function choose(index){if(!round||round.queue[round.index].checked||!round.queue[round.index].options[index])return;round.queue[round.index].selected=index;root.querySelectorAll('.my-option').forEach((node,i)=>node.classList.toggle('selected',index===i));}
  async function check(){
    if(!round)return;const old=round,item=old.queue[old.index];if(item.checked)return;if(item.selected===null){notify('请先选择一个答案');return;}
    const nextRound=structuredClone(old),next=entries.slice(),index=next.findIndex(w=>w.id===item.id);next[index]=structuredClone(next[index]);const changed=C.grade(next,nextRound,fallback());
    if(changed){await commit(next,nextRound,[changed]);renderPractice();}
  }
  async function exportBackup(){
    if(!confirm('此备份包含你自己的单词、笔记和学习记录，仅下载到本机。请勿上传公开仓库。继续？'))return;
    const stamp=new Date().toISOString(),encoder=new TextEncoder();let pieces=[],bytes=0,part=0;
    const download=()=>{const blob=new Blob(['{"format":"wordorbit-mywords","version":1,"entries":[',pieces.join(','),']}'],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='wordorbit-mywords-backup-'+stamp.slice(0,10)+'-part'+String(++part).padStart(2,'0')+'.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);pieces=[];bytes=0;};
    for(const entry of entries){const json=JSON.stringify(entry),size=encoder.encode(json).length;if(pieces.length&&(bytes+size>18*1024*1024||pieces.length>=5000))download();pieces.push(json);bytes+=size+1;}if(pieces.length||!part)download();notify(`已导出 ${part} 个备份分卷；迁移时逐个导入，未完成题目不会随备份迁移`);
  }
  async function importBackup(file){
    if(!file)return;if(file.size>20*1024*1024)throw Error('每个备份分卷最多 20 MB');const data=JSON.parse(await file.text());
    if(data.format!=='wordorbit-mywords'||data.version!==1||!Array.isArray(data.entries)||data.entries.length>C.MAX_WORDS)throw Error('不是支持的“我的词库”备份');
    const cleaned=data.entries.map(C.clean),ids=new Set(entries.map(w=>w.id)),added=[];for(const word of cleaned)if(!ids.has(word.id)){ids.add(word.id);added.push(word);}
    if(ids.size>C.MAX_WORDS)throw Error('导入后将超过 10,000 词上限');if(!confirm(`导入 ${added.length} 个新词，跳过 ${cleaned.length-added.length} 个重复词？已有词条与进度不会覆盖。`))return;
    await commit([...entries,...added],round,added);renderList();notify(`已导入 ${added.length} 词，重复 ${cleaned.length-added.length} 词已跳过`);
  }
  root.addEventListener('input',event=>{if(event.target.id==='mySearch'){search=event.target.value;page=0;renderRows();}});
  root.addEventListener('change',event=>{
    if(event.target.id==='myFilter'){filter=event.target.value;page=0;renderRows();}
    if(event.target.id==='myBackupFile'){if(busy)return;busy=true;importBackup(event.target.files[0]).catch(error=>notify(error.message,true)).finally(()=>{busy=false;});event.target.value='';}
  });
  async function action(name,node){
    if(busy)return;if(name==='choose'){choose(Number(node.dataset.index));return;}busy=true;
    try{switch(name){
      case 'retry':await enter();break;case 'new':edit();break;case 'batch':openBatch();break;
      case 'edit':edit(entries.find(w=>w.id===node.dataset.id));break;
      case 'remove':{const entry=entries.find(w=>w.id===node.dataset.id);if(entry&&confirm(`删除“${entry.word}”及其私人学习记录？未完成的私人训练会重置，其他词条累计记录保留。`)){await commit(entries.filter(w=>w.id!==entry.id),null,[],[entry.id]);renderList();notify('私人词条已删除；如有手动备份，可重新导入');}break;}
      case 'prev':page--;renderRows();break;case 'next':page++;renderRows();break;
      case 'start':await start({mode:$('myMode').value,scope:$('myScope').value,count:$('myCount').value});break;
      case 'resume':renderPractice();break;
      case 'check':await check();break;
      case 'advance':if(round?.queue[round.index].checked){if(round.index+1<round.queue.length){const next=structuredClone(round);next.index++;await commit(entries,next);renderPractice();}else{const result=`本轮完成：${round.answered} 次作答，答对 ${round.correct} 次`;await commit(entries,null);renderList();window.scrollTo(0,0);notify(result);}}break;
      case 'exit':await commit(entries,round);renderList();window.scrollTo(0,0);break;
      case 'pronounce':speak(round.queue[round.index].word);break;
      case 'export':await exportBackup();break;case 'import':$('myBackupFile').click();break;
    }}catch(error){notify('操作未完成：'+error.message,true);}finally{busy=false;}
  }
  root.addEventListener('click',event=>{const node=event.target.closest('[data-my-action]');if(node)action(node.dataset.myAction,node);});
  document.addEventListener('keydown',event=>{
    if(!active||screen!=='practice'||busy||event.altKey||event.ctrlKey||event.metaKey||event.repeat||event.target.matches('input,textarea,select,[contenteditable]'))return;
    if(/^[1-4]$/.test(event.key)){event.preventDefault();choose(Number(event.key)-1);}
    else if(event.key==='Enter'&&(event.target===document.body||event.target.matches('.my-option,#myCheck')||event.target.closest('.my-option'))){event.preventDefault();action(round.queue[round.index].checked?'advance':'check');}
  });
  const oldShowView=showView;
  showView=function(name){
    if(active&&name!=='mywords'&&busy){notify('正在保存私人词库，请稍候再切换');return;}
    oldShowView(name);const actual=document.querySelector('.view.active')?.id;
    if(actual==='view-mywords'&&!active){active=true;enter();}
    else if(actual!=='view-mywords'&&active){active=false;++epoch;entries=[];round=null;dictionary=null;root.replaceChildren();}
  };
  window.WordOrbitMyWords={summary:()=>({...counts}),snapshot:()=>({active,screen,loadedWords:entries.length,renderedRows:root.querySelectorAll('.my-word-row').length,hasRound:!!round}),openPractice:async()=>{showView('mywords');await loading;if(active&&!busy){busy=true;try{await start({mode:'mixed',scope:'all',count:20});}catch(error){notify(error.message,true);}finally{busy=false;}}}};
  document.addEventListener('DOMContentLoaded',()=>{S.meta().then(meta=>setCounts(meta?.summary),error=>notify('私人词库摘要读取失败，请打开“我的词库”重试：'+error.message,true));});
})();
