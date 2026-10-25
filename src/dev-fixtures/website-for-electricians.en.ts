// Landing page fixture: Website for electricians — development (EN), group «trades».
// Semantic core: ref/trades.csv, group «electrical»: electrician websites 390,
// website for electricians 320, electrical company website 140 (H2 for
// electrical contracting companies with commercial work), electrician website
// builder 20 (H2 builder vs custom).
// Intent: ref/intent-check-trades.md — «electrician website» SERP is agencies
// and builders (webmarketers.ca, cyberoptik.net, workiz.com, flashcrafter.ai)
// → demand from owners who want a site; «electrician website» vs «electrician
// website design» 0 shared URLs → design is a separate page.
// Not here: how the site looks, trust layout, templates and examples
// (/electrician-website-design); ranking in Google and the map
// (/seo-for-electricians); other trades (/website-for-contractors).
// Owner's rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const websiteForElectriciansEn = {
  lang: "en",
  group: "website-for-electricians",
  slug: "website-for-electricians",
  title: "Website for electricians",
  heading: "Websites for Electricians",
  excerpt:
    "I build websites for electricians and electrical contractors: a page for each job from EV chargers to panel upgrades, service-area pages, a request form that takes panel photos and sends jobs to your field-service software, on a fast site you own.",
  seo: {
    metaTitle: "Electrician Websites That Bring Service Calls | Bandziuk",
    metaDescription:
      "Websites for electricians: a page per job and area, a request form with panel photos linked to ServiceTitan or Jobber, a site you own. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Built around service calls", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["24/7 emergency line", "EV charger installs", "Send a panel photo", "License # shown"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple electrician website", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Electrician website with job and service-area pages, commercial projects, request form linked to your tools and local SEO", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with a website for your electrical business",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for every electrical job", text: "Panels, EV chargers, generators, rewiring, lighting" },
        { _key: k("o"), iconName: "map-pin", title: "Pages for the towns you cover", text: "Each with jobs your crews have done there" },
        { _key: k("o"), iconName: "file-text", title: "A request form that takes panel photos", text: "So the estimate starts before the visit" },
        { _key: k("o"), iconName: "plug", title: "Requests into ServiceTitan, Jobber or Housecall Pro", text: "Or into email — nobody retypes a job" },
        { _key: k("o"), iconName: "gauge", title: "Fast on a phone in a basement", text: "Pages in under 2.5 s on a weak signal" },
        { _key: k("o"), iconName: "shield-check", title: "Your code, content and domain", text: "No platform fee, no lock-in" },
      ],
      prices: [
        { _key: k("r"), label: "Simple electrician website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Jobs, areas, commercial projects, linked form, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Website development portfolio: local service sites I have built",
      subtitle:
        "Websites I have built for service businesses whose customers call, book or send a request — the same structure an electrician needs: pages for each service and area, a request form linked to your tools, fast pages on a phone.",
      picks: [
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your electrician website",
      subtitle: "I reply within one business day with a page plan for your jobs and areas, and a fixed price.",
      contextLabel: "Business name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "A builder or platform site", "An old custom site"] },
        { _key: k("z"), question: "Which software runs your jobs?", options: ["ServiceTitan", "Jobber", "Housecall Pro", "Other or none"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I build websites for electricians and electrical contractors, from the page plan to launch, and hand over a site that belongs to you. An electrician’s website has a narrow job: turn a search for a specific piece of work — a charger, a panel, a dead circuit — into a call or a request your office can schedule without phoning the customer back three times."),

        h2("What electrician websites need: a structure built around jobs and calls"),
        p("A typical electrician site is a home page, a list of services and a contact form. It exists, but it cannot be found for “EV charger installation” in your town, and it gives the office nothing to work with. The structure I build has:"),
        li("one page for each job you want more of, each with its own request button"),
        li("one page for each town or county you serve"),
        li("a separate emergency page with the on-call number"),
        li("a commercial section, if you do commercial work"),
        li("license, insurance and service area stored once and shown on every page"),
        li("a careers page, if you are hiring apprentices or journeymen"),

        h2("Service pages on a website for electricians: one page per job"),
        p("The jobs electricians are asked for change with what people buy. An electric car brings an EV charger install and often a panel or service upgrade. A heat pump, a hot tub or a workshop brings a new circuit. Storm season brings standby generators and transfer switches. Older houses bring rewiring and inspections for buyers. Each of these gets a page built from the same template: what the job includes, what decides the price, whether a permit is needed, how long it takes and what you need from the customer."),
        p("The template is set up in the admin panel, so your office can add a new service page — smart home wiring, lighting design, surge protection — by filling in fields, without a developer."),

        h2("Service-area pages for the towns and counties an electrician covers"),
        p("An electrician’s map position is limited by distance, but the website can rank in each town you work in. Every area page lists the jobs done there, the response time for emergencies, the local permit office or utility where it matters and reviews from that town. The pages pull recent jobs automatically, so they stay current without anyone rewriting them. Pages that only swap the town name are not built — Google filters them out."),

        h2("Request forms with panel photos, linked to ServiceTitan, Jobber or Housecall Pro"),
        p("Half of an electrical estimate can be done from photos. The form asks, step by step, for:"),
        li("the type of job and the address"),
        li("a photo of the main panel with the door open, and of the label"),
        li("for a charger: the car, where it will park and the distance to the panel"),
        li("how soon the work is needed"),
        p("Requests then go where your office already works. ServiceTitan, Jobber and Housecall Pro each offer online booking or request forms that can be placed on the site; where an API connection is possible, the website form sends the job straight into the tool. Otherwise the request arrives by email with the photos attached. Calls from the site are tracked on their own number, apart from calls from the Google profile."),

        h2("Emergency electrician call button and after-hours routing"),
        p("The emergency call button on every page dials the on-call phone, not the office line that goes to voicemail at five. After hours, the request form can send a text to whoever is on call, and the page says what happens next: who calls back, how fast and what the after-hours fee is. If you do not take night calls, the site says so clearly and offers a morning slot instead."),

        h2("Electrical company website: commercial projects, capabilities and hiring"),
        p("An electrical contracting company with commercial work sells to general contractors, developers and facility managers. They check a website after they hear your name, and they look for different things than a homeowner:"),
        li("project pages by sector — retail fit-outs, offices, multifamily, light industrial — with the scope your crews handled"),
        li("capabilities: design-build, service work, low voltage, lighting retrofits, maintenance contracts"),
        li("license classes, insurance and safety practices, with documents available on request"),
        li("a contact path for bids that is separate from the residential request form"),
        p("A careers page with open positions for apprentices and journeymen, the license levels you hire for and a short application form sits in the same section. Electrical companies compete for licensed staff as well as for contracts, and a candidate checks the website just as a general contractor does."),

        h2("Electrician website builder or a custom-built website"),
        p("An electrician website builder — Wix, Squarespace, an AI site generator or the website that comes with your field-service software — gets a page live quickly, paid monthly. For a one-person shop that works one town and lives on referrals, that is enough to be found by name."),
        p("The limits show when you want more work from search:"),
        li("templates with one services page, not a page per job and per town"),
        li("forms that cannot take photos or send them to your scheduling tool"),
        li("slow pages once you add job photos"),
        li("a site that stays on the platform when you leave it, and a fee for as long as it exists"),
        p("A custom-built site is paid once, follows the way your shop sells and schedules, and the code, content and domain are yours."),

        h2("Speed, hosting and ownership of an electrician website"),
        p("Your customers often open the site on a phone in a dark basement next to the panel, on a weak signal. Pages are built to load in under 2.5 seconds — Google’s threshold for a good page — by compressing photos on upload, serving them in modern formats and loading them only when needed."),
        p("Hosting is fast, with SSL, daily backups and spam filtering on forms. The domain is registered in your name, and you get admin access from day one. No retainer is required; later changes are billed per task."),

        h2("An electrician website that ChatGPT and Google AI Overviews can read"),
        p("People now ask ChatGPT or Google’s AI Overviews whether a charger needs a permit, why breakers trip and which electrician nearby does panel upgrades. An assistant only names a business it can verify, so the build puts these facts where machines find them:"),
        li("services, areas, license number and insurance as text, not inside images"),
        li("structured data for the electrician business, each service and each area"),
        li("short answers to cost, permit and safety questions on every job page"),
        li("the same name, address and phone as in the Google profile and directories"),
        p(
          "Getting into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Ranking in Google and the map for your jobs is covered on the ",
          link("SEO for electricians", "/seo-for-electricians"),
          " page.",
        ),

        h2("Building an electrician website: steps from page plan to launch"),
        ol("Your input: the jobs worth most to you, your towns, license and insurance details, the field-service software and a handful of finished jobs with photos."),
        ol("I propose the page plan and where each request goes, and we agree it."),
        ol("The design is prepared and approved."),
        ol("The site is built, the form is connected to your tools and the content is filled in."),
        ol("At launch, analytics, call tracking, structured data and the link to your Google profile are set up, and the office gets a short guide to adding jobs."),
        p(
          "Layout, trust signals and the path from a page to a phone call are on the ",
          link("electrician website design", "/electrician-website-design"),
          " page. If you are replacing an existing site, old addresses are redirected so its Google positions are kept — see ",
          link("website redesign", "/services/website-redesign-services"),
          ".",
        ),

        h2("How much a website for electricians costs"),
        li("A simple electrician website — home, main jobs, service area, emergency page, request form: 700–1,400 €."),
        li("A website with a page for each job and area, commercial projects, a request form linked to your field-service software and local search optimization: from 2,000 €."),
        p(
          "Design is included in both. Websites for other trades are on the ",
          link("websites for contractors", "/website-for-contractors"),
          " page; full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Websites for electricians: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a website for electricians cost?", "700–1,400 € for a simple site, from 2,000 € for a site with a page for each job and area, commercial projects, a request form linked to your tools and local search optimization. Design is included. After a short description of your business I give a fixed price."],
          ["How long does it take to build an electrician website?", "Usually three to five weeks from the page plan, depending on the number of jobs and areas and on how quickly photos and license details are ready."],
          ["Can the website send requests to ServiceTitan, Jobber or Housecall Pro?", "Yes. Each of them offers online booking or request forms that can be placed on the site, and some allow a direct connection. If not, requests arrive by email with all details and photos."],
          ["Is an electrician website builder enough for a small shop?", "For one electrician working one town on referrals, it can be. Once you want more work from search, more jobs or more towns, a builder’s single services page and platform fee start to cost more than they save."],
          ["Can our office add jobs and photos without a developer?", "Yes. From a phone or the office computer, a finished job is entered as photos, job type, town and a few sentences, and it then shows up on the matching service and area pages."],
          ["Will a new website lose the Google rankings of our current one?", "Not if the move is done properly: each old URL gets a redirect to its replacement, and structured data moves with the content before launch."],
          ["Do you build websites for electricians outside Poland?", "Yes. I work remotely with electricians in the US, Canada, the UK and Australia, in English, Polish or Russian. Phone formats, license details and review platforms are set up for your country."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an electrician website: what to send me"),
        p(
          "Send the business name, a link to the current site or Google profile, the jobs you want more of, the towns you cover and the software your office uses. A few recent jobs with photos help me plan the pages. I will reply with a page plan and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
