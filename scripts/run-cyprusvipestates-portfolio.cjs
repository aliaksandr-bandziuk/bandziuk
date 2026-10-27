// scripts/run-cyprusvipestates-portfolio.cjs
//
// Rewrites the EXISTING cyprusvipestates.com portfolio case (EN / PL / RU) in place:
// new texts (SEO and GEO focus), new screenshots. Document ids, slugs, the
// translation metadata, the service tags and the website field are kept, so
// every address and every link to the case keeps working.
//
// Inputs
//   drafts/portfolio-cyprusvipestates-{EN,PL,RU}.md   case text, section-tagged
//   drafts/screenshots-cyprusvipestates/assets.json   written by upload-cyprusvipestates-screenshots.cjs
//
// Usage:
//   node scripts/run-cyprusvipestates-portfolio.cjs --dry-run   parse, find the documents, print, write nothing
//   node scripts/run-cyprusvipestates-portfolio.cjs             patch the three documents (one transaction)

const fs = require("fs");
const path = require("path");
const { client, ref, key } = require("./create-batch1-warsaw.cjs");

const DRY_RUN = process.argv.includes("--dry-run");
const LANGS = ["en", "pl", "ru"];
const EN_SLUG = "build-and-optimize-a-multilingual-real-estate-platform";

const DRAFTS = path.resolve(__dirname, "../drafts");
const MANIFEST = path.join(DRAFTS, "screenshots-cyprusvipestates", "assets.json");

const PREVIEW_FILE = "1-home-en.jpg";
const SLIDER_FILES = [
  "2-catalog.jpg", "3-map.jpg", "4-project-page.jpg", "5-project-specs.jpg",
  "6-landing-offplan-paphos.jpg", "7-landing-listing.jpg", "8-comparison-article.jpg",
  "9-german-article.jpg", "10-german-home.jpg", "11-hebrew-home.jpg", "12-case-studies.jpg",
];
const SLIDER_ENTRY = Object.fromEntries(SLIDER_FILES.map((f) => [f, parseInt(f, 10)]));

// Technologies resolved by title per locale. Optional ones are skipped with a
// note when the technology document does not exist in Sanity.
const TECHNOLOGIES = [
  { canonical: "Next.js", aliases: ["Next.js", "NextJS", "Next js"] },
  { canonical: "React", aliases: ["React", "React.js", "ReactJS"] },
  { canonical: "TypeScript", aliases: ["TypeScript", "Typescript", "TS"] },
  { canonical: "API Integration", aliases: ["API Integration", "Integracja API", "Интеграция API"], optional: true },
  { canonical: "SEO", aliases: ["SEO"] },
  { canonical: "Google Analytics", aliases: ["Google Analytics", "GA4"], optional: true },
  { canonical: "Prisma", aliases: ["Prisma"], optional: true },
  { canonical: "Nginx", aliases: ["Nginx", "NGINX"], optional: true },
  { canonical: "Git", aliases: ["Git"], optional: true },
];

// ---------------- parsing ----------------

const readDraft = (lang) => {
  const p = path.join(DRAFTS, `portfolio-cyprusvipestates-${lang.toUpperCase()}.md`);
  if (!fs.existsSync(p)) throw new Error(`Draft not found: ${p}`);
  return fs.readFileSync(p, "utf8").replace(/\r\n/g, "\n");
};
function section(raw, tag) {
  const re = new RegExp(`\\[${tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\][^\\n]*\\n([\\s\\S]*?)(?=\\n\\[[A-Z]|\\n═|$)`);
  const m = raw.match(re);
  if (!m) throw new Error(`Section not found: [${tag}]`);
  return m[1].trim();
}
function field(block, name) {
  const m = block.match(new RegExp(`${name}\\s*:\\s*(.+)`));
  if (!m) throw new Error(`Field not found: ${name}`);
  return m[1].trim();
}
const unquote = (s) => s.replace(/^[«"'„“]\s*/, "").replace(/\s*[»"'”“]$/, "").trim();
const parseBullets = (text) => text.split("\n").map((l) => l.trim()).filter((l) => l.startsWith("- ")).map((l) => l.slice(2).trim());
function parseScreenshots(raw) {
  const block = section(raw, "SCREENSHOTS");
  const out = {};
  for (const chunk of block.split(/\n(?=\s*\d+\.)/)) {
    const num = chunk.match(/^\s*(\d+)\./);
    if (!num) continue;
    const title = chunk.match(/title:\s*(.+)/), alt = chunk.match(/alt:\s*(.+)/), caption = chunk.match(/caption:\s*([\s\S]+?)(?=\n\s*\d+\.|$)/);
    if (!title || !alt || !caption) throw new Error(`Screenshot ${num[1]} is missing a field`);
    out[Number(num[1])] = { title: unquote(title[1]), alt: unquote(alt[1]), caption: unquote(caption[1].replace(/\s*\n\s*/g, " ")) };
  }
  return out;
}
const parseMainContent = (raw) => section(raw, "MAIN CONTENT").split(/^### /m).slice(1).map((part) => {
  const lines = part.split("\n");
  return { heading: lines[0].trim(), body: lines.slice(1).join("\n").trim() };
});

// ---------------- portable text ----------------

function spans(text, markDefs) {
  return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((tok) =>
    tok.startsWith("**") && tok.endsWith("**")
      ? { _key: key(), _type: "span", marks: ["strong"], text: tok.slice(2, -2) }
      : { _key: key(), _type: "span", marks: [], text: tok });
}
function ptBlock(style, text, listItem) {
  const markDefs = [];
  const b = { _key: key(), _type: "block", style, markDefs, children: spans(text, markDefs) };
  if (listItem) { b.listItem = listItem; b.level = 1; }
  return b;
}
const bulletListPT = (items) => items.map((t) => ptBlock("normal", t, "bullet"));
// A chunk whose lines all start with "- " becomes a bullet list; others are paragraphs.
function bodyBlocks(body) {
  return body.split(/\n\n+/).map((t) => t.trim()).filter(Boolean).flatMap((chunk) => {
    const lines = chunk.split("\n").map((l) => l.trim());
    if (lines.every((l) => l.startsWith("- "))) return bulletListPT(lines.map((l) => l.slice(2)));
    return [ptBlock("normal", lines.join(" "))];
  });
}

// ---------------- documents ----------------

async function findDocs() {
  const en = await client.fetch(`*[_type == "portfolio" && slug.en.current == $s && !(_id in path("drafts.**"))][0]{_id}`, { s: EN_SLUG });
  if (!en) throw new Error(`EN portfolio document with slug ${EN_SLUG} not found`);
  const meta = await client.fetch(`*[_type == "translation.metadata" && references($id)][0]{"ids": translations[].value._ref}`, { id: en._id });
  const ids = (meta && meta.ids) || [en._id];
  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, language, slug, title, fullTitle, "shots": count(screenshots), "mc": count(mainContent)}`, { ids });
  const byLang = Object.fromEntries(docs.map((d) => [d.language, d]));
  for (const l of LANGS) if (!byLang[l]) throw new Error(`No ${l} document in the translation group of ${en._id}`);
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: LANGS.map((l) => `drafts.${byLang[l]._id}`) });
  if (drafts.length) throw new Error(`Drafts exist, publish or discard them first: ${drafts.join(", ")}`);
  return byLang;
}

async function resolveTechnologies() {
  const docs = await client.fetch(`*[_type == "technology"]{_id, title, language}`);
  const out = {}, missing = [], skipped = [];
  for (const lang of LANGS) {
    out[lang] = [];
    for (const t of TECHNOLOGIES) {
      const hit = docs.find((d) => d.language === lang && t.aliases.some((a) => (d.title || "").trim().toLowerCase() === a.toLowerCase()));
      if (hit) out[lang].push({ title: hit.title, id: hit._id });
      else (t.optional ? skipped : missing).push(`${lang}: ${t.canonical}`);
    }
  }
  return { out, missing, skipped };
}

function buildPatch(lang, raw, manifest, techIds) {
  const seo = section(raw, "SEO");
  const kf = section(raw, "KEY FEATURES");
  const shots = parseScreenshots(raw);
  const screenshots = SLIDER_FILES.map((f) => {
    const e = shots[SLIDER_ENTRY[f]];
    if (!e) throw new Error(`No [SCREENSHOTS] entry for ${f} (${lang})`);
    if (!manifest[f]) throw new Error(`No uploaded asset for ${f} — run the uploader first`);
    return { _key: key(), _type: "object", title: e.title, caption: [ptBlock("normal", e.caption)], image: { _type: "image", asset: ref(manifest[f]), alt: e.alt } };
  });
  if (!manifest[PREVIEW_FILE]) throw new Error(`No uploaded asset for ${PREVIEW_FILE}`);
  const mainContent = parseMainContent(raw).map((sec) => ({
    _key: key(), _type: "textContent", textAlign: "left",
    content: [ptBlock("h3", sec.heading), ...bodyBlocks(sec.body)],
  }));
  return {
    slugInDraft: section(raw, "SLUG"),
    set: {
      title: section(raw, "TITLE"),
      fullTitle: section(raw, "FULL TITLE — H1"),
      excerpt: section(raw, "EXCERPT").replace(/^\(.*?\)\s*/, "").trim(),
      "seo.metaTitle": field(seo, "metaTitle"),
      "seo.metaDescription": field(seo, "metaDescription"),
      "keyFeatures.clientName": field(kf, "clientName"),
      "keyFeatures.industry": field(kf, "industry"),
      previewImage: { _type: "image", asset: ref(manifest[PREVIEW_FILE]), alt: unquote(field(section(raw, "PREVIEW IMAGE"), "alt")) },
      challenges: {
        problem: section(raw, "PROBLEM").split(/\n\n+/).map((t) => ptBlock("normal", t.trim().replace(/\s*\n\s*/g, " "))),
        task: bulletListPT(parseBullets(section(raw, "TASK"))),
        results: bulletListPT(parseBullets(section(raw, "RESULTS"))),
        workDone: bulletListPT(parseBullets(section(raw, "WORK DONE"))),
      },
      screenshots,
      mainContent,
      technologiesUsed: techIds.map((id) => ({ ...ref(id), _key: key() })),
    },
  };
}

async function main() {
  if (!fs.existsSync(MANIFEST)) throw new Error(`No ${MANIFEST}. Run: node scripts/upload-cyprusvipestates-screenshots.cjs`);
  const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
  const docs = await findDocs();
  const { out: tech, missing, skipped } = await resolveTechnologies();
  if (missing.length) { console.error("Technology documents not found:\n  " + missing.join("\n  ")); process.exit(1); }
  if (skipped.length) console.log(`note  optional technologies not in Sanity, skipped: ${skipped.join(", ")}`);

  const patches = LANGS.map((lang) => {
    const p = buildPatch(lang, readDraft(lang), manifest, tech[lang].map((t) => t.id));
    const doc = docs[lang];
    const liveSlug = doc.slug && doc.slug[lang] && doc.slug[lang].current;
    if (liveSlug !== p.slugInDraft) throw new Error(`${lang}: draft slug «${p.slugInDraft}» != live slug «${liveSlug}» — the address must not change`);
    return { lang, doc, ...p };
  });

  for (const p of patches) {
    const s = p.set;
    console.log(`\n=== ${p.lang}  ${p.doc._id}  /${p.lang === "en" ? "" : p.lang + "/"}portfolio/${p.slugInDraft}`);
    console.log(`title:     ${p.doc.title}\n        →  ${s.title}`);
    console.log(`H1:        ${p.doc.fullTitle}\n        →  ${s.fullTitle}`);
    console.log(`excerpt:   ${s.excerpt.length} chars`);
    console.log(`metaTitle: ${s["seo.metaTitle"]} (${s["seo.metaTitle"].length})`);
    console.log(`metaDesc:  ${s["seo.metaDescription"]} (${s["seo.metaDescription"].length})`);
    console.log(`challenges: problem ${s.challenges.problem.length}, task ${s.challenges.task.length}, results ${s.challenges.results.length}, work ${s.challenges.workDone.length}`);
    console.log(`screenshots: ${p.doc.shots} → ${s.screenshots.length}; mainContent: ${p.doc.mc} → ${s.mainContent.length} sections`);
    s.mainContent.forEach((m) => console.log("   - " + m.content[0].children.map((c) => c.text).join("")));
    console.log(`technologies: ${tech[p.lang].map((t) => t.title).join(", ")}`);
    if (s["seo.metaTitle"].length > 60) console.log("WARN metaTitle > 60");
    if (s.excerpt.length > 200) console.log("WARN excerpt > 200");
  }
  if (DRY_RUN) return console.log("\nDry run — nothing written.");

  const tx = client.transaction();
  for (const p of patches) tx.patch(p.doc._id, (q) => q.ifRevisionId(p.doc._rev).set(p.set));
  await tx.commit();
  console.log(`\nWritten: ${patches.map((p) => p.doc._id).join(", ")}. The webhook revalidates the case pages.`);
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
