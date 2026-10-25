// Landing page fixture: SEO for IT companies (EN), group «seo-for-it-companies».
// New page.
// Semantic core: ref/professionals.md / professionals.csv (US) and BRIEF.md:
// seo for it companies 110 (H1, several H2) · seo for it services (keyword
// H2) · it company seo (metaTitle, H2 text, measuring H2) · seo for software
// companies (case study H2) · seo for msp / managed service providers (not in
// the csv → general H2 on MSP local search). «it websites» 320 is a mixed
// intent, not targeted.
// SERP: agency directories (Semrush agencies, Clutch, G2) and agencies
// (Filament, Mary, Malinovsky, SEOProfy, Coalition, LinkGraph) — commercial →
// the page sells; one paragraph on agency vs consultant in the cost H2.
// PAA used: Can ChatGPT do SEO? (FAQ).
// Intent: ref/intent-check-professionals.md — «seo for it companies» vs «b2b
// seo» 0 shared URLs, 0 shared domains → separate page; /b2b-seo linked once
// for buying committees and long cycles. SaaS / product companies are on
// /seo-for-startups (linked once).
// Audience: IT service companies, software houses, MSPs, IT outsourcing,
// cloud / DevOps / security consultancies.
// Angle: service × technology × industry pages; tech stack pages; case studies
// as SEO pages; MSP location pages; «vs» and pricing-model pages (T&M, fixed,
// dedicated team); Clutch / G2 / GoodFirms as citations; developer-written
// content and E-E-A-T; technical SEO of JavaScript frameworks (owner’s
// stack); SQLs; AI vendor shortlists.
// NOT on this page: buying committees, CRM attribution in general, export
// hreflang (/b2b-seo); SaaS product-led SEO, free trials, integrations pages
// (/seo-for-startups); site design, diagrams, careers page layout
// (/it-company-website-design); paid ads, LinkedIn ads, outbound (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const seoForItCompaniesEn = {
  lang: "en",
  group: "seo-for-it-companies",
  slug: "seo-for-it-companies",
  title: "SEO for IT companies",
  heading: "SEO for IT Companies",
  excerpt:
    "I provide SEO for IT companies — software houses, managed service providers, IT outsourcing and cloud consultancies: pages for each service, technology and industry, case studies that rank, directory profiles that match the site, and a place on the vendor shortlists ChatGPT gives CTOs.",
  seo: {
    metaTitle: "IT Company SEO: Services, Stack, AI Answers | Bandziuk",
    metaDescription:
      "SEO for IT companies, software houses and MSPs: service, stack and industry pages, case studies, Clutch profiles, AI vendor lists, SQL tracking. From 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Service pages + AI vendor lists", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Azure migration partner", "Case study: logistics, .NET", "Book a technical call", "Shortlisted by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for an IT company: website, JavaScript rendering, service structure, directories and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for an IT company: service, technology and industry pages, case studies, technical fixes", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for an IT company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for IT services",
      items: [
        { _key: k("o"), iconName: "layers", title: "Service, technology and industry pages", text: "“Azure migration”, “IT support for law firms”" },
        { _key: k("o"), iconName: "file-text", title: "Case studies that rank", text: "Problem, architecture, stack, approved outcomes" },
        { _key: k("o"), iconName: "map-pin", title: "Location pages for MSPs", text: "Managed IT services in the cities you cover" },
        { _key: k("o"), iconName: "gauge", title: "Technical SEO for JavaScript sites", text: "Rendering and indexing on React and Next.js" },
        { _key: k("o"), iconName: "sparkles", title: "On AI vendor shortlists", text: "Site, Clutch and G2 telling one consistent story" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in sales-qualified leads", text: "Not developer traffic from the blog" },
      ],
      prices: [
        { _key: k("r"), label: "SEO audit for an IT company", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for an IT company", value: "from 800 € / month", note: "pages, case studies, AI visibility, SQL reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: technical-service and multilingual websites I have built and optimized",
      subtitle:
        "Lead case: a 3D laser scanning and BIM company in a highly technical niche, where most buyers did not know the service existed and the old site had produced no leads in two years. A rebuild with an SEO structure designed to scale, in English, Polish and German, brought 29× organic growth and steady weekly leads. The other four: a student-services agency whose single site structure covers ten destination countries, a property-investment and renovation firm with a premium look, a Warsaw garage where search and usability were reworked together, and a tyre-storage landing page with SEO fields the owner edits himself. For an IT company the shared lesson is a complex service explained page by page, in the words buyers search with.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your IT company",
      subtitle: "You get my answer within one business day: the services and searches worth starting with, and a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What does your company mainly sell?", options: ["Custom software development", "Managed IT services (MSP)", "Cloud, DevOps or security consulting", "IT outsourcing or dedicated teams", "Several of these"] },
        { _key: k("z"), question: "Where do new clients come from today?", options: ["Referrals and partners", "Clutch, G2 or other directories", "Outbound sales and LinkedIn", "Our website", "Not sure"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I provide SEO for IT companies, so that a CTO, an IT manager or an operations lead who searches for a service, a technology or a partner who knows their industry lands on your site and books a sales call. The work is done by one person, me, an SEO consultant who also builds sites in React and Next.js, and I take it on for software houses, managed service providers, IT outsourcing firms and cloud, DevOps and security consultancies."),

        h2("What SEO for IT companies is: service, technology and industry in one search"),
        p("Buyers of IT services describe a need, not a vendor category: “Azure migration partner”, “React development company for fintech”, “managed IT services for dental practices”, “Kubernetes consulting Germany”, “SOC 2 readiness help”. Each phrase joins a service, often a technology, and sometimes an industry or a region. IT company SEO builds pages for the combinations you can deliver and prove."),
        p(
          "IT services share long sales cycles and buying committees with other B2B companies; that general side is on the ",
          link("B2B SEO", "/b2b-seo"),
          " page. Companies selling their own software by subscription follow other patterns, covered on the ",
          link("SEO for startups", "/seo-for-startups"),
          " page. This page is about firms that sell expertise and delivery.",
        ),

        h2("Keyword research for IT services: what CTOs, IT managers and procurement search"),
        p("Most IT keywords have small volumes and high value: one new client can mean a contract that runs for years. Research draws on four sources:"),
        li("the services in your proposals and statements of work, renamed the way buyers name them"),
        li("the technologies and platforms your engineers are certified in or use every day"),
        li("the industries of your current clients, whose regulations and jargon you already know"),
        li("questions from sales calls: migration risk, team size, time zones, security, pricing"),
        p("Each phrase is then checked in search data and in the results themselves. If the first page holds only directories and global consultancies, a smaller firm needs a narrower angle — a technology plus an industry, or a region."),

        h2("Service, technology and industry pages in IT company SEO"),
        p("A single “Services” page with twelve icons cannot rank for any of them. The structure that works has three layers, linked to each other:"),
        li("service pages — custom software development, cloud migration, managed IT support, DevOps, QA, security assessments"),
        li("technology pages — the stacks you deliver in, what you build with each and who builds it"),
        li("industry pages — the sectors you serve, their compliance needs and the projects done for them"),
        h3("Tech stack pages: React, .NET, Python, AWS, Azure and Kubernetes"),
        p("Technical buyers often start from the stack: a .NET system to modernize, a React front end to extend, a workload to move to AWS. A stack page shows the versions and tools you work with, typical projects, how many engineers have the skill and links to case studies built on it. A wall of forty logos does not rank; three or four stacks described in depth do."),
        h3("Industry pages: IT support for law firms, software for logistics, cloud for healthcare"),
        p("An industry page earns trust by naming the sector’s own problems: document management and confidentiality for law firms, uptime and route data for logistics, HIPAA or GDPR constraints for healthcare. Without real projects or knowledge behind it, an industry page is a template, and both Google and buyers notice."),

        h2("Case studies as SEO pages for software companies and IT service firms"),
        p("SEO for software companies that build for clients rests on case studies, because a good one ranks for the exact service, technology and industry a buyer types. A case study that ranks has a title with those three elements, the client’s situation, the architecture chosen and why, the stack, the timeline and team size, and outcomes the client approved. When an NDA hides the name, the industry, company size and region still make the page useful. Each project gets its own page — not a PDF behind a form."),

        h2("SEO for MSPs and managed service providers: location pages and local search"),
        p("Managed service providers mostly sell to companies within driving distance: on-site visits still happen, and owners want a local partner. That makes local SEO central for an MSP:"),
        li("a Google Business Profile for each office, with the right category and service area"),
        li("a page for each city or region you cover, with response times, on-site options and local clients who agree to be named"),
        li("pages for industries common in your area, such as IT support for law firms, accountants or clinics"),
        li("client reviews, answered without revealing anything about their systems"),
        p(
          "City pages that differ only by the city name get filtered out; each needs real local detail. The map side is described on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Comparison and pricing-model pages: “vs” searches, T&M and fixed price"),
        p("Before a call, buyers compare options: an in-house team or outsourcing, nearshore or offshore delivery, one cloud or another, time and materials, fixed price or a dedicated team. Pages that explain these choices fairly — including the cases where your model is the wrong fit — rank for those searches and bring buyers who already understand how you work. Published rate ranges, even approximate ones, answer the question every buyer asks first. Many IT firms hide them, which leaves the answer to directories and competitors."),

        h2("Clutch, G2 and GoodFirms profiles in SEO for IT companies"),
        p("For many IT searches, Clutch, G2, GoodFirms and similar directories rank above the vendors themselves, and buyers use their reviews to build a shortlist. AI assistants read them too. So the profiles are part of SEO:"),
        li("services, technologies, industries, team size and rate range filled in to match the site"),
        li("reviews collected after each finished project, through the platform’s own verification"),
        li("a link from each profile to the matching service page"),
        li("one company description used everywhere, so facts never conflict"),
        p("Paid placement in directory rankings is advertising, not SEO; whether it pays off depends on the category."),

        h2("Developer-written content and E-E-A-T for IT service companies"),
        p("Google’s quality guidelines look for experience and expertise behind content, summarized as E-E-A-T. In IT, readers spot generic text at once. The articles that bring the right visitors come from your engineers: a migration post-mortem, two frameworks compared on a real project, a checklist from your security reviews. I turn engineers’ notes, recorded calls or internal documents into articles, published under the engineer’s name, role and profile. A few of those do more than a long run of keyword posts."),

        h2("Technical SEO for IT company websites built on React, Next.js and other JavaScript frameworks"),
        p("IT companies often build their own site in the stack they sell, and JavaScript sites have their own SEO problems. React, Next.js and TypeScript are my daily tools, so I fix these in the code:"),
        li("pages rendered only in the browser, which Google renders later and many AI crawlers not at all — moved to server rendering or static generation"),
        li("titles, descriptions and canonical tags set by client-side code and missing from the HTML"),
        li("navigation built from buttons with click handlers instead of real links"),
        li("heavy animations and scripts that push Core Web Vitals out of the good range"),
        li("staging and preview deployments indexed next to the live site"),

        h2("SEO for IT companies in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Before they open a single vendor site, many CTOs and IT managers ask an AI assistant — ChatGPT, Perplexity, Google’s AI Overviews — for a shortlist: “software development companies in Poland with healthcare experience”, “MSPs in Chicago that support Mac environments”. The assistant names a few firms with a reason for each. Getting into those lists is the job of GEO and AEO, generative and answer engine optimization. On an IT company’s site and profiles it comes down to:"),
        li("services, stacks, industries, team size, time zones and locations written as plain sentences"),
        li("case studies with facts an assistant can repeat"),
        li("the same details on the site, Clutch, G2, LinkedIn and partner directories"),
        li("structured data for the organization, its offices and its services"),
        li("server-rendered pages, because many AI crawlers do not run JavaScript"),
        p(
          "I capture what assistants say about your company, and which rivals appear next to it, at the start and after the work. Details are on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Measuring IT company SEO in sales-qualified leads"),
        p("IT company sites attract many visitors who will never buy: developers reading a technical post, job seekers, students, other vendors. The report keeps them apart:"),
        li("project and contact forms from search, with the landing page, passed into your CRM"),
        li("how many of those leads sales qualifies (SQLs) and how many reach a proposal"),
        li("careers traffic reported separately from sales"),
        p("A technical article that brings thousands of developers and no leads is reported as exactly that, and judged by whether it helps hiring or brand."),

        h2("How much SEO for IT companies costs, and who does the work"),
        li("SEO audit for an IT company — the site, JavaScript rendering, service structure, directories and AI answers: from 250 €, one-off."),
        li("One-off work — service, technology and industry pages, case study rewrites, technical fixes, structured data: 250–700 €."),
        li("Monthly SEO for an IT company, covering new pages, case studies, directory profiles, AI visibility and SQL reports: 800 € a month and up, or 1,300 € a month and up in very crowded markets."),
        p(
          "An IT SEO agency usually brings a team and adds paid search, LinkedIn campaigns and content at volume. I do the research, write with your engineers, change the code and read the CRM data myself, without ads. The audit is described on the ",
          link("SEO audit", "/services/seo-audit"),
          " page, the look of the site on the ",
          link("IT company website design", "/it-company-website-design"),
          " page, and all prices on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for IT companies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for IT companies cost?", "Audits begin at 250 €, one-off tasks run 250–700 €, and monthly work begins at 800 €, or 1,300 € for very crowded markets. Once I know your services, stacks and target markets, the quote is fixed."],
          ["Is SEO worth it for an IT company that grows through referrals?", "Usually yes. Referred buyers still search for you, read your case studies and compare you on Clutch before the first call. And search brings clients from industries and regions your network does not reach, which makes growth less dependent on a few partners."],
          ["How is SEO for IT service companies different from SaaS SEO?", "A SaaS company sells a product with a trial and pricing page; an IT service firm sells people, process and past results. Service firms rank with service, technology and industry pages and case studies, and their leads go to a sales call rather than a signup."],
          ["Can ChatGPT do SEO for an IT company?", "It can help with drafts. It cannot see your search data or competitors, it does not know what your engineers actually built, and generic text is exactly what technical buyers distrust. It also cannot fix rendering problems in your site’s code."],
          ["Do our developers have to write the articles themselves?", "No. A 30-minute call or a few pages of notes from an engineer are enough for me to write an article; the engineer checks every technical statement and the article is published under their name."],
          ["Do Clutch and G2 reviews help Google rankings?", "Indirectly. The profiles themselves often rank for vendor searches, buyers read them before contacting you, and AI assistants use them as sources. Matching facts across the profiles and the site make all three work together."],
          ["How long does SEO for an IT company take to bring leads?", "Rendering and indexing fixes can show within weeks. New service and case study pages usually need two to four months to rank, and with long sales cycles the signed contracts follow later still."],
          ["Can a consultant in Poland handle SEO for an IT company in the US, UK or Germany?", "Yes. Poland is a well-known IT services hub, and remote work across time zones is normal in the industry. I work in English, Polish and Russian; contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your IT company: what to send me"),
        p(
          "Share your website, the services and technologies you want more projects in, the industries and countries you sell to, your Clutch or G2 profiles if you have them, which CRM holds your leads, and a couple of recent deals you would like to repeat. You will get back the first fixes I see and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
