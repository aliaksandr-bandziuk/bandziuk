// scripts/apply-about-rewrite.cjs
//
// Переписывает страницу /about на трёх языках так, чтобы владелец был описан
// прежде всего как SEO-специалист. Тексты и основание — в
// drafts/about-rewrite-2026-09.json. Порядок и состав блоков не меняются:
// правятся только тексты, H1, мета-теги, alt фотографии и иконки карточек.
//
//   node scripts/apply-about-rewrite.cjs          → сухой прогон
//   node scripts/apply-about-rewrite.cjs --apply  → записывает
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const DATA = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../drafts/about-rewrite-2026-09.json"), "utf8"));
const KEYS = { intro: "9c2b46736147", who: "3c0fd0556dae", grid: "d68d6dcd92b2", whyTitle: "ae3e5387a260", whyItems: "571a4e1d94a2", faq: "3aa6dc3a4596" };

const key = () => crypto.randomBytes(6).toString("hex");

// "текст [[анкор|/ссылка]] текст" → PortableText-блок со ссылками.
function block(text, style = "normal", extra = {}) {
  const children = [];
  const markDefs = [];
  const re = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) children.push({ _key: key(), _type: "span", marks: [], text: text.slice(last, m.index) });
    const mk = key();
    markDefs.push({ _key: mk, _type: "link", href: m[2] });
    children.push({ _key: key(), _type: "span", marks: [mk], text: m[1] });
    last = re.lastIndex;
  }
  if (last < text.length || !children.length) children.push({ _key: key(), _type: "span", marks: [], text: text.slice(last) });
  return { _key: key(), _type: "block", style, markDefs, children, ...extra };
}
const blank = () => block("");
const bullet = (text) => block(text, "normal", { listItem: "bullet", level: 1 });
// Пустые абзацы между блоками — так эти doubleTextBlock свёрстаны на всех языках.
const spaced = (blocks) => blocks.flatMap((b, i) => (i ? [blank(), b] : [b]));

const plain = (blocks) => (blocks || []).filter((b) => b._type === "block").map((b) => b.children.map((c) => c.text).join("")).join(" ");

function build(lang, doc) {
  const L = DATA.locales[lang];
  const blocks = doc.contentBlocks.map((b) => ({ ...b }));
  const at = (k) => {
    const i = blocks.findIndex((b) => b._key === k);
    if (i === -1) throw new Error(`${lang}: нет блока ${k}`);
    return i;
  };
  const report = [];

  // Вступление
  blocks[at(KEYS.intro)] = { ...blocks[at(KEYS.intro)], content: spaced(L.intro.map((p) => block(p))) };

  // «Кто я»: текст слева, фото справа (меняется только alt)
  const who = blocks[at(KEYS.who)];
  const whoContent = [
    block(L.who.h2, "h2"),
    ...(L.who.h3 ? [blank(), block(L.who.h3, "h3")] : []),
    blank(),
    ...spaced(L.who.before.map((p) => block(p))),
    blank(),
    ...L.who.bullets.map(bullet),
    blank(),
    ...spaced(L.who.after.map((p) => block(p))),
  ];
  blocks[at(KEYS.who)] = {
    ...who,
    leftContent: { ...who.leftContent, blockContent: { ...who.leftContent.blockContent, content: whoContent } },
    rightContent: { ...who.rightContent, image: { ...who.rightContent.image, alt: L.imageAlt } },
  };

  // Карточки направлений: иконка рисуется по iconName, картинка — запасная
  const grid = blocks[at(KEYS.grid)];
  const oldByIcon = Object.fromEntries(grid.items.map((it) => [it.iconName, it]));
  const fallback = grid.items[0];
  blocks[at(KEYS.grid)] = {
    ...grid,
    title: L.grid.title,
    items: L.grid.items.map(([iconName, title, description]) => {
      const donor = oldByIcon[iconName] || fallback;
      return { _key: donor === fallback && iconName !== fallback.iconName ? key() : donor._key, iconName, title, description, icon: { ...donor.icon, alt: title } };
    }),
  };
  const gridKeys = blocks[at(KEYS.grid)].items.map((i) => i._key);
  if (new Set(gridKeys).size !== gridKeys.length) throw new Error(`${lang}: повтор ключей в карточках`);

  // «Почему выбирают меня»
  const whyText = blocks[at(KEYS.whyTitle)];
  if (L.whyParagraphs) {
    // PL: заголовок, список абзацами и заголовок «Jak pracuję» живут в одном блоке
    blocks[at(KEYS.whyTitle)] = {
      ...whyText,
      content: [block(L.whyTitle, "h2"), blank(), ...L.whyParagraphs.map((p) => block(p)), blank(), block(L.howTitle, "h2")],
    };
  } else {
    blocks[at(KEYS.whyTitle)] = { ...whyText, content: [block(L.whyTitle, "h2")] };
    const why = blocks[at(KEYS.whyItems)];
    const column = (items) => items.flatMap(([h, p], i) => [...(i ? [blank()] : []), block(h, "h3"), blank(), block(p)]);
    blocks[at(KEYS.whyItems)] = {
      ...why,
      leftContent: { ...why.leftContent, blockContent: { ...why.leftContent.blockContent, content: column(L.whyItems.slice(0, 3)) } },
      rightContent: { ...why.rightContent, blockContent: { ...why.rightContent.blockContent, content: column(L.whyItems.slice(3)) } },
    };
  }

  // FAQ: вопросы со ссылкой на цены сохраняются как были
  const faqBlock = blocks[at(KEYS.faq)];
  const oldItems = faqBlock.faq.items;
  const used = new Set();
  const items = L.faq.map((f) => {
    if (f.keep) {
      const old = oldItems.find((i) => i.question === f.keep);
      if (!old) throw new Error(`${lang}: не найден вопрос «${f.keep}»`);
      used.add(old._key);
      return { ...old, ...(f.q ? { question: f.q } : {}), ...(f.a ? { answer: [block(f.a)] } : {}) };
    }
    return { _key: key(), question: f.q, answer: [block(f.a)] };
  });
  const dropped = oldItems.filter((i) => !used.has(i._key)).map((i) => i.question);
  blocks[at(KEYS.faq)] = { ...faqBlock, faq: { ...faqBlock.faq, items } };

  report.push(`  H1: ${L.heading}`);
  report.push(`  title (${L.metaTitle.length}): ${L.metaTitle}`);
  report.push(`  description: ${L.metaDescription.length} знаков`);
  report.push(`  вступление: ${plain(blocks[at(KEYS.intro)].content).slice(0, 110)}…`);
  report.push(`  карточки: ${L.grid.items.map((i) => `${i[1]} [${i[0]}]`).join(" | ")}`);
  report.push(`  FAQ: ${items.length} вопросов, новые: ${L.faq.filter((f) => !f.keep).length}; убраны: ${dropped.join(" | ") || "—"}`);
  const links = blocks.flatMap((b) => JSON.stringify(b).match(/"href":"[^"]+"/g) || []);
  report.push(`  ссылок в блоках: ${links.length}`);

  if (L.metaTitle.length > 60) throw new Error(`${lang}: title длиннее 60`);
  if (L.metaDescription.length > 160) throw new Error(`${lang}: description длиннее 160`);

  return {
    set: {
      heading: L.heading,
      excerpt: L.excerpt,
      "seo.metaTitle": L.metaTitle,
      "seo.metaDescription": L.metaDescription,
      contentBlocks: blocks,
    },
    report,
    hrefs: [...new Set(links.map((l) => l.slice(8, -1)))],
  };
}

async function main() {
  const base = process.env.BASE || "http://localhost:3000";
  const results = {};
  for (const [lang, id] of Object.entries(DATA.docs)) {
    const doc = await client.getDocument(id);
    if (!doc) throw new Error(`нет документа ${id}`);
    results[lang] = { id, ...build(lang, doc) };
    console.log(`\n[${lang}] ${id}\n${results[lang].report.join("\n")}`);
  }

  const hrefs = [...new Set(Object.values(results).flatMap((r) => r.hrefs))].filter((h) => h.startsWith("/"));
  let bad = 0;
  for (const h of hrefs) {
    const r = await fetch(base + h, { redirect: "manual" });
    if (r.status !== 200) { console.log(`! ссылка отвечает ${r.status}: ${h}`); bad++; }
  }
  console.log(`\nвнутренних ссылок проверено: ${hrefs.length}, с ошибкой: ${bad}`);
  if (bad) throw new Error("есть битые ссылки — ничего не записано");

  if (!APPLY) { console.log("\nСухой прогон: ничего не записано. Запустите с --apply."); return; }
  let tx = client.transaction();
  for (const r of Object.values(results)) tx = tx.patch(r.id, (p) => p.set(r.set));
  await tx.commit();
  console.log("\nзаписано: 3 документа");
}

main().catch((e) => { console.error("failed:", e.message); process.exit(1); });
