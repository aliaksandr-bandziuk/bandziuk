// scripts/apply-ru-seo-headings.cjs
//
// RU SEO pages, approved by the owner on 27.10.2026:
// 1. H1 (field `heading`) of the 44 RU SEO landing pages from 25–27.10 names the
//    site: «Продвижение кафе и кофейни» → «Продвижение сайта кафе и кофейни».
// 2. The phrase «раскрутка сайта …» appears once on each of them: the first block
//    title «Что входит в продвижение …» → «Что входит в продвижение и раскрутку
//    сайта …». Pages that already mention «раскрут» in a heading are skipped.
// 3. Older RU SEO pages without GEO/AEO in any heading: « (GEO, AEO)» is appended
//    to the first H2 (else H3) in the text about AI search (ИИ / нейросети / ChatGPT / AI).
//
// Only the matching strings change; dry run prints every change. Aborts on
// drafts; one transaction; idempotent.
//
// Usage: node scripts/apply-ru-seo-headings.cjs           dry run
//        node scripts/apply-ru-seo-headings.cjs --apply   write

const path = require("path");
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

const NEW_SEO = `prodvizhenie-avtosalona prodvizhenie-b2b prodvizhenie-cvetochnogo-magazina prodvizhenie-dermatologicheskoy-kliniki
prodvizhenie-dizainera-interera prodvizhenie-fitnes-kluba prodvizhenie-himchistki-kovrov prodvizhenie-kafe prodvizhenie-keiteringa
prodvizhenie-kliniki-kosmetologii prodvizhenie-pansionata-dlya-pozhilyh prodvizhenie-pekarni prodvizhenie-prokata-avtomobiley
prodvizhenie-remonta-bytovoy-tehniki prodvizhenie-saas prodvizhenie-saita-advokata prodvizhenie-saita-avtomaticheskih-vorot
prodvizhenie-saita-dezinsekcii prodvizhenie-saita-finansovogo-konsultanta prodvizhenie-saita-ipotechnogo-brokera
prodvizhenie-saita-kadrovogo-agentstva prodvizhenie-saita-malogo-biznesa prodvizhenie-saita-ortodonta prodvizhenie-saita-osteopata
prodvizhenie-saita-osusheniya-posle-zatopleniya prodvizhenie-saita-otelya prodvizhenie-saita-pereezdov
prodvizhenie-saita-plasticheskogo-hirurga prodvizhenie-saita-priemki-kvartir prodvizhenie-saita-proizvoditelya
prodvizhenie-saita-psihologa prodvizhenie-saita-rieltora prodvizhenie-saita-solnechnyh-panelei prodvizhenie-saita-spila-derevev
prodvizhenie-saita-strahovogo-agenta prodvizhenie-saita-stroitelstva-domov prodvizhenie-saita-vskrytiya-zamkov
prodvizhenie-saita-vyvoza-musora prodvizhenie-saita-yuvelirnogo-magazina prodvizhenie-saita-zastroishchika
prodvizhenie-salona-optiki prodvizhenie-turoperatora prodvizhenie-ukladki-napolnyh-pokrytiy prodvizhenie-vinodelni`.split(/\s+/);

// older RU SEO pages with no GEO/AEO in any heading (live check 27.10.2026)
const NO_GEO = ["seo-dlya-nedvizhimosti", "seo-dlya-nedvizhimosti-na-kipre", "ai-seo-konsultant",
  "prodvizhenie-na-britanskiy-rynok", "prodvizhenie-na-frantsuzskiy-rynok", "prodvizhenie-na-gollandskiy-rynok",
  "prodvizhenie-na-irlandskiy-rynok", "prodvizhenie-na-italyanskiy-rynok", "prodvizhenie-na-rynki-baltii",
  "prodvizhenie-na-shveytsarskiy-rynok", "prodvizhenie-kliniki-v-polshe-na-nemeckih-pacientov",
  "prodvizhenie-v-chatgpt", "seo-audit-saita"];

const plain = (b) => (b.children || []).map((c) => c.text).join("");
// case-sensitive: «ии» in «Голландии» must not match
const AI = /(^|[^А-Яа-яЁё])ИИ([^А-Яа-яЁё]|$)|[Нн]ейросет|ChatGPT|\bAI\b|[Ии]скусственн/;

// «Продвижение кафе» → «Продвижение сайта кафе»; «SEO-продвижение SaaS» → «SEO-продвижение сайта SaaS»
const addSite = (s) => (/сайт/i.test(s) ? s : s.replace(/([Пп]родвижение) /, "$1 сайта "));
// «Что входит в продвижение (сайта) X» → «Что входит в продвижение и раскрутку сайта X»
// «Из чего состоит продвижение сайта X» → «Из чего состоят продвижение и раскрутка сайта X»
// «Что получает X от продвижения сайта» → «… от продвижения и раскрутки сайта»
const addRask = (s) => {
  if (/^Из чего состоит продвижение /.test(s)) return s.replace(/^Из чего состоит продвижение (сайта )?/, "Из чего состоят продвижение и раскрутка сайта ");
  if (/продвижения/.test(s)) return s.replace(/продвижения( сайта)?/, "продвижения и раскрутки сайта");
  return s.replace(/([Пп]родвижение) (сайта )?/, "$1 и раскрутку сайта ");
};
const BLOCK = /^(Что входит в|Из чего состоит|Что получает)/;

async function getDoc(slug) {
  return client.fetch(
    `*[_type in ["singlepage", "service"] && language == "ru" && slug.ru.current == $s && !(_id in path("drafts.**"))][0]`,
    { s: slug },
  );
}

async function main() {
  const patches = [];
  const done = (doc, set, lines) => {
    console.log(`\n${doc.slug?.ru?.current} (${doc._id})\n${lines.join("\n")}`);
    if (Object.keys(set).length) patches.push({ id: doc._id, rev: doc._rev, set });
  };

  for (const slug of NEW_SEO) {
    const doc = await getDoc(slug);
    if (!doc) { console.log(`warn  ${slug} not found`); continue; }
    if (await client.fetch(`*[_id == $id][0]._id`, { id: `drafts.${doc._id}` })) { console.log(`Aborting — draft exists for ${doc._id}`); process.exit(1); }
    const set = {}, lines = [];
    const h1 = doc.heading || doc.title;
    const field = doc.heading ? "heading" : "title";
    const nh1 = addSite(h1);
    if (nh1 !== h1) { set[field] = nh1; lines.push(`  H1   «${h1}» → «${nh1}»`); } else lines.push(`  H1   ok: «${h1}»`);

    const blocks = doc.contentBlocks || [];
    const headingsText = JSON.stringify(blocks.map((b) => [b.title, ...(b.content || []).filter((x) => /^h[23]$/.test(x.style)).map(plain)]));
    if (/раскрут/i.test(headingsText) || /раскрут/i.test(nh1)) lines.push("  раскрутка: already in a heading — skip");
    else {
      const i = blocks.findIndex((b) => typeof b.title === "string" && BLOCK.test(b.title) && /продвижени/i.test(b.title));
      if (i === -1) lines.push("  STOP раскрутка: no «Что входит в / Из чего состоит / Что получает … продвижение» block title — skip");
      else {
        const t = blocks[i].title, nt = addRask(t);
        if (nt === t) lines.push(`  STOP раскрутка: could not rewrite «${t}»`);
        else { set.contentBlocks = blocks.map((b, j) => (j === i ? { ...b, title: nt } : b)); lines.push(`  H2   «${t}» → «${nt}»`); }
      }
    }
    done(doc, set, lines);
  }

  console.log("\n── GEO/AEO in the AI heading of older RU SEO pages");
  for (const slug of NO_GEO) {
    const doc = await getDoc(slug);
    if (!doc) { console.log(`warn  ${slug} not found`); continue; }
    if (await client.fetch(`*[_id == $id][0]._id`, { id: `drafts.${doc._id}` })) { console.log(`Aborting — draft exists for ${doc._id}`); process.exit(1); }
    const blocks = doc.contentBlocks || [];
    if (/GEO|AEO/.test(JSON.stringify(blocks.map((b) => (b.content || []).filter((x) => /^h[23]$/.test(x.style)).map(plain))))) { done(doc, {}, ["  GEO/AEO already in a heading"]); continue; }
    let hit = null;
    for (const style of ["h2", "h3"]) {
      for (const [bi, b] of blocks.entries()) {
        const ci = (b.content || []).findIndex((x) => x.style === style && AI.test(plain(x)));
        if (ci !== -1) { hit = { bi, ci, style }; break; }
      }
      if (hit) break;
    }
    if (!hit) { done(doc, {}, ["  STOP no H2/H3 about AI search in the text — skip"]); continue; }
    const b = blocks[hit.bi], h = b.content[hit.ci];
    const last = h.children[h.children.length - 1];
    const nh = { ...h, children: [...h.children.slice(0, -1), { ...last, text: `${last.text.replace(/\s+$/, "")} (GEO, AEO)` }] };
    const nb = { ...b, content: b.content.map((x, j) => (j === hit.ci ? nh : x)) };
    done(doc, { contentBlocks: blocks.map((x, j) => (j === hit.bi ? nb : x)) }, [`  ${hit.style.toUpperCase()}   «${plain(h)}» → «${plain(nh)}»`]);
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${patches.length} page(s), nothing written. Add --apply to write.`);
  const tx = client.transaction();
  for (const p of patches) tx.patch(p.id, (q) => q.ifRevisionId(p.rev).set(p.set));
  await tx.commit();
  console.log(`\nWritten: ${patches.length} page(s). The webhook revalidates them.`);
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
