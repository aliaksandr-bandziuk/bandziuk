// Landing page fixture: Therapist website design (EN), group
// «website-for-psychologists-therapists». REWRITE of the existing page
// /website-for-psychologists-therapists — the URL stays; the old «What clients
// say» reviews block is dropped (old headings: How we'll work, What your
// website gets, What clients say).
// Semantic core: ref/medical-practices.md (EN, US volumes): website design for
// therapist 480, therapist website design 390, best therapist website design
// 70, private practice therapist websites 40, best website builder for
// therapists reddit 10. Brief keywords for H2/H3: psychologist website,
// counselor website, private practice website.
// Intent: ref/intent-check-medical-practices.md — «therapist website design»
// top 10: websiteplanet, choosingtherapy, wix, mytherapyflow, bartxdigital,
// marketing360, brightervision, krishaweb → builders, therapy-site vendors,
// studios and «best» lists. 0 shared URLs with «seo for therapists» → SEO is
// its own page (/seo-for-therapists). «therapist website» (0 shared) =
// patients searching (psychologytoday, betterhelp, headway, talkspace) — NOT
// targeted. «physical/massage therapist website design» — other niches, not here.
// Direct case: Giuseppe, psychotherapist in Milan (psychotherapist-website-milan).
// NOT on this page: being found — directories vs own site, niche and location
// pages, local SEO, insurance-panel searches, reviews (/seo-for-therapists);
// medical practices in general (/medical-website-design).
// Owner's rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const websiteForPsychologistsTherapistsEn = {
  lang: "en",
  group: "website-for-psychologists-therapists",
  slug: "website-for-psychologists-therapists",
  title: "Therapist website design for private practices",
  heading: "Therapist Website Design for Private Practices",
  excerpt:
    "I design and build therapist websites for psychologists, counselors and private practices: a calm design for anxious visitors, a clear path from the first page to a consultation request, privacy-safe forms and an editor you can use without breaking the site.",
  seo: {
    metaTitle: "Websites for Psychologists and Therapists | Bandziuk",
    metaDescription:
      "Therapist website design: calm layouts for anxious visitors, a clear path to the first session, private forms, blog migration with redirects. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Therapy for anxiety", "In person and online", "Fees and insurance", "Send a short message"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple therapist website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Private practice website with specialty pages, online therapy, languages, blog migration and a guarded CMS, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with therapist website design",
      items: [
        { _key: k("o"), iconName: "image", title: "A calm design built around you", text: "Your photo, your room, no stock faces or pop-ups" },
        { _key: k("o"), iconName: "message-circle", title: "A first message that feels small", text: "“What happens if I write” in four short steps" },
        { _key: k("o"), iconName: "shield-check", title: "Forms that ask for little", text: "No symptoms in plain email, analytics after consent" },
        { _key: k("o"), iconName: "file-text", title: "An editor with guard rails", text: "Wording warnings, locked addresses, protected pages" },
        { _key: k("o"), iconName: "layers", title: "Your blog moved without losses", text: "Every old URL redirected to its new page" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and ChatGPT", text: "Facts as text and structured data" },
      ],
      prices: [
        { _key: k("r"), label: "Simple therapist website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Practice site: specialties, languages, blog move", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: a psychotherapy practice and other sites I have built",
      subtitle:
        "First, a private psychotherapy practice in Milan: a calm custom design for people with anxiety, 468 blog posts moved without losing a URL, and a CMS that warns about forbidden wording. Next to it, sites that show other parts of the same job: a premium design built on real photos, a rebuild that kept the company’s design, a site in five languages and a WordPress rebuild.",
      picks: [
        "psychotherapist-website-milan",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your therapist website",
      subtitle: "I reply within one business day with a proposed home page and contact path for your practice, and a fixed price.",
      contextLabel: "Practice name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where is your website now?", options: ["No website yet", "Squarespace, Wix or a template", "A therapy-website vendor", "WordPress with a blog"] },
        { _key: k("z"), question: "How should new clients reach you?", options: ["A short contact form", "A booking link", "A phone call", "Not sure yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design and build therapist websites for psychologists, counselors, marriage and family therapists and small group practices — design, code and launch by one person, at one price. A private practice website is read by someone who is not sure they are ready to ask for help. Its job is to make the next step feel small: see who you are, recognize their own problem in your words and send a short message."),

        h2("Therapist website design for anxious visitors: calm, slow and readable"),
        p("Many visitors arrive late in the evening, on a phone, after weeks of hesitating. A busy page makes them close the tab. What I leave out: pop-ups asking for an email, chat bubbles, sliders, stock photos of people holding their heads, red buttons. What I put in: wide margins, a muted palette, type large enough to read without zooming, real photos of you and your room, and one accent color kept for the button that starts contact."),
        p("For Giuseppe, a psychologist and psychotherapist in Milan who works with anxiety and panic attacks, I made a custom calm design: a dark theme with light sections, a serif typeface with a true italic for quieter emphasis, and only open-licensed resources. It does not look like a template because it is not one."),

        h2("What a private practice website shows on the first screen"),
        p("Before scrolling, a visitor should know four things:"),
        li("who you help, in their words — “Therapy for anxiety and panic attacks in Portland and online”, not “A safe space to grow”"),
        li("whether you see clients in person, by video or both"),
        li("whether you are taking new clients"),
        li("the fee or insurance in one line, next to the button to get in touch"),
        p("Your photo belongs near the top. People choose a therapist more than a practice, and a natural portrait in your own office tells them more than any headline."),

        h2("The path from a psychologist website to the first session"),
        p("The step people fear most is the first message. A short “what happens if I write” section on the contact page and the home page removes the guesswork:"),
        ol("You write a few lines: your name, how to reach you, in person or online."),
        ol("You get a reply within the time stated on the page."),
        ol("A short call to see whether we are a good fit."),
        ol("The first session, with the fee and the cancellation policy known in advance."),
        p("Booking link or contact form? A scheduler from your practice-management system, such as SimplePractice, or a tool like Calendly suits therapists who offer a bookable consultation slot. Many prefer a short message first, so they can check fit before anything is scheduled. The site can offer both, with one of them clearly the main path."),

        h2("Privacy on a counselor website: forms, email and HIPAA"),
        p("A message to a therapist often says more than the sender meant to share. The form asks for little — a name, an email or phone, in person or online, a convenient time — with a line asking people not to describe symptoms. Where a real intake form is needed, it runs through a provider that signs a business associate agreement, as HIPAA can require in the US, not through ordinary email."),
        p("The rest is plumbing visitors never see. Giuseppe’s contact form sends through mail on his own domain with SPF, DKIM and DMARC records in place, so replies do not land in spam, and analytics starts only after consent. About five years ago I worked on a medical system built around patient records, under NDA; what stayed with me is to collect only what the site cannot do without. Your compliance adviser confirms the setup."),

        h2("Template, website builder or a custom therapist website"),
        p("Builders such as Wix and Squarespace and therapy-website vendors sell calm templates for a monthly fee. For a solo therapist with one office, no blog history and a handful of pages, that is often enough, and I will tell you so."),
        p("A custom site pays off when the practice outgrows the template: several clinicians or offices, a second language, a blog that already brings visits, wording rules you want enforced, or plans for many specialty pages. Before choosing any vendor, ask whether you can take your pages, posts and addresses with you when you leave."),

        h2("Pages a private practice website needs: about, specialties, fees and FAQ"),
        p("Beyond the home page, most private practice websites need the same small set of pages, each with one job and one button to get in touch:"),
        li("an about page in the first person: license, training, how a session with you feels"),
        li("specialty pages built from one template, so each reads and looks alike"),
        li("a fees page: session length and price, insurance or superbills, cancellation policy"),
        li("an FAQ with what people ask on the first call"),
        li("a contact page with a map when you see clients in person"),
        p("Giuseppe’s site has a map of his consulting rooms in Milan, Monza and Cernusco sul Naviglio, so each client sees at once which room is nearest and how to get there."),

        h2("Online therapy pages on a therapist website: video sessions and other time zones"),
        p("If you work by video, a separate page explains how it goes: the platform, what to prepare, a quiet room, how payment works and where you can legally see clients. For clients in other time zones, session times are shown in their local time, not only in yours. Giuseppe works with Italians living abroad; his site is Italian first, with an English version under /en where every URL is translated rather than copied."),

        h2("Moving a therapist website without losing the blog: migration and 301 redirects"),
        p("Many therapists have written for years on WordPress, and those posts carry their search history. On Giuseppe’s site I moved all 468 blog posts from WordPress to Next.js 16, with Sanity as the editor, and set 301 redirects from every old URL to its new address, so links and positions follow the posts. The new site also got seven pillar pages, 21 Italian subtopic pages and pages for Milan, Monza and online therapy. It took 44 working days from the first line of code to handover."),
        p(
          "Before any move I list every existing address, match it to a new page, carry over titles and structured data, and check after launch that nothing returns an error. The same process is described on the ",
          link("website redesign", "/services/website-redesign-services"),
          " page.",
        ),

        h2("A CMS with guard rails: editing a therapy practice website safely"),
        p("After launch you edit the site yourself, often late and in a hurry, so the editor should make mistakes hard. In Giuseppe’s CMS the editor warns him when a text contains wording Italian rules on advertising health services make risky: promised outcomes, patient testimonials, discounts, “free consultation”. Key pages cannot be deleted, and the address of a published page is locked, so fixing a typo cannot break links. He received an owner’s manual in English (69 pages) and Italian (71 pages), plus video walkthroughs."),
        p("For a US practice, the list of warnings comes from your own ethics code and board: “guaranteed”, “cure”, client quotes, claims about results. You decide the list; the editor reminds you of it every time you publish."),

        h2("A therapist website that ChatGPT and Google AI Overviews can read"),
        p("Assistants can only describe a practice whose facts they can read. The build takes care of that: pages delivered as text by the server, not assembled by scripts after loading; structured data for the practitioner, the practice, the conditions, therapies and services, and the Q&A; and explicit robots.txt rules saying which AI crawlers may read the site. Giuseppe’s new pages already appear in ChatGPT answers, and he found me by asking ChatGPT himself."),
        p(
          "Being found over time — niche pages, local search, directories, assistants — is ongoing work described on ",
          link("SEO for therapists", "/seo-for-therapists"),
          " and on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much therapist website design costs"),
        p("There is no separate design fee: one price covers designing and building the site."),
        li("A simple therapist website — home, about, a few specialty pages, fees, contact: 700–1,400 €."),
        li("A private practice website with several clinicians or offices, online therapy pages, language versions, blog migration with redirects and a CMS with guard rails: from 2,000 €."),
        p(
          "Clinics and doctors’ practices have their own page on ",
          link("medical website design", "/medical-website-design"),
          "; how I build sites in general is on ",
          link("website development", "/services/website-development"),
          ". All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Therapist website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a therapist website cost?", "Design is included: 700–1,400 € for a simple site, from 2,000 € for a practice site with several clinicians, language versions, blog migration or a CMS with guard rails. I give a fixed quote after a short description of the practice."],
          ["How long does it take to build a private practice website?", "A simple site usually takes a few weeks, depending on how quickly texts and photos are ready. A large one takes longer: Giuseppe’s site, with 468 migrated posts and two languages, took 44 working days from the first line of code to handover."],
          ["Is Squarespace or a therapy website template enough for my practice?", "For a solo therapist with one office and a few pages, often yes. A custom site makes sense with several clinicians, a second language, a blog worth keeping or wording rules you want the editor to enforce."],
          ["Can I keep my blog and Google rankings when I move to a new site?", "Yes. Every old address is mapped to its new page with a 301 redirect, and titles and structured data are carried over, so the posts keep their history."],
          ["Can clients book directly through SimplePractice or Calendly?", "Yes, if your system offers a booking link or widget. Many therapists still prefer a short message first; the site can offer both and make one the main path."],
          ["Can I update the website myself?", "Yes. You get an editor with protected key pages, locked addresses for published pages and, if you want, warnings for wording your ethics code rules out, plus a written manual and short videos."],
          ["Do you build websites for US therapists from Poland?", "Yes. Everything is done remotely from Warsaw, and a call in your morning lands in my afternoon or evening. You are invoiced in euros, and the site uses US date and phone formats, your time zone and your state’s details."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a therapist website: what to send me"),
        p(
          "Send your current site or a short description of the practice, your license and specialties, whether you see clients in person, online or both, how you want people to contact you, and a few photos of you and your office if you have them. I will reply with a proposed first screen and contact path and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
