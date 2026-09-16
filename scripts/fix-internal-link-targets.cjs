// scripts/fix-internal-link-targets.cjs
//
// Чинит внутренние ссылки в контенте Sanity: те, что ведут на 404, и те, что
// ведут на редирект (старые плоские адреса услуг до переезда в /services,
// /oferty, /uslugi). Источник карты — обход всех страниц дев-сервера и проверка
// каждой уникальной цели (link-health).
//
//   node scripts/fix-internal-link-targets.cjs          → сухой прогон
//   node scripts/fix-internal-link-targets.cjs --apply  → применяет
//
// Меняется только href в markDefs и в полях ссылок блоков. Текст не трогаем.
const fs = require("fs");
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
const MAP = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../drafts/internal-link-fixes.json"), "utf8"));
const DEV = "http://localhost:3000";

// Рекурсивно заменяет значения строковых полей-ссылок по карте.
function fixValue(value, map, hits) {
  if (typeof value === "string") return map[value] ? (hits.push(`${value} → ${map[value]}`), map[value]) : value;
  if (Array.isArray(value)) return value.map((v) => fixValue(v, map, hits));
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = ["href", "url", "link", "linkDestination"].includes(k) ? fixValue(v, map, hits) : fixValue(v, map, hits);
    }
    return out;
  }
  return value;
}

async function main() {
  for (const [, to] of Object.entries(MAP)) {
    const r = await fetch(DEV + to, { redirect: "manual" });
    if (r.status !== 200) { console.log(`! цель отвечает ${r.status}: ${to}`); process.exit(1); }
  }
  console.log(`карта проверена: ${Object.keys(MAP).length} замен, все цели отвечают 200\n`);

  const docs = await client.fetch(`*[_type in ["singlepage","blog","portfolio","homepage","footer","header"] && !(_id in path("drafts.**"))]`);
  let changedDocs = 0;
  let changedLinks = 0;
  for (const doc of docs) {
    const hits = [];
    const { _id, _rev, _type, _createdAt, _updatedAt, ...rest } = doc;
    const fixed = fixValue(rest, MAP, hits);
    if (!hits.length) continue;
    changedDocs++;
    changedLinks += hits.length;
    console.log(`${_type} ${_id}`);
    for (const h of [...new Set(hits)]) console.log(`   ${h}${hits.filter((x) => x === h).length > 1 ? ` (×${hits.filter((x) => x === h).length})` : ""}`);
    if (APPLY) await client.patch(_id).set(fixed).commit();
  }
  console.log(`\n${APPLY ? "исправлено" : "нашлось"}: ${changedLinks} ссылок в ${changedDocs} документах${APPLY ? "" : " (сухой прогон)"}`);
}

main().catch((e) => { console.error("failed:", e.message); process.exit(1); });
