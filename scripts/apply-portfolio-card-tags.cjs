// scripts/apply-portfolio-card-tags.cjs
//
// Fills the `cardTags` field on all 18 portfolio cases (EN, PL, RU) — the tags
// shown on their cards on landing pages, the homepage and /portfolio. Cases
// whose tags already match are skipped, so a rerun does not move their lastmod. Every tag
// restates a figure or fact from the case's own Results section; the first
// tag is the highlighted one, so it carries a number where the case has one.
//
// The PL and RU documents are found through translation.metadata of the EN
// document, not by guessing their slugs.
//
//   node scripts/apply-portfolio-card-tags.cjs          → dry run: current → new
//   node scripts/apply-portfolio-card-tags.cjs --apply  → writes
const path = require("path");
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

// EN slug → tags per language. Source line from the case in the comment.
const TAGS = {
  // "Performance 96, Accessibility 98, Best Practices 100, SEO 100"; "Design system built from scratch"; bilingual
  "renovation-and-investment-website-with-premium-design": {
    en: ["96/98/100/100", "Design system", "2 languages"],
    pl: ["96/98/100/100", "System projektowy", "2 języki"],
    ru: ["96/98/100/100", "Дизайн-система", "2 языка"],
  },
  // "All 468 blog posts migrated, 468 of 468"; bilingual; "New pages already appear in ChatGPT answers"
  "psychotherapist-website-milan": {
    en: ["468 of 468 posts moved", "2 languages", "Seen in ChatGPT answers"],
    pl: ["468 z 468 wpisów przeniesionych", "2 języki", "Widoczna w ChatGPT"],
    ru: ["468 из 468 статей перенесены", "2 языка", "Видна в ответах ChatGPT"],
  },
  // "Page loads in under one second worldwide"; "Direct booking form for collaborations and events"; "videos, tracks"
  "official-website-for-dj-and-producer-sasha-dith": {
    en: ["Loads in under 1 s", "Booking form", "Video and music"],
    pl: ["Ładuje się poniżej 1 s", "Formularz rezerwacji", "Wideo i muzyka"],
    ru: ["Загрузка менее 1 с", "Форма бронирования", "Видео и музыка"],
  },
  // "Organic traffic grew 29×"; "Site loading time reduced to under 1 second"; "Top-3 in Poland"
  "architecture-website-rebuild-and-seo-scan": {
    en: ["29× organic traffic", "Loads in under 1 s", "Top 3 in Poland"],
    pl: ["29× ruchu organicznego", "Ładuje się poniżej 1 s", "Top 3 w Polsce"],
    ru: ["29× органического трафика", "Загрузка менее 1 с", "Топ-3 в Польше"],
  },
  // "PageSpeed on mobile: 100 performance, 95 accessibility, 100 best practices, 100 SEO"; trilingual; client edits
  "tyre-storage-landing-page-with-editable-seo": {
    en: ["100/95/100/100", "3 languages", "Client edits it"],
    pl: ["100/95/100/100", "3 języki", "Klient edytuje sam"],
    ru: ["100/95/100/100", "3 языка", "Клиент редактирует сам"],
  },

  // --- the other 13 cases (2026-10-22), each line again from the case's Results ---
  // "automated spam submissions were reduced by approximately 98%"; "no CAPTCHA"; server-side validation
  "anti-spam-protection-for-website-forms": {
    en: ["−98% spam", "No CAPTCHA", "Server-side"],
    pl: ["−98% spamu", "Bez CAPTCHA", "Po stronie serwera"],
    ru: ["−98% спама", "Без CAPTCHA", "На стороне сервера"],
  },
  // "Performance 90+"; "Organic traffic grew by ~10%"; "Form submissions finally started coming in"
  "auto-repair-seo-and-ux-boost": {
    en: ["Performance 90+", "+10% organic traffic", "Leads from forms"],
    pl: ["Performance 90+", "+10% ruchu organicznego", "Zapytania z formularzy"],
    ru: ["Performance 90+", "+10% органического трафика", "Заявки с форм"],
  },
  // "Content management became 16× faster"; traffic "from ... ChatGPT"; "lead flow through forms and WhatsApp"
  "build-and-optimize-a-multilingual-real-estate-platform": {
    en: ["16× faster editing", "Traffic from ChatGPT", "Leads via WhatsApp"],
    pl: ["16× szybsza edycja", "Ruch z ChatGPT", "Zapytania przez WhatsApp"],
    ru: ["Правки в 16 раз быстрее", "Трафик из ChatGPT", "Заявки через WhatsApp"],
  },
  // "PageSpeed Insights, mobile: 100 for performance, accessibility, best practices and SEO"; "153 pages"; three languages
  "consultant-website-design-retail-analytics": {
    en: ["100/100/100/100", "153 pages", "3 languages"],
    pl: ["100/100/100/100", "153 strony", "3 języki"],
    ru: ["100/100/100/100", "153 страницы", "3 языка"],
  },
  // "Content management became ×10 faster"; traffic "from ... ChatGPT"; "the main channel for ... acquiring new clients"
  "develop-and-optimize-a-personal-website-with-seo": {
    en: ["10× faster editing", "Traffic from ChatGPT", "Main lead channel"],
    pl: ["10× szybsza edycja", "Ruch z ChatGPT", "Główny kanał klientów"],
    ru: ["Правки в 10 раз быстрее", "Трафик из ChatGPT", "Главный канал клиентов"],
  },
  // "100+ course sales"; "0 cases of unauthorized content distribution"; "link expires after 14 days"
  "e-commerce-landing-page-with-secured-video-access": {
    en: ["100+ course sales", "0 leaks", "Links expire in 14 days"],
    pl: ["100+ sprzedanych kursów", "0 wycieków", "Link wygasa po 14 dniach"],
    ru: ["100+ продаж курса", "0 утечек", "Ссылка живёт 14 дней"],
  },
  // "Performance 92, Accessibility 91, Best Practices 96, SEO 100"; "photo-based quote form"; "LocalBusiness structured data"
  "felgilab-wordpress-rebuild": {
    en: ["92/91/96/100", "Photo quote form", "LocalBusiness markup"],
    pl: ["92/91/96/100", "Wycena po zdjęciach", "Dane LocalBusiness"],
    ru: ["92/91/96/100", "Оценка по фото", "Разметка LocalBusiness"],
  },
  // "+5930 clicks and over 359,000 impressions in Google Search within 6 months"; "team now fully manages the site"
  "full-multilingual-website-development-and-seo-for-student-services": {
    en: ["+5,930 clicks in 6 months", "359k impressions", "Team edits it"],
    pl: ["+5930 kliknięć w 6 miesięcy", "359 tys. wyświetleń", "Zespół edytuje sam"],
    ru: ["+5930 кликов за 6 месяцев", "359 тыс. показов", "Команда редактирует сама"],
  },
  // "Page load time under 1 second worldwide"; "AI onboarding system"; "Interactive investment calculator"
  "investment-platform-with-ai-guided-learning": {
    en: ["Loads in under 1 s", "AI onboarding", "Investment calculator"],
    pl: ["Ładuje się poniżej 1 s", "Onboarding z AI", "Kalkulator inwestycji"],
    ru: ["Загрузка менее 1 с", "AI-онбординг", "Инвестиционный калькулятор"],
  },
  // "100% pixel precision compared to Figma"; "Real-time status indicator"; "update the site without code"
  "proscore-agency-website-development": {
    en: ["100% match to Figma", "Live status indicator", "No-code editing"],
    pl: ["100% zgodności z Figmą", "Status na żywo", "Edycja bez kodu"],
    ru: ["100% совпадение с Figma", "Индикатор статуса", "Правки без кода"],
  },
  // "PageSpeed ... 95 performance, 97 accessibility, 100 best practices, 100 SEO"; "first substantive visit came from ChatGPT"; five jurisdictions
  "residency-by-investment-guide-with-sourced-figures": {
    en: ["95/97/100/100", "Visit from ChatGPT", "5 jurisdictions"],
    pl: ["95/97/100/100", "Wizyta z ChatGPT", "5 jurysdykcji"],
    ru: ["95/97/100/100", "Визит из ChatGPT", "5 юрисдикций"],
  },
  // "One country became ten: 180 new pages"; "performance 61 → 91"
  "seo-case-study-education-agency": {
    en: ["1 → 10 countries", "180 new pages", "Performance 61 → 91"],
    pl: ["1 → 10 krajów", "180 nowych stron", "Performance 61 → 91"],
    ru: ["1 → 10 стран", "180 новых страниц", "Performance 61 → 91"],
  },
  // no figures in the case: "coverage map on Leaflet.js"; "tariff logic per zone"; "schema.org markup"
  "web-development-a-website-for-internet-prowider": {
    en: ["Coverage map", "Tariffs by zone", "Schema.org markup"],
    pl: ["Mapa zasięgu", "Taryfy według stref", "Znaczniki schema.org"],
    ru: ["Карта покрытия", "Тарифы по зонам", "Разметка schema.org"],
  },
};

async function main() {
  let changes = 0;
  const tx = client.transaction();
  for (const [slug, byLang] of Object.entries(TAGS)) {
    const en = await client.fetch(
      `*[_type == "portfolio" && language == "en" && slug.en.current == $slug && !(_id in path("drafts.**"))][0]{ _id, title }`,
      { slug },
    );
    if (!en) { console.log(`✗ ${slug}: EN case not found`); continue; }
    const docs = await client.fetch(
      `*[_type == "translation.metadata" && references($id)][0].translations[].value->{ _id, _rev, language, title, cardTags }`,
      { id: en._id },
    );
    const all = docs && docs.length ? docs : [await client.fetch(`*[_id == $id][0]{ _id, _rev, language, title, cardTags }`, { id: en._id })];
    console.log(`\n━━ ${slug}`);
    for (const lang of ["en", "pl", "ru"]) {
      const doc = all.find((d) => d && d.language === lang);
      if (!doc) { console.log(`   ${lang}: ✗ no ${lang} document`); continue; }
      const now = (doc.cardTags || []).join(" · ") || "(empty)";
      const next = byLang[lang];
      if (JSON.stringify(doc.cardTags || []) === JSON.stringify(next)) {
        console.log(`   ${lang}: already set — skipped`);
        continue;
      }
      console.log(`   ${lang}: «${doc.title}»\n       now: ${now}\n       new: ${next.join(" · ")}`);
      tx.patch(doc._id, (p) => p.ifRevisionId(doc._rev).set({ cardTags: next }));
      changes++;
    }
  }
  console.log(`\n${changes} documents to update.`);
  if (!changes) { console.log("Nothing to change."); return; }
  if (!APPLY) { console.log("Dry run: nothing written. Apply: --apply"); return; }
  await tx.commit();
  console.log("Written. lastmod of these case pages moves with _updatedAt.");
}

main().catch((e) => { console.error("Error:", e.message); process.exit(1); });
