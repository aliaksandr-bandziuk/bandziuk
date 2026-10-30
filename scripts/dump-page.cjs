// scripts/dump-page.cjs
//
// Read-only. Dumps a published page from Sanity into markdown so its text can
// be read and rewritten offline. Written 30.10.2026 for the thin-page work
// (claude/thin-pages-plan.md): pages-dump.json carries only headings, and a
// page cannot be rewritten from its headings.
//
// The dump keeps the block boundaries visible — each block is announced with
// its _type and _key — because the rewrite has to know which text lives in
// portable text and which lives in plain string fields of the old template
// (benefitsBlock, serviceFeaturesBlock, stepsBlock and the like).
//
// Usage:
//   node scripts/dump-page.cjs --slug pricing
//   node scripts/dump-page.cjs --slug ceny,uslugi,oferty
//   node scripts/dump-page.cjs --slug seo-audit --out drafts/current
//
// Writes drafts/current/<lang>-<slug>.md by default and prints where.

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

const arg = (n) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : null; };
const SLUGS = (arg("--slug") || "").split(",").map((s) => s.trim()).filter(Boolean);
const OUT = path.resolve(__dirname, "..", arg("--out") || "drafts/current");
if (!SLUGS.length) { console.error('Нужен --slug: --slug pricing,ceny'); process.exit(1); }

// Portable text -> markdown. Links are kept, because a rewrite must not drop
// internal links by accident.
function pt(blocks, out) {
  for (const b of blocks || []) {
    if (!b || b._type !== "block") {
      if (b && b._type) out.push(`  [вложенный блок ${b._type}]`);
      continue;
    }
    const marks = new Map((b.markDefs || []).map((m) => [m._key, m]));
    const text = (b.children || []).map((c) => {
      const t = c && c.text ? c.text : "";
      const link = (c.marks || []).map((k) => marks.get(k)).find((m) => m && m._type === "link");
      return link ? `[${t}](${link.href})` : t;
    }).join("");
    const style = b.style || "normal";
    if (style === "h1") out.push(`# ${text}`);
    else if (style === "h2") out.push(`## ${text}`);
    else if (style === "h3") out.push(`### ${text}`);
    else if (style === "h4") out.push(`#### ${text}`);
    else if (style === "blockquote") out.push(`> ${text}`);
    else if (b.listItem) out.push(`- ${text}`);
    else out.push(text);
    out.push("");
  }
}

const SKIP = new Set(["_key", "_type", "_ref", "asset", "hotspot", "crop", "icon"]);

// Everything that is not portable text: the old template's plain strings,
// tables, FAQ entries, offers. Printed as key: value so nothing is lost.
function plain(node, out, depth, key) {
  const pad = "  ".repeat(depth);
  if (node === null || node === undefined) return;
  if (typeof node === "string" || typeof node === "number" || typeof node === "boolean") {
    out.push(`${pad}${key ? key + ": " : ""}${node}`);
    return;
  }
  if (Array.isArray(node)) {
    if (node.length && node.every((x) => x && x._type === "block")) { pt(node, out); return; }
    node.forEach((x, i) => plain(x, out, depth, key ? `${key}[${i}]` : `[${i}]`));
    return;
  }
  if (typeof node !== "object") return;
  if (node._type === "block") { pt([node], out); return; }
  const keys = Object.keys(node).filter((k) => !SKIP.has(k));
  if (node._type && depth > 0) out.push(`${pad}(${node._type})`);
  for (const k of keys) plain(node[k], out, depth + 1, k);
}

async function main() {
  // slug is a localizedSlug, and GROQ does not substitute the document's own
  // language inside the brackets: `slug[language].current` matches nothing.
  // Each locale is therefore named explicitly and paired with `language`, so a
  // Polish document cannot be caught by an English slug of the same name.
  const docs = await client.fetch(
    `*[_type == "singlepage" && !(_id in path("drafts.**")) && (
        (language == "en" && slug.en.current in $slugs) ||
        (language == "pl" && slug.pl.current in $slugs) ||
        (language == "ru" && slug.ru.current in $slugs)
      )]`,
    { slugs: SLUGS },
  );
  if (!docs.length) {
    console.log(`Не найдено ни одной страницы со слагами: ${SLUGS.join(", ")}`);
    console.log("Слаг берётся как он стоит в адресе, без языкового префикса и без ведущей косой черты.");
    return;
  }
  const found = new Set(docs.map((d) => d.slug && d.slug[d.language] && d.slug[d.language].current));
  const missing = SLUGS.filter((s) => !found.has(s));
  if (missing.length) console.log(`Не найдены: ${missing.join(", ")}\n`);

  fs.mkdirSync(OUT, { recursive: true });
  for (const d of docs) {
    const lang = d.language || "--";
    const slug = (d.slug && d.slug[lang] && d.slug[lang].current) || d._id;
    const out = [];
    out.push(`<!-- Дамп из Sanity, ${new Date().toISOString().slice(0, 10)}. Только для чтения:`);
    out.push(`     правки вносятся фикстурой и replace-landing.cjs, а не этим файлом. -->`);
    out.push("");
    out.push(`# ${d.heading || d.title || slug}`);
    out.push("");
    out.push(`- _id: \`${d._id}\``);
    out.push(`- язык: ${lang}`);
    out.push(`- слаг: \`${slug}\``);
    out.push(`- title (для крошек и карточек): ${d.title || "(нет)"}`);
    out.push(`- heading (H1): ${d.heading || "(нет)"}`);
    out.push(`- meta title: ${(d.seo && d.seo.metaTitle) || "(нет)"}`);
    out.push(`- meta description: ${(d.seo && d.seo.metaDescription) || "(нет)"}`);
    out.push(`- pageType: ${d.pageType || "(нет)"} · heroLayout: ${d.heroLayout || "(нет)"}`);
    out.push("");
    out.push(`## excerpt`);
    out.push("");
    out.push(d.excerpt || "(нет)");
    out.push("");
    const blocks = Array.isArray(d.contentBlocks) ? d.contentBlocks : [];
    out.push(`## Блоки: ${blocks.length}`);
    out.push("");
    blocks.forEach((b, i) => {
      out.push(`---`);
      out.push("");
      out.push(`### Блок ${i + 1}: \`${(b && b._type) || "?"}\` (_key \`${(b && b._key) || "?"}\`)`);
      out.push("");
      if (b && b._type === "textContent" && Array.isArray(b.content)) pt(b.content, out);
      else plain(b, out, 0, "");
      out.push("");
    });
    const file = path.join(OUT, `${lang}-${slug}.md`);
    fs.writeFileSync(file, out.join("\n") + "\n", "utf8");
    const w = out.join(" ").trim().split(/\s+/).length;
    console.log(`${lang}  ${slug}  →  ${path.relative(path.resolve(__dirname, ".."), file)}  (${blocks.length} блоков, ~${w} слов в дампе)`);
  }
  console.log(`\nНайдено ${docs.length} из ${SLUGS.length} запрошенных слагов.`);
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
