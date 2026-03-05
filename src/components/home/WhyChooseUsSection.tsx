import { Container } from '../layout/Container'
import { SectionHeading } from '../typography/SectionHeading'
import { FadeInSection } from '../motion/FadeInSection'
import { Card } from '../ui/Card'

const features = [
  {
    title: 'Sustainable fishing practices',
    description:
      'Partnering with licensed vessels and monitored landing sites, aligned with regional fisheries management guidelines.',
  },
  {
    title: 'International food safety standards',
    description:
      'HACCP-based quality systems, in-house microbiology support, and ISO 22000-aligned documentation.',
  },
  {
    title: 'Advanced cold storage facilities',
    description:
      'Blast freezing at -40°C with calibrated temperature monitoring and real-time cold room logging.',
  },
  {
    title: 'Reliable global export logistics',
    description:
      'Dedicated export documentation team coordinating with leading freight forwarders and carriers.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <Container className="py-16 md:py-20">
        <FadeInSection>
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Why Partner with Us"
              title="An operations-first export partner for long-term programs."
              description="We design our operations around your programs — not the other way around. From product development to documentation, our team supports your brand in-market."
              align="center"
            />
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="h-full border-slate-100 bg-white/80 p-5"
                >
                  <h3 className="font-heading text-base font-semibold tracking-tight text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  )
}

