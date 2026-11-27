// Removes what is left in Sanity of the abandoned service-page template
// (2026-11-26): the noIndex test copy and the five block types that only it used
// (assistantAnswersBlock, measuredFiguresBlock, limitsBlock, shortAskBlock,
// closingCtaBlock). Their code is gone from src/, so any other page still
// holding such a block is listed and nothing is deleted.
//
//   node scripts/cleanup-abandoned-template.cjs           dry run
//   node scripts/cleanup-abandoned-template.cjs --apply   deletes the test copy
const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const APPLY = process.argv.includes("--apply");
const TYPES = ["assistantAnswersBlock", "measuredFiguresBlock", "limitsBlock", "shortAskBlock", "closingCtaBlock"];

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

(async () => {
  const using = await client.fetch(
    `*[_type == "singlepage" && count(contentBlocks[_type in $types]) > 0]{ _id, title, noIndex, "types": contentBlocks[_type in $types]._type }`,
    { types: TYPES },
  );
  const tests = using.filter((d) => d.noIndex === true || /szablon-uslugi-test/.test(d._id));
  const others = using.filter((d) => !tests.includes(d));

  console.log("Pages holding the removed block types:");
  for (const d of using) console.log(`  ${tests.includes(d) ? "test copy" : "LIVE     "}  ${d._id}  ${d.title}  [${[...new Set(d.types)].join(", ")}]`);
  if (!using.length) console.log("  none");

  if (others.length) {
    console.log("\nA live page still uses these blocks — nothing deleted. Tell Claude which page it is.");
    process.exit(1);
  }
  if (!tests.length) {
    console.log("\nNothing to delete.");
    return;
  }
  if (!APPLY) {
    console.log(`\nDry run. With --apply these ${tests.length} test document(s) and their drafts are deleted.`);
    return;
  }
  const tx = client.transaction();
  for (const d of tests) {
    const id = d._id.replace(/^drafts\./, "");
    tx.delete(id);
    tx.delete(`drafts.${id}`);
  }
  await tx.commit();
  console.log("\nDeleted.");
})().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
