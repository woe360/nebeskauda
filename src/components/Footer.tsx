import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#E6E4DE] text-black font-sans border-t border-black/20">

      {/* Contact Info and Social Links */}
      <div className="flex justify-between items-start px-6 py-8">
        {/* Left side - Contact Info */}
        <div className="space-y-2">
          <div className="text-sm">+370 62 87 67 67</div>
          <div className="text-sm">info@nebeskauda.com</div>
          <div className="text-sm">Šiaurės g. 1, Kaunas</div>
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
      <div className="px-6 py-4 flex justify-between items-center">
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