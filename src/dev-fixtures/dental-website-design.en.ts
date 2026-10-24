// Landing page fixture: Dental website design (EN), group «dental-medical».
// Semantic core: ref/dental-medical.csv + dental-medical.md: dental website
// design 590, website design dental 590, dental design website 590, dentist
// website design 590, dental clinic website design 590 (one volume bucket);
// dental website design templates 480, dental clinic website template 480 (H2
// templates vs custom); dental website design companies 260, best dental clinic
// website 210, dental website templates 140, dental clinic website templates
// 140, website design for dentists 90, best dental website design 70, top dental
// websites 30, custom dental website design 30, dental website design
// inspiration 10. Related: «Dental website design».
// Intent: ref/intent-check-dental-medical.md — «dental website design» top-10:
// prosites, s8e8, revenuewell, dribbble, greatdentalwebsites, webflow,
// pinterest, lassomd → agencies, templates and inspiration boards. 1 shared URL
// with «website for dentists» (lassomd.com/blog/top-10-best-dental-websites) →
// separate page; «website for dentists» is patients’ demand (find a dentist),
// not targeted. lassomd «top 10 best dental websites» → H2 on what the best
// dental websites have in common, without naming real practices. 0 shared URLs
// with «medical website design» → /medical-website-design.
// This page = what the patient sees and does: anxious patient, calm visual
// language, real team and office photos, before/after with consent, treatment
// page layout, new-patient vs emergency path, insurance and financing,
// booking button placement, WCAG for older patients, mobile.
// NOT on this page: structure, integrations with Dentrix / Open Dental, hosting,
// speed, ownership, migration (/dental-clinic-website); SEO (/dentist-seo,
// /local-seo-for-dentists); physicians and clinics (/medical-website-design).
// Owner's rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const dentalWebsiteDesignEn = {
  lang: "en",
  group: "dental-website-design",
  slug: "dental-website-design",
  title: "Dental website design",
  heading: "Dental Website Design",
  excerpt:
    "I do dental website design and build the site myself: a calm look for nervous patients, real photos of your team and office, separate paths for new patients and emergencies, and a booking button where the thumb already is.",
  seo: {
    metaTitle: "Dentist Website Design for Nervous Patients | Bandziuk",
    metaDescription:
      "Dental website design for anxious patients: calm visuals, real team photos, smile galleries with consent, insurance, booking on every screen. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["New patients welcome", "Dental emergency? Call", "Insurance we accept", "Book a visit"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple dental practice website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Dental clinic website with treatment pages, smile gallery, insurance and financing pages, online booking and local SEO, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with dental website design",
      items: [
        { _key: k("o"), iconName: "message-circle", title: "A calm design for anxious patients", text: "Soft color, plain words, nothing clinical on the first screen" },
        { _key: k("o"), iconName: "image", title: "Your team and your office, not stock smiles", text: "A shot list for the dentists, hygienists and rooms" },
        { _key: k("o"), iconName: "layers", title: "Before-and-after smile galleries", text: "Shown with written patient consent, captioned plainly" },
        { _key: k("o"), iconName: "phone", title: "New-patient and emergency paths", text: "Booking for one, a phone number for the other" },
        { _key: k("o"), iconName: "shield-check", title: "Accessible for older patients", text: "Contrast, text size and tap targets checked against WCAG" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Treatments, insurance and hours as text, not pictures" },
      ],
      prices: [
        { _key: k("r"), label: "Simple dental practice website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Treatment pages, smile gallery, insurance, booking, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: service websites I have designed and built",
      subtitle:
        "There are no dental practices or clinics among them. These are the closest projects I have: a renovation company and an architecture studio with a calm, photo-led design, a multilingual site for an education agency, and two local workshops whose customers book or call from a phone.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your dental website design",
      subtitle: "I reply within one business day with a proposed first screen, a treatment page layout and a fixed price.",
      contextLabel: "Practice name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "A dental template site", "An older custom site"] },
        { _key: k("z"), question: "Which patients do you want more of?", options: ["Families and checkups", "Cosmetic and implants", "Emergencies", "Orthodontics"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do dental website design and build the sites myself, so the look and the working site come from one person at one price. Dental website design starts from a fact every dentist knows: many patients are nervous before they even pick up the phone. The site is opened on a phone by someone who has put off a visit, has a toothache tonight, or is weighing implants or veneers. Each of them should feel calmer after the first screen, and find the next step without looking for it."),

        h2("Dentist website design for anxious patients: a calm visual language"),
        p("Many dental sites look like a brochure for a lab: bright white, steel instruments, close-ups of open mouths, a slider of perfect teeth. For a patient who fears the chair, that is the waiting room they are trying to avoid. A calm design does the opposite:"),
        li("warm or soft colors with plenty of white space, instead of clinical blue and steel"),
        li("people and rooms on the first screen, not instruments or close-ups of mouths"),
        li("plain words — “gentle cleanings”, “we explain every step first” — and no dental jargon in headings"),
        li("one clear button per screen, so the page never feels busy"),
        p("Calm does not mean vague. Each section still says what you do, where and for whom, and a page about sedation or nervous patients sits one tap from the home page."),

        h2("Real team and office photos in dental website design"),
        p("A patient who is afraid of the visit wants to know who will lean over the chair. A stock dentist answers nothing; your own photos answer it:"),
        li("each dentist and hygienist, in daylight, looking at the camera, with a name and a role"),
        li("the entrance from the street, so the patient knows where to go"),
        li("the reception and the waiting room, ideally with a person in them"),
        li("a treatment room as the patient will see it from the chair"),
        p("A photographer for half a day is worth it; good phone photos taken to a short shot list are the fallback. Video of a dentist explaining a first visit in thirty seconds helps nervous patients more than any paragraph."),

        h2("Before-and-after smile galleries on a dental website, with patient consent"),
        p("For cosmetic dentistry, implants and orthodontics, before-and-after photos are what patients come to see. They are also patient images, so the gallery is designed around consent:"),
        li("only cases with the patient’s written consent for use on the website, kept on file by the practice"),
        li("photos cropped to the smile, so the patient cannot be identified, unless they agreed otherwise"),
        li("a caption with the treatment and the number of visits, without promises of the same result"),
        li("the same angle and light before and after, so the comparison is fair"),
        p("Each case links to its treatment page and to booking. A dozen well-documented cases convince more than a hundred unlabeled photos."),

        h2("Treatment pages in dental clinic website design: from the patient’s question to booking"),
        p("A treatment page — say, dental implants — follows the order in which the patient thinks:"),
        ol("The problem in their words: “Missing a tooth?”, with the booking button."),
        ol("What the treatment is, in two or three sentences, without diagrams of screws on the first screen."),
        ol("What happens at each visit and how long the whole treatment takes."),
        ol("Whether it hurts and what is done to make it comfortable."),
        ol("The price range, what changes it, and insurance and financing."),
        ol("Cases from the gallery and a review that mentions this treatment."),
        ol("Short answers to the questions patients ask at the front desk, then booking."),
        p("Every treatment page names the dentist who wrote or reviewed it, with credentials, and shows the date of the last review. Google holds health content to a higher standard, and patients check who stands behind it. The pages explain; they do not give medical advice or promise outcomes."),

        h2("New-patient path and emergency path on the first screen of a dental website"),
        p("Two very different visitors arrive at the same home page. A new patient is choosing a practice and has time to read. A patient with a broken tooth or a swollen jaw wants to know one thing: can you see me today? The first screen serves both:"),
        li("a headline that names the practice and the area: “Family and cosmetic dentist in [neighborhood]”"),
        li("a “Book a visit” button for new patients, leading to a page that explains the first visit, what to bring and what it costs"),
        li("a separate “Dental emergency? Call us” line with the phone number and the hours you take emergencies"),
        li("one line of proof: years in the area, the review score, languages spoken"),
        p("If you do not see emergencies after hours, the line says so and tells the patient where to go instead — an unanswered call at night turns into a review the next morning."),

        h2("Insurance, financing and prices in dental website design"),
        p("In the US the question “do you take my insurance?” often decides the booking. In many other countries patients pay privately and want prices first. The design gives both a fixed place:"),
        li("the insurance plans you are in network with, as text in a list, not as logos only"),
        li("a short note on what happens if a plan is not listed"),
        li("financing or membership plans explained in one sentence each, with a link to the details"),
        li("price ranges for common treatments where you are willing to publish them"),
        p("This block appears on the new-patient page, on every treatment page, and one tap from the main menu."),

        h2("Where the online booking button goes in dental website design"),
        p("Online booking from NexHealth, ZocDoc, a scheduler connected to Dentrix or Open Dental, or a simple request form only helps if the patient sees it at the moment they decide. In the design it appears:"),
        li("in the header on desktop and in a sticky bar at the bottom of the screen on phones"),
        li("at the end of every treatment page and on the new-patient page"),
        li("next to each dentist’s profile, for patients who choose the person first"),
        p(
          "Forms that collect health details need care. In the US such a form can fall under HIPAA, so it should run on a provider that signs a business associate agreement, or ask only for contact details and a preferred time. In the EU health data is a special category under the GDPR. I have built a medical system that handled patient data, under NDA, so I cannot name it — and this is where the design keeps clinical questions off the website unless the tool behind them is set up for it. How booking and forms connect to your software is described on the ",
          link("dental clinic website", "/dental-clinic-website"),
          " page.",
        ),

        h2("Accessible dental website design for older patients and on mobile (WCAG)"),
        p("Dental practices see patients of every age, and many of those booking dentures, implants or crowns are older, with weaker eyesight and less patience for small buttons. Most of them still open the site on a phone. The design is checked against the WCAG accessibility guidelines:"),
        li("a base font size of at least 16 pixels and a typeface whose letters do not blur together"),
        li("contrast between text and background of at least 4.5 to 1 for normal text"),
        li("buttons big enough for an unsteady finger, spaced apart, and a phone number that dials when tapped"),
        li("labels on every form field, not grey hints inside it that disappear when typing starts"),
        li("alt text for photos and captions on videos"),
        p("Accessibility is also a legal question for businesses open to the public in several countries. A design that works for a seventy-year-old patient works better for everyone else too."),

        h2("A dental website design that ChatGPT and Google AI Overviews can read"),
        p("More patients now ask ChatGPT, Perplexity or Google’s AI Overviews which dentist nearby takes their insurance, sees children or treats nervous patients. An assistant cannot read an insurance logo wall or a slider of treatment banners. So the design puts the facts it needs in plain HTML: the list of plans, each dentist’s degree and specialty, emergency hours and treatments, plus Dentist and Person structured data that ties them to the practice."),
        p(
          "Getting into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Being found in Google and on the map is covered on the ",
          link("dentist SEO", "/dentist-seo"),
          " and ",
          link("local SEO for dentists", "/local-seo-for-dentists"),
          " pages.",
        ),

        h2("Dental website design templates or a custom dental clinic website design"),
        p("Dental website design templates and dental clinic website templates come from three places: dental marketing platforms that bundle a site with their software, general builders such as Webflow, and theme stores. Dribbble and Pinterest add inspiration shots. All of them look calm and polished in the demo, because the demo uses a model’s smile and lorem ipsum. The trouble starts with your content: twelve treatments squeezed into one services page, no slot for an insurance list, a gallery with no field for consent, and a booking embed that breaks the layout on a phone."),
        p("For a newly opened practice with one dentist and a tight budget, a template can carry the first year. Custom dental website design earns its cost once implants, aligners or veneers are a large part of revenue, once there are several dentists or offices, or once paid campaigns send patients to treatment pages — the cases where a page that fails costs real appointments."),

        h2("What the best dental websites have in common"),
        p("Lists of the best dental websites mix large groups with small family practices. The decisions behind the good ones are simple and fit any practice:"),
        li("a first screen that names the practice and the area and shows real people"),
        li("a booking button and an emergency phone number that never leave the screen"),
        li("a page for each treatment, written in patients’ words and reviewed by a named dentist"),
        li("insurance, financing and prices easy to find"),
        li("before-and-after cases with consent and plain captions"),
        li("pages that load fast and read well on an older phone"),

        h2("How much dental website design costs"),
        p("Design is part of building the site, and the price covers both."),
        li("A simple dental practice website: 700–1,400 €."),
        li("A dental clinic website with treatment pages, a smile gallery, insurance and financing pages, online booking and local search optimization: from 2,000 €."),
        p(
          "If you already have a site and want a new look without losing Google positions, the ",
          link("website redesign", "/services/website-redesign-services"),
          " process keeps addresses and redirects in place. Practices beyond dentistry will find more on the ",
          link("medical website design", "/medical-website-design"),
          " page; full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Dental website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does dental website design cost?", "Design is included in the price of the website: 700–1,400 € for a simple dental practice site, from 2,000 € for a site with treatment pages, a smile gallery, insurance and financing pages, online booking and local search optimization. After a short description of the practice I give a fixed quote."],
          ["Can we use a dental website template instead of a custom design?", "For a new single-dentist practice, yes. Templates struggle when you need separate treatment pages, a plain-text insurance list, booking on every page and a gallery with recorded consent — usually the point where a practice starts to grow."],
          ["Can we show before-and-after photos of our patients?", "Yes, with each patient’s written consent for website use, kept on file by the practice. Photos are usually cropped to the smile, captioned with the treatment, and shown without promising the same result to others."],
          ["Is online booking on a dental website HIPAA compliant?", "It depends on the tool, not the design. In the US, a booking or intake form that collects health information should run on a provider that signs a business associate agreement; otherwise the form asks only for contact details and a time. This is general guidance, not legal advice."],
          ["How long does dental website design take?", "Expect the phone mock-ups of the home screen, one treatment page and the new-patient page about two weeks after I have your brief and photos. A finished, built site usually needs four to six weeks; waiting for a photo shoot or for dentists to review treatment pages is what most often stretches it."],
          ["Do you design dental websites without building them?", "No. Design and build come together. How the booking button, the gallery and the emergency line behave on a phone is decided while building, and a design handed over as pictures loses most of that."],
          ["Can you redesign our dental website without losing Google rankings?", "Yes. Every existing address is mapped to its new page and redirected, and structured data is carried over before the new design goes live, so the positions the site already has are kept."],
          ["Do you work with dental practices outside Poland?", "Yes. Design and development are done remotely, in English, Polish or Russian. The site is set up for your country: phone formats, insurance or private-pay pricing, and the review platforms your patients use."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order dental website design: what to send me"),
        p(
          "Send the practice name, a link to your current website or Google profile, the treatments you want more patients for, the insurance plans you accept and whether you see emergencies. Photos of the team and the waiting room, even from a phone, let me sketch the first screen with your real faces. You will get that sketch and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
