// scripts/set-giuseppeiannone-order.cjs
//
// Moves the giuseppeiannone.it case out of the home page's "Recent projects"
// block by giving it an older publishedAt.
//
// Why this works: both the home page block (getLastFourPortfolioByLang,
// order(publishedAt desc)[0...4]) and the /portfolio listing sort by the
// document's own publishedAt. Nothing in the code has to change — the case
// simply lands in fifth place, right after the four newest ones.
//
// The target date is computed per language: halfway between the 4th and the 5th
// newest case (ignoring this one). If a language has fewer than five other
// cases, the script falls back to one day before the oldest of them, which puts
// the case last.
//
// Usage:
//   node scripts/set-giuseppeiannone-order.cjs --dry-run    show the resulting order, write nothing
//   node scripts/set-giuseppeiannone-order.cjs              patch publishedAt
//   node scripts/set-giuseppeiannone-order.cjs --restore    put it back on top (publishedAt = now)
//
// Reverting later: --restore, or set publishedAt by hand in the Studio.

const { client } = require("./create-batch1-warsaw.cjs");

const DRY_RUN = process.argv.includes("--dry-run");
const RESTORE = process.argv.includes("--restore");
const LANGS = ["en", "pl", "ru"];
const BASE_ID = "portfolio-giuseppeiannone";
const POSITION = 5; // the place this case should take in the list

const docIdFor = (lang) => (lang === "en" ? BASE_ID : `${BASE_ID}.${lang}`);

async function main() {
  const docs = await client.fetch(
    `*[_type == "portfolio"]{_id, language, title, publishedAt}`
  );

  const patches = [];

  for (const lang of LANGS) {
    const id = docIdFor(lang);
    const self = docs.find((d) => d._id === id);
    if (!self) {
      console.error(`Not found in Sanity: ${id} — create the case first.`);
      process.exit(1);
    }

    const others = docs
      .filter((d) => d.language === lang && d._id !== id && d.publishedAt)
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    let target;
    if (RESTORE) {
      target = new Date().toISOString();
    } else if (others.length >= POSITION) {
      // between the case that stays 4th and the one that becomes 6th
      const above = new Date(others[POSITION - 2].publishedAt).getTime();
      const below = new Date(others[POSITION - 1].publishedAt).getTime();
      target = new Date(Math.round((above + below) / 2)).toISOString();
    } else if (others.length) {
      const oldest = new Date(others[others.length - 1].publishedAt).getTime();
      target = new Date(oldest - 24 * 60 * 60 * 1000).toISOString();
    } else {
      console.error(`No other portfolio documents in ${lang} — nothing to sort against.`);
      process.exit(1);
    }

    const preview = [...others, { ...self, publishedAt: target }]
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, 7);

    console.log(`\n=== ${lang} ===`);
    console.log(`publishedAt: ${self.publishedAt || "(empty)"}  ->  ${target}`);
    preview.forEach((d, i) => {
      const mark = d._id === id ? " <-- this case" : "";
      const inBlock = i < 4 ? "recent" : "      ";
      console.log(`  ${String(i + 1).padStart(2)}. ${inBlock}  ${d.publishedAt.slice(0, 10)}  ${d.title}${mark}`);
    });

    patches.push({ id, target });
  }

  if (DRY_RUN) {
    console.log("\nDry run — nothing written.");
    return;
  }

  const tx = client.transaction();
  patches.forEach(({ id, target }) => tx.patch(id, { set: { publishedAt: target } }));
  const result = await tx.commit();
  console.log("\nPatched:", result.results.map((r) => r.id).join(", "));
  console.log("The home page picks this up within a minute (revalidate: 60).");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
