import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[#d4a574] transform rotate-45"></div>
            <span className="font-heading text-sm">&copy; {new Date().getFullYear()} David Capener</span>
          </div>

          {/* CTA Button */}
          <Link 
            href="/contact"
            className="border-2 border-[#d4a574] text-white px-8 py-3 font-heading uppercase tracking-wider text-sm hover:bg-[#d4a574] hover:text-gray-900 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>Security Operations & Crowd Safety Leader</p>
        </div>
      </div>
    </footer>
  )
}

