// scripts/apply-batch-h-tweaks.cjs
//
// Text edits approved by the owner on 27.10.2026, after batch H.
// 1. Headings and titles on older pages, so they carry phrases with demand:
//    «recruitment agency website design» (1,300), «wedding photographer website»
//    (390), «car rental website design», RU «раскрутка сайта автосервиса /
//    клиники / интернет-магазина» (210 / 170 / 170); /seo-for-startups loses
//    «SaaS» in its title (the SaaS SEO page now owns it).
// 2. Eleven PL/RU pages promised to come to a meeting in Warsaw — the owner works
//    remotely only; the sentence is replaced or removed.
//
// Each edit is an exact string replacement anywhere in the published document
// (title, seo, block titles, headings, FAQ). mode "exact" — the whole string must
// match; mode "sub" — a substring inside a longer text. Every edit must match
// exactly once, otherwise the page is skipped and reported. Idempotent (an edit
// whose new text is already there is skipped); aborts on drafts; one transaction.
//
// Usage: node scripts/apply-batch-h-tweaks.cjs           dry run
//        node scripts/apply-batch-h-tweaks.cjs --apply   write

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

// [old, new, mode]; old and new may be parallel arrays of spellings (with or
// without « | Bandziuk», straight or curly apostrophe) — the matching one is used
const EDITS = [
  // 1. headings and titles
  { lang: "en", slug: "recruitment-agency-website", edits: [
    [["Recruitment Agency Website Development | Bandziuk", "Recruitment Agency Website Development"], ["Recruitment Agency Website Design and Development | Bandziuk", "Recruitment Agency Website Design and Development"], "exact"],
    ["What the site includes", "Recruitment agency website design: what the site includes", "exact"],
    ["Two audiences that want opposite things", "Web design for recruitment agencies: two audiences that want opposite things", "exact"],
  ] },
  { lang: "en", slug: "photographer-website", edits: [
    [["Style is judged in seconds, and genres don't mix", "Style is judged in seconds, and genres don’t mix"], ["Wedding photographer website or portrait portfolio: style is judged in seconds, and genres don't mix", "Wedding photographer website or portrait portfolio: style is judged in seconds, and genres don’t mix"], "exact"],
  ] },
  { lang: "en", slug: "car-rental-seo", edits: [
    ["The car rental website itself: booking engine, speed and indexable pages", "Car rental website design in car rental SEO: booking engine, speed and indexable pages", "exact"],
  ] },
  { lang: "en", slug: "seo-for-startups", edits: [
    ["SEO Consultant for Startups and SaaS | Bandziuk", "SEO Consultant for Early-Stage Startups | Bandziuk", "exact"],
  ] },
  { lang: "ru", slug: "seo-prodvizhenie-avtoservisa", edits: [
    ["Когда автосервису подходит SEO-продвижение и когда нет", "Раскрутка сайта автосервиса: когда SEO-продвижение подходит, а когда нет", "exact"],
    ["Work Process", "Как проходит работа над продвижением сайта автосервиса", "exact"],
  ] },
  { lang: "ru", slug: "prodvizhenie-medicinskogo-saita", edits: [
    ["Как раскрутить медицинскую клинику: SEO, реклама, агрегаторы и рекомендации", "Раскрутка сайта клиники: SEO, реклама, агрегаторы и рекомендации", "exact"],
  ] },
  { lang: "ru", slug: "prodvizhenie-internet-magazina", edits: [
    ["Фильтры и дубли: две вещи, которые ломают каталог", "Раскрутка сайта интернет-магазина: фильтры и дубли, которые ломают каталог", "exact"],
  ] },

  // 2. no visits in person
  { lang: "pl", slug: "strona-internetowa-dla-fizjoterapeuty", edits: [
    [" W Warszawie mogę przyjechać do gabinetu.", " Rozmawiamy przez telefon lub wideo.", "sub"],
  ] },
  { lang: "pl", slug: "strona-internetowa-dla-doradcy-finansowego", edits: [
    [" W Warszawie mogę przyjechać na spotkanie.", "", "sub"],
  ] },
  { lang: "pl", slug: "strona-internetowa-dla-agenta-ubezpieczeniowego", edits: [
    [" W Warszawie mogę przyjechać na spotkanie.", " Rozmowy odbywają się przez telefon lub wideo.", "sub"],
  ] },
  { lang: "pl", slug: "strona-internetowa-dla-adwokata", edits: [
    [" W Warszawie mogę przyjechać na spotkanie.", " Spotykamy się na rozmowach wideo.", "sub"],
  ] },
  { lang: "pl", slug: "strona-internetowa-dla-kliniki-medycyny-estetycznej", edits: [
    ["Czy przyjeżdżasz do kliniki?", "Jak wygląda współpraca z kliniką z innego miasta?", "exact"],
    ["W Warszawie tak — mogę przyjechać na brief i sesję zdjęciową. Z klinikami z innych miast pracuję zdalnie, przez rozmowy wideo.", "Tak samo jak z kliniką w Warszawie: brief, akceptacja projektu i szkolenie z panelu odbywają się na rozmowach wideo, a zdjęcia gabinetów i zespołu robi wybrany przez Was fotograf.", "exact"],
  ] },
  { lang: "pl", slug: "strona-internetowa-dla-fundacji", edits: [
    [" W Warszawie mogę przyjechać na spotkanie z zarządem.", " Z zarządem rozmawiam na wideo.", "sub"],
  ] },
  { lang: "pl", slug: "strona-internetowa-dla-agenta-nieruchomosci", edits: [
    [" W Warszawie mogę przyjechać na spotkanie albo na sesję zdjęciową z fotografem.", " Zdjęcia do strony robi Twój fotograf według listy ujęć, którą przygotowuję.", "sub"],
  ] },
  { lang: "pl", slug: "pozycjonowanie-strony-restauracji", edits: [
    [" Do restauracji w Warszawie mogę też przyjechać na miejsce.", "", "sub"],
  ] },
  { lang: "ru", slug: "seo-prodvizhenie-saita-restorana", edits: [
    [" К ресторанам в Варшаве я могу приехать и на место.", "", "sub"],
  ] },
  { lang: "pl", slug: "strona-internetowa-domu-opieki", edits: [
    [" W Warszawie i okolicy mogę przyjechać, żeby zobaczyć dom.", " Dom pokazujecie mi na zdjęciach i krótkim filmie z telefonu.", "sub"],
  ] },
  { lang: "pl", slug: "strona-internetowa-dla-malej-firmy", edits: [
    [" W Warszawie mogę przyjechać na spotkanie.", "", "sub"],
  ] },
];

const SKIP = new Set(["_id", "_type", "_rev", "_createdAt", "_updatedAt", "_key", "_ref", "slug", "language", "href"]);

// walk a value, replacing strings; returns [newValue, hits]
function walk(v, pairs, mode) {
  if (typeof v === "string") {
    let hits = 0, out = v;
    for (const [o, nu] of pairs) {
      if (mode === "exact" ? out.trim() === o : out.includes(o)) {
        hits += mode === "exact" ? 1 : out.split(o).length - 1;
        out = mode === "exact" ? nu : out.split(o).join(nu);
        break;
      }
    }
    return [out, hits];
  }
  if (Array.isArray(v)) {
    let hits = 0;
    const arr = v.map((x) => { const [y, h] = walk(x, pairs, mode); hits += h; return y; });
    return [arr, hits];
  }
  if (v && typeof v === "object") {
    let hits = 0; const obj = {};
    for (const [k, x] of Object.entries(v)) {
      if (SKIP.has(k)) { obj[k] = x; continue; }
      const [y, h] = walk(x, pairs, mode); hits += h; obj[k] = y;
    }
    return [obj, hits];
  }
  return [v, 0];
}
const count = (v, s) => JSON.stringify(v).split(JSON.stringify(s).slice(1, -1)).length - 1;

async function main() {
  const patches = [];
  for (const page of EDITS) {
    const doc = await client.fetch(
      `*[_type in ["singlepage", "service"] && language == $lang && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]`,
      { lang: page.lang, s: page.slug },
    );
    if (!doc) { console.log(`warn  ${page.lang} «${page.slug}» not found — skipped`); continue; }
    const draft = await client.fetch(`*[_id == $id][0]._id`, { id: `drafts.${doc._id}` });
    if (draft) { console.log(`Aborting — draft exists for ${doc._id}; publish or discard it first.`); process.exit(1); }

    let cur = doc, ok = true; const lines = [];
    for (const [old, nu, mode] of page.edits) {
      const olds = Array.isArray(old) ? old : [old];
      const nus = Array.isArray(nu) ? nu : olds.map(() => nu);
      const pairs = olds.map((o, i) => [o, nus[i]]);
      const [next, hits] = walk(cur, pairs, mode);
      if (hits === 0 && nus.some((n) => n === "" || count(cur, n) > 0)) { lines.push(`  skip  already done: «${nus[0] || olds[0]}»`); continue; }
      if (hits !== 1) { lines.push(`  STOP  «${olds[0]}» matched ${hits}× (need exactly 1)`); ok = false; break; }
      lines.push(`  «${olds[0]}»\n     → «${nus[0] || "(removed)"}»`);
      cur = next;
    }
    console.log(`\n${page.lang} «${page.slug}» (${doc._id})\n${lines.join("\n")}`);
    if (!ok) { console.log("  page skipped"); continue; }
    const set = {};
    for (const k of Object.keys(cur)) if (!SKIP.has(k) && JSON.stringify(cur[k]) !== JSON.stringify(doc[k])) set[k] = cur[k];
    if (Object.keys(set).length) patches.push({ id: doc._id, rev: doc._rev, set });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${patches.length} page(s), nothing written. Add --apply to write.`);
  const tx = client.transaction();
  for (const p of patches) tx.patch(p.id, (q) => q.ifRevisionId(p.rev).set(p.set));
  await tx.commit();
  console.log(`\nWritten: ${patches.map((p) => p.id).join(", ")}\nThe webhook revalidates these pages.`);
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
