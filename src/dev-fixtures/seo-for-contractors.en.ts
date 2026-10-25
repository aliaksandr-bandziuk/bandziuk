// Landing page fixture: SEO for contractors (EN), topic 7a.
// Semantic core: research/pseo/page-core/contractors.md: seo for contractors
// 390, seo services for contractors 260, contractor seo services 210, seo for
// general contractors 170, seo agency for contractors 140, seo company for
// contractors 70, seo for home service contractors 20, contractor seo
// marketing 20, on-page seo for contractors 10, best seo for contractors 10.
// PAA: Is SEO still relevant in 2026? How much should I expect to pay for SEO?
// Can ChatGPT do SEO? Can I do SEO on my own?
// Intent: research/pseo/intent-check-contractors.md — «local seo for
// contractors» 0 shared URLs → own page 7b (/local-seo-for-contractors);
// «contractor marketing agency» 0 shared → mentioned only.
// Different from /seo-for-construction-companies (0 shared URLs): homeowner
// jobs, calls and estimate visits, lead platforms and Local Services Ads.
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, li, link, k } from "./pt";

export const seoForContractorsEn = {
  lang: "en",
  group: "seo-for-contractors",
  slug: "seo-for-contractors",
  title: "SEO for contractors",
  heading: "SEO for Contractors",
  excerpt:
    "I do SEO for contractors — general contractors, remodelers and specialty trades: service and area pages, Google Maps and reviews, so homeowners who search for your kind of job call you instead of a lead platform.",
  seo: {
    metaTitle: "SEO for Contractors and General Contractors | Bandziuk",
    metaDescription:
      "SEO services for contractors: pages for each job and area, Google Maps, reviews and AI answers, measured in calls and estimate requests. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Website + Google Maps", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Kitchen remodel near me", "Top 3 on the map", "Calls you own", "Free estimate"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Contractor SEO audit: website and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off contractor SEO work: service and area pages, profile, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a contractor", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO services for contractors",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data for your jobs and towns", text: "What homeowners actually type, before any page is written" },
        { _key: k("o"), iconName: "layers", title: "A page for each job and each area", text: "Remodels, roofs, basements — with the towns you cover" },
        { _key: k("o"), iconName: "map-pin", title: "Google Maps and your business profile", text: "Categories, service areas, photos of real jobs" },
        { _key: k("o"), iconName: "message-circle", title: "A review routine tied to finished jobs", text: "Asked at the end of the job, answered within days" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "Facts and structured data assistants can quote" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in calls and estimate requests", text: "Not in positions alone" },
      ],
      prices: [
        { _key: k("r"), label: "SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a contractor", value: "from 800 € / month", note: "pages, maps, reviews", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: search results on websites I have optimised",
      subtitle:
        "A renovation company, an auto repair shop that gets its work from local searches and other local businesses where the same work brought measurable search traffic.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your contracting business",
      subtitle: "I reply within one business day with what I would fix first in your website and Google profile, and a fixed price.",
      contextLabel: "Business name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where does your work come from now?", options: ["Referrals", "Google", "Lead platforms", "Not sure"] },
        { _key: k("z"), question: "What kind of contractor are you?", options: ["General contractor", "Remodeling", "Specialty trade", "Several services"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for contractors myself — the website, the Google Business Profile and the pages for each job and area — so the person who finds the problems is the one who fixes them. Contractor SEO has one measure: how many homeowners who search for your kind of job end up calling you or asking for an estimate, instead of going to a competitor or a lead platform."),

        h2("What SEO for contractors covers: the website, Google Maps and AI answers"),
        p("When a homeowner searches for “bathroom remodel” or “roof repair near me”, three places decide who gets the call:"),
        li("the map results — three businesses with a rating and a phone number, shown above everything else for local searches"),
        li("the regular results, where your site competes with lead platforms, directories and national franchises"),
        li("AI answers — Google AI Overviews and assistants like ChatGPT, which recommend local contractors and quote what they can read about them"),
        p(
          "The map results depend mostly on your Google Business Profile and reviews; that part is covered in detail on the ",
          link("local SEO for contractors", "/local-seo-for-contractors"),
          " page. This page is about the whole picture: the website pages that rank and convince, and how they work together with the profile.",
        ),

        h2("Contractor SEO keywords: the job, the problem and the town"),
        p("Homeowners rarely search for “contractor”. They search for the job — “basement finishing”, “deck builder”, “kitchen remodel cost” — or for the problem — “leaking roof”, “water damage repair” — usually with a town or “near me”. Before any page is written I pull the real search data for your jobs and towns:"),
        li("how many people search for each job in your area"),
        li("which searches show the map, which show lead platforms, which show AI Overviews"),
        li("which jobs you can realistically rank for in months, and which take longer"),
        p("Pages are then built around the phrases homeowners use, not around how your office names the work."),

        h2("Service pages and service-area pages in contractor SEO"),
        p("A single “Services” page cannot rank for ten different jobs. Contractor SEO gives each job you want more of its own page — what is included, typical timing, a price range where you can give one, projects of that type and answers to the questions customers ask on the phone. Each town or area you cover gets a page with projects from there."),
        p("Area pages only work with real content: projects, reviews and details from that area. A hundred copies of one page with the town name swapped are a known pattern, and Google filters them out."),

        h2("SEO for general contractors: ranking for many jobs at once"),
        p("A general contractor competes with specialists in every service: the roofer for roofs, the remodeler for kitchens, the basement company for basements. Winning against them means each service page has to be as complete as a specialist’s — scope, process, prices, projects — and the site has to show that one company handles the whole job, from permits to finishing."),
        p("I start with the services that bring the most profit and have realistic competition, and add the rest one by one, instead of publishing twenty thin pages at once."),

        h2("On-page and technical SEO for contractor websites"),
        p("Most contractor sites lose positions on the basics: slow pages full of uncompressed photos, one title on every page, the phone number as an image, projects without text. The technical part of contractor SEO fixes this:"),
        li("titles and headings that name the job and the area"),
        li("pages that load in under 2.5 seconds on a phone"),
        li("project photos with text: the job, the town, what was done"),
        li("structured data for the business, its services, areas and reviews"),
        li("the same name, address and phone on the site, the profile and directories"),
        p(
          "If the website itself needs to be rebuilt, the ",
          link("websites for contractors", "/website-for-contractors"),
          " page describes how I build them.",
        ),

        h2("Reviews in SEO for contractors"),
        p("Homeowners read reviews before they let a contractor into the house, and reviews also move a business up in the map results. I set up a simple routine: the customer is asked at the end of the job, by text with a direct link; every review gets an answer within a few days; reviews mention the job and the area in their own words. Bought reviews and asking only happy customers break Google’s rules and are easy to detect, so neither is used."),

        h2("SEO, lead platforms and Local Services Ads for contractors"),
        p("Lead platforms such as Angi, HomeAdvisor or Thumbtack sell the same lead to several contractors, and the price per lead keeps rising. Google Local Services Ads charge per lead too and show only a few businesses. Both bring work from the first week; both stop the day you stop paying."),
        p("SEO is slower: new pages take two to four months to rank. But the calls it brings come to you alone, and they do not cost per lead. Many contractors keep a paid channel for the busy season and build SEO so that, a year later, they depend on it less. I do the SEO part; paid ads and lead platforms are not something I manage."),

        h2("AI SEO for contractors: visibility in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("More homeowners now ask ChatGPT, Perplexity or Google’s AI Overviews “who is a good roofer near me” or “how much does a basement remodel cost” before they open any website. The answers are built from what the assistant can read and trust: your profile, reviews, directory listings and your own pages. Getting into them is called generative engine optimization (GEO) or answer engine optimization (AEO), and for a contractor it is part of the same SEO work:"),
        li("services, areas, licence, insurance and years in business written as plain facts an assistant can quote"),
        li("structured data that names the business, its services and the areas it covers"),
        li("answers to cost, timing and permit questions written on the service pages"),
        li("the same business details everywhere, so assistants do not confuse you with another company"),
        p(
          "I check how assistants describe your business before and after the work. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Choosing an SEO company or agency for contractors"),
        p("A contractor marketing agency usually sells a package — ads, social media, sometimes leads — with SEO as one part. An SEO company for contractors focuses on search, but the work is often done from templates for hundreds of clients. I am a single SEO specialist who also builds websites. Whoever you choose, ask the same questions:"),
        li("Will you report calls and estimate requests, or only positions?"),
        li("Who owns the website, the profile and the content if we stop working together?"),
        li("Are the area pages written for real areas, with real projects?"),
        li("Is there a minimum contract, and why?"),

        h2("How much SEO services for contractors cost"),
        li("SEO audit of the website and the Google Business Profile: from 250 €, one-off. You get a list of fixes in order of impact."),
        li("One-off work — service and area pages, profile clean-up, structured data: 250–700 €."),
        li("Monthly SEO for a contractor — new pages, maps, reviews routine and reporting: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "For many contractors a correct profile and a handful of strong service pages give most of the effect, and the audit shows whether monthly work is needed at all. Construction companies working on larger projects will find more on the ",
          link("SEO for construction companies", "/seo-for-construction-companies"),
          " page. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for contractors: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much should a contractor expect to pay for SEO?", "An audit of the website and Google profile costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive cities. After a short description of the business I give a fixed price."],
          ["How long does SEO take for a contractor?", "Changes to the Google Business Profile can show in the map results within weeks. New service and area pages usually take two to four months to rank, longer in big cities and for competitive jobs like roofing."],
          ["Is SEO still worth it for contractors with AI search?", "Yes. AI Overviews and assistants build their answers from the same sources SEO works on: your profile, reviews and pages. A contractor who is invisible in search is usually invisible in AI answers too."],
          ["Can I do SEO for my contracting business myself?", "Part of it, yes: keeping the Google profile complete, adding photos of finished jobs and asking for reviews. Keyword research, page structure and the technical side usually take less time and money when done by someone who does them every day."],
          ["Can ChatGPT do SEO for a contractor?", "It can help write drafts and ideas. It cannot see your real search data, your competitors’ positions or your site’s technical problems, and texts published without facts about your work rarely rank."],
          ["Is SEO better than Angi, HomeAdvisor or Local Services Ads?", "They solve different problems. Platforms and ads bring leads now and cost per lead; SEO takes months and then brings calls without paying per lead. Many contractors use both and shift the budget to SEO as it starts working."],
          ["Do you do SEO for contractors outside Poland?", "Yes. Contractor SEO is done remotely: the website, the profile and the search data for your towns. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your contracting business: what to send me"),
        p(
          "Send the business name, a link to the website and the Google Maps profile, the jobs you want more of and the towns you cover. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
