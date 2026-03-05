import { Link } from 'react-router-dom'
import { company } from '../../data/site'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B3C5D] text-white">
                <span className="text-lg font-semibold">AN</span>
              </div>
              <span className="font-heading text-lg font-semibold text-slate-900">
                Annai Sea Food
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              {company.tagline} Transparency, honesty, trust-based value system, and
              uncompromised quality — from Northern Sri Lanka to the world.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/about" className="hover:text-slate-900">
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-slate-900">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-slate-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Products
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/products" className="hover:text-slate-900">
                  Product Overview
                </Link>
              </li>
              <li>
                <span className="cursor-default text-slate-500">
                  Blue Swimming Crab
                </span>
              </li>
              <li>
                <span className="cursor-default text-slate-500">
                  Tiger Prawns
                </span>
              </li>
              <li>
                <span className="cursor-default text-slate-500">Yellowfin Tuna</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>{company.address}</li>
              <li>
                <a href={`tel:${company.phone}`} className="hover:text-[#0B3C5D]">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-[#0B3C5D]">
                  {company.email}
                </a>
              </li>
              <li>Office: {company.officeHours}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
                aria-label="LinkedIn"
              >
                <span className="text-sm font-semibold">in</span>
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
                aria-label="Instagram"
              >
                <span className="text-sm font-semibold">IG</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Annai Sea Food. All rights reserved.</p>
          <p>Our quality that touch&apos;s soul — leading aqua farming and seafood trade from Northern Sri Lanka.</p>
        </div>
      </div>
    </footer>
  )
}

