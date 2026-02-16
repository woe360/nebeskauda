'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'

interface PriceItem {
  service: string
  price: string
}

interface PriceSection {
  title: string
  items: PriceItem[]
}

export default function PricingPage() {
  const [openSections, setOpenSections] = useState<string[]>([])

  const toggleSection = (sectionTitle: string) => {
    setOpenSections(prev =>
      prev.includes(sectionTitle)
        ? prev.filter(title => title !== sectionTitle)
        : [sectionTitle]
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

  return (
    <div className="min-h-screen bg-[#E6E4DE] text-black font-sans overflow-x-hidden">
       {/* Hero Section - stacked on mobile to avoid overlap */}
       <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0" />
        
        {/* Main Title - Centered */}
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full flex-1 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-[6rem] font-light leading-none text-center tracking-wider font-louize-display">
            <div>Kainos</div>
          </h1>
        </div>

        {/* Bottom: stacked on mobile; on desktop full-width with text left, button right */}
        <div className="relative z-10 w-full max-w-5xl mx-auto md:max-w-none md:mx-0 flex flex-col md:flex-row md:absolute md:bottom-16 md:left-0 md:right-0 md:justify-between md:items-end md:px-8 gap-6 pb-8 md:pb-0">
          <p className="text-xs uppercase tracking-wide text-gray-700 leading-relaxed max-w-sm order-2 md:order-1 md:max-w-sm">
            VISAPUSIŠKAS DANTŲ GYDYMAS. ŠIUOLAIKIŠKAS ĮRANGA IR PATYRUSI KOMANDA UŽTIKRINA 
            AUKŠČIAUSIOS KOKYBĖS PASLAUGAS KIEKVIENAM PACIENTUI.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('services-grid')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="px-6 py-3 border-1 border-black text-black text-sm font-normal tracking-wide uppercase 
                     hover:bg-black rounded-full hover:text-white transition-all duration-300 
                     focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 w-fit order-1 md:order-2 shrink-0"
          >
            Žiūrėti kainas
          </button>
        </div>
      </section>

      {/* Pricing Sections - lines start where text starts, touch right edge; content has same side space as Žiūrėti kainas */}
      <section id="services-grid" className="pt-16 px-4 sm:px-6 lg:pl-10 lg:pr-0 overflow-x-hidden">
        <div className="w-full border-t border-black/20 lg:ml-[max(0px,calc(100vw-1056px-2.5rem))] lg:w-[min(1056px,calc(100vw-2.5rem))]">
          {pricingSections.map((section, index) => (
            <div key={index} className="border-b border-black/20">
              <div className="px-4 sm:px-6 lg:pl-0 lg:pr-8">
                <button
                  onClick={() => toggleSection(section.title)}
                  className={`w-full flex items-center justify-between py-6 text-left focus:outline-none hover:italic transition-colors ${openSections.includes(section.title) ? 'italic' : ''}`}
                >
                  <h3 className="text-lg sm:text-xl font-normal tracking-wide uppercase pr-4">
                    {section.title}
                  </h3>
                  <div
                    className={`flex-shrink-0 relative w-5 h-5 opacity-95 brightness-[0.65] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${openSections.includes(section.title) ? 'rotate-180' : ''}`}
                  >
                    <Image
                      src="/icons8-expand-arrow-50.png"
                      alt={openSections.includes(section.title) ? 'Sutraukti' : 'Išskleisti'}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </button>
              </div>
              
              <div
                className="grid"
                style={{
                  gridTemplateRows: openSections.includes(section.title) ? '1fr' : '0fr',
                  transition: 'grid-template-rows 0.6s cubic-bezier(0.32, 0.72, 0, 1)',
                }}
              >
                <div className="overflow-hidden min-h-0">
                <div className="px-4 sm:px-6 lg:pl-0 lg:pr-8 pb-6">
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`py-1 ${item.service ? 'flex flex-col sm:flex-row sm:justify-between sm:items-start gap-0 sm:gap-4' : ''}`}
                      >
                        {item.service ? (
                          <>
                            <span className="text-base sm:text-xl text-black/80 leading-relaxed min-w-0">
                              {item.service}
                            </span>
                            <span className="text-base sm:text-xl font-medium shrink-0 mt-0.5 sm:mt-0">
                              {item.price}
                            </span>
                          </>
                        ) : (
                          <span className="block h-2" aria-hidden />
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 pt-6 border-t border-black/10 text-sm text-black/70 leading-relaxed">
                    Šiame kainyne yra nurodytos bazinės paslaugų kainos. Darbo apimtis, sudėtingumas ir rizika priklauso nuo bendros paciento sveikatos buklės, burnos ertmės stovio, sąkandžio patalogijų ir komplikuotumo. Kiekvienu konkrečiu atveju galutinę kainą nustato gydantis gydytojas.
                  </p>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing between sections */}
      <div className="h-16 bg-[#E6E4DE]"></div>

      
      <Footer />
    </div>
  )
} 