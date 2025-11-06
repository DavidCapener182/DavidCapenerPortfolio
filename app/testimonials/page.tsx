'use client'

import HeroBanner from '@/components/HeroBanner'
import { Card, CardContent } from '@/components/ui/card'
import { motion, useScroll } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animationVariants'
import { useRef, PropsWithChildren } from 'react'

/** Shared consistent section wrapper: 1800×940 sticky panels */
function StickySection({
  bg = 'bg-white',
  children,
}: PropsWithChildren<{ bg?: string }>) {
  return (
    <section className="relative snap-start h-[940px]">
      <div className="sticky top-16 h-[940px]">
        <div className={`h-full ${bg}`}>
          <div className="mx-auto h-full max-w-[1800px] w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoSlots = [
    { label: 'LFC', imageSrc: '/images/logo-placeholder-01.jpg' },
    { label: 'MCFC', imageSrc: '/images/logo-placeholder-02.jpg' },
    { label: 'Burnley FC', imageSrc: '/images/logo-placeholder-03.jpg' },
    { label: 'WWE', imageSrc: '/images/logo-placeholder-04.jpg' },
    { label: 'Blackpool Winter Gardens', imageSrc: '/images/logo-placeholder-05.jpg' },
    { label: 'Victoria Warehouse', imageSrc: '/images/logo-placeholder-06.jpg' },
    { label: 'Preston North End', imageSrc: '/images/logo-placeholder-07.jpg' },
    { label: 'Blackpool FC', imageSrc: '/images/logo-placeholder-08.jpg' },
    { label: 'Creamfields', imageSrc: '/images/logo-placeholder-09.jpg' },
    { label: 'Download Festival', imageSrc: '/images/logo-placeholder-10.jpg' },
    { label: 'Live Nation', imageSrc: '/images/logo-placeholder-11.jpg' },
    { label: 'Festival Republic', imageSrc: '/images/logo-placeholder-12.jpg' },
    { label: 'Warrington Borough Council', imageSrc: '/images/logo-placeholder-13.jpg' },
    { label: 'Liverpool City Council', imageSrc: '/images/logo-placeholder-14.jpg' },
    { label: 'Culture Liverpool', imageSrc: '/images/logo-placeholder-15.jpg' },
    { label: 'M&S Bank Arena', imageSrc: '/images/logo-placeholder-16.jpg' },
    { label: 'Ironman UK', imageSrc: '/images/logo-placeholder-17.jpg' },
    { label: 'Plus many more' },
  ]

  const { scrollYProgress: pageScrollProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const testimonials = [
    {
      text: "Dave's multitasking ability is unlike I’ve seen before. I’m always impressed by his ability to handle any situation calmly and patiently, even with the toughest of clients.",
      name: 'Gareth Howlett',
      title: 'Director of H&A Protection Services',
      organisation: 'SIA ACS Approved Manned Guarding & Crowd Management',
    },
    {
      text: 'David leads his teams by example, carefully balancing operational discipline with the sensitivities of our passionate supporters.',
      name: 'Natalie Gradwell',
      title: 'Safety Officer',
      organisation: 'Blackpool FC',
    },
    {
      text: 'Working with David across several major festivals, I’ve always valued his foresight and calm decision-making. His situational awareness is second to none.',
      name: 'John Proybn',
      title: "CEO",
      organisation: "Live Nation",
    },
    {
      text: 'David’s leadership style fosters both confidence and collaboration. During Eurovision he kept every moving part aligned, even as the city hosted thousands of guests.',
      name: 'Nicola Barr',
      title: 'Venue Operations Manager',
      organisation: 'M&S Bank Arena, Liverpool',
    },
    {
      text: 'David consistently brings clarity and composure to every operational meeting. His understanding of safety protocols and counter-terrorism measures is exemplary.',
      name: 'Sharron Harris',
      title: 'Head of Public Events',
      organisation: 'Warrington Borough Council',
    },
    {
      text: 'It’s rare to find someone with David’s combination of empathy, authority, and operational intelligence. He’s a genuine asset to any security and event management project.',
      name: 'Michael Williams',
      title: 'General Manager',
      organisation: 'Blackpool Winter Gardens',
    },
  ]

  return (
    <div ref={containerRef} className="relative snap-y snap-mandatory">
      {/* Vertical Progress Indicator */}
      <div className="hidden md:block fixed right-0 top-16 bottom-0 w-1 bg-gray-200 z-30">
        <motion.div
          className="w-full bg-red origin-top"
          style={{ scaleY: pageScrollProgress, height: '100%' }}
        />
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative snap-start h-[940px]">
        <div className="sticky top-16 h-[940px] w-full overflow-hidden">
          <HeroBanner
            title="Professional References & Endorsements"
            description="Peer and client feedback showcasing leadership in safety operations, crisis management, and counter-terrorism readiness — highlighting trust, collaboration, and professional integrity across high-profile environments."
            imageSrc="/images/testimonials-hero.jpg"
          />
        </div>
      </section>

      {/* ===== PARTNER LOGOS ===== */}
      <StickySection bg="bg-lightgrey">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp.moderate}
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-6">
            Trusted Partners & Venues
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
            Here are some of the partners and venues I’ve worked with across festivals, arenas, civic spaces, and stadiums.
          </p>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
            variants={staggerContainer.moderate}
          >
            {logoSlots.map((logo, index) => (
              <motion.div
                key={index}
                className="h-24 sm:h-28 md:h-32 flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white shadow-sm hover:shadow-md transition-all duration-300 px-3"
                variants={fadeUp.moderate}
              >
                {logo.imageSrc ? (
                  <img
                    src={logo.imageSrc}
                    alt={logo.label}
                    className="max-h-12 sm:max-h-14 object-contain mb-2"
                  />
                ) : (
                  <div className="flex items-center justify-center mb-2 h-12 sm:h-14 w-full text-gray-300 text-lg font-bold">
                    +
                  </div>
                )}
                <span className="text-xs sm:text-sm font-semibold text-gray-600 text-center">
                  {logo.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </StickySection>

      {/* ===== TESTIMONIALS ===== */}
      <StickySection bg="bg-white">
        <div className="w-full">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-3">
              Professional Testimonials
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              All recommendations are sourced directly from LinkedIn endorsements.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={staggerContainer.moderate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
          {testimonials.map((item, i) => (
            <motion.div key={i} variants={fadeUp.moderate}>
              <Card className="border-l-4 border-t-4 border-red shadow-lg h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <motion.svg
                    className="w-12 h-12 text-red/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </motion.svg>

                  <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
                    “{item.text}”
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-navy">{item.name}</p>
                    <p className="text-gray-600">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.organisation}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </StickySection>
    </div>
  )
} 