import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { IconBridge, IconGithub, IconMenu, IconX } from './icons'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/program', label: 'Program' },
  { to: '/generator', label: 'Generator' },
  { to: '/log', label: 'Log' },
  { to: '/calibration', label: 'Calibrate' },
  { to: '/perspective', label: 'Perspective' },
  { to: '/safety', label: 'Safety' },
  { to: '/publish', label: 'Deploy' },
]

export function Layout() {
  const loc = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-dvh flex-col text-stone-800">
      <header className="no-print sticky top-0 z-40 border-b border-stone-200/70 bg-white/85 shadow-sm shadow-stone-900/[0.03] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            to="/"
            className="group flex items-center gap-2.5 rounded-xl py-1 pr-2 focus-visible:outline-offset-4"
            onClick={() => setMenuOpen(false)}
          >
            <IconBridge className="size-9 shrink-0 shadow-md shadow-bridge-900/15 transition group-hover:scale-[1.03]" />
            <div className="text-left leading-tight">
              <span className="font-display text-lg font-semibold tracking-tight text-bridge-900 sm:text-xl">
                Same-Week Bridge
              </span>
              <span className="hidden text-[11px] font-medium text-stone-500 sm:block">
                SEL pilot toolkit
              </span>
            </div>
          </Link>

          <nav
            className="hidden items-center gap-0.5 text-sm font-semibold lg:flex"
            aria-label="Main"
          >
            {nav.map(({ to, label }) => {
              const active = loc.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  className={`rounded-full px-3.5 py-2 transition-colors ${
                    active
                      ? 'bg-bridge-100 text-bridge-900 ring-1 ring-bridge-200/80'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
            <a
              href="https://github.com/Sarajir/eduai"
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-2 text-stone-600 transition hover:border-bridge-300 hover:text-bridge-800"
            >
              <IconGithub className="size-4" />
              GitHub
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-stone-200 bg-white p-2.5 text-stone-700 shadow-sm lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <IconX className="size-6" /> : <IconMenu className="size-6" />}
          </button>
        </div>

        {menuOpen ? (
          <div
            id="mobile-nav"
            className="border-t border-stone-200 bg-white px-4 py-4 shadow-lg lg:hidden"
          >
            <nav className="flex flex-col gap-1 font-semibold" aria-label="Mobile">
              {nav.map(({ to, label }) => {
                const active = loc.pathname === to
                return (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 ${
                      active ? 'bg-bridge-50 text-bridge-900' : 'text-stone-700'
                    }`}
                  >
                    {label}
                  </Link>
                )
              })}
              <a
                href="https://github.com/Sarajir/eduai"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-stone-200 py-3 text-stone-700"
              >
                <IconGithub className="size-5" />
                GitHub repo
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-12">
        <Outlet />
      </main>

      <footer className="no-print mt-auto border-t border-stone-200/80 bg-white/90">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <IconBridge className="size-8" />
              <span className="font-display text-lg font-semibold text-bridge-900">
                Same-Week Bridge
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-600">
              Free toolkit for short SEL kernels, bilingual family alignment, lightweight
              iteration notes, plus learning-science labs for calibration and perspective-taking.
              Not therapy or crisis care.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Toolkit</p>
            <ul className="mt-3 space-y-2 text-sm font-medium">
              <li>
                <Link to="/program" className="text-stone-600 hover:text-bridge-700">
                  8-week program
                </Link>
              </li>
              <li>
                <Link to="/generator" className="text-stone-600 hover:text-bridge-700">
                  Generator
                </Link>
              </li>
              <li>
                <Link to="/log" className="text-stone-600 hover:text-bridge-700">
                  Iteration log
                </Link>
              </li>
              <li>
                <Link to="/calibration" className="text-stone-600 hover:text-bridge-700">
                  Calibration lab
                </Link>
              </li>
              <li>
                <Link to="/perspective" className="text-stone-600 hover:text-bridge-700">
                  Perspective lab
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Project</p>
            <ul className="mt-3 space-y-2 text-sm font-medium">
              <li>
                <Link to="/safety" className="text-stone-600 hover:text-bridge-700">
                  Safety & scope
                </Link>
              </li>
              <li>
                <Link to="/publish" className="text-stone-600 hover:text-bridge-700">
                  Deploy to Pages
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Sarajir/eduai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-600 hover:text-bridge-700"
                >
                  <IconGithub className="size-4" />
                  Source on GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-100 py-6 text-center text-xs text-stone-400">
          © {new Date().getFullYear()} Same-Week Bridge · Open toolkit for educators
        </div>
      </footer>
    </div>
  )
}
