// scripts/validate-link-map-proposal.cjs
// Expands each candidate to 3 locales and validates against real constraints.
const fs = require("fs");
const path = require("path");
const DRAFTS = path.resolve(__dirname, "../drafts");

const byId = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-urlmap.json"), "utf8"));
const edges = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-edges.json"), "utf8"));
const blockPresence = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-blockpresence.json"), "utf8"));
const landingRegistry = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_landing-registry.json"), "utf8"));
const candidates = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-map-candidates.json"), "utf8"));
const pricingRegistry = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_pricing-registry.json"), "utf8"));

// Rebuild the same family registries used in the candidate builder
const ARTICLE_BASE = [
  "blog-psychologist-website-checklist", "blog-auto-repair-website-cost", "blog-construction-website-cost",
  "blog-how-to-choose-developer", "blog-freelancer-vs-agency", "blog-platform-choice", "blog-website-no-leads",
  "blog-slow-website", "blog-not-showing-in-google", "blog-website-build-timeline", "blog-multilingual-website-cost",
  "blog-chatgpt-recommendations", "blog-beauty-salon-website-cost", "blog-legal-seo-cost", "blog-agency-website-cost",
  "blog-developer-website-cost", "blog-psychologist-website-cost", "blog-real-estate-agency-checklist",
  "blog-redesign-traffic-loss", "blog-builder-vs-custom", "blog-seo-cost", "blog-found-via-chatgpt",
];
const FAMILY = {};
for (const enId of ARTICLE_BASE) FAMILY[enId] = { en: enId, pl: `${enId}.pl`, ru: `${enId}.ru` };
FAMILY["53f4a797-8b17-4427-9b13-74b8c4db71e0"] = { en: "53f4a797-8b17-4427-9b13-74b8c4db71e0", pl: "d7c4dc47-ce4c-4324-b334-46300222b521", ru: "d7738e6f-7b91-4e01-9f6a-0fea502450b6" };
Object.assign(FAMILY, landingRegistry);
FAMILY["42a469a6-28f3-4015-8b88-414c8eb3d4fa"] = { en: "42a469a6-28f3-4015-8b88-414c8eb3d4fa", pl: "77c5f5df-a6f3-49ca-8f42-f1439e3490c6", ru: "6a81eab0-6993-41a6-adc3-d9047a3b35a0" };
FAMILY["831dc620-2863-4d55-baa0-aa874a7374ac"] = { en: "831dc620-2863-4d55-baa0-aa874a7374ac", pl: "3a759a28-4135-4731-a318-cffee1b512f0", ru: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71" };
FAMILY["PRICING_PAGE"] = pricingRegistry.PRICING_PAGE;

// Prohibited pairs (EN family keys)
const PROHIBITED = [
  ["singlepage-veterinary-clinic", "singlepage-dental-clinic-website"],
  ["singlepage-fitness-studio", "405bd22d-5aee-45a3-8f9b-108821d9006a"],
  ["singlepage-fitness-studio", "dab61d1a-28d8-4a10-a2c4-de17399cdbe7"],
  ["singlepage-fitness-studio", "5869ba72-348b-498e-b419-861e52ccb6ef"],
  ["singlepage-logistics-company", "singlepage-recruitment-agency"],
];
function isProhibited(a, b) { return PROHIBITED.some(([x, y]) => (x === a && y === b) || (x === b && y === a)); }

// Two dedupe universes, per the brief's own distinction:
// - article<->article candidates must not duplicate ANY existing edge, including relatedArticles
//   (the brief explicitly says don't re-link what relatedArticles already covers).
// - article<->landing candidates only duplicate if an inline-body link already exists to that
//   target; an existing serviceOffered/relatedArticles-type reference does NOT block a new
//   in-body contextual link — the brief's own article->landing table matches what's already in
//   serviceOffered for the 12 new articles, so it clearly intends body links to reinforce those,
//   not skip them.
const allEdgeSet = new Set(edges.map((e) => `${e.sourceId}>${e.targetId}`));
const inlineOnlyEdgeSet = new Set(edges.filter((e) => e.kind === "inline-body" || e.kind === "relatedServicesBlock").map((e) => `${e.sourceId}>${e.targetId}`));
function hasExistingEdge(s, t, candidateKindPair) {
  if (candidateKindPair === "article-article") return allEdgeSet.has(`${s}>${t}`);
  return inlineOnlyEdgeSet.has(`${s}>${t}`);
}

// Outbound cap counts existing inline-body + relatedServicesBlock + serviceOffered (excludes relatedArticles + nav)
const existingCapCount = {};
for (const e of edges) {
  if (e.kind === "relatedArticles") continue;
  existingCapCount[e.sourceId] = (existingCapCount[e.sourceId] || 0) + 1;
}

function hasSafeBlock(id) {
  const bp = blockPresence[id];
  if (!bp) return false;
  return bp.textContent || bp.faqBlock || bp.doubleTextBlock || bp.reviewsFullBlock;
}

const LANGS = ["en", "pl", "ru"];
const runningCap = { ...existingCapCount };
const proposedPairsSeen = new Set(); // sourceId>targetId within this new proposal, dedupe

const results = [];

for (const c of candidates) {
  const srcFamily = FAMILY[c.sourceFamily];
  const tgtFamily = FAMILY[c.targetFamily];
  if (!srcFamily || !tgtFamily) {
    results.push({ ...c, lang: "?", sourceId: c.sourceFamily, targetId: c.targetFamily, status: "ERROR", reason: "unresolved family id" });
    continue;
  }
  for (const lang of LANGS) {
    const sourceId = srcFamily[lang];
    const targetId = tgtFamily[lang];
    if (!sourceId || !targetId) {
      results.push({ ...c, lang, sourceId: sourceId || "?", targetId: targetId || "?", status: "SKIPPED", reason: "missing locale variant" });
      continue;
    }
    if (sourceId === targetId) {
      results.push({ ...c, lang, sourceId, targetId, status: "SKIPPED", reason: "self-link" });
      continue;
    }
    if (isProhibited(c.sourceFamily, c.targetFamily) || isProhibited(c.targetFamily, c.sourceFamily)) {
      results.push({ ...c, lang, sourceId, targetId, status: "SKIPPED", reason: "prohibited pair" });
      continue;
    }
    const kindPair = `${c.sourceType}-${c.targetType}`;
    if (hasExistingEdge(sourceId, targetId, kindPair)) {
      results.push({ ...c, lang, sourceId, targetId, status: "SKIPPED", reason: "duplicates an existing edge" });
      continue;
    }
    const pairKey = `${sourceId}>${targetId}`;
    if (proposedPairsSeen.has(pairKey)) {
      results.push({ ...c, lang, sourceId, targetId, status: "SKIPPED", reason: "duplicate within this proposal" });
      continue;
    }
    if (c.targetType === "landing" && !hasSafeBlock(targetId) && c.targetFamily !== "PRICING_PAGE") {
      results.push({ ...c, lang, sourceId, targetId, status: "SKIPPED", reason: "target landing has no safe inline-link block" });
      continue;
    }
    if (c.sourceType === "landing" && !hasSafeBlock(sourceId)) {
      results.push({ ...c, lang, sourceId, targetId, status: "SKIPPED", reason: "source landing has no safe inline-link block" });
      continue;
    }
    const currentCap = runningCap[sourceId] || 0;
    if (currentCap >= 8) {
      results.push({ ...c, lang, sourceId, targetId, status: "SKIPPED", reason: `source would exceed 8-link cap (currently ${currentCap})` });
      continue;
    }
    // PASSED — accept
    runningCap[sourceId] = currentCap + 1;
    proposedPairsSeen.add(pairKey);
    results.push({ ...c, lang, sourceId, targetId, status: "PROPOSED", reason: "" });
  }
}

fs.writeFileSync(path.join(DRAFTS, "_link-map-validated.json"), JSON.stringify(results, null, 2));

const byStatus = results.reduce((a, r) => { a[r.status] = (a[r.status] || 0) + 1; return a; }, {});
console.log("=== VALIDATION SUMMARY ===");
console.log(JSON.stringify(byStatus, null, 2));
const skipReasons = results.filter((r) => r.status === "SKIPPED").reduce((a, r) => { a[r.reason] = (a[r.reason] || 0) + 1; return a; }, {});
console.log("\nSkip reasons:");
console.log(JSON.stringify(skipReasons, null, 2));
