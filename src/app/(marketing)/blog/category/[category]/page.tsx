import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CTABanner } from "@/components/marketing/cta-banner";
import { getAllCategories, getPostsByCategory } from "@/lib/blog/mdx";

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((c) => ({ category: c.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const formatted = category.charAt(0).toUpperCase() + category.slice(1);
  return {
    title: `${formatted} Articles`,
    description: `${formatted} articles and guides from EHI — AV installation tips, how-to guides, and industry insights.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const posts = await getPostsByCategory(category);
  if (posts.length === 0) notFound();

  const formatted = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <Hero
        heading={`${formatted} Articles`}
        subheading={`Browse our ${formatted.toLowerCase()} articles and guides.`}
        variant="light"
      />

      <Section>
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: formatted },
          ]}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-border p-6 transition-all hover:border-primary-200 hover:shadow-lg"
            >
              <time className="text-xs text-muted-foreground">
                {new Date(post.metadata.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-3 text-lg font-semibold text-primary-900 group-hover:text-primary-700">
                {post.metadata.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {post.metadata.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
