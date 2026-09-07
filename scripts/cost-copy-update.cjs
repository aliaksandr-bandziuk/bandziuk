// scripts/cost-copy-update.cjs
//
// Ценовой кластер: страницы SEO-аудита (3 локали) + польская ценовая статья.
// Основание: drafts/cost-cluster-plan-2026-09.md.
//
//   node scripts/cost-copy-update.cjs --dump   → drafts/cost-sanity-dump.json, ничего не меняет
//   node scripts/cost-copy-update.cjs          → сухой прогон, ничего не меняет
//   node scripts/cost-copy-update.cjs --apply  → применяет
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

const DUMP = process.argv.includes("--dump");

// [_type, language, slug]
const TARGETS = [
  ["singlepage", "en", "seo-audit"],
  ["singlepage", "ru", "seo-audit-saita"],
  ["singlepage", "pl", "audyt-seo-strony-internetowej"],
  ["blog", "pl", "ile-kosztuje-pozycjonowanie-strony"],
];

const MONEY = /\d[\d\s  ]*(zł|PLN|€|EUR|\$)|(?:od|from|от)\s+\d/i;

function blockText(b) {
  return (b.children || []).map((c) => c.text || "").join("");
}

/**
 * Обход документа. Собирает заголовки portable text, поля-заголовки и вопросы,
 * и отдельно — ЛЮБУЮ строку, похожую на цену, вместе с путём. Цены на этих
 * страницах лежат не в одном месте: часть в списках, часть в ответах FAQ.
 */
function walk(node, trail, acc) {
  if (Array.isArray(node)) {
    node.forEach((item, i) => {
      const step = item && item._key ? `[_key=="${item._key}"]` : `[${i}]`;
      walk(item, trail + step, acc);
    });
    return;
  }
  if (!node || typeof node !== "object") return;

  if (node._type === "block" && /^h[1-4]$/.test(node.style || "")) {
    acc.headings.push({
      path: trail,
      style: node.style,
      spanCount: (node.children || []).length,
      text: blockText(node),
    });
  }
  if (node._type === "block" && node.style === "normal") {
    const txt = blockText(node);
    if (MONEY.test(txt)) {
      acc.money.push({ path: trail, kind: "portable-text", spanCount: (node.children || []).length, text: txt });
    }
  }

  for (const [k, v] of Object.entries(node)) {
    if (typeof v === "string") {
      const p = trail ? `${trail}.${k}` : k;
      if (["question", "title", "pretitle", "subtitle", "heading", "label"].includes(k)) {
        acc.fields.push({ path: p, key: k, value: v });
      }
      if (MONEY.test(v)) acc.money.push({ path: p, kind: "string-field", text: v });
      continue;
    }
    walk(v, trail ? `${trail}.${k}` : k, acc);
  }
}


const APPLY = process.argv.includes("--apply");
const PATCHES = require("./cost-copy-patches.json");

/** Значение по пути вида contentBlocks[_key=="x"].content[_key=="y"].children[_key=="z"].text */
function readPath(doc, path) {
  let node = doc;
  const parts = path.split(".");
  for (const part of parts) {
    const m = part.match(/^([A-Za-z0-9_]+)(\[_key=="([^"]+)"\])?$/);
    if (!m || node == null) return undefined;
    node = node[m[1]];
    if (m[3] !== undefined) {
      if (!Array.isArray(node)) return undefined;
      node = node.find((x) => x && x._key === m[3]);
    }
  }
  return node;
}

async function runPatches(dumped) {
  const report = [];
  const say = (l = "") => { console.log(l); report.push(l); };
  let total = 0;

  for (const d of dumped) {
    const cfg = PATCHES[d.slug];
    if (!cfg) continue;
    const doc = await client.getDocument(d._id);
    const ops = {};
    const warns = [];

    if (cfg.metaTitle && doc.seo?.metaTitle !== cfg.metaTitle)
      ops["seo.metaTitle"] = { old: doc.seo?.metaTitle, new: cfg.metaTitle };
    if (cfg.metaDescription && doc.seo?.metaDescription !== cfg.metaDescription)
      ops["seo.metaDescription"] = { old: doc.seo?.metaDescription, new: cfg.metaDescription };

    for (const rep of cfg.textReplacements || []) {
      const current = readPath(doc, rep.path);
      if (current === undefined) { warns.push(`путь не найден: ${rep.path}`); continue; }
      if (current !== rep.old) {
        warns.push(`текст изменился, пропускаю. Ожидалось "${rep.old}", в документе "${current}"`);
        continue;
      }
      ops[rep.path] = { old: current, new: rep.new, why: rep.why };
    }

    // Остатки евро на польской странице: если валюту меняем, то везде, а не в одной строке.
    if (d.lang === "pl") {
      const leftovers = JSON.stringify(doc).match(/[^"]{0,60}(€|EUR)[^"]{0,20}/g) || [];
      const real = leftovers.filter((x) => !/fill|var\(/.test(x));
      if (real.length > (cfg.textReplacements || []).length)
        warns.push(`на польской странице ещё ${real.length} упоминаний евро — проверь вручную`);
    }

    say(`\n${"=".repeat(70)}\n${d.lang}/${d.slug}  (${d._id})`);
    for (const [path, v] of Object.entries(ops)) {
      say(`  ${path}`);
      say(`    было : ${v.old}`);
      say(`    стало: ${v.new}`);
      if (v.why) say(`    причина: ${v.why}`);
    }
    if (!Object.keys(ops).length) say("  правок нет");
    warns.forEach((w) => say(`  ! ${w}`));
    total += Object.keys(ops).length;

    if (APPLY && Object.keys(ops).length) {
      const setObj = {};
      for (const [path, v] of Object.entries(ops)) setObj[path] = v.new;
      await client.patch(d._id).set(setObj).commit();
      say(`  → применено: ${Object.keys(ops).length} полей`);
    }
  }

  say(`\nИтого правок: ${total}.`);
  if (!APPLY) say("Это сухой прогон. Применить: node scripts/cost-copy-update.cjs --apply");
  const rp = path.resolve(__dirname, APPLY ? "../drafts/cost-applied.txt" : "../drafts/cost-dry-run.txt");
  fs.writeFileSync(rp, report.join("\n"), "utf8");
  console.log(`\nОтчёт записан: drafts/${APPLY ? "cost-applied.txt" : "cost-dry-run.txt"}`);
}

async function main() {
  const out = [];
  for (const [type, lang, slug] of TARGETS) {
    const doc = await client.fetch(
      `*[_type == $type && language == $lang && slug[$lang].current == $slug][0]`,
      { type, lang, slug }
    );
    if (!doc) {
      console.log(`НЕ НАЙДЕН: ${type} / ${lang} / ${slug}`);
      continue;
    }
    const acc = { headings: [], fields: [], money: [] };
    walk(doc.contentBlocks || [], "contentBlocks", acc);
    out.push({
      _id: doc._id,
      type,
      lang,
      slug,
      title: doc.title,
      excerpt: doc.excerpt,
      seo: doc.seo,
      blocks: (doc.contentBlocks || []).map((b) => ({ _type: b._type, _key: b._key })),
      headings: acc.headings,
      fields: acc.fields,
      money: acc.money,
    });
    console.log(
      `${lang}/${slug}: заголовков ${acc.headings.length}, полей ${acc.fields.length}, строк с ценой ${acc.money.length}`
    );
  }

  if (!DUMP) {
    return runPatches(out);
  }
  const target = path.resolve(__dirname, "../drafts/cost-sanity-dump.json");
  fs.writeFileSync(target, JSON.stringify(out, null, 2), "utf8");
  console.log(`\nВыгружено в drafts/cost-sanity-dump.json (${(fs.statSync(target).size / 1024).toFixed(1)} КБ)`);
}

main().catch((e) => {
  console.error("Ошибка:", e.message);
  process.exit(1);
});
