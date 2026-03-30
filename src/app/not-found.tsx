import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-primary-900">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
      >
        Go Home
      </Link>
    </div>
  );
}
