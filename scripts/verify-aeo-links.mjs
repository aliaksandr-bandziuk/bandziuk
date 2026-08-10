import { chromium } from "playwright";
import fs from "fs";

const slugMap = JSON.parse(fs.readFileSync("./.aeo-slugmap.json", "utf8"));
const parentSeg = { en: "services", pl: "oferty", ru: "uslugi" };
function url(lang, slug) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  return `http://localhost:3001${prefix}/${parentSeg[lang]}/${slug}`;
}
const PARENT_SLUG = { en: "ai-ready-seo-and-geo-optimization", pl: "ai-seo-and-geo-optymalizacja", ru: "ai-seo-i-geo-optimizaciya" };

const pages = [{ label: "parent", urls: Object.fromEntries(["en","pl","ru"].map(l => [l, url(l, PARENT_SLUG[l])])) }];
for (const [key, slugs] of Object.entries(slugMap)) {
  pages.push({ label: key, urls: Object.fromEntries(["en","pl","ru"].map(l => [l, url(l, slugs[l])])) });
}

async function main() {
  const browser = await chromium.launch();
  const allLinks = new Set();
  const perPage = {};

  for (const p of pages) {
    for (const lang of ["en", "pl", "ru"]) {
      const pg = await browser.newPage();
      await pg.goto(p.urls[lang], { waitUntil: "load", timeout: 90000 });
      await pg.waitForTimeout(300);
      const links = await pg.evaluate(() => {
        return Array.from(document.querySelectorAll('main a[href]'))
          .map(a => a.getAttribute("href"))
          .filter(h => h && h.startsWith("/") && !h.startsWith("//"));
      });
      perPage[`${p.label}-${lang}`] = links;
      links.forEach(l => allLinks.add(l));
      await pg.close();
    }
  }

  console.log("=== Links found per page ===");
  for (const [k, v] of Object.entries(perPage)) console.log(k, JSON.stringify(v));

  console.log("\n=== Checking every unique internal link resolves (200) ===");
  const results = [];
  for (const link of allLinks) {
    try {
      const r = await fetch(`http://localhost:3001${link}`, { redirect: "manual" });
      results.push({ link, status: r.status });
    } catch (e) {
      results.push({ link, status: "ERR", error: e.message });
    }
  }
  results.forEach(r => console.log(r.status, r.link));
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
