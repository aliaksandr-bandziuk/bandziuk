// Landing page fixture: SEO for Realtors and Real Estate Agents (EN), group
// «seo-for-realtors». New page.
// Semantic core: ref/real-estate-finance.md / .csv (US) and BRIEF.md: seo for
// realtors 1,000 (H1, metaTitle, several H2) · seo for real estate agents /
// real estate agent seo / seo for real estate agent 260 each (H2) · local seo
// for real estate agents 110, local seo for realtors 30 (local H2) · best seo
// companies for realtors 90, seo services for real estate agents 30 (provider
// part of the ads H2) · mls website for realtors 480, idx website for realtors
// 390 (IDX H2, SEO side only) · seo keywords for realtors 10, seo tips for real
// estate agents 10 (covered by neighborhood and seller-question sections).
// Generic «real estate seo» 1,000 / «seo for real estate» 1,000 belong to
// /seo-for-real-estate and are not targeted here.
// PAA: How much does real estate SEO cost? (cost H2 + FAQ) · Are Google Ads
// worth it for realtors? · Which one is better, SEO or Google Ads? (H2 + FAQ)
// · What CRM do most realtors use? (lead-capture H2 + FAQ). «How to create a
// website for real estate?» is left to /realtor-website-design (its FAQ).
// Intent: ref/intent-check-real-estate-finance.md — «seo for realtors» vs
// «real estate seo» 0 of 10 shared URLs: the realtor SERP is realtor-tech
// vendors (Luxury Presence, Follow Up Boss, Sierra Interactive) and agencies,
// the generic one is Zillow, HousingWire and SEO tools → separate page from
// /seo-for-real-estate. «seo for realtors» vs «seo for real estate agents» 3
// shared → one page. «realtor website design» vs «seo for realtors» 0 shared
// → design is /realtor-website-design (linked as sibling).
// Angle: the individual agent — name searches and personal brand,
// neighborhood pages, hyperlocal market reports, IDX/MLS from the SEO side,
// Google Business Profile for agents, reviews on Zillow / Realtor.com / Google,
// Fair Housing and brokerage advertising rules (general), valuation and saved
// searches into the CRM, video tours, AI answers.
// NOT on this page: competing with portals, listings-catalog technical SEO,
// agency multilingual sites (/seo-for-real-estate, /real-estate-agency-website
// — linked once as the brokerage/developer pages); design, templates, IDX
// builder vs custom site, mobile layout (/realtor-website-design); Google Ads,
// Zillow Premier Agent and social ads (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; Cyprus VIP Estates in portfolio.
import { p, h2, h3, li, link, k } from "./pt";

export const seoForRealtorsEn = {
  lang: "en",
  group: "seo-for-realtors",
  slug: "seo-for-realtors",
  title: "SEO for realtors and real estate agents",
  heading: "SEO for Realtors and Real Estate Agents",
  excerpt:
    "I provide SEO for realtors and real estate agents: your name at the top when referrals look you up, neighborhood pages and market reports that bring buyers and sellers, reviews on Google and Zillow, Fair Housing-safe wording and a place in AI answers, reported in valuation requests and calls.",
  seo: {
    metaTitle: "Realtor SEO: Name, Neighborhood and AI Search | Bandziuk",
    metaDescription:
      "SEO for real estate agents: name searches, neighborhood pages, market reports, Google and Zillow reviews, AI answers, leads into your CRM. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Name, neighborhood and seller searches", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Realtor in Brookside", "What’s my home worth?", "Agent bio + 5★ reviews", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Realtor SEO audit: name searches, website, IDX setup, Google Business Profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a real estate agent: bio page, neighborhood pages, valuation forms, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a realtor or real estate team", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for real estate agents",
      items: [
        { _key: k("o"), iconName: "search", title: "Your name at the top of Google", text: "Bio page, profiles and brokerage roster that agree" },
        { _key: k("o"), iconName: "map-pin", title: "Neighborhood and community pages", text: "Written from your sales, with your photos and video" },
        { _key: k("o"), iconName: "file-text", title: "Hyperlocal market reports", text: "Monthly numbers homeowners search for before selling" },
        { _key: k("o"), iconName: "shield-check", title: "Fair Housing and brokerage rules", text: "Describe places, not people; brokerage name shown" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "Facts and reviews assistants can repeat" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in valuations and calls", text: "Every lead in your CRM with the page it came from" },
      ],
      prices: [
        { _key: k("r"), label: "Realtor SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a real estate agent", value: "from 800 € / month", note: "neighborhood pages, reviews, AI, reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Real estate SEO portfolio: property and service websites I have built and optimized",
      subtitle:
        "For Cyprus VIP Estates, a luxury real estate company, I built the site from scratch and run its SEO every month; property search with filters and a map, project videos, five language versions including Hebrew and enquiries that go straight into the CRM all come from that work. Next to it: a Warsaw renovation and property-investment company, an education agency covering ten countries, a 3D laser scanning and BIM company whose organic traffic grew 29× after a rebuild, and a Warsaw auto repair shop. What an agent needs from this work is the same thing: pages for the places and questions clients search for, and every enquiry landing in the CRM.",
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
      title: "Get a quote for SEO for your real estate business",
      subtitle: "I reply within one business day with what I would fix first — name searches, neighborhood pages or your profile — and a fixed price.",
      contextLabel: "Your name, team or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you want more of?", options: ["Seller listings", "Buyer clients", "Both", "Relocation clients"] },
        { _key: k("z"), question: "How do you work?", options: ["Solo agent at a brokerage", "Real estate team", "Broker-owner with a small office", "New agent"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("SEO for realtors is the work that makes a real estate agent show up when people in your market search for your name, your neighborhoods or how to sell their home, and turns those visits into buyer and seller conversations in your CRM. I do it myself, as a single SEO consultant who also builds websites, for individual agents and small teams, so the person who reviews your site is the person who writes the neighborhood pages and changes the code."),

        h2("What SEO for real estate agents covers: your name, your neighborhoods and seller leads"),
        p("Most of an agent’s business comes from people who already know them or were referred, and most of those people still type the agent’s name into Google before they call. The rest search for a place or a decision: “realtor in Brookside Kansas City”, “best time to sell a house in Raleigh”, “condos near Lake Merritt”. Real estate agent SEO works on the four places where those searches end:"),
        li("your own website: bio page, neighborhood pages, market reports, valuation and contact forms"),
        li("your Google Business Profile and the map results for “realtor near me”"),
        li("your profiles and reviews on Zillow, Realtor.com and your brokerage’s site"),
        li("answers in ChatGPT, Perplexity and Google AI Overviews"),
        p(
          "This page is for individual agents and teams. Brokerages that run a full listings catalog and developers selling a project have different problems, described on the ",
          link("SEO for real estate", "/seo-for-real-estate"),
          " and ",
          link("real estate agency website", "/real-estate-agency-website"),
          " pages.",
        ),

        h2("Realtor name searches: personal brand SEO for an agent"),
        p("When a past client recommends you, their friend searches your name. If the first results are an old brokerage profile with a dead phone number, a Zillow page with three reviews and someone else with the same name, part of that referral is lost. Name searches are the first thing I fix for an agent, because they are one step from a signed listing agreement:"),
        li("a bio page on your own domain, titled with your full name, “Realtor”, your brokerage and your main area"),
        li("a current headshot, years in the business, designations such as ABR or CRS if you hold them, languages spoken and the neighborhoods you work"),
        li("Person structured data linking the bio to your Google Business Profile, Zillow and Realtor.com profiles and social accounts"),
        li("the same name, phone and brokerage everywhere, including the brokerage’s agent roster"),
        p("Agents who change brokerages lose the most here. Owning your domain keeps name searches pointing to you, whichever brokerage holds your license."),

        h2("Neighborhood pages for real estate agents: community SEO for buyers and sellers"),
        p("A neighborhood page is the main landing page in SEO for realtors. Broad “homes for sale” searches go to the big listing sites; what an agent wins is the local knowledge behind searches like “living in Brookside” or “Highland Park vs Lakeview”. A page that ranks answers what a buyer or a relocating family wants to know:"),
        li("where the neighborhood starts and ends, the streets and subdivisions inside it, and a map"),
        li("the housing: ages and styles of homes, typical lot sizes, condo buildings, HOA fees in general terms"),
        li("commute times, parks, shops, transit, and a link to the official school district site"),
        li("your own photos and a short walk-through video"),
        li("a link to current listings in the area and to your market report for it"),
        h3("How many neighborhood pages a realtor needs"),
        p("Start with the areas where you already have sales and can write from experience — usually five to ten. A hundred pages copied from one template and filled with census figures is what Google’s spam policies call scaled content abuse, and buyers notice it too."),

        h2("Hyperlocal market reports: monthly neighborhood updates in real estate SEO"),
        p("Homeowners search “home values in [neighborhood]” and “is it a good time to sell in [city]” months before they call an agent. A short monthly or quarterly report per area answers that: median sale price, days on market, months of inventory, price per square foot, and a few sentences on what you saw at showings and offers. The numbers come from your MLS; check its rules on publishing statistics and attribution before the first report goes out."),
        p("Each report links to its neighborhood page and to your valuation form. The page keeps one address while each new month replaces the old figures, so links and rankings build up; the same report goes to your sphere by email."),

        h2("IDX and MLS listings on a realtor website: what helps SEO and what does not"),
        p("An IDX feed shows MLS listings on your site, and most agent platforms — Luxury Presence, Real Geeks, Placester, or an iHomefinder plugin on WordPress — include one. Whether those pages help you in search depends on how they are built:"),
        li("listings loaded in an iframe or on the vendor’s subdomain count for the vendor, not for your domain"),
        li("the same listing descriptions appear on every IDX site in the MLS, so single listing pages rarely rank on their own"),
        li("listing searches embedded in your neighborhood pages, under your own text, do help those pages"),
        li("saved searches and listing alerts are worth keeping, because they turn a browsing buyer into a contact"),
        p(
          "I check what your IDX setup actually shows to Google and work around it. If the platform blocks basic changes such as page titles or addresses, the options are on the ",
          link("realtor website design", "/realtor-website-design"),
          " page.",
        ),

        h2("Local SEO for realtors: Google Business Profile and reviews on Zillow, Realtor.com and Google"),
        p("Google allows individual practitioners, real estate agents included, to have their own Business Profile, separate from the brokerage’s. An agent who meets clients at properties rather than at an office sets it up as a service-area business with the address hidden. What matters:"),
        li("the primary category “Real estate agent”, the areas you serve, and a link to your bio or main neighborhood page"),
        li("a name that matches real life — your name, or your name and brokerage — with no keywords added"),
        li("a review request after every closing and a reply to each review that gives away nothing private about the deal"),
        li("Zillow and Realtor.com profiles kept current, with sales history and reviews, because buyers and AI assistants read them too"),
        p(
          "Map results, categories and review work in more depth are on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Fair Housing and brokerage advertising rules in real estate agent SEO"),
        p("Neighborhood pages and market reports are advertising, and in the US they fall under fair housing law and your state’s license law. In general terms:"),
        li("describe the property and the place — square footage, parks, commute, schools by name — not the people who live there or who would “fit in”"),
        li("phrases about who an area is “perfect for” are where most problems start"),
        li("link to official school and crime data instead of rating schools or calling an area “safe”"),
        li("display the brokerage name the way your state requires; many agents also add their license number and the Equal Housing Opportunity mark"),
        p("Many states and brokerages also have rules on team names and on how prominent the brokerage name must be next to yours. Check with your managing broker or your state’s real estate commission; I write within the rules you give me, and nothing here is legal advice."),

        h2("Lead capture on a realtor website: home valuation, saved searches and your CRM"),
        p("SEO pays only when a visit becomes a conversation you can follow up. On an agent’s site that means a few clear paths:"),
        li("a home valuation page for each main area, offering a comparative market analysis from you rather than an automated number"),
        li("saved-search and listing-alert sign-up for buyers who are months away"),
        li("call and text buttons on every mobile page"),
        li("every form sent straight to your CRM — Follow Up Boss, kvCORE, Lofty or the one your brokerage provides — with the page it came from"),
        p("Then the report shows valuation requests, buyer registrations and calls from search by neighborhood, with rankings next to them, not instead of them."),

        h2("Video tours and YouTube in SEO for realtors"),
        p("Neighborhood walk-throughs and “moving to [city]” videos are searched on YouTube and appear in Google results. Each video gets the place name in its title, chapters, and an embed on the matching neighborhood page with a written summary. A video that lives only on Instagram does none of that in search."),

        h2("SEO for realtors in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Buyers and sellers now ask ChatGPT, Perplexity or Google’s AI Overviews questions like “who are good listing agents in Naperville”, “what is it like to live in East Nashville” or “how do I choose a realtor for a first home”. The assistant answers with a few names and the reasons it found for each. Work on those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For an agent it means:"),
        li("your areas, specialties — first-time buyers, relocation, luxury, condos — brokerage and languages written as plain sentences on your bio"),
        li("neighborhood pages that answer real questions directly, with you as the named author"),
        li("the same facts and a steady flow of reviews on Google, Zillow and Realtor.com"),
        li("Person and RealEstateAgent structured data tied to those profiles"),
        p(
          "I check how assistants describe you and which agents they name instead, before the work and after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("SEO or Google Ads for realtors: which one is better"),
        p("Paid leads — Google Ads, Zillow Premier Agent, social ads — start the day you pay and stop the day you stop. SEO takes months, but a neighborhood page or a name search that ranks keeps bringing contacts without a cost per click, and it builds the reputation referrals depend on. I do not run ads; I work on search and AI answers."),
        p(
          "Agent website platforms sell SEO packages too. Ask any provider who writes your neighborhood pages, whether reports show valuation requests and calls, and whether you keep the domain and the content if you leave. My approach to ongoing work is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page.",
        ),

        h2("How much SEO for realtors costs"),
        li("Realtor SEO audit — name searches, website, IDX setup, Google Business Profile, reviews and AI answers: from 250 €, one-off."),
        li("One-off work — bio page, neighborhood pages, valuation forms, structured data, tracking into the CRM: 250–700 €."),
        li("Monthly SEO for a real estate agent or team — new neighborhood pages, market reports, reviews, AI visibility and reports: from 800 € per month; in big US metros and other very competitive markets from 1,300 € per month."),
        p(
          "A solo agent in a smaller market often gets most of the effect from the audit and a handful of strong neighborhood pages. The ",
          link("SEO audit", "/services/seo-audit"),
          " page describes the audit, and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for realtors: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does real estate SEO cost for an agent?", "With me, an audit costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in big US metros and other very competitive markets. After a short description of your market and areas I give a fixed price."],
          ["Are Google Ads worth it for realtors?", "They can be, for a new area, a listing push or a seller campaign with a clear offer, as long as every lead gets a fast follow-up. They stop when the budget stops. I do not run ads; SEO is the channel that keeps working between campaigns."],
          ["Which one is better, SEO or Google Ads?", "Neither replaces the other. Ads buy attention now; SEO builds pages and a reputation that bring contacts for years with no cost per click. With a limited budget, name searches, a Business Profile with reviews and a few neighborhood pages are usually the best first spend."],
          ["What CRM do most realtors use?", "There is no single answer: Follow Up Boss, kvCORE and Lofty are common, and many agents use the CRM their brokerage provides. For SEO, what matters is that every form and call from the website reaches that CRM with the page it came from."],
          ["Do IDX listings on my site help SEO?", "Rarely on their own, because the same listings appear on every IDX site in your MLS, and many feeds load in an iframe that counts for the vendor. Listing searches placed inside your neighborhood pages, under your own text, do help those pages rank."],
          ["How long does SEO for realtors take?", "Name searches and the Business Profile can improve within weeks. New neighborhood pages usually need three to six months to bring steady contacts, longer in large metros where many agents write about the same areas."],
          ["Does my brokerage need to approve my website?", "Often yes. Many brokerages review agent websites and advertising, and state rules usually require the brokerage name on them. Check with your managing broker; I can send pages for review before they go live."],
          ["Can a consultant in Poland do SEO for a US realtor?", "Yes. All the work is remote and in English. My afternoon and evening in Central European Time overlap with the US working day, so calls fit East Coast and Central mornings. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for realtors: what to send me"),
        p(
          "Send your website, your name as it appears on Zillow and Google, your brokerage, the neighborhoods and towns you want more business in, whether you want more buyers or more sellers, and which CRM you use. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
