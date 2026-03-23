import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="space-y-14">
      <section className="text-center sm:text-left">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-bridge-600">
          SEL pilot toolkit
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
          Align a short classroom kernel with{' '}
          <span className="text-bridge-600">same-week</span> family practice.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600 sm:mx-0">
          Same-Week Bridge helps teachers and community educators run an 8-week “Say-It”
          sequence: feelings → body cues → requests → help-seeking. Generate session
          run-sheets, bilingual parent one-pagers, and quick iteration notes—without
          replacing your district SEL platform.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          <Link
            to="/generator"
            className="inline-flex items-center justify-center rounded-full bg-bridge-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-bridge-600/20 transition hover:bg-bridge-500"
          >
            Open generator
          </Link>
          <Link
            to="/program"
            className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-bridge-500 hover:text-bridge-800"
          >
            View 8-week arc
          </Link>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        {[
          {
            title: 'Classroom kernel',
            body: '25–30 minute repeatable structure: check-in, warm-up, scenario, pairs, close.',
          },
          {
            title: 'Family micro-practice',
            body: 'One page in English and optional Chinese—what to try at home without homework overload.',
          },
          {
            title: 'Iteration log',
            body: 'Store lightweight reflections after each session; export JSON for your portfolio or IRB-adjacent pilots.',
          },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-stone-200 bg-white/80 p-6 shadow-sm"
          >
            <h2 className="font-display text-lg font-semibold text-stone-900">{c.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{c.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-bridge-100 bg-bridge-50/60 p-8">
        <h2 className="font-display text-2xl font-semibold text-bridge-900">
          Why this exists
        </h2>
        <p className="mt-4 max-w-3xl text-stone-700">
          District SEL suites handle scope and data. Parent apps handle messaging. Same-Week
          Bridge fills the gap:{' '}
          <strong className="font-medium text-stone-900">
            one skill per week, practiced in class and named at home
          </strong>
          , with space to revise phrasing after you watch real kids respond.
        </p>
      </section>
    </div>
  )
}
