// scripts/apply-restaurant-cluster-links.cjs
//
// Cross-links the restaurant pages inside each language, so every page of the
// group links to every other page of its language:
//   EN  /restaurant-website ↔ /restaurant-website-design ↔ /restaurant-seo
//   PL  /pl/strona-dla-restauracji ↔ /pl/pozycjonowanie-strony-restauracji ↔
//       /pl/oferty/pozycjonowanie-strony-restauracji-warszawa
//   RU  /ru/sait-dlya-restorana ↔ /ru/seo-prodvizhenie-saita-restorana ↔
//       /ru/uslugi/prodvizhenie-saita-restorana-varshava
// The new SEO pages already link to their siblings; this adds the missing
// directions as one paragraph each, written for the place it lands in.
// Also renames the EN H2 «The menu is the site» (the PL and RU twins were
// renamed in stage 1; a heading must name its subject on its own).
//
// Blocks are found by _key AND by a heading they must contain, so a changed
// page stops the script instead of being patched blindly. Idempotent: a
// paragraph that is already there is skipped. Aborts on drafts (the site
// reads them). One transaction.
//
// Usage: node scripts/apply-restaurant-cluster-links.cjs           dry run
//        node scripts/apply-restaurant-cluster-links.cjs --apply   write

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
const L = (text, href) => ({ text, href });

// a Portable Text paragraph from strings and links
function para(...parts) {
  const markDefs = [];
  const children = parts.map((part) => {
    if (typeof part === "string") return { _type: "span", _key: key(), text: part, marks: [] };
    const mk = key();
    markDefs.push({ _type: "link", _key: mk, href: part.href });
    return { _type: "span", _key: key(), text: part.text, marks: [mk] };
  });
  return { _type: "block", _key: key(), style: "normal", markDefs, children };
}
const plain = (b) => (b.children || []).map((c) => c.text).join("");

const EDITS = [
  {
    id: "singlepage-restaurant",
    block: "6cea7ae9e875",
    mustHave: "The menu is the site",
    rename: { from: "The menu is the site", to: "Restaurant website menu: real pages, not a PDF" },
    append: para(
      "Development is one of three pieces of work on a restaurant website. How the site looks and reads on a phone is covered on the ",
      L("restaurant website design", "/restaurant-website-design"),
      " page, and getting found in Google Maps and local search on the ",
      L("restaurant SEO", "/restaurant-seo"),
      " page.",
    ),
  },
  {
    id: "singlepage-restaurant-website-design",
    guide: true,
    mustHave: "How the restaurant website design process works",
    insertAfterStartsWith: "If you already have a website and want a new design",
    insert: para(
      "Design turns guests who are already on the site into bookings. Getting found in the first place — Google Maps, local search, AI answers — is covered on the ",
      L("restaurant SEO", "/restaurant-seo"),
      " page.",
    ),
  },
  {
    id: "singlepage-restaurant.pl",
    block: "2940c1594e82",
    mustHave: "Strona internetowa dla restauracji: menu jako podstrony, a nie PDF",
    append: para(
      "Widoczność restauracji w Google i w Mapach to osobna praca, opisana na stronie ",
      L("pozycjonowanie restauracji", "/pl/pozycjonowanie-strony-restauracji"),
      ". Dla lokali w Warszawie szczegóły są na stronie ",
      L("pozycjonowanie strony restauracji w Warszawie", "/pl/oferty/pozycjonowanie-strony-restauracji-warszawa"),
      ".",
    ),
  },
  {
    id: "singlepage-restaurant.ru",
    block: "90ef6aac011e",
    mustHave: "Сайт для ресторана: меню — настоящие страницы, а не PDF",
    append: para(
      "Видимость ресторана в Google и в картах — отдельная работа, она описана на странице ",
      L("SEO-продвижение сайта ресторана", "/ru/seo-prodvizhenie-saita-restorana"),
      ". Для заведений в Варшаве подробности — на странице ",
      L("продвижение сайта ресторана в Варшаве", "/ru/uslugi/prodvizhenie-saita-restorana-varshava"),
      ".",
    ),
  },
  {
    id: "singlepage-seo-restauracja-warszawa.pl",
    block: "64e2da0867ab",
    mustHave: "Co obejmuje praca",
    append: para(
      "Restauracjom spoza Warszawy ta sama praca jest opisana na stronie ",
      L("pozycjonowanie restauracji", "/pl/pozycjonowanie-strony-restauracji"),
      ". Jeśli obecna strona nie udźwignie menu w tekście i podstron lokali, zacząć trzeba od niej: ",
      L("tworzenie strony dla restauracji", "/pl/strona-dla-restauracji"),
      ".",
    ),
  },
  {
    id: "singlepage-seo-restauracja-warszawa.ru",
    block: "dd6a4b4a5c58",
    mustHave: "Что входит в работу",
    append: para(
      "Для ресторанов за пределами Варшавы та же работа описана на странице ",
      L("SEO-продвижение сайта ресторана", "/ru/seo-prodvizhenie-saita-restorana"),
      ". Если нынешний сайт не потянет меню текстом и страницы заведений, начинать стоит с сайта: ",
      L("разработка сайта для ресторана", "/ru/sait-dlya-restorana"),
      ".",
    ),
  },
];

async function main() {
  const ids = EDITS.map((e) => e.id);
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: ids.map((i) => `drafts.${i}`) });
  if (drafts.length) {
    console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`);
    process.exit(1);
  }
  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, contentBlocks}`, { ids });

  const patches = [];
  for (const e of EDITS) {
    const doc = docs.find((d) => d._id === e.id);
    if (!doc) throw new Error(`${e.id} not found`);
    const block = e.guide
      ? doc.contentBlocks.find((b) => b._type === "textContent" && b.layout === "guide")
      : doc.contentBlocks.find((b) => b._key === e.block);
    if (!block || block._type !== "textContent") throw new Error(`${e.id}: text block ${e.block ?? "guide"} not found`);
    const content = block.content || [];
    if (!content.some((b) => plain(b).trim() === e.mustHave || (e.rename && plain(b).trim() === e.rename.to))) {
      throw new Error(`${e.id}: block ${block._key} has no heading «${e.mustHave}» — page changed, check it by hand`);
    }
    const newPara = e.append || e.insert;
    if (content.some((b) => plain(b) === plain(newPara))) {
      console.log(`skip  ${e.id}: paragraph already there`);
    } else {
      const base = `contentBlocks[_key=="${block._key}"].content`;
      let where = `${base}[-1]`;
      if (e.insertAfterStartsWith) {
        const anchor = content.find((b) => plain(b).startsWith(e.insertAfterStartsWith));
        if (!anchor) throw new Error(`${e.id}: paragraph «${e.insertAfterStartsWith}…» not found`);
        where = `${base}[_key=="${anchor._key}"]`;
      }
      console.log(`\n${e.id} (${e.insertAfterStartsWith ? "after «" + e.insertAfterStartsWith.slice(0, 40) + "…»" : "end of «" + e.mustHave.slice(0, 50) + "»"}):\n  ${plain(newPara)}`);
      patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.insert("after", where, [newPara]) });
    }
    if (e.rename) {
      const h = content.find((b) => /^h[23]$/.test(b.style) && plain(b).trim() === e.rename.from);
      if (h) {
        if (h.children.length !== 1) throw new Error(`${e.id}: heading «${e.rename.from}» has several spans`);
        console.log(`\n${e.id}: H2 «${e.rename.from}» → «${e.rename.to}»`);
        const p2 = `contentBlocks[_key=="${block._key}"].content[_key=="${h._key}"].children[_key=="${h.children[0]._key}"].text`;
        patches.push({ id: doc._id, rev: doc._rev, op: (p) => p.set({ [p2]: e.rename.to }) });
      } else {
        console.log(`skip  ${e.id}: heading already renamed`);
      }
    }
  }

  if (!patches.length) {
    console.log("\nNothing to do.");
    return;
  }
  if (!APPLY) {
    console.log("\nDry run — nothing written. Add --apply to write.");
    return;
  }
  const byDoc = new Map();
  for (const p of patches) {
    if (!byDoc.has(p.id)) byDoc.set(p.id, { rev: p.rev, ops: [] });
    byDoc.get(p.id).ops.push(p.op);
  }
  const tx = client.transaction();
  for (const [id, { rev, ops }] of byDoc) tx.patch(id, (p) => ops.reduce((acc, op) => op(acc), p.ifRevisionId(rev)));
  await tx.commit();
  console.log(`\nWritten: ${[...byDoc.keys()].join(", ")}`);
  console.log("The webhook revalidates these pages; nothing to deploy.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
