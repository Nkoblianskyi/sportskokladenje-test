"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

export function SiteCard({ site, rank }: SiteCardProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const termsRef = useRef<HTMLDivElement>(null)
  const termsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const limit = isMobile ? 150 : 300
    const shouldShow = site.terms.length > limit

    console.log(
      `${site.name}: ${site.terms.length} символів, ліміт: ${limit}, мобільний: ${isMobile}, показати кнопку: ${shouldShow}`,
    )
    setShowReadMore(shouldShow)
  }, [site.terms, site.name, isMobile])

  const formatVotes = (votes: number | undefined) => {
    if (!votes) return "0"
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const filledStars = Math.floor(site.rating)
  const hasHalfStar = site.rating % 1 !== 0

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsTermsExpanded(!isTermsExpanded)
  }

  const getBadgeColor = () => {
    if (rank === 1) return "bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600"
    if (rank === 2) return "bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600"
    if (rank === 3) return "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600"
    return "bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800"
  }

  const getBorderColor = () => {
    if (rank === 1) return "border-amber-400/50"
    if (rank === 2) return "border-blue-400/50"
    if (rank === 3) return "border-emerald-400/50"
    return "border-slate-300/30"
  }

  const getButtonColor = () => {
    if (rank === 1) return "bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700"
    return "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
  }

  return (
    <div className="block">
      {/* Desktop Layout */}
      <div
        className={`hidden lg:block bg-white rounded-xl border-2 ${getBorderColor()} shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer`}
      >
        <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
          <div
            className={`w-full ${getBadgeColor()} text-white px-6 py-2.5 text-sm font-bold z-20 shadow-lg flex items-center justify-between`}
          >
            <span className="flex items-center gap-2">
              <span className="text-2xl">{rank}</span>
              <span>{rank === 1 ? "TOP IZBOR" : rank === 2 ? "EKSKLUZIVNA PONUDA" : "" }</span>
            </span>
            <span className="text-xs opacity-90">Preporučeno</span>
          </div>

          {/* Main Content */}
          <div className="h-[130px] flex items-center px-4 xl:px-6">
            {/* BOOKMAKER - 28% */}
            <div className="flex-[0_0_28%] flex justify-center items-center h-full pr-2 xl:pr-4">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-3 shadow-md">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[170px] xl:w-[200px] h-[85px] xl:h-[100px] object-contain"
                />
              </div>
            </div>

            {/* BONUS OFFER - 26% */}
            <div className="flex-[0_0_26%] text-center flex flex-col justify-center h-full px-2 xl:px-4">
              <div className="text-xs text-gray-600 uppercase font-semibold mb-1 tracking-wider">
                BONUS DOBRODOŠLICE
              </div>
              <div className="text-lg xl:text-xl font-bold text-slate-900 mb-0.5 leading-tight break-words">
                {site.bonus}
              </div>
              {site.dopBonus && (
                <div className="text-lg xl:text-xl font-bold text-slate-900 leading-tight break-words">
                  {site.dopBonus}
                </div>
              )}
            </div>

            <div className="flex-[0_0_20%] text-center flex flex-col justify-center items-center h-full px-2 xl:px-4">
              <div className="text-[44px] xl:text-[56px] font-bold leading-none text-black mb-1">
                {site.rating.toFixed(1)}
              </div>
              <div className="text-xs text-gray-700 mb-1">Ocijeni! ({formatVotes(site.reviews)})</div>
              <div className="flex justify-center gap-0.5 xl:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 xl:w-5 h-4 xl:h-5 ${
                      i < Math.floor(site.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* VISIT SITE - 26% */}
            <div className="flex-[0_0_26%] text-center flex flex-col justify-center items-center h-full pl-2 xl:pl-4">
              <Button
                className={`${getButtonColor()} text-white font-bold px-2 xl:px-4 py-2 rounded-lg text-xs xl:text-sm w-[130px] xl:w-[160px] h-[38px] xl:h-[45px] mb-1 transition-all shadow-lg`}
              >
                PREUZMI BONUS
              </Button>
              <div className="text-xs text-gray-600 hover:text-amber-600 transition-colors">Posjeti {site.name}</div>
            </div>
          </div>
        </Link>

        {/* Terms - Expandable */}
        <div className="bg-gray-50 text-xs text-gray-600 px-6 py-2 border-t border-gray-200" ref={termsContainerRef}>
          <div className="text-center">
            <div className={`leading-tight transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""}`}>
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-amber-600 hover:text-amber-700 underline mt-1 text-xs font-medium"
              >
                {isTermsExpanded ? "Prikaži manje" : "Prikaži više"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div
        className={`hidden md:block lg:hidden bg-white rounded-xl border-2 ${getBorderColor()} shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer`}
      >
        <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
          <div
            className={`w-full ${getBadgeColor()} text-white px-4 py-2 text-sm font-bold z-20 shadow-lg flex items-center justify-between`}
          >
            <span className="flex items-center gap-2">
              <span className="text-xl">#{rank}</span>
              <span>{rank === 1 ? "TOP IZBOR" : rank === 2 ? "EKSKLUZIVNA PONUDA" : "POPULARNO"}</span>
            </span>
            <span className="text-xs opacity-90">Preporučeno</span>
          </div>

          <div className="p-4 min-h-[140px]">
            {/* FLEXBOX Layout for Tablet */}
            <div className="flex items-center mb-3">
              {/* Logo - 25% */}
              <div className="flex-[0_0_25%] flex justify-center items-center h-full pr-3">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-2 shadow-md">
                  <img
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    className="w-[160px] h-[80px] object-contain flex-shrink-0"
                  />
                </div>
              </div>

              {/* Bonus - 20% */}
              <div className="flex-[0_0_20%] text-center px-3">
                <div className="text-xs text-gray-600 uppercase font-semibold mb-1 tracking-wider">
                  BONUS DOBRODOŠLICE
                </div>
                <div className="text-base font-bold text-slate-900 mb-0.5 leading-tight break-words">{site.bonus}</div>
                {site.dopBonus && (
                  <div className="text-base font-bold text-slate-900 leading-tight break-words">{site.dopBonus}</div>
                )}
              </div>

              {/* Rating - 20% */}
              <div className="flex-[0_0_20%] text-center px-3">
                <div className="text-xs text-gray-700 mb-0.5">({formatVotes(site.reviews)})</div>
                <div className="flex justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < filledStars || (i === filledStars && hasHalfStar)
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Score - 15% */}
              <div className="flex-[0_0_15%] text-center px-3">
                <div className="text-[40px] font-bold leading-none text-amber-600">{site.rating.toFixed(1)}</div>
              </div>

              {/* Button - 20% */}
              <div className="flex-[0_0_20%] text-center pl-3">
                <Button
                  className={`${getButtonColor()} text-white font-bold px-3 py-2 rounded-lg text-xs w-[120px] mx-auto transition-all shadow-lg`}
                >
                  PREUZMI BONUS
                </Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Terms - Expandable */}
        <div className="border-t border-gray-200 bg-gray-50 text-gray-600 text-xs px-4 py-3">
          <div className="text-center">
            <div className={`leading-tight transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""}`}>
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-amber-600 hover:text-amber-700 underline mt-1 text-xs font-medium"
              >
                {isTermsExpanded ? "Prikaži manje" : "Prikaži više"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        className={`md:hidden bg-white rounded-xl border-2 ${getBorderColor()} shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer`}
      >
        <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
          <div
            className={`w-full ${getBadgeColor()} text-white px-3 py-1.5 text-xs font-bold z-20 shadow-lg flex items-center justify-between`}
          >
            <span className="flex items-center gap-1.5">
              <span className="text-lg">#{rank}</span>
              <span>{rank === 1 ? "TOP IZBOR" : rank === 2 ? "EKSKLUZIVNA" : "POPULARNO"}</span>
            </span>
          </div>

          {/* Main Content Container */}
          <div className="grid grid-cols-2 h-[175px]">
            {/* Left Column: Light background with logo and rating */}
            <div className="bg-gray-50 flex flex-col justify-between items-center py-2 px-2 border-r border-gray-200">
              {/* Logo */}
              <div className="flex-1 flex items-center justify-center mt-1">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded p-1.5 shadow-md">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-16 w-auto object-contain" />
                </div>
              </div>

              {/* Bottom section with stars and rating */}
              <div className="grid grid-cols-2 gap-1 w-full">
                {/* Left column: Stars and Rate it */}
                <div className="flex flex-col items-center justify-center">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < filledStars || (i === filledStars && hasHalfStar)
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  {/* Rate it text */}
                  <div className="text-[11px] text-gray-700 text-center leading-tight">
                    Ocijeni
                    <br />({formatVotes(site.reviews)})
                  </div>
                </div>

                {/* Right column: Score */}
                <div className="flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold leading-none text-amber-600">{site.rating.toFixed(1)}</div>
                  <div className="text-[10px] text-gray-700 font-bold mt-1">Naša Ocjena</div>
                </div>
              </div>
            </div>

            {/* Right Column: Bonus and Button */}
            <div className="flex flex-col justify-between py-2 px-2">
              {/* Welcome Bonus */}
              <div className="text-center flex-1 flex flex-col justify-center">
                <div className="text-[10px] text-gray-600 uppercase font-semibold mb-1 tracking-wider">
                  BONUS DOBRODOŠLICE
                </div>
                <div className="text-base font-bold text-slate-900 leading-tight mb-1">{site.bonus}</div>
                {site.dopBonus && (
                  <div className="text-base font-bold text-slate-900 leading-tight">{site.dopBonus}</div>
                )}
              </div>

              {/* Button */}
              <div className="flex justify-center mt-2">
                <Button
                  className={`${getButtonColor()} text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-all w-full shadow-lg`}
                >
                  PREUZMI BONUS
                </Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Terms - Expandable */}
        <div className="border-t border-gray-200 bg-gray-50 px-3 py-3">
          <div className="text-center">
            <div
              className={`text-gray-600 text-[9px] leading-[1.4] transition-all duration-300 ${
                !isTermsExpanded ? "line-clamp-2" : ""
              }`}
            >
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-amber-600 hover:text-amber-700 underline mt-1 text-[9px] font-medium"
              >
                {isTermsExpanded ? "Prikaži manje" : "Prikaži više"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
