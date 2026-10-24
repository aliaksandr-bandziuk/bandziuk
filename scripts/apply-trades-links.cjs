// scripts/apply-trades-links.cjs
//
// Run after the 17 trade pages (stage 2, groups 1 and 1b) are created with
// create-landing.cjs and deployed.
//
// 1. EN services hub:
//    - «Website development by industry»: the 10 website and design pages for
//      plumbers, electricians, roofers, HVAC, landscaping and lawn care, after
//      the contractor website page;
//    - «SEO for industries»: the 7 trade SEO pages after local SEO for contractors.
// 2. One sentence on each general contractor page linking its trade pages:
//    - /seo-for-contractors → roofing, HVAC, plumbers, electricians, landscaping, painting SEO
//    - /local-seo-for-contractors → local SEO for plumbers, roofing SEO, HVAC SEO
//    - /website-for-contractors → websites for plumbers, electricians, roofing, HVAC, lawn care
//    - /contractor-website-design → plumbing, electrician, roofing, HVAC, landscaping design
//    The trade pages already link back to the contractor pages and to each other
//    in their own text.
//
// Found by title AND text; idempotent; aborts on drafts; one transaction, one
// patch per change (a Sanity patch holds one insert).
//
// Usage: node scripts/apply-trades-links.cjs           dry run
//        node scripts/apply-trades-links.cjs --apply   write

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
// segments: plain strings, or [linkText, href]
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

const SITES = ["website-for-plumbers", "plumbing-website-design", "website-for-electricians", "electrician-website-design", "roofing-websites", "roofing-website-design", "hvac-websites", "hvac-website-design", "landscaping-website-design", "lawn-care-website"];
const SEO = ["roofing-seo", "hvac-seo", "seo-for-plumbers", "local-seo-for-plumbers", "seo-for-electricians", "landscaping-seo", "seo-for-painting-contractors"];
const id = (s) => `singlepage-${s}`;

const HUB = [
  { lang: "en", title: "Website development by industry", after: id("website-for-contractors"), refs: SITES.map(id) },
  { lang: "en", title: "SEO for industries", after: id("local-seo-for-contractors"), refs: SEO.map(id) },
];

const TEXT = [
  { id: id("seo-for-contractors"), anchor: "I start with the services that bring the most profit",
    para: para("Specialty trades have their own pages: ", ["SEO for roofing companies", "/roofing-seo"], ", ", ["HVAC SEO", "/hvac-seo"], ", ", ["SEO for plumbers", "/seo-for-plumbers"], ", ", ["SEO for electricians", "/seo-for-electricians"], ", ", ["landscaping SEO", "/landscaping-seo"], " and ", ["SEO for painting contractors", "/seo-for-painting-contractors"], ".") },
  { id: id("local-seo-for-contractors"), anchor: "A general contractor has one profile but sells many jobs",
    para: para("For single trades, the map work is described on the ", ["local SEO for plumbers", "/local-seo-for-plumbers"], ", ", ["roofing SEO", "/roofing-seo"], " and ", ["HVAC SEO", "/hvac-seo"], " pages.") },
  { id: id("website-for-contractors"), anchor: "A custom-built website costs once",
    para: para("Websites for single trades are described separately: ", ["plumbers", "/website-for-plumbers"], ", ", ["electricians", "/website-for-electricians"], ", ", ["roofing companies", "/roofing-websites"], ", ", ["HVAC companies", "/hvac-websites"], " and ", ["lawn care businesses", "/lawn-care-website"], ".") },
  { id: id("contractor-website-design"), anchor: "If you work across several towns, each area gets a page",
    para: para("Design for single trades has its own pages: ", ["plumbing", "/plumbing-website-design"], ", ", ["electrician", "/electrician-website-design"], ", ", ["roofing", "/roofing-website-design"], ", ", ["HVAC", "/hvac-website-design"], " and ", ["landscaping website design", "/landscaping-website-design"], ".") },
];

async function main() {
  const all = [...SITES, ...SEO].map(id);
  const exist = await client.fetch(`*[_id in $ids]._id`, { ids: all });
  if (exist.length !== all.length) {
    console.log(`Aborting — not in Sanity yet: ${all.filter((i) => !exist.includes(i)).join(", ")}`);
    process.exit(1);
  }
  const hubs = await client.fetch(
    `*[_type == "singlepage" && pageType == "servicesIndex" && !(_id in path("drafts.**"))]{
      _id, _rev, language, "blocks": contentBlocks[_type == "relatedServicesBlock"]{ _key, title, "refs": items[]._ref }
    }`,
  );
  const touched = [...hubs.map((h) => h._id), ...TEXT.map((t) => t.id)];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: touched.map((i) => `drafts.${i}`) });
  if (drafts.length) {
    console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`);
    process.exit(1);
  }

  const patches = [];
  for (const h of HUB) {
    const hub = hubs.find((x) => x.language === h.lang);
    const sec = hub && hub.blocks.find((b) => b.title === h.title);
    if (!sec) throw new Error(`${h.lang} hub: section «${h.title}» not found`);
    const missing = h.refs.filter((r) => !(sec.refs || []).includes(r));
    if (!missing.length) { console.log(`skip  ${h.lang} hub «${h.title}»: already lists all`); continue; }
    const has = (sec.refs || []).includes(h.after);
    const where = has ? `contentBlocks[_key=="${sec._key}"].items[_ref=="${h.after}"]` : `contentBlocks[_key=="${sec._key}"].items[-1]`;
    console.log(`add   ${h.lang} hub «${h.title}»: ${missing.length} pages ${has ? `after ${h.after}` : "at the end"}`);
    patches.push({ id: hub._id, rev: hub._rev, op: (p) => p.insert("after", where, missing.map((r) => ({ _key: key(), _type: "reference", _ref: r }))) });
  }

  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, contentBlocks}`, { ids: TEXT.map((t) => t.id) });
  for (const t of TEXT) {
    const doc = docs.find((d) => d._id === t.id);
    if (!doc) throw new Error(`${t.id} not found`);
    const b = doc.contentBlocks.find((x) => x._type === "textContent" && x.layout === "guide");
    if (!b) throw new Error(`${t.id}: guide text block not found`);
    if (b.content.some((x) => plain(x) === plain(t.para))) { console.log(`skip  ${t.id}: sentence already there`); continue; }
    const a = b.content.find((x) => plain(x).startsWith(t.anchor));
    if (!a) throw new Error(`${t.id}: paragraph «${t.anchor}…» not found`);
    console.log(`\n${t.id} (after «${t.anchor.slice(0, 40)}…»):\n  ${plain(t.para)}`);
    patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.insert("after", `contentBlocks[_key=="${b._key}"].content[_key=="${a._key}"]`, [t.para]) });
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
