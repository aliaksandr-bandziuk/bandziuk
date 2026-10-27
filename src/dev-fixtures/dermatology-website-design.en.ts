// Landing page fixture: Dermatology website design (EN), group
// «dermatology-website-design». New page.
// Semantic core: ref/batch-h2.md, group «dermatology website» + BRIEF.md:
// dermatology website design 170 (grid 210) (H1, guide intro, several H2, cost
// H2, FAQ) · dermatologist website design / dermatologist web design, grid 210
// each (metaTitle, H2 on clinician profiles, H2 on insurance and booking) ·
// best dermatology website design 10 (H2 on agency packages, templates and a
// custom build). «dermatologist website» 590 is patients looking for a
// dermatologist (SERP: metrolinadermatology, westdermatology, healthyskinmd,
// providence…) → not targeted; «price dermatology», «bridges dermatology» —
// noise.
// Intent: ref/intent-check-batch-h.md — «dermatology website design» vs
// «medical website design» 0 of 10 shared URLs, 1 shared domain; vs «med spa
// website design» 0 shared URLs → own page. ref/intent-check-delta.md —
// «dermatologist website» vs «dermatology website design» 0 shared URLs, 0
// shared domains. SERP for the design query: medical marketing agencies with
// dermatology packages (dr-leonardo, fullmedia, medelite,
// infinitymedicalmarketing), Behance, Pinterest, builders → practice owners
// choosing who builds the site (agencies not named on the page).
// This page = how a dermatology practice site is planned and built: two paths
// (medical / cosmetic) as navigation, templates and booking; sitemap of page
// types (Mohs only as a page type); condition page template with required
// reviewer and review date; booking by visit type, insurance next to booking,
// deposits for cosmetic consultations (Landi Room / Stripe proof); exact
// clinician titles (board named, PAs and NPs); clinical images on tap and
// consented before-and-after cases; skin photos routed to the portal or
// teledermatology tool (HIPAA, GDPR — general); WCAG and a range of skin
// tones; AI-readable build (Giuseppe proof); agency packages vs templates vs
// custom; cost.
// NOT on this page: ranking condition and skin check pages, screening content,
// reviews, Google Business Profile (/seo-for-dermatologists — linked);
// general practice sites (/medical-website-design — linked); a cosmetic side
// run as its own med spa brand (/med-spa-website-design — linked); surgical
// aesthetics (/plastic-surgeon-website-design — linked).
// Owner’s rules: never say there are no clients from the visitor’s industry;
// every page covers AI search; medical content stays factual, no treatment
// promises, privacy rules only in general terms.
import { p, h2, li, link, k } from "./pt";

export const dermatologyWebsiteDesignEn = {
  lang: "en",
  group: "dermatology-website-design",
  slug: "dermatology-website-design",
  title: "Dermatology website design",
  heading: "Dermatology Website Design for Medical and Cosmetic Practices",
  excerpt:
    "Dermatology website design and build from one person: separate paths for medical and cosmetic patients, condition pages with a named dermatologist reviewer, booking by visit type, exact clinician titles and skin photos routed to your patient portal instead of a website inbox.",
  seo: {
    metaTitle: "Dermatologist Website Design for Skin Clinics | Bandziuk",
    metaDescription:
      "Dermatology website design and build: medical and cosmetic paths, condition pages with a named reviewer, booking by visit type, safe photo routing. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Medical and cosmetic, kept apart"],
  heroPhonePoints: ["Book a skin check", "Conditions we treat", "Cosmetic consultations", "Plans we accept"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple dermatology practice website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Dermatology practice website with medical and cosmetic sections, condition page templates with reviewer fields, booking by visit type, clinician and location pages, consented galleries and portal links, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with dermatology website design",
      items: [
        { _key: k("o"), iconName: "layers", title: "Two paths from the first screen", text: "Skin conditions and checks on one side, cosmetic on the other" },
        { _key: k("o"), iconName: "file-text", title: "Condition pages with a named reviewer", text: "Reviewer and review date are required fields" },
        { _key: k("o"), iconName: "plug", title: "Booking by visit type", text: "Skin check, follow-up or cosmetic consultation" },
        { _key: k("o"), iconName: "users", title: "Who treats what, stated exactly", text: "Dermatologists, PAs, NPs and aestheticians" },
        { _key: k("o"), iconName: "image", title: "Clinical images and galleries with consent", text: "Shown on tap, captions without promises" },
        { _key: k("o"), iconName: "sparkles", title: "Clear to Google and AI assistants", text: "Conditions, clinicians, plans and hours as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple dermatology practice website", value: "700–1,400 €", note: "design and build" },
        { _key: k("r"), label: "Medical and cosmetic sections, visit-type booking, profiles, galleries", value: "from 2,000 €", note: "design and build", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: websites I have designed and built for services that patients and clients must trust",
      subtitle:
        "Giuseppe, a psychotherapist in Milan, runs a private practice where people decide whether to trust him before they book: I rebuilt his site on Next.js and Sanity with a calm design, Italian and English versions and structured data, and his new pages already appear in ChatGPT answers. A Warsaw beauty salon sells an online course from a page I built with Stripe Checkout — the same tool that takes a deposit for a cosmetic consultation. My own site runs in three languages with schema.org and hreflang on every page; a retail analytics consultant’s 153-page expert site is written to be quoted by AI assistants, the way condition pages should read; and a Warsaw renovation and investment company has the premium look a cosmetic section can borrow.",
      picks: [
        "psychotherapist-website-milan",
        "e-commerce-landing-page-with-secured-video-access",
        "develop-and-optimize-a-personal-website-with-seo",
        "consultant-website-design-retail-analytics",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your dermatology website design",
      subtitle: "Within one business day I send a proposed page list for the medical and cosmetic sides and a fixed price. Please leave out any patient details.",
      contextLabel: "Practice name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which kinds of dermatology does the practice offer?", options: ["Medical dermatology only", "Medical and cosmetic", "Mohs and skin surgery as well", "Mostly cosmetic"] },
        { _key: k("z"), question: "What website do you have now?", options: ["No website yet", "A site from our EHR or a marketing vendor", "A template site on WordPress, Wix or Squarespace", "An older custom site"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Dermatology website design is the work I do for practices that treat skin disease and offer cosmetic treatments under one name: I plan the pages, design them and build the site myself, so one person answers for how it looks, how patients book and how search engines read it. The hard part is that a patient worried about a changing mole and a client comparing laser prices arrive at the same address."),

        h2("Dermatology website design with two paths: medical skin care and cosmetic treatments"),
        p("The first screen sorts visitors before anything else. Two labeled entries sit side by side — “Skin conditions and skin checks” and “Cosmetic treatments” — and each opens its own menu, its own page template and its own booking button. Both sides share the practice name, clinicians, locations and scheduling system."),
        p("The split runs deeper than the menu:"),
        li("medical pages use a quiet layout, clinical images only where they help a patient recognize something, and a booking button labeled with the visit type"),
        li("cosmetic pages carry richer photography and price ranges, set in the same typography so the practice still reads as one"),
        li("insurance appears on the medical side; consultation fees and self-pay prices appear on the cosmetic side and on medical visits that plans rarely cover"),
        li("cross-links between the sides are few and placed by hand, only where a patient’s next question really leads to the other side"),
        p(
          "A cosmetic side that runs as a separately branded med spa, with memberships and its own booking platform, is a different build, covered on the ",
          link("med spa website design", "/med-spa-website-design"),
          " page.",
        ),

        h2("Page types a dermatology practice website needs: conditions, skin checks, Mohs surgery, pediatric and cosmetic care"),
        p("Before design we agree a page list built from what the practice does and wants more of. A typical dermatology sitemap uses these page types, each with its own template:"),
        li("condition pages — acne, eczema, psoriasis, rosacea, hair loss, warts and the other problems you see most"),
        li("skin check pages for full-body exams and for a single spot that has changed"),
        li("surgical dermatology pages — excisions, biopsies and Mohs surgery where a surgeon on your staff performs it — with the referral route explained"),
        li("a pediatric section if a dermatologist sees children, with the youngest age stated"),
        li("cosmetic treatment pages for the lasers, peels and injectables you actually offer"),
        li("clinician profiles, location pages, insurance and self-pay information and a new-patient page"),
        p(
          "A small practice starts with a few pages of each type and grows without new design work. Ranking them for each condition and town is covered on the ",
          link("SEO for dermatologists", "/seo-for-dermatologists"),
          " page.",
        ),

        h2("Dermatology condition page templates with a named reviewer and a review date"),
        p("Patients act on what condition pages say, so I build them in the CMS as a template with fixed fields instead of one free text box:"),
        li("a plain-language summary for the patient, with the medical term explained once"),
        li("a “When to book a visit” block near the top"),
        li("what happens at the visit and which treatments the practice offers, with no promised outcome"),
        li("the reviewing dermatologist, picked from the clinician list, and the date of the last review — the page cannot be published with either field empty"),
        li("the matching visit type, so the booking button on that page opens the right appointment"),
        p("Pages with a review date over a year old appear on a list in the CMS, so the practice sees which texts are due. Your clinicians supply or approve the medical content; I fit it into the template in plain language."),

        h2("Online booking by visit type on a dermatologist website: skin checks, follow-ups and cosmetic consultations"),
        p("In dermatology the same “Book now” button can mean a short spot check or a long cosmetic consultation, and a wrong slot costs the front desk a phone call. The booking path asks one question first — what is the visit for — and then hands the patient to your scheduling system with that visit type already chosen:"),
        li("a full-body skin exam"),
        li("one spot or mole that has changed"),
        li("a new skin problem, or a follow-up for an existing one"),
        li("a cosmetic consultation"),
        li("surgery or Mohs: a request or referral form, because these are scheduled after an assessment"),
        p("Whether the visit type can be preselected depends on your EHR or scheduling tool — a deep link, a widget or only a request form — and I check that before quoting. On the medical side, accepted plans sit next to the booking button as a text list, with a note where a referral is needed. On the cosmetic side, the consultation fee and any deposit show before the patient starts; a deposit can be paid online through Stripe Checkout."),

        h2("Clinician profiles in dermatologist web design: board certification, PAs, NPs and who treats what"),
        p("Patients often choose a person before a practice, and in dermatology they want to know who will actually see them. Every clinician gets a profile from one template, and titles are written exactly:"),
        li("dermatologists with the certifying board named, for example the American Board of Dermatology, and fellowships such as Mohs surgery listed only where completed"),
        li("physician assistants and nurse practitioners introduced by their own title, with the visits they handle, such as acne follow-ups or skin checks"),
        li("aestheticians and nurses on the cosmetic side, with the treatments each of them performs"),
        li("languages, locations, working days and a button to book with that person"),
        p(
          "Each condition and treatment page shows who sees this problem and where. The profile approach for other specialties is on the ",
          link("medical website design", "/medical-website-design"),
          " page.",
        ),

        h2("Clinical photos and before-and-after galleries on a dermatology website"),
        p("A close-up of severe psoriasis helps one patient recognize their condition and upsets another who only wanted to read. On condition pages, clinical images sit behind a “Show image” tap with a short description, and they come from the practice’s own consented cases or a licensed medical image library, never from an image search."),
        p("Before-and-after cases live on the cosmetic side only. Each case is a CMS entry with the treatment, the number of sessions, the clinician and the date the patient signed the photo consent; without that date the case stays unpublished. Captions describe what was done, not what a visitor will get, and every gallery page says that results differ from person to person."),

        h2("Skin photos, teledermatology and patient forms: keeping health data off the dermatology website"),
        p("Patients want to send a picture of a rash before they come in, but a skin photo with a name attached is health information. In the US that brings HIPAA into play; in the EU, it is special category data under the GDPR. So the site never receives the file. The “Send photos” and “Online visit” buttons open the patient portal or teledermatology tool your practice already uses, where the provider has signed the agreements your compliance adviser requires — in the US, a business associate agreement."),
        p("The same rule shapes the rest of the build:"),
        li("the public contact form asks for a name, a phone number, the visit type and a preferred time, nothing about the skin"),
        li("new-patient paperwork, medication lists and consent forms are completed in the portal, linked from the booking confirmation page"),
        li("analytics and advertising tags stay off booking, portal and teledermatology pages"),
        p("This is design practice, not legal advice; your compliance officer confirms the setup."),

        h2("Accessible dermatology website design: contrast, older patients and every skin tone"),
        p("Many skin check patients are older, so the design follows WCAG at level AA: readable type, strong contrast, large tap targets and forms that work with a screen reader. Two points are specific to dermatology:"),
        li("photos and illustrations show a range of skin tones, because eczema, psoriasis or a pigmented spot can look different on darker skin, and patients should be able to recognize their own"),
        li("alt text describes a clinical image for someone who cannot see it, in the words a patient would use"),
        p("The visual style stays calm: a light background, one accent color kept for booking and no video that starts on its own on condition pages. The cosmetic side can be warmer, but it keeps the same type and spacing."),

        h2("A dermatology website that ChatGPT and Google AI Overviews can read"),
        p("Questions like “a dermatologist near me who takes my plan and sees children” or “who does Mohs surgery in [town]” are now typed into ChatGPT, Perplexity or Google’s AI Overviews. An assistant names only practices whose facts it can read and cross-check. The build keeps those facts as page text — conditions treated, visit types, clinicians with exact titles, locations, plans, languages and hours — and adds structured data for the practice, each location and each dermatologist, plus the reviewer and date on every condition page. Explicit rules in robots.txt tell AI crawlers what they may read, as on Giuseppe’s site, whose new pages already appear in ChatGPT answers."),
        p(
          "Staying in those answers takes continued work; see the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Best dermatology website design: agency packages, templates or a custom build"),
        p("A search for the best dermatology website design returns mostly medical marketing agencies with dermatology packages and template galleries. Each route has its place:"),
        li("a template is enough for a new solo practice that needs hours, a phone number and a booking link online"),
        li("an agency package bundles the site with ads and SEO for a monthly fee; ask whether the site, the domain and the content stay yours if you leave"),
        li("a custom build pays off with medical and cosmetic sides, several clinicians and locations and condition pages you plan to keep adding"),
        p(
          "With me, the domain and hosting are registered to the practice, and you receive the code and content at launch. Giuseppe’s move from WordPress to Next.js and Sanity took 44 working days to handover and kept 468 blog posts reachable with a 301 redirect from every old address — how an existing dermatology site changes design without losing Google positions. For surgical aesthetics, see ",
          link("plastic surgeon website design", "/plastic-surgeon-website-design"),
          ".",
        ),

        h2("How much dermatology website design costs"),
        p("One price covers the design and the development; there is no separate design fee."),
        li("A simple dermatology practice website — home page with both paths, a few condition and treatment pages, clinician profiles, accepted plans and booking: 700–1,400 €."),
        li("A full site with medical and cosmetic sections, condition and treatment templates with reviewer fields, booking by visit type, clinician and location pages, consented galleries, portal and teledermatology links and structured data: from 2,000 €."),
        p(
          "Hosting, domain and scheduling or portal subscriptions are paid to their providers. All ranges are on the ",
          link("pricing", "/pricing"),
          " page, and the way I build sites in general is on the ",
          link("website development", "/services/website-development"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Dermatology website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does dermatology website design cost?", "Design and build together cost 700–1,400 € for a simple practice site and from 2,000 € for a site with medical and cosmetic sections, condition page templates, booking by visit type, clinician pages and galleries. Once I know your services, clinicians and locations, I quote a fixed price. The first call, 15–30 minutes, is free."],
          ["Can the cosmetic side have its own look inside the same dermatology website?", "Yes, within limits. The cosmetic section can use its own photography, a warmer accent color and price-led layouts, while the logo, type and navigation stay shared, so patients see one practice. A fully separate brand with memberships is better served by its own med spa site."],
          ["Can the website open our scheduling system with the right visit type already selected?", "Often it can: many scheduling tools accept a link or widget setting for the appointment type or the provider. Where yours does not, the site collects the visit type in a short request form and the front desk confirms the slot. I test what your account allows before quoting."],
          ["How do clinician pages show board certification and the roles of PAs and NPs?", "Each profile names the certifying board in text, lists completed fellowships and introduces physician assistants and nurse practitioners by their exact title, with the visits they handle. Condition pages show which of them see that problem. You confirm every title before launch."],
          ["Where do patients send skin photos if not through the website form?", "Through your patient portal or teledermatology tool. The website links to it from the booking and online-visit pages, so the photo goes straight into a system built for health data and never sits in a website inbox or an email account."],
          ["Can we take deposits for cosmetic consultations online?", "Yes — through your scheduling tool if it handles deposits, or through a Stripe Checkout step added to the consultation request. I built Stripe payments into a page for a Warsaw beauty salon that sold more than 100 online courses from its first Google Ads campaign."],
          ["How do you work with a US dermatology practice from Poland?", "Remotely and in English. My afternoons and evenings in Warsaw overlap with the morning and early afternoon across US time zones, so review calls fit before or between clinic sessions, and design comments go into a shared file in between. I invoice in EUR or, by agreement, in another currency."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order dermatology website design: what to send me"),
        p(
          "Send me your practice name and current website, the medical and cosmetic services you offer, your clinicians with their titles, your locations, the insurance plans you accept and the scheduling, EHR or portal system you use. Two or three practice websites you like help as well. Please leave out any patient details. You get a proposed page list and a fixed price in reply. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
