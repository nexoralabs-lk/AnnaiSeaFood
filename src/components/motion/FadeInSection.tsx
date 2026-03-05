import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

type FadeInSectionProps = {
  children: ReactNode
  className?: string
}

export function FadeInSection({ children, className = '' }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  const base =
    'transition-all duration-700 ease-out will-change-transform will-change-opacity'
  const hidden = 'translate-y-4 opacity-0'
  const visible = 'translate-y-0 opacity-100'

  return (
    <div
      ref={ref}
      className={`${base} ${isVisible ? visible : hidden} ${className}`}
    >
      {children}
    </div>
  )
}

