// scripts/fix-redesign-article-headings-ru-pl.cjs
//
// The same rework already applied to the English article on 06.11.2026 by
// scripts/fix-redesign-article-headings.cjs, now for its Russian and Polish
// versions, which were left behind: both still carry label headings
// («В день переезда», «Из практики», «Сколько это стоит», «Как я это делаю»,
// «W dniu migracji», «Z praktyki», «Ile to kosztuje», «Jak ja to robię»), and
// both are still pitched at traffic rather than at the SEO a client is afraid
// of losing.
//
// Rewrites per document, in one transaction each: seo.metaTitle, the H1 (the
// `title` field) and all nine content H2s. Slugs stay as they are, so no
// redirects are needed; body text, FAQ and figures are untouched.
//
// Usage:
//   node scripts/fix-redesign-article-headings-ru-pl.cjs            dry run
//   node scripts/fix-redesign-article-headings-ru-pl.cjs --apply    writes
const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");

// Keys and current texts read from the Sanity inventory 06.11.2026.
const DOCS = [
  {
    id: "blog-redesign-traffic-loss.ru",
    where: "/ru/blog/redizayn-sayta-bez-poteri-trafika",
    oldMeta: "Редизайн сайта без потери трафика: как не обрушить SEO",
    newMeta: "Редизайн сайта без потери SEO: полный чеклист",
    oldH1: "Редизайн сайта без потери трафика: что проверить до, во время и после",
    newH1: "Редизайн сайта без потери SEO: что проверить до, во время и после",
    h2: [
      ["eddcce5983f2", "Из-за чего трафик падает после редизайна",
       "Почему редизайн сайта роняет позиции и трафик"],
      ["22a498bab12a", "Что сделать до переезда",
       "До редизайна: снять базовые замеры и составить карту всех адресов"],
      ["9815471c8427", "В день переезда",
       "В день запуска: индексация, канонические адреса и 301-редиректы"],
      ["e8f016c88216", "После запуска: что нормально, а что тревожно",
       "После запуска: какое падение позиций нормально, а какое нет"],
      ["f20c191c7e5c", "Из практики",
       "Из практики: переезд с MODX на WordPress с сохранением адресов и позиций"],
      ["2fcdf41fbab1", "Если трафик уже упал",
       "Если редизайн уже стоил трафика: как найти причину"],
      ["450bed7cf52e", "Сколько это стоит",
       "Сколько стоит безопасный редизайн и аудит после падения"],
      ["e29a9afdc87a", "Как я это делаю",
       "Почему разработку и SEO решают вместе на этапе дизайна"],
      ["42ea479b437b", "С чего начать редизайн, чтобы не потерять трафик",
       "С чего начать: замеры, карта редиректов, стейджинг, проверки"],
    ],
  },
  {
    id: "blog-redesign-traffic-loss.pl",
    where: "/pl/blog/redesign-strony-bez-utraty-ruchu",
    oldMeta: "Redesign strony bez utraty ruchu: jak nie zepsuć SEO",
    newMeta: "Redesign strony bez utraty SEO: pełna lista kontrolna",
    oldH1: "Redesign strony bez utraty ruchu: co sprawdzić przed, w trakcie i po",
    newH1: "Redesign strony bez utraty SEO: co sprawdzić przed, w trakcie i po",
    h2: [
      ["230e86c75307", "Dlaczego ruch spada po redesignie",
       "Dlaczego redesign strony obniża pozycje i ruch"],
      ["af2735742dcf", "Co zrobić przed migracją",
       "Przed redesignem: pomiary wyjściowe i mapa wszystkich adresów"],
      ["425e5c28ff74", "W dniu migracji",
       "W dniu uruchomienia: indeksacja, adresy kanoniczne i przekierowania 301"],
      ["a6a614ccbc06", "Po starcie: co jest normalne, a co niepokojące",
       "Po starcie: jaki spadek pozycji jest normalny, a jaki nie"],
      ["fd11ec6b2346", "Z praktyki",
       "Z praktyki: migracja z MODX na WordPress bez utraty adresów i pozycji"],
      ["6f4a183087c1", "Jeśli ruch już spadł",
       "Jeśli redesign już kosztował ruch: jak znaleźć przyczynę"],
      ["c919d68f680c", "Ile to kosztuje",
       "Ile kosztuje bezpieczny redesign i audyt po spadku"],
      ["5b649c9a696f", "Jak ja to robię",
       "Dlaczego development i pozycjonowanie strony ustala się razem na etapie projektu"],
      ["99b0142b6322", "Od czego zacząć redesign, żeby nie stracić ruchu",
       "Od czego zacząć: pomiary, mapa przekierowań, staging, kontrole"],
    ],
  },
];

/** Finds the block with `_key` anywhere in the value; returns the block. */
function findBlock(node, key) {
  if (Array.isArray(node)) {
    for (const item of node) {
      const hit = findBlock(item, key);
      if (hit) return hit;
    }
    return null;
  }
  if (node && typeof node === "object") {
    if (node._type === "block" && node._key === key) return node;
    for (const k of Object.keys(node)) {
      if (k.startsWith("_") && k !== "_type") continue;
      const hit = findBlock(node[k], key);
      if (hit) return hit;
    }
  }
  return null;
}

const textOf = (block) => (block.children || []).map((c) => c.text || "").join("");

async function handle(entry) {
  console.log(`── ${entry.where}`);

  if (entry.newMeta.length > 60) {
    console.log(`  ABORT: the new metaTitle is ${entry.newMeta.length} characters, the limit is 60.`);
    return "failed";
  }
  if (entry.newMeta === entry.newH1) {
    console.log("  ABORT: the new metaTitle equals the new H1.");
    return "failed";
  }

  const draft = await client.getDocument(`drafts.${entry.id}`);
  if (draft) {
    console.log(`  ABORT: ${entry.id} has an unpublished draft; publish or discard it first.`);
    return "failed";
  }

  const doc = await client.getDocument(entry.id);
  if (!doc) {
    console.log(`  ABORT: document ${entry.id} not found.`);
    return "failed";
  }

  const meta = (doc.seo && doc.seo.metaTitle) || "";
  const h1 = doc.title || "";

  const rows = [];
  for (const [key, oldText, newText] of entry.h2) {
    const block = findBlock(doc.contentBlocks, key);
    if (!block) {
      console.log(`  ABORT: no block with _key ${key} in contentBlocks.`);
      return "failed";
    }
    if (block.style !== "h2") {
      console.log(`  ABORT: block ${key} has style «${block.style}», expected h2.`);
      return "failed";
    }
    if ((block.children || []).length !== 1) {
      console.log(`  ABORT: block ${key} has ${block.children.length} spans, expected 1.`);
      return "failed";
    }
    rows.push({ key, oldText, newText, current: textOf(block) });
  }

  if (meta === entry.newMeta && h1 === entry.newH1 && rows.every((r) => r.current === r.newText)) {
    console.log("  Nothing to do: already applied.\n");
    return "skipped";
  }

  const bad = [];
  if (meta !== entry.oldMeta && meta !== entry.newMeta) bad.push(`metaTitle: «${meta}»`);
  if (h1 !== entry.oldH1 && h1 !== entry.newH1) bad.push(`H1: «${h1}»`);
  for (const r of rows) {
    if (r.current !== r.oldText && r.current !== r.newText) bad.push(`${r.key}: «${r.current}»`);
  }
  if (bad.length) {
    console.log("  ABORT: the current text is neither the old nor the new version:");
    bad.forEach((b) => console.log(`    ${b}`));
    return "failed";
  }

  console.log(`  metaTitle (${entry.newMeta.length}) «${meta}»\n    -> «${entry.newMeta}»`);
  console.log(`  H1 «${h1}»\n    -> «${entry.newH1}»`);
  rows.forEach((r) => {
    const mark = r.current === r.newText ? "done" : "  ->";
    console.log(`  h2 «${r.current}»\n    ${mark} «${r.newText}»`);
  });

  if (!APPLY) {
    console.log("");
    return "pending";
  }

  // Patching nested spans by GROQ path is brittle, so contentBlocks is rewritten
  // from a copy with exactly the nine heading texts changed. Blocks are located
  // by _key, so nothing else can move.
  const blocks = JSON.parse(JSON.stringify(doc.contentBlocks));
  for (const [key, , newText] of entry.h2) {
    findBlock(blocks, key).children[0].text = newText;
  }

  await client
    .patch(entry.id)
    .ifRevisionId(doc._rev)
    .set({ title: entry.newH1, "seo.metaTitle": entry.newMeta, contentBlocks: blocks })
    .commit();

  const after = await client.getDocument(entry.id);
  const problems = [];
  if (((after.seo && after.seo.metaTitle) || "") !== entry.newMeta) problems.push("metaTitle");
  if ((after.title || "") !== entry.newH1) problems.push("H1");
  for (const [key, , newText] of entry.h2) {
    const block = findBlock(after.contentBlocks, key);
    if (!block || textOf(block) !== newText) problems.push(key);
  }
  if (problems.length) {
    console.log(`  WARNING — re-read does not match what was written: ${problems.join(", ")}\n`);
    return "failed";
  }
  console.log("  Written; self-check: all eleven texts re-read as expected.\n");
  return "written";
}

async function main() {
  const tally = { written: 0, skipped: 0, failed: 0, pending: 0 };
  for (const entry of DOCS) tally[await handle(entry)] += 1;

  console.log(APPLY
    ? `Done: ${tally.written} written, ${tally.skipped} already applied, ${tally.failed} failed.`
    : `Dry run — nothing written. ${tally.pending} document(s) would change, ${tally.failed} would abort. Add --apply to write.`);
  if (tally.failed) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
