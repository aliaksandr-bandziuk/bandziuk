import { chromium } from "playwright";

const BASE = "http://localhost:3001";

const PAGES = {
  uaeEn: `${BASE}/services/locations/website-development-uae`,
  uaeRu: `${BASE}/ru/uslugi/lokacii/razrabotka-saitov-oae`,
  montenegroEn: `${BASE}/services/locations/website-development-montenegro`,
  montenegroRu: `${BASE}/ru/uslugi/lokacii/razrabotka-saitov-chernogoriya`,
  georgiaEn: `${BASE}/services/locations/website-development-georgia`,
  georgiaRu: `${BASE}/ru/uslugi/lokacii/razrabotka-saitov-gruziya`,
  geoHubEn: `${BASE}/services/locations`,
  geoHubPl: `${BASE}/pl/oferty/lokalizacje`,
  geoHubRu: `${BASE}/ru/uslugi/lokacii`,
  mainHubEn: `${BASE}/services`,
};

async function inspect(pg, url) {
  const resp = await pg.goto(url, { waitUntil: "networkidle", timeout: 90000 });
  await pg.waitForTimeout(1000);
  const status = resp ? resp.status() : null;
  return pg.evaluate(() => {
    const scripts = [...document.querySelectorAll('script[type="application/ld+json"]')];
    const jsonLd = scripts.map((s) => { try { return JSON.parse(s.textContent); } catch { return { parseError: true, raw: s.textContent.slice(0, 200) }; } });
    const hreflangs = [...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((l) => ({ hreflang: l.getAttribute("hreflang"), href: l.getAttribute("href") }));
    const brokenLinksCandidates = [...document.querySelectorAll("main a[href]")].map((a) => a.getAttribute("href"));
    return {
      h1: document.querySelector("h1")?.textContent || null,
      metaRobots: document.querySelector('meta[name="robots"]')?.getAttribute("content") || null,
      breadcrumbNav: !!document.querySelector('nav[aria-label="breadcrumb"]'),
      breadcrumbCrumbs: [...document.querySelectorAll('nav[aria-label="breadcrumb"] li span[itemProp="name"]')].map((n) => n.textContent),
      compactListPresent: !!document.querySelector('[class*="servicesListCompact"]'),
      gridListPresent: !!document.querySelector('[class*="servicesListGrid"]'),
      uaeLinkOnPage: !!document.querySelector('a[href*="website-development-uae"], a[href*="razrabotka-saitov-oae"]'),
      montenegroLinkOnPage: !!document.querySelector('a[href*="website-development-montenegro"], a[href*="razrabotka-saitov-chernogoriya"]'),
      georgiaLinkOnPage: !!document.querySelector('a[href*="website-development-georgia"], a[href*="razrabotka-saitov-gruziya"]'),
      geoHubLinkOnPage: !!document.querySelector('a[href*="/locations"], a[href*="/lokalizacje"], a[href*="/lokacii"]'),
      heroImgSrc: document.querySelector("main img")?.getAttribute("src") || null,
      hreflangs,
      jsonLd,
      links: brokenLinksCandidates,
    };
  }).then((r) => ({ ...r, httpStatus: status }));
}

async function main() {
  const browser = await chromium.launch();
  const pg = await browser.newPage();
  const results = {};
  for (const [key, url] of Object.entries(PAGES)) {
    console.log(`\n=== ${key} — ${url} ===`);
    try {
      const r = await inspect(pg, url);
      results[key] = r;
      console.log("HTTP status:", r.httpStatus);
      console.log("H1:", r.h1);
      console.log("meta robots:", r.metaRobots);
      console.log("breadcrumb nav present:", r.breadcrumbNav, "| crumbs:", JSON.stringify(r.breadcrumbCrumbs));
      console.log("compact list present:", r.compactListPresent, "| grid list present:", r.gridListPresent);
      console.log("UAE link present:", r.uaeLinkOnPage, "| Montenegro link present:", r.montenegroLinkOnPage, "| Georgia link present:", r.georgiaLinkOnPage);
      console.log("geo hub link present:", r.geoHubLinkOnPage);
      console.log("hero img src:", r.heroImgSrc);
      console.log("hreflangs:", JSON.stringify(r.hreflangs));
      for (const ld of r.jsonLd) {
        console.log("JSON-LD @type:", JSON.stringify(ld["@type"]), "| inLanguage:", ld.inLanguage, "| url:", ld.url, "| areaServed:", JSON.stringify(ld.areaServed), "| provider:", JSON.stringify(ld.provider));
      }
    } catch (e) {
      console.log("ERROR:", e.message);
    }
  }
  await browser.close();

  console.log("\n\n=== LINK CHECK (each new page's own links) ===");
  for (const key of ["uaeEn", "uaeRu", "montenegroEn", "montenegroRu", "georgiaEn", "georgiaRu"]) {
    const r = results[key];
    if (!r) continue;
    console.log(`${key}:`, JSON.stringify(r.links.filter((h) => h && !h.startsWith("#") && !h.startsWith("mailto") && !h.startsWith("tel"))));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
