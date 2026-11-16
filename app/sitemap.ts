import type { MetadataRoute } from "next"
import { partners } from "@/lib/site-data"
import { mobilitiesList } from "@/lib/mobilities-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://healthyandyoung.vercel.app")

  const now = new Date()

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mobilities`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/activities`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/activities/school-gardens`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/activities/expert-seminars`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/activities/cooking-workshops`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/results`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  // Dynamic partner pages (/partners/[slug])
  const partnerRoutes: MetadataRoute.Sitemap = partners.map((partner) => ({
    url: `${baseUrl}/partners/${partner.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // Dynamic mobility pages (/mobilities/[slug])
  const mobilityRoutes: MetadataRoute.Sitemap = mobilitiesList.map((m) => ({
    url: `${baseUrl}/mobilities/${m.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...partnerRoutes, ...mobilityRoutes]
}
