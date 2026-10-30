// Landing page fixture: Med spa website design (EN), group
// «med-spa-website-design».
// Semantic core: ref/medical-practices.md (US): med spa website design 210
// (H1, H2, cost H2, FAQ) · medspa website 110 (H2 on the first screen, H2 on
// booking, metaTitle) · best med spa websites 50 (H2 on templates and custom
// design) · med spa branding 50 (H2 on visual style).
// Intent: ref/intent-check-medical-practices.md — «med spa website design» vs
// «med spa seo» 0 shared URLs, 0 shared domains → separate pages (sibling
// linked). SERP: design studios (studio3marketing, miladesignco, liftedlogic,
// lexidesign), associations (americanmedspa.org, themedspasociety.com) and
// galleries (dribbble, colorlib, pinterest) → owners choosing a designer and
// looking for examples.
// This page = how a med spa site is designed and built: first screen, treatment
// menu by treatment and by concern, booking systems (Boulevard, Mangomint,
// Vagaro — general), deposits, membership and package pages, before-and-after
// gallery design with consent, provider and medical director templates,
// branding and calm visual style (Giuseppe’s case), intake and consent forms
// (HIPAA in general terms, NDA medical system once), AI-readable build,
// templates vs custom, cost.
// NOT on this page: ranking work — treatment keywords, Google Business
// Profile, reviews routine, Instagram vs search (/med-spa-seo); surgical
// practices (/plastic-surgeon-website-design); beauty salons without medical
// treatments (beauty salon website page, linked once).
// Owner’s rules: every page covers AI search; design is included in the
// price; Giuseppe’s case first; never say there are no clients from the
// visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const medSpaWebsiteDesignEn = {
  lang: "en",
  group: "med-spa-website-design",
  slug: "med-spa-website-design",
  title: "Med spa website design and development",
  heading: "Med Spa Website Design and Development",
  excerpt:
    "I design and build med spa websites: a treatment menu that works on a phone, booking connected to your system, membership and price pages clients understand, before-and-after galleries with consent, provider pages and a calm look that suits a medical practice.",
  seo: {
    metaTitle: "Medspa Website Design for Aesthetic Clinics | Bandziuk",
    metaDescription:
      "Med spa website design: treatment menu, booking with deposits, memberships, consented before-and-after galleries, provider pages, design included. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Book a consultation", "Treatment menu", "Join the membership", "Before & after"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple med spa website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Med spa website with treatment and concern pages, provider pages, galleries, memberships, booking integration and location pages, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with med spa website design",
      items: [
        { _key: k("o"), iconName: "layers", title: "A treatment menu that works on a phone", text: "By treatment and by concern, one template for all" },
        { _key: k("o"), iconName: "plug", title: "Booking connected to your system", text: "Boulevard, Mangomint, Vagaro or a request form" },
        { _key: k("o"), iconName: "file-text", title: "Membership and price pages", text: "Fees, credits, packages and deposits in plain text" },
        { _key: k("o"), iconName: "image", title: "Before-and-after galleries with consent", text: "Filters by treatment, same light, no retouching" },
        { _key: k("o"), iconName: "shield-check", title: "Forms that keep health details off the site", text: "Intake and consent stay in your booking system" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Treatments, providers and prices as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple med spa website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Treatments, providers, galleries, memberships, booking", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: websites I have designed and built",
      subtitle:
        "First, the site of Giuseppe, a psychotherapist in Milan: a private medical practice with a calm design for anxious visitors, strict rules on wording checked by the CMS and 468 blog posts moved with 301 redirects from every old address. Then a premium website for a Warsaw renovation and investment company, a luxury real-estate platform in Cyprus with a filterable catalog in five languages, a multilingual site for an education agency and a WordPress rebuild for a wheel-renovation workshop. What a med spa takes from them: a refined look that stays readable, a large catalog that is easy to browse and a clear path to booking.",
      picks: [
        "psychotherapist-website-milan",
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "full-multilingual-website-development-and-seo-for-student-services",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your med spa website",
      subtitle: "Within one business day you get a proposed list of pages, what the first phone screen should hold and a fixed price.",
      contextLabel: "Med spa name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website yet", "A Wix or Squarespace site", "A template from a marketing vendor", "An older custom site"] },
        { _key: k("z"), question: "Which booking system do you use?", options: ["Boulevard", "Mangomint", "Vagaro", "Another one or none"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Med spa website design shapes what most clients see before they walk in, and I design and build the site myself, so the look, the booking flow and the code come from one person at one price. A medspa website has a narrower job than it seems: help someone who already wants a treatment choose you, trust the person who will perform it and book — usually on a phone, often late in the evening."),

        h2("Medspa website first screen: treatments, location, provider and a booking button"),
        p("Visitors arrive with a question, not to admire a hero video. The first screen answers it in four lines:"),
        li("what you do and where — “Injectables, laser and skin treatments in Scottsdale”, not “Reveal your glow”"),
        li("a booking button and a text or call button, the same on every page"),
        li("the location, or each location, with hours"),
        li("a sign of medical oversight: the medical director or the provider team, named"),
        p("The membership offer, gallery and reviews sit below. On phones a fixed bar at the bottom holds Book and Text, so the client never has to scroll back up to act."),

        h2("Med spa treatment menu design: navigation by treatment and by concern"),
        p("A med spa menu grows fast: neurotoxins, fillers, biostimulators, lasers, peels, facials, body treatments, weight loss. Visitors think in two ways. Some know the treatment — “Morpheus8”, “lip filler”. Others know only the concern — “forehead lines”, “sun spots”, “loose skin after weight loss”. The navigation offers both routes: a treatment menu grouped into injectables, laser and skin, and body, and a page for each concern that links to the treatments used for it, without promising that any of them will fix it."),
        p("Every treatment page follows one template, so a client comparing two treatments finds the same facts in the same place: what it is, who performs it, the visit, downtime, sessions, price basis, aftercare, gallery cases and a booking button preset to that treatment. Your team adds a new device or product in the CMS without a designer."),

        h2("Online booking on a med spa website: Boulevard, Mangomint, Vagaro and deposits"),
        p("Most med spas already book through a system built for them — Boulevard, Mangomint, Vagaro, Zenoti or similar. The website does not replace it; it hands the client over at the right moment. Depending on what your system allows:"),
        li("a booking button that opens the system’s own flow with the treatment or provider already selected"),
        li("an embedded widget on treatment pages, loaded only when the client taps, so the page stays fast"),
        li("a consultation request form for new clients and for treatments that need an assessment first"),
        p("Deposits and cancellation terms are shown before booking starts, not as a surprise on the last step. New-client consultations are kept apart from rebooking: returning clients want two taps, new clients want reassurance first."),

        h2("Membership, package and price pages on a med spa website"),
        p("Memberships keep a calendar full, yet they are often explained in a block of small print. A membership page is designed like a product page: the monthly fee, what it includes, how credits roll over, member prices, how to cancel and a sign-up button that leads into your system’s membership checkout. Packages — a laser series, a facial program — get a small table that shows the price per session."),
        p("Prices are text, not images, and staff edit them in the CMS. Where you prefer ranges, the layout shows the range and what moves it: units, syringes, size of the area."),

        h2("Before-and-after gallery design for med spas: consent, consistent photos, no editing"),
        p("The gallery is where clients slow down and look closely, so it should help them judge rather than dazzle them. Each case shows the treatment, area, number of sessions, time between photos and the provider, with filters by treatment and concern. Design rules keep it honest:"),
        li("photos published only with the client’s written consent, kept with the case record"),
        li("the same light, angle and background before and after, no filters and no retouching"),
        li("faces cropped or eyes covered where the client prefers"),
        li("a short note that results vary, next to the photos rather than hidden in the footer"),
        p("Thumbnails load first and open larger on tap, so a page with fifty cases still opens quickly."),

        h2("Provider and medical director pages in med spa website design"),
        p("Clients book a person as much as a treatment. Every provider gets a profile from one template: a real photo in your rooms, name and credential as text, training, the treatments they perform, languages and a “Book with” button. The medical director’s page explains the role in plain words — protocols, supervision, handling complications — without suggesting they perform every treatment when they do not."),
        p("In aesthetics, where clients look closely at faces, stock models are spotted at once. A half-day shoot of your team, rooms and devices does more for the site than any template image."),

        h2("Med spa branding on the website: photography, typography and a calm visual style"),
        p("Med spa branding often borrows from luxury hotels and cosmetics. It works while it stays calm: a short palette, one accent color kept for booking, a refined serif or sans for headings, space and real photographs. It stops working when it turns into sliders, discount pop-ups and countdown timers. Many clients are nervous about needles or about how they will look afterwards; the design should lower that tension, not add to it."),
        p("Giuseppe, a psychotherapist in Milan, needed the same effect for people arriving in a state of anxiety. His site uses a dark base broken by light sections, a serif typeface whose italic is drawn separately, very few colors and nothing that hurries the reader. His profession has strict advertising rules, so the CMS warns the editor when a text contains wording his profession’s advertising rules make risky — promised outcomes, patient testimonials, discounts. A med spa site can carry the same kind of check for phrases like “guaranteed results” or “painless”."),

        h2("Intake forms, consent and client privacy on a med spa website"),
        p("Medications, allergies, pregnancy, past treatments — aesthetic medicine needs this information, but a website contact form is the wrong place for it. The public form asks for a name, contact details, the treatment of interest and a preferred time, with a note not to share medical details. Intake questionnaires and consent forms run in your booking or charting system, which is built for them. In the US, whether HIPAA applies depends on how the practice is set up; where it does, any form provider that receives health information signs a business associate agreement, and state privacy laws can add their own rules. Analytics and ad pixels stay off booking and intake pages."),
        p("About five years ago I worked on a medical software project with patient records; an NDA keeps its name private. It left me with one rule for clinic sites: ask online only for what the booking needs. Your compliance adviser confirms the final setup."),

        h2("A med spa website that ChatGPT and Google AI Overviews can read"),
        p("When a client asks ChatGPT or Google’s AI Overviews which med spa nearby offers a treatment or has a nurse practitioner for lip filler, the answer is built from text the assistant can read. The build keeps treatments, providers and credentials, locations, hours, prices and membership terms in plain HTML rather than images or scripts, adds structured data for the business, its providers and locations, and matches your Google profile. Giuseppe’s site shows how this pays off: explicit rules for AI crawlers in robots.txt and structured data for the practitioner and services, and his new pages already appear in ChatGPT answers."),
        p(
          "Ongoing work on those answers is described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page; ranking for treatments and “near me” searches is on the ",
          link("med spa SEO", "/med-spa-seo"),
          " page.",
        ),

        h2("Best med spa websites: templates, vendor platforms or a custom design"),
        p("Lists of the best med spa websites mostly show striking home pages. What makes them work sits further down: a treatment menu that fits a phone, booking two taps away, galleries with real cases, named providers and prices that answer the question. A builder template or a site from a med spa marketing vendor is a fair start for a new practice with one provider. A custom design pays off with several providers or locations, a long treatment menu, memberships and plans to grow from search. If a vendor hosts your current site, ask whether you can take the content and domain with you."),
        p(
          "Moving from an older site keeps its Google positions when every address is mapped and redirected — the method that carried all 468 of Giuseppe’s blog posts to the new site, described on the ",
          link("website redesign", "/services/website-redesign-services"),
          " page.",
        ),

        h2("How much med spa website design costs"),
        p("There is no separate design fee: the visual design, the templates and the build come in one price."),
        li("A simple med spa website — home, treatment menu, providers, prices, booking button and contact: 700–1,400 €."),
        li("A full site with treatment and concern pages, provider pages, galleries, membership pages, booking integration and location pages: from 2,000 €."),
        p(
          "My general build process is described on the ",
          link("website development", "/services/website-development"),
          " page, and medical practices of other kinds are covered on ",
          link("medical website design", "/medical-website-design"),
          ". Surgical practices have their own page on ",
          link("plastic surgeon website design", "/plastic-surgeon-website-design"),
          ", and salons without medical treatments on ",
          link("beauty salon websites", "/website-development-for-beauty-professionals/beauty-salon-website"),
          ". All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Med spa website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a med spa website cost?", "A simple site costs 700–1,400 €; a site with treatment and concern pages, provider pages, galleries, memberships and booking integration starts at 2,000 €. Both include design, and the quote is fixed once I see your treatment list."],
          ["How long does it take to design and build a med spa website?", "Usually four to seven weeks from the brief. Most of the time goes into content: treatment texts approved by your providers, gallery cases with consent and team photos. A simple site can be ready sooner."],
          ["Can you connect Boulevard, Mangomint or Vagaro?", "Yes, through the booking links, widgets or embeds your system offers; most offer at least one. I check what your account allows before the quote, so the booking flow in the design is one that actually works."],
          ["Can clients buy a membership on the website?", "The membership page explains the terms and sends the client to your system’s membership or checkout page, so billing stays where your staff manage it. If your system has no online sign-up, the button opens a short request form."],
          ["Can our staff update prices, treatments and providers?", "Yes. Prices, treatment pages, provider profiles and gallery cases are edited in a simple CMS, on WordPress or a headless CMS such as Sanity, and the layout stays consistent whatever is added."],
          ["Can you redesign our med spa website without losing Google rankings?", "Yes. I list every URL the old site has, point each one to its new page with a 301 redirect, keep the page titles and markup, and watch Search Console for errors in the weeks after launch."],
          ["Can a web designer in Poland build a site for a US med spa?", "Yes. The whole project runs online and in English; I work from Warsaw, and my CET afternoon is your morning, so review calls fit before the spa opens. Invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order med spa website design: what to send me"),
        p(
          "Send your current website or Instagram, the list of treatments and providers, your locations, the booking system you use, membership terms if you have them and a few photos of the rooms and team. I will reply with a page plan, a first-screen sketch and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
