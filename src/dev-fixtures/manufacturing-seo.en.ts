// Landing page fixture: Manufacturing SEO and SEO for manufacturers (EN),
// group «manufacturing-seo». New page.
// Semantic core: ref/nonprofits-manufacturers.md / .csv (US) and BRIEF.md:
// manufacturing seo / seo manufacturing / seo for manufacturing / seo for
// manufacturing industry / seo for manufacturers / industrial seo 320 each
// (H1, metaTitle, several H2) · manufacturing seo agency 140 (H2, positioned as
// one consultant instead of an agency) · seo for manufacturing companies 110
// (H2) · manufacturing seo services 90 (H2 on cost) · manufacturing seo
// companies 50 / company 50 (H2) · seo agency for manufacturers 40 / for
// manufacturing 40 (FAQ) · manufacturing directory 140 + thomas manufacturing
// 210 (Thomasnet and directories H2) · manufacturing lead generation 110 /
// manufacturing leads 90 (measured in RFQs H2) · local seo for manufacturers
// 10 (regional H2).
// PAA: What is SEO in manufacturing? (H2 + FAQ) · What are the top SEO
// agencies for manufacturing companies? (agency H2 + FAQ) · How much does a
// good SEO cost? (cost H2 + FAQ) · Can ChatGPT do SEO? (FAQ).
// Intent: ref/intent-check-nonprofits-manufacturers.md — «manufacturing seo»
// vs «seo for manufacturers» 0 shared URLs, 0 shared domains, but both SERPs
// are agencies + guides (Thomasnet, First Page Sage, Venveo / Marketveep,
// seo.com, Seven Atoms) and the phrases are synonyms → one page, both in
// headings. «manufacturing seo» vs «b2b seo» 0 shared URLs → this page is about
// manufacturers specifically; /b2b-seo linked once for the general B2B side.
// Angle: the capability matrix (process × material × tolerance × industry) as
// the keyword map; capability, process, material and equipment pages;
// industries-served pages with certifications (ISO 9001, AS9100, IATF 16949,
// ISO 13485 as examples); regional / «near me» contract manufacturing;
// Thomasnet and directories; trade shows vs search; procurement asking
// ChatGPT for supplier shortlists; RFQs, not traffic.
// NOT on this page: buying committees, long sales cycles, CRM attribution,
// catalogs / PDFs / gated content, export hreflang in general (/b2b-seo);
// site design, RFQ form layout, plant photography (/manufacturing-website-design);
// building the site (/manufacturing-company-website); one industry in depth —
// buyer is not the wearer, size conversion, seasonal trade fairs
// (/services/seo-for-lingerie-manufacturers, linked once); paid ads, Thomasnet
// advertising, LinkedIn (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const manufacturingSeoEn = {
  lang: "en",
  group: "manufacturing-seo",
  slug: "manufacturing-seo",
  title: "Manufacturing SEO and SEO for manufacturers",
  heading: "Manufacturing SEO and SEO for Manufacturers",
  excerpt:
    "I provide manufacturing SEO for job shops, contract manufacturers and component makers: a page for every process, material and industry you serve, certifications and equipment as text, a place on the supplier shortlists ChatGPT gives procurement teams, and reports in RFQs rather than traffic.",
  seo: {
    metaTitle: "Industrial SEO for Manufacturing Companies | Bandziuk",
    metaDescription:
      "Manufacturing SEO by one consultant: capability, material and industry pages, certifications as text, AI supplier shortlists, RFQ tracking. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Capabilities + AI supplier shortlists", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["5-axis CNC machining titanium", "AS9100 certified", "Upload drawing for RFQ", "Shortlisted by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Manufacturing SEO audit: website, capability searches, directories and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a manufacturer: capability, material and industry pages, equipment list, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a manufacturing company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with manufacturing SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "Searches by process, material and tolerance", text: "The way engineers describe a job, not your brochure" },
        { _key: k("o"), iconName: "layers", title: "Capability, material and industry pages", text: "One page per process and per sector you serve" },
        { _key: k("o"), iconName: "shield-check", title: "Certifications and equipment as text", text: "Standards, scope, machines and part envelopes" },
        { _key: k("o"), iconName: "map-pin", title: "Regional and “near me” searches", text: "Plant listing, regions served, directory profiles" },
        { _key: k("o"), iconName: "sparkles", title: "On AI supplier shortlists", text: "Facts ChatGPT and AI Overviews can repeat" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in RFQs and quoted jobs", text: "Requests with drawings, not visits" },
      ],
      prices: [
        { _key: k("r"), label: "Manufacturing SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a manufacturer", value: "from 800 € / month", note: "pages, directories, AI visibility, RFQ reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: service and multilingual websites I have built and optimized",
      subtitle:
        "An education agency site with one structure across ten countries and several languages, an architecture studio whose organic traffic grew 29× after the rebuild, and Warsaw service businesses — renovation and investment, auto repair, wheel renovation — where every service has its own page and a short path to a request. A manufacturer’s site is built on the same logic: one page for each process a buyer can search for, and a request form at the end of it.",
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your manufacturing company",
      subtitle: "I reply within one business day with the processes and searches I would work on first and a fixed price. Please do not attach customer drawings.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of manufacturing do you do?", options: ["Contract manufacturing or job shop", "Our own products or components", "Process manufacturing: plastics, chemicals, food", "Several of these"] },
        { _key: k("z"), question: "Where do most RFQs come from today?", options: ["Repeat customers and referrals", "Trade shows", "Thomasnet or other directories", "Our website", "Not sure"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Manufacturing SEO is the work that brings engineers, buyers and procurement teams to your own website when they search for a process, a material or a supplier, and turns those visits into requests for quotes. I do it myself, as a single SEO consultant who also builds websites, for machine shops, fabricators, molders, contract manufacturers and companies that make their own components."),

        h2("What SEO in manufacturing is: matching the way engineers describe a job"),
        p("An engineer with a part to source does not search for “precision manufacturing solutions”. They type the job: “5-axis CNC machining titanium aerospace”, “tight tolerance Swiss turning medical”, “low-volume aluminum die casting”, “powder coating extrusions Ohio”. Each search combines a process, a material, often a tolerance or a volume, and sometimes an industry or a region. SEO for manufacturers makes sure that a page on your site matches that combination, says plainly that you can do the job, and leads to an RFQ."),
        p(
          "Manufacturers share a lot with other B2B companies — long sales cycles, several people involved in a decision, leads that need tracking into a CRM. That general side is on the ",
          link("B2B SEO", "/b2b-seo"),
          " page. This page is about what is specific to industrial SEO: capabilities, materials, equipment, certifications, directories and the RFQ.",
        ),

        h2("SEO for manufacturers starts with a capability matrix: process, material, tolerance, industry"),
        p("Before any page is written, I build a grid of what the plant can actually do, from your quote history and a short call with whoever estimates jobs:"),
        li("processes — milling, turning, laser cutting, bending, welding, injection molding, extrusion, assembly"),
        li("materials you run regularly, with grades buyers name: 6061 aluminum, 316 stainless, Ti-6Al-4V, PEEK"),
        li("the tolerances and surface finishes you can hold, and the largest part that fits your machines"),
        li("lot sizes, from prototypes to production runs, and secondary operations such as anodizing or heat treatment"),
        li("industries you already ship to, and the ones you want more work from"),
        p("Then every combination is checked against search data. Some have steady demand and deserve their own page; most are covered by a broader page that lists them in text. Generating hundreds of near-identical “process + material + city” pages is a pattern Google treats as low-value, and engineers notice it too."),

        h2("Capability and process pages: the core of industrial SEO"),
        p("A capability page is the main landing page for a manufacturer. It ranks when it answers the engineer’s questions before they ask them:"),
        li("what the process is used for, in the words buyers use"),
        li("materials, tolerances, finishes and the maximum part envelope, as text"),
        li("prototype and production quantities, typical lead times and secondary operations"),
        li("photos of real parts you are allowed to show, with a short caption on each"),
        li("a link to the RFQ with the process already selected"),
        h3("Material pages for the alloys and plastics you run most"),
        p("When a material is hard to work — titanium, Inconel, PEEK, copper alloys — buyers search for it directly, because many shops refuse it. A page per difficult material, with what you machine or mold in it and for which industries, often brings better RFQs than the process page itself."),
        h3("Equipment list as text, not a photo gallery"),
        p("Engineers check whether your machines can hold their part. A list with make, model, number of axes, work envelope and spindle or press size, written as text, answers that and gives search engines the terms to match. A gallery of machine photos without captions does neither."),

        h2("Industries-served pages and certifications in SEO for the manufacturing industry"),
        p("A buyer from a regulated industry searches with that industry in mind and checks your quality system before anything else. Each sector you serve gets a page with the certifications and documents it expects. Examples:"),
        li("aerospace — AS9100, first article inspection reports, material traceability"),
        li("automotive — IATF 16949, PPAP documentation"),
        li("medical devices — ISO 13485, cleanroom or controlled assembly if you have it"),
        li("general industry — ISO 9001, material certificates, certificates of conformance"),
        p("Certifications are written as text with the standard, the scope and the certifying body, with the certificate file linked. A row of logos in the footer cannot be read by search engines or quoted by AI assistants."),

        h2("Local SEO for manufacturers: regional and “contract manufacturing near me” searches"),
        p("Many buyers prefer a supplier they can drive to for an audit, a first-article review or an urgent rework, and shorter shipping matters when supply chains are under strain. That shows up in searches like “CNC machine shop near me”, “sheet metal fabrication Midwest” or “contract manufacturer Texas”. What helps:"),
        li("a Google Business Profile for each plant, with the right category and a link to the matching capability page"),
        li("the plant address, the regions you ship to and delivery times stated on the site"),
        li("regional pages only where you have a plant, a sales office or a real customer base"),
        p(
          "The map side in depth — profiles, categories, reviews — is described on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Thomasnet, industrial directories and trade shows in manufacturing SEO"),
        p("For many industrial searches, Thomasnet and other directories rank above the suppliers themselves, and a “manufacturing directory” is where some buyers start. A directory profile is part of the work, not a replacement for it: the capabilities, certifications and locations there should match the site, and the profile should link to the relevant capability page rather than the home page. Association member lists, regional manufacturing networks and supplier portals of your customers work the same way. For buyers in Europe, Europages plays a similar role."),
        p("Trade shows bring face-to-face conversations for a few days; search brings buyers the rest of the year. The two connect: the exhibitor listing links to your site, new equipment shown at the show gets a page, and the people who took your card look you up afterwards and find the capability they discussed."),
        p(
          "Manufacturers of one product type have their own patterns. An example of SEO for one industry in depth is the ",
          link("SEO for lingerie manufacturers", "/services/seo-for-lingerie-manufacturers"),
          " page.",
        ),

        h2("Manufacturing SEO for ChatGPT and Google AI Overviews: supplier shortlists (GEO, AEO)"),
        p("Procurement teams and engineers now ask ChatGPT, Perplexity or Google’s AI Overviews for a first list of suppliers: “contract manufacturers in the US with ISO 13485 that do silicone overmolding”, “machine shops in Ohio that work Inconel”. The assistant answers with a few names and a reason for each. A plant that is not described clearly anywhere does not make the list. Work on those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For a manufacturer it means:"),
        li("processes, materials, tolerances, lot sizes and industries written as plain sentences on your pages"),
        li("certifications with their scope, and the plant locations, stated as text"),
        li("structured data for the company and its locations"),
        li("the same facts on your site, Thomasnet, LinkedIn and association listings, so assistants do not mix you up with another firm"),
        p(
          "I check how assistants describe your company and which competitors they name, before the work and after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Measuring SEO for manufacturing companies in RFQs, not traffic"),
        p("Manufacturing lead generation is judged by requests that can be quoted. I set up tracking for:"),
        li("RFQ submissions, with the page where the visit began and whether a drawing was attached"),
        li("calls and email clicks from capability and industry pages"),
        li("datasheet and certificate downloads, as a sign of interest from engineers"),
        p("Once a month I compare that list with your estimating team: which requests fit your machines, which were quoted and which became orders. Manufacturing sites also attract job seekers searching for machinist or welder jobs; that traffic goes to a careers page and is kept out of the sales report."),

        h2("Manufacturing SEO agency, manufacturing SEO companies or one consultant"),
        p("A manufacturing SEO agency usually sells a team and a wider package: paid search, directory advertising, LinkedIn, trade show campaigns. That fits a company that wants every channel from one supplier and has a marketing manager to run it."),
        p("I work alone: I talk to your estimator or production manager, write the capability pages, make the changes on WordPress, Next.js or another system, and read the RFQ data. I do not run ads. Whoever you compare, ask them:"),
        li("Who will speak to our engineers, and who writes about tolerances and materials?"),
        li("Will the report show RFQs and quoted jobs, or only rankings?"),
        li("Who owns the site, the content and the accounts if we stop working together?"),
        p(
          "If the site itself is the problem, the design side is on the ",
          link("manufacturing website design", "/manufacturing-website-design"),
          " page and the build on the ",
          link("manufacturing company website", "/manufacturing-company-website"),
          " page.",
        ),

        h2("How much manufacturing SEO services cost"),
        li("Manufacturing SEO audit — the site, the capability matrix against search data, directory profiles, competitors and AI answers: from 250 €, one-off."),
        li("One-off work — capability, material and industry pages, the equipment list, certifications as text, structured data, RFQ tracking: 250–700 €."),
        li("Monthly SEO for a manufacturing company — new pages, directories, AI visibility and reports in RFQs: from 800 € per month; in very competitive markets from 1,300 € per month."),
        p(
          "A job shop with a few processes often gets most of the effect from the audit and a handful of strong capability pages. The ",
          link("SEO audit", "/services/seo-audit"),
          " page describes the audit, and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Manufacturing SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What is SEO in manufacturing?", "It is the work that makes a manufacturer’s website appear when engineers and buyers search for a process, a material, a certification or a supplier in a region, and that turns those visits into RFQs. Most of it is capability, material and industry pages written with the plant’s own data, plus directories and AI answers."],
          ["How much does a good SEO cost for a manufacturer?", "With me, an audit costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive markets. After a short description of the plant, its processes and its markets I give a fixed price."],
          ["What are the top SEO agencies for manufacturing companies?", "Lists of top agencies are often published by the agencies themselves or by directories with paid placements, so treat them as a starting point. Compare providers by who writes about your processes, whether they report RFQs rather than rankings, and who owns the work afterwards."],
          ["Can ChatGPT do SEO for a manufacturer?", "It can help draft text. It cannot see your search data, your competitors or your site’s technical problems, and it does not know which tolerances your machines hold. Pages that state capabilities wrongly bring RFQs you cannot quote."],
          ["Is SEO worth it if most of our work comes from repeat customers and trade shows?", "Often yes, because new buyers and new engineers at existing customers search before they call. A small number of RFQs from search for the work you want more of can pay for the audit and the first pages many times over."],
          ["How long does manufacturing SEO take to bring RFQs?", "Fixes and better capability pages can show within weeks. New material and industry pages usually need two to four months to rank. Long quoting cycles mean orders from those RFQs often arrive later still."],
          ["Do you need our drawings or customer data?", "No. I work from public information, your quote history in summary and conversations with your team. Customer names and parts appear on the site only with permission. If your contracts require it, a non-disclosure agreement is signed before anything confidential is shared."],
          ["Can a consultant in Poland do SEO for a US manufacturer?", "Yes. All the work is remote and in English. My afternoon in Central European Time overlaps with the US morning, so calls with your team fit the start of their day. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order manufacturing SEO: what to send me"),
        p(
          "Send the company website, the processes and materials you want more work in, the industries and regions you ship to, your certifications and where RFQs come from today. Please leave out customer drawings. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
