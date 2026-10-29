// scripts/apply-small-business-seo-links.cjs
//
// Run after the «Small business SEO» article is published:
//   /blog/small-business-seo, /pl/blog/jak-samemu-zrobic-seo,
//   /ru/blog/kak-samomu-prodvigat-sait
//
// 1. One sentence with a link to the article at the end of a matching H2 section on
//    the small business service pages and the cost articles (EN / PL / RU). Each
//    target section is one where the reader is already asking «could I do this
//    myself?», so the link answers the question the section raises.
// 2. Related articles: the new article goes first on the cost, ChatGPT and GEO
//    articles in each language (relatedOnly entries get no sentence in the body).
//
// One patch per change (a Sanity patch holds one insert). Idempotent; aborts on
// drafts; one transaction.
//
// Usage: node scripts/apply-small-business-seo-links.cjs           dry run
//        node scripts/apply-small-business-seo-links.cjs --apply   write

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
const norm = (t) => t.replace(/[‘’]/g, "'").replace(/\s+/g, " ").trim().toLowerCase();
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
  en: { id: "blog-small-business-seo", url: "/blog/small-business-seo" },
  pl: { id: "blog-small-business-seo.pl", url: "/pl/blog/jak-samemu-zrobic-seo" },
  ru: { id: "blog-small-business-seo.ru", url: "/ru/blog/kak-samomu-prodvigat-sait" },
};

// type, lang, slug, section (H2 beginning), paragraph, related?, relatedOnly?
const TEXT = [
  // ── EN
  { type: "singlepage", lang: "en", slug: "seo-services-for-small-business", section: "DIY SEO or hiring help",
    para: para("If you want to try the first months yourself, the ", ["step-by-step small business SEO guide", ART.en.url], " sets out a 90-day plan: the Google profile and its naming rules, one page per service, reviews without breaking Google's policies, and what AI answers actually changed.") },
  { type: "singlepage", lang: "en", slug: "local-seo-for-small-business", section: "Google Business Profile for a small business",
    para: para("Where the profile sits in the rest of the work, and what to do in the weeks after it is set up, is in the ", ["small business SEO guide", ART.en.url], ".") },
  { type: "singlepage", lang: "en", slug: "small-business-website-design", section: "Web design for small companies",
    para: para("How to decide which service pages to write first, and what each one has to answer, is covered in the ", ["small business SEO guide", ART.en.url], ".") },
  { type: "blog", lang: "en", slug: "how-much-seo-costs", section: "How I run SEO work", related: true,
    para: para("Which parts of this a small business owner can do without paying anyone is in ", ["Small Business SEO: A Step-by-Step Guide You Can Do Yourself", ART.en.url], ".") },
  { type: "blog", lang: "en", slug: "chatgpt-seo", relatedOnly: true },
  { type: "blog", lang: "en", slug: "what-is-generative-engine-optimization", relatedOnly: true },

  // ── PL
  { type: "singlepage", lang: "pl", slug: "pozycjonowanie-strony-malej-firmy", section: "Jak samemu zrobić SEO dla",
    para: para("Pełny plan krok po kroku — nazwa i adres w Profilu Firmy w Google, jedna strona na jedną usługę, opinie zgodne z zasadami Google i to, co naprawdę zmieniły odpowiedzi AI — opisuję w poradniku ", ["jak samemu zrobić SEO", ART.pl.url], ".") },
  { type: "singlepage", lang: "pl", slug: "strona-internetowa-dla-malej-firmy", section: "Jakie podstrony powinna mieć strona małej firmy",
    para: para("Od czego zacząć i co każda z tych podstron ma odpowiedzieć klientowi, opisuję w poradniku ", ["jak samemu zrobić SEO małej firmy", ART.pl.url], ".") },
  { type: "blog", lang: "pl", slug: "ile-kosztuje-pozycjonowanie-strony", section: "Jak prowadzę pozycjonowanie SEO", related: true,
    para: para("Co z tego właściciel małej firmy może zrobić sam, bez płacenia nikomu, opisuję w poradniku ", ["jak samemu zrobić SEO", ART.pl.url], ".") },
  { type: "blog", lang: "pl", slug: "jak-pojawic-sie-w-chatgpt", relatedOnly: true },
  { type: "blog", lang: "pl", slug: "geo-co-to-jest", relatedOnly: true },

  // ── RU
  { type: "singlepage", lang: "ru", slug: "prodvizhenie-saita-malogo-biznesa", section: "Как продвинуть свой сайт самостоятельно",
    para: para("Полный план по шагам — название и адрес в профиле компании в Google, по одной странице на услугу, отзывы без нарушения правил Google и то, что на самом деле изменили ответы ИИ, — в руководстве ", ["как самому продвигать сайт", ART.ru.url], ".") },
  { type: "singlepage", lang: "ru", slug: "sait-dlya-malogo-biznesa", section: "Какие страницы нужны сайту малого бизнеса",
    para: para("С каких из них начинать и что каждая должна ответить клиенту, разбираю в руководстве ", ["как самому продвигать сайт малого бизнеса", ART.ru.url], ".") },
  { type: "blog", lang: "ru", slug: "skolko-stoit-prodvizhenie-saita", section: "Как я веду SEO-продвижение", related: true,
    para: para("Что из этого владелец бизнеса может сделать сам, никому не платя, — в руководстве ", ["как самому продвигать сайт", ART.ru.url], ".") },
  { type: "blog", lang: "ru", slug: "seo-dlya-chatgpt", relatedOnly: true },
  { type: "blog", lang: "ru", slug: "chto-takoe-geo", relatedOnly: true },
];

async function main() {
  const art = await client.fetch(`*[_id in $ids]._id`, { ids: Object.values(ART).map((a) => a.id) });
  if (art.length !== 3) { console.log(`Aborting — article not published in all languages: have ${art.join(", ") || "none"}`); process.exit(1); }
  const patches = [];
  let missing = 0;
  for (const t of TEXT) {
    const label = `${t.lang} ${t.type} «${t.slug}»`;
    const doc = await client.fetch(
      `*[_type == $type && language == $lang && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]{_id, _rev, contentBlocks, relatedArticles}`,
      { type: t.type, lang: t.lang, s: t.slug },
    );
    if (!doc) { console.log(`warn  ${label} not found — skipped`); missing++; continue; }
    const draft = await client.fetch(`*[_id == $id][0]._id`, { id: `drafts.${doc._id}` });
    if (draft) { console.log(`Aborting — draft exists for ${doc._id}; publish or discard it first.`); process.exit(1); }
    const url = ART[t.lang].url;

    if (!t.relatedOnly) {
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
        if (!found) { console.log(`STOP  ${label}: section «${t.section}» not found — skipped`); missing++; }
        else {
          console.log(`\n${label} — ${found.where}, after «${(plain(found.a) || found.a._type).slice(0, 60)}…»:\n  ${plain(t.para)}`);
          patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.insert("after", `contentBlocks[_key=="${found.b._key}"].content[_key=="${found.a._key}"]`, [t.para]) });
        }
      }
    }

    if (t.related || t.relatedOnly) {
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

  if (missing) console.log(`\n${missing} target(s) were not found — fix those before --apply if they matter.`);
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
