// scripts/fix-portfolio-subtitles.cjs
//
// Owner's rule (25.10.2026): never tell a visitor that there are no clients from
// their industry. The trade, medical, hotel, construction and restaurant landing pages said «None of these
// are …», «These are not … clients» above the portfolio and, on two hotel pages,
// in a FAQ answer. The fixtures in src/dev-fixtures are already rewritten; this
// script brings the published Sanity documents in line with them:
//   - portfolioPickBlock.subtitle ← the fixture's subtitle;
//   - FAQ items whose question is in OLD_FAQ ← the fixture's question and answer.
// Pages not yet in Sanity are skipped (create-landing will use the fixed fixture).
//
// Idempotent; aborts on drafts; one transaction, one patch per document.
//
// Usage: node scripts/fix-portfolio-subtitles.cjs           dry run
//        node scripts/fix-portfolio-subtitles.cjs --apply   write

const path = require("path");
const fs = require("fs");
const { createJiti } = require("jiti");
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

const FILES = [
  "roofing-seo.en", "hvac-seo.en", "seo-for-plumbers.en", "local-seo-for-plumbers.en", "seo-for-electricians.en", "landscaping-seo.en", "seo-for-painting-contractors.en",
  "website-for-plumbers.en", "website-for-electricians.en", "roofing-websites.en", "hvac-websites.en", "lawn-care-website.en",
  "plumbing-website-design.en", "electrician-website-design.en", "roofing-website-design.en", "hvac-website-design.en", "landscaping-website-design.en",
  "dentist-seo.en", "dentist-seo.pl", "dentist-seo.ru", "local-seo-for-dentists.en", "dental-website-design.en", "seo-for-doctors.en", "healthcare-seo.en",
  "medical-seo.en", "medical-seo.ru", "medical-website-design.en", "medical-website-design.pl", "medical-website-design.ru",
  "veterinary-seo.en", "veterinary-seo.ru", "veterinary-website-design.en",
  "hotel-seo.en", "hotel-seo.pl", "hotel-seo.ru", "hotel-website-design.en", "vacation-rental-website-design.en",
  // earlier pages: «Closest to construction…», «No restaurant among them yet…»
  "construction-company-website.en", "construction-company-website.pl", "construction-company-website.ru",
  "construction-seo.en", "construction-seo.pl", "construction-seo.ru", "construction-website-design.en", "construction-website-design.ru",
  "contractor-website-design.en", "seo-for-contractors.en", "website-for-contractors.en", "website-for-contractors.ru",
  "restaurant-seo.en", "restaurant-seo.pl", "restaurant-seo.ru", "restaurant-website-design.en", "restaurant-website-design.ru",
];
const OLD_FAQ = {
  "Have you designed websites for other hotels?": "What is the design of our hotel website based on?",
  "Have you built websites for vacation rentals before?": "What is a vacation rental website built around?",
  "Есть ли у вас кейс продвижения строительной компании?": "Какие результаты продвижения вы можете показать?",
};

const jiti = createJiti(__filename);
const load = (name) => Object.values(jiti(path.resolve(__dirname, `../src/dev-fixtures/${name}.ts`))).find((v) => v && v.contentBlocks);
const docId = (fx) => (fx.lang === "en" ? `singlepage-${fx.group ?? fx.slug}` : `singlepage-${fx.group ?? fx.slug}.${fx.lang}`);
const plain = (blocks) => (blocks || []).map((b) => (b.children || []).map((c) => c.text).join("")).join(" ");

async function main() {
  const fixtures = FILES.map(load);
  const ids = fixtures.map(docId);
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: ids.map((i) => `drafts.${i}`) });
  if (drafts.length) { console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`); process.exit(1); }
  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, contentBlocks}`, { ids });
  const tx = client.transaction();
  let n = 0, missing = [];
  for (const fx of fixtures) {
    const id = docId(fx);
    const doc = docs.find((d) => d._id === id);
    if (!doc) { missing.push(id); continue; }
    const set = {};
    const want = fx.contentBlocks.find((b) => b._type === "portfolioPickBlock").subtitle;
    const pick = (doc.contentBlocks || []).find((b) => b._type === "portfolioPickBlock");
    if (pick && pick.subtitle !== want) set[`contentBlocks[_key=="${pick._key}"].subtitle`] = want;
    const faq = (doc.contentBlocks || []).find((b) => b._type === "faqBlock");
    const fxFaq = fx.contentBlocks.find((b) => b._type === "faqBlock");
    for (const item of faq?.faq?.items || []) {
      const newQ = OLD_FAQ[item.question];
      if (!newQ) continue;
      const repl = fxFaq.faq.items.find((x) => x.question === newQ);
      if (!repl) throw new Error(`${id}: fixture has no FAQ «${newQ}»`);
      set[`contentBlocks[_key=="${faq._key}"].faq.items[_key=="${item._key}"].question`] = repl.question;
      set[`contentBlocks[_key=="${faq._key}"].faq.items[_key=="${item._key}"].answer`] = repl.answer;
    }
    if (!Object.keys(set).length) { console.log(`skip  ${id}: already fixed`); continue; }
    console.log(`fix   ${id}:`);
    for (const [k, v] of Object.entries(set)) console.log(`        ${k.replace(/\[_key=="[^"]+"\]/g, "[…]")}\n          → ${(typeof v === "string" ? v : plain(v)).slice(0, 110)}…`);
    tx.patch(id, (p) => p.ifRevisionId(doc._rev).set(set));
    n++;
  }
  if (missing.length) console.log(`\nnot in Sanity yet (the fixture is already fixed): ${missing.join(", ")}`);
  if (!n) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${n} document(s) to change. Add --apply to write.`);
  await tx.commit();
  console.log(`\nWritten: ${n} document(s). The webhook revalidates these pages.`);
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
