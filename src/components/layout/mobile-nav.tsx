"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { mainNavigation } from "@/lib/data/navigation";
import { COMPANY } from "@/lib/data/company";

function MobileNavItem({
  item,
  onClose,
}: {
  item: (typeof mainNavigation)[number];
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block py-3 text-base font-medium text-primary-900"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between py-3 text-base font-medium text-primary-900"
      >
        {item.label}
        <svg
          className={`h-5 w-5 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {expanded && (
        <div className="ml-4 border-l border-border pl-4">
          <Link
            href={item.href}
            onClick={onClose}
            className="block py-2 text-sm text-muted-foreground"
          >
            All {item.label}
          </Link>
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="block py-2 text-sm text-primary-700"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/20" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex h-16 items-center justify-between px-4">
          <Image src="/logo.jpg" alt="EHI Co" width={80} height={40} className="h-8 w-auto" />
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-primary-700"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="divide-y divide-border px-4">
          {mainNavigation.map((item) => (
            <MobileNavItem key={item.href} item={item} onClose={onClose} />
          ))}
        </nav>
        <div className="mt-8 space-y-4 px-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full rounded-lg bg-accent-500 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Get a Free Quote
          </Link>
          <a
            href={COMPANY.phoneHref}
            className="block text-center text-sm font-semibold text-primary-700"
          >
            Call {COMPANY.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
