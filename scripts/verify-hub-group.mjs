import { chromium } from "playwright";
async function main() {
  const browser = await chromium.launch();
  for (const [lang, url] of Object.entries({
    en: "http://localhost:3001/services",
    pl: "http://localhost:3001/pl/oferty",
    ru: "http://localhost:3001/ru/uslugi",
  })) {
    const pg = await browser.newPage();
    await pg.goto(url, { waitUntil: "load", timeout: 90000 });
    const groupTitles = await pg.evaluate(() => {
      return Array.from(document.querySelectorAll("h2, h3")).map(h => h.textContent.trim());
    });
    const aeoLinks = await pg.evaluate(() => {
      return Array.from(document.querySelectorAll('a[href*="visibility-audit"],a[href*="misinformation"],a[href*="brand-monitoring"],a[href*="search-readiness"],a[href*="widocznosci"],a[href*="blednych"],a[href*="marki-w-ai"],a[href*="wyszukiwania-ai"],a[href*="vidimosti"],a[href*="nevernyh"],a[href*="brenda"],a[href*="ii-poisku"]'))
        .map(a => a.getAttribute("href"));
    });
    console.log(`\n=== ${lang} ===`);
    console.log("headings containing 'AI' or 'Widoczność' or 'ИИ':", groupTitles.filter(t => /AI|Widoczność|ИИ/i.test(t)));
    console.log("AEO links found on hub page:", JSON.stringify([...new Set(aeoLinks)]));
    await pg.close();
  }
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
