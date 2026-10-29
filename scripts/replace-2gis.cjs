// scripts/replace-2gis.cjs
//
// Removes 2GIS from the three pages where it is named without belonging there:
//
//   ru sait-dlya-fermy
//   ru sait-dlya-sluzhby-dezinsekcii
//   ru prodvizhenie-vinodelni
//
// DELIBERATELY NOT a site-wide replacement. Decision of 29.10.2026, after measuring:
// 2GIS appears on 62 Russian pages, and on 59 of them it carries a fact about the
// Kazakh, Uzbek or Emirati market — «В Алматы и Астане прокат ищут в 2GIS не реже,
// чем в Google», «В Казахстане, ОАЭ и на Кипре значительная часть пациентов
// открывает не Google, а 2GIS». Those markets are exactly what the pages target, so
// the sentences are true and useful, and renaming the service would make them false.
// Those 59 pages keep 2GIS. Only these three name it with no market behind it.
//
// Each edit is an exact fragment that must occur EXACTLY ONCE in its document, so a
// near-miss fails loudly instead of changing the wrong sentence. No regex grammar
// guessing: the replacements were written by hand, which is why the second map is
// simply dropped rather than renamed — on a page with no market claim Google Maps is
// the whole answer, and «Apple Maps» beside OLX and Instagram would read wrong.
//
// After editing, the script re-scans the three documents and refuses to write if any
// mention of 2GIS survives, so a fragment I missed cannot pass silently.
//
// Usage: node scripts/replace-2gis.cjs           dry run — prints every change
//        node scripts/replace-2gis.cjs --apply   write

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

const TOKEN = /2\s?-?GIS|2\s?ГИС/gi;
const SKIP_KEYS = new Set(["_id", "_rev", "_key", "_type", "_ref", "language", "slug"]);
const PAGES = ["sait-dlya-fermy", "sait-dlya-sluzhby-dezinsekcii", "prodvizhenie-vinodelni"];

// slug → [exact fragment, replacement, expected number of strings it matches (default 1)]
//
// Order matters: the edits run in sequence on each string, so a longer fragment must
// come before a shorter one it contains. «Google Карты и 2GIS для винодельни:» is
// listed above the bare «Google Карты и 2GIS» for exactly that reason.
const EDITS = {
  "sait-dlya-fermy": [
    // meta description: the item becomes «карты» so the length stays under 160
    ["предоплата за мясо и наборы, 2GIS, агротуризм", "предоплата за мясо и наборы, карты, агротуризм"],
    ["стоят в карточках Google и 2GIS, чтобы человек", "стоят в карточке Google, чтобы человек"],
    ["и кнопки «Открыть в Google Картах» и «Открыть в 2GIS»", "и кнопка «Открыть в Google Картах»"],
    ["Google Карты, 2GIS и описание дороги", "Google Карты и описание дороги"],
    ["Как найти ферму: точка на карте, 2GIS и Google Карты", "Как найти ферму: точка на карте и Google Карты"],
  ],
  "sait-dlya-sluzhby-dezinsekcii": [
    ["оценка в 2GIS или Google и пара отзывов", "оценка в Google и пара отзывов"],
    ["годы работы, оценка в 2GIS или Google, гарантия", "годы работы, оценка в Google, гарантия"],
    ["Только 2GIS, Instagram или объявление на OLX", "Только карточка на картах, Instagram или объявление на OLX"],
    ["к которому клиенты приходят из 2GIS и по рекомендации", "к которому клиенты приходят с карт и по рекомендации"],
    ["если есть карточка в 2GIS и объявление на OLX", "если есть карточка на картах и объявление на OLX"],
    ["сайт, Instagram, карточку в 2GIS или Google Картах", "сайт, Instagram, карточку в Google Картах"],
    ["а работа с 2GIS и Google Картами — на странице", "а работа с Google Картами — на странице"],
  ],
  "prodvizhenie-vinodelni": [
    ["ссылку на карточку в Google Картах или 2GIS, список дегустаций", "ссылку на карточку в Google Картах, список дегустаций"],
    ["языке страны, Google Карты и 2GIS, фестивали", "языке страны, Google Карты, фестивали"],
    ["Google Карты и 2GIS для винодельни:", "Google Карты для винодельни:"],
    ["сайт, Google Карты и 2GIS, другие винодельни региона", "сайт, Google Карты, другие винодельни региона"],
    ["одинаковые название, адрес и часы в Google, 2GIS, на TripAdvisor", "одинаковые название, адрес и часы в Google, на TripAdvisor"],
    // the point of this sentence is «register on whatever map your guests use», so the
    // thought is kept and only the name goes
    ["Если ваши гости открывают 2GIS, ту же карточку стоит завести и там.", "Если ваши гости пользуются другой картой или местным справочником, ту же карточку стоит завести и там."],
    // the bare pair, left for last: it is a block title and a quiz option, two strings
    ["Google Карты и 2GIS", "Google Карты", 2],
  ],
};

const counts = {}; // "slug::fragment" → how many strings it matched
const changes = [];

function transform(node, slug, key) {
  if (node == null) return node;
  if (typeof node === "string") {
    let out = node;
    for (const [from, to] of EDITS[slug]) {
      if (!out.includes(from)) continue;
      const k = `${slug}::${from}`;
      counts[k] = (counts[k] || 0) + 1;
      out = out.split(from).join(to);
    }
    if (out !== node) changes.push({ slug, key, from: node, to: out });
    return out;
  }
  if (Array.isArray(node)) return node.map((v) => transform(v, slug, key));
  if (typeof node === "object") {
    const o = {};
    for (const [k, v] of Object.entries(node)) o[k] = SKIP_KEYS.has(k) ? v : transform(v, slug, k);
    return o;
  }
  return node;
}

function survivors(node, out, key) {
  if (node == null) return;
  if (typeof node === "string") { TOKEN.lastIndex = 0; if (TOKEN.test(node)) out.push({ key, text: node }); TOKEN.lastIndex = 0; return; }
  if (Array.isArray(node)) { node.forEach((v) => survivors(v, out, key)); return; }
  if (typeof node === "object") for (const [k, v] of Object.entries(node)) if (!SKIP_KEYS.has(k)) survivors(v, out, k);
}

const clip = (s, n = 230) => (s.length <= n ? s : s.slice(0, n) + ` …[+${s.length - n}]`);

(async () => {
  if (!process.env.SANITY_API_TOKEN) throw new Error("SANITY_API_TOKEN missing");
  const patches = [];
  const left = [];

  for (const slug of PAGES) {
    const doc = await client.fetch(
      `*[language == "ru" && slug.ru.current == $s && !(_id in path("drafts.**"))][0]{...}`,
      { s: slug },
    );
    if (!doc) { console.log(`Aborting — ru page «${slug}» not found.`); process.exit(1); }
    const draft = await client.fetch(`*[_id == $id][0]._id`, { id: `drafts.${doc._id}` });
    if (draft) { console.log(`Aborting — draft exists for ${doc._id}; publish or discard it first.`); process.exit(1); }

    const changedFields = {};
    const transformed = {};
    for (const [k, v] of Object.entries(doc)) {
      if (SKIP_KEYS.has(k)) { transformed[k] = v; continue; }
      const out = transform(v, slug, k);
      transformed[k] = out;
      if (JSON.stringify(out) !== JSON.stringify(v)) changedFields[k] = out;
    }

    // Anything still naming 2GIS on a page we are cleaning is a fragment I missed.
    const rest = [];
    survivors(transformed, rest);
    for (const r of rest) left.push({ slug, ...r });

    if (changedFields.seo?.metaDescription) {
      const n = changedFields.seo.metaDescription.length;
      if (n > 160) console.log(`!  ${slug}: meta description now ${n} chars`);
    }
    if (Object.keys(changedFields).length) patches.push({ id: doc._id, rev: doc._rev, slug, fields: changedFields });
  }

  console.log(`${changes.length} string(s) changed across ${patches.length} page(s)\n`);
  for (const c of changes) {
    console.log(`── ru ${c.slug}  (${c.key})`);
    console.log(`   −  ${clip(c.from)}`);
    console.log(`   +  ${clip(c.to)}`);
  }

  // Every fragment must match the number of strings it is declared to match — once,
  // unless a third element says otherwise. Fewer means the text moved on; more means
  // the fragment is not specific enough to be safe.
  let bad = 0;
  for (const slug of PAGES) {
    for (const [from, , want = 1] of EDITS[slug]) {
      const n = counts[`${slug}::${from}`] || 0;
      if (n !== want) { console.log(`!  ${slug}: fragment matched ${n} time(s), expected ${want}: «${clip(from, 90)}»`); bad++; }
    }
  }

  if (left.length) {
    console.log(`\n!! ${left.length} mention(s) of 2GIS still on these pages — fragments not covered above:`);
    for (const l of left) console.log(`   ru ${l.slug} (${l.key})\n      ${clip(l.text, 300)}`);
  }

  if (bad || left.length) { console.log(`\nNot writing: fix the fragments above first.`); process.exit(1); }
  if (!patches.length) return console.log("\nNothing to do — already clean.");
  if (!APPLY) return console.log(`\nDry run — ${patches.length} page(s) would be written. Add --apply.`);

  const tx = client.transaction();
  for (const p of patches) tx.patch(p.id, (q) => q.ifRevisionId(p.rev).set(p.fields));
  await tx.commit();
  console.log(`\nWritten: ${patches.map((p) => p.slug).join(", ")}`);
  console.log("The webhook revalidates these pages; no redeploy needed for text changes.");
})().catch((e) => { console.error("\n" + (e.message || e)); process.exit(1); });
