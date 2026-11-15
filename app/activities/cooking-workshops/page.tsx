import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  GraduationCap,
  Sparkles,
  Sprout,
  UtensilsCrossed,
} from "lucide-react"

import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { DetailSections } from "@/components/site/detail-sections"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ActivitiesClient } from "@/components/activities/activities-client"
import heroImg from "@/assets/images/hero.jpg"

export const instant = false

export const metadata: Metadata = {
  title: "Cooking Workshops & Culinary Masterclasses | Healthy and Young",
  description:
    "Hands-on culinary training, Italian pizza making, Polish sous-vide health dishes, and international gastronomy workshops at university culinary faculties in Italy, Poland, and Türkiye.",
  openGraph: {
    title: "Culinary & Cooking Workshops | Healthy and Young Erasmus+",
    description:
      "Masterclasses at De Panfilis Hotel Management School, Gastronomy School Complex in Bielsko-Biała, and Istanbul Rumeli University.",
  },
}

export default function CookingWorkshopsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden px-4 py-10 text-white sm:px-8 sm:py-16">
          <Image
            src={heroImg}
            alt=""
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="-z-30 object-cover object-[70%_center] sm:object-right"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-20 bg-[linear-gradient(105deg,#0752aef0_0%,#053f8be6_45%,#043274d4_75%,#043274aa_100%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(67,191,123,0.22),transparent_65%)]"
          />

          <div className="mx-auto max-w-[1200px]">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
              <Link
                href="/"
                className="transition-colors hover:text-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/activities"
                className="transition-colors hover:text-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Activities
              </Link>
              <span>/</span>
              <span className="text-sky">Cooking Workshops</span>
            </div>

            {/* Header Content */}
            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-amber-600 text-white hover:bg-amber-700 text-[11px] font-bold">
                    <UtensilsCrossed className="mr-1 size-3" />
                    Gastronomy Track
                  </Badge>
                  <span className="text-xs text-white/80">
                    Vocational Culinary Arts &amp; Healthy Recipes
                  </span>
                </div>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  Cooking &amp; Cuisine Workshops
                </h1>
                <p className="mt-2 max-w-[720px] text-sm leading-relaxed text-white/90 sm:text-base">
                  Professional culinary arts immersion, dough fermentation techniques, sous-vide
                  nutritious preparations, zero-sugar desserts, and international world cuisines
                  hosted in Italy, Poland, and Türkiye.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="h-10 bg-mint text-xs font-bold text-white shadow-sm hover:bg-[#2fb169]"
                >
                  <Link href="/activities">
                    View All Activities
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 border-white/40 bg-white/10 text-xs font-bold text-white hover:bg-white hover:text-brand"
                >
                  <Link href="/activities/expert-seminars">Expert Seminars</Link>
                </Button>
              </div>
            </div>

          </div>
        </section>

        {/* Content Body */}
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-8">
          <ActivitiesClient fixedCategory="cooking-workshop" />
        </div>

        <DetailSections />
      </main>
      <SiteFooter />
    </>
  )
}

