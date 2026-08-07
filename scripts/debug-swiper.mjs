import { chromium } from "playwright";
async function main() {
  const browser = await chromium.launch();
  const pg = await browser.newPage();
  pg.on("console", (msg) => console.log("CONSOLE:", msg.type(), msg.text()));
  pg.on("pageerror", (err) => console.log("PAGEERROR:", err.message));
  await pg.goto("http://localhost:3000/portfolio/auto-repair-seo-and-ux-boost", { waitUntil: "load", timeout: 90000 });
  await pg.waitForTimeout(1500);
  const html = await pg.evaluate(() => {
    const el = document.querySelector('[class*="sliderScreenshots"]');
    return el ? el.outerHTML.slice(0, 3000) : "NOT FOUND";
  });
  console.log("HTML:", html);
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
