// Landing page fixture: Hotel SEO Services (EN), group «hotel-seo».
// Semantic core: ref/hotels.md / hotels.csv, SEO / marketing group: seo for
// hotels 1900, seo hotel 1900, seo for hotel 1900, hotel seo 480, seo for hotel
// industry 480 (seo hotel industry 480), hotel seo services 170, hotel seo
// agency 110, seo agency for hotels 110, hotel seo strategy 90, seo strategy
// for hotels 90, hotel seo company 90 (hotel seo companies 90), seo services
// for hotels 70, seo for hotel website 50 (hotel website seo 50), seo keywords
// for hotels 40 (H2 on keyword research), local seo for hotels 40 (one H2, no
// page of its own), hotel seo tips 30 (seo tips for hotels 30, how to do seo
// for hotels 30).
// PAA: What is SEO in hotels? (H2 + FAQ). How much does SEO usually cost? Is
// SEO dead now with AI? (FAQ). Not used: What is the 72 hour rule in hotels?
// (operations, not SEO).
// Intent: ref/intent-check-hotels.md — «hotel seo» vs «local seo for hotels» 0
// shared URLs; at 40/month it gets one H2 here, not a page. «hotel seo» vs
// «hotel digital marketing» 0 shared (agencies doing everything) → mentioned
// only: the owner does the SEO part. «hotel seo» vs «vacation rental seo» 0
// shared → not on this page.
// NOT on this page: building the site (/hotel-website); design
// (/hotel-website-design); vacation rentals (/vacation-rental-website-design;
// «vacation rental seo» 70 has no page yet); the hotel restaurant
// (/restaurant-seo). «website for hotels» / «hotel website» — guests booking
// rooms (OTA and chain SERP), not targeted. Noise excluded: «seo hotel
// machakos», «Seo Eun-soo / Hotel del Luna» (a TV series), «hotel seoul»,
// «hotel marketing jobs».
// Owner’s rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, h3, li, ol, link, k } from "./pt";

export const hotelSeoEn = {
  lang: "en",
  group: "hotel-seo",
  slug: "hotel-seo",
  title: "Hotel SEO services",
  heading: "Hotel SEO Services",
  excerpt:
    "I provide hotel SEO services for independent and boutique hotels, small hotel groups and B&Bs: room, location and event pages, Google Hotels and the business profile, language versions and AI answers, so guests who search for a place to stay book on your own site instead of an OTA.",
  seo: {
    metaTitle: "SEO for Hotels: More Direct Bookings | Bandziuk",
    metaDescription:
      "Hotel SEO services: brand search, room and event pages, Google Hotels, hreflang for guests abroad and AI answers, measured in direct bookings. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Direct bookings + AI answers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Hotel near the old town", "Check availability", "Book direct", "Suite with sea view"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Hotel SEO audit: website, brand search and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off hotel SEO work: room and event pages, language versions, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a hotel", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with hotel SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data for your destination and guests", text: "Area, room type and occasion searches with real volumes" },
        { _key: k("o"), iconName: "layers", title: "Room, location and event pages", text: "Suites, the neighborhood, weddings and meetings" },
        { _key: k("o"), iconName: "map-pin", title: "Google Business Profile and Google Hotels", text: "Hotel category, amenities, photos, free booking links" },
        { _key: k("o"), iconName: "message-circle", title: "Language versions for foreign guests", text: "Separate pages per language, linked with hreflang" },
        { _key: k("o"), iconName: "sparkles", title: "Recommended in ChatGPT and AI Overviews", text: "Location, amenities and policies written as plain facts" },
        { _key: k("o"), iconName: "trending-up", title: "Direct bookings from search, reported", text: "Revenue through your booking engine, not positions" },
      ],
      prices: [
        { _key: k("r"), label: "Hotel SEO audit: website, brand search, Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a hotel", value: "from 800 € / month", note: "pages, seasons, AI visibility", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: multilingual and local service websites I have built and optimized",
      subtitle:
        "Multilingual, photo-led and booking-focused websites I have built and optimised — the same work a hotel needs: clear pages, fast mobile layouts and visibility in search and AI answers.",
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your hotel",
      subtitle: "I reply within one business day with what I would fix first on your hotel website and Google listing, and a fixed price.",
      contextLabel: "Hotel name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where do most bookings come from now?", options: ["Booking.com, Expedia and other OTAs", "Direct through our website", "Phone and email", "Tour operators and groups"] },
        { _key: k("z"), question: "What kind of property is it?", options: ["Independent or boutique hotel", "Small hotel group", "B&B or guest house", "Resort or spa hotel"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Hotel SEO services are the work that puts a hotel’s own website in front of travelers who search for a place to stay in your destination, and turns those visits into direct bookings instead of commission paid to an OTA. I do it myself, as a single SEO specialist who also builds websites, and I report on bookings that came through your own booking engine from search."),

        h2("What is SEO in hotels: how an independent hotel gets found and booked through Google"),
        p("SEO in hotels, or SEO for the hotel industry, means making your website and Google presence the place where a guest finishes the booking. A guest usually touches search several times:"),
        li("choosing the area — “hotel near the convention center”, “quiet hotel in the old town with parking”, “family hotel by the lake” — often on a phone, weeks before the trip"),
        li("comparing rates and reviews on Google Hotels, Booking.com or TripAdvisor"),
        li("checking the hotel by name, which is the moment that decides whether the booking goes through your engine or through an OTA"),
        p("“Hotels in [city]” is filled with OTAs, metasearch sites and chains. Independent and boutique hotels win on longer searches that describe what a guest wants, and on their own name."),

        h2("Hotel SEO and OTAs: why Booking.com outranks your own hotel website for your name"),
        p("Search the name of almost any independent hotel and Booking.com, Expedia or TripAdvisor often appear above the hotel’s own site. OTAs have very strong domains, and in many markets they also bid on hotel names in paid search. Each booking that goes that way carries a commission — typically 15–25% for hotels on major OTAs, depending on the contract — for a guest who was already looking for you."),
        p("SEO will not remove OTAs, and most hotels still need them. What it can do is win the brand search:"),
        li("a home page whose title, text and structured data clearly belong to the hotel, with the exact name, town and address"),
        li("a visible “check availability” button that opens the booking engine with dates, not a contact form"),
        li("a clear note on what booking direct gives — breakfast, late check-out, a free cancellation window — within what your OTA contracts and local rules allow"),
        li("the Google Business Profile linking to your site, not to an OTA listing"),
        p("I check what appears for your name and its misspellings in each main guest market; a guest in Germany may see a different result than one at home."),

        h2("Google Hotels and free booking links: showing your direct rate next to the OTAs"),
        p("When someone searches for a hotel, Google often shows a booking panel with prices from several sites. A hotel can appear there with its own rate through Google Hotel Center and a connectivity partner — usually a booking engine, channel manager or PMS provider such as Cloudbeds, SiteMinder or Mews; whether yours offers this is a question for the provider. The basic listings, called free booking links, are not charged per click. Paid Hotel Ads are a separate option."),
        p("Your direct rate then sits next to OTA prices at the moment the guest compares. That only pays off if the engine is fast on phones and shows the same rates and room names as the listing."),

        h2("SEO keywords for hotels: destination, room type, occasion and the kind of guest"),
        p("Useful SEO keywords for hotels describe the stay, not only the town. Guests combine a place with something that matters to them:"),
        li("place and detail: “hotel near [station or stadium]”, “hotel in [town] with free parking”, “hotel with sea view [town]”"),
        li("room type: “two-bedroom family suite”, “room with hot tub”, “accessible room with roll-in shower”"),
        li("occasion: “wedding venue with accommodation [region]”, “conference hotel [city]”, “romantic weekend [region]”"),
        li("guest: “pet-friendly hotel”, “adults-only hotel”"),
        p("I pull volumes for your destination in your guests’ languages, check what the OTAs hold, and give each phrase one page — choosing the ones a small property can realistically win."),

        h2("Room and suite pages, location pages and event pages on a hotel website"),
        p("One “Rooms” page with a gallery is not enough."),
        h3("Room and suite pages"),
        p("Each room type gets its own page: size, beds, view, occupancy, accessibility, real photos and a booking button that opens the engine for that room if the engine allows it."),
        h3("Location and nearby-attraction pages written from what the hotel knows"),
        p("An area page ranks when it is accurate: walking times you have measured, which bus goes to the airport, where to park. “Minutes from” everything, or forty thin pages for every museum in town, do the opposite. One good area guide and a few pages for places guests really come for — a congress center, a ski lift, a hospital — are enough."),
        h3("Meetings, weddings and group pages"),
        p(
          "Planners and couples search separately from leisure guests, and one wedding can fill the hotel for a weekend. These pages need capacity per layout, catering, room blocks, open dates and a request form. If the hotel restaurant takes outside guests, it can rank on its own; the ",
          link("restaurant SEO", "/restaurant-seo"),
          " page explains how.",
        ),

        h2("Local SEO for hotels: Google Business Profile, the map and guest reviews"),
        p("For “hotels near me” and searches in Google Maps, the Google Business Profile matters more than the website: the primary category “Hotel” (or bed and breakfast, inn), check-in and check-out times, amenities such as parking, pool, breakfast and pets, current photos, and the website link pointing to your own site."),
        h3("Hotel reviews on Google and TripAdvisor"),
        p("Guests read Google and TripAdvisor reviews before booking, and AI assistants summarize them. A routine works: a request in the post-stay email and a reply to every review within days, critical ones included. Buying reviews or asking only happy-looking guests breaks Google’s rules."),

        h2("Multilingual hotel SEO: language versions and hreflang for international guests"),
        p("Guests from abroad search in their own language, and their searches are not translations of yours. What works:"),
        li("a separate URL for each language, written or edited by someone who speaks it, rather than an automatic translation widget"),
        li("hreflang tags linking the versions, so Google shows each guest the right one"),
        li("the same rooms, prices, policies and amenities in every version, so guests and AI assistants do not get conflicting facts"),
                p("Multilingual SEO is a regular part of my work; an example is in the portfolio above."),

        h2("Technical SEO for a hotel website: booking engine pages, speed and Hotel structured data"),
        p("The usual technical problems in SEO for hotel websites:"),
        li("a full-screen video or photo slider, so the main content appears on a phone after more than 2.5 seconds"),
        li("a booking widget script that slows every page, including those where nobody books"),
        li("a booking engine on another domain without cross-domain tracking, so bookings from search show up as referrals from the engine"),
                li("no structured data, or markup that does not match the page"),
        p("Structured data of the type Hotel (a LodgingBusiness in schema.org) gives search engines and assistants the address, check-in times, amenities, the official star rating if there is one, and room types. It must match what the page shows."),
        p(
          "If the site needs rebuilding rather than fixing, the ",
          link("hotel website development", "/hotel-website"),
          " page describes how I build one, and ",
          link("hotel website design", "/hotel-website-design"),
          " covers the design side. Owners of apartments and villas will find their version on the ",
          link("vacation rental website design", "/vacation-rental-website-design"),
          " page.",
        ),

        h2("Seasonality in hotel SEO: publishing before the high season, not during it"),
        p("Guests plan summer holidays, ski trips and event weekends months ahead, and a new page needs weeks or months to rank. So seasonal pages go live or get updated well before the season:"),
        li("seasonal pages keep the same URL every year, with new dates and prices"),
        li("events that bring guests — a trade fair, a festival, a marathon — get a page as soon as the dates are announced"),
        li("low-season offers such as spa weekends or long stays get their own pages, because that is when a direct booking is worth most"),

        h2("Hotel SEO for ChatGPT and Google AI Overviews: when travelers ask AI where to stay (GEO, AEO)"),
        p("Travelers now ask ChatGPT, Perplexity or Google’s AI Overviews for a quiet hotel near the old town with parking, and the answer names properties before anyone sees a list of links. Getting a hotel into those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For a hotel it means:"),
        li("the location described in words, with distances to the places guests ask about"),
        li("amenities and policies — parking, pets, children, breakfast hours, accessibility, check-in — written as plain text, not only in icons and images"),
        li("who the hotel suits and who it does not, which assistants often repeat"),
        li("the same name, address and details on your site, on Google, TripAdvisor and the OTAs, which assistants compare"),
        p(
          "I check how assistants describe your hotel before the work and again after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Hotel SEO strategy and tips: what to fix first, and who should do it"),
        p("A sensible hotel SEO strategy follows the money. These hotel SEO tips are in the order I usually work:"),
        ol("Win the search for your own name in every main guest market."),
        ol("Fix the Google Business Profile and ask your booking provider about Google Hotels."),
        ol("Make the booking engine fast and its bookings measurable."),
        ol("Give each room type, event space and key location its own page."),
        ol("Add language versions for the countries your guests come from."),
        ol("Publish seasonal and event pages ahead of time, then keep them current."),
        p("Hotel digital marketing from an agency is usually a package: paid search, metasearch ads, social media, email. I do the SEO part, plus the website when needed; I do not run ads or social accounts. Whether you hire a hotel SEO agency, a hotel SEO company or one specialist, ask:"),
        li("Will you report direct bookings and revenue from search, or only rankings?"),
        li("Who owns the website, the domain, the Google profile and the Hotel Center account if we stop working together?"),
        li("Will the pages be written from our rooms, policies and area, or will generic travel content be published under our name?"),
        
        h2("How much hotel SEO services cost"),
        li("SEO audit of the hotel website, brand search and Google Business Profile: from 250 €, one-off, with fixes listed in order of impact."),
        li("One-off hotel SEO work — room and event pages, language versions, structured data, technical fixes: 250–700 €."),
        li("Monthly SEO for a hotel — new pages, seasonal updates, review routine, AI visibility and reporting on direct bookings: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "A small hotel or B&B often gets most of the result from the audit, brand search fixes and a few good room and area pages. All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Hotel SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What is SEO in hotels?", "It is the work that makes a hotel’s own website and Google listing appear when travelers search for a place to stay, a room type or a venue in your destination, and that brings bookings through your own engine: brand search, room, location and event pages, Google Hotels, the business profile, language versions, structured data and AI answers. Paid ads and OTA management are separate."],
          ["How much does SEO usually cost?", "For a hotel: an audit from 250 € one-off, single pieces of work 250–700 €, monthly SEO from 800 € per month, or from 1,300 € in very competitive cities. I give a fixed price after a short description of the hotel, its destination and where its guests come from."],
          ["Can SEO make us less dependent on Booking.com and Expedia?", "It can move part of the bookings to your own site — mostly guests who already know your name or search for something specific you offer. It will not replace OTAs for guests who start there. Most hotels keep both and use SEO to pay commission on fewer bookings."],
          ["Are free booking links on Google Hotels really free?", "Google does not charge per click for them. You need a Hotel Center account and a connectivity partner, usually your booking engine or channel manager, which may have its own terms. Paid Hotel Ads are a separate option."],
          ["How long does hotel SEO take?", "Brand search and Google profile fixes can show within weeks. New room, area and event pages usually need two to four months, longer in big tourist cities, which is why seasonal pages go live well before the season."],
          ["Is SEO dead now with AI?", "No, it has changed. Assistants recommend hotels from what they can read on your website, your Google profile, review sites and OTAs. Clear facts, structured data and the same details everywhere serve both search engines and assistants, so one piece of work covers both."],
          ["Do you also do hotel digital marketing — ads, social media, email?", "No. I do the SEO part and build or rebuild the website when needed. Paid search, metasearch ads and social media are better handled by an agency or your own team; the SEO work fits alongside them."],
          ["Do you work with hotels outside Poland?", "Yes. Hotel SEO is done remotely, for independent hotels, small hotel groups, B&Bs and guest houses in Europe, North America and elsewhere. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your hotel: what to send me"),
        p(
          "Send the hotel name, the website and Google Maps links, the booking engine or channel manager you use, roughly what share of bookings comes from OTAs, the countries and languages your guests come from, your high and low seasons, and the rooms, dates or events you most want to fill. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
