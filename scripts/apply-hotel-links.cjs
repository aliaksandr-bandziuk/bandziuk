// scripts/apply-hotel-links.cjs
//
// Run after the hotel pages (stage 2, group 3) are created with
// create-landing.cjs and deployed: /hotel-seo (+ PL pozycjonowanie-strony-hotelu,
// RU prodvizhenie-saita-otelya), /hotel-website-design, /vacation-rental-website-design.
//
// 1. Retitles the existing EN /hotel-website (hotel website development). Its H2/H3
//    were newspaper-style («What the site includes», «How the work goes») and its
//    core query «website for hotels» turned out to be guests booking rooms. Only
//    whole string values equal to the old text are replaced; the dry run prints
//    every field it found.
// 2. Services hubs: the SEO section (found by SEO for construction companies) gets
//    the hotel SEO pages in EN / PL / RU; the EN website section (found by the
//    hotel website page) gets hotel website design and vacation rental website design.
// 3. One sentence at the end of the main text of the existing hotel website pages
//    EN / PL / RU, linking the new pages.
//
// Idempotent; aborts on drafts; one transaction, one patch per change.
//
// Usage: node scripts/apply-hotel-links.cjs           dry run
//        node scripts/apply-hotel-links.cjs --apply   write

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

const NEW = ["singlepage-hotel-seo", "singlepage-hotel-seo.pl", "singlepage-hotel-seo.ru", "singlepage-hotel-website-design", "singlepage-vacation-rental-website-design"];

const RETITLE = {
  lang: "en", slug: "hotel-website",
  map: {
    "Hotel website development": "Hotel Website Development for Direct Bookings",
    "Hotel Website Development": "Hotel Website Development for Direct Bookings",
    "What the site includes": "What a hotel website includes for direct bookings",
    "Booking handled on your own site": "A booking engine on the hotel’s own website",
    "A stated reason to book direct": "A clear reason for guests to book direct",
    "Room types as decisions, not photographs": "Room type pages that help guests choose",
    "Multilingual done technically correctly": "A multilingual hotel website with correct language versions",
    "Galleries that load fast on mobile": "Hotel photo galleries that load fast on mobile",
    "Local content and structured data": "Local content and hotel structured data",
    "The arithmetic of a direct booking": "Direct bookings vs OTA commission: what a hotel keeps",
    "How the work goes": "How hotel website development works",
    "We look at the property and the bookings": "Reviewing the property and its booking channels",
    "I design the structure": "Designing the hotel website structure",
    "Build and optimise": "Building and optimising the hotel website",
    "Launch and support": "Launching and supporting the hotel website",
    "Frequently asked questions": "Hotel website development: frequently asked questions",
  },
};

const HUB = [
  { lang: "en", marker: "singlepage-seo-for-construction-companies", refs: ["singlepage-hotel-seo"] },
  { lang: "en", marker: "singlepage-hotel-website", refs: ["singlepage-hotel-website-design", "singlepage-vacation-rental-website-design"] },
  { lang: "pl", marker: "singlepage-seo-for-construction-companies.pl", refs: ["singlepage-hotel-seo.pl"] },
  { lang: "ru", marker: "singlepage-seo-for-construction-companies.ru", refs: ["singlepage-hotel-seo.ru"] },
];

const TEXT = [
  { lang: "en", slug: "hotel-website",
    para: para("Getting found in Google and in AI answers is covered on the ", ["hotel SEO", "/hotel-seo"], " page, the look of the site on the ", ["hotel website design", "/hotel-website-design"], " page, and direct-booking sites for apartments and holiday homes on the ", ["vacation rental website design", "/vacation-rental-website-design"], " page.") },
  { lang: "pl", slug: "strona-dla-hotelu",
    para: para("O tym, jak goście znajdują hotel w Google i rezerwują bezpośrednio, piszę na stronie ", ["pozycjonowanie strony hotelu", "/pl/pozycjonowanie-strony-hotelu"], ".") },
  { lang: "ru", slug: "sait-dlya-otelya",
    para: para("Как гости находят отель в поиске, на картах и в ответах ИИ, описано на странице ", ["продвижение сайта отеля", "/ru/prodvizhenie-saita-otelya"], ".") },
];

const getPage = (lang, s) => client.fetch(
  `*[_type == "singlepage" && language == $lang && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]`,
  { lang, s },
);

// every string field whose whole value is a key of `map`, as Sanity patch paths
function findStrings(node, map, at, out) {
  if (typeof node === "string") { if (Object.prototype.hasOwnProperty.call(map, node.trim()) && at) out.push([at, node.trim()]); return; }
  if (Array.isArray(node)) {
    node.forEach((x, i) => findStrings(x, map, `${at}[${x && x._key ? `_key=="${x._key}"` : i}]`, out));
    return;
  }
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) {
      if (k.startsWith("_") || k === "slug" || k === "markDefs" || (!at && k === "title")) continue; // top-level title = short card/breadcrumb label
      findStrings(v, map, at ? `${at}.${k}` : k, out);
    }
  }
}

async function main() {
  const exist = await client.fetch(`*[_id in $ids]._id`, { ids: NEW });
  if (exist.length !== NEW.length) { console.log(`Aborting — not in Sanity yet: ${NEW.filter((i) => !exist.includes(i)).join(", ")}`); process.exit(1); }
  const hubs = await client.fetch(
    `*[_type == "singlepage" && pageType == "servicesIndex" && !(_id in path("drafts.**"))]{
      _id, _rev, language, "blocks": contentBlocks[_type == "relatedServicesBlock"]{ _key, title, "refs": items[]._ref }
    }`,
  );
  const hotelEn = await getPage(RETITLE.lang, RETITLE.slug);
  if (!hotelEn) throw new Error("EN hotel-website page not found");
  for (const t of TEXT) { t.doc = t.lang === "en" ? hotelEn : await getPage(t.lang, t.slug); if (!t.doc) throw new Error(`${t.lang} «${t.slug}» not found`); }
  const touched = [...hubs.map((h) => h._id), ...TEXT.map((t) => t.doc._id)];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: touched.map((i) => `drafts.${i}`) });
  if (drafts.length) { console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`); process.exit(1); }

  const patches = [];

  // 1. retitle
  const found = [];
  findStrings(hotelEn, RETITLE.map, "", found);
  const set = {};
  if (!hotelEn.heading) found.push(["heading", null]);
  if (!found.length) console.log("skip  EN hotel-website: no old headings left (already retitled?)");
  else {
    console.log("retitle EN /hotel-website:");
    for (const [p, old] of found) {
      const val = old === null ? "Hotel Website Development for Direct Bookings" : RETITLE.map[old];
      set[p] = val;
      console.log(`  ${p}\n    «${old === null ? "(empty — H1 came from title)" : old}» → «${val}»`);
    }
    patches.push({ id: hotelEn._id, rev: hotelEn._rev, op: (q) => q.set(set) });
  }

  // 2. hubs
  for (const h of HUB) {
    const hub = hubs.find((x) => x.language === h.lang);
    if (!hub) throw new Error(`${h.lang} services hub not found`);
    const sec = hub.blocks.find((b) => (b.refs || []).includes(h.marker));
    if (!sec) throw new Error(`${h.lang} hub: no section lists ${h.marker}; sections: ${hub.blocks.map((b) => b.title).join(" | ")}`);
    const missing = h.refs.filter((r) => !(sec.refs || []).includes(r));
    if (!missing.length) { console.log(`skip  ${h.lang} hub «${sec.title}»: already lists all`); continue; }
    console.log(`add   ${h.lang} hub «${sec.title}»: ${missing.join(", ")}`);
    patches.push({ id: hub._id, rev: hub._rev, op: (q) => q.insert("after", `contentBlocks[_key=="${sec._key}"].items[-1]`, missing.map((r) => ({ _key: key(), _type: "reference", _ref: r }))) });
  }

  // 3. sentences
  for (const t of TEXT) {
    const blocks = (t.doc.contentBlocks || []).filter((x) => x._type === "textContent");
    const b = blocks.find((x) => x.layout === "guide") || blocks[0];
    if (!b) throw new Error(`${t.lang} «${t.slug}»: no text block`);
    if ((b.content || []).some((x) => plain(x) === plain(t.para))) { console.log(`skip  ${t.lang} «${t.slug}»: sentence already there`); continue; }
    const last = b.content[b.content.length - 1];
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
