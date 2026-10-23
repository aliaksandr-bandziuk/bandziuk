// scripts/apply-chatgpt-llm-links.cjs
//
// Run after the ChatGPT SEO and LLM SEO pages are published and deployed:
//   /services/chatgpt-seo-services, /pl/oferty/pozycjonowanie-w-chatgpt,
//   /ru/uslugi/prodvizhenie-v-chatgpt, /services/llm-seo-services,
//   /pl/oferty/llm-seo, /ru/uslugi/llm-seo
//
// 1. Services hubs, AI section: both pages right after the AI SEO consultant.
// 2. One sentence linking both pages:
//    - on the AI SEO services pages EN / PL / RU, after the «more detail on the
//      GEO / AEO pages» paragraph (the same sentences are in the fixtures);
//    - on the GEO hubs EN / PL / RU, after the sentence that links AI SEO
//      services.
// The two new pages link each other in their own text.
//
// Idempotent; aborts on drafts; one transaction.
//
// Usage: node scripts/apply-chatgpt-llm-links.cjs           dry run
//        node scripts/apply-chatgpt-llm-links.cjs --apply   write

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

const L = {
  en: { chat: ["ChatGPT SEO services", "/services/chatgpt-seo-services", "singlepage-chatgpt-seo-services"],
        llm: ["LLM SEO services", "/services/llm-seo-services", "singlepage-llm-seo-services"],
        after: "singlepage-ai-seo-consultant", hub: "AI visibility & search" },
  pl: { chat: ["pozycjonowanie w ChatGPT", "/pl/oferty/pozycjonowanie-w-chatgpt", "singlepage-chatgpt-seo-services.pl"],
        llm: ["LLM SEO", "/pl/oferty/llm-seo", "singlepage-llm-seo-services.pl"],
        after: "singlepage-ai-seo-consultant.pl", hub: "Widoczność i wyszukiwanie AI" },
  ru: { chat: ["продвижение в ChatGPT", "/ru/uslugi/prodvizhenie-v-chatgpt", "singlepage-chatgpt-seo-services.ru"],
        llm: ["LLM SEO", "/ru/uslugi/llm-seo", "singlepage-llm-seo-services.ru"],
        after: "singlepage-ai-seo-consultant.ru", hub: "Видимость и поиск в ИИ" },
};

const svcPara = {
  en: para("ChatGPT on its own, and each language model measured separately, are covered on the ", L.en.chat.slice(0, 2), " and ", L.en.llm.slice(0, 2), " pages."),
  pl: para("Sam ChatGPT oraz każdy model językowy mierzony osobno opisuję na stronach ", L.pl.chat.slice(0, 2), " i ", L.pl.llm.slice(0, 2), "."),
  ru: para("Отдельно про ChatGPT и про каждую языковую модель с отдельными замерами — на страницах ", L.ru.chat.slice(0, 2), " и ", L.ru.llm.slice(0, 2), "."),
};
const geoPara = {
  en: para("For ChatGPT specifically, and for all language models measured one by one, see ", L.en.chat.slice(0, 2), " and ", L.en.llm.slice(0, 2), "."),
  pl: para("O samym ChatGPT i o wszystkich modelach językowych mierzonych osobno piszę na stronach ", L.pl.chat.slice(0, 2), " i ", L.pl.llm.slice(0, 2), "."),
  ru: para("Отдельно про ChatGPT и про все языковые модели с замерами по каждой — на страницах ", L.ru.chat.slice(0, 2), " и ", L.ru.llm.slice(0, 2), "."),
};

const TEXT = [
  { id: "singlepage-ai-seo-services", label: "EN AI SEO services", anchor: "More detail on the", para: svcPara.en },
  { id: "singlepage-ai-seo-services.pl", label: "PL usługi AI SEO", anchor: "Więcej na stronach", para: svcPara.pl },
  { id: "singlepage-ai-seo-services.ru", label: "RU AI SEO-продвижение", anchor: "Подробнее — на странице", para: svcPara.ru },
  { id: "831dc620-2863-4d55-baa0-aa874a7374ac", label: "EN GEO hub", anchor: "If you want Google rankings and AI answers handled together", para: geoPara.en },
  { id: "3a759a28-4135-4731-a318-cffee1b512f0", label: "PL GEO hub", anchor: "Jeśli chcecie, żeby pozycje w Google i odpowiedzi AI", para: geoPara.pl },
  { id: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71", label: "RU GEO hub", anchor: "Если нужно, чтобы позиции в Google и ответы ИИ", para: geoPara.ru },
];

async function main() {
  const ids = Object.values(L).flatMap((l) => [l.chat[2], l.llm[2]]);
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
  for (const [lang, l] of Object.entries(L)) {
    const hub = hubs.find((x) => x.language === lang && x.blocks.some((b) => b.title === l.hub));
    const sec = hub && hub.blocks.find((b) => b.title === l.hub);
    if (!sec) throw new Error(`${lang} hub: section «${l.hub}» not found`);
    const missing = [l.chat[2], l.llm[2]].filter((r) => !(sec.refs || []).includes(r));
    if (!missing.length) { console.log(`skip  ${lang} hub «${l.hub}»: already lists both`); continue; }
    const has = (sec.refs || []).includes(l.after);
    const where = has ? `contentBlocks[_key=="${sec._key}"].items[_ref=="${l.after}"]` : `contentBlocks[_key=="${sec._key}"].items[-1]`;
    console.log(`add   ${lang} hub «${l.hub}»: ${missing.join(", ")} ${has ? `after ${l.after}` : "at the end"}`);
    patches.push({ id: hub._id, rev: hub._rev, op: (p) => p.insert("after", where, missing.map((r) => ({ _key: key(), _type: "reference", _ref: r }))) });
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
