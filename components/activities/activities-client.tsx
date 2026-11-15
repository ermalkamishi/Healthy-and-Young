"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Info,
  MapPin,
  Maximize2,
  Search,
  Sparkles,
  Sprout,
  Users,
  UtensilsCrossed,
  X,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  activitiesList,
  type Activity,
  type ActivityCategory,
} from "@/lib/activities-data"
import { cn } from "@/lib/utils"

type CategoryFilter = "ALL" | ActivityCategory
type CountryFilter = "ALL" | "hr" | "it" | "pl" | "tr"

interface LightboxState {
  isOpen: boolean
  images: string[]
  currentIndex: number
  title: string
}

interface ActivitiesClientProps {
  fixedCategory?: ActivityCategory
  pageTitle?: string
}

export function ActivitiesClient({
  fixedCategory,
  pageTitle,
}: ActivitiesClientProps = {}) {
  const [selectedCategory, setSelectedCategory] =
    React.useState<CategoryFilter>(fixedCategory || "ALL")
  const [selectedCountry, setSelectedCountry] =
    React.useState<CountryFilter>("ALL")
  const [searchQuery, setSearchQuery] = React.useState<string>("")

  // Lightbox modal state
  const [lightbox, setLightbox] = React.useState<LightboxState>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: "",
  })

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightbox({
      isOpen: true,
      images,
      currentIndex: index,
      title,
    })
  }

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }))
  }

  const prevLightboxImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex:
        prev.currentIndex > 0
          ? prev.currentIndex - 1
          : prev.images.length - 1,
    }))
  }

  const nextLightboxImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex:
        prev.currentIndex < prev.images.length - 1
          ? prev.currentIndex + 1
          : 0,
    }))
  }

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    if (!lightbox.isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") prevLightboxImage()
      if (e.key === "ArrowRight") nextLightboxImage()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightbox.isOpen])

  // Filter logic
  const effectiveCategory = fixedCategory || selectedCategory

  const filteredActivities = React.useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return activitiesList.filter((item) => {
      // Category filter
      if (effectiveCategory !== "ALL" && item.category !== effectiveCategory) {
        return false
      }
      // Country filter
      if (selectedCountry !== "ALL" && item.countryCode !== selectedCountry) {
        return false
      }
      // Search query
      if (q) {
        const matchesTitle = item.title.toLowerCase().includes(q)
        const matchesSubtitle = item.subtitle?.toLowerCase().includes(q)
        const matchesSchool = item.hostSchool.toLowerCase().includes(q)
        const matchesLocation = item.location.toLowerCase().includes(q)
        const matchesSpeaker = item.speakerOrLead?.toLowerCase().includes(q)
        const matchesParagraphs = item.paragraphs.some((p) =>
          p.toLowerCase().includes(q)
        )
        const matchesHighlights = item.keyHighlights.some((h) =>
          h.toLowerCase().includes(q)
        )
        if (
          !matchesTitle &&
          !matchesSubtitle &&
          !matchesSchool &&
          !matchesLocation &&
          !matchesSpeaker &&
          !matchesParagraphs &&
          !matchesHighlights
        ) {
          return false
        }
      }
      return true
    })
  }, [selectedCategory, selectedCountry, searchQuery])

  // Available countries for the current category
  const availableCountries = React.useMemo(() => {
    const list = activitiesList.filter(
      (a) => effectiveCategory === "ALL" || a.category === effectiveCategory
    )
    const codes = new Set(list.map((a) => a.countryCode))
    const all = [
      { id: "ALL" as CountryFilter, label: "All Countries", flag: null },
      { id: "tr" as CountryFilter, label: "Türkiye", flag: "/flags/tr.svg" },
      { id: "it" as CountryFilter, label: "Italy", flag: "/flags/it.svg" },
      { id: "pl" as CountryFilter, label: "Poland", flag: "/flags/pl.svg" },
      { id: "hr" as CountryFilter, label: "Croatia", flag: "/flags/hr.svg" },
    ]
    return all.filter((c) => c.id === "ALL" || codes.has(c.id))
  }, [effectiveCategory])

  // Counts
  const totalCount = activitiesList.length
  const gardenCount = activitiesList.filter(
    (a) => a.category === "school-garden"
  ).length
  const seminarCount = activitiesList.filter(
    (a) => a.category === "expert-seminar"
  ).length
  const cookingCount = activitiesList.filter(
    (a) => a.category === "cooking-workshop"
  ).length

  return (
    <div className="space-y-10">
      {/* ========================================================= */}
      {/* Filter and Search Bar                                     */}
      {/* ========================================================= */}
      <div className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-5 shadow-sm">
        {/* Category Navigation / Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {fixedCategory ? (
            <>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-9.5 rounded-xl border-line px-4 text-xs font-bold text-ink hover:bg-mist"
              >
                <Link href="/activities">
                  All Activities
                  <span className="ml-1.5 rounded-full bg-mist px-1.5 py-0.5 text-[10px] font-extrabold text-ink-muted">
                    {totalCount}
                  </span>
                </Link>
              </Button>

              <Button
                asChild
                variant={fixedCategory === "school-garden" ? "default" : "outline"}
                size="sm"
                className={cn(
                  "h-9.5 rounded-xl px-4 text-xs font-bold transition-all",
                  fixedCategory === "school-garden"
                    ? "bg-emerald-600 text-white shadow-xs hover:bg-emerald-700"
                    : "border-line text-ink hover:bg-emerald-50 hover:text-emerald-800"
                )}
              >
                <Link href="/activities/school-gardens">
                  <Sprout className="mr-1.5 size-3.5" />
                  School Gardens
                  <span
                    className={cn(
                      "ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-extrabold",
                      fixedCategory === "school-garden"
                        ? "bg-white/20 text-white"
                        : "bg-emerald-100 text-emerald-800"
                    )}
                  >
                    {gardenCount}
                  </span>
                </Link>
              </Button>

              <Button
                asChild
                variant={fixedCategory === "expert-seminar" ? "default" : "outline"}
                size="sm"
                className={cn(
                  "h-9.5 rounded-xl px-4 text-xs font-bold transition-all",
                  fixedCategory === "expert-seminar"
                    ? "bg-blue-600 text-white shadow-xs hover:bg-blue-700"
                    : "border-line text-ink hover:bg-blue-50 hover:text-blue-800"
                )}
              >
                <Link href="/activities/expert-seminars">
                  <GraduationCap className="mr-1.5 size-3.5" />
                  Expert Seminars
                  <span
                    className={cn(
                      "ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-extrabold",
                      fixedCategory === "expert-seminar"
                        ? "bg-white/20 text-white"
                        : "bg-blue-100 text-blue-800"
                    )}
                  >
                    {seminarCount}
                  </span>
                </Link>
              </Button>

              <Button
                asChild
                variant={fixedCategory === "cooking-workshop" ? "default" : "outline"}
                size="sm"
                className={cn(
                  "h-9.5 rounded-xl px-4 text-xs font-bold transition-all",
                  fixedCategory === "cooking-workshop"
                    ? "bg-amber-600 text-white shadow-xs hover:bg-amber-700"
                    : "border-line text-ink hover:bg-amber-50 hover:text-amber-800"
                )}
              >
                <Link href="/activities/cooking-workshops">
                  <UtensilsCrossed className="mr-1.5 size-3.5" />
                  Cooking Workshops
                  <span
                    className={cn(
                      "ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-extrabold",
                      fixedCategory === "cooking-workshop"
                        ? "bg-white/20 text-white"
                        : "bg-amber-100 text-amber-800"
                    )}
                  >
                    {cookingCount}
                  </span>
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button
                type="button"
                variant={selectedCategory === "ALL" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("ALL")}
                className={cn(
                  "h-9.5 rounded-xl px-4 text-xs font-bold transition-all",
                  selectedCategory === "ALL"
                    ? "bg-brand text-white shadow-xs hover:bg-brand-deep"
                    : "border-line text-ink hover:bg-mist"
                )}
              >
                All Activities
                <span
                  className={cn(
                    "ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-extrabold",
                    selectedCategory === "ALL"
                      ? "bg-white/20 text-white"
                      : "bg-mist text-ink-muted"
                  )}
                >
                  {totalCount}
                </span>
              </Button>

              <Button
                type="button"
                variant={selectedCategory === "school-garden" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("school-garden")}
                className={cn(
                  "h-9.5 rounded-xl px-4 text-xs font-bold transition-all",
                  selectedCategory === "school-garden"
                    ? "bg-emerald-600 text-white shadow-xs hover:bg-emerald-700"
                    : "border-line text-ink hover:bg-emerald-50 hover:text-emerald-800"
                )}
              >
                <Sprout className="mr-1.5 size-3.5" />
                School Gardens
                <span
                  className={cn(
                    "ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-extrabold",
                    selectedCategory === "school-garden"
                      ? "bg-white/20 text-white"
                      : "bg-emerald-100 text-emerald-800"
                  )}
                >
                  {gardenCount}
                </span>
              </Button>

              <Button
                type="button"
                variant={selectedCategory === "expert-seminar" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("expert-seminar")}
                className={cn(
                  "h-9.5 rounded-xl px-4 text-xs font-bold transition-all",
                  selectedCategory === "expert-seminar"
                    ? "bg-blue-600 text-white shadow-xs hover:bg-blue-700"
                    : "border-line text-ink hover:bg-blue-50 hover:text-blue-800"
                )}
              >
                <GraduationCap className="mr-1.5 size-3.5" />
                Expert Seminars
                <span
                  className={cn(
                    "ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-extrabold",
                    selectedCategory === "expert-seminar"
                      ? "bg-white/20 text-white"
                      : "bg-blue-100 text-blue-800"
                  )}
                >
                  {seminarCount}
                </span>
              </Button>

              <Button
                type="button"
                variant={selectedCategory === "cooking-workshop" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("cooking-workshop")}
                className={cn(
                  "h-9.5 rounded-xl px-4 text-xs font-bold transition-all",
                  selectedCategory === "cooking-workshop"
                    ? "bg-amber-600 text-white shadow-xs hover:bg-amber-700"
                    : "border-line text-ink hover:bg-amber-50 hover:text-amber-800"
                )}
              >
                <UtensilsCrossed className="mr-1.5 size-3.5" />
                Cooking &amp; Cuisine
                <span
                  className={cn(
                    "ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-extrabold",
                    selectedCategory === "cooking-workshop"
                      ? "bg-white/20 text-white"
                      : "bg-amber-100 text-amber-800"
                  )}
                >
                  {cookingCount}
                </span>
              </Button>
            </>
          )}
        </div>

        <Separator className="bg-line" />

        {/* Secondary Bar: Country Filters and Search */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {/* Country selector */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-ink-muted mr-1">
              Country:
            </span>
            {availableCountries.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCountry(c.id)}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors",
                  selectedCountry === c.id
                    ? "bg-sky text-brand font-bold shadow-2xs"
                    : "text-ink-muted hover:bg-mist hover:text-ink"
                )}
              >
                {c.flag && (
                  <span className="grid size-3.5 shrink-0 place-items-center overflow-hidden rounded-full">
                    <Image
                      src={c.flag}
                      alt={c.label}
                      width={14}
                      height={14}
                      unoptimized
                      className="size-full object-cover"
                    />
                  </span>
                )}
                <span>{c.label}</span>
              </button>
            ))}


          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-ink-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search activities, topics, schools..."
              className="w-full rounded-xl border border-line bg-mist/40 pl-9 pr-8 py-2 text-xs text-ink placeholder:text-ink-muted focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Count & Filter Reset */}
      {(selectedCategory !== "ALL" ||
        selectedCountry !== "ALL" ||
        searchQuery) && (
          <div className="flex items-center justify-between text-xs text-ink-muted px-1">
            <span>
              Showing <strong>{filteredActivities.length}</strong> of{" "}
              {totalCount} activities
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("ALL")
                setSelectedCountry("ALL")
                setSearchQuery("")
              }}
              className="font-bold text-brand hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      {/* ========================================================= */}
      {/* Activity Cards List                                       */}
      {/* ========================================================= */}
      {filteredActivities.length === 0 ? (
        <Card className="rounded-2xl border-2 border-dashed border-line bg-mist/30 p-12 text-center">
          <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-white shadow-xs text-ink-muted">
            <Info className="size-6" />
          </div>
          <h3 className="mt-4 text-base font-bold text-ink">
            No activities matched your search criteria
          </h3>
          <p className="mt-1 text-xs text-ink-muted">
            Try adjusting your category, country filter, or search keywords.
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedCategory("ALL")
              setSelectedCountry("ALL")
              setSearchQuery("")
            }}
            className="mt-4 text-xs font-bold"
          >
            Reset Filters
          </Button>
        </Card>
      ) : (
        <div className="space-y-12">
          {filteredActivities.map((activity, actIdx) => (
            <Card
              key={activity.id}
              id={activity.id}
              className="scroll-mt-24 overflow-hidden rounded-2xl border-2 border-brand/15 bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              {/* Card Header Bar */}
              <div className="border-b border-line bg-[linear-gradient(135deg,rgba(0,102,179,0.04),rgba(46,125,50,0.04))] p-5 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {/* Category & Country Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider",
                        activity.categoryBadgeColor
                      )}
                    >
                      {activity.categoryLabel}
                    </span>

                    <span className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-ink shadow-2xs">
                      <span className="grid size-4 shrink-0 place-items-center overflow-hidden rounded-full">
                        <Image
                          src={`/flags/${activity.countryCode}.svg`}
                          alt={activity.country}
                          width={16}
                          height={16}
                          unoptimized
                          className="size-full object-cover"
                        />
                      </span>
                      <span>{activity.country}</span>
                    </span>

                    <span className="flex items-center gap-1 text-xs font-medium text-ink-muted">
                      <Calendar className="size-3.5 text-brand" />
                      <span>{activity.dateOrPeriod}</span>
                    </span>
                  </div>

                  {/* Host School Emblem & Link */}
                  <Link
                    href={`/partners/${activity.hostPartnerSlug}`}
                    className="group inline-flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-1.5 text-xs font-semibold text-brand shadow-2xs transition-all hover:border-brand/40 hover:bg-sky-soft"
                  >
                    <span className="grid size-5 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-white">
                      <Image
                        src={activity.partnerEmblem}
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                        className="size-full object-contain"
                      />
                    </span>
                    <span className="truncate max-w-[200px] sm:max-w-[280px]">
                      {activity.hostSchool}
                    </span>
                    <ChevronRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

                {/* Title & Subtitle */}
                <div className="mt-4">
                  <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl lg:text-[26px] leading-tight">
                    {activity.title}
                  </h2>
                  {activity.subtitle && (
                    <p className="mt-2 text-sm font-medium text-ink-muted sm:text-base leading-relaxed">
                      {activity.subtitle}
                    </p>
                  )}
                </div>

                {/* Meta specification tags */}
                <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs">
                  <div className="flex items-center gap-1.5 rounded-lg border border-line bg-white/80 px-2.5 py-1 text-ink-muted">
                    <MapPin className="size-3.5 text-brand shrink-0" />
                    <span>{activity.location}</span>
                  </div>

                  {activity.speakerOrLead && (
                    <div className="flex items-center gap-1.5 rounded-lg border border-line bg-white/80 px-2.5 py-1 text-ink-muted">
                      <GraduationCap className="size-3.5 text-emerald-700 shrink-0" />
                      <span>
                        <strong className="text-ink">Speaker:</strong>{" "}
                        {activity.speakerOrLead}
                      </span>
                    </div>
                  )}

                  {activity.targetGroup && (
                    <div className="flex items-center gap-1.5 rounded-lg border border-line bg-white/80 px-2.5 py-1 text-ink-muted">
                      <Users className="size-3.5 text-brand shrink-0" />
                      <span>
                        <strong className="text-ink">Participants:</strong>{" "}
                        {activity.targetGroup}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 space-y-7">
                {/* Featured Headline Image */}
                {activity.featuredImage && (
                  <div className="overflow-hidden rounded-2xl border border-line bg-mist shadow-xs">
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() =>
                        openLightbox(
                          activity.gallery,
                          0,
                          activity.title
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault()
                          openLightbox(activity.gallery, 0, activity.title)
                        }
                      }}
                      className="group relative aspect-16/9 w-full cursor-zoom-in overflow-hidden sm:aspect-21/9"
                    >
                      <Image
                        src={activity.featuredImage}
                        alt={activity.title}
                        fill
                        unoptimized
                        priority={actIdx < 2}
                        className="object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                        <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-ink shadow-md backdrop-blur-xs">
                          <Maximize2 className="size-3.5 text-brand" />
                          Click to enlarge photograph
                        </span>
                      </div>
                    </div>
                    {activity.featuredImageCaption && (
                      <div className="flex items-center justify-between border-t border-line bg-mist/60 px-4 py-2.5 text-xs text-ink-muted">
                        <span className="flex items-center gap-1.5">
                          <Camera className="size-3.5 text-brand shrink-0" />
                          <span>{activity.featuredImageCaption}</span>
                        </span>
                        <span className="shrink-0 font-bold text-leaf text-[11px]">
                          Photo 1 of {activity.gallery.length}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Paragraphs of text */}
                <div className="prose prose-slate max-w-none space-y-4 text-sm sm:text-base leading-[1.75] text-ink/90">
                  {activity.paragraphs.map((p, pIdx) => {
                    // Check if paragraph contains Michelle Obama quote
                    if (p.includes("Michelle Obama cited")) {
                      return (
                        <div
                          key={pIdx}
                          className="rounded-xl border-l-4 border-brand bg-sky-soft/60 p-4 sm:p-5 my-4"
                        >
                          <p className="text-ink leading-relaxed">{p}</p>
                        </div>
                      )
                    }
                    return (
                      <p key={pIdx} className="text-justify sm:text-left">
                        {p}
                      </p>
                    )
                  })}
                </div>

                {/* Dissemination Links (e.g. for Maja Zovko's lecture) */}
                {activity.disseminationLinks &&
                  activity.disseminationLinks.length > 0 && (
                    <div className="rounded-xl border border-line bg-mist/40 p-4 sm:p-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">

                        <span>Public Dissemination &amp; Social Media Coverage</span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2.5">
                        {activity.disseminationLinks.map((link, lIdx) => (
                          <Button
                            key={lIdx}
                            asChild
                            variant="outline"
                            size="sm"
                            className="h-8.5 rounded-lg border-line bg-white text-xs font-bold text-brand hover:border-brand/40 hover:bg-sky-soft"
                          >
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>{link.label}</span>
                              <ExternalLink className="ml-1.5 size-3" />
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Key Takeaways & Highlights */}
                {activity.keyHighlights &&
                  activity.keyHighlights.length > 0 && (
                    <div className="rounded-xl border border-line bg-mist/30 p-4 sm:p-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-leaf">
                        Key Educational Takeaways &amp; Outcomes
                      </span>
                      <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {activity.keyHighlights.map((hl, hlIdx) => (
                          <li
                            key={hlIdx}
                            className="flex items-start gap-2 text-xs text-ink sm:text-[13px] leading-snug"
                          >
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-leaf" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Photo Gallery Grid */}
                {activity.gallery && activity.gallery.length > 0 && (
                  <div className="pt-5 border-t border-line space-y-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="grid size-6 place-items-center rounded-md bg-mint/20 text-leaf">
                          <Camera className="size-3.5" />
                        </span>
                        <h4 className="text-sm font-bold text-ink sm:text-base">
                          Official Photo Gallery ({activity.gallery.length} Photographs)
                        </h4>
                      </div>
                      <span className="text-xs text-ink-muted">
                        Click any image to enlarge and browse full gallery
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                      {activity.gallery.map((imgSrc, imgIdx) => (
                        <div
                          key={imgIdx}
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            openLightbox(activity.gallery, imgIdx, activity.title)
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault()
                              openLightbox(
                                activity.gallery,
                                imgIdx,
                                activity.title
                              )
                            }
                          }}
                          className="group relative aspect-4/3 cursor-pointer overflow-hidden rounded-xl border border-line bg-mist shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand/40"
                        >
                          <Image
                            src={imgSrc}
                            alt={`${activity.title} - photo ${imgIdx + 1}`}
                            fill
                            unoptimized
                            className="object-cover transition-transform duration-500 group-hover:scale-108"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                            <Maximize2 className="size-5 text-white drop-shadow-md" />
                          </div>
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                            <span className="text-[10px] font-bold text-white drop-shadow-xs">
                              #{imgIdx + 1}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* ========================================================= */}
      {/* Lightbox Modal                                            */}
      {/* ========================================================= */}
      {lightbox.isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Modal Header */}
          <div
            className="absolute top-4 inset-x-4 flex items-center justify-between text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-[70%] truncate">
              <span className="text-xs text-white/70 block">
                {lightbox.title}
              </span>
              <span className="text-sm font-bold">
                Photograph {lightbox.currentIndex + 1} of{" "}
                {lightbox.images.length}
              </span>
            </div>
            <button
              type="button"
              onClick={closeLightbox}
              className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none"
              aria-label="Close lightbox"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* Left Arrow */}
          {lightbox.images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prevLightboxImage()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 grid size-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none z-10"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="size-7" />
            </button>
          )}

          {/* Main Image */}
          <div
            className="relative max-h-[80vh] max-w-[90vw] overflow-hidden rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.images[lightbox.currentIndex]}
              alt={`Photo ${lightbox.currentIndex + 1}`}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl"
            />
          </div>

          {/* Right Arrow */}
          {lightbox.images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                nextLightboxImage()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 grid size-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none z-10"
              aria-label="Next photograph"
            >
              <ChevronRight className="size-7" />
            </button>
          )}

          {/* Bottom Thumbnails Strip */}
          <div
            className="absolute bottom-4 inset-x-4 flex items-center justify-center gap-2 overflow-x-auto py-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.images.map((thumb, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() =>
                  setLightbox((prev) => ({ ...prev, currentIndex: idx }))
                }
                className={cn(
                  "relative size-12 shrink-0 overflow-hidden rounded-lg border-2 transition-all",
                  lightbox.currentIndex === idx
                    ? "border-mint scale-110 shadow-md"
                    : "border-white/30 opacity-60 hover:opacity-100"
                )}
              >
                <img
                  src={thumb}
                  alt=""
                  className="size-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

