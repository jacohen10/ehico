import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { serviceAreas } from "@/lib/data/service-areas";
import { getAllPosts } from "@/lib/blog/mdx";

const BASE_URL = "https://ehico.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${BASE_URL}/services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/manufacturers`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/government`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/government/gsa-contract`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/government/capabilities`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/service-areas`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const areaPages: MetadataRoute.Sitemap = serviceAreas.map((a) => ({
    url: `${BASE_URL}/service-areas/${a.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...blogPages];
}
