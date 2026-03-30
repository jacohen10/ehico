import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Government Services",
  description: `EHI Co is a GSA Schedule contract holder (${COMPANY.gsaContract}). Professional AV equipment and installation services for federal, state, and local government agencies.`,
};

export default function GovernmentPage() {
  return (
    <>
      <Hero
        heading="Government AV Solutions"
        subheading={`EHI Co holds GSA Contract ${COMPANY.gsaContract} under SIN ${COMPANY.sin}. We provide TAA compliant AV products and professional installation services to government agencies nationwide.`}
      >
        <Button variant="accent" size="lg" href="/government/gsa-contract">
          View Contract Details
        </Button>
        <Button variant="outline-white" size="lg" href="/government/capabilities">
          Our Capabilities
        </Button>
      </Hero>

      <Section>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-8">
            <h2 className="text-xl font-bold text-primary-900">
              GSA Contract
            </h2>
            <p className="mt-4 text-muted-foreground">
              Access detailed information about our GSA Schedule contract, SIN
              categories, ordering procedures, and TAA compliant product
              offerings.
            </p>
            <div className="mt-6">
              <Button href="/government/gsa-contract" variant="outline">
                Contract Details
              </Button>
            </div>
          </div>
          <div className="rounded-xl border border-border p-8">
            <h2 className="text-xl font-bold text-primary-900">
              Capabilities
            </h2>
            <p className="mt-4 text-muted-foreground">
              Learn about our past performance, certifications, service
              categories, and the professional capabilities we bring to
              government projects.
            </p>
            <div className="mt-6">
              <Button href="/government/capabilities" variant="outline">
                View Capabilities
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
