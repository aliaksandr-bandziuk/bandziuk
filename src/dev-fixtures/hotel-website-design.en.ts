// Landing page fixture: Hotel website design (EN), group «hotel-website-design».
// Semantic core: ref/hotels.csv + hotels.md, group «website / design»: hotel
// website design / hotel design website / website design for hotel(s) /
// website hotel design / design hotel website / design website hotel — 390
// each (one Keyword Planner bucket); website design hotel 320; hotel website
// design templates / hotel website design template / website templates for
// hotels — 590 each; best hotel website design / best website design for
// hotel(s) / best hotel design website 70; website builder for hotels 70;
// luxury hotel website 70, luxury hotel website design 30; hotel website design
// company 50, hotel website design agency 30; boutique hotel website design 20;
// hotel website design ideas 10. Related searches: Hotel website design ideas,
// Hotel website builder, Luxury hotel website design, Best hotel websites.
// Intent: ref/intent-check-hotels.md — «hotel website design» vs «hotel
// website»: 0 shared URLs, 0 shared domains; «hotel website» and «website for
// hotels» are guests booking (booking.com, hotels.com, trivago, expedia), so
// NOT targeted here. «hotel website design» top-10: designhotels, pinterest,
// awwwards, dribbble, cvent, ueni, cloudbeds, behance → inspiration, templates
// and vendors. 0 shared URLs with «vacation rental website design».
// This page = what the guest sees and does: photo-led first screen, booking bar
// on mobile, book-direct reasons, room comparison, storytelling for boutique
// and luxury, location, restaurant/spa/events, languages and currency,
// accessibility, image speed, trust, templates vs custom, best-site patterns,
// choosing a company.
// NOT on this page: booking engine connection, rooms and rates management,
// multilingual build, hosting, ownership (/hotel-website); hotel SEO
// (/hotel-seo); vacation rentals and B&Bs (/vacation-rental-website-design);
// hotel restaurant as its own site (/restaurant-website-design); «hotel
// website», «website for hotels» — guests’ searches, no page.
// Owner's rule: new pages weave in AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const hotelWebsiteDesignEn = {
  lang: "en",
  group: "hotel-website-design",
  slug: "hotel-website-design",
  title: "Hotel website design",
  heading: "Hotel Website Design",
  excerpt:
    "I design and build hotel websites for independent and boutique hotels, guest houses and small hotel groups: a photo-led first screen, a booking bar that stays in reach on a phone, room pages guests can compare and a clear reason to book direct.",
  seo: {
    metaTitle: "Hotel Website Design for Independent Hotels | Bandziuk",
    metaDescription:
      "Hotel website design for independent and boutique hotels: photo-led pages, a booking bar on mobile, room comparison, languages. Design + build from 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Check-in · Check-out · Guests", "Best rate when you book direct", "Rooms and suites", "Restaurant · Spa · Map"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple hotel website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Hotel website with room-type pages, booking bar, restaurant, spa and event sections and language versions, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with hotel website design",
      items: [
        { _key: k("o"), iconName: "image", title: "A first screen led by your best photograph", text: "The stay, not the facade, loaded fast on a phone" },
        { _key: k("o"), iconName: "search", title: "A booking bar for dates and guests on every page", text: "Fixed on phones, handing dates to your booking engine" },
        { _key: k("o"), iconName: "trending-up", title: "A book-direct reason beside the booking bar", text: "Rate, perks and flexibility you choose to offer" },
        { _key: k("o"), iconName: "layers", title: "Room-type pages guests can compare", text: "Size, beds, view, bathroom and photos side by side" },
        { _key: k("o"), iconName: "map-pin", title: "Location, restaurant, spa and events", text: "Each section with its own visitor and its own action" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Rooms, amenities and location as text and structured data" },
      ],
      prices: [
        { _key: k("r"), label: "Simple hotel website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Room pages, booking bar, restaurant and spa, languages", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: image-led and multilingual websites I have designed",
      subtitle:
        "Multilingual, photo-led and booking-focused websites I have built and optimised — the same work a hotel website needs: clear pages, fast mobile layouts and visibility in search and AI answers.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "tyre-storage-landing-page-with-editable-seo",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your hotel website design",
      subtitle: "I reply within one business day with a proposed first screen, a room page and a rooms overview for a phone, and a fixed price.",
      contextLabel: "Hotel name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which best describes your hotel?", options: ["Independent city hotel", "Boutique or luxury hotel", "Country inn or guest house", "Two or more hotels"] },
        { _key: k("z"), question: "How do most guests book now?", options: ["Through OTAs", "Booking engine on our site", "Phone and email", "A mix"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design hotel websites for independent and boutique hotels, guest houses and small hotel groups, and I build them myself, so the design and the build come from one person at one price. A guest who opens a hotel’s own site has usually seen it on Booking.com, Expedia or Google Hotels already, and asks two things: does the place look as good as the listing promised, and is it worth booking here rather than on the platform. The design answers both within seconds on a phone."),

        h2("Hotel website design for mobile: a photo-led first screen with a booking bar"),
        p("Most hotel visits begin on a phone. The first screen carries four things:"),
        li("one strong photograph of what the stay feels like — the view from a room, the terrace at dusk, the breakfast table — rather than a wide shot of the facade"),
        li("the hotel name, the town and one line on what kind of place it is"),
        li("a booking bar with check-in, check-out and guests, visible without scrolling"),
        li("a short reason to book on this site, right next to the bar"),
        p("On a phone the booking bar folds into one button fixed at the bottom of the screen; a tap opens dates and guests, and the chosen dates are passed to your booking engine so the guest does not type them twice."),
        p(
          "How the booking engine is connected, and how rooms and rates are managed behind the site, is covered on the ",
          link("hotel website development", "/hotel-website"),
          " page.",
        ),
        h3("Large hotel photos that still load fast on a phone"),
        p("Hotels sell with pictures, and pictures make hotel sites slow. The design plans for weight from the start: modern image formats at the size each screen needs, the first photo loaded first and the rest as the guest scrolls, short muted video with a still frame until it plays, and galleries that open on tap. Speed is measured with Google’s Core Web Vitals on an average phone, not on an office laptop."),

        h2("Book-direct reasons and guest reviews next to the hotel booking bar"),
        p("Online travel agencies charge hotels a commission on each booking — typically somewhere in the 15–25% range on the major platforms, depending on contract and market. A guest needs a reason to book on your site, given at the moment of decision, so the design keeps a permanent space beside the booking bar for it:"),
        li("the best available rate when booking direct, if your agreements allow you to say so"),
        li("perks that cost little and matter to guests: breakfast, late checkout, parking, a room upgrade when available, flexible cancellation"),
        li("the benefit of dealing with the hotel itself: special requests go straight to reception"),
        p("What you may offer compared with the platforms depends on your country and OTA contracts; I design the space, you decide what goes in it. Beside it sit the signs guests check before paying: your Google or TripAdvisor score with a few recent reviews quoted as text, awards you actually hold, and a line saying payment is handled securely by your booking engine."),

        h2("Room-type pages in hotel website design: rooms guests can compare"),
        p("A guest choosing between a classic double and a junior suite wants the difference at a glance. Every room type gets its own page in one layout, and a rooms overview puts them side by side:"),
        li("size, bed type and maximum occupancy"),
        li("view and floor, said plainly — “courtyard side, quiet” is useful information"),
        li("the bathroom: shower or bath, and what is in it"),
        li("four to eight photos of that room type, one of them of the bathroom"),
        li("a “from” price where your booking engine can supply it, and a button that opens this room for the chosen dates"),
        p("On a desktop the overview is a comparison table; on a phone, cards the guest swipes through. Clear differences mean fewer calls to reception."),

        h2("Luxury hotel website design and boutique hotel website design: telling the story of the stay"),
        p("A luxury hotel website or a boutique hotel website sells what a room list cannot: the character of the place. The design gives that story room:"),
        li("a short sequence after the first screen — the building, the people, the details — in photographs with one sentence each"),
        li("the owner’s or the chef’s voice where it is real, in a few lines rather than a mission statement"),
        li("type, space and restraint doing the work of “luxury”, instead of gold gradients and script fonts"),
                p("The story must not bury the facts: a guest paying a high rate still wants check-in time, parking and the transfer in one tap. Boutique hotels with ten or twenty rooms gain most, because the story is what separates them from the chain hotel nearby, and what OTA listings show least."),

        h2("Location and map on a hotel website: where the hotel is and what is nearby"),
        p("“Where exactly is it?” decides many bookings. The location section shows:"),
        li("a map with the hotel pinned, loaded only when the guest opens it so it does not slow the page"),
        li("walking or driving times to the old town, the beach, the station or the airport"),
        li("how to arrive: parking, public transport, transfers and what to do when arriving late"),
        li("a few places your staff actually recommend"),
        p("Address and directions are written as text and match the hotel’s Google Business Profile, so guests and search engines read the same details."),

        h2("Restaurant, spa and event sections in website design for hotels"),
        p("Many hotels earn a large share of revenue outside the rooms, and each area gets a section designed for its own visitor:"),
        li("restaurant and bar: the menu as text, opening hours, table booking, and a clear note on whether non-residents are welcome"),
        li("spa: treatments with duration and price, hours for hotel guests and for day visitors, and a way to book"),
        li("meetings, weddings and events: capacities, floor plans, photos of real events and an inquiry form asking for date, guest count and type of event"),
        p(
          "These pages lead to their own action, not to the room booking bar. A hotel restaurant with its own name and following may deserve a separate site; ",
          link("restaurant website design", "/restaurant-website-design"),
          " covers that case.",
        ),

        h2("Language switcher, currency and accessibility in hotel website design"),
        p("The language switcher sits in the header of every page, lists language names rather than flags and keeps the guest on the same page after switching. Rooms are charged in the hotel’s currency; if your booking engine can show an estimate in the guest’s currency, the design labels it as an estimate and names the currency the card will be charged in."),
        p("Accessibility has two sides. The site follows the WCAG guidelines: readable text, enough contrast, a date picker that works with a keyboard and a screen reader. And guests with reduced mobility need facts, not a wheelchair icon: step-free entrance, lift, door widths, roll-in shower, which rooms are adapted — on an accessibility page and on each adapted room page."),

        h2("A hotel website that ChatGPT and Google AI Overviews can read"),
        p("Travelers increasingly ask ChatGPT, Perplexity or Google’s AI Overviews where to stay: “a hotel with a spa and sea-view rooms, good for a long weekend”. Assistants answer from what they can read and verify. Room sizes, amenities and check-in times inside images and sliders are hidden from them; the same facts as text, with Hotel structured data and details that match your Google Business Profile and OTA listings, can be read and repeated."),
        p(
          "Becoming a source for those answers takes ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Being found in Google search, on the map and in Google Hotels is covered on the ",
          link("hotel SEO", "/hotel-seo"),
          " page.",
        ),

        h2("Hotel website design templates and website builders for hotels vs a custom design"),
        p("Hotel website design templates and website templates for hotels look convincing in a demo full of professional photos and invented suites. A website builder for hotels, including those bundled with some booking engines and property-management systems, adds a working link to rates and availability. With a real hotel’s content the limits show: rooms that cannot be compared, one layout for restaurant and spa, a booking bar you cannot move and little control over image weight or language versions."),
        p("A template or builder is a fair start for a small guest house that sells mainly through OTAs. A custom design pays off when the site must win direct bookings: a boutique or luxury property, a restaurant, spa or events, several languages, or a small group where guests choose the hotel first and the room second."),

        h2("Best hotel website design: what the best hotel websites have in common"),
        p("Awwwards, Dribbble and Behance are full of hotel website design ideas, and many admired concepts never had to take a real booking. What the best website design for hotels shares is less dramatic:"),
        li("a photograph that shows the stay, not the building"),
        li("dates and guests one tap away on every page"),
        li("a stated reason to book direct, close to the booking bar"),
        li("room pages that let guests compare"),
        li("the location explained in minutes on foot and by car"),
        li("pages that open quickly on a phone despite large images"),

        h2("Choosing a hotel website design company or agency"),
        p("Hotel website design companies range from booking-engine vendors that bundle a website, to hospitality agencies with their own templates, to independent developers like me. Questions to ask any hotel website design agency:"),
        li("Who owns the site, the domain and the content if we change booking engine or stop working together?"),
        li("Can we move the booking bar and the book-direct offer, or only change colors?"),
        li("How fast does the home page load on a phone — measured, not promised?"),
        p("I work alone, not as an agency, and none of my published projects is a hotel. The process:"),
        ol("Brief: room types, facilities, photos, languages and your booking engine."),
        ol("Phone layouts of the first screen, a room page and the rooms overview, agreed with you."),
        ol("The rest of the site in the same system, built by me."),
        p(
          "If you already have a site and want a new design without losing your Google positions, the ",
          link("website redesign", "/services/website-redesign-services"),
          " process keeps addresses and redirects in place.",
        ),

        h2("How much hotel website design costs"),
        p("Design is not sold separately; it is part of building the site, and the price covers both."),
        li("A simple hotel website — home, rooms, location, contact and a link to your booking engine: 700–1,400 €."),
        li("A hotel website with room-type pages and comparison, a booking bar on every page, restaurant, spa and event sections, language versions and image speed work: from 2,000 €."),
        p(
          "Send a short description of the hotel and I will prepare a fixed quote. Owners and managers of holiday homes and apartments will find their version on the ",
          link("vacation rental website design", "/vacation-rental-website-design"),
          " page; full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Hotel website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does hotel website design cost?", "Design is included in the price of the website: 700–1,400 € for a simple hotel site, from 2,000 € for a site with room-type pages and comparison, a booking bar on every page, restaurant, spa and event sections and language versions. After a short description of the hotel I give a fixed quote."],
          ["Do you design hotel websites without building them?", "No. Design and build come together. How the booking bar, the date picker and the photo galleries behave on a phone is decided while building, and a design handed over as pictures loses most of that."],
          ["Will the design work with our booking engine?", "The booking bar is designed to pass dates and guests to the booking engine you use, whether Cloudbeds, SiteMinder, Mews or another. How much of the booking step can match the site’s look depends on the engine; I check it before the design starts."],
          ["Should we use a hotel website template or a website builder?", "A template or builder is enough for a small guest house that sells mostly through OTAs. Once the website has to win direct bookings, show several room types side by side, present a restaurant, spa or events and work in several languages, a custom design is usually worth it."],
          ["Do we need professional photos for the new design?", "For a hotel, yes, in most cases: photos are what guests book on. If a shoot is planned, I send the photographer a shot list based on the layout, so every picture has a place. Existing photos can be used where they are good enough."],
          ["How long does it take to design and build a hotel website?", "The phone layouts of the first screen, a room page and the rooms overview are usually ready one to two weeks after the brief. The whole site typically takes four to seven weeks, depending on the number of room types, languages and sections such as spa and events."],
          ["What is the design of our hotel website based on?", "On how your guests decide and book: your rooms, your photos, your booking engine and the reasons to book direct. I design the booking path first, then the pages around it, and test the result on a phone before launch. My portfolio shows multilingual sites, image-led premium sites and businesses with online booking built the same way."],
          ["Do you work with hotels outside Poland?", "Yes. Design and development are done remotely, in English, Polish or Russian, for hotels in any country. The site is set up for your guests’ languages, your currency and the review platforms they use."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order hotel website design: what to send me"),
        p(
          "Send the hotel name, a link to the current website or your OTA listing, the room types, the facilities such as restaurant, spa or meeting rooms, the languages your guests speak and the booking engine you use. A selection of your best photos helps me show you a first screen that looks like your hotel. I will reply with a proposed layout and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
