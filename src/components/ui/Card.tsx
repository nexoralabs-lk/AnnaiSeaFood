import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-100 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  )
}

