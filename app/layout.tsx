import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
})

const description =
  "Healthy and Young Erasmus+ Project — partners, mobilities, student activities and educational results."

const rawBase =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://www.healthyandyoung.mk")
const siteUrl = rawBase.replace(/\/+$/, "")

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Healthy and Young | Erasmus+ Project",
    template: "%s | Healthy and Young",
  },
  description,
  applicationName: "Healthy and Young",
  keywords: [
    "Erasmus+",
    "Healthy and Young",
    "healthy lifestyle",
    "youth",
    "school partnership",
    "Türkiye",
    "Italy",
    "Poland",
    "Croatia",
    "North Macedonia",
  ],
  openGraph: {
    type: "website",
    siteName: "Healthy and Young",
    title: "Healthy and Young | Erasmus+ Project",
    description,
  },
  verification: {
    google: "iGteMs6eRBwGQPTT14OHdF5wXwRV7qalp9osXeWClqk",
  },
}

export const viewport: Viewport = {
  themeColor: "#0752ae",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={inter.variable}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-white px-4 py-2 font-semibold text-brand shadow-lg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
