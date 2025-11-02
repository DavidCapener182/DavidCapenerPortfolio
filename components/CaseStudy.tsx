import Image from 'next/image'

interface CaseStudyProps {
  title: string
  role: string
  client?: string
  duration?: string
  description: string
  keyOutcomes?: string[]
  imageSrc?: string
  imageAlt?: string
}

export default function CaseStudy({
  title,
  role,
  client,
  duration,
  description,
  keyOutcomes,
  imageSrc,
  imageAlt,
}: CaseStudyProps) {
  return (
    <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
      {imageSrc && (
        <div className="relative h-64 md:h-96 w-full bg-lightgrey">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6 md:p-8">
        <div className="border-l-4 border-red pl-4 mb-4">
          <h2 className="font-heading font-bold text-3xl text-navy mb-2">
            {title}
          </h2>
          <div className="text-gray-600 space-y-1">
            <p className="font-semibold">{role}</p>
            {client && <p>Client: {client}</p>}
            {duration && <p>Duration: {duration}</p>}
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
          {description}
        </p>
        {keyOutcomes && keyOutcomes.length > 0 && (
          <div>
            <h3 className="font-heading font-semibold text-xl text-navy mb-3">
              Key Outcomes:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {keyOutcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

