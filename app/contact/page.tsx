'use client'

import Button from '@/components/Button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion, useScroll } from 'framer-motion'
import { fadeUp, staggerContainer, slideLeft, slideRight } from '@/lib/animationVariants'
import { useRef } from 'react'

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress: pageScrollProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <motion.div 
      ref={containerRef}
      className="pt-16 relative"
      initial="hidden"
      animate="visible"
    >
      {/* Vertical Progress Indicator */}
      <div className="fixed right-0 top-16 bottom-0 w-1 bg-gray-200 z-30">
        <motion.div
          className="w-full bg-red origin-top"
          style={{ scaleY: pageScrollProgress, height: '100%' }}
        />
      </div>
      {/* Header */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.moderate}
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
              Why Hire David Capener?
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Proven leadership, strategic thinking, and a proactive commitment to safety, inclusion, and counter-terrorism readiness — building environments where people can work, study, and thrive securely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Value Propositions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer.full}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Card 1 */}
            <motion.div variants={slideLeft.moderate}>
              <Card className="border-l-4 border-l-red shadow-lg h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6 hover:scale-105 transition-transform">🎯</div>
                  <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                    Direct Leadership Experience
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Over a decade of managing multi-tiered security teams in high-pressure environments. Proven track record in staff welfare, development, and motivation—the essential foundations for effective campus support leadership and protective security coordination in public spaces.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp.full}>
              <Card className="border-l-4 border-l-red shadow-lg h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6 hover:scale-105 transition-transform">🔍</div>
                  <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                    Evidence-Based Approach
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Skilled in data analysis, risk assessment, and evidence-based decision-making. I don't rely on intuition—I gather information, analyze trends, and implement measured, proportionate responses that protect both people and processes, ensuring proportionate responses that align with Martyn's Law, national safety frameworks, and organisational policy.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={slideRight.moderate}>
              <Card className="border-l-4 border-l-red shadow-lg h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6 hover:scale-105 transition-transform">🤝</div>
                  <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                    Communication & Adaptability
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Exceptional ability to communicate with diverse stakeholders—students, staff, emergency services, contractors, and senior leadership. I adapt my language and approach to meet each audience's needs while maintaining clarity, authority, and compliance with institutional and public-safety communication standards.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Sets Me Apart */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-4xl text-navy text-center mb-12">
              What Sets Me Apart
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                  💪 Professional Resilience
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  During the Rebellion Festival crisis, I led a full site lockdown protecting 10,000 attendees amid external riots involving over 1,000 people. I maintained calm leadership, clear communication, and staff confidence under extreme pressure—demonstrating the foresight and calm leadership essential to crisis-response management and counter-terrorism preparedness across campus and civic environments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                  👥 Staff Development Focus
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm not just managing operations—I'm developing people. With extensive experience in coaching, mentoring, and performance review, I identify individual capabilities and create tailored development plans that build long-term operational confidence and team cohesion—an approach strengthened by integrating Counter Terrorism Level 6 learning outcomes to raise awareness and preparedness across all staff levels.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                  📊 Data-Driven Innovation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm currently developing an AI-integrated event management platform that provides real-time risk analysis and decision support. This reflects my commitment to using technology and data to enhance situational awareness, emergency coordination, and long-term threat-mitigation planning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                  🌍 Commitment to Inclusion
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Throughout my career, I've prioritized fairness, accessibility, and representation within my teams. I believe leadership should reflect inclusion, equality, and respect—ensuring every member feels valued, supported, and secure — because true safety leadership is inclusive leadership.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Competencies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-4xl text-navy text-center mb-4">
              Key Competencies
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Directly aligned with the Campus Support & Security Team Leader role requirements
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer.moderate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div variants={fadeUp.light} className="bg-navy text-white p-6 rounded-lg">
              <h3 className="font-heading font-semibold text-xl mb-3">✅ Line Management</h3>
              <p className="leading-relaxed opacity-90">Proven experience managing multi-tiered teams, ensuring wellbeing, welfare, development, and motivation</p>
            </motion.div>
            
            <motion.div variants={fadeUp.light} className="bg-navy text-white p-6 rounded-lg">
              <h3 className="font-heading font-semibold text-xl mb-3">✅ Risk Management</h3>
              <p className="leading-relaxed opacity-90">Expert in identifying, analyzing, and managing risk to inform balanced, evidence-based decisions, incorporating counter-terrorism and dynamic risk assessment principles.</p>
            </motion.div>
            
            <motion.div variants={fadeUp.light} className="bg-navy text-white p-6 rounded-lg">
              <h3 className="font-heading font-semibold text-xl mb-3">✅ Analytical Skills</h3>
              <p className="leading-relaxed opacity-90">Skilled in using specialized software to extract, analyze, plan, and report on operational data</p>
            </motion.div>
            
            <motion.div variants={fadeUp.light} className="bg-navy text-white p-6 rounded-lg">
              <h3 className="font-heading font-semibold text-xl mb-3">✅ Communication</h3>
              <p className="leading-relaxed opacity-90">Adaptable language and messaging to meet diverse stakeholder needs—students, staff, emergency services</p>
            </motion.div>
            
            <motion.div variants={fadeUp.light} className="bg-navy text-white p-6 rounded-lg">
              <h3 className="font-heading font-semibold text-xl mb-3">✅ Resilience</h3>
              <p className="leading-relaxed opacity-90">Professional resilience and wellbeing management for oneself and others in complex situations</p>
            </motion.div>
            
            <motion.div variants={fadeUp.light} className="bg-navy text-white p-6 rounded-lg">
              <h3 className="font-heading font-semibold text-xl mb-3">✅ Flexibility</h3>
              <p className="leading-relaxed opacity-90">Fully flexible and accustomed to 24/7 operations with rotating shift patterns</p>
            </motion.div>
            
            <motion.div variants={fadeUp.light} className="bg-navy text-white p-6 rounded-lg md:col-span-2">
              <h3 className="font-heading font-semibold text-xl mb-3">✅ Protective Security & Counter-Terrorism</h3>
              <p className="leading-relaxed opacity-90">Qualified at Level 6 in Counter Terrorism Awareness and Protective Security. Experienced in integrating prevention, preparedness, and response principles into event and campus operations.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ready to Strengthen Your Security Operations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-6">
              Ready to Strengthen Your Security Operations?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              With over a decade of event and campus safety leadership, Counter Terrorism Level 6 training, and proven crisis-response capability, I bring composure, insight, and foresight to every environment I protect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/contact" variant="primary">
                Contact Me
              </Button>
              <Button href="/experience" variant="secondary">
                View Experience
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-4xl text-navy text-center mb-12">
              Professional Credentials
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Level 5 Crowd Safety Management',
                'Level 4 Crowd Safety Officer',
                'Major Incident Medical Management & Support (MIMMS)',
                'IOSH Managing Safely',
                'NVQ Level 2 & 3 Spectator Safety',
                'SIA Licensed Door Supervisor',
              ].map((cred, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-red text-white px-6 py-3 text-base hover:bg-red-700"
                >
                  {cred}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
