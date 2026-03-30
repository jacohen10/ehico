import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/marketing/hero";
import { ServiceCard } from "@/components/marketing/service-card";
import { CTABanner } from "@/components/marketing/cta-banner";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { buildServiceSchema } from "@/lib/utils/json-ld";
import { services, getServiceBySlug } from "@/lib/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = getServiceBySlug(slug);
    if (!service) return {};
    return {
      title: service.title,
      description: service.description,
    };
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = service.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter(Boolean);

  return (
    <>
      <JsonLd data={buildServiceSchema(service)} />

      <Hero heading={service.heroHeading} subheading={service.heroSubheading}>
        <Button variant="accent" size="lg" href="/contact">
          Get a Free Quote
        </Button>
        <Button variant="outline-white" size="lg" href="tel:+17576400243">
          Call (757) 640-0243
        </Button>
      </Hero>

      {/* Content sections */}
      {service.sections.map((section, i) => (
        <Section key={section.heading} variant={i % 2 === 0 ? "white" : "muted"}>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-primary-900 sm:text-3xl">
              {section.heading}
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {section.body}
            </p>
          </div>
        </Section>
      ))}

      {/* Features */}
      <Section variant="primary-light">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary-900 sm:text-3xl">
            What We Offer
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-accent-500"
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
                <span className="text-primary-800">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <Section>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-primary-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 divide-y divide-border">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <h3 className="text-lg font-semibold text-primary-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <Section variant="muted">
          <h2 className="text-2xl font-bold text-primary-900 sm:text-3xl">
            Related Services
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map(
              (related) =>
                related && (
                  <ServiceCard
                    key={related.slug}
                    title={related.shortTitle}
                    description={related.description}
                    href={`/services/${related.slug}`}
                    icon={related.icon}
                  />
                ),
            )}
          </div>
        </Section>
      )}

      <CTABanner />
    </>
  );
}
