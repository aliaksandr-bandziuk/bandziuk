// scripts/publish-seo-audit-article.cjs
//
// Publishes the «What you are actually paying for in an SEO audit» article from
// drafts/blog-seo-audit-{EN,PL,RU}.md: three blog documents and their
// translation.metadata, in ONE transaction, so a half-published article never
// exists. Built from publish-chatgpt-seo-article.cjs — same markdown rules,
// different article.
//
// Markdown → the blocks the blog schema accepts:
//   paragraphs, H2/H3, blockquote, «- » bullets, «1. » numbered → textContent
//   | a | b | tables                                          → tableBlock
//   ![alt](article-figures/x.png)                             → imageFullBlock
// This article has no FAQ section, so FAQ_HEADING never matches on purpose.
//
// Demand and intent behind it: research/dataforseo/audit-article-demand.md and
// claude/blog-seo-audit-article.md. The commercial head terms («seo audit»,
// «audyt seo», «аудит сайта») stay on the service pages; this article takes the
// informational tail only and links to them.
//
// Usage: node scripts/publish-seo-audit-article.cjs                      dry run
//        node scripts/publish-seo-audit-article.cjs --apply --replace    переписать опубликованное
//        node scripts/publish-seo-audit-article.cjs --apply   upload images and publish

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "..");
const DRAFTS = path.join(ROOT, "drafts");
const FIGDIR = path.join(DRAFTS, "article-figures");
const ASSET_CACHE = path.join(FIGDIR, ".sanity-assets.json");
const APPLY = process.argv.includes("--apply");
// --replace: переписать уже опубликованные документы этой же статьи.
// Без него скрипт отказывается трогать существующие — защита от случайной перезаписи.
const REPLACE = process.argv.includes("--replace");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const BASE_ID = "blog-seo-audit-value";
const META_ID = `${BASE_ID}.i18n`;
const PUBLISHED_AT = new Date().toISOString();
const RELATED_EN = ["blog-seo-cost", "49046caa-9185-4bba-a350-700b5eac9c86", "blog-not-showing-in-google"];

const NO_FAQ = /^\0$/; // в этой статье раздела FAQ нет

const LANGS = {
  en: {
    file: "blog-seo-audit-EN.md", id: BASE_ID, author: "author-aliaksandr-bandziuk",
    category: "79c9a689-22de-413b-ac24-a00aa192206d", // SEO Strategy
    services: ["0e071d28-ee05-42a2-81a6-5be75b4264bc", "26f33bcc-eaa6-4cbc-96a1-9135cf55431f", "service-ai-visibility-audit"],
    cover: "cover-seo-audit-en.png",
    coverAlt: "A long column of identical grey rows, one of them highlighted in orange and drawn out into a card where it becomes five separate labelled parts",
    faqHeading: NO_FAQ,
  },
  pl: {
    file: "blog-seo-audit-PL.md", id: `${BASE_ID}.pl`, author: "author-aliaksandr-bandziuk.pl",
    category: "4c02f912-80b8-4121-a549-b3ba93004717", // Strategia SEO
    services: ["8b7c6b4c-412c-4fa1-b8f8-ec0a1b2816b5", "1166b8b4-0d4c-4dc3-a0c2-452422445008", "service-ai-visibility-audit.pl"],
    cover: "cover-seo-audit-pl.png",
    coverAlt: "Długa kolumna identycznych szarych wierszy, z których jeden podświetlono na pomarańczowo i wyciągnięto do karty, gdzie rozkłada się na pięć osobnych części",
    faqHeading: NO_FAQ,
  },
  ru: {
    file: "blog-seo-audit-RU.md", id: `${BASE_ID}.ru`, author: "author-aliaksandr-bandziuk.ru",
    category: "3de42d3b-9502-4c80-bcb0-7e438073df9b", // SEO-стратегия
    services: ["0ba09f41-cdc6-40b1-8b57-e56ac656e979", "24354662-e684-4a9c-ad37-3e196d3b40c4", "service-ai-visibility-audit.ru"],
    cover: "cover-seo-audit-ru.png",
    coverAlt: "Длинный столбец одинаковых серых строк, одна из которых подсвечена оранжевым и вынесена в карточку, где распадается на пять отдельных частей",
    faqHeading: NO_FAQ,
  },
};

const key = () => crypto.randomBytes(6).toString("hex");

// Inline markdown → spans + markDefs: **strong** and [text](href)
function inline(text) {
  const spans = [], markDefs = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0, m;
  const push = (t, marks) => { if (t) spans.push({ _type: "span", _key: key(), text: t, marks: marks || [] }); };
  while ((m = re.exec(text))) {
    push(text.slice(last, m.index));
    if (m[1] !== undefined) push(m[1], ["strong"]);
    else { const dk = key(); markDefs.push({ _type: "link", _key: dk, href: m[3] }); push(m[2], [dk]); }
    last = m.index + m[0].length;
  }
  push(text.slice(last));
  return { children: spans.length ? spans : [{ _type: "span", _key: key(), text: "", marks: [] }], markDefs };
}
function block(style, text, extra = {}) {
  const { children, markDefs } = inline(text);
  return { _type: "block", _key: key(), style, children, markDefs, ...extra };
}

let assetCache = fs.existsSync(ASSET_CACHE) ? JSON.parse(fs.readFileSync(ASSET_CACHE, "utf8")) : {};
const neededImages = new Set();
async function uploadImage(filename) {
  neededImages.add(filename);
  const file = path.join(FIGDIR, filename);
  if (!fs.existsSync(file)) throw new Error(`missing image: ${file}`);
  if (assetCache[filename]) return assetCache[filename];
  if (!APPLY) return `(upload ${filename})`;
  const asset = await client.assets.upload("image", fs.createReadStream(file), { filename });
  assetCache[filename] = asset._id;
  fs.writeFileSync(ASSET_CACHE, JSON.stringify(assetCache, null, 2));
  return asset._id;
}

function parseDraft(md) {
  const lines = md.split(/\r?\n/);
  const meta = {};
  let i = 0;
  for (; i < lines.length; i++) {
    const l = lines[i];
    if (l.startsWith("#") || l.trim() === "") continue;
    const m = l.match(/^(Title|Slug|Meta title|Meta description):\s*(.+)$/);
    if (m) { meta[m[1].toLowerCase().replace(" ", "_")] = m[2].trim(); continue; }
    if (l.trim() === "---") { i++; break; }
  }
  return { meta, body: lines.slice(i).join("\n").trim() };
}

async function toContentBlocks(body, cfg) {
  const out = [];
  let buf = [];
  const flush = () => { if (buf.length) out.push({ _type: "textContent", _key: key(), content: buf, textAlign: "left" }); buf = []; };
  const lines = body.split("\n");
  let inFaq = false, faqItems = [], faqTitle = "", pending = null;

  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (!t) continue;

    if (inFaq) {
      if (t.startsWith("## ")) { if (pending) faqItems.push(pending), (pending = null); inFaq = false; }
      else {
        const q = t.match(/^\*\*(.+?)\*\*$/);
        if (q) { if (pending) faqItems.push(pending); pending = { _key: key(), question: q[1], answer: [] }; }
        else if (pending) pending.answer.push(block("normal", t));
        continue;
      }
    }
    if (t.startsWith("```")) {
      // inside the portable text: codeBlock is registered on contentBlock, not on
      // the blog's contentBlocks array (see upload-llms-txt-article.cjs)
      const language = t.slice(3).trim() || "text";
      const code = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) code.push(lines[i]), i++;
      buf.push({ _type: "codeBlock", _key: key(), language, code: code.join("\n") });
      continue;
    }
    if (t.startsWith("## ")) {
      const heading = t.slice(3).trim();
      if (cfg.faqHeading.test(heading)) { flush(); inFaq = true; faqTitle = heading; continue; }
      buf.push(block("h2", heading)); continue;
    }
    if (t.startsWith("### ")) { buf.push(block("h3", t.slice(4).trim())); continue; }

    const img = t.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (img) {
      flush();
      const assetId = await uploadImage(path.basename(img[2]));
      out.push({ _type: "imageFullBlock", _key: key(), title: img[1].slice(0, 60),
        imageMain: { picture: { _type: "image", alt: img[1], asset: { _type: "reference", _ref: assetId } } } });
      continue;
    }
    if (t.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) { rows.push(lines[i].trim()); i++; }
      i--;
      const cells = (r) => r.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      flush();
      out.push({ _type: "tableBlock", _key: key(), columns: cells(rows[0]),
        rows: rows.slice(2).map((r) => ({ _type: "tableRow", _key: key(), cells: cells(r) })) });
      continue;
    }
    if (t.startsWith("> ")) { buf.push(block("blockquote", t.slice(2).trim())); continue; }
    if (t.startsWith("- ")) { buf.push(block("normal", t.slice(2).trim(), { listItem: "bullet", level: 1 })); continue; }
    const num = t.match(/^\d+\.\s+(.+)$/);
    if (num) { buf.push(block("normal", num[1], { listItem: "number", level: 1 })); continue; }
    buf.push(block("normal", t));
  }
  if (pending) faqItems.push(pending);
  flush();
  if (faqItems.length) out.push({ _type: "faqBlock", _key: key(), title: faqTitle, faq: { _type: "accordionBlock", items: faqItems } });
  return out;
}

async function relatedFor(lang) {
  if (lang === "en") return RELATED_EN;
  const rows = await client.fetch(
    `*[_id in $ids]{ "t": *[_type == "translation.metadata" && references(^._id)][0].translations[_key == $lang][0].value._ref }`,
    { ids: RELATED_EN, lang },
  );
  return rows.map((r) => r.t).filter(Boolean);
}

(async () => {
  if (!process.env.SANITY_API_TOKEN) throw new Error("SANITY_API_TOKEN missing");
  const ids = [...Object.values(LANGS).map((c) => c.id), META_ID];
  const clash = await client.fetch(`*[_id in $all]._id`, { all: [...ids, ...ids.map((i) => `drafts.${i}`)] });
  if (clash.length && !REPLACE) { console.log(`Aborting — already exists: ${clash.join(", ")}`);
    console.log("Та же статья? Перезаписать: добавьте --replace к --apply."); process.exit(1); }
  if (clash.length) console.log(`--replace: переписываю ${clash.join(", ")}`);

  const docs = [];
  for (const [lang, cfg] of Object.entries(LANGS)) {
    const { meta, body } = parseDraft(fs.readFileSync(path.join(DRAFTS, cfg.file), "utf8"));
    for (const f of ["title", "slug", "meta_title", "meta_description"]) if (!meta[f]) throw new Error(`${lang}: «${f}» missing in ${cfg.file}`);
    const slugClash = await client.fetch(`*[_type == "blog" && slug[$lang].current == $s][0]._id`, { lang, s: meta.slug });
    if (slugClash && slugClash !== cfg.id) { console.log(`Aborting — ${lang} slug «${meta.slug}» is taken by ${slugClash}`); process.exit(1); }
    const services = await client.fetch(`*[_id in $ids]._id`, { ids: cfg.services });
    const missingSvc = cfg.services.filter((s) => !services.includes(s));
    if (missingSvc.length) console.log(`note: ${lang} service pages not found, left out: ${missingSvc.join(", ")}`);
    cfg.services = cfg.services.filter((s) => services.includes(s));
    const related = await relatedFor(lang);

    const blocks = await toContentBlocks(body, cfg);
    const coverAsset = await uploadImage(cfg.cover);
    const doc = {
      _id: cfg.id, _type: "blog", language: lang,
      title: meta.title,
      slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: meta.slug } },
      seo: { metaTitle: meta.meta_title, metaDescription: meta.meta_description },
      excerpt: meta.meta_description,
      publishedAt: PUBLISHED_AT,
      author: { _type: "reference", _ref: cfg.author },
      category: { _type: "reference", _ref: cfg.category },
      previewImage: { _type: "image", alt: cfg.coverAlt, asset: { _type: "reference", _ref: coverAsset } },
      serviceOffered: cfg.services.map((id) => ({ _type: "reference", _key: id.replace(/\W/g, "").slice(0, 20), _ref: id })),
      relatedArticles: related.map((id) => ({ _type: "reference", _key: id.replace(/\W/g, "").slice(0, 20), _ref: id })),
      contentBlocks: blocks,
    };
    const counts = blocks.reduce((a, b) => ((a[b._type] = (a[b._type] || 0) + 1), a), {});
    const h2 = blocks.filter((b) => b._type === "textContent").flatMap((b) => b.content).filter((x) => x.style === "h2").length;
    const words = body.replace(/[#>*|!\[\]()-]/g, " ").split(/\s+/).filter(Boolean).length;
    console.log(`\n── ${lang.toUpperCase()}  ${cfg.id}`);
    console.log(`URL:    ${lang === "en" ? "" : "/" + lang}/blog/${meta.slug}`);
    console.log(`H1:     ${meta.title}`);
    console.log(`title:  ${meta.meta_title} (${meta.meta_title.length})`);
    console.log(`desc:   ${meta.meta_description.length} chars`);
    console.log(`words ≈ ${words} · H2: ${h2} · blocks: ${JSON.stringify(counts)}`);
    const faq = blocks.find((b) => b._type === "faqBlock");
    console.log(`FAQ:    ${faq ? faq.faq.items.length : 0} questions`);
    console.log(`related: ${related.join(", ") || "—"}`);
    if (meta.meta_title.length > 60) console.log(`!  meta title over 60`);
    if (meta.meta_description.length > 160) console.log(`!  meta description over 160`);
    if (meta.title === meta.meta_title) console.log(`!  H1 equals meta title`);
    docs.push(doc);
  }
  const fresh = [...neededImages].filter((f) => !assetCache[f]);
  console.log(`\nimages: ${neededImages.size} (${fresh.length} to upload: ${fresh.join(", ") || "none"})`);

  const metaDoc = {
    // same shape as link-legalizacja-translations.cjs (the site reads translations[].value->)
    _id: META_ID, _type: "translation.metadata", documentId: BASE_ID,
    translations: Object.entries(LANGS).map(([lang, c]) => ({
      _key: lang, value: { _type: "reference", _ref: c.id },
    })),
  };
  if (!APPLY) return console.log("\nDry run — nothing uploaded or written. Add --apply to publish.");

  const tx = client.transaction();
  docs.forEach((d) => (REPLACE ? tx.createOrReplace(d) : tx.create(d)));
  REPLACE ? tx.createOrReplace(metaDoc) : tx.create(metaDoc);
  await tx.commit();
  console.log(`\nPublished: ${[...docs.map((d) => d._id), META_ID].join(", ")}`);
  console.log("Next: redeploy (date > .redeploy && git add .redeploy && git commit -m \"add seo audit article\" && git push), then check the live pages.");
})().catch((e) => { console.error("\n" + (e.message || e)); process.exit(1); });
