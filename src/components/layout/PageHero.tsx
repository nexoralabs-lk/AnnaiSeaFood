import type { ReactNode } from 'react'
import { Container } from './Container'

type PageHeroProps = {
  title: string
  subtitle?: ReactNode
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-slate-900 bg-[radial-gradient(circle_at_top,_#0B3C5D,_#020617)] text-white">
      <Container className="py-12 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
          Annai Sea Food
        </p>
        <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-100/80">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  )
}

