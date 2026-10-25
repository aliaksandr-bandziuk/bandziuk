// Landing page fixture: SEO for startups (EN), group «seo-for-startups».
// Semantic core: ref/small-business.md / small-business.csv, startups group +
// brief: seo for startups 390, seo agency for startups 170, seo services for
// startups 140, seo service for startups 140, seo for saas startups 50, best
// seo agency for startups 50, seo consultant for startups 20, seo strategy for
// startups 20, seo for tech startups 10, generative engine optimization
// startups 10, ai search optimization startups 110; related: importance of seo
// for startups 10, benefits of seo for startups 10, seo company for startups 10.
// PAA (general set): Is SEO dead now with AI? → FAQ.
// Intent: ref/intent-check-small-business.md — «seo for startups» vs «small
// business seo» 0 shared URLs, 0 shared domains → own page. SERP is mixed:
// guides (Salesforce, PostHog, CXL, AIOSEO) and agencies, so the page teaches
// (when SEO makes sense, Next.js rendering, product-led and programmatic pages)
// and sells (one consultant instead of an agency).
// NOT on this page: building the startup site (/startup-website); its design,
// waitlist and pricing pages (/startup-website-design); landing pages
// (/services/landing-page-development); small-business SEO
// (/seo-services-for-small-business); B2B buying committees (/b2b-seo).
// «seo tools for startups» 40 — tool lists, not targeted.
// Owner’s rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, li, ol, link, k } from "./pt";

export const seoForStartupsEn = {
  lang: "en",
  group: "seo-for-startups",
  slug: "seo-for-startups",
  title: "SEO for startups",
  heading: "SEO for Startups",
  excerpt:
    "I provide SEO for startups and early-stage SaaS products: Next.js and React sites that render for Google, use-case, integration and comparison pages, and visibility in ChatGPT and Perplexity — paced to your stage and runway.",
  seo: {
    metaTitle: "SEO Consultant for Startups and SaaS | Bandziuk",
    metaDescription:
      "SEO services for startups: Next.js rendering, use-case, integration and comparison pages, docs and AI answers, tied to signups and demos. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Next.js + AI search", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Best tool for my team", "Alternatives to the leader", "Integrates with Slack", "Start free trial"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Startup SEO audit: rendering, indexing, metadata and search opportunities", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off startup SEO work: technical fixes, use-case and comparison pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a startup or SaaS product", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO services for startups",
      items: [
        { _key: k("o"), iconName: "gauge", title: "Technical SEO for Next.js and React", text: "Server rendering, metadata per route, previews closed to Google" },
        { _key: k("o"), iconName: "search", title: "Searches your buyers type before they choose", text: "Problem, use-case and comparison phrases, sorted by intent" },
        { _key: k("o"), iconName: "layers", title: "Use-case, integration and comparison pages", text: "Built as templates that grow from your own data" },
        { _key: k("o"), iconName: "file-text", title: "Docs and changelog that rank", text: "One task per page, one release per address" },
        { _key: k("o"), iconName: "sparkles", title: "On the shortlist in ChatGPT and Perplexity", text: "Product facts assistants can read and compare" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in signups and demo requests", text: "Search Console and GA4 events, not rankings alone" },
      ],
      prices: [
        { _key: k("r"), label: "Startup SEO audit: rendering, indexing, opportunities", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a startup", value: "from 800 € / month", note: "pages, fixes, AI visibility", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: websites I have built, rebuilt and optimized",
      subtitle:
        "Custom builds, a multilingual site covering ten countries, rebuilds with an SEO scan and a landing page whose SEO the owner edits — the same foundations a startup needs: pages that scale from templates, fast loading and search settings the team controls.",
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your startup",
      subtitle: "I reply within one business day with what I would fix first on your site, which pages I would add, and a fixed price.",
      contextLabel: "Product name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What stage is the startup at?", options: ["Pre-launch or beta", "Launched, first customers", "Growing after product–market fit", "Raising or just raised"] },
        { _key: k("z"), question: "What is the marketing site built with?", options: ["Next.js or React", "Webflow or Framer", "WordPress", "Not sure"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I provide SEO for startups — early-stage SaaS and tech products — as one consultant who also builds websites in Next.js and React. The goal is not a traffic chart for the next investor update. It is buyers finding your product when they search for the problem it solves, compare tools or ask an AI assistant for a shortlist, and then starting a trial or booking a demo."),

        h2("When SEO for startups makes sense, and when it can wait"),
        p("SEO is slow. A new domain usually needs months before its pages rank for anything competitive, and a founder with twelve months of runway should know that before spending on it. A fair rule of thumb:"),
        li("SEO makes sense when people already search for the problem you solve or the category you are in — “invoicing software for freelancers”, “open-source feature flags” — even if they have never heard of you"),
        li("it makes sense when there is a signup, a trial or a demo request, so a visit can turn into something you can count"),
        li("it can wait when the category is new and nobody searches for it yet; founder-led sales, communities and launch platforms bring the first users faster"),
        li("it can wait while the positioning still changes every month, because pages written for last month’s audience will need rewriting"),
        p("Even when full SEO can wait, the technical base should not. A site that renders properly, has clean addresses and keeps preview builds out of Google costs little at launch and much more to repair after a year of growth."),

        h2("SEO strategy for startups: matching keywords to stage and runway"),
        p("An SEO strategy for startups starts from the buyer’s searches, not from the top of a keyword tool’s list. I sort them into three groups:"),
        li("problem searches — what people type before they know tools exist; good for content, slow to convert"),
        li("category and use-case searches — “[category] for [type of team]”; the core of most SaaS sites"),
        li("comparison searches — “[competitor] alternatives”, “[tool A] vs [tool B]”; small volumes, buyers close to a decision"),
        p("With limited runway, the order is usually the reverse of the volumes: comparison and use-case pages first, because the people who land there are already choosing; problem content later, when the product and the message have settled. For each phrase I check who ranks now — a large directory, a well-funded competitor, a forum thread — and whether a young domain can realistically reach the first page within your timeline."),

        h2("Technical SEO for startups on Next.js and React: rendering, metadata and previews"),
        p("Many startup sites run on the stack I use every day — Next.js, React and TypeScript — often with the marketing site and the app in one repository. That stack ranks well when a few things are set right:"),
        li("rendering: marketing pages delivered as HTML from the server or generated at build time, not assembled in the browser. Google can run JavaScript, but later and not always, and many AI crawlers read only the first HTML response"),
        li("metadata per route: title, description, canonical and Open Graph set for each page, not one default inherited everywhere"),
        li("preview and staging deployments closed to search engines, so Google does not index a copy of your site on a temporary address"),
        li("the app kept apart: login, dashboard and settings pages out of the index; public pages linked and listed in the sitemap"),
        li("speed: Largest Contentful Paint under 2.5 seconds on a phone, which on Next.js usually comes down to images, fonts and third-party scripts"),
        p("A React single-page app that loads all its text with JavaScript is the hardest case. The usual fix is to move the public pages to server rendering, which I can do directly in your codebase."),

        h2("SEO for SaaS startups: use-case, integration and programmatic pages"),
        p("Product-led SEO means pages that show the product doing a specific job. For SEO for SaaS startups the useful types are:"),
        li("use-case and role pages — the product for agencies, for finance teams, for onboarding — each with real screens and steps, not the home page reworded"),
        li("integration pages — one per tool you connect to, saying what syncs, in which direction and how to set it up"),
        li("template and example pages, when the product works with templates, documents or workflows that people search for by name"),
        p("These pages can be programmatic: generated from structured data in a CMS or from your product’s own database, so fifty integration pages share one design and stay up to date. Programmatic pages work when each one carries information the others do not — real settings, limits, examples. Pages that differ only by a swapped name are a known pattern, and Google tends to leave them out of results."),

        h2("Comparison and alternatives pages for startups: “X vs Y” that buyers trust"),
        p("People who search “[competitor] alternatives” or “[your tool] vs [competitor]” are close to buying. If you have no such page, a review site or the competitor answers for you. A comparison page that converts is fair:"),
        li("it says where the other tool is the better choice and for whom"),
        li("it compares on what buyers weigh — pricing model, limits, integrations, where data is stored, support"),
        li("it dates the facts that change, and gets updated when they do"),
        p("I prepare the structure and the factual parts; every claim about a competitor is checked against their public pages before it goes live."),

        h2("Docs, changelog and help center in SEO for tech startups"),
        p("In SEO for tech startups, documentation often ranks before the marketing pages do. Developers and admins search for error messages, API names and “how to connect X to Y”, and a well-built docs section answers them with your product in the answer. What helps:"),
        li("docs on your own domain, in a subfolder or subdomain you control, not on a hosted service’s address"),
        li("one page per task, with a title that names the task"),
        li("a changelog with a page per release, so each new feature has an address that can be found and quoted"),
        li("help-center articles open to search engines, unless they contain account-specific details"),

        h2("AI search optimization for startups: how ChatGPT and Perplexity shortlist tools (GEO, AEO)"),
        p("Buyers now ask ChatGPT, Perplexity or Google’s AI Overviews “what is the best tool for X for a team of ten” and get a shortlist before they open a single website. Getting onto that list is the work of generative engine optimization (GEO) and answer engine optimization (AEO). Assistants build such answers from what they can read and cross-check:"),
        li("your own pages, when they state plainly what the product does, for whom, at what price and with which integrations"),
        li("comparison articles, directories, review sites and community threads where your product is discussed"),
        li("consistency: the same name, category and facts everywhere, so the assistant does not mix you up with a similarly named product"),
        p(
          "That is why pricing hidden behind “contact us” and features shown only in screenshots hurt a startup twice: in search and in AI answers. I check how assistants describe your product and which competitors they name before the work and again after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("SEO agency for startups or one SEO consultant: who does the work"),
        p("A typical SEO agency for startups sells a monthly retainer with a fixed number of articles and links, done by a team you rarely talk to. That suits a company with a marketing lead who manages vendors. For an early-stage startup I offer the other model: one SEO consultant for startups instead of an agency — the same person audits, plans, fixes the code or writes the tickets, and reports to the founder. Whoever you hire, ask:"),
        li("Will you report signups, trials and demo requests from search, or only rankings?"),
        li("Who writes the pages, and who checks them against the product?"),
        li("Can you work in our repository, or only send recommendations?"),
        li("Is there a minimum contract, and what happens to the work if we pivot?"),

        h2("What SEO services for startups include in the first three months"),
        ol("Audit: crawling, rendering, indexing in Google Search Console, metadata, speed and the searches you can realistically win."),
        ol("Technical fixes in the code — made by me or written as tickets for your developers."),
        ol("The first pages: the most valuable use-case, integration and comparison pages, with structured data."),
        ol("Measurement: GA4 events for signups and demo requests, so search traffic is tied to outcomes."),
        ol("A plan for the next quarter, sized to your budget."),
        p(
          "After that, SEO services for startups become a monthly rhythm: new pages, updates after each release, AI visibility checks and reporting. If the site itself needs to be built or rebuilt first, see ",
          link("startup website development", "/startup-website"),
          " and ",
          link("startup website design", "/startup-website-design"),
          ".",
        ),

        h2("How much SEO for startups costs, and how to fit it into your runway"),
        li("SEO audit of a startup site: from 250 €, one-off, with fixes listed in order of impact."),
        li("One-off work — technical fixes, a set of use-case or comparison pages, structured data: 250–700 €."),
        li("Monthly SEO for a startup — new pages, updates, AI visibility and reporting: from 800 € per month; in very competitive software categories from 1,300 € per month."),
        p(
          "Many early-stage startups need the audit and one round of fixes now, and monthly work only once the product and its message are stable. How I approach SEO for companies of any size is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page; all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for startups: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["When should a startup start doing SEO?", "The technical base — rendering, metadata, sitemap, previews closed to Google — belongs at launch. Content and monthly work make sense once people search for your category or problem and the positioning has stopped changing every month."],
          ["How much does SEO cost for a startup?", "An audit costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive software categories. After a short description of the product I give a fixed price."],
          ["How long does SEO take to work for a new startup?", "Technical fixes show in Google Search Console within weeks. New pages on a young domain usually need three to six months to rank for competitive searches; comparison and integration pages with little competition can move sooner."],
          ["Can a Next.js or React single-page app rank in Google?", "Next.js ranks well when public pages are rendered on the server or at build time. A pure single-page app that loads its text with JavaScript is harder for Google and for AI crawlers; the fix is server rendering for the public pages."],
          ["Is SEO dead now with AI?", "No, it has changed. ChatGPT, Perplexity and AI Overviews build their tool shortlists from pages they can read and compare. Clear product facts, pricing, integrations and comparison pages serve search engines and assistants with one piece of work."],
          ["What should I look for in the best SEO agency for startups?", "Reports in signups and demos rather than rankings, the ability to work in your codebase, no long minimum contract, and someone who checks every page against the product. A single consultant often fits those criteria better than an agency at the early stage."],
          ["Do you write the content, or does our team?", "Both work. I write the structure and the factual parts of use-case, integration and comparison pages; founders or product people add what only they know. Docs are usually written by your team, and I set up how they are organized for search."],
          ["Do you work with startups outside Poland?", "Yes. SEO for startups is done remotely, for teams in Europe, North America and elsewhere. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your startup: what to send me"),
        p(
          "Send the product name and website, what the marketing site is built with, the stage you are at, the two or three competitors buyers compare you with and the action that counts as a conversion — signup, trial or demo. I will reply with what I would fix first, which pages I would add and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
