import { type ReactNode } from "react";
import { Container } from "@/components/ui/container";

export function Hero({
  heading,
  subheading,
  children,
  variant = "primary",
}: {
  heading: string;
  subheading?: string;
  children?: ReactNode;
  variant?: "primary" | "light";
}) {
  const bg =
    variant === "primary"
      ? "bg-primary-950 text-white"
      : "bg-primary-50 text-primary-950";
  const subColor =
    variant === "primary" ? "text-primary-200" : "text-muted-foreground";

  return (
    <section className={`relative overflow-hidden ${bg}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary-800)_0%,_transparent_50%)] opacity-50" />
      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {heading}
          </h1>
          {subheading && (
            <p className={`mt-6 text-lg leading-8 sm:text-xl ${subColor}`}>
              {subheading}
            </p>
          )}
          {children && <div className="mt-10 flex gap-4">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
