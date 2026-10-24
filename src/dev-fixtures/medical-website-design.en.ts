// Landing page fixture: Medical website design (EN), group «medical-website-design».
// Semantic core: ref/dental-medical.csv + dental-medical.md, group «medical
// website / design»: medical website design / website design medical / design
// medical website / website design for medical — 390 each (one Keyword Planner
// bucket); doctors website design 1 180 (core of the doctors phrases: medical
// doctor website design 320, website design for medical doctors 170, website
// designing for doctors 170, website design for doctors 170 …); web design for
// doctors, web design for clinics 390; medical website design template(s) 320,
// website templates for doctors 260, healthcare website templates (free
// download); medical practice website design 110, medical clinic website design
// 90, best medical website design 50, top medical websites for doctors 50,
// medical website design cost 30. Related searches: Medical website design
// ideas, Best medical website, Top 10 medical websites, Medical Clinic websites,
// Hospital website design templates.
// Intent: ref/intent-check-dental-medical.md — «website for doctors» (1 900)
// vs «medical website design»: 0 shared URLs, 0 shared domains; the first is
// patients’ demand (zocdoc, webmd, hcplive, webdoctors), so it is NOT targeted
// here. «medical website design» top-10: practicebuilders, wordstream,
// primeview, binariks, officite, imaginovation, 99designs, pinterest → agencies,
// inspiration and templates. 0 shared URLs with «dental website design».
// This page = design of a site for physicians, private practices and clinics:
// patient trust, doctor profiles, service/condition pages (YMYL), booking,
// portal, telehealth, insurance, WCAG, languages, privacy-safe forms (HIPAA in
// general terms), templates vs custom, best medical websites.
// Not here: dental website design (/dental-website-design); dental clinic
// website development (/dental-clinic-website); SEO for physicians
// (/seo-for-doctors); medical SEO for larger practices (/medical-seo); hospitals
// and health systems (/healthcare-seo); therapists (/website-for-psychologists-
// therapists); vets (/veterinary-website-design); «website for doctors»
// (patients’ searches — no page).
// Owner’s rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const medicalWebsiteDesignEn = {
  lang: "en",
  group: "medical-website-design",
  slug: "medical-website-design",
  title: "Medical website design",
  heading: "Medical Website Design",
  excerpt:
    "I design and build medical websites for doctors, private practices and clinics: doctor profiles with credentials, a booking path that takes a few taps, insurance and portal links patients can find, and forms that keep health details safe.",
  seo: {
    metaTitle: "Medical Website Design for Doctors and Clinics | Bandziuk",
    metaDescription:
      "Medical website design for doctors and clinics: doctor profiles, booking and portal links, WCAG accessibility, privacy-safe forms. Design + build from 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Accepting new patients", "Book an appointment", "Insurance we accept", "Meet our doctors"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple medical practice website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Medical website with doctor, location and service pages, booking and portal links, language versions and accessibility testing, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with medical website design",
      items: [
        { _key: k("o"), iconName: "image", title: "Doctor profiles with real photos and credentials", text: "Specialty, board certification, languages, a book button" },
        { _key: k("o"), iconName: "file-text", title: "Service and condition pages with a named reviewer", text: "Plain language, a review date, no medical advice" },
        { _key: k("o"), iconName: "plug", title: "Booking, patient portal and telehealth in one place", text: "New patients book, existing patients log in" },
        { _key: k("o"), iconName: "shield-check", title: "Forms that keep health details off email", text: "Clinical data only through providers built for it" },
        { _key: k("o"), iconName: "layers", title: "Designed to WCAG for older patients", text: "Large text, strong contrast, screen-reader ready" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Doctors, services, insurance and hours as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple medical practice website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Doctors, locations, services, booking, languages", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: websites I have designed and built",
      subtitle:
        "None of these is a clinic. They are the closest work I can show: a multilingual site for an education agency serving ten countries, local service businesses whose customers book or call, and sites built around a clear first action.",
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your medical website design",
      subtitle: "I reply within one business day with a proposed layout for the home page, a doctor profile and a service page, and a fixed price.",
      contextLabel: "Practice name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of practice is it?", options: ["Solo physician", "Group practice", "Specialty clinic", "Several locations"] },
        { _key: k("z"), question: "How do patients book now?", options: ["By phone only", "Online booking tool", "Patient portal", "A mix"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design medical websites for doctors, private practices and clinics, and I build them myself, so the design and the build come from one person at one price. A medical website is opened by people who are worried, unwell or caring for someone who is — often on a phone, and often older than the average web user. The design has to make three things easy: choosing a doctor, understanding what the practice treats and booking a visit without waiting on hold."),

        h2("Medical website design for patient trust: a calm layout and plain language"),
        p("Patients do not choose a practice by its logo. They look for signs that the doctors are qualified, that the place is real and that the visit will be simple to arrange. A calm design helps them find those signs: generous white space, one accent color reserved for the booking button, readable type and no sliders that move while someone is trying to read."),
        p("The first screen of a practice website answers four questions, in this order:"),
        li("who you are and what you treat — “Family medicine and pediatrics in [your town]”, not “Your health is our priority”"),
        li("whether you are accepting new patients"),
        li("how to book: online, by phone or both"),
        li("address, hours and parking or transit, one line each"),
        p("The language stays plain: “hypertension” once, then “high blood pressure”. Medical practice websites fail more often on jargon and on menus that copy internal departments than on looks."),

        h2("Doctors website design: profile pages with credentials and photos of the real team"),
        p("For many patients the doctor matters more than the clinic. Every physician, nurse practitioner and physician assistant gets a profile page, and doctors website design starts with that template, because it is reused more than any other:"),
        li("a real photo taken in your own rooms, in natural light, framed the same way for everyone"),
        li("full name, title, specialty and board certification, written as text"),
        li("medical school, residency and hospital affiliations"),
        li("languages spoken and the patients the doctor sees: adults, children, new patients"),
        li("the services this doctor provides, linked to their pages, and a button to book with this doctor"),
        p("Stock photos of models in white coats are recognized at once and work against you; a short session photographing the real team and rooms does more for trust. Group practices also get a page per location, listing the doctors who work there."),

        h2("Web design for clinics: service and condition pages reviewed by a clinician"),
        p("Patients search for what bothers them — knee pain, a skin check, a sports physical — and land on a service or condition page, not on the home page. Web design for clinics therefore gives each service and each main condition you treat its own page, laid out the same way: what it is in plain words, who it is for, what happens at the visit, how to prepare, whether insurance usually covers it, which doctors provide it and a booking button."),
        p("Google treats health content as “your money or your life” and holds it to a higher standard. The design makes room for the signals that standard looks for: the name and credentials of the clinician who wrote or reviewed the page, the date of the last review and sources where a page states facts. The site describes your services; it does not give medical advice, and every condition page leads to an appointment rather than to self-treatment."),

        h2("Online booking, patient portal, telehealth and insurance in medical website design"),
        p("Booking is the most important route through the site, and it should be a few taps from any page. On phones, a fixed bar at the bottom of the screen holds two actions: book and call. Behind the book button sits whatever your scheduling system offers — an embedded widget, a link to your booking page or a short request form when online self-scheduling is not possible."),
        p("Around it, patients look for:"),
        li("a link to the patient portal for existing patients, kept apart from booking so new patients are not sent to a login screen"),
        li("a telehealth entry: which visits can be done by video, how to join and what to prepare"),
        li("insurance accepted: the plans you take, as a text list, and what self-pay patients pay for common visits"),
        li("new-patient forms to fill in through the portal before the first visit"),
        p("Accepted insurance belongs in text, not in a picture of logos: patients search the page for the name of their plan, and so do search engines."),

        h2("Accessible medical website design: WCAG for older and visually impaired patients"),
        p("Older adults are among the most frequent users of medical websites, and many of them see poorly, use a screen reader or find small targets hard to tap. Accessibility is part of the design from the first sketch and follows the WCAG guidelines:"),
        li("body text of at least 16 pixels and contrast that meets WCAG level AA"),
        li("large buttons with space between them, and links that say where they lead"),
        li("forms with visible labels, clear error messages and no time limits"),
        li("full keyboard navigation and a correct heading order for screen readers"),
        li("captions on videos and text alternatives for images that carry information"),
        p("I design to the guidelines and test the result with automated tools and a screen reader; your legal obligations toward patients with disabilities are a question for your lawyer."),

        h2("Multilingual medical websites for patients who speak other languages"),
        p("Many practices see patients who are more at ease in Spanish, Polish, Ukrainian or another language. A language switch that leads to one machine-translated page disappoints them. A multilingual medical website gives each language its own address, translated service pages and doctor profiles that say which languages each doctor speaks, so a patient can book with someone they can talk to."),
        p("I build the structure, the language switch and the search setup for each version; clinical wording in another language is checked by a clinician or a medical translator from your side."),

        h2("Privacy-safe forms on a medical website: HIPAA and patient data"),
        p("A contact form looks harmless until a patient types a diagnosis into it. In the United States, a form that collects health information for a practice can fall under HIPAA, and a service that receives that data may need to sign a business associate agreement. There are two safe ways to design for it:"),
        li("keep clinical details off the website: the form asks for a name, contact details and a preferred time, and says plainly not to describe symptoms"),
        li("where a clinical form is needed — intake, referrals, refill requests — run it through a form or portal provider that signs a business associate agreement, not through ordinary email"),
        p("Analytics and advertising scripts are set up so that pages and forms do not pass health information to third parties. Whether a setup meets your legal obligations is confirmed by your compliance officer or lawyer."),
        p("I have built a medical system that handled patient data, under NDA, so I cannot name it. The rule I carry from that work into every medical website: collect as little health information on the site as the task allows."),

        h2("A medical website that ChatGPT and Google AI Overviews can read"),
        p("Patients increasingly ask ChatGPT, Perplexity or Google’s AI Overviews which doctor nearby treats a condition, takes their insurance or speaks their language. Assistants answer from what they can read and check. The design keeps those facts in text and in structured data: doctors with their specialties and credentials, services, locations, hours, insurance plans and languages — matching your Google Business Profile and directories such as Healthgrades or Vitals."),
        p(
          "Getting a practice into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Being found in Google for your specialty and town is covered on the ",
          link("SEO for doctors", "/seo-for-doctors"),
          " page; clinics with several departments or locations will find the ",
          link("medical SEO", "/medical-seo"),
          " page more useful.",
        ),

        h2("Medical website design templates and healthcare website templates vs a custom design"),
        p("A medical website design template or a free healthcare website template looks complete in a demo, because the demo is filled with stock doctors and invented departments. With a real practice’s content the gaps show: one page for all doctors, no place for credentials, a contact form where booking should be, no language versions and accessibility nobody has tested."),
        p("A template is a fair start for a solo physician who needs an address, hours and a phone number online. A custom design pays off with several doctors or locations, online booking, more than one language or a dependence on new patients from search."),

        h2("Best medical websites: what top medical clinic websites have in common"),
        p("Lists of the top 10 medical websites mix hospital groups and small clinics; they give medical website design ideas only if you look past the budgets. What makes the best medical websites work fits a three-doctor practice too:"),
        li("what the practice treats and where, stated on the first screen"),
        li("booking visible on every page, with the patient portal kept separate"),
        li("a profile for every clinician, with credentials and a real photo"),
        li("service and condition pages written for patients, signed and dated"),
        li("insurance, hours and directions as text"),
        li("readable type, strong contrast and forms that work with a screen reader"),

        h2("How the medical website design process works"),
        ol("Brief. You send the list of doctors, services, locations and insurance plans, and the questions your front desk answers most often."),
        ol("Patient paths. I map the three routes that matter — book a first visit, find a doctor, reach the portal — and agree them with you on a phone screen."),
        ol("Design. The home page, a doctor profile and a service page are designed in full; the other pages follow the same system."),
        ol("Build and checks. The site is built, booking and portal links are connected, and accessibility and forms are tested before launch."),
        p(
          "If you already have a site and want a new design without losing your Google positions, the ",
          link("website redesign", "/services/website-redesign-services"),
          " process keeps addresses and redirects in place. Dental practices have their own pages on ",
          link("dental website design", "/dental-website-design"),
          " and on building a ",
          link("dental clinic website", "/dental-clinic-website"),
          ". Psychologists and therapists, whose clients need even more discretion, will find a separate page on ",
          link("websites for psychologists and therapists", "/website-for-psychologists-therapists"),
          ".",
        ),

        h2("How much medical website design costs"),
        p("Design is not sold separately; it is part of building the site, and the price covers both."),
        li("A simple medical practice website — home, doctors, services, insurance, contact and a booking link: 700–1,400 €."),
        li("A medical website with doctor and location pages, service and condition pages, booking and portal integration, language versions and accessibility testing: from 2,000 €."),
        p(
          "Send a short description of the practice and I will prepare a fixed quote. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Medical website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does medical website design cost?", "Design is included in the price of the website: 700–1,400 € for a simple practice site, from 2,000 € for a site with doctor and location pages, service and condition pages, booking and portal integration and language versions. After a short description of the practice I give a fixed quote."],
          ["How long does it take to design and build a medical website?", "The phone layouts of the home page, a doctor profile and a service page are usually ready one to two weeks after the brief. The whole site typically takes four to six weeks, depending on the number of doctors and services and on how quickly photos and reviewed texts are ready."],
          ["Can you connect our online booking and patient portal?", "Yes, if your scheduling or practice-management system offers a booking widget, a booking link or a portal login page — most do. The design places booking on every page and keeps the portal link separate for existing patients."],
          ["Is the contact form on a medical website HIPAA compliant?", "A form that only asks for a name, contact details and a preferred time, and tells patients not to describe symptoms, keeps health information off the site. Clinical forms go through a provider that signs a business associate agreement. I build it this way; your compliance officer or lawyer confirms that the setup meets your obligations."],
          ["Who writes the medical content on service and condition pages?", "Your clinicians write or approve it. I structure the pages, edit the text for plain language and search, and add the reviewer’s name, credentials and review date. I do not write medical advice."],
          ["Can I use a medical website template instead of a custom design?", "Yes, for a solo practice that needs a basic presence. A template becomes a limit once you need a profile per doctor, several locations, online booking, language versions and tested accessibility. Changing later usually means starting again."],
          ["Can you redesign our medical website without losing Google rankings?", "Yes. Every existing address is mapped to its new page and redirected, and structured data is carried over before the new design goes live, so the positions the site already has are kept."],
          ["Do you work with medical practices outside Poland?", "Yes. Design and development are done remotely, in English, Polish or Russian. The site is set up for your country: phone and date formats, insurance and registration details, and the directories your patients use."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order medical website design: what to send me"),
        p(
          "Send the practice name, a link to the current website or Google profile, the list of doctors and services, your locations and the booking or portal system you use. A few photos of the team and the rooms help me show you a first screen that looks like your practice. I will reply with a proposed layout and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
