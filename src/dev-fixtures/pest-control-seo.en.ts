// Landing page fixture: Pest control SEO (EN), group «pest-control-seo». New page.
// Semantic core: ref/home-services.md, pest control group (US): pest control
// seo 720, seo for pest control 720, seo pest control 720 (one demand — H1,
// metaTitle, several H2) · pest control seo company 260 (provider part of the
// LSA H2, FAQ) · seo for pest control companies 210, seo for pest control
// company 210 (H1, H2) · local seo for pest control 140, local seo for pest
// control companies 30 (local H2) · pest control seo services 110 (cost H2) ·
// pest control marketing 320, pest control marketing companies 140 (channels
// H2, agencies paragraph) · pest control seo expert / agency 20 each (FAQ).
// PAA: «How much will it cost for pest control?» (cost-page H2) · «Is $70 a
// month good for pest control?» (plan H2, as a search customers make).
// Intent: ref/intent-check-home-services.md — «pest control seo» vs «pest
// control website design» 0 of 10 shared URLs, 0 shared domains → SEO and
// design are separate pages; SEO SERP = niche pest control SEO agencies,
// Reddit, Blue Corona, Helium SEO. The searcher is the owner of a local pest
// control company (1–30 people, trucks, routes).
// Angles: pest pages (termites incl. WDI inspections for home sales, bed bugs,
// rodents and exclusion, mosquito and tick programs), recurring plans as the
// client’s product, commercial accounts and audit paperwork, cost pages,
// Google Business Profile and service areas, seasonality, licensing and
// pesticide-label wording (general), LSA / lead platforms / national brands,
// routing software as the lead-source record (PestPac, FieldRoutes,
// GorillaDesk), AI answers.
// NOT on this page: design and build of the site, pest finder, plan tables,
// landing pages for ads (/pest-control-website-design — sibling); map work in
// depth (/services/local-seo-services); lawn care and landscaping
// (/landscaping-seo — neighbour, linked once); running ads.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed rankings.
import { p, h2, h3, li, link, k } from "./pt";

export const pestControlSeoEn = {
  lang: "en",
  group: "pest-control-seo",
  slug: "pest-control-seo",
  title: "Pest control SEO",
  heading: "SEO for Pest Control Companies",
  excerpt:
    "I do SEO for pest control companies: a page for each pest you treat — termites, bed bugs, rodents, mosquitoes — pages that sell recurring plans and commercial contracts, Google Maps and reviews, so homeowners and restaurant managers call you rather than a national brand or a lead platform.",
  seo: {
    metaTitle: "Pest Control SEO for Local Exterminators | Bandziuk",
    metaDescription:
      "Pest control SEO: termite, bed bug and rodent pages, recurring plans, Google Maps, reviews and AI answers, measured in booked services. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Pest, plan and area pages", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Bed bug exterminator near me", "Termite inspection this week", "Licensed & insured", "Call or book online"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Pest control SEO audit: website and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off pest control SEO work: pest, plan, commercial and service-area pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a pest control company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with pest control SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data for every pest you treat", text: "Termites, bed bugs, rodents, mosquitoes — by town" },
        { _key: k("o"), iconName: "layers", title: "A page for each pest and treatment", text: "Signs, method, prep, visits and re-service terms" },
        { _key: k("o"), iconName: "file-text", title: "Recurring plan and commercial pages", text: "Quarterly service, restaurants, property managers" },
        { _key: k("o"), iconName: "map-pin", title: "Google Maps and service-area pages", text: "Only the towns your routes really cover" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "License, plans and safety facts written as text" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in calls and booked services", text: "Lead source taken from your routing software" },
      ],
      prices: [
        { _key: k("r"), label: "Pest control SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a pest control company", value: "from 800 € / month", note: "pest pages, map, reviews, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: service businesses I have built sites for and optimized",
      subtitle:
        "Three of these are Warsaw service businesses that live on phone calls and Google Maps — an auto repair shop, a wheel-renovation workshop and a tyre-storage business — where I built service pages and worked on local search and the map. ScanM2, a 3D laser scanning company, had two years without leads on a no-code site; after the rebuild it gets leads weekly and its organic traffic is up 29 times. The Milan psychotherapist’s site kept every old URL through a migration of 468 posts and its new pages already appear in ChatGPT answers. A pest control company needs the same mix: pages for the jobs people search for, a strong map listing and a place in AI answers.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your pest control company",
      subtitle: "I reply within one business day with what I would fix first on your website and Google profile, and a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of jobs should search bring you?", options: ["Recurring residential plans", "Termite work", "Bed bugs and rodents", "Commercial accounts"] },
        { _key: k("z"), question: "Where do most of your new customers come from now?", options: ["Local Services Ads", "Google Maps", "Angi, Thumbtack or other platforms", "Referrals and door-to-door sales"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for pest control companies: your site, your Google Business Profile and the pages people land on after spotting droppings in the pantry or winged ants by the window. Pest control lives on repeat visits — a customer won on one bed bug call can stay on a quarterly plan for years — so each new customer from search is worth far more than the first invoice. I work alone and also build websites, so whoever finds a problem on your site fixes it too."),

        h2("Pest control SEO keywords: what people type when they find a pest"),
        p("Pest searches often start with a problem the customer cannot name yet. Before any page is written I pull search data for your pests and towns, and the phrases fall into four groups:"),
        li("identification — “small brown bugs in bed”, “what do termite droppings look like”, “scratching noise in attic at night”"),
        li("treatment — “bed bug exterminator near me”, “termite treatment [town]”, “wasp nest removal”"),
        li("cost and plans — “termite treatment cost”, “is quarterly pest control worth it”"),
        li("safety — “is pest control safe for dogs”, “how long to stay out after spraying”"),
        p("Identification and safety searches are where people meet your company first, often weeks before they need a technician. Treatment searches are where the map and Local Services Ads decide most calls. The data shows which group needs work first in your market."),

        h2("Pest pages in SEO for pest control: termites, bed bugs, rodents and mosquitoes"),
        p("A single “Services” page listing twelve pests ranks for no single pest. Each pest you treat has its own searches, its own season and its own worries, so each gets a page with your method, the prep the customer has to do, how many visits it takes and what happens if the pest comes back."),
        h3("Termite inspection and treatment pages"),
        p("Termite work is the largest ticket in residential pest control and the most researched. The page explains swarmers versus flying ants, liquid treatments versus baiting systems, how long protection lasts, the renewal or warranty you offer, and the wood-destroying insect inspection a buyer or lender asks for when a house is sold."),
        h3("Bed bug treatment pages"),
        p("Bed bug customers are embarrassed and in a hurry. They want to know whether you use heat, chemical treatment or both, how to prepare the room, whether they can sleep there tonight and whether the neighbors will see your truck. A page that answers all of this gets calls that a two-line service blurb loses. Hotels and landlords search for it in other words and deserve their own section."),
        h3("Rodent control and exclusion pages"),
        p("Mice and rats move indoors when the weather cools, and the searches follow. Owners want the noise in the attic gone and the entry points sealed, not only traps set. Pages on exclusion work — gaps, vents, rooflines — with photos from your jobs show why your visit costs more than a box of bait from the hardware store."),
        h3("Mosquito and tick yard treatment pages"),
        p(
          "Yard treatments are sold as a program from spring to fall, plus one-off visits before weddings and backyard parties. The page names the months, the number of visits and what the customer should expect between them. Companies that also do lawn treatments will find the other side of that work on the ",
          link("landscaping SEO", "/landscaping-seo"),
          " page.",
        ),

        h2("Recurring pest control plans: SEO pages that sell quarterly service"),
        p("Most residential revenue comes from service plans: an initial treatment, then a visit every quarter or every other month, with free re-service if pests show up in between. The plan is your product, and its page has to be as clear as any product page:"),
        li("what the initial visit includes and how it differs from the regular ones"),
        li("which pests are covered, and which — termites, bed bugs, wildlife — cost extra"),
        li("how re-service calls work between visits"),
        li("the price per visit or per month if you publish it, and how the customer cancels"),
        p("People compare plans before signing and search questions like “is $70 a month good for pest control”. A plan page that answers them on your terms turns those comparisons into sign-ups."),

        h2("Commercial pest control SEO: restaurants, warehouses and property managers"),
        p("Commercial buyers search differently from homeowners. A restaurant manager looks for a contractor whose service reports a health inspector will accept; a food warehouse needs records for third-party food safety audits; a property manager wants one company for forty units and a clear routine for tenant complaints. Commercial pages name the facility types you serve, your integrated pest management approach, the paperwork left after each visit, after-hours service, insurance and how a site survey is booked. Such searches are few; one won account can run for years."),

        h2("Pest control cost pages: answering “How much will it cost for pest control?”"),
        p("“How much will it cost for pest control?” is one of the questions Google shows most often for this topic, and AI Overviews answer it with national averages when your site offers nothing better. A cost page, or a cost section on each pest page, says what moves the price: the size of the home, the pest, how far the infestation has gone, one-time or recurring service, follow-up visits. Ranges are enough; your price book stays private. Visitors who read a range before calling are the ones who book, and assistants get a figure with your company name next to it."),

        h2("Local SEO for pest control companies: Google Business Profile, service areas and reviews"),
        p("For “exterminator near me” and “pest control near me” the map decides most calls. Local SEO for pest control starts with the profile:"),
        li("“Pest control service” as the primary category, each pest listed as a service, and the towns your routes really cover"),
        li("weekly photos from jobs — technicians, trucks, sealed entry points, bait stations by a foundation — rather than dead pests"),
        li("a review request texted after each visit, asking customers to name the pest and the town"),
        li("service-area pages only for towns where you have customers, each with details only you could write: termite pressure, older housing, HOA rules"),
        p(
          "Fifty town pages with the same text are treated as doorway pages and filtered. The map side in more depth is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Seasonal pest control SEO: termite swarms, mosquito summers, rodent winters"),
        p("Pest demand follows a calendar that varies by region: termite swarms in spring, ants and wasps in early summer, mosquitoes and ticks through the warm months, stinging insect nests late in summer, rodents from fall into winter. A page needs weeks to rank, so each season’s pages go live a couple of months ahead. Quiet weeks go to new pest pages, job photos and fixes; the weeks before a rush go to the profile, reviews and forms."),

        h2("Pesticide licensing and safety questions on pest control pages"),
        p("Pest control is licensed work, and customers ask about chemicals before they let a technician in. Pages that answer plainly earn trust with people and with search engines:"),
        li("the company’s license number and the state agency that issued it, written as text"),
        li("the kinds of products you use, applied according to their labels, and when pets and children can go back into treated rooms"),
        li("options for sensitive households, if you offer them, described without promises the label does not support"),
        p("Words like “non-toxic”, “100% safe” or “harmless” about pesticide services can conflict with label and advertising rules in many states. Check wording with your state regulator; I follow the rules you pass on to me, and this is general information, not legal advice."),

        h2("Local Services Ads, lead platforms and pest control marketing: where SEO fits"),
        p("At the top of most pest searches sit Google’s Local Services Ads, the ones with the Google Guaranteed badge, charged per lead. Below them come national brands and franchises with large budgets, and lead platforms such as Angi or Thumbtack that pass one request to several companies. Paid leads arrive this week and end when the spending does; SEO takes months, then brings calls that are yours alone and cost nothing per lead. Many local firms keep Local Services Ads for the busy season and let SEO take over a growing share of calls. My part is the website and the map, and I make sure the pages your ads land on are the pages that rank."),
        p("Pest control marketing companies often sell SEO together with ads, call answering and door hangers, sometimes to several firms in one market. Whoever you hire, ask whether reports show booked services from your routing software — PestPac, FieldRoutes, GorillaDesk or similar — whether they work for a competitor in your towns, and who owns the site and profile if you part ways."),

        h2("Pest control SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Homeowners type questions such as “how do I know if I have termites”, “is heat treatment better than spraying for bed bugs” or “who does rodent exclusion in [town]” into ChatGPT, Perplexity or Google’s AI Overviews. Assistants assemble those answers from sources they can read and verify. Work on being included is known as generative engine optimization (GEO) or answer engine optimization (AEO). For a pest control company it comes down to:"),
        li("direct answers to identification, prep and safety questions on your own pages, with the owner or a named technician as author"),
        li("plan contents, cost ranges, license and service area written as plain sentences"),
        li("structured data describing the business, its pest services and the towns it covers"),
        li("the same company details on Google, Yelp, the BBB and other listings, since assistants compare them"),
        p(
          "Before the work starts and again after it, I record how assistants describe your company and who they name instead. The method is on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much pest control SEO services cost"),
        li("Pest control SEO audit of the website and the Google Business Profile: from 250 €, one-off, with fixes listed by impact."),
        li("One-off work — pest, plan, commercial and service-area pages, profile clean-up, structured data: 250–700 €."),
        li("Monthly SEO for a pest control company — new pages, maps, reviews, AI visibility and reports in booked services: from 800 € per month; in big US metros, where national brands and franchises fight for every search, from 1,300 € per month."),
        p(
          "If the site itself needs rebuilding, the ",
          link("pest control website design", "/pest-control-website-design"),
          " page describes how I design and build one. My approach to ongoing work is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page, and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pest control SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a pest control company cost?", "The audit starts at 250 € one-off; single pieces of work cost 250–700 €; monthly SEO starts at 800 €, or at 1,300 € a month in big US metros. Tell me your pests, towns and where leads come from now, and I will name a fixed price."],
          ["How long does pest control SEO take to bring calls?", "Profile and review work can show in the map within weeks. New pest and plan pages take roughly three to five months to climb, and more in large metros. That is why seasonal pages are prepared a season ahead."],
          ["Is SEO or Local Services Ads better for a pest control company?", "They do different jobs. Local Services Ads bring calls now and charge per lead; SEO takes months and then brings calls you do not pay for one by one. Many firms run both and shift the balance toward SEO as pages start ranking."],
          ["Should a pest control company publish prices on its website?", "Ranges, yes, for the services people search by cost: termite treatment, bed bugs, recurring plans. Say what changes the price and keep your full price book private. Answering the cost question on your own page stops visitors leaving for a national price guide."],
          ["Do I need a separate page for every pest?", "For every pest you want calls for and treat regularly. Pests you rarely handle can share a page. Termites, bed bugs, rodents and mosquito programs almost always need their own pages, because their searches, prices and seasons differ."],
          ["Can ChatGPT recommend a local pest control company?", "Yes, when someone asks for one. It names companies it can find clear facts about: services, area, license, reviews and plain answers to common questions. No one can guarantee a mention, but those facts make it much more likely; I check the answers before and after the work."],
          ["What should I ask a pest control SEO company or expert before hiring?", "Ask for reports in booked services, not only rankings; ask whether they work for another pest control firm in your towns; and make sure the website, domain and Google profile stay in your name. Treat a promise of the top spot on Google as a warning sign."],
          ["Can a consultant in Poland do SEO for a US pest control company?", "Yes. All the work is remote and in English. My afternoon and evening in Central European Time overlap with the morning and midday in the US, so calls fit East Coast and Central business hours. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your pest control company: what to send me"),
        p(
          "Send your company name, your site and Google Maps links, which jobs search should bring — recurring plans, termites, bed bugs, commercial accounts — the towns on your routes and the routing software you use. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
