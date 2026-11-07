// scripts/check-meta-lengths.cjs
//
// Read only. Measures the two snippet limits across every published document
// in Sanity: metaTitle ≤ 60 characters, metaDescription ≤ 160.
//
// Written 06.11.2026 after /services/fix-ai-misinformation turned up with a
// 64-character title and a 207-character description while sitting on
// position 8.3 with 135 impressions and zero clicks: Google cuts the
// description mid-sentence, so the reader never reaches the price. A sweep of
// all 894 live addresses from the browser found 102 descriptions over 160 and
// 34 titles over 60, which makes it a site-wide defect rather than one page.
// This script replaces that sweep: Sanity is the source, no network trip to
// the live site, and the output feeds the fix scripts.
//
// Usage:
//   node scripts/check-meta-lengths.cjs                       everything
//   node scripts/check-meta-lengths.cjs --lang ru             one language
//   node scripts/check-meta-lengths.cjs --type blog           one type
//   node scripts/check-meta-lengths.cjs --top 40              longer listing
//   node scripts/check-meta-lengths.cjs --out drafts/meta-lengths.csv
const path = require("path");
const fs = require("fs");
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
const LANG = arg("--lang");
const OUT = arg("--out");
const TOP = Number(arg("--top") || 25);
const TYPES = arg("--type")
  ? [arg("--type")]
  : ["singlepage", "blog", "portfolio", "blogPage", "portfolioPage", "homepage"];

const TITLE_LIMIT = 60;
const DESC_LIMIT = 160;
const PREFIX = { en: "", pl: "/pl", ru: "/ru" };
const SEGMENT = { blog: "blog", portfolio: "portfolio" };
// Listing pages hold their meta at the top level, not under `seo`, and their
// address is the section itself. They were invisible to the 06.11 run, which
// is how four titles of 61-79 characters survived waves 1-5.
const SECTION = { blogPage: "blog", portfolioPage: "portfolio", homepage: "" };

async function main() {
  const docs = await client.fetch(
    `*[_type in $types && !(_id in path("drafts.**"))]{
      _id, _type, language, heading, title,
      "metaTitle": coalesce(seo.metaTitle, metaTitle),
      "metaDescription": coalesce(seo.metaDescription, metaDescription),
      "s": select(language == "en" => slug.en.current, language == "pl" => slug.pl.current, slug.ru.current),
      "p1": select(language == "en" => parentPage->slug.en.current, language == "pl" => parentPage->slug.pl.current, parentPage->slug.ru.current),
      "p2": select(language == "en" => parentPage->parentPage->slug.en.current, language == "pl" => parentPage->parentPage->slug.pl.current, parentPage->parentPage->slug.ru.current)
    }`,
    { types: TYPES },
  );

  const pages = docs
    .filter((d) => !LANG || d.language === LANG)
    .map((d) => {
      const prefix = PREFIX[d.language] ?? "";
      const segment = SEGMENT[d._type];
      const section = SECTION[d._type];
      const url = section !== undefined
        ? `${prefix}/${section}` || "/"
        : segment
          ? `${prefix}/${segment}/${d.s}`
          : `${prefix}/${[d.p2, d.p1, d.s].filter(Boolean).join("/")}`;
      const mt = String(d.metaTitle || "");
      const md = String(d.metaDescription || "");
      return { id: d._id, type: d._type, lang: d.language, url, mt, md, tLen: mt.length, dLen: md.length };
    })
    .sort((a, b) => b.dLen - a.dLen);

  const longTitle = pages.filter((p) => p.tLen > TITLE_LIMIT);
  const longDesc = pages.filter((p) => p.dLen > DESC_LIMIT);
  const noTitle = pages.filter((p) => !p.tLen);
  const noDesc = pages.filter((p) => !p.dLen);

  console.log(`documents: ${pages.length} (${TYPES.join(", ")}${LANG ? `, language ${LANG}` : ""})\n`);

  console.log(`## metaDescription over ${DESC_LIMIT}: ${longDesc.length}`);
  longDesc.slice(0, TOP).forEach((p) => console.log(`  ${p.dLen}  ${p.lang}  ${p.url}`));
  if (longDesc.length > TOP) console.log(`  … and ${longDesc.length - TOP} more, use --top or --out`);
  console.log("");

  console.log(`## metaTitle over ${TITLE_LIMIT}: ${longTitle.length}`);
  longTitle
    .slice()
    .sort((a, b) => b.tLen - a.tLen)
    .slice(0, TOP)
    .forEach((p) => console.log(`  ${p.tLen}  ${p.lang}  ${p.url}`));
  if (longTitle.length > TOP) console.log(`  … and ${longTitle.length - TOP} more, use --top or --out`);
  console.log("");

  console.log(`## metaTitle missing: ${noTitle.length}`);
  noTitle.slice(0, TOP).forEach((p) => console.log(`  ${p.lang}  ${p.url}`));
  console.log(`## metaDescription missing: ${noDesc.length}`);
  noDesc.slice(0, TOP).forEach((p) => console.log(`  ${p.lang}  ${p.url}`));
  console.log("");

  const byLang = {};
  for (const p of pages) {
    const k = p.lang || "?";
    byLang[k] = byLang[k] || { pages: 0, desc: 0, title: 0 };
    byLang[k].pages += 1;
    if (p.dLen > DESC_LIMIT) byLang[k].desc += 1;
    if (p.tLen > TITLE_LIMIT) byLang[k].title += 1;
  }
  console.log("## by language");
  Object.entries(byLang).forEach(([k, v]) =>
    console.log(`  ${k}: ${v.pages} pages, ${v.desc} descriptions over ${DESC_LIMIT}, ${v.title} titles over ${TITLE_LIMIT}`));

  if (OUT) {
    const esc = (s) => `"${String(s).replace(/"/g, '""')}"`;
    const rows = [["id", "type", "lang", "url", "titleLen", "descLen", "metaTitle", "metaDescription"].join(",")];
    pages
      .filter((p) => p.tLen > TITLE_LIMIT || p.dLen > DESC_LIMIT || !p.tLen || !p.dLen)
      .forEach((p) => rows.push([p.id, p.type, p.lang, p.url, p.tLen, p.dLen, esc(p.mt), esc(p.md)].join(",")));
    fs.mkdirSync(path.dirname(OUT), { recursive: true });
    fs.writeFileSync(OUT, rows.join("\n") + "\n", "utf8");
    console.log(`\nwritten: ${OUT} (${rows.length - 1} rows)`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
