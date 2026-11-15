import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Globe,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
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
import euBadge from "@/assets/images/eu-cofunded.jpg"

export const metadata: Metadata = {
  title: "Our Project Partners | Healthy and Young",
  description:
    "Meet the 5 partner schools and organizations from Türkiye, Italy, Poland, Croatia, and North Macedonia cooperating in the Erasmus+ KA220-SCH Healthy and Young project.",
  openGraph: {
    title: "Our Project Partners | Healthy and Young",
    description:
      "Profiles and roles of the 5 European partner institutions in the Healthy and Young Erasmus+ cooperation partnership.",
  },
}

export default function PartnersPage() {
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
              <span className="text-sky">Our Partners</span>
            </div>

            {/* Header Content */}
            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-mint text-white hover:bg-mint text-[11px] font-bold">
                    Erasmus+ KA220-SCH Consortium
                  </Badge>
                  <span className="text-xs text-white/80">
                    5 European Institutions
                  </span>
                </div>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  Our Project Partners
                </h1>
                <p className="mt-2 max-w-[700px] text-sm leading-relaxed text-white/90 sm:text-base">
                  Five countries, one common goal: healthier and brighter young
                  generations. Explore the schools and non-governmental
                  organization driving the &quot;Healthy and Young&quot;
                  partnership across Europe.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="h-10 bg-mint text-xs font-bold text-white shadow-sm hover:bg-[#2fb169]"
                >
                  <Link href="/about">
                    About the Project
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 border-white/40 bg-white/10 text-xs font-bold text-white hover:bg-white hover:text-brand"
                >
                  <Link href="/">Back to Homepage</Link>
                </Button>
              </div>
            </div>

            {/* Quick Consortium Stats */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Lead Coordinator
                </span>
                <span className="mt-1 block text-xs font-bold text-white">
                  Türkiye (Adile Mermerci)
                </span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Partner Nations
                </span>
                <span className="mt-1 block text-xs font-bold text-white">
                  TR, IT, PL, HR, MK
                </span>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Total Mobilities
                </span>
                <span className="mt-1 block text-xs font-bold text-white">
                  105 Direct Participants
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Cards Section */}
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-8 space-y-12">
          <div className="text-center max-w-[700px] mx-auto">
            <span className="text-xs font-black tracking-wider text-leaf uppercase">
              Participating Organizations
            </span>
            <h2 className="mt-1 text-2xl font-bold text-ink sm:text-3xl">
              Meet the Participating Institutions
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Click any card to access the dedicated partner profile with complete
              school background, facilities, team members, and hosted mobility programs.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <Card
                key={partner.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl"
              >
                <div>
                  {/* Card Top: Flag, Country, Role Badge, and Circular Logo Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-white shadow-2xs transition-transform duration-200 group-hover:scale-105">
                        <Image
                          src={`/flags/${partner.code}.svg`}
                          alt={partner.country}
                          width={48}
                          height={48}
                          unoptimized
                          className="size-full object-cover"
                        />
                      </span>
                      <div>
                        <span className="text-xs font-bold tracking-wider text-ink uppercase block">
                          {partner.country}
                        </span>
                        {partner.role === "Project Coordinator" ? (
                          <Badge className="h-5 bg-mint px-2 text-[10px] font-bold text-white hover:bg-mint mt-0.5">
                            Coordinator
                          </Badge>
                        ) : (
                          <Badge
                            variant="secondary"
                            className="h-5 px-2 text-[10px] font-semibold text-ink-soft mt-0.5"
                          >
                            Partner
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Circular Partner Emblem */}
                    {partner.image && (
                      <span className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-line bg-white p-1 shadow-xs transition-transform duration-200 group-hover:scale-105">
                        <Image
                          src={partner.image}
                          alt={`${partner.school} emblem`}
                          width={56}
                          height={56}
                          unoptimized
                          className="size-full rounded-full object-contain"
                        />
                      </span>
                    )}
                  </div>

                  {/* School Name */}
                  <h3 className="mt-4 text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                    <Link href={`/partners/${partner.slug}`}>
                      {partner.school}
                    </Link>
                  </h3>

                  {/* Location & Institution Details */}
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-ink-muted">
                    <MapPin className="size-3.5 shrink-0 text-mint" />
                    <span className="truncate">{partner.region}</span>
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-ink-soft">
                    {partner.studentCount && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-mist px-2 py-1 font-medium">
                        <GraduationCap className="size-3 text-brand" />
                        {partner.studentCount.split("(")[0].trim()}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 rounded-md bg-mist px-2 py-1 font-medium">
                      <Building2 className="size-3 text-brand" />
                      OID: {partner.oid}
                    </span>
                  </div>

                  {/* Summary Text */}
                  <p className="mt-3.5 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {partner.summary}
                  </p>

                  {/* Hosted Mobility Highlight Tag (if available) */}
                  {partner.hostedMobility && (
                    <div className="mt-4 rounded-xl border border-line/70 bg-frost p-3">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-brand uppercase tracking-wider">
                        <Plane className="size-3" />
                        <span>Hosted Mobility</span>
                      </div>
                      <p className="mt-1 text-xs font-semibold text-ink line-clamp-1">
                        {partner.hostedMobility.title}
                      </p>
                      <p className="text-[11px] text-ink-muted mt-0.5">
                        {partner.hostedMobility.dates} · {partner.city}
                      </p>
                    </div>
                  )}
                </div>

                {/* Card Footer: Action Links */}
                <div className="mt-6 border-t border-line/70 pt-4 flex items-center justify-between gap-2">
                  <Button
                    asChild
                    size="sm"
                    className="bg-brand text-xs font-bold text-white hover:bg-brand-strong"
                  >
                    <Link href={`/partners/${partner.slug}`}>
                      View Profile
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </Button>

                  {partner.website && (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-xs text-ink-soft hover:text-brand"
                    >
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Visit ${partner.school} website`}
                      >
                        <Globe className="size-3.5 mr-1" />
                        Website
                        <ExternalLink className="size-3 ml-0.5 opacity-60" />
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <Separator className="my-8" />

          {/* Partnership Synergy Section (from PDF) */}
          <Card className="p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-xs font-black tracking-wider text-leaf uppercase">
              <HeartHandshake className="size-4" />
              <span>Transnational Synergy</span>
            </div>
            <h2 className="mt-2 text-xl font-bold text-ink sm:text-2xl">
              Why This Partnership Structure?
            </h2>
            <div className="mt-4 space-y-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              <p>
                The <strong>Healthy and Young</strong> partnership was designed
                to bring together diverse, complementary educational strengths:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                <div className="rounded-xl border border-line bg-mist p-4">
                  <h4 className="font-bold text-ink text-xs sm:text-sm">
                    Academic &amp; Language Leadership
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Coordinated by Türkiye&apos;s preparatory school and Poland&apos;s
                    acclaimed Liceum, ensuring strong English editorial standards,
                    project management, and pedagogical rigor.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-mist p-4">
                  <h4 className="font-bold text-ink text-xs sm:text-sm">
                    Sports &amp; Nutritional Science
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Led by Italy&apos;s sports-scientific high school in Abruzzo,
                    bringing expertise in adolescent physiology, sports nutrition,
                    and culinary masterclasses.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-mist p-4">
                  <h4 className="font-bold text-ink text-xs sm:text-sm">
                    Agricultural &amp; Youth Ecology
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Croatia&apos;s Neretva agricultural delta provides living research
                    in Mediterranean biodiversity, while North Macedonia&apos;s ARS
                    PUBLICA leads circular economy education and digital book publishing.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* EU Co-funding Box */}
          <div className="rounded-2xl border border-line bg-[linear-gradient(110deg,#0752ae,#043274)] p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold tracking-wider text-sky uppercase">
                Erasmus+ Co-funded Project
              </span>
              <h3 className="mt-1 text-xl font-bold">
                Healthy and Young · 2024–2026
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-white/85 max-w-[650px] leading-relaxed">
                Cooperation partnerships in school education supported by the
                European Union. All resources produced by the consortium will be
                openly accessible to educators, students, and families across Europe.
              </p>
            </div>
            <Image
              src={euBadge}
              alt="Co-funded by the European Union"
              sizes="240px"
              className="h-auto w-52 shrink-0 rounded-lg bg-white p-2 shadow-md"
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

