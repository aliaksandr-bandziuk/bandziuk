// scripts/dataforseo/pseo-inventory.cjs
//
// Инвентаризация того, что на сайте уже есть, и языковых пробелов.
//
// Зачем. Прежде чем планировать новые страницы, надо знать, какие темы уже
// закрыты. Карта сайта показала, что сегментный кластер («сайт для фотографа»,
// «сайт для психолога», «сайт для юриста») уже существует по-английски — то
// есть задача не «создать страницы», а «перевести существующие на польский и
// русский, где спрос по данным выше, а выдача мягче».
//
// Что считает:
//   — все страницы, статьи и кейсы по трём языкам
//   — для каждой темы: есть ли версия на en, pl, ru
//   — таблицу пробелов: тема есть на одном языке и отсутствует на других
//   — документы, которые не подошли ни под одну схему связывания переводов
//     (чтобы расхождение не спрятать)
//
// Темы связываются двумя способами и результаты сверяются:
//   1. по идентификатору: базовый для en, с суффиксом .pl / .ru для остальных
//   2. по связям translation.metadata, если они заведены
//
// Только чтение Sanity, ничего не меняет, API DataForSEO не вызывает.
//
//   node scripts/dataforseo/pseo-inventory.cjs

const fs = require("fs");
const path = require("path");
const groq = String.raw;
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "pseo");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const LANGS = ["en", "pl", "ru"];

/**
 * Собирает заголовки страницы: H1–H4 из текстовых блоков и вопросы FAQ.
 *
 * Зачем. Сопоставление спроса со страницами читало только название страницы и
 * слаг. Из-за этого запрос, на который страница отвечает разделом H2 уже год,
 * попадал в «переформулировать»: так предлагалось дописать раздел про цену
 * разработки на страницу, где этот раздел и цены стоят с самого начала.
 */
/**
 * Заголовки страницы с точным адресом в документе — для правок.
 * Адрес — путь Sanity по _key: contentBlocks[_key=="a"].content[_key=="b"]...
 * По нему скрипт правок меняет ровно этот заголовок и ничего больше.
 */
function headingsWithPaths(doc) {
  const out = [];
  const walk = (node, p) => {
    if (Array.isArray(node)) {
      node.forEach((v, i) => walk(v, v && v._key ? `${p}[_key=="${v._key}"]` : `${p}[${i}]`));
      return;
    }
    if (!node || typeof node !== "object") return;
    if (node._type === "block" && /^h[1-4]$/.test(String(node.style || ""))) {
      const spans = (node.children || []).filter((c) => typeof c.text === "string");
      const text = spans.map((c) => c.text).join("").trim();
      if (text) out.push({ kind: node.style, text, path: p, spans: spans.length,
        spanPath: spans.length === 1 && spans[0]._key ? `${p}.children[_key=="${spans[0]._key}"].text` : "" });
      return;
    }
    for (const f of ["question", "title", "heading", "label"]) {
      if (typeof node[f] === "string" && node[f].trim()) out.push({ kind: f, text: node[f].trim(), path: `${p}.${f}`, block: node._type || "" });
    }
    for (const [k, v] of Object.entries(node)) {
      if (k.startsWith("_") || !v || typeof v !== "object") continue;
      walk(v, `${p}.${k}`);
    }
  };
  walk(doc.contentBlocks, "contentBlocks");
  return out;
}

/** Что реально стоит в H1 на странице. См. [...slug]/page.tsx и PropertyIntro:
 *  H1 рисуется только при previewImage && allowIntroBlock, текст — heading || title. */
function realH1(doc) {
  if (doc.hasPreview && doc.allowIntroBlock) {
    return doc.heading ? { text: doc.heading, field: "heading" } : { text: doc.title || "", field: "title" };
  }
  return { text: "", field: "нет H1: шапка страницы выключена" };
}

function headingsOf(doc) {
  const out = [];
  const walk = (node) => {
    if (Array.isArray(node)) return node.forEach(walk);
    if (!node || typeof node !== "object") return;
    if (node._type === "block" && /^h[1-4]$/.test(String(node.style || ""))) {
      const text = (node.children || []).map((c) => c.text || "").join("").trim();
      if (text) out.push(text);
    }
    // вопросы FAQ лежат отдельным полем, а не блоком со style
    for (const f of ["question", "title", "heading", "label"]) {
      if (typeof node[f] === "string" && node[f].trim() && node._type !== "block") out.push(node[f].trim());
    }
    for (const v of Object.values(node)) if (v && typeof v === "object") walk(v);
  };
  walk(doc.contentBlocks);
  return [...new Set(out)];
}

/** Снимает языковой суффикс с идентификатора: singlepage-x.pl → singlepage-x */
const baseId = (id) => String(id).replace(/\.(pl|ru)$/, "");

function writeCsv(file, cols, rows) {
  const esc = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
  fs.writeFileSync(file, [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n", "utf8");
}

async function main() {
  if (!process.env.SANITY_API_TOKEN) throw new Error("SANITY_API_TOKEN не найден в .env.local");

  const docs = await client.fetch(groq`
    *[_type in ["singlepage", "blog", "portfolio"] && defined(language) && !(_id in path("drafts.**"))]{
      _id, _type, language, title, heading, pageType, allowIntroBlock, excerpt,
      "hasPreview": defined(previewImage),
      "metaTitle": seo.metaTitle,
      "metaDescription": seo.metaDescription,
      contentBlocks,
      "slug": select(
        language == 'en' => slug.en.current,
        language == 'pl' => slug.pl.current,
        language == 'ru' => slug.ru.current
      ),
      "parent": parentPage->_id
    }
  `);

  // связи переводов, если заведены
  const meta = await client.fetch(groq`
    *[_type == "translation.metadata"]{ "ids": translations[].value->_id }
  `).catch(() => []);

  const metaGroup = new Map();
  for (const m of meta || []) {
    const ids = (m.ids || []).filter(Boolean);
    if (ids.length < 2) continue;
    const key = baseId(ids.slice().sort()[0]);
    for (const id of ids) metaGroup.set(id, key);
  }

  // Черновики: если у страницы есть неопубликованный черновик, правка
  // опубликованной версии пропадёт при публикации черновика. Помечаем.
  const draftIds = new Set(await client.fetch(groq`*[_id in path("drafts.**") && _type == "singlepage"]._id`));
  const dump = [];

  // группировка по теме
  const topics = new Map();
  let bySuffix = 0;
  let byMeta = 0;
  const orphans = [];

  for (const d of docs) {
    if (!LANGS.includes(d.language)) { orphans.push({ ...d, why: "язык вне en/pl/ru" }); continue; }
    let key = metaGroup.get(d._id);
    if (key) byMeta += 1;
    else { key = baseId(d._id); bySuffix += 1; }

    if (!topics.has(key)) topics.set(key, { key, type: d._type, pageType: d.pageType || "", parent: d.parent || "" });
    const t = topics.get(key);
    t[`title_${d.language}`] = d.title || "";
    t[`slug_${d.language}`] = d.slug || "";
    t[`id_${d.language}`] = d._id;
    t[`meta_${d.language}`] = d.metaTitle || "";
    t[`headings_${d.language}`] = headingsOf(d).join(" | ");
    if (d._type === "singlepage") {
      const h1 = realH1(d);
      t[`h1_${d.language}`] = h1.text;
      t[`h1field_${d.language}`] = h1.field;
      dump.push({
        id: d._id, lang: d.language, slug: d.slug, title: d.title || "", heading: d.heading || "",
        hasDraft: draftIds.has(`drafts.${d._id}`), h1: h1.text, h1Field: h1.field,
        metaTitle: d.metaTitle || "", metaDescription: d.metaDescription || "", excerpt: d.excerpt || "",
        headings: headingsWithPaths(d),
      });
    }
    if (!d.slug) orphans.push({ ...d, why: "нет слага" });
  }

  const rows = [...topics.values()].map((t) => {
    const have = LANGS.filter((l) => t[`id_${l}`]);
    return {
      ...t,
      langs: have.join("+"),
      missing: LANGS.filter((l) => !t[`id_${l}`]).join("+"),
      count: have.length,
    };
  });

  const COLS = ["key", "type", "pageType", "langs", "missing",
    "title_en", "h1_en", "h1field_en", "slug_en", "meta_en", "headings_en",
    "title_pl", "h1_pl", "h1field_pl", "slug_pl", "meta_pl", "headings_pl",
    "title_ru", "h1_ru", "h1field_ru", "slug_ru", "meta_ru", "headings_ru", "parent"];
  fs.mkdirSync(OUT, { recursive: true });
  writeCsv(path.join(OUT, "site-inventory.csv"), COLS, rows.sort((a, b) => a.type.localeCompare(b.type) || String(a.slug_en || a.key).localeCompare(String(b.slug_en || b.key))));

  fs.writeFileSync(path.join(OUT, "pages-dump.json"), JSON.stringify(dump, null, 1), "utf8");

  const gaps = rows.filter((r) => r.missing).sort((a, b) => a.type.localeCompare(b.type) || String(a.slug_en || a.key).localeCompare(String(b.slug_en || b.key)));
  writeCsv(path.join(OUT, "site-gaps.csv"), COLS, gaps);

  // ------------------------------------------------------------- отчёт --
  const lines = [];
  const say = (l = "") => { console.log(l); lines.push(l); };

  say("# Что на сайте уже есть и где языковые пробелы");
  say("");
  say(`Снято: ${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC.`);
  say(`Документов: ${docs.length}. Тем: ${rows.length}.`);
  say(`Связано по суффиксу идентификатора: ${bySuffix}, по translation.metadata: ${byMeta}.`);
  say("");

  say("## Сколько документов на каждом языке");
  say("");
  say("| тип | en | pl | ru | всего тем |");
  say("| --- | --- | --- | --- | --- |");
  for (const type of ["singlepage", "blog", "portfolio"]) {
    const sel = rows.filter((r) => r.type === type);
    if (!sel.length) continue;
    const n = (l) => sel.filter((r) => r[`id_${l}`]).length;
    say(`| ${type} | ${n("en")} | ${n("pl")} | ${n("ru")} | ${sel.length} |`);
  }
  say("");

  say("## Полнота по языкам");
  say("");
  say("| языков у темы | тем |");
  say("| --- | --- |");
  for (const c of [3, 2, 1]) say(`| ${c} | ${rows.filter((r) => r.count === c).length} |`);
  say("");

  say(`## Пробелы: ${gaps.length} тем переведены не полностью`);
  say("");
  const byMissing = new Map();
  for (const g of gaps) byMissing.set(g.missing, (byMissing.get(g.missing) || 0) + 1);
  say("| чего не хватает | тем |");
  say("| --- | --- |");
  for (const [m, n] of [...byMissing.entries()].sort((a, b) => b[1] - a[1])) say(`| ${m} | ${n} |`);
  say("");

  // главное: страницы (не блог), которые есть на en и отсутствуют на pl и ru
  const enOnlyPages = gaps.filter((g) => g.type === "singlepage" && g.langs === "en" && g.missing === "pl+ru");
  say(`## Страницы, которые есть только по-английски: ${enOnlyPages.length}`);
  say("");
  say("Это главный результат инвентаризации. Такую страницу не надо придумывать —");
  say("содержимое уже написано, нужен перевод и локальные факты.");
  say("");
  for (const g of enOnlyPages) say(`- \`/${g.slug_en}\` — ${g.title_en}`);
  say("");

  const partial = gaps.filter((g) => g.count === 2);
  if (partial.length) {
    say(`## Темы на двух языках из трёх: ${partial.length}`);
    say("");
    for (const g of partial.slice(0, 60)) {
      say(`- ${g.langs} (нет ${g.missing}) — ${g.title_en || g.title_pl || g.title_ru}`);
    }
    say("");
  }

  if (orphans.length) {
    say(`## Документы, требующие внимания: ${orphans.length}`);
    say("");
    for (const o of orphans.slice(0, 40)) say(`- ${o._id} (${o._type}, ${o.language}) — ${o.why}`);
    say("");
  }

  const withHeadings = rows.filter((r) => LANGS.some((l) => r[`headings_${l}`]));
  say(`## Заголовки внутри страниц`);
  say("");
  say(`Собраны у ${withHeadings.length} тем из ${rows.length}. Сопоставление спроса теперь`);
  say("сверяется и с ними: запрос, на который страница отвечает разделом H2, больше");
  say("не попадёт в «переформулировать».");
  say("");

  say("Полные данные: research/pseo/site-inventory.csv, research/pseo/site-gaps.csv");

  fs.writeFileSync(path.join(OUT, "site-inventory.md"), lines.join("\n") + "\n", "utf8");
  const noH1 = dump.filter((d) => !d.h1);
  console.log(`\nСтраниц без H1 (шапка выключена): ${noH1.length}. С неопубликованным черновиком: ${dump.filter((d) => d.hasDraft).length}.`);
  console.log("Записано: research/pseo/site-inventory.csv, site-gaps.csv, site-inventory.md, pages-dump.json");
}

main().catch((e) => { console.error("Ошибка:", e.message); process.exit(1); });
