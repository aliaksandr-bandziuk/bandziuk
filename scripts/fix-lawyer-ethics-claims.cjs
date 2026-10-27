// scripts/fix-lawyer-ethics-claims.cjs
//
// Factual fixes approved by the owner on 27.10.2026 (found while writing the
// «Attorney SEO» article):
// 1. PL pages said «zasady etyki adwokackiej i radcowskiej zabraniają reklamy».
//    Out of date for adwokaci: uchwała NRA nr 93/2023 (26.05.2023) replaced the
//    ban with «informacja handlowa» (Kodeks Etyki Adwokackiej §23). Radcowie keep
//    «informowanie» (KERP art. 31–32); client opinions only with consent, and for
//    radcowie never in criminal or family matters (art. 32 ust. 2).
//    Pages: /pl/seo-dla-kancelarii-prawnych, /pl/strona-internetowa-dla-adwokata,
//    /pl/blog/dlaczego-prawnikowi-potrzebna-strona-www.
// 2. /local-seo-for-lawyers: «Google Screened» no longer exists — since
//    20.10.2025 the Local Services Ads badge is «Google Verified»; lead credits
//    are automated.
//
// Same engine as apply-batch-h-tweaks.cjs: exact string replacements anywhere in
// the published document; mode "sub" = substring. Every edit must match exactly
// once, otherwise the page is skipped. Idempotent; aborts on drafts; one transaction.
//
// Usage: node scripts/fix-lawyer-ethics-claims.cjs           dry run
//        node scripts/fix-lawyer-ethics-claims.cjs --apply   write

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

const EDITS = [
  { type: "singlepage", lang: "pl", slug: "seo-dla-kancelarii-prawnych", edits: [
    ["— w granicach zasad etyki, które zabraniają reklamy, ale pozwalają informować.",
     "— w granicach kodeksów etyki adwokatów i radców prawnych: rzeczowo, bez porównań i obietnic wyniku.", "sub"],
    ["AI. Bez reklamy. Audyt od 1000 zł.", "AI. W granicach etyki. Audyt od 1000 zł.", "sub"],
    ["Informacja, nie reklama", "Zgodnie z kodeksem etyki", "exact"],
    ["Pracuję w ramach zasad etyki zawodowej: strona i jej miejsce w Google informują o kancelarii, a nie ją reklamują.",
     "Pracuję w ramach zasad etyki zawodowej: strona i jej miejsce w Google rzeczowo informują o kancelarii, bez porównań, ocen i obietnic wyniku.", "sub"],
    ["SEO dla kancelarii a zakaz reklamy adwokatów i radców prawnych",
     "SEO dla kancelarii a zasady reklamy i informowania adwokatów i radców prawnych", "exact"],
    ["Zasady etyki adwokackiej i radcowskiej zabraniają reklamy, ale pozwalają informować o działalności kancelarii. Dla pozycjonowania to dobra wiadomość, bo wyszukiwarka nagradza właśnie informację:",
     "Od 26 maja 2023 roku adwokaci mogą posługiwać się informacją handlową (uchwała NRA nr 93/2023), ale Kodeks Etyki Adwokackiej nadal zakazuje m.in. treści porównawczych, ocennych i stwarzających nieuzasadnione oczekiwania co do wyników. Radcowie prawni mają prawo informować o wykonywaniu zawodu (art. 31 Kodeksu Etyki Radcy Prawnego), bez treści nierzeczowych, obietnic i porównań. Dla pozycjonowania to dobra wiadomość, bo wyszukiwarka nagradza właśnie rzeczową informację:", "sub"],
    ["Rzeczowa strona, która jest wysoko w Google, to kanał, który zasady dopuszczają.",
     "Rzeczowa strona, która jest wysoko w Google, mieści się w zasadach obu samorządów.", "sub"],
    ["Czy pozycjonowanie strony adwokata nie narusza zakazu reklamy?",
     "Czy pozycjonowanie strony adwokata lub radcy prawnego jest zgodne z zasadami etyki?", "exact"],
    ["Zasady etyki zabraniają reklamy, ale pozwalają informować o kancelarii, a pozycjonowanie opiera się na informacji:",
     "Tak, jeśli treści są rzeczowe. Adwokaci od 2023 roku mogą posługiwać się informacją handlową, a radcowie prawni informują o wykonywaniu zawodu; obie grupy obowiązują zakazy porównań, obietnic wyniku i treści wprowadzających w błąd. Pozycjonowanie opiera się na informacji:", "sub"],
    ["Aktywne zabieganie o opinie i przenoszenie wybranych na stronę wymaga ostrożności, więc sprawdźcie stanowisko swojej izby.",
     "Cytowanie opinii na stronie wymaga zgody klienta: u adwokatów według §23 ust. 4 Kodeksu Etyki Adwokackiej, u radców według art. 32 ust. 2 Kodeksu Etyki Radcy Prawnego — a u radców nigdy w sprawach karnych i rodzinnych. W razie wątpliwości sprawdźcie stanowisko swojej izby.", "sub"],
  ] },
  { type: "singlepage", lang: "pl", slug: "strona-internetowa-dla-adwokata", edits: [
    ["— rzeczowo, bez reklamy, za cenę z cennika.", "— rzeczowo, zgodnie z kodeksami etyki, za cenę z cennika.", "sub"],
    ["Wszystko na niej jest informacją o kancelarii, a nie reklamą, bo tak wyznaczają zasady etyki zawodowej.",
     "Wszystko na niej jest rzeczową informacją o kancelarii, bez porównań i obietnic wyniku, bo tak wyznaczają kodeksy etyki adwokatów i radców prawnych.", "sub"],
    ["Strona internetowa dla kancelarii adwokackiej: informacja zamiast reklamy",
     "Strona internetowa dla kancelarii adwokackiej: rzeczowa informacja zgodna z kodeksem etyki", "exact"],
    ["Zasady etyki adwokackiej i radcowskiej zabraniają reklamy, ale pozwalają informować o kancelarii. W praktyce to wskazówka,",
     "Od 2023 roku adwokaci mogą posługiwać się informacją handlową (uchwała NRA nr 93/2023), a radcowie prawni mają prawo informować o wykonywaniu zawodu. Oba kodeksy etyki zakazują jednak m.in. porównań, obietnic wyniku i treści wprowadzających w błąd. W praktyce to wskazówka,", "sub"],
    ["Opinie wybrane i opublikowane przez kancelarię mogą zostać uznane za reklamę, a zabieganie o nie — za niedozwolone pozyskiwanie klientów.",
     "Opinie klientów kancelaria może publikować tylko za ich zgodą: adwokat według §23 ust. 4 Kodeksu Etyki Adwokackiej, radca prawny według art. 32 ust. 2 Kodeksu Etyki Radcy Prawnego — a radca nigdy w sprawach karnych, karnoskarbowych, o wykroczenia, rodzinnych i opiekuńczych.", "sub"],
    ["Czy strona kancelarii nie narusza zakazu reklamy?", "Czy strona kancelarii jest zgodna z zasadami etyki adwokatów i radców prawnych?", "exact"],
    ["Zasady etyki zabraniają reklamy, ale pozwalają informować o kancelarii. Strona opisuje",
     "Tak, jeśli jest rzeczowa: adwokaci od 2023 roku mogą posługiwać się informacją handlową, a radcowie prawni informują o wykonywaniu zawodu. Strona opisuje", "sub"],
    ["Ceny podane jako promocja lub zachęta do powierzenia sprawy wchodzą już w obszar reklamy.",
     "Ceny podane jako promocja lub zachęta do powierzenia sprawy łatwo uznać za informację natarczywą lub niestosowną, której zabraniają kodeksy etyki.", "sub"],
  ] },
  { type: "blog", lang: "pl", slug: "dlaczego-prawnikowi-potrzebna-strona-www", edits: [
    ["Zgodnie z polskimi zasadami etyki, prawnik nie może się reklamować w sposób komercyjny, ale może informować o swojej działalności — a strona internetowa to właśnie narzędzie informacyjne, nie reklama.",
     "Od 2023 roku adwokaci mogą posługiwać się informacją handlową (uchwała NRA nr 93/2023), a radcowie prawni mają prawo informować o wykonywaniu zawodu — w obu przypadkach bez porównań, obietnic wyniku i treści ocennych. Rzeczowa strona internetowa mieści się w tych zasadach.", "sub"],
  ] },
  { type: "singlepage", lang: "en", slug: "local-seo-for-lawyers", edits: [
    ["Local Services Ads for lawyers (Google Screened) vs organic local SEO", "Local Services Ads for lawyers (Google Verified) vs organic local SEO", "exact"],
    [["Firms that pass Google’s screening — background and license checks — get the Google Screened badge and pay per lead rather than per click. They bring calls from the first weeks, and Google lets you dispute leads that are not relevant.",
      "Firms that pass Google's screening — background and license checks — get the Google Screened badge and pay per lead rather than per click. They bring calls from the first weeks, and Google lets you dispute leads that are not relevant."],
     ["Firms that pass Google’s checks — including a state bar license check for each lawyer — get the Google Verified badge, which replaced Google Screened on 20 October 2025, and pay per lead rather than per click. They bring calls from the first weeks; credits for invalid leads are now applied automatically.",
      "Firms that pass Google's checks — including a state bar license check for each lawyer — get the Google Verified badge, which replaced Google Screened on 20 October 2025, and pay per lead rather than per click. They bring calls from the first weeks; credits for invalid leads are now applied automatically."], "sub"],
  ] },
];

const SKIP = new Set(["_id", "_type", "_rev", "_createdAt", "_updatedAt", "_key", "_ref", "slug", "language", "href"]);

function walk(v, pairs, mode) {
  if (typeof v === "string") {
    let hits = 0, out = v;
    for (const [o, nu] of pairs) {
      if (mode === "exact" ? out.trim() === o : out.includes(o)) {
        hits += mode === "exact" ? 1 : out.split(o).length - 1;
        out = mode === "exact" ? nu : out.split(o).join(nu);
        break;
      }
    }
    return [out, hits];
  }
  if (Array.isArray(v)) {
    let hits = 0;
    const arr = v.map((x) => { const [y, h] = walk(x, pairs, mode); hits += h; return y; });
    return [arr, hits];
  }
  if (v && typeof v === "object") {
    let hits = 0; const obj = {};
    for (const [k, x] of Object.entries(v)) {
      if (SKIP.has(k)) { obj[k] = x; continue; }
      const [y, h] = walk(x, pairs, mode); hits += h; obj[k] = y;
    }
    return [obj, hits];
  }
  return [v, 0];
}
const count = (v, s) => JSON.stringify(v).split(JSON.stringify(s).slice(1, -1)).length - 1;

async function main() {
  const patches = [];
  for (const page of EDITS) {
    const doc = await client.fetch(
      `*[_type == $type && language == $lang && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]`,
      { type: page.type, lang: page.lang, s: page.slug },
    );
    if (!doc) { console.log(`warn  ${page.lang} «${page.slug}» not found — skipped`); continue; }
    const draft = await client.fetch(`*[_id == $id][0]._id`, { id: `drafts.${doc._id}` });
    if (draft) { console.log(`Aborting — draft exists for ${doc._id}; publish or discard it first.`); process.exit(1); }

    let cur = doc, ok = true; const lines = [];
    for (const [old, nu, mode] of page.edits) {
      const olds = Array.isArray(old) ? old : [old];
      const nus = Array.isArray(nu) ? nu : olds.map(() => nu);
      const pairs = olds.map((o, i) => [o, nus[i]]);
      const [next, hits] = walk(cur, pairs, mode);
      if (hits === 0 && nus.some((n) => n === "" || count(cur, n) > 0)) { lines.push(`  skip  already done: «${(nus[0] || olds[0]).slice(0, 80)}…»`); continue; }
      if (hits !== 1) { lines.push(`  STOP  «${olds[0].slice(0, 90)}…» matched ${hits}× (need exactly 1)`); ok = false; break; }
      lines.push(`  «${olds[0].slice(0, 90)}…»\n     → «${(nus[0] || "(removed)").slice(0, 140)}…»`);
      cur = next;
    }
    console.log(`\n${page.lang} «${page.slug}» (${doc._id})\n${lines.join("\n")}`);
    if (!ok) { console.log("  page skipped"); continue; }
    const set = {};
    for (const k of Object.keys(cur)) if (!SKIP.has(k) && JSON.stringify(cur[k]) !== JSON.stringify(doc[k])) set[k] = cur[k];
    if (set.seo?.metaDescription && set.seo.metaDescription.length > 160) console.log(`  !  meta description ${set.seo.metaDescription.length} chars`);
    if (Object.keys(set).length) patches.push({ id: doc._id, rev: doc._rev, set });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${patches.length} page(s), nothing written. Add --apply to write.`);
  const tx = client.transaction();
  for (const p of patches) tx.patch(p.id, (q) => q.ifRevisionId(p.rev).set(p.set));
  await tx.commit();
  console.log(`\nWritten: ${patches.map((p) => p.id).join(", ")}\nThe webhook revalidates these pages.`);
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
