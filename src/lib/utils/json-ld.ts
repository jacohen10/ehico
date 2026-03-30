import type { LocalBusiness, Service, WithContext } from "schema-dts";
import { COMPANY } from "@/lib/data/company";

export function buildLocalBusinessSchema(
  overrides?: Record<string, unknown>,
): WithContext<LocalBusiness> {
  const base = {
    "@context": "https://schema.org" as const,
    "@type": "LocalBusiness" as const,
    name: COMPANY.name,
    description:
      "Professional AV installation, LED fixtures, and security cameras serving Hampton Roads since 1977.",
    url: COMPANY.url,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress" as const,
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: "US",
    },
    foundingDate: "1977",
    openingHoursSpecification: COMPANY.hoursStructured.map((h) => ({
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: h.days,
      opens: h.open,
      closes: h.close,
    })),
    areaServed: [
      { "@type": "City" as const, name: "Norfolk" },
      { "@type": "City" as const, name: "Virginia Beach" },
      { "@type": "City" as const, name: "Chesapeake" },
      { "@type": "City" as const, name: "Newport News" },
      { "@type": "City" as const, name: "Hampton" },
      { "@type": "City" as const, name: "Suffolk" },
      { "@type": "City" as const, name: "Portsmouth" },
      { "@type": "City" as const, name: "Williamsburg" },
    ],
  };

  if (overrides) {
    return { ...base, ...overrides } as WithContext<LocalBusiness>;
  }

  return base as WithContext<LocalBusiness>;
}

export function buildServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
}): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${COMPANY.url}/services/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
      url: COMPANY.url,
    },
    areaServed: {
      "@type": "State",
      name: "Virginia",
    },
  } as WithContext<Service>;
}
