// scripts/check-headings.cjs
//
// Только чтение. Три проверки за один проход по Sanity, написан 02.11.2026
// после кластера недвижимости, где выяснилось, что у пяти из девяти страниц
// поля `heading` не было вовсе.
//
//   1. Пустой H1 — у документа нет `heading`, страница рендерит `title`.
//   2. H1 == metaTitle — заголовок страницы и заголовок в выдаче совпадают,
//      то есть одна из двух позиций потрачена зря.
//   3. Заголовки-ярлыки — выборка «голых существительных» с контекстом, чтобы
//      оценить глазами, какая доля из них настоящие дефекты.
//
// ВАЖНО про критерий третьей проверки. Число «268 на 149 страницах» из аудита
// 30.10.2026 получено разовой проверкой, код которой не сохранился. Здесь
// критерий выписан явно (см. isLabel), поэтому число почти наверняка выйдет
// другим. Это не расхождение в данных, а разные критерии: сравнивать стоит не
// числа, а долю настоящих дефектов в выборке.
//
// Берутся ТОЛЬКО настоящие заголовки portable text (style h2/h3). Подписи
// блоков старого шаблона (`gridBlock.title` и подобные) сюда не попадают, хотя
// часть из них рендерится как H2: разделить их по выгрузке нельзя, а
// утверждать лишнее про них я уже один раз ошибся («Image Full», см.
// claude/thin-pages-plan.md). Они выводятся отдельным списком, без выводов.
//
// Использование:
//   node scripts/check-headings.cjs                  всё, выборка 20
//   node scripts/check-headings.cjs --sample 40      выборка больше
//   node scripts/check-headings.cjs --lang ru        один язык
//   node scripts/check-headings.cjs --out drafts/headings.csv   машинно
//   node scripts/check-headings.cjs --type blog      статьи вместо лендингов
//   node scripts/check-headings.cjs --all            и то и другое
//   node scripts/check-headings.cjs --labels         список подписей блоков

const path = require("path");
const fs = require("fs");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const arg = (n) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : null; };
const SAMPLE = Number(arg("--sample") || 20);
const LANG = arg("--lang");
const OUT = arg("--out");
const SEED = Number(arg("--seed") || 20261102);
const LABELS = process.argv.includes("--labels");
const TYPES = process.argv.includes("--all")
  ? ["singlepage", "blog"]
  : [arg("--type") || "singlepage"];

const PREFIX = { en: "", pl: "/pl", ru: "/ru" };

// Детерминированный генератор, чтобы повторный прогон дал ту же выборку и
// результаты можно было сравнивать. --seed меняет её.
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

// ── Критерий «заголовок-ярлык», выписан явно ────────────────────────────────
//
// Ярлык — короткая группа слов, называющая предмет и не называющая действия:
// «Техническое SEO», «Соседние рынки», «Structure & content», «Conclusion».
// Критерий грубый и нарочно узкий: не больше трёх слов, нет двоеточия, запятой
// и вопросительного слова. Он пропустит длинные плохие заголовки и поймает
// несколько нормальных подзаголовков-перечней — именно поэтому и нужна
// выборка глазами, а не автоматическая правка по этому списку.
const QUESTION = /\b(как|почему|что|сколько|когда|кому|зачем|где|какой|какие|jak|dlaczego|co|ile|kiedy|gdzie|który|jaki|how|why|what|when|which|who|where)\b/i;

function isLabel(text) {
  const t = text.trim();
  if (!t) return false;
  if (/[:,—–]/.test(t)) return false;
  if (QUESTION.test(t)) return false;
  const words = t.split(/\s+/).filter(Boolean);
  return words.length <= 3;
}

// ── Сбор заголовков и абзацев из portable text ──────────────────────────────
//
// Возвращает плоский список: {style, text, next} — где next это начало
// следующего абзаца, нужное, чтобы судить о заголовке в его месте, а не в
// отрыве от текста.
function collectHeadings(blocks, out) {
  if (!Array.isArray(blocks)) return out;
  for (const b of blocks) {
    if (!b || typeof b !== "object") continue;
    if (b._type === "block" && Array.isArray(b.children)) {
      const text = b.children.map((c) => (c && typeof c.text === "string" ? c.text : "")).join("");
      out.push({ style: b.style || "normal", text });
      continue;
    }
    for (const v of Object.values(b)) {
      if (Array.isArray(v)) collectHeadings(v, out);
      else if (v && typeof v === "object") collectHeadings([v], out);
    }
  }
  return out;
}

// Подписи блоков: любое строковое поле `title` у блока, который сам не block.
// Выводятся отдельно и без выводов — см. комментарий в начале файла.
function collectBlockTitles(blocks, out) {
  if (!Array.isArray(blocks)) return out;
  for (const b of blocks) {
    if (!b || typeof b !== "object") continue;
    if (b._type !== "block" && typeof b.title === "string" && b.title.trim()) {
      out.push({ type: b._type || "?", title: b.title.trim() });
    }
    for (const v of Object.values(b)) {
      if (Array.isArray(v)) collectBlockTitles(v, out);
      else if (v && typeof v === "object") collectBlockTitles([v], out);
    }
  }
  return out;
}

async function main() {
  // slug — localizedSlug, и GROQ не подставляет язык самого документа внутрь
  // скобок: `slug[language].current` не находит ничего. Поэтому путь собираю
  // по трём явным локалям, как в dump-page.cjs.
  const docs = await client.fetch(
    `*[_type in $types && !(_id in path("drafts.**"))]{
      _id, _type, language, heading, title, contentBlocks, body,
      "metaTitle": seo.metaTitle,
      "s": select(language == "en" => slug.en.current, language == "pl" => slug.pl.current, slug.ru.current),
      "p1": select(language == "en" => parentPage->slug.en.current, language == "pl" => parentPage->slug.pl.current, parentPage->slug.ru.current),
      "p2": select(language == "en" => parentPage->parentPage->slug.en.current, language == "pl" => parentPage->parentPage->slug.pl.current, parentPage->parentPage->slug.ru.current)
    }`,
    { types: TYPES },
  );

  const pages = docs
    .filter((d) => !LANG || d.language === LANG)
    .map((d) => {
      const seg = [d.p2, d.p1, d.s].filter(Boolean).join("/");
      const base = d._type === "blog" ? `${PREFIX[d.language] ?? ""}/blog/${d.s}` : `${PREFIX[d.language] ?? ""}/${seg}`;
      const flat = collectHeadings([...(d.contentBlocks || []), ...(d.body || [])], []);
      return { ...d, url: base, flat, titles: collectBlockTitles(d.contentBlocks || [], []) };
    });

  console.log(`страниц: ${pages.length} (${TYPES.join(", ")}${LANG ? `, язык ${LANG}` : ""})\n`);

  // ── 1. Пустой H1 ──────────────────────────────────────────────────────────
  const noH1 = pages.filter((p) => !p.heading || !String(p.heading).trim());
  console.log(`## 1. Нет собственного H1 (поле heading пустое): ${noH1.length}`);
  if (!noH1.length) console.log("  —");
  for (const p of noH1) console.log(`  ${p.language}  ${p.url}\n       рендерится title: «${p.title || "(и title пуст)"}»`);
  console.log("");

  // ── 2. H1 совпадает с метатайтлом ─────────────────────────────────────────
  const norm = (s) => String(s || "").trim().replace(/\s+/g, " ").toLowerCase();
  const same = pages.filter((p) => {
    const h1 = norm(p.heading || p.title);
    return h1 && norm(p.metaTitle) && h1 === norm(p.metaTitle);
  });
  console.log(`## 2. H1 и metaTitle совпадают: ${same.length}`);
  if (!same.length) console.log("  —");
  for (const p of same) console.log(`  ${p.language}  ${p.url}\n       «${p.heading || p.title}»`);
  console.log("");

  // ── 3. Заголовки-ярлыки, выборка с контекстом ─────────────────────────────
  const labels = [];
  for (const p of pages) {
    for (let i = 0; i < p.flat.length; i++) {
      const h = p.flat[i];
      if (h.style !== "h2" && h.style !== "h3") continue;
      if (!isLabel(h.text)) continue;
      const nxt = p.flat.slice(i + 1).find((x) => x.style === "normal" && x.text.trim());
      labels.push({ lang: p.language, url: p.url, style: h.style, text: h.text.trim(), next: (nxt ? nxt.text : "").slice(0, 160) });
    }
  }
  const byPage = new Set(labels.map((l) => l.url));
  console.log(`## 3. Заголовки-ярлыки по критерию из этого файла: ${labels.length} на ${byPage.size} страницах`);
  console.log(`   (число 268 на 149 страницах из аудита 30.10 получено другим, несохранённым критерием —`);
  console.log(`    сравнивать стоит долю настоящих дефектов в выборке, а не сами числа)\n`);

  const rand = rng(SEED);
  const pool = labels.slice();
  for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
  const sample = pool.slice(0, SAMPLE);
  console.log(`### Выборка ${sample.length} случайных, с началом следующего абзаца:\n`);
  sample.forEach((l, n) => {
    console.log(`${String(n + 1).padStart(2)}. ${l.style.toUpperCase()} «${l.text}»   ${l.lang} ${l.url}`);
    console.log(`    далее: ${l.next || "(следующего абзаца нет)"}\n`);
  });

  // Повторяющиеся — самые вероятные настоящие дефекты: один и тот же ярлык на
  // многих страницах означает шаблон, а не удачный подзаголовок.
  const counts = new Map();
  for (const l of labels) counts.set(l.text, (counts.get(l.text) || 0) + 1);
  const repeated = [...counts].filter(([, c]) => c >= 3).sort((a, b) => b[1] - a[1]);
  console.log(`### Повторяются на трёх и более страницах: ${repeated.length}`);
  if (!repeated.length) console.log("  —");
  for (const [t, c] of repeated.slice(0, 30)) console.log(`  ${String(c).padStart(3)} × «${t}»`);
  console.log("");

  // ── Подписи блоков, без выводов ───────────────────────────────────────────
  if (LABELS) {
    const bt = new Map();
    for (const p of pages) for (const t of p.titles) {
      const key = `${t.type} :: ${t.title}`;
      bt.set(key, (bt.get(key) || 0) + 1);
    }
    console.log(`## Подписи блоков (НЕ выводы: часть рендерится как H2, часть — ярлыки админки): ${bt.size}`);
    for (const [k, c] of [...bt].sort((a, b) => b[1] - a[1]).slice(0, 60)) console.log(`  ${String(c).padStart(3)} × ${k}`);
    console.log("");
  } else {
    console.log("Подписи блоков старого шаблона: добавить --labels\n");
  }

  if (OUT) {
    const dest = path.resolve(__dirname, "..", OUT);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const lines = ["check,lang,url,style,text,extra"];
    const esc = (s) => `"${String(s || "").replace(/"/g, '""')}"`;
    for (const p of noH1) lines.push(["no-h1", p.language, esc(p.url), "", esc(p.title), ""].join(","));
    for (const p of same) lines.push(["h1-eq-metatitle", p.language, esc(p.url), "", esc(p.heading || p.title), ""].join(","));
    for (const l of labels) lines.push(["label", l.lang, esc(l.url), l.style, esc(l.text), esc(l.next)].join(","));
    fs.writeFileSync(dest, lines.join("\n") + "\n", "utf8");
    console.log(`${lines.length - 1} строк → ${OUT}`);
  } else {
    console.log("Машинный вывод: добавить --out drafts/headings.csv");
  }
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
