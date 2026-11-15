"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowUpRight, Menu } from "lucide-react"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navItems, site } from "@/lib/site-data"
import euBadge from "@/assets/images/eu-cofunded.jpg"

/** Every section id the scroll-spy watches, excluding the page top. */
const watchedIds = navItems
  .flatMap((item) => item.sections)
  .filter((id) => id !== "top")

/** Distance (px) below the viewport top at which a section counts as active. */
const SPY_OFFSET = 120

function useActiveSection() {
  const [active, setActive] = React.useState("top")

  React.useEffect(() => {
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
  }, [])

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
  const [open, setOpen] = React.useState(false)
  const pendingHash = React.useRef<string | null>(null)

  const isActive = (sections: string[]) => sections.includes(active)

  return (
    <header className="sticky top-0 z-40 bg-[linear-gradient(110deg,var(--color-brand-strong),var(--color-brand-deep))] text-white shadow-header">
      <div className="mx-auto flex min-h-[65px] max-w-[1460px] items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <a
          href="#top"
          className="rounded-md leading-[1.05] whitespace-nowrap outline-none focus-visible:ring-3 focus-visible:ring-white/50"
        >
          <span className="block text-[19px] font-extrabold tracking-tight sm:text-[21px]">
            {site.name}
          </span>
          <span className="mt-1.5 block text-xs font-medium text-white/90">
            {site.tagline}
          </span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive(item.sections) ? "location" : undefined}
              className={cn(
                "rounded-[10px] px-3 py-2.5 text-[13px] font-semibold text-white transition-colors outline-none hover:bg-sky hover:text-accent-foreground focus-visible:ring-3 focus-visible:ring-white/50 xl:px-3.5",
                isActive(item.sections) && "bg-sky text-accent-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
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
            className="w-[86%] gap-0 border-l-0 bg-white p-0 sm:max-w-sm"
            onCloseAutoFocus={(event) => {
              // Scroll to the chosen section only once the sheet has fully
              // closed and the page scroll lock has been released.
              const hash = pendingHash.current
              if (!hash) return
              event.preventDefault()
              pendingHash.current = null
              const behavior: ScrollBehavior = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
              ).matches
                ? "auto"
                : "smooth"
              if (hash === "#top") {
                window.scrollTo({ top: 0, behavior })
              } else {
                document
                  .querySelector(hash)
                  ?.scrollIntoView({ behavior, block: "start" })
              }
              history.replaceState(null, "", hash)
            }}
          >
            <SheetHeader className="bg-[linear-gradient(110deg,var(--color-brand-strong),var(--color-brand-deep))] px-5 pt-5 pb-4 text-white">
              <SheetTitle className="text-lg font-extrabold text-white">
                {site.name}
              </SheetTitle>
              <SheetDescription className="text-white/85">
                {site.tagline} {site.period}
              </SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 p-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.sections) ? "location" : undefined}
                  onClick={(event) => {
                    event.preventDefault()
                    pendingHash.current = item.href
                    setOpen(false)
                  }}
                  className={cn(
                    "rounded-[10px] px-4 py-3 text-[15px] font-semibold text-ink transition-colors outline-none hover:bg-mist focus-visible:ring-3 focus-visible:ring-ring/40",
                    isActive(item.sections) && "bg-sky text-accent-foreground"
                  )}
                >
                  {item.label}
                </a>
              ))}
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
