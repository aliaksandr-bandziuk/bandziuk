// scripts/apply-field-updates.cjs
//
// Точечная правка полей документов по плану из drafts/. Показывает «было → стало»,
// проверяет длину title (≤ 60) и description (≤ 160), пишет одной транзакцией.
//
// План: [{ "id": "...", "page": "/url", "set": { "title": "...", "seo.metaTitle": "..." } }]
//
//   node scripts/apply-field-updates.cjs drafts/<план>.json          → сухой прогон
//   node scripts/apply-field-updates.cjs drafts/<план>.json --apply  → записывает
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const PLAN_FILE = process.argv.find((a) => a.endsWith(".json"));
if (!PLAN_FILE) { console.error("Укажите план: node scripts/apply-field-updates.cjs drafts/<план>.json [--apply]"); process.exit(1); }
const plan = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), PLAN_FILE), "utf8"));
const items = Array.isArray(plan) ? plan : plan.items;

const get = (obj, dotted) => dotted.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
const LIMITS = { "seo.metaTitle": 60, "seo.metaDescription": 160 };

async function main() {
  let problems = 0;
  let tx = client.transaction();
  for (const item of items) {
    const doc = await client.getDocument(item.id);
    if (!doc) { console.log(`! нет документа ${item.id}`); problems++; continue; }
    console.log(`\n${item.page}  (${item.id})`);
    for (const [field, value] of Object.entries(item.set)) {
      const before = get(doc, field);
      const limit = LIMITS[field];
      const flag = limit && value.length > limit ? `  ! ${value.length} > ${limit}` : limit ? `  (${value.length})` : "";
      if (limit && value.length > limit) problems++;
      console.log(`  ${field}:\n    было:  ${before ?? "—"}\n    стало: ${value}${flag}`);
    }
    tx = tx.patch(item.id, (p) => p.set(item.set));
  }
  if (problems) { console.log(`\nОстановлено: ${problems} проблем(ы), ничего не записано.`); process.exit(1); }
  if (!APPLY) { console.log(`\nСухой прогон: ${items.length} документов, ничего не записано.`); return; }
  await tx.commit();
  console.log(`\nзаписано: ${items.length} документов`);
}

main().catch((e) => { console.error("failed:", e.message); process.exit(1); });
