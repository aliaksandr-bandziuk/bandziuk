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

const BRAND = new Set(["Next.js","TypeScript","Git","JavaScript","React.js","WordPress","WooCommerce","Figma","Tailwind","Photoshop","PHP","Google Analytics","Swiper"]);
const CONCEPT = new Set(["SEO","API Integration","API Интеграция","Integracja API","Hosting & Deployment","Hosting i wdrażanie","Хостинг и деплой","Web Accessibility","Web Dostępność","Web Доступность"]);

async function main() {
  const docs = await client.fetch(`*[_type == "portfolio"]{_id, title, language, "slug": slug[language].current, "technologies": technologies[]->{title}}`);
  const unmatched = new Set();
  docs.forEach(d => {
    (d.technologies || []).forEach(t => {
      if (!BRAND.has(t.title) && !CONCEPT.has(t.title)) unmatched.add(t.title);
    });
  });
  console.log("Unmatched tech titles (would render text-only):", [...unmatched]);

  console.log("\n=== Sample of EN portfolio docs with tech lists (for test page selection) ===");
  docs.filter(d => d.language === "en").forEach(d => {
    console.log(d.slug, "|", (d.technologies||[]).map(t=>t.title).join(", "));
  });
}
main().catch((e) => { console.error(e); process.exit(1); });
