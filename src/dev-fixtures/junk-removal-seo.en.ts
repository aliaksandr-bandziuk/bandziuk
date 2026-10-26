// Landing page fixture: Junk Removal SEO (EN), group «junk-removal-seo». New
// page.
// Semantic core: ref/home-services.md, junk removal group (US): junk removal
// seo 210 (H1, several H2) · seo for junk removal 50 (metaTitle, H2) · junk
// removal seo company 40 (choosing/next-to-ads H2, FAQ) · junk removal
// marketing agency 30, junk removal google ads 10 (ads H2 as channels).
// Ignored: junk removal authority 110 / reviews 20 (a vendor brand), junk
// removal training, website builder 0.
// PAA: none specific to junk removal; pricing and «can I compete with
// franchises» questions come from the angle list in BRIEF.md.
// Intent: ref/intent-check-home-services.md — «junk removal seo» vs «junk
// removal website» 0 of 10 shared URLs; the website SERP is haulers’ own
// sites and franchises (Junk King, The Junkluggers, LoadUp) = consumers, so
// there is no website page for this niche.
// Angle: “what we take” pages (furniture, appliances, hot tubs, construction
// debris, yard waste), estate and rental cleanouts for executors, landlords
// and realtors, truck-load pricing and the dumpster comparison, same-day jobs
// as the client’s service, franchises (Junk King, 1-800-GOT-JUNK) as
// competitors, recycling and donation, service areas and the map, AI answers.
// NOT on this page: residential moving (/seo-for-moving-companies — linked
// once); demolition and renovation work (/seo-for-contractors — linked once);
// map work in depth (/services/local-seo-services); site build (no separate
// junk removal website page); ads and lead buying (mentioned as channels).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const junkRemovalSeoEn = {
  lang: "en",
  group: "junk-removal-seo",
  slug: "junk-removal-seo",
  title: "Junk removal SEO",
  heading: "Junk Removal SEO",
  excerpt:
    "I do junk removal SEO for hauling companies: pages for what you take, cleanouts and truck-load pricing, service areas, Google Maps and reviews, and answers in ChatGPT, so people clearing a garage or a rental call your truck before a franchise.",
  seo: {
    metaTitle: "SEO for Junk Removal Companies: Pages and Maps | Bandziuk",
    metaDescription:
      "SEO for junk removal: item and cleanout pages, truck-load pricing, same-day booking, Google Maps, reviews and AI answers, counted in pickups. From 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Items, cleanouts, truck loads", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Couch removal near me", "Half truck load price", "Text a photo for a quote", "Booked for today"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Junk removal SEO audit: website, Google Business Profile, pricing page and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off junk removal SEO work: item, cleanout, pricing and town pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a junk removal company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with junk removal SEO",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for everything you haul", text: "Furniture, appliances, hot tubs, debris, yard waste" },
        { _key: k("o"), iconName: "file-text", title: "Truck-load pricing people understand", text: "Ranges, surcharges and quotes from a photo" },
        { _key: k("o"), iconName: "image", title: "Cleanout pages with before and after", text: "Estates, rentals, foreclosures, garages" },
        { _key: k("o"), iconName: "map-pin", title: "Google Maps for the towns you serve", text: "Service area, job photos, reviews naming the item" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "Prices, recycling and same-day facts assistants quote" },
        { _key: k("o"), iconName: "phone", title: "Reports in calls and booked pickups", text: "Search and map as separate sources in your software" },
      ],
      prices: [
        { _key: k("r"), label: "Junk removal SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a junk removal company", value: "from 800 € / month", note: "pages, map, reviews, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: websites for local service firms and contractors",
      subtitle:
        "A Warsaw car repair shop (local SEO, its Google Maps listing, UX and a page per service) and Felgilab, a Warsaw workshop that renovates wheels and got a new WordPress site with service and price pages, both get their jobs by phone from search and the map, the way a hauler does. A Warsaw renovation and property-investment company has a premium-design site for work that ends in a lot of debris; ScanM2, a 3D laser scanning and BIM company, went from no leads for two years to leads every week and 29× organic traffic after a WordPress rebuild; and a psychotherapist’s site in Milan already shows up in ChatGPT answers. What a junk removal company takes from them: a page for each job and price, a map profile that brings calls, and results counted in bookings.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your junk removal company",
      subtitle: "I reply within one business day with what I would fix first — item pages, pricing, cleanouts or your map profile — and a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which jobs do you want more of?", options: ["Single items and small loads", "Full cleanouts", "Construction debris", "Work for landlords and realtors"] },
        { _key: k("z"), question: "How big is your operation?", options: ["One truck, owner-operator", "Two to five trucks", "Six trucks or more", "Franchise owner"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Junk removal SEO is the work that brings calls from people clearing out a garage, a rental unit or a remodel to your truck, instead of to a franchise or a lead platform. I do it myself — one SEO consultant who also builds websites — for owner-operators with a single truck and for local companies running a few crews. Results are counted in booked pickups and photo quotes, with rankings as a side note."),

        h2("What junk removal SEO covers: items, cleanouts, prices and towns"),
        p("People rarely search for “junk removal” and stop there. They search for the thing that has to go and the situation they are in: “couch removal near me”, “hot tub removal cost”, “estate cleanout company”, “construction debris pickup”, “same day junk removal”. Each of those can be a page that ranks, and together they make SEO for junk removal its own discipline:"),
        li("“what we take” pages for items and materials"),
        li("cleanout pages for estates, rentals, foreclosures and hoarding situations"),
        li("a pricing page built around truck loads"),
        li("service-area pages and the Google Business Profile"),
        li("answers in ChatGPT, Perplexity and Google AI Overviews"),
        p(
          "If residential moving is your main line and hauling a side business, the ",
          link("SEO for moving companies", "/seo-for-moving-companies"),
          " page fits you better.",
        ),

        h2("“What we take” pages in SEO for junk removal: furniture, appliances, hot tubs and debris"),
        p("An item page answers the three things a customer wants to know: do you take it, roughly how much, and where it ends up. That is enough to rank for searches a general services page never catches."),
        h3("Furniture and mattress removal pages"),
        p("Sofas, sectionals, recliners, mattresses and box springs; whether the crew carries them down from upstairs or up from a basement; what happens to pieces still in good shape."),
        h3("Appliance removal pages"),
        p("Refrigerators, freezers, washers, dryers and window AC units. Units with refrigerant fall under environmental rules, so say in general terms how you dispose of them."),
        h3("Hot tub, shed and playset removal pages"),
        p("Bigger jobs that involve cutting and dismantling. Customers look up the cost before calling, so a price range and photos of one removal from start to finish do most of the selling."),
        h3("Construction debris and yard waste pages"),
        p(
          "Drywall, old flooring and cabinets after a remodel; branches and soil after yard work. Contractors and do-it-yourself renovators are the two audiences, and both ask about weight, mixed loads and whether a dumpster would be cheaper. If you also take on demolition jobs, that side is covered on the ",
          link("SEO for contractors", "/seo-for-contractors"),
          " page.",
        ),

        h2("Estate cleanout, rental turnover and hoarding cleanup pages for executors, landlords and realtors"),
        p("Cleanouts are larger tickets and usually come from people in a hard spot: an executor emptying a parent’s house, a landlord whose tenant left everything behind, a realtor who needs a listing empty by next week. They search “estate cleanout services”, “house cleanout after death”, “foreclosure cleanout”, “hoarder house cleanup”. These pages need a calm tone, a clear process — walk-through, setting aside what the family keeps, donation, removal, broom-clean finish — discretion, and a way to book a viewing."),
        p("Property managers and realtors who hire you once tend to call again. A short page written for them — how you invoice, how fast you can schedule, before-and-after photos, keys and access handled without the owner present — turns a single cleanout into repeat work."),

        h2("Junk removal pricing pages: truck-load prices customers and AI answers can quote"),
        p("“How much does junk removal cost” is among the most searched questions in the trade, and AI Overviews answer it with national averages unless a local page gives a better answer. Most haulers price by how much of the truck a load fills — minimum, quarter, half, three quarters, full — with surcharges for mattresses, tires or appliances. A pricing page can show that structure with your own ranges, explain what moves the price (weight, stairs, heavy materials like concrete and dirt) and offer a quote from a photo sent by text. It does not have to publish your whole price sheet to work."),
        p("A comparison with dumpster rental — when a roll-off bin is cheaper and when full-service removal makes more sense — ranks well too, and brings customers who were about to rent a bin."),

        h2("Same-day junk removal searches: booking a pickup from a phone"),
        p("Many junk removal searches carry a deadline: “junk removal today”, “same day junk pickup”, “junk removal this weekend”. If your crews take same-day jobs, put that in the page title and the first line, show the booking cut-off time, and let people pick a slot or text a photo straight from the page. When online booking runs through Jobber, Housecall Pro or similar software, the widget should load fast and pass the lead source into the job, so bookings from search can be counted."),

        h2("Competing with Junk King, 1-800-GOT-JUNK and other franchises in local search"),
        p("Franchise brands have national advertising, a page for every territory and trucks people recognize. An independent hauler beats them locally with what a franchise template cannot show:"),
        li("the owner’s name and face, and the crew who will actually arrive"),
        li("prices or price logic on the site, so customers know the range before the truck comes"),
        li("photos and reviews from jobs in each town, not stock pictures"),
        li("quick replies by text and flexible pickup windows"),
        p("On the map, a complete profile with more recent reviews than the nearest franchise location often counts for more than the size of the brand."),

        h2("Recycling and donation pages for junk removal companies: where the junk goes"),
        p("Customers increasingly ask what happens to their things, and searches like “eco-friendly junk removal” or “furniture donation pickup” show it. A page that names the charities, recycling centers and scrap yards you really use, explains what gets donated, recycled or landfilled, and mentions donation receipts if you hand them out, builds trust and earns links. Local charities and recycling programs sometimes link to haulers who bring them items — one of the few natural local links in this trade."),

        h2("Service areas and Google Business Profile for junk removal companies"),
        p("Most haulers run as service-area businesses from a yard or a home, so the profile hides the address and lists the towns served. What decides the map:"),
        li("the category “Junk removal service”, with each service listed: furniture, appliances, cleanouts, debris"),
        li("photos of loaded trucks and cleared rooms, uploaded after jobs"),
        li("a review request by text once the truck leaves, asking the customer to mention what was hauled"),
        li("a business name without added keywords, which the map penalizes sooner or later"),
        p(
          "Town pages make sense where you have jobs to show and something local to say: which transfer station you use, how the city’s bulk trash pickup works and when paying for removal is faster. Profile categories, reviews and listings get their own treatment on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Junk removal SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Searches such as “what do junk removal companies do with old furniture”, “how much does it cost to remove a hot tub” or “junk removal near me that recycles” are now often answered by ChatGPT, Perplexity or an AI Overview before anyone clicks. Work on those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For a hauler it comes down to:"),
        li("item, pricing and recycling pages with direct answers in text, not only in images"),
        li("service area, hours, same-day policy, license and insurance stated plainly"),
        li("structured data describing the business and each service"),
        li("the same company details on Google, Yelp, Nextdoor and the BBB"),
        p(
          "I put your customers’ questions to the assistants before the work and again later, to see whether your company gets named. How that works is on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Junk removal SEO next to Thumbtack, Yelp ads and Google Ads"),
        p("Junk removal jobs are small and frequent, so a paid lead eats straight into the margin of a single pickup. Platforms such as Thumbtack and Angi pass one request to several haulers, and Google Ads for “junk removal near me” gets expensive in larger cities. SEO costs time and work instead of a fee per call; once item and town pages rank, each extra pickup they bring lowers the cost of the next. Many owners keep one paid channel running while organic pages grow. I work on search and AI answers, and on the pages your ads can use as well."),

        h2("How much junk removal SEO costs"),
        li("Junk removal SEO audit — website, Google Business Profile, pricing page, reviews and AI answers: from 250 €, one-off, with fixes ordered by impact."),
        li("One-off work — item, cleanout, pricing and town pages, booking and source tracking, structured data: 250–700 €."),
        li("Monthly SEO for a junk removal company — fresh item and town pages, the Google profile, review requests, AI checks and a pickup count every month: from 800 € per month; in very competitive markets from 1,300 € per month."),
        p(
          "For a single-truck hauler outside the big cities, the audit, a tidied profile and a handful of item and price pages usually do most of the work. Ongoing work is described on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page; all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Junk removal SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a junk removal company cost?", "An audit costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive markets. Describe your trucks, services and towns in a few lines and you get a fixed price back."],
          ["How long until junk removal SEO brings calls?", "Profile fixes and a better pricing page can bring calls within weeks. New item, cleanout and town pages usually need two to five months to rank, depending on how many haulers and franchises work your area."],
          ["Should I publish junk removal prices on my website?", "Publishing the structure — truck-load fractions, minimum charge, common surcharges — with your own ranges helps both customers and search, and gives AI answers a local figure. You can keep the final price for the photo quote or the on-site look."],
          ["Do I need a separate page for every item I haul?", "For items people search on their own and you take often — couches, mattresses, appliances, hot tubs, construction debris — yes. Rare items can share a page. Each page should carry your photos, price range and where the item goes."],
          ["Can a one-truck junk removal business compete with franchises on Google?", "Locally, yes. A complete map profile with fresh reviews, real photos, published price logic and quick replies often beats a franchise location in the map pack for nearby searches."],
          ["Does ChatGPT recommend junk removal companies?", "When someone asks, it names a few companies and explains why, using what it can read about them: services, prices, recycling, reviews and service area. Clear pages and consistent listings raise the chance of being one of them; I check the answers before and after the work."],
          ["Can a consultant in Poland do SEO for a US junk removal company?", "Yes. I work remotely and in English. When it is late afternoon in Warsaw, the US workday has just started, so we can talk in your morning before the trucks roll. Payment is in EUR, against an invoice and a contract."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order junk removal SEO: what to send me"),
        p(
          "Tell me your company name and where to find you online — site and map listing — plus the jobs you want more of — single items, cleanouts, debris or work for landlords — the towns you cover, how you price, and the booking software you use. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
