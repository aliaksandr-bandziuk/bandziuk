// Landing page fixture: Law Firm SEO and Lawyer SEO Services (EN), group
// «seo-for-law-firms». Rewrite of the old-template page on the same URL.
// Semantic core: ref/lawyers.md / lawyers.csv (US) and BRIEF.md: legal firm
// seo 4,400 · law firm seo / seo law firm / seo for law firm 3,600 · seo for
// legal firms 3,600 · lawyer seo / seo for lawyer / lawyer seo marketing 2,900
// · seo for attorney / seo attorney 3,600, attorney seo 2,900 (one heading) ·
// lawyer seo services 1,300 · legal seo services 1,300 · legal seo 1,000 ·
// seo services for lawyers 1,000 · law firm seo services 590 · law firm seo
// consultant 170 · law firm website seo 170 · law firm seo audit 110.
// Practice areas as H3: family lawyer seo 260 (seo for family lawyer 170),
// seo for immigration lawyer 170, seo for divorce attorney 140 (divorce lawyer
// seo 90, divorce attorney seo 90), dui lawyer seo 110, criminal lawyer seo
// 70, business lawyer seo 70, employment lawyer seo 30.
// PAA: How much does SEO usually cost? Can ChatGPT do SEO? Is SEO paid or
// free? (cost H2 + FAQ).
// Intent: ref/intent-check-lawyers.md — «lawyer seo» vs «law firm seo» 3 of 10
// shared URLs (PaperStreet, Elite Legal Marketing, Neil Patel) → one page.
// «attorney seo» vs «law firm seo» 0 shared, SERP is guides (Clio, LawPay, DC
// Bar) → named in one heading only; a guide is a future blog article. «law
// firm marketing» vs «law firm seo» 0 shared → not targeted (ads, social,
// video are not offered). «local seo for lawyers» 0 shared → own page.
// «personal injury seo» 0 shared → own page.
// NOT on this page: Google Business Profile, map pack, reviews, legal
// directories, office pages, Local Services Ads (/local-seo-for-lawyers, one
// paragraph + link); personal injury case-type and city pages, intake speed,
// contingency messaging (/personal-injury-seo, one sentence + link); building
// the site (/lawyer-website-development); design (/law-firm-website-design).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const seoForLawFirmsEn = {
  lang: "en",
  group: "seo-for-law-firms",
  slug: "seo-for-law-firms",
  title: "Law firm SEO and lawyer SEO services",
  heading: "Law Firm SEO and Lawyer SEO Services",
  excerpt:
    "I provide law firm SEO and lawyer SEO services for solo attorneys and small firms: a page for each practice area and legal problem, attorney profiles Google trusts, content within bar advertising rules and visibility in AI answers, reported in consultations and signed cases.",
  seo: {
    metaTitle: "SEO for Law Firms and Attorneys: One Consultant | Bandziuk",
    metaDescription:
      "Legal SEO services for law firms: practice-area pages, YMYL content within bar rules, AI answers, results in signed cases. Audit from 250 €, prices published.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Practice-area pages + AI answers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Child custody lawyer", "Consultation booked", "Attorney profile", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Law firm SEO audit: website, practice-area pages, competitors and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off lawyer SEO work: practice-area pages, attorney profiles, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a law firm", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with law firm SEO and legal SEO services",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for each practice area and legal problem", text: "Custody, uncontested divorce, first DUI, visa types" },
        { _key: k("o"), iconName: "shield-check", title: "Content written to YMYL and bar rules", text: "Bylines, bar admissions, dates, careful claims" },
        { _key: k("o"), iconName: "file-text", title: "Attorney profiles Google can trust", text: "Admissions, education, practice areas, languages" },
        { _key: k("o"), iconName: "gauge", title: "Technical fixes made in the code", text: "Speed, indexing, structured data, intake forms" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "Facts about the firm that assistants can quote" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in consultations and signed cases", text: "By practice area, not positions alone" },
      ],
      prices: [
        { _key: k("r"), label: "Law firm SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a law firm", value: "from 800 € / month", note: "pages, fixes, AI visibility, reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: service websites I have built and optimized",
      subtitle:
        "Professional and local service businesses that get their enquiries from search: an education agency working across ten countries in several languages, an architecture studio, a renovation and investment company, an auto repair shop and a wheel-renovation workshop. Each site gives every service its own page and makes it easy to call or send a request — the same structure a law firm needs for its practice areas.",
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your law firm",
      subtitle: "I reply within one business day with what I would fix first on your firm’s website and a fixed price. Please do not include details of any client matter.",
      contextLabel: "Firm name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What is your main practice area?", options: ["Family and divorce", "Immigration", "DUI and criminal defense", "Business and employment", "Several practice areas"] },
        { _key: k("z"), question: "What size is the firm?", options: ["Solo attorney", "2–5 attorneys", "6–20 attorneys", "Several offices"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Law firm SEO is the work that brings people with a legal problem to your firm’s own website when they search for it, and turns those visits into consultation requests and signed cases. I provide lawyer SEO services myself, as a single SEO consultant who also builds websites, so the person who audits your site is the person who writes the pages and changes the code."),

        h2("What law firm SEO includes: practice-area pages, attorney profiles and AI answers"),
        p("A prospective client rarely searches for “law firm”. They search for their problem — “how to get full custody”, “green card through marriage”, “first DUI what happens” — and law firm SEO makes sure a page on your site answers that search and that Google trusts it. The work covers:"),
        li("a structure of practice-area pages and pages for the specific legal problems inside each area"),
        li("attorney profiles and content that meet Google’s higher standard for legal topics"),
        li("wording that stays within your bar’s advertising rules"),
        li("technical fixes: speed, indexing, structured data, tracking of calls and forms"),
        li("visibility in ChatGPT, Perplexity and Google AI Overviews"),
        p(
          "Most firms also get calls from Google Maps. The profile, reviews, legal directories and office pages are a separate job with their own rules, described on the ",
          link("local SEO for lawyers", "/local-seo-for-lawyers"),
          " page.",
        ),

        h2("SEO for legal firms and YMYL: why Google holds legal content to a higher standard"),
        p("Google calls topics that can affect someone’s money, health, safety or legal rights “Your Money or Your Life” (YMYL), and its quality guidelines ask for more evidence of experience and expertise on those pages. An anonymous post on child support competes badly with a page that shows who stands behind it. On a law firm site that means:"),
        li("an author byline on every guide, with the attorney’s name, the states or courts they are admitted in and a link to their profile"),
        li("a “reviewed by” line and a “last updated” date on pages that describe the law"),
        li("the jurisdiction named on the page, because divorce or DUI rules differ by state"),
        li("links to statutes, court websites and official forms where they help the reader"),
        p("Texts generated by AI and published without an attorney’s review are a poor fit for YMYL. I draft from your notes and answers, and an attorney at the firm approves every legal statement."),

        h2("Lawyer SEO and bar advertising rules: what a law firm website may say"),
        p("In the US, state bar rules on lawyer advertising follow the ABA Model Rules: a communication about a lawyer’s services must not be false or misleading. States add their own details, and lawyer SEO has to respect them:"),
        li("some states require an “Attorney Advertising” label on certain pages or materials"),
        li("case results usually need a disclaimer that past results do not guarantee a similar outcome"),
        li("words like “specialist” or “expert” are restricted in many states unless the attorney is certified by an approved body"),
        li("rules on client testimonials and endorsements differ from state to state"),
        p("In England and Wales, the SRA requires price information for certain services, and law societies in Canada and Australia have their own rules. Check your state bar’s or regulator’s rules; I write within them, and the final wording is the firm’s decision. Forms on the site carry a note not to send confidential information and that sending a form does not create an attorney-client relationship. None of this page is legal advice."),

        h2("Practice-area SEO for lawyers: one page for each legal problem a client searches for"),
        p("A single “Practice Areas” page listing ten services cannot rank for any of them. Each area gets a main page, and each common problem inside it gets its own page, linked from the attorney profiles of the lawyers who handle it. The structure looks different for each practice."),
        h3("Family lawyer SEO: custody, child support and protective orders"),
        p("Family law clients search for the issue: “modify child support”, “grandparents’ visitation rights”, “relocate with child after divorce”. Each issue gets a page explaining the process in your state and how a first consultation works. Pages about protective orders need a quick-exit button and discreet wording, because some readers are searching on a shared device."),
        h3("SEO for divorce attorneys: contested, uncontested and high-asset divorce"),
        p("People research divorce for months before they call. Divorce lawyer SEO answers the early questions — how long it takes, what mediation is, how property is divided — and leads to pages for contested, uncontested, high-asset and military divorce."),
        h3("SEO for immigration lawyers: visa types, languages and clients abroad"),
        p("Immigration clients search by visa or process: marriage-based green card, K-1 fiancé visa, naturalization, removal defense, skilled worker or spouse visa in the UK. Many search in their own language, so separate language versions of the key pages often bring more consultations than another English article. Clients are warned about unlicensed “notarios”, so the attorney’s bar admission belongs on every page."),
        h3("DUI lawyer SEO and criminal lawyer SEO: urgent searches by charge and county"),
        p("DUI and criminal searches often come at night, right after an arrest. Pages are built by charge — first DUI, DUI with injury, license suspension hearing, drug possession, expungement — and by the courts and counties you appear in. The phone number sits at the top of every mobile page, and the content explains deadlines in plain words without promising outcomes."),
        h3("Business lawyer SEO and employment lawyer SEO: owners and employees search differently"),
        p("Business clients search for tasks: forming an LLC, a commercial lease, a partnership dispute, selling a company, and compare firms over weeks. Employment law splits by side: employees search for wrongful termination, unpaid overtime or discrimination; employers search for handbooks and compliance. The site has to make clear which side you represent."),
        p(
          "Personal injury works by its own rules — case types, city pages, intake speed and very high competition — described on the ",
          link("personal injury SEO", "/personal-injury-seo"),
          " page.",
        ),

        h2("Technical SEO for law firm websites: speed, structure and structured data"),
        p("Law firm sites often lose positions to a heavy home-page video, a chat widget that slows every page or one title repeated across practice areas. Law firm website SEO fixes:"),
        li("the main content of each page appearing within 2.5 seconds on a phone (Core Web Vitals LCP)"),
        li("clear addresses such as /family-law/child-custody/, with practice-area pages linked from attorney profiles and back"),
        li("structured data for the firm (LegalService), the attorneys (Person) and the FAQs on a page"),
        li("forms and click-to-call buttons that are tracked, so each consultation request is counted"),
        p(
          "If the site needs to be rebuilt rather than fixed, see ",
          link("lawyer website development", "/lawyer-website-development"),
          " and ",
          link("law firm website design", "/law-firm-website-design"),
          ".",
        ),

        h2("Legal content and links in law firm SEO: answers clients search for, earned mentions"),
        p("Content that brings clients answers what people type before they call: what a consultation costs, what happens at the first hearing, whether they need a lawyer at all. I build the list from search data and from the questions your intake staff hear every week."),
        p("Links come from real activity: bar association sections, law school alumni pages, articles quoting an attorney, CLE talks, community sponsorships. Paid link packages put a YMYL site at risk and are not part of my work."),

        h2("Law firm SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("People now ask ChatGPT, Perplexity or Google’s AI Overviews how to find a family lawyer in their city, whether they need an attorney for an uncontested divorce, or what a DUI case usually involves. Assistants answer legal questions with more care because they are YMYL, and they lean on sources that show credentials. Work on those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For a law firm it means:"),
        li("practice areas, bar admissions, counties served, languages and fee structure written as plain sentences"),
        li("answers to common legal questions on the page, with the attorney’s byline and the jurisdiction"),
        li("structured data that ties the firm, its attorneys and its offices together"),
        li("the same firm and attorney details on the site and on the directories assistants read"),
        p(
          "I check how assistants describe your firm before the work and after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Attorney SEO from a consultant or a legal marketing agency: who does the work"),
        p("Legal marketing agencies serve many firms at once: a salesperson, an account manager, writers, a developer, often a twelve-month contract, plus ads, social media and video. That suits a firm that wants every channel from one supplier."),
        p("As a law firm SEO consultant I work alone: I read your search data, write the pages with your attorneys’ input, make the changes on WordPress, Next.js or another system, and explain the report. I do not run ads, social media or video. Whoever you hire, ask who writes the legal content, who reviews it, and who owns the site and its texts when the contract ends."),

        h2("Legal firm SEO audit: what I check before any monthly work"),
        p("Every project starts with an audit, and for a small firm it is often most of what is needed. I check:"),
        li("which practice areas and legal problems have no page, or share one page"),
        li("how Google indexes the site, page speed on a phone, duplicate titles"),
        li("whether attorney profiles and guides show bylines, admissions and dates"),
        li("what competing firms in your city rank with, and which searches you can win first"),
        li("how ChatGPT and AI Overviews describe the firm today"),
        p(
          "You get a list of fixes ranked by impact. The ",
          link("SEO audit", "/services/seo-audit"),
          " page describes the audit in more detail.",
        ),

        h2("How law firm SEO results are measured: consultations and signed cases"),
        p("A firm pays for consultations and signed cases, so that is what I report, by practice area:"),
        li("calls from search, counted with a call-tracking tool such as CallRail that swaps the number on the site for organic visitors and keeps your main number everywhere else"),
        li("consultation forms and booked appointments from search, in GA4"),
        li("signed cases, if your intake or practice-management software — Clio, MyCase, Lawmatics or another — records where the client came from"),
        p("Reports hold counts, never client details. New practice-area pages usually need three to six months to bring steady consultations; in large cities and crowded practices, longer."),

        h2("How much lawyer SEO services cost"),
        li("Law firm SEO audit — website, practice-area structure, competitors, AI answers: from 250 €, one-off."),
        li("One-off legal SEO work — practice-area pages, attorney profiles, structured data, technical fixes: 250–700 €."),
        li("Monthly SEO for a law firm — new pages, fixes, AI visibility and reports in consultations: from 800 € per month; in very competitive markets from 1,300 € per month."),
        p(
          "Is SEO paid or free? Clicks from Google’s regular results cost nothing; the work behind them costs time or money. A solo attorney can do a part alone, and the audit shows which part. All my prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Law firm SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO usually cost for a law firm?", "An audit costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive markets. After a short description of the firm, its practice areas and its city I give a fixed price."],
          ["Is SEO paid or free?", "Visits from Google’s regular results are not paid per click. The work that earns them — pages, fixes, content reviewed by attorneys — costs either your own time or a fee. Paid ads are a separate channel I do not run."],
          ["Can ChatGPT do SEO for a law firm?", "It can help with drafts and ideas. It cannot see your search data, your competitors or your site’s technical problems, and legal content published without an attorney’s review is risky for both rankings and bar rules."],
          ["How long does law firm SEO take?", "Technical fixes and better titles can show within weeks. New practice-area pages usually need three to six months to bring steady consultations, longer in large cities and in crowded practices such as criminal defense."],
          ["Does lawyer SEO comply with state bar advertising rules?", "I write within the rules you give me: no misleading claims, disclaimers on results, care with words like “specialist”, and the labels your state requires. Rules differ by state, so check your state bar’s rules; the firm approves the final wording."],
          ["Can you guarantee first place on Google?", "No. Nobody controls Google’s ranking, and a guarantee is a warning sign. I can show which searches are realistic for your firm, the order in which I would work on them and how results will be measured."],
          ["Can a consultant in Poland do SEO for a US or UK law firm?", "Yes. All the work is remote and in English. My afternoon and evening in Central European Time overlap with the US working day, so calls fit East Coast and Central mornings. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your law firm: what to send me"),
        p(
          "Send the firm’s website, the practice areas you want more cases in, the cities or counties you serve, the states you are admitted in and how you track calls and consultations today. Please leave out any details of client matters. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
