import { chromium } from "playwright";
import fs from "fs";

const slugMap = JSON.parse(fs.readFileSync("./.aeo-slugmap.json", "utf8"));
const parentSeg = { en: "services", pl: "oferty", ru: "uslugi" };
function url(lang, slug) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  return `http://localhost:3001${prefix}/${parentSeg[lang]}/${slug}`;
}

const pages = [];
for (const [key, slugs] of Object.entries(slugMap)) {
  for (const lang of ["en", "pl", "ru"]) pages.push({ label: `${key}-${lang}`, url: url(lang, slugs[lang]) });
}

async function main() {
  const browser = await chromium.launch();
  const results = [];
  for (const p of pages) {
    const pg = await browser.newPage();
    await pg.goto(p.url, { waitUntil: "load", timeout: 90000 });
    await pg.waitForTimeout(400);
    const data = await pg.evaluate(() => {
      const ctaBands = document.querySelectorAll('[class*="ctaBand"]').length;
      const h1 = document.querySelector("h1")?.textContent || null;
      const h2s = Array.from(document.querySelectorAll("h2")).map(h => h.textContent.trim());
      const faqQuestions = document.querySelectorAll('[class*="accordion"] [class*="question"], [class*="Accordion"] button, [class*="faq"] button').length;
      const ogImage = document.querySelector('meta[property="og:image"]')?.content || null;
      // Hero image: the section right under header, before first content block
      const heroImg = document.querySelector('[class*="popertyIntro"] img, [class*="PropertyIntro"] img, [class*="ResponsiveMedia"] img');
      return {
        ctaBands,
        h1,
        h2Count: h2s.length,
        hasSeoTextH2: h2s.some(h => h.length > 20), // SEO_TEXT sections have a real title, not just short labels
        faqButtonCount: faqQuestions,
        ogImage,
        heroImgSrc: heroImg ? heroImg.src : null,
      };
    });
    results.push({ label: p.label, ...data });
    await pg.close();
  }
  await browser.close();
  console.log(JSON.stringify(results, null, 1));
}
main().catch(e => { console.error(e); process.exit(1); });
