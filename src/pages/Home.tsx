import { Link } from 'react-router-dom'
import { IconBook, IconGlobe, IconRefresh, IconSparkles, IconUsers } from '../components/icons'

const features = [
  {
    title: 'Classroom kernel',
    body: 'A repeatable 25–30 minute arc: check-in, warm-up, scenario practice, pairs, and a confident close.',
    icon: IconBook,
    accent: 'from-bridge-500/15 to-teal-400/5',
  },
  {
    title: 'Family micro-practice',
    body: 'One page per week in English and optional Chinese—concrete “try at home” steps without homework overload.',
    icon: IconGlobe,
    accent: 'from-emerald-500/15 to-bridge-400/5',
  },
  {
    title: 'Iteration log',
    body: 'Capture what felt sticky after each session and export JSON for portfolios or small-scale pilots.',
    icon: IconRefresh,
    accent: 'from-cyan-500/12 to-bridge-500/8',
  },
]

const steps = [
  {
    n: '01',
    title: 'Pick your week',
    body: 'Match the generator to the arc—or drop in your own scenario lines from the classroom.',
  },
  {
    n: '02',
    title: 'Print the pack',
    body: 'Session run-sheet, parent one-pager, and a 60-second educator check list—ready for clipboards.',
  },
  {
    n: '03',
    title: 'Revise with evidence',
    body: 'Log participation and phrasing tweaks; run a second pass after you see how students respond.',
  },
]

export function Home() {
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
              SEL pilot toolkit
            </p>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-stone-900 sm:text-5xl lg:text-[3.25rem]">
              One skill each week—
              <span className="text-bridge-600"> in class</span>, then{' '}
              <span className="text-bridge-700">at home</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
              Same-Week Bridge helps educators run an 8-week “Say-It” sequence: feelings,
              body cues, requests, and help-seeking—without replacing your district SEL suite or
              parent messaging apps.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/generator"
                className="inline-flex items-center justify-center rounded-full bg-bridge-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-bridge-600/25 transition hover:bg-bridge-500 hover:shadow-bridge-500/30"
              >
                Open generator
              </Link>
              <Link
                to="/program"
                className="inline-flex items-center justify-center rounded-full border-2 border-stone-200 bg-white px-7 py-3.5 text-sm font-bold text-stone-800 transition hover:border-bridge-300 hover:text-bridge-800"
              >
                Explore 8-week arc
              </Link>
            </div>
            <p className="mt-8 text-sm text-stone-500">
              No accounts required · Runs in the browser · Printable packets
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="bg-dot-grid rounded-2xl border border-stone-200/90 bg-gradient-to-b from-white to-bridge-50/40 p-6 shadow-inner">
              <p className="text-xs font-bold uppercase tracking-wider text-bridge-700">
                Same-week loop
              </p>
              <div className="mt-5 space-y-4">
                {[
                  { label: 'Classroom', sub: 'Short kernel + phrases', tone: 'bg-bridge-600' },
                  { label: 'Family', sub: '1-page micro-practice', tone: 'bg-bridge-500' },
                  { label: 'Reflect', sub: 'Log & revise wording', tone: 'bg-bridge-400' },
                ].map((row, i) => (
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
                <strong className="font-semibold">Designed for pilots.</strong> Pair with a
                trusted on-site staff member and your local consent practices—see{' '}
                <Link to="/safety" className="font-semibold text-bridge-800 underline-offset-2 hover:underline">
                  safety & scope
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
            Everything you need for a tight 8-week loop
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-stone-600 sm:mx-0">
            Three pillars that map cleanly to classroom facilitation, family partnership, and
            design-based iteration.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map(({ title, body, icon: Icon, accent }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition group-hover:opacity-100`}
                aria-hidden
              />
              <div className="relative">
                <div className="inline-flex rounded-xl bg-bridge-100 p-3 text-bridge-700 ring-1 ring-bridge-200/60">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold text-stone-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-stone-200 bg-gradient-to-br from-white via-bridge-50/30 to-white p-8 sm:p-12">
        <h2 className="font-display text-center text-2xl font-semibold text-stone-900 sm:text-3xl">
          How educators use it
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
            Start logging sessions
          </Link>
          <Link
            to="/publish"
            className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-bold text-stone-800 hover:border-bridge-400"
          >
            Deploy this site
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-bridge-200 bg-bridge-900 px-8 py-12 text-center text-bridge-50 sm:px-12">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          Ready to print your first packet?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-bridge-100/90">
          Choose a week, add your real classroom scenarios, and generate bilingual take-home
          pages in one pass.
        </p>
        <Link
          to="/generator"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-bridge-900 shadow-lg transition hover:bg-bridge-50"
        >
          Go to generator
        </Link>
      </section>
    </div>
  )
}
