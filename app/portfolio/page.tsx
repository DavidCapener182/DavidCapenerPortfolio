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
            description="A curated selection of projects showcasing leadership in crowd management, operational strategy, and safety innovation — from major festivals to public events and live broadcast environments."
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
    description="In 2023, I led venue-wide security operations for the Eurovision Song Contest at Liverpool’s M&S Bank Arena — one of the city’s largest and most complex live broadcast events. My responsibilities included strategic planning, staff coordination, and integrated emergency response, ensuring a secure and seamless experience across all eight live show days. With delegations arriving from across Europe, I also managed the recruitment and coordination of bilingual staff, prepared multilingual briefing materials, and maintained a strong focus on international hospitality and communication to support delegates, visitors, and media teams from diverse linguistic and cultural backgrounds."
    keyOutcomes={[
      'Delivered eight live international broadcasts without incident',
      'Maintained full compliance with broadcast and venue security standards',
      'Enhanced cross-agency planning with emergency and production partners',
      'Recruited and coordinated bilingual staff across operational teams',
      'Prepared multilingual briefing materials to enhance staff readiness and visitor experience',
      'Strengthened international hospitality and communication for delegates and guests',
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
          description="During Rebellion Festival, an external disturbance involving over 1,000 people occurred close to the venue. With more than 10,000 attendees inside, I led the lockdown response, ensuring public safety, coordinating with police, and maintaining calm communication throughout the incident."
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
          description="I designed and developed InCommand, a bespoke event-management platform integrating Martyn’s Law principles into a dynamic decision-support tool. It leverages AI for live incident prompts, real-time risk analysis, and seamless integration with venue control systems."
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
  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
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
  My leadership is built on respect, accountability, and teamwork — ensuring every colleague, contractor, and member of the public feels safe, supported, and confident in their surroundings.
</p>
<p className="text-base sm:text-lg leading-relaxed">
  I combine operational foresight with real-world experience to ensure every event — no matter how complex — runs safely, efficiently, and with integrity.
</p>
        </motion.div>
      </StickySection>
    </div>
  )
}