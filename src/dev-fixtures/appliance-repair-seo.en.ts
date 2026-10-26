// Landing page fixture: Appliance repair SEO (EN), group
// «appliance-repair-seo». New page.
// Semantic core: ref/home-services.md, appliance repair group: appliance
// repair seo 30 (H1, metaDescription, several H2), appliance repair seo
// services 20 (offer title, cost H2). Low volume but pure buyers’ intent.
// Intent: ref/intent-check-home-services.md — «appliance repair seo» vs
// «appliance repair website» 0 shared URLs: the second is consumers looking
// for a repair company (Sears Home Services, HomeGuide, BBB, local shops) →
// not targeted; SEO SERP = small agencies (SerpSquad, Appliance Marketing
// Pros, Media Spearhead) → buyers’ demand.
// Angle: searches by appliance, brand and symptom; appliance pages; brand pages
// and the word «authorized»; error-code articles; diagnostic / service-call
// fee and repair-or-replace by age; warranty work (manufacturer, extended and
// home warranty dispatch) vs direct customers; same-day booking with model
// tag photo, parts and second visits; service area by zip code and Google
// Business Profile; national chains and lead platforms; property managers;
// AI answers.
// NOT on this page: parts e-commerce; website build in detail
// (/services/website-development); Google Maps in depth
// (/services/local-seo-services, linked once); general small-business SEO
// (/seo-services-for-small-business, linked once); paid ads (mentioned as a
// channel only). Owner’s rules: every SEO page covers AI search (GEO, AEO);
// never say there are no clients from the visitor’s segment.
import { p, h2, h3, li, link, k } from "./pt";

export const applianceRepairSeoEn = {
  lang: "en",
  group: "appliance-repair-seo",
  slug: "appliance-repair-seo",
  title: "Appliance repair SEO",
  heading: "Appliance Repair SEO",
  excerpt:
    "I do appliance repair SEO for repair companies and independent technicians: pages for each appliance and brand you fix, your service area, diagnostic fee and warranty work, Google Maps and AI answers, so local customers book you.",
  seo: {
    metaTitle: "SEO for Appliance Repair Companies | Bandziuk",
    metaDescription:
      "Appliance repair SEO services: appliance and brand pages, service area, diagnostic fee and warranty pages, Google Maps and AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Appliance and brand pages", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Fridge not cooling", "Same-day slot", "Service call fee shown", "Upload model tag"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Appliance repair SEO audit: website, Google Business Profile, competitors", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off appliance repair SEO services: appliance and brand pages, fee and warranty pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for an appliance repair company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with appliance repair SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data by appliance, brand and zip code", text: "What people in your area type when something breaks" },
        { _key: k("o"), iconName: "layers", title: "Appliance and brand pages", text: "Refrigerators, washers, ovens; Samsung, LG, Whirlpool, Sub-Zero" },
        { _key: k("o"), iconName: "file-text", title: "Service call fee and warranty pages", text: "What the visit costs and which warranties you take" },
        { _key: k("o"), iconName: "map-pin", title: "Google Business Profile and service area", text: "Towns and zip codes your technicians reach" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "Brands, areas and fees assistants can quote" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in booked repairs", text: "By appliance and source, from your field software" },
      ],
      prices: [
        { _key: k("r"), label: "Appliance repair SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for an appliance repair company", value: "from 800 € / month", note: "pages, map, reviews, AI answers", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: repair shops and local service websites",
      subtitle:
        "Three Warsaw repair and service businesses that get work from calls and Google Maps — an auto repair shop with local SEO and service pages, the Felgilab wheel-renovation workshop with service and price pages, and a tyre-storage business with a landing page the owner edits himself — plus a Warsaw renovation company and a Milan psychotherapist whose pages appear in ChatGPT answers. An appliance repair company needs the same: a page for each job, prices people can see and a profile that wins the map.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your appliance repair company",
      subtitle: "I reply within one business day with what I would fix first on your website and Google profile, and a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where do most of your repair jobs come from now?", options: ["Home warranty companies", "Google search and Maps", "Yelp, Angi or Thumbtack", "Repeat customers and property managers"] },
        { _key: k("z"), question: "What do you want more of?", options: ["Refrigeration", "Laundry", "Cooking and dishwashers", "High-end built-in brands"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do appliance repair SEO for repair companies and independent technicians, working on three things at once — your site, your Google Business Profile and the pages a homeowner lands on when the refrigerator is warm, the washer will not drain or the oven stopped heating the day before guests arrive. The aim is booked repairs from customers who pay you directly, in the towns your vans already drive through, rather than more traffic on a report."),

        h2("Appliance repair searches: by appliance, by brand and by symptom"),
        p("People describe a broken appliance in three ways, and each needs a different kind of page:"),
        li("by appliance and place — “refrigerator repair near me”, “dryer repair [town]”, “dishwasher repair service”"),
        li("by brand — “Samsung refrigerator repair”, “LG washer repair”, “Sub-Zero repair [city]”"),
        li("by symptom or code — “fridge not cooling but freezer works”, “washer won’t spin”, “oven F3 error”"),
        p("The first two groups are close to a booking. The third mixes do-it-yourselfers with people who will call once they understand the problem is not a five-minute fix. A good site catches all three and moves the last group toward the phone."),

        h2("Appliance pages for appliance repair SEO: refrigerators, washers, dryers, dishwashers, ovens"),
        p("Each appliance you repair deserves its own page, because each has its own searches, faults and parts. A refrigerator page covers cooling problems, ice makers, water leaks and compressors; a laundry page covers drains, bearings, belts and heating elements; a cooking page separates gas ranges, electric cooktops, wall ovens and microwaves. Write about the faults you see every week, what a typical repair involves and how long it takes. If you repair gas appliances, say what you do with gas lines and what you leave to a licensed gas fitter where your state requires one."),

        h2("Brand pages for appliance repair: Samsung, LG, Whirlpool, GE and high-end brands"),
        p("Brand searches are some of the best searches in this trade: the person knows exactly what they own and wants someone who knows it too. A brand page lists the appliance types you service for that brand, common problems on its models and whether you stock its parts. High-end built-in brands — Sub-Zero, Wolf, Thermador, Viking, Miele — bring fewer calls but larger tickets, and owners of these appliances search for specialists by name."),
        p("Be careful with the word “authorized”. Use it only for brands where you hold factory authorization, and say “we repair Samsung appliances” elsewhere. Brand names in domains, profile names or fake “brand service center” listings can bring trademark complaints and suspended profiles; plain, accurate brand pages bring the same searches without that risk."),
        h3("Error code pages for appliance brands: when they are worth writing"),
        p("Error code articles attract many visitors, and Google’s AI Overviews now answer many of them directly. They are worth writing for brands and models you see often, when the page explains the code, the safe checks a homeowner can make and the point where a technician is needed — with your booking button there."),

        h2("Appliance repair diagnostic fee and service call pages: what customers ask before booking"),
        p("The service call fee is the first objection in appliance repair. Customers want to know what they pay for the visit, what it includes and what happens if the repair is not worth doing. Put it on one clear page and in short form on each appliance page: the fee, what the technician checks, whether it is applied to the repair, how a written estimate is given before any work starts."),
        p("The other question behind most calls is whether an old appliance is worth fixing. A short guide by appliance — typical lifespan, repairs that usually make sense, repairs that rarely do — builds trust and keeps the reader on your site instead of a national cost guide."),

        h2("Appliance warranty repair pages: home warranty jobs vs direct customers from search"),
        p("Many repair companies fill their schedule with warranty work: manufacturer warranty repairs for brands that authorize them, extended warranty claims and dispatches from home warranty companies. That work is steady, but the rate per job is set by someone else and the paperwork is heavy. SEO grows the other side — customers who find you and pay your rate."),
        p("Warranty work still belongs on the website. A page that lists which manufacturer and extended warranties you accept answers searches like “LG warranty repair near me” and saves your office from calls you cannot take."),

        h2("Same-day appliance repair booking, parts and second visits"),
        p("If you offer same-day or next-day service, say it with the hours and zip codes it applies to, not as a slogan. Online booking works best when it asks for three things: the appliance, the brand and a photo of the model and serial number tag. With the model known before the visit, the technician can bring the likely parts and finish more jobs on the first trip."),
        p("When a part has to be ordered, the customer waits days with a broken appliance. A short page on how parts ordering works, typical waiting times and how the second visit is booked removes a lot of frustrated calls and some bad reviews."),

        h2("Local SEO for appliance repair: service area, zip codes and Google Business Profile"),
        p(
          "Most appliance repair companies have no storefront, which makes them service-area businesses on Google Maps: “Appliance repair service” as the primary category, the towns you cover, real hours and photos from jobs. Reviews that name the appliance, the brand and the town help both the map and the next customer. The map in this trade is crowded with call-forwarding listings that send calls to whoever pays; a real local company with a consistent name, address and phone across the web has an advantage there. Service-area pages work when they carry real jobs and local details, not one text with the town name swapped. More on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Competing with national chains and lead platforms in appliance repair SEO"),
        p("National services and franchises rank in many towns with the same pages, and platforms such as Yelp, Angi and Thumbtack sit high in the results. A local company wins on what they cannot copy: technicians with names and photos, brands you know well, real response times in your area and reviews from neighbors. Lead platforms still bring work, but you pay for each lead and often compete for it; search traffic to your own site is not billed per call."),
        h3("Property managers and landlords as repeat customers"),
        p("Property managers with rental units call about the same appliances again and again. A page for landlords and property managers — billing, access to units, tenant scheduling, repair-or-replace decisions — brings fewer visits but steady repeat work."),

        h2("Appliance repair SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("“Is it worth repairing a 10-year-old dishwasher?”, “why is my freezer frosting up?” and “who repairs Sub-Zero near me?” are typed into ChatGPT and Perplexity, and Google often answers them with an AI Overview above the links. Work on getting your company named there goes by two labels, generative engine optimization (GEO) and answer engine optimization (AEO); for an appliance repair company it covers:"),
        li("brands, appliance types, service area and the service call fee written as plain sentences"),
        li("useful answers to common fault questions on your own pages"),
        li("structured data naming the business, its services and areas"),
        li("the same details on Google, Yelp, the BBB and your site"),
        p(
          "Before the work starts and again after it, I record what assistants say about your company. Details on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much appliance repair SEO services cost"),
        li("Audit of the repair website, the Google profile and local competitors: from 250 €, one-off, with a list of fixes by priority."),
        li("One-off work — appliance and brand pages, the service call fee and warranty pages, structured data: 250–700 €."),
        li("Monthly SEO for an appliance repair company — new pages, map and reviews, AI visibility, reports in booked repairs: from 800 € per month."),
        p(
          "Ongoing work is described on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page, and owner-operators with one van may also find the ",
          link("SEO services for small business", "/seo-services-for-small-business"),
          " page useful. Full prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Appliance repair SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does appliance repair SEO cost?", "An audit of the website and Google profile costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month. I give a fixed price after a short description of your company and service area."],
          ["How long until appliance repair SEO brings calls?", "Profile fixes and better appliance pages can help within weeks. New brand and service-area pages usually take two to four months to rank, longer in large metro areas."],
          ["Should my appliance repair website have a page for every brand?", "A page for each brand you repair often and know well, yes. A page for every brand that exists, with the same text, no. Brand pages work when they carry real models, faults and parts."],
          ["Can I say I repair a brand if I am not factory authorized?", "You can say you repair that brand’s appliances if you do. Use “authorized” only where you hold the authorization, and keep brand names out of your business name and domain."],
          ["Is SEO worth it if I already get home warranty jobs?", "Usually yes. Warranty dispatches fill the schedule at rates set by others. SEO brings customers who pay your own rate, so each booked job from search is worth more."],
          ["Can ChatGPT write my appliance repair pages?", "It can draft text. It does not know which brands you see most, your service call fee, your zip codes or which pages your competitors rank with, and generic repair text rarely ranks."],
          ["Do you work with appliance repair companies in the US from Poland?", "Yes. Everything is done online — the site, the Google profile and search data for your towns. My afternoon and evening in Central European Time overlap with the US morning, and invoices are in euros."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order appliance repair SEO: what to send me"),
        p(
          "Send the company name, links to the website and the Google Maps profile, the towns or zip codes you cover, the appliances and brands you want more of and your service call fee. Tell me roughly how much of your work comes from warranty dispatches. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
