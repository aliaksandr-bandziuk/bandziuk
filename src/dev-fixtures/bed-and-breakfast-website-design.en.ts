// Landing page fixture: Bed and breakfast website design (EN), group
// «bed-and-breakfast-website-design». New page.
// Semantic core: ref/creative-leisure.md, b&b / guesthouses group (US):
// bed and breakfast website design 70 + website design for bed and breakfast
// 70 (H1, metaTitle, several H2) · best bed and breakfast website design 10 and
// bed and breakfast website design inspiration 10 (ideas H2). «best bed and
// breakfast savannah» 390 and «savannah bed and breakfast wedding» 10 are
// guests’ searches — not targeted. No PAA for this group.
// Intent: ref/intent-check-creative-leisure.md — «bed and breakfast website
// design» vs «vacation rental website design» 0 of 10 shared URLs, 1 shared
// domain → separate page from /vacation-rental-website-design (linked once as
// the neighbour for whole-home rentals, together with /hotel-website-design);
// «website for bed and breakfast» vs «bed and breakfast website design» 0
// shared → the first is travelers looking for inns (bbonline, Tripadvisor,
// Expedia, Vrbo) — not ours. Design SERP: Acorn, InsideOut, Lodgify, MotoPress,
// Zarla, Webflow, Dribbble, Colorlib — studios, builders, galleries.
// Reader: the owner-innkeeper of a B&B or small inn with a handful of rooms.
// Angles: owner-run house, direct bookings vs OTA commissions (Booking.com,
// Expedia, Airbnb — general, no percentages), booking engine and channel
// manager (Lodgify, Little Hotelier, Cloudbeds, ResNexus, ThinkReservations —
// general), room pages, breakfast page and local guide, multilingual guests,
// Google hotel results and reviews (one H2, local SEO linked), ideas and
// templates, AI-readable site (BedAndBreakfast structured data), process, cost.
// NOT on this page: hotels with a front desk (/hotel-website-design) and
// whole-home rentals (/vacation-rental-website-design) — neighbours, linked
// once; ongoing SEO and map work (/services/local-seo-services — linked);
// ads; OTA listing management.
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search; no invented figures.
import { p, h2, li, ol, link, k } from "./pt";

export const bedAndBreakfastWebsiteDesignEn = {
  lang: "en",
  group: "bed-and-breakfast-website-design",
  slug: "bed-and-breakfast-website-design",
  title: "Bed and breakfast website design",
  heading: "Bed and Breakfast Website Design",
  excerpt:
    "Bed and breakfast website design and build from one person: a booking engine on your own site so more guests book direct instead of through OTAs, a page for every room, breakfast and local guide pages, and versions in the languages your guests speak.",
  seo: {
    metaTitle: "Website Design for B&Bs and Small Inns | Bandziuk",
    metaDescription:
      "Bed and breakfast website design: direct bookings through your own booking engine, room pages, breakfast and local guide, languages for guests. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Built for direct bookings"],
  heroPhonePoints: ["Check availability", "The Garden Room · king bed", "Breakfast 8–10 am", "Book direct with us"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple bed and breakfast website with a booking engine widget, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Bed and breakfast website with a page for each room, booking engine integration, breakfast and local guide pages, a second language and local SEO setup, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with bed and breakfast website design",
      items: [
        { _key: k("o"), iconName: "plug", title: "A booking engine on your own site", text: "Lodgify, Little Hotelier or the system you already use" },
        { _key: k("o"), iconName: "trending-up", title: "Reasons to book direct, stated plainly", text: "Perks you can really offer, next to the button" },
        { _key: k("o"), iconName: "image", title: "A page for every room", text: "Photos, bed size, bathroom, floor and view" },
        { _key: k("o"), iconName: "file-text", title: "Breakfast and local guide pages", text: "What you serve, where guests go, how to get here" },
        { _key: k("o"), iconName: "message-circle", title: "The languages your guests speak", text: "Rooms, policies and the booking step translated" },
        { _key: k("o"), iconName: "sparkles", title: "Rooms and policies ChatGPT can read", text: "Plain text and structured data, not pictures" },
      ],
      prices: [
        { _key: k("r"), label: "Simple B&B website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Room pages, booking engine, guides, languages", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Websites where photos, bookings and several languages do the selling",
      subtitle:
        "Cyprus VIP Estates is a property site I built from scratch in five languages, Hebrew among them, with a catalog you filter and browse on a map, video, and enquiries that go straight to the CRM; I still run its SEO every month. For a renovation and property-investment firm in Warsaw I made a premium-looking site that lets photos of finished interiors persuade. An education agency’s site speaks to students across ten countries. For DJ and producer Sasha Dith I built a Next.js site from his Figma design, with lazy-loaded media that opens in under a second and a booking form over a concert background. Landi Room, a beauty salon in Warsaw, takes payment for its online course with Stripe Checkout and sends every buyer a private video link without anyone lifting a finger. Between them they cover what a B&B site is made of: large photos that open fast, a booking or payment step that works on a phone, and pages in the guest’s language.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "official-website-for-dj-and-producer-sasha-dith",
        "e-commerce-landing-page-with-secured-video-access",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your bed and breakfast website design",
      subtitle: "Within one business day I reply with a proposed page list — rooms, breakfast, local guide, booking — and a fixed price.",
      contextLabel: "Inn name, current website or Booking.com listing",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where do most of your bookings come from now?", options: ["Booking.com, Expedia or Airbnb", "Phone calls and email", "Our current website", "Repeat guests and referrals"] },
        { _key: k("z"), question: "How big is your B&B?", options: ["2–4 rooms", "5–10 rooms", "11–20 rooms", "Rooms plus a cottage or event space"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Bed and breakfast website design is the work I do for innkeepers and owners of small guesthouses: I plan, design and build the site myself, from the room pages to the booking engine, for one fixed price. A B&B website has one main job — turning a guest who found you on Booking.com, on Google or through a friend into a guest who books with you directly — and a second job that matters as much: showing people what a stay in your house is like before they arrive."),

        h2("Bed and breakfast website design for innkeepers who run the house themselves"),
        p("In most B&Bs the owners cook breakfast, turn over the rooms, answer the phone and wait up for late arrivals. The website has to work while all of that is going on, and it has to be easy for them to change. On an ordinary day it should:"),
        li("show live availability and take a booking at two in the morning without waking anyone"),
        li("answer the questions you hear at every check-in — parking, arrival times, pets, children, stairs, dietary needs at breakfast"),
        li("let you change a rate, close a room for repairs or add a winter package from your phone"),
        li("look like your house, not like a hotel chain: your rooms, your porch, your street"),
        p("Guests choose a B&B for the hosts and the house as much as for the room. A photo of you, a few lines on why you opened and how breakfast works do more on the home page than a slogan about comfort and charm."),

        h2("Direct bookings vs OTA commissions on a bed and breakfast website"),
        p("Booking.com, Expedia and Airbnb bring guests a small inn could never reach alone, and most B&Bs keep their listings. The price is a commission on every stay and less contact with the guest before arrival. A website does not replace the platforms; it gives returning guests, and people who first saw you there, a reason and an easy way to book with you next time:"),
        li("a booking button on every screen with live availability, so nobody has to email and wait for an answer"),
        li("a short, true list of what booking direct gets them — first pick of rooms, flexible check-in, a bottle of local wine, easier changes — whatever you can actually offer"),
        li("the same or a better rate than on the platforms, where your agreements allow it"),
        li("a line in the confirmation email and a card in the room inviting guests to book their next stay on your site"),
        p("Analytics count bookings made through the site each month and the pages they started from, so you can set that number next to what you pay the platforms. That comparison tells you whether the site is doing its job."),

        h2("Choosing a booking engine for a B&B website: Lodgify, Little Hotelier and others"),
        p("The booking engine is the part guests use to pick dates, choose a room and pay. Small inns rent one rather than build it: Lodgify, Little Hotelier, Cloudbeds, ResNexus, ThinkReservations and others. Most include a channel manager that keeps availability in sync with the platforms, so the same room is not sold twice. I build the site around the engine you already use, or help you choose one by checking:"),
        li("whether it syncs with every platform you list on, and how quickly"),
        li("whether the booking step can stay on your domain and match the site’s look"),
        li("whether it takes deposits and card payments the way you want, with your cancellation policy shown before payment"),
        li("how it behaves on a phone, where most guests book"),
        li("whether it can send your direct rate to Google’s hotel results"),
        p("If you have a system you like, the site uses its widget and links and leaves reservations where they are."),

        h2("Room pages on a B&B website: photos, beds, bathrooms and stairs"),
        p("In a bed and breakfast no two rooms are the same, and guests know it. Each room gets its own page, and a room overview lets people compare them without opening each one:"),
        li("eight to fifteen daylight photos, including the bathroom and the view from the window"),
        li("bed size and number of beds, and who the room suits — a couple, a family with a child, a solo traveler"),
        li("the bathroom: private or shared, en suite or across the hall, shower or clawfoot tub"),
        li("the floor and the stairs, so a guest who struggles with steps is not booked into the attic"),
        li("the rate range across seasons and a booking button for that exact room"),
        p("Photos are resized for each screen and load as the guest scrolls, so a room page opens quickly on a weak rural signal. Honest details mean fewer surprises at check-in and fewer reviews that begin with “the room was smaller than…”."),

        h2("The breakfast page and the local guide on a bed and breakfast website"),
        p("Breakfast is half the name and often the part guests remember. Its page says when and where it is served, what a typical morning looks like, what comes from nearby farms or your own garden, and how you handle gluten-free, vegan or allergy requests — with photos of your real plates, not stock pastries."),
        p("The local guide answers the question that comes right after booking: what is there to do here. Write it the way you would talk to a guest at the table:"),
        li("how to reach you from the airport, the interstate or the train, and where to park"),
        li("what is within walking distance: the restaurant you send people to, the trail, the beach, Main Street"),
        li("day trips — wineries, state parks, historic towns — with driving times"),
        li("the seasons: fall color, ski weeks, summer festivals, and what closes in winter"),
        p("These pages also bring visitors from search, because people read about an area before they pick where to sleep, and they give AI assistants concrete facts to quote about your inn."),

        h2("A multilingual bed and breakfast website for international guests"),
        p("A B&B in a tourist region hosts travelers from abroad, and many of them prefer to book in their own language. The site gets a language version only where you actually see those guests — for example Spanish, French or German — and that version covers the whole path to a booking:"),
        li("room pages, house rules and the cancellation policy, translated and read by a person"),
        li("the booking engine switched to the same language, with prices shown in the guest’s currency where the engine allows"),
        li("directions written for someone who has never driven in your state"),
        li("hreflang tags, so Google shows each guest the right version"),
        p(
          "How I plan and build sites in several languages is described on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page.",
        ),

        h2("Google hotel results, reviews and local search for a B&B"),
        p("When someone searches for a place to stay in your town, Google shows a map and a list of lodgings with prices and reviews. A B&B gets there through its Google Business Profile, set up in a lodging category with the exact name, address and phone used on the website. Many booking engines can also send your direct rate to those hotel results, where it appears beside the platforms’ prices and links straight to your booking page."),
        p(
          "Reviews carry the most weight: ask every guest at checkout, answer each review in a sentence or two, and keep the details of the house identical on Google, Tripadvisor and the platforms. The site is launched with these basics in place; ongoing map and review work is covered on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Bed and breakfast website design ideas: what the best B&B websites share"),
        p("Collections of the best bed and breakfast website design and boards of design inspiration show handsome first screens. The B&B sites that fill rooms share habits more than a style:"),
        li("a large photo of the house and a date search on the first screen"),
        li("the town or region named in the first sentence"),
        li("rooms you can compare at a glance"),
        li("rates or rate ranges, cancellation terms and check-in times in plain view"),
        li("dated reviews close to the booking button"),
        li("a phone number and email for guests who would rather ask first"),
        p("Templates from website builders and the site builders inside booking engines can look fine and are a fair start for a two-room B&B. Their limits show with a long room list, a second language, breakfast and area guides, and the day you change booking systems and want the site to stay yours."),

        h2("A bed and breakfast website that ChatGPT and Google AI Overviews can read"),
        p("Many guests start trip planning in ChatGPT, Perplexity or Google’s AI Overviews, asking for “a quiet B&B near Asheville with a big breakfast” or “dog-friendly inns in the Berkshires”. The assistant names a few places and says why. It can only recommend what it can read: rooms, rates, policies and breakfast that exist only inside a booking widget or as text on images are invisible to it. The site writes them as plain text and adds BedAndBreakfast structured data with your address, rooms, amenities and reviews."),
        p(
          "Being named in those answers is ongoing work beyond the build; it is described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How a B&B website design project runs"),
        ol("Brief. You send room names, photos, seasonal rates, house policies, the booking engine you use or are considering, and links to your listings."),
        ol("Page list and fixed price. I propose the pages — home, rooms, breakfast, area guide, policies, contact — and the price."),
        ol("Design and build. The first screen, a room page and the booking step are designed for a phone first and agreed with you."),
        ol("Launch. The booking engine, analytics, your Google profile and confirmation emails are connected and tested with a real booking."),
        p(
          "How I build websites in general is on the ",
          link("website development", "/services/website-development"),
          " page. A hotel with a front desk and a sales team has other needs, covered on ",
          link("hotel website design", "/hotel-website-design"),
          "; if you rent whole homes or cabins rather than rooms, see ",
          link("vacation rental website design", "/vacation-rental-website-design"),
          ".",
        ),

        h2("How much bed and breakfast website design costs"),
        p("One price covers design and build."),
        li("A simple B&B website — home, rooms on one page, breakfast, the area, contact and a booking engine widget: 700–1,400 €."),
        li("A full B&B website with a page for each room, booking engine integration, breakfast and local guide pages, a second language and local SEO setup: from 2,000 €."),
        p(
          "After launch you pay for hosting, the domain and your booking engine subscription, and me only for changes you ask for. All ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Bed and breakfast website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a bed and breakfast website cost?", "Design is included in the build: 700–1,400 € for a simple B&B site, from 2,000 € for a site with room pages, booking engine integration, breakfast and area guides, a second language and local SEO setup. After a short description of your inn I give a fixed price."],
          ["Should I leave Booking.com and Airbnb once I have my own website?", "There is no need. The platforms bring guests who do not know you yet; the site turns returning guests and people who already found you into direct bookings. A channel manager keeps availability in sync, so a room is never sold twice."],
          ["Which booking engine should a B&B use?", "One that syncs with the platforms you list on, works well on a phone, takes deposits the way you want and can show your direct rate on Google. Lodgify, Little Hotelier, Cloudbeds, ResNexus and ThinkReservations are common choices; I build around the one you pick."],
          ["Can I change rates, photos and room details myself?", "Yes. Rates and availability live in the booking engine, and texts and photos are edited in a simple admin panel. Photos are resized automatically, so a new room page looks like the rest."],
          ["Does my B&B website need more than one language?", "Only if you host guests who speak another language. Then the room pages, policies and booking step are translated, not just the home page, and each version is linked so Google shows the right one."],
          ["Can you move my current site without losing my Google rankings?", "Yes. Every old address gets a 301 redirect to its new page before launch, and titles and descriptions move with it. I used the same method when moving 468 blog posts for a psychotherapist in Milan to a new site."],
          ["Will ChatGPT recommend my bed and breakfast?", "Nobody can promise a mention. The site gives assistants what they need — rooms, rates, policies and location as text, plus structured data — and the odds improve with consistent details and fresh reviews on Google and Tripadvisor."],
          ["Can you design a website for a US inn while working from Poland?", "Yes. Everything happens online and in English. My afternoons and evenings in Central European Time overlap with US mornings, so a call fits after your breakfast service. I invoice in EUR under a written contract."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order bed and breakfast website design: what to send me"),
        p(
          "Send the name of your inn, your current website or listing links, the number of rooms with a few photos of each, your rates by season, the booking engine you use or are considering, and the languages your guests speak. I reply with a proposed page list and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
