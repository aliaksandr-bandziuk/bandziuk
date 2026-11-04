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
   "Pozycjonowanie na Litwie, Łotwie i w Estonii — zakres i cena"],

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
  ["/services/website-performance-and-code-audit",
   "Website Performance Optimization & Code Audit",
   "Website performance and code audit — scope and price"],
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
