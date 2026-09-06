const fs = require("fs");
const path = require("path");
const { client, ref, key } = require("./create-batch1-warsaw.cjs");

const PREVIEW_ASSET = "image-dce52ac717f3fb41e5be6978e164140aeefaf784-2000x1126-png";

const SLUGS = {
  en: "renovation-and-investment-website-with-premium-design",
  pl: "strona-dla-firmy-remontowej-i-inwestycyjnej-warszawa",
  ru: "sayt-dlya-remontnoy-i-investicionnoy-kompanii",
};

const SERVICE_TAGS = {
  en: ["4e268c44-33b0-478c-984a-ed1725eb4746", "a283ecea-507a-4748-bb57-19bfc6b5af44"], // Web Development, SEO
  pl: ["111bd06f-ad3c-4c7e-ac14-1b7b01621a2b", "130e2053-5571-4972-95e5-abe4f33dd1ac"],
  ru: ["3d70b41a-8942-48c9-b964-e77bffa14897", "28f08b95-701f-4bed-920c-3562fd1fc6c7"],
};

const TECHNOLOGIES = {
  en: ["66e04eba-b33a-4628-bda6-cbd9a517175d", "3eb712f3-8080-4d46-b38e-7e833b491146", "9fca3ba1-bf0d-43eb-9070-f22eecbb01ef"], // WordPress, PHP, JavaScript
  pl: ["f8e41e4a-3c00-4e54-8754-594c6b0ceed7", "e020dc83-31e9-44e6-b491-a1ee1e453879", "813b8c9c-5a2f-46a8-879f-86d494478865"],
  ru: ["d16bbf06-f5d2-45d2-a900-acba8f4b89d0", "e096a19b-f07c-4de2-bed2-01085af9a1a4", "13afdb76-e259-4132-903a-fd5d0775a0ba"],
};

const LINK_TARGETS = {
  websiteDev: { en: "/services/website-development", pl: "/pl/oferty/tworzenie-stron-internetowych", ru: "/ru/uslugi/razrabotka-saitov" },
  seo: { en: "/services/seo-optimization-and-strategy", pl: "/pl/oferty/strategia-i-optymalizacja-seo", ru: "/ru/uslugi/seo-optimizaciya-i-strategiya" },
  multilingual: { en: "/multilingual-website-development", pl: "/pl/tworzenie-stron-wielojezycznych", ru: "/ru/razrabotka-multiyazychnogo-saita" },
  warsawConstruction: { pl: "/pl/oferty/pozycjonowanie-strony-firmy-budowlanej-warszawa", ru: "/ru/uslugi/prodvizhenie-saita-stroitelnoy-kompanii-varshava" },
};

// { headingIncludes: [phrase, targetKey][] } — matched against each locale's own h3 heading text
const LINK_PLAN = {
  en: [
    { heading: "answers the price question directly", phrase: "the site gives first and asks second", target: "websiteDev" },
    { heading: "SEO for a renovation website", phrase: "twenty indexable pages built for specific queries", target: "seo" },
    { heading: "Splitting a renovation website", phrase: "one site to maintain", target: "multilingual" },
    { heading: "collects photographs instead of descriptions", phrase: "The enquiry form", target: "websiteDev" },
  ],
  pl: [
    { heading: "Pozycjonowanie strony remontowej", phrase: "ktoś potrzebujący remontu", target: "warsawConstruction" },
    { heading: "Pozycjonowanie strony remontowej", phrase: "dwadzieścia indeksowalnych podstron zbudowanych pod konkretne zapytania", target: "seo" },
    { heading: "Rozdzielenie strony remontowej", phrase: "jedna strona do utrzymania", target: "multilingual" },
    { heading: "Kalkulator kosztów remontu", phrase: "strona najpierw daje, potem prosi", target: "websiteDev" },
  ],
  ru: [
    { heading: "Раскрутка сайта ремонтов", phrase: "тот, кому нужен ремонт", target: "warsawConstruction" },
    { heading: "Раскрутка сайта ремонтов", phrase: "двадцать индексируемых страниц под конкретные запросы", target: "seo" },
    { heading: "Разделение сайта ремонтов", phrase: "один сайт в поддержке", target: "multilingual" },
    { heading: "Калькулятор стоимости ремонта", phrase: "сначала сайт даёт, потом просит", target: "websiteDev" },
  ],
};

const SCREENSHOT_FILES = { 1: "1.jpg", 2: "2.jpg", 3: "3.jpg", 4: "4.jpg", 5: "5.jpg", 6: "6.jpg", 8: "8.jpg", 9: "9.jpg" };

// ---------------- parsing ----------------

function section(raw, tag) {
  const re = new RegExp(`\\[${tag}\\][^\\n]*\\n([\\s\\S]*?)(?=\\n\\[[A-Z]|\\n═|$)`);
  const m = raw.match(re);
  return m ? m[1].trim() : null;
}

function parseBullets(text) {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- "))
    .map((l) => l.slice(2).trim());
}

function parseScreenshots(raw) {
  const startIdx = raw.indexOf("SCREENSHOTS");
  const endIdx = raw.indexOf("MAIN CONTENT");
  const block = raw.slice(startIdx, endIdx);
  const entries = [...block.matchAll(/^(\d+)\.\s+title:\s+["«]([^"»]+)["»]\s*\n\s+alt:\s+["«]([^"»]+)["»]\s*\n\s+caption:\s+([^\n]+)/gm)];
  const out = {};
  for (const [, num, title, alt, caption] of entries) {
    out[num] = { title: title.trim(), alt: alt.trim(), caption: caption.trim() };
  }
  return out;
}

function parseMainContent(raw) {
  const startIdx = raw.indexOf("MAIN CONTENT");
  const endIdx = raw.indexOf("TECHNOLOGIES USED");
  const block = raw.slice(startIdx, endIdx);
  const parts = block.split(/^### /m).slice(1); // drop the "MAIN CONTENT..." preamble before first ###
  return parts.map((p) => {
    const lines = p.split("\n");
    const heading = lines[0].trim();
    const body = lines.slice(1).join("\n").trim();
    return { heading, body };
  });
}

function insertLink(body, phrase, marker) {
  const idx = body.indexOf(phrase);
  if (idx === -1) throw new Error(`Anchor phrase not found: "${phrase}"`);
  if (body.indexOf(phrase, idx + 1) !== -1) throw new Error(`Anchor phrase not unique: "${phrase}"`);
  return body.slice(0, idx) + `[[${phrase}|${marker}]]` + body.slice(idx + phrase.length);
}

// ---------------- portable text builders ----------------

function parseInlineSpans(text, linkMap, markDefs) {
  const tokens = text.split(/(\[\[[^\]]+?\|[A-Z_]+\]\]|\*\*[^*]+\*\*)/g).filter(Boolean);
  return tokens.map((tok) => {
    const linkMatch = tok.match(/^\[\[([^\]]+?)\|([A-Z_]+)\]\]$/);
    if (linkMatch) {
      const [, anchorText, id] = linkMatch;
      const href = linkMap[id];
      if (!href) throw new Error("Unknown link id: " + id);
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

function ptBlock(style, text, opts = {}) {
  const markDefs = [];
  const children = parseInlineSpans(text, opts.linkMap || {}, markDefs);
  const block = { _key: key(), _type: "block", style, markDefs, children };
  if (opts.listItem) {
    block.listItem = opts.listItem;
    block.level = 1;
  }
  return block;
}

function paragraphBlock(text) {
  return ptBlock("normal", text);
}

function bulletListPT(items) {
  return items.map((t) => ptBlock("normal", t, { listItem: "bullet" }));
}

// ---------------- document assembly ----------------

function buildDoc({ lang, docId, raw, coverAlt, screenshotAssets }) {
  const linkMap = {
    WEBSITEDEV: LINK_TARGETS.websiteDev[lang],
    SEO: LINK_TARGETS.seo[lang],
    MULTILINGUAL: LINK_TARGETS.multilingual[lang],
    WARSAWCONSTRUCTION: LINK_TARGETS.warsawConstruction[lang],
  };
  const title = section(raw, "TITLE");
  const fullTitle = section(raw, "FULL TITLE — H1");
  const excerpt = section(raw, "EXCERPT").replace(/\(≤200[^)]*\)\s*/g, "").trim();
  const seoRaw = section(raw, "SEO");
  const metaTitle = seoRaw.match(/metaTitle[^:]*:\s*(.+)/)[1].trim();
  const metaDescription = seoRaw.match(/metaDescription[^:]*:\s*(.+)/)[1].trim();

  const problemText = section(raw, "PROBLEM");
  const taskItems = parseBullets(section(raw, "TASK"));
  const resultsItems = parseBullets(section(raw, "RESULTS"));
  const workDoneItems = parseBullets(section(raw, "WORK DONE"));

  const shots = parseScreenshots(raw);
  const screenshots = Object.entries(SCREENSHOT_FILES).map(([oldNum]) => {
    const s = shots[oldNum];
    return {
      _key: key(),
      _type: "object",
      title: s.title,
      caption: [paragraphBlock(s.caption)],
      image: { _type: "image", asset: ref(screenshotAssets[oldNum]), alt: s.alt },
    };
  });

  const sections = parseMainContent(raw);
  const plan = LINK_PLAN[lang];
  const mainContent = sections.map((sec) => {
    let body = sec.body;
    const applicable = plan.filter((p) => sec.heading.includes(p.heading));
    for (const p of applicable) {
      body = insertLink(body, p.phrase, p.target.toUpperCase());
    }
    const paragraphs = body
      .split(/\n\n+/)
      .map((t) => t.trim())
      .filter(Boolean)
      .filter((t) => !/^═+$/.test(t)); // strip a trailing section-divider line swept in with the last section
    const content = [
      ptBlock("h3", sec.heading),
      ...paragraphs.map((t) => ptBlock("normal", t, { linkMap })),
    ];
    return { _key: key(), _type: "textContent", content, textAlign: "left" };
  });

  return {
    _id: docId,
    _type: "portfolio",
    language: lang,
    title,
    slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: SLUGS[lang] } },
    seo: { metaTitle, metaDescription },
    fullTitle,
    excerpt,
    keyFeatures: {
      clientName: "Orzeł Realty",
      industry: section(raw, "KEY FEATURES").match(/industry:\s*(.+)/)[1].trim(),
      services: SERVICE_TAGS[lang].map((id) => ({ _key: key(), _type: "reference", _ref: id })),
      website: { type: "text", text: "orzel-realty.pl" },
    },
    previewImage: { _type: "image", asset: ref(PREVIEW_ASSET), alt: coverAlt },
    challenges: {
      problem: [paragraphBlock(problemText)],
      task: bulletListPT(taskItems),
      results: bulletListPT(resultsItems),
      workDone: bulletListPT(workDoneItems),
    },
    screenshots,
    mainContent,
    technologiesUsed: TECHNOLOGIES[lang].map((id) => ref(id)),
    publishedAt: new Date().toISOString(),
  };
}

async function main() {
  const draftsDir = path.resolve(__dirname, "../drafts");
  const raw = {
    en: fs.readFileSync(path.join(draftsDir, "portfolio-orzel-realty-EN.md"), "utf8"),
    pl: fs.readFileSync(path.join(draftsDir, "portfolio-orzel-realty-PL.md"), "utf8"),
    ru: fs.readFileSync(path.join(draftsDir, "portfolio-orzel-realty-RU.md"), "utf8"),
  };

  const previewAltRaw = {
    en: section(raw.en, "PREVIEW IMAGE"),
    pl: section(raw.pl, "PREVIEW IMAGE"),
    ru: section(raw.ru, "PREVIEW IMAGE"),
  };
  const coverAlt = {};
  for (const lang of ["en", "pl", "ru"]) {
    const m = previewAltRaw[lang].match(/alt:\s*["«]([^"»]+)["»]/);
    coverAlt[lang] = m[1];
  }

  if (process.env.DRY_RUN) {
    const fakeAssets = Object.fromEntries(Object.keys(SCREENSHOT_FILES).map((n) => [n, `fake-asset-${n}`]));
    for (const lang of ["en", "pl", "ru"]) {
      const doc = buildDoc({ lang, docId: "x", raw: raw[lang], coverAlt: coverAlt[lang], screenshotAssets: fakeAssets });
      console.log(`\n=== ${lang} ===`);
      console.log("title:", doc.title);
      console.log("fullTitle:", doc.fullTitle);
      console.log("excerpt:", doc.excerpt, `(${doc.excerpt.length} chars)`);
      console.log("metaTitle:", doc.seo.metaTitle, `(${doc.seo.metaTitle.length} chars)`);
      console.log("metaDescription:", doc.seo.metaDescription, `(${doc.seo.metaDescription.length} chars)`);
      console.log("industry:", doc.keyFeatures.industry);
      console.log("challenges.problem blocks:", doc.challenges.problem.length);
      console.log("challenges.task items:", doc.challenges.task.length);
      console.log("challenges.results items:", doc.challenges.results.length);
      console.log("challenges.workDone items:", doc.challenges.workDone.length);
      console.log("screenshots:", doc.screenshots.length, doc.screenshots.map((s) => s.title));
      console.log("mainContent sections:", doc.mainContent.length, doc.mainContent.map((m) => m.content[0].children[0].text));
      console.log("mainContent link counts per section:", doc.mainContent.map((m) => m.content.reduce((n, b) => n + b.markDefs.length, 0)));
    }
    return;
  }

  // Upload screenshots once, reuse asset ids across all 3 locales.
  const screenshotAssets = {};
  for (const [num, filename] of Object.entries(SCREENSHOT_FILES)) {
    const asset = await client.assets.upload("image", fs.createReadStream(path.join(draftsDir, filename)), { filename });
    screenshotAssets[num] = asset._id;
    console.log(`uploaded ${filename} -> ${asset._id}`);
  }

  const tx = client.transaction();
  for (const lang of ["en", "pl", "ru"]) {
    const docId = lang === "en" ? "portfolio-orzel-realty" : `portfolio-orzel-realty.${lang}`;
    const doc = buildDoc({ lang, docId, raw: raw[lang], coverAlt: coverAlt[lang], screenshotAssets });
    tx.create(doc);
  }
  tx.create({
    _id: "portfolio-orzel-realty.i18n",
    _type: "translation.metadata",
    documentId: "portfolio-orzel-realty",
    translations: [
      { _key: "en", value: { _type: "reference", _ref: "portfolio-orzel-realty" } },
      { _key: "pl", value: { _type: "reference", _ref: "portfolio-orzel-realty.pl" } },
      { _key: "ru", value: { _type: "reference", _ref: "portfolio-orzel-realty.ru" } },
    ],
  });

  const result = await tx.commit();
  console.log("Committed:", JSON.stringify(result.results.map((r) => r.id), null, 1));
}

main().catch((e) => { console.error(e); process.exit(1); });
