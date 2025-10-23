"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, X } from "lucide-react"
import type { BettingSite } from "@/types"

interface TopOffersModalProps {
  sites: BettingSite[]
}

export function TopOffersModal({ sites }: TopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedTerms, setExpandedTerms] = useState<{ [key: number]: boolean }>({})

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore")

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem("hasVisitedBefore", "true")
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!isOpen) return null

  const top3Sites = sites.slice(0, 3)

  const toggleTerms = (siteId: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedTerms((prev) => ({
      ...prev,
      [siteId]: !prev[siteId],
    }))
  }

  const renderStars = (count: number) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < count ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`} />
    ))
  }

  return (
    <div className="hidden md:flex fixed inset-0 bg-black/80 backdrop-blur-sm z-50 items-center justify-center p-4">
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 w-10 h-10 bg-white hover:bg-gray-200 flex items-center justify-center transition-colors border-2 border-black z-10"
      >
        <X className="w-6 h-6 text-black" />
      </button>

      <div className="w-full max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
            Najbolje Sportske Kladionice
          </h2>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-0 w-full px-4 pb-2">
          {top3Sites.map((site: BettingSite, index: number) => {
            const isMiddle = index === 1
            const cardWidth = isMiddle ? "w-[357px]" : "w-[255px]"
            const cardHeight = expandedTerms[site.id] ? "h-auto" : isMiddle ? "h-[386px]" : "h-[370px]"
            const headerHeight = isMiddle ? "h-[115px]" : "h-[109px]"
            const contentHeight = expandedTerms[site.id] ? "min-h-[267px]" : isMiddle ? "h-[267px]" : "h-[255px]"
            const borderColor = isMiddle ? "border-red-600" : "border-white"
            const shadowClass = isMiddle ? "shadow-2xl shadow-red-600/50" : ""

            return (
              <div
                key={site.id}
                className={`overflow-hidden ${cardWidth} ${cardHeight} border-4 ${borderColor} ${shadowClass} relative ${isMiddle ? "z-20" : "z-10"}`}
              >
                <div
                  className={`bg-white ${headerHeight} flex items-center justify-center p-4`}
                  style={{
                    borderTopLeftRadius: "0",
                    borderTopRightRadius: "0",
                  }}
                >
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    width={180}
                    height={80}
                    className="h-18 w-auto object-contain"
                  />
                </div>

                <div
                  className={`bg-black text-white ${contentHeight} flex flex-col p-4 text-center`}
                  style={{
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                  }}
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mt-4 mb-4">{renderStars(site.stars)}</div>

                  {/* Offer text */}
                  <div className="flex-1 flex flex-col justify-center mb-3">
                    <div className={`${isMiddle ? "text-2xl" : "text-xl"} font-bold mb-2`}>{site.bonus}</div>
                    {site.dopBonus && <div className={`${isMiddle ? "text-2xl" : "text-xl"}`}>{site.dopBonus}</div>}
                  </div>

                  {/* Button */}
                  <div className="mb-2">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 text-sm transition-colors border-2 border-white"
                      onClick={() => setIsOpen(false)}
                    >
                      PREUZMI BONUS
                    </a>
                  </div>

                  {/* Terms */}
                  <div className="text-[9px] text-gray-300 leading-tight text-center">
                    18+ | Primjenjuju se Uvjeti | Kockajte se Odgovorno
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="hidden md:flex lg:hidden items-center justify-center gap-0 w-full px-2">
          {top3Sites.map((site: BettingSite, index: number) => {
            const isMiddle = index === 1
            const cardWidth = isMiddle ? "w-[240px]" : "w-[180px]"
            const cardHeight = expandedTerms[site.id] ? "h-auto" : isMiddle ? "h-[280px]" : "h-[260px]"
            const headerHeight = isMiddle ? "h-[80px]" : "h-[75px]"
            const contentHeight = expandedTerms[site.id] ? "min-h-[200px]" : isMiddle ? "h-[200px]" : "h-[185px]"
            const borderColor = isMiddle ? "border-red-600" : "border-white"
            const shadowClass = isMiddle ? "shadow-2xl shadow-red-600/50" : ""

            return (
              <div
                key={site.id}
                className={`overflow-hidden ${cardWidth} ${cardHeight} border-4 ${borderColor} ${shadowClass} relative ${isMiddle ? "z-20" : "z-10"}`}
              >
                <div className={`bg-white ${headerHeight} flex items-center justify-center p-3`}>
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>

                <div className={`bg-black text-white ${contentHeight} flex flex-col p-3 text-center`}>
                  {/* Stars */}
                  <div className="flex justify-center gap-0.5 mb-2">{renderStars(site.stars)}</div>

                  {/* Offer text */}
                  <div className="flex-1 flex flex-col justify-center mb-1">
                    <div className={`${isMiddle ? "text-lg" : "text-base"} font-bold mb-1`}>{site.bonus}</div>
                    {site.dopBonus && <div className={`${isMiddle ? "text-lg" : "text-base"}`}>{site.dopBonus}</div>}
                  </div>

                  {/* Button */}
                  <div className="mb-1">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-3 text-xs transition-colors border-2 border-white"
                      onClick={() => setIsOpen(false)}
                    >
                      PREUZMI BONUS
                    </a>
                  </div>

                  {/* Terms */}
                  <div className="text-[8px] text-gray-300 leading-tight text-center">18+ | Primjenjuju se Uvjeti</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-4 md:mt-8">
          <p className="text-white text-xs md:text-sm font-semibold">
            18+ | Primjenjuju se Uvjeti | Kockajte se Odgovorno
          </p>
        </div>
      </div>
    </div>
  )
}
