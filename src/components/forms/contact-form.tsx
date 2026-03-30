"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/lib/actions/contact";
import { services } from "@/lib/data/services";
import { SubmitButton } from "./submit-button";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <svg className="mx-auto h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-4 text-lg font-semibold text-green-900">
          Message Sent
        </h3>
        <p className="mt-2 text-green-700">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.message && !state.success && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {state.message}
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
          name="name"
          required
          className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
        />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>
        )}
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
            name="email"
            required
            className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
          {state.errors?.email && (
            <p className="mt-1 text-sm text-red-600">
              {state.errors.email[0]}
            </p>
          )}
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
            name="phone"
            className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
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
          name="service"
          className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
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
          name="message"
          rows={5}
          required
          className="mt-1 block w-full rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-600">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}
