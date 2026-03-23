import { useMemo, useState } from 'react'
import { WEEKS } from '../data/weeks'
import { buildPack, type GeneratorInput } from '../lib/generator'
import { PageHeader } from '../components/PageHeader'

const defaultInput: GeneratorInput = {
  siteName: 'Afterschool SEL pilot',
  leaderName: '',
  gradeBand: '2-4',
  weekFocus: 1,
  conflicts: '',
  trustedAdultLabel: 'the on-duty teacher',
  includeZh: true,
}

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-stone-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-bridge-300 focus:ring-2 focus:ring-bridge-500/20'

export function Generator() {
  const [form, setForm] = useState<GeneratorInput>(defaultInput)
  const pack = useMemo(() => buildPack(form), [form])

  const print = () => window.print()

  return (
    <div className="space-y-10">
      <div className="no-print">
        <PageHeader
          eyebrow="Tools"
          title="Session & parent one-pager generator"
          description="Fill the form on the left (or top on mobile). The preview updates live. Print or save as PDF—custom scenario lines override the defaults for the week you pick."
        />
        <div className="flex flex-wrap gap-2">
          {['Form', 'Live preview', 'Print / PDF'].map((label, i) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-bold text-stone-600 shadow-sm"
            >
              <span className="flex size-5 items-center justify-center rounded-full bg-bridge-100 text-[10px] font-bold text-bridge-800">
                {i + 1}
              </span>
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="no-print grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start">
        <form className="space-y-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
          <label className="block text-sm font-semibold text-stone-700">
            Site / cohort name
            <input
              className={fieldClass}
              value={form.siteName}
              onChange={(e) => setForm({ ...form, siteName: e.target.value })}
            />
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            Facilitator name
            <input
              className={fieldClass}
              value={form.leaderName}
              onChange={(e) => setForm({ ...form, leaderName: e.target.value })}
              placeholder="Optional"
            />
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            Grade band
            <select
              className={fieldClass}
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
          <label className="block text-sm font-semibold text-stone-700">
            Week focus
            <select
              className={fieldClass}
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
          <label className="block text-sm font-semibold text-stone-700">
            Trusted adult label (parent sheet)
            <input
              className={fieldClass}
              value={form.trustedAdultLabel}
              onChange={(e) => setForm({ ...form, trustedAdultLabel: e.target.value })}
            />
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            Custom scenarios <span className="font-normal text-stone-500">(one per line)</span>
            <textarea
              rows={5}
              className={`${fieldClass} font-mono text-sm leading-relaxed`}
              value={form.conflicts}
              onChange={(e) => setForm({ ...form, conflicts: e.target.value })}
              placeholder={
                'Someone copied my answer in math.\nKids laugh when I read aloud.'
              }
            />
          </label>
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-stone-100 bg-stone-50/80 px-4 py-3 text-sm font-semibold text-stone-800">
            <input
              type="checkbox"
              checked={form.includeZh}
              onChange={(e) => setForm({ ...form, includeZh: e.target.checked })}
              className="size-4 rounded border-stone-300 text-bridge-600 focus:ring-bridge-500"
            />
            Include Chinese parent one-pager
          </label>
          <button
            type="button"
            onClick={print}
            className="w-full rounded-full bg-bridge-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-bridge-600/20 transition hover:bg-bridge-500"
          >
            Print / Save as PDF
          </button>
        </form>

        <div className="no-print rounded-2xl border border-dashed border-bridge-200/80 bg-bridge-50/30 p-4 text-sm text-bridge-900 lg:hidden">
          Scroll down for the live preview, then use Print for a clean layout.
        </div>
      </div>

      <article
        id="print-pack"
        className="print:shadow-none space-y-10 rounded-3xl border border-stone-200 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)] print:border-0 print:p-0 print:shadow-none sm:p-10"
      >
        <header className="border-b border-stone-200 pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-bridge-600">
            Same-Week Bridge
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-stone-900">
            {pack.sessionRunsheet.header}
          </h2>
          {pack.sessionRunsheet.leader ? (
            <p className="mt-2 text-sm text-stone-600">
              Facilitator: {pack.sessionRunsheet.leader}
            </p>
          ) : null}
          <p className="mt-2 text-sm text-stone-600">
            Grade band {pack.sessionRunsheet.gradeBand} — {pack.sessionRunsheet.gradeNote}
          </p>
        </header>

        <section>
          <h3 className="font-display text-xl font-semibold text-stone-900">Session run-sheet</h3>
          <div className="mt-4 overflow-hidden rounded-xl border border-stone-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-50 text-xs font-bold uppercase tracking-wide text-stone-500">
                <tr>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Segment</th>
                  <th className="px-4 py-3">Note</th>
                </tr>
              </thead>
              <tbody>
                {pack.sessionRunsheet.skeleton.map((row) => (
                  <tr key={row.t} className="border-t border-stone-100 align-top">
                    <td className="px-4 py-3 font-mono text-xs font-semibold text-bridge-700">
                      {row.t}
                    </td>
                    <td className="px-4 py-3 font-semibold text-stone-800">{row.label}</td>
                    <td className="px-4 py-3 text-stone-600">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-2xl border border-stone-100 bg-stone-50/80 p-5 text-sm">
            <p className="font-semibold text-stone-900">Week focus</p>
            <p className="mt-1 text-stone-600">{pack.week.skills}</p>
            <p className="mt-4 font-semibold text-stone-900">Scenario cards</p>
            <ul className="mt-2 list-inside list-disc text-stone-700">
              {pack.sessionRunsheet.scenarios.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-stone-900">Golden phrases</p>
            <ul className="mt-2 list-inside list-disc text-stone-700">
              {pack.week.mantraEn.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-stone-500">Coach note: {pack.week.teacherNote}</p>
          </div>
        </section>

        <section className="break-inside-avoid-page">
          <h3 className="font-display text-xl font-semibold text-stone-900">
            Parent one-pager — English
          </h3>
          <div className="mt-4 rounded-2xl border border-bridge-100 bg-gradient-to-br from-bridge-50/90 to-white p-6 text-sm leading-relaxed shadow-inner">
            <p className="font-semibold text-bridge-900">{pack.parentEn.title}</p>
            <p className="mt-2 text-stone-700">{pack.parentEn.lead}</p>
            <p className="mt-5 font-semibold text-stone-900">Try at home</p>
            <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-stone-700">
              {pack.parentEn.tryAtHome.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p className="mt-5 font-semibold text-stone-900">Phrases we practiced</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-stone-700">
              {pack.parentEn.phrases.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="mt-5 font-semibold text-stone-900">Class scenarios this week</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-stone-700">
              {pack.parentEn.scenarios.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        {pack.parentZh ? (
          <section className="break-inside-avoid-page">
            <h3 className="font-display text-xl font-semibold text-stone-900">
              家长一页纸 — 中文
            </h3>
            <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-6 text-sm leading-relaxed">
              <p className="font-semibold text-stone-900">{pack.parentZh.title}</p>
              <p className="mt-2 text-stone-700">{pack.parentZh.lead}</p>
              <p className="mt-5 font-semibold text-stone-900">在家可以试试</p>
              <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-stone-700">
                {pack.parentZh.tryAtHome.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <p className="mt-5 font-semibold text-stone-900">本周练习句式</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-stone-700">
                {pack.parentZh.phrases.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="mt-5 font-semibold text-stone-900">课堂情境示例</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-stone-700">
                {pack.parentZh.scenarios.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section>
          <h3 className="font-display text-xl font-semibold text-stone-900">
            {pack.observation.title}
          </h3>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-stone-700">
            {pack.observation.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>

        <footer className="border-t border-stone-200 pt-6 text-xs text-stone-500">
          Same-Week Bridge · Not a medical or mental-health service · Crisis (US): 988 or local
          emergency number.
        </footer>
      </article>
    </div>
  )
}
