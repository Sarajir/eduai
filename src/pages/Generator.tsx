import { useMemo, useState } from 'react'
import { getLocalizedWeeks } from '../data/weekLocale'
import { buildPack, type GeneratorInput } from '../lib/generator'
import { PageHeader } from '../components/PageHeader'
import { useI18n } from '../i18n/context'

const defaultInput: GeneratorInput = {
  siteName: 'Afterschool SEL pilot',
  leaderName: '',
  gradeBand: '2-4',
  weekFocus: 1,
  conflicts: '',
  trustedAdultLabel: 'the on-duty teacher',
  includeBilingualParent: true,
}

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-stone-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-bridge-300 focus:ring-2 focus:ring-bridge-500/20'

export function Generator() {
  const { lang, t } = useI18n()
  const [form, setForm] = useState<GeneratorInput>(defaultInput)
  const pack = useMemo(() => buildPack(form, lang), [form, lang])
  const weeksL = getLocalizedWeeks(lang)

  const print = () => window.print()

  const steps = [t('generator.step1'), t('generator.step2'), t('generator.step3')]

  return (
    <div className="space-y-10">
      <div className="no-print">
        <PageHeader
          eyebrow={t('generator.eyebrow')}
          title={t('generator.title')}
          description={t('generator.desc')}
        />
        <div className="flex flex-wrap gap-2">
          {steps.map((label, i) => (
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
            {t('generator.cohort')}
            <input
              className={fieldClass}
              value={form.siteName}
              onChange={(e) => setForm({ ...form, siteName: e.target.value })}
            />
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            {t('generator.facilitator')}
            <input
              className={fieldClass}
              value={form.leaderName}
              onChange={(e) => setForm({ ...form, leaderName: e.target.value })}
              placeholder={t('generator.optional')}
            />
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            {t('generator.gradeBand')}
            <select
              className={fieldClass}
              value={form.gradeBand}
              onChange={(e) =>
                setForm({ ...form, gradeBand: e.target.value as GeneratorInput['gradeBand'] })
              }
            >
              <option value="2-4">{t('generator.g24')}</option>
              <option value="5-6">{t('generator.g56')}</option>
              <option value="7-8">{t('generator.g78')}</option>
            </select>
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            {t('generator.weekFocus')}
            <select
              className={fieldClass}
              value={form.weekFocus}
              onChange={(e) => setForm({ ...form, weekFocus: Number(e.target.value) })}
            >
              {weeksL.map((w) => (
                <option key={w.week} value={w.week}>
                  {lang === 'zh'
                    ? `第 ${w.week} 周：${w.title}`
                    : `${t('generator.weekN')} ${w.week}: ${w.title}`}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            {t('generator.trustedAdult')}
            <input
              className={fieldClass}
              value={form.trustedAdultLabel}
              onChange={(e) => setForm({ ...form, trustedAdultLabel: e.target.value })}
            />
          </label>
          <label className="block text-sm font-semibold text-stone-700">
            {t('generator.scenarios')}{' '}
            <span className="font-normal text-stone-500">{t('generator.scenariosHint')}</span>
            <textarea
              rows={5}
              className={`${fieldClass} font-mono text-sm leading-relaxed`}
              value={form.conflicts}
              onChange={(e) => setForm({ ...form, conflicts: e.target.value })}
              placeholder={
                lang === 'zh'
                  ? '有人抄我数学作业。\n朗读时同学笑我。'
                  : 'Someone copied my answer in math.\nKids laugh when I read aloud.'
              }
            />
          </label>
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-stone-100 bg-stone-50/80 px-4 py-3 text-sm font-semibold text-stone-800">
            <input
              type="checkbox"
              checked={form.includeBilingualParent}
              onChange={(e) =>
                setForm({ ...form, includeBilingualParent: e.target.checked })
              }
              className="size-4 rounded border-stone-300 text-bridge-600 focus:ring-bridge-500"
            />
            <span>
              {t('generator.includeOtherParent')}
              <span className="mt-0.5 block text-xs font-normal text-stone-500">
                {lang === 'zh'
                  ? t('generator.includeOtherParentHintZh')
                  : t('generator.includeOtherParentHintEn')}
              </span>
            </span>
          </label>
          <button
            type="button"
            onClick={print}
            className="w-full rounded-full bg-bridge-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-bridge-600/20 transition hover:bg-bridge-500"
          >
            {t('generator.print')}
          </button>
        </form>

        <div className="no-print rounded-2xl border border-dashed border-bridge-200/80 bg-bridge-50/30 p-4 text-sm text-bridge-900 lg:hidden">
          {t('generator.mobileHint')}
        </div>
      </div>

      <article
        id="print-pack"
        className="print:shadow-none space-y-10 rounded-3xl border border-stone-200 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)] print:border-0 print:p-0 print:shadow-none sm:p-10"
      >
        <header className="border-b border-stone-200 pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-bridge-600">
            {t('generator.brand')}
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-stone-900">
            {pack.sessionRunsheet.header}
          </h2>
          {pack.sessionRunsheet.leader ? (
            <p className="mt-2 text-sm text-stone-600">
              {t('generator.facilitatorLine')} {pack.sessionRunsheet.leader}
            </p>
          ) : null}
          <p className="mt-2 text-sm text-stone-600">
            {t('generator.gradeLine')} {pack.sessionRunsheet.gradeBand} —{' '}
            {pack.sessionRunsheet.gradeNote}
          </p>
        </header>

        <section>
          <h3 className="font-display text-xl font-semibold text-stone-900">
            {t('generator.sessionRun')}
          </h3>
          <div className="mt-4 overflow-hidden rounded-xl border border-stone-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-50 text-xs font-bold uppercase tracking-wide text-stone-500">
                <tr>
                  <th className="px-4 py-3">{t('generator.time')}</th>
                  <th className="px-4 py-3">{t('generator.segment')}</th>
                  <th className="px-4 py-3">{t('generator.note')}</th>
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
            <p className="font-semibold text-stone-900">{t('generator.weekFocusLbl')}</p>
            <p className="mt-1 text-stone-600">{pack.week.skills}</p>
            <p className="mt-4 font-semibold text-stone-900">{t('generator.scenarioCards')}</p>
            <ul className="mt-2 list-inside list-disc text-stone-700">
              {pack.sessionRunsheet.scenarios.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-stone-900">{t('generator.goldenPhrases')}</p>
            <p className="mt-2 text-xs font-semibold text-stone-500">{t('generator.phrasesEnLabel')}</p>
            <ul className="mt-1 list-inside list-disc text-stone-700">
              {pack.week.mantraEn.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs font-semibold text-stone-500">{t('generator.phrasesZhLabel')}</p>
            <ul className="mt-1 list-inside list-disc text-stone-700">
              {pack.week.mantraZh.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-stone-500">
              {t('generator.coachNote')} {pack.week.teacherNote}
            </p>
          </div>
        </section>

        <ParentBlockSection block={pack.parentPrimary} t={t} />
        {pack.parentSecondary ? (
          <ParentBlockSection block={pack.parentSecondary} t={t} />
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
          {t('generator.footerObs')}
        </footer>
      </article>
    </div>
  )
}

function ParentBlockSection({
  block,
  t,
}: {
  block: {
    title: string
    lead: string
    tryAtHome: string[]
    phrases: string[]
    scenarios: string[]
    lang: 'en' | 'zh'
  }
  t: (k: string) => string
}) {
  const isZh = block.lang === 'zh'
  const titleHeading = isZh ? t('generator.parentZh') : t('generator.parentEn')
  const tryLbl = isZh ? t('generator.tryHomeZh') : t('generator.tryHome')
  const phLbl = isZh ? t('generator.phrasesZh') : t('generator.phrasesPracticed')
  const scLbl = isZh ? t('generator.scenariosZh') : t('generator.classScenarios')

  return (
    <section className="break-inside-avoid-page">
      <h3 className="font-display text-xl font-semibold text-stone-900">{titleHeading}</h3>
      <div
        className={`mt-4 rounded-2xl border p-6 text-sm leading-relaxed shadow-inner ${
          isZh
            ? 'border-stone-200 bg-white'
            : 'border-bridge-100 bg-gradient-to-br from-bridge-50/90 to-white'
        }`}
      >
        <p className={`font-semibold ${isZh ? 'text-stone-900' : 'text-bridge-900'}`}>
          {block.title}
        </p>
        <p className="mt-2 text-stone-700">{block.lead}</p>
        <p className="mt-5 font-semibold text-stone-900">{tryLbl}</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-stone-700">
          {block.tryAtHome.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <p className="mt-5 font-semibold text-stone-900">{phLbl}</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-stone-700">
          {block.phrases.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="mt-5 font-semibold text-stone-900">{scLbl}</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-stone-700">
          {block.scenarios.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
