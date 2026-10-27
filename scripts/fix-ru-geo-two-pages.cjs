// scripts/fix-ru-geo-two-pages.cjs
//
// Follow-up to apply-ru-seo-headings.cjs (27.10.2026), two RU SEO pages it skipped:
// 1. /ru/seo-dlya-nedvizhimosti-na-kipre — the AI H2 sits inside a doubleTextBlock
//    (rightContent.blockContent.content), so « (GEO, AEO)» is appended there.
// 2. /ru/uslugi/seo-audit-saita — had no AI-search section at all (owner's rule:
//    every SEO page covers AI search). A new H2 section is added at the end of the
//    text block that ends with «Чем настоящий SEO-аудит отличается…».
// Idempotent; aborts on drafts; one transaction.
//
// Usage: node scripts/fix-ru-geo-two-pages.cjs           dry run
//        node scripts/fix-ru-geo-two-pages.cjs --apply   write

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
const blk = (style, text, extra = {}) => ({ _type: "block", _key: key(), style, markDefs: [], children: [{ _type: "span", _key: key(), text, marks: [] }], ...extra });

const CYPRUS = "d0eb4a85-35a0-4738-be86-148e6cbdb398";
const AUDIT = "0ba09f41-cdc6-40b1-8b57-e56ac656e979";

const AUDIT_H2 = "Что SEO-аудит сайта проверяет в ИИ-поиске (GEO, AEO)";
const AUDIT_SECTION = [
  blk("h2", AUDIT_H2),
  blk("normal", "Часть клиентов сегодня сначала спрашивает ChatGPT или Perplexity, а в Google видит ответ ИИ прямо над результатами — AI Overviews. Поэтому в аудит входит отдельная проверка того, как сайт выглядит для ИИ-поиска. Эту работу называют GEO (generative engine optimization) и AEO (answer engine optimization)."),
  blk("normal", "Что я проверяю:"),
  blk("normal", "пускают ли robots.txt, файрвол и CDN роботов ИИ-поиска — OAI-SearchBot (поиск ChatGPT), PerplexityBot и Googlebot;", { listItem: "bullet", level: 1 }),
  blk("normal", "есть ли основной текст, цены и контакты в HTML, который отдаёт сервер: часть ИИ-роботов не выполняет JavaScript и не видит то, что подгружается позже;", { listItem: "bullet", level: 1 }),
  blk("normal", "отвечают ли страницы на вопросы клиентов в первых предложениях раздела, чтобы ИИ было что процитировать;", { listItem: "bullet", level: 1 }),
  blk("normal", "что ChatGPT, Perplexity и AI Overviews отвечают на 5–10 главных вопросов ваших клиентов: называют ли вас, какие сайты цитируют, нет ли в ответах ошибок о компании;", { listItem: "bullet", level: 1 }),
  blk("normal", "совпадают ли название, услуги и цены на сайте, в карточке Google и в каталогах: ИИ собирает ответ из разных источников, и противоречия в них путают модель.", { listItem: "bullet", level: 1 }),
  blk("normal", "Результат — отдельный раздел отчёта: что мешает сайту попадать в ответы ИИ и что исправить в первую очередь."),
];

(async () => {
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: [`drafts.${CYPRUS}`, `drafts.${AUDIT}`] });
  if (drafts.length) { console.log(`Aborting — drafts exist: ${drafts.join(", ")}`); process.exit(1); }
  const [cy, au] = await Promise.all([CYPRUS, AUDIT].map((id) => client.fetch(`*[_id == $id][0]{_id, _rev, contentBlocks}`, { id })));
  const tx = client.transaction();
  let n = 0;

  // 1. Cyprus: H2 inside doubleTextBlock
  let found = null;
  for (const b of cy.contentBlocks || []) for (const side of ["leftContent", "rightContent"]) {
    const c = b[side]?.blockContent?.content || [];
    const h = c.find((x) => x.style === "h2" && /AI-поиск/.test(plain(x)));
    if (h) found = { b, side, h };
  }
  if (!found) console.log("Cyprus: AI H2 not found — skipped");
  else if (/GEO|AEO/.test(plain(found.h))) console.log("Cyprus: already done");
  else {
    const last = found.h.children[found.h.children.length - 1];
    const p = `contentBlocks[_key=="${found.b._key}"].${found.side}.blockContent.content[_key=="${found.h._key}"].children[_key=="${last._key}"].text`;
    console.log(`Cyprus: «${plain(found.h)}» → «${plain(found.h)} (GEO, AEO)»`);
    tx.patch(CYPRUS, (q) => q.ifRevisionId(cy._rev).set({ [p]: `${last.text.replace(/\s+$/, "")} (GEO, AEO)` }));
    n++;
  }

  // 2. Audit: new section at the end of the block with «Чем настоящий SEO-аудит…»
  if (JSON.stringify(au.contentBlocks).includes(AUDIT_H2)) console.log("Audit: section already there");
  else {
    const b = (au.contentBlocks || []).find((x) => (x.content || []).some((y) => y.style === "h2" && /^Чем настоящий SEO-аудит/.test(plain(y))));
    if (!b) console.log("Audit: anchor block not found — skipped");
    else {
      const lastEl = b.content[b.content.length - 1];
      console.log(`Audit: new section after «${plain(lastEl).slice(0, 70)}…»:\n  ${AUDIT_SECTION.map((x) => (x.listItem ? "  - " : "  ") + plain(x)).join("\n  ")}`);
      tx.patch(AUDIT, (q) => q.ifRevisionId(au._rev).insert("after", `contentBlocks[_key=="${b._key}"].content[_key=="${lastEl._key}"]`, AUDIT_SECTION));
      n++;
    }
  }

  if (!n) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${n} page(s), nothing written. Add --apply to write.`);
  await tx.commit();
  console.log("\nWritten. The webhook revalidates both pages.");
})().catch((e) => { console.error(e.message || e); process.exit(1); });
