// Landing page fixture: Financial advisor SEO (EN), group «financial-advisor-seo».
// New page. US first (UK, Canada, Australia named generally).
// Semantic core: ref/real-estate-finance.md (en US): seo financial advisor 480
// · financial advisor seo 390 (H1, metaTitle, most H2) · local seo for
// financial advisor 30 (local H2) · financial advisor seo keywords 10 / top
// keywords for financial advisors 10 (keywords H2) · financial advisor search
// engine 10.
// PAA: What are the best SEO strategies for financial services firms? (H2 +
// FAQ) · Can ChatGPT do SEO? (FAQ) · Is SEO dead now with AI? (FAQ).
// Intent: ref/intent-check-real-estate-finance.md — «financial advisor seo» vs
// «financial advisor website design» 0 shared URLs, 1 shared domain → SEO and
// design are separate pages, no shared paragraphs. «financial advisor website»
// SERP = Schwab, Twenty Over Ten, Advisor Websites (vendors) → not targeted.
// SEO SERP = Select Advisors Institute, SmartAsset, Elk HQ, agencies →
// buyers’ demand; the page sells the service.
// Angle: compliance (SEC Marketing Rule, FINRA communications, firm review —
// general terms, «your compliance team decides»), YMYL / E-E-A-T and
// credentials (CFP®), niche pages (physicians, business owners and
// executives, retirees, expats), fiduciary / fee-only / fee transparency as
// keywords, local SEO per office, planning content with review dates,
// Form ADV / BrokerCheck / IAPD consistency for AI answers, owned search vs
// paid lead platforms, results in booked intro calls.
// NOT on this page: first screen, team page layout, scheduling widget and
// client portal placement, ADA, vendor platform choice
// (/financial-advisor-website-design, linked once); mortgage and insurance
// SEO (own pages); paid ads, social media, email (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; regulation in general terms.
import { p, h2, h3, li, link, k } from "./pt";

export const financialAdvisorSeoEn = {
  lang: "en",
  group: "financial-advisor-seo",
  slug: "financial-advisor-seo",
  title: "Financial advisor SEO for independent advisors and RIAs",
  heading: "Financial Advisor SEO for Independent Advisors and RIAs",
  excerpt:
    "I provide financial advisor SEO for independent advisors, RIAs and small wealth management teams: a page for each client niche, advisor bios with credentials, planning content prepared for compliance review, local search and visibility in AI answers, reported in booked intro calls.",
  seo: {
    metaTitle: "SEO for Financial Advisors and RIAs | Bandziuk",
    metaDescription:
      "SEO for financial advisors: niche pages, credentials, compliance-ready content, local search and AI answers, measured in booked calls. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Niche pages + AI answers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Fee-only advisor for physicians", "CFP® professional", "Book an intro call", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Financial advisor SEO audit: website, niche pages, local search, competitors and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for an advisory firm: niche and service pages, advisor bios, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a financial advisor or RIA", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with financial advisor SEO",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for each client niche and service", text: "Physicians, business owners, retirees, expats" },
        { _key: k("o"), iconName: "shield-check", title: "Content ready for compliance review", text: "Claims marked, sources linked, no promised returns" },
        { _key: k("o"), iconName: "file-text", title: "Advisor bios that show credentials", text: "CFP®, registration, fee model, years in practice" },
        { _key: k("o"), iconName: "map-pin", title: "Local search for each office", text: "Google Business Profile and “near me” searches" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "Firm facts that assistants can repeat" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in booked intro calls", text: "Calls, forms and new clients, not positions alone" },
      ],
      prices: [
        { _key: k("r"), label: "Financial advisor SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for an advisory firm", value: "from 800 € / month", note: "pages, local, AI visibility, reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: websites for high-trust, high-value decisions",
      subtitle:
        "Cyprus VIP Estates sells luxury real estate to international buyers — a large financial decision where people check who they are dealing with long before the first call, just as they do when choosing an advisor. I built that site from scratch in five languages, connected it to the CRM and still run its SEO every month. Next to it: a Warsaw renovation and property-investment company, ScanM2 — a 3D laser scanning and BIM firm whose organic traffic grew 29× after the rebuild — an education agency site covering ten countries, and a Warsaw auto repair shop that gets its calls from local search.",
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
      title: "Get a quote for SEO for your advisory firm",
      subtitle: "I reply within one business day with what I would fix first on your website and a fixed price. Please do not include client names or account details.",
      contextLabel: "Firm name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How is your firm set up?", options: ["Independent RIA", "Hybrid RIA", "Registered rep with a broker-dealer", "Flat-fee or hourly planner"] },
        { _key: k("z"), question: "Which clients do you want more of?", options: ["Physicians and dentists", "Business owners and executives", "Retirees and pre-retirees", "Expats and cross-border clients", "Several groups"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Financial advisor SEO is the work that brings people who are choosing an advisor to your firm’s own website and turns those visits into booked introductory calls. I do it myself, as a single SEO consultant who also builds websites, for independent RIAs, hybrid advisors, flat-fee planners and small wealth management teams. The person who audits your site writes the pages, makes the changes and prepares the drafts your compliance team reviews."),

        h2("What financial advisor SEO includes: niche pages, credentials and AI answers"),
        p("Few people search for “financial advisor” and hire the first result. They search for their situation: “fee-only advisor for doctors”, “should I roll over my 401(k) when I retire”, “financial planner for small business owners Denver”, “fiduciary financial advisor near me”. SEO for financial advisors makes sure a page on your site answers that search and makes booking a call easy. The work covers:"),
        li("a page for each client niche you serve and each planning service you offer"),
        li("advisor bios with credentials and registration a prospect can verify"),
        li("planning articles reviewed before publishing, and local search"),
        li("technical fixes, tracking of scheduling links and visibility in AI answers"),
        p(
          "My general approach to ongoing search work is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page. This page covers what is specific to advisors.",
        ),

        h2("Why financial advisor websites are YMYL: credentials, bylines and E-E-A-T"),
        p("Google groups topics that can affect a person’s money, health or safety as “Your Money or Your Life” (YMYL) and asks its quality raters to look harder at the experience, expertise, authoritativeness and trust (E-E-A-T) behind such pages. Retirement income, investing and taxes sit at the center of that category. On an advisor site this means:"),
        li("an author byline on every article, linked to a bio with credentials such as CFP®, CFA or ChFC® and years in practice"),
        li("“reviewed on” dates on articles about tax brackets, contribution limits or rules that change every year"),
        li("a plain statement of how the firm is registered and how it is paid"),
        p("The CFP Board and other credentialing bodies have rules on how designations are written, and I follow them in titles and bios. AI-generated text published unchecked is a poor fit for YMYL pages and a compliance risk."),

        h2("Financial advisor SEO and compliance: SEC Marketing Rule, FINRA and your firm’s review"),
        p("Regulators treat an advisor’s website as advertising, blog posts and page titles included. In the US, investment advisers follow the SEC Marketing Rule, which allows testimonials, endorsements and performance figures only under specific conditions and disclosures. Registered representatives follow FINRA rules for communications with the public, and their broker-dealer usually approves website content before it goes live. Outside the US, the FCA in the UK and regulators in Canada and Australia have their own rules on financial promotions."),
        p("I do not decide what is compliant — your compliance team or consultant does. What I do is make their review quick:"),
        li("drafts arrive in batches, with every factual claim and its source marked, so review takes one pass"),
        li("no promised returns, no “best advisor” wording and no performance figures unless compliance supplies and approves them"),
        li("Google reviews, ratings and client quotes are discussed with compliance first, because reviews can count as testimonials"),
        p("This is a general description, not legal or compliance advice. Check the rules that apply to your registration with your compliance team."),

        h2("SEO for financial advisors by niche: pages for the clients you want more of"),
        p("An advisor who “serves everyone” ranks for nothing in particular. Each group of clients you work with gets a page about their situation, linked from the bios of the advisors who serve them:"),
        h3("Financial advisor SEO for physicians and dentists"),
        p("Doctors search for student loan strategies, disability insurance, buying into a practice and catching up on retirement savings after a late start. A page answering the questions residents and attendings ask ranks where a general page never will."),
        h3("SEO for advisors to business owners and executives with equity pay"),
        p("Business owners search for exit planning, retirement plans for a small company and how to pay themselves; executives search for RSUs, stock options and concentrated stock positions. These pages describe the decisions you help with, not a list of services."),
        h3("Retirement planning pages for retirees and pre-retirees"),
        p("People five to ten years from retirement search for Social Security timing, 401(k) rollovers, required minimum distributions and Medicare enrollment. Each topic gets its own page or article."),
        h3("Cross-border financial advisor SEO for expats and international clients"),
        p(
          "Americans abroad and foreign nationals moving to the US look for advisors who understand two tax systems and accounts in two countries. Many search in their own language too, so a page in Spanish or German can bring more calls than another English article. See ",
          link("multilingual website development", "/services/multilingual-website-development"),
          ".",
        ),

        h2("Financial advisor SEO keywords: fiduciary, fee-only and advisor cost searches"),
        p("“Fiduciary financial advisor”, “fee-only financial planner”, “flat-fee financial advisor” and “how much does a financial advisor cost” come from people who want clarity about conflicts of interest. If your firm is a fiduciary or fee-only, those words belong in page titles and in a plain explanation of how you are paid: a percentage of assets, a flat or retainer fee, hourly planning, account minimums. These terms have a precise meaning and regulators look at whether they are used accurately, so they go on the site only when they describe your firm."),
        p("Broad searches are held by large firms, comparison sites and lead platforms. The realistic targets are combinations of niche, service, fee model and city that a smaller firm can own, taken from search data, your Google Search Console and the questions prospects ask on intro calls."),

        h2("Local SEO for financial advisors: Google Business Profile and office pages"),
        p("Many clients still want an advisor they can meet in person, and they search with a city name or “near me”. Local SEO for financial advisors covers:"),
        li("a Google Business Profile for each office where you meet clients, with the right category and a link to that office’s page"),
        li("office pages with the address, the advisors who work there and virtual meeting options"),
        li("for fully virtual firms, pages for states or regions only where you are registered and have clients"),
        p(
          "Where you may work is a regulatory question rather than an SEO one, and state pages should reflect it. The map side in detail — categories, photos, reviews within your compliance rules — is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Planning content in financial advisor SEO: answers people search before they hire"),
        p("Most searches that later turn into clients are questions: “how much do I need to retire at 60”, “is a Roth conversion worth it”, “what to do with an inheritance”, “how to pay for college and still retire”. A firm that answers them clearly is found months before the person is ready to hire. The topic list comes from search data and from questions your advisors hear in first meetings."),
        li("one question per article, answered in the first paragraph"),
        li("hypothetical examples presented the way compliance approves"),
        li("a link from each article to the related niche or service page and to booking a call"),
        li("a yearly review of every article that mentions limits, brackets or rules that change"),
        p("Pre-written vendor content libraries are often licensed to many firms at once, so the same article appears on many sites and rarely ranks on any of them."),

        h2("Financial advisor SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("People now ask ChatGPT, Perplexity and Google’s AI Overviews how to choose a financial advisor, what a fee-only planner charges or which advisors in their city work with physicians. Because money questions are YMYL, assistants lean on sources with verifiable credentials. Work on those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For an advisory firm it means:"),
        li("niches, services, fee model, minimums, locations and credentials written as plain sentences an assistant can quote"),
        li("the same firm and advisor details on the site, in your Form ADV, on FINRA BrokerCheck or the SEC’s Investment Adviser Public Disclosure site, and in the directories you belong to"),
        li("structured data that links the firm, its advisors and its offices"),
        li("answers to common planning questions on the page, with the author and review date"),
        p(
          "I check how assistants describe your firm and which competitors they name, before the work and after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Best SEO strategies for financial services firms: owned search versus paid lead platforms"),
        p("Advisors are offered many ways to buy attention: paid matching platforms, directory memberships and marketing vendors that bundle a template website, content and email. Paid leads arrive quickly, but matching platforms usually introduce a prospect to more than one advisor, and nothing stays with you when you stop paying. SEO is slower, but what it builds belongs to your firm."),
        p("Agencies that specialize in advisor marketing sell a team and several channels. I work alone: I talk to the advisors, write the pages, make the changes on WordPress, Next.js or the platform your broker-dealer requires, and explain the report. I do not run ads, social media or email. Whoever you choose, ask who writes the content, how compliance review fits in and who owns the site and texts when the contract ends."),

        h2("How financial advisor SEO results are measured: booked calls and new clients"),
        p("An advisory firm pays for new client relationships, so that is what I report:"),
        li("intro calls booked from search, tracked through Calendly or your CRM’s scheduler"),
        li("contact forms and phone calls from organic visitors, counted in GA4"),
        li("new clients from search, if your CRM — Wealthbox, Redtail, Salesforce or another — records the source"),
        p("Reports hold counts, never client names or account data. New niche pages usually need three to six months to bring steady calls; competitive cities take longer."),

        h2("How much financial advisor SEO costs"),
        li("Financial advisor SEO audit — website, niche pages, local search, competitors and AI answers: from 250 €, one-off."),
        li("One-off SEO work — niche and service pages, advisor bios, structured data, technical fixes: 250–700 €."),
        li("Monthly SEO for an advisory firm — new pages, planning articles, local search, AI visibility and reports in booked calls: from 800 € per month; in very competitive markets from 1,300 € per month."),
        p(
          "Every project starts with the audit: which niches and fee models have no page, how Google indexes the site, whether bios show credentials, whether firm data matches your filings, and what AI assistants say about you. The ",
          link("SEO audit", "/services/seo-audit"),
          " page describes it in detail.",
        ),
        p(
          "If the website itself needs replacing, a new advisor site costs 700–1,400 € and a fully custom one from 2,000 €, design included; that side is described on the ",
          link("financial advisor website design", "/financial-advisor-website-design"),
          " page. All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Financial advisor SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO cost for a financial advisor?", "An audit costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive markets. After a short description of the firm, its niches and its cities I give a fixed price."],
          ["What are the best SEO strategies for financial services firms?", "Pages for specific client niches, credentials and fee transparency stated plainly, planning content reviewed by an advisor and by compliance, the same firm data on the site, in filings and in directories, and a local profile for each office. How many posts you publish matters less than whether each page answers one real question."],
          ["Will my compliance team need to approve the SEO changes?", "Usually yes for anything a visitor can see: titles, pages, articles and bios. Purely technical fixes that do not change content often do not, but ask your compliance team. I send drafts in batches with claims and sources marked, so review is quick."],
          ["Can ChatGPT do SEO for a financial advisor?", "It can help with drafts and ideas. It cannot see your search data, your competitors or your site’s technical problems, and financial content published without review is a risk both for rankings and with regulators."],
          ["Is SEO dead now with AI?", "No. Assistants build their answers from websites, filings and directories they can read, and a firm that is invisible in search is usually invisible in AI answers too. What changes is the format: pages have to answer questions directly and show who is behind them."],
          ["How long does financial advisor SEO take?", "Technical fixes and better titles can show within weeks. New niche pages usually need three to six months to bring steady intro calls, longer in large cities. Planning articles take several months to rank and then bring visitors for years."],
          ["Can a consultant in Poland do SEO for a US advisory firm?", "Yes. All the work is remote and in English, and I never need access to client data or custodian systems. My afternoon and evening in Central European Time overlap with the US working day, so calls fit East Coast and Central mornings. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order financial advisor SEO: what to send me"),
        p(
          "Send the firm’s website, how you are registered (RIA, hybrid or with a broker-dealer), the client niches and cities you want more business from, your fee model and how compliance reviews website changes today. Please leave out any client information. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
