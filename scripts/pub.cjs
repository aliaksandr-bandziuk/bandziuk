// scripts/pub.cjs
//
// Одна команда вместо связки «npx tsc --noEmit && node scripts/replace-landing.cjs
// --fixtures a.en,a.pl,a.ru». Написан 30.10.2026 по просьбе владельца: при
// публикации кластера приходилось руками перечислять все языковые версии и
// отдельно помнить про typecheck.
//
// Что делает:
//   1) находит в src/dev-fixtures все файлы <группа>.<язык>.ts;
//   2) прогоняет tsc --noEmit (без этого битая фикстура падает уже внутри jiti,
//      с невнятной ошибкой);
//   3) вызывает scripts/replace-landing.cjs со всеми найденными фикстурами и
//      прокидывает --apply, если он передан.
//
// Использование:
//   node scripts/pub.cjs auto-repair-website             сухой прогон
//   node scripts/pub.cjs auto-repair-website --apply     запись в Sanity
//   node scripts/pub.cjs auto-repair-website --skip-tsc  без typecheck
//   node scripts/pub.cjs                                 список групп, готовых к публикации
//
// Порядок языков задан фиксированно (en, pl, ru), чтобы вывод сухого прогона
// и вывод записи всегда совпадали построчно и их можно было сравнивать глазами.

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const DIR = path.join(ROOT, "src/dev-fixtures");
const LANG_ORDER = ["en", "pl", "ru"];

const args = process.argv.slice(2);
const APPLY = args.includes("--apply");
const SKIP_TSC = args.includes("--skip-tsc");
const group = args.find((a) => !a.startsWith("--"));

// Все файлы вида <группа>.<язык>.ts. registry.ts, pt.ts и прочая обвязка
// отсекается по отсутствию языкового суффикса.
function scan() {
  const map = new Map();
  for (const f of fs.readdirSync(DIR)) {
    const m = f.match(/^(.+)\.(en|pl|ru)\.ts$/);
    if (!m) continue;
    const [, g, lang] = m;
    if (!map.has(g)) map.set(g, []);
    map.get(g).push(lang);
  }
  return map;
}

const groups = scan();

if (!group) {
  console.error("Нужна группа. Доступные:\n");
  for (const [g, langs] of [...groups].sort())
    console.error(`  ${g}  (${LANG_ORDER.filter((l) => langs.includes(l)).join(", ")})`);
  console.error("\n  node scripts/pub.cjs <группа> [--apply]");
  process.exit(1);
}

if (!groups.has(group)) {
  // Самая частая опечатка — имя файла вместо имени группы: auto-repair-website.ru
  const guess = group.replace(/\.(en|pl|ru)$/, "");
  const hint = groups.has(guess) ? `\nВероятно, имелось в виду: ${guess}` : "";
  console.error(`Группы «${group}» нет в src/dev-fixtures.${hint}`);
  console.error("Список групп: node scripts/pub.cjs");
  process.exit(1);
}

const langs = LANG_ORDER.filter((l) => groups.get(group).includes(l));
const names = langs.map((l) => `${group}.${l}`);

console.log(`Группа ${group}: ${langs.join(", ")} — ${APPLY ? "ЗАПИСЬ" : "сухой прогон"}\n`);

if (!SKIP_TSC) {
  const tsc = spawnSync("npx", ["tsc", "--noEmit"], { cwd: ROOT, stdio: "inherit", shell: true });
  if (tsc.status !== 0) {
    console.error("\ntsc упал — ничего не публикую.");
    process.exit(tsc.status || 1);
  }
  console.log("tsc OK\n");
}

const next = spawnSync(
  process.execPath,
  [path.join(__dirname, "replace-landing.cjs"), "--fixtures", names.join(","), ...(APPLY ? ["--apply"] : [])],
  { cwd: ROOT, stdio: "inherit" },
);
process.exit(next.status === null ? 1 : next.status);
