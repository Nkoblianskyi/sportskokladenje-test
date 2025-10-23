import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#1a1a2e] via-gray-950 to-black text-gray-300 border-t border-croatia-red/30 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-croatia-red to-transparent"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-croatia-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-croatia-red/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-[1400px] py-12 md:py-16 lg:py-20 relative z-10">
        <div className="mb-12 md:mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex justify-center">
              <Logo size="lg" />
            </div>
            <p className="text-gray-400 leading-relaxed text-base">
              sportskokladenje.com pruža neovisne usporedbe platformi za sportsko klađenje u Hrvatskoj. Naša misija je
              pomoći vam pronaći najbolje kladionice s najboljim bonusima i uvjetima.
            </p>
          </div>
        </div>

        <div className="mb-12 md:mb-16 border-t border-gray-800 pt-8 text-center">
          <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
            <span className="bg-gradient-to-r from-croatia-red to-croatia-blue bg-clip-text text-transparent">
              Navigacija
            </span>
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 max-w-5xl mx-auto">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-all inline-flex items-center group hover:translate-x-1 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 bg-croatia-red rounded-full mr-2 group-hover:bg-croatia-gold group-hover:scale-150 transition-all"></span>
              Početna
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-white transition-all inline-flex items-center group hover:translate-x-1 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 bg-croatia-red rounded-full mr-2 group-hover:bg-croatia-gold group-hover:scale-150 transition-all"></span>
              O Nama
            </Link>
            <Link
              href="/responsible-gambling"
              className="text-gray-400 hover:text-white transition-all inline-flex items-center group hover:translate-x-1 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 bg-croatia-red rounded-full mr-2 group-hover:bg-croatia-gold group-hover:scale-150 transition-all"></span>
              Odgovorno Klađenje
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition-all inline-flex items-center group hover:translate-x-1 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 bg-croatia-red rounded-full mr-2 group-hover:bg-croatia-gold group-hover:scale-150 transition-all"></span>
              Politika Privatnosti
            </Link>
            <Link
              href="/cookie-policy"
              className="text-gray-400 hover:text-white transition-all inline-flex items-center group hover:translate-x-1 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 bg-croatia-red rounded-full mr-2 group-hover:bg-croatia-gold group-hover:scale-150 transition-all"></span>
              Politika Kolačića
            </Link>
          </div>
        </div>

        <div className="mb-8 border-t border-gray-800 pt-8 text-center">
          <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
            <span className="bg-gradient-to-r from-croatia-red to-croatia-blue bg-clip-text text-transparent">
              Organizacije za Odgovorno Klađenje
            </span>
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="bg-gradient-to-br from-croatia-red/10 to-orange-900/10 p-4 rounded-xl border border-croatia-red/30 backdrop-blur-sm shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-croatia-red to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-lg font-bold">18+</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Klađenje može izazvati ovisnost. Igrajte odgovorno.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="relative w-[100px] h-[40px] bg-white rounded-lg p-2 shadow-md">
                  <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain p-1" />
                </div>
              </Link>
              <Link
                href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="relative w-[100px] h-[40px] bg-white rounded-lg p-2 shadow-md">
                  <Image src="/pbsvi.svg" alt="pbsvi" fill className="object-contain p-1" />
                </div>
              </Link>
              <Link
                href="https://www.hupis.hr/klok"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="relative w-[100px] h-[40px] bg-white rounded-lg p-2 shadow-md">
                  <Image src="/hupis.png" alt="hupis" fill className="object-contain p-1" />
                </div>
              </Link>
              <Link
                href="https://www.gamcare.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="relative w-[100px] h-[40px] bg-white rounded-lg p-2 shadow-md">
                  <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain p-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} sportskokladenje.com. Sva prava pridržana.
            </p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-croatia-red to-transparent"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
