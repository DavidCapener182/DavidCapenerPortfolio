'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/experience', label: 'Experience' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Why Hire Me' },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1f3ba0] backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 text-[#eef3ff] font-heading font-bold text-base sm:text-lg tracking-wider hover:text-white transition-colors duration-200">
            <span className="uppercase">David Capener</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-[#eef3ff] hover:text-white transition-colors duration-200 font-medium uppercase text-sm tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#eef3ff] focus:outline-none hover:text-white p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 bg-[#1f3ba0] border-t border-[#2b4cc5] mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href)
                    setIsOpen(false)
                  }}
                  className="block py-3 px-2 text-[#eef3ff] hover:text-white hover:bg-[#2b4cc5] transition-colors duration-200 uppercase text-sm tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
      </div>
    </nav>
  )
}

