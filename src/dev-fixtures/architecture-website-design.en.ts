// Landing page fixture: Architecture website design (EN), group
// «architecture-website-design». New page.
// Semantic core: ref/professionals.md / professionals.csv (US) and BRIEF.md:
// architecture website design / design architecture website / architecture
// design website / architecture and design website 590 each (H1, several H2;
// part of these variants means «website architecture design» — information
// architecture of websites; the page is about websites for architects, and
// the filters H2 names the phrase in that sense) · architecture website design
// templates 210 (templates H2 + FAQ) · best architecture website design 40 +
// architecture website design inspiration 20 + ideas 10 (patterns H2, no real
// firms named) · website design for architecture firms 30 (metaTitle) ·
// architecture firm website design 20 (team H2) · architecture and interior
// design website 30 (H3).
// SERP: FreshySites (agency for architects), Archello, Insidea, Bitskingdom,
// Pinterest, First in Architecture, Webflow — agencies and inspiration.
// Intent: ref/intent-check-professionals.md — «architecture website design» vs
// «website for architects» 0 shared URLs, 0 shared domains → this is the
// design page; development is /architecture-studio-website (its thesis «a
// visual profession judged on load time» is not repeated: speed is one H3,
// one link). «architecture website design» vs «seo for architects» 0 shared →
// /seo-for-architects linked from the AI H2.
// This page = the site as a portfolio that sells: project page story,
// drawings, before/after, typology / location / status filters, typography and
// whitespace, team and process pages, awards and press, design by practice
// type (residential, commercial, interior, landscape), templates vs custom,
// patterns of the best architecture websites, AI-readable design.
// Design is sold with development; prices include both.
// NOT on this page: SEO, Google Business Profile, image file names and alt
// text, publications as links (/seo-for-architects); how galleries are built
// and hosted (/architecture-studio-website); hreflang
// (/services/multilingual-website-development).
// Owner’s rules: never say there are no clients from the visitor’s industry;
// every page covers AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const architectureWebsiteDesignEn = {
  lang: "en",
  group: "architecture-website-design",
  slug: "architecture-website-design",
  title: "Architecture website design",
  heading: "Architecture Website Design",
  excerpt:
    "I design architecture websites and build them myself: project pages that tell the story of a brief with drawings and before-and-after views, filters by typology and place, team and process pages, and a portfolio that turns visitors into commissions.",
  seo: {
    metaTitle: "Website Design for Architecture Firms | Bandziuk",
    metaDescription:
      "Architecture website design with the build included: project pages with drawings and before/after, typology filters, team and process pages. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Portfolio that sells, built in", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Houses · Offices · Interiors", "Filter by type and city", "Plans, sections, before / after", "Start a project"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple architecture website with selected projects, design and build", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Architecture website with project filters, project pages with drawings and before/after views, team and process pages and language versions, design and build", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with architecture website design",
      items: [
        { _key: k("o"), iconName: "image", title: "Project pages that tell the story", text: "Brief, site, constraints, drawings, result" },
        { _key: k("o"), iconName: "layers", title: "Filters by typology, place and status", text: "A homeowner sees houses, a developer sees offices" },
        { _key: k("o"), iconName: "file-text", title: "Plans, sections and before/after views", text: "Readable on a phone, zoomable on a desktop" },
        { _key: k("o"), iconName: "message-circle", title: "Team and process pages", text: "Who designs, how the stages run, how to start" },
        { _key: k("o"), iconName: "shield-check", title: "Awards and press with sources", text: "A line on the project page, linked to the article" },
        { _key: k("o"), iconName: "sparkles", title: "A portfolio AI assistants can read", text: "Projects and services as text, not only images" },
      ],
      prices: [
        { _key: k("r"), label: "Simple architecture website", value: "700–1,400 €", note: "design and build" },
        { _key: k("r"), label: "Filters, project pages with drawings, team, languages", value: "from 2,000 €", note: "design and build", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: websites I have designed, rebuilt and built",
      subtitle:
        "A premium visual style for a Warsaw renovation and property-investment company. A 3D laser scanning and BIM company whose site was rebuilt from scratch on WordPress, keeping the design the client liked, adding a portfolio section and versions in English, Polish and German. An education agency whose pages for ten destination countries all share one visual system, plus tidy service pages for a wheel-renovation workshop and a tyre-storage business. For an architecture practice the same approach means finished work presented as pages, a style that belongs to the studio and an inquiry form that is easy to find.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your architecture website design",
      subtitle: "Within one business day I send a sketch of the home, project and team pages with a fixed price.",
      contextLabel: "Studio name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What does the studio design?", options: ["Houses and residential", "Commercial or public buildings", "Interiors", "Landscape", "Several of these"] },
        { _key: k("z"), question: "What do you have now?", options: ["A template site (Squarespace, Wix, Webflow)", "An older custom site", "Only Instagram or a PDF portfolio", "No website yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I offer architecture website design for studios, interior architects and landscape practices, and the same person — me — builds the site, so one price covers the design and the code. An architect’s website is a portfolio first, but a portfolio that sells: a future client should leave a project page knowing what the studio would do with a brief like theirs and how to take the first step."),

        h2("Architecture website design that brings commissions, not only admiration"),
        p("Many architecture sites are made to impress other architects: a full-screen slideshow, a cryptic menu, project names that mean something only inside the office. A client about to spend years and a large budget with you is looking for other things:"),
        li("the kind of work you do and where, in one line on the first screen"),
        li("projects like their own within one or two clicks"),
        li("a picture of how working with the studio goes and what happens first"),
        li("a way to get in touch that does not require hunting for an email address"),
        p("The visual quality stays — the work should look as good on screen as it does built — but every page also answers one of those questions."),

        h2("Architecture project page design: the story, the drawings, before and after"),
        p("The project page is where a visitor decides whether you are the right studio. I design it as a short story rather than a gallery:"),
        ol("One strong image and a title with the building type and the place."),
        ol("The brief and the constraints of the site in a few sentences."),
        ol("Plans, sections or diagrams that carry the idea, readable on a phone and zoomable on a desktop."),
        ol("Before-and-after views for renovations and extensions, side by side or with a slider."),
        ol("Facts in a short table: area, year, materials, energy standard, team, photographer."),
        ol("Links to similar projects and a button to discuss a project of this kind."),
        h3("High-resolution photography on a project page without a slow site"),
        p(
          "Large photos and quick pages can live together when images are prepared and loaded properly. The build side is described on the ",
          link("website for architects", "/architecture-studio-website"),
          " page. In the design it means choosing fewer, stronger images per project and letting drawings do part of the explaining.",
        ),

        h2("Project filters by typology, location and status: the information architecture of an architect’s site"),
        p("A studio with forty projects needs a way to show the right five. Filters by typology — houses, housing, offices, education, interiors, landscape — by location and by status — built, in progress, competition — let a developer see only commercial work and a homeowner only houses. The chosen filter stays in the page address, so a link to “built houses in Colorado” can be sent in an email."),
        p("This is the part of the job that “website architecture design” refers to in the web sense: the structure behind the pages. On an architect’s site it decides how fast the right project is found, so it is agreed before any visual design starts."),

        h2("Typography, whitespace and grids in website design for architects"),
        p("Architects notice type and spacing, and their clients judge the site with the same eye. Choices I make together with the studio:"),
        li("one or two typefaces, often a neutral sans serif for text with a more distinctive face for headings"),
        li("a grid that respects the proportions of the photography rather than cropping every image to a square"),
        li("generous whitespace around images, and text set at a comfortable line length"),
        li("a restrained palette taken from the studio’s identity, with one color kept for buttons"),
        li("body text large enough to read on a phone without zooming"),
        p("Minimal does not have to mean hard to use. Menus stay visible, labels stay readable, and buttons look like buttons."),

        h2("Team, process and studio pages in architecture firm website design"),
        p("Clients hire people. A team page with real portraits, roles, registration details and the projects each architect led works better than a grid of black-and-white faces without names. A process page walks through the stages — first meeting, feasibility, concept, permit drawings, technical design, construction — with what the client receives at each and roughly how long it takes. A studio page can show the office, physical models and sketches: work in progress says more about method than a mission statement."),

        h2("Awards, publications and press on an architecture website"),
        p("Awards and features in architecture media are proof that clients understand. The design gives them a place without turning the site into a trophy shelf:"),
        li("a short line on the project page naming the award or publication and the year, linked to the source"),
        li("a press page listing each publication, the date and the article, as text"),
        li("publication logos only beside the matching text, never as an unexplained strip"),

        h2("Website design for residential, commercial, interior and landscape architects"),
        h3("Residential architecture websites"),
        p("Homeowners compare houses, not concepts. Interior photography, before-and-after views, a plain description of the process and a first-meeting form that asks about the plot, the budget and the timeline."),
        h3("Commercial and public-sector practices"),
        p("Developers and public clients look for experience by sector and scale. Sector pages, project facts in tables, team credentials, and the frameworks or tenders you can name."),
        h3("Architecture and interior design websites"),
        p("Studios that do both need projects tagged by service, so a client who wants only an interior is not lost among buildings. Materials, furniture and supplier credits interest this audience."),
        h3("Landscape architecture websites"),
        p("Gardens and public spaces change with the seasons and the years. Pages that show the same place over time, planting plans and maps for large sites tell that story."),

        h2("Architecture website design templates or a custom design"),
        p("Architecture website design templates on Squarespace, Webflow, WordPress or Format are popular because their demos use beautiful photography and six neat projects. For a young studio they are a sensible start: low cost, quick launch, easy editing."),
        p("Limits appear as the portfolio grows: filters that cannot combine typology and location, project pages without room for drawings or facts, galleries that get heavier with every project, one language, little control over structured data. A custom design pays off when the studio has dozens of projects, works in several sectors or countries, or wants commissions from search. Leaving a template later means building again, so the choice is worth making early."),

        h2("Best architecture website design: patterns behind sites that bring clients"),
        p("Collections of the best architecture websites and architecture website design inspiration on Pinterest, Archello or Webflow show striking home pages. Behind the ones that bring clients, the same patterns repeat:"),
        li("a first screen that says what the studio designs and where"),
        li("project thumbnails with the type and place written under each"),
        li("filters by typology and location"),
        li("project pages that combine images, drawings and a short text"),
        li("a contact button that stays in reach without covering the photography"),
        li("the same quality on a phone as on a large monitor"),
        p("When you collect ideas, open a project page and the contact page on your phone, not only the home page on a desktop."),

        h2("An architecture website that ChatGPT and Google AI Overviews can read"),
        p("When someone asks ChatGPT, Perplexity or Google’s AI Overviews for an architect who designs a certain type of building in a certain place, the answer comes from text the assistant can read. A site where projects exist only as images, services sit in a PDF and the address appears only on an embedded map gives assistants nothing to repeat. The design keeps services, project types, places, team and awards as page text, with structured data for the practice and each project."),
        p(
          "Being named in those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page; being found in Google for your project types is covered on the ",
          link("SEO for architects", "/seo-for-architects"),
          " page.",
        ),

        h2("How I design an architecture website, and how much it costs"),
        ol("Brief: the studio’s identity, the current site, the projects to show first and sites you like."),
        ol("Structure: menu, filters and page templates, agreed on a phone layout."),
        ol("Design: the home page, a project page and the team page in full; the rest follow the same system."),
        ol("Build and content: projects entered with texts and images, so the studio adds new ones itself."),
        p("The price covers both design and development:"),
        li("A simple architecture website with selected projects, a studio page and contacts: 700–1,400 €."),
        li("A full site with project filters, project pages with drawings and before-and-after views, team and process pages and language versions: from 2,000 €."),
        p(
          "Language versions follow the same design; the technical side is on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page. If the studio already has a site, its current URLs and positions are carried over by the ",
          link("website redesign", "/services/website-redesign-services"),
          " process, and all ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Architecture website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does architecture website design cost?", "A simple architecture website with selected projects costs 700–1,400 €; a site with project filters, project pages with drawings, team and process pages and language versions starts at 2,000 €. Both prices include the design and the build, and the quote is fixed once I know the studio."],
          ["Is a Squarespace or Webflow template enough for an architecture studio?", "For a young studio with a handful of projects, often yes. Once the portfolio grows into dozens of projects, several sectors or a second language, template limits on filters, project facts and structured data start to cost more than a custom design."],
          ["Do you design architecture websites without building them?", "No, I only take projects where I also build the site. Whether a floor plan can be zoomed on a phone, how the filters respond and how a large gallery loads all get settled in the code, and static mockups cannot carry those decisions."],
          ["What should an architecture project page include?", "A strong lead image, a title with the building type and place, the brief and site constraints, plans or sections, before-and-after views for renovations, a short table of facts and links to similar projects with a button to start a conversation."],
          ["We have hundreds of project photos. How many should go on the site?", "Fewer than you think: usually eight to fifteen per project, chosen to show the idea, the key spaces and the details. The rest can stay in your archive or go into a press kit for publications."],
          ["Can our team add new projects without a developer?", "Yes. Projects, team members and press items are added through an admin panel with fixed fields for texts, facts, images and drawings, so every new project page looks like the others."],
          ["Do you work with architecture firms outside Poland?", "Yes — studios abroad work with me remotely. We review layouts on video calls and leave comments in a shared design file between calls; I work in English, Polish and Russian and invoice in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order architecture website design: what to send me"),
        p(
          "A link to the studio’s current site or Instagram is enough to start; add the five to ten projects you want to show first, any drawings and photos you can share, the languages you need and two or three architecture sites whose look you admire or dislike. You get back a plan for the home, project and team pages and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
