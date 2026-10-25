// scripts/dataforseo/pseo-industry-scan.cjs
//
// Сканирование НОВЫХ английских отраслей (26.10.2026, блок 2 плана владельца):
// мелкий и средний бизнес, у которого есть деньги и не всегда есть сайт.
// Для каждой отрасли — 10 шаблонов (дизайн, сайт, SEO, маркетинг), частоты
// через keywords_data/google_ads/search_volume/live (1000 фраз за вызов, ~$0.09).
//
// Кеш общий с pseo-grid.cjs: research/pseo/volumes-en.json (по фразе), уже
// оплаченные фразы повторно не покупаются.
//
// Выход: research/pseo/industry-scan-en.csv (фраза, частота, отрасль, шаблон)
//        research/pseo/industry-scan-en.md  (рейтинг отраслей)
//
// Рейтинг считается по «коммерческой сумме»: дизайн + разработка + SEO.
// «website for X», «X website» и «X marketing» показаны отдельно: у многих
// отраслей это спрос конструкторов, клиентов или информационный — решает выдача.
//
//   node scripts/dataforseo/pseo-industry-scan.cjs --dry-run
//   node scripts/dataforseo/pseo-industry-scan.cjs --budget 1
//   node scripts/dataforseo/pseo-industry-scan.cjs --set models   (fixed phrase list → industry-scan-models.md)

const fs = require("fs");
const path = require("path");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "pseo");
const VOL = path.join(OUT, "volumes-en.json");
const argv = process.argv.slice(2);
const flag = (n, d) => { const i = argv.indexOf("--" + n); return i > -1 && argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[i + 1] : d; };
const DRY_RUN = argv.includes("--dry-run");
const BUDGET_USD = Number(flag("budget", 1));
const PRICE_PER_CALL = 0.09;
const GAP_MS = 6500;

// group → industries (the form used after «for» and before «website design»)
const INDUSTRIES = {
  "health & wellness": ["chiropractors", "med spas", "plastic surgeons", "orthodontists", "dermatologists", "optometrists", "podiatrists", "audiologists", "counselors", "therapists", "occupational therapists", "speech therapists", "acupuncturists", "naturopaths", "iv therapy", "home health care", "home care agencies", "assisted living", "senior living", "urgent care", "fertility clinics", "hair transplant clinics", "aesthetic clinics"],
  "home services": ["pest control", "pool builders", "pool service", "garage door companies", "locksmiths", "moving companies", "movers", "junk removal", "tree service", "pressure washing", "carpet cleaning", "window cleaning", "gutter companies", "fence companies", "concrete contractors", "flooring companies", "cabinet makers", "kitchen remodelers", "bathroom remodelers", "remodeling contractors", "home builders", "custom home builders", "interior designers", "home inspectors", "handyman", "solar installers", "septic companies", "foundation repair", "waterproofing companies", "insulation contractors", "siding contractors", "window installers", "appliance repair", "chimney sweeps", "irrigation companies", "maid services", "house cleaning", "restoration companies", "epoxy flooring", "drywall contractors", "masonry contractors", "deck builders", "general contractors"],
  "auto": ["auto detailing", "auto body shops", "towing companies", "motorcycle dealers", "rv dealers", "boat dealers", "used car dealers", "transmission shops", "mobile mechanics", "car rental", "limo companies"],
  "professional services": ["real estate agents", "realtors", "mortgage brokers", "financial advisors", "insurance agents", "cpas", "bookkeepers", "tax preparers", "property management companies", "staffing agencies", "business coaches", "life coaches", "executive coaches", "immigration consultants", "appraisers", "title companies", "private investigators", "trucking companies", "freight brokers", "engineering firms", "surveyors", "event planners", "wedding venues", "event venues"],
  "education & kids": ["daycares", "preschools", "private schools", "montessori schools", "martial arts schools", "dance studios", "music schools", "music teachers", "swim schools", "coding bootcamps", "summer camps"],
  "fitness": ["gyms", "yoga studios", "pilates studios", "crossfit gyms", "boxing gyms", "personal training studios"],
  "food & leisure": ["breweries", "wineries", "distilleries", "coffee shops", "food trucks", "bars", "nightclubs", "golf courses", "escape rooms", "bowling alleys", "marinas", "campgrounds", "rv parks", "tour operators", "bed and breakfast"],
  "pets": ["dog groomers", "dog trainers", "pet sitters", "dog boarding", "kennels", "pet grooming"],
  "personal & creative": ["lash studios", "makeup artists", "estheticians", "artists", "musicians", "bands", "authors", "podcasters", "influencers", "djs", "videographers", "content creators"],
  "adult & creators": ["cam models", "webcam models", "onlyfans creators", "adult content creators", "adult models", "adult entertainers", "sex shops", "adult stores"],
  "retail & other": ["funeral homes", "pawn shops", "cannabis dispensaries", "dispensaries", "vape shops", "smoke shops", "garden centers", "nurseries", "bridal shops", "boutiques", "thrift stores", "liquor stores"],
};

const TEMPLATES = [
  ["design", (x) => `website design for ${x}`],
  ["design", (x) => `${x} website design`],
  ["design", (x) => `web design for ${x}`],
  ["site", (x) => `website for ${x}`],
  ["site", (x) => `${x} website`],
  ["site", (x) => `${x} websites`],
  ["seo", (x) => `seo for ${x}`],
  ["seo", (x) => `${x} seo`],
  ["seo", (x) => `local seo for ${x}`],
  ["marketing", (x) => `${x} marketing`],
];
// plus a few creator-specific phrasings measured as-is
const EXTRA = [
  ["adult & creators", "cam models", "site", "cam model website"], ["adult & creators", "cam models", "site", "personal website for cam models"],
  ["adult & creators", "onlyfans creators", "site", "onlyfans website"], ["adult & creators", "onlyfans creators", "site", "website for onlyfans"],
  ["adult & creators", "onlyfans creators", "seo", "onlyfans seo"], ["adult & creators", "adult models", "design", "adult website design"],
  ["adult & creators", "adult models", "seo", "adult seo"], ["adult & creators", "adult models", "seo", "seo for adult websites"],
  ["adult & creators", "cam models", "site", "cam girl website"], ["adult & creators", "adult content creators", "site", "website for adult content creators"],
];

// --set <name>: measure a fixed phrase list instead of industry × templates
const SETS = {
  models: [
    "linktree alternative for onlyfans", "linktree for onlyfans", "onlyfans link in bio", "link in bio for onlyfans", "nsfw link in bio",
    "allmylinks", "beacons onlyfans", "personal website for onlyfans", "onlyfans personal website", "website for onlyfans models",
    "onlyfans model website", "onlyfans landing page", "onlyfans promotion website", "onlyfans website template", "free website for onlyfans",
    "onlyfans seo", "onlyfans management agency", "onlyfans agency website", "onlyfans marketing agency", "onlyfans agency seo",
    "cam model website", "cam girl website", "personal website for cam models", "cam model personal website", "camgirl website builder",
    "webcam model website builder", "fansite builder", "fan site builder", "how to make a fansite", "create your own fan site",
    "self hosted fansite", "membership site for models", "clip store website", "sell clips on your own website", "adult membership site",
    "adult website builder", "adult website hosting", "adult friendly hosting", "adult web hosting", "adult payment processor",
    "adult website design", "adult web design", "adult web designer", "adult website developer", "adult website development",
    "adult seo", "adult seo services", "adult seo agency", "seo for adult websites", "adult content creator website",
    "website for adult creators", "nsfw website builder", "model portfolio website", "modeling portfolio website", "website for models",
    "model website template", "model website design", "models website design", "fashion model website", "personal website for models",
  ],
};
const SET = flag("set", null);

const norm = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ").trim();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function phrases() {
  if (SET) return (SETS[SET] || []).map((k) => ({ keyword: norm(k), group: SET, industry: SET, kind: "set" }));
  const out = new Map();
  for (const [group, list] of Object.entries(INDUSTRIES)) for (const ind of list) for (const [kind, t] of TEMPLATES) {
    const k = norm(t(ind)); if (!out.has(k)) out.set(k, { keyword: k, group, industry: ind, kind });
  }
  for (const [group, ind, kind, kw] of EXTRA) { const k = norm(kw); if (!out.has(k)) out.set(k, { keyword: k, group, industry: ind, kind }); }
  return [...out.values()];
}

async function main() {
  const all = phrases();
  const cache = fs.existsSync(VOL) ? new Map(Object.entries(JSON.parse(fs.readFileSync(VOL, "utf8")))) : new Map();
  const todo = all.filter((p) => !cache.has(p.keyword)).map((p) => p.keyword);
  const calls = Math.ceil(todo.length / 1000);
  console.log(`${all.length} phrases, ${all.length - todo.length} cached, ${todo.length} to buy in ${calls} call(s) ≈ $${(calls * PRICE_PER_CALL).toFixed(2)}`);
  if (DRY_RUN) return;
  if (calls * PRICE_PER_CALL > BUDGET_USD) throw new Error(`Over budget: raise --budget`);
  let spent = 0;
  for (let i = 0; i < todo.length; i += 1000) {
    const batch = todo.slice(i, i + 1000);
    if (i) await sleep(GAP_MS);
    const res = await axios.post("https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live",
      [{ keywords: batch, language_code: "en" }],
      { auth: { username: process.env.DATAFORSEO_API_LOGIN, password: process.env.DATAFORSEO_API_PASSWORD }, timeout: 300000 });
    const body = res.data; spent += Number(body.cost || 0);
    const task = body.tasks && body.tasks[0];
    if (!(body.status_code === 20000 && task && task.status_code === 20000)) { console.warn(`! batch ${i / 1000 + 1}: ${task ? task.status_message : body.status_message}`); continue; }
    for (const r of task.result || []) cache.set(norm(r.keyword), { v: r.search_volume == null ? 0 : Number(r.search_volume), c: r.competition_level || "", p: r.cpc == null ? "" : r.cpc });
    for (const k of batch) if (!cache.has(k)) cache.set(k, { v: 0, c: "", p: "" });
    console.log(`paid batch ${i / 1000 + 1}/${calls}  $${Number(body.cost || 0).toFixed(4)}`);
    fs.writeFileSync(VOL, JSON.stringify(Object.fromEntries(cache)), "utf8");
  }

  const rows = all.map((p) => { const c = cache.get(p.keyword) || { v: 0, c: "", p: "" }; return { ...p, volume: c.v, competition: c.c, cpc: c.p }; });
  const esc = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
  const cols = ["keyword", "volume", "group", "industry", "kind", "competition", "cpc"];
  fs.writeFileSync(path.join(OUT, SET ? `industry-scan-${SET}.csv` : "industry-scan-en.csv"), [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n", "utf8");

  if (SET) {
    const md = [`# Phrase set «${SET}» (EN), ` + new Date().toISOString().slice(0, 10), "", `Spent $${spent.toFixed(3)}.`, "", "| phrase | volume | competition | cpc |", "|---|---|---|---|",
      ...rows.sort((a, b) => b.volume - a.volume).map((r) => `| ${r.keyword} | ${r.volume} | ${r.competition} | ${r.cpc} |`)];
    fs.writeFileSync(path.join(OUT, `industry-scan-${SET}.md`), md.join("\n") + "\n", "utf8");
    console.log(md.join("\n"));
    return;
  }
  const by = new Map();
  for (const r of rows) {
    const k = r.industry; if (!by.has(k)) by.set(k, { industry: k, group: r.group, design: 0, seo: 0, site: 0, marketing: 0, top: [] });
    const a = by.get(k); a[r.kind] += r.volume; if (r.volume) a.top.push(`${r.keyword} ${r.volume}`);
  }
  const list = [...by.values()].map((a) => ({ ...a, commercial: a.design + a.seo })).sort((x, y) => (y.commercial + y.site / 4) - (x.commercial + x.site / 4));
  const md = ["# Industry scan (EN), " + new Date().toISOString().slice(0, 10), "",
    `Spent $${spent.toFixed(3)}. Commercial = website design phrases + SEO phrases. «site» (website for X / X website) and «marketing» are shown apart: often builders, customers or informational — the SERP decides.`, "",
    "| # | industry | group | commercial | design | seo | site | marketing | phrases with volume |", "|---|---|---|---|---|---|---|---|---|",
    ...list.map((a, i) => `| ${i + 1} | ${a.industry} | ${a.group} | ${a.commercial} | ${a.design} | ${a.seo} | ${a.site} | ${a.marketing} | ${a.top.sort((p, q) => Number(q.split(" ").pop()) - Number(p.split(" ").pop())).slice(0, 4).join("; ")} |`)];
  fs.writeFileSync(path.join(OUT, "industry-scan-en.md"), md.join("\n") + "\n", "utf8");
  console.log(md.slice(0, 80).join("\n"));
  console.log(`\nWritten: research/pseo/industry-scan-en.csv and .md (${list.length} industries)`);
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
