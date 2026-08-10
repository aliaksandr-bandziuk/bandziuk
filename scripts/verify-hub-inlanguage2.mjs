import { chromium } from "playwright";
async function main() {
  const browser = await chromium.launch();
  const pg = await browser.newPage();
  await pg.goto("http://localhost:3001/services", { waitUntil: "load", timeout: 90000 });
  await pg.waitForTimeout(500);
  const ld = await pg.evaluate(() => {
    const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
    const parsed = scripts.map(s => { try { return JSON.parse(s.textContent); } catch { return null; } });
    return parsed.find(j => j && j["@type"] === "WebPage" || (j && j.mainEntity && j.mainEntity["@type"] === "ItemList"));
  });
  console.log(JSON.stringify(ld, null, 1).slice(0, 1500));
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
