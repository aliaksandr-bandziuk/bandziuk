// Landing page fixture: Personal Injury SEO (EN), group «personal-injury-seo».
// New page.
// Semantic core: ref/lawyers.md / lawyers.csv (US) and BRIEF.md: seo for
// personal injury attorney 1,300 · seo for personal injury law firms 1,300 ·
// personal injury lawyer seo / seo for personal injury lawyers / personal
// injury attorney seo / seo for personal injury attorneys 1,000 each · personal
// injury law firm marketing / marketing personal injury law firm 720 (mention
// in one heading; ads and TV are not offered) · seo for personal injury 210 ·
// personal injury seo 170 (seo personal injury 170) · seo for personal injury
// lawyer 170 · personal injury seo services 50 · personal injury law firm seo
// 50 · personal injury seo company 50 · personal injury seo keywords 30.
// PAA: Why does SEO for personal injury lawyers matter? (H2 + FAQ).
// Intent: ref/intent-check-lawyers.md — «personal injury seo» vs «law firm
// seo» 0 shared URLs; SERP is PI specialists (Consultwebs, Juris Digital,
// Optimize My Firm, Three29, Matador, Webris, Clio) → own page.
// Angle: PI is the most expensive legal search market; a single consultant
// tells a big-city PI firm to start with a narrow case type or a suburb, and
// the competitive-market monthly rate (from 1,300 €) applies there.
// NOT on this page: practice-area architecture for other practices, YMYL and
// bar rules in general, consultant vs agency for all firms, measurement in
// signed cases (/seo-for-law-firms); Google Business Profile, reviews routine,
// directories, office pages, LSA (/local-seo-for-lawyers — linked once);
// building or designing the site (/lawyer-website-development,
// /law-firm-website-design). «local seo for personal injury lawyers» 110 →
// on /local-seo-for-lawyers.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const personalInjurySeoEn = {
  lang: "en",
  group: "personal-injury-seo",
  slug: "personal-injury-seo",
  title: "Personal injury SEO for lawyers and law firms",
  heading: "Personal Injury SEO for Lawyers and Law Firms",
  excerpt:
    "I do personal injury SEO for PI attorneys and small personal injury law firms: case-type pages, city pages with real local content, contingency-fee wording within bar rules and intake that answers fast, starting where a firm can win rather than where national budgets fight.",
  seo: {
    metaTitle: "SEO for Personal Injury Attorneys and Firms | Bandziuk",
    metaDescription:
      "Personal injury SEO for attorneys: case-type and city pages, contingency messaging, fast intake, AI answers, starting with a winnable niche. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Case-type pages first", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Truck accident lawyer", "Free case review", "Call answered 24/7", "Callback in minutes"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Personal injury SEO audit: website, case-type pages, competitors and intake", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off personal injury SEO work: case-type pages, city pages, results pages with disclaimers", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a personal injury firm in a large-city market", price: 1300, currency: "EUR", unit: "month" },
    { _key: "offer4", _type: "offer", name: "Monthly SEO for a personal injury firm in a smaller town", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with personal injury SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "A winnable starting niche", text: "One case type or suburb before the big-city terms" },
        { _key: k("o"), iconName: "layers", title: "A page for each case type you take", text: "Car, truck, motorcycle, slip and fall, dog bite" },
        { _key: k("o"), iconName: "map-pin", title: "City pages with real local content", text: "Roads, courts, hospitals — no swapped town names" },
        { _key: k("o"), iconName: "phone", title: "Intake that answers fast", text: "Calls, chat and callbacks checked at night and weekends" },
        { _key: k("o"), iconName: "shield-check", title: "Results and fee wording within bar rules", text: "Disclaimers next to settlements and verdicts" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "Answers to what injured people ask assistants" },
      ],
      prices: [
        { _key: k("r"), label: "Personal injury SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a PI firm in a large-city market", value: "from 1,300 € / month", note: "smaller towns from 800 € / month", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: websites built around one page per service and fast enquiries",
      subtitle:
        "Service businesses whose clients arrive from search and need to get in touch quickly: an auto repair shop, a wheel-renovation workshop, a renovation and investment company, an architecture studio and an education agency working across ten countries. Each site gives every service its own page with a clear call or request button — the base of case-type pages and fast intake for a personal injury firm.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your personal injury firm",
      subtitle: "I reply within one business day with where I would start in your market and a fixed price. Please do not include details of any client or case.",
      contextLabel: "Firm name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which case types do you want more of?", options: ["Car and truck accidents", "Slip and fall, premises", "Wrongful death, medical malpractice", "All personal injury"] },
        { _key: k("z"), question: "Where is your main office?", options: ["A large metro area", "A suburb of a large city", "A mid-size city", "A small town or rural county"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Personal injury SEO is the work that brings people hurt in an accident to your firm’s website when they search for help, and turns those visits into calls and signed contingency cases. I do SEO for personal injury attorneys myself, as a single consultant who also builds websites, and I start where your firm can realistically win, because in this market the head terms belong to firms with national budgets."),

        h2("Why SEO for personal injury lawyers matters: injured people search before they call"),
        p("After a crash or a fall, most people do not have a lawyer’s name. They search from a phone, sometimes from a hospital bed or the roadside: “do I need a lawyer after a car accident”, “truck accident lawyer near me”, “how much is my settlement worth”. The firm whose page answers that search, and whose phone is answered, gets the call."),
        p("Referrals still matter, but the referred client also searches your name and compares you with the firms they see. TV and billboards make people remember a name; search decides who they call when the moment comes. SEO for personal injury law firms is how a smaller firm takes part in that decision without matching the advertising budgets of the largest firms."),

        h2("SEO for personal injury law firms: the hardest legal search market"),
        p("Personal injury is the most contested corner of legal search. Ad clicks for these terms are among the most expensive in Google Ads, because a single signed case can be worth a great deal to the firm. For “car accident lawyer” in a large city you compete with:"),
        li("firms that have invested in SEO for years, with hundreds of pages and reviews"),
        li("national advertisers and lead-generation sites that sell the same enquiry to several firms"),
        li("directories, legal information sites and Local Services Ads above the regular results"),
        p("That is why personal injury SEO agencies charge more than general SEO shops, and why big-city PI firms often spend on SEO what smaller firms spend on their entire marketing."),

        h2("A personal injury SEO strategy against national budgets: start with a narrow case type or a suburb"),
        p("A single consultant cannot outspend those firms, and I will not pretend otherwise. For a big-city PI firm, a page aiming at “car accident lawyer [big city]” from day one usually means a year of costs with little to show. The strategy I propose instead:"),
        li("pick one case type where competition is thinner and your firm has real experience — motorcycle crashes, dog bites, rideshare accidents, premises cases"),
        li("or pick the suburb or county around your office, where national firms have no real presence"),
        li("build the strongest pages on the web for that niche, collect reviews from those clients, and only then widen to the next case type or area"),
        p("For a PI firm in a mid-size city or a small town the picture is different: there the main terms are often within reach, and the work can start broader."),

        h2("Case-type pages for personal injury attorney SEO"),
        p("Each case type you take gets its own page, because injured people search for what happened to them, not for “personal injury”. A good case-type page explains the steps after the accident, who usually pays, the evidence that matters, typical deadlines in your state described in plain words, and how your firm handles that kind of case."),
        h3("Car accident and truck accident lawyer pages"),
        p("Car accident pages split further into rear-end collisions, uninsured drivers, rideshare crashes and accidents with injured passengers. Truck accident pages deal with commercial carriers, trucking regulations, black-box data and several insurers at once — searchers and their cases differ, so the pages do too."),
        h3("Motorcycle accident, slip and fall and dog bite pages"),
        p("Motorcycle riders face bias from insurers and juries, and the page should show that the firm knows it. Slip and fall pages explain premises liability and what to photograph at the scene. Dog bite pages cover owner liability rules in your state and what to do about medical records and animal control reports."),
        h3("Wrongful death and medical malpractice pages: the most careful tone"),
        p("Families searching after a death read slowly and are sensitive to any sales tone. These pages need calm language, clear explanations of who may bring a claim and how long it may take, and a quiet way to contact the firm. Medical malpractice pages should be cautious about outcomes and explain expert review in general terms."),

        h2("City and case-type pages for personal injury law firms without doorway spam"),
        p("“Car accident lawyer in [suburb]” pages work when they contain something specific to that place: the dangerous intersections and highways, the courthouse where cases are filed, the hospitals and trauma centers nearby, the police department that writes the reports, reviews from clients who live there. A hundred pages that only swap the town name are doorway pages; Google filters them and they weaken the whole site."),
        p("I build city pages one at a time, for places where the firm has clients and an office or court presence, and link each from the matching case-type page."),

        h2("Personal injury SEO keywords: what injured people type"),
        p("The obvious terms are the hardest. Many signed cases start from longer searches that show a real person with a real problem:"),
        li("questions — “what to do after a car accident that wasn’t my fault”, “how long does a personal injury claim take”"),
        li("money — “who pays my medical bills after an accident”, “average settlement for a back injury”"),
        li("specific situations — “hit by an uninsured driver”, “injured as an Uber passenger”, “bitten by neighbor’s dog”"),
        p("I pull the volumes for your state and city, check which searches show AI Overviews and Local Services Ads, and give each topic one page."),

        h2("Contingency-fee messaging on a personal injury website"),
        p("Most PI clients worry about cost before anything else, so “you pay nothing unless we recover compensation” belongs high on the page. But this message is regulated: several states require that it be accompanied by an explanation of whether the client may owe case costs and expenses, and how the fee percentage is calculated. A short, clear section on how your contingency fee works answers the client’s main fear and keeps the wording within your state bar’s rules — check them before publishing; the final wording is yours."),

        h2("Intake speed for personal injury firms: calls, chat and callbacks"),
        p("In personal injury, a visitor who reaches voicemail calls the next firm. SEO traffic is wasted if intake does not answer quickly, so part of my work is checking the path from search to conversation:"),
        li("the phone answered around the clock, by staff or an answering service that knows which questions to ask"),
        li("chat that reaches a person or a callback within minutes, not a form that waits until Monday"),
        li("click-to-call at the top of every mobile page and a short form with a notice not to send confidential details"),
        li("a test call and a test form at night and on a weekend, to see what a real visitor gets"),
        p("Intake staffing is your decision; I show where search visitors are lost and make the site side fast."),

        h2("Settlements, verdicts and reviews on a PI website: disclaimers bar rules require"),
        p("Results pages persuade, and they are among the most regulated content on a law firm site. State bar rules commonly require a disclaimer that past results do not guarantee a similar outcome, and some states set conditions on how settlements and verdicts are described. Each result should state the case type and, where your rules require it, whether the figure is gross or net of fees. Reviews and testimonials follow the same caution. I build these pages with space for the disclaimers your state requires."),

        h2("Personal injury SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Injured people now ask ChatGPT, Perplexity or Google’s AI Overviews what their case might be worth, whether they need a lawyer for a minor accident and how to find a good injury attorney nearby. These are YMYL questions, and assistants prefer sources that show who wrote them and where the law applies. Work on those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For a PI firm it means:"),
        li("case-type pages that answer those questions directly, with an attorney’s byline and the state named"),
        li("the case types you take, counties you serve, languages and fee structure written as plain facts"),
        li("structured data and directory profiles that agree with each other"),
        p(
          "I check how assistants describe your firm before the work and after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Personal injury law firm marketing agencies vs one SEO consultant"),
        p("Agencies for personal injury law firm marketing sell full packages: SEO, paid search, Local Services Ads management, TV and video, intake training. They have teams, their prices start where general agencies end, and for a large firm fighting for the whole metro area that may be the right choice."),
        p(
          "I offer the SEO part: research, case-type and city pages, technical fixes, AI visibility and reporting, done by one person who writes and codes. I do not run ads or produce video. The map side — profiles, reviews, directories — is on the ",
          link("local SEO for lawyers", "/local-seo-for-lawyers"),
          " page, and firms with other practices besides PI will find the wider service on the ",
          link("law firm SEO", "/seo-for-law-firms"),
          " page.",
        ),

        h2("How much personal injury SEO services cost"),
        li("Personal injury SEO audit — website, case-type pages, competitors, intake path, AI answers: from 250 €, one-off."),
        li("One-off work — case-type pages, city pages, results pages with disclaimers, structured data: 250–700 €."),
        li("Monthly SEO for a PI firm in a large-city market: from 1,300 € per month — the rate for very competitive markets applies here, because the work is heavier."),
        li("Monthly SEO for a PI firm in a smaller town or a less contested area: from 800 € per month."),
        p(
          "Even at these rates, a big-city PI firm should expect the narrow-niche approach above, not instant results on the head terms. If the site itself needs rebuilding, see ",
          link("lawyer website development", "/lawyer-website-development"),
          ". All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Personal injury SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Why does SEO for personal injury lawyers matter?", "Most injured people do not know a lawyer and search for one, often from a phone right after the accident. The firm whose page answers their question and whose phone is answered gets the case. SEO brings these searches without paying for each click."],
          ["How much does SEO for a personal injury firm cost?", "An audit costs from 250 € one-off and single pieces of work 250–700 €. Monthly SEO for a PI firm in a large-city market starts from 1,300 € per month; in a smaller town from 800 € per month."],
          ["Can you rank us for “car accident lawyer” in a big city?", "Not quickly, and nobody can promise it. Those results belong to firms that have invested for years. I start with a case type or a suburb you can win, build strength there, then widen to harder terms."],
          ["How long does personal injury lawyer SEO take?", "In a small town, case-type pages can bring calls within a few months. In large cities, expect six to twelve months for a niche to bring steady cases, and longer for the main terms."],
          ["Can we say “no fee unless we win” on our website?", "Usually yes, but many states require an explanation of costs and expenses next to it and set rules on how the fee is described. Check your state bar’s rules; I write the fee section to fit them, and the firm approves it."],
          ["Should a PI firm buy leads, run Local Services Ads or invest in SEO?", "Leads and ads bring cases now and cost per enquiry; SEO costs more at the start and then brings calls you do not pay for one by one. Many PI firms keep paid channels while SEO builds up."],
          ["Can a consultant in Poland do SEO for a US personal injury firm?", "Yes. The work is remote and in English. My afternoon and evening in Central European Time overlap with the US working day, so calls fit your morning. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order personal injury SEO: what to send me"),
        p(
          "Send the firm’s website, the case types you want more of, the city or county of your office, the states you are admitted in, how intake answers calls and chats at night, and what you already spend on ads or leads. Please leave out any details of clients or cases. I will reply with where I would start and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
