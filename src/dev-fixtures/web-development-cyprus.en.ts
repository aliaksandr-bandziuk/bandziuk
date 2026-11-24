// Landing page fixture: web design and website development in Cyprus (EN),
// group «web-development-cyprus». REBUILD of the existing old-template page at
// the same address /web-development-cyprus — replace-landing.cjs.
//
// Why this page first (02.11.2026). It is the biggest block of impressions on
// the whole site: 2613 impressions in three months, about 11% of everything,
// at average position 53.6 — and zero clicks. The old template is what it runs
// on: its headings include «Benefits Block», «Work Process» and «Landing CTA
// Block», plus label headings like «Business-first» and «Fast & reliable»,
// and the texts inside those blocks are hardcoded in the components, so the
// same words appear on forty other pages.
//
// Queries it already shows for, from Search Console (3 months):
//   website design cyprus 379 · web design cyprus 291 · web design in cyprus
//   263 · web development cyprus 257 · website development cyprus 200 · web
//   developers cyprus 176 · website design in cyprus 168 · web development
//   company cyprus 84 · website developers cyprus 71 · cyprus web design 63 ·
//   professional website cyprus 55 · web design services cyprus 54 · web
//   development services in cyprus 52 · cyprus web development 50 · business
//   website cyprus 48 · custom website development cyprus 47
// And three it shows for WITHOUT having the words on the page at all:
//   bespoke web development cyprus 38 · web maintenance in cyprus 19 ·
//   website redesign cyprus 14 — all three get a heading here.
//
// Cities: Limassol, Paphos, Larnaca and Nicosia are named, because the Russian
// queries for Limassol land on position 5–8 already and the owner's rule is
// that cities of countries with Russian-speaking business are carried across
// languages.
//
// The Cyprus experience claimed here is real and in the portfolio: the
// multilingual property platform case. Nothing else is claimed.
import { p, h2, h3, li, link, k } from "./pt";

export const webDevelopmentCyprusEn = {
  lang: "en",
  group: "web-development-cyprus",
  slug: "web-development-cyprus",
  title: "Web Design and Website Development in Cyprus",
  heading: "Web design and website development in Cyprus: a site that brings enquiries, not a brochure nobody reads",
  excerpt:
    "I design and build websites for companies in Cyprus — Limassol, Paphos, Larnaca and Nicosia. One developer rather than a studio, SEO written into the code rather than added later, and the two or three languages a Cyprus business actually needs. From €2,000, and I say before quoting whether a site is what you need at all.",
  seo: {
    metaTitle: "Website design and development in Cyprus from €2,000",
    metaDescription:
      "Websites for Cyprus businesses: Limassol, Paphos, Larnaca, Nicosia. Multilingual, SEO in the code, AI answers. From €2,000, reply in a working day.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Limassol, Paphos, Larnaca, Nicosia", "Websites from €2,000", "Named by ChatGPT and AI search"],
  heroPhonePoints: ["Our services", "Request a quote", "English · Ελληνικά · Русский", "Call us"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Business website: structure, pages, forms, multilingual", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Single-service landing page for a Cyprus business", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Website redesign in Cyprus, keeping the existing rankings", price: 1000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What I build",
      title: "Web design and development services for Cyprus businesses",
      items: [
        { _key: k("o"), iconName: "layout", title: "A business website from scratch", text: "Structure, pages, forms, two or three languages" },
        { _key: k("o"), iconName: "refresh-cw", title: "Website redesign in Cyprus", text: "New design without losing the rankings" },
        { _key: k("o"), iconName: "zap", title: "Single-service landing page", text: "One offer, one page, built to convert" },
        { _key: k("o"), iconName: "shopping-cart", title: "Online store", text: "Catalogue, cart, payments, delivery" },
        { _key: k("o"), iconName: "wrench", title: "Support for the sites I build", text: "Included after launch, continued by agreement" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI answers", text: "Services, prices and area an assistant can quote" },
      ],
    },    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: a Cyprus property platform and other multilingual builds",
      subtitle:
        "The first case is in Cyprus: a multilingual property platform with listings, filters and search visibility built without bought links. Alongside it — an education agency site taken from one country to ten, a premium renovation and investment site, a multilingual site for student services, and a consultant's site built around one expertise.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "seo-case-study-education-agency",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Websites in Cyprus that bring no enquiries: three common reasons"),
        p("I design and build websites for companies in Cyprus myself: structure, design, build and launch, with no handover between people."),
        p("Most Cyprus business sites are built as brochures: a homepage, an «about us», a services page listing everything in one block, and a contact form. They look finished and they rank for the company name, which is the one query where the company would be found anyway. Nothing on them answers the question a buyer actually types, so nothing on them can be found by a buyer who does not yet know the company exists."),
        p("The second reason is language. A Cyprus business often serves three audiences at once — local Greek-speaking customers, English-speaking expats and residents, and Russian-speaking buyers and business owners — and a site built in one language with a translation plugin bolted on serves none of them properly. Search engines treat a half-translated site as a weaker version of itself, and a buyer who lands on a page in the wrong language leaves."),
        p("The third is speed and structure, which nobody notices until a competitor outranks them. A site on a page builder with twelve plugins loads slowly on the phone, where almost all of these sites are actually opened."),

        h2("Web design in Limassol, Paphos, Larnaca and Nicosia"),
        p("I work with companies across the island and remotely, which in practice is how most of this work happens anyway: the files, the content and the review all travel over the internet, and nobody has to drive to Limassol for a meeting about a heading. What differs between the cities is not the build but the audience."),
        li("Limassol — the largest concentration of international companies, shipping, professional services and Russian-speaking business; sites here almost always need English and Russian, often Greek too;"),
        li("Paphos — tourism, property and a large expat population; English first, with Russian and German worth measuring before adding;"),
        li("Larnaca — logistics, trades and local services, where the buyer is closer to home and the local-search side matters more than the language count;"),
        li("Nicosia — government, finance, law and B2B, where the site is read by people checking whether the company is credible before they call."),
        p("Which languages a site actually gets is a question I answer with data rather than by habit: there is no point paying for a Greek version if nobody searches your service in Greek."),

        h2("Web developers in Cyprus: one developer instead of a studio"),
        p("Most of what is sold here as web development in Cyprus is sold by an agency and delivered by a chain: an account manager who takes the brief, a designer who draws without knowing what is buildable, a developer who receives a file and builds what it literally shows, and a copywriter brought in at the end. Every handover is a place where the point of the project gets lost, and the client pays for all four people plus the coordination between them."),
        p("You work with the person doing the work. That has a cost and a benefit, and both are worth knowing before you choose. The cost: one developer takes on fewer projects at once, so a start date is a real constraint rather than a formality, and there is no second person to hand your project to. The benefit: nothing is explained twice, a decision made on a call is in the build the same week, and the person who wrote the structure is the person who writes the code, so the structure survives contact with the build."),

        h2("Website development in Cyprus: how a build runs from brief to launch"),
        p("The sequence is the same for a four-page business site and for a property platform, and it is deliberately front-loaded: what is cheap to change in a document is expensive to change in code."),
        li("one call to establish what the site is for, who buys from you, and in which languages they search;"),
        li("a structure — the list of pages and what each one has to answer — agreed in writing before anything is drawn;"),
        li("design of the templates that carry the business, not of every page separately, because pages repeat and templates do not;"),
        li("the build, with the content going in as it is written rather than as lorem text replaced later;"),
        li("checks on real devices, the markup and the speed, then the move to your own hosting and domain;"),
        li("launch, and the support window that follows it."),
        p("Nothing in that list is unusual. What makes builds here go wrong is skipping the second step: a site drawn before anyone decided what it is for ends up as a brochure, and no amount of code fixes that afterwards."),

        h2("Web design in Cyprus: how a design gets drawn and approved"),
        p("A design file is not the thing that earns. It is a picture of a site, and a picture can be beautiful and still be unbuildable, unreadable on a phone, or impossible to fill with the text a business actually has. I draw what I am going to build, which removes the whole category of problems where a design is approved and then quietly becomes something else during the build."),
        p("Approval is the part that drags on most projects, so it is deliberately shaped: two templates are drawn first — the home page and the page type that repeats most, usually a service page — and those two carry every decision about type, spacing, colour and how a block behaves on a phone. Once those are agreed, the rest follows them rather than being re-argued one page at a time. Three rounds of revisions on two templates settle a site faster than one round on fifteen pages."),
        p("A Cyprus site has one design problem that sites in a single language do not: the same block has to hold English, Greek and Russian, and the same sentence is roughly a third longer in Russian and different again in Greek. A layout drawn to fit the English version breaks on the other two, and the usual fix — shortening the Greek text until it fits — means the Greek-speaking buyer gets less information. The templates are drawn with the longest language in them from the start."),

        h2("Photography for a Cyprus website: what to shoot before the build starts"),
        p("Stock photography of generic offices is the single clearest signal that a site is a template, and buyers here read it that way — Cyprus is small, and a company that shows no real premises, no real people and no real work invites the question of whether it has any. Photographs of your own are worth more than any design decision on top of them."),
        p("What is worth shooting, in rough order of value: the people who will answer the phone, the work itself or its result, the premises if clients ever come to them, and the equipment or tools if they are part of why you are credible. Horizontal frames with space around the subject, because a website crops to shapes a photographer does not expect. If a shoot is not realistic, say so early — the design can be built around text, structure and the work you can show, but that is a decision to make before the templates are drawn rather than after."),

        h2("Website design in Cyprus: what goes into a business site"),
        li("a page per service rather than one page listing all of them, because a buyer searches for one service, not for your catalogue;"),
        li("structure planned around what people search, so each page has a query it can realistically be found by;"),
        li("the languages your buyers use, as separate pages with their own addresses rather than a switcher that translates on the fly;"),
        li("forms that reach you where you actually read messages, including WhatsApp, which in Cyprus is often the real channel;"),
        li("speed on a phone, measured on the templates that carry the business, not on the homepage;"),
        li("a content management system you can edit without calling a developer, because prices and services change."),

        h2("Custom and bespoke web development in Cyprus: when a standard site is not enough"),
        p("Some businesses here need more than pages. A property agency needs listings that filter by city, type and price, and that stay findable one by one. A law firm needs practice-area pages that read differently for a local client and for a foreign one. A hotel needs availability and a booking path. A school or clinic needs accounts and records."),
        p(
          "That is custom development, and it is where most of my work sits: listings, filters, user accounts, and data arriving from a system the client already runs. The technical side of it is ",
          link("Next.js development", "/services/nextjs-development-services"),
          ", and when the data has to come from somewhere else it is ",
          link("CMS integration and API work", "/services/cms-integration-and-api-work"),
          ".",
        ),

        h2("Website redesign in Cyprus without losing the rankings"),
        p("If a site already brings some traffic, a redesign is the moment that traffic is most often destroyed. What protects it is unglamorous: a map of every existing address, a redirect for every address that changes, the structured data and the page speed carried over rather than rebuilt, and the old pages' text kept where it was earning. A redesign that skips this costs months of rankings, and rebuilding them costs more than the redesign did."),
        p(
          "How this is done in detail is on the ",
          link("website redesign page", "/services/website-redesign-services"),
          ", and the article ",
          link("how to redesign a website without losing SEO", "/blog/website-redesign-without-losing-traffic"),
          " walks through the whole sequence.",
        ),

        h2("Web maintenance in Cyprus after launch: what I support and what I do not"),
        p("A site is not finished at launch, and the first weeks are when the unpredicted things surface: a form a mail provider rejects, a page that reads badly on one phone, a price that changed before the site was published. Support covering that is included for one to six months by agreement, as part of the build rather than as a separate subscription."),
        p("After that window I go on supporting what I built, for as long as it is useful to you — updates, fixes, new pages and new services. That is ordinary work and it is priced per case, because a site with four pages and a site with listings and accounts are not the same commitment. The site is also built so that the everyday part does not need me: the content lives in a system you edit yourself, so a new price or a new team member is your change to make."),
        p("What I do not take on is maintaining a site somebody else built. Inheriting unfamiliar code means quoting for a risk neither of us can see yet, and the first month goes on reading another developer's decisions rather than on your business. If that is what you need, a local studio that works with your platform will serve you better than I would, and I will say so rather than take the work."),
        p(
          "What a build includes and what it leaves to you is set out on the ",
          link("website maintenance page", "/services/website-maintenance-services"),
          " and on the ",
          link("pricing page", "/pricing"),
          ".",
        ),

        h2("A website: what it costs in Cyprus and what moves the price"),
        p(
          "A business website starts at €2,000. A single-service landing page is €700–1,400. A redesign that keeps the existing rankings starts at €1,000. What moves the price: how many service pages, how many languages, whether anything has to be integrated with a system you already run, and whether the content exists or has to be written. Design is included and never appears as a separate line, because a design nobody builds is not worth paying for. The figures with what sits behind them are in the article ",
          link("what a website costs in Cyprus", "/blog/website-development-cost-in-cyprus"),
          " and on the ",
          link("pricing page", "/pricing"),
          ".",
        ),

        h2("How long website development in Cyprus takes"),
        p("A landing page takes two to three weeks, a business website four to six, a site with listings or accounts longer and quoted per case. What stretches it is almost never the code: it is the content and the decisions. Who signs off the text, which services get their own page, which languages are actually needed. Projects that finish on time are the ones where one person on the client side can decide."),
      ],
    },

    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for your website in Cyprus",
      subtitle: "I reply within one working day: what I would build, in which languages and at what price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where are you based?", options: ["Limassol", "Paphos", "Larnaca or Nicosia", "Outside Cyprus"] },
        { _key: k("z"), question: "What do you need?", options: ["A new website", "A redesign", "An online store", "Something custom"] },
        { _key: k("z"), question: "Which languages?", options: ["English only", "English and Greek", "English and Russian", "Three or more"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being found by AI assistants, not only by Google (GEO, AEO)"),
        p("People choosing a supplier in Cyprus increasingly ask ChatGPT, Perplexity, Gemini or Google's AI Overviews first — «who builds websites in Limassol», «which firms handle multilingual property sites». An assistant answers from text it can read and from sources that agree with each other. What that requires of a site: services and prices written as text rather than shown in images, markup that matches the visible page, and the same company name, address and service names on the site, the Google Business Profile and any directory that lists you."),
        p(
          "Getting an existing site into that state is a separate job: ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ". And if the site is sound but search brings nothing, that is ",
          link("SEO and search strategy", "/services/seo-optimization-and-strategy"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Web design and development in Cyprus: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What does web design and website development cost in Cyprus?", "A business website starts at €2,000, a single-service landing page is €700–1,400, and a redesign that keeps the existing rankings starts at €1,000. The number of service pages, the number of languages and any integration with a system you already run move the price. Design is included rather than quoted separately."],
          ["Do you work with companies in Limassol and Paphos specifically?", "Yes, and across the island. The work itself happens remotely, which is how most web projects run anyway — the content, the review and the handover all travel over the internet. What changes between cities is the audience and therefore the languages, not the build."],
          ["How many languages should a Cyprus website have?", "As many as your buyers actually search in, which is a question with a measurable answer rather than a matter of taste. In Limassol that is usually English and Russian, often Greek as well; in Paphos English first, with Russian and German worth measuring. I check the demand before anyone pays for a language version."],
          ["What is the difference between web design and website development?", "Design decides what the visitor sees and how they move through the site; development builds it so it is fast, editable and findable. I do both, and I do not sell design on its own — a design nobody builds is not worth paying for, so it is included in the price of the site."],
          ["Can you redesign our site without losing the traffic we have?", "Yes, and that is the part most redesigns get wrong. Every existing address is mapped, every changed address gets a redirect, and the structured data, speed and earning text carry over. Without that a redesign costs months of rankings."],
          ["Do you have results with a Cyprus business?", "Yes — a multilingual property platform in Cyprus, in the portfolio above: listings with filters, four language versions, and search visibility built without bought links. I can walk you through what was done and what it changed."],
          ["Will the site be ready for search engines?", "It is built so that search is possible: a page per service, structure planned around real queries, markup that matches the page, and speed on the templates that matter. Ongoing promotion is separate work with its own price."],
          ["How long does website development take?", "Two to three weeks for a landing page, four to six for a business website, longer for listings or accounts. The content and the sign-off decisions stretch the timeline far more often than the code does."],
          ["Who maintains the site after launch?", "You can, for everything that changes week to week — prices, services, team, text. For updates, backups and the technical side there is a separate maintenance service, and you are not obliged to take it from me."],
          ["How does a company get into AI answers?", "That is the GEO and AEO part of the work: text instead of pictures, structured data for the company and its services, and the same details everywhere. Progress is measured by putting a fixed set of questions to ChatGPT, Perplexity and Gemini before and after."],
          ["Who owns the site?", "You do: the code, the domain, the content and every login. Nothing is held back as leverage."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a website in Cyprus: what to send me"),
        p("Send what your company does, which city you are in, which languages your buyers use, and what exists today — a link if there is a site, or nothing if there is not. I reply within one working day with what I would build, in which languages and at what price. If a landing page would do the job for a fraction of a full site, I will say so rather than quote the bigger thing."),
      ],
    },
  ],
};
