// Landing page fixture: B2B website design (EN), group «b2b-website-design».
// Semantic core: ref/small-business.md, b2b group, + BRIEF.md: b2b website
// design agency 480 (H2, positioned as one consultant-developer) · website
// design b2b 390 · website design for b2b 320 (H2) · b2b website design 320
// (H1, H2s) · b2b website design services 90 + b2b website design companies
// 90 · b2b website design company 70 (H2 on agency vs one developer, H2 on
// cost) · b2b website examples 70 (H3, patterns only, no real companies
// named) · b2b website design best practices 30 (H2) · best b2b website
// design 30 (in text) · b2b saas website design 40 and b2b ecommerce website
// design 40 (mentioned only).
// SERP: leanlabs, b2brocket, sayenkodesign, designstudiouiux, wix,
// muffingroup, newmedia, allianceinteractive — mostly agencies.
// Intent: ref/intent-check-small-business.md — «b2b website design» vs «small
// business website design» 0 shared URLs, 1 shared domain → separate page.
// This page = what buyers and sales teams see and use: structure by industry
// and product, catalogs and spec sheets, PDF and CAD downloads, RFQ forms,
// dealer locator, gated content, trust signals, language versions, CRM / ERP /
// PIM in general terms.
// NOT on this page: SEO for B2B (/b2b-seo); a manufacturer’s site in detail
// (/manufacturing-company-website); one industry
// (/services/website-development-for-lingerie-manufacturers); the technical
// side of language versions (/services/multilingual-website-development); B2B
// ecommerce with checkout and customer pricing (mentioned only).
// Owner’s rules: design is sold with the build, one price; never say there are
// no clients from the visitor’s segment; new pages weave in AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const b2bWebsiteDesignEn = {
  lang: "en",
  group: "b2b-website-design",
  slug: "b2b-website-design",
  title: "B2B website design",
  heading: "B2B Website Design",
  excerpt:
    "I design and build B2B websites for manufacturers, distributors and B2B service companies: catalogs with spec sheets and CAD downloads, RFQ forms that reach your CRM, a dealer locator and language versions for export markets.",
  seo: {
    metaTitle: "Website Design for B2B: Catalogs, RFQs, Export | Bandziuk",
    metaDescription:
      "B2B website design with the build included: product catalogs, spec sheets and CAD files, RFQ forms, dealer locator, language versions for export. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["ISO 9001 certified", "Download datasheet", "Request a quote", "Find a distributor"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple B2B website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "B2B website with product catalog, spec downloads, RFQ form, language versions and CRM connection, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with B2B website design services",
      items: [
        { _key: k("o"), iconName: "layers", title: "Navigation by industry, application and product", text: "Each buyer finds their way in two clicks" },
        { _key: k("o"), iconName: "file-text", title: "Spec sheets, PDF and CAD downloads", text: "Key data as text on the page, files one tap away" },
        { _key: k("o"), iconName: "message-circle", title: "RFQ forms sales can act on", text: "Product, quantity, deadline and drawings in one request" },
        { _key: k("o"), iconName: "map-pin", title: "Dealer and distributor locator", text: "“Where to buy” by country or region" },
        { _key: k("o"), iconName: "shield-check", title: "Certificates and references up front", text: "ISO, approvals and years in market as text" },
        { _key: k("o"), iconName: "plug", title: "CRM, ERP and PIM connections", text: "Requests and product data without copy-paste" },
      ],
      prices: [
        { _key: k("r"), label: "Simple B2B website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Catalog, downloads, RFQ, language versions, CRM", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: multilingual and lead-generation websites I have designed and built",
      subtitle:
        "What carries over to a B2B site: one design system across ten countries and several languages, request forms that take files and the details sales needs, and fast pages on any screen.",
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your B2B website design",
      subtitle: "I reply within one business day with a proposed structure for the home, industry and product pages, and a fixed price.",
      contextLabel: "Company name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What does the site need to show?", options: ["A product catalog", "Services and industries", "Both", "Not sure yet"] },
        { _key: k("z"), question: "In how many languages?", options: ["One", "Two or three", "Four or more"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("B2B website design is what I do for manufacturers, distributors and companies that sell services to other businesses, and I build the sites myself, so design and build come from one person at one price. A B2B site is read by people who are working, not browsing: an engineer checking a dimension, a buyer collecting three quotes, a manager who received a link from your sales rep. The design has to let each of them find their answer and take the next step without calling anyone."),

        h2("B2B website design: what the site has to do for buyers and for the sales team"),
        p("A good B2B website has two users. The first is the buyer, who visits several times over weeks or months, often with colleagues who never contact you. The second is your sales team, who send pages to prospects and need those pages to answer questions in their absence. The design serves both:"),
        li("a first screen that says what you make or do, for which industries and in which countries"),
        li("a visible way to request a quote or talk to sales on every page"),
        li("pages long and complete enough that a rep can send one link instead of writing a long email"),
        li("downloads, specifications and certificates that a buyer can forward inside their company"),

        h2("Website design for B2B: structure by industry, application and product"),
        p("Buyers arrive with their own question: “do you make this part”, “do you serve my industry”, “can this solve my problem”. Website design for B2B gives each question its own path from the main menu:"),
        li("products or services, grouped the way buyers think of them, not the way your ERP lists them"),
        li("industries served, one page each, with requirements and the products that fit"),
        li("applications or use cases, for buyers who know the problem but not the product"),
        li("company, quality and certificates, for procurement and the final sign-off"),
        p("This structure is agreed before any visual design, because it decides the menu, the page templates and how the site can grow when you add products or markets."),
        h3("Dealer and distributor locator for “where to buy” visitors"),
        p("Companies that sell through partners need a page that answers “who sells this in my country”. A locator with a map or a list by country and region, the partner’s contacts and the product lines they carry sends buyers to the right partner instead of to your general inbox. The partner list is edited in the admin panel, not in code."),

        h2("Product catalogs, spec sheets and CAD downloads in B2B website design"),
        p("For a manufacturer the product page does most of the selling. Its layout follows how an engineer reads it:"),
        ol("Product name, the buyer’s term for it and one sentence on what it is for."),
        ol("Key specifications as a table in text: dimensions, materials, ratings, standards."),
        ol("Variants and options, with part numbers."),
        ol("Downloads: datasheet PDF, CAD files in the formats your customers use, certificates, manuals."),
        ol("A quote request for this product, with the product already filled in."),
        p("Specifications written only inside PDFs cannot be read by search engines or compared on the page. The PDF stays for printing and forwarding; the data also lives on the page."),
        h3("Gated content: which downloads go behind a form"),
        p("Asking for an email before every download loses engineers who just need a drawing. A common rule is to keep datasheets and CAD files open and put longer material — guides, calculators, reports — behind a short form. Each gated file still has an open page describing it, so search engines and buyers can see what they will get."),

        h2("RFQ and quote request forms in B2B website design"),
        p("A contact form with “name, email, message” produces vague requests that sales must answer with questions. An RFQ form asks for what sales needs to quote:"),
        li("product or service, quantity and target delivery date"),
        li("drawings or specification files as attachments"),
        li("company, country and industry, so the request reaches the right person"),
        li("a field for anything special: certificates, packaging, terms"),
        p("Long forms are split into short steps, and the product is pre-filled when the request starts from a product page. Phone, email and WhatsApp stay visible for buyers who prefer to talk."),

        h2("Trust signals in B2B website design: certificates, years in market, real client logos"),
        p("A buyer choosing a supplier is putting their own reputation on the line. The design places proof where decisions are made — next to the quote button and on product and industry pages — not only on an “About” page:"),
        li("certificates such as ISO 9001 or industry approvals, as text with numbers that can be checked"),
        li("years in the market, production capacity, countries you deliver to"),
        li("client logos and case studies only with the client’s permission"),
        li("named people for sales and support, with photos and direct contacts"),

        h2("Multilingual B2B website design for export markets"),
        p("A B2B site for export is designed for several languages from the first sketch: German words run longer than English ones, menus must fit them, and each version may need its own contacts, distributors and certificates. The design keeps one system for all languages, with a clear language switch and no automatic translation widget."),
        p(
          "I work in English, Polish and Russian and build multilingual sites regularly. The technical side — addresses, hreflang, editing workflow — is on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page.",
        ),

        h2("CRM, ERP and PIM integration in B2B website design"),
        p("A B2B site sits between systems you already have. In general terms, the connections that save the most time are:"),
        li("RFQ and contact forms sending requests into your CRM — HubSpot, Salesforce, Pipedrive or another — with the source page and attachments"),
        li("product data coming from a PIM or ERP export, so specifications are entered once"),
        li("stock or price information shown only where your systems and policies allow it"),
        p("What can be connected depends on what your systems offer; I check that before quoting. A full B2B ecommerce shop with customer-specific prices and checkout is a separate, larger project."),

        h2("A B2B website that ChatGPT and Google AI Overviews can read"),
        p("Buyers increasingly ask ChatGPT, Perplexity or Google’s AI Overviews to list suppliers for a product or a task. Assistants work from text they can read and check. A design that keeps capabilities in images, certificates in logos and specifications in PDFs hides them; the same facts as page text, with structured data for the company and its products, can be read and repeated."),
        p(
          "Getting onto those lists is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Being found in search for your products and industries is covered on the ",
          link("B2B SEO", "/b2b-seo"),
          " page.",
        ),

        h2("B2B website design best practices"),
        li("Say what you make, for whom and where on the first screen."),
        li("Organize navigation by product, industry and application."),
        li("Put specifications on the page as text; keep PDFs and CAD files one click away."),
        li("Offer a quote request on every product page, pre-filled."),
        li("Show certificates and contacts as text, next to the call to action."),
        li("Design for the longest language you will publish in."),
        h3("Patterns seen in B2B website examples across industries"),
        p("Lists of the best B2B website designs mix large brands with small specialists. The patterns that work are the same at any size: a homepage that routes visitors by industry, product pages built like datasheets, case studies with facts rather than adjectives, and a contact path that names a real person. B2B SaaS websites add pricing, integrations and product screenshots, but the logic is the same."),

        h2("B2B website design agency, company or one consultant-developer"),
        p("A B2B website design agency or company usually splits the work between a strategist, a designer and developers. I do the structure, design and build myself, so decisions about the catalog, forms and integrations are made by the person who builds them."),
        ol("Brief. You send products, industries, markets, existing catalogs and examples of RFQs."),
        ol("Structure. I propose the menu and page templates and agree them with you."),
        ol("Design. The home, an industry page and a product page are designed in full; the rest follow the same system."),
        ol("Build. The approved design becomes a fast site your team can edit, with forms and integrations connected."),
        p(
          "Manufacturers will find more on the ",
          link("manufacturing company website", "/manufacturing-company-website"),
          " and ",
          link("website development for lingerie manufacturers", "/services/website-development-for-lingerie-manufacturers"),
          " pages. A redesign of an existing site follows the ",
          link("website redesign", "/services/website-redesign-services"),
          " process, which keeps addresses and rankings.",
        ),

        h2("How much B2B website design services cost"),
        p("Design is part of building the site, and the price covers both."),
        li("A simple B2B website with services or a short product range: 700–1,400 €."),
        li("A B2B website with a product catalog, spec and CAD downloads, RFQ forms, language versions and CRM connection: from 2,000 €."),
        p(
          "Send a short description of the company, products, markets and systems, and I will prepare a fixed quote. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "B2B website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does B2B website design cost?", "Design is included in the price of the website: 700–1,400 € for a simple B2B site, from 2,000 € for a site with a product catalog, spec and CAD downloads, RFQ forms, language versions and CRM connection. After a short description of the company I give a fixed quote."],
          ["How long does a B2B website take to design and build?", "The structure and the first page designs are usually ready within two to three weeks of the brief. A full site with a catalog and language versions typically takes six to ten weeks, depending on how ready the product data and texts are."],
          ["Can our team add products and download files ourselves?", "Yes. Products, specifications, files, partners and case studies are added through a simple admin panel. The page layout is generated from the data, so new products look like the rest of the catalog."],
          ["Should datasheets and CAD files be gated behind a form?", "Usually not. Engineers need them quickly and often download several before contacting anyone. Longer guides and reports can be gated; datasheets, drawings and certificates work better open, with a quote request next to them."],
          ["Can the site connect to our CRM or ERP?", "In most cases, yes. Forms can send requests into HubSpot, Salesforce, Pipedrive or another CRM, and product data can come from an ERP or PIM export. What is possible depends on your systems, so I check that before the quote."],
          ["Do you design B2B websites without building them?", "No. Design and build come together. How catalogs, filters, forms and downloads behave is decided while building, and a design handed over as pictures loses much of that."],
          ["Can you redesign our B2B website without losing Google rankings?", "Yes. Every existing address is mapped to its new page, redirects are set up and structured data is carried over before launch, so the positions the site already has are kept."],
          ["Do you work with B2B companies outside Poland?", "Yes. Design and development are done remotely, in English, Polish or Russian, for companies selling in one country or exporting to many."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order B2B website design: what to send me"),
        p(
          "Send the company name and current website, what you sell and to which industries, the countries and languages you need, the systems you use (CRM, ERP, PIM) and a sample of your catalog or datasheets. I will reply with a proposed structure and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
