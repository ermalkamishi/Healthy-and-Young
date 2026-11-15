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
  title: "Expert Nutrition Seminars & Health Lectures | Healthy and Young",
  description:
    "Interactive seminars on balanced nutrition, psychodietetics, nutrition label decoding, and teenage wellness led by registered dietitians and school alumni across Croatia, Italy, Poland, and Türkiye.",
  openGraph: {
    title: "Expert Seminars | Healthy and Young Erasmus+",
    description:
      "Symposia with dietitian Maja Zovko, Dr. Alisia D’Angelo, Dietitian Eda Metin, and psychodietetician mgr Dominika Gorowska-Stasica.",
  },
}

export default function ExpertSeminarsPage() {
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
              <span className="text-sky">Expert Seminars</span>
            </div>

            {/* Header Content */}
            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-blue-600 text-white hover:bg-blue-700 text-[11px] font-bold">
                    <GraduationCap className="mr-1 size-3" />
                    Health Literacy Track
                  </Badge>
                  <span className="text-xs text-white/80">
                    Clinical Dietetics &amp; Nutritional Science Symposia
                  </span>
                </div>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  Expert Nutrition Seminars
                </h1>
                <p className="mt-2 max-w-[720px] text-sm leading-relaxed text-white/90 sm:text-base">
                  Interactive symposia with registered clinical dietitians, university professors,
                  and distinguished alumni exploring WHO health pillars, nutritional neuroscience,
                  psychodietetics, and food label literacy.
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
                  <Link href="/activities/school-gardens">School Gardens</Link>
                </Button>
              </div>
            </div>

          </div>
        </section>

        {/* Content Body */}
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-8">
          <ActivitiesClient fixedCategory="expert-seminar" />
        </div>

        <DetailSections />
      </main>
      <SiteFooter />
    </>
  )
}

