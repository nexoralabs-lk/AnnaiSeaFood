import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
  variant?: 'default' | 'dark'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  variant = 'default',
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'items-center text-center' : 'items-start text-left'
  const isDark = variant === 'dark'
  const eyebrowClass = isDark
    ? 'text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300'
    : 'text-xs font-semibold uppercase tracking-[0.25em] text-[#0F7C82]'
  const titleClass = isDark
    ? 'font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl'
    : 'font-heading text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl'
  const descClass = isDark
    ? 'max-w-2xl text-sm leading-relaxed text-slate-200'
    : 'max-w-2xl text-sm leading-relaxed text-slate-600'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
      <h2 className={titleClass}>{title}</h2>
      {description && <p className={descClass}>{description}</p>}
    </div>
  )
}

