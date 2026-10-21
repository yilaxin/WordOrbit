/* Run with Playwright available in NODE_PATH. Uses a fresh, disposable browser profile. */
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');
const { pathToFileURL } = require('node:url');

(async () => {
  const root = path.resolve(__dirname, '..');
  const output = path.join(root, '.build');
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true });
  const context = await browser.newContext({ viewport: { width: 1320, height: 1000 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  const url = pathToFileURL(path.join(root, 'src/VocabDesk/Website/index.html')).href + '?desktop=1';
  await page.goto(url);
  await page.waitForFunction(() => window.WordOrbitConstellation?.snapshot().nodes.length === 22);
  await page.locator('#topicExplorer').scrollIntoViewIfNeeded();
  await page.waitForFunction(() => [...document.querySelectorAll('.celestial-object img')].every(i => i.complete && i.naturalWidth > 0));
  const initial = await page.evaluate(() => WordOrbitConstellation.snapshot());
  assert.equal(initial.nodes.reduce((sum, n) => sum + n.count, 0), 4249);
  assert.equal(initial.nodes.find(n => n.star).chapter, '身心健康');
  assert.equal(initial.nodes.find(n => n.star).count, Math.max(...initial.nodes.map(n => n.count)));
  assert.equal(await page.locator('.celestial-body.is-star .stellar-theme-mark img').count(), 1);
  assert.deepEqual([0, 1, 2, 3].map(ring => initial.nodes.filter(n => n.ring === ring).length), [3, 5, 6, 7]);
  const orbiting = initial.nodes.filter(n => !n.star);
  const centralStar = initial.nodes.find(n => n.star);
  assert.equal(Math.min(...orbiting.map(n => n.size)), 40);
  assert.ok(orbiting.every(n => n.size <= 72));
  assert.equal(centralStar.size, 174);
  assert.ok(centralStar.size >= 2 * Math.max(...orbiting.map(n => n.size)), 'Central star is clearly larger than every orbiting body');
  const rankedBodies = orbiting.slice().sort((a,b) => a.count - b.count);
  assert.ok(rankedBodies.every((n,i) => i === 0 || n.size >= rankedBodies[i-1].size), 'Word count still controls relative planet sizes');
  assert.equal(new Set(initial.nodes.map(n => n.src)).size, 22);
  assert.equal(await page.locator('#constellationStart').isDisabled(), true);
  assert.equal(await page.locator('.celestial-body').count(), 22);

  // Default view fits every name/body on desktop without conflicting labels.
  const geometry = await page.evaluate(() => {
    const viewport = document.querySelector('#constellationViewport').getBoundingClientRect();
    const boxes = [...document.querySelectorAll('.celestial-label')].map(e => ({ name: e.innerText, r: e.getBoundingClientRect().toJSON() }));
    const overlap = (a, b) => Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left)) * Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
    return { outside: boxes.filter(b => b.r.left < viewport.left || b.r.right > viewport.right || b.r.top < viewport.top || b.r.bottom > viewport.bottom), conflicts: boxes.flatMap((a, i) => boxes.slice(i + 1).filter(b => overlap(a.r, b.r) > 1).map(b => [a.name, b.name])), targets: [...document.querySelectorAll('.celestial-body')].map(e => e.getBoundingClientRect().width) };
  });
  assert.deepEqual(geometry.outside, []);
  assert.deepEqual(geometry.conflicts, []);
  assert.ok(geometry.targets.every(w => w >= 47.9));

  await page.locator('.celestial-body[data-topic="自然地理"]').click();
  assert.equal(await page.locator('#selectedTopicName').textContent(), '自然地理');
  assert.match(await page.locator('#selectedTopicCounts').textContent(), /209 个可练习词/);
  assert.equal(await page.locator('.celestial-body.selected').count(), 1);
  await page.locator('#topicExplorer').screenshot({ path: path.join(output, 'constellation-dark.png') });
  await page.locator('#themeBtn').click();
  await page.locator('#topicExplorer').screenshot({ path: path.join(output, 'constellation-light.png') });
  await page.locator('#themeBtn').click();

  await page.locator('#starMapZoomIn').click();
  assert.equal(await page.locator('#starMapZoomValue').textContent(), '120%');
  await page.locator('#constellationViewport').focus();
  const beforePan = await page.locator('#constellationCamera').getAttribute('style');
  await page.keyboard.press('ArrowLeft');
  assert.notEqual(await page.locator('#constellationCamera').getAttribute('style'), beforePan);
  await page.keyboard.press('0');
  assert.equal(await page.locator('#starMapZoomValue').textContent(), '100%');
  await page.locator('#starMapExpand').click();
  assert.equal(await page.locator('#topicExplorer').getAttribute('aria-modal'), 'true');
  await page.locator('#topicExplorer').screenshot({ path: path.join(output, 'constellation-expanded.png') });
  await page.locator('#constellationStart').focus();
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement.id), 'starMapViewBtn', 'Modal traps focus');
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#topicExplorer').getAttribute('aria-modal'), null);
  assert.equal(await page.evaluate(() => document.body.style.overflow), '');

  await page.locator('#starListViewBtn').click();
  assert.equal(await page.locator('#constellationViewport').isVisible(), false);
  assert.equal(await page.locator('#chapterGrid').isVisible(), true);
  await page.locator('.chapter-card[data-chapter="时间日期"]').click();
  assert.equal(await page.locator('#selectedTopicName').textContent(), '时间日期');
  assert.equal(await page.locator('#view-home').evaluate(e => e.classList.contains('active')), true, 'Selection does not accidentally navigate');
  await page.reload();
  assert.equal(await page.locator('#chapterGrid').isVisible(), true, 'List preference survives reload');
  await page.locator('#starMapViewBtn').click();

  // A completed topic must still be available for intentional topic practice.
  await page.evaluate(() => {
    window.constellationTestBackup = { words: state.words.slice(), records: JSON.parse(JSON.stringify(state.records)), setup: { ...setup } };
    state.words.filter(w => w.chapter === '自然地理').forEach(w => { state.records[w.id] = { ...recordFor(w.id), level: 5, seen: 9, due: new Date(Date.now() + 864000000).toISOString() }; });
    qRenderVerifiedChapterGrid();
    WordOrbitConstellation.select('自然地理');
  });
  assert.match(await page.locator('#selectedTopicCounts').textContent(), /已掌握 209 个/);
  assert.equal(await page.evaluate(() => state.words.some(w => w.chapter === '自然地理' && qVerified(w) && isDue(w))), false, 'Completed-topic fixture has no due words');
  assert.equal(await page.locator('.celestial-body.selected').getAttribute('data-topic'), '自然地理');
  await page.evaluate(() => { setup.type = 'whole'; setup.count = 100; setup.chapter = 'all'; setup.order = 'random'; });
  await page.locator('#constellationStart').click();
  assert.deepEqual(await page.evaluate(() => ({ ...setup })), { type: 'mixed', count: 20, chapter: '自然地理', source: 'all', order: 'smart' });
  await page.locator('#launchPracticeBtn').click();
  const round = await page.evaluate(() => ({ type: session.type, count: session.queue.length, topics: [...new Set(session.queue.map(i => state.words.find(w => w.id === i.wordId).chapter))], verified: session.queue.every(i => qVerified(state.words.find(w => w.id === i.wordId))) }));
  assert.deepEqual(round, { type: 'mixed', count: 20, topics: ['自然地理'], verified: true });
  await page.locator('#exitPractice').click();

  // Changing eligible catalog counts recalculates the star, not merely its label.
  const changed = await page.evaluate(() => {
    let removed = 0;
    state.words = state.words.filter(w => !(w.chapter === '身心健康' && qVerified(w) && removed++ < 100));
    qRenderVerifiedChapterGrid();
    return WordOrbitConstellation.snapshot();
  });
  assert.equal(changed.nodes.find(n => n.star).chapter, '学校教育');
  assert.equal(changed.nodes.find(n => n.star).count, Math.max(...changed.nodes.map(n => n.count)));
  await page.evaluate(() => { state.words = window.constellationTestBackup.words; state.records = window.constellationTestBackup.records; setup = window.constellationTestBackup.setup; state.lastSession = null; session = null; save(); renderHome(); });
  assert.equal(await page.evaluate(() => WordOrbitConstellation.snapshot().nodes.find(n => n.star).chapter), '身心健康');

  // Hovering empty space or a topic keeps moving; explicit pause still freezes all bodies.
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.locator('#topicExplorer').scrollIntoViewIfNeeded();
  await page.evaluate(() => { document.body.dataset.motion = 'on'; document.activeElement.blur(); });
  await page.mouse.move(5, 5);
  await page.waitForFunction(() => !WordOrbitConstellation.snapshot().paused);
  const tick = await page.evaluate(() => WordOrbitConstellation.snapshot().elapsed);
  await page.waitForFunction(value => WordOrbitConstellation.snapshot().elapsed > value + .2, tick);
  await page.locator('#constellationViewport').hover();
  const hoveredTick = await page.evaluate(() => WordOrbitConstellation.snapshot().elapsed);
  await page.waitForFunction(value => WordOrbitConstellation.snapshot().elapsed > value + .2, hoveredTick);
  await page.locator('.celestial-body[data-topic="自然地理"]').hover();
  const planetBefore = await page.locator('.celestial-body[data-topic="自然地理"]').getAttribute('style');
  const planetTick = await page.evaluate(() => WordOrbitConstellation.snapshot().elapsed);
  await page.waitForFunction(value => WordOrbitConstellation.snapshot().elapsed > value + .2, planetTick);
  assert.notEqual(await page.locator('.celestial-body[data-topic="自然地理"]').getAttribute('style'), planetBefore);
  assert.equal(await page.evaluate(() => WordOrbitConstellation.snapshot().paused), false);
  await page.locator('#starMapExpand').click();
  assert.equal(await page.evaluate(() => WordOrbitConstellation.snapshot().paused), false, 'Mouse expansion must not trigger keyboard pause');
  await page.locator('#starMapExpand').click();
  await page.mouse.move(5, 5);
  await page.locator('#starMapPlayBtn').click();
  assert.equal(await page.evaluate(() => WordOrbitConstellation.snapshot().paused), true);
  const stopped = await page.evaluate(() => WordOrbitConstellation.snapshot().elapsed);
  await page.locator('.celestial-body[data-topic="自然地理"]').hover();
  await page.waitForTimeout(250);
  assert.equal(await page.evaluate(() => WordOrbitConstellation.snapshot().elapsed), stopped);
  await page.locator('#starMapPlayBtn').click();
  await page.evaluate(() => { document.body.dataset.motion = 'off'; });
  await page.waitForFunction(() => document.querySelector('#starMapPlayBtn').disabled);
  assert.equal(await page.evaluate(() => WordOrbitConstellation.snapshot().paused), true);
  await page.evaluate(() => { document.body.dataset.motion = 'on'; });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.locator('#starMapReset').click();

  const overflows = [];
  for (const width of [1024, 820, 800, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.locator('#topicExplorer').scrollIntoViewIfNeeded();
    if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)) overflows.push(width);
    assert.equal(await page.locator('.celestial-body').count(), 22);
    await page.locator('#topicExplorer').screenshot({ path: path.join(output, 'constellation-' + width + '.png') });
  }
  assert.deepEqual(overflows, []);
  assert.deepEqual(errors, []);
  console.log(JSON.stringify({ ok: true, themes: 22, words: 4249, rings: [3, 5, 6, 7], checks: ['local artwork', 'live counts/mastery', 'adaptive star', 'label layout', 'topic practice', 'animation/pause', 'camera', 'modal focus', 'persistent list', 'responsive'] }, null, 2));
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
