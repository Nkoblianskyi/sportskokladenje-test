"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already responded to cookie consent
    const cookieConsent = localStorage.getItem("cookieConsent")

    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 max-w-[1280px]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700 leading-relaxed">
              Koristimo kolačiće kako bismo personalizirali vaše iskustvo. Korištenjem ove stranice prihvaćate našu
              upotrebu kolačića.{" "}
              <Link href="/cookie-policy" className="text-croatia-red hover:underline font-medium">
                Saznajte više
              </Link>
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button
              onClick={handleDecline}
              variant="outline"
              size="sm"
              className="flex-1 md:flex-none border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              Odbij
            </Button>
            <Button
              onClick={handleAccept}
              size="sm"
              className="flex-1 md:flex-none bg-croatia-red hover:bg-croatia-dark-red text-white"
            >
              Prihvati sve
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
