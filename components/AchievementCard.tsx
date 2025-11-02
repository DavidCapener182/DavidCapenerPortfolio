'use client'

import { ShieldCheckIcon, MusicalNoteIcon, ExclamationTriangleIcon, CpuChipIcon } from '@heroicons/react/24/solid'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface AchievementCardProps {
  title: string
  subtitle?: string
  description: string
  imageSrc?: string
  iconType?: 'eurovision' | 'creamfields' | 'rebellion' | 'ai'
}

export default function AchievementCard({
  title,
  subtitle,
  description,
  imageSrc,
  iconType,
}: AchievementCardProps) {
  const getIcon = () => {
    switch (iconType) {
      case 'eurovision':
        return <MusicalNoteIcon className="w-12 h-12 sm:w-16 sm:h-16 text-red" />
      case 'creamfields':
        return <MusicalNoteIcon className="w-12 h-12 sm:w-16 sm:h-16 text-red" />
      case 'rebellion':
        return <ShieldCheckIcon className="w-12 h-12 sm:w-16 sm:h-16 text-red" />
      case 'ai':
        return <CpuChipIcon className="w-12 h-12 sm:w-16 sm:h-16 text-red" />
      default:
        return <ShieldCheckIcon className="w-12 h-12 sm:w-16 sm:h-16 text-red" />
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
          }
        }
      }}
    >
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 border-gray-200 hover:border-red group transform hover:-translate-y-1">
        {imageSrc ? (
          <motion.div 
            className="relative h-48 sm:h-56 w-full bg-gradient-to-br from-navy to-gray-800 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </motion.div>
        ) : (
        <div className="h-48 sm:h-56 w-full bg-gradient-to-br from-navy/90 to-red/20 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGg2djZIMzZ6TTYgNjBoNlY1NEg2ek0wIDBoNlY2SDB6TTI0IDI0aDZWMThIMjR6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
          <div className="relative z-10">{getIcon()}</div>
        </div>
      )}
      <CardHeader className="relative px-4 sm:px-6">
        <div className="absolute top-0 left-4 sm:left-6 w-12 h-1 bg-red transform -translate-y-1/2"></div>
        <CardTitle className={cn("text-navy group-hover:text-red transition-colors mb-2 text-lg sm:text-xl")}>
          {title}
        </CardTitle>
        {subtitle && (
          <p className="text-xs sm:text-sm font-semibold text-red leading-tight">
            {subtitle}
          </p>
        )}
      </CardHeader>
      <CardContent className="flex-grow flex flex-col px-4 sm:px-6">
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
          {description}
        </p>
      </CardContent>
      </Card>
    </motion.div>
  )
}

