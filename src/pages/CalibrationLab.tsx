import { useMemo, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { buildCalibrationPack, type CalibrationInput } from '../lib/calibrationPack'
import type { Lang } from '../i18n/types'
import { useI18n } from '../i18n/context'

function defaultsFor(lang: Lang): CalibrationInput {
  if (lang === 'zh') {
    return {
      cohortLabel: '课后班试点',
      focus: 'math',
      gradeBand: '5-6',
      classContext: '题目看起来眼熟时，学生容易跳着写完、不检查。',
      taskDescription: '两道应用题 + 一道「写出你的步骤」（最多 10 分钟）。',
    }
  }
  return {
    cohortLabel: 'Afterschool cohort',
    focus: 'math',
    gradeBand: '5-6',
    classContext:
      'Students rush and skip checking their work when problems look familiar.',
    taskDescription:
      'Two short word problems + one “explain your steps” prompt (10 minutes max).',
  }
}

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-stone-900 shadow-sm outline-none focus:border-bridge-300 focus:ring-2 focus:ring-bridge-500/20'

export function CalibrationLab() {
  const { lang, t } = useI18n()
  const [form, setForm] = useState<CalibrationInput>(() => defaultsFor(lang))
  const pack = useMemo(() => buildCalibrationPack(form, lang), [form, lang])

  return (
    <div className="space-y-10">
      <div className="no-print">
        <PageHeader
          eyebrow={t('calibration.eyebrow')}
          title={t('calibration.title')}
          description={
            <>
              {t('calibration.desc1')} {t('calibration.desc2')}
            </>
          }
        />
        <p className="rounded-2xl border border-violet-200/80 bg-violet-50/60 px-4 py-3 text-sm text-violet-950">
          {t('calibration.noAi')}
        </p>
      </div>

      <div className="no-print grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-start">
        <form className="space-y-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
          <label className="block text-sm font-semibold text-stone-700">
            {t('calibration.cohort')}
            <input
              className={fieldClass}
              value={form.cohortLabel}
              onChange={(e) => setForm({ ...form, cohortLabel: e.target.value })}
            />
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            {t('calibration.focus')}
            <select
              className={fieldClass}
              value={form.focus}
              onChange={(e) =>
                setForm({ ...form, focus: e.target.value as CalibrationInput['focus'] })
              }
            >
              <option value="math">{t('calibration.focusMath')}</option>
              <option value="reading">{t('calibration.focusReading')}</option>
              <option value="science">{t('calibration.focusScience')}</option>
              <option value="emotion-vocab">{t('calibration.focusEmotion')}</option>
              <option value="mixed">{t('calibration.focusMixed')}</option>
            </select>
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            {t('calibration.gradeBand')}
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
            {t('calibration.classContext')}
            <textarea
              rows={3}
              className={fieldClass}
              value={form.classContext}
              onChange={(e) => setForm({ ...form, classContext: e.target.value })}
            />
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            {t('calibration.taskDesc')}
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
            {t('calibration.print')}
          </button>
        </form>
        <p className="text-sm text-stone-500 lg:hidden">{t('calibration.scrollHint')}</p>
      </div>

      <article className="space-y-8 rounded-3xl border border-stone-200 bg-white p-8 shadow-lg print:border-0 print:shadow-none sm:p-10">
        <header className="border-b border-stone-200 pb-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600">
            {t('calibration.brand')}
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-stone-900">{pack.title}</h2>
          <p className="mt-1 text-sm font-medium text-stone-600">{pack.subtitle}</p>
          <p className="mt-4 rounded-xl bg-stone-50 p-4 text-sm leading-relaxed text-stone-700">
            <span className="font-semibold text-stone-900">{t('calibration.whyTitle')}</span>{' '}
            {pack.researchNote}
          </p>
          <p className="mt-3 text-sm text-bridge-800">
            <span className="font-semibold">{t('calibration.gradeTip')}</span> {pack.gradeHint}
          </p>
        </header>

        <section>
          <h3 className="font-display text-xl font-semibold text-stone-900">{t('calibration.facTitle')}</h3>
          <ol className="mt-4 space-y-4">
            {pack.facilitatorSteps.map((s, i) => (
              <li
                key={s.title}
                className="rounded-2xl border border-stone-100 bg-stone-50/80 p-4 sm:p-5"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-violet-700">
                  {t('calibration.step')} {i + 1} · {s.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="break-inside-avoid-page">
          <h3 className="font-display text-xl font-semibold text-stone-900">{t('calibration.slipsTitle')}</h3>
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
