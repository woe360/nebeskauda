'use client'

import React from 'react'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#E6E4DE] text-black font-sans">
      {/* Hero Section */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" />
        
        {/* Main Title - Centered */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-[6rem] font-light leading-none text-center tracking-wider font-louize-display">
            <div>Privatumo politika</div>
          </h1>
        </div>

        {/* Bottom Left - Description */}
        <div className="absolute bottom-16 left-8 z-10 max-w-sm">
          <p className="text-xs uppercase tracking-wide text-gray-700 leading-relaxed">
            MŪSŲ ĮSIPAREIGOJIMAS UŽTIKRINTI JŪSŲ ASMENINIŲ DUOMENŲ SAUGUMĄ IR 
            KONFIDENCIALUMĄ. SUŽINOKITE DAUGIAU APIE TAI, KAIP RINKIAME, 
            SAUGOME IR NAUDOJAME JŪSŲ INFORMACIJĄ.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 border-t border-black/20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-12">
            
            {/* Introduction */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                1. Įvadas
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Ši privatumo politika aprašo, kaip mes renkame, naudojame, saugome ir 
                  atskleidžiame jūsų asmeninius duomenis, kai naudojatės mūsų odontologijos 
                  klinikos paslaugomis ir svetaine.
                </p>
                <p>
                  Mes gerbiame jūsų privatumą ir įsipareigojame apsaugoti jūsų asmeninius 
                  duomenis pagal Lietuvos Respublikos asmens duomenų apsaugos įstatymą ir 
                  Bendrąjį duomenų apsaugos reglamentą (BDAR).
                </p>
              </div>
            </div>

            {/* Data Controller */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                2. Duomenų valdytojas
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  <strong>Duomenų valdytojas:</strong> Nebeskauda odontologijos klinika
                </p>
                <p>
                  <strong>Adresas:</strong> Vilniaus g. 123, Vilnius
                </p>
                <p>
                  <strong>El. paštas:</strong> info@nebeskauda.lt
                </p>
                <p>
                  <strong>Telefonas:</strong> +370 123 45678
                </p>
              </div>
            </div>

            {/* Collected Data */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                3. Renkami duomenys
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>Mes galime rinkti šiuos asmeninius duomenis:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Vardas, pavardė</li>
                  <li>Gimimo data</li>
                  <li>Kontaktinė informacija (telefono numeris, el. pašto adresas)</li>
                  <li>Adresas</li>
                  <li>Sveikatos duomenys (medicininė istorija, gydymo planai, procedūrų informacija)</li>
                  <li>Draudimo informacija</li>
                  <li>Mokėjimo duomenys</li>
                  <li>Techniniai duomenys (IP adresas, naršyklės tipas, svetainės naudojimo duomenys)</li>
                </ul>
              </div>
            </div>

            {/* Purpose of Data Processing */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                4. Duomenų tvarkymo tikslai
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>Jūsų asmeninius duomenis tvarkome šiais tikslais:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pateikti odontologijos paslaugas ir gydymą</li>
                  <li>Užsiregistruoti vizitui ir tvarkyti registraciją</li>
                  <li>Kurti ir saugoti medicininę dokumentaciją</li>
                  <li>Komunikuoti su jumis dėl gydymo, vizitų ir paslaugų</li>
                  <li>Vykdyti mokėjimo operacijas</li>
                  <li>Vykdyti teisės aktų nustatytus įsipareigojimus</li>
                  <li>Gerinti mūsų paslaugas ir svetainės funkcionalumą</li>
                  <li>Siųsti informacinius pranešimus (su jūsų sutikimu)</li>
                </ul>
              </div>
            </div>

            {/* Legal Basis */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                5. Teisinis pagrindas
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>Duomenų tvarkymo teisinis pagrindas:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Jūsų sutikimas</li>
                  <li>Sutarties vykdymas (gydymo paslaugų teikimas)</li>
                  <li>Teisės aktų nustatyti įsipareigojimai (medicininės dokumentacijos saugojimas)</li>
                  <li>Teisėtų interesų vykdymas (paslaugų gerinimas, saugumas)</li>
                </ul>
              </div>
            </div>

            {/* Data Storage */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                6. Duomenų saugojimas
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Jūsų asmeniniai duomenys saugomi saugiai, naudojant šiuolaikines technologijas 
                  ir saugumo priemones. Medicininė dokumentacija saugoma pagal teisės aktų 
                  nustatytus laikotarpius (paprastai 10 metų po paskutinio vizito).
                </p>
                <p>
                  Techniniai duomenys (slapukai) gali būti saugomi iki 2 metų arba iki jūsų 
                  sutikimo atšaukimo.
                </p>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                7. Duomenų perdavimas
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Jūsų asmeninius duomenis gali perduoti tik šiems subjektams:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Draudimo kompanijoms (su jūsų sutikimu arba teisės aktų pagrindu)</li>
                  <li>Kitiems sveikatos priežiūros specialistams (su jūsų sutikimu)</li>
                  <li>Teisėsaugos institucijoms (pagal teisės aktų reikalavimus)</li>
                  <li>IT paslaugų teikėjams (duomenų saugojimo tikslais, su tinkamais saugumo įsipareigojimais)</li>
                </ul>
                <p>
                  Mes neperkame, neperkame ir neperkame jūsų asmeninių duomenų trečiosioms 
                  šalims komerciniais tikslais.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                8. Jūsų teisės
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>Jūs turite teisę:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Žinoti apie jūsų asmeninių duomenų tvarkymą</li>
                  <li>Gauti prieigą prie savo asmeninių duomenų</li>
                  <li>Reikalauti pataisyti netikslius duomenis</li>
                  <li>Reikalauti ištrinti duomenis („teisė būti užmirštam“)</li>
                  <li>Apriboti duomenų tvarkymą</li>
                  <li>Duomenų perkėlimo teisė</li>
                  <li>Prieštarauti duomenų tvarkymui</li>
                  <li>Atšaukti sutikimą duomenų tvarkymui</li>
                  <li>Skųstis Valstybinei duomenų apsaugos inspekcijai</li>
                </ul>
                <p>
                  Norėdami naudotis šiomis teisėmis, kreipkitės el. paštu info@nebeskauda.lt 
                  arba telefonu +370 123 45678.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                9. Slapukai
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Mūsų svetainėje naudojami slapukai, kad pagerintume jūsų patirtį. 
                  Daugiau informacijos apie slapukus ir jų valdymą rasite 
                  <a href="/slapuku-valdymas" className="underline hover:text-gray-900"> slapukų valdymo puslapyje</a>.
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                10. Saugumas
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Mes imamės visų reikalingų techninių ir organizacinių priemonių, kad 
                  apsaugotume jūsų asmeninius duomenis nuo neteisėto prieigos, praradimo, 
                  naikinimo ar pakeitimo.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                11. Privatumo politikos pakeitimai
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Mes pasiliekame teisę keisti šią privatumo politiką. Apie reikšmingus 
                  pakeitimus pranešime svetainėje arba el. paštu. Rekomenduojame periodiškai 
                  peržiūrėti šią politiką.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                12. Kontaktai
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Jei turite klausimų dėl šios privatumo politikos arba jūsų asmeninių 
                  duomenų tvarkymo, kreipkitės:
                </p>
                <p>
                  <strong>El. paštas:</strong> info@nebeskauda.lt<br />
                  <strong>Telefonas:</strong> +370 123 45678<br />
                  <strong>Adresas:</strong> Vilniaus g. 123, Vilnius
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="pt-8 border-t border-black/20">
              <p className="text-xs text-gray-500">
                Paskutinį kartą atnaujinta: {new Date().toLocaleDateString('lt-LT')}
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
