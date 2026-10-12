"use client";

import { useRef, useState } from "react";
import { LLMS_COPY, type LlmsLang } from "./copy";
import { buildLlmsTxt, groupUrls, siteNameFromHost } from "@/lib/llmsTxt/generate";
import styles from "./LlmsTxtGenerator.module.scss";

type Props = { lang: LlmsLang };

type ErrorKey = keyof (typeof LLMS_COPY)["en"]["errors"];

export default function LlmsTxtGenerator({ lang }: Props) {
  const t = LLMS_COPY[lang] ?? LLMS_COPY.en;

  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [manualOpen, setManualOpen] = useState(false);
  const [manual, setManual] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ text: string; count: number; host: string; truncated: boolean } | null>(null);
  const [copied, setCopied] = useState(false);
  const outputRef = useRef<HTMLTextAreaElement>(null);

  const message = (key: string) => t.errors[key as ErrorKey] ?? t.errors.network;

  const render = (urls: string[], host: string, truncated: boolean) => {
    const sections = groupUrls(urls, { rootSection: lang === "pl" ? "Główne strony" : lang === "ru" ? "Основные страницы" : "Main pages" });
    const text = buildLlmsTxt({
      siteName: name.trim() || siteNameFromHost(host),
      summary: summary.trim() || undefined,
      sections,
    });
    setResult({ text, count: urls.length, host, truncated });
    setCopied(false);
  };

  const fromSitemap = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || busy) return;
    setBusy(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/llms-txt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(message(String(data?.error ?? "network")));
        return;
      }
      render(data.urls ?? [], data.host ?? "", Boolean(data.truncated));
    } catch {
      setError(t.errors.network);
    } finally {
      setBusy(false);
    }
  };

  const fromList = (e: React.FormEvent) => {
    e.preventDefault();
    const urls = manual
      .split(/\s*\n\s*/)
      .map((l) => l.trim())
      .filter((l) => /^https?:\/\//i.test(l));
    if (!urls.length) {
      setError(t.errors["bad-url"]);
      return;
    }
    let host = "";
    try {
      host = new URL(urls[0]).hostname;
    } catch {
      /* the regex above already guarantees a parseable URL, but stay quiet */
    }
    setError(null);
    render(urls, host, false);
  };

  const copy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; selecting the text is the fallback.
      outputRef.current?.select();
    }
  };

  const download = () => {
    if (!result) return;
    const blob = new Blob([result.text], { type: "text/plain;charset=utf-8" });
    const href = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = href;
    a.download = "llms.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(href);
  };

  return (
    <div className={styles.tool}>
      <form className={styles.form} onSubmit={fromSitemap}>
        <label className={styles.field}>
          <span className={styles.label}>{t.form.urlLabel}</span>
          <input
            className={styles.input}
            type="text"
            inputMode="url"
            autoComplete="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={t.form.urlPlaceholder}
            maxLength={300}
          />
        </label>

        <div className={styles.row}>
          <label className={styles.field}>
            <span className={styles.label}>{t.form.nameLabel}</span>
            <input
              className={styles.input}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.form.namePlaceholder}
              maxLength={120}
            />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>{t.form.summaryLabel}</span>
            <input
              className={styles.input}
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder={t.form.summaryPlaceholder}
              maxLength={300}
            />
          </label>
        </div>

        <button className={styles.submit} type="submit" disabled={busy || !url.trim()}>
          {busy ? t.form.submitting : t.form.submit}
        </button>
      </form>

      <button type="button" className={styles.toggle} onClick={() => setManualOpen((v) => !v)}>
        {t.form.manualToggle}
      </button>

      {manualOpen && (
        <form className={styles.form} onSubmit={fromList}>
          <label className={styles.field}>
            <span className={styles.label}>{t.form.manualLabel}</span>
            <textarea
              className={styles.textarea}
              rows={6}
              value={manual}
              onChange={(e) => setManual(e.target.value)}
              placeholder={"https://example.com/\nhttps://example.com/about"}
            />
          </label>
          <button className={styles.submit} type="submit">
            {t.form.manualSubmit}
          </button>
        </form>
      )}

      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}

      {result && (
        <div className={styles.result}>
          <div className={styles.resultHead}>
            <h2 className={styles.resultTitle}>{t.result.title}</h2>
            <span className={styles.count}>{t.result.found(result.count, result.host)}</span>
          </div>
          {result.truncated && <p className={styles.hint}>{t.result.truncated}</p>}
          <textarea
            ref={outputRef}
            className={styles.output}
            value={result.text}
            onChange={(e) => setResult({ ...result, text: e.target.value })}
            rows={18}
            spellCheck={false}
          />
          <div className={styles.actions}>
            <button type="button" className={styles.submit} onClick={download}>
              {t.result.download}
            </button>
            <button type="button" className={styles.secondary} onClick={copy}>
              {copied ? t.result.copied : t.result.copy}
            </button>
          </div>
          <p className={styles.hint}>{t.result.note}</p>
        </div>
      )}
    </div>
  );
}
