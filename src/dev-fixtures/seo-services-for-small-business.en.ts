// Landing page fixture: SEO Services for Small Business (EN), group
// «seo-services-for-small-business».
// Semantic core: ref/small-business.md / small-business.csv (US) and BRIEF.md:
// seo services for small business 3,600, small business seo services 3,600,
// seo company / companies for small business 3,600, seo service for small
// business 3,600, seo service small business 1,600, small business seo / seo
// for small business 2,900 (informational head term — used in headings, but
// this page sells), affordable seo services for small business 390 (affordable
// small business seo 260, cheap seo for small business 210, affordable seo
// packages for small business 140), seo consultant for small business 320,
// small business seo consultant 320, seo cost for small business 170, how much
// does seo cost for a small business 140, seo audit for small business 140,
// diy seo for small business 70, small business seo pricing 20.
// PAA: What are the benefits of SEO for small businesses? Is SEO dead now with
// AI? How do I learn SEO as a beginner? (→ DIY vs hiring H2 + FAQ).
// Intent: ref/intent-check-small-business.md — «small business seo» vs «seo
// services for small business» 0 shared URLs (guides vs agencies: WebFX,
// OuterBox, Thryv, Semrush agency list) → this page sells the service; the
// informational guide is a future blog post. «small business seo» vs «local
// seo for small business» 1 shared URL → separate page.
// Angle: a one-person SEO consultant fits a small business budget — the person
// who audits is the person who does the work.
// NOT on this page: Google Business Profile set-up, reviews, NAP, citations,
// service areas and location pages (/local-seo-for-small-business); building
// or redesigning the site (/small-business-website-design); industry detail
// (/seo-for-contractors, /seo-for-plumbers, /dentist-seo, /restaurant-seo,
// /hotel-seo); paid ads and social media (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s segment.
import { p, h2, li, link, k } from "./pt";

export const seoServicesForSmallBusinessEn = {
  lang: "en",
  group: "seo-services-for-small-business",
  slug: "seo-services-for-small-business",
  title: "SEO services for small business",
  heading: "SEO Services for Small Business",
  excerpt:
    "I provide SEO services for small business owners: an audit, fixes on the website, new service pages, the Google listing and visibility in AI answers — done by one consultant, so the person who finds the problems is the person who fixes them.",
  seo: {
    metaTitle: "Small Business SEO Services from a Consultant | Bandziuk",
    metaDescription:
      "SEO services for small business from one consultant: audit, site fixes, service pages, Google listing and AI answers, with published prices. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["One consultant, no agency layers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Found on Google", "Quote request sent", "Call from search", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a small business: website, Google listing, competitors", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a small business: fixes, service pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO service for a small business", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO services for small business",
      items: [
        { _key: k("o"), iconName: "search", title: "An audit with fixes ranked by impact", text: "What blocks the site, written so anyone can act on it" },
        { _key: k("o"), iconName: "layers", title: "A page for each service you sell", text: "Built around what customers type, not internal names" },
        { _key: k("o"), iconName: "gauge", title: "Technical fixes done in the code", text: "Speed, indexing, titles — by the person who audited" },
        { _key: k("o"), iconName: "map-pin", title: "Your Google listing in order", text: "Category, services and hours that match the site" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "Facts about your business that assistants can quote" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in calls and requests", text: "What search brought in, not positions alone" },
      ],
      prices: [
        { _key: k("r"), label: "SEO audit for a small business", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO service for a small business", value: "from 800 € / month", note: "pages, fixes, AI visibility, reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: small business websites I have built and optimized",
      subtitle:
        "Small local businesses that live on search: an auto repair shop, a wheel-renovation workshop, a tyre-storage business, a renovation company and a 3D laser scanning and BIM company — service pages, Google listings and search settings built around how local customers look for a business.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your small business",
      subtitle: "I reply within one business day with what I would fix first on your website and Google listing, and a fixed price.",
      contextLabel: "Business name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you need first?", options: ["An audit to see what is wrong", "Fixes done once", "Ongoing monthly SEO", "Not sure"] },
        { _key: k("z"), question: "Who looks after your website now?", options: ["I do it myself", "A freelancer or agency", "Nobody", "It runs on Wix or Squarespace"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("SEO services for small business are the work that brings people who search for what you sell to your own website and Google listing, and turns those visits into calls, bookings and quote requests. I do this work myself, as an SEO consultant who also builds websites, so the person who audits your site is the person who fixes it, and your budget goes into the work rather than into account managers."),

        h2("What small business SEO services include: the website, the Google listing and AI answers"),
        p("For a small business, search decides in three places whether a customer gets in touch:"),
        li("your website — service pages, titles, speed, structured data and the text that answers customers’ questions"),
        li("your Google Business Profile — the listing that appears in Google Maps and next to searches for your name"),
        li("AI answers — ChatGPT, Perplexity and Google AI Overviews, which name businesses they can read about"),
        p(
          "Small business SEO services treat these as one job: research, fixes, new pages, the listing and reporting. The map side in depth — reviews, citations, service areas, location pages — has its own page, ",
          link("local SEO for small business", "/local-seo-for-small-business"),
          ". This page is about the whole service: what it includes, who does it, what it costs and what you can do alone.",
        ),

        h2("Benefits of SEO for small businesses: customers who are already looking"),
        p("Advertising shows your business to people; SEO shows it to people who have already typed what you sell. For a small business with a small budget that is the main benefit, and there are a few more:"),
        li("visits from search are not paid per click, so a page that ranks keeps bringing calls in months when you spend nothing on ads"),
        li("the customer lands on a page that answers the question they typed: the price range, the area you cover, how to book"),
        li("people who heard about you from a friend or a flyer also look you up, and a good result reassures them"),
        li("the pages, the listing and the reviews stay yours; nothing switches off when a contract ends"),
        p("The trade-off is time. SEO takes months, while an ad works the same day, so many small businesses keep a modest ad budget while search builds up."),

        h2("SEO consultant for small business or an SEO company: who does the work"),
        p("Searching for an SEO company for small business leads mostly to agencies, and agencies are built for many clients at once: a salesperson, an account manager, a strategist, and writers or developers you may never speak to. That suits a business that needs many channels in one contract. For a business with one location and a modest budget, those layers cost money that does not reach the website."),
        p("As a small business SEO consultant I work alone. The same person reads your search data, writes or edits the pages, changes the code — on WordPress, Next.js or another system — and explains the report. There is no handover between the one who audits and the one who implements, which is where a lot of agency work gets lost."),
        p("What I do not do: paid ads, social media and video. If you need all of that from one supplier, an agency fits better, and the SEO part can still be ordered separately."),

        h2("SEO audit for a small business: the first step before any monthly work"),
        p("Every project starts with an audit, and for many small businesses the audit and its fixes are most of what is needed. I check:"),
        li("how Google sees the site: indexing, broken pages, duplicate titles, and speed on a phone, where the main content should appear within 2.5 seconds"),
        li("which searches already bring visitors in Google Search Console, and which of your services have no page at all"),
        li("whether the Google listing matches the site: category, services, hours, the link"),
        li("what nearby competitors rank with, and which of their positions you can realistically take"),
        li("how ChatGPT and AI Overviews describe your business today"),
        p(
          "You get a list of fixes ranked by impact, written so that you, your web developer or I can carry them out. The ",
          link("SEO audit", "/services/seo-audit"),
          " page describes the audit in more detail.",
        ),

        h2("What a monthly SEO service for a small business includes"),
        p("Monthly SEO is worth paying for when there are more services, areas or competitors than one round of fixes can handle. A month of SEO service for a small business usually covers:"),
        li("a new or rewritten page for a service or area you want more work in"),
        li("the next fixes from the audit list, in order of impact"),
        li("keeping the Google listing in line with the site: new services, photos, answers to reviews"),
        li("a look at Search Console for new errors and new searches that reach the site"),
        li("a check of how AI assistants describe the business"),
        li("a short report in calls, form requests and bookings, with the plan for next month"),
        p(
          "Each month is planned from the audit list, so you know what you are paying for. My general approach to ongoing work is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page.",
        ),

        h2("Affordable SEO services for small business: what cheap packages leave out"),
        p("Affordable and cheap are different things. Low-priced monthly packages usually save on exactly the parts that make SEO work: pages written about your real services, fixes in the code, and someone who reads the results. Signs of a package to avoid:"),
        li("a guaranteed first position on Google — nobody controls the ranking"),
        li("hundreds of backlinks a month from directories and article networks, which Google ignores or penalizes"),
        li("reports full of positions for phrases nobody searches, with no calls or form requests"),
        li("the provider keeps the website, the domain or the Google listing in its own name"),
        p("For most small businesses the affordable route is a one-off audit plus fixes, and monthly work only when the audit shows a reason for it."),

        h2("DIY SEO or hiring help: what a small business owner can do alone"),
        p("If you want to learn SEO as a beginner, Google’s SEO Starter Guide and Google Search Console are free and cover the basics. A lot of small business SEO can be done by the owner:"),
        li("give every service its own page, with a title that names the service and the town"),
        li("write prices or price ranges, the area you cover and how to book as plain text"),
        li("ask every satisfied customer for a review and answer each one"),
        li("connect Search Console and see which searches already bring visitors"),
        p("Hiring help pays off where mistakes are expensive or slow to notice: moving or redesigning a site, technical errors, a website builder that limits what you can change, or a market where competitors already have strong sites. A common split is that the owner keeps the listing and reviews going while I handle the structure, the technical side and the pages."),

        h2("Small business SEO for ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Customers now ask ChatGPT, Perplexity or Google’s AI Overviews to recommend a dentist, a bakery or an accountant nearby, and the answer names a few businesses before any list of links. Work on those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For a small business it is part of the same SEO service, not a separate product:"),
        li("services, prices, areas, hours and years in business written as plain sentences an assistant can quote"),
        li("structured data that connects the website with the Google listing"),
        li("the same name, address and phone on the site, the listing and directories"),
        li("answers to the questions customers ask before they call"),
        p(
          "SEO has not been replaced by AI: assistants build their answers from what they can find and trust on the web. I check how assistants describe your business before the work and after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("SEO for your type of small business: trades, clinics, restaurants and hotels"),
        p(
          "Some kinds of small business have their own search habits, and they have their own pages: ",
          link("SEO for contractors", "/seo-for-contractors"),
          ", ",
          link("SEO for plumbers", "/seo-for-plumbers"),
          ", ",
          link("dentist SEO", "/dentist-seo"),
          ", ",
          link("restaurant SEO", "/restaurant-seo"),
          " and ",
          link("hotel SEO", "/hotel-seo"),
          ". For a workshop, a studio, a shop or an office, the approach on this page applies as it is.",
        ),

        h2("How much SEO costs for a small business"),
        li("SEO audit of the website, the Google listing and competitors: from 250 €, one-off, with fixes ranked by impact."),
        li("One-off SEO work — technical fixes, new service pages, structured data: 250–700 €."),
        li("Monthly SEO service for a small business — pages, fixes, AI visibility and reports: from 800 € per month; in very competitive markets from 1,300 € per month."),
        p(
          "Small business SEO pricing should not be a secret you learn on a sales call, so all my prices are published on the ",
          link("pricing", "/pricing"),
          " page. After a short description of your business I give a fixed price for the first step. If the site needs rebuilding rather than fixing, see ",
          link("small business website design", "/small-business-website-design"),
          ".",
        ),

        h2("How long small business SEO takes and how results are reported"),
        p("Fixes to titles, the Google listing and technical errors can show within weeks. New service pages usually need two to four months to rank, longer in big cities and crowded markets. The report counts what pays the bills — calls, form requests and bookings from search, measured in GA4 and Google Search Console — next to positions, not instead of them."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO services for small business: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO cost for a small business?", "An audit costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive markets. Prices are published on the pricing page, and after a short description of your business I give a fixed price."],
          ["What are the benefits of SEO for small businesses?", "Customers who already search for what you sell find your own site and listing, visits are not paid per click, and the pages keep working after the work stops. The cost is time: results take months, not days."],
          ["Is SEO dead now with AI?", "No, it has changed. ChatGPT and Google AI Overviews recommend businesses based on what they can read on websites, listings and reviews. Clear facts, structured data and consistent details serve both search engines and assistants."],
          ["How do I learn SEO as a beginner?", "Start with Google’s SEO Starter Guide and Google Search Console, then give each service its own page and ask customers for reviews. That covers the basics; technical work and site structure are where hiring help saves the most time."],
          ["Do I need monthly SEO, or is an audit enough?", "Often an audit and a round of fixes are enough for a small business with a few services and little competition. Monthly work makes sense when there are many services or areas to cover, or strong competitors."],
          ["Why hire an SEO consultant instead of an SEO company?", "With one consultant, the person who audits the site is the person who fixes it, and there are no account managers to pay for. An agency suits you better if you also need ads, social media and video from one supplier."],
          ["Can you do SEO for a site built on Wix, Squarespace or WordPress?", "Yes. WordPress gives full control. On Wix and Squarespace most SEO work is possible, but some technical changes are limited by the platform; the audit shows whether those limits matter for your business."],
          ["Do you work with small businesses outside Poland?", "Yes. SEO is done remotely, for small businesses in the US, the UK, Canada, Australia and elsewhere. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO services for your small business: what to send me"),
        p(
          "Send the business name, the website and Google Maps links, the services you want more customers for, the area you cover and what you have already tried. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
