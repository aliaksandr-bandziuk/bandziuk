// scripts/link-new-pages-2026-11-07.cjs
//
// Inbound links for the two pages created 07.11.2026: /web-design-cyprus and
// /ru/uslugi/lokacii/prodvizhenie-na-polskiy-rynok.
//
// Same reason as for the Limassol pair: the Pages report holds 114 URLs Google
// discovered and never crawled, and a new page hanging off the sitemap and the
// menu alone joins that queue. These four links come from pages that are
// already indexed and already rank for the neighbouring query — the Cyprus
// service page, the Cyprus cost article, the Warsaw development page and the
// Russian markets hub, which is this page's own parent.
//
// One new paragraph per document, inserted straight after a declared anchor
// paragraph. Nothing existing is rewritten, no heading moves.
//
// Usage:
//   node scripts/link-new-pages-2026-11-07.cjs            dry run
//   node scripts/link-new-pages-2026-11-07.cjs --apply    writes
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

const RU_HREF = "/ru/sozdanie-saitov-v-limassole";
const EN_HREF = "/web-development-limassol";

const LINKS = [
  {
    id: "d629bed8-f17a-47df-9ced-ba4c8236a463",
    where: "/web-development-cyprus",
    href: "/web-design-cyprus",
    anchor:
      "A business website starts at €2,000, a single-service landing page is €700–1,400, and a redesign that keeps the existing rankings starts at €1,000. The number of service pages, the number of languages and any integration with a system you already run move the price. Design is included rather than quoted separately.",
    insert:
      "What the design part covers, and why it is not a separate invoice: [[web design in Cyprus|/web-design-cyprus]].",
  },
  {
    id: "ded57929-434f-4c23-857a-52c1a0814b6e",
    where: "/blog/website-development-cost-in-cyprus",
    href: "/web-design-cyprus",
    anchor:
      "For a structured approach to professional website development in Cyprus, including Limassol, Paphos, and Larnaca, it is important to define goals first and budget second.",
    insert:
      "If the question is the design rather than the build, that is covered separately: [[web design in Cyprus|/web-design-cyprus]].",
  },
  {
    id: "singlepage-web-development-warsaw.ru",
    where: "/ru/razrabotka-saitov-varshava",
    href: "/ru/uslugi/lokacii/prodvizhenie-na-polskiy-rynok",
    anchor:
      "Разработка сайтов — удалённая работа, и большую её часть действительно можно делать откуда угодно. Поэтому аргумент в пользу местного подрядчика не в близости как таковой, а в наборе вещей, которых удалённый разработчик обычно не знает.",
    insert:
      "Если задача шире одного города и сайт должен работать на всю страну, об этом отдельная страница: [[продвижение сайта на польский рынок|/ru/uslugi/lokacii/prodvizhenie-na-polskiy-rynok]].",
  },
  {
    id: "singlepage-locations.ru",
    where: "/ru/uslugi/lokacii",
    href: "/ru/uslugi/lokacii/prodvizhenie-na-polskiy-rynok",
    anchor:
      "Если ваш рынок есть в списке ниже — начните с него: страница закрывает вопрос языков, то, что проверяют тамошние покупатели, и то, как устроен проект.",
    insert:
      "Польский рынок в списке теперь тоже есть: [[продвижение сайта в Польше|/ru/uslugi/lokacii/prodvizhenie-na-polskiy-rynok]].",
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

async function main() {
  let written = 0;
  let skipped = 0;
  const failed = [];

  for (const link of LINKS) {
    const doc = await client.getDocument(link.id);
    if (!doc) {
      failed.push(`${link.where}: document ${link.id} not found`);
      continue;
    }
    if (hasLink(doc.contentBlocks, link.href)) {
      console.log(`${link.where} -> ${link.href}\n  already applied, skipping\n`);
      skipped += 1;
      continue;
    }

    const spots = findSpots(doc.contentBlocks, link.anchor);
    if (spots.length !== 1) {
      failed.push(`${link.where}: the anchor paragraph was found ${spots.length} times, expected once`);
      continue;
    }

    console.log(`${link.where} -> ${link.href}`);
    console.log(`  after: «${link.anchor.slice(0, 70)}…»`);
    console.log(`  insert: «${link.insert.replace(/\[\[([^|\]]+)\|[^\]]+\]\]/, "$1")}»\n`);

    if (!APPLY) continue;

    const blocks = JSON.parse(JSON.stringify(doc.contentBlocks));
    const spot = findSpots(blocks, link.anchor)[0];
    spot.arr.splice(spot.index + 1, 0, blockFromMarkup(link.insert));

    await client.patch(link.id).ifRevisionId(doc._rev).set({ contentBlocks: blocks }).commit();

    const after = await client.getDocument(link.id);
    if (!hasLink(after.contentBlocks, link.href)) {
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
