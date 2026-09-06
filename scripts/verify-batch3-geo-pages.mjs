import { chromium } from "playwright";

const BASE = "http://localhost:3001";

const PAGES = {
  germanyEn: `${BASE}/services/locations/seo-for-german-market`,
  germanyPl: `${BASE}/pl/oferty/lokalizacje/pozycjonowanie-na-rynek-niemiecki`,
  germanyRu: `${BASE}/ru/uslugi/lokacii/prodvizhenie-na-nemetskiy-rynok`,
  ukEn: `${BASE}/services/locations/seo-for-uk-market`,
  ukPl: `${BASE}/pl/oferty/lokalizacje/pozycjonowanie-na-rynek-brytyjski`,
  ukRu: `${BASE}/ru/uslugi/lokacii/prodvizhenie-na-britanskiy-rynok`,
  usaEn: `${BASE}/services/locations/seo-for-us-market`,
  usaPl: `${BASE}/pl/oferty/lokalizacje/pozycjonowanie-na-rynek-amerykanski`,
  usaRu: `${BASE}/ru/uslugi/lokacii/prodvizhenie-na-amerikanskiy-rynok`,
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
      germanyLinkOnPage: !!document.querySelector('a[href*="seo-for-german-market"], a[href*="pozycjonowanie-na-rynek-niemiecki"], a[href*="prodvizhenie-na-nemetskiy-rynok"]'),
      ukLinkOnPage: !!document.querySelector('a[href*="seo-for-uk-market"], a[href*="pozycjonowanie-na-rynek-brytyjski"], a[href*="prodvizhenie-na-britanskiy-rynok"]'),
      usaLinkOnPage: !!document.querySelector('a[href*="seo-for-us-market"], a[href*="pozycjonowanie-na-rynek-amerykanski"], a[href*="prodvizhenie-na-amerikanskiy-rynok"]'),
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
      console.log("Germany link:", r.germanyLinkOnPage, "| UK link:", r.ukLinkOnPage, "| USA link:", r.usaLinkOnPage);
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
  for (const key of ["germanyEn", "germanyPl", "germanyRu", "ukEn", "ukPl", "ukRu", "usaEn", "usaPl", "usaRu"]) {
    const r = results[key];
    if (!r) continue;
    console.log(`${key}:`, JSON.stringify(r.links.filter((h) => h && !h.startsWith("#") && !h.startsWith("mailto") && !h.startsWith("tel"))));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
