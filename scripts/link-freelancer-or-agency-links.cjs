// scripts/link-freelancer-or-agency-links.cjs
//
// Inbound links for the article «Freelancer or agency», published 09.11.2026 in
// EN, PL and RU. The article links out to three cost articles and four service
// pages; nothing links back to it yet, and the menu does not carry blog posts.
//
// Two donors per language, both of them pages where the reader is already
// weighing who to hire: the «how much a website costs» article (it describes the
// bands — builder, marketplace freelancer, small studio, agency — but not how to
// choose between them) and the solo-specialist service page (SEO, but the same
// question of one person versus a team).
//
// Anchors were read off the live pages on 09.11.2026 and must match the stored
// paragraph exactly; the script refuses to write if an anchor is not found
// exactly once, or if the donor already links to the article.
//
// One new paragraph per insertion, placed straight after the anchor paragraph.
// Nothing existing is rewritten, no heading moves.
//
// Usage:
//   node scripts/link-freelancer-or-agency-links.cjs            dry run
//   node scripts/link-freelancer-or-agency-links.cjs --apply    writes
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

const LINKS = [
  {
    id: "blog-small-business-website-cost",
    where: "/blog/small-business-website-cost",
    href: "/blog/freelancer-or-agency-for-your-website",
    anchor:
      "A freelancer or a very small studio works out what pages you need, writes or edits the text with you, designs it around your actual services, and builds it. This is my band, and it starts at €700 with design included.",
    insert:
      "Which of the two to hire is a separate decision, and price does not settle it: [[freelancer or agency for your website|/blog/freelancer-or-agency-for-your-website]] sets out what each one sells beyond the work itself, and what to check before you sign.",
  },
  {
    id: "blog-small-business-website-cost.pl",
    where: "/pl/blog/ile-kosztuje-strona-internetowa-dla-firmy",
    href: "/pl/blog/freelancer-czy-agencja-strona-internetowa",
    anchor:
      "Freelancer albo bardzo małe studio ustala, jakich podstron potrzebujesz, pisze albo redaguje z tobą teksty, projektuje stronę wokół twoich rzeczywistych usług i buduje ją. To mój przedział i zaczyna się od 700 € z projektem graficznym w cenie.",
    insert:
      "Którego z nich wybrać, to osobna decyzja i nie rozstrzyga jej sama cena: [[freelancer czy agencja przy stronie internetowej|/pl/blog/freelancer-czy-agencja-strona-internetowa]] pokazuje, co każda ze stron sprzedaje poza samą pracą i co sprawdzić przed zleceniem.",
  },
  {
    id: "blog-small-business-website-cost.ru",
    where: "/ru/blog/skolko-stoit-sozdanie-saita",
    href: "/ru/blog/frilanser-ili-studiya-dlya-saita",
    anchor:
      "Уровни перекрываются на краях, и хороший частный специалист может стоить дороже плохого агентства. Но форма держится: поднимаясь по этой шкале, вы покупаете в основном не качество кода. Вы покупаете количество вовлечённых людей и то, какую часть размышлений за вас сделают.",
    insert:
      "Кого из них нанимать — отдельное решение, и цена его не решает: [[фрилансер или студия для сайта|/ru/blog/frilanser-ili-studiya-dlya-saita]] разбирает, что каждая сторона продаёт сверх самой работы и что проверить в договоре.",
  },
  {
    id: "singlepage-seo-consultant",
    where: "/services/seo-consultant",
    href: "/blog/freelancer-or-agency-for-your-website",
    anchor:
      "I am an SEO consultant: an independent specialist who finds out why a website gets less search traffic than it should, fixes the causes in the site itself and measures what changed. I work alone and remotely from Warsaw, for businesses in Europe, the UK, the US, Cyprus and Israel — so the person who reviews your site is the same person who edits its templates and sends you the report.",
    insert:
      "The same question comes up when a site is being built rather than optimised: [[freelancer or agency for your website|/blog/freelancer-or-agency-for-your-website]] explains when one specialist is the right answer and when an agency is.",
  },
  {
    id: "singlepage-seo-consultant.pl",
    where: "/pl/oferty/freelancer-seo",
    href: "/pl/blog/freelancer-czy-agencja-strona-internetowa",
    anchor:
      "Jestem freelancerem SEO: sam, bez agencji i podwykonawców, sprawdzam, dlaczego strona nie przyciąga ruchu z Google, poprawiam przyczyny bezpośrednio w kodzie i mierzę, co się zmieniło. Pracuję zdalnie z Warszawy, po polsku, angielsku i rosyjsku, dla firm z Polski, innych krajów Europy, Wielkiej Brytanii, USA, Cypru i Izraela.",
    insert:
      "Ten sam wybór wraca, kiedy stronę trzeba zbudować, a nie pozycjonować: [[freelancer czy agencja przy stronie internetowej|/pl/blog/freelancer-czy-agencja-strona-internetowa]] pokazuje, kiedy lepszy jest jeden specjalista, a kiedy agencja.",
  },
  {
    id: "singlepage-seo-consultant.ru",
    where: "/ru/uslugi/chastnyi-seo-specialist",
    href: "/ru/blog/frilanser-ili-studiya-dlya-saita",
    anchor:
      "Я частный SEO-специалист: один человек, который выясняет, почему сайт недополучает трафик из Google, исправляет причины прямо на сайте и показывает в цифрах, что изменилось. Работаю удалённо из Варшавы с компаниями в Европе, Великобритании, США, на Кипре и в Израиле, в том числе с русскоязычным бизнесом, который продаёт на нескольких языках.",
    insert:
      "Тот же выбор возникает, когда сайт нужно сделать, а не продвинуть: [[фрилансер или студия для сайта|/ru/blog/frilanser-ili-studiya-dlya-saita]] разбирает, когда лучше один специалист, а когда студия.",
  },
];

const WORD_FIXES = [];

const textOf = (block) => (block.children || []).map((c) => c.text || "").join("");

/** The language and the slug a donor URL implies — all donors here sit at the root. */
const langOf = (where) => (where.startsWith("/pl/") ? "pl" : where.startsWith("/ru/") ? "ru" : "en");
const slugOf = (where) => where.split("/").filter(Boolean).pop();

/**
 * The donor document. The id is a guess built from the fixture group, which only
 * holds for pages created by create-landing.cjs; older pages carry other ids, so
 * fall back to the slug, which is what the URL actually guarantees.
 */
async function resolveDoc(link) {
  if (link.id) {
    const byId = await client.getDocument(link.id);
    if (byId) return byId;
  }
  const lang = langOf(link.where);
  return client.fetch(
    `*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug && !(_id in path("drafts.**"))][0]`,
    { lang, slug: slugOf(link.where) }
  );
}

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

/** Every block, anywhere in the value, whose text contains `text`. */
function findContaining(node, text, found = []) {
  if (Array.isArray(node)) {
    node.forEach((item) => {
      if (item && item._type === "block" && textOf(item).includes(text)) found.push(item);
      findContaining(item, text, found);
    });
    return found;
  }
  if (node && typeof node === "object") {
    for (const k of Object.keys(node)) {
      if (k.startsWith("_") && k !== "_type") continue;
      findContaining(node[k], text, found);
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
    const doc = await resolveDoc(link);
    if (!doc) {
      failed.push(`${link.where}: no document found by id ${link.id} or by its slug`);
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

    await client.patch(doc._id).ifRevisionId(doc._rev).set({ contentBlocks: blocks }).commit();

    const after = await client.getDocument(doc._id);
    if (!hasLink(after.contentBlocks, link.href)) {
      failed.push(`${link.where}: written, but the re-read does not contain the link`);
      continue;
    }
    console.log("  written and re-read OK\n");
    written += 1;
  }

  for (const fix of WORD_FIXES) {
    const doc = await client.getDocument(fix.id);
    if (!doc) {
      failed.push(`${fix.where}: document ${fix.id} not found`);
      continue;
    }
    if (findContaining(doc.contentBlocks, fix.to).length) {
      console.log(`${fix.where} word fix\n  already applied, skipping\n`);
      skipped += 1;
      continue;
    }
    const hits = findContaining(doc.contentBlocks, fix.from);
    if (hits.length !== 1) {
      failed.push(`${fix.where}: the old wording was found ${hits.length} times, expected once`);
      continue;
    }
    console.log(`${fix.where} word fix`);
    console.log(`  «${fix.from}» -> «${fix.to}»\n`);
    if (!APPLY) continue;

    const blocks = JSON.parse(JSON.stringify(doc.contentBlocks));
    const block = findContaining(blocks, fix.from)[0];
    const idx = (block.children || []).findIndex(
      (c) => c._type === "span" && (!c.marks || c.marks.length === 0) && (c.text || "").includes(fix.from)
    );
    if (idx === -1) {
      failed.push(`${fix.where}: the old wording straddles a mark boundary — not patched`);
      continue;
    }
    block.children[idx] = { ...block.children[idx], text: block.children[idx].text.replace(fix.from, fix.to) };

    await client.patch(fix.id).ifRevisionId(doc._rev).set({ contentBlocks: blocks }).commit();

    const after = await client.getDocument(fix.id);
    if (!findContaining(after.contentBlocks, fix.to).length) {
      failed.push(`${fix.where}: written, but the re-read does not contain the new wording`);
      continue;
    }
    console.log("  written and re-read OK\n");
    written += 1;
  }

  if (failed.length) {
    console.log("Problems:");
    failed.forEach((f) => console.log(`  ${f}`));
  }
  const planned = LINKS.length + WORD_FIXES.length;
  console.log(APPLY
    ? `Done: ${written} written, ${skipped} already applied, ${failed.length} failed.`
    : `Dry run — nothing written. ${planned - skipped - failed.length} would be applied. Add --apply to write.`);
  if (failed.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
