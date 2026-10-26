// Landing page fixture: Adult SEO (EN), group «adult-seo». New page, adult
// section: not linked from any general page or hub; links only to
// /adult-website-design, the AI page, pricing and general service pages.
// Semantic core: ref/adult.md (US) and ref/industry-scan-models.md (scan):
// adult seo agency 260 (scan 480) · seo for adult website 170 (scan 260) ·
// adult website seo 170 · adult seo service 140 · adult seo company 140 ·
// adult seo companies 140 · adult seo services 110 (scan 390) · adult seo 110
// (scan 390) · seo for adult 110 · seo adult 110 · adult seo marketing
// company 70 · onlyfans seo 50 · adult seo expert 10 · seo for adult
// e commerce 10 · adult keyword research 10. All are one service (BRIEF.md):
// variants spread over H1, metaTitle, H2s and FAQ.
// «onlyfans management agency» 720 (scan 1,600) is demand that agencies
// compete for → one H2 on the agencies’ own SEO, not a target phrase for us.
// PAA used: What is adult SEO? How to get traffic on an adult website?
// Intent: ref/intent-check-adult.md — «adult seo» vs «seo for adult websites»
// 0 shared URLs, «adult seo» vs «adult seo agency» 0 shared; SERPs are niche
// agencies, Reddit, BlackHatWorld and affiliate blogs (CrakRevenue) → mixed
// owner/affiliate demand; the page speaks to owners and states the no-link-
// scheme stance. «adult website design» vs «adult seo» 0 shared → separate
// pages (/adult-website-design is the sibling).
// NOT on this page: building the site — age gate UX, payments, hosting choice,
// content protection (/adult-website-design); paid ads and ad networks; link
// buying; any explicit material; client names, cases or results (NDA
// placeholder block only); no links to models, photographer or makeup pages.
// Owner’s rules: legal 18+ businesses only; AI H2 (GEO, AEO); no guaranteed
// rankings; never invent clients.
import { p, h2, li, link, k } from "./pt";

export const adultSeoEn = {
  lang: "en",
  group: "adult-seo",
  slug: "adult-seo",
  title: "Adult SEO",
  heading: "Adult SEO Services for 18+ Sites, Creators and Agencies",
  excerpt:
    "Adult SEO services from one consultant for legal 18+ sites, creators and OnlyFans management agencies: SafeSearch-aware structure, SFW pages that reach wider searches, clean link building, technical SEO for large catalogs and a place in AI answers.",
  seo: {
    metaTitle: "SEO for Adult Websites, Creators and Agencies | Bandziuk",
    metaDescription:
      "Adult SEO for 18+ sites, creators and OnlyFans agencies: SafeSearch, SFW pages, clean links, crawl budget, video SEO and AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["SafeSearch, SFW pages, clean links", "Audit from 250 €", "Discreet, NDA on request"],
  heroPhonePoints: ["Agency found by creators", "SFW guide ranks", "Fewer duplicate pages", "Named in AI answers"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Adult SEO audit: indexing, SafeSearch classification, duplicates, links, competitors and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off adult SEO work: SFW pages, category and tag clean-up, structured data, redirects, crawl fixes", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for an adult website, creator or agency", price: 800, currency: "EUR", unit: "month" },
    { _key: "offer4", _type: "offer", name: "Monthly SEO for a large adult catalog, tube or membership platform in a very competitive market", price: 1300, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with adult SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "Keyword research for 18+ demand", text: "Business, brand and SFW searches mapped" },
        { _key: k("o"), iconName: "shield-check", title: "A structure SafeSearch reads right", text: "Explicit and SFW sections kept apart" },
        { _key: k("o"), iconName: "file-text", title: "SFW pages and a blog that rank", text: "Guides people can open at work" },
        { _key: k("o"), iconName: "layers", title: "Technical SEO for large catalogs", text: "Crawl budget, thumbnails, tags, pagination" },
        { _key: k("o"), iconName: "trending-up", title: "Links without schemes", text: "Earned mentions, partners, niche press" },
        { _key: k("o"), iconName: "sparkles", title: "Business answers in ChatGPT", text: "Agency terms and brand facts as text" },
      ],
      prices: [
        { _key: k("r"), label: "Adult SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly adult SEO", value: "from 800 € / month", note: "large catalogs and platforms from 1,300 €", highlight: true },
      ],
    },
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Adult SEO projects under NDA",
      items: [
        { _key: k("o"), iconName: "shield-check", title: "Project under NDA", text: "Details I can’t disclose" },
        { _key: k("o"), iconName: "shield-check", title: "Project under NDA", text: "Details I can’t disclose" },
        { _key: k("o"), iconName: "shield-check", title: "Project under NDA", text: "Details I can’t disclose" },
        { _key: k("o"), iconName: "shield-check", title: "Project under NDA", text: "Details I can’t disclose" },
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for adult SEO",
      subtitle: "By the next business day you know where I would start — structure, SFW pages, duplicates or links — and what it costs. Access and data you share are kept private.",
      contextLabel: "Website, agency or creator name",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you want to grow?", options: ["An 18+ membership, tube or video site", "An adult shop", "An OnlyFans or creator management agency", "A creator’s own site"] },
        { _key: k("z"), question: "Where does traffic come from now?", options: ["Mostly social networks", "Affiliate partners and traffic networks", "Search, but it has dropped", "Hardly anywhere yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Adult SEO is search engine optimization for legal 18+ businesses — membership and video sites, adult shops, studios and platforms, OnlyFans management agencies and independent creators — and it is the service on this page. The work is mine from research to reports. Paid search barely helps in this niche: Google Ads restricts sexual content and refuses adult offers in many countries, and most social networks limit what you may promote. Organic search, AI answers and your own list therefore carry more of the load than in almost any other industry."),

        h2("Adult SEO services from one consultant instead of an adult SEO agency"),
        p("People who search for an adult SEO agency or an adult SEO company usually find agencies with long service menus and link sellers who promise first place within weeks. My offer has a different shape. You deal with a single specialist who can also code, so whoever reads your server logs also rewrites the category pages and fixes the templates. There are no ranking guarantees and no link networks, because those put an adult domain at more risk than a mainstream one."),
        p("My clients are lawful businesses whose performers have all been verified as adults. Checking their age and keeping the records — US 18 U.S.C. 2257 paperwork, UK Online Safety Act age assurance and similar rules — remain the operator’s legal responsibility; check with your lawyer which rules apply to you. Work for adult clients is kept private and never appears among my public case studies."),

        h2("Google SafeSearch and SEO for adult websites"),
        p("SafeSearch hides explicit results for a large share of searchers: signed-in teenagers, many work, school and public networks, and everyone who leaves the default setting on. Google classifies pages by their content, and a whole site can be treated as explicit if SFW and explicit pages are mixed without structure. Three rules help:"),
        li("explicit material lives in its own section or subdomain, marked with the adult rating meta tag Google recommends"),
        li("SFW pages — about, guides, agency services, product categories without explicit images — are kept clean, so they can appear in filtered results too"),
        li("titles and descriptions describe the page in neutral words; explicit phrasing in a title does not help ranking and narrows who sees it"),

        h2("SFW pages and a blog in adult website SEO"),
        p("Most business demand in this niche is not explicit at all: how to start as a creator, how payouts work, which agency terms are fair, how to protect paid content, gift ideas from a legal adult shop. These queries are visible without SafeSearch getting in the way, and they bring visitors who later subscribe, buy or apply. A blog with guides written by real people, pages that answer one question each and internal links into the gated areas give an adult site reach it would never get from explicit keywords alone."),
        p("Trust matters here as it does for health or money topics. A registered company name, an address, an editorial policy, named authors and clear refund and privacy terms make both readers and quality raters more willing to treat the site as a real business."),

        h2("Link building for adult websites without link schemes"),
        p("Link building is the hardest part of SEO for adult websites. Many publishers refuse adult links outright, guest-post marketplaces filter the niche out, and what remains is often private blog networks and paid link packages that Google treats as link schemes. Those can work for a while and then take the domain down with them. Cleaner sources are slower but last:"),
        li("industry press, review sites and forums that cover adult business openly"),
        li("partners you already work with: processors, platforms, affiliate programs, event organizers"),
        li("data and guides others cite — payout surveys, safety checklists, legal overviews"),
        li("interviews and podcasts for founders and agency owners"),
        p("Every outbound paid or affiliate link on your own pages carries the sponsored attribute."),

        h2("Technical SEO for large adult sites: crawl budget, duplicate thumbnails and pagination"),
        p("Tube sites, clip stores and big membership catalogs often have hundreds of thousands of URLs, and most of them are near-duplicates: the same video under five tags, the same thumbnail at four sizes, sorting and filter parameters, endless pagination. Googlebot spends its time on those instead of the pages that matter. The fixes are known but need care:"),
        li("tag and category pages kept only where there is real search demand and enough unique items; the rest set to noindex or merged"),
        li("filter and sort parameters canonicalized or blocked from crawling"),
        li("pagination with clean links and no infinite scroll without fallback URLs"),
        li("server log analysis to see where the crawler actually goes"),

        h2("Image and video SEO for adult websites: what structured data can do"),
        p("Video is the core content of many adult sites, and search engines index it through a crawlable page per video, a stable thumbnail, a sitemap with video entries and VideoObject markup with title, description, duration and upload date. Rich results for explicit pages are limited and filtered by SafeSearch, so markup on gated pages helps understanding more than display. On shops and SFW pages, Product, Organization and Breadcrumb markup work as on any other site. Images need descriptive file names and alt text in neutral language."),

        h2("SEO for OnlyFans management agencies: ranking for creators’ searches"),
        p("“onlyfans management agency” is the largest business search in this niche, and the people typing it are creators looking for help. An agency that ranks for it, and for variants with a country such as the UK or the US, receives applications without paying for each one. The pages that rank answer what creators ask before signing: services, commission, contract length, payout reports, the team, how to leave. Location and language pages target creators in other markets, a careers section ranks for management jobs, and reviews on independent sites build the trust these searchers check for."),

        h2("SEO for adult content creators: owning your name in search"),
        p("Fans search for a creator by name. Without a site of your own, the first results are leak sites, fan wikis and aggregators that profit from your name. An own domain with an SFW page, a consistent name across platforms, Person markup and links from your official profiles gives Google one clear official source. DMCA notices then remove the worst results, and the official page takes their place."),

        h2("Adult SEO in Bing, Yandex and other languages"),
        p("In this niche Bing and Yandex usually bring a larger share of visits than in mainstream search, partly because their filters behave differently. Both get verified webmaster accounts and sitemaps. Language versions open markets where competition is lower than in English; each gets pages written for local searches, not machine translation, and hreflang so every searcher lands on the right version."),

        h2("Adult SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Assistants refuse explicit queries, but business ones get full answers: “best OnlyFans management agencies in the UK”, “is it legal to be an OnlyFans manager”, “which payment processors accept adult sites”. Work on those answers is called GEO (generative engine optimization) or AEO (answer engine optimization). For an adult business it means facts on SFW pages in plain text, an About page with the legal entity, consistent descriptions across directories and review sites, and AI crawlers allowed in robots.txt for public sections."),
        p(
          "A fixed set of business questions goes to ChatGPT, Perplexity and Google at the start and again a few months later, so you see which brands they name and whether yours joins them. More on this in ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          ".",
        ),

        h2("How much adult SEO services cost"),
        li("Adult SEO audit, one-off — indexing, SafeSearch classification, duplicate pages, backlinks, competitors and how AI assistants describe you: from 250 €."),
        li("Single tasks such as SFW pages, a tag and category clean-up, structured data, redirects or crawl fixes: 250–700 €."),
        li("Monthly adult SEO for a creator, agency or smaller 18+ site: from 800 € per month; for large catalogs, tube sites and membership platforms in very competitive markets: from 1,300 € per month."),
        p(
          "Reports show sign-ups, sales and applications from organic search, not only positions. If the site itself needs work first, see ",
          link("adult website design", "/adult-website-design"),
          ". How I run long-term work is explained in ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          ", what an audit checks in ",
          link("SEO audit", "/services/seo-audit"),
          "; every rate is listed under ",
          link("pricing", "/pricing"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Adult SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much do adult SEO services cost?", "An audit is from 250 €, one-off tasks 250–700 €, monthly work from 800 €, and from 1,300 € for large catalogs and platforms in very competitive markets. You get a fixed price once I have seen the site and its traffic."],
          ["What is adult SEO?", "Search engine optimization for legal 18+ businesses. It follows the usual principles, with extra care for SafeSearch classification, link sources, duplicate content on large catalogs and trust signals, because ads and many link sources are closed to the niche."],
          ["How do I choose an adult SEO company?", "Ask who will do the work, how links are earned and what will be reported. Be careful with guaranteed rankings and cheap link packages: in this niche they often come from networks that search engines penalize."],
          ["Can an adult website rank with SafeSearch on?", "Its SFW pages can. Explicit pages are filtered for many users; guides, service pages and clean category pages are not, which is why a clear structure matters."],
          ["Do you keep adult SEO work confidential?", "Yes. An NDA can be signed before you send any access, and reports, accounts and documents stay private."],
          ["Can you do SEO for a US or UK adult business from Poland?", "Yes. All work is remote and in English. Central European Time overlaps with the whole UK working day and with US mornings, which is enough for regular calls. I invoice in EUR."],
          ["How long does adult SEO take?", "Technical fixes on a large catalog can show in crawling within weeks; new SFW pages and earned links usually need three to six months before they bring steady traffic."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order adult SEO: what to send me"),
        p(
          "Send the site address, the type of business — membership, tube, shop, agency or creator — the countries and languages you target, where traffic comes from today and any past penalties or link campaigns. In return you get a short list of first fixes, ordered by impact, with a fixed price. Send it via the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
