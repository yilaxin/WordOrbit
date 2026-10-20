/* Visual progress is derived from the existing learning state; no second progress store. */
(() => {
  const select = selector => document.querySelector(selector);
  const percent = (done, total) => total ? Math.min(100, Math.round(done / total * 100)) : 0;
  let regularCount = setup.count;

  function syncNavigation() {
    const view = document.querySelector('.view.active')?.id.replace('view-', '') || 'home';
    document.body.dataset.activeView = view;
    document.querySelectorAll('.primary-nav [data-view]').forEach(button => {
      const active = button.dataset.view === view || button.dataset.view === 'home' && ['setup', 'practice'].includes(view);
      button.classList.toggle('active', active);
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
  }

  function syncHome() {
    const count = state.attempts.filter(attempt => attempt.date === todayKey()).length;
    const target = Math.max(1, Number(state.settings.dailyNew) || 20);
    const progress = percent(count, target);
    const meter = select('#todayOrbitMeter');
    if (meter) {
      meter.style.setProperty('--progress', progress + '%');
      meter.setAttribute('aria-valuenow', String(progress));
      meter.setAttribute('aria-valuetext', '今日已完成 ' + count + ' 道作答，目标 ' + target + ' 道');
    }
    if (select('#todayCompletion')) select('#todayCompletion').textContent = progress + '%';
    if (select('#todayNew')) select('#todayNew').textContent = target;
    if (select('#orbitDate')) select('#orbitDate').textContent = new Intl.DateTimeFormat('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' }).format(new Date()) + ' · 今天，继续向前一点。';
    if (select('#continueBtn')) {
      select('#continueBtn').disabled = !state.lastSession;
      select('#continueBtn').title = state.lastSession ? '接着上次保存的位置继续' : '开始一轮练习后，可以在这里继续';
    }
  }

  function phaseHtml(label, order, questions, active) {
    const done = questions.filter(question => question.checked).length;
    return '<div class="route-phase ' + (active ? 'active' : '') + '"><div class="route-phase-head"><span><b>' + order + '</b>' + label + '</span><strong>' + done + ' / ' + questions.length + '</strong></div><div class="progress-track" role="progressbar" aria-label="' + label + '" aria-valuemin="0" aria-valuemax="' + questions.length + '" aria-valuenow="' + done + '"><span style="width:' + percent(done, questions.length) + '%"></span></div></div>';
  }

  function syncPractice() {
    const route = select('#practiceRoute');
    if (!route || !session) return;
    const item = currentItem();
    const baseLength = session.type === 'whole' ? qWholeBaseLength(session) : (session.queue.findIndex(question => question.redo) >= 0 ? session.queue.findIndex(question => question.redo) : session.queue.length);
    const base = session.queue.slice(0, baseLength);
    const redos = session.queue.slice(baseLength);
    const pending = redos.filter(question => !question.checked).length;
    if (session.type === 'whole') {
      route.innerHTML = phaseHtml('英文 → 中文', '01', base.filter(question => question.variant !== 1), !item?.redo && item?.variant !== 1) +
        phaseHtml('中文 → 英文', '02', base.filter(question => question.variant === 1), !item?.redo && item?.variant === 1) +
        '<div class="route-redo"><span>' + (item?.redo ? '正在重做' : '末尾重做') + '</span><strong>' + pending + ' 题待完成</strong></div>';
    } else {
      route.innerHTML = phaseHtml('本轮练习', 'ORBIT', base, !item?.redo) +
        '<div class="route-redo"><span>末尾重做</span><strong>' + pending + ' 题待完成</strong></div>';
    }
    const card = select('.question-card');
    if (card) {
      card.dataset.questionType = answerType();
      card.dataset.result = item?.checked ? item.status : 'pending';
    }
    const current = select('.nav-dot.current');
    const navigation = select('#questionNav');
    if (current && navigation) {
      const dotRect = current.getBoundingClientRect();
      const navRect = navigation.getBoundingClientRect();
      if (dotRect.top < navRect.top) navigation.scrollTop += dotRect.top - navRect.top - 3;
      else if (dotRect.bottom > navRect.bottom) navigation.scrollTop += dotRect.bottom - navRect.bottom + 3;
    }
  }

  function syncSetup() {
    const whole = setup.type === 'whole';
    const countBlock = select('#countChoices')?.closest('.form-block');
    const scopeBlock = select('#chapterSelect')?.closest('.form-block');
    const orderBlock = select('#orderChoices')?.closest('.form-block');
    [countBlock, scopeBlock, orderBlock].forEach(block => { if (block) block.hidden = whole; });
    let note = select('#wholeSetupNote');
    if (!note && select('#launchPracticeBtn')) {
      select('#launchPracticeBtn').insertAdjacentHTML('beforebegin', '<div id="wholeSetupNote" class="whole-setup-note" hidden><div><b>01</b><strong>英文 → 中文</strong><span>50 题</span></div><div><b>02</b><strong>中文 → 英文</strong><span>50 题</span></div><p>从全书随机抽取同一批 50 个词，两段分别打乱顺序。答错的题排到原定 100 题之后重做。</p></div>');
      note = select('#wholeSetupNote');
    }
    if (note) note.hidden = !whole;
    const preview = select('#previewNumber');
    const description = select('.setup-aside > .muted');
    if (whole) {
      if (setup.count !== 100) regularCount = setup.count;
      if (preview) preview.textContent = String(Math.min(50, wholeBookWords().length) * 2);
      if (description) description.textContent = '全书随机 50 个词，完成两段练习。两段均完成后，再集中重做本轮错题。';
    } else {
      if (setup.count === 100) setup.count = regularCount;
      regularCount = setup.count;
      if (preview) preview.textContent = setup.count === 'all' ? '全部' : String(setup.count);
      if (description) description.textContent = '道题将从符合条件的词条中生成。答错会自动排到本轮末尾，直到答对或结束本轮。';
      document.querySelectorAll('#countChoices .choice').forEach(button => button.classList.toggle('active', button.dataset.count === String(setup.count)));
    }
  }

  function syncThemeButton() {
    const dark = document.body.classList.contains('dark');
    const button = select('#themeBtn');
    if (!button) return;
    button.textContent = dark ? '☼' : '☾';
    button.title = dark ? '切换至晨光模式' : '切换至深空模式';
    button.setAttribute('aria-label', button.title);
    button.setAttribute('aria-pressed', String(dark));
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0b1020' : '#f3f5fc');
    if (window.chrome?.webview?.postMessage) window.chrome.webview.postMessage(dark ? 'theme-dark' : 'theme-light');
  }

  function syncStatistics() {
    const chart = select('#activityChart');
    if (!chart) return;
    let total = 0;
    const days = [];
    for (let index = 29; index >= 0; index--) {
      const date = new Date();
      date.setDate(date.getDate() - index);
      const key = todayKey(date);
      const count = state.attempts.filter(attempt => attempt.date === key).length;
      days.push({ key, count });
      total += count;
    }
    const maximum = Math.max(1, ...days.map(day => day.count));
    chart.querySelectorAll('.bar').forEach((bar, index) => {
      const day = days[index];
      if (!day) return;
      bar.style.height = day.count ? Math.max(3, day.count / maximum * 100) + '%' : '2px';
      bar.style.opacity = day.count ? '1' : '.2';
      bar.tabIndex = 0;
      bar.setAttribute('aria-label', day.key + '，' + day.count + ' 道作答');
      bar.title = day.key + ' · ' + day.count + ' 题';
    });
    let caption = select('#activityCaption');
    if (!caption) {
      chart.insertAdjacentHTML('afterend', '<div id="activityCaption" class="activity-caption"></div>');
      caption = select('#activityCaption');
    }
    caption.innerHTML = '<span>' + days[0].key.slice(5) + '</span><span>近 30 天 · 共 ' + total + ' 道作答</span><span>今天</span>';
    const chapterHeading = select('#chapterStats')?.parentElement.querySelector('.panel-head');
    if (chapterHeading && !chapterHeading.querySelector('.list-scroll-hint')) {
      chapterHeading.insertAdjacentHTML('beforeend', '<span class="list-scroll-hint">22 个主题 · 滚动查看</span>');
    }
  }

  function syncMotion() {
    const systemReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const enabled = state.settings.motionEnabled !== false && !systemReduced;
    document.body.dataset.motion = enabled ? 'on' : 'off';
    const button = select('#motionBtn');
    if (!button) return;
    button.setAttribute('aria-label', '轨道动效');
    button.setAttribute('aria-pressed', String(enabled));
    button.title = systemReduced ? '已跟随系统关闭动态效果' : enabled ? '关闭轨道动效' : '开启轨道动效';
    button.disabled = systemReduced;
  }

  const previousHome = renderHome;
  renderHome = function () { previousHome(); syncHome(); };
  const previousView = showView;
  showView = function (name) {
    previousView(name);
    if (name !== 'library') {
      select('#wordTable')?.replaceChildren();
      const pager = select('#libraryPager');
      if (pager) pager.hidden = true;
    }
    syncNavigation();
    if (name === 'setup') syncSetup();
    if (document.body.dataset.motion === 'off') window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const previousQuestion = renderQuestion;
  renderQuestion = function () { previousQuestion(); syncPractice(); };
  const previousStatistics = renderStats;
  renderStats = function () { previousStatistics(); syncStatistics(); };

  document.addEventListener('DOMContentLoaded', () => {
    state.settings ||= { dailyNew: 20 };
    // The full-book card now has its own prominent position on the dashboard.
    select('.quick-grid [data-practice="whole"]')?.remove();
    // Event handlers must not pass the MouseEvent as finishPractice's "completed" flag.
    select('#exitPractice').onclick = () => finishPractice(false);
    const singleChoice = select('#typeChoices [data-type="single"]');
    if (singleChoice) singleChoice.textContent = '英选中';
    document.addEventListener('click', event => {
      if (event.target.closest('#typeChoices .choice, #countChoices .choice, [data-practice]')) syncSetup();
    });
    const scene = select('.orbit-scene');
    scene?.insertAdjacentHTML('beforeend', '<svg class="orbit-motion" viewBox="0 0 660 480" aria-hidden="true"><g transform="rotate(-21 334 239)"><circle class="orbit-traveler" r="3" fill="#d9c8ff"/><circle class="orbit-traveler orbit-traveler-halo" r="7" fill="none" stroke="#bca2ff" stroke-opacity=".25"/></g></svg>');
    const startupToast = select('#toast');
    if (startupToast && /OCR|词族词条|修复已保存/.test(startupToast.textContent)) startupToast.classList.remove('show');
    select('#motionBtn').onclick = () => {
      state.settings.motionEnabled = document.body.dataset.motion !== 'on';
      save();
      syncMotion();
    };
    const originalThemeClick = select('#themeBtn').onclick;
    select('#themeBtn').onclick = event => { originalThemeClick?.(event); syncThemeButton(); };
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', syncMotion);
    syncHome();
    syncNavigation();
    syncThemeButton();
    syncMotion();
  });
})();
