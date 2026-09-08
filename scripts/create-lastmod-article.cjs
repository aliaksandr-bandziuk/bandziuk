// scripts/create-lastmod-article.cjs
//
// Создаёт статью про lastmod в трёх локалях.
//
// Тексты: drafts/blog-sitemap-lastmod-{EN,PL,RU}.md
// Картинка: drafts/sitemap-lastmod.jpg (1200×480, ровно 10:4)
//
// Ничего не зашито по id: категория, автор, услуги и связанные статьи
// резолвятся запросами по слагам. Если что-то не найдётся — скрипт
// останавливается и называет, что именно, вместо тихой подстановки null.
//
//   node scripts/create-lastmod-article.cjs          → сухой прогон
//   node scripts/create-lastmod-article.cjs --apply  → создаёт транзакцией
const fs = require("fs");
const path = require("path");
const groq = String.raw;
const { createClient } = require("@sanity/client");
const { mdToBlogPortableText } = require("./lib/md-to-blog-portabletext.cjs");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");
const BASE_ID = "blog-sitemap-lastmod";
const PUBLISHED_AT = "2026-09-08T12:00:00Z";
const LANGS = ["en", "pl", "ru"];
const IMAGE = "sitemap-lastmod.jpg";

const DRAFTS = {
  en: "blog-sitemap-lastmod-EN.md",
  pl: "blog-sitemap-lastmod-PL.md",
  ru: "blog-sitemap-lastmod-RU.md",
};

// Категория — «Техническое SEO». Первая редакция наследовала категорию
// у соседней статьи про индексацию и получала «Веб-разработку»: статья
// не про разработку, а про технику поиска.
const CATEGORY_TITLE = { en: "Technical SEO", pl: "Techniczne SEO", ru: "Техническое SEO" };

// excerpt — карточка в списке и шапка статьи; это не metaDescription,
// здесь нет борьбы за 160 символов.
const EXCERPT = {
  en: "A sitemap listing 415 URLs while Google has discovered 27 — with no error reported anywhere. The cause is one field most generators omit, and five minutes in Search Console tells you whether it is yours.",
  pl: "Mapa witryny wymienia 415 adresów, a Google wykrył 27 — i nigdzie nie ma żadnego błędu. Przyczyną jest jedno pole, które większość generatorów pomija; pięć minut w Search Console powie, czy to wasz przypadek.",
  ru: "Карта сайта перечисляет 415 адресов, а Google обнаружил 27 — и нигде никакой ошибки. Причина в одном поле, которое большинство генераторов не выводит; пять минут в Search Console покажут, ваш ли это случай.",
};

// Услуги под статьёй: SEO-аудит и головная услуга по видимости.
const SERVICES = {
  en: ["seo-audit", "seo-optimization-and-strategy"],
  pl: ["audyt-seo-strony-internetowej", "strategia-i-optymalizacja-seo"],
  ru: ["seo-audit-saita", "seo-optimizaciya-i-strategiya"],
};

// Связанные статьи.
const RELATED = {
  en: ["website-not-showing-in-google", "why-is-my-website-slow", "website-redesign-without-losing-traffic"],
  pl: ["strona-nie-pojawia-sie-w-google", "wolno-ladujaca-sie-strona", "redesign-strony-bez-utraty-ruchu"],
  ru: ["saita-net-v-poiske-google", "sait-medlenno-zagruzhaetsya", "redizayn-sayta-bez-poteri-trafika"],
};

// Одна контекстная ссылка в теле — на статью про индексацию.
// Якорь обязан встречаться в тексте ровно один раз.
const BODY_LINK = {
  en: { anchor: "crawled and declined", to: "website-not-showing-in-google" },
  pl: { anchor: "przeskanowana i odrzucona", to: "strona-nie-pojawia-sie-w-google" },
  ru: { anchor: "просканируют и отклонят", to: "saita-net-v-poiske-google" },
};

const ALT = {
  en: "A sitemap where only the entries carrying a lastmod value have been visited",
  pl: "Mapa witryny, w której odwiedzone zostały tylko wpisy z wartością lastmod",
  ru: "Карта сайта, в которой посещены только записи с заполненным lastmod",
};

const blogUrl = (lang, slug) => (lang === "en" ? "" : `/${lang}`) + `/blog/${slug}`;
const docId = (lang) => (lang === "en" ? BASE_ID : `${BASE_ID}.${lang}`);
const ref = (id) => ({ _type: "reference", _ref: id });
const keyedRef = (id) => ({ _type: "reference", _ref: id, _key: id });

/** Разбирает шапку черновика: Title / Slug / Meta title / Meta description + тело после ---. */
function parseDraft(file) {
  const raw = fs.readFileSync(path.resolve(__dirname, "../drafts", file), "utf8");
  const get = (label) => {
    const m = raw.match(new RegExp("^" + label + ":\\s*(.+)$", "m"));
    if (!m) throw new Error(`${file}: не найдено поле "${label}"`);
    return m[1].trim();
  };
  const idx = raw.indexOf("\n---\n");
  if (idx === -1) throw new Error(`${file}: не найден разделитель --- перед телом`);
  return {
    title: get("Title"),
    slug: get("Slug"),
    metaTitle: get("Meta title"),
    metaDescription: get("Meta description"),
    body: raw.slice(idx + 5).trim(),
  };
}

function insertAnchor(body, anchor, id) {
  const i = body.indexOf(anchor);
  if (i === -1) throw new Error(`якорь не найден: "${anchor}"`);
  if (body.indexOf(anchor, i + 1) !== -1) throw new Error(`якорь не уникален: "${anchor}"`);
  return body.slice(0, i) + `[[${anchor}|REL]]` + body.slice(i + anchor.length);
}

async function findBlog(lang, slug) {
  return client.fetch(
    groq`*[_type == "blog" && language == $lang && slug[$lang].current == $slug][0]{_id, title}`,
    { lang, slug },
  );
}
async function findPage(lang, slug) {
  return client.fetch(
    groq`*[_type == "singlepage" && language == $lang && slug[$lang].current == $slug][0]{_id, title}`,
    { lang, slug },
  );
}

async function main() {
  const report = [];
  const say = (l = "") => { console.log(l); report.push(l); };

  // ── тексты
  const parsed = {};
  for (const lang of LANGS) parsed[lang] = parseDraft(DRAFTS[lang]);

  // ── свободны ли слаги и id
  for (const lang of LANGS) {
    const clash = await findBlog(lang, parsed[lang].slug);
    if (clash) { say(`! [${lang}] слаг "${parsed[lang].slug}" занят документом ${clash._id}. Останавливаюсь.`); process.exit(1); }
    if (await client.getDocument(docId(lang))) { say(`! документ ${docId(lang)} уже существует. Останавливаюсь.`); process.exit(1); }
  }

  // ── категория, автор, услуги, связанные статьи
  const resolved = {};
  for (const lang of LANGS) {
    const cats = await client.fetch(
      groq`*[_type == "category" && language == $lang && title == $title]{_id, title}`,
      { lang, title: CATEGORY_TITLE[lang] },
    );
    if (cats.length !== 1) {
      say(`! [${lang}] категория "${CATEGORY_TITLE[lang]}": найдено ${cats.length}, ожидалась одна. Останавливаюсь.`);
      process.exit(1);
    }
    const cat = { cat: cats[0]._id, catTitle: cats[0].title };

    const authorId = lang === "en" ? "author-aliaksandr-bandziuk" : `author-aliaksandr-bandziuk.${lang}`;
    const author = await client.getDocument(authorId);
    if (!author) { say(`! [${lang}] не найден автор ${authorId}. Останавливаюсь.`); process.exit(1); }

    const services = [];
    for (const s of SERVICES[lang]) {
      const d = await findPage(lang, s);
      if (!d) { say(`! [${lang}] не найдена услуга ${s}. Останавливаюсь.`); process.exit(1); }
      services.push(d);
    }
    const related = [];
    for (const s of RELATED[lang]) {
      const d = await findBlog(lang, s);
      if (!d) { say(`! [${lang}] не найдена связанная статья ${s}. Останавливаюсь.`); process.exit(1); }
      related.push(d);
    }
    resolved[lang] = { category: cat.cat, categoryTitle: cat.catTitle, authorId, services, related };
  }

  // ── тела с одной контекстной ссылкой
  const bodies = {};
  for (const lang of LANGS) {
    const { anchor, to } = BODY_LINK[lang];
    const withAnchor = insertAnchor(parsed[lang].body, anchor, to);
    const content = mdToBlogPortableText(withAnchor, { REL: blogUrl(lang, to) });
    const links = (JSON.stringify(content).match(/"link"/g) || []).length;
    if (links !== 1) { say(`! [${lang}] ожидалась 1 ссылка в теле, получено ${links}. Останавливаюсь.`); process.exit(1); }
    bodies[lang] = content;
  }

  // ── отчёт
  for (const lang of LANGS) {
    const p = parsed[lang];
    const c = bodies[lang];
    const styles = c.reduce((a, b) => { a[b.style] = (a[b.style] || 0) + 1; return a; }, {});
    say(`\n${"=".repeat(70)}\n[${lang}] ${docId(lang)}`);
    say(`  URL: ${blogUrl(lang, p.slug)}`);
    say(`  title: ${p.title}`);
    say(`  metaTitle [${p.metaTitle.length}]: ${p.metaTitle}`);
    say(`  metaDescription [${p.metaDescription.length}]`);
    say(`  excerpt [${EXCERPT[lang].length}]: ${EXCERPT[lang].slice(0, 80)}…`);
    say(`  блоков: ${c.length} (${Object.entries(styles).map(([k, v]) => k + ":" + v).join(", ")})`);
    say(`  категория: ${resolved[lang].categoryTitle}`);
    say(`  автор: ${resolved[lang].authorId}`);
    say(`  услуги: ${resolved[lang].services.map((s) => s.title).join(" | ")}`);
    say(`  связанные: ${resolved[lang].related.map((s) => s.title.slice(0, 40)).join(" | ")}`);
    say(`  ссылка в теле: «${BODY_LINK[lang].anchor}» → ${blogUrl(lang, BODY_LINK[lang].to)}`);
    say(`  alt картинки: ${ALT[lang]}`);
  }

  say(`\n${"=".repeat(70)}`);
  if (!APPLY) {
    say(`Это сухой прогон. Будет создано: ${LANGS.map(docId).join(", ")}, ${BASE_ID}.i18n`);
    say(`Картинка ${IMAGE} будет загружена в Sanity при применении.`);
    say("Применить: node scripts/create-lastmod-article.cjs --apply");
  } else {
    say("Загружаю картинку...");
    const asset = await client.assets.upload(
      "image",
      fs.createReadStream(path.resolve(__dirname, "../drafts", IMAGE)),
      { filename: IMAGE },
    );
    say(`  ассет: ${asset._id}`);

    const tx = client.transaction();
    for (const lang of LANGS) {
      const p = parsed[lang];
      const r = resolved[lang];
      tx.create({
        _id: docId(lang),
        _type: "blog",
        language: lang,
        title: p.title,
        slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: p.slug } },
        seo: { metaTitle: p.metaTitle, metaDescription: p.metaDescription },
        publishedAt: PUBLISHED_AT,
        category: ref(r.category),
        author: ref(r.authorId),
        previewImage: { _type: "image", asset: ref(asset._id), alt: ALT[lang] },
        excerpt: EXCERPT[lang],
        contentBlocks: [{ _key: "body", _type: "textContent", content: bodies[lang], textAlign: "left" }],
        serviceOffered: r.services.map((s) => keyedRef(s._id)),
        relatedArticles: r.related.map((s) => keyedRef(s._id)),
      });
    }
    tx.create({
      _id: `${BASE_ID}.i18n`,
      _type: "translation.metadata",
      documentId: BASE_ID,
      translations: LANGS.map((l) => ({ _key: l, value: ref(docId(l)) })),
    });
    const res = await tx.commit();
    say(`→ создано: ${res.results.map((r) => r.id).join(", ")}`);
  }

  const name = APPLY ? "lastmod-article-applied.txt" : "lastmod-article-dry-run.txt";
  fs.writeFileSync(path.resolve(__dirname, "../drafts/" + name), report.join("\n"), "utf8");
  console.log(`\nОтчёт: drafts/${name}`);
}

main().catch((e) => { console.error("Ошибка:", e.message); process.exit(1); });
