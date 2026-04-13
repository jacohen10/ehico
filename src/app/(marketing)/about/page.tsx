import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/ui/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { COMPANY } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about EHI — a Norfolk, VA-based AV installation company founded in ${COMPANY.founded}. Nearly 50 years of experience serving Hampton Roads and government agencies nationwide.`,
};

export default function AboutPage() {
  return (
    <>
      <Hero
        heading="About EHI"
        subheading={`Professional audio visual solutions since ${COMPANY.founded}. Based in Norfolk, serving Hampton Roads and beyond.`}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary-900 sm:text-3xl">
            Our Story
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              Founded in {COMPANY.founded}, EHI has grown from a small
              Norfolk operation into a trusted AV partner for homeowners,
              businesses, healthcare facilities, and government agencies. For
              nearly 50 years, we&apos;ve been installing, integrating, and
              supporting audio visual systems across Hampton Roads and beyond.
            </p>
            <p>
              Based on Granby Street in Norfolk, Virginia, we&apos;ve built our
              reputation on reliability, quality workmanship, and genuine care
              for our customers. Our team has completed thousands of
              installations — from single TV mounts in family homes to
              multi-room commercial AV systems and government facility buildouts.
            </p>
            <p>
              As a GSA Schedule contract holder (Contract{" "}
              {COMPANY.gsaContract}), we extend our services to federal, state,
              and local government agencies. We supply TAA compliant products and
              provide professional installation services that meet the standards
              government buyers expect.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary-900 sm:text-3xl">
            Why Choose EHI
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Nearly 50 Years of Experience",
                description:
                  "Since 1977, we've been honing our craft. Our technicians have completed thousands of installations and bring that expertise to every project.",
              },
              {
                title: "GSA Contract Holder",
                description:
                  "Government agencies trust us with their AV needs. Our GSA Schedule contract provides streamlined procurement and competitive pricing.",
              },
              {
                title: "Local Knowledge",
                description:
                  "Based in Norfolk, we know Hampton Roads. We understand the local building codes, property types, and community needs.",
              },
              {
                title: "Full-Service Solutions",
                description:
                  "From product selection and system design to installation and ongoing support, we handle every step of your AV project.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-primary-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
