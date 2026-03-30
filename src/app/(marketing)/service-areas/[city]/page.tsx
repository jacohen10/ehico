import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Hero } from "@/components/marketing/hero";
import { ServiceCard } from "@/components/marketing/service-card";
import { CTABanner } from "@/components/marketing/cta-banner";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { buildLocalBusinessSchema } from "@/lib/utils/json-ld";
import { serviceAreas, getServiceAreaBySlug } from "@/lib/data/service-areas";
import { services } from "@/lib/data/services";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ city: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  return params.then(({ city }) => {
    const area = getServiceAreaBySlug(city);
    if (!area) return {};
    return {
      title: `AV Installation in ${area.city}, ${area.state}`,
      description: area.description,
    };
  });
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const area = getServiceAreaBySlug(city);
  if (!area) notFound();

  const nearbyAreas = area.nearbyAreas
    .map((slug) => getServiceAreaBySlug(slug))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={buildLocalBusinessSchema({
          areaServed: {
            "@type": "City",
            name: area.city,
          },
        })}
      />

      <Hero heading={area.heroHeading}>
        <Button variant="accent" size="lg" href="/contact">
          Get a Free Quote
        </Button>
        <Button variant="outline-white" size="lg" href="tel:+17576400243">
          Call (757) 640-0243
        </Button>
      </Hero>

      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-8 text-muted-foreground">
            {area.localDetails}
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-primary-900">
              Why {area.city}?
            </h2>
            <ul className="mt-4 space-y-3">
              {area.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-muted-foreground">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Available services */}
      <Section variant="muted">
        <h2 className="text-2xl font-bold text-primary-900 sm:text-3xl">
          Services Available in {area.city}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Nearby areas */}
      {nearbyAreas.length > 0 && (
        <Section>
          <h2 className="text-2xl font-bold text-primary-900">
            Nearby Service Areas
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {nearbyAreas.map(
              (nearby) =>
                nearby && (
                  <Link
                    key={nearby.slug}
                    href={`/service-areas/${nearby.slug}`}
                    className="rounded-full border border-border px-5 py-2 text-sm font-medium text-primary-700 transition-colors hover:border-primary-300 hover:bg-primary-50"
                  >
                    {nearby.city}, {nearby.state}
                  </Link>
                ),
            )}
          </div>
        </Section>
      )}

      <CTABanner
        heading={`Need AV Services in ${area.city}?`}
        subheading="Get a free quote for professional installation in your area."
      />
    </>
  );
}
