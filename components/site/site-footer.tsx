import Image from "next/image"

import { site } from "@/lib/site-data"
import euBadge from "@/assets/images/eu-cofunded.jpg"

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-navy px-[25px] py-[22px] text-white">
      <div className="mx-auto flex max-w-[1350px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="max-w-[720px] text-xs leading-[1.65]">
          <strong className="font-bold">
            {site.name} · {site.tagline} 2024–2026
          </strong>
          <br />
          Project website interface based on the approved visual concept. The
          illustrative photographs and placeholders will be replaced with
          authentic project content.
          <br />
          <a
            href="#disclaimer"
            className="rounded-sm underline underline-offset-2 outline-none hover:text-sky focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Disclaimer &amp; Copyright
          </a>
        </p>
        <Image
          src={euBadge}
          alt="Co-funded by the European Union"
          sizes="230px"
          className="h-auto w-[230px] max-w-[60%] rounded-lg bg-white p-1.5 md:max-w-[48%]"
        />
      </div>
    </footer>
  )
}

