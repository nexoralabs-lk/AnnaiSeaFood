import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { FadeInSection } from '../motion/FadeInSection'

export function HomeCtaSection() {
  return (
    <section className="bg-[#0B3C5D] text-white">
      <Container className="py-14 md:py-16">
        <FadeInSection className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Let&apos;s discuss your program
            </p>
            <h2 className="mt-3 max-w-xl font-heading text-2xl font-semibold tracking-tight md:text-3xl">
              Looking for a reliable seafood export partner?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cyan-50/90">
              Share your specification sheet, volume expectations, and destination
              markets. Our commercial and technical teams will respond with tailored
              options within one business day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/contact" className="px-6">
              Request Quote
            </Button>
            <Button
              to="/contact"
              variant="secondary"
              className="bg-transparent text-white"
            >
              Contact Sales
            </Button>
          </div>
        </FadeInSection>
      </Container>
    </section>
  )
}

