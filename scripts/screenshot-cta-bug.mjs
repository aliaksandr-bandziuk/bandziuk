import { chromium } from "playwright";
async function main() {
  const browser = await chromium.launch();
  const pg = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  await pg.goto("http://localhost:3001/services/ai-visibility-audit", { waitUntil: "load", timeout: 90000 });
  const accept = pg.getByRole("button", { name: /Accept all/ }).first();
  try { await accept.waitFor({ state: "visible", timeout: 5000 }); await accept.click(); } catch {}

  // Scroll to bottom of main content, before footer
  const landingCta = pg.locator('[class*="ctaBand"]').first();
  await landingCta.scrollIntoViewIfNeeded();
  await pg.waitForTimeout(500);
  await pg.screenshot({ path: "C:/Users/HP/AppData/Local/Temp/claude/d--applications-bandziuk/fe962a76-7d19-4522-b565-f66ed0f49a5b/scratchpad/cta-bug-1.png" });

  await pg.evaluate(() => window.scrollBy(0, 600));
  await pg.waitForTimeout(500);
  await pg.screenshot({ path: "C:/Users/HP/AppData/Local/Temp/claude/d--applications-bandziuk/fe962a76-7d19-4522-b565-f66ed0f49a5b/scratchpad/cta-bug-2.png" });

  const imgSrcs = await pg.evaluate(() => Array.from(document.querySelectorAll('[class*="ctaBand"] img, [class*="Contacts"] img')).map(i => ({ src: i.src, alt: i.alt, naturalWidth: i.naturalWidth })));
  console.log(JSON.stringify(imgSrcs, null, 1));

  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
