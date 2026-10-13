// scripts/link-llms-generator.cjs
//
// Internal links for the llms.txt cluster.
//
// Why: /tools/llms-txt-generator reached the sitemap only on 2026-10-13 and had
// exactly one inbound internal link — from the English article that describes
// it. The Polish and Russian twins of that article carry no links in their body
// at all, and the Russian AI-readiness service page is missing the sentence that
// its English and Polish versions both have.
//
// Three edits, each one paragraph:
//   1. PL article → the Polish generator page
//   2. RU article → the Russian generator page
//   3. RU "Подготовка сайта к ИИ-поиску" → the Russian article (parity with
//      EN/PL, which link to their own locale's article). There is no Russian
//      answer-engine-optimization page, so the other EN link has no RU twin and
//      is not a gap.
//
// Anchor text carries the term on purpose: "llms txt generator" is the one
// query in this cluster a tool page can win, and the first result for the head
// term is a competitor's free generator.
//
// Usage:
//   node scripts/link-llms-generator.cjs --dry-run
//   node scripts/link-llms-generator.cjs

const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const DRY = process.argv.includes("--dry-run");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const key = () => crypto.randomBytes(6).toString("hex");

/** A paragraph with one link: text before, the anchor, text after. */
function linked(before, anchor, href, after) {
  const dk = key();
  return {
    _type: "block",
    _key: key(),
    style: "normal",
    markDefs: [{ _type: "link", _key: dk, href }],
    children: [
      { _type: "span", _key: key(), text: before, marks: [] },
      { _type: "span", _key: key(), text: anchor, marks: [dk] },
      { _type: "span", _key: key(), text: after, marks: [] },
    ].filter((s) => s.text !== ""),
  };
}

const EDITS = [
  {
    id: "blog-llms-txt.pl",
    blockIndex: 0,
    after: 31, // closes "Plik jest pomyślany jako ułożony spis treści…"
    paragraph: linked(
      "Jeśli zdecydujecie się wdrożyć plik, nie trzeba pisać go ręcznie: mam ",
      "darmowy generator llms.txt",
      "/pl/tools/llms-txt-generator",
      " — czyta Wasz sitemap, grupuje podstrony w sekcje i zwraca gotowy plik do edycji i pobrania. Tytuły bierze z adresów podstron, więc przed publikacją warto przejść je raz ręcznie: to właśnie opisy decydują, czy plik jest użyteczny, czy tylko poprawny.",
    ),
  },
  {
    id: "blog-llms-txt.ru",
    blockIndex: 0,
    after: 31, // closes "Файл задуман как составленное оглавление…"
    paragraph: linked(
      "Если решите ставить файл, собирать его руками не обязательно: у меня есть ",
      "бесплатный генератор llms.txt",
      "/ru/tools/llms-txt-generator",
      " — он читает ваш sitemap, группирует страницы по разделам и отдаёт готовый файл, который можно поправить и скачать. Заголовки он берёт из адресов страниц, поэтому перед публикацией их стоит один раз пройти руками: именно описания отличают полезный файл от просто корректного.",
    ),
  },
  {
    id: "service-ai-search-readiness.ru",
    blockIndex: 2,
    after: 16, // after the AI-Ready SEO & GEO link, as in the EN page
    paragraph: linked(
      "Об одном файле клиенты спрашивают чаще всего, и у него есть отдельный разбор: ",
      "нужен ли сайту файл llms.txt",
      "/ru/blog/nuzhen-li-saitu-fail-llms-txt",
      ".",
    ),
  },
];

const flat = (b) => (b.children || []).map((c) => c.text).join("");

(async () => {
  for (const edit of EDITS) {
    const doc = await client.fetch("*[_id==$id][0]{_id,title,language,contentBlocks}", {
      id: edit.id,
    });
    if (!doc) throw new Error(`${edit.id} not found`);

    const cb = doc.contentBlocks?.[edit.blockIndex];
    if (!cb || cb._type !== "textContent") {
      throw new Error(`${edit.id}: contentBlocks[${edit.blockIndex}] is not a textContent`);
    }

    const content = [...(cb.content || [])];
    const anchorBlock = content[edit.after];
    if (!anchorBlock) throw new Error(`${edit.id}: no block at ${edit.after}`);

    const href = edit.paragraph.markDefs[0].href;
    const already = JSON.stringify(content).includes(href);
    if (already) {
      console.log(`${edit.id}: already links to ${href} — skipped`);
      continue;
    }

    console.log(`=== ${edit.id} (${doc.language}) — ${doc.title}`);
    console.log(`    after [${edit.blockIndex}.${edit.after}]: ${flat(anchorBlock).slice(0, 90)}…`);
    console.log(`    insert: ${flat(edit.paragraph).slice(0, 140)}…`);
    console.log(`    link  : ${href}`);

    content.splice(edit.after + 1, 0, edit.paragraph);

    if (!DRY) {
      const blocks = [...doc.contentBlocks];
      blocks[edit.blockIndex] = { ...cb, content };
      await client.patch(doc._id).set({ contentBlocks: blocks }).commit();
      console.log(`    written (${content.length} blocks in that textContent)`);
    }
    console.log("");
  }

  console.log(
    DRY
      ? "Dry run — nothing was written."
      : "Done. Blog and singlepage are in the webhook filter, so a publish-side revalidation is not needed here: patch via API does not fire it. Revalidate by hand if the change should appear before the daily refresh.",
  );
})().catch((e) => {
  console.error("\n" + (e.message || e));
  process.exitCode = 1;
});
