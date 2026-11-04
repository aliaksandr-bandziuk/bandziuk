// Landing page fixture: website development for beauty businesses (EN), group
// «beauty-industry-websites». Rebuild of the existing old-template page under
// the same address /website-development-for-beauty-professionals —
// replace-landing.cjs. This page is the PARENT of /beauty-salon-website.
//
// The problem being solved, found 02.11.2026: the parent and the child were
// two general pages about the same thing, and the head query of the family —
// «website for beauty salons» 320 — is assigned in research/pseo/core.csv to
// the CHILD. The parent has no query assigned at all. So the parent is turned
// into what its own text was already reaching for («Types of Beauty Websites I
// Create»): a page that routes the visitor to the right format and says only
// what is common to all of them.
//
// H1 constraint: the owner's Search Console data for this page was not
// available, so the change is deliberately limited — the semantic key
// («website development … beauty») stays in the H1 and only the promise
// changes. That keeps whatever the page accidentally ranks for and does not
// need the data to be safe.
//
// Routing targets are the pages that actually exist in EN and are already on
// the new template — verified live 02.11.2026. EN has med spa; RU and PL have
// optics and a cosmetology clinic instead, so each language routes to its own
// real set rather than to a uniform invented list.
//
// Dropped: the old template's hardcoded blocks, the reviewsFullBlock (owner's
// decision of 25.10.2026), the ✔/❌ table and the label heading «FAQ».
//
// Deliberately kept short: a hub that repeats its child's content competes
// with it. The shared part here is brief and the detail lives on the format
// pages.
import { p, h2, h3, li, link, k } from "./pt";

export const beautyIndustryWebsitesEn = {
  lang: "en",
  group: "beauty-industry-websites",
  slug: "website-development-for-beauty-professionals",
  title: "Website Development for Beauty Businesses",
  heading: "Website development for beauty businesses: choosing the right build for your format",
  excerpt:
    "I build websites for beauty businesses — salons, hair studios, spas, aesthetic clinics and tattoo studios. The formats differ more than they look: what decides a booking in a hair studio is not what decides one in an aesthetic clinic. This page says which page you need and what all of them have in common.",
  seo: {
    metaTitle: "Beauty industry websites — formats, cost and timeline",
    metaDescription:
      "Websites for beauty businesses: salon, hair studio, spa, aesthetic clinic, tattoo studio. What each format needs, what they share, what it costs.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Five formats, five builds", "Websites from €2,000", "Reply in 1 working day"],
  heroPhonePoints: ["Book a treatment", "Price list", "Our team", "Open Saturday"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Single-service landing page for a beauty business", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Full website: treatment pages, prices, team, online booking", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Redesign of an existing beauty website, keeping its rankings", price: 1000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "Formats",
      title: "Which beauty website format you need",
      items: [
        { _key: k("o"), iconName: "sparkles", title: "Multi-service salon", text: "Many treatments, several specialists, one booking system" },
        { _key: k("o"), iconName: "scissors", title: "Hair studio or barbershop", text: "The stylist's name and the colour portfolio decide" },
        { _key: k("o"), iconName: "droplet", title: "Day spa", text: "Packages, vouchers and slots booked for two" },
        { _key: k("o"), iconName: "shield-check", title: "Aesthetic clinic", text: "Qualifications, contraindications, no promised results" },
        { _key: k("o"), iconName: "pen-tool", title: "Tattoo studio", text: "Portfolio by style, by artist, and a deposit" },
        { _key: k("o"), iconName: "layers", title: "Not sure yet", text: "Send what you do and I will say which fits" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Which page fits your beauty business"),
        p(
          "A multi-service salon — hair, nails, brows, facials under one roof — is covered on ",
          link("beauty salon website design", "/website-development-for-beauty-professionals/beauty-salon-website"),
          ". A hair studio or barbershop has its own demand and its own build: ",
          link("hair salon website design", "/hair-salon-website-design"),
          ". A day spa is ",
          link("spa website design", "/spa-website-design"),
          ", an aesthetic clinic is ",
          link("med spa website design", "/med-spa-website-design"),
          ", and a tattoo studio is ",
          link("tattoo website design", "/tattoo-website-design"),
          ".",
        ),
        p("These are separate pages because they are separate jobs, not because it looks thorough. The questions a client asks before booking are different in each, and a site that answers the wrong set loses the booking while looking fine."),

        h2("What every beauty website needs, whatever the format"),
        li("a page per treatment with the price or a «from» price and how long it takes;"),
        li("booking that lands in the system the front desk already watches, not a second one;"),
        li("the people: who performs the work, with a photograph and a direct booking link;"),
        li("your own photographs of the rooms and the work, not stock images;"),
        li("speed on a phone, because that is where these sites are opened;"),
        li("prices as text rather than as a photographed price list, or search and AI assistants cannot read them."),
        p("That list is short and it is most of the value. The differences below are what the format pages are for."),

        h2("What actually differs between the formats"),
        h3("Multi-service salon"),
        p("The hardest part is the treatment list: twenty or thirty items, several specialists, and a client who wants one of them. The structure has to let somebody arrive on «lash lift» and book it without passing through a general services page."),
        h3("Hair studio and barbershop"),
        p("The client books a person and a result they have seen. The portfolio has to be organised by what was done — balayage on dark hair, grey coverage, a specific fade — and tied to the stylist who did it, not presented as one undifferentiated gallery."),
        h3("Day spa"),
        p("Here the unit sold is often a package or a voucher rather than a single treatment, and a slot is frequently booked for two people. Both change what the booking has to support, and vouchers mean the site needs a way to sell and redeem them."),
        h3("Aesthetic clinic"),
        p("This is the format with rules. Pages have to state who performs the procedure and with what qualification, what the contraindications are and what the recovery looks like — and they must not promise a result. Advertising law in several markets limits what a clinic may claim, and a page written like a salon page is a liability rather than an asset."),
        h3("Tattoo studio"),
        p("Portfolio by style and by artist, because nobody books «a tattoo» — they book a style from a person. And a deposit, because no-shows cost a full session, which makes the deposit flow part of the site rather than a detail."),

        h2("What a beauty website costs and what moves the price"),
        p(
          "A single-service landing page runs €700–1,400. A full website with treatment pages, prices, team profiles and online booking starts at €2,000. A redesign that keeps the existing rankings starts at €1,000. What moves the price: the number of treatment pages, whether booking has to integrate with an existing system, how many specialists get their own page, and how many languages. Design is included, never a separate line. The full list is on the ",
          link("pricing page", "/pricing"),
          ".",
        ),

        h2("How long a beauty website takes to build"),
        p("A landing page takes two to three weeks, a full site three to six. What stretches it is the material rather than the code: photographs, the treatment list with prices and durations, and who on your side signs off on the text."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: local service businesses I have built for",
      subtitle:
        "What these cases have in common with a beauty business: a client who decides on a phone, in minutes, by price and distance. A landing page with secured video access, a premium renovation site, SEO and UX for an auto repair company, a WordPress rebuild, and a tyre storage landing page with editable SEO.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for your beauty business website",
      subtitle:
        "I reply within one working day: which format fits, what I would build and at what price.",
      contextLabel: "Business name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you run?", options: ["Multi-service salon", "Hair or barbershop", "Spa", "Aesthetics or tattoo"] },
        { _key: k("z"), question: "What exists today?", options: ["No website", "An old website", "Only Instagram", "Only a Google profile"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being found by AI assistants, in any of these formats"),
        p("Clients increasingly ask ChatGPT, Perplexity or Google's AI Overviews before opening a booking app. The assistant answers from text it can read, which is why the same rule applies to every format on this page: treatments as text with prices and durations, markup that matches the visible text, and the same name, hours and treatment names on the site, the Google Business Profile and the booking platform."),
        p(
          "How this is done on a site that already exists is a separate job: ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ". And if the site is fine but the bookings are not coming from search, that is ",
          link("SEO for beauty salons", "/seo-for-beauty-salons"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Beauty business websites: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["We do several things at once — hair, nails and facials. Which page is ours?", "The multi-service salon page. The deciding factor is not the treatments themselves but whether one client books across them: if yes, the treatment list and the team page carry the site."],
          ["Why are these separate pages instead of one?", "Because the questions a client asks before booking differ by format. A tattoo client chooses a style and an artist; a spa client buys a package for two; an aesthetic clinic client is checking qualifications and contraindications. One page answering all of it answers none of it well."],
          ["How much does a beauty website cost?", "A landing page €700–1,400, a full site from €2,000, a redesign from €1,000. The number of treatment pages, the booking integration and the number of languages move the price."],
          ["Can the booking connect to the system we already use?", "Yes, and it should. A site that books into a second system nobody watches creates double bookings, which costs more than having no online booking at all."],
          ["We are an aesthetic clinic. Is anything different?", "Yes, and it matters. Advertising rules in several markets limit what a clinic may claim, so the pages state qualifications, contraindications and recovery instead of promising a result. A clinic page written like a salon page is a liability."],
          ["Do you build on website builders?", "No. A treatment catalogue with booking and a team section is exactly where builders run out, and moving off one later costs more than building on Next.js or WordPress in the first place."],
          ["Who owns the site after launch?", "You do: the code, the domain, the content and the CMS logins. Prices and the treatment list are edited by you without a developer, because in this business they change often."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a beauty business website: what to send me"),
        p("Send what you do, the treatment list with prices and durations, photographs of the rooms and the work, and which booking system you use. I will reply with which format fits, what I would build and at what price — and if one of the format pages above already describes your case exactly, I will point you there instead of restating it."),
      ],
    },
  ],
};
