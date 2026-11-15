import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { tiles } from "@/lib/site-data"

export function FeatureTiles() {
  return (
    <nav
      aria-label="Project sections"
      className="mx-auto mt-[15px] mb-9 max-w-[1460px] px-3 sm:px-[30px]"
    >
      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3.5 min-[1100px]:grid-cols-5">
        {tiles.map(({ title, description, href, image, icon: Icon }) => (
          <li key={title}>
            <Link
              href={href}
              className="group flex h-full flex-col overflow-hidden rounded-[13px] border border-[#edf3f8] bg-white shadow-tile transition-all duration-200 outline-none hover:-translate-y-[3px] hover:shadow-[0_12px_28px_#0d518b26] focus-visible:ring-3 focus-visible:ring-ring/40"
            >
              <div className="relative h-[100px] overflow-hidden sm:h-[112px]">
                <Image
                  src={image}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1100px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="grid flex-1 grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-1 px-[7px] py-[11px] sm:min-h-[93px] sm:gap-2 sm:px-2.5 sm:py-[13px]">
                <span className="relative -mt-[30px] grid size-[34px] place-items-center rounded-full border-[3px] border-white bg-[#0957b9] text-white shadow-[0_3px_9px_#07489422] sm:-mt-[35px] sm:size-[41px]">
                  <Icon className="size-4 sm:size-[18px]" aria-hidden />
                </span>
                <div>
                  <h3 className="text-xs leading-[1.15] font-bold text-ink sm:text-sm">
                    {title}
                  </h3>
                  <p className="mt-[5px] text-[10px] leading-[1.35] text-ink-muted sm:text-[11px]">
                    {description}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="grid size-[22px] place-items-center self-end rounded-full bg-sky-soft text-[#0c58b9] transition-colors group-hover:bg-brand group-hover:text-white sm:size-[29px]"
                >
                  <ChevronRight className="size-3.5 sm:size-4" strokeWidth={2.75} />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

