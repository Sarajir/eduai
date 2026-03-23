import { PROGRAM_GOAL, SESSION_SKELETON, WEEKS } from '../data/weeks'

export function Program() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
          8-week “Say-It” arc
        </h1>
        <p className="mt-4 max-w-3xl text-stone-600">{PROGRAM_GOAL}</p>
      </div>

      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-stone-900">
          Session skeleton (every week)
        </h2>
        <ul className="mt-4 space-y-3">
          {SESSION_SKELETON.map((row) => (
            <li
              key={row.t}
              className="flex flex-col gap-1 border-b border-stone-100 pb-3 last:border-0 sm:flex-row sm:items-start sm:gap-6"
            >
              <span className="shrink-0 font-mono text-sm text-bridge-600">{row.t}</span>
              <div>
                <p className="font-semibold text-stone-800">{row.label}</p>
                <p className="text-sm text-stone-600">{row.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <ol className="space-y-6">
        {WEEKS.map((w) => (
          <li
            key={w.week}
            className="rounded-2xl border border-stone-200 bg-white/90 p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="rounded-full bg-bridge-100 px-3 py-0.5 text-xs font-bold text-bridge-800">
                Week {w.week}
              </span>
              <h3 className="font-display text-xl font-semibold text-stone-900">
                {w.title}
              </h3>
            </div>
            <p className="mt-2 text-sm text-stone-600">{w.skills}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                  Golden phrases (EN)
                </p>
                <ul className="mt-1 list-inside list-disc text-sm text-stone-800">
                  {w.mantraEn.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                  句式参考（中文）
                </p>
                <ul className="mt-1 list-inside list-disc text-sm text-stone-800">
                  {w.mantraZh.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                Starter scenarios
              </p>
              <ul className="mt-1 list-inside list-disc text-sm text-stone-700">
                {w.scenarios.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <p className="mt-3 text-sm italic text-stone-500">Coach note: {w.teacherNote}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
