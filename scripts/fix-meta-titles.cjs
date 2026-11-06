// scripts/fix-meta-titles.cjs
//
// Разводит H1 и метатайтл на 17 коммерческих страницах, где они совпадали
// дословно. Написан 02.11.2026 по результатам `check-headings.cjs` (разбор в
// claude/headings-audit.md): таких страниц на сайте 47, из них 17 коммерческих,
// и восемь из них — одна сгенерированная пачка варшавских городских страниц.
//
// Что меняется и что НЕ меняется:
//   * меняется только `seo.metaTitle`;
//   * `title` (он же H1 на этих страницах, потому что `heading` пустое) не
//     трогается — это ключевая фраза страницы, и она на месте;
//   * структура, блоки, тексты не трогаются.
//
// Почему именно метатайтл, а не H1: H1 несёт ключ и читается на странице,
// а метатайтл работает в выдаче, где нужен не повтор заголовка, а причина
// нажать. Две позиции — два разных текста.
//
// Проверки перед записью:
//   * текущий метатайтл должен совпасть с ожидаемым — иначе отказ (кто-то
//     поменял его после замера);
//   * новый метатайтл не длиннее 60 знаков;
//   * новый метатайтл не совпадает с `title` той же страницы;
//   * новый метатайтл не занят другой страницей сайта (дубли метатайтлов —
//     отдельная проблема, и создавать её этим скриптом не хочется);
//   * документ с черновиком не правится;
//   * первый патч документа идёт с ifRevisionId, всё одной транзакцией.
//
// Дополнено 06.11.2026: 27 статей блога. Повторный замер `check-headings.cjs`
// показал 30 совпадений H1 и метатайтла, а не 47 — коммерческие закрыты, три
// политики конфиденциальности не трогаем, остаются статьи. Для статьи это
// упущенная возможность, а не поломка: H1 остаётся редакционным и работает на
// читателя, метатайтл говорит, что человек получит, открыв статью.
// Восемь статей серии про ответы ИИ получили метатайтлы, различающиеся по
// существу, а не нумерацией: иначе вышло бы то же, от чего ушли на варшавских
// страницах, где восемь страниц несли один метатайтл слово в слово.
//
// Использование:
//   node scripts/fix-meta-titles.cjs            сухой прогон
//   node scripts/fix-meta-titles.cjs --apply    запись

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
const PREFIX = { en: "", pl: "/pl", ru: "/ru" };
const LIMIT = 60;

// [адрес, ожидаемый текущий метатайтл (= H1), новый метатайтл]
const EDITS = [
  // ── восемь варшавских городских страниц, одна сгенерированная пачка ───────
  ["/ru/uslugi/prodvizhenie-saita-avtoservisa-varshava",
   "Продвижение и раскрутка сайта автосервиса в Варшаве",
   "SEO автосервиса в Варшаве — заявки от водителей рядом"],
  ["/ru/uslugi/prodvizhenie-saita-kliningovoy-kompanii-varshava",
   "Продвижение и раскрутка сайта клининговой компании в Варшаве",
   "SEO клининговой компании в Варшаве — заявки на уборку"],
  ["/ru/uslugi/prodvizhenie-saita-medicinskoy-kliniki-varshava",
   "Продвижение и раскрутка сайта медицинской клиники в Варшаве",
   "SEO медицинской клиники в Варшаве — записи пациентов"],
  ["/ru/uslugi/prodvizhenie-saita-restorana-varshava",
   "Продвижение и раскрутка сайта ресторана в Варшаве",
   "SEO ресторана в Варшаве — брони и гости из поиска"],
  ["/ru/uslugi/prodvizhenie-saita-salona-krasoty-varshava",
   "Продвижение и раскрутка сайта салона красоты в Варшаве",
   "SEO салона красоты в Варшаве — записи из поиска и карт"],
  ["/ru/uslugi/prodvizhenie-saita-stomatologii-varshava",
   "Продвижение и раскрутка сайта стоматологии в Варшаве",
   "SEO стоматологии в Варшаве — записи пациентов из поиска"],
  ["/ru/uslugi/prodvizhenie-saita-stroitelnoy-kompanii-varshava",
   "Продвижение и раскрутка сайта строительной компании в Варшаве",
   "SEO строительной компании в Варшаве — заявки на работы"],
  ["/ru/uslugi/prodvizhenie-saita-yurista-varshava",
   "Продвижение и раскрутка сайта юриста в Варшаве",
   "SEO сайта юриста в Варшаве — обращения клиентов"],

  // ── гео-страницы ─────────────────────────────────────────────────────────
  ["/ru/lokacii/prodvizhenie-na-nemetskiy-rynok/prodvizhenie-saitov-avtoeksporta-germaniya",
   "Продвижение и раскрутка сайтов автоэкспорта в Германии",
   "SEO для автоэкспорта в Германии — заявки от покупателей"],
  ["/ru/uslugi/lokacii/prodvizhenie-saitov-avtoeksporta-oae",
   "Продвижение и раскрутка сайтов автоэкспорта в ОАЭ",
   "SEO для автоэкспорта в ОАЭ — заявки из Дубая и Эмиратов"],
  ["/ru/uslugi/lokacii/prodvizhenie-saitov-nedvizhimosti-ispaniya",
   "Продвижение и раскрутка сайтов недвижимости в Испании",
   "SEO недвижимости в Испании — покупатели из поиска"],
  ["/ru/uslugi/lokacii/prodvizhenie-saitov-nedvizhimosti-oae",
   "Продвижение и раскрутка сайтов недвижимости в ОАЭ",
   "SEO недвижимости в ОАЭ — покупатели и инвесторы из поиска"],
  ["/pl/oferty/lokalizacje/pozycjonowanie-na-rynki-baltyckie",
   "Pozycjonowanie stron na Litwie, Łotwie i w Estonii",
   "Pozycjonowanie na Litwie, Łotwie i w Estonii — zakres, cena"],

  // ── услуги ───────────────────────────────────────────────────────────────
  ["/ru/uslugi/podderzhka-saita",
   "Поддержка и сопровождение сайта разработчиком",
   "Поддержка сайта разработчиком — что входит и сколько стоит"],
  ["/ru/uslugi/prodvizhenie-kliniki-v-polshe-na-nemeckih-pacientov",
   "Продвижение и раскрутка клиники в Польше на немецких пациентов",
   "Клиника в Польше: пациенты из Германии через поиск"],
  ["/pl/oferty/przebudowa-strony-internetowej",
   "Przebudowa strony internetowej bez utraty pozycji",
   "Przebudowa strony: nowy wygląd, te same pozycje w Google"],
  // Метатайтл этой страницы поменяли после замера 02.11, поэтому строка
  // приведена к текущему состоянию сайта: прогон 06.11 показывает «done».
  ["/services/website-performance-and-code-audit",
   "Website performance audit and code audit — €250",
   "Website performance audit and code audit — €250"],

  // ── 06.11.2026: статьи блога ─────────────────────────────────────────────
  // Серия про ответы ИИ: восемь материалов, метатайтлы разведены по теме.
  ["/blog/how-to-check-what-ai-says-about-your-company",
   "How to Check What AI Assistants Say About Your Company",
   "AI brand audit: the prompts to run and what to log"],
  ["/pl/blog/co-asystenci-ai-mowia-o-twojej-firmie",
   "Co asystenci AI mówią o Twojej firmie: jak to sprawdzić",
   "Audyt odpowiedzi AI o firmie: metoda i zestaw zapytań"],
  ["/ru/blog/chto-ii-assistenty-govoryat-o-vashey-kompanii",
   "Что ИИ-ассистенты говорят о вашей компании: аудит",
   "Аудит ИИ-ответов о компании: метод и набор запросов"],
  ["/blog/how-to-monitor-brand-mentions-in-ai-answers",
   "How to Monitor Brand Mentions in AI Answers",
   "Monitoring brand mentions in AI: what to track monthly"],
  ["/pl/blog/monitoring-wzmianek-o-marce-w-odpowiedziach-ai",
   "Monitoring wzmianek o marce w odpowiedziach AI: jak go prowadzić",
   "Monitoring marki w odpowiedziach AI: co śledzić"],
  ["/blog/when-ai-describes-your-company-as-unreliable",
   "When AI Describes Your Company as Unreliable",
   "AI calls your company unreliable: how to respond"],
  ["/pl/blog/gdy-ai-opisuje-wasza-firme-jako-niewiarygodna",
   "Gdy AI opisuje Waszą firmę jako niewiarygodną",
   "AI nazywa firmę niewiarygodną: co z tym zrobić"],
  ["/ru/blog/esli-ii-opisyvaet-kompaniyu-kak-nenadyozhnuyu",
   "Если ИИ описывает вашу компанию как ненадёжную",
   "ИИ называет компанию ненадёжной: что делать"],
  ["/blog/how-ai-answers-distort-your-marketing-message",
   "How AI Answers Distort Your Marketing Message",
   "AI retells your positioning: what survives it"],
  ["/pl/blog/jak-odpowiedzi-ai-znieksztalcaja-przekaz-marketingowy",
   "Jak odpowiedzi AI zniekształcają Wasz przekaz marketingowy",
   "AI streszcza pozycjonowanie: co z niego zostaje"],
  ["/ru/blog/kak-ii-otvety-iskazhayut-marketingovoe-soobshchenie",
   "Как ИИ-ответы искажают ваше маркетинговое сообщение",
   "ИИ пересказывает позиционирование: что уцелеет"],
  ["/blog/when-ai-attributes-your-features-to-a-competitor",
   "When AI Attributes Your Features to a Competitor",
   "AI credits your features to a competitor: the fix"],
  ["/blog/where-ai-gets-outdated-information-about-your-company",
   "Where AI Gets Outdated Information About Your Company",
   "AI describes you as you were: where stale data lives"],
  ["/pl/blog/skad-ai-bierze-nieaktualne-informacje-o-firmie",
   "Skąd AI bierze nieaktualne informacje o Twojej firmie",
   "Nieaktualne dane o firmie w AI: gdzie żyją"],
  ["/ru/blog/otkuda-ii-beryot-ustarevshie-svedeniya-o-kompanii",
   "Откуда ИИ берёт устаревшие сведения о вашей компании",
   "Устаревшие данные о компании в ИИ: где живут"],
  ["/blog/ai-response-risks",
   "AI Response Risks: How AI Can Misrepresent Your Brand and How to Protect It",
   "When AI misrepresents your brand: risks and fixes"],
  ["/pl/blog/jak-trafic-do-rekomendacji-chatgpt",
   "Jak trafić do rekomendacji ChatGPT: checklista dla firm",
   "Jak trafić do odpowiedzi ChatGPT: praktyczne AEO"],
  ["/ru/blog/kak-popast-v-rekomendacii-chatgpt",
   "Как попасть в рекомендации ChatGPT: чек-лист для бизнеса",
   "Как попасть в ответы ChatGPT: практическое AEO"],

  // ── остальные статьи ─────────────────────────────────────────────────────
  ["/blog/black-and-gold-web-design-no-longer-reads-expensive",
   "Black and Gold Web Design No Longer Reads as Expensive",
   "Why black and gold stopped looking expensive"],
  ["/pl/blog/czarno-zloty-projekt-strony-nie-czyta-sie-jako-drogi",
   "Czarno-złoty projekt strony nie czyta się już jako drogi",
   "Dlaczego czarno-złoty przestał znaczyć premium"],
  ["/ru/blog/chernyy-s-zolotom-dizayn-sayta-ne-chitaetsya-kak-dorogo",
   "Дизайн сайта в чёрном с золотом больше не читается как дорого",
   "Почему чёрный с золотом перестал значить дорого"],
  ["/blog/why-lingerie-brands-lose-to-their-retailers",
   "Why a Lingerie Brand Loses in Search to Its Own Retailers",
   "A brand losing in search to its own retailers"],
  ["/pl/blog/freelancer-czy-agencja",
   "Freelancer czy agencja: komu zlecić stronę internetową",
   "Freelancer czy agencja: realne różnice i ryzyka"],
  ["/pl/blog/czy-strona-potrzebuje-pliku-llms-txt",
   "Czy Twoja strona potrzebuje pliku llms.txt? Uczciwa odpowiedź",
   "llms.txt: co pokazują pomiary i komu się przyda"],
  ["/pl/blog/ile-kosztuje-strona-wielojezyczna",
   "Ile kosztuje strona wielojęzyczna: z czego składa się cena",
   "Koszt strony wielojęzycznej: co poza tłumaczeniem"],
  ["/blog/how-much-seo-costs",
   "How Much SEO Costs: A Complete Pricing Guide",
   "SEO prices: what the number is actually made of"],
  ["/pl/blog/dlaczego-strona-nie-generuje-zapytan",
   "Dlaczego strona nie generuje zapytań: diagnoza krok po kroku",
   "Strona bez zapytań: cztery przyczyny i jak je rozdzielić"],
];

async function main() {
  const docs = await client.fetch(
    `*[_type in ["singlepage", "blog"]]{
      _id, _rev, _type, language, title, heading,
      "metaTitle": seo.metaTitle,
      "s": select(language == "en" => slug.en.current, language == "pl" => slug.pl.current, slug.ru.current),
      "p1": select(language == "en" => parentPage->slug.en.current, language == "pl" => parentPage->slug.pl.current, parentPage->slug.ru.current),
      "p2": select(language == "en" => parentPage->parentPage->slug.en.current, language == "pl" => parentPage->parentPage->slug.pl.current, parentPage->parentPage->slug.ru.current)
    }`,
  );

  const drafts = new Set(docs.filter((d) => d._id.startsWith("drafts.")).map((d) => d._id.slice(7)));
  const live = docs.filter((d) => !d._id.startsWith("drafts."));
  const byUrl = new Map();
  for (const d of live) {
    const seg = [d.p2, d.p1, d.s].filter(Boolean).join("/");
    d.url = d._type === "blog" ? `${PREFIX[d.language] ?? ""}/blog/${d.s}` : `${PREFIX[d.language] ?? ""}/${seg}`;
    byUrl.set(d.url, d);
  }

  // Карта «метатайтл → страницы», чтобы новый не занял чужой.
  const titleOwners = new Map();
  for (const d of live) {
    const t = String(d.metaTitle || "").trim();
    if (!t) continue;
    if (!titleOwners.has(t)) titleOwners.set(t, []);
    titleOwners.get(t).push(d.url);
  }

  let ok = 0, done = 0, bad = 0;
  const patches = [];

  for (const [url, expected, next] of EDITS) {
    const doc = byUrl.get(url);
    if (!doc) { console.log(`BAD   ${url}\n      страницы с таким адресом нет`); bad++; continue; }
    if (drafts.has(doc._id)) { console.log(`BAD   ${url}\n      у документа есть черновик — не трогаю`); bad++; continue; }

    if (next.length > LIMIT) { console.log(`BAD   ${url}\n      новый метатайтл ${next.length} знаков, предел ${LIMIT}`); bad++; continue; }
    if (next.trim() === String(doc.title || "").trim()) { console.log(`BAD   ${url}\n      новый метатайтл совпал с title`); bad++; continue; }

    const owners = (titleOwners.get(next) || []).filter((u) => u !== url);
    if (owners.length) { console.log(`BAD   ${url}\n      такой метатайтл уже у: ${owners.join(", ")}`); bad++; continue; }

    const cur = String(doc.metaTitle || "").trim();
    if (cur === next) { console.log(`done  ${url}\n      уже «${next}» (${next.length})`); done++; continue; }
    if (cur !== expected) {
      console.log(`BAD   ${url}\n      ожидался «${expected}»\n      а стоит «${cur}»`); bad++; continue;
    }

    patches.push(client.patch(doc._id).ifRevisionId(doc._rev).set({ "seo.metaTitle": next }));
    console.log(`ok    ${url}\n      H1 остаётся: «${doc.title}»\n      метатайтл: «${cur}» → «${next}» (${next.length})`);
    ok++;
  }

  console.log(`\nok ${ok} · done ${done} · BAD ${bad} · правок к записи ${patches.length}`);
  if (bad) { console.error("\nЕсть BAD — ничего не записываю."); process.exit(1); }
  if (!APPLY) { console.log("\nСухой прогон. Для записи добавить --apply"); return; }
  if (!patches.length) { console.log("\nПисать нечего."); return; }

  let tx = client.transaction();
  for (const p of patches) tx = tx.patch(p);
  await tx.commit();
  console.log(`\nЗаписано: ${patches.length} метатайтлов. Вебхук ревалидирует страницы.`);
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
