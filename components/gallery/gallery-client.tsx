"use client"

import * as React from "react"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { gallerySections, type GallerySection } from "@/lib/gallery-data"
import { cn } from "@/lib/utils"

interface LightboxState {
  isOpen: boolean
  images: string[]
  currentIndex: number
  title: string
}

export function GalleryClient() {
  const [activeSectionId, setActiveSectionId] = React.useState<string>("ALL")
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

  const visibleSections = React.useMemo(() => {
    if (activeSectionId === "ALL") return gallerySections
    return gallerySections.filter((s) => s.id === activeSectionId)
  }, [activeSectionId])

  const totalImages = gallerySections.reduce((acc, s) => acc + s.count, 0)

  return (
    <div className="space-y-12">
      {/* ========================================================= */}
      {/* SECTION NAV / FILTER TABS                                 */}
      {/* ========================================================= */}
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-line bg-white p-4 shadow-sm">
        <Button
          type="button"
          variant={activeSectionId === "ALL" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveSectionId("ALL")}
          className={cn(
            "h-9.5 rounded-xl px-4 text-xs font-bold transition-all",
            activeSectionId === "ALL"
              ? "bg-brand text-white shadow-xs hover:bg-brand-deep"
              : "border-line text-ink hover:bg-mist"
          )}
        >
          All Sections
        </Button>

        {gallerySections.map((sec) => (
          <Button
            key={sec.id}
            type="button"
            variant={activeSectionId === sec.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveSectionId(sec.id)}
            className={cn(
              "h-9.5 rounded-xl px-4 text-xs font-bold transition-all",
              activeSectionId === sec.id
                ? "bg-brand text-white shadow-xs hover:bg-brand-deep"
                : "border-line text-ink hover:bg-mist"
            )}
          >
            {sec.title}
          </Button>
        ))}
      </div>

      {/* ========================================================= */}
      {/* SECTIONS & IMAGES (NO DESCRIPTIONS, ONLY TITLES & IMAGES)  */}
      {/* ========================================================= */}
      <div className="space-y-16">
        {visibleSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 space-y-8"
          >
            {/* Section Header: Title and Photo Count Badge */}
            <div className="flex items-center justify-between border-b-2 border-brand/20 pb-4">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                {section.title}
              </h2>

            </div>

            {/* Groups within the Section */}
            <div className="space-y-10">
              {section.groups.map((group) => (
                <div key={group.id} className="space-y-4">
                  {/* Subsection Title */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-ink sm:text-lg">
                      {group.title}
                    </h3>

                  </div>

                  {/* Image Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {group.images.map((imgSrc, imgIdx) => (
                      <div
                        key={imgIdx}
                        role="button"
                        tabIndex={0}
                        onClick={() =>
                          openLightbox(group.images, imgIdx, group.title)
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault()
                            openLightbox(group.images, imgIdx, group.title)
                          }
                        }}
                        className="group relative aspect-4/3 cursor-pointer overflow-hidden rounded-xl border border-line bg-mist shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-md"
                      >
                        <Image
                          src={imgSrc}
                          alt={`${group.title} - photo ${imgIdx + 1}`}
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-500 group-hover:scale-108"
                        />
                        <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                          <Maximize2 className="size-5 text-white drop-shadow-md" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-1.5 text-right opacity-0 transition-opacity group-hover:opacity-100">
                          <span className="text-[10px] font-bold text-white">
                            #{imgIdx + 1}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ========================================================= */}
      {/* LIGHTBOX MODAL                                            */}
      {/* ========================================================= */}
      {lightbox.isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Header */}
          <div
            className="absolute top-4 inset-x-4 flex items-center justify-between text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-[70%] truncate">
              <span className="text-xs text-white/70 block">
                {lightbox.title}
              </span>
              <span className="text-sm font-bold">
                Photo {lightbox.currentIndex + 1} of {lightbox.images.length}
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
            className="relative max-h-[82vh] max-w-[90vw] overflow-hidden rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.images[lightbox.currentIndex]}
              alt={`Photo ${lightbox.currentIndex + 1}`}
              className="max-h-[82vh] max-w-[90vw] object-contain rounded-xl"
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

          {/* Bottom Thumbnails */}
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

