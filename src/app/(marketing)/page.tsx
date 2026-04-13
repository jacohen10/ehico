import { Hero } from "@/components/marketing/hero";
import { TrustSignals } from "@/components/marketing/trust-signals";
import { ServiceCard } from "@/components/marketing/service-card";
import { CTABanner } from "@/components/marketing/cta-banner";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { buildLocalBusinessSchema } from "@/lib/utils/json-ld";
import { services } from "@/lib/data/services";
import { serviceAreas } from "@/lib/data/service-areas";
import { COMPANY } from "@/lib/data/company";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />

      <Hero
        heading="Audio Visual Solutions for Hampton Roads"
        subheading={`From TV installations to commercial AV systems, EHI has been delivering professional audio visual services to homes and businesses since ${COMPANY.founded}. We're also a GSA contract holder, serving government agencies nationwide.`}
      >
        <Button variant="accent" size="lg" href="/contact">
          Get a Free Quote
        </Button>
        <Button variant="outline-white" size="lg" href="/services">
          Our Services
        </Button>
      </Hero>

      <TrustSignals />

      {/* Services */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Professional installation and products for homes, businesses, and
            government facilities.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* About snippet */}
      <Section variant="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
            Serving Hampton Roads Since 1977
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Founded nearly 50 years ago, EHI has grown from a small Norfolk
            operation into a trusted AV partner for homeowners, businesses, and
            government agencies. Our team combines decades of installation
            experience with the latest technology to deliver results you can
            count on.
          </p>
          <div className="mt-8">
            <Button variant="outline" href="/about">
              Learn About EHI
            </Button>
          </div>
        </div>
      </Section>

      {/* Service Areas */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
            Serving All of Hampton Roads
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Based in Norfolk, we provide services across the entire Hampton
            Roads region.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="rounded-full border border-border px-5 py-2 text-sm font-medium text-primary-700 transition-colors hover:border-primary-300 hover:bg-primary-50"
            >
              {area.city}, {area.state}
            </Link>
          ))}
        </div>
      </Section>

      {/* GSA Banner */}
      <Section variant="primary-light">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              Government Contractor
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
              GSA Schedule Contract Holder
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              EHI holds GSA Contract {COMPANY.gsaContract} under SIN{" "}
              {COMPANY.sin} ({COMPANY.sinDescription}). We provide TAA compliant
              products and professional installation services to federal, state,
              and local government agencies.
            </p>
            <div className="mt-6">
              <Button href="/government/gsa-contract">
                View Contract Details
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-primary-200 bg-white p-8">
            <p className="text-sm font-medium text-muted-foreground">
              GSA Contract
            </p>
            <p className="mt-1 text-2xl font-bold text-primary-900">
              {COMPANY.gsaContract}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              SIN {COMPANY.sin}
            </p>
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
