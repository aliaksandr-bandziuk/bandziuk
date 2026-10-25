// Landing page fixture: Insurance agency website design (EN), group
// «insurance-agency-website-design». New page.
// Semantic core: ref/real-estate-finance.md / .csv, insurance group:
// insurance agency website design 170 (H1, H2s) · website design insurance
// agency 110 / website design for insurance agency 110 (H2, excerpt) ·
// insurance agents websites 170 (metaTitle, text) · insurance agency website
// template 70 (H2 on templates and builders) · best insurance agency websites
// 20 + best insurance agency website design 10 + insurance agent website
// examples 20 (first-screen H2, patterns only, no real agencies named) · best
// website builder for insurance agents 10 (templates H2 text). Not targeted:
// insurance splash 110 / insurance splash reviews / phone number (vendor brand),
// insurance website builder login 50 (navigational), insurance marketing
// services 70 (agency services, belongs to SEO).
// Intent: ref/intent-check-real-estate-finance.md — «insurance agent seo» vs
// «insurance agency website design» 0 shared URLs, 0 shared domains → separate
// pages. Design SERP: studios and galleries (fireart, agentmethods,
// joinstratosphere, colorlib, hubspot, dribbble, pinterest) → this page answers
// what an agency site looks like and how it is built.
// This page = design and build: first screen, independent vs captive agents
// (carrier logos, carrier brand rules, agent agreements), line-of-business page
// template (auto, home, life, commercial, health), quote forms vs calls and
// what forms must not collect, service center for current clients (claims,
// payments, ID cards, certificates), license numbers and disclosures (state
// rules, Medicare marketing rules, FCA in general terms), templates and agent
// platforms vs custom, office pages and Spanish versions, AI-readable design
// (YMYL), speed, accessibility, ownership, CRM / agency management system
// connection in general terms, cost.
// NOT on this page: insurance agency SEO — keywords, local SEO per office,
// Google Business Profile and reviews strategy, «near me», content plan
// (/insurance-agency-seo, linked once); paid ads; lead buying.
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search; Cyprus VIP Estates on every page of the batch.
import { p, h2, li, ol, link, k } from "./pt";

export const insuranceAgencyWebsiteDesignEn = {
  lang: "en",
  group: "insurance-agency-website-design",
  slug: "insurance-agency-website-design",
  title: "Insurance agency website design",
  heading: "Insurance Agency Website Design",
  excerpt:
    "I design and build insurance agency websites: a first screen with your lines, towns and phone number, a page for each type of coverage, quote requests that skip sensitive data, a service center for current clients and license details where the rules expect them.",
  seo: {
    metaTitle: "Websites for Insurance Agents and Agencies | Bandziuk",
    metaDescription:
      "Insurance agency website design with the build included: coverage pages, quote forms, a service center for clients, license details, fast on phones. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Remote, overlapping US hours"],
  heroPhonePoints: ["Get an auto quote", "Report a claim", "Talk to your agent", "Call · Text"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple insurance agency website, design and build", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Insurance agency website with personal and commercial line pages, office pages, quote forms connected to your CRM, a client service center and local SEO setup, design and build", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with insurance agency website design",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for each line of coverage", text: "Auto, home, life, health and commercial, one template" },
        { _key: k("o"), iconName: "file-text", title: "Quote requests without sensitive data", text: "No SSNs, license numbers or health details" },
        { _key: k("o"), iconName: "phone", title: "A service center for current clients", text: "Claims lines, payments, ID cards, certificates" },
        { _key: k("o"), iconName: "shield-check", title: "License details and disclosures in place", text: "Footer, about page and a slot on every line page" },
        { _key: k("o"), iconName: "plug", title: "Requests that reach your CRM", text: "Or your agency management system, where it allows" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Lines, carriers, towns and agents as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple insurance agency website", value: "700–1,400 €", note: "design and build" },
        { _key: k("r"), label: "Line and office pages, quote forms to your CRM, service center, local SEO", value: "from 2,000 €", note: "design and build", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Website design portfolio: sites I have designed and built",
      subtitle:
        "Cyprus VIP Estates is a real estate platform I designed and built from scratch: a multilingual site with a filterable catalog, an interactive map and enquiries that go straight into the company’s CRM — the same path an agency’s quote requests should take. Next to it: a 3D laser scanning and BIM company whose rebuilt site went from no leads to leads every week, a multilingual education agency site covering ten countries, a premium-design site for a Warsaw renovation and investment company and a car repair shop with reworked SEO and UX.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your insurance agency website",
      subtitle: "I reply within one business day with a plan for the home, line-of-coverage and service pages and a fixed price.",
      contextLabel: "Agency name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of agency are you?", options: ["Independent agency", "Captive agent", "Insurance broker", "New agency"] },
        { _key: k("z"), question: "Which lines bring most of your business?", options: ["Personal auto and home", "Life and health", "Medicare", "Commercial"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design insurance agency websites and build them myself, for independent agencies, captive agents and small brokerages in the US, the UK, Canada and Australia. People open an agent’s site in one of two moods: shopping for a better price on auto or home coverage, or worried — about a claim, a non-renewal letter, a contract that demands a certificate of insurance by Friday. The design has to work for both, and for the existing clients who come back to pay a bill or download an ID card."),

        h2("Insurance agency website design: what the best agency websites show on the first screen"),
        p("Look through insurance agent website examples and the best ones answer four questions before the visitor scrolls:"),
        li("which coverage the agency writes and where — “Auto, home and business insurance in Tulsa”, not “Protecting what matters most”"),
        li("whether it is an independent agency that compares several carriers or an agent of one company"),
        li("who the visitor will talk to — real photos of the agents with their names and the languages they speak"),
        li("how to get a quote now — a quote button, the phone number with office hours and texting if you offer it"),
        p("A family under an umbrella or a slider rotating three slogans leaves all four questions open. Your office, your team and your town make the agency recognizable before the first call."),

        h2("Independent agency or captive agent website: carrier logos and brand rules"),
        p("An independent agency sells choice: several carriers and one agent who shops the policy. The site shows it with a “carriers we work with” section, and each logo is used the way that carrier’s appointment terms and brand guidelines allow — some carriers supply approved logo files and wording, others prefer a plain list of names."),
        p("A captive agent sells one company’s products and works under that company’s brand rules. Many carriers give their agents a ready-made microsite and limit what an agent may publish elsewhere: colors, the carrier name in a domain, product descriptions, claims about rates. Check your agent agreement or ask your field office before ordering an independent site. Where a personal site is allowed, the design puts you first — your office, your community, your languages — and shows the carrier’s brand exactly as its guidelines describe."),

        h2("Insurance agency website pages for auto, home, life, health and commercial coverage"),
        p("Each line of business gets its own page, built from one template so all of them read alike:"),
        li("a heading that names the coverage and the area — “Commercial auto insurance for contractors in Collin County”"),
        li("who the coverage is for and what it usually includes, in plain words rather than policy language"),
        li("what the agent needs for a quote, so the visitor can gather documents before the call"),
        li("the questions clients ask about this line, answered briefly"),
        li("the agent who handles it and a quote request built for this line"),
        p("Commercial lines need more depth than personal ones. The owner of a restaurant, a trucking company or a roofing contractor wants to see their trade named — general liability, workers’ compensation, commercial property, a business owner’s policy — and an agent who knows which certificate a general contractor will ask for. Life and health pages get a calmer layout with fewer buttons, because that decision takes longer and is often made by two people."),

        h2("Quote request forms or phone calls on an insurance agent website"),
        p("Many shoppers call; others want to start a quote in the evening without talking to anyone. Every line page offers both:"),
        li("a short quote request — line of coverage, ZIP code, current carrier and renewal date, name and phone — that takes under a minute"),
        li("a longer form per line, if your team prefers to receive vehicles, drivers or property details before calling back"),
        li("an online quoting tool or comparative rater your agency already licenses, embedded and styled to match the site"),
        li("tap-to-call with office hours, texting and a callback request when the office is closed"),
        p("The forms never ask for Social Security numbers, full driver’s license numbers or medical history. Those belong in a phone conversation or the carrier’s own application, not in an email sent from a website. A short note next to the button says so and tells the visitor when to expect a call."),

        h2("A service center page for current clients: claims, payments and ID cards"),
        p("Many visitors are already clients: they need to report a claim, pay a bill, get an ID card, add a driver or request a certificate for a job site. When the site has no answer, they call, and service calls crowd out new business."),
        p("A service center page handles most of this: a block for each carrier with its claims phone line, payment link and mobile app; forms for policy changes and certificate requests that reach the right person on your team; and the office number for everything else. The page is linked from the header on every screen, so a client standing next to a dented car finds the claims number in two taps."),

        h2("License numbers, disclosures and compliance on insurance agency websites"),
        p("An agency website is advertising, and insurance advertising is regulated state by state. Some states expect the agency’s or producer’s license number on advertising, websites included, and agencies writing in several states often list where they are licensed. Medicare plan pages fall under federal marketing rules with required disclaimers, and life insurance and annuity pages have advertising rules of their own. Words like “cheapest” or “guaranteed savings” cause trouble almost everywhere."),
        p("The design gives these items fixed places: license details in the footer and on the about page, a disclaimer slot on each line page, a privacy policy linked from every form. I am a designer and developer, not a compliance officer: confirm the wording with your state department of insurance, your carriers or your compliance contact before launch. In the UK, the FCA’s rules on financial promotions and status disclosure apply."),

        h2("Insurance agency website templates and builders or a custom design"),
        p("Insurance agency website templates and builders sold to agents launch quickly and come with coverage pages already written. The trade-offs show later: the same pre-written pages appear on hundreds of agency sites, the design changes only within the platform’s limits, and when you stop paying the monthly fee, the site usually stays behind."),
        p("A template or an agent platform is a sensible start for a new agent with one or two lines and no time to write. A custom design pays off when the agency has several lines or offices, wants to stand out in its town, writes commercial business for specific trades or serves clients in a second language. Pages are written for your agency, and the code, content and domain are yours."),

        h2("Office pages and Spanish versions of an insurance agency website"),
        p(
          "An agency with more than one location gives each office its own page: address, hours, parking, the agents who work there and their languages, with a map and a link to that office’s Google profile. How those pages and profiles earn a place in local results is covered on the ",
          link("insurance agency SEO", "/insurance-agency-seo"),
          " page.",
        ),
        p(
          "Many agencies serve clients who prefer Spanish, and others work with Vietnamese, Korean, Polish or Arabic-speaking communities. A version written by a person, a language switch on the first screen and agents listed by the languages they speak make the first call easier. Carrier documents may exist only in English, so each page says what is available in which language. The technical side is on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page.",
        ),

        h2("An insurance agency website that ChatGPT and Google AI Overviews can read"),
        p("Shoppers ask ChatGPT, Perplexity and Google’s AI Overviews things like “independent insurance agent in El Paso who speaks Spanish” or “who insures food trucks in Austin”. Insurance is a “Your Money or Your Life” topic for Google, held to a stricter standard of trust, and AI assistants lean on the same signals. The design keeps the facts as page text: lines of coverage, carriers, towns served, hours, languages, license details and the agents’ names, with InsuranceAgency structured data and the same name, address and phone as your Google profile. Every coverage guide shows its author and a review date."),
        p(
          "Being named in those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Speed, accessibility and ownership of an insurance agency website"),
        p("Pages appear in under 2.5 seconds on a phone, without a heavy page builder. The site is built to WCAG 2.1 AA — contrast, labeled fields, keyboard navigation — because many clients are retirees, and accessibility claims against US business websites are common. I build in WordPress or in Next.js with a headless CMS, depending on who will edit the site."),
        p("The domain is registered to the agency, the hosting account is yours, and code and content are handed over at launch. Quote requests go to your inbox, your CRM or your agency management system — in general terms through the system’s own web form, its API or an automation service, depending on what your plan allows, and I check that before quoting. On Cyprus VIP Estates, enquiries from the site’s forms land directly in the company’s CRM; an agency’s quote requests can follow the same route."),

        h2("How an insurance agency website is designed and built"),
        p("I do the structure, the design and the build myself, so the person who draws the quote form also connects it — no account manager in between and no website bundled into a monthly marketing package."),
        ol("Brief. You send the lines you write, your carriers, offices, languages, the current site and agency sites you like."),
        ol("Phone-first structure. The home page, one line page and the service center are laid out and agreed."),
        ol("Visual design. Those three pages are designed in full; the rest follow the same system."),
        ol("Build, texts and launch. Forms are tested end to end, analytics and Search Console are connected, and your team gets a short editing guide."),
        p(
          "A new design for an existing site keeps its addresses and rankings through the ",
          link("website redesign", "/services/website-redesign-services"),
          " process. How I build sites in general is on the ",
          link("website development", "/services/website-development"),
          " page.",
        ),

        h2("How much insurance agency website design costs"),
        p("Design is not sold separately; the price covers design and development together."),
        li("A simple insurance agency website — home, line pages, about, service center, contact and quote request: 700–1,400 €."),
        li("A full site with personal and commercial line pages, office pages, quote forms connected to your CRM or management system, a second language and local SEO setup: from 2,000 €."),
        p(
          "There is no monthly fee to me after launch: you pay the host and the registrar, and me only for changes you ask for. All ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Insurance agency website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does an insurance agency website cost?", "The price covers design and development: 700–1,400 € for a simple agency site and from 2,000 € for a full site with personal and commercial line pages, office pages, quote forms connected to your CRM, a service center and local SEO setup. I quote a fixed price after a short description of the agency."],
          ["Can a captive agent have their own website?", "Often yes, within the carrier’s rules. Many carriers provide agent microsites and restrict branding, domains and product wording on other sites. Check your agent agreement or ask your field office first; where a personal site is allowed, I design it around you and follow the carrier’s brand guidelines."],
          ["Can the website give instant insurance quotes?", "If your agency already licenses an online quoting tool or comparative rater, it can be embedded and styled to match the site. Without one, a short quote request with a fast callback works well, and many shoppers prefer to talk to an agent before buying."],
          ["Will the site show our license numbers and required disclosures?", "Yes. License details sit in the footer and on the about page, every line page has a slot for disclaimers, and Medicare or life pages can carry the wording those rules require. The exact text is yours to confirm with your state department of insurance, carriers or compliance contact."],
          ["Can quote requests go into our agency management system or CRM?", "Usually yes — through the system’s own web form, its API or an automation service, depending on the system and your plan. I check what your account supports before the quote. Where no connection is possible, requests arrive by email with every field filled in."],
          ["Do you write the coverage pages, or do we?", "I write them from your brief and the questions your clients ask, in plain language; you check the facts and the coverage details. Pages are written for your agency, not copied from a shared library used by other agents."],
          ["How do you work with a US agency from Poland?", "Remotely and in English. My afternoon and evening in Central European Time overlap with the US business morning, so calls and design reviews fit your day, with comments in a shared file between them. Contracts and invoices are in euros."],
          ["Will a new website get our agency into ChatGPT answers?", "The design makes the agency readable — lines, carriers, towns, languages and agents as text with structured data. Being named in answers to competitive questions takes ongoing SEO and GEO work on top of the site, which I also do."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order insurance agency website design: what to send me"),
        p(
          "Send the agency’s name and current website, the lines you want more of, whether you are independent or captive, your carriers, the number of offices and agents, the languages your clients speak and the CRM or management system you use. Photos of your team and office, if you have them, help me show a first screen that looks like your agency. I will reply with a page plan and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
