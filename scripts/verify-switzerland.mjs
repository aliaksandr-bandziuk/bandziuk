import { chromium } from "playwright";

const BASE = "http://localhost:3001";

const PAGES = {
  switzerlandEn: `${BASE}/services/locations/seo-for-swiss-market`,
  switzerlandPl: `${BASE}/pl/oferty/lokalizacje/pozycjonowanie-na-rynek-szwajcarski`,
  switzerlandRu: `${BASE}/ru/uslugi/lokacii/prodvizhenie-na-shveytsarskiy-rynok`,
  franceEn: `${BASE}/services/locations/seo-for-french-market`,
  geoHubEn: `${BASE}/services/locations`,
};

async function inspect(pg, url) {
  const resp = await pg.goto(url, { waitUntil: "networkidle", timeout: 90000 });
  await pg.waitForTimeout(1000);
  const status = resp ? resp.status() : null;
  return pg.evaluate(() => {
    const scripts = [...document.querySelectorAll('script[type="application/ld+json"]')];
    const jsonLd = scripts.map((s) => { try { return JSON.parse(s.textContent); } catch { return { parseError: true, raw: s.textContent.slice(0, 200) }; } });
    const hreflangs = [...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((l) => ({ hreflang: l.getAttribute("hreflang"), href: l.getAttribute("href") }));
    const links = [...document.querySelectorAll("main a[href]")].map((a) => a.getAttribute("href"));
    return {
      h1: document.querySelector("h1")?.textContent || null,
      metaRobots: document.querySelector('meta[name="robots"]')?.getAttribute("content") || null,
      breadcrumbNav: !!document.querySelector('nav[aria-label="breadcrumb"]'),
      breadcrumbCrumbs: [...document.querySelectorAll('nav[aria-label="breadcrumb"] li span[itemProp="name"]')].map((n) => n.textContent),
      compactListPresent: !!document.querySelector('[class*="servicesListCompact"]'),
      switzerlandLinkOnPage: !!document.querySelector('a[href*="seo-for-swiss-market"], a[href*="pozycjonowanie-na-rynek-szwajcarski"], a[href*="prodvizhenie-na-shveytsarskiy-rynok"]'),
      heroImgSrc: document.querySelector("main img")?.getAttribute("src") || null,
      hreflangs,
      jsonLd,
      links,
    };
  }).then((r) => ({ ...r, httpStatus: status }));
}

async function main() {
  const browser = await chromium.launch();
  const pg = await browser.newPage();
  for (const [key, url] of Object.entries(PAGES)) {
    console.log(`\n=== ${key} — ${url} ===`);
    try {
      const r = await inspect(pg, url);
      console.log("HTTP status:", r.httpStatus);
      console.log("H1:", r.h1);
      console.log("meta robots:", r.metaRobots);
      console.log("breadcrumb nav present:", r.breadcrumbNav, "| crumbs:", JSON.stringify(r.breadcrumbCrumbs));
      console.log("compact list:", r.compactListPresent, "| Switzerland link present:", r.switzerlandLinkOnPage);
      console.log("hero img src:", r.heroImgSrc);
      console.log("hreflangs:", JSON.stringify(r.hreflangs));
      for (const ld of r.jsonLd) {
        console.log("JSON-LD @type:", JSON.stringify(ld["@type"]), "| inLanguage:", ld.inLanguage, "| url:", ld.url, "| areaServed:", JSON.stringify(ld.areaServed), "| provider:", JSON.stringify(ld.provider));
      }
      if (key === "switzerlandEn" || key === "franceEn") {
        console.log("links:", JSON.stringify(r.links.filter((h) => h && !h.startsWith("#") && !h.startsWith("mailto") && !h.startsWith("tel"))));
      }
    } catch (e) {
      console.log("ERROR:", e.message);
    }
  }
  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });
