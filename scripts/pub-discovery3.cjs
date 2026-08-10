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
  console.log("=== serviceOffered on comparable general SEO/diagnostic articles (EN) ===");
  const ids = ["blog-seo-cost","blog-website-no-leads","blog-slow-website","blog-not-showing-in-google","blog-how-to-choose-developer","blog-redesign-traffic-loss"];
  const docs = await client.fetch(`*[_id in $ids]{_id, title, "serviceOffered": serviceOffered[]->{_id,title}}`, { ids });
  docs.forEach(d => {
    console.log(d._id, "|", d.title);
    (d.serviceOffered||[]).forEach(s => console.log("   ->", s._id, s.title));
  });

  console.log("\n=== how many articles overall reference the Warsaw landing in serviceOffered ===");
  const warsawRefs = await client.fetch(`count(*[_type=="blog" && references("singlepage-web-development-warsaw")])`);
  console.log("EN warsaw refs:", warsawRefs);

  console.log("\n=== Website SEO Audit service page id check ===");
  const auditPage = await client.fetch(`*[_id == "0e071d28-ee05-42a2-81a6-5be75b4264bc"]{_id,title}`);
  console.log(JSON.stringify(auditPage));
}
main().catch((e) => { console.error(e); process.exit(1); });
