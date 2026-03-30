import { iconMap, PhotoIcon } from "@/components/ui/icons";

export function PlaceholderImage({
  label,
  icon = "default",
  aspectRatio = "16/9",
  className = "",
}: {
  label?: string;
  icon?: string;
  aspectRatio?: string;
  className?: string;
}) {
  const IconComponent = iconMap[icon] || PhotoIcon;

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg bg-primary-50 text-primary-300 ${className}`}
      style={{ aspectRatio }}
    >
      <IconComponent className="h-10 w-10" />
      {label && (
        <span className="mt-2 text-sm font-medium text-primary-400">
          {label}
        </span>
      )}
    </div>
  );
}
