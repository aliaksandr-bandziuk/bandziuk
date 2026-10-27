// Landing page fixture: Mortgage broker website design (EN), group
// «mortgage-broker-website-design». New page.
// Semantic core: ref/batch-h1.md, group «mortgage broker website» (US):
// mortgage website 320 (metaTitle, several H2) · website for mortgage broker(s)
// 90 (grid 320) and mortgage broker website 90 (grid 320) (intro, H2s, FAQ) ·
// web design for mortgage brokers 90 (intro, excerpt) · mortgage website design
// 40 (compliance H2, metaTitle) · mortgage broker website templates 40 +
// mortgage broker website template 30 + free mortgage broker website templates
// 10 + mortgage website builder 30 + mortgage broker website builder 10 + best
// mortgage website builder 10 (templates H2, FAQ) · mortgage broker website
// design 30 (H1, H2s) · best mortgage broker website 20 + best mortgage broker
// website design 10 (H3 under templates, patterns only, no brokers named) ·
// mortgage broker website design uk / australia 10 each (H3 under compliance) ·
// landing page for mortgage brokers 20 (H3, link to landing page service) ·
// mortgage broker website content 10 (rate block H3: who approves the copy).
// Intent: ref/intent-check-delta.md — «mortgage broker website» vs «mortgage
// broker seo» 0 shared URLs, 1 shared domain (bntouch) → own page. SERP mixed:
// lenders and marketplaces (Own Up, Zillow, Morty, Avana) next to website
// providers and agencies (CyberOptik, BNTouch, Vonk Digital, WebCitz) → the
// buyer-side readers are brokers comparing builders, templates and studios.
// This page = the site build: first screen, compliance as fixed components
// (US NMLS / Equal Housing / state licensing; UK FCA status and repossession
// warning; Australia credit licence and credit guide; Canada provincial
// licences — general, «not legal advice»), rate and payment blocks the CMS will
// not publish without date, APR and assumptions, a short first form then a
// booked call, document collection only through the broker’s secure portal,
// calculators with visible dated assumptions (consultant case), loan officer
// profiles, Google reviews shown as written, lender panel as text, speed,
// WCAG / ADA, templates and builders vs custom, landing pages, AI-readable,
// cost and process.
// NOT on this page: loan program pages, city pages, rates content, calculators
// and reviews as SEO, Regulation Z trigger terms, RESPA, lead generation
// (/mortgage-broker-seo — linked once); realtor sites (/realtor-website-design
// — linked once); paid ads, bought leads (not offered).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search; regulation in general terms only.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const mortgageBrokerWebsiteDesignEn = {
  lang: "en",
  group: "mortgage-broker-website-design",
  slug: "mortgage-broker-website-design",
  title: "Mortgage broker website design",
  heading: "Mortgage Broker Website Design and Development",
  excerpt:
    "Mortgage broker website design and build from one person: licensing details on every page, a four-question first form with call booking, document upload through your secure portal, calculators that show their assumptions and a page for each loan officer, design included.",
  seo: {
    metaTitle: "Mortgage Website Design for Brokers from 700 € | Bandziuk",
    metaDescription:
      "Mortgage broker website design and build: NMLS and licensing on every page, a short first form, a secure document handoff and clear calculators. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design included in the price", "From 700 €", "Compliance details built in"],
  heroPhonePoints: ["How much can I afford?", "Book a call with a loan officer", "Upload documents securely", "Licensed in TX · FL · GA"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Mortgage broker website with licensing details, a short first form, call booking and a link to your secure portal, design and build", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Full mortgage website with loan officer profiles, calculators, a review feed, CRM connection and a second language, design and build", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with mortgage broker website design",
      items: [
        { _key: k("o"), iconName: "shield-check", title: "NMLS, Equal Housing and state licensing on every page", text: "One record in the CMS, updated everywhere" },
        { _key: k("o"), iconName: "file-text", title: "A four-question first form, then a booked call", text: "No Social Security number or income data on the site" },
        { _key: k("o"), iconName: "plug", title: "An “Upload documents” button to your portal", text: "Files go to your secure system, never to email" },
        { _key: k("o"), iconName: "layers", title: "Affordability, payment and refinance calculators", text: "Every assumption and its date on screen" },
        { _key: k("o"), iconName: "users", title: "A page for each loan officer", text: "Photo, NMLS ID, states, languages, booking link" },
        { _key: k("o"), iconName: "sparkles", title: "Details ChatGPT and AI Overviews can read", text: "States, NMLS IDs and languages as page text" },
      ],
      prices: [
        { _key: k("r"), label: "Mortgage broker website", value: "700–1,400 €", note: "design and build" },
        { _key: k("r"), label: "Loan officer profiles, calculators, CRM, second language", value: "from 2,000 €", note: "design and build", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Websites with calculators, private client matters and property buyers that I have designed and built",
      subtitle:
        "A retail analytics consultant’s site carries calculators and templates across 153 pages in English, Polish and Russian, built the way a broker’s affordability and payment tools should be: inputs in sight, results labeled. Giuseppe, a psychotherapist in Milan, needed what a broker needs — a calm design for a service where people share private matters, two languages, structured data and 468 posts moved with 301 redirects; he found me through ChatGPT. The Cyprus property platform I built and still run serves buyers from abroad in five languages, the same people who later need financing. The Landi Room course page hands payment to Stripe Checkout and opens protected video only afterwards, so the sensitive step happens in a secure system, as a borrower’s documents should. My own site shows the technical base: Next.js, Sanity, schema.org and hreflang in three languages.",
      picks: [
        "consultant-website-design-retail-analytics",
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "e-commerce-landing-page-with-secured-video-access",
        "develop-and-optimize-a-personal-website-with-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your mortgage broker website",
      subtitle: "Within one business day you get a proposed page list for your mortgage site and a fixed price. Please leave out any borrower information.",
      contextLabel: "Company name, NMLS ID or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "The loan officer page my lender provides", "A template from a mortgage website builder", "An older WordPress or custom site"] },
        { _key: k("z"), question: "What should the new site do first?", options: ["Turn visits into booked calls", "Look credible to realtor partners", "Stop documents arriving by email", "Serve borrowers in a second language"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Mortgage broker website design is the planning, design and build of a site that a borrower trusts with a first conversation about a loan: who you are, where you are licensed, what you can arrange and how to start. I do web design for mortgage brokers myself — independent brokers, small brokerages and loan officers allowed to run their own website — so layout, code and compliance details come from one person at one fixed price."),

        h2("Mortgage broker website design: what the first screen tells a borrower"),
        p("Borrowers reach a mortgage broker website from a realtor’s text, a search or a friend’s tip, usually on a phone, and a realtor deciding whether to refer you checks the same screen. Before the first scroll it answers four questions:"),
        li("who you are — a face, a name and the company, not a photo of keys on a table"),
        li("where you can lend — the states you are licensed in, written out"),
        li("who you help most — first-time buyers, self-employed borrowers, veterans or investors, in one plain line"),
        li("how to start — “Book a call” and a short form, plus tap-to-call for people who would rather talk"),
        p("Rate tickers, stock photos of families on porches and slogan sliders push those answers out of sight."),

        h2("Compliance built into mortgage website design: NMLS ID, Equal Housing and state licensing"),
        p("Every page of a mortgage broker website is advertising, so licensing details belong to the design from the first sketch. I build them as fixed components that the site fills in by itself:"),
        li("a footer on every page with the company name, company NMLS ID, office address and the Equal Housing Opportunity logo or statement"),
        li("a licensing page listing each state with its license type and number and the state disclosures your licenses call for"),
        li("each loan officer’s individual NMLS ID next to their name wherever they appear, including the form confirmation"),
        p("When you add a state or a loan officer leaves, you change one record in the CMS and every page follows. This describes what US brokers commonly show, not legal advice: your compliance contact, sponsoring company or state regulator decides the exact wording."),
        h3("Mortgage broker website design in the UK, Canada and Australia"),
        p("Outside the US the same fixed places hold other details. In the UK: the firm’s FCA status and reference number, the repossession risk warning that mortgage promotions usually carry and how you are paid. In Australia: the Australian Credit Licence or credit representative number and a link to your credit guide. In Canada: the provincial license numbers of the brokerage and of each agent."),
        h3("Rate disclaimers and dated payment examples in the CMS"),
        p("Mortgage broker website content with numbers in it gets one extra rule. If you show a rate or a sample payment, the CMS asks for the date, the APR and the assumptions and will not publish the block without them. The date prints next to the figure, so last month’s example cannot pass for today’s offer, and your compliance reviewer sees every rate block in one list before launch."),

        h2("A short first form on a mortgage broker website, then a booked call"),
        p("An application-length form on the first visit loses people who are only starting to compare brokers. The site asks four or five things — purchase or refinance, rough price range, state, timeline, contact — and the confirmation screen offers a slot from your calendar. The full application happens later, in your own system."),
        li("no Social Security number, date of birth, income figures or account numbers on the website form"),
        li("consent wording for calls and texts supplied by your compliance contact, with a box left unticked"),
        li("each request tagged with the page and campaign it came from and sent to your CRM, email or both"),
        li("spam protection that does not make borrowers solve puzzles"),

        h2("Secure document upload for mortgage borrowers: your portal, not email attachments"),
        p("Pay stubs, W-2s, tax returns and bank statements should never sit in an inbox or travel as attachments. The website has no upload widget of its own; it sends borrowers to the secure portal of your loan origination system, point-of-sale platform or CRM:"),
        li("an “Upload documents” button in the header that opens your portal login, so returning borrowers find it in one tap"),
        li("a page that lists what borrowers are asked for at each stage, so files arrive complete"),
        li("a short note on how their information is protected, consistent with your privacy notice"),
        p("US financial companies work under federal rules for safeguarding customer information, UK and EU firms under GDPR; one secured system for documents makes both easier to follow."),

        h2("Mortgage calculators on a broker website that show their assumptions"),
        p("Borrowers use calculators for three real questions. I write them into the site’s own code rather than embedding a third-party widget, so they load fast, match the design and pass their result to your form."),
        li("affordability: income, monthly debts and down payment in, a price range out, with the debt-to-income limits used shown beside the result"),
        li("payment: principal and interest plus property tax, homeowners insurance, mortgage insurance and HOA dues, each one editable"),
        li("refinance: current balance and rate against a new loan, with closing costs and the month the switch breaks even"),
        p("Every value the borrower does not type — sample rate, tax rate, insurance estimate — is visible, editable and dated. The result is labeled as an estimate, and one button carries the scenario into the short form, so you see the numbers before the call."),

        h2("Loan officer profile pages and Google reviews on a mortgage broker website"),
        p("Borrowers and realtors choose a person, not a logo. Each loan officer gets a page from one template:"),
        li("a recent photo, a short first-person introduction and the languages they speak"),
        li("their individual NMLS ID and the states where they are licensed"),
        li("their own booking link and, if your system issues one, their personal application link"),
        li("the kinds of borrowers they work with most, in a sentence or two"),
        p("Reviews come from Google and other platforms with source, date and star rating as given, newest first rather than hand-picked five-star quotes, and never trimmed to change the meaning. US rules prohibit fake or misleading reviews and testimonials; showing them as written, with their source, stays clear of that."),

        h2("Lender panel and “who we work with” on a mortgage broker website"),
        p("A broker’s advantage over a bank is access to many lenders, and the site says so in words: how many wholesale lenders you work with, which kinds — banks, credit unions, non-QM lenders — and what that means for a borrower turned down elsewhere. A wall of logos says less and can cause trouble, since some wholesale lenders restrict use of their names and logos in consumer advertising; check your agreements first. A line on how you are paid, by the lender or by the borrower, answers a question many borrowers never ask aloud."),

        h2("Speed, mobile layout and accessibility on a mortgage website"),
        p("Most first visits happen on a phone, often from a link in a text message. The build aims at Google’s Core Web Vitals thresholds: main content visible within 2.5 seconds, an instant response to taps and no layout jumps while fonts or reviews load. Calculators and chat load only when someone uses them."),
        p("Accessibility matters twice: borrowers include older homeowners and screen reader users, and ADA accessibility claims against websites are common in the US. The site follows WCAG 2.2 AA — labeled fields, enough contrast, full keyboard use, announced error messages and calculators that work without a mouse."),

        h2("Mortgage broker website templates and builders or a custom mortgage website"),
        p("Many loan officers start with their lender’s page or a mortgage website builder with ready templates and a rate widget. That is sensible when you need a compliant page this week and most business comes from realtors and past clients who already know you."),
        p(
          "A custom site pays off when the template looks like every other broker in your market, when calculators and forms should feed your CRM, when the domain and content must stay yours after a change of lender or software, or when you serve Spanish-speaking borrowers and need a real second version — see ",
          link("multilingual website development", "/services/multilingual-website-development"),
          ". Free mortgage broker website templates for WordPress sit in between: workable, but the licensing components, rate rules and portal handoff usually have to be added.",
        ),
        h3("What the best mortgage broker websites have in common"),
        li("a person and a licensed area on the first screen"),
        li("a first step that takes under a minute"),
        li("disclosures that are complete without crowding the page"),
        li("calculators that explain their numbers"),
        h3("A landing page for mortgage brokers running ads"),
        p(
          "A campaign aimed at one audience — first-time buyers in one metro, a refinance offer — works better on its own page with one form and the same compliance footer than on the home page. I build these on the same system; see ",
          link("landing page development", "/services/landing-page-development"),
          ".",
        ),

        h2("A mortgage broker website that ChatGPT and Google AI Overviews can read"),
        p("Borrowers now type questions into ChatGPT, Perplexity or Google’s AI Overviews such as “a mortgage broker in Phoenix who works with self-employed buyers” or “a loan officer in Houston who speaks Spanish”. An assistant can only name someone whose details it can read, so the build keeps them as page text — names, NMLS IDs, licensed states, languages, borrower types, contacts — consistent with your Google Business Profile and NMLS record. FinancialService and Person markup describe the brokerage and each loan officer; disclosures are HTML, not images or PDFs."),
        p(
          "Whether assistants then recommend you depends on further work, which I describe on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much mortgage broker website design costs"),
        p("Design is included in both prices:"),
        li("A mortgage broker website — home page, about, loan officer page, licensing page, short form with call booking and a link to your secure portal: 700–1,400 €."),
        li("A full mortgage website with several loan officer profiles, calculators, a review feed, lender panel text, CRM connection, a second language and structured data: from 2,000 €."),
        p("Hosting and the domain are registered in your name; there is no monthly fee to me. The project runs in four steps:"),
        ol("Brief: states, NMLS IDs, loan officers, CRM, portal and your lender’s or sponsor’s website rules."),
        ol("A proposed page list and a fixed price."),
        ol("Phone-first design of the home page, form and a loan officer page, sent to your compliance reviewer with each disclosure marked."),
        ol("Build, launch with analytics and a handover call."),
        p(
          "All ranges are on the ",
          link("pricing", "/pricing"),
          " page and my general approach on the ",
          link("website development", "/services/website-development"),
          " page. Getting the finished pages found in search is separate work, covered on the ",
          link("mortgage broker SEO", "/mortgage-broker-seo"),
          " page, and the realtors you partner with have their own: ",
          link("realtor website design", "/realtor-website-design"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Mortgage broker website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a mortgage broker website cost?", "Design and build together cost 700–1,400 € for a focused site with licensing details, a short form and a link to your portal, and from 2,000 € for a full site with loan officer profiles, calculators, a CRM connection and a second language. Hosting and the domain are paid to the providers. The first call of 15–30 minutes is free, and after it I give a fixed price."],
          ["Is a mortgage website builder or template good enough?", "For a new loan officer whose lender already handles disclosures, often yes. A custom site makes sense when you need your own calculators, a CRM connection, a second language or a site that stays yours after a change of lender. Moving later is possible: I carry the content over and redirect the old addresses."],
          ["Can borrowers upload documents through the website?", "They start there, but the files go to your secure portal, not to the website or your inbox. The site has an upload button that opens the portal of your loan origination system or CRM, plus a page that explains what to prepare."],
          ["Does my NMLS ID need to be on every page?", "A footer with the company NMLS ID on every page is common practice, and many state rules and lender policies expect it in advertising. Requirements differ by state and by sponsor, so your compliance contact confirms placement and wording; this is general information, not legal advice."],
          ["Can the calculators show today’s mortgage rates?", "They can use a rate you set in the CMS, with its date shown, or a feed from a pricing engine if your plan includes one. Without a feed, a dated sample rate the borrower can change is safer than a figure that looks live but is not."],
          ["How do you work with a US mortgage broker from Poland?", "Everything happens online and in English. Warsaw is six hours ahead of New York, so a call at 3 or 4 pm my time is 9 or 10 am on the East Coast; between calls, designs are reviewed in a shared file. Invoices are in EUR or another currency by agreement."],
          ["Will my mortgage website appear in ChatGPT answers?", "Nobody can promise that. The build removes the usual obstacles — details locked in images, PDFs or scripts — and keeps your licensing, states, languages and loan officers on the page as text with structured data. Ongoing work on AI answers is part of my SEO and GEO service."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order mortgage broker website design: what to send me"),
        p(
          "Send your company name and NMLS ID, the states you are licensed in, a link to your current site or lender page, how many loan officers need a profile, the CRM and borrower portal you use and any website rules from your lender, sponsor or compliance team. Two or three broker sites you like help as well. Please leave out borrower information. I will reply with a proposed page list and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
