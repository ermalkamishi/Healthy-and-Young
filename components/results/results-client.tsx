"use client"

import * as React from "react"
import Image from "next/image"
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  Eye,
  FileCheck2,
  FileText,
  Layers,
  Sparkles,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { brochuresList, type BrochureItem } from "@/lib/results-data"
import ebookImg from "@/assets/images/tiles/ebook.jpg"

export function ResultsClient() {
  const [selectedBrochure, setSelectedBrochure] =
    React.useState<BrochureItem | null>(null)

  return (
    <div className="space-y-12">
      {/* ========================================================= */}
      {/* CARD 1: BROCHURES                                         */}
      {/* ========================================================= */}
      <Card
        id="brochures"
        className="scroll-mt-24 overflow-hidden rounded-2xl border-2 border-brand/20 bg-white shadow-md transition-shadow hover:shadow-lg"
      >
        {/* Card Header */}
        <div className="border-b border-line bg-[linear-gradient(135deg,rgba(0,102,179,0.05),rgba(46,125,50,0.05))] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white">
                Brochures
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-ink shadow-2xs">
                <FileText className="size-3.5 text-brand" />
                <span>5 Official PDF Publications</span>
              </span>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Project Brochures &amp; Publications
            </h2>
            <p className="mt-2 max-w-[800px] text-sm leading-relaxed text-ink-muted sm:text-base">
              Educational brochures and informative handbooks designed by students and teachers
              during project activities and mobilities, covering balanced diets, food science,
              sustainable farming, and food additives.
            </p>
          </div>
        </div>

        {/* Card Body - Grid of 5 Brochures */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brochuresList.map((brochure, idx) => (
              <div
                key={brochure.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
              >
                {/* Thumbnail Preview */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-mist border-b border-line">
                  <Image
                    src={brochure.thumbnailUrl}
                    alt={brochure.title}
                    fill
                    unoptimized
                    priority={idx < 3}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-3.5">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-white drop-shadow-xs">
                      <Eye className="size-3.5" />
                      Click below to view or download
                    </span>
                  </div>
                  {/* File Badge */}
                  <div className="absolute top-3 right-3 rounded-full bg-black/70 px-2.5 py-0.5 text-[10px] font-black text-white backdrop-blur-xs">
                    PDF
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-ink-muted">
                    <span className="flex items-center gap-1">
                      <Layers className="size-3.5 text-brand" />
                      <span>{brochure.pages} {brochure.pages === 1 ? "Page" : "Pages"}</span>
                    </span>
                    <span className="rounded bg-mist px-2 py-0.5 text-[10px] font-bold text-ink">
                      {brochure.fileSize}
                    </span>
                  </div>

                  {/* Title (exact name of the PDF file as requested) */}
                  <h3 className="mt-2.5 text-base font-bold text-ink line-clamp-2 leading-snug group-hover:text-brand transition-colors">
                    {brochure.title}
                  </h3>

                  <p className="mt-2 flex-1 text-xs leading-relaxed text-ink-muted line-clamp-3">
                    {brochure.description}
                  </p>

                  {/* Topics Tags */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {brochure.topics.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-md bg-mist/80 px-2 py-0.5 text-[10px] font-medium text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-5 pt-3.5 border-t border-line flex items-center gap-2">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 h-9 rounded-xl bg-brand text-xs font-bold text-white hover:bg-brand-deep shadow-2xs"
                    >
                      <a
                        href={brochure.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="mr-1.5 size-3.5" />
                        View PDF
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="h-9 rounded-xl border-line px-3 text-xs font-bold text-ink hover:bg-mist"
                    >
                      <a
                        href={brochure.pdfUrl}
                        download={brochure.filename}
                      >
                        <Download className="size-3.5" />
                        <span className="sr-only">Download {brochure.title}</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* ========================================================= */}
      {/* CARD 2: E-BOOK (COMING SOON)                              */}
      {/* ========================================================= */}
      <Card
        id="ebook"
        className="scroll-mt-24 overflow-hidden rounded-2xl border-2 border-emerald-600/25 bg-white shadow-md transition-shadow hover:shadow-lg"
      >
        {/* Card Header */}
        <div className="border-b border-line bg-[linear-gradient(135deg,rgba(46,125,50,0.06),rgba(0,102,179,0.06))] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-600 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white">
                E-Book
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-extrabold text-amber-800 shadow-2xs animate-pulse">

                <span>Coming Soon!</span>
              </span>
            </div>

            <span className="flex items-center gap-1 text-xs font-medium text-ink-muted">
              <Calendar className="size-3.5 text-brand" />
              <span>Publication Target: Autumn 2026</span>
            </span>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              "Healthy and Young" Educational E-Book
            </h2>
            <p className="mt-2 max-w-[800px] text-sm leading-relaxed text-ink-muted sm:text-base">
              The flagship educational publication synthesizing two years of collaborative cross-border
              research, practical school garden models, health literacy workshops, and culinary heritage.
            </p>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
            {/* Visual Book Presentation */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group max-w-[320px] w-full rounded-2xl border-2 border-line bg-gradient-to-br from-mist to-white p-4 shadow-lg transition-transform duration-300 hover:scale-102">
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-mist shadow-inner">
                  <Image
                    src={ebookImg}
                    alt="Healthy and Young E-Book Preview"
                    fill
                    className="object-cover"
                  />
                  {/* Coming Soon Overlay Ribbon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">

                      Coming Soon!
                    </span>
                    <h4 className="mt-2 text-lg font-bold text-white drop-shadow-sm">
                      Healthy and Young Guidebook
                    </h4>
                    <p className="text-[11px] text-white/80">
                      Erasmus+ KA220-SCH Digital Output
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-ink-muted px-1">
                  <span className="font-semibold text-leaf">In Active Editorial Production</span>
                  <span className="font-bold">Autumn 2026</span>
                </div>
              </div>
            </div>

            {/* Editorial Information & Chapter Outline */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-leaf">
                  Publication Overview
                </span>
                <h3 className="mt-1 text-xl font-bold text-ink">
                  A Comprehensive Resource for Students &amp; Educators
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  The editorial team across Türkiye, Italy, Poland, Croatia, and North Macedonia is
                  compiling lessons, student testimonies, scientific presentations, and authentic recipes
                  into an interactive, bilingual digital e-book.
                </p>
              </div>

              {/* 4 Planned Chapters */}
              <div className="rounded-xl border border-line bg-mist/30 p-5 space-y-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  Planned Chapter Structure
                </span>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <div className="flex items-start gap-2.5 rounded-lg border border-line/60 bg-white p-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-md bg-blue-100 text-blue-800 text-xs font-black">
                      1
                    </span>
                    <div>
                      <h5 className="text-xs font-bold text-ink">Healthy Living &amp; Nutrition</h5>
                      <p className="text-[11px] text-ink-muted">WHO pillars, balanced diets &amp; habit tracking.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-lg border border-line/60 bg-white p-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-md bg-emerald-100 text-emerald-800 text-xs font-black">
                      2
                    </span>
                    <div>
                      <h5 className="text-xs font-bold text-ink">From Farm to Fork</h5>
                      <p className="text-[11px] text-ink-muted">Organic gardening, soil health &amp; eco-farming.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-lg border border-line/60 bg-white p-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-md bg-amber-100 text-amber-800 text-xs font-black">
                      3
                    </span>
                    <div>
                      <h5 className="text-xs font-bold text-ink">Food Additives &amp; Preservation</h5>
                      <p className="text-[11px] text-ink-muted">Label literacy, natural fermentation &amp; safety.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-lg border border-line/60 bg-white p-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-md bg-rose-100 text-rose-800 text-xs font-black">
                      4
                    </span>
                    <div>
                      <h5 className="text-xs font-bold text-ink">Zero Food Waste &amp; Future</h5>
                      <p className="text-[11px] text-ink-muted">Circular consumption, upcycling &amp; sustainability.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Notice Banner */}
              <div className="flex items-center gap-3 rounded-xl border border-dashed border-[#b6d4f1] bg-frost p-4 text-xs text-[#35526d]">
                <Clock className="size-5 shrink-0 text-brand" />
                <span>
                  The completed E-Book will be published here in downloadable PDF and interactive flipbook
                  formats following the Final Capstone Dissemination Conference in Istanbul (October 2026).
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

