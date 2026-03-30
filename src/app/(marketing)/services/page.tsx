import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { ServiceCard } from "@/components/marketing/service-card";
import { CTABanner } from "@/components/marketing/cta-banner";
import { Section } from "@/components/ui/section";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional AV installation services including TV mounting, commercial AV, LED fixtures, motorized shades, and security cameras in Hampton Roads, VA.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        heading="Our Services"
        subheading="Professional installation and AV products for homes, businesses, healthcare facilities, and government agencies across Hampton Roads."
        variant="light"
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.shortTitle}
              description={service.description}
              href={`/services/${service.slug}`}
              icon={service.icon}
            />
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
