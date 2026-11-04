// scripts/fix-stub-headings.cjs
//
// Заменяет 62 заголовка-штампа на заголовки, собранные из темы каждой страницы.
// Написан 02.11.2026 по результатам замера `check-headings.cjs` (разбор в
// claude/headings-audit.md): из 286 заголовков-ярлыков 61 — это десять одних и
// тех же заготовок, размноженных по страницам, и ни в одной нет ключа. Плюс
// одна «Conclusion», найденная ещё 30.10.
//
// Правка точечная: находится блок portable text со style h2/h3, текст которого
// ДОСЛОВНО равен старому заголовку, и меняется только текст. Структура, ключи,
// ссылки и всё остальное не трогаются — `replace-landing.cjs` здесь не годится,
// он собирает страницу заново из фикстуры, а фикстур на эти 50 страниц нет.
//
// Новые заголовки не выдуманы: для каждого спорного раздела прочитано начало
// следующего абзаца (колонка `extra` в drafts/headings.csv), и заголовок назван
// по тому, что в разделе действительно написано. Для разделов «Соседние рынки»
// это конкретный соседний рынок, который там назван; для «С чего начать» —
// конкретное первое действие; для «Podsumowanie» в статьях о цене — то, от
// чего цена зависит.
//
// Механика как в scripts/fix-medical-ad-claims.cjs:
//   * у каждой правки ожидается РОВНО одно совпадение, иначе отказ;
//   * документ с черновиком не правится;
//   * первый патч документа идёт с ifRevisionId;
//   * всё одной транзакцией;
//   * уже применённая правка отличается от неудачи и печатается как «done».
//
// ВТОРОЙ ПРОХОД, 02.11.2026. Семь заголовков первого прохода почти дословно
// повторяли уже существовавшие на тех же страницах: «Od czego zależy koszt
// strony dla dewelopera» встал рядом с «Od czego zależy cena strony dla
// dewelopera», «От чего зависит цена сайта застройщика» — рядом с «От чего
// зависит цена сайта для застройщика», «What decides a real estate agency
// website's price» — рядом с «What determines the price of a real estate agency
// website». Просчёт мой: я проверял, что новый заголовок содержателен, и не
// проверял, что он не дублирует соседей по странице.
//
// Поэтому у этих семи строк в колонке «старое» теперь стоит то, что скрипт
// записал в первый проход, а не исходный штамп: таблица описывает ТЕКУЩЕЕ
// состояние сайта, иначе повторный прогон отказался бы работать. Остальные 55
// строк при повторном прогоне напечатают «done».
//
// Использование:
//   node scripts/fix-stub-headings.cjs            сухой прогон
//   node scripts/fix-stub-headings.cjs --apply    запись

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

// [адрес, старый заголовок, новый заголовок]
const EDITS = [
  // ── «Часто задаваемые вопросы» ×10 ────────────────────────────────────────
  ["/ru/blog/kak-ponyat-chto-pered-vami-plokhoi-seo-specialist", "Часто задаваемые вопросы", "Частые вопросы о выборе SEO-специалиста"],
  ["/ru/blog/kak-ya-avtomatiziroval-sozdanie-stranic-v-cms", "Часто задаваемые вопросы", "Частые вопросы об автоматическом создании страниц в CMS"],
  ["/ru/blog/riski-ai-otvetov", "Часто задаваемые вопросы", "Частые вопросы о рисках ИИ-ответов о бренде"],
  ["/ru/blog/skolko-stoit-sozdanie-saita-na-kipre", "Часто задаваемые вопросы", "Частые вопросы о стоимости сайта на Кипре"],
  ["/ru/blog/zachem-advokatu-sait", "Часто задаваемые вопросы", "Частые вопросы о сайте для адвоката"],
  ["/ru/ceny", "Часто задаваемые вопросы", "Частые вопросы о ценах и условиях работы"],
  ["/ru/kontakty", "Часто задаваемые вопросы", "Частые вопросы о том, как начать работу"],
  ["/ru/seo-dlya-nedvizhimosti-na-kipre", "Часто задаваемые вопросы", "Частые вопросы о SEO для недвижимости на Кипре"],
  ["/ru/sozdanie-saitov-dlya-byuti-uslug", "Часто задаваемые вопросы", "Частые вопросы о создании сайтов для бьюти-услуг"],
  ["/ru/sozdanie-saitov-dlya-byuti-uslug/sait-salona-krasoty", "Часто задаваемые вопросы", "Частые вопросы о создании сайта салона красоты"],

  // ── «Najczęściej zadawane pytania» ×8 ─────────────────────────────────────
  ["/pl/blog/jak-rozpoznac-kiepskiego-specjaliste-seo", "Najczęściej zadawane pytania", "Najczęstsze pytania o wybór specjalisty SEO"],
  ["/pl/blog/jak-zautomatyzowalem-tworzenie-stron-w-cms", "Najczęściej zadawane pytania", "Najczęstsze pytania o automatyczne tworzenie podstron w CMS"],
  ["/pl/blog/ryzyka-odpowiedzi-ai", "Najczęściej zadawane pytania", "Najczęstsze pytania o ryzyka odpowiedzi AI o marce"],
  ["/pl/cennik", "Najczęściej zadawane pytania", "Najczęstsze pytania o ceny i warunki współpracy"],
  ["/pl/kontakt", "Najczęściej zadawane pytania", "Najczęstsze pytania o to, jak zacząć współpracę"],
  ["/pl/seo-dla-nieruchomosci-na-cyprze", "Najczęściej zadawane pytania", "Najczęstsze pytania o SEO dla nieruchomości na Cyprze"],
  ["/pl/seo-salonu-kosmetycznego", "Najczęściej zadawane pytania", "Najczęstsze pytania o pozycjonowanie strony salonu kosmetycznego"],
  ["/pl/tworzenie-stron-internetowych-dla-branzy-beauty", "Najczęściej zadawane pytania", "Najczęstsze pytania o tworzenie stron dla branży beauty"],

  // ── «Frequently Asked Questions» ×6 и «Frequently asked questions» ×3 ─────
  ["/blog/ai-response-risks", "Frequently Asked Questions", "Frequently asked questions about AI response risks"],
  ["/blog/website-development-cost-in-cyprus", "Frequently Asked Questions", "Frequently asked questions about website cost in Cyprus"],
  ["/contacts", "Frequently Asked Questions", "Frequently asked questions about working with me"],
  ["/seo-for-beauty-salons", "Frequently Asked Questions", "Frequently asked questions about SEO for beauty salons"],
  ["/web-development-cyprus", "Frequently Asked Questions", "Frequently asked questions about web development in Cyprus"],
  ["/website-development-for-beauty-professionals/beauty-salon-website", "Frequently Asked Questions", "Frequently asked questions about beauty salon website design"],
  ["/blog/property-developer-website-cost", "Frequently asked questions", "Frequently asked questions about property developer website cost"],
  ["/pricing", "Frequently asked questions", "Frequently asked questions about prices and terms"],
  ["/services/seo-audit", "Frequently asked questions", "Frequently asked questions about the SEO audit"],

  // ── «Соседние рынки» ×10 — назван тот рынок, который в разделе и описан ───
  ["/ru/uslugi/lokacii/prodvizhenie-na-amerikanskiy-rynok", "Соседние рынки", "Соседний рынок: продвижение на британский рынок"],
  ["/ru/uslugi/lokacii/prodvizhenie-na-avstraliyskiy-rynok", "Соседние рынки", "Соседний рынок: продвижение на британский рынок"],
  ["/ru/uslugi/lokacii/prodvizhenie-na-britanskiy-rynok", "Соседние рынки", "Соседний рынок: продвижение сайта в Ирландии"],
  ["/ru/uslugi/lokacii/prodvizhenie-na-frantsuzskiy-rynok", "Соседние рынки", "Соседний рынок: продвижение сайта в Швейцарии"],
  ["/ru/uslugi/lokacii/prodvizhenie-na-gollandskiy-rynok", "Соседние рынки", "Соседний рынок: продвижение на немецкий рынок"],
  ["/ru/uslugi/lokacii/prodvizhenie-na-irlandskiy-rynok", "Соседние рынки", "Соседний рынок: продвижение на британский рынок"],
  ["/ru/uslugi/lokacii/prodvizhenie-na-italyanskiy-rynok", "Соседние рынки", "Соседний рынок: продвижение сайта в Швейцарии"],
  ["/ru/uslugi/lokacii/prodvizhenie-na-nemetskiy-rynok", "Соседние рынки", "Соседний рынок: продвижение сайта в Швейцарии"],
  ["/ru/uslugi/lokacii/prodvizhenie-na-shveytsarskiy-rynok", "Соседние рынки", "Соседние рынки: Франция, Германия и Италия"],
  ["/ru/uslugi/lokacii/razrabotka-saitov-ispaniya", "Соседние рынки", "Соседний рынок: разработка сайтов для бизнеса в Португалии"],

  // ── «С чего начать» ×5 и «Od czego zacząć» ×5 ────────────────────────────
  ["/ru/blog/chto-dolzhno-byt-na-saite-agentstva-nedvizhimosti", "С чего начать", "Главный принцип сайта агентства недвижимости"],
  ["/ru/blog/geo-vs-seo-raznica", "С чего начать", "С чего начать, если делаете и SEO, и GEO"],
  ["/ru/blog/kak-klienty-nahodyat-cherez-chatgpt", "С чего начать", "С чего начать работу над видимостью в ChatGPT"],
  ["/ru/blog/redizayn-sayta-bez-poteri-trafika", "С чего начать", "С чего начать редизайн, чтобы не потерять трафик"],
  ["/ru/blog/sait-agentstva-po-legalizacii", "С чего начать", "С чего начать продвижение сайта агентства по легализации"],
  ["/pl/blog/co-powinno-byc-na-stronie-biura-nieruchomosci", "Od czego zacząć", "Główna zasada strony biura nieruchomości"],
  ["/pl/blog/geo-vs-seo-roznice", "Od czego zacząć", "Od czego zacząć, jeśli robicie i SEO, i GEO"],
  ["/pl/blog/jak-klienci-znajduja-specjalistow-przez-chatgpt", "Od czego zacząć", "Od czego zacząć pracę nad widocznością w ChatGPT"],
  ["/pl/blog/redesign-strony-bez-utraty-ruchu", "Od czego zacząć", "Od czego zacząć redesign, żeby nie stracić ruchu"],
  ["/pl/blog/strona-biura-obslugi-cudzoziemcow", "Od czego zacząć", "Od czego zacząć promocję strony biura obsługi cudzoziemców"],

  // ── «Итог» ×4, «Summary» ×4, «Podsumowanie» ×6, «Conclusion» ×1 ───────────
  ["/ru/blog/skolko-stoit-prodvizhenie-saita", "Итог", "Сколько в итоге стоит продвижение сайта"],
  ["/ru/blog/skolko-stoit-sait-agentstva-nedvizhimosti", "От чего зависит цена сайта агентства недвижимости", "Сколько в итоге стоит сайт агентства недвижимости"],
  ["/ru/blog/skolko-stoit-sait-zastroishchika", "От чего зависит цена сайта застройщика", "Сколько в итоге стоит сайт застройщика"],
  ["/ru/blog/skolko-stoit-seo-yuristov", "Итог", "Сколько в итоге стоит SEO для юристов"],
  ["/blog/how-much-legal-seo-costs", "Summary", "What legal SEO costs in total"],
  ["/blog/how-much-seo-costs", "Summary", "What SEO costs in total"],
  ["/blog/psychologist-website-cost", "Summary", "What a psychologist website costs in total"],
  ["/blog/real-estate-agency-website-cost", "What decides a real estate agency website's price", "What a real estate agency website costs in total"],
  ["/pl/blog/ile-kosztuje-pozycjonowanie-strony", "Podsumowanie", "Ile ostatecznie kosztuje pozycjonowanie strony"],
  ["/pl/blog/ile-kosztuje-seo-dla-kancelarii-prawnej", "Ile ostatecznie kosztuje SEO dla kancelarii prawnej", "Podsumowanie kosztów SEO dla kancelarii prawnej"],
  ["/pl/blog/ile-kosztuje-strona-dla-agencji-nieruchomosci", "Od czego zależy koszt strony dla agencji nieruchomości", "Podsumowanie kosztów strony dla agencji nieruchomości"],
  ["/pl/blog/ile-kosztuje-strona-dla-dewelopera", "Od czego zależy koszt strony dla dewelopera", "Podsumowanie kosztów strony dla dewelopera"],
  ["/pl/blog/ile-kosztuje-strona-dla-psychologa", "Ile ostatecznie kosztuje strona dla psychologa", "Podsumowanie kosztów strony dla psychologa"],
  ["/pl/tworzenie-stron-internetowych-dla-branzy-beauty/strona-salonu-kosmetycznego", "Podsumowanie", "Co daje salonowi dobra strona internetowa"],
  ["/website-development-for-beauty-professionals/beauty-salon-website", "Conclusion", "What a good website does for a beauty salon"],
];

// Ищет блок portable text со style h2/h3 и текстом === target.
// Возвращает путь для патча и сам блок. Пути строятся по _key, а не по индексу:
// индекс сдвинется, если кто-то поменяет порядок блоков между чтением и записью.
function findHeading(node, target, prefix) {
  const hits = [];
  const walk = (val, p) => {
    if (Array.isArray(val)) {
      val.forEach((el, i) => {
        if (!el || typeof el !== "object") return;
        const seg = el._key ? `${p}[_key=="${el._key}"]` : `${p}[${i}]`;
        if (el._type === "block" && Array.isArray(el.children)) {
          const text = el.children.map((c) => (c && typeof c.text === "string" ? c.text : "")).join("");
          if ((el.style === "h2" || el.style === "h3") && text === target) hits.push({ path: seg, block: el });
        }
        for (const [k, v] of Object.entries(el)) {
          if (k === "children") continue;
          if (Array.isArray(v) || (v && typeof v === "object")) walk(v, `${seg}.${k}`);
        }
      });
    } else if (val && typeof val === "object") {
      for (const [k, v] of Object.entries(val)) {
        if (Array.isArray(v) || (v && typeof v === "object")) walk(v, `${prefix}.${k}`);
      }
    }
  };
  walk(node, prefix);
  return hits;
}

async function main() {
  const docs = await client.fetch(
    `*[_type in ["singlepage", "blog"]]{
      _id, _rev, _type, language, contentBlocks, body,
      "s": select(language == "en" => slug.en.current, language == "pl" => slug.pl.current, slug.ru.current),
      "p1": select(language == "en" => parentPage->slug.en.current, language == "pl" => parentPage->slug.pl.current, parentPage->slug.ru.current),
      "p2": select(language == "en" => parentPage->parentPage->slug.en.current, language == "pl" => parentPage->parentPage->slug.pl.current, parentPage->parentPage->slug.ru.current)
    }`,
  );

  const drafts = new Set(docs.filter((d) => d._id.startsWith("drafts.")).map((d) => d._id.slice(7)));
  const byUrl = new Map();
  for (const d of docs) {
    if (d._id.startsWith("drafts.")) continue;
    const seg = [d.p2, d.p1, d.s].filter(Boolean).join("/");
    const url = d._type === "blog" ? `${PREFIX[d.language] ?? ""}/blog/${d.s}` : `${PREFIX[d.language] ?? ""}/${seg}`;
    byUrl.set(url, d);
  }

  let ok = 0, done = 0, bad = 0;
  const patches = [];
  const firstPatchFor = new Set();

  for (const [url, oldText, newText] of EDITS) {
    const doc = byUrl.get(url);
    if (!doc) { console.log(`BAD   ${url}\n      страницы с таким адресом нет`); bad++; continue; }
    if (drafts.has(doc._id)) { console.log(`BAD   ${url}\n      у документа есть черновик — не трогаю`); bad++; continue; }

    const hitsOld = [
      ...findHeading(doc.contentBlocks || [], oldText, "contentBlocks"),
      ...findHeading(doc.body || [], oldText, "body"),
    ];
    const hitsNew = [
      ...findHeading(doc.contentBlocks || [], newText, "contentBlocks"),
      ...findHeading(doc.body || [], newText, "body"),
    ];

    if (!hitsOld.length && hitsNew.length) {
      console.log(`done  ${url}\n      уже «${newText}»`); done++; continue;
    }
    if (hitsOld.length !== 1) {
      console.log(`BAD   ${url}\n      «${oldText}» найден ${hitsOld.length} раз, ожидался 1`); bad++; continue;
    }

    const { path: p, block } = hitsOld[0];
    const spans = block.children.filter((c) => c && c._type === "span");
    if (block.children.length !== 1 || spans.length !== 1) {
      console.log(`BAD   ${url}\n      в заголовке ${block.children.length} фрагментов, правка одной строкой небезопасна`); bad++; continue;
    }

    const target = `${p}.children[_key=="${block.children[0]._key}"].text`;
    let tx = client.patch(doc._id).set({ [target]: newText });
    if (!firstPatchFor.has(doc._id)) { tx = tx.ifRevisionId(doc._rev); firstPatchFor.add(doc._id); }
    patches.push(tx);
    console.log(`ok    ${url}\n      «${oldText}» → «${newText}»`);
    ok++;
  }

  console.log(`\nok ${ok} · done ${done} · BAD ${bad} · правок к записи ${patches.length}`);
  if (bad) { console.error("\nЕсть BAD — ничего не записываю. Разберись с ними и запусти заново."); process.exit(1); }
  if (!APPLY) { console.log("\nСухой прогон. Для записи добавить --apply"); return; }
  if (!patches.length) { console.log("\nПисать нечего."); return; }

  let tx = client.transaction();
  for (const p of patches) tx = tx.patch(p);
  await tx.commit();
  console.log(`\nЗаписано: ${patches.length} заголовков. Вебхук ревалидирует страницы.`);
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
