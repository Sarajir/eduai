import { Link, Outlet, useLocation } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/program', label: '8-week program' },
  { to: '/generator', label: 'Generator' },
  { to: '/log', label: 'Iteration log' },
  { to: '/safety', label: 'Safety & scope' },
]

export function Layout() {
  const loc = useLocation()

  return (
    <div className="flex min-h-dvh flex-col text-stone-800">
      <header className="no-print sticky top-0 z-20 border-b border-stone-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            to="/"
            className="font-display text-xl font-semibold tracking-tight text-bridge-900"
          >
            Same-Week Bridge
          </Link>
          <nav className="flex flex-wrap items-center gap-1 text-sm font-medium">
            {nav.map(({ to, label }) => {
              const active = loc.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  className={`rounded-full px-3 py-1.5 transition-colors ${
                    active
                      ? 'bg-bridge-100 text-bridge-900'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
        <Outlet />
      </main>

      <footer className="no-print border-t border-stone-200 bg-white/80 py-8 text-center text-sm text-stone-500">
        <p className="mx-auto max-w-lg">
          Same-Week Bridge is a free pilot toolkit for educators. It is not therapy or
          crisis care. See{' '}
          <Link to="/safety" className="text-bridge-600 underline-offset-2 hover:underline">
            Safety & scope
          </Link>
          .
        </p>
        <p className="mt-2 text-xs text-stone-400">
          Built for design-based pilots: classroom kernel + family micro-practice + light
          iteration notes.
        </p>
      </footer>
    </div>
  )
}
