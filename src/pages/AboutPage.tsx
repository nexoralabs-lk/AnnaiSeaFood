import { PageHero } from '../components/layout/PageHero'
import { Container } from '../components/layout/Container'
import { SectionHeading } from '../components/typography/SectionHeading'
import { FadeInSection } from '../components/motion/FadeInSection'
import { company, mission, vision, goals, pillars, sustainability } from '../data/site'

const facilityImage =
  'https://images.pexels.com/photos/3738095/pexels-photo-3738095.jpeg?auto=compress&cs=tinysrgb&w=1600'
const coldStorageImage =
  'https://images.pexels.com/photos/4484076/pexels-photo-4484076.jpeg?auto=compress&cs=tinysrgb&w=1600'

export function AboutPage() {
  return (
    <div className="bg-slate-50">
      <PageHero
        title="About Annai Sea Food"
        subtitle="Our quality that touch's soul — transparency, honesty, and uncompromised quality for over 30 years."
      />

      <section className="py-14 md:py-16">
        <Container>
          <FadeInSection>
            <SectionHeading
              eyebrow="Company Overview"
              title="A market leader in aqua farming and international seafood trade from Northern Sri Lanka."
              description="Annai believes in transparency, honesty, and a trust-based value system. We never compromise on quality. For 30+ years we have been empowering local fishermen, with direct relationships that ensure they earn higher value for their catch and a sustainable, secure livelihood for the community."
            />
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <p className="text-sm leading-relaxed text-slate-600">
                We operate 78 seafood collection centers across the North and East
                of Sri Lanka, with total control over the supply chain throughout
                the region. Our energetic, innovative, and adaptive workforce of
                80+ trained staff supports export to 80+ countries.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                We see ourselves not just as a supplier, but as a program partner —
                aligning production, documentation, and quality systems with the
                expectations of importers, distributors, and foodservice groups
                worldwide.
              </p>
            </div>
          </FadeInSection>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <Container className="py-14 md:py-16">
          <FadeInSection>
            <SectionHeading
              eyebrow="Mission & Vision"
              title="Soul-touching quality and long-term leadership."
              align="center"
            />
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-6">
                <h3 className="font-heading text-lg font-semibold text-[#0B3C5D]">
                  Mission
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {mission}
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-6">
                <h3 className="font-heading text-lg font-semibold text-[#0B3C5D]">
                  Vision
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {vision}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-heading text-base font-semibold text-slate-900">
                Our Goals
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F7C82]" />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        </Container>
      </section>

      <section className="bg-slate-50">
        <Container className="py-14 md:py-16">
          <FadeInSection>
            <SectionHeading
              eyebrow="Pillars of Our Business"
              title="The people and processes behind Annai."
              description="The people at Annai are the pillars of the business. We combine an expert team with a rigorous quality process and decades of experience."
              align="center"
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                >
                  <h3 className="font-heading text-lg font-semibold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <Container className="py-14 md:py-16">
          <FadeInSection>
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-center">
              <div className="space-y-4">
                <SectionHeading
                  eyebrow="Processing Facility"
                  title="Designed for frozen seafood programs."
                />
                <p className="text-sm leading-relaxed text-slate-600">
                  Our facility features segregated raw and cooked areas, stainless
                  steel processing lines, plate and blast freezers, and cold storage
                  rooms with continuous temperature logging. Product flows are
                  designed to minimize cross-contamination and maintain cold chain
                  integrity.
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  We operate with documented sanitation programs, pre-operational
                  checks, and in-process monitoring to ensure every batch meets
                  defined specifications before release.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
                <img
                  src={facilityImage}
                  alt="Interior view of Annai Sea Food processing facility"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeInSection>
        </Container>
      </section>

      <section className="bg-[#0B3C5D] text-white">
        <Container className="py-14 md:py-16">
          <FadeInSection>
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <SectionHeading
                  eyebrow="Sustainability & Quality"
                  title="Sustainability from harvesting to delivery."
                  description={`${sustainability.collectionCenters} collection centers across the ${sustainability.region}. ${sustainability.description}`}
                  variant="dark"
                />
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {sustainability.initiatives.map((init) => (
                    <li key={init} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      {init}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-800 shadow-xl">
                <img
                  src={coldStorageImage}
                  alt="Cold storage facility for frozen seafood"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeInSection>
        </Container>
      </section>

      <section className="bg-slate-50">
        <Container className="py-14 md:py-16">
          <FadeInSection>
            <SectionHeading
              eyebrow="Export Experience"
              title="80+ countries. Multiple regulatory environments."
              description="Annai has experience shipping to buyers across Japan, Singapore, the UAE, Europe, and beyond — each with distinct documentation and compliance expectations."
              align="center"
            />
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 text-sm shadow-sm">
                <h3 className="font-heading text-base font-semibold text-slate-900">
                  Asia-Pacific
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Experience with Japanese auction houses and wholesalers, including
                  product presentation, grading, and documentation support.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 text-sm shadow-sm">
                <h3 className="font-heading text-base font-semibold text-slate-900">
                  Middle East
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Regular shipments to the UAE and surrounding markets for
                  foodservice, retail, and processing customers.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 text-sm shadow-sm">
                <h3 className="font-heading text-base font-semibold text-slate-900">
                  Europe
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Familiarity with EU regulatory frameworks, labeling, and
                  traceability requirements for seafood imports.
                </p>
              </div>
            </div>
          </FadeInSection>
        </Container>
      </section>
    </div>
  )
}
