// One-off bulk IndexNow submission for the ~150 pages published in the last
// month (and any published since). Sourced from the LIVE sitemap endpoint —
// not a reimplementation — so the URL set is exactly what /api/sitemap
// already proves correct. Run once by hand; this is not a recurring job.
//
// With --urls it submits only the addresses listed on the command line. That
// is for a page the webhook cannot reach: it fires on Sanity document types
// (§8), so a route that exists only as code — a tool page — has no document
// to trigger it. Each URL is checked against the host first, because IndexNow
// answers 422 for anything outside it.
//
// Usage:
//   node scripts/indexnow-bulk-submit.cjs
//   node scripts/indexnow-bulk-submit.cjs --urls https://www.bandziuk.com/tools/… …

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const SITEMAP_URL = "https://www.bandziuk.com/sitemap.xml";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const HOST = "www.bandziuk.com";
const KEY_LOCATION = "https://www.bandziuk.com/indexnow-key.txt";
const MAX_URLS_PER_BATCH = 10000;

const STATUS_MEANING = {
  200: "OK — URL(s) submitted",
  202: "Accepted — key validation pending",
  400: "Bad request — invalid format",
  403: "Forbidden — key not valid or not found",
  422: "Unprocessable — URLs don't belong to host, or key mismatch",
  429: "Too many requests",
};

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Failed to fetch sitemap: HTTP ${res.status}`);
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  return Array.from(new Set(matches));
}

async function postBatch(key, urls) {
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation: KEY_LOCATION, urlList: urls }),
  });
  const label = STATUS_MEANING[res.status] ?? "Unrecognized status";
  console.log(`Batch of ${urls.length} URL(s) — HTTP ${res.status} (${label})`);
  return res.status;
}

async function main() {
  const key = process.env.INDEXNOW_KEY;
  if (!key) throw new Error("INDEXNOW_KEY is not set in .env.local");

  const flag = process.argv.indexOf("--urls");
  let urls;
  if (flag > -1) {
    urls = Array.from(new Set(process.argv.slice(flag + 1)));
    if (!urls.length) throw new Error("--urls needs at least one address");
    const foreign = urls.filter((u) => !u.startsWith(`https://${HOST}/`));
    if (foreign.length) {
      throw new Error(`not on ${HOST}, IndexNow would answer 422:\n  ${foreign.join("\n  ")}`);
    }
    console.log(`Submitting ${urls.length} URL(s) given on the command line:`);
    urls.forEach((u) => console.log(`   ${u}`));
  } else {
    urls = await fetchSitemapUrls();
    console.log(`Fetched ${urls.length} unique URL(s) from ${SITEMAP_URL}`);
  }

  const statuses = [];
  for (let i = 0; i < urls.length; i += MAX_URLS_PER_BATCH) {
    const batch = urls.slice(i, i + MAX_URLS_PER_BATCH);
    statuses.push(await postBatch(key, batch));
  }

  const allOk = statuses.every((s) => s === 200 || s === 202);
  console.log(allOk ? "Bulk submission complete." : "Bulk submission finished with non-OK status(es) — see above.");
}

main().catch((e) => {
  console.error("Bulk submission failed:", e.message);
  process.exit(1);
});
