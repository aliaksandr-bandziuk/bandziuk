// scripts/publish-freelancer-or-agency-article.cjs
//
// Publishes «Freelancer or agency» from drafts/blog-freelancer-or-agency-{EN,PL,RU}.md:
// three blog documents and their translation.metadata in ONE transaction.
//
//   EN /blog/freelancer-or-agency-for-your-website
//   PL /pl/blog/freelancer-czy-agencja-strona-internetowa
//   RU /ru/blog/frilanser-ili-studiya-dlya-saita
//
// Not a translation: the EN version answers the measured assistant question, the PL
// one adds faktura / zamówienia / «kto faktycznie wykona pracę», the RU one adds
// hiring a contractor in another country. One cover for all three — it carries no
// text, like the rest of the series.
//
// The category is NOT hardcoded here (earlier scripts hardcoded ids and there is no
// id on record for «Business & Freelancing»). The dry run prints every category in
// the dataset with its language and id, then resolves one per locale by title.
// Overrides, if the auto-match picks wrong: --cat-en=<id> --cat-pl=<id> --cat-ru=<id>
//
// Usage: node scripts/publish-freelancer-or-agency-article.cjs           dry run
//        node scripts/publish-freelancer-or-agency-article.cjs --apply   publish

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
// --replace rewrites contentBlocks on the three documents that are already
// published, keeping their ids, slugs, category, cover and translation.metadata.
const REPLACE = process.argv.includes("--replace");
const argOf = (name) => (process.argv.find((a) => a.startsWith(`--${name}=`)) || "").split("=")[1] || null;

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const BASE_ID = "blog-freelancer-or-agency";
const META_ID = `${BASE_ID}.i18n`;
const PUBLISHED_AT = new Date().toISOString();
const COVER = "cover-freelancer-or-agency.png";

const LANGS = {
  en: {
    file: "blog-freelancer-or-agency-EN.md", id: BASE_ID, author: "author-aliaksandr-bandziuk",
    // best first; the ones that are not in the dataset are reported and left out
    services: ["website-development", "website-redesign-services", "seo-consultant", "small-business-website-design"],
    related: ["small-business-website-cost", "small-business-seo", "how-much-seo-costs"],
    categoryTitle: [/^business\s*(&|and)\s*freelanc/i, /freelanc/i, /business/i],
    cover: COVER,
    coverAlt: "A brief leads to two routes: one unbroken line to a full result, and the same distance split into four segments with a handover at each break, ending in a result with shorter, paler lines",
    faqHeading: /^Common questions about hiring a freelancer/i,
  },
  pl: {
    file: "blog-freelancer-or-agency-PL.md", id: `${BASE_ID}.pl`, author: "author-aliaksandr-bandziuk.pl",
    services: ["tworzenie-stron-internetowych", "przebudowa-strony-internetowej", "freelancer-seo", "strona-internetowa-dla-malej-firmy"],
    related: ["ile-kosztuje-strona-internetowa-dla-firmy", "ile-kosztuje-pozycjonowanie-strony", "jak-samemu-zrobic-seo"],
    categoryTitle: [/freelanc/i, /biznes/i],
    cover: COVER,
    coverAlt: "Od briefu prowadzą dwie drogi: jedna nieprzerwana do pełnego wyniku, a ta sama odległość podzielona na cztery odcinki z przekazaniem pracy na każdej przerwie kończy się wynikiem o krótszych, bledszych liniach",
    faqHeading: /^Najczęstsze pytania o wybór między freelancerem/i,
  },
  ru: {
    file: "blog-freelancer-or-agency-RU.md", id: `${BASE_ID}.ru`, author: "author-aliaksandr-bandziuk.ru",
    services: ["razrabotka-saitov", "redizayn-sayta", "chastnyi-seo-specialist", "sait-dlya-malogo-biznesa"],
    related: ["skolko-stoit-sozdanie-saita", "skolko-stoit-prodvizhenie-saita", "kak-samomu-prodvigat-sait"],
    categoryTitle: [/фриланс/i, /бизнес/i],
    cover: COVER,
    coverAlt: "От брифа идут две дороги: одна непрерывная — к полному результату, а та же дистанция, разбитая на четыре отрезка с передачей работы на каждом стыке, заканчивается результатом с более короткими и бледными полосами",
    faqHeading: /^Частые вопросы о выборе между фрилансером/i,
  },
};

// The landing page in each language the article must not read as a copy of: the dry
// run prints its H1 and warns if an H2 here starts with it.
const LANDING = { en: "website-development", pl: "tworzenie-stron-internetowych", ru: "razrabotka-saitov" };

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

  // The draft is hard-wrapped at ~75 columns, so one markdown line is NOT one
  // paragraph: consecutive lines are joined until a blank line or a structural
  // line. Without this every wrapped line becomes its own paragraph (which is
  // what happened on the first publish of this article, 09.11.2026).
  let para = null; // { kind: "normal" | "bullet" | "number" | "blockquote", lines: [] }
  const emitPara = () => {
    if (!para) return;
    const p = para; para = null;
    const text = p.lines.join(" ").replace(/\s+/g, " ").trim();
    if (!text) return;
    const extra = p.kind === "bullet" ? { listItem: "bullet", level: 1 }
      : p.kind === "number" ? { listItem: "number", level: 1 } : {};
    const b = block(p.kind === "blockquote" ? "blockquote" : "normal", text, extra);
    if (inFaq && pending) pending.answer.push(b); else buf.push(b);
  };

  // The FAQ sits in the middle of this article, not at the end, so the faqBlock is
  // emitted where the FAQ ends — otherwise the closing section would precede it.
  const closeFaq = () => {
    if (!inFaq) return;
    if (pending) { faqItems.push(pending); pending = null; }
    if (faqItems.length) out.push({ _type: "faqBlock", _key: key(), title: faqTitle, faq: { _type: "accordionBlock", items: faqItems } });
    faqItems = []; inFaq = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (!t) { emitPara(); continue; }
    if (/^-{3,}$/.test(t)) { emitPara(); continue; } // section separator in the draft

    if (inFaq) {
      const q = t.match(/^\*\*(.+?)\*\*$/);
      if (q) { emitPara(); if (pending) faqItems.push(pending); pending = { _key: key(), question: q[1], answer: [] }; continue; }
    }
    if (t.startsWith("## ")) {
      emitPara(); closeFaq();
      const heading = t.slice(3).trim();
      if (cfg.faqHeading.test(heading)) {
        // the faqBlock's own title is not rendered on the page, so the heading goes
        // into the text above it as a real H2
        buf.push(block("h2", heading));
        flush();
        inFaq = true; faqTitle = heading; continue;
      }
      buf.push(block("h2", heading)); continue;
    }
    if (t.startsWith("### ")) { emitPara(); buf.push(block("h3", t.slice(4).trim())); continue; }
    if (t.startsWith("```")) {
      emitPara();
      const language = t.slice(3).trim() || "text";
      const code = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) code.push(lines[i]), i++;
      buf.push({ _type: "codeBlock", _key: key(), language, code: code.join("\n") });
      continue;
    }
    const img = t.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (img) {
      emitPara(); flush();
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
      emitPara(); flush();
      out.push({ _type: "tableBlock", _key: key(), columns: cells(rows[0]),
        rows: rows.slice(2).map((r) => ({ _type: "tableRow", _key: key(), cells: cells(r) })) });
      continue;
    }
    if (t.startsWith("> ")) {
      if (!para || para.kind !== "blockquote") { emitPara(); para = { kind: "blockquote", lines: [] }; }
      para.lines.push(t.slice(2).trim()); continue;
    }
    if (t.startsWith("- ")) { emitPara(); para = { kind: "bullet", lines: [t.slice(2).trim()] }; continue; }
    const num = t.match(/^\d+\.\s+(.+)$/);
    if (num) { emitPara(); para = { kind: "number", lines: [num[1]] }; continue; }
    if (!para) para = { kind: "normal", lines: [] };
    para.lines.push(t); // a wrapped continuation of the current paragraph or list item
  }
  emitPara();
  closeFaq();
  flush();
  return out;
}

const bySlug = (types, lang, slugs) => client.fetch(
  `*[_type in $types && language == $lang && slug[$lang].current in $slugs && !(_id in path("drafts.**"))]{_id, title, slug, category}`,
  { types, lang, slugs },
).then((rows) => rows.map((r) => ({ ...r, s: r.slug?.[lang]?.current })));

function pickCategory(cats, lang, cfg) {
  const override = argOf(`cat-${lang}`);
  if (override) {
    const hit = cats.find((c) => c._id === override);
    if (!hit) throw new Error(`${lang}: --cat-${lang}=${override} is not a category in this dataset`);
    return hit;
  }
  const pool = cats.filter((c) => c.language === lang);
  const scope = pool.length ? pool : cats;
  for (const re of cfg.categoryTitle) {
    const hits = scope.filter((c) => re.test(c.title || ""));
    if (hits.length === 1) return hits[0];
    if (hits.length > 1) {
      throw new Error(`${lang}: ${hits.length} categories match ${re} — ${hits.map((h) => `«${h.title}» ${h._id}`).join(", ")}. Pass --cat-${lang}=<id>`);
    }
  }
  throw new Error(`${lang}: no category matches ${cfg.categoryTitle.join(" / ")}. Available: ${scope.map((c) => `«${c.title}»`).join(", ")}. Pass --cat-${lang}=<id>`);
}

(async () => {
  if (!process.env.SANITY_API_TOKEN) throw new Error("SANITY_API_TOKEN missing");
  const ids = [...Object.values(LANGS).map((c) => c.id), META_ID];
  const live = await client.fetch(`*[_id in $all]._id`, { all: [...ids, ...ids.map((i) => `drafts.${i}`)] });
  if (REPLACE) {
    const missing = ids.filter((i) => !live.includes(i));
    if (missing.length) { console.log(`Aborting — --replace needs these to exist: ${missing.join(", ")}`); process.exit(1); }
  } else if (live.length) {
    console.log(`Aborting — already exists: ${live.join(", ")}. Use --replace to rewrite the text of these documents.`);
    process.exit(1);
  }

  const cats = await client.fetch(`*[_type == "category" && !(_id in path("drafts.**"))]{_id, language, title, slug}`);
  console.log(`categories in the dataset (${cats.length}):`);
  for (const c of cats) console.log(`  ${(c.language || "?").padEnd(3)} «${c.title}»  ${c._id}  slug=${JSON.stringify(c.slug ? Object.fromEntries(Object.entries(c.slug).filter(([k]) => !k.startsWith("_")).map(([k, v]) => [k, v?.current])) : {})}`);

  const docs = [];
  for (const [lang, cfg] of Object.entries(LANGS)) {
    const { meta, body } = parseDraft(fs.readFileSync(path.join(DRAFTS, cfg.file), "utf8"));
    for (const f of ["title", "slug", "meta_title", "meta_description"]) if (!meta[f]) throw new Error(`${lang}: «${f}» missing in ${cfg.file}`);
    const slugClash = await client.fetch(
      `*[defined(slug[$lang].current) && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]{_id, _type}`,
      { lang, s: meta.slug },
    );
    if (slugClash && slugClash._id !== cfg.id) { console.log(`Aborting — ${lang} slug «${meta.slug}» is taken by ${slugClash._id} (${slugClash._type})`); process.exit(1); }

    const svc = await bySlug(["singlepage", "service"], lang, cfg.services);
    const services = cfg.services.map((s) => svc.find((x) => x.s === s)).filter(Boolean).map((x) => x._id);
    const missSvc = cfg.services.filter((s) => !svc.some((x) => x.s === s));
    if (missSvc.length) console.log(`note: ${lang} service pages not found, left out: ${missSvc.join(", ")}`);
    const rel = await bySlug(["blog"], lang, cfg.related);
    const related = cfg.related.map((s) => rel.find((x) => x.s === s)).filter(Boolean).map((x) => x._id);
    const missRel = cfg.related.filter((s) => !rel.some((x) => x.s === s));
    if (missRel.length) console.log(`note: ${lang} related articles not found, left out: ${missRel.join(", ")}`);
    const cat = pickCategory(cats, lang, cfg);

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
      category: { _type: "reference", _ref: cat._id },
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
    console.log(`order:  ${blocks.map((b) => b._type.replace("textContent", "text").replace("faqBlock", "FAQ")).join(" → ")}`);
    const paras = heads.filter((x) => !x.style || x.style === "normal");
    const plain = paras.filter((x) => !x.listItem).map((x) => x.children.map((c) => c.text).join(""));
    const lens = plain.map((t) => t.length).sort((a, b) => a - b);
    console.log(`paragraphs: ${plain.length} (median ${lens[Math.floor(lens.length / 2)]} chars, max ${lens[lens.length - 1]}) · list items: ${paras.length - plain.length}`);
    console.log(`first:  ${plain[0]?.slice(0, 180)}…`);
    const faq = blocks.find((b) => b._type === "faqBlock");
    console.log(`FAQ:    ${faq ? faq.faq.items.length : 0} questions · «${faq ? faq.title : "—"}»`);
    console.log(`category: «${cat.title}» ${cat._id}`);
    console.log(`services: ${services.join(", ") || "—"}`);
    console.log(`related:  ${related.join(", ") || "—"}`);
    console.log(`H2s:\n  ${h2s.join("\n  ")}`);
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
  if (!APPLY) return console.log(`\nDry run — nothing uploaded or written. Add --apply${REPLACE ? " --replace" : ""} to ${REPLACE ? "rewrite the text" : "publish"}.`);

  const tx = client.transaction();
  if (REPLACE) {
    docs.forEach((d) => tx.patch(d._id, { set: { contentBlocks: d.contentBlocks } }));
    await tx.commit();
    console.log(`\nRewritten (contentBlocks only): ${docs.map((d) => d._id).join(", ")}`);
    console.log("The webhook revalidates the three pages — no redeploy needed.");
  } else {
    docs.forEach((d) => tx.create(d));
    tx.create(metaDoc);
    await tx.commit();
    console.log(`\nPublished: ${[...docs.map((d) => d._id), META_ID].join(", ")}`);
    console.log("Next: inbound links, then submit the three URLs to indexing.");
  }
})().catch((e) => { console.error("\n" + (e.message || e)); process.exit(1); });
