// scripts/apply-beauty-price-updates.cjs
//
// Numbers-only price update on the beauty-niche landing pages (parent +
// child, EN/PL/RU) to align with the updated /pricing page. Patches only
// the specific FAQ answer fields via _key path selectors — nothing else
// on these documents is touched.
//
// Usage:
//   node scripts/apply-beauty-price-updates.cjs             — dry run (prints only)
//   node scripts/apply-beauty-price-updates.cjs --apply      — writes patches

const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");

function key() {
  return crypto.randomBytes(6).toString("hex");
}

function normalBlock(text, { bullet = false } = {}) {
  const b = {
    _key: key(),
    _type: "block",
    children: [{ _key: key(), _type: "span", marks: [], text }],
    markDefs: [],
    style: "normal",
  };
  if (bullet) {
    b.level = 1;
    b.listItem = "bullet";
  }
  return b;
}

// --- PARENT PAGE: replace 2-bullet list with 3-bullet list, keep intro/spacer/closing blocks ---
const PARENT_DOC_ID = {
  en: "dab61d1a-28d8-4a10-a2c4-de17399cdbe7",
  ru: "4128719c-e187-4191-9120-eee3f5f9fa6f",
  pl: "a2b00f93-6d28-4b36-b2c9-e5c01867b5b4",
};
const PARENT_FAQ_BLOCK_KEY = "cf6de7c7afb1";
const PARENT_ITEM_KEY = "a380d16efaf2";

const PARENT_NEW_ANSWER = {
  en: (introKey, introText, spacer1Key, spacer2Key, closingKey, closingText) => [
    { _key: introKey, _type: "block", children: [{ _key: key(), _type: "span", marks: [], text: introText }], markDefs: [], style: "normal" },
    { _key: spacer1Key, _type: "block", children: [{ _key: key(), _type: "span", marks: [], text: "" }], markDefs: [], style: "normal" },
    normalBlock("Simple landing page for a beauty professional — €700–1,400", { bullet: true }),
    normalBlock("Conversion-focused personal website with full SEO/AEO/GEO optimization — from €2,000", { bullet: true }),
    normalBlock("Salon or multi-page website — from €2,000", { bullet: true }),
    { _key: spacer2Key, _type: "block", children: [{ _key: key(), _type: "span", marks: [], text: "" }], markDefs: [], style: "normal" },
    { _key: closingKey, _type: "block", children: [{ _key: key(), _type: "span", marks: [], text: closingText }], markDefs: [], style: "normal" },
  ],
};

// Build per-locale answer arrays, preserving original intro/spacer/closing _keys and text.
const parentPatches = {
  en: PARENT_NEW_ANSWER.en(
    "f8cf9a3352f4", "Pricing depends on the project’s scope and complexity:",
    "62c6b628e770", "71bdbcb74ebe",
    "247bca929476", "After a short briefing, I’ll provide a transparent estimate with a full breakdown."
  ),
  ru: [
    { _key: "7925d8ef179c", _type: "block", children: [{ _key: key(), _type: "span", marks: [], text: "Стоимость зависит от сложности проекта, дизайна и функций (онлайн-запись, языковые версии и т. д.). В среднем:" }], markDefs: [], style: "normal" },
    { _key: "5fea20b054d2", _type: "block", children: [{ _key: key(), _type: "span", marks: [], text: "" }], markDefs: [], style: "normal" },
    normalBlock("простой лендинг для бьюти-мастера — €700–1400,", { bullet: true }),
    normalBlock("конверсионный персональный сайт с полной SEO/AEO/GEO-оптимизацией — от €2000,", { bullet: true }),
    normalBlock("сайт салона или мультистраничный сайт — от €2000.", { bullet: true }),
    { _key: "ced1f06de02b", _type: "block", children: [{ _key: key(), _type: "span", marks: [], text: "" }], markDefs: [], style: "normal" },
    { _key: "f8cf9a3352f4_close", _type: "block", children: [{ _key: key(), _type: "span", marks: [], text: "После обсуждения задач я составляю прозрачное коммерческое предложение с детальной сметой." }], markDefs: [], style: "normal" },
  ],
  pl: [
    { _key: "ff4585b97bf7_intro", _type: "block", children: [{ _key: key(), _type: "span", marks: [], text: "Cena zależy od zakresu projektu i funkcjonalności. Przykładowo:" }], markDefs: [], style: "normal" },
    { _key: "2e73d6bb2b39", _type: "block", children: [{ _key: key(), _type: "span", marks: [], text: "" }], markDefs: [], style: "normal" },
    normalBlock("Prosty landing page dla specjalisty beauty — 3000–6000 zł,", { bullet: true }),
    normalBlock("Konwersyjna strona osobista z pełną optymalizacją SEO/AEO/GEO — od 8500 zł,", { bullet: true }),
    normalBlock("Strona salonu lub strona wielostronicowa — od 8500 zł.", { bullet: true }),
    { _key: "7c9995fc0ad2", _type: "block", children: [{ _key: key(), _type: "span", marks: [], text: "" }], markDefs: [], style: "normal" },
    { _key: "f9f2c31cab42_close", _type: "block", children: [{ _key: key(), _type: "span", marks: [], text: "Po rozmowie przygotuję szczegółową, przejrzystą wycenę." }], markDefs: [], style: "normal" },
  ],
};

// --- CHILD PAGE: single-paragraph answer, text-only swap ---
const CHILD_DOC_ID = {
  en: "405bd22d-5aee-45a3-8f9b-108821d9006a",
  ru: "ec128e15-9d97-47df-9aaa-d5b0db480966",
  pl: "a095405f-8a0a-4f89-ba80-8e287923e2a8",
};
const CHILD_FAQ_BLOCK_KEY = "b7c1a2d3e4f5"; // placeholder, corrected below via lookup
const CHILD_ITEM_KEY = "ed0e988a46e5";

const CHILD_NEW_TEXT = {
  en: "Projects start from €2,000, depending on features and content scope. After a short briefing, I provide a detailed quote with timeline and milestones.",
  ru: "Стоимость зависит от объёма работ и требуемых интеграций. Базовый пакет обычно стартует от €2000 (или эквивалент в валюте клиента) и включает дизайн, верстку, настройку онлайн-записи и базовую SEO-оптимизацию. Точная сумма после брифа и оценки задач.",
  pl: "Ceny zaczynają się od 8500 zł netto i zależą od zakresu funkcji (rezerwacje, blog, SEO). Po rozmowie otrzymasz szczegółową wycenę.",
};

async function main() {
  console.log(APPLY ? "=== APPLYING PATCHES ===" : "=== DRY RUN (no --apply flag) ===");

  // Look up the real faqBlock _key on each child doc (contentBlocks[12] per earlier audit, key ed0e988a46e5 is the item, need the faqBlock's own _key)
  const childFaqBlockKeys = {};
  for (const lang of ["en", "ru", "pl"]) {
    const doc = await client.getDocument(CHILD_DOC_ID[lang]);
    const faqBlock = doc.contentBlocks.find((b) => b._type === "faqBlock" && b.faq.items.some((i) => i._key === CHILD_ITEM_KEY));
    if (!faqBlock) throw new Error(`faqBlock not found on child-${lang}`);
    childFaqBlockKeys[lang] = faqBlock._key;
  }

  const patches = [];

  for (const lang of ["en", "ru", "pl"]) {
    patches.push({
      label: `parent-${lang}`,
      docId: PARENT_DOC_ID[lang],
      path: `contentBlocks[_key=="${PARENT_FAQ_BLOCK_KEY}"].faq.items[_key=="${PARENT_ITEM_KEY}"].answer`,
      value: parentPatches[lang],
    });
  }

  for (const lang of ["en", "ru", "pl"]) {
    patches.push({
      label: `child-${lang}`,
      docId: CHILD_DOC_ID[lang],
      path: `contentBlocks[_key=="${childFaqBlockKeys[lang]}"].faq.items[_key=="${CHILD_ITEM_KEY}"].answer[0].children[0].text`,
      value: CHILD_NEW_TEXT[lang],
    });
  }

  for (const p of patches) {
    console.log(`\n--- ${p.label} (${p.docId}) ---`);
    console.log(`path: ${p.path}`);
    console.log(`value: ${typeof p.value === "string" ? p.value : JSON.stringify(p.value, null, 2)}`);
  }

  if (!APPLY) {
    console.log("\nDry run only — nothing written.");
    return;
  }

  console.log("\n=== WRITING ===");
  for (const p of patches) {
    await client.patch(p.docId).set({ [p.path]: p.value }).commit();
    console.log(`OK patched ${p.label}`);
  }

  console.log("\n=== VERIFY ===");
  for (const lang of ["en", "ru", "pl"]) {
    const doc = await client.getDocument(PARENT_DOC_ID[lang]);
    const faqBlock = doc.contentBlocks.find((b) => b._key === PARENT_FAQ_BLOCK_KEY);
    const item = faqBlock.faq.items.find((i) => i._key === PARENT_ITEM_KEY);
    console.log(`\nparent-${lang} answer texts:`);
    item.answer.forEach((b) => console.log(`  [${b.style}]${b.listItem ? " (bullet)" : ""} "${b.children.map((s) => s.text).join("")}"`));
  }
  for (const lang of ["en", "ru", "pl"]) {
    const doc = await client.getDocument(CHILD_DOC_ID[lang]);
    const faqBlock = doc.contentBlocks.find((b) => b._key === childFaqBlockKeys[lang]);
    const item = faqBlock.faq.items.find((i) => i._key === CHILD_ITEM_KEY);
    console.log(`\nchild-${lang} answer text:`);
    console.log(`  "${item.answer[0].children.map((s) => s.text).join("")}"`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
