// Landing page fixture: accounting firm website development (EN), group
// «accounting-firm-website». REBUILD of the existing old-template page at the
// same address — replace-landing.cjs.
//
// Why (03.11.2026). The page was on the old template: its headings included
// two- and three-word labels from benefitsBlock and serviceFeaturesBlock
// («Interchangeable wording», «Prices hidden entirely», «Credentials made
// visible»), and its metaTitle was the H1 plus a brand suffix — the defect
// class fixed on 17 pages on 01.11.
//
// What the rewrite adds: the design forms, which had no heading at all.
//   web design for accounting firms 210 · accounting firm website design 210 ·
//   accounting firm web design 210 = 630/мес
// Alongside the forms the page already held: website for accounting firms 320,
// accounting firm website 320, accounting firm website development 20.
//
// Division of labour with the new /seo-for-accounting-firms page: this page is
// about the BUILD — structure, document exchange, credentials, editing — and
// everything about being found moved there. Local search gets one paragraph
// and a link rather than a section, because two pages making the same argument
// compete with each other whatever their keywords are.
//
// The solo-bookkeeper section deliberately avoids the phrase «website for
// bookkeepers» (320): the SERP for it is bookkeeping services and listicles
// (forbes, pilot, getfriday, belaysolutions), so that searcher wants
// bookkeeping done, not a site built. The section serves the audience without
// chasing the query.
//
// Prices from the list: site from €2,000, landing €700–1,400, redesign €1,000.
import { p, h2, h3, li, link, k } from "./pt";

export const accountingFirmWebsiteEn = {
  lang: "en",
  group: "accounting-firm-website",
  slug: "accounting-firm-website",
  title: "Accounting Firm Website Development",
  heading: "Accounting firm website development: a site that tells a client you handle their case specifically",
  excerpt:
    "Most accounting firm sites are the same template with a different logo, and they read as interchangeable because they are. This page is about the build: a page per client type, prices as far as you will go, document exchange that does not become a liability, and a site you can edit yourself. From €2,000.",
  seo: {
    metaTitle: "Accounting firm website design and build — €2,000",
    metaDescription:
      "Website for an accounting firm: a page per client type, pricing, secure document exchange, visible credentials, editable without a developer. From €2,000.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per client type", "Websites from €2,000", "Reply in 1 working day"],
  heroPhonePoints: ["Who we work with", "Fees", "Send documents", "Book a call"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Accounting firm website: client-type pages, fees, document exchange", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Single-service landing page for one client segment", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Redesign off a vendor template, keeping the rankings", price: 1000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What is built",
      title: "What goes into an accounting firm website",
      items: [
        { _key: k("o"), iconName: "users", title: "A page per client type", text: "Ecommerce, contractors, clinics, freelancers" },
        { _key: k("o"), iconName: "tag", title: "Fees stated as far as you will go", text: "A monthly figure or a range, not «contact us»" },
        { _key: k("o"), iconName: "file-lock", title: "Document exchange that is not a liability", text: "Into the portal your practice software already has" },
        { _key: k("o"), iconName: "award", title: "Credentials and the signing accountant", text: "Licences, memberships, who is responsible" },
        { _key: k("o"), iconName: "edit", title: "Editable without a developer", text: "Fees, people, deadlines — you change them" },
        { _key: k("o"), iconName: "refresh-cw", title: "Move off a vendor template", text: "Your own site, rankings kept" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why accounting firm websites all look the same"),
        p("Because a large share of them come from a handful of vendors who build sites for the profession by the hundred. The result is the same structure, the same stock photograph of a handshake, and the same sentence: «we provide tax, audit and advisory services to businesses of all sizes». It is not laziness on the firm's part — it is what the product delivers, and it is cheap for a reason."),
        p("The cost shows up in the one moment that matters. A prospect comparing three firms in three browser tabs sees three pages that say the same thing, so the decision falls back to whichever answered the phone first or quoted lowest. A site that names the client's situation in its heading does not enter that comparison on price."),

        h2("Web design for accounting firms: structure decided before decoration"),
        p("The design question in this profession is not which shade of blue. It is what a visitor sees in the first screen: a slogan about trusted partnership, or the sentence that tells them you handle exactly their case. Everything else in the design follows from that choice — the navigation, the length of the pages, where the fee goes, and whether the team photographs come before or after the services."),
        p("What design decides here, concretely: how a client type is chosen from the first screen; whether the fee is above or below the fold; how a long regulatory explanation is made readable rather than skipped; and how the site looks to someone opening it on a phone between meetings, which is where most of these pages are actually opened."),

        h2("Accounting firm website design that survives contact with the content"),
        p("A design shown as three pretty screens usually falls apart when the real material arrives: a service list with twenty items, a bio that runs to two paragraphs, a fee table with footnotes, and a disclaimer the firm is obliged to carry. So the design is built against the real content — your service list, your bios, your fee structure — rather than against placeholder text. That is also why I ask for the material before drawing anything."),

        h2("A page per client type, as pages rather than a list"),
        p("Accounting is bought by segment. An e-commerce seller with inventory across states, a construction firm with progress billing and retainage, a dental practice with equipment leases, a freelancer who has just crossed a registration threshold — different questions, different software, different anxieties. One page listing all of them answers none of them."),
        li("the segment named in the heading, not in the third paragraph;"),
        li("the specific problems that segment brings, in its own words;"),
        li("the software you work in, because the segment asks about it first;"),
        li("what the engagement includes and what it costs;"),
        li("and no page for work you would rather not take — the site is also a filter."),

        h2("Publishing fees on an accounting firm website"),
        p("The most common complaint from visitors to these sites is that no figure appears anywhere. «Contact us for a quote» reads as «expensive, and awkward to ask about», and the enquiries it does produce are the hardest to qualify, because everyone arrives without any idea of the range."),
        p("Going as far as you are willing is enough: a monthly fee for a defined scope, a fixed price for an annual return at a stated revenue level, or a range with what moves it. Firms that publish a floor get fewer enquiries and close more of them, which is the trade most practices actually want."),

        h2("Document exchange without building a portal"),
        p("Clients will send tax documents through whatever channel is easiest, and if the site offers a plain upload form, that is where sensitive material will land — on your web hosting, outside whatever system your practice actually runs on. That is a liability, not a feature."),
        p("The right answer is almost always a link, not a build: practice software such as TaxDome, Karbon or Canopy already has a client portal with the access controls and the audit trail, so the site's job is to route people into it clearly and explain what to send. Building a second upload path on the website costs money and creates a copy of the data nobody is watching."),

        h2("Making credentials and the signing accountant visible"),
        p("In a profession where the buyer is assessing risk, the page that converts is often the team page. What belongs on it: who holds which licence or membership, who would actually handle the visitor's segment, and who signs off the work. What does not: a wall of certification logos with no names attached, which reads as decoration."),

        h2("A site for a solo bookkeeping practice"),
        p("A solo practice sells a recurring operational service rather than an annual engagement, and the buyer compares monthly price, the software and how fast you answer. So the site is shorter and sharper: the software named on the first screen, the monthly fee stated, what is and is not included, and how handover works. A five-page site does this job; a twenty-page firm site does not suit it."),

        h2("What an accounting firm website costs and what moves the price"),
        p(
          "A full site with client-type pages, fees, document routing and an editable CMS starts at €2,000. A landing page for one segment is €700–1,400. Moving off a vendor template while keeping the rankings starts at €1,000. What moves the price: how many client segments get their own page, how many offices and team members, whether the fee structure is ready or has to be worked out, and whether the content exists. Design is included and never quoted separately. The full list is on the ",
          link("pricing page", "/pricing"),
          ".",
        ),

        h2("How long an accounting firm website takes to build"),
        p("A landing page two to three weeks, a full site four to six. The code is rarely what stretches it: it is the segment decisions, the fee structure and who inside the firm signs off the professional wording. Projects that finish on time are the ones where one partner can decide without a meeting."),

        h2("Getting the site found once it is built"),
        p(
          "A site built like this can be found; being found is separate work. Segment pages have to earn positions, the Google Business Profile has to match the site, and in this profession the content has to be published before the busy season rather than during it. That is ",
          link("SEO for accounting firms", "/seo-for-accounting-firms"),
          " — a separate job with a separate price, and I will say if the site has to be rebuilt before any of it is worth doing.",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: professional services where credibility is checked before contact",
      subtitle:
        "What these share with an accounting practice: expertise is the product, the buyer verifies the firm before writing, and the structure had to carry long explanatory material without becoming unreadable. A retail-analytics consultant, a digital agency site, an education agency taken from one country to ten, a personal site built and optimised from scratch, and a multilingual site for student services.",
      picks: [
        "consultant-website-design-retail-analytics",
        "proscore-agency-website-development",
        "seo-case-study-education-agency",
        "develop-and-optimize-a-personal-website-with-seo",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for your accounting firm website",
      subtitle: "I reply within one working day: what I would build, in what order and at what price.",
      contextLabel: "Firm name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What is the practice?", options: ["Accounting firm", "Solo bookkeeping", "Tax advisory", "A mix of all three"] },
        { _key: k("z"), question: "What exists today?", options: ["A vendor template", "An old site", "No site", "Only a directory listing"] },
        { _key: k("z"), question: "How many client segments?", options: ["One niche", "Two or three", "Anyone who comes", "Not decided yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being readable to AI assistants that recommend accountants (GEO, AEO)"),
        p("«Find me an accountant for a one-person company with Stripe income» is a question people now put to an assistant before they open a search engine. The assistant quotes text it can read, which makes three things decide whether a firm can be named at all: the segments and fees written as text rather than shown inside a brochure image, a figure or a range that can be quoted, and the same firm name, address and service wording on the site and on every directory that lists you."),
        p(
          "Vendor templates usually fail the last one, because the directory entries and the site were filled in years apart by different people. Getting an existing site into a readable state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Accounting firm website development: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a website for an accounting firm cost?", "From €2,000 for a full site with client-type pages, fees, document routing and an editable CMS. €700–1,400 for a landing page covering one segment. From €1,000 to move off a vendor template while keeping the rankings. The number of segments, offices and team members is what moves it."],
          ["Should we publish our fees?", "As far as you are willing, and something is much better than nothing. A monthly fee for a defined scope or a fixed price for an annual return at a stated revenue level. «Contact us for a quote» reads as expensive and awkward, and it guarantees that every unqualified enquiry reaches you by phone."],
          ["Can clients send documents through the site?", "They should not upload them to the website itself — that puts sensitive material on web hosting, outside the system your practice runs on. The site routes clients into the portal your practice software already provides, with a clear explanation of what to send."],
          ["Why separate pages for different client types?", "Because that is how accounting is bought and how it is searched for. A page that names the visitor's own situation does not get compared on price with three identical pages; a page listing every service does."],
          ["We are on an industry template. Is it worth moving?", "If pages can be added and text edited, often not. If the structure is fixed and every change goes through a support ticket, then yes, and within a year it is cheaper. I say which case it is before quoting rather than after."],
          ["Do you design as well as build?", "Both, and the design is included in the price rather than quoted separately — a design nobody builds is not worth paying for. The design is also drawn against your real service list and bios, not against placeholder text, because that is where template designs fall apart."],
          ["Can we update the site ourselves?", "Yes, and in this profession you will need to: fees, people and deadline dates change. Those are edited without a developer. Structural changes, like adding a new client segment, are quick work but not yours to do."],
          ["Will the site be ready for search?", "It is built so search is possible — a page per segment, structure around real queries, markup matching the page. Being found is separate work with its own price, on the SEO page for accounting firms."],
          ["Who owns the site?", "You do: the code, the domain, the content and every login. Nothing stays with me as leverage, which is the main practical difference from a vendor template you rent."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an accounting firm website: what to send me"),
        p("Send the current site if there is one, your service list, the client segments you are genuinely better at than average, and how far you are willing to go on publishing fees. I reply within one working day with what I would build, in what order and at what price — and if a landing page for your strongest segment would do more than a full rebuild, I will say so."),
      ],
    },
  ],
};
