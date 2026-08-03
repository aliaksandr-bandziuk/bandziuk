// scripts/verify-landing-h1-titles.cjs — checks H1 render + excerpt/subheadline + meta on all 60 landing docs.
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

const BASE_IDS = [
  "singlepage-multilingual-website",
  "singlepage-catalog-website",
  "singlepage-online-booking",
  "singlepage-dental-clinic-website",
  "singlepage-veterinary-clinic",
  "singlepage-accounting-firm",
  "singlepage-architecture-studio",
  "singlepage-photographer",
  "singlepage-language-school",
  "singlepage-fitness-studio",
  "singlepage-cleaning-company",
  "singlepage-logistics-company",
  "singlepage-hotel-website",
  "singlepage-travel-agency",
  "singlepage-restaurant",
  "singlepage-recruitment-agency",
  "singlepage-manufacturing-company",
  "singlepage-startup-website",
  "singlepage-web-development-warsaw",
  "singlepage-platform-migration",
];

function docIdFor(baseId, lang) {
  return lang === "en" ? baseId : `${baseId}.${lang}`;
}

function urlFor(lang, slug) {
  return lang === "en" ? `http://localhost:3000/${slug}` : `http://localhost:3000/${lang}/${slug}`;
}

function decodeEntities(s) {
  if (s == null) return s;
  return s
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&");
}

async function main() {
  const ids = BASE_IDS.flatMap((b) => ["en", "pl", "ru"].map((l) => docIdFor(b, l)));
  const docs = await client.fetch(
    `*[_id in $ids]{ _id, title, excerpt, "slug": slug, seo }`,
    { ids }
  );
  const docMap = Object.fromEntries(docs.map((d) => [d._id, d]));

  const rows = [];
  for (const baseId of BASE_IDS) {
    for (const lang of ["en", "pl", "ru"]) {
      const id = docIdFor(baseId, lang);
      const d = docMap[id];
      const slug = d.slug[lang]?.current;
      rows.push({ id, lang, title: d.title, excerpt: d.excerpt, metaTitle: d.seo?.metaTitle, metaDescription: d.seo?.metaDescription, url: urlFor(lang, slug) });
    }
  }

  let ok = 0, fail = 0;
  for (const r of rows) {
    try {
      const res = await fetch(r.url);
      const html = await res.text();
      const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      const h1 = h1Match ? decodeEntities(h1Match[1].replace(/<[^>]+>/g, "").trim()) : null;
      const descMatch = html.match(/class="[^"]*PropertyIntro_description[^"]*">([\s\S]*?)<\/p>/);
      const heroDesc = descMatch ? decodeEntities(descMatch[1].replace(/<[^>]+>/g, "").trim()) : null;
      const metaTitleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
      const pageMetaTitle = metaTitleMatch ? decodeEntities(metaTitleMatch[1].trim()) : null;

      const h1Ok = h1 === r.title;
      const excerptOk = heroDesc === r.excerpt;
      const metaOk = pageMetaTitle === r.metaTitle;

      if (h1Ok && excerptOk && metaOk) {
        ok++;
      } else {
        fail++;
        console.log(`\nFAIL ${r.id} (${res.status})`);
        if (!h1Ok) console.log(`  H1 mismatch: got "${h1}" expected "${r.title}"`);
        if (!excerptOk) console.log(`  hero excerpt mismatch: got "${heroDesc}" expected "${r.excerpt}"`);
        if (!metaOk) console.log(`  <title> mismatch: got "${pageMetaTitle}" expected "${r.metaTitle}"`);
      }
    } catch (e) {
      fail++;
      console.log(`\nERROR ${r.id}: ${e.message}`);
    }
  }

  console.log(`\n=== RESULT: ${ok}/${rows.length} OK, ${fail} FAIL ===`);
}

main().catch((e) => { console.error(e); process.exit(1); });
