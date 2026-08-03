// scripts/fix-batchC-blog-hrefs.cjs
// Fixes markDef hrefs that point at blog articles without the required /blog/ path segment.
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

const APPLY = process.argv.includes("--apply");

// wrong -> correct
const HREF_FIXES = {
  "/website-builder-vs-custom-development": "/blog/website-builder-vs-custom-development",
  "/pl/kreator-stron-czy-strona-na-zamowienie": "/pl/blog/kreator-stron-czy-strona-na-zamowienie",
  "/ru/konstruktor-ili-razrabotka-saita": "/ru/blog/konstruktor-ili-razrabotka-saita",

  "/website-redesign-without-losing-traffic": "/blog/website-redesign-without-losing-traffic",
  "/pl/redesign-strony-bez-utraty-ruchu": "/pl/blog/redesign-strony-bez-utraty-ruchu",
  "/ru/redizayn-sayta-bez-poteri-trafika": "/ru/blog/redizayn-sayta-bez-poteri-trafika",

  "/how-much-seo-costs": "/blog/how-much-seo-costs",
  "/pl/ile-kosztuje-pozycjonowanie-strony": "/pl/blog/ile-kosztuje-pozycjonowanie-strony",
  "/ru/skolko-stoit-prodvizhenie-saita": "/ru/blog/skolko-stoit-prodvizhenie-saita",

  "/how-clients-find-you-through-chatgpt": "/blog/how-clients-find-you-through-chatgpt",
  "/pl/jak-klienci-znajduja-specjalistow-przez-chatgpt": "/pl/blog/jak-klienci-znajduja-specjalistow-przez-chatgpt",
  "/ru/kak-klienty-nahodyat-cherez-chatgpt": "/ru/blog/kak-klienty-nahodyat-cherez-chatgpt",
};

const IDS = [
  "singlepage-startup-website", "singlepage-startup-website.pl", "singlepage-startup-website.ru",
  "singlepage-restaurant", "singlepage-restaurant.pl", "singlepage-restaurant.ru",
  "singlepage-photographer", "singlepage-photographer.pl", "singlepage-photographer.ru",
  "singlepage-fitness-studio", "singlepage-fitness-studio.pl", "singlepage-fitness-studio.ru",
  "singlepage-cleaning-company", "singlepage-cleaning-company.pl", "singlepage-cleaning-company.ru",
  "singlepage-language-school", "singlepage-language-school.pl", "singlepage-language-school.ru",
  "singlepage-platform-migration", "singlepage-platform-migration.pl", "singlepage-platform-migration.ru",
  "singlepage-web-development-warsaw", "singlepage-web-development-warsaw.pl", "singlepage-web-development-warsaw.ru",
  "singlepage-dental-clinic-website", "singlepage-dental-clinic-website.pl", "singlepage-dental-clinic-website.ru",
  "singlepage-veterinary-clinic", "singlepage-veterinary-clinic.pl", "singlepage-veterinary-clinic.ru",
  "singlepage-accounting-firm", "singlepage-accounting-firm.pl", "singlepage-accounting-firm.ru",
  "singlepage-multilingual-website", "singlepage-multilingual-website.pl", "singlepage-multilingual-website.ru",
];

async function main() {
  const docs = await client.fetch(`*[_id in $ids]{ _id, contentBlocks }`, { ids: IDS });
  const docMap = Object.fromEntries(docs.map((d) => [d._id, d]));

  const patches = [];
  for (const id of IDS) {
    const doc = docMap[id];
    if (!doc) { console.log(`MISSING ${id}`); continue; }
    let changed = false;
    const newBlocks = doc.contentBlocks.map((block) => {
      if (block._type !== "textContent") return block;
      const newContent = block.content.map((pt) => {
        if (!pt.markDefs || pt.markDefs.length === 0) return pt;
        let blockChanged = false;
        const newMarkDefs = pt.markDefs.map((md) => {
          if (md._type === "link" && HREF_FIXES[md.href]) {
            blockChanged = true;
            changed = true;
            return { ...md, href: HREF_FIXES[md.href] };
          }
          return md;
        });
        return blockChanged ? { ...pt, markDefs: newMarkDefs } : pt;
      });
      return { ...block, content: newContent };
    });
    if (changed) {
      patches.push({ id, contentBlocks: newBlocks });
      console.log(`${id}: hrefs to fix`);
    }
  }

  console.log(`\n${patches.length} document(s) need patching.`);
  if (!APPLY) {
    console.log("Dry run only (no --apply flag) — nothing was patched.");
    return;
  }

  for (const p of patches) {
    await client.patch(p.id).set({ contentBlocks: p.contentBlocks }).commit();
    console.log(`Patched ${p.id}`);
  }
  console.log("\nDone.");
}

main().catch((err) => { console.error(err); process.exit(1); });
