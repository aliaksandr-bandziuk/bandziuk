// scripts/replace-landing.cjs
//
// Rewrites EXISTING landing pages in Sanity from fixtures in src/dev-fixtures,
// keeping the document: its _id, slug, language, translation.metadata link,
// pageType, parentPage, previewImage, areaServed. Used when an old-template page
// (Benefits Block, Work Process, testimonials…) is rebuilt on the landing
// template under the same address.
//
// The page is found by the fixture's language + slug. Replaced: title, heading,
// excerpt, seo.metaTitle, seo.metaDescription, heroLayout, heroChips,
// heroPhonePoints, heroVisual/heroPhoto (if the fixture has them), stickyCta,
// offers, contentBlocks — the old blocks are dropped entirely.
//
// On localhost the Sanity page wins over its fixture, so a rewrite is reviewed
// at <address>--preview (PREVIEW_FIXTURES in src/dev-fixtures/registry.ts).
//
// Usage:
//   node scripts/replace-landing.cjs --fixtures seo-for-law-firms.en,seo-for-law-firms.pl            dry run
//   node scripts/replace-landing.cjs --fixtures seo-for-law-firms.en,seo-for-law-firms.pl --apply    write
//
// Aborts on drafts. One transaction, one patch per document, guarded by _rev.
// The webhook revalidates the pages; no redeploy needed (the addresses exist).

const path = require("path");
const { createJiti } = require("jiti");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const argv = process.argv.slice(2);
const flag = (name) => { const i = argv.indexOf(`--${name}`); return i >= 0 ? argv[i + 1] : undefined; };
const APPLY = argv.includes("--apply");
const NAMES = (flag("fixtures") || "").split(",").map((s) => s.trim()).filter(Boolean);
if (!NAMES.length) {
  console.error("Usage: node scripts/replace-landing.cjs --fixtures <file>.<lang>[,...] [--apply]");
  process.exit(1);
}

const jiti = createJiti(__filename);
const fixtures = NAMES.map((name) => {
  const mod = jiti(path.resolve(__dirname, `../src/dev-fixtures/${name}.ts`));
  const fx = Object.values(mod).find((v) => v && v.contentBlocks);
  if (!fx) throw new Error(`No fixture export with contentBlocks in ${name}.ts`);
  return fx;
});

const { createClient } = require("@sanity/client");
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

function buildFields(fx, { projectIds, formId }) {
  const contentBlocks = fx.contentBlocks.map((b) => {
    if (b._type === "portfolioPickBlock") {
      const { picks, ...rest } = b;
      return { ...rest, items: picks.map((slug, i) => ({ _type: "reference", _key: `pick${i + 1}`, _ref: projectIds[slug] })) };
    }
    if (b._type === "quoteFormBlock") return { ...b, form: { _type: "reference", _ref: formId } };
    return b;
  });
  return {
    title: fx.title,
    heading: fx.heading,
    excerpt: fx.excerpt,
    "seo.metaTitle": fx.seo.metaTitle,
    "seo.metaDescription": fx.seo.metaDescription,
    heroLayout: fx.heroLayout,
    heroChips: fx.heroChips,
    heroPhonePoints: fx.heroPhonePoints,
    ...(fx.heroVisual ? { heroVisual: fx.heroVisual } : {}),
    ...(fx.heroPhoto ? { heroPhoto: fx.heroPhoto } : {}),
    stickyCta: fx.stickyCta,
    ...(fx.offers?.length ? { offers: fx.offers } : {}),
    contentBlocks,
  };
}

function check(lang, f) {
  const errors = [];
  if (f["seo.metaTitle"].length > 60) errors.push(`metaTitle ${f["seo.metaTitle"].length} chars`);
  if (f["seo.metaDescription"].length > 160) errors.push(`metaDescription ${f["seo.metaDescription"].length} chars`);
  const keys = new Set();
  JSON.stringify(f, (k, v) => { if (k === "_key") { if (keys.has(v)) errors.push(`duplicate _key ${v}`); keys.add(v); } return v; });
  for (const b of f.contentBlocks) {
    if (b._type === "portfolioPickBlock" && b.items.some((r) => !r._ref)) errors.push("unresolved portfolio pick");
    if (b._type === "quoteFormBlock" && !b.form._ref) errors.push("quote form texts not found");
  }
  return errors.map((e) => `${lang}: ${e}`);
}

const blockList = (blocks) => (blocks || []).map((b) => b._type + (b.layout ? `:${b.layout}` : "")).join(" → ");

async function main() {
  const plan = [];
  for (const fx of fixtures) {
    const doc = await client.fetch(
      `*[_type == "singlepage" && language == $lang && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]`,
      { lang: fx.lang, s: fx.slug },
    );
    if (!doc) { console.log(`Aborting — ${fx.lang} «${fx.slug}»: no published page with this address`); process.exit(1); }
    const draft = await client.fetch(`*[_id == $id][0]._id`, { id: `drafts.${doc._id}` });
    if (draft) { console.log(`Aborting — draft exists, publish or discard it first: ${draft}`); process.exit(1); }

    const picks = fx.contentBlocks.find((b) => b._type === "portfolioPickBlock")?.picks || [];
    const rows = picks.length ? await client.fetch(
      `*[_type == "portfolio" && language == "en" && !(_id in path("drafts.**")) && slug.en.current in $slugs]{
        "s": slug.en.current,
        "id": select($lang == "en" => _id, *[_type == "translation.metadata" && references(^._id)][0].translations[_key == $lang][0].value._ref)
      }`,
      { lang: fx.lang, slugs: picks },
    ) : [];
    const projectIds = Object.fromEntries(rows.filter((r) => r.id).map((r) => [r.s, r.id]));
    const missing = picks.filter((s) => !projectIds[s]);
    if (missing.length) { console.log(`Aborting — ${fx.lang}: portfolio projects not found: ${missing.join(", ")}`); process.exit(1); }
    const formId = await client.fetch(`*[_type == "formStandardDocument" && language == $lang && !(_id in path("drafts.**"))][0]._id`, { lang: fx.lang });

    const fields = buildFields(fx, { projectIds, formId });
    const errors = check(fx.lang, fields);
    if (errors.length) { console.log(`Aborting — ERRORS:\n- ${errors.join("\n- ")}`); process.exit(1); }

    const kept = Object.keys(doc).filter((k) => !k.startsWith("_") && !(k in fields) && k !== "seo");
    console.log(`\n── ${fx.lang.toUpperCase()}  ${doc._id}  /${fx.lang === "en" ? "" : fx.lang + "/"}${fx.slug}`);
    console.log(`H1:     «${doc.heading || doc.title}» → «${fields.heading}»`);
    console.log(`title:  «${doc.seo?.metaTitle || ""}» → «${fields["seo.metaTitle"]}» (${fields["seo.metaTitle"].length})`);
    console.log(`blocks: ${blockList(doc.contentBlocks)}`);
    console.log(`     →  ${blockList(fields.contentBlocks)}`);
    console.log(`hero:   ${doc.heroLayout || "(none)"} → ${fields.heroLayout}`);
    console.log(`kept:   ${kept.join(", ")}`);
    if (picks.length) console.log(`portfolio: ${picks.map((s) => projectIds[s]).join(", ")}`);
    plan.push({ id: doc._id, rev: doc._rev, fields, unsetOffers: !fields.offers && doc.offers });
  }

  if (!APPLY) return console.log(`\nDry run — ${plan.length} page(s), nothing written. Add --apply to write.`);
  const tx = client.transaction();
  for (const p of plan) {
    tx.patch(p.id, (q) => {
      let r = q.ifRevisionId(p.rev).setIfMissing({ seo: {} }).set(p.fields);
      if (p.unsetOffers) r = r.unset(["offers"]);
      return r;
    });
  }
  await tx.commit();
  console.log(`\nWritten: ${plan.map((p) => p.id).join(", ")}`);
  console.log("The webhook revalidates these pages. Remove them from PREVIEW_FIXTURES in registry.ts.");
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
