'use client'

import Image from 'next/image'
import Button from '@/components/Button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, zoomIn, slideLeft, slideRight } from '@/lib/animationVariants'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const quoteRef = useRef<HTMLElement>(null)
  const { scrollYProgress: quoteScrollProgress } = useScroll({
    target: quoteRef,
    offset: ['start end', 'end start']
  })
  const quoteParallaxY = useTransform(quoteScrollProgress, [0, 1], ['0%', '25%'])

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.moderate}
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
              About David Capener
            </h1>
            <p className="text-xl text-gray-700">
              Experienced Security Operations Manager | Level 5 Crowd Safety | MIMMS Certified
            </p>
          </motion.div>
          
          {/* Professional Headshot Placeholder */}
          <motion.div 
            className="max-w-xs mx-auto mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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
      </section>

      {/* Professional Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-3xl text-navy mb-6">
              My Professional Story
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Over the past twelve years, I have built a career defined by precision, accountability, and leadership in crowd management and security operations. From major festivals to international broadcasts, I have successfully led multi-disciplinary teams to deliver safe, compliant, and professional environments for staff, artists, and audiences alike.
              </p>
              <p>
                My journey began on the ground as an event steward and evolved through supervisory, managerial, and strategic positions. Each step has strengthened my understanding of how effective planning, strong leadership, and communication underpin successful security delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Focus & Values */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-3xl text-navy mb-6">
              Professional Focus & Values
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I specialise in crowd safety management, operational oversight, and emergency response planning. My leadership philosophy centres on three principles:
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer.moderate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={slideLeft.moderate}>
              <Card className="border-l-4 border-l-red shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                    1. Preparation
                  </h3>
                  <p className="text-gray-700">
                    Every event is only as strong as its planning.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp.moderate}>
              <Card className="border-l-4 border-l-red shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                    2. Leadership
                  </h3>
                  <p className="text-gray-700">
                    Calm, decisive guidance builds trust and efficiency.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={slideRight.moderate}>
              <Card className="border-l-4 border-l-red shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                    3. Communication
                  </h3>
                  <p className="text-gray-700">
                    Clear, respectful communication ensures safety and professionalism at every level.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          <motion.p 
            className="mt-8 text-lg text-gray-700 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.moderate}
          >
            These values have guided my work with organisations such as Compact Security, H&A Protection Services, Showsec, G4S, and Liverpool Football Club, where collaboration and integrity remain at the core of every success.
          </motion.p>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-3xl text-navy mb-6">
              Strengths
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Strategic operational leadership in fast-paced, high-pressure settings</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Expert knowledge of health and safety law, crowd dynamics, and risk mitigation</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Exceptional communication and stakeholder engagement</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Proven crisis management experience and team motivation</span>
              </li>
              <li className="flex items-start">
                <span className="text-red mr-3 font-bold">•</span>
                <span>Skilled in compliance, training, and performance oversight</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Professional Development Area */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-3xl text-navy mb-6">
              Professional Development
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I continuously seek to enhance my understanding of data-driven decision-making in security environments. As the industry evolves, I am expanding my technical capabilities to align with emerging AI applications in safety management and live event monitoring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section ref={quoteRef} className="py-24 bg-navy relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y: quoteParallaxY, willChange: 'transform' }}
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
        </motion.div>
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp.moderate}
        >
          <blockquote className="text-white text-2xl md:text-3xl font-heading font-semibold italic leading-relaxed">
            "Security is not about control—it's about foresight, collaboration, and calm leadership in every circumstance."
          </blockquote>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-3xl text-navy mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I am passionate about contributing to safe, welcoming, and well-organised environments.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              If you're seeking an experienced professional who combines operational excellence with a forward-thinking approach to crowd safety, let's connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Contact Me
              </Button>
              <Button href="/portfolio" variant="secondary">
                View My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

