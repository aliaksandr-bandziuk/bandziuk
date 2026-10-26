// scripts/apply-general-services-links.cjs
//
// Run after batch F (general service pages) is created and deployed:
//   EN /services/{seo-consultant, conversion-rate-optimization-services, wordpress-development-services, nextjs-development-services}
//   PL /pl/oferty/{freelancer-seo, konsultacje-seo, optymalizacja-konwersji, strona-na-wordpress, strony-w-nextjs, strona-wizytowka}
//   RU /ru/uslugi/{chastnyi-seo-specialist, seo-konsultaciya, optimizaciya-konversii, sait-na-wordpress, razrabotka-na-nextjs, sait-vizitka, prodvizhenie-saita}
//
// 1. Services hubs: WordPress, Next.js (and PL/RU business-card site) go into the
//    «by capability» section; the SEO person, consultation, CRO (and RU «продвижение
//    сайта») go into a new section «SEO consulting and conversion», created after the
//    AI section if it does not exist yet.
// 2. One sentence with links at the end of the main text of related pages.
//
// Idempotent; aborts on drafts; one transaction, one patch per change.
//
// Usage: node scripts/apply-general-services-links.cjs           dry run
//        node scripts/apply-general-services-links.cjs --apply   write

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

const key = () => crypto.randomBytes(6).toString("hex");
const plain = (b) => (b.children || []).map((c) => c.text).join("");
function para(...segments) {
  const markDefs = [];
  const children = segments.map((s) => {
    if (typeof s === "string") return { _type: "span", _key: key(), text: s, marks: [] };
    const mk = key();
    markDefs.push({ _type: "link", _key: mk, href: s[1] });
    return { _type: "span", _key: key(), text: s[0], marks: [mk] };
  });
  return { _type: "block", _key: key(), style: "normal", markDefs, children };
}

const L = {
  en: { cap: "Website development by capability", ai: "AI visibility & search", sec: "SEO consulting and conversion" },
  pl: { cap: "Tworzenie stron – według funkcji", ai: "Widoczność i wyszukiwanie AI", sec: "Konsultacje SEO i optymalizacja konwersji" },
  ru: { cap: "Разработка сайтов – по возможностям", ai: "Видимость и поиск в ИИ", sec: "SEO-специалист, консультации и конверсия" },
};
const id = (g, lang) => `singlepage-${g}${lang === "en" ? "" : `.${lang}`}`;
const HUB = [
  { lang: "en", title: L.en.cap, refs: [id("wordpress-development-services", "en"), id("nextjs-development-services", "en")] },
  { lang: "pl", title: L.pl.cap, refs: ["wordpress-development-services", "nextjs-development-services", "business-card-website"].map((g) => id(g, "pl")) },
  { lang: "ru", title: L.ru.cap, refs: ["wordpress-development-services", "nextjs-development-services", "business-card-website"].map((g) => id(g, "ru")) },
  { lang: "en", title: L.en.sec, create: L.en.ai, refs: ["seo-consultant", "conversion-rate-optimization-services"].map((g) => id(g, "en")) },
  { lang: "pl", title: L.pl.sec, create: L.pl.ai, refs: ["seo-consultant", "seo-consultation", "conversion-rate-optimization-services"].map((g) => id(g, "pl")) },
  { lang: "ru", title: L.ru.sec, create: L.ru.ai, refs: ["website-promotion", "seo-consultant", "seo-consultation", "conversion-rate-optimization-services"].map((g) => id(g, "ru")) },
];
const NEW = [...new Set(HUB.flatMap((h) => h.refs))];

const TEXT = [
  // EN
  { lang: "en", slug: "seo-optimization-and-strategy", para: para("If you are choosing one person rather than an agency, the ", ["SEO consultant", "/services/seo-consultant"], " page describes how working with me looks.") },
  { lang: "en", slug: "ai-seo-consultant", para: para("For SEO in Google as a whole — audits, local search, technical fixes — see the ", ["SEO consultant", "/services/seo-consultant"], " page.") },
  { lang: "en", slug: "seo-services-for-small-business", para: para("When visitors arrive but few of them call or write, the problem is on the page itself: see ", ["conversion rate optimization services", "/services/conversion-rate-optimization-services"], ".") },
  { lang: "en", slug: "small-business-website-design", para: para("The platform behind the site is a choice of its own: ", ["WordPress development services", "/services/wordpress-development-services"], " and ", ["Next.js development services", "/services/nextjs-development-services"], ".") },
  { lang: "en", slug: "website-platform-migration", para: para("Most migrations I do end on WordPress or on Next.js with a headless CMS: ", ["WordPress development", "/services/wordpress-development-services"], " and ", ["Next.js development", "/services/nextjs-development-services"], ".") },
  { lang: "en", slug: "landing-page-development", para: para("When a landing page gets traffic but few leads, ", ["conversion rate optimization", "/services/conversion-rate-optimization-services"], " finds and fixes the places where visitors drop off.") },
  // PL
  { lang: "pl", slug: "strategia-i-optymalizacja-seo", para: para("Jeśli szukacie jednej osoby zamiast agencji, zobaczcie stronę ", ["freelancer SEO", "/pl/oferty/freelancer-seo"], ", a jeśli na start wystarczy rozmowa — ", ["konsultacje SEO", "/pl/oferty/konsultacje-seo"], ".") },
  { lang: "pl", slug: "ekspert-ai-seo", para: para("Pozycjonowanie stron w Google w szerszym zakresie opisuję na stronie ", ["freelancer SEO", "/pl/oferty/freelancer-seo"], ", a jednorazową rozmowę o stronie — na stronie ", ["konsultacje SEO", "/pl/oferty/konsultacje-seo"], ".") },
  { lang: "pl", slug: "pozycjonowanie-strony-malej-firmy", para: para("Gdy ruch na stronie jest, a zapytań wciąż mało, zajrzyjcie na stronę ", ["optymalizacja konwersji", "/pl/oferty/optymalizacja-konwersji"], ".") },
  { lang: "pl", slug: "strona-internetowa-dla-malej-firmy", para: para("Specjaliście lub małej firmie często wystarczy ", ["strona wizytówka", "/pl/oferty/strona-wizytowka"], ". O wyborze platformy piszę na stronach ", ["strona na WordPress", "/pl/oferty/strona-na-wordpress"], " i ", ["strony w Next.js", "/pl/oferty/strony-w-nextjs"], ".") },
  { lang: "pl", slug: "migracja-strony-na-inna-platforme", para: para("Najczęściej przenoszę strony na WordPress albo do Next.js z headless CMS: ", ["strona na WordPress", "/pl/oferty/strona-na-wordpress"], " i ", ["strony w Next.js", "/pl/oferty/strony-w-nextjs"], ".") },
  { lang: "pl", slug: "tworzenie-landing-page", para: para("Gdy landing page ma ruch, ale mało zapytań, pomaga ", ["optymalizacja konwersji", "/pl/oferty/optymalizacja-konwersji"], ".") },
  // RU
  { lang: "ru", slug: "seo-optimizaciya-i-strategiya", para: para("Как продвижение сайта выглядит по этапам, срокам и цене, описано на странице ", ["продвижение сайта", "/ru/uslugi/prodvizhenie-saita"], ", а работа со мной как с исполнителем — на странице ", ["частный SEO-специалист", "/ru/uslugi/chastnyi-seo-specialist"], ".") },
  { lang: "ru", slug: "ai-seo-konsultant", para: para("Продвижение в Google в целом описано на странице ", ["частный SEO-специалист", "/ru/uslugi/chastnyi-seo-specialist"], ", а разовый разбор сайта — на странице ", ["SEO-консультация", "/ru/uslugi/seo-konsultaciya"], ".") },
  { lang: "ru", slug: "prodvizhenie-saita-malogo-biznesa", para: para("Если посетители на сайт приходят, а заявок мало, посмотрите страницу ", ["оптимизация конверсии", "/ru/uslugi/optimizaciya-konversii"], "; общий порядок работ — на странице ", ["продвижение сайта", "/ru/uslugi/prodvizhenie-saita"], ".") },
  { lang: "ru", slug: "sait-dlya-malogo-biznesa", para: para("Специалисту или небольшой компании часто хватает ", ["сайта-визитки", "/ru/uslugi/sait-vizitka"], ". О выборе платформы — на страницах ", ["сайт на WordPress", "/ru/uslugi/sait-na-wordpress"], " и ", ["разработка на Next.js", "/ru/uslugi/razrabotka-na-nextjs"], ".") },
  { lang: "ru", slug: "perenos-saita-na-druguyu-platformu", para: para("Чаще всего сайты переезжают на WordPress или на Next.js с headless CMS: ", ["сайт на WordPress", "/ru/uslugi/sait-na-wordpress"], " и ", ["разработка на Next.js", "/ru/uslugi/razrabotka-na-nextjs"], ".") },
  { lang: "ru", slug: "razrabotka-lendingov", para: para("Если на лендинг приходят, но не оставляют заявок, поможет ", ["оптимизация конверсии", "/ru/uslugi/optimizaciya-konversii"], ".") },
];

const getPage = (lang, s) => client.fetch(
  `*[_type in ["singlepage", "service"] && language == $lang && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]`,
  { lang, s },
);

async function main() {
  const exist = await client.fetch(`*[_id in $ids]._id`, { ids: NEW });
  if (exist.length !== NEW.length) { console.log(`Aborting — not in Sanity yet: ${NEW.filter((i) => !exist.includes(i)).join(", ")}`); process.exit(1); }
  const hubs = await client.fetch(
    `*[_type == "singlepage" && pageType == "servicesIndex" && !(_id in path("drafts.**"))]{
      _id, _rev, language, "blocks": contentBlocks[_type == "relatedServicesBlock"]{ _key, title, "refs": items[]._ref }
    }`,
  );
  for (const t of TEXT) {
    t.doc = await getPage(t.lang, t.slug);
    if (!t.doc) console.log(`warn  ${t.lang} «${t.slug}» not found — sentence skipped`);
  }
  const texts = TEXT.filter((t) => t.doc);
  const touched = [...hubs.map((h) => h._id), ...texts.map((t) => t.doc._id)];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: touched.map((i) => `drafts.${i}`) });
  if (drafts.length) { console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`); process.exit(1); }

  const patches = [];

  // 1. hubs — section by title; a missing «create» section is made after the AI section
  for (const h of HUB) {
    const hub = hubs.find((x) => x.language === h.lang);
    if (!hub) throw new Error(`${h.lang} services hub not found`);
    const sec = hub.blocks.find((b) => b.title === h.title);
    if (!sec && h.create) {
      const ai = hub.blocks.find((b) => b.title === h.create);
      if (!ai) throw new Error(`${h.lang} hub: section «${h.create}» not found; sections: ${hub.blocks.map((b) => b.title).join(" | ")}`);
      console.log(`new   ${h.lang} hub section «${h.title}» after «${h.create}»: ${h.refs.join(", ")}`);
      const block = { _key: key(), _type: "relatedServicesBlock", title: h.title, items: h.refs.map((r) => ({ _key: key(), _type: "reference", _ref: r })) };
      patches.push({ id: hub._id, rev: hub._rev, op: (q) => q.insert("after", `contentBlocks[_key=="${ai._key}"]`, [block]) });
      continue;
    }
    if (!sec) throw new Error(`${h.lang} hub: section «${h.title}» not found; sections: ${hub.blocks.map((b) => b.title).join(" | ")}`);
    const missing = h.refs.filter((r) => !(sec.refs || []).includes(r));
    if (!missing.length) { console.log(`skip  ${h.lang} hub «${sec.title}»: already lists all`); continue; }
    console.log(`add   ${h.lang} hub «${sec.title}»: ${missing.join(", ")}`);
    patches.push({ id: hub._id, rev: hub._rev, op: (q) => q.insert("after", `contentBlocks[_key=="${sec._key}"].items[-1]`, missing.map((r) => ({ _key: key(), _type: "reference", _ref: r }))) });
  }

  // 2. sentences
  for (const t of texts) {
    const blocks = (t.doc.contentBlocks || []).filter((x) => x._type === "textContent");
    // older pages have no guide block and start with heading-only text blocks — take the one with the most paragraphs
    const paras = (x) => (x.content || []).filter((y) => !/^h[1-6]$/.test(y.style || "")).length;
    const b = blocks.find((x) => x.layout === "guide") || [...blocks].sort((x, y) => paras(y) - paras(x))[0];
    if (!b || !(b.content || []).length) { console.log(`warn  ${t.lang} «${t.slug}»: no text block — sentence skipped`); continue; }
    if (blocks.some((x) => (x.content || []).some((y) => plain(y) === plain(t.para)))) { console.log(`skip  ${t.lang} «${t.slug}»: sentence already there`); continue; }
    // a text block may end with a heading that introduces the next block — never put the sentence under it
    let end = b.content.length;
    while (end > 0 && (/^h[1-6]$/.test(b.content[end - 1].style || "") || !plain(b.content[end - 1]).trim())) end--;
    const last = b.content[end - 1];
    if (!last) { console.log(`warn  ${t.lang} «${t.slug}»: no paragraph in the main text — sentence skipped`); continue; }
    if (last !== b.content[b.content.length - 1]) console.log(`note  ${t.lang} «${t.slug}»: text block ends with «${plain(b.content[b.content.length - 1]).slice(0, 40)}…» — inserting before it`);
    console.log(`\n${t.lang} «${t.slug}» (end of the main text, after «${plain(last).slice(0, 50)}…»):\n  ${plain(t.para)}`);
    patches.push({ id: t.doc._id, rev: t.doc._rev, op: (q) => q.insert("after", `contentBlocks[_key=="${b._key}"].content[_key=="${last._key}"]`, [t.para]) });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${patches.length} change(s), nothing written. Add --apply to write.`);
  const tx = client.transaction();
  const seen = new Set();
  for (const p of patches) {
    const first = !seen.has(p.id); seen.add(p.id);
    tx.patch(p.id, (q) => p.op(first ? q.ifRevisionId(p.rev) : q));
  }
  await tx.commit();
  console.log(`\nWritten: ${[...seen].join(", ")}`);
  console.log("The webhook revalidates these pages.");
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
