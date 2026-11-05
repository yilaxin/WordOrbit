const test=require('node:test'),assert=require('node:assert/strict');
const pack=require('../src/VocabDesk/Website/sense-catalog.js');
const core=require('../src/VocabDesk/Website/sense-training-core.js');
const get=(w,id)=>{const s=pack.entries[w]?.senses.find(s=>s.id===id);assert.ok(s,w+':'+id);return s;};
const ref=(w,term)=>{const r=pack.entries[w]?.referenceOnly.find(r=>r.terms.includes(term));assert.ok(r,w+':'+term);return r;};

test('review restores common learner uses omitted by the first dictionary source',()=>{
  const cases=[['seed','deseed','去除'],['seed','ranked-player','种子选手'],['fringe','hair','刘海'],['fringe','additional-benefit','附加福利'],['literature','promotional-information','产品说明资料'],['functional','practical','实用的'],['lord','god','上帝'],['brood','children','孩子'],['broom','flowering-shrub','金雀花'],['hostel','residential-hostel','宿舍'],['sting','police-operation','诱捕行动'],['pot','money-pool','共同资金'],['pot','pocket-ball','击入'],['steward','event-attendant','秩序维护员'],['cannon','collide','撞上']];
  for(const[w,id,meaning]of cases){const s=get(w,id);assert.ok(s.label.includes(meaning),w);assert.match(s.source,/^https:\/\/(dictionary\.cambridge\.org|www\.collinsdictionary\.com)\//);}
  assert.equal(get('fringe','additional-benefit').construction,'fringe benefit(s)');
  assert.equal(get('seed','deseed').pos,'vt.');assert.equal(get('seed','ranked-player').pos,'n.');
});

test('each example demonstrates the declared part of speech, construction and regional sense',()=>{
  assert.equal(get('crack','sharp-sound').pos,'n.');
  assert.equal(get('vice','deputy').pos,'prefix');
  assert.equal(get('pledge','drinking-toast').pos,'vt.');
  assert.match(get('pledge','drinking-toast').example.en,/pledged .*health/);
  assert.equal(get('foremost','at-front').pos,'adv.');
  assert.match(get('foremost','at-front').example.en,/^First and foremost,/);
  assert.doesNotMatch(get('bench','court-or-sideline').label,/法官/);
  assert.match(get('bench','judiciary').label,/法官/);
  assert.doesNotMatch(get('surgery','clinic-room').label,/手术室/);
  assert.match(get('surgery','operating-room').label,/美.*手术室/);
  assert.match(get('surgery','consultation-hours').example.en,/surgery ends at eleven/);
  assert.equal(get('diabetes','insipidus').construction,'diabetes insipidus');
  assert.match(get('diabetes','insipidus').label,/仅限.*搭配/);
  assert.doesNotMatch(get('diabetes','insipidus').example.en,/diabetes mellitus/);
  assert.match(get('tram','tram-rails').label,/线路/);
  assert.doesNotMatch(get('tram','tram-rails').example.en,/tram rails/);
});

test('incorrect legacy translations remain traceable without becoming unrestricted correct answers',()=>{
  for(const[w,term]of [['rug','揭露某人'],['temple','鬓角'],['vice','老虎钳'],['diabetes','多尿症'],['steward','轮船'],['seed','催...发育'],['invader','侵入物'],['chancellor','大臣'],['recent','近代的']]){
    assert.ok(ref(w,term).reason);assert.ok(!pack.entries[w].senses.some(s=>s.aliases.includes(term)),w+':'+term);
  }
  assert.match(ref('rug','揭露某人').reason,/撤走支持/);
  assert.match(ref('melon','三聚二氰亚胺').source,/pubs\.acs\.org\/doi\//);
  assert.match(ref('melon','三聚二氰亚胺').reason,/不相同/);
  assert.equal(ref('pot','奖杯').decision,'restricted-verified');
  assert.match(ref('plantation','植树造林').reason,/名词.*种植/);
  assert.ok(!pack.entries.recent.senses.some(s=>s.id==='modern-near'));
  assert.ok(!pack.entries.substantial.senses.some(s=>s.id==='material-entity'));
  assert.ok(!pack.entries.pot.senses.some(s=>s.id==='potshot'));
});

test('bilingual examples preserve concrete actors, quantities and the intended sense',()=>{
  const p=get('plantation','crop-estate').example;assert.match(p.en,/Workers.*dawn/);assert.match(p.zh,/工人.*黎明.*采茶/);
  const b=get('burgeon','grow-rapidly').example;assert.match(b.en,/Online tutoring.*billion-dollar.*decade/);assert.match(b.zh,/在线辅导.*十年.*十亿美元/);assert.doesNotMatch(b.zh,/数十亿|这家小公司/);
  const s=get('synthesise','chemical-combine').example;assert.match(s.en,/energy from sunlight.*carbon dioxide and water/);assert.match(s.zh,/能量.*二氧化碳和水/);
  assert.match(get('microbe','microorganism').label,/微生物/);assert.ok(!get('microbe','microorganism').aliases.includes('细菌'));
  assert.doesNotMatch(get('shady','shaded').example.zh,/打开野餐。/);
  assert.doesNotMatch(get('cassette','film-cassette').example.en,/in the dark|negatives stay clear/);
  assert.doesNotMatch(get('optimal','best-possible').example.en,/Plants grow best.*25/);
  assert.match(get('traitor','betrayer-of-country').example.en,/In the novel/);
});

test('independently identified equivalents cannot become false distractors in either direction',()=>{
  // Human-reviewed pairs: these assertions are independent of generated candidate lists.
  const pairs=[['margin','surface-edge','fringe','periphery'],['outskirts','city-edge','fringe','periphery'],['rug','blanket-throw','blanket','bed-covering'],['steward','flight-attendant','hostess','air-hostess'],['brood','children','bunch','group-of-people'],['cannon','collide','crack','hit'],['hostel','refuge','shelter','place'],['vice','wickedness','rot','moral-corruption']];
  for(const[a,ai,b,bi]of pairs)assert.equal(core.overlaps(get(a,ai),get(b,bi)),true,a+'/'+b);
  const words=[...new Set(pairs.flatMap(([a,,b])=>[a,b]))].map(word=>({id:word,word}));
  const batch=core.build(words,pack.entries,{date:'2026-11-05',random:()=>0.37});
  let inspected=0;
  for(const q of batch.queue){
    for(const[a,ai,b,bi]of pairs){
      if(q.word!==a&&q.word!==b)continue;
      const correctWord=q.word,other=correctWord===a?b:a,otherSense=correctWord===a?bi:ai,targetSense=correctWord===a?ai:bi;
      if(q.originalKind==='reverse'&&!q.senseIds.includes(targetSense))continue;
      const wrong=q.options.filter(o=>!o.correct);inspected++;
      assert.ok(!wrong.some(o=>q.originalKind==='reverse'?o.text===other:o.id===other+':'+otherSense),q.id+':'+correctWord+'/'+other);
    }
  }
  assert.ok(inspected>100);
});
