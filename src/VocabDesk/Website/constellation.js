/* Interactive topic system. Artwork is local; counts and mastery come from the live catalog. */
(() => {
  'use strict';
  const ART = window.WORDORBIT_TOPIC_ART || [];
  const WORLD = { width: 1240, height: 760 };
  const RINGS = [
    { count: 3, rx: 170, ry: 110, period: 180, phase: -.8 },
    { count: 5, rx: 280, ry: 170, period: 240, phase: .33 },
    { count: 6, rx: 400, ry: 240, period: 320, phase: -.23 },
    { count: 7, rx: 530, ry: 310, period: 420, phase: .24 }
  ];
  const $map = selector => document.querySelector(selector);
  const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  let root, viewport, camera, bodies, model = [], nodeViews = [], signature = '';
  let selected = null, view = 'map', elapsed = 0, fit = 1, zoom = 1, pan = { x: 0, y: 0 };
  let dimensions = { width: 1000, height: 600 }, frame = null, lastFrame = null;
  let keyboardFocus = false, visible = false, expanded = false, drag = null;
  let savedCamera = null, previousOverflow = '', returnFocus = null, manualPause = false;

  function readModel() {
    const buckets = new Map(CHAPTERS.map(chapter => [chapter, { count: 0, done: 0 }]));
    state.words.forEach(word => {
      const bucket = buckets.get(word.chapter);
      if (!bucket || !qVerified(word)) return;
      bucket.count++;
      if (mastered(word)) bucket.done++;
    });
    const rows = ART.map((art, index) => ({ ...art, index, ...buckets.get(art.chapter) }));
    const previousStar = model.find(row => row.star)?.chapter;
    const ranked = rows.slice().sort((a, b) => b.count - a.count || Number(b.chapter === previousStar) - Number(a.chapter === previousStar) || a.index - b.index);
    const star = ranked.shift();
    const minimum = Math.min(...rows.map(row => row.count));
    const maximum = Math.max(...rows.map(row => row.count));
    const denominator = Math.sqrt(maximum) - Math.sqrt(minimum);
    rows.forEach(row => {
      row.percent = row.count ? Math.round(row.done / row.count * 100) : 0;
      row.star = row === star;
      // Give the central star a distinct visual tier, rather than letting a similarly
      // sized topic planet compete with it. Orbiting bodies keep their count ranking.
      row.size = row.star ? 174 : denominator ? 40 + 32 * (Math.sqrt(row.count) - Math.sqrt(minimum)) / denominator : 56;
      row.ring = -1;
      row.angle = 0;
    });
    let cursor = 0;
    RINGS.forEach((ring, ringIndex) => {
      const group = ranked.slice(cursor, cursor + ring.count);
      group.forEach((row, index) => { row.ring = ringIndex; row.angle = ring.phase + index * Math.PI * 2 / group.length; });
      cursor += group.length;
    });
    // A private planet is optional. It never changes the book's 22-topic central star.
    const personal = window.WordOrbitMyWords?.summary();
    if (personal?.total > 0) {
      const outer = rows.filter(row => !row.star && row.ring === 3);
      outer.forEach((row,index) => { row.angle = RINGS[3].phase + index * Math.PI * 2 / (outer.length + 1); });
      rows.push({id:'mywords-private',chapter:'我的词库',title:'私人词汇星球',kind:'personal',color:'#74d4f8',src:'assets/display-brand.png',fit:1.15,index:rows.length,count:personal.total,ready:personal.ready,done:personal.done,percent:personal.ready?Math.round(personal.done/personal.ready*100):0,personal:true,star:false,size:Math.min(72,40+Math.sqrt(personal.total)*.6),ring:3,angle:RINGS[3].phase+outer.length*Math.PI*2/(outer.length+1)});
    }
    return rows;
  }

  function ensureMounted() {
    if (root) return true;
    root = $map('#topicExplorer');
    if (!root) return false;
    viewport = $map('#constellationViewport');
    camera = $map('#constellationCamera');
    bodies = $map('#constellationBodies');
    view = state.settings?.constellationView === 'list' ? 'list' : 'map';
    manualPause = state.settings?.constellationPaused === true;
    $map('#starMapViewBtn').onclick = () => setView('map');
    $map('#starListViewBtn').onclick = () => setView('list');
    $map('#starMapZoomIn').onclick = () => setZoom(zoom * 1.2);
    $map('#starMapZoomOut').onclick = () => setZoom(zoom / 1.2);
    $map('#starMapReset').onclick = resetCamera;
    $map('#starMapExpand').onclick = () => setExpanded(!expanded);
    $map('#starMapPlayBtn').onclick = () => {
      manualPause = !manualPause;
      state.settings.constellationPaused = manualPause;
      save();
      synchronizeAnimation();
    };
    $map('#constellationStart').onclick = launchTopic;
    viewport.addEventListener('focusin', event => {
      keyboardFocus = event.target.matches(':focus-visible');
      synchronizeAnimation();
    });
    viewport.addEventListener('focusout', event => {
      if (!viewport.contains(event.relatedTarget)) { keyboardFocus = false; synchronizeAnimation(); }
    });
    viewport.addEventListener('pointerdown', event => {
      if (event.pointerType === 'mouse' && keyboardFocus) { keyboardFocus = false; synchronizeAnimation(); }
      if (event.button !== 0 || event.target.closest('.celestial-body')) return;
      drag = { pointer: event.pointerId, x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y };
      viewport.setPointerCapture(event.pointerId);
      viewport.classList.add('is-dragging');
    });
    viewport.addEventListener('pointermove', event => {
      if (!drag || event.pointerId !== drag.pointer) return;
      pan.x = drag.panX + event.clientX - drag.x;
      pan.y = drag.panY + event.clientY - drag.y;
      draw();
    });
    const endDrag = event => {
      if (!drag || event.pointerId !== drag.pointer) return;
      drag = null;
      viewport.classList.remove('is-dragging');
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    };
    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);
    viewport.addEventListener('wheel', event => {
      if (!event.ctrlKey) return;
      event.preventDefault();
      const rect = viewport.getBoundingClientRect();
      setZoom(zoom * Math.exp(-event.deltaY * .002), event.clientX - rect.left, event.clientY - rect.top);
    }, { passive: false });
    viewport.addEventListener('keydown', event => {
      if (event.target !== viewport) return;
      const moves = { ArrowLeft: [40, 0], ArrowRight: [-40, 0], ArrowUp: [0, 40], ArrowDown: [0, -40] };
      if (moves[event.key]) { event.preventDefault(); pan.x += moves[event.key][0]; pan.y += moves[event.key][1]; draw(); }
      else if (event.key === '+' || event.key === '=') { event.preventDefault(); setZoom(zoom * 1.2); }
      else if (event.key === '-') { event.preventDefault(); setZoom(zoom / 1.2); }
      else if (event.key === '0') { event.preventDefault(); resetCamera(); }
    });
    root.addEventListener('keydown', event => {
      if (!expanded) return;
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); setExpanded(false); }
      if (event.key === 'Tab') {
        const controls = [...root.querySelectorAll('button:not(:disabled), [tabindex="0"]')].filter(element => element.getClientRects().length);
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
    new ResizeObserver(resize).observe(viewport);
    new IntersectionObserver(entries => {
      visible = entries[0]?.isIntersecting || false;
      synchronizeAnimation();
    }, { threshold: .02 }).observe(viewport);
    new MutationObserver(synchronizeAnimation).observe(document.body, { attributes: true, attributeFilter: ['data-motion', 'data-active-view'] });
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', synchronizeAnimation);
    document.addEventListener('visibilitychange', synchronizeAnimation);
    applyView();
    return true;
  }

  function decorateList() {
    const personal = model.find(row => row.personal);
    let privateCard = $map('#myWordsChapterCard');
    if (personal && !privateCard) {
      privateCard = document.createElement('button');
      privateCard.id = 'myWordsChapterCard';privateCard.className = 'chapter-card is-personal';privateCard.dataset.chapter = '我的词库';
      $map('#chapterGrid').append(privateCard);
    }
    if (!personal && privateCard) { privateCard.remove(); privateCard = null; }
    if (privateCard) {
      privateCard.innerHTML = '<div class="chapter-topline"><img class="chapter-art" src="assets/display-brand.png" alt="" width="48" height="48"/><small>PRIVATE / 仅本机</small></div><strong>我的词库</strong><div class="mini-track"><span style="width:'+personal.percent+'%"></span></div><div class="chapter-bottom"><span>'+personal.done+' / '+personal.ready+' 可练习词已掌握</span><b>'+personal.percent+'%</b></div>';
      privateCard.setAttribute('aria-label','我的词库，'+personal.count+' 个私人词条，'+personal.ready+' 个可练习词');
    }
    const byChapter = new Map(model.map(row => [row.chapter, row]));
    document.querySelectorAll('#chapterGrid .chapter-card').forEach(button => {
      const row = byChapter.get(button.dataset.chapter);
      if (!row) return;
      button.classList.toggle('selected', selected === row.chapter);
      button.setAttribute('aria-pressed', String(selected === row.chapter));
      const old = button.querySelector('.chapter-planet');
      if (old) old.outerHTML = '<img class="chapter-art" src="' + esc(row.src) + '" alt="" width="48" height="48" loading="lazy"/>';
      const caption = button.querySelector('.chapter-topline small');
      if (caption) caption.textContent = row.star ? '中央恒星' : row.title;
      button.onclick = () => selectTopic(row.chapter, true);
    });
  }

  function rebuildBodies() {
    const starArt = ART.find(row => row.kind === 'star');
    bodies.innerHTML = model.map(row => {
      const starImage = row.star ? starArt?.src || row.src : row.src;
      const imageArt = row.star ? starArt || row : row;
      return '<button class="celestial-body ' + (row.star ? 'is-star' : '') + '" data-topic="' + esc(row.chapter) + '" data-kind="' + row.kind + '" style="--body-color:' + row.color + '" aria-pressed="false">' +
        (row.star ? '<span class="stellar-corona" aria-hidden="true"></span>' : '') +
        '<span class="celestial-object" aria-hidden="true"><img src="' + esc(starImage) + '" alt="" draggable="false" style="--art-fit:' + (imageArt.fit || 1) + ';--art-offset-x:' + (imageArt.offsetX || '0%') + ';--art-offset-y:' + (imageArt.offsetY || '0%') + '"/></span>' +
        '<svg class="celestial-progress" viewBox="0 0 120 120" aria-hidden="true"><circle class="celestial-progress-track" cx="60" cy="60" r="53"/><circle class="celestial-progress-value" cx="60" cy="60" r="53" pathLength="100" stroke-dasharray="' + row.percent + ' 100"/></svg>' +
        (row.star && row.kind !== 'star' ? '<span class="stellar-theme-mark"><img src="' + esc(row.src) + '" alt=""/></span>' : '') +
        '<span class="celestial-label"><strong>' + esc(row.chapter) + '</strong>' + (row.star ? '<small>中央恒星</small>' : '') + '</span></button>';
    }).join('');
    nodeViews = [...bodies.querySelectorAll('.celestial-body')].map((element, index) => {
      const row = model[index];
      element.onclick = () => selectTopic(row.chapter);
      element.setAttribute('aria-label', row.chapter + '，' + (row.personal ? row.count+' 个私人词条，'+row.ready+' 个可练习词' : row.count+' 个可练习词') + '，已掌握 ' + row.done + ' 个，' + (row.star ? '中央恒星' : '第 ' + (row.ring + 1) + ' 轨道'));
      element.title = row.chapter + ' · ' + row.count + ' 词 · 已掌握 ' + row.percent + '%';
      element.querySelector('.celestial-object img').onerror = () => element.classList.add('asset-missing');
      return { row, element, object: element.querySelector('.celestial-object'), progress: element.querySelector('.celestial-progress'), label: element.querySelector('.celestial-label') };
    });
  }

  function render() {
    if (!ensureMounted()) return;
    const rows = readModel();
    const nextSignature = rows.map(row => [row.chapter, row.count, row.done, row.star, row.ready || 0].join(':')).join('|');
    if (nextSignature !== signature) {
      model = rows;
      signature = nextSignature;
      rebuildBodies();
    }
    decorateList();
    const star = model.find(row => row.star);
    const personal = model.find(row => row.personal);
    viewport.setAttribute('aria-label', model.length+' 个可选择目的地。拖动空白处移动星图，使用放大缩小按钮调整视野。');
    $map('#constellationSummary').textContent = ART.length + ' 个主题 · ' + model.filter(row=>!row.personal).reduce((total, row) => total + row.count, 0).toLocaleString('zh-CN') + ' 个可练习词' + (personal ? ' · 私人 '+personal.count+' 词' : '');
    $map('#constellationCenterLabel').textContent = (star?.chapter || '') + ' · 中央恒星';
    updateSelection();
    resize();
    synchronizeAnimation();
  }

  function resize() {
    if (!viewport || view !== 'map' || !viewport.clientWidth) return;
    dimensions = { width: viewport.clientWidth, height: viewport.clientHeight };
    fit = Math.min((dimensions.width - 36) / WORLD.width, (dimensions.height - 28) / WORLD.height);
    fit = Math.max(.22, fit);
    draw();
  }

  function positions(scale) {
    const tilt = -Math.PI / 18;
    const points = model.map(row => {
      if (row.star) return { row, x: 0, y: 0, anchorX: 0, anchorY: 0 };
      const ring = RINGS[row.ring];
      const angle = row.angle + elapsed * Math.PI * 2 / ring.period;
      const x = ring.rx * Math.cos(angle), y = ring.ry * Math.sin(angle);
      const rotatedX = x * Math.cos(tilt) - y * Math.sin(tilt);
      const rotatedY = x * Math.sin(tilt) + y * Math.cos(tilt);
      return { row, x: rotatedX, y: rotatedY, anchorX: rotatedX, anchorY: rotatedY };
    });
    // Small offsets preserve the orbital structure while keeping neighboring targets distinct.
    for (let step = 0; step < 5; step++) {
      for (let a = 0; a < points.length; a++) for (let b = a + 1; b < points.length; b++) {
        const first = points[a], second = points[b];
        const dx = second.x - first.x, dy = second.y - first.y;
        const distance = Math.hypot(dx, dy) || .01;
        const required = (Math.max(first.row.size, 48 / scale) + Math.max(second.row.size, 48 / scale)) / 2 + 9 / scale;
        if (distance >= required) continue;
        const displacement = (required - distance) * .52;
        const nx = dx / distance, ny = dy / distance;
        if (!first.row.star) { first.x -= nx * displacement; first.y -= ny * displacement; }
        if (!second.row.star) { second.x += nx * displacement; second.y += ny * displacement; }
      }
      points.forEach(point => {
        if (point.row.star) return;
        point.x = clamp(point.x, point.anchorX - 48, point.anchorX + 48);
        point.y = clamp(point.y, point.anchorY - 40, point.anchorY + 40);
      });
    }
    return points;
  }

  function overlap(first, second) {
    return Math.max(0, Math.min(first.x + first.w, second.x + second.w) - Math.max(first.x, second.x)) *
      Math.max(0, Math.min(first.y + first.h, second.y + second.h) - Math.max(first.y, second.y));
  }

  function draw() {
    if (!camera || !model.length || view !== 'map') return;
    const scale = fit * zoom;
    const center = { x: dimensions.width / 2 + pan.x, y: dimensions.height / 2 + pan.y };
    camera.style.transform = 'translate(' + center.x + 'px,' + center.y + 'px) scale(' + scale + ')';
    const points = positions(scale);
    const obstacles = points.map(point => ({ id: point.row.id, x: center.x + point.x * scale - point.row.size * scale / 2 - 3, y: center.y + point.y * scale - point.row.size * scale / 2 - 3, w: point.row.size * scale + 6, h: point.row.size * scale + 6 }));
    const labels = new Map(), occupied = [];
    const priority = points.slice().sort((a, b) => Number(b.row.chapter === selected) - Number(a.row.chapter === selected) || Number(b.row.star) - Number(a.row.star) || b.y - a.y);
    priority.forEach(point => {
      const x = center.x + point.x * scale, y = center.y + point.y * scale;
      const radius = point.row.size * scale / 2 + 8;
      const w = Math.max(64, point.row.chapter.length * 11 + 18), h = point.row.star ? 37 : 24;
      const candidates = [
        { x: x - w / 2, y: y + radius }, { x: x - w / 2, y: y - radius - h },
        { x: x + radius, y: y - h / 2 }, { x: x - radius - w, y: y - h / 2 },
        { x: x + radius * .7, y: y + radius * .65 }, { x: x - radius * .7 - w, y: y + radius * .65 },
        { x: x + radius * .7, y: y - radius * .65 - h }, { x: x - radius * .7 - w, y: y - radius * .65 - h },
        { x: x - w / 2, y: y + radius + 27 }, { x: x - w / 2, y: y - radius - h - 27 }
      ];
      let best, bestScore = Infinity;
      candidates.forEach((candidate, index) => {
        const rect = { ...candidate, w, h };
        let score = index * 5;
        occupied.forEach(other => { score += overlap(rect, other) * 20; });
        obstacles.forEach(other => { if (other.id !== point.row.id) score += overlap(rect, other) * 6; });
        if (zoom <= 1.05) {
          score += Math.max(0, 12 - rect.x) * 200 + Math.max(0, rect.x + w - dimensions.width + 12) * 200;
          score += Math.max(0, 35 - rect.y) * 200 + Math.max(0, rect.y + h - dimensions.height + 30) * 200;
        }
        if (score < bestScore) { best = rect; bestScore = score; }
      });
      occupied.push(best);
      labels.set(point.row.id, { x: (best.x - x) / scale, y: (best.y - y) / scale, w: w / scale, h: h / scale });
    });
    points.forEach((point, index) => {
      const item = nodeViews[index], row = point.row;
      const hit = Math.max(row.size, 48 / scale);
      item.element.style.width = hit + 'px';
      item.element.style.height = hit + 'px';
      item.element.style.transform = 'translate(' + (point.x - hit / 2) + 'px,' + (point.y - hit / 2) + 'px)';
      item.element.style.zIndex = row.chapter === selected ? 2000 : String(600 + Math.round(point.y));
      item.object.style.width = item.object.style.height = row.size + 'px';
      const angle = row.ring >= 0 ? row.angle + elapsed * Math.PI * 2 / RINGS[row.ring].period : 0;
      item.object.querySelector('img').style.rotate = (row.kind === 'ship' || row.kind === 'comet' ? Math.sin(angle) * 9 : 0) + 'deg';
      item.progress.style.width = item.progress.style.height = row.size + 13 / scale + 'px';
      const label = labels.get(row.id);
      item.label.style.width = label.w + 'px';
      item.label.style.height = label.h + 'px';
      item.label.style.fontSize = 11 / scale + 'px';
      item.label.style.padding = 3 / scale + 'px ' + 6 / scale + 'px';
      item.label.style.borderRadius = 7 / scale + 'px';
      item.label.style.transform = 'translate(' + label.x + 'px,' + label.y + 'px)';
      item.label.querySelector('small')?.style.setProperty('font-size', 8 / scale + 'px');
    });
    $map('#starMapZoomValue').textContent = Math.round(zoom * 100) + '%';
    $map('#starMapZoomOut').disabled = zoom <= .66;
    $map('#starMapZoomIn').disabled = zoom >= 2.79;
  }

  function canAnimate() {
    return view === 'map' && visible && !document.hidden && document.body.dataset.activeView !== 'practice' &&
      $map('#view-home')?.classList.contains('active') && document.body.dataset.motion !== 'off' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !keyboardFocus && !manualPause;
  }

  function animate(timestamp) {
    frame = null;
    if (!canAnimate()) { lastFrame = null; return; }
    if (lastFrame === null) lastFrame = timestamp;
    const delta = timestamp - lastFrame;
    if (delta >= 1000 / 30) { elapsed += Math.min(delta, 100) / 1000; lastFrame = timestamp; draw(); }
    frame = requestAnimationFrame(animate);
  }

  function synchronizeAnimation() {
    if (!root) return;
    const globalOff = document.body.dataset.motion === 'off' || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const paused = !canAnimate();
    const status = globalOff ? '静态浏览 · 已跟随动效设置' : manualPause ? '已手动暂停 · 点击选择主题' : keyboardFocus ? '键盘选择中 · 已暂停公转' : '缓慢公转 · 悬停时继续';
    const label = $map('#constellationMotionStatus');
    if (label.textContent !== status) label.textContent = status;
    const button = $map('#starMapPlayBtn');
    button.textContent = manualPause || globalOff ? '▶' : 'Ⅱ';
    button.disabled = globalOff;
    button.title = globalOff ? '全局动效已关闭' : manualPause ? '继续公转' : '暂停公转';
    button.setAttribute('aria-label', button.title);
    root.dataset.paused = String(paused);
    if (paused && frame !== null) { cancelAnimationFrame(frame); frame = null; lastFrame = null; }
    if (!paused && frame === null) { lastFrame = null; frame = requestAnimationFrame(animate); }
  }

  function selectTopic(chapter, scroll = false) {
    if (!model.some(row => row.chapter === chapter)) return;
    selected = chapter;
    nodeViews.forEach(item => {
      const active = item.row.chapter === selected;
      item.element.classList.toggle('selected', active);
      item.element.setAttribute('aria-pressed', String(active));
    });
    decorateList();
    updateSelection();
    draw();
    if (scroll && !expanded) $map('#constellationSelection').scrollIntoView({ block: 'nearest', behavior: document.body.dataset.motion === 'off' ? 'instant' : 'smooth' });
  }

  function updateSelection() {
    nodeViews.forEach(item => {
      const active = item.row.chapter === selected;
      item.element.classList.toggle('selected', active);
      item.element.setAttribute('aria-pressed', String(active));
    });
    const row = model.find(item => item.chapter === selected);
    $map('#constellationEmpty').hidden = !!row;
    $map('#constellationSelectedInfo').hidden = !row;
    $map('#constellationStart').disabled = !row || !row.count;
    $map('#constellationStart').textContent = row?.personal && !row.ready ? '补充我的词库释义 ↗' : '开始练习 ↗';
    if (!row) return;
    $map('#selectedTopicImage').src = row.src;
    $map('#selectedTopicKind').textContent = (row.star ? '中央恒星 · ' : '第 ' + (row.ring + 1) + ' 轨道 · ') + row.title;
    $map('#selectedTopicName').textContent = row.chapter;
    $map('#selectedTopicCounts').textContent = row.personal ? row.count+' 个私人词条 · 可练习 '+row.ready+' 个 · 已掌握 '+row.done+' 个' : row.count + ' 个可练习词 · 已掌握 ' + row.done + ' 个';
    $map('#selectedTopicPercent').textContent = row.percent + '%';
    $map('#selectedTopicProgress').style.width = row.percent + '%';
  }

  function launchTopic() {
    const row = model.find(item => item.chapter === selected);
    if (!row?.count) return;
    if (expanded) setExpanded(false);
    if (row.personal) {
      if (row.ready) window.WordOrbitMyWords.openPractice();
      else showView('mywords');
      return;
    }
    setup = { ...setup, type: 'mixed', count: 20, chapter: row.chapter, source: 'all', order: 'smart' };
    openSetup('mixed');
    $map('#chapterSelect').value = row.chapter;
    $map('#sourceSelect').value = 'all';
    document.querySelectorAll('#orderChoices .choice').forEach(button => button.classList.toggle('active', button.dataset.order === 'smart'));
  }

  function applyView() {
    if (!root) return;
    viewport.hidden = view !== 'map';
    $map('#chapterGrid').hidden = view !== 'list';
    root.dataset.topicView = view;
    ['map', 'list'].forEach(mode => {
      const button = $map(mode === 'map' ? '#starMapViewBtn' : '#starListViewBtn');
      button.classList.toggle('active', view === mode);
      button.setAttribute('aria-pressed', String(view === mode));
    });
    $map('.constellation-controls').hidden = view !== 'map';
    resize();
    synchronizeAnimation();
  }

  function setView(next) {
    view = next;
    state.settings.constellationView = view;
    save();
    applyView();
  }

  function setZoom(value, focalX = dimensions.width / 2, focalY = dimensions.height / 2) {
    const next = clamp(value, .65, 2.8), ratio = next / zoom;
    pan.x = focalX - dimensions.width / 2 - (focalX - dimensions.width / 2 - pan.x) * ratio;
    pan.y = focalY - dimensions.height / 2 - (focalY - dimensions.height / 2 - pan.y) * ratio;
    zoom = next;
    draw();
  }

  function resetCamera() { zoom = 1; pan = { x: 0, y: 0 }; draw(); }

  function setExpanded(value) {
    if (expanded === value) return;
    expanded = value;
    root.classList.toggle('is-expanded', expanded);
    $map('#starMapExpand').setAttribute('aria-expanded', String(expanded));
    $map('#starMapExpand').textContent = expanded ? '⤡' : '⤢';
    $map('#starMapExpand').title = expanded ? '收起星图（Esc）' : '展开星图';
    $map('#starMapExpand').setAttribute('aria-label', expanded ? '收起星图' : '展开星图');
    if (expanded) {
      savedCamera = { zoom, pan: { ...pan } };
      previousOverflow = document.body.style.overflow;
      returnFocus = document.activeElement;
      root.setAttribute('role', 'dialog');
      root.setAttribute('aria-modal', 'true');
      document.body.style.overflow = 'hidden';
      zoom = 1; pan = { x: 0, y: 0 };
      viewport.focus({ preventScroll: true });
    } else {
      root.removeAttribute('role'); root.removeAttribute('aria-modal');
      document.body.style.overflow = previousOverflow;
      if (savedCamera) { zoom = savedCamera.zoom; pan = savedCamera.pan; }
      returnFocus?.focus({ preventScroll: true });
    }
    resize();
  }

  window.WordOrbitConstellation = {
    render,
    select: selectTopic,
    snapshot: () => ({ selected, view, expanded, zoom, elapsed, paused: !canAnimate(), nodes: model.map(row => ({ chapter: row.chapter, count: row.count, done: row.done, size: row.size, star: row.star, ring: row.ring, src: row.src, personal:!!row.personal, ready:row.ready })) })
  };
  document.addEventListener('DOMContentLoaded', render);
})();
