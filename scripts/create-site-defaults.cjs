const fs = require("fs");
const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const IMAGE_PATH = path.resolve(__dirname, "../public/images/landing-cta-photo.jpg");

async function main() {
  console.log(`${APPLY ? "Uploading" : "Would upload"} the restored car-selfie photo as the temporary default...`);
  let assetId = "PENDING";
  if (APPLY) {
    const asset = await client.assets.upload("image", fs.createReadStream(IMAGE_PATH), {
      filename: "landing-cta-default-TEMP-car-selfie.jpg",
    });
    assetId = asset._id;
    console.log(`  asset id: ${assetId}`);
  }

  const doc = {
    _id: "site-defaults",
    _type: "siteDefaults",
    title: "Site Defaults",
    landingCtaImage: {
      _type: "image",
      alt: "Aliaksandr Bandziuk",
      asset: { _type: "reference", _ref: assetId },
    },
  };

  console.log(`\n${APPLY ? "CREATING" : "WOULD CREATE"} site-defaults document`);
  console.log(JSON.stringify(doc, null, 1));

  if (APPLY) {
    await client.createOrReplace(doc);
    console.log("CREATED site-defaults");
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
