/* 题库质量层：审核分层、可靠出题、导入校验与本地数据保护。 */
const qBaseRenderHome=renderHome;
const qBaseRenderLibrary=renderLibrary;
const qBaseRenderStats=renderStats;

function qWordKey(value){return String(value??'').trim().toLowerCase().replace(/\s+/g,' ')}
function qEscape(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
// 已根据 PDF 原页核对的完整释义。显示和判题统一使用完整释义，不再只取 OCR 截断片段。
const Q_MEANING_FIXES=Object.freeze({
  erode:'侵蚀；腐蚀',
  erosion:'侵蚀；腐蚀',
  'shade-tolerant':'耐阴的'
});
const Q_IPA_FIXES=Object.freeze({
  'shade-tolerant':'/ˈʃeɪd ˌtɒlərənt/'
});
const Q_WORD_ALIASES=Object.freeze({
  hamess:'harness', inditge:'indulge', iscipline:'discipline', ideem:'deem',
  iictionary:'dictionary', vigjnity:'vicinity', plgmb:'plumb', fumish:'furnish',
  fnanoeuvre:'manoeuvre', impairv:'impair', jstare:'stare', jiappoint:'disappoint',
  peniciilin:'penicillin', fiberal:'liberal', exxcessive:'excessive', fimally:'finally'
});
function qCanonicalWord(value){return Q_WORD_ALIASES[qWordKey(value)]||qWordKey(value)}
function qExternalEntry(word){
  return window.EXTERNAL_VOCAB?.[qCanonicalWord(word?.word)]||null;
}
function qFullMeaning(word){
  if(!word)return '';
  const external=qExternalEntry(word);
  const fixed=Q_MEANING_FIXES[qCanonicalWord(word.word)];
  return String(external?.meaning||fixed||word.fullMeaning||word.meaning||'').trim();
}
function qMeaningClean(value){
  if(typeof value!=='string')return false;
  const s=value.replace(/\s+/g,'').trim();
  if(!s||s==='—'||/待核验/.test(s)||s.length>180||/[。！？!?]/.test(s))return false;
  if(/^(她|他|它|我|你|我们|你们|他们|她们|这|那|某|自己|自己的|他的|她的|它的|一个|一种|可以|能够|因为|所以|在|从|对|向|将|被|使|与|和)/.test(s))return false;
  if(/(你的|前途|不要|查阅|付款|分期|一期|行动计划|句中|例句|就少不了|查阅图|球体|假想的环绕|唯一途径|泪水润湿|太阳升起|作为对|水是维持|大坏蛋|一辆|一根|一只|一有|一恶|海浪侵)/.test(s))return false;
  return (s.match(/[\u4e00-\u9fff]/g)||[]).length>=2;
}
function qVerified(w){return !!w&&(w.status==='verified'||w.source==='seed'||w.source==='family')&&qMeaningClean(qFullMeaning(w))}
function qReview(w){return !qVerified(w)}
function qEligibleWords(){return state.words.filter(qVerified)}
function qSessionId(){return `round-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}
function qNewSession(queue,type){
  return {id:qSessionId(),queue,index:0,type,baseLength:type==='whole'?queue.length:null,answered:0,correct:0,started:Date.now(),attemptStart:state.attempts.length};
}
function qWholeBaseLength(round){
  if(Number.isInteger(round?.baseLength))return round.baseLength;
  const firstRedo=round?.queue?.findIndex(item=>item.redo);
  return firstRedo>=0?firstRedo:Math.min(100,round?.queue?.length||0);
}
function qNextIndex(round){
  const next=round.index+1;
  if(round.type==='whole'&&next>=qWholeBaseLength(round)){
    const pendingBase=round.queue.slice(0,qWholeBaseLength(round)).findIndex(item=>!item.checked);
    if(pendingBase>=0)return pendingBase;
  }
  if(next<round.queue.length)return next;
  return round.queue.findIndex(item=>!item.checked);
}

// 默认练习只抽取正式词库；显式选择“待核验词库”时才展示 OCR/待审词条。
filteredWords=function(){
  const source=setup.source||'all';
  return state.words.filter(w=>{
    if(setup.chapter!=='all'&&w.chapter!==setup.chapter)return false;
    if(source==='review')return qReview(w);
    if(source==='verified'||source==='all')return qVerified(w);
    if(source==='ocr')return w.source==='ocr';
    return w.source===source;
  });
};

function qRenderVerifiedChapterGrid(){
  const grid=$('#chapterGrid');
  if(!grid)return;
  grid.innerHTML=CHAPTERS.map((chapter,index)=>{
    const words=state.words.filter(w=>qVerified(w)&&w.chapter===chapter);
    const done=words.filter(mastered).length;
    const pct=words.length?Math.round(done/words.length*100):0;
    return `<button class="chapter-card" data-chapter="${qEscape(chapter)}"><small>${String(index+1).padStart(2,'0')} / THEME</small><strong>${qEscape(chapter)}</strong><div class="mini-track"><span style="width:${pct}%"></span></div><small>${done} / ${words.length} 已掌握</small></button>`;
  }).join('');
  $$('.chapter-card').forEach(button=>button.onclick=()=>{setup.chapter=button.dataset.chapter;showView('setup');$('#chapterSelect').value=setup.chapter});
}
renderHome=function(){
  qBaseRenderHome();
  const words=qEligibleWords();
  $('#todayDue').textContent=words.filter(isDue).length;
  $('#dueBadge').textContent=`${words.filter(isDue).length} 待复习`;
  $('#todayMastered').textContent=words.filter(mastered).length;
  $('#wrongCount').textContent=`${words.filter(w=>recordFor(w.id).wrong>recordFor(w.id).correct).length} 道待巩固`;
  qRenderVerifiedChapterGrid();
};
renderStats=function(){
  qBaseRenderStats();
  const words=qEligibleWords();
  $('#metricMastered').textContent=words.filter(mastered).length;
  $('#chapterStats').innerHTML=CHAPTERS.map(chapter=>{
    const chapterWords=words.filter(w=>w.chapter===chapter),pct=chapterWords.length?Math.round(chapterWords.filter(mastered).length/chapterWords.length*100):0;
    return `<div class="stat-line"><span>${qEscape(chapter)}</span><strong>${pct}%</strong><div class="mini-track"><span style="width:${pct}%"></span></div></div>`;
  }).join('');
};

// 使用本地日期，避免北京时间午夜附近被 UTC 日期错位。
todayKey=function(date=new Date()){
  const local=new Date(date.getTime()-date.getTimezoneOffset()*60000);
  return local.toISOString().slice(0,10);
};

// 混合模式把题型放进会话本身，保证每一道题按序切换，而不是整轮随机成一种题型。
startPractice=function(){
  if(setup.type==='whole'){
    const queue=makeWholeQueue();
    if(!queue.length){toast('全书词库暂无可练习词条');return}
    session=qNewSession(queue,'whole');
  }else{
    const queue=makeQueue();
    if(!queue.length){toast(setup.source==='review'?'待核验词库暂无可练习词条':'当前筛选下没有可练习的正式词条');return}
    session=qNewSession(queue,setup.type);
  }
  state.lastSession=session;save();showView('practice');renderQuestion();
};
answerType=function(){
  const item=currentItem();
  if(session?.type==='whole')return item?.variant===1?'reverse':'single';
  return session?.type==='mixed'?['single','reverse','fill','spell','listen'][session.index%5]:(session?.type||'single');
};

function qChoicePool(w,key){
  const current=key==='meaning'?qFullMeaning(w):String(w[key]||'').trim();
  const used=new Set([current]);
  const pool=state.words.filter(candidate=>{
    if(candidate.id===w.id)return false;
    if(key==='word'&&!qWholeWord(candidate))return false;
    const value=key==='meaning'?qFullMeaning(candidate):String(candidate[key]||'').trim();
    if(!value||used.has(value))return false;
    if(key==='meaning'&&!qVerified(candidate))return false;
    used.add(value);return true;
  });
  return pool.sort(()=>Math.random()-.5).slice(0,3).map(candidate=>key==='meaning'?qFullMeaning(candidate):candidate[key]);
}
makeOptions=function(w,reverse=false){
  const key=reverse?'word':'meaning';
  return [key==='meaning'?qFullMeaning(w):w[key],...qChoicePool(w,key)].sort(()=>Math.random()-.5);
};
function qMultiOptions(w){
  const values=[qFullMeaning(w)].filter(Boolean);
  const used=new Set(values);
  const distractors=state.words.filter(x=>x.id!==w.id&&qVerified(x)&&!used.has(qFullMeaning(x))).sort(()=>Math.random()-.5).slice(0,Math.max(1,4-values.length)).map(qFullMeaning);
  return {values:[...values,...distractors].sort(()=>Math.random()-.5),correct:values};
}
function qOptionsStale(type,options){
  if(!Array.isArray(options))return false;
  if(type==='single'||type==='multi')return options.some(option=>!qMeaningClean(option));
  return options.some(option=>!state.words.some(candidate=>candidate.word===option&&qWholeWord(candidate)));
}

renderAnswerArea=function(w,item){
  const type=answerType();
  const reverse=type==='reverse'||type==='listen';
  const choice=['single','multi','listen','reverse'].includes(type);
  $('#questionLabel').textContent=type==='reverse'?'MEANING / 看中文选英文':type==='multi'?'MULTI / 选择全部释义':type==='fill'?'FILL IN / 语境填空':type==='spell'?'SPELL / 听音写词':type==='listen'?'LISTEN / 听音选英文':'MEANING / 选择释义';
  if(choice){
    if(item.optionKind!==type||!item.options||!item.options.length||qOptionsStale(type,item.options)){
      if(type==='multi'){const pack=qMultiOptions(w);item.options=pack.values;item.correctValues=pack.correct}else{item.options=makeOptions(w,reverse);item.correctValues=null}
      item.optionKind=type;
    }
    const selected=type==='multi'?(Array.isArray(item.selected)?item.selected:[]):item.selected;
    const target=type==='listen'||type==='reverse'?w.word:qFullMeaning(w);
    $('#answerArea').innerHTML=`<div class="option-list">${item.options.map((option,index)=>{
      const isSelected=type==='multi'?selected.includes(option):selected===option;
      const isCorrect=type==='multi'?(item.correctValues||[qFullMeaning(w)]).includes(option):option===target;
      const classes=`answer-option ${isSelected?'selected ':''}${item.checked?(isCorrect?'correct':'incorrect'):''}`;
      return `<button class="${classes}" data-value="${qEscape(option)}" aria-pressed="${isSelected}">${String.fromCharCode(65+index)}. ${qEscape(option)}</button>`;
    }).join('')}</div>`;
    $$('.answer-option').forEach(button=>button.onclick=()=>{
      if(item.checked)return;
      const value=button.dataset.value;
      if(type==='multi'){const selectedValues=Array.isArray(item.selected)?item.selected:[];const index=selectedValues.indexOf(value);if(index>=0)selectedValues.splice(index,1);else selectedValues.push(value);item.selected=selectedValues}else item.selected=value;
      renderAnswerArea(w,item);
    });
  }else{
    $('#answerArea').innerHTML=`<input class="${type==='spell'?'spell-input':'fill-input'}" id="freeAnswer" placeholder="${type==='spell'?'输入你听到的单词':'输入中文释义关键词'}" value="${qEscape(item.selected||'')}" ${item.checked?'disabled':''} />`;
    $('#freeAnswer').oninput=e=>item.selected=e.target.value;
  }
  if(type==='listen')$('#questionPrompt').textContent='点击“听发音”，选择你听到的英文单词';
  if(type==='reverse')$('#questionPrompt').textContent=qFullMeaning(w);
};
renderQuestion=function(){
  if(session?.type==='whole'&&session.index>=qWholeBaseLength(session)){
    const pendingBase=session.queue.slice(0,qWholeBaseLength(session)).findIndex(question=>!question.checked);
    if(pendingBase>=0){session.index=pendingBase;state.lastSession=session;save()}
  }
  const item=currentItem(),w=currentWord();
  if(!item||!w){finishPractice(true);return}
  const whole=session.type==='whole',baseLength=whole?qWholeBaseLength(session):0;
  const pendingRedo=whole?session.queue.slice(baseLength).filter(question=>!question.checked).length:0;
  $('#practiceProgress').textContent=whole?`第 ${session.index+1} / ${session.queue.length} 题 · ${item.redo?'末尾错题重做':`原定 ${Math.min(session.index+1,baseLength)}/${baseLength}`} · 待重做 ${pendingRedo}`:`第 ${session.index+1} / ${session.queue.length} 题`;
  $('#practiceAccuracy').textContent=`本轮正确率 ${session.answered?Math.round(session.correct/session.answered*100):'--'}%`;
  $('#railCount').textContent=`${session.index+1}/${session.queue.length}`;
  $('#questionNav').innerHTML=session.queue.map((question,index)=>`<button class="nav-dot ${question.redo?'redo ':''}${index===session.index?'current ':''}${question.status==='correct'?'correct ':''}${question.status==='wrong'?'wrong':''}" data-i="${index}" title="${question.redo?'末尾错题重做':'原定题目'} ${index+1}">${index+1}</button>`).join('');
  $$('.nav-dot').forEach(button=>button.onclick=()=>{
    const next=Number(button.dataset.i);
    if(session.type==='whole'&&next>=qWholeBaseLength(session)&&session.queue.slice(0,qWholeBaseLength(session)).some(question=>!question.checked)){toast('先完成原定题目，再进入末尾错题重做');return}
    session.index=next;renderQuestion();
  });
  $('#questionPrompt').textContent=w.word;
  const chapterBadge=item.checked?`<span class="badge badge-blue">${qEscape(w.chapter||'待分章')}</span> `:'';
  $('#questionContext').innerHTML=`${chapterBadge}<span class="badge">p.${qEscape(w.source_page||'—')}</span> <span class="badge">${qEscape(w.ipa||'—')} · ${qEscape(w.pos||'待核验')}</span>`;
  $('#favoriteQuestionBtn').innerHTML=`${state.favorites.includes(w.id)?'★':'☆'} <span>${state.favorites.includes(w.id)?'已收藏':'收藏'}</span>`;
  $('#favoriteQuestionBtn').onclick=()=>toggleFavorite(w.id);$('#speakBtn').onclick=()=>speak(w.word);$('#explanation').classList.add('hidden');
  $('#nextQuestionBtn').textContent=item.checked?'下一题 →':'检查答案 →';$('#prevQuestionBtn').disabled=session.index===0;$('#prevQuestionBtn').onclick=()=>{if(session.index>0){session.index--;renderQuestion()}};
  renderAnswerArea(w,item);
  if(item.redo)$('#questionLabel').textContent=`RETRY / 错题重做 · ${$('#questionLabel').textContent}`;
  const type=answerType();
  if(type==='spell'){$('#questionPrompt').textContent=qMeaningClean(qFullMeaning(w))?qFullMeaning(w):'请点击“听发音”后拼写单词';$('#questionLabel').textContent='SPELL / 听音写词'}
  if(type==='listen'){$('#questionPrompt').textContent='点击“听发音”，选择你听到的英文单词';$('#questionLabel').textContent='LISTEN / 听音选英文'}
};

function qSetRecord(w,ok,type){
  const record=recordFor(w.id);record.seen++;record.lastSeen=new Date().toISOString();
  if(ok){record.correct++;record.level=Math.min(4,record.level+1);record.due=new Date(Date.now()+[0,1,3,7,21][record.level]*86400000).toISOString()}
  else{record.wrong++;record.level=Math.max(0,record.level-1);record.due=new Date().toISOString()}
  if(!session.id){
    session.id=qSessionId();
    // checkAnswer 已先增加 answered；当前这道题尚未写入 attempts。
    session.attemptStart=Math.max(0,state.attempts.length-(session.answered-1));
    state.attempts.slice(session.attemptStart).forEach(attempt=>{if(!attempt.sessionId)attempt.sessionId=session.id});
  }
  state.attempts.push({date:todayKey(),at:new Date().toISOString(),id:w.id,correct:ok,mode:type,sessionId:session.id});
}
function qPartOfSpeech(w){
  const external=qExternalEntry(w),value=String(w?.pos||'').trim();
  return value&&!/待核验/.test(value)?value:(external?.pos||'词性待核验');
}
function qExample(w){
  const en=String(w?.example||'').trim(),zh=String(w?.exampleZh||'').trim();
  const generic=/^The study explored .+ in a changing world\.$|^The report highlights the role of .+ in modern society\.$|^Researchers often study how .+ affects the result\.$|^The study describes the result as .+\.$|^The article discusses .+ in an academic context\.$/i;
  const personallyEdited=en&&zh&&en!==String(w?.original?.example||'').trim()&&!generic.test(en)&&!/待核验/.test(en);
  if(personallyEdited||w?.source==='family'&&en&&zh)return {en,zh,source:'personal'};
  const matched=window.EXAMPLE_SENTENCES?.[qCanonicalWord(w?.word)];
  if(matched?.en&&matched?.zh)return matched;
  return null;
}
function qStems(value){
  const word=qWordKey(value).replace(/[^a-z]/g,'');
  const stems=new Set([word]);
  ['ization','isation','ification','ation','tion','sion','ion','ment','ness','ity','ive','ous','al','ly','ing','ed','ers','ors','er','or','es','s','e'].forEach(suffix=>{
    if(word.length-suffix.length>=4&&word.endsWith(suffix)){const stem=word.slice(0,-suffix.length);stems.add(stem);if(stem.endsWith('pt'))stems.add(stem.slice(0,-2));}
  });
  return stems;
}
function qDerivatives(w){
  const explicit=state.words.filter(candidate=>candidate.id!==w.id&&(
    candidate.family===w.word||candidate.familyOf===w.word||w.family===candidate.word||w.familyOf===candidate.word
  ));
  const roots=qStems(w.word);
  const related=state.words.filter(candidate=>{
    if(candidate.id===w.id||!qWholeWord(candidate))return false;
    const candidateRoots=qStems(candidate.word);
    return [...roots].some(root=>root.length>=4&&candidateRoots.has(root));
  });
  const all=[...explicit,...related],seen=new Set();
  return all.filter(candidate=>{const key=qWordKey(candidate.word);if(seen.has(key))return false;seen.add(key);return true}).slice(0,8);
}
function qExplanationHtml(w,ok){
  const example=qExample(w),derivatives=qDerivatives(w);
  const derivativeHtml=derivatives.length?derivatives.map(candidate=>`<li><strong>${qEscape(candidate.word)}</strong><span>${qEscape(qPartOfSpeech(candidate))}</span><em>${qEscape(qFullMeaning(candidate))}</em></li>`).join(''):'<li class="muted">暂未找到可确认的衍生词</li>';
  const tatoebaId=Number(example?.sourceId);
  const sourceLabel=example?.source==='Tatoeba'&&Number.isSafeInteger(tatoebaId)&&tatoebaId>0?` · <a href="https://tatoeba.org/en/sentences/show/${tatoebaId}" target="_blank" rel="noopener noreferrer">Tatoeba 原句 ↗</a>`:example?.source==='Wikimedia'?' · Wikimedia':example?.source==='curated'?' · 按词义编写':'';
  const exampleHtml=example?`<div class="answer-example"><b>例句${sourceLabel}</b><p>${qEscape(example.en)}</p><p>${qEscape(example.zh)}</p></div>`:'<div class="answer-example"><b>例句</b><p>暂未找到与该词义对应的可靠例句，可在词库中自行补充。</p></div>';
  return `<div class="answer-result ${ok?'is-correct':'is-wrong'}"><strong>${ok?'✓ 答对了，继续保持':'✕ 需要再复习一次'}</strong><div class="answer-word"><b>${qEscape(w.word)}</b><span>${qEscape(qPartOfSpeech(w))}</span></div><div class="answer-meaning">${qEscape(qFullMeaning(w)||'释义待核验')}</div>${exampleHtml}<div class="answer-derivatives"><b>衍生词</b><ul>${derivativeHtml}</ul></div><small>来源：第 ${qEscape(w.source_page||'—')} 页 · ${qEscape(w.chapter||'—')}</small></div>`;
}
checkAnswer=function(){
  const item=currentItem(),w=currentWord();if(!item||!w)return;
  if(item.checked){
    const next=qNextIndex(session);
    if(next>=0){session.index=next;renderQuestion()}else finishPractice(true);
    return;
  }
  const type=answerType(),value=item.selected;
  if((Array.isArray(value)?value.length:!String(value||'').trim())){toast('先选择或输入答案');return}
  let ok=false;
  if(type==='multi'){
    const expected=new Set(item.correctValues||[qFullMeaning(w)]);const selected=new Set(value||[]);ok=expected.size===selected.size&&[...expected].every(x=>selected.has(x));
  }else if(type==='single')ok=value===qFullMeaning(w);
  else if(type==='listen'||type==='reverse')ok=value===w.word;
  else if(type==='spell')ok=String(value).trim().toLowerCase()===w.word.toLowerCase();
  else {const meaning=qFullMeaning(w);ok=qMeaningClean(meaning)&&(meaning.includes(String(value).trim())||String(value).trim().includes(meaning.split('；')[0]));}
  item.checked=true;item.status=ok?'correct':'wrong';item.attempts++;session.answered++;if(ok)session.correct++;qSetRecord(w,ok,type);
  // 按“题目”重做：前 50 题答错也须排到整轮末尾，不能被后 50 题的反向题抵消。
  if(!ok)session.queue.push({wordId:w.id,variant:item.variant,status:'pending',attempts:0,selected:null,checked:false,options:null,redo:true});
  state.lastSession=session;save();renderQuestion();
  $('#explanation').innerHTML=qExplanationHtml(w,ok);
  $('#explanation').classList.remove('hidden');
  $('#nextQuestionBtn').textContent=qNextIndex(session)>=0?'下一题 →':'查看本轮总结 →';
};

// “结束本轮”保存进度；只有真正做完最后一题才清除可继续会话。
finishPractice=function(completed=false){
  if(session){const finished=session;state.lastSession=completed?null:finished;state.recentSession={id:finished.id||null,started:finished.started,attemptStart:finished.attemptStart,answered:finished.answered};save();toast(completed?`本轮完成：${finished.correct}/${finished.answered} 正确`:'本轮已保存，下次可以继续')}
  session=null;showView('home');
};

// 清除部分历史后，按保留下来的逐题记录重算受影响词的熟练度和复习时间。
function qRebuildRecord(wordId,originalAttempts){
  const previous=state.records[wordId]||{};
  const all=originalAttempts.filter(attempt=>attempt.id===wordId);
  const kept=state.attempts.filter(attempt=>attempt.id===wordId);
  const baseSeen=Math.max(0,(previous.seen||0)-all.length);
  const baseCorrect=Math.max(0,(previous.correct||0)-all.filter(attempt=>attempt.correct).length);
  const baseWrong=Math.max(0,(previous.wrong||0)-all.filter(attempt=>!attempt.correct).length);
  if(!baseSeen&&!baseCorrect&&!baseWrong&&!kept.length){delete state.records[wordId];return}
  const record={...previous,seen:baseSeen,correct:baseCorrect,wrong:baseWrong,level:baseSeen?Math.min(4,previous.level||0):0,due:baseSeen?previous.due||null:null,lastSeen:baseSeen?previous.lastSeen||null:null};
  kept.forEach(attempt=>{
    const at=attempt.at||`${attempt.date}T12:00:00`;
    const timestamp=Date.parse(at);
    record.seen++;
    record.lastSeen=Number.isFinite(timestamp)?new Date(timestamp).toISOString():null;
    if(attempt.correct){record.correct++;record.level=Math.min(4,record.level+1);record.due=Number.isFinite(timestamp)?new Date(timestamp+[0,1,3,7,21][record.level]*86400000).toISOString():null}
    else{record.wrong++;record.level=Math.max(0,record.level-1);record.due=record.lastSeen}
  });
  state.records[wordId]=record;
}
function qRemoveAttempts(predicate){
  const original=state.attempts.slice();
  const removed=original.filter(predicate);
  if(!removed.length)return 0;
  state.attempts=original.filter(attempt=>!predicate(attempt));
  new Set(removed.map(attempt=>attempt.id)).forEach(id=>qRebuildRecord(id,original));
  return removed.length;
}
function qSessionPredicate(target){
  if(target.id)return attempt=>attempt.sessionId===target.id;
  const start=Number.isInteger(target.attemptStart)?target.attemptStart:Math.max(0,state.attempts.length-(target.answered||0));
  return (_attempt,index)=>index>=start;
}
function qClearLearning(scope){
  const target=scope==='session'?(session||state.lastSession||state.recentSession):null;
  const today=todayKey();
  if(scope==='session'&&!target){toast('没有可清空的本次训练');return}
  if(scope==='today'&&!state.attempts.some(attempt=>attempt.date===today)&&!(session&&todayKey(new Date(session.started))===today)){toast('今天还没有学习数据');return}
  const messages={session:'将删除本次训练的作答、成绩和可继续进度。其他训练与收藏不受影响。',today:'将删除今天的作答和对应熟练度变化；今天的未完成训练也会结束。其他日期与收藏不受影响。',all:'将永久清空全部作答、熟练度、连续学习、收藏及未完成训练。词库和设置会保留。'};
  if(!window.confirm(`${messages[scope]}\n\n建议先在“浏览词库”中导出数据备份。确定继续吗？`))return;
  let removed=0;
  if(scope==='all'){
    removed=state.attempts.length;state.records={};state.attempts=[];state.favorites=[];state.lastSession=null;state.recentSession=null;session=null;
  }else if(scope==='session'){
    removed=qRemoveAttempts(qSessionPredicate(target));
    session=null;state.lastSession=null;state.recentSession=null;
  }else{
    const active=session||state.lastSession;
    const activePredicate=active?qSessionPredicate(active):null;
    const currentTouched=!!activePredicate&&state.attempts.some((attempt,index)=>attempt.date===today&&activePredicate(attempt,index));
    removed=qRemoveAttempts(attempt=>attempt.date===today);
    if(currentTouched||active&&todayKey(new Date(active.started))===today){session=null;state.lastSession=null}
    if(state.recentSession&&todayKey(new Date(state.recentSession.started))===today)state.recentSession=null;
  }
  save();showView('stats');renderHome();
  toast(scope==='all'?'所有学习数据已清空':scope==='today'?`已清空今天 ${removed} 道作答`:`已清空本次训练 ${removed} 道作答`);
}
document.addEventListener('click',event=>{
  const scope=event.target.closest('[data-clear-learning]')?.dataset.clearLearning;
  if(scope&&['session','today','all'].includes(scope))qClearLearning(scope);
});

function qNormalizeImported(raw,index){
  if(!raw||typeof raw!=='object')return null;
  const word=String(raw.word||'').trim(),meaning=String(raw.meaning||'').trim(),chapter=String(raw.chapter||'待分章').trim();
  if(!word||word.length>80||!meaning||meaning.length>100||!chapter)return null;
  const safeId=Array.from(qWordKey(word)).map(char=>char.codePointAt(0).toString(16)).join('-')||String(index);
  return {...raw,id:String(raw.id||`imported-${safeId}`),word,meaning,chapter,source:'imported',status:raw.status==='verified'&&qMeaningClean(meaning)?'verified':'review',tags:Array.isArray(raw.tags)?raw.tags:[],source_page:String(raw.source_page||'—')};
}
importData=function(file){
  const reader=new FileReader();reader.onload=()=>{
    try{
      const payload=JSON.parse(reader.result),incoming=Array.isArray(payload)?payload:(Array.isArray(payload.words)?payload.words:[]);
      if(!incoming.length)throw Error('empty');
      const byId=new Map(state.words.map(w=>[String(w.id),w])),byWord=new Map(state.words.map(w=>[qWordKey(w.word),w]));let added=0,updated=0,rejected=0;
      incoming.forEach((raw,index)=>{const item=qNormalizeImported(raw,index);if(!item){rejected++;return}const existing=byId.get(item.id)||byWord.get(qWordKey(item.word));if(existing){Object.keys(item).forEach(key=>{if(key!=='id'&&item[key]!==''&&item[key]!==undefined)existing[key]=item[key]});updated++}else{state.words.push(item);byId.set(item.id,item);byWord.set(qWordKey(item.word),item);added++}});
      if(payload.records)state.records={...state.records,...payload.records};if(Array.isArray(payload.favorites))state.favorites=[...new Set([...state.favorites,...payload.favorites])];save();fillSelects();renderHome();toast(`导入完成：新增 ${added}，更新 ${updated}，跳过 ${rejected}`);
    }catch(error){toast('导入失败：文件不是有效的词库 JSON')}
  };reader.readAsText(file);
};
exportData=function(){
  const payload={schemaVersion:2,exportedAt:new Date().toISOString(),words:state.words,records:state.records,favorites:state.favorites,attempts:state.attempts};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='vocab-offline-export.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('学习数据已导出');
};

renderLibrary=function(){
  const q=($('#searchInput')?.value||'').trim().toLowerCase(),chapter=$('#libraryChapter')?.value||'all',status=$('#libraryStatus')?.value||'all';
  const words=state.words.filter(w=>(chapter==='all'||w.chapter===chapter)&&(!q||`${w.word} ${w.meaning} ${(w.tags||[]).join(' ')}`.toLowerCase().includes(q))&&statusMatch(w,status));
  $('#wordTable').innerHTML=words.length?words.map(w=>`<div class="word-row"><div class="word-main"><strong>${qEscape(w.word)}</strong><small>${qEscape(w.ipa||'—')} · ${qEscape(w.pos||'待核验')} · ${qEscape(w.chapter||'待分章')} · p.${qEscape(w.source_page||'—')}</small></div><div class="word-detail">${qEscape(qFullMeaning(w)||'释义待核验')}<small>${qEscape(w.notes||w.example||'')}</small></div><div class="word-actions"><button class="mini-btn fav-toggle" data-id="${qEscape(w.id)}">${state.favorites.includes(w.id)?'★':'☆'}</button><button class="mini-btn edit-word" data-id="${qEscape(w.id)}">编辑</button></div></div>`).join(''):'<div class="panel"><p class="muted">没有符合条件的词条。可以清空筛选，或选择待核验状态。</p></div>';
  $$('.fav-toggle').forEach(button=>button.onclick=()=>toggleFavorite(button.dataset.id));$$('.edit-word').forEach(button=>button.onclick=()=>openEdit(button.dataset.id));
};
const qBaseStatusMatch=statusMatch;
statusMatch=function(w,status){if(status==='review')return qReview(w);return qBaseStatusMatch(w,status)};

// 词库静态数据与学习记录分开保存，避免每次答题重复写入 1MB 以上的词库。
const Q_CATALOG_KEY='vocab-offline-catalog-v1';
try{
  const catalog=JSON.parse(localStorage.getItem(Q_CATALOG_KEY)||'null');
  if(Array.isArray(catalog)&&catalog.length)state.words=catalog;
}catch(error){/* 读取失败时保留当前内存词库 */}
// localStorage 写入失败时给出明确提示，不再静默丢失学习记录。
save=function(){
  try{
    localStorage.setItem(Q_CATALOG_KEY,JSON.stringify(state.words));
    const compact={...state};delete compact.words;
    localStorage.setItem(KEY,JSON.stringify(compact));
  }catch(error){if(!save.storageWarned){save.storageWarned=true;toast('浏览器存储空间不足，请先导出学习数据')}}
};
function qApplyExternalDictionary(){
  let changed=false;
  const byCanonical=new Map(state.words.map(word=>[qWordKey(word.word),word]));
  const removed=new Set();
  state.words.forEach(word=>{
    const originalKey=qWordKey(word.word),canonical=qCanonicalWord(originalKey);
    if(canonical!==originalKey){
      const existing=byCanonical.get(canonical);
      if(existing&&existing!==word){removed.add(word);return;}
      word.word=canonical;changed=true;
    }
    const external=qExternalEntry(word);
    if(!external?.meaning)return;
    if(word.meaning!==external.meaning){word.meaning=external.meaning;changed=true}
    if(word.fullMeaning!==external.meaning){word.fullMeaning=external.meaning;changed=true}
    const needsIpa=!word.ipa||word.ipa==='—'||/待核验/.test(String(word.ipa));
    if(external.ipa&&((word.source==='ocr'||word.source==='index'||needsIpa))&&word.ipa!==external.ipa){word.ipa=external.ipa;changed=true}
    if(external.pos&&word.pos!==external.pos){word.pos=external.pos;changed=true}
    if(word.translationSource!=='ECDICT'){word.translationSource='ECDICT';changed=true}
    if(word.status!=='verified'){word.status='verified';changed=true}
  });
  if(removed.size){state.words=state.words.filter(word=>!removed.has(word));changed=true}
  if(changed)save();
}
function qApplyMeaningFixes(){
  let changed=false;
  state.words.forEach(word=>{
    const key=qCanonicalWord(word.word),fixed=Q_MEANING_FIXES[key],fixedIpa=Q_IPA_FIXES[key];
    if(!window.EXTERNAL_VOCAB?.[key]?.meaning&&fixed&&word.meaning!==fixed){
      word.meaning=fixed;
      word.fullMeaning=fixed;
      word.status='verified';
      word.notes='已补充完整中文释义。';
      changed=true;
    }
    if(fixedIpa&&word.ipa!==fixedIpa){word.ipa=fixedIpa;changed=true}
  });
  if(changed)save();
}
qApplyExternalDictionary();
qApplyMeaningFixes();

document.addEventListener('DOMContentLoaded',()=>{
  const source=$('#sourceSelect');
  if(source){if(source.options[0])source.options[0].textContent='正式词库（已审核）';if(!source.querySelector('[value="verified"]'))source.insertAdjacentHTML('beforeend','<option value="review">待核验词库（仅查看/专项练习）</option>')}
  const status=$('#libraryStatus');if(status&&!status.querySelector('[value="review"]'))status.insertAdjacentHTML('beforeend','<option value="review">待核验</option>');
  const quick=$('.quick-grid');if(quick&&!quick.querySelector('[data-practice="review"]'))quick.insertAdjacentHTML('beforeend','<button class="quick-card" data-practice="review"><span>!</span><strong>待核验词库</strong><small>查看 OCR 与索引补录</small></button>');
  qApplyExternalDictionary();
  qApplyMeaningFixes();
  const saved=state.lastSession;
  if(saved?.type==='whole'&&Array.isArray(saved.queue)){
    let changed=false;
    const originalFocus=saved.queue[saved.index];
    const knownIds=new Set(state.words.map(word=>word.id));
    const previousBaseLength=qWholeBaseLength(saved);
    const missingBase=saved.queue.slice(0,previousBaseLength).filter(item=>!knownIds.has(item.wordId)).length;
    const present=saved.queue.filter(item=>knownIds.has(item.wordId));
    if(present.length!==saved.queue.length){saved.queue=present;saved.baseLength=previousBaseLength-missingBase;changed=true}
    const baseLength=qWholeBaseLength(saved);
    const base=saved.queue.slice(0,baseLength);
    const legacyPaired=base.length>=4&&base.length%2===0&&base.every((item,index)=>index%2===0?item.variant===0:item.variant===1&&item.wordId===base[index-1].wordId);
    if(legacyPaired){
      const shuffle=items=>{const copy=items.slice();for(let index=copy.length-1;index>0;index--){const other=Math.floor(Math.random()*(index+1));[copy[index],copy[other]]=[copy[other],copy[index]]}return copy};
      saved.queue=[...shuffle(base.filter(item=>item.variant===0)),...shuffle(base.filter(item=>item.variant===1)),...saved.queue.slice(baseLength)];
      saved.baseLength=baseLength;
      changed=true;
    }
    saved.queue.slice(qWholeBaseLength(saved)).forEach(item=>{if(!item.redo){item.redo=true;changed=true}});
    if(changed){
      const focused=saved.queue.indexOf(originalFocus);
      saved.index=focused>=0&&!legacyPaired?focused:saved.queue.findIndex(item=>!item.checked);
      if(saved.index<0)saved.index=Math.max(0,saved.queue.length-1);
      save();toast('已修复已保存的整本遍历题序，可继续本轮练习');
    }
  }
  renderHome();
});
document.addEventListener('click',event=>{
  const practice=event.target.closest('[data-practice]');
  if(practice&&practice.dataset.practice!=='review'&&setup.source==='review'){setup.source='all';if($('#sourceSelect'))$('#sourceSelect').value='all';}
  const card=event.target.closest('[data-practice="review"]');
  if(!card)return;
  setup.type='mixed';setup.source='review';openSetup('mixed');
  if($('#sourceSelect'))$('#sourceSelect').value='review';
});

// 全书遍历：从全书随机抽词，优先抽尚未背过的词，再把同一批词拆成两个随机区段。
// 第 1 区段为英文选中文，第 2 区段为中文选英文，避免同一个词连续出现两次。
function qWholeWord(w){
  return !!w && /^[A-Za-z][A-Za-z -]*$/.test(String(w.word||'')) && qMeaningClean(qFullMeaning(w));
}
wholeBookWords=function(){
  const seen=new Set();
  return state.words.filter(w=>{
    const key=qWordKey(w.word);
    if(!qWholeWord(w)||seen.has(key))return false;
    seen.add(key);return true;
  });
};
function qShuffleWhole(items){
  const copy=items.slice();
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy;
}
makeWholeQueue=function(){
  const all=wholeBookWords();
  const unseen=[],seen=[];
  all.forEach(w=>(recordFor(w.id).seen>0?seen:unseen).push(w));
  const selected=qShuffleWhole(unseen).slice(0,50);
  if(selected.length<50)selected.push(...qShuffleWhole(seen).slice(0,50-selected.length));
  const first=qShuffleWhole(selected),second=qShuffleWhole(selected);
  return [
    ...first.map(w=>({wordId:w.id,variant:0,status:'pending',attempts:0,selected:null,checked:false,options:null})),
    ...second.map(w=>({wordId:w.id,variant:1,status:'pending',attempts:0,selected:null,checked:false,options:null}))
  ];
};

// 在入口处明确显示本轮结构，避免把“两次出现”误解为相邻重复。
document.addEventListener('DOMContentLoaded',()=>{
  const card=$('.quick-card[data-practice="whole"]');
  const note=card?.querySelector('small');
  if(note)note.textContent='全书随机 50 词 · 前英→中 / 后中→英';
});
