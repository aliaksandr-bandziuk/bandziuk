// scripts/update-academgo-preview.cjs
//
// Repoints the previewImage of the already published AcademGo case to the new
// browser-frame mockup, in all three locales, and updates its alt text.
//
// Why a separate script: run-academgo-portfolio.cjs creates documents and fails
// on a second run ("document already exists"), which is the correct behaviour —
// it must never silently overwrite a published case. This one only patches the
// previewImage field and touches nothing else.
//
//   node scripts/update-academgo-preview.cjs           → dry run, writes nothing
//   node scripts/update-academgo-preview.cjs --apply   → patches the three documents

const fs = require("fs");
const path = require("path");
const { client, ref } = require("./create-batch1-warsaw.cjs");

const APPLY = process.argv.includes("--apply");
const LANGS = ["en", "pl", "ru"];
const BASE_ID = "portfolio-academgo";
const PREVIEW_FILE = "0-preview-browser.jpg";

const DRAFTS = path.resolve(__dirname, "../drafts");
const MANIFEST = path.join(DRAFTS, "screenshots-academgo", "assets.json");

const docIdFor = (lang) => (lang === "en" ? BASE_ID : `${BASE_ID}.${lang}`);

function previewAlt(lang) {
  const file = path.join(DRAFTS, `portfolio-academgo-${lang.toUpperCase()}.md`);
  const raw = fs.readFileSync(file, "utf8");
  const m = raw.match(/\[PREVIEW IMAGE\]\s*\n\s*alt:\s*(.+)/);
  if (!m) throw new Error(`No [PREVIEW IMAGE] alt in ${path.basename(file)}`);
  return m[1].replace(/^[«"'„“]\s*/, "").replace(/\s*[»"'”]$/, "").trim();
}

async function main() {
  if (!fs.existsSync(MANIFEST)) throw new Error(`No ${MANIFEST} — run the uploader first`);
  const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
  const assetId = manifest[PREVIEW_FILE];
  if (!assetId) throw new Error(`${PREVIEW_FILE} is not in assets.json — run the uploader first`);

  const patches = [];
  for (const lang of LANGS) {
    const id = docIdFor(lang);
    const doc = await client.getDocument(id);
    if (!doc) {
      console.error(`! not found: ${id}`);
      continue;
    }
    const current = doc.previewImage?.asset?._ref;
    const alt = previewAlt(lang);
    console.log(`\n[${lang}] ${id}`);
    console.log(`  preview asset: ${current || "(empty)"}`);
    console.log(`              -> ${assetId}${current === assetId ? "   (already set)" : ""}`);
    console.log(`  alt: ${doc.previewImage?.alt || "(empty)"}`);
    console.log(`    -> ${alt}`);
    patches.push({ id, value: { _type: "image", asset: ref(assetId), alt } });
  }

  if (!APPLY) {
    console.log("\nDry run — nothing written. Apply: node scripts/update-academgo-preview.cjs --apply");
    return;
  }
  const tx = client.transaction();
  patches.forEach((p) => tx.patch(p.id, { set: { previewImage: p.value } }));
  const res = await tx.commit();
  console.log("\nPatched:", res.results.map((r) => r.id).join(", "));
  console.log("The portfolio page and the home page block pick this up within a minute.");
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
