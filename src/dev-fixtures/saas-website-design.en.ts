// Landing page fixture: SaaS website design (EN), group «saas-website-design».
// New page.
// Semantic core: ref/batch-h1.md, SaaS website group (US): saas website 1,300
// (definition H2, FAQ) · website saas 720 (in text) · saas website design
// agency 390 (agency H2) · saas website design 320 + website design for saas
// 320 (H1, metaTitle, several H2, cost H2) · best saas website(s) 320 each +
// best saas website design(s) 110 (principles H2 — no brands listed) · saas
// website template(s) 260/140 (templates H2) · saas website examples 140 +
// saas website inspiration 70 + saas website design inspiration 50 (principles
// H2, in text) · saas product website 90 (intro) · what is saas website 90
// (first H2, answered in one paragraph) · saas website builder 70 (templates
// H2) · saas website development 50 (cost H2, FAQ) · grid: saas web design
// 1,300 (in text).
// Intent: ref/intent-check-delta.md — «saas website» vs «saas website design»
// 2 of 10 shared URLs (Vercel templates, an Awwwards page), 4 shared domains →
// one page. ref/intent-check-batch-h.md — «saas website design» vs «saas
// landing page design» 0 shared URLs → one H3 only, linked to
// /services/landing-page-development. SERP: Awwwards, Behance, Webflow, Vercel
// templates, Reddit, design studios (cobloom, magier, beetlebeetle) → owners
// comparing examples and studios.
// Audience: SaaS companies with a live product and paying customers.
// Angles: marketing site as a sales channel, principles of the best SaaS
// websites, feature and use-case pages by role and industry, integrations
// directory from CMS records, self-serve vs demo-led flows, customer stories,
// security / trust pages (SOC 2, GDPR, DPA, subprocessors — general), docs and
// changelog on a subdomain or subfolder, EU localization, migration off
// Webflow / WordPress with 301s (Giuseppe), marketing team editing in Sanity,
// template vs agency vs one designer-developer, AI-readable build, cost.
// Portfolio: own site, Giuseppe, consultant, ScanM2, Landi Room (brief order).
// NOT on this page: pre-launch, MVP, waitlist and investor pages, pricing page
// design, design system, analytics setup, Webflow/Framer vs Next.js as a
// comparison (/startup-website-design — linked once); SaaS SEO, programmatic
// and comparison pages as search work (/saas-seo — sibling); B2B catalogs and
// RFQs (/b2b-website-design); IT service firms (/it-company-website-design);
// the Next.js stack in depth (/services/nextjs-development-services).
// Owner’s rules: never say there are no clients from the visitor’s industry;
// every page covers AI search; design included in the price.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const saasWebsiteDesignEn = {
  lang: "en",
  group: "saas-website-design",
  slug: "saas-website-design",
  title: "SaaS website design and development",
  heading: "SaaS Website Design and Development",
  excerpt:
    "SaaS website design and development from one person, for software products that already have paying customers: feature and use-case pages, an integrations directory built from data, separate paths to a free trial and to a demo, security and customer story pages, and a CMS your marketing team publishes in.",
  seo: {
    metaTitle: "SaaS Marketing Website Design on Next.js | Bandziuk",
    metaDescription:
      "SaaS website design and build: feature and use-case pages, integrations directory, trial and demo paths, security pages, EU languages. Full sites from 2,000 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + Next.js build, one price", "Full SaaS site from 2,000 €", "Reply within one business day"],
  heroPhonePoints: ["Start free trial", "Book a demo", "Integrations", "Security and GDPR"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple SaaS website with product, plans, about and contact pages linked to your signup, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "SaaS marketing website with feature and use-case templates, an integrations directory, trial and demo paths, customer stories, security pages, docs or changelog, language versions and a CMS for the marketing team, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SaaS website design",
      items: [
        { _key: k("o"), iconName: "layers", title: "Feature and use-case pages", text: "One template per feature, role and industry" },
        { _key: k("o"), iconName: "plug", title: "An integrations directory from data", text: "One CMS record per integration, one page each" },
        { _key: k("o"), iconName: "users", title: "Trial and demo paths", text: "Self-serve signup and booked calls, tracked apart" },
        { _key: k("o"), iconName: "shield-check", title: "Security and compliance pages", text: "SOC 2, GDPR, DPA and subprocessors as text" },
        { _key: k("o"), iconName: "file-text", title: "Published by your marketing team", text: "Sanity CMS with preview, no ticket to engineering" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by ChatGPT and AI Overviews", text: "Plans, integrations and regions server-rendered" },
      ],
      prices: [
        { _key: k("r"), label: "Simple SaaS website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Feature, use-case, integration and security pages, languages, CMS", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: Next.js, multilingual and B2B websites I have built",
      subtitle:
        "Each of these sites solves a problem a SaaS marketing site runs into. My own site runs on Next.js and Sanity with landing pages in three languages, schema.org, hreflang and a sitemap built from content — the setup a SaaS site with hundreds of templated pages needs. Giuseppe’s site in Milan moved from WordPress to Next.js 16 with a 301 redirect for each of 468 old posts, the same move many SaaS companies make off WordPress or Webflow. For a retail analytics consultant I built 153 pages in English, Polish and Russian, with calculators and templates for a B2B audience, written to be quoted by AI assistants. ScanM2, a 3D laser scanning and BIM company, left a no-code builder for WordPress, kept its design and grew organic traffic 29 times. Landi Room’s course page takes payment through Stripe Checkout and opens the video right after, a flow close to signup and first login.",
      picks: [
        "develop-and-optimize-a-personal-website-with-seo",
        "psychotherapist-website-milan",
        "consultant-website-design-retail-analytics",
        "architecture-website-rebuild-and-seo-scan",
        "e-commerce-landing-page-with-secured-video-access",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your SaaS website",
      subtitle: "I reply within one business day with a list of page templates and data types for your product, a note on the trial and demo paths, and a fixed price.",
      contextLabel: "Product name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What runs your marketing site now?", options: ["Webflow or Framer", "WordPress", "Next.js or React kept by our engineers", "A template we have outgrown"] },
        { _key: k("z"), question: "How do customers usually start?", options: ["Self-serve: free trial or freemium signup", "Demo-led: a call with sales", "Small teams self-serve, larger ones book a demo", "Through partners or a marketplace"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("SaaS website design is the service I offer software companies whose product already has paying customers: I design the marketing site and build it myself on Next.js with a headless CMS, so the page plan, the visual design, the code and the signup paths come from one person at a price fixed in advance. At this stage a SaaS product website sells a working product to buyers comparing it with two or three others."),

        h2("What is a SaaS website, and what it does once the product sells"),
        p("A SaaS website is the public marketing site of a software-as-a-service product: the pages that explain what the product does, who it is for, what it costs and how to start, kept apart from the app customers log into. Once revenue comes in, it is a sales channel with its own targets — trial signups, demo requests, upgrades — read by the person with the problem, the manager who approves the spend and the IT team that signs off on a new vendor."),
        p(
          "Products before launch or still looking for their first customers need fewer pages and different ones: a waitlist, an MVP page, material for investors. Those are on the ",
          link("startup website design", "/startup-website-design"),
          " page. Companies selling services or physical goods to other businesses will find catalogs and quote forms on the ",
          link("B2B website design", "/b2b-website-design"),
          " page.",
        ),

        h2("Best SaaS websites: what the best SaaS website designs have in common"),
        p("Galleries of SaaS web design on Awwwards, Behance or Webflow mostly show home pages. Open the inner pages of SaaS website examples that sell well and the shared principles concern structure, not style:"),
        li("every feature has its own page answering one question — what job does this do for me"),
        li("visitors find themselves by role, company size or industry within two clicks"),
        li("the next step matches the buyer: signup to try, a call for a team that needs one"),
        li("proof sits where doubt appears — a customer quote beside the claim it supports, a hosting note beside the signup button"),
        li("plans, limits and integrations are written as text, so they can be searched, compared and quoted"),
        p("SaaS website inspiration helps with taste; the structure comes from your product and your buyers."),

        h2("Feature pages and use-case pages on a SaaS website, by role and industry"),
        p("A single Features page with thirty icons convinces nobody and gives search engines nothing to match. A SaaS marketing site that sells is built from two page types, each with its own template:"),
        li("feature pages, one per capability a buyer would search for or ask about on a call: the problem, how the feature handles it, a short walkthrough, which plans include it and which integrations it uses"),
        li("use-case pages, one per role (“for finance teams”, “for agencies”) or per industry, written in that reader’s vocabulary and showing the features and customer stories that matter to them"),
        p("Both are CMS content types, so product marketing adds a page for a new feature or segment without waiting for design or engineering."),

        h2("An integrations directory on a SaaS website, generated from data"),
        p("Buyers check early whether you connect to the tools they already pay for. Each integration is one record in the CMS — name, logo, category, what syncs in which direction, the plans that include it, a link to the setup article — and the site builds the rest from those records:"),
        li("a directory with filters by category and plan"),
        li("a page for each integration at its own address"),
        li("a block on every feature page listing the integrations that feature relies on"),
        p("A new connector means one new record, and its page appears in every language version. Records without a real description stay unpublished, so no page shows only a logo."),

        h2("Self-serve trial signup or “book a demo”: two page flows on a SaaS website"),
        p("Self-serve and demo-led products need different flows, and many products need both. The difference shows in every button:"),
        li("self-serve: the main button opens signup inside the app, with no extra form on the marketing site; the chosen plan and campaign parameters travel along, so the app knows where the account came from"),
        li("demo-led: a short form — work email, team size, the problem — then a calendar, so the meeting is booked before the visitor leaves and the request reaches your CRM with its source page"),
        li("hybrid: small teams are sent to the trial and larger accounts to a call, split by team size or plan rather than by hiding one of the paths"),
        p("Signups and demo requests are recorded as separate events, so each page shows which of the two it brings."),
        h3("SaaS landing page design for paid campaigns"),
        p(
          "Ads, webinars and partner campaigns get landing pages assembled from the same components, with one offer, one action and no full menu. How I build them is on the ",
          link("landing page development", "/services/landing-page-development"),
          " page.",
        ),

        h2("Proof pages on a SaaS website: customer stories, security and compliance"),
        h3("Customer story pages"),
        p("A buyer reads a customer story to see whether the product worked for a company like theirs. The template opens with a facts box — industry, team size, region, plan, features used — then the situation and the result in the customer’s words, with numbers only where the customer approved them. Tags by industry and use case put each story on the matching use-case pages."),
        h3("Security and trust pages for the buyer’s IT team"),
        p("Before a contract the buyer’s IT team sends a questionnaire. A security page or trust center answers much of it in advance:"),
        li("the reports and certifications you hold, such as SOC 2 or ISO 27001, with scope, date and how to request the report"),
        li("GDPR: where customer data is hosted, a data processing agreement (DPA) to download or request, and a privacy contact"),
        li("subprocessors with their purpose and location, and how customers hear about changes"),
        li("a link to the status page and a way to report a vulnerability"),
        p("These are your company’s facts; the site gives them fixed places, plain text and dates."),

        h2("Docs, help center and changelog on a SaaS website: subdomain or subfolder"),
        p("Documentation, the help center and the changelog serve customers, and prospects read them to judge the product. A subfolder such as /docs keeps one domain and one design, and search engines treat it as part of the main site. A subdomain such as docs.yourproduct.com suits a docs tool your engineers already run. Either works when the header and the links back to the marketing site match and the docs arrive as server-rendered text. A changelog with one dated entry per release, linked to the feature page it changes, shows prospects that the product keeps moving."),

        h2("Localized SaaS website versions for European markets"),
        p(
          "Selling into Germany, France, Poland or Spain often stalls at a translated home page. A localized SaaS site carries the pages buyers decide on — features, use cases, security, plans in euros with VAT stated, the legal pages — under translated URLs with hreflang, written for each market instead of passed through a machine translator. Bandziuk.com is built this way in three languages, and so is the retail analytics consultant’s site with its 153 pages. The setup is described on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page.",
        ),

        h2("Moving a SaaS website from Webflow or WordPress to Next.js without losing search traffic"),
        p("SaaS marketing sites often start on Webflow or WordPress and hit limits as they grow: hundreds of pages that should share data, collection caps, conflicting plugins, language versions added as an afterthought. The rankings live in the URLs, so a move starts with a map of every address. Each one gets a 301 redirect, titles and structured data are carried over, Webflow collections or WordPress posts become structured CMS content, and the redirects are tested on a preview before the domain switches."),
        p("I moved Giuseppe’s site in Milan this way, from WordPress to Next.js 16 and Sanity, with a 301 for each of its 468 old posts; it took 44 working days to handover. After launch the marketing team publishes feature pages, stories and changelog entries in Sanity with a live preview, and the layout stays protected."),
        p(
          "The stack itself is described on the ",
          link("Next.js development services", "/services/nextjs-development-services"),
          " page.",
        ),

        h2("SaaS website templates, a SaaS website design agency or one designer-developer"),
        p("A SaaS website template from the Vercel or Webflow galleries, or a SaaS website builder, gives you a home page, a plans table and a blog within days. It fits a product with one audience and a short feature list; use-case pages, an integrations directory, trust pages and languages later mean working against it."),
        p("A SaaS website design agency brings a strategist, designers, developers and a project manager, which suits a large rebrand with many stakeholders. I work alone: I plan the pages, design them, write the code, set up the CMS and the technical SEO, and you speak with the person doing the work. If you already have a designer, I build from the Figma file."),

        h2("A SaaS website that ChatGPT and Google AI Overviews can read"),
        p("Software buyers now type requests like “an invoicing tool that connects to QuickBooks and stores data in the EU” into ChatGPT, Perplexity or Google’s AI Overviews and get a shortlist back. An assistant can only shortlist what it can read, and SaaS sites often hide those facts: plans in a JavaScript widget, integrations as a wall of logos, security details in a PDF. The build keeps plans and limits, integrations, supported languages, hosting regions and compliance as server-rendered text, with SoftwareApplication and Organization structured data and explicit robots.txt rules for AI crawlers. Giuseppe’s rebuilt site follows the same rules, and its new pages already appear in ChatGPT answers."),
        p(
          "How a product gets onto those shortlists and stays there is covered on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page; trials and demos from Google search are covered on the ",
          link("SaaS SEO", "/saas-seo"),
          " page.",
        ),

        h2("How much SaaS website design and development costs"),
        p("Design and development are one price. The price follows the number of page templates and data types more than the number of pages: three hundred integration pages come from one template."),
        li("A simple SaaS website — home, product overview, plans, about and contact, linked to your signup and login: 700–1,400 €."),
        li("A SaaS marketing site with feature and use-case templates, an integrations directory, trial and demo flows, customer stories, security pages, docs or changelog, language versions and a CMS for the marketing team: from 2,000 €. Most SaaS marketing sites fall here."),
        p(
          "You pay for hosting, usually Vercel, and for the CMS plan straight to those companies. The steps from brief to launch are on the ",
          link("website development", "/services/website-development"),
          " page, and every price I charge is on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SaaS website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SaaS website design cost?", "700–1,400 € for a simple SaaS website and from 2,000 € for a full marketing site with feature and use-case templates, an integrations directory, trial and demo paths, security pages and language versions. Design and build are one price, fixed after a short brief."],
          ["How long does SaaS website development take?", "It depends on the number of templates and languages and on how much content moves over from the old site. For scale: Giuseppe’s rebuild, with 468 posts migrated, took 44 working days from start to handover. You get a timeline together with the fixed price."],
          ["Can our marketing team publish pages without engineers?", "Yes. Feature pages, use cases, customer stories, integration records, changelog entries and blog posts are content types in Sanity with a live preview. A developer is needed only when you want a new type of page."],
          ["We are on Webflow. Will we lose rankings if we move?", "Not if the move is planned around the URLs. Every old address gets a 301 redirect to its new page, titles and structured data move with the pages, and I check Search Console for errors in the weeks after launch."],
          ["Can you build our SaaS website from our designer’s Figma files?", "Yes. I build from an existing Figma design as readily as from my own: Sasha Dith’s DJ and producer site went from the client’s Figma straight to Next.js. Where a design lacks a template — an integration page, a customer story — I design it in the same style."],
          ["Does the marketing site affect our app?", "It is a separate project with its own hosting. It links to your signup and login and passes the chosen plan and campaign parameters, so publishing a page never requires an app release."],
          ["Can you work with a US SaaS team from Poland?", "Yes, remotely and in English. My afternoon and evening in Warsaw (CET) overlap with the morning on the US East Coast and the early morning on the West Coast, so calls and design reviews fit into your day; between calls we comment in Figma or a shared document. I invoice in EUR, or in another currency if we agree on it."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SaaS website design: what to send me"),
        p(
          "Send your site and app URLs, a short description of the product, your plans, the two or three competitors buyers compare you with, whether customers start with a trial or a demo, the integrations you offer, the markets and languages you sell in and the CMS and CRM you use. I will reply with a page plan — templates and data types — and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
