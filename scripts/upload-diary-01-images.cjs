// scripts/upload-diary-01-images.cjs
//
// Uploads the diary #1 images to Sanity: the per-locale impression charts from
// drafts/charts-diary-01/ and the shared analytics screenshots from
// drafts/screenshots-diary-01/. Asset ids are recorded in
// drafts/_diary-01-assets.json so the assemble step can reference them without
// re-uploading.
//
//   node scripts/upload-diary-01-images.cjs --dry-run
//   node scripts/upload-diary-01-images.cjs

const fs = require("fs");
const path = require("path");
const { client } = require("./create-batch1-warsaw.cjs");

const DRAFTS = path.resolve(__dirname, "../drafts");
const DIRS = [path.join(DRAFTS, "charts-diary-01"), path.join(DRAFTS, "screenshots-diary-01")];
const MANIFEST = path.join(DRAFTS, "_diary-01-assets.json");
const DRY_RUN = process.argv.includes("--dry-run");

async function main() {
  const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, "utf8")) : {};
  const files = [];
  for (const dir of DIRS) {
    if (!fs.existsSync(dir)) throw new Error(`Not found: ${dir}`);
    for (const f of fs.readdirSync(dir).filter((f) => /\.(png|jpe?g)$/i.test(f)).sort()) {
      files.push({ name: f, full: path.join(dir, f) });
    }
  }
  if (!files.length) throw new Error("No images found");

  for (const { name, full } of files) {
    const kb = (fs.statSync(full).size / 1024).toFixed(0);
    if (manifest[name]) {
      console.log(`skip     ${name.padEnd(28)} ${kb.padStart(5)} KB -> ${manifest[name]}`);
      continue;
    }
    if (DRY_RUN) {
      console.log(`would upload ${name.padEnd(24)} ${kb.padStart(5)} KB`);
      continue;
    }
    const asset = await client.assets.upload("image", fs.createReadStream(full), { filename: name });
    manifest[name] = asset._id;
    fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
    const d = asset.metadata && asset.metadata.dimensions;
    console.log(`uploaded ${name.padEnd(28)} -> ${asset._id}${d ? `  (${d.width}x${d.height})` : ""}`);
  }
  if (!DRY_RUN) console.log(`\nManifest: drafts/_diary-01-assets.json — ${Object.keys(manifest).length} assets`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
