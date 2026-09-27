// Shared by next.config.mjs (redirects) and src/app/sitemap-old.xml/route.ts,
// which lists these sources so Google recrawls them and sees the redirect.
// One list, so a page moved here is automatically offered for recrawl.

// ─── Manual one-off redirect overrides ────────────────────────────────────────
// Add entries here when a page moves between parents (old-parent → new-parent),
// because Option B can only see the CURRENT parent and cannot derive the old path.
// Format: { source: '/old-path', destination: '/new-path', permanent: true }
// Locale-prefixed: { source: '/ru/old-slug', destination: '/ru/new-parent/old-slug', permanent: true }
// Static entries take precedence over dynamic ones (first-match wins in Next.js).
// ──────────────────────────────────────────────────────────────────────────────
export const STATIC_REDIRECTS = [
  // Orphan blog URL — no blog document exists with this slug; the correct page is under /portfolio/.
  // Google had it indexed at position ~95 from a previous crawl; redirect closes the loop.
  { source: '/blog/build-and-optimize-a-multilingual-real-estate-platform',    destination: '/portfolio/build-and-optimize-a-multilingual-real-estate-platform',    permanent: true },
  // The PL and RU cases have their own translated slugs — the portfolio slug is
  // NOT the English one with a locale prefix. Both of these pointed at
  // /<lang>/portfolio/build-and-optimize-… which is a 404 page (200 + noindex),
  // so an indexed URL led nowhere. Found in the Search Console export of
  // 2026-09-24; fixed 2026-09-26. When adding a locale-prefixed redirect, read
  // the slug for that language out of Sanity instead of reusing the EN one.
  { source: '/pl/blog/build-and-optimize-a-multilingual-real-estate-platform', destination: '/pl/portfolio/rozwoj-wielojezycznej-platformy-nieruchomosci-premium', permanent: true },
  { source: '/ru/blog/build-and-optimize-a-multilingual-real-estate-platform', destination: '/ru/portfolio/razrabotka-saita-dlya-agentstva-elitnoi-nedvizhimosti-na-kipre', permanent: true },

  // Merged into the core Website Development service page (2026-08-03 hub/orphan cleanup):
  // no niche, no location, no differentiating angle from the core service — direct duplicate.
  // Unique "strategic process" framing was folded into the destination page before this redirect.
  { source: '/business-website-development',                    destination: '/services/website-development',                  permanent: true },
  { source: '/pl/tworzenie-stron-internetowych-dla-firm',        destination: '/pl/oferty/tworzenie-stron-internetowych',       permanent: true },
  { source: '/ru/razrabotka-saita-dlya-biznesa',                 destination: '/ru/uslugi/razrabotka-saitov',                   permanent: true },

  // PL geo pages ended up indexed under two URL families at once —
  // /pl/lokalizacje/<country> and /pl/oferty/lokalizacje/<country> — because the
  // [...slug] route resolved a page by its last segment alone. The real chain is
  // oferty/lokalizacje (the hub /pl/lokalizacje already redirects there). Both
  // variants carry impressions in Search Console, so the flat family gets a 301
  // rather than the 404 the new path check would otherwise return.
  { source: '/pl/lokalizacje/:slug',                             destination: '/pl/oferty/lokalizacje/:slug',                   permanent: true },

  // ── Устаревшие адреса из отчёта «Excluded by noindex» (GSC, 07.09.2026) ──
  // Все восемь отдавали 404 со встроенным noindex фреймворка, из-за чего Google
  // числил их как исключённые тегом. У каждого есть живой аналог, поэтому 301,
  // а не 404: адрес уже известен Google и может нести хоть какой-то сигнал.

  // Русские слаги без языкового префикса — следы структуры до локалей.
  { source: '/kontakty',                                        destination: '/ru/kontakty',                                   permanent: true },
  { source: '/uslugi',                                          destination: '/ru/uslugi',                                     permanent: true },
  { source: '/sozdanie-saita-dlya-advokata',                    destination: '/ru/sozdanie-saita-dlya-advokata',               permanent: true },

  // Опечатка и старые английские адреса.
  { source: '/blogs',                                           destination: '/blog',                                          permanent: true },
  { source: '/contact',                                         destination: '/contacts',                                      permanent: true },
  { source: '/web-development',                                 destination: '/services/website-development',                  permanent: true },
  { source: '/seo-management',                                  destination: '/services/seo-optimization-and-strategy',        permanent: true },
  { source: '/custom-business-solutions',                       destination: '/services',                                      permanent: true },

  // Английский слаг под русским префиксом: русская версия статьи существует.
  { source: '/ru/blog/real-estate-website-cyprus-case-study',   destination: '/ru/blog/sait-agentstva-nedvizhimosti-kipr-keis', permanent: true },

  // Слаг статьи про lastmod сменён в день публикации: прежний адрес повторял
  // газетную рамку заголовка. Редирект на случай, если Google успел его увидеть.
  { source: '/blog/google-stopped-reading-sitemap-lastmod',         destination: '/blog/sitemap-lastmod',            permanent: true },
  { source: '/pl/blog/google-przestal-czytac-mape-witryny-lastmod', destination: '/pl/blog/lastmod-w-mapie-witryny', permanent: true },
  { source: '/ru/blog/google-perestal-chitat-kartu-saita-lastmod',  destination: '/ru/blog/lastmod-v-karte-saita',   permanent: true },

  // Multilingual development moved from the site root into the services tree
  // (2026-09-13). It was a root-level orphan with pageType "page", one inbound
  // link, no breadcrumbs, absent from the hub's ItemList schema and served a
  // plain WebPage instead of Service — which is why the strongest service page
  // on the site, price and client results included, had zero impressions.
  { source: '/multilingual-website-development',   destination: '/services/multilingual-website-development',      permanent: true },
  { source: '/pl/tworzenie-stron-wielojezycznych', destination: '/pl/oferty/tworzenie-stron-wielojezycznych',      permanent: true },
  { source: '/ru/razrabotka-multiyazychnogo-saita', destination: '/ru/uslugi/razrabotka-multiyazychnogo-saita',    permanent: true },

  // A Polish slug under the English prefix. Nothing emits it — not the sitemap,
  // not a document, not an hreflang tag — but Google crawled it on 8 September
  // and got the 404 page (200 + noindex). Point it at the English translation
  // of the same post, in the language its own prefix promises.
  { source: '/blog/jak-zautomatyzowalem-tworzenie-stron-w-cms', destination: '/blog/how-i-automated-website-page-production', permanent: true },

  // English has no prefix (localePrefix: "as-needed"), so /en/... is never a
  // real address — but next-intl answers the redundant prefix with a TEMPORARY
  // 307, which tells Google the move is provisional: it keeps /en/... in the
  // index and consolidates nothing. Twelve such URLs sat in "Page with
  // redirect" in the export of 2026-09-24. A redirect declared here runs
  // before the proxy, so these answer 308 instead. The wildcard sources are
  // skipped by /sitemap-old.xml, which only lists literal paths.
  { source: '/en',         destination: '/',       permanent: true },
  { source: '/en/:path*',  destination: '/:path*', permanent: true },
];
