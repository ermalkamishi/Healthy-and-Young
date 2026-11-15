import type { ReactNode } from "react"
import { FolderOpen } from "lucide-react"

import { Card } from "@/components/ui/card"
import {
  detailSections,
  legal,
  placeholderNotice,
  site,
} from "@/lib/site-data"

function SectionCard({
  id,
  label,
  title,
  children,
}: {
  id: string
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <Card className="mx-auto my-[15px] max-w-[1120px] gap-0 rounded-[17px] border border-line px-[19px] py-[22px] text-base text-ink ring-0 sm:p-[30px]">
        <p className="text-[11px] font-black tracking-[1.6px] text-leaf uppercase">
          {label}
        </p>
        <h2
          id={`${id}-title`}
          className="my-2.5 text-[23px] leading-tight font-bold sm:text-[27px]"
        >
          {title}
        </h2>
        {children}
      </Card>
    </section>
  )
}

export function DetailSections() {
  return (
    <div className="bg-mist px-3 pt-5 pb-[45px] sm:px-5">
      {detailSections.map((section, index) => (
        <SectionCard
          key={section.id}
          id={section.id}
          label={`${site.name} / ${String(index + 1).padStart(2, "0")}`}
          title={section.title}
        >
          <p className="mb-3.5 leading-[1.65] text-muted-foreground">
            {section.description}
          </p>
          <div className="flex items-start gap-2.5 rounded-[9px] border border-dashed border-[#b6d4f1] bg-frost p-[13px] text-[13px] leading-normal text-[#55718a]">
            <FolderOpen
              className="mt-px size-4 shrink-0 text-[#7d9bbd]"
              aria-hidden
            />
            <span>{placeholderNotice}</span>
          </div>
        </SectionCard>
      ))}

      <SectionCard
        id="disclaimer"
        label="Legal information"
        title="Disclaimer & Copyright"
      >
        <div className="space-y-3.5">
          {legal.map((item) => (
            <p
              key={item.label}
              className="leading-[1.65] text-muted-foreground"
            >
              <strong className="font-bold text-ink-soft">{item.label}:</strong>{" "}
              {item.text}
            </p>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
