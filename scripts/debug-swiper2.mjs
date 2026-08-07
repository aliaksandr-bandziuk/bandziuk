import { chromium } from "playwright";
async function main() {
  const browser = await chromium.launch();
  const pg = await browser.newPage();
  await pg.goto("http://localhost:3000/portfolio/auto-repair-seo-and-ux-boost", { waitUntil: "load", timeout: 90000 });
  await pg.waitForTimeout(1500);
  const result = await pg.evaluate(() => {
    const wrapper = document.querySelector('[class*="sliderScreenshots"]');
    const pagDiv = wrapper ? wrapper.querySelector('[class*="pagination"]') : null;
    return {
      pagDivOuterHTML: pagDiv ? pagDiv.outerHTML.slice(0, 1000) : "PAGINATION DIV NOT FOUND",
      swiperPaginationCount: document.querySelectorAll('.swiper-pagination').length,
      wrapperChildrenClasses: wrapper ? Array.from(wrapper.children).map(c => c.className) : [],
    };
  });
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
