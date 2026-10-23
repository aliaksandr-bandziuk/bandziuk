// scripts/apply-geo-hub-fixes.cjs
//
// GEO hubs after the AI SEO services pages went live (23.10.2026, owner's OK):
//
// 1. PL and RU GEO hubs get GEO titles, like the EN hub («Generative Engine
//    Optimization (GEO) Services»), so «AI SEO» belongs to the new pages
//    /pl/oferty/uslugi-ai-seo and /ru/uslugi/ai-seo-prodvizhenie. Addresses do
//    not change. The outdated «Google SGE» wording goes too.
// 2. Prices paragraph on all three hubs: monitoring is 250 € / 1000 zł a
//    month (as on the monitoring pages), not 800 € / 3500 zł; project work
//    (preparing a site for AI search) starts at 800 € / 3500 zł. The two links
//    in the paragraph are kept: only span texts change.
//
// Every old text is checked before it is replaced; a page that changed by
// hand stops the script. Idempotent; aborts on drafts; one transaction.
//
// Usage: node scripts/apply-geo-hub-fixes.cjs           dry run
//        node scripts/apply-geo-hub-fixes.cjs --apply   write

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

const PRICE_BLOCK = "55da61112b58";

const HUBS = [
  {
    id: "831dc620-2863-4d55-baa0-aa874a7374ac",
    label: "EN GEO hub",
    priceOld: [
      "From €250 for a one-off audit to ",
      "€800 a month for ongoing monitoring",
      ", with project work — like ",
      "preparing a site to be legible to AI search",
      " — in between. Each service page carries its own figure and what it depends on; there's no single package price, because the four are genuinely different pieces of work.",
    ],
    priceNew: [
      "From €250 for a one-off audit and ",
      "€250 a month for ongoing monitoring",
      "; project work — like ",
      "preparing a site to be legible to AI search",
      " — starts at €800. Each service page carries its own figure and what it depends on; there's no single package price, because the four are genuinely different pieces of work.",
    ],
  },
  {
    id: "3a759a28-4135-4731-a318-cffee1b512f0",
    label: "PL GEO hub",
    fields: {
      title: ["AI SEO & GEO Optymalizacja ", "GEO SEO i optymalizacja pod AI"],
      heading: [null, "GEO SEO: optymalizacja pod odpowiedzi AI w ChatGPT i Google"],
      "seo.metaTitle": ["AI SEO & GEO Optymalizacja — Przygotuj swoją stronę na wyszukiwanie AI", "GEO SEO: optymalizacja pod odpowiedzi AI | Bandziuk"],
      "seo.metaDescription": [
        "Optymalizuję strony pod wyszukiwanie AI: GEO (Generative Engine Optimization), dane strukturalne, semantyka i Core Web Vitals. Widoczność w Google SGE i AI Search.",
        "Generative Engine Optimization (GEO) i AEO: żeby ChatGPT, Perplexity i odpowiedzi AI w Google wymieniały Waszą firmę — i opisywały ją poprawnie.",
      ],
      excerpt: [
        "*",
        "Generative Engine Optimization (GEO) i Answer Engine Optimization (AEO) — nazwy jednej pracy: żeby Waszą firmę wymieniano, i to poprawnie, gdy klienci zamiast szukać pytają asystenta AI.",
      ],
    },
    priceOld: [
      "Od 1000 zł za jednorazowy audyt do ",
      "3500 zł miesięcznie za stały monitoring",
      ", z pracą projektową — na przykład ",
      "przygotowaniem strony, żeby była czytelna dla wyszukiwania AI",
      " — pomiędzy. Każda strona usługi ma własną kwotę i to, od czego zależy; nie ma jednej ceny pakietowej, bo te cztery to naprawdę różne prace.",
    ],
    priceNew: [
      "Od 1000 zł za jednorazowy audyt i ",
      "1000 zł miesięcznie za stały monitoring",
      "; praca projektowa — na przykład ",
      "przygotowanie strony, żeby była czytelna dla wyszukiwania AI",
      " — zaczyna się od 3500 zł. Każda strona usługi ma własną kwotę i to, od czego zależy; nie ma jednej ceny pakietowej, bo te cztery to naprawdę różne prace.",
    ],
  },
  {
    id: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71",
    label: "RU GEO hub",
    fields: {
      title: ["AI SEO и GEO-оптимизация", "GEO-оптимизация"],
      heading: [null, "GEO-оптимизация: видимость компании в ответах нейросетей"],
      "seo.metaTitle": ["AI SEO и GEO-оптимизация — подготовка сайтов к поиску нового поколения", "GEO-оптимизация под ответы нейросетей | Bandziuk"],
      "seo.metaDescription": [
        "Оптимизирую сайты под поиск с искусственным интеллектом: GEO (Generative Engine Optimization), структурированные данные, семантика, Core Web Vitals. Ваш сайт готов к Google SGE и AI Search.",
        "Generative Engine Optimization (GEO) и AEO: чтобы ChatGPT, Perplexity и обзоры от ИИ в Google называли вашу компанию — и описывали её правильно.",
      ],
      excerpt: [
        "*",
        "Generative Engine Optimization (GEO) и Answer Engine Optimization (AEO) — названия одной работы: чтобы вашу компанию называли, и называли правильно, когда клиенты не ищут сами, а спрашивают ИИ-ассистента.",
      ],
    },
    priceOld: [
      "От 250 € за разовый аудит до ",
      "800 € в месяц за постоянный мониторинг",
      ", с проектной работой — например, ",
      "подготовкой сайта к тому, чтобы он был читаем для ИИ-поиска",
      ", — посередине. На странице каждой услуги своя сумма и то, от чего она зависит; единой пакетной цены нет, потому что эти четыре — действительно разные работы.",
    ],
    priceNew: [
      "От 250 € за разовый аудит и ",
      "250 € в месяц за постоянный мониторинг",
      "; проектная работа — например, ",
      "подготовка сайта к тому, чтобы он был читаем для ИИ-поиска",
      ", — начинается от 800 €. На странице каждой услуги своя сумма и то, от чего она зависит; единой пакетной цены нет, потому что эти четыре — действительно разные работы.",
    ],
  },
];

const get = (obj, dotted) => dotted.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
const clip = (s) => (s == null ? "∅" : s.length > 90 ? s.slice(0, 90) + "…" : s);

async function main() {
  const ids = HUBS.map((h) => h.id);
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: ids.map((i) => `drafts.${i}`) });
  if (drafts.length) {
    console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`);
    process.exit(1);
  }
  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, title, heading, seo, excerpt, contentBlocks}`, { ids });

  const patches = [];
  for (const h of HUBS) {
    const doc = docs.find((d) => d._id === h.id);
    if (!doc) throw new Error(`${h.label} (${h.id}) not found`);
    const set = {};
    console.log(`\n── ${h.label}`);

    for (const [field, [oldV, newV]] of Object.entries(h.fields || {})) {
      const cur = get(doc, field) ?? null;
      if (cur === newV) { console.log(`skip  ${field}: already new`); continue; }
      if (oldV !== "*" && cur !== oldV) throw new Error(`${h.label}: ${field} changed by hand — now «${clip(cur)}»`);
      console.log(`${field}:\n  − ${clip(cur)}\n  + ${newV}`);
      set[field] = newV;
    }

    const block = doc.contentBlocks.find((b) => b._key === PRICE_BLOCK);
    if (!block) throw new Error(`${h.label}: block ${PRICE_BLOCK} not found`);
    const para = block.content.find((x) => (x.children || []).length === 5 && [h.priceOld[0], h.priceNew[0]].includes(x.children[0].text));
    if (!para) throw new Error(`${h.label}: prices paragraph not found`);
    const texts = para.children.map((c) => c.text);
    if (texts.every((t, i) => t === h.priceNew[i])) console.log("skip  prices: already new");
    else {
      texts.forEach((t, i) => {
        if (t !== h.priceOld[i]) throw new Error(`${h.label}: prices span ${i} changed by hand — «${clip(t)}»`);
      });
      console.log(`prices:\n  − ${texts.join("")}\n  + ${h.priceNew.join("")}`);
      para.children.forEach((c, i) => {
        if (c.text !== h.priceNew[i]) set[`contentBlocks[_key=="${PRICE_BLOCK}"].content[_key=="${para._key}"].children[_key=="${c._key}"].text`] = h.priceNew[i];
      });
    }
    if (Object.keys(set).length) patches.push({ id: doc._id, rev: doc._rev, set });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log("\nDry run — nothing written. Add --apply to write.");
  const tx = client.transaction();
  for (const p of patches) tx.patch(p.id, (q) => q.ifRevisionId(p.rev).set(p.set));
  await tx.commit();
  console.log(`\nWritten: ${patches.map((p) => p.id).join(", ")}`);
  console.log("The webhook revalidates these pages.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
