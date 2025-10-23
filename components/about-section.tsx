import { Shield, Target, Users, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O <span className="text-slate-400">Nama</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">Vaš pouzdani partner u svijetu sportskog klađenja</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-slate-700 rounded-lg p-3">
                <Target className="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Naša Misija</h3>
                <p className="text-slate-400 leading-relaxed">
                  Pružamo najpouzdanije i najdetaljnije informacije o online kladionicama u Hrvatskoj. Naš cilj je
                  pomoći vam pronaći savršenu platformu za vaše sportsko klađenje kroz nepristrane recenzije i stručne
                  analize.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-slate-700 rounded-lg p-3">
                <Shield className="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Naša Vizija</h3>
                <p className="text-slate-400 leading-relaxed">
                  Želimo biti vodeća platforma za usporedbu kladionica u regiji, poznata po transparentnosti, stručnosti
                  i predanosti sigurnom klađenju. Gradimo zajednicu informiranih igrača koji donose pametne odluke.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 text-center">
            <div className="bg-slate-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-slate-300" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Stručnost</h4>
            <p className="text-slate-400 text-sm">Tim iskusnih analitičara s dugogodišnjim iskustvom</p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 text-center">
            <div className="bg-slate-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-slate-300" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Sigurnost</h4>
            <p className="text-slate-400 text-sm">Preporučujemo samo licencirane i provjerene kladionice</p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 text-center">
            <div className="bg-slate-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-slate-300" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Transparentnost</h4>
            <p className="text-slate-400 text-sm">Nepristrane recenzije bez skrivenih interesa</p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 text-center">
            <div className="bg-slate-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-slate-300" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Zajednica</h4>
            <p className="text-slate-400 text-sm">Gradimo zajednicu odgovornih i informiranih igrača</p>
          </div>
        </div>
      </div>
    </section>
  )
}
