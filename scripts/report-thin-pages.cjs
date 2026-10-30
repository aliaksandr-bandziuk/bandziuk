// scripts/report-thin-pages.cjs
//
// Read-only. Counts the prose on every published landing page and shows where
// there is none. Written 30.10.2026 to check the backlog line claiming the real
// estate agency and property developer pages have no textContent in any locale.
//
// What it counts, per page:
//   * textContent — words inside the page's own text blocks (headings included);
//   * всего — every word of prose on the page, including FAQ, tables, offer
//     lists and other blocks, so a page that carries its text somewhere other
//     than textContent is not reported as empty;
//   * H2 — how many H2 headings exist, as a crude check of structure.
//
// A page with no textContent block at all is marked НЕТ ТЕКСТА. The thin
// threshold is the median, not a round number: what matters is which pages are
// far below the rest of the site, and the median moves as the site grows.
//
// Usage: node scripts/report-thin-pages.cjs                 landing pages
//        node scripts/report-thin-pages.cjs --type blog     articles instead
//        node scripts/report-thin-pages.cjs --all           both
//        node scripts/report-thin-pages.cjs --csv           machine-readable

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

const arg = (name) => { const i = process.argv.indexOf(name); return i > -1 ? process.argv[i + 1] : null; };
const CSV = process.argv.includes("--csv");
const TYPES = process.argv.includes("--all")
  ? ["singlepage", "blog"]
  : [arg("--type") || "singlepage"];

const words = (s) => String(s || "").trim().split(/\s+/).filter(Boolean).length;

// Two kinds of text live in these documents and both have to be counted.
//
// Portable text (`_type: "block"` with children) is the obvious one. But the
// older page template keeps a lot of copy in PLAIN STRING fields inside custom
// blocks — a benefits list stores each item as {title, text} strings, not as
// portable text. Counting only portable text made pages built on that template
// look nearly empty: /podderzhka-saita came out at 318 words across 27
// headings, i.e. four words of body per section, which cannot be true.
// Measured and corrected 30.10.2026.
//
// Keys that never hold prose are skipped so icon names, slugs and hrefs do not
// inflate the count, and a string is only counted as prose when it has at
// least two words or ten characters.
const SKIP_KEYS = new Set([
  "icon", "href", "url", "link", "style", "listItem", "marks", "currency",
  "unit", "language", "slug", "current", "alt", "variant", "align", "color",
  "pageType", "heroLayout", "heroVisual", "parentPath", "id", "key", "name",
  "asset", "hotspot", "crop", "ref", "type",
]);
const isProse = (s) => {
  const v = String(s).trim();
  if (v.length < 2) return false;
  if (/^https?:\/\//i.test(v) || /^\//.test(v)) return false;
  if (/^[a-z0-9-]+$/.test(v) && !v.includes(" ")) return false; // slug or enum
  return v.includes(" ") || v.length >= 10;
};

function countProse(node, acc, key) {
  if (node === null || node === undefined) return acc;
  if (typeof node === "string") {
    if (!SKIP_KEYS.has(key) && isProse(node)) acc.strings += words(node);
    return acc;
  }
  if (typeof node !== "object") return acc;
  if (Array.isArray(node)) { for (const x of node) countProse(x, acc, key); return acc; }
  if (node._type === "block" && Array.isArray(node.children)) {
    const text = node.children.map((c) => c && c.text).filter(Boolean).join("");
    acc.rich += words(text);
    if (node.style === "h2") acc.h2 += 1;
    if (node.style === "h3") acc.h3 += 1;
    return acc;
  }
  for (const k of Object.keys(node)) {
    if (k.startsWith("_") && k !== "_type") continue;
    countProse(node[k], acc, k);
  }
  return acc;
}

const blank = () => ({ rich: 0, strings: 0, h2: 0, h3: 0 });

async function main() {
  const docs = await client.fetch(
    `*[_type in $types && !(_id in path("drafts.**"))]`,
    { types: TYPES },
  );

  const rows = docs.map((d) => {
    const blocks = Array.isArray(d.contentBlocks) ? d.contentBlocks : [];
    const textBlocks = blocks.filter((b) => b && b._type === "textContent");
    const inText = countProse(textBlocks, blank());
    const total = countProse(blocks, blank());
    return {
      lang: d.language || "--",
      type: d._type,
      slug: (d.slug && d.slug[d.language] && d.slug[d.language].current) || d._id,
      pageType: d.pageType || "",
      textBlocks: textBlocks.length,
      textWords: inText.rich + inText.strings,
      totalWords: total.rich + total.strings,
      richWords: total.rich,
      stringWords: total.strings,
      h2: total.h2,
      blockTypes: [...new Set(blocks.map((b) => b && b._type).filter(Boolean))].join(" "),
    };
  });

  rows.sort((a, b) => a.totalWords - b.totalWords);

  if (CSV) {
    console.log("lang,type,slug,pageType,textBlocks,richWords,stringWords,textWords,totalWords,h2,blockTypes");
    for (const r of rows) {
      console.log([r.lang, r.type, r.slug, r.pageType, r.textBlocks, r.richWords, r.stringWords,
        r.textWords, r.totalWords, r.h2, `"${r.blockTypes}"`].join(","));
    }
    return;
  }

  const nums = rows.map((r) => r.totalWords).sort((a, b) => a - b);
  const median = nums.length ? nums[Math.floor(nums.length / 2)] : 0;
  const noText = rows.filter((r) => r.textBlocks === 0);
  const empty = rows.filter((r) => r.totalWords === 0);
  const thin = rows.filter((r) => r.totalWords > 0 && r.totalWords < median / 2);

  console.log(`страниц: ${rows.length} (${TYPES.join(", ")})   медиана прозы: ${median} слов\n`);

  const table = (list, title) => {
    console.log(`## ${title}: ${list.length}`);
    if (!list.length) { console.log("  —\n"); return; }
    for (const r of list) {
      console.log(
        `  ${r.lang}  ${String(r.totalWords).padStart(5)} слов` +
        `  (portable text ${String(r.richWords).padStart(5)}, строками ${String(r.stringWords).padStart(4)},` +
        ` textContent ${String(r.textWords).padStart(5)}, H2 ${String(r.h2).padStart(2)})  ${r.slug}`,
      );
      console.log(`         блоки: ${r.blockTypes || "(нет)"}`);
    }
    console.log("");
  };

  table(empty, "Прозы нет вообще");
  table(noText, "Нет ни одного блока textContent");
  table(thin, `Тонкие: меньше половины медианы (< ${Math.floor(median / 2)} слов)`);

  console.log("## Двадцать самых тонких, по всей прозе");
  for (const r of rows.slice(0, 20)) {
    console.log(
      `  ${r.lang}  ${String(r.totalWords).padStart(5)} слов` +
      `  (portable text ${String(r.richWords).padStart(5)}, строками ${String(r.stringWords).padStart(4)},` +
      ` H2 ${String(r.h2).padStart(2)})  ${r.slug}`,
    );
  }
  console.log("\nПодробнее по всем страницам: добавить --csv");
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
