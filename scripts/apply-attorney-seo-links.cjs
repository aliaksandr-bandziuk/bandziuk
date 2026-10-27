// scripts/apply-attorney-seo-links.cjs
//
// Run after the «Attorney SEO» article is published:
//   /blog/attorney-seo, /pl/blog/marketing-i-seo-kancelarii-prawnej,
//   /ru/blog/prodvizhenie-saita-yuridicheskoi-kompanii
//
// 1. One sentence with a link to the article at the end of a matching H2 section on
//    the legal service pages and the older legal blog articles (EN / PL / RU).
// 2. Related articles: the new article goes first on the older legal articles.
//
// Run fix-lawyer-ethics-claims.cjs first: the PL section headings it renames are
// matched here by their common beginning, so either order works, but the text
// around the link should already be correct.
// One patch per change (a Sanity patch holds one insert). Idempotent; aborts on
// drafts; one transaction.
//
// Usage: node scripts/apply-attorney-seo-links.cjs           dry run
//        node scripts/apply-attorney-seo-links.cjs --apply   write

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
const norm = (t) => t.replace(/[‘’]/g, "'").trim().toLowerCase();
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

const ART = {
  en: { id: "blog-attorney-seo", url: "/blog/attorney-seo" },
  pl: { id: "blog-attorney-seo.pl", url: "/pl/blog/marketing-i-seo-kancelarii-prawnej" },
  ru: { id: "blog-attorney-seo.ru", url: "/ru/blog/prodvizhenie-saita-yuridicheskoi-kompanii" },
};

// type, lang, slug, section (H2 beginning), paragraph, related?
const TEXT = [
  { type: "singlepage", lang: "en", slug: "seo-for-law-firms", section: "Attorney SEO from a consultant or a legal marketing agency",
    para: para("If you would like to start on your own first, the ", ["step-by-step attorney SEO guide", ART.en.url], " walks through a 90-day plan: the Google profile, practice-area pages, reviews under bar rules and AI answers.") },
  { type: "singlepage", lang: "en", slug: "local-seo-for-lawyers", section: "Lawyer local SEO and the map pack",
    para: para("Where the map fits into a firm's whole search strategy, with a 90-day plan, is covered in the ", ["attorney SEO guide", ART.en.url], ".") },
  { type: "singlepage", lang: "en", slug: "personal-injury-seo", section: "A personal injury SEO strategy against national budgets",
    para: para("The same approach for any practice area — choose what to win first, then fix the profile, the pages and the reviews — is laid out in the ", ["attorney SEO guide", ART.en.url], ".") },
  { type: "blog", lang: "en", slug: "how-much-legal-seo-costs", section: "How I run SEO for law firms", related: true,
    para: para("What each step involves, and which parts a lawyer can do alone, is in ", ["Attorney SEO: a step-by-step guide for lawyers and small law firms", ART.en.url], ".") },
  { type: "blog", lang: "en", slug: "why-lawyer-needs-a-website", section: "Why SEO Is Critical for Legal Websites", related: true,
    para: para("How to get a law firm website found, step by step, is in the ", ["attorney SEO guide", ART.en.url], ".") },

  { type: "singlepage", lang: "pl", slug: "seo-dla-kancelarii-prawnych", section: "SEO dla kancelarii a ",
    para: para("Szczegółowo — co mówią §23 Kodeksu Etyki Adwokackiej i art. 31–34 Kodeksu Etyki Radcy Prawnego, jak orzekał Sąd Najwyższy i jak wygląda plan na 90 dni — opisuję w poradniku ", ["marketing kancelarii prawnej i SEO", ART.pl.url], ".") },
  { type: "singlepage", lang: "pl", slug: "strona-internetowa-dla-adwokata", section: "Strona internetowa dla kancelarii adwokackiej:",
    para: para("Jak kancelaria zdobywa klientów z Google i odpowiedzi AI w granicach kodeksów etyki, opisuję w poradniku ", ["marketing kancelarii prawnej i SEO", ART.pl.url], ".") },
  { type: "service", lang: "pl", slug: "pozycjonowanie-strony-kancelarii-prawnej-warszawa", section: "Dlaczego dobry prawnik i znajdowalny prawnik",
    para: para("Plan krok po kroku — od wizytówki Google po opinie klientów zgodne z kodeksem etyki — jest w poradniku ", ["marketing kancelarii prawnej", ART.pl.url], ".") },
  { type: "blog", lang: "pl", slug: "ile-kosztuje-seo-dla-kancelarii-prawnej", section: "Jak prowadzę pozycjonowanie SEO dla kancelarii prawnych", related: true,
    para: para("Co obejmuje każdy etap i co kancelaria może zrobić sama, opisuję w poradniku ", ["marketing kancelarii prawnej i SEO dla adwokatów i radców prawnych", ART.pl.url], ".") },
  { type: "blog", lang: "pl", slug: "dlaczego-prawnikowi-potrzebna-strona-www", section: "Co powinna zawierać skuteczna strona prawnika", related: true,
    para: para("Jak sprawić, żeby strona kancelarii była znajdowana w Google i w odpowiedziach AI, krok po kroku opisuję w poradniku ", ["marketing kancelarii prawnej i SEO", ART.pl.url], ".") },

  { type: "singlepage", lang: "ru", slug: "seo-dlya-yuridicheskogo-sayta", section: "Как раскрутить юридическую фирму",
    para: para("Пошаговый план на 90 дней — карточка в Google, страницы практик, отзывы и правила адвокатской этики в разных странах — в руководстве ", ["продвижение сайта юридической компании и адвоката", ART.ru.url], ".") },
  { type: "singlepage", lang: "ru", slug: "prodvizhenie-saita-advokata", section: "Адвокатская этика и продвижение",
    para: para("Что разрешают правила адвокатской этики в Польше, на Кипре, в Казахстане, ОАЭ и Грузии, я свёл в таблицу в руководстве ", ["продвижение сайта юридической компании и адвоката", ART.ru.url], ".") },
  { type: "blog", lang: "ru", slug: "skolko-stoit-seo-yuristov", section: "Как я веду SEO-продвижение для юридических фирм", related: true,
    para: para("Что входит в каждый этап и что юрист может сделать сам, — в руководстве ", ["продвижение сайта юридической компании и адвоката", ART.ru.url], ".") },
  { type: "blog", lang: "ru", slug: "zachem-advokatu-sait", section: "SEO-оптимизация сайта адвоката", related: true,
    para: para("Как продвигать сайт адвоката шаг за шагом, от карточки в Google до ответов ИИ, — в руководстве ", ["продвижение сайта юридической компании и адвоката", ART.ru.url], ".") },
];

async function main() {
  const art = await client.fetch(`*[_id in $ids]._id`, { ids: Object.values(ART).map((a) => a.id) });
  if (art.length !== 3) { console.log(`Aborting — article not published in all languages: have ${art.join(", ") || "none"}`); process.exit(1); }
  const patches = [];
  for (const t of TEXT) {
    const label = `${t.lang} ${t.type} «${t.slug}»`;
    const doc = await client.fetch(
      `*[_type == $type && language == $lang && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]{_id, _rev, contentBlocks, relatedArticles}`,
      { type: t.type, lang: t.lang, s: t.slug },
    );
    if (!doc) { console.log(`warn  ${label} not found — skipped`); continue; }
    const draft = await client.fetch(`*[_id == $id][0]._id`, { id: `drafts.${doc._id}` });
    if (draft) { console.log(`Aborting — draft exists for ${doc._id}; publish or discard it first.`); process.exit(1); }
    const url = ART[t.lang].url;

    if (JSON.stringify(doc.contentBlocks || []).includes(`"href":"${url}"`)) console.log(`skip  ${label}: already links ${url}`);
    else {
      let found = null;
      for (const b of (doc.contentBlocks || []).filter((x) => Array.isArray(x.content))) {
        const c = b.content;
        const i = c.findIndex((x) => x.style === "h2" && norm(plain(x)).startsWith(norm(t.section)));
        if (i === -1) continue;
        let j = c.findIndex((x, k) => k > i && x.style === "h2");
        if (j === -1) j = c.length;
        found = { b, a: c[j - 1], where: `end of «${plain(c[i])}»` };
        break;
      }
      if (!found) { console.log(`STOP  ${label}: section «${t.section}» not found — skipped`); }
      else {
        console.log(`\n${label} — ${found.where}, after «${(plain(found.a) || found.a._type).slice(0, 60)}…»:\n  ${plain(t.para)}`);
        patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.insert("after", `contentBlocks[_key=="${found.b._key}"].content[_key=="${found.a._key}"]`, [t.para]) });
      }
    }
    if (t.related) {
      const refs = doc.relatedArticles || [];
      const artId = ART[t.lang].id;
      if (refs.some((x) => x._ref === artId)) console.log(`skip  related ${label}: already lists the article`);
      else {
        const item = { _key: key(), _type: "reference", _ref: artId };
        console.log(`add   related ${label}: ${artId} first`);
        patches.push({ id: doc._id, rev: doc._rev,
          op: (p) => (refs.length ? p.insert("before", "relatedArticles[0]", [item]) : p.setIfMissing({ relatedArticles: [] }).append("relatedArticles", [item])) });
      }
    }
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
