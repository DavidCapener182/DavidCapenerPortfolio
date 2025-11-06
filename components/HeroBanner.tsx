'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface HeroBannerProps {
  title: string
  subtitle?: string
  description?: string
  imageSrc?: string
  videoSrc?: string
  ctaText?: string
  ctaHref?: string
  overlay?: boolean
}

export default function HeroBanner({
  title,
  subtitle,
  description,
  imageSrc,
  videoSrc,
  ctaText,
  ctaHref,
  overlay = true,
}: HeroBannerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden">
      {/* Background Image or Video */}
      {videoSrc ? (
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: parallaxY, willChange: 'transform' }}
        >
          <source src={videoSrc} type="video/mp4" />
        </motion.video>
      ) : imageSrc ? (
        <motion.div
          className="absolute inset-0"
          style={{ y: parallaxY, willChange: 'transform' }}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1f3ba0] via-[#2f54d8] to-[#132a74]">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1740]/80 via-transparent to-[#1f3ba0]/40"></div>
        </div>
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1740]/70 via-[#1f2d6b]/40 to-[#081129]/70" />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.h2 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl text-white mb-6"
          >
            {subtitle}
          </motion.h2>
        )}
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-base sm:text-lg md:text-xl text-white max-w-3xl mb-8 px-2"
          >
            {description}
          </motion.p>
        )}
        {ctaText && ctaHref && (
          <motion.a
            href={ctaHref}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {ctaText}
          </motion.a>
        )}
      </div>
      
      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: [0, 10, 0],
        }}
        transition={{ 
          opacity: { duration: 0.8, delay: 1 },
          y: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }
        }}
      >
        <ChevronDownIcon className="w-8 h-8 text-white" />
      </motion.div>
    </div>
  )
}

