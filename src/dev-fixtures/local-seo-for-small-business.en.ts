// Landing page fixture: Local SEO for Small Business (EN), group
// «local-seo-for-small-business».
// Semantic core: ref/small-business.md / small-business.csv (US) and BRIEF.md:
// local seo for small business 1,300, local seo small business / small
// business local seo 1,300 (local small business seo 1,300), seo for small
// local business 1,300, local seo services for small business 720, best local
// seo services for small business 110, best local seo company for small
// business 70, why local seo is important for small business 30 (benefits of
// local seo for small business 20).
// Intent: ref/intent-check-small-business.md — «local seo for small business»
// vs «small business seo» 1 shared URL → separate page. The head term’s SERP
// is guides (Reddit, BDC, US Chamber, Nextdoor), so this page teaches as well
// as sells: Google Business Profile, storefront vs service-area set-up,
// reviews, NAP consistency, citations (Yelp, BBB, Apple Business Connect, Bing
// Places), location and service pages, local links, measurement.
// NOT on this page: the whole SEO service — scope, consultant vs agency, audit,
// monthly work, DIY vs hiring, cost of general SEO
// (/seo-services-for-small-business); building the site
// (/small-business-website-design); local SEO for businesses in general
// (/services/local-seo-services, linked once); trades’ map results
// (/local-seo-for-contractors).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s segment.
import { p, h2, li, link, k } from "./pt";

export const localSeoForSmallBusinessEn = {
  lang: "en",
  group: "local-seo-for-small-business",
  slug: "local-seo-for-small-business",
  title: "Local SEO for small business",
  heading: "Local SEO for Small Business",
  excerpt:
    "I do local SEO for small business owners: the Google Business Profile, reviews, listings and location pages that put a shop, an office or a service-area business into Google Maps when people nearby search for what it offers.",
  seo: {
    metaTitle: "Small Business Local SEO: Google Maps, Reviews | Bandziuk",
    metaDescription:
      "Local SEO for small business: Google Business Profile, reviews, NAP, citations on Yelp, Apple and Bing, location pages and AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Google Maps + reviews", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Open now · Directions", "In the map pack", "Reviews that name the service", "Call"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Local SEO audit for a small business: Google Business Profile, listings, location pages", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Google Business Profile, citations and review routine set-up for a small business", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly local SEO for a small business", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with local SEO services for small business",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "A Google Business Profile set up to rank", text: "Categories, services, hours, photos, the right link" },
        { _key: k("o"), iconName: "message-circle", title: "A review routine your staff can keep", text: "A short link or QR code, every review answered" },
        { _key: k("o"), iconName: "file-text", title: "Listings on Yelp, BBB, Apple and Bing", text: "One name, address and phone in every directory" },
        { _key: k("o"), iconName: "layers", title: "Location and service pages", text: "Pages that confirm what the profile says" },
        { _key: k("o"), iconName: "sparkles", title: "Named in local AI answers", text: "ChatGPT and AI Overviews read the same sources" },
        { _key: k("o"), iconName: "phone", title: "Calls and directions from the map, counted", text: "Profile results separated from the rest" },
      ],
      prices: [
        { _key: k("r"), label: "Local SEO audit for a small business", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly local SEO for a small business", value: "from 800 € / month", note: "profile, reviews, listings, pages", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: small local businesses that get customers from Google Maps",
      subtitle:
        "Small businesses with one address and a local customer base: an auto repair shop, a wheel-renovation workshop, a tyre-storage business, a renovation company and a 3D laser scanning and BIM company — the same map, profile and location work your business needs.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for local SEO for your small business",
      subtitle: "I reply within one business day with what I would change first in your Google profile and listings, and a fixed price.",
      contextLabel: "Business name or Google Maps link",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Do you show up in Google Maps for your main service?", options: ["Yes, in the top 3", "Lower on the map", "Not at all", "Not sure"] },
        { _key: k("z"), question: "Where do you serve customers?", options: ["At our shop or office", "At their place", "Both"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Local SEO for small business is the work that gets a shop, an office or a business that travels to its customers into Google Maps and the three map results when people nearby search for what it offers. I do it myself — the Google Business Profile, reviews, listings and the location pages on your website — so you get the map side handled without learning every Google Maps rule yourself."),

        h2("Why local SEO is important for small business: the map pack and “near me” searches"),
        p("For searches with local intent — “dry cleaner”, “bike repair near me”, “accountant in [town]” — Google shows a map with three businesses above the regular results. On a phone those three fill most of the screen and carry a call button, directions and a star rating. A small business outside them stays unseen by most people searching nearby, however good its website is."),
        p("Google picks the three by how well a business matches the search, how near it is to the person searching, and how well known it is through reviews, mentions and links. Where your customer stands is fixed; everything else can be worked on."),

        h2("Google Business Profile for a small business: the setup that matters"),
        p("The profile is the center of local SEO for a small business. The parts that carry the most weight:"),
        li("the primary category — the most specific one that describes your main service, such as “Bakery” rather than “Food”, plus secondary categories only for things you really do"),
        li("services or products listed one by one, each with a short description"),
        li("regular hours, and special hours set before every public holiday"),
        li("photos of the entrance, the inside, the team and finished work, added every few weeks"),
        li("a description of what you do, where and for whom, without a list of keywords"),
        li("the website link pointing to the page that matches the profile, plus booking or menu links where they apply"),
        li("attributes such as wheelchair access, payment methods or online appointments"),
        p("New profiles, and profiles with changed details, may need verification by video of the premises and signage. Plan for it before changing an address or a name."),

        h2("Storefront or service-area business: setting up a small business profile correctly"),
        p("Google treats a business differently depending on where it serves customers."),
        li("Storefront: customers come to you. The address is shown, the map pin must sit on your entrance, and the sign outside should carry the same name as the profile."),
        li("Service-area business: you go to customers — cleaning, repairs, mobile pet grooming. The address is hidden, and the profile lists the towns or postcodes you cover."),
        li("Hybrid: both. The address is shown and the service area is added."),
        p("Typical mistakes on small business profiles: a home address left visible by accident, a virtual office or mailbox used as the address, keywords added to the business name, and a second profile for the same business. Each can lead to suspension, and a suspended profile drops out of the map until Google reinstates it."),

        h2("Getting Google reviews for a small business without breaking the rules"),
        p("Reviews move a business up in the map, and they are what people read before they call. The steady way to get them is to ask at the moment the customer is pleased: a short link in the receipt email, a QR code at the counter, a line in the invoice or a text after the visit. Every review gets an answer within a few days. To an unfair one, reply calmly with facts, because future customers read the reply more than the complaint."),
        p("What breaks Google’s rules: paying for reviews, giving discounts in exchange, and sending requests only to customers you expect to be happy. Yelp goes further and asks businesses not to request reviews at all, so on Yelp the only thing to do is keep the listing accurate and answer what comes."),

        h2("NAP consistency for small business local SEO: one name, address and phone"),
        p("NAP stands for name, address and phone number. Google and other maps compare how your business appears across the web, and mismatches make them less sure the details are right. Small businesses collect mismatches without noticing: a move to a new street, a new phone number, an old trading name, “Suite 4” written three ways, a call-tracking number that ended up in a directory."),
        p("The fix starts with one agreed version of the name, address and phone. It goes into the website footer and contact page, into LocalBusiness structured data, into the Google profile, and then into every listing that shows a different version."),

        h2("Local citations for small business: Yelp, BBB, Apple Business Connect and Bing Places"),
        p("A citation is any listing of your business with its name, address and phone. The ones worth having for most small businesses:"),
        li("Apple Business Connect — the listing in Apple Maps and Siri, which iPhone users see when they ask for directions"),
        li("Bing Places — the listing in Bing and in services that take map data from it"),
        li("Yelp and BBB, which many US customers check before choosing"),
        li("Facebook and Nextdoor pages, kept with the same details"),
        li("directories for your trade and your country, and the local chamber of commerce"),
        p("A few dozen accurate listings do more than hundreds of automatic submissions. Mass directory packages are not part of my work."),

        h2("Location pages and service pages for a small local business website"),
        p("The map results look at your website too: the site must confirm what the profile says. A business with one address needs a home page and service pages that name the town and the area. A business with two or three locations needs a page for each, with its own address, hours, directions, photos and reviews, and each Google profile linking to its own page rather than the home page."),
        p("A service-area business can have pages for its main towns when there is something real to put on them: jobs done there, local details, reviews from those customers. Dozens of pages with only the town name swapped are treated as doorway pages and filtered out."),

        h2("Local links for a small business: sponsorships, partners and local press"),
        p("Links from local websites show that a business is part of its community, and they help both the map and the regular results. Small businesses can usually earn them without buying anything:"),
        li("sponsoring a youth sports team, a school event or a charity run that lists its sponsors"),
        li("supplier and partner pages that list where their products are sold or installed"),
        li("local news sites when you open, expand, mark an anniversary or run a community event"),
        li("local business associations and the chamber of commerce"),

        h2("Local SEO for small business in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("When someone asks ChatGPT, Perplexity or Google’s AI Overviews where to get keys cut nearby or which bakery makes gluten-free cakes in their town, the assistant builds the answer from map data, listings, reviews and business websites. Getting into those answers is called generative engine optimization (GEO) or answer engine optimization (AEO), and for a local business it rests on local SEO:"),
        li("the same details on Google, Apple, Bing, Yelp and your website, so the assistant can be sure which business it is describing"),
        li("reviews that say what was done, which assistants summarize"),
        li("your services, area and hours written as text on the website, not only shown in images"),
        li("LocalBusiness structured data that links to your profiles"),
        p(
          "I check how assistants describe your business before and after the work. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Measuring local SEO results for a small business"),
        p("Checking your rank from your own phone at the shop says very little: map positions change with where the searcher stands. What I report instead:"),
        li("calls, direction requests and website clicks from the profile’s performance data"),
        li("visits from the profile in GA4, separated with UTM tags on the profile’s website link"),
        li("map positions measured on a grid of points across your area"),
        li("the number of reviews and the average rating, month by month"),

        h2("How much local SEO services for small business cost"),
        li("Local SEO audit — profile, listings, reviews and location pages: from 250 €, one-off, with fixes ranked by impact."),
        li("One-off set-up — categories, services, hours, NAP clean-up, main citations, review routine: 250–700 €."),
        li("Monthly local SEO for a small business — photos and updates, reviews, listings, location pages and reporting: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "Many small businesses need only the set-up and a routine they keep themselves. All prices are published on the ",
          link("pricing", "/pricing"),
          " page. If you need more than the map — new service pages, technical fixes, an audit of the whole site — see ",
          link("SEO services for small business", "/seo-services-for-small-business"),
          "; if the website itself is the problem, ",
          link("small business website design", "/small-business-website-design"),
          ". Local SEO for any business with an address is described on the general ",
          link("local SEO services", "/services/local-seo-services"),
          " page, and trades will find their version on the ",
          link("local SEO for contractors", "/local-seo-for-contractors"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Local SEO for small business: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What is local SEO for a small business?", "It is the work that puts a small business into Google Maps and the map results when people nearby search for what it offers: the Google Business Profile, reviews, consistent listings, location pages on the website and local links."],
          ["How much do local SEO services for small business cost?", "An audit costs from 250 € one-off, the set-up 250–700 €, and monthly local SEO from 800 € per month, or from 1,300 € in very competitive cities. I give a fixed price after seeing your profile."],
          ["Can I do local SEO for my small business myself?", "Yes, much of it: choose the right category, fill in services and hours, add photos every few weeks, ask every customer for a review and answer each one, and keep your name, address and phone identical everywhere. Help is useful for suspensions, several locations, and listings that keep showing old details."],
          ["Can a home-based business show up in Google Maps?", "Yes, as a service-area business: the home address is hidden and the profile shows the towns you cover. The address still has to be real, and a business that receives customers at home can show it if you choose."],
          ["How long does local SEO take for a small business?", "Profile corrections often show in the map within a few weeks. Reviews, listings and location pages build up over two to four months, longer in big cities and busy categories."],
          ["How do I choose the best local SEO services for a small business?", "Ask who will do the work, whether you keep ownership of the Google profile, how results are reported — calls and directions, not only rank — and whether the provider avoids fake reviews and mass directory submissions."],
          ["Do I need a website if I have a Google Business Profile?", "A profile alone can bring calls, but a website gives Google and AI assistants more to confirm what the profile says, and gives customers prices and answers before they call. Even one good page helps."],
          ["Do you do local SEO for small businesses outside Poland?", "Yes. Local SEO is done remotely — the profile, listings for your country, reviews and tracking — for small businesses in the US, Canada, the UK, Australia and elsewhere. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order local SEO for your small business: what to send me"),
        p(
          "Send the business name, the Google Maps link, the website, whether customers come to you or you go to them, the towns you cover and the services you want more calls for. I will reply with what I would change first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
