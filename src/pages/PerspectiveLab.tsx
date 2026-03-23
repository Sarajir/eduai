import { useMemo, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { buildPerspectivePack, type PerspectiveInput } from '../lib/perspectivePack'

const defaultIn: PerspectiveInput = {
  unitTitle: 'Line at the library — two stories',
  scenario:
    'Two students both believe they were first in line. One was saving a spot for a friend; the other arrived alone and stood behind an empty backpack.',
  gradeBand: '5-6',
  labelA: 'Student A (saved a spot)',
  labelB: 'Student B (stood in line alone)',
}

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-stone-900 shadow-sm outline-none focus:border-bridge-300 focus:ring-2 focus:ring-bridge-500/20'

export function PerspectiveLab() {
  const [form, setForm] = useState<PerspectiveInput>(defaultIn)
  const pack = useMemo(() => buildPerspectivePack(form), [form])

  return (
    <div className="space-y-10">
      <div className="no-print">
        <PageHeader
          eyebrow="Learning science lab"
          title="Perspective Card Studio"
          description={
            <>
              Generate <strong>two-viewpoint</strong> discussion scaffolds for a conflict or
              misunderstanding you paste in. Designed for facilitated circles or advisory—
              <strong> you review every word</strong> before using it live. Pairs well with SEL
              work on communication; it does not generate images or diagnose students.
            </>
          }
        />
        <p className="rounded-2xl border border-sky-200/80 bg-sky-50/70 px-4 py-3 text-sm text-sky-950">
          Use neutral labels (roles, not real names). If harm or harassment is involved, follow
          your school investigation process—this printable is only a discussion aid.
        </p>
      </div>

      <div className="no-print grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-start">
        <form className="space-y-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
          <label className="block text-sm font-semibold text-stone-700">
            Unit / lesson title
            <input
              className={fieldClass}
              value={form.unitTitle}
              onChange={(e) => setForm({ ...form, unitTitle: e.target.value })}
            />
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            Scenario (neutral description)
            <textarea
              rows={5}
              className={fieldClass}
              value={form.scenario}
              onChange={(e) => setForm({ ...form, scenario: e.target.value })}
            />
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            Grade band
            <select
              className={fieldClass}
              value={form.gradeBand}
              onChange={(e) =>
                setForm({ ...form, gradeBand: e.target.value as PerspectiveInput['gradeBand'] })
              }
            >
              <option value="2-4">2–4</option>
              <option value="5-6">5–6</option>
              <option value="7-8">7–8</option>
            </select>
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            Label for viewpoint A
            <input
              className={fieldClass}
              value={form.labelA}
              onChange={(e) => setForm({ ...form, labelA: e.target.value })}
            />
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            Label for viewpoint B
            <input
              className={fieldClass}
              value={form.labelB}
              onChange={(e) => setForm({ ...form, labelB: e.target.value })}
            />
          </label>
          <button
            type="button"
            onClick={() => window.print()}
            className="w-full rounded-full bg-sky-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/25 hover:bg-sky-500"
          >
            Print / Save PDF
          </button>
        </form>
        <p className="text-sm text-stone-500 lg:hidden">Scroll for printable cards.</p>
      </div>

      <article className="space-y-8 rounded-3xl border border-stone-200 bg-white p-8 shadow-lg print:border-0 print:shadow-none sm:p-10">
        <header className="border-b border-stone-200 pb-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-600">
            Perspective Lab
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-stone-900">{pack.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-700">
            <span className="font-semibold text-stone-900">Scenario:</span> {pack.scenario}
          </p>
          <p className="mt-4 rounded-xl bg-sky-50/80 p-4 text-sm text-sky-950">
            <span className="font-semibold">Facilitation tone:</span> {pack.bandLanguage}
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50/90 to-white p-6">
            <h3 className="font-display text-lg font-semibold text-sky-950">Card A · {pack.labels.a}</h3>
            <ul className="mt-3 space-y-2 text-sm font-medium text-stone-800">
              {pack.stems.a.map((s) => (
                <li key={s} className="rounded-lg bg-white/80 px-3 py-2 ring-1 ring-sky-100">
                  {s}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/80 to-white p-6">
            <h3 className="font-display text-lg font-semibold text-indigo-950">
              Card B · {pack.labels.b}
            </h3>
            <ul className="mt-3 space-y-2 text-sm font-medium text-stone-800">
              {pack.stems.b.map((s) => (
                <li key={s} className="rounded-lg bg-white/80 px-3 py-2 ring-1 ring-indigo-100">
                  {s}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section>
          <h3 className="font-display text-xl font-semibold text-stone-900">Bridge questions</h3>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-stone-700">
            {pack.discussionQuestions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ol>
        </section>

        <section>
          <h3 className="font-display text-xl font-semibold text-stone-900">Facilitator script</h3>
          <ul className="mt-4 space-y-2 text-sm text-stone-700">
            {pack.facilitatorScript.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="text-sky-500">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="border-t border-stone-200 pt-4 text-xs text-stone-500">{pack.footer}</footer>
      </article>
    </div>
  )
}
