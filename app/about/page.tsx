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
    offset: ['start start', 'end end']
  })
  
  const { scrollYProgress: quoteScrollProgress } = useScroll({
    target: quoteRef,
    offset: ['start end', 'end start']
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
      <div className="sticky top-16 md:top-16 z-10 py-3 sm:py-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-navy">About David Capener</h1>
        </div>
      </div>
      {/* Header Section */}
      <section className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 min-h-screen md:h-[934px] md:max-w-[1800px] md:mx-auto flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-16 md:pb-20">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp.moderate}
          >
            <p className="text-lg sm:text-xl text-gray-700">
              Experienced Security Operations Manager | Level 5 Crowd Safety | MIMMS Certified | IOSH Managing Safely
            </p>
            <p className="text-base sm:text-lg text-gray-600 mt-4">
              Building safer, more inclusive environments across events, campuses, and public spaces.
            </p>
          </motion.div>
          
          {/* Professional Headshot Placeholder */}
          <motion.div 
            className="max-w-xs mx-auto mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={zoomIn.moderate}
          >
            <div className="relative w-full aspect-square rounded-full overflow-hidden bg-gray-300 border-4 border-white shadow-lg">
              <Image
                src="/images/headshot.jpg"
                alt="David Capener"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      </section>

      {/* Professional Story */}
      <section className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 min-h-screen md:h-[934px] md:max-w-[1800px] md:mx-auto flex flex-col justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-16 md:pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-6">
              My Professional Story
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                Over the past twelve years, I have built a career defined by precision, accountability, and leadership in crowd management and security operations. From major festivals to international broadcasts, I have successfully led multi-disciplinary teams to deliver safe, compliant, and professional environments for staff, students, artists, and audiences alike.
              </p>
              <p>
                I am committed to fostering safe, inclusive, and welcoming environments that allow people to thrive — balancing operational control with approachability and empathy. Having led large, high-pressure operations like Eurovision and Creamfields, I bring proven crisis leadership, situational awareness, and adaptability suited to campus and community environments.
              </p>
              <p>
                My journey began on the ground as an event steward and evolved through supervisory, managerial, and strategic positions. Each step has strengthened my understanding of how effective planning, strong leadership, and communication underpin successful security delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      </section>

      {/* Professional Focus & Values */}
      <section className="relative snap-start scroll-mt-24">
        <div className="min-h-screen flex flex-col justify-start">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-6">
              Professional Focus & Values
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              Every successful operation begins with preparation. My leadership philosophy focuses on calm, decisive guidance, clear communication, and professional resilience — ensuring that safety and welfare remain at the forefront of every decision.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              My approach centres on four principles:
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            variants={staggerContainer.moderate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div variants={slideLeft.moderate}>
              <Card className="border-l-4 border-l-red shadow-md">
                <CardContent className="p-4 sm:p-5">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl text-navy mb-2">
                    1. Preparation & Planning
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Every event is only as strong as its planning.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp.moderate}>
              <Card className="border-l-4 border-l-red shadow-md">
                <CardContent className="p-4 sm:p-5">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl text-navy mb-2">
                    2. Leadership & Mentoring
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Calm, decisive guidance builds trust and efficiency.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={slideRight.moderate}>
              <Card className="border-l-4 border-l-red shadow-md">
                <CardContent className="p-4 sm:p-5">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl text-navy mb-2">
                    3. Communication & Collaboration
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Clear, respectful communication ensures safety and professionalism at every level.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp.moderate}>
              <Card className="border-l-4 border-l-red shadow-md">
                <CardContent className="p-4 sm:p-5">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl text-navy mb-2">
                    4. Resilience & Wellbeing
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    I value calm leadership and professional resilience—maintaining composure during complex incidents while supporting the welfare and wellbeing of my team.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          <motion.p 
            className="mt-8 text-base sm:text-lg text-gray-700 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp.moderate}
          >
            These values have guided my work with organisations such as Compact Security, H&A Protection Services, Showsec, G4S, and Liverpool Football Club, where collaboration and integrity remain at the core of every success.
          </motion.p>
        </div>
      </div>
      </section>

      {/* Strengths */}
      <section className="relative snap-start scroll-mt-24">
        <div className="min-h-screen flex flex-col justify-start">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-16 md:pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-6">
              Strengths
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="font-heading font-semibold text-xl sm:text-2xl text-navy mb-4">
                  Operational Expertise
                </h3>
                <ul className="space-y-3 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red mr-3 font-bold">•</span>
                    <span>Strategic leadership in high-pressure settings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red mr-3 font-bold">•</span>
                    <span>Advanced knowledge of crowd dynamics, health & safety law, and risk mitigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red mr-3 font-bold">•</span>
                    <span>Experienced in evidence-based decision-making ensuring proportionate, lawful, and documented responses</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-xl sm:text-2xl text-navy mb-4">
                  People & Team Leadership
                </h3>
                <ul className="space-y-3 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red mr-3 font-bold">•</span>
                    <span>Proven line management experience across multi-tiered teams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red mr-3 font-bold">•</span>
                    <span>Skilled in mentoring, welfare oversight, and performance review</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red mr-3 font-bold">•</span>
                    <span>Strong communicator adept at engaging with diverse stakeholders — from students and staff to emergency services</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-xl sm:text-2xl text-navy mb-4">
                  Innovation & Improvement
                </h3>
                <ul className="space-y-3 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red mr-3 font-bold">•</span>
                    <span>Skilled in analysing incident data to identify trends and preventive measures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red mr-3 font-bold">•</span>
                    <span>Experienced in developing digital tools to enhance operational decision-making</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red mr-3 font-bold">•</span>
                    <span>Proven crisis management experience with a focus on team motivation and wellbeing</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </section>

      {/* Professional Development Area */}
      <section className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 min-h-screen md:h-[934px] md:max-w-[1800px] md:mx-auto flex flex-col justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-16 md:pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-6">
              Professional Development
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              As the security landscape evolves, I am expanding my technical capabilities to align with emerging AI applications in safety management and live monitoring. Alongside my Level 5 qualification, I have a strong interest in progressing through academic and vocational development pathways — including university-led leadership programmes — reflecting my commitment to continuous learning and growth.
            </p>
          </motion.div>
        </div>
      </div>
      </section>

      {/* Commitment to Inclusion */}
      <section className="relative min-h-[869px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 min-h-[869px] md:max-w-[1800px] md:mx-auto flex flex-col justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-16 md:pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-6">
              Commitment to Inclusion
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I believe in leadership that reflects inclusion, equality, and respect. Throughout my career, I've worked in diverse environments and have always prioritised fairness, accessibility, and representation within my teams. I am committed to enhancing workforce diversity and inclusion, ensuring every team member feels valued, supported, and empowered to contribute their best work while representing the diverse communities we serve.
            </p>
          </motion.div>
        </div>
      </div>
      </section>

      {/* Personal Philosophy */}
      <section ref={quoteRef} className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 min-h-screen md:h-[934px] md:max-w-[1800px] md:mx-auto flex flex-col justify-center bg-navy relative overflow-hidden -mt-16 md:-mt-20">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y: quoteParallaxY, willChange: 'transform' }}
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
        </motion.div>
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 md:pt-12 pb-16 md:pb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp.moderate}
        >
          <p className="text-white text-base sm:text-lg mb-6 text-center">
            My leadership philosophy is best captured in a single belief:
          </p>
          <blockquote className="text-white text-xl sm:text-2xl md:text-3xl font-heading font-semibold italic leading-relaxed">
            "Security is not about control — it's about foresight, collaboration, and calm leadership that inspires confidence in every circumstance."
          </blockquote>
        </motion.div>
      </div>
      </section>
    </div>
  )
}

