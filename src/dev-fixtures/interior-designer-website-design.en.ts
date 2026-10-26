// Landing page fixture: Interior designer website design (EN), group
// «interior-designer-website-design». New page.
// Semantic core: ref/home-services.md, interior designers group (US):
// interior designer website design / website design for interior designers 50
// (H1, H2s, metaTitle) · interior design website templates 110 + website
// templates for interior designers 70 + best / free website templates for
// interior designers 10 each (templates H2 and H3s) · best website builder for
// interior designers 10 (templates H2 closing paragraph, FAQ) · simple interior
// design websites 40 (cost list, «simple interior designer website») · website
// designer for interior designers 10, website design services for interior
// designers 10 (intro, FAQ). Related: «website for interior designers
// examples», «creative website for interior designers» (first-screen and
// templates text). PAA used: «What is the best website for interior designers?»
// (H2 + FAQ).
// Intent: ref/intent-check-home-services.md — «website for interior designers»
// (590) vs «interior designer website design» 0 shared URLs: the 590 phrase is
// homeowners looking for inspiration and designers (Houzz, Havenly, Emily
// Henderson) → not targeted; designers’ demand is «interior designer website
// design» + templates (SERP: Studio Designer, Wix, Freshysites, studios).
// «seo for interior designers» vs «interior designer website design» 0 shared
// → separate page /seo-for-interior-designers (sibling, linked).
// Reader: a solo interior designer or a small studio, not a homeowner.
// Angles: first screen for a client before a discovery call, portfolio with
// heavy photos that loads fast, photo credits and usage rights, project pages
// (brief, constraints, solution, credits), services and fee models (flat fee,
// hourly, per square foot, percentage — the designer’s own choice), e-design
// page, qualifying inquiry form into studio software, templates (Squarespace,
// Showit, Wix) vs custom, Houzz and Instagram vs own site, About page with press
// and credentials (ASID / NCIDQ — general), AI-readable site.
// NOT on this page: keyword research, Google Business Profile setup, ranking
// project and area pages, press links (/seo-for-interior-designers — sibling);
// design-build firms with their own crews (/contractor-website-design — linked
// once); interior design software and free design tools (consumer intent).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, link, k } from "./pt";

export const interiorDesignerWebsiteDesignEn = {
  lang: "en",
  group: "interior-designer-website-design",
  slug: "interior-designer-website-design",
  title: "Interior designer website design",
  heading: "Interior Designer Website Design",
  excerpt:
    "Interior designer website design and build from one person: a portfolio of large photos that still opens fast on a phone, project pages that explain the brief and the solution, a clear page about your services and fees, and an inquiry form that asks what you ask on a discovery call.",
  seo: {
    metaTitle: "Website Design for Interior Designers | Bandziuk",
    metaDescription:
      "Interior designer website design with the build included: fast portfolio, project pages, services and fees, e-design, inquiry form that qualifies. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Portfolio that opens fast"],
  heroPhonePoints: ["Project: 1920s Tudor kitchen", "Full-service · E-design", "How we work and fees", "Start a project"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple interior designer website, design and build", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Interior designer website with project page designs, services and e-design pages, an inquiry flow into your studio software, a second language if needed and local SEO setup, design and build", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with interior designer website design",
      items: [
        { _key: k("o"), iconName: "image", title: "Large project photos that open fast", text: "Resized per screen, sharp on a big monitor" },
        { _key: k("o"), iconName: "layers", title: "A page for every project", text: "Brief, constraints, solution and credits" },
        { _key: k("o"), iconName: "file-text", title: "Services and how you charge", text: "Flat fee, hourly or per square foot, in your words" },
        { _key: k("o"), iconName: "message-circle", title: "An inquiry form that qualifies", text: "Scope, location, timeline and budget range" },
        { _key: k("o"), iconName: "map-pin", title: "Your city and service area as text", text: "On-site projects nearby, e-design anywhere" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Name, style, services and areas on the page" },
      ],
      prices: [
        { _key: k("r"), label: "Simple interior designer website", value: "700–1,400 €", note: "design and build" },
        { _key: k("r"), label: "Project pages, services, e-design, inquiry flow, local SEO", value: "from 2,000 €", note: "design and build", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Websites I have designed and built for businesses sold on photos and trust",
      subtitle:
        "A Warsaw renovation and property-investment company got a site with premium design, where finished interiors carry the sale. Cyprus VIP Estates is a five-language luxury real estate site I built from scratch, with a filterable catalog, a map, video and enquiries sent to the CRM. For ScanM2, a 3D laser scanning and BIM company, I rebuilt a no-code site on WordPress and kept its design; organic traffic grew 29× and leads now come every week. Giuseppe, a psychotherapist in Milan, moved to Next.js and Sanity with all 468 blog posts and a 301 redirect from every old URL. An education agency got one multilingual site covering ten countries. A design client hires you the same way their clients chose these businesses: from pictures first, then from the pages that explain how the work is done.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your interior designer website",
      subtitle: "Within one business day you get a page plan — home, portfolio, project pages, services — and a fixed price.",
      contextLabel: "Studio name, website or Instagram",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["Only Instagram", "A Squarespace, Showit or Wix site", "A Houzz profile and a simple page", "An older WordPress site"] },
        { _key: k("z"), question: "What should the site bring you first?", options: ["Full-service residential projects", "E-design clients from other cities", "Commercial or hospitality work", "Fewer inquiries that do not fit"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do interior designer website design and build the site myself, for solo designers and small studios, so the person who lays out your portfolio is the person who writes the code and launches it. Instagram and Houzz show your rooms; your own website is where a homeowner who already likes the pictures learns how you work, what a project with you involves and how to start one."),

        h2("Interior designer website design: what a client checks before booking a discovery call"),
        p("A homeowner who heard your name from a friend, saw a feature in a magazine or followed you on Instagram usually opens your site in the evening, on a phone, with one question: is this designer right for my project? The home page answers it in this order:"),
        li("your work — one large photo of a finished room rather than a slideshow of twelve"),
        li("who you are and where — “Interior design studio in Austin, residential and boutique hospitality” as one line of text"),
        li("what you take on — whole homes, single rooms, new builds, renovations, e-design"),
        li("how to start — a “Start a project” button that leads to the inquiry form, plus your phone and email"),
        p("A home page with only a logo and a full-screen video wins attention in design galleries, but a visitor on a phone is left guessing which of those four answers applies to them."),

        h2("Portfolio pages in website design for interior designers: large photos that still load fast"),
        p("Interior design is sold on photographs, and a professional shoot arrives as large high-resolution files. Placed on a page unchanged, they make the portfolio crawl on mobile data, and the visitor leaves before the second image. The build carries the weight so you keep the quality:"),
        li("every photo cut into several widths and served as WebP or AVIF: a phone gets a small file, a large monitor gets a sharp one"),
        li("the first image of each project appears at once, the rest load as the visitor scrolls"),
        li("galleries that open full screen and swipe, instead of a slider that hides images behind arrows"),
        li("a portfolio overview filtered by project type — kitchens, whole homes, primary suites, commercial — instead of one endless grid"),
        p("Photo credits and usage rights get a fixed place too: the photographer’s name under each project, and only the images your agreement with the photographer allows on your site. Shots taken for a magazine feature may be held for the publication for a while, so check before they go into the portfolio."),

        h2("Interior design project pages: the brief, the constraints and the solution"),
        p("A grid of beautiful rooms shows taste. A project page shows how you think, which is what a client paying a design fee wants to see. Each project page follows one structure:"),
        li("the brief in two or three sentences: the household in general terms, what did not work in the space, what they asked for"),
        li("the constraints: a narrow galley kitchen, a load-bearing wall, a rental where nothing can be drilled, a fixed budget or a move-in date"),
        li("the solution: layout changes, materials and finishes, custom pieces, where the budget went"),
        li("before photos or plans next to the finished rooms, where the clients agreed"),
        li("credits: architect, contractor, photographer, stylist"),
        p("The story sits beside the images as page text, not lettered onto graphics, so a client, a search engine and an AI assistant can all read it."),

        h2("Services and fee structure on an interior designer website: flat fee, hourly or per square foot"),
        p("Someone who has never hired a designer does not know whether you charge a flat design fee, an hourly rate, a fee per square foot or a percentage of the project, and some leave because they assume the worst. A services page removes the guess without forcing you to publish numbers:"),
        li("each service as its own block: full-service design, consultation, single-room design, e-design, purchasing and procurement"),
        li("what each one includes — concept boards, floor plans, 3D renderings, specifications, site visits, contractor coordination"),
        li("how you charge, in your words, with a starting point or a minimum project size if you choose to show one"),
        li("the steps from the first call to installation day"),
        p("A stated minimum turns away projects that would not fit before anyone spends an hour on a call. Whether you publish it is your decision; the page has a place for it either way."),

        h2("E-design and online interior design services on your website"),
        p("E-design lets you work with clients outside your city: they send measurements and photos, you send a design board, a floor plan and a shopping list. It needs its own page, apart from full-service work, because the buyer and the decision are different:"),
        li("a package price or a price per room, which suits a purchase made online"),
        li("a plain list of what the client receives and how many revisions are included"),
        li("what the client sends you — room measurements, photos, images they like — step by step"),
        li("online payment and booking, or a short form if you prefer to talk first"),

        h2("An inquiry form for interior designers that qualifies projects before the call"),
        p("A plain contact form brings everything from a request to choose one paint color to a full renovation two states away. A project inquiry form asks what you would ask in the first five minutes of a call:"),
        li("the project type and the rooms involved"),
        li("the location, and whether it is a new build, a renovation or furnishing only"),
        li("the timeline and a budget range picked from options you set"),
        li("how they found you, so you see which channel sends the right clients"),
        p("Inquiries go to your email or into the software you run the studio on — Studio Designer, Houzz Pro, Programa or a CRM — where your account accepts outside forms. Booking the discovery call can follow through Calendly or the calendar tool you already use."),

        h2("Interior design website templates or a custom interior designer website"),
        p("Interior design website templates on Squarespace, Showit, Wix or WordPress are where most designers start, and for a new studio a template is a sensible choice."),
        h3("When website templates for interior designers are enough"),
        li("you are starting out and a dozen good photos are the whole portfolio"),
        li("most clients come by referral and the site only confirms what they heard"),
        li("you like editing pages yourself in the builder"),
        h3("When a custom interior designer website pays off"),
        li("the portfolio has outgrown what the template’s gallery handles well on a phone"),
        li("you want project, service and e-design pages that keep bringing search traffic for years"),
        li("you work in two languages or for clients in other states and countries"),
        li("your brand should look like your rooms, not like a layout other studios in your city already use"),
        p("The best website builder for interior designers is the one you will keep updating. If a template is that for you, keep it; a custom site makes sense once the template starts costing you projects."),

        h2("Best website for interior designers: Houzz, Instagram or your own site"),
        p("“What is the best website for interior designers?” has two answers. For being discovered, Houzz and Instagram are where many homeowners browse, and it is wise to be on both. For being hired, your own site does what the platforms cannot: it holds the full story of each project, your process and your fees, and it does not change when an algorithm does. Profiles on the platforms then link to the matching project or service page on your site rather than the home page."),
        p(
          "How those profiles and your project pages get found in Google is SEO work, described on the ",
          link("SEO for interior designers", "/seo-for-interior-designers"),
          " page.",
        ),

        h2("About page, press and credentials on an interior design studio website"),
        p("A client hiring a designer for a whole home trusts you with a large budget and months of their daily life. The About page carries that trust:"),
        li("a portrait and a short story: training, years in practice, the kinds of homes you like to work on"),
        li("the team, if there is one, with each person’s role"),
        li("press as a list of publication names, dates and links to the articles, not just a row of magazine logos"),
        li("memberships and credentials such as ASID or NCIDQ certification, as text, where you hold them"),
        li("your service area: the city, neighborhoods and nearby towns where you take on-site projects"),
        p(
          "A Google Business Profile with the same name, area and services is set up as part of my ",
          link("local SEO services", "/services/local-seo-services"),
          ". Studios that also run their own renovation crews sell more like builders; the ",
          link("contractor website design", "/contractor-website-design"),
          " page covers that.",
        ),

        h2("An interior designer website that ChatGPT and Google AI Overviews can read"),
        p("Homeowners now ask ChatGPT, Perplexity and Google’s AI Overviews for “an interior designer in Charlotte who does warm modern homes” or “an e-design service for a small apartment”. An assistant can only suggest a studio it can read about. The site keeps your studio name, city, service area, project types, style in plain words, services and fee model as page text, matching your Google Business Profile and Houzz; project pages describe the work in sentences; LocalBusiness structured data ties these facts together, and press items carry their dates."),
        p(
          "Getting your studio named in those answers takes ongoing work; see the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much interior designer website design costs"),
        p("Design and development are one price:"),
        li("A simple interior designer website — home page, portfolio, a few project pages, services, About and an inquiry form: 700–1,400 €."),
        li("A full site with project page designs, services and e-design pages, an inquiry flow into your studio software, a second language if needed and local SEO setup: from 2,000 €."),
        p(
          "The domain and hosting are registered to you, and the code and content are yours at launch; afterwards you pay only for hosting and the domain. Ranges are on the ",
          link("pricing", "/pricing"),
          " page, and my general build process is described on the ",
          link("website development", "/services/website-development"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Interior designer website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a website for an interior designer cost?", "Design and build together cost 700–1,400 € for a simple interior designer website and from 2,000 € for a site with project page designs, services and e-design pages, an inquiry flow into your software and local SEO setup. After a short description of your studio I give a fixed price."],
          ["What is the best website for interior designers?", "For being discovered, Houzz and Instagram; for being hired, your own site, because it holds your full projects, process and fees and stays under your control. Most studios use both, with every profile linking to the matching page on their own site."],
          ["Should I stay on Squarespace or Showit, or get a custom site?", "Stay if the template shows your portfolio well on a phone and you keep it updated. Move to a custom site when the gallery slows down, when you need project, e-design or language versions the template handles badly, or when your brand looks like everyone else’s layout."],
          ["Can I add new projects myself?", "Yes. You get an editor where a new project is a form: title, location, brief, photos and credits. The layout, image sizes and page speed are handled by the site, so a new project looks like the others without touching code."],
          ["Should an interior designer show fees on the website?", "Show how you charge — flat fee, hourly, per square foot or a percentage — and what each service includes. Numbers are optional; a starting point or minimum project size, if you share one, filters out inquiries that would not fit."],
          ["Can you move my current site without losing Google traffic?", "Yes. Before launch every old address gets a 301 redirect to its new page, and titles and project text move with it. That is how a psychotherapist’s site in Milan kept all 468 posts through a move to a new platform."],
          ["How do you work with a US interior designer from Poland?", "Online and in English. Warsaw afternoons and evenings fall on US mornings and early afternoons, so we review the design live once or twice and leave everything else as comments on the page mockups. I invoice in euros under a written contract."],
          ["Will my interior design website appear in ChatGPT answers?", "The site is built so AI assistants can read it: studio facts as text, structured data and dated press items. Being named in answers to specific questions takes ongoing SEO and GEO work, which I also do."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order interior designer website design: what to send me"),
        p(
          "Send your studio name, your current website or Instagram, the city and areas where you take on-site projects, your services and how you charge, links to photo folders for the four to six projects you want to lead with, and two or three designer sites you like. You get back a list of pages and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
