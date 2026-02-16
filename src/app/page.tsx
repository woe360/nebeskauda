'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Image from 'next/image'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  details: string[]
  price: string
  duration: string
  illustration: React.ReactNode
}

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
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
            className="px-6 py-3 border-2 rounded-full border-black text-black text-sm font-medium tracking-wide uppercase 
                     hover:bg-black hover:text-white transition-all duration-300 
                     focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 w-fit order-1 md:order-2 shrink-0"
          >
            Registruotis vizitui
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-t border-black/20">
        {/* Services Grid - single right border on mobile (no double border) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:border-r md:border-l border-black/20">
          {[
            {
              id: 'konsultacija-ir-istyrimal',
              title: 'KONSULTACIJA IR IŠTYRIMAI',
              subtitle: 'Profesionali diagnostika',
              description: 'Specialisto konsultacijos, detalaus gydymo plano sudarymas ir išdavimas, bei visi reikalingi tyrimai.',
              details: [
                'Specialisto konsultacija',
                'Detalaus gydymo plano sudarymas ir išdavimas',
                'Panoraminė nuotrauka',
                'Dentalinė nuotrauka',
                'Konsultacija su gydymo planu'
              ],
              price: 'Nuo 40€',
              duration: '30-60 min',
              illustration: <ConsultationIllustration />
            },
            {
              id: 'endodontija-kanalu-gydymas',
              title: 'ENDODONTIJA - KANALŲ GYDYMAS',
              subtitle: 'Šaknų kanalų gydymas',
              description: 'Profesionalus dantų šaknų kanalų gydymas, kuris išsaugo natūralius dantis ir pašalina skausmą.',
              details: [
                'Šaknų kanalų gydymas (1 kanalas)',
                'Šaknų kanalų gydymas (2-3 kanalai)',
                'Šiuolaikiškas įranga',
                'Skausmo šalinimas',
                'Dantų išsaugojimas'
              ],
              price: 'Nuo 80€',
              duration: '1-2 val',
              illustration: <EndodonticsIllustration />
            },
            {
              id: 'dantu-protezavimas',
              title: 'DANTŲ PROTEZAVIMAS',
              subtitle: 'Funkcionalus atkūrimas',
              description: 'Kokybiški protezai, kurie atkuria dantų funkcionalumą ir estetinį vaizdą.',
              details: [
                'Keramikos kronelė',
                'Metalkeramikos kronelė',
                'Cirkoninė kronelė',
                'Dantų tiltas',
                'Nuimami protezai'
              ],
              price: 'Nuo 200€',
              duration: '2-3 apsilankymai',
              illustration: <ProsthetsIllustration />
            },
            {
              id: 'dantu-gydymas',
              title: 'TERAPINIS GYDYMAS',
              subtitle: 'Profesionalus gydymas',
              description: 'Visapusiškas dantų bei burnos ertmės gydymas, profilaktika ir konsultacijos su patyrusia komanda.',
              details: [
                'Dantų ėduonies gydymas (plomba)',
                'Dantų pašalinimas (paprastas)',
                'Sudėtingas dantų išėmimas',
                'Išminties danties šalinimas',
                'Konsultacijos ir patarimai'
              ],
              price: 'Nuo 50€',
              duration: '30-60 min',
              illustration: <ToothTreatmentIllustration />
            },
            {
              id: 'dantu-higiena',
              title: 'DANTŲ HIGIENA',
              subtitle: 'Profesionalus valymas',
              description: 'Šiuolaikiškas dantų valymas ir burnos ertmės priežiūra sveikoms dantenoms.',
              details: [
                'Profesionalus dantų valymas',
                'Ultragarsinis akmens šalinimas',
                'Air-flow valymas',
                'Dantų poliravimas',
                'Fluoridavimas'
              ],
              price: 'Nuo 60€',
              duration: '45-60 min',
              illustration: <HygieneIllustration />
            }
          ].map((service, index) => (
            <div
              key={service.id}
              className="bg-[#E6E4DE] border-b border-black/20 md:border-r md:border-b-0 p-6 sm:p-8 hover:bg-white/30 transition-all duration-300 cursor-pointer group min-h-[320px] md:min-h-[400px] flex flex-col"
              onClick={() => setSelectedService(service)}
            >
              {/* Illustration */}
              <div className="flex-1 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                {service.illustration}
              </div>
              
              {/* Content */}
              <div className="space-y-2">
                <div className="text-xs font-medium tracking-wider text-gray-600">
                  ({index + 1}/5)
                </div>
                <h3 className="text-lg font-medium tracking-wide">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        {/* <div className="border-r border-l border-black/20 p-8 text-center bg-[#E6E4DE]">
          
          <Link 
                  href="/paslaugos"
                  className="inline-block px-8 py-3 border-2 border-black text-black text-sm font-medium tracking-wide uppercase 
                           hover:bg-black hover:text-white transition-all duration-300 
                           focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  VISOS PASLAUGOS
                </Link>
        </div> */}
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-[#E6E4DE] z-50 overflow-y-auto overflow-x-hidden">
          
          {/* Close button at top */}
          <div className="w-full border-b border-black/20 shrink-0">
            <button
              onClick={() => setSelectedService(null)}
              className="w-full text-center py-[18px] text-black text-sm font-medium tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
            >
              UŽDARYTI
            </button>
          </div>

          {/* Main content - stacked on mobile, side-by-side on desktop */}
          <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
            {/* Illustration - smaller on mobile */}
            <div className="flex-1 flex items-center justify-center p-6 lg:p-16 lg:border-r border-b lg:border-b-0 border-black/20 shrink-0">
              <div className="w-full max-w-[200px] lg:max-w-2xl scale-100 lg:scale-150">
                {selectedService.illustration}
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-96 p-6 sm:p-8 lg:p-16 flex flex-col justify-center overflow-y-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-light tracking-wide mb-2">
                    {selectedService.title}
                  </h2>
                  <p className="text-sm text-gray-600 font-medium tracking-wider mb-6">
                    {selectedService.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium tracking-wide text-sm">PASLAUGOS APIMA:</h4>
                  <ul className="space-y-3">
                    {selectedService.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1 h-1 bg-black rounded-full mr-3 mt-2"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/20">
                  <div>
                    <div className="text-xs text-gray-500 mb-2 tracking-wider">KAINA</div>
                    <div className="font-medium">{selectedService.price}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-2 tracking-wider">TRUKMĖ</div>
                    <div className="font-medium">{selectedService.duration}</div>
                  </div>
                </div>

                <Link
                  href="/kontaktai#registration-form"
                  className="w-full bg-black text-white py-4 mt-8 text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors block text-center"
                >
                  REGISTRUOTIS VIZITUI
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

<section id="about-content" className="py-32 border-t border-black/20">
        <div className="max-w-7xl mx-auto px-8">
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
      <section className="py-16 sm:py-24 lg:py-32 bg-[#37383c] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-12 lg:mb-20 font-louize-display">
            Pasirūpinome virš 5000 dantų
          </h2>
          
          {/* Testimonial Content - wider quote on mobile */}
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Arrows - inside bounds on mobile to avoid overflow */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors z-10"
              aria-label="Ankstesnis atsiliepimas"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors z-10"
              aria-label="Kitas atsiliepimas"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            {/* Testimonial Text - less padding on mobile so quote is wider */}
            <div className="px-12 sm:px-16 md:px-20">
              <blockquote className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 italic">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </blockquote>
              
              {/* Patient Label */}
              <div className="text-sm tracking-wider uppercase text-white/70">
                KLINIKOS PACIENTAS
              </div>
            </div>
          </div>
          
          {/* Dots Indicator */}
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

// Illustration Components
function ConsultationIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700">
      <rect x="60" y="80" width="80" height="60" rx="4" />
      <path d="M70 95h60 M70 105h60 M70 115h40" />
      <circle cx="100" cy="50" r="25" />
      <path d="M90 50l5 5 10-10" strokeWidth="2" />
      <path d="M50 140l20 20 M150 140l-20 20" strokeDasharray="2,2" />
      <circle cx="40" cy="160" r="3" fill="currentColor" />
      <circle cx="160" cy="160" r="3" fill="currentColor" />
    </svg>
  )
}

function EndodonticsIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700">
      <path d="M100 40c-20 0-35 15-35 35 0 15 8 25 8 40 0 20 12 35 27 35s27-15 27-35c0-15 8-25 8-40 0-20-15-35-35-35z" />
      <path d="M100 60v20" strokeWidth="2" />
      <path d="M100 100v30" strokeWidth="2" />
      <path d="M85 80v25" />
      <path d="M115 80v25" />
      <circle cx="100" cy="100" r="8" strokeDasharray="2,2" />
      <path d="M92 92l16 16 M108 92l-16 16" strokeWidth="1.5" />
      <path d="M70 60c-5-5-10-8-15-10" strokeDasharray="2,2" />
      <path d="M130 60c5-5 10-8 15-10" strokeDasharray="2,2" />
    </svg>
  )
}

function ToothTreatmentIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700">
      <path d="M100 40c-20 0-35 15-35 35 0 15 8 25 8 40 0 20 12 35 27 35s27-15 27-35c0-15 8-25 8-40 0-20-15-35-35-35z" />
      <path d="M85 80v25" />
      <path d="M115 80v25" />
      <path d="M75 60l50 0" />
      <path d="M80 130l40 0" />
      <circle cx="70" cy="100" r="15" strokeDasharray="2,2" />
      <path d="M60 95l8 0 M60 105l8 0" />
    </svg>
  )
}

function HygieneIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700">
      <rect x="40" y="80" width="120" height="40" rx="20" />
      <path d="M60 100l100 0" />
      <path d="M70 90l10 0 M70 110l10 0" />
      <path d="M90 90l10 0 M90 110l10 0" />
      <path d="M110 90l10 0 M110 110l10 0" />
      <path d="M130 90l10 0 M130 110l10 0" />
      <circle cx="50" cy="100" r="8" />
      <circle cx="150" cy="100" r="8" />
      <path d="M30 60c10-10 25-15 40-10" strokeDasharray="3,3" />
      <path d="M170 60c-10-10-25-15-40-10" strokeDasharray="3,3" />
      <path d="M100 140l0 20" />
      <path d="M95 155l10 0" />
    </svg>
  )
}

function ProsthetsIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700">
      <path d="M60 80h80v40c0 10-8 18-18 18H78c-10 0-18-8-18-18V80z" />
      <path d="M70 80v-20c0-5 4-9 9-9h42c5 0 9 4 9 9v20" />
      <rect x="75" y="85" width="10" height="15" rx="2" />
      <rect x="95" y="85" width="10" height="15" rx="2" />
      <rect x="115" y="85" width="10" height="15" rx="2" />
      <path d="M85 100l30 0" strokeWidth="2" />
      <path d="M80 110l40 0" strokeWidth="2" />
      <circle cx="45" cy="120" r="2" fill="currentColor" />
      <circle cx="155" cy="120" r="2" fill="currentColor" />
      <path d="M45 125l5 0 M155 125l5 0" strokeWidth="1" />
    </svg>
  )
}

