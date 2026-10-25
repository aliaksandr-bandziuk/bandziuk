// Landing page fixture: SEO for doctors (EN), group «dental-medical».
// Semantic core: ref/dental-medical.csv + dental-medical.md: seo for doctors
// 320, local seo for doctors 170, seo services for doctors 140, seo service for
// doctors 140, website marketing for doctors 90, seo agency for doctors 50,
// digital marketing agency for doctors 50, seo company for doctors 40, seo
// strategy for doctors 30, seo strategies for doctors 30, marketing agency for
// doctors 20; tail 10 each: seo keywords for doctors, advanced seo for doctors,
// healthcare seo for doctors, best seo company for doctors. Doctor SEO and
// marketing phrases sum to 1,140. «doctors seo» and «physician seo» are not in
// the CSV; the 2,160 figure in the task is not confirmed by the file.
// Intent: ref/intent-check-dental-medical.md — «seo for doctors» vs «medical
// seo» 0 shared URLs, vs «dentist seo» 0 shared URLs. Top-10: healthcaresuccess,
// physiciansthrive, eflot, doctorlogic, victorious, gbim → physician-marketing
// firms. This page = the individual physician or specialist: a personal
// physician site, doctor profile pages, E-E-A-T and credentials (board
// certification), hospital affiliation, specialty and condition pages,
// reputation on Healthgrades / Vitals / ZocDoc, practitioner profiles in Google
// Maps, referrals, telehealth.
// NOT on this page: SEO for practices, clinics and medical groups, incl.
// «medical practice seo» 170 and «seo for medical practice» 170 (/medical-seo);
// hospitals and health systems, «local seo for healthcare» 260 (/healthcare-seo);
// dentists (/dentist-seo, /local-seo-for-dentists); building and designing a
// doctor’s site (/medical-website-design). «website for doctors» 1,900 is
// patients looking for doctors, not targeted.
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, h3, li, link, k } from "./pt";

export const seoForDoctorsEn = {
  lang: "en",
  group: "seo-for-doctors",
  slug: "seo-for-doctors",
  title: "SEO for doctors",
  heading: "SEO for Doctors",
  excerpt:
    "I do SEO for doctors — individual physicians and specialists: a personal site or profile page, credentials and hospital affiliation, condition pages you review, and ratings on Healthgrades, Vitals and ZocDoc, so patients searching for you or your specialty find you.",
  seo: {
    metaTitle: "SEO Services for Doctors and Specialists | Bandziuk",
    metaDescription:
      "SEO for doctors and specialists: physician profile pages, board certification, condition pages, Healthgrades and ZocDoc ratings, AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["For physicians and specialists", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Dr. [Name], MD", "Board-certified", "Accepting new patients", "Book a visit"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a physician: profile pages, directories, Google profile, AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a doctor: profile page, condition pages, structured data, directory clean-up", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a physician or specialist", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO services for doctors",
      items: [
        { _key: k("o"), iconName: "file-text", title: "A doctor profile page that ranks for your name", text: "Training, board certification, hospitals, languages" },
        { _key: k("o"), iconName: "layers", title: "Specialty and condition pages you review", text: "Dated, signed, written for patients, no medical advice" },
        { _key: k("o"), iconName: "message-circle", title: "Ratings on Healthgrades, Vitals and ZocDoc", text: "Profiles claimed and corrected, replies that protect privacy" },
        { _key: k("o"), iconName: "map-pin", title: "Your practitioner profile on Google Maps", text: "For each office or hospital where you see patients" },
        { _key: k("o"), iconName: "sparkles", title: "Your name in ChatGPT and AI Overviews", text: "Credentials and specialty assistants can check" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in appointment requests", text: "Bookings and referral calls, not rankings alone" },
      ],
      prices: [
        { _key: k("r"), label: "SEO audit for a physician", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a physician or specialist", value: "from 800 € / month", note: "profile, condition pages, ratings, AI visibility", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: websites where one person’s expertise had to be found",
      subtitle:
        "Multilingual, photo-led and booking-focused websites I have built and optimised — the same work a physician needs: clear pages, fast mobile layouts and visibility in search and AI answers.",
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your physician profile and website",
      subtitle: "I reply within one business day with what I would fix first in your profile pages and directory listings, and a fixed price.",
      contextLabel: "Your name, specialty or profile link",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where do your new patients come from now?", options: ["Referrals from other doctors", "Hospital or group website", "Healthgrades, ZocDoc and similar", "Google search"] },
        { _key: k("z"), question: "Do you have your own website?", options: ["Yes, a personal site", "Only a profile on the practice or hospital site", "No"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for doctors as individual physicians and specialists: the work that makes a patient who searches for your name, your specialty or their condition find you — and trust what they find. A practice or a hospital has its own website and marketing; you as a physician have a name, credentials and reviews that follow you from one employer to the next. This page is about that personal side of search."),

        h2("What SEO for doctors covers: your name, your specialty and the conditions you treat"),
        p("Patients look for physicians in three ways, and each needs its own work. These are the SEO keywords for doctors that matter most:"),
        li("the doctor’s name — after a referral, a recommendation from a friend or a hospital stay, often typed with a spelling mistake"),
        li("the specialty and the place — “rheumatologist [city]”, “pediatric cardiologist near me”, “female dermatologist”"),
        li("the condition or procedure — “psoriatic arthritis specialist”, “knee replacement surgeon”, “second opinion thyroid nodule”"),
        p(
          "Name searches show directories first: Healthgrades, Vitals, ZocDoc, WebMD and the hospital’s find-a-doctor page. Specialty searches show the map. Condition searches show health publishers and AI Overviews. SEO for a whole practice, clinic or medical group — service lines, several locations, a marketing budget — is a different job, described on the ",
          link("medical SEO", "/medical-seo"),
          " page.",
        ),

        h2("A personal physician website or a doctor profile on the practice site"),
        p("Many physicians have only a profile page on their employer’s website, written by someone else and lost when they change jobs. A personal physician website — even five pages — is the one place you control:"),
        li("it ranks for your name above directories you cannot edit"),
        li("it stays yours when you move hospitals, join a group or open a private practice"),
        li("it can explain your approach and the conditions you focus on in your own words"),
        p(
          "If you stay with one practice for the long term, a strong profile page on its site may be enough, and the work goes into that page and the directories. How a doctor’s site is designed and built is covered on the ",
          link("medical website design", "/medical-website-design"),
          " page.",
        ),

        h2("Doctor profile pages and E-E-A-T: credentials, board certification and hospital affiliation"),
        p("Google treats health as a “Your Money or Your Life” subject and looks for E-E-A-T — first-hand experience, expertise, authority and trust — before it ranks medical pages. For an individual physician E-E-A-T is not abstract: it is the list of facts on your profile page that a patient, a colleague or a search engine can verify."),
        h3("Credentials and board certification on a physician profile"),
        p("Medical school, residency and fellowship with years; board certification with the board named; state licenses; memberships in specialty societies; publications and teaching roles. Patients and search engines can check board certification, so it is written exactly as the board states it."),
        h3("Hospital affiliation and the hospital’s find-a-doctor page"),
        p("The hospitals where you have privileges are both a trust signal and a source of links. Your profile names them, and the hospital’s find-a-doctor page should link back to your profile or personal site. Many US directories build profiles from public provider data such as the NPI registry, so an old address there spreads to sites you never touched."),
        p("All of this is also marked up as structured data for the physician — specialty, credentials, affiliated hospitals, offices — so search engines and assistants connect the page with the person."),

        h2("Specialty and condition pages in SEO for doctors: written or reviewed by the physician"),
        p("A page about a condition you treat — say, psoriatic arthritis for a rheumatologist — can rank for searches that no directory answers. In a YMYL field it only works if it is clearly yours:"),
        li("written or reviewed by you, with your name, credentials and the date of the last review at the top"),
        li("explains the condition, how it is diagnosed and what treatment options exist at your office, without giving advice to an individual reader"),
        li("says when to seek urgent care and that the page is no substitute for a visit"),
        li("cites guidelines or studies where it makes a claim, and makes no promises of a cure or outcome"),
        p("I draft and structure the pages from search data and your notes; you correct the medicine. Pages nobody with credentials has reviewed are not published."),

        h2("Physician reviews and reputation on Healthgrades, Vitals, ZocDoc and Google"),
        p("Patients read ratings before they book a doctor they do not know. The directories hold profiles for most US physicians whether or not they have claimed them, often with wrong offices, old photos and missing insurance. The work:"),
        li("claim and correct the profiles on Healthgrades, Vitals, ZocDoc, WebMD and Google, with the same name format, offices and phone numbers"),
        li("add a recent photo, languages, accepted insurance and a short biography that matches the profile page"),
        li("set up a request for a review after the visit, sent to every patient, with no incentives of any kind"),
        li("report reviews that break a platform’s rules, such as ones about a different doctor"),
        p("Replies need the most care. In the US, a reply that confirms someone is your patient or mentions their care can be a HIPAA disclosure, even when the patient wrote about it first; in the EU the GDPR raises the same concern. A reply thanks the person, states a general policy and invites them to call the office — nothing more. This is general guidance; your practice’s compliance officer has the last word."),

        h2("Local SEO for doctors: practitioner profiles in Google Maps"),
        p("Google allows a separate Business Profile for an individual practitioner at the practice where they see patients. For a specialist this profile often ranks for “[specialty] near me” alongside the practice. Local SEO for doctors means:"),
        li("one practitioner profile for each office where you hold regular hours, with the specialty as the category"),
        li("hours that match your clinic days at that location, not the building’s hours"),
        li("an appointment link to the booking page for you, not the general switchboard"),
        li("no duplicate profiles from an old practice; those are merged or marked as moved"),
        p(
          "Map results for a whole clinic or hospital, with many departments and locations, are part of ",
          link("healthcare SEO", "/healthcare-seo"),
          ".",
        ),

        h2("SEO for doctors who get patients through referrals"),
        p("Many specialists depend on referrals from primary care physicians and other specialists, and a referred patient almost always searches for the name before calling. If that search shows an outdated directory profile with two stars and an old phone number, some referrals never arrive. For referral-based practice, SEO is mostly about the name search: a profile page that ranks first, directories that agree with it, a clear way to book, and a short page for referring physicians with your fax or e-referral details, the conditions you see and typical wait times."),

        h2("Telehealth SEO for doctors: virtual visit pages and where you are licensed"),
        p("Telehealth lets a physician see patients far beyond the commute radius, and it changes what search can bring. A virtual visit page states what can and cannot be handled by video, which platform is used and how to book. In the US a physician generally needs a license in the state where the patient is during the visit, so the page lists the states you are licensed in, and pages target those states rather than the whole country. Search does not override licensing; it only helps the patients you can lawfully see find you."),

        h2("Doctors in ChatGPT and Google AI Overviews: how patients ask AI to choose a physician (GEO, AEO)"),
        p("Patients now ask ChatGPT, Perplexity or Google’s AI Overviews “who is a good endocrinologist in [city] who takes my insurance” or “which surgeons do robotic hernia repair near me”. The answers are put together from directories, hospital pages, reviews and the physician’s own site. For a doctor, generative engine optimization (GEO) and answer engine optimization (AEO) mean:"),
        li("credentials, board certification, hospital affiliation and specialty written as plain facts on your profile page"),
        li("the same name format and offices on every directory, so the assistant does not merge you with another doctor of the same name"),
        li("condition pages with your name as the reviewer, which assistants can cite"),
        li("structured data that ties the person, the specialty and the offices together"),
        p(
          "I check what assistants say about you before and after the work. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("SEO agency for doctors or a single specialist: questions to ask before you sign"),
        p("Most firms ranking for “seo for doctors” are physician marketing agencies that bundle a website, ads, social posts and review software into one monthly fee; some reuse the same condition pages for every dermatologist or orthopedist they sign. I work alone, on SEO and on the site itself. The questions below are worth putting to me as much as to any agency:"),
        li("Who writes the condition pages, and do I review every one before it goes live?"),
        li("If we part ways, do the site, the domain and the Healthgrades and Google logins stay with me?"),
        li("How do you handle review replies with patient privacy in mind?"),
        li("Will you report appointment requests and referral calls, or only rankings?"),

        h2("How much SEO services for doctors cost"),
        li("SEO audit for a physician — profile pages, directories, Google profile and what assistants say: from 250 €, one-off, with fixes in order of impact."),
        li("One-off work — a profile page, condition pages, structured data, directory clean-up: 250–700 €."),
        li("Monthly SEO for a physician or specialist — new condition pages, directories and reviews, AI visibility and reporting: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "Dentists will find their version on the ",
          link("dentist SEO", "/dentist-seo"),
          " page. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for doctors: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for doctors cost?", "An audit of your profile pages, directories and Google profile costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive cities. I give a fixed price after a short description of your specialty and offices."],
          ["How is SEO for doctors different from medical SEO for a practice?", "SEO for doctors is about one physician: name searches, credentials, directory ratings and condition pages that follow you between employers. Medical SEO is about a practice or clinic as a business: service lines, locations and the practice website."],
          ["Does a doctor need a personal website if the hospital has a profile page?", "Not always. A hospital profile can be enough if you stay long term and it is complete. A personal site is worth it if you plan to move, open a private practice, focus on specific conditions or want a page you control for your name."],
          ["How can a physician improve ratings on Healthgrades and Vitals?", "Claim and correct the profiles, then ask every patient for a review after the visit, without incentives. Ratings rise with a steady flow of new reviews. Reviews that break a platform’s rules can be reported; honest negative ones stay and are answered calmly."],
          ["Can a doctor reply to a patient’s online review?", "Yes, carefully. A reply should not confirm that the person is your patient or mention their care. In the US that can be a HIPAA issue; elsewhere data protection law applies. Thank them, state a general policy and invite them to call the office."],
          ["Who writes the medical content on condition pages?", "I research the searches and draft the structure and text; you review and correct the medicine, and the page carries your name, credentials and the review date. Nothing medical is published without a physician’s review."],
          ["How long does SEO take for a doctor?", "Name searches can improve within weeks once the profile page and directories are corrected. Condition and specialty pages usually take three to six months to rank, longer in large cities and competitive specialties."],
          ["Do you work with doctors outside Poland?", "Yes. SEO is done remotely, for physicians in the US, Canada, the UK, Australia and the EU, with the directories and rules of your country. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for doctors: what to send me"),
        p(
          "Send your name, specialty, the offices and hospitals where you see patients, a link to your profile page or personal site and the conditions you want more patients for. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
