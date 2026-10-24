// Landing page fixture: Landscaping SEO (EN), group «trades».
// Semantic core: ref/trades.md / trades.csv, landscaping group (12 phrases,
// sum 1220): landscaping seo 320, seo landscaping 320, seo for landscaping
// 140, seo for landscaping company 110, seo for landscaping companies 110,
// landscaping seo services 70, landscaping seo service 70, landscaping seo
// company 30, local seo for landscaping companies 20, landscaping seo agency
// 10, seo for landscaping businesses 10, seo keywords for landscaping 10.
// Intent: ref/intent-check-trades.md has no landscaping pair; the group has no
// overlap with plumbing/HVAC/electrical/roofing phrases and is small, so one
// page covers it, local part included (local seo for landscaping companies
// 20 — no separate page).
// NOT on this page: website design and builds (/landscaping-website-design,
// /lawn-care-website); general contractor map results
// (/local-seo-for-contractors); other trades (/seo-for-contractors).
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, h3, li, link, k } from "./pt";

export const landscapingSeoEn = {
  lang: "en",
  group: "landscaping-seo",
  slug: "landscaping-seo",
  title: "Landscaping SEO",
  heading: "Landscaping SEO",
  excerpt:
    "I do SEO for landscaping companies — design-build, lawn care and maintenance, hardscaping: pages for each service and suburb, project galleries, Google Maps and a plan around the seasons, so customers find you before spring.",
  seo: {
    metaTitle: "SEO for Landscaping Companies and Lawn Care | Bandziuk",
    metaDescription:
      "Landscaping SEO services: service and suburb pages, project galleries, Google Maps, seasonal planning and AI answers for landscapers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Service + suburb pages", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Landscaper near me", "Paver patio projects", "Weekly lawn care", "Free estimate"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Landscaping SEO audit: website and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off landscaping SEO work: service, suburb and project pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a landscaping company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with landscaping SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "Keyword research for landscaping", text: "Design, maintenance and hardscape searches by suburb" },
        { _key: k("o"), iconName: "layers", title: "Pages for each service and suburb", text: "Patios, retaining walls, lawn care, irrigation" },
        { _key: k("o"), iconName: "image", title: "Project galleries with text", text: "Before and after, plants, materials, location" },
        { _key: k("o"), iconName: "trending-up", title: "A plan built around the seasons", text: "Spring pages published in winter" },
        { _key: k("o"), iconName: "map-pin", title: "Google Maps for your service area", text: "Categories, suburbs, project photos, reviews" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "Costs and projects assistants can quote" },
      ],
      prices: [
        { _key: k("r"), label: "Landscaping SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a landscaping company", value: "from 800 € / month", note: "pages, galleries, maps", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: project-led and local service websites",
      subtitle:
        "None of these are landscaping companies. They are the closest work I have: an architecture studio and a renovation company that sell on photos of finished projects, and local service businesses that get their calls from Google Maps.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your landscaping company",
      subtitle: "I reply within one business day with what I would fix first on your website and Google profile, and a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What is most of your work?", options: ["Design and build", "Lawn care and maintenance", "Hardscaping", "Commercial contracts"] },
        { _key: k("z"), question: "When do you need new customers most?", options: ["Before spring", "All season", "Fall and winter work", "Not sure"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for landscaping companies: keyword research, pages for each service and suburb, project galleries, Google Maps and a plan that follows the seasons. Landscaping SEO differs from other trades in two ways. The work is judged before it is bought — customers look at photos of finished gardens and patios before they call. And a large share of the year’s demand arrives in a few spring weeks, so the work has to be done before them."),

        h2("SEO for landscaping: design-build, maintenance and hardscaping are separate markets"),
        p("A homeowner planning a new backyard, a property manager looking for weekly mowing and someone who wants a paver patio search for different things, at different times, with different budgets. SEO for landscaping treats them as three markets."),
        h3("Design-build landscaping searches"),
        p("Large projects: full yard redesigns, planting plans, outdoor living areas. Searches such as “landscape designer near me” or “backyard landscaping ideas” come months before the work starts. These customers research, compare portfolios and expect a site visit and often a design fee."),
        h3("Lawn care and maintenance searches"),
        p("Mowing, fertilization, aeration, leaf removal, shrub trimming. The searches are short and local — “lawn mowing service [suburb]” — and price-sensitive, but one customer can stay for years."),
        h3("Hardscaping searches"),
        p("Patios, retaining walls, walkways, outdoor kitchens, fire pits. The searches name materials — “paver patio”, “natural stone retaining wall” — and the customer wants to see similar finished projects and a price range."),
        p("One “Services” page listing all three ranks for none of them. Each needs its own pages and its own photos."),

        h2("SEO keywords for landscaping: keyword research by service, season and suburb"),
        p("Keyword research for landscapers starts from your price list and your map, not from an export of a keyword tool. What I collect:"),
        li("the services you want more of, in the words customers use — “lawn care” or “yard maintenance”, “landscaper” or “landscape contractor”, “pavers” or “patio”"),
        li("the suburbs and towns you work in, and which of them people search by name"),
        li("the months when each search rises and falls — mowing and planting in spring, irrigation in early summer, cleanups and aeration in fall"),
        li("which searches show the map, which show directories like Yelp or Angi, and which show AI Overviews"),
        p("The result is a short list of pages to build, ordered by what each service earns you, rather than a spreadsheet of thousands of phrases."),

        h2("Landscaping SEO through the seasons: planning pages before spring"),
        p("In the northern US, Canada and the UK most landscaping demand comes in March to May; in Australia, in September to November. New pages take two to four months to rank, so the pages for spring work have to go live in winter. A yearly plan looks like this:"),
        li("winter — new service and suburb pages, write-ups of last season’s projects, technical fixes while the crews are quiet"),
        li("early spring — new photos and updates in the Google profile, review requests to last year’s customers, quote forms checked"),
        li("summer — irrigation, drought-tolerant planting and outdoor living pages, published ahead of the next wave"),
        li("fall — cleanups, aeration and overseeding, then snow removal or holiday lighting if you offer them in the off-season"),
        p("Off-season services deserve their own pages: they keep crews busy and the website active all year."),

        h2("Landscaping project galleries that rank: photos with text"),
        p("Landscaping is sold on photos, but a gallery of eighty images without words gives Google nothing to rank. A project page that works for search and for customers has:"),
        li("a title naming the job and the place — “Paver patio and seat wall in [suburb]”"),
        li("before and after photos, compressed so the page still loads quickly"),
        li("a few paragraphs: what the customer wanted, the plants and materials, how long it took, what was difficult"),
        li("links to the matching service page and suburb page"),
        p("Ten projects described like this do more for a landscaping website than a hundred untitled photos, and they are what AI answers can point to when someone asks for examples."),

        h2("Lawn care SEO: pages for recurring customers and maintenance plans"),
        p("Maintenance pays the bills between large projects, and its customers want something different: reliability, a fixed weekly or monthly price and easy communication. Lawn care and maintenance pages should:"),
        li("explain what a weekly, biweekly or seasonal plan includes"),
        li("show the suburbs your crews cover and, if routes allow, the days they are there"),
        li("let the customer request a quote or sign up online, connected to the software you use — Jobber, LMN, Aspire, Service Autopilot or similar"),
        li("mention treatments that need a license where your state or region requires one, such as pesticide application, and that you hold it"),
        p("Recurring customers also become the steadiest source of reviews over the years, as long as someone asks them."),

        h2("Commercial landscaping SEO: maintenance contracts with HOAs and property managers"),
        p("Commercial maintenance contracts — homeowners’ associations, apartment complexes, office parks, retail centers — are decided by property managers and boards, often through a bid. They search for “commercial landscaping company [city]” or “HOA landscape maintenance” and check whether you can handle the size of the site, carry the insurance, give references and keep a fixed schedule. A commercial page lists the property types you maintain, what a typical contract includes — mowing, seasonal color, irrigation checks, snow removal — your crew size and equipment, and how a site walk and a bid are arranged. These searches are few, but a won contract can run for several seasons."),

        h2("Local SEO for landscaping companies: Google Maps by suburb"),
        p("For “landscaper near me” and “lawn care near me” Google shows the map first. A landscaping company’s Google Business Profile needs:"),
        li("a primary category for the main work — “Landscaper”, “Lawn care service” or “Landscape designer” — and secondary ones for the rest"),
        li("a service area made of the suburbs you really cover, with the address hidden if customers do not visit you"),
        li("photos of finished projects every week or two during the season, named by job and suburb"),
        li("reviews that mention the work and the area, asked for at project handover or after the first month of maintenance"),
        p(
          "The rules for contractors’ map results in general are on the ",
          link("local SEO for contractors", "/local-seo-for-contractors"),
          " page.",
        ),

        h2("Technical SEO for landscaping websites: photo-heavy pages and speed"),
        p(
          "Landscaping websites are full of large photos, sliders and drone video, and they are often slow. Google treats a page that needs more than 2.5 seconds to show its main content on a phone as slow, and visitors leave. The usual fixes: images resized and served in modern formats, galleries that load as the visitor scrolls, a quote form that works on a phone, titles that name the service and the suburb, and structured data for the business, its services and areas. If the site has to be rebuilt, the ",
          link("landscaping website design", "/landscaping-website-design"),
          " and ",
          link("lawn care websites", "/lawn-care-website"),
          " pages describe how I design and build them.",
        ),

        h2("AI SEO for landscapers: visibility in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Homeowners ask ChatGPT and Google’s AI Overviews “how much does a paver patio cost”, “what grass grows in shade” or “best landscaping companies near me”. The answers come from pages the assistant can read and trust. For a landscaping company, generative engine optimization (GEO) and answer engine optimization (AEO) mean:"),
        li("cost ranges for patios, retaining walls, sod and maintenance plans written on your pages, with what changes the price"),
        li("planting and lawn care answers for your climate, not copied from a national guide"),
        li("project pages with text that assistants can cite as examples"),
        li("the business name, suburbs, licenses and insurance stated the same way on the site, the profile and listings"),
        p(
          "I check how assistants describe your company before and after the work. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Choosing a landscaping SEO company or agency: questions to ask"),
        p("Some agencies work only with landscapers and lawn care companies, many general SEO companies take any trade, and there are specialists like me who work alone and also build websites. Questions to ask any landscaping SEO company:"),
        li("Will the work be planned around my season, or the same amount every month?"),
        li("Will you report quote requests and signed contracts, or only traffic?"),
        li("Who owns the website, the photos and the Google profile if we stop?"),
        li("Are the suburb pages written with my projects, or copied with the name changed?"),

        h2("How much landscaping SEO services cost"),
        li("SEO audit of the website and the Google Business Profile: from 250 €, one-off, with fixes listed in order of impact."),
        li("One-off landscaping SEO work — service, suburb and project pages, profile clean-up, structured data: 250–700 €."),
        li("Monthly SEO for a landscaping company — seasonal pages, project write-ups, maps and reviews, reporting: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "Many landscaping businesses get most of the result from the audit and a winter of page work before spring. Other trades will find their version on the ",
          link("SEO for contractors", "/seo-for-contractors"),
          " page; all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Landscaping SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO cost for a landscaping company?", "An audit of the website and Google profile costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive cities. I give a fixed price after a short description of your services and area."],
          ["When should a landscaping company start SEO?", "In fall or winter, if the goal is more work next spring. New pages need two to four months to rank, so pages started in March often begin bringing calls after the busiest weeks are over."],
          ["What does SEO for landscaping businesses include?", "Keyword research, pages for each service and suburb, project pages with text, the Google Business Profile and reviews, technical fixes and visibility in AI answers — all planned around your season."],
          ["Is SEO worth it for a small lawn care business?", "Usually in a limited form: a complete Google profile, a few service pages and steady reviews. Lawn care customers often stay for years, so each new one is worth more than a single job. The audit shows whether monthly work makes sense for you."],
          ["Can I do landscaping SEO myself?", "Part of it, yes: adding project photos with a short description, keeping the Google profile current and asking customers for reviews. Keyword research, page structure and the technical side usually cost less when done by someone who does them every day."],
          ["Is SEO better than Angi, Thumbtack or Yelp for landscapers?", "They do different things. Platforms bring requests now and charge for them, often sending the same request to several companies. SEO takes months and then brings inquiries that are yours alone. Many landscapers use a platform in the first season and rely on it less as search starts working."],
          ["Can ChatGPT write the content for my landscaping website?", "It can help with drafts. It does not know your projects, your prices, the plants that do well in your region or the suburbs you cover, and text without those details rarely ranks or convinces anyone."],
          ["Do you do landscaping SEO outside Poland?", "Yes. Landscaping SEO is done remotely — the website, the profile and the search data for your suburbs — for companies in the US, Canada, the UK or Australia. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your landscaping company: what to send me"),
        p(
          "Send the company name, the website and Google Maps links, the work you want more of — design-build, maintenance, hardscaping or commercial contracts — the suburbs you cover and when your season starts. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
