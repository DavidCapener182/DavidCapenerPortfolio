'use client'

import ContactForm from '@/components/ContactForm'
import Button from '@/components/Button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animationVariants'

export default function Contact() {
  return (
    <motion.div 
      className="pt-16"
      initial="hidden"
      animate="visible"
      variants={fadeIn.minimal}
    >
      {/* Header */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Let's collaborate to create safer, more efficient, and people-focused events.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-navy text-center mb-8">
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Direct Contact Information */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-navy text-center mb-12">
            Direct Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center shadow-lg">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                  Email
                </h3>
                <a
                  href="mailto:Capener182@googlemail.com"
                  className="text-red hover:text-red-700 transition-colors break-all"
                >
                  Capener182@googlemail.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                  LinkedIn
                </h3>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red hover:text-red-700 transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">
            Available for Opportunities
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Available for security consultancy, event planning, and leadership opportunities.
          </p>
          <p className="text-lg mb-8 leading-relaxed">
            Whether you're planning a major event, need operational expertise, or are looking for a dedicated security professional, I'm here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/portfolio" variant="secondary" className="bg-white text-navy hover:bg-gray-100">
              View My Work
            </Button>
            <Button href="/experience" variant="secondary" className="bg-white text-navy hover:bg-gray-100">
              See My Experience
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

