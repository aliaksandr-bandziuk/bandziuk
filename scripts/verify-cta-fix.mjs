import { chromium } from "playwright";
const PAGES = {
  "readiness-en (fixed)": "http://localhost:3001/services/ai-search-readiness",
  "audit-pl (fixed)": "http://localhost:3001/pl/oferty/audyt-widocznosci-w-ai",
  "monitoring-ru (fixed)": "http://localhost:3001/ru/uslugi/monitoring-brenda-v-ii",
  "monitoring-en (HELD, still has manual CTA + short content)": "http://localhost:3001/services/ai-brand-monitoring",
};
async function main() {
  const browser = await chromium.launch();
  for (const [label, url] of Object.entries(PAGES)) {
    const pg = await browser.newPage();
    await pg.goto(url, { waitUntil: "load", timeout: 90000 });
    await pg.waitForTimeout(400);
    const info = await pg.evaluate(() => {
      const ctaBands = document.querySelectorAll('[class*="ctaBand"]').length;
      const contactBands = Array.from(document.querySelectorAll('h2')).filter(h => /Elevate Your Business|Business na nowy|бизнес на новый/i.test(h.textContent)).length;
      return { manualCtaBands: ctaBands, standardContactBands: contactBands };
    });
    console.log(label, JSON.stringify(info));
    await pg.close();
  }
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
