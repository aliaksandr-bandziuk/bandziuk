const fs = require("fs");
const path = require("path");
const { client, ref, key } = require("./create-batch1-warsaw.cjs");

const CATEGORY = { en: "7fabc480-902f-4133-8951-3f6c1ba3fb29", pl: "a082cd4a-1681-4952-a0e7-88e70dc6f61c", ru: "9b17021c-1a92-432b-a0e1-1c057e25353b" };
const AUTHOR = { en: "author-aliaksandr-bandziuk", pl: "author-aliaksandr-bandziuk.pl", ru: "author-aliaksandr-bandziuk.ru" };
const WEBSITE_PAGE = { en: "singlepage-lingerie-website", pl: "singlepage-lingerie-website.pl", ru: "singlepage-lingerie-website.ru" };
const SEO_PAGE = { en: "singlepage-lingerie-seo", pl: "singlepage-lingerie-seo.pl", ru: "singlepage-lingerie-seo.ru" };
const CATALOG_PAGE = { en: "singlepage-catalog-website", pl: "singlepage-catalog-website.pl", ru: "singlepage-catalog-website.ru" };
const MULTILINGUAL_ARTICLE = { en: "blog-multilingual-website-cost", pl: "blog-multilingual-website-cost.pl", ru: "blog-multilingual-website-cost.ru" };
const AI_SEARCH_SERVICE = { en: "service-ai-search-readiness", pl: "service-ai-search-readiness.pl", ru: "service-ai-search-readiness.ru" };

const SLUGS = {
  en: "why-lingerie-brands-lose-to-their-retailers",
  pl: "dlaczego-marka-bielizny-przegrywa-z-detalistami",
  ru: "pochemu-brend-belya-proigryvaet-riteyleram",
};

const META = {
  en: { metaTitle: "Why a Lingerie Brand Loses in Search to Its Own Retailers", metaDescription: "A manufacturer with a strong brand ranks below the shops selling its own products. The mechanics: sizing systems, catalogue data, ad limits and trust.", excerpt: "Why a lingerie manufacturer with a known brand ranks below the retailers selling its own products — and which parts of that are fixable.", coverAlt: "Abstract diagram of four list cards connected by a pin to one highlighted card below" },
  pl: { metaTitle: "Dlaczego marka bielizny przegrywa w wyszukiwarce z detalistami", metaDescription: "Producent z mocną marką ustępuje w wynikach sklepom sprzedającym jego własny towar. Rozkładamy mechanikę: rozmiarówka, katalog, reklama, zaufanie.", excerpt: "Dlaczego producent bielizny ze znaną marką ustępuje w wyszukiwarce sklepom sprzedającym jego własny towar — i co z tego da się naprawić.", coverAlt: "Abstrakcyjny diagram czterech kart listy połączonych pinezką z jedną wyróżnioną kartą poniżej" },
  ru: { metaTitle: "Почему бренд белья проигрывает своим же ритейлерам в поиске", metaDescription: "Производитель с сильной маркой уступает в выдаче магазинам, которые продают его же товар. Разбираем механику: размерные сетки, каталог, реклама, доверие.", excerpt: "Почему производитель белья с известной маркой уступает в поиске магазинам, продающим его же товар, — и что из этого поддаётся исправлению.", coverAlt: "Абстрактная диаграмма: четыре карточки списка соединены булавкой с одной выделенной карточкой внизу" },
};

const TITLES = {
  en: "Why a Lingerie Brand Loses in Search to Its Own Retailers",
  pl: "Dlaczego marka bielizny przegrywa w wyszukiwarce z własnymi detalistami",
  ru: "Почему бренд белья проигрывает в поиске собственным ритейлерам",
};

// ---- portable text conversion (adds blockquote support on top of the shared helper's h2/h3/bold/link) ----
function parseInlineSpans(text, linkMap, markDefs) {
  const tokens = text.split(/(\[\[[^\]]+?\|[A-Z_]+\]\]|\*\*[^*]+\*\*)/g).filter(Boolean);
  return tokens.map((tok) => {
    const linkMatch = tok.match(/^\[\[([^\]]+?)\|([A-Z_]+)\]\]$/);
    if (linkMatch) {
      const [, anchorText, linkId] = linkMatch;
      const href = linkMap[linkId];
      if (!href) throw new Error("Unknown link id: " + linkId);
      const defKey = key();
      markDefs.push({ _key: defKey, _type: "link", href });
      return { _key: key(), _type: "span", marks: [defKey], text: anchorText };
    }
    if (tok.startsWith("**") && tok.endsWith("**")) {
      return { _key: key(), _type: "span", marks: ["strong"], text: tok.slice(2, -2) };
    }
    return { _key: key(), _type: "span", marks: [], text: tok };
  });
}
function ptBlock(style, text, linkMap) {
  const markDefs = [];
  const children = parseInlineSpans(text, linkMap, markDefs);
  return { _key: key(), _type: "block", style, markDefs, children };
}
function mdToPT(markdown, linkMap) {
  const lines = markdown.split("\n");
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const trimmed = lines[i].trim();
    if (trimmed === "") { i++; continue; }
    if (trimmed.startsWith("> ")) { blocks.push(ptBlock("blockquote", trimmed.slice(2), linkMap)); i++; continue; }
    if (trimmed.startsWith("### ")) { blocks.push(ptBlock("h3", trimmed.slice(4), linkMap)); i++; continue; }
    if (trimmed.startsWith("## ")) { blocks.push(ptBlock("h2", trimmed.slice(3), linkMap)); i++; continue; }
    blocks.push(ptBlock("normal", trimmed, linkMap));
    i++;
  }
  return blocks;
}
function textContent(bodyMd, linkMap) {
  return { _key: key(), _type: "textContent", content: mdToPT(bodyMd, linkMap), textAlign: "left" };
}

function parseMarkdownTable(tableLines) {
  const rows = tableLines.filter((l) => l.trim().startsWith("|"));
  const parseCells = (line) => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
  const columns = parseCells(rows[0]);
  const dataRows = rows.slice(2); // skip header + separator
  return {
    _key: key(),
    _type: "tableBlock",
    columns,
    rows: dataRows.map((r) => ({ _key: key(), _type: "tableRow", cells: parseCells(r) })),
  };
}

// Splits body markdown into [part1, table1, part2, table2, part3] by locating the
// two contiguous markdown-table regions (lines starting with "|").
function splitBodyAndTables(bodyMd) {
  const lines = bodyMd.split("\n");
  const tableRegions = [];
  let i = 0;
  while (i < lines.length) {
    if (lines[i].trim().startsWith("|")) {
      const start = i;
      while (i < lines.length && lines[i].trim().startsWith("|")) i++;
      tableRegions.push([start, i]); // [startIncl, endExcl)
    } else {
      i++;
    }
  }
  if (tableRegions.length !== 2) throw new Error(`Expected 2 markdown tables, found ${tableRegions.length}`);
  const [t1, t2] = tableRegions;
  const part1 = lines.slice(0, t1[0]).join("\n");
  const table1 = parseMarkdownTable(lines.slice(t1[0], t1[1]));
  const part2 = lines.slice(t1[1], t2[0]).join("\n");
  const table2 = parseMarkdownTable(lines.slice(t2[0], t2[1]));
  const part3 = lines.slice(t2[1]).join("\n");
  return { part1, table1, part2, table2, part3 };
}

// Extracts the article body: everything after the "---" closing the deliverables
// header, minus the leading "# H1" line (the H1 becomes the document's `title`).
function extractBody(raw) {
  // The opening "---" is the file's first line (no preceding newline), so it
  // never matches "\n---\n" — the first match found IS the closing delimiter.
  const closingIdx = raw.indexOf("\n---\n");
  if (closingIdx === -1) throw new Error("Could not find header-closing --- delimiter");
  let body = raw.slice(closingIdx + 5).trim();
  const lines = body.split("\n");
  if (lines[0].trim().startsWith("# ")) lines.shift();
  return lines.join("\n").trim();
}

function insertLink(body, phrase, linkId) {
  const idx = body.indexOf(phrase);
  if (idx === -1) throw new Error(`Anchor phrase not found: "${phrase}"`);
  if (body.indexOf(phrase, idx + 1) !== -1) throw new Error(`Anchor phrase not unique: "${phrase}"`);
  return body.slice(0, idx) + `[[${phrase}|${linkId}]]` + body.slice(idx + phrase.length);
}

const ANCHORS = {
  en: {
    website: "how manufacturer sites are built",
    seo: "the manufacturer should be first, and that part is reachable",
    aiSearch: "an AI assistant will draw on when a buyer asks what their size is in another system",
    catalog: "manufacturers with a large catalogue",
    multilingual: "every item multiplies across language versions",
  },
  pl: {
    website: "jak zbudowane są strony producentów",
    seo: "producent musi być pierwszy — i to akurat jest osiągalne",
    aiSearch: "materiał, po który sięgnie asystent AI, gdy kupujący zapyta, jaki ma rozmiar w innym systemie",
    catalog: "producentów z dużym katalogiem",
    multilingual: "każda pozycja mnoży się przez wersje językowe",
  },
  ru: {
    website: "как устроены сайты производителей",
    seo: "производитель обязан быть первым, и вот это как раз достижимо",
    aiSearch: "материал, к которому обратится ИИ-ассистент, когда покупатель спросит, какой у него размер в другой системе",
    catalog: "производителей с большим каталогом",
    multilingual: "каждая позиция умножается на языковые версии",
  },
};

async function main() {
  const draftsDir = path.resolve(__dirname, "../drafts");
  const raw = {
    en: fs.readFileSync(path.join(draftsDir, "blog-brand-loses-to-retailers-EN.md"), "utf8"),
    pl: fs.readFileSync(path.join(draftsDir, "blog-brand-loses-to-retailers-PL.md"), "utf8"),
    ru: fs.readFileSync(path.join(draftsDir, "blog-brand-loses-to-retailers-RU.md"), "utf8"),
  };

  const coverAssetId = await client.assets
    .upload("image", fs.createReadStream(path.join(draftsDir, "lingerie.jpg")), { filename: "lingerie.jpg" })
    .then((a) => a._id);
  console.log("Cover asset:", coverAssetId);

  const tx = client.transaction();
  const tableCounts = {};

  for (const lang of ["en", "pl", "ru"]) {
    let body = extractBody(raw[lang]);
    const a = ANCHORS[lang];
    body = insertLink(body, a.website, "WEBSITE");
    body = insertLink(body, a.seo, "SEO");
    body = insertLink(body, a.aiSearch, "AISEARCH");
    body = insertLink(body, a.catalog, "CATALOG");
    body = insertLink(body, a.multilingual, "MULTILINGUAL");

    const linkMap = {
      WEBSITE: `LOCALE_URL:${WEBSITE_PAGE[lang]}`,
      SEO: `LOCALE_URL:${SEO_PAGE[lang]}`,
      AISEARCH: `LOCALE_URL:${AI_SEARCH_SERVICE[lang]}`,
      CATALOG: `LOCALE_URL:${CATALOG_PAGE[lang]}`,
      MULTILINGUAL: `LOCALE_URL:${MULTILINGUAL_ARTICLE[lang]}`,
    };
    // placeholder resolved just below via resolveHrefs()
    const { part1, table1, part2, table2, part3 } = splitBodyAndTables(body);
    tableCounts[lang] = { table1: table1.rows.length, table2: table2.rows.length };

    const docId = lang === "en" ? "blog-brand-vs-retailers" : `blog-brand-vs-retailers.${lang}`;
    const doc = {
      _id: docId,
      _type: "blog",
      language: lang,
      title: TITLES[lang],
      slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: SLUGS[lang] } },
      seo: { metaTitle: META[lang].metaTitle, metaDescription: META[lang].metaDescription },
      publishedAt: "2026-08-24T12:00:00Z",
      category: ref(CATEGORY[lang]),
      author: ref(AUTHOR[lang]),
      previewImage: { _type: "image", asset: ref(coverAssetId), alt: META[lang].coverAlt },
      excerpt: META[lang].excerpt,
      contentBlocks: [
        textContentFrom(part1, linkMap),
        table1,
        textContentFrom(part2, linkMap),
        table2,
        textContentFrom(part3, linkMap),
      ],
      serviceOffered: [ref(SEO_PAGE[lang]), ref(WEBSITE_PAGE[lang])],
      relatedArticles: [ref(CATALOG_PAGE[lang]), ref(MULTILINGUAL_ARTICLE[lang]), ref(AI_SEARCH_SERVICE[lang])],
    };
    tx.create(doc);
  }

  tx.create({
    _id: "blog-brand-vs-retailers.i18n",
    _type: "translation.metadata",
    documentId: "blog-brand-vs-retailers",
    translations: [
      { _key: "en", value: { _type: "reference", _ref: "blog-brand-vs-retailers" } },
      { _key: "pl", value: { _type: "reference", _ref: "blog-brand-vs-retailers.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "blog-brand-vs-retailers.ru" } },
    ],
  });

  const result = await tx.commit();
  console.log("Committed:", JSON.stringify(result.results.map((r) => r.id), null, 1));
  console.log("Table row counts:", JSON.stringify(tableCounts, null, 1));
}

// textContentFrom needs real hrefs, not doc ids — resolved just-in-time via a
// synchronous lookup table built before main() runs. Since we need async doc
// lookups for full ancestor paths, resolve all hrefs up front instead.
let RESOLVED_HREFS = null;
function textContentFrom(bodyMd, linkMap) {
  const resolvedMap = {};
  for (const [k, v] of Object.entries(linkMap)) {
    const id = v.replace("LOCALE_URL:", "");
    if (!RESOLVED_HREFS[id]) throw new Error("No resolved href for " + id);
    resolvedMap[k] = RESOLVED_HREFS[id];
  }
  return textContent(bodyMd, resolvedMap);
}

const PREFIX = { en: "", pl: "/pl", ru: "/ru" };
async function pathFor(id) {
  let segs = [];
  let cur = await client.getDocument(id);
  if (!cur) throw new Error("Doc not found: " + id);
  const lang = cur.language;
  if (cur._type === "blog") {
    segs = ["blog", cur.slug[lang].current];
  } else {
    while (cur) {
      const slugObj = cur.slug && cur.slug[lang];
      if (!slugObj) break;
      segs.unshift(slugObj.current);
      if (!cur.parentPage) break;
      cur = await client.getDocument(cur.parentPage._ref);
    }
  }
  return PREFIX[lang] + "/" + segs.join("/");
}

(async () => {
  const ids = [
    ...Object.values(WEBSITE_PAGE), ...Object.values(SEO_PAGE),
    ...Object.values(CATALOG_PAGE), ...Object.values(MULTILINGUAL_ARTICLE),
    ...Object.values(AI_SEARCH_SERVICE),
  ];
  RESOLVED_HREFS = {};
  for (const id of ids) RESOLVED_HREFS[id] = await pathFor(id);
  console.log("Resolved hrefs:", JSON.stringify(RESOLVED_HREFS, null, 1));
  await main();
})().catch((e) => { console.error(e); process.exit(1); });
