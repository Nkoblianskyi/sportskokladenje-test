import { Shield, TrendingUp, Gift, Smartphone, CreditCard, Headphones } from "lucide-react"

export function MethodologySection() {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Naša <span className="text-slate-400">Metodologija</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Rigorozan proces testiranja i ocjenjivanja svake kladionice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all">
            <div className="bg-slate-700 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Licenca i Sigurnost</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Provjeravamo valjanost licence, sigurnosne protokole, SSL enkripciju i politike zaštite podataka.
            </p>
            <div className="bg-slate-700/50 rounded-lg p-3">
              <p className="text-sm font-semibold text-slate-300">Težina: 25%</p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all">
            <div className="bg-slate-700 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Sportska Ponuda i Kvote</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Analiziramo širinu sportske ponude, broj tržišta i konkurentnost kvota u usporedbi s tržištem.
            </p>
            <div className="bg-slate-700/50 rounded-lg p-3">
              <p className="text-sm font-semibold text-slate-300">Težina: 20%</p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all">
            <div className="bg-slate-700 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
              <Gift className="w-7 h-7 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Bonusi i Promocije</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Ocjenjujemo vrijednost bonusa, realnost uvjeta klađenja i transparentnost promocijskih ponuda.
            </p>
            <div className="bg-slate-700/50 rounded-lg p-3">
              <p className="text-sm font-semibold text-slate-300">Težina: 15%</p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all">
            <div className="bg-slate-700 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
              <Smartphone className="w-7 h-7 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Korisničko Iskustvo</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Testiramo navigaciju, brzinu učitavanja, mobilnu optimizaciju i ukupnu funkcionalnost platforme.
            </p>
            <div className="bg-slate-700/50 rounded-lg p-3">
              <p className="text-sm font-semibold text-slate-300">Težina: 20%</p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all">
            <div className="bg-slate-700 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
              <CreditCard className="w-7 h-7 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Metode Plaćanja</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Provjeravamo dostupnost metoda, brzinu obrade transakcija i eventualnih naknada za uplate i isplate.
            </p>
            <div className="bg-slate-700/50 rounded-lg p-3">
              <p className="text-sm font-semibold text-slate-300">Težina: 10%</p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all">
            <div className="bg-slate-700 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
              <Headphones className="w-7 h-7 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Korisnička Podrška</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Testiramo dostupnost, vrijeme odgovora i kvalitetu rješenja problema kroz različite kanale podrške.
            </p>
            <div className="bg-slate-700/50 rounded-lg p-3">
              <p className="text-sm font-semibold text-slate-300">Težina: 10%</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-4">Konačna Ocjena</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Nakon detaljnog testiranja svih aspekata, dodjeljujemo konačnu ocjenu koja odražava ukupnu kvalitetu
            kladionice. Naše ocjene se redovito ažuriraju kako bismo osigurali da odražavaju trenutno stanje svake
            platforme. Koristimo ponderiranu formulu gdje sigurnost i sportska ponuda imaju najveću težinu.
          </p>
        </div>
      </div>
    </section>
  )
}
