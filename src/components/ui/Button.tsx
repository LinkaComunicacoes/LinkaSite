import { AnchorHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'ghost' | 'white'
  children: ReactNode
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200 no-underline cursor-pointer px-8 py-3'

  const variants = {
    primary: 'gradient-bg text-white font-bold hover:-translate-y-0.5 hover:opacity-90',
    ghost: 'bg-transparent text-[#f0f0f0] border border-[#2a2a2a] hover:border-[#A855F7]',
    white: 'bg-white text-[#7C3AED] font-bold hover:-translate-y-0.5',
  }

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
