'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Image from 'next/image'
import PaslaugosSection from '@/components/PaslaugosSection'

const TESTIMONIAL_ANIM_MS = 550

export default function HomePage() {
  const [openFAQ, setOpenFAQ] = useState<string[]>([])
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [testimonialDirection, setTestimonialDirection] = useState<'next' | 'prev'>('next')
  const [transitionFromIndex, setTransitionFromIndex] = useState<number | null>(null)
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const toggleFAQ = (question: string) => {
    setOpenFAQ(prev => 
      prev.includes(question) 
        ? prev.filter(q => q !== question)
        : [...prev, question]
    )
  }

  const testimonials = [
    {
      text: "Burnos higiena be streso ir skausmo – nuoširdžiai dėkoju Gabrielei už rūpestingą ir profesionalų darbą.",
      name: "Ona Petraitienė"
    },
    {
      text: "Modernus įranga ir jauki aplinka. Implantų procedūra praėjo sklandžiai, esu labai patenkintas rezultatu.",
      name: "Mindaugas Kazlauskas"
    },
    {
      text: "Vaikų dantų gydymas praėjo puikiai. Gydytoja sugebėjo nuraminti vaiką ir atlikti viską be streso.",
      name: "Rasa Stonkuvienė"
    }
  ]

  const runTransition = (direction: 'next' | 'prev', nextIndex: number) => {
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
    setTestimonialDirection(direction)
    setTransitionFromIndex(currentTestimonial)
    setCurrentTestimonial(nextIndex)
    transitionTimeoutRef.current = setTimeout(() => {
      setTransitionFromIndex(null)
      transitionTimeoutRef.current = null
    }, TESTIMONIAL_ANIM_MS)
  }

  const nextTestimonial = () => {
    runTransition('next', (currentTestimonial + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    runTransition('prev', (currentTestimonial - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    if (index === currentTestimonial) return
    runTransition(index > currentTestimonial ? 'next' : 'prev', index)
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
      question: "Kaip dažnai reikia atlikti dantų higieną?",
      answer: "Profesionalią dantų higieną rekomenduojame atlikti kas 6 mėnesius. Žmonėms, turintiems dantų problemų ar gingivitą, gali prireikti dažnesnės higienos - kas 3-4 mėnesius. Individualų grafiką aptarsime konsultacijos metu."
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
          <h1 className="text-3xl md:text-4xl lg:text-[6rem] uppercase font-light leading-none text-center tracking-wider font-louize-display">
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

      {/* <GabrieleSection /> */}

      <section id="about-content" className="w-full border-t border-black/10 overflow-hidden">
  <div className="max-w-[1960px] mx-auto flex flex-col lg:flex-row min-h-[800px]">
    
    {/* Left Column: The Narrative (33.3% width) */}
    <div className="w-full lg:w-1/3 flex items-center justify-center p-8 lg:p-10 order-2 lg:order-1">
      <div className="max-w-xl space-y-12">
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
    <div className="w-full lg:w-1/3 flex items-center justify-center min-h-[500px] lg:min-h-full order-3">
      <div className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[640px] aspect-[3/4]">
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

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#37383c]/60 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-12 lg:mb-20 font-louize-display">
            Išsaugojome virš 4300 dantų
          </h2>
        </div>

        {/* Full-width row: arrows on the sides, quote in the center */}
        <div className="w-full flex items-center justify-between gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
          <button
            onClick={prevTestimonial}
            className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Ankstesnis atsiliepimas"
          >
            <span className="relative w-20 h-20 sm:w-24 sm:h-24 block -rotate-90">
              <Image src="/dantukas.png" alt="" fill className="object-contain invert opacity-100" sizes="80px" />
            </span>
          </button>

          <div className="flex-1 min-w-0 max-w-4xl mx-auto text-center px-2 sm:px-4 overflow-hidden min-h-[140px] sm:min-h-[160px] relative">
            {transitionFromIndex !== null ? (
              <>
                <div
                  key={`out-${transitionFromIndex}`}
                  className={`absolute inset-0 flex flex-col justify-center ${testimonialDirection === 'next' ? 'testimonial-out-next' : 'testimonial-out-prev'}`}
                  aria-hidden
                >
                  <blockquote className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 italic">
                    &ldquo;{testimonials[transitionFromIndex].text}&rdquo;
                  </blockquote>
                  <div className="text-sm tracking-wider uppercase text-white/70">
                    KLINIKOS PACIENTAS
                  </div>
                </div>
                <div
                  key={`in-${currentTestimonial}`}
                  className={`absolute inset-0 flex flex-col justify-center ${testimonialDirection === 'next' ? 'testimonial-in-next' : 'testimonial-in-prev'}`}
                >
                  <blockquote className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 italic">
                    &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                  </blockquote>
                  <div className="text-sm tracking-wider uppercase text-white/70">
                    KLINIKOS PACIENTAS
                  </div>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col justify-center">
                <blockquote className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 italic">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </blockquote>
                <div className="text-sm tracking-wider uppercase text-white/70">
                  KLINIKOS PACIENTAS
                </div>
              </div>
            )}
          </div>

          <button
            onClick={nextTestimonial}
            className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Kitas atsiliepimas"
          >
            <span className="relative w-20 h-20 sm:w-24 sm:h-24 block rotate-90">
              <Image src="/dantukas.png" alt="" fill className="object-contain invert opacity-100" sizes="80px" />
            </span>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2 mt-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Full Width (commented out)
      <section className="pb-16 my-20">
        <div className="w-full">
          <div className="px-8 py-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide text-black/90 font-louize-display">
              Dažnai užduodami klausimai
            </h2>
          </div>
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
      */}

{/* FAQ Section - High-End Editorial Split */}
<section className="w-full border-t border-black/10">
  <div className="max-w-[1960px] mx-auto flex flex-col lg:flex-row min-h-[700px]">
    
    {/* LEFT SIDE: The Question List (50% Width) */}
    <div className="w-full lg:w-1/2 p-8 lg:p-12 lg:border-r border-black/10">
      <div className="mb-20">
        <h2 className="text-5xl font-light tracking-tighter font-louize-display text-gray-900 leading-none">
          Dažnai užduodami klausimai
        </h2>
      </div>

      <div className="space-y-4">
        {faqItems.map((faq, index) => (
          <button
            key={index}
            onMouseEnter={() => setOpenFAQ([faq.question])} // Reveal on hover for that 'Gallery' feel
            onClick={() => toggleFAQ(faq.question)}
            className="group w-full flex items-center justify-between py-6 text-left border-b border-black/5 last:border-0 transition-all duration-500"
          >
            <span className={`text-[16px] tracking-wide uppercase transition-all duration-500 ${
              openFAQ.includes(faq.question) 
                ? 'text-black translate-x-6' 
                : 'text-gray-800 group-hover:text-gray-600'
            }`}>
              {faq.question}
            </span>
            
            {/* Minimalist Indicator */}
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ${
              openFAQ.includes(faq.question) ? 'bg-black scale-150' : 'bg-transparent border border-black/20'
            }`} />
          </button>
        ))}
      </div>
    </div>

    {/* RIGHT SIDE: The Dynamic Reading Pane (50% Width) */}
    {/* No background added as requested; uses your site's existing BG */}
    <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 relative overflow-hidden">
      <div className="max-w-md w-full relative h-[400px]">
        {faqItems.map((faq, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              openFAQ.includes(faq.question) 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-20 scale-95 pointer-events-none'
            }`}
          >
            {/* Sophisticated Accent Line */}
            <div className="w-12 h-[1px] bg-black/20 mb-10" />
            
            <p className="text-[24px] leading-relaxed text-gray-800 font-light italic ">
               {faq.answer}
            </p>
          </div>
        ))}

        {/* Subtle Hint when nothing is active */}
        {openFAQ.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center border border-dashed border-black/5 rounded-full aspect-square max-w-[200px] mx-auto">
            <p className="text-[16px] tracking-wide uppercase text-gray-900">
              Pasirinkite klausimą
            </p>
          </div>
        )}
      </div>
      {/* Background Architectural Accent */}
      <div className="absolute bottom-12 right-12 opacity-5 pointer-events-none">
        <h2 className="text-[12vw] font-louize-display leading-none select-none">DUK</h2>
      </div>
    </div>

  </div>
</section>

      {/* CTA Section - Studio Boum Grand Finale */}
<section className="w-full border-t border-black/10 py-40 lg:py-64">
  <div className="max-w-[1960px] mx-auto px-12 lg:px-24">
    <div className="flex flex-col lg:flex-row items-end justify-between gap-20">
      
      {/* Left: The Big Statement */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-5xl md:text-7xl lg:text-[100px] font-light font-louize-display text-gray-900 ">
          Pradėkime kelią <br /> 
          <span className="ml-[0.1em]"> į sveikus </span> 
          dantis
        </h2>
      </div>

      {/* Right: The Minimalist Actions */}
      <div className="w-full lg:w-1/3 flex flex-col space-y-4">
        <a 
          href="tel:+3706287676"
          className="group w-full py-8 border-b border-black/10 flex items-center justify-between hover:border-black transition-colors duration-500"
        >
          <span className="text-[13px] tracking-[0.3em] uppercase font-medium">Skambinti</span>
          <div className="w-2 h-2 rounded-full bg-black scale-0 group-hover:scale-100 transition-transform duration-500" />
        </a>
        
        <Link 
          href="/kontaktai#registration-form"
          className="group w-full py-8 border-b border-black/10 flex items-center justify-between hover:border-black transition-colors duration-500"
        >
          <span className="text-[13px] tracking-[0.3em] uppercase font-medium">Registruotis</span>
          <div className="w-2 h-2 rounded-full bg-black scale-0 group-hover:scale-100 transition-transform duration-500" />
        </Link>
      </div>

    </div>
  </div>
</section>

      <Footer />
    </div>
  )
}
