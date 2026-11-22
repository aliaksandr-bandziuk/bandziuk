// Section add-on for the Sanity page /services/ai-visibility-audit (EN).
// Not a page fixture: it carries one H2 section, to be appended to the end of
// the page's guide text block by scripts/sync-fixture-section.cjs. Lives in
// sections/ so check-fixture-rules.cjs does not read it as a page.
//
// Why (22.11.2026). Search Console, 28 days: «ai visibility audit» 212
// impressions, 210 of them from the United Kingdom, position 38.1. The live UK
// SERP for that query is services — seostrategy.co.uk, jameshubbardconsulting,
// dlrmedia, digitalwomble — plus two free checkers. Our page carries no
// heading naming a single assistant: ChatGPT, Perplexity, Gemini and AI
// Overviews appear only in body text and in the meta description.
import { p, h2, li } from "../pt";

export const aiVisibilityAuditPlatformsEn = {
  lang: "en",
  slug: "ai-visibility-audit",
  contentBlocks: [
    {
      _type: "textContent",
      layout: "guide",
      content: [
        h2("ChatGPT, Perplexity, Gemini and Google's AI Overviews: what the audit checks on each"),
        p("Assistants do not answer from one place, which is why a company can be described well in one and badly in another. Each is run as its own surface, with its own log:"),
        li("ChatGPT answers partly from the model and partly from what it retrieves during the conversation. A description that arrives with no source attached is the one worth catching here, because that is the kind no page edit reaches."),
        li("Google's AI Overviews are assembled from pages Google already ranks for the query, so what the index holds about you decides what appears. This is the surface most likely to respond to ordinary on-page work."),
        li("Perplexity names its sources beside the answer. That makes it the quickest place to see which page produced a wrong claim, and usually the first place a correction shows."),
        li("Gemini leans on Google's index and on what Google already treats as confirmed about a company, so disagreements between your site, your profiles and directory listings tend to surface here."),
        li("Microsoft Copilot draws on Bing, and Bing Webmaster Tools reports which of your pages were cited — which is why that report is part of the measurement left with you."),
        p("The report keeps each surface separate rather than averaging them, so you can see where you stand with the assistant your buyers actually use, and in which language."),
      ],
    },
  ],
};
