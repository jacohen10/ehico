"use client";

import { useState } from "react";
import { services } from "@/lib/data/services";

const API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL || "https://api.slouchalert.com";

const inputClasses =
  "mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20";

export function ContactForm() {
  const [pageLoadTime] = useState(() => Date.now());
  const [honeypot, setHoneypot] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<string[]>([]);

  function updateField(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrors([]);

    const timeOnPage = Math.floor((Date.now() - pageLoadTime) / 1000);
    const message = form.service
      ? `[Service: ${form.service}]\n\n${form.message}`
      : form.message;

    try {
      const res = await fetch(`${API_URL}/api/contact_submissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact_submission: {
            name: form.name,
            email: form.email,
            phone: form.phone,
            message,
            time_on_page: timeOnPage,
            website: honeypot,
          },
        }),
      });

      if (res.ok) {
        setStatus("sent");
      } else if (res.status === 422) {
        const data = await res.json();
        setErrors(data.errors);
        setStatus("error");
      } else if (res.status === 429) {
        setErrors(["Too many requests. Please try again later."]);
        setStatus("error");
      } else {
        setErrors([
          "Something went wrong. Please call us at (757) 640-0243.",
        ]);
        setStatus("error");
      }
    } catch {
      setErrors([
        "Network error. Please call us at (757) 640-0243.",
      ]);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <svg
          className="mx-auto h-10 w-10 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-4 text-lg font-semibold text-green-900">
          Message Sent
        </h3>
        <p className="mt-2 text-green-700">
          Thank you! We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.length > 0 && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <ul className="list-inside list-disc space-y-1">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-primary-900"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          required
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          className={inputClasses}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-primary-900"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-primary-900"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-primary-900"
        >
          Service Interested In
        </label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => updateField("service", e.target.value)}
          className={inputClasses}
        >
          <option value="">Select a service (optional)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.shortTitle}>
              {s.shortTitle}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary-900"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={inputClasses}
        />
      </div>

      {/* Honeypot - hidden from humans */}
      <div
        style={{ position: "absolute", left: "-9999px" }}
        aria-hidden="true"
      >
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {status === "sending" ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
