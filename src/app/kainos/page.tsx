'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Footer from '@/components/Footer'

interface PriceItem {
  service: string
  price: string
}

interface PriceSection {
  title: string
  items: PriceItem[]
}

interface FAQItem {
  question: string
  answer: string
}

export default function PricingPage() {
  const [openSections, setOpenSections] = useState<string[]>([])
  const [openFAQ, setOpenFAQ] = useState<string[]>([])

  const toggleSection = (sectionTitle: string) => {
    setOpenSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    )
  }

  const toggleFAQ = (question: string) => {
    setOpenFAQ(prev => 
      prev.includes(question) 
        ? prev.filter(q => q !== question)
        : [...prev, question]
    )
  }

  const pricingSections: PriceSection[] = [
    {
      title: "KONSULTACIJA IR IŠTYRIMAI",
      items: [
        { service: "Specialisto konsultacija", price: "40 €" },
        { service: "Detalaus gydymo plano sudarymas ir išdavimas", price: "60 €" },
        { service: "Dentalinė nuotrauka", price: "10 €" },
      ]
    },
    {
      title: "ENDODONTIJA - KANALŲ GYDYMAS",
      items: [
        { service: "Vienašaknio danties gydymas", price: "130-160 €" },
        { service: "Dvišaknio danties gydymas", price: "260-320 €" },
        { service: "Trišaknio danties gydymas", price: "390-480 €" },
        { service: "Keturišaknio danties gydymas", price: "520-640 €" },

        { service: "", price: "" },

        { service: "Danties revizija", price: "90 €" },
        { service: "Šaknies viršūnės uždarymas, perforacijos gydymas MTA", price: "50-70 €" },
        { service: "Gyvos pulpos gydymas", price: "160 €" },

        { service: "Koferdamo sistema", price: "15 €" },
        { service: "Laikina plomba", price: "30 €" },
        { service: "Kalcio terapija (vieno kanalo)", price: "10 €" },
        { service: "Įkloto, kaiščio ar kito svetimkūnio pašalinimas", price: "60-120 €" },
        { service: "Plombinės medžiagos pašalinimas iš kanalo", price: "35-160 €" },
      ]
    },
    {
      title: "TERAPINIS GYDYMAS",
      items: [
        { service: "Plomba maža", price: "80-90 €" },
        { service: "Plomba vidutinė", price: "100-130 €" },
        { service: "Plomba didelė", price: "130-250 €" },
        { service: "Viso danties atstatymas", price: "150-190 €" },
        { service: "", price: "" },
        { service: "PAPILDOMOS PRIEMONĖS", price: "" },
        { service: "Injekcinis nuskausminimas", price: "10 €" },
        { service: "Burnos plėtiklis", price: "10 €" },
        { service: "Koferdamo Sistema", price: "15 €" },
      ]
    },
    {
      title: "DANTŲ PROTEZAVIMAS",
      items: [
        { service: "Cirkonio keramikos restauracija", price: "400-500 €" },
        { service: "Cirkonio monolito restauracija", price: "360-400 €" },
        { service: "Laikinas plastmasinis vainikėlis gaminamas klinikoje", price: "70 €" },
        { service: "Laikinas plastmasinis vainikėlis gaminamas laboratorijoje", price: "100 €" },
        { service: "", price: "" },
        { service: "PAPILDOMI DARBAI", price: "" },
        { service: "Alginatinis atspaudas", price: "20 €" },
        { service: "Silikonininis atspaudas", price: "40 €" },
        { service: "Skenavimas", price: "100 €" },
        { service: "Danties tvirtinimas 1 kaiščiu / 2 kaiščiais / 3 kaiščiais", price: "100 / 120 / 140 €" },
        { service: "Vainikėlio nupjovimas", price: "20-30 €" },
        { service: "Diagnostinis danties pavaškavimas", price: "20-30 €" },
        { service: "Apsauginė dantų kapa", price: "100-150 €" },
        { service: "", price: "" },
        { service: "IŠIMAMI PROTEZAI", price: "" },
        { service: "Plokštelė", price: "500-650 €" },
        { service: "Termoplastinė plokštelė", price: "700 €" },
        { service: "Plokštelės pataisa", price: "50-230 €" },
        { service: "", price: "" },
        { service: "PROTEZAVIMAS ANT IMPLANTŲ", price: "" },
        { service: "Cirkonio keramikos restauracija ant implanto", price: "460-500 €" },
        { service: "Cirkonio monolito restauracija ant implanto", price: "500-600 €" },
        { service: "Laikinas vainikėlis ant implanto gamintas laboratorijoje", price: "150 €" }
      ]
    },
    {
      title: "DANTŲ HIGIENA",
      items: [
        { service: "Profesionali burnos higiena ( vieno vizito kaina)", price: "80 €" },
        { service: "Dantų floravimas", price: "10-30 €" },
        { service: "Dantų balinimas", price: "120-150 €" },
        { service: "Dantų padengimas silantais", price: "40-70 €" },
        { service: "Dantų balinimo kapos (2vnt)", price: "120-150 €" },
      ]
    },
  ]

  const faqItems: FAQItem[] = [
    {
      question: "Kaip užsiregistruoti vizitui?",
      answer: "Registruotis galite skambindami telefonu +370 123 45678, rašydami el. paštu info@nebeskauda.lt arba užpildydami registracijos formą mūsų svetainėje. Taip pat galite atvykti tiesiai į kliniką - mes stengiamės priimti ir be išankstinio susitarimo."
    },
    {
      question: "Ar priimate draudimo kompanijų apmokėjimus?",
      answer: "Taip, dirbame su visomis pagrindinėmis draudimo kompanijomis Lietuvoje. Prieš procedūrą patikrinkite savo draudimo poliso sąlygas ir informuokite mus apie draudimą registruodamiesi vizitui."
    },
    {
      question: "Ar dantų implantacija skausmingas procesas?",
      answer: "Implantacijos procedūra atliekama vietinės nejautros metu, todėl skausmo nejausite. Po procedūros gali būti nedidelis nemalonumas, kurį lengvai galima kontroliuoti skausmažudžiais. Visą gydymo procesą kruopščiai kontroliuojame."
    },
    {
      question: "Kiek laiko trunka implanto įgijimas?",
      answer: "Implanto įgijimas į kaulus trunka 3-6 mėnesius. Šis laikas priklauso nuo jūsų individualių organizmo ypatybių, kaulų kokybės ir implanto vietos. Laikinąją kronelę galime uždėti iš karto arba po kelių savaičių."
    },
    {
      question: "Ar galiu valgyti po dantų gydymo procedūrų?",
      answer: "Po paprastų gydymo procedūrų valgyti galite iš karto, tačiau rekomenduojame vengti labai karštų ar šaltų maisto produktų 2-3 valandas. Po chirurginių procedūrų duosime detalius nurodymus apie mitybą ir dantų priežiūrą."
    },
    {
      question: "Kaip dažnai reikia atlikti dantų higieną?",
      answer: "Profesionalią dantų higieną rekomenduojame atlikti kas 6 mėnesius. Žmonėms, turintiems dantų problemų ar gingivitą, gali prireikti dažnesnės higienos - kas 3-4 mėnesius. Individualų grafiką aptarsime konsultacijos metu."
    },
    {
      question: "Ar teikiate garantijas procedūroms?",
      answer: "Taip, visoms mūsų atliekamoms procedūroms teikiame garantijas. Plomboms garantija 2 metai, kronelėms ir tiltams - 3-5 metai, implantams - 5-10 metų. Garantijos sąlygos priklauso nuo procedūros tipo ir jūsų dantų priežiūros."
    },
    {
      question: "Ar galima atvesti vaikus į kliniką?",
      answer: "Žinoma! Mūsų klinikoje dirbă vaikų odontologijos specialistė. Priimame vaikus nuo 3 metų amžiaus. Stengiamės sukurti draugišką aplinką mažiesiems pacientams ir padėti jiems nebijojai dantų gydytojo."
    },
    {
      question: "Ką daryti dantų skausmo atveju?",
      answer: "Stipraus dantų skausmo atveju nedelsiant skambinkite mums telefonu. Turime skubios pagalbos paslaugą darbo dienomis. Iki vizito galite vartoti skausmažudžius ir skauti burną šiltu sūraus vandens tirpalu."
    },
    {
      question: "Kokias mokėjimo galimybes siūlote?",
      answer: "Priimame grynuosius pinigus, mokėjimo korteles ir banko pavedimus. Brangesnėms procedūroms siūlome išsimokėjimo planus iki 24 mėnesių. Taip pat galime išrašyti sąskaitą įmonėms ir dirbame su draudimo kompanijomis."
    }
  ]

  return (
    <div className="min-h-screen bg-[#E6E4DE] text-black font-sans">
       {/* Hero Section */}
       <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" />
        
        {/* Main Title - Centered */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-[6rem] font-light leading-none text-center tracking-wider font-louize-display">
            <div>Kainos</div>
          </h1>
        </div>

        {/* Bottom Left - Description */}
        <div className="absolute bottom-16 left-8 z-10 max-w-sm">
          <p className="text-xs uppercase tracking-wide text-gray-700 leading-relaxed">
            VISAPUSIŠKAS DANTŲ GYDYMAS. ŠIUOLAIKIŠKAS ĮRANGA IR PATYRUSI KOMANDA UŽTIKRINA 
            AUKŠČIAUSIOS KOKYBĖS PASLAUGAS KIEKVIENAM PACIENTUI.
          </p>
        </div>

        {/* Bottom Right - Register Button */}
        <div className="absolute bottom-16 right-8 z-10">
          <button
            onClick={() => {
              const element = document.getElementById('services-grid')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="px-6 py-3 border-2 border-black text-black text-sm font-medium tracking-wide uppercase 
                     hover:bg-black rounded-full hover:text-white transition-all duration-300 
                     focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Žiūrėti paslaugas
          </button>
        </div>
      </section>

      {/* Pricing Sections - With Space from Navbar */}
      <section className="pt-16">
        <div className="ml-auto w-2/3 border-r border-black/20">
          {pricingSections.map((section, index) => (
            <div key={index} className={`border-b border-black/20 ${index === 0 ? 'border-t border-black/20' : ''}`}>
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between px-8 py-6 text-left focus:outline-none hover:bg-white/20 transition-colors"
              >
                <h3 className="text-xl font-medium tracking-wide uppercase">
                  {section.title}
                </h3>
                <div className={`transition-transform duration-500 ${openSections.includes(section.title) ? 'rotate-180' : ''}`}>
                  <ChevronDown className="h-4 w-4 text-black/60" />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openSections.includes(section.title) 
                  ? 'max-h-screen opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start py-1">
                        <span className="text-xl text-black/80 pr-4 leading-relaxed">
                          {item.service}
                        </span>
                        <span className="text-xl font-medium whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 pt-6 border-t border-black/10 text-sm text-black/70 leading-relaxed">
                    Šiame kainyne yra nurodytos bazinės paslaugų kainos. Darbo apimtis, sudėtingumas ir rizika priklauso nuo bendros paciento sveikatos buklės, burnos ertmės stovio, sąkandžio patalogijų ir komplikuotumo. Kiekvienu konkrečiu atveju galutinę kainą nustato gydantis gydytojas.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing between sections */}
      <div className="h-16 bg-[#E6E4DE]"></div>

      {/* FAQ Section - Full Width */}
      <section className="pb-16">
        <div className="w-full">
          {/* FAQ Header */}
          <div className="border-t border-black/20 px-8 py-8">
            <h2 className="text-lg font-medium tracking-wide uppercase text-black/90">
              Dažnai užduodami klausimai
            </h2>
          </div>
          
          {/* FAQ Items - 2 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {faqItems.map((faq, index) => (
              <div key={index} className={`border-t border-black/20 ${index % 2 === 0 ? 'lg:border-r lg:border-black/20' : ''}`}>
                <button
                  onClick={() => toggleFAQ(faq.question)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left focus:outline-none hover:bg-white/20 transition-colors"
                >
                  <h3 className="text-sm font-medium pr-4 leading-relaxed">
                    {faq.question}
                  </h3>
                  <div className={`transition-transform duration-500 flex-shrink-0 ${openFAQ.includes(faq.question) ? 'rotate-180' : ''}`}>
                    <ChevronDown className="h-4 w-4 text-black/60" />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ.includes(faq.question) 
                    ? 'max-h-screen opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <p className="text-sm text-black/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 