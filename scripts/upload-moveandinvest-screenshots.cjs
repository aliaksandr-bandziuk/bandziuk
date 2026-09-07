// scripts/upload-moveandinvest-screenshots.cjs
//
// Uploads the moveandinvest case-study screenshots to Sanity as image assets
// and records the resulting asset ids in a JSON file, so the portfolio-document
// script can reference them without re-uploading.
//
// Images live in drafts/screenshots-moveandinvest/ and are uploaded in the
// numeric order of their filenames (1-…, 2-…, … 12-…).
//
// Usage:
//   node scripts/upload-moveandinvest-screenshots.cjs --dry-run   list what would be uploaded
//   node scripts/upload-moveandinvest-screenshots.cjs             upload
//
// Re-running is safe: files already present in assets.json are skipped.

const fs = require("fs");
const path = require("path");
const { client } = require("./create-batch1-warsaw.cjs");

const DIR = path.resolve(__dirname, "../drafts/screenshots-moveandinvest");
const MANIFEST = path.join(DIR, "assets.json");
const DRY_RUN = process.argv.includes("--dry-run");

function listFiles() {
  return fs
    .readdirSync(DIR)
    .filter((f) => /\.(png|jpe?g)$/i.test(f))
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
}

async function main() {
  if (!fs.existsSync(DIR)) throw new Error(`Not found: ${DIR}`);

  const files = listFiles();
  if (!files.length) throw new Error(`No images in ${DIR}`);

  const manifest = fs.existsSync(MANIFEST)
    ? JSON.parse(fs.readFileSync(MANIFEST, "utf8"))
    : {};

  if (DRY_RUN) {
    for (const f of files) {
      const size = (fs.statSync(path.join(DIR, f)).size / 1024).toFixed(0);
      const state = manifest[f] ? `already uploaded -> ${manifest[f]}` : "would upload";
      console.log(`${f.padEnd(34)} ${String(size).padStart(5)} KB   ${state}`);
    }
    return;
  }

  for (const filename of files) {
    if (manifest[filename]) {
      console.log(`skip     ${filename} -> ${manifest[filename]}`);
      continue;
    }
    const asset = await client.assets.upload(
      "image",
      fs.createReadStream(path.join(DIR, filename)),
      { filename }
    );
    manifest[filename] = asset._id;
    fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
    const d = asset.metadata && asset.metadata.dimensions;
    console.log(
      `uploaded ${filename} -> ${asset._id}${d ? `  (${d.width}x${d.height})` : ""}`
    );
  }

  console.log(`\nManifest written: ${MANIFEST}`);
  console.log(Object.keys(manifest).length, "assets total");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
