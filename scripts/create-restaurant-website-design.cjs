// scripts/create-restaurant-website-design.cjs
//
// Creates the EN landing /restaurant-website-design (variant A layout) in
// Sanity from the same fixture the localhost preview rendered:
// src/dev-fixtures/restaurant-website-design.en.ts. EN only — PL/RU demand
// was too small (research/pseo/page-core/restaurant-website-design.md), so no
// translation.metadata document is created.
//
// Resolves before writing:
//   - portfolio picks (slugs) -> references to the published EN projects
//   - quote form texts -> reference to the EN formStandardDocument
//
// Usage:
//   node scripts/create-restaurant-website-design.cjs            dry run
//   node scripts/create-restaurant-website-design.cjs --apply    create
//   node scripts/create-restaurant-website-design.cjs --offline  build only, no Sanity calls
//
// After --apply the page still needs a redeploy (dynamicParams = false).

const path = require("path");
const { createJiti } = require("jiti");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const OFFLINE = process.argv.includes("--offline");
const DOC_ID = "singlepage-restaurant-website-design";
const LANG = "en";

const jiti = createJiti(__filename);
const { restaurantWebsiteDesignEn: fx } = jiti(
  path.resolve(__dirname, "../src/dev-fixtures/restaurant-website-design.en.ts"),
);

// Prices exactly as printed on the page (offerListBlock + guide text).
const OFFERS = [
  { _key: "offer1", _type: "offer", name: "Simple restaurant website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
  { _key: "offer2", _type: "offer", name: "Restaurant website with menu, bookings, events and local SEO, design included", price: 2000, currency: "EUR", unit: "one-off" },
];

function buildDoc({ projectIds, formId }) {
  const contentBlocks = fx.contentBlocks.map((b) => {
    if (b._type === "portfolioPickBlock") {
      const { picks, ...rest } = b;
      return {
        ...rest,
        items: picks.map((slug, i) => ({ _type: "reference", _key: `pick${i + 1}`, _ref: projectIds[slug] })),
      };
    }
    if (b._type === "quoteFormBlock") {
      return { ...b, form: { _type: "reference", _ref: formId } };
    }
    return b;
  });

  return {
    _id: DOC_ID,
    _type: "singlepage",
    language: LANG,
    pageType: "page",
    title: fx.title,
    heading: fx.heading,
    excerpt: fx.excerpt,
    slug: { _type: "localizedSlug", [LANG]: { _type: "slug", current: fx.slug } },
    seo: { metaTitle: fx.seo.metaTitle, metaDescription: fx.seo.metaDescription },
    heroLayout: fx.heroLayout,
    heroChips: fx.heroChips,
    heroPhonePoints: fx.heroPhonePoints,
    stickyCta: fx.stickyCta,
    offers: OFFERS,
    contentBlocks,
  };
}

function check(doc) {
  const errors = [];
  if (doc.seo.metaTitle.length > 60) errors.push(`metaTitle ${doc.seo.metaTitle.length} chars`);
  if (doc.seo.metaDescription.length > 160) errors.push(`metaDescription ${doc.seo.metaDescription.length} chars`);
  if (doc.heroChips.length > 3) errors.push("more than 3 hero chips");
  if (doc.heroPhonePoints.length > 4) errors.push("more than 4 phone points");
  const keys = new Set();
  JSON.stringify(doc, (k, v) => {
    if (k === "_key") {
      if (keys.has(v)) errors.push(`duplicate _key ${v}`);
      keys.add(v);
    }
    return v;
  });
  for (const b of doc.contentBlocks) {
    if (b._type === "portfolioPickBlock" && b.items.some((r) => !r._ref)) errors.push("unresolved portfolio pick");
    if (b._type === "quoteFormBlock" && !b.form._ref) errors.push("quote form texts not found");
  }
  return errors;
}

function summary(doc) {
  console.log(`_id:   ${doc._id}`);
  console.log(`URL:   /${doc.slug[LANG].current}`);
  console.log(`H1:    ${doc.heading}`);
  console.log(`title: ${doc.seo.metaTitle} (${doc.seo.metaTitle.length})`);
  console.log(`blocks: ${doc.contentBlocks.map((b) => b._type + (b.layout ? `:${b.layout}` : "")).join(" → ")}`);
  const guide = doc.contentBlocks.find((b) => b.layout === "guide");
  const h2s = guide.content.filter((x) => x.style === "h2").map((x) => x.children.map((c) => c.text).join(""));
  console.log(`guide H2 (${h2s.length}):\n  - ${h2s.join("\n  - ")}`);
  const faq = doc.contentBlocks.find((b) => b._type === "faqBlock");
  console.log(`FAQ: ${faq.faq.items?.length ?? "?"} questions`);
}

async function main() {
  if (OFFLINE) {
    const doc = buildDoc({
      projectIds: Object.fromEntries(
        fx.contentBlocks.find((b) => b._type === "portfolioPickBlock").picks.map((s) => [s, `(${s})`]),
      ),
      formId: "(formStandardDocument en)",
    });
    summary(doc);
    const errors = check(doc);
    console.log(errors.length ? `\nERRORS:\n- ${errors.join("\n- ")}` : "\nOffline build OK.");
    return;
  }

  const { createClient } = require("@sanity/client");
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2025-08-04",
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
  });

  // Nothing may already sit on this id or this address — drafts included,
  // because the site's client reads drafts.
  const clash = await client.fetch(
    `*[_id in [$id, "drafts." + $id] || (_type == "singlepage" && slug[$lang].current == $slug)]{_id}`,
    { id: DOC_ID, lang: LANG, slug: fx.slug },
  );
  if (clash.length) {
    console.log(`Aborting — already exists: ${clash.map((c) => c._id).join(", ")}`);
    process.exit(1);
  }

  const picks = fx.contentBlocks.find((b) => b._type === "portfolioPickBlock").picks;
  const projects = await client.fetch(
    `*[_type == "portfolio" && language == $lang && !(_id in path("drafts.**")) && slug[$lang].current in $slugs]{_id, "s": slug[$lang].current}`,
    { lang: LANG, slugs: picks },
  );
  const projectIds = Object.fromEntries(projects.map((p) => [p.s, p._id]));
  const missing = picks.filter((s) => !projectIds[s]);
  if (missing.length) {
    console.log(`Aborting — portfolio projects not found: ${missing.join(", ")}`);
    process.exit(1);
  }

  const formId = await client.fetch(
    `*[_type == "formStandardDocument" && language == $lang && !(_id in path("drafts.**"))][0]._id`,
    { lang: LANG },
  );

  const doc = buildDoc({ projectIds, formId });
  summary(doc);
  console.log(`portfolio: ${picks.map((s) => projectIds[s]).join(", ")}`);
  console.log(`form texts: ${formId}`);

  const errors = check(doc);
  if (errors.length) {
    console.log(`\nAborting — ERRORS:\n- ${errors.join("\n- ")}`);
    process.exit(1);
  }

  if (!APPLY) {
    console.log("\nDry run — nothing written. Add --apply to create the page.");
    return;
  }

  await client.create(doc);
  const back = await client.fetch(`*[_id == $id][0]{_id, _updatedAt, "slug": slug.en.current, "blocks": count(contentBlocks)}`, { id: DOC_ID });
  console.log(`\nCreated: ${JSON.stringify(back)}`);
  console.log("Next: push (redeploy), then check https://www.bandziuk.com/restaurant-website-design and submit it for indexing.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
