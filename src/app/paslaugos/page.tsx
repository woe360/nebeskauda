'use client'

import React from 'react'
import Footer from '@/components/Footer'
import PaslaugosSection from '@/components/PaslaugosSection'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#E6E4DE] text-black font-sans overflow-x-hidden">
      {/* Hero Section - stacked on mobile to avoid overlap */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0" />
        
        {/* Main Title - Centered */}
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full flex-1 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-[6rem] font-light leading-none text-center tracking-wider font-louize-display">
            <div>Paslaugos</div>
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
            className="px-6 py-3 border-1 rounded-full border-black text-black text-sm font-normal tracking-wide uppercase 
                     hover:bg-black hover:text-white transition-all duration-300 
                     focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 w-fit order-1 md:order-2 shrink-0"
          >
            Žiūrėti paslaugas
          </button>
        </div>
      </section>

      <PaslaugosSection/>

      

      <Footer />
    </div>
  )
}
