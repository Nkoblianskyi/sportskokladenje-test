import type { BettingSite } from "@/types"
import { SiteCard } from "./site-card"

interface RatingListProps {
  sites: BettingSite[]
}

export function RatingList({ sites }: RatingListProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">

        <div className="space-y-6">
          {sites.map((site, index) => (
            <SiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
