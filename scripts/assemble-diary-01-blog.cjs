// scripts/assemble-diary-01-blog.cjs
//
// Assembles the three-locale blog-new-site-first-month document set from
// drafts/diary-01-{RU,EN,PL}.md plus the uploaded image assets, resolves the
// category / serviceOffered / relatedArticles references against Sanity, and
// writes the fully resolved structure to drafts/_diary-01-docs.json for review.
// Writes nothing to Sanity.
//
//   node scripts/assemble-diary-01-blog.cjs
//
// Draft format: [SLUG] [TITLE] [SEO] [EXCERPT] [CATEGORY] [PREVIEW IMAGE]
// [BODY 1] [FAQ] [BODY 2] [SERVICE OFFERED] [RELATED ARTICLES] [LINKS].
// Markdown inside the body: "### " headings, paragraphs, "- " bullets,
// "1. " numbered items, pipe tables, **bold**. Tables become tableBlock,
// images are injected after the section named in IMAGE_PLAN.

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { client } = require("./create-batch1-warsaw.cjs");

const key = () => crypto.randomBytes(6).toString("hex");
const DRAFTS = path.resolve(__dirname, "../drafts");
const BASE_ID = "blog-new-site-first-month";
const LANGS = ["en", "pl", "ru"];
const PUBLISHED_AT = "2026-10-15T09:00:00.000Z";

const ASSETS = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_diary-01-assets.json"), "utf8"));

// previewImage: one text-free illustration for all three locales. The localized
// impression charts moved into the body (first entry of IMAGE_PLAN).
const ILLUSTRATION = "preview-diary-01.png";
const PREVIEW = { en: ILLUSTRATION, pl: ILLUSTRATION, ru: ILLUSTRATION };

// Screenshot -> the heading its section ends with. Matching is by the first
// words of the heading, so a reworded tail does not break the plan.
const IMAGE_PLAN = {
  en: [
    ["Indexing and traffic numbers from the first", "chart-impressions-en.png", "Daily Google impressions of a new site: growth from 3 to 110 a day and a fall to 17"],
    ["Daily Google impressions of a new site", "1-gsc-performance.jpg", "Search Console, 28 days: 1,068 impressions, 6 clicks, 0.6% CTR and an average position of 14.9"],
    ['"Discovered — currently not indexed": 71 pages', "3-gsc-indexing.jpg", "Page indexing report: 81 pages indexed, 79 not indexed"],
    ["Google impressions came from the wrong markets", "2-gsc-countries.jpg", "Impressions and clicks by country: Poland, Kazakhstan, India, Mexico, Russia, the US, Ukraine, the UK"],
    ["ChatGPT referral traffic to a new site", "6-clarity-sources.jpg", "Clarity referrers: google.com 11 sessions, chatgpt.com 7, yandex 5"],
    ["Technical optimisation at launch", "5-clarity-dashboard.jpg", "Clarity dashboard: 161 sessions, 107 bot sessions excluded, 146 unique users"],
    ["Indexing in Bing and IndexNow", "4-bing-performance.jpg", "Bing Webmaster Tools: 56 impressions and no clicks between 20 September and 11 October"],
  ],
  pl: [
    ["Liczby indeksowania i ruchu z pierwszych", "chart-impressions-pl.png", "Wykres dziennych wyświetleń nowej strony w Google: wzrost z 3 do 110 i spadek do 17"],
    ["Wyświetlenia nowej strony w Google dzień po dniu", "1-gsc-performance.jpg", "Search Console, 28 dni: 1 068 wyświetleń, 6 kliknięć, CTR 0,6% i średnia pozycja 14,9"],
    ["„Wykryta — obecnie niezindeksowana”", "3-gsc-indexing.jpg", "Raport indeksowania stron: 81 adresów w indeksie, 79 poza nim"],
    ["Wyświetlenia w Google z rynków, które nie są celem", "2-gsc-countries.jpg", "Wyświetlenia i kliknięcia według krajów: Polska, Kazachstan, Indie, Meksyk, Rosja, USA, Ukraina, Wielka Brytania"],
    ["Ruch z ChatGPT na nową stronę", "6-clarity-sources.jpg", "Źródła w Clarity: google.com 11 sesji, chatgpt.com 7, yandex 5"],
    ["Optymalizacja techniczna strony", "5-clarity-dashboard.jpg", "Panel Clarity: 161 sesji, 107 odrzuconych sesji botów, 146 unikalnych użytkowników"],
    ["Indeksowanie w Bingu i IndexNow", "4-bing-performance.jpg", "Bing Webmaster Tools: 56 wyświetleń i zero kliknięć od 20 września do 11 października"],
  ],
  ru: [
    ["Ключевые числа индексации и трафика", "chart-impressions-ru.png", "График показов нового сайта в Google по дням: рост с 3 до 110 показов и спад до 17"],
    ["Показы нового сайта в Google по дням", "1-gsc-performance.jpg", "Search Console, 28 дней: 1 068 показов, 6 кликов, CTR 0,6% и средняя позиция 14,9"],
    ["«Обнаружена — не проиндексирована»", "3-gsc-indexing.jpg", "Отчёт об индексировании страниц: 81 страница в индексе, 79 вне индекса"],
    ["Показы в Google приходят не с целевых рынков", "2-gsc-countries.jpg", "Показы и клики по странам: Польша, Казахстан, Индия, Мексика, Россия, США, Украина, Великобритания"],
    ["Трафик из ChatGPT на новый сайт", "6-clarity-sources.jpg", "Источники переходов в Clarity: google.com 11 сеансов, chatgpt.com 7, yandex 5"],
    ["Техническая оптимизация сайта", "5-clarity-dashboard.jpg", "Дашборд Clarity: 161 сеанс, 107 отсеянных ботовых сеансов, 146 уникальных посетителей"],
    ["Индексация в Bing и IndexNow", "4-bing-performance.jpg", "Bing Webmaster Tools: 56 показов и ноль кликов с 20 сентября по 11 октября"],
  ],
};

// ------------------------------------------------------------- draft parse --

function readDraft(lang) {
  const p = path.join(DRAFTS, `diary-01-${lang.toUpperCase()}.md`);
  if (!fs.existsSync(p)) throw new Error(`Draft not found: ${p}`);
  return fs.readFileSync(p, "utf8");
}

function section(raw, tag) {
  const re = new RegExp(`\\[${tag.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}\\][^\\n]*\\n([\\s\\S]*?)(?=\\n\\[[A-Z][A-Z 0-9]*\\]|\\n═|$)`);
  const m = raw.match(re);
  if (!m) throw new Error(`Section not found: [${tag}]`);
  return m[1].trim();
}

const field = (block, name) => {
  const m = block.match(new RegExp(`${name}\\s*:\\s*(.+)`));
  if (!m) throw new Error(`Field not found: ${name}`);
  return m[1].trim();
};
const unquote = (s) => s.replace(/^[«"'\u201e\u201c]\s*/, "").replace(/\s*[»"'\u201d]$/, "").trim();

function parseLinks(raw) {
  const out = [];
  for (const line of section(raw, "LINKS").split("\n")) {
    const m = line.match(/^-\s*(.+?)\s*→\s*(\S+)/);
    if (m) out.push({ phrase: m[1].trim(), href: m[2].trim() });
  }
  return out;
}

// ------------------------------------------------------------ portable text --

function spans(text, links) {
  const parts = [];
  let rest = text;
  const markDefs = [];
  // one pass per planned link, first occurrence only
  const pieces = [{ text: rest, mark: null }];
  for (const { phrase, href } of links) {
    for (let i = 0; i < pieces.length; i++) {
      const p = pieces[i];
      if (p.mark || !p.text.includes(phrase)) continue;
      const idx = p.text.indexOf(phrase);
      const defKey = key();
      markDefs.push({ _key: defKey, _type: "link", href });
      const before = p.text.slice(0, idx);
      const after = p.text.slice(idx + phrase.length);
      pieces.splice(i, 1, { text: before, mark: null }, { text: phrase, mark: defKey }, { text: after, mark: null });
      break;
    }
  }
  for (const p of pieces) {
    if (!p.text) continue;
    for (const tok of p.text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean)) {
      const bold = tok.startsWith("**") && tok.endsWith("**");
      parts.push({
        _key: key(),
        _type: "span",
        marks: [p.mark, bold ? "strong" : null].filter(Boolean),
        text: bold ? tok.slice(2, -2) : tok,
      });
    }
  }
  return { children: parts, markDefs };
}

function ptBlock(style, text, links, listItem) {
  const { children, markDefs } = spans(text, links);
  const b = { _key: key(), _type: "block", style, markDefs, children };
  if (listItem) {
    b.listItem = listItem;
    b.level = 1;
  }
  return b;
}

// ------------------------------------------------------------ body -> blocks --

function bodyToBlocks(body, links, imagePlan, manifest) {
  const out = [];
  let buffer = [];
  let currentHeading = null;

  const flushText = () => {
    if (buffer.length) {
      out.push({ _key: key(), _type: "textContent", textAlign: "left", content: buffer });
      buffer = [];
    }
  };
  const flushImageFor = (heading) => {
    if (!heading) return;
    const hit = imagePlan.find(([prefix]) => heading.startsWith(prefix));
    if (!hit) return;
    const [, file, alt] = hit;
    if (!manifest[file]) throw new Error(`No uploaded asset for ${file} — run the uploader first`);
    flushText();
    out.push({
      _key: key(),
      _type: "imageFullBlock",
      title: "Image Full",
      imageMain: {
        aspectRatio: "10:5",
        picture: { _type: "image", alt, asset: { _type: "reference", _ref: manifest[file] } },
      },
    });
  };

  const lines = body.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^###\s+/.test(line)) {
      flushImageFor(currentHeading);
      currentHeading = line.replace(/^###\s+/, "").trim();
      buffer.push(ptBlock("h3", currentHeading, links));
      continue;
    }
    if (/^\|/.test(line)) {
      // markdown table
      const rows = [];
      while (i < lines.length && /^\|/.test(lines[i])) {
        rows.push(lines[i]);
        i++;
      }
      i--;
      const cells = rows.map((r) => r.split("|").slice(1, -1).map((c) => c.trim()));
      const columns = cells[0];
      const dataRows = cells.slice(1).filter((r) => !r.every((c) => /^-+$/.test(c)));
      flushText();
      out.push({
        _key: key(),
        _type: "tableBlock",
        columns,
        rows: dataRows.map((r) => ({ _key: key(), _type: "tableRow", cells: r })),
      });
      continue;
    }
    if (/^-\s+/.test(line)) {
      buffer.push(ptBlock("normal", line.replace(/^-\s+/, ""), links, "bullet"));
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      buffer.push(ptBlock("normal", line.replace(/^\d+\.\s+/, ""), links, "number"));
      continue;
    }
    if (line.trim()) buffer.push(ptBlock("normal", line.trim(), links));
  }
  flushImageFor(currentHeading);
  flushText();
  return out;
}

function faqBlockFrom(raw, links) {
  const block = section(raw, "FAQ");
  const title = field(block, "title");
  const items = [];
  const re = /^Q:\s*(.+)\n+A:\s*([\s\S]*?)(?=\n+Q:|\s*$)/gm;
  let m;
  while ((m = re.exec(block)) !== null) {
    items.push({
      _key: key(),
      question: m[1].trim(),
      answer: m[2].trim().split(/\n\n+/).map((p) => ptBlock("normal", p.trim(), links)),
    });
  }
  if (!items.length) throw new Error("FAQ has no Q/A pairs");
  return { _key: key(), _type: "faqBlock", title, faq: { _type: "accordionBlock", items } };
}

// ------------------------------------------------------- reference lookups --

const norm = (s) =>
  String(s || "")
    .normalize("NFC")
    .replace(/[\u00a0\u2007\u202f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

function pick(list, wanted, what, lang) {
  const target = norm(wanted);
  let hit = list.find((d) => d._id === wanted || norm(d.slug) === target || norm(d.title) === target);
  if (!hit) hit = list.find((d) => norm(d.title).replace(/[^\p{L}\p{N}]/gu, "") === target.replace(/[^\p{L}\p{N}]/gu, ""));
  if (!hit) {
    const words = target.split(" ").filter((w) => w.length > 3);
    const scored = list
      .map((d) => ({ d, n: words.filter((w) => norm(d.title).includes(w)).length }))
      .filter((x) => x.n > 0)
      .sort((a, b) => b.n - a.n)
      .slice(0, 5);
    const hints = scored.map((x) => `    - "${x.d.title}" (${x.d.slug || "?"})`).join("\n");
    throw new Error(
      `${what} not found: "${wanted}" (${lang})\n  closest titles in Sanity:\n${hints || "    (none)"}`
    );
  }
  return hit._id;
}

async function resolveRefs(lang, raw) {
  const categories = await client.fetch(
    `*[_type == "category" && language == $lang]{_id, title, "slug": slug}`,
    { lang }
  );
  const cat = pick(categories, section(raw, "CATEGORY"), "Category", lang);

  const pages = await client.fetch(
    `*[_type == "singlepage" && language == $lang]{_id, title, pageType, "slug": slug}`,
    { lang }
  );
  const serviceTitles = section(raw, "SERVICE OFFERED").split(",").map((s) => s.trim()).filter(Boolean);
  const services = serviceTitles.map((t) => pick(pages, t, "Service page", lang));

  const relatedIds = section(raw, "RELATED ARTICLES").split(",").map((s) => s.trim()).filter(Boolean);
  for (const id of relatedIds) {
    const found = await client.fetch(`*[_id == $id][0]._id`, { id });
    if (!found) throw new Error(`Related article not found: ${id}`);
  }
  return { category: cat, services, related: relatedIds };
}

// ------------------------------------------------------------------- build --

async function buildDoc(lang) {
  const raw = readDraft(lang);
  const links = parseLinks(raw);
  const seo = section(raw, "SEO");
  const refs = await resolveRefs(lang, raw);
  const previewAlt = unquote(field(section(raw, "PREVIEW IMAGE"), "alt"));
  const previewFile = PREVIEW[lang];
  if (!ASSETS[previewFile]) throw new Error(`No uploaded asset for ${previewFile}`);

  const contentBlocks = [
    ...bodyToBlocks(section(raw, "BODY 1"), links, IMAGE_PLAN[lang], ASSETS),
    faqBlockFrom(raw, links),
    ...bodyToBlocks(section(raw, "BODY 2"), links, [], ASSETS),
  ];

  return {
    _id: lang === "en" ? BASE_ID : `${BASE_ID}.${lang}`,
    _type: "blog",
    language: lang,
    title: section(raw, "TITLE"),
    slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: section(raw, "SLUG") } },
    seo: { metaTitle: field(seo, "metaTitle"), metaDescription: field(seo, "metaDescription") },
    excerpt: section(raw, "EXCERPT"),
    publishedAt: PUBLISHED_AT,
    category: { _type: "reference", _ref: refs.category },
    previewImage: { _type: "image", alt: previewAlt, asset: { _type: "reference", _ref: ASSETS[previewFile] } },
    contentBlocks,
    serviceOffered: refs.services.map((id) => ({ _key: key(), _type: "reference", _ref: id })),
    relatedArticles: refs.related.map((id) => ({ _key: key(), _type: "reference", _ref: id })),
  };
}

async function main() {
  const docs = {};
  for (const lang of LANGS) docs[lang] = await buildDoc(lang);

  const metaDoc = {
    _id: `${BASE_ID}.i18n`,
    _type: "translation.metadata",
    documentId: BASE_ID,
    translations: LANGS.map((lang) => ({
      _key: lang,
      value: { _type: "reference", _ref: docs[lang]._id },
    })),
  };

  fs.writeFileSync(path.join(DRAFTS, "_diary-01-docs.json"), JSON.stringify({ docs, metaDoc }, null, 1), "utf8");

  for (const lang of LANGS) {
    const d = docs[lang];
    const counts = d.contentBlocks.reduce((a, b) => ((a[b._type] = (a[b._type] || 0) + 1), a), {});
    console.log(`\n=== ${lang} === ${d._id}`);
    console.log("slug:            ", d.slug[lang].current);
    console.log("title:           ", d.title);
    console.log(`metaTitle:        ${d.seo.metaTitle}  (${d.seo.metaTitle.length})`);
    console.log(`metaDescription:  ${d.seo.metaDescription}  (${d.seo.metaDescription.length})`);
    console.log(`excerpt:          ${d.excerpt.length} chars`);
    console.log("blocks:          ", Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(", "));
    const headings = d.contentBlocks.flatMap((b) => (b._type === "textContent" ? b.content.filter((c) => c.style === "h3").map((c) => c.children.map((s) => s.text).join("")) : []));
    headings.forEach((h) => console.log("   - " + h));
    const faq = d.contentBlocks.find((b) => b._type === "faqBlock");
    console.log("faq:             ", faq.faq.items.length, "items");
    const linkCount = d.contentBlocks.reduce((n, b) => n + (b._type === "textContent" ? b.content.reduce((k, c) => k + (c.markDefs || []).length, 0) : 0), 0);
    console.log("internal links:  ", linkCount);
  }
  console.log("\nWritten: drafts/_diary-01-docs.json — review, then: node scripts/apply-diary-01-blog.cjs --apply");
}

main().catch((e) => {
  console.error("Error:", e.message);
  process.exit(1);
});
