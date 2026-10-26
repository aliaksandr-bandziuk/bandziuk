// Landing page fixture: SEO for Interior Designers (EN), group
// «seo-for-interior-designers». New page.
// Semantic core: ref/home-services.md, interior designers group (US): seo for
// interior designers 110 (H1, metaTitle, several H2) · local seo for interior
// designers 10 (local H2) · seo keywords for interior designers 10 (keywords
// H2, FAQ) · seo company for interior designers 10 (choosing H2). PAA from the
// group («What is the best website for interior designers?», «Can ChatGPT do
// interior design?») belong to the website page and to consumers — the AI H2
// here answers the designer’s side (being named), not design tools.
// Intent: ref/intent-check-home-services.md — «seo for interior designers» vs
// «interior designer website design» 0 shared URLs → separate pages; SEO SERP
// is small agencies (Wingnut Social, Apollo Digital, The Leading Solution,
// Skoatch), Design Files blog, Quora, Facebook — weak, content-led.
// Reader: a solo interior designer or a small studio, not a homeowner.
// Angles: name searches after referrals, keyword groups (place, room/project,
// style, service model, name), Google Business Profile (studio vs
// service-area), area pages written from real projects, project pages for
// Google and image search, Houzz / Instagram / Pinterest as profiles and link
// sources, press and trade links (architects, contractors, showrooms), e-design
// as national SEO, AI answers, inquiries as the metric, choosing a provider.
// NOT on this page: site design, templates vs custom, portfolio layout, fee
// page and inquiry form design (/interior-designer-website-design — sibling);
// design-build and renovation crews competing with contractors
// (/seo-for-contractors — linked once); Houzz Pro ads, Google Ads, social ads.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const seoForInteriorDesignersEn = {
  lang: "en",
  group: "seo-for-interior-designers",
  slug: "seo-for-interior-designers",
  title: "SEO for interior designers",
  heading: "SEO for Interior Designers and Design Studios",
  excerpt:
    "I provide SEO for interior designers and small design studios: your name at the top after a referral, local searches by city and neighborhood, project pages that rank in Google and image search, press and partner links, and a place in AI answers, measured in project inquiries rather than visits.",
  seo: {
    metaTitle: "Interior Design SEO: Local, Projects and AI | Bandziuk",
    metaDescription:
      "SEO for interior designers: local and city searches, Google Business Profile, project pages for image search, Houzz, press links, AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["City, project and e-design searches", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Interior designer in Westport", "Kitchen and dining renovation", "Reviews on Google and Houzz", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for an interior designer: website, Google Business Profile, Houzz and other profiles, project pages, AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for an interior design studio: area and service pages, project page rewrites, structured data, inquiry tracking", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for an interior designer or design studio", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for interior designers",
      items: [
        { _key: k("o"), iconName: "search", title: "The searches clients make before hiring", text: "City, room, style, service model and your name" },
        { _key: k("o"), iconName: "map-pin", title: "Google Business Profile and area pages", text: "Studio address or service area, set up right" },
        { _key: k("o"), iconName: "image", title: "Project pages that rank", text: "Titles, alt text and captions written per project" },
        { _key: k("o"), iconName: "layers", title: "Houzz, Pinterest and press as sources", text: "Profiles and features that point to your pages" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "Facts and projects an assistant can repeat" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in project inquiries", text: "Each inquiry with the page that brought it" },
      ],
      prices: [
        { _key: k("r"), label: "SEO audit for an interior designer", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a design studio", value: "from 800 € / month", note: "project and area pages, links, reviews, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: service businesses whose clients decide from a few pages",
      subtitle:
        "For a Warsaw company doing renovations, finishing and property investment, I built a site with premium design that lets finished interiors make the case. A Warsaw auto repair shop got local SEO, Google Maps work, service pages and a clearer path to the phone. For Giuseppe, a psychotherapist in Milan, I moved 468 blog posts to Next.js and Sanity with a 301 redirect from every old URL and added location pages for Milan and Monza; his new pages already appear in ChatGPT answers. ScanM2, a 3D laser scanning and BIM company, had no leads for two years; after a rebuild on WordPress its organic traffic grew 29× and leads come every week. For Cyprus VIP Estates I built a five-language property site and run its SEO every month. A studio needs what worked across these: pages for the exact searches clients make in their area, and enquiries traced back to those pages.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "psychotherapist-website-milan",
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your interior design studio",
      subtitle: "Within one business day you get my first three fixes — Google profile, area pages or project pages — and a fixed price.",
      contextLabel: "Studio name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you want more of?", options: ["Full-service residential projects", "Kitchen and bath projects", "E-design clients", "Commercial or hospitality work"] },
        { _key: k("z"), question: "How is your studio set up?", options: ["Solo designer", "Studio of 2–10 people", "Design-build with our own crews", "New studio, first year"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("SEO for interior designers is the work that gets a design studio found when homeowners search for a designer in their city, for the project they are planning or for your name after a referral, and turns those visits into project inquiries. I do it myself, as an SEO consultant who also builds websites, for solo designers and studios of a few people, so the person who finds a problem on your site is the person who fixes it."),

        h2("What SEO for interior designers covers: name searches, local results and project pages"),
        p("Most design clients still come by referral, and even a referred client types your name into Google before writing to you. The rest search by place, by room or by service. SEO for a design studio covers four places where those searches lead:"),
        li("your website: service pages, area pages, project pages and articles"),
        li("your Google Business Profile and the map results for “interior designer near me”"),
        li("your profiles on Houzz, Instagram and Pinterest, and articles about you in the press"),
        li("answers in ChatGPT, Perplexity and Google AI Overviews"),
        p(
          "Layout, portfolio design and the inquiry form are covered on the ",
          link("interior designer website design", "/interior-designer-website-design"),
          " page; this one is about being found.",
        ),

        h2("SEO keywords for interior designers: what clients type before they hire a designer"),
        p("Keyword research for a studio starts with how clients describe their project, not how designers describe their work. The searches that end in paid projects usually fall into five groups:"),
        li("place: “interior designer Scottsdale”, “interior design firm Upper West Side”, “interior decorator near me”"),
        li("room or project: “kitchen remodel designer”, “primary bathroom design service”, “new build interior design”"),
        li("style: “modern organic interior designer”, “Japandi interior design studio” — only where a style is what you are known for"),
        li("service model: “full-service interior design”, “e-design services”, “interior design consultation cost”"),
        li("your name and studio name, including the ways people misspell them"),
        p("Volumes for most of these are small, often a few dozen searches a month per city, and that is fine for a business that needs a dozen good projects a year. A page ranking for “kitchen designer [town]” does not need thousands of visitors; it needs the three people about to spend on a kitchen."),

        h2("Local SEO for interior designers: Google Business Profile, cities and neighborhoods"),
        p("For most studios the map results bring more inquiries than any blog post. Google treats an interior designer as a local business: a studio that receives clients shows its address, while a designer who works from home and visits clients sets up a service-area profile with the address hidden. What counts:"),
        li("the primary category “Interior designer”, with extra categories only for services you really sell"),
        li("the studio name as it appears on your invoices, with no city or service words added"),
        li("photos of finished projects added through the year, each with the town in the description"),
        li("a review request when a project is installed, and a reply to every review"),
        p(
          "On the website, one page for each city or area where you take on-site projects — written from the homes you have done there, the local housing and what clients there usually ask for — supports the profile. Five area pages with real projects behind them outrank fifty copies with the town name swapped. Map rankings and reviews in more depth are on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Interior design project pages that rank in Google and image search"),
        p("A portfolio grid of untitled images gives a search engine almost nothing to work with. Each project becomes a page aimed at one search:"),
        li("a title naming the work and the place, such as “Kitchen and dining room renovation in a 1920s Tudor, Evanston”"),
        li("image file names and alt text that describe each room, written per image instead of copied"),
        li("a few hundred words on the brief and the choices, linked to the matching service and area pages"),
        li("photos compressed so the page passes Core Web Vitals on a phone"),
        p("Google Images and Pinterest send people to interiors long after a shoot, and a well-described photo can bring a client to the project page years later."),

        h2("Houzz, Instagram and Pinterest in SEO for interior design studios"),
        p("Platforms are part of interior designer SEO, not a replacement for it. A Houzz profile often ranks for a studio’s name and is read by AI assistants; Pinterest pins lead people to images; Instagram is where many clients first see you, though its posts seldom show in Google results. How I set them up:"),
        li("the same studio name, address or area, phone and website on every profile"),
        li("Houzz projects and Pinterest pins linking to the matching project page on your site, not only the home page"),
        li("reviews gathered on Google first, then on Houzz"),
        li("paid Houzz Pro placements judged by the inquiries they bring, next to the inquiries your own pages bring"),

        h2("Press features and trade links in SEO for interior designers"),
        p("Links from other sites still tell Google which studios deserve a place. Interior designers have link sources most local businesses lack:"),
        li("publications that featured your projects — ask for a link to the project page, not only a credit line"),
        li("architects, builders, contractors and photographers you work with, who can credit you on their own project pages"),
        li("showrooms and vendors with “designers we work with” pages"),
        li("show houses, design awards and local home tours"),
        p("Bought links and directory packages carry the risk; links earned from people you actually worked with carry the value."),

        h2("SEO for e-design and online interior design services"),
        p("E-design is the one service where an interior designer competes beyond the city. There is no map pack here, and the competition is national e-design companies and designers from everywhere. What ranks is a clear page for each package, answers to what buyers ask before paying — what they receive, how many revisions, how to measure a room — and finished e-design rooms with the clients’ own photos where they agree. E-design pages stay separate from local service pages, so each targets its own searches and neither weakens the other."),

        h2("SEO for interior designers in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("More homeowners put the question straight to ChatGPT, Perplexity or Google’s AI Overviews: “good interior designers in Raleigh for a mid-century house”, “how much does an interior designer charge per hour” or “is e-design worth it”. The assistant names a few studios and says why. This is what people call generative engine optimization (GEO) or answer engine optimization (AEO), and for a design studio it comes down to:"),
        li("city, service area, project types, style and fee model written as plain sentences on the site"),
        li("project pages and articles that answer client questions directly, with the designer named as author"),
        li("the same facts on Google, Houzz and in press features, and a steady flow of new reviews"),
        li("LocalBusiness and Person structured data tied to those profiles"),
        p(
          "Before the work and after it, I check how assistants describe your studio and which designers they name instead. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Measuring interior designer SEO in project inquiries, not visits"),
        p("Traffic is easy to grow with articles nobody hires from. My report counts what a studio lives on: project inquiries from search with the page they came from, the project type and the budget range chosen on the form; calls and website clicks from the Google Business Profile; and rankings for the searches you care about, shown next to those numbers. If inquiries land in Studio Designer, Houzz Pro or a CRM, the source travels with them."),

        h2("Choosing an SEO company for interior designers or a single consultant"),
        p(
          "Agencies that target interior designers often sell a bundle of blog posts and social media. Before signing with anyone, ask who writes the project and area pages, whether reports show inquiries, and whether the content and accounts stay yours if you leave. I do the audit, the pages, the code changes and the reports myself; the general approach is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page. Studios with their own renovation crews also compete with general contractors, which the ",
          link("SEO for contractors", "/seo-for-contractors"),
          " page covers.",
        ),

        h2("How much SEO for interior designers costs"),
        li("SEO audit — website, Google Business Profile, Houzz and other profiles, project pages and AI answers: from 250 €, one-off."),
        li("One-off work — area and service pages, project page rewrites, structured data, inquiry tracking: 250–700 €."),
        li("Monthly SEO for an interior design studio — new project and area pages, articles, links from partners and press, reviews, AI visibility and reports: from 800 € per month."),
        p(
          "A solo designer in a smaller city usually needs the audit and five or six well-written pages more than a monthly retainer. The audit is described on the ",
          link("SEO audit", "/services/seo-audit"),
          " page, and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for interior designers: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO cost for an interior designer?", "Expect from 250 € for a one-off audit, 250–700 € for a single piece of work such as area pages, and from 800 € a month for ongoing SEO. Tell me your city and the projects you want, and I will name a fixed price."],
          ["How long does SEO take for an interior design studio?", "The Google Business Profile and name searches can improve within weeks. New area and project pages usually need three to six months to bring steady inquiries, longer in large cities where many studios compete for the same searches."],
          ["Is Instagram enough, or does an interior designer need SEO?", "Instagram shows your work to people who already follow you or find you through the feed. People searching Google or asking an assistant for a designer in their town reach websites, profiles and map results, so a studio that relies on Instagram alone misses that demand."],
          ["What are good SEO keywords for interior designers?", "Searches that combine a place with a service or project: “interior designer [town]”, “kitchen designer [neighborhood]”, “full-service interior design [city]”, plus “e-design services” if you sell it and your own studio name. Style terms help only where you are known for that style."],
          ["Does a Houzz profile help my website’s SEO?", "It helps people find and trust you: the profile often ranks for your name, carries reviews and is read by AI assistants. Project links from Houzz to your own pages add to that. It works best with the same details as your website and Google profile."],
          ["Should I work on local SEO if I also sell e-design?", "Yes, as two separate tracks. Local SEO brings full-service projects in your area through the map and area pages; e-design pages target national searches. Mixing them on one page weakens both."],
          ["Can a consultant in Poland do SEO for a US interior designer?", "Yes. Everything happens online and in English. Central European afternoons and evenings line up with US mornings, so a call fits before your first site visit of the day. I invoice in EUR under a written contract."],
          ["Will ChatGPT recommend my interior design studio?", "Nobody can promise a mention, but the odds improve when your city, project types and style are written plainly on your site, projects are described in words, and the same facts and fresh reviews appear on Google and Houzz. I check what assistants say about you before and after the work."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for interior designers: what to send me"),
        p(
          "Send your website, links to your Google Business Profile and Houzz, the towns where you work in person, the kind of projects you want more of, whether you sell e-design, and where inquiries arrive today. My reply lists what to fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
