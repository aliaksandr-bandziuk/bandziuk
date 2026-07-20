// scripts/capture-portfolio-screenshots.cjs
//
// One-off helper for FUTURE portfolio projects: captures a viewport
// screenshot of each project's live website (keyFeatures.website, when
// type == "link") to use as the new flat-screenshot preview image.
//
// Does NOT upload anything to Sanity — existing preview images (the
// device-mockup collages) are staying as-is. This only writes local PNGs
// to screenshots-portfolio/<slug>.png for manual review/upload.
//
// Usage:
//   node scripts/capture-portfolio-screenshots.cjs             — capture all
//   node scripts/capture-portfolio-screenshots.cjs --dry-run   — first 3 only

const path = require("path");
const fs = require("fs");
const { createClient } = require("@sanity/client");
const { chromium } = require("playwright");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const OUT_DIR = path.resolve(__dirname, "../screenshots-portfolio");
const DRY_RUN = process.argv.includes("--dry-run");
const DRY_RUN_LIMIT = 3;
const VIEWPORT = { width: 1600, height: 1000 };

// Best-effort cookie-banner dismissal — tries a handful of common patterns,
// silently moves on if none match. Not exhaustive by design (per spec).
const COOKIE_BUTTON_SELECTORS = [
  "text=Accept all",
  "text=Accept All",
  "text=Accept Cookies",
  "text=Accept",
  "text=I agree",
  "text=I Agree",
  "text=Allow all",
  "text=Allow All",
  "text=Got it",
  "text=OK",
  "#onetrust-accept-btn-handler",
  "[id*='cookie' i] button",
  "[class*='cookie' i] button",
];

async function dismissCookieBanner(page) {
  for (const selector of COOKIE_BUTTON_SELECTORS) {
    try {
      const el = await page.$(selector);
      if (el) {
        await el.click({ timeout: 1500 });
        await page.waitForTimeout(300);
        return true;
      }
    } catch {
      // best effort — try the next pattern
    }
  }
  return false;
}

function getSlug(project) {
  return (
    project.slug?.en?.current ??
    project.slug?.[project.language]?.current ??
    Object.values(project.slug ?? {})[0]?.current ??
    project._id
  );
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const query = `*[_type == "portfolio" && language == "en"] {
    _id,
    title,
    slug,
    language,
    "websiteType": keyFeatures.website.type,
    "websiteUrl": keyFeatures.website.linkDestination
  }`;

  const projects = await client.fetch(query);
  console.log(`Fetched ${projects.length} portfolio project(s) from Sanity (language: en).`);

  if (projects.length === 0) {
    console.log("No portfolio documents found — nothing to do.");
    return;
  }

  // Sanity check: does the schema even have the website/link field wired up?
  const hasWebsiteField = projects.some((p) => p.websiteType !== undefined || p.websiteUrl !== undefined);
  if (!hasWebsiteField) {
    console.log(
      "None of the fetched documents returned a keyFeatures.website field at all — " +
        "the schema field name may have changed. Not guessing further; check " +
        "src/sanity/schemaTypes/portfolio.ts for the current field path before rerunning."
    );
    return;
  }

  const withUrl = projects.filter((p) => p.websiteType === "link" && p.websiteUrl);
  const withoutUrl = projects.filter((p) => !(p.websiteType === "link" && p.websiteUrl));

  const targets = DRY_RUN ? withUrl.slice(0, DRY_RUN_LIMIT) : withUrl;
  console.log(
    `${withUrl.length} project(s) have a live website URL.` +
      (DRY_RUN ? ` Dry run — capturing first ${targets.length}.` : ` Capturing all ${targets.length}.`)
  );

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: VIEWPORT });

  const captured = [];
  const failed = [];

  for (const project of targets) {
    const slug = getSlug(project);
    const page = await context.newPage();
    try {
      await page.goto(project.websiteUrl, { waitUntil: "networkidle", timeout: 30000 });
      await page.waitForTimeout(1500); // settle delay for late-loading hero content
      await dismissCookieBanner(page);
      await page.waitForTimeout(500);
      const outPath = path.join(OUT_DIR, `${slug}.png`);
      await page.screenshot({ path: outPath });
      captured.push({ slug, url: project.websiteUrl });
      console.log(`OK    ${slug}  ->  ${project.websiteUrl}`);
    } catch (err) {
      failed.push({ slug, url: project.websiteUrl, error: err.message.split("\n")[0] });
      console.log(`FAIL  ${slug}  ->  ${project.websiteUrl}  (${err.message.split("\n")[0]})`);
    } finally {
      await page.close();
    }
  }

  await browser.close();

  console.log("\n--- Summary ---");
  console.log(`Captured: ${captured.length}`);
  console.log(`Skipped (no URL): ${withoutUrl.length}`);
  console.log(`Failed: ${failed.length}`);

  if (withoutUrl.length) {
    console.log("\nSkipped projects (no live link configured in keyFeatures.website):");
    withoutUrl.forEach((p) => console.log(`  - ${getSlug(p)} (${p.title || "untitled"})`));
  }
  if (failed.length) {
    console.log("\nFailed captures:");
    failed.forEach((f) => console.log(`  - ${f.slug}: ${f.error}`));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
