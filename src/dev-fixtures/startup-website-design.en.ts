// Landing page fixture: Startup website design (EN), group «startup-website-design».
// Semantic core: ref/small-business.md / small-business.csv, startups group +
// brief: landing page for startups 390, website design startup 210, startup
// website design 170, website design for startup 170, startup company website
// design 170, best startup websites 140; related: best startup website design
// 10, startup website design company 10, how to design a startup website 10,
// website design for startup business 10, startup website design inspiration
// 10, best tech startup websites 10, are logo and website design a startup
// cost 20 (answered in the cost H2, not targeted).
// Intent: ref/intent-check-small-business.md — «startup website design» vs
// «small business website design» 0 shared URLs, 1 shared domain → own page.
// SERP: Dribbble and Pinterest inspiration plus studios (macu.studio,
// thecssagency.com) → the page explains design decisions by stage and sells
// design + build at one price.
// NOT on this page: the build itself — stack, hosting, CMS, integrations
// (/startup-website, the development page); SEO, use-case and comparison
// pages (/seo-for-startups); landing pages for any business
// (/services/landing-page-development); «b2b saas website design» 40
// (/b2b-website-design).
// Owner’s rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const startupWebsiteDesignEn = {
  lang: "en",
  group: "startup-website-design",
  slug: "startup-website-design",
  title: "Startup website design",
  heading: "Startup Website Design",
  excerpt:
    "I design and build startup websites: a pre-launch or waitlist page, a home page that says what the product does in one sentence, real product screens, a pricing page and analytics from day one — on a design system that grows with the product.",
  seo: {
    metaTitle: "Website Design for Startups: MVP to Growth | Bandziuk",
    metaDescription:
      "Startup website design with development: waitlist and pre-launch pages, product demo, pricing page, analytics from day one, fast Next.js build. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Join the waitlist", "See it in 60 seconds", "Free · Pro · Team", "Book a demo"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Pre-launch or waitlist website for a startup, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Startup website with product, pricing and use-case pages, design system and analytics, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with startup website design",
      items: [
        { _key: k("o"), iconName: "plug", title: "A waitlist page connected to your tools", text: "Signups land in your email tool or CRM, not an inbox" },
        { _key: k("o"), iconName: "image", title: "Real product screens and a short demo", text: "Cropped, annotated, light enough for a phone" },
        { _key: k("o"), iconName: "file-text", title: "A pricing page buyers can read", text: "Plans, limits and the next step, without “contact us” walls" },
        { _key: k("o"), iconName: "layers", title: "A design system that grows", text: "Components in code, so new pages take hours, not weeks" },
        { _key: k("o"), iconName: "trending-up", title: "Analytics and events from day one", text: "Signups, demo requests and pricing clicks tracked at launch" },
        { _key: k("o"), iconName: "gauge", title: "Fast on a phone", text: "Main content under 2.5 seconds, readable by Google and AI assistants" },
      ],
      prices: [
        { _key: k("r"), label: "Pre-launch or waitlist startup website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Product, pricing and use-case pages, design system, analytics", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: websites I have designed and built",
      subtitle:
        "A single-action landing page, a multilingual site covering ten countries, a premium-design build and redesigns of existing sites — the work a startup site is made of: one clear message, a layout that scales to new pages and languages, and forms that send every request where it belongs.",
      picks: [
        "tyre-storage-landing-page-with-editable-seo",
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your startup website design",
      subtitle: "I reply within one business day with a proposed structure for the first pages, the stack I would use and a fixed price.",
      contextLabel: "Product name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What stage is the product at?", options: ["Idea or pre-launch", "Beta with first users", "Launched and selling", "Raising a round"] },
        { _key: k("z"), question: "What do you have now?", options: ["Nothing yet", "A Webflow or Framer site", "A template or builder site", "A custom site"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I provide startup website design together with development: I design the pages and build them myself, so one person and one price cover both. A startup site changes faster than any other kind of website — the message shifts after the first fifty customer calls, a pricing plan appears, a new integration ships — so the design has to work on launch day and still hold together six months later."),

        h2("Startup website design for an MVP or pre-launch product"),
        p("Before the product is ready, the website has one job: explain the problem well enough that the right people leave an email. A pre-launch site needs less than founders expect:"),
        li("one sentence that names the problem and who has it, and a second one that says how the product solves it"),
        li("a picture of the product — a real early screen or a careful mock-up, labelled as a preview"),
        li("one action: join the waitlist, request early access or book a call"),
        li("who is building it, with names and faces, because early users and investors both check"),
        p("Everything else — feature grids, testimonials, a blog — waits until there is something true to put in it. Placeholder logos and invented quotes on a pre-launch site are noticed, and they cost trust exactly when you have the least of it."),

        h2("Landing page for startups: a waitlist page that collects the right signups"),
        p("A landing page for startups is usually the first thing paid ads, launch posts and investor emails point to. A waitlist page works when it qualifies people as well as counts them:"),
        li("a short form — email plus one or two questions such as role or team size — so you know who signed up"),
        li("an honest promise of what happens next and when"),
        li("signups sent straight into your email tool or CRM, with the source of each one recorded"),
        li("a separate version of the page for each campaign, when messages differ, so you can see which one works"),
        p(
          "How I build landing pages for any kind of business, startups included, is on the ",
          link("landing page development", "/services/landing-page-development"),
          " page.",
        ),

        h2("Website design for a startup: what the best startup websites show on the first screen"),
        p("Lists of the best startup websites are full of beautiful animation, but the sites that convert share plainer decisions. On the first screen, without scrolling:"),
        li("what the product does, in the words buyers use — “Invoices that chase late payments for you”, not “The future of finance”"),
        li("who it is for, when that is not obvious from the first line"),
        li("one main button — start free, book a demo or join the waitlist — and at most one quieter second option"),
        li("a real screen of the product, not an abstract illustration"),
        p("Inspiration boards on Dribbble and Pinterest show attractive screens, but they are made to be admired. Website design for a startup is tested by a different question: can a stranger repeat what you do after five seconds?"),

        h2("Product screenshots, demo video and interactive demo in startup web design"),
        p("Buyers want to see the product before they give an email. The design plans how it is shown:"),
        li("screenshots cropped to the part that matters, with a short label, instead of a full dashboard at thumbnail size"),
        li("a demo video of a minute or two, with captions, because many people watch with the sound off"),
        li("an interactive demo or a sandbox account, when the product is easier to try than to explain"),
        p("Screens change with every release, so they are kept as separate images or components that can be replaced without touching the layout."),

        h2("Pricing page design for a startup: plans, limits and the next step"),
        p("Buyers who reach the pricing page are close to a decision, and an unclear table is where many of them leave. A pricing page that works:"),
        li("two to four plans, each named for who it is for, with the limits that differ written out"),
        li("monthly and yearly prices, with the difference shown in money, not only as a percentage"),
        li("a clear answer to “what happens when I go over the limit”"),
        li("short answers to billing questions — trial length, cancellation, invoices, VAT — under the table"),
        p("If the price is not settled yet, the page can show plans without numbers and a “talk to us” button, but the plans and limits should still be there. Buyers and AI assistants both treat a missing pricing page as a warning sign."),

        h2("Pages for investors on a startup company website"),
        p("Investors usually open the site after reading the deck. They are checking whether the company is what the deck says. Startup company website design takes this into account without turning the site into a pitch:"),
        li("an about or team page with real names, roles and links to professional profiles"),
        li("a press or news page with dated announcements, once there is something to announce"),
        li("a media kit — logo files, product screens, a short description — so journalists and partners use the right ones"),
        li("traction numbers only if you are ready to make them public and keep them updated"),

        h2("A design system for a startup website that grows with the product"),
        p("A startup site that starts with five pages often has fifty a year later: use cases, integrations, comparisons, changelog, careers. Designing each page by hand does not scale. I build the site from a small set of components — section types, cards, pricing tables, screenshot frames, forms — defined once in code with shared colors, type sizes and spacing. A new use-case page is then assembled from existing parts in hours, and a change to a button style updates every page at once."),

        h2("Analytics and events from day one on a startup website"),
        p("Founders often add analytics after launch and lose the first months of data. In the design stage I list the actions that matter and track them from the first day:"),
        li("waitlist and signup submissions, with the campaign or page they came from"),
        li("clicks on start free, book a demo and pricing plan buttons"),
        li("demo video plays and how far people watch"),
        p("These go into GA4 and Google Search Console, or into the product analytics tool you already use, such as PostHog, Mixpanel or Amplitude. In the EU, a consent banner is part of the design, not an afterthought."),

        h2("Webflow or Framer vs a custom Next.js site for a startup"),
        p("Webflow and Framer are good tools. If the team has no developer, the site is a few pages and marketing needs to change text daily, one of them may be the right choice, and I will say so. A custom Next.js site pays off when:"),
        li("the marketing site should share components, styles or data with the product, which is often built in React"),
        li("you plan dozens of use-case, integration or comparison pages generated from data"),
        li("you need several languages, custom forms or integrations without per-feature add-ons"),
        li("speed matters: main content under 2.5 seconds on a phone, with no builder scripts on every page"),
        p(
          "What goes into the build — stack, hosting, CMS, ownership of the code — is covered on the ",
          link("startup website development", "/startup-website"),
          " page; how I build websites in general is on the ",
          link("website development", "/services/website-development"),
          " page.",
        ),

        h2("A startup website that ChatGPT and Google AI Overviews can read"),
        p("Buyers ask ChatGPT, Perplexity and Google’s AI Overviews which tool fits their team, and assistants answer from what they can read. A design that keeps the product description in an animation, features in images and prices behind a form hides the facts; the same content set as real text, with structured data for the organization and the product, can be read, compared and repeated."),
        p(
          "Getting into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Ranking in Google for your category, use cases and comparisons is covered on the ",
          link("SEO for startups", "/seo-for-startups"),
          " page.",
        ),

        h2("How the startup website design process works and what it costs"),
        ol("Brief. You send the one-sentence description, the audience, competitors you are compared with and the action that counts as success."),
        ol("Phone layouts. I design the home page and one inner page on a phone screen and agree them with you."),
        ol("Design system and full design. The other pages are assembled from the same components; desktop versions follow."),
        ol("Build and launch, with analytics and events working on the first day."),
        p("Design is part of building the site, and the price covers both. If you do not have a logo yet, the site can launch with a clean text logo and take on a brand identity later."),
        li("A pre-launch or waitlist website: 700–1,400 €."),
        li("A startup website with product, pricing and use-case pages, a design system and analytics: from 2,000 €."),
        p(
          "Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Startup website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does startup website design cost?", "Design is included in the price of the website: 700–1,400 € for a pre-launch or waitlist site, from 2,000 € for a site with product, pricing and use-case pages, a design system and analytics. After a short description of the product I give a fixed quote."],
          ["How long does it take to design and build a startup website?", "A waitlist or pre-launch page is usually live within one to two weeks of the brief. A full startup website with a design system typically takes three to five weeks."],
          ["Should a startup use Webflow, Framer or a custom Next.js site?", "Webflow or Framer suit a small site that marketing edits daily without a developer. A custom Next.js site pays off when you need many generated pages, several languages, shared components with a React product or top speed."],
          ["Can we change texts and add pages ourselves after launch?", "Yes. Texts, screenshots and new pages built from existing components are edited in a simple CMS. New types of sections need a small design and development step."],
          ["What do you need from us to start the design?", "The one-sentence description of the product, who it is for, two or three competitors, current product screens or a prototype and the action that counts as success. Brand colors and a logo help; if there are none yet, the design starts from a clean neutral system."],
          ["Can you redesign our startup website without losing Google rankings?", "Yes. Every existing address is mapped to its new page and redirected, and metadata and structured data are carried over before launch, so the positions the site already has are kept."],
          ["Do you work with startups outside Poland?", "Yes. Design and development are done remotely, in English, Polish or Russian, for teams in Europe, North America and elsewhere."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order startup website design: what to send me"),
        p(
          "Send the product name, a link to any current site or prototype, the one sentence that describes what the product does, who it is for, the competitors buyers compare you with and the action that counts as a conversion — waitlist, signup or demo. I will reply with a proposed structure for the first pages and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
