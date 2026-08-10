import { chromium } from "playwright";
const PAGES = {
  en: "http://localhost:3001/services/seo-optimization-and-strategy",
  pl: "http://localhost:3001/pl/oferty/strategia-i-optymalizacja-seo",
  ru: "http://localhost:3001/ru/uslugi/seo-optimizaciya-i-strategiya",
};
async function main() {
  const browser = await chromium.launch();
  for (const [lang, url] of Object.entries(PAGES)) {
    const pg = await browser.newPage();
    await pg.goto(url, { waitUntil: "load", timeout: 90000 });
    await pg.waitForTimeout(1000);
    const ld = await pg.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
      const parsed = scripts.map(s => { try { return JSON.parse(s.textContent); } catch { return null; } });
      return parsed.find(j => j && (Array.isArray(j["@type"]) ? j["@type"].includes("Service") : j["@type"] === "Service"));
    });
    console.log(`\n=== ${lang} ===`);
    console.log(JSON.stringify(ld, null, 1));
    await pg.close();
  }
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
