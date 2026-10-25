// Landing page fixture: IT company website design (EN), group
// «it-company-website-design». New page.
// Semantic core: ref/professionals.md / professionals.csv (US) and BRIEF.md:
// it company website design / website design it company / website design for
// it company 170 each (H1, metaTitle, several H2) · best website design for it
// company 210 + best it company website design 50 (patterns H2) · it company
// website design ideas 20 + inspiration 10 + it website design ideas 10 (same
// H2) · it company website design template 590 + website design templates for
// it company 10 + it company website design figma 10 (templates H2 + FAQ:
// template vs custom, mentioned fairly) · it company website ui design 20 (in
// text).
// SERP: Sayenko Design, DesignRush, Framer, DesignCrowd, Dribbble, Wix, Figma —
// agencies, directories, builders and inspiration mixed.
// Intent: ref/intent-check-professionals.md — «it company website design» vs
// «b2b website design» 0 shared URLs, 1 shared domain → separate page;
// /b2b-website-design linked once for catalogs, RFQs and dealer locators.
// /startup-website-design linked once for SaaS product sites.
// This page = explaining abstract services visually (diagrams and architecture
// schemes instead of stock «people at laptops»), service and technology page
// templates, case study page design, engineers and team pages, trust
// (ISO 27001, SOC 2, Microsoft / AWS / Google Cloud partner status — only if
// real), careers section (hiring is half the audience), dark/light theme,
// interactive demos, Framer/Webflow template vs custom Next.js, patterns of
// the best IT company websites, AI-readable design.
// Design is sold with development; prices include both.
// NOT on this page: SEO for IT companies, Clutch / G2 profiles, MSP local
// search, JavaScript rendering for SEO in depth (/seo-for-it-companies);
// catalogs, RFQ forms, dealer locator (/b2b-website-design); SaaS pricing and
// signup flows (/startup-website-design); hreflang
// (/services/multilingual-website-development).
// Owner’s rules: never say there are no clients from the visitor’s industry;
// every page covers AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const itCompanyWebsiteDesignEn = {
  lang: "en",
  group: "it-company-website-design",
  slug: "it-company-website-design",
  title: "IT company website design",
  heading: "IT Company Website Design",
  excerpt:
    "I design IT company websites and build them myself in Next.js or WordPress: diagrams instead of stock photos, service, technology and case study pages on shared templates, real engineers on the team page, a careers section and light and dark themes.",
  seo: {
    metaTitle: "Website Design for IT Companies and MSPs | Bandziuk",
    metaDescription:
      "IT company website design with the build included: diagrams instead of stock photos, service and case study pages, engineers, careers, dark mode. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + Next.js build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Cloud migration, step by step", "Services · Stack · Industries", "Meet the engineers", "Open roles"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple IT company website, design and build", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "IT company website with service, technology and case study templates, custom diagrams, team and careers sections, light and dark themes, design and build", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with IT company website design",
      items: [
        { _key: k("o"), iconName: "image", title: "Diagrams instead of “people at laptops”", text: "Architecture schemes, flows, before/after systems" },
        { _key: k("o"), iconName: "layers", title: "Service and technology page templates", text: "One layout per service, stack and industry" },
        { _key: k("o"), iconName: "file-text", title: "Case study pages buyers can scan", text: "Summary box, architecture, stack, outcome" },
        { _key: k("o"), iconName: "shield-check", title: "Certifications and partner status with proof", text: "ISO 27001, cloud partner tiers — the ones you hold" },
        { _key: k("o"), iconName: "message-circle", title: "Engineers and careers sections", text: "Real people, roles and open positions" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by ChatGPT and AI Overviews", text: "Server-rendered text, not facts hidden in tabs" },
      ],
      prices: [
        { _key: k("r"), label: "Simple IT company website", value: "700–1,400 €", note: "design and build" },
        { _key: k("r"), label: "Service and case study templates, diagrams, careers, themes", value: "from 2,000 €", note: "design and build", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: technical, multilingual and premium websites I have built",
      subtitle:
        "Start with the 3D laser scanning and BIM company: a technical service many buyers had never heard of, moved from a no-code builder to clean WordPress while keeping the look the client liked, with a portfolio section and English, Polish and German versions. Then the renovation and property-investment company with its premium look, a student-services agency that keeps one visual language on every country page, and two Warsaw workshops — car repair and wheel renovation — whose pages each lead to a single request. On an IT company site the same skills apply: making a technical service clear at a glance, showing finished work as pages and keeping the design consistent as the pages multiply.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your IT company website design",
      subtitle: "Expect a reply within one business day: a page plan covering home, services, case studies and careers, plus a fixed price.",
      contextLabel: "Company name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of IT company are you?", options: ["Software house or development studio", "Managed IT services (MSP)", "Cloud, DevOps or security consultancy", "IT outsourcing or dedicated teams"] },
        { _key: k("z"), question: "What should the new site fix first?", options: ["Our services are hard to understand", "It looks like every other IT site", "We need more applications from engineers", "We have outgrown our template"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I offer IT company website design to development studios, MSPs, outsourcing providers and cloud or security consultancies, and I code the result myself in Next.js or WordPress, so the design and the build are a single price. An IT company sells something nobody can see — code, infrastructure, uptime, security — and the design has to make that work visible to a buyer who is not always technical."),

        h2("IT company website design: what a CTO, a business buyer and a candidate look for"),
        p("Three groups read an IT company’s site, often on the same day:"),
        li("technical buyers — CTOs and engineering managers — who check the stack, the architectural thinking and the seniority of the team"),
        li("business buyers — founders, operations or finance leads — who want the problem you solve, how the work is organized and what it costs"),
        li("candidates — engineers deciding whether to apply"),
        p("The first screen speaks to the business buyer in one plain sentence. The menu then gives each group its own way in: services, technologies, case studies, team, careers."),

        h2("Diagrams and architecture schemes instead of stock photos of people at laptops"),
        p("Stock images of people pointing at screens, glowing circuit boards and handshakes sit on thousands of IT sites and explain nothing. A diagram does: how a monolith is split into services, how data moves from a legacy system to the cloud, what the client’s team does and what yours does. I draw them as SVG in the site’s colors, starting from the sketches your engineers make on a whiteboard:"),
        li("process diagrams — the stages of a migration, a support request, a team onboarding"),
        li("architecture schemes on case studies, simplified so a non-engineer can follow them"),
        li("before-and-after system views for modernization projects"),
        li("one icon style drawn for the site instead of mixed icon packs"),
        p("SVG diagrams stay sharp on any screen, weigh very little, and their labels are real text."),

        h2("Service and technology page design for IT companies"),
        p("Every service page follows one template so a buyer can compare services side by side: the problem in the client’s words, what you deliver, how an engagement runs step by step, the technologies, typical team and timeline, related case studies and a contact button. Technology pages use a lighter version of the same layout — what you build with that stack, versions and tools, the team’s experience and projects. Shared templates also let your team add a service later without a designer."),

        h2("Case study page design for software and IT service companies"),
        p("Case studies are where technical buyers spend the most time. The layout lets them scan first and read second:"),
        ol("A title with the service, the technology and the industry."),
        ol("A summary box: client type, region, team size, duration, stack."),
        ol("The situation and its constraints in a few short paragraphs."),
        ol("The architecture diagram and the key decisions behind it."),
        ol("Outcomes the client approved, with numbers where they exist."),
        ol("A client quote, if allowed, and links to similar projects."),
        p("Under an NDA the same layout works with an anonymized client: “a mid-sized logistics company in Germany” still tells a buyer a lot."),

        h2("Team and engineer pages: real photos, roles and experience"),
        p("A buyer outsourcing development wants to know who will write their code. An engineers page with photos from one session, names, roles, years of experience, main technologies and, where people agree, links to GitHub or conference talks answers that better than a single group photo. Leadership gets short bios; delivery leads, who are the client’s daily contact, get as much space as the founders."),

        h2("Trust on an IT company website: ISO 27001, partner badges and client logos"),
        p("Procurement and security teams check proof before a contract. The design puts it near the contact button and on service pages, not only on an “About” page:"),
        li("certifications such as ISO 27001 or a SOC 2 report, with scope and date, as text — only the ones you hold"),
        li("Microsoft, AWS or Google Cloud partner status and earned specializations, each badge linked to the partner directory where possible"),
        li("client logos and quotes only with written permission"),
        li("a security page: where data is stored, who has access, how incidents are handled"),
        p("A badge with no source invites doubt; one linked to the issuer’s listing settles it."),

        h2("Careers page design: hiring is half of an IT company’s audience"),
        p("For many IT firms, more visitors come for jobs than for services. A careers section designed as its own part of the site helps both sides: candidates find roles, stack, salary ranges where you publish them, the hiring steps and how remote work is organized, while the sales pages stay focused. Open positions can come straight from your applicant tracking system, so HR updates them without touching the site. Photos of the team and real project work do more for applications than a list of perks."),

        h2("Dark and light themes, interactive demos and code samples on IT company websites"),
        p("Many engineers prefer a dark theme, and developer tools have made it common. Designing both themes from the start — with contrast checked in each — and following the visitor’s system setting is cheap at the design stage and expensive later. Interactive elements earn their place when they explain something: a cost estimate for a support plan, a clickable architecture diagram, a short product demo, code samples with syntax highlighting. Animation for its own sake slows the page and distracts buyers."),

        h2("IT company website design templates (Framer, Webflow) or a custom Next.js site"),
        p("IT company website design templates on Framer, Webflow or WordPress, and Figma UI kits for IT sites, launch in days and look modern in their demos. They suit a young company with a few services and a small team."),
        p(
          "The limits show with growth: dozens of service, technology and case study pages that should share data, a careers section tied to hiring tools, language versions, and SEO control that some builders restrict. A custom Next.js site — the stack I build in — gives full control over rendering, speed and structured data, and for an IT company it is also a sample of engineering quality that technical buyers notice. Companies selling their own software product will find that side on the ",
          link("startup website design", "/startup-website-design"),
          " page.",
        ),

        h2("Best website design for IT companies: patterns, ideas and inspiration"),
        p("Dribbble and Behance shots of IT company website design ideas show home pages and UI details. The sites that bring clients share patterns further down:"),
        li("one sentence on the first screen saying what you do, for whom and where"),
        li("navigation by service, technology, industry and case study"),
        li("diagrams in place of stock photography"),
        li("case studies with facts in a summary box"),
        li("real engineers with names and roles"),
        li("careers as a separate section"),
        li("a contact path in reach from every page"),
        p(
          "General B2B patterns — catalogs, quote forms, dealer locators — are covered on the ",
          link("B2B website design", "/b2b-website-design"),
          " page.",
        ),

        h2("An IT company website that ChatGPT and Google AI Overviews can read"),
        p("Buyers ask ChatGPT, Perplexity and Google’s AI Overviews for vendors with a certain stack, industry or location. IT company sites often hide exactly those facts: services behind animated tabs, the stack as a row of logos, case studies as PDFs, everything rendered in the browser. The design keeps services, technologies, industries, team size and locations as text on server-rendered pages, with structured data for the company and its offices."),
        p(
          "Getting onto AI vendor shortlists is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page; being found in Google for your services is covered on the ",
          link("SEO for IT companies", "/seo-for-it-companies"),
          " page.",
        ),

        h2("How much IT company website design costs, and how the work runs"),
        ol("Brief: services, stacks, industries, case studies, brand assets and sites you like."),
        ol("Structure: menu and page templates, drawn for a phone first and agreed."),
        ol("Design: the home, a service page and a case study page in full, plus the first diagrams."),
        ol("Build: a fast site with a CMS your team edits, both themes and the careers feed connected."),
        p("Design and development are one price:"),
        li("A simple IT company website with services, team and contacts: 700–1,400 €."),
        li("A site with service, technology and case study templates, custom diagrams, team and careers sections and light and dark themes: from 2,000 €."),
        p(
          "Language versions are described on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page, a new design for an existing site follows the ",
          link("website redesign", "/services/website-redesign-services"),
          " process, and all ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "IT company website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does IT company website design cost?", "A simple IT company website is 700–1,400 €, and from 2,000 € you get a site with service, technology and case study templates, custom diagrams, team and careers sections and light and dark themes. Design and the build are both inside that price, fixed after a short brief."],
          ["Is a Framer or Webflow template enough for an IT company?", "For a young company with a few services, often yes. When you need dozens of linked service and case study pages, a careers feed, language versions or full control over rendering and structured data, a custom Next.js site starts to pay off."],
          ["Do you design IT company websites without building them?", "No; I design only what I also build. Diagram scaling on small screens, contrast in the dark theme and the behavior of case study filters are solved in code, which a set of static mockups cannot hand over."],
          ["Our clients are under NDA. How can we show case studies?", "Anonymize them: name the industry, company size, region, the problem, the architecture and the stack, and leave the client’s name out. Buyers care more about whether you solved a problem like theirs than about the logo."],
          ["Who draws the diagrams?", "I do, from your engineers’ sketches or a short call with them. Each diagram is simplified for a non-technical reader, checked by the engineer who knows the system, and delivered as an SVG in the site’s style."],
          ["Can HR publish open positions without a developer?", "Yes. Roles are added in the admin panel, or pulled automatically from your applicant tracking system if it offers an embed or an API, so the careers page is always current."],
          ["Do you work with IT companies outside Poland?", "Yes. Remote delivery is routine in IT, and my clients’ teams sit in different countries and time zones. I work in English, Polish and Russian; invoices are issued in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order IT company website design: what to send me"),
        p(
          "Share the current site, your main services and technologies, two or three case studies you can show, the certifications and partner statuses you hold, whether you are hiring and links to IT company sites that impressed or annoyed you. In return you get a page plan — home, services, case studies, careers — and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
