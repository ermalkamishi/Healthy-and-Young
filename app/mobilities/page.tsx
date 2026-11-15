import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, Compass, GraduationCap, MapPin, Sparkles } from "lucide-react"

import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { DetailSections } from "@/components/site/detail-sections"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MobilitiesClient } from "@/components/mobilities/mobilities-client"
import heroImg from "@/assets/images/hero.jpg"

export const metadata: Metadata = {
  title: "Mobilities & Transnational Meetings | Healthy and Young",
  description:
    "Explore the 5 LTTAs (Learning, Teaching, Training Activities) and 3 TPMs (Transnational Project Meetings) of the Erasmus+ KA220-SCH Healthy and Young project across Türkiye, Italy, Poland, Croatia, and North Macedonia.",
  openGraph: {
    title: "Mobilities & Meetings | Healthy and Young Erasmus+",
    description:
      "Official schedule, agendas, participant profiles, and venues for all 5 LTTAs and 3 TPMs connecting youth and teachers across Europe.",
  },
}

export default function MobilitiesPage() {
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
              <span className="text-sky">Mobilities &amp; Meetings</span>
            </div>

            {/* Header Content */}
            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-mint text-white hover:bg-mint text-[11px] font-bold">
                    Erasmus+ KA220-SCH Mobilities
                  </Badge>
                  <span className="text-xs text-white/80">
                    2024 – 2026 Activity Schedule
                  </span>
                </div>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  LTTA's &amp; TPM Meetings
                </h1>
                <p className="mt-2 max-w-[720px] text-sm leading-relaxed text-white/90 sm:text-base">
                  Connecting over 100 students and educators across five European countries through
                  hands-on learning exchanges, staff training seminars, and strategic management
                  conferences.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="h-10 bg-mint text-xs font-bold text-white shadow-sm hover:bg-[#2fb169]"
                >
                  <Link href="/partners">
                    View Project Partners
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 border-white/40 bg-white/10 text-xs font-bold text-white hover:bg-white hover:text-brand"
                >
                  <Link href="/about">Project Overview</Link>
                </Button>
              </div>
            </div>

            {/* Quick Mobility Statistics */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  LTTAs (Learning Activities)
                </span>
                <span className="mt-1 block text-sm font-bold text-mint sm:text-base">
                  5 Activities (1 Staff, 4 Student)
                </span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Transnational Meetings (TPM)
                </span>
                <span className="mt-1 block text-sm font-bold text-white sm:text-base">
                  3 Planned (2 Physical, 1 Virtual)
                </span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Total Direct Mobilities
                </span>
                <span className="mt-1 block text-sm font-bold text-white sm:text-base">
                  105 Direct Participants
                </span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Participating Countries
                </span>
                <span className="mt-1 block text-sm font-bold text-white sm:text-base">
                  TR, IT, PL, HR, MK
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Client Component for Filter & Cards */}
        <section className="mx-auto max-w-[1200px] px-4 py-12 sm:px-8">
          <MobilitiesClient />
        </section>

        {/* Legal and Disclaimer Section */}
        <DetailSections />
      </main>
      <SiteFooter />
    </>
  )
}

