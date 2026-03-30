import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/ui/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { COMPANY } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "EHI Co capabilities statement — past performance, certifications, and professional AV service categories for government and commercial projects.",
};

const capabilities = [
  {
    title: "Audio Visual Equipment Supply",
    description:
      "Commercial displays, projectors, digital signage, mounting systems, and audio equipment from leading manufacturers. All products available under GSA pricing.",
  },
  {
    title: "Professional Installation",
    description:
      "On-site installation of displays, AV systems, LED fixtures, and security cameras by experienced technicians. Nationwide service capability.",
  },
  {
    title: "System Integration",
    description:
      "Design and integration of complete AV environments including conference rooms, training facilities, and public-facing digital signage networks.",
  },
  {
    title: "LED Lighting Solutions",
    description:
      "Energy-efficient LED fixture supply and installation, including retrofit solutions for existing fluorescent systems. TAA compliant products available.",
  },
  {
    title: "Security & Surveillance",
    description:
      "IP camera systems, NVR recording solutions, and professional surveillance system design and installation for facilities of all sizes.",
  },
  {
    title: "Ongoing Support",
    description:
      "Maintenance, repair, and technical support for installed systems. Extended warranty options and service level agreements available.",
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <Hero
        heading="Our Capabilities"
        subheading="Nearly 50 years of experience delivering professional AV solutions for government and commercial clients."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary-900 sm:text-3xl">
            Company Overview
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Founded in {COMPANY.founded}, {COMPANY.legalName} has provided audio
            visual products and professional installation services across the
            United States and internationally. Headquartered in{" "}
            {COMPANY.address.city}, {COMPANY.address.state}, we hold GSA
            Contract {COMPANY.gsaContract} and maintain a proven track record of
            delivering quality solutions to government agencies at every level.
          </p>
        </div>
      </Section>

      <Section variant="muted">
        <h2 className="text-2xl font-bold text-primary-900 sm:text-3xl">
          Service Categories
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-xl border border-border bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-primary-900">
                {cap.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary-900 sm:text-3xl">
            Certifications & Compliance
          </h2>
          <ul className="mt-8 space-y-4">
            {[
              "GSA Schedule Contract Holder",
              "TAA (Trade Agreements Act) Compliant Products",
              "Licensed and Insured",
              "SAM.gov Registered",
            ].map((cert) => (
              <li key={cert} className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-accent-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <span className="text-primary-800">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTABanner
        heading="Work With Us"
        subheading="Contact our team to discuss your project requirements and how EHI Co can support your mission."
        buttonText="Contact Us"
      />
    </>
  );
}
