import fs from "fs";
import path from "path";

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  lastUpdated?: string;
  category: string;
  tags: string[];
  published: boolean;
  relatedSlugs?: string[];
  faqs?: BlogFAQ[];
}

export async function getAllPosts(): Promise<
  { slug: string; metadata: BlogPostMeta }[]
> {
  const contentDir = path.join(process.cwd(), "content/blog");

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));

  if (files.length === 0) {
    return [];
  }

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const mod = await import(`../../../content/blog/${file}`);
      return { slug, metadata: mod.metadata as BlogPostMeta };
    }),
  );

  return posts
    .filter((p) => p.metadata.published)
    .sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime(),
    );
}

export async function getRelatedPosts(
  slugs: string[],
): Promise<{ slug: string; metadata: BlogPostMeta }[]> {
  const allPosts = await getAllPosts();
  return slugs
    .map((slug) => allPosts.find((p) => p.slug === slug))
    .filter(Boolean) as { slug: string; metadata: BlogPostMeta }[];
}

export async function getPostsByCategory(
  category: string,
): Promise<{ slug: string; metadata: BlogPostMeta }[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(
    (p) => p.metadata.category.toLowerCase() === category.toLowerCase(),
  );
}

export async function getAllCategories(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const categories = new Set(allPosts.map((p) => p.metadata.category));
  return Array.from(categories).sort();
}
