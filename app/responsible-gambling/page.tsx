import { AlertTriangle, Shield, Clock, Ban, Coffee, DollarSign, Phone, Mail, Globe } from "lucide-react"

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] pt-20 md:pt-28">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-orange-600 text-white text-4xl font-bold mb-6 shadow-2xl">
            18+
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Odgovorno{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Klađenje</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto text-balance">
            Klađenje treba biti zabava, ne problem. Saznajte kako ostati u kontroli.
          </p>
        </header>

        <div className="space-y-8">
          <section className="bg-gradient-to-br from-red-600/90 to-red-700/90 backdrop-blur rounded-2xl p-8 md:p-12 shadow-2xl border border-red-500/20">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">Važno Upozorenje</h2>
                <p className="text-lg text-white/95 leading-relaxed">
                  Klađenje može biti zabavno i uzbudljivo, ali također može postati problem ako se ne kontrolira. Ova
                  stranica je namijenjena samo osobama starijim od 18 godina. Ako imate problema s kockanjem ili
                  poznajete nekoga tko ima, potražite pomoć odmah.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 md:p-12 shadow-xl border border-slate-700/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Znakovi Problematičnog Klađenja</h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Prepoznajte znakove upozorenja prije nego što postane ozbiljan problem:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Trošite više novca nego što možete priuštiti",
                "Pokušavate 'vratiti' izgubljeni novac",
                "Zanemarujete obitelj, posao ili obaveze",
                "Lažete o vremenu ili novcu za klađenje",
                "Osjećate krivnju, sram ili anksioznost",
                "Posuđujete novac za klađenje",
              ].map((sign, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-slate-700/30 rounded-lg p-4 border border-slate-600/30 hover:border-red-500/50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <span className="text-slate-200">{sign}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 md:p-12 shadow-xl border border-slate-700/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Savjeti za Odgovorno Klađenje</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Postavite Budžet",
                  desc: "Odlučite unaprijed koliko novca možete priuštiti izgubiti i nikada ne prelazite taj iznos. Tretirajte klađenje kao trošak zabave, ne kao način zarade.",
                  icon: DollarSign,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  title: "Postavite Vremenska Ograničenja",
                  desc: "Odredite koliko vremena ćete provesti kladeći se i pridržavajte se tog rasporeda. Koristite alarme ili podsjetnike ako je potrebno.",
                  icon: Clock,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Nikada Ne Lovite Gubitke",
                  desc: "Ako izgubite, prihvatite to i prestanite. Pokušaj 'vraćanja' izgubljenog novca obično vodi samo većim gubicima.",
                  icon: Ban,
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  title: "Ne Kladite Se Pod Utjecajem",
                  desc: "Nikada se ne kladite kada ste pod utjecajem alkohola ili droga. To može dovesti do loših odluka i većih gubitaka.",
                  icon: AlertTriangle,
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "Pravite Pauze",
                  desc: "Redovno pravite pauze od klađenja. Ako osjećate da gubite kontrolu, razmislite o samoisključenju na određeno vrijeme.",
                  icon: Coffee,
                  color: "from-red-500 to-rose-500",
                },
              ].map((tip, index) => {
                const Icon = tip.icon
                return (
                  <div
                    key={index}
                    className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30 hover:border-slate-500/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tip.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {index + 1}. {tip.title}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">{tip.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 md:p-12 shadow-xl border border-slate-700/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-red-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Alati za Samozaštitu</h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Većina licenciranih kladionica nudi alate koji vam mogu pomoći kontrolirati svoje klađenje:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Limiti Depozita",
                  desc: "Postavite dnevne, tjedne ili mjesečne limite koliko možete uplatiti",
                },
                {
                  title: "Limiti Gubitka",
                  desc: "Odredite maksimalni iznos koji možete izgubiti u određenom periodu",
                },
                { title: "Vremenska Ograničenja", desc: "Postavite koliko dugo možete biti prijavljeni na račun" },
                { title: "Samoisključenje", desc: "Privremeno ili trajno zatvorite svoj račun ako trebate pauzu" },
                { title: "Reality Check", desc: "Primajte podsjetnike koliko dugo ste prijavljeni" },
                { title: "Limiti Uloga", desc: "Ograničite maksimalni iznos pojedinačnog uloga" },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="bg-slate-700/30 rounded-lg p-5 border border-slate-600/30 hover:border-blue-500/50 transition-colors"
                >
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    {tool.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{tool.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-red-600/90 to-orange-600/90 backdrop-blur rounded-2xl p-8 md:p-12 shadow-2xl border border-red-500/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone className="w-8 h-8 text-white" />
              <h2 className="text-3xl font-bold text-white">Potražite Pomoć</h2>
            </div>
            <p className="text-lg text-white/95 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Ako vi ili netko koga poznajete ima problema s kockanjem, dostupna je pomoć. Kontaktirajte jednu od ovih
              organizacija:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Klinika za Ovisnosti",
                  location: "Zagreb, Hrvatska",
                  contact: "Tel: 01 2376 700",
                  icon: Phone,
                },
                {
                  name: "Anonimni Kockari",
                  location: "Besplatna podrška",
                  contact: "www.anonimni-kockari.hr",
                  icon: Globe,
                },
                {
                  name: "BeGambleAware",
                  location: "Međunarodna podrška",
                  contact: "www.begambleaware.org",
                  icon: Globe,
                },
                { name: "GamCare", location: "24/7 Helpline", contact: "www.gamcare.org.uk", icon: Mail },
              ].map((org, index) => {
                const Icon = org.icon
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Icon className="w-5 h-5 text-white mt-1" />
                      <h3 className="text-xl font-bold text-white">{org.name}</h3>
                    </div>
                    <p className="text-white/80 mb-2 text-sm">{org.location}</p>
                    <p className="font-semibold text-yellow-300">{org.contact}</p>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 md:p-12 text-center shadow-xl border border-slate-700/50">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <p className="text-2xl font-bold leading-relaxed text-white">
              Zapamtite: Klađenje treba biti zabava.
              <br />
              <span className="text-slate-300">Ako prestane biti zabavno, vrijeme je da prestanete.</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
