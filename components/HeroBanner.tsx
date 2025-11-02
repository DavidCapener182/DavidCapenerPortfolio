import Image from 'next/image'

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
  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image or Video */}
      {videoSrc ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue-900 to-gray-900">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        </div>
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-6">
            {subtitle}
          </h2>
        )}
        {description && (
          <p className="text-lg md:text-xl text-white max-w-3xl mb-8">
            {description}
          </p>
        )}
        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="bg-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            {ctaText}
          </a>
        )}
      </div>
    </div>
  )
}

