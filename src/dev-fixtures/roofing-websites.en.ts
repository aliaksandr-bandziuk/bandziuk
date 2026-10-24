// Landing page fixture: Roofing websites — development (EN), group «trades».
// Semantic core: ref/trades-sites.csv + trades-sites.md, roofing group:
// roofing websites 210, best roofing websites 70, roofing companies websites
// 50, roofing contractor websites 50, roofing company websites 50, roofing
// company website 30, best roofing company websites 20; long tail: website
// builder for roofing company 10, top roofing websites 10, best converting
// roofing websites 10. PAA: “What software do roofing companies use?” → FAQ.
// Intent: ref/intent-check-trades-sites.md — «roofing websites» top-10:
// roofwebs, reddit, sitebuilderreport, contractorgorilla, roofr, webflow →
// builders and agencies, owners’ demand; «roofing company website» top-10 is
// agencies and builders too. 0 shared URLs with «roofing website design» →
// separate page.
// Ignored: roofing services 14,800 (homeowners looking for a roofer),
// roofing (contractor) magazine (trade press), roofing company in usa.
// Not here: design, first screen, photos, trust signals, storm banner look,
// templates, agency choice (/roofing-website-design); SEO (/roofing-seo);
// contractors in general (/website-for-contractors).
// Owner’s rule: new pages weave in AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const roofingWebsitesEn = {
  lang: "en",
  group: "roofing-websites",
  slug: "roofing-websites",
  title: "Roofing websites",
  heading: "Roofing Websites for Roofing Companies",
  excerpt:
    "I build roofing websites for roofing companies and roofing contractors: a page for each roof job, roof system and town, storm-area pages your office opens itself, inspection requests with photos sent to your CRM, and a site you own.",
  seo: {
    metaTitle: "Roofing Company Websites Built for Inspections | Bandziuk",
    metaDescription:
      "Roofing websites with pages per service, roof system and storm area, inspection requests with photos sent to your CRM, and a site you own. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Hail last night? Book an inspection", "Pages per roof and town", "Requests into your CRM", "Yours, no lock-in"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple roofing website", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Roofing website with service, roof system, area and storm pages, inspection requests linked to your CRM and local SEO", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with a website for your roofing company",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for each roof job and roof system", text: "Replacement, repair, storm, inspection, metal, flat" },
        { _key: k("o"), iconName: "map-pin", title: "Area and storm-area pages", text: "Opened by your office after a storm, only where you work" },
        { _key: k("o"), iconName: "file-text", title: "Inspection requests with photos", text: "Address, damage, claim stage and pictures in one go" },
        { _key: k("o"), iconName: "plug", title: "Leads straight into your roofing CRM", text: "JobNimbus, AccuLynx, Roofr, ServiceTitan or email" },
        { _key: k("o"), iconName: "gauge", title: "Fast despite heavy aerial photos", text: "Images resized on upload, pages under 2.5 s" },
        { _key: k("o"), iconName: "shield-check", title: "The site is yours, not rented", text: "Code, content and domain in your name" },
      ],
      prices: [
        { _key: k("r"), label: "Simple roofing website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Service, roof system, area and storm pages, CRM, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Website development portfolio: sites I have built for local businesses",
      subtitle:
        "None of these are roofing companies. They are the closest work I have: a renovation company, a wheel workshop whose request form takes photos, a car repair shop that lives on calls, a tire storage page, and an education agency site with many location pages — the same structure as pages for many service areas.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your roofing website",
      subtitle: "I reply within one business day with a list of pages for your roof jobs and towns, and a fixed price.",
      contextLabel: "Roofing company name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "A builder or platform site", "A site an agency rents to us", "An old website"] },
        { _key: k("z"), question: "Where do your leads live?", options: ["JobNimbus or AccuLynx", "Roofr", "ServiceTitan", "Email or other"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p(
          "I build roofing websites for roofing companies and roofing contractors: a site for your own business, planned, designed, built and launched by one person, with a page for every roof job you sell, inspection requests that arrive with photos and land in your CRM, and code that stays yours. How it looks and what a homeowner sees first is on the ",
          link("roofing website design", "/roofing-website-design"),
          " page.",
        ),

        h2("What roofing contractor websites have to handle: storm calls, active leaks and replacement decisions"),
        p("Work reaches a roofer’s website in three moods. After a hailstorm, homeowners in a few zip codes want an inspection this week. A homeowner with water dripping through a ceiling wants a tarp on the roof today. A homeowner with twenty-year-old curling shingles reads for weeks about materials and payments before inviting anyone to measure. A roofing contractor website takes in all three:"),
        li("a quick path to a phone call for active leaks and emergency tarping"),
        li("an inspection request that collects the address and photos, for storm damage and planned work alike"),
        li("depth on replacement, materials and payment for the homeowner still deciding"),
        li("a way for the office to switch storm messages and storm-area pages on and off without calling a developer"),

        h2("Roofing company website pages for replacement, repair, storm damage and inspections"),
        p("On many roofing company websites every job sits on one “Services” page, which cannot be found for any single job. Each service you want more of gets its own page, generated from one template:"),
        li("Roof replacement — tear-off and installation, the materials you install, typical timeline, warranty, financing"),
        li("Roof repair — leaks, flashing, missing or lifted shingles, ventilation problems"),
        li("Storm and hail damage — what you check, how the inspection runs, what happens after it"),
        li("Roof inspections — after a storm, before buying or selling a home, for an insurance renewal"),
        li("Gutters, skylights and siding, if you sell them"),
        p("Every service page has the same parts: the job in your words, finished projects of that type pulled in automatically, customer questions, and the inspection request at the end."),
        h3("Metal, shingle and flat roof pages on a roofing contractor website"),
        p("Each roof system you install — asphalt shingle, standing seam or exposed-fastener metal, flat roofs in TPO, EPDM or modified bitumen — gets a page built from structured fields: the products and manufacturers you install, the warranty that comes with them, the colors you offer and a project list filtered to that material. Commercial work gets its own section and its own request form asking for building type, approximate roof size and access, so property managers are not sent through a homeowner’s form."),

        h2("Service-area and storm-area pages on roofing websites: real towns, real jobs"),
        p("Homeowners search for a roofer with a town name. Service-area pages come from one template plus a short entry per town: roofs you have done there, reviews from customers there, the building department that issues roofing permits, local details such as HOA rules. A town gets its own page when there is real work to show; one with nothing behind it stays a line in the coverage list."),
        p("Storm-area pages use the same template but are tied to a date. After a hailstorm the office opens a page for the affected area — the storm date, the zip codes, what a homeowner can check from the ground, a link to book an inspection — and later closes it or turns it into a normal area page with the roofs you replaced there. What the build never does is stamp out fifty copies of one text with the town name swapped."),

        h2("Roof inspection requests with photos, sent to JobNimbus, AccuLynx or your CRM"),
        p("The inspection request is the main form on a roofing website, and it is built in short steps that work on a phone: address, what happened (leak, storm, old roof, home sale), whether an insurance claim is open, a preferred time, and photos. Photos from the ground or the attic tell the office whether to send a repair tech or an estimator. Photos are resized on the phone before upload, so a request does not fail on a weak signal."),
        p("Requests go where your office already works. Roofing CRMs such as JobNimbus, AccuLynx and Roofr, and field-service software such as ServiceTitan, can take website leads through their own web forms, an integration or a connector like Zapier. Without a CRM, requests arrive by email with the photos attached. Each request carries the page and the search or ad it came from, so you see which pages bring replacements."),

        h2("Instant estimate and roof measurement tools on a roofing website"),
        p("Some homeowners want a number before they talk to anyone. Several roofing software products and measurement services offer instant estimate widgets: the visitor types an address, the tool measures the roof from aerial or satellite imagery and shows a price range for the materials you set up. Its limits:"),
        li("the range is only as good as the price per square you enter and keep up to date"),
        li("complex roofs, steep pitches and tree cover make measurements from imagery less reliable"),
        li("a third-party widget loads its own scripts, so it sits on the replacement page and loads on demand, not on every page"),
        li("every instant estimate still ends in an inspection request, because the final price depends on what the crew finds"),

        h2("Financing and insurance claim help pages on a roofing company website"),
        p("Many homeowners put off a new roof until they see a monthly figure. If you offer financing through a lending partner, the site gets a financing page with the terms your partner lets you publish and a link to its application, plus a short mention on every replacement page. The terms are stored in one place and edited once."),
        p("Storm work usually goes through the homeowner’s insurer. An insurance claim help page sets out what your company does at each step — the inspection, the photo report, meeting the adjuster, a supplement if items were missed — and what the homeowner should keep: the policy number, the claim number and photos taken right after the storm. It never promises what the insurer will pay. The inspection form asks for the claim stage, so the office sees whether it is a fresh storm or a claim in progress."),

        h2("Speed of a roofing website full of aerial and project photos"),
        p("Roofing websites carry heavy images: drone shots, close-ups of hail hits, galleries from every job. Uploaded straight off the camera, they make a page crawl on mobile data. Images are compressed and resized on upload, served in modern formats and loaded only as they scroll into view, so pages appear in under 2.5 seconds — the threshold Google uses for a good page load. The phone number and the inspection button load first, before photos, chat and review widgets."),
        p("Hosting includes SSL, daily backups and spam filtering. No monthly retainer; changes after launch are paid as work done."),

        h2("Roofing website builders, rented agency sites or a roofing website you own"),
        p("Roofing website builders — general builders, sites bundled with roofing software and template sites sold by marketing companies — put a page online fast for a monthly fee. Some roofing marketing agencies keep the site on their own account: when you leave, the site and sometimes the domain stay with them."),
        p("For a small crew in one town, a builder can be enough. The limits show as the company grows:"),
        li("no real way to add a page per service, roof system, town or storm area"),
                li("a request form that cannot pass leads to your CRM, or only on a higher plan"),
        li("a fee that continues for as long as the site exists"),
        p("A roofing website you own is paid for once, the code, content and domain are in your name, and it can move to any host or developer."),

        h2("How a roofing website is built, and how an old one is moved with redirects"),
        ol("Brief. You send the roof jobs and systems you sell, the towns you cover, your certifications, financing partner and CRM, and finished projects with photos."),
        ol("Structure. I propose the pages — services, roof systems, areas, storm, insurance, financing — and the path from each one to a call or an inspection request."),
        ol("Design and build. Pages are designed on a phone first, then built and filled with your content."),
        ol("Connections. The inspection form, CRM, call tracking, analytics and your Google Business Profile are connected and tested with real requests."),
        ol("Launch and hand-over. You get access to everything and a short guide to adding projects and opening storm-area pages."),
        p(
          "If you already have a website, every old address is mapped to its new one and redirected before launch, and structured data is carried over, so the old site’s Google positions are kept. The process is described on the ",
          link("website redesign", "/services/website-redesign-services"),
          " page.",
        ),

        h2("Best roofing company websites: what the best roofing websites have in common"),
        p("Lists of the best roofing websites judge the home page by its looks. From the build side, the sites that keep bringing inspections share a few plain decisions:"),
        li("a page for each job, roof system and town instead of one services page"),
        li("an inspection request that takes photos and goes straight into the CRM"),
        li("storm messages and storm-area pages the office controls itself"),
                li("financing and insurance questions answered on the site, not left for the phone"),
        
        h2("A roofing website that ChatGPT and Google AI Overviews can read"),
        p("Homeowners now ask ChatGPT, Perplexity or Google’s AI Overviews things like “how long does a metal roof last”, “does homeowners insurance cover hail damage” or “which roofers near me are certified by the shingle manufacturer”. An assistant can only use what it can read and check, so the build hands it clear facts:"),
        li("license number, insurance, manufacturer certifications and warranty terms written as text, not only inside badge images"),
        li("structured data for the business as a roofing contractor, for each service and for the areas it covers"),
        li("answers to cost, lifespan and repair-or-replace questions on the service pages, in plain sentences"),
        li("the same company name, address and phone as in your Google Business Profile and directories"),
        p(
          "Getting into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Ranking in Google search and on the map is covered on the ",
          link("roofing SEO", "/roofing-seo"),
          " page.",
        ),

        h2("How much roofing websites cost"),
        li("A simple roofing website — home, main services, service area, a few projects, inspection request: 700–1,400 €."),
        li("A roofing website with pages for each service, roof system and area, storm-area pages, financing and insurance claim pages, inspection requests linked to your CRM and local search optimization: from 2,000 €."),
        p(
          "Design is included in both. If your company also does siding, windows or remodeling, see the ",
          link("websites for contractors", "/website-for-contractors"),
          " page. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Roofing websites: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much do roofing company websites cost?", "700–1,400 € for a simple roofing website, from 2,000 € for a site with pages for each service, roof system and area, storm and insurance claim pages, inspection requests linked to your CRM and local search optimization. Design is included. After a short description of the company I give a fixed price."],
          ["How long does it take to build a roofing website?", "Usually three to five weeks from the brief. It goes fastest when started outside the storm season, when the office has time to send photos, certifications and project details."],
          ["What software do roofing companies use, and can the website connect to it?", "Many roofing companies run leads, estimates and jobs in a roofing CRM such as JobNimbus, AccuLynx or Roofr, or in field-service software such as ServiceTitan, often alongside a roof measurement service and a financing partner. The website sends requests to the CRM through its web form, an integration or a connector; without one, requests arrive by email with photos."],
          ["Can a roofing website give homeowners an instant roof estimate?", "Yes, through an instant estimate tool from a roofing software or measurement provider, which measures the roof from imagery and shows a price range. It works best on the replacement page, with your own prices kept current, and it should lead to an inspection request rather than replace it."],
          ["Do roofing companies’ websites still matter if we get leads from Angi, HomeAdvisor or Local Services Ads?", "Yes. Homeowners who find you on a lead platform or in Google Local Services Ads often open your site before they call back, because a roof is too large a purchase to choose blind. Your own site also brings requests you do not pay per lead for."],
          ["Our website belongs to a marketing company. Can we move to a site we own?", "Usually yes. Content and photos are moved, the domain is transferred to your name if it is not already, every old address is redirected and structured data is set up again, so the positions the old site had in Google are kept. What can be taken depends on your contract with that company."],
          ["Can our crew add finished roofs to the website from a phone?", "Yes. A new project is a short form in the admin panel: photos, roof system, the town and a few sentences. It appears on the matching service, material and area pages by itself."],
          ["Do you build roofing websites outside Poland?", "Yes. The work is done remotely, in English, Polish or Russian. The site is set up for your country: phone formats, units such as roofing squares, license details and the review platforms your customers use."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a website for your roofing company: what to send me"),
        p(
          "Send the company name, a link to your current website or Google profile, the roof jobs and systems you want more of, the towns you cover and the CRM you use. A few finished roofs with photos, and your financing partner if you have one, help me plan the pages. I will reply with a list of pages and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
