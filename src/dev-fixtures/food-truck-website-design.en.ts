// Landing page fixture: Food truck website design (EN), group
// «food-truck-website-design». New page.
// Semantic core: ref/food-venues.md, food trucks (US): food truck website
// design 40 (H1, several H2, cost H2, FAQ) · best food truck website 50, food
// truck website examples 40, best food truck website design 10 (templates H2)
// · food truck website template 30, templates / template free 10 each
// (templates H2, FAQ) · food truck website builder 20, best website builder
// for food truck 10 (templates H2) · website for food truck 10 (guide).
// Intent: ref/intent-check-food.md — «food truck website design» vs «food
// truck website» 0 of 10 shared URLs, 0 shared domains: the design SERP is
// Dribbble, Site Builder Report, ThemeForest, Pinterest, Duda, Reddit (owners
// choosing how to build); «food truck website» 390 and «food truck finder
// website» 90 return finders (Roaming Hunger, Best Food Trucks, TruckTrackr) —
// customers looking for trucks → not targeted. «food truck for sale» is a
// different business.
// Angles: today’s stop on the first screen, weekly schedule and calendar edited
// from the phone, menu as text with sold-out switch and QR code on the truck,
// private event / festival booking form, organizer page (size, power,
// permits, insurance, invoices), Instagram vs the site, speed on mobile data at
// events, one page vs several pages, templates / builders / examples,
// AI-readable build, cost.
// Portfolio: DJ Sasha Dith (events, booking form, speed with heavy media —
// named in the brief for food trucks), tyre storage (one page, owner edits),
// Landi Room (Stripe deposits), auto repair (maps, local search), Giuseppe (AI
// answers). Restaurants under NDA mentioned once, positively.
// NOT on this page: SEO work (no food truck SEO page in the batch; Google Maps
// → /services/local-seo-services); event catering as a main business →
// /catering-website-design (linked once); sit-down restaurant with bookings →
// /restaurant-website-design (closest restaurant page, linked once, no shared
// arguments).
// Owner’s rules: every page covers AI search; design is included in the
// price; never say there are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const foodTruckWebsiteDesignEn = {
  lang: "en",
  group: "food-truck-website-design",
  slug: "food-truck-website-design",
  title: "Food truck website design and development",
  heading: "Food Truck Website Design",
  excerpt:
    "I design and build food truck websites: today’s location and a weekly schedule you update from your phone, a menu with prices and sold-out marks, a booking form for private parties, weddings and festivals, and pages that open fast on a crowded event’s mobile signal.",
  seo: {
    metaTitle: "Food Truck Website: Schedule, Menu, Bookings | Bandziuk",
    metaDescription:
      "Food truck website design: today’s location and a schedule you edit from your phone, menu with prices, booking form for events, fast on mobile data. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Today: 5th & Main, 11–2", "This week’s stops", "Menu · sold out marked", "Book us for your event"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple food truck website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Food truck website with a phone-editable schedule, menu with sold-out switches, event booking with deposits, an organizer page and several trucks or a kitchen, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with food truck website design",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "Today’s stop on the first screen", text: "Address, service hours and directions in one tap" },
        { _key: k("o"), iconName: "layers", title: "A schedule you edit from your phone", text: "Regular stops, events and rain cancellations" },
        { _key: k("o"), iconName: "file-text", title: "A menu as text, not a photo of the board", text: "Prices, specials and sold-out marks" },
        { _key: k("o"), iconName: "message-circle", title: "Event and festival bookings", text: "Date, guests, location, power and budget" },
        { _key: k("o"), iconName: "gauge", title: "Fast on a weak festival signal", text: "Light pages that open on mobile data" },
        { _key: k("o"), iconName: "sparkles", title: "Visible to Google and AI assistants", text: "Stops, menu and hours as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple food truck website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Schedule, menu, event bookings, deposits", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: event and local business websites I have built",
      subtitle:
        "These sites handle what a truck’s site handles: event bookings, heavy media at speed, a single page the owner runs and customers who arrive from a map. DJ and producer Sasha Dith has a Next.js site with a video gallery and a booking form that loads in under one second. A Warsaw tyre-storage business works from one page whose texts the owner edits himself. Landi Room, a Warsaw beauty salon, takes payments through Stripe Checkout, the tool that can take event deposits. A Warsaw auto repair shop gets customers through Google Maps and local search. A psychotherapist in Milan has new pages that already appear in ChatGPT answers. I have also built websites for restaurants whose owners asked me not to show them publicly.",
      picks: [
        "official-website-for-dj-and-producer-sasha-dith",
        "tyre-storage-landing-page-with-editable-seo",
        "e-commerce-landing-page-with-secured-video-access",
        "auto-repair-seo-and-ux-boost",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your food truck website",
      subtitle: "I reply within one business day with a proposed page list, a note on how the schedule and event bookings would work, and a fixed price.",
      contextLabel: "Truck name, website or Instagram",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["Instagram and Facebook only", "A free builder page", "A profile on a food truck finder", "An older website"] },
        { _key: k("z"), question: "What should the site bring first?", options: ["Lunch customers who find today’s stop", "Private parties and weddings", "Festival and corporate bookings", "All of these"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Food truck website design is how I help a truck owner put the moving parts of the business — where you park today, what you serve, how to hire you — on one site you update from the phone in the cab. I design and build it myself, so the look and the working schedule come from one person at a price agreed in advance. A truck changes location more often than any other food business, and the site exists to keep up with that."),

        h2("Food truck website design: today’s location and hours on the first screen"),
        p("Most visitors arrive with one question: where are you today? The first screen answers it before anything else:"),
        li("today’s stop — a street corner, a brewery, a business park — with service hours and a button that opens directions"),
        li("when the stop was last updated, so nobody wonders whether the information is from last week"),
        li("tomorrow’s stop, for people planning lunch a day ahead"),
        li("a button for event bookings that stays on screen while the visitor scrolls"),
        p("On a day off, the same space says so and points to the next stop. A clear “Closed today — back Thursday at Riverside Park” beats an old post that sends people to an empty parking lot."),

        h2("A food truck schedule and calendar you update from your phone"),
        p("Most trucks repeat a weekly pattern — Tuesdays at an office park, Fridays at a brewery, weekends at markets — with events in between. The calendar on the site is built the same way: regular stops entered once and repeated, one-off events added on top, and any single date cancelled with one tap when it rains or the generator quits."),
        p("Editing happens in a small form made for a phone screen: pick a date, pick a saved location or type a new one, set the hours, save. Each stop has its own address and map pin, and customers can add your week to their own calendar. Breweries and markets you visit often can be listed as partners with a link to their sites, and they tend to share the page in return."),

        h2("A food truck menu customers can read while standing in line"),
        p("A truck menu is short and shifts with the event, the season and whatever ran out at noon. On the site it stays text, not a photo of the chalkboard:"),
        li("eight to fifteen items with prices, one short line each and marks for vegetarian or gluten-free dishes"),
        li("a sold-out switch you flip during service, so people in line see it before they reach the window"),
        li("specials for the day or week shown above the regular items"),
        li("a separate menu for private events where you serve a set selection"),
        p("A QR code on the side of the truck opens this page directly. Customers read the menu on their own phones while the line moves, and you no longer reprint a board every time a price changes."),

        h2("Private event and festival booking form on a food truck website"),
        p("Weddings, birthdays, office lunches and school events often bring in more than a day of street service, and organizers want answers before they call. The booking form asks for what you need to quote:"),
        li("the event date, start and end time, and the address"),
        li("the number of guests, and whether guests pay at the window or the host covers a set menu"),
        li("space and power: where the truck parks, whether there is an outlet or you bring a generator"),
        li("a budget range or the minimum spend you work with, picked from options"),
        p("Requests arrive in your inbox in one format. If you take deposits, a confirmed booking ends with a payment link through Stripe Checkout, the same tool Landi Room uses to sell its online course, and the date is marked as taken in the calendar."),

        h2("What festival organizers and corporate clients look for on a food truck website"),
        p("Organizers compare several trucks before they choose, and they look for facts that rarely make it onto Instagram. A page for organizers lists the truck’s length and width, its power needs, how many guests you can serve in an hour, your permits and insurance, and photos of the truck set up at real events. Corporate clients also want to know that you send invoices and answer email. Keeping all of this on one page saves a round of questions and shows you are ready for larger bookings."),

        h2("Instagram, Facebook and the food truck website: what goes where"),
        p("Many trucks post their location on Instagram or Facebook every morning, and that habit does not have to change. Posts reach people who already follow you. The website holds what strangers search for — the week’s schedule, the menu, the booking form, photos from past events — and it appears in Google for people who have never heard of you. The site links to your profiles and the profiles link back. Social feeds embedded into a page are heavy and break often, so the site shows its own schedule instead of a stream of posts."),

        h2("A fast food truck website on mobile data at a crowded event"),
        p("Your customers open the site standing next to the truck, often at a festival where hundreds of phones share one cell tower. A page that takes six seconds to load there is a page nobody sees. So the site is built light: the first screen is text and one compressed photo, fonts are kept to a minimum, there is no autoplay video and no tracking scripts beyond the ones you need. Sasha Dith’s site carries a full video gallery and still loads in under one second; a food truck site has far less to carry."),

        h2("One-page food truck website or a site with several pages"),
        p("A single page is often enough at the start: today’s stop, the schedule, the menu, the booking form and links to your profiles in one scroll. Separate pages start to pay off when private events become a large share of revenue, when you run two trucks with different routes, or when you add a commissary kitchen or a market stall. Each of those needs its own address so people can find it in search and share it, and a one-page site can grow into a larger one later without changing its domain."),
        p(
          "If event catering is turning into your main business, the ",
          link("catering website design", "/catering-website-design"),
          " page covers menus by event type and per-person pricing.",
        ),

        h2("Food truck website templates, builders and examples"),
        p("Lists of the best food truck websites and food truck website examples mostly show builder sites — Wix, Squarespace, Duda — and template marketplaces sell food truck themes for a few dollars. A builder works if you are fine typing your schedule into a text block and receiving booking requests by plain email. The limits show in daily use: someone has to rewrite the schedule every week, the editor is awkward on a phone, and the page grows heavier with every app you add. A custom site gives you a schedule that repeats itself, a sold-out switch and a booking form shaped around your events, and the domain and the code stay yours if you ever change developers."),

        h2("A food truck website that ChatGPT and Google AI Overviews can read"),
        p("Questions like “which food trucks are at the waterfront this weekend” or “taco truck for a wedding near Austin” now go to ChatGPT and Google’s AI Overviews as often as to a regular search. An assistant answers from pages it can read, so every stop is written as text with a date, time and address, the menu and prices are text too, and the truck is marked up with FoodEstablishment structured data. The site of Giuseppe, a psychotherapist in Milan, follows the same rules, and ChatGPT already cites its new pages."),
        p(
          "Keeping a business in AI answers over time is covered on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page, and Google Maps and searches nearby on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page. A sit-down kitchen with table bookings needs a different site, described on the ",
          link("restaurant website design", "/restaurant-website-design"),
          " page.",
        ),

        h2("How much food truck website design costs"),
        p("One price covers the design and the build:"),
        li("A simple food truck website — today’s stop, the weekly schedule, the menu, a booking form and social links on one or a few pages: 700–1,400 €."),
        li("A food truck website with a schedule you edit from your phone, sold-out switches, event menus, an organizer page, deposits and room for a second truck or a kitchen: from 2,000 €."),
        p(
          "What happens between our first call and launch day is set out on the ",
          link("website development", "/services/website-development"),
          " page; rates for all my services are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Food truck website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a food truck website cost?", "700–1,400 € for a simple site with today’s stop, the schedule, the menu and a booking form; from 2,000 € for a site with a phone-editable calendar, sold-out switches, event menus, deposits and an organizer page. Design is included. I fix the price after seeing how you work today."],
          ["Do I need a website if I post my location on Instagram?", "Instagram reaches your followers. A website reaches people who search for food trucks near them or for a truck to hire, and it gives event organizers the facts they need in one place. Most trucks keep both, with each linking to the other."],
          ["How quickly can I change today’s location?", "In under a minute from your phone: choose a saved stop or type an address, set the hours and save. Recurring stops fill in by themselves, so most days you only confirm or cancel."],
          ["Can customers order ahead on the food truck website?", "Yes, if your kitchen can handle it. Pickup orders with a time slot and card payment can be built into the site, or the site can link to the ordering app you already use."],
          ["Can event clients pay a deposit online?", "Yes. Once you confirm a booking, the client gets a payment link for the deposit, and the date is marked as taken in your calendar after it is paid."],
          ["How long does it take to build a food truck website?", "Two to four weeks for a one-page site from the brief, four to six for a site with a calendar, event booking and deposits. Most of the time goes into your menu, regular stops and event terms."],
          ["Can you build a food truck website for a US business from Poland?", "Yes. We work by video call, email or WhatsApp, in English. My afternoons and evenings in Central European Time overlap with US mornings, before lunch service. I invoice in EUR or another currency by agreement."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order food truck website design: what to send me"),
        p(
          "Send your Instagram or current site, your menu with prices, your regular weekly stops, the kinds of events you take and your terms for them, and a few photos of the truck and the food. I will reply with a page list and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
