// Landing page fixture: Roofing SEO (EN), group «trades».
// Semantic core: ref/trades.csv, roofing group: seo for roofing 2400, seo
// roofing 1900, roofing seo 1900, roofing company seo 880, seo for roofing
// companies 720, roofing seo company 720, roofing seo companies 720, roofing
// seo service 590, roofing seo services 590, roofing seo agency 320, local seo
// for roofing companies 260, roofing contractor seo 170, seo for roofing
// contractors 170, seo for roofing company 110, roofing seo marketing 90, best
// roofing seo company 90, best roofing seo companies 90.
// Mention only: roofing leads 1000 (lead-selling intent) — one H2 comparing
// bought roofing leads with SEO. Ignored: roofing webmasters 110 (brand).
// Intent: ref/intent-check-trades.md — «roofing seo» vs «seo for contractors»
// 0 shared URLs → own page, separate from /seo-for-contractors.
// NOT on this page: general contractor SEO (/seo-for-contractors), map-only
// local SEO in depth (/local-seo-for-contractors), website builds
// (/roofing-websites, /roofing-website-design).
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, h3, li, link, k } from "./pt";

export const roofingSeoEn = {
  lang: "en",
  group: "roofing-seo",
  slug: "roofing-seo",
  title: "Roofing SEO",
  heading: "SEO for Roofing Companies",
  excerpt:
    "I do SEO for roofing companies and roofing contractors: pages for repair, replacement, storm damage and each roof type, Google Maps and reviews, so homeowners with a roof problem call you, not a lead seller.",
  seo: {
    metaTitle: "Roofing SEO: Storm, Repair and Replacement | Bandziuk",
    metaDescription:
      "Roofing SEO services: storm damage, repair and replacement pages, Google Maps, reviews and AI answers, measured in inspection requests. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Storm, repair, replacement", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Hail damage roof repair", "Top 3 on the map", "Free roof inspection", "Calls you own"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Roofing SEO audit: website and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off roofing SEO work: storm, repair, replacement and area pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a roofing company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with roofing SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data for roof jobs in your towns", text: "Repair, replacement, storm damage, roof types" },
        { _key: k("o"), iconName: "shield-check", title: "Storm and insurance claim pages", text: "Ready before the hail season, not after it" },
        { _key: k("o"), iconName: "layers", title: "A page for each roof system", text: "Shingle, metal, flat — with your own projects" },
        { _key: k("o"), iconName: "map-pin", title: "Google Maps and service-area pages", text: "Real towns, real roofs, no copied pages" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "License, warranty and insurance facts assistants quote" },
        { _key: k("o"), iconName: "phone", title: "Reports in calls and inspection requests", text: "Compared with what bought leads cost you" },
      ],
      prices: [
        { _key: k("r"), label: "Roofing SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a roofing company", value: "from 800 € / month", note: "pages, maps, reviews", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: local service websites I have optimized",
      subtitle:
        "SEO work for service businesses that win customers from local search, maps and reviews — the same work a roofing company needs: pages for each service and area, a strong Google profile and reports in calls and bookings.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your roofing company",
      subtitle: "I reply within one business day with what I would fix first in your website and Google profile, and a fixed price.",
      contextLabel: "Roofing company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you want more of?", options: ["Roof replacements", "Repairs and storm damage", "Commercial and flat roofs", "All of it"] },
        { _key: k("z"), question: "Where do your jobs come from now?", options: ["Referrals", "Bought leads", "Local Services Ads", "Door knocking after storms"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for roofing companies: the website, the Google Business Profile and the pages a homeowner finds when the roof leaks, the hail has passed or the shingles are twenty years old. Roofing jobs are large and rare — a homeowner replaces a roof once or twice in a lifetime — so a single extra replacement job a month pays for the work many times over. That is also why every roofer in town fights for the same searches."),

        h2("Why SEO for roofing is harder than for most local trades"),
        p("Roofing is one of the most competitive local niches in search. On a search like “roof replacement” in a mid-sized city you compete with:"),
        li("local roofers who have collected reviews for a decade"),
        li("national replacement brands with big advertising budgets"),
        li("lead sellers and directories that rank pages for every town"),
        li("Google Local Services Ads with the Google Guaranteed badge at the very top"),
        p("Generic SEO packages rarely move a roofer up in this crowd. What works is depth: the most useful page in your area for each kind of roof job, a profile with more fresh reviews than the competitors on the map, and pages that answer the questions a homeowner has before letting a roofer climb up."),

        h2("Roofing SEO keywords: what homeowners type before they call a roofer"),
        p("Before any page is written I pull the real search data for your jobs and towns. Roofing searches fall into a few clear groups, and each group needs a different page:"),
        li("emergency and damage — “roof leak repair”, “storm damage roof repair”, “emergency roof tarp”"),
        li("replacement and cost — “roof replacement cost”, “new roof near me”, “how long does a roof last”"),
        li("roof type — “metal roofing contractor”, “flat roof repair”, “shingle roof installation”"),
        li("checks and paperwork — “roof inspection”, “roof inspection for home sale”, “roof insurance claim help”"),
        p("The data also shows which of these searches trigger the map, which trigger Local Services Ads and which already show an AI Overview — and that decides where effort goes first."),

        h2("Storm and hail damage searches in SEO for roofing companies"),
        p("After a hailstorm or a windstorm, searches for roof inspection and storm damage in the affected towns jump within hours and stay high for weeks. The roofing company whose storm pages already rank gets those calls; pages written after the storm usually start ranking when the demand is gone. So storm content is prepared in advance: a page on hail damage, a page on wind damage, each with photos of real damage you have repaired and a clear way to book an inspection."),
        p("Homeowners are also wary of out-of-town crews who appear after every storm. Your pages should show the opposite: a local address, years in the area, a license number and roofs you have done on nearby streets."),
        h3("Insurance claim questions on roofing storm pages"),
        p("Most storm jobs go through the homeowner’s insurance, and searches like “does insurance cover hail damage on a roof” are common. A good storm page explains the steps in plain words: the inspection, the photos you take, the adjuster’s visit, what you do if the claim is approved. It does not promise that insurance will pay; that is not yours to promise, and pages that do it lose trust."),

        h2("Roof replacement, repair and inspection pages in roofing company SEO"),
        p("Replacement, repair and inspection are three different decisions, and putting them on one “Services” page loses all three searches. Roofing company SEO gives each one its own page:"),
        li("roof replacement — materials, the order of work, how long a tear-off takes, a price range per square if you give one, warranty and financing"),
        li("roof repair — leaks, missing shingles, flashing, when repair is enough and when it is not"),
        li("roof inspection — after storms, before a home sale, for insurance, what the report includes"),
        p("The “repair or replace” question is one of the most searched in roofing. A page that answers it fairly, with the signs that point either way, ranks well and brings homeowners who trust you before the first call."),

        h2("Metal, shingle and flat roofs: SEO for roofing contractors with several roof systems"),
        p("A roofer who installs asphalt shingles, standing seam metal and flat roofs (TPO, EPDM, modified bitumen) is really in three markets, with different customers and different searches. Metal roofing buyers compare lifespan and cost; flat roof searches come mostly from commercial buildings and property managers; shingle searches are the volume of residential work. Each system gets a page with your projects, the manufacturers you are certified with and the questions buyers of that material ask."),

        h2("Local SEO for roofing companies: Google Business Profile and service-area pages after storms"),
        p("The map results bring a large share of roofing calls. Local SEO for roofing companies starts with the profile: “Roofing contractor” as the primary category, every service listed, the real service area, weekly photos from jobs and answers to common questions."),
        p(
          "Area pages are where roofers most often cross the line. After a storm it is tempting to publish fifty town pages with the same text. Google treats those as doorway pages and filters them. An honest service-area page has roofs you replaced in that town, reviews from customers there and local details such as typical roof age or HOA rules. A town gets a page when you have work to show there. More on the map side on the ",
          link("local SEO for contractors", "/local-seo-for-contractors"),
          " page.",
        ),

        h2("Reviews, project photos and financing in roofing contractor SEO"),
        p("A new roof is one of the largest bills a homeowner pays, so they read reviews before they call. Roofing contractor SEO sets up a routine: a text with a review link the day the crew leaves, an answer to every review within days, and customers asked to name the job and the town. Before-and-after photos with the roof type and town written next to them work both for search and for the decision."),
        p("Financing deserves its own page if you offer it. “Roof financing” and “roof replacement with no money down” are searched by homeowners who would otherwise postpone the job."),

        h2("Buying roofing leads vs SEO: Local Services Ads, lead platforms and your own calls"),
        p("Roofing leads are sold by lead platforms such as Angi or HomeAdvisor and by specialized roofing lead sellers. The same lead often goes to several roofers, and you pay for it whether you win the job or not. Google Local Services Ads charge per lead too, and show only a handful of businesses with the Google Guaranteed badge."),
        p("Bought leads start working this week and stop when the payments stop. SEO for roofing companies takes months to build, but the calls it brings come to you alone, without a per-lead fee. Many roofers keep Local Services Ads for the storm season and use SEO to depend less on bought leads over time. I do the SEO part; I do not run ads or sell leads."),

        h2("AI SEO for roofing companies: visibility in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Homeowners now ask ChatGPT, Perplexity or Google’s AI Overviews “is it worth replacing a 20-year-old roof”, “metal or shingle roof” or “who is a reliable roofer near me”. The answers are put together from sources the assistant can read and check. Getting into them is called generative engine optimization (GEO) or answer engine optimization (AEO), and for a roofer it means:"),
        li("license number, insurance, manufacturer certifications and warranty terms written as plain text"),
        li("clear answers to cost, lifespan and repair-or-replace questions on your own pages"),
        li("structured data naming the business, roof services and service area"),
        li("the same company details on every listing, so you are not mixed up with a similarly named roofer"),
        p(
          "I check how assistants describe your company before and after the work. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Seasonality in roofing SEO marketing: a year-round plan"),
        p("Roofing demand follows the weather: spring and summer storms, the rush to finish replacements before winter, a quiet period when snow and cold stop most tear-offs. Roofing SEO marketing uses the quiet months to build what the busy months need — storm pages, replacement guides, new project photos — because pages need weeks to rank. In regions with hurricane or hail seasons the plan is set around those dates."),

        h2("Choosing a roofing SEO company or agency"),
        p("Many agencies sell roofing SEO as a package with ads and lead generation, often to several roofers in the same area. I am a single SEO specialist who also builds websites, so the person who audits your site is the one who changes it. Whoever you choose, ask:"),
        li("Will you report calls and inspection requests, or only positions?"),
        li("Do you work for another roofer in my area?"),
        li("Are service-area pages written only for towns where we have real jobs?"),
        li("Who owns the website, the profile and the content if we stop?"),

        h2("How much roofing SEO services cost"),
        li("Roofing SEO audit of the website and the Google Business Profile: from 250 €, one-off. You get a list of fixes ordered by impact."),
        li("One-off work — storm, repair, replacement and area pages, profile clean-up, structured data: 250–700 €."),
        li("Monthly SEO for a roofing company — new pages, maps, reviews and reporting: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "If the website itself is slow or outdated, the ",
          link("roofing websites", "/roofing-websites"),
          " and ",
          link("roofing website design", "/roofing-website-design"),
          " pages describe how I build and design them; SEO for contractors in other trades is on the ",
          link("SEO for contractors", "/seo-for-contractors"),
          " page. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Roofing SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a roofing company cost?", "An audit of the website and Google profile costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive cities. After a short description of the company I give a fixed price."],
          ["How long does roofing SEO take to bring calls?", "Profile fixes can show in the map within weeks. New roofing pages usually need three to six months to rank, because roofing is one of the most competitive local searches. Storm pages should be in place before the season starts."],
          ["Is SEO better than buying roofing leads or Local Services Ads?", "They do different jobs. Bought leads and Local Services Ads bring calls now and cost per lead, often shared with other roofers. SEO takes months and then brings calls that are yours alone. Many roofers use both."],
          ["How do I find the best roofing SEO company?", "Ask for reports in calls and inspection requests, check that they do not work for a competitor in your area, and make sure the website and profile stay yours. Be careful with anyone who promises first place on Google."],
          ["Can I do SEO for my roofing business myself?", "Part of it, yes: keeping the Google profile complete, adding photos of every finished roof and asking each customer for a review. Keyword research, page structure and technical fixes usually cost less when done by someone who does them every day."],
          ["Can ChatGPT do SEO for a roofer?", "It can draft texts. It cannot see search data for your towns, your competitors on the map or your site’s technical problems, and generic roofing texts without your projects rarely rank."],
          ["Do you do roofing SEO for companies outside Poland?", "Yes. Roofing SEO is done remotely: the website, the profile and the search data for your towns in the US, Canada, the UK or Australia. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your roofing company: what to send me"),
        p(
          "Send the company name, links to the website and the Google Maps profile, the roof jobs you want more of — replacements, storm repairs, metal or flat roofs — and the towns you cover. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
