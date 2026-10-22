// scripts/fixture-to-md.cjs
//
// Renders a landing-page fixture (src/dev-fixtures/<name>.ts) as a readable
// Markdown draft, so the text the owner reviews is exactly the text the
// localhost preview shows and the create script writes.
//
// Usage: node scripts/fixture-to-md.cjs restaurant-seo.en [drafts/pseo/restaurant-seo-EN.md]

const fs = require("fs");
const path = require("path");
const { createJiti } = require("jiti");

const name = process.argv[2];
if (!name) throw new Error("Usage: node scripts/fixture-to-md.cjs <fixture-file-without-.ts> [out.md]");
const mod = createJiti(__filename)(path.resolve(__dirname, `../src/dev-fixtures/${name}.ts`));
const fx = Object.values(mod).find((v) => v && v.contentBlocks);

const text = (b) => (b.children || []).map((c) => {
  const def = (b.markDefs || []).find((m) => c.marks?.includes(m._key));
  return def ? `[${c.text}](${def.href})` : c.text;
}).join("");

const pt = (blocks) => {
  const out = [];
  let n = 0;
  for (const b of blocks) {
    if (b.style === "h2") { out.push("", `### ${text(b)}`, ""); n = 0; continue; }
    if (b.style === "h3") { out.push("", `#### ${text(b)}`, ""); continue; }
    if (b.listItem === "bullet") { out.push(`- ${text(b)}`); continue; }
    if (b.listItem === "number") { out.push(`${++n}. ${text(b)}`); continue; }
    out.push("", text(b), "");
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
};

const L = [];
L.push(`# ${fx.title} — ${fx.lang.toUpperCase()}, landing format A`, "");
L.push(`URL: /${fx.lang === "en" ? "" : fx.lang + "/"}${fx.slug}`);
L.push(`Meta title (${fx.seo.metaTitle.length}): ${fx.seo.metaTitle}`);
L.push(`Meta description (${fx.seo.metaDescription.length}): ${fx.seo.metaDescription}`);
if (fx.offers) L.push(`Offer markup: ${fx.offers.map((o) => `${o.name} — ${o.price}${o.maxPrice ? "–" + o.maxPrice : "+"} ${o.currency}${o.unit === "month" ? "/month" : ""}`).join("; ")}`);
L.push("", "---", "", "## 1. Hero", "", `H1: ${fx.heading}`, "", `Text under H1: ${fx.excerpt}`, "");
L.push("Chips:", ...fx.heroChips.map((c) => `- ${c}`), "", "Phone sketch labels (desktop):", ...fx.heroPhonePoints.map((c, i) => `0${i + 1} ${c}`));

let i = 1;
for (const b of fx.contentBlocks) {
  i++;
  L.push("", "---", "");
  if (b._type === "offerListBlock") {
    L.push(`## ${i}. What you get (offerListBlock)`, "", `Eyebrow: ${b.eyebrow}`, `H2: ${b.title}`, "");
    L.push(...b.items.map((x) => `- ${x.iconName} — ${x.title} — ${x.text}`), "", "Price cards:");
    L.push(...b.prices.map((x) => `- ${x.label} — ${x.value} — ${x.note}${x.highlight ? " (highlighted)" : ""}`));
  } else if (b._type === "portfolioPickBlock") {
    L.push(`## ${i}. Portfolio (portfolioPickBlock)`, "", `Eyebrow: ${b.eyebrow}`, `H2: ${b.title}`, `Subtitle: ${b.subtitle}`, "", "Projects (tags come from each case):");
    L.push(...b.picks.map((s, j) => `${j + 1}. ${s}`));
  } else if (b._type === "quoteFormBlock") {
    L.push(`## ${i}. Quote form (quoteFormBlock, A/B: ${b.formVariant})`, "", `H2: ${b.title}`, `Text under H2: ${b.subtitle}`, "");
    L.push(`Third field: ${b.contextLabel} (placeholder: ${b.contextPlaceholder})`, `Button: ${b.buttonText}`, `Note: ${b.note}`, "", "Quiz step 1:");
    L.push(...(b.quizQuestions || []).map((q) => `- ${q.question} — ${q.options.join(" · ")}`));
  } else if (b._type === "textContent") {
    L.push(`## ${i}. ${b.layout === "guide" ? "Guide (textContent, layout Guide)" : "Text (textContent)"}`, "", pt(b.content));
  } else if (b._type === "faqBlock") {
    L.push(`## ${i}. FAQ (faqBlock, questions render as H3)`, "", `H2: ${b.title}`, "");
    for (const q of b.faq.items) L.push(`**${q.question}**`, pt(q.answer), "");
  } else {
    L.push(`## ${i}. ${b._type}`);
  }
}

const md = L.join("\n").replace(/\n{3,}/g, "\n\n") + "\n";
const out = process.argv[3];
if (out) { fs.writeFileSync(path.resolve(__dirname, "..", out), md); console.log(`Written ${out}`); }
else process.stdout.write(md);
