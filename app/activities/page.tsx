import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
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
  title: "Project Activities & Educational Workshops | Healthy and Young",
  description:
    "Explore authentic school garden initiatives, expert nutrition seminars, and culinary masterclasses conducted across Türkiye, Italy, Poland, and Croatia under the Erasmus+ Healthy and Young project.",
  openGraph: {
    title: "Project Activities & Workshops | Healthy and Young Erasmus+",
    description:
      "Hands-on organic school gardens, guest lectures by registered nutritionists, and vocational gastronomy workshops empowering youth across Europe.",
  },
}

export default function ActivitiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden px-4 py-10 text-white sm:px-8 sm:py-16">
          {/* Background photo */}
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
              <span className="text-sky">Project Activities</span>
            </div>

            {/* Header Content */}
            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-mint text-white hover:bg-mint text-[11px] font-bold">
                    Erasmus+ KA220-SCH Activities
                  </Badge>
                  <span className="text-xs text-white/80">
                    Local Implementation &amp; Student Workshops
                  </span>
                </div>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  Project Activities &amp; Workshops
                </h1>
                <p className="mt-2 max-w-[720px] text-sm leading-relaxed text-white/90 sm:text-base">
                  Authentic educational initiatives implemented by partner schools across Türkiye,
                  Italy, Poland, and Croatia: organic school hobby gardens, expert nutrition seminars,
                  and hands-on gastronomy workshops.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="h-10 bg-mint text-xs font-bold text-white shadow-sm hover:bg-[#2fb169]"
                >
                  <Link href="/mobilities">
                    View Mobilities &amp; TPMs
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 border-white/40 bg-white/10 text-xs font-bold text-white hover:bg-white hover:text-brand"
                >
                  <Link href="/partners">Partner Institutions</Link>
                </Button>
              </div>
            </div>

          </div>
        </section>

        {/* Content Body */}
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-8">
          <ActivitiesClient />
        </div>

        {/* Informational Detail Sections & Disclaimers */}
        <DetailSections />
      </main>
      <SiteFooter />
    </>
  )
}
