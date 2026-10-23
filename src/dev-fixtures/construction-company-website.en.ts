// Landing page fixture: Construction company website development (EN).
// Semantic core: research/pseo/page-core/construction.md (website group):
// website for construction company 1 300, construction company website 480,
// building construction company website 480, construction website company 390,
// construction company website builder 110, small construction company website
// 20, how to make a website for construction company 10.
// Not here: «best construction company websites» (design page H2), «contractor
// websites» / «general contractor website» (contractor topics 6–7).
// Intent: research/pseo/intent-check-construction.md — 0 shared URLs with
// «construction website design» and «construction seo».
// Owner's rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const constructionCompanyWebsiteEn = {
  lang: "en",
  group: "construction-company-website",
  slug: "construction-company-website",
  title: "Construction company website",
  heading: "Construction Company Website Development",
  excerpt:
    "I build websites for construction companies: service and area pages, a project portfolio your team updates itself, and a quote form that takes photos and drawings — fast on a phone and owned by you.",
  seo: {
    metaTitle: "Website for a Construction Company | Bandziuk",
    metaDescription:
      "A website for a construction company: service and area pages, projects your team adds itself, a quote form with photo upload, fast and yours. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Services and areas", "Projects you add yourself", "Quote with photos", "Call · WhatsApp"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple construction company website", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Construction company website with project portfolio, service-area pages, quote form and local SEO", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with a construction company website",
      items: [
        { _key: k("o"), iconName: "layers", title: "Pages for each service and area", text: "The structure clients and search engines look for" },
        { _key: k("o"), iconName: "image", title: "A project portfolio your team updates", text: "New project from a phone: type, place, size, photos" },
        { _key: k("o"), iconName: "file-text", title: "A quote form that takes photos and plans", text: "Requests arrive complete, by email" },
        { _key: k("o"), iconName: "gauge", title: "Fast on a phone, even on site", text: "Pages load in under 2.5 s on mobile data" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Facts as text, structured data for services and areas" },
        { _key: k("o"), iconName: "shield-check", title: "Yours: code, content and domain", text: "No lock-in to a builder or an agency" },
      ],
      prices: [
        { _key: k("r"), label: "Simple construction company site", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Projects, service areas, quote form, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Website development portfolio: sites I have built",
      subtitle:
        "Closest to construction: a renovation and investment company and an architecture studio. The others show the pieces a construction site needs: a quote form with photos, three languages, and a client who edits the site himself.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your construction company website",
      subtitle: "I reply within one business day with a proposed page structure and a fixed price.",
      contextLabel: "Company name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "A builder site", "An old website"] },
        { _key: k("z"), question: "What do you build?", options: ["Homes", "Renovations", "Commercial projects", "Several of these"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I build websites for construction companies from start to finish — structure, design, development and launch — so one person is responsible for how the site looks and how it works. A construction company website has one job: turn people who are comparing builders into requests for a price. Everything on it is planned around that."),

        h2("What a construction company website needs: pages and features"),
        p("Most construction company websites are a home page, an “about us”, a gallery and a contact form. That is not enough to be found or to be chosen. A website that brings work has:"),
        li("a page for each service you sell — new builds, renovations, extensions, roofing, finishing"),
        li("a page for each town or area you cover, with projects from there"),
        li("a project portfolio where every project has its own page with facts and photos"),
        li("a quote form that asks the questions your estimator needs and accepts photos and drawings"),
        li("credentials, insurance, warranties and reviews shown next to the quote button"),
        li("phone and WhatsApp one tap away on every page"),
        p(
          "How these pages look and lead a client to a request is covered on the ",
          link("construction website design", "/construction-website-design"),
          " page.",
        ),

        h2("A project portfolio your team updates from a phone"),
        p("A portfolio only works if it stays current, and it stays current only if adding a project takes a few minutes. On the site I build, a new project is a short form in a simple admin panel: type of work, location, size, duration, a few sentences and photos straight from the phone. The page is laid out automatically, gets its own address, and appears in the right service and area lists."),
        p("Photos are compressed on upload, so a site manager can add twenty pictures from the site without slowing the website down."),

        h2("A construction quote form with photo and drawing upload"),
        p("The quote form is where the website earns its cost. It asks, in a few short steps, what your estimator would ask on the phone: type of project, location, approximate size, stage, budget range and start date. Clients can attach photos of the site and plans from their phone or computer."),
        p("Requests arrive by email with everything in one place. If you use a CRM or a shared inbox, the form can send requests there instead, so nothing gets lost between the office and the site."),

        h2("Speed, hosting and security of a construction company website"),
        p("Clients often look at a builder’s site on a phone, on mobile data, sometimes standing on their own plot. Pages are built to appear in under 2.5 seconds on a mobile connection — the threshold Google uses for a good page — even with many project photos, because images are served in modern formats and loaded only when they come into view."),
        p("The site runs on fast hosting with SSL, automatic backups and protection of the forms against spam. When a site is built well, it often needs no maintenance for months; when it does, you pay for the work done, not a monthly retainer."),

        h2("A construction company website that AI assistants can read"),
        p("More clients ask ChatGPT, Perplexity or Google’s AI Overviews to recommend a builder. Assistants can only recommend what they can read. The site is built so that the facts about your company are machine-readable from day one:"),
        li("services, areas, years in business and credentials written as text, not only shown in images"),
        li("structured data for the company, its services, service areas and reviews"),
        li("one page per service and area, each answering the questions clients ask"),
        li("the same company details as in your Google profile and directories"),
        p(
          "Getting found in search and AI answers is ongoing work, described on the ",
          link("SEO for construction companies", "/seo-for-construction-companies"),
          " page.",
        ),

        h2("Construction company website builder or a custom-built website"),
        p("A website builder — a general one or one made for contractors — puts a site online quickly for a monthly fee. For a small construction company with a few services and a handful of projects, that can be a reasonable start."),
        p("The limits show up as the company grows: project pages that cannot be filtered, one generic services page, a three-field contact form, a slow site full of photos, and no way to take the site with you when you leave. A custom-built website is shaped around how your company sells, and the code, the content and the domain are yours."),

        h2("A website for a small construction company"),
        p("A small construction company does not need a large website. It needs the few pages that matter: home, services, the areas it works in, five to ten good projects and a quote form. That is the simple version, from 700 €, and it can grow into the full structure later without rebuilding."),
        p(
          "If you sell remodels and repairs to homeowners rather than build whole projects, see the ",
          link("websites for contractors", "/website-for-contractors"),
          " page.",
        ),
        p(
          "If you are a property developer selling apartments or houses in your own projects, the website works differently — see the ",
          link("property and real estate developer website", "/property-developer-website"),
          " page.",
        ),

        h2("How a construction company website is built"),
        ol("Brief. You send the list of services and areas, projects with photos, and the questions clients usually ask. If you are in Warsaw, I come to the office or a site."),
        ol("Structure. I propose the page structure and agree it with you before any design."),
        ol("Design. The home page, a service page and a project page are designed in full on a phone first."),
        ol("Development. The site is built, the portfolio and the quote form are set up, and the content is filled in."),
        ol("Launch. Analytics, the Google profile link and structured data are checked; your team gets a short guide to adding projects."),
        p(
          "If you already have a website, the move keeps your Google positions: every old address is redirected to its new page. That process is described on the ",
          link("website redesign", "/services/website-redesign-services"),
          " page.",
        ),

        h2("How much a website for a construction company costs"),
        li("A simple construction company website — home, services, areas, a few projects, quote form: 700–1,400 €."),
        li("A website with a project portfolio, service and area pages, a detailed quote form with uploads and local search optimisation: from 2,000 €."),
        p(
          "Design is included in both. Send a short description of your company and I will prepare a fixed quote. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Construction company website: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a website for a construction company cost?", "700–1,400 € for a simple construction company site, from 2,000 € for a site with a project portfolio, service and area pages, a detailed quote form and local search optimisation. Design is included. After a short description of the company I give a fixed price."],
          ["How long does it take to build a construction company website?", "Usually three to six weeks from the brief, depending on the number of services, areas and projects, and on how quickly the photos and texts are ready."],
          ["Can our team add projects and edit the website?", "Yes. Projects, services, areas and texts are edited in a simple admin panel, including from a phone. Adding a project takes a few minutes, and the layout stays consistent."],
          ["Who owns the website?", "You do: the code, the content and the domain. There is no lock-in to a builder platform or to me, and you can take the site to another developer at any time."],
          ["Can you move our existing website without losing Google rankings?", "Yes. Every existing address is mapped to its new page, redirects are set up and structured data is carried over before the new site goes live, so the positions the old site had are kept."],
          ["Is a one-page website enough for a small construction company?", "For a one-person firm with one type of work, a single page with services, area, a few projects and a quote form can be enough. As soon as there are several services or areas, separate pages bring more requests and are found more often."],
          ["Will the website be found in Google and in AI answers?", "The site is built with the structure, speed and structured data that search engines and AI assistants need. Being found for competitive searches is ongoing SEO work on top of that, which I also do."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a construction company website: what to send me"),
        p(
          "Send the company name, a link to the current website or social profile, the services you offer and the areas you cover. A few recent projects with photos help me propose the structure. I will reply with a page plan and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
