'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#E6E4DE] text-black font-sans">
      {/* Desktop Navigation - hidden on mobile, show from md up */}
      <nav className="hidden md:block border-b border-black/20">
        <div className="flex items-center justify-between">
          <div className="flex-1 border-r border-black/20 px-6 py-4 text-center">
            <Link 
              href="/apie-mus" 
              className={`text-sm font-medium tracking-tight hover:opacity-70 transition-opacity leading-none ${
                isActive('/apie-mus') 
                  ? 'border-b border-black' 
                  : ''
              }`}
            >
              APIE MUS
            </Link>
          </div>
          <div className="flex-1 border-r border-black/20 px-6 py-4 text-center">
            <Link 
              href="/paslaugos" 
              className={`text-sm font-medium tracking-tight hover:opacity-70 transition-opacity leading-none ${
                isActive('/paslaugos') 
                  ? 'border-b border-black' 
                  : ''
              }`}
            >
              PASLAUGOS
            </Link>
          </div>
          <div className="flex-1 border-r border-black/20 px-6 py-4 mt-2 flex justify-center items-center">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              <div className={`text-2xl font-louize-display tracking-normal leading-none ${
                isActive('/') 
                  ? 'border-b border-black' 
                  : ''
              }`}>
                NEBESKAUDA
              </div>
            </Link>
          </div>
          
          <div className="flex-1 border-r border-black/20 px-6 py-4 text-center">
            <Link 
              href="/kainos" 
              className={`text-sm font-medium tracking-tight hover:opacity-70 transition-opacity leading-none ${
                isActive('/kainos') 
                  ? 'border-b border-black' 
                  : ''
              }`}
            >
              KAINOS
            </Link>
          </div>
          <div className="flex-1 px-6 py-4 text-center">
            <Link 
              href="/kontaktai" 
              className={`text-sm font-medium tracking-tight hover:opacity-70 transition-opacity leading-none ${
                isActive('/kontaktai') 
                  ? 'border-b border-black' 
                  : ''
              }`}
            >
              KONTAKTAI
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden border-b border-black/20">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="hover:opacity-70 transition-opacity">
                          <div className={`text-md font-louize-display tracking-wide leading-none ${
                isActive('/') 
                  ? 'border-b border-black' 
                  : ''
              }`}>
              Nebeskauda
            </div>
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:opacity-70 transition-opacity"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-black/20">
            <div className="px-6 py-4 space-y-4">
              <Link
                href="/apie-mus"
                className={`block text-sm font-medium tracking-wide hover:opacity-70 transition-opacity leading-none ${
                  isActive('/apie-mus') 
                    ? 'border-b border-black' 
                    : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                APIE MUS
              </Link>
              <Link
                href="/paslaugos"
                className={`block text-sm font-medium tracking-wide hover:opacity-70 transition-opacity leading-none ${
                  isActive('/paslaugos') 
                    ? 'border-b border-black' 
                    : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                PASLAUGOS
              </Link>
              <Link
                href="/kainos"
                className={`block text-sm font-medium tracking-wide hover:opacity-70 transition-opacity leading-none ${
                  isActive('/kainos') 
                    ? 'border-b border-black' 
                    : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                KAINOS
              </Link>
              <Link
                href="/kontaktai"
                className={`block text-sm font-medium tracking-wide hover:opacity-70 transition-opacity leading-none ${
                  isActive('/kontaktai') 
                    ? 'border-b border-black' 
                    : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                KONTAKTAI
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navigation