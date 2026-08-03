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
const ids = [
  "singlepage-psychologists-therapists", "singlepage-psychologists-therapists.pl", "singlepage-psychologists-therapists.ru",
  "singlepage-online-booking", "singlepage-online-booking.pl", "singlepage-online-booking.ru",
  "singlepage-web-development-warsaw", "singlepage-web-development-warsaw.pl", "singlepage-web-development-warsaw.ru",
  "singlepage-platform-migration", "singlepage-platform-migration.pl", "singlepage-platform-migration.ru",
  "singlepage-dental-clinic-website", "singlepage-dental-clinic-website.pl", "singlepage-dental-clinic-website.ru",
  "blog-psychologist-website-cost", "blog-psychologist-website-cost.pl", "blog-psychologist-website-cost.ru",
  "blog-redesign-traffic-loss", "blog-redesign-traffic-loss.pl", "blog-redesign-traffic-loss.ru",
  "blog-website-no-leads", "blog-website-no-leads.pl", "blog-website-no-leads.ru",
  "blog-platform-choice", "blog-platform-choice.pl", "blog-platform-choice.ru",
  "blog-slow-website", "blog-slow-website.pl", "blog-slow-website.ru",
  "blog-how-to-choose-developer", "blog-how-to-choose-developer.pl", "blog-how-to-choose-developer.ru",
  "blog-psychologist-website-checklist", "blog-auto-repair-website-cost", "blog-construction-website-cost",
];
client.fetch("*[_id in $ids]._id", { ids }).then((existing) => {
  const missing = ids.filter((id) => !existing.includes(id));
  console.log("EXISTING:", existing.length, "/", ids.length);
  console.log("MISSING (expected forward refs or collisions to check):");
  missing.forEach((id) => console.log("  " + id));
});
