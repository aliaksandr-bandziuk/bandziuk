// scripts/fix-meta-index-pages.cjs
//
// The four listing pages waves 1-5 could not reach: /blog, /ru/blog, /pl/blog
// and /pl/portfolio. They are blogPage and portfolioPage documents, which keep
// `metaTitle` and `metaDescription` at the top level instead of under `seo`,
// so the first run of check-meta-lengths.cjs never looked at them and their
// titles of 61-79 characters survived the whole sweep. The checker has since
// been extended to cover these types; this script fixes the pages.
//
// Documents are found by type and language rather than by id, and every
// current value is declared, so a page that has changed since 06.11.2026
// stops the run instead of being overwritten.
//
// Usage:
//   node scripts/fix-meta-index-pages.cjs --lint     checks lengths only, no network
//   node scripts/fix-meta-index-pages.cjs            dry run against Sanity
//   node scripts/fix-meta-index-pages.cjs --apply    writes
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const LINT = process.argv.includes("--lint");
const TITLE_LIMIT = 60;
const DESC_LIMIT = 160;

const norm = (s) => String(s || "").trim().replace(/\s+/g, " ").toLowerCase();

const EDITS = [
  {
    type: "blogPage",
    lang: "en",
    url: "/blog",
    oldTitle: "Web Development & SEO Blog — Insights, Guides, Best Practices | Bandziuk.com",
    newTitle: "Web Development and SEO Blog: Guides and Practice",
  },
  {
    type: "blogPage",
    lang: "ru",
    url: "/ru/blog",
    oldTitle: "Блог о создании сайтов, SEO и веб-разработке — практические советы и примеры",
    newTitle: "Блог о создании сайтов, SEO и веб-разработке",
    oldDesc: "Читайте статьи о SEO, Core Web Vitals, производительности, разработке на Next.js, мультиязычных сайтах и стратегиях контента. Полезно для бизнеса, маркетологов и разработчиков.",
    newDesc: "Статьи о SEO, Core Web Vitals, производительности, разработке на Next.js, мультиязычных сайтах и контенте — для бизнеса и маркетологов.",
  },
  {
    type: "blogPage",
    lang: "pl",
    url: "/pl/blog",
    oldTitle: "Blog o tworzeniu stron, SEO i marketingu — praktyczna wiedza i realne przykłady",
    newTitle: "Blog o tworzeniu stron, SEO i marketingu",
  },
  {
    type: "portfolioPage",
    lang: "pl",
    url: "/pl/portfolio",
    oldTitle: "Portfolio – Projekty Stron Internetowych i SEO | Bandziuk.com",
    newTitle: "Portfolio: projekty stron internetowych i SEO",
  },
];

function lint() {
  let bad = 0;
  for (const e of EDITS) {
    if (e.newTitle.length > TITLE_LIMIT) { console.log(`TITLE ${e.newTitle.length} > ${TITLE_LIMIT}  ${e.url}`); bad += 1; }
    if (e.newTitle === e.oldTitle) { console.log(`NO CHANGE in title  ${e.url}`); bad += 1; }
    if (e.newDesc && e.newDesc.length > DESC_LIMIT) { console.log(`DESC ${e.newDesc.length} > ${DESC_LIMIT}  ${e.url}`); bad += 1; }
    if (e.newDesc && e.newDesc === e.oldDesc) { console.log(`NO CHANGE in description  ${e.url}`); bad += 1; }
  }
  console.log(`${EDITS.length} entries, ${bad} problem(s).`);
  if (!bad) {
    console.log("\nlengths:");
    EDITS.forEach((e) => console.log(`  title ${String(e.newTitle.length).padStart(2)}${e.newDesc ? `  desc ${e.newDesc.length}` : "         "}  ${e.url}\n      «${e.newTitle}»`));
  }
  return bad;
}

async function main() {
  const problems = lint();
  if (LINT) process.exit(problems ? 1 : 0);
  if (problems) {
    console.log("\nAborting — fix the entries above first.");
    process.exit(1);
  }

  const { createClient } = require("@sanity/client");
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2025-08-04",
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
  });

  console.log("");
  const plan = [];
  const failed = [];
  let skipped = 0;

  for (const e of EDITS) {
    const docs = await client.fetch(
      `*[_type == $type && language == $lang && !(_id in path("drafts.**"))]{_id, _rev, title, metaTitle, metaDescription}`,
      { type: e.type, lang: e.lang },
    );
    if (docs.length !== 1) {
      failed.push(`${e.url}: found ${docs.length} ${e.type} documents for language ${e.lang}, expected one`);
      continue;
    }
    const doc = docs[0];

    const draft = await client.getDocument(`drafts.${doc._id}`);
    if (draft) { failed.push(`${e.url}: has an unpublished draft`); continue; }

    const curTitle = doc.metaTitle || "";
    const curDesc = doc.metaDescription || "";

    if (norm(e.newTitle) === norm(doc.title)) {
      failed.push(`${e.url}: the new metaTitle equals the page title «${doc.title}»`);
      continue;
    }

    const titleDone = curTitle === e.newTitle;
    const descDone = !e.newDesc || curDesc === e.newDesc;
    if (titleDone && descDone) { console.log(`${e.url}\n  already applied\n`); skipped += 1; continue; }

    if (!titleDone && curTitle !== e.oldTitle) {
      failed.push(`${e.url}: the current metaTitle is neither the old nor the new version`);
      continue;
    }
    if (e.newDesc && !descDone && curDesc !== e.oldDesc) {
      failed.push(`${e.url}: the current description is neither the old nor the new version`);
      continue;
    }

    const set = {};
    if (!titleDone) set.metaTitle = e.newTitle;
    if (e.newDesc && !descDone) set.metaDescription = e.newDesc;

    console.log(`${e.url}  [${doc._id}]`);
    if (set.metaTitle) console.log(`  title ${curTitle.length} -> ${e.newTitle.length}\n    «${e.newTitle}»`);
    if (set.metaDescription) console.log(`  desc  ${curDesc.length} -> ${e.newDesc.length}\n    «${e.newDesc}»`);
    console.log("");

    plan.push({ e, id: doc._id, rev: doc._rev, set });
  }

  if (failed.length) {
    console.log("Problems:");
    failed.forEach((f) => console.log(`  ${f}`));
    console.log("\nAborting — nothing written.");
    process.exit(1);
  }

  if (!APPLY) {
    console.log(`Dry run — nothing written. ${plan.length} document(s) would change, ${skipped} already applied.`);
    return;
  }

  for (const { id, rev, set } of plan) {
    await client.patch(id).ifRevisionId(rev).set(set).commit();
  }

  const stillWrong = [];
  for (const { e, id } of plan) {
    const after = await client.getDocument(id);
    if ((after.metaTitle || "") !== e.newTitle) stillWrong.push(`${e.url}: metaTitle`);
    if (e.newDesc && (after.metaDescription || "") !== e.newDesc) stillWrong.push(`${e.url}: description`);
  }
  if (stillWrong.length) {
    console.log("WARNING — re-read does not match what was written:");
    stillWrong.forEach((s) => console.log(`  ${s}`));
    process.exit(1);
  }
  console.log(`Done: ${plan.length} written, ${skipped} already applied. Self-check passed.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
