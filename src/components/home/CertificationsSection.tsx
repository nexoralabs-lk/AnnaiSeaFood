import { Container } from '../layout/Container'
import { FadeInSection } from '../motion/FadeInSection'
import { SectionHeading } from '../typography/SectionHeading'

const certifications = [
  {
    name: 'HACCP',
    description: 'Hazard Analysis and Critical Control Points',
  },
  {
    name: 'ISO 22000',
    description: 'Food Safety Management System',
  },
  {
    name: 'EU Export Approval',
    description: 'Approved establishment for export to the European Union',
  },
]

export function CertificationsSection() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <Container className="py-14 md:py-16">
        <FadeInSection>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <SectionHeading
              eyebrow="Certifications"
              title="Aligned with international food safety programs."
              description="Annai Sea Food operates under documented quality systems audited by independent bodies, allowing importers to rely on transparent, well-structured programs."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm shadow-sm"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0F7C82]">
                    Certification
                  </span>
                  <span className="mt-2 font-heading text-base font-semibold text-slate-900">
                    {cert.name}
                  </span>
                  <span className="mt-1 text-[11px] text-slate-600">
                    {cert.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  )
}

