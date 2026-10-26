// Landing page fixture: Tree Service SEO (EN), group «tree-service-seo».
// New page.
// Semantic core: ref/home-services.md, tree service group (9 phrases, sum
// 620): tree service seo 90 (H1, metaTitle, H2s), tree service seo company 20,
// tree service seo agency 10 (FAQ wording), tree service leads 210 (one H2
// comparing bought leads with SEO), tree service advertising ideas 50 (one
// H2), local tree service marketing 40 (local H2). Not targeted: tree service
// danbury ct 90 (a local business search), tree service digital 90 / tree
// service digital reviews 20 (an agency brand).
// Intent: ref/intent-check-home-services.md — «tree service seo» vs
// «landscaping seo» 0 of 10 shared URLs, 0 shared domains: the tree SERP is
// niche agencies (treeserviceseo.com, arboristmarketingagency.com,
// treeservicesmarketing.com) → own page, separate from /landscaping-seo
// (linked once as the neighbour page). Its theses (design-build vs
// maintenance, spring planning, HOA maintenance contracts, project galleries)
// are not repeated here.
// Angle: searches that describe a problem tree, removal methods and cost
// factors, trimming timing, stump grinding and land clearing, storm and
// emergency work, ISA certification / insurance / permits in general terms,
// service-area Google profile, job mix from bought leads vs SEO, offline
// advertising that feeds name searches, storm-led seasons, AI answers.
// NOT on this page: landscaping and lawn care SEO (/landscaping-seo); website
// builds; Local Services Ads and lead platforms (compared only); utility
// line-clearance contracts. No tree-work prices — the client publishes his own.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const treeServiceSeoEn = {
  lang: "en",
  group: "tree-service-seo",
  slug: "tree-service-seo",
  title: "Tree service SEO",
  heading: "Tree Service SEO",
  excerpt:
    "I do tree service SEO for tree care companies and arborists: removal, trimming, stump grinding and storm pages, arborist, insurance and permit facts, Google Maps and AI answers, so a homeowner with a problem tree calls you directly instead of going through a lead platform.",
  seo: {
    metaTitle: "SEO for Tree Service Companies and Arborists | Bandziuk",
    metaDescription:
      "Tree service SEO: removal, trimming, stump grinding and storm pages, arborist and insurance facts, Google Maps, reviews and AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Removal, trimming, storm work", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Tree removal near me", "24/7 storm cleanup", "ISA Certified Arborist", "Free estimate"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Tree service SEO audit: website and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off tree service SEO work: removal, trimming, stump grinding and storm pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a tree service company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with tree service SEO",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data for tree jobs in your towns", text: "Removal, trimming, stumps, storm damage" },
        { _key: k("o"), iconName: "layers", title: "Pages by problem and by job", text: "Leaning, dead, fallen — and what your crew does about it" },
        { _key: k("o"), iconName: "shield-check", title: "Arborist, insurance and permit facts", text: "What homeowners check before letting a crew in" },
        { _key: k("o"), iconName: "phone", title: "Emergency pages live before the storm", text: "Tap-to-call and the hours you really answer" },
        { _key: k("o"), iconName: "map-pin", title: "Google Maps for a service-area business", text: "Towns covered, job photos, reviews" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "Cost, timing and safety facts assistants repeat" },
      ],
      prices: [
        { _key: k("r"), label: "Tree service SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a tree service company", value: "from 800 € / month", note: "job pages, maps, reviews, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: websites of service businesses that live on calls",
      subtitle:
        "For a Warsaw auto repair shop that depends on phone calls and Google Maps I worked on local SEO, the map listing and service pages. Alongside it: Felgilab’s wheel-renovation workshop in Warsaw, moved to a new WordPress site with pages for each service and its prices; a Warsaw tyre-storage business with one landing page whose SEO texts the owner edits himself; a renovation and property-investment company; and ScanM2, a 3D laser scanning and BIM firm whose organic traffic grew 29× after its rebuild. A tree service needs the same base: a page for each job, a phone number one tap away and every enquiry counted.",
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
      title: "Get a quote for SEO for your tree service",
      subtitle: "Within one business day you get the fixes I would start with on your site and map listing, and a fixed price.",
      contextLabel: "Tree company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What work do you want more of?", options: ["Large and crane removals", "Trimming and pruning", "Storm and emergency work", "Stump grinding and land clearing"] },
        { _key: k("z"), question: "Where do your jobs come from now?", options: ["Referrals and yard signs", "Lead platforms", "Local Services Ads", "Google search and Maps"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do tree service SEO for tree care companies and arborists: search data, pages for removal, trimming, stump grinding and storm work, Google Maps, trust facts and AI answers. Tree work is dangerous, expensive and done on someone’s property, often a few feet from their house. What the customer fears most is not the price but the damage — a limb through the roof, a crew without insurance, a fine for cutting a protected tree. Most of tree service SEO comes down to answering those fears on the pages people find."),

        h2("Tree service SEO keywords: how homeowners describe a problem tree"),
        p("Homeowners rarely search in arborist terms. They describe what they see: “tree leaning toward house”, “dead tree removal”, “branches over roof”, “tree roots lifting driveway”, “tree fell on fence”. Next to these sit job searches — “tree removal near me”, “tree trimming service”, “stump grinding” — and cost searches such as “how much to remove a large oak”. Keyword research for a tree company maps all three:"),
        li("problem pages that explain what a sign means and when it is urgent"),
        li("job pages for removal, trimming, stump grinding, cabling and land clearing"),
        li("cost answers inside the job pages, with the factors that move the price"),
        li("the towns and suburbs your crews reach, with the ones people search by name used on the pages"),

        h2("Tree removal pages: hazardous trees, crane work and removal cost"),
        p("Removal is the biggest job and the most searched one. A removal page explains how you take a tree down close to a house: climbing and rigging it down in sections, working from a bucket truck, or bringing a crane for the largest trees and tight backyards. It also answers the cost question with the factors you really price by:"),
        li("height and trunk diameter"),
        li("how close the tree stands to the house, the neighbor’s property or power lines"),
        li("access for a bucket truck, crane or chipper"),
        li("whether stump grinding, log removal and cleanup are included"),
        p("If you do crane removals, give them their own page. Few companies own the equipment, the searches are fewer and every job is large."),

        h2("Tree trimming and pruning pages: clearance, deadwood and timing"),
        p("Trimming is the repeat business of a tree company. Searches run from “tree trimming near me” to “when to trim oak trees” and “how much to prune a large maple”. A trimming page says what you remove and why — deadwood, crossing branches, limbs over the roof, clearance for driveways and trucks — and gives the timing rules customers ask about. Where oak wilt is present, pruning oaks during the growing season is discouraged, and many species are best pruned while dormant. Topping, which many homeowners still ask for, deserves a short, polite explanation of why you offer crown reduction instead. Pages like this show the customer that your crew knows trees, not only saws."),

        h2("Stump grinding and land clearing pages for tree service companies"),
        p("Stump grinding is searched on its own — “stump grinding near me”, “stump removal cost” — often by people who cut the tree themselves or whose last contractor left the stump behind. The job is small, fills gaps in the schedule and is usually quoted per stump or by diameter. Land and lot clearing is the opposite: few searches, mostly from builders and owners of rural lots, and large jobs. Both deserve a page, each with photos of the machine and the finished ground."),

        h2("Emergency tree service SEO: storm damage and fallen trees"),
        p("After a thunderstorm, an ice storm or a hurricane, searches like “tree fell on house”, “emergency tree removal” and “storm tree cleanup” jump in the affected towns. The calls go to companies whose emergency page already ranks and whose phone gets answered. An emergency page for a tree service states:"),
        li("what you do first — make the site safe, take the weight off the roof, clear the driveway"),
        li("your real hours: around the clock, or same-day callbacks"),
        li("how emergency work is priced compared with scheduled work"),
        li("that homeowner’s insurance often covers removal when a tree damages a structure, and that the customer should check their own policy"),
        p("If you do not take night calls, say so on the page and in the Google profile. A customer who knows you will call back at seven waits; one who hears nothing calls the next number."),

        h2("ISA certified arborists, insurance and permits: trust facts on a tree service website"),
        p("Before letting a crew climb above their roof, customers check. Tree service websites that rank and convert put the checkable facts in plain text:"),
        li("ISA Certified Arborist credentials with the certificate number, which customers can verify with the International Society of Arboriculture, and TCIA membership or accreditation if you have it"),
        li("liability and workers’ compensation insurance, with certificates sent on request"),
        li("a permits page: many cities and counties require a permit to remove trees above a certain trunk size, protected species or trees in historic districts, and HOAs add their own rules — explain in general terms how you help and link to the official city page"),
        li("photos of your own crew, trucks and equipment instead of stock images"),
        p("These are also the facts AI assistants look for when they decide which company to name."),

        h2("Local SEO for tree service companies: Google Maps without a storefront"),
        p("Most tree companies work from a yard that customers never visit, so the Google Business Profile is a service-area profile with the address hidden. Local tree service marketing on the map depends on:"),
        li("“Tree service” as the primary category, with secondary categories only for work you really do"),
        li("a service area made of the towns your crews reach in a working day"),
        li("photos from jobs — the tree before, the rigging, the clean lawn after — added through the year"),
        li("reviews that mention the job and the town, requested while the crew is still loading the chipper"),
        p(
          "The rest of the map work — listings, review replies, fake competitors — is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Tree service leads vs SEO: shared leads, job size and the work you want"),
        p("“Tree service leads” is searched more often than “tree service SEO”, and many companies buy them from Angi, Thumbtack, HomeAdvisor or through Google Local Services Ads. With bought tree leads, the bigger problem is often the mix rather than the price: many are small trims and price checks sent to several companies, while your climbers and crane wait for a large removal. SEO lets you pick the work. Pages for crane removals, hazardous trees and land clearing bring the jobs your equipment was bought for, and the calls are not shared with anyone."),
        p("Many tree companies keep Local Services Ads for steady volume and use SEO to move the mix toward larger jobs over a season or two."),

        h2("Tree service advertising ideas that feed your search results"),
        p("Some of the best tree service advertising happens offline, and it works harder when search backs it up:"),
        li("truck wraps, yard signs and door hangers on neighboring houses during a job — people then search your company name, and that search should show your site, your profile and your reviews"),
        li("short videos of removals and crane lifts on YouTube, embedded on the matching job page"),
        li("referral partners — roofers, fence builders, property managers — linking to your site"),
        li("a mention on a local news site or a city page after storm cleanup work"),
        p("Each of these adds searches for your name and links to your site, and both help the map and the website rank."),

        h2("Seasonality in tree service SEO: storms, dormant pruning and winter removals"),
        p("Tree work does not peak only in spring. Storm seasons — hurricanes from June to November on the Atlantic and Gulf coasts, summer thunderstorms, ice storms in the North — bring emergency peaks. Winter suits removals and dormant pruning: no leaves, frozen ground that protects lawns, crews with free days. A tree company’s content plan follows its own region: storm pages checked and updated before the storm season, a winter tree removal page published in the fall, pruning-time pages before the dormant season starts."),

        h2("Tree service SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Homeowners now type tree questions straight into ChatGPT, Perplexity or Google’s AI Overviews: “is my tree dead or dormant”, “who pays when a neighbor’s tree falls on my fence”, “how much does it cost to remove a 60-foot pine”. Some answers end with a few company names. Being one of them is the job of generative engine optimization (GEO), also called answer engine optimization (AEO), and for a tree service it rests on:"),
        li("answers to tree-health and responsibility questions written by your arborist, with a name and credential under them"),
        li("cost factors and typical ranges from your own jobs, in plain text"),
        li("certifications, insurance and service area stated the same way on the site, the profile and listings"),
        li("structured data marking the business as a tree service, with its services and area"),
        p(
          "I record what assistants say about your company at the start and again after a few months; the method is on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much tree service SEO costs"),
        li("Tree service SEO audit of the website and the Google Business Profile: from 250 €, one-off, with fixes in order of impact."),
        li("One-off work — removal, trimming, stump grinding and storm pages, a permits page, structured data: 250–700 €."),
        li("Monthly SEO for a tree service company — new pages, map and reviews, AI visibility, reports in calls and estimate requests: from 800 € per month; in very competitive markets from 1,300 € per month."),
        p(
          "Lawn care and landscape companies have their own version on the ",
          link("landscaping SEO", "/landscaping-seo"),
          " page. How I run monthly SEO is described on the ",
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
      title: "Tree service SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does tree service SEO cost?", "An audit of the website and Google profile costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive markets. Send the jobs you want more of and the towns you cover, and I will give a fixed price."],
          ["How long does SEO take for a tree service company?", "Profile fixes and better photos can show in the map within weeks. New job pages usually need a few months to rank, so storm and emergency pages should be live well before your storm season."],
          ["Is it better to buy tree service leads or invest in SEO?", "They do different jobs. Bought leads bring calls this week, often small jobs shared with other companies. SEO takes months and then brings calls that are yours alone, for the jobs your pages target. Many tree companies use both and lean on leads less over time."],
          ["Should a tree service website show prices?", "Show the factors and typical ranges from your jobs — height, diameter, access, cleanup — rather than a fixed price per tree. Customers search for costs before they call, and a clear cost section keeps them on your site instead of a national cost guide."],
          ["Do I need an ISA certified arborist to rank in Google?", "No, Google does not require it. But if someone on your team holds the credential, show it with the number: customers and AI assistants both use it to judge whom to trust with a large tree near the house."],
          ["How do I choose a tree service SEO company or agency?", "Ask whether reports show calls and estimate requests or only rankings, whether they work for another tree company in your area, and who keeps the website and the Google profile if you part ways. Be careful with anyone who promises first place."],
          ["Can you do SEO for a US tree service from Poland?", "Yes. All the work is remote and in English. I work on Central European Time, so my afternoons and evenings fall on US mornings and middle of the day — enough for calls on most weekdays. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your tree service company: what to send me"),
        p(
          "Send me the company name, your site and Google Maps listing, the jobs you would like more of — large removals, trimming, storm work or stump grinding — the towns you cover and where your jobs come from today. You will hear back within one business day with what I would change first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
