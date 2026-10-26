// Landing page fixture: WordPress development services (EN), group
// «wordpress-development-services».
// Semantic core: ref/general-services.md / general-services.csv, EN «WordPress»
// group (62 phrases, 4,950): wordpress development services 1,000 (+ the
// hyphenated «wordpress-development-services» 720) — H1, intro, H2 · wordpress
// web development services 480 · wordpress website development services 480
// (H2) · custom wordpress development services 110 (H1, H2) · wordpress website
// development cost 110 (cost H2 + FAQ) · enterprise wordpress development 90
// (H3) · wordpress theme development services 70 (H2) · wordpress plugin
// development services 40 (H2) · white label wordpress development services 40
// (H3) · custom wordpress theme development services 40 · wordpress cms
// development services 40 · headless wordpress development services 20 (one
// sentence in the Next.js H2). City/country tails (USA, Dubai, Mumbai…) are
// ignored. «wordpress seo consultant» 170 belongs to /services/seo-consultant —
// one sentence + link here.
// PAA used: «Is WordPress becoming obsolete?», «Why are people moving away from
// WordPress?» — one H2 with a fair answer. «Is WordPress an example of CMS?» —
// answered in passing in the intro of the obsolete H2.
// Intent: ref/intent-check-general-services.md — «wordpress development
// services» vs «website development services» 0/10 shared URLs, 0 shared
// domains (WordPress SERP = webdevstudios, americaneagle, elsner, themeisle…)
// → a separate page from /services/website-development, written for people
// who have already chosen WordPress.
// Proof: ScanM2, Felgilab and the tyre-storage landing are WordPress sites; the
// auto repair and education agency picks are shown for service pages, local
// SEO and multilingual structure, not called WordPress.
// NOT on this page: Next.js builds (/services/nextjs-development-services —
// short comparison + link); platform migration process
// (/website-platform-migration); maintenance plans
// (/services/website-maintenance-services); speed and code audit
// (/services/website-performance-and-code-audit); online shop builds (only
// «catalog and simple ordering» with WooCommerce); business-card sites (PL/RU
// pages); SEO consulting for WordPress (/services/seo-consultant).
// Owner’s rule: every page covers AI search; never say there are no clients
// from the visitor’s segment.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const wordpressDevelopmentServicesEn = {
  lang: "en",
  group: "wordpress-development-services",
  slug: "wordpress-development-services",
  parentPath: ["services"],
  pageType: "service",
  title: "WordPress development services",
  heading: "Custom WordPress Development Services",
  excerpt:
    "I provide WordPress development services: custom websites on a lean theme with only the plugins you need, fast on phones, safe to update and easy for your team to edit — from 700 €, design included.",
  seo: {
    metaTitle: "WordPress Website Development from 700 € | Bandziuk",
    metaDescription:
      "WordPress development services by one developer: custom theme, no heavy page builder, only needed plugins, fast and secure. From 700 €, design included.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Custom theme, no page builder", "From 700 €", "Design included"],
  heroPhonePoints: ["Services and prices", "Case studies", "EN · PL · DE", "Book a call"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Custom WordPress website on a lean theme, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "WordPress website with a custom theme and blocks, custom plugin features, integrations and language versions, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What my WordPress development services include",
      items: [
        { _key: k("o"), iconName: "code", title: "A theme written for your site", text: "Or a light block theme, never a 40-demo bundle" },
        { _key: k("o"), iconName: "plug", title: "Only the plugins the site needs", text: "Custom features go into one small plugin" },
        { _key: k("o"), iconName: "gauge", title: "Fast on a phone", text: "Built for good Core Web Vitals, not patched later" },
        { _key: k("o"), iconName: "shield-check", title: "Safe to update", text: "Fewer plugins, backups, tested updates" },
        { _key: k("o"), iconName: "file-text", title: "An admin your team cannot break", text: "Custom blocks with fixed layout, free text" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Clean HTML, structured data, crawler rules" },
      ],
      prices: [
        { _key: k("r"), label: "Custom WordPress website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Custom theme and plugin features, integrations, languages", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "WordPress websites and service sites I have built",
      subtitle:
        "ScanM2, Felgilab and the tyre-storage site run on WordPress: a rebuild in three languages that turned a silent site into weekly leads, a workshop site with service and price pages, and a one-page site whose owner edits the SEO texts himself. The auto repair and education agency projects show the same work on service pages, local search and multilingual structure.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "auto-repair-seo-and-ux-boost",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for WordPress development",
      subtitle: "I reply within one business day with what I would build or fix and a fixed price within the published ranges.",
      contextLabel: "Current website or project name",
      contextPlaceholder: "Link or short description",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website yet", "A slow or outdated WordPress site", "A WordPress site built with Elementor or Divi", "A site on Wix, Squarespace or Webflow"] },
        { _key: k("z"), question: "What do you need first?", options: ["A new WordPress website", "Speed and security fixes", "A custom theme or plugin", "Migration to or from WordPress"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I provide WordPress development services for companies that have already decided on WordPress, or already run on it, and want a site that is fast, safe to update and pleasant to edit. I design, code and launch the site myself, so the person who answers your questions is the person who writes the theme. I have worked with WordPress for years next to my SEO work, which is why every site I build starts with how it will be found, not only how it will look."),

        h2("What WordPress website development services include"),
        p("A typical project covers the whole path from an empty folder to a site your team edits on its own:"),
        li("page structure planned around what people search for, with one page per service or product line"),
        li("design for phones and desktops, agreed with you before the build"),
        li("a theme coded for your site, with custom blocks for the sections you reuse"),
        li("only the plugins the site needs: forms, SEO, caching, backups, language versions"),
        li("hosting setup, SSL, your domain, Google Analytics 4 and Search Console"),
        li("redirects from old addresses if a site already exists, so rankings carry over"),
        p("Most clients come either with no site and a clear wish for WordPress, or with a WordPress site that has grown slow and fragile over the years. Both are covered below."),

        h2("Custom WordPress development without a heavy page builder"),
        p("Elementor, Divi and WPBakery let anyone drag a page together, and for a quick test that is fine. The cost appears later: every page loads the builder’s scripts and styles, the HTML is ten layers of nested containers, and a layout tweak on one page can quietly break another. Many slow WordPress sites I see are slow for exactly this reason."),
        p("My custom WordPress development services take a different route. The site gets either its own theme or a light block theme on top of the native WordPress editor, with blocks designed for your content: a service card, a price table, a team member, a case study. Editors pick a block and fill in text and images; the layout, spacing and colors stay as designed. The result is less code on every page, faster loading and an admin that does not need a manual."),

        h2("WordPress theme development and plugin development services"),
        h3("Custom WordPress theme development"),
        p("A custom theme contains only what your site uses: templates for your page types, your blocks, your fonts and colors. There is no demo content to delete, no options panel with four hundred settings and no dependency on a theme vendor who may stop releasing updates. If you already have a design in Figma, I build the theme from it; if not, the design is part of the price."),
        h3("Custom WordPress plugin development"),
        p(
          "When a site needs something no ready plugin does well — a price calculator, a booking request that goes to your CRM, a custom content type for projects or properties, an import from an external system — I write it as a small plugin of its own. That keeps the feature separate from the theme, so a redesign later does not delete it. Connections to outside systems are described in more detail on the ",
          link("CMS integration and API work", "/services/cms-integration-and-api-work"),
          " page.",
        ),

        h2("Fast, secure WordPress websites your editors can update"),
        h3("Speed on a phone"),
        p("Images are served in modern formats and sized for the screen, scripts load only on pages that use them, and caching is set up on the server or with one plugin. The target is a Largest Contentful Paint under 2.5 seconds on mobile, the level Google rates as good, and it is checked before launch, not promised."),
        h3("Security and updates"),
        p("Most WordPress hacks come through outdated or abandoned plugins. Fewer plugins means fewer doors; the ones that stay are maintained and widely used. Admin accounts get strong passwords and two-factor login, backups run daily and are stored outside the server, and updates are tested before they reach the live site."),
        h3("WordPress maintenance after launch"),
        p(
          "After launch you can keep the site yourself or hand updates, backups and small changes to me. The plans are described on the ",
          link("website maintenance services", "/services/website-maintenance-services"),
          " page.",
        ),

        h2("Rescue and rebuild of slow WordPress websites"),
        p(
          "If your WordPress site takes five seconds to open, throws errors after every update or nobody dares to touch it, the first step is to find out why. Sometimes one heavy plugin or uncompressed images explain most of the problem and a few fixes are enough; sometimes the theme and builder are the cause and a rebuild is cheaper than patching. A ",
          link("website performance and code audit", "/services/website-performance-and-code-audit"),
          " answers that question with numbers before you spend money on either path.",
        ),
        p("Felgilab, a wheel-renovation workshop in Warsaw, is an example of a WordPress rebuild: the new site gives each service its own page and shows prices, so customers can check them before calling. One-off fixes on an existing site cost 250–700 €; a rebuild is priced like a new site."),

        h2("Migration to WordPress and away from WordPress without losing rankings"),
        p("ScanM2, a 3D laser scanning and BIM company, had a site on a no-code builder that brought no leads for two years. I rebuilt it on WordPress, kept the design the team liked and set it up in English, Polish and German. After the move organic traffic grew 29 times and leads now come every week. The move worked because every old address was mapped and redirected before launch, and titles and structured data were carried over."),
        p(
          "The same care applies in the other direction: some companies outgrow WordPress and move to Next.js or another platform. Moves both ways are described on the ",
          link("website platform migration", "/website-platform-migration"),
          " page.",
        ),
        h3("WooCommerce for a product catalog and simple ordering"),
        p("If you need to show products with prices, filters and an order or inquiry form, WooCommerce on top of your WordPress site handles that well. I set it up as a catalog with simple ordering — product pages, categories, a short checkout or a request form — built in the same lean theme as the rest of the site."),

        h2("White label and enterprise WordPress development"),
        h3("White label WordPress development for agencies"),
        p("Marketing and design agencies sometimes need a developer to build a WordPress site from their design under their brand. I can take the build from Figma to launch, work in your project tools and invoice your agency, while you keep the relationship with your client."),
        h3("Enterprise WordPress development for larger company sites"),
        p("For larger sites the questions change: several editors with different roles, many language versions, a staging copy for testing, integrations with CRM or marketing tools, and a clear update process. These are built into the project from the start rather than added when something breaks."),

        h2("Is WordPress becoming obsolete, and why do some companies move away from it?"),
        p("WordPress is a content management system, and it still runs a large share of the web — W3Techs counts it on roughly four in ten websites. It is not going away. But some teams do leave it, usually for one of these reasons:"),
        li("the site became slow and fragile after years of added plugins and page builder layouts"),
        li("maintenance takes too much time: plugin updates, conflicts, security warnings"),
        li("a development team prefers working in JavaScript frameworks and a headless CMS"),
        li("the public dispute in 2024 between Automattic and the host WP Engine made some owners worry about the platform’s direction"),
        p("Most of these problems come from how a site was built, not from WordPress itself. A lean WordPress site with a custom theme and few plugins avoids the first two. The third is a real reason to choose something else."),

        h2("WordPress or Next.js: which one fits your website"),
        p("WordPress fits when your team wants to edit everything in a familiar admin, you need a catalog or a blog with many authors, and the budget favors a site that a large pool of developers can maintain. Next.js fits when speed and full control over the code matter most, the site is multilingual and content-heavy, or it has to work closely with other apps. A headless setup, with WordPress as the editor and Next.js on the front, sits between the two."),
        p(
          "I build both, so the advice does not depend on what I sell. The Next.js side is described on the ",
          link("Next.js development services", "/services/nextjs-development-services"),
          " page.",
        ),

        h2("A WordPress website that ChatGPT and Google AI Overviews can read"),
        p("ChatGPT, Perplexity and Google AI Overviews now answer questions that used to send people to search results, and they recommend companies they can read and check. WordPress sites often hide facts inside sliders, images and builder markup. I build them so the important facts — services, prices, areas, languages, contact details — are plain HTML text, with structured data for the business, its services, FAQs and articles."),
        p("The robots.txt file is set deliberately: search crawlers such as OAI-SearchBot and PerplexityBot are allowed in, and you decide separately whether training crawlers like GPTBot and Google-Extended may use your content. Blocking Google-Extended does not remove a site from AI Overviews, which rely on the normal Googlebot."),
        p(
          "Getting mentioned in AI answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. If you need SEO advice for an existing WordPress site rather than a build, see the ",
          link("SEO consultant", "/services/seo-consultant"),
          " page.",
        ),

        h2("WordPress website development cost"),
        p(
          "My prices are published on the ",
          link("pricing", "/pricing"),
          " page, and design is included in both website prices:",
        ),
        li("A custom WordPress website — home page, service pages, about, contact, forms, on a lean theme: 700–1,400 €."),
        li("A larger WordPress website with custom blocks, plugin features, integrations and language versions: from 2,000 €."),
        li("One-off fixes on an existing WordPress site, such as speed, errors or a new feature: 250–700 €."),
        p("The price depends mostly on the number of page types, custom features and languages, not on the number of pages: twenty service pages built from the same template cost little more than five. You pay hosting and plugin licenses, if any, directly to the providers, and the site, theme and code are yours."),
        h3("How a WordPress project runs"),
        ol("Brief: what the site should do, who it is for, and what you already have."),
        ol("Page list and a fixed price; any later change of scope is priced before it is made."),
        ol("Design of the home page and one inner page, phone first."),
        ol("Theme, blocks and content; you test the admin on a staging copy."),
        ol("Launch with redirects, analytics and Search Console, plus a short editing guide."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "WordPress development services: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does WordPress website development cost?", "With me, 700–1,400 € for a custom WordPress website and from 2,000 € for a larger site with custom blocks, plugin features, integrations and language versions. Design is included in both. One-off fixes on an existing WordPress site cost 250–700 €. After a short description of the project I give a fixed quote."],
          ["Do you use Elementor or another page builder?", "I build on a custom theme or a light block theme with the native WordPress editor. That keeps pages fast and stops layouts from breaking when someone edits them. If your current site uses a builder, I can either work within it for small changes or plan a rebuild."],
          ["Can you fix or speed up my existing WordPress site?", "Yes. I start by finding what slows the site down or breaks it — plugins, theme, images, hosting — and then either fix those parts or suggest a rebuild if patching would cost more. You get the reasons and numbers before deciding."],
          ["How long does a WordPress website take to build?", "A simple site usually takes two to four weeks from the brief, a larger one with custom features or several languages four to six. Most of the time depends on how quickly texts, images and feedback are ready."],
          ["Will my team be able to edit the site without a developer?", "Yes. Texts, images, prices, new pages and blog posts are edited in the WordPress admin with blocks designed for your content. You get a short guide, and the layout stays intact whatever is typed in."],
          ["Who owns the theme, plugins and content?", "You do. The custom theme and plugins are handed over with the site, the domain and hosting are in your name, and you can move to another developer or host at any time."],
          ["Can you work with my team from Poland, in my time zone?", "Yes. I work remotely from Warsaw on Central European Time, which overlaps with UK and European working hours fully and with US East Coast mornings. I invoice in EUR as a registered sole trader, and we work in English by email, chat and video calls."],
          ["Do you also maintain WordPress sites after launch?", "Yes. You can handle updates yourself with the guide, or leave updates, backups, uptime checks and small changes to me on a maintenance plan."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Request a WordPress development quote: what to send me"),
        p(
          "Send a link to your current site, if there is one, a few lines about what the new or fixed site should do, the languages you need and any design files you already have. For a rescue job, add what goes wrong and when it started. I will reply with what I would build or fix and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
