// scripts/apply-small-business-website-cost-links.cjs
//
// Run after «How much a small business website costs» is published:
//   /blog/small-business-website-cost
//   /pl/blog/ile-kosztuje-strona-internetowa-dla-firmy
//   /ru/blog/skolko-stoit-sozdanie-saita
//
// The new article is the general hub above eight industry-specific cost articles: it
// links down to all of them, and this script links back up. That matters beyond the
// article itself — several of those pages sit in «Crawled — currently not indexed»,
// and an inbound link from a fresh page is one of the few levers available without
// touching external links.
//
// 1. One sentence with a link at the end of the cost section on each of the three
//    website-design landing pages — the one place on those pages where the reader is
//    already asking the article's question.
// 2. Related articles: the new article goes first on every cost article in that
//    language, plus the SEO-pricing and do-it-yourself-SEO articles.
//
// One patch per change (a Sanity patch holds one insert). Idempotent; aborts on
// drafts; one transaction.
//
// Usage: node scripts/apply-small-business-website-cost-links.cjs           dry run
//        node scripts/apply-small-business-website-cost-links.cjs --apply   write

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
  en: { id: "blog-small-business-website-cost", url: "/blog/small-business-website-cost" },
  pl: { id: "blog-small-business-website-cost.pl", url: "/pl/blog/ile-kosztuje-strona-internetowa-dla-firmy" },
  ru: { id: "blog-small-business-website-cost.ru", url: "/ru/blog/skolko-stoit-sozdanie-saita" },
};

// Every cost article in each language gets the new hub first in its related list.
const RELATED_ONLY = {
  en: ["beauty-salon-website-cost", "construction-company-website-cost", "auto-repair-shop-website-cost",
       "psychologist-website-cost", "real-estate-agency-website-cost", "property-developer-website-cost",
       "multilingual-website-cost", "website-development-cost-in-cyprus", "how-much-seo-costs", "small-business-seo"],
  pl: ["ile-kosztuje-strona-dla-salonu-kosmetycznego", "ile-kosztuje-strona-dla-firmy-budowlanej",
       "ile-kosztuje-strona-dla-warsztatu-samochodowego", "ile-kosztuje-strona-dla-psychologa",
       "ile-kosztuje-strona-dla-agencji-nieruchomosci", "ile-kosztuje-strona-dla-dewelopera",
       "ile-kosztuje-strona-wielojezyczna", "ile-kosztuje-pozycjonowanie-strony", "jak-samemu-zrobic-seo"],
  ru: ["skolko-stoit-sait-salona-krasoty", "skolko-stoit-sait-dlya-stroitelnoy-kompanii",
       "skolko-stoit-sait-dlya-avtoservisa", "skolko-stoit-sait-psihologa",
       "skolko-stoit-sait-agentstva-nedvizhimosti", "skolko-stoit-sait-zastroishchika",
       "skolko-stoit-multiyazychnyi-sait", "skolko-stoit-sozdanie-saita-na-kipre",
       "skolko-stoit-prodvizhenie-saita", "kak-samomu-prodvigat-sait"],
};

// type, lang, slug, section (heading beginning), paragraph, related?, relatedOnly?
const TEXT = [
  { type: "singlepage", lang: "en", slug: "small-business-website-design", section: "How much does a small business website cost",
    para: para("What the quote leaves out — the domain and its renewal price, hosting, email, and what the site costs every month after launch — is set out in ", ["how much a small business website costs", ART.en.url], ".") },
  { type: "singlepage", lang: "pl", slug: "strona-internetowa-dla-malej-firmy", section: "Ile kosztuje strona internetowa dla małej firmy",
    para: para("Czego nie ma w wycenie — domena i cena jej odnowienia, hosting, poczta i to, ile strona kosztuje miesięcznie po uruchomieniu — opisuję w artykule ", ["ile kosztuje strona internetowa dla firmy", ART.pl.url], ".") },
  { type: "singlepage", lang: "ru", slug: "sait-dlya-malogo-biznesa", section: "Сколько стоит сайт для малого бизнеса",
    para: para("Чего нет в смете — домен и цена его продления, хостинг, почта и то, сколько сайт стоит в месяц после запуска, — разбираю в статье ", ["сколько стоит создание сайта", ART.ru.url], ".") },

  ...Object.entries(RELATED_ONLY).flatMap(([lang, slugs]) =>
    slugs.map((slug) => ({ type: "blog", lang, slug, relatedOnly: true }))),
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
          const i = c.findIndex((x) => (x.style === "h2" || x.style === "h3") && norm(plain(x)).startsWith(norm(t.section)));
          if (i === -1) continue;
          const lvl = c[i].style;
          let j = c.findIndex((x, k) => k > i && (x.style === "h2" || (lvl === "h3" && x.style === "h3")));
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
        console.log(`add   related ${label}`);
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
  console.log(`\nWritten: ${[...seen].length} document(s)`);
  console.log("The webhook revalidates these pages.");
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
