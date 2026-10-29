// scripts/remove-yandex.cjs
//
// Removes every mention of Yandex from the site (decision of 29.10.2026). 26 strings
// across 13 documents in all three languages. Three different operations, because a
// token swap would not be honest in any of them:
//
//   1. TEXT   — ordinary mentions, rewritten so the sentence still parses
//               («поток клиентов из Google и Яндекса» → «поток клиентов из Google»)
//   2. SECTION— ru «Карточка юридической компании в Яндекс Бизнесе для Казахстана и
//               Беларуси»: an H2 whose whole subject is Yandex. The heading and every
//               block under it up to the next H2 are removed, not edited.
//   3. FAQ    — ru «Нужен ли Яндекс для продвижения юридических услуг?»: the question
//               and its answer are removed from the accordion.
//
// Measured data is NOT deleted, it is generalised: the Clarity referrer table said
// «Google — 11 сеансов, ChatGPT — 7, Яндекс — 5» and now says «другие поисковики — 5»,
// so the numbers stay true. NOTE: the screenshot beside that table still shows
// «yandex» in the Clarity interface; only its alt text changes here. Re-render the
// screenshot if the mismatch matters.
//
// Also fixes two pre-existing faults found on the way, both on ru sait-salona-krasoty:
// a missing space after a full stop («Яндекс.Ясная страница»), and the outdated name
// «Google My Business» (now «профиль компании в Google»).
//
// Every fragment must match the declared number of strings in its document, and after
// the edits each touched document is re-scanned: if any mention of Yandex survives,
// the script refuses to write.
//
// Usage: node scripts/remove-yandex.cjs           dry run — prints every change
//        node scripts/remove-yandex.cjs --apply   write

const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const TOKEN = /Яндекс|Yandex/gi;
const SKIP_KEYS = new Set(["_id", "_rev", "_key", "_type", "_ref", "language", "slug"]);

// "lang slug" → [exact fragment, replacement, expected matches (default 1)]
const TEXT = {
  // ── the attorney article: the H2 section and the FAQ item go below; this is the
  //    checklist row that merely mentions the service in passing
  "ru prodvizhenie-saita-yuridicheskoi-kompanii": [
    ["на сайте, в Google, Яндекс Бизнесе (если нужен) и каталогах", "на сайте, в Google и каталогах"],
  ],

  // ── adult pages: Yandex was named beside Bing; Bing carries the point alone
  "ru seo-dlya-adalt-saitov": [
    ["В этой нише Яндекс и Bing обычно дают заметно большую долю трафика, чем в обычном поиске. Сайт подтверждается в Яндекс Вебмастере и Bing Webmaster Tools, карты сайта отправляются в оба.",
     "В этой нише Bing обычно даёт заметно большую долю трафика, чем в обычном поиске. Сайт подтверждается в Bing Webmaster Tools, туда же отправляется карта сайта."],
    ["SEO для адалт-сайтов в Яндексе, Bing и на нескольких языках", "SEO для адалт-сайтов в Bing и на нескольких языках"],
    ["посетителей из Google, Яндекса, Bing и ответов нейросетей", "посетителей из Google, Bing и ответов нейросетей"],
    ["больших каталогов, Яндекс, Bing, несколько языков", "больших каталогов, Bing, несколько языков"],
    ["дубли, Яндекс и Bing, нейросети", "дубли, Bing, нейросети"],
  ],
  "en adult-seo": [
    ["Adult SEO in Bing, Yandex and other languages", "Adult SEO in Bing and other languages"],
    ["In this niche Bing and Yandex usually bring a larger share of visits than in mainstream search, partly because their filters behave differently. Both get verified webmaster accounts and sitemaps.",
     "In this niche Bing usually brings a larger share of visits than in mainstream search, partly because its filters behave differently. It gets a verified webmaster account and a sitemap."],
  ],
  "pl pozycjonowanie-stron-dla-branzy-adult": [
    ["Serwis 18+ na rynki zagraniczne: wersje językowe, Bing i Yandex", "Serwis 18+ na rynki zagraniczne: wersje językowe i Bing"],
    ["W tej branży Bing i Yandex mają zwykle większy udział w ruchu", "W tej branży Bing ma zwykle większy udział w ruchu"],
  ],

  // ── measured data: generalised, not deleted, so the figures stay true
  "ru skolko-dlitsya-indeksaciya-novogo-sayta": [
    ["ChatGPT — 7, Яндекс — 5 (три с yandex.ru и два с yandex.kz), ещё 4", "ChatGPT — 7, другие поисковики — 5, ещё 4"],
    ["chatgpt.com 7, yandex 5", "chatgpt.com 7, другие поисковики 5"],
  ],
  "en discovered-currently-not-indexed-new-site-data": [
    ["ChatGPT 7, Yandex 5 (three from yandex.ru, two from yandex.kz) and 4 more", "ChatGPT 7, other search engines 5, and 4 more"],
    ["chatgpt.com 7, yandex 5", "chatgpt.com 7, other search engines 5"],
  ],
  "pl ile-trwa-indeksowanie-nowej-strony-dane": [
    ["ChatGPT 7, Yandex 5 (trzy z yandex.ru i dwa z yandex.kz) oraz 4", "ChatGPT 7, inne wyszukiwarki 5 oraz 4"],
    ["chatgpt.com 7, yandex 5", "chatgpt.com 7, inne wyszukiwarki 5"],
  ],

  // ── the education-agency case study: a note about what the data did NOT cover
  "ru keys-prodvizheniya-sayta-obrazovatelnogo-agentstva": [
    ["нельзя складывать между собой, Яндекс не учтён, часть", "нельзя складывать между собой, другие поисковики не учтены, часть"],
  ],
  "en seo-case-study-education-agency": [
    ["cannot be added together, Yandex is not covered, and part", "cannot be added together, other search engines are not covered, and part"],
  ],
  "pl case-study-pozycjonowania-agencji-edukacyjnej": [
    ["nie wolno sumować, Yandex nie jest uwzględniony, a część", "nie wolno sumować, inne wyszukiwarki nie są uwzględnione, a część"],
  ],

  // ── plain mentions
  "ru sozdanie-saitov-dlya-byuti-uslug": [
    ["постоянный поток клиентов из Google и Яндекса,", "постоянный поток клиентов из Google,"],
  ],
  "ru zachem-advokatu-sait": [
    ["рост видимости в Google и Яндексе", "рост видимости в Google"],
  ],
  // also repairs a missing space after the full stop and the outdated product name
  "ru sait-salona-krasoty": [
    ["оптимизация Google My Business / Яндекс.Ясная", "оптимизация профиля компании в Google. Ясная"],
  ],
};

// Whole sections to delete: the heading and every block under it, up to the next
// heading of the same or a higher level. The level is read from the document, not
// assumed — see dropSection.
const SECTIONS = [
  { lang: "ru", slug: "prodvizhenie-saita-yuridicheskoi-kompanii",
    heading: "Карточка юридической компании в Яндекс Бизнесе для Казахстана и Беларуси" },
];

// FAQ entries to delete, matched on the question.
const FAQS = [
  { lang: "ru", slug: "prodvizhenie-saita-yuridicheskoi-kompanii",
    question: "Нужен ли Яндекс для продвижения юридических услуг?" },
];

const counts = {};
const changes = [];
const removed = [];

const plain = (b) => (b?.children || []).map((c) => c.text).join("");
const clip = (s, n = 230) => (s.length <= n ? s : s.slice(0, n) + ` …[+${s.length - n}]`);

function transform(node, docKey, key) {
  if (node == null) return node;
  if (typeof node === "string") {
    let out = node;
    for (const [from, to] of TEXT[docKey] || []) {
      if (!out.includes(from)) continue;
      counts[`${docKey}::${from}`] = (counts[`${docKey}::${from}`] || 0) + 1;
      out = out.split(from).join(to);
    }
    if (out !== node) changes.push({ docKey, key, from: node, to: out });
    return out;
  }
  if (Array.isArray(node)) return node.map((v) => transform(v, docKey, key));
  if (typeof node === "object") {
    const o = {};
    for (const [k, v] of Object.entries(node)) o[k] = SKIP_KEYS.has(k) ? v : transform(v, docKey, k);
    return o;
  }
  return node;
}

// After a section is cut out its parent heading can be left with nothing under it.
// Find any heading immediately followed by a heading of the same or a higher level.
function emptyHeadings(node, out) {
  if (node == null || typeof node !== "object") return out;
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length - 1; i++) {
      const a = node[i], b = node[i + 1];
      if (a && LEVEL[a.style] && b && LEVEL[b.style] && LEVEL[b.style] <= LEVEL[a.style]) out.push(`${a.style} «${norm(plain(a))}»`);
    }
    const last = node[node.length - 1];
    if (last && LEVEL[last.style]) out.push(`${last.style} «${norm(plain(last))}» (last in its block)`);
    node.forEach((v) => emptyHeadings(v, out));
    return out;
  }
  for (const v of Object.values(node)) emptyHeadings(v, out);
  return out;
}

function survivors(node, out, key) {
  if (node == null) return;
  if (typeof node === "string") { TOKEN.lastIndex = 0; if (TOKEN.test(node)) out.push({ key, text: node }); TOKEN.lastIndex = 0; return; }
  if (Array.isArray(node)) { node.forEach((v) => survivors(v, out, key)); return; }
  if (typeof node === "object") for (const [k, v] of Object.entries(node)) if (!SKIP_KEYS.has(k)) survivors(v, out, k);
}

// Remove a heading and everything under it, up to the next heading of the same or a
// higher level. The heading is looked for ANYWHERE in the document, at any level:
// on this site a section heading is not always an h2 at contentBlocks[].content[] —
// it can be an h3, or sit inside a nested block such as doubleTextBlock.
const LEVEL = { h2: 2, h3: 3, h4: 4 };
const norm = (s) => s.replace(/ /g, " ").replace(/\s+/g, " ").trim();

function headings(node, out) {
  if (node == null || typeof node !== "object") return out;
  if (Array.isArray(node)) { node.forEach((v) => headings(v, out)); return out; }
  if (LEVEL[node.style] && Array.isArray(node.children)) out.push(`${node.style}  ${norm(plain(node))}`);
  for (const v of Object.values(node)) headings(v, out);
  return out;
}

function dropSection(doc, headingText, docKey) {
  const want = norm(headingText);
  let done = false;

  const walk = (node) => {
    if (node == null || typeof node !== "object") return node;
    if (Array.isArray(node)) {
      const i = node.findIndex((x) => x && LEVEL[x.style] && norm(plain(x)) === want);
      if (i !== -1 && !done) {
        const lvl = LEVEL[node[i].style];
        let j = node.findIndex((x, k) => k > i && x && LEVEL[x.style] && LEVEL[x.style] <= lvl);
        if (j === -1) j = node.length;
        for (const x of node.slice(i, j)) removed.push({ docKey, what: x.style || x._type, text: clip(plain(x) || `(${x._type})`, 200) });
        done = true;
        return [...node.slice(0, i).map(walk), ...node.slice(j).map(walk)];
      }
      return node.map(walk);
    }
    const o = {};
    for (const [k, v] of Object.entries(node)) o[k] = SKIP_KEYS.has(k) ? v : walk(v);
    return o;
  };

  const out = walk(doc);
  if (!done) {
    console.log(`!  ${docKey}: heading «${headingText}» not found. Headings in this document:`);
    for (const h of headings(doc, [])) console.log(`      ${h}`);
    return null;
  }
  return out;
}

function dropFaq(blocks, question, docKey) {
  let done = false;
  const out = blocks.map((b) => {
    if (done || b._type !== "faqBlock" || !Array.isArray(b.faq?.items)) return b;
    const i = b.faq.items.findIndex((x) => (x.question || "").trim() === question);
    if (i === -1) return b;
    const item = b.faq.items[i];
    removed.push({ docKey, what: "faq", text: clip(item.question, 200) });
    for (const a of item.answer || []) removed.push({ docKey, what: "faq answer", text: clip(plain(a), 200) });
    done = true;
    return { ...b, faq: { ...b.faq, items: [...b.faq.items.slice(0, i), ...b.faq.items.slice(i + 1)] } };
  });
  if (!done) { console.log(`!  ${docKey}: FAQ «${question}» not found`); return null; }
  return out;
}

(async () => {
  if (!process.env.SANITY_API_TOKEN) throw new Error("SANITY_API_TOKEN missing");
  const keys = new Set([
    ...Object.keys(TEXT),
    ...SECTIONS.map((s) => `${s.lang} ${s.slug}`),
    ...FAQS.map((f) => `${f.lang} ${f.slug}`),
  ]);

  const patches = [];
  const left = [];
  const alreadyClean = [];
  let failed = false;

  for (const docKey of keys) {
    const [lang, slug] = [docKey.slice(0, docKey.indexOf(" ")), docKey.slice(docKey.indexOf(" ") + 1)];
    const doc = await client.fetch(
      `*[language == $lang && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]{...}`,
      { lang, s: slug },
    );
    if (!doc) { console.log(`!  ${docKey}: page not found`); failed = true; continue; }
    const draft = await client.fetch(`*[_id == $id][0]._id`, { id: `drafts.${doc._id}` });
    if (draft) { console.log(`Aborting — draft exists for ${doc._id}; publish or discard it first.`); process.exit(1); }

    // If the document no longer mentions Yandex at all, this run is a repeat of a
    // successful one. Say so instead of reporting every fragment as a miss.
    const had = [];
    survivors(doc, had);
    if (!had.length) { alreadyClean.push(docKey); continue; }

    let transformed = {};
    const changedFields = {};
    for (const [k, v] of Object.entries(doc)) {
      if (SKIP_KEYS.has(k)) { transformed[k] = v; continue; }
      transformed[k] = transform(v, docKey, k);
    }

    for (const s of SECTIONS.filter((x) => `${x.lang} ${x.slug}` === docKey)) {
      const next = dropSection(transformed, s.heading, docKey);
      if (!next) { failed = true; continue; }
      transformed = next;
    }
    for (const f of FAQS.filter((x) => `${x.lang} ${x.slug}` === docKey)) {
      const next = dropFaq(transformed.contentBlocks || [], f.question, docKey);
      if (!next) { failed = true; continue; }
      transformed.contentBlocks = next;
    }

    for (const [k, v] of Object.entries(doc)) {
      if (SKIP_KEYS.has(k)) continue;
      if (JSON.stringify(transformed[k]) !== JSON.stringify(v)) changedFields[k] = transformed[k];
    }

    const rest = [];
    survivors(transformed, rest);
    for (const r of rest) left.push({ docKey, ...r });

    // Only worth checking where a section was cut out.
    if (SECTIONS.some((x) => `${x.lang} ${x.slug}` === docKey)) {
      const before = emptyHeadings(doc, []);
      const after = emptyHeadings(transformed, []);
      for (const h of after) if (!before.includes(h)) console.log(`!  ${docKey}: heading left with nothing under it — ${h}`);
    }

    if (Object.keys(changedFields).length) patches.push({ id: doc._id, rev: doc._rev, docKey, fields: changedFields });
  }

  console.log(`${changes.length} string(s) edited, ${removed.length} block(s) removed, across ${patches.length} document(s)\n`);
  for (const c of changes) {
    console.log(`── ${c.docKey}  (${c.key})`);
    console.log(`   −  ${clip(c.from)}`);
    console.log(`   +  ${clip(c.to)}`);
  }
  if (removed.length) {
    console.log(`\nREMOVED BLOCKS — check nothing here should have survived:`);
    for (const r of removed) console.log(`   ${r.docKey}  [${r.what}]  ${r.text}`);
  }

  for (const docKey of Object.keys(TEXT)) {
    if (alreadyClean.includes(docKey)) continue;
    for (const [from, , want = 1] of TEXT[docKey]) {
      const n = counts[`${docKey}::${from}`] || 0;
      if (n !== want) { console.log(`!  ${docKey}: fragment matched ${n} time(s), expected ${want}: «${clip(from, 90)}»`); failed = true; }
    }
  }

  if (left.length) {
    console.log(`\n!! ${left.length} mention(s) of Yandex still present:`);
    for (const l of left) console.log(`   ${l.docKey} (${l.key})\n      ${clip(l.text, 300)}`);
    failed = true;
  }

  if (alreadyClean.length) {
    console.log(`\n${alreadyClean.length} document(s) already carry no mention of Yandex — a previous run applied them:`);
    for (const k of alreadyClean) console.log(`   ${k}`);
  }

  if (failed) { console.log(`\nNot writing: fix the items above first.`); process.exit(1); }
  if (!patches.length) return console.log("\nNothing to do — already clean.");
  if (!APPLY) return console.log(`\nDry run — ${patches.length} document(s) would be written. Add --apply.`);

  const tx = client.transaction();
  for (const p of patches) tx.patch(p.id, (q) => q.ifRevisionId(p.rev).set(p.fields));
  await tx.commit();
  console.log(`\nWritten: ${patches.map((p) => p.docKey).join(", ")}`);
  console.log("The webhook revalidates these pages; no redeploy needed for text changes.");
})().catch((e) => { console.error("\n" + (e.message || e)); process.exit(1); });
