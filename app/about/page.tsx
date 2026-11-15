import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Apple,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Euro,
  FileCheck2,
  FolderKanban,
  GraduationCap,
  HeartHandshake,
  Layers,
  Leaf,
  MapPin,
  Quote,
  ShieldCheck,
  Sparkles,
  Sprout,
  Trash2,
  Users,
} from "lucide-react"

import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { partners, site } from "@/lib/site-data"
import logoImg from "@/assets/images/logo.png"
import euBadge from "@/assets/images/eu-cofunded.jpg"
import heroImg from "@/assets/images/hero.jpg"

export const metadata: Metadata = {
  title: "About the Project | Healthy and Young",
  description:
    "Learn about the Healthy and Young Erasmus+ KA220-SCH cooperation partnership (2024–2026): goals, methodology, work packages, and European Green Deal alignment.",
  openGraph: {
    title: "About the Healthy and Young Erasmus+ Project",
    description:
      "Promoting healthy adolescent lifestyles, organic farming, and food waste reduction through European school cooperation.",
  },
}

const workPackages = [
  {
    number: "WP1",
    title: "Project Management & Implementation",
    budget: "€24,000.00",
    lead: "Türkiye (Adile Mermerci Anatolian High School)",
    description:
      "Overall administrative oversight, regular online and face-to-face partner meetings, budget auditing, quality evaluation, and transparent risk management.",
    milestones: [
      "1st Transnational Project Meeting (TPM) in Istanbul (Dec 2024)",
      "Virtual Mid-term Review TPM hosted by Croatia (Sept 2025)",
      "Final Planning & Evaluation TPM in North Macedonia (Oct 2026)",
      "Periodic student & teacher satisfaction surveys and quality audits",
    ],
  },
  {
    number: "WP2",
    title: "Healthy Nutrition & Dietary Habits",
    budget: "€38,775.00",
    lead: "Italy & North Macedonia",
    description:
      "Focusing on the biological foundation of healthy adolescent nutrition, vitamin/mineral deficiencies, and the creation of traditional healthy menus.",
    milestones: [
      "LTTA-1 Teacher Training in Skopje/Berovo, North Macedonia (March 2025)",
      "LTTA-2 Student Mobility in Castel di Sangro, Italy (May 2025)",
      "Culinary workshops & masterclasses at the Niko Romito Academy",
      "Completion and translation of Book Chapter 1: 'Healthy Nutrition' (4 lessons)",
    ],
  },
  {
    number: "WP3",
    title: "From Farm to Fork & Organic Agriculture",
    budget: "€34,690.00",
    lead: "Croatia & Türkiye",
    description:
      "Introducing the EU Green Deal 'Farm to Fork' strategy, pesticide-free agriculture, and practical organic farming through living school hobby gardens.",
    milestones: [
      "LTTA-3 Student Mobility in Istanbul, Türkiye (October 2025)",
      "Study visit to Narköy Organic Farm & Zeytinburnu Medicinal Plants Garden",
      "LTTA-4 Student Mobility in Metković & Neretva Delta, Croatia (May 2026)",
      "Establishment of seasonal school hobby gardens in all 4 partner schools",
      "Completion of Book Chapter 2: 'From Farm to Fork and Organic Agriculture' (4 lessons)",
    ],
  },
  {
    number: "WP4",
    title: "Food Waste Prevention & Project Dissemination",
    budget: "€22,535.00",
    lead: "Poland & Türkiye",
    description:
      "Addressing global hunger vs. food waste, creative surplus food management, circular bio-economy, and spreading project outcomes to surrounding schools and families.",
    milestones: [
      "LTTA-5 Student Mobility in Bielsko-Biała & Kraków, Poland (Sept 2026)",
      "Lectures at Agricultural University of Kraków & workshop with REBREAD",
      "International student creative competition for food waste prevention",
      "Completion of Book Chapter 3: 'Food Waste' (4 lessons) & Stop Food Waste E-Magazine",
      "Final Dissemination Conference in Istanbul (October 2026)",
    ],
  },
]

const projectDeliverables = [
  {
    title: "3-Part Educational Guidebook & E-Book",
    icon: BookOpen,
    description:
      "12 comprehensive lesson plans in English and all partner languages covering adolescent nutrition, the Farm to Fork strategy, and food waste prevention, plus 15 traditional healthy recipes.",
  },
  {
    title: "Living School Hobby Gardens",
    icon: Sprout,
    description:
      "Hands-on organic garden plots created in partner schools where students plant seasonal vegetables, study soil biodiversity, and practice organic gardening.",
  },
  {
    title: "Stop Food Waste Youth Magazine & Videos",
    icon: Trash2,
    description:
      "Digital awareness videos, short films, and a student-authored online publication illustrating creative methods to preserve surplus food and reduce household waste.",
  },
  {
    title: "105 International European Mobilities",
    icon: HeartHandshake,
    description:
      "Direct educational exchanges bringing together 36 secondary students and 69 educators across 5 countries, certified through official Europass Mobility documents.",
  },
]

export default function AboutPage() {
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
              <span className="text-sky">About the Project</span>
            </div>

            {/* Header Content */}
            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="grid size-20 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-white/85 bg-white shadow-lg sm:size-24">
                  <Image
                    src={logoImg}
                    alt="Healthy and Young Project Logo"
                    width={96}
                    height={96}
                    priority
                    className="size-full object-contain p-1"
                  />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="bg-mint text-white hover:bg-mint text-[11px] font-bold">
                      Erasmus+ KA220-SCH
                    </Badge>
                    <span className="text-xs text-white/80">
                      Call 2024 · Round 1 KA2
                    </span>
                    <span className="text-xs text-sky font-semibold">
                      Acronym: HAY
                    </span>
                  </div>
                  <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                    Healthy and <span className="text-mint">Young</span>
                  </h1>
                  <p className="mt-2 max-w-[720px] text-sm leading-relaxed text-white/90 sm:text-base">
                    Promoting healthy lifestyles, active European citizenship, and
                    well-being among adolescents through school partnerships,
                    organic farming, and food waste reduction.
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="h-10 bg-mint text-xs font-bold text-white shadow-sm hover:bg-[#2fb169]"
                >
                  <Link href="/#partners">
                    Meet the 5 Partners
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 border-white/40 bg-white/10 text-xs font-bold text-white hover:bg-white hover:text-brand"
                >
                  <a
                    href={site.erasmusUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Erasmus+ Portal
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Key Figures */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Project Code
                </span>
                <span className="mt-1 block text-xs font-bold text-white truncate">
                  KA220-SCH-44381B9F
                </span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Duration
                </span>
                <span className="mt-1 block text-xs font-bold text-white">
                  24 Months (2024–2026)
                </span>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Countries
                </span>
                <span className="mt-1 block text-xs font-bold text-white">
                  5 European Nations
                </span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Direct Mobilities
                </span>
                <span className="mt-1 block text-xs font-bold text-white">
                  105 Participants
                </span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                <span className="block text-[11px] font-medium text-white/70">
                  Target Age
                </span>
                <span className="mt-1 block text-xs font-bold text-white">
                  14–18 Years (Youth)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-8 space-y-12">
          {/* Executive Overview & Philosophy */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.8fr_1fr]">
            <Card className="p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-xs font-black tracking-wider text-leaf uppercase">

                <span>Executive Summary</span>
              </div>
              <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
                What is "Healthy and Young"?
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-[1.75] text-muted-foreground sm:text-base">
                <p>
                  <strong>Healthy and Young (HAY)</strong> is a 2-year Erasmus+
                  Cooperation Partnership in School Education (KA220-SCH) funded
                  by the European Union. Coordinated by{" "}
                  <strong>Adile Mermerci Anatolian High School</strong> in
                  Istanbul, Türkiye, the project brings together four general and
                  vocational secondary schools and a youth-led sustainable
                  development association from <strong>Türkiye, Italy, Poland,
                    Croatia, and North Macedonia</strong>.
                </p>
                <p>
                  The project addresses one of modern Europe&apos;s most urgent youth
                  challenges: the rising prevalence of unbalanced nutrition, fast
                  food reliance, adolescent eating disorders, and physical
                  inactivity. By connecting health directly with sustainable
                  agriculture, the project introduces the{" "}
                  <strong>European Green Deal &quot;Farm to Fork&quot; strategy</strong>{" "}
                  to schools, teaching students how food is produced, the dangers
                  of food additives, and actionable ways to eliminate household
                  food waste.
                </p>
                <p>
                  Throughout the 24-month program, students and teachers will
                  collaborate across borders through five transnational mobilities,
                  hands-on school gardens, and the publication of an educational
                  guidebook with traditional balanced menus from each partner nation.
                </p>
              </div>

              {/* Four Strategic Pillars */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-mist p-4">
                  <div className="flex items-center gap-2 font-bold text-ink">
                    <Apple className="size-4 text-brand" />
                    <span>Balanced Adolescent Diet</span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    Preventing obesity, diabetes, and nutrient deficiencies by
                    fostering healthy daily eating routines in schools and homes.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-mist p-4">
                  <div className="flex items-center gap-2 font-bold text-ink">
                    <Sprout className="size-4 text-mint" />
                    <span>Farm to Fork &amp; Organic Soils</span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    Instilling appreciation for organic agriculture, biodiversity,
                    and living school hobby gardens where students grow seasonal plants.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-mist p-4">
                  <div className="flex items-center gap-2 font-bold text-ink">
                    <Trash2 className="size-4 text-brand" />
                    <span>Zero Food Waste</span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    Highlighting the paradox of global hunger vs. 1/3 of food
                    wasted, empowering youth with surplus food preservation skills.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-mist p-4">
                  <div className="flex items-center gap-2 font-bold text-ink">
                    <GraduationCap className="size-4 text-mint" />
                    <span>21st-Century Core Skills</span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    Enhancing English language fluency, digital publishing,
                    scientific research, and democratic European cooperation.
                  </p>
                </div>
              </div>
            </Card>

            {/* Side Card: The Philosophical Motivation */}
            <div className="space-y-6">
              <Card className="border-brand/30 bg-[linear-gradient(180deg,#ffffff,#f2f8ff)] p-6">
                <div className="flex items-center gap-2 text-xs font-black tracking-wider text-brand uppercase">
                  <Quote className="size-4" />
                  <span>Educational Motivation</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-ink">
                  Health, Happiness &amp; Academic Growth
                </h3>
                <blockquote className="mt-3 border-l-2 border-brand pl-3 text-xs italic text-ink-soft leading-relaxed">
                  &quot;The connection between the health, happiness and academic
                  success of young people is stronger than we think. The most
                  important way to make students happy is to give them a quality
                  lunch.&quot;
                  <footer className="mt-1.5 text-[11px] font-semibold text-brand not-italic">
                    — Nell Noddings, Happiness and Education (Cambridge Univ. Press)
                  </footer>
                </blockquote>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Our survey research in participating schools revealed that many
                  students skip breakfast, experience midday fatigue, and lack
                  access to nutritious lunches. When adolescents are properly
                  nourished and active, their focus, emotional stability, and
                  academic motivation increase dramatically.
                </p>
              </Card>

              {/* The EU Green Deal Context */}
              <Card className="p-6">
                <div className="flex items-center gap-2 text-xs font-black tracking-wider text-leaf uppercase">
                  <Leaf className="size-4" />
                  <span>European Green Deal Context</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-ink">
                  Why Food Waste &amp; Organic Farming?
                </h3>
                <ul className="mt-3 space-y-2.5 text-xs text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-mint" />
                    <span>
                      <strong>870 million people</strong> suffer from hunger
                      globally, yet nearly <strong>1/3 of all food</strong>{" "}
                      produced is wasted every year.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-mint" />
                    <span>
                      Every day, an estimated <strong>5 million loaves of bread</strong>{" "}
                      and over <strong>18 million tons of fruit &amp; vegetables</strong>{" "}
                      are discarded.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-mint" />
                    <span>
                      Adopting the EU &quot;From Farm to Fork&quot; strategy teaches youth
                      to protect water and soil, reduce food miles, and adopt
                      sustainable consumer habits.
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          <Separator />

          {/* Project Work Packages (WP1 to WP4) */}
          <section aria-labelledby="work-packages-title">
            <div className="text-center max-w-[700px] mx-auto">
              <span className="text-xs font-black tracking-wider text-leaf uppercase">
                Structure &amp; Implementation
              </span>
              <h2
                id="work-packages-title"
                className="mt-1 text-2xl font-bold text-ink sm:text-3xl"
              >
                Project Work Packages
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                The 24-month project timeline is structured into 4 cohesive work
                packages dividing responsibility among the 5 partner institutions:
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {workPackages.map((wp) => (
                <Card
                  key={wp.number}
                  className="flex flex-col justify-between p-6 sm:p-7 transition-all duration-200 hover:border-brand/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <Badge className="bg-brand text-white font-extrabold text-xs">
                        {wp.number}
                      </Badge>

                    </div>
                    <h3 className="mt-3 text-lg font-bold text-ink">
                      {wp.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-leaf">
                      Lead: {wp.lead}
                    </p>
                    <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {wp.description}
                    </p>
                  </div>

                  <div className="mt-5 rounded-lg border border-line bg-frost p-3.5">
                    <span className="text-[11px] font-bold text-ink uppercase tracking-wider block">
                      Key Activities &amp; Milestones:
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs text-ink-soft">
                      {wp.milestones.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 shrink-0 text-mint mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <Separator />

          {/* Tangible Outcomes & Deliverables */}
          <section aria-labelledby="deliverables-title">
            <div className="text-center max-w-[700px] mx-auto">
              <span className="text-xs font-black tracking-wider text-leaf uppercase">
                Concrete Results
              </span>
              <h2
                id="deliverables-title"
                className="mt-1 text-2xl font-bold text-ink sm:text-3xl"
              >
                Key Deliverables &amp; Outcomes
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tangible educational resources developed through European
                collaboration to benefit students, families, and partner schools:
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {projectDeliverables.map((item, i) => {
                const Icon = item.icon
                return (
                  <Card
                    key={i}
                    className="p-5 text-center flex flex-col items-center justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div>
                      <span className="grid size-12 place-items-center rounded-full bg-sky-soft text-brand shadow-xs mx-auto mb-3">
                        <Icon className="size-6" />
                      </span>
                      <h3 className="text-sm font-bold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </section>

          <Separator />

          {/* Partner Consortia Overview */}
          <section aria-labelledby="partners-consortia-title">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="text-xs font-black tracking-wider text-leaf uppercase">
                  European Cooperation
                </span>
                <h2
                  id="partners-consortia-title"
                  className="mt-1 text-2xl font-bold text-ink sm:text-3xl"
                >
                  The 5 Participating Partner Institutions
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Click any partner to view their complete institution profile,
                  campus facilities, and project role:
                </p>
              </div>
              <Button asChild variant="outline" className="shrink-0 text-xs">
                <Link href="/#partners">View Partners on Homepage</Link>
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner) => (
                <Link
                  key={partner.slug}
                  href={`/partners/${partner.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-line bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-white shadow-2xs">
                      <Image
                        src={`/flags/${partner.code}.svg`}
                        alt={partner.country}
                        width={48}
                        height={48}
                        unoptimized
                        className="size-full object-cover"
                      />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-ink">
                          {partner.country}
                        </span>
                        {partner.role === "Project Coordinator" ? (
                          <Badge className="h-4 bg-mint px-1.5 py-0 text-[10px] font-semibold text-white hover:bg-mint">
                            Coordinator
                          </Badge>
                        ) : (
                          <Badge
                            variant="secondary"
                            className="h-4 px-1.5 py-0 text-[10px] font-semibold"
                          >
                            Partner
                          </Badge>
                        )}
                      </div>
                      <h3 className="mt-1 text-sm font-bold leading-snug text-ink group-hover:text-brand transition-colors">
                        {partner.school}
                      </h3>
                      <p className="mt-1 text-xs text-ink-muted">
                        {partner.city}, {partner.country}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3.5 flex items-center justify-between border-t border-line/60 pt-2.5 text-xs font-semibold text-brand">
                    <span>Explore Institutional Profile</span>
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* EU Co-funding & Values Box */}
          <Card className="border-[#b6d4f1] bg-[linear-gradient(180deg,#f2f8ff,#ffffff)] p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
              <div className="space-y-2">
                <Badge className="bg-brand text-white text-[11px] font-bold">
                  European Union Values
                </Badge>
                <h3 className="text-lg font-bold text-ink">
                  Committed to European Green &amp; Democratic Principles
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-[760px] leading-relaxed">
                  The implementation of the Healthy and Young project adheres to
                  the core values enshrined in Article 2 of the Treaty on European
                  Union (TEU) and Article 21 of the EU Charter of Fundamental
                  Rights: non-discrimination, respect for human dignity, gender
                  equality, social inclusion, and active democratic participation.
                </p>
              </div>
              <Image
                src={euBadge}
                alt="Co-funded by the European Union"
                sizes="240px"
                className="h-auto w-52 shrink-0 rounded-lg bg-white p-2 shadow-xs border border-line"
              />
            </div>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
