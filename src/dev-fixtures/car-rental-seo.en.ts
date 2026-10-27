// Landing page fixture: Car rental SEO (EN), group «car-rental-seo». New page.
// Semantic core: ref/creative-leisure.md, «auto detailing / dealers / rental»
// group (US volumes): car rental seo 210 (H1, metaTitle, most H2s). No other
// measured rental phrases; headings also use the renters’ own words (car
// rental, car hire, airport, deposit, insurance) as they appear in searches.
// Intent: ref/intent-check-creative-leisure.md — «car rental seo» vs «car
// rental website design» 1 of 10 shared URLs (a YouTube video), 1 shared
// domain → separate intents; the SEO SERP is rental software (Coastr,
// RentRabbit), agencies (Promodo, ThatWare, LocalMighty) and Reddit. The
// searcher is the owner or manager of an independent rental company or a
// small fleet. The website gets one H2 here (booking engine, indexable pages,
// speed), as the brief asks; there is no separate rental design page.
// Angles: search groups (location, car type, conditions, duration), fleet and
// car-class pages, location and delivery pages, one-way rentals, airport
// pages for off-airport and meet-and-greet operators, aggregators
// (Rentalcars, Discover Cars, Kayak, Expedia, Turo — commissions in general terms) vs direct
// bookings, deposit / insurance / driver-age answers, tourists and languages,
// seasonality, Google Business Profile and reviews, the site and its booking
// engine, AI answers.
// NOT on this page: car dealer SEO (/car-dealer-seo — neighbour, linked once
// for ex-fleet sales); detailing (/auto-detailing-website-design); maps in
// depth (/services/local-seo-services — linked); running ads.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed rankings;
// insurance and legal rules in general terms only.
import { p, h2, h3, li, link, k } from "./pt";

export const carRentalSeoEn = {
  lang: "en",
  group: "car-rental-seo",
  slug: "car-rental-seo",
  title: "Car rental SEO",
  heading: "SEO for Car Rental Companies",
  excerpt:
    "I do car rental SEO for independent rental companies: fleet and car-class pages, location and airport pickup pages, clear answers on deposits and insurance, Google Maps and reviews, so travelers and locals book with you directly instead of through an aggregator.",
  seo: {
    metaTitle: "Car Rental SEO for Independent Rental Firms | Bandziuk",
    metaDescription:
      "Car rental SEO: fleet and airport pickup pages, direct bookings next to Rentalcars and Kayak, deposit and insurance answers, AI search. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Fleet, location and airport pages", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Car rental near the airport", "SUV · Automatic · 7 seats", "Deposit and insurance explained", "Book direct"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Car rental SEO audit: website, booking engine and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off car rental SEO work: fleet, location and airport pages, deposit and insurance answers, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a car rental company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with car rental SEO",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data for your city, airport and fleet", text: "Automatics, SUVs, vans, one-way and monthly rentals" },
        { _key: k("o"), iconName: "layers", title: "Fleet and car-class pages that work without dates", text: "Real cars, seats, luggage, transmission, deposit" },
        { _key: k("o"), iconName: "map-pin", title: "Location and airport pickup pages", text: "Meeting point, hours, late arrivals, hotel delivery" },
        { _key: k("o"), iconName: "file-text", title: "Deposit, insurance and driver-age answers", text: "The questions that stop a direct booking" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "Rental terms and locations written as plain text" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in direct bookings", text: "Next to what aggregators bring and charge" },
      ],
      prices: [
        { _key: k("r"), label: "Car rental SEO audit: site, booking engine, Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a car rental company", value: "from 800 € / month", note: "pages, maps, reviews, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: catalog, multilingual and local service sites I have built and optimized",
      subtitle:
        "Cyprus VIP Estates is a catalog built from scratch in five languages, with filters, a map and CRM integration, and I run its SEO every month — the same structure a rental fleet needs, with cars instead of properties. The Warsaw auto repair shop got local SEO, Google Maps work and service pages. The education agency’s site covers ten countries for a multilingual audience. ScanM2 was rebuilt on WordPress with its design kept: organic traffic grew 29 times and leads come every week. The Milan psychotherapist’s new pages already appear in ChatGPT answers. A rental company needs this mix: a fleet catalog search engines can read, strong locations on the map, several languages and a place in AI answers.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "auto-repair-seo-and-ux-boost",
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your car rental company",
      subtitle: "Within one business day you get my list of first fixes for your site, booking engine and Google profile, with a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where do most bookings come from now?", options: ["Rentalcars, Kayak or other aggregators", "Google Maps and phone calls", "Our own website", "Hotels, travel agents and repeat customers"] },
        { _key: k("z"), question: "What kind of rental do you run?", options: ["City and airport rental for travelers", "Long-term and business rental", "A small fleet on Turo", "Vans, campers or premium cars"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Car rental SEO is the work I do for independent rental companies: making sure that a traveler looking for a car at the airport, a family that needs a minivan for a week and a local whose car is in the shop find your fleet and book with you directly. There is no account manager in between: I audit the site and the booking engine, and I am also the developer who changes the code."),

        h2("Car rental SEO for independent rental companies: what the work covers"),
        p("An independent company competes with global brands at the airport counters and with aggregators that put hundreds of offers on one page. Search is where a smaller fleet can win, because many renters want something specific: an automatic where most cars are manual, a seven-seater, a pickup truck, delivery to a hotel, a rental for a full month. The work connects four places:"),
        li("the website — fleet, location and airport pages, the booking engine, and answers about deposits and insurance"),
        li("a Google Business Profile for each office and pickup point"),
        li("aggregator listings and directories, where your details must match the site"),
        li("answers in ChatGPT, Perplexity and Google’s AI Overviews"),

        h2("Car rental SEO keywords: how travelers and locals search for a rental car"),
        p("Before any page is written I collect search data for your city, airport and fleet. The phrases fall into groups that need different pages:"),
        li("location — “car rental” or “car hire” with a city or airport name, “rental car near me”"),
        li("car type — “SUV rental”, “7 seater car rental”, “van rental”, “convertible rental”"),
        li("conditions — “car rental under 25”, “car rental with debit card”, “one way car rental”"),
        li("duration — “weekly car rental”, “monthly car rental”, “long term car rental”"),
        p("Travelers search weeks before a trip, often comparing three or four towns; locals search on the day they need a car. Both are worth winning, and the data shows which group is larger in your market."),

        h2("Fleet pages in car rental SEO: car classes and specific models"),
        p("Most rental sites show the fleet only inside the booking engine, after the visitor enters dates. Search engines and AI assistants never get that far. Each car class — economy, compact, SUV, minivan, van, premium — gets a page that works without dates:"),
        li("the models in the class, with photos of your own cars rather than manufacturer press shots"),
        li("seats, luggage space, transmission, fuel type, and available child seats or roof racks"),
        li("a price range by season and the deposit for this class"),
        li("who the class suits: a couple with carry-ons, a family with a stroller, four golfers with bags"),
        p("A popular model gets its own page when people search for it by name — a Tesla, a Jeep Wrangler, a Mercedes V-Class. Only cars you keep in the fleet get one; a page for a car the customer cannot actually book costs trust at the counter."),

        h2("Location pages for car rental: city offices, hotel delivery and one-way rentals"),
        p("Each office, pickup point and delivery zone gets its own page: address, hours, how to find the desk or the parking spot, a photo of the meeting point, and the delivery fee to hotels, ports and neighborhoods. One-way rentals between your locations get a page with the routes and the drop fee."),
        p("Fifty city pages with swapped names are treated as doorway pages and filtered. A location page is worth adding where you hand over cars and have something useful to say: parking near the old town, ferry connections, roads that need a 4x4 in winter."),

        h2("Airport car rental pages: pickup, meet-and-greet and late arrivals"),
        p("Airport searches bring the most valuable bookings and the hardest competition: the big brands have counters in the terminal and aggregators bid on every airport phrase. An independent company usually works from a lot near the airport with a shuttle, or meets customers in arrivals. The airport page turns that from a doubt into a reason to book:"),
        li("where exactly you meet — the arrivals exit, the parking level, the shuttle stop — with photos"),
        li("what happens when a flight is late, and whether night arrivals are included or cost a stated fee"),
        li("how the return works, how long it takes and how far it is to departures"),
        li("the airport code and terminal names in the text, because travelers search with them"),

        h2("Rentalcars, Discover Cars and Turo vs direct bookings: where car rental SEO fits"),
        p("Aggregators bring bookings from the first day. Rentalcars.com, Discover Cars, Kayak, Expedia and similar sites take a commission or charge per booking, rank offers mostly by price and keep the contact with the customer; Turo lets small fleets list cars on its marketplace on its own terms. Many independents get a large share of bookings this way, and that is fine."),
        p("A direct booking keeps the commission, gives you the customer’s email for the next trip and lets you sell your own extras. SEO is how direct bookings grow: travelers who compared prices on an aggregator often search the company name before paying, and returning customers search for you straight away. My reports show direct bookings next to what aggregators delivered, so you see the shift in money, not only in rankings."),

        h2("Deposit, insurance and driver requirements: car rental FAQ pages that bring bookings"),
        p("The questions that stop a booking are almost always about money at the desk. Each one gets a clear answer on the site, matching your terms:"),
        li("the security deposit — amount by car class, credit or debit card, when the hold is released"),
        li("insurance — what is included, what the collision damage waiver covers, the deductible, the price of full coverage per day"),
        li("drivers — minimum age, the young driver fee, years with a license, an international driving permit"),
        li("fuel policy, mileage limits, cross-border trips, extra drivers, tolls and traffic fines"),
        p("These pages rank for searches like “car rental under 25” with your city, and they cut disputes at pickup. Insurance and liability rules differ between countries and states, so the text follows your contracts and local law; this is general information, not legal advice."),

        h2("Car rental SEO for tourists: languages and seasonal demand"),
        p("Rental demand follows the tourist calendar: summer at the coast, ski weeks in the mountains, holidays and large events in cities. A new page needs weeks or months to rank, so seasonal pages and price updates go live well before the rush, and quiet months go to fleet pages, location pages and fixes."),
        p(
          "In tourist areas many renters search in their own language. Each language version is written for that market’s searches, not translated word for word, and the versions are linked with hreflang tags. How I build them is on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page.",
        ),

        h2("Google Business Profile and reviews for car rental locations"),
        p("For “car rental near me” the map decides many calls. Each office or pickup point with staff gets its own profile with “Car rental agency” as the primary category, real hours including late arrivals, and photos of your cars and the meeting point. A delivery-only business uses a service-area profile rather than an address where nobody works."),
        p(
          "Rental reviews are mostly about the deposit, the return and extra charges. Asking every customer after the return and answering each complaint calmly in public does more than a row of five-star ratings. Profiles, categories and review routines for several locations are covered on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Car rental website design in car rental SEO: booking engine, speed and indexable pages"),
        p("Rental sites usually run a booking engine from rental software — Coastr, RentRabbit and others — or a WordPress plugin. The engine handles availability and payment; the SEO problems sit around it:"),
        li("the fleet and prices exist only inside an iframe or a script, so search engines see an empty page"),
        li("result pages with dates in the address get indexed by the thousand and crowd out real pages"),
        li("heavy car photos and scripts make the first screen slow on a phone at the airport"),
        li("the form asks for every detail before showing a price"),
        h3("Keeping the booking engine and rebuilding the pages around it"),
        p("Usually the engine stays. Fleet, location and FAQ pages are rebuilt as fast, plain pages with structured data, and the engine opens at the booking step. If the whole site needs replacing, I build that too."),

        h2("Car rental SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Renters planning a trip put questions to ChatGPT, Perplexity or Google’s AI Overviews, such as “can I rent a car at 21 in Florida”, “is it cheaper to book a rental car directly or through Kayak” or “which local rental company meets you at arrivals in Maui”. Assistants build answers from pages they can read and check. This work is called generative engine optimization (GEO) or answer engine optimization (AEO), and for a rental company it means:"),
        li("deposit, insurance, age and fuel rules written as plain sentences on your own pages"),
        li("fleet, locations, hours and airports as text and structured data"),
        li("the same name, address and phone on Google, aggregators and directories"),
        p(
          "I save what assistants say about your company, and which competitors they suggest, before the work and again after it. How that work is done is explained on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much car rental SEO costs"),
        li("Car rental SEO audit of the website, booking engine and Google profiles: from 250 €, one-off, with fixes ranked by their effect on bookings."),
        li("One-off work — fleet, location and airport pages, deposit and insurance answers, structured data: 250–700 €."),
        li("Monthly SEO for a car rental company — new pages, maps, reviews, AI visibility and reports in bookings: from 800 € per month; in big US metros, where national brands and aggregators bid on every airport phrase, from 1,300 € per month."),
        p(
          "If you also sell ex-fleet cars, see ",
          link("car dealer SEO", "/car-dealer-seo"),
          ". Monthly work in general is described on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page; the full price list is on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Car rental SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a car rental company cost?", "An audit is from 250 €, separate jobs such as fleet or airport pages are 250–700 €, and monthly SEO is from 800 € — from 1,300 € in big US metros such as Los Angeles, Miami or New York. Once I know your locations, fleet and booking sources, you get a fixed price."],
          ["How long does car rental SEO take to bring bookings?", "Profile and review work can show on the map within weeks. New fleet and location pages usually take three to six months to climb, longer around large airports. Seasonal pages are therefore prepared a season ahead."],
          ["Should I stop listing on Rentalcars or Kayak once SEO works?", "Not necessarily. Aggregators fill gaps and reach travelers who never search for local companies. The goal is a growing share of direct bookings, so you depend less on commissions, not leaving every channel."],
          ["Can an off-airport rental company rank for airport searches?", "Yes, with a page that names the airport and terminals, shows the meeting point or shuttle stop with photos and explains late arrivals and returns. Travelers often prefer a clear meet-and-greet to a long counter line."],
          ["Should a car rental website publish the deposit amount?", "Yes, by car class, with the card types you accept and when the hold is released. Unclear deposits are the most common reason for abandoned bookings and angry reviews."],
          ["Can ChatGPT recommend a local car rental company?", "It does when a traveler asks for a local option, and it picks companies whose locations, fleet, rental terms and reviews it can read on the web. A mention cannot be promised; clear facts on your own pages raise the odds, and I compare the answers before and after the work."],
          ["Do I need a new website for car rental SEO?", "Not always. Often the booking engine stays and only the fleet, location and FAQ pages around it are rebuilt. The audit shows whether fixing the current site is enough."],
          ["Can a consultant in Poland do SEO for a US car rental company?", "Yes. The work is done remotely, in English. I take calls in my afternoon and evening, Central European Time, which is morning and midday across the US. The contract and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your car rental company: what to send me"),
        p(
          "Tell me the company name, link the site and your Google Maps listings, and list the cities and airports you serve, your fleet by class, the booking engine you use and where bookings come from now — aggregators, the map, your site or repeat customers. You will get a short list of first fixes and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
