"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Menu,
  Sprout,
  UtensilsCrossed,
} from "lucide-react"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navItems, partners, site, lttasList, tpmsList } from "@/lib/site-data"
import euBadge from "@/assets/images/eu-cofunded.jpg"
import logoImg from "@/assets/images/logo.png"

/** Every section id the scroll-spy watches, excluding the page top. */
const watchedIds = navItems
  .flatMap((item) => item.sections)
  .filter((id) => id !== "top")

/** Distance (px) below the viewport top at which a section counts as active. */
const SPY_OFFSET = 120

function useActiveSection() {
  const [active, setActive] = React.useState("top")
  const pathname = usePathname()

  React.useEffect(() => {
    if (pathname !== "/") return

    let frame = 0

    const update = () => {
      frame = 0
      const doc = document.documentElement
      const atBottom =
        window.innerHeight + window.scrollY >= doc.scrollHeight - 4

      if (atBottom) {
        setActive("contact")
        return
      }

      let current = "top"
      let bestTop = -Infinity
      for (const id of watchedIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top - SPY_OFFSET
        if (top <= 0 && top > bestTop) {
          bestTop = top
          current = id
        }
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [pathname])

  return active
}

function ErasmusLink({ className }: { className?: string }) {
  return (
    <Button
      asChild
      className={cn(
        "h-auto rounded-[10px] bg-mint px-[18px] py-3 text-[13px] font-bold text-white shadow-sm hover:bg-[#2fb169] focus-visible:ring-white/60",
        className
      )}
    >
      <a href={site.erasmusUrl} target="_blank" rel="noopener noreferrer">
        Erasmus+
        <ArrowUpRight data-icon="inline-end" className="size-4" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </Button>
  )
}

export function SiteHeader() {
  const active = useActiveSection()
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [partnersOpen, setPartnersOpen] = React.useState(false)
  const [mobilitiesOpen, setMobilitiesOpen] = React.useState(false)
  const [activitiesOpen, setActivitiesOpen] = React.useState(false)
  const [mobilePartnersOpen, setMobilePartnersOpen] = React.useState(false)
  const [mobileMobilitiesOpen, setMobileMobilitiesOpen] = React.useState(false)
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = React.useState(false)

  const isHome = pathname === "/"
  const isPartnersActive =
    pathname.startsWith("/partners") || (isHome && active === "partners")
  const isMobilitiesActive =
    pathname.startsWith("/mobilities") || (isHome && active === "mobilities")
  const isActivitiesActive =
    pathname.startsWith("/activities") || (isHome && active === "activities")
  const isResultsActive =
    pathname.startsWith("/results") || (isHome && active === "results")
  const isGalleryActive =
    pathname.startsWith("/gallery") || (isHome && active === "gallery")

  const isActive = (item: (typeof navItems)[number]) => {
    if (item.href === "/about") return pathname === "/about"
    if (item.label === "Partners" || item.href === "/partners") return isPartnersActive
    if (item.label === "Mobilities" || item.href === "/mobilities") return isMobilitiesActive
    if (item.label === "Activities" || item.href === "/activities") return isActivitiesActive
    if (item.label === "Results" || item.href === "/results") return isResultsActive
    if (item.label === "Gallery" || item.href === "/gallery") return isGalleryActive
    if (!isHome) return false
    return item.sections.includes(active)
  }

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#") && isHome) {
      e.preventDefault()
      const targetId = href.replace("/#", "")
      const target =
        targetId === "top"
          ? document.body
          : document.getElementById(targetId)
      if (target) {
        const behavior: ScrollBehavior = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth"
        target.scrollIntoView({ behavior, block: "start" })
        history.replaceState(null, "", `#${targetId}`)
      }
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-[linear-gradient(110deg,var(--color-brand-strong),var(--color-brand-deep))] text-white shadow-header">
      <div className="mx-auto flex min-h-[65px] max-w-[1460px] items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 sm:gap-3 rounded-md leading-[1.05] whitespace-nowrap outline-none focus-visible:ring-3 focus-visible:ring-white/50"
        >
          <span className="relative grid size-10 sm:size-11 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-white/80 bg-white shadow-xs transition-transform duration-200 group-hover:scale-105">
            <Image
              src={logoImg}
              alt="Healthy and Young Logo"
              width={44}
              height={44}
              priority
              className="size-full object-contain p-0.5"
            />
          </span>
          <div>
            <span className="block text-[19px] font-extrabold tracking-tight sm:text-[21px]">
              {site.name}
            </span>
            <span className="mt-1 block text-xs font-medium text-white/90">
              {site.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            if (item.label === "Partners") {
              return (
                <DropdownMenu
                  key={item.label}
                  open={partnersOpen}
                  onOpenChange={setPartnersOpen}
                >
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      aria-current={isPartnersActive ? "location" : undefined}
                      className={cn(
                        "group inline-flex items-center gap-1 rounded-[10px] px-3 py-2.5 text-[13px] font-semibold text-white transition-colors outline-none hover:bg-sky hover:text-accent-foreground focus-visible:ring-3 focus-visible:ring-white/50 xl:px-3.5",
                        isPartnersActive && "bg-sky text-accent-foreground"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform duration-200",
                          partnersOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    sideOffset={8}
                    className="w-80 rounded-xl border border-line bg-white p-2 shadow-xl"
                  >
                    <div className="px-2 py-1.5 text-[11px] font-black tracking-wider text-leaf uppercase">
                      Project Partner Profiles
                    </div>
                    {partners.map((partner) => (
                      <DropdownMenuItem key={partner.slug} asChild>
                        <Link
                          href={`/partners/${partner.slug}`}
                          onClick={() => setPartnersOpen(false)}
                          className="flex cursor-pointer items-start gap-2.5 rounded-lg px-2.5 py-2.5 text-xs transition-colors hover:bg-mist focus:bg-mist"
                        >
                          <span className="grid size-6 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-white shadow-2xs mt-0.5">
                            <Image
                              src={`/flags/${partner.code}.svg`}
                              alt=""
                              width={24}
                              height={24}
                              unoptimized
                              className="size-full object-cover"
                            />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-ink truncate">
                                {partner.school}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] text-ink-muted">
                              <span>{partner.country}</span>
                              <span>•</span>
                              <span className="text-leaf font-medium">
                                {partner.role === "Project Coordinator"
                                  ? "Coordinator"
                                  : "Partner"}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator className="my-1 bg-line" />
                    <DropdownMenuItem asChild>
                      <Link
                        href="/partners"
                        onClick={() => setPartnersOpen(false)}
                        className="flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-2 text-xs font-semibold text-brand transition-colors hover:bg-sky-soft hover:text-brand"
                      >
                        <span>View All Partners</span>
                        <ChevronRight className="size-3.5" />
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }

            if (item.label === "Mobilities") {
              return (
                <DropdownMenu
                  key={item.label}
                  open={mobilitiesOpen}
                  onOpenChange={setMobilitiesOpen}
                >
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      aria-current={isMobilitiesActive ? "location" : undefined}
                      className={cn(
                        "group inline-flex items-center gap-1 rounded-[10px] px-3 py-2.5 text-[13px] font-semibold text-white transition-colors outline-none hover:bg-sky hover:text-accent-foreground focus-visible:ring-3 focus-visible:ring-white/50 xl:px-3.5",
                        isMobilitiesActive && "bg-sky text-accent-foreground"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform duration-200",
                          mobilitiesOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    sideOffset={8}
                    className="w-96 max-h-[85vh] overflow-y-auto rounded-xl border border-line bg-white p-2 shadow-xl"
                  >
                    {/* LTTAs Header */}
                    <div className="flex items-center justify-between px-2 py-1.5 text-[11px] font-black tracking-wider text-leaf uppercase">
                      <span>LTTAs (Learning &amp; Training)</span>
                      <span className="text-[10px] font-bold text-ink-muted">5 Mobilities</span>
                    </div>
                    {lttasList.map((ltta) => (
                      <DropdownMenuItem key={ltta.id} asChild>
                        <Link
                          href={`/mobilities/${ltta.id}`}
                          onClick={() => setMobilitiesOpen(false)}
                          className="flex cursor-pointer items-start gap-2.5 rounded-lg px-2.5 py-2 text-xs transition-colors hover:bg-mist focus:bg-mist"
                        >
                          <span className="grid size-6 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-white shadow-2xs mt-0.5">
                            <Image
                              src={`/flags/${ltta.countryCode}.svg`}
                              alt=""
                              width={24}
                              height={24}
                              unoptimized
                              className="size-full object-cover"
                            />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="font-bold text-ink truncate">
                                {ltta.code}: {ltta.city}
                              </span>
                              <span className="rounded bg-mint/15 px-1.5 py-0.5 text-[9px] font-bold text-leaf shrink-0">
                                {ltta.format.split(" ")[0]}
                              </span>
                            </div>
                            <div className="text-[10px] text-ink-muted truncate">
                              {ltta.title}
                            </div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}

                    <DropdownMenuSeparator className="my-1.5 bg-line" />

                    {/* TPMs Header */}
                    <div className="flex items-center justify-between px-2 py-1.5 text-[11px] font-black tracking-wider text-brand uppercase">
                      <span>TPMs (Transnational Meetings)</span>
                      <span className="text-[10px] font-bold text-ink-muted">3 Meetings</span>
                    </div>
                    {tpmsList.map((tpm) => (
                      <DropdownMenuItem key={tpm.id} asChild>
                        <Link
                          href={`/mobilities/${tpm.id}`}
                          onClick={() => setMobilitiesOpen(false)}
                          className="flex cursor-pointer items-start gap-2.5 rounded-lg px-2.5 py-2 text-xs transition-colors hover:bg-mist focus:bg-mist"
                        >
                          <span className="grid size-6 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-white shadow-2xs mt-0.5">
                            <Image
                              src={`/flags/${tpm.countryCode}.svg`}
                              alt=""
                              width={24}
                              height={24}
                              unoptimized
                              className="size-full object-cover"
                            />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="font-bold text-ink truncate">
                                {tpm.code}: {tpm.city}
                              </span>
                              <span className="rounded bg-sky px-1.5 py-0.5 text-[9px] font-bold text-brand shrink-0">
                                {tpm.format.split(" ")[0]}
                              </span>
                            </div>
                            <div className="text-[10px] text-ink-muted truncate">
                              {tpm.title}
                            </div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}

                    <DropdownMenuSeparator className="my-1.5 bg-line" />

                    <DropdownMenuItem asChild>
                      <Link
                        href="/mobilities"
                        onClick={() => setMobilitiesOpen(false)}
                        className="flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-2 text-xs font-semibold text-brand transition-colors hover:bg-sky-soft hover:text-brand"
                      >
                        <span>View All Mobilities &amp; TPMs</span>
                        <ChevronRight className="size-3.5" />
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }

            if (item.label === "Activities") {
              return (
                <DropdownMenu
                  key={item.label}
                  open={activitiesOpen}
                  onOpenChange={setActivitiesOpen}
                >
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      aria-current={isActivitiesActive ? "location" : undefined}
                      className={cn(
                        "group inline-flex items-center gap-1 rounded-[10px] px-3 py-2.5 text-[13px] font-semibold text-white transition-colors outline-none hover:bg-sky hover:text-accent-foreground focus-visible:ring-3 focus-visible:ring-white/50 xl:px-3.5",
                        isActivitiesActive && "bg-sky text-accent-foreground"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform duration-200",
                          activitiesOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    sideOffset={8}
                    className="w-80 rounded-xl border border-line bg-white p-2 shadow-xl"
                  >
                    <div className="px-2.5 py-1.5 text-[10px] font-black uppercase text-brand tracking-wider">
                      Project Activity Tracks
                    </div>

                    <DropdownMenuItem asChild>
                      <Link
                        href="/activities/school-gardens"
                        onClick={() => setActivitiesOpen(false)}
                        className="flex cursor-pointer items-start gap-2.5 rounded-lg px-2.5 py-2.5 text-xs transition-colors hover:bg-mist focus:bg-mist"
                      >
                        <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-emerald-100 text-emerald-800">
                          <Sprout className="size-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1.5">
                            <span className="font-bold text-ink">
                              School Gardens
                            </span>

                          </div>
                          <div className="text-[10px] text-ink-muted truncate">
                            Organic hobby gardens &amp; greenhouses
                          </div>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link
                        href="/activities/expert-seminars"
                        onClick={() => setActivitiesOpen(false)}
                        className="flex cursor-pointer items-start gap-2.5 rounded-lg px-2.5 py-2.5 text-xs transition-colors hover:bg-mist focus:bg-mist"
                      >
                        <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-blue-100 text-blue-800">
                          <GraduationCap className="size-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1.5">
                            <span className="font-bold text-ink">
                              Expert Seminars
                            </span>

                          </div>
                          <div className="text-[10px] text-ink-muted truncate">
                            Clinical dietitians &amp; nutritionists
                          </div>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link
                        href="/activities/cooking-workshops"
                        onClick={() => setActivitiesOpen(false)}
                        className="flex cursor-pointer items-start gap-2.5 rounded-lg px-2.5 py-2.5 text-xs transition-colors hover:bg-mist focus:bg-mist"
                      >
                        <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-amber-100 text-amber-800">
                          <UtensilsCrossed className="size-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1.5">
                            <span className="font-bold text-ink">
                              Cooking Workshops
                            </span>

                          </div>
                          <div className="text-[10px] text-ink-muted truncate">
                            Vocational gastronomy &amp; pizza making
                          </div>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className="my-1.5 bg-line" />

                    <DropdownMenuItem asChild>
                      <Link
                        href="/activities"
                        onClick={() => setActivitiesOpen(false)}
                        className="flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-2 text-xs font-semibold text-brand transition-colors hover:bg-sky-soft hover:text-brand"
                      >
                        <span>View All Activities</span>
                        <ChevronRight className="size-3.5" />
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }

            const isExternalOrPage = !item.href.startsWith("/#")
            if (isExternalOrPage) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item) ? "location" : undefined}
                  className={cn(
                    "rounded-[10px] px-3 py-2.5 text-[13px] font-semibold text-white transition-colors outline-none hover:bg-sky hover:text-accent-foreground focus-visible:ring-3 focus-visible:ring-white/50 xl:px-3.5",
                    isActive(item) && "bg-sky text-accent-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            }

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                aria-current={isActive(item) ? "location" : undefined}
                className={cn(
                  "rounded-[10px] px-3 py-2.5 text-[13px] font-semibold text-white transition-colors outline-none hover:bg-sky hover:text-accent-foreground focus-visible:ring-3 focus-visible:ring-white/50 xl:px-3.5",
                  isActive(item) && "bg-sky text-accent-foreground"
                )}
              >
                {item.label}
              </a>
            )
          })}
          <ErasmusLink className="ml-1.5" />
        </nav>

        {/* Mobile navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon-lg"
              className="text-white hover:bg-white/15 hover:text-white focus-visible:ring-white/50 lg:hidden"
            >
              <Menu className="size-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[88%] gap-0 border-l-0 bg-white p-0 sm:max-w-sm overflow-y-auto"
          >
            <SheetHeader className="bg-[linear-gradient(110deg,var(--color-brand-strong),var(--color-brand-deep))] px-5 pt-5 pb-4 text-white">
              <div className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-white/80 bg-white shadow-xs">
                  <Image
                    src={logoImg}
                    alt="Healthy and Young Logo"
                    width={44}
                    height={44}
                    className="size-full object-contain p-0.5"
                  />
                </span>
                <div>
                  <SheetTitle className="text-lg font-extrabold text-white">
                    {site.name}
                  </SheetTitle>
                  <SheetDescription className="text-white/85">
                    {site.tagline} {site.period}
                  </SheetDescription>
                </div>
              </div>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 p-3">
              {navItems.map((item) => {
                if (item.label === "Partners") {
                  return (
                    <div key={item.label} className="rounded-[10px] overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setMobilePartnersOpen(!mobilePartnersOpen)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-[10px] px-4 py-3 text-[15px] font-semibold text-ink transition-colors outline-none hover:bg-mist",
                          isPartnersActive && "bg-sky text-accent-foreground"
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform duration-200",
                            mobilePartnersOpen && "rotate-180"
                          )}
                        />
                      </button>
                      {mobilePartnersOpen && (
                        <div className="my-1 ml-3 space-y-1 border-l-2 border-brand/30 pl-2">
                          {partners.map((partner) => (
                            <Link
                              key={partner.slug}
                              href={`/partners/${partner.slug}`}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-ink transition-colors hover:bg-mist"
                            >
                              <span className="grid size-4 shrink-0 place-items-center overflow-hidden rounded-full">
                                <Image
                                  src={`/flags/${partner.code}.svg`}
                                  alt=""
                                  width={16}
                                  height={16}
                                  unoptimized
                                  className="size-full object-cover"
                                />
                              </span>
                              <span className="truncate">{partner.school}</span>
                            </Link>
                          ))}
                          <Link
                            href="/partners"
                            onClick={() => setOpen(false)}
                            className="mt-1 flex items-center justify-between rounded-lg px-3 py-2 text-xs font-bold text-brand transition-colors hover:bg-sky-soft"
                          >
                            <span>View All Partners Cards</span>
                            <ChevronRight className="size-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  )
                }

                if (item.label === "Mobilities") {
                  return (
                    <div key={item.label} className="rounded-[10px] overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setMobileMobilitiesOpen(!mobileMobilitiesOpen)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-[10px] px-4 py-3 text-[15px] font-semibold text-ink transition-colors outline-none hover:bg-mist",
                          isMobilitiesActive && "bg-sky text-accent-foreground"
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform duration-200",
                            mobileMobilitiesOpen && "rotate-180"
                          )}
                        />
                      </button>
                      {mobileMobilitiesOpen && (
                        <div className="my-1 ml-3 space-y-1 border-l-2 border-brand/30 pl-2">
                          <div className="px-2 py-1 text-[10px] font-black uppercase text-leaf tracking-wider">
                            LTTAs (Learning &amp; Training)
                          </div>
                          {lttasList.map((ltta) => (
                            <Link
                              key={ltta.id}
                              href={`/mobilities/${ltta.id}`}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-mist"
                            >
                              <span className="grid size-4 shrink-0 place-items-center overflow-hidden rounded-full">
                                <Image
                                  src={`/flags/${ltta.countryCode}.svg`}
                                  alt=""
                                  width={16}
                                  height={16}
                                  unoptimized
                                  className="size-full object-cover"
                                />
                              </span>
                              <span className="truncate">{ltta.code} – {ltta.city}</span>
                            </Link>
                          ))}
                          <div className="mt-2 px-2 py-1 text-[10px] font-black uppercase text-brand tracking-wider">
                            TPMs (Transnational Meetings)
                          </div>
                          {tpmsList.map((tpm) => (
                            <Link
                              key={tpm.id}
                              href={`/mobilities/${tpm.id}`}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-mist"
                            >
                              <span className="grid size-4 shrink-0 place-items-center overflow-hidden rounded-full">
                                <Image
                                  src={`/flags/${tpm.countryCode}.svg`}
                                  alt=""
                                  width={16}
                                  height={16}
                                  unoptimized
                                  className="size-full object-cover"
                                />
                              </span>
                              <span className="truncate">{tpm.code} – {tpm.city}</span>
                            </Link>
                          ))}
                          <Link
                            href="/mobilities"
                            onClick={() => setOpen(false)}
                            className="mt-2 flex items-center justify-between rounded-lg px-3 py-2 text-xs font-bold text-brand transition-colors hover:bg-sky-soft"
                          >
                            <span>View All Mobilities &amp; TPMs</span>
                            <ChevronRight className="size-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  )
                }

                if (item.label === "Activities") {
                  return (
                    <div key={item.label} className="space-y-1">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileActivitiesOpen(!mobileActivitiesOpen)
                        }
                        aria-expanded={mobileActivitiesOpen}
                        className={cn(
                          "flex w-full items-center justify-between rounded-[10px] px-4 py-3 text-[15px] font-semibold transition-colors outline-none hover:bg-mist",
                          isActivitiesActive
                            ? "bg-sky text-accent-foreground"
                            : "text-ink"
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform duration-200",
                            mobileActivitiesOpen && "rotate-180"
                          )}
                        />
                      </button>
                      {mobileActivitiesOpen && (
                        <div className="my-1 ml-3 space-y-1 border-l-2 border-brand/30 pl-2">
                          <Link
                            href="/activities/school-gardens"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-mist"
                          >
                            <span className="grid size-5 shrink-0 place-items-center rounded-md bg-emerald-100 text-emerald-800">
                              <Sprout className="size-3.5" />
                            </span>
                            <span className="truncate">School Gardens</span>
                          </Link>

                          <Link
                            href="/activities/expert-seminars"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-mist"
                          >
                            <span className="grid size-5 shrink-0 place-items-center rounded-md bg-blue-100 text-blue-800">
                              <GraduationCap className="size-3.5" />
                            </span>
                            <span className="truncate">Expert Seminars</span>
                          </Link>

                          <Link
                            href="/activities/cooking-workshops"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-mist"
                          >
                            <span className="grid size-5 shrink-0 place-items-center rounded-md bg-amber-100 text-amber-800">
                              <UtensilsCrossed className="size-3.5" />
                            </span>
                            <span className="truncate">Cooking Workshops</span>
                          </Link>

                          <Link
                            href="/activities"
                            onClick={() => setOpen(false)}
                            className="mt-2 flex items-center justify-between rounded-lg px-3 py-2 text-xs font-bold text-brand transition-colors hover:bg-sky-soft"
                          >
                            <span>View All Activities</span>
                            <ChevronRight className="size-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  )
                }

                const isExternalOrPage = !item.href.startsWith("/#")
                if (isExternalOrPage) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive(item) ? "location" : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-[10px] px-4 py-3 text-[15px] font-semibold text-ink transition-colors outline-none hover:bg-mist focus-visible:ring-3 focus-visible:ring-ring/40",
                        isActive(item) && "bg-sky text-accent-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                }

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item) ? "location" : undefined}
                    onClick={(e) => {
                      setOpen(false)
                      handleNavClick(e, item.href)
                    }}
                    className={cn(
                      "rounded-[10px] px-4 py-3 text-[15px] font-semibold text-ink transition-colors outline-none hover:bg-mist focus-visible:ring-3 focus-visible:ring-ring/40",
                      isActive(item) && "bg-sky text-accent-foreground"
                    )}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>
            <div className="mt-auto flex flex-col gap-4 p-5">
              <ErasmusLink className="w-full" />
              <Separator />
              <Image
                src={euBadge}
                alt="Co-funded by the European Union"
                sizes="280px"
                className="h-auto w-56"
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
