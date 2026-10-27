// scripts/capture-cyprusvipestates-screenshots.cjs
//
// Captures fresh screenshots of cyprusvipestates.com for the rewritten portfolio
// case (build-and-optimize-a-multilingual-real-estate-platform). Writes JPEGs to
// drafts/screenshots-cyprusvipestates/ in slider order. Nothing is uploaded —
// review the images, then run upload-cyprusvipestates-screenshots.cjs.
//
// Usage: node scripts/capture-cyprusvipestates-screenshots.cjs

const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const BASE = "https://cyprusvipestates.com";
const OUT = path.resolve(__dirname, "../drafts/screenshots-cyprusvipestates");
const VIEWPORT = { width: 1440, height: 900 };

// file, path, what to do before the shot: scroll (in viewports) or click a selector
const SHOTS = [
  { file: "1-home-en.jpg", url: "/" },
  { file: "2-catalog.jpg", url: "/projects" },
  { file: "3-map.jpg", url: "/projects", click: ".px__mapbtn" },
  { file: "4-project-page.jpg", url: "/projects/royal-bay-resort-villas" },
  { file: "5-project-specs.jpg", url: "/projects/royal-bay-resort-villas", scroll: 1 },
  { file: "6-landing-offplan-paphos.jpg", url: "/off-plan-properties-in-paphos" },
  { file: "7-landing-listing.jpg", url: "/off-plan-properties-in-paphos", to: ".prj" },
  { file: "8-comparison-article.jpg", url: "/blog/paphos-vs-limassol-where-to-buy-property-in-cyprus" },
  { file: "9-german-article.jpg", url: "/de/blog/wo-leben-die-meisten-deutschen-auf-zypern" },
  { file: "10-german-home.jpg", url: "/de" },
  { file: "11-hebrew-home.jpg", url: "/he" },
  { file: "12-case-studies.jpg", url: "/case-studies" },
];

const COOKIE = ['button:text-is("Accept all")', 'button:text-is("Accept")', 'button:text-is("Alle akzeptieren")', 'button:text-is("Akzeptieren")', "#onetrust-accept-btn-handler"];

async function dismissCookies(page) {
  for (const s of COOKIE) {
    try {
      const el = await page.$(s);
      if (el && (await el.isVisible())) { await el.click({ timeout: 1500 }); await page.waitForTimeout(400); return; }
    } catch { /* next */ }
  }
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  // Uses the Chrome (or Edge) already installed on this computer — no Playwright browser download needed.
  let browser;
  for (const channel of ["chrome", "msedge", undefined]) {
    try { browser = await chromium.launch(channel ? { channel } : {}); console.log(`browser: ${channel || "playwright chromium"}`); break; }
    catch (err) { if (!channel) throw err; }
  }
  const ctx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const s of SHOTS) {
    try {
      const res = await page.goto(BASE + s.url, { waitUntil: "networkidle", timeout: 60000 });
      await dismissCookies(page);
      await page.waitForTimeout(2500);
      await page.evaluate(() => window.scrollTo(0, 0));
      if (s.click) { await page.click(s.click, { timeout: 5000 }); await page.waitForTimeout(2500); }
      if (s.to) { const el = await page.$(s.to); if (el) { await el.scrollIntoViewIfNeeded(); await page.evaluate(() => window.scrollBy(0, -120)); await page.waitForTimeout(1200); } else console.log(`note no ${s.to} on ${s.url}`); }
      if (s.scroll) { await page.evaluate((v) => window.scrollTo(0, Math.round(window.innerHeight * v)), s.scroll); await page.waitForTimeout(1200); }
      await page.waitForTimeout(800);
      await page.screenshot({ path: path.join(OUT, s.file), type: "jpeg", quality: 82 });
      console.log(`ok   ${res ? res.status() : "?"}  ${s.file}  ${s.url}`);
    } catch (err) {
      console.log(`FAIL ${s.file}  ${s.url}  ${err.message.split("\n")[0]}`);
    }
  }
  await browser.close();
  console.log(`\nSaved to drafts/screenshots-cyprusvipestates/`);
})();
