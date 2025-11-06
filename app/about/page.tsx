'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, zoomIn, slideLeft, slideRight } from '@/lib/animationVariants'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLElement>(null)

  const { scrollYProgress: pageScrollProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const { scrollYProgress: quoteScrollProgress } = useScroll({
    target: quoteRef,
    offset: ['start end', 'end start'],
  })
  const quoteParallaxY = useTransform(quoteScrollProgress, [0, 1], ['0%', '25%'])

  return (
    <div ref={containerRef} className="pt-16 relative">
      {/* Vertical Progress Indicator */}
      <div className="hidden md:block fixed right-0 top-16 bottom-0 w-1 bg-gray-200 z-30">
        <motion.div
          className="w-full bg-red origin-top"
          style={{ scaleY: pageScrollProgress, height: '100%' }}
        />
      </div>

      {/* Sticky Header */}
      <div className="sticky top-16 z-10 py-3 sm:py-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-navy">About David Capener</h1>
        </div>
      </div>

      {/* ===== INTRODUCTION ===== */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp.moderate}
        >
          <p className="text-lg sm:text-xl text-gray-700 font-medium">
            Security Operations Manager | Level 5 Crowd Safety | Level 6 Counter Terrorism | IOSH Managing Safely | MIMMS Certified
          </p>
          <p className="text-base sm:text-lg text-gray-600 mt-4">
            Leading complex operations through composure, preparation, and people-first leadership — ensuring safety, confidence, and collaboration in every environment.
          </p>
        </motion.div>

        <motion.div
          className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={zoomIn.moderate}
        >
          <Image
            src="/images/headshot.jpg"
            alt="David Capener"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* ===== PROFESSIONAL STORY ===== */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-left">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-3xl text-navy mb-6 text-center sm:text-left">
              My Professional Story
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                My career in crowd safety and security operations spans over a decade, covering festivals, arenas, public events, and live television productions. I’ve led multi-disciplinary teams across high-pressure environments, ensuring professional standards, public safety, and seamless operational delivery.
              </p>
              <p>
                Having started on the ground as an event steward, I developed through supervisory and management roles into strategic operational leadership. From planning and coordination to crisis management and staff welfare, I’ve learned that true leadership is defined by calm decision-making and respect for the people you lead.
              </p>
              <p>
                My professional focus combines strategic oversight with real-world operational experience — ensuring that every decision, every plan, and every person is supported by foresight, clarity, and accountability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== PROFESSIONAL FOCUS & VALUES ===== */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-3xl text-navy mb-6">
              Professional Focus & Values
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              Every successful operation is built on preparation, teamwork, and communication. My leadership style prioritises composure, accountability, and the wellbeing of those I work with — ensuring both operational excellence and trust from those we protect.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              My approach centres on four guiding principles:
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
            variants={staggerContainer.moderate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                title: '1. Preparation & Planning',
                text: 'I believe success is built long before an event begins. Structured planning, clear briefings, and evidence-based decision-making ensure proportionate, lawful, and efficient operations.',
              },
              {
                title: '2. Leadership & Mentorship',
                text: 'Leadership isn’t about authority — it’s about presence. I work alongside teams to build confidence, consistency, and professional pride through mentorship, example, and clear communication.',
              },
              {
                title: '3. Communication & Collaboration',
                text: 'Clear, respectful communication is the cornerstone of effective operations. Whether with emergency services, production partners, or security staff, collaboration drives safety and consistency.',
              },
              {
                title: '4. Resilience & Wellbeing',
                text: 'I maintain composure under pressure, ensuring confidence during complex situations. My leadership always includes focus on staff wellbeing, morale, and professional development.',
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp.moderate}>
                <Card className="border-l-4 border-red shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-xl text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-700">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="mt-10 text-base sm:text-lg text-gray-700 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp.moderate}
          >
            These principles have guided my work with organisations such as Compact Security, H&A Protection Services, Showsec, G4S, and Liverpool Football Club — across events including Eurovision, Rebellion Festival, Creamfields, and Britain’s Got Talent.
          </motion.p>
        </div>
      </section>

      {/* ===== PROFESSIONAL DEVELOPMENT ===== */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-3xl text-navy mb-6">
              Professional Development
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I continue to expand my skills through both formal qualifications and hands-on experience. My current focus includes developing data-led operational strategies, advancing AI-assisted event management systems, and mentoring emerging leaders within the industry to uphold the highest standards of professionalism and safety.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== COMMITMENT TO INCLUSION ===== */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-3xl text-navy mb-6">
              Commitment to Inclusion
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I believe good security makes people feel welcome, not watched. Throughout my career, I’ve worked to ensure safety teams represent the communities they serve — promoting respect, communication, and professionalism at every level. Security should never intimidate; it should reassure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== PERSONAL PHILOSOPHY ===== */}
      <section ref={quoteRef} className="relative min-h-screen flex flex-col justify-center bg-navy overflow-hidden text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ y: quoteParallaxY, willChange: 'transform' }}
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
        </motion.div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp.moderate}
        >
          <p className="text-white text-base sm:text-lg mb-6">
            My leadership philosophy is best captured in one belief:
          </p>
          <blockquote className="text-white text-2xl sm:text-3xl md:text-4xl font-heading font-semibold italic leading-relaxed">
            “Security isn’t about who’s the biggest or the toughest — it’s about the people and places we protect. True security is 99% customer service, built on respect, empathy, and professionalism.”
          </blockquote>
        </motion.div>
      </section>
    </div>
  )
}