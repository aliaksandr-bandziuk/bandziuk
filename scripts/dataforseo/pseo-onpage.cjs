// scripts/dataforseo/pseo-onpage.cjs
//
// Проверка существующих страниц по правилу владельца: ключевые слова стоят в
// заголовках, а не в теле и не в meta title.
//
//   — главный запрос страницы (самый частотный из закреплённых за ней) обязан
//     стоять в H1 целиком;
//   — каждая дополнительная формулировка обязана стоять в H1 или в одном из
//     подзаголовков H2/H3.
//
// Зачем отдельно от плана работ. План работ отвечает на вопрос «нужно ли
// переименовать страницу под другой запрос» — и на него ответ ноль. Но он
// засчитывал страницу закрытой, если запрос стоял хоть где-то: в meta title,
// в первом абзаце. Это мягче правила владельца. Пример: /pl/strona-dla-hotelu —
// H1 «Tworzenie strony dla hotelu», а «strona internetowa dla hotelu» стоит
// только в meta title.
//
// Читает research/pseo/core.csv, site-inventory.csv и grid-<lang>.csv.
// API и Sanity не вызывает, ничего не меняет.
//
//   node scripts/dataforseo/pseo-onpage.cjs

const fs = require("fs");
const path = require("path");
const { tokenSet } = require("./pseo-lang.cjs");

const ROOT = path.resolve(__dirname, "../..");
const DIR = path.join(ROOT, "research", "pseo");
const LANGS = ["en", "pl", "ru"];
const PREFIX = { en: "/", pl: "/pl/", ru: "/ru/" };

function parseLine(line) {
  const out = [];
  let cur = "";
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') { if (inQ && line[i + 1] === '"') { cur += '"'; i++; } else inQ = !inQ; }
    else if (c === "," && !inQ) { out.push(cur); cur = ""; }
    else cur += c;
  }
  out.push(cur);
  return out;
}

function readCsv(file) {
  if (!fs.existsSync(file)) return [];
  const lines = fs.readFileSync(file, "utf8").replace(/^﻿/, "").split(/\r?\n/).filter((l) => l.trim() !== "");
  const head = parseLine(lines[0]);
  return lines.slice(1).map((l) => {
    const cells = parseLine(l);
    const row = {};
    head.forEach((h, i) => { row[h] = cells[i] == null ? "" : cells[i]; });
    return row;
  });
}

function writeCsv(file, cols, rows) {
  const esc = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
  fs.writeFileSync(file, [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n", "utf8");
}

/** Все слова запроса стоят в строке (с учётом окончаний и синонимов). */
function inLine(lang, query, line) {
  const q = tokenSet(query, lang, true);
  const l = tokenSet(line, lang, true);
  if (!q.size) return false;
  for (const x of q) if (!l.has(x)) return false;
  return true;
}

function main() {
  const core = readCsv(path.join(DIR, "core.csv"));
  const inv = readCsv(path.join(DIR, "site-inventory.csv"));
  if (!core.length || !inv.length) { console.error("Нужны core.csv и site-inventory.csv в research/pseo/."); process.exit(1); }

  // частота каждой формулировки
  const vol = {};
  for (const lang of LANGS) {
    vol[lang] = new Map();
    for (const r of readCsv(path.join(DIR, `grid-${lang}.csv`))) vol[lang].set(r.keyword, Number(r.volume) || 0);
  }

  // страницы сайта по (язык, слаг)
  const pages = new Map();
  for (const r of inv) {
    if (r.type !== "singlepage") continue;
    for (const lang of LANGS) {
      const slug = r[`slug_${lang}`];
      if (!slug) continue;
      pages.set(`${lang}|${slug}`, {
        lang, slug,
        // Настоящий H1: heading, если задан, иначе title — и только когда
        // шапка страницы включена. Название документа (title) H1 не равно:
        // у части страниц H1 переопределён полем heading.
        h1: r[`h1_${lang}`] != null ? r[`h1_${lang}`] : (r[`title_${lang}`] || ""),
        h1field: r[`h1field_${lang}`] || "title",
        meta: r[`meta_${lang}`] || "",
        headings: (r[`headings_${lang}`] || "").split(" | ").filter(Boolean),
      });
    }
  }

  // Запросы, закреплённые за каждой страницей, берутся из плана работ, а не
  // из ядра: в плане уже применены барьеры услуги, отрасли, географии и
  // проверка каннибализации. Так страница про автоэкспорт не может «владеть»
  // запросом про переводчиков.
  const plan = readCsv(path.join(DIR, "workplan.csv"));
  const assigned = new Map();
  for (const r of plan) {
    if (!["ничего не делать", "уже содержит", "править"].includes(r.action)) continue;
    if (!r.existing_url) continue;
    const slug = r.existing_url.replace(/^\/(pl|ru)\//, "").replace(/^\//, "");
    const id = `${r.lang}|${slug}`;
    if (!pages.has(id)) continue;
    // запрос, закреплённый за другой страницей, сюда не относится
    if (r.reason.startsWith("запрос уже закреплён")) continue;
    if (!assigned.has(id)) assigned.set(id, new Map());
    const m = assigned.get(id);
    // Только измеренный спрос: формулировки, которые придумало правило трёх
    // языков, в подзаголовках требовать бессмысленно — их никто не ищет.
    const add = (q, v) => { if (q && v > 0 && !m.has(q)) m.set(q, v); };
    add(r.head, Number(r.volume) || 0);
    for (const v of String(r.variants_for_h2 || "").split(" | ").filter(Boolean)) add(v, vol[r.lang].get(v) || 0);
  }
  for (const [id, m] of [...assigned]) if (!m.size) assigned.delete(id);

  const rows = [];
  for (const [id, queries] of assigned) {
    const p = pages.get(id);
    const list = [...queries.entries()].sort((a, b) => b[1] - a[1]);
    const [primary, primaryVol] = list[0];

    const h1ok = inLine(p.lang, primary, p.h1);
    const missing = [];
    for (const [q, v] of list) {
      if (q === primary) continue;
      const covered = inLine(p.lang, q, p.h1) || p.headings.some((h) => inLine(p.lang, q, h));
      if (!covered) missing.push({ q, v });
    }

    if (h1ok && !missing.length) continue;

    rows.push({
      lang: p.lang,
      url: `${PREFIX[p.lang]}${p.slug}`,
      h1_now: p.h1 || "— нет H1 —",
      h1_field: p.h1field,
      primary,
      primary_volume: primaryVol,
      h1_change: h1ok ? "" : "главный запрос не в H1",
      in_meta: inLine(p.lang, primary, p.meta) ? "да" : "",
      missing_in_headings: missing.map((m) => `${m.q} (${m.v})`).join(" | "),
      missing_count: missing.length,
      missing_volume: missing.reduce((n, m) => n + m.v, 0),
    });
  }

  rows.sort((a, b) => (b.primary_volume + b.missing_volume) - (a.primary_volume + a.missing_volume));
  writeCsv(path.join(DIR, "onpage.csv"),
    ["lang", "url", "h1_now", "h1_field", "primary", "primary_volume", "h1_change", "in_meta", "missing_count", "missing_volume", "missing_in_headings"],
    rows);

  const lines = [];
  const say = (l = "") => { console.log(l); lines.push(l); };
  const h1 = rows.filter((r) => r.h1_change);
  const h2 = rows.filter((r) => r.missing_count);

  say("# Правка существующих страниц: ключевые слова в заголовках");
  say("");
  say(`Страниц с закреплёнными запросами: ${assigned.size}. Требуют правки: ${rows.length}.`);
  say("");
  say("| что не так | страниц |");
  say("| --- | --- |");
  say(`| главный запрос не в H1 | ${h1.length} |`);
  say(`| формулировки не в подзаголовках H2/H3 | ${h2.length} |`);
  say("");
  for (const lang of LANGS) {
    const sel = rows.filter((r) => r.lang === lang);
    say(`- ${lang}: ${sel.length} страниц, из них H1 — ${sel.filter((r) => r.h1_change).length}`);
  }
  say("");
  say("## Главный запрос не в H1");
  say("");
  for (const r of h1.slice(0, 60)) {
    say(`- \`${r.url}\` — H1 «${r.h1_now}» → нужен «${r.primary}» (${r.primary_volume}/мес)${r.in_meta ? ", в meta title уже есть" : ""}`);
  }
  say("");
  say("## Формулировки, которых нет в подзаголовках");
  say("");
  for (const r of h2.slice(0, 60)) {
    say(`- \`${r.url}\` — ${r.missing_in_headings}`);
  }
  say("");
  say("Полностью: research/pseo/onpage.csv");
  fs.writeFileSync(path.join(DIR, "onpage.md"), lines.join("\n") + "\n", "utf8");
}

main();
