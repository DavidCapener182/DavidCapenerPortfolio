import Button from '@/components/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials | David Capener Security Operations',
  description: 'Read testimonials from event organizers and industry professionals highlighting David Capener\'s expertise in crowd safety and security operations.',
  keywords: 'Security Testimonials, Client Feedback, Professional References, Event Security Reviews',
}

export default function Testimonials() {
  const testimonials = [
    {
      quote: "David consistently demonstrates professionalism, leadership, and a calm approach under pressure — an asset to any event.",
      author: "Event Organiser",
      company: "Major UK Festival",
    },
    {
      quote: "His ability to manage complex security operations while maintaining positive client relations is second to none.",
      author: "Venue Manager",
      company: "M&S Bank Arena",
    },
    {
      quote: "David's strategic thinking and operational expertise have been instrumental in ensuring safe and successful events year after year.",
      author: "Security Director",
      company: "Live Nation",
    },
    {
      quote: "Working with David brings confidence and peace of mind. His attention to detail and crisis management skills are exceptional.",
      author: "Client Representative",
      company: "Private Event Management",
    },
  ]

  const organizations = [
    { name: 'Liverpool FC', logo: '/images/logos/liverpool-fc.png' },
    { name: 'G4S', logo: '/images/logos/g4s.png' },
    { name: 'BBC', logo: '/images/logos/bbc.png' },
    { name: 'H&A Protection', logo: '/images/logos/ha-protection.png' },
    { name: 'Compact Security', logo: '/images/logos/compact-security.png' },
  ]

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
            Testimonials
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Trust and credibility from clients, colleagues, and partners across the industry.
          </p>
        </div>
      </section>

      <Separator />

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-red hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <svg
                    className="w-12 h-12 text-red opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold text-navy">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Organization Logos */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-4xl text-navy text-center mb-12">
            Trusted Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {organizations.map((org, index) => (
              <Card
                key={index}
                className="flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="text-center pt-6">
                  <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center mb-2">
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600 font-semibold">{org.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Let's collaborate to create safer, more efficient, and people-focused events.
          </p>
          <Button href="/contact" variant="secondary" className="bg-white text-navy hover:bg-gray-100">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  )
}

