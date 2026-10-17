const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '..', 'src', 'VocabDesk', 'Website', 'quality-overrides.js'), 'utf8');

function practice(type, variant = undefined) {
  const words = [
    { id: '1', word: 'erupt', ipa: '/ɪˈrʌpt/', pos: 'v.', meaning: '喷发；爆发', chapter: '自然地理', source_page: '002', status: 'verified' },
    { id: '2', word: 'migrate', ipa: '/maɪˈɡreɪt/', pos: 'v.', meaning: '迁徙；移居', chapter: '动物保护', source_page: '031', status: 'verified' },
    { id: '3', word: 'innovate', ipa: '/ˈɪnəveɪt/', pos: 'v.', meaning: '创新；革新', chapter: '科技发明', source_page: '085', status: 'verified' },
    { id: '4', word: 'consume', ipa: '/kənˈsjuːm/', pos: 'v.', meaning: '消费；消耗', chapter: '社会经济', source_page: '197', status: 'verified' },
  ];
  const elements = new Map();
  const element = selector => {
    if (!elements.has(selector)) elements.set(selector, {
      innerHTML: '', textContent: '', disabled: false,
      classList: { add() {}, remove() {} },
    });
    return elements.get(selector);
  };
  const item = { wordId: '1', variant, status: 'pending', attempts: 0, selected: null, checked: false, options: null };
  const sandbox = {
    state: { words, favorites: [], records: {}, attempts: [], lastSession: null },
    session: { type, queue: [item], index: 0, answered: 0, correct: 0, started: Date.now() },
    setup: {}, window: { EXTERNAL_VOCAB: {}, EXAMPLE_SENTENCES: {} },
    document: { addEventListener() {} },
    localStorage: { getItem() { return null; }, setItem() {} },
    KEY: 'test-state', CHAPTERS: [],
    $: element, $$: () => [],
    renderHome() {}, renderLibrary() {}, renderStats() {}, statusMatch() { return true; },
    showView() {}, fillSelects() {}, makeQueue() { return []; },
    toast() {}, speak() {}, toggleFavorite() {}, mastered() { return false; }, isDue() { return false; },
  };
  sandbox.currentItem = () => sandbox.session.queue[sandbox.session.index];
  sandbox.currentWord = () => words.find(word => word.id === sandbox.currentItem().wordId);
  sandbox.recordFor = id => (sandbox.state.records[id] ||= { seen: 0, correct: 0, wrong: 0, level: 0 });
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: 'quality-overrides.js' });
  return { sandbox, element, item, words };
}

test('中文选英文：作答前隐藏音标，提交正确答案后显示', () => {
  const { sandbox, element, item, words } = practice('reverse');
  sandbox.renderQuestion();
  assert.equal(element('#questionContext').innerHTML.includes(words[0].ipa), false);
  assert.equal(element('#questionContext').innerHTML.includes(words[0].pos), false);
  item.selected = words[0].word;
  sandbox.checkAnswer();
  assert.equal(item.checked, true);
  assert.equal(element('#questionContext').innerHTML.includes(words[0].ipa), true);
  assert.equal(element('#questionContext').innerHTML.includes(words[0].pos), true);
});

test('中文选英文：提交错误答案后也显示音标', () => {
  const { sandbox, element, item, words } = practice('reverse');
  sandbox.renderQuestion();
  item.selected = words[1].word;
  sandbox.checkAnswer();
  assert.equal(item.status, 'wrong');
  assert.equal(element('#questionContext').innerHTML.includes(words[0].ipa), true);
});

test('整本遍历后半段的中文选英文题也遵守同一规则', () => {
  const { sandbox, element, item, words } = practice('whole', 1);
  sandbox.renderQuestion();
  assert.equal(element('#questionContext').innerHTML.includes(words[0].ipa), false);
  item.checked = true;
  sandbox.renderQuestion();
  assert.equal(element('#questionContext').innerHTML.includes(words[0].ipa), true);
});

test('英文选中文仍在作答前显示音标', () => {
  const { sandbox, element, words } = practice('single');
  sandbox.renderQuestion();
  assert.equal(element('#questionContext').innerHTML.includes(words[0].ipa), true);
});
