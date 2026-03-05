import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const toggle = () => setOpen((prev) => !prev)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B3C5D] text-white">
              <span className="text-lg font-semibold">AN</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-semibold tracking-tight text-slate-900">
                Annai Sea Food
              </span>
              <span className="text-xs font-medium tracking-wide text-slate-500">
                Leading seafood production
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    'text-sm font-medium transition-colors',
                    isActive
                      ? 'text-[#0B3C5D]'
                      : 'text-slate-600 hover:text-slate-900',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              state={{ reason: 'quote' }}
              className="inline-flex items-center justify-center rounded-full bg-[#0B3C5D] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#0f4f7a] hover:shadow-lg"
            >
              Request Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-50 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-slate-700 transition-transform ${
                  open ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-slate-700 transition-opacity ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-slate-700 transition-transform ${
                  open ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-[1200px] px-4 pb-4 pt-2">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-[#0B3C5D]/5 text-[#0B3C5D]'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
            <div className="mt-3 flex flex-col gap-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              >
                Contact
              </Link>
              <Link
                to="/contact"
                state={{ reason: 'quote' }}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-[#0B3C5D] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#0f4f7a]"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

