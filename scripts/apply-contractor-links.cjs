// scripts/apply-contractor-links.cjs
//
// Run after topic 6 is published (contractor-website-design.en and
// website-for-contractors.en are in Sanity) and deployed.
//
// 1. EN services hub, «Website development by industry»: both contractor pages
//    right after the construction company website page.
// 2. One sentence on each EN construction development page pointing to the
//    contractor page of the same kind (the same sentences are in the fixtures):
//    - /construction-website-design → /contractor-website-design
//    - /construction-company-website → /website-for-contractors
//    Construction (projects, tenders) and contractors (homeowner jobs, calls,
//    estimate visits) are separate SERPs, so the pages stay apart but linked.
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
function linkPara(before, linkText, href, after) {
  const mk = key();
  return {
    _type: "block", _key: key(), style: "normal",
    markDefs: [{ _type: "link", _key: mk, href }],
    children: [
      { _type: "span", _key: key(), text: before, marks: [] },
      { _type: "span", _key: key(), text: linkText, marks: [mk] },
      { _type: "span", _key: key(), text: after, marks: [] },
    ],
  };
}

const NEW = ["singlepage-contractor-website-design", "singlepage-website-for-contractors"];
const HUB = { lang: "en", title: "Website development by industry", after: "singlepage-construction-company-website" };

const TEXT = [
  { id: "singlepage-construction-website-design", anchor: "A template is a reasonable start for a one-person firm",
    para: linkPara("Contractors who sell remodels and repairs to homeowners — calls and estimate visits rather than tenders — will find a closer fit on the ", "contractor website design", "/contractor-website-design", " page.") },
  { id: "singlepage-construction-company-website", anchor: "A small construction company does not need a large website",
    para: linkPara("If you sell remodels and repairs to homeowners rather than build whole projects, see the ", "websites for contractors", "/website-for-contractors", " page.") },
];

async function main() {
  const exist = await client.fetch(`*[_id in $ids]._id`, { ids: NEW });
  if (exist.length !== NEW.length) {
    console.log("Aborting — publish topic 6 first (create-landing.cjs --fixtures contractor-website-design.en / website-for-contractors.en --apply).");
    process.exit(1);
  }
  const hub = await client.fetch(
    `*[_type == "singlepage" && pageType == "servicesIndex" && language == $lang && !(_id in path("drafts.**"))][0]{
      _id, _rev, "blocks": contentBlocks[_type == "relatedServicesBlock"]{ _key, title, "refs": items[]._ref }
    }`,
    { lang: HUB.lang },
  );
  const touched = [hub._id, ...TEXT.map((t) => t.id)];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: touched.map((i) => `drafts.${i}`) });
  if (drafts.length) {
    console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`);
    process.exit(1);
  }

  const patches = [];
  const sec = hub.blocks.find((b) => b.title === HUB.title);
  if (!sec) throw new Error(`EN hub: section «${HUB.title}» not found`);
  const missing = NEW.filter((r) => !sec.refs.includes(r));
  if (!missing.length) console.log("skip  EN hub: already lists both pages");
  else {
    const has = sec.refs.includes(HUB.after);
    const where = has ? `contentBlocks[_key=="${sec._key}"].items[_ref=="${HUB.after}"]` : `contentBlocks[_key=="${sec._key}"].items[-1]`;
    console.log(`add   EN hub «${HUB.title}»: ${missing.join(", ")} ${has ? `after ${HUB.after}` : "at the end"}`);
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
  const tx = client.transaction();
  for (const p of patches) tx.patch(p.id, (q) => p.op(q.ifRevisionId(p.rev)));
  await tx.commit();
  console.log(`\nWritten: ${patches.map((p) => p.id).join(", ")}`);
  console.log("The webhook revalidates these pages.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
