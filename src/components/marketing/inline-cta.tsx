import Link from "next/link";

export function InlineCTA({
  heading = "Ready to Get Started?",
  text = "Contact us for a free quote. We typically respond within one business day.",
  buttonText = "Get a Free Quote",
  href = "/contact",
}: {
  heading?: string;
  text?: string;
  buttonText?: string;
  href?: string;
}) {
  return (
    <div className="not-prose my-10 rounded-xl border border-primary-200 bg-primary-50 p-8">
      <h3 className="text-xl font-bold text-primary-900">{heading}</h3>
      <p className="mt-2 text-muted-foreground">{text}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-400"
        >
          {buttonText}
        </Link>
        <a
          href="tel:+17576400243"
          className="inline-flex items-center justify-center rounded-lg border-2 border-primary-700 px-5 py-2.5 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-100"
        >
          Call (757) 640-0243
        </a>
      </div>
    </div>
  );
}
