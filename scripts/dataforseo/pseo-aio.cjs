// scripts/dataforseo/pseo-aio.cjs
//
// Разбирает AI Overview в уже купленных ответах выдачи: кого Google цитирует
// в своём ответе и можно ли попасть туда сайтом такого размера, как
// bandziuk.com.
//
// Зачем. Сверка выдачей (pseo-serp.cjs) показала AI Overview на 41 запросе из
// 45 — девяносто один процент. Это объясняет, почему 17 606 показов дали 36
// кликов: Google отвечает сам, а органическая ссылка под развёрнутым ответом
// кликов почти не получает. Значит вопрос не «как встать в топ-10», а «как
// попасть в сам ответ», и первое, что надо выяснить — кого туда вообще берут.
//
// Скрипт читает кеш research/pseo/raw/ и НЕ ДЕЛАЕТ НИ ОДНОГО ВЫЗОВА API.
// Денег не тратит. Запускать можно сколько угодно раз.
//
// Что считает:
//   — сколько источников в среднем цитирует AI Overview
//   — какие домены цитируются чаще всего
//   — доля цитирований, доставшихся крупным площадкам против обычных сайтов
//   — совпадает ли цитирование с топ-10: если AI Overview берёт источники не
//     из первой десятки, то попасть в ответ можно и не будучи в топ-10
//
//   node scripts/dataforseo/pseo-aio.cjs

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "../..");
const DIR = path.join(ROOT, "research", "pseo");
const RAW = path.join(DIR, "raw");

const OWN = "bandziuk.com";

// Крупные площадки: попасть в цитирование наравне с ними обычному сайту
// трудно, и если ответ состоит только из них, направление закрыто.
// Список открытый и проверяемый — он не оценка, а разметка.
const BIG = [
  "wikipedia.org", "youtube.com", "reddit.com", "quora.com", "medium.com",
  "linkedin.com", "facebook.com", "instagram.com", "pinterest.com", "x.com",
  "wix.com", "squarespace.com", "shopify.com", "wordpress.com", "wordpress.org",
  "webflow.com", "canva.com", "tilda.cc", "hostinger.com", "godaddy.com",
  "google.com", "developers.google.com", "support.google.com", "microsoft.com",
  "ahrefs.com", "semrush.com", "moz.com", "hubspot.com", "mailchimp.com",
  "forbes.com", "entrepreneur.com", "techradar.com", "pcmag.com", "zapier.com",
  "elementor.com", "wpbeginner.com", "kinsta.com", "wpengine.com", "cloudflare.com",
  "skillbox.ru", "yandex.ru", "practicum.yandex.ru", "vc.ru", "habr.com", "kwork.ru",
];

const host = (url) => { try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return ""; } };
const isBig = (d) => BIG.some((b) => d === b || d.endsWith("." + b));

/** Ссылки AI Overview лежат либо на самом блоке, либо внутри его элементов. */
function aioRefs(item) {
  const out = [];
  const push = (list) => {
    for (const r of list || []) {
      const d = host(r.url || "") || String(r.domain || "").replace(/^www\./, "");
      if (d) out.push({ domain: d, title: r.title || "", url: r.url || "" });
    }
  };
  push(item.references);
  for (const sub of item.items || []) push(sub.references);
  return out;
}

function main() {
  if (!fs.existsSync(RAW)) {
    console.error("Нет research/pseo/raw/. Сначала pseo-serp.cjs.");
    process.exit(1);
  }

  const files = fs.readdirSync(RAW).filter((f) => f.startsWith("serp_google_organic") && f.endsWith(".json"));
  if (!files.length) {
    console.error("В кеше нет ответов выдачи. Сначала pseo-serp.cjs.");
    process.exit(1);
  }

  const perQuery = [];
  const domainCount = new Map();

  for (const f of files) {
    let body;
    try { body = JSON.parse(fs.readFileSync(path.join(RAW, f), "utf8")); } catch { continue; }
    const task = body.tasks && body.tasks[0];
    const res = task && task.result && task.result[0];
    if (!res) continue;

    const keyword = res.keyword || (task.data && task.data.keyword) || "?";
    const items = res.items || [];
    const aio = items.find((i) => i.type === "ai_overview");
    const organicTop10 = items.filter((i) => i.type === "organic").slice(0, 10).map((i) => host(i.url || ""));

    if (!aio) { perQuery.push({ keyword, hasAio: false }); continue; }

    const refs = aioRefs(aio);
    const uniq = [...new Set(refs.map((r) => r.domain))];
    for (const d of uniq) domainCount.set(d, (domainCount.get(d) || 0) + 1);

    perQuery.push({
      keyword,
      hasAio: true,
      refs: uniq.length,
      big: uniq.filter(isBig).length,
      inTop10: uniq.filter((d) => organicTop10.includes(d)).length,
      own: uniq.includes(OWN),
      domains: uniq,
    });
  }

  const withAio = perQuery.filter((q) => q.hasAio);
  const lines = [];
  const say = (l = "") => { console.log(l); lines.push(l); };

  say("# Кого цитирует AI Overview");
  say("");
  say(`Разобрано ответов из кеша: ${perQuery.length}. С AI Overview: ${withAio.length}.`);
  say("Вызовов API не делалось, денег не потрачено.");
  say("");

  if (!withAio.length) {
    say("Ни в одном ответе AI Overview не найден. Проверьте, что pseo-serp.cjs");
    say("запускался с эндпоинтом organic/live/advanced — обычный live такого блока не отдаёт.");
    fs.writeFileSync(path.join(DIR, "ai-overview.md"), lines.join("\n") + "\n", "utf8");
    return;
  }

  const withRefs = withAio.filter((q) => q.refs > 0);
  const avg = (arr, f) => arr.length ? (arr.reduce((n, q) => n + q[f], 0) / arr.length).toFixed(1) : "0";

  say("## Сколько источников берёт ответ");
  say("");
  if (!withRefs.length) {
    say("Блок AI Overview есть, но ссылок на источники в ответе API нет ни в одном.");
    say("Это ограничение выгрузки, а не отсутствие цитирований: ссылки в AI Overview");
    say("подгружаются отдельно и в organic/live/advanced попадают не всегда.");
    say("Чтобы увидеть их наверняка, нужен отдельный запрос с AI-режимом.");
    say("");
  } else {
    say(`Ответов со ссылками: ${withRefs.length} из ${withAio.length}.`);
    say(`Источников на ответ, в среднем: ${avg(withRefs, "refs")}.`);
    say(`Из них крупных площадок: ${avg(withRefs, "big")}.`);
    say(`Из них стоящих в топ-10 этой же выдачи: ${avg(withRefs, "inTop10")}.`);
    say("");
    say("Последняя цифра — самая важная. Если она заметно меньше общего числа");
    say("источников, значит AI Overview берёт не только из первой десятки, и");
    say("попасть в ответ можно не занимая топ-10. Если почти равна — попадание");
    say("в ответ требует сначала попасть в топ-10, и это обычное SEO.");
    say("");

    const total = withRefs.reduce((n, q) => n + q.refs, 0);
    const bigTotal = withRefs.reduce((n, q) => n + q.big, 0);
    say(`Доля цитирований, доставшихся крупным площадкам: ${((bigTotal / total) * 100).toFixed(0)}%.`);
    say("");

    say("## Кого цитируют чаще всего");
    say("");
    const top = [...domainCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 30);
    say("| домен | в скольких ответах | крупная площадка |");
    say("| --- | --- | --- |");
    for (const [d, n] of top) say(`| ${d} | ${n} | ${isBig(d) ? "да" : "" } |`);
    say("");

    const small = top.filter(([d]) => !isBig(d));
    if (small.length) {
      say("Обычные сайты в этом списке важнее крупных: они показывают, что цитируют");
      say("не только площадки. Вот они: " + small.map(([d, n]) => `${d} (${n})`).join(", ") + ".");
      say("");
    }

    const mine = withRefs.filter((q) => q.own);
    say(mine.length
      ? `## bandziuk.com цитируется в ${mine.length} ответах\n\n` + mine.map((q) => `- ${q.keyword}`).join("\n") + "\n"
      : "## bandziuk.com не цитируется ни в одном из проверенных ответов\n");
    say("");

    say("## По каждому запросу");
    say("");
    say("| запрос | источников | крупных | из топ-10 |");
    say("| --- | --- | --- | --- |");
    for (const q of withRefs.sort((a, b) => b.refs - a.refs)) {
      say(`| ${q.keyword} | ${q.refs} | ${q.big} | ${q.inTop10} |`);
    }
    say("");
  }

  const noRefs = withAio.length - withRefs.length;
  if (noRefs > 0 && withRefs.length) {
    say(`Ещё в ${noRefs} ответах блок AI Overview есть, но ссылок в выгрузке нет.`);
    say("");
  }

  fs.writeFileSync(path.join(DIR, "ai-overview.md"), lines.join("\n") + "\n", "utf8");
  console.log("\nЗаписано: research/pseo/ai-overview.md");
}

main();
