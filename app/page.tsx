import { DetailSections } from "@/components/site/detail-sections"
import { FeatureTiles } from "@/components/site/feature-tiles"
import { Hero } from "@/components/site/hero"
import { PartnerBar } from "@/components/site/partner-bar"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <PartnerBar />
        <FeatureTiles />
        <DetailSections />
      </main>
      <SiteFooter />
    </>
  )
}
