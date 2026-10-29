import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // SEO-tool crawlers that build third-party link and audit databases. They
      // bring no visitors and no search or AI visibility, only Vercel usage.
      // Blocking them does not hide the site's backlinks in those tools: links
      // TO the site are found by crawling other sites.
      //
      // Deliberately NOT listed: Googlebot, Bingbot, YandexBot (search and
      // IndexNow), GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot,
      // PerplexityBot, Google-Extended, Applebot (the AI answers this site is
      // optimising for), and facebookexternalhit, LinkedInBot, Twitterbot,
      // WhatsApp (link previews when the owner shares a page).
      {
        userAgent: [
          "MJ12bot",
          "DotBot",
          "BLEXBot",
          "serpstatbot",
          "Barkrowler",
          "SeekportBot",
          "MegaIndex.ru",
          "PetalBot",
          "Bytespider",
          "ImagesiftBot",
        ],
        disallow: ["/"],
      },
      {
        userAgent: "*",
        // «/_next/static/» is allowed above the «/_next» rule below: Google
        // matches the most specific rule, not the first one. Blocking it blocked
        // the site's CSS and JS as well as its fonts — ten of those fonts sat in
        // «Blocked by robots.txt» on 29.10.2026 — and Google renders pages
        // before deciding to index them. The dynamic parts of /_next stay shut.
        allow: ["/", "/_next/static/"],
        disallow: [
          "/admin",
          "/api",
          "/_next",
          "/_assets",
          "/_static",
          "/*?gtm",
          // "/*?utm" was here until 2026-10-12. Every link in the September
          // posts on LinkedIn, dev.to, Medium and X carries a utm_source, so
          // Google met those URLs, could not fetch them, and filed ten of them
          // under "Blocked by robots.txt" — none of that link equity reached
          // the clean address. A UTM URL answers 200 with a canonical pointing
          // at the clean one, so it consolidates on its own; blocking only
          // stops Google from seeing that canonical. Ad-click parameters stay
          // blocked: nothing links to them.
          "/*?gclid",
          "/*?from",
          "/*?gbraid",
          "/*?matchtype=",
        ],
      },
    ],
    // теперь указываем www
    sitemap: "https://www.bandziuk.com/sitemap.xml",
    host: "https://www.bandziuk.com",
  };
}
