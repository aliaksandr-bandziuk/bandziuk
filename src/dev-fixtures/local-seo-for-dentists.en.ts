// Landing page fixture: Local SEO for dentists (EN), group «dental-medical».
// Semantic core: ref/dental-medical.csv + dental-medical.md, dental SEO group:
// dentist local seo 880, local dentist seo 720, local seo for dentist 720,
// local seo for dentists 720; tail: local seo dentist 20, local seo guide for
// dentists 10. Related: «Local SEO for dentists».
// PAA: What is local SEO for dentists? Is doing local SEO worth it?
// Intent: ref/intent-check-dental-medical.md — «dentist seo» vs «local seo for
// dentists» 0 shared URLs, 0 shared domains → separate page. Top-10 for this one:
// getweave, purplez, mb2dental, delmain, lassomd, weomarketly → the map results,
// not the website. This page = Google Business Profile (category «Dentist» +
// specialty categories, services, emergency hours, photos), patient reviews
// (no incentives, replies that do not confirm someone is a patient), listings
// (Healthgrades, ZocDoc, Yelp, insurance directories), multi-location practices,
// location pages, proximity, local AI search.
// NOT on this page: treatment pages, technical SEO, content and choosing a dental
// SEO company (/dentist-seo); building the site (/dental-clinic-website); design
// (/dental-website-design); physicians (/seo-for-doctors); clinics and
// practices in general (/medical-seo).
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, li, ol, link, k } from "./pt";

export const localSeoForDentistsEn = {
  lang: "en",
  group: "local-seo-for-dentists",
  slug: "local-seo-for-dentists",
  title: "Local SEO for dentists",
  heading: "Local SEO for Dentists",
  excerpt:
    "I do local SEO for dentists: the Google Business Profile, patient reviews, Healthgrades, ZocDoc and insurance listings, and office pages that put a dental practice in the map results when someone nearby searches for a dentist.",
  seo: {
    metaTitle: "Dentist Local SEO: Google Maps, Reviews, Listings | Bandziuk",
    metaDescription:
      "Local SEO for dentists: Google Business Profile, emergency hours, patient reviews answered without revealing patient details, ZocDoc listings. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Google Maps for dental practices", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Dentist · Open today", "Emergency dental service", "Reviews from patients", "Book online"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Local SEO audit for a dental practice: Google Business Profile, listings, office pages", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Google Business Profile, dental listings and review routine set-up for a dentist", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly local SEO for a dental practice", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with local SEO for dentists",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "A Google profile set up for a dental office", text: "Dentist category, specialties, treatments, emergency hours" },
        { _key: k("o"), iconName: "message-circle", title: "A patient review routine without incentives", text: "A link after the visit, no rewards, no pressure" },
        { _key: k("o"), iconName: "shield-check", title: "Review replies that protect patient privacy", text: "Polite, specific to the practice, never to the patient" },
        { _key: k("o"), iconName: "file-text", title: "Healthgrades, ZocDoc, Yelp and insurer listings", text: "One name, address, phone and hours everywhere" },
        { _key: k("o"), iconName: "layers", title: "One profile and one page per office", text: "For practices with two or more locations" },
        { _key: k("o"), iconName: "sparkles", title: "Your practice in local AI answers", text: "Facts ChatGPT and AI Overviews can check" },
      ],
      prices: [
        { _key: k("r"), label: "Local SEO audit for a dental practice", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly local SEO for a dental practice", value: "from 800 € / month", note: "profile, reviews, listings, office pages", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Local SEO portfolio: businesses that patients and customers find on the map",
      subtitle:
        "None of these are dental practices or clinics. They are the closest work I have: an auto repair shop, a wheel-repair workshop and a tire-storage business whose customers come from local searches, a renovation company, and a multilingual education site that serves clients in several countries.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for local SEO for your dental practice",
      subtitle: "I reply within one business day with what I would change first in your Google profile and listings, and a fixed price.",
      contextLabel: "Practice name or Google Maps link",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where does your practice show for “dentist near me”?", options: ["In the top 3", "Lower on the map", "Not on the map", "Not sure"] },
        { _key: k("z"), question: "How many offices does the practice have?", options: ["One", "Two or three", "Four or more"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do local SEO for dentists: the work on the Google Business Profile, patient reviews and dental listings that decides whether your practice is one of the three offices on the map when someone nearby searches for a dentist. Patients choose a dentist near home or work, open when it suits them and in their insurance network, and the map shows all of that before your website is opened."),

        h2("What local SEO for dentists covers, and what stays on the website"),
        p("A search such as “dentist near me”, “emergency dentist” or “pediatric dentist [town]” shows a map with three practices, a rating, opening hours and a call button. Local dentist SEO is the work on that map: the profile, the reviews, the listings on other sites and the office pages that support them. Google ranks practices there on three things:"),
        li("relevance — how well the profile’s categories and services match the search"),
        li("distance — how close the office is to the person searching"),
        li("prominence — reviews, listings, links and how well known the practice is"),
        p(
          "Treatment pages, content and the technical side of the website rank in the regular results below the map. That part of dental search is described on the ",
          link("dentist SEO", "/dentist-seo"),
          " page; this page is about the map.",
        ),

        h2("Google Business Profile for dentists: primary category “Dentist” and specialty categories"),
        p("The primary category tells Google what the practice is, and for a general practice it should be “Dentist”, because most patient searches match it. Secondary categories add the work you really do and for which Google has a category:"),
        li("“Cosmetic dentist” if veneers, whitening and smile makeovers are a real part of the schedule"),
        li("“Emergency dental service” if the practice sees same-day emergencies and answers the phone for them"),
        li("“Pediatric dentist” only if a pediatric dentist works at the office, not because you see a few children"),
        p("A specialist practice is different: an orthodontist, an oral surgeon or a periodontist uses that specialty as the primary category. Extra categories added “in case” blur the profile and bring patients you then turn away."),

        h2("Dental services, emergency hours and photos in a dentist’s Google profile"),
        p("Next to the categories, the profile carries the details patients compare between two practices before they call:"),
        li("a services list in patients’ words — cleanings and checkups, fillings, crowns, root canal treatment, implants, Invisalign or clear aligners, whitening, dentures, extractions — each with a short description"),
        li("regular hours, holiday hours set before each holiday, and emergency hours shown only if someone really takes those calls"),
        li("an appointment link to your online booking, whether that is your own form, NexHealth, ZocDoc or the booking tool linked to Dentrix or Open Dental"),
        li("attributes that matter to patients, such as a wheelchair-accessible entrance and parking"),
        li("photos of the building and entrance, the reception, the treatment rooms and the team, added every few weeks"),
        p("For an anxious patient, seeing the waiting room and the people in it lowers the barrier to booking more than any description; stock images are not used."),

        h2("Patient reviews for dentists: asking without incentives"),
        p("Reviews move a practice up the map and decide whether a new patient books. Their number matters, but so do how recent they are and what they say. A line like “they fixed my cracked crown on a Saturday, ten minutes from my flat in [neighborhood]” helps the next nervous patient decide, and gives Google words to match against searches. The routine:"),
        ol("after the visit the patient gets a text or email that opens Google’s review box in one tap, sent by the practice’s reminder tool such as Weave or NexHealth, or by hand"),
        ol("the message says that a few words about the kind of visit and the area help other patients, and leaves the choice of what to share to the patient"),
        ol("every patient is asked, not only those who looked happy in the chair"),
        p("Discounts, free whitening, prize draws or any other reward for a review break Google’s rules, so none is used — and neither are reviews written by staff or bought from a service."),

        h2("Responding to dental patient reviews without revealing patient information"),
        p("Replying to reviews is part of local SEO for dentists, but in a dental practice a reply is also a privacy question. In the US, HIPAA protects patient information, and a reply that confirms the reviewer is a patient, mentions their treatment or quotes their records can count as a disclosure — even when the patient described the visit first. In other countries data protection law, such as the GDPR in the EU, raises the same concern. This is general guidance, not legal advice; your compliance officer or lawyer has the last word. The rules I follow when writing replies:"),
        li("thank the reviewer without saying “we were glad to treat you” or naming any procedure"),
        li("answer a complaint with the practice’s general policy — how billing questions or wait times are handled — never with details of the case"),
        li("invite the person to call the office manager, so the conversation moves off the public page"),
        li("never argue about the treatment, even when the review is unfair"),
        p("A short, calm reply reads well to future patients."),

        h2("Dental listings beyond Google: Healthgrades, ZocDoc, Yelp and insurance directories"),
        p("Patients compare dentists in several places, and Google compares those places with your profile. The listings that matter for a dental practice:"),
        li("Healthgrades and ZocDoc, where patients search by specialty, insurance and availability"),
        li("Yelp, Apple Business Connect and Bing Places, which feed maps and voice assistants"),
        li("the find-a-dentist directories of the insurance plans you are in network with, which patients check before booking"),
        li("professional association directories you belong to"),
        p("Dental listings go stale in typical ways: the address from before the practice moved, a dentist who retired three years ago still shown as accepting patients, a phone line the previous owner cancelled. Google trusts the profile less when sources disagree. I go through the listings that exist, fix them and add the few that matter in your country; bulk directory packages are left out."),

        h2("Local SEO for multi-location dental practices: one profile per office"),
        p("A group practice with three offices needs three Google profiles, each verified at its own address, with its own phone number, hours, photos and reviews. A single profile for the whole group shows in one place only. What usually needs fixing in dental groups:"),
        li("duplicate profiles left over from a previous owner or an old address"),
        li("all offices linking to the home page instead of to their own office page"),
        li("one central phone number on every profile, which makes the offices look alike to Google"),
        li("profiles for individual dentists that compete with the office profile for the same searches"),
        p("Google allows profiles for individual practitioners; they can help a well-known specialist, but for most general dentists the office profile should carry the weight."),

        h2("Location pages for dental offices on the practice website"),
        p("Each office needs its own page on the website, linked from its Google profile. The map reads it, and patients land on it. A good location page has:"),
        li("the address, a map, parking and public transport, and a photo of the entrance"),
        li("hours, emergency arrangements and the direct phone number of that office"),
        li("the dentists who work there, with their credentials, and the languages spoken"),
        li("the treatments offered at that office and the insurance plans it accepts"),
        li("reviews from patients of that office, shown with their consent"),
        p(
          "Ten office pages that differ only in the street name add nothing; each page needs the facts that make that office different. How the website is structured and built is covered on the ",
          link("dental clinic website", "/dental-clinic-website"),
          " page, and its look on the ",
          link("dental website design", "/dental-website-design"),
          " page.",
        ),

        h2("Proximity in dentist local SEO: why you cannot rank on the map where you have no office"),
        p("Distance is the factor local SEO cannot change. Dental practices are not service-area businesses: patients come to the chair, so Google ranks the office from its real address. A practice in one town will not appear on the map in the next town for “dentist near me”, however good its profile. A virtual office or a mailbox address used to get there breaks Google’s guidelines and is a common reason for suspension."),
        p("What does work for patients from neighboring towns: a strong profile that ranks for searches with the town name, an office page that names the area and the travel time, listings on Healthgrades and ZocDoc, which do not limit by distance in the same way, and the regular results, where a good page can rank beyond the map’s radius."),

        h2("Local AI search for dentists: how ChatGPT and Google AI Overviews recommend a dentist (GEO, AEO)"),
        p("More patients now ask ChatGPT, Perplexity or Google’s AI Overviews for “a gentle dentist near [neighborhood] who takes my insurance” or “an emergency dentist open on Sunday”. The answer is assembled from the same sources as the map: the Google profile, reviews, Healthgrades, ZocDoc and Yelp, and the practice’s own pages. That is why generative engine optimization (GEO) and answer engine optimization (AEO) for a dental practice start from the same groundwork as the map:"),
        li("one consistent practice name, address, phone and set of hours across Google, Healthgrades, ZocDoc and Yelp, so the answer cannot blend you with a similarly named office"),
        li("reviews that mention the kind of visit and the area, which assistants summarize"),
        li("treatments, insurance plans, emergency hours and languages written as text on the office pages"),
        li("structured data for the practice and each office that matches the profiles"),
        p(
          "I check what assistants say about your practice before and after the work. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How local SEO for dentists is measured: calls, bookings and new patients"),
        p("A map position depends on where the patient stands, so I measure it on a grid around each office and report what a practice cares about: calls and booking clicks from the profile, direction requests, reviews per month and, where your practice-management software records the source, new patients from the map."),

        h2("How much local SEO for dentists costs"),
        li("Local SEO audit for a dental practice — profile, reviews, listings, office pages: from 250 €, one-off, with fixes ranked by impact."),
        li("One-off set-up — categories, services, hours, photos, listings clean-up, review routine and reply guidelines: 250–700 €."),
        li("Monthly local SEO for a dental practice — photos and updates, reviews and replies, listings, office pages and reporting: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "For a one-office practice outside a big metro area, the audit and the one-off set-up are often all that is needed; monthly work pays off where many practices fight for the same few streets. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Local SEO for dentists: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What is local SEO for dentists?", "It is the work that puts a dental practice in the map results when patients nearby search for a dentist: the Google Business Profile with the right categories, services and hours, patient reviews and replies, listings on Healthgrades, ZocDoc, Yelp and insurance directories, and an office page for each location."],
          ["Is doing local SEO worth it for a dental practice?", "For most practices, yes. Patients pick a dentist within a short drive, and “dentist near me” puts the map above everything else. Unlike ads, a well-kept profile keeps bringing calls without a charge per click, and a new patient who stays for years of checkups is worth far more than the work. The audit tells you how far behind the top three you are."],
          ["How much does local SEO for dentists cost?", "An audit costs from 250 € one-off, the set-up 250–700 €, and monthly local SEO from 800 € per month, or from 1,300 € in very competitive cities. I give a fixed price after seeing your profile and the number of offices."],
          ["How long does it take a dental practice to get into the map pack?", "A corrected category or new emergency hours often shows on the map in a few weeks. The review routine and the listings clean-up take a season — roughly two to four months — to move a practice up. In large cities, where many practices compete for the same searches, it takes longer."],
          ["Can a dentist rank on Google Maps in a town without an office?", "On the map, rarely: Google ranks the office from its real address and distance counts. Patients from neighboring towns can still find you through searches with the town name, an office page that names the area, and listings on Healthgrades and ZocDoc."],
          ["How should a dentist reply to a negative review?", "Briefly, and in a way that neither confirms the person was seen at the practice nor names a procedure. Describe the practice’s general policy and invite the person to call the office. In the US this matters under HIPAA; elsewhere data protection law raises the same concern. Check your reply policy with your compliance adviser."],
          ["Should each dentist in our practice have a Google profile?", "Google allows profiles for individual practitioners, but for most general practices the office profile should carry the weight. Practitioner profiles make sense for a well-known specialist and need the same upkeep, or they compete with the office profile."],
          ["Do you do local SEO for dentists outside Poland?", "Yes. Local SEO is done remotely — the profile, listings for your country, the review routine and reporting — for practices in the US, Canada, the UK, Australia and the EU. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order local SEO for your dental practice: what to send me"),
        p(
          "Send the practice name, the Google Maps link for each office, the website, the treatments you want more patients for, and whether you see emergencies. I will reply with what I would change first in the profiles and listings and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
