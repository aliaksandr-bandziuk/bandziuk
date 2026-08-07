import { chromium } from "playwright";
import fs from "fs";

const OUT = "C:/Users/HP/AppData/Local/Temp/claude/d--applications-bandziuk/fe962a76-7d19-4522-b565-f66ed0f49a5b/scratchpad";
const SUFFIX = process.argv[2] || "before";

const PAGES = [
  { label: "auto-repair", url: "http://localhost:3000/portfolio/auto-repair-seo-and-ux-boost" },
  { label: "real-estate", url: "http://localhost:3000/portfolio/build-and-optimize-a-multilingual-real-estate-platform" },
];
const VIEWPORTS = [
  { name: "1440", width: 1440, height: 900 },
  { name: "390", width: 390, height: 844 },
];

async function main() {
  const browser = await chromium.launch();
  const report = [];

  for (const page of PAGES) {
    for (const vp of VIEWPORTS) {
      const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      const pg = await ctx.newPage();
      await pg.goto(page.url, { waitUntil: "load", timeout: 90000 });

      const acceptBtn = pg.getByRole("button", { name: /Accept all|Zaakceptuj wszystkie|Принять все/ }).first();
      try {
        await acceptBtn.waitFor({ state: "visible", timeout: 5000 });
        await acceptBtn.click();
      } catch {}

      const heading = pg.locator('h2, [class*="screenshotsTitle"]').filter({ hasText: /Project Highlights|Najważniejsze|Ключевые/ }).first();
      await heading.waitFor({ state: "visible", timeout: 30000 });
      const pagLocator = pg.locator(".swiper-pagination-bullets").first();
      await pagLocator.scrollIntoViewIfNeeded();
      await pg.evaluate(() => window.scrollBy(0, -150));
      await pg.waitForTimeout(400);

      const measurements = await pg.evaluate(() => {
        const headingEl = Array.from(document.querySelectorAll('h2, [class*="screenshotsTitle"]')).find(
          (el) => /Project Highlights|Najważniejsze|Ключевые/.test(el.textContent || "")
        );
        const pag = document.querySelector('.swiper-pagination-bullets');
        if (!headingEl || !pag) return { headingFound: !!headingEl, pagFound: !!pag };
        const hRect = headingEl.getBoundingClientRect();
        const pRect = pag.getBoundingClientRect();
        const bulletCount = pag.querySelectorAll('.swiper-pagination-bullet').length;
        return {
          headingFound: true,
          pagFound: true,
          headingCenter: hRect.left + hRect.width / 2,
          pagCenter: pRect.left + pRect.width / 2,
          pagRect: { left: pRect.left, width: pRect.width, top: pRect.top },
          bulletCount,
        };
      });

      report.push({ page: page.label, viewport: vp.name, ...measurements });
      await pg.screenshot({ path: `${OUT}/pagination-${SUFFIX}-${page.label}-${vp.name}.png`, fullPage: false });
      await ctx.close();
    }
  }
  await browser.close();
  fs.writeFileSync(`${OUT}/pagination-${SUFFIX}-report.json`, JSON.stringify(report, null, 1));
  console.log(JSON.stringify(report, null, 1));
}
main().catch((e) => { console.error(e); process.exit(1); });
