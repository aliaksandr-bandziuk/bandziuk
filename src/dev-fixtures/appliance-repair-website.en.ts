// Landing page fixture: website design for appliance repair companies (EN),
// group «appliance-repair-website». NEW page — create-landing.cjs, root level.
//
// Measured (research/dataforseo/repair-niches.md, 19.11.2026): «appliance repair
// website» 170 — a rare owner-side phrase that names exactly this page. Owner
// side in this niche totals 430, the only niche in months where the owner
// searches at all. Customer side 347 600.
//
// BACKBONE, kept clear of appliance-repair-seo (which is about being found:
// appliance × brand × fault × service area). This page is about what happens
// after he finds you: the site has to take a booking from somebody standing
// next to a leaking washing machine, in under two minutes, and hand the
// technician enough to arrive with the right part. Dispatch desk, not brochure.
import { p, h2, h3, li, link, k } from "./pt";

export const applianceRepairWebsiteEn = {
  lang: "en",
  group: "appliance-repair-website",
  slug: "appliance-repair-website-design",
  title: "Website Design for Appliance Repair Companies",
  heading:
    "Website design for appliance repair companies: a site that books the visit and tells the technician which part to bring",
  excerpt:
    "I build websites for appliance repair companies. The customer is standing next to a leaking washing machine with one hand free. The site has to take the booking in under two minutes and pass you the model, the fault and the address, so the van arrives with the right part. Website from €2000, audit of an existing one €250.",
  seo: {
    metaTitle: "Appliance Repair Website: Booking, Fees, Speed",
    metaDescription:
      "Website design for appliance repair companies: a booking form that captures model and fault, diagnostic fee in the open, fast on a phone, ready for AI search.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Booking in under two minutes", "Found by ChatGPT and AI search", "Website from €2000"],
  heroPhonePoints: ["Photo of the model plate", "Service area by town", "Same-day slots", "Call button that works"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Website for an appliance repair company: booking flow, appliance and brand pages, service area", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page for one appliance or one town", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Audit of an existing appliance repair website: booking, speed, mobile", price: 250, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "Website design for an appliance repair company: what the work consists of",
      items: [
        { _key: k("o"), iconName: "file-text", title: "A booking form that asks four things", text: "Appliance, fault, model plate, address" },
        { _key: k("o"), iconName: "clock", title: "Diagnostic fee and call-out in the open", text: "The number he looks for before calling" },
        { _key: k("o"), iconName: "map-pin", title: "Service area written as towns", text: "Not a radius on a map nobody reads" },
        { _key: k("o"), iconName: "sparkles", title: "Ready for AI search from day one", text: "Structured data, readable text, real figures" },
        { _key: k("o"), iconName: "layers", title: "Appliance and brand pages built in", text: "So the SEO work has somewhere to land" },
        { _key: k("o"), iconName: "target", title: "Fast on a damaged phone in a kitchen", text: "Under two seconds, one thumb, one hand" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: service businesses whose website has to take the job, not describe it",
      subtitle:
        "What these share with an appliance repair company: the customer decides in minutes, the enquiry has to arrive complete, and the growth came from structure and content rather than bought links. A car service with the same call-now pattern. A wheel repair workshop in Warsaw. An internet provider checked address by address. A beauty studio selling one service online. A 3D scanning company whose organic traffic grew twenty-nine times.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "web-development-a-website-for-internet-prowider",
        "e-commerce-landing-page-with-secured-video-access",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("An appliance repair website is a dispatch desk, not a brochure"),
        p("I build websites for appliance repair companies. The work starts with one thing I need from you: what the technician must know before he loads the van."),
        p("Picture the person who is about to become your customer. The washing machine has stopped mid-cycle with water in the drum. There is a towel on the floor. He has one hand free and a phone he is holding over the mess."),
        p("He is not reading about your twenty years of experience. He wants to hand the problem to somebody today, and he will give it to whoever makes that easiest in the next two minutes."),
        p("So the site has exactly one job: take the booking, and take it complete:"),
        li("which appliance, and what it is doing;"),
        li("the model, ideally as a photograph of the plate;"),
        li("the address and whether anyone is home this afternoon;"),
        li("the fee he agrees to before the van moves;"),
        li("and a confirmation that stops him calling two competitors as well."),

        h2("The appliance repair booking form that asks four things and nothing else"),
        p("Most repair sites use a contact form built for a law firm: name, email, subject, message. It produces enquiries that say «washing machine broken, call me», and then a phone call to find out everything that matters."),
        p("Four fields change that. The appliance, chosen from a list. The fault, chosen from the five you actually see. A photo of the model plate, which takes him ten seconds and saves you a wasted visit. The address with a slot preference."),
        p("Email is optional and the name can wait. Every field that is not one of those four costs you bookings, and in this trade the loss is invisible: he simply calls the next number."),

        h3("The photo of the model plate: the one field that saves a second visit"),
        p("The plate carries the exact model and serial. With it you know whether the part is on the van, in the warehouse or two weeks away from a supplier."),
        p("Without it the first visit is a diagnosis, the second is the repair, and your day holds half as many jobs. A form that asks for one photograph converts a two-visit job into one, and the customer does not even notice he did you a favour."),

        h2("Diagnostic fee and call-out charge on an appliance repair website: where to write them"),
        p("Hiding the fee feels safer. In practice it produces the worst possible call: he books, the technician arrives, and the first thing said at the door is a number the customer did not expect."),
        p("Write it on the page: what the call-out costs, what the diagnosis costs, whether it is deducted from the repair, and what happens if he decides not to repair."),
        p("That paragraph does two jobs. It removes the argument at the door, and it quietly filters out the people who were hoping somebody would look at a fifteen-year-old dryer for free."),

        h3("Service area on an appliance repair website: a list of towns, not a circle on a map"),
        p("Every appliance repair site has a map with a circle. Nobody reads a circle."),
        p("Write the towns and districts you actually drive to, with the ones that cost extra marked as such. A person checking whether you come to his village wants to see its name, and he wants to see it in text, because that is also how a search engine and an assistant read it."),

        h2("Who builds websites for appliance repair companies, and what to ask them"),
        p("Most of these sites are built by a general web studio that has never watched a dispatcher work. The result looks professional and books nothing."),
        p("Three questions tell you which kind you are talking to. How many fields will the booking form have, and why. Where will the diagnostic fee appear. What happens on the site when the customer is holding a cracked phone in a dark kitchen with one bar of signal."),
        p("If the answers are about design, you are buying a brochure. In this trade the brochure is the expensive option, because it works out to a price per booking of infinity."),

        h3("The appliance and brand pages the SEO work will need later"),
        p("A site built without them has to be rebuilt the moment you start ranking: there is nowhere for «dishwasher repair» or a brand page to live."),
        p("So they go in from the start as a structure, even if only four of them are written on day one. I describe how that side works on the page about ",
          link("SEO for appliance repair companies", "/appliance-repair-seo"),
          "."),

        h2("Technical requirements for an appliance repair website: speed, one thumb, a number that dials"),
        p("This site is opened almost entirely on phones, often on a phone with a cracked screen, in a kitchen, on mobile data, by somebody who is annoyed."),
        p("That sets the rules. Under two seconds to open. Everything reachable with one thumb. The phone number as a button that dials, not as text to copy. The booking form above the fold on the appliance pages, not after four screens of photographs."),
        p("Booking forms also have to survive a bad connection: a form that silently loses a photo of a model plate on a weak signal is the most expensive bug this trade has, and almost nobody tests it."),

        h2("Websites for appliance repair and AI search: ChatGPT, Perplexity, Gemini and AI Overviews"),
        p("«Is it worth repairing a ten-year-old washing machine» and «how much does an appliance repair call-out cost» are asked of assistants before anyone picks a company."),
        p("The assistant answers from readable text and names companies whose pages commit to figures: the call-out fee, the diagnostic fee, the warranty on the repair, the towns served."),
        p("A site built as a brochure has nothing to quote. A site built as a dispatch desk is full of quotable facts, which is why doing this properly pays twice."),

        h3("Generative engine optimization (GEO), answer engine optimization (AEO) and structured data"),
        p("GEO and AEO are the same job from two sides: being named inside the generated answer, not only in the list of links. The ordinary work behind them is structured data, readable text and consistent company details."),
        p("On a new site it costs nothing extra — it is done while the pages are being built. On an existing one it is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          "."),

        h2("How much a website for an appliance repair company costs"),
        p("A full site is from €2000: booking flow, appliance and brand structure, service area, fee pages, speed and structured data. A single landing page, for one appliance or one town, is €700–1400."),
        p("An audit of the site you already have is €250 and answers one question: is it worth rebuilding, or is it three fixes away from working."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A website for your appliance repair company",
      subtitle: "Send what you have now and I reply within one working day: what I would build and what it would cost.",
      contextLabel: "Your company or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "An old site", "A one-page site", "A site I cannot edit"] },
        { _key: k("z"), question: "How do jobs reach you today?", options: ["Phone calls", "A contact form", "Lead platforms", "Word of mouth"] },
        { _key: k("z"), question: "Do you repair at home, in the workshop or both?", options: ["At the customer's home", "In the workshop", "Both", "Depends on the appliance"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Websites for appliance repair companies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a website for an appliance repair company cost?", "From €2000 for a full site with the booking flow, appliance and brand structure, service area and fee pages. A single landing page is €700–1400. An audit of an existing site is €250."],
          ["How long does it take to build?", "Three to five weeks for a full site, less for a landing page. The slow part is never the code — it is getting the real figures out of you: fees, warranty terms, which towns you actually drive to."],
          ["Do we have to publish the call-out and diagnostic fee?", "I strongly recommend it. Hiding it moves the argument to the doorstep, where it costs you the job and a review. Published, it filters out the people who expected a free look at a fifteen-year-old dryer."],
          ["Our customers just phone us. Why do we need a site at all?", "They phone because they found you somewhere, and they decided to phone you rather than the next number because of what they saw. The site is where that decision is made, and it is also what your Google listing links to."],
          ["Why only four fields in the booking form?", "Because every extra field loses bookings invisibly: the customer does not complain, he calls a competitor. The appliance, the fault, a photo of the model plate and the address are the four things that let you arrive with the right part."],
          ["Can you work with the site we already have?", "Often yes, and it is cheaper. The audit answers that honestly — three fixes or a rebuild. I will say which, and I have no interest in selling a rebuild that is not needed."],
          ["Will the new site rank, or is SEO separate work?", "The site is built so that ranking is possible: appliance and brand structure, clean text, structured data, speed. Actually ranking it is the ongoing work described on the appliance repair SEO page."],
          ["Do you build in Polish, English and Russian?", "Yes, and it matters here: a repair company in a city with a mixed population loses bookings when the site exists in one language only."],
          ["Will the new site be found by ChatGPT and other assistants?", "Yes, if it is built for it. Assistants read text, not photographs, and they name companies whose pages carry figures they can quote: the call-out fee, the diagnostic fee, the warranty on the repair, the towns you serve. On a new site that work costs nothing extra — it is done while the pages are built."],
          ["Who writes the content?", "I draft and you correct. The parts that convert are the ones only a repair company knows: what the call-out really covers, which faults are worth repairing, what you refuse and why."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a website for an appliance repair company: what to send me"),
        p("Send the site you have now, or say you have none. Tell me which appliances and brands you repair, which towns you drive to, and what the call-out costs."),
        p("I reply within one working day: what I would build, in what order, and what it would cost."),
      ],
    },
  ],
};
