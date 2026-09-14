export type AiCheckLang = "en" | "pl" | "ru";

export type AiCheckEngine = "chatgpt" | "perplexity";

export type AiCheckQuestionKind = "knowledge" | "recommendation" | "reputation";

export type AiCheckInput = {
  company: string;
  /** Bare hostname, lower-case, no "www." — normalised before it gets here. */
  domain: string;
  service: string;
  location: string;
  email: string;
  lang: AiCheckLang;
};

export type EngineAnswer = {
  text: string;
  citations: string[];
  cost: number;
};

export type AiCheckAnswer = {
  engine: AiCheckEngine;
  kind: AiCheckQuestionKind;
  prompt: string;
  /** The company name (or its domain label) appears in the answer text. */
  named: boolean;
  /** At least one citation points at the company's own domain. */
  siteCited: boolean;
  /** The assistant said it could not find information about the company. */
  noInformation: boolean;
  excerpt: string;
  sources: string[];
  error?: string;
};

export type AiCheckReport = {
  company: string;
  domain: string;
  answers: AiCheckAnswer[];
  summary: {
    /** Recommendation answers received, and how many named the company. */
    recommendationAsked: number;
    recommended: number;
    /** Knowledge and reputation answers received, and how many knew the company. */
    aboutAsked: number;
    recognised: number;
    /** All successful answers, and how many cited the company's own site. */
    answered: number;
    siteCited: number;
    failed: number;
  };
};
