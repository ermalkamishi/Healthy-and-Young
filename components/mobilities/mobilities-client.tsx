"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  Calendar,
  Camera,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2,
  FileText,
  Filter,
  Globe,
  GraduationCap,
  Info,
  MapPin,
  Plane,
  School,
  Sparkles,
  Users,
  Video,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  mobilitiesList,
  type MobilityEvent,
  type MobilityType,
} from "@/lib/mobilities-data"
import { cn } from "@/lib/utils"

type FilterOption = "ALL" | "LTTA" | "TPM" | "CONFERENCE"

export function MobilitiesClient() {
  const [filter, setFilter] = React.useState<FilterOption>("ALL")
  const [selectedCountry, setSelectedCountry] = React.useState<string>("ALL")
  const [expandedAgendas, setExpandedAgendas] = React.useState<
    Record<string, boolean>
  >({})

  const toggleAgenda = (id: string) => {
    setExpandedAgendas((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const filteredEvents = React.useMemo(() => {
    return mobilitiesList.filter((event) => {
      if (filter !== "ALL" && event.type !== filter) return false
      if (selectedCountry !== "ALL" && event.countryCode !== selectedCountry)
        return false
      return true
    })
  }, [filter, selectedCountry])

  const lttaCount = mobilitiesList.filter((m) => m.type === "LTTA").length
  const tpmCount = mobilitiesList.filter((m) => m.type === "TPM").length
  const confCount = mobilitiesList.filter((m) => m.type === "CONFERENCE").length

  return (
    <div className="space-y-10">
      {/* Filter and Control Bar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between sm:p-5">
        {/* Type Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            variant={filter === "ALL" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("ALL")}
            className={cn(
              "h-9 rounded-xl px-3.5 text-xs font-bold transition-all",
              filter === "ALL"
                ? "bg-brand text-white shadow-xs hover:bg-brand-deep"
                : "border-line text-ink hover:bg-mist"
            )}
          >
            All Meetings & Mobilities
            <span
              className={cn(
                "ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-extrabold",
                filter === "ALL"
                  ? "bg-white/20 text-white"
                  : "bg-mist text-ink-muted"
              )}
            >
              {mobilitiesList.length}
            </span>
          </Button>

          <Button
            type="button"
            variant={filter === "LTTA" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("LTTA")}
            className={cn(
              "h-9 rounded-xl px-3.5 text-xs font-bold transition-all",
              filter === "LTTA"
                ? "bg-mint text-white shadow-xs hover:bg-[#2fb169]"
                : "border-line text-ink hover:bg-mist"
            )}
          >
            <GraduationCap className="size-3.5" />
            LTTAs (Student & Staff)
            <span
              className={cn(
                "ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-extrabold",
                filter === "LTTA"
                  ? "bg-white/20 text-white"
                  : "bg-mist text-ink-muted"
              )}
            >
              {lttaCount}
            </span>
          </Button>

          <Button
            type="button"
            variant={filter === "TPM" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("TPM")}
            className={cn(
              "h-9 rounded-xl px-3.5 text-xs font-bold transition-all",
              filter === "TPM"
                ? "bg-[#0b4fbe] text-white shadow-xs hover:bg-[#073d94]"
                : "border-line text-ink hover:bg-mist"
            )}
          >
            <Compass className="size-3.5" />
            TPMs (Management Meetings)
            <span
              className={cn(
                "ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-extrabold",
                filter === "TPM"
                  ? "bg-white/20 text-white"
                  : "bg-mist text-ink-muted"
              )}
            >
              {tpmCount}
            </span>
          </Button>

          <Button
            type="button"
            variant={filter === "CONFERENCE" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("CONFERENCE")}
            className={cn(
              "h-9 rounded-xl px-3.5 text-xs font-bold transition-all",
              filter === "CONFERENCE"
                ? "bg-amber-600 text-white shadow-xs hover:bg-amber-700"
                : "border-line text-ink hover:bg-mist"
            )}
          >
            Final Conference
            <span
              className={cn(
                "ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-extrabold",
                filter === "CONFERENCE"
                  ? "bg-white/20 text-white"
                  : "bg-mist text-ink-muted"
              )}
            >
              {confCount}
            </span>
          </Button>
        </div>

        {/* Country Quick Selector */}
        <div className="flex items-center gap-2 text-xs font-medium text-ink-muted">

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSelectedCountry("ALL")}
              className={cn(
                "rounded-lg px-2.5 py-1 text-xs font-bold transition-colors",
                selectedCountry === "ALL"
                  ? "bg-sky text-brand"
                  : "text-ink-muted hover:bg-mist hover:text-ink"
              )}
            >
              All
            </button>
            {[
              { code: "tr", name: "Türkiye" },
              { code: "mk", name: "North Macedonia" },
              { code: "it", name: "Italy" },
              { code: "hr", name: "Croatia" },
              { code: "pl", name: "Poland" },
            ].map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => setSelectedCountry(c.code)}
                title={`Show events hosted in ${c.name}`}
                className={cn(
                  "flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-bold transition-colors",
                  selectedCountry === c.code
                    ? "bg-sky text-brand ring-1 ring-brand/30"
                    : "text-ink-muted hover:bg-mist hover:text-ink"
                )}
              >
                <span className="grid size-4 shrink-0 place-items-center overflow-hidden rounded-full border border-line">
                  <Image
                    src={`/flags/${c.code}.svg`}
                    alt=""
                    width={16}
                    height={16}
                    unoptimized
                    className="size-full object-cover"
                  />
                </span>
                <span className="hidden md:inline">{c.name.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards List */}
      <div className="space-y-8">
        {filteredEvents.map((event) => {
          const isAgendaOpen = expandedAgendas[event.id] ?? true

          return (
            <Card
              key={event.id}
              id={event.id}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-md"
            >
              {/* Card Header Top Strip */}
              <div
                className={cn(
                  "border-b px-5 py-3 text-xs font-semibold sm:px-8",
                  event.type === "LTTA"
                    ? "border-mint/20 bg-mint/5 text-[#1b7a44]"
                    : event.type === "TPM"
                      ? "border-brand/20 bg-sky-soft/60 text-brand"
                      : "border-amber-200 bg-amber-50/70 text-amber-800"
                )}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Activity Code Badge */}
                    <span
                      className={cn(
                        "rounded-md px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wider text-white",
                        event.type === "LTTA"
                          ? "bg-mint"
                          : event.type === "TPM"
                            ? "bg-brand"
                            : "bg-amber-600"
                      )}
                    >
                      {event.code}
                    </span>

                    {/* Format Badge */}
                    <Badge
                      variant="outline"
                      className="gap-1 border-current bg-white/70 text-[11px] font-semibold"
                    >
                      {event.format === "Physical Mobility" && (
                        <Plane className="size-3" />
                      )}
                      {event.format === "Virtual Meeting" && (
                        <Video className="size-3" />
                      )}
                      {event.format === "Hybrid Conference" && (
                        <Globe className="size-3" />
                      )}
                      {event.format}
                    </Badge>

                    {/* Work Package */}
                    <span className="text-[11px] font-bold text-ink-muted">
                      • {event.workPackage}
                    </span>
                  </div>

                </div>
              </div>

              {/* Card Main Header: Host School info & Title */}
              <div className="p-5 sm:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-2">
                    {/* Host Country & School Info */}
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-white shadow-2xs">
                        <Image
                          src={`/flags/${event.countryCode}.svg`}
                          alt={event.country}
                          width={36}
                          height={36}
                          unoptimized
                          className="size-full object-cover"
                        />
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-brand">
                            Host: {event.country}
                          </span>
                          <span className="text-xs text-ink-muted">• {event.city}</span>
                        </div>
                        <Link
                          href={`/partners/${event.hostPartnerSlug}`}
                          className="text-xs font-semibold text-ink-soft hover:text-brand hover:underline"
                        >
                          {event.hostSchool}
                        </Link>
                      </div>
                    </div>

                    {/* Main Title & Subtitle */}
                    <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl md:text-[26px]">
                      {event.title}
                    </h2>
                    <p className="text-xs font-medium text-ink-muted sm:text-sm">
                      {event.subtitle}
                    </p>
                  </div>

                  {/* Host Partner Circular Emblem */}
                  {event.partnerEmblem && (
                    <Link
                      href={`/partners/${event.hostPartnerSlug}`}
                      title={`Visit ${event.hostSchool} profile`}
                      className="group/emblem flex shrink-0 items-center gap-3 rounded-2xl border border-line bg-mist/40 p-2.5 transition-all hover:border-brand/40 hover:bg-sky-soft/40"
                    >
                      <div className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-white shadow-2xs transition-transform group-hover/emblem:scale-105">
                        <Image
                          src={event.partnerEmblem}
                          alt={event.hostSchool}
                          width={48}
                          height={48}
                          unoptimized
                          className="size-full rounded-full object-contain p-0.5"
                        />
                      </div>
                      <div className="hidden sm:block text-left text-xs">
                        <span className="block font-bold text-ink group-hover/emblem:text-brand">
                          Host Institution
                        </span>
                        <span className="block text-[11px] text-ink-muted truncate max-w-[160px]">
                          {event.venue}
                        </span>
                      </div>
                    </Link>
                  )}
                </div>

                {/* 4-Column Quick Specification Bar */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-xl border border-line bg-mist/50 p-3">
                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-ink-muted">
                      <Calendar className="size-3.5 text-brand" />
                      Dates
                    </span>
                    <span className="mt-1 block text-xs font-bold text-ink">
                      {event.dates}
                    </span>
                  </div>

                  <div className="rounded-xl border border-line bg-mist/50 p-3">
                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-ink-muted">
                      <Clock className="size-3.5 text-brand" />
                      Duration
                    </span>
                    <span className="mt-1 block text-xs font-bold text-ink">
                      {event.duration}
                    </span>
                  </div>

                  <div className="rounded-xl border border-line bg-mist/50 p-3">
                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-ink-muted">
                      <Users className="size-3.5 text-brand" />
                      Target Group
                    </span>
                    <span className="mt-1 block text-xs font-bold text-ink truncate" title={event.targetGroup}>
                      {event.targetGroup}
                    </span>
                  </div>

                  <div className="rounded-xl border border-line bg-mist/50 p-3">
                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-ink-muted">
                      <GraduationCap className="size-3.5 text-mint" />
                      Participants
                    </span>
                    <span className="mt-1 block text-xs font-bold text-leaf truncate" title={event.participants}>
                      {event.participants}
                    </span>
                  </div>
                </div>

                {/* Venue Details */}
                <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-muted">
                  <MapPin className="size-3.5 text-mint shrink-0" />
                  <span>
                    <strong>Venue:</strong> {event.venue} ({event.participantBreakdown})
                  </span>
                </div>

                {/* Event Article / Narrative Report (if provided) */}
                {event.article && (
                  <div className="mt-6 rounded-2xl border border-line bg-[#f8fbff] p-5 sm:p-7 space-y-4">
                    {event.article.headline && (
                      <div className="flex items-center gap-2.5">
                        <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-brand text-white shadow-2xs">
                          <FileText className="size-4" />
                        </span>
                        <h3 className="text-base font-bold text-ink sm:text-lg">
                          {event.article.headline}
                        </h3>
                      </div>
                    )}

                    {event.article.image && (
                      <div className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
                        <div className="relative aspect-16/9 max-h-[380px] w-full">
                          <Image
                            src={event.article.image}
                            alt={event.article.headline || event.title}
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        {event.article.imageCaption && (
                          <div className="border-t border-line bg-mist/40 px-4 py-2.5 text-[11px] font-medium text-ink-muted">
                            {event.article.imageCaption}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="space-y-3 text-xs leading-relaxed text-ink-soft sm:text-[13px] sm:leading-relaxed">
                      {event.article.paragraphs.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>

                    {/* Photo Gallery Strip */}
                    {event.article.gallery && event.article.gallery.length > 1 && (() => {
                      const gallery = event.article.gallery
                      return (
                        <div className="space-y-2.5 pt-3 border-t border-line/70">
                          <div className="flex items-center justify-between text-xs font-bold text-ink">
                            <span className="flex items-center gap-1.5 text-brand">
                              <Camera className="size-3.5" />
                              Photo Gallery
                            </span>
                            <Link
                              href={`/mobilities/${event.id}`}
                              className="text-[11px] font-semibold text-leaf hover:underline"
                            >
                              View All Photos &rarr;
                            </Link>
                          </div>
                          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                            {gallery.slice(0, 6).map((imgSrc, imgIdx) => (
                              <Link
                                key={imgIdx}
                                href={`/mobilities/${event.id}`}
                                className="group/thumb relative aspect-4/3 overflow-hidden rounded-lg border border-line bg-mist shadow-2xs transition-transform hover:scale-105"
                              >
                                <Image
                                  src={imgSrc}
                                  alt={`${event.code} photo ${imgIdx + 1}`}
                                  fill
                                  unoptimized
                                  className="object-cover transition-opacity group-hover/thumb:opacity-90"
                                />
                                {imgIdx === 5 && gallery.length > 6 && (
                                  <div className="absolute inset-0 grid place-items-center bg-black/60 font-extrabold text-white text-xs">
                                    +{gallery.length - 6} more
                                  </div>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    })()}
                  </div>
                )}

                {/* Fallback simple summary if present and not empty */}
                {!event.article && event.summary && event.summary.trim().length > 0 && (
                  <div className="mt-5 rounded-xl border border-[#edf3f8] bg-[#f8fbff] p-4 text-xs leading-relaxed text-ink-soft sm:text-[13px] sm:leading-relaxed">
                    <p>{event.summary}</p>
                  </div>
                )}


                {/* Daily Detailed Agenda (Chronological timeline) */}
                <div className="mt-6 border-t border-line pt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="flex items-center gap-2 text-xs font-black tracking-wider text-ink uppercase">
                      <Calendar className="size-4 text-brand" />
                      Detailed Program & Daily Agenda
                    </h3>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleAgenda(event.id)}
                      className="h-8 text-xs font-bold text-brand hover:bg-sky-soft hover:text-brand"
                    >
                      {isAgendaOpen ? "Hide Agenda Details" : "Show Full Agenda"}
                    </Button>
                  </div>

                  {isAgendaOpen && (
                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {event.agenda.map((item, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-line bg-white p-3.5 shadow-2xs transition-all hover:border-brand/30"
                        >
                          <div className="flex items-center justify-between">
                            <span className="rounded-md bg-brand/10 px-2 py-0.5 text-[11px] font-extrabold text-brand">
                              {item.day}
                            </span>
                            <span className="text-[10px] font-semibold text-ink-muted">
                              Official Schedule
                            </span>
                          </div>
                          <h4 className="mt-2 text-xs font-bold text-ink">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer of Card: Quick Action */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line/70 pt-4">
                  <span className="text-[11px] text-ink-muted">
                    Activity registered in Erasmus+ Project Proposal (Form ID:
                    KA220-SCH-44381B9F).
                  </span>
                  <div className="flex items-center gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="h-8 border-line text-xs font-bold text-brand hover:bg-sky-soft hover:text-brand"
                    >
                      <Link href={`/partners/${event.hostPartnerSlug}`}>
                        <School className="size-3.5" />
                        Host Partner Profile
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* European Quality & Mobility Safeguards Card */}

    </div>
  )
}
