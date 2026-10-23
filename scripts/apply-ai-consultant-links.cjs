// scripts/apply-ai-consultant-links.cjs
//
// Run after the AI SEO consultant pages are published and deployed:
//   /services/ai-seo-consultant, /pl/oferty/ekspert-ai-seo, /ru/uslugi/ai-seo-konsultant
//
// 1. Services hubs, AI section: the consultant page right after AI SEO services.
// 2. AI SEO services pages EN / PL / RU: one sentence after the last question
//    of the «company, agency or consultant» section, pointing to the
//    consultant page (the same sentences are in the ai-seo-services fixtures).
// The consultant pages already link the services pages in their own text.
//
// Idempotent; aborts on drafts; one transaction.
//
// Usage: node scripts/apply-ai-consultant-links.cjs           dry run
//        node scripts/apply-ai-consultant-links.cjs --apply   write

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
const norm = (t) => t.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
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

const LANGS = {
  en: { id: "singlepage-ai-seo-consultant", href: "/services/ai-seo-consultant", after: "singlepage-ai-seo-services", hub: "AI visibility & search" },
  pl: { id: "singlepage-ai-seo-consultant.pl", href: "/pl/oferty/ekspert-ai-seo", after: "singlepage-ai-seo-services.pl", hub: "Widoczność i wyszukiwanie AI" },
  ru: { id: "singlepage-ai-seo-consultant.ru", href: "/ru/uslugi/ai-seo-konsultant", after: "singlepage-ai-seo-services.ru", hub: "Видимость и поиск в ИИ" },
};

const TEXT = [
  { id: "singlepage-ai-seo-services", label: "EN AI SEO services", anchor: "What do you promise?",
    para: para("How working with me as an independent consultant looks is described on the ", ["AI SEO consultant", LANGS.en.href], " page.") },
  { id: "singlepage-ai-seo-services.pl", label: "PL usługi AI SEO", anchor: "Co obiecujecie?",
    para: para("Jak wygląda współpraca ze mną jako niezależnym konsultantem, opisuję na stronie ", ["ekspert AI SEO", LANGS.pl.href], ".") },
  { id: "singlepage-ai-seo-services.ru", label: "RU AI SEO-продвижение", anchor: "Что вы обещаете?",
    para: para("Как выглядит работа со мной как с независимым консультантом, описано на странице ", ["AI SEO-консультант", LANGS.ru.href], ".") },
];

async function main() {
  const ids = Object.values(LANGS).map((l) => l.id);
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
  for (const [lang, l] of Object.entries(LANGS)) {
    const hub = hubs.find((x) => x.language === lang && x.blocks.some((b) => b.title === l.hub));
    const sec = hub && hub.blocks.find((b) => b.title === l.hub);
    if (!sec) throw new Error(`${lang} hub: section «${l.hub}» not found`);
    if ((sec.refs || []).includes(l.id)) { console.log(`skip  ${lang} hub «${l.hub}»: already lists ${l.id}`); continue; }
    const has = (sec.refs || []).includes(l.after);
    const where = has ? `contentBlocks[_key=="${sec._key}"].items[_ref=="${l.after}"]` : `contentBlocks[_key=="${sec._key}"].items[-1]`;
    console.log(`add   ${lang} hub «${l.hub}»: ${l.id} ${has ? `after ${l.after}` : "at the end"}`);
    patches.push({ id: hub._id, rev: hub._rev, op: (p) => p.insert("after", where, [{ _key: key(), _type: "reference", _ref: l.id }]) });
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
  const byDoc = new Map();
  for (const p of patches) {
    if (!byDoc.has(p.id)) byDoc.set(p.id, { rev: p.rev, ops: [] });
    byDoc.get(p.id).ops.push(p.op);
  }
  const tx = client.transaction();
  for (const [id, { rev, ops }] of byDoc) tx.patch(id, (q) => ops.reduce((acc, op) => op(acc), q.ifRevisionId(rev)));
  await tx.commit();
  console.log(`\nWritten: ${[...byDoc.keys()].join(", ")}`);
  console.log("The webhook revalidates these pages.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
