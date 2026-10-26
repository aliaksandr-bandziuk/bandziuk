// Landing page fixture: Chiropractor website design (EN), group
// «chiropractor-website-design». New page.
// Semantic core: ref/medical-practices.md, group «chiropractors / physio» (US):
// chiropractic websites 320 (H2 on vendor sites, intro) · chiropractor website
// design 170 (H1, metaTitle, several H2) · chiropractic website templates 50
// (vendor/template H2 + FAQ) · chiropractic website design companies 20
// (process H2) · chiropractic website hosting 10 (FAQ) · inception
// chiropractic websites 40 — vendor brand, not targeted · physical therapist
// website design 70 — different practice, not targeted.
// Intent: ref/intent-check-medical-practices.md — «chiropractor website
// design» vs «seo for chiropractors» 0 of 10 shared URLs → SEO is the sibling
// /seo-for-chiropractors. SERP: chiropractic site vendors (ChiroBasix,
// Inception, ChiroCandy, Practice Promotions), template sites (Colorlib,
// Zarla), galleries (Dribbble) → owners choosing how to get a site built.
// Angles: first screen for a patient in pain, vendor platform / template vs
// custom (fair: when a template is enough), calm layout and large targets,
// first-visit, pricing and insurance presentation, doctor and technique pages,
// scheduling and intake forms (HIPAA, general), video without losing speed,
// AI-readable facts, redesign without losing URLs (Giuseppe: 468 posts with
// 301s), process and price. NDA medical system mentioned once.
// NOT on this page: map pack, condition-page keyword research, reviews,
// board rules on offers in depth (/seo-for-chiropractors — sibling); websites
// for other medical practices (/medical-website-design — linked once).
import { p, h2, li, ol, link, k } from "./pt";

export const chiropractorWebsiteDesignEn = {
  lang: "en",
  group: "chiropractor-website-design",
  slug: "chiropractor-website-design",
  title: "Chiropractor website design",
  heading: "Chiropractor Website Design",
  excerpt:
    "Chiropractor website design and build from one person: a first screen that lets a patient in pain book in a minute, real photos of your office, doctor and technique pages, scheduling from your own system and a site that stays yours.",
  seo: {
    metaTitle: "Chiropractic Website Design and Build | Bandziuk",
    metaDescription:
      "Chiropractor website design with the build included: first-visit page, online scheduling, doctor bios, safe intake forms, fast on a phone. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Your domain, your content"],
  heroPhonePoints: ["Book a first visit", "What to expect", "Meet the doctors", "Call · Text"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple chiropractic website, design and build", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Chiropractic website with several doctors or offices, condition and technique pages, scheduling integration, video and accessibility testing, design and build", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with chiropractor website design",
      items: [
        { _key: k("o"), iconName: "image", title: "Photos of your real office and team", text: "Adjusting rooms, front desk, the doctors at work" },
        { _key: k("o"), iconName: "file-text", title: "A first-visit page people actually read", text: "Length, clothing, imaging and fees in one place" },
        { _key: k("o"), iconName: "plug", title: "Scheduling from the system you already use", text: "Embedded booking, confirmed or call-back, clearly" },
        { _key: k("o"), iconName: "gauge", title: "Fast on a phone", text: "Under 2.5 s, video loads only on tap" },
        { _key: k("o"), iconName: "shield-check", title: "Intake that keeps health details safe", text: "No symptoms in plain forms; BAA providers for intake" },
        { _key: k("o"), iconName: "sparkles", title: "Clear to Google and ChatGPT", text: "Doctors, techniques, hours and insurance as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple chiropractic website", value: "700–1,400 €", note: "design and build" },
        { _key: k("r"), label: "Doctors, offices, techniques, scheduling, video", value: "from 2,000 €", note: "design and build", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Websites I have designed and built, starting with a private medical practice",
      subtitle:
        "Giuseppe, a psychotherapist in Milan, runs a private practice whose visitors often arrive anxious. I designed his site to be calm — a dark theme with light sections and a serif with a true italic — and rebuilt it from WordPress to Next.js and Sanity in 44 working days, with a map of his consulting rooms, a contact form on his own domain mail, analytics only after consent and a CMS that warns him about wording his professional code forbids. Also shown: premium design for a Warsaw company that renovates and invests in property, Cyprus VIP Estates with its property catalog, map and CRM integration in five languages, a WordPress rebuild for a Warsaw wheel-renovation workshop and a tyre-storage landing page whose SEO the owner edits himself.",
      picks: [
        "psychotherapist-website-milan",
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your chiropractor website design",
      subtitle: "I reply within one business day with a proposed page list — home, doctor bio, first visit — and a fixed price.",
      contextLabel: "Office name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "A site from a chiropractic platform", "A template site", "An older WordPress or custom site"] },
        { _key: k("z"), question: "How do patients book now?", options: ["By phone only", "Online scheduler", "Text or chat", "A mix"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do chiropractor website design and build the site myself, so the layout, the code and the launch come from one person at one price. A chiropractic website is often opened by someone whose back hurts right now, on a phone, in a short break. The design has one job above the rest: show that person that you treat their problem, let them trust the doctor and get them to a booked first visit in under a minute."),

        h2("Chiropractor website design: the first screen a patient in pain sees"),
        p("On a phone, the visible part of the first screen has room for four things, and they go in this order:"),
        li("what you treat and where — “Chiropractic care for back pain, neck pain and sports injuries in [town]”, not a slogan about wellness"),
        li("a book button and a call button, fixed to the bottom of the screen on every page"),
        li("opening hours, especially early mornings or Saturdays if you offer them"),
        li("a real photo of the doctor or the office instead of a stock illustration of a spine"),
        p("Everything else — mission, the full list of techniques, the blog — goes below. Sliders, autoplay video and pop-up offers push the booking button out of view; they are the first things I remove from existing chiropractic websites."),

        h2("Chiropractic websites from vendor platforms and templates vs a custom design"),
        p("Search for “chiropractic websites” and most results are platforms made for chiropractors — a monthly plan with a theme, hosting, a newsletter and a library of pre-written articles — plus galleries of chiropractic website templates. They launch fast, and for a new solo office that only needs hours, a phone number and a booking link online, a template can be enough."),
        p("The limits appear later:"),
        li("the pre-written articles are on hundreds of other chiropractors’ sites, so they add little in search"),
        li("the layout changes only as far as the theme allows"),
        li("the content, and sometimes the domain, stays with the platform when you cancel"),
        li("the monthly fee runs for as long as the site exists"),
        p("A custom chiropractor website costs more at the start, belongs to you in full and is built around how your office works: your techniques, your doctors, your scheduler."),

        h2("Design for patients in pain: calm layout, large buttons and plain words"),
        p("Someone with acute low back pain may be lying on the floor with the phone held above their face. That sets the design rules: large buttons with space between them, body text of at least 16 pixels, strong contrast and one accent color reserved for booking. Nothing moves unless the visitor asks it to."),
        p("The words stay calm as well. “Instant relief” or “fix your spine” sound like promises no clinician can make, and cautious patients leave. A sentence describing what happens during an adjustment does more for them. Layouts follow WCAG at level AA — keyboard navigation, visible form labels, captions on video — which also helps the many older adults who see a chiropractor."),

        h2("First-visit, pricing and insurance pages in chiropractic website design"),
        p("Most calls to a chiropractic front desk ask the same things: how long the appointment lasts, what clothing to wear, whether imaging is part of it, the fee and whether insurance covers any of it. I design one page that answers them in that order, with a photo of the room where the first exam takes place, and link it from every condition page."),
        p("Cash prices and care plans are shown as text, and accepted insurance as a written list rather than a strip of logos, because patients search the page for their plan name. If you advertise a new-patient offer, the layout leaves room next to it for any disclaimer your state requires, at a readable size rather than in fine print."),

        h2("Doctor bios and technique pages on a chiropractic website"),
        p("Patients choose a chiropractor as much as an office. Each doctor gets a page built on one template: a photo taken in your own office, DC degree and school, state license, years in practice, the techniques they use — Gonstead, Diversified, Activator, Thompson Drop — and the patients they see most, such as runners, office workers, pregnant women or older adults."),
        p("Technique pages explain each method in a few short paragraphs, next to a short video of a real adjustment recorded with the patient’s written consent. A reader who is nervous about the sound of a joint release understands more from twenty seconds of video than from a page of text."),

        h2("Online scheduling and intake forms on a chiropractic website"),
        p("Booking is the main route through the site. Behind the button sits whatever your practice software offers — an embedded scheduler, a booking link or a short request form followed by a call back — and the visitor sees at once whether the time is confirmed or the office will phone them."),
        p("Intake paperwork is where health information enters. There are two safe designs: the public form collects a name, a phone number or email and a good time to call, with a note asking people to leave symptoms for the visit, or intake paperwork goes through a HIPAA-ready service that signs a business associate agreement with the office. Analytics scripts stay off booking and intake pages. Your compliance adviser confirms the final setup."),
        p("Some five years back I was part of building a medical system that handled patient data. An NDA covers it, so I cannot say more, but it taught me to treat every extra field on a health form as a liability: if the visit can be booked without it, the field goes."),

        h2("Video and photos on a chiropractic website without slowing it down"),
        p("Adjustment clips, exercise demonstrations and an office tour make a chiropractic site feel real, and they are also what makes it slow. Each video loads only when tapped and shows a still image until then; photos are cropped for phones and served in modern formats. The target is the main content visible in under 2.5 seconds on a mid-range phone, measured before launch, not assumed."),

        h2("A chiropractic website that ChatGPT and Google AI Overviews can read"),
        p("People ask assistants which chiropractor nearby works on Saturdays, takes their insurance or treats sports injuries. Assistants can only repeat what they can read and verify, so those facts live on the page as text and in structured data — doctors, techniques, conditions, hours, insurance and languages, matching your Google Business Profile. Giuseppe’s site was built this way, with structured data for the practitioner, his consulting rooms, conditions and therapies and explicit rules for AI crawlers in robots.txt; its new pages already appear in ChatGPT answers."),
        p(
          "Getting your office into those answers over time is described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page, and ranking in Google and the map pack on ",
          link("SEO for chiropractors", "/seo-for-chiropractors"),
          ".",
        ),

        h2("Redesigning a chiropractic website without losing Google rankings"),
        p("Older chiropractic sites often carry years of blog posts and condition articles that still bring visits. When I moved Giuseppe’s site from WordPress to Next.js, all 468 blog posts kept their place in search through 301 redirects from every old address. A chiropractic redesign gets the same treatment: each old URL mapped to its new page, structured data carried over and Search Console checked after launch."),
        p(
          "Details of that process are on the ",
          link("website redesign", "/services/website-redesign-services"),
          " page.",
        ),

        h2("How the chiropractor website design process works"),
        ol("Brief. You send the list of doctors, techniques and conditions, your hours, prices and insurance plans, and the questions the front desk hears most."),
        ol("Patient routes. I map the three that matter — book a first visit, read about a condition, call the office — and agree them with you on a phone screen."),
        ol("Design. The home page, a doctor bio and the first-visit page are designed in full; other pages follow the same system."),
        ol("Build and checks. Scheduling is connected, forms, speed and accessibility are tested, and you get a short manual for editing hours, prices and doctors."),
        p(
          "For scale: Giuseppe’s site, with two languages and hundreds of pages, was handed over 44 working days after the first line of code, together with owner’s manuals in two languages and video walkthroughs. My general approach to builds is described on the ",
          link("website development", "/services/website-development"),
          " page.",
        ),

        h2("How much chiropractor website design costs"),
        p("Design is not sold separately; it is part of the build, and the price covers both."),
        li("A simple chiropractic website — home, first visit, conditions, doctor bio, prices and insurance, contact and booking: 700–1,400 €."),
        li("A chiropractic website with several doctors or offices, condition and technique pages, scheduling integration, video and accessibility testing: from 2,000 €."),
        p(
          "Other medical practices will find their own page on ",
          link("medical website design", "/medical-website-design"),
          ". All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Chiropractor website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a chiropractic website cost?", "A simple chiropractic site costs 700–1,400 €; one with several doctors or offices, technique pages, an embedded scheduler and video starts at 2,000 €. Both prices include the design, and a short description of your office is enough for a fixed quote."],
          ["How long does it take to design and build a chiropractor website?", "The phone layouts of the home page, a doctor bio and the first-visit page are usually ready one to two weeks after the brief. A typical chiropractic site is live in four to six weeks, depending on how quickly photos and approved texts arrive."],
          ["Is a chiropractic website template enough?", "For a new solo office that needs hours, a phone number and a booking link, often yes. A template becomes a limit once you have several doctors, your own technique pages, an embedded scheduler and a need to rank in search."],
          ["Can you move my site away from a chiropractic website platform?", "Yes. I copy the content you own, rebuild the pages on your own hosting and redirect the old addresses. Check your contract first: some platforms keep the pre-written articles or the domain when you leave."],
          ["Can you connect my scheduling software?", "Yes, if it offers an embeddable widget, a booking link or an online request page — most chiropractic practice software does. The design keeps the book button on every page."],
          ["Who hosts the website?", "You do, on hosting in your name; I set it up and can maintain it. The domain, the code and the content stay yours whoever looks after the site later."],
          ["Can a web developer in Poland build a site for a US chiropractor?", "Yes. The whole project runs remotely in English. I work from Warsaw, and my afternoons overlap with mornings on the East Coast and in the Central time zone, which is when design reviews usually happen. You are invoiced in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order chiropractor website design: what to send me"),
        p(
          "Send the office name, a link to your current website or Google profile, the list of doctors and techniques, your hours, prices and insurance plans, and the scheduling system you use. With a few photos of the office and team, the first sketch already looks like your practice rather than a template. You get the sketch and a fixed price back. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
