'use client'

import Button from '@/components/Button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion, useScroll } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animationVariants'
import { useRef } from 'react'

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress: pageScrollProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={containerRef} className="pt-16 relative">
      {/* Vertical Progress Indicator */}
      <div className="hidden md:block fixed right-0 top-16 bottom-0 w-1 bg-gray-200 z-30">
        <motion.div
          className="w-full bg-red origin-top"
          style={{ scaleY: pageScrollProgress, height: '100%' }}
        />
      </div>
      {/* Header */}
      <section className="py-12 sm:py-16 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.light}
          >
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-navy mb-4">
              Professional Experience
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Over a decade of leadership across the UK's most prestigious events and venues — delivering operational excellence, safety compliance, counter terrorism awareness, and team performance in demanding live and public environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Role */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className="relative pl-8 border-l-4 border-red"
          >
            <motion.div
              className="absolute -left-2 top-0 w-4 h-4 bg-red rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <div className="mb-2">
              <span className="text-sm font-semibold text-red bg-red-50 px-3 py-1 rounded-full">
                Current Role
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-2">
              Senior Operations Manager – Events & Festivals
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-4 font-semibold">
              Compact Security Services | September 2023 – Present
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              As Senior Operations Manager, I oversee the full spectrum of event and festival security operations — from strategic planning and risk assessment to live delivery and post-event evaluation.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              My remit includes integrating counter terrorism principles into all operational protocols, ensuring alignment with current protective security standards and Martyn's Law requirements.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 font-semibold">
              My responsibilities include:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Designing and implementing comprehensive health and safety protocols</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Conducting detailed risk assessments and compliance audits</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Coordinating with clients, local authorities, and venue management</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Leading multidisciplinary teams during live operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Managing staff wellbeing, welfare, and motivation across operational teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Coaching and mentoring security professionals for capability development</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Analyzing incident data to identify trends and implement preventive measures</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Managing crisis and emergency response procedures under the MIMMS framework</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Incorporating Counter Terrorism Level 6 principles into event planning, crowd management, and response protocols</span>
              </li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I take pride in fostering a culture of professionalism and accountability, ensuring that every member of the team upholds the highest operational and safety standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Previous Role */}
      <section className="py-12 sm:py-16 bg-lightgrey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className="relative pl-8 border-l-4 border-navy"
          >
            <motion.div
              className="absolute -left-2 top-0 w-4 h-4 bg-navy rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-2">
              Head of Operations – Events & Festivals
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-4 font-semibold">
              H&A Protection Services Ltd | April 2018 – September 2023
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              My responsibilities included overseeing large-scale operations across civic, festival, and local authority contracts, embedding counter terrorism preparedness and community safety principles into operational planning.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 font-semibold">
              Key achievements include:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Recruiting, training, and mentoring a skilled team of over 150 security professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Leading operational security at national festivals and stadium events</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Delivering bespoke safety and crowd management plans for local councils and private clients</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Implementing new disciplinary and compliance processes to elevate professionalism</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Developing tailored event security solutions for civic facilities and major outdoor events</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Introduced Counter Terrorism Level 6 training modules into staff development programmes, ensuring awareness and preparedness across all operational levels</span>
              </li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              During my tenure, I successfully enhanced operational efficiency and client satisfaction, contributing to measurable business growth and sustained client partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Early Career */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className="relative pl-8 border-l-4 border-navy"
          >
            <motion.div
              className="absolute -left-2 top-0 w-4 h-4 bg-navy rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-2">
              Early Career
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-4 font-semibold">
              Showsec International | G4S Events | Liverpool Football Club | 2012 – 2018
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              My early experience in event and venue security management provided a strong foundation in crowd control, safety coordination, and protective security principles, including the early adoption of counter terrorism awareness and emergency response protocols.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              I progressed from Safety Steward to Senior Supervisor and Head of Security, overseeing operations for high-profile events such as:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>International football and rugby matches</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Music festivals and government conferences</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>The Open Golf Championships and World Dance Festivals</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>CBBC Live Event – full event security management including build, production, and break phases</span>
              </li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              These formative years instilled the principles of calm leadership, decisive action, and accountability that define my approach today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 sm:py-16 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-8 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.light}
          >
            Certifications & Qualifications
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={staggerContainer.light}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { name: 'Level 5 Crowd Safety Management', borderColor: 'border-red-500' },
              { name: 'Counter Terrorism Level 6 (Protective Security)', borderColor: 'border-navy-600' },
              { name: 'Major Incident Medical Management & Support (MIMMS)', borderColor: 'border-red-500' },
              { name: 'Level 4 Crowd Safety Officer', borderColor: 'border-navy-600' },
              { name: 'IOSH Managing Safely', borderColor: 'border-red-500' },
              { name: 'NVQ Level 2 & 3 Spectator Safety', borderColor: 'border-navy-600' },
              { name: 'SIA Licensed Door Supervisor', borderColor: 'border-red-500' },
            ].map((cert, index) => (
              <motion.div key={index} variants={fadeUp.light}>
                <Card
                  className={`border-l-4 ${cert.borderColor} shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300`}
                >
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-xl text-navy">
                      {cert.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Professional Skills Summary */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-8 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.light}
          >
            Professional Skills Summary
          </motion.h2>
          
          <motion.div
            variants={staggerContainer.light}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-navy mt-6 mb-4 text-center">Operational</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
              {[
                'Operational Leadership',
                'Health & Safety Compliance',
                'Crisis Management',
                'Risk Assessment',
                'Emergency Response Coordination',
                'Training & Mentorship',
                'Staff Development & Mentoring',
              ].map((skill, index) => (
                <motion.div key={index} variants={fadeUp.light}>
                  <Badge
                    variant="secondary"
                    className="bg-navy text-white px-6 py-3 text-base hover:bg-navy/90"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-navy mt-6 mb-4 text-center">Strategic</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
              {[
                'Strategic Planning',
                'Client Relationship Management',
                'Evidence-Based Decision Making',
                'Stakeholder Engagement',
                'Data Analysis & Reporting',
                'Emotional Intelligence',
              ].map((skill, index) => (
                <motion.div key={index} variants={fadeUp.light}>
                  <Badge
                    variant="secondary"
                    className="bg-navy text-white px-6 py-3 text-base hover:bg-navy/90"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-navy mt-6 mb-4 text-center">Protective Security</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                'Counter Terrorism Preparedness',
                'Protective Security Planning',
                'Public Safety Legislation (Martyn\'s Law)',
              ].map((skill, index) => (
                <motion.div key={index} variants={fadeUp.light}>
                  <Badge
                    variant="secondary"
                    className="bg-navy text-white px-6 py-3 text-base hover:bg-navy/90"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Operational Readiness */}
      <section className="py-12 sm:py-16 bg-lightgrey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.light}
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-6">
              Operational Readiness
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Fully flexible and accustomed to managing 24/7 operations with rotating shift patterns, ensuring consistent leadership coverage and resilience across day and night cycles.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
              Experienced in embedding counter terrorism readiness into standard operating procedures, including venue lockdowns, dynamic risk assessment, and liaison with emergency services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-navy text-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp.light}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-6">
            Explore My Work
          </h2>
          <p className="text-base sm:text-lg mb-8 leading-relaxed">
            Explore my project portfolio to see how I apply counter terrorism awareness, crowd safety leadership, and risk-based decision-making across live and civic environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/portfolio" variant="secondary" className="bg-white text-navy hover:bg-gray-100">
              View Portfolio
            </Button>
            <a 
              href="/cv.pdf" 
              download
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-block text-center bg-white text-navy border-2 border-white hover:bg-gray-100"
              onClick={(e) => {
                // If CV file doesn't exist, prevent default and show message
                e.preventDefault()
                alert('CV download will be available soon. Please contact me for a copy.')
              }}
            >
              Download Full CV
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

