// Landing page fixture: Vacation rental website design (EN), group
// «vacation-rental-website-design».
// Semantic core: ref/hotels.csv + hotels.md, group «vacation rentals /
// apartments»: build a vacation rental website / build vacation rental website
// / vacation rental website create — 170 each; vacation rental website builder
// / builders — 170 each; vacation rental website design 110; best vacation
// rental website builder 110; vacation rental website templates / template —
// 70 each; vacation rental seo 70; create your own vacation rental website 40;
// website builder for vacation rental 40; create vacation rental website 40;
// best vacation rental website templates 40; bed and breakfast website builder
// 90; bed and breakfast website design 70 (website design for bed and
// breakfast); bed and breakfast website templates / template 50; long tail at
// 10: how to build / start a vacation rental website, vacation rental website
// developer, free vacation rental website builder, lodgify google vacation
// rentals.
// Intent: ref/intent-check-hotels.md — «vacation rental website» (320) and
// «website for vacation rental» (2 900) are guests (vacasa, vrbo, hometogo,
// evolve), so NOT targeted. «vacation rental website design» top-10: guesty,
// getfloorspace, reddit, pinterest, wixcreate, themeforest, hostfully,
// gethostai → owners choosing tools and templates. 0 shared URLs with «hotel
// website design»; 0 shared URLs between «vacation rental seo» and «hotel seo».
// «bed and breakfast website» is guests (bbonline, tripadvisor) → only the
// builder/design/templates phrases, in one H2.
// This page = design and build of a direct-booking site for vacation rental
// owners and managers: why direct, builder vs custom, property pages, booking
// widget from the PMS or channel manager, multi-property search, trust for a
// first direct booking (payments, deposits, cancellation, reviews), area
// guides, B&Bs, Google Vacation Rentals and SEO, process, price.
// NOT on this page: hotels with room types and front desk (/hotel-website-
// design, /hotel-website); ongoing SEO for lodging (/hotel-seo); «vacation
// rental website», «best vacation rental website», «bed and breakfast
// website» — guests’ searches, no page.
// Owner's rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const vacationRentalWebsiteDesignEn = {
  lang: "en",
  group: "vacation-rental-website-design",
  slug: "vacation-rental-website-design",
  title: "Vacation rental website design",
  heading: "Vacation Rental Website Design",
  excerpt:
    "I design and build direct-booking websites for vacation rental owners and property managers: property pages guests can decide on, the booking widget from your PMS or channel manager, and the trust a guest needs to book a stranger without Airbnb or Vrbo in between.",
  seo: {
    metaTitle: "Build a Direct-Booking Vacation Rental Website | Bandziuk",
    metaDescription:
      "Vacation rental website design and build for owners and managers: direct bookings, your PMS booking widget, property pages, B&B sites. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Check availability", "Book direct with the host", "Sleeps 6 · 3 bedrooms", "Secure payment"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple vacation rental or B&B website with your booking widget, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Vacation rental website for several properties with search, property and area pages, booking widget and search setup, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get when I build your vacation rental website",
      items: [
        { _key: k("o"), iconName: "image", title: "Property pages that answer every pre-booking question", text: "Gallery, beds, amenities, house rules, full price" },
        { _key: k("o"), iconName: "plug", title: "The booking widget from your PMS or channel manager", text: "One calendar, no double bookings with the platforms" },
        { _key: k("o"), iconName: "shield-check", title: "Trust for a guest’s first direct booking", text: "Reviews with sources, secure payment, clear cancellation" },
        { _key: k("o"), iconName: "search", title: "Search and filters for managers with many properties", text: "Dates, guests, area, pets, pool, parking" },
        { _key: k("o"), iconName: "map-pin", title: "Local area guides written by you", text: "A reason to come back, and real text for search" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Property facts as text, VacationRental structured data" },
      ],
      prices: [
        { _key: k("r"), label: "Simple vacation rental or B&B website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Several properties, search, area pages, booking widget", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: property, multilingual and booking-led websites",
      subtitle:
        "Multilingual, photo-led and booking-focused websites I have built and optimised — the same work a vacation rental website needs: clear pages, fast mobile layouts and visibility in search and AI answers.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote to build your vacation rental website",
      subtitle: "I reply within one business day with a proposed home page, a property page and the booking step for a phone, and a fixed price.",
      contextLabel: "Your listing or current website",
      contextPlaceholder: "Airbnb, Vrbo or website link",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How many properties do you rent out?", options: ["One", "2–5", "6–20", "More than 20"] },
        { _key: k("z"), question: "What runs your bookings now?", options: ["Airbnb or Vrbo only", "A PMS or channel manager", "A B&B booking system", "Spreadsheet and email"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design and build vacation rental websites for owners and property managers who want more direct bookings and less dependence on Airbnb and Vrbo. Design and build come from one person at one price. A direct-booking site has a harder job than a platform listing: the guest does not know you, has no platform guarantee to lean on and must decide to pay a stranger. Every page is laid out to make that first direct booking feel safe and the second one routine."),

        h2("Why build a vacation rental website: direct bookings, lower platform fees and your own guests"),
        p("Airbnb, Vrbo and Booking.com bring guests and charge for it, through service fees, commission or both, on every stay. They also keep the relationship: next year the same guest searches the platform again and may book the listing next door. Your own site changes that:"),
        li("a direct booking carries no platform commission, only your payment provider’s fee and your booking software"),
        li("with the guest’s consent you keep their email, so you can invite them back next season or offer an off-season rate"),
        li("repeat guests, their friends and people who found you on Google can book without a middleman"),
        p("For most owners a direct site sits next to the platforms rather than replacing them, and takes a growing share of returning and referred guests. Platforms have rules about sharing links and contact details with guests who booked through them, so check each platform’s terms before mentioning your site in messages."),

        h2("Vacation rental website builders or a custom site: which to choose"),
        p("The quickest way to create your own vacation rental website is the builder that comes with your property-management software. Guesty, Hostfully, Lodgify, OwnerRez and similar tools offer vacation rental website templates tied to their calendars and payments, and when people look for the best vacation rental website builder they usually mean one of these, or a general builder with a booking plugin."),
        p("A builder suits an owner with one or two properties who wants a working booking page this month. Its limits appear as the business grows:"),
        li("the site lives inside the software subscription, so changing PMS usually means losing the website"),
        li("the layout of property pages, search and area guides is fixed by the template"),
        li("control over speed, structured data and search setup is limited"),
        li("every owner on the same builder starts from the same few designs"),
        p("A custom site is yours: domain, content and code stay with you whichever booking software you use, and the booking widget is placed where it converts best. It costs more at the start and pays off for managers with several properties, for owners who want direct bookings to be a real share of revenue and for anyone who has outgrown a template."),

        h2("Vacation rental website design: property pages with photos, amenities, house rules and prices"),
        p("The booking is decided on the property page, so vacation rental website design starts there. Each property page answers, in this order:"),
        li("what and where: “Three-bedroom sea-view apartment, five minutes’ walk to the beach”"),
        li("a gallery that walks through the place room by room, full screen on tap, with bedrooms and bathrooms labeled"),
        li("sleeping arrangements as text: bedrooms, beds, sofa beds, cots"),
        li("amenities grouped as guests check them: kitchen, workspace, parking, air conditioning, pool, pets"),
        li("house rules, check-in and check-out times and how keys or codes are handed over"),
        li("the calendar and the total for the chosen dates, with cleaning fees and taxes shown before the last step"),
        p("Fees that appear only at checkout are a common reason guests abandon a direct booking. Where your city or region requires a registration or license number on listings, it goes on each property page as well."),

        h2("Booking widget and availability calendar from your PMS or channel manager"),
        p("A direct site must never double-book a property that is also on Airbnb and Vrbo. That is why the booking part normally comes from your property-management system or channel manager, which already keeps the platform calendars in sync. Most such tools offer a booking widget, a hosted booking page or an API for websites; which applies, and how far it can be styled, depends on the tool and your plan, and I check it before design starts."),
        p("The design then puts the widget where the decision happens: dates and guests beside the gallery, a fixed “Check availability” button on phones and a confirmation page saying what happens next. Without a PMS, the site can start with an inquiry form and a synced calendar and move to instant booking later."),

        h2("Multi-property vacation rental websites: portfolio search for property managers"),
        p("Managers with ten or fifty homes need a site that works like a small travel catalog:"),
        li("search by dates, guests and area on the home page, showing only properties free on those dates"),
        li("filters guests actually use: bedrooms, pets allowed, pool, sea view, parking, step-free access"),
        li("area pages grouping the properties in each town or resort"),
        li("a page for homeowners, if you also want to sign new properties to manage"),
        p("Photos, descriptions, amenities and rates come from the PMS where it allows, so the team updates one place, not two."),

        h2("Trust for a first direct booking: reviews, secure payment, deposits and cancellation"),
        p("On a platform the guest trusts the platform. On your site they have to trust you, and they look for proof before entering a card number:"),
        li("reviews imported through your PMS where it supports that, or quoted from Airbnb, Vrbo and Google with source and date — never invented or edited"),
        li("who you are: a photo of the owner or team, a real address, a phone number or WhatsApp"),
        li("payment through a known payment provider, clearly part of your booking software"),
        li("the cancellation policy in plain words next to the price, not only in the terms"),
        li("the deposit and damage policy: a refundable security deposit, a card hold, a damage waiver or insurance, and when money is returned"),
        p("Which deposit and damage options are available depends on your booking software, payment provider and local rules; the design makes the one you choose visible before the guest pays."),

        h2("Local area guides on a vacation rental website"),
        p("Guests choose a rental by the place around it as much as by the property. Guides written by the owner — the bakery that opens at seven, the beach that stays quiet in August, where to park for the trail, what to do on a rainy day — help guests decide, give past guests a reason to return to the site and give search engines and AI assistants real local text. Each guide links to the nearby properties. Check-in instructions, Wi-Fi details and house manuals can sit in a private section for booked guests."),

        h2("Bed and breakfast website design and B&B website builders"),
        p("A bed and breakfast sells something different from a whole-home rental: rooms in a house where the hosts live, breakfast and the hosts themselves. Bed and breakfast website design reflects that:"),
        li("the hosts on or near the first screen, with a few lines in their own words"),
        li("breakfast described as it is: what is served, when, and which dietary needs you cater for"),
        li("a page per room, booked by room rather than by whole property"),
        li("what guests should know before arriving: quiet hours, check-in window, children and pets"),
        p(
          "Bed and breakfast website builders and bed and breakfast website templates, often bundled with room-based booking systems, fit a B&B with two or three rooms. A larger guest house with a restaurant or events is closer to a small hotel; ",
          link("hotel website design", "/hotel-website-design"),
          " covers that case.",
        ),

        h2("Vacation rental SEO: being found in Google Vacation Rentals and search"),
        p("Google shows vacation rentals in its own listings, with prices and availability. Properties get there through connectivity partners — usually channel managers and property-management systems that send Google your rates and availability — under eligibility rules Google sets. The website’s role is to be the official site those listings point to and the place where the guest completes the booking."),
        p(
          "Ordinary vacation rental SEO does the rest: a page per property and per area with a clear title, VacationRental and LodgingBusiness structured data, fast pages and a Google Business Profile where your type of rental qualifies. “Apartments in [town] with parking” is a realistic target for a small site; “vacation rentals in [country]” usually is not. Ongoing search work for lodging businesses is described on the ",
          link("hotel SEO", "/hotel-seo"),
          " page.",
        ),

        h2("A vacation rental website that ChatGPT and Google AI Overviews can read"),
        p("Travelers now ask ChatGPT, Perplexity and Google’s AI Overviews for places to stay: “a dog-friendly cabin by a lake for six”, “an old-town apartment with a balcony and parking”. Assistants recommend what they can read and check. Bedrooms, beds, amenities, pet rules, distances and prices written as text, with structured data matching your platform listings, give them something to repeat; details locked inside a booking widget or a photo give them nothing."),
        p(
          "Getting your properties into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How to create a vacation rental website: the process"),
        ol("Brief. You send the properties, photos, your PMS or channel manager, house rules and the questions guests ask most."),
        ol("Booking check. I confirm what your booking software allows on a website before anything is designed."),
        ol("Phone layouts. The home page, a property page and the booking step are designed on a phone screen and agreed with you."),
        ol("Build. A site that loads a full gallery quickly on mobile data, with property pages your team can edit."),
        ol("Launch. Redirects from any old site, structured data, analytics and a test booking before going live."),
        p(
          "Hotels with room types, a front desk and a booking engine will find what goes into a ",
          link("hotel website", "/hotel-website"),
          " on a separate page.",
        ),

        h2("How much it costs to build a vacation rental website"),
        p("Design is part of building the site, and the price covers both."),
        li("A simple vacation rental or B&B website for one or a few properties, with your booking widget: 700–1,400 €."),
        li("A vacation rental website for a portfolio of properties, with search, property and area pages, booking widget and search setup: from 2,000 €."),
        p(
          "Booking software subscriptions and payment fees are paid to their providers and are not part of the price. Send your listing links and I will prepare a fixed quote; full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Vacation rental website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does it cost to build a vacation rental website?", "Design is included: 700–1,400 € for a simple vacation rental or B&B site with your booking widget, from 2,000 € for a site with several properties, search, property and area pages and search setup. Booking software and payment fees are paid separately to their providers. After a look at your listings I give a fixed quote."],
          ["Should I use a vacation rental website builder or a custom site?", "A builder from your PMS is a good start for one or two properties. A custom site makes sense when you manage several properties, want the website to stay yours if you change software, or need control over design, speed and search setup."],
          ["Can the website use the booking engine from my PMS or channel manager?", "Usually yes: most tools such as Guesty, Hostfully, Lodgify or OwnerRez offer a booking widget, a booking page or an API. What is possible depends on the tool and your plan, so I check it before the design starts rather than promise it."],
          ["Will a direct booking website replace Airbnb and Vrbo?", "For most owners, no. The platforms keep bringing new guests; the website takes returning guests, referrals and people who find you on Google. Over time the direct share can grow, and every direct booking avoids the platform commission."],
          ["How do I get my property into Google Vacation Rentals?", "Through a connectivity partner, usually your channel manager or PMS, which sends Google your rates and availability. Google sets the eligibility rules. Your website is the official site those listings can link to."],
          ["Can guests pay deposits online?", "Yes, through your booking software and its payment provider: full payment, a deposit with the balance later, or a refundable security deposit or card hold, depending on what the tool supports. The design shows the terms before the guest pays."],
          ["What is a vacation rental website built around?", "Around the booking: property pages with photos, amenities, house rules and prices, the availability calendar and booking widget from your PMS or channel manager, and the trust signals a guest needs before a first direct booking. My portfolio shows property, multilingual and booking-focused sites built on the same principles."],
          ["Do you work with owners and managers outside Poland?", "Yes. Design and development are done remotely, in English, Polish or Russian, for properties in any country, with the languages, currency and local rules your guests need."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a vacation rental website: what to send me"),
        p(
          "Send links to your Airbnb, Vrbo or Booking.com listings or your current website, the number of properties, the PMS or channel manager you use and the languages your guests speak. Your best photos and a few lines about the area help me show you a property page that looks like your place. I will reply with a proposed layout and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
