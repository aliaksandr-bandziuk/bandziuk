// Landing page fixture: Financial advisor website design (EN), group
// «financial-advisor-website-design». New page.
// Semantic core: ref/real-estate-finance.md / .csv, financial advisors group:
// financial advisor website design 90 (H1, H2s, cost H2) · best financial
// advisor websites 70 + best financial advisor website design 10 + financial
// advisor website examples 20 (H2 on patterns, no real firms named) ·
// financial advisor website providers 10 + best website builder for financial
// advisors 10 (H2 providers vs custom, FAQ) · «financial advisor website»
// (not measured; H2 on what the site contains).
// Intent: ref/intent-check-real-estate-finance.md — «financial advisor seo» vs
// «financial advisor website design» 0 shared URLs, 1 shared domain → separate
// pages. Design SERP: reddit, advisorwebsites, usafinancial, sitebuilderreport,
// wealthmanagement, liontreegroup, pinterest, advisordesigns → vendors and
// galleries; «financial advisor website» SERP (schwab, twentyoverten blog,
// advisorwebsites, kiplinger) is half consumers, half vendors → used only as a
// heading about page contents.
// This page = what the site contains and how it is built: trust first screen,
// «who we serve» pages by niche (physicians, business owners, retirees,
// expats), fee and fiduciary pages, team and credential pages (CFP®, CFA,
// Form CRS / ADV, BrokerCheck in general terms), disclosure slots for the SEC
// Marketing Rule and FINRA communications rules (general, «your compliance
// team decides»), compliance review workflow and archiving, scheduling and
// client portal links, ADA / WCAG, providers vs custom, patterns of the best
// advisor sites, AI-readable build (YMYL).
// NOT on this page: rankings, keyword research, local SEO and Google Business
// Profile, content plans for traffic (/financial-advisor-seo — linked once);
// insurance agents (/insurance-agency-website-design); mortgage
// (/mortgage-broker-seo).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search; design is included in the price.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const financialAdvisorWebsiteDesignEn = {
  lang: "en",
  group: "financial-advisor-website-design",
  slug: "financial-advisor-website-design",
  title: "Financial advisor website design",
  heading: "Financial Advisor Website Design",
  excerpt:
    "I design financial advisor websites and build them myself: a first screen that says who you serve and how you are paid, credential and team pages, disclosure slots your compliance team can approve, and scheduling and client login one tap away.",
  seo: {
    metaTitle: "Website Design for Financial Advisors and RIAs | Bandziuk",
    metaDescription:
      "Financial advisor website design with the build included: who-we-serve pages, fee and credential pages, compliance-ready disclosures, scheduling. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Built for compliance review"],
  heroPhonePoints: ["Who we serve", "How we are paid", "Meet your advisor", "Book an intro call"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple financial advisor website, design and build", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Financial advisor website with who-we-serve pages, fee and credential pages, disclosure slots for compliance review, scheduling and client login links, design and build", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with financial advisor website design",
      items: [
        { _key: k("o"), iconName: "layers", title: "“Who we serve” pages for each niche", text: "Physicians, business owners, retirees, expats" },
        { _key: k("o"), iconName: "file-text", title: "A plain-language fee page", text: "How you are paid, minimums, what a fiduciary means here" },
        { _key: k("o"), iconName: "image", title: "Advisor photos and credentials", text: "CFP®, CFA and licenses as text beside each name" },
        { _key: k("o"), iconName: "shield-check", title: "Disclosure slots and a review link", text: "Your compliance team approves before anything goes live" },
        { _key: k("o"), iconName: "plug", title: "Scheduling and client login", text: "Intro-call booking and portal links in the header" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Names, credentials and services as page text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple financial advisor website", value: "700–1,400 €", note: "design and build" },
        { _key: k("r"), label: "Who-we-serve, fee and team pages, disclosures, scheduling", value: "from 2,000 €", note: "design and build", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Website design portfolio: sites for high-value decisions",
      subtitle:
        "Cyprus VIP Estates is a luxury real estate platform I designed and built from scratch for buyers who invest large sums abroad: several languages, a CRM connection and a site that brings leads, with SEO I still run every month. Next to it are a Warsaw renovation and property-investment company with a premium design, a multilingual education agency covering ten countries, a 3D laser scanning and BIM company rebuilt with its design kept, and a tyre-storage landing page the owner edits himself. What an advisory firm shares with them: clients compare carefully before they trust anyone with money.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your financial advisor website",
      subtitle: "I reply within one business day with a plan for the home, who-we-serve, fee and team pages and a fixed price.",
      contextLabel: "Firm name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How is the practice set up?", options: ["Independent RIA", "Hybrid RIA", "Affiliated with a broker-dealer", "Fee-only planner, solo", "Other"] },
        { _key: k("z"), question: "What should the new site fix first?", options: ["It looks like every advisor site", "Prospects rarely book a call", "Compliance edits take weeks", "New firm, no site yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design financial advisor websites and build them myself, so the structure, the design and the build come from one person at one price. A prospect who finds an advisory firm is about to hand over retirement savings, the proceeds of a business sale or a family’s plan for the next twenty years. Before booking a call they check three things: whether you work with people like them, how you are paid and whether the person behind the site is real and qualified. The design is built around those three checks."),

        h2("Financial advisor website design: what the first screen has to say"),
        p("The home page of most advisory firms opens with a sailboat, a couple walking on a beach or a compass and a slogan about “your financial future”. A visitor learns nothing from it. The first screen I design answers these questions before any scrolling:"),
        li("who you serve — “Financial planning for physicians in Ohio” or “Retirement income for federal employees”, not “Helping you reach your goals”"),
        li("how you work — fee-only, fiduciary, flat fee or a percentage of assets, in one line"),
        li("who the advisor is — a real photo and a name with credentials"),
        li("what to do next — a button that books a short intro call, with the phone number beside it"),
        p("The client login sits in the top corner, where existing clients look for it, so it never competes with the button meant for prospects."),

        h2("What a financial advisor website should contain"),
        p("A site that turns visitors into intro calls needs a small set of page types, each built as its own template:"),
        li("“who we serve” pages, one for each kind of client you focus on"),
        li("services and process: what planning, investment management and ongoing reviews include, step by step"),
        li("fees: how you are paid, account minimums and what the first meeting costs"),
        li("team pages with credentials, licenses and a short personal story"),
        li("articles or market notes with the author and the date"),
        li("disclosures: the firm’s regulatory status, links to Form CRS and the ADV brochure where your firm uses them, a BrokerCheck or adviser search link, and a privacy notice"),
        p("Nothing on this list needs to be long. It needs to be easy to find, and each piece has a fixed place in the layout so the next update does not break the design."),

        h2("“Who we serve” pages: website design for advisor niches"),
        p("Advisors who name a niche tend to get prospects who already feel understood. Each niche page follows the same pattern — the client’s situation in their own words, the questions you solve, a typical engagement and a booking button — but the content and the photos change."),
        h3("Physicians and dentists"),
        p("Student debt, late starts on saving, practice ownership and disability coverage. Short blocks, because these readers check the site between appointments on a phone."),
        h3("Business owners"),
        p("Retirement plans for staff, succession and the sale of the company. A layout that links to case-style process descriptions works better than emotional imagery."),
        h3("Retirees and pre-retirees"),
        p("Income planning, Social Security timing and required distributions. Larger type, high contrast and a phone number that stays visible."),
        h3("Expats and cross-border families"),
        p(
          "Accounts in two countries, two tax systems and often a second language. A language switch on the first screen and pages written by a person, not a widget; the technical side is on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page.",
        ),

        h2("Fee transparency and fiduciary language on an advisor website"),
        p("Fees are the question prospects are most hesitant to ask on a first call, so the site answers it first. A fee page I design has a short explanation of how you are paid, a simple table — flat planning fee, ongoing advisory fee, minimums — and a plain sentence on what is not included. If you charge a percentage of assets, the table shows how it is calculated rather than one headline number."),
        p("“Fiduciary” and “fee-only” are strong words when they are true for every service you offer and a problem when they are not. The design gives them a place on the first screen and the fee page; which words you use, and with what qualification, is your compliance team’s decision."),

        h2("Team and credential pages: CFP®, CFA and licenses prospects can verify"),
        p("People choose an advisor more than a firm, and the team page is where they do it. Each profile follows the order of the visitor’s questions:"),
        ol("A portrait in the same light and framing as the rest of the team."),
        ol("The name, role and designations — CFP®, CFA, CPA, EA — written as text."),
        ol("Who this advisor works with and why, in two or three sentences."),
        ol("Licenses and registrations, with a link to the public adviser or broker search where it applies."),
        ol("A direct button to book a call with this advisor."),
        p("Designations follow the usage rules of the bodies that grant them; CFP Board, for example, publishes guidelines for the CFP® marks. Keeping credentials as page text rather than badges in an image also lets visitors and search engines read them."),

        h2("Designing for the SEC Marketing Rule and FINRA communications rules"),
        p("In the US an adviser’s website is advertising. The SEC Marketing Rule allows testimonials, endorsements and performance figures under conditions — disclosures next to a testimonial, net-of-fee figures and set time periods for performance among them — and broker-dealer communications fall under FINRA rules. Rules in the UK, Canada and Australia differ again. The design does not decide what you publish; it makes room for whatever your compliance team approves:"),
        li("a testimonial card with a disclosure field attached to it, not a footnote at the bottom of the page"),
        li("a review section that can be switched off without leaving a hole in the layout"),
        li("a fixed disclosure area in the footer and on every article"),
        li("no performance charts unless your compliance team asks for them and supplies the figures"),
        p("I am a designer and developer, not a compliance officer; check every rule with your compliance team or broker-dealer."),

        h2("A compliance review workflow built into the advisor website"),
        p("At many firms, changing one sentence on the website takes weeks because nobody knows where the approved version is. The build fixes the process, not only the pages:"),
        li("a private staging link where your compliance team reviews every change before it goes live"),
        li("roles in the editor, so advisors can draft but only an approver can publish"),
        li("a change history for each page, with the date and the person"),
        li("pages that your archiving service can capture, because firms usually have to keep copies of what they published"),
        p("Advisors affiliated with a broker-dealer often need its approval for every change, and some broker-dealers accept only sites from approved vendors. Check that before we start."),

        h2("Scheduling links, client portal logins and ADA accessibility"),
        p("The booking button opens the scheduling tool you already use, such as Calendly, with a few questions about the prospect’s situation. The form never asks for account numbers, Social Security numbers or statements; sensitive documents belong in the secure portal once someone becomes a client. The “Client login” menu links to the custodian and planning portals your clients actually use, each labeled by name."),
        p("Many advisory clients are older, and in the US accessibility claims under the ADA reach financial firms too. The site is built against WCAG 2.1 level AA: readable type sizes, enough contrast, labeled form fields, keyboard navigation and captions for any video."),

        h2("Financial advisor website providers or a custom design"),
        p("Financial advisor website providers — Twenty Over Ten, Advisor Websites, FMG and similar platforms — offer templates, content libraries and, in some cases, a review workflow connected to certain broker-dealers. For a new practice, or an advisor whose broker-dealer requires an approved vendor, a provider is a sensible choice and often the best website builder for financial advisors in that position."),
        p(
          "A custom design pays off when you have a defined niche, several advisors, a second language or a site that looks like every other one built on the same template. The site is yours: the domain, the code and the content, with no platform fee. Moving from a provider keeps your addresses and rankings through the ",
          link("website redesign", "/services/website-redesign-services"),
          " process.",
        ),

        h2("Best financial advisor websites: patterns worth copying"),
        p("Lists of the best financial advisor websites mix national firms with solo planners. Set the budgets aside, and the same patterns appear in the strongest financial advisor website examples:"),
        li("a niche named in the first sentence"),
        li("real advisors on the home page, not models"),
        li("fees explained on the site before any call"),
        li("one booking button repeated through the page"),
        li("calm colors with one accent reserved for actions"),
        li("articles that show the date and the author’s credentials"),
        p("When you look at examples, open the fee page and a team profile, not only the home page. That is where a prospect decides."),

        h2("A financial advisor website that ChatGPT and Google AI Overviews can read"),
        p("People ask ChatGPT, Perplexity and Google’s AI Overviews to find a fee-only planner who works with teachers or an advisor who understands US and UK pensions. Google treats financial content as “Your Money or Your Life” and holds it to a higher standard, and AI assistants lean on the same trust signals. The design keeps the facts readable: names, designations, niches, locations and the firm’s regulatory status as text, structured data for the firm and each advisor, and an author and review date on every article."),
        p(
          "Being named in those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Getting found in Google is covered on the ",
          link("financial advisor SEO", "/financial-advisor-seo"),
          " page.",
        ),

        h2("How much financial advisor website design costs"),
        p("Design is not sold separately: the price covers design and development."),
        li("A simple financial advisor website — home, services, fees, team, contact and booking: 700–1,400 €."),
        li("A site with who-we-serve pages, fee and credential pages, disclosure slots, a review workflow, scheduling and client login links: from 2,000 €."),
        p("The work runs in four steps: a brief with your niche, team and compliance contact; a phone-first structure of the home, a niche page and a team profile; the full design of those pages; and the build, compliance review and launch."),
        p(
          "How I build websites in general is on the ",
          link("website development", "/services/website-development"),
          " page, and all price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Financial advisor website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does financial advisor website design cost?", "The price covers design and development together: 700–1,400 € for a simple advisor site and from 2,000 € for a site with who-we-serve pages, fee and credential pages, disclosure slots, a review workflow and scheduling. After a short description of the firm I give a fixed price in euros."],
          ["Can our compliance team review the website before it goes live?", "Yes. Every change appears first on a private staging link, editors can draft but only an approver can publish, and each page keeps a change history. The pages can also be captured by the archiving service your firm uses."],
          ["Can we show client testimonials on an advisor website?", "In the US the SEC Marketing Rule allows testimonials under conditions, including disclosures shown with them. The design gives each testimonial a disclosure field and lets you switch the section off. Whether you publish them, and with what wording, is your compliance team’s decision."],
          ["Should we leave our financial advisor website provider?", "Not always. A provider suits a new practice or an advisor whose broker-dealer requires an approved vendor. A custom site pays off when you have a clear niche, several advisors or a second language, and you want to own the site without a platform fee."],
          ["Do you build sites for advisors affiliated with a broker-dealer?", "Yes, when the broker-dealer allows an outside developer. Many require approval of every change and some accept only approved vendors, so check your broker-dealer’s policy first; the review workflow is built to fit its process."],
          ["Can the site connect to our scheduling tool and client portal?", "Yes. The booking button opens your scheduling tool with a few intake questions, and the client login menu links to the custodian and planning portals your clients use. The site itself never collects account numbers or statements."],
          ["How do you work with a US advisory firm from Poland?", "Remotely and in English. Calls and design reviews happen in my afternoon and evening Central European Time, which is the US business morning, with comments in a shared design file in between. Contracts and invoices are in euros."],
          ["Will a new design help us appear in ChatGPT answers?", "Design alone does not put a firm into AI answers, but it can keep it out: credentials in images and services hidden in PDFs cannot be read. The design keeps them as text with structured data, and the ongoing visibility work is part of my SEO and GEO service."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order financial advisor website design: what to send me"),
        p(
          "Send a link to the firm’s current site (or just its name), the kinds of clients you focus on, how you are paid, the number of advisors and whether you are an RIA, a hybrid or affiliated with a broker-dealer. A few advisor sites you like or dislike and the name of your compliance contact help me plan the review step. I will reply with a plan for the home, who-we-serve, fee and team pages and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
