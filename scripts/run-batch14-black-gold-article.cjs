const fs = require("fs");
const path = require("path");
const { client, ref, key } = require("./create-batch1-warsaw.cjs");

const CATEGORY = { en: "7fabc480-902f-4133-8951-3f6c1ba3fb29", pl: "a082cd4a-1681-4952-a0e7-88e70dc6f61c", ru: "9b17021c-1a92-432b-a0e1-1c057e25353b" };
const AUTHOR = { en: "author-aliaksandr-bandziuk", pl: "author-aliaksandr-bandziuk.pl", ru: "author-aliaksandr-bandziuk.ru" };
const WEBSITE_DEV = { en: "8701994a-d9ba-4230-84b5-2e491b87cb61", pl: "b35e57c9-9cce-4ebd-ab05-5121ffa38fef", ru: "21d6001f-5181-4249-aef2-5ed9425bf81d" };
const SEO_SERVICE = { en: "42a469a6-28f3-4015-8b88-414c8eb3d4fa", pl: "77c5f5df-a6f3-49ca-8f42-f1439e3490c6", ru: "6a81eab0-6993-41a6-adc3-d9047a3b35a0" };
const HIGH_VALUE_ARTICLE = { en: "blog-high-value-clients-search", pl: "blog-high-value-clients-search.pl", ru: "blog-high-value-clients-search.ru" };
const ORZEL_PORTFOLIO = { en: "portfolio-orzel-realty", pl: "portfolio-orzel-realty.pl", ru: "portfolio-orzel-realty.ru" };

const SLUGS = {
  en: "black-and-gold-web-design-no-longer-reads-expensive",
  pl: "czarno-zloty-projekt-strony-nie-czyta-sie-jako-drogi",
  ru: "chernyy-s-zolotom-dizayn-sayta-ne-chitaetsya-kak-dorogo",
};

const META = {
  en: { metaTitle: "Black and Gold Web Design No Longer Reads as Expensive", metaDescription: "Why the palette used to signal premium stopped working, what buyers read instead, and what an expensive-looking website is actually made of.", excerpt: "Why black-and-gold stopped signalling premium, what visitors read instead, and where the impression of expense actually comes from.", coverAlt: "A black-and-gold palette that no longer distinguishes one site from another", inBodyAlt: "Palettes signalling premium positioning today" },
  pl: { metaTitle: "Czarno-złoty projekt strony nie czyta się już jako drogi", metaDescription: "Dlaczego zabieg oznaczający segment premium przestał działać, co odczytuje klient zamiast tego i z czego naprawdę składa się droga strona.", excerpt: "Dlaczego czarno-złota paleta przestała oznaczać premium, co odwiedzający odczytuje zamiast tego i skąd naprawdę bierze się wrażenie drogiej strony.", coverAlt: "Czarno-złota paleta, która przestała odróżniać jedną stronę od drugiej", inBodyAlt: "Palety, którymi oznacza się dziś segment premium" },
  ru: { metaTitle: "Дизайн сайта в чёрном с золотом больше не читается как дорого", metaDescription: "Почему приём, которым обозначают премиальность, перестал работать, что покупатель считывает вместо неё и чем на самом деле выглядит дорогой сайт.", excerpt: "Почему чёрно-золотая палитра перестала обозначать премиальность, что покупатель считывает вместо неё и в чём дороговизна выражается на самом деле.", coverAlt: "Чёрно-золотая палитра как приём, который перестал отличать один сайт от другого", inBodyAlt: "Примеры палитр, которыми премиальность обозначают сегодня" },
};

const TITLES = {
  en: "Black and Gold Web Design No Longer Reads as Expensive",
  pl: "Czarno-złoty projekt strony nie czyta się już jako drogi",
  ru: "Дизайн сайта в чёрном с золотом больше не читается как дорого",
};

// ---- portable text (blockquote-capable, same as the retailers-article helper) ----
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
function textContent(content) {
  return { _key: key(), _type: "textContent", content, textAlign: "left" };
}

function parseMarkdownTable(tableLines) {
  const rows = tableLines.filter((l) => l.trim().startsWith("|"));
  const parseCells = (line) => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
  const columns = parseCells(rows[0]);
  const dataRows = rows.slice(2);
  return {
    _key: key(),
    _type: "tableBlock",
    columns,
    rows: dataRows.map((r) => ({ _key: key(), _type: "tableRow", cells: parseCells(r) })),
  };
}

// Splits body markdown into [part1, table, part2] around the single markdown table.
function splitBodyAndTable(bodyMd) {
  const lines = bodyMd.split("\n");
  let start = -1, end = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith("|")) {
      if (start === -1) start = i;
      end = i + 1;
    } else if (start !== -1) {
      break;
    }
  }
  if (start === -1) throw new Error("No markdown table found");
  const part1 = lines.slice(0, start).join("\n");
  const table = parseMarkdownTable(lines.slice(start, end));
  const part2 = lines.slice(end).join("\n");
  return { part1, table, part2 };
}

function extractBody(raw) {
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
  en: { orzel: "a calculator that returns a price before asking for contact details", websiteDev: "I built a site", highValue: "someone choosing who to trust with money, time and fairly personal matters" },
  pl: { orzel: "kalkulator podający cenę przed poproszeniem o kontakt", websiteDev: "Robiłem stronę", highValue: "osoba wybierająca, komu powierzyć pieniądze, czas i sprawy dość osobiste" },
  ru: { orzel: "калькулятор, выдающий стоимость до запроса контактов", websiteDev: "Я делал сайт", highValue: "человек, выбирающий, кому доверить деньги, время и довольно личные вещи" },
};

async function main() {
  const draftsDir = path.resolve(__dirname, "../drafts");
  const raw = {
    en: fs.readFileSync(path.join(draftsDir, "blog-black-gold-not-premium-EN.md"), "utf8"),
    pl: fs.readFileSync(path.join(draftsDir, "blog-black-gold-not-premium-PL.md"), "utf8"),
    ru: fs.readFileSync(path.join(draftsDir, "blog-black-gold-not-premium-RU.md"), "utf8"),
  };

  const coverAssetId = await client.assets
    .upload("image", fs.createReadStream(path.join(draftsDir, "premium-black.jpg")), { filename: "premium-black.jpg" })
    .then((a) => a._id);
  console.log("Cover asset:", coverAssetId);

  const inBodyAssetIds = {};
  for (const lang of ["en", "pl", "ru"]) {
    const filename = `visual-palettes-roles-${lang}.png`;
    inBodyAssetIds[lang] = await client.assets
      .upload("image", fs.createReadStream(path.join(draftsDir, filename)), { filename })
      .then((a) => a._id);
    console.log(`In-body asset (${lang}):`, inBodyAssetIds[lang]);
  }

  // Resolve hrefs.
  const PREFIX = { en: "", pl: "/pl", ru: "/ru" };
  async function pathForBlogOrPortfolio(id) {
    let cur = await client.getDocument(id);
    if (!cur) throw new Error("Doc not found: " + id);
    const lang = cur.language;
    const segs = cur._type === "blog" ? ["blog", cur.slug[lang].current] : ["portfolio", cur.slug[lang].current];
    return PREFIX[lang] + "/" + segs.join("/");
  }
  async function pathForSinglepage(id) {
    let segs = [];
    let cur = await client.getDocument(id);
    if (!cur) return null;
    const lang = cur.language;
    while (cur) {
      const slugObj = cur.slug && cur.slug[lang];
      if (!slugObj) break;
      segs.unshift(slugObj.current);
      if (!cur.parentPage) break;
      cur = await client.getDocument(cur.parentPage._ref);
    }
    return PREFIX[lang] + "/" + segs.join("/");
  }
  const hrefs = {};
  for (const lang of ["en", "pl", "ru"]) {
    hrefs[lang] = {
      WEBSITEDEV: await pathForSinglepage(WEBSITE_DEV[lang]),
      SEO: await pathForSinglepage(SEO_SERVICE[lang]),
      HIGHVALUE: await pathForBlogOrPortfolio(HIGH_VALUE_ARTICLE[lang]),
      ORZEL: await pathForBlogOrPortfolio(ORZEL_PORTFOLIO[lang]),
    };
  }
  console.log("Resolved hrefs:", JSON.stringify(hrefs, null, 1));

  const tx = client.transaction();
  for (const lang of ["en", "pl", "ru"]) {
    let body = extractBody(raw[lang]);
    const a = ANCHORS[lang];
    body = insertLink(body, a.orzel, "ORZEL");
    body = insertLink(body, a.websiteDev, "WEBSITEDEV");
    body = insertLink(body, a.highValue, "HIGHVALUE");

    const linkMap = hrefs[lang];
    const { part1, table, part2 } = splitBodyAndTable(body);

    const part2Blocks = mdToPT(part2, linkMap);
    const imageNode = { _key: key(), _type: "image", asset: ref(inBodyAssetIds[lang]), alt: META[lang].inBodyAlt };
    // Insert the image right after part2's first paragraph (the section's closing
    // paragraph, which was the first thing in part2) and before the next heading.
    const firstParaEndIdx = part2Blocks.findIndex((b) => b.style === "h2" || b.style === "h3");
    const insertAt = firstParaEndIdx === -1 ? part2Blocks.length : firstParaEndIdx;
    part2Blocks.splice(insertAt, 0, imageNode);

    const docId = lang === "en" ? "blog-black-gold-premium" : `blog-black-gold-premium.${lang}`;
    const doc = {
      _id: docId,
      _type: "blog",
      language: lang,
      title: TITLES[lang],
      slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: SLUGS[lang] } },
      seo: { metaTitle: META[lang].metaTitle, metaDescription: META[lang].metaDescription },
      publishedAt: "2026-09-03T12:00:00Z",
      category: ref(CATEGORY[lang]),
      author: ref(AUTHOR[lang]),
      previewImage: { _type: "image", asset: ref(coverAssetId), alt: META[lang].coverAlt },
      excerpt: META[lang].excerpt,
      contentBlocks: [
        textContent(mdToPT(part1, linkMap)),
        table,
        textContent(part2Blocks),
      ],
      serviceOffered: [ref(WEBSITE_DEV[lang]), ref(SEO_SERVICE[lang])],
    };
    tx.create(doc);
  }

  tx.create({
    _id: "blog-black-gold-premium.i18n",
    _type: "translation.metadata",
    documentId: "blog-black-gold-premium",
    translations: [
      { _key: "en", value: { _type: "reference", _ref: "blog-black-gold-premium" } },
      { _key: "pl", value: { _type: "reference", _ref: "blog-black-gold-premium.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "blog-black-gold-premium.ru" } },
    ],
  });

  const result = await tx.commit();
  console.log("Committed:", JSON.stringify(result.results.map((r) => r.id), null, 1));
}

main().catch((e) => { console.error(e); process.exit(1); });
