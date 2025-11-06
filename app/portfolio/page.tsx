'use client'

import HeroBanner from '@/components/HeroBanner'
import CaseStudy from '@/components/CaseStudy'
import { Card } from '@/components/ui/card'
import { motion, useScroll } from 'framer-motion'
import { fadeUp, staggerContainer, zoomIn } from '@/lib/animationVariants'
import { useRef, PropsWithChildren } from 'react'

/** Shared shell: always 1800 × 940 below the 64 px fixed nav */
function StickySection({
  id,
  bg = 'bg-white',
  children,
}: PropsWithChildren<{ id?: string; bg?: string }>) {
  return (
    <section id={id} className="relative snap-start h-[940px]">
      <div className="sticky top-16 h-[940px]">
        <div className={`h-full ${bg}`}>
          <div className="mx-auto h-full max-w-[1800px] w-full px-4 sm:px-6 lg:px-8">
            <div className="h-full w-full flex items-center">{children}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: pageScrollProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={containerRef} className="relative snap-y snap-mandatory">
      {/* Vertical progress indicator */}
      <div className="hidden md:block fixed right-0 top-16 bottom-0 w-1 bg-gray-200 z-30">
        <motion.div
          className="w-full bg-red origin-top"
          style={{ scaleY: pageScrollProgress, height: '100%' }}
        />
      </div>

      {/* ===== HERO BANNER – full-bleed ===== */}
      <section className="relative snap-start h-[940px]">
        <div className="sticky top-16 h-[940px] w-full overflow-hidden">
          <HeroBanner
            title="Case Studies & Project Highlights"
            description="A curated selection of projects showcasing leadership in crowd management, operational strategy, and safety innovation — from high-profile festivals to public and educational environments."
            imageSrc="/images/portfolio-hero.jpg"
          />
        </div>
      </section>

      {/* ===== EUROVISION ===== */}
      <StickySection bg="bg-white">
        <CaseStudy
          title="Eurovision 2023, Liverpool"
          role="Venue Security Manager | M&S Bank Arena"
          client="BBC / Venue Management"
          duration="Four months planning, one month on-site"
          description="In 2023 I led full venue security operations for the Eurovision Song Contest hosted at Liverpool’s M&S Bank Arena — one of the city’s most complex live broadcast events. Responsibilities included strategic risk planning, personnel coordination, and integrated emergency response management. I worked collaboratively with BBC production, venue management, and local authorities to deliver a safe and compliant guest experience across eight show days."
          keyOutcomes={[
            'Delivered eight live international broadcasts without incident',
            'Achieved 100 % compliance with venue and broadcast security standards',
            'Developed cross-agency contingency planning with emergency services',
          ]}
          imageSrc="/images/eurovision-arena.jpg"
          imageAlt="Eurovision 2023 at M&S Bank Arena"
        />
      </StickySection>

      {/* ===== LFC PARADE ===== */}
      <StickySection bg="bg-gray-50">
        <CaseStudy
          title="2019 LFC European Cup Parade, Liverpool"
          role="Head of Security Operations"
          client="Liverpool Football Club / Liverpool City Council"
          duration="2019"
          description="I led comprehensive security operations for the 2019 Liverpool FC European Cup victory parade — one of the largest public celebrations in Liverpool’s history. In partnership with LFC and Liverpool City Council, I coordinated security teams across the city-centre parade route to manage hundreds of thousands of celebrants safely."
          keyOutcomes={[
            'Managed security for hundreds of thousands along a city-wide route',
            'Coordinated multi-agency response with LFC, Council and emergency services',
            'Delivered safe celebration with zero major incidents',
          ]}
          imageSrc="/images/liverpool-parade.jpg"
          imageAlt="2019 LFC European Cup Parade, Liverpool"
        />
      </StickySection>

      {/* ===== CREAMFIELDS ===== */}
      <StickySection bg="bg-white">
        <CaseStudy
          title="Creamfields Festival"
          role="Security Consultant & Operational Lead"
          client="Live Nation (via H&A Protection Services and Compact Security Services)"
          duration="2013 – Present"
          description="Over the past decade I’ve provided strategic oversight and on-the-ground management for Creamfields — one of the UK’s largest electronic music festivals. My role covers operational planning, control room command, and coordination between security, medical, and production teams."
          keyOutcomes={[
            'Reduced ingress and egress congestion through redesigned flow management',
            'Strengthened coordination between medical, welfare, and site teams',
            "Supported Live Nation’s long-term safety improvement framework",
          ]}
          imageSrc="/images/creamfields-festival.jpg"
          imageAlt="Creamfields Festival"
        />
      </StickySection>

      {/* ===== REBELLION ===== */}
      <StickySection bg="bg-gray-50">
        <CaseStudy
          title="Rebellion Festival, Blackpool"
          role="Site Security Manager | Crisis Lead"
          client="Rebellion Festival Organisers"
          description="During Rebellion Festival, riots involving over 1 000 people occurred in close proximity to the venue. With more than 10 000 attendees inside, I led lockdown procedures, protected attendees, and coordinated communications with police and emergency services."
          keyOutcomes={[
            'Implemented emergency lockdown and communication plan',
            'Maintained operational calm and compliance under pressure',
            'Coordinated real-time response with law enforcement and public safety teams',
          ]}
          imageSrc="/images/rebellion-festival.jpg"
          imageAlt="Rebellion Festival, Blackpool"
        />
      </StickySection>

      {/* ===== INCOMMAND AI PLATFORM ===== */}
      <StickySection bg="bg-white">
        <CaseStudy
          title="InCommand"
          role="Creator & Developer"
          description="I designed and developed InCommand, an event-management platform integrating Martyn’s Law principles into a dynamic decision-support system. It uses AI to provide real-time risk analysis, scenario prompts, and continuous monitoring across venues."
          keyOutcomes={[
            'Real-time incident decision support',
            "Martyn’s Law compliance mapping and automated escalation prompts",
            'Integration with existing venue control systems',
          ]}
          imageSrc="/images/ai-platform-mockup.png"
          imageAlt="InCommand Event Management Platform"
        />
      </StickySection>

      {/* ===== GALLERY ===== */}
      <StickySection id="gallery" bg="bg-lightgrey">
        <div className="w-full">
          <motion.div
            className="text-center mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-2">
              Operational Gallery
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              A visual overview of live operations, control-room management and leadership in action.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
            variants={staggerContainer.moderate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              {
                src: '/images/gallery-1.jpg',
                text: 'Major Event Operations — Large-scale live environment management',
              },
              {
                src: '/images/gallery-2.jpg',
                text: 'Team Leadership — Briefings, coordination and staff welfare engagement',
              },
              {
                src: '/images/gallery-4.jpg',
                text: 'Leading Parades — Large-scale public event management and crowd safety',
              },
            ].map((item, i) => (
              <motion.div key={i} variants={zoomIn.moderate}>
                <Card className="overflow-hidden shadow-lg group cursor-pointer">
                  <div className="relative h-64 bg-gray-300 overflow-hidden">
                    <img
                      src={item.src}
                      alt="Event gallery"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-sm font-semibold text-center px-4">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </StickySection>

      {/* ===== CLOSING STATEMENT ===== */}
      <StickySection bg="bg-navy">
        <motion.div
          className="w-full max-w-4xl mx-auto text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp.moderate}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-6">
            Commitment to Excellence
          </h2>
          <p className="text-base sm:text-lg mb-4 leading-relaxed">
            Every project I undertake is built on one core principle: protecting people through preparation, precision and empathy.
          </p>
          <p className="text-base sm:text-lg mb-4 leading-relaxed">
            My leadership is rooted in inclusion, respect and collaboration — ensuring that every team member, student or spectator feels safe, supported and confident in their environment.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            I combine operational foresight with practical experience to ensure that every event, no matter how complex, runs safely, efficiently and with integrity.
          </p>
        </motion.div>
      </StickySection>
    </div>
  )
}