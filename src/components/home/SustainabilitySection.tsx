import { Container } from '../layout/Container'
import { SectionHeading } from '../typography/SectionHeading'
import { FadeInSection } from '../motion/FadeInSection'
import { sustainability } from '../../data/site'

export function SustainabilitySection() {
  return (
    <section className="border-b border-slate-200 bg-[#0B3C5D] text-white">
      <Container className="py-16 md:py-20">
        <FadeInSection>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Sustainability & CSR"
                title="From harvesting to delivery — total control over the supply chain."
                description={sustainability.description}
                align="left"
                variant="dark"
              />
              <div className="mt-6 flex flex-col gap-4">
                <div className="rounded-2xl border border-white/20 bg-white/5 px-5 py-4">
                  <p className="text-3xl font-heading font-semibold text-white">
                    {sustainability.collectionCenters}
                  </p>
                  <p className="mt-1 text-sm text-cyan-100/90">
                    Seafood Collection Centers across the {sustainability.region}
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-slate-100">
                  {sustainability.initiatives.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/90">
                Sustainability badge
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-white">
                We safeguard ocean resources and support sustainability end-to-end.
                Our direct relationships with fishermen ensure they earn higher value
                for their catch, supporting a sustainable and secure livelihood for
                the local community.
              </p>
              <p className="mt-4 text-sm text-cyan-100/80">
                Ocean Conservancy International Coastal Cleanup partner • Traceability
                from landing to export
              </p>
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  )
}
