import { useMemo, useState } from 'react'
import { WEEKS } from '../data/weeks'
import { buildPack, type GeneratorInput } from '../lib/generator'

const defaultInput: GeneratorInput = {
  siteName: 'Afterschool SEL pilot',
  leaderName: '',
  gradeBand: '2-4',
  weekFocus: 1,
  conflicts: '',
  trustedAdultLabel: 'the on-duty teacher',
  includeZh: true,
}

export function Generator() {
  const [form, setForm] = useState<GeneratorInput>(defaultInput)
  const pack = useMemo(() => buildPack(form), [form])

  const print = () => window.print()

  return (
    <div className="space-y-10">
      <div className="no-print">
        <h1 className="font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
          Session & parent one-pager generator
        </h1>
        <p className="mt-3 max-w-2xl text-stone-600">
          Fill the form, then print or save as PDF from your browser. Custom scenario lines
          override the defaults for this week.
        </p>
      </div>

      <div className="no-print grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr]">
        <form className="space-y-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <label className="block text-sm font-medium text-stone-700">
            Site / cohort name
            <input
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none ring-bridge-500/30 focus:ring-2"
              value={form.siteName}
              onChange={(e) => setForm({ ...form, siteName: e.target.value })}
            />
          </label>
          <label className="block text-sm font-medium text-stone-700">
            Facilitator name
            <input
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none ring-bridge-500/30 focus:ring-2"
              value={form.leaderName}
              onChange={(e) => setForm({ ...form, leaderName: e.target.value })}
              placeholder="Optional"
            />
          </label>
          <label className="block text-sm font-medium text-stone-700">
            Grade band
            <select
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none ring-bridge-500/30 focus:ring-2"
              value={form.gradeBand}
              onChange={(e) =>
                setForm({ ...form, gradeBand: e.target.value as GeneratorInput['gradeBand'] })
              }
            >
              <option value="2-4">Grades 2–4</option>
              <option value="5-6">Grades 5–6</option>
              <option value="7-8">Grades 7–8</option>
            </select>
          </label>
          <label className="block text-sm font-medium text-stone-700">
            Week focus
            <select
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none ring-bridge-500/30 focus:ring-2"
              value={form.weekFocus}
              onChange={(e) => setForm({ ...form, weekFocus: Number(e.target.value) })}
            >
              {WEEKS.map((w) => (
                <option key={w.week} value={w.week}>
                  Week {w.week}: {w.title}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-medium text-stone-700">
            Trusted adult label (appears on parent sheet)
            <input
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none ring-bridge-500/30 focus:ring-2"
              value={form.trustedAdultLabel}
              onChange={(e) => setForm({ ...form, trustedAdultLabel: e.target.value })}
            />
          </label>
          <label className="block text-sm font-medium text-stone-700">
            Custom scenarios (one per line)
            <textarea
              rows={5}
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 font-mono text-sm text-stone-900 outline-none ring-bridge-500/30 focus:ring-2"
              value={form.conflicts}
              onChange={(e) => setForm({ ...form, conflicts: e.target.value })}
              placeholder="e.g., Someone copied my answer in math.&#10;Kids laugh when I read aloud."
            />
          </label>
          <label className="flex items-center gap-2 text-sm font-medium text-stone-700">
            <input
              type="checkbox"
              checked={form.includeZh}
              onChange={(e) => setForm({ ...form, includeZh: e.target.checked })}
              className="size-4 rounded border-stone-400 text-bridge-600"
            />
            Include Chinese parent one-pager
          </label>
          <button
            type="button"
            onClick={print}
            className="w-full rounded-full bg-bridge-600 py-3 text-sm font-semibold text-white shadow hover:bg-bridge-500"
          >
            Print / Save as PDF
          </button>
        </form>

        <p className="text-sm text-stone-500 lg:hidden">
          Preview below — use Print on desktop for best layout.
        </p>
      </div>

      {/* Printable area */}
      <article
        id="print-pack"
        className="print:shadow-none space-y-10 rounded-2xl border border-stone-200 bg-white p-8 shadow-md print:border-0 print:p-0"
      >
        <header className="border-b border-stone-200 pb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-bridge-600">
            Same-Week Bridge
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-stone-900">
            {pack.sessionRunsheet.header}
          </h2>
          {pack.sessionRunsheet.leader ? (
            <p className="mt-1 text-sm text-stone-600">
              Facilitator: {pack.sessionRunsheet.leader}
            </p>
          ) : null}
          <p className="mt-2 text-sm text-stone-600">
            Grade band {pack.sessionRunsheet.gradeBand} — {pack.sessionRunsheet.gradeNote}
          </p>
        </header>

        <section>
          <h3 className="font-display text-lg font-semibold text-stone-900">Session run-sheet</h3>
          <table className="mt-3 w-full text-left text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-xs uppercase text-stone-500">
                <th className="py-2 pr-4">Time</th>
                <th className="py-2 pr-4">Segment</th>
                <th className="py-2">Facilitator note</th>
              </tr>
            </thead>
            <tbody>
              {pack.sessionRunsheet.skeleton.map((row) => (
                <tr key={row.t} className="border-b border-stone-100 align-top">
                  <td className="py-3 pr-4 font-mono text-bridge-700">{row.t}</td>
                  <td className="py-3 pr-4 font-medium text-stone-800">{row.label}</td>
                  <td className="py-3 text-stone-600">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 rounded-xl bg-stone-50 p-4 text-sm">
            <p className="font-semibold text-stone-800">Week focus</p>
            <p className="mt-1 text-stone-600">{pack.week.skills}</p>
            <p className="mt-3 font-semibold text-stone-800">Scenario cards (customize verbally)</p>
            <ul className="mt-1 list-inside list-disc text-stone-700">
              {pack.sessionRunsheet.scenarios.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="mt-3 font-semibold text-stone-800">Golden phrases</p>
            <ul className="mt-1 list-inside list-disc text-stone-700">
              {pack.week.mantraEn.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-stone-500">Coach note: {pack.week.teacherNote}</p>
          </div>
        </section>

        <section className="break-inside-avoid-page">
          <h3 className="font-display text-lg font-semibold text-stone-900">
            Parent one-pager — English
          </h3>
          <div className="mt-3 rounded-xl border border-bridge-100 bg-bridge-50/40 p-5 text-sm leading-relaxed">
            <p className="font-semibold text-bridge-900">{pack.parentEn.title}</p>
            <p className="mt-2 text-stone-700">{pack.parentEn.lead}</p>
            <p className="mt-4 font-semibold text-stone-800">Try at home</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-stone-700">
              {pack.parentEn.tryAtHome.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p className="mt-4 font-semibold text-stone-800">Phrases we practiced</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-stone-700">
              {pack.parentEn.phrases.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-stone-800">Class scenarios this week</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-stone-700">
              {pack.parentEn.scenarios.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        {pack.parentZh ? (
          <section className="break-inside-avoid-page">
            <h3 className="font-display text-lg font-semibold text-stone-900">
              家长一页纸 — 中文
            </h3>
            <div className="mt-3 rounded-xl border border-stone-200 bg-white p-5 text-sm leading-relaxed">
              <p className="font-semibold text-stone-900">{pack.parentZh.title}</p>
              <p className="mt-2 text-stone-700">{pack.parentZh.lead}</p>
              <p className="mt-4 font-semibold text-stone-800">在家可以试试</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-stone-700">
                {pack.parentZh.tryAtHome.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <p className="mt-4 font-semibold text-stone-800">本周练习句式</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-stone-700">
                {pack.parentZh.phrases.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="mt-4 font-semibold text-stone-800">课堂情境示例</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-stone-700">
                {pack.parentZh.scenarios.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section>
          <h3 className="font-display text-lg font-semibold text-stone-900">
            {pack.observation.title}
          </h3>
          <ul className="mt-2 list-inside list-disc text-sm text-stone-700">
            {pack.observation.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>

        <footer className="border-t border-stone-200 pt-4 text-xs text-stone-500">
          Same-Week Bridge · Not a medical or mental-health service · Crisis: call local
          emergency number or 988 (US).
        </footer>
      </article>
    </div>
  )
}
