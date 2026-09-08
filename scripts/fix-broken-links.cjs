// scripts/fix-broken-links.cjs
//
// Три битые внутренние ссылки в польских документах + опечатка в заголовке кейса.
// Основание: scripts/analyze-link-graph.cjs после починки резолва путей — из 66
// «нерезолвнутых» ссылок реально битыми оказались три, остальные были артефактом
// самого анализатора.
//
//   node scripts/fix-broken-links.cjs          → сухой прогон
//   node scripts/fix-broken-links.cjs --apply  → применяет
//
// Ссылки правятся точечно: меняется только строка href внутри markDefs, текст
// абзаца и анкор остаются как есть.
const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");

// Куда вели и куда должны вести. Обе цели проверены на localhost: отдают 200.
const HREF_FIXES = [
  {
    docId: "service-local-seo.pl",
    page: "/pl/oferty/pozycjonowanie-lokalne",
    from: "/pl/oferty/lokacii",
    to: "/pl/oferty/lokalizacje",
    why: "русский слаг lokacii в польском пути — польский хаб называется lokalizacje",
  },
  {
    docId: "service-international-seo.pl",
    page: "/pl/oferty/seo-miedzynarodowe",
    from: "/pl/oferty/lokacii",
    to: "/pl/oferty/lokalizacje",
    why: "то же самое",
  },
  {
    docId: "singlepage-medtourism-de-pl",
    page: "/pl/oferty/pozycjonowanie-kliniki-na-pacjentow-z-niemiec",
    from: "/pl/oferty/pozycjonowanie-na-rynek-niemiecki",
    to: "/pl/oferty/lokalizacje/pozycjonowanie-na-rynek-niemiecki",
    why: "пропущен сегмент lokalizacje в пути",
  },
];

// Слаг не трогаем: он живой URL, его смена требует редиректа — это отдельное решение.
const TITLE_FIXES = [
  {
    docId: "8b0ed15c-bf8e-4659-80a4-6accd7f11fcc",
    page: "/portfolio/web-development-a-website-for-internet-prowider",
    from: "Web Development a Website for Internet Prowider",
    to: "Website Development for an Internet Provider",
    why: "опечатка Prowider плюс сломанная грамматика; заголовок рендерится как H1",
  },
];

/** Рекурсивно меняет строку href на всех уровнях, не трогая ничего другого. */
function swapHref(node, from, to, counter) {
  if (Array.isArray(node)) return node.map((n) => swapHref(n, from, to, counter));
  if (!node || typeof node !== "object") return node;
  const out = {};
  for (const [k, v] of Object.entries(node)) {
    if (k === "href" && v === from) {
      counter.n += 1;
      out[k] = to;
    } else {
      out[k] = swapHref(v, from, to, counter);
    }
  }
  return out;
}

async function main() {
  const report = [];
  const say = (l = "") => { console.log(l); report.push(l); };
  let applied = 0;

  for (const fix of HREF_FIXES) {
    const doc = await client.getDocument(fix.docId);
    if (!doc) { say(`! НЕ НАЙДЕН ${fix.docId}`); continue; }
    const counter = { n: 0 };
    const updated = swapHref(doc.contentBlocks || [], fix.from, fix.to, counter);

    say(`\n${"=".repeat(70)}\n${fix.page}  (${fix.docId})`);
    say(`  было : ${fix.from}`);
    say(`  стало: ${fix.to}`);
    say(`  причина: ${fix.why}`);
    say(`  найдено вхождений: ${counter.n}`);
    if (counter.n === 0) { say("  ! ссылка не найдена, пропускаю"); continue; }

    if (APPLY) {
      await client.patch(fix.docId).set({ contentBlocks: updated }).commit();
      say("  → применено");
      applied++;
    }
  }

  for (const fix of TITLE_FIXES) {
    const doc = await client.getDocument(fix.docId);
    if (!doc) { say(`! НЕ НАЙДЕН ${fix.docId}`); continue; }
    say(`\n${"=".repeat(70)}\n${fix.page}  (${fix.docId})`);
    if (doc.title !== fix.from) {
      say(`  ! заголовок уже другой: "${doc.title}" — пропускаю`);
      continue;
    }
    say(`  заголовок было : ${fix.from}`);
    say(`  заголовок стало: ${fix.to}`);
    say(`  причина: ${fix.why}`);
    say(`  слаг НЕ меняется: ${fix.page.split("/").pop()}`);
    if (APPLY) {
      await client.patch(fix.docId).set({ title: fix.to }).commit();
      say("  → применено");
      applied++;
    }
  }

  say(`\nЗапланировано: ${HREF_FIXES.length + TITLE_FIXES.length}. Применено: ${applied}.`);
  if (!APPLY) say("Это сухой прогон. Применить: node scripts/fix-broken-links.cjs --apply");
  const rp = path.resolve(__dirname, APPLY ? "../drafts/fix-links-applied.txt" : "../drafts/fix-links-dry-run.txt");
  fs.writeFileSync(rp, report.join("\n"), "utf8");
  console.log(`\nОтчёт: drafts/${APPLY ? "fix-links-applied.txt" : "fix-links-dry-run.txt"}`);
}

main().catch((e) => { console.error("Ошибка:", e.message); process.exit(1); });
