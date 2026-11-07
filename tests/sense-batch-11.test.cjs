const test = require('node:test'), assert = require('node:assert/strict'), fs = require('node:fs'), vm = require('node:vm'), path = require('node:path');
const site = path.join(__dirname, '../src/VocabDesk/Website');
const C = require('../src/VocabDesk/Website/sense-training-core.js');
const production = require('../src/VocabDesk/Website/sense-catalog.js');
const EXPECTED_BATCH_WORDS = 200;
const EXPECTED_BATCH_SENSES = 594;
const EXPECTED_TOTAL_WORDS = 1730;
const EXPECTED_TOTAL_SENSES = 4382;
const ALLOWED = /^https:\/\/(api\.dictionaryapi\.dev|www\.vocabulary\.com|www\.merriam-webster\.com|learn\.microsoft\.com|developer\.mozilla\.org|docs\.github\.com)\//;
const DECISIONS = new Set(['scope-excluded', 'restricted-verified', 'context-required', 'outside-scope-unresolved']);

/* Compose the batch 11 candidate catalog in an isolated VM by patching the catalog
 * source string. The production catalog file itself stays at version 10. */
function candidateCatalog() {
  const window = {};
  const ctx = { window };
  vm.createContext(ctx);
  for (const name of ['03', '04', '05', '06', '07', '08', '09', '10', '11'])
    vm.runInContext(fs.readFileSync(path.join(site, 'sense-batch-' + name + '.js'), 'utf8'), ctx, { filename: 'sense-batch-' + name + '.js' });
  vm.runInContext(fs.readFileSync(path.join(site, 'sense-completion-02.js'), 'utf8'), ctx, { filename: 'sense-completion-02.js' });
  let src = fs.readFileSync(path.join(site, 'sense-catalog.js'), 'utf8');
  const anchor = '  // Unresolved OLD fragments remain visible in the audit; they are not certified';
  assert.ok(src.includes(anchor), 'catalog patch anchor must exist');
  src = src.replace(anchor, "  editorialBatch='11';\n  const registerBatch11=scope.WordOrbitSenseBatch11;\n  if(typeof registerBatch11!=='function')throw Error('Missing editorial batch 11');\n  registerBatch11(add);\n" + anchor);
  src = src.replace("version:10,batches:['01','02','03','04','05','06','07','08','09','10'],reviewDate:'2026-11-06'", "version:11,batches:['01','02','03','04','05','06','07','08','09','10','11'],reviewDate:'2026-11-07'");
  assert.match(src, /version:11/);
  vm.runInContext(src, ctx, { filename: 'sense-catalog.candidate.js' });
  return window.WORDORBIT_SENSE_CATALOG;
}
const candidate = candidateCatalog();
const batch = Object.entries(candidate.entries).filter(([, e]) => e.batch === '11');
const batchSenses = batch.flatMap(([word, e]) => e.senses.map(s => ({ word, sense: s, batch: e })));
function random(seed) { return () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; }; }
function formsOf(word) {
  const w = word.toLowerCase(), set = new Set([w, w + 's', w + 'es', w + 'ed', w + 'ing', w + 'd']);
  if (w.endsWith('e')) { set.add(w.slice(0, -1) + 'ing'); set.add(w.slice(0, -1) + 'ed'); }
  if (w.endsWith('y')) { set.add(w.slice(0, -1) + 'ies'); set.add(w.slice(0, -1) + 'ied'); }
  const last = w.slice(-1);
  if (/[bdfglmnprt]/.test(last)) { set.add(w + last + 'ed'); set.add(w + last + 'ing'); }
  for (const f of { steal: ['stole', 'stolen'], catch: ['caught'], split: ['split', 'splitting'], bend: ['bent'], drag: ['dragged', 'dragging'], grab: ['grabbed', 'grabbing'], string: ['strung'], wound: ['wounded'], shoot: ['shot'], strike: ['struck'], flee: ['fled'], weep: ['wept'] }[w] || []) set.add(f);
  return [...set];
}
function target(word, text) {
  return formsOf(word).some(f => new RegExp('\\b' + f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i').test(text));
}

test('production catalog remains batch 10: batch 11 lives only in the isolated candidate catalog', () => {
  assert.equal(production.version, 10);
  assert.deepEqual(production.batches, ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']);
  assert.equal(Object.keys(production.entries).length, 1530);
  assert.equal(production.entries.sense11, undefined);
  const indexSource = fs.readFileSync(path.join(site, 'index.html'), 'utf8');
  assert.doesNotMatch(indexSource, /sense-batch-11/);
  assert.doesNotMatch(fs.readFileSync(path.join(site, 'sense-catalog.js'), 'utf8'), /registerBatch11|sense-batch-11/);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(site, 'sense-ready-index.js'), 'utf8'), ctx, { filename: 'sense-ready-index.js' });
  assert.equal(ctx.window.WordOrbitSenseIndex.words, 1530);
  assert.equal(ctx.window.WordOrbitSenseIndex.senses, 3788);
});

test('candidate catalog has 1,730 words and batch 11 adds 200 distinct words with original bilingual examples', () => {
  assert.equal(candidate.version, 11);
  assert.deepEqual([...candidate.batches], ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11']);
  assert.equal(Object.keys(candidate.entries).length, EXPECTED_TOTAL_WORDS);
  assert.equal(batch.length, EXPECTED_BATCH_WORDS);
  assert.equal(new Set(batch.map(([word]) => word)).size, EXPECTED_BATCH_WORDS);
  const historical = new Set();
  for (const [word, e] of Object.entries(production.entries)) for (const s of e.senses) historical.add(s.example.en);
  assert.equal(historical.size, 3788);
  assert.equal(batchSenses.length, EXPECTED_BATCH_SENSES);
  const allSentences = new Set(historical);
  for (const [word, e] of batch) {
    assert.equal(e.reviewDate, '2026-11-07');
    assert.equal(C.validateEntry(e), true, word);
    assert.equal(e.complete, true, word);
    assert.equal(e.unresolvedReferences.length, 0, word);
    assert.equal(new Set(e.senses.map(s => s.id)).size, e.senses.length);
    for (const s of e.senses) {
      assert.match(s.source, ALLOWED, word + ':' + s.id);
      assert.ok(s.aliases.length && s.concepts.length && s.pos, word + ':' + s.id);
      assert.match(s.label, /[\u4e00-\u9fff]/, word + ':' + s.id + ' label must be Chinese');
      for (const a of s.aliases) assert.match(a, /[\u4e00-\u9fff]/, word + ':' + s.id + ' alias must be Chinese');
      assert.match(s.example.zh, /[\u4e00-\u9fff]/);
      assert.equal(s.example.reviewed, true);
      assert.equal(s.example.origin, 'original-wordorbit');
      assert.ok(target(word, s.example.en), word + ':' + s.example.en);
      assert.ok(!allSentences.has(s.example.en), 'duplicate example: ' + s.example.en);
      allSentences.add(s.example.en);
      assert.doesNotMatch(s.example.en, /role of .* modern society|study explored .*changing world|is an important word/i);
      if (s.construction !== null) assert.equal(typeof s.construction, 'string');
    }
    for (const r of e.referenceOnly) {
      assert.ok(r.terms.length && r.reason && r.source, word);
      assert.ok(DECISIONS.has(r.decision), word + ':' + r.decision);
      assert.equal(e.sources.includes(r.source), true, word + ' reference source must be listed');
    }
  }
  assert.equal(allSentences.size, EXPECTED_TOTAL_SENSES);
});

test('four 50-word rounds cover all batch 11 goals from the full 1,730-word pool without duplicates or fallbacks', () => {
  const words = Object.keys(candidate.entries).map(word => ({ id: 'pool-' + word, word }));
  const entryById = new Map(words.map(w => [w.id, candidate.entries[w.word]]));
  const before = JSON.stringify(words);
  const completed = words.filter(w => candidate.entries[w.word].batch !== '11').map(w => w.id);
  const chosen = [];
  let goals = 0, fallbacks = 0;
  for (let n = 0; n < 4; n++) {
    const b = C.build(words, candidate.entries, { date: '2026-11-07', completedIds: [...completed, ...chosen], random: random(1101 + n) });
    assert.equal(b.targetIds.length, 50);
    assert.ok(b.targetIds.every(id => !chosen.includes(id)));
    chosen.push(...b.targetIds);
    goals += b.goals.length;
    assert.equal(b.queue.filter(q => q.stage === 0).length, b.goals.length);
    for (const q of b.queue) {
      fallbacks += Number(q.kind === 'recall');
      assert.equal(new Set(q.options.map(o => o.text)).size, q.options.length);
      for (const o of q.options.filter(o => !o.correct)) {
        const [id, senseId] = o.id.split(':');
        const other = entryById.get(id);
        assert.ok(other);
        const targetSenses = q.originalKind === 'reverse' ? entryById.get(q.wordId).senses.filter(s => q.senseIds.includes(s.id)) : entryById.get(q.wordId).senses;
        const otherSenses = q.originalKind === 'reverse' ? other.senses : [other.senses.find(s => s.id === senseId)];
        assert.ok(!targetSenses.some(t => otherSenses.some(c => C.overlaps(t, c))), q.word + ' / ' + o.text);
      }
    }
    for (let i = 0; i < b.queue.length; i++) C.grade(b, i, b.queue[i].expected, { selfRecall: true });
    assert.equal(C.progress(b).completed, true);
  }
  assert.equal(new Set(chosen).size, 200);
  assert.equal(goals, EXPECTED_BATCH_SENSES);
  assert.equal(fallbacks, 0, 'the full candidate pool must provide sufficient unambiguous distractors');
  assert.equal(JSON.stringify(words), before);
});

test('batch 11 module registers through the shared add() contract and stays out of the production UI path', () => {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(site, 'sense-batch-11.js'), 'utf8'), ctx, { filename: 'sense-batch-11.js' });
  assert.equal(typeof ctx.window.WordOrbitSenseBatch11, 'function');
  const rows = JSON.parse(JSON.stringify(batchSenses[0].sense));
  assert.ok(rows.id && rows.label);
});