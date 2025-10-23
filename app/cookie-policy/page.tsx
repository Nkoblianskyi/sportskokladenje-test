import { Cookie, Settings, BarChart3, Target, Shield, Users, Globe } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] pt-20 md:pt-28">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <article className="prose prose-lg max-w-none prose-invert">
          {/* Hero Header */}
          <header className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-croatia-blue/10 via-transparent to-croatia-blue/10 rounded-3xl blur-2xl"></div>
            <div className="relative py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800/50 backdrop-blur rounded-full mb-6 border border-slate-700">
                <Cookie className="w-10 h-10 text-croatia-gold" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
                Politika{" "}
                <span className="bg-gradient-to-r from-croatia-blue to-croatia-gold bg-clip-text text-transparent">
                  Kolačića
                </span>
              </h1>
              <p className="text-lg text-slate-400">Posljednje ažuriranje: 15. siječnja 2025.</p>
            </div>
          </header>

          <div className="space-y-12">
            {/* Introduction */}
            <section className="bg-slate-800/50 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-16 bg-gradient-to-b from-croatia-blue to-croatia-red rounded-full"></div>
                <h2 className="text-4xl font-bold text-white m-0">Što su Kolačići</h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed m-0">
                Kolačići su male tekstualne datoteke koje web stranice pohranjuju na vaš uređaj. Oni omogućavaju
                stranici da zapamti vaše postavke i poboljša vaše iskustvo korištenja.
                <strong className="text-croatia-gold"> sportskokladenje.com</strong> koristi kolačiće kako bi osigurao
                najbolje moguće iskustvo za naše korisnike.
              </p>
            </section>

            {/* How We Use Cookies */}
            <section className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-16 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></div>
                <h2 className="text-4xl font-bold text-white m-0">Kako Koristimo Kolačiće</h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">Koristimo kolačiće za sljedeće svrhe:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { text: "Omogućavanje osnovnih funkcija stranice", icon: Settings },
                  { text: "Pamćenje vaših postavki i preferencija", icon: Shield },
                  { text: "Analiza korištenja i poboljšanje usluge", icon: BarChart3 },
                  { text: "Personalizacija sadržaja prema interesima", icon: Target },
                  { text: "Osiguranje sigurnosti i sprječavanje prijevara", icon: Shield },
                  { text: "Mjerenje učinkovitosti marketinga", icon: BarChart3 },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-slate-700/30 rounded-lg p-4 border border-slate-600/30"
                    >
                      <Icon className="w-6 h-6 text-croatia-gold flex-shrink-0" />
                      <span className="text-slate-200">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Types of Cookies */}
            <section className="bg-slate-800/50 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1.5 h-16 bg-gradient-to-b from-croatia-red to-croatia-gold rounded-full"></div>
                <h2 className="text-4xl font-bold text-white m-0">Vrste Kolačića</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Nužni Kolačići",
                    desc: "Ovi kolačići su neophodni za rad stranice. Omogućavaju osnovne funkcije kao što su navigacija i pristup sigurnim područjima. Stranica ne može pravilno funkcionirati bez njih.",
                    icon: Shield,
                    color: "from-green-500 to-green-600",
                  },
                  {
                    title: "Analitički Kolačići",
                    desc: "Pomažu nam razumjeti kako posjetitelji koriste stranicu prikupljanjem anonimnih podataka. Koristimo Google Analytics za praćenje broja posjetitelja i njihovog ponašanja.",
                    icon: BarChart3,
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    title: "Funkcionalni Kolačići",
                    desc: "Omogućavaju stranici da zapamti vaše izbore (jezik, regija, postavke) i pruži poboljšane, personalizirane značajke za bolje korisničko iskustvo.",
                    icon: Settings,
                    color: "from-yellow-500 to-yellow-600",
                  },
                  {
                    title: "Marketinški Kolačići",
                    desc: "Prate vašu aktivnost kako bi prikazali relevantne oglase. Koriste se za mjerenje učinkovitosti kampanja i prilagodbu oglasa vašim interesima.",
                    icon: Target,
                    color: "from-red-500 to-red-600",
                  },
                ].map((type, index) => {
                  const Icon = type.icon
                  return (
                    <div
                      key={index}
                      className="bg-slate-700/40 backdrop-blur rounded-xl p-6 border border-slate-600/40 hover:border-slate-500/60 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${type.color} flex items-center justify-center`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                          <p className="text-slate-300 leading-relaxed m-0">{type.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Third Party Cookies */}
            <section className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-16 bg-gradient-to-b from-slate-500 to-slate-700 rounded-full"></div>
                <h2 className="text-4xl font-bold text-white m-0">Kolačići Trećih Strana</h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Koristimo usluge trećih strana koje također mogu postavljati kolačiće:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Google Analytics", desc: "Analiza prometa i ponašanja korisnika", icon: BarChart3 },
                  { name: "Društvene mreže", desc: "Dijeljenje sadržaja na društvenim platformama", icon: Users },
                  { name: "Oglasne mreže", desc: "Prikazivanje relevantnih oglasa", icon: Target },
                ].map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div key={index} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
                      <Icon className="w-10 h-10 text-croatia-gold mb-4" />
                      <h3 className="font-bold text-white mb-2 text-lg">{service.name}</h3>
                      <p className="text-slate-300 text-sm m-0">{service.desc}</p>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Managing Cookies */}
            <section className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-croatia-blue to-croatia-red"></div>
              <div className="relative p-8 md:p-12 text-white">
                <h2 className="text-4xl font-bold mb-6">Upravljanje Kolačićima</h2>
                <p className="text-lg text-white/95 leading-relaxed mb-8">
                  Možete kontrolirati i izbrisati kolačiće kako želite. Većina preglednika automatski prihvaća kolačiće,
                  ali možete promijeniti postavke da ih blokirate. Imajte na umu da blokiranje kolačića može utjecati na
                  funkcionalnost stranice.
                </p>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/30">
                  <h3 className="text-xl font-bold mb-4">Upravljanje u preglednicima:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { browser: "Chrome", path: "chrome://settings/cookies" },
                      { browser: "Firefox", path: "about:preferences#privacy" },
                      { browser: "Safari", path: "Preferences → Privacy" },
                      { browser: "Edge", path: "edge://settings/privacy" },
                    ].map((item, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-4">
                        <div className="font-bold text-croatia-gold mb-1">{item.browser}</div>
                        <code className="text-sm text-white/90">{item.path}</code>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-slate-800/50 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-700/50">
              <div className="text-center">
                <Globe className="w-16 h-16 text-croatia-gold mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Kontaktirajte Nas</h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                  Ako imate pitanja o našoj Politici kolačića, kontaktirajte nas:
                </p>
                <a
                  href="mailto:privatnost@sportskokladenje.com"
                  className="inline-block text-2xl font-bold text-croatia-gold hover:text-croatia-red transition-colors"
                >
                  privatnost@sportskokladenje.com
                </a>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
