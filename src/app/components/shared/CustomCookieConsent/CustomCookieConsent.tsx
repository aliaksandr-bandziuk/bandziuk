import styles from "./CustomCookieConsent.module.scss";
import CookieConsentButtons from "./CookieConsentButtons";

type Props = {
  lang: "en" | "pl" | "ru";
};

const dictionary = {
  en: {
    title: "We use cookies",
    description:
      "We use necessary cookies for the site to work. We also use analytics and marketing cookies to improve our services – only if you agree.",
    acceptAll: "Accept all",
    rejectAll: "Only necessary",
    privacy: "Cookie Policy",
  },
  pl: {
    title: "Używamy plików cookie",
    description:
      "Używamy niezbędnych plików cookie, aby strona działała poprawnie. Analityczne i marketingowe pliki cookie wykorzystujemy tylko za Twoją zgodą.",
    acceptAll: "Akceptuj wszystkie",
    rejectAll: "Tylko niezbędne",
    privacy: "Polityka plików cookie",
  },
  ru: {
    title: "Мы используем файлы cookie",
    description:
      "Мы используем необходимые файлы cookie для работы сайта. Аналитические и маркетинговые файлы cookie используются только с вашего согласия.",
    acceptAll: "Принять все",
    rejectAll: "Только необходимые",
    privacy: "Политика использования cookies",
  },
};

const policyPath = {
  en: "/privacy-policy",
  pl: "/pl/polityka-prywatnosci",
  ru: "/ru/politika-privatnosti",
};

/**
 * Server-rendered, so the banner is part of the first paint. It used to appear
 * only after the JS loaded, as the last change to the first screen, which
 * PageSpeed scored as a slow Speed Index. A visitor who already chose is
 * covered by CONSENT_HEAD_SCRIPT, which hides it before anything paints.
 */
export default function CustomCookieConsent({ lang }: Props) {
  const t = dictionary[lang] || dictionary.en;

  return (
    <div className={styles.cookieBanner}>
      <h3>{t.title}</h3>
      <p>{t.description}</p>

      <CookieConsentButtons acceptLabel={t.acceptAll} rejectLabel={t.rejectAll} />

      <p className={styles.policyLink}>
        <a href={policyPath[lang] ?? policyPath.en} target="_blank">
          {t.privacy}
        </a>
      </p>
    </div>
  );
}
