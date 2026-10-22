// Landing page fixture: Restaurant SEO (EN), variant A layout.
// Text: drafts/pseo/restaurant-seo-EN.md (draft 2026-10-22, awaiting review).
// Semantic core: research/pseo/page-core/restaurant-seo.md
import { p, h2, li, ol, link, k } from "./pt";

export const restaurantSeoEn = {
  lang: "en",
  group: "restaurant-seo",
  slug: "restaurant-seo",
  title: "Restaurant SEO",
  heading: "Restaurant SEO",
  excerpt:
    "I do SEO for restaurants: Google Maps, local search and the restaurant website, so guests who search for what you cook find your place, not a booking portal.",
  seo: {
    metaTitle: "Restaurant SEO: Local SEO for Restaurants | Bandziuk",
    metaDescription:
      "SEO for restaurants: Google Maps, a menu search engines can read, local pages and reviews, so guests find you before a booking portal. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Google Maps + website", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Top 3 on the map", "Open now · 4.7 ★", "Menu found by dish", "Book directly, no portal"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Restaurant SEO audit: website and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off restaurant SEO fixes: text menu, profile, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly restaurant SEO", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with restaurant SEO",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "A Google Business Profile run like a page", text: "Categories, hours, menu link, photos and posts kept current" },
        { _key: k("o"), iconName: "utensils", title: "A menu search engines can read", text: "Dishes as text, so a search for a dish can lead to you" },
        { _key: k("o"), iconName: "search", title: "Pages for cuisine, area and occasion", text: "Built around what guests actually type" },
        { _key: k("o"), iconName: "message-circle", title: "Reviews as a routine", text: "Asked at the right moment, answered within days" },
        { _key: k("o"), iconName: "code", title: "Restaurant and menu markup", text: "Hours, prices and cuisine readable by Google and AI" },
        { _key: k("o"), iconName: "trending-up", title: "A monthly report in calls and bookings", text: "Not in positions alone" },
      ],
      prices: [
        { _key: k("r"), label: "SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly restaurant SEO", value: "from 800 € / month", note: "local search, website, reviews", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: search results on websites I have optimised",
      subtitle:
        "No restaurant among them yet. These are local and service businesses where the same work — map profile, local pages, structured data, speed — brought measurable search traffic.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "full-multilingual-website-development-and-seo-for-student-services",
        "felgilab-wordpress-rebuild",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for restaurant SEO",
      subtitle: "I reply within one business day with what I would fix first in your Google profile and website, and a fixed price.",
      contextLabel: "Restaurant name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where do guests find you now?", options: ["Google Maps", "Booking portals", "Social media", "Not sure"] },
        { _key: k("z"), question: "What kind of place?", options: ["Café", "Restaurant", "Bar", "Several locations"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for restaurants myself — the Google Business Profile, the website and the local pages — so the person who audits the site is the one who fixes it. Restaurant SEO is mostly local: guests choose from the map results and the first few links, on a phone, within minutes of deciding to eat out."),

        h2("What restaurant SEO covers: Google Maps, local search and the website"),
        p("Restaurant SEO is the work that makes a restaurant appear when someone searches for a kind of food, a dish or a place to eat nearby, and makes the restaurant’s own website win the search for its own name. Three places decide this:"),
        li("the map results — three restaurants with a map, rating and hours, shown above everything else for searches like “sushi near me”"),
        li("the regular results, where the restaurant’s website competes with booking portals, delivery apps and review sites"),
        li("AI answers — Google AI Overviews and assistants such as ChatGPT, which recommend places and quote menus and opening hours"),
        p("Each needs different work. The map results depend mostly on the Google Business Profile and reviews, the regular results on the website, and AI answers on both, plus facts written in a form a machine can quote."),

        h2("Local SEO for restaurants: Google Business Profile, reviews and the map results"),
        p("For a restaurant, local SEO matters more than anything else on this page. Guests compare three places in the map block and often choose before opening any website. What moves a restaurant into that block:"),
        li("the right primary category — “Georgian restaurant”, not just “Restaurant” — and secondary categories for what you also are: bar, café, takeaway"),
        li("opening hours that are always correct, including public holidays; wrong hours cost more trust than a missing photo"),
        li("a menu link that leads to a text menu on your own website, not to a PDF"),
        li("recent photos of dishes that are on the menu now"),
        li("the attributes guests filter by: outdoor seating, vegetarian options, wheelchair access, reservations"),
        li("the same name, address and phone number on the website, the profile and the main directories"),
        p("Reviews weigh more for restaurants than for most businesses. I set up a routine: guests are asked at the right moment, every review gets an answer within a few days, and answers name dishes and occasions in plain words. What I do not set up: bought reviews or asking only happy guests. Both break Google’s rules, both are detectable, and in hospitality they cost more reputation than they bring."),

        h2("Restaurant website SEO: menu, cuisine and location pages"),
        p("The website is the one place portals cannot copy, and it is where a restaurant wins searches beyond its name. Restaurant website SEO starts with:"),
        li("the menu as text on its own page, with dish names and short descriptions, so a search for a dish can lead to you"),
        li("one page per location, with address, hours, map, booking and the menu for that location"),
        li("pages for what guests search besides the name: the cuisine, private dining, group bookings, events, a lunch menu"),
        li("Restaurant and Menu structured data, so opening hours, price range, cuisine and the booking link are read correctly"),
        li("speed on a phone: the page and its main photo appear in under 2.5 seconds on mobile data"),
        p(
          "If the current website cannot do this — a builder template, a PDF menu, one page for everything — rebuilding it usually costs less than working around it. That is covered on the ",
          link("restaurant website development", "/restaurant-website"),
          " and ",
          link("restaurant website design", "/restaurant-website-design"),
          " pages.",
        ),

        h2("AI SEO for restaurants: visibility in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("More guests now ask ChatGPT, Perplexity or Google’s AI Overviews where to eat — “a quiet Italian place near the old town”, “where to get good ramen tonight”. The answer names a few restaurants and quotes what the assistant could read about them. Getting into those answers is called generative engine optimization (GEO) or answer engine optimization (AEO), and for a restaurant it rests on the same work as local SEO:"),
        li("the menu, cuisine, price range and opening hours written as text on your own site and in the Google profile"),
        li("reviews that mention dishes and occasions, so an assistant can match you to “a place for a birthday dinner”"),
        li("Restaurant and Menu structured data that states the facts in a form machines read reliably"),
        li("the same name, address and hours everywhere, so assistants do not mix you up with a place with a similar name"),
        p(
          "I check how assistants describe and recommend your restaurant before and after the work. More on this on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("SEO keywords for restaurants: what guests actually type"),
        p("Restaurant searches fall into four groups, and each needs its own place on the website or the profile:"),
        li("the restaurant’s name — your own site should come first, above portals that take a commission for guests who were already yours"),
        li("cuisine plus area: “ramen near me”, “pizza in the old town”, “vegan restaurant” with a district"),
        li("dish names: “khachapuri”, “pho”, “beef tartare” — found through a text menu"),
        li("occasions: “private dining room”, “restaurant for a birthday”, “business lunch”, “Sunday brunch”"),
        p("Before any work I pull the real search data for your city and cuisine, so the pages are built around the phrases guests use, not around how the restaurant describes itself."),

        h2("SEO strategy for restaurants with several locations"),
        p("With two or more locations, the usual mistake is one website page and one profile doing the work for all of them. A working setup gives each location its own Google Business Profile linked to its own location page, a separate menu where the menus differ, its own reviews, and a link from the home page. Searches for the brand then lead guests to the nearest place, and each location can rank in its own area."),

        h2("Restaurant SEO agency, marketing agency or an SEO specialist"),
        p("A restaurant marketing agency usually sells social media, photo shoots, ads and influencer campaigns, with SEO as one line in the package. A restaurant SEO agency focuses on search, but the work often goes to junior staff and templates. I am a single SEO specialist who also builds websites: the same person audits the Google profile, rewrites the menu page and fixes the code."),
        p("What I do not do: social media management, paid ads and photo shoots. If you need those, a marketing agency is the better choice, and the SEO part can still be done separately."),

        h2("Restaurant SEO tips you can do yourself this week"),
        ol("Search your restaurant’s name on a phone and note who ranks above your own website."),
        ol("Check the hours in your Google Business Profile against the real ones, including the next public holiday."),
        ol("Replace a PDF menu link in the profile with a link to a text menu page, even a simple one."),
        ol("Upload five recent photos of dishes that are on the menu now."),
        ol("Answer every review from the last three months, good and bad."),
        ol("Make sure the name, address and phone number on your website match the profile exactly."),
        p("These steps are free and take an afternoon. They do not replace work on the website, but they often move a restaurant up in the map results within weeks."),

        h2("How much SEO services for restaurants cost"),
        li("SEO audit of the website and the Google Business Profile: from 250 €, one-off. You get a list of fixes in order of impact."),
        li("One-off fixes — text menu, profile clean-up, structured data: 250–700 €."),
        li("Monthly restaurant SEO — local search, website pages, the reviews routine and reporting: from 800 € per month."),
        p(
          "For many restaurants a text menu and a tidy profile give most of the effect, and the audit shows whether monthly work is needed at all. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Restaurant SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How do I do SEO for my restaurant?", "Start with the Google Business Profile and the menu: correct categories and hours, a text menu on your own website, recent photos and answered reviews. Then add pages for your cuisine, locations and occasions, and Restaurant structured data. The tips above are a good first afternoon."],
          ["How long does restaurant SEO take to show results?", "Changes to the profile and the menu can show in the map results within weeks. Searches for a cuisine or a dish in your area take months, because booking portals with strong websites compete for them. Early signals usually appear after two to three months."],
          ["How do I get more customers to my restaurant from Google?", "Be among the three map results for your cuisine and area, win the search for your own name over booking portals, and let guests book directly from your website and profile. Every direct booking also saves the portal’s commission."],
          ["Do restaurants need SEO if they are on booking and delivery apps?", "Yes. Without your own visibility, guests who already know you still book through the portal, and you pay commission for them. SEO brings those searches back to your own website."],
          ["Is free SEO enough for a small restaurant?", "Often it is enough to start: a correct profile, a text menu and answered reviews cost nothing and give a lot. Paid work makes sense in a busy area, with several locations, or when you want to be found by dish and occasion."],
          ["Does restaurant SEO help with ChatGPT and Google AI answers?", "Yes. Assistants recommend restaurants from what they can read: the profile, reviews, the menu as text and structured data. A PDF menu and an image-only website give them nothing to quote."],
          ["Do you work with restaurants in other cities and countries?", "Yes. Local SEO is done remotely: the profile, the website and the search data. For restaurants in Warsaw I can also come to the venue."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order restaurant SEO: what to send me"),
        p(
          "Send the name and address of the restaurant, a link to the website and to its Google Maps profile, and the area most guests come from. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
