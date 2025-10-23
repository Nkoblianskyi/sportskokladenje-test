"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, X } from "lucide-react"
import type { BettingSite } from "@/types"

interface TopOffersModalProps {
  sites: BettingSite[]
}

export function TopOffersModal({ sites }: TopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)

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

  const renderStars = (stars: number) => {
    const starElements = []
    const maxStars = 5

    for (let i = 0; i < maxStars; i++) {
      if (i < stars) {
        starElements.push(<Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />)
      } else {
        starElements.push(<Star key={i} className="h-5 w-5 text-gray-300" />)
      }
    }

    return starElements
  }

  const topSite = sites[0]

  if (!topSite || !isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Modal card */}
      <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
        {/* Header with gradient */}
        <div className="relative bg-gradient-to-r from-red-600 via-blue-600 to-red-600 px-6 py-6">
          <h2 className="text-center text-3xl font-bold text-white mb-2 drop-shadow-lg">Najbolja Ponuda</h2>
          <p className="text-center text-white text-sm drop-shadow">Ekskluzivna ponuda za nove igrače</p>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content section */}
        <div className="bg-white px-6 py-8">
          {/* Logo container */}
          <div className="relative bg-gray-900 h-28 w-full max-w-[220px] mx-auto mb-6 rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
            <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain p-4" />
          </div>

          {/* Rating stars */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center justify-center gap-1">{renderStars(topSite.stars)}</div>
            <span className="font-bold text-2xl text-gray-900">{topSite.rating.toFixed(1)}</span>
            <span className="text-gray-500 text-sm">({topSite.reviews} recenzija)</span>
          </div>

          {/* Bonus section */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 text-center border-2 border-amber-400 mb-6 shadow-md">
            <div className="text-amber-700 text-xs uppercase font-bold tracking-wider mb-2">Bonus Dobrodošlice</div>
            <p className="font-bold text-gray-900 text-4xl leading-tight mb-1">{topSite.bonus}</p>
            {topSite.dopBonus && <p className="text-amber-700 font-semibold text-lg">{topSite.dopBonus}</p>}
          </div>

          {/* CTA Button */}
          <a
            href={topSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white text-xl font-bold rounded-xl text-center transition-all shadow-lg hover:shadow-xl mb-4"
            onClick={() => setIsOpen(false)}
          >
            Preuzmi Bonus Sada
          </a>

          {/* Terms */}
          <div className="text-center bg-gray-100 border-2 border-gray-300 rounded-lg p-3">
            <p className="text-xs text-gray-700 font-medium">+18 | Primjenjuju se Uvjeti | Kockajte se Odgovorno</p>
          </div>
        </div>
      </div>
    </div>
  )
}
