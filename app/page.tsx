"use client"

import { bettingSites } from "@/types"
import { Hero } from "@/components/hero"
import { RatingList } from "@/components/rating-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AboutSection } from "@/components/about-section"
import { SafeGamblingSection } from "@/components/safe-gambling-section"
import { MethodologySection } from "@/components/methodology-section"
import { FAQSection } from "@/components/faq-section"
import { BettingTipsSection } from "@/components/betting-tips-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <main className="relative z-10 mx-auto">
        <Hero />
        <RatingList sites={bettingSites} />
        <AboutSection />
        <SafeGamblingSection />
        <MethodologySection />
        <BettingTipsSection />
        <FAQSection />
      </main>
      <TopOffersModal sites={bettingSites} />
    </div>
  )
}
