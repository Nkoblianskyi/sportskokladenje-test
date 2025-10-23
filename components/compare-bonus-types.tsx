import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, Percent, Sparkles } from "lucide-react"

export function CompareBonusTypes() {
  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-white via-croatia-cream to-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-croatia-blue/40 to-transparent" />

      <div className="container mx-auto px-3 md:px-4 max-w-[1280px] relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-croatia-red/10 border border-croatia-red/30 rounded-full px-4 py-2 mb-4">
            <Gift className="w-5 h-5 text-croatia-red" />
            <span className="text-sm font-bold text-croatia-red">Vrste Bonusa</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Usporedite Vrste
            <span className="block text-croatia-red mt-2">Bonusa</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Card className="bg-white border-2 border-croatia-red/40 hover:border-croatia-red/70 hover:shadow-lg transition-all hover:scale-[1.02] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-croatia-red/5 blur-2xl rounded-full group-hover:bg-croatia-red/10 transition-all" />
            <CardHeader className="p-4 md:p-6 relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-croatia-red/20 rounded-lg">
                  <Sparkles className="w-5 h-5 text-croatia-red" />
                </div>
                <CardTitle className="text-base md:text-lg text-gray-900">Besplatne Oklade</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0 md:p-6 md:pt-0 relative z-10">
              <CardDescription className="text-xs md:text-sm text-gray-700 leading-relaxed">
                Primite besplatne oklade nakon što napravite kvalifikacijsku okladu. Koristite ove besplatne oklade za
                klađenje bez rizika vlastitog novca. Dobici obično isključuju ulog.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-croatia-blue/40 hover:border-croatia-blue/70 hover:shadow-lg transition-all hover:scale-[1.02] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-croatia-blue/5 blur-2xl rounded-full group-hover:bg-croatia-blue/10 transition-all" />
            <CardHeader className="p-4 md:p-6 relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-croatia-blue/20 rounded-lg">
                  <Percent className="w-5 h-5 text-croatia-blue" />
                </div>
                <CardTitle className="text-base md:text-lg text-gray-900">Bonus na Depozit</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0 md:p-6 md:pt-0 relative z-10">
              <CardDescription className="text-xs md:text-sm text-gray-700 leading-relaxed">
                Kladionice podudaraju postotak vašeg prvog depozita kao bonus sredstva. Ovi obično dolaze s uvjetima
                klađenja prije nego što možete podići sredstva.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-croatia-red/40 hover:border-croatia-red/70 hover:shadow-lg transition-all hover:scale-[1.02] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-croatia-red/5 blur-2xl rounded-full group-hover:bg-croatia-red/10 transition-all" />
            <CardHeader className="p-4 md:p-6 relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-croatia-red/20 rounded-lg">
                  <Gift className="w-5 h-5 text-croatia-red" />
                </div>
                <CardTitle className="text-base md:text-lg text-gray-900">Bez Depozita</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0 md:p-6 md:pt-0 relative z-10">
              <CardDescription className="text-xs md:text-sm text-gray-700 leading-relaxed">
                Primite bonus sredstva ili besplatne oklade samo registracijom, bez potrebe za depozitom. Ovi obično
                imaju strože uvjete i niže iznose, ali su bez rizika.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
