import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Globe,
  GraduationCap,
  HeartHandshake,
  Languages,
  MapPin,
  Newspaper,
  Plane,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserCheck,
  Users,
} from "lucide-react"

import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { partners, site } from "@/lib/site-data"
import heroImg from "@/assets/images/hero.jpg"

type PageProps = {
  params: Promise<{ slug: string }>
}

export const instant = false

export async function generateStaticParams() {
  return partners.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const partner = partners.find((p) => p.slug === slug)
  if (!partner) return { title: "Partner Not Found" }

  return {
    title: `${partner.school} (${partner.country})`,
    description: partner.summary,
    openGraph: {
      title: `${partner.school} | ${site.name}`,
      description: partner.summary,
    },
  }
}

export default async function PartnerDetailPage({ params }: PageProps) {
  const { slug } = await params
  const partner = partners.find((p) => p.slug === slug)
  if (!partner) notFound()

  const currentIndex = partners.findIndex((p) => p.slug === slug)
  const prevPartner = partners[(currentIndex - 1 + partners.length) % partners.length]
  const nextPartner = partners[(currentIndex + 1) % partners.length]

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-background">
        {/* Breadcrumb & Hero Banner */}
        <section className="relative isolate overflow-hidden px-4 py-8 text-white sm:px-8 sm:py-12">
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
          {/* Gradient overlays ensuring great text contrast while keeping youth imagery visible */}
          <div
            aria-hidden
            className="absolute inset-0 -z-20 bg-[linear-gradient(105deg,#0752aef0_0%,#053f8be6_45%,#043274d4_75%,#043274aa_100%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(67,191,123,0.22),transparent_60%)]"
          />
          <div className="mx-auto max-w-[1200px]">
            {/* Breadcrumb navigation */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/80">
              <Link
                href="/#top"
                className="transition-colors hover:text-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/#partners"
                className="transition-colors hover:text-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Partners
              </Link>
              <span>/</span>
              <span className="text-sky">{partner.country}</span>
            </div>

            {/* Partner Header */}
            <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4 sm:gap-5">
                <span className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-white/80 bg-white shadow-md sm:size-20">
                  <Image
                    src={`/flags/${partner.code}.svg`}
                    alt={partner.country}
                    width={80}
                    height={80}
                    unoptimized
                    className="size-full object-cover"
                  />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-extrabold tracking-wider text-sky uppercase">
                      {partner.country}
                    </span>
                    {partner.role === "Project Coordinator" ? (
                      <Badge className="h-5 bg-mint px-2 text-[11px] font-bold text-white hover:bg-mint">
                        Project Coordinator
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="h-5 bg-white/20 px-2 text-[11px] font-bold text-white hover:bg-white/30"
                      >
                        Project Partner
                      </Badge>
                    )}
                    <span className="text-xs text-white/70">OID: {partner.oid}</span>
                  </div>
                  <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
                    {partner.school}
                  </h1>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-white/85 sm:text-sm">
                    <MapPin className="size-4 shrink-0 text-mint" />
                    <span>{partner.region}</span>
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {partner.website && (
                  <Button
                    asChild
                    variant="outline"
                    className="h-10 border-white/40 bg-white/10 text-xs font-bold text-white hover:bg-white hover:text-brand"
                  >
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="size-4" />
                      Official Website
                      <ExternalLink className="size-3.5 opacity-70" />
                    </a>
                  </Button>
                )}
                {partner.extraContent?.articlesUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="h-10 border-white/40 bg-white/10 text-xs font-bold text-white hover:bg-white hover:text-brand"
                  >
                    <a
                      href={partner.extraContent.articlesUrl.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Newspaper className="size-4 text-sky" />
                      Erasmus+ Articles
                      <ExternalLink className="size-3.5 opacity-70" />
                    </a>
                  </Button>
                )}
                <Button
                  asChild
                  className="h-10 bg-mint text-xs font-bold text-white shadow-sm hover:bg-[#2fb169]"
                >
                  <Link href="/partners">
                    <ArrowLeft className="size-4" />
                    Back to All Partners
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick stats pills */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Institution Type
                </span>
                <span className="mt-1 block text-xs font-bold text-white">
                  {partner.type.split("–")[1]?.trim() || partner.type}
                </span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  City &amp; Country
                </span>
                <span className="mt-1 block text-xs font-bold text-white">
                  {partner.city}, {partner.country}
                </span>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Organization ID
                </span>
                <span className="mt-1 block text-xs font-bold text-white">
                  {partner.oid}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content Body */}
        <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.85fr_1fr]">
            {/* Main Column */}
            <div className="space-y-8">
              {/* School Description / About the organization */}
              <Card className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5 text-xs font-black tracking-wider text-leaf uppercase">
                      <Building2 className="size-4" />
                      <span>About the Institution</span>
                    </div>
                    <h2 className="mt-2 text-xl font-bold text-ink sm:text-2xl">
                      {partner.extraContent?.history ? "School Description" : "Background & Profile"}
                    </h2>
                    {partner.extraContent?.history && (
                      <p className="mt-1 text-sm font-semibold text-brand">
                        {partner.school}
                      </p>
                    )}
                  </div>

                  {partner.image && (
                    <div className="grid size-20 sm:size-24 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-line bg-white p-1 shadow-md transition-transform duration-200 hover:scale-105">
                      <Image
                        src={partner.image}
                        alt={`${partner.school} icon`}
                        width={96}
                        height={96}
                        unoptimized
                        className="size-full rounded-full object-contain"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-4 space-y-3.5 text-sm leading-[1.7] text-muted-foreground sm:text-base">
                  {partner.about.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {partner.studentCount && (
                  <div className="mt-6 flex flex-wrap gap-4 rounded-xl border border-line bg-mist p-4 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 font-semibold text-ink">
                      <GraduationCap className="size-4 text-brand" />
                      <span>{partner.studentCount}</span>
                    </div>
                    {partner.teacherCount && (
                      <div className="flex items-center gap-2 font-semibold text-ink">
                        <Users className="size-4 text-brand" />
                        <span>{partner.teacherCount}</span>
                      </div>
                    )}
                  </div>
                )}
              </Card>

              {/* History and Tradition (if provided) */}
              {partner.extraContent?.history && (
                <Card className="p-6 sm:p-8">
                  <div className="flex items-center gap-2.5 text-xs font-black tracking-wider text-leaf uppercase">
                    <Calendar className="size-4" />
                    <span>School Heritage</span>
                  </div>
                  <h2 className="mt-2 text-xl font-bold text-ink sm:text-2xl">
                    {partner.extraContent.history.title}
                  </h2>
                  <p className="mt-3 text-sm leading-[1.7] text-muted-foreground sm:text-base">
                    {partner.extraContent.history.description}
                  </p>
                </Card>
              )}

              {/* Academic and Student Life (if provided) */}
              {partner.extraContent?.academicLife && (
                <Card className="p-6 sm:p-8">
                  <div className="flex items-center gap-2.5 text-xs font-black tracking-wider text-leaf uppercase">
                    <GraduationCap className="size-4" />
                    <span>Student Life &amp; Cooperation</span>
                  </div>
                  <h2 className="mt-2 text-xl font-bold text-ink sm:text-2xl">
                    {partner.extraContent.academicLife.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {partner.extraContent.academicLife.intro}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {partner.extraContent.academicLife.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 rounded-lg border border-line/70 bg-frost p-3.5 text-xs sm:text-sm font-medium text-ink"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-mint" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* Extra Partner Content: Foreign Languages at School */}
              {partner.extraContent?.languages && (
                <Card className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2.5 text-xs font-black tracking-wider text-leaf uppercase">
                        <Languages className="size-4" />
                        <span>Curriculum &amp; Culture</span>
                      </div>
                      <h2 className="mt-2 text-xl font-bold text-ink sm:text-2xl">
                        {partner.extraContent.languages.title}
                      </h2>
                    </div>
                    <Badge className="bg-sky/20 text-brand border border-sky/30 text-xs font-bold hover:bg-sky/30">
                      Bilingual Tracks &amp; Competitions
                    </Badge>
                  </div>

                  {partner.extraContent.languages.description && (
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {partner.extraContent.languages.description}
                    </p>
                  )}

                  <div className="mt-6 space-y-5">
                    {/* Language competitions */}
                    <div className="rounded-xl border border-line bg-frost p-5">
                      <div className="flex items-center gap-2">
                        <Trophy className="size-4 text-brand shrink-0" />
                        <h3 className="text-sm font-bold text-ink sm:text-base">
                          {partner.extraContent.languages.competitions.title}
                        </h3>
                      </div>
                      <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground">
                        {partner.extraContent.languages.competitions.details.map(
                          (point, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-mint" />
                              <span>{point}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Noc Anglistów (English Night) */}
                    <div className="rounded-xl border border-line bg-frost p-5">
                      <div className="flex items-center gap-2">
                        <BookOpen className="size-4 text-brand shrink-0" />
                        <h3 className="text-sm font-bold text-ink sm:text-base">
                          {partner.extraContent.languages.englishNight.title}
                        </h3>
                      </div>
                      <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground">
                        {partner.extraContent.languages.englishNight.details.map(
                          (point, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-mint" />
                              <span>{point}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Language and cultural events */}
                    <div className="rounded-xl border border-line bg-frost p-5">
                      <div className="flex items-center gap-2">
                        <Sparkles className="size-4 text-brand shrink-0" />
                        <h3 className="text-sm font-bold text-ink sm:text-base">
                          {partner.extraContent.languages.events.title}
                        </h3>
                      </div>
                      <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground">
                        {partner.extraContent.languages.events.details.map(
                          (point, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-mint" />
                              <span>{point}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </Card>
              )}

              {/* Extra Partner Content: Achievements and Activities */}
              {partner.extraContent?.achievements && (
                <Card className="p-6 sm:p-8">
                  <div className="flex items-center gap-2.5 text-xs font-black tracking-wider text-leaf uppercase">
                    <Award className="size-4" />
                    <span>Excellence &amp; Extracurricular</span>
                  </div>
                  <h2 className="mt-2 text-xl font-bold text-ink sm:text-2xl">
                    {partner.extraContent.achievements.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {partner.extraContent.achievements.intro}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {partner.extraContent.achievements.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 rounded-lg border border-line/70 bg-mist p-3.5 text-xs sm:text-sm font-medium text-ink"
                      >
                        <Trophy className="mt-0.5 size-4 shrink-0 text-brand" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {partner.extraContent.achievements.guestMeetings && (
                    <div className="mt-4 rounded-lg border border-sky/30 bg-sky-soft p-3.5 text-xs sm:text-sm text-brand font-medium">
                      {partner.extraContent.achievements.guestMeetings}
                    </div>
                  )}
                </Card>
              )}

              {/* Extra Partner Content: School Community and Values */}
              {partner.extraContent?.values && (
                <Card className="p-6 sm:p-8">
                  <div className="flex items-center gap-2.5 text-xs font-black tracking-wider text-leaf uppercase">
                    <HeartHandshake className="size-4" />
                    <span>Community &amp; Shared Identity</span>
                  </div>
                  <h2 className="mt-2 text-xl font-bold text-ink sm:text-2xl">
                    {partner.extraContent.values.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {partner.extraContent.values.intro}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {partner.extraContent.values.points.map((pt, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 rounded-lg border border-line/60 bg-frost p-3 text-xs sm:text-sm text-ink-soft"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-mint" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {partner.extraContent.values.highlight && (
                    <div className="mt-5 rounded-xl border border-mint/40 bg-mint/10 p-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-leaf uppercase">
                        <Sparkles className="size-4 text-mint" />
                        <span>Community Highlight</span>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm font-medium text-ink leading-relaxed">
                        {partner.extraContent.values.highlight}
                      </p>
                    </div>
                  )}
                </Card>
              )}

              {/* Live Web Resources & Erasmus+ Articles Callout */}
              {partner.extraContent?.articlesUrl && (
                <Card className="p-6 sm:p-8 bg-gradient-to-br from-brand/5 via-sky-soft/30 to-white border border-brand/20">
                  <div className="flex items-center gap-2 text-xs font-black tracking-wider text-brand uppercase">
                    <Newspaper className="size-4" />
                    <span>School Publications</span>
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-ink sm:text-xl">
                    Articles about School Activities – Erasmus+ Programme
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Explore active coverage of international projects, school initiatives, and student mobilities directly on the official school website:
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="bg-brand text-xs font-bold text-white hover:bg-brand-strong"
                    >
                      <a
                        href={partner.extraContent.articlesUrl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Newspaper className="size-4" />
                        {partner.extraContent.articlesUrl.label}
                        <ExternalLink className="size-3.5 opacity-70" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="text-xs font-bold border-brand/30 text-brand hover:bg-sky-soft"
                    >
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="size-4" />
                        Main School Website
                        <ExternalLink className="size-3.5 opacity-70" />
                      </a>
                    </Button>
                  </div>
                </Card>
              )}

              {/* Responsibilities in the Project (only rendered if defined) */}
              {partner.projectResponsibilities && partner.projectResponsibilities.length > 0 && (
                <Card className="p-6 sm:p-8">
                  <div className="flex items-center gap-2.5 text-xs font-black tracking-wider text-leaf uppercase">
                    <ShieldCheck className="size-4" />
                    <span>Healthy &amp; Young Project Tasks</span>
                  </div>
                  <h2 className="mt-2 text-xl font-bold text-ink sm:text-2xl">
                    Responsibilities &amp; Work Packages
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Key responsibilities assigned to {partner.school} within the
                    official Erasmus+ KA220-SCH cooperation agreement:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {partner.projectResponsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 rounded-lg border border-line/60 bg-frost p-3.5 text-sm font-medium text-ink"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-mint" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>

            {/* Side Column */}
            <div className="space-y-6">
              {/* Campus Facilities */}
              <Card className="p-6">
                <div className="flex items-center gap-2 text-xs font-black tracking-wider text-leaf uppercase">
                  <Building2 className="size-4" />
                  <span>Facilities &amp; Environment</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-ink">
                  {partner.extraContent ? "Educational Environment" : "Campus Resources"}
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-ink-soft">
                  {partner.facilities.map((fac, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-mint" />
                      <span>{fac}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Past European Experience / Institutional Highlights */}
              {partner.previousExperience && partner.previousExperience.length > 0 && (
                <Card className="p-6">
                  <div className="flex items-center gap-2 text-xs font-black tracking-wider text-leaf uppercase">
                    <ShieldCheck className="size-4" />
                    <span>{partner.extraContent ? "Key Highlights" : "International Background"}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-ink">
                    {partner.extraContent ? "Institutional Highlights" : "Past Erasmus+ Projects"}
                  </h3>
                  <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                    {partner.previousExperience.map((exp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-brand" />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          </div>

          <Separator className="my-10" />

          {/* Partner Carousel / Navigation */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href={`/partners/${prevPartner.slug}`}>
                <ArrowLeft className="size-4" />
                Previous: {prevPartner.country}
              </Link>
            </Button>
            <div className="text-center">
              <span className="text-xs text-muted-foreground">
                Partner {currentIndex + 1} of {partners.length}
              </span>
            </div>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href={`/partners/${nextPartner.slug}`}>
                Next: {nextPartner.country}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

