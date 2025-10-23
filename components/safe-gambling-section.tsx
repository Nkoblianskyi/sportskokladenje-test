import Link from "next/link"
import { AlertTriangle, CheckCircle, Phone, Heart } from "lucide-react"

export function SafeGamblingSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-full px-6 py-3 mb-6">
            <Heart className="w-5 h-5 text-slate-400" />
            <span className="text-slate-300 font-semibold">Vaša sigurnost je naš prioritet</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Odgovorno <span className="text-slate-400">Klađenje</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Klađenje treba biti zabava, ne problem. Igrajte pametno i odgovorno.
          </p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 md:p-12 mb-12">
          <div className="flex items-start gap-6">
            <div className="bg-slate-700 rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0 text-3xl font-bold text-white">
              18+
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Klađenje je samo za punoljetne</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Online klađenje je zabavna aktivnost za odrasle osobe. Nikada ne kladite se s novcem koji ne možete
                priuštiti izgubiti. Postavite limite i pridržavajte ih se.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-slate-700 rounded-lg p-2">
                <AlertTriangle className="w-6 h-6 text-slate-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">Znakovi Upozorenja</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Trošite više novca nego što ste planirali",
                "Klađenje utječe na vaš posao ili odnose",
                "Pokušavate 'vratiti' izgubljeni novac",
                "Posuđujete novac za klađenje",
                "Lažete o količini vremena ili novca utrošenog na klađenje",
                "Zanemarujete obaveze zbog klađenja",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-slate-700 rounded-full p-1 mt-0.5">
                    <div className="w-2 h-2 bg-slate-400 rounded-full" />
                  </div>
                  <span className="text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-slate-700 rounded-lg p-2">
                <CheckCircle className="w-6 h-6 text-slate-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">Savjeti za Sigurno Klađenje</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Postavite budžet prije nego počnete",
                "Nikada ne pokušavajte nadoknaditi gubitke",
                "Koristite alate za samoograničavanje",
                "Pravite redovite pauze od klađenja",
                "Ne kladite se pod utjecajem alkohola",
                "Tretirajte klađenje kao zabavu, ne kao prihod",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-slate-700 rounded-full p-1 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-slate-400" />
                  </div>
                  <span className="text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-slate-700 rounded-lg p-2">
              <Phone className="w-6 h-6 text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-white">Trebate Pomoć?</h3>
          </div>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Ako smatrate da imate problem s kockanjem ili poznajete nekoga tko ima, pomoć je dostupna. Kontaktirajte
            jednu od sljedećih organizacija:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="border-l-4 border-slate-600 pl-4">
              <p className="font-bold text-white mb-1">Anonimni Kockari</p>
              <p className="text-sm text-slate-400">www.anonimni-kockari.hr</p>
            </div>
            <div className="border-l-4 border-slate-600 pl-4">
              <p className="font-bold text-white mb-1">BeGambleAware</p>
              <p className="text-sm text-slate-400">www.begambleaware.org</p>
            </div>
            <div className="border-l-4 border-slate-600 pl-4">
              <p className="font-bold text-white mb-1">GamCare</p>
              <p className="text-sm text-slate-400">www.gamcare.org.uk</p>
            </div>
          </div>
          <Link
            href="/responsible-gambling"
            className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all"
          >
            Saznajte više o odgovornom klađenju
          </Link>
        </div>
      </div>
    </section>
  )
}
