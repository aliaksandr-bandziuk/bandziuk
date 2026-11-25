// scripts/link-hair-transplant-pages.cjs
//
// Inbound links for the three hair transplant clinic pages created 25.11.2026:
//   /seo-for-hair-transplant-clinics
//   /pl/pozycjonowanie-strony-kliniki-przeszczepu-wlosow
//   /ru/prodvizhenie-saita-kliniki-peresadki-volos
//
// The menu gives each of them one link; that is not enough, and we learned it
// the expensive way on 05.11, when twenty fresh pages turned out to be
// orphans. Two donors per language, both of them the nearest already-indexed
// neighbours, SEO pages pointing at an SEO page:
//
//   plastic surgeons — the strongest neighbour in the data: 319 impressions
//   and position 30.4 over 28 days. The anchor sits at the end of its
//   medical-tourism section, which is the same travelling patient this page is
//   written for. The intent check says they are separate pages (0 shared
//   domains in the top twenty), so the link is a boundary, not a duplicate.
//
//   dermatologists — hair loss as a medical condition belongs to dermatology,
//   and that page's condition-pages heading names it outright. The anchor is
//   the last paragraph of that section, so the insert closes it by pointing
//   past medicine to surgery.
//
// Anchors read off the fixtures the three donor pages were published from,
// 25.11.2026; the script refuses to write if an anchor is not found exactly
// once, if the donor already links to the target, or if the donor has an
// unpublished draft.
//
// Document ids are tried as singlepage-<group>[.lang] and, when that misses,
// resolved by a query on slug[$lang].current + language — the fix for 07.11,
// when six of fifteen inserts failed because the id pattern only holds for
// pages created by create-landing.cjs.
//
// One new paragraph per document, inserted straight after the anchor
// paragraph. Nothing existing is rewritten, no heading moves.
//
// Usage:
//   node scripts/link-hair-transplant-pages.cjs            dry run
//   node scripts/link-hair-transplant-pages.cjs --apply    writes

const path = require("path");
const { createClient } = require("@sanity/client");
const { blockFromMarkup } = require("./lib/portable-text-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");

const TARGET = {
  en: { href: "/seo-for-hair-transplant-clinics", slug: "seo-for-hair-transplant-clinics" },
  pl: { href: "/pl/pozycjonowanie-strony-kliniki-przeszczepu-wlosow", slug: "pozycjonowanie-strony-kliniki-przeszczepu-wlosow" },
  ru: { href: "/ru/prodvizhenie-saita-kliniki-peresadki-volos", slug: "prodvizhenie-saita-kliniki-peresadki-volos" },
};

const LINKS = [
  {
    lang: "en",
    id: "singlepage-seo-for-plastic-surgeons",
    slug: "seo-for-plastic-surgeons",
    where: "/seo-for-plastic-surgeons",
    anchor:
      "For international patients the page exists in their language, and questions about licensing and aftercare abroad are answered as facts.",
    insert:
      "Hair restoration travels the same way and further, and it is a different clinic with a different patient: [[SEO for hair transplant clinics|/seo-for-hair-transplant-clinics]].",
  },
  {
    lang: "pl",
    id: "singlepage-seo-for-plastic-surgeons.pl",
    slug: "pozycjonowanie-strony-chirurga-plastycznego",
    where: "/pl/pozycjonowanie-strony-chirurga-plastycznego",
    anchor:
      "Każdy język ma osobne podstrony z własnymi adresami i frazami, a nie automatyczne tłumaczenie. To samo dotyczy Polonii, która wraca na operację do kraju i szuka po polsku z nazwą miasta.",
    insert:
      "Przeszczep włosów jeździ tak samo i dalej, a to inna klinika i inny pacjent: [[pozycjonowanie strony kliniki przeszczepu włosów|/pl/pozycjonowanie-strony-kliniki-przeszczepu-wlosow]].",
  },
  {
    lang: "ru",
    id: "singlepage-seo-for-plastic-surgeons.ru",
    slug: "prodvizhenie-saita-plasticheskogo-hirurga",
    where: "/ru/prodvizhenie-saita-plasticheskogo-hirurga",
    anchor:
      "У каждого языка — свои страницы со своими адресами и запросами: русский, местный язык и английский, в Израиле — иврит, в ОАЭ — арабский. Приём на русском языке — сам по себе причина выбрать клинику, поэтому он назван в заголовках и в карточках.",
    insert:
      "За пересадкой волос пациент летит так же и дальше, но это другая клиника и другой пациент: [[продвижение сайта клиники пересадки волос|/ru/prodvizhenie-saita-kliniki-peresadki-volos]].",
  },
  {
    lang: "en",
    id: "singlepage-seo-for-dermatologists",
    slug: "seo-for-dermatologists",
    where: "/seo-for-dermatologists",
    anchor:
      "Parents search for “baby eczema specialist” or “birthmark doctor for kids”. They need to see that the practice treats children, from what age, which dermatologist sees them and how a first visit works for a child.",
    insert:
      "Hair loss is on that list, and when a patient moves from treating it to transplanting, that is a surgical clinic with its own page: [[SEO for hair transplant clinics|/seo-for-hair-transplant-clinics]].",
  },
  {
    lang: "pl",
    id: "singlepage-seo-for-dermatologists.pl",
    slug: "pozycjonowanie-strony-gabinetu-dermatologicznego",
    where: "/pl/pozycjonowanie-strony-gabinetu-dermatologicznego",
    anchor:
      "Rodzice wpisują „dermatolog dziecięcy”, „AZS u niemowlaka”, „naczyniak u dziecka”. Chcą wiedzieć, od jakiego wieku przyjmujecie, który lekarz bada dzieci i jak wygląda taka wizyta.",
    insert:
      "Łysienie jest na tej liście, a gdy pacjent przechodzi od leczenia do przeszczepu, to już klinika chirurgiczna z własną podstroną: [[pozycjonowanie strony kliniki przeszczepu włosów|/pl/pozycjonowanie-strony-kliniki-przeszczepu-wlosow]].",
  },
  {
    lang: "ru",
    id: "singlepage-seo-for-dermatologists.ru",
    slug: "prodvizhenie-dermatologicheskoy-kliniki",
    where: "/ru/prodvizhenie-dermatologicheskoy-kliniki",
    anchor:
      "Родители ищут «детский дерматолог», «дерматит у грудничка», «гемангиома у ребёнка». Им нужно увидеть, с какого возраста вы принимаете детей, какой врач их смотрит и как проходит такой приём.",
    insert:
      "Выпадение волос стоит в этом же списке, а когда пациент переходит от лечения к пересадке — это уже хирургическая клиника со своей страницей: [[продвижение сайта клиники пересадки волос|/ru/prodvizhenie-saita-kliniki-peresadki-volos]].",
  },
];

const textOf = (block) => (block.children || []).map((c) => c.text || "").join("");

/** Every array that holds a block whose text equals `text`, with its index. */
function findSpots(node, text, found = []) {
  if (Array.isArray(node)) {
    node.forEach((item, i) => {
      if (item && item._type === "block" && textOf(item) === text) found.push({ arr: node, index: i });
      findSpots(item, text, found);
    });
    return found;
  }
  if (node && typeof node === "object") {
    for (const k of Object.keys(node)) {
      if (k.startsWith("_") && k !== "_type") continue;
      findSpots(node[k], text, found);
    }
  }
  return found;
}

/** True when any block in the value already links to href. */
function hasLink(node, href) {
  if (Array.isArray(node)) return node.some((item) => hasLink(item, href));
  if (node && typeof node === "object") {
    if (Array.isArray(node.markDefs) && node.markDefs.some((m) => m && m.href === href)) return true;
    for (const k of Object.keys(node)) {
      if (k.startsWith("_") && k !== "_type") continue;
      if (hasLink(node[k], href)) return true;
    }
  }
  return false;
}

/**
 * The id pattern singlepage-<group>[.lang] only holds for pages created by
 * create-landing.cjs. Older pages carry a different id, so fall back to what
 * actually guarantees the URL: the slug for that language.
 */
async function resolveDoc(link) {
  const byId = await client.getDocument(link.id);
  if (byId) return { doc: byId, id: link.id, how: "id" };
  const found = await client.fetch(
    `*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug][0]`,
    { lang: link.lang, slug: link.slug },
  );
  if (found) return { doc: found, id: found._id, how: "slug" };
  return { doc: null };
}

async function targetExists(lang) {
  const t = TARGET[lang];
  const found = await client.fetch(
    `*[_type == "singlepage" && !(_id in path("drafts.**")) && language == $lang && slug[$lang].current == $slug][0]._id`,
    { lang, slug: t.slug },
  );
  return Boolean(found);
}

async function main() {
  // A link into a page that is not published yet is a link into nowhere.
  for (const lang of Object.keys(TARGET)) {
    if (!(await targetExists(lang))) {
      console.error(`Aborting — the ${lang.toUpperCase()} target ${TARGET[lang].href} is not a published page.`);
      process.exit(1);
    }
  }
  console.log("All three targets are published.\n");

  let written = 0;
  let skipped = 0;
  const failed = [];

  for (const link of LINKS) {
    const href = TARGET[link.lang].href;
    const { doc, id, how } = await resolveDoc(link);
    if (!doc) {
      failed.push(`${link.where}: no document found by id ${link.id} or by slug ${link.slug}`);
      continue;
    }
    if (how === "slug") console.log(`${link.where}: id ${link.id} missed, resolved by slug to ${id}`);

    const draft = await client.getDocument(`drafts.${id.replace(/^drafts\./, "")}`);
    if (draft) {
      failed.push(`${link.where}: the document has an unpublished draft — publish or discard it first`);
      continue;
    }

    if (hasLink(doc.contentBlocks, href)) {
      console.log(`${link.where} -> ${href}\n  already applied, skipping\n`);
      skipped += 1;
      continue;
    }

    const spots = findSpots(doc.contentBlocks, link.anchor);
    if (spots.length !== 1) {
      failed.push(`${link.where}: the anchor paragraph was found ${spots.length} times, expected once`);
      continue;
    }

    console.log(`${link.where} -> ${href}`);
    console.log(`  after: «${link.anchor.slice(0, 70)}…»`);
    console.log(`  insert: «${link.insert.replace(/\[\[([^|\]]+)\|[^\]]+\]\]/, "$1")}»\n`);

    if (!APPLY) continue;

    const blocks = JSON.parse(JSON.stringify(doc.contentBlocks));
    const spot = findSpots(blocks, link.anchor)[0];
    spot.arr.splice(spot.index + 1, 0, blockFromMarkup(link.insert));

    await client.patch(id).ifRevisionId(doc._rev).set({ contentBlocks: blocks }).commit();

    const after = await client.getDocument(id);
    if (!hasLink(after.contentBlocks, href)) {
      failed.push(`${link.where}: written, but the re-read does not contain the link`);
      continue;
    }
    console.log("  written and re-read OK\n");
    written += 1;
  }

  if (failed.length) {
    console.log("Problems:");
    failed.forEach((f) => console.log(`  ${f}`));
  }
  console.log(APPLY
    ? `Done: ${written} written, ${skipped} already applied, ${failed.length} failed.`
    : `Dry run — nothing written. ${LINKS.length - skipped - failed.length} would be inserted. Add --apply to write.`);
  if (failed.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
