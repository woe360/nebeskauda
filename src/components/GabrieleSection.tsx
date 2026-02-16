import React from 'react'
import Image from 'next/image'

export default function GabrieleSection() {
  return (
    <section id="about-content" className="py-32 border-t border-black/20">
      <div className="max-w-1960px mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
  )
}
