import Button from '@/components/Button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Experience & Certifications | David Capener',
  description: 'View career timeline, qualifications, and professional experience spanning Compact Security, H&A Protection Services, and major UK event venues.',
  keywords: 'Security Career, Crowd Safety Qualifications, MIMMS Certification, Level 5 Crowd Safety, Security Experience',
}

export default function Experience() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Over a decade of leadership across the UK's most prestigious events, delivering operational excellence, safety compliance, and team performance in demanding live environments.
          </p>
        </div>
      </section>

      {/* Current Role */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pl-8 border-l-4 border-red">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-red rounded-full"></div>
            <div className="mb-2">
              <span className="text-sm font-semibold text-red bg-red-50 px-3 py-1 rounded-full">
                Current Role
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl text-navy mb-2">
              Senior Operations Manager – Events & Festivals
            </h2>
            <p className="text-xl text-gray-700 mb-4 font-semibold">
              Compact Security Services | September 2023 – Present
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As Senior Operations Manager, I oversee the full spectrum of event and festival security operations, from pre-event planning to live delivery and post-event evaluation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">
              My responsibilities include:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
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
                <span>Managing crisis and emergency response procedures under the MIMMS framework</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              I take pride in fostering a culture of professionalism and accountability, ensuring that every member of the team upholds the highest operational and safety standards.
            </p>
          </div>
        </div>
      </section>

      {/* Previous Role */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pl-8 border-l-4 border-navy">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-navy rounded-full"></div>
            <h2 className="font-heading font-bold text-3xl text-navy mb-2">
              Head of Operations – Events & Festivals
            </h2>
            <p className="text-xl text-gray-700 mb-4 font-semibold">
              H&A Protection Services Ltd | April 2018 – September 2023
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In this role, I was responsible for overseeing large-scale operations across multiple venues and local authority contracts. My work combined strategic planning, team development, and direct event management.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">
              Key achievements include:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
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
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              During my tenure, I successfully enhanced operational efficiency and client satisfaction, contributing to measurable business growth and sustained client partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Early Career */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pl-8 border-l-4 border-navy">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-navy rounded-full"></div>
            <h2 className="font-heading font-bold text-3xl text-navy mb-2">
              Early Career
            </h2>
            <p className="text-xl text-gray-700 mb-4 font-semibold">
              Showsec International | G4S Events | Liverpool Football Club | 2012 – 2018
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My early experience in security management provided a strong foundation in event logistics, crowd control, and safety coordination.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I progressed from Safety Steward to Senior Supervisor and Head of Security, overseeing operations for high-profile events such as:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
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
            <p className="text-lg text-gray-700 leading-relaxed">
              These formative years instilled the principles of calm leadership, decisive action, and accountability that define my approach today.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-4xl text-navy text-center mb-12">
            Certifications & Qualifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Level 5 Crowd Safety Management',
              'Level 4 Crowd Safety Officer',
              'Major Incident Medical Management & Support (MIMMS)',
              'IOSH Managing Safely',
              'NVQ Level 2 & 3 Spectator Safety',
              'SIA Licensed Door Supervisor',
            ].map((cert, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-red shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-navy">
                    {cert}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Skills Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-4xl text-navy text-center mb-12">
            Professional Skills Summary
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Operational Leadership',
              'Health & Safety Compliance',
              'Crisis Management',
              'Risk Assessment',
              'Training & Mentorship',
              'Client Relationship Management',
              'Strategic Planning',
              'Emergency Response Coordination',
            ].map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-navy text-white px-6 py-3 text-base hover:bg-navy/90"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">
            Explore My Work
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Discover detailed case studies and project highlights showcasing my operational expertise and leadership.
          </p>
          <Button href="/portfolio" variant="secondary" className="bg-white text-navy hover:bg-gray-100">
            View Portfolio
          </Button>
        </div>
      </section>
    </div>
  )
}

