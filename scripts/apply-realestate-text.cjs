// scripts/apply-realestate-text.cjs
//
// Добавляет блок textContent шести страницам кластера недвижимости.
// Причина: у них 270–372 слова против 950–1370 у соседних лендингов и ни одного
// блока сплошного текста — профиль, который Google складывает в «просканирована,
// но не проиндексирована». Ниша при этом та, где кейсы самые сильные.
//
//   node scripts/apply-realestate-text.cjs          → сухой прогон
//   node scripts/apply-realestate-text.cjs --apply  → применяет
//
// Блок вставляется ПОСЛЕ gridBlock: сначала «что вы получите», затем разбор,
// затем форма и FAQ. Существующие блоки не трогаются и не переупорядочиваются.
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
const { markdownToPortableText, key } = require("./lib/markdown-to-portable-text.cjs");
const { insertInlineLink } = require("./lib/portable-text-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const TEXTS = require("./realestate-text-blocks.cjs");

const SLUG_PROJ = `select(language=='en'=>slug.en.current, language=='pl'=>slug.pl.current, language=='ru'=>slug.ru.current)`;

async function main() {
  const report = [];
  const say = (l = "") => { console.log(l); report.push(l); };
  let applied = 0;

  for (const item of TEXTS) {
    const doc = await client.fetch(
      `*[_type == "singlepage" && language == $lang && ${SLUG_PROJ} == $slug][0]`,
      { lang: item.lang, slug: item.docSlug }
    );
    if (!doc) { say(`! НЕ НАЙДЕН [${item.lang}] ${item.docSlug}`); continue; }

    const blocks = doc.contentBlocks || [];
    const serialized = JSON.stringify(blocks);

    // Идемпотентность: маркер — фраза из заголовка H2, которой на странице быть не может,
    // пока блок не добавлен.
    if (serialized.includes(item.marker)) {
      say(`— текст уже добавлен, пропускаю: [${item.lang}] ${item.docSlug}`);
      continue;
    }

    const gridIdx = blocks.findIndex((b) => b._type === "gridBlock");
    if (gridIdx === -1) { say(`! нет gridBlock, некуда вставлять: [${item.lang}] ${item.docSlug}`); continue; }

    // markdownToPortableText не разбирает [text](url) — вынимаем ссылки заранее,
    // а после конвертации проставляем их проверенным insertInlineLink.
    const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
    const wanted = [...item.md.matchAll(linkRe)].map((m) => ({ anchor: m[1], href: m[2] }));
    const plainMd = item.md.replace(linkRe, "$1");

    let content = markdownToPortableText(plainMd);
    for (const l of wanted) content = insertInlineLink(content, l.anchor, l.href);

    const newBlock = { _key: key(), _type: "textContent", content };

    const updated = [...blocks.slice(0, gridIdx + 1), newBlock, ...blocks.slice(gridIdx + 1)];

    const h2 = content.filter((b) => b.style === "h2").length;
    const h3 = content.filter((b) => b.style === "h3").length;
    const paras = content.filter((b) => b.style === "normal").length;
    const links = JSON.stringify(content).match(/"href"/g) || [];

    say(`\n${"=".repeat(70)}\n[${item.lang}] ${item.docSlug}  (${doc._id})`);
    say(`  вставляется после блока: ${blocks[gridIdx]._type} (позиция ${gridIdx + 1} из ${blocks.length})`);
    say(`  H2: ${h2}, H3: ${h3}, абзацев: ${paras}, ссылок: ${links.length}`);
    say(`  слов: ${item.md.split(/\s+/).length}`);
    say(`  первый заголовок: ${(content.find((b) => b.style === "h2")?.children || []).map((c) => c.text).join("")}`);
    say(`  ожидалось ссылок: ${wanted.length}, проставлено: ${links.length}`);
    if (h2 < 1 || links.length !== wanted.length) { say("  ! разметка выглядит неверно, пропускаю"); continue; }

    if (APPLY) {
      await client.patch(doc._id).set({ contentBlocks: updated }).commit();
      say("  → применено");
      applied++;
    }
  }

  say(`\nЗапланировано: ${TEXTS.length}. Применено: ${applied}.`);
  if (!APPLY) say("Это сухой прогон. Применить: node scripts/apply-realestate-text.cjs --apply");
  const rp = path.resolve(__dirname, APPLY ? "../drafts/realestate-text-applied.txt" : "../drafts/realestate-text-dry-run.txt");
  fs.writeFileSync(rp, report.join("\n"), "utf8");
  console.log(`\nОтчёт: drafts/${APPLY ? "realestate-text-applied.txt" : "realestate-text-dry-run.txt"}`);
}

main().catch((e) => { console.error("Ошибка:", e.message); process.exit(1); });
