// Landing page fixture: Adult website design (EN), group «adult-website-design».
// New page, adult section: not linked from any general page or hub; links only
// to /adult-seo, the AI page, pricing and general service pages.
// Semantic core: ref/adult.md (US) and ref/industry-scan-models.md (scan, all
// locations): adult website development company 170 · adult website
// development 140 (scan 480) · adult website design 90 (scan 480; = adult web
// design, adult web designer 480) → H1, metaTitle, H2s, FAQ · adult website
// builder 110 → builders H2 · adult website hosting 1,000, adult friendly
// hosting 50 → hosting H2 only · adult payment processor 260 → payments H2 ·
// linktree for onlyfans 720, onlyfans link in bio 70, onlyfans website template
// 70, onlyfans landing page 40, adult content creator website 10 → creators H2
// · onlyfans agency website 10–20, onlyfans agency website template 10 →
// agencies H2 · adult membership site 50 → brands, payments, protection.
// PAA used: How can I create my own adult website? Which hosting providers
// allow adult content? Why are adult sites not working?
// Intent: ref/intent-check-adult.md — «adult website design» vs «adult seo» 0
// of 10 shared URLs → separate pages (/adult-seo is the sibling). «design» vs
// «development» 2 shared → one page, both words in headings. «design» vs
// «adult website hosting» 0 shared: hosting SERP = host reviews → here only
// how the hosting choice shapes the build. «onlyfans management agency»
// (720; scan 1,600) = creators looking for an agency, not a site buyer;
// «onlyfans agency website» shares 1 URL with it → agencies get one H2 as
// clients; their own SEO is on /adult-seo.
// NOT on this page: SEO campaigns (/adult-seo), content production or
// account management for creators, hosting reviews, ads; any explicit
// material; client names, cases or results (NDA placeholder block only); no
// links to the models, photographer or makeup artist pages.
// Owner’s rules: legal 18+ businesses only, performers verified adults; adult
// topics never appear on general pages; AI H2 on every page; design included
// in the price; never invent clients.
import { p, h2, h3, li, link, k } from "./pt";

export const adultWebsiteDesignEn = {
  lang: "en",
  group: "adult-website-design",
  slug: "adult-website-design",
  title: "Adult website design for creators, agencies and 18+ brands",
  heading: "Adult Website Design and Development for 18+ Brands",
  excerpt:
    "Adult website design and development from one person: own-domain sites for creators, websites for OnlyFans management agencies and builds for legal 18+ brands, with an age gate, high-risk payments, adult-friendly hosting and fast video.",
  seo: {
    metaTitle: "Adult Web Designer for Creators and 18+ Brands | Bandziuk",
    metaDescription:
      "Adult website development for creators, OnlyFans agencies and 18+ brands: age gate, CCBill or Segpay payments, adult-friendly hosting, video. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Discreet, NDA on request"],
  heroPhonePoints: ["18+ check before entry", "Join the free list", "Secure checkout", "Creators: apply here"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple adult website for a creator or a small agency, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Adult website with an age gate, high-risk payment processor, membership area, video delivery, content protection, legal pages and language versions, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with adult website development",
      items: [
        { _key: k("o"), iconName: "shield-check", title: "An age gate that fits your markets", text: "From a click screen to a verification provider" },
        { _key: k("o"), iconName: "plug", title: "Payments through high-risk processors", text: "CCBill, Segpay, Epoch or the one you have" },
        { _key: k("o"), iconName: "gauge", title: "Fast video on adult-friendly hosting", text: "Streaming, light thumbnails, a CDN that allows it" },
        { _key: k("o"), iconName: "image", title: "SFW landing pages you can share", text: "Safe for social networks, explicit areas gated" },
        { _key: k("o"), iconName: "file-text", title: "Legal and trust pages in place", text: "Terms, privacy, consent, removal requests" },
        { _key: k("o"), iconName: "sparkles", title: "Business facts AI assistants can read", text: "Services, terms and team as plain text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple creator or agency website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Age gate, payments, members area, video, languages", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Adult website projects under NDA",
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
      title: "Get a quote for your adult website",
      subtitle: "Expect a reply by the next business day with the pages your project needs — entry, payments, members area, legal pages — and one fixed price. Nothing you send is shared.",
      contextLabel: "Brand, agency or creator name, or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Who is the site for?", options: ["A creator on OnlyFans or Fansly", "An OnlyFans or creator management agency", "An 18+ shop or membership site", "A studio or platform"] },
        { _key: k("z"), question: "What do you have now?", options: ["Only platform profiles and a link-in-bio page", "A builder site at risk of closure", "An older WordPress site", "Nothing yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Adult website design and development is the service on this page: I plan, design and build websites for adult content creators, OnlyFans management agencies and legal 18+ brands such as shops, membership sites, studios and platforms. I am one web developer in Warsaw rather than an agency, so the person who drafts your page structure is the same one who connects the age gate, the payment processor and the video delivery."),

        h2("Adult website development: three kinds of 18+ projects"),
        p("Requests usually come from one of three directions, and each needs a different first screen:"),
        li("creators who already sell on OnlyFans, Fansly or similar platforms and want a site of their own next to them"),
        li("management agencies that need a public face to recruit creators, explain their services and hire staff"),
        li("adult brands and 18+ businesses whose website is the product or the shop: memberships, video libraries, legal adult products, studios"),
        p("Many projects mix these. An agency may want a page per creator it represents; a creator may add a small store. The page list follows how the business earns money, not a template from a theme marketplace."),

        h2("Why Wix and Squarespace rarely fit an adult website"),
        p("Most general website builders limit or forbid adult content in their terms of use, and an account that breaks those terms can be suspended with little warning — together with the domain connection, forms and customer records. Read the acceptable use policy before investing in any hosted platform. Niche adult website builders avoid the ban, but tie you to their templates, their fees and often their own payment setup."),
        p("A custom site on hosting that permits adult content in writing keeps the decisions with you. You can move it to another server, switch processor or add a language without rebuilding. I work in WordPress or in Next.js with a headless CMS, and you edit pages, prices and posts yourself."),

        h2("A website for OnlyFans and Fansly creators: own domain instead of link in bio"),
        p("Link-in-bio services such as Linktree, Beacons or AllMyLinks are quick to set up, and several of them now restrict adult links or close profiles that point to them. Even when they allow it, the page belongs to someone else. A small site on your own domain does the same job and adds what a column of buttons cannot."),
        h3("SFW landing pages you can share on social networks"),
        p("Instagram, TikTok, X and Reddit each have their own rules about what a profile may link to. A safe-for-work landing page — your name, a few non-explicit photos, a short intro and links to where fans can subscribe — can be shared where a direct platform link would get flagged. Explicit material stays on the platforms or behind the age gate."),
        h3("Owning your audience when a platform bans an account"),
        p("Deplatforming happens: a policy changes, a payout is frozen, an account is closed by mistake. A creator whose fans know only one profile starts from zero. The site lists every platform you use, collects email addresses into a list you own, and can take tips, custom requests or a direct membership through an adult-friendly payment link, so income does not depend on a single company."),

        h2("OnlyFans agency website design: pages that recruit creators"),
        p("An OnlyFans management agency sells to people who are deciding whether to trust strangers with their account, their content and a share of their income. They compare several agencies in one evening and close any site that looks like a template with stock photos and no names. The pages that help them decide:"),
        li("services described plainly: marketing, chatting, content planning, analytics, and what the creator keeps control of"),
        li("contract terms in human language: commission, length, notice period, who owns the accounts and the content"),
        li("payouts: how often, by which method and which reports the creator sees"),
        li("the team with real roles, a registered company and a business address"),
        li("an application form that asks for platforms, rough earnings and goals"),
        p("A separate careers page takes applications from chatters, editors and account managers with language, time zone and shift preferences, so job seekers and creator leads never land in the same inbox. Claims of guaranteed income make creators suspicious; showing how the agency works does more."),

        h2("Age gate design on an 18+ website"),
        p("The age gate is the first thing most visitors see, so it should load instantly, read well on a phone and offer a clear way out. A self-declaration click screen is the minimum. Depending on where your visitors are, the law may ask for more: the UK Online Safety Act expects effective age assurance on services with pornographic content, and a growing number of US states and EU countries set their own requirements. I build the gate so it can hand over to an age verification provider and remember a passed check for the session. Pages that must stay public — the SFW landing, the blog, the legal pages — sit outside it."),

        h2("Payments on an adult website: CCBill, Segpay, Epoch and other high-risk processors"),
        p("Mainstream processors such as Stripe and PayPal list adult content among restricted businesses, so membership sites and creator stores use processors that accept high-risk merchants — CCBill, Segpay, Epoch and others. Fees, rolling reserves and payout schedules differ, and each processor reviews the site before approval: terms, refund and cancellation policy, a support contact, age checks. Those pages are built before you apply. The integration covers the hosted payment page, the notification that opens or closes a membership, rebills and a cancellation path that works without emailing support."),

        h2("Adult-friendly hosting, CDN and video delivery for an 18+ website"),
        p("Many hosting companies ban adult content in their acceptable use policy, and the clause is often found only after a complaint. Choose a provider that allows it in writing, then plan video separately: large files served from the same server as the pages slow everything down. A streaming service or CDN that permits adult content delivers adaptive video in several qualities, thumbnails go out in WebP or AVIF and load as the visitor scrolls, and the page itself stays light. Backups go to a second provider, so a change in a host’s terms means a move, not a loss."),

        h2("Content protection on a membership site: signed links, watermarks and takedowns"),
        p("Leaks of paid material are a cost every adult business carries. Video plays through expiring signed links rather than open file addresses, downloads are off unless you sell them, and a visible or hidden watermark with the member’s username makes a leak traceable. A takedown page tells hosts and search engines where to send notices, and your team gets a simple log of reported copies. No setup stops a determined screen recording, but these steps make mass copying harder."),

        h2("Legal pages on an adult website: GDPR, consent and record-keeping"),
        p("I work only with legal projects in which every performer is a verified adult. Verifying performers’ age and keeping the records is the site operator’s legal duty: in the US, 18 U.S.C. 2257 sets record-keeping rules for producers of explicit content; in the EU, national laws apply alongside GDPR; in the UK, the Online Safety Act adds age assurance duties. The site gives these duties a home — terms of service, a privacy and cookie policy with a consent banner that holds trackers until the visitor agrees, a compliance statement page, a content removal form and a refund policy. The wording comes from your lawyer; check with your lawyer which rules apply in the countries you serve."),

        h2("An adult website that ChatGPT and Google AI Overviews can read"),
        p("AI assistants decline explicit requests, yet they answer business ones: which agencies manage creators in the UK, what commission an agency usually takes, which processors accept adult merchants, how a creator protects paid content. An agency or a brand appears in those answers only if its facts are written where an assistant can read them. So the SFW pages are rendered on the server as finished HTML, services, terms, team and location are written out in sentences, the organization gets structured data, and robots.txt explicitly admits AI crawlers to the public part."),
        p(
          "Ongoing work on those answers is described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page, and search work for 18+ sites on the ",
          link("adult SEO", "/adult-seo"),
          " page.",
        ),

        h2("Discretion and NDA in adult web design projects"),
        p("Projects for adult clients stay confidential and are not shown in my public portfolio. We can sign an NDA before you send anything, files live in folders you control, and I work only with the access you grant. All communication runs remotely in English, Polish or Russian — by chat, email or a video call with the camera off if you prefer."),

        h2("How much adult website design costs"),
        p("Design is part of the build and is not billed separately."),
        li("A simple adult website for a creator or a small agency — SFW home page, links to platforms, email sign-up, an age gate, contact or application form and legal pages: 700–1,400 €."),
        li("A full site with a membership area or store, a high-risk payment processor, video delivery, content protection, a careers section and language versions: from 2,000 €."),
        p(
          "How I build any site step by step is covered on the ",
          link("website development", "/services/website-development"),
          " page, sites in several languages on ",
          link("multilingual website development", "/services/multilingual-website-development"),
          ", and moving an existing site off a builder on ",
          link("website redesign", "/services/website-redesign-services"),
          ". All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Adult website development: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does adult website development cost?", "A simple site for a creator or small agency is 700–1,400 €; a site with a membership area, high-risk payments, video delivery and language versions starts at 2,000 €. Design is included either way, and the fixed price comes after a short description of the project."],
          ["Can I build an adult website on Wix or Squarespace?", "Check their current terms first: general builders usually restrict adult content, and a site that breaks the rules can be taken down. A custom site on hosting that allows adult content in writing is the safer base for a business that depends on it."],
          ["Do OnlyFans creators need their own website?", "Not on day one, but it pays off once income matters. An own domain holds an SFW page you can share, links to every platform and an email list, so a ban or a policy change on one service does not cut you off from your fans."],
          ["Which payment processors work for adult websites?", "Processors that accept high-risk merchants, such as CCBill, Segpay and Epoch. Each reviews your site before approval, so terms, refund rules, support contacts and age checks are built in before you apply."],
          ["Will you keep my project and my name confidential?", "Yes. We can sign an NDA before you share details, nothing about the project is published, and the work runs on the access you choose to give."],
          ["Can you build a site for a US or UK agency from Poland?", "Yes. Everything is done online in English. My working day in Central European Time overlaps with UK hours fully and with US mornings, so calls fit your schedule. I invoice in EUR."],
          ["What should be ready before the build starts?", "A domain, a decision on the processor (or an open application), legal texts from your lawyer and an idea of who the site serves first: fans, creators you recruit or customers. Hosting can be chosen together."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order adult website design: what to send me"),
        p(
          "Send the brand, agency or creator name, the platforms you sell on, your current site or link-in-bio page, the payment processor you use or plan to use, the countries your visitors come from and whether you need a members area, a store or a careers page. You get back a list of pages and a price that will not change. Send it via the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
