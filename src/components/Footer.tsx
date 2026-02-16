import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#E6E4DE] text-black font-sans border-t border-black/20">
      {/* Top Navigation Links */}
      <div className="border-b border-black/20">
        {/* <div className="flex items-center justify-between">
          <div className="flex-1 border-r border-black/20 px-6 py-4 text-center">
            <Link 
              href="/apie-mus" 
              className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
            >
              APIE MUS
            </Link>
          </div>
          <div className="flex-1 border-r border-black/20 px-6 py-4 text-center">
            <Link 
              href="/paslaugos" 
              className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
            >
              PASLAUGOS
            </Link>
          </div>
          <div className="flex-1 border-r border-black/20 px-6 py-4 text-center">
            <Link 
              href="/kainos" 
              className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
            >
              KAINOS
            </Link>
          </div>
          <div className="flex-1 px-6 py-4 text-center">
            <Link 
              href="/kontaktai" 
              className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
            >
              KONTAKTAI
            </Link>
          </div>
        </div> */}
      </div>

      {/* Contact Info and Social Links */}
      <div className="flex justify-between items-start px-6 py-8">
        {/* Left side - Contact Info */}
        <div className="space-y-2">
          <div className="text-sm">+370 62 87 67 67</div>
          <div className="text-sm">info@nebeskauda.com</div>
          <div className="text-sm">ŠIAURĖS G. 1, KAUNAS</div>
        </div>

        {/* Right side - Social Links */}
        <div className="space-y-2 text-right">
          <div className="text-sm">
            <Link href="https://www.instagram.com/nebeskauda.klinika/" className="hover:opacity-70 transition-opacity">
              INSTAGRAM
            </Link>
          </div>
          <div className="text-sm">
            <Link href="#" className="hover:opacity-70 transition-opacity">
              FACEBOOK
            </Link>
          </div>
          <div className="text-sm">
            <Link href="#" className="hover:opacity-70 transition-opacity">
              LINKEDIN
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright and Links */}
      <div className="border-t border-black/20 px-6 py-4 flex justify-between items-center">
        <div className="text-sm">
          Nebeskauda © {currentYear}
        </div>
        <div className="flex space-x-6">
          <Link href="/privatumo-politika" className="text-sm hover:opacity-70 transition-opacity">
            Privatumo politika
          </Link>
          <Link href="/slapuku-valdymas" className="text-sm hover:opacity-70 transition-opacity">
            Slapukų valdymas
          </Link>
        </div>
      </div>
    </footer>
  )
} 