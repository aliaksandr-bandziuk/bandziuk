// scripts/apply-real-estate-finance-links.cjs
//
// Run after stage 2b batch A (21 pages, EN/PL/RU) is created and deployed:
// seo-for-realtors, realtor-website-design, financial-advisor-seo,
// financial-advisor-website-design, insurance-agency-seo,
// insurance-agency-website-design, mortgage-broker-seo.
//
// 1. Services hubs EN / PL / RU: SEO pages into the industry SEO section, design
//    pages into the industry website section (found by a page they already list).
// 2. One sentence after the last paragraph of the main text (closing headings are
//    skipped) of the existing real estate SEO and agency website pages, EN/PL/RU.
//
// Idempotent; aborts on drafts; one transaction, one patch per change.
//
// Usage: node scripts/apply-real-estate-finance-links.cjs           dry run
//        node scripts/apply-real-estate-finance-links.cjs --apply   write

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

const SEO_G = ["seo-for-realtors", "financial-advisor-seo", "insurance-agency-seo", "mortgage-broker-seo"];
const WEB_G = ["realtor-website-design", "financial-advisor-website-design", "insurance-agency-website-design"];
const id = (g, lang) => (lang === "en" ? `singlepage-${g}` : `singlepage-${g}.${lang}`);
const NEW = [...SEO_G, ...WEB_G].flatMap((g) => ["en", "pl", "ru"].map((l) => id(g, l)));

// marker: slugs of pages the target section already lists (first match wins)
const HUB = [
  { lang: "en", marker: ["seo-for-law-firms", "seo-for-construction-companies"], refs: SEO_G.map((g) => id(g, "en")) },
  { lang: "en", marker: ["lawyer-website-development", "hotel-website"], refs: WEB_G.map((g) => id(g, "en")) },
  { lang: "pl", marker: ["seo-dla-kancelarii-prawnych", "pozycjonowanie-strony-firmy-budowlanej"], refs: SEO_G.map((g) => id(g, "pl")) },
  { lang: "pl", marker: ["strona-internetowa-dla-adwokata", "strona-dla-startupu", "strona-dla-hotelu"], refs: WEB_G.map((g) => id(g, "pl")) },
  { lang: "ru", marker: ["seo-dlya-yuridicheskogo-sayta", "seo-prodvizhenie-saita-stroitelnoi-kompanii"], refs: SEO_G.map((g) => id(g, "ru")) },
  { lang: "ru", marker: ["sozdanie-saita-dlya-advokata", "sait-dlya-startapa", "sait-dlya-otelya"], refs: WEB_G.map((g) => id(g, "ru")) },
];

const TEXT = [
  { lang: "en", slug: "seo-for-real-estate",
    para: para("Individual agents and small teams have a different task — their name, their neighborhoods and their listings; that is covered on the ", ["SEO for realtors", "/seo-for-realtors"], " page.") },
  { lang: "en", slug: "real-estate-agency-website",
    para: para("A site for one agent rather than an agency — personal brand, neighborhood pages, IDX listings — is covered on the ", ["realtor website design", "/realtor-website-design"], " page.") },
  { lang: "pl", slug: "seo-dla-stron-nieruchomosci",
    para: para("Pozycjonowanie pojedynczego pośrednika — nazwisko, dzielnice, oferty z portali — opisuję na stronie ", ["pozycjonowanie strony agenta nieruchomości", "/pl/pozycjonowanie-strony-agenta-nieruchomosci"], ".") },
  { lang: "pl", slug: "strona-dla-agencji-nieruchomosci",
    para: para("Stronę dla jednego pośrednika, a nie całego biura, opisuję na stronie ", ["strona internetowa dla agenta nieruchomości", "/pl/strona-internetowa-dla-agenta-nieruchomosci"], ".") },
  { lang: "ru", slug: "seo-dlya-nedvizhimosti",
    para: para("Продвижение отдельного риелтора — имя, районы, объекты с порталов — описано на странице ", ["продвижение сайта риелтора", "/ru/prodvizhenie-saita-rieltora"], ".") },
  { lang: "ru", slug: "sait-dlya-agentstva-nedvizhimosti",
    para: para("Сайт для одного риелтора, а не агентства, описан на странице ", ["сайт для риелтора", "/ru/sait-dlya-rieltora"], ".") },
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
