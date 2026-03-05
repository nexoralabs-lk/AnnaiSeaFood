import { Container } from '../layout/Container'
import { FadeInSection } from '../motion/FadeInSection'
import { SectionHeading } from '../typography/SectionHeading'
import { company } from '../../data/site'

const facilityImage =
  'https://images.pexels.com/photos/3738093/pexels-photo-3738093.jpeg?auto=compress&cs=tinysrgb&w=1600'

export function AboutSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-center">
          <FadeInSection>
            <SectionHeading
              eyebrow="About Annai Sea Food"
              title={company.tagline}
              description={
                <>
                  Annai believes in transparency, honesty, and a trust-based value
                  system. We never compromise on quality. We build direct
                  relationships with fishermen so they earn higher value for their
                  catch — supporting a sustainable and secure livelihood for the
                  local community across 78 collection centers in North and East
                  Sri Lanka.
                </>
              }
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                Our processing facility is designed around international food safety
                standards, with segregated raw and finished product flows, blast
                freezing capacity, and monitored cold storage at every stage.
              </p>
              <p>
                We partner with importers, distributors, and manufacturers in 80+
                countries who demand consistent quality, technical transparency, and
                responsive export documentation support.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection className="md:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#0F7C82]/10 via-[#0B3C5D]/15 to-transparent" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
                <img
                  src={facilityImage}
                  alt="Modern seafood processing facility interior"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </Container>
    </section>
  )
}

