// scripts/build-link-map-proposal.cjs
// Site-wide internal linking pass — Step 2: propose the full link map.
// Cross-checks every candidate edge against real data: existing edges (dedupe),
// landing block-capability, per-page 8-link cap, prohibited pairs, one-link-per-target.
const fs = require("fs");
const path = require("path");
const DRAFTS = path.resolve(__dirname, "../drafts");

const blogs = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_inventory-blogs.json"), "utf8"));
const singlepages = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_inventory-singlepages.json"), "utf8"));
const byId = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-urlmap.json"), "utf8"));
const edges = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-edges.json"), "utf8"));
const blockPresence = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-blockpresence.json"), "utf8"));
const landingRegistry = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_landing-registry.json"), "utf8"));

// ---- Article family registry (EN id -> {en,pl,ru}) ----
const ARTICLE = {
  // 12 new articles (base/.pl/.ru convention)
  "blog-psychologist-website-checklist": null,
  "blog-auto-repair-website-cost": null,
  "blog-construction-website-cost": null,
  "blog-how-to-choose-developer": null,
  "blog-freelancer-vs-agency": null,
  "blog-platform-choice": null,
  "blog-website-no-leads": null,
  "blog-slow-website": null,
  "blog-not-showing-in-google": null,
  "blog-website-build-timeline": null,
  "blog-multilingual-website-cost": null,
  "blog-chatgpt-recommendations": null,
  // pre-existing, base/.pl/.ru convention
  "blog-beauty-salon-website-cost": null,
  "blog-legal-seo-cost": null,
  "blog-agency-website-cost": null,
  "blog-developer-website-cost": null,
  "blog-psychologist-website-cost": null,
  "blog-real-estate-agency-checklist": null,
  "blog-redesign-traffic-loss": null,
  "blog-builder-vs-custom": null,
  "blog-seo-cost": null,
  "blog-found-via-chatgpt": null,
};
for (const enId of Object.keys(ARTICLE)) {
  ARTICLE[enId] = { en: enId, pl: `${enId}.pl`, ru: `${enId}.ru` };
}
// the one non-suffix-convention article (lawyer)
ARTICLE["53f4a797-8b17-4427-9b13-74b8c4db71e0"] = {
  en: "53f4a797-8b17-4427-9b13-74b8c4db71e0",
  pl: "d7c4dc47-ce4c-4324-b334-46300222b521",
  ru: "d7738e6f-7b91-4e01-9f6a-0fea502450b6",
};
const LAWYER_ARTICLE = "53f4a797-8b17-4427-9b13-74b8c4db71e0";

// ---- Landing family registry ----
const LANDING = { ...landingRegistry };
// SEO service + AI-ready SEO/GEO (already known from batches 3-4)
LANDING["42a469a6-28f3-4015-8b88-414c8eb3d4fa"] = { en: "42a469a6-28f3-4015-8b88-414c8eb3d4fa", pl: "77c5f5df-a6f3-49ca-8f42-f1439e3490c6", ru: "6a81eab0-6993-41a6-adc3-d9047a3b35a0" };
LANDING["831dc620-2863-4d55-baa0-aa874a7374ac"] = { en: "831dc620-2863-4d55-baa0-aa874a7374ac", pl: "3a759a28-4135-4731-a318-cffee1b512f0", ru: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71" };
const SEO_SERVICE = "42a469a6-28f3-4015-8b88-414c8eb3d4fa";
const GEO_SERVICE = "831dc620-2863-4d55-baa0-aa874a7374ac";
const WARSAW = "singlepage-web-development-warsaw";
const PLATFORM_MIGRATION = "singlepage-platform-migration";
const MULTILINGUAL = "singlepage-multilingual-website";
const STARTUP = "singlepage-startup-website";
const PSYCHOLOGIST_LANDING = "singlepage-psychologists-therapists";
const ONLINE_BOOKING = "singlepage-online-booking";
const CATALOG = "singlepage-catalog-website";
const BEAUTY_SALON = "405bd22d-5aee-45a3-8f9b-108821d9006a";
const BEAUTY_CATEGORY = "dab61d1a-28d8-4a10-a2c4-de17399cdbe7";
const REAL_ESTATE_AGENCY = "singlepage-real-estate-agency-website";
const PROPERTY_DEVELOPER = "singlepage-property-developer-website";
const LAWYER_LANDING = "f4a4b3c0-2d0e-4416-9909-04dcc667318b";
const SEO_LAW = "dc0a0998-d7e5-485a-b405-233ebfcb1630";
const SEO_REAL_ESTATE = "9b8d7d33-0df4-4d4f-967c-9ff454a07a39";
const SEO_REAL_ESTATE_CYPRUS = "3399fa5f-8de5-4b6c-8b31-6b5068b9692f";
const SEO_BEAUTY = "5869ba72-348b-498e-b419-861e52ccb6ef";

// Niches with NO dedicated cost/checklist article (confirmed absent from inventory)
const NICHE_NO_ARTICLE = [
  "singlepage-accounting-firm", "singlepage-architecture-studio", "singlepage-dental-clinic-website",
  "singlepage-fitness-studio", "singlepage-hotel-website", "singlepage-language-school",
  "singlepage-manufacturing-company", "singlepage-photographer", "singlepage-recruitment-agency",
  "singlepage-restaurant", "singlepage-logistics-company", "singlepage-travel-agency",
  "singlepage-veterinary-clinic", "singlepage-cleaning-company",
];

// ---- Prohibited pairs (both directions) ----
const PROHIBITED = [
  ["singlepage-veterinary-clinic", "singlepage-dental-clinic-website"],
  ["singlepage-fitness-studio", BEAUTY_SALON],
  ["singlepage-fitness-studio", BEAUTY_CATEGORY],
  ["singlepage-fitness-studio", SEO_BEAUTY],
  ["singlepage-logistics-company", "singlepage-recruitment-agency"],
];
// hotel<->travel: max ONE link each way, not fully prohibited
const HOTEL_TRAVEL_CAP = [["singlepage-hotel-website", "singlepage-travel-agency"]];

function isProhibited(a, b) {
  return PROHIBITED.some(([x, y]) => (x === a && y === b) || (x === b && y === a));
}

// ---- Existing edge lookup (by exact source id, exact target id) ----
const existingEdgeSet = new Set(edges.map((e) => `${e.sourceId}>${e.targetId}`));
function hasExistingEdge(sourceId, targetId) { return existingEdgeSet.has(`${sourceId}>${targetId}`); }

const existingOutboundCount = {};
for (const e of edges) {
  if (e.kind === "inline-body" || e.kind === "relatedServicesBlock") {
    existingOutboundCount[e.sourceId] = (existingOutboundCount[e.sourceId] || 0) + 1;
  }
}

function hasSafeBlock(landingOrArticleId) {
  const bp = blockPresence[landingOrArticleId];
  if (!bp) return false;
  return bp.textContent || bp.faqBlock || bp.doubleTextBlock || bp.reviewsFullBlock;
}

// ================= PROPOSAL BUILDER =================
// Each candidate: {sourceFamily, sourceType, targetFamily, targetType, note, myChoice}
const candidates = [];
function add(sourceFamily, sourceType, targetFamily, targetType, note, myChoice) {
  candidates.push({ sourceFamily, sourceType, targetFamily, targetType, note: note || "", myChoice: !!myChoice });
}

// ---- 1. Article -> Landing ----
add("blog-psychologist-website-checklist", "article", PSYCHOLOGIST_LANDING, "landing", "given");
add("blog-psychologist-website-checklist", "article", ONLINE_BOOKING, "landing", "given");
add("blog-auto-repair-website-cost", "article", WARSAW, "landing", "given");
add("blog-auto-repair-website-cost", "article", PLATFORM_MIGRATION, "landing", "given");
add("blog-construction-website-cost", "article", PLATFORM_MIGRATION, "landing", "given");
add("blog-construction-website-cost", "article", WARSAW, "landing", "given");
add("blog-multilingual-website-cost", "article", MULTILINGUAL, "landing", "given");
add("blog-multilingual-website-cost", "article", PLATFORM_MIGRATION, "landing", "given");
add("blog-how-to-choose-developer", "article", WARSAW, "landing", "given");
add("blog-how-to-choose-developer", "article", STARTUP, "landing", "given");
add("blog-freelancer-vs-agency", "article", WARSAW, "landing", "given");
add("blog-freelancer-vs-agency", "article", MULTILINGUAL, "landing", "given");
add("blog-platform-choice", "article", PLATFORM_MIGRATION, "landing", "given");
add("blog-platform-choice", "article", STARTUP, "landing", "given");
add("blog-website-build-timeline", "article", WARSAW, "landing", "given");
add("blog-website-build-timeline", "article", STARTUP, "landing", "given");
add("blog-website-no-leads", "article", SEO_SERVICE, "landing", "given");
add("blog-website-no-leads", "article", PLATFORM_MIGRATION, "landing", "given");
add("blog-slow-website", "article", PLATFORM_MIGRATION, "landing", "given");
add("blog-slow-website", "article", SEO_SERVICE, "landing", "given");
add("blog-not-showing-in-google", "article", SEO_SERVICE, "landing", "given");
add("blog-not-showing-in-google", "article", GEO_SERVICE, "landing", "given");
add("blog-chatgpt-recommendations", "article", GEO_SERVICE, "landing", "given");
add("blog-chatgpt-recommendations", "article", SEO_SERVICE, "landing", "given");
add("blog-redesign-traffic-loss", "article", PLATFORM_MIGRATION, "landing", "given");
add("blog-redesign-traffic-loss", "article", MULTILINGUAL, "landing", "given");
add("blog-builder-vs-custom", "article", PLATFORM_MIGRATION, "landing", "given");
add("blog-builder-vs-custom", "article", STARTUP, "landing", "given");
add("blog-seo-cost", "article", SEO_SERVICE, "landing", "given");
add("blog-seo-cost", "article", GEO_SERVICE, "landing", "given");
add("blog-found-via-chatgpt", "article", GEO_SERVICE, "landing", "given");
add("blog-found-via-chatgpt", "article", MULTILINGUAL, "landing", "given");
// existing niche cost articles: own niche + MY CHOICE of adjacent capability (flagged)
add("blog-beauty-salon-website-cost", "article", BEAUTY_SALON, "landing", "own niche");
add("blog-beauty-salon-website-cost", "article", SEO_SERVICE, "landing", "my choice of adjacent capability — salons care about local search visibility", true);
add("blog-legal-seo-cost", "article", SEO_LAW, "landing", "own niche (SEO-specific, not the general lawyer landing)", true);
add("blog-legal-seo-cost", "article", GEO_SERVICE, "landing", "my choice of adjacent capability", true);
add("blog-agency-website-cost", "article", REAL_ESTATE_AGENCY, "landing", "own niche");
add("blog-agency-website-cost", "article", MULTILINGUAL, "landing", "my choice — real estate buyers are often international", true);
add("blog-developer-website-cost", "article", PROPERTY_DEVELOPER, "landing", "own niche");
add("blog-developer-website-cost", "article", WARSAW, "landing", "my choice of adjacent capability", true);
add("blog-psychologist-website-cost", "article", PSYCHOLOGIST_LANDING, "landing", "own niche");
add("blog-psychologist-website-cost", "article", ONLINE_BOOKING, "landing", "my choice — booking is the natural adjacent capability for this niche", true);

// ---- 2. Landing -> Article ----
// Niches WITH a dedicated article (both cost+checklist where both exist)
add(PSYCHOLOGIST_LANDING, "landing", "blog-psychologist-website-cost", "article", "own niche cost");
add(PSYCHOLOGIST_LANDING, "landing", "blog-psychologist-website-checklist", "article", "own niche checklist");
add(PSYCHOLOGIST_LANDING, "landing", "blog-website-no-leads", "article", "given template");
add(REAL_ESTATE_AGENCY, "landing", "blog-agency-website-cost", "article", "own niche cost");
add(REAL_ESTATE_AGENCY, "landing", "blog-real-estate-agency-checklist", "article", "own niche checklist");
add(REAL_ESTATE_AGENCY, "landing", "blog-website-no-leads", "article", "given template");
add(PROPERTY_DEVELOPER, "landing", "blog-developer-website-cost", "article", "own niche cost");
add(PROPERTY_DEVELOPER, "landing", "blog-website-no-leads", "article", "given template");
add(PROPERTY_DEVELOPER, "landing", "blog-how-to-choose-developer", "article", "given template (deciding pick)");
add(BEAUTY_SALON, "landing", "blog-beauty-salon-website-cost", "article", "own niche cost");
add(BEAUTY_SALON, "landing", "blog-website-no-leads", "article", "given template");
add(BEAUTY_SALON, "landing", "blog-how-to-choose-developer", "article", "given template (deciding pick)");
add(BEAUTY_CATEGORY, "landing", "blog-beauty-salon-website-cost", "article", "closest niche article (category page, no article of its own)", true);
add(BEAUTY_CATEGORY, "landing", "blog-website-no-leads", "article", "given template");
add(LAWYER_LANDING, "landing", LAWYER_ARTICLE, "article", "own niche article (\"why every lawyer needs a website\")");
add(LAWYER_LANDING, "landing", "blog-website-no-leads", "article", "given template");
add(LAWYER_LANDING, "landing", "blog-website-build-timeline", "article", "given template (deciding pick)");
// SEO-for-X niche pages — adapted rule (not explicit in brief, flagged)
add(SEO_LAW, "landing", "blog-legal-seo-cost", "article", "own niche SEO cost", true);
add(SEO_LAW, "landing", "blog-not-showing-in-google", "article", "adapted SEO-service template", true);
add(SEO_REAL_ESTATE, "landing", "blog-seo-cost", "article", "adapted SEO-service template", true);
add(SEO_REAL_ESTATE, "landing", "blog-not-showing-in-google", "article", "adapted SEO-service template", true);
add(SEO_REAL_ESTATE_CYPRUS, "landing", "blog-seo-cost", "article", "adapted SEO-service template", true);
add(SEO_REAL_ESTATE_CYPRUS, "landing", "blog-website-no-leads", "article", "adapted SEO-service template", true);
add(SEO_BEAUTY, "landing", "blog-beauty-salon-website-cost", "article", "adapted SEO-service template", true);
add(SEO_BEAUTY, "landing", "blog-not-showing-in-google", "article", "adapted SEO-service template", true);
// Niches with NO dedicated article: no-leads + one deciding pick, alternating
NICHE_NO_ARTICLE.forEach((landing, i) => {
  add(landing, "landing", "blog-website-no-leads", "article", "given template");
  const decidingPick = i % 2 === 0 ? "blog-how-to-choose-developer" : "blog-website-build-timeline";
  add(landing, "landing", decidingPick, "article", "given template (deciding pick, alternated for variety)", true);
});
// Multilingual landing
add(MULTILINGUAL, "landing", "blog-multilingual-website-cost", "article", "given");
add(MULTILINGUAL, "landing", "blog-redesign-traffic-loss", "article", "given");
add(MULTILINGUAL, "landing", "blog-found-via-chatgpt", "article", "given (unusual pairing, honored as instructed)");
// Catalogue with filters
add(CATALOG, "landing", "blog-real-estate-agency-checklist", "article", "given");
add(CATALOG, "landing", "blog-website-no-leads", "article", "given");
// (no manufacturing-relevant article exists — reported as a gap, not linked)
// Online booking
add(ONLINE_BOOKING, "landing", "blog-psychologist-website-checklist", "article", "given");
add(ONLINE_BOOKING, "landing", "blog-website-no-leads", "article", "given");
add(ONLINE_BOOKING, "landing", "blog-beauty-salon-website-cost", "article", "my choice of niche cost article — salons commonly use booking systems", true);
// Platform migration
add(PLATFORM_MIGRATION, "landing", "blog-redesign-traffic-loss", "article", "given");
add(PLATFORM_MIGRATION, "landing", "blog-platform-choice", "article", "given");
add(PLATFORM_MIGRATION, "landing", "blog-slow-website", "article", "given");
// Warsaw geo
add(WARSAW, "landing", "blog-seo-cost", "article", "given");
add(WARSAW, "landing", "blog-how-to-choose-developer", "article", "given");
add(WARSAW, "landing", "blog-auto-repair-website-cost", "article", "given");
// SEO service page
add(SEO_SERVICE, "landing", "blog-seo-cost", "article", "given");
add(SEO_SERVICE, "landing", "blog-not-showing-in-google", "article", "given");
add(SEO_SERVICE, "landing", "blog-website-no-leads", "article", "given");
// AI-ready SEO/GEO page
add(GEO_SERVICE, "landing", "blog-found-via-chatgpt", "article", "given");
add(GEO_SERVICE, "landing", "blog-chatgpt-recommendations", "article", "given (max 1 each way per the ChatGPT-pair rule)");
add(GEO_SERVICE, "landing", "blog-not-showing-in-google", "article", "given");

// ---- 3. Article -> Article (clusters) ----
// Computed against existing relatedArticles/inline edges to avoid duplication.
const CLUSTERS = {
  cost: ["blog-beauty-salon-website-cost", "blog-legal-seo-cost", "blog-agency-website-cost", "blog-developer-website-cost", "blog-psychologist-website-cost", "blog-auto-repair-website-cost", "blog-construction-website-cost", "blog-multilingual-website-cost", "blog-seo-cost"],
  diagnostics: ["blog-website-no-leads", "blog-slow-website", "blog-not-showing-in-google", "blog-redesign-traffic-loss"],
  deciding: ["blog-how-to-choose-developer", "blog-freelancer-vs-agency", "blog-platform-choice", "blog-builder-vs-custom", "blog-website-build-timeline"],
  aiVisibility: ["blog-found-via-chatgpt", "blog-chatgpt-recommendations", "blog-not-showing-in-google", "blog-seo-cost"],
  nicheChecklists: ["blog-psychologist-website-checklist", "blog-real-estate-agency-checklist"],
  multilingualCluster: ["blog-multilingual-website-cost", "blog-redesign-traffic-loss", "blog-platform-choice"],
};

function familyOf(name) { return ARTICLE[name]; }

for (const [clusterName, members] of Object.entries(CLUSTERS)) {
  for (const src of members) {
    const srcEn = familyOf(src)?.en;
    if (!srcEn) continue;
    let picked = 0;
    for (const tgt of members) {
      if (tgt === src) continue;
      if (picked >= 3) break;
      const tgtEn = familyOf(tgt)?.en;
      if (!tgtEn) continue;
      if (hasExistingEdge(srcEn, tgtEn)) continue; // already linked (relatedArticles/inline/etc) — skip, don't duplicate
      add(src, "article", tgt, "article", `cluster:${clusterName}`, false);
      picked++;
    }
  }
}

// ---- 4. Pricing links ----
// Pages that quote figures in body text link once to /pricing.
// Detected by scanning raw contentBlocks for currency symbols.
function docHasPriceFigure(doc) {
  const text = JSON.stringify(doc.contentBlocks || []);
  return /€\s?\d|zł|\$\s?\d|\d\s?€|\d\s?zł/i.test(text);
}
const PRICING_PAGE = { en: "singlepage-pricing" }; // resolved below if it exists under a different id

const allBlogDocsById = Object.fromEntries(blogs.map((b) => [b._id, b]));
const PRICE_QUOTING_ARTICLES = Object.keys(ARTICLE).filter((enId) => {
  const doc = allBlogDocsById[enId];
  return doc && docHasPriceFigure(doc);
});

fs.writeFileSync(path.join(DRAFTS, "_link-map-candidates.json"), JSON.stringify(candidates, null, 2));
fs.writeFileSync(path.join(DRAFTS, "_price-quoting-articles.json"), JSON.stringify(PRICE_QUOTING_ARTICLES, null, 2));

console.log(`Candidates generated: ${candidates.length}`);
console.log(`Price-quoting articles found: ${PRICE_QUOTING_ARTICLES.length}`);
console.log(PRICE_QUOTING_ARTICLES.join("\n"));
