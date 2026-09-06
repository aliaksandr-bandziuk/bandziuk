// Adds the France -> Switzerland link that was deferred in batch 4 (Switzerland didn't exist yet).
// Anchor: "western Switzerland" in France's SEO_TEXT (verified unique within that content array —
// it also appears once in the HERO excerpt, but that field isn't portable text and isn't touched here).
const path = require("path");
const { createClient } = require("@sanity/client");
const { insertInlineLink } = require("./lib/portable-text-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");

const MAIN_HUB_SLUG = { en: "services", pl: "oferty", ru: "uslugi" };
const GEO_HUB_SLUG = { en: "locations", pl: "lokalizacje", ru: "lokacii" };
const SWITZERLAND_SLUG = { en: "seo-for-swiss-market", pl: "pozycjonowanie-na-rynek-szwajcarski", ru: "prodvizhenie-na-shveytsarskiy-rynok" };
function prefix(lang) { return lang === "en" ? "" : `/${lang}`; }
function switzerlandUrl(lang) { return `${prefix(lang)}/${MAIN_HUB_SLUG[lang]}/${GEO_HUB_SLUG[lang]}/${SWITZERLAND_SLUG[lang]}`; }

const TARGETS = [
  { id: "singlepage-seo-france", lang: "en", anchor: "western Switzerland" },
  { id: "singlepage-seo-france.pl", lang: "pl", anchor: "zachodniej Szwajcarii" },
  { id: "singlepage-seo-france.ru", lang: "ru", anchor: "западной Швейцарии" },
];

async function main() {
  for (const t of TARGETS) {
    const doc = await client.fetch(`*[_id==$id][0]`, { id: t.id });
    if (!doc) throw new Error(`Doc not found: ${t.id}`);
    const blockIdx = doc.contentBlocks.findIndex((b) => b._type === "textContent");
    if (blockIdx === -1) throw new Error(`No textContent block in ${t.id}`);

    const before = doc.contentBlocks[blockIdx].content;
    const already = before.some((b) => (b.markDefs || []).some((m) => m._type === "link" && m.href === switzerlandUrl(t.lang)));
    if (already) {
      console.log(`${t.id}: link already present, skipping`);
      continue;
    }

    const updated = insertInlineLink(before, t.anchor, switzerlandUrl(t.lang));
    console.log(`${t.id}: inserted link "${t.anchor}" -> ${switzerlandUrl(t.lang)}`);

    if (APPLY) {
      const newContentBlocks = [...doc.contentBlocks];
      newContentBlocks[blockIdx] = { ...newContentBlocks[blockIdx], content: updated };
      await client.patch(t.id).set({ contentBlocks: newContentBlocks }).commit();
      console.log(`  -> patched ${t.id}`);
    }
  }

  if (!APPLY) console.log("\nDry run only. Re-run with --apply.");
  else console.log("\nAll done.");
}

main().catch((e) => { console.error(e); process.exit(1); });
