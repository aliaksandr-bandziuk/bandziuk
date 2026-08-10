import { chromium } from "playwright";

const PAGES = {
  "top-level (main hub)": "http://localhost:3001/services",
  "2-level (ai-search-readiness)": "http://localhost:3001/services/ai-search-readiness",
  "3-level (UAE)": "http://localhost:3001/services/locations/web-development-and-seo-uae",
};

async function main() {
  const browser = await chromium.launch();
  const pg = await browser.newPage();
  for (const [label, url] of Object.entries(PAGES)) {
    await pg.goto(url, { waitUntil: "networkidle", timeout: 90000 });
    await pg.waitForTimeout(1500);
    const jsonLdUrl = await pg.evaluate(() => {
      const s = document.querySelector("#structured-data");
      if (!s) return null;
      const j = JSON.parse(s.textContent);
      return j.url;
    });
    console.log(`${label}\n  requested: ${url}\n  JSON-LD url: ${jsonLdUrl}\n`);
  }
  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });
