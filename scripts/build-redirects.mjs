// scripts/build-redirects.mjs
//
// Пересобирает список редиректов «плоский адрес → вложенный» из Sanity и
// кладёт его в src/lib/redirects/generatedRedirects.json.
//
// Зачем файл. Раньше next.config.mjs ходил в Sanity прямо во время сборки, а
// при неудачном запросе печатал предупреждение и деплоил БЕЗ этих правил. От
// сборки к сборке набор редиректов менялся, и Google ловил то петлю, то ошибку:
// 22.11.2026 в Search Console висели 20 адресов в «Ошибка переадресации» и 168
// в «Страница с переадресацией». Теперь набор зафиксирован в репозитории.
//
// Запускать после публикации страниц, рядом с build-nav:
//   node scripts/build-redirects.mjs
//
// Файл коммитится. Если его не обновить, новые вложенные страницы просто не
// получат редиректа со своего плоского адреса — старые правила при этом целы.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "src", "lib", "redirects", "generatedRedirects.json");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
  // .env.local читаем сами: скрипт запускают вручную, без next.
  const envFile = path.join(ROOT, ".env.local");
  if (fs.existsSync(envFile)) {
    for (const line of fs.readFileSync(envFile, "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?([^"\n]*)"?\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
    }
  }
}

const id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const ds = process.env.NEXT_PUBLIC_SANITY_DATASET;
const tk = process.env.SANITY_API_TOKEN;
if (!id || !ds || !tk) {
  console.error("Нет доступов к Sanity: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN");
  process.exit(1);
}

const rules = [];
const perLang = {};

for (const lang of ["en", "pl", "ru"]) {
  const query = encodeURIComponent(
    `*[_type=='singlepage' && language=='${lang}']{` +
      `"current": slug.${lang}.current,` +
      `"parent": parentPage->slug.${lang}.current` +
    `}`
  );
  let res;
  try {
    res = await fetch(
      `https://${id}.api.sanity.io/v2023-10-16/data/query/${ds}?query=${query}`,
      { headers: { Authorization: `Bearer ${tk}` }, cache: "no-store" }
    );
  } catch (err) {
    console.error(`Sanity недоступен (${err.code || err.message}) — файл не перезаписан, старый список цел`);
    process.exit(1);
  }
  if (!res.ok) {
    console.error(`Sanity ответил HTTP ${res.status} для локали ${lang} — файл не перезаписан`);
    process.exit(1);
  }
  const items = (await res.json()).result ?? [];

  const chains = {};
  items.forEach(({ current, parent }) => { if (current && !parent) chains[current] = [current]; });
  let added = true;
  while (added) {
    added = false;
    items.forEach(({ current, parent }) => {
      if (current && parent && chains[parent] && !chains[current]) {
        chains[current] = [...chains[parent], current];
        added = true;
      }
    });
  }

  const prefix = lang === "en" ? "" : `/${lang}`;
  let count = 0;
  for (const { current, parent } of items) {
    if (!current || !parent) continue;
    const chain = chains[current];
    if (!chain || chain.length < 2) continue;
    rules.push({ source: `${prefix}/${current}`, destination: `${prefix}/${chain.join("/")}`, permanent: true });
    count++;
  }
  perLang[lang] = count;
  console.log(`${lang.toUpperCase()}: правил ${count} (страниц в Sanity ${items.length})`);
}

if (!rules.length) {
  console.error("Из Sanity не пришло ни одного правила — файл не перезаписан");
  process.exit(1);
}

fs.writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), perLang, rules }, null, 1) + "\n");
console.log(`\nготово: src/lib/redirects/generatedRedirects.json, правил ${rules.length}`);
