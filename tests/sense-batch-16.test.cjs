const test = require('node:test'), assert = require('node:assert/strict'), fs = require('node:fs'), vm = require('node:vm'), path = require('node:path');
const site = path.join(__dirname, '../src/VocabDesk/Website');
const C = require('../src/VocabDesk/Website/sense-training-core.js');
const production = require('../src/VocabDesk/Website/sense-catalog.js');
const EXPECTED_BATCH_WORDS = 200;
const EXPECTED_BATCH_SENSES = 442;
const EXPECTED_TOTAL_WORDS = 3071;
const EXPECTED_TOTAL_SENSES = 6873;
const ALLOWED = /^https:\/\/(dictionary\.cambridge\.org|www\.collinsdictionary\.com|api\.dictionaryapi\.dev|www\.vocabulary\.com|www\.merriam-webster\.com|learn\.microsoft\.com|developer\.mozilla\.org|docs\.github\.com)\//;
const DECISIONS = new Set(['scope-excluded', 'restricted-verified', 'context-required', 'outside-scope-unresolved']);

// Exercise the actual shipped catalog and separately verify browser loading below.
const candidate = production;
const batch = Object.entries(candidate.entries).filter(([, e]) => e.batch === '16');
const batchSenses = batch.flatMap(([word, e]) => e.senses.map(s => ({ word, sense: s, batch: e })));
function random(seed) { return () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; }; }
function formsOf(word) {
  const w = word.toLowerCase(), set = new Set([w, w + 's', w + 'es', w + 'ed', w + 'ing', w + 'd']);
  if (w.endsWith('e')) { set.add(w.slice(0, -1) + 'ing'); set.add(w.slice(0, -1) + 'ed'); }
  if (w.endsWith('y')) { set.add(w.slice(0, -1) + 'ies'); set.add(w.slice(0, -1) + 'ied'); }
  const last = w.slice(-1);
  if (/[bdfglmnprt]/.test(last)) { set.add(w + last + 'ed'); set.add(w + last + 'ing'); }
  for (const f of { bite:['bit','bitten'],leap:['leapt'],feel:['felt'],kneel:['knelt'],overtake:['overtook','overtaken'],uphold:['upheld'],bear:['bore','born','borne'],bind:['bound'],swear:['swore','sworn'],withdraw:['withdrew','withdrawn'],shake:['shook','shaken'],sink:['sank','sunk'],strive:['strove','striven'],shrink:['shrank','shrunk'],mistake: ['mistook','mistaken'], draw: ['drew','drawn'], pay: ['paid'], throw: ['threw','thrown'], speed: ['sped'], steal: ['stole', 'stolen'], catch: ['caught'], split: ['split', 'splitting'], bend: ['bent'], drag: ['dragged', 'dragging'], grab: ['grabbed', 'grabbing'], string: ['strung'], wound: ['wounded'], shoot: ['shot'], strike: ['struck'], flee: ['fled'], weep: ['wept'] }[w] || []) set.add(f);
  return [...set];
}
function target(word, text) {
  return formsOf(word).some(f => new RegExp('\\b' + f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i').test(text));
}

test('batch 16 is registered in the actual lazy production and offline paths', () => {
  assert.equal(production.version, 18);
  assert.equal(Object.keys(production.entries).length, 3071);
  assert.match(fs.readFileSync(path.join(site, 'sense-study.js'), 'utf8'), /'09','10','11'/);
  assert.match(fs.readFileSync(path.join(site, 'service-worker.js'), 'utf8'), /'09','10','11'/);
  assert.doesNotMatch(fs.readFileSync(path.join(site, 'index.html'), 'utf8'), /src=["'][^"']*sense-(?:batch|catalog|training|completion)/);
  const ctx = {window: {}};vm.createContext(ctx);
  for(const n of ['03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18']) vm.runInContext(fs.readFileSync(path.join(site,'sense-batch-'+n+'.js'),'utf8'),ctx);
  for(const f of ['sense-completion-02.js','sense-catalog.js','sense-ready-index.js']) vm.runInContext(fs.readFileSync(path.join(site,f),'utf8'),ctx);
  assert.equal(JSON.stringify(ctx.window.WORDORBIT_SENSE_CATALOG),JSON.stringify(production));
  assert.equal(ctx.window.WordOrbitSenseIndex.words,3071);
  assert.equal(ctx.window.WordOrbitSenseIndex.senses,7823);
});

test('production catalog has 3,071 words and batch 16 adds 200 distinct words with original bilingual examples', () => {
  assert.equal(candidate.version, 18);
  assert.deepEqual([...candidate.batches], ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18']);
  assert.equal(Object.keys(candidate.entries).length, EXPECTED_TOTAL_WORDS);
  assert.equal(batch.length, EXPECTED_BATCH_WORDS);
  assert.equal(new Set(batch.map(([word]) => word)).size, EXPECTED_BATCH_WORDS);
  const historical = new Set();
  for (const [word, e] of Object.entries(production.entries).filter(([,e])=>e.batch<'16')) for (const s of e.senses) historical.add(s.example.en);
  assert.equal(historical.size, 6431);
  assert.equal(batchSenses.length, EXPECTED_BATCH_SENSES);
  const allSentences = new Set(historical);
  for (const [word, e] of batch) {
    assert.equal(e.reviewDate, '2026-11-11');
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

test('four 50-word rounds cover all batch 16 goals from the full 3,071-word pool without duplicates or fallbacks', () => {
  const words = Object.keys(candidate.entries).map(word => ({ id: 'pool-' + word, word }));
  const entryById = new Map(words.map(w => [w.id, candidate.entries[w.word]]));
  const before = JSON.stringify(words);
  const completed = words.filter(w => candidate.entries[w.word].batch !== '16').map(w => w.id);
  const chosen = [];
  let goals = 0, fallbacks = 0;
  for (let n = 0; n < 4; n++) {
    const b = C.build(words, candidate.entries, { date: '2026-11-11', completedIds: [...completed, ...chosen], random: random(1101 + n) });
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

test('batch 16 module registers through the shared add() contract and loads through the production add() contract', () => {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(site, 'sense-batch-16.js'), 'utf8'), ctx, { filename: 'sense-batch-16.js' });
  assert.equal(typeof ctx.window.WordOrbitSenseBatch16, 'function');
  const rows = JSON.parse(JSON.stringify(batchSenses[0].sense));
  assert.ok(rows.id && rows.label);
});




test('batch 16 distinguishes polysemy, scope decisions and near equivalents',()=>{
 const e=w=>production.entries[w],s=(w,id)=>e(w).senses.find(s=>s.id===id);
 for(const[w,ids]of [['screen',['display','partition','sieve','show','check','shield','filter']],['pitch',['substance','sound','field','presentation','intensity','throw','erect','propose','roll','slope','site']],['order',['command','purchase','sequence','calm','group','biology','command-verb','buy','arrange']],['default',['breach','preset','no-show','fail','use-preset']],['minute',['time','instant','record','record-verb']]])for(const id of ids)assert.ok(s(w,id),w+':'+id);
 assert.equal(s('civilisation','society').source,'https://www.merriam-webster.com/dictionary/civilization');assert.equal(s('bureaucratism','red-tape').source,'https://www.merriam-webster.com/dictionary/bureaucracy');
 assert.equal(s('minute','record').pos,'n.');assert.equal(s('minute','record-verb').pos,'v.');assert.equal(s('cotton','understand').construction,'cotton on to');
 for(const[w,term]of [['minute','微小的'],['found','发现'],['remote','远程访问实用程序'],['longitude','经线'],['microphone','扩音器'],['screen','拍电影'],['hierarchy','新闻组']])assert.equal(e(w).referenceOnly.find(r=>r.terms.includes(term)).decision,'scope-excluded');
 for(const[a,ai,b,bi]of [['blossom','flower','flower','bloom'],['contaminate','pollute','pollute','environment'],['chef','cook','cook','person'],['sample','specimen','specimen','sample'],['mock','ridicule','tease','mock'],['finance','fund','fund','finance'],['urge','impulse','impulse','urge']])assert.equal(C.overlaps(s(a,ai),s(b,bi)),true,a+'/'+b);
 assert.equal(C.overlaps(s('inductive','reasoning'),s('inductive','electrical')),false);assert.equal(C.overlaps(s('order','biology'),s('order','command')),false);
});

test('learned-selection audit requires positive history and preserves input',()=>{
 const {auditLearnedSelection}=require('../scripts/Audit-LearnedSenseBatchSelection.cjs');
 const pub=[{id:'public-alpha',word:'alpha',formal:true}],entries={alpha:{batch:'16'}};
 const progress={exportedAt:'2026-01-01T00:00:00Z',words:[{id:'legacy-alpha',word:'Alpha'}],records:{},attempts:[]};
 assert.equal(auditLearnedSelection(progress,pub,entries,'16',1).passed,false);
 progress.records['legacy-alpha']={seen:1};const before=JSON.stringify(progress),r=auditLearnedSelection(progress,pub,entries,'16',1);assert.equal(r.passed,true);assert.deepEqual(r.learnedMatches,['alpha']);assert.deepEqual(r.notPreviouslySeen,[]);assert.equal(JSON.stringify(progress),before);
 progress.records={};progress.attempts=[{wordId:'public-alpha'}];assert.equal(auditLearnedSelection(progress,pub,entries,'16',1).passed,true);
 progress.attempts=[];progress.senseStudy={completed:{'legacy-alpha':{date:'2026-01-01'}}};assert.equal(auditLearnedSelection(progress,pub,entries,'16',1).passed,true);
 progress.words=[{id:'other',word:'other'}];assert.equal(auditLearnedSelection(progress,pub,entries,'16',1).passed,false);
});
