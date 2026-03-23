import { useMemo, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { buildCalibrationPack, type CalibrationInput } from '../lib/calibrationPack'

const defaultIn: CalibrationInput = {
  cohortLabel: 'Afterschool cohort',
  focus: 'math',
  gradeBand: '5-6',
  classContext: 'Students rush and skip checking their work when problems look familiar.',
  taskDescription: 'Two short word problems + one “explain your steps” prompt (10 minutes max).',
}

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-stone-900 shadow-sm outline-none focus:border-bridge-300 focus:ring-2 focus:ring-bridge-500/20'

export function CalibrationLab() {
  const [form, setForm] = useState<CalibrationInput>(defaultIn)
  const pack = useMemo(() => buildCalibrationPack(form), [form])

  return (
    <div className="space-y-10">
      <div className="no-print">
        <PageHeader
          eyebrow="Learning science lab"
          title="Calibration Studio"
          description={
            <>
              A printable <strong>predict → try → compare</strong> micro-protocol to practice
              metacognitive calibration in class. It complements the SEL generator: here the focus
              is how students <em>judge</em> their own performance before and after a bounded
              task. Aligns with common classroom calibration cycles discussed in metacognition
              research (predictive monitoring before feedback).
            </>
          }
        />
        <p className="rounded-2xl border border-violet-200/80 bg-violet-50/60 px-4 py-3 text-sm text-violet-950">
          <strong>No server AI.</strong> You type the context; the site assembles facilitator
          language you should still edit for your students. Not therapy or testing—skill practice
          only.
        </p>
      </div>

      <div className="no-print grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-start">
        <form className="space-y-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
          <label className="block text-sm font-semibold text-stone-700">
            Cohort / class label
            <input
              className={fieldClass}
              value={form.cohortLabel}
              onChange={(e) => setForm({ ...form, cohortLabel: e.target.value })}
            />
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            Focus domain
            <select
              className={fieldClass}
              value={form.focus}
              onChange={(e) =>
                setForm({ ...form, focus: e.target.value as CalibrationInput['focus'] })
              }
            >
              <option value="math">Math / problem solving</option>
              <option value="reading">Reading</option>
              <option value="science">Science reasoning</option>
              <option value="emotion-vocab">Emotion vocabulary</option>
              <option value="mixed">Mixed skills</option>
            </select>
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            Grade band
            <select
              className={fieldClass}
              value={form.gradeBand}
              onChange={(e) =>
                setForm({ ...form, gradeBand: e.target.value as CalibrationInput['gradeBand'] })
              }
            >
              <option value="2-4">2–4</option>
              <option value="5-6">5–6</option>
              <option value="7-8">7–8</option>
            </select>
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            Class context
            <textarea
              rows={3}
              className={fieldClass}
              value={form.classContext}
              onChange={(e) => setForm({ ...form, classContext: e.target.value })}
            />
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            Task description (what students will attempt)
            <textarea
              rows={3}
              className={fieldClass}
              value={form.taskDescription}
              onChange={(e) => setForm({ ...form, taskDescription: e.target.value })}
            />
          </label>
          <button
            type="button"
            onClick={() => window.print()}
            className="w-full rounded-full bg-violet-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-600/25 hover:bg-violet-500"
          >
            Print / Save PDF
          </button>
        </form>
        <p className="text-sm text-stone-500 lg:hidden">Scroll for the printable pack preview.</p>
      </div>

      <article className="space-y-8 rounded-3xl border border-stone-200 bg-white p-8 shadow-lg print:border-0 print:shadow-none sm:p-10">
        <header className="border-b border-stone-200 pb-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600">
            Calibration Lab
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-stone-900">{pack.title}</h2>
          <p className="mt-1 text-sm font-medium text-stone-600">{pack.subtitle}</p>
          <p className="mt-4 rounded-xl bg-stone-50 p-4 text-sm leading-relaxed text-stone-700">
            <span className="font-semibold text-stone-900">Why this structure:</span> {pack.researchNote}
          </p>
          <p className="mt-3 text-sm text-bridge-800">
            <span className="font-semibold">Grade-band tip:</span> {pack.gradeHint}
          </p>
        </header>

        <section>
          <h3 className="font-display text-xl font-semibold text-stone-900">Facilitator timeline</h3>
          <ol className="mt-4 space-y-4">
            {pack.facilitatorSteps.map((s, i) => (
              <li
                key={s.title}
                className="rounded-2xl border border-stone-100 bg-stone-50/80 p-4 sm:p-5"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-violet-700">
                  Step {i + 1} · {s.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="break-inside-avoid-page">
          <h3 className="font-display text-xl font-semibold text-stone-900">
            Student calibration slips (duplicate & cut)
          </h3>
          <div className="mt-4 rounded-2xl border border-dashed border-stone-300 bg-white p-6">
            <ul className="space-y-2 font-mono text-sm text-stone-800">
              {pack.slips.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="border-t border-stone-200 pt-4 text-xs text-stone-500">{pack.footer}</footer>
      </article>
    </div>
  )
}
