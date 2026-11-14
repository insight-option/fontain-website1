"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import type { Locale } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

type Status = "idle" | "sending" | "success" | "error";

type Props = {
  locale: Locale;
  form: Dictionary["contact"]["form"];
  serviceOptions: { value: string; label: string }[];
};

export default function ContactForm({ locale, form, serviceOptions }: Props) {
  const f = form;
  const params = useSearchParams();
  const preselected = params.get("service") ?? "";
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="card flex flex-col items-center gap-4 p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-teal to-cyan text-white">
          <CheckCircle2 size={32} aria-hidden="true" />
        </span>
        <p className="max-w-md text-pretty text-lg font-semibold text-ink">{f.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            {f.name} <span className="text-pink">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" maxLength={100} className="input" />
        </div>
        <div>
          <label htmlFor="company" className="label">
            {f.company}
          </label>
          <input id="company" name="company" autoComplete="organization" maxLength={120} className="input" />
        </div>
        <div>
          <label htmlFor="email" className="label">
            {f.email} <span className="text-pink">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" maxLength={160} className="input" dir="ltr" />
        </div>
        <div>
          <label htmlFor="phone" className="label">
            {f.phone}
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} className="input" dir="ltr" placeholder="+974" />
        </div>
        <div>
          <label htmlFor="service" className="label">
            {f.service}
          </label>
          <select id="service" name="service" defaultValue={preselected} className="input">
            <option value="">{f.servicePlaceholder}</option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="label">
            {f.budget}
          </label>
          <select id="budget" name="budget" defaultValue="" className="input">
            <option value="">—</option>
            {f.budgetOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="label">
            {f.message} <span className="text-pink">*</span>
          </label>
          <textarea id="message" name="message" required rows={5} maxLength={4000} placeholder={f.messagePlaceholder} className="input resize-y" />
        </div>
        {/* Honeypot — hidden from humans, filled by bots */}
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 flex items-start gap-2 rounded-xl border border-pink/30 bg-pink/5 px-4 py-3 text-sm text-ink-2">
          <TriangleAlert size={18} className="mt-0.5 shrink-0 text-pink" aria-hidden="true" />
          {f.error}
        </p>
      )}

      <div className="mt-6 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-muted">{f.privacy}</p>
        <button type="submit" disabled={status === "sending"} className="btn-primary px-7 py-3.5 disabled:opacity-70">
          {status === "sending" ? <Loader2 size={18} className="animate-spin" aria-hidden="true" /> : <Send size={18} className="rtl:-scale-x-100" aria-hidden="true" />}
          {status === "sending" ? f.sending : f.submit}
        </button>
      </div>
    </form>
  );
}
