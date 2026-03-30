import Link from "next/link";
import { iconMap, WrenchIcon } from "@/components/ui/icons";

export function ServiceCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon?: string;
}) {
  const IconComponent = icon ? iconMap[icon] || WrenchIcon : null;

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-border bg-white p-6 transition-all hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/50"
    >
      {IconComponent && (
        <span className="mb-4 text-primary-500" aria-hidden="true">
          <IconComponent className="h-8 w-8" />
        </span>
      )}
      <h3 className="text-lg font-semibold text-primary-900 group-hover:text-primary-700">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-500">
        Learn more
        <svg
          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
    </Link>
  );
}
