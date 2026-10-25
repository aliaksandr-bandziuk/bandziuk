// Landing page fixture: Insurance agent SEO and insurance agency SEO (EN),
// group «insurance-agency-seo». New page.
// Semantic core (ref/real-estate-finance.md, insurance group, US): insurance
// agent seo 590 · seo insurance agent 590 (H1, metaTitle, several H2) ·
// insurance agency seo (same SERP, H1 and H2) · insurance marketing services
// 70 (vendor/consultant H2, not targeted as a phrase) · insurance splash 110 /
// reviews 10 / phone number 0 — a vendor’s brand, not targeted and not named.
// Design phrases — insurance agency website design 170 / 110, insurance agents
// websites 170, website template 70, examples 20 — belong to the sibling page
// /insurance-agency-website-design (linked once).
// PAA used: How much does real estate SEO cost? → cost H2 + FAQ for an
// agency; Which one is better, SEO or Google Ads? → FAQ; Can ChatGPT do SEO?
// → FAQ.
// Intent (ref/intent-check-real-estate-finance.md): «insurance agent seo» vs
// «insurance agency seo» share 8 of 10 URLs (Insurance Splash, Agency
// Revolution, Nationwide agent blog, Ritter, PFS, Thrive, Sonant, Reddit) →
// one page carrying both phrases in headings. «insurance agent seo» vs
// «insurance agency website design» 0 shared → the site build is the sibling
// page. SERP = vendors and agencies → buyers’ demand; the page sells the
// service and positions one consultant against bundled marketing platforms.
// Angles: independent vs captive agents (carrier names as search terms,
// carrier rules on own sites and co-branding — general, «check with your
// carrier»); line pages (auto, home, life, commercial, health/Medicare —
// federal marketing rules named generally, FMO review); local SEO per office
// and «near me»; reviews (Google’s ban on incentives, anti-rebating — general);
// state licenses, license numbers where required, YMYL; FCA authorization in
// the UK (general); coverage-question content and Spanish-language pages;
// quote forms vs calls, measurement in quotes and bound policies via the
// agency management system; AI answers (GEO, AEO).
// NOT on this page: site design, page layout, carrier-template vs custom site,
// quote-form design in depth (/insurance-agency-website-design); paid ads,
// lead buying, social media, email newsletters (not offered); real estate
// pages (not relevant to this topic).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; regulation in general terms.
import { p, h2, h3, li, link, k } from "./pt";

export const insuranceAgencySeoEn = {
  lang: "en",
  group: "insurance-agency-seo",
  slug: "insurance-agency-seo",
  title: "Insurance agent SEO and insurance agency SEO",
  heading: "Insurance Agent SEO and Insurance Agency SEO",
  excerpt:
    "I provide insurance agent SEO and insurance agency SEO for independent agencies and captive agents: a page for every line and niche you write, a Google Business Profile for each office, license details Google trusts and a place in AI answers, reported in quotes and bound policies.",
  seo: {
    metaTitle: "SEO for Insurance Agencies and Agents | Bandziuk",
    metaDescription:
      "SEO for independent and captive insurance agents: line pages, office profiles, reviews, license details, AI answers, reports in quotes. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Line pages + AI answers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Contractor insurance agent Austin", "Licensed in TX and OK", "Request a quote", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Insurance agency SEO audit: website, line pages, office profiles and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off insurance agent SEO work: line and niche pages, license details, structured data, quote tracking", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for an insurance agency", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with insurance agency SEO",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for every line and niche you write", text: "SR-22, condo HO-6, contractor liability, final expense" },
        { _key: k("o"), iconName: "map-pin", title: "A Google Business Profile for each office", text: "Categories, services, hours and the matching office page" },
        { _key: k("o"), iconName: "shield-check", title: "License details and careful wording", text: "States, license numbers, bylines, carrier rules respected" },
        { _key: k("o"), iconName: "message-circle", title: "Reviews that mention real help", text: "Asked after a claim or a renewal, answered without policy details" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "Lines, carriers, towns and languages assistants can repeat" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in quotes and bound policies", text: "Calls and quote requests by line, not positions alone" },
      ],
      prices: [
        { _key: k("r"), label: "Insurance agency SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for an insurance agency", value: "from 800 € / month", note: "line pages, profiles, AI visibility, reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: lead-generating websites I have built and optimized",
      subtitle:
        "Cyprus VIP Estates sells luxury real estate, another high-trust purchase where the client compares for weeks: I built the multilingual site with a CRM integration, so every enquiry lands in the sales system, and I still run its SEO every month. Next to it — an education agency with one structure across ten countries, a 3D laser scanning and BIM company that went from no leads to leads every week after the rebuild, a Warsaw renovation and investment company and a local auto repair shop. An insurance agency needs the same pieces: a page for each product, local visibility for each office and a short path from search to a request.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your insurance agency",
      subtitle: "I reply within one business day with the lines and offices I would work on first and a fixed price. Please do not include any client or policy details.",
      contextLabel: "Agency name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How does your agency work?", options: ["Independent agency, several carriers", "Captive agent of one carrier", "Agency group with several offices", "Solo agent, building a book"] },
        { _key: k("z"), question: "Which lines do you want more of?", options: ["Personal auto and home", "Life and final expense", "Commercial lines", "Health and Medicare", "A mix of these"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Insurance agent SEO is the work that brings people shopping for auto, home, life or business coverage to your agency’s own website when they search, and turns those visits into quote requests and calls. I do insurance agency SEO myself, as a single SEO consultant who also builds websites, for independent agencies, captive agents whose carrier allows their own site, and small agency groups with a few offices."),

        h2("What insurance agency SEO covers: line pages, office profiles, reviews and AI answers"),
        p("Someone who needs insurance types a coverage and a place — “cheap car insurance Dayton”, “homeowners insurance agent near me”, “workers comp for roofers Texas” — or a question such as “does renters insurance cover theft from a car”. Carriers, comparison sites and lead marketplaces hold much of the first page; an agency wins where local knowledge, a choice of carriers or a niche matters. The work covers:"),
        li("a page for each line of insurance you write and for the niches where you want more policies"),
        li("a Google Business Profile for every office, and the reviews behind it"),
        li("license details, author bylines and careful wording, because insurance is a YMYL topic"),
        li("technical fixes: speed, indexing, structured data, tracking of quote forms and calls"),
        li("visibility in ChatGPT, Perplexity and Google AI Overviews"),
        p("Insurance agent SEO and insurance agency SEO are one job: Google shows nearly the same results for both searches, so one plan serves a solo agent and a ten-producer agency."),

        h2("Independent vs captive insurance agent SEO: carrier names, co-branding and your own domain"),
        p("Independent agents can name the carriers they are appointed with, and that list is a search asset: people look for “Progressive agent in Columbus” when they want a person, not a call center. A page showing which carriers you place each line with answers that search."),
        p("Captive agents usually get a page on the carrier’s website, and many carriers set rules on separate sites, logo use, which products may be described and who approves the text. I ask for those guidelines first; check with your carrier’s marketing or compliance team. Where an own domain is allowed, it is the asset you keep if you change carriers or sell your book. Where it is not, the work moves to the carrier page fields you control, the Google Business Profile and reviews."),

        h2("Insurance agency SEO by line of business: auto, home, life, commercial and health"),
        p("One “Products” page listing twelve coverages cannot rank for any single one. Each line gets its own page, and niches get pages when there is demand and you can place the risk."),
        h3("Auto and home insurance pages for personal lines"),
        p("Personal lines searches combine coverage with place and situation: “SR-22 insurance Phoenix”, “insurance for a teen driver”, “homeowners insurance in a flood zone”, “condo insurance HO-6”. A page for each situation explains what affects the price, what you need for a quote and how bundling works, with state details such as minimum liability limits or wildfire exclusions."),
        h3("Life insurance pages: term, final expense and coverage for health conditions"),
        p("Life insurance buyers research for weeks. Pages answer early questions — how much coverage a family needs, term or whole life, buying with diabetes — and end with a call or a short appointment form."),
        h3("Commercial insurance pages by trade and contract requirement"),
        p("Business owners search by their trade and by what a client or a city asks of them: “general liability for landscapers”, “insurance for a contractor license”, “commercial auto for food trucks”, “workers comp for restaurants”. A trade page listing the usual coverages, the certificates clients ask for and your quoting questions brings fewer visits than personal lines, but larger premiums."),
        h3("Health insurance and Medicare pages"),
        p("Medicare Advantage and Part D marketing falls under federal rules with required disclaimers, and many agents work through an FMO that reviews materials. I write those pages within the rules you or your FMO give me, and nothing goes live before your compliance contact has seen it."),

        h2("Local SEO for insurance agencies: a Google Business Profile for each office and “near me” searches"),
        p("“Insurance agent near me” and “insurance agency in [town]” show a map with three businesses above the regular results. Each office where you meet clients gets a profile with the right category, your lines as services, hours, real photos and a link to that office’s page. An agent working from home hides the address and shows a service area instead."),
        p(
          "Several offices mean a page per town with its own team and lines, not one text with the town name swapped. The map side in depth is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Reviews for insurance agents: when to ask and how to answer"),
        p("Insurance is bought on trust and tested at a bad moment, so a review that mentions a claim handled well carries weight with readers and in the map results. Ask after real help — a claim, a renewal that saved money — with a direct link to the review form. Google’s rules forbid offering anything in return for a review, and many states limit gifts to clients under anti-rebating rules, so keep the request free of rewards."),
        p("Answer every review without confirming that the person is a client or mentioning a policy or claim: privacy rules for insurance customer data apply in public replies too. A calm, general reply to a one-star review about a denied claim is read by more people than the review."),

        h2("License numbers, YMYL and trust signals on an insurance agency website"),
        p("Google calls topics that affect someone’s money or safety “Your Money or Your Life” (YMYL) and expects stronger evidence of expertise on those pages. Insurance belongs there. On an agency site that means:"),
        li("the states each agent is licensed in, and license numbers where your state requires them in advertising — showing them on every page costs nothing"),
        li("an author byline on guides with the agent’s name, license and designations such as CIC or CPCU where they hold them"),
        li("a “last reviewed” date on pages that describe coverage, limits or state rules"),
        li("no promises of the lowest price or guaranteed approval; coverage described as typical, with the policy wording as the final word"),
        p("In the UK, brokers show their FCA authorization on the site; Canada and Australia have their own disclosure rules. Check with your state insurance department, carrier or compliance contact, and I write within what they require. Clients and AI assistants can verify a license in the state’s public lookup, so names on the site should match the license records."),

        h2("Insurance agent SEO content: coverage questions and Spanish-language pages"),
        p("Content that brings policyholders answers what people type before they call: “does home insurance cover a roof leak”, “how much is business insurance for an LLC”. I build the list from search data and the questions your account managers hear, draft from your notes, and a licensed agent approves every coverage statement."),
        p(
          "Many agencies serve clients who prefer Spanish. Pages written for them, not machine-translated, often bring calls English articles do not; see ",
          link("multilingual website development", "/services/multilingual-website-development"),
          ".",
        ),

        h2("Quote forms and calls: measuring insurance agency SEO in quotes and bound policies"),
        p("An agency earns on policies, not visits, so I report quotes and policies by line of business:"),
        li("calls from search, counted with a tracking number shown only to organic visitors while your main number stays everywhere else"),
        li("quote requests from each line page in GA4, with the page where the visit began"),
        li("bound policies, if your agency management system — Applied Epic, HawkSoft, EZLynx or another — records the lead source"),
        p("A form that asks for a Social Security or driver’s license number on the first step loses visitors and creates data to protect; leave that for the second contact. Reports hold counts, never client details."),

        h2("Insurance agent SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("People now ask ChatGPT, Perplexity or Google’s AI Overviews which agency in their town writes contractor insurance or whether umbrella coverage is worth it. Assistants treat insurance as YMYL and lean on sources that show licenses and plain facts. Work on those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For an insurance agency it means:"),
        li("lines written, carriers represented, states licensed, towns served and languages stated as plain sentences"),
        li("answers to common coverage questions on the line pages, with the agent’s byline and the state"),
        li("structured data that ties the agency, its offices and its agents together"),
        li("the same agency name, address and phone on the site, Google, carrier agent locators and association directories"),
        p(
          "I check how assistants describe your agency and which competitors they name, before the work and after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Insurance marketing platforms, SEO agencies or one consultant"),
        p("The first page for “insurance agency SEO” is insurance marketing platforms and agencies. Many sell a bundle — template website, newsletters, social posts, SEO — on a contract that ties the site to their platform. That suits an agency that wants all marketing in one place."),
        p("I work alone: I talk to the principal or producers, write the line pages, change the site on WordPress, Next.js or another system, and read the quote data. I do not run ads, sell leads or post on social media. Whoever you compare, ask who reviews the coverage content, whether reports show bound policies, and who owns the domain if you leave."),

        h2("Insurance agency SEO audit: what I check before monthly work"),
        p("Every project starts with an audit; for a one-office agency it is often most of the work. I check:"),
        li("which lines and niches have no page, or share one page"),
        li("indexing, speed on a phone and titles duplicated by a template"),
        li("the profile of each office and its reviews against nearby agencies"),
        li("whether license details, bylines and dates are on the pages that need them"),
        li("how ChatGPT and AI Overviews describe the agency today"),
        p(
          "You get a list of fixes ranked by impact; the ",
          link("SEO audit", "/services/seo-audit"),
          " page describes it in detail. If the site itself is the problem — a carrier template you cannot edit, or no site at all — see ",
          link("insurance agency website design", "/insurance-agency-website-design"),
          ".",
        ),

        h2("How much insurance agency SEO costs"),
        li("Insurance agency SEO audit — website, line pages, office profiles, competitors and AI answers: from 250 €, one-off."),
        li("One-off insurance agent SEO work — line and niche pages, license details, structured data, call and quote tracking: 250–700 €."),
        li("Monthly SEO for an insurance agency — new pages, profiles and reviews, AI visibility and reports in quotes: from 800 € per month; in very competitive metro markets from 1,300 € per month."),
        p(
          "How I plan ongoing work is described on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page, and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Insurance agency SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO cost for an insurance agency?", "An audit costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive metro markets. After a short description of the agency, its lines and its offices I give a fixed price."],
          ["Which is better for an insurance agency, SEO or Google Ads?", "Ads bring quote requests from the first day, but insurance clicks are among the more expensive ones and stop when the budget does. SEO takes months and keeps bringing calls afterwards. Many agencies run both; I do the SEO side and do not manage ads."],
          ["Can a captive agent do SEO?", "Yes, within the carrier’s rules. Some carriers allow an own website with approved content, others only the agent page on their site. In both cases the Google Business Profile and reviews are yours to work on. Check your carrier’s marketing guidelines first."],
          ["Do I need my license number on the website?", "Some states require license numbers in advertising, and showing them is a trust signal for clients, Google and AI assistants either way. List the states each agent is licensed in. Check your state’s rules with your insurance department or compliance contact."],
          ["How long does insurance agent SEO take?", "Profile fixes and better titles can show within weeks. New line pages usually need three to six months to bring steady quotes, longer for auto and home in large metro areas, where carriers and comparison sites hold most of the first page."],
          ["Can ChatGPT do SEO for an insurance agency?", "It can help with drafts. It cannot see your search data, your competitors or your site’s technical problems, and it does not know which carriers will write a given risk. Coverage statements published without a licensed agent’s review are a risk for both rankings and compliance."],
          ["Do you sell insurance leads?", "No. I work on your own website and profiles, so the requests come to you directly and are not shared with other agents. Lead buying, ads and social media are outside my work."],
          ["Can a consultant in Poland do SEO for a US insurance agency?", "Yes. All the work is remote and in English. My afternoon and evening in Central European Time overlap with the US working day, so calls fit East Coast and Central mornings. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order insurance agency SEO: what to send me"),
        p(
          "Send the agency website, whether you are independent or captive, the lines you want more policies in, the towns and states you serve, links to your Google Business Profiles and how you track quotes today. Please leave out any client or policy details. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
