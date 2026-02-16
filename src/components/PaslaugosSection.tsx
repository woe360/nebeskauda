'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'

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

const servicesData: Omit<Service, 'illustration'>[] = [
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
    duration: '30-60 min'
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
    duration: '1-2 val'
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
    duration: '2-3 apsilankymai'
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
    duration: '30-60 min'
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
    duration: '45-60 min'
  }
]

export default function PaslaugosSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const services: Service[] = [
    { ...servicesData[0], illustration: <ConsultationIllustration /> },
    { ...servicesData[1], illustration: <EndodonticsIllustration /> },
    { ...servicesData[2], illustration: <ProsthetsIllustration /> },
    { ...servicesData[3], illustration: <ToothTreatmentIllustration /> },
    { ...servicesData[4], illustration: <HygieneIllustration /> }
  ]

  return (
    <>
      {/* Services Section - paslaugos style: 3+2 grid, vertical separators, minimal */}
      <section id="services-grid" className="border-t border-black/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 gap-0 border-b border-black/20 md:border-r md:border-l md:border-b-0 border-black/20 lg:auto-rows-[400px]">
          {services.map((service, index) => (
            <button
              type="button"
              key={service.id}
              className={`w-full text-left bg-[#E6E4DE] border-b border-black/20 md:border-b-0 p-6 sm:p-8 hover:bg-white/30 transition-all duration-300 cursor-pointer group min-h-[280px] md:min-h-[320px] lg:h-[400px] flex flex-col ${
                index < 3 ? 'lg:col-span-2 lg:border-b lg:border-black/20' : 'lg:col-span-3'
              } ${
                index !== 2 && index !== 4 ? 'md:border-r border-black/20' : ''
              }`}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setSelectedService(service)
              }}
            >
              <div className="flex-1 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                {service.illustration}
              </div>
              <h3 className="text-lg font-normal text-center tracking-wide text-gray-800">
                {service.title}
              </h3>
            </button>
          ))}
        </div>
      </section>

      {/* Service Detail Modal - portaled to body so it always opens on top */}
      {mounted && selectedService && createPortal(
        <div className="fixed inset-0 bg-[#E6E4DE] z-[100] overflow-hidden" aria-modal="true" role="dialog">
          <div className="w-full border-b border-black/20">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="w-full text-center py-[18px] text-black text-sm font-medium tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
            >
              UŽDARYTI
            </button>
          </div>

          <div className="flex h-[calc(100vh-80px)]">
            <div className="flex-1 flex items-center justify-center p-16 border-r border-black/20">
              <div className="w-full max-w-2xl scale-150">
                {selectedService.illustration}
              </div>
            </div>

            <div className="w-96 p-16 flex flex-col justify-center overflow-y-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-light tracking-wide mb-2">
                    {selectedService.title}
                  </h2>
                  <p className="text-sm text-gray-600 font-normal tracking-wider mb-6">
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
        </div>,
        document.body
      )}
    </>
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
