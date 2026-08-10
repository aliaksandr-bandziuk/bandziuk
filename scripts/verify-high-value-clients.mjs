import { chromium } from "playwright";

const PAGES = [
  { lang: "en", url: "http://localhost:3000/blog/high-value-clients-dont-click-ads" },
  { lang: "pl", url: "http://localhost:3000/pl/blog/drodzy-klienci-nie-klikaja-w-reklamy" },
  { lang: "ru", url: "http://localhost:3000/ru/blog/dorogie-klienty-ne-klikayut-po-reklame" },
];

async function main() {
  const browser = await chromium.launch();
  for (const p of PAGES) {
    const pg = await browser.newPage();
    await pg.goto(p.url, { waitUntil: "load", timeout: 90000 });
    const data = await pg.evaluate(() => {
      const h1 = document.querySelector("h1")?.textContent;
      const bodyText = document.body.innerText;
      const hasFaqHeading = /Frequently asked|Często zadawane|Часто задаваемые/.test(bodyText);
      const accordionEls = document.querySelectorAll('[class*="accordion"], [class*="faq"]').length;
      const img = Array.from(document.querySelectorAll("img")).find(i => /path|путь|droga/i.test(i.alt || ""));
      const hreflangs = Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]')).map(l => `${l.hreflang}:${l.href}`);
      const robotsMeta = document.querySelector('meta[name="robots"]')?.content || null;
      const ldJsonScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map(s => {
        try { return JSON.parse(s.textContent); } catch { return null; }
      });
      const blogPosting = ldJsonScripts.find(j => j && j["@type"] === "BlogPosting");
      return {
        h1,
        hasFaqHeading,
        accordionEls,
        imgAlt: img ? img.alt : null,
        imgSrc: img ? img.src.slice(0, 80) : null,
        hreflangs,
        robotsMeta,
        blogPostingAuthor: blogPosting ? blogPosting.author : null,
        blogPostingType: blogPosting ? blogPosting["@type"] : null,
      };
    });
    console.log(p.lang, JSON.stringify(data, null, 1));
    await pg.close();
  }
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
