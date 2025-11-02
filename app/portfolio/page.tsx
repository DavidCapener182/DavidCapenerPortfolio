import HeroBanner from '@/components/HeroBanner'
import CaseStudy from '@/components/CaseStudy'
import Button from '@/components/Button'
import { Card, CardContent } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | David Capener Security',
  description: 'Explore case studies from Eurovision 2023, Creamfields Festival, Rebellion Festival, and AI-driven event management platform development.',
  keywords: 'Security Case Studies, Event Security Projects, Eurovision Security, Festival Safety Management, AI Security Platform',
}

export default function Portfolio() {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <HeroBanner
        title="Case Studies & Project Highlights"
        description="A selection of key projects demonstrating my leadership, operational strategy, and commitment to safety across complex, high-profile environments."
        imageSrc="/images/portfolio-hero.jpg"
      />

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Case Study 1 - Eurovision */}
          <CaseStudy
            title="Eurovision 2023, Liverpool"
            role="Venue Security Manager | M&S Bank Arena"
            client="BBC / Venue Management"
            duration="Four months planning, one month on-site"
            description="In 2023, I led security operations for the Eurovision Song Contest hosted at Liverpool's M&S Bank Arena. My responsibilities included strategic planning, risk management, and operational coordination across build, show, and de-rig phases. I managed 75 security personnel over a one-month deployment and liaised with BBC and venue representatives to maintain compliance and safety throughout."
            keyOutcomes={[
              'Successful delivery of eight live show days without incident',
              'Streamlined entry and exit protocols for staff and talent',
              'Developed integrated contingency planning with local emergency services',
            ]}
            imageSrc="/images/eurovision-arena.jpg"
            imageAlt="Eurovision 2023 at M&S Bank Arena"
          />

          {/* Case Study 2 - Creamfields */}
          <CaseStudy
            title="Creamfields Festival"
            role="Security Consultant & Operational Lead"
            client="Live Nation (via H&A Protection Services)"
            duration="2013 – Present"
            description="Over the past decade, I have provided strategic oversight and on-the-ground management for Creamfields, one of the UK's largest electronic music festivals. My duties have included managing entry and exit gate operations, leading on-site coordination of security teams, overseeing multiple stages and performance zones, and managing the security control room and incident response."
            keyOutcomes={[
              'Improved ingress and egress flow, reducing crowd congestion incidents',
              'Enhanced coordination between site teams and medical support',
              'Contributed to long-term operational safety planning for future events',
            ]}
            imageSrc="/images/creamfields-festival.jpg"
            imageAlt="Creamfields Festival"
          />

          {/* Case Study 3 - Rebellion Festival */}
          <CaseStudy
            title="Rebellion Festival, Blackpool"
            role="Site Security Manager | Crisis Lead"
            client="Rebellion Festival Organisers"
            description="During the Rebellion Festival, external riots involving over 1,000 people developed in close proximity to the venue. With over 10,000 attendees inside, I coordinated an immediate lockdown procedure to secure the site."
            keyOutcomes={[
              'Implemented rapid lockdown and communication plan',
              'Maintained crowd calm and compliance during a critical incident',
              'Coordinated with police and emergency services to ensure site integrity',
              'The lockdown was executed with no casualties and minimal disruption to the event schedule, earning commendation from event organisers for decisive and calm leadership',
            ]}
            imageSrc="/images/rebellion-festival.jpg"
            imageAlt="Rebellion Festival, Blackpool"
          />

          {/* Case Study 4 - AI Platform */}
          <CaseStudy
            title="AI-Integrated Event Management Platform"
            role="Creator & Developer"
            description="I am the creator of an innovative event management platform designed to integrate Martyn's Law principles into a dynamic, AI-driven operational system. This software provides real-time guidance to control rooms during live events—whether concerts, festivals, or sports matches—by generating data-led prompts, risk assessments, and escalation protocols."
            keyOutcomes={[
              'AI-assisted decision support for incident management',
              'Integration with existing venue control systems',
              "Compliance mapping for Martyn's Law and other safety frameworks",
              'Projected Launch: 2026 (Post-Testing Phase)',
            ]}
            imageSrc="/images/ai-platform-mockup.png"
            imageAlt="AI Event Management Platform"
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-4xl text-navy text-center mb-12">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholder gallery images */}
            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-64 bg-gray-300">
                <img
                  src="/images/gallery-1.jpg"
                  alt="Event gallery"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Major Event Operations</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-64 bg-gray-300">
                <img
                  src="/images/gallery-2.jpg"
                  alt="Event gallery"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Team Leadership</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-64 bg-gray-300">
                <img
                  src="/images/gallery-3.jpg"
                  alt="Event gallery"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Control Room Operations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">
            Commitment to Excellence
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Every project I undertake is driven by one core objective: to ensure that every individual—staff, performer, or spectator—experiences safety, security, and confidence.
          </p>
          <p className="text-lg mb-8 leading-relaxed">
            My work combines strategic foresight with operational experience, ensuring that every event, no matter how complex, runs safely and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/experience" variant="secondary" className="bg-white text-navy hover:bg-gray-100">
              View Experience
            </Button>
            <Button href="/contact" variant="primary" className="bg-red hover:bg-red-700">
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

