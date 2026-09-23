// scripts/link-giuseppeiannone.cjs
//
// Перелинковка кейса giuseppeiannone.it во всех трёх локалях.
//
//   node scripts/link-giuseppeiannone.cjs            → сухой прогон, ничего не пишет
//   node scripts/link-giuseppeiannone.cjs --apply    → применяет
//   node scripts/link-giuseppeiannone.cjs --only outbound|inbound
//
// Две стороны связки, план лежит отдельно в giuseppeiannone-links-plan.json:
//
//   outbound — ссылки ИЗ кейса. Анкор уже есть в тексте кейса, новый текст не
//   пишется: существующая фраза просто становится ссылкой. Если анкор не найден
//   или встречается дважды, скрипт ругается и пропускает связку, а не угадывает.
//
//   inbound — ссылки НА кейс. В конец первого блока textContent целевой страницы
//   добавляется один короткий абзац с названием кейса в качестве анкора. Чужие
//   абзацы не переписываются: добавленное предложение видно и легко откатить.
//
// Поля разные у разных типов: у портфолио — mainContent, у страниц и статей —
// contentBlocks. Оба состоят из объектов textContent с массивом content.
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
const { insertInlineLink, key } = require("./lib/portable-text-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const onlyIdx = process.argv.indexOf("--only");
const ONLY = onlyIdx > -1 ? process.argv[onlyIdx + 1] : null;

const PLAN = require("./giuseppeiannone-links-plan.json");

function newParagraph(text) {
  return {
    _key: key(),
    _type: "block",
    style: "normal",
    markDefs: [],
    children: [{ _key: key(), _type: "span", text, marks: [] }],
  };
}

const report = [];
const say = (l = "") => {
  console.log(l);
  report.push(l);
};

// ------------------------------------------------------------- outbound --

async function runOutbound() {
  let applied = 0;
  say(`\n${"#".repeat(70)}\nССЫЛКИ ИЗ КЕЙСА\n${"#".repeat(70)}`);

  for (const lang of ["en", "pl", "ru"]) {
    const { docId } = PLAN.case[lang];
    const doc = await client.getDocument(docId);
    if (!doc) {
      say(`! НЕ НАЙДЕН документ кейса ${docId}`);
      continue;
    }

    for (const item of PLAN.outbound.filter((o) => o.lang === lang)) {
      const blocks = doc.mainContent || [];
      const idx = blocks.findIndex(
        (b) =>
          b._type === "textContent" &&
          (b.content || []).some((c) =>
            (c.children || []).map((s) => s.text || "").join("").includes(item.anchor)
          )
      );
      if (idx === -1) {
        say(`! [${lang}] анкор не найден в кейсе: "${item.anchor}"`);
        continue;
      }
      const content = blocks[idx].content || [];
      const heading = (content[0]?.children || []).map((s) => s.text).join("");

      if (JSON.stringify(content).includes(`"href":"${item.href}"`)) {
        say(`— [${lang}] ссылка на ${item.href} уже стоит, пропускаю`);
        continue;
      }

      let updated;
      try {
        updated = insertInlineLink(content, item.anchor, item.href);
      } catch (e) {
        say(`! [${lang}] ${e.message}`);
        continue;
      }

      say(`\n[${lang}] раздел: ${heading}`);
      say(`  анкор: "${item.anchor}" → ${item.href}  (${item.target})`);

      if (APPLY) {
        await client
          .patch(docId)
          .set({ [`mainContent[_key=="${blocks[idx]._key}"].content`]: updated })
          .commit();
        say(`  → применено`);
        applied++;
      }
      // держим локальную копию документа в актуальном состоянии для следующих связок
      blocks[idx] = { ...blocks[idx], content: updated };
      doc.mainContent = blocks;
    }
  }
  return applied;
}

// -------------------------------------------------------------- inbound --

async function runInbound() {
  let applied = 0;
  say(`\n${"#".repeat(70)}\nССЫЛКИ НА КЕЙС\n${"#".repeat(70)}`);

  for (const item of PLAN.inbound) {
    const { href, title } = PLAN.case[item.lang];
    const doc = await client.getDocument(item.docId);
    if (!doc) {
      say(`! НЕ НАЙДЕН документ ${item.docId} (${item.page})`);
      continue;
    }

    const blocks = doc.contentBlocks || [];
    const idx = blocks.findIndex((b) => b._type === "textContent");
    if (idx === -1) {
      say(`! нет блока textContent: ${item.page}`);
      continue;
    }
    const content = blocks[idx].content || [];

    if (JSON.stringify(content).includes(href) || JSON.stringify(blocks).includes(href)) {
      say(`— уже есть ссылка на кейс, пропускаю: ${item.page}`);
      continue;
    }
    if (!item.text.includes(title)) {
      say(`! в тексте для ${item.page} нет названия кейса — анкор не проставить`);
      continue;
    }

    let updated = [...content, newParagraph(item.text)];
    updated = insertInlineLink(updated, title, href);

    say(`\n[${item.lang}] /${item.page}  (${item.docId})`);
    say(`  абзац: ${item.text}`);
    say(`  анкор: "${title}" → ${href}`);

    if (APPLY) {
      await client
        .patch(item.docId)
        .set({ [`contentBlocks[_key=="${blocks[idx]._key}"].content`]: updated })
        .commit();
      say(`  → применено`);
      applied++;
    }
  }
  return applied;
}

// ------------------------------------------------------------------ main --

async function main() {
  let applied = 0;
  if (ONLY !== "inbound") applied += await runOutbound();
  if (ONLY !== "outbound") applied += await runInbound();

  const planned =
    (ONLY === "inbound" ? 0 : PLAN.outbound.length) +
    (ONLY === "outbound" ? 0 : PLAN.inbound.length);
  say(`\nЗапланировано связок: ${planned}. Применено: ${applied}.`);
  if (!APPLY) say("Это сухой прогон. Применить: node scripts/link-giuseppeiannone.cjs --apply");

  const rp = path.resolve(
    __dirname,
    APPLY ? "../drafts/giuseppeiannone-links-applied.txt" : "../drafts/giuseppeiannone-links-dry-run.txt"
  );
  fs.writeFileSync(rp, report.join("\n"), "utf8");
  console.log(`\nОтчёт: drafts/${path.basename(rp)}`);
}

main().catch((e) => {
  console.error("Ошибка:", e.message);
  process.exit(1);
});
