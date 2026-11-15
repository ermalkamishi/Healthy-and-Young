import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { site } from "@/lib/site-data"
import heroImg from "@/assets/images/hero.jpg"
import logoImg from "@/assets/images/logo.png"
import euBadge from "@/assets/images/eu-cofunded.jpg"

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      {/* Background photo with the prototype's light-blue fade */}
      <Image
        src={heroImg}
        alt=""
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center] sm:object-right"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#dcf1ff_3%,#daecfa_38%,rgba(206,230,255,.48)_64%,rgba(187,222,249,.15))]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#dff2fffa_0%,#def2ffeb_44%,transparent_78%)] max-sm:bg-[linear-gradient(180deg,#dff2fff5_0%,#def2ffe6_70%,#def2ffb3_100%)]"
      />

      <div className="mx-auto grid min-h-[350px] max-w-[1460px] grid-cols-1 items-center gap-x-5 gap-y-4 px-4 pt-6 pb-10 sm:grid-cols-[180px_minmax(0,1fr)] sm:px-8 sm:py-6 md:grid-cols-[220px_minmax(0,1fr)] min-[1100px]:grid-cols-[280px_minmax(0,1fr)_230px]">
        <Image
          src={logoImg}
          alt="Healthy and Young Erasmus+ project logo"
          sizes="(min-width: 1100px) 275px, (min-width: 768px) 220px, 180px"
          preload
          className="aspect-square w-32 max-w-[275px] object-contain drop-shadow-[0_6px_10px_#07418628] sm:w-full"
        />

        <div>
          <p className="text-[11px] font-extrabold tracking-[2px] text-[#1553a2] uppercase sm:text-sm">
            {site.tagline} {site.period}
          </p>
          <h1
            id="hero-title"
            className="mt-3 mb-[15px] text-[clamp(2.25rem,4.5vw,4.25rem)] leading-[1.03] font-extrabold tracking-[-0.03em] text-hero-title min-[1100px]:whitespace-nowrap"
          >
            Healthy and <span className="text-young">Young</span>
          </h1>
          <p className="max-w-[500px] text-[15px] leading-[1.45] text-[#113665] sm:text-[17px]">
            {site.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <Button
              asChild
              className="h-auto rounded-[10px] border-[#1153b8] bg-brand px-5 py-3.5 text-[13px] font-extrabold text-white shadow-[0_6px_16px_#0b4fbe33] hover:bg-brand-strong"
            >
              <Link href="/about">
                Discover Our Project
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-[10px] border-[#1153b8] bg-white px-5 py-3.5 text-[13px] font-extrabold text-[#0950b5] hover:bg-sky-soft hover:text-[#0950b5]"
            >
              <a href="#activities">Our Activities</a>
            </Button>
          </div>
        </div>

        <div className="mt-2 w-full max-w-[200px] self-start rounded-[10px] bg-white/90 px-3 py-2.5 shadow-[0_6px_18px_#0b5aa018] backdrop-blur-sm sm:col-start-2 sm:max-w-[280px] min-[1100px]:col-start-3 min-[1100px]:max-w-none">
          <Image
            src={euBadge}
            alt="Co-funded by the European Union"
            sizes="(min-width: 1100px) 210px, 260px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}

