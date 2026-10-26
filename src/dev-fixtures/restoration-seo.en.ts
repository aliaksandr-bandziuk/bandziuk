// Landing page fixture: Restoration SEO (EN), group «restoration-seo».
// Semantic core: ref/home-services.md, restoration group: seo for restoration
// companies 90 (H1), restoration seo 50 (metaTitle, H2), water damage
// restoration seo 40 (water H2), local seo for restoration companies 30
// (local H2), restoration company seo 30, damage restoration seo 20, water
// restoration seo 20, restoration seo company 20, restoration seo experts 10,
// seo restoration 10, restoration company seo lead generation 10 (leads H2).
// Mention only: restoration marketing 210, water damage restoration marketing
// 90, restoration digital marketing 70 — covered by the leads H2, not
// targeted as a marketing page. Ignored: restoration growth 110 (brand).
// Intent: ref/intent-check-home-services.md — «restoration seo» vs «water
// damage restoration seo» 1 of 10 shared URLs, but the water SERP is
// restoration-specific agencies covering the same service set → one page with
// a strong water damage H2 rather than a thin second page.
// Angles: emergency 24/7, water / fire / mold pages, insurance claims and
// adjusters (general terms), IICRC certification (general), service areas,
// lead sellers and franchises (SERVPRO, Paul Davis, PuroClean, BELFOR),
// reviews. Big US metros — monthly from 1,300 €.
// NOT on this page: carpet and upholstery cleaning (/carpet-cleaning-seo);
// storm damage to roofs (/roofing-seo); the rebuild as general construction
// (/seo-for-contractors, linked once); website builds; ads management.
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, li, link, k } from "./pt";

export const restorationSeoEn = {
  lang: "en",
  group: "restoration-seo",
  slug: "restoration-seo",
  title: "Restoration SEO",
  heading: "SEO for Restoration Companies",
  excerpt:
    "I do SEO for restoration companies — water damage, fire and smoke, mold remediation: emergency pages that get the call at night, a page for each kind of damage, clear insurance answers and a Google profile for 24/7 work.",
  seo: {
    metaTitle: "Restoration SEO: Water, Fire and Mold Damage | Bandziuk",
    metaDescription:
      "Restoration SEO for water, fire and mold damage companies: emergency pages, insurance answers, Google Maps, reviews and AI search. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Water, fire, mold", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Water damage near me", "24/7 emergency line", "Insurance claim help", "IICRC certified crew"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Restoration SEO audit: website, Google Business Profile and emergency pages", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off restoration SEO work: water, fire and mold pages, insurance page, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a restoration company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for restoration companies",
      items: [
        { _key: k("o"), iconName: "phone", title: "Emergency pages that get the call", text: "Fast on a phone, number as a button, hours stated" },
        { _key: k("o"), iconName: "layers", title: "Separate water, fire and mold pages", text: "Burst pipes, sewage, smoke odor, remediation" },
        { _key: k("o"), iconName: "shield-check", title: "Insurance and certification pages", text: "Claim steps in general terms, IICRC, licenses" },
        { _key: k("o"), iconName: "map-pin", title: "Google Maps for a 24/7 service area", text: "Real towns and real jobs, no copied city pages" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "Drying times and claim steps assistants can quote" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in calls and jobs from search", text: "Set against what bought leads cost you" },
      ],
      prices: [
        { _key: k("r"), label: "Restoration SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a restoration company", value: "from 800 € / month", note: "pages, map, reviews, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: service companies that win work from search and the map",
      subtitle:
        "Warsaw service firms that live on calls, Google Maps and service pages — an auto repair shop, a renovation and property-investment company, a wheel-renovation workshop — plus ScanM2, a technical services company that went from no leads in two years to leads every week, and a Milan practice whose new pages appear in ChatGPT answers. A restoration company stands on the same base: a page for each service, a profile that holds the map and calls you can trace.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your restoration company",
      subtitle: "Within one business day you get the first fixes I would make to your emergency pages and Google profile, and a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which work do you want more of?", options: ["Water damage", "Fire and smoke", "Mold remediation", "Rebuild after damage"] },
        { _key: k("z"), question: "Where do most jobs come from now?", options: ["Lead sellers", "Local Services Ads", "Insurance programs", "Plumbers and referrals"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for restoration companies that handle water damage, fire and smoke damage and mold: emergency pages that load fast and get the call, a page for each kind of damage, a Google profile set up for round-the-clock work and plain answers to the insurance questions homeowners ask on the worst day of their year. In restoration a single job can be worth more than several months of SEO, and the customer usually calls the first company that looks local, available and competent."),

        h2("Restoration SEO starts with the emergency call: searches made in a flooded basement"),
        p("Most restoration work begins with a search like “water damage restoration near me”, “basement flooded what to do” or “emergency water removal”, typed on a phone, often at night. The person calls one of the first two or three names and rarely compares. Those searches show Local Services Ads and the map first, then franchise sites — SERVPRO, Paul Davis, PuroClean, BELFOR — and lead-generation pages built for every city."),
        p("If you answer around the clock, your emergency pages have one task: say in the first lines that a crew can come now, show the response area and put the phone number in a button, and prove you are a real local company with an address, photos of your trucks and team, and certifications. Longer explanations go lower on the page, for the careful reader and for Google."),

        h2("Water damage restoration SEO: pages for burst pipes, flooded basements and sewage backups"),
        p("Water damage brings most of the search volume in restoration, but it is not one search. Each cause brings a different customer and needs its own page:"),
        li("burst and frozen pipes, appliance and water heater leaks — the typical insurance job in a house or apartment"),
        li("flooded basements after heavy rain or rising groundwater — coverage often depends on the cause and the policy, so price questions come first"),
        li("sewage backups — category 3 water, health risk, removal of soaked materials"),
        li("water extraction and structural drying — equipment, moisture readings, how many days the dehumidifiers stay"),
        p("Each page explains what happens in the first hour, the first day and the first week, what the homeowner should and should not do before you arrive, and when drywall, flooring or cabinets have to come out. Water category, drying time and mold risk are the details both readers and assistants look for."),

        h2("Fire and smoke damage restoration pages in restoration company SEO"),
        p("Fire jobs are rarer and larger. The homeowner is usually not searching at night but in the days after, often with an adjuster already involved, and compares companies more carefully. A fire and smoke page covers board-up and tarping, soot cleaning, smoke odor removal by the methods you use — thermal fogging, ozone or hydroxyl — contents cleaning and pack-out, and whether you also handle the rebuild. Separate pages for smoke odor and for contents pack-out pick up searches that one general “fire restoration” page misses."),

        h2("Mold remediation SEO: testing, removal and clear limits"),
        p("Mold searches come from worried homeowners, buyers after an inspection and landlords: “black mold in bathroom”, “mold remediation cost”, “mold after water leak”. A mold page explains the difference between testing and remediation, containment and air scrubbers, what happens to drywall and insulation and how you check the result. Some US states license mold assessment and remediation, sometimes as separate activities; where that applies to you, the license number belongs on the page."),
        p("Mold is also where trust is lost fastest. Pages that frighten people into large jobs collect reviews that say so. Pages that explain when a small patch can be cleaned by the owner and when a professional is needed rank for those questions and bring the callers who need you."),

        h2("Insurance claims on a restoration website: coverage and adjuster questions in general terms"),
        p("Almost every restoration customer asks about insurance, and the searches show it: “does homeowners insurance cover water damage”, “how to file a water damage claim”, “do I have to use the restoration company my insurance recommends”. A page on working with insurance companies can explain, without promising coverage:"),
        li("what to document before work starts — photos, the source of the water, damaged belongings"),
        li("how your estimate is prepared and shared with the adjuster, and the estimating software you use, such as Xactimate, if that is your practice"),
        li("whether you bill the insurer directly and what stays with the homeowner — the deductible and anything not covered"),
        li("who chooses the company that does the work, in general terms"),
        p("Coverage depends on the policy and the cause of the loss, and the page should say so in one plain sentence. A company that explains the process calmly is the one a stressed homeowner calls back."),

        h2("IICRC certification, licenses and trust signals in SEO for restoration companies"),
        p("Homeowners and adjusters both check whether the people entering the house are trained. IICRC certifications held by your technicians — water damage restoration, applied structural drying, fire and smoke, mold remediation — a contractor license where your state requires one, insurance, years in business and a real address are facts that readers and search engines use. Put them as text on the pages where they matter, not only as logos in the footer. Team pages with real names and photos count for more here than in most trades, because your crew will come back to the same home for days while it dries."),

        h2("Local SEO for restoration companies: Google Business Profile, service areas and 24/7 hours"),
        p("Restoration is one of the map categories crowded with lead-generation listings. What holds up over time is a real profile with consistent details: “Water damage restoration service” as the primary category, fire and mold categories added where Google offers them, the address shown or hidden according to whether customers visit, 24/7 hours only if someone really answers at 3 a.m., and photos from jobs, equipment and the warehouse."),
        p(
          "Service-area pages work when they show jobs from that town — the kind of damage, the type of house, how fast the crew arrived. A page per county with the same text helps nobody. More on the map side on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page. Companies that also rebuild after the damage compete for construction searches as well, described on the ",
          link("SEO for contractors", "/seo-for-contractors"),
          " page.",
        ),

        h2("Restoration leads: lead sellers, insurance programs, referrals and your own search traffic"),
        p("Restoration companies get work from several sources, and most of them take a cut:"),
        li("lead sellers that rank city pages and resell the call, sometimes to more than one company"),
        li("Google Local Services Ads, charged per lead"),
        li("insurance and third-party administrator programs that send jobs but set prices and terms"),
        li("referrals from plumbers, property managers and insurance agents"),
        p("Organic search is the source that charges nothing per job. It takes months to build, so most companies keep the other sources while it grows. My work is on the search side, and I make sure the pages that rank are the same pages your ads and referral partners send people to."),

        h2("Reviews for restoration companies after water, fire and mold jobs: when to ask"),
        p("A restoration customer is not happy on the day the crew arrives; they are relieved weeks later, when the house is dry and the claim is settled. That is the moment to ask for a review, with a direct link. Reviews that mention the damage type, the response time and the help with paperwork match what the next customer is searching for. Answer every review, including angry ones about insurance outcomes you did not control, calmly and without the customer’s details."),

        h2("AI SEO for restoration companies: visibility in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Questions like “how long does it take to dry a flooded basement”, “is mold after a leak dangerous” or “who does fire damage cleanup near me” are now answered by ChatGPT, Perplexity or Google’s AI Overviews before anyone clicks. The work of being cited there is known as generative engine optimization (GEO) or answer engine optimization (AEO). In restoration it involves:"),
        li("drying times, the order of work and the claim process explained on your own pages"),
        li("certifications, licenses, response area and availability written as plain facts"),
        li("structured data naming the business, each type of damage you handle and the areas you serve"),
        li("matching details on Google, Yelp, BBB and industry directories, so an assistant does not confuse you with a lead site using a similar name"),
        p(
          "At the start I record what assistants answer about your company, and I repeat the same questions after the new pages go live. Details on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much SEO for restoration companies costs"),
        li("Restoration SEO audit of the website, the Google Business Profile and the emergency pages: from 250 €, one-off, with fixes ordered by impact."),
        li("One-off work — water, fire and mold pages, an insurance page, profile clean-up, structured data: 250–700 €."),
        li("Monthly SEO for a restoration company — new pages, map and reviews, AI visibility and reporting: from 800 € per month; in big US metros, where restoration is among the most contested local searches, from 1,300 € per month."),
        p(
          "A restoration company in a mid-sized town often gets most of the result from the audit, the emergency pages and the profile. How I run monthly work is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page; the full price list sits on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for restoration companies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does restoration SEO cost?", "Expect from 250 € for the audit, 250–700 € for a single task such as a set of water damage pages, and from 800 € per month for ongoing SEO. In big US metros, where restoration searches are among the most contested, monthly work starts at 1,300 €. Describe your company and area and I will quote a fixed price."],
          ["How long does SEO take for a water damage restoration company?", "Profile fixes and changes to existing emergency pages can show within weeks. New pages usually need three to six months to rank in a large city, because lead sellers and franchises have been competing for the same searches for years."],
          ["Is SEO better than buying restoration leads?", "It does a different job. Bought leads arrive this week and cost money every time, sometimes for a call another company also received. SEO builds slowly and then brings calls that are yours alone. Most companies keep some paid leads while search grows."],
          ["Should a restoration website talk about insurance claims?", "Yes, in general terms: what to document, how the estimate reaches the adjuster, whether you bill the insurer and what the homeowner pays. It should never promise that a loss will be covered — that depends on the policy."],
          ["Do I need separate pages for water, fire and mold damage?", "Yes. People search for each one in different words and at different moments — water at night in a hurry, fire in the days after, mold over weeks of worry. One general page loses all three to more specific competitors."],
          ["Does AI search change how restoration companies get found?", "It adds a step. More homeowners read an AI answer before they call, and assistants mention companies whose pages explain the work and whose details match across listings. That is now part of restoration SEO."],
          ["Can you work with a US restoration company from Poland?", "Yes. The work is remote and in English. My working afternoon in Central European Time is your morning, so we can talk before the day’s jobs pile up, and emergencies on your side do not need me on site. Invoices are issued in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your restoration company: what to send me"),
        p(
          "Write the company name, add your website and Google Maps links, and say which jobs matter most — water, fire, mold or rebuild — the area you cover, whether you answer around the clock, and where jobs come from now: lead sellers, Local Services Ads, insurance programs or referrals. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
