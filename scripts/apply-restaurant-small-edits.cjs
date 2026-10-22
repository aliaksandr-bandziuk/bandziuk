// scripts/apply-restaurant-small-edits.cjs
//
// Two small keyword edits on the restaurant pages (22.10.2026):
//   1. /restaurant-website: a section «Restaurant website builder or a custom
//      website». The semantic core of restaurant website design assigned
//      «restaurant website builder» (390/mo) and «best website builder for
//      restaurants» (210/mo) to the development page, which had no word on it.
//      Inserted before the paragraph that links to design and SEO.
//   2. /restaurant-seo: H2 «How much restaurant SEO costs» → «How much SEO
//      services for restaurants cost» («seo services for restaurants» 90/mo;
//      «restaurant SEO» is already in H1 and title).
//
// Found by _key/layout AND by text that must be there; idempotent; aborts on
// drafts; one transaction.
//
// Usage: node scripts/apply-restaurant-small-edits.cjs           dry run
//        node scripts/apply-restaurant-small-edits.cjs --apply   write

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
const block = (style, text) => ({
  _type: "block", _key: key(), style, markDefs: [],
  children: [{ _type: "span", _key: key(), text, marks: [] }],
});
const plain = (b) => (b.children || []).map((c) => c.text).join("");

const BUILDER_SECTION = [
  block("h2", "Restaurant website builder or a custom website"),
  block("normal", "A restaurant website builder — a general one such as Wix or Squarespace, or a platform made for restaurants — puts a simple site online in a day for a monthly fee. For a café with a short menu that rarely changes, that is a reasonable start."),
  block("normal", "The limits appear exactly where this page is about: a menu as real pages the kitchen edits, hours that are always right, bookings without a portal, private events, language versions and local search. A builder offers each of these in a basic form, but the site cannot be shaped around them, and leaving the builder later usually means building again from scratch. A custom website is built around them from the start, and the code, the content and the address stay yours."),
];

async function main() {
  const ids = ["singlepage-restaurant", "singlepage-restaurant-seo"];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: ids.map((i) => `drafts.${i}`) });
  if (drafts.length) {
    console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`);
    process.exit(1);
  }
  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, contentBlocks}`, { ids });
  const patches = [];

  // 1. builder section on /restaurant-website
  {
    const doc = docs.find((d) => d._id === "singlepage-restaurant");
    const b = doc.contentBlocks.find((x) => x._key === "6cea7ae9e875");
    if (!b || !b.content.some((x) => plain(x) === "Restaurant website menu: real pages, not a PDF")) {
      throw new Error("singlepage-restaurant: menu block not found — page changed, check it by hand");
    }
    if (b.content.some((x) => plain(x) === plain(BUILDER_SECTION[0]))) {
      console.log("skip  singlepage-restaurant: builder section already there");
    } else {
      const anchor = b.content.find((x) => plain(x).startsWith("Development is one of three pieces of work"));
      if (!anchor) throw new Error("singlepage-restaurant: the paragraph linking design and SEO is missing — run apply-restaurant-cluster-links.cjs first");
      console.log("\nsinglepage-restaurant, new section before the design/SEO links paragraph:");
      for (const x of BUILDER_SECTION) console.log(`  ${x.style === "h2" ? "H2 " : ""}${plain(x)}`);
      const where = `contentBlocks[_key=="${b._key}"].content[_key=="${anchor._key}"]`;
      patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.insert("before", where, BUILDER_SECTION) });
    }
  }

  // 2. H2 on /restaurant-seo
  {
    const doc = docs.find((d) => d._id === "singlepage-restaurant-seo");
    const b = doc.contentBlocks.find((x) => x._type === "textContent" && x.layout === "guide");
    const from = "How much restaurant SEO costs";
    const to = "How much SEO services for restaurants cost";
    const h = b && b.content.find((x) => x.style === "h2" && plain(x) === from);
    if (!h) {
      if (b && b.content.some((x) => plain(x) === to)) console.log("skip  singlepage-restaurant-seo: H2 already renamed");
      else throw new Error(`singlepage-restaurant-seo: H2 «${from}» not found`);
    } else {
      if (h.children.length !== 1) throw new Error("singlepage-restaurant-seo: heading has several spans");
      console.log(`\nsinglepage-restaurant-seo: H2 «${from}» → «${to}»`);
      const p2 = `contentBlocks[_key=="${b._key}"].content[_key=="${h._key}"].children[_key=="${h.children[0]._key}"].text`;
      patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.set({ [p2]: to }) });
    }
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log("\nDry run — nothing written. Add --apply to write.");
  const tx = client.transaction();
  for (const p of patches) tx.patch(p.id, (x) => p.op(x.ifRevisionId(p.rev)));
  await tx.commit();
  console.log(`\nWritten: ${patches.map((p) => p.id).join(", ")}`);
  console.log("The webhook revalidates these pages; nothing to deploy.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
