// Landing page fixture: Construction website design (EN), variant A layout.
// Text: drafts/pseo/construction-website-design-EN.md (draft 2026-10-22).
// Semantic core: research/pseo/page-core/construction.md and
// construction-recheck.md; intent: research/pseo/intent-check-construction.md
// (design and development are different SERPs: 0 shared URLs;
// «contractor website design» is a separate SERP too — its own page, topic 6,
// so it is not targeted here).
import { p, h2, li, ol, link, k } from "./pt";

export const constructionWebsiteDesignEn = {
  lang: "en",
  group: "construction-website-design",
  slug: "construction-website-design",
  title: "Construction website design",
  heading: "Construction Website Design",
  excerpt:
    "I design and build websites for construction companies: project pages with real photos, services by type and area, and a quote form that collects what you need to price the job.",
  seo: {
    metaTitle: "Construction Company Website Design | Bandziuk",
    metaDescription:
      "Construction company website design built to win work: project pages with real photos, services by type and area, and a quote form that asks the right things.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["What you build, and where", "Recent projects", "Insured · Warranty", "Get a quote"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple construction company website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Construction company website with project portfolio, service-area pages, quote form and local SEO, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with construction website design",
      items: [
        { _key: k("o"), iconName: "image", title: "Project pages that sell the next job", text: "Type, scope, size, location and real photos" },
        { _key: k("o"), iconName: "map-pin", title: "Service and area pages", text: "One for each service and each area you cover" },
        { _key: k("o"), iconName: "file-text", title: "A quote form your estimator can use", text: "Project type, size, budget, timing, photos and plans" },
        { _key: k("o"), iconName: "shield-check", title: "Trust where clients look for it", text: "Licences, insurance, warranties and reviews" },
        { _key: k("o"), iconName: "pencil", title: "You add new projects yourself", text: "From a phone, without breaking the layout" },
        { _key: k("o"), iconName: "gauge", title: "Fast on a phone, even on site", text: "Main image under 2.5 s, photos compressed" },
      ],
      prices: [
        { _key: k("r"), label: "Simple construction company site", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Projects, service areas, quote form, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: websites I have designed and built",
      subtitle:
        "A renovation and investment company and an architecture studio, plus sites with what a construction website needs: a quote form with photos, speed on a phone and a client who edits the site himself.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your construction website design",
      subtitle: "I reply within one business day with a proposed structure for the home, service and project pages, and a fixed price.",
      contextLabel: "Company name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "A builder site", "An old website"] },
        { _key: k("z"), question: "What do you build?", options: ["Homes", "Renovations", "Commercial projects", "Several of these"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design websites for construction companies and build them myself, so the design and the build come from one person at one price. A construction website is judged the way a client judges a builder: by finished work, by whether you take on jobs like theirs in their area, and by how easy it is to ask for a price. The design is built around those three checks."),

        h2("What a construction company website design has to show in the first minute"),
        p("A client looking for a construction company is comparing three or four firms, often on a phone, often between other things. On the home page the design answers four questions before anything else:"),
        li("what you build — new homes, renovations, extensions, commercial fit-outs — in plain words, not “quality construction solutions”"),
        li("where you work — the towns and regions, named"),
        li("proof — two or three recent projects with real photos, one tap away from the full list"),
        li("how to get a price — a quote button that stays visible while scrolling on a phone"),
        p("Company history, values and the team come after that. They matter for the final decision, but nobody reads them before checking that you do their kind of job in their area."),

        h2("Construction project pages: the core of a construction website"),
        p("Projects sell construction work better than any text about the company. A project gallery with forty unlabelled photos does not. Each project gets its own page with the facts a client compares:"),
        li("type of work and what was in scope — from groundwork to finishing, or one stage"),
        li("size, location and how long it took"),
        li("photos in order: the site before, the work in progress, the finished result"),
        li("the client’s problem and how it was solved, in two or three sentences"),
        li("a link to the matching service page and a quote button"),
        p("Projects are filtered by type, so a homeowner planning a loft conversion sees loft conversions, not warehouses. Real site photos taken on a phone are better than stock images of hard hats: clients recognise stock photos immediately. I prepare a short checklist of shots for the site team, so every new project is photographed the same way."),

        h2("Services and service areas in construction website design"),
        p("“Construction company” is too broad for both clients and search engines. The site gets one page for each service you actually sell — new builds, renovations, extensions, roofing, interior finishing, whatever applies — and, if you cover several towns, a page for each area with projects from that area."),
        p("This is what lets the site be found for “house extension” plus a town name rather than only for the company name. The structure is planned in the design stage, because adding it later usually means rebuilding the navigation."),

        h2("A construction website quote form that collects what an estimator needs"),
        p("“Send us a message” brings messages that need three more calls before anyone can give a price. The form asks the questions your estimator asks anyway, in a few short steps:"),
        li("type of project and the address or area"),
        li("approximate size and the stage the client is at: idea, drawings, permit, ready to start"),
        li("a budget range and a preferred start date"),
        li("photos of the site or plans, uploaded straight from the phone"),
        p("Requests arrive by email with everything in one place, and the phone and WhatsApp stay one tap away for clients who would rather call."),

        h2("Trust on a construction company website: licences, insurance, warranties and reviews"),
        p("Construction is an expensive purchase that is hard to undo, so clients look for signs that the company will still be there when something goes wrong. The design puts them where they are noticed: next to the quote button and on every project page, not on a separate page nobody opens."),
        li("licences, registrations and memberships — only real ones, with numbers where they exist"),
        li("insurance and the warranty you give on the work"),
        li("years in business and the number of projects completed"),
        li("reviews with the client’s name and the project they refer to"),

        h2("Construction company website templates or a custom design"),
        p("Construction company website templates, including free ones, look convincing in a demo because the demo is filled with professional photos and invented projects. Filled with a real company’s content, they tend to show the same weaknesses: a gallery instead of project pages, one generic services page, a contact form with three fields."),
        p("A template is a reasonable start for a one-person firm with a handful of projects. A custom design pays off when you cover several services or areas, depend on enquiries from search, or want project pages your team can add without breaking the layout. Moving away from a template later usually means building the site again."),
        p(
          "Contractors who sell remodels and repairs to homeowners — calls and estimate visits rather than tenders — will find a closer fit on the ",
          link("contractor website design", "/contractor-website-design"),
          " page.",
        ),

        h2("Construction website design examples: what the best construction company websites have in common"),
        p("Lists of the top construction company websites are full of large firms with video headers. The useful ideas in them are simpler and fit a company of any size:"),
        li("a project page for every job worth showing, with facts, not only photos"),
        li("services and areas named the way clients search for them"),
        li("a quote path visible from every page"),
        li("credentials next to the call to action, not hidden in the footer"),
        li("no autoplay video and no slider on the first screen of a phone"),

        h2("How the construction website design process works"),
        ol("Brief. You send the list of services and areas, ten to twenty projects with photos, and a few sites you like or dislike."),
        ol("Structure on a phone first. I lay out the home page, a service page and a project page on a mobile screen and agree them with you before any visual design."),
        ol("Visual design. These three pages are designed in full; the other pages follow the same system."),
        ol("Build. The approved design is built into a fast website your team can edit, including adding new projects."),
        p(
          "If you already have a website and want a new design without losing your Google positions, the ",
          link("website redesign", "/services/website-redesign-services"),
          " process keeps addresses, redirects and structured data in place.",
        ),
        p(
          "Design brings enquiries from clients who are already on the site. Getting found in the first place — Google Maps, local search, AI answers — is covered on the ",
          link("SEO for construction companies", "/seo-for-construction-companies"),
          " page.",
        ),
        p(
          "What goes into the build — the project portfolio, the quote form, hosting and ownership — is covered on the ",
          link("construction company website", "/construction-company-website"),
          " page.",
        ),

        h2("How much construction website design costs"),
        p("Design is not sold separately; it is part of building the website, and the price covers both."),
        li("A simple construction company website: 700–1,400 €."),
        li("A website with project pages, service and area pages, a detailed quote form and local search optimisation: from 2,000 €."),
        p(
          "Send a short description of your company and the services you offer, and I will prepare a fixed quote. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Construction website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does construction website design cost?", "Design is included in the price of the website: 700–1,400 € for a simple construction company site, from 2,000 € for a site with project pages, service and area pages, a detailed quote form and local search optimisation. After a short description of the company I give a fixed quote."],
          ["Do you design construction websites without building them?", "No. Design and build come together. A design handed over as pictures loses most of its value in the hand-over: how project pages, filters and the quote form behave on a phone is decided while building, not in a mock-up."],
          ["Can we add new projects to the website ourselves?", "Yes. A new project is a form in a simple admin panel: type, location, size, photos and a short description. The page is laid out automatically, so it looks the same as the others."],
          ["Are photos from a phone good enough for project pages?", "Usually yes, if they are taken the same way every time: in daylight, from the same points, before, during and after the work. I prepare a short checklist for the site team. Stock photos do more harm than good on a construction site."],
          ["Can the quote form accept photos and drawings?", "Yes. Clients can upload photos of the site and plans or drawings from their phone or computer, and they arrive with the request by email."],
          ["Can you redesign our construction website without losing Google rankings?", "Yes. Before the new design goes live, every existing address is mapped to its new page, redirects are set up and structured data is carried over, so the positions the site already has are not lost."],
          ["Can the website have several language versions?", "Yes. For companies that work with foreign clients or investors, the service, area and project pages are translated in full, and each language version has its own address so it can be found in search in that language."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order construction website design: what to send me"),
        p(
          "Send the company name, a link to the current website or social profile, the services you offer and the areas you cover. A few recent projects with photos help me propose the structure. I will reply with a plan for the home, service and project pages and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
