// scripts/update-diary-01-blog.cjs
//
// Updates the ALREADY PUBLISHED diary #1 posts from drafts/_diary-01-docs.json.
// Patches only the fields the drafts own — title, seo, excerpt, previewImage and
// contentBlocks — and leaves _id, slug, publishedAt, category, serviceOffered,
// relatedArticles and the translation metadata untouched.
//
//   node scripts/assemble-diary-01-blog.cjs        rebuild the structure first
//   node scripts/update-diary-01-blog.cjs          dry run
//   node scripts/update-diary-01-blog.cjs --apply  write

const fs = require("fs");
const path = require("path");
const { client } = require("./create-batch1-warsaw.cjs");

const APPLY = process.argv.includes("--apply");
const FIELDS = ["title", "seo", "excerpt", "previewImage", "contentBlocks"];
const { docs } = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../drafts/_diary-01-docs.json"), "utf8")
);

const count = (blocks) =>
  blocks.reduce((acc, b) => ((acc[b._type] = (acc[b._type] || 0) + 1), acc), {});

async function main() {
  const langs = ["en", "pl", "ru"];
  const live = {};
  for (const lang of langs) {
    const id = docs[lang]._id;
    const doc = await client.fetch(
      `*[_id == $id][0]{_id, title, excerpt, seo, "blocks": count(contentBlocks), "preview": previewImage.asset._ref}`,
      { id }
    );
    if (!doc) {
      console.error(`Not published yet: ${id} — use apply-diary-01-blog.cjs instead.`);
      process.exit(1);
    }
    live[lang] = doc;
  }

  for (const lang of langs) {
    const next = docs[lang];
    const now = live[lang];
    console.log(`\n${next._id}`);
    console.log(`  title  old: ${now.title}`);
    console.log(`         new: ${next.title}`);
    if (now.seo && now.seo.metaTitle !== next.seo.metaTitle) {
      console.log(`  meta   old: ${now.seo.metaTitle}`);
      console.log(`         new: ${next.seo.metaTitle}`);
    }
    const sameExcerpt = now.excerpt === next.excerpt;
    console.log(`  excerpt ${sameExcerpt ? "unchanged" : "changed"}`);
    console.log(`  blocks  ${now.blocks} -> ${next.contentBlocks.length}  ${JSON.stringify(count(next.contentBlocks))}`);
    const samePreview = now.preview === next.previewImage.asset._ref;
    console.log(`  preview ${samePreview ? "unchanged" : `${now.preview} -> ${next.previewImage.asset._ref}`}`);
  }

  if (!APPLY) {
    console.log("\nDry run — nothing written. Re-run with --apply to update.");
    return;
  }

  for (const lang of langs) {
    const next = docs[lang];
    const set = {};
    for (const f of FIELDS) set[f] = next[f];
    await client.patch(next._id).set(set).commit();
    console.log(`updated ${next._id}`);
  }

  for (const lang of langs) {
    const d = await client.fetch(
      `*[_id == $id][0]{title, "blocks": count(contentBlocks), "slug": slug}`,
      { id: docs[lang]._id }
    );
    console.log(`\n${docs[lang]._id}: ${d.blocks} blocks\n  ${d.title}`);
  }
  console.log("\nLive URLs:");
  console.log(`  https://bandziuk.com/blog/${docs.en.slug.en.current}`);
  console.log(`  https://bandziuk.com/pl/blog/${docs.pl.slug.pl.current}`);
  console.log(`  https://bandziuk.com/ru/blog/${docs.ru.slug.ru.current}`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
