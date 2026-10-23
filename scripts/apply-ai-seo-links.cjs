// scripts/apply-ai-seo-links.cjs
//
// Run after the AI SEO services pages are published and deployed:
//   /services/ai-seo-services, /pl/oferty/uslugi-ai-seo, /ru/uslugi/ai-seo-prodvizhenie
//
// 1. Services hubs, AI section — the new page goes FIRST:
//    EN «AI visibility & search», PL «Widoczność i wyszukiwanie AI»,
//    RU «Видимость и поиск в ИИ».
// 2. One sentence on the related AI pages, after the named paragraph:
//    - GEO hubs EN / PL / RU — after the prices paragraph;
//    - EN AEO services — after «Most businesses need parts of all three…»;
//    - EN AI search optimization (readiness) — after «The difference is what
//      it's aimed at…»;
//    - EN AI visibility audit — after «The audit's job is to tell you…».
//
// Anchors are searched in every textContent block of the page. Idempotent;
// aborts on drafts; one transaction.
//
// Usage: node scripts/apply-ai-seo-links.cjs           dry run
//        node scripts/apply-ai-seo-links.cjs --apply   write

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
// anchors are compared with typographic apostrophes and quotes flattened
const norm = (t) => t.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
// segments: plain strings, or [linkText, href]
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

const NEW = {
  en: { id: "singlepage-ai-seo-services", href: "/services/ai-seo-services" },
  pl: { id: "singlepage-ai-seo-services.pl", href: "/pl/oferty/uslugi-ai-seo" },
  ru: { id: "singlepage-ai-seo-services.ru", href: "/ru/uslugi/ai-seo-prodvizhenie" },
};

const HUB = [
  { lang: "en", title: "AI visibility & search" },
  { lang: "pl", title: "Widoczność i wyszukiwanie AI" },
  { lang: "ru", title: "Видимость и поиск в ИИ" },
];

const TEXT = [
  { id: "831dc620-2863-4d55-baa0-aa874a7374ac", label: "EN GEO hub", anchor: "From €250 for a one-off audit",
    para: para("If you want Google rankings and AI answers handled together as one ongoing job, see ", ["AI SEO services", NEW.en.href], ".") },
  { id: "3a759a28-4135-4731-a318-cffee1b512f0", label: "PL GEO hub", anchor: "Od 1000 zł za jednorazowy audyt",
    para: para("Jeśli chcecie, żeby pozycje w Google i odpowiedzi AI były jedną stałą pracą, zajrzyjcie na stronę ", ["usługi AI SEO", NEW.pl.href], ".") },
  { id: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71", label: "RU GEO hub", anchor: "От 250 € за разовый аудит",
    para: para("Если нужно, чтобы позиции в Google и ответы ИИ были одной постоянной работой, загляните на страницу ", ["AI SEO-продвижение", NEW.ru.href], ".") },
  { id: "singlepage-answer-engine-optimization", label: "EN AEO", anchor: "Most businesses need parts of all three",
    para: para("When all three are needed as one ongoing piece of work, that is what the ", ["AI SEO services", NEW.en.href], " page describes.") },
  { id: "service-ai-search-readiness", label: "EN AI search optimization", anchor: "The difference is what it's aimed at",
    para: para("If you want the ranking work and the AI side as one ongoing job, see ", ["AI SEO services", NEW.en.href], ".") },
  { id: "service-ai-visibility-audit", label: "EN AI visibility audit", anchor: "The audit's job is to tell you",
    para: para("If the audit shows you need ongoing work on Google and AI answers together, that is described on the ", ["AI SEO services", NEW.en.href], " page.") },
];

async function main() {
  const ids = Object.values(NEW).map((n) => n.id);
  const exist = await client.fetch(`*[_id in $ids]._id`, { ids });
  if (exist.length !== ids.length) {
    console.log(`Aborting — not in Sanity yet: ${ids.filter((i) => !exist.includes(i)).join(", ")}`);
    process.exit(1);
  }
  const hubs = await client.fetch(
    `*[_type == "singlepage" && pageType == "servicesIndex" && !(_id in path("drafts.**"))]{
      _id, _rev, language, "blocks": contentBlocks[_type == "relatedServicesBlock"]{ _key, title, "refs": items[]._ref }
    }`,
  );
  const touched = [...hubs.map((h) => h._id), ...TEXT.map((t) => t.id)];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: touched.map((i) => `drafts.${i}`) });
  if (drafts.length) {
    console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`);
    process.exit(1);
  }

  const patches = [];
  for (const h of HUB) {
    const ref = NEW[h.lang].id;
    const hub = hubs.find((x) => x.language === h.lang && x.blocks.some((b) => b.title === h.title));
    const sec = hub && hub.blocks.find((b) => b.title === h.title);
    if (!sec) throw new Error(`${h.lang} hub: section «${h.title}» not found`);
    if ((sec.refs || []).includes(ref)) { console.log(`skip  ${h.lang} hub «${h.title}»: already lists ${ref}`); continue; }
    const where = sec.refs && sec.refs.length ? `contentBlocks[_key=="${sec._key}"].items[0]` : null;
    console.log(`add   ${h.lang} hub «${h.title}»: ${ref} first`);
    patches.push({
      id: hub._id, rev: hub._rev,
      op: (p) => where
        ? p.insert("before", where, [{ _key: key(), _type: "reference", _ref: ref }])
        : p.setIfMissing({ [`contentBlocks[_key=="${sec._key}"].items`]: [] }).append(`contentBlocks[_key=="${sec._key}"].items`, [{ _key: key(), _type: "reference", _ref: ref }]),
    });
  }

  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, contentBlocks}`, { ids: TEXT.map((t) => t.id) });
  for (const t of TEXT) {
    const doc = docs.find((d) => d._id === t.id);
    if (!doc) throw new Error(`${t.label} (${t.id}) not found`);
    const blocks = doc.contentBlocks.filter((x) => x._type === "textContent");
    if (blocks.some((b) => (b.content || []).some((x) => plain(x) === plain(t.para)))) { console.log(`skip  ${t.label}: sentence already there`); continue; }
    let found = null;
    for (const b of blocks) {
      const a = (b.content || []).find((x) => norm(plain(x)).startsWith(norm(t.anchor)));
      if (a) { found = { b, a }; break; }
    }
    if (!found) throw new Error(`${t.label}: paragraph «${t.anchor}…» not found`);
    console.log(`\n${t.label} (after «${t.anchor}…»):\n  ${plain(t.para)}`);
    patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.insert("after", `contentBlocks[_key=="${found.b._key}"].content[_key=="${found.a._key}"]`, [t.para]) });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log("\nDry run — nothing written. Add --apply to write.");
  // One patch per change: a Sanity patch holds a single «insert», and two
  // inserts chained on one patch get merged into a wrong one.
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

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
