// Stage 1 (2026-11-27): the agreed service-page design on the EN and RU
// versions of conversion rate optimization, and the band texts on PL.
// Per language: hero phone screen, "what comes back" in the quote card,
// layout "chapters", snippets in their chapters, the short form band,
// H3s / bold terms / ScanM2 link where the text needs them, and removal of
// the closing "what to send me" text (the page ends on the contact form).
// The page text itself is not rewritten. Safe to run twice.
//
//   node scripts/cro-page-i18n.cjs --lang en           dry run
//   node scripts/cro-page-i18n.cjs --lang en --apply   writes to Sanity
//   (same for --lang ru and --lang pl)
const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const APPLY = process.argv.includes("--apply");
const LANG = (process.argv[process.argv.indexOf("--lang") + 1] || "").trim();

const CONFIG = {
  en: {
    slug: "conversion-rate-optimization-services",
    hero: {
      brand: "Your business",
      title: "Leather bags made to order",
      subline: "Made in Kraków · EU-wide delivery",
      call: "Call",
      message: "WhatsApp",
      fields: ["Name", "Phone", "Message"],
      toast: "Request sent",
    },
    returnsIntro: {
      quiz: "Two questions about your site, then your contact details. In reply you get three things:",
      short: "Your name, email and website address. In reply you get three things:",
    },
    returns: [
      ["What I would check first on your site", "GA4 access is not needed for the first reply"],
      ["A fixed price", "CRO audit from 250 €"],
      ["A reply within one business day", "Or write on WhatsApp right away"],
    ],
    snippets: [
      { h2: "Website conversion rate optimization services: what the work includes", kind: "funnel", after: "list" },
      { h2: "Conversion rate optimization companies vs", kind: "codeDiff", after: "firstPara" },
      { h2: "CRO audit: what I check", kind: "auditReport", after: "firstPara" },
      { h2: "CRO for lead-generation websites", kind: "formBeforeAfter", after: "list" },
      { h2: "CRO for local service businesses", kind: "localPhone", after: "firstPara" },
      { h2: "Ecommerce conversion rate optimization services", kind: "checkout", after: "list" },
      { h2: "How conversion rate optimization results are measured", kind: "ga4Events", after: "list" },
    ],
    band: {
      after: "CRO for local service businesses",
      title: "Conversion rate optimization quote: a reply within one business day",
      text: "Send the website address and what counts as a conversion for you. I will reply with what I would check first and a fixed price.",
      facts: ["CRO audit from 250 €", "First call, 15–30 minutes, free"],
    },
    abChapter: null,
    boldTerms: ["session recordings and heatmaps"],
    scanm2: "/portfolio/architecture-website-rebuild-and-seo-scan",
    closing: "Order conversion rate optimization services",
  },
  ru: {
    slug: "optimizaciya-konversii",
    hero: {
      brand: "Ваша компания",
      title: "Кожаные сумки на заказ",
      subline: "Краков · доставка по всему ЕС",
      call: "WhatsApp",
      message: "Telegram",
      fields: ["Имя", "Телефон", "Сообщение"],
      toast: "Заявка отправлена",
    },
    returnsIntro: {
      quiz: "Два вопроса о сайте, потом контакты. В ответ вы получите три вещи:",
      short: "Имя, email и адрес сайта. В ответ вы получите три вещи:",
    },
    returns: [
      ["С чего начал бы на вашем сайте", "Доступ к GA4 для первого ответа не нужен"],
      ["Фиксированная цена", "Аудит конверсии от 250 €"],
      ["Ответ в течение рабочего дня", "Или сразу напишите в WhatsApp"],
    ],
    snippets: [
      { h2: "Оптимизацию конверсии сайта: состав работы", kind: "funnel", after: "list" },
      { h2: "Аудит конверсии: что я проверяю", kind: "auditReport", after: "firstPara" },
      { h2: "CRO-специалист, который сам вносит правки", kind: "codeDiff", after: "firstPara" },
      { h2: "Повышение конверсии сайта услуг", kind: "formBeforeAfter", after: "list" },
      { h2: "Заявки в WhatsApp и Telegram", kind: "localPhone", after: "firstPara" },
      { h2: "Оптимизация конверсии интернет-магазина", kind: "checkout", after: "list" },
      { h2: "Как измеряется результат оптимизации конверсии", kind: "ga4Events", after: "list" },
    ],
    band: {
      after: "Заявки в WhatsApp и Telegram",
      title: "Расчёт оптимизации конверсии: ответ в течение рабочего дня",
      text: "Пришлите адрес сайта и что для вас считается конверсией. Напишу, с чего начал бы, и назову фиксированную цену.",
      facts: ["Аудит конверсии от 250 €", "Первый созвон на 15–30 минут бесплатно"],
    },
    abChapter: { h2: "A/B-тесты или замер до и после", h3: ["A/B-тест при большом трафике", "Замер до и после на небольших сайтах"] },
    boldTerms: ["записи сессий и тепловые карты", "формы и кнопки связи"],
    scanm2: "/ru/portfolio/sozdanie-i-seo-prodvizhenie-saita-arkhitekturnoi-tematiki",
    closing: "Заказать оптимизацию конверсии сайта",
  },
  pl: {
    slug: "optymalizacja-konwersji",
    // Everything else on PL is already in place (cro-page-chapters.cjs,
    // cro-page-form-band.cjs); only the band texts move into the snippet,
    // because the component's defaults became general.
    band: {
      after: "Optymalizacja konwersji dla firm lokalnych",
      title: "Wycena optymalizacji konwersji: odpowiedź w jeden dzień roboczy",
      text: "Napiszcie adres strony i co jest dla Was konwersją. Odpiszę, od czego zacząłbym, i podam stałą cenę.",
      facts: ["Audyt konwersji od 1000 zł", "Pierwsza rozmowa, 15–30 minut, bezpłatnie"],
    },
    snippets: [],
    boldTerms: [],
  },
};

const cfg = CONFIG[LANG];
if (!cfg) {
  console.error("Use --lang en, --lang ru or --lang pl");
  process.exit(1);
}

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

function armFor(pageKey) {
  let h = 5381;
  for (let i = 0; i < pageKey.length; i++) h = ((h << 5) + h + pageKey.charCodeAt(i)) | 0;
  return Math.abs(h) % 2 === 0 ? "short" : "quiz";
}

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
    { lang: LANG, slug: cfg.slug },
  );
  if (!doc) throw new Error(`No published page ${LANG}/${cfg.slug}`);
  const draft = await client.fetch(`*[_id == $id][0]{_id}`, { id: `drafts.${doc._id}` });
  if (draft) {
    console.log(`A draft exists (${draft._id}). Publish or discard it in Studio first, then run again.`);
    process.exit(1);
  }
  console.log(`Page: ${doc._id} — ${doc.title}\n`);

  const set = {};
  const unset = [];
  const log = [];
  const blocks = doc.contentBlocks || [];

  // ── Hero ──
  if (cfg.hero && doc.heroVisual !== "screen") {
    set.heroVisual = "screen";
    set.heroScreen = cfg.hero;
    log.push(`hero: phone with a real first screen; labels stay: ${(doc.heroPhonePoints || []).join(" / ")}`);
  }

  // ── Quote card ──
  const quote = blocks.find((b) => b._type === "quoteFormBlock");
  if (cfg.returns && quote && !(quote.returns || []).length) {
    const variant = !quote.formVariant || quote.formVariant === "auto" ? armFor(doc._id) : quote.formVariant;
    const intro = cfg.returnsIntro[variant];
    set[`contentBlocks[_key=="${quote._key}"].returnsIntro`] = intro;
    set[`contentBlocks[_key=="${quote._key}"].returns`] = cfg.returns.map(([title, note]) => ({ _key: key(), _type: "quoteReturn", title, note }));
    log.push(`quote card (${variant} form): “${intro}” + ${cfg.returns.length} items`);
  }

  // ── Long text ──
  const firstH2 = cfg.snippets[0]?.h2 || cfg.band.after;
  const tc = blocks.find((b) => b._type === "textContent" && (b.content || []).some((x) => isH2(x) && text(x).startsWith(firstH2)));
  if (!tc) throw new Error(`Long text block not found (H2 “${firstH2}…”)`);
  const content = JSON.parse(JSON.stringify(tc.content));
  let changed = false;

  if (tc.layout !== "chapters") {
    set[`contentBlocks[_key=="${tc._key}"].layout`] = "chapters";
    log.push("long text: layout chapters");
  }
  console.log("Chapters found:");
  content.filter(isH2).forEach((h) => console.log(`  · ${text(h)}`));
  console.log("");

  for (const s of cfg.snippets) {
    if (content.some((b) => b._type === "pageSnippet" && b.kind === s.kind)) continue;
    const r = chapterRange(content, s.h2);
    if (!r) {
      log.push(`  ! chapter not found for ${s.kind}: “${s.h2}…” — skipped`);
      continue;
    }
    let at = -1;
    if (s.after === "list") {
      const items = content.slice(r.start, r.end).map((b, i) => (isListItem(b) ? r.start + i : -1)).filter((i) => i >= 0);
      if (items.length) at = items[items.length - 1] + 1;
    }
    if (at < 0) {
      const firstPara = content.findIndex((b, i) => i > r.start && i < r.end && isPara(b));
      at = firstPara >= 0 ? firstPara + 1 : r.end;
    }
    content.splice(at, 0, { _key: key(), _type: "pageSnippet", kind: s.kind });
    changed = true;
    log.push(`  + snippet ${s.kind.padEnd(16)} in “${s.h2}…”`);
  }

  // Short form band: insert at the end of its chapter, or fill the texts of the one already there
  {
    const existing = content.find((b) => b._type === "pageSnippet" && b.kind === "shortForm");
    if (existing) {
      if (existing.title !== cfg.band.title) {
        existing.title = cfg.band.title;
        existing.text = cfg.band.text;
        existing.facts = cfg.band.facts;
        changed = true;
        log.push(`  ~ form band texts: “${cfg.band.title}”`);
      }
    } else {
      const r = chapterRange(content, cfg.band.after);
      if (!r) log.push(`  ! chapter not found for the form band: “${cfg.band.after}…”`);
      else {
        content.splice(r.end, 0, { _key: key(), _type: "pageSnippet", kind: "shortForm", title: cfg.band.title, text: cfg.band.text, facts: cfg.band.facts });
        changed = true;
        log.push(`  + form band after “${cfg.band.after}…”: “${cfg.band.title}”`);
      }
    }
  }

  if (cfg.abChapter) {
    const r = chapterRange(content, cfg.abChapter.h2);
    if (r && !content.slice(r.start, r.end).some((b) => b.style === "h3")) {
      const paras = content.map((b, i) => (i > r.start && i < r.end && isPara(b) ? i : -1)).filter((i) => i >= 0);
      if (paras.length >= 2) {
        const h3 = (t) => ({ _key: key(), _type: "block", style: "h3", markDefs: [], children: [{ _key: key(), _type: "span", marks: [], text: t }] });
        content.splice(paras[1], 0, h3(cfg.abChapter.h3[1]));
        content.splice(paras[0], 0, h3(cfg.abChapter.h3[0]));
        changed = true;
        log.push(`  + H3 “${cfg.abChapter.h3[0]}” and “${cfg.abChapter.h3[1]}”`);
      }
    }
  }

  for (const term of cfg.boldTerms) {
    const b = content.find((x) => isListItem(x) && text(x).startsWith(term));
    if (!b) {
      log.push(`  ! list item not found for bold term “${term}”`);
      continue;
    }
    const first = b.children[0];
    if ((first.marks || []).includes("strong") || !first.text.startsWith(term)) continue;
    const label = term.charAt(0).toUpperCase() + term.slice(1);
    b.children = [{ ...first, _key: key(), text: label, marks: [...(first.marks || []), "strong"] }, { ...first, text: first.text.slice(term.length) }, ...b.children.slice(1)];
    changed = true;
    log.push(`  + bold term “${label}”`);
  }

  if (cfg.scanm2) {
    const b = content.find((x) => isPara(x) && text(x).startsWith("ScanM2"));
    if (b && !(b.markDefs || []).some((m) => m._type === "link")) {
      const first = b.children[0];
      if (first && first.text.startsWith("ScanM2")) {
        const linkKey = key();
        b.markDefs = [...(b.markDefs || []), { _key: linkKey, _type: "link", href: cfg.scanm2 }];
        b.children = [{ ...first, _key: key(), text: "ScanM2", marks: [...(first.marks || []), linkKey] }, { ...first, text: first.text.slice(6) }, ...b.children.slice(1)];
        changed = true;
        log.push(`  + link ScanM2 → ${cfg.scanm2}`);
      }
    }
  }

  // Closing "what to send me": a block of its own is removed; inside the long text, its chapter is cut
  if (cfg.closing) {
    const own = blocks.find((b) => b !== tc && b._type === "textContent" && (b.content || []).some((x) => isH2(x) && text(x).startsWith(cfg.closing)));
    if (own) {
      if ((own.content || []).filter(isH2).length > 1) throw new Error("The closing block holds more than one H2 — not removing it blindly.");
      unset.push(`contentBlocks[_key=="${own._key}"]`);
      log.push(`- remove text block “${cfg.closing}…”`);
    } else {
      const r = chapterRange(content, cfg.closing);
      if (r) {
        content.splice(r.start, r.end - r.start);
        changed = true;
        log.push(`- remove chapter “${cfg.closing}…” from the long text`);
      }
    }
  }

  if (changed) set[`contentBlocks[_key=="${tc._key}"].content`] = content;

  if (!Object.keys(set).length && !unset.length) {
    console.log("Nothing to do: everything is already in place.");
    return;
  }
  console.log(log.join("\n"));
  if (!APPLY) {
    console.log("\nDry run. Run with --apply to write.");
    return;
  }
  let p = client.patch(doc._id);
  if (Object.keys(set).length) p = p.set(set);
  if (unset.length) p = p.unset(unset);
  await p.commit();
  console.log("\nWritten.");
})().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
