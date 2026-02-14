'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [] as string[],
    timePreference: [] as string[],
    agreeToPolicy: false
  })
  
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  
  // Handle hash navigation to registration form
  useEffect(() => {
    if (window.location.hash === '#registration-form') {
      setTimeout(() => {
        const element = document.getElementById('registration-form')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])
  
  const serviceOptions = [
    { value: 'konsultacija-ir-istyrimai', label: 'Konsultacija ir ištyrimas' },
    { value: 'burnos-higiena', label: 'Burnos higiena' },
    { value: 'dantų-balinimas', label: 'Dantų balinimas' },
    { value: 'terapinis-gydymas', label: 'Terapinis dantų gydymas' },
    { value: 'endodontija-kanalu-gydymas', label: 'Endodontija - kanalų gydymas' },
    { value: 'dantu-protezavimas', label: 'Dantų protezavimas' },
    { value: 'apsaugines-kapos', label: 'Apsauginės kapos' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox' && name === 'services') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, value]
          : prev.services.filter(service => service !== value)
      }))
    } else if (type === 'checkbox' && name === 'timePreference') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({
        ...prev,
        timePreference: checked 
          ? [...prev.timePreference, value]
          : prev.timePreference.filter(time => time !== value)
      }))
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openMap = () => {
    const address = 'Šiaurės pr. 1, Kaunas, 49188 Kauno m. sav.'
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    window.open(mapsUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#E6E4DE] text-black font-sans">

      {/* Main Content */}
      <div className="flex -mt-2 min-h-[calc(100vh-80px)] border-t border-black/20">
        {/* Left Side - Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Nebeskauda Title */}
          <div className="flex-1 flex items-center justify-center px-8">
            <h1 className="text-3xl md:text-4xl lg:text-[6rem] font-light leading-none text-center tracking-wider font-louize-display">
              <div>Kontaktai</div>
              {/* <div>KONTAKTAI</div> */}
              {/* <div>NEBESKAUDA</div> */}
            </h1>
          </div>
        </div>

        {/* Right Side - Location Info */}
        <div className="w-107 border-l border-black/20 flex flex-col">
          {/* Kaunas Location & Map */}
          <button 
            onClick={openMap}
            className="border-b border-black/20 p-8 flex flex-col justify-center items-center gap-4 flex-1 w-full hover:opacity-70 transition-opacity cursor-pointer"
          >
            <div className="font-medium text-md">ŠIAURĖS PR. 1, KAUNAS, 49188</div>
            {/* <span className="text-base font-medium tracking-wider uppercase border-b border-black pb-1">
              ATIDARYTI ŽEMĖLAPĮ
            </span> */}
            <div className="text-xs text-black/50 font-normal">Atidaryti žemėlapį</div>
          </button>

          {/* Email */}
          <a 
            href="mailto:INFO@NEBESKAUDA.COM"
            className="border-b border-black/20 p-8 flex justify-center items-center gap-4 flex-1 hover:opacity-70 transition-opacity cursor-pointer"
          >
            <div className="space-y-2 text-center">
              <div className="font-medium text-md">INFO@NEBESKAUDA.COM</div>
              <div className="text-xs text-black/50 font-normal">Atidaryti el. paštą</div>
            </div>
            {/* <EmailIcon /> */}
          </a>

          {/* Phone */}
          <a 
            href="tel:+37062876767"
            className="border-b border-black/20 p-8 flex justify-center items-center gap-4 flex-1 hover:opacity-70 transition-opacity cursor-pointer"
          >
            <div className="space-y-2 text-center">
              <div className="font-medium text-md">+370 628 76 767</div>
              <div className="text-xs text-black/50 font-normal">Paskambinti</div>
            </div>
            {/* <EmailIcon /> */}
          </a>

          {/* Working Hours */}
          {/* <div className="border-b border-black/20 p-8 flex justify-between items-start flex-1">
            <div className="space-y-1">
              <div className="font-medium text-sm">DARBO LAIKAS</div>
              <div className="font-medium text-sm">I-IV: 08:00 – 20:00</div>
              <div className="font-medium text-sm">V: 08:00 – 18:00</div>
            </div>
            <div className="ml-4">
              <ClockIcon />
            </div>
          </div> */}

          
          {/* Registration */}
          <button 
            onClick={scrollToForm}
            className="p-8 flex justify-center items-center flex-1 w-full hover:opacity-70 transition-opacity cursor-pointer"
          >
             <div className="space-y-2 text-center">
              <div className="font-medium text-md">REGISTRUOTIS</div>
              <div className="text-xs text-black/50 font-normal">Atidaryti registracijos formą</div>
            </div>
            {/* <span className="text-base font-medium tracking-wider uppercase border-b border-black pb-1">
              REGISTRUOTIS
            </span>
            <div className="text-xs text-black/50 font-normal">Spustelėkite, kad atidarytumėte registracijos formą</div> */}
          </button>
          
        </div>
      </div>

      {/* Registration Form Section */}
      <section id="registration-form" className="border-t border-black/20 h-screen">
        <div className="flex h-full">
          <div className="flex-1 px-8 py-4">
            <div className="text-center pt-25 mb-40">
                              <h2 className="text-4xl md:text-5xl font-light tracking-wide text-black mb-4 font-louize-display">
                  Registracija
                </h2>
            </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name field */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jūsų vardas"
                className="w-full pb-4 border-b border-black/20 bg-transparent focus:outline-none focus:border-black text-black placeholder-black/50 text-lg"
                required
              />
            </div>
            
            {/* Phone and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Tel. numeris"
                  className="w-full pb-4 border-b border-black/20 bg-transparent focus:outline-none focus:border-black text-black placeholder-black/50 text-lg"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="El. paštas"
                  className="w-full pb-4 border-b border-black/20 bg-transparent focus:outline-none focus:border-black text-black placeholder-black/50 text-lg"
                  required
                />
              </div>
            </div>
            
            {/* Service Selection */}
            <div className="pt-4">
              <div
                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                className="w-full pb-4 border-b border-black/20 bg-transparent text-black text-lg cursor-pointer flex justify-between items-center"
              >
                <span className={formData.services.length > 0 ? 'text-black' : 'text-black/50'}>
                  {formData.services.length > 0 
                    ? `Pasirinkta ${formData.services.length} paslaug${formData.services.length === 1 ? 'a' : 'os'}`
                    : 'Pasirinkite paslaugą'
                  }
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${isServiceDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {isServiceDropdownOpen && (
                <div className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {serviceOptions.map((service) => (
                      <label key={service.value} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="services"
                          value={service.value}
                          checked={formData.services.includes(service.value)}
                          onChange={handleChange}
                          className="w-5 h-5 border border-black/20 rounded"
                        />
                        <span className="text-black text-sm">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Time Preferences */}
            <div className="pt-4">
              <p className="text-black mb-6 text-lg">Tinkamiausias vizito laikas</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="timePreference"
                    value="rytas"
                    checked={formData.timePreference.includes('rytas')}
                    onChange={handleChange}
                    className="w-5 h-5 border border-black/20 rounded"
                  />
                  <span className="text-black">Rytas (08:00 – 12:00)</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="timePreference"
                    value="popietė"
                    checked={formData.timePreference.includes('popietė')}
                    onChange={handleChange}
                    className="w-5 h-5 border border-black/20 rounded"
                  />
                  <span className="text-black">Popietė (13:00 – 16:00)</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="timePreference"
                    value="vakaras"
                    checked={formData.timePreference.includes('vakaras')}
                    onChange={handleChange}
                    className="w-5 h-5 border border-black/20 rounded"
                  />
                  <span className="text-black">Vakaras (17:00 – 19:00)</span>
                </label>
              </div>
            </div>
            
            {/* Privacy Policy */}
            <div className="pt-6 pb-25">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleChange}
                  className="w-5 h-5 border border-black/20 rounded mt-1"
                  required
                />
                <span className="text-black">
                  Patvirtinu, kad susipažinau ir sutinku su klinikos{' '}
                  <Link href="/privatumo-politika" target="_blank" className="underline hover:opacity-70 transition-colors">privatumo politika</Link>.
                </span>
              </label>
            </div>
            
            
          </form>
                   
        </div>
        
        {/* Right Side - Giant Send Button */}
        <div 
          onClick={() => {
            const formElement = document.getElementById('registration-form')
            if (formElement) {
              // You can add form submission logic here
              const form = formElement.querySelector('form') as HTMLFormElement
              if (form) {
                form.requestSubmit()
              }
            }
          }}
          className="w-107 border-l border-black/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
        >
          <span className="text-4xl md:text-5xl font-light tracking-wide text-black font-louize-display">
            Siųsti
          </span>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Tooth Icon (Kaunas)
function ToothIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M24 8c-6 0-10 4-10 10 0 4 2 8 2 12 0 6 2 10 8 10s8-4 8-10c0-4 2-8 2-12 0-6-4-10-10-10z" />
      <path d="M20 20v8" />
      <path d="M28 20v8" />
    </svg>
  )
}

// Email Icon
function EmailIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="8" y="16" width="32" height="20" rx="2" />
      <path d="M8 20l16 10 16-10" />
    </svg>
  )
}

// Clock Icon
function ClockIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="24" cy="24" r="16" />
      <line x1="24" y1="12" x2="24" y2="24" />
      <line x1="24" y1="24" x2="32" y2="24" />
    </svg>
  )
}

// Map Icon
function MapIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M24 8c-6 0-12 6-12 12 0 8 12 20 12 20s12-12 12-20c0-6-6-12-12-12z" />
      <circle cx="24" cy="20" r="4" />
    </svg>
  )
} 