import HeroBanner from '@/components/HeroBanner'
import AchievementCard from '@/components/AchievementCard'
import Button from '@/components/Button'
import { UserGroupIcon, ShieldCheckIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <HeroBanner
        title="David Capener — Security Operations & Crowd Safety Leader"
        subtitle="Protecting People. Managing Crowds. Leading Teams with Precision and Integrity."
        description="Delivering safe, seamless, and people-centred security operations across large-scale events, festivals, and public venues."
        ctaText="View My Work"
        ctaHref="#achievements"
      />

      {/* Professional Overview */}
      <section className="py-20 bg-gradient-to-b from-lightgrey to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, navy 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-red mx-auto mb-4"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
              I am a dedicated Security Operations Manager and Team Leader with over a decade of experience managing complex crowd environments across the United Kingdom. My expertise spans strategic planning, emergency response, and large-scale event coordination.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Having led operations at some of the nation's most prestigious events—including <span className="font-semibold text-navy">Eurovision 2023</span>, <span className="font-semibold text-navy">Creamfields Festival</span>, and <span className="font-semibold text-navy">Rebellion Festival</span>—I am passionate about maintaining the highest standards of safety, professionalism, and customer service.
            </p>
          </div>

          {/* Credentials Icons */}
          <div className="mt-12 flex justify-center items-center space-x-6 flex-wrap gap-6">
            <div className="bg-white rounded-xl px-6 py-4 shadow-lg border-2 border-red/20 hover:border-red transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-navy mb-1">Level 5</div>
              <div className="text-sm text-gray-600 font-semibold">Crowd Safety</div>
            </div>
            <div className="bg-white rounded-xl px-6 py-4 shadow-lg border-2 border-red/20 hover:border-red transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-navy mb-1">MIMMS</div>
              <div className="text-sm text-gray-600 font-semibold">Certified</div>
            </div>
            <div className="bg-white rounded-xl px-6 py-4 shadow-lg border-2 border-red/20 hover:border-red transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-navy mb-1">IOSH</div>
              <div className="text-sm text-gray-600 font-semibold">Managing Safely</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section id="achievements" className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">
              Key Achievements
            </h2>
            <div className="w-24 h-1 bg-red mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AchievementCard
              title="Eurovision 2023, Liverpool"
              description="Delivered full venue security management at the M&S Bank Arena, coordinating 75 staff across a one-month build and eight live show days in partnership with the BBC and arena management."
              imageSrc="/images/eurovision-arena.jpg"
              iconType="eurovision"
            />
            <AchievementCard
              title="Creamfields Festival (2013–Present)"
              description="Provided long-term consultancy and operational leadership, managing gate operations, stage security, and control room command to ensure safe, efficient crowd movement across a decade of events."
              imageSrc="/images/creamfields-festival.jpg"
              iconType="creamfields"
            />
            <AchievementCard
              title="Rebellion Festival, Blackpool"
              description="Led a successful lockdown procedure protecting 10,000 attendees amid external riots involving over 1,000 people. Implemented crisis protocols that minimised disruption and ensured no casualties."
              imageSrc="/images/rebellion-festival.jpg"
              iconType="rebellion"
            />
            <AchievementCard
              title="AI-Driven Event Management Platform"
              description="Designed and built a bespoke platform integrating Martyn's Law principles with artificial intelligence to support control rooms in real-time decision-making for festivals, music, and sporting events. Scheduled for live deployment in 2026 following successful testing phases."
              imageSrc="/images/ai-platform-mockup.png"
              iconType="ai"
            />
          </div>
        </div>
      </section>

      {/* What I Offer */}
      <section className="py-32 bg-[#d4a574] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1: Research & Planning */}
            <div className="text-center">
              <div className="font-heading text-8xl text-white/10 mb-4">001</div>
              <h3 className="font-heading font-bold text-2xl uppercase text-gray-900 mb-6">
                Research & Planning
              </h3>
              <div className="flex justify-center mb-6">
                <LightBulbIcon className="w-32 h-32 text-white" strokeWidth={0.5} />
              </div>
              <p className="text-gray-800 leading-relaxed">
                Comprehensive risk assessment, strategic planning, and preparation for every operational challenge. Expert knowledge of health and safety law, crowd dynamics, and event logistics.
              </p>
            </div>

            {/* Column 2: Leadership & Execution */}
            <div className="text-center">
              <div className="font-heading text-8xl text-white/10 mb-4">002</div>
              <h3 className="font-heading font-bold text-2xl uppercase text-gray-900 mb-6">
                Leadership & Execution
              </h3>
              <div className="flex justify-center mb-6">
                <UserGroupIcon className="w-32 h-32 text-white" strokeWidth={0.5} />
              </div>
              <p className="text-gray-800 leading-relaxed">
                Proven operational leadership in fast-paced, high-pressure settings. Calm, decisive guidance that builds trust and efficiency across multi-disciplinary teams.
              </p>
            </div>

            {/* Column 3: Optimize & Improve */}
            <div className="text-center">
              <div className="font-heading text-8xl text-white/10 mb-4">003</div>
              <h3 className="font-heading font-bold text-2xl uppercase text-gray-900 mb-6">
                Optimize & Improve
              </h3>
              <div className="flex justify-center mb-6">
                <ChartBarIcon className="w-32 h-32 text-white" strokeWidth={0.5} />
              </div>
              <p className="text-gray-800 leading-relaxed">
                A proactive, innovative approach to integrating technology and continuous improvement into security operations. Building AI-driven platforms for smarter decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Motto Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-white text-2xl md:text-4xl font-heading font-semibold italic leading-relaxed">
            Security is not about control—it's about foresight, collaboration, and calm leadership in every circumstance.
          </blockquote>
          <div className="w-24 h-0.5 bg-white/30 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-navy via-blue-900 to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Whether leading campus support teams, managing festival control rooms, or advising on crowd safety strategy, I bring professionalism, precision, and calm leadership to every operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" className="bg-red hover:bg-red-700 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Contact Me
            </Button>
            <Button href="/portfolio" variant="secondary" className="bg-white text-navy hover:bg-gray-100 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

