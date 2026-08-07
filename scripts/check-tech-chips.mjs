import { chromium } from "playwright";
import fs from "fs";

const OUT = "C:/Users/HP/AppData/Local/Temp/claude/d--applications-bandziuk/fe962a76-7d19-4522-b565-f66ed0f49a5b/scratchpad";

const PAGES = [
  { label: "en-real-estate", url: "http://localhost:3000/portfolio/build-and-optimize-a-multilingual-real-estate-platform" },
  { label: "en-isp", url: "http://localhost:3000/portfolio/web-development-a-website-for-internet-prowider" },
  { label: "en-felgilab", url: "http://localhost:3000/portfolio/felgilab-wordpress-rebuild" },
  { label: "ru-real-estate", url: "http://localhost:3000/ru/portfolio/razrabotka-saita-dlya-agentstva-elitnoi-nedvizhimosti-na-kipre" },
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

      const chipsSection = pg.locator('[class*="chips"]').first();
      await chipsSection.waitFor({ state: "visible", timeout: 30000 });
      await chipsSection.scrollIntoViewIfNeeded();
      await pg.waitForTimeout(300);

      const chipData = await pg.evaluate(() => {
        const container = document.querySelector('[class*="chips"]');
        if (!container) return null;
        const chips = Array.from(container.querySelectorAll('[class*="chip"]')).filter(
          (el) => !el.className.includes("chipIcon") && !el.className.includes("chipLabel")
        );
        return chips.map((chip) => {
          const rect = chip.getBoundingClientRect();
          const label = chip.querySelector('[class*="chipLabel"]');
          const icon = chip.querySelector('[class*="chipIcon"] svg');
          const labelRect = label ? label.getBoundingClientRect() : null;
          return {
            text: label ? label.textContent : chip.textContent,
            height: Math.round(rect.height),
            width: Math.round(rect.width),
            hasIcon: !!icon,
            labelLineCount: labelRect ? Math.round(labelRect.height / 16) : null, // rough single-line heuristic
            labelHeight: labelRect ? Math.round(labelRect.height) : null,
          };
        });
      });

      report.push({ page: page.label, viewport: vp.name, chips: chipData });

      const shotPath = `${OUT}/chips-${page.label}-${vp.name}.png`;
      await pg.screenshot({ path: shotPath, fullPage: false });

      await ctx.close();
    }
  }

  await browser.close();
  fs.writeFileSync(`${OUT}/chips-report.json`, JSON.stringify(report, null, 1));
  console.log("Done. Wrote chips-report.json and screenshots to", OUT);
}

main().catch((e) => { console.error(e); process.exit(1); });
