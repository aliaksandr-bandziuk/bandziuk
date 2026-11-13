// scripts/link-ai-vibe-coding-links.cjs
//
// Inbound links for «Vibe coding in production», published 12.11.2026 in EN, PL
// and RU. The article links out; nothing links back to it yet, and the menu does
// not carry blog posts.
//
// Two donors per language: the «freelancer or agency» article (the reader there is
// choosing who builds the site, and the answer «an AI and me» is the case this
// article takes apart) and the performance-and-code audit page (the reader there
// already suspects the site is slow and wants to know what a review finds).
//
// Anchors read off the live pages on 12.11.2026; the script refuses to write if an
// anchor is not found exactly once or the donor already links to the article.
//
// Usage:
//   node scripts/link-ai-vibe-coding-links.cjs            dry run
//   node scripts/link-ai-vibe-coding-links.cjs --apply    writes
const path = require("path");
const { createClient } = require("@sanity/client");
const { blockFromMarkup } = require("./lib/portable-text-links.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");

const LINKS = [
  {
    id: "blog-freelancer-or-agency",
    where: "/blog/freelancer-or-agency-for-your-website",
    href: "/blog/vibe-coding-in-production",
    anchor:
      "Then ask the uncomfortable question of a solo specialist: what happens if you disappear? A reasonable answer is specific — the code is in a repository you control, hosting and the domain are in your accounts rather than mine, documentation is in the repository, and any other developer can pick it up. If the answer is reassurance rather than mechanics, that is your signal.",
    insert:
      "There is a third answer to «who builds it» that is now common: an AI, directed by you. It works, and it has its own failure mode — [[what four months of unmeasured AI-built code cost one live site|/blog/vibe-coding-in-production]], measured end to end.",
  },
  {
    id: "26f33bcc-eaa6-4cbc-96a1-9135cf55431f",
    where: "/services/website-performance-and-code-audit",
    href: "/blog/vibe-coding-in-production",
    anchor:
      "Usually an image, a heading or a hero block. The common causes are an oversized image, a font that blocks rendering, a slow first byte from the server, and a page that renders in the browser instead of arriving ready. This is the metric most often responsible when a page «feels» slow.",
    insert:
      "Sometimes the cause is none of those and sits in what the page asks the server for. One worked example with the numbers: [[a listings page that moved 60 MB on every visit for four months|/blog/vibe-coding-in-production]].",
  },
  {
    id: "blog-freelancer-or-agency.pl",
    where: "/pl/blog/freelancer-czy-agencja-strona-internetowa",
    href: "/pl/blog/strona-internetowa-zrobiona-przez-ai",
    anchor:
      "Co warto mieć spisane niezależnie od tego, kogo wybierzesz: zakres i terminy, kto jest właścicielem kodu i treści, gdzie i na kogo rejestrowana jest domena, komu należą dostępy do hostingu i narzędzi analitycznych oraz co się dzieje, gdy współpraca się kończy. Brak tych punktów jest problemem w obie strony — sporów o jakość jest mniej niż sporów o dostępy.",
    insert:
      "Ta sama lista obowiązuje, kiedy stronę buduje AI pod twoim kierunkiem — a dochodzi do niej jeszcze jedna pozycja, pomiar: [[ile kosztowały cztery miesiące strony zrobionej przez AI, której nikt nie mierzył|/pl/blog/strona-internetowa-zrobiona-przez-ai]].",
  },
  {
    id: "1166b8b4-0d4c-4dc3-a0c2-452422445008",
    where: "/pl/oferty/audyt-wydajnosci-i-kodu",
    href: "/pl/blog/strona-internetowa-zrobiona-przez-ai",
    anchor:
      "Zwykle obraz, nagłówek albo blok powitalny. Typowe przyczyny: obraz za duży względem miejsca, font blokujący renderowanie, wolna odpowiedź serwera i strona rysowana w przeglądarce zamiast przychodzić gotowa. To ten wskaźnik najczęściej odpowiada za wrażenie, że strona jest wolna.",
    insert:
      "Bywa też tak, że przyczyną nie jest żadna z nich, tylko to, o co strona prosi serwer. Przykład z liczbami: [[lista ofert, która przy każdej wizycie przesyłała 60 MB przez cztery miesiące|/pl/blog/strona-internetowa-zrobiona-przez-ai]].",
  },
  {
    id: "blog-freelancer-or-agency.ru",
    where: "/ru/blog/frilanser-ili-studiya-dlya-saita",
    href: "/ru/blog/sait-sdelannyi-neirosetyu",
    anchor:
      "Решает тот, кто делает. В студии задача идёт от продавца к аккаунт-менеджеру, дальше к дизайнеру и разработчику. Каждая передача что-то теряет, и теряет обычно причину решения. Когда всё держит один человек, причину не нужно объяснять заново.",
    insert:
      "Есть и третий ответ на вопрос «кто делает», сегодня уже частый: нейросеть под вашим руководством. Это работает, и у этого свой способ ломаться — [[во что обошлись четыре месяца сайта, собранного нейросетью, который никто не измерял|/ru/blog/sait-sdelannyi-neirosetyu]].",
  },
  {
    id: "24354662-e684-4a9c-ad37-3e196d3b40c4",
    where: "/ru/uslugi/uskorenie-saita-i-uluchshenie-poiskovoi-vidimosti",
    href: "/ru/blog/sait-sdelannyi-neirosetyu",
    anchor:
      "Обычно это картинка, заголовок или блок в шапке. Типичные причины: изображение крупнее места, в которое ставится, шрифт, блокирующий отрисовку, медленный ответ сервера и страница, которая рисуется в браузере вместо того, чтобы приходить готовой. Именно этот показатель чаще всего и отвечает за ощущение, что сайт медленный.",
    insert:
      "Бывает и так, что причина ни одна из перечисленных, а в том, что страница просит у сервера. Разобранный пример с цифрами: [[страница списка, которая четыре месяца гоняла 60 МБ на каждый визит|/ru/blog/sait-sdelannyi-neirosetyu]].",
  },
];

const WORD_FIXES = [];

const textOf = (block) => (block.children || []).map((c) => c.text || "").join("");

/** The language and the slug a donor URL implies — all donors here sit at the root. */
const langOf = (where) => (where.startsWith("/pl/") ? "pl" : where.startsWith("/ru/") ? "ru" : "en");
const slugOf = (where) => where.split("/").filter(Boolean).pop();

/**
 * The donor document. The id is a guess built from the fixture group, which only
 * holds for pages created by create-landing.cjs; older pages carry other ids, so
 * fall back to the slug, which is what the URL actually guarantees.
 */
async function resolveDoc(link) {
  if (link.id) {
    const byId = await client.getDocument(link.id);
    if (byId) return byId;
  }
  const lang = langOf(link.where);
  return client.fetch(
    `*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug && !(_id in path("drafts.**"))][0]`,
    { lang, slug: slugOf(link.where) }
  );
}

/** Every array that holds a block whose text equals `text`, with its index. */
function findSpots(node, text, found = []) {
  if (Array.isArray(node)) {
    node.forEach((item, i) => {
      if (item && item._type === "block" && textOf(item) === text) found.push({ arr: node, index: i });
      findSpots(item, text, found);
    });
    return found;
  }
  if (node && typeof node === "object") {
    for (const k of Object.keys(node)) {
      if (k.startsWith("_") && k !== "_type") continue;
      findSpots(node[k], text, found);
    }
  }
  return found;
}

/** Every block, anywhere in the value, whose text contains `text`. */
function findContaining(node, text, found = []) {
  if (Array.isArray(node)) {
    node.forEach((item) => {
      if (item && item._type === "block" && textOf(item).includes(text)) found.push(item);
      findContaining(item, text, found);
    });
    return found;
  }
  if (node && typeof node === "object") {
    for (const k of Object.keys(node)) {
      if (k.startsWith("_") && k !== "_type") continue;
      findContaining(node[k], text, found);
    }
  }
  return found;
}

/** True when any block in the value already links to href. */
function hasLink(node, href) {
  if (Array.isArray(node)) return node.some((item) => hasLink(item, href));
  if (node && typeof node === "object") {
    if (Array.isArray(node.markDefs) && node.markDefs.some((m) => m && m.href === href)) return true;
    for (const k of Object.keys(node)) {
      if (k.startsWith("_") && k !== "_type") continue;
      if (hasLink(node[k], href)) return true;
    }
  }
  return false;
}

async function main() {
  let written = 0;
  let skipped = 0;
  const failed = [];

  for (const link of LINKS) {
    const doc = await resolveDoc(link);
    if (!doc) {
      failed.push(`${link.where}: no document found by id ${link.id} or by its slug`);
      continue;
    }
    if (hasLink(doc.contentBlocks, link.href)) {
      console.log(`${link.where} -> ${link.href}\n  already applied, skipping\n`);
      skipped += 1;
      continue;
    }

    const spots = findSpots(doc.contentBlocks, link.anchor);
    if (spots.length !== 1) {
      failed.push(`${link.where}: the anchor paragraph was found ${spots.length} times, expected once`);
      continue;
    }

    console.log(`${link.where} -> ${link.href}`);
    console.log(`  after: «${link.anchor.slice(0, 70)}…»`);
    console.log(`  insert: «${link.insert.replace(/\[\[([^|\]]+)\|[^\]]+\]\]/, "$1")}»\n`);

    if (!APPLY) continue;

    const blocks = JSON.parse(JSON.stringify(doc.contentBlocks));
    const spot = findSpots(blocks, link.anchor)[0];
    spot.arr.splice(spot.index + 1, 0, blockFromMarkup(link.insert));

    await client.patch(doc._id).ifRevisionId(doc._rev).set({ contentBlocks: blocks }).commit();

    const after = await client.getDocument(doc._id);
    if (!hasLink(after.contentBlocks, link.href)) {
      failed.push(`${link.where}: written, but the re-read does not contain the link`);
      continue;
    }
    console.log("  written and re-read OK\n");
    written += 1;
  }

  for (const fix of WORD_FIXES) {
    const doc = await client.getDocument(fix.id);
    if (!doc) {
      failed.push(`${fix.where}: document ${fix.id} not found`);
      continue;
    }
    if (findContaining(doc.contentBlocks, fix.to).length) {
      console.log(`${fix.where} word fix\n  already applied, skipping\n`);
      skipped += 1;
      continue;
    }
    const hits = findContaining(doc.contentBlocks, fix.from);
    if (hits.length !== 1) {
      failed.push(`${fix.where}: the old wording was found ${hits.length} times, expected once`);
      continue;
    }
    console.log(`${fix.where} word fix`);
    console.log(`  «${fix.from}» -> «${fix.to}»\n`);
    if (!APPLY) continue;

    const blocks = JSON.parse(JSON.stringify(doc.contentBlocks));
    const block = findContaining(blocks, fix.from)[0];
    const idx = (block.children || []).findIndex(
      (c) => c._type === "span" && (!c.marks || c.marks.length === 0) && (c.text || "").includes(fix.from)
    );
    if (idx === -1) {
      failed.push(`${fix.where}: the old wording straddles a mark boundary — not patched`);
      continue;
    }
    block.children[idx] = { ...block.children[idx], text: block.children[idx].text.replace(fix.from, fix.to) };

    await client.patch(fix.id).ifRevisionId(doc._rev).set({ contentBlocks: blocks }).commit();

    const after = await client.getDocument(fix.id);
    if (!findContaining(after.contentBlocks, fix.to).length) {
      failed.push(`${fix.where}: written, but the re-read does not contain the new wording`);
      continue;
    }
    console.log("  written and re-read OK\n");
    written += 1;
  }

  if (failed.length) {
    console.log("Problems:");
    failed.forEach((f) => console.log(`  ${f}`));
  }
  const planned = LINKS.length + WORD_FIXES.length;
  console.log(APPLY
    ? `Done: ${written} written, ${skipped} already applied, ${failed.length} failed.`
    : `Dry run — nothing written. ${planned - skipped - failed.length} would be applied. Add --apply to write.`);
  if (failed.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
