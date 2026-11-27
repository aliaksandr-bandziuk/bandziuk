// Puts the agreed design (2026-11-27) on /pl/oferty/optymalizacja-konwersji:
//   - hero: phone with a real first screen (heroVisual "screen" + heroScreen)
//   - quote card: "what comes back" list (returnsIntro + returns)
//   - long text: layout "chapters", seven snippets placed in their chapters,
//     two H3s in the A/B chapter, two list terms bolded, ScanM2 linked to its case
//
// Text of the page is not rewritten: only the additions above.
// Safe to run twice: anything already in place is skipped.
//
//   node scripts/cro-page-chapters.cjs           dry run, prints the plan
//   node scripts/cro-page-chapters.cjs --apply   writes to Sanity
const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const APPLY = process.argv.includes("--apply");
const LANG = "pl";
const SLUG = "optymalizacja-konwersji";
const SCANM2_CASE = "/pl/portfolio/tworzenie-i-seo-strony-architektonicznej-scan";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const key = () => crypto.randomBytes(6).toString("hex");
const text = (b) => (b && Array.isArray(b.children) ? b.children.map((c) => c.text || "").join("") : "");
const isPara = (b) => b && b._type === "block" && (b.style || "normal") === "normal" && !b.listItem;
const isListItem = (b) => b && b._type === "block" && b.listItem === "bullet";
const isH2 = (b) => b && b._type === "block" && b.style === "h2";

// Same split as QuoteFormBlock.armFor: which form the page shows.
function armFor(pageKey) {
  let h = 5381;
  for (let i = 0; i < pageKey.length; i++) h = ((h << 5) + h + pageKey.charCodeAt(i)) | 0;
  return Math.abs(h) % 2 === 0 ? "short" : "quiz";
}

// Where each snippet goes: chapter (H2 starts with), and after what.
const SNIPPETS = [
  { h2: "Na czym polega optymalizacja konwersji", kind: "funnel", after: "list" },
  { h2: "Audyt konwersji: co sprawdzam", kind: "auditReport", after: "firstPara" },
  { h2: "Specjalista CRO czy agencja", kind: "codeDiff", after: "firstPara" },
  { h2: "Optymalizacja konwersji dla firm lokalnych", kind: "localPhone", after: "firstPara" },
  { h2: "Optymalizacja konwersji sklepu internetowego", kind: "checkout", after: "list" },
  { h2: "Formularze z RODO", kind: "formBeforeAfter", after: "firstPara" },
  { h2: "Jak mierzę efekty", kind: "ga4Events", after: "firstPara" },
];

const AB_CHAPTER = "Testy A/B czy pomiar przed i po";
const AB_H3 = ["Test A/B przy dużym ruchu", "Pomiar przed i po na mniejszych stronach"];
const BOLD_TERMS = ["nagrania sesji i mapy cieplne", "przyciski kontaktu i formularze"];

function chapterRange(content, h2Start) {
  const start = content.findIndex((b) => isH2(b) && text(b).startsWith(h2Start));
  if (start < 0) return null;
  let end = content.findIndex((b, i) => i > start && isH2(b));
  if (end < 0) end = content.length;
  return { start, end };
}

(async () => {
  const doc = await client.fetch(
    `*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug && !(_id in path("drafts.**"))][0]`,
    { lang: LANG, slug: SLUG },
  );
  if (!doc) throw new Error(`No published singlepage /${LANG}/…/${SLUG}`);
  const draft = await client.fetch(`*[_id == $id][0]{_id}`, { id: `drafts.${doc._id}` });
  if (draft) {
    console.log(`A draft exists (${draft._id}). Publish or discard it in Studio first, then run again.`);
    process.exit(1);
  }
  console.log(`Page: ${doc._id} — ${doc.title}\n`);

  const set = {};
  const log = [];

  // ── Hero ──────────────────────────────────────────────────────────────────
  if (doc.heroVisual !== "screen") {
    set.heroVisual = "screen";
    set.heroScreen = {
      brand: "Wasza firma",
      title: "Torby skórzane szyte na zamówienie",
      subline: "Kraków · wysyłka w całej Polsce",
      call: "Zadzwoń",
      message: "WhatsApp",
      chips: ["BLIK", "Paczkomat"],
      toast: "Zapytanie wysłane",
    };
    log.push("hero: phone with a real first screen; labels stay: " + (doc.heroPhonePoints || []).join(" / "));
  }

  // ── Quote card ────────────────────────────────────────────────────────────
  const blocks = doc.contentBlocks || [];
  const quote = blocks.find((b) => b._type === "quoteFormBlock");
  if (quote && !(quote.returns || []).length) {
    const variant = !quote.formVariant || quote.formVariant === "auto" ? armFor(doc._id) : quote.formVariant;
    const intro =
      variant === "quiz"
        ? "Dwa pytania o Waszą stronę, potem kontakt. W odpowiedzi dostajecie trzy rzeczy:"
        : "Kilka słów o Waszej stronie, potem kontakt. W odpowiedzi dostajecie trzy rzeczy:";
    set[`contentBlocks[_key=="${quote._key}"].returnsIntro`] = intro;
    set[`contentBlocks[_key=="${quote._key}"].returns`] = [
      { _key: key(), _type: "quoteReturn", title: "Od czego zacząłbym na Waszej stronie", note: "Dostęp do GA4 nie jest potrzebny do pierwszej odpowiedzi" },
      { _key: key(), _type: "quoteReturn", title: "Stała cena", note: "Audyt konwersji od 1000 zł" },
      { _key: key(), _type: "quoteReturn", title: "Odpowiedź w ciągu jednego dnia roboczego", note: "Albo od razu napiszcie na WhatsApp" },
    ];
    log.push(`quote card (${variant} form): “${intro}” + 3 items`);
  }

  // ── Long text ─────────────────────────────────────────────────────────────
  const tc = blocks.find(
    (b) => b._type === "textContent" && (b.content || []).some((x) => isH2(x) && text(x).startsWith("Na czym polega optymalizacja konwersji")),
  );
  if (!tc) throw new Error("Long text block not found (no H2 “Na czym polega optymalizacja konwersji…”)");
  let content = JSON.parse(JSON.stringify(tc.content));
  let changed = false;

  if (tc.layout !== "chapters") {
    set[`contentBlocks[_key=="${tc._key}"].layout`] = "chapters";
    log.push("long text: layout chapters (heading left, pinned; no contents list)");
  }

  // Snippets
  for (const s of SNIPPETS) {
    if (content.some((b) => b._type === "pageSnippet" && b.kind === s.kind)) continue;
    const r = chapterRange(content, s.h2);
    if (!r) {
      log.push(`  ! chapter not found for ${s.kind}: “${s.h2}…”`);
      continue;
    }
    let at = -1;
    if (s.after === "list") {
      const lastItem = content.slice(r.start, r.end).map((b, i) => (isListItem(b) ? r.start + i : -1)).filter((i) => i >= 0).pop();
      at = lastItem !== undefined ? lastItem + 1 : -1;
    }
    if (at < 0) {
      const firstPara = content.findIndex((b, i) => i > r.start && i < r.end && isPara(b));
      at = firstPara >= 0 ? firstPara + 1 : r.end;
    }
    content.splice(at, 0, { _key: key(), _type: "pageSnippet", kind: s.kind });
    changed = true;
    log.push(`  + snippet ${s.kind.padEnd(16)} in “${s.h2}…”`);
  }

  // H3s in the A/B chapter
  {
    const r = chapterRange(content, AB_CHAPTER);
    if (r && !content.slice(r.start, r.end).some((b) => b.style === "h3")) {
      const paras = content.map((b, i) => (i > r.start && i < r.end && isPara(b) ? i : -1)).filter((i) => i >= 0);
      if (paras.length >= 2) {
        const h3 = (t) => ({ _key: key(), _type: "block", style: "h3", markDefs: [], children: [{ _key: key(), _type: "span", marks: [], text: t }] });
        content.splice(paras[1], 0, h3(AB_H3[1]));
        content.splice(paras[0], 0, h3(AB_H3[0]));
        changed = true;
        log.push(`  + H3 “${AB_H3[0]}” and “${AB_H3[1]}” in the A/B chapter`);
      }
    }
  }

  // Bold the two list terms that have no colon after them
  for (const term of BOLD_TERMS) {
    const b = content.find((x) => isListItem(x) && text(x).startsWith(term));
    if (!b) continue;
    const first = b.children[0];
    if ((first.marks || []).includes("strong") || !first.text.startsWith(term)) continue;
    const label = term.charAt(0).toUpperCase() + term.slice(1);
    b.children = [
      { ...first, _key: key(), text: label, marks: [...(first.marks || []), "strong"] },
      { ...first, text: first.text.slice(term.length) },
      ...b.children.slice(1),
    ];
    changed = true;
    log.push(`  + bold term “${label}”`);
  }

  // ScanM2 → its case
  {
    const b = content.find((x) => isPara(x) && text(x).startsWith("ScanM2"));
    if (b && !(b.markDefs || []).some((m) => m._type === "link")) {
      const first = b.children[0];
      if (first && first.text.startsWith("ScanM2")) {
        const linkKey = key();
        b.markDefs = [...(b.markDefs || []), { _key: linkKey, _type: "link", href: SCANM2_CASE }];
        b.children = [
          { ...first, _key: key(), text: "ScanM2", marks: [...(first.marks || []), linkKey] },
          { ...first, text: first.text.slice("ScanM2".length) },
          ...b.children.slice(1),
        ];
        changed = true;
        log.push(`  + link ScanM2 → ${SCANM2_CASE}`);
      }
    }
  }

  if (changed) set[`contentBlocks[_key=="${tc._key}"].content`] = content;

  if (!Object.keys(set).length) {
    console.log("Nothing to do: everything is already in place.");
    return;
  }
  console.log(log.join("\n"));
  if (!APPLY) {
    console.log("\nDry run. Run with --apply to write.");
    return;
  }
  await client.patch(doc._id).set(set).commit();
  console.log("\nWritten.");
})().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
