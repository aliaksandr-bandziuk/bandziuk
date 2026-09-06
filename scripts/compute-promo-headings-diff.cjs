const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const MARKETS = ["germany", "uk", "usa", "france", "italy", "switzerland", "netherlands", "ireland", "australia", "baltics"];

function computeEN(d) {
  const out = {};
  out.metaTitle = "Website " + d.metaTitle;
  out.title = "Website " + d.title;

  if (!d.gridTitle.includes("promoting to")) throw new Error("EN gridTitle pattern mismatch: " + d.gridTitle);
  out.gridTitle = d.gridTitle.replace("promoting to", "website SEO for");

  if (!d.stepsTitle.startsWith("How work on")) throw new Error("EN stepsTitle pattern mismatch: " + d.stepsTitle);
  out.stepsTitle = d.stepsTitle.replace("How work on", "How website SEO work on");

  if (!d.faqTitle.includes("promoting to")) throw new Error("EN faqTitle pattern mismatch: " + d.faqTitle);
  out.faqTitle = d.faqTitle.replace("promoting to", "website SEO for");

  return out;
}

function computePL(d) {
  const out = {};
  if (!d.metaTitle.startsWith("Pozycjonowanie na ")) throw new Error("PL metaTitle pattern mismatch: " + d.metaTitle);
  out.metaTitle = d.metaTitle.replace("Pozycjonowanie na", "Pozycjonowanie stron internetowych na");
  if (!d.title.startsWith("Pozycjonowanie na ")) throw new Error("PL title pattern mismatch: " + d.title);
  out.title = d.title.replace("Pozycjonowanie na", "Pozycjonowanie stron internetowych na");

  // extract accusative "rynek X" / "rynki bałtyckie" phrase from metaTitle
  const m = d.metaTitle.match(/^Pozycjonowanie na (.+?) \| Bandziuk$/);
  if (!m) throw new Error("PL metaTitle phrase extraction failed: " + d.metaTitle);
  const rynekPhrase = m[1];

  if (!d.gridTitle.includes("pozycjonowanie na")) throw new Error("PL gridTitle pattern mismatch: " + d.gridTitle);
  out.gridTitle = d.gridTitle.replace("pozycjonowanie na", "pozycjonowanie stron internetowych na");

  if (!d.stepsTitle.match(/^Jak zaczyna się praca nad /)) throw new Error("PL stepsTitle pattern mismatch: " + d.stepsTitle);
  out.stepsTitle = "Jak zaczyna się pozycjonowanie stron na " + rynekPhrase;

  if (!d.faqTitle.includes("pozycjonowanie na")) throw new Error("PL faqTitle pattern mismatch: " + d.faqTitle);
  out.faqTitle = d.faqTitle.replace("pozycjonowanie na", "pozycjonowanie stron internetowych na");

  return out;
}

function computeRU(d) {
  const out = {};
  if (!d.metaTitle.startsWith("Продвижение на ")) throw new Error("RU metaTitle pattern mismatch: " + d.metaTitle);
  out.metaTitle = d.metaTitle.replace(/^Продвижение/, "SEO-продвижение сайта");
  if (!d.title.startsWith("Продвижение на ")) throw new Error("RU title pattern mismatch: " + d.title);
  out.title = d.title.replace(/^Продвижение/, "SEO-продвижение сайта");

  const m = d.metaTitle.match(/^Продвижение на (.+?) \| Bandziuk$/);
  if (!m) throw new Error("RU metaTitle phrase extraction failed: " + d.metaTitle);
  const rynokPhrase = m[1];

  if (!d.gridTitle.includes("продвижение на")) throw new Error("RU gridTitle pattern mismatch: " + d.gridTitle);
  out.gridTitle = d.gridTitle.replace("продвижение на", "SEO-продвижение сайта на");

  if (!d.stepsTitle.match(/^Как начинается работа над /)) throw new Error("RU stepsTitle pattern mismatch: " + d.stepsTitle);
  out.stepsTitle = "Как начинается раскрутка сайта под " + rynokPhrase;

  if (!d.faqTitle.includes("продвижении на")) throw new Error("RU faqTitle pattern mismatch: " + d.faqTitle);
  out.faqTitle = d.faqTitle.replace("продвижении на", "SEO-продвижении сайта на");

  return out;
}

async function main() {
  const ids = [];
  for (const m of MARKETS) ids.push(`singlepage-seo-${m}`, `singlepage-seo-${m}.pl`, `singlepage-seo-${m}.ru`);

  const query = `*[_id in $ids]{
    _id,
    language,
    title,
    "metaTitle": seo.metaTitle,
    "gridTitle": contentBlocks[_type == "gridBlock"][0].title,
    "stepsTitle": contentBlocks[_type == "stepsBlock"][0].title,
    "faqTitle": contentBlocks[_type == "faqBlock"][0].faq.title
  }`;
  const docs = await client.fetch(query, { ids });

  const byId = {};
  docs.forEach((d) => (byId[d._id] = d));

  const results = [];
  const errors = [];

  for (const m of MARKETS) {
    const en = byId[`singlepage-seo-${m}`];
    const pl = byId[`singlepage-seo-${m}.pl`];
    const ru = byId[`singlepage-seo-${m}.ru`];
    const entry = { market: m, en, pl, ru };
    try {
      entry.enNew = computeEN(en);
    } catch (e) {
      errors.push(`[${m}] EN: ${e.message}`);
    }
    try {
      entry.plNew = computePL(pl);
    } catch (e) {
      errors.push(`[${m}] PL: ${e.message}`);
    }
    try {
      entry.ruNew = computeRU(ru);
    } catch (e) {
      errors.push(`[${m}] RU: ${e.message}`);
    }
    results.push(entry);
  }

  if (errors.length) {
    console.log("=== PATTERN MISMATCHES ===");
    errors.forEach((e) => console.log(e));
    console.log("");
  }

  require("fs").writeFileSync(
    path.resolve(__dirname, "../drafts/promo-headings-diff.json"),
    JSON.stringify(results, null, 2)
  );
  console.log("Wrote drafts/promo-headings-diff.json, " + results.length + " markets, " + errors.length + " errors");
}

main().catch((e) => { console.error(e); process.exit(1); });
