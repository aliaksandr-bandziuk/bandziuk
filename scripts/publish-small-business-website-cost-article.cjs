// scripts/publish-small-business-website-cost-article.cjs
//
// Publishes «How much a small business website costs» from
// drafts/blog-small-business-website-cost-{EN,PL,RU}.md: three blog documents and
// their translation.metadata in ONE transaction.
//
//   EN /blog/small-business-website-cost
//   PL /pl/blog/ile-kosztuje-strona-internetowa-dla-firmy
//   RU /ru/blog/skolko-stoit-sozdanie-saita
//
// Each language has a landing page whose H2 is almost exactly this article's subject
// (/small-business-website-design has «How much does a small business website cost»,
// and the same in PL and RU). The dry run prints that landing page's title and warns
// if any H2 here starts with it — that clash has already happened three times on this
// site. The intent check of 29.10.2026 found 0 shared URLs out of 10 between the
// article's query and the landing page's, so the two pages are not competing.
//
// The category is copied from the beauty-salon website-cost article, so this one lands
// beside the other eight cost articles rather than with the SEO pieces. The dry run
// prints the category TITLE — check it before applying.
//
// Usage: node scripts/publish-small-business-website-cost-article.cjs           dry run
//        node scripts/publish-small-business-website-cost-article.cjs --apply   publish

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

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const BASE_ID = "blog-small-business-website-cost";
const META_ID = `${BASE_ID}.i18n`;
const PUBLISHED_AT = new Date().toISOString();

const LANGS = {
  en: {
    file: "blog-small-business-website-cost-EN.md", id: BASE_ID, author: "author-aliaksandr-bandziuk",
    categoryFrom: "beauty-salon-website-cost",
    services: ["small-business-website-design", "seo-services-for-small-business", "seo-consultant"],
    related: ["small-business-seo", "how-much-seo-costs", "beauty-salon-website-cost", "multilingual-website-cost"],
    cover: "cover-small-business-website-cost-en.png",
    coverAlt: "A website quote with five named lines leads to the blocks the one-off price is made of, and from there to a stack of smaller recurring charges that repeat every year",
    faqHeading: /^Common questions about small business website costs/i,
  },
  pl: {
    file: "blog-small-business-website-cost-PL.md", id: `${BASE_ID}.pl`, author: "author-aliaksandr-bandziuk.pl",
    categoryFrom: "ile-kosztuje-strona-dla-salonu-kosmetycznego",
    services: ["strona-internetowa-dla-malej-firmy", "pozycjonowanie-strony-malej-firmy", "freelancer-seo"],
    related: ["jak-samemu-zrobic-seo", "ile-kosztuje-pozycjonowanie-strony", "ile-kosztuje-strona-dla-salonu-kosmetycznego", "ile-kosztuje-strona-wielojezyczna"],
    cover: "cover-small-business-website-cost-pl.png",
    coverAlt: "Wycena strony z pięcioma nazwanymi pozycjami prowadzi do bloków, z których składa się cena jednorazowa, a stamtąd do mniejszych opłat powtarzających się co roku",
    faqHeading: /^Najczęstsze pytania o koszt strony internetowej/i,
  },
  ru: {
    file: "blog-small-business-website-cost-RU.md", id: `${BASE_ID}.ru`, author: "author-aliaksandr-bandziuk.ru",
    categoryFrom: "skolko-stoit-sait-salona-krasoty",
    services: ["sait-dlya-malogo-biznesa", "prodvizhenie-saita-malogo-biznesa", "chastnyi-seo-specialist"],
    related: ["kak-samomu-prodvigat-sait", "skolko-stoit-prodvizhenie-saita", "skolko-stoit-sait-salona-krasoty", "skolko-stoit-multiyazychnyi-sait"],
    cover: "cover-small-business-website-cost-ru.png",
    coverAlt: "Смета на сайт с пятью названными строками ведёт к блокам, из которых складывается разовая цена, а оттуда — к стопке меньших расходов, повторяющихся каждый год",
    faqHeading: /^Частые вопросы о стоимости сайта/i,
  },
};

// The landing page in each language the article must not be confused with: the dry
// run prints its H1 so a heading clash is visible before anything is written.
const LANDING = { en: "small-business-website-design", pl: "strona-internetowa-dla-malej-firmy", ru: "sait-dlya-malogo-biznesa" };

const key = () => crypto.randomBytes(6).toString("hex");

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
  const { children, markDefs } = inline(text.replace(/`([^`]+)`/g, "$1"));
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
      const cells = (r) => r.replace(/^\||\|$/g, "").split("|").map((c) => c.trim().replace(/`([^`]+)`/g, "$1"));
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

const bySlug = (type, lang, slugs) => client.fetch(
  `*[_type in $types && language == $lang && slug[$lang].current in $slugs && !(_id in path("drafts.**"))]{_id, title, slug, category}`,
  { types: type, lang, slugs },
).then((rows) => rows.map((r) => ({ ...r, s: r.slug?.[lang]?.current })));

(async () => {
  if (!process.env.SANITY_API_TOKEN) throw new Error("SANITY_API_TOKEN missing");
  const ids = [...Object.values(LANGS).map((c) => c.id), META_ID];
  const clash = await client.fetch(`*[_id in $all]._id`, { all: [...ids, ...ids.map((i) => `drafts.${i}`)] });
  if (clash.length) { console.log(`Aborting — already exists: ${clash.join(", ")}`); process.exit(1); }

  const docs = [];
  for (const [lang, cfg] of Object.entries(LANGS)) {
    const { meta, body } = parseDraft(fs.readFileSync(path.join(DRAFTS, cfg.file), "utf8"));
    for (const f of ["title", "slug", "meta_title", "meta_description"]) if (!meta[f]) throw new Error(`${lang}: «${f}» missing in ${cfg.file}`);
    // Any document type, not just blog: the slug must be free across the whole site.
    const slugClash = await client.fetch(
      `*[defined(slug[$lang].current) && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]{_id, _type}`,
      { lang, s: meta.slug },
    );
    if (slugClash) { console.log(`Aborting — ${lang} slug «${meta.slug}» is taken by ${slugClash._id} (${slugClash._type})`); process.exit(1); }

    const svc = await bySlug(["singlepage", "service"], lang, cfg.services);
    const services = cfg.services.map((s) => svc.find((x) => x.s === s)).filter(Boolean).map((x) => x._id);
    const missSvc = cfg.services.filter((s) => !svc.some((x) => x.s === s));
    if (missSvc.length) console.log(`note: ${lang} service pages not found, left out: ${missSvc.join(", ")}`);
    const rel = await bySlug(["blog"], lang, [...new Set([...cfg.related, cfg.categoryFrom])]);
    const related = cfg.related.map((s) => rel.find((x) => x.s === s)).filter(Boolean).map((x) => x._id);
    const missRel = cfg.related.filter((s) => !rel.some((x) => x.s === s));
    if (missRel.length) console.log(`note: ${lang} related articles not found, left out: ${missRel.join(", ")}`);
    const category = rel.find((x) => x.s === cfg.categoryFrom)?.category;
    if (!category?._ref) throw new Error(`${lang}: category not found on «${cfg.categoryFrom}»`);
    const catTitle = await client.fetch(`*[_id == $id][0].title`, { id: category._ref });

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
      category: { _type: "reference", _ref: category._ref },
      previewImage: { _type: "image", alt: cfg.coverAlt, asset: { _type: "reference", _ref: coverAsset } },
      serviceOffered: services.map((id) => ({ _type: "reference", _key: id.replace(/\W/g, "").slice(0, 20), _ref: id })),
      relatedArticles: related.map((id) => ({ _type: "reference", _key: id.replace(/\W/g, "").slice(0, 20), _ref: id })),
      contentBlocks: blocks,
    };
    const counts = blocks.reduce((a, b) => ((a[b._type] = (a[b._type] || 0) + 1), a), {});
    const heads = blocks.filter((b) => b._type === "textContent").flatMap((b) => b.content);
    const h2s = heads.filter((x) => x.style === "h2").map((x) => x.children.map((c) => c.text).join(""));
    const h3 = heads.filter((x) => x.style === "h3").length;
    const words = body.replace(/[#>*|!\[\]()-]/g, " ").split(/\s+/).filter(Boolean).length;
    const landing = (await bySlug(["singlepage", "service"], lang, [LANDING[lang]]))[0];

    console.log(`\n── ${lang.toUpperCase()}  ${cfg.id}`);
    console.log(`URL:    ${lang === "en" ? "" : "/" + lang}/blog/${meta.slug}`);
    console.log(`H1:     ${meta.title}`);
    console.log(`title:  ${meta.meta_title} (${meta.meta_title.length})`);
    console.log(`desc:   ${meta.meta_description.length} chars`);
    console.log(`words ≈ ${words} · H2: ${h2s.length} · H3: ${h3} · blocks: ${JSON.stringify(counts)}`);
    const faq = blocks.find((b) => b._type === "faqBlock");
    console.log(`FAQ:    ${faq ? faq.faq.items.length : 0} questions`);
    console.log(`category: ${catTitle ? `«${catTitle}»` : "(no title)"} ${category._ref}`);
    console.log(`services: ${services.join(", ") || "—"}`);
    console.log(`related:  ${related.join(", ") || "—"}`);
    console.log(`landing page it must not duplicate: «${landing?.title || "(not found)"}»`);
    if (meta.meta_title.length > 60) console.log(`!  meta title over 60`);
    if (meta.meta_description.length > 160) console.log(`!  meta description over 160`);
    if (meta.title === meta.meta_title) console.log(`!  H1 equals meta title`);
    if (!faq) console.log(`!  no FAQ block — check that the heading matches cfg.faqHeading`);
    if (landing?.title && h2s.some((h) => h.toLowerCase().startsWith(landing.title.toLowerCase()))) {
      console.log(`!  an H2 starts with the landing page's H1 «${landing.title}» — rephrase before publishing`);
    }
    docs.push(doc);
  }
  const fresh = [...neededImages].filter((f) => !assetCache[f]);
  console.log(`\nimages: ${neededImages.size} (${fresh.length} to upload: ${fresh.join(", ") || "none"})`);

  const metaDoc = {
    _id: META_ID, _type: "translation.metadata", documentId: BASE_ID,
    translations: Object.entries(LANGS).map(([lang, c]) => ({ _key: lang, value: { _type: "reference", _ref: c.id } })),
  };
  if (!APPLY) return console.log("\nDry run — nothing uploaded or written. Add --apply to publish.");

  const tx = client.transaction();
  docs.forEach((d) => tx.create(d));
  tx.create(metaDoc);
  await tx.commit();
  console.log(`\nPublished: ${[...docs.map((d) => d._id), META_ID].join(", ")}`);
  console.log("Next: node scripts/apply-small-business-website-cost-links.cjs (dry run, then --apply), then redeploy and check the live pages.");
})().catch((e) => { console.error("\n" + (e.message || e)); process.exit(1); });
