// Landing page fixture: SEO for Solar Companies (EN), group «solar-seo». New page.
// Semantic core: ref/batch-h2.md, «solar SEO» group (US monthly): seo for solar
// companies 90, seo for solar company 90 (H1, metaTitle, several H2) · solar
// marketing companies 90 (H2 on advertising, bought leads and marketing
// companies) · solar seo 50, seo solar 50, seo for solar 40 (H2s, FAQ) · solar
// seo company / services 20 each, solar seo companies 10 (cost and marketing
// H2) · local seo for solar companies 10 (local H2) · seo keywords for solar 10
// (keyword H2, answered as search stages, not a list) · seo for solar power
// companies 10, solar company seo 10, solar panel seo 10. «solar website
// design» 50 and «solar panel website design» 20 → one H2 on the website as
// part of SEO, no separate page. Noise: solar power, solar company, solar
// eclipse seo, fast digital marketing solar seo (brand).
// PAA: How to advertise for solar? (H2 + FAQ). «What is the 20% rule for solar
// panels?» and the solar-consultant career questions are off-topic.
// Intent: ref/intent-check-batch-h.md — «solar seo» vs «construction seo» 0 of
// 10 shared URLs, 0 shared domains → own page. SERP: solar marketing agencies
// (RevenueZen, Nisonco, Solariety, Hibu, Local Mighty) and lead sellers → the
// searcher is an installer buying marketing; commercial intent.
// Angles: search stages of a long research cycle, product and job pages
// (residential, commercial, battery storage, EV chargers, service and repair,
// removal and reinstall), service-area pages by town AND utility, incentive and
// net metering pages kept current (general, no amounts or dates), savings
// calculator with stated assumptions, install case pages with consent, trust
// searches («is [company] legit», complaints), shared leads vs owned search,
// solar website as part of SEO, AI answers, qualified quote requests, cost.
// NOT on this page: general builder SEO (/seo-for-construction-companies),
// re-roof work (/roofing-seo), heat pumps (/hvac-seo), panel upgrades and
// chargers as electrical work (/seo-for-electricians) — all linked once from
// the product H2; map work in depth (/services/local-seo-services); running
// ads, door-to-door, lead buying (not offered); concrete incentive amounts or
// deadlines (they go stale — the page only says how to keep them current).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed rankings.
import { p, h2, li, link, k } from "./pt";

export const solarSeoEn = {
  lang: "en",
  group: "solar-seo",
  slug: "solar-seo",
  title: "SEO for solar companies",
  heading: "SEO for Solar Companies and Solar Installers",
  excerpt:
    "I do SEO for solar companies: pages for residential and commercial solar, battery storage and service work, area pages by town and utility, incentive pages kept current, a savings calculator and AI answers, measured in qualified quote requests rather than traffic.",
  seo: {
    metaTitle: "Solar SEO for Installers and Solar Companies | Bandziuk",
    metaDescription:
      "SEO for solar companies: product and service-area pages, incentive and net metering pages, savings calculator, reviews and AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Product, area and incentive pages", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Solar installers near me", "Is solar worth it here?", "Battery backup quote", "Recommended in AI answers"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Solar SEO audit: website, Google Business Profile, trust searches and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a solar installer: product, service-area and incentive pages, calculator text, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a solar company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for solar companies",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data for each buying stage", text: "Cost, payback, installers, products, reviews" },
        { _key: k("o"), iconName: "map-pin", title: "Service-area pages by town and utility", text: "Only where you have installs to show" },
        { _key: k("o"), iconName: "file-text", title: "Incentive pages that stay accurate", text: "Tax credits and net metering, dated and sourced" },
        { _key: k("o"), iconName: "gauge", title: "A savings calculator buyers can trust", text: "Assumptions written next to the result" },
        { _key: k("o"), iconName: "shield-check", title: "Answers to “is this company legit”", text: "Licenses, warranties and reviews as plain text" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "Facts assistants can check and repeat" },
      ],
      prices: [
        { _key: k("r"), label: "Solar SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a solar company", value: "from 800 € / month", note: "competitive US markets from 1,300 €", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: technical services and long-research purchases I have optimized",
      subtitle:
        "A solar system is a technical, expensive purchase that people research for weeks, and these projects were built for that kind of buyer. ScanM2, a 3D laser scanning and BIM company, had no leads for two years on a no-code site; after the rebuild its organic traffic grew 29-fold and requests come every week. The Cyprus property platform I built and run serves buyers who compare options from abroad for months: it went from zero to about 2,500 organic visits a month without a single bought link, and about a tenth of those visits come from AI assistants. A Warsaw auto repair shop got local SEO, a cleaned-up Google Maps profile and a page for each service from me. The education agency site grew from one country to ten, much as an installer adds towns and utility areas. A retail analytics consultant’s site has working calculators and pages written to be quoted by AI assistants — the same parts a solar savings estimate needs.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "auto-repair-seo-and-ux-boost",
        "full-multilingual-website-development-and-seo-for-student-services",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your solar company",
      subtitle: "Within one business day you get the three things I would change first on your site and profile, with a fixed price for them.",
      contextLabel: "Solar company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which jobs should search bring you?", options: ["Residential solar", "Commercial solar", "Battery storage and backup power", "Service, repairs and cleaning"] },
        { _key: k("z"), question: "Where do your appointments come from now?", options: ["Bought or shared leads", "Door-to-door and events", "Referrals and reviews", "Our own website"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for solar companies: the work that puts an installer in front of homeowners and business owners while they research panels, batteries and incentives, and again when they compare who should do the install. Buyers spend weeks or months on cost, payback, roof suitability, financing and trust, and each step starts with a search; when your pages answer them, the buyer reaches your quote form already knowing your name. I work alone: the audit, the new pages and the code changes are mine, with no account manager passing messages."),

        h2("Solar SEO keywords: how homeowners and businesses search before buying solar panels"),
        p("Solar searches follow the buying process, and the research shows which stage your site is missing:"),
        li("research and cost — “solar panel cost [state]”, “is solar worth it in Ohio”, “how long do solar panels take to pay off”"),
        li("the installer — “solar installers near me”, “solar company [town]”, “best solar company in [city]”"),
        li("products and jobs — “solar battery storage installation”, “commercial solar installer”, “solar panel repair near me”"),
        li("checks — “[company] reviews”, “is [company] legit”, “solar complaints [state]”"),
        p("Before any page is written I pull the volumes for your states and towns and look at who holds the first page now: other installers, national solar brands, quote marketplaces and lead sites dressed up as neutral guides. A ready-made list of “SEO keywords for solar” helps little: the same phrase needs a different answer in Arizona than in New Jersey, because rates, rules and roofs differ."),

        h2("Solar service pages: residential solar, commercial solar, battery storage and EV chargers"),
        p("One “Solar” page cannot rank for everything an installer sells. Each line of work has its own buyer and its own questions, so each gets a page:"),
        li("residential solar — roof and ground mounts, the steps from site survey to permission to operate, what moves the price"),
        li("commercial solar — rooftop, carport and ground arrays for an owner or finance manager who wants production and payback in writing"),
        li("battery storage and backup power — whole-home or partial backup, or a battery added to an existing system"),
        li("EV chargers, panel cleaning, repairs, monitoring faults, and removal and reinstall for a new roof"),
        p(
          "Service pages are often forgotten, yet owners whose installer has closed search for exactly this and later buy batteries. If solar is one part of a wider business, the neighboring pages go deeper: ",
          link("roofing SEO", "/roofing-seo"),
          " for re-roof work, ",
          link("HVAC SEO", "/hvac-seo"),
          " for heat pumps, ",
          link("SEO for electricians", "/seo-for-electricians"),
          " for panel upgrades, and ",
          link("SEO for construction companies", "/seo-for-construction-companies"),
          " for general builders.",
        ),

        h2("Local SEO for solar companies: service-area pages by town and utility"),
        p("Solar installers travel to the customer, so Google treats them as service-area businesses: the Business Profile shows the area you cover, not a showroom address. Buyers rarely pick an installer straight from the map, but they open the profile to read the reviews before filling in a form."),
        p("For area pages, solar has a detail most trades lack: the utility. Two neighboring towns served by different utilities can have different rates, interconnection steps and export credit rules, and that is what buyers ask about. An area page earns its place when it has:"),
        li("installs you have done there, with photos and system sizes"),
        li("the utility, and how its interconnection and approval work in general terms, with a link to the utility’s own pages"),
        li("permit and HOA notes from jobs in that town"),
        li("reviews from customers who live there"),
        p(
          "A town with nothing to show stays on the general list until you install there. The profile side — categories, service area, photos, review requests — is covered on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Solar incentive, tax credit and net metering pages that stay accurate"),
        p("Incentives drive more solar searches than any other topic: “solar tax credit”, “solar rebates [state]”, “net metering [utility]”. They are also the part of a solar site that ages fastest: federal credits, state rebates and utility export rules change, sometimes at short notice, and people keep searching for a program long after it has changed or ended. A page that gives the current status in plain words wins that search; a page still promising last year’s credit loses the visitor’s trust in everything else you wrote."),
        p("So incentive content lives on a few permanent pages, not in a new blog post every year:"),
        li("one page per program or rule, updated in place, with a “last checked” date at the top"),
        li("links to the official source — the tax authority, the state energy office, the utility tariff"),
        li("who qualifies, in general terms: buying with cash, a loan, a lease or a PPA is treated differently"),
        li("no incentive folded into a headline price, and no “free solar” wording anywhere"),

        h2("Solar savings calculator and payback estimates with stated assumptions"),
        p("“How much will solar save me” sits behind most solar searches, and a calculator answers it on your site instead of a marketplace’s. It helps search and sales only when the method is visible:"),
        li("inputs the visitor knows — monthly bill, ZIP code or utility, roof direction and shade"),
        li("assumptions written next to the result: electricity price and how it may change, panel output loss over the years, which incentive status was used"),
        li("a range rather than one exact figure, with a line saying the site survey sets the real numbers"),
        li("the method explained in text on the page, because Google and AI assistants read words, not a script"),
        p("The result leads to the quote form with the inputs filled in, so the first call starts from the buyer’s numbers."),

        h2("Solar install case pages: system size, panels, inverter and roof type"),
        p("Buyers want to see a system like the one they are weighing, on a house like theirs. A case page per install answers that and supports a town page and a product page:"),
        li("the roof — tile, shingle, metal or flat, orientation, shade"),
        li("system size in kW, panel model and count, inverter type, battery if any"),
        li("the time from signed contract to permission to operate"),
        li("production from the monitoring app and bill changes, only when the owner agrees to share them"),
        p("Each case goes live only with the customer’s consent, without the street address. Stock photos prove nothing; one documented install a few streets away does."),

        h2("Trust signals in solar company SEO: licenses, warranties, reviews and no-pressure selling"),
        p("Every installer inherits the industry’s reputation for pushy door-to-door sales and companies that vanished after the install. Buyers search with that in mind — “is [company] legit”, “[company] complaints”, “solar scams [state]” — so the results for your name are part of your sales process. What helps:"),
        li("license numbers, insurance and certifications written as text, with where to verify them"),
        li("warranties set out one by one: panel and inverter product warranties, the production warranty and your own workmanship warranty"),
        li("a review request once the system is switched on, and factual replies to bad reviews"),
        li("sales pages that show how a quote is prepared, with no countdown offers or pressure to sign at the first meeting"),

        h2("How to advertise for solar: marketing companies, shared leads and owned search"),
        p("“How to advertise for solar” has many answers: door-to-door teams, paid social, Google Ads, events, appointment setting and lead lists, and solar marketing companies usually sell a mix of them. Shared leads are the most common. A homeowner fills in one “see if your roof qualifies” form and gets calls from several installers within minutes, so you open the conversation as one more voice they are trying to get off the phone."),
        p(
          "Search works the other way round: someone who read your battery page and then checked your reviews has chosen to contact you. Many installers keep buying leads while search grows and compare what a signed contract costs in each channel. My part is search: the site, the profile and AI answers. How monthly work runs is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page.",
        ),

        h2("Solar website design as part of solar SEO"),
        p("Many solar sites are a single landing page made for paid traffic, with nothing for search to read, or a template that crawls on a phone. When SEO needs pages the site cannot hold, the site is rebuilt first. A solar website that works for search has:"),
        li("its own page for each product, area and case, with text the team can edit"),
        li("a short quote form with qualifying questions — own or rent, roof age, average bill, utility"),
        li("fast mobile pages, with structured data built in"),
        p(
          "A site like this costs 700–1,400 €, and a full site with a case library and a calculator starts from 2,000 €; design is included in both. How I build them is on the ",
          link("website development", "/services/website-development"),
          " page.",
        ),

        h2("Solar SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Solar buyers ask AI assistants what they would type into Google, only longer: “which solar installers in Tucson have the best reviews”, “is [company] legit”, “is a battery worth it if my utility pays less for exported power”. ChatGPT, Perplexity and Google’s AI Overviews reply with a few names and the reasons for each. The trade names for working on those replies are GEO (generative engine optimization) and AEO (answer engine optimization); for an installer they mean:"),
        li("service area, products, years installing, licenses and warranties stated as plain sentences"),
        li("dated answers to cost, payback and incentive questions on your own pages"),
        li("structured data for the business, its services and the areas it covers"),
        li("the same name and details on your site, Google, review sites and solar quote marketplaces"),
        p(
          "I record what assistants say about you, and whom they suggest instead, before the work and again months later. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Measuring solar SEO in qualified quote requests and signed contracts"),
        p("Visits from students reading how photovoltaic cells work pay for nothing. Reports count qualified quote requests: an owner, inside your service area, with a roof or site that can take a system. Every form and call carries its source page into your CRM, so you see which product pages, towns and cases bring requests and, where the CRM records it, which became signed contracts. Rankings stay in the report as the explanation, not the result."),

        h2("How much SEO for solar companies costs"),
        li("Solar SEO audit — website, Google profile, results for your name and AI answers: from 250 €, one-off, with fixes ranked by impact."),
        li("One-off work — product, area and incentive pages, case page templates, calculator text, structured data: 250–700 €."),
        li("Monthly SEO for a solar company — new pages, incentive updates, reviews, AI visibility and reports: from 800 € per month; for US installers in competitive states and metros from 1,300 €."),
        p(
          "First results usually show after about 1.5 months, and steady growth in 3–6 months. All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for solar companies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a solar company cost?", "An audit is from 250 € one-off and single tasks are 250–700 €. Monthly SEO starts at 800 €, and at 1,300 € for US installers in competitive states and metros. Tell me your service area, your products and where appointments come from now, and you get a fixed price."],
          ["How long does solar SEO take to bring quote requests?", "First results usually show after about 1.5 months, and steady growth in 3–6 months. Profile fixes and trust pages tend to move first; product and area pages in crowded states take longer."],
          ["Should a solar installer stop buying leads once SEO starts?", "Not at the start. Keep the channels that pay while search grows, then compare what a signed contract costs from each. Reports split quote requests by source, so the decision rests on your own numbers."],
          ["How do you keep incentive and net metering pages up to date?", "Each program has one permanent page with a “last checked” date and a link to the official source. I recheck those pages during monthly work and whenever the rules change, and I do not publish amounts or deadlines that the source does not state."],
          ["Does a solar savings calculator help SEO?", "Yes, when the method is written on the page in text. The script itself means little to Google; the explained inputs, assumptions and ranges are what search engines and AI assistants can read and quote."],
          ["Why does ChatGPT name other solar companies and not mine?", "Usually because their service area, licenses, warranties and reviews are easier to find and check. Plain facts on your site and matching details on Google and review sites raise the chance; nobody can guarantee a mention, and I record the answers before and after the work."],
          ["Can you do SEO for a US solar company from Poland?", "Yes, everything happens online and in English. Warsaw afternoons and evenings fall on the US morning and midday, which leaves room for a call before your crews return from site. Invoices are in EUR or another currency by agreement, and the first call of 15–30 minutes is free."],
          ["Do you also build solar websites?", "Yes. A site costs 700–1,400 €, a full site with a case library and a calculator from 2,000 €, with design included. If the current site can carry the new pages, I work on it as it is."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your solar company: what to send me"),
        p(
          "Send your website and Google profile links, the states and towns you install in, the utilities there, which jobs you want more of — residential, commercial, batteries, service — and where appointments come from today. In return you get the first steps I would take and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
