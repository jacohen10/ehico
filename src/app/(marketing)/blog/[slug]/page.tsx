import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CTABanner } from "@/components/marketing/cta-banner";
import { RelatedArticles } from "@/components/marketing/related-articles";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllPosts, getRelatedPosts } from "@/lib/blog/mdx";
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

  const relatedPosts = post.metadata.relatedSlugs
    ? await getRelatedPosts(post.metadata.relatedSlugs)
    : [];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.metadata.title,
    description: post.metadata.description,
    datePublished: post.metadata.date,
    ...(post.metadata.lastUpdated
      ? { dateModified: post.metadata.lastUpdated }
      : {}),
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

  const faqSchema =
    post.metadata.faqs && post.metadata.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.metadata.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <Section>
        <article className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              {
                label: post.metadata.category,
                href: `/blog/category/${post.metadata.category.toLowerCase()}`,
              },
              { label: post.metadata.title },
            ]}
          />

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
            {post.metadata.lastUpdated && (
              <span className="text-sm text-muted-foreground">
                (Updated{" "}
                {new Date(post.metadata.lastUpdated).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "long", day: "numeric" },
                )}
                )
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
            {post.metadata.title}
          </h1>

          <div className="prose prose-slate prose-lg mt-8 max-w-none prose-headings:text-primary-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">
            <Content />
          </div>

          {/* FAQ section rendered from metadata */}
          {post.metadata.faqs && post.metadata.faqs.length > 0 && (
            <div className="mt-12 border-t border-border pt-8">
              <h2 className="text-2xl font-bold text-primary-900">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 divide-y divide-border">
                {post.metadata.faqs.map((faq) => (
                  <div key={faq.question} className="py-5">
                    <h3 className="text-lg font-semibold text-primary-900">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <RelatedArticles posts={relatedPosts} />
        </article>
      </Section>

      <CTABanner />
    </>
  );
}
