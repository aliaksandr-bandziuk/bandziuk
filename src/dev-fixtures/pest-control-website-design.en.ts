// Landing page fixture: Pest control website design (EN), group
// «pest-control-website-design». New page.
// Semantic core: ref/home-services.md, pest control group (US): pest control
// website design 110 (H1, metaTitle, H2s) · website design for pest control 90
// (H2, intro) · pest control landing page 70 (own H2) · best pest control
// websites 20 (templates H2). Consumer phrase «pest control services» 90,500 is
// not targeted.
// Intent: ref/intent-check-home-services.md — «pest control website design» vs
// «pest control seo» 0 of 10 shared URLs → separate page from
// /pest-control-seo (sibling). Design SERP: sitesthatgetcalls, Jobber,
// Pinterest, MotoCMS, Etsy templates, Dribbble, studios → templates and
// field-service builders are the alternative the visitor weighs.
// This page = what a visitor sees and does on a pest control company’s site:
// three visitors (one-time call, plan buyer, commercial manager), first screen,
// pest finder with photo upload, plan pages designed like subscriptions,
// booking / sign-up / customer portal from routing software (FieldRoutes,
// PestPac, GorillaDesk — general, «what your account supports»), trust signals
// beside buttons, technician and truck photos, discreet bed bug service, ad
// landing pages, commercial section, templates vs custom, AI-readable design.
// NOT on this page: pest keywords, ranking pest and area pages, Google Business
// Profile, seasonality, licensing wording rules, LSA vs SEO (/pest-control-seo
// — sibling); map work (/services/local-seo-services); lawn care sites
// (/landscaping-website-design — neighbour, linked once).
// Owner’s rules: every page covers AI search; never say there are no clients
// from the visitor’s industry; design is sold with the build.
import { p, h2, li, ol, link, k } from "./pt";

export const pestControlWebsiteDesignEn = {
  lang: "en",
  group: "pest-control-website-design",
  slug: "pest-control-website-design",
  title: "Pest control website design",
  heading: "Pest Control Website Design",
  excerpt:
    "I design and build websites for pest control companies: a call button and a pest finder on the first screen, plan pages that sell recurring service, license and re-entry facts beside every button and photos of your own technicians — design and build at one price.",
  seo: {
    metaTitle: "Website Design for Pest Control Companies | Bandziuk",
    metaDescription:
      "Pest control website design: pest finder, quarterly plan pages, online booking, license and safety facts, landing pages for ads. Design + build from 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["What pest do you have?", "Quarterly plan · sign up", "Licensed technicians", "Call · Book online"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple pest control website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Pest control website with pest finder, pest and plan pages, online sign-up, commercial section, ad landing page layout and local SEO, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with pest control website design",
      items: [
        { _key: k("o"), iconName: "message-circle", title: "A pest finder on the first screen", text: "Ants, termites, bed bugs, rodents — one tap each" },
        { _key: k("o"), iconName: "file-text", title: "Plan pages laid out like subscriptions", text: "What is covered, re-service, price if you publish it" },
        { _key: k("o"), iconName: "shield-check", title: "License, products and re-entry times as text", text: "Beside the buttons, not in the footer" },
        { _key: k("o"), iconName: "image", title: "Your technicians and trucks, not hazmat stock", text: "A simple shot list for your crew" },
        { _key: k("o"), iconName: "plug", title: "Booking and sign-up from your software", text: "FieldRoutes, PestPac, GorillaDesk or similar" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Pests, plans and areas written as page text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple pest control website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Pest finder, plans, sign-up, commercial section, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Websites for local service firms I have designed and built",
      subtitle:
        "A Warsaw auto repair shop, a wheel-renovation workshop and a tyre-storage business are local firms that live on calls, Google Maps and clear service pages; I designed or rebuilt their sites around that, and the tyre-storage owner edits his SEO texts himself. Next to them: a premium-design site for a Warsaw firm doing renovations and property investment, and a WordPress rebuild for ScanM2, a 3D laser scanning company, that turned two years without leads into leads every week. A pest control site uses the same building blocks: a page per service, a visible way to call or book, and photos of jobs the crew really did.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your pest control website design",
      subtitle: "I reply within one business day with a list of pages for your company and a fixed price.",
      contextLabel: "Company name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Who are most of your customers?", options: ["Homeowners on recurring plans", "One-time residential calls", "Restaurants and commercial accounts", "A mix of all three"] },
        { _key: k("z"), question: "What runs your schedule and routes?", options: ["FieldRoutes or PestPac", "GorillaDesk, Jobber or similar", "Spreadsheets and paper", "Something else"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design websites for pest control companies and write the code myself, so you deal with one person and one price for both. Pest control website design decides what a visitor sees and does in the first minute: name the pest, decide whether to trust you, then call, book or sign up for a plan. Most visitors arrive on a phone, some still holding a flashlight over whatever they found under the sink."),

        h2("Pest control website design for three visitors: the one-time call, the plan buyer and the commercial manager"),
        p("Three kinds of people open a pest control site, and the design gives each a path without making the others wait:"),
        li("the one-time caller has wasps by the door or a mouse in the kitchen and needs your number, the pest, the area and how soon you come"),
        li("the plan buyer compares quarterly service between two or three companies and reads what is covered, what it costs and how to cancel"),
        li("the commercial manager runs a restaurant, a warehouse or apartment buildings and looks for service reports, insurance and someone to arrange a site survey"),
        p("The home page shows three doors at once — call now, see plans, commercial service — and each looks different, so nobody ends up in the wrong form."),

        h2("Website design for pest control: the first screen on a phone"),
        p("The first screen carries five things and nothing more:"),
        li("what you do and where: “Pest control in [county] — homes and businesses”"),
        li("a call button and a second button to book or request a quote"),
        li("the pest finder, as one row of icons"),
        li("one line of proof: licensed, review score, years in the area"),
        li("a photo of one of your technicians at work"),
        p("Slogans about a pest-free life and full-screen video of someone spraying a baseboard move down the page or go. On every page the call and booking buttons stay fixed at the bottom of the phone screen."),

        h2("A pest finder with photo upload on a pest control website"),
        p("Many callers do not know what they have: “little black bugs” could be ants, carpet beetles or young cockroaches. A pest finder — simple drawings of ants, cockroaches, termites, bed bugs, rodents, wasps and mosquitoes, with “Not sure?” at the end — takes the visitor straight to the right page. “Not sure?” opens a short form with a photo upload, so the office can name the pest before quoting."),
        p("The drawings are clean line icons in your brand color, not close-up photos of insects next to your logo. Real pest photos belong further down the pest pages, sized small, where a visitor compares them with what they found."),

        h2("Designing recurring plan pages for a pest control company"),
        p("A recurring plan is sold like a subscription, and its page is designed like one. If you sell two or three levels — an exterior plan, a plan with interior visits, a plan with mosquito or termite cover — they sit side by side as cards that still read well on a phone:"),
        li("the plan name and what it protects against"),
        li("how often the technician comes and what the first visit includes"),
        li("re-service between visits, worded as a promise you keep"),
        li("a monthly or per-visit price if it is public, or a “from” price"),
        li("one button per plan: sign up, or ask a question"),
        p("Below the cards come the questions people ask before committing: contract length, cancellation, whether someone must be home, what happens when it rains on service day."),

        h2("Online booking, plan sign-up and a customer portal in pest control website design"),
        p("Routing software such as FieldRoutes, PestPac or GorillaDesk usually offers a booking form, an online sign-up or a customer portal for bills and service history. Each one helps only if visitors see it at the right moment, so the layout places it:"),
        li("as the second button in the fixed bar on phones"),
        li("at the end of every plan page and every residential pest page"),
        li("as “Customer login” and “Pay your bill” links in the header, for people already on a plan"),
        p("The embedded form gets your colors and fonts wherever the tool lets it. Whether your account supports embeds, an API or only a hosted page, I check before quoting."),

        h2("Trust signals on a pest control website: license, products, pets and children"),
        p("A technician sprays inside the house where children play and the dog sleeps. Visitors look for reasons to let you in, and the design puts those reasons next to the booking buttons:"),
        li("the license number and the agency that issued it, in text"),
        li("one short line on re-entry times and pets, linked to a fuller safety page"),
        li("the guarantee in plain words — free re-service between visits, or what your termite warranty covers"),
        li("your star rating and a couple of fresh reviews that mention the pest"),
        li("association memberships, only those you really hold"),

        h2("Technician and truck photos instead of hazmat stock images on a pest control website"),
        p("Stock photos of a masked figure in a hazmat suit frighten people and say nothing about you. Your technician in uniform at a front door, a truck with your logo, a bait station placed neatly by a foundation, a sealed gap under a garage door — these show a careful company the neighbors would not mind seeing. Phone photos work if they are taken in daylight; I send your team a short shot list."),
        p("Some customers, bed bug customers above all, prefer that nobody sees a pest control truck outside. If you send unmarked vehicles, the bed bug page says so right beside its button."),

        h2("Pest control landing pages for Local Services Ads and Google Ads campaigns"),
        p("Paid clicks that land on the home page waste part of the budget. A pest control landing page is built for one pest and one offer — “Bed bug inspection this week” or “First quarterly visit” — with the same words as the ad, the call button, a three-field form, three reviews that mention that pest and no menu that leads away. The layout is part of the site, so your office can copy it for each new campaign without a designer."),

        h2("Commercial pest control pages: service reports, audits and site survey requests"),
        p("Commercial buyers rarely book online. They want proof that you understand inspections and paperwork, then a conversation. The commercial section gets its own menu entry and a calmer look: facility types with a photo each — restaurants, food plants, warehouses, multi-unit housing, offices — a sample service report to download, and a request form that asks for the facility type, its size and the inspection or audit being prepared for. Those requests go to whoever sells commercial contracts, not into the residential booking queue."),

        h2("Best pest control websites: templates, builder sites or a custom design"),
        p("Searches for the best pest control websites lead to template stores, Dribbble shots and sites made with field service software builders. A template or builder site is a fair start for a one-truck operator: a few pages, a call button, a form. The gaps appear as the company grows — no room for a pest finder, plan cards squeezed into a sidebar, one page for every pest, booking that opens on someone else’s domain. A custom design pays off when recurring plans carry the business, when you sell commercial contracts or when paid ads land on the site."),

        h2("A pest control website that ChatGPT and Google AI Overviews can read"),
        p("Customers ask ChatGPT, Perplexity or Google’s AI Overviews which local company treats termites or whether a quarterly plan is worth paying for. Assistants read text, not icons. A design that keeps the license inside a badge image, plan contents inside a graphic and service areas on a map picture hides them; the same facts as page text, with structured data for the business, its services and its areas, can be quoted."),
        p(
          "Being named in those answers takes ongoing work — see ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          ". Ranking in Google and on the map is the subject of the ",
          link("pest control SEO", "/pest-control-seo"),
          " and ",
          link("local SEO services", "/services/local-seo-services"),
          " pages.",
        ),

        h2("Pest control website design process and price"),
        ol("Brief. Your pests and services, plans and prices, towns, license details, reviews and photos of the team and trucks."),
        ol("Phone layouts. The first screen, one pest page and one plan page are drawn at phone size first, and we settle them before anything else."),
        ol("The other pages. The commercial section, the landing page layout and the desktop versions are put together from the same parts."),
        ol("Launch. The site goes live fast and editable by your office, with calls, booking and plan sign-up wired in."),
        p("Design is part of the build, and one price covers both: a simple pest control website costs 700–1,400 €; a site with a pest finder, pest and plan pages, online sign-up, a commercial section, the landing page layout and local search setup costs from 2,000 €."),
        p(
          "Full ranges are on the ",
          link("pricing", "/pricing"),
          " page and my general approach on the ",
          link("website development", "/services/website-development"),
          " page. Companies that also run lawn care crews will find more on the ",
          link("landscaping website design", "/landscaping-website-design"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pest control website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does pest control website design cost?", "One price covers design and build: 700–1,400 € for a simple site; from 2,000 € once it has a pest finder, pest and plan pages, online sign-up, a commercial section and local search setup. Tell me your pests, plans and towns and you get a fixed quote."],
          ["How long does a pest control website take from brief to launch?", "The phone-size first screen, pest page and plan page usually take one to two weeks after I receive the brief; the finished site three to five weeks. The pace depends mostly on how fast photos and service details arrive."],
          ["Can the booking or sign-up form from FieldRoutes or PestPac go on the new site?", "Usually yes, as an embedded form, through an API or as a styled link to the hosted page, depending on what your account allows. I check that before the quote, so the price does not change later."],
          ["Should a pest control website show photos of bugs?", "On the pest pages, yes, small and lower down, so visitors can compare them with what they found. The home page works better with simple pest icons and photos of your technicians, which build trust rather than disgust."],
          ["Can I start with a pest control website template?", "Yes, if you run one or two trucks and mostly one-time jobs. A template becomes a limit once recurring plans, commercial contracts or paid ads matter, and moving off it later usually means designing from the beginning."],
          ["Can you rebuild our pest control site without losing the rankings it has?", "Yes. Before launch I list every address the old site has, old pest and town pages included, and point each one to its new page with a permanent redirect. After launch I watch Search Console for errors for several weeks."],
          ["Do you design websites for US pest control companies from Poland?", "Yes. Design and development are remote and in English. My afternoon and evening in Central European Time overlap with the US morning and midday, so design reviews fit East Coast and Central hours. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order pest control website design: what to send me"),
        p(
          "Tell me your company name and link your current site or Google profile. Add the pests you treat, your plans and whether prices are public, the towns on your routes and the software you schedule with. Photos of technicians and trucks, if you have them, show me what the first screen can be built around. You get a page list and a fixed price back. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
