import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import '../styles/globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'David Capener — Security Operations & Crowd Safety Leader',
  description: 'David Capener — Security Operations and Crowd Safety Leader. Specialist in event management, risk mitigation, and emergency response for major UK venues and festivals.',
  keywords: 'Crowd Safety Manager, Event Security, Crisis Management, Security Operations Liverpool, Martyn\'s Law Compliance, Campus Support Leadership',
  openGraph: {
    title: 'David Capener — Security Operations & Crowd Safety Leader',
    description: 'Specialist in event management, risk mitigation, and emergency response for major UK venues and festivals.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

