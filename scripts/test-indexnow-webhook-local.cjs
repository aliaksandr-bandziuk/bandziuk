const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const PORT = process.argv[2] || "3001";
const BASE = `http://localhost:${PORT}`;

const payload = {
  _id: "singlepage-uae",
  _type: "singlepage",
  language: "en",
  slug: { current: "website-development-uae" },
};

async function main() {
  const secret = process.env.INDEXNOW_WEBHOOK_SECRET;
  if (!secret) throw new Error("INDEXNOW_WEBHOOK_SECRET not set");

  console.log("--- wrong secret (expect 401) ---");
  const bad = await fetch(`${BASE}/api/indexnow/webhook`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer wrong-secret" },
    body: JSON.stringify(payload),
  });
  console.log("status:", bad.status, await bad.text());

  console.log("--- draft id (expect 400) ---");
  const draft = await fetch(`${BASE}/api/indexnow/webhook`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${secret}` },
    body: JSON.stringify({ ...payload, _id: "drafts.singlepage-uae" }),
  });
  console.log("status:", draft.status, await draft.text());

  console.log("--- correct secret, real geo page (expect resolved URLs, then a real IndexNow call) ---");
  const good = await fetch(`${BASE}/api/indexnow/webhook`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${secret}` },
    body: JSON.stringify(payload),
  });
  console.log("status:", good.status, await good.text());
}

main().catch((e) => { console.error(e); process.exit(1); });
