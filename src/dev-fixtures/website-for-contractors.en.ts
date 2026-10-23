// Landing page fixture: Website for contractors — development (EN), topic 6b.
// Semantic core: research/pseo/page-core/contractors.md: contractor websites /
// website(s) for contractors 720, general contractor websites 170, contractor
// website services 90, website builder(s) for contractors 90.
// Intent: research/pseo/intent-check-contractors.md — «contractor websites» vs
// «contractor website design» 0 shared URLs; vs «construction company website»
// 1 shared. SERP: field-service platforms, builders (Wix, Webflow) and
// contractor agencies — so the page answers «builder or custom» head-on.
// Not here: design (6a /contractor-website-design), SEO (7a/7b), bigger
// builders (/construction-company-website).
// Owner's rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const websiteForContractorsEn = {
  lang: "en",
  group: "website-for-contractors",
  slug: "website-for-contractors",
  title: "Website for contractors",
  heading: "Websites for Contractors",
  excerpt:
    "I build websites for contractors — general contractors, remodelers and specialty trades: a fast site you own, with service and area pages, an estimate form wired to your scheduling tool and projects your crew adds from a phone.",
  seo: {
    metaTitle: "Websites for Contractors: Custom-Built, Yours | Bandziuk",
    metaDescription:
      "Contractor websites built to bring calls and estimate requests: service and area pages, a form linked to your scheduling tool, no lock-in. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Services and areas", "Estimate requests", "Projects from a phone", "Yours, no lock-in"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple contractor website", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Contractor website with service and area pages, project portfolio, estimate form linked to your tools and local SEO", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with a website for your contracting business",
      items: [
        { _key: k("o"), iconName: "layers", title: "Service and service-area pages", text: "One page for each job you sell and each area you cover" },
        { _key: k("o"), iconName: "plug", title: "Estimate requests where you work", text: "Email, CRM or your scheduling tool — no copying" },
        { _key: k("o"), iconName: "image", title: "Projects your crew adds from a phone", text: "Photos, job, town — the page builds itself" },
        { _key: k("o"), iconName: "gauge", title: "Fast on mobile data", text: "Pages appear in under 2.5 s, even with many photos" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Structured data for the business, services and areas" },
        { _key: k("o"), iconName: "shield-check", title: "Yours: code, content and domain", text: "No monthly platform fee, no lock-in" },
      ],
      prices: [
        { _key: k("r"), label: "Simple contractor website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Services, areas, projects, estimate form, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Website development portfolio: sites I have built",
      subtitle:
        "Closest to contracting: a renovation company and a workshop whose request form takes photos. The others are service businesses whose owners edit the site themselves and get work from calls and forms.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your contractor website",
      subtitle: "I reply within one business day with a proposed page structure and a fixed price.",
      contextLabel: "Business name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "A builder site", "An old website"] },
        { _key: k("z"), question: "Where should requests go?", options: ["Email", "A CRM", "A scheduling tool", "Not sure yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I build websites for contractors from start to finish — structure, design, development and launch — and the site is yours when it is done. A contractor website is not a brochure: it is where homeowners and property managers decide whether to call you, so it is built around calls and estimate requests, and around the way your office actually handles them."),

        h2("What a website for contractors needs to bring calls and estimate requests"),
        p("Most contractor websites have a home page, an “about us”, a list of services on one page and a contact form. That is enough to exist, not enough to be found or chosen. A contractor website that brings work has:"),
        li("a page for each service — the jobs you want more of, not everything you have ever done"),
        li("a page for each town or area you cover, with projects from there"),
        li("projects with before-and-after photos, the job and the town"),
        li("an estimate form that asks what you need to price the job and takes photos"),
        li("licence, insurance, warranty and reviews shown as text"),
        li("click-to-call and a request button on every page"),
        p(
          "How these pages look and lead a visitor to a call is covered on the ",
          link("contractor website design", "/contractor-website-design"),
          " page.",
        ),

        h2("General contractor websites: many services, one clear structure"),
        p("A general contractor sells additions, remodels, basements, roofing and repairs to different people at different budgets. Put on one page, those services compete with each other and none of them is found. On a general contractor website every service gets its own page with scope, timing, a price range where you can give one and projects of that type, and each page leads to the same estimate request."),
        p("If you also build commercial projects or work for developers, those get their own section, so a homeowner looking for a kitchen remodel is not shown a warehouse."),

        h2("Estimate requests that reach your office and your scheduling tool"),
        p("The estimate form is built in short steps: type of job, address or postcode, timing, budget range, photos. Requests arrive by email with everything in one place, or go straight to where your office already works:"),
        li("a CRM or shared inbox"),
        li("a field-service or scheduling tool such as Jobber or Housecall Pro, through its own request form or booking link"),
        li("a Google Sheet, if that is how your office keeps track"),
        p("Calls from the website are tracked separately from calls from your Google profile, so you can see which one brings work."),

        h2("Contractor website builder or a custom-built website"),
        p("Website builders for contractors — general ones like Wix and Squarespace, or the site that comes with a field-service platform — put a page online quickly for a monthly fee. For a one-person business with one service in one town, that can be a fine start."),
        p("The limits show as soon as the business grows:"),
        li("one services page instead of a page per service and area"),
        li("a gallery instead of project pages that can be found in search"),
        li("a slow site once it is full of job photos"),
        li("a monthly fee for as long as the site exists, and a site you cannot take with you when you leave the platform"),
        p("A custom-built website costs once, is shaped around how you sell, and the code, content and domain are yours."),

        h2("Contractor website services: what is included from brief to launch"),
        ol("Brief. You send the services you want more of, the areas you cover, projects with photos and the questions customers ask on the phone."),
        ol("Structure. I propose the pages and the path from each page to a call or a request, and agree it with you."),
        ol("Design. The home page, a service page and a project page are designed on a phone first."),
        ol("Development. The site is built, the estimate form is connected to your email or tools, the content is filled in."),
        ol("Launch. Analytics, call tracking, your Google Business Profile link and structured data are set up; your crew gets a short guide to adding projects."),
        p(
          "If you already have a website, every old address is redirected to its new page, so the positions it has in Google are kept. The process is described on the ",
          link("website redesign", "/services/website-redesign-services"),
          " page.",
        ),

        h2("Speed, hosting and maintenance of a contractor website"),
        p("Customers look at a contractor’s site on a phone, often on mobile data. Pages are built to appear in under 2.5 seconds — the threshold Google uses for a good page — even with dozens of job photos, because images are compressed on upload, served in modern formats and loaded only when they come into view."),
        p("The site runs on fast hosting with SSL, automatic backups and spam protection on the forms. There is no monthly retainer: when something needs changing, you pay for the work done."),

        h2("A contractor website that ChatGPT and Google AI Overviews can read"),
        p("Homeowners increasingly ask ChatGPT, Perplexity or Google’s AI Overviews to recommend a contractor nearby. Assistants can only recommend what they can read and check. The site is built so the facts about your business are machine-readable from day one:"),
        li("services, areas, licence, insurance and years in business written as text, not only in images"),
        li("structured data for the business, its services, service areas and reviews"),
        li("one page per service and area that answers the questions customers ask"),
        li("the same name, address and phone as in your Google profile and directories"),
        p(
          "Getting into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much a website for contractors costs"),
        li("A simple contractor website — home, services, areas, a few projects, estimate form: 700–1,400 €."),
        li("A website with a page for each service and area, a project portfolio your crew updates, an estimate form linked to your tools and local search optimisation: from 2,000 €."),
        p(
          "Design is included in both. Construction companies building larger projects will find more on the ",
          link("construction company website", "/construction-company-website"),
          " page. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Websites for contractors: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a contractor website cost?", "700–1,400 € for a simple contractor site, from 2,000 € for a site with a page for each service and area, a project portfolio, an estimate form linked to your tools and local search optimisation. Design is included. After a short description of the business I give a fixed price."],
          ["How long does it take to build a contractor website?", "Usually three to five weeks from the brief, depending on the number of services, areas and projects, and on how quickly the photos and texts are ready."],
          ["Can the website send requests to Jobber, Housecall Pro or our CRM?", "Yes, if the tool accepts requests through a form, a booking link or an integration — most field-service tools do. Otherwise requests arrive by email with all the details and photos."],
          ["Do we pay a monthly fee?", "No platform fee. You pay for hosting and the domain at cost, usually a few euros a month. Changes after launch are paid as work done, not as a retainer."],
          ["Can our crew add projects themselves?", "Yes. A new project is a short form in a simple admin panel, including from a phone: photos, the job, the town and a few sentences. The page is laid out automatically."],
          ["We already have a Wix or Squarespace site. Can you move it?", "Yes. The content is moved, every old address is redirected to its new page and structured data is set up, so the positions the old site had in Google are kept."],
          ["Do you build websites for contractors outside Poland?", "Yes. The work is done remotely, in English, Polish or Russian. The site is set up for your country: phone formats, units, licence details and the review platforms your customers use."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a contractor website: what to send me"),
        p(
          "Send the business name, a link to the current website or Google profile, the services you want more of and the areas you cover. A few recent projects with photos help me propose the structure. I will reply with a page plan and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
