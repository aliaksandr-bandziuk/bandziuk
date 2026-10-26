// Landing page fixture: Life coach website design (EN), group
// «life-coach-website-design». New page.
// Semantic core: ref/creative-leisure.md, coaches (US volumes): life coach
// websites 390 (intro, examples H2, metaTitle) · life coach website examples 70
// · best life coach websites 70 (examples H2) · life coach website design 50
// (H1) · website design for life coach 50 · life coach website templates free
// 20 (templates H2) · seo for coaches 40 · seo for life coaches 20 · seo for
// business / health coaches 10 each (the single SEO H2).
// Intent: ref/intent-check-creative-leisure.md — «website for life coaches» vs
// «life coach website design»: 1 shared URL (websiteplanet). Both SERPs are
// builders and coaching-site vendors (Wix, Kartra, Astra, coachingwebsites,
// sitebuilderreport) → the reader is a coach choosing between a builder and a
// custom site. «life coach website design» vs «seo for coaches»: 0 shared
// URLs → SEO is one H2 here, not the page’s topic.
// Angles: niche (career, business, health, relationships), programs and
// pricing, discovery-call booking with time zones, credentials (ICF — general),
// testimonials only with permission, lead magnet and email list, course
// delivery (Landi Room protected video; consultant’s courses with video),
// builders vs custom, SEO for coaches, being named by ChatGPT for a niche.
// Portfolio: retail analytics consultant (personal brand, courses, templates,
// AI-quotable pages), Giuseppe (one-person helping practice, blog, AI answers),
// Landi Room (course sales with protected video), bandziuk.com (own personal
// brand site with blog and landing pages), Sasha Dith (personal brand hub).
// NOT on this page: personal trainers — packages, in-person sessions, local
// search (/personal-trainer-website-design); psychologists and therapists —
// licensing, privacy of health data (/website-for-psychologists-therapists,
// linked once); full SEO service for coaches (one H2 only).
// Owner’s rules: never say there are no clients from the visitor’s segment; no
// outcome promises, no invented testimonials; AI search on every page.
import { p, h2, li, link, k } from "./pt";

export const lifeCoachWebsiteDesignEn = {
  lang: "en",
  group: "life-coach-website-design",
  slug: "life-coach-website-design",
  title: "Life coach website design",
  heading: "Life Coach Website Design",
  excerpt:
    "I design and build life coach websites for career, business, health and relationship coaches: a niche stated in the first line, programs with clear pricing, discovery call booking in the visitor’s time zone, a lead magnet that grows your email list and courses sold from your own site.",
  seo: {
    metaTitle: "Life Coach Websites That Book Discovery Calls | Bandziuk",
    metaDescription:
      "Life coach website design: your niche in the first line, programs and prices, discovery call booking, lead magnet and email list, course sales. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Booking, email list, courses"],
  heroPhonePoints: ["Career coaching for engineers", "12-week program", "Free career checklist", "Book a discovery call"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple life coach website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Coaching website with niche and program pages, lead magnet and email sign-up, course sales with protected video, blog or podcast pages, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with life coach website design",
      items: [
        { _key: k("o"), iconName: "search", title: "Your niche in the first line", text: "Who you coach and on what, in their words" },
        { _key: k("o"), iconName: "file-text", title: "Programs that read like products", text: "Format, length, what is included, price" },
        { _key: k("o"), iconName: "phone", title: "Discovery calls in their time zone", text: "Scheduler with intake questions" },
        { _key: k("o"), iconName: "message-circle", title: "A lead magnet and email list", text: "Sign-ups tagged by the page they came from" },
        { _key: k("o"), iconName: "shield-check", title: "Courses sold from your own site", text: "Payment, then a personal video link" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and ChatGPT", text: "Niche, credentials and programs as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple life coach website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Niche pages, lead magnet, courses, blog", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Personal brand websites: consultants, a therapist, courses and my own site",
      subtitle:
        "Each of these sites sells one person’s expertise, which is what a coaching website does. A retail analytics consultant’s site has 153 pages in three languages, downloadable templates and courses with video, planned after research into what her clients search for. Giuseppe, a psychotherapist in Milan, kept 468 blog posts in the move, and his new pages appear in ChatGPT answers. Landi Room, a Warsaw salon, sells a course whose lesson links stop working two weeks after purchase. My own site runs a blog and landing pages, and the site of DJ Sasha Dith gathers fans, media and booking agents in one place.",
      picks: [
        "consultant-website-design-retail-analytics",
        "psychotherapist-website-milan",
        "e-commerce-landing-page-with-secured-video-access",
        "develop-and-optimize-a-personal-website-with-seo",
        "official-website-for-dj-and-producer-sasha-dith",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your life coach website",
      subtitle: "Within one business day you get a proposed page structure for your niche and programs, and a fixed price.",
      contextLabel: "Your current site, LinkedIn or Instagram",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of coaching do you do?", options: ["Career or executive", "Business", "Health or wellness", "Life or relationships"] },
        { _key: k("z"), question: "What should the site do first?", options: ["Book discovery calls", "Grow my email list", "Sell a course or program", "All of these"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design and build life coach websites for career, business, health and relationship coaches who work one to one, in groups or through recorded programs. I do the design, the code and the launch myself, for one fixed price. A coaching site has a narrow job: within a minute a stranger should see whether you coach people like them, trust you enough to book a discovery call or join your email list, and know roughly what working with you costs."),

        h2("Life coach website design starts with your niche"),
        p("“I help people live their best life” fits every coach and therefore nobody. The life coach websites that convert name a person and a problem: “Career coaching for engineers moving into management”, “Coaching for founders who work alone”, “Health coaching for nurses on night shifts”. That phrase goes into the headline, the page titles and the first paragraph of each page, because it is what a future client recognizes — and what they type into Google or ChatGPT."),
        p("If you coach two audiences, say managers and the teams they lead, each one gets its own page with its own examples and call to action. Naming a niche does not turn other clients away. It lets the right ones see themselves in the first sentence."),

        h2("Coaching programs and pricing on a life coach website"),
        p("Coaching is an invisible product, so the program page makes it concrete:"),
        li("format: one-to-one sessions, a group cohort, an intensive day, a company engagement"),
        li("length and rhythm: twelve weeks, a session every two weeks, messages in between"),
        li("what the client gets: session notes, worksheets, recordings, course access"),
        li("the price or a starting price, payment plans and what happens if someone stops early"),
        p("A starting price on the page filters out calls with people who expected something else. When an employer pays, one line such as “team and corporate programs are quoted after a call” is enough. Programs are stored as fields in the CMS, so launching a new cohort does not mean redesigning a page."),

        h2("Discovery call booking on a coaching website"),
        p("On most coaching sites the discovery call is the main conversion, so its button sits in the header and after every program. The scheduler — Calendly, Acuity, TidyCal or the one inside your coaching platform — shows only discovery slots, in the visitor’s own time zone. That matters once clients live in New York, London and Dubai at the same time."),
        p("Three intake questions before the call save time for both of you: what they want to change, which program caught their eye, how they found you. The last answer shows which pages and channels bring clients. A line under the button says what the call is: 20 or 30 minutes, by video, free, with nothing to buy at the end."),

        h2("Credentials, ICF and the About page on a coach website"),
        p("In the US, anyone can call themselves a coach, so visitors look for other proof. The About page, written in the first person, covers your coach training and where you did it, an ICF credential if you hold one (ACC, PCC or MCC) or membership in another body, your earlier career when it fits the niche, and what a session with you is like. Where the credentialing body keeps a public directory, the site links to your listing."),
        p("The page also says where coaching stops and when you refer someone to a therapist or doctor. That sentence protects the client and you, and it reads as experience rather than caution."),

        h2("Testimonials on life coach websites: permission and no promised outcomes"),
        p("Testimonials carry a lot of weight on coaching sites, and every one needs the client’s permission for the words, the name or initials and any photo. In the CMS each testimonial has a consent field and an approval date; without them it stays unpublished. Many coaching clients prefer anonymity, and “Engineering manager, Seattle” works well when the quote itself is specific."),
        p("Quotes describe what changed for that person, not what the reader is guaranteed. Lines like “double your income in 90 days” draw complaints and, in the US, attention from the FTC, which treats claims made in endorsements as claims made by you. Video testimonials load only when tapped, so they never slow the page."),

        h2("Lead magnet and email list: what a coaching website offers before the call"),
        p("Most visitors are not ready for a call on their first visit. A lead magnet offers a smaller step: a self-assessment, a workbook, a five-day email course, a recorded workshop. It appears on the pages where it fits — a career-change checklist on the career-change page — instead of a pop-up that greets everyone."),
        p("The sign-up form connects to your email tool — Kit, MailerLite, Mailchimp or Flodesk — and tags each subscriber by the page they joined from, so the welcome emails match their problem. It asks for an email and a first name, links your privacy policy and sends the download by email, which also confirms the address. On the retail analytics consultant’s site I built, downloadable templates and five calculators play this role: tools a visitor can use long before buying a course."),

        h2("Courses and group programs sold from a coaching website"),
        p("A self-paced course or a group program needs three parts: a sales page, payment and access to the lessons. A course platform such as Kajabi, Teachable or Thinkific can host the lessons while your site carries the sales page, your story and the search traffic. Or the lessons live on your own site behind a payment, as the consultant’s courses with video do."),
        p("For Landi Room, a Warsaw beauty salon selling an online course, a Stripe Checkout payment sends the buyer a unique link to the lessons. Fourteen days later the link is dead, and the video was never downloadable. Over 100 people paid for the course after its first Google Ads campaign, with zero cases of unauthorized sharing. A coach selling a recorded workshop or a mini-course can use the same flow without paying a monthly platform fee."),

        h2("Life coach website examples, templates and builders: Wix, Kartra or custom"),
        p("Search for life coach website examples and you mostly find builders and all-in-one platforms: Wix and Squarespace templates, Kartra and Kajabi with pages, email and courses in one subscription. For a coach still testing a niche, a template with a booking link is a fine start, and I will say so on the first call."),
        p("A custom site makes sense when you have content worth ranking — articles, a podcast, a book — when you coach in two languages, or when the platform fee and its limits on page structure and speed start to cost more than they save. Whatever you choose, keep your own domain and your email list. Those are the assets that move with you."),

        h2("SEO for coaches: how a life coach website gets found in Google"),
        p("“Life coach” as a search is crowded with directories and big platforms; a niche is not. SEO for coaches works through pages that match how future clients describe their problem: “career coach for nurses leaving the bedside”, “ADHD coaching for adults”, “executive coach in Chicago”. Each niche or program gets a page with its own title and answers to the questions you hear on discovery calls. Articles help when they answer those questions in depth, and a podcast or YouTube channel helps when each episode has its own page with a written summary."),
        p(
          "A blog grows in value over years, so a redesign must not throw it away. When I rebuilt Giuseppe’s site, all 468 posts moved with 301 redirects from every old address, and their search history moved with them. Ongoing work on rankings after launch is described on ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          ".",
        ),

        h2("A life coach website that ChatGPT and Google AI Overviews can read"),
        p("People now ask ChatGPT for “a career coach for software engineers who want to become managers” and get names back. An assistant can name you only if it can read who you coach, on what, in which languages, in what format and at what price. On your site those facts are plain text on pages rendered by the server, with structured data for you as a person, your services and your FAQ, and robots.txt rules that let AI crawlers in."),
        p(
          "The retail analytics consultant’s site was planned this way from the start: demand researched before design, and pages written to be quoted by AI assistants. Giuseppe’s new pages already show up in ChatGPT answers. The ongoing side is on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much life coach website design costs"),
        p("Design and development are quoted together, at two levels:"),
        li("A simple life coach website — home, about, one or two programs, discovery call booking, email sign-up, contact: 700–1,400 €."),
        li("A site with several niche or program pages, a lead magnet flow, course sales with protected video, blog or podcast pages, or a second language: from 2,000 €."),
        p(
          "Psychologists and therapists work under different rules than coaches and have a separate page on ",
          link("websites for psychologists and therapists", "/website-for-psychologists-therapists"),
          ". My general approach is under ",
          link("website development", "/services/website-development"),
          ", and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Life coach website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a life coach website cost?", "A simple coaching site costs 700–1,400 €; one with several niche pages, a lead magnet, course sales or a blog starts at 2,000 €. Design is included. After a short description of your niche and programs I quote a fixed price."],
          ["What should a life coach website include?", "Your niche in the first line, an About page with your training and credentials, program pages with format and price, discovery call booking, testimonials used with permission, an email sign-up and a contact page. A blog or podcast pages come next."],
          ["Do I need a website if I have Instagram or LinkedIn?", "Social profiles bring attention, but you do not own them, and they cannot hold your programs, prices, booking and email list in one place. The site is where that attention turns into calls and sign-ups."],
          ["Can you connect my scheduler and email tool?", "Yes. Calendly, Acuity, TidyCal or your platform’s scheduler for discovery calls, and Kit, MailerLite, Mailchimp or Flodesk for the list, with subscribers tagged by the page they joined from."],
          ["Can I sell a course on my own site instead of Kajabi?", "Yes. Stripe Checkout takes the payment, then the buyer receives a private lesson link with an end date; the videos stream but cannot be saved. For larger course libraries a platform can host the lessons while your site sells them."],
          ["Can you help with the page texts?", "Yes. I write the texts from a short interview about your niche and programs, and you approve every page. Testimonials come only from your clients, with their permission."],
          ["Do you build websites for US coaches from Poland?", "Yes. Everything runs remotely from Warsaw. Your morning in New York or Chicago is my afternoon or evening in CET, so we can talk on any weekday. I invoice in euros; the site uses US dates and shows session times in each visitor’s zone."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a life coach website: what to send me"),
        p(
          "Send your current site or social profile, a sentence about who you coach and on what, your training and credentials, the programs you sell with their format and price, the tools you already use for booking and email, and any lead magnet or course you have. Within one business day you get a proposed page structure and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
