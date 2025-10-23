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
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const top3Sites = sites.slice(0, 3)
  const topSite = sites[0] // Get only top 1 site for mobile

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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 w-10 h-10 bg-white hover:bg-gray-200 flex items-center justify-center transition-colors border-2 border-black z-10"
      >
        <X className="w-6 h-6 text-black" />
      </button>

      <div className="w-full max-w-6xl">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-black text-white uppercase tracking-tight">
            Najbolje Sportske Kladionice
          </h2>
        </div>

        <div className="flex md:hidden items-center justify-center w-full">
          <div className="w-full max-w-[320px] border-4 border-red-600 shadow-2xl shadow-red-600/50 overflow-hidden">
            <div className="bg-white h-[100px] flex items-center justify-center p-4">
              <Image
                src={topSite.logo || "/placeholder.svg"}
                alt={topSite.name}
                width={160}
                height={70}
                className="h-16 w-auto object-contain"
              />
            </div>

            <div className="bg-black text-white p-4 text-center">
              <div className="flex justify-center items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-white">{topSite.rating}</span>
                <span className="text-sm text-gray-400">({topSite.reviews} recenzija)</span>
              </div>

              <div className="flex justify-center gap-1 mb-3">{renderStars(topSite.stars)}</div>

              <div className="mb-3">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Bonus</div>
                <div className="text-xl font-bold mb-1">{topSite.bonus}</div>
                {topSite.dopBonus && <div className="text-lg">{topSite.dopBonus}</div>}
              </div>

              <div className="mb-2">
                <a
                  href={topSite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-4 text-sm transition-colors border-2 border-white"
                  onClick={() => setIsOpen(false)}
                >
                  PREUZMI BONUS
                </a>
              </div>

              <div className="text-[9px] text-gray-300 leading-tight">
                18+ | Primjenjuju se Uvjeti | Kockajte se Odgovorno
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex lg:hidden items-center justify-center gap-0 w-full px-2">
          {top3Sites.map((site: BettingSite, index: number) => {
            const isMiddle = index === 1
            const cardWidth = isMiddle ? "w-[260px]" : "w-[200px]"
            const borderColor = isMiddle ? "border-red-600" : "border-white"
            const shadowClass = isMiddle ? "shadow-2xl shadow-red-600/50" : ""

            return (
              <div
                key={site.id}
                className={`overflow-hidden ${cardWidth} border-4 ${borderColor} ${shadowClass} relative ${isMiddle ? "z-20" : "z-10"}`}
              >
                <div className={`bg-white ${isMiddle ? "h-[90px]" : "h-[80px]"} flex items-center justify-center p-3`}>
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    width={140}
                    height={60}
                    className={`${isMiddle ? "h-14" : "h-12"} w-auto object-contain`}
                  />
                </div>

                <div className="bg-black text-white p-3 text-center">
                  <div className="flex justify-center items-center gap-1 mb-1">
                    <span className={`${isMiddle ? "text-xl" : "text-lg"} font-bold text-white`}>{site.rating}</span>
                    <span className="text-xs text-gray-400">({site.reviews})</span>
                  </div>

                  <div className="flex justify-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`${isMiddle ? "w-4 h-4" : "w-3.5 h-3.5"} ${i < site.stars ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}
                      />
                    ))}
                  </div>

                  <div className="mb-2">
                    <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Bonus</div>
                    <div className={`${isMiddle ? "text-lg" : "text-base"} font-bold mb-1 leading-tight`}>
                      {site.bonus}
                    </div>
                    {site.dopBonus && (
                      <div className={`${isMiddle ? "text-base" : "text-sm"} leading-tight`}>{site.dopBonus}</div>
                    )}
                  </div>

                  <div className="mb-1">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-2 text-xs transition-colors border-2 border-white"
                      onClick={() => setIsOpen(false)}
                    >
                      PREUZMI BONUS
                    </a>
                  </div>

                  <div className="text-[8px] text-gray-300 leading-tight">18+ | Primjenjuju se Uvjeti</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="hidden lg:flex items-center justify-center gap-0 w-full px-4 pb-2">
          {top3Sites.map((site: BettingSite, index: number) => {
            const isMiddle = index === 1
            const cardWidth = isMiddle ? "w-[340px]" : "w-[260px]"
            const borderColor = isMiddle ? "border-red-600" : "border-white"
            const shadowClass = isMiddle ? "shadow-2xl shadow-red-600/50" : ""

            return (
              <div
                key={site.id}
                className={`overflow-hidden ${cardWidth} border-4 ${borderColor} ${shadowClass} relative ${isMiddle ? "z-20" : "z-10"}`}
              >
                <div
                  className={`bg-white ${isMiddle ? "h-[110px]" : "h-[100px]"} flex items-center justify-center p-4`}
                >
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    width={180}
                    height={80}
                    className={`${isMiddle ? "h-20" : "h-16"} w-auto object-contain`}
                  />
                </div>

                <div className="bg-black text-white p-4 text-center">
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <span className={`${isMiddle ? "text-2xl" : "text-xl"} font-bold text-white`}>{site.rating}</span>
                    <span className="text-sm text-gray-400">({site.reviews} recenzija)</span>
                  </div>

                  <div className="flex justify-center gap-1 mb-3">{renderStars(site.stars)}</div>

                  <div className="mb-3">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Bonus</div>
                    <div className={`${isMiddle ? "text-2xl" : "text-xl"} font-bold mb-1 leading-tight`}>
                      {site.bonus}
                    </div>
                    {site.dopBonus && (
                      <div className={`${isMiddle ? "text-xl" : "text-lg"} leading-tight`}>{site.dopBonus}</div>
                    )}
                  </div>

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

                  <div className="text-[9px] text-gray-300 leading-tight">
                    18+ | Primjenjuju se Uvjeti | Kockajte se Odgovorno
                  </div>
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
