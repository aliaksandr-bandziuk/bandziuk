import { chromium } from "playwright";
import fs from "fs";

const slugMap = JSON.parse(fs.readFileSync("./.aeo-slugmap.json", "utf8"));
const PARENT = {
  en: "http://localhost:3001/services/ai-ready-seo-and-geo-optimization",
  pl: "http://localhost:3001/pl/oferty/ai-seo-and-geo-optymalizacja",
  ru: "http://localhost:3001/ru/uslugi/ai-seo-i-geo-optimizaciya",
};
function url(lang, parentSeg, slug) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  return `http://localhost:3001${prefix}/${parentSeg}/${slug}`;
}
const parentSeg = { en: "services", pl: "oferty", ru: "uslugi" };

const pages = [];
for (const [key, slugs] of Object.entries(slugMap)) {
  for (const lang of ["en", "pl", "ru"]) {
    pages.push({ label: `${key}-${lang}`, url: url(lang, parentSeg[lang], slugs[lang]), lang });
  }
}
for (const [lang, u] of Object.entries(PARENT)) pages.push({ label: `parent-${lang}`, url: u, lang });

async function main() {
  const browser = await chromium.launch();
  const results = [];
  for (const p of pages) {
    const pg = await browser.newPage();
    await pg.goto(p.url, { waitUntil: "load", timeout: 90000 });
    await pg.waitForTimeout(600);
    const data = await pg.evaluate(() => {
      const hreflangs = Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]')).map(l => l.hreflang);
      const robotsMeta = document.querySelector('meta[name="robots"]')?.content || null;
      const ldScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map(s => {
        try { return JSON.parse(s.textContent); } catch { return null; }
      });
      const svc = ldScripts.find(j => j && (Array.isArray(j["@type"]) ? j["@type"].includes("Service") : j["@type"] === "Service"));
      const h1 = document.querySelector("h1")?.textContent;
      const linkCount = document.querySelectorAll('main a[href], article a[href], [class*="RichText"] a[href]').length;
      return {
        h1,
        hreflangCount: hreflangs.length,
        hreflangs,
        robotsMeta,
        hasServiceLd: !!svc,
        ldType: svc ? svc["@type"] : null,
        provider: svc ? svc.provider : null,
        serviceType: svc ? svc.serviceType : null,
      };
    });
    results.push({ label: p.label, ...data });
    await pg.close();
  }
  await browser.close();
  console.log(JSON.stringify(results, null, 1));
}
main().catch(e => { console.error(e); process.exit(1); });
