import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { FadeInSection } from '../motion/FadeInSection'
import { company } from '../../data/site'

const heroBackground =
  'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1600'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-[#0B3C5D]/80 to-slate-900/70" />

      <Container className="relative z-10 py-16 md:py-24 lg:py-28">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <FadeInSection>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/90">
              Northern Sri Lanka • Aqua Farming • International Seafood Trade
            </p>
            <h1 className="mt-4 max-w-xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              {company.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-100/85 md:text-base">
              {company.description} We build direct relationships with fishermen
              so they earn higher value for their catch — supporting a sustainable
              and secure livelihood for the local community.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                to="/products"
                className="animate-float-soft"
              >
                View Products
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                Request Export Quote
              </Button>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-200/90">
                Exporting to 80+ countries • 78 collection centers across North &amp; East
              </p>
            </div>
          </FadeInSection>

          <FadeInSection className="md:justify-self-end">
            <div className="rounded-3xl border border-cyan-100/30 bg-slate-950/60 p-5 shadow-[0_40px_80px_rgba(15,118,143,0.55)] backdrop-blur">
              <div className="flex items-center justify-between gap-4 border-b border-slate-800/70 pb-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                    Why Annai
                  </p>
                  <p className="mt-1 text-sm text-slate-200">
                    Soul-touching quality. Transparency. Uncompromised standards.
                  </p>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-semibold text-emerald-200">
                  HACCP • ISO 22000
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
                <div className="rounded-2xl bg-slate-900/70 p-3">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                    Collection Centers
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">78</p>
                  <p className="mt-1 text-[11px] text-slate-400">North &amp; East Sri Lanka</p>
                </div>
                <div className="rounded-2xl bg-slate-900/70 p-3">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                    Export Reach
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">80+</p>
                  <p className="mt-1 text-[11px] text-slate-400">Countries</p>
                </div>
                <div className="rounded-2xl bg-slate-900/70 p-3">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                    Trained Staff
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">80+</p>
                  <p className="mt-1 text-[11px] text-slate-400">Energetic &amp; innovative</p>
                </div>
                <div className="rounded-2xl bg-slate-900/70 p-3">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                    Experience
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">30+</p>
                  <p className="mt-1 text-[11px] text-slate-400">Years empowering fishermen</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </Container>
    </section>
  )
}

