// scripts/create-landing.cjs
//
// Creates landing pages in Sanity from their fixtures in src/dev-fixtures —
// the same files `npm run dev` renders on the page's real localhost address —
// and links the language versions with translation.metadata, shaped exactly
// like the ones Studio creates.
//
// Usage:
//   node scripts/create-landing.cjs --fixtures restaurant-seo.en,restaurant-seo.pl,restaurant-seo.ru            dry run
//   node scripts/create-landing.cjs --fixtures restaurant-seo.en,restaurant-seo.pl,restaurant-seo.ru --apply    create
//   ... --offline   build and check only, no Sanity calls
//   ... --add-languages   some versions already exist (e.g. EN published
//       alone, RU added later): existing documents are left untouched if
//       their address matches the fixture, only the missing ones are
//       created, and the translation.metadata link is created or extended
//
// Ids: EN `singlepage-<group>`, other languages `singlepage-<group>.<lang>`,
// metadata `singlepage-<group>.i18n` (group = fixture.group ?? fixture.slug) —
// the same ids src/dev-fixtures/registry.ts gives the fixtures, so the A/B
// form arm seen on localhost is the arm the live page gets.
//
// Everything is written in ONE transaction: all documents or none.
// After --apply the pages need a redeploy (dynamicParams = false).

const path = require("path");
const { createJiti } = require("jiti");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const argv = process.argv.slice(2);
const flag = (name) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 ? argv[i + 1] : undefined;
};
const APPLY = argv.includes("--apply");
const OFFLINE = argv.includes("--offline");
const ADD = argv.includes("--add-languages");
const NAMES = (flag("fixtures") || "").split(",").map((s) => s.trim()).filter(Boolean);
if (!NAMES.length) {
  console.error("Usage: node scripts/create-landing.cjs --fixtures <slug>.<lang>[,<slug>.<lang>...] [--apply|--offline]");
  process.exit(1);
}

const jiti = createJiti(__filename);
const fixtures = NAMES.map((name) => {
  const mod = jiti(path.resolve(__dirname, `../src/dev-fixtures/${name}.ts`));
  const fx = Object.values(mod).find((v) => v && v.contentBlocks);
  if (!fx) throw new Error(`No fixture export with contentBlocks in ${name}.ts`);
  return fx;
});

const groups = [...new Set(fixtures.map((fx) => fx.group ?? fx.slug))];
if (groups.length !== 1) throw new Error(`Fixtures belong to different groups: ${groups.join(", ")}`);
const BASE = `singlepage-${groups[0]}`;
const docId = (lang) => (lang === "en" ? BASE : `${BASE}.${lang}`);
const META_ID = `${BASE}.i18n`;
const langs = fixtures.map((fx) => fx.lang);
if (new Set(langs).size !== langs.length) throw new Error(`Duplicate language: ${langs.join(", ")}`);

function buildDoc(fx, { projectIds, formId }) {
  const contentBlocks = fx.contentBlocks.map((b) => {
    if (b._type === "portfolioPickBlock") {
      const { picks, ...rest } = b;
      return { ...rest, items: picks.map((slug, i) => ({ _type: "reference", _key: `pick${i + 1}`, _ref: projectIds[slug] })) };
    }
    if (b._type === "quoteFormBlock") return { ...b, form: { _type: "reference", _ref: formId } };
    return b;
  });
  return {
    _id: docId(fx.lang),
    _type: "singlepage",
    language: fx.lang,
    pageType: fx.pageType ?? "page",
    title: fx.title,
    heading: fx.heading,
    excerpt: fx.excerpt,
    slug: { _type: "localizedSlug", [fx.lang]: { _type: "slug", current: fx.slug } },
    seo: { metaTitle: fx.seo.metaTitle, metaDescription: fx.seo.metaDescription },
    heroLayout: fx.heroLayout,
    heroChips: fx.heroChips,
    heroPhonePoints: fx.heroPhonePoints,
    stickyCta: fx.stickyCta,
    ...(fx.offers?.length ? { offers: fx.offers } : {}),
    contentBlocks,
  };
}

function metaDoc() {
  return {
    _id: META_ID,
    _type: "translation.metadata",
    schemaTypes: ["singlepage"],
    translations: langs.map((lang) => ({
      _key: lang,
      _type: "internationalizedArrayReferenceValue",
      value: { _type: "reference", _ref: docId(lang), _weak: true, _strengthenOnPublish: { type: "singlepage" } },
    })),
  };
}

function check(doc) {
  const errors = [];
  const t = doc.seo.metaTitle.length;
  const d = doc.seo.metaDescription.length;
  if (t > 60) errors.push(`metaTitle ${t} chars`);
  if (d > 160) errors.push(`metaDescription ${d} chars`);
  if ((doc.heroChips || []).length > 3) errors.push("more than 3 hero chips");
  if ((doc.heroPhonePoints || []).length > 4) errors.push("more than 4 phone points");
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
  return errors.map((e) => `${doc.language}: ${e}`);
}

function summary(doc) {
  const lang = doc.language;
  const prefix = lang === "en" ? "" : `/${lang}`;
  console.log(`\n── ${lang.toUpperCase()}  ${doc._id}`);
  console.log(`URL:   ${prefix}/${doc.slug[lang].current}`);
  console.log(`H1:    ${doc.heading}`);
  console.log(`title: ${doc.seo.metaTitle} (${doc.seo.metaTitle.length})`);
  console.log(`blocks: ${doc.contentBlocks.map((b) => b._type + (b.layout ? `:${b.layout}` : "")).join(" → ")}`);
  const guide = doc.contentBlocks.find((b) => b.layout === "guide");
  if (guide) console.log(`guide H2: ${guide.content.filter((x) => x.style === "h2").length}`);
  const faq = doc.contentBlocks.find((b) => b._type === "faqBlock");
  if (faq) console.log(`FAQ: ${faq.faq.items.length} questions`);
  if (doc.offers) console.log(`offers: ${doc.offers.map((o) => `${o.price}${o.maxPrice ? "–" + o.maxPrice : "+"} ${o.currency}${o.unit === "month" ? "/mo" : ""}`).join(", ")}`);
}

async function main() {
  if (OFFLINE) {
    const docs = fixtures.map((fx) =>
      buildDoc(fx, {
        projectIds: Object.fromEntries((fx.contentBlocks.find((b) => b._type === "portfolioPickBlock")?.picks || []).map((s) => [s, `(${s})`])),
        formId: `(form ${fx.lang})`,
      }),
    );
    docs.forEach(summary);
    if (docs.length > 1) console.log(`\nmetadata: ${META_ID} → ${langs.join(", ")}`);
    const errors = docs.flatMap(check);
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

  // Nothing may sit on these ids or addresses — drafts included, because the
  // site's client reads drafts.
  const ids = [...langs.map(docId), META_ID];
  const allIds = [...ids, ...ids.map((i) => `drafts.${i}`)];
  const clash = await client.fetch(`*[_id in $allIds]{_id}`, { allIds });
  const slugClash = [];
  for (const fx of fixtures) {
    const hit = await client.fetch(`*[_type == "singlepage" && slug[$lang].current == $slug]._id`, { lang: fx.lang, slug: fx.slug });
    slugClash.push(...hit);
  }
  let taken = [...new Set([...clash.map((c) => c._id), ...slugClash])];
  // --add-languages: a published version whose id and address match its
  // fixture is kept as it is; anything else on these ids/addresses still stops
  const keep = new Set();
  if (ADD) {
    for (const fx of fixtures) {
      const id = docId(fx.lang);
      const live = await client.fetch(`*[_id == $id][0]{_id, "s": slug[$lang].current}`, { id, lang: fx.lang });
      if (live && live.s === fx.slug) keep.add(id);
    }
    taken = taken.filter((t) => !keep.has(t) && t !== META_ID);
  }
  if (taken.length) {
    console.log(`Aborting — already exists: ${taken.join(", ")}`);
    process.exit(1);
  }
  if (keep.size) console.log(`Kept as published: ${[...keep].join(", ")}`);

  const docs = [];
  for (const fx of fixtures) {
    if (keep.has(docId(fx.lang))) continue;
    const picks = fx.contentBlocks.find((b) => b._type === "portfolioPickBlock")?.picks || [];
    let projectIds = {};
    if (picks.length) {
      // picks are EN slugs; the PL/RU card is the EN case's translation
      const rows = await client.fetch(
        `*[_type == "portfolio" && language == "en" && !(_id in path("drafts.**")) && slug.en.current in $slugs]{
          "s": slug.en.current,
          "id": select(
            $lang == "en" => _id,
            *[_type == "translation.metadata" && references(^._id)][0].translations[_key == $lang][0].value._ref
          )
        }`,
        { lang: fx.lang, slugs: picks },
      );
      projectIds = Object.fromEntries(rows.filter((r) => r.id).map((r) => [r.s, r.id]));
      const missing = picks.filter((s) => !projectIds[s]);
      if (missing.length) {
        console.log(`Aborting — ${fx.lang}: portfolio projects not found: ${missing.join(", ")}`);
        process.exit(1);
      }
    }
    const formId = await client.fetch(
      `*[_type == "formStandardDocument" && language == $lang && !(_id in path("drafts.**"))][0]._id`,
      { lang: fx.lang },
    );
    const doc = buildDoc(fx, { projectIds, formId });
    summary(doc);
    if (picks.length) console.log(`portfolio: ${picks.map((s) => projectIds[s]).join(", ")}`);
    console.log(`form texts: ${formId}`);
    docs.push(doc);
  }
  // translation link: extend an existing metadata document, or create one
  const existingMeta = langs.length > 1
    ? await client.fetch(
        `*[_type == "translation.metadata" && count(translations[value._ref in $ids]) > 0][0]{_id, _rev, "keys": translations[]._key}`,
        { ids: langs.map(docId) },
      )
    : null;
  const missingKeys = existingMeta ? langs.filter((l) => !existingMeta.keys.includes(l)) : [];
  if (existingMeta) console.log(`\nmetadata: ${existingMeta._id} has ${existingMeta.keys.join(", ")}; adding ${missingKeys.join(", ") || "nothing"}`);
  else if (langs.length > 1) console.log(`\nmetadata: ${META_ID} → ${langs.join(", ")} (new)`);

  const errors = docs.flatMap(check);
  if (errors.length) {
    console.log(`\nAborting — ERRORS:\n- ${errors.join("\n- ")}`);
    process.exit(1);
  }

  if (!APPLY) {
    console.log("\nDry run — nothing written. Add --apply to create the pages.");
    return;
  }

  const tx = client.transaction();
  for (const doc of docs) tx.create(doc);
  if (existingMeta && missingKeys.length) {
    const items = metaDoc().translations.filter((t) => missingKeys.includes(t._key));
    tx.patch(existingMeta._id, (p) => p.ifRevisionId(existingMeta._rev).insert("after", "translations[-1]", items));
  } else if (!existingMeta && langs.length > 1) {
    tx.create(metaDoc());
  }
  await tx.commit();

  const back = await client.fetch(
    `*[_id in $ids]{_id, _type, language, "slug": coalesce(slug.en.current, slug.pl.current, slug.ru.current), "translations": count(translations)}`,
    { ids },
  );
  console.log(`\nNow in Sanity (${back.length}):`);
  for (const b of back) console.log(`  ${b._id}  ${b.language ?? ""} ${b.slug ?? ""}${b.translations ? ` (${b.translations} translations)` : ""}`);
  console.log("\nNext: push (redeploy), then check the live pages and submit them for indexing.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
