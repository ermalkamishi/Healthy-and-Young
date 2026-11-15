import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Globe,
  GraduationCap,
  MapPin,
  Plane,
  ShieldCheck,
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

type PageProps = {
  params: Promise<{ slug: string }>
}

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
        <section className="relative isolate overflow-hidden bg-[linear-gradient(110deg,#0752ae,#043274)] px-4 py-8 text-white sm:px-8 sm:py-12">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(67,191,123,0.18),transparent_60%)]"
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
                <Button
                  asChild
                  className="h-10 bg-mint text-xs font-bold text-white shadow-sm hover:bg-[#2fb169]"
                >
                  <Link href="/#partners">
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
                  Project Budget
                </span>
                <span className="mt-1 block text-xs font-bold text-mint">
                  {partner.grantAllocated}
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
              {/* About the organization */}
              <Card className="p-6 sm:p-8">
                <div className="flex items-center gap-2.5 text-xs font-black tracking-wider text-leaf uppercase">
                  <Building2 className="size-4" />
                  <span>About the Institution</span>
                </div>
                <h2 className="mt-2 text-xl font-bold text-ink sm:text-2xl">
                  Background &amp; Profile
                </h2>
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

              {/* Responsibilities in the Project */}
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

              {/* Hosted Mobility Card (if applicable) */}
              {partner.hostedMobility && (
                <Card className="border-brand/30 bg-[linear-gradient(180deg,#ffffff,#f2f8ff)] p-6 sm:p-8">
                  <div className="flex items-center gap-2.5 text-xs font-black tracking-wider text-brand uppercase">
                    <Plane className="size-4" />
                    <span>Hosted Erasmus+ Mobility</span>
                  </div>
                  <h2 className="mt-2 text-xl font-bold text-ink sm:text-2xl">
                    {partner.hostedMobility.title}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-brand/40 bg-white text-brand">
                      <Calendar className="mr-1 size-3" />
                      {partner.hostedMobility.dates}
                    </Badge>
                    <Badge variant="outline" className="border-brand/40 bg-white text-ink-soft">
                      <MapPin className="mr-1 size-3" />
                      {partner.hostedMobility.venue}
                    </Badge>
                  </div>
                  <p className="mt-3 text-sm font-medium text-ink">
                    <strong className="text-brand">Thematic Focus:</strong>{" "}
                    {partner.hostedMobility.focus}
                  </p>

                  <div className="mt-4 rounded-xl border border-line bg-white p-4">
                    <h3 className="text-xs font-bold tracking-wider text-ink-muted uppercase">
                      5-Day Program Outline:
                    </h3>
                    <ul className="mt-2.5 space-y-2 text-xs sm:text-sm text-ink-soft">
                      {partner.hostedMobility.programSummary.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brand" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              )}
            </div>

            {/* Side Column */}
            <div className="space-y-6">
              {/* Key Persons */}
              <Card className="p-6">
                <div className="flex items-center gap-2 text-xs font-black tracking-wider text-leaf uppercase">
                  <UserCheck className="size-4" />
                  <span>Key Project Team</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-ink">
                  Project Authors &amp; Leads
                </h3>
                <div className="mt-4 divide-y divide-line">
                  {partner.keyPersons.map((person, i) => (
                    <div key={i} className={i === 0 ? "pb-4" : "pt-4"}>
                      <h4 className="text-sm font-bold text-ink">{person.name}</h4>
                      <p className="text-xs font-semibold text-mint">{person.role}</p>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {person.bio}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Campus Facilities */}
              <Card className="p-6">
                <div className="flex items-center gap-2 text-xs font-black tracking-wider text-leaf uppercase">
                  <Building2 className="size-4" />
                  <span>Facilities &amp; Environment</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-ink">
                  Campus Resources
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

              {/* Past European Experience */}
              <Card className="p-6">
                <div className="flex items-center gap-2 text-xs font-black tracking-wider text-leaf uppercase">
                  <ShieldCheck className="size-4" />
                  <span>International Background</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-ink">
                  Past Erasmus+ Projects
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
