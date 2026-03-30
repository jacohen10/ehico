import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/mdx";

export function RelatedArticles({
  posts,
}: {
  posts: { slug: string; metadata: BlogPostMeta }[];
}) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 border-t border-border pt-12">
      <h2 className="text-2xl font-bold text-primary-900">Related Articles</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-xl border border-border p-5 transition-all hover:border-primary-200 hover:shadow-lg"
          >
            <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
              {post.metadata.category}
            </span>
            <h3 className="mt-3 text-base font-semibold text-primary-900 group-hover:text-primary-700">
              {post.metadata.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {post.metadata.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
