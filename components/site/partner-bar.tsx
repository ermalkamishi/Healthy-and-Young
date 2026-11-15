import Image from "next/image"

import { partners } from "@/lib/site-data"

export function PartnerBar() {
  return (
    <div className="relative z-10 mx-auto -mt-2 max-w-[1460px] px-3 sm:px-[30px]">
      <div className="grid items-center gap-5 rounded-2xl border border-[#e0eefa] bg-white/95 px-[18px] py-4 shadow-panel backdrop-blur-sm lg:grid-cols-[1.5fr_3fr] lg:px-[25px]">
        <div>
          <h2 className="text-[26px] leading-tight font-bold text-ink after:mt-1.5 after:block after:h-1 after:w-[35px] after:rounded-full after:bg-mint-bar">
            Our Partners
          </h2>
          <p className="mt-2 text-sm leading-[1.35] text-[#44699a]">
            Five countries, one common goal:
            <br className="hidden sm:block" />{" "}
            healthier and brighter young generations.
          </p>
        </div>

        <ul className="grid grid-cols-5 gap-1 text-center sm:gap-2.5">
          {partners.map((partner) => (
            <li key={partner.code}>
              <a
                href="#partners"
                className="group flex flex-col items-center gap-2 rounded-xl p-1 outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
              >
                <span className="grid size-11 place-items-center overflow-hidden rounded-full border-2 border-[#e6edf2] bg-white shadow-[0_2px_7px_#082e5c19] transition-transform duration-200 group-hover:scale-105 group-hover:shadow-[0_6px_14px_#082e5c26] sm:size-[67px]">
                  <Image
                    src={`/flags/${partner.code}.svg`}
                    alt=""
                    width={67}
                    height={67}
                    unoptimized
                    className="size-full object-cover"
                  />
                </span>
                <span className="text-[10px] leading-tight font-bold text-ink sm:text-sm sm:whitespace-nowrap">
                  {partner.country}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

