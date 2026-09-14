import type { AiCheckAnswer, AiCheckInput, AiCheckReport } from "./types";

/** "https://www.Example.com/about" -> "example.com". Returns "" when unparsable. */
export function normaliseDomain(raw: string): string {
  const value = raw.trim().toLowerCase();
  if (!value) return "";
  try {
    const url = new URL(value.includes("://") ? value : `https://${value}`);
    const host = url.hostname.replace(/^www\./, "");
    return /^[a-z0-9.-]+\.[a-z]{2,}$/.test(host) ? host : "";
  } catch {
    return "";
  }
}

// Legal-form suffixes are dropped before matching: an answer says "Acme", not
// "Acme Sp. z o.o.", and requiring the suffix would report a false miss.
const LEGAL_SUFFIX = /[,\s]+(ltd\.?|limited|llc|inc\.?|gmbh|s\.?a\.?|sp\.?\s?z\s?o\.?\s?o\.?|ооо|ип|plc|b\.?v\.?|s\.?r\.?l\.?)$/i;

function nameVariants(company: string, domain: string): string[] {
  const variants = new Set<string>();
  const clean = company.trim().replace(/[«»"]/g, "");
  if (clean) variants.add(clean.toLowerCase());
  const withoutSuffix = clean.replace(LEGAL_SUFFIX, "").trim();
  if (withoutSuffix.length >= 3) variants.add(withoutSuffix.toLowerCase());
  // The first domain label ("bandziuk" from bandziuk.com) catches answers that
  // name the brand the way its URL spells it. Short labels are skipped because
  // they match ordinary words.
  const label = domain.split(".")[0];
  if (label && label.length >= 5) variants.add(label.toLowerCase());
  return Array.from(variants);
}

// Phrases an assistant uses when it has nothing on the company. Seeing one is a
// finding in itself: the business is invisible to that engine.
const NO_INFO = [
  /could(?:n't| not) find/i, /no (?:specific |reliable |detailed )?information/i, /not aware of/i,
  /unable to find/i, /do(?:n't| not) have (?:any )?(?:specific )?information/i, /limited information/i,
  /не удалось найти/i, /нет (?:достоверной |конкретной )?информации/i, /не нашл/i, /недостаточно информации/i,
  /nie udało (?:mi )?się znaleźć/i, /brak (?:szczegółowych |konkretnych )?informacji/i, /nie znalazłem/i, /nie mam informacji/i,
];

/** Plain-text excerpt: markdown links and emphasis removed, cut at a sentence end. */
export function excerptOf(text: string, max = 700): string {
  const plain = text
    .replace(/\(\[[^\]]*\]\([^)]*\)\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\[\d+\]/g, "")
    // Markdown table separator rows ("|---|---|") survive pipe removal as dashes.
    .replace(/\|?\s*:?-{3,}:?\s*/g, " ")
    .replace(/[*_#`>|]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= max) return plain;
  const cut = plain.slice(0, max);
  const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
  return (end > max * 0.5 ? cut.slice(0, end + 1) : cut).trim() + " …";
}

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "";
  }
}

export function analyseAnswer(
  base: Pick<AiCheckAnswer, "engine" | "kind" | "prompt">,
  input: AiCheckInput,
  text: string,
  citations: string[],
): AiCheckAnswer {
  const lower = text.toLowerCase();
  const hosts = citations.map(hostOf).filter(Boolean);
  const domain = input.domain;

  return {
    ...base,
    named: nameVariants(input.company, domain).some((v) => lower.includes(v)) || lower.includes(domain),
    siteCited: hosts.some((h) => h === domain || h.endsWith(`.${domain}`)),
    noInformation: NO_INFO.some((re) => re.test(text)),
    excerpt: excerptOf(text),
    sources: Array.from(new Set(hosts)).slice(0, 8),
  };
}

/**
 * "Named" only counts on the recommendation question. The other two questions
 * contain the company name, and an assistant repeats it even while saying it
 * found nothing — counting those would report visibility that does not exist.
 * For them the signal is whether the assistant recognised the company at all.
 */
export function summarise(input: AiCheckInput, answers: AiCheckAnswer[]): AiCheckReport {
  const ok = answers.filter((a) => !a.error);
  const recommendation = ok.filter((a) => a.kind === "recommendation");
  const aboutCompany = ok.filter((a) => a.kind !== "recommendation");

  return {
    company: input.company,
    domain: input.domain,
    answers,
    summary: {
      recommendationAsked: recommendation.length,
      recommended: recommendation.filter((a) => a.named).length,
      aboutAsked: aboutCompany.length,
      recognised: aboutCompany.filter((a) => !a.noInformation).length,
      answered: ok.length,
      siteCited: ok.filter((a) => a.siteCited).length,
      failed: answers.length - ok.length,
    },
  };
}
