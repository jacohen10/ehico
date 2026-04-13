import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/ui/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { getAllPosts } from "@/lib/blog/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and insights about AV installation, LED lighting, security cameras, and smart home technology from EHI in Hampton Roads, VA.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Hero
        heading="Blog"
        subheading="Tips, guides, and insights about AV installation and technology."
        variant="light"
      />

      <Section>
        {posts.length === 0 ? (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-lg text-muted-foreground">
              New articles are coming soon. Check back shortly for tips, guides,
              and insights about AV installation and technology.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-border p-6 transition-all hover:border-primary-200 hover:shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                    {post.metadata.category}
                  </span>
                  <time className="text-xs text-muted-foreground">
                    {new Date(post.metadata.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-primary-900 group-hover:text-primary-700">
                  {post.metadata.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {post.metadata.description}
                </p>
              </Link>
            ))}
          </div>
        )}
      </Section>

      <CTABanner />
    </>
  );
}
