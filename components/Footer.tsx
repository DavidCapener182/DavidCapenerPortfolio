import Link from 'next/link'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#d4a574] transform rotate-45"></div>
              <span className="font-heading text-sm">&copy; {new Date().getFullYear()} David Capener</span>
            </div>
            
            {/* Contact Details */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-4 sm:gap-6 md:gap-3 sm:ml-6 md:ml-0 mt-4 sm:mt-0">
              <a 
                href="tel:07927885481" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>07927885481</span>
              </a>
              <a 
                href="mailto:Capener182@googlemail.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base break-all"
              >
                <EnvelopeIcon className="w-5 h-5 flex-shrink-0" />
                <span>Capener182@googlemail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/DavidCapener182" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <Link 
            href="/contact"
            className="border-2 border-[#d4a574] text-white px-6 sm:px-8 py-3 font-heading uppercase tracking-wider text-sm hover:bg-[#d4a574] hover:text-gray-900 transition-all duration-200 text-center"
          >
            Why Hire Me
          </Link>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>Security Operations & Crowd Safety Leader</p>
        </div>
      </div>
    </footer>
  )
}

