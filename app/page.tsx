'use client'

import HeroBanner from '@/components/HeroBanner'
import AchievementCard from '@/components/AchievementCard'
import Button from '@/components/Button'
import { UserGroupIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeUp, staggerContainer, zoomIn } from '@/lib/animationVariants'
import { useRef } from 'react'
export default function Home() {
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
  const quoteParallaxY = useTransform(quoteScrollProgress, [0, 1], ['0%', '30%'])

  return (
    <div ref={containerRef} className="pt-16 relative">
      {/* Vertical Progress Indicator */}
      <div className="hidden md:block fixed right-0 top-16 bottom-0 w-1 bg-gray-200 z-30">
        <motion.div
          className="w-full bg-red origin-top"
          style={{ scaleY: pageScrollProgress, height: '100%' }}
        />
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 md:h-[934px] md:max-w-[1800px] md:mx-auto">
          <HeroBanner
            title="David Capener — Security Operations & Crowd Safety Leader"
            subtitle="Protecting People. Building Confidence. Leading Teams with Precision and Integrity."
            description="Dedicated to creating safer, more inclusive environments across events, campuses, and public venues — integrating counter terrorism awareness and protective security principles into every operation."
          />
        </div>
      </section>

      {/* ===== PROFESSIONAL OVERVIEW ===== */}
      <section className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 md:h-[934px] md:max-w-[1800px] md:mx-auto flex flex-col justify-start bg-gradient-to-b from-lightgrey to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, navy 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp.full}
            >
              <div className="inline-block mb-6">
                <div className="w-20 h-1 bg-red mx-auto mb-4"></div>
              </div>

              {/* Overview Text */}
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                I am committed to fostering safe, inclusive, and welcoming environments that allow students, staff, and visitors to thrive — balancing firm operational standards with a people-first approach. My leadership style emphasises calm, evidence-based decision-making and continuous professional development across my teams, with counter terrorism awareness and protective security principles embedded throughout all operational protocols.
              </p>

              {/* Campus Support Integration */}
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                Within higher education environments, I collaborate with Campus Support teams to deliver proactive safety, welfare, and community reassurance. This includes campus-wide patrols, alarm response, CCTV and access control monitoring, car park management, and welfare support across halls and teaching sites. Working alongside the Campus Police Officer, welfare teams, and emergency partners, I help ensure a safe, inclusive, and responsive university community — supporting both wellbeing and security across all settings.
              </p>
            </motion.div>

            {/* Credentials */}
            <motion.p
              className="text-center text-gray-600 mb-8 mt-8 text-sm sm:text-base px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp.moderate}
            >
              Fully qualified with industry-recognised certifications including Counter Terrorism Level 6 (Protective Security), ensuring compliance, professional accountability, and continual improvement.
            </motion.p>

            {/* Qualification Badges */}
            <motion.div
              className="mt-8 sm:mt-12 flex justify-center items-center flex-wrap gap-4 sm:gap-6"
              variants={staggerContainer.full}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                { title: 'Level 5', desc: 'Crowd Safety' },
                { title: 'Level 6', desc: 'Counter Terrorism' },
                { title: 'MIMMS', desc: 'Certified' },
                { title: 'IOSH', desc: 'Managing Safely' },
                { title: 'Level 3', desc: 'Safeguarding Everyone' },
                { title: 'PREVENT & Act Security' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-xl px-6 py-4 shadow-lg border-2 border-red/20 hover:border-red transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 min-w-[160px] text-center"
                  variants={zoomIn.full}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-navy mb-1">{item.title}</div>
                  {item.desc && (
                    <div className="text-xs sm:text-sm text-gray-600 font-semibold">{item.desc}</div>
                  )}
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== KEY ACHIEVEMENTS (First Set) ===== */}
      <section id="achievements" className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 md:h-[934px] md:max-w-[1800px] md:mx-auto flex flex-col bg-white">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
            <motion.div
              className="text-center mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp.full}
            >
              <h2 className="font-heading font-bold text-4xl text-navy mb-4">Key Achievements</h2>
              <div className="w-24 h-1 bg-red mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              <AchievementCard
                title="Eurovision 2023, Liverpool"
                subtitle="Full venue management and live broadcast security — delivered with zero major incidents."
                description="Delivered full venue security management at the M&S Bank Arena, coordinating 75 staff across a one-month build and eight live show days in partnership with the BBC and arena management."
                imageSrc="/images/eurovision-arena.jpg"
              />
              <AchievementCard
                title="Britain's Got Talent, Blackpool"
                subtitle="Head of Security for ITV's flagship talent show at Blackpool Winter Gardens."
                description="Led venue security operations for ITV's Britain's Got Talent at Blackpool Winter Gardens, managing venue, talent, and judges’ security teams for seamless production."
                imageSrc="/images/bgt-blackpool.jpg"
              />
              <AchievementCard
                title="2019 LFC European Cup Parade, Liverpool"
                subtitle="Led security operations for Liverpool's historic victory parade with LFC and Liverpool City Council."
                description="Managed operations ensuring safe movement of hundreds of thousands of celebrants across the city centre, in coordination with Liverpool FC and Liverpool City Council."
                imageSrc="/images/liverpool-parade.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY ACHIEVEMENTS (Second Set) ===== */}
      <section className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 md:h-[934px] md:max-w-[1800px] md:mx-auto flex flex-col bg-white">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
            <motion.div
              className="text-center mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp.full}
            >
              <h2 className="font-heading font-bold text-4xl text-navy mb-4">Key Achievements</h2>
              <div className="w-24 h-1 bg-red mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              <AchievementCard
                title="Creamfields Festival (2013–Present)"
                subtitle="Streamlined access operations and multi-agency coordination improving crowd efficiency."
                description="Provided long-term consultancy and operational leadership, managing gate operations, stage security, and control room command to ensure safe, efficient crowd movement across a decade of events."
                imageSrc="/images/creamfields-festival.jpg"
              />
              <AchievementCard
                title="Rebellion Festival, Blackpool"
                subtitle="Crisis-managed external riots through lockdown protocols protecting 10,000 attendees."
                description="Implemented lockdown procedures protecting 10,000 attendees amid unrest, ensuring no casualties and minimal disruption through calm leadership and rapid decision-making."
                imageSrc="/images/rebellion-festival.jpg"
              />
              <AchievementCard
                title="InCommand"
                subtitle="Event management platform with integrated AI, aligned with Martyn's Law compliance."
                description="Developed InCommand — a bespoke AI-integrated safety management platform supporting real-time decision-making, crisis response, and compliance alignment. Scheduled for deployment in 2026."
                imageSrc="/images/ai-platform-mockup.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES SECTION ===== */}
      <section className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 md:h-[934px] md:max-w-[1800px] md:mx-auto flex flex-col justify-start bg-lightgrey relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
              variants={staggerContainer.full}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >

              {/* Card 1 */}
              <motion.div className="text-center" variants={fadeUp.full}>
                <div className="font-heading text-7xl text-gray-300 mb-4">001</div>
                <h3 className="font-heading font-bold text-2xl uppercase text-navy mb-6">
                  People-Centred Security & Situational Awareness
                </h3>
                <div className="flex justify-center mb-6">
                  <UserGroupIcon className="w-24 h-24 text-red" strokeWidth={0.5} />
                </div>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Security begins with empathy and awareness — understanding the people and places you protect. My approach prioritises positive engagement, clear communication, and proactive observation to prevent issues before they escalate. True situational awareness isn’t about authority — it’s about connection.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  This approach is particularly vital in campus environments, where safeguarding, student welfare, and a visible yet approachable presence underpin a safe and inclusive community.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div className="text-center" variants={fadeUp.full}>
                <div className="font-heading text-7xl text-gray-300 mb-4">002</div>
                <h3 className="font-heading font-bold text-2xl uppercase text-navy mb-6">
                  Leadership, Mentorship & Team Development
                </h3>
                <div className="flex justify-center mb-6">
                  <LightBulbIcon className="w-24 h-24 text-red" strokeWidth={0.5} />
                </div>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Proven operational leadership in high-pressure environments. Calm, decisive guidance that builds trust and efficiency across multidisciplinary teams, promoting motivation and wellbeing under all conditions.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Focused on developing people through mentoring, communication, and clear feedback — ensuring performance and confidence day and night.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div className="text-center" variants={fadeUp.full}>
                <div className="font-heading text-7xl text-gray-300 mb-4">003</div>
                <h3 className="font-heading font-bold text-2xl uppercase text-navy mb-6">
                  Innovation & Continuous Improvement
                </h3>
                <div className="flex justify-center mb-6">
                  <ChartBarIcon className="w-24 h-24 text-red" strokeWidth={0.5} />
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  A proactive, innovative approach to integrating technology and data-driven insight into operational improvement. Skilled in analysing incidents, identifying trends, and implementing intelligent solutions for safer, more efficient outcomes.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== QUOTE / MOTTO ===== */}
      <section ref={quoteRef} className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 md:h-[934px] md:max-w-[1800px] md:mx-auto flex flex-col justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{ y: quoteParallaxY, willChange: 'transform' }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}
            ></div>
          </motion.div>

          <motion.div
            className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.full}
          >
            <blockquote className="text-white text-2xl sm:text-3xl md:text-4xl font-heading font-semibold italic leading-relaxed">
              Security isn’t about who’s the biggest or the toughest — it’s about the people and places we protect. True security is 99% customer service, built on respect, empathy, and professionalism.
            </blockquote>
            <div className="w-24 h-0.5 bg-white/30 mx-auto mt-8"></div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}