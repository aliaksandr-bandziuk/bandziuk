// scripts/link-limassol-pages.cjs
//
// Inbound links for the two new Limassol pages, /ru/sozdanie-saitov-v-limassole
// and /web-development-limassol.
//
// Why it matters here (06.11.2026). URL Inspection on /ru/sozdanie-saitov-na-kipre
// reads «Crawled — currently not indexed», last crawl 22.09.2026, and the Pages
// report holds 114 URLs Google discovered and never crawled. A new page that
// hangs off the sitemap alone joins that queue. These four links come from the
// pages that are already indexed and already rank for the city: the two Cyprus
// service pages and the two cost articles.
//
// One new paragraph per document, inserted straight after a declared anchor
// paragraph. Nothing existing is rewritten, no heading moves.
//
// Usage:
//   node scripts/link-limassol-pages.cjs            dry run
//   node scripts/link-limassol-pages.cjs --apply    writes
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
    id: "c524242b-5bfe-41a3-ae41-9acd93f64559",
    where: "/ru/sozdanie-saitov-na-kipre",
    href: RU_HREF,
    anchor:
      "Какие языки сайт получит на самом деле, я решаю по данным, а не по привычке: платить за греческую версию незачем, если вашу услугу по-гречески не ищут.",
    insert:
      "Компаниям, которые работают из самого Лимассола, посвящена отдельная страница: [[создание сайтов в Лимассоле|" + RU_HREF + "]].",
  },
  {
    id: "d629bed8-f17a-47df-9ced-ba4c8236a463",
    where: "/web-development-cyprus",
    href: EN_HREF,
    anchor:
      "Which languages a site actually gets is a question I answer with data rather than by habit: there is no point paying for a Greek version if nobody searches your service in Greek.",
    insert:
      "Companies working out of Limassol itself have a page of their own: [[web development in Limassol|" + EN_HREF + "]].",
  },
  {
    id: "996d404e-2638-48ec-95f3-9ef5c06bf74e",
    where: "/ru/blog/skolko-stoit-sozdanie-saita-na-kipre",
    href: RU_HREF,
    anchor:
      "В Лимассоле стоимость обычно выше из-за более активного бизнес-сегмента. В Пафосе и Ларнаке можно встретить более низкие предложения, но часто это шаблонные решения без глубокой структуры.",
    insert:
      "Что это значит для компании, которая работает из Лимассола, разобрано отдельно: [[создание сайтов в Лимассоле|" + RU_HREF + "]].",
  },
  {
    id: "ded57929-434f-4c23-857a-52c1a0814b6e",
    where: "/blog/website-development-cost-in-cyprus",
    href: EN_HREF,
    anchor:
      "Limassol projects may have slightly higher budgets due to international positioning and higher competition. However, the cost depends more on project scope than location.",
    insert:
      "What that means for a company working out of Limassol is covered separately: [[web development in Limassol|" + EN_HREF + "]].",
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
