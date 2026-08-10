import { chromium } from "playwright";
async function main() {
  const browser = await chromium.launch();
  const pg = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  await pg.goto("http://localhost:3001/seo-for-auto-repair-shop", { waitUntil: "load", timeout: 90000 });
  const accept = pg.getByRole("button", { name: /Accept all/ }).first();
  try { await accept.waitFor({ state: "visible", timeout: 5000 }); await accept.click(); } catch {}

  const ctaBand = pg.locator('[class*="ctaBand"]').first();
  await ctaBand.scrollIntoViewIfNeeded();
  await pg.waitForTimeout(500);

  const imgInfo = await pg.evaluate(() => {
    const img = document.querySelector('[class*="ctaBand"] img, [class*="imageWrap"] img');
    return img ? { src: img.src, naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight, complete: img.complete } : null;
  });
  console.log(JSON.stringify(imgInfo, null, 1));
  await pg.screenshot({ path: "C:/Users/HP/AppData/Local/Temp/claude/d--applications-bandziuk/fe962a76-7d19-4522-b565-f66ed0f49a5b/scratchpad/cta-image-restored.png" });
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
