// scripts/apply-professionals-links.cjs
//
// Run after stage 2, group 7 (professionals) is created and deployed:
//   /seo-for-architects (+ PL pozycjonowanie-strony-biura-architektonicznego),
//   /architecture-website-design, /seo-for-it-companies, /it-company-website-design,
//   PL /pl/pozycjonowanie-strony-fotografa.
//
// 1. Services hubs EN / PL: new pages go into the industry SEO and website sections
//    (a section is found by a page it already lists, by slug).
// 2. One sentence after the last paragraph of the main text of the existing
//    architecture, photographer, B2B and startup pages.
//
// Idempotent; aborts on drafts; one transaction, one patch per change.
//
// Usage: node scripts/apply-professionals-links.cjs           dry run
//        node scripts/apply-professionals-links.cjs --apply   write

const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const key = () => crypto.randomBytes(6).toString("hex");
const plain = (b) => (b.children || []).map((c) => c.text).join("");
function para(...segments) {
  const markDefs = [];
  const children = segments.map((s) => {
    if (typeof s === "string") return { _type: "span", _key: key(), text: s, marks: [] };
    const mk = key();
    markDefs.push({ _type: "link", _key: mk, href: s[1] });
    return { _type: "span", _key: key(), text: s[0], marks: [mk] };
  });
  return { _type: "block", _key: key(), style: "normal", markDefs, children };
}

const NEW = [
  "singlepage-seo-for-architects", "singlepage-seo-for-architects.pl", "singlepage-architecture-website-design",
  "singlepage-seo-for-it-companies", "singlepage-it-company-website-design", "singlepage-photographer-seo.pl",
];

// marker: slugs of pages the target section already lists (first match wins)
const HUB = [
  { lang: "en", marker: ["seo-for-law-firms", "seo-for-construction-companies"], refs: ["singlepage-seo-for-architects", "singlepage-seo-for-it-companies"] },
  { lang: "en", marker: ["lawyer-website-development", "hotel-website"], refs: ["singlepage-architecture-website-design", "singlepage-it-company-website-design"] },
  { lang: "pl", marker: ["seo-dla-kancelarii-prawnych", "pozycjonowanie-strony-firmy-budowlanej"], refs: ["singlepage-seo-for-architects.pl", "singlepage-photographer-seo.pl"] },
];

const TEXT = [
  { lang: "en", slug: "architecture-studio-website",
    para: para("The look of the portfolio and project pages is covered on the ", ["architecture website design", "/architecture-website-design"], " page, and getting found by building type and location on the ", ["SEO for architects", "/seo-for-architects"], " page.") },
  { lang: "en", slug: "b2b-seo",
    para: para("For software houses, MSPs and IT service firms, see ", ["SEO for IT companies", "/seo-for-it-companies"], ".") },
  { lang: "en", slug: "b2b-website-design",
    para: para("For software houses and IT service firms, see ", ["IT company website design", "/it-company-website-design"], ".") },
  { lang: "en", slug: "seo-for-startups",
    para: para("For established IT service companies rather than product startups, see ", ["SEO for IT companies", "/seo-for-it-companies"], ".") },
  { lang: "pl", slug: "strona-dla-biura-architektonicznego",
    para: para("Jak pracownię znajdują klienci szukający architekta w swoim mieście, opisuję na stronie ", ["pozycjonowanie strony biura architektonicznego", "/pl/pozycjonowanie-strony-biura-architektonicznego"], ".") },
  { lang: "pl", slug: "strona-dla-fotografa",
    para: para("Jak klienci znajdują fotografa po gatunku i mieście, opisuję na stronie ", ["pozycjonowanie strony fotografa", "/pl/pozycjonowanie-strony-fotografa"], ".") },
];

const getPage = (lang, s) => client.fetch(
  `*[_type in ["singlepage", "service"] && language == $lang && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]`,
  { lang, s },
);
const idsBySlug = (lang, slugs) => client.fetch(
  `*[_type == "singlepage" && language == $lang && slug[$lang].current in $slugs && !(_id in path("drafts.**"))]{_id, "s": slug[$lang].current}`,
  { lang, slugs },
);

async function main() {
  const exist = await client.fetch(`*[_id in $ids]._id`, { ids: NEW });
  if (exist.length !== NEW.length) { console.log(`Aborting — not in Sanity yet: ${NEW.filter((i) => !exist.includes(i)).join(", ")}`); process.exit(1); }
  const hubs = await client.fetch(
    `*[_type == "singlepage" && pageType == "servicesIndex" && !(_id in path("drafts.**"))]{
      _id, _rev, language, "blocks": contentBlocks[_type == "relatedServicesBlock"]{ _key, title, "refs": items[]._ref }
    }`,
  );
  for (const t of TEXT) {
    t.doc = await getPage(t.lang, t.slug);
    if (!t.doc) console.log(`warn  ${t.lang} «${t.slug}» not found — sentence skipped`);
  }
  const texts = TEXT.filter((t) => t.doc);
  const touched = [...hubs.map((h) => h._id), ...texts.map((t) => t.doc._id)];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: touched.map((i) => `drafts.${i}`) });
  if (drafts.length) { console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`); process.exit(1); }

  const patches = [];

  // 1. hubs — several sections of one hub may change: each change is its own patch
  for (const h of HUB) {
    const hub = hubs.find((x) => x.language === h.lang);
    if (!hub) throw new Error(`${h.lang} services hub not found`);
    const found = await idsBySlug(h.lang, h.marker);
    let sec = null;
    for (const m of h.marker) {
      const id = (found.find((f) => f.s === m) || {})._id;
      sec = id && hub.blocks.find((b) => (b.refs || []).includes(id));
      if (sec) break;
    }
    if (!sec) throw new Error(`${h.lang} hub: no section lists any of ${h.marker.join(", ")}; sections: ${hub.blocks.map((b) => b.title).join(" | ")}`);
    const missing = h.refs.filter((r) => !(sec.refs || []).includes(r));
    if (!missing.length) { console.log(`skip  ${h.lang} hub «${sec.title}»: already lists all`); continue; }
    console.log(`add   ${h.lang} hub «${sec.title}»: ${missing.join(", ")}`);
    patches.push({ id: hub._id, rev: hub._rev, op: (q) => q.insert("after", `contentBlocks[_key=="${sec._key}"].items[-1]`, missing.map((r) => ({ _key: key(), _type: "reference", _ref: r }))) });
  }

  // 2. sentences
  for (const t of texts) {
    const blocks = (t.doc.contentBlocks || []).filter((x) => x._type === "textContent");
    const b = blocks.find((x) => x.layout === "guide") || blocks[0];
    if (!b || !(b.content || []).length) { console.log(`warn  ${t.lang} «${t.slug}»: no text block — sentence skipped`); continue; }
    if (blocks.some((x) => (x.content || []).some((y) => plain(y) === plain(t.para)))) { console.log(`skip  ${t.lang} «${t.slug}»: sentence already there`); continue; }
    const last = b.content[b.content.length - 1];
    console.log(`\n${t.lang} «${t.slug}» (end of the main text, after «${plain(last).slice(0, 50)}…»):\n  ${plain(t.para)}`);
    patches.push({ id: t.doc._id, rev: t.doc._rev, op: (q) => q.insert("after", `contentBlocks[_key=="${b._key}"].content[_key=="${last._key}"]`, [t.para]) });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${patches.length} change(s), nothing written. Add --apply to write.`);
  const tx = client.transaction();
  const seen = new Set();
  for (const p of patches) {
    const first = !seen.has(p.id); seen.add(p.id);
    tx.patch(p.id, (q) => p.op(first ? q.ifRevisionId(p.rev) : q));
  }
  await tx.commit();
  console.log(`\nWritten: ${[...seen].join(", ")}`);
  console.log("The webhook revalidates these pages.");
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
