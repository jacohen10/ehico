import fs from "fs";
import path from "path";

export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  published: boolean;
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
