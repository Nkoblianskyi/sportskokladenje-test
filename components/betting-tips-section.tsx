import { Lightbulb, TrendingUp, Calculator, Brain, Target, BookOpen } from "lucide-react"

export function BettingTipsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-full px-6 py-3 mb-6">
            <Lightbulb className="w-5 h-5 text-slate-400" />
            <span className="text-slate-300 font-semibold">Savjeti i Strategije</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kako Poboljšati Svoje <span className="text-slate-400">Klađenje</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Stručni savjeti za pametnije i uspješnije sportsko klađenje
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="bg-slate-700 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
              <Brain className="w-7 h-7 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Istraživanje je Ključ</h3>
            <p className="text-slate-400 leading-relaxed">
              Prije klađenja, proučite statistike, forme timova, ozljede igrača i međusobne rezultate. Informirana
              odluka je pametna odluka.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="bg-slate-700 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
              <Calculator className="w-7 h-7 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Upravljanje Budžetom</h3>
            <p className="text-slate-400 leading-relaxed">
              Postavite mjesečni budžet i nikada ga ne prelazite. Preporučujemo ulaganje maksimalno 1-5% budžeta po
              okladi.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="bg-slate-700 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Specijalizirajte Se</h3>
            <p className="text-slate-400 leading-relaxed">
              Fokusirajte se na nekoliko sportova ili liga koje dobro poznajete. Stručnost u užem području donosi bolje
              rezultate.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="bg-slate-700 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Tražite Vrijednost</h3>
            <p className="text-slate-400 leading-relaxed">
              Ne kladite se samo na favorite. Tražite okladu gdje smatrate da su kvote bolje nego što stvarna
              vjerojatnost sugerira.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="bg-slate-700 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Vodite Evidenciju</h3>
            <p className="text-slate-400 leading-relaxed">
              Zapisujte sve svoje oklade, dobitke i gubitke. Analiza vlastitih rezultata pomaže identificirati greške i
              poboljšati strategiju.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="bg-slate-700 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Izbjegavajte Emocije</h3>
            <p className="text-slate-400 leading-relaxed">
              Ne kladite se na svoj omiljeni tim samo iz lojalnosti. Budite objektivni i donosite racionalne odluke
              temeljene na činjenicama.
            </p>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-4">Zlatno Pravilo</h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Nikada ne pokušavajte "vratiti" izgubljeni novac povećanjem uloga. To je najbrži put do većih gubitaka.
            Prihvatite gubitke kao dio igre, analizirajte što je pošlo po zlu i nastavite s planiranom strategijom.
            Disciplina i strpljenje su ključ dugoročnog uspjeha u sportskom klađenju.
          </p>
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-4 border border-slate-600/50">
            <p className="text-slate-300 font-semibold">
              💡 Zapamtite: Klađenje je maraton, ne sprint. Fokusirajte se na dugoročnu profitabilnost, ne na brze
              dobitke.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
