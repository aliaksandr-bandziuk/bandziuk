// Landing page fixture: B2B SEO services (EN), group «b2b-seo».
// Semantic core: ref/small-business.md, b2b group, + BRIEF.md: b2b seo agency
// 1,000 (H2, positioned as one consultant instead of an agency) · seo for b2b
// companies 320 (930 with variants) (H2 + FAQ) · seo services for b2b
// companies (H2 on scope and cost) · b2b seo consultant 140 (H2) · b2b seo
// (H1, several H2) · digital marketing for b2b 260 (mentioned only: the owner
// does the SEO part).
// SERP: First Page Sage, Shopify, OuterBox, Multiview, Olive & Company,
// draft.dev — agencies and guides mixed, so the page sells and explains.
// Intent: ref/intent-check-small-business.md — «seo for b2b companies» vs
// «small business seo» 0 shared URLs, 0 shared domains → separate page from
// /seo-services-for-small-business; nothing about Maps or local reviews here.
// NOT on this page: the B2B website itself, catalogs, RFQ form design
// (/b2b-website-design); building a manufacturer’s site
// (/manufacturing-company-website); one industry in depth
// (/services/seo-for-lingerie-manufacturers); «b2b content marketing» 1,900
// (a content-marketing intent, no page yet — possible blog guide); paid ads
// and social media (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const b2bSeoEn = {
  lang: "en",
  group: "b2b-seo",
  slug: "b2b-seo",
  title: "B2B SEO services",
  heading: "B2B SEO Services",
  excerpt:
    "I provide B2B SEO services for manufacturers, distributors, wholesalers and IT companies: industry and use-case pages, product and spec pages, language versions for export markets and visibility in AI answers, measured in qualified enquiries rather than traffic.",
  seo: {
    metaTitle: "SEO for B2B Companies: Leads, Not Traffic | Bandziuk",
    metaDescription:
      "B2B SEO consultant: industry and spec pages, export SEO in several languages, AI vendor shortlists and leads tracked in your CRM. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Search + AI vendor shortlists", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Food-grade conveyor belts EU", "Download datasheet", "Request a quote", "Suggested by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "B2B SEO audit: website, keywords, catalog and lead tracking", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off B2B SEO work: industry, use-case and product pages, language versions, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a B2B company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO services for B2B companies",
      items: [
        { _key: k("o"), iconName: "search", title: "Keywords from your sales team, checked in data", text: "Low-volume searches that come from real buyers" },
        { _key: k("o"), iconName: "layers", title: "Pages per industry and per use case", text: "Written with your engineers, not from a template" },
        { _key: k("o"), iconName: "file-text", title: "Product and spec pages that rank", text: "Specifications as text, datasheets, a quote request" },
        { _key: k("o"), iconName: "message-circle", title: "Language versions for export markets", text: "Research per country, versions linked with hreflang" },
        { _key: k("o"), iconName: "sparkles", title: "On AI vendor shortlists", text: "Facts ChatGPT and AI Overviews can quote" },
        { _key: k("o"), iconName: "trending-up", title: "Enquiries traced into your CRM", text: "Reported in leads and opportunities, not visits" },
      ],
      prices: [
        { _key: k("r"), label: "B2B SEO audit: site, keywords, lead tracking", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a B2B company", value: "from 800 € / month", note: "pages, export markets, AI visibility", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: multilingual and lead-generation websites I have built and optimized",
      subtitle:
        "What these projects share with a B2B site: one structure in ten countries and several languages, enquiry forms that collect the details a sales team needs, and SEO measured in requests rather than visits.",
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your B2B company",
      subtitle: "I reply within one business day with what I would fix first on your site and in your lead tracking, and a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What does your company sell?", options: ["Industrial products or components", "Wholesale and distribution", "Software or IT services", "Professional services"] },
        { _key: k("z"), question: "How long is a typical sales cycle?", options: ["A few weeks", "Two to six months", "More than six months", "Not sure"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I provide B2B SEO services for companies that sell to other businesses — manufacturers, distributors, wholesalers, software and IT service firms. I do the work myself, as a single consultant who also builds websites. The measure is simple: how many relevant companies find you in search and AI answers and ask for a quote, a sample or a demo."),

        h2("What B2B SEO is: search work measured in qualified leads, not traffic"),
        p("B2B SEO uses the same tools as any other SEO — keyword research, pages, technical fixes, links — but aims at a different result. A consumer shop can win on volume: thousands of visits, a small share buying. A B2B company may need ten good enquiries a month, and one signed contract can pay for a year of work. That changes three questions:"),
        li("who searches: an engineer looking for a part, a procurement manager comparing suppliers, an operations lead looking for software"),
        li("what they type: the problem, the specification, the application or the certificate — rarely the name of your company category"),
        li("what counts as a result: a request for a quote, a sample, a demo or a call with sales, from a company that fits your customer profile"),
        p("Traffic that never reaches a conversation with sales is not a result, and I do not report it as one."),

        h2("SEO for B2B companies: low-volume, high-value keywords"),
        p("Most keyword tools show zeros for B2B. “Hygienic stainless valve DN50”, “private label cosmetics manufacturer EU”, “WMS for a 3PL warehouse” may have ten searches a month or no measured volume at all. These are often the best phrases a B2B company has: the person typing them knows exactly what they need."),
        p("So keyword research starts with your sales team rather than a tool:"),
        li("the words customers use in RFQs, emails and calls, which often differ from your catalog names"),
        li("the problems buyers describe before they know which product solves them"),
        li("the standards, materials, part numbers and certificates they filter by"),
        li("the competitors and alternatives they compare you with"),
        p("Then I check those phrases in search data, look at what the results show — suppliers, marketplaces, directories, guides — and choose the ones where a page of yours can rank and lead to an enquiry."),

        h2("Buying committees and long sales cycles in B2B SEO"),
        p("A B2B purchase is rarely decided by one person. An engineer checks that the product fits, procurement compares prices and terms, a manager signs off on the risk, sometimes finance or IT checks details. The cycle takes weeks or many months, and each person searches for different things at different moments. The SEO plan gives each of them a page to land on:"),
        li("the engineer or specialist: specifications, tolerances, compatibility, installation, documentation"),
        li("procurement: minimum order, lead times, delivery terms, certificates, how to request a quote"),
        li("the decision-maker: case studies, references, how quality and risk are handled, who runs the company"),
        li("everyone, early on: guides that explain the problem and the ways to solve it"),
        p("Each page links to the next step, so a visitor who arrives on a guide reaches the spec page, and a visitor on the spec page reaches the quote form."),

        h2("Industry and use-case pages in SEO for B2B companies"),
        p("Buyers search by their own industry and task: “packaging film for frozen food”, “CRM for freight forwarders”, “antistatic flooring for electronics assembly”. A site organized only by your product categories misses these searches. Two page types fill the gap:"),
        li("industry pages — one for each sector you serve, with its requirements, standards, typical problems and the products or services that fit"),
        li("use-case or application pages — one for each task the product solves, with the conditions, the results you can document and a clear next step"),
        p("These pages work only when they carry real industry knowledge: the terms, the regulations, the objections a buyer from that sector raises. A template with the industry name swapped is filtered out by Google and ignored by buyers. I build them from short interviews with your sales and technical people, so the content holds details competitors cannot copy."),

        h2("Product and spec pages in B2B SEO: catalogs, datasheets and comparison content"),
        p("For manufacturers and distributors, the product page is where most qualified searches land, and many catalogs lose that traffic:"),
        li("specifications live only inside PDFs, so the page itself has no text to rank"),
        li("thousands of filter combinations create duplicate addresses that waste crawling"),
        li("product names are internal codes nobody searches for"),
        li("the page ends without a way to ask for a price, a sample or a drawing"),
        p("A product page that ranks has the key specifications as text, a short description in the buyer’s words, downloadable datasheets, product structured data and a quote request on the page. Case studies and comparison pages — your material against an alternative, your service against doing it in-house — help at the comparison stage, as long as every claim can be backed up."),
        p(
          "How a manufacturer’s site is built around catalogs and quote requests is covered on the ",
          link("manufacturing company website", "/manufacturing-company-website"),
          " page; the design side is on the ",
          link("B2B website design", "/b2b-website-design"),
          " page.",
        ),

        h2("Export and multilingual SEO for manufacturers and distributors"),
        p("A manufacturer in Poland selling to Germany, a distributor in Cyprus covering the eastern Mediterranean, a software firm in the Baltics selling across the EU — each needs to be found by buyers searching in their own language. Those searches are not translations of yours: a German engineer and a Polish buyer describe the same part with different terms and different standards. What works:"),
        li("a separate address for each language or market, written or edited by someone who knows the industry terms in that language"),
        li("hreflang tags linking the versions, so Google shows each buyer the right one"),
        li("keyword research per market, because volumes and competitors differ"),
        li("local trust details: delivery to that country, local contacts or distributors, certificates recognized there"),
        p(
          "I work in English, Polish and Russian, and multilingual sites are a regular part of my work. An example of SEO for a manufacturer selling in several markets is the ",
          link("SEO for lingerie manufacturers", "/services/seo-for-lingerie-manufacturers"),
          " page; the technical side of language versions is on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page.",
        ),

        h2("B2B SEO for ChatGPT and Google AI Overviews: getting onto AI vendor shortlists (GEO, AEO)"),
        p("B2B buyers now ask ChatGPT, Perplexity or Google’s AI Overviews to suggest suppliers before they open a list of links: “which EU manufacturers make food-grade conveyor belts”, “compare WMS vendors for a mid-sized 3PL”. The assistant returns a short list, and a company that is not on it may never be considered. Getting onto that list is called generative engine optimization (GEO) or answer engine optimization (AEO). For a B2B company it means:"),
        li("what you make or do, for which industries, in which countries and from what order size — written as plain facts on your pages"),
        li("certificates, standards and capacities stated as text, not only as logos"),
        li("use-case and comparison pages that answer the questions buyers put to assistants"),
        li("the same company details on your site, LinkedIn, B2B directories and association listings, so assistants do not confuse you with another firm"),
        p(
          "I check how assistants describe your company and your competitors before the work and again after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Lead quality and CRM attribution in B2B SEO"),
        p("In B2B the useful report is a list of enquiries and what became of them. I set this up at the start:"),
        li("conversions in GA4 for quote requests, demo bookings, calls and downloads, with the page where the visit began"),
        li("the source and landing page passed with each form into the CRM you use — HubSpot, Salesforce, Pipedrive or another — so sales can see which enquiries came from search"),
        li("a short monthly check with sales: which search leads were relevant and which became opportunities"),
        p("This shows which pages bring buyers and which bring job seekers and competitors. With long cycles, revenue from a search lead can appear months later, and the CRM is the only place where it can be counted."),

        h2("Technical SEO for B2B websites: catalogs, PDFs, gated content and speed"),
        p("B2B sites share a set of technical problems that block rankings no matter how good the content is:"),
        li("whitepapers and guides behind a form, with no open page that search engines can read — the fix is an open summary page with the form for the full file"),
        li("PDFs ranking instead of the product pages, so visitors land on a file with no navigation and no contact button"),
        li("customer portals, price lists and test pages left open to indexing"),
        li("catalogs rendered only by JavaScript, which search engines and AI crawlers may read late or not at all"),
        li("heavy product photos and scripts that push the main content past 2.5 seconds on a phone"),
        p("Most are fixed in the first month or two."),

        h2("B2B SEO agency or B2B SEO consultant: one specialist instead of an agency"),
        p("A B2B SEO agency usually sells a team: an account manager, a strategist, writers, a link builder. Many sell a wider package of digital marketing for B2B — paid search, LinkedIn ads, email — with SEO as one part. That suits companies that need many channels and have someone in-house to manage the agency."),
        p("I work as a B2B SEO consultant: one person who does the research, interviews your experts, writes the briefs, fixes the code and reads the CRM data. Nothing gets lost between account manager and executor, and I build or rebuild the website when the site itself is the problem. I do not run ads or social accounts. Whoever you choose, ask:"),
        li("Will you report enquiries and opportunities, or only rankings and traffic?"),
        li("Who will talk to our technical people, and who writes the industry pages?"),
        li("Who owns the content, the site and the accounts if we stop working together?"),
        li("Is there a minimum contract, and why?"),

        h2("SEO services for B2B companies: what is included and how much it costs"),
        li("B2B SEO audit — the site, keywords, catalog, technical problems and lead tracking: from 250 €, one-off, with fixes listed in order of impact."),
        li("One-off work — industry and use-case pages, product page templates, language versions, structured data, CRM tracking: 250–700 €."),
        li("Monthly SEO for a B2B company — new pages, export markets, AI visibility and reporting in enquiries: from 800 € per month; in very competitive markets from 1,300 € per month."),
        p(
          "Many B2B companies with a niche product get most of the effect from the audit and a few strong industry and product pages; the audit shows whether monthly work is needed. How I approach SEO in general is on the ",
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
      title: "B2B SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much do SEO services for B2B companies cost?", "An audit costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive markets. After a short description of the company, its products and its markets I give a fixed price."],
          ["Is SEO worth it for a B2B company when search volumes are tiny?", "Usually yes. Ten searches a month from engineers or buyers looking for exactly your product can be worth more than thousands of consumer visits. What matters is whether the people searching can become customers, and that is checked before any page is written."],
          ["How long does B2B SEO take to bring leads?", "Technical fixes and better product pages can show within weeks. New industry and use-case pages usually need two to four months to rank. With long sales cycles, the revenue from those leads appears later still, which is why tracking in the CRM is set up from the start."],
          ["Do I need a B2B SEO agency, or is one consultant enough?", "If you need ads, social media and SEO from one supplier, an agency fits. If you need search done well by someone who also understands the website and talks directly to your technical people, one consultant is usually enough for a B2B company and costs less."],
          ["How do you write about technical products for engineers?", "From your people and your documents: datasheets, RFQs, recorded sales calls and short interviews with engineers or product managers. I structure the pages and write them for search; your experts check every technical statement before it goes live."],
          ["Do B2B buyers really use ChatGPT to choose vendors?", "Many use ChatGPT, Perplexity or Google’s AI Overviews to build a first list of suppliers and to compare options. The assistants build that list from what they can read about each company, so clear facts on your site and consistent details elsewhere decide whether you appear."],
          ["Can you connect search leads to our CRM?", "Yes, in general terms with any CRM that accepts form data or has an integration: HubSpot, Salesforce, Pipedrive and others. Each enquiry carries its source and landing page, so sales can see which pages bring real opportunities."],
          ["Do you work with B2B companies outside Poland?", "Yes. B2B SEO is done remotely, for companies in Europe, North America and elsewhere, including multilingual sites for export. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order B2B SEO for your company: what to send me"),
        p(
          "Send the company name and website, what you sell and to which industries, the countries and languages you sell in, the CRM you use, and two or three examples of the enquiries you want more of. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
