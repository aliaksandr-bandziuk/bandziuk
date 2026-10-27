// scripts/apply-batch-h2-links.cjs
//
// Run after batch H wave 2 (farm website, solar SEO, jewelry store SEO,
// dermatology website, daycare website) is created and deployed.
// 1. Services hubs: website pages go into the «by industry» website section and SEO
//    pages into «SEO for industries» — found by the realtor pages they already list.
// 2. One sentence with links at the end of the main text of the neighbour pages
//    (winery, B&B, roofing, electricians, construction SEO, florist SEO, ecommerce
//    SEO, dermatology SEO, medical, med spa, language school — EN/PL/RU).
//
// Idempotent; aborts on drafts; one transaction, one patch per change.
//
// Usage: node scripts/apply-batch-h2-links.cjs           dry run
//        node scripts/apply-batch-h2-links.cjs --apply   write

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

const id = (g, lang) => `singlepage-${g}${lang === "en" ? "" : `.${lang}`}`;
const WEB = ["farm-website-design", "dermatology-website-design", "daycare-website-design"];
const SEO = ["solar-seo", "jewelry-store-seo"];
const NEW = ["en", "pl", "ru"].flatMap((l) => [...WEB, ...SEO].map((g) => id(g, l)));

// marker: slugs of pages the target section already lists (first match wins)
const HUB = [
  { lang: "en", marker: ["realtor-website-design", "handyman-website-design", "hair-salon-website-design", "florist-website-design"], refs: WEB.map((g) => id(g, "en")) },
  { lang: "pl", marker: ["strona-internetowa-dla-agenta-nieruchomosci", "strona-internetowa-dla-zlotej-raczki", "strona-internetowa-dla-salonu-fryzjerskiego"], refs: WEB.map((g) => id(g, "pl")) },
  { lang: "ru", marker: ["sait-dlya-rieltora", "sait-mastera-na-chas", "sait-parikmaherskoy-i-barbershopa"], refs: WEB.map((g) => id(g, "ru")) },
  { lang: "en", marker: ["seo-for-realtors", "mortgage-broker-seo", "florist-seo"], refs: SEO.map((g) => id(g, "en")) },
  { lang: "pl", marker: ["pozycjonowanie-strony-agenta-nieruchomosci", "pozycjonowanie-strony-posrednika-kredytowego"], refs: SEO.map((g) => id(g, "pl")) },
  { lang: "ru", marker: ["prodvizhenie-saita-rieltora", "prodvizhenie-saita-ipotechnogo-brokera"], refs: SEO.map((g) => id(g, "ru")) },
];

const TEXT = [
  { lang: "en", slug: "winery-website-design", para: para("Farms that sell direct — farm shops, CSA boxes, meat shares and pick-your-own — have their own page: ", ["farm website design", "/farm-website-design"], ".") },
  { lang: "en", slug: "bed-and-breakfast-website-design", para: para("A farm with a farm shop, boxes or pick-your-own next to the rooms: ", ["farm website design", "/farm-website-design"], ".") },
  { lang: "en", slug: "roofing-seo", para: para("Roofers who also install solar panels and batteries: ", ["solar SEO", "/solar-seo"], ".") },
  { lang: "en", slug: "seo-for-electricians", para: para("Electricians who install solar, batteries and EV chargers: ", ["SEO for solar companies", "/solar-seo"], ".") },
  { lang: "en", slug: "seo-for-construction-companies", para: para("Solar installers search and are searched for differently — see ", ["solar SEO", "/solar-seo"], ".") },
  { lang: "en", slug: "florist-seo", para: para("Another shop built around occasions and gifts: ", ["jewelry store SEO", "/jewelry-store-seo"], ".") },
  { lang: "en", slug: "ecommerce-seo-services", para: para("Jewelry stores and brands — metals, stones, engagement rings and showroom visits: ", ["jewelry store SEO", "/jewelry-store-seo"], ".") },
  { lang: "en", slug: "seo-for-dermatologists", para: para("The site itself — medical and cosmetic paths, booking by visit type, reviewed condition pages — is on ", ["dermatology website design", "/dermatology-website-design"], ".") },
  { lang: "en", slug: "medical-website-design", para: para("Dermatology practices with medical and cosmetic patients: ", ["dermatology website design", "/dermatology-website-design"], ".") },
  { lang: "en", slug: "med-spa-website-design", para: para("Practices led by dermatologists, where medical and cosmetic care share one site: ", ["dermatology website design", "/dermatology-website-design"], ".") },
  { lang: "en", slug: "language-school-website", para: para("Private daycares, preschools and nurseries: ", ["daycare and preschool website design", "/daycare-website-design"], ".") },
  { lang: "pl", slug: "strona-internetowa-dla-winnicy", para: para("Gospodarstwa, które sprzedają bezpośrednio — paczki warzyw, jaja, mięso, samozbiór: ", ["strona internetowa dla gospodarstwa", "/pl/strona-internetowa-dla-gospodarstwa"], ".") },
  { lang: "pl", slug: "strona-internetowa-dla-pensjonatu", para: para("Gospodarstwo, które obok noclegów sprzedaje własne produkty: ", ["strona internetowa dla gospodarstwa", "/pl/strona-internetowa-dla-gospodarstwa"], ".") },
  { lang: "pl", slug: "pozycjonowanie-strony-firmy-budowlanej", para: para("Firmy montujące fotowoltaikę, magazyny energii i pompy ciepła: ", ["pozycjonowanie strony firmy fotowoltaicznej", "/pl/pozycjonowanie-strony-firmy-fotowoltaicznej"], ".") },
  { lang: "pl", slug: "pozycjonowanie-strony-kwiaciarni", para: para("Inny sklep, który żyje okazjami i prezentami: ", ["pozycjonowanie strony sklepu jubilerskiego", "/pl/pozycjonowanie-strony-sklepu-jubilerskiego"], ".") },
  { lang: "pl", slug: "pozycjonowanie-sklepow-internetowych", para: para("Sklepy jubilerskie i marki biżuterii — próby, kamienie, pierścionki zaręczynowe i salon: ", ["pozycjonowanie strony sklepu jubilerskiego", "/pl/pozycjonowanie-strony-sklepu-jubilerskiego"], ".") },
  { lang: "pl", slug: "pozycjonowanie-strony-gabinetu-dermatologicznego", para: para("Sama strona — osobne ścieżki leczenia i estetyki, zapis według rodzaju wizyty, sprawdzone opisy chorób — jest opisana tutaj: ", ["strona internetowa dla gabinetu dermatologicznego", "/pl/strona-internetowa-dla-gabinetu-dermatologicznego"], ".") },
  { lang: "pl", slug: "strona-internetowa-dla-lekarza", para: para("Gabinety dermatologiczne z pacjentami leczenia i estetyki: ", ["strona internetowa dla gabinetu dermatologicznego", "/pl/strona-internetowa-dla-gabinetu-dermatologicznego"], ".") },
  { lang: "pl", slug: "strona-internetowa-dla-kliniki-medycyny-estetycznej", para: para("Gabinety prowadzone przez dermatologów, gdzie leczenie i estetyka są na jednej stronie: ", ["strona internetowa dla gabinetu dermatologicznego", "/pl/strona-internetowa-dla-gabinetu-dermatologicznego"], ".") },
  { lang: "pl", slug: "strona-dla-szkoly-jezykowej", para: para("Niepubliczne przedszkola i żłobki: ", ["strona internetowa dla przedszkola", "/pl/strona-internetowa-dla-przedszkola"], ".") },
  { lang: "ru", slug: "sait-vinodelni", para: para("Фермам, которые продают напрямую — наборы, мясо, молочное, агротуризм: ", ["сайт для фермы", "/ru/sait-dlya-fermy"], ".") },
  { lang: "ru", slug: "sait-gostevogo-doma", para: para("Ферме, у которой рядом с гостевыми комнатами есть своя продукция: ", ["сайт для фермы", "/ru/sait-dlya-fermy"], ".") },
  { lang: "ru", slug: "seo-prodvizhenie-saita-stroitelnoi-kompanii", para: para("Компаниям, которые ставят солнечные панели и аккумуляторы: ", ["продвижение сайта солнечных панелей", "/ru/prodvizhenie-saita-solnechnyh-panelei"], ".") },
  { lang: "ru", slug: "prodvizhenie-cvetochnogo-magazina", para: para("Ещё один магазин, который живёт поводами и подарками: ", ["продвижение сайта ювелирного магазина", "/ru/prodvizhenie-saita-yuvelirnogo-magazina"], ".") },
  { lang: "ru", slug: "prodvizhenie-internet-magazina", para: para("Ювелирным магазинам и брендам — проба, камни, помолвочные кольца и шоурум: ", ["продвижение сайта ювелирного магазина", "/ru/prodvizhenie-saita-yuvelirnogo-magazina"], ".") },
  { lang: "ru", slug: "prodvizhenie-dermatologicheskoy-kliniki", para: para("Сам сайт — два входа для лечения и косметологии, запись по типу приёма, проверенные страницы заболеваний — описан на странице ", ["сайт для дерматолога", "/ru/sait-dlya-dermatologa"], ".") },
  { lang: "ru", slug: "sait-dlya-kliniki", para: para("Дерматологическим клиникам с лечебным и косметическим направлением: ", ["сайт для дерматолога", "/ru/sait-dlya-dermatologa"], ".") },
  { lang: "ru", slug: "sait-kliniki-kosmetologii", para: para("Клиникам, где лечение кожи и косметология ведут дерматологи: ", ["сайт для дерматолога", "/ru/sait-dlya-dermatologa"], ".") },
  { lang: "ru", slug: "sait-dlya-yazykovoy-shkoly", para: para("Частным детским садам и центрам раннего развития: ", ["сайт для детского сада", "/ru/sait-dlya-detskogo-sada"], ".") },
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
    // older pages have no guide block and start with heading-only text blocks — take the one with the most paragraphs
    const paras = (x) => (x.content || []).filter((y) => !/^h[1-6]$/.test(y.style || "")).length;
    const b = blocks.find((x) => x.layout === "guide") || [...blocks].sort((x, y) => paras(y) - paras(x))[0];
    if (!b || !(b.content || []).length) { console.log(`warn  ${t.lang} «${t.slug}»: no text block — sentence skipped`); continue; }
    if (blocks.some((x) => (x.content || []).some((y) => plain(y) === plain(t.para)))) { console.log(`skip  ${t.lang} «${t.slug}»: sentence already there`); continue; }
    // a text block may end with a heading that introduces the next block — never put the sentence under it
    let end = b.content.length;
    while (end > 0 && (/^h[1-6]$/.test(b.content[end - 1].style || "") || !plain(b.content[end - 1]).trim())) end--;
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
