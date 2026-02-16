'use client'

import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'

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
            className="px-6 py-3 border-1 rounded-full border-black text-black text-sm font-normal tracking-wide uppercase 
                     hover:bg-black hover:text-white transition-all duration-300 
                     focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Sužinoti daugiau
          </button>
        </div>
      </section>


{/* Doctor Section - Editorial 1960px Layout (commented out)
<section id="about-content" className="w-full bg-[#f6f5f3] border-t border-black/10 overflow-hidden">
  <div className="max-w-[1960px] mx-auto min-h-[800px] flex flex-col lg:flex-row">
    
    <div className="w-full lg:w-1/2 flex flex-col justify-center p-12 lg:p-32">
      <div className="max-w-md space-y-20">
        <header className="space-y-4">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400">
            Gydytoja odontologė
          </p>
          <h2 className="text-6xl font-light tracking-tight font-louize-display text-gray-900">
            Gabrielė Dilė
          </h2>
        </header>
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-black/20" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-gray-500">10+ Metų patirtis</span>
          </div>
          <p className="text-[17px] leading-[1.8] text-gray-700 font-light">
            Mano pagridinis fokusas — endodontija. Dirbu su pažangiausia įranga, 
            mikroskopu leidžiančiu pasiekti maksimalų tikslumą. 
            Vadovaujuosi individualizuotu požiuriu į pacientą, siekdama aukščiausios 
            gydymo kokybės, komforto ir ilgalaikių rezultatų.
          </p>
        </div>
        <footer className="space-y-2 opacity-60">
          {["Lietuvos sveikatos mokslų universitetas", "Lietuvos endodologų draugija", "Europos sąjungos endodontologų asocijacija"].map((edu) => (
            <p key={edu} className="text-[12px] font-light">• {edu}</p>
          ))}
        </footer>
      </div>
    </div>
    <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 relative">
      <div className="relative w-full max-w-[500px] aspect-[4/5] bg-[#ebeae8] shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
        <Image
          src="/Gabriele-Dile-foto.png"
          alt="Gabrielė Dilė"
          fill
          className="object-cover object-center grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
          sizes="(max-width: 1960px) 500px"
        />
      </div>
      <div className="absolute right-12 bottom-12 hidden xl:block">
        <p className="rotate-90 origin-bottom-right text-[10px] tracking-[0.5em] uppercase text-gray-300 whitespace-nowrap">
          Creative Excellence & Care
        </p>
      </div>
    </div>
  </div>
</section>
*/}

 {/* <GabrieleSection /> */}

      {/* Doctor Section - Studio Boum Mirror Layout */}
<section id="about-content" className="w-full border-t border-black/10 overflow-hidden">
  <div className="max-w-[1960px] mx-auto flex flex-col lg:flex-row min-h-[800px]">
    
    {/* Left Column: The Narrative (33.3% width) */}
    <div className="w-full lg:w-1/3 flex items-center justify-center p-8 lg:p-10 order-2 lg:order-1">
      <div className="max-w-2xl space-y-12">
      <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-black/20" />
            <span className="text-[14px] uppercase text-gray-700">10+ Metų patirtis</span>
          </div>
        {/* Paragraph 1 */}
        <p className="text-[16px] leading-relaxed text-gray-800 font-light">
          Mano pagridinis fokusas — <span className="italic">endodontija</span>. Dirbu su pažangiausia įranga, 
          mikroskopu leidžiančiu pasiekti maksimalų tikslumą. 
          Vadovaujuosi individualizuotu požiuriu į pacientą, siekdama aukščiausios 
          gydymo kokybės, komforto ir ilgalaikių rezultatų.
        </p>

        {/* Credentials List */}
        <div className="space-y-2 pt-4 border-t border-black/20">
          {[
            "Lietuvos sveikatos mokslų universitetas", 
            "Lietuvos endodologų draugija", 
            "Europos sąjungos endodontologų asocijacija"
          ].map((item) => (
            <p key={item} className="text-[14px] uppercase text-gray-900 font-light">
              • {item}
            </p>
          ))}
        </div>
      </div>
    </div>

    {/* Center Column: The Display Name (33.3% width) */}
    <div className="w-full lg:w-1/3 flex flex-col items-center justify-center p-12 lg:p-0 order-1 lg:order-2">
      <span className="text-[14px] uppercase text-gray-800 mb-6">
        Gydytoja Odontologė
      </span>
      
      <h2 className="text-6xl md:text-7xl font-light tracking-tighter font-louize-display text-gray-900 leading-none text-center">
        Gabrielė Dilė
      </h2>
      
    </div>

    {/* Right Column: The Image (33.3% width) */}
    <div className="w-full lg:w-1/3 flex items-center justify-center min-h-[500px] lg:min-h-full order-3 p-8 lg:p-12">
      <div className="relative w-full max-w-[180px] sm:max-w-[200px] lg:max-w-[640px] aspect-[3/4]">
        <Image
          src="/Gabriele-Dile-foto.png"
          alt="Gabrielė Dilė"
          fill
          priority
          className="object-cover object-center grayscale-[0.1]"
        />
      </div>
    </div>
    
  </div>
</section>

      {/* Clinic Info - Exact Studio Boum Layout */}
<section className="w-full border-t border-black/10 overflow-hidden">
  <div className="max-w-[1960px] mx-auto flex flex-col lg:flex-row min-h-[800px]">
    
    {/* Left Column: The Image (33.3% width) */}
    <div className="w-full lg:w-1/3 relative min-h-[400px] lg:min-h-full border-r border-black/5">
      <Image
        src="/klinika.jpg"
        alt="Nebeskauda klinika interior"
        fill
        className="object-cover grayscale-[0.1]"
      />
    </div>

    {/* Center Column: The Large Branding (33.3% width) */}
    <div className="w-full lg:w-1/3 flex items-center justify-center p-12 lg:p-0">
      <h2 className="text-6xl md:text-7xl font-light tracking-tighter font-louize-display text-gray-900 leading-none text-center">
        Nebeskauda <br /> klinika
      </h2>
    </div>

    {/* Right Column: The Narrative (33.3% width) */}
    <div className="w-full lg:w-1/3 flex items-center justify-center p-8 lg:p-10">
      <div className="max-w-xl space-y-12">
        {/* Paragraph 1 */}
        <p className="text-[16px] leading-relaxed text-gray-800 font-light">
          Mūsų odontologijos klinika įkurta 2025 metais su tikslu teikti 
          aukščiausios kokybės dantų gydymo paslaugas.
        </p>

        {/* Paragraph 2 */}
        <p className="text-[16px] leading-relaxed text-gray-800 font-light">
          Mūsų erdvūs ir šiuolaikiškai įrengti procedūrų kabinetai 
          sukurti pacientų komfortui ir saugumui. Naudojame tik patikimas 
          ir sertifikuotas medžiagas, o visa įranga reguliariai 
          atnaujinama ir kalibruojama.
        </p>

        {/* Paragraph 3 - Mission style */}
        <p className="text-[16px] leading-relaxed text-gray-800 font-light">
          Suteikti kiekvienam pacientui galimybę džiaugtis sveikais ir 
          gražiais dantimis, naudojant šiuolaikiškas technologijas ir 
          individualų požiūrį į kiekvieną atvejį.
        </p>
      </div>
    </div>
    
  </div>
</section>

      <Footer />
    </div>
  )
} 