import { chromium } from "playwright";

const PAGES = [
  { lang: "en", url: "http://localhost:3000/blog/branded-traffic-and-bought-links-seo-reports" },
  { lang: "pl", url: "http://localhost:3000/pl/blog/ruch-brandowy-i-kupione-linki-w-raportach-seo" },
  { lang: "ru", url: "http://localhost:3000/ru/blog/brendovyi-trafik-i-kuplennye-ssylki-v-otchetah-seo" },
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
      const img = document.querySelector('img[alt*="brand" i], img[alt*="markow" i], img[alt*="брендов" i]');
      const tableRows = Array.from(document.querySelectorAll("li, p")).filter(el => /—/.test(el.textContent) && el.textContent.length < 200).length;
      return { h1, hasFaqHeading, accordionEls, imgAlt: img ? img.alt : null, wordCount: bodyText.split(/\s+/).length };
    });
    console.log(p.lang, JSON.stringify(data));
    await pg.close();
  }
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
