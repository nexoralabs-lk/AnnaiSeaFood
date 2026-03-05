import { Container } from '../layout/Container'
import { FadeInSection } from '../motion/FadeInSection'
import { stats } from '../../data/site'

export function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <Container className="py-8 md:py-10">
        <FadeInSection>
          <div className="grid items-center gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                Our Quality That Touch&apos;s Soul
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Annai Sea Food delivers soul-touching quality to 80+ countries through
                78 collection centers across North and East Sri Lanka, with an 80+ strong
                trained team and 30+ years of empowering local fishermen.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-3 text-center shadow-sm"
                >
                  <p className="text-sm font-semibold text-[#0B3C5D]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  )
}

