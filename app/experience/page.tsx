'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion, useScroll } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animationVariants'
import { useRef, PropsWithChildren } from 'react'

function StickySection({
  bg = 'bg-white',
  children,
}: PropsWithChildren<{ bg?: string }>) {
  return (
    <section className="relative snap-start h-[940px]">
      <div className="sticky top-16 h-[940px]">
        <div className={`h-full ${bg}`}>
          <div className="mx-auto h-full max-w-[1800px] w-full px-4 sm:px-6 lg:px-8 flex items-center">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: pageScrollProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={containerRef} className="relative snap-y snap-mandatory">
      {/* ===== VERTICAL PROGRESS BAR ===== */}
      <div className="hidden md:block fixed right-0 top-16 bottom-0 w-1 bg-gray-200 z-30">
        <motion.div
          className="w-full bg-red origin-top"
          style={{ scaleY: pageScrollProgress, height: '100%' }}
        />
      </div>

      {/* ===== HERO HEADER ===== */}
      <section className="relative snap-start h-[940px]">
        <div className="sticky top-16 h-[940px] w-full overflow-hidden">
          {/* Background image placeholder */}
          <div className="absolute inset-0">
            <img
              src="/images/experience-hero.jpg" // 👈 replace this with your chosen hero image
              alt="Professional experience background"
              className="w-full h-full object-cover brightness-[0.45]"
            />
          </div>

          {/* Overlay content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp.moderate}
            >
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
                Professional Experience
              </h1>
              <p className="text-lg sm:text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
                Over a decade of leadership across the UK’s most prestigious events and venues — combining operational expertise, composure under pressure, and a commitment to the safety and wellbeing of every person on site.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CURRENT ROLE ===== */}
      <StickySection bg="bg-white">
        <motion.div
          className="max-w-4xl mx-auto relative pl-8 border-l-4 border-red"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            className="absolute -left-2 top-0 w-4 h-4 bg-red rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>

          <span className="text-sm font-semibold text-red bg-red-50 px-3 py-1 rounded-full mb-2 inline-block">
            Current Role
          </span>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-2">
            Senior Operations Manager – Events & Festivals
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-4 font-semibold">
            Compact Security Services | September 2023 – Present
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            As Senior Operations Manager, I lead all aspects of event and festival security operations — from strategic planning and risk assessment to live delivery and post-event review. My focus is on maintaining composure, clear communication, and proportionate response in every environment.
          </p>

          <p className="text-base sm:text-lg text-gray-700 font-semibold mb-3">
            Core Responsibilities:
          </p>
          <ul className="space-y-2 text-base text-gray-700 mb-6">
            {[
              'Designing and implementing health and safety protocols',
              'Conducting detailed risk assessments and compliance audits',
              'Coordinating with clients, local authorities, and venue management',
              'Leading multidisciplinary teams during live operations',
              'Managing staff wellbeing and professional development',
              'Coaching and mentoring security professionals',
              'Analysing incident data to inform preventive measures',
              'Overseeing crisis response under the MIMMS framework',
              'Integrating Counter Terrorism Level 6 principles into planning',
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </StickySection>

      {/* ===== PREVIOUS ROLE ===== */}
      <StickySection bg="bg-lightgrey">
        <motion.div
          className="max-w-4xl mx-auto relative pl-8 border-l-4 border-navy"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            className="absolute -left-2 top-0 w-4 h-4 bg-navy rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-2">
            Head of Operations – Events & Festivals
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-4 font-semibold">
            H&A Protection Services Ltd | April 2018 – September 2023
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Managed multi-site operations across festivals, civic events, and local authority contracts — embedding counter terrorism readiness, safety planning, and continuous improvement throughout all teams.
          </p>
          <ul className="space-y-2 text-base text-gray-700 mb-6">
            {[
              'Recruited, trained, and led over 150 security professionals',
              'Delivered bespoke safety and crowd management plans',
              'Oversaw large-scale civic and festival contracts nationwide',
              'Introduced compliance and disciplinary frameworks',
              'Enhanced cooperation between event control, emergency services, and management teams',
              'Implemented Counter Terrorism Level 6 staff training programmes',
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </StickySection>

      {/* ===== EARLY CAREER ===== */}
      <StickySection bg="bg-white">
        <motion.div
          className="max-w-4xl mx-auto relative pl-8 border-l-4 border-navy"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            className="absolute -left-2 top-0 w-4 h-4 bg-navy rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-2">
            Early Career
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-4 font-semibold">
            Showsec International | G4S Events | Liverpool Football Club | 2012 – 2018
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Developed foundations in crowd safety, event logistics, and control-room coordination — progressing from Safety Steward to Head of Security through professionalism, adaptability, and calm leadership.
          </p>
          <ul className="space-y-2 text-base text-gray-700 mb-6">
            {[
              'Major football and rugby fixtures',
              'Music festivals and government conferences',
              'The Open Golf Championships and World Dance Festivals',
              'CBBC Live Event — build and production phase security',
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </StickySection>

      {/* ===== CERTIFICATIONS ===== */}
      <StickySection bg="bg-lightgrey">
        <div className="w-full">
          <motion.h2
            className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-8 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp.light}
          >
            Certifications & Qualifications
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={staggerContainer.light}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              'Level 5 Crowd Safety Management',
              'Counter Terrorism Level 6 (Protective Security)',
              'Major Incident Medical Management & Support (MIMMS)',
              'Level 4 Crowd Safety Officer',
              'IOSH Managing Safely',
              'NVQ Level 2 & 3 Spectator Safety',
              'SIA Licensed Door Supervisor',
            ].map((cert, i) => (
              <Card
                key={i}
                className="border-l-4 border-navy shadow-md hover:shadow-lg hover:border-red transition-transform duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-navy">{cert}</h3>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </StickySection>

      {/* ===== PROFESSIONAL SKILLS ===== */}
      <StickySection bg="bg-white">
        <div className="w-full">
          <motion.h2
            className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-8 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp.light}
          >
            Professional Skills Summary
          </motion.h2>

          <motion.div
            variants={staggerContainer.light}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              {
                label: 'Operational Expertise',
                items: [
                  'Operational Leadership',
                  'Health & Safety Compliance',
                  'Crisis Management & Decision-Making',
                  'Risk Assessment & Mitigation',
                  'Emergency Response Coordination',
                ],
              },
              {
                label: 'Strategic Capability',
                items: [
                  'Strategic & Contingency Planning',
                  'Client Relationship Management',
                  'Evidence-Based Analysis',
                  'Stakeholder Communication',
                ],
              },
              {
                label: 'Leadership & People Management',
                items: [
                  'Team Leadership & Motivation',
                  'Staff Welfare & Wellbeing',
                  'Performance Coaching & Mentoring',
                  'Conflict Resolution & Communication',
                ],
              },
              {
                label: 'Protective Security',
                items: [
                  'Counter Terrorism Preparedness',
                  'Protective Security Planning',
                  "Public Safety Legislation (Martyn's Law)",
                ],
              },
            ].map((group, gi) => (
              <div key={gi} className="mb-8 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-navy mb-4">
                  {group.label}
                </h3>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  {group.items.map((skill, si) => (
                    <Badge
                      key={si}
                      variant="secondary"
                      className="bg-navy text-white px-6 py-3 text-base hover:bg-navy/90"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </StickySection>
    </div>
  )
}