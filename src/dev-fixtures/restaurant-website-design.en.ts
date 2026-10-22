// Landing page fixture: Restaurant website design (EN), variant A layout.
// Text: drafts/pseo/restaurant-website-design-EN.md (approved 2026-10-22).
// Used by the dev preview route now and by the Sanity create script later.
import { p, h2, li, ol, link, k } from "./pt";

export const restaurantWebsiteDesignEn = {
  lang: "en",
  slug: "restaurant-website-design",
  title: "Restaurant website design",
  heading: "Restaurant Website Design",
  excerpt:
    "I design and build restaurant websites: a first screen that tells guests what you cook, whether you are open and how to book, on the phone they are holding.",
  seo: {
    metaTitle: "Restaurant Web Design: Mobile, Menu, Photos | Bandziuk",
    metaDescription:
      "Restaurant website design built for the phone: a first screen that answers what, when and how to book, a readable menu and food photos that load fast.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["What you cook", "Open today until 23:00", "One real photo", "Menu · Book a table"],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with restaurant website design",
      items: [
        { _key: k("o"), iconName: "smartphone", title: "A first screen built for the phone", text: "Cuisine, today’s hours, Menu and Book buttons" },
        { _key: k("o"), iconName: "utensils", title: "A menu you can read without zooming", text: "Text, not PDF, with allergen marks" },
        { _key: k("o"), iconName: "image", title: "Food photos that load fast", text: "8–12 strong shots, main image under 2.5 s" },
        { _key: k("o"), iconName: "palette", title: "Your venue’s colours and type", text: "Taken from the sign, the menu card, the room" },
        { _key: k("o"), iconName: "pencil", title: "You edit menu, hours and photos", text: "From a phone, without breaking the layout" },
        { _key: k("o"), iconName: "languages", title: "Language versions where guests need them", text: "The full menu translated, each with its own address" },
      ],
      prices: [
        { _key: k("r"), label: "Simple restaurant site", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Menu, bookings, events, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: websites I have designed and built",
      subtitle: "No restaurant among them yet. These are chosen for what a restaurant site needs: a premium look, speed on a phone, a booking form and several languages.",
      // project slugs, resolved to references (preview: at request time;
      // create script: before writing). Card tags come from each project.
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "official-website-for-dj-and-producer-sasha-dith",
        "tyre-storage-landing-page-with-editable-seo",
        "psychotherapist-website-milan",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your restaurant website design",
      subtitle: "I reply within one business day with a proposed structure for the home and menu pages and a fixed price.",
      contextLabel: "Restaurant name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "A builder site", "An old website"] },
        { _key: k("z"), question: "What kind of place?", options: ["Café", "Restaurant", "Bar", "Several locations"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design restaurant websites and build them myself, so the design and the build come from one person at one price. The design starts from how guests choose a restaurant: on their phone, in a few seconds, often while standing outside another one. In those seconds the site has to show what you cook, whether you are open and how to get a table."),
        h2("What restaurant website design has to answer in the first five seconds"),
        p("Almost every visit to a restaurant website starts with one of three questions: what do they serve, are they open, can I get a table. A good design answers all three on the first screen of a phone, before anyone scrolls."),
        p("That first screen holds four things and nothing else:"),
        li("the name of the place and what kind of food it serves, in plain words"),
        li("today’s opening hours, not the whole week"),
        li("two buttons: Menu and Book a table"),
        li("one photograph that shows the food or the room as guests will actually see it"),
        p("The story of the chef, the interior, the awards and the gift vouchers go below. They matter, but nobody reads them before deciding where to eat tonight. On a phone the booking button stays fixed at the bottom of the screen, so it is one tap away from anywhere on the page."),

        h2("Restaurant menu design: readable on a phone, not a PDF"),
        p("The online menu is the page guests open most, and it is where most restaurant websites fail. A PDF menu opens in a separate viewer, needs zooming, is slow on mobile data and is often out of date because updating it means sending a new file to someone."),
        p("A menu designed for the web works differently:"),
        li("sections in the order guests read them — starters, mains, desserts, drinks — with a jump bar at the top"),
        li("every dish as a line of text: name, one short description, price aligned on the right"),
        li("dietary and allergen marks as small symbols with a legend, not a footnote"),
        li("body text at 16 px or larger, so nobody has to zoom"),
        li("seasonal or daily dishes marked, so a guest knows what is on today"),
        p(
          "Because the menu is text and not a picture, search engines and AI assistants can read the dishes and connect them to your restaurant. Someone looking for “ramen near me” or asking an assistant where to eat khachapuri can find you by what you actually cook. How the menu is edited from your phone is covered on the ",
          link("restaurant website development", "/restaurant-website"),
          " page.",
        ),

        h2("Food photography in restaurant web design: fewer photos, better ones"),
        p("A restaurant website needs eight to twelve strong photographs, not sixty. Guests remember two or three images; the rest only slow the page down."),
        p("What works:"),
        li("dishes that are on the current menu, shot in the same light, so the menu and the photos tell the same story"),
        li("the room at the time of day guests come — a dinner place photographed in the evening, a breakfast place in the morning"),
        li("people in the frame where it fits the venue: a busy room sells a bistro better than an empty one"),
        p("Every photo is compressed into modern formats and loaded only when it comes into view. The goal is that the main image on the first screen appears in under 2.5 seconds on a mobile connection — the threshold Google uses for a good page. If you do not have photos yet, I prepare a shot list for your photographer so the session covers exactly what the design needs."),

        h2("Restaurant brand on the website: colours, fonts and tone taken from the venue"),
        p("The website should feel like walking in. The design system comes from what already exists in the restaurant: the sign, the printed menu, the materials and colours of the interior. A new visual identity is not part of the job unless you want one."),
        p("In practice that means two typefaces at most, a small palette built from the venue’s own colours and text that meets the WCAG contrast ratio of 4.5:1, so it stays readable in sunlight on a phone screen. The tone of the copy follows the place: a neighbourhood wine bar and a hotel restaurant should not sound the same."),

        h2("Restaurant website design examples: what the best restaurant websites have in common"),
        p("Galleries of restaurant website examples are full of slow, image-heavy pages that look good on a large monitor and fall apart on a phone. The restaurant sites that bring bookings tend to share a few plain decisions:"),
        li("one clear booking path, repeated on every page, instead of a phone number hidden in the footer"),
        li("the address with a map link and directions near the top, not only on a contact page"),
        li("private events and group bookings on their own page with their own enquiry form"),
        li("language versions where the guests are tourists or expats, with the menu translated, not only the home page"),
        li("no autoplay video, no full-screen intro, no music"),

        h2("Restaurant website design or a restaurant website template"),
        p("A free or paid restaurant website template on a builder is a reasonable choice for a small café with a short, stable menu and no plans to grow. You get a tidy page quickly and pay a monthly subscription."),
        p("Custom design starts to pay off when the restaurant has more than one location, runs events and group bookings, needs several languages, or depends on being found in local search. Templates make all of these possible but rarely make them work well, and moving away from a builder later usually means rebuilding the site from scratch."),

        h2("How the restaurant website design process works"),
        ol("Brief. You send the menu, existing photos, the booking system you use and a few sites you like or dislike. If you are in Warsaw, I come to the venue."),
        ol("Structure on a phone first. I lay out the home page and the menu page on a mobile screen and agree them with you before any visual design."),
        ol("Visual design. The home page and the menu page are designed in full; the other pages follow the same system."),
        ol("Build. The approved design is built into a fast website you can edit yourself — described on the ", link("restaurant website development", "/restaurant-website"), " page."),
        p(
          "If you already have a website and want a new design without losing your Google positions, the ",
          link("website redesign", "/services/website-redesign-services"),
          " process keeps addresses, redirects and structured data in place.",
        ),
        p(
          "Design turns guests who are already on the site into bookings. Getting found in the first place — Google Maps, local search, AI answers — is covered on the ",
          link("restaurant SEO", "/restaurant-seo"),
          " page.",
        ),

        h2("How much restaurant website design costs"),
        p("Design is not sold separately; it is part of building the website, and the price covers both."),
        li("A simple restaurant website: 700–1,400 €."),
        li("A website with a structured menu, table bookings, events and local search optimisation: from 2,000 €."),
        p("Send me a short description of the restaurant and I will prepare a fixed quote. Full price ranges are on the ", link("pricing", "/pricing"), " page."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Restaurant website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does it cost to design a restaurant website?", "Design is included in the price of the website: 700–1,400 € for a simple restaurant site, from 2,000 € for a site with a structured menu, bookings, events and local search optimisation. After a short description of the restaurant I give a fixed quote."],
          ["Do you design restaurant websites without building them?", "No. Design and build come together. A design that is handed over as pictures loses most of its value in the hand-over: menu layouts, mobile behaviour and loading speed are decided while building, not in a mock-up."],
          ["Can you redesign our restaurant website without losing Google rankings?", "Yes. Before the new design goes live, every existing address is mapped to its new page, redirects are set up and structured data is carried over, so the positions the site already has are not lost."],
          ["Will the new design work with our table booking system?", "Most booking systems provide a widget or a booking link. The design places it where guests expect it — on the first screen and in a fixed button on mobile — and keeps the look consistent with the rest of the site."],
          ["Do we need a professional photographer for the restaurant website?", "It is the single best investment in the design. If you do not have one, I prepare a shot list of the dishes and spaces the design needs, so one session covers everything."],
          ["Can we change the menu, photos and opening hours ourselves after launch?", "Yes. The menu, hours, photos and events are edited from a simple admin panel, including from a phone. The layout stays consistent whatever you add."],
          ["Can the restaurant website have several language versions?", "Yes. For restaurants with tourists or expat guests, the menu and booking page are translated in full, and each language version has its own address so it can be found in search in that language."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order restaurant website design: what to send me"),
        p(
          "Send the name and address of the restaurant, a link to the current website or social profile, and the menu. If you use a booking system, name it. I will reply with a proposed structure for the home page and menu page, and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
