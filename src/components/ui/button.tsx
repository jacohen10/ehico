import Link from "next/link";
import { type ReactNode } from "react";

const variants = {
  primary:
    "bg-primary-700 text-white hover:bg-primary-600 focus-visible:outline-primary-700",
  accent:
    "bg-accent-500 text-white hover:bg-accent-400 focus-visible:outline-accent-500",
  outline:
    "border-2 border-primary-700 text-primary-700 hover:bg-primary-50 focus-visible:outline-primary-700",
  ghost:
    "text-primary-700 hover:bg-primary-50 focus-visible:outline-primary-700",
  "outline-white":
    "border-2 border-white text-white hover:bg-white/10 focus-visible:outline-white",
} as const;

const sizes = {
  sm: "px-3.5 py-2 text-sm",
  default: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
} as const;

interface ButtonBaseProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
