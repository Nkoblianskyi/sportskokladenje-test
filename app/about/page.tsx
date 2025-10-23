import { Shield, Target, Award, Users, CheckCircle2, TrendingUp, Lock, Mail, MessageCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] pt-20 md:pt-28">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <article className="prose prose-lg max-w-none prose-invert">
          {/* Hero Header */}
          <header className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-croatia-red/10 via-transparent to-croatia-blue/10 rounded-3xl blur-2xl"></div>
            <div className="relative py-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
                O{" "}
                <span className="bg-gradient-to-r from-croatia-red to-croatia-gold bg-clip-text text-transparent">
                  Nama
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto text-balance">
                Vaš pouzdani vodič kroz svijet sportskog klađenja u Hrvatskoj
              </p>
            </div>
          </header>

          <div className="space-y-12">
            {/* Who We Are */}
            <section className="bg-slate-800/50 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-16 bg-gradient-to-b from-croatia-red to-croatia-blue rounded-full"></div>
                <h2 className="text-4xl font-bold text-white m-0">Tko Smo Mi</h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed m-0">
                <strong className="text-croatia-gold">sportskokladenje.com</strong> je nezavisna hrvatska platforma
                posvećena pružanju objektivnih recenzija i detaljnih analiza online kladionica. Naš tim iskusnih
                stručnjaka testira i ocjenjuje svaku platformu prema strogim kriterijima kako bismo vam pomogli donijeti
                informiranu odluku. Vjerujemo u transparentnost, sigurnost i odgovorno klađenje.
              </p>
            </section>

            {/* Mission */}
            <section className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-16 bg-gradient-to-b from-croatia-blue to-croatia-gold rounded-full"></div>
                <h2 className="text-4xl font-bold text-white m-0">Naša Misija</h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Pružamo vam sve što trebate znati prije nego odaberete kladionicu:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { text: "Detaljne i nepristrane recenzije", icon: CheckCircle2 },
                  { text: "Usporedba bonusa i promocija", icon: Award },
                  { text: "Analiza kvota i sportske ponude", icon: TrendingUp },
                  { text: "Provjera licenci i sigurnosti", icon: Lock },
                  { text: "Testiranje korisničke podrške", icon: MessageCircle },
                  { text: "Edukacija o odgovornom klađenju", icon: Users },
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

            {/* Our Values */}
            <section className="bg-slate-800/50 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1.5 h-16 bg-gradient-to-b from-croatia-gold to-croatia-red rounded-full"></div>
                <h2 className="text-4xl font-bold text-white m-0">Naše Vrijednosti</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Transparentnost",
                    desc: "Jasno objašnjavamo kako ocjenjujemo i što testiramo",
                    icon: Shield,
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    title: "Neovisnost",
                    desc: "Naše ocjene nisu pod utjecajem partnerstava",
                    icon: Award,
                    color: "from-croatia-red to-red-600",
                  },
                  {
                    title: "Stručnost",
                    desc: "Tim s godinama iskustva u industriji klađenja",
                    icon: Target,
                    color: "from-croatia-gold to-yellow-600",
                  },
                ].map((value, index) => {
                  const Icon = value.icon
                  return (
                    <div
                      key={index}
                      className="bg-slate-700/40 backdrop-blur rounded-xl p-6 border border-slate-600/40 hover:border-slate-500/60 transition-all"
                    >
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-slate-300 m-0 text-sm leading-relaxed">{value.desc}</p>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* How We Work */}
            <section className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1.5 h-16 bg-gradient-to-b from-croatia-red to-croatia-blue rounded-full"></div>
                <h2 className="text-4xl font-bold text-white m-0">Kako Radimo</h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Registracija i Testiranje",
                    desc: "Registriramo se na svaku platformu i testiramo cijeli proces od početka do kraja",
                  },
                  {
                    step: "02",
                    title: "Analiza Ponude",
                    desc: "Detaljno analiziramo sportsku ponudu, kvote, live klađenje i specijalne opcije",
                  },
                  {
                    step: "03",
                    title: "Provjera Sigurnosti",
                    desc: "Provjeravamo licence, enkripciju, metode plaćanja i zaštitu podataka",
                  },
                  {
                    step: "04",
                    title: "Testiranje Podrške",
                    desc: "Kontaktiramo korisničku podršku i ocjenjujemo brzinu i kvalitetu odgovora",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 bg-slate-700/30 rounded-xl p-6 border border-slate-600/30"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-croatia-red to-croatia-gold flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-300 m-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Responsible Gaming */}
            <section className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-croatia-red via-orange-600 to-croatia-red"></div>
              <div className="relative p-8 md:p-12 text-center text-white">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur rounded-full mb-6">
                  <span className="text-4xl font-bold">18+</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Odgovorno Klađenje</h2>
                <p className="text-lg text-white/95 mb-6 max-w-2xl mx-auto text-balance leading-relaxed">
                  Zagovaramo odgovorno klađenje i educiramo naše korisnike o važnosti kontrole. Klađenje je zabava, ne
                  način zarade. Igrajte samo ono što si možete priuštiti izgubiti.
                </p>
                <a
                  href="/responsible-gambling"
                  className="inline-block bg-white text-croatia-red px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
                >
                  Saznajte Više
                </a>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-slate-800/50 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-16 bg-gradient-to-b from-croatia-blue to-croatia-red rounded-full"></div>
                <h2 className="text-4xl font-bold text-white m-0">Kontaktirajte Nas</h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Imate pitanja ili prijedloge? Slobodno nas kontaktirajte:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-croatia-blue/20 to-croatia-blue/10 rounded-xl p-6 border border-croatia-blue/30">
                  <Mail className="w-10 h-10 text-croatia-gold mb-3" />
                  <h3 className="font-bold text-white mb-2 text-lg">Opći Upiti</h3>
                  <a
                    href="mailto:info@sportskokladenje.com"
                    className="text-croatia-gold hover:text-croatia-red font-semibold text-lg transition-colors"
                  >
                    info@sportskokladenje.com
                  </a>
                </div>
                <div className="bg-gradient-to-br from-croatia-red/20 to-croatia-red/10 rounded-xl p-6 border border-croatia-red/30">
                  <MessageCircle className="w-10 h-10 text-croatia-gold mb-3" />
                  <h3 className="font-bold text-white mb-2 text-lg">Korisnička Podrška</h3>
                  <a
                    href="mailto:podrska@sportskokladenje.com"
                    className="text-croatia-gold hover:text-croatia-red font-semibold text-lg transition-colors"
                  >
                    podrska@sportskokladenje.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
