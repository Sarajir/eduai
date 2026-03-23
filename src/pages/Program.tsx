import { Link } from 'react-router-dom'
import { IconChevronDown } from '../components/icons'
import { PageHeader } from '../components/PageHeader'
import { PROGRAM_GOAL, SESSION_SKELETON, WEEKS } from '../data/weeks'

export function Program() {
  return (
    <div>
      <PageHeader
        eyebrow="Curriculum"
        title="8-week “Say-It” arc"
        description={PROGRAM_GOAL}
      >
        <Link
          to="/generator"
          className="inline-flex rounded-full bg-bridge-600 px-5 py-2.5 text-sm font-bold text-white shadow hover:bg-bridge-500"
        >
          Generate materials for a week →
        </Link>
      </PageHeader>

      <section className="mb-12 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="font-display text-xl font-semibold text-stone-900">
          Session skeleton (repeat every week)
        </h2>
        <p className="mt-2 text-sm text-stone-600">
          Same structure builds predictability; only scenarios and phrases change.
        </p>
        <ul className="mt-6 space-y-0 divide-y divide-stone-100 rounded-xl border border-stone-100 bg-stone-50/50">
          {SESSION_SKELETON.map((row) => (
            <li
              key={row.t}
              className="flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-center sm:gap-8"
            >
              <span className="shrink-0 font-mono text-sm font-semibold text-bridge-700">
                {row.t}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-stone-900">{row.label}</p>
                <p className="text-sm text-stone-600">{row.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="mb-6 flex flex-wrap gap-2">
        {WEEKS.map((w) => (
          <a
            key={w.week}
            href={`#week-${w.week}`}
            className="inline-flex size-10 items-center justify-center rounded-full border border-stone-200 bg-white text-sm font-bold text-stone-700 shadow-sm transition hover:border-bridge-300 hover:bg-bridge-50 hover:text-bridge-900"
          >
            {w.week}
          </a>
        ))}
      </div>

      <div className="space-y-4">
        {WEEKS.map((w) => (
          <details
            key={w.week}
            id={`week-${w.week}`}
            className="group rounded-2xl border border-stone-200/90 bg-white shadow-sm open:shadow-md open:ring-1 open:ring-bridge-200/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-bridge-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-bridge-800">
                  Week {w.week}
                </span>
                <span className="font-display text-lg font-semibold text-stone-900">
                  {w.title}
                </span>
              </div>
              <IconChevronDown className="size-5 shrink-0 text-stone-400 transition group-open:rotate-180" />
            </summary>
            <div className="border-t border-stone-100 px-6 pb-6 pt-2">
              <p className="text-sm leading-relaxed text-stone-600">{w.skills}</p>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-stone-100 bg-stone-50/80 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Golden phrases (EN)
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm font-medium text-stone-800">
                    {w.mantraEn.map((m) => (
                      <li key={m} className="flex gap-2">
                        <span className="text-bridge-500">·</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-bridge-100 bg-bridge-50/40 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-bridge-800">
                    句式参考（中文）
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm font-medium text-stone-800">
                    {w.mantraZh.map((m) => (
                      <li key={m} className="flex gap-2">
                        <span className="text-bridge-600">·</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Starter scenarios
                </p>
                <ul className="mt-2 list-inside list-disc text-sm text-stone-700">
                  {w.scenarios.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 rounded-lg border border-amber-200/60 bg-amber-50/50 px-3 py-2 text-sm text-amber-950">
                <span className="font-semibold">Coach note:</span> {w.teacherNote}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
