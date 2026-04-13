import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/ui/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { manufacturers } from "@/lib/data/manufacturers";

export const metadata: Metadata = {
  title: "Manufacturers",
  description:
    "EHI partners with leading AV manufacturers including LG, Samsung, Peerless-AV, Da-Lite, and more. Quality products for residential and commercial installations.",
};

export default function ManufacturersPage() {
  return (
    <>
      <Hero
        heading="Our Manufacturer Partners"
        subheading="We work with industry-leading brands to deliver the best AV products for your project."
        variant="light"
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {manufacturers.map((m) => (
            <div
              key={m.slug}
              className="flex flex-col rounded-xl border border-border p-6"
            >
              <div className="flex h-16 items-center">
                <h2 className="text-xl font-bold text-primary-900">
                  {m.name}
                </h2>
              </div>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {m.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {m.categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                  >
                    {cat.replace("-", " ")}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        heading="Need a Specific Product?"
        subheading="Contact us to discuss product availability, pricing, and installation options."
        buttonText="Contact Us"
      />
    </>
  );
}
