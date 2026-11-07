// scripts/link-medical-batch-2026-11-07.cjs
//
// Inbound links for the fifteen medical pages created 07.11.2026:
//   pediatricians, psychiatrists, podiatrists, speech therapists (website type)
//   cardiologists (SEO type), in EN, PL and RU.
//
// The menu gives each of them one link; that is not enough, and we learned it
// the expensive way on 05.11, when twenty fresh pages turned out to be
// orphans. The donors here are the nearest already-indexed neighbours:
// the general medical website page for paediatrics and podiatry, the
// psychologist and therapist page for psychiatry and speech therapy, and the
// medical SEO pages for cardiology — website pages pointing at website pages
// and SEO pages at SEO pages, in each language.
//
// Two donors carry two inserts each; the loop re-reads the document at the
// start of every entry, so the second patch sees the fresh revision.
//
// It also carries one word fix on /ru/sait-dlya-podologa, written after that
// page had already been applied.
//
// One new paragraph per insertion, placed straight after a declared anchor
// paragraph. Nothing existing is rewritten, no heading moves.
//
// Usage:
//   node scripts/link-medical-batch-2026-11-07.cjs            dry run
//   node scripts/link-medical-batch-2026-11-07.cjs --apply    writes
const path = require("path");
const { createClient } = require("@sanity/client");
const { blockFromMarkup } = require("./lib/portable-text-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");

const LINKS = [
  {
    id: "singlepage-medical-website-design",
    where: "/medical-website-design",
    href: "/pediatrician-website-design",
    anchor:
      "Yes, for a solo practice that needs a basic presence. A template becomes a limit once you need a profile per doctor, several locations, online booking, language versions and tested accessibility. Changing later usually means starting again.",
    insert:
      "A children's clinic is organised differently, because the person reading it is a parent holding a crying child one-handed: [[pediatrician website design|/pediatrician-website-design]].",
  },
  {
    id: "singlepage-medical-website-design.pl",
    where: "/pl/strona-internetowa-dla-lekarza",
    href: "/pl/strona-internetowa-dla-pediatry",
    anchor:
      "Na początek może wystarczyć. Profil należy jednak do serwisu i pokazuje obok innych lekarzy. Własna strona jest Wasza, pojawia się w Google po nazwisku i specjalizacji, a kalendarz z ZnanyLekarz można na niej osadzić.",
    insert:
      "Poradnia dziecięca układa się inaczej, bo stronę czyta rodzic z dzieckiem na ręku: [[strona internetowa dla pediatry|/pl/strona-internetowa-dla-pediatry]].",
  },
  {
    id: "singlepage-medical-website-design.ru",
    where: "/ru/sait-dlya-kliniki",
    href: "/ru/sait-dlya-pediatra",
    anchor:
      "Да, если ваша система даёт виджет или ссылку для записи — большинство дают. Если нет, форма заявки передаёт запрос администратору, а запись подтверждается звонком или сообщением.",
    insert:
      "У детской клиники запись и структура устроены иначе, потому что сайт открывают одной рукой, держа ребёнка: [[сайт для педиатра|/ru/sait-dlya-pediatra]].",
  },
  {
    id: "singlepage-medical-website-design",
    where: "/medical-website-design",
    href: "/podiatrist-website-design",
    anchor:
      "Yes, if your scheduling or practice-management system offers a booking widget, a booking link or a portal login page — most do. The design places booking on every page and keeps the portal link separate for existing patients.",
    insert:
      "A podiatry practice books differently, because the visitor is in pain today and compares prices per procedure: [[podiatrist website design|/podiatrist-website-design]].",
  },
  {
    id: "singlepage-medical-website-design.pl",
    where: "/pl/strona-internetowa-dla-lekarza",
    href: "/pl/strona-internetowa-dla-podologa",
    anchor:
      "Tak, jeśli Wasz system gabinetowy albo serwis rezerwacji udostępnia kalendarz do osadzenia lub link — większość to umożliwia. W innym przypadku formularz prośby o termin przekazuje zgłoszenie do rejestracji.",
    insert:
      "W gabinecie podologicznym zapis wygląda inaczej, bo pacjenta boli dzisiaj i porównuje ceny za zabieg: [[strona internetowa dla podologa|/pl/strona-internetowa-dla-podologa]].",
  },
  {
    id: "singlepage-medical-website-design.ru",
    where: "/ru/sait-dlya-kliniki",
    href: "/ru/sait-dlya-podologa",
    anchor:
      "Можно и нужно — факты: услуги, врачи и их квалификация, цены, лицензия, адреса и часы. Нельзя обещать излечение, гарантировать результат и называть себя лучшими: медицинская реклама в большинстве стран регулируется. Тексты стоит показать юристу клиники.",
    insert:
      "В кабинете подологии к этому добавляются фотографии до и после и граница с педикюром: [[сайт для подолога|/ru/sait-dlya-podologa]].",
  },
  {
    id: "singlepage-website-for-psychologists-therapists",
    where: "/website-for-psychologists-therapists",
    href: "/psychiatrist-website-design",
    anchor:
      "For a solo therapist with one office and a few pages, often yes. A custom site makes sense with several clinicians, a second language, a blog worth keeping or wording rules you want the editor to enforce.",
    insert:
      "A psychiatric practice needs more than a template can hold: intake criteria, a waiting list and a page for referring doctors — [[psychiatrist website design|/psychiatrist-website-design]].",
  },
  {
    id: "singlepage-website-for-psychologists-therapists.pl",
    where: "/pl/strona-dla-psychologow-terapeutow",
    href: "/pl/strona-internetowa-dla-psychiatry",
    anchor:
      "Przy jednym gabinecie i kilku podstronach często tak. Strona na zamówienie ma sens przy kilku terapeutach, drugim języku, blogu, który warto zachować, albo zasadach treści, których ma pilnować panel.",
    insert:
      "Gabinet psychiatryczny potrzebuje więcej, niż kreator zmieści: kryteriów przyjęć, listy oczekujących i podstrony dla lekarzy kierujących — [[strona internetowa dla psychiatry|/pl/strona-internetowa-dla-psychiatry]].",
  },
  {
    id: "singlepage-website-for-psychologists-therapists.ru",
    where: "/ru/sait-dlya-psihologov-terapevtov",
    href: "/ru/sait-dlya-psihiatra",
    anchor:
      "Если вы работаете одни, на одном языке и вам нужно несколько страниц — часто да. Сайт на заказ нужен при нескольких специалистах, двух-трёх языках, блоге, который стоит сохранить, или правилах формулировок, за которыми должна следить админка.",
    insert:
      "Психиатрической практике нужно больше, чем вмещает шаблон: критерии приёма, лист ожидания и страница для направляющих коллег — [[сайт для психиатра|/ru/sait-dlya-psihiatra]].",
  },
  {
    id: "singlepage-website-for-psychologists-therapists",
    where: "/website-for-psychologists-therapists",
    href: "/speech-therapist-website-design",
    anchor:
      "Yes. You get an editor with protected key pages, locked addresses for published pages and, if you want, warnings for wording your ethics code rules out, plus a written manual and short videos.",
    insert:
      "A speech therapy practice edits different things: the age pages, the evaluation price and the waiting time — [[speech therapist website design|/speech-therapist-website-design]].",
  },
  {
    id: "singlepage-website-for-psychologists-therapists.pl",
    where: "/pl/strona-dla-psychologow-terapeutow",
    href: "/pl/strona-internetowa-dla-logopedy",
    anchor:
      "Tak. Dostajesz panel z chronionymi podstronami, zablokowanymi adresami opublikowanych stron i — jeśli chcesz — ostrzeżeniami o sformułowaniach, których nie wolno używać, a do tego instrukcję i krótkie filmy.",
    insert:
      "W gabinecie logopedycznym edytuje się inne rzeczy: podstrony według wieku, cenę diagnozy i najbliższy termin — [[strona internetowa dla logopedy|/pl/strona-internetowa-dla-logopedy]].",
  },
  {
    id: "singlepage-website-for-psychologists-therapists.ru",
    where: "/ru/sait-dlya-psihologov-terapevtov",
    href: "/ru/sait-dlya-logopeda",
    anchor:
      "Да. Вы получаете админку с защищёнными ключевыми страницами, заблокированными адресами опубликованных страниц и, если нужно, предупреждениями о недопустимых формулировках, плюс инструкцию и короткие видео.",
    insert:
      "В логопедическом кабинете править приходится другое: страницы по возрастам, цену диагностики и срок записи — [[сайт для логопеда|/ru/sait-dlya-logopeda]].",
  },
  {
    id: "singlepage-medical-seo",
    where: "/medical-seo",
    href: "/seo-for-cardiologists",
    anchor:
      "I write the structure, the search data and drafts. Your clinicians check and approve every clinical statement, and the page names the reviewer. I do not give medical advice.",
    insert:
      "In cardiology the queries sit elsewhere entirely — on the name of the test the patient was just sent for: [[SEO for cardiologists|/seo-for-cardiologists]].",
  },
  {
    id: "singlepage-medical-seo.ru",
    where: "/ru/prodvizhenie-medicinskogo-saita",
    href: "/ru/prodvizhenie-saita-kardiologa",
    anchor:
      "Я пишу структуру, данные поиска и черновики. Медицинские утверждения проверяют и утверждают ваши врачи, а на странице указан проверяющий врач. Медицинских советов я не даю.",
    insert:
      "В кардиологии запросы лежат совсем в другом месте — в названии исследования, на которое пациента только что отправили: [[продвижение сайта кардиолога|/ru/prodvizhenie-saita-kardiologa]].",
  },
  {
    id: "singlepage-dentist-seo.pl",
    where: "/pl/pozycjonowanie-strony-gabinetu-stomatologicznego",
    href: "/pl/pozycjonowanie-strony-kardiologa",
    anchor:
      "Poprawki w wizytówce Google potrafią zadziałać w kilka tygodni. Nowe podstrony zabiegów zwykle potrzebują dwóch–czterech miesięcy, w dużych miastach dłużej.",
    insert:
      "W kardiologii zapytania wyglądają inaczej: pacjent wpisuje nazwę badania razem z ceną i terminem — [[pozycjonowanie strony kardiologa|/pl/pozycjonowanie-strony-kardiologa]].",
  },];

// One word, on a page applied before the wording was corrected.
const WORD_FIXES = [
  {
    id: "singlepage-podiatrist-website.ru",
    where: "/ru/sait-dlya-podologa",
    from: "или честное «ближайшая запись на следующей неделе»",
    to: "или прямое «ближайшая запись на следующей неделе»",
  },
];

const textOf = (block) => (block.children || []).map((c) => c.text || "").join("");

/** The language and the slug a donor URL implies — all donors here sit at the root. */
const langOf = (where) => (where.startsWith("/pl/") ? "pl" : where.startsWith("/ru/") ? "ru" : "en");
const slugOf = (where) => where.split("/").filter(Boolean).pop();

/**
 * The donor document. The id is a guess built from the fixture group, which only
 * holds for pages created by create-landing.cjs; older pages carry other ids, so
 * fall back to the slug, which is what the URL actually guarantees.
 */
async function resolveDoc(link) {
  if (link.id) {
    const byId = await client.getDocument(link.id);
    if (byId) return byId;
  }
  const lang = langOf(link.where);
  return client.fetch(
    `*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug && !(_id in path("drafts.**"))][0]`,
    { lang, slug: slugOf(link.where) }
  );
}

/** Every array that holds a block whose text equals `text`, with its index. */
function findSpots(node, text, found = []) {
  if (Array.isArray(node)) {
    node.forEach((item, i) => {
      if (item && item._type === "block" && textOf(item) === text) found.push({ arr: node, index: i });
      findSpots(item, text, found);
    });
    return found;
  }
  if (node && typeof node === "object") {
    for (const k of Object.keys(node)) {
      if (k.startsWith("_") && k !== "_type") continue;
      findSpots(node[k], text, found);
    }
  }
  return found;
}

/** Every block, anywhere in the value, whose text contains `text`. */
function findContaining(node, text, found = []) {
  if (Array.isArray(node)) {
    node.forEach((item) => {
      if (item && item._type === "block" && textOf(item).includes(text)) found.push(item);
      findContaining(item, text, found);
    });
    return found;
  }
  if (node && typeof node === "object") {
    for (const k of Object.keys(node)) {
      if (k.startsWith("_") && k !== "_type") continue;
      findContaining(node[k], text, found);
    }
  }
  return found;
}

/** True when any block in the value already links to href. */
function hasLink(node, href) {
  if (Array.isArray(node)) return node.some((item) => hasLink(item, href));
  if (node && typeof node === "object") {
    if (Array.isArray(node.markDefs) && node.markDefs.some((m) => m && m.href === href)) return true;
    for (const k of Object.keys(node)) {
      if (k.startsWith("_") && k !== "_type") continue;
      if (hasLink(node[k], href)) return true;
    }
  }
  return false;
}

async function main() {
  let written = 0;
  let skipped = 0;
  const failed = [];

  for (const link of LINKS) {
    const doc = await resolveDoc(link);
    if (!doc) {
      failed.push(`${link.where}: no document found by id ${link.id} or by its slug`);
      continue;
    }
    if (hasLink(doc.contentBlocks, link.href)) {
      console.log(`${link.where} -> ${link.href}\n  already applied, skipping\n`);
      skipped += 1;
      continue;
    }

    const spots = findSpots(doc.contentBlocks, link.anchor);
    if (spots.length !== 1) {
      failed.push(`${link.where}: the anchor paragraph was found ${spots.length} times, expected once`);
      continue;
    }

    console.log(`${link.where} -> ${link.href}`);
    console.log(`  after: «${link.anchor.slice(0, 70)}…»`);
    console.log(`  insert: «${link.insert.replace(/\[\[([^|\]]+)\|[^\]]+\]\]/, "$1")}»\n`);

    if (!APPLY) continue;

    const blocks = JSON.parse(JSON.stringify(doc.contentBlocks));
    const spot = findSpots(blocks, link.anchor)[0];
    spot.arr.splice(spot.index + 1, 0, blockFromMarkup(link.insert));

    await client.patch(doc._id).ifRevisionId(doc._rev).set({ contentBlocks: blocks }).commit();

    const after = await client.getDocument(doc._id);
    if (!hasLink(after.contentBlocks, link.href)) {
      failed.push(`${link.where}: written, but the re-read does not contain the link`);
      continue;
    }
    console.log("  written and re-read OK\n");
    written += 1;
  }

  for (const fix of WORD_FIXES) {
    const doc = await client.getDocument(fix.id);
    if (!doc) {
      failed.push(`${fix.where}: document ${fix.id} not found`);
      continue;
    }
    if (findContaining(doc.contentBlocks, fix.to).length) {
      console.log(`${fix.where} word fix\n  already applied, skipping\n`);
      skipped += 1;
      continue;
    }
    const hits = findContaining(doc.contentBlocks, fix.from);
    if (hits.length !== 1) {
      failed.push(`${fix.where}: the old wording was found ${hits.length} times, expected once`);
      continue;
    }
    console.log(`${fix.where} word fix`);
    console.log(`  «${fix.from}» -> «${fix.to}»\n`);
    if (!APPLY) continue;

    const blocks = JSON.parse(JSON.stringify(doc.contentBlocks));
    const block = findContaining(blocks, fix.from)[0];
    const idx = (block.children || []).findIndex(
      (c) => c._type === "span" && (!c.marks || c.marks.length === 0) && (c.text || "").includes(fix.from)
    );
    if (idx === -1) {
      failed.push(`${fix.where}: the old wording straddles a mark boundary — not patched`);
      continue;
    }
    block.children[idx] = { ...block.children[idx], text: block.children[idx].text.replace(fix.from, fix.to) };

    await client.patch(fix.id).ifRevisionId(doc._rev).set({ contentBlocks: blocks }).commit();

    const after = await client.getDocument(fix.id);
    if (!findContaining(after.contentBlocks, fix.to).length) {
      failed.push(`${fix.where}: written, but the re-read does not contain the new wording`);
      continue;
    }
    console.log("  written and re-read OK\n");
    written += 1;
  }

  if (failed.length) {
    console.log("Problems:");
    failed.forEach((f) => console.log(`  ${f}`));
  }
  const planned = LINKS.length + WORD_FIXES.length;
  console.log(APPLY
    ? `Done: ${written} written, ${skipped} already applied, ${failed.length} failed.`
    : `Dry run — nothing written. ${planned - skipped - failed.length} would be applied. Add --apply to write.`);
  if (failed.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
