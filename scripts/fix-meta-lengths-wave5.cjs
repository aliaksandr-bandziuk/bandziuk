// scripts/fix-meta-lengths-wave5.cjs
//
// Repair of a defect wave 3 introduced on 06.11.2026. Dropping the
// «| Bandziuk» suffix brought fourteen titles under 60 characters, but on
// eight of those pages the suffix was the only thing separating the metaTitle
// from the H1. check-headings.cjs then reported eleven pages where H1 and
// metaTitle are identical — three are the privacy policies and predate this,
// the other eight are mine.
//
// Here each of the eight gets a metaTitle that does a different job from the
// H1: the H1 names the service and the city, the metaTitle adds the price or
// the buyer. Both stay within 60 characters.
//
// The lint step now also compares the new metaTitle with the H1 (case- and
// space-insensitive, the same comparison check-headings.cjs makes), and the
// dry run repeats that comparison against the live `heading` in Sanity, so
// this class of defect cannot ship twice.
//
// Usage:
//   node scripts/fix-meta-lengths-wave5.cjs --lint     checks only, no network
//   node scripts/fix-meta-lengths-wave5.cjs            dry run against Sanity
//   node scripts/fix-meta-lengths-wave5.cjs --apply    writes
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const LINT = process.argv.includes("--lint");
const TITLE_LIMIT = 60;

const norm = (s) => String(s || "").trim().replace(/\s+/g, " ").toLowerCase();

const EDITS = [
  {
    id: "singlepage-seo-australia",
    url: "/services/locations/seo-for-australian-market",
    h1: "Website SEO and AI search for the Australian market",
    oldTitle: "Website SEO and AI Search for the Australian Market",
    newTitle: "SEO for the Australian Market: Buyers in a Different Season",
  },
  {
    id: "singlepage-seo-budowlana-warszawa.pl",
    url: "/pl/oferty/pozycjonowanie-strony-firmy-budowlanej-warszawa",
    h1: "Pozycjonowanie strony firmy budowlanej w Warszawie",
    oldTitle: "Pozycjonowanie strony firmy budowlanej w Warszawie",
    newTitle: "Pozycjonowanie strony firmy budowlanej, Warszawa — 1000 zł",
  },
  {
    id: "singlepage-seo-kancelaria-warszawa.pl",
    url: "/pl/oferty/pozycjonowanie-strony-kancelarii-prawnej-warszawa",
    h1: "Pozycjonowanie strony kancelarii prawnej w Warszawie",
    oldTitle: "Pozycjonowanie strony kancelarii prawnej w Warszawie",
    newTitle: "Pozycjonowanie strony kancelarii prawnej, Warszawa — 1000 zł",
  },
  {
    id: "singlepage-seo-salon-warszawa.pl",
    url: "/pl/oferty/pozycjonowanie-strony-salonu-kosmetycznego-warszawa",
    h1: "Pozycjonowanie strony salonu kosmetycznego w Warszawie",
    oldTitle: "Pozycjonowanie strony salonu kosmetycznego w Warszawie",
    newTitle: "Pozycjonowanie strony salonu beauty, Warszawa — 1000 zł",
  },
  {
    id: "singlepage-seo-sprzatanie-warszawa.pl",
    url: "/pl/oferty/pozycjonowanie-strony-firmy-sprzatajacej-warszawa",
    h1: "Pozycjonowanie strony firmy sprzątającej w Warszawie",
    oldTitle: "Pozycjonowanie strony firmy sprzątającej w Warszawie",
    newTitle: "Pozycjonowanie strony firmy sprzątającej, Warszawa — 1000 zł",
  },
  {
    id: "singlepage-seo-stomatologia-warszawa.pl",
    url: "/pl/oferty/pozycjonowanie-strony-gabinetu-stomatologicznego-warszawa",
    h1: "Pozycjonowanie strony gabinetu stomatologicznego w Warszawie",
    oldTitle: "Pozycjonowanie strony gabinetu stomatologicznego w Warszawie",
    newTitle: "Pozycjonowanie strony stomatologa, Warszawa — audyt 1000 zł",
  },
  {
    id: "singlepage-seo-warsztat-warszawa.pl",
    url: "/pl/oferty/pozycjonowanie-strony-warsztatu-samochodowego-warszawa",
    h1: "Pozycjonowanie strony warsztatu samochodowego w Warszawie",
    oldTitle: "Pozycjonowanie strony warsztatu samochodowego w Warszawie",
    newTitle: "Pozycjonowanie strony warsztatu, Warszawa — audyt 1000 zł",
  },
  {
    id: "singlepage-swiss-consulting",
    url: "/locations/seo-for-swiss-market/seo-for-consulting-firms-switzerland",
    h1: "SEO for consulting and professional firms in Switzerland",
    oldTitle: "SEO for Consulting and Professional Firms in Switzerland",
    newTitle: "Swiss Consulting Firms: Getting Found by Corporate Buyers",
  },
];

function lint() {
  let bad = 0;
  const seen = new Set();
  for (const e of EDITS) {
    if (seen.has(e.id)) { console.log(`DUPLICATE id ${e.id}`); bad += 1; }
    seen.add(e.id);
    if (e.newTitle.length > TITLE_LIMIT) { console.log(`TITLE ${e.newTitle.length} > ${TITLE_LIMIT}  ${e.url}`); bad += 1; }
    if (e.newTitle === e.oldTitle) { console.log(`NO CHANGE  ${e.url}`); bad += 1; }
    if (norm(e.newTitle) === norm(e.h1)) { console.log(`STILL EQUALS H1  ${e.url}`); bad += 1; }
  }
  console.log(`${EDITS.length} entries, ${bad} problem(s).`);
  if (!bad) {
    console.log("\nlengths:");
    EDITS.forEach((e) => console.log(`  title ${String(e.newTitle.length).padStart(2)}  ${e.url}\n      H1: «${e.h1}»\n      MT: «${e.newTitle}»`));
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
    const draft = await client.getDocument(`drafts.${e.id}`);
    if (draft) { failed.push(`${e.url}: has an unpublished draft`); continue; }

    const doc = await client.getDocument(e.id);
    if (!doc) { failed.push(`${e.url}: document ${e.id} not found`); continue; }

    const curTitle = (doc.seo && doc.seo.metaTitle) || "";
    const liveH1 = doc.heading || doc.title || "";

    // The H1 in the table has to match the live page, otherwise the collision
    // this script is repairing may not be the one still on the site.
    if (norm(liveH1) !== norm(e.h1)) {
      failed.push(`${e.url}: the live H1 is «${liveH1}», the table expects «${e.h1}»`);
      continue;
    }
    if (norm(e.newTitle) === norm(liveH1)) {
      failed.push(`${e.url}: the new metaTitle still equals the live H1`);
      continue;
    }

    if (curTitle === e.newTitle) { console.log(`${e.url}\n  already applied\n`); skipped += 1; continue; }
    if (curTitle !== e.oldTitle) {
      failed.push(`${e.url}: the current metaTitle is neither the old nor the new version`);
      continue;
    }

    console.log(`${e.url}\n  H1 «${liveH1}»\n  MT ${curTitle.length} -> ${e.newTitle.length}\n     «${e.newTitle}»\n`);
    plan.push({ e, rev: doc._rev });
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

  for (const { e, rev } of plan) {
    await client.patch(e.id).ifRevisionId(rev).set({ "seo.metaTitle": e.newTitle }).commit();
  }

  const stillWrong = [];
  for (const { e } of plan) {
    const after = await client.getDocument(e.id);
    if (((after.seo && after.seo.metaTitle) || "") !== e.newTitle) stillWrong.push(e.url);
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
