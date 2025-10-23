"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Je li online klađenje legalno u Hrvatskoj?",
      answer:
        "Da, online klađenje je potpuno legalno u Hrvatskoj. Sve kladionice koje preporučujemo posjeduju važeće licence izdane od strane hrvatskih ili međunarodnih regulatornih tijela. Važno je koristiti samo licencirane platforme kako biste bili zaštićeni zakonom i imali pristup sigurnim uslugama.",
    },
    {
      question: "Kako odabrati najbolju kladionicu za mene?",
      answer:
        "Odabir ovisi o vašim prioritetima. Razmotrite: sportsku ponudu (koje sportove pratite), konkurentnost kvota, kvalitetu bonusa, dostupne metode plaćanja, mobilnu aplikaciju i korisničku podršku. Naše detaljne recenzije uspoređuju sve ove aspekte kako biste lakše donijeli odluku.",
    },
    {
      question: "Što je bonus dobrodošlice i kako ga koristiti?",
      answer:
        "Bonus dobrodošlice je promocijska ponuda za nove korisnike, obično u obliku bonusa na prvu uplatu ili besplatnih oklada. Prije aktivacije pročitajte uvjete - posebno zahtjeve za klađenje (wagering requirements), minimalne kvote i rok valjanosti. Neki bonusi mogu imati strože uvjete od drugih.",
    },
    {
      question: "Koliko brzo mogu podići svoj dobitak?",
      answer:
        "Vrijeme isplate varira ovisno o kladionici i metodi plaćanja. E-novčanici (Skrill, Neteller) su najbrži (24-48 sati), kreditne kartice 3-5 dana, a bankovni prijenosi mogu trajati do 7 dana. Prva isplata zahtijeva verifikaciju identiteta što može produžiti proces za 1-2 dana.",
    },
    {
      question: "Je li sigurno kladiti se putem mobilnog uređaja?",
      answer:
        "Da, mobilno klađenje je potpuno sigurno ako koristite licencirane kladionice. Sve moderne platforme koriste SSL enkripciju i iste sigurnosne protokole kao desktop verzije. Preporučujemo korištenje službenih aplikacija ili mobilnih web stranica, te izbjegavanje javnih Wi-Fi mreža pri transakcijama.",
    },
    {
      question: "Što ako imam problem ili pritužbu na kladionicu?",
      answer:
        "Prvo kontaktirajte korisničku podršku kladionice putem live chata, emaila ili telefona. Ako problem nije riješen, možete se obratiti regulatornom tijelu koje je izdalo licencu. Sve licencirane kladionice moraju imati jasne procedure za rješavanje pritužbi i zaštitu igrača.",
    },
    {
      question: "Kako funkcioniraju kvote i kako ih čitati?",
      answer:
        "Kvote predstavljaju vjerojatnost ishoda i određuju potencijalni dobitak. U decimalnom formatu (najčešći u Hrvatskoj), kvota 2.00 znači da ćete dobiti 2x ulog ako pobijedite. Viša kvota = manji vjerojatnost ishoda = veći potencijalni dobitak. Primjer: ulog 100 kn na kvotu 3.50 = 350 kn ukupno (250 kn dobitka).",
    },
    {
      question: "Postoje li naknade za uplate i isplate?",
      answer:
        "Većina renomiranih kladionica ne naplaćuje naknade za standardne uplate i isplate. Međutim, neki pružatelji usluga plaćanja (banke, e-novčanici) mogu naplatiti vlastite naknade. Također, neke kladionice naplaćuju naknadu za neaktivnost računa ili vrlo male isplate. Uvijek provjerite uvjete prije transakcije.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Često Postavljana <span className="text-slate-400">Pitanja</span>
          </h2>
          <p className="text-xl text-slate-400">Odgovori na najvažnija pitanja o online klađenju</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-800/70 transition-colors group"
              >
                <span className="font-bold text-white pr-4 text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-slate-400 flex-shrink-0 transition-transform group-hover:text-slate-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2 border-t border-slate-700/50">
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Niste pronašli odgovor?</h3>
          <p className="text-slate-400 mb-4">Kontaktirajte nas i rado ćemo odgovoriti na vaša pitanja</p>
          <a
            href="mailto:info@sportskokladenje.com"
            className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-600 transition-all"
          >
            info@sportskokladenje.com
          </a>
        </div>
      </div>
    </section>
  )
}
