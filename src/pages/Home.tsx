import { Link } from 'react-router-dom'
import { IconBook, IconGlobe, IconRefresh, IconSparkles, IconUsers } from '../components/icons'
import { useI18n } from '../i18n/context'

export function Home() {
  const { t } = useI18n()

  const features = [
    {
      title: t('home.f1t'),
      body: t('home.f1b'),
      icon: IconBook,
      accent: 'from-bridge-500/15 to-teal-400/5',
    },
    {
      title: t('home.f2t'),
      body: t('home.f2b'),
      icon: IconGlobe,
      accent: 'from-emerald-500/15 to-bridge-400/5',
    },
    {
      title: t('home.f3t'),
      body: t('home.f3b'),
      icon: IconRefresh,
      accent: 'from-cyan-500/12 to-bridge-500/8',
    },
  ]

  const steps = [
    { n: '01', title: t('home.s1t'), body: t('home.s1b') },
    { n: '02', title: t('home.s2t'), body: t('home.s2b') },
    { n: '03', title: t('home.s3t'), body: t('home.s3b') },
  ]

  const loopRows = [
    { label: t('home.loop1l'), sub: t('home.loop1s'), tone: 'bg-bridge-600' },
    { label: t('home.loop2l'), sub: t('home.loop2s'), tone: 'bg-bridge-500' },
    { label: t('home.loop3l'), sub: t('home.loop3s'), tone: 'bg-bridge-400' },
  ]

  return (
    <div className="space-y-20 sm:space-y-24">
      <section className="relative overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-[0_24px_80px_-20px_rgba(15,118,110,0.15)]">
        <div
          className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-gradient-to-br from-bridge-200/50 via-bridge-100/30 to-transparent blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-20 size-[360px] rounded-full bg-gradient-to-tr from-teal-200/40 to-transparent blur-2xl"
          aria-hidden
        />
        <div className="relative grid gap-10 p-8 sm:grid-cols-[1.15fr_0.85fr] sm:gap-12 sm:p-12 lg:p-14">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-bridge-200/80 bg-bridge-50/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-bridge-800">
              <IconSparkles className="size-3.5 text-bridge-600" />
              {t('home.badge')}
            </p>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-stone-900 sm:text-5xl lg:text-[3.25rem]">
              {t('home.h1a')}
              <span className="text-bridge-600"> {t('home.h1b')}</span>
              {t('home.h1c')}
              <span className="text-bridge-700"> {t('home.h1d')}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">{t('home.intro')}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/generator"
                className="inline-flex items-center justify-center rounded-full bg-bridge-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-bridge-600/25 transition hover:bg-bridge-500 hover:shadow-bridge-500/30"
              >
                {t('home.ctaGenerator')}
              </Link>
              <Link
                to="/program"
                className="inline-flex items-center justify-center rounded-full border-2 border-stone-200 bg-white px-7 py-3.5 text-sm font-bold text-stone-800 transition hover:border-bridge-300 hover:text-bridge-800"
              >
                {t('home.ctaProgram')}
              </Link>
            </div>
            <p className="mt-8 text-sm text-stone-500">{t('home.meta')}</p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="bg-dot-grid rounded-2xl border border-stone-200/90 bg-gradient-to-b from-white to-bridge-50/40 p-6 shadow-inner">
              <p className="text-xs font-bold uppercase tracking-wider text-bridge-700">
                {t('home.loopTitle')}
              </p>
              <div className="mt-5 space-y-4">
                {loopRows.map((row, i) => (
                  <div key={row.label} className="flex items-center gap-3">
                    <div
                      className={`flex size-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white shadow-md ${row.tone}`}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-stone-900">{row.label}</p>
                      <p className="text-sm text-stone-600">{row.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-amber-200/80 bg-amber-50/60 p-4 text-sm text-amber-950">
              <IconUsers className="mt-0.5 size-5 shrink-0 text-amber-700" />
              <p>
                <strong className="font-semibold">{t('home.pilotTitle')}</strong> {t('home.pilotBody')}{' '}
                <Link
                  to="/safety"
                  className="font-semibold text-bridge-800 underline-offset-2 hover:underline"
                >
                  {t('home.pilotLink')}
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center sm:text-left">
          <h2 className="font-display text-2xl font-semibold text-stone-900 sm:text-3xl">
            {t('home.pillarsTitle')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-stone-600 sm:mx-0">{t('home.pillarsSub')}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 transition group-hover:opacity-100`}
                aria-hidden
              />
              <div className="relative">
                <div className="inline-flex rounded-xl bg-bridge-100 p-3 text-bridge-700 ring-1 ring-bridge-200/60">
                  <item.icon className="size-6" />
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-stone-200 bg-gradient-to-br from-white via-bridge-50/30 to-white p-8 sm:p-12">
        <h2 className="font-display text-center text-2xl font-semibold text-stone-900 sm:text-3xl">
          {t('home.howTitle')}
        </h2>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative text-center md:text-left">
              <span className="font-display text-4xl font-semibold text-bridge-200">{s.n}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-stone-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            to="/log"
            className="rounded-full bg-bridge-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-bridge-500"
          >
            {t('home.btnLog')}
          </Link>
          <Link
            to="/publish"
            className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-bold text-stone-800 hover:border-bridge-400"
          >
            {t('home.btnDeploy')}
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
            {t('home.labEyebrow')}
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-stone-900 sm:text-3xl">
            {t('home.labTitle')}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-stone-600 sm:mx-0">
            {t('home.labBody')} <strong className="text-stone-800">{t('home.labBold1')}</strong>{' '}
            {t('home.labMid')} <strong className="text-stone-800">{t('home.labBold2')}</strong>{' '}
            {t('home.labTail')}
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            to="/calibration"
            className="group rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50/90 to-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              {t('home.calEyebrow')}
            </p>
            <h3 className="font-display mt-2 text-xl font-semibold text-stone-900">{t('home.calTitle')}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{t('home.calBody')}</p>
            <span className="mt-4 inline-flex text-sm font-bold text-violet-700 group-hover:underline">
              {t('home.calCta')}
            </span>
          </Link>
          <Link
            to="/perspective"
            className="group rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50/90 to-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
              {t('home.perEyebrow')}
            </p>
            <h3 className="font-display mt-2 text-xl font-semibold text-stone-900">{t('home.perTitle')}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{t('home.perBody')}</p>
            <span className="mt-4 inline-flex text-sm font-bold text-sky-700 group-hover:underline">
              {t('home.perCta')}
            </span>
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-bridge-200 bg-bridge-900 px-8 py-12 text-center text-bridge-50 sm:px-12">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">{t('home.finalTitle')}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-bridge-100/90">
          {t('home.finalBody')}
        </p>
        <Link
          to="/generator"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-bridge-900 shadow-lg transition hover:bg-bridge-50"
        >
          {t('home.finalCta')}
        </Link>
      </section>
    </div>
  )
}
