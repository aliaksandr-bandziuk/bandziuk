// scripts/dataforseo/check-relocation-serp.cjs
//
// Who actually occupies the results for the queries a legalisation or relocation
// intermediary's own clients type? Needed for the article: the argument is not
// "you need a website" but "here is the demand, and here is who is taking it
// instead of you". Also records whether an AI answer sits on top, and the
// People-Also-Ask questions, which become the article's FAQ.
//
// Usage: node scripts/dataforseo/check-relocation-serp.cjs [--budget 0.2]

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const OUT = path.resolve(__dirname, "../../research/dataforseo");
const RAW = path.join(OUT, "raw");
const LOGIN = process.env.DATAFORSEO_API_LOGIN;
const PASSWORD = process.env.DATAFORSEO_API_PASSWORD;
const budgetArg = process.argv.indexOf("--budget");
const BUDGET_USD = budgetArg > -1 ? Number(process.argv[budgetArg + 1]) : 0.2;

// Poland for PL and for Russian-in-Poland; the US for English, where the
// client-side volume for these services is largest.
const QUERIES = [
  { q: "biuro obsługi cudzoziemców", location_code: 2616, language_code: "pl" },
  { q: "zezwolenie na pracę dla cudzoziemca", location_code: 2616, language_code: "pl" },
  { q: "legalizacja zatrudnienia cudzoziemców", location_code: 2616, language_code: "pl" },
  { q: "легализация в польше", location_code: 2616, language_code: "ru" },
  { q: "карта побыту", location_code: 2616, language_code: "ru" },
  { q: "immigration services", location_code: 2840, language_code: "en" },
  { q: "relocation assistance", location_code: 2840, language_code: "en" },
  // The two queries above turned out to be the wrong intent — free legal aid and
  // state relocation subsidies. These are the commercial ones for this niche.
  { q: "immigration consultant", location_code: 2840, language_code: "en" },
  { q: "golden visa", location_code: 2840, language_code: "en" },
  { q: "relocation services", location_code: 2840, language_code: "en" },
];

let spent = 0;

async function call(payload, label) {
  const endpoint = "serp/google/organic/live/advanced";
  const h = crypto.createHash("sha1").update(endpoint + JSON.stringify(payload)).digest("hex").slice(0, 16);
  const file = path.join(RAW, `serp_reloc__${h}.json`);
  if (fs.existsSync(file)) { console.log(`cache  ${label}`); return JSON.parse(fs.readFileSync(file, "utf8")); }
  if (spent + 0.01 > BUDGET_USD) throw new Error(`Budget cap: $${spent.toFixed(4)} of $${BUDGET_USD}`);
  const res = await axios.post(`https://api.dataforseo.com/v3/${endpoint}`, [payload], { auth: { username: LOGIN, password: PASSWORD }, timeout: 120000 });
  spent += Number(res.data.cost || 0);
  fs.mkdirSync(RAW, { recursive: true });
  fs.writeFileSync(file, JSON.stringify(res.data, null, 1));
  console.log(`paid   ${label}  $${Number(res.data.cost || 0).toFixed(4)}`);
  return res.data;
}

(async () => {
  const out = [];
  for (const { q, location_code, language_code } of QUERIES) {
    const body = await call({ keyword: q, location_code, language_code, depth: 20, people_also_ask_click_depth: 1 }, `${language_code} · ${q}`);
    const result = body.tasks?.[0]?.result?.[0];
    const blocks = result?.items || [];
    const organic = blocks.filter((b) => b.type === "organic").slice(0, 10).map((b) => ({ pos: b.rank_group, domain: b.domain, title: b.title }));
    out.push({
      query: q,
      language_code,
      aiOverview: blocks.some((b) => String(b.type).includes("ai_overview")),
      blockTypes: [...new Set(blocks.map((b) => b.type))],
      paa: [...new Set(blocks.filter((b) => b.type === "people_also_ask").flatMap((b) => (b.items || []).map((i) => i.title)).filter(Boolean))],
      organic,
    });
  }
  fs.writeFileSync(path.join(OUT, "relocation-serp.json"), JSON.stringify(out, null, 1));
  console.log(`\nWritten: research/dataforseo/relocation-serp.json · paid $${spent.toFixed(4)}`);
})().catch((e) => { console.error(e.response ? JSON.stringify(e.response.data).slice(0, 400) : e.message); process.exit(1); });
