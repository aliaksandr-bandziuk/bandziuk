"use client";

import React, { FC, useId, useState } from "react";
import Link from "next/link";
import styles from "./QuoteFormBlock.module.scss";
// Same field styles as every other form on the site (floating label inside
// the field, leading icon, custom checkbox, submit button), so the short form
// does not look like a different product.
import f from "../FormMinimalBlockComponent/FormMinimalBlockComponent.module.scss";
import { trackEvent } from "@/utils/analytics";
import { useFormGuard } from "@/app/components/forms/FormGuard/useFormGuard";
import { WHATSAPP_URL } from "@/app/components/ui/WhatsAppButton/WhatsAppButton";
import Icon from "@/app/components/ui/Icon/Icon";

type Texts = {
  inputName?: string;
  inputEmail?: string;
  buttonText?: string;
  validationNameRequired?: string;
  validationEmailRequired?: string;
  validationEmailInvalid?: string;
  validationAgreementOneOf?: string;
};

export type QuoteFormProps = {
  lang: string;
  texts: Texts;
  contextLabel?: string;
  contextPlaceholder?: string;
  buttonText?: string;
  note?: string;
  /** A/B test arm, sent to analytics and into the mail. */
  variant?: "short" | "quiz";
  /** Quiz answers, prepended to the message ("Question: answer"). */
  extraLines?: string[];
  /** Quiz step 2: a button back to the questions. */
  onBack?: () => void;
  backLabel?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const SENT: Record<string, string> = {
  en: "Thank you. I have your request and will reply within one business day.",
  pl: "Dziękuję. Mam Twoje zapytanie i odpowiem w ciągu jednego dnia roboczego.",
  ru: "Спасибо. Заявка у меня, отвечу в течение одного рабочего дня.",
};
const FAILED: Record<string, string> = {
  en: "The request did not go through. Please try again or write on WhatsApp.",
  pl: "Nie udało się wysłać. Spróbuj ponownie albo napisz na WhatsApp.",
  ru: "Заявка не отправилась. Попробуйте ещё раз или напишите в WhatsApp.",
};
const AGREE: Record<string, [string, string, string]> = {
  en: ["I agree with the terms of the ", "Privacy Policy", "/privacy-policy"],
  pl: ["Zgadzam się z ", "Polityką prywatności", "/pl/polityka-prywatnosci"],
  ru: ["Я согласен с ", "Политикой конфиденциальности", "/ru/politika-konfidencialnosti"],
};

const IconName = () => (
  <svg className={f.icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--accent)" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
  </svg>
);
const IconEmail = () => (
  <svg className={f.icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--accent)" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 13.5l-11-7.5v15h22v-15l-11 7.5zm0-2.5l11-7h-22l11 7z" />
  </svg>
);
const IconBusiness = () => (
  <svg className={f.icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="var(--accent)" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 9l1.5-5h15L21 9M3 9h18M3 9v11h18V9M9 20v-6h6v6" />
  </svg>
);

const trackWhatsApp = () =>
  trackEvent("whatsapp_click", { placement: "quote_form", page_path: window.location.pathname });

// The note under the button ("Or write on WhatsApp — same reply time") comes
// from Sanity; the word WhatsApp in it becomes the link. A note that does not
// name WhatsApp gets the link after it.
function renderNote(note: string) {
  const link = (key: string, text: string) => (
    <a key={key} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.whatsapp} onClick={trackWhatsApp}>
      <Icon name="whatsapp" size={15} />
      {text}
    </a>
  );
  const parts = note.split(/(WhatsApp)/);
  if (parts.length === 1) return [note, " ", link("wa", "WhatsApp")];
  return parts.map((part, i) => (part === "WhatsApp" ? link(`wa${i}`, part) : part));
}

// Plain React state instead of Formik: three fields and a checkbox do not
// need the form libraries. Posts to /api/email (name + valid email required
// there); the third field travels as the message, prefixed with its label, and
// `formName` puts the source into the mail so a landing-page lead is
// recognisable at a glance.
const QuoteForm: FC<QuoteFormProps> = ({
  lang,
  texts,
  contextLabel,
  contextPlaceholder,
  buttonText,
  note,
  variant = "short",
  extraLines = [],
  onBack,
  backLabel,
}) => {
  const uid = useId();
  const { honeypot, guardFields } = useFormGuard();
  const [values, setValues] = useState({ name: "", email: "", context: "", agreed: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const agree = AGREE[lang] ?? AGREE.en;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!values.name.trim()) e.name = texts.validationNameRequired || "Required";
    if (!values.email.trim()) e.email = texts.validationEmailRequired || "Required";
    else if (!EMAIL_RE.test(values.email.trim())) e.email = texts.validationEmailInvalid || "Invalid email";
    if (!values.agreed) e.agreed = texts.validationAgreementOneOf || "Required";
    return e;
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setState("sending");
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: [
            ...extraLines,
            values.context.trim() ? `${contextLabel || "Business"}: ${values.context.trim()}` : "",
          ]
            .filter(Boolean)
            .join("\n"),
          formName: variant === "quiz" ? "Landing page quiz form" : "Landing page quote form",
          agreedToPolicy: values.agreed,
          currentPage: window.location.href,
          ...guardFields(),
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      trackEvent("form_submission_success", {
        placement: "quote_form_block",
        form_variant: variant,
        page_path: window.location.pathname,
      });
      setValues({ name: "", email: "", context: "", agreed: false });
      setState("sent");
    } catch {
      setState("failed");
    }
  };

  const set = (field: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [field]: field === "agreed" ? e.target.checked : e.target.value }));

  if (state === "sent") {
    return (
      <p className={styles.sent} role="status">
        {SENT[lang] ?? SENT.en}
      </p>
    );
  }

  const field = (
    name: "name" | "email" | "context",
    label: string,
    icon: React.ReactNode,
    type: string,
    extra: Record<string, string> = {},
  ) => (
    <div className={f.inputWrapper}>
      {icon}
      <label htmlFor={`${uid}-${name}`} className={`${f.label} ${values[name] ? f.filled : ""}`}>
        {label}
      </label>
      <input
        id={`${uid}-${name}`}
        name={name}
        type={type}
        value={values[name]}
        onChange={set(name)}
        className={f.inputField}
        aria-invalid={!!errors[name]}
        {...extra}
      />
      {errors[name] && <div className={f.error}>{errors[name]}</div>}
    </div>
  );

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      {honeypot}
      {field("name", texts.inputName || "Name", <IconName />, "text", { autoComplete: "name" })}
      {field("email", texts.inputEmail || "Email", <IconEmail />, "email", { autoComplete: "email", inputMode: "email" })}
      {contextLabel && field("context", contextLabel, <IconBusiness />, "text", contextPlaceholder ? { title: contextPlaceholder } : {})}
      <div className={`${f.customCheckbox} ${styles.checkbox}`}>
        <input id={`${uid}-agree`} type="checkbox" checked={values.agreed} onChange={set("agreed")} />
        <label htmlFor={`${uid}-agree`}>
          {agree[0]}
          <Link className={f.policyLink} href={agree[2]} target="_blank">
            {agree[1]}
          </Link>
        </label>
        {errors.agreed && <div className={styles.checkboxError}>{errors.agreed}</div>}
      </div>
      {onBack && (
        <button type="button" className={styles.back} onClick={onBack}>
          ← {backLabel || "Back"}
        </button>
      )}
      <button type="submit" className={`${f.sentBtn} ${styles.submit}`} disabled={state === "sending"}>
        {state === "sending" ? <div className={f.loader}></div> : buttonText || texts.buttonText || "Send"}
      </button>
      {state === "failed" && (
        <p className={styles.failed} role="alert">
          {FAILED[lang] ?? FAILED.en}
        </p>
      )}
      {note && <p className={styles.note}>{renderNote(note)}</p>}
    </form>
  );
};

export default QuoteForm;
