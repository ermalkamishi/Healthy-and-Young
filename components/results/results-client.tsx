"use client"

import * as React from "react"
import Image from "next/image"
import {
  BookOpen,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Layers,
  Maximize2,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { brochuresList, ebookData } from "@/lib/results-data"

export function ResultsClient() {
  const [showInlineReader, setShowInlineReader] = React.useState(false)
  const [activePage, setActivePage] = React.useState(1)
  const readerRef = React.useRef<HTMLDivElement | null>(null)

  const openReaderAtPage = (page: number) => {
    setActivePage(page)
    setShowInlineReader(true)
    setTimeout(() => {
      readerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 60)
  }

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
      {/* CARD 2: E-BOOK (PUBLISHED & VIEWABLE PDF)                 */}
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
            </div>

            <span className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted">
              <BookOpen className="size-3.5 text-emerald-600" />
              <span>Production: {ebookData.producer}</span>
            </span>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              &ldquo;Healthy and Young&rdquo; Educational E-Book
            </h2>
            <p className="mt-2 max-w-[820px] text-sm leading-relaxed text-ink-muted sm:text-base">
              {ebookData.subtitle}.
            </p>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Visual Book Cover Presentation + Actions */}
            <div className="lg:col-span-6 space-y-4">
              <button
                type="button"
                onClick={() => openReaderAtPage(1)}
                className="group relative block w-full overflow-hidden rounded-2xl border-2 border-line bg-mist shadow-lg transition-all duration-300 hover:border-emerald-600/50 hover:shadow-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                aria-label="Open Healthy and Young E-Book inline PDF viewer"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-[#16325b]">
                  <Image
                    src={ebookData.coverUrl}
                    alt={ebookData.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Hover Read Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between p-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-extrabold text-white shadow-md">
                      <Eye className="size-4" />
                      Click to Read E-Book Here
                    </span>
                  </div>
                </div>
              </button>

              {/* Primary E-Book Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                <Button
                  type="button"
                  onClick={() =>
                    showInlineReader
                      ? setShowInlineReader(false)
                      : openReaderAtPage(activePage)
                  }
                  className="flex-1 min-w-[170px] h-11 rounded-xl bg-emerald-600 text-xs sm:text-sm font-bold text-white hover:bg-emerald-700 shadow-sm cursor-pointer"
                >
                  <BookOpen className="mr-2 size-4" />
                  {showInlineReader ? "Hide Inline Reader" : "Read E-Book Here"}
                </Button>

                <Button
                  asChild
                  className="flex-1 min-w-[160px] h-11 rounded-xl bg-brand text-xs sm:text-sm font-bold text-white hover:bg-brand-deep shadow-sm"
                >
                  <a
                    href={ebookData.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Maximize2 className="mr-2 size-4" />
                    Open Full PDF
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-xl border-line px-4 text-xs sm:text-sm font-bold text-ink hover:bg-mist"
                >
                  <a href={ebookData.pdfUrl} download={ebookData.filename}>
                    <Download className="mr-1.5 size-4" />
                    Download
                  </a>
                </Button>
              </div>
            </div>

            {/* Editorial Information & Clickable 4-Part Table of Contents */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-leaf">
                  Publication Overview
                </span>
                <h3 className="mt-1 text-xl font-bold text-ink">
                  A Complete Resource for Students &amp; Educators
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  {ebookData.description}
                </p>
              </div>

              {/* 4 Clickable Chapters */}
              <div className="rounded-xl border border-line bg-mist/30 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">
                    Table of Contents (Click to Jump)
                  </span>
                  <span className="text-[11px] font-semibold text-ink-muted">
                    4 Parts · 109 Pages
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {ebookData.chapters.map((chapter) => (
                    <button
                      key={chapter.number}
                      type="button"
                      onClick={() => openReaderAtPage(chapter.startPage)}
                      className="group/ch flex items-start gap-2.5 rounded-lg border border-line/70 bg-white p-3 text-left transition-all hover:border-brand/50 hover:shadow-xs cursor-pointer"
                    >
                      <span
                        className={`grid size-6 shrink-0 place-items-center rounded-md text-xs font-black ${chapter.colorClass}`}
                      >
                        {chapter.number}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center justify-between gap-1.5">
                          <h5 className="text-xs font-bold text-ink group-hover/ch:text-brand transition-colors leading-snug">
                            {chapter.title}
                          </h5>
                        </div>
                        <p className="mt-0.5 text-[11px] text-ink-muted leading-snug">
                          {chapter.description}
                        </p>
                        <span className="mt-1 inline-block text-[10px] font-bold text-brand/80">
                          {chapter.pages} →
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Inline PDF Viewer */}
          {showInlineReader && (
            <div
              ref={readerRef}
              className="scroll-mt-24 overflow-hidden rounded-2xl border-2 border-brand/25 bg-white shadow-lg"
            >
              {/* Viewer Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-frost px-4 py-3 sm:px-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-ink">
                    <FileText className="size-4 text-brand" />
                    <span>{ebookData.filename}</span>
                  </span>
                  <div className="hidden sm:flex items-center gap-1 ml-2">
                    <button
                      type="button"
                      onClick={() => setActivePage(1)}
                      className={`rounded-md px-2 py-1 text-[11px] font-bold transition-colors cursor-pointer ${activePage === 1
                        ? "bg-brand text-white"
                        : "bg-white text-ink-muted hover:text-ink border border-line"
                        }`}
                    >
                      Cover
                    </button>
                    {ebookData.chapters.map((ch) => (
                      <button
                        key={ch.number}
                        type="button"
                        onClick={() => setActivePage(ch.startPage)}
                        className={`rounded-md px-2 py-1 text-[11px] font-bold transition-colors cursor-pointer ${activePage === ch.startPage
                          ? "bg-brand text-white"
                          : "bg-white text-ink-muted hover:text-ink border border-line"
                          }`}
                      >
                        Part {ch.number}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="h-8 rounded-lg text-xs font-bold"
                  >
                    <a
                      href={`${ebookData.pdfUrl}#page=${activePage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1.5 size-3.5" />
                      New Tab
                    </a>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setShowInlineReader(false)}
                    className="h-8 rounded-lg text-xs font-bold text-ink-muted hover:text-ink cursor-pointer"
                  >
                    <X className="mr-1 size-3.5" />
                    Close
                  </Button>
                </div>
              </div>

              {/* PDF Iframe */}
              <div className="relative w-full bg-[#323639]">
                <iframe
                  key={activePage}
                  src={`${ebookData.pdfUrl}#page=${activePage}&view=FitH`}
                  title={ebookData.title}
                  className="h-[78vh] min-h-[540px] w-full border-0"
                />
              </div>

              {/* Mobile / Browser Fallback Footer */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line bg-mist/40 px-4 py-2.5 text-[11px] text-ink-muted">

                <a
                  href={ebookData.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand hover:underline"
                >
                  Open Fullscreen PDF →
                </a>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

