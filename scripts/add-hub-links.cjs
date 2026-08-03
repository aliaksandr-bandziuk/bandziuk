// scripts/add-hub-links.cjs
// Adds 3 relatedServicesBlock groups (By industry / By capability / By location) to the
// servicesIndex page (/services, /oferty, /uslugi) in all 3 locales.
const path = require("path");
const crypto = require("crypto");
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

function key() {
  return crypto.randomBytes(6).toString("hex");
}

const SERVICES_INDEX = {
  en: "4de72361-ec2a-469d-8b56-813ddbf3adca",
  pl: "631d883e-6f87-4346-9c6d-48b596c2daa7",
  ru: "3774c0a1-8857-4149-be24-9a357af4be00",
};

// baseId -> lang -> docId. lang === "en" uses baseId itself, others use baseId + "." + lang.
function ids(baseId) {
  return { en: baseId, pl: `${baseId}.pl`, ru: `${baseId}.ru` };
}

const BY_INDUSTRY = [
  ids("singlepage-dental-clinic-website"),
  ids("singlepage-veterinary-clinic"),
  ids("singlepage-accounting-firm"),
  ids("singlepage-architecture-studio"),
  ids("singlepage-photographer"),
  ids("singlepage-language-school"),
  ids("singlepage-fitness-studio"),
  ids("singlepage-cleaning-company"),
  ids("singlepage-restaurant"),
  ids("singlepage-hotel-website"),
  ids("singlepage-travel-agency"),
  ids("singlepage-logistics-company"),
  ids("singlepage-recruitment-agency"),
  ids("singlepage-manufacturing-company"),
  ids("singlepage-startup-website"),
  ids("singlepage-psychologists-therapists"),
  ids("singlepage-real-estate-agency-website"),
  ids("singlepage-property-developer-website"),
  { en: "f4a4b3c0-2d0e-4416-9909-04dcc667318b", pl: "9f22ba45-fc9d-4644-8d6f-ec4696618d63", ru: "2fedad09-513a-438c-950a-8562d0a89b8f" }, // lawyer-website-development
  { en: "dab61d1a-28d8-4a10-a2c4-de17399cdbe7", pl: "a2b00f93-6d28-4b36-b2c9-e5c01867b5b4", ru: "4128719c-e187-4191-9120-eee3f5f9fa6f" }, // beauty (parent)
];

const BY_CAPABILITY = [
  ids("singlepage-multilingual-website"),
  ids("singlepage-catalog-website"),
  ids("singlepage-online-booking"),
  ids("singlepage-platform-migration"),
];

const BY_LOCATION = [ids("singlepage-web-development-warsaw")];

const GROUP_TITLES = {
  en: { industry: "Websites by industry", capability: "By capability", location: "By location" },
  pl: { industry: "Strony według branży", capability: "Według funkcji", location: "Według lokalizacji" },
  ru: { industry: "Сайты по отраслям", capability: "По возможностям", location: "По локации" },
};

function buildBlock(titleKey, lang, group) {
  return {
    _key: key(),
    _type: "relatedServicesBlock",
    title: GROUP_TITLES[lang][titleKey],
    items: group.map((entry) => ({ _key: key(), _type: "reference", _ref: entry[lang] })),
  };
}

async function main() {
  const docIds = Object.values(SERVICES_INDEX);
  const existing = await client.fetch(`*[_id in $ids]{ _id, contentBlocks }`, { ids: docIds });
  const docMap = Object.fromEntries(existing.map((d) => [d._id, d]));

  console.log("=== PLAN ===");
  for (const lang of ["en", "pl", "ru"]) {
    const id = SERVICES_INDEX[lang];
    const doc = docMap[id];
    if (!doc) {
      console.log(`MISSING doc ${id}`);
      continue;
    }
    console.log(`\n${id} (current contentBlocks: ${doc.contentBlocks?.length || 0})`);
    console.log(`  + relatedServicesBlock "${GROUP_TITLES[lang].industry}" (${BY_INDUSTRY.length} items)`);
    console.log(`  + relatedServicesBlock "${GROUP_TITLES[lang].capability}" (${BY_CAPABILITY.length} items)`);
    console.log(`  + relatedServicesBlock "${GROUP_TITLES[lang].location}" (${BY_LOCATION.length} items)`);
  }

  if (!APPLY) {
    console.log("\nDry run only (no --apply flag) — nothing was patched.");
    return;
  }

  console.log("\n=== PATCHING ===");
  for (const lang of ["en", "pl", "ru"]) {
    const id = SERVICES_INDEX[lang];
    const doc = docMap[id];
    if (!doc) continue;
    const newBlocks = [
      buildBlock("industry", lang, BY_INDUSTRY),
      buildBlock("capability", lang, BY_CAPABILITY),
      buildBlock("location", lang, BY_LOCATION),
    ];
    const contentBlocks = [...(doc.contentBlocks || []), ...newBlocks];
    await client.patch(id).set({ contentBlocks }).commit();
    console.log(`Patched ${id} — contentBlocks now ${contentBlocks.length}`);
  }
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
