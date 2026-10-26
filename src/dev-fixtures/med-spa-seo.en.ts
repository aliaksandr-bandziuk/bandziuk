// Landing page fixture: Med spa SEO (EN), group «med-spa-seo».
// Semantic core: ref/medical-practices.md (US): med spa seo 210 (H1, H2, cost
// H2) · seo for med spa 110 (H2, offer title) · med spa seo agency 110, med spa
// seo services 90, med spa seo company 90 (H2 on agency vs consultant, cost H2,
// FAQ) · med spa marketing agency 320 and best med spa marketing company 30
// (mentioned only: ads and social media are not offered) · med spa social
// media marketing 40 (Instagram vs search H2).
// Intent: ref/intent-check-medical-practices.md — «med spa seo» vs «med spa
// website design» 0 shared URLs, 0 shared domains → separate pages (sibling
// linked); vs «seo for plastic surgeons» 0 shared → own page; vs «seo for
// dermatologists» 0 shared → own page. SERP: med-spa SEO agencies
// (medspaseo.net, medicalspaseoagency.com, portraitcare, onthemap,
// radiantmdconsulting, mediaspearhead) → owners buying the service.
// This page: treatment pages (injectables, laser, body contouring), Google
// Business Profile per location, provider and medical director pages
// (state rules in general terms), prices, memberships and packages,
// before-and-after with consent, reviews within FTC rules, Instagram vs
// search, AI answers, technical SEO, agency vs consultant, prices (very
// competitive metros from 1,300 €).
// NOT on this page: design and build of the site (/med-spa-website-design);
// surgical procedures (/seo-for-plastic-surgeons); medical dermatology
// (/seo-for-dermatologists); salons and day spas without medical treatments
// (/seo-for-beauty-salons, linked once); paid ads and social media (not
// offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); Giuseppe’s case
// first; never say there are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const medSpaSeoEn = {
  lang: "en",
  group: "med-spa-seo",
  slug: "med-spa-seo",
  title: "Med spa SEO services for aesthetic clinics",
  heading: "Med Spa SEO Services for Aesthetic Clinics",
  excerpt:
    "I do med spa SEO for medical spas and aesthetic clinics: a page for each treatment you want booked, a Google profile for each location, named providers and medical director, clear prices and memberships, and visibility in AI answers — measured in consultations and booked treatments.",
  seo: {
    metaTitle: "SEO for Med Spas and Aesthetic Clinics | Bandziuk",
    metaDescription:
      "Med spa SEO: pages for injectables and laser, Google Maps for each location, provider and medical director pages, memberships, AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Treatments + Maps + AI answers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Botox near me", "Lip filler by an NP", "Membership prices", "Book a consultation"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Med spa SEO audit: website, Google Business Profile, competitors and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a med spa: treatment pages, provider pages, profiles, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a med spa or aesthetic clinic", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for a med spa",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for each treatment you want booked", text: "Lip filler, Botox by area, laser hair removal, contouring" },
        { _key: k("o"), iconName: "map-pin", title: "Google Business Profile for each location", text: "“Medical spa” category, services, real photos, booking link" },
        { _key: k("o"), iconName: "file-text", title: "Provider and medical director pages", text: "Credentials, treatments performed, reviewer and date" },
        { _key: k("o"), iconName: "image", title: "Galleries with consent, reviews by routine", text: "Same light and angle, no retouching, no paid reviews" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "Treatments, providers and prices assistants can quote" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in consultations and bookings", text: "By treatment line, not positions alone" },
      ],
      prices: [
        { _key: k("r"), label: "Med spa SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a med spa", value: "from 800 € / month", note: "treatment pages, maps, AI visibility, reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: websites I have built and optimized",
      subtitle:
        "First, the private practice of Giuseppe, a psychotherapist in Milan: a medical practice under strict advertising rules, where the CMS flags forbidden wording and new pages already appear in ChatGPT answers. Next to it, a luxury real-estate platform in Cyprus that I optimize monthly, a 3D laser scanning and BIM company with 29× more organic traffic since its rebuild, a Warsaw auto repair shop found through Google Maps and a premium renovation company. A med spa needs the same mix: high-value services chosen after research, local search and wording that stays within the rules.",
      picks: [
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your med spa",
      subtitle: "Within one business day you get the first three things I would change on your site and Google listing, with a fixed price. Please leave client details out.",
      contextLabel: "Med spa name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you want more bookings for?", options: ["Injectables", "Laser and skin treatments", "Body contouring", "Memberships"] },
        { _key: k("z"), question: "Where do most new clients find you now?", options: ["Instagram", "Google search and Maps", "Referrals and word of mouth", "Paid ads"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Med spa SEO is the work that brings people who search for Botox, lip filler, laser hair removal or body contouring near them to your own website and Google listing, and turns those visits into booked consultations and treatments. I work on my own and also build websites, so one person reads your search data, drafts the treatment pages with your providers and edits the code."),

        h2("What med spa SEO covers: treatment pages, Google Maps and AI answers"),
        p("A med spa client usually knows the treatment before choosing the place. They search “Botox near me”, “lip filler Scottsdale” or “laser hair removal cost”, look at the map, read reviews, open two or three websites and compare providers, prices and photos. SEO for a med spa works on each of those steps:"),
        li("a page for every treatment you want more bookings for, built around what clients type"),
        li("a Google Business Profile for each location, with the right category and services"),
        li("provider and medical director pages that show who performs each treatment"),
        li("price, membership and package pages that answer the cost question before the call"),
        li("galleries and reviews handled within consent and endorsement rules"),
        li("facts that ChatGPT and Google AI Overviews can read and repeat"),
        p("I report results in consultations and booked treatments by treatment line, not in traffic."),

        h2("Treatment pages for med spa SEO: injectables, laser and body contouring"),
        p("A single “Services” page listing twenty treatments cannot rank for each of them. Each treatment line gets a main page, and each treatment clients search by name gets its own page: who it suits, who performs it, what happens at the visit, downtime, the usual number of sessions, how the price is calculated, aftercare and a booking button."),
        h3("Injectable pages: neurotoxins, fillers and biostimulators"),
        p("Clients search by product and by area: “Botox for forehead lines”, “Dysport vs Botox”, “cheek filler”, “Sculptra”. A page per area or product family answers those searches better than one injectables page. It names the products you use, explains pricing per unit or per syringe and states who injects — a physician, nurse practitioner, physician assistant or registered nurse, as your state allows."),
        h3("Laser and skin treatment pages"),
        p("Laser hair removal, IPL photofacials, resurfacing, RF microneedling and chemical peels attract different clients with different questions: skin type, number of sessions, the device, time off work. Facial and peel pages also compete with day spas, so they need the medical detail a spa cannot offer."),
        h3("Body contouring and medical weight-loss pages"),
        p("Fat reduction, muscle toning and skin tightening are researched for weeks and compared by device name and price per area. Medical weight-loss programs need extra care: who prescribes, what the first consultation includes, and no promise of a number of pounds lost."),
        p(
          "Surgical procedures belong with a surgeon and have their own page on ",
          link("SEO for plastic surgeons", "/seo-for-plastic-surgeons"),
          "; medical skin conditions are covered on ",
          link("SEO for dermatologists", "/seo-for-dermatologists"),
          ".",
        ),

        h2("Local SEO for med spas: Google Business Profile and “near me” searches"),
        p("For “med spa near me” and “Botox near me” the map results take most of the clicks, and they depend on distance, the profile and reviews. The profile needs “Medical spa” as its primary category, secondary categories only where true, a services list with short descriptions, real photos of the rooms and team, hours and a booking link. Each location gets its own profile and its own page on the site, with directions, parking, the providers who work there and the treatments offered at that address — not every location has every laser."),
        p(
          "The general method for map results is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Med spa provider and medical director pages: E-E-A-T for aesthetic treatments"),
        p("Google treats pages about medical treatments as “Your Money or Your Life” topics and looks for experience, expertise and trust (E-E-A-T). Clients ask the same thing in plainer words: who will hold the needle? Each provider gets a page with the credential written as text — MD, NP, PA, RN or licensed aesthetician — training, the treatments they perform and a button to book with them. The medical director is named, with specialty and role."),
        p("State rules on who may inject, who must supervise and who may own a med spa differ and change. I build the pages around the arrangement you actually have; check the details with your state medical and nursing boards. Treatment pages carry a named clinical reviewer and a last-reviewed date, describe risks and side effects, and promise no outcome."),

        h2("Prices, memberships and packages in SEO for med spas"),
        p("“How much is Botox” and “lip filler cost” are typical questions before a first booking. A page that answers them — price per unit or per syringe, typical ranges by area, what the consultation costs and whether it is credited — keeps the comparison on your site. If you prefer not to publish exact prices, a range with an explanation still answers the search."),
        p("Memberships and packages deserve their own pages: what the monthly fee includes, how credits roll over, how a laser series is priced, financing and the manufacturer rewards programs you take part in. Existing clients search for these too, by your name and the word “membership”."),

        h2("Before-and-after photos and reviews in med spa SEO: consent and FTC rules"),
        p("Clients study galleries closely before booking. They help in search when each case has text: treatment, area, sessions, time between photos and provider. Photos go online only with the client’s written consent, taken in the same light and angle, without filters or retouching."),
        p("Reviews move a location up the map. A routine beats a campaign: a text with a direct review link after every visit, to every client. Paying or rewarding clients for reviews, or posting reviews by staff, breaks Google’s policies and the FTC’s rules on reviews and endorsements; the same rules cover influencers who get free treatments. Public replies never confirm that someone is a client or mention their treatment."),

        h2("Instagram or search: how med spa clients find you when they are ready to book"),
        p("Many med spas win their first clients on Instagram, and it remains good at showing results and personality to people who already follow you. It is weaker at the moment of decision: someone who types “lip filler in Austin” into Google or asks an assistant for a med spa nearby gets map listings, websites and directories first. SEO does not replace Instagram; it catches the demand Instagram creates. The cases, provider stories and treatment explanations you post can become pages that keep working after the post scrolls away."),
        p("I do SEO and websites; I do not run Instagram, paid social or ads."),

        h2("Med spa SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Clients now ask ChatGPT, Perplexity or Google’s AI Overviews questions like “Botox or Dysport for crow’s feet”, “how many laser hair removal sessions do I need” or “which med spa in Tampa has a nurse practitioner for lip filler”. An assistant builds its answer from sources it can compare — treatment pages, the map listing, review sites and directories — and favors a med spa whose facts agree across all of them. Getting a med spa into those answers goes by two names, GEO (generative engine optimization) and AEO (answer engine optimization), and in practice it comes down to:"),
        li("treatments, providers and credentials, the medical director, locations, hours and price ranges written as plain sentences"),
        li("two- or three-sentence answers to frequent treatment questions, signed off by your medical director"),
        li("the same business details on the site, Google, Yelp and RealSelf"),
        li("structured data that connects the business, its providers and its locations"),
        p(
          "Strict rules on wording are no obstacle: Giuseppe, a psychotherapist in Milan, works under tighter advertising rules than a med spa, and the new pages of the site I rebuilt for him are already quoted by ChatGPT. The method is described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Technical SEO for med spa websites: booking widgets, speed and copied text"),
        p("Med spa sites tend to lose positions for the same reasons:"),
        li("booking widgets, Instagram feeds, chat pop-ups and autoplay video that push the main content past 2.5 seconds on a phone"),
        li("treatment descriptions copied from device and product manufacturers, identical on hundreds of sites"),
        li("one booking page for everything, so a treatment search never meets a place to book it"),
        li("location pages that differ only by address"),
        li("no structured data naming the business, its providers, services and hours"),
        p(
          "If the site needs a rebuild rather than fixes, the ",
          link("med spa website design", "/med-spa-website-design"),
          " page describes how I design and build them.",
        ),

        h2("Med spa SEO agency or a single SEO consultant: who does the work"),
        p("Most firms selling med spa SEO services are agencies that bundle SEO with ads, social media, email and often a website on their own platform, usually under a long contract. That suits a group that wants every channel from one supplier. With me there is no account manager in between: the person on your calls is the one who plans the treatment pages, edits your WordPress or Next.js site and walks you through the monthly numbers. Whoever you hire, ask who writes the clinical content, who approves it and who owns the site when the contract ends."),
        p(
          "My approach for clinics in general is on the ",
          link("medical SEO", "/medical-seo"),
          " page and my SEO process on ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          ". Businesses without medical treatments will find more on ",
          link("SEO for beauty salons", "/seo-for-beauty-salons"),
          ".",
        ),

        h2("How much med spa SEO services cost"),
        li("Med spa SEO audit — website, Google profile, competing spas and AI answers: from 250 €, one-off, as a list of fixes in the order I would do them."),
        li("One-off work — treatment and provider pages, profiles, structured data, technical fixes: 250–700 €."),
        li("Monthly SEO for a med spa — new pages, maps, reviews routine, AI visibility and reports in bookings: from 800 € per month; in big US metros and in Dubai, where competition is very high, from 1,300 € per month."),
        p(
          "For one location outside a big metro, the audit plus five or six well-built treatment pages is often enough for a long time. All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Med spa SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a med spa cost?", "The audit starts at 250 €, separate tasks cost 250–700 €, and ongoing work starts at 800 € a month — 1,300 € a month in big US metros and Dubai. Tell me your treatments and locations and you get a fixed figure."],
          ["How long does med spa SEO take to bring bookings?", "Profile fixes and better titles can show within weeks. New treatment pages usually need two to four months to rank, longer for crowded treatments such as lip filler or laser hair removal in large cities."],
          ["Should treatment pages name products like Botox or Juvéderm?", "Clients search by product name, so pages usually name the products you actually use. They are trademarks, and manufacturers publish rules on how partner practices may use them; I follow the rules your medical director confirms."],
          ["Can we show before-and-after photos?", "Yes, with the client’s written consent, the same light and angle before and after, and no filters or retouching. Each case gets a short text with the treatment, sessions and time between photos, which also helps the gallery in search."],
          ["Who writes the medical content on treatment pages?", "I prepare the page plan and the drafts from search data and your notes; anything clinical — indications, risks, downtime — is corrected and signed off by your medical director or a named provider before it goes live. Medical advice stays with your team."],
          ["Is Instagram enough for a med spa?", "It brings attention, but people ready to book often search Google or ask an assistant, and those answers come from websites, map listings and reviews. The two work best together: Instagram shows your work, the site and profile turn the search into a booking."],
          ["Can an SEO consultant in Poland work for a US med spa?", "Yes. Everything is done online and in English. I am in Warsaw, and my CET afternoon and evening fall on the US morning, so a call before your first client is easy to schedule. I invoice in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order med spa SEO: what to send me"),
        p(
          "Send the website, the Google Maps link for each location, the treatments you want more bookings for, your providers and medical director, the booking system you use and where new clients come from today. Please leave out any client details. You will get my first priorities for your spa and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
