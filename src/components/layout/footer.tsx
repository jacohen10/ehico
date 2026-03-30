import Link from "next/link";
import { COMPANY } from "@/lib/data/company";
import { footerNavigation } from "@/lib/data/navigation";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-200">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              EHI <span className="font-normal text-primary-300">Co</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Professional AV installation and products serving Hampton Roads
              since {COMPANY.founded}.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p>{COMPANY.address.street}</p>
              <p>
                {COMPANY.address.city}, {COMPANY.address.state}{" "}
                {COMPANY.address.zip}
              </p>
              <p>
                <a
                  href={COMPANY.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.serviceAreas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-12 border-t border-primary-800 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm">
              <p className="font-medium text-white">Business Hours</p>
              <p className="mt-1">{COMPANY.hours.weekday}</p>
              <p>{COMPANY.hours.friday}</p>
              <p>{COMPANY.hours.weekend}</p>
            </div>
            <div className="text-sm">
              <p className="font-medium text-white">GSA Contract Holder</p>
              <p className="mt-1">Contract {COMPANY.gsaContract}</p>
              <p>SIN {COMPANY.sin}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-primary-800 pt-8 text-center text-sm text-primary-400">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
