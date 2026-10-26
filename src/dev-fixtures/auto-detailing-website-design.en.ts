// Landing page fixture: Auto detailing website design (EN), group
// «auto-detailing-website-design». New page.
// Semantic core: ref/creative-leisure.md, «auto detailing / dealers / rental»
// group (US volumes): auto detailing website design 50 (H1, metaTitle,
// H2s) · auto detailing website template 140 + auto detailing website
// templates 140 (templates H2, FAQ) · best auto detailing website 50
// (patterns H2, no sites named). Not targeted: «auto detailing website» 480,
// «auto detailing supplies near me» 12,100, «professional car detailing
// supplies» 590, «auto detailing supply store» 390 — supply stores.
// Intent: ref/intent-check-creative-leisure.md — «auto detailing website» vs
// «auto detailing website design» 0 of 10 shared URLs, 0 shared domains →
// only the design phrase is ours. Its SERP: detailersroadmap, designdetail.io,
// wix, zarla, dribbble, webflow, mojo-agency, pinterest → studios, builders,
// galleries; getjobber sits in the supply-store SERP.
// This page = the site of a detailing shop or a mobile detailer: packages
// (interior, exterior, paint correction, ceramic coating, PPF), prices by
// vehicle size, before/after galleries, mobile service area with ZIP check
// and on-site requirements, booking with deposits and no-show rules,
// templates and Jobber-type sites vs own site, patterns of good detailing
// sites and reviews, local SEO (one H2), AI-readable site.
// NOT on this page: car rental SEO (/car-rental-seo), car dealer sites
// (/car-dealer-website-design), repair-shop SEO (/seo-for-auto-repair-shop —
// neighbour, linked once), shops selling detailing products.
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const autoDetailingWebsiteDesignEn = {
  lang: "en",
  group: "auto-detailing-website-design",
  slug: "auto-detailing-website-design",
  title: "Auto detailing website design",
  heading: "Auto Detailing Website Design",
  excerpt:
    "Auto detailing website design and build from one person: packages from an interior detail to ceramic coating and PPF, before/after galleries that load fast, a clear mobile service area and online booking with a deposit, so the calendar fills without a dozen messages per job.",
  seo: {
    metaTitle: "Website Design for Auto Detailing Businesses | Bandziuk",
    metaDescription:
      "Auto detailing website design: packages from interior detail to ceramic coating and PPF, before/after galleries, mobile service areas, deposits. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "For shops and mobile detailers"],
  heroPhonePoints: ["Book a detail", "Interior · Coating · PPF", "Before / after photos", "We come to you"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple auto detailing website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Auto detailing website with package pages, before/after galleries, service area pages, booking with deposits and local SEO setup, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with auto detailing website design",
      items: [
        { _key: k("o"), iconName: "layers", title: "Detailing packages from interior to PPF", text: "What is done, how long it takes, price by vehicle size" },
        { _key: k("o"), iconName: "image", title: "Before/after galleries that load fast", text: "Same car, same angle, labeled by package" },
        { _key: k("o"), iconName: "map-pin", title: "Mobile detailing service area", text: "Towns, ZIP check, water and power on site" },
        { _key: k("o"), iconName: "plug", title: "Online booking with a deposit", text: "Your scheduling tool embedded, rules in plain text" },
        { _key: k("o"), iconName: "shield-check", title: "Reviews and coating warranty terms", text: "Google reviews, product brands, installer status" },
        { _key: k("o"), iconName: "sparkles", title: "Packages and prices ChatGPT can read", text: "Text and structured data, not pictures of a price list" },
      ],
      prices: [
        { _key: k("r"), label: "Simple auto detailing website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Package pages, galleries, service areas, deposits, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Websites for car service businesses and premium services I have built",
      subtitle:
        "Three of these are Warsaw car businesses: Felgilab, a wheel-renovation workshop whose WordPress site I rebuilt with service and price pages, an auto repair shop where I worked on service pages, Google Maps and UX, and a tyre-storage business whose one-page site lets the owner edit the SEO texts on his own. The renovation company’s site shows how a premium design sells an expensive service, and ScanM2 shows what a rebuild on WordPress, with the design kept, can bring: organic traffic up 29 times and leads every week. A detailing site is built from the same parts — visible results, clear packages with prices and a short path to a booking.",
      picks: [
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your auto detailing website design",
      subtitle: "I reply within one business day with a proposed page list for your packages and booking, and a fixed price.",
      contextLabel: "Business name, Instagram, Google profile or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How do customers book you now?", options: ["Calls and texts", "Instagram messages", "A booking link (Square, Jobber, Urable or similar)", "They drive up to the shop"] },
        { _key: k("z"), question: "Where do you do the work?", options: ["Mobile only", "In the shop only", "Shop plus mobile"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Auto detailing website design is what I do for detailing shops and mobile detailers: planning, design and the build all come from me, so a single person answers for the result and the price is fixed before work starts. A detailing website sells something customers find hard to judge before paying. A full interior detail, a two-step paint correction and a ceramic coating can look alike in a listing yet cost very different amounts, so the site has to show the difference, prove the results with photos and take a booking without a long exchange of messages."),

        h2("Auto detailing website design for detailing shops and mobile detailers"),
        p("Detailing businesses come in two shapes, and the site is built around the one you run:"),
        li("a shop with bays, where customers drop the car off and need to know drop-off and pickup times, how long each package takes and where to leave the keys"),
        li("a mobile detailer with a van, a water tank and a generator, where the work happens in the customer’s driveway and the site explains where you go and what you need there"),
        li("a mix of both: maintenance washes and interiors on the road, paint correction and coatings in the shop, with the site steering each job to the right place"),
        p("In each case the person who answers the phone is usually the person holding the polisher. The site takes the repeat questions — how long, how much, do you come to me, should I wash it first — so the messages you do answer are the ones that need you."),

        h2("Detailing packages on the website: interior, exterior, ceramic coating and PPF"),
        p("The package page is the one most visitors open. Customers compare packages rather than single services, so each package gets a clear name, a list of what is done, the time it takes and a starting price:"),
        li("interior detail: vacuuming, shampoo and extraction of seats and carpets, leather cleaning and conditioning, pet hair, odor removal"),
        li("exterior detail: hand wash, decontamination and clay bar, wheels and tires, a sealant or wax"),
        li("paint correction: one-step or multi-step polishing that removes swirls and light scratches, usually done before a coating"),
        li("ceramic coating: wash, correction, application, curing time and aftercare"),
        li("paint protection film: full front, high-impact areas or full body, with the film brand you install"),
        li("maintenance plans for coated and wrapped cars, if you sell them"),
        h3("Ceramic coating and PPF pages that answer questions before the quote"),
        p("Coatings and film are the largest tickets in a detailing business and the jobs people research for weeks. Each gets its own page: what the product does and what it does not do, how the paint is prepared, how many days the car stays with you, what the manufacturer’s warranty covers and how the owner should wash the car afterward. A customer who has read that page writes to ask about dates rather than whether coatings are worth the money."),
        h3("Detailing prices by vehicle size and condition"),
        p("Prices on a detailing site are usually written as “from”, split by vehicle size: coupe or sedan, SUV, truck or minivan. One short line under each price says what raises it — heavy pet hair, sand, stains, a neglected finish. That line prevents arguments at pickup, because the customer read before booking that a car in rough shape costs more."),

        h2("Before and after photos on an auto detailing website"),
        p("Detailing is sold with pictures, and the gallery convinces when the photos are comparable:"),
        li("the same car from the same angle in similar light, side by side or with a slider"),
        li("each set labeled with the package and the vehicle, so the owner of a muddy minivan finds a muddy minivan"),
        li("50/50 shots of paint correction and close-ups of water beading on a coating, which show what a wide photo cannot"),
        li("short clips of extraction or foam, kept light enough to play on mobile data"),
        p("Images are compressed and served in modern formats, so a gallery of eighty photos opens as fast as a page of text. The strongest sets also appear on the package pages, because a photo next to a price sells more than one hidden in a separate tab."),

        h2("Mobile detailing service area: towns, ZIP check and what you need on site"),
        p("For a mobile detailer the service area is part of the offer. It is written as a list of towns and ZIP codes, not only drawn as a circle on a map, and the booking form checks the ZIP code before asking anything else. If you charge a travel fee beyond a set distance, the form shows that fee instead of turning the customer away."),
        p("The same page says what the customer provides: a place to park the van, access to water and a power outlet if your rig needs them, and whether you can work in an apartment garage or an office parking lot. Building and HOA rules get one plain sentence. It prevents bookings that collapse on the morning of the job."),

        h2("Online booking and deposits on an auto detailing website"),
        p("A detail blocks a bay or a whole day on the road, so a no-show costs real money. The booking flow is built with that in mind:"),
        ol("The customer picks a package and a vehicle size, and the price range updates."),
        ol("They add extras — engine bay, headlight restoration, pet hair removal — and see how long the job will take."),
        ol("They choose a date from your calendar; coating and film jobs block enough days automatically."),
        ol("They pay a deposit by card, with the cancellation and rescheduling rules shown above the button."),
        p("Most detailers already use a scheduling tool such as Square Appointments, Jobber or Urable, and the site embeds it, styled to match, rather than replacing it. The deposit amount, the refund terms and what happens if the car arrives in worse shape than described are written as text on the page, not only inside the widget, so the customer reads them before paying."),

        h2("Auto detailing website templates, Jobber sites or a custom website"),
        p("Searches for an auto detailing website template lead to theme stores and site builders, and field-service tools include a simple site with the subscription. For a detailer starting out with three packages, either is a sensible choice: it goes live in days and the booking link works."),
        p("Templates start to hold the business back when:"),
        li("all packages sit on one page, so nobody finds you for “ceramic coating” or “interior detailing” in your town"),
        li("the gallery is made for six stock photos, not hundreds of before/after sets"),
        li("page titles, addresses and structured data are hard or impossible to change"),
        li("the site lives on the platform and disappears when the subscription ends"),
        p("A custom site keeps your booking tool and adds what the template lacks: a page per package, a fast gallery and service area pages under your own domain."),

        h2("What the best auto detailing websites have in common"),
        p("Lists of the best auto detailing websites mostly show dark themes and glossy sports cars. The sites that keep a calendar full share less visible habits:"),
        li("the first screen says what you do, where, and how to book, with call and text buttons"),
        li("work from your own shop and your own van rather than stock photos of supercars"),
        li("packages with starting prices and durations, not a paragraph about a passion for perfection"),
        li("reviews next to the booking button that name the car and the package, taken from your Google profile"),
        li("for coatings and film: the product brand, your installer certification if you hold one, and the warranty terms in writing"),
        p("Colors and fonts come after these. On a phone, a visitor decides within seconds whether their car and their problem are on the page."),

        h2("Local SEO for an auto detailing website: “car detailing near me” and “ceramic coating near me”"),
        p("People search by service and place: “mobile detailing near me”, “ceramic coating” with a city name, “interior car cleaning”. A shop’s Google Business Profile shows its address; a mobile detailer sets the profile up as a service-area business with the home address hidden. Either way the profile lists the same packages as the site, gets fresh photos from real jobs and collects reviews that mention the service and the town."),
        p(
          "Each main package has its own page, and town pages exist only for places you actually drive to or draw customers from. A full site ships with the profile and these pages in place; the monthly side of map work is covered on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page. If your business also repairs cars, the search side of that work is on the ",
          link("SEO for auto repair shops", "/seo-for-auto-repair-shop"),
          " page.",
        ),

        h2("An auto detailing website that ChatGPT and Google AI Overviews can read"),
        p("Car owners ask ChatGPT, Perplexity and Google’s AI Overviews questions like “is ceramic coating worth it on a new car” or “who installs PPF near me”. Assistants recommend businesses they can read about. Packages shown as images, prices hidden inside a booking widget and a gallery without captions give them nothing to quote. The same facts as text — packages, starting prices, duration, service area, coating and film brands — with structured data for the business and its services, can be read and repeated."),
        p(
          "Getting named in those answers is ongoing work; see ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          ".",
        ),

        h2("How an auto detailing website design project runs"),
        ol("Brief. You send your packages, rough prices by vehicle size, service area, booking tool and a folder of before/after photos; recorded voice notes work as well as a document."),
        ol("Mobile mockups. You review the first screen, one package page and the booking steps as phone-sized mockups before anything is built."),
        ol("Development. The site is coded for speed, with an editor where you change prices, add packages and upload new before/after sets yourself."),
        ol("Launch. Booking, deposit payments, analytics and your Google profile are wired together, and a short written manual shows you how to update packages and galleries."),
        p(
          "My general approach to building sites is described on the ",
          link("website development", "/services/website-development"),
          " page.",
        ),

        h2("How much auto detailing website design costs"),
        p("Design and build are one price."),
        li("A simple auto detailing website — home page, packages with prices, gallery, about, service area and booking link: 700–1,400 €."),
        li("A full site with a page per package, before/after galleries, service area pages, booking with deposits and local SEO setup: from 2,000 €."),
        p(
          "After launch you pay for hosting and the domain, and me only for changes you ask for. Full ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Auto detailing website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does auto detailing website design cost?", "A simple detailing website costs 700–1,400 €; a site with package pages, before/after galleries, service area pages, booking with deposits and local SEO setup starts at 2,000 €. Design is part of both prices, and once I know your packages and area you get one fixed figure."],
          ["Can I keep Square, Jobber or Urable for bookings?", "Yes. The booking tool stays and is embedded in the site, styled to match. The site adds what the tool does not do well: package pages, galleries and text that search engines and AI assistants can read."],
          ["Should a detailing website show prices?", "Starting prices by vehicle size work well, with a line on what raises them. They filter out people expecting a car-wash price and make the rest more willing to book."],
          ["Should I take a deposit for detailing appointments?", "Many detailers do, especially for coatings, film and full-day jobs. The site shows the amount and the cancellation rules before payment, so a deposit reads as a fair rule, not a surprise."],
          ["Are auto detailing website templates good enough?", "For a first site with a few packages, often yes. They get awkward once you need a page per package, a gallery of hundreds of before/after sets and service area pages, and switching later means rebuilding from zero."],
          ["Will the website help me show up for “ceramic coating near me”?", "It gives search engines what they need: a page per package, the service area in text, matching business details and structured data. The map ranking itself also rests on your Google profile and steady reviews; I can handle both as ongoing work."],
          ["Do you work with detailing businesses in the US?", "Yes. Everything is done remotely from Poland, in English. Calls go in my afternoon or evening, which is morning across most of the US, and invoices are issued in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order auto detailing website design: what to send me"),
        p(
          "Send your business name, a link to your Instagram, Google profile or current site, your packages with rough prices by vehicle size, whether you work in a shop, on the road or both, the towns you cover and the booking tool you use. A handful of before/after sets tells me how large the gallery has to be. You will get a proposed page list and a fixed price in return. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
