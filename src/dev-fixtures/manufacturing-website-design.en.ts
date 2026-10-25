// Landing page fixture: Manufacturing website design (EN), group
// «manufacturing-website-design». New page.
// Semantic core: ref/nonprofits-manufacturers.md / .csv (US) and BRIEF.md:
// manufacturing company website design / website design for manufacturing
// companies / website design for manufacturing / manufacturing website design
// 390 each (H1, metaTitle, several H2) · industrial website design 170 (H2) ·
// website design for industrial 90 (in text) · manufacturing website design
// agency 90 + manufacturing website design company 50 (H2, positioned as one
// designer-developer) · best manufacturing websites 90 + best manufacturing
// website design 10 + manufacturing website examples 20 + industrial website
// design examples / ideas / inspiration 10 each (H2, patterns only, no real
// companies named) · modern industrial website design 10 (in text) ·
// industrial website 40 (in text).
// SERP: agencies (Oyster, Ramotion, Lform, WebFX, DBS) plus inspiration
// (Pinterest, Dribbble).
// Intent: ref/intent-check-nonprofits-manufacturers.md — «manufacturing website
// design» vs «manufacturing website development» 0 shared URLs, 1 shared domain
// → this is the design page, development is the existing
// /manufacturing-company-website (its thesis «your buyer already knows what
// they need» is not repeated here). «industrial website design» vs
// «manufacturing website design» 0 shared URLs, 2 shared domains, both
// agencies + inspiration → one page, «industrial» in its own H2.
// «manufacturing website design» vs «b2b website design» 0 shared URLs →
// separate from /b2b-website-design.
// This page = what engineers, buyers and quality managers see: real plant
// and part photography instead of stock factories, capability / process /
// equipment layouts, spec tables readable on a phone on the shop floor, units
// and decimal separators, industries-served and quality page layouts, RFQ form
// with CAD upload, configurators (general), German and other language
// versions, patterns of the best manufacturing websites, AI-readable design.
// Design is sold with development; prices include both.
// NOT on this page: structure by industry / application / product in general,
// catalog page order, gated content, CRM / ERP / PIM (/b2b-website-design);
// how the site is built, CMS and catalog data (/manufacturing-company-website);
// manufacturing SEO (/manufacturing-seo); one industry in depth
// (/services/website-development-for-lingerie-manufacturers); hreflang and
// editing workflow (/services/multilingual-website-development).
// Owner’s rules: never say there are no clients from the visitor’s industry;
// every page covers AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const manufacturingWebsiteDesignEn = {
  lang: "en",
  group: "manufacturing-website-design",
  slug: "manufacturing-website-design",
  title: "Manufacturing website design",
  heading: "Manufacturing Website Design",
  excerpt:
    "I design manufacturing websites and build them myself: photography of your own plant and parts, capability and equipment pages, spec tables an engineer can read on a phone at the machine, RFQ forms that take CAD files and German or other language versions for export buyers.",
  seo: {
    metaTitle: "Website Design for Manufacturing Companies | Bandziuk",
    metaDescription:
      "Manufacturing website design with the build included: real plant photos, capability pages, spec tables that work on a phone, RFQs with CAD upload. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Capabilities and equipment", "Specs in mm / in", "Upload STEP or DXF", "Deutsch · English"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple manufacturing website, design and build", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Manufacturing website with capability, equipment, industry and quality page designs, spec tables, RFQ with CAD upload and language versions, design and build", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with manufacturing website design",
      items: [
        { _key: k("o"), iconName: "image", title: "Your plant and parts, not stock factories", text: "A shot list for machines, people and finished parts" },
        { _key: k("o"), iconName: "layers", title: "Capability, equipment and industry layouts", text: "One template per page type, reused as you grow" },
        { _key: k("o"), iconName: "gauge", title: "Spec tables that work on a phone", text: "Units, tolerances and materials without zooming" },
        { _key: k("o"), iconName: "file-text", title: "RFQ forms with CAD and drawing upload", text: "Several files, one request, a clear confirmation" },
        { _key: k("o"), iconName: "shield-check", title: "A quality page procurement can check", text: "Certificates, scope, inspection equipment" },
        { _key: k("o"), iconName: "message-circle", title: "German and other language versions", text: "Layouts drawn for the longest language" },
      ],
      prices: [
        { _key: k("r"), label: "Simple manufacturing website", value: "700–1,400 €", note: "design and build" },
        { _key: k("r"), label: "Capability, equipment and quality pages, RFQ with CAD upload, languages", value: "from 2,000 €", note: "design and build", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: websites I have designed and built",
      subtitle:
        "A premium visual style for a renovation and investment company, a new design for an architecture studio, one design system across ten countries and several languages for an education agency, and service sites for a car repair shop and a wheel-renovation workshop with one clear request per page. On a manufacturer’s site I use the same approach: layouts drawn for a phone first, real work shown instead of stock images, and a request path that collects what is needed to quote.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your manufacturing website design",
      subtitle: "I reply within one business day with a plan for the home, capability, equipment and RFQ pages and a fixed price.",
      contextLabel: "Company name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What should the site show first?", options: ["Contract manufacturing capabilities", "Our own product range", "Both", "Not sure yet"] },
        { _key: k("z"), question: "What do you have now?", options: ["A site that looks dated", "A site that is hard to use on a phone", "Only a PDF brochure or catalog", "No website"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Manufacturing website design is what I do for machine shops, fabricators, molders, contract manufacturers and companies that make their own components, and I build the sites myself, so design and development come from one person at one price. A manufacturer’s site is read by people with very different jobs — a design engineer at a CAD workstation, a buyer collecting quotes, a quality manager checking certificates, a production lead looking something up on a phone next to a machine — and the design has to work for each of them."),

        h2("Manufacturing website design: who reads the site and on which screen"),
        p("The same capability page is opened on a wide monitor in an engineering office and on a phone in a noisy plant. Design decisions follow from that:"),
        li("type large enough and contrast strong enough to read under shop lights or near a window"),
        li("buttons big enough to tap without zooming, spaced so a thumb does not hit the wrong one"),
        li("menus that name processes and industries plainly, so nobody has to guess what “Solutions” contains"),
        li("pages that stay light, because plant Wi-Fi and mobile signal inside steel buildings are often weak"),
        p("A modern industrial website design does not need dark backgrounds, sparks and slow video to look serious. It needs clear pages that open fast."),

        h2("Industrial website design without stock photos: your plant, machines and parts"),
        p("Stock images of robot arms, sparks and glowing factories appear on so many industrial websites that they tell a buyer nothing about you. Your own photos do: the machines, the people running them, the inspection room, the parts that leave the dock. Before a photo session I send a shot list:"),
        li("each machine type with an operator, in the same light and framing"),
        li("close-ups of finished parts with something that shows scale, against a plain background"),
        li("the inspection area, measuring equipment and the clean or controlled area if you have one"),
        li("raw material stock, packing and loading, which show capacity better than adjectives"),
        p("Customer parts appear only with permission, and drawings or part numbers visible in a shot are blurred. Short silent video loops of a process can work on a capability page, as long as the page still loads quickly on a phone."),

        h2("Capability and process page layouts in website design for manufacturing companies"),
        p("A capability page answers one question: can this plant make my part? The layout puts the answers in the order an engineer looks for them:"),
        ol("The process and one sentence on what it is used for."),
        ol("Materials, tolerances, finishes and the largest part size, in a short table."),
        ol("Quantities from prototype to production, typical lead times, secondary operations."),
        ol("Photos of real parts made with this process."),
        ol("A request button with the process already selected."),
        p("Every capability page uses the same template, so a new process your team adds looks like the others."),
        h3("Equipment list layout: a sortable table rather than a gallery"),
        p("An equipment page designed as a table — machine type, make and model, axes, work envelope, quantity — lets an engineer sort by size and see in seconds whether a part fits. A small photo can sit in each row; the data stays as text."),

        h2("Spec tables an engineer can read on a phone on the shop floor"),
        p("Specification tables break on phones more than any other element of a manufacturing site. The design handles them deliberately:"),
        li("on narrow screens, wide tables turn into stacked cards, with the parameter name next to each value"),
        li("units sit in the column header, and values are given in millimeters and inches where your buyers use both"),
        li("decimal separators follow the language: a point in English, a comma in German and Polish"),
        li("tolerances use the ± sign and the same notation everywhere"),
        li("tables are real text, never images, so they can be copied into a quote or an email"),
        p("The datasheet PDF sits one tap away from the table for anyone who needs to print or forward it."),

        h2("Industries-served and quality page designs for a manufacturing website"),
        p("Buyers from aerospace, medical or automotive open the page for their industry first. Each one follows the same layout: the requirements of that sector, the certifications that apply, the kind of parts you make for it (shown generically where customer work is confidential) and a request button."),
        p("The quality page is designed for the person who signs off on a new supplier. It shows each certificate with the standard, scope, certifying body and expiry date, a download of the certificate itself, the inspection equipment and the documents you provide with a shipment. Laid out as text, it can be checked in a minute instead of requested by email."),

        h2("RFQ form design with CAD file upload"),
        p("The request form decides whether an engineer sends you a job or moves on to the next supplier. Its design details matter as much as its fields:"),
        li("an upload area that accepts several files at once and names the formats you take, such as STEP, IGES, DXF and PDF"),
        li("the maximum file size written next to the upload, and a progress bar that also works on a phone"),
        li("files stored in a secure place for your team, not sent as large email attachments"),
        li("a short note on confidentiality, and an option to request an NDA before sending drawings"),
        li("a confirmation page that says who will reply and when, with a reference number"),

        h2("Product configurators on manufacturing websites: when they pay off"),
        p("For standard products with options — enclosures, cables, fasteners, filters, conveyors — a configurator lets the buyer choose size, material and options step by step and ends with a part number and a pre-filled request. It saves your sales team many repeated questions. For a job shop where every part is different, the RFQ with a drawing does the same job better. A configurator is built from the rules you give me; a full quoting system with live prices from your ERP is a separate, larger project."),

        h2("Manufacturing website design for export: German and other language versions"),
        p("Many European manufacturers sell to German-speaking buyers, and German words run long: menus, buttons and table headers designed in English often break. The design is drawn for the longest language from the first sketch. Each version also needs its own details: units and decimal separators, phone numbers with the country code, a contact person who speaks the language, and the legal pages that market expects, such as the Impressum on sites aimed at Germany — check the current requirements for each country."),
        p(
          "I work in English, Polish and Russian and build multilingual sites regularly. The technical side of language versions is on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page.",
        ),

        h2("A manufacturing website that ChatGPT and Google AI Overviews can read"),
        p("Engineers and procurement teams ask ChatGPT, Perplexity and Google’s AI Overviews for supplier lists. Assistants can only repeat what they can read. A design that keeps capabilities in banner images, certificates as logos and the equipment list in a PDF hides exactly the facts they look for. The same facts as page text, with structured data for the company and its locations, stay visible."),
        p(
          "Getting onto those lists is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page; being found in Google for your processes and materials is covered on the ",
          link("manufacturing SEO", "/manufacturing-seo"),
          " page.",
        ),

        h2("Best manufacturing websites: design patterns worth copying"),
        p("Collections of the best manufacturing websites and industrial website design examples range from global equipment makers to fifty-person machine shops. The sites that buyers actually use, whatever their size, tend to share five things:"),
        li("a first screen that names the processes, the industries served and the location"),
        li("real photos of the plant and parts, with captions"),
        li("capability pages built like datasheets, with an equipment table behind them"),
        li("certifications as text, close to the request button"),
        li("an RFQ path reachable from every page in one tap"),
        p("When you collect examples you like, open the equipment page and try the request form on your phone. A striking home page with a broken upload field loses the RFQ anyway."),

        h2("Manufacturing website design agency or one designer-developer"),
        p("A manufacturing website design agency or company splits the work between a strategist, a designer and developers. I do the structure, the design and the build myself, so the person who draws the spec table also makes it work on a phone."),
        ol("Brief. You send processes, equipment, industries, certificates, current photos and sites you like."),
        ol("Layouts. The home, a capability page and the RFQ form are drawn for a phone first and agreed."),
        ol("Design. Those pages are designed in full; the rest follow the same system."),
        ol("Build. The design becomes a fast site your team can edit."),
        p(
          "How the site is built — content management, catalog data, hosting — is on the ",
          link("manufacturing company website", "/manufacturing-company-website"),
          " page. General B2B patterns are on the ",
          link("B2B website design", "/b2b-website-design"),
          " page, and a new design for an existing site keeps its addresses and rankings through the ",
          link("website redesign", "/services/website-redesign-services"),
          " process.",
        ),

        h2("How much manufacturing website design costs"),
        p("Design is not sold separately: the price covers design and development."),
        li("A simple manufacturing website with capabilities, contacts and a request form: 700–1,400 €."),
        li("A site with capability, equipment, industry and quality page designs, spec tables, an RFQ form with CAD upload and language versions: from 2,000 €."),
        p(
          "All ranges are on the ",
          link("pricing", "/pricing"),
          " page. After a short description of the plant I give a fixed quote.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Manufacturing website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does manufacturing website design cost?", "The price covers design and development together: 700–1,400 € for a simple manufacturing website, from 2,000 € for a site with capability, equipment, industry and quality pages, spec tables, an RFQ form with CAD upload and language versions. I quote a fixed price after a short description of the plant."],
          ["Do you design manufacturing websites without building them?", "No. Design and build are one job. How a spec table turns into cards on a phone or how a large CAD upload behaves is settled while building, and a design delivered as pictures loses most of that."],
          ["We have no good photos of our plant. What should we do?", "Book a photographer for a normal production day, not a cleaned-up one, and give them my shot list; one visit usually covers the whole site. For launch, phone photos of your machines and parts taken near a window or under even light are better than any stock factory image."],
          ["Can engineers upload CAD files through the request form?", "Yes. The form accepts several files in formats such as STEP, IGES, DXF and PDF, shows the size limit and stores the files securely for your team instead of sending them as email attachments."],
          ["Can the site show specifications in both millimeters and inches?", "Yes. Tables can show both units side by side, or one unit per language version, with decimal separators that match the language."],
          ["How long does a manufacturing website take to design and build?", "Most of the time goes into collecting content: equipment data, certificates and photos. With those ready, the phone layouts take about two to three weeks and the finished site with language versions six to ten weeks in total."],
          ["Can you redesign our manufacturing website without losing Google rankings?", "Yes. Before launch I list every address that currently brings visitors, point each one to its new page with a permanent redirect and check the result in Google Search Console after the switch."],
          ["Do you work with manufacturers outside Poland?", "Yes. Design and development are done remotely, in English, Polish or Russian, for plants that sell in one country or export to many. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order manufacturing website design: what to send me"),
        p(
          "Send the company name and current website, your processes, equipment list and certifications, the industries and countries you sell to, any photos of the plant and parts you already have, and a few manufacturing sites you like or dislike. I will reply with a plan for the home, capability, equipment and RFQ pages and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
