import { chromium } from "playwright";

const PAGES = {
  geoHubEn: "http://localhost:3001/services/locations",
  geoHubPl: "http://localhost:3001/pl/oferty/lokalizacje",
  geoHubRu: "http://localhost:3001/ru/uslugi/lokacii",
  uaeEn: "http://localhost:3001/services/locations/web-development-and-seo-uae",
  uaeRu: "http://localhost:3001/ru/uslugi/lokacii/razrabotka-saitov-i-seo-oae",
  mainHubEn: "http://localhost:3001/services",
};

async function inspect(pg, url) {
  await pg.goto(url, { waitUntil: "networkidle", timeout: 90000 });
  await pg.waitForTimeout(1500);
  return pg.evaluate(() => {
    const scripts = [...document.querySelectorAll('script[type="application/ld+json"]')];
    const jsonLd = scripts.map((s) => { try { return JSON.parse(s.textContent); } catch { return { parseError: true, raw: s.textContent.slice(0, 200) }; } });
    return {
      h1: document.querySelector("h1")?.textContent || null,
      breadcrumbNav: !!document.querySelector('nav[aria-label="breadcrumb"]'),
      breadcrumbCrumbs: [...document.querySelectorAll('nav[aria-label="breadcrumb"] li span[itemProp="name"]')].map((n) => n.textContent),
      compactListPresent: !!document.querySelector('[class*="servicesListCompact"]'),
      gridListPresent: !!document.querySelector('[class*="servicesListGrid"]'),
      uaeLinkOnPage: !!document.querySelector('a[href*="web-development-and-seo-uae"], a[href*="razrabotka-saitov-i-seo-oae"]'),
      geoHubLinkOnPage: !!document.querySelector('a[href*="/locations"], a[href*="/lokalizacje"], a[href*="/lokacii"]'),
      heroImgSrc: document.querySelector("main img")?.getAttribute("src") || null,
      jsonLd,
    };
  });
}

async function main() {
  const browser = await chromium.launch();
  const pg = await browser.newPage();
  for (const [key, url] of Object.entries(PAGES)) {
    console.log(`\n=== ${key} — ${url} ===`);
    try {
      const r = await inspect(pg, url);
      console.log("H1:", r.h1);
      console.log("breadcrumb nav present:", r.breadcrumbNav, "crumbs:", JSON.stringify(r.breadcrumbCrumbs));
      console.log("compact list present:", r.compactListPresent, "| grid list present:", r.gridListPresent);
      console.log("UAE link present on page:", r.uaeLinkOnPage);
      console.log("geo hub link present on page:", r.geoHubLinkOnPage);
      console.log("hero img src:", r.heroImgSrc);
      for (const ld of r.jsonLd) {
        console.log("JSON-LD @type:", JSON.stringify(ld["@type"]), "| inLanguage:", ld.inLanguage, "| url:", ld.url, "| areaServed:", JSON.stringify(ld.areaServed));
      }
    } catch (e) {
      console.log("ERROR:", e.message);
    }
  }
  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });
