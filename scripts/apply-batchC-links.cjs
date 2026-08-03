// scripts/apply-batchC-links.cjs
// Batch C: landings -> blog articles (inline links) + articles -> selling landing/service (relatedArticles).
const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
const { insertInlineLink, replaceText } = require("./lib/portable-text-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
function key() { return crypto.randomBytes(6).toString("hex"); }

const HREF = {
  builderVsCustom: { en: "/blog/website-builder-vs-custom-development", pl: "/pl/blog/kreator-stron-czy-strona-na-zamowienie", ru: "/ru/blog/konstruktor-ili-razrabotka-saita" },
  redesignTrafficLoss: { en: "/blog/website-redesign-without-losing-traffic", pl: "/pl/blog/redesign-strony-bez-utraty-ruchu", ru: "/ru/blog/redizayn-sayta-bez-poteri-trafika" },
  seoCost: { en: "/blog/how-much-seo-costs", pl: "/pl/blog/ile-kosztuje-pozycjonowanie-strony", ru: "/ru/blog/skolko-stoit-prodvizhenie-saita" },
  foundViaChatgpt: { en: "/blog/how-clients-find-you-through-chatgpt", pl: "/pl/blog/jak-klienci-znajduja-specjalistow-przez-chatgpt", ru: "/ru/blog/kak-klienty-nahodyat-cherez-chatgpt" },
};

const BVC = { // "a page builder or custom-built code" bridge template
  en: " Whether that comes from a page builder or custom-built code is a decision worth making deliberately, not by default.",
  pl: " To, czy to wynika z kreatora stron czy z kodu pisanego na zamówienie, to decyzja warta podjęcia świadomie, a nie domyślnie.",
  ru: " То, получено ли это через конструктор сайтов или через код, написанный под заказ, — решение, которое стоит принимать осознанно, а не по умолчанию.",
};
const BVC_ANCHOR = {
  en: "a page builder or custom-built code",
  pl: "kreatora stron czy z kodu pisanego na zamówienie",
  ru: "конструктор сайтов или через код, написанный под заказ",
};

const TEXTCONTENT_PLAN = [
  // --- builder-vs-custom: startup(natural, "a website builder"), restaurant/photographer/fitness/cleaning/language-school(bridge) ---
  { id: "singlepage-startup-website", replacements: [], links: [{ matchText: "a website builder", href: HREF.builderVsCustom.en }] },
  { id: "singlepage-startup-website.pl", replacements: [], links: [{ matchText: "kreator", href: HREF.builderVsCustom.pl }] },
  { id: "singlepage-startup-website.ru", replacements: [], links: [{ matchText: "конструктор", href: HREF.builderVsCustom.ru }] },

  { id: "singlepage-restaurant", replacements: [{ old: "a menu locked in a file participates in none of that.", new: "a menu locked in a file participates in none of that." + BVC.en }], links: [{ matchText: BVC_ANCHOR.en, href: HREF.builderVsCustom.en }] },
  { id: "singlepage-restaurant.pl", replacements: [{ old: "a menu zamknięte w pliku nie uczestniczy w tym wcale.", new: "a menu zamknięte w pliku nie uczestniczy w tym wcale." + BVC.pl }], links: [{ matchText: BVC_ANCHOR.pl, href: HREF.builderVsCustom.pl }] },
  { id: "singlepage-restaurant.ru", replacements: [{ old: "а меню, запертое в файле, в этом не участвует вовсе.", new: "а меню, запертое в файле, в этом не участвует вовсе." + BVC.ru }], links: [{ matchText: BVC_ANCHOR.ru, href: HREF.builderVsCustom.ru }] },

  { id: "singlepage-photographer", replacements: [{ old: "Everything the site does either supports that judgement or gets in its way.", new: "Everything the site does either supports that judgement or gets in its way." + BVC.en }], links: [{ matchText: BVC_ANCHOR.en, href: HREF.builderVsCustom.en }] },
  { id: "singlepage-photographer.pl", replacements: [{ old: "Wszystko, co robi strona, albo wspiera tę ocenę, albo w niej przeszkadza.", new: "Wszystko, co robi strona, albo wspiera tę ocenę, albo w niej przeszkadza." + BVC.pl }], links: [{ matchText: BVC_ANCHOR.pl, href: HREF.builderVsCustom.pl }] },
  { id: "singlepage-photographer.ru", replacements: [{ old: "Всё, что делает сайт, либо поддерживает эту оценку, либо ей мешает.", new: "Всё, что делает сайт, либо поддерживает эту оценку, либо ей мешает." + BVC.ru }], links: [{ matchText: BVC_ANCHOR.ru, href: HREF.builderVsCustom.ru }] },

  { id: "singlepage-fitness-studio", replacements: [{ old: "rarely gives a second chance.", new: "rarely gives a second chance." + BVC.en }], links: [{ matchText: BVC_ANCHOR.en, href: HREF.builderVsCustom.en }] },
  { id: "singlepage-fitness-studio.pl", replacements: [{ old: "rzadko daje drugą szansę.", new: "rzadko daje drugą szansę." + BVC.pl }], links: [{ matchText: BVC_ANCHOR.pl, href: HREF.builderVsCustom.pl }] },
  { id: "singlepage-fitness-studio.ru", replacements: [{ old: "редко даёт второй шанс.", new: "редко даёт второй шанс." + BVC.ru }], links: [{ matchText: BVC_ANCHOR.ru, href: HREF.builderVsCustom.ru }] },

  { id: "singlepage-cleaning-company", replacements: [{ old: "the second not at all.", new: "the second not at all." + BVC.en }], links: [{ matchText: BVC_ANCHOR.en, href: HREF.builderVsCustom.en }] },
  { id: "singlepage-cleaning-company.pl", replacements: [{ old: "a na drugie wcale.", new: "a na drugie wcale." + BVC.pl }], links: [{ matchText: BVC_ANCHOR.pl, href: HREF.builderVsCustom.pl }] },
  { id: "singlepage-cleaning-company.ru", replacements: [{ old: "а на второй не отвечает вовсе.", new: "а на второй не отвечает вовсе." + BVC.ru }], links: [{ matchText: BVC_ANCHOR.ru, href: HREF.builderVsCustom.ru }] },

  { id: "singlepage-language-school", replacements: [{ old: "they arrive already knowing which course they want.", new: "they arrive already knowing which course they want." + BVC.en }], links: [{ matchText: BVC_ANCHOR.en, href: HREF.builderVsCustom.en }] },
  { id: "singlepage-language-school.pl", replacements: [{ old: "trafiają od osób, które już wiedzą, jaki kurs chcą.", new: "trafiają od osób, które już wiedzą, jaki kurs chcą." + BVC.pl }], links: [{ matchText: BVC_ANCHOR.pl, href: HREF.builderVsCustom.pl }] },
  { id: "singlepage-language-school.ru", replacements: [{ old: "приходят те, кто уже знает, какой курс им нужен.", new: "приходят те, кто уже знает, какой курс им нужен." + BVC.ru }], links: [{ matchText: BVC_ANCHOR.ru, href: HREF.builderVsCustom.ru }] },

  // --- redesign-traffic-loss: platform-migration(natural), Warsaw(natural, same sentence as platform-migration link there), startup(bridge) ---
  { id: "singlepage-platform-migration", replacements: [], links: [{ matchText: "A client of mine had a redesign pushed straight to production without checks", href: HREF.redesignTrafficLoss.en }] },
  { id: "singlepage-platform-migration.pl", replacements: [], links: [{ matchText: "U mojego klienta redesign trafił prosto na produkcję bez sprawdzenia", href: HREF.redesignTrafficLoss.pl }] },
  { id: "singlepage-platform-migration.ru", replacements: [], links: [{ matchText: "У моего клиента редизайн выкатили прямо на продакшен без проверки", href: HREF.redesignTrafficLoss.ru }] },

  { id: "singlepage-web-development-warsaw", replacements: [], links: [{ matchText: "mobile performance from around 50 to 92, four language versions and local business markup", href: HREF.redesignTrafficLoss.en }] },
  { id: "singlepage-web-development-warsaw.pl", replacements: [], links: [{ matchText: "wydajność mobilna z około 50 do 92, cztery wersje językowe i znaczniki lokalnej firmy", href: HREF.redesignTrafficLoss.pl }] },
  { id: "singlepage-web-development-warsaw.ru", replacements: [], links: [{ matchText: "мобильная производительность с примерно 50 до 92, четыре языковые версии и разметка локального бизнеса", href: HREF.redesignTrafficLoss.ru }] },

  { id: "singlepage-startup-website", replacements: [{ old: "throw away the site you paid for.", new: "throw away the site you paid for. A rushed redesign carries the same risk — which is why it's worth planning one in advance." }], links: [{ matchText: "A rushed redesign", href: HREF.redesignTrafficLoss.en }] },
  { id: "singlepage-startup-website.pl", replacements: [{ old: "wyrzucenie strony, za którą zapłaciliście.", new: "wyrzucenie strony, za którą zapłaciliście. Ten sam pochopny redesign niesie podobne ryzyko — dlatego warto zaplanować go wcześniej." }], links: [{ matchText: "pochopny redesign", href: HREF.redesignTrafficLoss.pl }] },
  { id: "singlepage-startup-website.ru", replacements: [{ old: "выбросить сайт, за который вы заплатили.", new: "выбросить сайт, за который вы заплатили. Тот же риск несёт поспешный редизайн — поэтому его стоит планировать заранее." }], links: [{ matchText: "поспешный редизайн", href: HREF.redesignTrafficLoss.ru }] },

  // --- seo-cost: Warsaw(bridge), dental(bridge), veterinary(bridge), accounting(bridge) ---
  { id: "singlepage-web-development-warsaw", replacements: [{ old: "not a generic template.", new: "not a generic template. That kind of ongoing SEO work is priced separately from the build itself." }], links: [{ matchText: "ongoing SEO work", href: HREF.seoCost.en }] },
  { id: "singlepage-web-development-warsaw.pl", replacements: [{ old: "a nie uniwersalnego szablonu.", new: "a nie uniwersalnego szablonu. Taka bieżąca praca SEO jest wyceniana osobno od samej budowy strony." }], links: [{ matchText: "bieżąca praca SEO", href: HREF.seoCost.pl }] },
  { id: "singlepage-web-development-warsaw.ru", replacements: [{ old: "а не универсального шаблона.", new: "а не универсального шаблона. Такая постоянная SEO-работа оценивается отдельно от самой разработки сайта." }], links: [{ matchText: "постоянная SEO-работа", href: HREF.seoCost.ru }] },

  { id: "singlepage-dental-clinic-website", replacements: [{ old: "being invisible in the area you actually serve.", new: "being invisible in the area you actually serve. That kind of local SEO work is usually priced separately from the build itself." }], links: [{ matchText: "local SEO work", href: HREF.seoCost.en }] },
  { id: "singlepage-dental-clinic-website.pl", replacements: [{ old: "a niewidocznością w dzielnicy, którą faktycznie obsługujesz.", new: "a niewidocznością w dzielnicy, którą faktycznie obsługujesz. Tego rodzaju lokalne SEO wycenia się zwykle osobno od samej budowy strony." }], links: [{ matchText: "lokalne SEO", href: HREF.seoCost.pl }] },
  { id: "singlepage-dental-clinic-website.ru", replacements: [{ old: "часто именно здесь.", new: "часто именно здесь. Такая локальная SEO-работа обычно оценивается отдельно от самой разработки сайта." }], links: [{ matchText: "локальная SEO-работа", href: HREF.seoCost.ru }] },

  { id: "singlepage-veterinary-clinic", replacements: [{ old: "that a general services page cannot.", new: "that a general services page cannot. Getting found for those searches is ongoing SEO work, not a one-time setup." }], links: [{ matchText: "ongoing SEO work", href: HREF.seoCost.en }] },
  { id: "singlepage-veterinary-clinic.pl", replacements: [{ old: "których ogólna podstrona usług złapać nie może.", new: "których ogólna podstrona usług złapać nie może. Bycie znajdywanym w tych zapytaniach to bieżąca praca SEO, a nie jednorazowa konfiguracja." }], links: [{ matchText: "bieżąca praca SEO", href: HREF.seoCost.pl }] },
  { id: "singlepage-veterinary-clinic.ru", replacements: [{ old: "которые общая страница услуг поймать не может.", new: "которые общая страница услуг поймать не может. Быть находимым по этим запросам — постоянная SEO-работа, а не разовая настройка." }], links: [{ matchText: "постоянная SEO-работа", href: HREF.seoCost.ru }] },

  { id: "singlepage-accounting-firm", replacements: [{ old: "rather than about accountants.", new: "rather than about accountants. That kind of ongoing content and SEO work is priced separately from the build." }], links: [{ matchText: "ongoing content and SEO work", href: HREF.seoCost.en }] },
  { id: "singlepage-accounting-firm.pl", replacements: [{ old: "a nie o biuro rachunkowe.", new: "a nie o biuro rachunkowe. Taka bieżąca praca nad treścią i SEO jest wyceniana osobno od budowy strony." }], links: [{ matchText: "bieżąca praca nad treścią i SEO", href: HREF.seoCost.pl }] },
  { id: "singlepage-accounting-firm.ru", replacements: [{ old: "а не о бухгалтерских фирмах.", new: "а не о бухгалтерских фирмах. Такая постоянная работа над контентом и SEO оценивается отдельно от разработки сайта." }], links: [{ matchText: "постоянная работа над контентом и SEO", href: HREF.seoCost.ru }] },

  // --- found-via-chatgpt: startup(natural), multilingual(bridge) ---
  { id: "singlepage-startup-website", replacements: [], links: [{ matchText: "a client found me through ChatGPT", href: HREF.foundViaChatgpt.en }] },
  { id: "singlepage-startup-website.pl", replacements: [], links: [{ matchText: "klient znalazł mnie przez ChatGPT", href: HREF.foundViaChatgpt.pl }] },
  { id: "singlepage-startup-website.ru", replacements: [], links: [{ matchText: "клиент нашёл меня через ChatGPT", href: HREF.foundViaChatgpt.ru }] },

  { id: "singlepage-multilingual-website", replacements: [{ old: "This is the most common failure mode, and it's invisible: nothing looks broken, the traffic simply never arrives.", new: "This is the most common failure mode, and it's invisible: nothing looks broken, the traffic simply never arrives. Getting found in AI-generated answers depends on the same clean structure — I've seen a client get found through ChatGPT for exactly that reason." }], links: [{ matchText: "found through ChatGPT", href: HREF.foundViaChatgpt.en }] },
  { id: "singlepage-multilingual-website.pl", replacements: [{ old: "To najczęstszy scenariusz porażki i jest niewidoczny: nic nie wygląda na zepsute, ruch po prostu nie przychodzi.", new: "To najczęstszy scenariusz porażki i jest niewidoczny: nic nie wygląda na zepsute, ruch po prostu nie przychodzi. Bycie znajdywanym w odpowiedziach generowanych przez AI zależy od tej samej czystej struktury — widziałem klienta, którego znaleziono przez ChatGPT właśnie z tego powodu." }], links: [{ matchText: "znaleziono przez ChatGPT", href: HREF.foundViaChatgpt.pl }] },
  { id: "singlepage-multilingual-website.ru", replacements: [{ old: "Это самый частый сценарий провала, и он невидимый: ничего не выглядит сломанным, трафик просто не приходит.", new: "Это самый частый сценарий провала, и он невидимый: ничего не выглядит сломанным, трафик просто не приходит. Попадание в ответы, которые генерирует ИИ, зависит от той же чистой структуры — я видел клиента, которого нашли через ChatGPT именно по этой причине." }], links: [{ matchText: "нашли через ChatGPT", href: HREF.foundViaChatgpt.ru }] },
];

// article -> selling landing/service, appended to the existing relatedArticles array
const RELATED_ARTICLES_PLAN = [
  { id: "blog-builder-vs-custom", target: "singlepage-startup-website" },
  { id: "blog-builder-vs-custom.pl", target: "singlepage-startup-website.pl" },
  { id: "blog-builder-vs-custom.ru", target: "singlepage-startup-website.ru" },

  { id: "blog-redesign-traffic-loss", target: "singlepage-platform-migration" },
  { id: "blog-redesign-traffic-loss.pl", target: "singlepage-platform-migration.pl" },
  { id: "blog-redesign-traffic-loss.ru", target: "singlepage-platform-migration.ru" },

  { id: "blog-seo-cost", target: "42a469a6-28f3-4015-8b88-414c8eb3d4fa" }, // seo-optimization-and-strategy EN
  { id: "blog-seo-cost.pl", target: "77c5f5df-a6f3-49ca-8f42-f1439e3490c6" },
  { id: "blog-seo-cost.ru", target: "6a81eab0-6993-41a6-adc3-d9047a3b35a0" },

  { id: "blog-found-via-chatgpt", target: "831dc620-2863-4d55-baa0-aa874a7374ac" }, // ai-ready-seo-and-geo-optimization EN
  { id: "blog-found-via-chatgpt.pl", target: "3a759a28-4135-4731-a318-cffee1b512f0" },
  { id: "blog-found-via-chatgpt.ru", target: "1c0a4ea3-2dd6-4081-a0a0-58ee87633f71" },
];

async function main() {
  const tcIds = [...new Set(TEXTCONTENT_PLAN.map((e) => e.id))];
  const raIds = [...new Set(RELATED_ARTICLES_PLAN.map((e) => e.id))];
  const raTargetIds = [...new Set(RELATED_ARTICLES_PLAN.map((e) => e.target))];

  const [tcDocs, raDocs] = await Promise.all([
    client.fetch(`*[_id in $ids]{ _id, contentBlocks }`, { ids: tcIds }),
    client.fetch(`*[_id in $ids]{ _id, relatedArticles }`, { ids: raIds }),
  ]);
  const missingTargets = await client.fetch(`*[_id in $ids]._id`, { ids: raTargetIds });

  const tcMap = Object.fromEntries(tcDocs.map((d) => [d._id, d]));
  const raMap = Object.fromEntries(raDocs.map((d) => [d._id, d]));

  const missingTc = tcIds.filter((id) => !tcMap[id]);
  const missingRa = raIds.filter((id) => !raMap[id]);
  const missingTgt = raTargetIds.filter((id) => !missingTargets.includes(id));
  if (missingTc.length || missingRa.length || missingTgt.length) {
    console.log("Aborting — missing docs:", [...missingTc, ...missingRa, ...missingTgt].join(", "));
    process.exit(1);
  }

  const working = Object.fromEntries(tcIds.map((id) => [id, JSON.parse(JSON.stringify(tcMap[id].contentBlocks))]));
  const results = [];

  for (const entry of TEXTCONTENT_PLAN) {
    const blocks = working[entry.id];
    const tcIndices = blocks.map((b, i) => (b._type === "textContent" ? i : -1)).filter((i) => i !== -1);
    try {
      const needle = entry.replacements[0]?.old ?? entry.links[0]?.matchText;
      const targetIndex = tcIndices.find((i) =>
        blocks[i].content.some((block) => (block.children || []).map((c) => c.text || "").join("").includes(needle))
      );
      if (targetIndex === undefined) throw new Error(`no textContent block contains: "${needle}"`);
      let content = blocks[targetIndex].content;
      for (const r of entry.replacements) content = replaceText(content, r.old, r.new);
      for (const l of entry.links) content = insertInlineLink(content, l.matchText, l.href);
      blocks[targetIndex] = { ...blocks[targetIndex], content };
      results.push({ kind: "text", id: entry.id, ok: true });
    } catch (err) {
      results.push({ kind: "text", id: entry.id, ok: false, error: err.message });
    }
  }

  console.log("=== VALIDATION (textContent) ===");
  let okCount = 0;
  const failed = [];
  for (const r of results) {
    if (r.ok) okCount++;
    else { failed.push(r); console.log(`FAIL [${r.kind}] ${r.id} -- ${r.error}`); }
  }
  console.log(`${okCount}/${results.length} textContent edits validated OK.`);

  console.log("\n=== PLAN (relatedArticles) ===");
  for (const entry of RELATED_ARTICLES_PLAN) {
    const cur = raMap[entry.id].relatedArticles || [];
    const already = cur.some((r) => r._ref === entry.target);
    console.log(`${entry.id}: relatedArticles ${cur.length} -> ${already ? cur.length + " (already present, skip)" : cur.length + 1} (+${entry.target})`);
  }

  if (failed.length) {
    console.log(`\n${failed.length} textContent edit(s) failed. Aborting — nothing was patched.`);
    process.exit(1);
  }

  if (!APPLY) {
    console.log("\nAll transformations validated successfully. Dry run only (no --apply flag) — nothing was patched.");
    return;
  }

  console.log("\n=== PATCHING (textContent) ===");
  for (const id of tcIds) {
    await client.patch(id).set({ contentBlocks: working[id] }).commit();
    console.log(`Patched ${id}`);
  }

  console.log("\n=== PATCHING (relatedArticles) ===");
  for (const entry of RELATED_ARTICLES_PLAN) {
    const cur = raMap[entry.id].relatedArticles || [];
    if (cur.some((r) => r._ref === entry.target)) {
      console.log(`Skipped ${entry.id} (already references ${entry.target})`);
      continue;
    }
    const newArr = [...cur, { _key: key(), _type: "reference", _ref: entry.target }];
    await client.patch(entry.id).set({ relatedArticles: newArr }).commit();
    console.log(`Patched ${entry.id}`);
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
