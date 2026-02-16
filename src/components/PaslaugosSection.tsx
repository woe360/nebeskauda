'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'

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
    <span className="relative w-[150px] h-[150px] block">
      <Image
        src="/konsultacija-zmogus.png"
        alt=""
        width={150}
        height={150}
        className="object-contain w-full h-full"
      />
    </span>
  )
}

function EndodonticsIllustration() {
  return (
    <span className="relative w-[150px] h-[150px] block">
      <Image
        src="/dantis.png"
        alt=""
        width={150}
        height={150}
        className="object-contain w-full h-full"
      />
    </span>
  )
}

function ToothTreatmentIllustration() {
  return (
    <span className="relative w-[180px] h-[180px] block">
      <Image
        src="/terapinis.png"
        alt=""
        width={180}
        height={180}
        className="object-contain w-full h-full"
      />
    </span>
  )
}

function HygieneIllustration() {
  return (
    <span className="relative w-[180px] h-[180px] block">
      <Image
        src="/higiena.png"
        alt=""
        width={180}
        height={180}
        className="object-contain w-full h-full"
      />
    </span>
  )
}

function ProsthetsIllustration() {
  return (
    <span className="relative w-[180px] h-[180px] block">
      <Image
        src="/protezavimas.png"
        alt=""
        width={180}
        height={180}
        className="object-contain w-full h-full"
      />
    </span>
  )
}
