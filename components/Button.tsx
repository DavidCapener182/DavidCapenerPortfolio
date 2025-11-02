import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-block text-center'
  
  const variantClasses = variant === 'primary'
    ? 'bg-red text-white hover:bg-red-700 hover:shadow-lg'
    : 'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white'

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  )
}

