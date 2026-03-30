import { Container } from "@/components/ui/container";
import {
  StarIcon,
  GovernmentIcon,
  MapPinIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";

const signals = [
  { label: "Est. 1977", Icon: StarIcon },
  { label: "GSA Contract Holder", Icon: GovernmentIcon },
  { label: "Hampton Roads", Icon: MapPinIcon },
  { label: "Licensed & Insured", Icon: ShieldCheckIcon },
];

export function TrustSignals() {
  return (
    <section className="border-y border-border bg-muted">
      <Container className="py-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {signals.map((signal) => (
            <div
              key={signal.label}
              className="flex items-center justify-center gap-2.5 text-sm font-medium text-primary-800"
            >
              <signal.Icon className="h-5 w-5 text-primary-500" />
              <span>{signal.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
