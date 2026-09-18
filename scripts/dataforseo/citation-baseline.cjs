// scripts/dataforseo/citation-baseline.cjs
//
// Baseline before the tatsianabandziuk.com case study is published: for every
// control question in research/dataforseo/case-page-recommendations.md
// (section 6), ask ChatGPT (web search on) and Perplexity, and read Google's AI
// overview from a live SERP. Record whether bandziuk.com and
// tatsianabandziuk.com are among the cited sources, and whether "Bandziuk" is
// named in the answer text.
//
// Re-run the same script after publication with a new --label: the questions,
// models and markets stay fixed, so the two files can be compared line by line.
// The cache key includes the label, so a later run makes fresh calls.
//
// Usage:
//   node scripts/dataforseo/citation-baseline.cjs --dry-run
//   node scripts/dataforseo/citation-baseline.cjs --budget 4 --label before-2026-09-18

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env.local"), quiet: true });

const ROOT = path.resolve(__dirname, "../..");
const OUT = path.join(ROOT, "research", "dataforseo");
const RAW = path.join(OUT, "raw");
const DRY_RUN = process.argv.includes("--dry-run");
const arg = (name, fallback) => { const i = process.argv.indexOf(name); return i > -1 ? process.argv[i + 1] : fallback; };
const BUDGET_USD = Number(arg("--budget", 4));
const LABEL = arg("--label", "before-2026-09-18");

const AUTH = { username: process.env.DATAFORSEO_API_LOGIN, password: process.env.DATAFORSEO_API_PASSWORD };
const OWN = ["bandziuk.com", "tatsianabandziuk.com"];

// Same markets as the keyword research: UK English, Poland, Poland in Russian.
const SERP_MARKET = { en: { location_code: 2826, language_code: "en" }, pl: { location_code: 2616, language_code: "pl" }, ru: { location_code: 2616, language_code: "ru" } };

const ENGINES = {
  chatgpt: { endpoint: "ai_optimization/chat_gpt/llm_responses/live", estimate: 0.035, payload: (q) => ({ user_prompt: q, model_name: "gpt-4.1-mini", max_output_tokens: 900, temperature: 0.2, web_search: true }) },
  perplexity: { endpoint: "ai_optimization/perplexity/llm_responses/live", estimate: 0.008, payload: (q) => ({ user_prompt: q, model_name: "sonar", max_output_tokens: 900, temperature: 0.2 }) },
  google: { endpoint: "serp/google/organic/live/advanced", estimate: 0.005, payload: (q, lang) => ({ keyword: q, ...SERP_MARKET[lang], depth: 10 }) },
};

// ---------------------------------------------------------------- questions --
function loadQuestions() {
  const md = fs.readFileSync(path.join(OUT, "case-page-recommendations.md"), "utf8");
  const section = md.split("## 6.")[1].split("\n## ")[0];
  const out = { en: [], pl: [], ru: [] };
  let lang = null;
  for (const line of section.split(/\r?\n/)) {
    const h = line.match(/^### (EN|PL|RU)/);
    if (h) { lang = h[1].toLowerCase(); continue; }
    const q = line.match(/^\d+\.\s+(\\\*\s*)?(.+)$/);
    if (lang && q) out[lang].push({ q: q[2].trim(), recommendation: Boolean(q[1]) });
  }
  return out;
}

// --------------------------------------------------------------------- spend --
let spent = 0;
let planned = 0;
async function call(engine, lang, q) {
  const e = ENGINES[engine];
  const payload = e.payload(q, lang);
  const key = crypto.createHash("sha1").update(LABEL + e.endpoint + JSON.stringify(payload)).digest("hex").slice(0, 16);
  const file = path.join(RAW, `citation_${LABEL}_${engine}__${key}.json`);
  if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, "utf8"));
  if (DRY_RUN) { planned += e.estimate; return null; }
  if (spent + e.estimate > BUDGET_USD) throw new Error(`Budget cap reached: $${spent.toFixed(4)} of $${BUDGET_USD}`);
  let body;
  try {
    body = (await axios.post(`https://api.dataforseo.com/v3/${e.endpoint}`, [payload], { auth: AUTH, timeout: 180000 })).data;
  } catch (err) {
    console.warn(`  ! ${engine} · ${lang} · ${q.slice(0, 50)}: ${err.message}`);
    return null;
  }
  spent += Number(body.cost || 0);
  if (body.tasks?.[0]?.status_code === 20000) { fs.mkdirSync(RAW, { recursive: true }); fs.writeFileSync(file, JSON.stringify(body)); }
  else console.warn(`  ! ${engine} · ${lang}: ${body.tasks?.[0]?.status_code} ${body.tasks?.[0]?.status_message}`);
  if (spent > BUDGET_USD) throw new Error(`Budget cap exceeded: $${spent.toFixed(4)} of $${BUDGET_USD}`);
  return body;
}

const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return ""; } };

function read(engine, body) {
  const res = body?.tasks?.[0]?.result?.[0];
  if (!res) return null;
  if (engine === "google") {
    const ai = (res.items || []).filter((i) => String(i.type).includes("ai_overview"));
    const refs = ai.flatMap((i) => (i.references || []).map((r) => r.url || r.domain || ""));
    const text = ai.map((i) => i.markdown || i.text || "").join(" ");
    const organic = (res.items || []).filter((i) => i.type === "organic").map((i) => i.url);
    return { answered: ai.length > 0, text, sources: refs, organic };
  }
  const sections = (res.items || []).flatMap((i) => i.sections || []);
  return { answered: true, text: sections.map((s) => s.text || "").join("\n"), sources: sections.flatMap((s) => (s.annotations || []).map((a) => a.url || "")).filter(Boolean) };
}

// ----------------------------------------------------------------------- main --
async function main() {
  if (!AUTH.username) throw new Error("DataForSEO credentials not found in .env.local");
  const questions = loadQuestions();
  const total = Object.values(questions).reduce((a, l) => a + l.length, 0);
  console.log(`${DRY_RUN ? "DRY RUN · " : ""}label ${LABEL} · ${total} questions (en ${questions.en.length}, pl ${questions.pl.length}, ru ${questions.ru.length}) · cap $${BUDGET_USD}`);
  const bal = (await axios.get("https://api.dataforseo.com/v3/appendix/user_data", { auth: AUTH })).data?.tasks?.[0]?.result?.[0]?.money?.balance;
  console.log(`account balance: $${Number(bal).toFixed(2)}`);

  const rows = [];
  for (const lang of ["en", "pl", "ru"]) {
    for (const { q, recommendation } of questions[lang]) {
      const row = { lang, q, recommendation };
      for (const engine of Object.keys(ENGINES)) {
        const r = read(engine, await call(engine, lang, q));
        if (!r) { row[engine] = null; continue; }
        const hosts = r.sources.map(host);
        row[engine] = {
          answered: r.answered,
          cited: Object.fromEntries(OWN.map((d) => [d, hosts.some((h) => h === d || h.endsWith("." + d))])),
          named: /bandziuk/i.test(r.text),
          organicTop10: engine === "google" ? Object.fromEntries(OWN.map((d) => [d, (r.organic || []).some((u) => host(u) === d)])) : undefined,
          sourceCount: hosts.length,
          sources: [...new Set(hosts)].slice(0, 15),
        };
      }
      rows.push(row);
      if (!DRY_RUN) process.stdout.write(".");
    }
  }

  if (DRY_RUN) { console.log(`\nDry run: ${total * 3} calls not in cache would cost about $${planned.toFixed(2)}.`); return; }

  const count = (engine, test) => rows.filter((r) => r[engine] && test(r[engine])).length;
  const lines = [`# Замер цитируемости до публикации кейса (${LABEL})`, "", `Собрано: ${new Date().toISOString()} · вопросов: ${total} · потрачено этим запуском: $${spent.toFixed(4)}`, "", "ChatGPT: gpt-4.1-mini с веб-поиском. Perplexity: sonar. Google: ИИ-блок в живой выдаче (EN — Великобритания, PL — Польша, RU — Польша на русском). «Назван» — в тексте ответа есть «Bandziuk»; сюда попадают и однофамильцы, поэтому это грубый сигнал.", "", "| Система | Ответов | bandziuk.com в источниках | tatsianabandziuk.com в источниках | «Bandziuk» в тексте |", "|---|---|---|---|---|"];
  for (const e of Object.keys(ENGINES)) {
    lines.push(`| ${e} | ${count(e, (x) => x.answered)} | ${count(e, (x) => x.cited["bandziuk.com"])} | ${count(e, (x) => x.cited["tatsianabandziuk.com"])} | ${count(e, (x) => x.named)} |`);
  }
  lines.push("", "| Язык | Вопрос | ChatGPT | Perplexity | Google ИИ-блок |", "|---|---|---|---|---|");
  const cell = (x) => (!x ? "ошибка" : !x.answered ? "нет ответа" : [x.cited["bandziuk.com"] ? "**b.com**" : "", x.cited["tatsianabandziuk.com"] ? "**tb.com**" : "", x.named ? "назван" : ""].filter(Boolean).join(", ") || "—");
  for (const r of rows) lines.push(`| ${r.lang} | ${r.recommendation ? "★ " : ""}${r.q} | ${cell(r.chatgpt)} | ${cell(r.perplexity)} | ${cell(r.google)} |`);
  fs.writeFileSync(path.join(OUT, `citation-${LABEL}.json`), JSON.stringify({ label: LABEL, generatedAt: new Date().toISOString(), spent, rows }, null, 1));
  fs.writeFileSync(path.join(OUT, `citation-${LABEL}.md`), lines.join("\n"));
  console.log(`\nWritten research/dataforseo/citation-${LABEL}.md · this run $${spent.toFixed(4)}`);
}

main().catch((e) => { console.error(`\n${e.message}`); if (spent) console.error(`Spent before stopping: $${spent.toFixed(4)}`); process.exit(1); });
