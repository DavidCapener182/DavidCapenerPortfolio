'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeUp, staggerContainer, slideLeft, slideRight } from '@/lib/animationVariants'
import { useRef, PropsWithChildren } from 'react'

function StickySection({
  bg = 'bg-white',
  children,
}: PropsWithChildren<{ bg?: string }>) {
  return (
    <section className="relative snap-start h-[940px]">
      <div className="sticky top-16 h-[940px]">
        <div className={`h-full ${bg}`}>
          <div className="mx-auto h-full max-w-[1800px] w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function WhyHireMe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.85])

  return (
    <motion.div
      ref={containerRef}
      className="relative snap-y snap-mandatory"
      initial="hidden"
      animate="visible"
    >
      {/* Vertical Progress Indicator */}
      <div className="hidden md:block fixed right-0 top-16 bottom-0 w-1 bg-gray-200 z-30">
        <motion.div
          className="w-full bg-red origin-top"
          style={{ scaleY: scrollYProgress, height: '100%' }}
        />
      </div>

      {/* ===== HEADER ===== */}
      <StickySection bg="bg-lightgrey">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp.moderate}
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-navy mb-6">
              Why Hire David Capener?
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Proven leadership, strategic thinking, and a proactive commitment to safety, inclusion, and counter-terrorism readiness — building environments where people can work, study, and thrive securely.
            </p>
          </motion.div>
        </div>
      </StickySection>

      {/* ===== CORE VALUE PROPOSITIONS ===== */}
      <StickySection bg="bg-white">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerContainer.full}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={slideLeft.moderate}>
            <Card className="border-l-4 border-red shadow-lg h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                  Direct Leadership Experience
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Over a decade managing multi-tiered security teams in high-pressure environments. Proven track record in staff welfare, development, and motivation — essential foundations for effective leadership and protective security coordination.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp.full}>
            <Card className="border-l-4 border-red shadow-lg h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-6">🔍</div>
                <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                  Evidence-Based Approach
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Skilled in data analysis, risk assessment, and measured decision-making. Every operational plan is grounded in factual insight — aligning with Martyn’s Law, safety frameworks, and organisational policy.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={slideRight.moderate}>
            <Card className="border-l-4 border-red shadow-lg h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-6">🤝</div>
                <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                  Communication & Adaptability
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Exceptional communicator across diverse audiences — ensuring clarity, authority, and confidence in high-pressure situations.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </StickySection>

      {/* ===== WHAT SETS ME APART ===== */}
      <StickySection bg="bg-gray-50">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp.moderate}
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy text-center mb-8">
            What Sets Me Apart
          </h2>

          <div className="space-y-6">
            {[
              {
                title: '💪 Professional Resilience',
                desc: 'During the Rebellion Festival crisis, I led a full site lockdown protecting 10,000 attendees amid external unrest. I maintained calm leadership, clarity, and composure under pressure — demonstrating the foresight essential for crisis management and counter-terrorism readiness.',
              },
              {
                title: '👥 Staff Development Focus',
                desc: 'I don’t just manage operations — I develop people. I build capable, motivated teams prepared to lead with confidence and awareness at every level.',
              },
              {
                title: '📊 Data-Driven Innovation',
                desc: 'Currently developing an AI-integrated event management platform providing real-time risk analysis and decision support — advancing operational intelligence and emergency coordination.',
              },
              {
                title: '🌍 Commitment to Inclusion',
                desc: 'Leadership built on fairness, accessibility, and representation. Every team member is supported, valued, and included — because true safety leadership is inclusive leadership.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </StickySection>

      {/* ===== KEY COMPETENCIES ===== */}
      <StickySection bg="bg-white">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp.moderate}
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-6">
            Key Competencies
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            Directly aligned with the Campus Support & Security Team Leader role requirements.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left"
            variants={staggerContainer.moderate}
          >
            {[
              ['✅ Line Management', 'Experienced in managing multi-tiered teams with strong welfare and motivation focus.'],
              ['✅ Risk Management', 'Expert in identifying, analysing, and mitigating risk through dynamic assessment and protective planning.'],
              ['✅ Analytical Skills', 'Adept at extracting and analysing operational data to inform strategic and tactical decisions.'],
              ['✅ Communication', 'Experienced in briefing senior management and multi-agency partners effectively.'],
              ['✅ Resilience', 'Maintains composure and wellbeing for self and teams during complex operations.'],
              ['✅ Flexibility', 'Accustomed to managing 24/7 operational environments with adaptable leadership.'],
              ['✅ Protective Security & Counter-Terrorism', 'Qualified to Level 6 in Counter-Terrorism and Protective Security, integrating prevention, preparedness, and response.'],
            ].map(([title, text], i) => (
              <motion.div
                key={i}
                variants={fadeUp.light}
                className={`bg-navy text-white p-6 rounded-lg ${i === 6 ? 'md:col-span-2' : ''}`}
              >
                <h3 className="font-heading font-semibold text-xl mb-2">{title}</h3>
                <p className="opacity-90 text-base">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </StickySection>

      {/* ===== PROFESSIONAL CREDENTIALS ===== */}
      <StickySection bg="bg-white">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp.moderate}
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-10">
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
            ].map((cred, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-red text-white px-6 py-3 text-base hover:bg-red-700"
              >
                {cred}
              </Badge>
            ))}
          </div>
        </motion.div>
      </StickySection>

      {/* ===== FINAL CALL TO ACTION ===== */}
      <section className="relative snap-start h-[940px] overflow-hidden">
        <div className="sticky top-16 h-[940px] w-full overflow-hidden">
          <motion.img
            src="/images/final-hero.jpg" // Save your chosen final image here
            alt="Event operations background"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
            style={{ y, opacity, willChange: 'transform, opacity' }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <motion.h2
              className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Any Questions?
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Thank you for the opportunity to discuss my experience.
            </motion.p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}