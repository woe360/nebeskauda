'use client'

import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import {
  CheckCircle,
  MapPin,
  Phone,
  Mail
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#E6E4DE] text-black font-sans">
      {/* Hero Section */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" />
        
        {/* Main Title - Centered */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-[6rem] font-light leading-none text-center tracking-wider font-louize-display">
            <div>Apie mus</div>
          </h1>
        </div>

        {/* Bottom Left - Description */}
        <div className="absolute bottom-16 left-8 z-10 max-w-sm">
          <p className="text-xs uppercase tracking-wide text-gray-700 leading-relaxed">
            SUŽINOKITE DAUGIAU APIE MŪSŲ KLINIKĄ, DAKTARĄ IR TAI, KAS MUS MOTYVUOJA 
            TEIKTI AUKŠČIAUSIOS KOKYBĖS ODONTOLOGIJOS PASLAUGAS.
          </p>
        </div>

        {/* Bottom Right - Button */}
        <div className="absolute bottom-16 right-8 z-10">
          <button
            onClick={() => {
              const element = document.getElementById('about-content')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="px-6 py-3 border-2 border-black text-black text-sm font-medium tracking-wide uppercase 
                     hover:bg-black hover:text-white transition-all duration-300 
                     focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Sužinoti daugiau
          </button>
        </div>
      </section>

      {/* Doctor Section */}
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

      {/* Clinic Info */}
      <section className="py-32 border-t border-black/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 ">
            {/* About Clinic */}
            <div className="border-r border-black/20 p-8 lg:p-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900 mb-8 font-louize-display">
                Apie kliniką
              </h2>
              <div className="space-y-6 mb-8">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Mūsų odontologijos klinika įkurta 2008 metais su tikslu teikti 
                  aukščiausios kokybės dantų gydymo paslaugas. Per daugelį metų 
                  išsivystėme į modernią kliniką, kurioje derinami tradiciniai 
                  gydymo metodai su naujausiais technologijų sprendimais.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Mūsų erdvios ir šiuolaikiškai įrengtos procedūrų kabinetos 
                  sukurti pacientų komfortui ir saugumui. Naudojame tik patikimas 
                  ir sertifikuotas medžiagas, o visa įranga reguliariai 
                  atnaujinama ir kalibruojama.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Šiuolaikinė įranga ir technologijos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Sterilizacijos standartų laikymasis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Jauki ir rami aplinka</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Nemokama konsultacija ir diagnostika</span>
                </div>
              </div>
            </div>

            {/* Contact Info & Mission */}
            <div className=" flex flex-col">
              {/* Contact Info */}
              <div className="p-8 lg:p-12 border-b border-black/20">
                <h3 className="text-lg font-medium text-gray-900 mb-8 tracking-wide">
                  KONTAKTINĖ INFORMACIJA
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Adresas</p>
                      <p className="text-sm text-gray-600">Vilniaus g. 123, Vilnius</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Telefonas</p>
                      <p className="text-sm text-gray-600">+370 123 45678</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">El. paštas</p>
                      <p className="text-sm text-gray-600">info@odontologija.lt</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="p-8 lg:p-12">
                <h3 className="text-lg font-medium text-gray-900 mb-6 tracking-wide">
                  MŪSŲ MISIJA
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Suteikti kiekvienam pacientui galimybę džiaugtis sveikais ir 
                  gražiais dantimis, naudojant šiuolaikiškas technologijas ir 
                  individualų požiūrį į kiekvieną atvejį.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 