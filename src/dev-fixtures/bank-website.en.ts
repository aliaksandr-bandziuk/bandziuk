// Landing page fixture: bank website design (EN), group «bank-website».
// New page, create-landing.cjs.
//
// Why (07.11.2026). Measured in the same run as the SEO page:
//   bank website design 320 · web design for banks 320 · bank web design 320 ·
//   bank website development 10
// plus the bare form «bank website» 8100, which by precedent belongs to
// customers looking for their own bank's site and is NOT targeted here.
// Intent check on «bank website design»: DesignRush, Fireart, Wakefly, WSI,
// InternetDevels — studios and studio directories, so the searcher is the
// bank. See claude/industry-delta-2026-11-07.md.
//
// The owner's rule splits development, design and SEO into separate pages
// bought by different people. The SEO side is /seo-for-banks; this page is
// the build.
//
// Spine, and what keeps it clear of /seo-for-banks: a bank's public site sits
// next to a login, and that seam is where these projects fail. Everything
// here follows from it — one unmistakable domain, third-party scripts that
// cannot touch a form, product conditions stored as data so an approved value
// publishes once, documents that stay readable, and a vendor security review
// that takes weeks and has to be in the schedule.
//
// NOT on this page: ranking work (/seo-for-banks), local SEO, fintech and
// payment providers, and anything resembling a promise about online banking
// itself — the public site is the scope.
//
// Owner's rules: design is never sold separately and is included in the build;
// every page covers AI search; never say there are no clients from the
// visitor's industry.
import { p, h2, li, link, k } from "./pt";

export const bankWebsiteEn = {
  lang: "en",
  group: "bank-website",
  slug: "bank-website-design",
  title: "Bank website design",
  heading: "Bank website design and development: the public site that sits next to your login",
  excerpt:
    "I design and build websites for banks and cooperative banks: product conditions stored as data rather than retyped, one unmistakable domain, documents that stay readable, accessibility as a requirement, and a build that survives a vendor security review. Design included, from €2,000.",
  seo: {
    metaTitle: "Bank Website Design and Development from €2,000",
    metaDescription:
      "Website design and development for banks: product conditions as data, one domain, accessible documents, a build that passes vendor security review. From €2,000.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design included in the build", "From €2,000", "Answer within 1 working day"],
  heroPhonePoints: ["Accounts and cards", "Mortgage calculator", "Find a branch", "Log in"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Bank website: structure, product pages, branch pages, design included", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page for one banking product, designed and built", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Redesign of a bank website with rankings and documents kept", price: 1000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What I build",
      title: "What a bank website build covers",
      items: [
        { _key: k("o"), iconName: "database", title: "Conditions stored as data", text: "Approve a rate once, it appears everywhere" },
        { _key: k("o"), iconName: "shield-check", title: "One domain, no look-alikes", text: "The address itself is a security control" },
        { _key: k("o"), iconName: "file-text", title: "Documents that stay readable", text: "Tariffs and terms as pages, not only PDFs" },
        { _key: k("o"), iconName: "map-pin", title: "A page for every branch", text: "Hours, services, ATM, accessibility" },
        { _key: k("o"), iconName: "eye", title: "Accessibility built in", text: "A legal requirement for banking services" },
        { _key: k("o"), iconName: "file-lock", title: "Built to pass a security review", text: "Questionnaires, scripts, data flows" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Where a bank website breaks: the seam between the site and the login"),
        p("I design and build websites for banks and cooperative banks, and design is part of the build rather than a separate invoice. The first thing to settle is the seam. A bank runs two things that customers experience as one: a public site that explains products and a banking application behind a login. They are different systems with different risk profiles, and almost every expensive mistake on a bank website happens where they meet."),
        p("The practical version of that: the public site must never imitate the login, never collect anything that looks like a credential, and never live on a domain that merely resembles the main one. A campaign microsite on its own address teaches customers that bank-like domains are fine to trust — which is exactly the habit phishing depends on, and it also splits the search authority you already paid for."),

        h2("Product conditions belong in data, not in hand-typed pages"),
        p("On most bank sites a rate appears in six places: the product page, the comparison table, the campaign banner, the FAQ, a PDF and an old landing page nobody remembers. When compliance approves a new figure, five of those get updated and one does not, and the one that does not is the one a customer screenshots."),
        p("So conditions are modelled as structured data with an effective date: approved once, published everywhere, with the old value kept for the archive rather than overwritten. It removes an entire category of risk, and as a side effect it is what makes the same conditions readable by search engines and AI assistants instead of being locked inside an image."),

        h2("Tariffs, terms and the documents nobody can read"),
        p("Banks publish a lot of PDFs, and they have to. What breaks is using the PDF as the only version: a tariff that exists solely as a scanned table is invisible to search, unusable with a screen reader and unreadable on a phone. The build keeps the document where it legally belongs and puts a readable page beside it — the same content as text, with the file linked from it."),

        h2("Accessibility is a requirement before it is a feature"),
        p("For banking services in the EU accessibility has been mandatory since 28 June 2025, and in practice it decides design choices rather than decorating them: contrast that survives a sunny bus stop, forms that work from the keyboard, errors announced rather than only coloured red, and a structure of headings that is the same structure search engines read. Retrofitting it after launch costs more than building it in, and the deadline does not move."),

        h2("The security review you will be asked to pass, and how it affects the schedule"),
        p("A bank does not hire a contractor by looking at a portfolio alone. There will be a vendor questionnaire: where the data goes, which third-party scripts load, who has access to what, how releases are approved. Plan weeks for it rather than days."),
        li("third-party scripts are kept off pages with forms, and analytics is configured so it cannot read what a visitor types;"),
        li("the content system has roles and an approval step, so a published change always has a named approver behind it;"),
        li("hosting, logs and backups are described in writing before the build starts, because that is what the questionnaire asks;"),
        li("everything is yours from the first day: repository, domain, hosting account and every credential."),

        h2("Redesigning a bank website without losing rankings or documents"),
        p(
          "Most bank projects are rebuilds rather than first sites, and the risk is the same as anywhere plus one: the documents. Every existing address goes into a map and every changed one gets a redirect, including the links to tariff PDFs that other sites and your own letters point at. ",
          link("Website redesign", "/services/website-redesign-services"),
          " covers the method, and ranking work afterwards is ",
          link("SEO for banks", "/seo-for-banks"),
          ".",
        ),

        h2("What a bank website costs and what moves the price"),
        p(
          "A website starts at €2,000 with design included — I do not sell drawings I am not going to build. A landing page for one product is €700–1,400. A redesign that keeps rankings and documents starts at €1,000. What moves the price: the number of products, the number of branches, how many languages, whether conditions come from a system you already run, and how long approvals take. The figures are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),

        h2("How long a bank website takes to build"),
        p("A product landing page takes two to three weeks, a full site four to six, a site with a branch network and a document library longer and quoted per case. What stretches it is almost never the code: it is approvals, the security review and the wording of product conditions. Projects finish on time when one person on your side can decide and one reviewer can approve."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: catalogues, multilingual builds and work under constraints",
      subtitle:
        "A multilingual real estate platform with a catalogue, filters and search visibility built without bought links; an education agency site that grew from one country to ten; a renovation and investment company site with a premium look; a multilingual student services site; and a consultant site built around a single expertise.",
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
      title: "A quote for your bank website",
      subtitle: "I answer within one working day: what I would build, in which languages, and what it costs.",
      contextLabel: "Institution name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you need?", options: ["A new website", "A redesign of the current one", "A landing page for one product", "Not decided yet"] },
        { _key: k("z"), question: "Where do product conditions live now?", options: ["Typed into pages by hand", "In PDFs", "In a system we run", "Not sure"] },
        { _key: k("z"), question: "How many branches?", options: ["None, online only", "Up to 10", "10 to 50", "More than 50"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Building a bank website that AI assistants can read (GEO, AEO)"),
        p("Customers increasingly ask an assistant before they ask a bank: an account with no monthly fee for a small company, a mortgage for a self-employed borrower, a deposit allowing early withdrawal. The assistant answers from text it can read. A bank whose conditions live in table images and PDFs is quoted second-hand through a comparison site, and comparison sites are frequently out of date — so the bank's own terms reach the customer in a version the bank did not write."),
        p(
          "A build that avoids this is unglamorous: conditions as text, structured data matching what is visible, one product name everywhere, content present before any script runs. Bringing an existing site to that state is ",
          link("AI search readiness", "/services/ai-search-readiness"),
          ", and checking what assistants say today is an ",
          link("AI visibility audit", "/services/ai-visibility-audit"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Bank website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a bank website cost?", "From €2,000 with design included, €700–1,400 for a single-product landing page, from €1,000 for a redesign that keeps rankings and documents. The number of products, branches and languages moves the price, and so does the length of your approval cycle."],
          ["Can we buy just the design?", "No, and the reason is practical: a design nobody is committed to building is where bank projects lose money, because the parts that get cut are usually the accessible ones. Design comes with the build and sits inside its price."],
          ["Do you build the online banking part?", "No. The scope is the public site: products, conditions, documents, branches, forms. The banking application behind the login is a different system with a different risk profile, and the build is designed to sit beside it cleanly rather than imitate it."],
          ["We will need you to pass a security review. Is that a problem?", "It is expected. Questionnaires about data flows, third-party scripts, access and release approval are normal for bank work, and I plan weeks for that step rather than discovering it late."],
          ["Our rates change often. How do we avoid stale numbers on the site?", "By storing conditions as structured data with an effective date instead of typing them into pages. An approved figure publishes once and appears everywhere it is used, and the previous value is archived rather than overwritten."],
          ["Can we keep our tariff PDFs?", "Yes, and you should. The build adds a readable page beside each document with the same content as text, so the file stays where it legally belongs and the content is usable on a phone, by a screen reader and by search."],
          ["Do you work with regulated clients?", "Yes. Regulated work means wording under review, mandatory disclosures and publishing with more than one person involved — that is part of the method rather than an obstacle to it."],
          ["Will the site be accessible?", "Yes, and for banking services in the EU that is a legal requirement rather than a preference. It is built in from the start, because retrofitting accessibility after launch costs more and usually looks it."],
          ["Can you redesign without losing our search traffic?", "Yes, and the document links get the same treatment as the pages: every existing address is mapped, every changed one redirected, including the PDFs other sites and your own letters point at."],
          ["Who owns the site?", "You do: the code, the repository, the domain, the hosting account, the content and every access credential. Nothing stays with me as leverage."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Starting a bank website project: what to send me"),
        p("Tell me whether this is a new site or a rebuild, how many products and branches you have, where the conditions live today, which languages you need and how long an approval round usually takes. Send the current website link if there is one. I answer within one working day: what I would build, in which languages, and what it costs."),
      ],
    },
  ],
};
