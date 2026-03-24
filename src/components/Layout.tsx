import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { IconBridge, IconGithub, IconMenu, IconX } from './icons'
import { useI18n } from '../i18n/context'

const navConfig = [
  { to: '/', key: 'home' as const },
  { to: '/program', key: 'program' as const },
  { to: '/generator', key: 'generator' as const },
  { to: '/log', key: 'log' as const },
  { to: '/calibration', key: 'calibrate' as const },
  { to: '/perspective', key: 'perspective' as const },
  { to: '/safety', key: 'safety' as const },
  { to: '/support', key: 'support' as const },
  { to: '/community', key: 'community' as const },
]

export function Layout() {
  const loc = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, t } = useI18n()

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
                {t('layout.tagline')}
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <div
              className="flex rounded-full border border-stone-200 bg-stone-50/80 p-0.5 text-xs font-bold shadow-sm"
              role="group"
              aria-label={t('lang.label')}
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`rounded-full px-2.5 py-1.5 transition ${
                  lang === 'en'
                    ? 'bg-white text-bridge-800 shadow-sm ring-1 ring-bridge-200/80'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                {t('lang.enShort')}
              </button>
              <button
                type="button"
                onClick={() => setLang('zh')}
                className={`rounded-full px-2.5 py-1.5 transition ${
                  lang === 'zh'
                    ? 'bg-white text-bridge-800 shadow-sm ring-1 ring-bridge-200/80'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                {t('lang.zhShort')}
              </button>
            </div>

            <nav
              className="hidden items-center gap-0.5 text-sm font-semibold lg:flex"
              aria-label={t('layout.mainNav')}
            >
              {navConfig.map(({ to, key }) => {
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
                    {t(`nav.${key}`)}
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
                {t('nav.github')}
              </a>
            </nav>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-stone-200 bg-white p-2.5 text-stone-700 shadow-sm lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? t('layout.closeMenu') : t('layout.openMenu')}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <IconX className="size-6" /> : <IconMenu className="size-6" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-nav"
            className="border-t border-stone-200 bg-white px-4 py-4 shadow-lg lg:hidden"
          >
            <div className="mb-3 flex justify-center">
              <div className="flex rounded-full border border-stone-200 bg-stone-50 p-0.5 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`rounded-full px-3 py-1.5 ${lang === 'en' ? 'bg-white shadow-sm' : ''}`}
                >
                  {t('lang.enShort')}
                </button>
                <button
                  type="button"
                  onClick={() => setLang('zh')}
                  className={`rounded-full px-3 py-1.5 ${lang === 'zh' ? 'bg-white shadow-sm' : ''}`}
                >
                  {t('lang.zhShort')}
                </button>
              </div>
            </div>
            <nav className="flex flex-col gap-1 font-semibold" aria-label={t('layout.mobileNav')}>
              {navConfig.map(({ to, key }) => {
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
                    {t(`nav.${key}`)}
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
                {t('nav.githubRepo')}
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
            <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-600">{t('footer.blurb')}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
              {t('footer.toolkit')}
            </p>
            <ul className="mt-3 space-y-2 text-sm font-medium">
              <li>
                <Link to="/program" className="text-stone-600 hover:text-bridge-700">
                  {t('footer.weekProgram')}
                </Link>
              </li>
              <li>
                <Link to="/generator" className="text-stone-600 hover:text-bridge-700">
                  {t('footer.generator')}
                </Link>
              </li>
              <li>
                <Link to="/log" className="text-stone-600 hover:text-bridge-700">
                  {t('footer.iterationLog')}
                </Link>
              </li>
              <li>
                <Link to="/calibration" className="text-stone-600 hover:text-bridge-700">
                  {t('footer.calibrationLab')}
                </Link>
              </li>
              <li>
                <Link to="/perspective" className="text-stone-600 hover:text-bridge-700">
                  {t('footer.perspectiveLab')}
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-stone-600 hover:text-bridge-700">
                  {t('footer.communityShares')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
              {t('footer.project')}
            </p>
            <ul className="mt-3 space-y-2 text-sm font-medium">
              <li>
                <Link to="/safety" className="text-stone-600 hover:text-bridge-700">
                  {t('footer.safetyScope')}
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-stone-600 hover:text-bridge-700">
                  {t('footer.supportCrisis')}
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
                  {t('footer.sourceGithub')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-100 py-6 text-center text-xs text-stone-400">
          © {new Date().getFullYear()} {t('footer.copyright')}
        </div>
      </footer>
    </div>
  )
}
