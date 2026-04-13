import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/ui/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { serviceAreas } from "@/lib/data/service-areas";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "EHI provides professional AV installation services across Hampton Roads including Norfolk, Virginia Beach, Chesapeake, Newport News, Hampton, Suffolk, Portsmouth, and Williamsburg.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <Hero
        heading="Our Service Areas"
        subheading="Based in Norfolk, we serve the entire Hampton Roads region with professional AV installation and products."
        variant="light"
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="group rounded-xl border border-border p-6 transition-all hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/50"
            >
              <h2 className="text-xl font-bold text-primary-900 group-hover:text-primary-700">
                {area.city}, {area.state}
              </h2>
              <ul className="mt-4 space-y-2">
                {area.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {h}
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-500">
                View services
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
