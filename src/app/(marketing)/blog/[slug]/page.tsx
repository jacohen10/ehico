import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllPosts } from "@/lib/blog/mdx";
import { COMPANY } from "@/lib/data/company";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  let Content: React.ComponentType;
  try {
    const mod = await import(`../../../../../content/blog/${slug}.mdx`);
    Content = mod.default;
  } catch {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.metadata.title,
    description: post.metadata.description,
    datePublished: post.metadata.date,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.url,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.url,
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <Section>
        <article className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-primary-700"
            >
              &larr; Back to blog
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
              {post.metadata.category}
            </span>
            <time className="text-sm text-muted-foreground">
              {new Date(post.metadata.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
            {post.metadata.title}
          </h1>

          <div className="prose prose-slate prose-lg mt-8 max-w-none prose-headings:text-primary-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">
            <Content />
          </div>
        </article>
      </Section>

      <CTABanner />
    </>
  );
}
