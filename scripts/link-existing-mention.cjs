// scripts/link-existing-mention.cjs
//
// Turns a phrase already present in a page into an internal link, by splitting
// the span that holds it. No copy is added or rewritten — the sentence stays
// exactly as written, it just gains a link.
//
// Why these edits: in the GSC export of 2026-10-12 the Russian French market
// page was the biggest riser on the site (964 → 1 437 impressions, position
// 18.2), with Switzerland at 12.3 and the Netherlands at 13.5. Measured on
// 2026-10-13: nine Russian documents mention France and two linked to it,
// while eight mention Switzerland and all eight linked. Most of what looked
// like cross-linking between the market pages was the footer, not editorial
// links — so the footer gained all three pages (scripts/build-nav.cjs) and the
// neighbouring markets gained the two editorial links below.
//
// Usage:
//   node scripts/link-existing-mention.cjs --dry-run
//   node scripts/link-existing-mention.cjs

const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const DRY = process.argv.includes("--dry-run");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const key = () => crypto.randomBytes(6).toString("hex");

const EDITS = [
  {
    // "Работа для Германии служит Германии. Работа для Нидерландов служит
    // Нидерландам." — the Dutch market page is named and was not linked.
    id: "singlepage-seo-france.ru",
    phrase: "Нидерландов",
    href: "/ru/uslugi/lokacii/prodvizhenie-na-gollandskiy-rynok",
  },
  {
    // "Технически это решается так же, как с французским: версия nl-NL…"
    id: "singlepage-seo-netherlands.ru",
    phrase: "французским",
    href: "/ru/uslugi/lokacii/prodvizhenie-na-frantsuzskiy-rynok",
  },
];

/** The first span containing the phrase that carries no marks of its own. */
function findSpan(contentBlocks, phrase) {
  for (let i = 0; i < contentBlocks.length; i++) {
    const cb = contentBlocks[i];
    if (cb._type !== "textContent") continue;
    const content = cb.content || [];
    for (let j = 0; j < content.length; j++) {
      const b = content[j];
      if (b._type !== "block") continue;
      const children = b.children || [];
      for (let s = 0; s < children.length; s++) {
        const span = children[s];
        if ((span.marks || []).length) continue; // already styled or linked
        const at = span.text.indexOf(phrase);
        if (at > -1) return { i, j, s, at };
      }
    }
  }
  return null;
}

(async () => {
  for (const edit of EDITS) {
    const doc = await client.fetch("*[_id==$id][0]{_id,title,language,contentBlocks}", {
      id: edit.id,
    });
    if (!doc) throw new Error(`${edit.id} not found`);

    const blocks = doc.contentBlocks.map((cb) =>
      cb._type === "textContent" ? { ...cb, content: [...(cb.content || [])] } : cb,
    );

    if (JSON.stringify(blocks).includes(edit.href)) {
      console.log(`${edit.id}: already links to ${edit.href} — skipped`);
      continue;
    }

    const hit = findSpan(blocks, edit.phrase);
    if (!hit) throw new Error(`${edit.id}: no unmarked span contains "${edit.phrase}"`);

    const { i, j, s, at } = hit;
    const block = { ...blocks[i].content[j] };
    const children = [...(block.children || [])];
    const span = children[s];

    const before = span.text.slice(0, at);
    const after = span.text.slice(at + edit.phrase.length);
    const dk = key();

    const replacement = [
      before && { _type: "span", _key: key(), text: before, marks: [] },
      { _type: "span", _key: key(), text: edit.phrase, marks: [dk] },
      after && { _type: "span", _key: key(), text: after, marks: [] },
    ].filter(Boolean);

    children.splice(s, 1, ...replacement);
    block.children = children;
    block.markDefs = [...(block.markDefs || []), { _type: "link", _key: dk, href: edit.href }];
    blocks[i].content[j] = block;

    const sentence = children.map((c) => c.text).join("");
    console.log(`=== ${edit.id} (${doc.language}) — ${doc.title}`);
    console.log(`    block [${i}.${j}], span ${s}`);
    console.log(`    "${edit.phrase}" → ${edit.href}`);
    console.log(`    ${sentence.slice(0, 220)}`);

    // The text must come out byte-identical: this script links, never edits.
    const was = (doc.contentBlocks[i].content[j].children || []).map((c) => c.text).join("");
    if (was !== sentence) throw new Error(`${edit.id}: the paragraph text changed — refusing to write`);

    if (!DRY) {
      await client.patch(doc._id).set({ contentBlocks: blocks }).commit();
      console.log("    written");
    }
    console.log("");
  }

  console.log(
    DRY
      ? "Dry run — nothing was written."
      : "Done. Revalidate by hand (§13) and submit the changed URLs (§8).",
  );
})().catch((e) => {
  console.error("\n" + (e.message || e));
  process.exitCode = 1;
});
