/** @type {import('next').NextConfig} */

// ─── Manual one-off redirect overrides ────────────────────────────────────────
// Add entries here when a page moves between parents (old-parent → new-parent),
// because Option B can only see the CURRENT parent and cannot derive the old path.
// Format: { source: '/old-path', destination: '/new-path', permanent: true }
// Locale-prefixed: { source: '/ru/old-slug', destination: '/ru/new-parent/old-slug', permanent: true }
// Static entries take precedence over dynamic ones (first-match wins in Next.js).
// ──────────────────────────────────────────────────────────────────────────────
const STATIC_REDIRECTS = [
  // (empty — add historical parent-changed entries here as needed)
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
      // Fetch every singlepage doc that has a parentPage reference,
      // and resolve the immediate parent's slug in the same locale.
      // This covers arbitrary nesting depth for the "old flat URL → current nested URL"
      // case, because destination is always /{parentSlug}/{slug} regardless of depth.
      // NOTE: if a grandchild page ever gets a flat-URL redirect, the destination will
      // only be one level deep (/{parent}/{child}), not the full path. Add a manual
      // override in STATIC_REDIRECTS for any such 3-level case if it arises.
      const query = encodeURIComponent(
        `*[_type=='singlepage' && language=='${lang}' && defined(parentPage)]{` +
          `"slug": slug.${lang}.current,` +
          `"parentSlug": parentPage->slug.${lang}.current` +
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
      // EN uses no locale prefix (localePrefix: "as-needed"), PL/RU get /{lang}
      const prefix = lang === 'en' ? '' : `/${lang}`;
      let count = 0;

      for (const { slug, parentSlug } of items) {
        // Skip docs whose slug or whose parent's slug isn't set for this locale yet
        // (e.g. a parent document that hasn't had its RU slug filled in).
        if (!slug || !parentSlug) continue;

        rules.push({
          source:      `${prefix}/${slug}`,
          destination: `${prefix}/${parentSlug}/${slug}`,
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
