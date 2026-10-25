// Landing page fixture: SEO for architects and architecture firms (EN), group
// «seo-for-architects». New page.
// Semantic core: ref/professionals.md / professionals.csv (US) and BRIEF.md:
// seo for architects 90 (H1, several H2) · local seo for architects 90 (H2 +
// FAQ) · seo services for architects 30 (cost H2) · seo for architecture firms
// (H1, sector H2) · architect seo (metaTitle, measuring H2) · seo keywords for
// architects 10 / best seo keywords for architects 10 (keyword H2) · related:
// seo for architects examples, best seo for architects (strategy H2).
// SERP: agencies only (WebFX, Archmark, Siana Marketing, Uncommon Architects,
// Nvent, Clap Creative, Sandford PR, Polarmass) → the page sells, with one
// H2 on the order of work and a short consultant-vs-agency paragraph.
// PAA: What are the best SEO strategies for architectural firms? (H2 + FAQ) ·
// Is AI replacing architects? (one FAQ answer) · Can ChatGPT do SEO? (FAQ).
// Intent: ref/intent-check-professionals.md — «seo for architects» vs
// «architecture website design» 0 shared URLs, 0 shared domains → separate
// pages; /architecture-website-design linked from the cost H2.
// Angle: clients search by building type + place + service; project pages as
// SEO pages (typology, location, size, sustainability); sector pages; planning
// and permit guides for homeowners; Google Business Profile; image SEO;
// Archello / ArchDaily / Dezeen / Architizer as authority and links;
// multilingual for international practices; AI answers. Portfolio proof: the
// ScanM2 case (3D laser scanning and BIM company, 29× organic growth).
// NOT on this page: site design, project page layout, filters, typography,
// templates (/architecture-website-design); building the site and gallery
// performance in code (/architecture-studio-website, linked once from image
// SEO); design-and-build contractors (/seo-for-construction-companies, one
// link); paid ads and social media (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const seoForArchitectsEn = {
  lang: "en",
  group: "seo-for-architects",
  slug: "seo-for-architects",
  title: "SEO for architects and architecture firms",
  heading: "SEO for Architects and Architecture Firms",
  excerpt:
    "I provide SEO for architects and architecture firms: project pages that rank for the building type and place a client searches, sector pages, Google Business Profile for the studio, image SEO for galleries, publications as links and a place in the answers ChatGPT gives.",
  seo: {
    metaTitle: "Architect SEO: Project Pages, Local, AI | Bandziuk",
    metaDescription:
      "SEO for architecture firms by one consultant: project pages by building type and place, local SEO, image SEO, publications, AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Project pages + AI answers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Passive house architect near me", "Project: timber family house", "Book a first meeting", "Recommended by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for an architecture practice: website, project pages, images, local profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for architects: project page rewrites, sector pages, image SEO, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for an architecture firm", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO services for architects",
      items: [
        { _key: k("o"), iconName: "search", title: "Searches by building type, place and service", text: "“Residential architect Denver”, “loft conversion architect”" },
        { _key: k("o"), iconName: "layers", title: "Project pages that rank on their own", text: "Typology, location, size and materials written as text" },
        { _key: k("o"), iconName: "map-pin", title: "Google Business Profile for the studio", text: "Category, service area, project photos, reviews" },
        { _key: k("o"), iconName: "image", title: "Image SEO for project galleries", text: "File names, alt text, captions, light files" },
        { _key: k("o"), iconName: "file-text", title: "Awards and publications working as links", text: "Archello, ArchDaily, Dezeen, competition entries" },
        { _key: k("o"), iconName: "sparkles", title: "Named when clients ask ChatGPT", text: "Facts about the practice that AI assistants can repeat" },
      ],
      prices: [
        { _key: k("r"), label: "SEO audit for an architecture practice", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for an architecture firm", value: "from 800 € / month", note: "project pages, local SEO, AI visibility, reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: technical, multilingual and service websites I have built and optimized",
      subtitle:
        "The first case is a 3D laser scanning and BIM company — the measured surveys and building models architects and engineers order before they work on an existing building. For two years its old no-code site produced no leads. I rebuilt it on WordPress with a scalable SEO structure in English, Polish and German and a portfolio section; organic traffic grew 29×, and inquiries now come in every week. Alongside it: a multilingual education agency site that serves students heading to ten countries, a Warsaw renovation and property-investment company with a premium design, and a local auto repair shop whose search visibility and usability I improved. What an architecture practice takes from them: projects presented as pages search engines can read, and a short path from a project to an inquiry.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your architecture practice",
      subtitle: "Within one business day you get a short list of the project pages and searches I would start with, and a fixed price.",
      contextLabel: "Studio name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of practice do you run?", options: ["Residential architecture", "Commercial and public buildings", "Interior architecture", "Landscape architecture", "A mix of these"] },
        { _key: k("z"), question: "Where do new commissions come from today?", options: ["Referrals and past clients", "Competitions and publications", "Instagram or Houzz", "Our website", "Not sure"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I provide SEO for architects: the practice’s own website shows up when a homeowner, a developer or a company looks for an architect for their kind of building in their area, and those visits become project inquiries. There is no agency team behind me: I research, write and change the site myself, and I also build websites. The service is for residential studios, commercial and public-sector practices, interior architects and landscape architects."),

        h2("What SEO for architects is: matching building type, place and service"),
        p("Clients rarely type a studio’s name or the word “architecture”. They describe their own project: “residential architect Denver”, “architect for a rear extension”, “passive house architect near me”, “architect for a restaurant fit-out”, “barn conversion planning”. Each search joins three things — the kind of building, the place and the service — and architect SEO puts a page of yours in front of every combination that matches the work you want more of."),
        p("Search engines read text. A site made of full-screen images with one-word captions impresses a visitor who is already on it but tells Google almost nothing. Most of the work below turns what the studio knows into pages that can be found."),

        h2("SEO keywords for architects: residential, commercial, passive house and extension searches"),
        p("Keyword research for a practice starts from the commissions you want, not from a tool. The groups I check for most studios:"),
        li("residential — new houses, renovations, extensions, loft and garage conversions, custom homes"),
        li("commercial and public — offices, retail and restaurant fit-outs, schools, healthcare, mixed-use"),
        li("sustainability — passive house, net-zero, timber construction, retrofit of existing buildings"),
        li("services — feasibility studies, permit applications, interior architecture, landscape design"),
        li("place — the city, its districts and suburbs, and the towns where you are willing to work"),
        p("Volumes for these phrases are small, often a few dozen searches a month. That is normal for the profession: one private house or one office fit-out can be worth more than a year of SEO, so a small number with the right intent deserves a page."),

        h2("Project pages as SEO pages: typology, location, size and sustainability"),
        p("Most architecture sites already hold their best SEO material — the portfolio — and waste it. A page called “House K” with twelve photos competes for nothing. The same project described in words can rank for the next client with a similar brief:"),
        li("a title that names the type and the place: “Timber family house extension in Evanston”"),
        li("the brief in two or three sentences: who the client was, what they needed, what limited the site"),
        li("floor area, construction method and main materials, and a budget range if the client agrees"),
        li("the energy standard or certification where it applies, such as Passive House or LEED"),
        li("the services you provided, from feasibility to construction oversight"),
        li("links to the matching sector page and to two or three similar projects"),
        p("Ten well-described projects usually do more than fifty with a caption each. I write the texts from your drawings, the design statement and a short talk with the architect who led the job."),

        h2("Sector and practice-area pages in SEO for architecture firms"),
        p("SEO for architecture firms working in several sectors needs a page per sector instead of one “Services” page that lists everything. A hospital board and a young family look for different proof. Each sector page explains the typical brief, the regulations that shape the design, the stages you cover and the projects of that type, linked from the page."),
        h3("Planning, permit and fee guides that homeowners search for"),
        p("Private clients read for weeks before they call: whether an extension needs planning permission, how long a building permit takes in their city, what an architect does at each stage, how fees are usually calculated. A short guide on each question, written for your jurisdiction and signed by an architect in the studio, meets those readers early and leads them to the matching service page. Rules differ by city and country, so every guide names the place it covers and the date it was checked."),
        p(
          "Design-and-build firms share part of this audience with contractors; their side of search is described on the ",
          link("SEO for construction companies", "/seo-for-construction-companies"),
          " page.",
        ),

        h2("Local SEO for architects: Google Business Profile, service area and reviews"),
        p("Local SEO for architects matters because most clients want someone who knows the local planning office and can come to the site. For a studio it means:"),
        li("a Google Business Profile with “Architect” as the main category, and further categories only where they are true, such as interior designer or landscape architect"),
        li("the office address or, for a home studio, a service area without a public address"),
        li("project photos added to the profile with the town named in the description"),
        li("reviews requested when a stage is finished and the client sees the result, each answered by name"),
        li("the same studio name, address and phone number on the site, the profile and every directory"),
        p(
          "The map side in depth is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Image SEO for architects: file names, alt text and fast project galleries"),
        p("In architecture the images are the content, and they can bring visitors through Google Images and visual search. What makes them count:"),
        li("file names that describe the picture: timber-extension-kitchen-evanston.webp rather than DSC_0412.jpg"),
        li("alt text that says what is shown — “double-height kitchen in a timber rear extension, view to the garden” — instead of a string of keywords"),
        li("captions under key images, which visitors read more than any paragraph"),
        li("WebP or AVIF files in several sizes, so a phone downloads a phone-sized picture"),
        li("the photographer’s credit, and a license that allows web use, checked before publishing"),
        p(
          "How a gallery is built so it stays fast with hundreds of photos is covered on the ",
          link("website for architects", "/architecture-studio-website"),
          " page.",
        ),

        h2("Awards, publications and architecture directories as authority and links"),
        p("The profession has its own platforms — Archello, ArchDaily, Dezeen, Architizer and national journals — and a feature there brings a link, a mention and readers who already value design. SEO uses them in three ways:"),
        li("each published or awarded project links back to its own project page, not only to the home page"),
        li("the site lists awards and publications as text, with the year and a link to the source"),
        li("the studio’s name and description match on every platform, so search engines and AI assistants see one firm"),
        p("Competition entries, lectures at schools of architecture, articles by your architects and listings in professional bodies’ member directories work the same way. Buying links is not part of my work."),

        h2("Multilingual SEO for architecture practices working in several countries"),
        p(
          "Practices that design abroad, or serve foreign clients at home, need the key pages in the languages those clients search in. A German client types “Architekt Einfamilienhaus” and expects details on fees and permits that an English page does not give. Each language version gets its own keyword research, translated project texts and hreflang tags that link the versions. I work in English, Polish and Russian; the technical side is on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page.",
        ),

        h2("SEO for architects in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("A growing share of clients put the question to an AI assistant first: “find an architect in Seattle who does passive house retrofits”, “what does an architect charge for a home extension”. ChatGPT, Perplexity and Google’s AI Overviews reply with a handful of studio names or a summary of a few sources. Optimizing for these replies goes by two names, GEO (generative engine optimization) and AEO (answer engine optimization). For an architecture practice the work looks like this:"),
        li("services, project types, places and sustainability expertise written as plain sentences"),
        li("project pages with facts an assistant can repeat: type, place, size, standard, year"),
        li("structured data for the practice, its office and its architects"),
        li("the same description on the site, the Google Business Profile and publication platforms"),
        p(
          "Before the work starts and again after it, I record what the assistants say about your studio and which other practices they suggest. The service itself is on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Best SEO strategies for architectural firms: the order I work in"),
        p("Searches for the best SEO for architects, or for SEO for architects examples, mostly lead to agencies’ own lists. For most studios the order of work is the same:"),
        ol("Fix the technical basics: indexing, titles and page speed with large images."),
        ol("Rewrite the ten to fifteen projects most similar to the work you want."),
        ol("Add a page for each sector or service with real search demand."),
        ol("Set up the Google Business Profile and directory listings."),
        ol("Publish guides for homeowners and point publications to project pages."),
        p("An architecture marketing agency usually adds PR, social media and ads to this list. I do the SEO part myself: research, writing with your architects, changes in the CMS or the code, and reports. Whoever you hire, ask who will write about your projects and how results will be counted."),

        h2("Measuring architect SEO in project inquiries, not visits"),
        p("A studio needs a few of the right inquiries, not thousands of visitors, so the report counts:"),
        li("contact forms and calls from search, with the page where the visit began"),
        li("inquiries by project type and budget, when the form asks for them"),
        li("calls, direction requests and website clicks from the Google Business Profile"),
        p("Students and job seekers also find architecture sites. Their visits are sent to a careers page and kept out of the sales report."),

        h2("How much SEO services for architects cost"),
        li("SEO audit for an architecture practice — the site, project pages, images, local profile, competitors and AI answers: from 250 €, one-off."),
        li("One-off work — project page rewrites, sector pages, image SEO, structured data: 250–700 €."),
        li("Monthly SEO for an architecture firm, with new pages, local SEO, publications, AI visibility and a report each month: from 800 € a month, or from 1,300 € a month where competition is very high."),
        p(
          "For a studio of three or four architects, the audit plus one round of project rewrites is often all the SEO it needs for a while. The audit is described on the ",
          link("SEO audit", "/services/seo-audit"),
          " page, the look of the site on the ",
          link("architecture website design", "/architecture-website-design"),
          " page, and all prices on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for architects: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for architects cost?", "The audit starts at 250 €, separate tasks such as project rewrites cost 250–700 €, and ongoing SEO starts at 800 € a month (1,300 € in the most competitive cities). Tell me the studio’s city and sectors and I will name a fixed price."],
          ["What are the best SEO strategies for architectural firms?", "Describe projects in words by type, place and size; give each sector or service its own page; set up the Google Business Profile; make images light and well named; and link every publication or award to the project it features. Those five steps cover most of what a studio needs."],
          ["Is local SEO for architects worth it for a small studio?", "Usually yes. Most residential clients look for an architect nearby, and the map results appear above the regular ones for many of those searches. A well-kept profile with project photos and reviews costs little and often brings the first inquiries from search."],
          ["Can ChatGPT do SEO for an architecture firm?", "It can help draft texts. It cannot see your search data or your competitors, and it does not know the brief, the site constraints or the decisions behind your projects. Those details are what make a project page rank and convince a client."],
          ["Is AI replacing architects?", "AI tools already speed up visualization, early massing studies and documentation. Clients still need a qualified professional who takes responsibility for the design, the permit and the building, and many now ask AI assistants which architect to hire — which is why the studio should be described clearly where those assistants read."],
          ["How long does SEO for architects take to bring inquiries?", "Technical fixes and better project titles can show within weeks. New sector and project pages usually need two to four months to rank. Commissions themselves follow later, since clients often compare studios for a while before the first meeting."],
          ["Do we need a blog, or are project pages enough?", "Project and sector pages come first; they bring clients with a brief in hand. Guides on permits, fees and stages are worth adding when homeowners in your area ask the same questions again and again, because they reach clients before they choose an architect."],
          ["Can a consultant in Poland do SEO for an architecture firm in the US or UK?", "Yes. All the work is remote and in English, with calls in the afternoon Central European Time, which is the UK afternoon and the US morning. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your architecture firm: what to send me"),
        p(
          "Tell me the studio’s website, the kinds of projects you want more of, the cities and countries you work in, the publications or awards you already have and where commissions come from today. My reply lists the first projects and searches to work on, with a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
