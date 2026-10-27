// Landing page fixture: Next.js development services (EN), group
// «nextjs-development-services».
// Semantic core: ref/general-services.md, group «Next.js»: nextjs development
// services 20 (tiny demand — this is the owner’s core stack and an expertise
// page). Also used naturally, unmeasured: next.js development company, next.js
// developer, hire next.js developer, headless cms website, next.js and sanity.
// Related search used: what is next js used for 210 (first H2). Not targeted:
// next js 40,500, next js documentation 880, next js lts / latest version —
// developer documentation intent, off topic. headless wordpress development
// services 20 — answered by the headless CMS H2.
// Intent: ref/intent-check-general-services.md — «nextjs development services»
// vs «website development services» 0 shared URLs, 0 shared domains → separate
// page from /services/website-development. SERP for this page: Next.js
// development companies (itransition, halo-lab, jellyfishtechnologies,
// luckymedia, iflair) → H2 «Hire a Next.js developer instead of a Next.js
// development company».
// NOT on this page: WordPress builds (/services/wordpress-development-services
// — one H2 + link); general website development (/services/website-development);
// multilingual setup in detail (/services/multilingual-website-development);
// CMS and API work in detail (/services/cms-integration-and-api-work);
// migration process (/website-platform-migration); technical SEO
// (/services/technical-seo-services); AI visibility as ongoing work
// (/services/ai-ready-seo-and-geo-optimization); maintenance
// (/services/website-maintenance-services). Online shops are not a service here.
// Owner’s rule: every page covers AI search; never say there are no clients
// from the visitor’s segment.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const nextjsDevelopmentServicesEn = {
  lang: "en",
  group: "nextjs-development-services",
  slug: "nextjs-development-services",
  parentPath: ["services"],
  pageType: "service",
  title: "Next.js development services",
  heading: "Next.js Development Services: Fast Websites on Next.js and Sanity",
  excerpt:
    "I offer Next.js development services as one developer: websites on Next.js, React and TypeScript with Sanity as the CMS, SEO set up in the code and migration from WordPress without losing rankings — at prices published up front.",
  seo: {
    metaTitle: "Next.js Developer for Websites with Sanity CMS | Bandziuk",
    metaDescription:
      "Next.js development services by one developer: React, TypeScript, Sanity CMS, SEO in code, WordPress migration with 301 redirects. Websites from 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Next.js · React · TypeScript", "Sanity headless CMS", "From 700 €"],
  heroPhonePoints: ["Fast static pages", "EN · IT · PL", "Edited in Sanity", "Request a quote"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Next.js website or landing page with Sanity CMS, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Next.js website with a headless CMS, several languages, integrations or migration from WordPress, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What Next.js development services include",
      items: [
        { _key: k("o"), iconName: "code", title: "Next.js, React and TypeScript", text: "Typed code in a repository that belongs to you" },
        { _key: k("o"), iconName: "gauge", title: "Pages generated ahead of time", text: "Served from a CDN, images resized for each screen" },
        { _key: k("o"), iconName: "search", title: "SEO and languages in the code", text: "Metadata, sitemap, hreflang, structured data" },
        { _key: k("o"), iconName: "file-text", title: "Sanity CMS for your editors", text: "Structured fields, live preview, no broken layouts" },
        { _key: k("o"), iconName: "plug", title: "Forms, CRM and Stripe", text: "Leads and payments without a separate backend" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by AI assistants", text: "Full HTML on the first request, rules for AI crawlers" },
      ],
      prices: [
        { _key: k("r"), label: "Next.js website or landing page with Sanity", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Headless CMS, languages, integrations, WordPress migration", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Websites I have built with Next.js",
      subtitle:
        "All five run on Next.js: a psychotherapist’s bilingual site moved from WordPress, my own site in three languages, a DJ’s site built from a Figma design, a salon’s course landing page with Stripe payments and a consultant’s 153-page site in English, Polish and Russian. The psychotherapist’s, the salon’s, the consultant’s and my own site are edited in Sanity.",
      picks: [
        "psychotherapist-website-milan",
        "develop-and-optimize-a-personal-website-with-seo",
        "official-website-for-dj-and-producer-sasha-dith",
        "e-commerce-landing-page-with-secured-video-access",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for a Next.js website",
      subtitle: "I reply within one business day with the list of templates and content types your site needs and a fixed price within the published ranges.",
      contextLabel: "Current website or project name",
      contextPlaceholder: "Link or a few words",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website yet", "A WordPress site", "A site on Wix, Webflow or another builder", "A Next.js site that needs work"] },
        { _key: k("z"), question: "What matters most for the new site?", options: ["Speed and Google rankings", "Several languages", "Editing content without a developer", "Payments or CRM integration"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I offer Next.js development services as an independent developer based in Warsaw: I design and build websites on Next.js, React and TypeScript, with Sanity as the headless CMS where your team edits content. It is the stack my own site runs on and the one I choose for most new projects. You work with one person who writes the code, sets up the SEO and is still reachable after launch."),

        h2("What Next.js is used for: the websites I build with it"),
        p("Next.js is a React framework that renders pages on the server or builds them in advance, so a visitor and a search engine receive finished HTML instead of an empty shell that JavaScript fills in later. It powers web apps and dashboards too, but my work with it is websites that have to be found, read and acted on:"),
        li("marketing sites for service businesses, with a page for every service and a clear way to get in touch from each one"),
        li("multilingual sites where every language has its own translated URLs"),
        li("content-heavy sites with a blog, guides or hundreds of articles that editors add every week"),
        li("personal-brand sites for consultants, therapists, artists and other specialists"),
        li("landing pages that sell a course, a consultation or a booking with online payment"),

        h2("Why a Next.js website loads fast: static generation and image optimization"),
        p("The speed comes from how pages are delivered. Most pages of a marketing site are generated once — at build time or right after an editor publishes a change — and served from a CDN close to the visitor. Nothing is assembled on each request, so there is no database query or theme rendering between the click and the page."),
        li("incremental static regeneration rebuilds a page in the background after an edit, so content stays current and nobody waits for it"),
        li("the Next.js image component serves every photo in a modern format at the size the screen actually needs"),
        li("fonts are self-hosted and load without shifting the layout"),
        li("only the JavaScript a page needs reaches the browser; static sections stay plain HTML"),
        p("The DJ and producer site I built on Next.js 14 loads in under one second; it replaced slow pages from a website builder. Speed is not an extra line in the quote — it comes from the stack and from keeping the code lean."),

        h2("SEO in a Next.js website: metadata, sitemaps, hreflang and structured data in code"),
        p("In Next.js, SEO lives in the code instead of in a stack of plugins that may conflict after an update. I set it up once, so editors cannot break it by accident:"),
        li("titles, descriptions and Open Graph images generated for every page from CMS fields, with fallbacks when a field is empty"),
        li("an XML sitemap built from the content itself, so a page appears in it the moment it is published"),
        li("hreflang links between language versions and a canonical URL on every page"),
        li("JSON-LD structured data for the organization or person, services, articles, FAQs and breadcrumbs, matching what is visible on the page"),
        li("readable URLs, 301 redirects managed in one file and real 404 responses for missing pages"),
        p(
          "Deeper work on large sites — crawl analysis, index coverage, Core Web Vitals across thousands of URLs — is described on the ",
          link("technical SEO services", "/services/technical-seo-services"),
          " page.",
        ),

        h2("Headless CMS website with Next.js and Sanity: editors change content, not the layout"),
        p("A headless CMS keeps content separate from design. In Sanity your team fills in structured fields — a heading, a price, a list of benefits, a set of FAQs — and the Next.js site decides how they look. Pasting text from a Word document or uploading an oversized photo does not break the page."),
        li("content types are modeled on your site: a service, a case study, an article, a team member, each with only the fields it needs"),
        li("a live preview shows the page before it goes public"),
        li("images are cropped around a focal point you choose, for every screen size"),
        li("translations are linked documents, so it is visible which pages still miss a language"),
        p(
          "Sanity is my default for Next.js and Sanity builds because its editing studio is code in the same repository and evolves with the site. Other headless CMS options and connections to the systems you already use are covered on the ",
          link("CMS integration and API work", "/services/cms-integration-and-api-work"),
          " page.",
        ),

        h2("Multilingual Next.js websites with translated URLs"),
        p(
          "My own site runs in English, Polish and Russian; the retail analytics consultant’s site I built has 153 pages in the same three languages; the psychotherapist’s site in Milan runs in Italian and English. In each of them every language has its own URL structure with translated slugs, hreflang tags and a language switcher that leads to the same page in the other language rather than to the home page. Texts are written for each market, not passed through a machine translator. The method in full is on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page.",
        ),

        h2("Integrations in a Next.js website: forms, CRM and Stripe payments"),
        p("Next.js runs server code next to the pages, so a website can collect leads and take payments without a separate backend to host and patch:"),
        li("forms that send leads to email, WhatsApp or a CRM, with spam protection and analytics events"),
        li("Stripe Checkout for courses, consultations or deposits"),
        li("access to paid content delivered after a successful payment"),
        li("data from external APIs — availability, prices, a listing feed — cached so pages stay fast"),
        p("For Landi Room, a beauty salon in Warsaw, I built a landing page for an online course on Next.js and Sanity with Stripe Checkout: after paying, the buyer receives a protected link to the video. The first Google Ads campaign to that page brought more than 100 course sales."),

        h2("Migration from WordPress to Next.js with 301 redirects"),
        p("Many Next.js projects start as a WordPress site that has become slow or painful to update. The content and the rankings have to survive the move. For Giuseppe, a psychotherapist in Milan, I rebuilt the site on Next.js 16 and Sanity: 468 blog posts migrated, every old URL redirected with a 301 to its new address, structured data added and explicit rules for AI crawlers written. From start to handover it took 44 working days."),
        h3("Steps of a WordPress to Next.js migration"),
        ol("Export posts, pages, images and SEO fields, and convert them into structured CMS content."),
        ol("Map every old URL to a new one, including categories, tags and media attachment pages."),
        ol("Carry over titles and descriptions, then test all redirects on a preview before launch."),
        ol("After launch, watch Search Console for 404 errors and indexing changes for several weeks."),
        p(
          "Moves from other platforms follow the same order, described on the ",
          link("website platform migration", "/website-platform-migration"),
          " page.",
        ),

        h2("Next.js or WordPress: when Next.js is overkill"),
        p(
          "Next.js does not suit every project. WordPress is the better choice when you rely on a large set of ready plugins, when your team already knows its admin panel, or when a small site will never grow beyond a few pages and needs to launch cheaply. I build on both, and the case from the WordPress side is on the ",
          link("WordPress development services", "/services/wordpress-development-services"),
          " page.",
        ),

        h2("A Next.js website that ChatGPT and Google AI Overviews can read"),
        p("AI assistants and their crawlers read HTML, and many of them do not run JavaScript. A site that assembles its text in the browser can look almost empty to them. A Next.js site rendered on the server or at build time hands over the full text of each page in the first response."),
        li("server-rendered HTML with real headings, lists and tables that a crawler parses without executing scripts"),
        li("structured data that names the business, its services and the authors of its articles"),
        li("robots.txt rules written explicitly for GPTBot, OAI-SearchBot, PerplexityBot and Google-Extended, so you decide which bots may read and which may use content for training"),
        li("an llms.txt file with a short map of the site where it is useful"),
        p(
          "Giuseppe found me through ChatGPT, and new pages of his rebuilt site already show up in ChatGPT answers. Getting mentioned in AI answers is ongoing work beyond the build; it is described on the ",
          link("AI-ready SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Hire a Next.js developer instead of a Next.js development company"),
        p("A Next.js development company assigns a project manager, a designer and frontend and backend developers. For a website that is often more people than the work needs. I do the design, the code, the CMS setup, the SEO and the launch myself, and you talk to me directly. I have worked in internet marketing since 2010 — first as a copywriter, then in SEO, then in development — so the site is planned around search demand and content, not only around components."),
        ol("Brief and structure: pages, languages, integrations and content types, with a fixed price."),
        ol("Design: the home page and one inner page agreed first, on a phone and on a desktop."),
        ol("Build: Next.js, Sanity, SEO and analytics, with work in progress on a preview URL."),
        ol("Content and launch: content entered or migrated, redirects tested, domain connected."),
        ol("Handover: a short CMS guide, the repository and all accounts in your name."),
        p(
          "Hosting usually goes on Vercel, the platform from the company behind Next.js, which builds a preview for every change; other Node.js hosting works as well. Updates and small changes after launch are covered on the ",
          link("website maintenance services", "/services/website-maintenance-services"),
          " page.",
        ),

        h2("How much does Next.js website development cost"),
        p(
          "My prices are published on the ",
          link("pricing", "/pricing"),
          " page, and design is included in both ranges:",
        ),
        li("A Next.js website or landing page with Sanity CMS, a handful of pages and a contact form: 700–1,400 €."),
        li("A Next.js website with a headless CMS, several languages, integrations such as a CRM or Stripe, or a migration from WordPress: from 2,000 €."),
        p("The price depends on the number of templates and content types more than on the number of pages: a blog with 400 posts uses a single article template. A migration adds work on the URL map and content conversion. Hosting and the CMS plan are paid by you directly to the providers, and I tell you the expected running cost before we start."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Next.js development services: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a Next.js website cost?", "With me, 700–1,400 € for a Next.js website or landing page with Sanity CMS and from 2,000 € for a site with several languages, integrations or a migration from WordPress. Design is included, and the prices are on the pricing page. After a short brief I give a fixed quote."],
          ["Is Next.js good for SEO?", "Yes, when it is set up properly. Pages arrive as finished HTML, load fast, and metadata, sitemaps, hreflang and structured data are generated in code for every page. The framework gives the control; the SEO still has to be built in, which is part of every project I deliver."],
          ["Can my team edit a Next.js website without a developer?", "Yes. Content lives in Sanity, where editors change texts, images, prices and articles in structured fields and see a preview before publishing. The layout stays intact whatever they paste in."],
          ["Can you move my WordPress site to Next.js without losing rankings?", "That is the main goal of a migration. Every old URL is mapped and redirected with a 301, titles and descriptions are carried over, and Search Console is watched after launch. On a psychotherapist’s site in Milan I moved 468 posts this way."],
          ["Where is a Next.js website hosted?", "Usually on Vercel, which builds a preview for every change and serves pages from a global CDN; other Node.js hosting is possible too. The hosting and CMS accounts are opened in your name and paid by you directly."],
          ["Can you take over an existing Next.js project?", "Yes. I read the repository first, list what needs fixing — SEO, speed, CMS setup, dependency updates — and give a fixed price for the work before starting."],
          ["Do you work with clients outside Poland?", "Yes, remotely, in English, Polish or Russian. I work on Central European Time, which overlaps with the UK and Europe for the whole day and with the US East Coast in the morning there. Invoices are issued in EUR, or in another currency by agreement."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a Next.js website: what to send me"),
        p(
          "Send a link to your current site or a few lines about the project, the languages you need, the integrations you use — CRM, payments, booking — and who will edit the content. If you have a Figma design, include it. I will reply with the list of templates and content types and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
