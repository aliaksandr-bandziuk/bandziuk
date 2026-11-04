// Landing page fixture: SEO for security companies (EN), group «security-company-seo».
// NEW page — create-landing.cjs, root level.
//
// Why it exists (04.11.2026). Measured: «security seo» 100, taken as the
// PHYSICAL security half. The term splits: guard companies (First Page Sage,
// Guardist, LinkGraph, upseo, The Business Rover) and cybersecurity agencies
// (cybersecurity-seos.com, Scale Theory). Physical security is a local service
// business and fits the portfolio; cybersecurity is a B2B SaaS buyer with a
// different cycle. The page says which half it is for in its first section.
//
// CANNIBALISATION CHECK: only /locksmith-seo is adjacent, and that is a
// different trade (consumer, emergency). No conflict. No paired website page.
//
// The angles, none of which the agency pages on that SERP make:
//   1. TWO buyers in one industry — manned guarding sold to procurement on
//      long contracts, versus alarm and camera work sold to a small business
//      or a household. Different searches, different cycle, usually one site
//      trying to serve both.
//   2. The honest limit: large guarding contracts are won through tender and
//      procurement, not through a website. Search brings installation work,
//      small and mid-sized contracts, and inbound that shortcuts the tender —
//      and saying so is the differentiator.
//   3. Response time is the deciding specification and almost nobody publishes
//      a figure.
//   4. CCTV installation puts the customer into data-protection obligations —
//      signage, retention, who is the controller. A page explaining that is
//      genuinely useful, EU-wide, and essentially never written by competitors.
//   5. Licensing: where the market licenses security work, the licence is both
//      trust and a search term. Phrased conditionally — not asserting any
//      specific country's regime.
import { p, h2, h3, li, link, k } from "./pt";

export const securityCompanySeoEn = {
  lang: "en",
  group: "security-company-seo",
  slug: "seo-for-security-companies",
  title: "SEO for Security Companies: Guarding, Alarms and CCTV",
  heading: "SEO for a security company: how to reach the buyers who choose without running a tender",
  excerpt:
    "A security company has two buyers who share nothing: procurement departments that run tenders, and a business owner who needs cameras this month. Search reaches the second, and shortcuts the first. Audit from €250, and I will say which of your work it cannot help.",
  seo: {
    metaTitle: "Security Company SEO — audit from €250",
    metaDescription:
      "SEO for security companies: guarding versus alarm and CCTV buyers, response times, data-protection duties, licensing and local search. Audit €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Guarding and installation split", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Pages per site type you protect", "Response time published", "CCTV and data-protection duties", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a security company: site, service pages, local profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: service and sector pages, licensing and response data, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a security company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a security company actually consists of",
      items: [
        { _key: k("o"), iconName: "layers", title: "Guarding and installation separated", text: "Two buyers who share nothing" },
        { _key: k("o"), iconName: "grid", title: "A page per site type you protect", text: "Warehouses, building sites, retail, events, estates" },
        { _key: k("o"), iconName: "activity", title: "Response time as a published figure", text: "The specification that decides the contract" },
        { _key: k("o"), iconName: "file-lock", title: "CCTV and the customer's data duties", text: "Signage, retention, who is responsible" },
        { _key: k("o"), iconName: "shield-check", title: "Licensing and insurance stated", text: "Trust, and a search term in its own right" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Monitored alarm for a warehouse, response under 15 minutes»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Which security businesses this page is for, and which it is not"),
        p("This page is about physical security: manned guarding, monitored alarms, access control, and camera installation and monitoring. If you sell information security — penetration testing, managed detection, compliance work — the word is the same and nothing else is: that is a business-to-business software market with its own buyers, its own publications and a sales cycle that has little to do with being found locally."),
        p(
          "If you fit locks and respond to lockouts rather than monitor premises, the trade is closer to ",
          link("SEO for locksmiths", "/locksmith-seo"),
          ", which is built around emergency searches instead of contracts.",
        ),

        h2("A security company has two buyers, and one website usually fails both"),
        p("Manned guarding is sold to an organisation: a procurement team, a facilities manager, a developer, a local authority. They work from specifications, insurance certificates, licence numbers and references, over months, often through a formal tender. Alarm and camera work is sold to a business owner or a householder who had a break-in last week, wants a quote, and will decide within days."),
        p("These two read nothing alike. The first needs evidence and documents; the second needs prices, response times and somebody who answers the phone. Most security company websites address the first in tone — corporate, formal, photographs of a man in a high-visibility jacket — while almost all of their searchable demand comes from the second. Separating them into two clear parts of the site is usually the first structural change worth making."),
        li("guarding: sectors served, licence and insurance, vetting and training, shift coverage, references;"),
        li("installation and monitoring: what systems, what they cost from, how fast, who monitors them and from where;"),
        li("one page per type of site you protect, because a warehouse and a building site are different problems;"),
        li("and a separate page for events, which is a different purchase again — dated, short, and planned weeks ahead."),

        h3("The honest limit: search will not win you a tender"),
        p("I would rather say this before you pay me than after. Large guarding contracts are awarded through procurement, and procurement does not find suppliers through a search engine — it runs a process, often with a shortlist assembled before anything is published. No amount of content changes that, and an agency that tells you otherwise has not worked with a procurement timetable."),
        p("What search does do is three things that are worth real money: it brings installation and monitoring work, which is the higher-margin half of most security businesses and is bought like any other local service; it brings the small and mid-sized guarding contracts that are awarded by one person making a decision rather than by a committee; and it makes you findable to the procurement officer who has your name from a reference and is checking whether you look like a serious company. That third one is not lead generation, and it decides shortlists."),

        h2("Response time, coverage and the specifications buyers actually compare"),
        p("Security is bought on specifications, and the deciding one is almost always how fast somebody arrives. Yet most security company sites say «rapid response» and no figure, which reads to a buyer as a number too poor to print. A published range — the area you cover and the time you commit to within it — outperforms every adjective in the industry, and it also pre-empts the conversation where the customer discovers you are forty minutes away."),
        p("The same applies to the other comparables: how monitoring is staffed and from where, what happens when the connection drops, who holds the keys, whether patrols are logged and how the customer sees that log, and what the contract minimum is. None of this is marketing copy, all of it is searched, and publishing it is what distinguishes a company that has thought about the service from one that has bought a website template."),

        h3("CCTV installation makes your customer responsible for personal data, and almost nobody explains it"),
        p("The moment a camera is installed, the customer acquires obligations about what the cameras may see, what signage is required, how long recordings may be kept and who may access them. Across the European Union those duties fall on the customer as the data controller, not on the installer, and most customers have no idea they exist until something goes wrong."),
        p("A page that explains this plainly — what the installer is responsible for, what the customer must do, what retention period is defensible, where cameras should not point — is one of the most useful pages a security company can publish, and in my experience none of its competitors has one. It ranks because it answers a question people ask in those words, and it converts because a company that warns you about an obligation reads as one that will not cut corners on the installation either."),
        p("Where your market licenses security work, say so with the licence number and the scope it covers. It is a trust signal, it is checked by serious buyers, and it is also searched directly by people who have been told to verify that a contractor is licensed."),

        h2("Local search, the map results and the sector pages that bring the contracts"),
        p("Installation and small guarding work behave like any local service: the map results and a correctly built profile bring the first contact, and the sector pages decide whether it goes anywhere. Those sector pages are where this industry has the most unexploited room, because almost every competitor publishes one page called «our services» covering warehouses, construction sites, retail, residential estates, events and offices at once, and therefore ranks for none of them."),
        p(
          "The groundwork for being found by city and across a service area is on the ",
          link("local SEO page", "/services/local-seo-services"),
          ", and if you want the state of your own site established before committing to anything, that is the ",
          link("SEO audit", "/services/seo-audit"),
          ".",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: service businesses and technical work whose visibility I have run",
      subtitle:
        "What these share with a security company: a service bought on specifications, a local or contract buyer, and work that included the technical state of the site rather than content alone. Anti-spam protection for website forms, an architecture practice rebuilt and scanned for search problems, a car service business, a renovation and investment firm, and an education agency taken from one country to ten.",
      picks: [
        "anti-spam-protection-for-website-forms",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
        "seo-case-study-education-agency",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your security company",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What is the main business?", options: ["Manned guarding", "Alarms and monitoring", "Camera installation", "All of them"] },
        { _key: k("z"), question: "Who do you want more of?", options: ["Business contracts", "Householders", "Event work", "Building sites"] },
        { _key: k("z"), question: "Do you publish a response time?", options: ["No", "«Rapid response»", "Yes, with a figure", "Only in contracts"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a buyer asks ChatGPT for a security provider (GEO, AEO)"),
        p("«Who installs a monitored alarm for a warehouse in my area, with response under fifteen minutes, and roughly what does it cost» is now one question put to an assistant rather than four searches, and security suits it well because every part of the answer is a specification somebody has to have published. The assistant answers from text it can read, so the same things decide whether a company is named: the sectors and systems written out rather than hidden behind «full security solutions», response times and prices it can quote, the licence and the service area stated, and the same company name, address and phone number everywhere."),
        p(
          "Getting a site into that state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants describe the company wrongly — a service you dropped, an area you no longer cover, a licence that has been renewed under a new number — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for security companies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a security company cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. What moves the number is whether you need both halves of the business covered — guarding and installation — how many sectors you serve, and how large the service area is."],
          ["Will this win us tenders?", "No, and I will say that before invoicing rather than after. Tenders are run as a process, often with the shortlist formed before publication, and no website changes that. What search does is bring installation and monitoring work, bring the contracts decided by one person rather than a committee, and make you look like a serious company to the procurement officer who already has your name and is checking you."],
          ["Should guarding and alarm installation be on the same site?", "On the same site, in two clearly separate parts. They are different buyers with different timescales and opposite needs — documents and evidence on one side, prices and response times on the other — and a single set of pages written for both usually convinces neither."],
          ["Should we publish a response time?", "Yes, as a range tied to an area. «Rapid response» with no figure reads as a number too poor to print, and the figure is what buyers compare. It also prevents the discovery, after signing, that you are forty minutes from the site."],
          ["Why would we write about data protection? We only install the cameras.", "Because your customer acquires the obligations and usually does not know it — signage, retention periods, who may view recordings. A page explaining what you handle and what they must do is useful, almost unique among competitors, and it signals a company that will not cut corners on the installation either. It is not legal advice, and it should say so."],
          ["Does the Google profile matter for contract work?", "For installation and small business work, a great deal. For large guarding contracts, less — though a thin or inconsistent profile is noticed by anyone checking you, which is the stage where most of this industry's reputational damage happens quietly."],
          ["How long before it produces work?", "First movement after about a month and a half, growth on a three to six month horizon. Installation enquiries tend to arrive first because the decision is fast; contract work follows later and usually starts as somebody checking you rather than enquiring."],
          ["Who writes the sector pages?", "I draft them and you correct them. What makes a warehouse page convincing is what only an operator knows — where intruders actually enter, what a patrol route looks like, why one camera position is useless — and a facilities manager reading it can tell immediately whether the company has stood on a site at three in the morning."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a security company: what to send me"),
        p("Send the site, say whether the business is mainly guarding, installation or both, and list the sectors you want more work in. I reply within one working day with what is holding the site back, which sector pages are missing, and what I would do first — including a plain note of which part of your business search cannot help, so you are not paying for it."),
      ],
    },
  ],
};
