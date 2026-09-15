import React, { FC } from "react";
import styles from "./PricingHomepage.module.scss";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import Button from "../../ui/Button/Button";
import { ModalButton } from "../../ui/Button/ModalButton";
import { localePrefix } from "@/utils/hreflang";
import { FeaturedOffer, FeaturedPricing, PricingSection } from "@/types/homepage";

type Props = {
  section?: PricingSection;
  pricing: FeaturedPricing | null;
  lang: string;
};

const INTL_LOCALE: Record<string, string> = { en: "en-GB", ru: "ru-RU", pl: "pl-PL" };

const WORDS: Record<string, { from: string; oneOff: string; month: string }> = {
  en: { from: "from", oneOff: "one-off", month: "per month" },
  ru: { from: "от", oneOff: "разово", month: "в месяц" },
  pl: { from: "od", oneOff: "jednorazowo", month: "miesięcznie" },
};

/**
 * "from €2,000", "от 2 000 €", "od 8500 zł", "€700–1,400". The euro sign leads
 * in English and trails in Russian, as on each language's own pricing page;
 * złoty always trails.
 */
export function formatPrice(offer: FeaturedOffer, lang: string): string {
  const nf = new Intl.NumberFormat(INTL_LOCALE[lang] ?? "en-GB", { maximumFractionDigits: 0 });
  const amount = offer.maxPrice
    ? `${nf.format(offer.price)}–${nf.format(offer.maxPrice)}`
    : nf.format(offer.price);
  const currency = offer.currency ?? "EUR";
  const withCurrency =
    currency === "PLN"
      ? `${amount} zł`
      : currency === "USD"
        ? `$${amount}`
        : lang === "en"
          ? `€${amount}`
          : `${amount} €`;
  const words = WORDS[lang] ?? WORDS.en;
  return offer.maxPrice ? withCurrency : `${words.from} ${withCurrency}`;
}

// One-off work first, most comprehensive first, then monthly retainers: a
// homepage visitor usually starts with "how much is a site", not a retainer.
function order(a: FeaturedOffer, b: FeaturedOffer): number {
  const monthly = (o: FeaturedOffer) => (o.unit === "month" ? 1 : 0);
  return monthly(a) - monthly(b) || b.price - a.price;
}

const PricingHomepage: FC<Props> = ({ section, pricing, lang }) => {
  if (!pricing?.offers?.length) return null;

  const words = WORDS[lang] ?? WORDS.en;
  const offers = [...pricing.offers].sort(order);
  const pricingHref = `${localePrefix(lang)}/${pricing.path}`;

  return (
    <section className={styles.pricingSection} aria-labelledby="homepage-pricing-title">
      <div className="container">
        {(section?.title || section?.pretitle) && (
          <div className={styles.heading} id="homepage-pricing-title">
            <SectionHeading eyebrow={section?.pretitle} title={section?.title} subtitle={section?.subtitle} />
          </div>
        )}

        <ul className={styles.grid}>
          {offers.map((offer) => (
            <li key={offer._key} className={styles.card}>
              <p className={styles.name}>{offer.name}</p>
              <p className={styles.price}>{formatPrice(offer, lang)}</p>
              <p className={styles.unit}>{offer.unit === "month" ? words.month : words.oneOff}</p>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          {section?.buttonLabel && (
            <ModalButton variant="primary" size="lg">
              {section.buttonLabel}
            </ModalButton>
          )}
          {section?.linkLabel && (
            <Button href={pricingHref} variant="secondary" size="lg">
              {section.linkLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingHomepage;
