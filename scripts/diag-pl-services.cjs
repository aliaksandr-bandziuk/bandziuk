// scripts/diag-pl-services.cjs
// Read-only diagnostic: why the PL service page is not found by title.
//   node scripts/diag-pl-services.cjs

const { client } = require("./create-batch1-warsaw.cjs");

const codes = (s) =>
  [...s].map((ch) => (ch.charCodeAt(0) < 128 ? ch : `[U+${ch.charCodeAt(0).toString(16).toUpperCase()}]`)).join("");

(async () => {
  const cfg = client.config();
  console.log(`project ${cfg.projectId}  dataset ${cfg.dataset}  apiVersion ${cfg.apiVersion}  useCdn ${cfg.useCdn}  perspective ${cfg.perspective}`);

  const byId = await client.fetch(
    `*[_id == "77c5f5df-a6f3-49ca-8f42-f1439e3490c6"][0]{_id, _type, language, pageType, title}`
  );
  console.log("\nby id 77c5f5df-...:", byId ? JSON.stringify(byId) : "NOT FOUND");
  if (byId && byId.title) console.log("  title chars:", codes(byId.title));

  const counts = await client.fetch(
    `{"all": count(*[_type == "singlepage"]), "pl": count(*[_type == "singlepage" && language == "pl"]), "plService": count(*[_type == "singlepage" && language == "pl" && pageType == "service"])}`
  );
  console.log("\ncounts:", JSON.stringify(counts));

  const seo = await client.fetch(
    `*[_type == "singlepage" && language == "pl" && pageType == "service"]{_id, title, pageType} | order(title asc)`
  );
  console.log(`\nPL service pages (${seo.length}):`);
  for (const d of seo) console.log(`  ${d._id}  "${codes(d.title || "")}"`);
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
