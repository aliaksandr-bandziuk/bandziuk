// scripts/create-author.cjs
//
// One-off: creates the owner's `author` document across all 3 locales
// (following the same baseId / `${baseId}.<lang>` / translation.metadata
// pattern used by scripts/importSinglepage.cjs), then patches every
// existing blog post (all locales) to reference the matching-locale
// author document.
//
// Usage:
//   node scripts/create-author.cjs             — dry run (prints only)
//   node scripts/create-author.cjs --apply      — creates + patches

const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const LOCALES = ["en", "pl", "ru"];
const BASE_ID = "author-aliaksandr-bandziuk";

// Reused from the About section — same asset across all 3 homepage docs.
const PHOTO_ASSET_REF = "image-f672c00fe2c4d1b2e6dfd5f64d9b65c50f20a3d1-446x559-png";

const CONTENT = {
  en: {
    name: "Aliaksandr Bandziuk",
    role: "Web Developer & SEO Consultant",
    bio: "Aliaksandr is a full-stack developer and SEO consultant who helps businesses grow online — building high-performing websites and driving qualified traffic through search engines, AI tools, and smart content structure.",
    photoAlt: "Aliaksandr Bandziuk — Web Developer & SEO Consultant",
  },
  pl: {
    name: "Aliaksandr Bandziuk",
    role: "Web Developer i Konsultant SEO",
    bio: "Aliaksandr to full stack developer i konsultant SEO, który pomaga firmom rozwijać się w internecie — tworząc wydajne strony internetowe i pozyskując wartościowy ruch z wyszukiwarek, narzędzi AI oraz dobrze zaplanowanej struktury treści.",
    photoAlt: "Aliaksandr Bandziuk — Web Developer i Konsultant SEO",
  },
  ru: {
    name: "Aliaksandr Bandziuk",
    role: "Веб-разработчик и SEO-консультант",
    bio: "Александр — разработчик сайтов и SEO-специалист, который помогает бизнесу расти онлайн: создаёт удобные быстрые сайты и привлекает целевых клиентов через поисковики, ИИ-сервисы и грамотную структуру контента.",
    photoAlt: "Александр Бандюк — веб-разработчик и SEO-консультант",
  },
};

const SOCIAL_LINKS = [
  { _key: "linkedin", platform: "linkedin", url: "https://www.linkedin.com/in/bandziuk/" },
  { _key: "facebook", platform: "facebook", url: "https://www.facebook.com/bandziuk/" },
];

function docIdFor(lang) {
  return lang === "en" ? BASE_ID : `${BASE_ID}.${lang}`;
}

function buildAuthorDoc(lang) {
  const c = CONTENT[lang];
  return {
    _id: docIdFor(lang),
    _type: "author",
    name: c.name,
    role: c.role,
    bio: c.bio,
    photo: {
      _type: "image",
      alt: c.photoAlt,
      asset: { _type: "reference", _ref: PHOTO_ASSET_REF },
    },
    socialLinks: SOCIAL_LINKS,
    language: lang,
  };
}

async function main() {
  console.log("=== PROPOSED AUTHOR DOCUMENTS ===\n");
  for (const lang of LOCALES) {
    const c = CONTENT[lang];
    console.log(`--- ${lang} (${docIdFor(lang)}) ---`);
    console.log(`  name: ${c.name}`);
    console.log(`  role: ${c.role}`);
    console.log(`  bio:  ${c.bio}`);
    console.log(`  photo: ${PHOTO_ASSET_REF} (reused from About section)`);
    console.log(`  socialLinks: ${SOCIAL_LINKS.map((s) => `${s.platform} -> ${s.url}`).join(", ")}`);
    console.log("");
  }

  if (!APPLY) {
    console.log("Dry run only (no --apply flag) — nothing was written.");
    return;
  }

  // Guard against re-running into existing docs.
  const existingIds = await client.fetch(
    `*[_id in $ids]._id`,
    { ids: [...LOCALES.map(docIdFor), `${BASE_ID}.i18n`] }
  );
  if (existingIds.length > 0) {
    console.log(`\nAborting — these documents already exist: ${existingIds.join(", ")}`);
    console.log("Delete them in Studio first, or adjust BASE_ID, then re-run.");
    return;
  }

  console.log("\n=== CREATING AUTHOR DOCUMENTS ===");
  const createdIds = [];
  try {
    for (const lang of LOCALES) {
      const doc = buildAuthorDoc(lang);
      await client.create(doc);
      createdIds.push(doc._id);
      console.log(`OK create ${doc._id}`);
    }

    const metaDoc = {
      _id: `${BASE_ID}.i18n`,
      _type: "translation.metadata",
      documentId: BASE_ID,
      translations: LOCALES.map((lang) => ({
        _key: lang,
        value: { _type: "reference", _ref: docIdFor(lang) },
      })),
    };
    await client.create(metaDoc);
    createdIds.push(metaDoc._id);
    console.log(`OK link   ${metaDoc._id}`);
  } catch (err) {
    console.error(`FAILED: ${err.message}`);
    if (createdIds.length) {
      console.log(`Rolling back: ${createdIds.join(", ")}`);
      for (const id of createdIds) {
        await client.delete(id).catch(() => {});
      }
    }
    process.exit(1);
  }

  // ─── patch every existing blog post to reference the matching-locale author ───
  console.log("\n=== PATCHING BLOG POSTS ===");
  const posts = await client.fetch(`*[_type == "blog"]{_id, title, language}`);
  let patched = 0;
  let failed = 0;
  for (const post of posts) {
    const authorId = docIdFor(LOCALES.includes(post.language) ? post.language : "en");
    try {
      await client
        .patch(post._id)
        .set({ author: { _type: "reference", _ref: authorId } })
        .commit();
      patched += 1;
      console.log(`OK    ${post._id} (${post.language}) -> ${authorId}`);
    } catch (err) {
      failed += 1;
      console.log(`FAIL  ${post._id} (${post.language}): ${err.message.split("\n")[0]}`);
    }
  }

  console.log("\n=== SUMMARY ===");
  console.log(`Author documents created: ${createdIds.length}`);
  console.log(`Blog posts patched: ${patched}`);
  console.log(`Blog posts failed: ${failed}`);
  console.log(`Blog posts total: ${posts.length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
