import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/forms/contact-form";
import { COMPANY } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact EHI for a free quote on AV installation, LED fixtures, security cameras, and more. Serving Hampton Roads, VA since 1977.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        heading="Contact Us"
        subheading="Request a free quote or ask us any question. We typically respond within one business day."
        variant="light"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-primary-900">
              Send Us a Message
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-muted p-8">
              <h2 className="text-xl font-bold text-primary-900">
                Contact Information
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Address
                  </h3>
                  <p className="mt-2 text-primary-800">
                    {COMPANY.address.street}
                    <br />
                    {COMPANY.address.city}, {COMPANY.address.state}{" "}
                    {COMPANY.address.zip}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Phone
                  </h3>
                  <a
                    href={COMPANY.phoneHref}
                    className="mt-2 block text-lg font-semibold text-primary-700 hover:text-primary-500"
                  >
                    {COMPANY.phone}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </h3>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="mt-2 block text-primary-700 hover:text-primary-500"
                  >
                    {COMPANY.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Business Hours
                  </h3>
                  <div className="mt-2 space-y-1 text-sm text-primary-800">
                    <p>{COMPANY.hours.weekday}</p>
                    <p>{COMPANY.hours.friday}</p>
                    <p>{COMPANY.hours.weekend}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
