// Landing page fixture: SEO for carpenters and joiners (EN), group «carpentry-seo».
// NEW page — create-landing.cjs, root level like the other industry SEO pages.
//
// Why it exists (04.11.2026). Measured: «carpenter seo» 70, and «woodworking»
// ~10, which is folded in as a section rather than given a page of its own —
// same treatment as wedding photography on the photographer page. The paired
// WEBSITE page exists: /carpentry-website-design.
//
// SERP (checked 04.11.2026): Portland SEO Growth, SS Invent, Marketkeep,
// SearchHog («SEO for Joiners and Carpenters»), Plerdy, Gushwork, All Things
// Web, Sadiq Saleem, Servgrow. All agencies selling to the trade, no platform
// guides — so the searcher is the business owner looking for a provider, and
// the page competes with agency pages rather than with advice.
//
// The angle, handed over by that SERP: one result sells to «joiners AND
// carpenters», and those are two businesses, not two words. Site carpentry
// serves contractors and builders; workshop joinery serves homeowners who want
// fitted wardrobes, a kitchen, a staircase. Different client, different search,
// different page — and most carpentry sites serve both on one page and rank
// for neither. Second point no agency page on that SERP makes: fitted-furniture
// searches name the ROOM and the MATERIAL, and a gallery of finished work with
// no text about either is invisible, exactly as with artists.
import { p, h2, h3, li, link, k } from "./pt";

export const carpentrySeoEn = {
  lang: "en",
  group: "carpentry-seo",
  slug: "seo-for-carpenters",
  title: "SEO for Carpenters, Joiners and Bespoke Furniture Makers",
  heading: "SEO for carpenters and joiners: how to be found for the work you want rather than the work you are offered",
  excerpt:
    "Carpentry is two businesses with one name. Site work is sold to contractors, fitted furniture to homeowners who search by room and by timber. One page cannot win both, and most carpentry sites try. Audit from €250.",
  seo: {
    metaTitle: "Carpenter SEO — audit from €250",
    metaDescription:
      "SEO for carpenters, joiners and bespoke furniture makers: pages by room and material, contractor vs homeowner searches, quotes and lead times. Audit €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Pages by room and material", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Fitted wardrobes in your city", "Kitchens, stairs, built-ins", "Minimum project size stated", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a carpentry or joinery business: site, local profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: pages per job type and room, local profile, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a carpentry or joinery business", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a carpentry business actually consists of",
      items: [
        { _key: k("o"), iconName: "layers", title: "Separate pages for site work and joinery", text: "Contractors and homeowners search differently" },
        { _key: k("o"), iconName: "grid", title: "A page per piece of fitted furniture", text: "Wardrobes, kitchens, staircases, built-ins" },
        { _key: k("o"), iconName: "search", title: "The room and the timber as search terms", text: "Oak, walnut, alcove, loft, under-stairs" },
        { _key: k("o"), iconName: "map-pin", title: "The local pack and your Google profile", text: "Photographs of finished work, hours, reviews" },
        { _key: k("o"), iconName: "tag", title: "Minimum project size on the page", text: "Fewer quotes, better ones" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Bespoke wardrobe maker in my city, oak, three-month lead»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Carpentry is two businesses with one name, and that decides the whole site"),
        p("A carpenter on a building site and a joiner in a workshop share a trade and almost nothing else commercially. Site carpentry is sold to contractors, developers and builders, who search for capacity, certification, day rates and whether you can start on the fourteenth. Workshop joinery is sold to homeowners, who search for a thing in a room — a wardrobe in an alcove, a kitchen, a staircase, shelving for a loft — and who compare photographs and lead times."),
        p("These two clients do not read the same page, do not use the same words, and do not decide on the same timescale. Most carpentry websites address both at once, which produces a home page saying «domestic and commercial carpentry, no job too small» — a sentence that answers no search anybody makes. The first decision in this work is which of the two you want more of, and then the site is built to say so."),
        li("if you want contractors: capacity, insurance, certifications, day rates, references from sites;"),
        li("if you want homeowners: rooms, materials, photographs of finished work, lead time, price ranges;"),
        li("if you genuinely want both: two distinct sections, each written as though the other client did not exist;"),
        li("and in either case, name the trade the way your market names it — carpenter, joiner, cabinetmaker, furniture maker are not interchangeable in every country."),

        h2("A page per piece of fitted furniture, because homeowners search by room and by timber"),
        p("The valuable domestic searches are specific and they almost always name a room or a material: fitted wardrobes in a city, a bespoke kitchen, an under-stairs storage unit, alcove shelving, an oak staircase, a walnut dressing table. The person searching has a space in their house they have been looking at for two years, and they want to see that exact thing made by somebody nearby."),
        p("Most joinery sites answer this with a gallery. A gallery is images, and images are not readable: a search engine cannot see that the piece is oak, cannot tell it is a wardrobe rather than a cupboard, and does not know which room it is in. Every job type you want more of therefore needs a page that says what it is, in what material, at roughly what cost, with what lead time, and with the photographs attached to that text rather than floating in a grid."),

        h3("Bespoke woodworking and furniture making as a separate line of work"),
        p("Making furniture to order is adjacent to joinery and sells differently again. The buyer is not solving a storage problem; they want a specific object — a dining table of a certain length, a desk to fit a recess, a piece in a particular timber — and they are prepared to wait and to pay for the maker rather than the product. The searches are correspondingly narrow and low in volume, which is precisely why they are winnable: almost nobody writes a page about making a four-metre dining table in a specific timber."),
        p("If this is the part of the business you want to grow, it needs its own section with its own language — species, finishes, joinery methods, commission process, deposit terms — and it should not be filed under the same heading as fitting out a developer's apartments."),

        h2("Quotes, minimum project size and lead time: the three things to publish"),
        p("The most expensive thing in a carpentry business is quoting for work you would not have wanted. Measuring up, drawing, pricing and following up a job that was never going to happen costs days a month, and the usual cause is a site that invites everyone to get in touch without saying what the business does, what it costs from, or when it could start."),
        p("Publishing three facts fixes most of it: a minimum project size, a realistic range for the common jobs, and the current lead time. Fewer people will write. The ones who do will be describing jobs you want, with budgets that exist, and they will already know they are waiting until spring."),
        p(
          "Where you want to be found by city, the groundwork is on the ",
          link("local SEO page", "/services/local-seo-services"),
          ". What the site itself should contain — galleries tied to job types, enquiry forms that collect room dimensions, material pages — is on the ",
          link("carpentry website design page", "/carpentry-website-design"),
          ", and if you want to know what is wrong before committing to anything, that is the ",
          link("SEO audit", "/services/seo-audit"),
          ".",
        ),

        h2("The local pack and the Google profile, where most domestic enquiries are decided"),
        p("For a homeowner, the first screen is usually the map results: three businesses, their ratings, their photographs and their hours. A joinery business with no photographs of finished work on the profile loses to one with twenty, regardless of which makes better furniture, and a profile listing «carpenter» as the only service loses the search for fitted wardrobes to one that lists fitted wardrobes."),
        p("This is cheap work with a fast return, and it is usually where I start on a carpentry business, because it tends to move within weeks while the pages are still maturing. It also needs maintaining: photographs added as jobs finish, hours corrected before holidays, and replies to reviews written by the person who did the work rather than by an agency."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: trade and local service businesses whose visibility I have run",
      subtitle:
        "What these share with a carpentry business: the client is local, the job is quoted rather than bought off a shelf, and the growth came from pages for specific services plus a strong local profile rather than bought links. A car service business, a landing page with editable SEO, a WordPress rebuild, a renovation and investment firm, and an education agency taken from one country to ten.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "seo-case-study-education-agency",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your carpentry business",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Business name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which work do you want more of?", options: ["Fitted furniture for homes", "Site and contract carpentry", "Bespoke furniture making", "A mix"] },
        { _key: k("z"), question: "Where do jobs come from now?", options: ["Word of mouth", "A trade directory", "Contractors who call me", "Search already works a little"] },
        { _key: k("z"), question: "Do you publish prices or lead times?", options: ["Neither", "Lead time only", "From-prices only", "Both"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a client asks ChatGPT for a joiner (GEO, AEO)"),
        p("«Who makes bespoke fitted wardrobes near me, in oak, and what is the wait» is a question people now put to an assistant before opening a map, and it fits this trade well, because the client wants two or three names with reasons rather than a directory of forty. The assistant answers from text it can read, so the same things decide whether a workshop is named: job types and materials written as text rather than left in a gallery, a price range or minimum it can quote, a current lead time, and the same name, address and hours across the site, the Google profile and the trade directories."),
        p(
          "Getting an existing site into a readable state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants describe the business wrongly — work you no longer take, a city you have left, a service you dropped years ago — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for carpenters and joiners: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a carpentry business cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. What moves the number is how many job types need their own pages, whether you want both domestic and contract work covered, and what state the Google profile is in."],
          ["Should the site cover both domestic and commercial work?", "Only as two distinct sections, each written as though the other client did not exist. A single page offering «domestic and commercial carpentry» answers neither search. If you have to choose, choose the work you want more of and build the site around it."],
          ["Do I need a page for every type of job?", "For every type you want more of, yes. Fitted wardrobes, kitchens, staircases and alcove shelving are four different searches made by four people with different problems, and one page about carpentry answers none of them."],
          ["My work is all photographs. Isn't a gallery enough?", "A gallery shows the quality and sells nothing to a search engine, which cannot see that a piece is oak or that it is a wardrobe. The photographs stay — they just need to sit inside pages that say what the job was, in what material, at roughly what cost, and how long it took."],
          ["Should I publish prices?", "A minimum project size and a range for common jobs. It is the single fastest way to stop losing days to quoting work you did not want, and it gives search engines and AI assistants a figure to quote instead of one a directory invented."],
          ["Do reviews matter?", "For the map results, a great deal — together with photographs of finished work and correct hours. For domestic clients the profile is often the whole decision, since many never reach the website at all."],
          ["How long before it brings enquiries?", "First movement after about a month and a half, growth on a three to six month horizon. Local and map searches usually move first; job-type pages take longer. Carpentry also has its own seasonality — enquiries for fitted furniture cluster before the holidays and in early spring — so the work is best started ahead of the season you want to fill."],
          ["Who writes the job-type pages?", "I draft them and you correct them. What makes these pages convert is what only the maker knows: what a job that size really costs, why a material is the wrong choice for a bathroom, how long a staircase actually takes. A client can tell immediately whether a tradesman or a marketer wrote it."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a carpentry or joinery business: what to send me"),
        p("Send the site, say whether you want domestic or contract work, and list the job types you would take more of tomorrow. I reply within one working day with what is holding the site back, what your Google profile is missing, and what I would do first — including which job-type pages are not worth writing because nobody in your area searches for them."),
      ],
    },
  ],
};
