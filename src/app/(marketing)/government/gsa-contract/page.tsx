import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/ui/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { COMPANY } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "GSA Contract",
  description: `EHI Co GSA Contract ${COMPANY.gsaContract}, SIN ${COMPANY.sin} — ${COMPANY.sinDescription}. TAA compliant AV products and installation for government agencies.`,
};

export default function GSAContractPage() {
  return (
    <>
      <Hero
        heading="GSA Schedule Contract"
        subheading="Streamlined procurement of AV equipment and installation services for government agencies."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          {/* Contract details table */}
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left">
              <tbody className="divide-y divide-border">
                {[
                  ["Contract Number", COMPANY.gsaContract],
                  ["SIN", `${COMPANY.sin} — ${COMPANY.sinDescription}`],
                  ["Contractor", COMPANY.legalName],
                  [
                    "Address",
                    `${COMPANY.address.street}, ${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.zip}`,
                  ],
                  ["Phone", COMPANY.phone],
                  ["Email", COMPANY.email],
                  ["Website", COMPANY.url],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <td className="whitespace-nowrap bg-muted px-6 py-4 text-sm font-medium text-primary-900">
                      {label}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary-900">
                About Our GSA Schedule
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                EHI Co's GSA Schedule contract provides government agencies with
                streamlined access to professional audio visual equipment and
                installation services. Our contract covers a wide range of
                products under SIN {COMPANY.sin} ({COMPANY.sinDescription}),
                including displays, mounting systems, LED fixtures, and digital
                signage solutions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-900">
                How to Order
              </h2>
              <p className="mt-4 text-muted-foreground">
                Government buyers can place orders through the following
                channels:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "GSA Advantage (gsaadvantage.gov)",
                  "Direct contact via phone or email",
                  "Purchase orders referencing our contract number",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
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
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-900">
                TAA Compliance
              </h2>
              <p className="mt-4 text-muted-foreground">
                All products offered under our GSA contract are Trade Agreements
                Act (TAA) compliant, meeting the requirements for government
                procurement. We maintain full documentation and can provide
                compliance certificates upon request.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTABanner
        heading="Government Inquiry?"
        subheading="Contact us for quotes, product information, or to discuss your agency's AV needs."
        buttonText="Contact Us"
      />
    </>
  );
}
