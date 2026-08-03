// scripts/generate-step0-html.cjs
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
  (inboundById[e.targetId] ||= []).push(e);
  (outboundById[e.sourceId] ||= []).push(e);
}

const UTILITY_SLUGS = new Set([
  "about", "o-mnie", "obo-mne", "contacts", "kontakt", "kontakty",
  "pricing", "cennik", "ceny", "privacy-policy", "polityka-prywatnosci", "politika-konfidencialnosti",
]);

function esc(s) { return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

function edgeChips(list, dir) {
  if (!list || !list.length) return `<span class="dim">none</span>`;
  return list.map((e) => {
    const other = dir === "out" ? byId[e.targetId] : byId[e.sourceId];
    const label = other ? other.path : "?";
    return `<span class="chip chip--${e.kind}"><code>${esc(label)}</code><small>${e.kind}</small></span>`;
  }).join(" ");
}

function blockCaps(id) {
  const bp = blockPresence[id];
  if (!bp) return "";
  const flags = [];
  if (bp.textContent) flags.push("textContent");
  if (bp.faqBlock) flags.push("faqBlock");
  if (bp.doubleTextBlock) flags.push("doubleTextBlock");
  if (bp.reviewsFullBlock) flags.push("reviewsFullBlock");
  if (!flags.length) return `<span class="badge badge--critical">none</span>`;
  return flags.map((f) => `<span class="badge badge--ok">${f}</span>`).join(" ");
}

function inboundBadge(n) {
  const cls = n === 0 ? "critical" : n < 3 ? "warn" : "ok";
  return `<span class="badge badge--${cls}">${n}</span>`;
}

const langName = { en: "English", pl: "Polski", ru: "Русский" };

function articleTable(lang) {
  const rows = blogs.filter((b) => b.language === lang).sort((a, z) => a.publishedAt.localeCompare(z.publishedAt));
  return `
  <div class="table-wrap">
  <table>
    <thead><tr><th>Published</th><th>Path</th><th>Title</th><th>Category</th><th>ID</th><th>Existing outbound</th><th>In</th></tr></thead>
    <tbody>
    ${rows.map((b) => `<tr>
      <td class="mono nowrap">${esc(b.publishedAt.slice(0, 10))}</td>
      <td class="mono"><code>${esc(b.slug)}</code></td>
      <td>${esc(b.title)}</td>
      <td>${esc(b.category || "—")}</td>
      <td class="mono dim">${esc(b._id)}</td>
      <td>${edgeChips(outboundById[b._id], "out")}</td>
      <td>${inboundBadge((inboundById[b._id] || []).length)}</td>
    </tr>`).join("\n")}
    </tbody>
  </table>
  </div>`;
}

function landingTable(lang) {
  const rows = singlepages.filter((s) => s.language === lang).sort((a, z) => a.slug.localeCompare(z.slug));
  return `
  <div class="table-wrap">
  <table>
    <thead><tr><th>Path</th><th>Title</th><th>pageType</th><th>Util.</th><th>Link-capable blocks</th><th>ID</th><th>Existing outbound</th><th>In</th></tr></thead>
    <tbody>
    ${rows.map((s) => `<tr>
      <td class="mono"><code>${esc(byId[s._id]?.path || s.slug)}</code></td>
      <td>${esc(s.title)}</td>
      <td><span class="badge badge--neutral">${esc(s.pageType || "—")}</span></td>
      <td>${UTILITY_SLUGS.has(s.slug) ? `<span class="badge badge--neutral">util</span>` : ""}</td>
      <td>${blockCaps(s._id)}</td>
      <td class="mono dim">${esc(s._id)}</td>
      <td>${edgeChips(outboundById[s._id], "out")}</td>
      <td>${inboundBadge((inboundById[s._id] || []).length)}</td>
    </tr>`).join("\n")}
    </tbody>
  </table>
  </div>`;
}

function orphanTable(type) {
  const rows = orphans.filter((o) => o.type === type);
  return `
  <div class="table-wrap">
  <table>
    <thead><tr><th>In</th><th>Path</th><th>Title</th></tr></thead>
    <tbody>
    ${rows.map((o) => `<tr><td>${inboundBadge(o.inbound)}</td><td class="mono"><code>${esc(o.slug)}</code></td><td>${esc(o.title)}</td></tr>`).join("\n")}
    </tbody>
  </table>
  </div>`;
}

const totalEdgesByKind = edges.reduce((a, e) => { a[e.kind] = (a[e.kind] || 0) + 1; return a; }, {});

const html = `<!doctype html>
<title>Internal Linking — Step 0 Inventory</title>
<style>
:root {
  --bg: #f6f7fb;
  --surface: #ffffff;
  --surface-2: #eef0f6;
  --ink: #1b1e27;
  --ink-dim: #5b6172;
  --border: #e1e4ec;
  --accent: #3454c4;
  --accent-soft: #eef1fc;
  --good: #1d7a52;
  --good-soft: #e6f5ee;
  --warn: #9a6208;
  --warn-soft: #fbf0dc;
  --critical: #ab2f2f;
  --critical-soft: #fbe9e9;
  --font-display: "New York", "Iowan Old Style", Charter, Georgia, "Noto Serif", serif;
  --font-body: "Avenir Next", "Segoe UI", system-ui, -apple-system, sans-serif;
  --font-mono: "SF Mono", "Cascadia Code", "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #12141b; --surface: #191c25; --surface-2: #20232e; --ink: #e7e9f1; --ink-dim: #9aa0b8;
    --border: #2a2e3c; --accent: #8598ff; --accent-soft: #232a4a;
    --good: #4ecb96; --good-soft: #16302a; --warn: #e0a53d; --warn-soft: #362a10;
    --critical: #f0857c; --critical-soft: #3a1f20;
  }
}
:root[data-theme="dark"] {
  --bg: #12141b; --surface: #191c25; --surface-2: #20232e; --ink: #e7e9f1; --ink-dim: #9aa0b8;
  --border: #2a2e3c; --accent: #8598ff; --accent-soft: #232a4a;
  --good: #4ecb96; --good-soft: #16302a; --warn: #e0a53d; --warn-soft: #362a10;
  --critical: #f0857c; --critical-soft: #3a1f20;
}
:root[data-theme="light"] {
  --bg: #f6f7fb; --surface: #ffffff; --surface-2: #eef0f6; --ink: #1b1e27; --ink-dim: #5b6172;
  --border: #e1e4ec; --accent: #3454c4; --accent-soft: #eef1fc;
  --good: #1d7a52; --good-soft: #e6f5ee; --warn: #9a6208; --warn-soft: #fbf0dc;
  --critical: #ab2f2f; --critical-soft: #fbe9e9;
}
* { box-sizing: border-box; }
body {
  margin: 0; background: var(--bg); color: var(--ink); font-family: var(--font-body);
  font-size: 15px; line-height: 1.55; -webkit-font-smoothing: antialiased;
}
.layout { display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 0; max-width: 1400px; margin: 0 auto; }
nav.toc {
  position: sticky; top: 0; align-self: start; height: 100vh; overflow-y: auto;
  padding: 28px 16px 28px 24px; border-right: 1px solid var(--border);
}
nav.toc a { display: block; color: var(--ink-dim); text-decoration: none; font-size: 13px; padding: 5px 8px; border-radius: 6px; }
nav.toc a:hover, nav.toc a:focus-visible { background: var(--accent-soft); color: var(--accent); }
nav.toc .toc-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink-dim); margin: 18px 0 6px 8px; }
nav.toc .toc-label:first-child { margin-top: 0; }
main { padding: 40px 48px 80px; min-width: 0; }
h1 {
  font-family: var(--font-display); font-size: 34px; font-weight: 600; margin: 0 0 8px;
  text-wrap: balance; letter-spacing: -0.01em;
}
.subtitle { color: var(--ink-dim); font-size: 15px; margin: 0 0 40px; max-width: 65ch; }
h2 {
  font-family: var(--font-display); font-size: 22px; font-weight: 600; margin: 56px 0 6px;
  padding-top: 20px; border-top: 1px solid var(--border); scroll-margin-top: 20px;
}
h2 .num { color: var(--accent); font-variant-numeric: tabular-nums; margin-right: 10px; }
h3 { font-family: var(--font-body); font-size: 15px; font-weight: 700; margin: 28px 0 10px; scroll-margin-top: 20px; }
p { max-width: 72ch; }
.lede { color: var(--ink-dim); max-width: 72ch; }
code { font-family: var(--font-mono); font-size: 0.88em; background: var(--surface-2); padding: 1px 5px; border-radius: 4px; }
.mono { font-family: var(--font-mono); font-size: 13px; }
.dim { color: var(--ink-dim); }
.nowrap { white-space: nowrap; }

.stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin: 24px 0 8px; }
.stat {
  background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 16px 18px;
}
.stat .n { font-family: var(--font-display); font-size: 28px; font-variant-numeric: tabular-nums; display: block; }
.stat .l { font-size: 12px; color: var(--ink-dim); text-transform: uppercase; letter-spacing: 0.06em; }

.kind-bar { display: flex; gap: 10px; flex-wrap: wrap; margin: 18px 0 32px; }
.kind-pill {
  display: flex; align-items: baseline; gap: 6px; background: var(--surface); border: 1px solid var(--border);
  border-radius: 999px; padding: 6px 14px; font-size: 13px;
}
.kind-pill b { font-variant-numeric: tabular-nums; }

.callout {
  border-left: 3px solid var(--accent); background: var(--accent-soft); border-radius: 0 8px 8px 0;
  padding: 14px 18px; margin: 16px 0; max-width: 78ch;
}
.callout h4 { margin: 0 0 6px; font-size: 14px; }
.callout p { margin: 0; font-size: 14px; }
.callout.warn { border-color: var(--warn); background: var(--warn-soft); }

ul.findings { padding-left: 0; list-style: none; margin: 20px 0; }
ul.findings > li {
  border-left: 3px solid var(--border); padding: 10px 16px; margin-bottom: 10px; max-width: 82ch; font-size: 14px;
}
ul.findings > li.flag { border-color: var(--warn); }
ul.findings > li b { color: var(--accent); }

.badge {
  display: inline-block; font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 999px;
  font-variant-numeric: tabular-nums;
}
.badge--ok { background: var(--good-soft); color: var(--good); }
.badge--warn { background: var(--warn-soft); color: var(--warn); }
.badge--critical { background: var(--critical-soft); color: var(--critical); }
.badge--neutral { background: var(--surface-2); color: var(--ink-dim); }

.chip {
  display: inline-flex; flex-direction: column; gap: 0; background: var(--surface-2); border-radius: 6px;
  padding: 3px 8px; margin: 1px 3px 1px 0; font-size: 11px; line-height: 1.3;
}
.chip code { background: none; padding: 0; font-size: 11px; }
.chip small { color: var(--ink-dim); font-size: 9px; text-transform: uppercase; letter-spacing: 0.04em; }

.table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 10px; margin: 14px 0 30px; }
table { border-collapse: collapse; width: 100%; font-size: 13px; background: var(--surface); }
thead th {
  position: sticky; top: 0; background: var(--surface-2); text-align: left; font-size: 11px;
  text-transform: uppercase; letter-spacing: 0.05em; color: var(--ink-dim); padding: 9px 12px;
  border-bottom: 1px solid var(--border); white-space: nowrap;
}
tbody td { padding: 8px 12px; border-bottom: 1px solid var(--border); vertical-align: top; }
tbody tr:last-child td { border-bottom: none; }
tbody tr:hover { background: var(--surface-2); }

@media (max-width: 900px) {
  .layout { grid-template-columns: 1fr; }
  nav.toc { position: static; height: auto; border-right: none; border-bottom: 1px solid var(--border); }
  main { padding: 28px 20px 60px; }
}
</style>

<div class="layout">
  <nav class="toc">
    <div class="toc-label">Overview</div>
    <a href="#counts">Counts</a>
    <a href="#schema">Link mechanisms</a>
    <a href="#findings">Side-findings</a>
    <a href="#orphans">Orphans</a>
    <div class="toc-label">Articles</div>
    <a href="#articles-en">EN (${blogs.filter(b=>b.language==="en").length})</a>
    <a href="#articles-pl">PL (${blogs.filter(b=>b.language==="pl").length})</a>
    <a href="#articles-ru">RU (${blogs.filter(b=>b.language==="ru").length})</a>
    <div class="toc-label">Landings</div>
    <a href="#landings-en">EN (${singlepages.filter(s=>s.language==="en").length})</a>
    <a href="#landings-pl">PL (${singlepages.filter(s=>s.language==="pl").length})</a>
    <a href="#landings-ru">RU (${singlepages.filter(s=>s.language==="ru").length})</a>
  </nav>
  <main>
    <h1>Site-wide internal linking — Step 0 inventory</h1>
    <p class="subtitle">Live pull from Sanity across every published <code>blog</code>, <code>singlepage</code>, and <code>portfolio</code> document in en / pl / ru. Report only — nothing has been changed. The link map proposal follows once this is reviewed.</p>

    <h2 id="counts"><span class="num">01</span>Counts</h2>
    <div class="stat-grid">
      <div class="stat"><span class="n">${blogs.length}</span><span class="l">Articles</span></div>
      <div class="stat"><span class="n">${singlepages.length}</span><span class="l">Landing pages</span></div>
      <div class="stat"><span class="n">${edges.length}</span><span class="l">Existing link edges</span></div>
      <div class="stat"><span class="n">${orphans.length}</span><span class="l">Orphans (&lt;3 inbound)</span></div>
    </div>
    <div class="kind-bar">
      ${Object.entries(totalEdgesByKind).map(([k, v]) => `<span class="kind-pill"><b>${v}</b> ${esc(k)}</span>`).join("")}
    </div>
    <p class="lede">Landing pages break down as ${singlepages.filter(d=>d.pageType==='page').length} <code>page</code>, ${singlepages.filter(d=>d.pageType==='service').length} <code>service</code>, ${singlepages.filter(d=>d.pageType==='servicesIndex').length} <code>servicesIndex</code> (the hub), and 12 utility pages (about / contact / pricing / privacy × 3 locales).</p>

    <h2 id="schema"><span class="num">02</span>How links are represented in the schema</h2>
    <p>Four distinct mechanisms, confirmed by reading every block schema and its rendering component — not assumed from the schema alone, since several blocks <em>look</em> editable but are hardcoded.</p>
    <ul class="findings">
      <li><b>relatedArticles</b> — reference array on <code>blog</code> only, targets <code>blog | singlepage | portfolio</code>. Already filled (3 entries each) on all 12 new articles — this pass must not duplicate those targets in body text.</li>
      <li><b>serviceOffered</b> — reference array on <code>blog</code> only, targets <code>singlepage</code>. Renders as the "Related Services" sidebar. Studio-filtered to <code>pageType=="service"</code>, not enforced at the data layer.</li>
      <li><b>relatedServicesBlock</b> — dedicated content-block type, <code>singlepage → singlepage</code>. Today's landing→landing mechanism (87 edges, almost all from the 3 services-index hub pages).</li>
      <li><b>Inline PortableText <code>link</code> mark</b> — the only in-body contextual mechanism, and it only exists and renders in four places: <code>textContent.content</code>, <code>faqBlock.faq.items[].answer</code>, <code>doubleTextBlock.leftContent/rightContent.blockContent.content</code>, and <code>reviewsFullBlock.reviews[].text</code> (testimonial copy — usable but an odd place for editorial links, and subject to the homepage-reviews fallback when a page's own <code>reviews[]</code> is empty). Every other block type stores plain strings, not PortableText — no link mechanism exists there regardless of what's typed in.</li>
    </ul>
    <div class="callout warn">
      <h4>Hardcoded blocks — do not target</h4>
      <p><code>benefitsBlock</code>, <code>landingCtaBlock</code>, <code>workProcessBlock</code> (no steps field exists at all), and <code>portfolioBlock</code> (auto-fetches the 4 latest portfolio items) all ignore their Sanity fields entirely, confirmed by direct component inspection. A link inserted there would be silently invisible on the live page.</p>
    </div>
    <p class="lede"><b>Consequence:</b> a landing page can only receive an in-body link if at least one of its content blocks is <code>textContent</code>, <code>faqBlock</code>, <code>doubleTextBlock</code>, or a non-empty <code>reviewsFullBlock</code>. Every landing below is flagged with which of these it actually has — pages marked "none" cannot host an in-body link without a new text section being added first.</p>

    <h2 id="findings"><span class="num">03</span>Side-findings that affect the plan</h2>
    <ul class="findings">
      <li class="flag"><b>A services-index hub already exists and is already in the main nav</b> — one <code>servicesIndex</code> doc per locale (<code>/services</code>, <code>/oferty</code>, <code>/uslugi</code>), confirmed in <code>header.navLinks</code> on all three locales. It already fans out to every service via <code>relatedServicesBlock</code> (25 outbound each — expected for a hub, not a cap violation). This resolves the "missing hub" question directly: there isn't one. <code>/blog</code> and <code>/portfolio</code> index pages exist the same way.</li>
      <li><b>24 landing pages are nested one level under a parent</b> (mostly services-index children, plus a few niche sub-pages). Canonical URL is <code>/{parent}/{slug}</code>, not <code>/{slug}</code> — e.g. <code>/services/seo-optimization-and-strategy</code>. A dynamic redirect in <code>next.config.mjs</code> already 301s the flat form (which is why <code>serviceOffered</code>, which only ever stores the flat slug, still works today). New links in this pass will use the canonical nested path directly to skip the redirect hop. No grandchildren exist — nesting is exactly one level everywhere.</li>
      <li class="flag"><b>Landing pages beyond what the brief's tables list:</b> <code>business-website-development</code>, <code>garage-and-auto-repair-website</code>, <code>web-development-cyprus</code>, <code>seo-for-auto-repair-shop</code>, <code>seo-for-beauty-salons</code>, <code>seo-for-real-estate</code>, <code>seo-for-real-estate-in-cyprus</code>, <code>seo-for-law-firms</code>, <code>website-design-for-models</code>, plus 7 individual <code>/services/*</code> capability pages. All listed in full below rather than silently dropped.</li>
      <li class="flag"><b>Possible extra cannibalisation pairs</b> (found by scanning titles/niches, not a keyword tool — flagging per the "report, don't link" instruction):
        <br>• <code>web-development-cyprus</code> vs <code>web-development-warsaw</code> — both general geo dev pages; only Warsaw is in the article→landing map.
        <br>• <code>seo-for-real-estate</code> vs <code>seo-for-real-estate-in-cyprus</code> — near-duplicate niche SEO pages.
        <br>• <code>garage-and-auto-repair-website</code> — a dedicated auto-repair landing not in the article→landing table at all; the auto-repair-cost article currently maps to Warsaw geo + platform migration instead.
        <br>• <code>seo-for-auto-repair-shop</code> / <code>seo-for-beauty-salons</code> — niche SEO landings overlapping the new diagnostics cluster, not in the landing→article map.
      </li>
    </ul>

    <h2 id="orphans"><span class="num">04</span>Orphans — fewer than 3 inbound links</h2>
    <p class="lede">${orphans.length} total: ${orphans.filter(o=>o.type==="blog").length} articles, ${orphans.filter(o=>o.type==="singlepage").length} landings. Almost entirely the expected shape before this pass runs — the 12 new articles (only their relatedArticles/serviceOffered inbound so far) and pre-existing niche landings nothing has linked to yet.</p>
    <h3>Articles (${orphans.filter(o=>o.type==="blog").length})</h3>
    ${orphanTable("blog")}
    <h3>Landing pages (${orphans.filter(o=>o.type==="singlepage").length})</h3>
    ${orphanTable("singlepage")}

    <h2 id="articles-en"><span class="num">05</span>Every published article</h2>
    <p class="lede">Item 1 of Step 0. One table per locale, ordered by publish date.</p>
    <h3>English (${blogs.filter(b=>b.language==="en").length})</h3>
    ${articleTable("en")}
    <h3 id="articles-pl">Polski (${blogs.filter(b=>b.language==="pl").length})</h3>
    ${articleTable("pl")}
    <h3 id="articles-ru">Русский (${blogs.filter(b=>b.language==="ru").length})</h3>
    ${articleTable("ru")}

    <h2 id="landings-en"><span class="num">06</span>Every landing page</h2>
    <p class="lede">Item 2 of Step 0. Includes <code>page</code>, <code>service</code>, and <code>servicesIndex</code> types; utility pages are flagged.</p>
    <h3>English (${singlepages.filter(s=>s.language==="en").length})</h3>
    ${landingTable("en")}
    <h3 id="landings-pl">Polski (${singlepages.filter(s=>s.language==="pl").length})</h3>
    ${landingTable("pl")}
    <h3 id="landings-ru">Русский (${singlepages.filter(s=>s.language==="ru").length})</h3>
    ${landingTable("ru")}

  </main>
</div>
`;

fs.writeFileSync(path.join(DRAFTS, "step0-report.html"), html);
console.log(`HTML report written: ${html.length} chars`);
