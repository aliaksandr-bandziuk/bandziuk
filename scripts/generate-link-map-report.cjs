// scripts/generate-link-map-report.cjs
const fs = require("fs");
const path = require("path");
const DRAFTS = path.resolve(__dirname, "../drafts");

const byId = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-graph-urlmap.json"), "utf8"));
const validated = JSON.parse(fs.readFileSync(path.join(DRAFTS, "_link-map-validated.json"), "utf8"));

function esc(s) { return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function pathOf(id) { return byId[id] ? byId[id].path : id; }

// Group by (sourceFamily, targetFamily, note) -> {en,pl,ru statuses}
const grouped = {};
for (const r of validated) {
  const key = `${r.sourceFamily}|||${r.targetFamily}|||${r.note}|||${r.sourceType}|||${r.targetType}|||${r.myChoice}`;
  grouped[key] = grouped[key] || { sourceFamily: r.sourceFamily, targetFamily: r.targetFamily, note: r.note, sourceType: r.sourceType, targetType: r.targetType, myChoice: r.myChoice, byLang: {} };
  grouped[key].byLang[r.lang] = { status: r.status, reason: r.reason, sourceId: r.sourceId, targetId: r.targetId };
}
const rows = Object.values(grouped);

function statusBadge(entry) {
  if (!entry) return `<span class="badge badge--neutral">—</span>`;
  if (entry.status === "PROPOSED") return `<span class="badge badge--ok">✓</span>`;
  return `<span class="badge badge--critical" title="${esc(entry.reason)}">skip</span>`;
}

function sectionRows(filterFn) {
  return rows.filter(filterFn).map((r) => {
    const anyProposed = ["en", "pl", "ru"].some((l) => r.byLang[l]?.status === "PROPOSED");
    if (!anyProposed) return ""; // fully-skipped rows shown in a separate "fully skipped" appendix
    const srcPath = pathOf(r.byLang.en?.sourceId || r.sourceFamily);
    const tgtPath = pathOf(r.byLang.en?.targetId || r.targetFamily);
    return `<tr>
      <td class="mono"><code>${esc(srcPath)}</code></td>
      <td class="mono"><code>${esc(tgtPath)}</code></td>
      <td>${r.myChoice ? `<span class="badge badge--warn">my choice</span>` : ""} ${esc(r.note)}</td>
      <td>${statusBadge(r.byLang.en)}</td>
      <td>${statusBadge(r.byLang.pl)}</td>
      <td>${statusBadge(r.byLang.ru)}</td>
    </tr>`;
  }).join("\n");
}

function fullySkippedAppendix(filterFn) {
  return rows.filter(filterFn).filter((r) => !["en", "pl", "ru"].some((l) => r.byLang[l]?.status === "PROPOSED"))
    .map((r) => `<tr>
      <td class="mono"><code>${esc(pathOf(r.sourceFamily))}</code></td>
      <td class="mono"><code>${esc(pathOf(r.targetFamily))}</code></td>
      <td>${esc(r.note)}</td>
      <td class="dim">${esc(r.byLang.en?.reason || r.byLang.pl?.reason || r.byLang.ru?.reason || "")}</td>
    </tr>`).join("\n");
}

const totalProposed = validated.filter((r) => r.status === "PROPOSED").length;
const totalSkipped = validated.filter((r) => r.status === "SKIPPED").length;
const myChoiceCount = rows.filter((r) => r.myChoice && ["en", "pl", "ru"].some((l) => r.byLang[l]?.status === "PROPOSED")).length;

const html = `<!doctype html>
<title>Internal Linking — Link Map Proposal</title>
<style>
:root {
  --bg: #f6f7fb; --surface: #ffffff; --surface-2: #eef0f6; --ink: #1b1e27; --ink-dim: #5b6172;
  --border: #e1e4ec; --accent: #3454c4; --accent-soft: #eef1fc;
  --good: #1d7a52; --good-soft: #e6f5ee; --warn: #9a6208; --warn-soft: #fbf0dc;
  --critical: #ab2f2f; --critical-soft: #fbe9e9;
  --font-display: "New York", "Iowan Old Style", Charter, Georgia, "Noto Serif", serif;
  --font-body: "Avenir Next", "Segoe UI", system-ui, -apple-system, sans-serif;
  --font-mono: "SF Mono", "Cascadia Code", "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace;
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #12141b; --surface: #191c25; --surface-2: #20232e; --ink: #e7e9f1; --ink-dim: #9aa0b8;
    --border: #2a2e3c; --accent: #8598ff; --accent-soft: #232a4a;
    --good: #4ecb96; --good-soft: #16302a; --warn: #e0a53d; --warn-soft: #362a10;
    --critical: #f0857c; --critical-soft: #3a1f20; }
}
:root[data-theme="dark"] { --bg: #12141b; --surface: #191c25; --surface-2: #20232e; --ink: #e7e9f1; --ink-dim: #9aa0b8;
  --border: #2a2e3c; --accent: #8598ff; --accent-soft: #232a4a; --good: #4ecb96; --good-soft: #16302a;
  --warn: #e0a53d; --warn-soft: #362a10; --critical: #f0857c; --critical-soft: #3a1f20; }
:root[data-theme="light"] { --bg: #f6f7fb; --surface: #ffffff; --surface-2: #eef0f6; --ink: #1b1e27; --ink-dim: #5b6172;
  --border: #e1e4ec; --accent: #3454c4; --accent-soft: #eef1fc; --good: #1d7a52; --good-soft: #e6f5ee;
  --warn: #9a6208; --warn-soft: #fbf0dc; --critical: #ab2f2f; --critical-soft: #fbe9e9; }
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); font-family: var(--font-body); font-size: 15px; line-height: 1.55; }
main { max-width: 1200px; margin: 0 auto; padding: 40px 48px 100px; }
h1 { font-family: var(--font-display); font-size: 34px; font-weight: 600; margin: 0 0 8px; text-wrap: balance; }
.subtitle { color: var(--ink-dim); font-size: 15px; margin: 0 0 32px; max-width: 70ch; }
h2 { font-family: var(--font-display); font-size: 21px; font-weight: 600; margin: 48px 0 6px; padding-top: 18px; border-top: 1px solid var(--border); }
h3 { font-size: 14px; font-weight: 700; margin: 22px 0 8px; color: var(--ink-dim); text-transform: uppercase; letter-spacing: 0.04em; }
p { max-width: 72ch; color: var(--ink-dim); }
code { font-family: var(--font-mono); font-size: 0.85em; background: var(--surface-2); padding: 1px 5px; border-radius: 4px; }
.mono { font-family: var(--font-mono); font-size: 13px; }
.dim { color: var(--ink-dim); }
.stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin: 20px 0; }
.stat { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 14px 18px; }
.stat .n { font-family: var(--font-display); font-size: 26px; font-variant-numeric: tabular-nums; display: block; }
.stat .l { font-size: 11px; color: var(--ink-dim); text-transform: uppercase; letter-spacing: 0.05em; }
.badge { display: inline-block; font-size: 11px; font-weight: 700; padding: 2px 9px; border-radius: 999px; }
.badge--ok { background: var(--good-soft); color: var(--good); }
.badge--warn { background: var(--warn-soft); color: var(--warn); }
.badge--critical { background: var(--critical-soft); color: var(--critical); cursor: help; }
.badge--neutral { background: var(--surface-2); color: var(--ink-dim); }
.table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 10px; margin: 12px 0 28px; }
table { border-collapse: collapse; width: 100%; font-size: 13px; background: var(--surface); }
thead th { position: sticky; top: 0; background: var(--surface-2); text-align: left; font-size: 11px; text-transform: uppercase;
  letter-spacing: 0.05em; color: var(--ink-dim); padding: 9px 12px; border-bottom: 1px solid var(--border); white-space: nowrap; }
tbody td { padding: 8px 12px; border-bottom: 1px solid var(--border); vertical-align: top; }
tbody tr:last-child td { border-bottom: none; }
tbody tr:hover { background: var(--surface-2); }
.callout { border-left: 3px solid var(--accent); background: var(--accent-soft); border-radius: 0 8px 8px 0; padding: 14px 18px; margin: 16px 0; max-width: 78ch; }
.callout p { margin: 0; color: var(--ink); font-size: 14px; }
</style>
<main>
  <h1>Internal linking — proposed link map</h1>
  <p class="subtitle">Every candidate cross-checked against real data: existing edges (no duplicates), landing block-capability, the 8-link cap, and the prohibited-pairs list. Rows show one edge per locale-family; ✓ means it will be applied on that locale, "skip" means a real constraint blocked it there (hover for why). Nothing has been written — this is the proposal, awaiting approval.</p>

  <div class="stat-grid">
    <div class="stat"><span class="n">${totalProposed}</span><span class="l">Edges to apply (×3 locales)</span></div>
    <div class="stat"><span class="n">${totalSkipped}</span><span class="l">Blocked by a real constraint</span></div>
    <div class="stat"><span class="n">${myChoiceCount}</span><span class="l">My interpretive choices — flagged</span></div>
  </div>

  <div class="callout"><p><b>Rows marked "my choice"</b> are places the brief's template didn't specify a concrete target (e.g. which "adjacent capability" landing, which niche cost article to pair with online-booking) — I picked the most contextually sensible option and flagged it. Override any of these before I apply the pass.</p></div>

  <h2>1 — Article → Landing (commercial direction)</h2>
  <div class="table-wrap"><table>
    <thead><tr><th>Article</th><th>Landing</th><th>Note</th><th>EN</th><th>PL</th><th>RU</th></tr></thead>
    <tbody>${sectionRows((r) => r.sourceType === "article" && r.targetType === "landing" && r.targetFamily !== "PRICING_PAGE" && r.note !== "given (unusual pairing, honored as instructed)" && !r.note.startsWith("cluster:"))}</tbody>
  </table></div>

  <h2>2 — Landing → Article (supporting direction)</h2>
  <div class="table-wrap"><table>
    <thead><tr><th>Landing</th><th>Article</th><th>Note</th><th>EN</th><th>PL</th><th>RU</th></tr></thead>
    <tbody>${sectionRows((r) => r.sourceType === "landing" && r.targetType === "article")}</tbody>
  </table></div>

  <h2>3 — Article → Article (topical clusters)</h2>
  <p>Generated per cluster membership, automatically skipping any pair already linked via <code>relatedArticles</code> or an earlier phase's inline link — that's most of the Diagnostics and Deciding clusters, since those were largely wired up as <code>relatedArticles</code> when the 12 articles were created. What's left below is genuinely new.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>From</th><th>To</th><th>Cluster</th><th>EN</th><th>PL</th><th>RU</th></tr></thead>
    <tbody>${sectionRows((r) => r.note.startsWith("cluster:"))}</tbody>
  </table></div>

  <h2>4 — Pricing links</h2>
  <p>Landing pages already all link to <code>/pricing</code> from an earlier phase (60 existing edges — nothing to add there). What's missing: 18 articles that quote price figures in body text but don't yet link to <code>/pricing</code>.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Article</th><th>Note</th><th>EN</th><th>PL</th><th>RU</th></tr></thead>
    <tbody>${rows.filter((r) => r.targetFamily === "PRICING_PAGE").map((r) => {
      const anyProposed = ["en", "pl", "ru"].some((l) => r.byLang[l]?.status === "PROPOSED");
      if (!anyProposed) return "";
      return `<tr><td class="mono"><code>${esc(pathOf(r.byLang.en?.sourceId || r.sourceFamily))}</code></td><td>${esc(r.note)}</td><td>${statusBadge(r.byLang.en)}</td><td>${statusBadge(r.byLang.pl)}</td><td>${statusBadge(r.byLang.ru)}</td></tr>`;
    }).join("\n")}</tbody>
  </table></div>

  <h2>Unusual / flagged pairing — honored as instructed</h2>
  <p>The brief explicitly pairs the multilingual landing with the ChatGPT-discovery article. It's an unusual fit — I'll only apply it where a sentence in the multilingual page's body genuinely supports the mention (e.g. discussing how buyers in another market actually find you); otherwise I'll skip and report it per the "don't force a sentence" rule.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Landing</th><th>Article</th><th>EN</th><th>PL</th><th>RU</th></tr></thead>
    <tbody>${sectionRows((r) => r.note === "given (unusual pairing, honored as instructed)")}</tbody>
  </table></div>

  <h2>Fully blocked — nothing proposed on any locale</h2>
  <p>Candidates where every locale hit a real constraint (usually: the source is already at its 8-link cap, or the exact edge already exists). Listed so nothing silently disappears from the plan.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Source</th><th>Target</th><th>Note</th><th>Reason</th></tr></thead>
    <tbody>${fullySkippedAppendix(() => true)}</tbody>
  </table></div>
</main>
`;

fs.writeFileSync(path.join(DRAFTS, "link-map-proposal.html"), html);
console.log(`Report written: ${html.length} chars`);
