// scripts/link-bank-pages.cjs
//
// Inbound links for the six bank pages created 07.11.2026:
// /seo-for-banks, /pl/pozycjonowanie-strony-banku, /ru/prodvizhenie-saita-banka
// and /bank-website-design, /pl/strona-internetowa-dla-banku,
// /ru/sait-dlya-banka.
//
// The menu gives each of them one link; that is not enough, and we learned it
// the expensive way on 05.11, when twenty fresh pages turned out to be
// orphans. The donors here are the nearest neighbours that are already
// indexed: mortgage brokers and financial advisers, SEO pages pointing at the
// SEO page and website pages at the website page, in each language.
//
// One new paragraph per document, inserted straight after a declared anchor
// paragraph. Nothing existing is rewritten, no heading moves.
//
// Usage:
//   node scripts/link-bank-pages.cjs            dry run
//   node scripts/link-bank-pages.cjs --apply    writes
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
    id: "singlepage-mortgage-broker-seo",
    where: "/mortgage-broker-seo",
    href: "/seo-for-banks",
    anchor:
      "Yes. All the work is remote and in English. My afternoon and evening in Central European Time overlap with the US working day, so calls fit East Coast and Central mornings. Contracts and invoices are in EUR.",
    insert:
      "Search work for a bank rather than a brokerage is a different job, with compliance in the middle of it: [[SEO for banks|/seo-for-banks]].",
  },
  {
    id: "singlepage-mortgage-broker-seo.pl",
    where: "/pl/pozycjonowanie-strony-posrednika-kredytowego",
    href: "/pl/pozycjonowanie-strony-banku",
    anchor:
      "Tak, z całej Polski. Pozycjonowanie robię zdalnie, na danych wyszukiwań dla Waszego miasta, a rozmawiamy przez wideo po polsku, angielsku albo rosyjsku.",
    insert:
      "Jeśli jesteście bankiem, a nie pośrednikiem, to osobny temat: [[pozycjonowanie strony banku|/pl/pozycjonowanie-strony-banku]].",
  },
  {
    id: "singlepage-financial-advisor-seo.ru",
    where: "/ru/prodvizhenie-saita-finansovogo-konsultanta",
    href: "/ru/prodvizhenie-saita-banka",
    anchor:
      "Да. Работа удалённая, на русском, английском или польском. Кипр на час впереди Варшавы, Дубай — на два-три часа, Казахстан — на несколько, поэтому созвоны удобно ставить на утро и день по Варшаве. Договор и счета — в евро.",
    insert:
      "Если вы банк, а не консультант, работа устроена иначе — там в середине стоит согласование: [[продвижение сайта банка|/ru/prodvizhenie-saita-banka]].",
  },
  {
    id: "singlepage-financial-advisor-website-design",
    where: "/financial-advisor-website-design",
    href: "/bank-website-design",
    anchor:
      "Design alone does not put a firm into AI answers, but it can keep it out: credentials in images and services hidden in PDFs cannot be read. The design keeps them as text with structured data, and the ongoing visibility work is part of my SEO and GEO service.",
    insert:
      "A bank has the same problem one size larger, with tariffs and terms locked in documents: [[bank website design|/bank-website-design]].",
  },
  {
    id: "singlepage-financial-advisor-website-design.pl",
    where: "/pl/strona-internetowa-dla-doradcy-finansowego",
    href: "/pl/strona-internetowa-dla-banku",
    anchor:
      "Tak, dla doradców z całej Polski. Projekt i wykonanie prowadzę zdalnie, po polsku, angielsku albo rosyjsku, a rozmowy odbywają się online.",
    insert:
      "Dla banków i banków spółdzielczych budowa wygląda inaczej i jest opisana osobno: [[strona internetowa dla banku|/pl/strona-internetowa-dla-banku]].",
  },
  {
    id: "singlepage-financial-advisor-website-design.ru",
    where: "/ru/sait-dlya-finansovogo-konsultanta",
    href: "/ru/sait-dlya-banka",
    anchor:
      "Да, и в Польше, Грузии, Черногории тоже. Работаю удалённо на русском, польском и английском, договор и счета — в евро. Сайт настраивается под вашу страну: языки, формат телефонов, валюта и правила о персональных данных.",
    insert:
      "Для банка сборка устроена иначе: условия хранятся как данные, а документы получают читаемые страницы — [[создание сайта для банка|/ru/sait-dlya-banka]].",
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
