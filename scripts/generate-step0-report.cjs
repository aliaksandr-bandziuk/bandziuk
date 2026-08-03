// scripts/generate-step0-report.cjs
const fs = require("fs");
const path = require("path");
const DRAFTS = path.resolve(__dirname, "../drafts");

const blogs = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_inventory-blogs.json"), "utf8"));
const singlepages = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_inventory-singlepages.json"), "utf8"));
const byId = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-urlmap.json"), "utf8"));
const edges = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-edges.json"), "utf8"));
const orphans = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-orphans.json"), "utf8"));
const blockPresence = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-blockpresence.json"), "utf8"));

const inboundById = {};
const outboundById = {};
for (const e of edges) {
  inboundById[e.targetId] = inboundById[e.targetId] || [];
  inboundById[e.targetId].push(e);
  outboundById[e.sourceId] = outboundById[e.sourceId] || [];
  outboundById[e.sourceId].push(e);
}

const UTILITY_SLUGS = new Set([
  "about", "o-mnie", "obo-mne",
  "contacts", "kontakt", "kontakty",
  "pricing", "cennik", "ceny",
  "privacy-policy", "polityka-prywatnosci", "politika-konfidencialnosti",
]);

function fmtEdgeList(list, label) {
  if (!list || !list.length) return "_none_";
  return list.map((e) => {
    const other = label === "out" ? byId[e.targetId] : byId[e.sourceId];
    return `${other ? other.path : "?"} (${e.kind})`;
  }).join("; ");
}

function blockCapabilities(id) {
  const bp = blockPresence[id];
  if (!bp) return "";
  const flags = [];
  if (bp.textContent) flags.push("textContent");
  if (bp.faqBlock) flags.push("faqBlock");
  if (bp.doubleTextBlock) flags.push("doubleTextBlock");
  if (bp.reviewsFullBlock) flags.push("reviewsFullBlock");
  return flags.length ? flags.join(", ") : "**NONE — no safe inline-link block**";
}

let md = `# Site-Wide Internal Linking — Step 0 Inventory

Generated from a live Sanity query. Covers every published \`blog\`, \`singlepage\`, and \`portfolio\` document across en/pl/ru.

## Counts

- Blog articles: **${blogs.length}** (${blogs.filter(b=>b.language==='en').length} en / ${blogs.filter(b=>b.language==='pl').length} pl / ${blogs.filter(b=>b.language==='ru').length} ru)
- Landing pages (\`singlepage\`): **${singlepages.length}** (${singlepages.filter(b=>b.language==='en').length} en / ${singlepages.filter(b=>b.language==='pl').length} pl / ${singlepages.filter(b=>b.language==='ru').length} ru)
  - pageType \`page\`: ${singlepages.filter(d=>d.pageType==='page').length}
  - pageType \`service\`: ${singlepages.filter(d=>d.pageType==='service').length}
  - pageType \`servicesIndex\`: ${singlepages.filter(d=>d.pageType==='servicesIndex').length} (the hub — see note below)
  - utility pages (about/contact/pricing/privacy): ${singlepages.filter(d=>UTILITY_SLUGS.has(d.slug)).length}
- Existing internal link edges found: **${edges.length}**
  - \`relatedArticles\` (reference array, blog only): ${edges.filter(e=>e.kind==='relatedArticles').length}
  - \`serviceOffered\` (reference array, blog→singlepage): ${edges.filter(e=>e.kind==='serviceOffered').length}
  - \`relatedServicesBlock\` (dedicated block, singlepage→singlepage): ${edges.filter(e=>e.kind==='relatedServicesBlock').length}
  - inline body links (PortableText \`link\` mark): ${edges.filter(e=>e.kind==='inline-body').length}
- Orphans (fewer than 3 inbound edges of any kind above): **${orphans.length}** — ${orphans.filter(o=>o.type==='blog').length} articles, ${orphans.filter(o=>o.type==='singlepage').length} landings

## Item 5 — How links are represented in the schema

Four distinct mechanisms, confirmed by reading every block schema and its rendering component (not assumed from the schema alone — several blocks *look* editable but are hardcoded, see below):

1. **\`relatedArticles\`** — reference array on \`blog\` only, target types \`blog | singlepage | portfolio\`. This is the field already filled (3 entries each) on all articles from the 12-article project — **do not duplicate these targets in body text**, per your instruction.
2. **\`serviceOffered\`** — reference array on \`blog\` only, target type \`singlepage\` (Studio-filtered to \`pageType=="service"\`, not enforced at the data layer). Renders as the "Related Services" sidebar on article pages.
3. **\`relatedServicesBlock\`** — a dedicated content-block type (\`singlepage.contentBlocks\`), reference array to \`singlepage\`. This is the mechanism for landing→landing links today (87 existing edges, almost entirely from the 3 services-index hub pages fanning out to every service).
4. **Inline PortableText \`link\` mark** (\`{_type: "link", href: "..."}\`) — the only in-body contextual mechanism. It is **only available and actually rendered** in four places, all confirmed via the \`RichText\` shared serializer (which correctly turns the mark into a real \`<a href>\` everywhere it's used):
   - \`textContent.content\`
   - \`faqBlock.faq.items[].answer\` (blog uses a bare \`accordionBlock\`, singlepage wraps it in \`faqBlock\` — same underlying field)
   - \`doubleTextBlock.leftContent/rightContent.blockContent.content\`
   - \`reviewsFullBlock.reviews[].text\` (testimonial copy — usable but semantically awkward for editorial links, and subject to the homepage-reviews-fallback behavior CLAUDE.md documents when a page's own \`reviews[]\` is empty)

   Every other block type in \`singlepage.contentBlocks\` (\`locationBlock\`, \`imageFullBlock\`, \`formMinimalBlock\`, \`formFullBlock\`, \`gridBlock\`, \`animationBulletsBlock\`, \`tableBlock\`, \`serviceFeaturesBlock\`, \`stepsBlock\`, \`contactMethodsBlock\`) stores its prose as a **plain string/text field**, not PortableText — there is no link-mark mechanism available there at all, regardless of what gets typed into it.

   **Four block types are additionally hardcoded and ignore their Sanity fields entirely** (confirmed again by direct component inspection, matching CLAUDE.md's existing note): \`benefitsBlock\`, \`landingCtaBlock\`, \`workProcessBlock\` (no steps field exists in the schema at all), \`portfolioBlock\` (auto-fetches the 4 latest portfolio items regardless of its own \`portfolioItems[]\` field). **Inserting a link into any of these would be silently invisible on the live page.**

**Practical consequence for the plan:** a landing page can only receive an in-body contextual link if at least one of its \`contentBlocks\` is \`textContent\`, \`faqBlock\`, \`doubleTextBlock\`, or a non-empty \`reviewsFullBlock\`. I've flagged every landing page below with which of these it actually has — several have **none**, meaning no in-body link is possible on them without you first adding a text section (I will not invent one to force a link, per your instruction).

## Side-findings that affect the plan (not asked for directly, but load-bearing)

- **A services-index hub already exists and is already in the main nav** — \`pageType: "servicesIndex"\`, one doc per locale (\`/services\`, \`/oferty\`, \`/uslugi\`), confirmed reachable from \`header.navLinks\` on all three locales ("Services"/"Oferty"/"Услуги"). It already fans out to every service page via \`relatedServicesBlock\` (25 outbound links each — that's expected for a hub, not a cap violation). **This resolves your Step 5 question: there is no missing hub.** The blog index (\`/blog\`) and portfolio index (\`/portfolio\`) also already exist as routes and list everything, so articles aren't structurally orphaned from a hub either way.
- **24 landing pages are nested under a parent** (mostly children of the services-index, plus a few niche sub-pages like the beauty-salon page under the beauty-professionals category page). Their canonical URL is \`/{parentSlug}/{slug}\`, not \`/{slug}\` — e.g. \`/services/seo-optimization-and-strategy\`, not \`/seo-optimization-and-strategy\`. A dynamic redirect in \`next.config.mjs\` (deliberate, documented in-file) 301s the flat form to the nested one, which is why the existing \`serviceOffered\` field (which only ever stores the flat slug) still works today — but for every **new** link I write in this pass I'll use the canonical nested path directly, to avoid adding an unnecessary redirect hop. No grandchildren exist (nesting is exactly one level everywhere right now), so this is safe and simple.
- **Landing pages beyond what your brief's tables list.** The live inventory turned up several niche/geo/SEO landing pages not mentioned in either mapping table in your prompt: \`business-website-development\`, \`garage-and-auto-repair-website\`, \`web-development-cyprus\`, \`seo-for-auto-repair-shop\`, \`seo-for-beauty-salons\`, \`seo-for-real-estate\`, \`seo-for-real-estate-in-cyprus\`, \`seo-for-law-firms\`, \`website-design-for-models\`, plus the 7 individual \`/services/*\` capability pages (\`website-development\`, \`landing-page-development\`, \`cms-integration-and-api-work\`, \`website-performance-and-code-audit\`, \`seo-audit\`, plus the 2 already in your tables). I've listed all of them below rather than silently dropping them from the plan.
- **Possible additional cannibalisation pairs worth a decision before I plan around them** (found by scanning titles/niches, not from any query-overlap tool):
  - \`web-development-cyprus\` vs \`web-development-warsaw\` — both general "web development in [geo]" pages; your brief's article→landing map only names the Warsaw one.
  - \`seo-for-real-estate\` vs \`seo-for-real-estate-in-cyprus\` — near-duplicate SEO niche pages, one general one Cyprus-specific.
  - \`garage-and-auto-repair-website\` vs the auto-repair-shop-cost article's mapped targets (Warsaw geo + platform migration) — there's a dedicated auto-repair **landing page** that isn't in your article→landing table at all; worth deciding whether the auto-repair cost article should link to it instead of/in addition to the two capability pages.
  - \`seo-for-auto-repair-shop\` / \`seo-for-beauty-salons\` — niche-specific SEO landings that overlap thematically with the new diagnostics cluster (no leads / slow / not in Google) but aren't in your landing→article map.
  I have **not** linked any of these to each other or proposed targets for them — flagging per your "report instead of linking" instruction for cannibalisation risk.

## Orphans (fewer than 3 inbound links)

${orphans.length} total. Nearly all of them are exactly what you'd expect before this pass runs: the 12 new articles (each currently has only its 3 \`relatedArticles\` + serviceOffered inbound, nothing pointing back in yet) and the pre-existing niche landing pages that were never linked from article bodies. Full list:

### Articles (${orphans.filter(o=>o.type==='blog').length})

| Inbound | Path | Title |
|---|---|---|
${orphans.filter(o=>o.type==='blog').map(o => `| ${o.inbound} | \`${o.slug}\` | ${o.title} |`).join("\n")}

### Landing pages (${orphans.filter(o=>o.type==='singlepage').length})

| Inbound | Path | Title |
|---|---|---|
${orphans.filter(o=>o.type==='singlepage').map(o => `| ${o.inbound} | \`${o.slug}\` | ${o.title} |`).join("\n")}

## Item 1 — Every published article

`;

for (const lang of ["en", "pl", "ru"]) {
  md += `\n### ${lang.toUpperCase()} (${blogs.filter(b=>b.language===lang).length})\n\n`;
  md += `| ID | Path | Title | Published | Category | Existing outbound | Inbound |\n|---|---|---|---|---|---|---|\n`;
  for (const b of blogs.filter(x => x.language === lang).sort((a,z) => a.publishedAt.localeCompare(z.publishedAt))) {
    const out = fmtEdgeList(outboundById[b._id], "out");
    const inCount = (inboundById[b._id] || []).length;
    md += `| \`${b._id}\` | \`${b.slug}\` | ${b.title} | ${b.publishedAt.slice(0,10)} | ${b.category || "—"} | ${out} | ${inCount} |\n`;
  }
}

md += `\n## Item 2 — Every landing page\n\nIncludes \`page\`, \`service\`, and \`servicesIndex\` pageTypes. Utility pages (about/contact/pricing/privacy) are marked. "Link-capable blocks" lists which of the four safe in-body-link block types the page actually contains — pages showing **NONE** cannot receive an in-body link without a new text section being added first.\n`;

for (const lang of ["en", "pl", "ru"]) {
  md += `\n### ${lang.toUpperCase()} (${singlepages.filter(b=>b.language===lang).length})\n\n`;
  md += `| ID | Path | Title | pageType | Utility | Link-capable blocks | Existing outbound | Inbound |\n|---|---|---|---|---|---|---|---|\n`;
  for (const s of singlepages.filter(x => x.language === lang).sort((a,z) => a.slug.localeCompare(z.slug))) {
    const out = fmtEdgeList(outboundById[s._id], "out");
    const inCount = (inboundById[s._id] || []).length;
    const isUtil = UTILITY_SLUGS.has(s.slug) ? "yes" : "";
    md += `| \`${s._id}\` | \`${byId[s._id]?.path || s.slug}\` | ${s.title} | ${s.pageType || "—"} | ${isUtil} | ${blockCapabilities(s._id)} | ${out} | ${inCount} |\n`;
  }
}

fs.writeFileSync(path.join(DRAFTS, "step0-report.md"), md);
console.log(`Report written: ${md.length} chars, ${md.split("\n").length} lines`);
