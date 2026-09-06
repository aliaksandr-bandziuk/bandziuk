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
  console.log("projectId:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, "dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);

  const uaeDocs = await client.fetch(`*[_id match "*uae*" || slug.en.current match "*uae*" || slug.ru.current match "*oae*"]{_id, _type, language, title, "slug": slug, pageType, _updatedAt}`);
  console.log("\n--- UAE-related docs (any) ---");
  console.log(JSON.stringify(uaeDocs, null, 1));

  const mgDocs = await client.fetch(`*[_id match "*montenegro*" || _id match "*chernogor*"]{_id, _type, language, title}`);
  console.log("\n--- Montenegro-related docs ---");
  console.log(JSON.stringify(mgDocs, null, 1));
  const geDocs = await client.fetch(`*[_id match "*georgia*" || _id match "*gruzi*"]{_id, _type, language, title}`);
  console.log("\n--- Georgia-related docs ---");
  console.log(JSON.stringify(geDocs, null, 1));

  const geoHub = await client.fetch(`*[_id in ["singlepage-locations","singlepage-locations.pl","singlepage-locations.ru"]]{_id, _type, language, title, "slug": slug, pageType, parentPage}`);
  console.log("\n--- Geo hub docs ---");
  console.log(JSON.stringify(geoHub, null, 1));

  const refs = await client.fetch(`*[_type in ["singlepage","portfolio"] && (slug.en.current == "multilingual-website-development" || slug.en.current == "ai-search-readiness" || slug.en.current == "build-and-optimize-a-multilingual-real-estate-platform" || slug.en.current == "web-development-cyprus")]{_id, _type, language, title, "slug": slug}`);
  console.log("\n--- Reference target docs ---");
  console.log(JSON.stringify(refs, null, 1));

  const cyprusPrecedent = await client.fetch(`*[_type=="singlepage" && (_id match "*cyprus*")]{_id, _type, language, title, pageType, "slug": slug, areaServed}`);
  console.log("\n--- Cyprus precedent docs ---");
  console.log(JSON.stringify(cyprusPrecedent, null, 1));

  const authors = await client.fetch(`*[_type=="author"]{_id, language, name}`);
  console.log("\n--- Author docs ---");
  console.log(JSON.stringify(authors, null, 1));
}

main().catch((e) => { console.error(e); process.exit(1); });
