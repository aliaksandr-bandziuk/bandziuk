// scripts/apply-contractor-links.cjs
//
// Run after topics 6–7 are published and deployed:
//   /contractor-website-design, /website-for-contractors (topic 6),
//   /seo-for-contractors, /local-seo-for-contractors (topic 7).
//
// 1. EN services hub:
//    - «Website development by industry»: both development pages right after
//      the construction company website page;
//    - «SEO for industries»: both SEO pages right after SEO for construction
//      companies.
//    RU services hub, «Разработка сайтов – по отраслям»: /ru/sait-po-remontu-kvartir
//    (RU market version of /website-for-contractors) after the RU construction
//    company website page.
// 2. One sentence per page linking the rest of the cluster (the same sentences
//    are in the fixtures):
//    - /construction-website-design → /contractor-website-design
//    - /construction-company-website → /website-for-contractors
//    - /seo-for-construction-companies → /seo-for-contractors
//    - /contractor-website-design → /seo-for-contractors
//    - /website-for-contractors → /seo-for-contractors, /local-seo-for-contractors
//    - /ru/sait-dlya-stroitelnoi-kompanii → /ru/sait-po-remontu-kvartir
//    Construction (projects, tenders) and contractors (homeowner jobs, calls,
//    estimate visits) are separate SERPs, so the pages stay apart but linked.
//    7a ↔ 7b and 6a ↔ 6b already link each other in their own text.
//
// Found by title AND text; idempotent; aborts on drafts; one transaction.
//
// Usage: node scripts/apply-contractor-links.cjs           dry run
//        node scripts/apply-contractor-links.cjs --apply   write

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

const PAGES = {
  design: "singlepage-contractor-website-design",
  dev: "singlepage-website-for-contractors",
  seo: "singlepage-seo-for-contractors",
  local: "singlepage-local-seo-for-contractors",
  devRu: "singlepage-website-for-contractors.ru",
};

const HUB = [
  { lang: "en", title: "Website development by industry", after: "singlepage-construction-company-website", refs: [PAGES.design, PAGES.dev] },
  { lang: "en", title: "SEO for industries", after: "singlepage-seo-for-construction-companies", refs: [PAGES.seo, PAGES.local] },
  { lang: "ru", title: "Разработка сайтов – по отраслям", after: "singlepage-construction-company-website.ru", refs: [PAGES.devRu] },
];

const TEXT = [
  { id: "singlepage-construction-website-design", anchor: "A template is a reasonable start for a one-person firm",
    para: para("Contractors who sell remodels and repairs to homeowners — calls and estimate visits rather than tenders — will find a closer fit on the ", ["contractor website design", "/contractor-website-design"], " page.") },
  { id: "singlepage-construction-company-website", anchor: "A small construction company does not need a large website",
    para: para("If you sell remodels and repairs to homeowners rather than build whole projects, see the ", ["websites for contractors", "/website-for-contractors"], " page.") },
  { id: "singlepage-seo-for-construction-companies", anchor: "For many companies a correct profile and a handful",
    para: para("Contractors who sell remodels and repairs to homeowners will find more on the ", ["SEO for contractors", "/seo-for-contractors"], " page.") },
  { id: PAGES.design, anchor: "Getting into those answers is ongoing work",
    para: para("Being found in Google for your jobs and towns is covered on the ", ["SEO for contractors", "/seo-for-contractors"], " page.") },
  { id: PAGES.dev, anchor: "Getting into those answers is ongoing work",
    para: para("Ranking in Google and in the map results is covered on the ", ["SEO for contractors", "/seo-for-contractors"], " and ", ["local SEO for contractors", "/local-seo-for-contractors"], " pages.") },
  { id: "singlepage-construction-company-website.ru", anchor: "Небольшой строительной компании не нужен большой сайт",
    para: para("Если вы делаете ремонт квартир, а не строите дома, загляните на страницу ", ["сайт по ремонту квартир", "/ru/sait-po-remontu-kvartir"], ".") },
];

async function main() {
  const all = Object.values(PAGES);
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
    const missing = h.refs.filter((r) => !sec.refs.includes(r));
    if (!missing.length) { console.log(`skip  ${h.lang} hub «${h.title}»: already lists ${h.refs.join(", ")}`); continue; }
    const has = sec.refs.includes(h.after);
    const where = has ? `contentBlocks[_key=="${sec._key}"].items[_ref=="${h.after}"]` : `contentBlocks[_key=="${sec._key}"].items[-1]`;
    console.log(`add   ${h.lang} hub «${h.title}»: ${missing.join(", ")} ${has ? `after ${h.after}` : "at the end"}`);
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
  if (!APPLY) return console.log("\nDry run — nothing written. Add --apply to write.");
  // One patch per change: a Sanity patch holds a single «insert», and two
  // inserts chained on one patch get merged into a wrong one.
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

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
