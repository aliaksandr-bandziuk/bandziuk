import { chromium } from "playwright";
async function main() {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const pg = await ctx.newPage();
  await pg.goto("http://localhost:3000/portfolio/build-and-optimize-a-multilingual-real-estate-platform", { waitUntil: "load", timeout: 90000 });
  const accept = pg.getByRole("button", { name: /Accept all/ }).first();
  try { await accept.waitFor({ state: "visible", timeout: 5000 }); await accept.click(); } catch {}

  const wrapper = pg.locator(".swiper-wrapper").first();
  await wrapper.waitFor({ state: "visible" });
  const before = await wrapper.evaluate((el) => el.style.transform);

  const bullets = pg.locator(".swiper-pagination-bullet");
  await bullets.nth(4).click();
  await pg.waitForTimeout(1200); // speed:1000 transition

  const after = await wrapper.evaluate((el) => el.style.transform);
  const activeIndex = await pg.evaluate(() => {
    const bs = Array.from(document.querySelectorAll(".swiper-pagination-bullet"));
    return bs.findIndex((b) => b.classList.contains("swiper-pagination-bullet-active"));
  });
  console.log(JSON.stringify({ before, after, changed: before !== after, activeIndex }, null, 2));
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
