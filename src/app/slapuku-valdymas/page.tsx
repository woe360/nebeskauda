'use client'

import React, { useState, useEffect } from 'react'
import Footer from '@/components/Footer'

export default function CookieManagementPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Load saved preferences from localStorage
    const saved = localStorage.getItem('cookiePreferences')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setCookiePreferences((prev) => ({
          ...prev,
          ...parsed,
          necessary: true // Always keep necessary cookies enabled
        }))
      } catch (e) {
        console.error('Error loading cookie preferences:', e)
      }
    }
  }, [])

  const handlePreferenceChange = (type: 'analytics' | 'marketing', value: boolean) => {
    const newPreferences = {
      ...cookiePreferences,
      [type]: value
    }
    setCookiePreferences(newPreferences)
    localStorage.setItem('cookiePreferences', JSON.stringify(newPreferences))
    
    // Here you would typically update actual cookies
    if (value) {
      // Enable cookies
      console.log(`Enabling ${type} cookies`)
    } else {
      // Disable/remove cookies
      console.log(`Disabling ${type} cookies`)
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    setCookiePreferences(allAccepted)
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted))
  }

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    setCookiePreferences(onlyNecessary)
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyNecessary))
  }

  return (
    <div className="min-h-screen bg-[#E6E4DE] text-black font-sans">
      {/* Hero Section */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" />
        
        {/* Main Title - Centered */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-[6rem] font-light leading-none text-center tracking-wider font-louize-display">
            <div>Slapukų valdymas</div>
          </h1>
        </div>

        {/* Bottom Left - Description */}
        <div className="absolute bottom-16 left-8 z-10 max-w-sm">
          <p className="text-xs uppercase tracking-wide text-gray-700 leading-relaxed">
            VALDYTE SAVO SLAPUKŲ PREFERENCES. PASIRINKITE, KURIUOS SLAPUKUS 
            NORITE LEISTI NAUDOTI MŪSŲ SVETAINĖJE.
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
                Kas yra slapukai?
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Slapukai yra maži tekstiniai failai, kurie saugomi jūsų įrenginyje 
                  (kompiuteryje, planšetėje arba išmaniajame telefone), kai lankotės 
                  mūsų svetainėje. Jie padeda mums suprasti, kaip naudojatės svetaine, 
                  ir pagerinti jūsų patirtį.
                </p>
              </div>
            </div>

            {/* Cookie Types */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                Slapukų tipai
              </h2>

              {/* Necessary Cookies */}
              <div className="border-t border-black/20 pt-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Būtini slapukai
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Šie slapukai yra būtini svetainės veikimui ir negali būti išjungti. 
                      Jie dažniausiai nustatomi atsakant į jūsų veiksmus, tokius kaip 
                      prisijungimo duomenų įvedimas ar saugumo nustatymai. Jūs galite 
                      nustatyti naršyklę, kad blokuotų šiuos slapukus, tačiau tai gali 
                      paveikti svetainės funkcionalumą.
                    </p>
                    <div className="mt-4 text-xs text-gray-600">
                      <strong>Pavyzdžiai:</strong> Sesijos valdymas, saugumo funkcijos, 
                      formų užpildymas
                    </div>
                  </div>
                  <div className="ml-8">
                    <div className="px-4 py-2 bg-gray-200 text-sm font-medium text-gray-700">
                      Visada įjungta
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border-t border-black/20 pt-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Analitikos slapukai
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Šie slapukai leidžia mums skaičiuoti lankytojus ir matuoti 
                      srauto šaltinius, kad galėtume pagerinti mūsų svetainės veikimą. 
                      Jie padeda mums žinoti, kurie puslapiai yra populiariausi ir 
                      kaip lankytojai naršo svetainėje.
                    </p>
                    <div className="mt-4 text-xs text-gray-600">
                      <strong>Pavyzdžiai:</strong> Google Analytics, puslapių peržiūros, 
                      naudotojų elgesio analizė
                    </div>
                  </div>
                  <div className="ml-8">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.analytics}
                        onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="border-t border-black/20 pt-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Rinkodaros slapukai
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Šie slapukai gali būti nustatyti per mūsų svetainę mūsų 
                      reklamos partnerių. Jie gali būti naudojami mūsų partneriams 
                      sukurti jūsų profilio vaizdą ir rodyti jums reklamas kitose 
                      svetainėse.
                    </p>
                    <div className="mt-4 text-xs text-gray-600">
                      <strong>Pavyzdžiai:</strong> Reklamos personalizavimas, 
                      sekimo pikseliai, socialinių tinklų integracijos
                    </div>
                  </div>
                  <div className="ml-8">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.marketing}
                        onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Management */}
            <div className="border-t border-black/20 pt-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                Valdyti slapukus
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Jūs galite bet kada pakeisti arba atšaukti savo sutikimą dėl slapukų. 
                  Jūsų pasirinkimai bus išsaugoti ir taikomi tol, kol jūs juos pakeisite 
                  arba išvalysite naršyklės slapukus.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={acceptAll}
                  className="px-6 py-3 border-2 border-black text-black text-sm font-medium tracking-wide uppercase 
                           hover:bg-black hover:text-white transition-all duration-300 
                           focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Priimti visus
                </button>
                <button
                  onClick={rejectAll}
                  className="px-6 py-3 border-2 border-black text-black text-sm font-medium tracking-wide uppercase 
                           hover:bg-black hover:text-white transition-all duration-300 
                           focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Atmesti visus
                </button>
              </div>
            </div>

            {/* Browser Settings */}
            <div className="border-t border-black/20 pt-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                Naršyklės nustatymai
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Jūs taip pat galite valdyti slapukus per savo naršyklės nustatymus. 
                  Štai nuorodos į pagrindinių naršyklių slapukų valdymo instrukcijas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">
                      Safari
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* More Information */}
            <div className="border-t border-black/20 pt-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 font-louize-display">
                Daugiau informacijos
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Jei turite klausimų dėl slapukų arba privatumo, kreipkitės:
                </p>
                <p>
                  <strong>El. paštas:</strong> info@nebeskauda.lt<br />
                  <strong>Telefonas:</strong> +370 123 45678<br />
                  <strong>Adresas:</strong> Vilniaus g. 123, Vilnius
                </p>
                <p>
                  Daugiau informacijos apie duomenų tvarkymą rasite mūsų{' '}
                  <a href="/privatumo-politika" className="underline hover:text-gray-900">
                    privatumo politikoje
                  </a>.
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
