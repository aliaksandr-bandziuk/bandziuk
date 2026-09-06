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

async function main() {
  // Verify translation.metadata for the two service pages
  const enIds = ["831dc620-2863-4d55-baa0-aa874a7374ac", "42a469a6-28f3-4015-8b88-414c8eb3d4fa"];
  console.log("=== translation.metadata for service pages ===");
  const meta = await client.fetch(
    `*[_type == "translation.metadata" && references($ids)]{
      _id,
      "translations": translations[]{
        "lang": _key,
        "value": value->{_id, language, seo, "slugEn": slug.en.current, "slugPl": slug.pl.current, "slugRu": slug.ru.current}
      }
    }`,
    { ids: enIds }
  );
  console.log(JSON.stringify(meta, null, 1));

  // Verify translation.metadata for the category
  console.log("\n=== translation.metadata for category c5f6ed68... ===");
  const catMeta = await client.fetch(
    `*[_type == "translation.metadata" && references("c5f6ed68-8b92-4f9d-81b4-2db766b752e1")]{
      _id,
      "translations": translations[]{
        "lang": _key,
        "value": value->{_id, title, language, "slug": slug}
      }
    }`
  );
  console.log(JSON.stringify(catMeta, null, 1));

  // Full category docs by known UUIDs
  console.log("\n=== Category docs by known UUIDs (en/pl/ru) ===");
  const cats = await client.fetch(
    `*[_id in ["c5f6ed68-8b92-4f9d-81b4-2db766b752e1", "fbbcc050-0f47-4289-97f5-f2b62b16c5cd", "2c48e7d6-6853-4190-8fd2-b48f481362e9"]]{_id, title, language, slug}`
  );
  console.log(JSON.stringify(cats, null, 1));
}

main().catch((e) => { console.error(e); process.exit(1); });
