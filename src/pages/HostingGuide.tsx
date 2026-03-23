import type { ReactNode } from 'react'
import { PageHeader } from '../components/PageHeader'
import { useI18n } from '../i18n/context'

const REPO = 'https://github.com/Sarajir/eduai'
const PAGES_SETTINGS = 'https://github.com/Sarajir/eduai/settings/pages'
const LIVE = 'https://sarajir.github.io/eduai/'

const linkClass =
  'font-semibold text-bridge-700 underline-offset-2 hover:underline'
const codeSm =
  'rounded bg-stone-200/80 px-1.5 py-0.5 text-sm font-mono'
const codeXs = 'rounded bg-white px-1 font-mono text-xs'

export function HostingGuide() {
  const { t } = useI18n()

  const steps: { title: string; body: ReactNode }[] = [
    {
      title: t('hosting.s1t'),
      body: (
        <>
          {t('hosting.s1bPre')}
          <a href={PAGES_SETTINGS} className={linkClass} target="_blank" rel="noreferrer">
            {t('hosting.s1bLink')}
          </a>
          {t('hosting.s1bPost')}
        </>
      ),
    },
    { title: t('hosting.s2t'), body: t('hosting.s2b') },
    { title: t('hosting.s3t'), body: t('hosting.s3b') },
    { title: t('hosting.s4t'), body: t('hosting.s4b') },
  ]

  return (
    <div className="max-w-3xl space-y-12">
      <PageHeader
        eyebrow={t('hosting.eyebrow')}
        title={t('hosting.title')}
        description={
          <>
            {t('hosting.introRepo')}{' '}
            <a href={REPO} className={linkClass} target="_blank" rel="noreferrer">
              github.com/Sarajir/eduai
            </a>
            {t('hosting.introTail')}
          </>
        }
      />

      <section className="rounded-3xl border border-bridge-200 bg-gradient-to-br from-bridge-50 via-white to-bridge-50/30 p-8 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-bridge-900">{t('hosting.liveTitle')}</h2>
        <p className="mt-2 text-sm text-stone-600">{t('hosting.liveSub')}</p>
        <p className="mt-2 break-all rounded-xl bg-white/80 px-4 py-3 font-mono text-sm font-medium text-stone-900 ring-1 ring-bridge-100">
          {LIVE}
        </p>
        <p className="mt-3 text-sm text-stone-600">
          {t('hosting.liveChild')}{' '}
          <span className="break-all font-mono text-xs text-stone-800">
            {LIVE.replace(/\/$/, '')}/generator
          </span>
        </p>
      </section>

      <section className="rounded-2xl border border-stone-200 bg-amber-50/50 p-6">
        <h2 className="font-display text-lg font-semibold text-amber-950">{t('hosting.patTitle')}</h2>
        <p className="mt-2 text-sm leading-relaxed text-amber-950/90">
          {t('hosting.patBody')}
          <code className={`${codeXs} mx-0.5`}>{t('hosting.patFile')}</code>{' '}
          {t('hosting.patTo')}{' '}
          <code className={codeXs}>{t('hosting.patTarget')}</code>
          {t('hosting.patEnd')}
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-stone-900">{t('hosting.stepsTitle')}</h2>
        <ol className="mt-6 space-y-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-bridge-600 text-sm font-bold text-white shadow-md">
                {i + 1}
              </span>
              <div>
                <p className="font-display font-semibold text-stone-900">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-stone-900">{t('hosting.updateTitle')}</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-stone-700">
          <li>{t('hosting.u1')}</li>
          <li>
            {t('hosting.u2')}
            <pre className="mt-3 overflow-x-auto rounded-xl bg-stone-900 p-4 text-sm text-stone-100">
              {`git add -A
git commit -m "Describe your change"
git push origin main`}
            </pre>
          </li>
          <li>
            {t('hosting.u3')}{' '}
            <span className="font-mono text-stone-800">{t('hosting.liveUrl')}</span>
          </li>
        </ol>
      </section>

      <section className="rounded-2xl border border-stone-200 bg-stone-50/80 p-6">
        <h2 className="font-display text-xl font-semibold text-stone-900">{t('hosting.previewTitle')}</h2>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">
          <code className={`${codeSm} ring-1 ring-stone-200`}>npm run dev</code>{' '}
          {t('hosting.previewBody')}
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-stone-900 p-4 text-sm text-stone-100">
          npm run build
npm run preview
        </pre>
        <p className="mt-3 text-sm text-stone-600">
          {t('hosting.previewFoot')}{' '}
          <code className={`${codeSm} ring-1 ring-stone-200`}>{t('hosting.previewPath')}</code>
        </p>
      </section>

      <section className="rounded-2xl border border-amber-200/70 bg-amber-50/40 p-6">
        <h2 className="font-display text-xl font-semibold text-amber-950">{t('hosting.renameTitle')}</h2>
        <p className="mt-2 text-sm leading-relaxed text-amber-950/90">
          {t('hosting.renamePre')}
          <strong>eduai</strong>
          {t('hosting.renamePost')}
        </p>
      </section>

      <section className="rounded-2xl border border-stone-200 bg-white p-6 text-sm text-stone-600 shadow-sm">
        <p className="font-display font-semibold text-stone-900">{t('hosting.enSummaryTitle')}</p>
        <p className="mt-3 leading-relaxed">
          {t('hosting.enSummaryBody')}{' '}
          <span className="font-mono text-stone-800">{LIVE}</span>
        </p>
      </section>
    </div>
  )
}
