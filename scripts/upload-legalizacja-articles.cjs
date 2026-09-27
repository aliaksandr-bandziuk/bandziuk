// scripts/upload-legalizacja-articles.cjs
//
// Uploads the three drafts/blog-legalizacja-cudzoziemcy-*.md articles into
// Sanity AS DRAFTS (ids prefixed with "drafts."), so nothing appears on the
// site until the owner presses Publish in Studio.
//
// Markdown is converted into the blocks the blog schema actually accepts:
//   paragraphs, H2/H3, blockquote, bullets → textContent (contentBlock)
//   | a | b | tables                        → tableBlock
//   ![alt](article-figures/x.png)           → imageFullBlock
//   the FAQ section (bold question + answer) → faqBlock, because the Accordion
//     is what emits FAQPage structured data on this site (CLAUDE.md §10)
//
// Images are uploaded once and their asset ids cached in
// drafts/article-figures/.sanity-assets.json, so a re-run replaces the
// documents without creating duplicate assets.
//
// Usage:
//   node scripts/upload-legalizacja-articles.cjs --dry-run
//   node scripts/upload-legalizacja-articles.cjs

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "..");
const DRAFTS = path.join(ROOT, "drafts");
const FIGDIR = path.join(DRAFTS, "article-figures");
const ASSET_CACHE = path.join(FIGDIR, ".sanity-assets.json");
const DRY = process.argv.includes("--dry-run");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const BASE_ID = "blog-legalizacja-cudzoziemcy";
const PUBLISHED_AT = "2026-09-27T09:00:00Z";

const LANGS = {
  pl: {
    file: "blog-legalizacja-cudzoziemcy-PL.md",
    id: `${BASE_ID}.pl`,
    author: "author-aliaksandr-bandziuk.pl",
    category: "4c02f912-80b8-4121-a549-b3ba93004717", // Strategia SEO
    services: ["singlepage-multilingual-website.pl", "service-local-seo.pl", "service-ai-search-readiness.pl", "singlepage-answer-engine-optimization.pl"],
    related: ["d7c4dc47-ce4c-4324-b334-46300222b521", "blog-agency-website-cost.pl", "blog-ai-assistant-study.pl", "portfolio-moveandinvest.pl"],
    cover: "cover-legalizacja-pl.png",
    coverAlt: "Okno przeglądarki: karta pobytu ze zdjęciem, chipem i pieczątką obok listy wyników wyszukiwania, w której część pozycji jest wyróżniona",
    faqHeading: /Najczęstsze pytania/i,
  },
  ru: {
    file: "blog-legalizacja-cudzoziemcy-RU.md",
    id: `${BASE_ID}.ru`,
    author: "author-aliaksandr-bandziuk.ru",
    category: "3de42d3b-9502-4c80-bcb0-7e438073df9b", // SEO-стратегия
    services: ["singlepage-multilingual-website.ru", "service-local-seo.ru", "service-ai-search-readiness.ru"],
    related: ["blog-ai-assistant-study.ru", "blog-agency-website-cost.ru", "portfolio-moveandinvest.ru"],
    cover: "cover-legalizacja-ru.png",
    coverAlt: "Окно браузера: карта побыту с фотографией, чипом и штампом рядом со списком результатов поиска, часть из которых выделена",
    faqHeading: /Частые вопросы/i,
  },
  en: {
    file: "blog-legalizacja-cudzoziemcy-EN.md",
    id: BASE_ID,
    author: "author-aliaksandr-bandziuk",
    category: "79c9a689-22de-413b-ac24-a00aa192206d", // SEO Strategy
    services: ["singlepage-multilingual-website", "service-local-seo", "service-ai-search-readiness", "singlepage-answer-engine-optimization"],
    related: ["53f4a797-8b17-4427-9b13-74b8c4db71e0", "blog-agency-website-cost", "blog-ai-assistant-study", "portfolio-moveandinvest"],
    cover: "cover-legalizacja-en.png",
    coverAlt: "A browser window: a residence card with a photo, chip and approval stamp beside a list of search results, several of them highlighted",
    faqHeading: /Common questions/i,
  },
};

// ----------------------------------------------------------------- helpers --

const key = () => crypto.randomBytes(6).toString("hex");

// Inline markdown → spans + markDefs. Handles **strong** and [text](href),
// which is everything these drafts use.
function inline(text) {
  const spans = [];
  const markDefs = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0, m;
  const push = (t, marks) => { if (t) spans.push({ _type: "span", _key: key(), text: t, marks: marks || [] }); };
  while ((m = re.exec(text))) {
    push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      push(m[1], ["strong"]);
    } else {
      const dk = key();
      markDefs.push({ _type: "link", _key: dk, href: m[3] });
      push(m[2], [dk]);
    }
    last = m.index + m[0].length;
  }
  push(text.slice(last));
  return { children: spans.length ? spans : [{ _type: "span", _key: key(), text: "", marks: [] }], markDefs };
}

const block = (style, text, extra = {}) => {
  const { children, markDefs } = inline(text);
  return { _type: "block", _key: key(), style, children, markDefs, ...extra };
};

// ------------------------------------------------------------------ assets --

const cache = fs.existsSync(ASSET_CACHE) ? JSON.parse(fs.readFileSync(ASSET_CACHE, "utf8")) : {};

async function uploadImage(filename) {
  if (cache[filename]) return cache[filename];
  const file = path.join(FIGDIR, filename);
  if (!fs.existsSync(file)) throw new Error(`missing image: ${file}`);
  if (DRY) { console.log(`   would upload ${filename}`); return `ASSET(${filename})`; }
  // Uploaded as an image asset, never as a file: only image assets go through
  // the Sanity image pipeline and get resized by the loader (CLAUDE.md §12).
  const asset = await client.assets.upload("image", fs.createReadStream(file), { filename });
  cache[filename] = asset._id;
  fs.writeFileSync(ASSET_CACHE, JSON.stringify(cache, null, 1));
  console.log(`   uploaded ${filename} → ${asset._id}`);
  return asset._id;
}

// ------------------------------------------------------------------- parse --

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
  let buf = [];               // portable-text blocks waiting to be flushed
  const flush = () => {
    if (!buf.length) return;
    out.push({ _type: "textContent", _key: key(), content: buf, textAlign: "left" });
    buf = [];
  };

  const lines = body.split("\n");
  let inFaq = false;
  let faqItems = [];
  let faqTitle = "";
  let pending = null;          // current faq item being built

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const t = line.trim();

    if (!t) continue;

    // ---- FAQ section: bold question, then its answer paragraphs -----------
    if (inFaq) {
      if (t.startsWith("## ")) {
        if (pending) faqItems.push(pending), (pending = null);
        inFaq = false;                       // fall through to normal handling
      } else {
        const q = t.match(/^\*\*(.+?)\*\*$/);
        if (q) {
          if (pending) faqItems.push(pending);
          pending = { _key: key(), question: q[1], answer: [] };
        } else if (pending) {
          pending.answer.push(block("normal", t));
        }
        continue;
      }
    }

    // ---- headings ---------------------------------------------------------
    if (t.startsWith("## ")) {
      const heading = t.slice(3).trim();
      if (cfg.faqHeading.test(heading)) {     // the FAQ block owns its own title
        flush();
        inFaq = true;
        faqTitle = heading;
        continue;
      }
      buf.push(block("h2", heading));
      continue;
    }
    if (t.startsWith("### ")) { buf.push(block("h3", t.slice(4).trim())); continue; }

    // ---- image ------------------------------------------------------------
    const img = t.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (img) {
      flush();
      const filename = path.basename(img[2]);
      const assetId = await uploadImage(filename);
      // No aspectRatio on purpose: ImageFullBlockComponent renders an image
      // without one at its own size, while a forced ratio is object-fit: cover
      // and would crop the edges off these charts.
      out.push({
        _type: "imageFullBlock", _key: key(),
        title: img[1].slice(0, 60),
        imageMain: {
          picture: { _type: "image", alt: img[1], asset: { _type: "reference", _ref: assetId } },
        },
      });
      continue;
    }

    // ---- table ------------------------------------------------------------
    if (t.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(lines[i].trim());
        i++;
      }
      i--;
      const cells = (r) => r.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      const header = cells(rows[0]);
      const bodyRows = rows.slice(2).map(cells);     // rows[1] is the --- separator
      flush();
      out.push({
        _type: "tableBlock", _key: key(),
        columns: header,
        rows: bodyRows.map((r) => ({ _type: "tableRow", _key: key(), cells: r })),
      });
      continue;
    }

    // ---- quote / list / paragraph ----------------------------------------
    if (t.startsWith("> ")) { buf.push(block("blockquote", t.slice(2).trim())); continue; }
    if (t.startsWith("- ")) { buf.push(block("normal", t.slice(2).trim(), { listItem: "bullet", level: 1 })); continue; }
    buf.push(block("normal", t));
  }

  if (pending) faqItems.push(pending);
  flush();

  if (faqItems.length) {
    out.push({
      _type: "faqBlock", _key: key(),
      title: faqTitle,
      faq: { _type: "accordionBlock", items: faqItems },
    });
  }
  return out;
}

// -------------------------------------------------------------------- main --

(async () => {
  if (!process.env.SANITY_API_TOKEN) throw new Error("SANITY_API_TOKEN missing");
  console.log(DRY ? "DRY RUN — nothing is written\n" : "Writing DRAFTS (nothing goes live until you press Publish)\n");

  for (const [lang, cfg] of Object.entries(LANGS)) {
    console.log(`=== ${lang.toUpperCase()} ===`);
    const { meta, body } = parseDraft(fs.readFileSync(path.join(DRAFTS, cfg.file), "utf8"));
    const blocks = await toContentBlocks(body, cfg);
    const coverAsset = await uploadImage(cfg.cover);

    const doc = {
      _id: `drafts.${cfg.id}`,
      _type: "blog",
      language: lang,
      title: meta.title,
      slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: meta.slug } },
      seo: { metaTitle: meta.meta_title, metaDescription: meta.meta_description },
      excerpt: meta.meta_description,
      publishedAt: PUBLISHED_AT,
      author: { _type: "reference", _ref: cfg.author },
      category: { _type: "reference", _ref: cfg.category },
      previewImage: { _type: "image", alt: cfg.coverAlt, asset: { _type: "reference", _ref: coverAsset } },
      serviceOffered: cfg.services.map((id) => ({ _type: "reference", _key: id, _ref: id })),
      relatedArticles: cfg.related.map((id) => ({ _type: "reference", _key: id, _ref: id })),
      contentBlocks: blocks,
    };

    const counts = blocks.reduce((a, b) => ((a[b._type] = (a[b._type] || 0) + 1), a), {});
    console.log(`   ${meta.slug}`);
    console.log(`   blocks: ${JSON.stringify(counts)}`);
    const faq = blocks.find((b) => b._type === "faqBlock");
    if (faq) console.log(`   faq items: ${faq.faq.items.length}`);
    console.log(`   services: ${cfg.services.length} · related: ${cfg.related.length}`);

    if (DRY) { console.log("   (dry run — not written)\n"); continue; }
    await client.createOrReplace(doc);
    console.log(`   written: drafts.${cfg.id}\n`);
  }

  console.log("Done. The three documents are drafts — open Studio at /admin to review.");
  console.log("After publishing all three, run scripts/link-legalizacja-translations.cjs to create translation.metadata.");
})().catch((e) => { console.error("\n" + (e.message || e)); process.exit(1); });
