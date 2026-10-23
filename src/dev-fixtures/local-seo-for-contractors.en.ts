// Landing page fixture: Local SEO for contractors (EN), topic 7b.
// Semantic core: research/pseo/page-core/contractors.md: local seo for
// contractors 480, local seo for general contractors 70, local seo services
// for contractors 30.
// Intent: research/pseo/intent-check-contractors.md — «local seo for
// contractors» vs «seo for contractors» 0 shared URLs → separate page; this
// one is about the map results: Google Business Profile, service areas,
// reviews, listings, area pages. The website side lives on 7a.
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, li, link, k } from "./pt";

export const localSeoForContractorsEn = {
  lang: "en",
  group: "local-seo-for-contractors",
  slug: "local-seo-for-contractors",
  title: "Local SEO for contractors",
  heading: "Local SEO for Contractors",
  excerpt:
    "I do local SEO for contractors: the Google Business Profile, service areas, reviews and listings, so your business shows up in the map results when homeowners nearby search for your kind of job.",
  seo: {
    metaTitle: "Local SEO for Contractors: Google Maps, Reviews | Bandziuk",
    metaDescription:
      "Local SEO for contractors: Google Business Profile, service areas, reviews, listings and area pages, so homeowners nearby find you in the map. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Google Maps + reviews", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Top 3 on the map", "4.9 ★ from real jobs", "Your service area", "Call now"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Local SEO audit for a contractor: Google Business Profile, listings, website", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Google Business Profile and listings set-up for a contractor", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly local SEO for a contractor", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with local SEO for contractors",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "A complete Google Business Profile", text: "Categories, services, service area, photos of real jobs" },
        { _key: k("o"), iconName: "message-circle", title: "A review routine after every job", text: "A text with a direct link, answers within days" },
        { _key: k("o"), iconName: "link", title: "Consistent listings and directories", text: "The same name, address and phone everywhere" },
        { _key: k("o"), iconName: "layers", title: "Area pages on your website", text: "Projects and reviews from each town you cover" },
        { _key: k("o"), iconName: "sparkles", title: "Local visibility in AI answers", text: "Facts assistants can check and quote" },
        { _key: k("o"), iconName: "phone", title: "Calls from the map, counted", text: "Tracked separately from the website and ads" },
      ],
      prices: [
        { _key: k("r"), label: "Local SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly local SEO for a contractor", value: "from 800 € / month", note: "profile, reviews, area pages", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: local search results I have worked on",
      subtitle:
        "Local service businesses whose calls come from Google Maps and local searches: an auto repair shop, a wheel-repair workshop, a tyre-storage business and a renovation company.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for local SEO for your contracting business",
      subtitle: "I reply within one business day with what I would fix first in your Google profile and a fixed price.",
      contextLabel: "Business name or Google Maps link",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Are you in the map results for your main job?", options: ["Yes, top 3", "Somewhere lower", "Not at all", "Not sure"] },
        { _key: k("z"), question: "Do customers come to your address?", options: ["Yes, we have an office", "No, we go to them"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do local SEO for contractors: the work that puts your business in the map results when someone nearby searches for your kind of job. For a contractor those three businesses on the map are often where most calls come from — they sit above the regular results, show a rating and a call button, and homeowners rarely scroll past them."),

        h2("How Google picks the contractors in the map results"),
        p("Google ranks local businesses on three things:"),
        li("relevance — how well your profile and website match the job searched for"),
        li("distance — how close the searcher is to your business or your service area"),
        li("prominence — reviews, mentions on other sites, links and how well known the business is"),
        p("Distance you cannot change. Local SEO for contractors works on the other two, and on making sure nothing in your profile holds you back."),

        h2("Google Business Profile for contractors: categories, services and service area"),
        p("The profile is the core of local SEO for a contractor. What I set up and keep current:"),
        li("a primary category for the job you most want — “Roofing contractor”, “Kitchen remodeler” — not only “General contractor”, plus secondary categories for the rest"),
        li("each service listed with a short description and a price range where you can give one"),
        li("a service area that matches the towns you really work in"),
        li("photos of real jobs, added every week or two, with the job named"),
        li("hours, a direct phone number and a link to the matching page on your website"),
        li("answers to the common questions in the profile itself"),

        h2("Service-area businesses: local SEO for contractors without an office"),
        p("Most contractors go to the customer, so Google treats them as a service-area business: the address can be hidden, and the profile shows the area instead. That is fine for ranking, but it brings rules contractors often break by accident:"),
        li("the address must be a real place you work from — not a virtual office or a mailbox"),
        li("the business name must be the real name, without keywords added to it"),
        li("one profile per real location; several profiles at one address get suspended"),
        p("A suspended profile disappears from the map until it is reinstated, which can take weeks. Setting it up correctly costs less than getting it back."),

        h2("Reviews for contractors: how many, how fresh, what they say"),
        p("Reviews move a contractor up the map and decide whether the homeowner calls. What counts is not only the score but how many there are, how recent they are and what they mention. The routine I set up:"),
        li("every customer is asked at the end of the job, by text with a direct link to the review form"),
        li("every review gets an answer within a few days, including the bad ones"),
        li("customers are asked to mention the job and the town in their own words"),
        p("Bought reviews, reviews only from happy customers and discounts in exchange for reviews break Google’s rules and are easy to detect, so none of them is used."),

        h2("Local citations and listings for contractors"),
        p("Your business is listed in many places: directories, review sites, platforms like Houzz, Yelp or Angi, the local chamber, supplier “find an installer” pages. Google compares them. If the name, address or phone number differ, it trusts the profile less. I check the main listings, correct what is wrong and add the ones that matter in your country and trade. Hundreds of low-quality directory submissions are not part of this — they bring nothing."),

        h2("Local SEO for general contractors: one profile, many jobs"),
        p("A general contractor has one profile but sells many jobs, and the map results for “basement finishing” and for “roof repair” are separate. The profile carries the main category and secondary ones, every service is listed, photos cover the different kinds of work, and each service has its own page on the website. That is how one general contractor shows up for several jobs instead of only for “general contractor near me”."),

        h2("Area pages on the website and local SEO"),
        p("The map results look at your website too. A page for each town you cover — with projects, reviews and details from there — helps the profile rank in those towns and also ranks on its own in the regular results. Pages that only swap the town name in the same text do the opposite: Google filters them out."),
        p(
          "The website side of contractor SEO — service pages, technical fixes, content — is described on the ",
          link("SEO for contractors", "/seo-for-contractors"),
          " page.",
        ),

        h2("Local AI search for contractors: how ChatGPT and Google AI Overviews pick local businesses (GEO, AEO)"),
        p("When a homeowner asks ChatGPT, Perplexity or Google’s AI Overviews to recommend a contractor nearby, the assistant puts the answer together from the same sources as the map: the business profile, reviews, listings and your own pages. That makes local SEO the base of generative engine optimization (GEO) and answer engine optimization (AEO) for a contractor:"),
        li("the same business details on every listing, so the assistant is sure who you are"),
        li("reviews that name the job and the town, which assistants quote"),
        li("services, areas, licence and insurance written as text on your website"),
        li("structured data that links the website to the profile"),
        p(
          "I check how assistants describe your business before and after the work. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How local SEO for contractors is measured"),
        p("Positions in the map change with where the searcher stands, so a single “rank” says little. I report what matters to a contractor: calls and direction requests from the profile, estimate requests from the website, the map position measured on a grid across your service area, and the number and score of reviews month by month. Calls from the profile are tracked separately from calls from ads, so you see what each channel brings."),

        h2("How much local SEO for contractors costs"),
        li("Local SEO audit — profile, listings, reviews and website: from 250 €, one-off. You get a list of fixes in order of impact."),
        li("One-off set-up — profile, categories, services, listings clean-up, review routine: 250–700 €."),
        li("Monthly local SEO for a contractor — photos and updates, reviews, listings, area pages and reporting: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "For many contractors a correct profile and a working review routine bring most of the effect, and the audit shows whether monthly work is needed. Local SEO for other kinds of businesses is described on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page; full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Local SEO for contractors: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What is local SEO for contractors?", "It is the work that puts a contractor in the map results and the local search results when homeowners nearby search for the job: the Google Business Profile, reviews, listings and area pages on the website."],
          ["How long does local SEO take for a contractor?", "Profile corrections and new categories can show in the map within a few weeks. A review routine and area pages build up over two to four months, longer in big cities and for competitive jobs."],
          ["Can a contractor rank in the map without an office address?", "Yes. A contractor who goes to customers is a service-area business: the address is hidden and the profile shows the area. The address behind it must still be real; virtual offices get profiles suspended."],
          ["Can you rank us in towns where we have no office?", "In the map results it is hard: distance to the business counts. In the regular results and AI answers, a strong area page with real projects and reviews from that town often does rank."],
          ["How many reviews does a contractor need?", "There is no fixed number. What matters is having more recent reviews than the businesses you compete with in the map, and a steady flow of new ones after every job."],
          ["What if our Google Business Profile is suspended?", "I check what caused it — usually the address, the name or duplicate profiles — fix it and file the reinstatement request with the proof Google asks for."],
          ["Do you do local SEO for contractors in other countries?", "Yes. Local SEO is done remotely: the profile, listings for your country and trade, and the search data for your towns. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order local SEO for your contracting business: what to send me"),
        p(
          "Send the business name, the link to your Google Maps profile and website, the jobs you want more of and the towns you cover. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
