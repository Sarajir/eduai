import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { IconShield } from '../components/icons'
import { useI18n } from '../i18n/context'

export function Safety() {
  const { t } = useI18n()

  return (
    <div className="max-w-3xl">
      <PageHeader eyebrow={t('safety.eyebrow')} title={t('safety.title')} description={t('safety.lead')} />

      <div className="space-y-6">
        <section className="rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/90 to-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
              <IconShield className="size-5" />
            </span>
            <div>
              <h2 className="font-display text-lg font-semibold text-stone-900">{t('safety.isTitle')}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-stone-700">
                <li>{t('safety.is1')}</li>
                <li>{t('safety.is2')}</li>
                <li>{t('safety.is3')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-red-200/70 bg-red-50/40 p-6 shadow-sm">
          <h2 className="font-display text-lg font-semibold text-red-950">{t('safety.notTitle')}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-red-950/90">
            <li>{t('safety.not1')}</li>
            <li>{t('safety.not2')}</li>
            <li>{t('safety.not3')}</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="font-display text-lg font-semibold text-stone-900">{t('safety.facTitle')}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-stone-700">
            <li>{t('safety.fac1')}</li>
            <li>{t('safety.fac2')}</li>
            <li>{t('safety.fac3')}</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-6 shadow-sm">
          <h2 className="font-display text-lg font-semibold text-amber-950">{t('safety.crisisTitle')}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-medium text-amber-950">
            <li>
              <strong>{t('safety.c988')}</strong>
              {t('safety.c988rest')}
            </li>
            <li>
              <strong>{t('safety.c911')}</strong>
              {t('safety.c911rest')}
            </li>
          </ul>
          <p className="mt-4 text-sm text-amber-900/80">{t('safety.crisisFoot')}</p>
          <Link
            to="/support"
            className="mt-4 inline-flex text-sm font-bold text-amber-900 underline-offset-2 hover:underline"
          >
            {t('safety.supportMore')}
          </Link>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-stone-50/60 p-6">
          <h2 className="font-display text-lg font-semibold text-stone-900">{t('safety.dataTitle')}</h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-700">{t('safety.dataBody')}</p>
        </section>

        <section className="rounded-2xl border border-bridge-200 bg-bridge-50/40 p-6">
          <h2 className="font-display text-lg font-semibold text-bridge-900">{t('safety.aiTitle')}</h2>
          <p className="mt-3 text-sm leading-relaxed text-bridge-950/90">{t('safety.aiBody')}</p>
        </section>
      </div>
    </div>
  )
}
