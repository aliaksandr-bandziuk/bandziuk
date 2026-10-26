// Landing page fixture: Handyman website design (EN), group
// «handyman-website-design». New page.
// Semantic core: ref/home-services.md, handyman group (US volumes): handyman
// website design 50 + handyman website designs 50 (H1, H2s, metaTitle) ·
// handyman website templates 90 + handyman website template 90 (templates H2,
// FAQ) · best handyman website 110 + handyman website examples 70 (patterns
// H2, no sites named) · website for handyman services 70, handyman services
// website 50, handyman service website 50 (intro, excerpt, body). Not
// targeted: «handyman website» 1,300 / «website for handyman» 1,300 —
// consumers and platforms (Neighborly, TaskRabbit, Jobber); «i am a handyman
// looking for work» 480, handyman apps 210 — job seekers.
// Intent: ref/intent-check-home-services.md — «handyman website» vs «handyman
// website design» 0 shared URLs, 0 shared domains → only the second is ours;
// SERP: handymanmarketingpros, sitebuilderreport, dribbble, behance, wix,
// reddit, pinterest, weblium, comradeweb → studios, builders, galleries.
// «handyman seo» vs «handyman website design» 0 shared URLs → SEO is one H2
// here (local SEO, «handyman near me»), not a separate topic.
// This page = a site for a one-person or small handyman business: job list
// with «from» prices, photo uploads in the request form, trust for in-home
// visits, service area and ZIP check, Jobber/Housecall Pro sites vs own site,
// patterns of good handyman sites, local SEO (one H2), AI-readable design.
// NOT on this page: plumbing, roofing, contractor and remodeling sites
// (/contractor-website-design — linked once); pressure washing
// (/pressure-washing-website-design); full SEO service
// (/services/local-seo-services — linked). Never reuses paragraphs from the
// trades pages.
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const handymanWebsiteDesignEn = {
  lang: "en",
  group: "handyman-website-design",
  slug: "handyman-website-design",
  title: "Handyman website design",
  heading: "Handyman Website Design",
  excerpt:
    "Handyman website design and build from one person: a list of small jobs with “from” prices, a request form where customers upload photos of the problem, a clear service area, and the trust a stranger needs before letting you into their home.",
  seo: {
    metaTitle: "Website Design for Handyman Businesses | Bandziuk",
    metaDescription:
      "Handyman website design for owner-operators and small teams: job list with “from” prices, photo uploads, service area, trust for home visits. Built from 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Made for owner-operators"],
  heroPhonePoints: ["Call · Text", "Send a photo of the job", "Prices from, per job", "Insured · Reviewed"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple handyman website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Handyman website with job pages and “from” prices, photo request form, service area pages and local SEO setup, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with handyman website design",
      items: [
        { _key: k("o"), iconName: "file-text", title: "A list of small jobs with “from” prices", text: "Shelves, faucets, doors, drywall patches, assembly" },
        { _key: k("o"), iconName: "image", title: "Photo uploads in every request", text: "You see the job before you quote or drive out" },
        { _key: k("o"), iconName: "shield-check", title: "Trust for a visit inside the home", text: "Your face, insurance, reviews and how a visit goes" },
        { _key: k("o"), iconName: "map-pin", title: "Service area written out, ZIP check in the form", text: "No calls from three counties away" },
        { _key: k("o"), iconName: "phone", title: "Call and text buttons on every screen", text: "Texting for customers who would rather not talk" },
        { _key: k("o"), iconName: "sparkles", title: "Jobs and prices that ChatGPT can read", text: "Plain text and structured data, not pictures" },
      ],
      prices: [
        { _key: k("r"), label: "Simple handyman website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Job pages, photo requests, service areas, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Websites for local service businesses I have designed and built",
      subtitle:
        "Four of these are Warsaw service businesses whose work comes from phone calls, Google Maps and clear service pages: a renovation and property-investment company, an auto repair shop, a wheel-renovation workshop and a tyre-storage business. The fifth is a rebuild for a 3D laser scanning company. A handyman website runs on the same things — a short path to a call, prices people can see, and photos of real work.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your handyman website design",
      subtitle: "I reply within one business day with a proposed job list layout, a request form with photo upload, and a fixed price.",
      contextLabel: "Business name, Google profile or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where do most of your jobs come from now?", options: ["Calls and texts from Google", "Thumbtack, Angi or Nextdoor", "Referrals", "A Jobber or Housecall Pro booking link"] },
        { _key: k("z"), question: "Who does the jobs?", options: ["Just me", "Me and a helper", "A small team"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Handyman website design is what I do for owner-operators and small handyman teams: I plan the site, design it and build it myself, so one person answers for all of it at one price. A handyman services website has a specific job. It has to sell many small tasks at once, tell a stranger what a visit will roughly cost, and collect enough detail that you can say yes, no or “send me a photo” without a twenty-minute phone call."),

        h2("Handyman website design for a one-person business"),
        p("When the business is you and a truck, nobody sits by the phone. You are on a ladder, under a sink or driving between jobs, and every call you miss goes to the next number on the list. The website covers the hours you cannot:"),
        li("it answers the questions you hear ten times a week — do you hang TVs, do you do small jobs, what is the minimum"),
        li("it turns a vague “I need some things fixed” into a request with a job type, an address and photos"),
        li("it offers a text button next to the call button, so a customer can write while you are working and you reply at lunch"),
        li("it shows one face, yours, because people hire a handyman as a person, not as a brand"),
        p("A small team needs the same base, plus a line on who comes to the door and how jobs are assigned."),

        h2("A handyman job list with “from” prices"),
        p("The page most visitors open first is the list of jobs. A handyman sells dozens of tasks that customers do not group the way you do, so the list is written in their words and sorted by room or by problem:"),
        li("mounting and hanging: TVs, shelves, curtain rods, mirrors, pictures"),
        li("doors and windows: sticking doors, new locks and handles, screens, weatherstripping"),
        li("plumbing fixes within your license: faucets, toilet parts, caulking around tubs"),
        li("walls and ceilings: drywall patches, touch-up painting, ceiling fans where allowed"),
        li("assembly and odd jobs: furniture, grab bars, baby-proofing, small repairs before a sale"),
        h3("How to write “from” prices on a handyman website"),
        p("A starting price next to each job saves both sides time. It filters out the person who expected a two-hour job to cost the price of a coffee and tells everyone else that you are not going to surprise them. The design gives each price a short note on what is included and what raises it: height, wall type, parts you bring. If you charge a minimum visit or a trip fee, it is written once, near the top, in the same size as everything else. Hourly pricing works as well; the page then shows the rate and a typical time for common jobs."),

        h2("Photo uploads in a handyman request form"),
        p("Most handyman jobs can be priced, or at least sorted, from two or three photos. The request form is built around that:"),
        ol("The customer picks a job type from your list, or “several small jobs”."),
        ol("They enter a ZIP code; the form says at once whether you cover it."),
        ol("They add photos from the phone camera — the form shrinks them so the upload does not fail on mobile data."),
        ol("They describe the job in a sentence and pick two or three possible days."),
        p("The request arrives by email and as a text, or goes straight into Jobber or Housecall Pro if you use one. You see the cracked tile or the bent track before you call back, and you can quote, ask for one more angle or decline in a minute. Photos of a home’s interior are personal, so the form says what happens to them, and they are kept only as long as you need them for the job."),

        h2("Trust signals for a handyman who works inside customers’ homes"),
        p("A handyman is usually a stranger who comes into the house, often while one person is home alone. Before they book, customers look for reasons to feel safe. The design puts those reasons next to the buttons, not on a page nobody opens:"),
        li("your photo and first name, and the same for anyone else who might come"),
        li("liability insurance, and a license where your state or city requires one for the work you do — stated as text so it can be checked"),
        li("a background check, if you have done one, with who ran it"),
        li("reviews that name the job and the neighborhood, pulled from your Google profile"),
        li("a short “what a visit looks like” section: you call when you are on the way, wear shoe covers, clean up, and take payment by card or app"),
        p("Licensing rules for handyman work differ widely between states and countries, so the wording follows what applies to you and nothing more. A badge you do not hold costs more trust than it earns."),

        h2("Handyman service area on the website and a ZIP code check"),
        p("Most handymen work from home and drive to customers, so the service area is the address. It is shown in two ways: a simple map for people who think visually, and a list of towns and ZIP codes as text for everyone else and for search engines. The request form checks the ZIP code before the customer writes anything, so people outside your area are told politely, before they spend five minutes describing the job. If you go further for a higher trip fee, the form says so instead of refusing."),

        h2("Handyman website templates, Jobber and Housecall Pro sites, or your own website"),
        p("Field-service tools such as Jobber and Housecall Pro offer a website as part of the subscription, and site builders sell handyman website templates. For someone starting out, either is a fair choice: it is online in a weekend and the booking link works."),
        p("The limits show up as the business grows:"),
        li("one page for all jobs, so nobody finds you for “TV mounting” or “drywall repair” in your town"),
        li("little control over titles, page addresses and structured data"),
        li("a site that lives on the platform, so if you cancel the subscription it disappears"),
        li("templates built for demo photos, not for a long list of jobs with prices"),
        p("An own site does not mean dropping the tools. Your Jobber or Housecall Pro request and booking forms can sit inside it, styled to match, while the pages, the domain and the content belong to you."),

        h2("What the best handyman websites have in common"),
        p("Searches for the best handyman website and for handyman website examples turn up galleries of polished screens. The ones that bring jobs share a few plain habits rather than a look:"),
        li("the first screen says what you do and where, with a phone number and a text button"),
        li("real photos — you, your truck, finished jobs — and no stock carpenter with a perfect smile"),
        li("a job list with prices or ranges, not a paragraph about quality and passion"),
        li("a service area stated in towns, not “and surrounding areas”"),
        li("reviews close to the buttons, with dates"),
        p("Color, fonts and logo come after that. On a phone, the site is judged in a few seconds on whether the customer’s job is on the list and how to reach you."),

        h2("Local SEO for a handyman website: being found for “handyman near me”"),
        p("People rarely search for a handyman by name. They type “handyman near me”, or the job itself — “TV mounting”, “fix sticking door” — and choose from the map. A handyman usually has no storefront, so the Google Business Profile is set up as a service-area business: home address hidden, towns listed, the Handyman category and the same job list as on the website. The site supports it with a page for each main type of job, consistent name, phone and area across directories, and reviews that mention the work."),
        p(
          "Town pages are added only for places you really drive to, each with jobs done there. The setup is part of the full site; ongoing work on the map and search results is described on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("A handyman website that ChatGPT and Google AI Overviews can read"),
        p("Some customers now ask ChatGPT, Perplexity or Google’s AI Overviews who can fix a door or hang a heavy mirror nearby. These assistants recommend businesses they can read about. A site that shows its jobs, prices, service area and insurance as images or inside a booking widget gives them nothing; the same facts written as text, with structured data describing the business and its services, can be read and quoted."),
        p(
          "Being recommended there is a separate, ongoing job; see ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          ".",
        ),

        h2("How a handyman website design project runs"),
        ol("Brief. You send your job list, rough prices, the towns you cover, insurance details, reviews and a few photos of you, your truck and finished work. A voice message is fine."),
        ol("Phone layouts. I design the first screen, the job list and the request form on a phone and agree them with you."),
        ol("Build. The site is built fast and editable: you change prices and add jobs yourself."),
        ol("Launch. Form, texts, analytics and your Google profile are connected; you get a short guide."),
        p(
          "How I build sites in general is on the ",
          link("website development", "/services/website-development"),
          " page. If you also take on remodeling and larger projects, see ",
          link("contractor website design", "/contractor-website-design"),
          ".",
        ),

        h2("How much handyman website design costs"),
        p("You pay one price for design and build together."),
        li("A simple handyman website — home page, job list with prices, about, service area, request form: 700–1,400 €."),
        li("A handyman website with a page for each main job, photo request form connected to your tools, service area pages and local SEO setup: from 2,000 €."),
        p(
          "After launch you pay for hosting and the domain, and me only for changes you ask for. Full ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Handyman website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does handyman website design cost?", "Design is included in the build: 700–1,400 € for a simple handyman website, from 2,000 € for a site with job pages, a photo request form, service area pages and local SEO setup. After a short description of your business I give a fixed price."],
          ["Can I just use the website that comes with Jobber or Housecall Pro?", "Yes, especially at the start. Once you want to be found for separate jobs in your town, or want a site that stays yours if you change software, an own site with your booking form embedded works better."],
          ["Should a handyman show prices if every job is different?", "Starting prices work well: “from” plus a note on what changes the price. They cut calls from people who expected much less and make everyone else more willing to send a request."],
          ["Where do the photos from the request form go?", "To your email and phone, or into Jobber or Housecall Pro if you use one. You see the job before calling back, so you can quote, ask a question or decline quickly."],
          ["Are handyman website templates good enough?", "For a first site, often yes. Templates struggle with a long job list with prices, a ZIP check and per-job pages, and moving off one later usually means starting again."],
          ["Will the website help me show up for “handyman near me”?", "The site is built for it: job pages, service area, consistent details and structured data. Results on the map also depend on your Google profile and reviews, which I can set up and keep working on."],
          ["Do you work with handyman businesses in the US and other countries?", "Yes. I work remotely from Poland in English; my afternoon and evening in Central European Time overlap with the US morning, so calls are easy to schedule. Invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order handyman website design: what to send me"),
        p(
          "Send your business name, a link to your Google profile or current site, the jobs you take and your rough starting prices, the towns you cover and how you prefer customers to reach you — call, text or form. A few phone photos of you, your truck and finished jobs help me show a first screen that looks like your business. I will reply with a proposed layout and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
