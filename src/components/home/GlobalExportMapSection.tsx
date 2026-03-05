import { Container } from '../layout/Container'
import { FadeInSection } from '../motion/FadeInSection'
import { SectionHeading } from '../typography/SectionHeading'

const mapBackground =
  'https://images.pexels.com/photos/1078671/pexels-photo-1078671.jpeg?auto=compress&cs=tinysrgb&w=1600'

const markets = ['Japan', 'Singapore', 'United Arab Emirates', 'Europe']

export function GlobalExportMapSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-900 text-white">
      <Container className="py-16 md:py-20">
        <FadeInSection>
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
            <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/60 shadow-2xl">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage: `url(${mapBackground})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-slate-900/60 to-transparent" />
              <div className="relative p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
                  Export Network
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-100/90">
                  Consolidated shipments depart from Colombo, serving importers,
                  distributors, and processing partners across Asia, the Middle East,
                  and Europe.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-slate-100">
                  {markets.map((market) => (
                    <div
                      key={market}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{market}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Global Reach"
                title="Designed for cross-continent seafood programs."
                description="From Japanese auction houses to European wholesalers and UAE foodservice distributors, our team understands the documentation, labeling, and cut-style requirements of each market."
              />
              <dl className="mt-6 grid grid-cols-2 gap-4 text-xs text-slate-200">
                <div className="rounded-2xl bg-slate-800/60 p-4">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Primary Ports
                  </dt>
                  <dd className="mt-2">Colombo, Dubai, Singapore, Rotterdam</dd>
                </div>
                <div className="rounded-2xl bg-slate-800/60 p-4">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Shipment Types
                  </dt>
                  <dd className="mt-2">Full container loads • LCL consolidations</dd>
                </div>
              </dl>
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  )
}

