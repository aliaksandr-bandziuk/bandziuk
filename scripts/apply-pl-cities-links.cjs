// scripts/apply-pl-cities-links.cjs
//
// Run after the stage 3 pilot (30 Polish city pages) is created and deployed:
//   /pl/pozycjonowanie-stron-{miasto} and /pl/tworzenie-stron-internetowych-{miasto} for
//   Poznań, Toruń, Wrocław, Katowice, Kraków, Rzeszów, Szczecin, Łódź, Bydgoszcz,
//   Lublin, Opole, Częstochowa, Gdańsk, Radom, Białystok.
//
// 1. PL services hub: all 30 city pages go into «Według lokalizacji», the section
//    that already lists the Warsaw website page.
// 2. One paragraph with links to all 15 cities after the last paragraph of the main
//    text of: Warsaw SEO, Warsaw website, the general SEO service and the general
//    website service pages (closing headings are skipped).
//
// Idempotent; aborts on drafts; one transaction, one patch per change.
//
// Usage: node scripts/apply-pl-cities-links.cjs           dry run
//        node scripts/apply-pl-cities-links.cjs --apply   write

const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const key = () => crypto.randomBytes(6).toString("hex");
const plain = (b) => (b.children || []).map((c) => c.text).join("");
function para(...segments) {
  const markDefs = [];
  const children = segments.map((s) => {
    if (typeof s === "string") return { _type: "span", _key: key(), text: s, marks: [] };
    const mk = key();
    markDefs.push({ _type: "link", _key: mk, href: s[1] });
    return { _type: "span", _key: key(), text: s[0], marks: [mk] };
  });
  return { _type: "block", _key: key(), style: "normal", markDefs, children };
}

const CITIES = [
  ["krakow", "Kraków"], ["wroclaw", "Wrocław"], ["poznan", "Poznań"], ["gdansk", "Gdańsk"], ["lodz", "Łódź"],
  ["katowice", "Katowice"], ["szczecin", "Szczecin"], ["lublin", "Lublin"], ["bydgoszcz", "Bydgoszcz"], ["torun", "Toruń"],
  ["rzeszow", "Rzeszów"], ["bialystok", "Białystok"], ["czestochowa", "Częstochowa"], ["radom", "Radom"], ["opole", "Opole"],
];
const SEO = (c) => `pozycjonowanie-stron-${c}`;
const WEB = (c) => `tworzenie-stron-internetowych-${c}`;
const NEW = CITIES.flatMap(([c]) => [`singlepage-${SEO(c)}.pl`, `singlepage-${WEB(c)}.pl`]);

const cityList = (lead, slugOf) => para(lead, ...CITIES.flatMap(([c, name], i) => [
  [name, `/pl/${slugOf(c)}`], i === CITIES.length - 1 ? "." : i === CITIES.length - 2 ? " i " : ", ",
]));

// marker: slugs of pages the target section already lists (first match wins)
const HUB = [
  // the Warsaw website page sits in «Według lokalizacji»; the Warsaw SEO page is in no section,
  // so both kinds of city pages go there, city by city
  { lang: "pl", marker: ["tworzenie-stron-internetowych-warszawa"], refs: CITIES.flatMap(([c]) => [`singlepage-${SEO(c)}.pl`, `singlepage-${WEB(c)}.pl`]) },
];

const TEXT = [
  { lang: "pl", slug: "pozycjonowanie-stron-warszawa", para: cityList("Z firmami spoza Warszawy pracuję tak samo, zdalnie. Pozycjonowanie stron w innych miastach: ", SEO) },
  { lang: "pl", slug: "strategia-i-optymalizacja-seo", para: cityList("Pozycjonowanie stron w miastach Polski: ", SEO) },
  { lang: "pl", slug: "tworzenie-stron-internetowych-warszawa", para: cityList("Strony dla firm spoza Warszawy robię zdalnie. Tworzenie stron internetowych w innych miastach: ", WEB) },
  { lang: "pl", slug: "tworzenie-stron-internetowych", para: cityList("Tworzenie stron internetowych w miastach Polski: ", WEB) },
];

const getPage = (lang, s) => client.fetch(
  `*[_type in ["singlepage", "service"] && language == $lang && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]`,
  { lang, s },
);
const idsBySlug = (lang, slugs) => client.fetch(
  `*[_type == "singlepage" && language == $lang && slug[$lang].current in $slugs && !(_id in path("drafts.**"))]{_id, "s": slug[$lang].current}`,
  { lang, slugs },
);

async function main() {
  const exist = await client.fetch(`*[_id in $ids]._id`, { ids: NEW });
  if (exist.length !== NEW.length) { console.log(`Aborting — not in Sanity yet: ${NEW.filter((i) => !exist.includes(i)).join(", ")}`); process.exit(1); }
  const hubs = await client.fetch(
    `*[_type == "singlepage" && pageType == "servicesIndex" && !(_id in path("drafts.**"))]{
      _id, _rev, language, "blocks": contentBlocks[_type == "relatedServicesBlock"]{ _key, title, "refs": items[]._ref }
    }`,
  );
  for (const t of TEXT) {
    t.doc = await getPage(t.lang, t.slug);
    if (!t.doc) console.log(`warn  ${t.lang} «${t.slug}» not found — sentence skipped`);
  }
  const texts = TEXT.filter((t) => t.doc);
  const touched = [...hubs.map((h) => h._id), ...texts.map((t) => t.doc._id)];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: touched.map((i) => `drafts.${i}`) });
  if (drafts.length) { console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`); process.exit(1); }

  const patches = [];

  // 1. hubs — several sections of one hub may change: each change is its own patch
  for (const h of HUB) {
    const hub = hubs.find((x) => x.language === h.lang);
    if (!hub) throw new Error(`${h.lang} services hub not found`);
    const found = await idsBySlug(h.lang, h.marker);
    let sec = null;
    for (const m of h.marker) {
      const id = (found.find((f) => f.s === m) || {})._id;
      sec = id && hub.blocks.find((b) => (b.refs || []).includes(id));
      if (sec) break;
    }
    if (!sec && h.optional) { console.log(`warn  ${h.lang} hub: no section lists ${h.marker.join(", ")} — skipped; sections: ${hub.blocks.map((b) => b.title).join(" | ")}`); continue; }
    if (!sec) throw new Error(`${h.lang} hub: no section lists any of ${h.marker.join(", ")}; sections: ${hub.blocks.map((b) => b.title).join(" | ")}`);
    const missing = h.refs.filter((r) => !(sec.refs || []).includes(r));
    if (!missing.length) { console.log(`skip  ${h.lang} hub «${sec.title}»: already lists all`); continue; }
    console.log(`add   ${h.lang} hub «${sec.title}»: ${missing.join(", ")}`);
    patches.push({ id: hub._id, rev: hub._rev, op: (q) => q.insert("after", `contentBlocks[_key=="${sec._key}"].items[-1]`, missing.map((r) => ({ _key: key(), _type: "reference", _ref: r }))) });
  }

  // 2. sentences
  for (const t of texts) {
    const blocks = (t.doc.contentBlocks || []).filter((x) => x._type === "textContent");
    const b = blocks.find((x) => x.layout === "guide") || blocks[0];
    if (!b || !(b.content || []).length) { console.log(`warn  ${t.lang} «${t.slug}»: no text block — sentence skipped`); continue; }
    if (blocks.some((x) => (x.content || []).some((y) => plain(y) === plain(t.para)))) { console.log(`skip  ${t.lang} «${t.slug}»: sentence already there`); continue; }
    // a text block may end with a heading that introduces the next block — never put the sentence under it
    let end = b.content.length;
    while (end > 0 && /^h[1-6]$/.test(b.content[end - 1].style || "")) end--;
    const last = b.content[end - 1];
    if (!last) { console.log(`warn  ${t.lang} «${t.slug}»: no paragraph in the main text — sentence skipped`); continue; }
    if (last !== b.content[b.content.length - 1]) console.log(`note  ${t.lang} «${t.slug}»: text block ends with «${plain(b.content[b.content.length - 1]).slice(0, 40)}…» — inserting before it`);
    console.log(`\n${t.lang} «${t.slug}» (end of the main text, after «${plain(last).slice(0, 50)}…»):\n  ${plain(t.para)}`);
    patches.push({ id: t.doc._id, rev: t.doc._rev, op: (q) => q.insert("after", `contentBlocks[_key=="${b._key}"].content[_key=="${last._key}"]`, [t.para]) });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${patches.length} change(s), nothing written. Add --apply to write.`);
  const tx = client.transaction();
  const seen = new Set();
  for (const p of patches) {
    const first = !seen.has(p.id); seen.add(p.id);
    tx.patch(p.id, (q) => p.op(first ? q.ifRevisionId(p.rev) : q));
  }
  await tx.commit();
  console.log(`\nWritten: ${[...seen].join(", ")}`);
  console.log("The webhook revalidates these pages.");
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
