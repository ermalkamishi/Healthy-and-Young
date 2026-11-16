import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const rawBase =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://www.healthyandyoung.mk")
  const baseUrl = rawBase.replace(/\/+$/, "")

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
