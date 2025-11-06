'use client'

import HeroBanner from '@/components/HeroBanner'
import Button from '@/components/Button'
import { Card, CardContent } from '@/components/ui/card'
import { motion, useScroll } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animationVariants'
import { useRef } from 'react'

export default function Testimonials() {
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
      {/* Hero Banner */}
      <section className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 md:h-[934px] md:max-w-[1800px] md:mx-auto">
          <HeroBanner
            title="Professional References & Endorsements"
            description="Peer and client feedback showcasing leadership in safety operations, crisis management, and counter-terrorism readiness — highlighting trust, collaboration, and professional integrity across high-profile environments."
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.moderate}
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-6 text-center">
              Valued Feedback
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Throughout my career, I've worked alongside exceptional colleagues, clients, and partner agencies who have provided valuable insight into my leadership style, operational judgement, and commitment to safety.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              These endorsements reflect the professional relationships and trust developed across events, civic venues, and educational environments. Testimonials will be populated following ongoing engagements and forthcoming interview processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Cards */}
      <section className="py-24 md:py-32 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={staggerContainer.moderate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Testimonial Card 1 - Leadership & Calmness */}
            <motion.div variants={fadeUp.moderate}>
              <Card 
                className="border-l-4 border-l-red border-t-4 border-t-red shadow-lg h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                role="article"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <motion.svg 
                      className="w-12 h-12 text-red/30 mb-4" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      aria-label="testimonial quote mark"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </motion.svg>
                  </div>
                  <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
                    "David consistently demonstrates composure under pressure, maintaining clarity and control even during large-scale incidents."
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-navy">Name</p>
                    <p className="text-gray-600">Title</p>
                    <p className="text-gray-500 text-sm">Organization</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial Card 2 - Counter-Terrorism & Preparedness */}
            <motion.div variants={fadeUp.moderate}>
              <Card 
                className="border-l-4 border-l-red border-t-4 border-t-red shadow-lg h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                role="article"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <motion.svg 
                      className="w-12 h-12 text-red/30 mb-4" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      aria-label="testimonial quote mark"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </motion.svg>
                  </div>
                  <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
                    "His ability to integrate counter-terrorism principles into event and campus operations ensures compliance and readiness at all times."
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-navy">Name</p>
                    <p className="text-gray-600">Title</p>
                    <p className="text-gray-500 text-sm">Organization</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial Card 3 - Mentoring & Team Development */}
            <motion.div variants={fadeUp.moderate}>
              <Card 
                className="border-l-4 border-l-red border-t-4 border-t-red shadow-lg h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                role="article"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <motion.svg 
                      className="w-12 h-12 text-red/30 mb-4" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      aria-label="testimonial quote mark"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </motion.svg>
                  </div>
                  <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
                    "David builds confidence within his teams through coaching, empathy, and clear communication."
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-navy">Name</p>
                    <p className="text-gray-600">Title</p>
                    <p className="text-gray-500 text-sm">Organization</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial Card 4 - Stakeholder Engagement */}
            <motion.div variants={fadeUp.moderate}>
              <Card 
                className="border-l-4 border-l-red border-t-4 border-t-red shadow-lg h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                role="article"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <motion.svg 
                      className="w-12 h-12 text-red/30 mb-4" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      aria-label="testimonial quote mark"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </motion.svg>
                  </div>
                  <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
                    "He works collaboratively with local authorities, emergency services, and venue partners to deliver unified, secure operations."
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-navy">Name</p>
                    <p className="text-gray-600">Title</p>
                    <p className="text-gray-500 text-sm">Organization</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial Card 5 - Innovation & Improvement */}
            <motion.div variants={fadeUp.moderate}>
              <Card 
                className="border-l-4 border-l-red border-t-4 border-t-red shadow-lg h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                role="article"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <motion.svg 
                      className="w-12 h-12 text-red/30 mb-4" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      aria-label="testimonial quote mark"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </motion.svg>
                  </div>
                  <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
                    "David's data-driven approach to operational planning, including the design of an AI-assisted management platform, represents the future of crowd and campus safety."
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-navy">Name</p>
                    <p className="text-gray-600">Title</p>
                    <p className="text-gray-500 text-sm">Organization</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.moderate}
            className="bg-lightgrey p-4 sm:p-6 rounded-lg border-l-4 border-red"
          >
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              <strong className="text-navy">Note:</strong> Formal written references and detailed testimonials are available upon request. This page will be updated with verified endorsements following upcoming professional interviews and collaborations. For immediate reference verification or additional details, please contact me directly.
            </p>
            <div className="flex justify-center mt-6">
              <Button 
                href="/contact" 
                variant="secondary" 
                className="border-red text-red hover:bg-red hover:text-white"
              >
                Request Professional Reference
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 bg-navy text-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp.moderate}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-6">
            Interested in Learning More?
          </h2>
          <p className="text-base sm:text-lg mb-8 leading-relaxed">
            I'd be delighted to discuss my experience, provide references, or answer questions regarding my approach to safety leadership, counter-terrorism preparedness, and team development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" className="bg-white text-navy hover:bg-gray-100">
              Contact Me
            </Button>
            <Button href="/experience" variant="secondary" className="bg-white text-navy hover:bg-gray-100">
              View Experience
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
