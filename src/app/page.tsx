'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Image from 'next/image'
import PaslaugosSection from '@/components/PaslaugosSection'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function HomePage() {
  const [openFAQ, setOpenFAQ] = useState<string[]>([])
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const toggleFAQ = (question: string) => {
    setOpenFAQ(prev => 
      prev.includes(question) 
        ? prev.filter(q => q !== question)
        : [...prev, question]
    )
  }

  const testimonials = [
    {
      text: "Burnos higiena be streso ir skausmo – nuoširdžiai dėkoju Kristinai už rūpestingą ir profesionalų darbą.",
      name: "Ona Petraitienė"
    },
    {
      text: "Modernus įranga ir jauki aplinka. Implantų procedūra praėjo sklandžiai, esu labai patenkintas rezultatu.",
      name: "Mindaugas Kazlauskas"
    },
    {
      text: "Vaikų dantų gydymas praėjo puikiai. Daktaras sugebėjo nuraminti vaiką ir atlikti viską be streso.",
      name: "Rasa Stonkuvienė"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const faqItems = [
    {
      question: "Kaip užsiregistruoti vizitui?",
      answer: "Registruotis galite skambindami telefonu +370 62 87 67 67, rašydami el. paštu info@nebeskauda.lt arba užpildydami registracijos formą mūsų svetainėje. Taip pat galite atvykti tiesiai į kliniką - mes stengiamės priimti ir be išankstinio susitarimo."
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
      answer: "Žinoma! Mūsų klinikoje dirbą vaikų odontologijos specialistė. Priimame vaikus nuo 3 metų amžiaus. Stengiamės sukurti draugišką aplinką mažiesiems pacientams ir padėti jiems nebijojai dantų gydytojo."
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
    <div className="min-h-screen bg-[#E6E4DE] overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0" />
        
        {/* Main Title - Centered */}
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full flex-1 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-[6rem] font-light leading-none text-center tracking-wider font-louize-display">
            <div>Nebeskauda</div>
          </h1>
        </div>

        {/* Bottom: stacked on mobile; on desktop full-width with text left, button right */}
        <div className="relative z-10 w-full max-w-5xl mx-auto md:max-w-none md:mx-0 flex flex-col md:flex-row md:absolute md:bottom-16 md:left-0 md:right-0 md:justify-between md:items-end md:px-8 gap-6 pb-8 md:pb-0">
          <p className="text-xs uppercase tracking-wide text-gray-700 leading-relaxed max-w-sm order-2 md:order-1 md:max-w-sm">
            ŠIUOLAIKIŠKAS POŽIŪRIS Į DANTŲ PRIEŽIŪRĄ. MŪSŲ KOMANDA UŽTIKRINA AUKŠČIAUSIOS 
            KOKYBĖS GYDYMĄ IR INDIVIDUALŲ PACIENTŲ APTARNAVIMĄ.
          </p>
          <Link 
            href="/kontaktai#registration-form"
            className="px-6 py-3 border-1 rounded-full border-black text-black text-sm font-medium tracking-wide uppercase 
                     hover:bg-black hover:text-white transition-all duration-300 
                     focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 w-fit order-1 md:order-2 shrink-0"
          >
            Registruotis vizitui
          </Link>
        </div>
      </section>

      <PaslaugosSection />

      <section id="about-content" className="py-32 border-t border-black/20">
        <div className="max-w-1960px mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Image */}
            <div className="order-1 lg:order-2">
              <div className="aspect-[3/3] relative overflow-hidden">
                <Image
                  src="/Gabriele-Dile-foto.png"
                  alt="Gabrielė Dilė"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-2 lg:order-1 space-y-12">
              <div className="space-y-8">
                <div>
                  <div className="text-sm tracking-wider uppercase text-gray-500 mb-4">
                    Gydytoja odontologė
                  </div>
                  <h2 className="text-5xl md:text-6xl font-light tracking-wide font-louize-display text-gray-900 mb-6">
                    Gabrielė Dilė
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-[1px] bg-black/30"></div>
                    <span className="text-sm tracking-wider uppercase text-gray-600">
                      10+ metų patirtis
                    </span>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-gray-700 max-w-md">
                    Mano pagridinis fokusas - endodontija. Dirbu su pažangiausia įranga, mikroskopu leidžiančiu pasiekti maksimalų tikslumą.
                    Vadovaujuosi individualizuotu požiuriu į pacientą, siekdama aukščiausios gydymo kokybės, komforto ir ilgalaikių rezultatų. 


                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-4 max-w-md">
                  <div className="text-md text-gray-600">
                    • Lietuvos sveikatos mokslų universitetas
                  </div>
                  <div className="text-md text-gray-600">
                    • Lietuvos endodologų draugija
                  </div>
                  <div className="text-md text-gray-600">
                    • Europos sąjungos endodontologų asocijacija
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#37383c]/60 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-12 lg:mb-20 font-louize-display">
            Pasirūpinome virš 5000 dantų
          </h2>
        </div>

        {/* Full-width row: arrows on the sides, quote in the center */}
        <div className="w-full flex items-center justify-between gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
          <button
            onClick={prevTestimonial}
            className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Ankstesnis atsiliepimas"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="flex-1 min-w-0 max-w-4xl mx-auto text-center px-2 sm:px-4">
            <blockquote className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 italic">
              &ldquo;{testimonials[currentTestimonial].text}&rdquo;
            </blockquote>
            <div className="text-sm tracking-wider uppercase text-white/70">
              KLINIKOS PACIENTAS
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Kitas atsiliepimas"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2 mt-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Full Width */}
      <section className="pb-16 my-20">
        <div className="w-full">
          {/* FAQ Header */}
          <div className="px-8 py-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide text-black/90 font-louize-display">
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

      {/* CTA Section */}
      <section className="py-45 border-t border-black/20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-medium tracking-wide text-black font-louize-display">
              Pradėkime kelią į sveikus dantis
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <a 
                href="tel:+370 628 76 76"
                className="flex-1 px-6 rounded-full py-3 border-2 border-black text-black text-sm font-medium tracking-wide uppercase 
                         hover:bg-black hover:text-white transition-all duration-300 
                         focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 
                         flex items-center justify-center"
              >
                SKAMBINTI
              </a>
              <Link 
                href="/kontaktai#registration-form"
                className="flex-1 px-6 rounded-full py-3 border-2 border-black text-black text-sm font-medium tracking-wide uppercase 
                         hover:bg-black hover:text-white transition-all duration-300 
                         focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 
                         flex items-center justify-center"
              >
                REGISTRUOTIS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
