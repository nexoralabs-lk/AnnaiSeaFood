import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { PageHero } from '../components/layout/PageHero'
import { Container } from '../components/layout/Container'
import { FadeInSection } from '../components/motion/FadeInSection'
import { Button } from '../components/ui/Button'
import { company } from '../data/site'

export function ContactPage() {
  const location = useLocation()

  const params = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  )

  const productFromQuery = params.get('product') ?? ''

  return (
    <div className="bg-slate-50">
      <PageHero
        title="Share your export requirements."
        subtitle="Provide your company details, target markets, and product interests. Our export team will respond with tailored options within one business day."
      />

      <section className="pb-16 pt-10 md:pb-20">
        <Container>
          <FadeInSection>
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-14">
              <form className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#0B3C5D] focus:bg-white focus:ring-1 focus:ring-[#0B3C5D]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#0B3C5D] focus:bg-white focus:ring-1 focus:ring-[#0B3C5D]"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
                    >
                      Business Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#0B3C5D] focus:bg-white focus:ring-1 focus:ring-[#0B3C5D]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#0B3C5D] focus:bg-white focus:ring-1 focus:ring-[#0B3C5D]"
                    >
                      <option value="">Select country</option>
                      <option value="Japan">Japan</option>
                      <option value="Singapore">Singapore</option>
                      <option value="UAE">United Arab Emirates</option>
                      <option value="Europe">Europe</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="product"
                    className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
                  >
                    Product / Specification
                  </label>
                  <input
                    id="product"
                    name="product"
                    type="text"
                    defaultValue={productFromQuery}
                    placeholder="e.g. Blue Swimming Crab, 300–500 g, IQF"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#0B3C5D] focus:bg-white focus:ring-1 focus:ring-[#0B3C5D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Share your volume expectations, target markets, and any certifications required."
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#0B3C5D] focus:bg-white focus:ring-1 focus:ring-[#0B3C5D]"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <Button type="submit">Submit enquiry</Button>
                  <p className="text-[11px] text-slate-500">
                    We typically respond within one business day, Monday to Friday.
                  </p>
                </div>
              </form>

              <div className="space-y-5">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 text-sm shadow-sm">
                  <h2 className="font-heading text-base font-semibold text-slate-900">
                    Contact information
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    {company.name}
                    <br />
                    {company.address}
                  </p>
                  <p className="mt-3 text-sm text-slate-600">
                    Phone:{' '}
                    <a href={`tel:${company.phone}`} className="text-[#0B3C5D]">
                      {company.phone}
                    </a>
                    <br />
                    Email:{' '}
                    <a href={`mailto:${company.email}`} className="text-[#0B3C5D]">
                      {company.email}
                    </a>
                    <br />
                    Office hours: {company.officeHours}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
                    <div className="flex h-40 items-center justify-center bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 text-xs font-medium text-slate-600">
                      Google Map Placeholder
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Actual map embed and driving directions can be integrated based on
                    your preferred mapping provider.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </Container>
      </section>
    </div>
  )
}

