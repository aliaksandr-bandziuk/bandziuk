"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import styles from "./AiVisibilityChecker.module.scss";
import { CHECKER_COPY } from "./copy";
import type { AiCheckAnswer, AiCheckLang, AiCheckQuestionKind, AiCheckReport } from "@/lib/aiCheck/types";

type Props = {
  lang: AiCheckLang;
  /** False until the owner switches the tool on; the form is then read-only. */
  available: boolean;
};

type ErrorCode = keyof (typeof CHECKER_COPY)["en"]["errors"];

const KIND_ORDER: AiCheckQuestionKind[] = ["recommendation", "knowledge", "reputation"];
const ENGINE_LABEL = { chatgpt: "ChatGPT", perplexity: "Perplexity" } as const;

const AiVisibilityChecker: React.FC<Props> = ({ lang, available }) => {
  const t = CHECKER_COPY[lang];
  const [state, setState] = useState<"idle" | "running" | "done">("idle");
  const [error, setError] = useState<ErrorCode | null>(null);
  const [report, setReport] = useState<AiCheckReport | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!available || state === "running") return;

    const form = new FormData(event.currentTarget);
    setError(null);
    setState("running");

    try {
      const res = await fetch("/api/ai-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: form.get("company"),
          website: form.get("website"),
          service: form.get("service"),
          location: form.get("location"),
          email: form.get("email"),
          consent: form.get("consent") === "on",
          fax: form.get("fax"),
          lang,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.report) {
        const code = (json.error as ErrorCode) in t.errors ? (json.error as ErrorCode) : "network";
        setError(code);
        setState("idle");
        return;
      }
      setReport(json.report);
      setState("done");
      requestAnimationFrame(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
    } catch {
      setError("network");
      setState("idle");
    }
  }

  function reset() {
    setReport(null);
    setState("idle");
    setError(null);
  }

  return (
    <div className={styles.checker}>
      {state !== "done" && (
        <form className={styles.form} onSubmit={onSubmit} noValidate={false} aria-busy={state === "running"}>
          <div className={styles.grid}>
            <label className={styles.field}>
              <span className={styles.label}>{t.form.company}</span>
              <input className={styles.input} name="company" required minLength={2} maxLength={80} autoComplete="organization" disabled={!available} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>{t.form.website}</span>
              <input className={styles.input} name="website" required maxLength={200} inputMode="url" placeholder="example.com" autoComplete="url" disabled={!available} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>{t.form.service}</span>
              <input className={styles.input} name="service" required minLength={2} maxLength={80} placeholder={t.form.servicePlaceholder} disabled={!available} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>{t.form.location}</span>
              <input className={styles.input} name="location" maxLength={80} placeholder={t.form.locationPlaceholder} disabled={!available} />
            </label>
            <label className={`${styles.field} ${styles.fieldWide}`}>
              <span className={styles.label}>{t.form.email}</span>
              <input className={styles.input} name="email" type="email" required maxLength={120} autoComplete="email" disabled={!available} />
            </label>
          </div>

          {/* Honeypot: off-screen and out of the tab order, so only bots fill it. */}
          <div className={styles.honeypot} aria-hidden="true">
            <label>
              Fax
              <input name="fax" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <label className={styles.consent}>
            <input type="checkbox" name="consent" required disabled={!available} />
            <span>
              {t.form.consentBefore}
              <Link href={t.links.privacy} target="_blank" className={styles.inlineLink}>
                {t.form.consentLink}
              </Link>
              {t.form.consentAfter}
            </span>
          </label>

          <button type="submit" className={styles.submit} disabled={!available || state === "running"}>
            {state === "running" ? <span className={styles.spinner} aria-hidden="true" /> : null}
            {t.form.submit}
          </button>

          <p className={styles.status} role="status" aria-live="polite">
            {!available ? t.form.unavailable : state === "running" ? t.form.running : ""}
          </p>
          {error && (
            <p className={styles.error} role="alert">
              {t.errors[error]}
            </p>
          )}
        </form>
      )}

      {state === "done" && report && (
        <div ref={resultRef} className={styles.report}>
          <h2 className={styles.reportTitle}>{t.report.heading(report.company)}</h2>

          <div className={styles.stats}>
            <Stat label={t.report.statRecommended} value={t.report.of(report.summary.recommended, report.summary.recommendationAsked)} accent={report.summary.recommended > 0} />
            <Stat label={t.report.statRecognised} value={t.report.of(report.summary.recognised, report.summary.aboutAsked)} accent={report.summary.recognised > 0} />
            <Stat label={t.report.statCited} value={t.report.of(report.summary.siteCited, report.summary.answered)} accent={report.summary.siteCited > 0} />
          </div>

          <p className={styles.verdict}>
            {report.summary.recommended === 0
              ? t.report.verdictNone
              : t.report.verdictSome(report.summary.recommended, report.summary.recommendationAsked)}
          </p>

          {KIND_ORDER.map((kind) => {
            const group = report.answers.filter((a) => a.kind === kind);
            if (group.length === 0) return null;
            return (
              <section key={kind} className={styles.group}>
                <h3 className={styles.groupTitle}>{t.report.kinds[kind]}</h3>
                <p className={styles.prompt}>
                  <span className={styles.promptLabel}>{t.report.question}: </span>
                  {group[0].prompt}
                </p>
                <div className={styles.answers}>
                  {group.map((answer) => (
                    <AnswerCard key={answer.engine} answer={answer} lang={lang} />
                  ))}
                </div>
              </section>
            );
          })}

          <div className={styles.cta}>
            <p className={styles.ctaText}>{t.report.ctaText}</p>
            <div className={styles.ctaButtons}>
              <Link href={t.links.audit} className={styles.submit}>
                {t.report.ctaPrimary}
              </Link>
              <Link href={t.links.fix} className={styles.secondary}>
                {t.report.ctaSecondary}
              </Link>
            </div>
            <button type="button" className={styles.again} onClick={reset}>
              {t.report.again}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Stat: React.FC<{ label: string; value: string; accent: boolean }> = ({ label, value, accent }) => (
  <div className={styles.stat}>
    <span className={`${styles.statValue} ${accent ? styles.statValueAccent : ""}`}>{value}</span>
    <span className={styles.statLabel}>{label}</span>
  </div>
);

const AnswerCard: React.FC<{ answer: AiCheckAnswer; lang: AiCheckLang }> = ({ answer, lang }) => {
  const t = CHECKER_COPY[lang].report;
  const showNamed = answer.kind === "recommendation";

  return (
    <article className={styles.answer}>
      <header className={styles.answerHead}>
        <span className={styles.engine}>{ENGINE_LABEL[answer.engine]}</span>
        <span className={styles.badges}>
          {answer.error ? (
            <span className={`${styles.badge} ${styles.badgeMuted}`}>{t.failed}</span>
          ) : (
            <>
              {showNamed && (
                <span className={`${styles.badge} ${answer.named ? styles.badgeGood : styles.badgeBad}`}>
                  {answer.named ? t.named : t.notNamed}
                </span>
              )}
              {answer.noInformation && <span className={`${styles.badge} ${styles.badgeBad}`}>{t.noInfo}</span>}
              {answer.siteCited && <span className={`${styles.badge} ${styles.badgeGood}`}>{t.siteCited}</span>}
            </>
          )}
        </span>
      </header>
      {answer.excerpt && <p className={styles.excerpt}>{answer.excerpt}</p>}
      {answer.sources.length > 0 && (
        <p className={styles.sources}>
          <span className={styles.promptLabel}>{t.sources}: </span>
          {answer.sources.join(", ")}
        </p>
      )}
    </article>
  );
};

export default AiVisibilityChecker;
