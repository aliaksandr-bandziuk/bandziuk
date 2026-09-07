// scripts/create-missing-technologies.cjs
//
// Creates the technology documents the moveandinvest case study needs and the
// site does not have yet: Sanity, Vercel and SCSS, one document per locale.
//
// These are brand names, so the title is identical in en / pl / ru — the same
// convention BRAND_ICONS in PortfolioTechnologies.tsx already relies on.
//
// Whether the three locale documents are also tied together by a
// translation.metadata document is not assumed: the script looks at how the
// existing technology documents are wired and mirrors that.
//
// The `svg` field is required by the schema but never rendered — the chip row
// draws react-icons by title and ignores the stored markup — so a neutral
// placeholder goes in, and the real icon comes from BRAND_ICONS.
//
// Usage:
//   node scripts/create-missing-technologies.cjs --dry-run
//   node scripts/create-missing-technologies.cjs

const { client } = require("./create-batch1-warsaw.cjs");

const DRY_RUN = process.argv.includes("--dry-run");
const LANGS = ["en", "pl", "ru"];

const PLACEHOLDER_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" ' +
  'stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
  'stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>';

const NEW_TECHNOLOGIES = [
  { id: "sanity", title: "Sanity", slug: "sanity" },
  { id: "vercel", title: "Vercel", slug: "vercel" },
  { id: "scss", title: "SCSS", slug: "scss" },
];

const docId = (id, lang) => (lang === "en" ? `technology-${id}` : `technology-${id}.${lang}`);

function buildDoc(tech, lang) {
  return {
    _id: docId(tech.id, lang),
    _type: "technology",
    language: lang,
    title: tech.title,
    svg: PLACEHOLDER_SVG,
    slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: tech.slug } },
  };
}

async function existingConventions() {
  const sample = await client.fetch(
    `*[_type == "technology"]{_id, title, language} | order(title asc)`
  );
  const byTitle = {};
  for (const d of sample) (byTitle[d.title] ||= []).push(d);

  // Pick a brand that exists in more than one locale and check whether a
  // translation.metadata document references it.
  const multi = Object.values(byTitle).find((docs) => docs.length > 1);
  let usesTranslationMetadata = false;
  if (multi) {
    const ids = multi.map((d) => d._id);
    const meta = await client.fetch(
      `count(*[_type == "translation.metadata" && count((translations[].value._ref)[@ in $ids]) > 0])`,
      { ids }
    );
    usesTranslationMetadata = meta > 0;
  }
  return { total: sample.length, titles: Object.keys(byTitle), usesTranslationMetadata };
}

async function main() {
  const conv = await existingConventions();
  console.log(`Existing technology documents: ${conv.total}`);
  console.log(`Distinct titles: ${conv.titles.join(", ")}`);
  console.log(
    `Locale documents tied by translation.metadata: ${conv.usesTranslationMetadata ? "yes" : "no"}\n`
  );

  const already = await client.fetch(
    `*[_type == "technology" && title in $titles]{_id, title, language}`,
    { titles: NEW_TECHNOLOGIES.map((t) => t.title) }
  );
  if (already.length) {
    console.log("Already present, will not be recreated:");
    already.forEach((d) => console.log(`  ${d.language}: ${d.title} (${d._id})`));
    console.log("");
  }
  const have = new Set(already.map((d) => `${d.title}|${d.language}`));

  const docs = [];
  for (const tech of NEW_TECHNOLOGIES) {
    for (const lang of LANGS) {
      if (have.has(`${tech.title}|${lang}`)) continue;
      docs.push(buildDoc(tech, lang));
    }
  }

  if (!docs.length) {
    console.log("Nothing to create.");
    return;
  }

  if (DRY_RUN) {
    console.log("Would create:");
    docs.forEach((d) => console.log(`  ${d.language}: ${d.title}  ->  ${d._id}`));
    if (conv.usesTranslationMetadata) {
      console.log("\nWould also create translation.metadata for:");
      NEW_TECHNOLOGIES.forEach((t) => console.log(`  technology-${t.id}.i18n`));
    }
    console.log("\nDry run — nothing written.");
    return;
  }

  const tx = client.transaction();
  docs.forEach((d) => tx.createIfNotExists(d));

  if (conv.usesTranslationMetadata) {
    for (const tech of NEW_TECHNOLOGIES) {
      tx.createIfNotExists({
        _id: `technology-${tech.id}.i18n`,
        _type: "translation.metadata",
        documentId: docId(tech.id, "en"),
        translations: LANGS.map((lang) => ({
          _key: lang,
          value: { _type: "reference", _ref: docId(tech.id, lang) },
        })),
      });
    }
  }

  const result = await tx.commit();
  console.log("Committed:", JSON.stringify(result.results.map((r) => r.id), null, 1));
  console.log("\nNow re-run: node scripts/run-moveandinvest-portfolio.cjs --dry-run");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
