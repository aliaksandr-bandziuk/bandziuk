// scripts/link-ai-coding-agent-links.cjs
//
// Inbound links for «Your AI Coding Agent Cannot Tell You the Site Is Failing»,
// published 13.11.2026 in EN, PL and RU.
//
// One donor per language: the SEO audit page. The reader there is already buying
// the thing this article argues for — somebody from outside asking what the build
// costs — and the audit page lists the questions an audit answers, which is the
// exact paragraph this insert extends.
//
// The second inbound link comes from the companion article «Vibe coding in
// production» and was added with its own text, not here.
//
// Anchors read off the live pages on 13.11.2026.
//
// Usage:
//   node scripts/link-ai-coding-agent-links.cjs            dry run
//   node scripts/link-ai-coding-agent-links.cjs --apply    writes
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
    id: "0e071d28-ee05-42a2-81a6-5be75b4264bc",
    where: "/services/seo-audit",
    href: "/blog/ai-coding-agent-needs-a-specialist",
    anchor:
      "An audit answers a narrow set of questions precisely: why the pages you already have are not ranking, which of them have potential and which are dead weight, what is technically blocking indexation, and what a realistic order of work looks like. Those answers are worth having before money goes into content or links, because most wasted SEO budget is spent doing correct work on the wrong pages.",
    insert:
      "On a site built by an AI coding agent the list is the same, with one addition: whether the agent's own content rules even allow the pages to contain the words they are found by. [[What that looked like on a site where nobody checked|/blog/ai-coding-agent-needs-a-specialist]], with the measurements.",
  },
  {
    id: "8b7c6b4c-412c-4fa1-b8f8-ec0a1b2816b5",
    where: "/pl/oferty/audyt-seo-strony-internetowej",
    href: "/pl/blog/agent-ai-potrzebuje-specjalisty",
    anchor:
      "Audyt precyzyjnie odpowiada na wąski zestaw pytań: dlaczego nie rankują strony, które już macie, które z nich mają potencjał, a które są martwym balastem, co technicznie blokuje indeksację i w jakiej kolejności rozsądnie prowadzić prace. Te odpowiedzi warto mieć, zanim pieniądze pójdą w treści albo linki: większość zmarnowanego budżetu SEO to poprawna praca wykonana na niewłaściwych stronach.",
    insert:
      "Na stronie zbudowanej przez agenta AI lista pytań jest ta sama, z jednym dodatkiem: czy reguły treści, które agent napisał sam sobie, w ogóle pozwalają podstronom zawierać słowa, po których są znajdowane. [[Jak to wyglądało tam, gdzie nikt tego nie sprawdził|/pl/blog/agent-ai-potrzebuje-specjalisty]], razem z pomiarami.",
  },
  {
    id: "0ba09f41-cdc6-40b1-8b57-e56ac656e979",
    where: "/ru/uslugi/seo-audit-saita",
    href: "/ru/blog/ii-agent-i-specialist",
    anchor:
      "Аудит точно отвечает на узкий набор вопросов: почему не ранжируются страницы, которые уже есть, у каких из них есть потенциал, а какие — мёртвый груз, что технически мешает индексации и в каком порядке разумно делать работу. Эти ответы стоит иметь до того, как деньги уйдут в контент или ссылки: большая часть потраченного впустую SEO-бюджета — это правильная работа, сделанная не на тех страницах.",
    insert:
      "На сайте, собранном ИИ-агентом, список тот же, с одной добавкой: позволяют ли правила для текстов, которые агент написал сам себе, страницам вообще содержать слова, по которым их находят. [[Как это выглядело там, где никто не проверил|/ru/blog/ii-agent-i-specialist]], вместе с замерами.",
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
