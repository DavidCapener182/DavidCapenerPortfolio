'use client'

import HeroBanner from '@/components/HeroBanner'
import CaseStudy from '@/components/CaseStudy'
import Button from '@/components/Button'
import { Card } from '@/components/ui/card'
import { motion, useScroll } from 'framer-motion'
import { fadeUp, staggerContainer, zoomIn } from '@/lib/animationVariants'
import { useRef } from 'react'

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: pageScrollProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={containerRef} className="pt-16 relative">
      {/* Scroll Progress Indicator */}
      <div className="hidden md:block fixed right-0 top-16 bottom-0 w-1 bg-gray-200 z-30">
        <motion.div
          className="w-full bg-red origin-top"
          style={{ scaleY: pageScrollProgress, height: '100%' }}
        />
      </div>

      {/* Hero Banner */}
      <section className="relative snap-start scroll-mt-20 bg-white">
        <div className="md:sticky md:top-0 md:h-[940px] md:max-w-[1800px] mx-auto">
          <HeroBanner
            title="Case Studies & Project Highlights"
            description="A curated selection of projects showcasing leadership in crowd management, operational strategy, and safety innovation — from high-profile festivals to public and educational environments."
            imageSrc="/images/portfolio-hero.jpg"
          />
        </div>
      </section>

      {/* Case Study 1 - Eurovision */}
      <section className="relative snap-start scroll-mt-20 bg-white">
        <div className="md:sticky md:top-0 md:h-[940px] md:max-w-[1800px] mx-auto flex flex-col justify-center">
          <div className="px-4 sm:px-6 lg:px-8">
            <CaseStudy
              title="Eurovision 2023, Liverpool"
              role="Venue Security Manager | M&S Bank Arena"
              client="BBC / Venue Management"
              duration="Four months planning, one month on-site"
              description="In 2023, I led full venue security operations for the Eurovision Song Contest hosted at Liverpool's M&S Bank Arena — one of the city's most complex live broadcast events. Responsibilities included strategic risk planning, personnel coordination, and integrated emergency response management. I worked collaboratively with BBC production, venue management, and local authorities to deliver a safe, compliant, and seamless guest experience across eight show days."
              keyOutcomes={[
                'Delivered eight live international broadcasts without incident',
                'Achieved 100% compliance with venue and broadcast security standards',
                'Developed cross-agency contingency planning with emergency services'
              ]}
              imageSrc="/images/eurovision-arena.jpg"
              imageAlt="Eurovision 2023 at M&S Bank Arena"
            />
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-center text-sm text-red-500 mt-6"
            >
              ↓ Read next project
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study 2 - Liverpool Parade */}
      <section className="relative snap-start scroll-mt-20 bg-gray-50">
        <div className="md:sticky md:top-0 md:h-[940px] md:max-w-[1800px] mx-auto flex flex-col justify-center">
          <div className="px-4 sm:px-6 lg:px-8">
            <CaseStudy
              title="2019 LFC European Cup Parade, Liverpool"
              role="Head of Security Operations"
              client="Liverpool Football Club / Liverpool City Council"
              duration="2019"
              description="I led comprehensive security operations for the 2019 Liverpool FC European Cup victory parade, one of the largest public celebrations in Liverpool's history. Working in partnership with Liverpool Football Club and Liverpool City Council, I coordinated security teams across the entire city centre parade route to ensure the safe management of hundreds of thousands of celebrants."
              keyOutcomes={[
                'Managed security for hundreds of thousands of attendees',
                'Coordinated multi-agency response with LFC, Council, and emergency services',
                'Delivered safe celebration event with zero major incidents'
              ]}
              imageSrc="/images/liverpool-parade.jpg"
              imageAlt="2019 LFC European Cup Parade, Liverpool"
            />
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-center text-sm text-red-500 mt-6"
            >
              ↓ Read next project
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study 3 - Creamfields */}
      <section className="relative snap-start scroll-mt-20 bg-white">
        <div className="md:sticky md:top-0 md:h-[940px] md:max-w-[1800px] mx-auto flex flex-col justify-center">
          <div className="px-4 sm:px-6 lg:px-8">
            <CaseStudy
              title="Creamfields Festival"
              role="Security Consultant & Operational Lead"
              client="Live Nation (via H&A Protection Services and Compact Security Services)"
              duration="2013 – Present"
              description="Over the past decade, I've provided strategic oversight and on-the-ground management for Creamfields — one of the UK's largest electronic music festivals."
              keyOutcomes={[
                'Reduced ingress and egress congestion incidents',
                'Improved coordination between medical and welfare teams',
                "Supported Live Nation’s long-term safety improvement framework"
              ]}
              imageSrc="/images/creamfields-festival.jpg"
              imageAlt="Creamfields Festival"
            />
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-center text-sm text-red-500 mt-6"
            >
              ↓ Read next project
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study 4 - Rebellion */}
      <section className="relative snap-start scroll-mt-20 bg-gray-50">
        <div className="md:sticky md:top-0 md:h-[940px] md:max-w-[1800px] mx-auto flex flex-col justify-center">
          <div className="px-4 sm:px-6 lg:px-8">
            <CaseStudy
              title="Rebellion Festival, Blackpool"
              role="Site Security Manager | Crisis Lead"
              client="Rebellion Festival Organisers"
              description="During Rebellion Festival, riots involving over 1,000 people occurred in close proximity to the venue. With more than 10,000 attendees inside, I led lockdown procedures, coordinated with police, and ensured attendee safety."
              keyOutcomes={[
                'Implemented emergency lockdown and communication plan',
                'Maintained operational calm and compliance under duress',
                'Coordinated real-time response with law enforcement'
              ]}
              imageSrc="/images/rebellion-festival.jpg"
              imageAlt="Rebellion Festival, Blackpool"
            />
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-center text-sm text-red-500 mt-6"
            >
              ↓ Read next project
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study 5 - AI Platform */}
      <section className="relative snap-start scroll-mt-20 bg-white">
        <div className="md:sticky md:top-0 md:h-[940px] md:max-w-[1800px] mx-auto flex flex-col justify-center">
          <div className="px-4 sm:px-6 lg:px-8">
            <CaseStudy
              title="InCommand"
              role="Creator & Developer"
              description="I designed and developed InCommand, an AI-integrated event management platform aligning with Martyn’s Law, providing real-time risk analysis and control-room decision support."
              keyOutcomes={[
                'Real-time incident decision support',
                "Martyn’s Law compliance mapping and automated prompts",
                'Integration with venue control systems'
              ]}
              imageSrc="/images/ai-platform-mockup.png"
              imageAlt="InCommand Event Management Platform"
            />
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-center text-sm text-red-500 mt-6"
            >
              ↓ Read next project
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative snap-start scroll-mt-20 bg-lightgrey">
        <div className="md:sticky md:top-0 md:h-[940px] md:max-w-[1800px] mx-auto flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-4"
            variants={fadeUp.moderate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            Operational Gallery
          </motion.h2>

          <motion.p
            className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg"
            variants={fadeUp.moderate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            A visual overview of live operations, control room management, and leadership in action.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
            variants={staggerContainer.moderate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { src: "/images/gallery-1.jpg", text: "Major Event Operations — Large-scale live environment management" },
              { src: "/images/gallery-2.jpg", text: "Team Leadership — Briefings, coordination, and staff welfare engagement" },
              { src: "/images/gallery-4.jpg", text: "Leading Parades — Large-scale public event management and crowd safety" }
            ].map((item, index) => (
              <motion.div key={index} variants={zoomIn.moderate}>
                <Card className="overflow-hidden shadow-lg group cursor-pointer">
                  <motion.div
                    className="relative h-64 bg-gray-300 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={item.src} alt={item.text} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-sm font-semibold text-center px-4">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="relative snap-start scroll-mt-20 bg-navy text-white">
        <div className="md:sticky md:top-0 md:h-[940px] md:max-w-[1800px] mx-auto flex flex-col justify-center">
          <motion.div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            variants={fadeUp.moderate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-6">
              Commitment to Excellence
            </h2>
            <p className="text-base sm:text-lg mb-4 leading-relaxed">
              Every project I undertake is built on one core principle: protecting people through preparation, precision, and empathy.
            </p>
            <p className="text-base sm:text-lg mb-4 leading-relaxed">
              My leadership is rooted in inclusion, respect, and collaboration — ensuring that every team member, student, or spectator feels safe, supported, and confident in their environment.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              I combine operational foresight with practical experience to ensure that every event, no matter how complex, runs safely, efficiently, and with integrity.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}