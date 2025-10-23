"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AlertTriangle, Shield, Info, ExternalLink } from "lucide-react"

interface ResponsibleGamingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResponsibleGamingModal({ isOpen, onClose }: ResponsibleGamingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-croatia-red to-croatia-blue bg-clip-text text-transparent flex items-center gap-2">
            <Shield className="w-6 h-6 text-croatia-red" />
            Važne Informacije
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-slate-700">
          {/* 18+ Warning */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Dobna Granica 18+</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Klađenje je dozvoljeno samo osobama starijim od 18 godina. Klađenje može biti ovisnost. Igrajte
                  odgovorno i samo ako imate 18 ili više godina.
                </p>
              </div>
            </div>
          </div>

          {/* Responsible Gaming */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Odgovorno Klađenje</h3>
                <p className="text-sm text-blue-800 leading-relaxed mb-3">
                  Klađenje treba biti zabava, a ne način zarade. Nikada ne kladite se više nego što si možete priuštiti
                  izgubiti.
                </p>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li>Postavite limite za depozite i gubitke</li>
                  <li>Nikada ne pokušavajte vratiti izgubljeni novac</li>
                  <li>Ne kladite se pod utjecajem alkohola</li>
                  <li>Tražite pomoć ako osjećate da gubite kontrolu</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Help Resources */}
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-slate-600" />
              Pomoć i Podrška
            </h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://www.kockanje.hr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-croatia-blue hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Kockanje.hr - Centar za odgovorno klađenje
              </a>
              <a
                href="https://www.gamblersanonymous.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-croatia-blue hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Gamblers Anonymous
              </a>
            </div>
          </div>

          {/* Affiliate Disclosure */}
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-slate-600" />
              Affiliate Obavijest
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Sportskokladenje.com sadrži affiliate linkove prema kladionicama. Kada se registrirate putem naših
              linkova, možemo primiti proviziju od kladionice. Ovo ne utječe na vašu cijenu ili iskustvo. Naše recenzije
              ostaju nepristrane i temeljene na detaljnoj analizi.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mt-3">
              Sve preporučene kladionice su licencirane i regulirane u Hrvatskoj. Uvijek provjeravamo sigurnost,
              pouzdanost i kvalitetu usluge prije nego što preporučimo bilo koju platformu.
            </p>
          </div>

          {/* Legal Notice */}
          <div className="bg-slate-100 border border-slate-300 p-4 rounded-lg">
            <p className="text-xs text-slate-600 leading-relaxed">
              Sve informacije na ovoj stranici su samo u informativne svrhe. Uvijek provjerite lokalne zakone i propise
              prije klađenja. Klađenje može biti ovisnost - igrajte odgovorno.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
