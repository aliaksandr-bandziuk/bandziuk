// scripts/apply-small-business-links.cjs
//
// Run after the stage 2, group 4 pages are created with create-landing.cjs and
// deployed:
//   small business — /seo-services-for-small-business (+ PL pozycjonowanie-strony-malej-firmy,
//     RU prodvizhenie-saita-malogo-biznesa), /local-seo-for-small-business,
//     /small-business-website-design (+ PL strona-internetowa-dla-malej-firmy, RU sait-dlya-malogo-biznesa);
//   startups — /seo-for-startups, /startup-website-design;
//   B2B — /b2b-seo (+ RU prodvizhenie-b2b), /b2b-website-design.
//
// 1. Services hubs EN / PL / RU: the new pages go into the SEO section and the
//    website section. A section is found by a page it already lists (by slug).
// 2. One sentence after the last paragraph of the main text (guide block, else
//    the first text block; closing headings are skipped) of existing pages: startup website, landing pages, local SEO, the
//    general SEO and website development pages, the manufacturer page, and their
//    PL / RU counterparts.
//
// Idempotent; aborts on drafts; one transaction, one patch per change.
//
// Usage: node scripts/apply-small-business-links.cjs           dry run
//        node scripts/apply-small-business-links.cjs --apply   write

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

const NEW = [
  "singlepage-seo-services-for-small-business", "singlepage-seo-services-for-small-business.pl", "singlepage-seo-services-for-small-business.ru",
  "singlepage-local-seo-for-small-business",
  "singlepage-small-business-website-design", "singlepage-small-business-website-design.pl", "singlepage-small-business-website-design.ru",
  "singlepage-seo-for-startups", "singlepage-startup-website-design",
  "singlepage-b2b-seo", "singlepage-b2b-seo.ru", "singlepage-b2b-website-design",
];

// marker: slugs of pages the target section already lists (first match wins)
const HUB = [
  { lang: "en", marker: ["seo-for-construction-companies", "hotel-seo"], refs: ["singlepage-seo-services-for-small-business", "singlepage-local-seo-for-small-business", "singlepage-seo-for-startups", "singlepage-b2b-seo"] },
  { lang: "en", marker: ["hotel-website", "construction-company-website", "startup-website"], refs: ["singlepage-small-business-website-design", "singlepage-startup-website-design", "singlepage-b2b-website-design"] },
  { lang: "pl", marker: ["pozycjonowanie-strony-firmy-budowlanej", "pozycjonowanie-strony-hotelu"], refs: ["singlepage-seo-services-for-small-business.pl"] },
  { lang: "pl", marker: ["strona-dla-startupu", "strona-dla-hotelu", "strona-dla-gabinetu-stomatologicznego"], refs: ["singlepage-small-business-website-design.pl"] },
  { lang: "ru", marker: ["seo-prodvizhenie-saita-stroitelnoi-kompanii", "prodvizhenie-saita-otelya"], refs: ["singlepage-seo-services-for-small-business.ru", "singlepage-b2b-seo.ru"] },
  { lang: "ru", marker: ["sait-dlya-startapa", "sait-dlya-otelya", "sait-dlya-stomatologicheskoy-kliniki"], refs: ["singlepage-small-business-website-design.ru"] },
];

const TEXT = [
  { lang: "en", slug: "startup-website",
    para: para("The look of a startup site — MVP and waitlist pages, the pricing page, pages for investors — is covered on the ", ["startup website design", "/startup-website-design"], " page, and getting found in Google and in AI answers on the ", ["SEO for startups", "/seo-for-startups"], " page.") },
  { lang: "en", slug: "landing-page-development",
    para: para("A waitlist or pre-launch page for a new product is covered on the ", ["startup website design", "/startup-website-design"], " page.") },
  { lang: "en", slug: "local-seo-services",
    para: para("For owners who run a small business themselves, the ", ["local SEO for small business", "/local-seo-for-small-business"], " page walks through the Google Business Profile, reviews and local listings step by step.") },
  { lang: "en", slug: "seo-optimization-and-strategy",
    para: para("How this work looks for different kinds of companies is covered on the ", ["SEO services for small business", "/seo-services-for-small-business"], ", ", ["SEO for startups", "/seo-for-startups"], " and ", ["B2B SEO", "/b2b-seo"], " pages.") },
  { lang: "en", slug: "website-development",
    para: para("Website design by type of company is covered on the ", ["small business website design", "/small-business-website-design"], ", ", ["startup website design", "/startup-website-design"], " and ", ["B2B website design", "/b2b-website-design"], " pages.") },
  { lang: "en", slug: "manufacturing-company-website",
    para: para("For distributors, wholesalers and other B2B companies, see ", ["B2B website design", "/b2b-website-design"], " and ", ["B2B SEO", "/b2b-seo"], ".") },
  { lang: "pl", slug: "pozycjonowanie-lokalne",
    para: para("Jak wygląda pozycjonowanie, gdy firmę prowadzi kilka osób, a budżet jest ograniczony, opisuję na stronie ", ["pozycjonowanie strony małej firmy", "/pl/pozycjonowanie-strony-malej-firmy"], ".") },
  { lang: "pl", slug: "tworzenie-stron-internetowych",
    para: para("Co powinna zawierać strona małej firmy i ile kosztuje, opisuję na stronie ", ["strona internetowa dla małej firmy", "/pl/strona-internetowa-dla-malej-firmy"], ".") },
  { lang: "ru", slug: "lokalnoe-seo-prodvizhenie",
    para: para("Как устроено продвижение, когда бизнес небольшой и бюджет ограничен, описано на странице ", ["продвижение сайта малого бизнеса", "/ru/prodvizhenie-saita-malogo-biznesa"], ".") },
  { lang: "ru", slug: "razrabotka-saitov",
    para: para("Что нужно от сайта небольшой компании и сколько он стоит, описано на странице ", ["сайт для малого бизнеса", "/ru/sait-dlya-malogo-biznesa"], ".") },
  { lang: "ru", slug: "sait-dlya-proizvodstvennoy-kompanii",
    para: para("Как производителю или дистрибьютору получать заявки из поиска и нейросетей, описано на странице ", ["продвижение B2B", "/ru/prodvizhenie-b2b"], ".") },
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
