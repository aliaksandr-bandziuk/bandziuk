// scripts/apply-pl-aeo-retitle.cjs
//
// PL AEO page /pl/oferty/pozycjonowanie-w-ai-i-chatgpt (owner's OK,
// 23.10.2026): «pozycjonowanie w ChatGPT» now has its own page
// (/pl/oferty/pozycjonowanie-w-chatgpt; 0 shared URLs with «pozycjonowanie w
// ai»), so ChatGPT leaves this page's title, H1 and the two H2s that carried
// it, and one sentence links the ChatGPT page. The address does not change.
//
// Every old text is checked before it is replaced; a page changed by hand
// stops the script. Idempotent; aborts on a draft.
//
// Usage: node scripts/apply-pl-aeo-retitle.cjs           dry run
//        node scripts/apply-pl-aeo-retitle.cjs --apply   write

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

const SLUG = "pozycjonowanie-w-ai-i-chatgpt";
const OLD_LABEL = "Pozycjonowanie w AI i ChatGPT (AEO)";
const FIELDS = {
  title: [OLD_LABEL, "Pozycjonowanie w AI (AEO)"],
  heading: [[null, OLD_LABEL], "Pozycjonowanie w AI (AEO): odpowiedzi AI w Google i u asystentów"],
  "seo.metaTitle": ["Pozycjonowanie w AI i ChatGPT (AEO) | Bandziuk", "Pozycjonowanie w AI (AEO) — odpowiedzi AI | Bandziuk"],
};
const HEADINGS = [
  ["Co obejmuje pozycjonowanie w AI i ChatGPT", "Co obejmuje pozycjonowanie w AI (AEO)"],
  ["Kiedy pozycjonowanie w ChatGPT nie jest tym, czego potrzebujecie", "Kiedy pozycjonowanie w AI (AEO) nie jest tym, czego potrzebujecie"],
];
// inserted after the first paragraph under the second heading
const LINK_UNDER = HEADINGS[1][1];
const mk = key();
const LINK_PARA = {
  _type: "block", _key: key(), style: "normal",
  markDefs: [{ _type: "link", _key: mk, href: "/pl/oferty/pozycjonowanie-w-chatgpt" }],
  children: [
    { _type: "span", _key: key(), text: "Jeśli chodzi Wam konkretnie o to, żeby ChatGPT polecał Waszą firmę, zajrzyjcie na stronę ", marks: [] },
    { _type: "span", _key: key(), text: "pozycjonowanie w ChatGPT", marks: [mk] },
    { _type: "span", _key: key(), text: ".", marks: [] },
  ],
};

const get = (obj, dotted) => dotted.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);

async function main() {
  const doc = await client.fetch(
    `*[_type == "singlepage" && language == "pl" && slug.pl.current == $s && !(_id in path("drafts.**"))][0]{_id, _rev, title, heading, seo, contentBlocks}`,
    { s: SLUG },
  );
  if (!doc) throw new Error(`PL page «${SLUG}» not found`);
  const draft = await client.fetch(`*[_id == $id][0]._id`, { id: `drafts.${doc._id}` });
  if (draft) {
    console.log(`Aborting — a draft exists, publish or discard it first: ${draft}`);
    process.exit(1);
  }
  console.log(`── ${doc._id}  /pl/oferty/${SLUG}`);

  const set = {};
  for (const [field, [oldV, newV]] of Object.entries(FIELDS)) {
    const cur = get(doc, field) ?? null;
    if (cur === newV) { console.log(`skip  ${field}: already new`); continue; }
    const allowed = Array.isArray(oldV) ? oldV : [oldV];
    if (!allowed.includes(cur)) throw new Error(`${field} changed by hand — now «${cur}»`);
    console.log(`${field}:\n  − ${cur}\n  + ${newV}`);
    set[field] = newV;
  }

  // Headings may be H2 spans inside a text block or a block's own title field,
  // so the old texts are searched in every string of contentBlocks.
  const findText = (want) => {
    const hits = [];
    const walk = (node, p, top) => {
      if (typeof node === "string") { if (node === want) hits.push({ path: p, top }); return; }
      if (Array.isArray(node)) {
        node.forEach((x, i) => walk(x, x && x._key ? `${p}[_key=="${x._key}"]` : `${p}[${i}]`, top));
        return;
      }
      if (node && typeof node === "object") for (const [k, v] of Object.entries(node)) if (!k.startsWith("_")) walk(v, `${p}.${k}`, top);
    };
    for (const b of doc.contentBlocks) walk(b, `contentBlocks[_key=="${b._key}"]`, b);
    return hits;
  };

  let secondTop = null;
  for (const [oldT, newT] of HEADINGS) {
    const done = findText(newT);
    const hits = findText(oldT);
    if (!hits.length && done.length) { console.log(`skip  «${newT}»: already new`); if (newT === LINK_UNDER) secondTop = done[0].top; continue; }
    if (hits.length !== 1) throw new Error(`«${oldT}» found ${hits.length} times — edit by hand`);
    console.log(`${hits[0].path.replace(/contentBlocks\[_key=="[^"]+"\]/, `[${hits[0].top._type}]`)}:\n  − ${oldT}\n  + ${newT}`);
    set[hits[0].path] = newT;
    if (newT === LINK_UNDER) secondTop = hits[0].top;
  }

  // the link sentence goes after the first paragraph that follows the second
  // heading in the same block (or the block's first paragraph when the heading
  // is the block's title)
  let insert = null;
  const hasLink = doc.contentBlocks.some((b) => (b.content || []).some((x) => plain(x) === plain(LINK_PARA)));
  if (hasLink) console.log("skip  link sentence: already there");
  else if (!secondTop || !Array.isArray(secondTop.content)) console.log("note  the second heading's block has no text — add the link sentence by hand");
  else {
    const c = secondTop.content;
    const hIdx = c.findIndex((x) => [HEADINGS[1][0], LINK_UNDER].includes(plain(x)));
    const next = c.slice(hIdx + 1).find((x) => x.style === "normal");
    if (!next) console.log("note  no paragraph found for the link sentence — add it by hand");
    else {
      insert = { where: `contentBlocks[_key=="${secondTop._key}"].content[_key=="${next._key}"]`, after: plain(next).slice(0, 60) };
      console.log(`\nlink sentence (after «${insert.after}…»):\n  ${plain(LINK_PARA)}`);
    }
  }

  if (!Object.keys(set).length && !insert) return console.log("\nNothing to do.");
  if (!APPLY) return console.log("\nDry run — nothing written. Add --apply to write.");
  let patch = client.patch(doc._id).ifRevisionId(doc._rev);
  if (Object.keys(set).length) patch = patch.set(set);
  if (insert) patch = patch.insert("after", insert.where, [LINK_PARA]);
  await patch.commit();
  console.log(`\nWritten: ${doc._id}. The webhook revalidates the page.`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
