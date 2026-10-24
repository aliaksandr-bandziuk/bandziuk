// Landing page fixture: Electrician website design (EN), group «trades».
// Semantic core: ref/trades.csv, group «electrical»: electrician website design
// 320, website design for electricians 320, website design for electrician
// 260, electrician website examples 20 (H2 on what good electrician websites
// have in common — no named companies), electrician website template free 10
// (H2 templates vs custom design), best electrician website design 10,
// electrician website design agency 10 (H2 on choosing who designs it).
// Intent: ref/intent-check-trades.md — 0 shared URLs with «electrician
// website» (development page /website-for-electricians). SERP of the design
// query: dribbble.com, duda.co, webflow.com, wix.com, pinterest.com,
// servicetitan.com → people look at templates and inspiration; the page
// answers that with what a good layout contains and when a template is enough.
// Not here: structure, integrations, speed, ownership, builder vs custom
// (/website-for-electricians); ranking (/seo-for-electricians); other trades
// (/contractor-website-design).
// Owner's rule: new pages weave in AI search.
import { p, h2, li, link, k } from "./pt";

export const electricianWebsiteDesignEn = {
  lang: "en",
  group: "electrician-website-design",
  slug: "electrician-website-design",
  title: "Electrician website design",
  heading: "Electrician Website Design",
  excerpt:
    "I design and build websites for electricians: a first screen that shows who you are and where you work, one path for emergencies and one for planned jobs, license and insurance in plain view, and real photos of panels and lighting you have done.",
  seo: {
    metaTitle: "Website Design for Electricians That Gets Calls | Bandziuk",
    metaDescription:
      "Electrician website design: emergency and planned-work paths, license and insurance up front, before-and-after panel photos, built for phones first. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design and build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Power out? Call now", "Licensed · Insured", "Panel before / after", "Book an estimate"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple electrician website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Electrician website with emergency and estimate paths, job galleries, service-area pages and local SEO, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with electrician website design",
      items: [
        { _key: k("o"), iconName: "phone", title: "One path for emergencies, one for planned work", text: "No power now, or a panel upgrade next month" },
        { _key: k("o"), iconName: "shield-check", title: "License and insurance in the first screen", text: "Written next to the buttons, not in the footer" },
        { _key: k("o"), iconName: "image", title: "Before-and-after panel and lighting photos", text: "Same angle, the job and the town named" },
        { _key: k("o"), iconName: "file-text", title: "Prices and estimates that read clearly", text: "Ranges, or what decides the price" },
        { _key: k("o"), iconName: "layers", title: "Layouts designed on a phone first", text: "Call and estimate buttons stay on screen" },
        { _key: k("o"), iconName: "sparkles", title: "Your van colors, not a template’s", text: "One look from the truck to the screen" },
      ],
      prices: [
        { _key: k("r"), label: "Simple electrician website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Two paths, galleries, service areas, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: sites I designed and built for local businesses",
      subtitle:
        "None of these were made for an electrician. The closest are a renovation company that sells on before-and-after work and a wheel-repair workshop whose request form accepts photos; the remaining three are local service firms that depend on phone calls and online requests.",
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
      title: "Get a quote for your electrician website design",
      subtitle: "I reply within one business day with a sketch of your home page and job pages, and a fixed price.",
      contextLabel: "Business name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "A template site", "An old website"] },
        { _key: k("z"), question: "Which calls matter most to you?", options: ["Emergency calls", "Planned upgrades", "Commercial work", "All of them"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design websites for electricians and build them myself, so what you approve on screen is what goes live, at one price. Most visitors to an electrician’s site are either worried — something stopped working or smells wrong — or planning — a charger, a generator, a remodel. The design is there to show both of them, within seconds, that you are licensed, nearby and easy to reach."),

        h2("Electrician website design: what the first screen has to show"),
        p("The first screen of an electrician’s site is usually seen on a phone, and it decides whether the visitor calls or goes back to the search results. It carries five things:"),
        li("what you do and where, in one line: “Licensed electricians for homes and businesses in [your county]”"),
        li("“Call now” and “Get an estimate” buttons above the fold"),
        li("license number and “insured” written next to them"),
        li("a review score with the number of reviews"),
        li("one real photo: your van, your electrician at a panel, a finished job"),
        p("A slogan about “powering your future” and a stock photo of a light bulb tell the visitor nothing, and they leave."),

        h2("Website design for electricians: an emergency path and a planned-work path"),
        p("Electricians serve two kinds of visitor, and the layout keeps them apart from the first screen. The emergency path is short and loud: a large call button, the towns you reach tonight, and three lines on what to do now — switch off the breaker if it is safe, stay away from a downed line, call the utility for a power cut on the street. Nothing on this path asks the visitor to read."),
        p("The planned path is where people take their time: EV chargers, panel upgrades, generators, rewiring, lighting, smart home. Each job page explains the work, shows finished examples and ends with an estimate request. On a phone the two buttons — “Call now” and “Get an estimate” — stay fixed at the bottom of the screen on every page."),

        h2("Trust signals in electrician website design: licensed, insured, safety first"),
        p("People let an electrician into their home to work on something that can start a fire. Before they call, they look for proof that the work will be safe and legal. The design places it where the decision is made, next to every call and estimate button:"),
        li("license number and class, with the name of the master electrician responsible"),
        li("insurance, and a plain statement that permits are pulled and the work is inspected"),
        li("a warranty on workmanship, in one sentence"),
        li("reviews that mention the job — “panel upgrade”, “charger” — and the town"),
        li("uniformed technicians and marked vans in the photos, so the visitor knows who will knock"),

        h2("Before-and-after photos of panel, wiring and lighting work"),
        p("Electrical work is hard to photograph well and easy to show badly: a close-up of grey boxes means nothing to a homeowner. A job page works when the photos tell a story the visitor understands:"),
        li("the old fuse box or a panel with scorched breakers, then the new labeled panel"),
        li("a garage wall before, then the charger mounted with a neat conduit run"),
        li("a dark kitchen or yard, then the same view at night with the new lighting"),
        li("a short caption: the job, the town and how long it took"),
        p("Your crews get a one-page photo checklist: the same angle before and after, panel door open, no house numbers or customer details in the frame."),

        h2("Showing prices and estimates on an electrician website"),
        p("Visitors want an idea of cost before they call, and most electrician sites give none. The design shows what you are willing to share: a price range for common jobs, a “from” price for a charger install, or a short list of what decides the price — panel capacity, distance from the panel, permit fees, wall or trench work. If you use flat-rate pricing, financing for generators or panel upgrades, or charge a diagnostic fee, each is stated where the visitor sees it, not in small print."),

        h2("Mobile-first electrician website design in your van and brand colors"),
        p("Your vans, shirts and yard signs already carry your colors, and many customers remember the van before the name. The site uses the same colors, logo and type, so the person who saw your van on their street recognizes the page at once. Every layout is drawn on a phone screen first: buttons large enough for a thumb, text that reads in sunlight, contrast that works in a dark basement, and menus reduced to the jobs people come for."),

        h2("Electrician website examples: what good electrician websites have in common"),
        p("Browse electrician website examples on design galleries or in your own area and the good ones share a few decisions, whatever their size:"),
        li("a first screen that names the work and the area in plain words"),
        li("separate routes for “I need help now” and “I am planning a job”"),
        li("license and insurance stated as text near every button"),
        li("one page per job, each with real photos from that kind of work"),
        li("prices or price factors, so the call starts with realistic expectations"),
        li("the same colors and logo as the vans"),

        h2("Electrician website templates, free or paid, versus a custom design"),
        p("A search for electrician website design shows Dribbble shots, Pinterest boards and template galleries from Wix, Webflow and Duda. They are useful for ideas, but a design shot is a picture, not a working site, and a free electrician website template looks finished only while it is filled with stock photos and invented services. With your real content the usual gaps appear: no emergency path, no place for a license number, one generic services page and a gallery that cannot show before and after."),
        p(
          "A template can be a reasonable start for a one-van business. When you depend on calls from search and sell several kinds of jobs, a custom design shaped around your work pays off. What goes into the build — structure, connections to your tools, speed and ownership — is covered on the ",
          link("websites for electricians", "/website-for-electricians"),
          " page.",
        ),

        h2("Best electrician website design: choosing an agency or a single designer"),
        p("An electrician website design agency usually works from its own set of layouts, and a freelancer may hand over only images that someone else has to build. The best electrician website design is the one that brings calls from your customers, so judge any offer, including mine, by a few questions:"),
        li("Will I see the home page and a job page on a phone before anything is built?"),
        li("Is the design made from my photos, vans and jobs, or from stock images?"),
        li("Where do the license number, the emergency number and the estimate request sit?"),
        li("Can my office change texts and add finished jobs without paying each time?"),
        p(
          "I am one person who designs and builds, so nothing gets lost between a designer and a developer. If you already have a site with Google positions, the ",
          link("website redesign", "/services/website-redesign-services"),
          " process keeps them while the design changes.",
        ),

        h2("Electrician website design that ChatGPT and Google AI Overviews can read"),
        p("When someone asks ChatGPT or Google’s AI Overviews for an electrician nearby who installs chargers, the answer is built from what the assistant can read. A design that puts facts in images — a license number inside a badge, services inside a banner — hides them. Here every fact stays as text: services, areas, license, insurance, hours, with structured data and the same details as your Google profile."),
        p(
          "Getting into AI answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Ranking in Google and the map is covered on the ",
          link("SEO for electricians", "/seo-for-electricians"),
          " page.",
        ),

        h2("How much electrician website design costs"),
        p("There is no separate design fee; one price covers designing and building the site."),
        li("A simple electrician website — first screen, main jobs, emergency page, estimate request: 700–1,400 €."),
        li("A website with emergency and planned-work paths, job galleries, service-area pages and local search optimization: from 2,000 €."),
        p(
          "Design for other trades is on the ",
          link("contractor website design", "/contractor-website-design"),
          " page; full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Electrician website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does website design for an electrician cost?", "Design is included in the price of the website: 700–1,400 € for a simple electrician site, from 2,000 € for a site with emergency and planned-work paths, job galleries, service-area pages and local search optimization. After a short description of your business I give a fixed quote."],
          ["Is a free electrician website template good enough?", "For a one-person business that works on referrals, it can be a start. Templates rarely have an emergency path, a place for the license number or job pages with before-and-after photos, and those are what make an electrician’s site bring calls."],
          ["Where can I find electrician website examples?", "Design galleries and template sites show concepts; the sites of electricians in your area show what customers there are used to. Compare them on a phone: how fast you find the phone number, the license and the jobs you need."],
          ["Should an electrician show prices on the website?", "Showing ranges or the factors that decide the price helps: callers arrive with realistic expectations and fewer estimate visits end without a job. Exact prices are only shown where you already use flat-rate pricing."],
          ["Do you design electrician websites without building them?", "No. Design and build come together, because how the call buttons, emergency path and galleries behave on a phone is settled while building, not in a picture."],
          ["Can our crews add before-and-after photos themselves?", "Yes. A finished job is a short form in the admin panel, from a phone: two photos, the job, the town and a sentence. The job page is laid out automatically."],
          ["Do you design websites for electricians outside Poland?", "Yes. I work remotely with electricians in the US, Canada, the UK and Australia, in English, Polish or Russian. License details, phone formats and review platforms are set up for your country."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order electrician website design: what to send me"),
        p(
          "Send the business name, a link to the current site or Google profile, a photo of your van or logo, the jobs you want more of and the towns you cover. A few before-and-after photos of recent jobs help me sketch the pages. I will reply with a layout plan and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
