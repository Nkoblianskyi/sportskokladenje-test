import {
  Shield,
  User,
  Mail,
  Laptop,
  BarChart3,
  Lock,
  Users,
  CheckCircle2,
  Eye,
  Edit3,
  Trash2,
  Pause,
  Package,
  Hand,
  MapPin,
} from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] pt-20 md:pt-28">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <article className="prose prose-lg max-w-none prose-invert">
          {/* Hero Header */}
          <header className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-croatia-blue/10 via-transparent to-croatia-red/10 rounded-3xl blur-2xl"></div>
            <div className="relative py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800/50 backdrop-blur rounded-full mb-6 border border-slate-700">
                <Lock className="w-10 h-10 text-croatia-gold" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
                Politika{" "}
                <span className="bg-gradient-to-r from-croatia-blue to-croatia-gold bg-clip-text text-transparent">
                  Privatnosti
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
                <h2 className="text-4xl font-bold text-white m-0">Uvod</h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed m-0">
                <strong className="text-croatia-gold">sportskokladenje.com</strong> ("mi", "nas", "naš") poštuje vašu
                privatnost i predan je zaštiti vaših osobnih podataka. Ova politika objašnjava kako prikupljamo,
                koristimo i štitimo vaše informacije u skladu s GDPR-om i hrvatskim zakonima o zaštiti podataka.
              </p>
            </section>

            {/* Data We Collect */}
            <section className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1.5 h-16 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></div>
                <h2 className="text-4xl font-bold text-white m-0">Koje Podatke Prikupljamo</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Identifikacijski Podaci",
                    desc: "Ime, prezime, korisničko ime",
                    icon: User,
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    title: "Kontakt Informacije",
                    desc: "Email adresa, broj telefona",
                    icon: Mail,
                    color: "from-green-500 to-green-600",
                  },
                  {
                    title: "Tehnički Podaci",
                    desc: "IP adresa, tip preglednika, uređaj",
                    icon: Laptop,
                    color: "from-yellow-500 to-yellow-600",
                  },
                  {
                    title: "Podaci o Korištenju",
                    desc: "Kako koristite našu stranicu",
                    icon: BarChart3,
                    color: "from-red-500 to-red-600",
                  },
                ].map((type, index) => {
                  const Icon = type.icon
                  return (
                    <div
                      key={index}
                      className="bg-slate-700/40 backdrop-blur rounded-xl p-6 border border-slate-600/40"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${type.color} flex items-center justify-center`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                          <p className="text-slate-300 m-0">{type.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* How We Use Data */}
            <section className="bg-slate-800/50 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1.5 h-16 bg-gradient-to-b from-croatia-red to-croatia-gold rounded-full"></div>
                <h2 className="text-4xl font-bold text-white m-0">Kako Koristimo Vaše Podatke</h2>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Pružanje usluga", desc: "Registracija, upravljanje računom i personalizacija sadržaja" },
                  { title: "Poboljšanje stranice", desc: "Analiza korištenja i optimizacija korisničkog iskustva" },
                  { title: "Komunikacija", desc: "Slanje obavijesti, ažuriranja i relevantnih informacija" },
                  { title: "Sigurnost", desc: "Zaštita od prijevara, zloupotreba i neovlaštenog pristupa" },
                  { title: "Zakonske obveze", desc: "Ispunjavanje pravnih i regulatornih zahtjeva" },
                ].map((use, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-slate-700/30 rounded-lg p-5 border border-slate-600/30"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-croatia-red to-croatia-gold text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1 text-lg">{use.title}</h3>
                      <p className="text-slate-300 text-sm m-0">{use.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Legal Basis */}
            <section className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-16 bg-gradient-to-b from-slate-500 to-slate-700 rounded-full"></div>
                <h2 className="text-4xl font-bold text-white m-0">Pravna Osnova</h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Vaše podatke obrađujemo samo kada imamo pravnu osnovu:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Vaša privola za specifične svrhe",
                  "Izvršavanje ugovora s vama",
                  "Ispunjavanje zakonskih obveza",
                  "Zaštita vitalnih interesa",
                  "Legitimni interesi naše tvrtke",
                  "Javni interes ili službena ovlast",
                ].map((basis, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-700/30 rounded-lg p-4 border border-slate-600/30"
                  >
                    <CheckCircle2 className="w-6 h-6 text-croatia-gold flex-shrink-0" />
                    <span className="text-slate-200">{basis}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Data Sharing */}
            <section className="bg-slate-800/50 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-16 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></div>
                <h2 className="text-4xl font-bold text-white m-0">Dijeljenje Podataka</h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">Vaše podatke možemo dijeliti sa:</p>
              <div className="space-y-4">
                {[
                  { title: "Pružateljima usluga", desc: "Hosting, analitika, marketing (pod strogim ugovorima)" },
                  { title: "Partnerima", desc: "Kladionice koje recenziramo (samo uz vašu privolu)" },
                  { title: "Zakonskim tijelima", desc: "Kada je zakonski potrebno ili za zaštitu prava" },
                ].map((share, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-red-900/20 rounded-lg p-5 border border-red-800/30"
                  >
                    <Users className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1 text-lg">{share.title}</h3>
                      <p className="text-slate-300 text-sm m-0">{share.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-3" />
                <p className="text-lg font-bold m-0">Nikada ne prodajemo vaše osobne podatke trećim stranama</p>
              </div>
            </section>

            {/* Data Security */}
            <section className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur rounded-2xl p-8 md:p-12 border border-green-700/50 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-16 bg-gradient-to-b from-green-500 to-green-700 rounded-full"></div>
                <h2 className="text-4xl font-bold text-white m-0">Sigurnost Podataka</h2>
              </div>
              <div className="flex items-start gap-6">
                <Shield className="w-16 h-16 text-green-400 flex-shrink-0" />
                <p className="text-lg text-slate-300 leading-relaxed m-0">
                  Implementirali smo napredne tehničke i organizacijske mjere sigurnosti za zaštitu vaših podataka.
                  Koristimo SSL enkripciju, sigurne servere i redovite sigurnosne provjere. Pristup podacima imaju samo
                  ovlašteni zaposlenici koji su obvezani čuvati povjerljivost.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-croatia-red via-orange-600 to-croatia-red"></div>
              <div className="relative p-8 md:p-12 text-white">
                <h2 className="text-4xl font-bold mb-6 text-center">Vaša Prava</h2>
                <p className="text-lg text-white/95 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                  Prema GDPR-u imate sljedeća prava:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Pravo na pristup", desc: "Zatražiti kopiju svojih podataka", icon: Eye },
                    { title: "Pravo na ispravak", desc: "Ispraviti netočne podatke", icon: Edit3 },
                    { title: "Pravo na brisanje", desc: "Zatražiti brisanje podataka", icon: Trash2 },
                    { title: "Pravo na ograničenje", desc: "Ograničiti obradu podataka", icon: Pause },
                    { title: "Pravo na prenosivost", desc: "Prenijeti podatke drugdje", icon: Package },
                    { title: "Pravo na prigovor", desc: "Prigovoriti obradi podataka", icon: Hand },
                  ].map((right, index) => {
                    const Icon = right.icon
                    return (
                      <div
                        key={index}
                        className="bg-white/15 backdrop-blur rounded-xl p-6 border border-white/30 hover:bg-white/20 transition-all"
                      >
                        <Icon className="w-10 h-10 mb-3 text-white" />
                        <h3 className="font-bold text-lg mb-2">{right.title}</h3>
                        <p className="text-white/90 text-sm m-0">{right.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-slate-800/50 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-700/50">
              <div className="text-center mb-8">
                <Mail className="w-16 h-16 text-croatia-gold mx-auto mb-4" />
                <h2 className="text-4xl font-bold text-white mb-4">Kontaktirajte Nas</h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Za pitanja o privatnosti ili ostvarivanje svojih prava:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="bg-slate-700/40 backdrop-blur rounded-xl p-6 border border-slate-600/40">
                  <Mail className="w-8 h-8 text-croatia-gold mb-3" />
                  <h3 className="font-bold text-xl mb-2 text-croatia-gold">Email</h3>
                  <a
                    href="mailto:privatnost@sportskokladenje.com"
                    className="text-white hover:text-croatia-gold transition-colors text-lg"
                  >
                    privatnost@sportskokladenje.com
                  </a>
                </div>
                <div className="bg-slate-700/40 backdrop-blur rounded-xl p-6 border border-slate-600/40">
                  <MapPin className="w-8 h-8 text-croatia-gold mb-3" />
                  <h3 className="font-bold text-xl mb-2 text-croatia-gold">Adresa</h3>
                  <p className="text-white text-lg m-0">
                    sportskokladenje.com
                    <br />
                    Zagreb, Hrvatska
                  </p>
                </div>
              </div>
              <p className="text-slate-400 mt-8 text-center text-sm max-w-2xl mx-auto">
                Također možete podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP) ako smatrate da smo
                prekršili vaša prava.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
