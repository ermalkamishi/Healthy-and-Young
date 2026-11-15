import { Card } from "@/components/ui/card"
import { legal } from "@/lib/site-data"

export function DetailSections() {
  return (
    <div className="bg-mist px-3 pt-5 pb-[45px] sm:px-5">
      <section id="disclaimer" aria-labelledby="disclaimer-title">
        <Card className="mx-auto my-[15px] max-w-[1120px] gap-0 rounded-[17px] border border-line px-[19px] py-[22px] text-base text-ink ring-0 sm:p-[30px]">
          <p className="text-[11px] font-black tracking-[1.6px] text-leaf uppercase">
            Legal information
          </p>
          <h2
            id="disclaimer-title"
            className="my-2.5 text-[23px] leading-tight font-bold sm:text-[27px]"
          >
            Disclaimer &amp; Copyright
          </h2>
          <div className="mt-3 space-y-3.5">
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
        </Card>
      </section>
    </div>
  )
}
