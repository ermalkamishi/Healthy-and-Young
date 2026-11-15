import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  Camera,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2,
  FileText,
  Globe,
  GraduationCap,
  Image as ImageIcon,
  MapPin,
  Plane,
  School,
  Sparkles,
  Users,
  Video,
} from "lucide-react"

import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { DetailSections } from "@/components/site/detail-sections"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  getMobilityBySlug,
  mobilitiesList,
  type MobilityEvent,
} from "@/lib/mobilities-data"
import heroImg from "@/assets/images/hero.jpg"

type Props = {
  params: Promise<{ slug: string }>
}

export const instant = false

export function generateStaticParams() {
  return mobilitiesList.map((m) => ({
    slug: m.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const event = getMobilityBySlug(slug)

  if (!event) {
    return {
      title: "Mobility Not Found | Healthy and Young",
    }
  }

  return {
    title: `${event.code}: ${event.title} | Healthy and Young`,
    description: event.subtitle || event.summary,
    openGraph: {
      title: `${event.code} in ${event.city}, ${event.country} | Healthy and Young`,
      description: event.subtitle,
    },
  }
}

export default async function MobilityDetailPage({ params }: Props) {
  const { slug } = await params
  const event = getMobilityBySlug(slug)

  if (!event) {
    notFound()
  }

  const currentIndex = mobilitiesList.findIndex((m) => m.id === event.id)
  const prevEvent = currentIndex > 0 ? mobilitiesList[currentIndex - 1] : null
  const nextEvent =
    currentIndex < mobilitiesList.length - 1
      ? mobilitiesList[currentIndex + 1]
      : null

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
            {/* Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/80">
              <Link
                href="/"
                className="transition-colors hover:text-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/mobilities"
                className="transition-colors hover:text-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Mobilities
              </Link>
              <span>/</span>
              <span className="text-sky">{event.code}: {event.city}</span>
            </div>

            {/* Badges & Meta strip */}
            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <span
                className={`rounded-md px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-xs ${event.type === "LTTA"
                  ? "bg-mint"
                  : event.type === "TPM"
                    ? "bg-brand"
                    : "bg-amber-600"
                  }`}
              >
                {event.code}
              </span>

              <Badge
                variant="outline"
                className="gap-1.5 border-white/40 bg-white/10 text-xs font-bold text-white backdrop-blur-xs"
              >
                {event.format === "Physical Mobility" && <Plane className="size-3.5" />}
                {event.format === "Virtual Meeting" && <Video className="size-3.5" />}
                {event.format === "Hybrid Conference" && <Globe className="size-3.5" />}
                {event.format}
              </Badge>

              <Badge
                variant="secondary"
                className="bg-white/20 text-xs font-medium text-white backdrop-blur-xs"
              >
                {event.workPackage}
              </Badge>
            </div>

            {/* Title & Host School Row */}
            <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-7 shrink-0 place-items-center overflow-hidden rounded-full border border-white/70 bg-white shadow-2xs">
                    <Image
                      src={`/flags/${event.countryCode}.svg`}
                      alt={event.country}
                      width={28}
                      height={28}
                      unoptimized
                      className="size-full object-cover"
                    />
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-white/90">
                    Host: {event.country} • {event.city}
                  </span>
                </div>

                <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  {event.title}
                </h1>
                <p className="max-w-[760px] text-sm leading-relaxed text-white/90 sm:text-base">
                  {event.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Button
                  asChild
                  className="h-10 bg-mint text-xs font-bold text-white shadow-sm hover:bg-[#2fb169]"
                >
                  <Link href={`/partners/${event.hostPartnerSlug}`}>
                    <School className="size-4" />
                    Host Partner
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 border-white/40 bg-white/10 text-xs font-bold text-white hover:bg-white hover:text-brand"
                >
                  <Link href="/mobilities">
                    <ArrowLeft className="size-4" />
                    All Mobilities
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Dates
                </span>
                <span className="mt-1 block text-xs font-bold text-white">
                  {event.dates}
                </span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Duration
                </span>
                <span className="mt-1 block text-xs font-bold text-white">
                  {event.duration}
                </span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Participants
                </span>
                <span className="mt-1 block text-xs font-bold text-mint">
                  {event.participants}
                </span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Grant Allocated
                </span>
                <span className="mt-1 block text-xs font-bold text-white">
                  {event.grant}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-8 space-y-10">

          {/* ======================================================== */}
          {/* THE DEDICATED CARD FOR PICTURES AND DESCRIPTIONS        */}
          {/* ======================================================== */}
          <Card className="overflow-hidden rounded-2xl border-2 border-brand/20 bg-white shadow-md">
            {/* Header of Media & Documentation Card */}


            <div className="p-6 sm:p-8">
              {event.article ? (
                /* Authentic Report and Image when provided */
                <div className="space-y-6">
                  {event.article.headline && (
                    <h3 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                      {event.article.headline}
                    </h3>
                  )}

                  {event.article.image && (
                    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
                      <div className="relative aspect-16/9 max-h-[460px] w-full">
                        <Image
                          src={event.article.image}
                          alt={event.article.headline || event.title}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      {event.article.imageCaption && (
                        <div className="border-t border-line bg-mist/60 px-4 py-3 text-xs font-medium text-ink-muted flex items-center gap-2">
                          <Camera className="size-4 text-brand shrink-0" />
                          <span>{event.article.imageCaption}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="space-y-4 text-sm leading-relaxed text-ink-soft sm:text-base sm:leading-relaxed">
                    {event.article.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* Full Gallery Grid */}
                  {event.article.gallery && event.article.gallery.length > 0 && (
                    <div className="pt-6 border-t border-line space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="grid size-6 place-items-center rounded-md bg-mint/20 text-leaf">
                            <Camera className="size-3.5" />
                          </span>
                          <h4 className="text-sm font-bold text-ink sm:text-base">
                            Official Photo Gallery ({event.article.gallery.length} Photographs)
                          </h4>
                        </div>
                        <span className="text-xs text-ink-muted">
                          High-resolution documentation from {event.code}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                        {event.article.gallery.map((imgSrc, imgIdx) => (
                          <div
                            key={imgIdx}
                            className="group relative aspect-4/3 overflow-hidden rounded-xl border border-line bg-mist shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand/40"
                          >
                            <Image
                              src={imgSrc}
                              alt={`${event.code} photograph ${imgIdx + 1}`}
                              fill
                              unoptimized
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right opacity-0 transition-opacity group-hover:opacity-100">
                              <span className="text-[10px] font-bold text-white">
                                #{imgIdx + 1}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Placeholder Card Ready for Upcoming Uploads & Descriptions */
                <div className="rounded-2xl border-2 border-dashed border-line bg-mist/30 px-6 py-12 text-center sm:py-16">
                  <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-white shadow-xs border border-line text-brand">
                    <ImageIcon className="size-8 text-brand/70" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink sm:text-xl">
                    Pictures &amp; Activity Description Coming Soon
                  </h3>
                  <p className="mx-auto mt-2 max-w-[560px] text-xs leading-relaxed text-ink-muted sm:text-sm">
                    This dedicated space will display the official photographs, student testimonies,
                    and detailed activity descriptions for <strong>{event.code} ({event.city}, {event.country})</strong>.
                    Content will be updated here as soon as reports and photos are provided.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3.5 py-1 text-xs font-bold text-leaf">
                    <Sparkles className="size-3.5" />
                    Ready for media &amp; description submission
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Specifications & Host Institution Details */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Host Partner Profile Card */}
            <Card className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <span className="text-[11px] font-black tracking-wider text-leaf uppercase">
                Host Institution
              </span>
              <div className="mt-3 flex items-center gap-3">
                <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-white shadow-2xs">
                  <Image
                    src={`/flags/${event.countryCode}.svg`}
                    alt={event.country}
                    width={48}
                    height={48}
                    unoptimized
                    className="size-full object-cover"
                  />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">
                    {event.hostSchool}
                  </h3>
                  <p className="text-xs text-ink-muted">
                    {event.city}, {event.country}
                  </p>
                </div>
              </div>

              {event.partnerEmblem && (
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-line bg-mist/40 p-3">
                  <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-white">
                    <Image
                      src={event.partnerEmblem}
                      alt=""
                      width={40}
                      height={40}
                      unoptimized
                      className="size-full object-contain"
                    />
                  </span>
                  <div className="text-xs text-ink-muted truncate">
                    <span className="font-bold text-ink block">Official Emblem</span>
                    {event.venue}
                  </div>
                </div>
              )}

              <Button
                asChild
                variant="outline"
                size="sm"
                className="mt-5 w-full border-line text-xs font-bold text-brand hover:bg-sky-soft"
              >
                <Link href={`/partners/${event.hostPartnerSlug}`}>
                  View Host School Profile
                  <ArrowRight className="size-3.5" />
                </Link>
              </Button>
            </Card>

            {/* Participation & Logistics */}
            <Card className="rounded-2xl border border-line bg-white p-6 shadow-sm md:col-span-2">
              <span className="text-[11px] font-black tracking-wider text-brand uppercase">
                Logistics &amp; Participant Profile
              </span>
              <h3 className="mt-1 text-base font-bold text-ink">
                Participant Allocation &amp; Format
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-mist/40 p-3.5">
                  <span className="block text-[11px] font-semibold text-ink-muted">
                    Target Group
                  </span>
                  <span className="mt-1 block text-xs font-bold text-ink">
                    {event.targetGroup}
                  </span>
                </div>
                <div className="rounded-xl border border-line bg-mist/40 p-3.5">
                  <span className="block text-[11px] font-semibold text-ink-muted">
                    Participant Breakdown
                  </span>
                  <span className="mt-1 block text-xs font-bold text-ink">
                    {event.participantBreakdown}
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-start gap-2 rounded-xl border border-line bg-[#f8fbff] p-3 text-xs text-ink-muted">
                <MapPin className="size-4 text-mint shrink-0 mt-0.5" />
                <span>
                  <strong>Full Address / Venue:</strong> {event.venue}
                </span>
              </div>
            </Card>
          </div>

          {/* Objectives and Expected Outcomes */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-7">
              <h3 className="flex items-center gap-2 text-xs font-black tracking-wider text-leaf uppercase">
                <CheckCircle2 className="size-4" />
                Key Specific Objectives
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs text-ink-soft sm:text-sm">
                {event.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="grid size-4 shrink-0 place-items-center rounded-full bg-mint/20 text-[10px] font-bold text-leaf mt-0.5">
                      ✓
                    </span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-7">
              <h3 className="flex items-center gap-2 text-xs font-black tracking-wider text-brand uppercase">
                <Award className="size-4" />
                Expected Tangible Outcomes
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs text-ink-soft sm:text-sm">
                {event.expectedOutcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="grid size-4 shrink-0 place-items-center rounded-full bg-sky text-[10px] font-bold text-brand mt-0.5">
                      ★
                    </span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Daily Schedule / Chronological Agenda */}
          <Card className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-black tracking-wider text-brand uppercase">
                  Program Schedule
                </span>
                <h3 className="mt-1 text-lg font-bold text-ink sm:text-xl">
                  Daily Chronological Program
                </h3>
              </div>
              <Badge variant="outline" className="text-xs font-bold text-ink-muted">
                {event.agenda.length} Scheduled Phases
              </Badge>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {event.agenda.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-line bg-white p-4 shadow-2xs transition-all hover:border-brand/40 hover:shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-brand/10 px-2 py-0.5 text-xs font-extrabold text-brand">
                      {item.day}
                    </span>
                    <span className="text-[10px] font-semibold text-ink-muted">
                      Day Schedule
                    </span>
                  </div>
                  <h4 className="mt-2 text-xs font-bold text-ink sm:text-sm">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Pagination Navigation (Prev / Next Mobility) */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
            {prevEvent ? (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-10 border-line text-xs font-bold text-ink hover:bg-mist"
              >
                <Link href={`/mobilities/${prevEvent.id}`}>
                  <ArrowLeft className="size-4" />
                  <span>Previous: {prevEvent.code} ({prevEvent.city})</span>
                </Link>
              </Button>
            ) : (
              <div />
            )}

            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-10 border-line text-xs font-bold text-brand hover:bg-sky-soft"
            >
              <Link href="/mobilities">All Mobilities &amp; TPMs</Link>
            </Button>

            {nextEvent ? (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-10 border-line text-xs font-bold text-ink hover:bg-mist"
              >
                <Link href={`/mobilities/${nextEvent.id}`}>
                  <span>Next: {nextEvent.code} ({nextEvent.city})</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <DetailSections />
      </main>
      <SiteFooter />
    </>
  )
}

