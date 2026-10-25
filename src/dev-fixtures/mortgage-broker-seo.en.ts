// Landing page fixture: Mortgage Broker SEO for Brokers and Loan Officers (EN),
// group «mortgage-broker-seo». New page.
// Semantic core: ref/real-estate-finance.md / .csv (US): mortgage broker seo 110
// (H1, metaDescription, several H2) · seo for mortgage broker 90 (metaTitle,
// H2) · mortgage seo (one H2 heading only, see intent) · loan officer website 70
// (website H2 + FAQ) · best mortgage lead generation companies 70 (lead
// generation H2) · mortgage broker website design 30, mortgage websites for
// brokers 30, mortgage website builder 30, mortgage broker website templates 40
// (one website H2, no more) · best mortgage broker websites 10.
// PAA used: Which one is better, SEO or Google Ads? (FAQ) · Is SEO dead now with
// AI? (FAQ) · How much does real estate SEO cost? (as cost H2 + FAQ for
// mortgage).
// Intent: ref/intent-check-real-estate-finance.md — «mortgage broker seo» vs
// «mortgage broker website design» 0 shared URLs, 2 shared domains (Roar
// Solutions, Banking Bridge) → design is a different intent; it gets one H2
// here and no separate page yet. «mortgage broker seo» vs «mortgage seo» 0
// shared URLs, 2 shared domains (ijungo, linkedin) → «mortgage seo» SERP is
// wider (lenders, UK broker media, Reddit), named in one heading only. SERP for
// «mortgage broker seo»: Jungo, National Mortgage Professional, Roar Solutions,
// LeadPops, Banking Bridge — vendors and agencies → buyers’ demand.
// Angles (US first, UK/Canada/Australia neutral): NMLS IDs on the site, Equal
// Housing Opportunity statement, Regulation Z trigger terms (general, «check
// with compliance»), rate pages that stay accurate, loan program pages (FHA, VA,
// USDA, first-time buyer, self-employed, investors, refinance), local pages and
// Google Business Profile, calculators and guides, realtor partnerships and
// referral rules (RESPA, general), bought leads vs own leads, YMYL, AI answers,
// one H2 on the website and the application path.
// NOT on this page: realtor SEO itself (/seo-for-realtors, linked once from
// the partnerships H2); financial planning content (/financial-advisor-seo);
// Google Business Profile in depth (/services/local-seo-services, one link);
// building the site in detail (/services/website-development, one link); paid
// ads, social media, bought lead lists (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; regulation in general terms only.
import { p, h2, h3, li, link, k } from "./pt";

export const mortgageBrokerSeoEn = {
  lang: "en",
  group: "mortgage-broker-seo",
  slug: "mortgage-broker-seo",
  title: "Mortgage broker SEO for brokers and loan officers",
  heading: "Mortgage Broker SEO for Brokers and Loan Officers",
  excerpt:
    "I provide mortgage broker SEO for independent brokers and loan officers: a page for each loan program and local market, NMLS details and rate wording your compliance team can sign off, a fast path to the application and visibility in AI answers, reported in applications and funded loans.",
  seo: {
    metaTitle: "SEO for Mortgage Brokers and Loan Officers | Bandziuk",
    metaDescription:
      "Mortgage broker SEO by one consultant: loan program and local pages, NMLS and rate-ad compliance, AI answers, a fast path to apply. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Loan programs + AI answers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["FHA loan broker near me", "NMLS ID in the footer", "Start pre-approval", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Mortgage broker SEO audit: website, loan program pages, local results and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a mortgage broker: loan program and city pages, compliance details, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a mortgage broker or loan officer", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for mortgage brokers",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for each loan program", text: "FHA, VA, first-time buyer, self-employed, refinance" },
        { _key: k("o"), iconName: "map-pin", title: "City and county pages with a real reason to exist", text: "Local limits, programs, Google Business Profile" },
        { _key: k("o"), iconName: "shield-check", title: "Wording built for compliance review", text: "NMLS IDs, Equal Housing, trigger terms flagged" },
        { _key: k("o"), iconName: "gauge", title: "A fast path from search to application", text: "Mobile speed, short forms, link to your portal" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "Licensing, states and programs assistants can quote" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in applications and funded loans", text: "From your LOS or CRM, not rankings alone" },
      ],
      prices: [
        { _key: k("r"), label: "Mortgage broker SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a mortgage broker", value: "from 800 € / month", note: "pages, compliance details, AI visibility, reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: real estate and service websites I have built and optimized",
      subtitle:
        "Cyprus VIP Estates is a luxury real estate platform I designed and built from scratch and still optimize every month: a filterable property catalog with a map, CRM integration, five languages and a full SEO setup that brings in buyer leads — the same property buyers a mortgage broker works with. Next to it are a Warsaw renovation and property-investment company, a 3D laser scanning and BIM company whose organic traffic grew 29× after the rebuild, an education agency site covering ten countries and a Warsaw auto repair shop. Each one gives every service its own page and a short route to an enquiry, which is how a broker’s loan programs should work too.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your mortgage business",
      subtitle: "I reply within one business day with the loan programs and markets I would work on first and a fixed price. Please do not include any borrower information.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How do you originate loans?", options: ["Independent mortgage broker", "Loan officer at a lender or bank", "Broker with a small team", "Several branches or states"] },
        { _key: k("z"), question: "Where do most borrowers come from today?", options: ["Realtor referrals", "Past clients and their friends", "Bought leads", "Our website", "Not sure"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Mortgage broker SEO is the work that brings home buyers and homeowners to your own website when they search for a loan, a program or a broker in their area, and turns those visits into applications and funded loans. I do it myself, as a single SEO consultant who also builds websites, for independent brokers, small brokerages and loan officers who want borrowers who found them, not leads shared with five other lenders."),

        h2("What SEO for mortgage brokers covers: loan programs, local markets, compliance and AI answers"),
        p("A borrower rarely types “mortgage broker”. They type their situation: “FHA loan with 580 credit score”, “VA loan for a condo”, “mortgage for self-employed with bank statements”, “first-time home buyer programs in Ohio”. Mortgage broker SEO puts a page on your site in front of each of those searches and makes it easy to start a conversation. The work covers:"),
        li("a page for every loan program you offer and every borrower type you want more of"),
        li("local pages for the cities and counties where you are licensed and active"),
        li("licensing details and rate wording that hold up in a compliance review"),
        li("a site that loads fast on a phone and leads to the application without detours"),
        li("visibility in ChatGPT, Perplexity and Google AI Overviews"),

        h2("Mortgage broker SEO and YMYL: NMLS ID, Equal Housing Opportunity and licensing on the website"),
        p("Google treats mortgage content as “Your Money or Your Life” (YMYL): a wrong answer can cost a family real money, so pages need visible proof of who stands behind them. For a broker that proof is largely the same information regulators already expect:"),
        li("the company NMLS ID and each loan officer’s NMLS ID, with a pointer to NMLS Consumer Access"),
        li("the states where you are licensed, written as text, not only in a footer image"),
        li("the Equal Housing Opportunity statement or logo (lenders often use “Equal Housing Lender”)"),
        li("a named author with an NMLS ID on every guide, plus a “last reviewed” date"),
        p("Federal and state rules generally treat a website as advertising, and some states add their own disclosure wording. This is a general description, not legal advice: your compliance team, sponsoring company or state regulator has the final word."),

        h2("Rate pages and mortgage advertising rules: trigger terms and rates that stay accurate"),
        p("“Today’s mortgage rates” pages attract searches, and they are also where most advertising problems start. Under Regulation Z, some figures in an ad — a monthly payment, a down payment, the number of payments — trigger extra disclosures such as the APR and the repayment terms. When I write or edit a page, I flag every trigger term and every rate claim so your compliance reviewer can approve, change or remove it."),
        p("A rate shown on a page must be true on the day someone reads it. If you publish rates, the page carries the date, the assumptions and the APR, and it updates from a source you control. A page that explains what moves rates and invites a personal quote often ranks better than a table that goes stale by Tuesday. In the UK, Canada and Australia, the FCA, provincial regulators and ASIC set their own rules; the approach is the same."),

        h2("Loan program pages for mortgage brokers: FHA, VA, first-time buyer, self-employed and refinance"),
        p("One “Loan Options” page listing eight products cannot rank for any of them. Each program you want to grow gets its own page: who it suits, typical requirements in plain words, documents to prepare, how long it usually takes and a clear next step."),
        h3("FHA, VA and USDA loan pages: government programs with their own vocabulary"),
        p("Government-backed loans attract precise searches: “VA loan funding fee”, “FHA loan limits” in a county, “USDA eligible areas” near a town. A page that answers these with your county’s details and your own experience with the program beats a generic national article."),
        h3("First-time home buyer pages: down payment assistance and local programs"),
        p("First-time buyers search for help as much as for a loan. State and city down payment assistance programs, homebuyer education courses and closing-cost grants are strong topics for local pages, as long as each program’s current status is checked before the page goes live."),
        h3("Self-employed, investor and non-QM loan pages"),
        p("Bank statement loans, DSCR loans for rental investors and other non-QM products are where a broker’s access to many lenders matters most. These borrowers have often been turned down by a bank, so the pages bring fewer visits but better applications."),
        h3("Refinance and home equity pages"),
        p("Refinance searches rise and fall with rates. Pages on cash-out refinance, rate-and-term refinance and HELOCs written now are already indexed and trusted when the next wave of demand comes."),

        h2("Local SEO for mortgage brokers: city pages, Google Business Profile and reviews"),
        p("“Mortgage broker near me” and “mortgage lender in [city]” searches show a map with three businesses. A Google Business Profile with the right category, your real office address and hours, and reviews that mention the loan type a client closed, is often the quickest source of calls. Brokers who meet clients at their homes rather than in an office can set a service area and hide the address, within Google’s rules."),
        p(
          "City and county pages are worth building where you have a reason: you are licensed there, you close loans there, you know the local programs and the realtors. Fifty identical pages with only the city name swapped are a pattern Google discounts. The map side in depth — categories, reviews, listings — is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Mortgage calculators and guides: content that wins searches before a borrower calls"),
        p("Borrowers research for weeks: “how much house can I afford on $90k”, “closing costs in Texas”, “how long does pre-approval last”. Calculators and short guides answer those questions on your site instead of on a national portal. A calculator page needs clear assumptions and a note that results are estimates. Each guide ends with a link to the matching loan program page."),

        h2("Realtor partnerships in mortgage broker SEO: co-marketing pages and referral rules"),
        p("Much of a broker’s business comes from real estate agents, and search can strengthen those relationships. Neighborhood pages, open-house financing pages and joint guides with partner agents give both sides something to link to, and agents look up your name before referring a client."),
        p(
          "Co-marketing between brokers and agents falls under federal rules on referral payments (RESPA): each side pays its fair share, and nothing of value is exchanged for referrals. Your compliance team sets the limits. Agents who want their own search work will find it on the ",
          link("SEO for realtors", "/seo-for-realtors"),
          " page.",
        ),

        h2("Mortgage lead generation from your own site versus bought leads, measured in funded loans"),
        p("Mortgage lead generation companies sell inquiries that are often sent to more than one lender at once, so the fastest caller wins. A borrower who found your program page and filled in your form chose you, and organic leads do not disappear when you stop paying. I report both sources side by side, by loan program and city:"),
        li("calls and form submissions from search, tracked in GA4"),
        li("started and completed applications, if your portal can pass the source back"),
        li("pre-approvals and funded loans, if your LOS or CRM records where the borrower came from"),
        p("Reports carry counts only, never borrower data. New program pages usually need three to six months to bring steady applications; in big metros, longer."),

        h2("Mortgage broker website design: the path from search to application"),
        p("Most loan officer websites provided by a lender are templates shared by hundreds of loan officers with the same text, so Google has little reason to rank any one of them, and the domain belongs to the lender. A broker’s own site, built where your company or sponsor allows it, can be fast and specific. What matters for the application path:"),
        li("the main content of each page visible within 2.5 seconds on a phone"),
        li("a short first form — loan goal, price range, state, contact — before any sensitive data"),
        li("a clear handoff to your secure application portal for documents and full details"),
        li("click-to-call and scheduling links visible on every page"),
        li("accessible forms and text a screen reader can follow"),
        p(
          "If the site needs a rebuild, a focused broker site costs 700–1,400 € and a full site with program pages and calculators from 2,000 €, design included. The build is described on the ",
          link("website development", "/services/website-development"),
          " page.",
        ),

        h2("Mortgage SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Borrowers now ask ChatGPT, Perplexity or Google’s AI Overviews whether to use a broker or a bank, who does VA loans in their city, or how bank statement loans work. Because mortgages are YMYL, assistants prefer sources that show licensing and expertise. Work on those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For a mortgage broker it means:"),
        li("states, NMLS IDs, loan programs and languages spoken written as plain sentences"),
        li("direct answers to borrower questions on program pages, with an author and a date"),
        li("structured data that ties the company, its loan officers and its offices together"),
        li("the same details on your site, Google Business Profile, Zillow and other lender profiles"),
        p(
          "Before the work starts and again after it, I ask the assistants about your market and record who they name. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Mortgage broker SEO consultant or a mortgage marketing company: who does the work"),
        p("Mortgage marketing companies often bundle a website platform, a CRM, ads and lead lists on a long contract. I work alone: I read your search data, write the pages with your input, change the site on WordPress, Next.js or another system, and explain the report. I do not run ads or sell leads. Whoever you choose, ask who checks compliance wording and who owns the site when the contract ends."),

        h2("How much SEO for a mortgage broker costs"),
        li("Mortgage broker SEO audit — the site, loan program coverage, local results, competitors and AI answers: from 250 €, one-off."),
        li("One-off work — loan program and city pages, compliance details, structured data, tracking: 250–700 €."),
        li("Monthly SEO for a mortgage broker — new pages, fixes, AI visibility and reports in applications: from 800 € per month; in big US metros and other very competitive markets from 1,300 € per month."),
        p(
          "A solo loan officer in a smaller market often gets most of the effect from the audit and a few strong program pages. My general approach to ongoing work is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page, the audit on the ",
          link("SEO audit", "/services/seo-audit"),
          " page, and all prices on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Mortgage broker SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO cost for a mortgage broker?", "An audit costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in big US metros and other very competitive markets. After a short description of your business, programs and states I give a fixed price."],
          ["Which one is better for a mortgage broker, SEO or Google Ads?", "Ads bring calls from the first day, but mortgage clicks are expensive and stop when the budget does. SEO takes months and keeps working afterwards. Many brokers run a small campaign while their pages grow. I do the SEO part and do not run ads."],
          ["Does mortgage SEO content need compliance review?", "Yes. Rate claims, payment examples and program descriptions can trigger disclosure rules. I flag those parts on every page, and your compliance team or sponsoring company approves the final wording before it is published."],
          ["Can I do SEO on the loan officer website my lender gives me?", "Only a little. Those sites share templates and text with many other loan officers, and the domain belongs to the lender. Many lenders allow a personal site under their rules; check yours. A separate site you control is easier to rank and keep."],
          ["Is SEO dead now with AI?", "No. ChatGPT and AI Overviews build their answers from pages they can read and trust. A broker whose licensing, programs and states are clearly written on the site has a better chance of being named; one with a thin template site rarely is."],
          ["How long does SEO take for a mortgage broker?", "Technical fixes and Google Business Profile changes can show within weeks. New loan program pages usually need three to six months to bring steady applications, longer in big metros."],
          ["Do you need access to borrower data?", "No. I work with search data, analytics and counts from your CRM or LOS. Names, credit details and documents stay in your systems, and reports never include them."],
          ["Can a consultant in Poland do SEO for a US mortgage broker?", "Yes. All the work is remote and in English. My afternoon and evening in Central European Time overlap with the US working day, so calls fit East Coast and Central mornings. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your mortgage business: what to send me"),
        p(
          "Send your website, your company NMLS ID, the states you are licensed in, the loan programs you want more applications for, where borrowers come from today and any rules your lender or sponsor sets for websites. Please leave out borrower information. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
