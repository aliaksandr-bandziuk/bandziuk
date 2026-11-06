// Page fixture: web development in Limassol (EN), group
// «limassol-website-development». New page, create-landing.cjs.
//
// Why (06.11.2026). English demand for the city itself is thin — 2 impressions
// in 28 days, one query at position 68 — while English Cyprus demand is
// country-level: /web-development-cyprus holds 1614 impressions at position
// 44.1. The Russian side of the same group is where the measured demand is
// (232 impressions at position 6.4 on city queries). The owner decided on
// 05–06.11.2026 to publish the English version anyway, with the volume rule
// set aside: someone searching the city in English should land on a page
// built for them rather than on the island-wide one.
//
// How this page differs from /web-development-cyprus. That page is about the
// island and about choosing between its cities. This one is about the
// companies that sit in Limassol: international offices, shipping, corporate
// and professional services, and the local business that serves them.
// Different buyer, different sections, no shared sentences.
//
// The Cyprus work is real and sits in the portfolio: a multilingual real
// estate platform. Nothing beyond that is claimed.
import { p, h2, li, link, k } from "./pt";

export const limassolWebsiteDevelopmentEn = {
  lang: "en",
  group: "limassol-website-development",
  slug: "web-development-limassol",
  title: "Web development in Limassol",
  heading: "Web development in Limassol: a website for a company people check before they call",
  excerpt:
    "I build websites for companies working out of Limassol — international offices, shipping, corporate and professional services, and the local business that serves them. One developer instead of a studio, English and Russian as working languages, SEO built into the code. From €2,000, answer within one working day.",
  seo: {
    metaTitle: "Web Development in Limassol for Companies — from €2,000",
    metaDescription:
      "Website development in Limassol: a page per service, English and Russian versions, WhatsApp forms, speed on mobile. From €2,000, answer within a working day.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Companies in Limassol", "Websites from €2,000", "Answer within 1 working day"],
  heroPhonePoints: ["Services", "Request a quote", "English · Русский · Ελληνικά", "Call"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Company website in Limassol: structure, service pages, forms, languages", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page for one service for a Limassol company", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Website redesign in Limassol with rankings kept", price: 1000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What I do",
      title: "What I build for companies in Limassol",
      items: [
        { _key: k("o"), iconName: "layout", title: "Company website from scratch", text: "Structure, service pages, forms, languages" },
        { _key: k("o"), iconName: "users", title: "A site that survives a check", text: "People, office address, work, credentials" },
        { _key: k("o"), iconName: "languages", title: "English and Russian versions", text: "Separate pages, not a translation plugin" },
        { _key: k("o"), iconName: "refresh-cw", title: "Redesign without losing rankings", text: "New look, same URLs, same traffic" },
        { _key: k("o"), iconName: "database", title: "Custom development", text: "Catalogues, filters, portals, integrations" },
        { _key: k("o"), iconName: "wrench", title: "Website support", text: "Updates, backups, edits when you need them" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why a Limassol company website gets read before anyone calls"),
        p("I build websites for companies that work out of Limassol. Here a website has a job that a neighbourhood workshop's site never has: it is opened after someone has already heard your name. A partner you were recommended to, a client in another country, a bank, a contractor, a candidate — each of them types the company name and checks whether the site matches what they were told."),
        p("That is why sites in Limassol lose on omissions rather than on design. No office address and no names of the people who sign. Nothing about what the company has actually delivered beyond a line about being on the market for over ten years. Not one page about a specific service that someone could find without already knowing the company. The person checking closes the tab not because they disliked it, but because there was nothing to read."),
        p("The second job is bringing in people who have never heard the name. That is a different task, and structure solves it: one page per service instead of a single page listing everything. A site can do both jobs at once, but only if it was designed to."),

        h2("Website development for international companies in Limassol"),
        p("Limassol holds the island's densest concentration of international offices: shipping and ship management, corporate and professional services, consulting, technology teams, insurance and investment firms. Around them lives the business that serves them — property and rentals, office fit-out, restaurants, clinics, schools, transport. These are two different audiences, and their websites are built differently."),
        li("An international office needs service and sector pages in English, a team section with names and roles, described projects, and an address that matches the register and the maps profile;"),
        li("A company in a regulated field needs to change text without a developer: wording goes through internal approval, and «when the contractor is free» is not a schedule that works;"),
        li("A local business serving those offices needs local search, maps, a phone number and a messenger one tap away, not a mission statement."),
        p("If you did not recognise yourself in that list, that is fine: working out which case is yours is the first part of the job, and it happens before any price is quoted."),

        h2("Which languages a Limassol company website needs"),
        p("The working language of business Limassol is English, and for an international company it comes first on the site. A Russian version earns its place where a large share of buyers and partners are Russian-speaking: property, professional services, medicine, schools, premium and everyday service businesses. Greek earns its place where you work with local clients, suppliers and institutions."),
        p("A language version means separate pages with their own URLs, not a switcher that translates on the fly. Search treats machine translation as a weakened copy of the page, and a visitor who lands in the wrong language leaves without saying so. How many versions to build is something I check against demand before you pay for any of them: there is no point paying for Greek if nobody searches for your service in Greek."),

        h2("What a company website in Limassol includes"),
        li("a page for each service rather than one list, because buyers search for a service and not for your catalogue;"),
        li("a company section that survives a check: people, office, work delivered, memberships and licences where they exist;"),
        li("English as the main version, with Russian or Greek where demand is confirmed;"),
        li("forms that arrive where you actually read messages, WhatsApp included — in Limassol that is often the real channel;"),
        li("speed on mobile, measured on the service pages and not only on the home page;"),
        li("a content system where you change text, prices and people yourself."),

        h2("Custom development for Limassol companies: catalogues, portals, integrations"),
        p("Some companies here do not need pages. A property agency needs a catalogue with filters by district, type and price, where each listing stays findable on its own. A corporate services provider needs a client area for documents. A school or a clinic needs booking and a schedule. A logistics company needs quoting and tracking."),
        p(
          "That is custom development, and most of my work looks like this. The technical side is ",
          link("Next.js development", "/services/nextjs-development-services"),
          ", and when the data comes from a system you already run, it is ",
          link("CMS and API integration", "/services/cms-integration-and-api-work"),
          ".",
        ),

        h2("Website redesign in Limassol without losing rankings"),
        p("If a site already brings enquiries, a redesign is the moment they are most often lost. What protects them is dull work: a map of every existing URL, a redirect for every one that changes, structured data and speed carried over rather than rebuilt, and the text of the pages that earned kept intact. Recovering from a bad move costs more than the redesign did."),
        p(
          "The step-by-step version is on the ",
          link("website redesign", "/services/website-redesign-services"),
          " page.",
        ),

        h2("Getting a Limassol website found after launch: SEO and local search"),
        p("Development and promotion are separate services, usually bought at different times. I build the site so that promotion is possible: every service has its own page and URL, the structure follows what people actually search for, structured data matches what is visible, speed is measured. What comes after that is ranking work: text against real queries, the maps profile, mentions."),
        p(
          "That is a separate job at a separate price — ",
          link("SEO optimisation and strategy", "/services/seo-optimization-and-strategy"),
          ". First movement is usually visible after about a month and a half, steady growth over three to six months.",
        ),

        h2("What a website in Limassol costs and what moves the price"),
        p(
          "A company website starts at €2,000. A landing page for one service is €700–1,400. A redesign with rankings kept starts at €1,000. The price moves with the number of service pages, the number of languages, whether the site connects to a system you already run, and whether the text exists. Design is included and never appears as a separate line. The numbers and what sits behind them are in ",
          link("how much a website costs in Cyprus", "/blog/website-development-cost-in-cyprus"),
          " and on the ",
          link("pricing", "/pricing"),
          " page.",
        ),

        h2("How long website development in Limassol takes"),
        p("A landing page takes two to three weeks, a company website four to six, a site with a catalogue or a client area is quoted separately. What stretches a timeline is almost never the code — it is decisions: who approves wording, which services get their own page, which languages are needed. Projects finish on time when one person decides on your side."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: a Cyprus real estate platform and other multilingual projects",
      subtitle:
        "The first case is in Cyprus: a multilingual real estate platform with a catalogue, filters and search visibility built without bought links. Alongside it — an education agency site that grew from one country to ten, a renovation and investment company site with a premium look, a multilingual student services site, and a consultant site built around a single expertise.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "seo-case-study-education-agency",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for your company website in Limassol",
      subtitle: "I answer within one working day: what I would build, in which languages, and what it costs.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What does the company do?", options: ["Professional and corporate services", "Property or construction", "Services for private clients", "Something else"] },
        { _key: k("z"), question: "What do you need?", options: ["A new website", "A redesign", "Custom development", "Not decided yet"] },
        { _key: k("z"), question: "Which languages?", options: ["English only", "English and Russian", "English and Greek", "Three or more"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Getting a Limassol company recommended by AI assistants (GEO, AEO)"),
        p("Buyers increasingly ask ChatGPT, Perplexity or Google's AI overviews before they ask anyone else: who builds multilingual websites in Limassol, who takes on a site with a catalogue. An assistant answers from text it can read and from sources that agree with each other. So services and prices belong in text rather than in an image; structured data has to match what is visible on the page; and the company name, address and service names have to be identical on the site, in the maps profile and in the directories that list the company."),
        p(
          "Bringing a working site to that state is its own job: ",
          link("AI search readiness", "/services/ai-search-readiness"),
          ". The island-wide picture is on the ",
          link("web development in Cyprus", "/web-development-cyprus"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Web development in Limassol: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a website in Limassol cost?", "A company website starts at €2,000, a landing page for one service is €700–1,400, and a redesign with rankings kept starts at €1,000. The price moves with the number of service pages, the number of languages and whether the site connects to a system you already run. Design is included and never appears as a separate line."],
          ["Are you based in Limassol?", "I work remotely, which is how web projects run anyway: text, approvals and handover travel over the internet, and nobody needs a meeting about a heading. I answer within a working day and we schedule calls in your time."],
          ["Which languages should a Limassol company website have?", "English first — it is the working language of the business city. Russian is added where a large share of your buyers are Russian-speaking, Greek where you work with local clients and institutions. I check demand before you pay for a language version."],
          ["Can an old site be replaced without losing enquiries?", "Yes, and this is the part redesigns most often get wrong. Every existing URL goes into a map, every URL that changes gets a redirect, and structured data, speed and the text of the pages that earned are carried over."],
          ["What is the difference between building a website and promoting it?", "Building covers structure, pages, text and code. Promotion is ranking work on a finished site: queries, maps, mentions. I build so that promotion is possible, but it is quoted and bought separately."],
          ["Do you have work connected to Cyprus?", "Yes — a multilingual real estate platform, the case in the portfolio above: a catalogue with filters, four language versions and search visibility built without bought links. I can walk you through what was done and what it changed."],
          ["Who writes the text?", "I can, you can, or we split it: you supply the substance and I put it into a form people read and search engines find. Text you send ready is checked for structure and queries, not rewritten on principle."],
          ["Will I be able to edit the site myself?", "Yes. Prices, services, people, text and articles are yours to change in the content system without a developer. Updates and the technical side are a separate support arrangement, and you are not obliged to buy it from me."],
          ["When should I expect results in search?", "First movement is usually visible after about a month and a half, steady growth over three to six months. A small site is built in two to three weeks, but that is the build time, not the time to results."],
          ["Who owns the website?", "You do: the code, the domain, the text and every access credential. Nothing stays with me as leverage."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Ordering a website in Limassol: what to send me"),
        p("Tell me what the company does, who your buyers are and which languages they search in, and what exists now — a link if there is a site, nothing if there is not. I answer within one working day: what I would build, in which languages, and what it costs. If a landing page would do the job for a fraction of a full site, I will say so rather than propose the more expensive thing."),
      ],
    },
  ],
};
