// Landing page fixture: SEO for construction companies (EN), variant A layout.
// Semantic core: research/pseo/page-core/construction.md (SEO group):
// construction company seo 480, seo for construction company / companies 320,
// construction seo company 320, construction seo 260, seo for construction 210;
// PAA: What is SEO in construction? How much should I expect to pay for SEO?
// Intent: research/pseo/intent-check-construction.md — 0 shared URLs with
// «construction company website» and with «seo for contractors» (topic 7, not
// targeted here).
import { p, h2, li, ol, link, k } from "./pt";

export const constructionSeoEn = {
  lang: "en",
  group: "seo-for-construction-companies",
  slug: "seo-for-construction-companies",
  title: "SEO for construction companies",
  heading: "SEO for Construction Companies",
  excerpt:
    "I do SEO for construction companies: Google Maps, service and area pages and project pages, so people planning a build or a renovation in your area find your company, not a directory.",
  seo: {
    metaTitle: "Construction Company SEO Services | Bandziuk",
    metaDescription:
      "SEO for construction companies: Google Maps, pages for each service and area, project pages Google can read, reviews tied to real jobs. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Google Maps + website", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Top 3 on the map", "Extensions in your town", "Projects with photos", "Request a quote"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Construction company SEO audit: website and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off construction SEO fixes: service and area pages, profile, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a construction company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with construction company SEO",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "A Google Business Profile for every office", text: "Categories, service areas and project photos kept current" },
        { _key: k("o"), iconName: "layers", title: "Pages for each service and area", text: "Built around what clients type: the job plus the town" },
        { _key: k("o"), iconName: "image", title: "Project pages search engines can read", text: "Type, location and size as text, next to the photos" },
        { _key: k("o"), iconName: "message-circle", title: "Reviews tied to finished jobs", text: "Asked at handover, answered within days" },
        { _key: k("o"), iconName: "code", title: "Construction business markup", text: "Services, areas and reviews readable by Google and AI" },
        { _key: k("o"), iconName: "trending-up", title: "A monthly report in enquiries", text: "Calls and quote requests, not positions alone" },
      ],
      prices: [
        { _key: k("r"), label: "SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly construction company SEO", value: "from 800 € / month", note: "maps, pages, reviews", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: search results on websites I have optimised",
      subtitle:
        "Closest to construction: an architecture studio whose organic traffic grew 29 times, and a renovation company. The others are local service businesses where the same work brought measurable search traffic.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "full-multilingual-website-development-and-seo-for-student-services",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your construction company",
      subtitle: "I reply within one business day with what I would fix first in your Google profile and website, and a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where does your work come from now?", options: ["Referrals", "Google", "Directories and portals", "Not sure"] },
        { _key: k("z"), question: "What do you build?", options: ["Homes", "Renovations", "Commercial projects", "Several of these"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for construction companies myself — the Google Business Profile, the website and the pages for services, areas and projects — so the person who audits the site is the one who fixes it. Construction SEO is local: a client looks for a specific job in a specific place, and most of them choose from the map results and the first few links."),

        h2("What construction company SEO covers: Google Maps, service pages and project pages"),
        p("SEO for a construction company is the work that makes the company appear when someone searches for the job they need — “house extension”, “loft conversion”, “commercial fit-out” — together with their town, and that makes its own website win the search for its own name. Three places decide this:"),
        li("the map results — three companies with a map, rating and phone number, shown above the regular results for local searches"),
        li("the regular results, where the company’s site competes with directories, lead-generation portals and big national firms"),
        li("AI answers — Google AI Overviews and assistants such as ChatGPT, which recommend local companies and quote what they can read about them"),
        p("The map results depend mostly on the Google Business Profile and reviews, the regular results on the website, and AI answers on both, plus facts written so a machine can quote them: services, areas, projects, years in business."),

        h2("Local SEO for construction companies: Google Business Profile and service areas"),
        p("For most construction companies the map block brings more enquiries than everything else together. What moves a company into it:"),
        li("the right primary category for what you mainly do, and secondary categories for the rest — not a single generic “Construction company”"),
        li("service areas that match where you really work, and an office address that is the same everywhere"),
        li("photos from real projects, added regularly, with the job named in the description"),
        li("services listed in the profile with short descriptions"),
        li("the same name, address and phone number on the website, the profile and the main directories"),
        p("A company with several offices gets a profile per office, each linked to its own page on the site. Fake addresses and virtual offices are not set up: Google suspends such profiles, and the company loses the map position it had."),

        h2("Construction SEO keywords: searches for a service plus a town"),
        p("Construction clients rarely search for “construction company”. They search for the job: “kitchen renovation”, “house extension”, “flat roof replacement”, “new build house”, usually with a town or district. Each such combination you actually sell needs a page that answers it:"),
        li("one page per service, with what is included, typical timing and a price range where you can give one"),
        li("one page per town or area you cover, with projects from that area"),
        li("a link between them: the service page lists the areas, the area page lists the services"),
        p("Before any work I pull the real search data for your services and towns, so pages are built around the phrases clients use and not around your internal names for the work."),

        h2("Project pages as SEO content for a construction website"),
        p("Finished projects are the strongest content a construction company has, and on most sites search engines cannot read them: a gallery of photos with no text says nothing to Google. A project page that ranks has the facts written out — type of work, location, size, duration, what the client needed — next to the photos, and links to the matching service and area pages."),
        p(
          "Every new project then becomes a new page that can be found for the job and the place. How such pages are designed is covered on the ",
          link("construction website design", "/construction-website-design"),
          " page.",
        ),
        p(
          "What the website itself needs — the pages, the portfolio your team updates, the quote form — is covered on the ",
          link("construction company website", "/construction-company-website"),
          " page.",
        ),

        h2("Reviews and trust signals in construction SEO"),
        p("Construction is an expensive decision, and clients read reviews more carefully than in most services. I set up a routine: the client is asked for a review at handover, every review gets an answer within a few days, and reviews mention the job and the area in plain words, which also helps the profile appear for those searches."),
        p("Credentials work the same way on the website: licences, insurance, warranties and memberships written as text and marked up as structured data, so both clients and search engines can read them. What is not done: bought reviews or reviews only from happy clients. Both break Google’s rules and are easy to detect."),

        h2("AI SEO for construction companies: visibility in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("More clients now ask ChatGPT, Perplexity or Google’s AI Overviews to recommend a builder before they open any website. Those answers are put together from what the assistant can read and trust: your Google profile, reviews, directory listings and your own pages. Getting into them is called generative engine optimization (GEO) or answer engine optimization (AEO), and for a construction company it is part of the same SEO work:"),
        li("services, areas, years in business and credentials written as plain facts an assistant can quote, not only shown in images"),
        li("structured data that names the company, its services and the areas it covers"),
        li("the same company details on the website, the profile and directories, so an assistant does not confuse you with another firm"),
        li("answers to the questions clients ask — price ranges, timing, permits — written on the service pages"),
        p(
          "I check how assistants describe your company before and after the work. More on this on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Construction SEO company, marketing agency or an SEO specialist"),
        p("A construction marketing agency usually sells a package: social media, paid ads, video, sometimes leads bought from portals, with SEO as one part of it. A construction SEO company focuses on search, but the work is often split between junior staff and templates. I am a single SEO specialist who also builds websites: the same person audits the profile, writes the service and area pages and fixes the code."),
        p("What I do not do: paid ads, social media management and lead buying. If you need those, an agency is the better choice, and SEO can still be done separately."),

        h2("Seasonality in construction SEO: start before the building season"),
        p("Searches for most construction work rise in late winter and spring, when people plan the year’s projects. New pages need weeks to months to rank, so work started in spring brings results in autumn. The useful moment to start is before the season, so the pages are in place when clients begin to search."),

        h2("How much SEO for a construction company costs"),
        li("SEO audit of the website and the Google Business Profile: from 250 €, one-off. You get a list of fixes in order of impact."),
        li("One-off work — service and area pages, profile clean-up, structured data: 250–700 €."),
        li("Monthly SEO for a construction company — local search, new pages, reviews routine and reporting: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "For many companies a correct profile and a handful of service and area pages give most of the effect, and the audit shows whether monthly work is needed at all. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
        p(
          "Contractors who sell remodels and repairs to homeowners will find more on the ",
          link("SEO for contractors", "/seo-for-contractors"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for construction companies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What is SEO in construction?", "It is the work that makes a construction company appear in Google and in the map results when people search for the job they need in their area: the Google Business Profile, pages for each service and area, project pages search engines can read, reviews and structured data. Paid ads are not part of SEO."],
          ["How much should a construction company expect to pay for SEO?", "An audit of the website and profile costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive cities. After a short description of the company I give a fixed price."],
          ["How long does construction SEO take to show results?", "Changes to the Google Business Profile can show in the map results within weeks. New service and area pages usually take two to four months to rank, longer in big cities. That is why it pays to start before the building season."],
          ["Do we need SEO if most of our work comes from referrals?", "Referrals also search: before calling, most people look the company up by name and check the reviews and projects. SEO makes sure they find your own site and a complete profile, and it adds clients who do not know anyone who has worked with you."],
          ["Is Google Ads better than SEO for a construction company?", "Ads bring enquiries from the first day and stop when the budget stops. SEO takes months but keeps working without paying per click. Many construction companies use ads for the season and SEO for the long term; I do the SEO part."],
          ["Does SEO help a construction company appear in ChatGPT and Google AI answers?", "Yes. Assistants recommend local companies from what they can read: the profile, reviews, service and area pages and structured data. A site that is only a photo gallery gives them nothing to quote."],
          ["Do you work with construction companies in other countries?", "Yes. Local SEO is done remotely: the profile, the website and the search data for your towns. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for a construction company: what to send me"),
        p(
          "Send the company name, a link to the website and to the Google Maps profile, the services you want more work for and the towns you cover. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
