import { type ReactNode } from "react";
import { Container } from "./container";

const variants = {
  white: "bg-white",
  muted: "bg-muted",
  primary: "bg-primary-900 text-white",
  "primary-light": "bg-primary-50",
} as const;

export function Section({
  children,
  variant = "white",
  className = "",
  containerClassName = "",
}: {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section className={`py-16 sm:py-20 ${variants[variant]} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
