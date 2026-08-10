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

function key() { return Math.random().toString(16).slice(2, 14); }
function ref(id) { return { _key: key(), _type: "reference", _ref: id }; }

const SERVICES_INDEX_IDS = {
  en: "4de72361-ec2a-469d-8b56-813ddbf3adca",
  pl: "631d883e-6f87-4346-9c6d-48b596c2daa7",
  ru: "3774c0a1-8857-4149-be24-9a357af4be00",
};

const OLD_TITLE = { en: "SEO and AI-search services", pl: "SEO i widoczność w AI", ru: "SEO и видимость в ИИ-поиске" };
const RENAMED_TITLE = { en: "SEO for industries", pl: "SEO dla branż", ru: "SEO для отраслей" };
const NEW_GROUP_TITLE = { en: "AI visibility & search", pl: "Widoczność i wyszukiwanie AI", ru: "Видимость и поиск в ИИ" };

const NEW_SERVICE_IDS = {
  en: ["service-ai-visibility-audit", "service-ai-misinformation-correction", "service-ai-brand-monitoring", "service-ai-search-readiness"],
  pl: ["service-ai-visibility-audit.pl", "service-ai-misinformation-correction.pl", "service-ai-brand-monitoring.pl", "service-ai-search-readiness.pl"],
  ru: ["service-ai-visibility-audit.ru", "service-ai-misinformation-correction.ru", "service-ai-brand-monitoring.ru", "service-ai-search-readiness.ru"],
};

async function main() {
  for (const lang of ["en", "pl", "ru"]) {
    const id = SERVICES_INDEX_IDS[lang];
    const doc = await client.fetch(`*[_id == $id][0]{contentBlocks}`, { id });
    const blocks = doc.contentBlocks.map((b) => ({ ...b }));
    const idx = blocks.findIndex((b) => b._type === "relatedServicesBlock" && b.title === OLD_TITLE[lang]);
    if (idx === -1) throw new Error(`${lang}: group "${OLD_TITLE[lang]}" not found`);

    blocks[idx] = { ...blocks[idx], title: RENAMED_TITLE[lang] };

    const newGroup = {
      _key: key(),
      _type: "relatedServicesBlock",
      title: NEW_GROUP_TITLE[lang],
      items: NEW_SERVICE_IDS[lang].map(ref),
    };
    blocks.splice(idx + 1, 0, newGroup);

    console.log(`\n${APPLY ? "PATCHING" : "WOULD PATCH"} ${lang} servicesIndex (${id})`);
    console.log(`  [${idx}] renamed "${OLD_TITLE[lang]}" -> "${RENAMED_TITLE[lang]}" (${blocks[idx].items.length} items, unchanged)`);
    console.log(`  [${idx + 1}] NEW "${NEW_GROUP_TITLE[lang]}" -> ${newGroup.items.length} items`);

    if (APPLY) {
      await client.patch(id).set({ contentBlocks: blocks }).commit();
      console.log(`  PATCHED ${id}`);
    }
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
