import Image from 'next/image'
import Button from '@/components/Button'

export default function About() {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
              About David Capener
            </h1>
            <p className="text-xl text-gray-700">
              Experienced Security Operations Manager | Level 5 Crowd Safety | MIMMS Certified
            </p>
          </div>
          
          {/* Professional Headshot Placeholder */}
          <div className="max-w-xs mx-auto mb-8">
            <div className="relative w-full aspect-square rounded-full overflow-hidden bg-gray-300 border-4 border-white shadow-lg">
              <Image
                src="/images/headshot.jpg"
                alt="David Capener"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Professional Focus & Values */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-navy mb-6">
            Professional Focus & Values
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I specialise in crowd safety management, operational oversight, and emergency response planning. My leadership philosophy centres on three principles:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red">
              <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                1. Preparation
              </h3>
              <p className="text-gray-700">
                Every event is only as strong as its planning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red">
              <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                2. Leadership
              </h3>
              <p className="text-gray-700">
                Calm, decisive guidance builds trust and efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red">
              <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                3. Communication
              </h3>
              <p className="text-gray-700">
                Clear, respectful communication ensures safety and professionalism at every level.
              </p>
            </div>
          </div>
          <p className="mt-8 text-lg text-gray-700 leading-relaxed">
            These values have guided my work with organisations such as Compact Security, H&A Protection Services, Showsec, G4S, and Liverpool Football Club, where collaboration and integrity remain at the core of every success.
          </p>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Professional Development Area */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-navy mb-6">
            Professional Development
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I continuously seek to enhance my understanding of data-driven decision-making in security environments. As the industry evolves, I am expanding my technical capabilities to align with emerging AI applications in safety management and live event monitoring.
          </p>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-white text-2xl md:text-3xl font-heading font-semibold italic leading-relaxed">
            "Security is not about control—it's about foresight, collaboration, and calm leadership in every circumstance."
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        </div>
      </section>
    </div>
  )
}

