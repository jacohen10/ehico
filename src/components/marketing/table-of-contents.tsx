"use client";

import { useState, useEffect } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = document.querySelectorAll(
      "article h2, article h3",
    );
    const tocItems: TOCItem[] = Array.from(headings).map((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") || "";
      }
      return {
        id: heading.id,
        text: heading.textContent || "",
        level: heading.tagName === "H2" ? 2 : 3,
      };
    });
    setItems(tocItems);
  }, []);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  return (
    <nav className="not-prose my-8 rounded-xl border border-border bg-muted p-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary-900">
        In this article
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "ml-4" : ""}>
            <a
              href={`#${item.id}`}
              className={`block text-sm transition-colors hover:text-primary-700 ${
                activeId === item.id
                  ? "font-medium text-primary-700"
                  : "text-muted-foreground"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
