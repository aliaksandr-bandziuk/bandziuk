import { chromium } from "playwright";
async function main() {
  const browser = await chromium.launch();
  const pg = await browser.newPage();
  await pg.goto("http://localhost:3001/services/cms-integration-and-api-work", { waitUntil: "load", timeout: 90000 });
  const og = await pg.evaluate(() => document.querySelector('meta[property="og:image"]')?.content || null);
  console.log("established page og:image:", og);
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
