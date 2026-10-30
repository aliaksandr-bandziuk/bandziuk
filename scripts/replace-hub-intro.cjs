// scripts/replace-hub-intro.cjs
//
// Replaces the legacy intro on the three services hubs (/services, /pl/oferty,
// /ru/uslugi) with one short block that helps the visitor choose. Plan and
// reasoning: claude/thin-pages-plan.md, draft: drafts/hub-blocks.md.
//
// Why not replace-landing.cjs: that rebuilds the page from a fixture, and these
// hubs carry seven relatedServicesBlock with 176 references between them.
// Reproducing those by hand is how links get lost. This script therefore edits
// by _key: it removes exactly three blocks, inserts one, and does not touch the
// FAQ or any of the link lists.
//
// What the legacy blocks were: slogan copy ("W świecie, gdzie konkurencja
// online jest ogromna…"), duplicated by the ~45 service cards above them and
// written in a register the rest of the site has left behind. Also removed with
// them: an emoji in the body, a paragraph reading literally "H3: Przykładowe
// integracje", a "loads in under 2 seconds" promise and a claim about what
// "most web studios" do.
//
// The H1 changes too. The old one ("Tworzenie stron internetowych i SEO") is
// the head term that the hub's own child page was retargeted to own in stage 1.
// Search Console shows the hub gets no impressions at all, so nothing is lost
// by giving the phrase back, and the new H1 names actions rather than bare
// nouns, per the owner's heading rule.
//
// Usage: node scripts/replace-hub-intro.cjs           dry run
//        node scripts/replace-hub-intro.cjs --apply   write

const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const k = () => crypto.randomBytes(6).toString("hex");
const PREFIX = { en: "", pl: "/pl", ru: "/ru" };

// A link is written as { t: "anchor text", to: "slug-of-the-target-page" }.
// The slug is resolved to a full path below, and a slug that resolves to
// nothing aborts the run — a dead internal link is worse than no link.
const L = (t, to) => ({ t, to });

const PAGES = [
  {
    lang: "pl",
    slug: "oferty",
    remove: ["5f29ca55aebe", "42772be7ed40", "d6a8e2ea0116"],
    heading: "Budowa stron, pozycjonowanie i widoczność w wyszukiwarkach AI",
    metaTitle: "Usługi: tworzenie stron, SEO i integracje | Bandziuk",
    metaDescription:
      "Strony na Next.js i WordPressie, pozycjonowanie, audyty i widoczność w wyszukiwarkach AI — u jednej osoby, która projektuje, koduje i prowadzi SEO.",
    content: [
      ["h2", "Jak wybrać między budową strony, pozycjonowaniem i audytem"],
      ["p", "Trzy sytuacje, z którymi firmy się do mnie zgłaszają, wymagają trzech różnych prac, a pomylenie ich kosztuje najwięcej."],
      ["p", "Strony nie ma albo jest na tyle stara, że nie da się jej rozbudować — wtedy zaczynamy od budowy. Projekt, kod i SEO techniczne idą jedną pracą, a nie optymalizacją doklejaną na końcu."],
      ["p", ["Strona jest, ale zapytań z Google nie ma — wtedy nowa strona niczego nie zmieni, bo problem leży gdzie indziej. Zaczynamy od ", L("audytu", "audyt-seo-strony-internetowej"), ": pokazuje, co konkretnie blokuje widoczność, i dopiero po nim ma sens stałe pozycjonowanie."]],
      ["p", "Strona została przebudowana i pozycje spadły — to osobny przypadek, w którym najpierw odzyskuje się to, co było, a dopiero potem buduje dalej."],
      ["p", "Jeśli nie wiesz, który z tych trzech przypadków jest Twój, napisz. Odpowiem, zanim cokolwiek wycenię — bo wycena bez tego rozpoznania jest zgadywaniem."],

      ["h2", "Ile kosztuje budowa strony i ile kosztuje pozycjonowanie"],
      ["p", ["Strona wizytówka zaczyna się od 700 €, strona na WordPressie od 3000 zł z projektem graficznym w cenie, rozbudowany serwis firmowy od 8500 zł. Audyt SEO od 250 €. Stałe pozycjonowanie od 800 € miesięcznie. Pełny cennik z zakresem każdego wariantu jest na ", L("stronie z cennikiem", "cennik"), "."]],
      ["p", "Cena zależy od liczby podstron, języków i integracji, a nie od branży. Wycenę podaję po rozmowie i obejrzeniu tego, co już macie. Wystawiam fakturę, w euro albo w złotych."],

      ["h2", "Ile trwa budowa strony i po jakim czasie pozycjonowanie daje efekty"],
      ["p", "Strona wizytówka — dwa do trzech tygodni. Rozbudowany serwis z CMS i kilkoma językami — cztery do ośmiu tygodni."],
      ["p", "Pozycjonowanie ma inną skalę i warto to wiedzieć przed podpisaniem umowy: pierwsze efekty widać zwykle po około półtora miesiąca, a wzrost, o który chodzi, buduje się trzy do sześciu miesięcy. Kto obiecuje szybciej, obiecuje coś, nad czym nie ma kontroli."],

      ["h2", "Co zostaje u Ciebie, gdy współpraca się kończy: kod, domena, dostępy"],
      ["p", "Kod, domena, treści i dostępy do CMS są Twoje od pierwszego dnia i zostają u Ciebie, także wtedy, gdy zdecydujesz się pracować z kimś innym. Nie trzymam stron na swoim koncie hostingowym, nie blokuję eksportu i nie prowadzę projektów tak, żeby nie dało się ich przejąć. To samo dotyczy danych z analityki."],

      ["h2", "Dlaczego widoczność w wyszukiwarkach AI wymaga osobnej pracy"],
      ["p", ["ChatGPT, Perplexity i podsumowania AI w Google odpowiadają na pytania Waszych klientów i wymieniają przy tym konkretne firmy. To nie dzieje się samo przy okazji pozycjonowania: wymaga innego sposobu pisania, danych strukturalnych zgodnych z treścią i pomiaru na stałym zestawie pytań przed i po. Dlatego opisuję tę pracę ", L("osobno", "audyt-widocznosci-w-ai"), "."]],
    ],
  },
  {
    lang: "ru",
    slug: "uslugi",
    remove: ["bfe5f61581b3", "f4ccf5e70694", "a8ad1285a4dc"],
    heading: "Создание сайтов, продвижение и видимость в ИИ-поиске",
    metaTitle: "Услуги: разработка сайтов, SEO, интеграции и ИИ-поиск | Bandziuk",
    metaDescription:
      "Сайты на Next.js и WordPress, SEO, аудиты и видимость в ИИ-поиске — у одного человека, который делает дизайн, код и продвижение.",
    content: [
      ["h2", "Как выбрать между созданием сайта, продвижением и аудитом"],
      ["p", "Компании приходят с тремя разными ситуациями, и это три разные работы. Перепутать их дороже всего."],
      ["p", "Сайта нет или он настолько старый, что развивать его нельзя — тогда начинаем с разработки. Дизайн, код и техническое SEO идут одной работой, а не оптимизацией, прикрученной в конце."],
      ["p", ["Сайт есть, а обращений из поиска нет — тогда новый сайт ничего не изменит, потому что причина не в нём. Начинаем с ", L("аудита", "seo-audit-saita"), ": он показывает, что именно мешает видимости, и только после него есть смысл в постоянном продвижении."]],
      ["p", "Сайт переделали, и позиции упали — это отдельный случай, где сначала возвращают то, что было, и только потом растут дальше."],
      ["p", "Если не знаете, какой из трёх случаев ваш, напишите. Отвечу до того, как назову цену: оценка без этого — угадывание."],

      ["h2", "Сколько стоит создание сайта и сколько стоит продвижение"],
      ["p", ["Сайт-визитка — от 700 €, сайт для бизнеса — от 2000 €, лендинг — 700–1400 €, редизайн существующего сайта — от 1000 €. SEO-аудит — от 250 €. Постоянное продвижение — от 800 € в месяц. Полный прайс с составом каждого варианта есть на ", L("странице цен", "ceny"), "."]],
      ["p", "Цена зависит от числа страниц, языков и интеграций, а не от отрасли. Оценку называю после разговора и осмотра того, что уже есть. Выставляю фактуру, в евро или другой валюте по договорённости."],

      ["h2", "Сколько длится создание сайта и через сколько продвижение даёт результат"],
      ["p", "Сайт-визитка — две-три недели. Большой сайт с CMS и несколькими языками — четыре-восемь недель."],
      ["p", "У продвижения другой масштаб, и это стоит знать заранее: первые результаты обычно видны примерно через полтора месяца, а рост, ради которого всё затевается, набирается три-шесть месяцев. Кто обещает быстрее, обещает то, что не контролирует."],

      ["h2", "Что остаётся у вас, когда работа закончена: код, домен, доступы"],
      ["p", "Код, домен, тексты и доступы к CMS принадлежат вам с первого дня и остаются у вас, в том числе если решите работать с кем-то другим. Я не держу сайты на своём хостинге, не закрываю экспорт и не веду проекты так, чтобы их нельзя было забрать. То же касается данных аналитики."],

      ["h2", "Почему видимость в ИИ-поиске требует отдельной работы"],
      ["p", ["ChatGPT, Perplexity и обзоры от ИИ в Google отвечают на вопросы ваших клиентов и называют при этом конкретные компании. Само собой при продвижении это не происходит: нужны другой способ изложения, структурированные данные, совпадающие с текстом, и замер на постоянном наборе вопросов до и после. Поэтому я описываю эту работу ", L("отдельно", "audit-vidimosti-v-ii-poiske"), "."]],
    ],
  },
  {
    lang: "en",
    slug: "services",
    remove: ["7d9c658856f9", "7315fee16827", "21b065f47865"],
    heading: "Building websites, running SEO and getting named in AI answers",
    metaTitle: "Services: websites, SEO, integrations and AI visibility | Bandziuk",
    metaDescription:
      "Websites on Next.js and WordPress, SEO, audits and AI search visibility — from one person who designs, builds and runs the SEO.",
    content: [
      ["h2", "How to choose between building a site, running SEO and ordering an audit"],
      ["p", "Businesses come to me with three different situations, and they call for three different jobs. Confusing them is the expensive mistake."],
      ["p", "There is no site, or the one there is cannot be extended — then we start with the build. Design, code and technical SEO are one piece of work, not optimisation bolted on at the end."],
      ["p", ["There is a site, but no enquiries from Google — then a new site changes nothing, because the problem sits elsewhere. We start with an ", L("audit", "seo-audit"), ": it shows what is actually blocking visibility, and only after that does ongoing SEO make sense."]],
      ["p", "The site was rebuilt and the rankings dropped — that is its own case, where you first recover what was there and only then grow further."],
      ["p", "If you do not know which of the three is yours, write to me. I will answer before quoting anything, because a quote without that diagnosis is guesswork."],

      ["h2", "What building a website costs and what running SEO costs"],
      ["p", ["A business-card site starts at €700, a full company site at €2,000, a landing page runs €700–1,400 and a redesign of an existing site starts at €1,000. An SEO audit starts at €250. Ongoing SEO starts at €800 a month. The full price list, with what each option includes, is on the ", L("pricing page", "pricing"), "."]],
      ["p", "Price depends on the number of pages, languages and integrations, not on your industry. I quote after a conversation and a look at what you already have, and I invoice for the work done."],

      ["h2", "How long building a site takes and when SEO starts showing results"],
      ["p", "A business-card site takes two to three weeks. A larger site with a CMS and several languages takes four to eight weeks."],
      ["p", "SEO works on a different scale, and it is worth knowing before you sign: first results usually show after about six weeks, and the growth the work is for builds over three to six months. Anyone promising faster is promising something they do not control."],

      ["h2", "What stays with you when the work ends: code, domain, logins"],
      ["p", "The code, the domain, the content and the CMS logins are yours from day one and stay yours, including if you decide to work with someone else. I do not keep sites on my own hosting account, I do not block exports, and I do not run projects so that they cannot be handed over. The same goes for the analytics data."],

      ["h2", "Why visibility in AI search takes separate work"],
      ["p", ["ChatGPT, Perplexity and Google's AI overviews answer your customers' questions and name specific companies while doing it. That does not happen as a side effect of SEO: it needs a different way of writing, structured data that matches the text, and measurement on a fixed set of questions before and after. That is why I describe it as ", L("its own job", "ai-visibility-audit"), "."]],
    ],
  },
];

// slug -> full path, following parentPage up to two levels. GROQ does not
// substitute the document's own language inside slug[...], so the locale key is
// written out per language.
async function pathFor(lang, slug) {
  const q = `*[_type == "singlepage" && language == "${lang}" && slug.${lang}.current == $s && !(_id in path("drafts.**"))][0]{
    "self": slug.${lang}.current,
    "p1": parentPage->slug.${lang}.current,
    "p2": parentPage->parentPage->slug.${lang}.current
  }`;
  const r = await client.fetch(q, { s: slug });
  if (!r || !r.self) return null;
  return `${PREFIX[lang]}/${[r.p2, r.p1, r.self].filter(Boolean).join("/")}`;
}

function block(style, parts, links) {
  const markDefs = [];
  const children = (Array.isArray(parts) ? parts : [parts]).map((s) => {
    if (typeof s === "string") return { _type: "span", _key: k(), text: s, marks: [] };
    const mk = k();
    markDefs.push({ _type: "link", _key: mk, href: links[s.to] });
    return { _type: "span", _key: k(), text: s.t, marks: [mk] };
  });
  return { _type: "block", _key: k(), style, markDefs, children };
}

async function main() {
  const patches = [];
  let bad = false;

  for (const page of PAGES) {
    const label = `${page.lang} /${page.slug}`;
    const q = `*[_type == "singlepage" && language == "${page.lang}" && slug.${page.lang}.current == $s && !(_id in path("drafts.**"))][0]`;
    const doc = await client.fetch(q, { s: page.slug });
    if (!doc) { console.log(`STOP ${label}: страница не найдена`); bad = true; continue; }

    const draft = await client.fetch(`*[_id == $id][0]._id`, { id: `drafts.${doc._id}` });
    if (draft) { console.log(`STOP ${label}: есть черновик ${draft} — опубликуйте или удалите его`); bad = true; continue; }

    const blocks = Array.isArray(doc.contentBlocks) ? doc.contentBlocks : [];
    const idx = blocks.findIndex((b) => b && b._key === page.remove[0]);
    const missing = page.remove.filter((key) => !blocks.some((b) => b && b._key === key));
    if (missing.length) {
      console.log(`STOP ${label}: нет блоков с ключами ${missing.join(", ")} — страницу правили после выгрузки`);
      bad = true; continue;
    }

    // Resolve every link before building anything.
    const wanted = [...new Set(page.content.flatMap(([, p]) =>
      (Array.isArray(p) ? p : []).filter((x) => x && x.to).map((x) => x.to)))];
    const links = {};
    for (const slug of wanted) {
      const p = await pathFor(page.lang, slug);
      if (!p) { console.log(`STOP ${label}: ссылка ведёт в никуда — нет страницы «${slug}»`); bad = true; }
      links[slug] = p;
    }
    if (bad) continue;

    const fresh = {
      _type: "textContent",
      _key: k(),
      content: page.content.map(([style, parts]) => block(style === "h2" ? "h2" : "normal", parts, links)),
    };
    const kept = blocks.filter((b) => !page.remove.includes(b && b._key));
    const next = [...kept.slice(0, idx), fresh, ...kept.slice(idx)];

    console.log(`\n## ${label}`);
    console.log(`  H1:   ${doc.heading || "(нет)"}`);
    console.log(`     →  ${page.heading}`);
    console.log(`  meta: ${(doc.seo && doc.seo.metaTitle) || "(нет)"}`);
    console.log(`     →  ${page.metaTitle}`);
    console.log(`  блоков: ${blocks.length} → ${next.length} (удаляются 3, добавляется 1)`);
    console.log(`  остаются нетронутыми: ${kept.map((b) => b._type).join(", ")}`);
    for (const [slug, p] of Object.entries(links)) console.log(`  ссылка «${slug}» → ${p}`);

    patches.push({
      id: doc._id,
      rev: doc._rev,
      set: {
        contentBlocks: next,
        heading: page.heading,
        seo: { ...(doc.seo || {}), metaTitle: page.metaTitle, metaDescription: page.metaDescription },
      },
    });
  }

  if (bad) { console.log("\nНичего не записано: сначала исправьте то, что выше."); process.exit(1); }
  if (!APPLY) { console.log(`\nПробный прогон — ${patches.length} страницы, ничего не записано. Добавьте --apply.`); return; }

  const tx = client.transaction();
  for (const p of patches) tx.patch(p.id, (q) => q.ifRevisionId(p.rev).set(p.set));
  await tx.commit();
  console.log(`\nЗаписано: ${patches.length} страницы. Вебхук перестроит их.`);
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
