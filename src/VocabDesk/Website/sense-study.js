/* Connect reviewed public senses to the library and an opt-in, persisted practice.
 * Large editorial modules load on first use. No private database is opened here. */
(() => {
  'use strict';
  const index=window.WordOrbitSenseIndex,S=window.WordOrbitSenseState,readyIds=new Set(Object.values(window.WordOrbitSenseIndex.entries).flatMap(e=>[e.id,...(e.aliases||[])]));
  const e=qEscape,clone=v=>JSON.parse(JSON.stringify(v));
  let pack=null,core=null,loading=null,launching=false,trusted=new Set();
  const pinnedLegacy=new WeakSet();
  if(state.lastSession&&state.lastSession.type!=='senses'&&!state.lastSession.senseCatalogRevision)pinnedLegacy.add(state.lastSession);
  const oldMeaning=qFullMeaning,oldPos=qPartOfSpeech,oldExample=qExample,oldExplanation=qExplanationHtml;
  const legacyActive=()=>session&&pinnedLegacy.has(session)&&$('#view-practice')?.classList.contains('active');
  const approved=w=>w&&S.publicMatch(w,index)&&pack?.entries[qWordKey(w.word)]?.complete?pack.entries[qWordKey(w.word)]:null;
  const fullMeaning=entry=>[...new Set(entry.senses.map(s=>s.label))].join('；');
  function loadScript(name){return new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=name;script.onload=()=>{script.remove();resolve();};script.onerror=()=>{script.remove();reject(Error('无法读取本机义项文件：'+name));};document.head.append(script);});}
  async function ensure(){
    if(pack)return pack;if(loading)return loading;
    loading=(async()=>{
      for(const n of ['03','04','05','06','07','08','09','10','11','12'])if(!window['WordOrbitSenseBatch'+n])await loadScript('sense-batch-'+n+'.js');
      if(!window.WordOrbitSenseCompletion02)await loadScript('sense-completion-02.js');
      if(!window.WORDORBIT_SENSE_CATALOG)await loadScript('sense-catalog.js');
      if(!window.WordOrbitSenseCore)await loadScript('sense-training-core.js');
      pack=window.WORDORBIT_SENSE_CATALOG;core=window.WordOrbitSenseCore;
      if(pack.version!==index.catalogVersion)throw Error('义项文件版本不一致，请完整解压新版程序');
      const words=S.eligible(state.words,pack.entries,index);
      if(words.length!==index.words)throw Error('正式词库与义项目录不一致，已停止生成题目');
      trusted=new Set(words.map(w=>fullMeaning(approved(w)).replace(/\s+/g,'')));
      return pack;
    })().catch(error=>{pack=null;loading=null;throw error;});return loading;
  }
  qFullMeaning=function(w){const entry=!legacyActive()&&approved(w);return entry?fullMeaning(entry):oldMeaning(w);};
  qPartOfSpeech=function(w){const entry=!legacyActive()&&approved(w);return entry?[...new Set(entry.senses.map(s=>s.pos))].join(' / '):oldPos(w);};
  const oldClean=qMeaningClean;qMeaningClean=function(value){return trusted.has(String(value||'').replace(/\s+/g,''))||oldClean(value);};
  qExample=function(w){const original=oldExample(w),entry=!legacyActive()&&approved(w);if(!entry||original?.source==='personal')return original;return {...entry.senses[0].example,source:'curated'};};
  const oldAnswerArea=renderAnswerArea;renderAnswerArea=function(w,item){oldAnswerArea(w,item);if(pack&&!item.checked){if(answerType()==='reverse')$('#questionPrompt').textContent=S.hideEnglishHints($('#questionPrompt').textContent);for(const label of $$('#answerArea .option-copy'))if(/[\u4e00-\u9fff]/.test(label.textContent))label.textContent=S.hideEnglishHints(label.textContent);}};
  function sensesHtml(entry){return `<div class="sense-answer-list">${entry.senses.map(s=>`<section class="sense-answer-item"><h4>${e(s.pos)} <span>${e(s.label)}</span></h4>${s.construction?`<p class="sense-collocation">搭配：${e(s.construction)}</p>`:''}<p lang="en">${e(s.example.en)}</p><p>${e(s.example.zh)}</p><a href="${e(s.source)}" target="_blank" rel="noopener noreferrer">词义来源 ↗</a></section>`).join('')}</div>`;}
  qExplanationHtml=function(w,ok){const html=oldExplanation(w,ok),entry=!legacyActive()&&approved(w);return html+(entry?`<details class="sense-full-answer"><summary>已审核的 ${entry.senses.length} 个义项与例句</summary>${sensesHtml(entry)}</details>`:'');};
  function eligible(){return pack?S.eligible(state.words,pack.entries,index):[];}
  function progress(){return state.senseStudy||{version:1,cycle:1,completed:{}};}
  function syncPanel(){
    const p=progress(),done=Object.keys(p.completed||{}).filter(id=>readyIds.has(id)).length;
    const panel=$('#senseStudyPanel');if(!panel)return;
    $('#senseStudyCounts').textContent=`${index.words.toLocaleString()} 词 · ${index.senses.toLocaleString()} 个已审核义项`;
    $('#senseStudyProgress').textContent=`第 ${p.cycle} 轮 · 已完成 ${done} 词 · 剩余 ${index.words-done} 词`;
    $('#senseStudyProgressBar').style.width=(done/index.words*100)+'%';
    $('#senseStudyContinue').hidden=state.lastSession?.type!=='senses';
  }
  const oldHome=renderHome;renderHome=function(){oldHome();syncPanel();};
  const oldStatus=statusMatch;statusMatch=function(w,status){return status==='sense-reviewed'?S.publicMatch(w,index):oldStatus(w,status);};
  const oldLibrary=renderLibrary;
  renderLibrary=function(page){
    oldLibrary(page);
    if(!pack){ensure().then(()=>{if($('#view-library').classList.contains('active'))renderLibrary();}).catch(error=>toast(error.message));return;}
    for(const row of $$('#wordTable .word-row')){
      const id=row.querySelector('.edit-word')?.dataset.id,w=state.words.find(w=>w.id===id),entry=approved(w);if(!entry)continue;
      if(!w.notes){const sample=row.querySelector('.word-detail small');if(sample)sample.textContent=entry.senses[0].example.en;}
      row.querySelector('.word-main small').textContent=`${w.ipa||'—'} · ${qPartOfSpeech(w)} · ${w.chapter||'—'} · p.${w.source_page||'—'}`;
      const details=document.createElement('details');details.className='sense-library-details';details.innerHTML=`<summary>已审核 ${entry.senses.length} 个义项 · 查看例句</summary>`;
      details.addEventListener('toggle',()=>{if(details.open&&!details.dataset.loaded){details.insertAdjacentHTML('beforeend',sensesHtml(entry)+`<p class="sense-legacy-note">旧词库释义（保留追溯）：${e(oldMeaning(w))}</p>`);details.dataset.loaded='1';}});
      row.querySelector('.word-detail').append(details);
    }
  };
  function persist(){session.answered=session.answers;state.lastSession=session;save();}
  function selectedQuestion(){return session?.type==='senses'?session.queue[session.index]:null;}
  function roundReady(){return !!pack&&!!core&&S.validRound(session,eligible(),pack.entries,core);}
  function renderSense(){
    const round=session,q=selectedQuestion(),w=state.words.find(w=>w.id===q?.wordId);if(!q||!w)return;
    const p=core.progress(round),reverse=q.originalKind==='reverse',pending=round.queue.slice(round.baseLength).filter(q=>!q.checked).length;
    $('#practiceProgress').textContent=`第 ${round.index+1} / ${round.queue.length} 题 · ${q.redo?'末尾重做':`基础题 ${round.index+1}/${round.baseLength}`}`;
    $('#practiceAccuracy').textContent=`本轮正确率 ${round.answers?Math.round(round.correct/round.answers*100):'--'}%`;
    $('#railCount').textContent=`${round.index+1}/${round.queue.length}`;
    $('#questionNav').innerHTML=round.queue.map((item,i)=>`<button class="nav-dot ${item.redo?'redo ':''}${i===round.index?'current ':''}${item.checked?item.status:''}" data-sense-nav="${i}" aria-label="第 ${i+1} 题${item.redo?'，末尾重做':''}">${i+1}</button>`).join('');
    $('#questionNav').onclick=event=>{const b=event.target.closest('[data-sense-nav]');if(!b)return;const i=Number(b.dataset.senseNav);if(i>=round.baseLength&&round.queue.slice(0,round.baseLength).some(q=>!q.checked)){toast('先完成基础题，再重做末尾错题');return;}round.index=i;persist();renderQuestion();};
    const stageNames=['01 · 逐义语境','02 · 中文选英文','03 · 多义检查'];
    $('#practiceRoute').classList.add('sense-route');
    $('#practiceRoute').innerHTML=`<div class="sense-round-progress"><strong>${p.wordsDone}/${p.words} 词完成 · ${p.sensesDone}/${p.senses} 义项已答对</strong><span>${q.redo?'末尾错题重做':stageNames[q.stage]} · 待重做 ${pending} 题</span></div><div class="progress-track"><span style="width:${p.sensesDone/p.senses*100}%"></span></div>`;
    const card=$('.question-card');card.dataset.questionType=reverse?'reverse':q.originalKind;card.dataset.result=q.checked?q.status:'pending';
    $('#questionLabel').textContent=(q.redo?'RETRY / 末尾重做 · ':'')+(q.kind==='recall'?'RECALL / 自评回忆':q.originalKind==='multi'?'MULTI / 选择全部适用义项':reverse?'REVERSE / 中文选英文':'CONTEXT / 选择本句中的含义');
    $('#questionPrompt').textContent=reverse&&!q.checked?S.hideEnglishHints(q.prompt):q.prompt;
    // Theme, page and POS are withheld until submission; IPA and audio also hide in reverse.
    $('#questionContext').innerHTML=(q.checked?`<span class="badge badge-blue">${e(w.chapter)}</span><span class="badge">p.${e(w.source_page)}</span>`:'')+(!reverse||q.checked?`<span class="badge ipa-badge"><span class="ipa-label">音标</span>${e(w.ipa||'—')}${q.checked?' · '+e(qPartOfSpeech(w)):''}</span>`:'');
    $('#favoriteQuestionBtn').innerHTML=`${state.favorites.includes(w.id)?'★':'☆'} <span>收藏</span>`;$('#favoriteQuestionBtn').onclick=()=>toggleFavorite(w.id);
    const audio=$('#speakBtn');audio.hidden=reverse&&!q.checked;audio.disabled=reverse&&!q.checked;audio.onclick=()=>speak(w.word);
    const context=q.context?`<blockquote class="sense-question-context" lang="en">${e(q.context)}</blockquote>`:'';
    const hint=q.originalKind==='multi'?'<p class="sense-choice-hint">多选：选出全部适用义项，漏选和误选都会在末尾重做。数字键 1–6 可切换。</p>':'';
    if(q.kind==='recall'){
      $('#answerArea').innerHTML=context+`<p class="sense-choice-hint">可靠干扰项不足，请先回想，再展开答案自评；这不会标记为长期掌握。</p>${q.revealed||q.checked?'':`<button class="secondary-btn" data-sense-reveal>想好了，查看释义</button>`}${q.revealed&&!q.checked?'<button class="secondary-btn" data-sense-recall="yes">回想正确</button> <button class="secondary-btn" data-sense-recall="no">还需复习</button>':''}`;
    }else{
      $('#answerArea').innerHTML=context+hint+`<div class="option-list">${q.options.map((o,i)=>`<button class="answer-option ${q.selected.includes(o.id)?'selected ':''}${q.checked?(o.correct?'correct':'incorrect'):''}" data-sense-option="${i}" aria-pressed="${q.selected.includes(o.id)}" ${q.checked?'disabled':''}><span class="option-key">${i+1}</span><span class="option-copy">${e(!reverse&&!q.checked?S.hideEnglishHints(o.text):o.text)}</span>${q.checked&&(o.correct||q.selected.includes(o.id))?`<span class="option-state">${o.correct?'✓ 正确':'✕ 误选'}</span>`:''}</button>`).join('')}</div>`;
    }
    $('#answerArea').onclick=event=>{const option=event.target.closest('[data-sense-option]');if(option)choose(Number(option.dataset.senseOption));if(event.target.closest('[data-sense-reveal]')){q.revealed=true;persist();renderQuestion();}const recall=event.target.closest('[data-sense-recall]');if(recall)submit(recall.dataset.senseRecall==='yes');};
    const explanation=$('#explanation');explanation.classList.toggle('hidden',!q.checked&&!(q.kind==='recall'&&q.revealed));
    if(q.checked||q.kind==='recall'&&q.revealed){
      const entry=approved(w),targets=entry.senses.filter(s=>q.senseIds.includes(s.id));
      const missed=q.checked&&q.expected.filter(id=>!q.selected.includes(id)).map(id=>q.options.find(o=>o.id===id)?.text);
      explanation.innerHTML=`<div class="answer-result ${q.status==='correct'?'is-correct':q.checked?'is-wrong':''}"><strong>${q.checked?(q.status==='correct'?'✓ 回答正确':'✕ 本题已排到末尾重做'):'回忆后自评'}</strong><div class="answer-word"><b>${e(w.word)}</b><span>${e(qPartOfSpeech(w))}</span></div>${missed?.length?`<p class="sense-missed">漏选：${missed.map(e).join('；')}</p>`:''}${sensesHtml({senses:targets})}<details class="sense-full-answer"><summary>查看本词全部 ${entry.senses.length} 个已审核义项</summary>${sensesHtml(entry)}</details><div class="answer-derivatives"><b>衍生词</b><ul>${qDerivatives(w).map(d=>`<li><strong>${e(d.word)}</strong><em>${e(qFullMeaning(d))}</em></li>`).join('')||'<li class="muted">暂无可确认的衍生词</li>'}</ul></div></div>`;
    }else explanation.replaceChildren();
    $('#prevQuestionBtn').disabled=round.index===0;$('#prevQuestionBtn').onclick=()=>{if(round.index>0){round.index--;persist();renderQuestion();}};
    $('#nextQuestionBtn').hidden=q.kind==='recall'&&!q.checked;$('#nextQuestionBtn').disabled=false;
    $('#nextQuestionBtn').textContent=q.checked?(core.next(round)<0?'完成本轮 →':'下一题 →'):'提交答案 →';
    $('.keyboard-hint').innerHTML=Array.from({length:q.options.length},(_,i)=>`<kbd>${i+1}</kbd>`).join('')+`<span>${q.originalKind==='multi'?'1–6 切换选项 · Enter 提交':'数字键选择 · Enter 提交'}</span>`;
    $('.nav-dot.current')?.scrollIntoView({block:'nearest'});
  }
  function choose(i){const q=selectedQuestion();if(!roundReady()||!q||q.checked||!q.options[i])return;const id=q.options[i].id;q.selected=q.originalKind==='multi'?(q.selected.includes(id)?q.selected.filter(v=>v!==id):[...q.selected,id]):[id];persist();renderQuestion();}
  function submit(selfRecall){
    const q=selectedQuestion();if(!roundReady()||!q||q.checked)return;
    if(q.kind!=='recall'&&!q.selected.length){toast('请先选择答案');return;}
    const result=core.grade(session,session.index,q.selected,{selfRecall}),w=currentWord(),r=recordFor(w.id),at=new Date().toISOString();
    r.seen++;r.lastSeen=at;if(result.correct)r.correct++;else{r.wrong++;r.due=at;}
    // Word-level legacy mastery is not promoted by one familiar sense.
    state.attempts.push({id:w.id,date:todayKey(),at,correct:result.correct,mode:'sense-'+q.originalKind,sessionId:session.id,selfAssessed:q.kind==='recall',senseResults:q.senseIds.map(id=>({id,correct:q.kind!=='recall'&&q.originalKind==='multi'?q.selected.includes(w.id+':'+id):result.correct}))});
    persist();renderQuestion();
  }
  const oldCheck=checkAnswer;checkAnswer=function(){if(session?.type!=='senses')return oldCheck();if(!roundReady()){toast('义项训练尚未载入或格式不匹配，请先备份再重新开始');return;}const q=selectedQuestion();if(!q.checked){if(q.kind==='recall'){if(!q.revealed){q.revealed=true;persist();renderQuestion();}else toast('请选择“回想正确”或“还需复习”完成自评');return;}submit();return;}const next=core.next(session);if(next<0){finishPractice(true);return;}session.index=next;persist();renderQuestion();};
  const oldRender=renderQuestion;renderQuestion=function(){
    if(session?.type==='senses'){
      if(!pack){ensure().then(()=>{if(session?.type==='senses')renderQuestion();}).catch(error=>toast(error.message));return;}
      if(!S.validRound(session,eligible(),pack.entries,core)){toast('保存的义项训练格式或范围不一致，请先导出备份，再开始新一轮');return;}
      renderSense();return;
    }
    $('#questionNav').onclick=null;$('#answerArea').onclick=null;$('#speakBtn').hidden=false;$('#speakBtn').disabled=false;$('#nextQuestionBtn').hidden=false;
    $('#practiceRoute').classList.remove('sense-route');$('.keyboard-hint').innerHTML='<kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd><span>快速选择选项</span>';
    oldRender();
  };
  const oldStart=startPractice;startPractice=async function(){
    if(launching)return;launching=true;const button=$('#launchPracticeBtn');button.disabled=true;
    try{
      await ensure();
      if(setup.type!=='senses'){oldStart();if(session&&!pinnedLegacy.has(session)){session.senseCatalogRevision=1;state.lastSession=session;save();}return;}
      if(state.lastSession&&!confirm('开始新的义项训练会替换当前未完成的公共训练。累计记录保留，建议先导出备份。继续？'))return;
      const words=eligible();let p=S.cleanProgress(state.senseStudy,words);
      if(words.every(w=>p.completed[w.id]))p={version:1,cycle:p.cycle+1,completed:{}};
      // Yield once so the loading indicator paints before constructing immutable choices.
      button.textContent='正在生成本轮义项题目…';await new Promise(resolve=>setTimeout(resolve,0));
      const round=core.build(words,pack.entries,{date:todayKey(),completedIds:Object.keys(p.completed),senseHistory:S.history(state.attempts)});
      if(!round){toast('当前没有可练习的已审核词');return;}
      Object.assign(round,{type:'senses',id:qSessionId(),started:Date.now(),attemptStart:state.attempts.length,answered:0,senseCatalogRevision:1});
      session=round;state.senseStudy=p;persist();showView('practice');renderQuestion();
    }catch(error){toast('义项资料未载入：'+error.message);}finally{launching=false;button.disabled=false;button.textContent='开始这一轮 →';}
  };
  const oldFinish=finishPractice;finishPractice=function(completed=false){
    if(session?.type!=='senses')return oldFinish(completed);
    if(completed&&!core.progress(session).completed){toast('还有基础题或末尾重做未完成');return;}
    if(completed){const p=S.cleanProgress(state.senseStudy,eligible());for(const id of session.targetIds)p.completed[id]={sessionId:session.id,date:todayKey()};state.senseStudy=p;}
    session.answered=session.answers;oldFinish(completed);
  };
  const oldClear=qClearLearning;qClearLearning=function(scope){
    const before=state.attempts,oldLast=state.lastSession;oldClear(scope);
    if(before===state.attempts&&oldLast===state.lastSession)return; // Cancelled or nothing to clear.
    const kept=new Set(state.attempts),removed=[...new Set(before.filter(a=>!kept.has(a)).map(a=>a.sessionId))];
    state.senseStudy=S.clearProgress(state.senseStudy,removed,scope==='all');save();syncPanel();
  };
  function backup(){return {senseStudy:clone(progress()),...(state.lastSession?.type==='senses'?{senseSession:clone(state.lastSession)}:{})};}
  // Native replacement import uses the incoming catalog's IDs, not the current profile's IDs.
  function nativeState(payload){
    if(!pack)throw Error('义项资料尚未载入');
    const words=S.eligible(payload.words||[],pack.entries,index),senseStudy=S.cleanProgress(payload.senseStudy,words);
    if(payload.senseSession&&!S.validRound(payload.senseSession,words,pack.entries,core))throw Error('备份义项训练无效，未替换记录');
    return {senseStudy,lastSession:payload.senseSession?clone(payload.senseSession):null};
  }
  function prepareImport(payload){
    if(!payload.senseStudy&&!payload.senseSession)return null;
    if(!pack)throw Error('请等待义项资料载入后再恢复');
    const words=eligible(),next=S.cleanProgress(payload.senseStudy,words);
    if(payload.senseSession&&!S.validRound(payload.senseSession,words,pack.entries,core))throw Error('备份中的义项训练无效或与当前范围不符，未导入');
    if(!Array.isArray(payload.attempts)||payload.attempts.length>100000)throw Error('备份作答记录无效');
    const ids=new Set([...state.words,...(Array.isArray(payload.words)?payload.words:[])].map(w=>w.id));
    const attempts=payload.attempts.map(a=>{
      if(!a||typeof a.id!=='string'||!ids.has(a.id)||typeof a.correct!=='boolean'||!/^\d{4}-\d{2}-\d{2}$/.test(a.date))throw Error('备份作答记录无效');
      if(a.mode?.startsWith('sense-')){
        const w=state.words.find(w=>w.id===a.id),entry=approved(w);
        if(!entry||!Array.isArray(a.senseResults)||a.senseResults.some(s=>!entry.senses.some(t=>t.id===s.id)||typeof s.correct!=='boolean'))throw Error('备份义项记录无效');
      }return clone(a);
    });
    return ()=>{
      const seen=new Set(state.attempts.map(a=>JSON.stringify(a)));for(const a of attempts){const k=JSON.stringify(a);if(!seen.has(k)){state.attempts.push(a);seen.add(k);}}
      const current=S.cleanProgress(state.senseStudy,words);state.senseStudy=next.cycle>current.cycle?next:next.cycle===current.cycle?{...current,completed:{...next.completed,...current.completed}}:current;
      if(!state.lastSession&&payload.senseSession)state.lastSession=clone(payload.senseSession);
    };
  }
  const oldImport=importData;importData=async function(file){try{await ensure();oldImport(file);}catch(error){toast(error.message);}};
  document.addEventListener('keydown',event=>{
    if(session?.type!=='senses'||!$('#view-practice').classList.contains('active')||event.ctrlKey||event.altKey||event.metaKey||event.repeat||event.target.closest('input,textarea,select,[contenteditable]'))return;
    if(/^[1-6]$/.test(event.key)){event.preventDefault();event.stopImmediatePropagation();choose(Number(event.key)-1);}
    else if(event.key==='Enter'&&!event.target.closest('#favoriteQuestionBtn,#speakBtn,#exitPractice,#prevQuestionBtn,#questionNav,summary,a,[data-sense-recall]')){event.preventDefault();event.stopImmediatePropagation();checkAnswer();}
  },true);
  document.addEventListener('DOMContentLoaded',()=>{
    const panel=document.createElement('article');panel.id='senseStudyPanel';panel.className='panel sense-study-panel';
    panel.innerHTML='<div><p class="eyebrow">LEARN EVERY MEANING</p><h2>义项全覆盖</h2><p id="senseStudyCounts"></p><p class="muted">每轮随机 50 词 · 逐义语境 → 中文选英文 → 多义检查<br>题量随义项变化，错题统一排到末尾。</p><p id="senseStudyProgress"></p><div class="progress-track"><span id="senseStudyProgressBar"></span></div></div><div class="sense-panel-actions"><button class="primary-btn" data-practice="senses">开始义项训练 ↗</button><button class="secondary-btn" id="senseStudyContinue" hidden>继续义项训练</button><button class="text-btn" id="senseBrowseButton">查看已整理词库 →</button></div>';
    const explorer=$('#topicExplorer');(explorer.previousElementSibling?.classList.contains('section-head')?explorer.previousElementSibling:explorer).before(panel);
    $('#senseStudyContinue').onclick=()=>{session=state.lastSession;showView('practice');renderQuestion();};
    $('#senseBrowseButton').onclick=()=>{showView('library');$('#libraryStatus').value='sense-reviewed';renderLibrary();};
    $('#libraryStatus').insertAdjacentHTML('beforeend','<option value="sense-reviewed">已整理义项</option>');
    const choice=document.createElement('button');choice.className='choice';choice.dataset.type='senses';choice.textContent='义项全覆盖';choice.onclick=()=>openSetup('senses');$('#typeChoices').append(choice);
    syncPanel();
  });
  window.WordOrbitSenseStudy={ensure,backup,prepareImport,nativeState,snapshot:()=>({loaded:!!pack,readyWords:index.words,readySenses:index.senses,active:session?.type==='senses',...(session?.type==='senses'&&core?{progress:core.progress(session)}:{})})};
})();
