// scripts/audit-translation-metadata.cjs
//
// Проверяет форму документов translation.metadata — тех, от которых зависит
// связь языковых версий и hreflang — и чинит их по текущей конвенции.
//
// Зачем появился 02.11.2026. Связь языков для группы ecommerce-web-design
// была создана в форме старых пакетных скриптов (assemble-batchN): поле
// `documentId` и обычные ссылки. Текущая конвенция, которую собирает
// create-landing.cjs и сама Studio, другая:
//   schemaTypes: ["singlepage"]
//   translations[]._type = "internationalizedArrayReferenceValue"
//   value: слабая ссылка (_weak: true) с _strengthenOnPublish
//
// Важно про серьёзность: проверка hreflang по всем 859 адресам 29.10.2026
// ошибок не нашла, а значительная часть страниц создавалась именно старой
// формой. То есть старая форма для hreflang рабочая, и расхождение касается
// в первую очередь Studio и единообразия. Поэтому скрипт по умолчанию только
// СМОТРИТ и ничего не пишет.
//
//   node scripts/audit-translation-metadata.cjs                      сводка по всем
//   node scripts/audit-translation-metadata.cjs --show               список несоответствий
//   node scripts/audit-translation-metadata.cjs --id <docId>         одна группа подробно
//   node scripts/audit-translation-metadata.cjs --id <docId> --apply привести к конвенции
//
// Запись идёт через createOrReplace одного документа: ссылки пересобираются
// из тех же _ref, что уже стоят, порядок языков сохраняется. Ничего, кроме
// формы, не меняется — ни состав языков, ни адреса страниц.

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

const argv = process.argv.slice(2);
const flag = (n) => { const i = argv.indexOf(`--${n}`); return i >= 0 ? argv[i + 1] : undefined; };
const APPLY = argv.includes("--apply");
const SHOW = argv.includes("--show");
const ID = flag("id");

// Чего не хватает документу относительно текущей конвенции.
function defects(d) {
  const out = [];
  if (!Array.isArray(d.schemaTypes) || !d.schemaTypes.length) out.push("нет schemaTypes");
  if ("documentId" in d && d.documentId != null) out.push("есть лишнее documentId");
  const tr = d.translations || [];
  if (!tr.length) out.push("пустой translations");
  if (tr.some((t) => t._type !== "internationalizedArrayReferenceValue")) out.push("translations[]._type не internationalizedArrayReferenceValue");
  if (tr.some((t) => t.value && t.value._weak !== true)) out.push("ссылки не слабые");
  if (tr.some((t) => t.value && !t.value._strengthenOnPublish)) out.push("нет _strengthenOnPublish");
  return out;
}

function rebuild(d) {
  return {
    _id: d._id,
    _type: "translation.metadata",
    schemaTypes: Array.isArray(d.schemaTypes) && d.schemaTypes.length ? d.schemaTypes : ["singlepage"],
    translations: (d.translations || []).map((t) => ({
      _key: t._key,
      _type: "internationalizedArrayReferenceValue",
      value: { _type: "reference", _ref: t.value._ref, _weak: true, _strengthenOnPublish: { type: "singlepage" } },
    })),
  };
}

async function main() {
  const docs = await client.fetch(
    `*[_type == "translation.metadata" && !(_id in path("drafts.**"))]{_id, _rev, schemaTypes, documentId, translations}`,
  );
  const checked = docs.map((d) => ({ d, bad: defects(d) }));
  const bad = checked.filter((x) => x.bad.length);

  if (ID) {
    const one = checked.find((x) => x.d._id === ID);
    if (!one) { console.log(`Документа ${ID} нет.`); process.exit(1); }
    console.log(`${ID}: языков ${(one.d.translations || []).length} — ${(one.d.translations || []).map((t) => t._key).join(", ")}`);
    console.log(one.bad.length ? `несоответствия: ${one.bad.join("; ")}` : "форма соответствует конвенции, чинить нечего");
    if (!one.bad.length || !APPLY) {
      if (one.bad.length) console.log("\nДля записи добавь --apply.");
      return;
    }
    const next = rebuild(one.d);
    if (next.translations.some((t) => !t.value._ref)) { console.log("Останавливаюсь — у какой-то записи нет _ref."); process.exit(1); }
    await client.createOrReplace(next);
    console.log(`Переписан ${ID} по конвенции: ${next.translations.map((t) => t._key).join(", ")}`);
    console.log("Связь языков влияет на hreflang — после деплоя проверить его на этих адресах.");
    return;
  }

  console.log(`документов translation.metadata: ${docs.length}`);
  console.log(`соответствуют конвенции: ${docs.length - bad.length}`);
  console.log(`расходятся: ${bad.length}\n`);
  const byDefect = {};
  for (const x of bad) for (const r of x.bad) byDefect[r] = (byDefect[r] || 0) + 1;
  for (const [r, n] of Object.entries(byDefect).sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(4)}  ${r}`);
  if (SHOW) {
    console.log("\n## расходящиеся документы:");
    for (const x of bad) console.log(`  ${x.d._id}  [${(x.d.translations || []).map((t) => t._key).join(",")}]  ${x.bad.join("; ")}`);
  } else if (bad.length) {
    console.log("\nСписок: --show. Починить один: --id <docId> --apply");
  }
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
