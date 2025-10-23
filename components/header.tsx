"use client"
import { Logo } from "./logo"

export function Header() {
  return (
    <header className="bg-slate-900/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-slate-700/50 shadow-xl">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1">
              <div className="w-1 h-8 bg-gradient-to-b from-croatia-red to-croatia-blue rounded-full"></div>
              <div className="w-1 h-6 bg-gradient-to-b from-croatia-blue to-croatia-red rounded-full"></div>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <Logo size="sm" className="md:text-lg lg:text-xl drop-shadow-2xl" />
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full border border-slate-700/50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-slate-300">Provjereno</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
    </header>
  )
}
