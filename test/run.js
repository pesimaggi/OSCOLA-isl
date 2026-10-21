// Renders the examples in items.js with citeproc-js (the engine Zotero uses)
// and compares them with the expected output from https://bokasafn.ru.is/oscola
//
// Usage: npm install && node run.js ../oscola-islenska.csl [--verbose]
const fs = require('fs');
const path = require('path');
const CSL = require('citeproc');
const cases = require('./items');

const stylePath = process.argv[2] || path.join(__dirname, '..', 'oscola-islenska.csl');
const verbose = process.argv.includes('--verbose');
const style = fs.readFileSync(stylePath, 'utf8');
const locale = fs.readFileSync(path.join(__dirname, 'locales-is-IS.xml'), 'utf8');

function makeEngine(items) {
  const sys = { retrieveLocale: () => locale, retrieveItem: (id) => items[id] };
  const engine = new CSL.Engine(sys, style);
  engine.setOutputFormat('text');
  return engine;
}

let failures = 0;
function check(label, got, want) {
  const ok = got === want;
  if (!ok) failures++;
  if (!ok || verbose) {
    console.log(`${ok ? 'OK  ' : 'DIFF'} ${label}\n     got:  ${got}${ok ? '' : `\n     want: ${want}`}`);
  }
}

// 1. Each example as a first footnote and as a bibliography entry
const items = {};
for (const c of cases) items[c.id] = Object.assign({ id: c.id }, c.item);
for (const c of cases) {
  const engine = makeEngine(items);
  const cite = { id: c.id };
  if (c.locator) { cite.locator = c.locator; cite.label = c.label || 'page'; }
  if (c.suffix) cite.suffix = c.suffix;
  const res = engine.processCitationCluster({ citationItems: [cite], properties: { noteIndex: 1 } }, [], []);
  check(`${c.id} (neðanmálsgrein)`, res[1][0][1].trim(), c.note);
  engine.updateItems([c.id]);
  check(`${c.id} (heimildaskrá)`, engine.makeBibliography()[1][0].trim(), c.bib);
}

// 2. Footnote sequence: sama heimild, (n. X) cross-references, primary sources repeated in full
const sequence = [
  [[{ id: 'book-is', locator: '45' }], 'Páll Sigurðsson, Samningaréttur: Yfirlit um meginreglur íslensks samningsréttar (Orator 1987) 45.'],
  [[{ id: 'book-is', locator: '45' }], 'Sama heimild.'],
  [[{ id: 'book-is', locator: '50' }], 'Sama heimild 50.'],
  [[{ id: 'book-en', locator: '227' }], 'Paul Craig og Gráinne De Búrca, EU Law: Text, Cases, and Materials (4. útg., Oxford University Press 2008) 227.'],
  [[{ id: 'statute', suffix: ', 8. gr.' }], 'Almenn hegningarlög nr. 19/1940, 8. gr.'],
  [[{ id: 'book-is', locator: '60' }], 'Páll Sigurðsson (n. 1) 60.'],
  [[{ id: 'book-en', locator: '230' }], 'Craig og De Búrca (n. 4) 230.'],
  [[{ id: 'statute', suffix: ', 9. gr.' }], 'Almenn hegningarlög nr. 19/1940, 9. gr.'],
  [[{ id: 'webpage', locator: '2', label: 'paragraph' }], 'Heilbrigðisráðuneytið, „Covid-19: Breyttar reglur um takmarkanir á landamærunum 1. október“ (Stjórnarráð Íslands, 28. september 2021) mgr. 2 <https://www.stjornarradid.is/x> skoðað 28. september 2021.'],
  [[{ id: 'report-noauthor', locator: '9' }, { id: 'journal', locator: '31' }], '„Annual Report 2021“ (World Trade Organization 1996) 9; Margrét Einarsdóttir, „Forgangsáhrif réttilega innleiddra EES-reglna“ (2010) 7 Tímarit Lögréttu 25, 31.'],
  [[{ id: 'webpage', locator: '3', label: 'paragraph' }], 'Heilbrigðisráðuneytið (n. 9) mgr. 3.'],
  [[{ id: 'report-noauthor', locator: '12' }], '„Annual Report 2021“ (n. 10) 12.'],
];
const engine = makeEngine(items);
const previous = [];
sequence.forEach(([cites, want], i) => {
  const citation = { citationID: `c${i}`, citationItems: cites.map((x) => Object.assign({ label: 'page' }, x)), properties: { noteIndex: i + 1 } };
  const res = engine.processCitationCluster(citation, previous.slice(), []);
  previous.push([`c${i}`, i + 1]);
  check(`neðanmálsgrein ${i + 1}`, res[1].find((r) => r[2] === `c${i}`)[1].trim(), want);
});

// 3. Bibliography order: Icelandic alphabet, same author (——), co-authors after sole author
const N = (family, given) => ({ family, given });
const L = (literal) => ({ literal });
const bibItems = {
  h1: { type: 'book', author: [N('Hart', 'H. L. A.')], title: 'Law, Liberty and Morality', publisher: 'OUP', issued: { 'date-parts': [[1963]] } },
  h2: { type: 'article-journal', author: [N('Hart', 'H. L. A.')], title: 'Varieties of Responsibility', 'container-title': 'LQR', volume: '83', page: '346', issued: { 'date-parts': [[1967]] } },
  h4: { type: 'book', author: [N('Hart', 'H. L. A.'), N('Honoré', 'A. M.')], title: 'Causation in the Law', edition: '2', publisher: 'OUP', issued: { 'date-parts': [[1985]] } },
  r1: { type: 'book', author: [L('Ragnheiður Bragadóttir')], title: 'Kynferðisbrot', publisher: 'Lagastofnun Háskóla Íslands', issued: { 'date-parts': [[2006]] } },
  r2: { type: 'book', author: [L('Ragnheiður Bragadóttir')], title: 'Kynferðisbrot: Dómabók', publisher: 'Codex', issued: { 'date-parts': [[2009]] } },
  a1: { type: 'book', author: [L('Ármann Snævarr')], title: 'Almenn lögfræði', publisher: 'Orator', issued: { 'date-parts': [[1988]] } },
  a2: { type: 'book', author: [L('Aðalheiður Jóhannsdóttir')], title: 'Bók', publisher: 'X', issued: { 'date-parts': [[2000]] } },
  t1: { type: 'book', author: [L('Þorgeir Örlygsson')], title: 'Bók', publisher: 'X', issued: { 'date-parts': [[2000]] } },
  p1: { type: 'legal_case', title: 'Hrd. 20. desember 2019 í máli nr. 36/2019' },
  p2: { type: 'bill', title: 'Alþt. 2011-2012, A-deild, þskj. 82 – 78. mál' },
  p3: { type: 'legislation', title: 'Lög um 40 stunda vinnuviku nr. 88/1971' },
};
for (const [id, it] of Object.entries(bibItems)) it.id = id;
const bibEngine = makeEngine(bibItems);
bibEngine.updateItems(Object.keys(bibItems));
check('heimildaskrá (röðun)', bibEngine.makeBibliography()[1].map((s) => s.trim()).join('\n'), [
  'Aðalheiður Jóhannsdóttir, Bók (X 2000)',
  'Ármann Snævarr, Almenn lögfræði (Orator 1988)',
  'Hart HLA, Law, Liberty and Morality (OUP 1963)',
  '——, „Varieties of Responsibility“ (1967) 83 LQR 346',
  '—— og Honoré AM, Causation in the Law (2. útg., OUP 1985)',
  'Ragnheiður Bragadóttir, Kynferðisbrot (Lagastofnun Háskóla Íslands 2006)',
  '——, Kynferðisbrot: Dómabók (Codex 2009)',
  'Þorgeir Örlygsson, Bók (X 2000)',
  'Lög um 40 stunda vinnuviku nr. 88/1971',
  'Alþt. 2011-2012, A-deild, þskj. 82 – 78. mál',
  'Hrd. 20. desember 2019 í máli nr. 36/2019',
].join('\n'));

console.log(failures ? `\n${failures} DIFF` : '\nAllt í lagi (all tests pass)');
process.exit(failures ? 1 : 0);
