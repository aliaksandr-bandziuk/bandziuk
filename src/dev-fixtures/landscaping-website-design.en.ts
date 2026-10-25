// Landing page fixture: Landscaping website design (EN), group «trades».
// Semantic core: ref/trades-sites.md / trades-sites.csv, landscaping / lawn
// group: landscaping website design 140, landscaping website templates 140,
// free landscaping website templates 30; long tail: landscaping website design
// free 20, landscaping website design inspiration 10, landscaping websites in
// usa 10.
// Intent: ref/intent-check-trades-sites.md — «landscaping website design» vs
// «lawn care website»: 0 shared URLs, 1 shared domain → two pages. SERP for
// «landscaping website design»: lawncarewebdesign, housecallpro,
// contractorgorilla, pinterest, weblium, webfx, aqmarketing, reddit → agencies,
// templates and inspiration boards.
// Excluded: «landscaping design website» 210, «website landscape design» 210,
// «free landscaping design website» 140, «landscaping design website free» 110
// — homeowners looking for garden design tools; one clarifying sentence only.
// Brands (trugreen, scotts, true lawn care) ignored.
// This page = what the visitor sees and does: portfolio-led project pages for
// design-build and hardscape, separate design-build / maintenance paths,
// seasonal first screen, trust signals, consultation or estimate request,
// image-heavy pages on a phone, templates vs custom, examples.
// NOT on this page: recurring-service mechanics — instant quotes by lawn size,
// program sign-up, recurring billing, route pages, upsells
// (/lawn-care-website); SEO (/landscaping-seo); contractors in general
// (/contractor-website-design).
// Owner’s rule: new pages weave in AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const landscapingWebsiteDesignEn = {
  lang: "en",
  group: "landscaping-website-design",
  slug: "landscaping-website-design",
  title: "Landscaping website design",
  heading: "Landscaping Website Design",
  excerpt:
    "I design and build websites for landscaping companies — design-build, hardscape and maintenance: large project galleries with before and after, separate paths for new projects and upkeep, and a consultation request that works on a phone.",
  seo: {
    metaTitle: "Website Design for Landscaping Companies | Bandziuk",
    metaDescription:
      "Landscaping website design that sells projects: large galleries, before and after, design-build and maintenance paths, consultation requests. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Patio and wall projects", "Licensed · Insured", "Book a design consultation", "Plan your spring yard"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple landscaping website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landscaping website with project pages, design-build and maintenance paths, consultation form and local SEO, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with landscaping website design",
      items: [
        { _key: k("o"), iconName: "image", title: "A page for every finished project", text: "Wide photos, before and after, plan next to result" },
        { _key: k("o"), iconName: "layers", title: "Two paths: new landscape or upkeep", text: "Design-build and maintenance never share one button" },
        { _key: k("o"), iconName: "trending-up", title: "A first screen that follows the season", text: "Spring design, summer patios, fall cleanups, winter snow" },
        { _key: k("o"), iconName: "file-text", title: "A consultation request with yard photos", text: "Project type, budget range, timing, survey or plot plan" },
        { _key: k("o"), iconName: "shield-check", title: "Licenses, insurance and warranty in view", text: "Next to every request button, written as text" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Projects, services and areas as text, not only images" },
      ],
      prices: [
        { _key: k("r"), label: "Simple landscaping website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Project pages, two paths, seasonal first screen, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: project-led websites I have designed",
      subtitle:
        "Websites I have designed and built around photos of real work and a clear path to a call or a booking — the same principles a landscaping website needs.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your landscaping website design",
      subtitle: "I reply within one business day with a proposed layout for the first screen, a project page and a maintenance page, and a fixed price.",
      contextLabel: "Company name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What sells most of your work?", options: ["Design-build projects", "Hardscaping", "Maintenance", "A mix"] },
        { _key: k("z"), question: "How many finished projects can you show?", options: ["Dozens, well photographed", "A few good ones", "Hardly any photos yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p(
          "I design websites for landscaping companies and build them myself — design-build firms, hardscape contractors and landscapers who also run maintenance crews — so design and build come from one person at one price. A landscaping company sells something the customer cannot see yet: a backyard that exists only as a plan. The design has to make that future garden believable through your finished work, then turn the visitor into a consultation or estimate request. This page is about websites for landscaping businesses, not about tools for homeowners who want to plan their own yard.",
        ),

        h2("What landscaping website design has to do: sell the project before the site visit"),
        p("A homeowner planning a new patio or a full backyard looks for weeks before calling anyone. They save photos, compare three or four companies and judge each one by the work it shows. Landscaping website design is built around that habit:"),
        li("finished projects are the main content of the site, not a section near the footer"),
        li("every project page ends in a request for a consultation or an estimate"),
        li("the kind of work is clear at once — design-build, hardscape, planting, maintenance — so visitors know they are in the right place"),
        li("the towns you work in are stated near the top, so nobody falls for your portfolio and then learns you do not come to their street"),
        p(
          "A company that mostly mows and treats lawns needs a different site, organized around recurring service and online sign-up. That is covered on the ",
          link("lawn care website", "/lawn-care-website"),
          " page.",
        ),

        h2("Separate paths for design-build and maintenance customers on a landscaping website"),
        p("Many landscaping companies do both: large projects in spring and summer, and weekly maintenance that keeps the crews working all season. The two customers want different things. A design-build customer brings a large budget and wants to see taste, skill and a clear process. A maintenance customer wants reliability, a defined scope and a price per visit or per month."),
        p("The design separates them from the first screen with two clear entrances:"),
        li("“Plan a new landscape” — portfolio, design process, consultation request"),
        li("“Keep my property maintained” — what weekly or seasonal service includes, the areas you cover, a quote request"),
        p("Each path has its own pages, photos and button wording, so a visitor planning a pergola never lands on a mowing price, and a property manager is not pushed into a design consultation."),

        h2("Landscaping project galleries: large photos, before and after, plan to finished garden"),
        p("Landscaping is bought with the eyes, and the gallery is where visitors spend most of their time. In the design each project is a page of its own, not one thumbnail in a grid of eighty:"),
        li("a wide lead photo of the finished space, full screen width on a phone"),
        li("before and after from the same spot, with a slider the thumb can drag"),
        li("photos from the build — excavation, base, drainage, wall courses — because the work hidden under a patio is what separates a careful installer from a cheap one"),
        li("a short description: what the client asked for, the materials and plants, how long it took, the town"),
        h3("Design-build project pages: from the first sketch to the planted garden"),
        p("For full designs the story sells as much as the result. A project page follows it in order: the site as it was and its problems — a slope, poor drainage, deep shade, a view to hide — then the plan or 3D rendering, the build, and the finished garden. A photo of the planting a year later, if you can take one, shows the design was meant to last. A visitor who sees the drawing next to the real garden trusts that what you draw is what gets built."),
        h3("Hardscape project pages: patios, retaining walls and outdoor kitchens"),
        p("Hardscape customers search by material and want to see the exact thing: paver patios, natural stone, retaining walls, steps, fire pits, outdoor kitchens. Projects can be filtered by type and material, so someone planning a stone wall sees only walls, with close-ups of joints, caps and edges where the quality of the work shows."),

        h2("A seasonal first screen on a landscaping website: spring, summer, fall and winter"),
        p("A landscaping site that shows a snowy yard in May, or a tulip bed in November, looks abandoned. The first screen is designed to change with the season, using your own photos:"),
        li("late winter and spring — design-build and planting, with “Book a spring design consultation”"),
        li("summer — outdoor living, patios, landscape lighting, irrigation"),
        li("fall — cleanups, fall planting, and design work booked over the winter"),
        li("winter — snow removal or holiday lighting if you offer them, and early booking for spring projects"),
        p("Switching is a setting in the admin panel: a photo, a headline and a button for each season, prepared once and reused every year."),

        h2("Trust signals in landscaping website design: licensed, insured, certified"),
        p("A landscaping project means heavy machinery on someone’s property, digging near utility lines and a large bill paid in stages. Visitors look for proof that you are a careful, established company. The design puts that proof next to every request button and on every project page:"),
        li("contractor license and insurance, written as text, where your state or region requires them"),
        li("certifications you or your crew hold — industry association credentials, manufacturer installer programs for pavers or wall systems, pesticide applicator licenses — only the real ones"),
        li("a written warranty on hardscape work and your terms for replacing plants that fail"),
        li("reviews that name the type of project and the town"),
        li("years in business and crew size"),

        h2("Consultation and estimate requests in landscaping website design"),
        p("Landscapers price their work in different ways, and the request follows yours. Some give free estimates for hardscape and maintenance; many design-build firms charge for a design consultation and credit it against the project. The design states which applies before the visitor types anything."),
        p("The form is short and asks only what you need to prepare the visit:"),
        ol("Type of project: new design, patio or wall, planting, maintenance."),
        ol("Address, so you can check the area and look at the property from above."),
        ol("A rough budget range, which saves both sides a visit that cannot end in a contract."),
        ol("Timing: this season, next spring, still planning."),
        ol("Photos of the yard and, if they have one, a property survey or plot plan."),
        p(
          "Requests arrive by email or go into the CRM or estimating tool you use. How forms are connected to your tools, and what goes into the build, is covered on the ",
          link("websites for contractors", "/website-for-contractors"),
          " page.",
        ),

        h2("Image-heavy landscaping websites on a phone: large photos that still load fast"),
        p("A landscaping portfolio can hold hundreds of photos and some drone video, and most visitors open it on a phone. The design decides how images behave before anything is built:"),
        li("photos are cropped for a vertical phone screen as well as a wide desktop one"),
        li("galleries open as swipeable full-screen views, with captions that stay readable"),
        li("only the first image loads at once; the rest appear as the visitor scrolls"),
        li("drone video plays on tap, with a still frame in its place until then"),
        p("Planned this way, a page full of photos can still show its main content within 2.5 seconds, the threshold Google uses for a good page load."),

        h2("Landscaping website templates or a custom landscaping website design"),
        p("Landscaping website templates — the free ones that come with website builders and the paid themes — are made to look good with stock photos of perfect lawns. Filled with a real company’s content, they show the same gaps: a photo grid with no project pages, one services list for design-build and maintenance together, a generic contact form, and no place for a seasonal first screen."),
        p("A template is a sensible start for a new company with one crew and a dozen projects to show. A custom design pays off once you sell large projects, run design-build and maintenance side by side or cover several towns. Moving off a template later usually means building the site again."),

        h2("Landscaping website design examples and inspiration: what to take from them"),
        p("Pinterest boards and design showcases are full of landscaping sites with full-screen video and elegant type. Use them for mood, then look at what each one asks the visitor to do. The examples that bring work share a few decisions:"),
        li("a first screen that says what the company builds and where"),
        li("projects as separate pages, with words as well as pictures, and a request button on each"),
        li("photos of the company’s own work and crew, not stock gardens"),

        h2("Landscaping website design that ChatGPT and Google AI Overviews can read"),
        p("Homeowners ask ChatGPT, Perplexity or Google’s AI Overviews to suggest a landscape designer nearby or to explain what a retaining wall costs. The answers name companies whose facts the assistant can read and check. A design that keeps everything inside photos and sliders gives it nothing to work with. Here, services, areas, licenses, warranty terms and project descriptions stay as real text, with structured data for the business, its services and its projects."),
        p(
          "Getting into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Being found in Google search and on the map for your services and suburbs is covered on the ",
          link("landscaping SEO", "/landscaping-seo"),
          " page.",
        ),

        h2("How the landscaping website design process works"),
        ol("Brief. You send your services, areas, licenses, reviews and the projects you are proudest of, with every photo you have."),
        ol("Project selection. We pick the projects to feature first and note the ones that need better photos next season."),
        ol("Phone layouts. I design the first screen, a project page and a maintenance page on a phone screen and agree them with you."),
        ol("Full design and build. The other pages follow the same system and are built into a fast site where adding a project is a short form."),
        p(
          "If you already have a website and want a new design without losing your Google positions, the ",
          link("website redesign", "/services/website-redesign-services"),
          " process keeps addresses and redirects in place. Companies that offer more than landscaping will find more on the ",
          link("contractor website design", "/contractor-website-design"),
          " page.",
        ),

        h2("How much landscaping website design costs"),
        p("Design is part of building the website, and the price covers both."),
        li("A simple landscaping website — home, services, project gallery, consultation request: 700–1,400 €."),
        li("A landscaping website with project pages filtered by type and material, separate design-build and maintenance paths, a seasonal first screen, area pages and local search optimization: from 2,000 €."),
        p(
          "Send a short description of the company, the work you want more of and the towns you cover, and I will prepare a fixed quote. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Landscaping website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does landscaping website design cost?", "Design is included in the price of the website: 700–1,400 € for a simple landscaping site, from 2,000 € for a site with project pages, separate design-build and maintenance paths, a seasonal first screen, area pages and local search optimization. After a short description of the company I give a fixed quote."],
          ["How long does it take to design and build a landscaping website?", "Usually three to five weeks from the brief. What takes longest is choosing and describing the projects, so having photos sorted by job speeds things up. Work started in fall or early winter is live well before spring."],
          ["Are free landscaping website templates good enough to start with?", "For a new company with one crew, yes. They become a limit once you need a page per project, separate paths for design-build and maintenance, and a first screen that changes with the season. Changing later usually means building the site again."],
          ["How many projects do we need for a landscaping portfolio?", "Eight to twelve well-photographed projects with a few sentences each make a stronger start than a hundred loose photos. If before photos are missing, I send your crew a short shot list for the coming season."],
          ["Should a landscaping website show prices?", "Ranges for common project types, with what changes them — size, materials, access, drainage — help. They filter out requests that would never become contracts and show visitors you are open about cost. Exact prices are rarely possible for design-build work."],
          ["Can the website take bookings for paid design consultations?", "Yes. If your scheduling tool offers online booking and payment, it is placed on the consultation path; otherwise the form collects the request and you send a payment link. The design says clearly whether the fee is credited against the project."],
          ["Can you redesign our landscaping website without losing Google rankings?", "Yes. Every existing address is mapped to its new page and redirected, and structured data is carried over before the new design goes live, so the positions the site already has are kept."],
          ["Do you work with landscaping companies outside Poland?", "Yes. Design and development are done remotely, in English, Polish or Russian. The site is set up for your country: phone formats, units, license details and the review platforms your customers use."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order landscaping website design: what to send me"),
        p(
          "Send the company name, a link to your current website or Google profile, the work you want more of — design-build, hardscape or maintenance — and the towns you cover. A handful of finished projects with before and after photos helps me show you a first screen and a project page that look like your company. I will reply with a proposed layout and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
