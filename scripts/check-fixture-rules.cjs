// scripts/check-fixture-rules.cjs
//
// Проверка фикстуры посадочной страницы ДО публикации. Существующий
// check-headings.cjs читает уже опубликованное из Sanity и ловит три вещи;
// этот скрипт читает файлы фикстур и проверяет правила из памяти проекта,
// те из них, которые вообще проверяются механически.
//
// Правила, за которыми он следит (19.11.2026):
//   · metaTitle ≤60, не равен H1, без хвоста «| Bandziuk»;
//   · metaDescription ≤160;
//   · heroChips не больше трёх;
//   · главное ключевое слово уже в H1;
//   · доля H2/H3, несущих ключевые слова ниши, — предупреждение ниже 60%;
//   · заголовки не начинаются с «Почему», «Что», «Why», «What», «Dlaczego», «Co»;
//   · на SEO-страницах названы ChatGPT, Perplexity, Gemini, AI Overviews, GEO и AEO;
//   · блок кейсов есть и стоит сразу после блока «что входит в работу»;
//   · у таблицы есть заголовок h3 прямо над ней;
//   · первый элемент основного текста — абзац про услугу, а не сразу H2;
//   · RU: «раскрутка сайта» ровно один раз на SEO-странице, «честн» — ноль;
//   · PL: на SEO-странице форма «pozycjonowanie strony»;
//   · медиана абзаца 110–230 знаков («текст робота» и рубленые обрывки).
//
// Использование:
//   node scripts/check-fixture-rules.cjs                       изменённые фикстуры
//   node scripts/check-fixture-rules.cjs appliance-repair-website.ru
//   node scripts/check-fixture-rules.cjs --all                 все фикстуры

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { createJiti } = require("jiti");

const DIR = path.resolve(__dirname, "../src/dev-fixtures");
const jiti = createJiti(path.join(DIR, "x.js"));

const argv = process.argv.slice(2);
const ALL = argv.includes("--all");
let names = argv.filter((a) => !a.startsWith("--"));
if (!names.length) {
  if (ALL) {
    names = fs.readdirSync(DIR).filter((f) => f.endsWith(".ts") && !["registry.ts", "pt.ts"].includes(f)).map((f) => f.replace(/\.ts$/, ""));
  } else {
    const out = execSync("git status --porcelain -- src/dev-fixtures", { cwd: path.resolve(__dirname, "..") }).toString();
    names = out.split("\n").map((l) => l.slice(3).trim()).filter((p) => p.endsWith(".ts") && !p.endsWith("registry.ts") && !p.endsWith("pt.ts"))
      .map((p) => path.basename(p).replace(/\.ts$/, ""));
  }
}
if (!names.length) { console.log("Нечего проверять: в src/dev-fixtures нет изменённых файлов."); process.exit(0); }

const STOP = new Set("the a an and or of for in on to with your you we i is are that not what why how it as at by from do does can will их и в на по для с не что как из это а или к у же бы за до от при о со w i na do z nie to jest się o dla po od za przy że a oraz".split(/\s+/));
const words = (s) => s.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, " ").split(/\s+/).filter((w) => w.length > 3 && !STOP.has(w));

const collect = (blocks, pred) => {
  const out = [];
  (function walk(o) {
    if (Array.isArray(o)) return o.forEach(walk);
    if (o && typeof o === "object") { if (pred(o)) out.push(o); Object.values(o).forEach(walk); }
  })(blocks);
  return out;
};
const text = (b) => (b.children || []).map((c) => c.text).join("");

let problems = 0, warnings = 0;
for (const name of names) {
  let fx;
  try { fx = Object.values(jiti(path.join(DIR, `${name}.ts`)))[0]; }
  catch (e) { console.log(`\n✗ ${name}: не загружается — ${e.message.split("\n")[0]}`); problems++; continue; }
  if (!fx || !fx.slug) { console.log(`\n·  ${name}: не фикстура страницы, пропускаю`); continue; }

  const bad = [], warn = [];
  const lang = fx.lang;
  const isSeo = /(^|-)seo|pozycjonowanie|prodvizhenie/.test(fx.slug);
  const heading = fx.heading || "";
  const mt = fx.seo?.metaTitle || "", md = fx.seo?.metaDescription || "";

  if (mt.length > 60) bad.push(`metaTitle ${mt.length} знаков, максимум 60`);
  if (mt && mt === heading) bad.push("metaTitle совпадает с H1");
  // Хвост «| Bandziuk» сам по себе не вреден: имя в выдаче полезно, а лимит он
  // нигде не пробивает. Ошибка только когда тайтл уже на пределе — тогда
  // одиннадцать знаков лучше отдать ключевым словам.
  if (/\|\s*Bandziuk/i.test(mt) && mt.length >= 57) bad.push(`в metaTitle хвост «| Bandziuk» при длине ${mt.length} — знаки нужны ключевым словам`);
  if (md.length > 160) bad.push(`metaDescription ${md.length} знаков, максимум 160`);
  if ((fx.heroChips || []).length > 3) bad.push(`heroChips ${fx.heroChips.length}, максимум 3`);

  // Главное слово ниши, а не только «сайт» и «SEO»: страница про CRO, WordPress
  // или интернет-магазин называет свою услугу своими словами.
  const mainKw = {
    en: /\bseo\b|website|web design|development|optimi[sz]ation|shop|store/i,
    pl: /\bseo\b|pozycjonowanie|strona|stron|sklep|wdro\u017cen|optymalizacj/i,
    ru: /\bseo\b|продвижени|сайт|магазин|разработк|оптимизац/i,
  }[lang];
  if (mainKw && !mainKw.test(heading)) bad.push("в H1 нет главного ключевого слова");

  const heads = collect(fx.contentBlocks, (o) => o.style === "h2" || o.style === "h3").map(text);
  const key = new Set(words(heading));
  const hit = heads.filter((h) => words(h).some((w) => key.has(w))).length;
  if (heads.length && hit / heads.length < 0.6) warn.push(`ключевые слова только в ${hit} из ${heads.length} подзаголовков (ниже 60%)`);
  const openers = heads.filter((h) => /^(Почему|Что|Why|What|Dlaczego|Co)\b/.test(h));
  if (openers.length) bad.push(`подзаголовки начинаются с «почему/что»: ${openers.map((h) => `«${h.slice(0, 40)}…»`).join(", ")}`);

  const whole = JSON.stringify(fx);
  // Термины нужны на КАЖДОЙ посадочной, а не только на SEO-странице: страница
  // про создание сайта тоже обязана говорить о видимости в ИИ-поиске.
  for (const [label, re] of [["ChatGPT", /ChatGPT/], ["Perplexity", /Perplexity/], ["GEO", /\bGEO\b/], ["AEO", /\bAEO\b/], ["AI или ИИ", /\bAI\b|ИИ/]]) {
    if (!re.test(whole)) bad.push(`не назван ${label}`);
  }
  if (!/Gemini/.test(whole)) bad.push("не назван Gemini");
  if (!/\bSEO\b|pozycjonowanie|продвижени/i.test(whole)) bad.push("не названа сама услуга (SEO / pozycjonowanie / продвижение)");
  // Видимость в ИИ-поиске нужна не только на SEO-страницах: владелец требует её
  // в пяти местах — метаописание, чип героя, блок «что входит в работу», тело и
  // отдельный вопрос FAQ. На страницах про сайты она нужна так же.
  // Границы слова \b в JS работают по латинице, поэтому для кириллицы их не
  // ставим: «с ИИ» и «ИИ-поиск» иначе не находятся.
  const AI = /ChatGPT|Perplexity|Gemini|AI Overviews|\bGEO\b|\bAEO\b|ИИ|\bAI\b/;
  const where = {
    "метаописание": AI.test(md),
    "чип героя": (fx.heroChips || []).some((c2) => AI.test(c2)),
    "блок «что входит в работу»": ((fx.contentBlocks || []).find((b) => b._type === "offerListBlock") || { items: [] }).items.some((i) => AI.test(`${i.title} ${i.text}`)),
    "тело страницы": heads.some((h) => AI.test(h)),
    "вопрос в FAQ": (((fx.contentBlocks || []).find((b) => b._type === "faqBlock") || {}).faq?.items || []).some((i) => AI.test(i.question)),
  };
  const missing = Object.entries(where).filter(([, ok]) => !ok).map(([k2]) => k2);
  if (missing.length) bad.push(`видимость в ИИ не отражена: ${missing.join(", ")}`);

  // Страницы про создание сайта и страницы про продвижение — разные страницы.
  // Прайс одной не должен продавать услугу другой: 20.11.2026 я смешал их на
  // четырёх страницах про сайты, и владелец это остановил.
  const isSite = /website|strona-internetowa|^sait-|-sait-|tworzenie-stron/.test(fx.slug) && !isSeo;
  const offerNames = (fx.offers || []).map((o) => `${o.name} ${o.unit}`).join(" | ");
  if (isSite && /month|miesi|ежемесяч|по месяц/i.test(offerNames)) {
    bad.push("на странице про создание сайта в прайсе есть ежемесячное продвижение — это отдельная страница");
  }
  if (isSeo && /(^|\| )\s*(Website for|Strona internetowa dla|Сайт для)[^|]*one-off/i.test(offerNames)) {
    bad.push("на SEO-странице в прайсе есть сборка сайта — это отдельная страница");
  }

  const types = (fx.contentBlocks || []).map((b) => b._type);
  const iOffer = types.indexOf("offerListBlock"), iPf = types.indexOf("portfolioPickBlock");
  if (iPf === -1) bad.push("нет блока с кейсами");
  else if (iOffer !== -1 && iPf !== iOffer + 1) bad.push(`блок кейсов стоит не сразу после «что входит в работу» (${types.join(" → ")})`);

  (fx.contentBlocks || []).forEach((b, i) => {
    if (b._type !== "tableBlock") return;
    const prev = fx.contentBlocks[i - 1];
    const last = prev && prev._type === "textContent" ? prev.content[prev.content.length - 1] : null;
    if (!last || last.style !== "h3") bad.push("у таблицы нет заголовка h3 прямо над ней");
  });

  // Абзац про услугу: первый абзац основного текста должен прямо говорить, что
  // автор оказывает эту услугу. Порядок не важен — в кластере принят вариант
  // «H2, затем абзац», и он ничем не хуже абзаца перед H2.
  const guide = (fx.contentBlocks || []).find((b) => b._type === "textContent" && (b.content || []).some((c) => c.style === "h2"));
  if (guide) {
    const firstP = (guide.content || []).find((c) => c.style === "normal" && !c.listItem);
    const SELF = /\bI do\b|\bI build\b|\bI work\b|Zajmuję się|Buduję|Robię|Я занимаюсь|Я делаю|Делаю |Занимаюсь /;
    if (!firstP || !SELF.test(text(firstP))) bad.push("в первом абзаце основного текста нет прямой фразы про то, что вы оказываете эту услугу");
  }

  if (lang === "ru") {
    const n = (whole.match(/раскрутк/gi) || []).length;
    // Страница, которая сама нацелена на фразу «раскрутка сайта», из правила
    // исключена: там это главное ключевое слово, а не синоним для одного раза.
    const isPromoPage = /^prodvizhenie-saita$/.test(fx.slug);
    if (isSeo && !isPromoPage && n !== 1) bad.push(`«раскрутка сайта» встречается ${n} раз, нужно ровно один`);
    if (/честн/i.test(whole)) bad.push("встречается слово «честный» и производные");
  }
  if (lang === "pl" && isSeo && !/pozycjonowanie strony/i.test(heading)) warn.push("в H1 нет формы «pozycjonowanie strony X»");

  const ps = collect(fx.contentBlocks, (o) => o.style === "normal" && o.children && !o.listItem).map(text).filter(Boolean);
  const lens = ps.map((t) => t.length).sort((a, b) => a - b);
  const med = lens[Math.floor(lens.length / 2)] || 0;
  if (med && (med < 110 || med > 230)) warn.push(`медиана абзаца ${med} знаков (норма 110–230)`);

  problems += bad.length; warnings += warn.length;
  const mark = bad.length ? "✗" : warn.length ? "⚠" : "✓";
  console.log(`\n${mark} ${name}  ${fx.slug}`);
  bad.forEach((b) => console.log(`   ✗ ${b}`));
  warn.forEach((w) => console.log(`   ⚠ ${w}`));
}
console.log(`\nПроверено ${names.length}: ошибок ${problems}, предупреждений ${warnings}.`);
process.exitCode = problems ? 1 : 0;
