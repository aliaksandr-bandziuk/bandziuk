import { chromium } from "playwright";

const BASE = "http://localhost:3001";

const PAGES = {
  netherlandsEn: `${BASE}/services/locations/seo-for-dutch-market`,
  netherlandsPl: `${BASE}/pl/oferty/lokalizacje/pozycjonowanie-na-rynek-holenderski`,
  netherlandsRu: `${BASE}/ru/uslugi/lokacii/prodvizhenie-na-gollandskiy-rynok`,
  irelandEn: `${BASE}/services/locations/seo-for-irish-market`,
  irelandPl: `${BASE}/pl/oferty/lokalizacje/pozycjonowanie-na-rynek-irlandzki`,
  irelandRu: `${BASE}/ru/uslugi/lokacii/prodvizhenie-na-irlandskiy-rynok`,
  franceEn: `${BASE}/services/locations/seo-for-french-market`,
  francePl: `${BASE}/pl/oferty/lokalizacje/pozycjonowanie-na-rynek-francuski`,
  franceRu: `${BASE}/ru/uslugi/lokacii/prodvizhenie-na-frantsuzskiy-rynok`,
  italyEn: `${BASE}/services/locations/seo-for-italian-market`,
  italyPl: `${BASE}/pl/oferty/lokalizacje/pozycjonowanie-na-rynek-wloski`,
  italyRu: `${BASE}/ru/uslugi/lokacii/prodvizhenie-na-italyanskiy-rynok`,
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
    const links = [...document.querySelectorAll("main a[href]")].map((a) => a.getAttribute("href"));
    return {
      h1: document.querySelector("h1")?.textContent || null,
      metaRobots: document.querySelector('meta[name="robots"]')?.getAttribute("content") || null,
      breadcrumbNav: !!document.querySelector('nav[aria-label="breadcrumb"]'),
      breadcrumbCrumbs: [...document.querySelectorAll('nav[aria-label="breadcrumb"] li span[itemProp="name"]')].map((n) => n.textContent),
      compactListPresent: !!document.querySelector('[class*="servicesListCompact"]'),
      netherlandsLinkOnPage: !!document.querySelector('a[href*="seo-for-dutch-market"], a[href*="pozycjonowanie-na-rynek-holenderski"], a[href*="prodvizhenie-na-gollandskiy-rynok"]'),
      irelandLinkOnPage: !!document.querySelector('a[href*="seo-for-irish-market"], a[href*="pozycjonowanie-na-rynek-irlandzki"], a[href*="prodvizhenie-na-irlandskiy-rynok"]'),
      franceLinkOnPage: !!document.querySelector('a[href*="seo-for-french-market"], a[href*="pozycjonowanie-na-rynek-francuski"], a[href*="prodvizhenie-na-frantsuzskiy-rynok"]'),
      italyLinkOnPage: !!document.querySelector('a[href*="seo-for-italian-market"], a[href*="pozycjonowanie-na-rynek-wloski"], a[href*="prodvizhenie-na-italyanskiy-rynok"]'),
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
      console.log("compact list:", r.compactListPresent);
      console.log("NL link:", r.netherlandsLinkOnPage, "| IE link:", r.irelandLinkOnPage, "| FR link:", r.franceLinkOnPage, "| IT link:", r.italyLinkOnPage);
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
  for (const key of ["netherlandsEn", "netherlandsPl", "netherlandsRu", "irelandEn", "irelandPl", "irelandRu", "franceEn", "francePl", "franceRu", "italyEn", "italyPl", "italyRu"]) {
    const r = results[key];
    if (!r) continue;
    console.log(`${key}:`, JSON.stringify(r.links.filter((h) => h && !h.startsWith("#") && !h.startsWith("mailto") && !h.startsWith("tel"))));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
