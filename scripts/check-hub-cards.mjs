import { chromium } from "playwright";
async function main() {
  const browser = await chromium.launch();
  const pg = await browser.newPage();
  await pg.goto("http://localhost:3001/services", { waitUntil: "load", timeout: 90000 });
  await pg.waitForTimeout(400);
  const cards = await pg.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a[href*="ai-visibility-audit"], a[href*="fix-ai-misinformation"], a[href*="ai-brand-monitoring"], a[href*="ai-search-readiness"]'));
    return links.map(a => {
      const img = a.querySelector("img");
      return { href: a.getAttribute("href"), imgSrc: img ? img.src.slice(0, 60) : "NO IMAGE" };
    });
  });
  console.log(JSON.stringify(cards, null, 1));
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
