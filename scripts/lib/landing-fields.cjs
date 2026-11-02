// scripts/lib/landing-fields.cjs
//
// Общая часть для replace-landing.cjs (перезапись существующей страницы) и
// create-landing.cjs (создание новой). Вынесено 02.11.2026: до этого маппинг
// фикстуры в поля документа жил только в replace-landing.cjs, и создание
// новых страниц потребовало бы его копии. Копия маппинга — это гарантированное
// расхождение двух инструментов через месяц, поэтому источник один.
//
// buildFields превращает фикстуру в поля документа Sanity:
//   portfolioPickBlock — слаги проектов заменяются ссылками на документы;
//   quoteFormBlock     — подставляется ссылка на документ формы нужного языка;
//   остальные блоки    — как есть.
//
// check возвращает список ошибок, а не бросает: вызывающий сам решает,
// печатать их все сразу или падать на первой.

function buildFields(fx, { projectIds, formId }) {
  const contentBlocks = fx.contentBlocks.map((b) => {
    if (b._type === "portfolioPickBlock") {
      const { picks, ...rest } = b;
      return { ...rest, items: picks.map((slug, i) => ({ _type: "reference", _key: `pick${i + 1}`, _ref: projectIds[slug] })) };
    }
    if (b._type === "quoteFormBlock") return { ...b, form: { _type: "reference", _ref: formId } };
    return b;
  });
  return {
    title: fx.title,
    heading: fx.heading,
    excerpt: fx.excerpt,
    "seo.metaTitle": fx.seo.metaTitle,
    "seo.metaDescription": fx.seo.metaDescription,
    heroLayout: fx.heroLayout,
    heroChips: fx.heroChips,
    heroPhonePoints: fx.heroPhonePoints,
    ...(fx.heroVisual ? { heroVisual: fx.heroVisual } : {}),
    ...(fx.heroPhoto ? { heroPhoto: fx.heroPhoto } : {}),
    stickyCta: fx.stickyCta,
    ...(fx.offers?.length ? { offers: fx.offers } : {}),
    contentBlocks,
  };
}

function check(lang, f) {
  const errors = [];
  if (f["seo.metaTitle"].length > 60) errors.push(`metaTitle ${f["seo.metaTitle"].length} chars`);
  if (f["seo.metaDescription"].length > 160) errors.push(`metaDescription ${f["seo.metaDescription"].length} chars`);
  // Метатайтл, равный H1, — отдельная ошибка: 17 таких страниц правились
  // вручную 01.11.2026 (claude/headings-audit.md), больше их заводить не надо.
  if (f["seo.metaTitle"].trim() === String(f.heading || "").trim()) errors.push("metaTitle equals H1");
  if (f["seo.metaTitle"].trim() === String(f.title || "").trim()) errors.push("metaTitle equals title");
  const keys = new Set();
  JSON.stringify(f, (k, v) => { if (k === "_key") { if (keys.has(v)) errors.push(`duplicate _key ${v}`); keys.add(v); } return v; });
  for (const b of f.contentBlocks) {
    if (b._type === "portfolioPickBlock" && b.items.some((r) => !r._ref)) errors.push("unresolved portfolio pick");
    if (b._type === "quoteFormBlock" && !b.form._ref) errors.push("quote form texts not found");
  }
  return errors.map((e) => `${lang}: ${e}`);
}

const blockList = (blocks) => (blocks || []).map((b) => b._type + (b.layout ? `:${b.layout}` : "")).join(" → ");

module.exports = { buildFields, check, blockList };
