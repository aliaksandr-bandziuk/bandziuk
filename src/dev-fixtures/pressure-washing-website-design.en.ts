// Landing page fixture: Pressure washing website design (EN), group
// «pressure-washing-website-design». New page.
// Semantic core: ref/home-services.md, pressure washing group (US volumes):
// pressure washing website 260 (mixed: businesses and builders — intro, body,
// FAQ) · pressure washing website design 70 (H1, H2s, metaTitle) · pressure
// washing website template 50 + templates 50 + free template 10×2 (templates
// H2, FAQ) · best website builder for pressure washing 10, pressure washing
// website builder 10, how to make a pressure washing website 10, website for
// pressure washing business 10, pressure washing business website 10 (body,
// FAQ). Not targeted: pressure washing supply store (near me) 880/390,
// equipment for business 140, equipment list 70 — buyers of equipment.
// Intent: ref/intent-check-home-services.md — «pressure washing website» vs
// «pressure washing website design» 1 shared URL (cyberoptik best designs) →
// one page; first SERP holds real washing companies, Jobber, GoSite, homeguide;
// second holds 180sites, Jobber, zarla, dribbble, duda, reddit → builders,
// studios, galleries.
// This page = a site for a one-truck owner-operator or small crew: before and
// after from the same angle, quotes by square footage, a page per surface
// (house wash, roof soft wash, driveway and concrete, decks and fences),
// commercial page for property managers, fears about damage, seasonal
// add-ons and maintenance plans, Jobber/GoSite sites vs own, local SEO (one
// H2), AI-readable design.
// NOT on this page: cleaning company sites (/cleaning-company-website —
// linked once); handyman sites (/handyman-website-design); roofing and
// landscaping pages (not reused); ongoing SEO (/services/local-seo-services —
// linked).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const pressureWashingWebsiteDesignEn = {
  lang: "en",
  group: "pressure-washing-website-design",
  slug: "pressure-washing-website-design",
  title: "Pressure washing website design",
  heading: "Pressure Washing Website Design",
  excerpt:
    "Pressure washing website design and build from one person: before-and-after photos taken from the same spot, quotes by square footage, separate pages for house washing, roof soft washing, driveways and commercial work, and your own truck on the first screen.",
  seo: {
    metaTitle: "Websites for Pressure Washing Businesses | Bandziuk",
    metaDescription:
      "Pressure washing website design: before-and-after sliders, quotes by square foot, pages for house wash, roofs, driveways and commercial work. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Built around before and after"],
  heroPhonePoints: ["Before · After", "Quote by square foot", "House · Roof · Driveway", "Call · Text"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple pressure washing website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pressure washing website with surface pages, before-and-after galleries, square-footage quote form, commercial page and local SEO setup, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with pressure washing website design",
      items: [
        { _key: k("o"), iconName: "image", title: "Before-and-after sliders from the same spot", text: "Surface, town and method under every pair" },
        { _key: k("o"), iconName: "gauge", title: "A quote form that works in square feet", text: "Or small, medium, large for people who never measured" },
        { _key: k("o"), iconName: "layers", title: "A page for each surface you clean", text: "House wash, roof soft wash, concrete, decks, commercial" },
        { _key: k("o"), iconName: "shield-check", title: "Answers to “will it damage my house?”", text: "Pressure, chemicals, plants and insurance in plain words" },
        { _key: k("o"), iconName: "map-pin", title: "Towns you serve and your Google profile in step", text: "The same area, services and photos in both places" },
        { _key: k("o"), iconName: "sparkles", title: "Services and prices AI assistants can read", text: "Text and structured data, not text baked into photos" },
      ],
      prices: [
        { _key: k("r"), label: "Simple pressure washing website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Surface pages, galleries, quote form, commercial page, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Service business websites I have designed and built",
      subtitle:
        "The first four are Warsaw service businesses that get their work through calls, Google Maps and pages for each service: an auto repair shop, a wheel-renovation workshop that shows its results in photos, a tyre-storage business and a renovation company. The fifth, a psychotherapist’s site in Milan, shows pages that already appear in ChatGPT answers. What they share with a pressure washing website: results you can see, prices people can find, and a short path to a request.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your pressure washing website",
      subtitle: "I reply within one business day with a proposed first screen, a quote form by surface and size, and a fixed price.",
      contextLabel: "Business name, Google profile or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What brings most of your work?", options: ["House washing", "Driveways and concrete", "Roof soft washing", "Commercial properties"] },
        { _key: k("z"), question: "How do you price jobs now?", options: ["By square foot", "Flat price per job", "After seeing the property", "A mix"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Pressure washing website design for owner-operators and small crews is work I do from start to finish — plan, design and build — so one person is responsible and the price is fixed. A pressure washing website has an easier job than most trade sites in one way and a harder one in another. The result is visible, so photos sell; but every property is a different size and surface, so customers want a price before they call, and they worry about damage you know how to avoid."),

        h2("A pressure washing website for a one-truck owner-operator"),
        p("Many pressure washing businesses are one person, one trailer or truck rig and a long season. Between April and October you are on driveways and roofs from morning to evening and answer the phone with wet gloves. The website has to work without you:"),
        li("show the result in the first seconds, so the visitor does not need convincing by phone"),
        li("collect surface, size and address in one request, so you can price it from the truck"),
        li("say plainly what you wash and what you do not, so you are not called for interior cleaning or graffiti you would not take"),
        li("look as clean and orderly as the work: a messy site is a strange advertisement for a cleaning service"),

        h2("Before-and-after photos on a pressure washing website"),
        p("Before-and-after is the whole sales pitch of this trade, and the design is built around it. A slider the visitor drags across the photo is more convincing than two pictures side by side, because the eye sees the same brick or the same board change. For that to work, the photos have to be taken properly:"),
        li("the same position, the same height and the same zoom for before and after — mark the spot with your foot or a chalk line"),
        li("landscape orientation on the phone, in daylight, without the sun shining straight into the lens"),
        li("one shot halfway through, with a clean stripe across a dirty driveway — it shows the difference in one picture"),
        li("no filters or extra saturation: customers have seen edited “afters” and stop trusting all of them"),
        p("Under each pair, one line: the surface, the town, the method — soft wash or surface cleaner. The gallery can then be filtered by surface, so a homeowner with a green roof sees roofs and not parking lots."),

        h2("Instant quotes by square footage on a pressure washing website"),
        p("Most pressure washers already price by square foot or by size band, so the quote form asks for the same things you would ask on the phone:"),
        ol("Surface: house siding, roof, driveway, patio, deck, fence."),
        ol("Size: square footage if the customer knows it, or small, medium and large with a picture of each for those who do not."),
        ol("Condition and extras: light dirt, heavy algae, oil stains, sealing after cleaning."),
        ol("Address, photos, and a way to reach them."),
        p("The form can show a price range on the spot if you want that — using your own rates and your minimum job charge — or simply send the request so you reply with a number. A range on screen brings more requests; a firm price stays your decision after you see the photos. The form can feed Jobber, GoSite or your email, whichever you already use."),

        h2("Service pages for house washing, roof soft washing, driveways and decks"),
        p("Each surface has its own customer and its own question, so each gets its own page rather than one long list."),
        h3("House washing and soft washing siding"),
        p("Homeowners worry about water behind vinyl siding and stripped paint. The page explains low-pressure soft washing with a cleaning solution, shows siding before and after, and says how windows and outlets are protected."),
        h3("Roof soft washing"),
        p("Black streaks and moss on a roof make people fear for the shingles. The page says that roofs are cleaned without high pressure, what the solution does to algae, how long results last, and that you follow the shingle manufacturer’s cleaning guidance where one exists."),
        h3("Driveways, patios and concrete cleaning"),
        p("These buyers care about stains: oil, rust, tire marks, gum. The page shows which ones come out fully and which only fade, and offers sealing as a second step."),
        h3("Decks and fences"),
        p("Wood needs care: the page explains lower pressure, brightening and the wait before staining, so the customer does not expect a new deck in an afternoon."),

        h2("A commercial pressure washing page for property managers and storefronts"),
        p("Commercial work — storefronts, sidewalks, drive-thrus, parking areas, dumpster pads, building exteriors — is bought by a different person. A property manager or a store owner is not moved by a dramatic slider alone; they want to know you can be trusted with their site and their schedule. That page has its own layout:"),
        li("proof of insurance available on request, written as a line of text"),
        li("night, early-morning and weekend work so customers and tenants are not disturbed, if you offer it"),
        li("recurring cleaning by month or quarter, described as your product with your terms"),
        li("a request form with company fields: business name, number of locations, who approves the work"),

        h2("How a pressure washing website answers fears of damage to siding, roofs and plants"),
        p("The most common doubt is not the price; it is damage. Siding cracked by too much pressure, plants killed by runoff, etched concrete, water inside windows. A short block on each surface page answers it in plain words: what pressure you use on what, how you wet and rinse the plants, what you cover, and what your liability insurance covers if something goes wrong. Reviews that mention care — “they covered everything and rinsed the flower beds” — sit right next to it."),

        h2("Seasonal services and maintenance plans on a pressure washing website"),
        p("The season shapes the site. In spring the first screen leads with house and driveway washing; later in the year it may lead with fall cleanups, and if you add gutter cleaning, window washing or holiday lighting in the cold months, those get their own pages instead of a line at the bottom. A slim banner announces booking for the new season and is switched on and off by you. A yearly or twice-yearly maintenance plan, if you sell one, has a short page with what it includes and how renewal works."),

        h2("Pressure washing website templates, Jobber and GoSite, or a site of your own"),
        p("Field-service tools like Jobber and GoSite include simple websites, and builders sell pressure washing website templates, some of them free. They get a new business online fast, and that is worth something in the first season."),
        p("They show their limits once the work grows: one page for all surfaces, galleries that do not filter, a quote form that cannot ask about square footage, and a site that lives on the platform. A site of your own keeps the tools for scheduling and invoicing and embeds their forms where they help, while the pages, the photos and the domain stay yours."),
        p(
          "If your business also cleans interiors or offices, the ",
          link("cleaning company website", "/cleaning-company-website"),
          " page covers that side.",
        ),

        h2("Local SEO for a pressure washing website: towns, the map pack and reviews"),
        p("Customers search “pressure washing near me”, “roof cleaning” or “driveway cleaning” plus the town, and choose from the map. A pressure washing business is usually a service-area business with no storefront, so the Google Business Profile hides the home address and lists the towns you drive to. The website matches it: a page per surface, the towns written as text, the same phone and name everywhere, and before-and-after photos posted to the profile as well. Reviews that name the surface and the town help most."),
        p(
          "Profile setup comes with the full site; month-to-month work on map positions and reviews is a separate service, explained on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("A pressure washing website that ChatGPT and Google AI Overviews can read"),
        p("People also ask ChatGPT, Perplexity or Google’s AI Overviews whether roof soft washing is safe, how often to clean siding, or who does it nearby. Assistants answer from text they can read. Surfaces, methods, the area you cover and your insurance written as text, with structured data for the business and each service, give them something to quote; a price list set inside a photo gives them nothing."),
        p(
          "Getting your business named there is its own line of work — more on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much pressure washing website design costs"),
        p("Design and build are one price:"),
        li("A simple pressure washing website — home page with before-and-after, services, area, quote form: 700–1,400 €."),
        li("A site with a page for each surface, filterable galleries, a square-footage quote form, a commercial page and local SEO setup: from 2,000 €."),
        p("The work runs in four steps: your brief with services, rates and photos; phone layouts of the first screen, a surface page and the quote form; the build; and launch with your Google profile, analytics and form connected."),
        p(
          "My general approach is on the ",
          link("website development", "/services/website-development"),
          " page, and full ranges on ",
          link("pricing", "/pricing"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pressure washing website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a pressure washing website cost?", "Design is included: 700–1,400 € for a simple site, from 2,000 € for one with surface pages, filterable before-and-after galleries, a square-footage quote form, a commercial page and local SEO setup. I give a fixed price after a short description of the business."],
          ["Can the website show an instant price for pressure washing?", "Yes, if you want it to. The form uses your rates per square foot or size band and your minimum charge to show a range, and you confirm the final price after seeing the photos."],
          ["Are phone photos good enough for before-and-after?", "Yes, if before and after are taken from the same spot, in daylight and without filters. I send a short guide on how to shoot them on the job."],
          ["Do I need a separate page for roof soft washing?", "If you do roofs, yes. Roof customers have different worries and search with different words than people looking for driveway or house washing, and one page cannot answer both."],
          ["Is a free pressure washing website template enough to start?", "For the first season it can be. It becomes a limit when you want a page per surface, a gallery by surface and a quote form that asks for size, and moving later means rebuilding."],
          ["Can I keep using Jobber or GoSite with my own website?", "Yes. Their request and booking forms can be embedded in your site, so scheduling and invoicing stay where they are while the site and domain belong to you."],
          ["Do you work with pressure washing businesses in the US?", "Yes. Everything runs remotely from Poland, in English. I am six to nine hours ahead of US time zones, so your morning is my afternoon or evening — enough overlap for calls. I invoice in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order pressure washing website design: what to send me"),
        p(
          "Tell me the name of the business, share your Google profile or current site, list the surfaces you clean, say how you price them, name the towns you cover and say whether you take commercial work. Five or six before-and-after pairs from your phone help me design a first screen around your own results. You get back a page plan and a price that will not change. Reach me through the ",
          link("form above", "#quote"),
          " or on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
