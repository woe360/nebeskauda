'use client'

import React, { useState } from 'react'
import Footer from '@/components/Footer'

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

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const services: Service[] = [
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
  ]

  return (
    <div className="min-h-screen bg-[#E6E4DE] text-black font-sans">
      {/* Hero Section */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" />
        
        {/* Main Title - Centered */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-[6rem] font-light leading-none text-center tracking-wider font-louize-display">
            <div>Paslaugos</div>
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
                     hover:bg-black hover:text-white transition-all duration-300 
                     focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Žiūrėti paslaugas
          </button>
        </div>
      </section>

      {/* Services Grid - Full Width, Connected to Previous Section */}
      <section id="services-grid">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 gap-0 border-r border-l border-black/20 lg:auto-rows-[400px]">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-[#E6E4DE] border-b border-black/20 p-8 hover:bg-white/30 transition-all duration-300 cursor-pointer group h-[400px] flex flex-col ${
                index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
              } ${
                index !== 2 && index !== 4 ? 'border-r border-black/20' : ''
              }`}
              onClick={() => setSelectedService(service)}
            >
              {/* Illustration */}
              <div className="flex-1 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                {service.illustration}
              </div>
              
              {/* Content */}
              <div className="space-y-2">
                {/* <div className="text-xs font-medium tracking-wider text-gray-600">
                  ({index + 1}/5)
                </div> */}
                <h3 className="text-lg font-medium text-center tracking-wide">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

       
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-[#E6E4DE] z-50 overflow-hidden">
          
          {/* Close button at top */}
          <div className="w-full text-center py-6 border-b border-black/20">
            <button
              onClick={() => setSelectedService(null)}
              className="text-black text-sm font-medium tracking-wider hover:opacity-70 transition-opacity"
            >
              UŽDARYTI
            </button>
          </div>

          {/* Main content */}
          <div className="flex h-[calc(100vh-80px)]">
            {/* Left: Large Illustration */}
            <div className="flex-1 flex items-center justify-center p-16 border-r border-black/20">
              <div className="w-full max-w-2xl scale-150">
                {selectedService.illustration}
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-96 p-16 flex flex-col justify-center overflow-y-auto">
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

                <button className="w-full bg-black text-white py-4 mt-8 text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors ">
                  REGISTRUOTIS VIZITUI
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

// Illustration Components
function ConsultationIllustration() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700">
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
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700">
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
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700">
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

function ImplantIllustration() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700">
      <rect x="85" y="120" width="30" height="40" rx="2" />
      <path d="M85 155l30 0" strokeWidth="3" />
      <path d="M85 150l30 0" strokeWidth="2" />
      <path d="M85 145l30 0" strokeWidth="2" />
      <rect x="90" y="105" width="20" height="15" rx="2" />
      <path d="M100 50c-15 0-25 10-25 25 0 10 5 18 5 28h40c0-10 5-18 5-28 0-15-10-25-25-25z" />
      <path d="M85 103v-15l30 0v15" strokeDasharray="2,2" />
      <circle cx="160" cy="80" r="3" fill="currentColor" />
      <path d="M155 75l10 0 M155 85l10 0" strokeWidth="1" />
    </svg>
  )
}

function HygieneIllustration() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700">
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
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700">
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

function AestheticIllustration() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700">
      <path d="M100 50c-25 0-45 20-45 45v30c0 15 12 27 27 27h36c15 0 27-12 27-27V95c0-25-20-45-45-45z" />
      <path d="M75 95h50" />
      <rect x="80" y="100" width="8" height="20" rx="1" />
      <rect x="92" y="100" width="8" height="25" rx="1" />
      <rect x="104" y="100" width="8" height="25" rx="1" />
      <rect x="116" y="100" width="8" height="20" rx="1" />
      <path d="M70 85c5-3 12-5 20-5s15 2 20 5" strokeDasharray="2,2" />
      <circle cx="85" cy="75" r="2" />
      <circle cx="115" cy="75" r="2" />
      <path d="M45 140l15 10 M155 140l-15 10" strokeWidth="1" />
    </svg>
  )
}

function ChildrenIllustration() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700">
      <circle cx="100" cy="90" r="40" />
      <circle cx="85" cy="80" r="3" fill="currentColor" />
      <circle cx="115" cy="80" r="3" fill="currentColor" />
      <path d="M90 100c5 8 15 8 20 0" strokeWidth="2" />
      <path d="M95 108h10v8c0 2-2 4-4 4h-2c-2 0-4-2-4-4v-8z" />
      <rect x="97" y="114" width="6" height="3" rx="1" />
      <path d="M80 50c0-8 4-12 10-12s10 4 10 12" />
      <path d="M100 50c0-8 4-12 10-12s10 4 10 12" />
      <path d="M60 130l20 15 M140 130l-20 15" strokeWidth="1" strokeDasharray="2,2" />
      <circle cx="70" cy="140" r="8" strokeDasharray="2,2" />
      <circle cx="130" cy="140" r="8" strokeDasharray="2,2" />
    </svg>
  )
} 