"use client"

import { useState } from "react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"
import { ResponsibleGamingModal } from "./responsible-gaming-modal"
import Image from "next/image"
import { CheckCircle2, Award, TrendingUp, Info, Shield } from "lucide-react"

export function Hero() {
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isResponsibleModalOpen, setIsResponsibleModalOpen] = useState(false)

  const lastUpdated = new Date().toLocaleDateString("hr-HR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <section className="relative overflow-hidden pt-14 md:pt-16 bg-[#1a1a2e]">
      {/* Stadium background image */}
      <div className="absolute inset-0">
        <Image
          src="/night-sports-stadium-with-bright-lights--aerial-vi.jpg"
          alt="Stadium Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#1a1a2e]"></div>
      </div>

      {/* Vibrant accent overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-croatia-red/20 via-transparent to-croatia-blue/20 mix-blend-overlay"></div>

      {/* Glowing effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-croatia-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-croatia-blue/10 rounded-full blur-3xl"></div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-croatia-red via-white to-croatia-blue"></div>

      <div className="container mx-auto sm:max-w-[1400px] relative z-10 px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-croatia-red to-red-400 bg-clip-text text-transparent drop-shadow-lg">
              Vrhunske
            </span>{" "}
            <span className="text-white drop-shadow-lg">Sportske</span>{" "}
            <span className="bg-gradient-to-r from-croatia-blue to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
              Kladionice
            </span>{" "}
            <span className="text-white drop-shadow-lg">2025</span>
          </h1>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 shadow-xl">
            <TrendingUp className="w-4 h-4 text-croatia-gold" />
            <p className="text-white/90 text-sm font-medium">Ažurirano: {lastUpdated}</p>
          </div>

          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 drop-shadow-md">
            Nezavisne recenzije i detaljne analize najboljih sportskih kladionica u Hrvatskoj. Pronađite idealno mjesto
            za vaše sportsko klađenje.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 drop-shadow-lg" />
              <span className="text-white font-semibold text-sm drop-shadow-md">Provjereno i Sigurno</span>
            </div>

            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-croatia-gold drop-shadow-lg" />
              <span className="text-white font-semibold text-sm drop-shadow-md">Najbolji Bonusi</span>
            </div>

            <div className="flex items-center gap-2">
              <Image src="/flag.png" alt="Croatia Flag" width={20} height={20} className="drop-shadow-lg" />
              <span className="text-white font-semibold text-sm drop-shadow-md">Hrvatska Licenca</span>
            </div>

            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-croatia-blue drop-shadow-lg" />
              <span className="text-white font-semibold text-sm drop-shadow-md">Zaštita Igrača</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 text-sm">
            <button
              onClick={() => setIsResponsibleModalOpen(true)}
              className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors underline decoration-dotted underline-offset-4"
            >
              <Info className="w-4 h-4" />
              <span>18+ | Odgovorno klađenje | Affiliate obavijest</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade to main content */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#1a1a2e] to-transparent"></div>

      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <ResponsibleGamingModal isOpen={isResponsibleModalOpen} onClose={() => setIsResponsibleModalOpen(false)} />
    </section>
  )
}
