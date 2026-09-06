const { client, key } = require("./create-batch1-warsaw.cjs");

function relatedBlock(title, ids) {
  return {
    _key: key(),
    _type: "relatedServicesBlock",
    title,
    items: ids.map((id) => ({ _key: key(), _type: "reference", _ref: id })),
  };
}

// ---- Geo hub: Markets + Industries within a market ----

const MARKETS_EN = [
  "singlepage-seo-australia", "singlepage-seo-baltics", "singlepage-seo-france",
  "singlepage-georgia", "singlepage-seo-germany", "singlepage-seo-ireland",
  "singlepage-seo-italy", "singlepage-montenegro", "singlepage-seo-netherlands",
  "singlepage-portugal", "singlepage-spain", "singlepage-seo-switzerland",
  "singlepage-thailand", "singlepage-uae", "singlepage-seo-uk", "singlepage-seo-usa",
];
const MARKETS_RU = MARKETS_EN.map((id) => `${id}.ru`);
const MARKETS_PL = [
  "singlepage-seo-australia.pl", "singlepage-seo-baltics.pl", "singlepage-seo-france.pl",
  "singlepage-seo-germany.pl", "singlepage-seo-ireland.pl", "singlepage-seo-italy.pl",
  "singlepage-seo-netherlands.pl", "singlepage-seo-switzerland.pl", "singlepage-seo-uk.pl",
  "singlepage-seo-usa.pl",
];

const INDUSTRIES_EN = [
  "singlepage-uae-auto", "singlepage-uae-realestate", "singlepage-spain-realestate",
  "singlepage-swiss-auto", "singlepage-swiss-consulting", "singlepage-swiss-premium",
  "singlepage-germany-auto",
];
const INDUSTRIES_RU = INDUSTRIES_EN.map((id) => `${id}.ru`);

// ---- Services hub: Warsaw niche pages (6 published; medical clinic + restaurant pending Batch 7) ----

const WARSAW_PL = [
  "singlepage-seo-salon-warszawa.pl", "singlepage-seo-warsztat-warszawa.pl",
  "singlepage-seo-kancelaria-warszawa.pl", "singlepage-seo-stomatologia-warszawa.pl",
  "singlepage-seo-budowlana-warszawa.pl", "singlepage-seo-sprzatanie-warszawa.pl",
];
const WARSAW_RU = WARSAW_PL.map((id) => id.replace(".pl", ".ru"));

async function main() {
  await client.patch("singlepage-locations")
    .append("contentBlocks", [
      relatedBlock("Markets", MARKETS_EN),
      relatedBlock("Industries within a market", INDUSTRIES_EN),
    ])
    .commit();
  console.log("geo hub EN: added Markets + Industries within a market");

  await client.patch("singlepage-locations.ru")
    .append("contentBlocks", [
      relatedBlock("Рынки", MARKETS_RU),
      relatedBlock("Отрасли внутри рынка", INDUSTRIES_RU),
    ])
    .commit();
  console.log("geo hub RU: added Рынки + Отрасли внутри рынка");

  await client.patch("singlepage-locations.pl")
    .append("contentBlocks", [relatedBlock("Rynki", MARKETS_PL)])
    .commit();
  console.log("geo hub PL: added Rynki only (10 of 16 markets have PL versions; no niche page in this batch has a PL translation, so no Industries section for PL)");

  await client.patch("631d883e-6f87-4346-9c6d-48b596c2daa7")
    .append("contentBlocks", [relatedBlock("SEO dla firm w Warszawie", WARSAW_PL)])
    .commit();
  console.log("services hub PL: added SEO dla firm w Warszawie (6 pages; 2 more once Batch 7 publishes)");

  await client.patch("3774c0a1-8857-4149-be24-9a357af4be00")
    .append("contentBlocks", [relatedBlock("SEO для компаний в Варшаве", WARSAW_RU)])
    .commit();
  console.log("services hub RU: added SEO для компаний в Варшаве (6 pages; 2 more once Batch 7 publishes)");
}

main().catch((e) => { console.error(e); process.exit(1); });
