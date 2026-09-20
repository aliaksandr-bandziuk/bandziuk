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
        allow: ["/"],
        disallow: [
          "/admin",
          "/api",
          "/_next",
          "/_assets",
          "/_static",
          "/*?gtm",
          "/*?utm",
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
