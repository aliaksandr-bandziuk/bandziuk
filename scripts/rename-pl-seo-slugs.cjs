// scripts/rename-pl-seo-slugs.cjs
//
// Owner's rule (22.10.2026): Polish SEO pages use the form «pozycjonowanie strony X»,
// not «pozycjonowanie firmy X» / «pozycjonowanie siłowni». Batches B–D (and the older
// restaurant page) broke it. This script renames 25 Polish pages:
//   1. slug  pozycjonowanie-X → pozycjonowanie-strony-X;
//   2. text on those pages: «pozycjonowanie(-a/-u/-em) <phrase>» → «… strony <phrase>»
//      (H1, title, meta, headings, body, FAQ); phrases that already have «strony» are left;
//   3. links: every href to /pl/<old> (relative or absolute) in ANY document → /pl/<new>.
// The 301 redirects old → new live in src/lib/redirects/staticRedirects.mjs.
//
// Usage:
//   node scripts/rename-pl-seo-slugs.cjs                      dry run on Sanity
//   node scripts/rename-pl-seo-slugs.cjs --apply              write to Sanity (aborts on drafts)
//   node scripts/rename-pl-seo-slugs.cjs --fixtures           dry run on src/dev-fixtures and scripts/apply-*-links.cjs
//   node scripts/rename-pl-seo-slugs.cjs --fixtures --apply   rewrite those files
//
// Idempotent. Prints metaTitle lengths over 60 characters after the change.

const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const FIXTURES = process.argv.includes("--fixtures");

// [old slug, phrase as it follows «pozycjonowanie» in the text]
const MAP = [
  ["pozycjonowanie-biura-podrozy", "biura podróży"],
  ["pozycjonowanie-domu-opieki", "domu opieki"],
  ["pozycjonowanie-firmy-bram-garazowych", "firmy bram garażowych"],
  ["pozycjonowanie-firmy-budujacej-domy", "firmy budującej domy"],
  ["pozycjonowanie-firmy-ddd", "firmy DDD"],
  ["pozycjonowanie-firmy-montazu-podlog", "firmy montażu podłóg"],
  ["pozycjonowanie-firmy-odbiorow-mieszkan", "firmy odbiorów mieszkań"],
  ["pozycjonowanie-firmy-osuszania-po-zalaniu", "firmy osuszania po zalaniu"],
  ["pozycjonowanie-firmy-prania-dywanow", "firmy prania dywanów"],
  ["pozycjonowanie-firmy-przeprowadzkowej", "firmy przeprowadzkowej"],
  ["pozycjonowanie-firmy-wycinki-drzew", "firmy wycinki drzew"],
  ["pozycjonowanie-firmy-wywozu-gruzu", "firmy wywozu gruzu"],
  ["pozycjonowanie-gabinetu-dermatologicznego", "gabinetu dermatologicznego"],
  ["pozycjonowanie-gabinetu-fizjoterapii", "gabinetu fizjoterapii"],
  ["pozycjonowanie-gabinetu-ortodontycznego", "gabinetu ortodontycznego"],
  ["pozycjonowanie-kliniki-medycyny-estetycznej", "kliniki medycyny estetycznej"],
  ["pozycjonowanie-kwiaciarni", "kwiaciarni"],
  ["pozycjonowanie-projektanta-wnetrz", "projektanta wnętrz"],
  ["pozycjonowanie-restauracji", "restauracji"],
  ["pozycjonowanie-salonu-optycznego", "salonu optycznego"],
  ["pozycjonowanie-salonu-samochodowego", "salonu samochodowego"],
  ["pozycjonowanie-serwisu-agd", "serwisu AGD"],
  ["pozycjonowanie-silowni", "siłowni"],
  ["pozycjonowanie-winnicy", "winnicy"],
  ["pozycjonowanie-wypozyczalni-samochodow", "wypożyczalni samochodów"],
].map(([old, phrase]) => ({ old, neu: old.replace(/^pozycjonowanie-/, "pozycjonowanie-strony-"), phrase }));

// metaTitles that would exceed 60 characters after inserting «strony»
const META = {
  "pozycjonowanie-silowni": "Pozycjonowanie strony siłowni: Mapy, zajęcia | Bandziuk",
  "pozycjonowanie-salonu-optycznego": "Pozycjonowanie strony salonu optycznego | Bandziuk",
  "pozycjonowanie-restauracji": "Pozycjonowanie strony restauracji w Google | Bandziuk",
};

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const OLD = new Map(MAP.map((m) => [m.old, m]));

// href: /pl/<old>, https://www.bandziuk.com/pl/<old>, with optional #hash or ?query
const HREF = new RegExp(`^((?:https?://(?:www\\.)?bandziuk\\.com)?/pl/)(${MAP.map((m) => esc(m.old)).join("|")})(?=$|[#?])`);
const fixHref = (h) => h.replace(HREF, (_, pre, old) => pre + OLD.get(old).neu);

// «pozycjonowanie|pozycjonowania|pozycjonowaniu|pozycjonowaniem <phrase>» → insert «strony».
// The phrase may start with a capital (headings in title case are rare in PL, but safe).
const phraseRules = (m) => {
  const p = esc(m.phrase).replace(/^(\\?.)/, (c) => `[${c.toLowerCase()}${c.toUpperCase()}]`);
  return new RegExp(`([Pp]ozycjonowani(?:e|a|u|em))\\s+(?!strony\\s)(${p})`, "g");
};
const fixText = (m, s) => s.replace(phraseRules(m), "$1 strony $2");

function walk(node, at, out, textFix) {
  if (typeof node === "string") return;
  if (Array.isArray(node)) { node.forEach((x, i) => walk(x, `${at}[${x && x._key ? `_key=="${x._key}"` : i}]`, out, textFix)); return; }
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) {
      if (k === "slug" || (k.startsWith("_") && k !== "_type")) continue;
      if (k === "_type") continue;
      const here = at ? `${at}.${k}` : k;
      if (typeof v === "string") {
        let f = k === "href" ? fixHref(v) : v;
        if (textFix && k !== "href") f = textFix(f);
        if (f !== v) out.push([here, v, f]);
      } else walk(v, here, out, textFix);
    }
  }
}

async function sanity() {
  const { createClient } = require("@sanity/client");
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2025-08-04",
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
  });
  const pages = await client.fetch(`*[_type == "singlepage" && language == "pl" && slug.pl.current in $s && !(_id in path("drafts.**"))]`, { s: MAP.map((m) => m.old) });
  const already = await client.fetch(`*[_type == "singlepage" && language == "pl" && slug.pl.current in $s]._id`, { s: MAP.map((m) => m.neu) });
  const missing = MAP.filter((m) => !pages.some((p) => p.slug.pl.current === m.old));
  // every document that may link to an old URL
  const all = await client.fetch(`*[!(_id in path("drafts.**")) && _type in ["singlepage", "service", "blog", "blogPage", "portfolio", "portfolioPage", "homepage", "header", "footer"]]`);
  const plan = [];
  for (const d of all) {
    const m = d._type === "singlepage" && d.language === "pl" ? OLD.get(d.slug?.pl?.current) : null;
    const changes = [];
    walk(d, "", changes, m ? (s) => fixText(m, s) : null);
    if (m && META[m.old]) { const i = changes.findIndex(([at]) => at === "seo.metaTitle"); if (i > -1) changes[i][2] = META[m.old]; else if (d.seo?.metaTitle !== META[m.old]) changes.push(["seo.metaTitle", d.seo?.metaTitle, META[m.old]]); }
    if (m) changes.unshift(["slug.pl.current", m.old, m.neu]);
    if (changes.length) plan.push({ d, changes, rename: m });
  }
  if (already.length) console.log(`note  ${already.length} page(s) already under the new slug`);
  for (const m of missing) console.log(`note  not found under the old slug: ${m.old}`);
  if (!plan.length) return console.log("Nothing to change.");
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: plan.map((p) => `drafts.${p.d._id}`) });
  if (drafts.length) { console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`); process.exit(1); }
  let n = 0;
  for (const p of plan) {
    const slug = p.d.slug?.[p.d.language]?.current || p.d.slug?.current || "";
    console.log(`\n── ${p.d._type} ${p.d.language || ""} ${slug}  (${p.d._id})${p.rename ? "  RENAME" : "  links only"}`);
    for (const [at, a, b] of p.changes) { n++; console.log(`  ${at}\n    − ${String(a).slice(0, 160)}\n    + ${String(b).slice(0, 160)}`); }
    const mt = p.changes.find(([at]) => at === "seo.metaTitle");
    if (mt && mt[2].length > 60) console.log(`  WARN metaTitle ${mt[2].length} > 60`);
  }
  if (!APPLY) return console.log(`\nDry run — ${n} change(s) in ${plan.length} document(s) (${plan.filter((p) => p.rename).length} renamed), nothing written. Add --apply to write.`);
  const tx = client.transaction();
  for (const p of plan) tx.patch(p.d._id, (q) => q.ifRevisionId(p.d._rev).set(Object.fromEntries(p.changes.map(([at, , b]) => [at, b]))));
  await tx.commit();
  console.log(`\nWritten: ${plan.length} document(s). The webhook revalidates them; deploy to activate the redirects.`);
}

function fixtures() {
  const root = path.resolve(__dirname, "..");
  const files = [
    ...fs.readdirSync(path.join(root, "src/dev-fixtures")).filter((f) => /\.ts$/.test(f)).map((f) => path.join(root, "src/dev-fixtures", f)),
    ...fs.readdirSync(__dirname).filter((f) => /^apply-.*-links\.cjs$/.test(f)).map((f) => path.join(__dirname, f)),
  ];
  let total = 0;
  for (const file of files) {
    const src = fs.readFileSync(file, "utf8");
    let out = src;
    // links anywhere in the file
    for (const m of MAP) out = out.replace(new RegExp(`(["'(\\s]|bandziuk\\.com)/pl/${esc(m.old)}(?=["'#?)\\s])`, "g"), `$1/pl/${m.neu}`);
    // the renamed fixture itself: slug and text (string lines only, not // comments)
    const own = /\.pl\.ts$/.test(file) && (src.match(/slug:\s*"([^"]+)"/) || [])[1];
    const m = own && OLD.get(own);
    if (m) {
      out = out.replace(`slug: "${m.old}"`, `slug: "${m.neu}"`);
      out = out.split("\n").map((l) => (l.trim().startsWith("//") ? l : fixText(m, l))).join("\n");
      if (META[m.old]) out = out.replace(/metaTitle:\s*"[^"]*"/, `metaTitle: "${META[m.old]}"`);
      const mt = (out.match(/metaTitle:\s*"([^"]+)"/) || [])[1] || "";
      if (mt.length > 60) console.log(`WARN ${path.basename(file)} metaTitle ${mt.length} > 60: ${mt}`);
    }
    if (out === src) continue;
    const a = src.split("\n"), b = out.split("\n");
    console.log(`\n── ${path.relative(root, file)}${m ? "  RENAME" : ""}`);
    a.forEach((l, i) => { if (l !== b[i]) { total++; console.log(`  − ${l.trim().slice(0, 200)}\n  + ${b[i].trim().slice(0, 200)}`); } });
    if (APPLY) fs.writeFileSync(file, out);
  }
  console.log(total ? `\n${APPLY ? "Written" : "Dry run"} — ${total} line(s).` : "Nothing to change.");
}

if (FIXTURES) fixtures();
else sanity().catch((err) => { console.error(err.message || err); process.exit(1); });
