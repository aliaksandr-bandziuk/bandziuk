// scripts/run-moveandinvest-portfolio.cjs
//
// Builds the moveandinvest.com portfolio case study in Sanity: three locale
// documents (en / pl / ru) plus the translation.metadata that ties them
// together, in a single transaction.
//
// Inputs
//   drafts/portfolio-moveandinvest-{EN,PL,RU}.md   the case text, section-tagged
//   drafts/screenshots-moveandinvest/assets.json   image asset ids, written by
//                                                  upload-moveandinvest-screenshots.cjs
//
// Run the screenshot uploader first — this script does not upload images.
//
// Usage:
//   node scripts/run-moveandinvest-portfolio.cjs --dry-run   parse, resolve refs, print, write nothing
//   node scripts/run-moveandinvest-portfolio.cjs             create the documents

const fs = require("fs");
const path = require("path");
const { client, ref, key } = require("./create-batch1-warsaw.cjs");

const DRY_RUN = process.argv.includes("--dry-run");
const LANGS = ["en", "pl", "ru"];
const BASE_ID = "portfolio-moveandinvest";

const DRAFTS = path.resolve(__dirname, "../drafts");
const SHOTS = path.join(DRAFTS, "screenshots-moveandinvest");
const MANIFEST = path.join(SHOTS, "assets.json");

// The image used as previewImage; it is deliberately kept out of the slider.
const PREVIEW_FILE = "11-preview-hero.png";
// Slider order. Filenames must match assets.json keys.
const SLIDER_FILES = [
  "1-comparison-table.png",
  "2-threshold-vs-real.png",
  "3-jurisdiction-cards.png",
  "4-route-finder.png",
  "5-calculator-line-by-line.png",
  "6-calculator-overview.png",
  "7-sources-verdicts.png",
  "8-change-log.png",
  "9-diagram-portugal-routes.png",
  "10-russian-version.png",
  "12-pagespeed.png",
];
// Slider file -> numbered entry in the [SCREENSHOTS] block of the drafts.
const SLIDER_ENTRY = {
  "1-comparison-table.png": 1,
  "2-threshold-vs-real.png": 2,
  "3-jurisdiction-cards.png": 3,
  "4-route-finder.png": 4,
  "5-calculator-line-by-line.png": 5,
  "6-calculator-overview.png": 6,
  "7-sources-verdicts.png": 7,
  "8-change-log.png": 8,
  "9-diagram-portugal-routes.png": 9,
  "10-russian-version.png": 10,
  "12-pagespeed.png": 12,
};

// Service references, per locale: Web Development, SEO.
const SERVICE_TAGS = {
  en: ["4e268c44-33b0-478c-984a-ed1725eb4746", "a283ecea-507a-4748-bb57-19bfc6b5af44"],
  pl: ["111bd06f-ad3c-4c7e-ac14-1b7b01621a2b", "130e2053-5571-4972-95e5-abe4f33dd1ac"],
  ru: ["3d70b41a-8942-48c9-b964-e77bffa14897", "28f08b95-701f-4bed-920c-3562fd1fc6c7"],
};

// Technologies are resolved by title against Sanity rather than hardcoded, so a
// renamed or missing document fails the run loudly instead of silently
// producing an empty block. Aliases cover naming drift in the CMS.
const TECHNOLOGIES = [
  { canonical: "Next.js", aliases: ["Next.js", "NextJS", "Next js"] },
  { canonical: "React", aliases: ["React", "React.js", "ReactJS"] },
  { canonical: "TypeScript", aliases: ["TypeScript", "Typescript", "TS"] },
  { canonical: "Sanity", aliases: ["Sanity", "Sanity.io", "Sanity CMS"] },
  { canonical: "Vercel", aliases: ["Vercel"] },
  { canonical: "SCSS", aliases: ["SCSS", "SCSS modules", "Sass", "SASS"] },
];

// Internal links inside MAIN CONTENT. Left empty on purpose: anchor phrases
// have to be chosen per locale against the final text, and a phrase that does
// not match exactly once throws rather than linking the wrong words.
// Shape: { en: [{ heading: "...", phrase: "...", href: "/services/..." }], ... }
const LINK_PLAN = { en: [], pl: [], ru: [] };

// ---------------- parsing ----------------

function readDraft(lang) {
  const p = path.join(DRAFTS, `portfolio-moveandinvest-${lang.toUpperCase()}.md`);
  if (!fs.existsSync(p)) throw new Error(`Draft not found: ${p}`);
  return fs.readFileSync(p, "utf8");
}

function section(raw, tag) {
  const re = new RegExp(
    `\\[${tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\][^\\n]*\\n([\\s\\S]*?)(?=\\n\\[[A-Z]|\\n═|$)`
  );
  const m = raw.match(re);
  if (!m) throw new Error(`Section not found: [${tag}]`);
  return m[1].trim();
}

function field(block, name) {
  const m = block.match(new RegExp(`${name}\\s*:\\s*(.+)`));
  if (!m) throw new Error(`Field not found: ${name}`);
  return m[1].trim();
}

function unquote(s) {
  return s.replace(/^[«"']\s*/, "").replace(/\s*[»"']$/, "").trim();
}

function parseBullets(text) {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- "))
    .map((l) => l.slice(2).trim());
}

// Entries look like:
//   7. title: "..."
//      alt: "..."
//      caption: ...
// with an optional parenthetical note line directly after the number.
function parseScreenshots(raw) {
  const block = section(raw, "SCREENSHOTS");
  const chunks = block.split(/\n(?=\s*\d+\.)/);
  const out = {};
  for (const chunk of chunks) {
    const num = chunk.match(/^\s*(\d+)\./);
    if (!num) continue;
    const title = chunk.match(/title:\s*(.+)/);
    const alt = chunk.match(/alt:\s*(.+)/);
    const caption = chunk.match(/caption:\s*([\s\S]+?)(?=\n\s*\d+\.|$)/);
    if (!title || !alt || !caption) throw new Error(`Screenshot ${num[1]} is missing a field`);
    out[Number(num[1])] = {
      title: unquote(title[1]),
      alt: unquote(alt[1]),
      caption: unquote(caption[1].replace(/\s*\n\s*/g, " ")),
    };
  }
  return out;
}

function parseMainContent(raw) {
  const block = section(raw, "MAIN CONTENT");
  return block
    .split(/^### /m)
    .slice(1)
    .map((part) => {
      const lines = part.split("\n");
      return { heading: lines[0].trim(), body: lines.slice(1).join("\n").trim() };
    });
}

// ---------------- portable text ----------------

function insertLink(body, phrase, marker) {
  const idx = body.indexOf(phrase);
  if (idx === -1) throw new Error(`Anchor phrase not found: "${phrase}"`);
  if (body.indexOf(phrase, idx + 1) !== -1) throw new Error(`Anchor phrase not unique: "${phrase}"`);
  return body.slice(0, idx) + `[[${phrase}|${marker}]]` + body.slice(idx + phrase.length);
}

function parseInlineSpans(text, linkMap, markDefs) {
  const tokens = text.split(/(\[\[[^\]]+?\|[A-Z0-9_]+\]\]|\*\*[^*]+\*\*)/g).filter(Boolean);
  return tokens.map((tok) => {
    const link = tok.match(/^\[\[([^\]]+?)\|([A-Z0-9_]+)\]\]$/);
    if (link) {
      const [, anchorText, id] = link;
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

const paragraphBlock = (t) => ptBlock("normal", t);
const bulletListPT = (items) => items.map((t) => ptBlock("normal", t, { listItem: "bullet" }));

// ---------------- reference resolution ----------------

async function resolveTechnologies() {
  const docs = await client.fetch(`*[_type == "technology"]{_id, title, language}`);
  const resolved = {};
  const missing = [];
  for (const lang of LANGS) {
    resolved[lang] = [];
    for (const tech of TECHNOLOGIES) {
      const hit = docs.find(
        (d) =>
          d.language === lang &&
          tech.aliases.some((a) => (d.title || "").trim().toLowerCase() === a.toLowerCase())
      );
      if (hit) resolved[lang].push({ title: hit.title, id: hit._id });
      else missing.push(`${lang}: ${tech.canonical}`);
    }
  }
  return { resolved, missing };
}

// ---------------- document assembly ----------------

function buildDoc({ lang, docId, raw, manifest, techIds }) {
  const linkMap = Object.fromEntries(
    (LINK_PLAN[lang] || []).map((p, i) => [`L${i}`, p.href])
  );

  const seo = section(raw, "SEO");
  const keyFeatures = section(raw, "KEY FEATURES");
  const previewAlt = unquote(field(section(raw, "PREVIEW IMAGE"), "alt"));

  const shots = parseScreenshots(raw);
  const screenshots = SLIDER_FILES.map((filename) => {
    const entry = shots[SLIDER_ENTRY[filename]];
    if (!entry) throw new Error(`No [SCREENSHOTS] entry for ${filename} (${lang})`);
    if (!manifest[filename]) throw new Error(`No uploaded asset for ${filename} — run the uploader first`);
    return {
      _key: key(),
      _type: "object",
      title: entry.title,
      caption: [paragraphBlock(entry.caption)],
      image: { _type: "image", asset: ref(manifest[filename]), alt: entry.alt },
    };
  });

  const plan = LINK_PLAN[lang] || [];
  const mainContent = parseMainContent(raw).map((sec) => {
    let body = sec.body;
    plan.forEach((p, i) => {
      if (sec.heading.includes(p.heading)) body = insertLink(body, p.phrase, `L${i}`);
    });
    const paragraphs = body
      .split(/\n\n+/)
      .map((t) => t.trim())
      .filter(Boolean)
      .filter((t) => !/^═+$/.test(t));
    return {
      _key: key(),
      _type: "textContent",
      textAlign: "left",
      content: [ptBlock("h3", sec.heading), ...paragraphs.map((t) => ptBlock("normal", t, { linkMap }))],
    };
  });

  const excerpt = section(raw, "EXCERPT").replace(/^\(.*?\)\s*/, "").trim();

  return {
    _id: docId,
    _type: "portfolio",
    language: lang,
    title: section(raw, "TITLE"),
    slug: {
      _type: "localizedSlug",
      [lang]: { _type: "slug", current: section(raw, "SLUG") },
    },
    seo: {
      metaTitle: field(seo, "metaTitle"),
      metaDescription: field(seo, "metaDescription"),
    },
    fullTitle: section(raw, "FULL TITLE — H1"),
    excerpt,
    keyFeatures: {
      clientName: field(keyFeatures, "clientName"),
      industry: field(keyFeatures, "industry"),
      services: SERVICE_TAGS[lang].map((id) => ({ _key: key(), _type: "reference", _ref: id })),
      website: {
        type: "link",
        linkLabel: "moveandinvest.com",
        linkDestination: "https://www.moveandinvest.com/",
      },
    },
    previewImage: { _type: "image", asset: ref(manifest[PREVIEW_FILE]), alt: previewAlt },
    challenges: {
      problem: section(raw, "PROBLEM")
        .split(/\n\n+/)
        .map((t) => paragraphBlock(t.trim()))
        .filter(Boolean),
      task: bulletListPT(parseBullets(section(raw, "TASK"))),
      results: bulletListPT(parseBullets(section(raw, "RESULTS"))),
      workDone: bulletListPT(parseBullets(section(raw, "WORK DONE"))),
    },
    screenshots,
    mainContent,
    technologiesUsed: techIds.map((id) => ref(id)),
    publishedAt: new Date().toISOString(),
  };
}

// ---------------- main ----------------

async function main() {
  if (!fs.existsSync(MANIFEST)) {
    throw new Error(
      `No ${MANIFEST}. Run: node scripts/upload-moveandinvest-screenshots.cjs`
    );
  }
  const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
  const raw = Object.fromEntries(LANGS.map((l) => [l, readDraft(l)]));

  const { resolved, missing } = await resolveTechnologies();
  if (missing.length) {
    console.error("Technology documents not found in Sanity:");
    missing.forEach((m) => console.error("  " + m));
    console.error("\nCreate them in the Studio (or add an alias in TECHNOLOGIES) and re-run.");
    process.exit(1);
  }

  const docs = LANGS.map((lang) =>
    buildDoc({
      lang,
      docId: lang === "en" ? BASE_ID : `${BASE_ID}.${lang}`,
      raw: raw[lang],
      manifest,
      techIds: resolved[lang].map((t) => t.id),
    })
  );

  if (DRY_RUN) {
    for (const doc of docs) {
      console.log(`\n=== ${doc.language} ===`);
      console.log("slug:            ", doc.slug[doc.language].current);
      console.log("title:           ", doc.title);
      console.log("fullTitle:       ", doc.fullTitle);
      console.log(`excerpt:          ${doc.excerpt}  (${doc.excerpt.length} chars)`);
      console.log(`metaTitle:        ${doc.seo.metaTitle}  (${doc.seo.metaTitle.length} chars)`);
      console.log(
        `metaDescription:  ${doc.seo.metaDescription}  (${doc.seo.metaDescription.length} chars)`
      );
      console.log("client / industry:", doc.keyFeatures.clientName, "/", doc.keyFeatures.industry);
      console.log("website:          ", doc.keyFeatures.website.linkDestination);
      console.log("challenges:       ", [
        `problem ${doc.challenges.problem.length} blocks`,
        `task ${doc.challenges.task.length}`,
        `results ${doc.challenges.results.length}`,
        `workDone ${doc.challenges.workDone.length}`,
      ].join(", "));
      console.log("screenshots:      ", doc.screenshots.length);
      doc.screenshots.forEach((s) => console.log("   - " + s.title));
      console.log("mainContent:      ", doc.mainContent.length, "sections");
      doc.mainContent.forEach((m) =>
        console.log("   - " + m.content[0].children.map((c) => c.text).join(""))
      );
      console.log(
        "technologies:     ",
        resolved[doc.language].map((t) => t.title).join(", ")
      );
      const links = doc.mainContent.reduce(
        (n, m) => n + m.content.reduce((k, b) => k + (b.markDefs || []).length, 0),
        0
      );
      console.log("internal links:   ", links);
    }
    console.log("\nDry run — nothing written.");
    return;
  }

  const tx = client.transaction();
  docs.forEach((doc) => tx.create(doc));
  tx.create({
    _id: `${BASE_ID}.i18n`,
    _type: "translation.metadata",
    documentId: BASE_ID,
    translations: LANGS.map((lang) => ({
      _key: lang,
      value: { _type: "reference", _ref: lang === "en" ? BASE_ID : `${BASE_ID}.${lang}` },
    })),
  });

  const result = await tx.commit();
  console.log("Committed:", JSON.stringify(result.results.map((r) => r.id), null, 1));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
