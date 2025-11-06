'use client'

import HeroBanner from '@/components/HeroBanner'
import AchievementCard from '@/components/AchievementCard'
import Button from '@/components/Button'
import { UserGroupIcon, ShieldCheckIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline'
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
      {/* Hero Banner */}
      <section className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 md:h-[934px] md:max-w-[1800px] md:mx-auto">
          <HeroBanner
            title="David Capener — Security Operations & Crowd Safety Leader"
            subtitle="Protecting People. Building Confidence. Leading Teams with Precision and Integrity."
            description="Dedicated to creating safer, more inclusive environments across events, campuses, and public venues — integrating counter terrorism awareness and protective security principles into every operation."
          />
        </div>
      </section>

      {/* Professional Overview */}
      <section className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 min-h-screen md:h-[934px] md:max-w-[1800px] md:mx-auto flex flex-col justify-start bg-gradient-to-b from-lightgrey to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, navy 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
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
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
              I am committed to fostering safe, inclusive, and welcoming environments that allow students, staff, and visitors to thrive — balancing firm operational standards with a people-first approach. My leadership style emphasises calm, evidence-based decision-making and continuous professional development across my teams, with counter terrorism awareness and protective security principles embedded throughout all operational protocols.
            </p>
          </motion.div>

          {/* Credentials Icons */}
          <motion.p 
            className="text-center text-gray-600 mb-8 mt-8 text-sm sm:text-base px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.moderate}
          >
            Fully qualified with industry-recognised certifications including Counter Terrorism Level 6 (Protective Security), ensuring compliance, professional accountability, and continual improvement.
          </motion.p>
          <motion.div 
            className="mt-8 sm:mt-12 flex justify-center items-center space-x-4 sm:space-x-6 flex-wrap gap-4 sm:gap-6"
            variants={staggerContainer.full}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="bg-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border-2 border-red/20 hover:border-red transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              variants={zoomIn.full}
            >
              <div className="text-2xl sm:text-3xl font-bold text-navy mb-1">Level 5</div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">Crowd Safety</div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border-2 border-red/20 hover:border-red transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              variants={zoomIn.full}
            >
              <div className="text-2xl sm:text-3xl font-bold text-navy mb-1">Level 6</div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">Counter Terrorism</div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border-2 border-red/20 hover:border-red transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              variants={zoomIn.full}
            >
              <div className="text-2xl sm:text-3xl font-bold text-navy mb-1">MIMMS</div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">Certified</div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border-2 border-red/20 hover:border-red transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              variants={zoomIn.full}
            >
              <div className="text-2xl sm:text-3xl font-bold text-navy mb-1">IOSH</div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">Managing Safely</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      </section>

      {/* Key Achievements - First 3 */}
      <section id="achievements" className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 min-h-screen md:h-[934px] md:max-w-[1800px] md:mx-auto flex flex-col justify-start bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-16 md:pb-20 w-full">
          <motion.div 
            className="text-center mb-6 sm:mb-8 md:mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.full}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-navy mb-4">
              Key Achievements
            </h2>
            <div className="w-24 h-1 bg-red mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-8">
            <AchievementCard
              title="Eurovision 2023, Liverpool"
              subtitle="Full venue management and live broadcast security — delivered with zero major incidents."
              description="Delivered full venue security management at the M&S Bank Arena, coordinating 75 staff across a one-month build and eight live show days in partnership with the BBC and arena management."
              imageSrc="/images/eurovision-arena.jpg"
              iconType="eurovision"
            />
            <AchievementCard
              title="Britain's Got Talent, Blackpool"
              subtitle="Head of Security for ITV's flagship talent show at Blackpool Winter Gardens."
              description="Led overall venue security operations for ITV's Britain's Got Talent at Blackpool Winter Gardens, managing venue security, talent security teams, and judges security teams to ensure safe and seamless production operations."
              imageSrc="/images/bgt-blackpool.jpg"
              iconType="bgt"
            />
            <AchievementCard
              title="2019 LFC European Cup Parade, Liverpool"
              subtitle="Led security operations for Liverpool's historic victory parade with LFC and Liverpool City Council."
              description="Led comprehensive security operations for the 2019 Liverpool FC European Cup victory parade, coordinating with Liverpool Football Club and Liverpool City Council to ensure safe management of hundreds of thousands of celebrants across the city centre route."
              imageSrc="/images/liverpool-parade.jpg"
              iconType="parade"
            />
          </div>
        </div>
      </div>
      </section>

      {/* Key Achievements - Second 3 */}
      <section className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 min-h-screen md:h-[934px] md:max-w-[1800px] md:mx-auto flex flex-col justify-start bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-16 md:pb-20 w-full">
          <motion.div 
            className="text-center mb-6 sm:mb-8 md:mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp.full}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-navy mb-4">
              Key Achievements
            </h2>
            <div className="w-24 h-1 bg-red mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-8">
            <AchievementCard
              title="Creamfields Festival (2013–Present)"
              subtitle="Streamlined access operations and multi-agency coordination improving crowd efficiency."
              description="Provided long-term consultancy and operational leadership, managing gate operations, stage security, and control room command to ensure safe, efficient crowd movement across a decade of events."
              imageSrc="/images/creamfields-festival.jpg"
              iconType="creamfields"
            />
            <AchievementCard
              title="Rebellion Festival, Blackpool"
              subtitle="Crisis-managed external riots through lockdown protocols protecting 10,000 attendees."
              description="Led a successful lockdown procedure protecting 10,000 attendees amid external riots involving over 1,000 people. Implemented crisis protocols that minimised disruption and ensured no casualties."
              imageSrc="/images/rebellion-festival.jpg"
              iconType="rebellion"
            />
            <AchievementCard
              title="InCommand"
              subtitle="Event management platform with integrated AI, aligned with Martyn's Law compliance."
              description="Designed and built InCommand, a bespoke platform that integrates Martyn's Law principles with AI technology to support control rooms in real-time decision-making for festivals, music, and sporting events. Scheduled for live deployment in 2026 following successful testing phases."
              imageSrc="/images/ai-platform-mockup.png"
              iconType="ai"
            />
          </div>
        </div>
      </div>
      </section>

      {/* What I Offer */}
      <section className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 min-h-screen md:h-[934px] md:max-w-[1800px] md:mx-auto flex flex-col justify-start bg-lightgrey relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-16 md:pb-20">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            variants={staggerContainer.full}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Column 1: Operational Foresight & Risk Planning */}
            <motion.div className="text-center" variants={fadeUp.full}>
              <div className="font-heading text-6xl sm:text-7xl md:text-8xl text-gray-300 mb-4">001</div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase text-navy mb-6">
                Operational Foresight & Risk Planning
              </h3>
              <div className="flex justify-center mb-6">
                <LightBulbIcon className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-red" strokeWidth={0.5} />
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Comprehensive risk assessment, strategic planning, and preparation for every operational challenge. Expert knowledge of health and safety law, crowd dynamics, and event logistics. Experienced in evidence-based decision-making, ensuring proportionate, lawful, and well-documented operational responses. Integrates counter terrorism awareness and protective security principles into all planning protocols, ensuring alignment with Martyn's Law requirements and current national security frameworks.
              </p>
            </motion.div>

            {/* Column 2: Leadership, Mentorship & Team Development */}
            <motion.div className="text-center" variants={fadeUp.full}>
              <div className="font-heading text-6xl sm:text-7xl md:text-8xl text-gray-300 mb-4">002</div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase text-navy mb-6">
                Leadership, Mentorship & Team Development
              </h3>
              <div className="flex justify-center mb-6">
                <UserGroupIcon className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-red" strokeWidth={0.5} />
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Proven operational leadership in fast-paced, high-pressure settings. Calm, decisive guidance that builds trust and efficiency across multi-disciplinary teams. Proven experience managing multi-tiered security teams, ensuring staff welfare, motivation, and consistent performance under both routine and high-pressure conditions.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Focused on building capability and wellbeing within teams, through mentoring, feedback, and structured development — ensuring consistent standards day and night.
              </p>
            </motion.div>

            {/* Column 3: Innovation & Continuous Improvement */}
            <motion.div className="text-center" variants={fadeUp.full}>
              <div className="font-heading text-6xl sm:text-7xl md:text-8xl text-gray-300 mb-4">003</div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase text-navy mb-6">
                Innovation & Continuous Improvement
              </h3>
              <div className="flex justify-center mb-6">
                <ChartBarIcon className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-red" strokeWidth={0.5} />
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                A proactive, innovative approach to integrating technology and continuous improvement into security operations. Building AI-driven platforms for smarter decision-making. Skilled in analyzing incident data, identifying trends, and implementing preventive measures to enhance future performance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      </section>

      {/* Quote/Motto Section */}
      <section ref={quoteRef} className="relative min-h-screen md:h-[934px] snap-start scroll-mt-24">
        <div className="md:sticky md:top-0 min-h-screen md:h-[934px] md:max-w-[1800px] md:mx-auto flex flex-col justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: quoteParallaxY, willChange: 'transform' }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </motion.div>
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp.full}
        >
          <blockquote className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-semibold italic leading-relaxed">
            Security is not about control — it's about foresight, collaboration, and calm leadership that inspires confidence in every circumstance.
          </blockquote>
          <div className="w-24 h-0.5 bg-white/30 mx-auto mt-8"></div>
        </motion.div>
      </div>
      </section>

    </div>
  )
}

