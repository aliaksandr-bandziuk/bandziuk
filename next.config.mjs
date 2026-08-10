/** @type {import('next').NextConfig} */

// ─── Manual one-off redirect overrides ────────────────────────────────────────
// Add entries here when a page moves between parents (old-parent → new-parent),
// because Option B can only see the CURRENT parent and cannot derive the old path.
// Format: { source: '/old-path', destination: '/new-path', permanent: true }
// Locale-prefixed: { source: '/ru/old-slug', destination: '/ru/new-parent/old-slug', permanent: true }
// Static entries take precedence over dynamic ones (first-match wins in Next.js).
// ──────────────────────────────────────────────────────────────────────────────
const STATIC_REDIRECTS = [
  // Orphan blog URL — no blog document exists with this slug; the correct page is under /portfolio/.
  // Google had it indexed at position ~95 from a previous crawl; redirect closes the loop.
  { source: '/blog/build-and-optimize-a-multilingual-real-estate-platform',    destination: '/portfolio/build-and-optimize-a-multilingual-real-estate-platform',    permanent: true },
  { source: '/pl/blog/build-and-optimize-a-multilingual-real-estate-platform', destination: '/pl/portfolio/build-and-optimize-a-multilingual-real-estate-platform', permanent: true },
  { source: '/ru/blog/build-and-optimize-a-multilingual-real-estate-platform', destination: '/ru/portfolio/build-and-optimize-a-multilingual-real-estate-platform', permanent: true },

  // Merged into the core Website Development service page (2026-08-03 hub/orphan cleanup):
  // no niche, no location, no differentiating angle from the core service — direct duplicate.
  // Unique "strategic process" framing was folded into the destination page before this redirect.
  { source: '/business-website-development',                    destination: '/services/website-development',                  permanent: true },
  { source: '/pl/tworzenie-stron-internetowych-dla-firm',        destination: '/pl/oferty/tworzenie-stron-internetowych',       permanent: true },
  { source: '/ru/razrabotka-saita-dlya-biznesa',                 destination: '/ru/uslugi/razrabotka-saitov',                   permanent: true },
];

async function buildDynamicRedirects() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset  = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const token    = process.env.SANITY_API_TOKEN;

  if (!projectId || !dataset || !token) {
    console.warn(
      '[redirects] Missing Sanity env vars (NEXT_PUBLIC_SANITY_PROJECT_ID / ' +
      'NEXT_PUBLIC_SANITY_DATASET / SANITY_API_TOKEN) — dynamic redirects skipped.'
    );
    return [];
  }

  const langs = ['en', 'pl', 'ru'];
  const rules = [];

  for (const lang of langs) {
    try {
      // Fetch every singlepage doc's own slug and its IMMEDIATE parent's slug,
      // then resolve the full ancestor chain in JS below — same two-pass
      // approach as generateStaticParams() and getAllPathsForLang(), so this
      // covers arbitrary nesting depth instead of only one level.
      const query = encodeURIComponent(
        `*[_type=='singlepage' && language=='${lang}']{` +
          `"current": slug.${lang}.current,` +
          `"parent": parentPage->slug.${lang}.current` +
        `}`
      );

      const res = await fetch(
        `https://${projectId}.api.sanity.io/v2023-10-16/data/query/${dataset}?query=${query}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          cache: 'no-store', // always fetch fresh data at build time, never use Node fetch cache
        }
      );

      if (!res.ok) {
        throw new Error(`Sanity API responded with HTTP ${res.status}`);
      }

      const items = (await res.json()).result ?? [];

      // Build full ancestor-chain slug arrays, e.g. ["services","locations","uae"].
      const chains = {};
      items.forEach(({ current, parent }) => {
        if (current && !parent) chains[current] = [current];
      });
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

      // EN uses no locale prefix (localePrefix: "as-needed"), PL/RU get /{lang}
      const prefix = lang === 'en' ? '' : `/${lang}`;
      let count = 0;

      for (const { current, parent } of items) {
        // Only pages with a parent need a flat→nested redirect at all.
        if (!current || !parent) continue;
        const chain = chains[current];
        // Skip if the chain didn't fully resolve (e.g. an ancestor's slug
        // isn't filled in yet for this locale).
        if (!chain || chain.length < 2) continue;

        rules.push({
          source:      `${prefix}/${current}`,
          destination: `${prefix}/${chain.join('/')}`,
          permanent: true,
        });
        count++;
      }

      console.log(`[redirects] ${lang.toUpperCase()}: ${count} flat→nested redirects generated`);
    } catch (err) {
      console.warn(
        `[redirects] WARNING: Sanity fetch failed for locale '${lang}': ${err.message}. ` +
        `Dynamic redirects for this locale will be missing from this build.`
      );
    }
  }

  return rules;
}

const nextConfig = {
  images: {
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '**',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
        port: '',
      },
    ],
  },

  async redirects() {
    const dynamic = await buildDynamicRedirects();
    const total = STATIC_REDIRECTS.length + dynamic.length;

    if (dynamic.length === 0) {
      console.warn(
        '[redirects] WARNING: dynamic redirect list is empty — Sanity fetch likely failed ' +
        'for all locales. Verify SANITY_API_TOKEN is set in your Vercel environment variables ' +
        'and that the Sanity project is reachable from the build runner.'
      );
    } else {
      console.log(
        `[redirects] Done: ${total} total redirects ` +
        `(${dynamic.length} dynamic from Sanity + ${STATIC_REDIRECTS.length} static overrides)`
      );
    }

    // Static one-offs first so they can override any auto-derived entry
    // for the same source path.
    return [...STATIC_REDIRECTS, ...dynamic];
  },

  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
};

export default nextConfig;
