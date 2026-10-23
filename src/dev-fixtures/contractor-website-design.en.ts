// Landing page fixture: Contractor website design (EN), topic 6a.
// Semantic core: research/pseo/page-core/contractors.md: contractor website
// design / general contractor website design / website design for
// contractor(s) / contractor web design — 1 000 each (one Keyword Planner
// bucket); best contractor websites 110, contractor website examples 70,
// contractor website templates 50; related: free contractor website design,
// contractor website design ideas.
// Intent: research/pseo/intent-check-contractors.md — 0 shared URLs with
// «contractor websites» (development page 6b); «general contractor website
// design» shares 1 URL and 5 domains with «contractor website design» and the
// same volume bucket, so one page with a general-contractor H2.
// Different audience from /construction-website-design: contractors who sell
// to homeowners — calls, estimates, before/after, licensed & insured.
// Owner's rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const contractorWebsiteDesignEn = {
  lang: "en",
  group: "contractor-website-design",
  slug: "contractor-website-design",
  title: "Contractor website design",
  heading: "Contractor Website Design",
  excerpt:
    "I design and build websites for contractors — general contractors, remodelers and specialty trades: service pages, before-and-after project galleries and an estimate request that works in two taps on a phone.",
  seo: {
    metaTitle: "Contractor Website Design for General Contractors | Bandziuk",
    metaDescription:
      "Contractor website design built to book estimates: click-to-call, estimate form with photos, before-and-after galleries, licences and reviews. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Licensed · Insured", "Before and after", "Free estimate", "Call now"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple contractor website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Contractor website with project galleries, service-area pages, estimate form and local SEO, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with contractor website design",
      items: [
        { _key: k("o"), iconName: "phone", title: "Call and estimate buttons that stay on screen", text: "Two taps from any page to a call or a request" },
        { _key: k("o"), iconName: "image", title: "Before-and-after project galleries", text: "Real photos, the job and the town named" },
        { _key: k("o"), iconName: "file-text", title: "An estimate form that takes photos", text: "Job type, address, timing and pictures of the problem" },
        { _key: k("o"), iconName: "shield-check", title: "Licences, insurance and reviews up front", text: "Next to the button, not hidden in the footer" },
        { _key: k("o"), iconName: "map-pin", title: "Service and service-area pages", text: "One for each job and each area you cover" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Facts as text, structured data for services and areas" },
      ],
      prices: [
        { _key: k("r"), label: "Simple contractor website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Galleries, service areas, estimate form, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: websites I have designed and built",
      subtitle:
        "Closest to contracting: a renovation company and a wheel-repair workshop whose quote form takes photos. The others are local service businesses that get their work through calls and forms.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your contractor website design",
      subtitle: "I reply within one business day with a proposed structure for the home, service and project pages, and a fixed price.",
      contextLabel: "Business name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "A builder site", "An old website"] },
        { _key: k("z"), question: "What kind of contractor are you?", options: ["General contractor", "Remodeling", "Specialty trade", "Several services"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design websites for contractors and build them myself, so the design and the build come from one person at one price. A contractor’s website is usually opened on a phone by a homeowner with a problem or a plan, who is comparing two or three companies. The design has one job: get that person to call or ask for an estimate before they go back to the search results."),

        h2("What contractor website design has to do: turn visits into estimate requests"),
        p("Most contractor websites lose people in the first screen: a stock photo, a slogan and a menu with ten items. The first screen of a contractor site answers four things and nothing else:"),
        li("what you do and where — “Kitchen and bathroom remodeling in [your area]”, not “Quality you can trust”"),
        li("a call button and an estimate button, both visible without scrolling"),
        li("proof: licensed and insured, years in business, a review score"),
        li("one real photo of finished work"),
        p("On a phone, the call and estimate buttons stay fixed at the bottom of the screen, so they are one tap away from any point on any page."),

        h2("Website design for general contractors: services, projects and service areas"),
        p("A general contractor sells many kinds of work, and a single “Services” page cannot rank or convince for all of them. The structure gives each service its own page — additions, kitchen remodels, basements, roofing, whatever you actually sell — with what is included, typical timing, a price range where you can give one and projects of that type."),
        p("If you work across several towns, each area gets a page with projects from there. This structure is decided in the design stage: it is what lets the site be found for “basement finishing” plus a town, and adding it later usually means redoing the navigation."),

        h2("Before-and-after project galleries in contractor web design"),
        p("Homeowners hire contractors by looking at finished jobs. A gallery of forty unlabelled photos does not help them; a project page does. Each project shows:"),
        li("before and after photos from the same angle, side by side or with a slider"),
        li("what was done, in two or three sentences, and how long it took"),
        li("the town or neighbourhood"),
        li("a link to the matching service and an estimate button"),
        p("Real photos from the job, taken on a phone in daylight, convince better than stock images of smiling workers. I give your crew a short checklist so every job is photographed the same way."),

        h2("Click-to-call, estimate forms and booking in contractor website design"),
        p("Many homeowners would rather call; many others want to send a request at night without talking to anyone. The design serves both:"),
        li("click-to-call on every page, with your hours next to the number"),
        li("an estimate form in two or three short steps: job type, address, timing, photos of the problem"),
        li("online booking of an estimate visit, if your scheduling tool offers a booking widget"),
        li("WhatsApp or text for quick questions"),
        p("Requests arrive by email or go straight into the field-service tool or CRM you already use."),
        p(
          "How the form is connected to your tools, and what goes into the build — hosting, speed, ownership — is covered on the ",
          link("websites for contractors", "/website-for-contractors"),
          " page.",
        ),

        h2("Licensed, insured, reviewed: trust signals in contractor website design"),
        p("Hiring a contractor means letting someone into your home and paying a large sum. Homeowners look for signs that the company is real and will stand behind the work. The design puts them next to the call and estimate buttons and on every project page:"),
        li("licence number and insurance, stated as text"),
        li("warranty on the work, in plain words"),
        li("review score and recent reviews that mention the job and the town"),
        li("memberships and certifications — only real ones"),

        h2("Contractor website design that ChatGPT and Google AI Overviews can read"),
        p("Homeowners increasingly ask ChatGPT, Perplexity or Google’s AI Overviews for a recommended contractor nearby. Assistants recommend what they can read and verify, so the design keeps the important facts machine-readable: services, service areas, licence, insurance and years in business written as text, structured data for the business and its services, and the same details as in your Google Business Profile."),
        p(
          "Getting into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),
        p(
          "Being found in Google for your jobs and towns is covered on the ",
          link("SEO for contractors", "/seo-for-contractors"),
          " page.",
        ),

        h2("Contractor website templates or a custom design"),
        p("Contractor website templates, including free ones, look finished in a demo because the demo is full of professional photos and invented jobs. With a real company’s content they tend to show the same gaps: one generic services page, a gallery instead of project pages, a contact form instead of an estimate request, and nothing for service areas."),
        p("A template is a reasonable start for a one-person trade business. A custom design pays off when you sell several services, cover several towns or depend on calls from search. Moving away from a template later usually means building the site again."),

        h2("Contractor website examples: what the best contractor websites have in common"),
        p("Lists of the best contractor websites mix big franchises with small local firms. The decisions that make the good ones work are simple and fit any company:"),
        li("a clear statement of what and where on the first screen"),
        li("a call button and an estimate button visible all the time"),
        li("a page for each service and each area"),
        li("before-and-after projects with facts"),
        li("licence, insurance and reviews next to every call to action"),

        h2("How the contractor website design process works"),
        ol("Brief. You send the list of services and areas, projects with photos, your licence and insurance details and the questions homeowners usually ask."),
        ol("Structure on a phone first. I lay out the home page, a service page and a project page on a mobile screen and agree them with you."),
        ol("Visual design. These three pages are designed in full; the rest follow the same system."),
        ol("Build. The approved design is built into a fast website your team can edit, including adding new projects."),
        p(
          "If you already have a website and want a new design without losing your Google positions, the ",
          link("website redesign", "/services/website-redesign-services"),
          " process keeps addresses, redirects and structured data in place. Construction companies working on larger projects will find more on the ",
          link("construction website design", "/construction-website-design"),
          " page.",
        ),

        h2("How much contractor website design costs"),
        p("Design is not sold separately; it is part of building the website, and the price covers both."),
        li("A simple contractor website: 700–1,400 €."),
        li("A website with project galleries, service and area pages, an estimate form with photo upload and local search optimisation: from 2,000 €."),
        p(
          "Send a short description of your business, the services and the areas, and I will prepare a fixed quote. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Contractor website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does contractor website design cost?", "Design is included in the price of the website: 700–1,400 € for a simple contractor site, from 2,000 € for a site with project galleries, service and area pages, an estimate form and local search optimisation. After a short description of the business I give a fixed quote."],
          ["Do you design contractor websites without building them?", "No. Design and build come together. A design handed over as pictures loses most of its value in the hand-over: how the call and estimate buttons, galleries and forms behave on a phone is decided while building."],
          ["Can the website book estimate visits?", "Yes, if your scheduling or field-service tool offers a booking widget or link — most do. The design places it on the first screen and in the fixed button on phones. Otherwise the estimate form collects the request and a preferred time."],
          ["Can we add before-and-after projects ourselves?", "Yes. A new project is a short form in a simple admin panel: before and after photos, the job, the town and a few sentences. The page is laid out automatically."],
          ["Are phone photos good enough for a contractor website?", "Usually yes, if they are taken the same way every time: daylight, the same angle before and after, no clutter. I prepare a short checklist for your crew. Stock photos hurt more than they help."],
          ["Can you redesign our contractor website without losing Google rankings?", "Yes. Every existing address is mapped to its new page, redirects are set up and structured data is carried over before the new design goes live, so the positions the site already has are kept."],
          ["Do you work with contractors outside Poland?", "Yes. Design and development are done remotely, in English, Polish or Russian. The site is set up for your country: phone formats, units, licence details and the review platforms your clients use."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order contractor website design: what to send me"),
        p(
          "Send the business name, a link to the current website or Google profile, the services you offer and the areas you cover. A few recent projects with before-and-after photos help me propose the structure. I will reply with a plan for the home, service and project pages and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
