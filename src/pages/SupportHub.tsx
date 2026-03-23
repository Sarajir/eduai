import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { IconShield } from '../components/icons'
import { useI18n } from '../i18n/context'

type CalloutProps = {
  title: string
  body: string
  href?: string
  tel?: string
  telLabel?: string
  linkLabel?: string
}

function ActionRow({ title, body, href, tel, telLabel, linkLabel }: CalloutProps) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-stone-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">{body}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tel ? (
          <a
            href={`tel:${tel.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-red-500"
          >
            {telLabel ?? `Call ${tel}`}
          </a>
        ) : null}
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-full border-2 border-stone-200 bg-white px-5 py-2.5 text-sm font-bold text-stone-800 hover:border-bridge-300"
          >
            {linkLabel ?? 'Website'}
          </a>
        ) : null}
      </div>
    </div>
  )
}

export function SupportHub() {
  const { t } = useI18n()

  return (
    <div className="max-w-3xl space-y-10">
      <PageHeader eyebrow={t('support.eyebrow')} title={t('support.title')} description={t('support.lead')} />

      <section className="rounded-2xl border-2 border-red-200/90 bg-red-50/50 p-6 shadow-sm">
        <h2 className="font-display text-lg font-semibold text-red-950">{t('support.emergencyTitle')}</h2>
        <p className="mt-2 text-sm leading-relaxed text-red-950/90">{t('support.emergencyBody')}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="tel:911"
            className="inline-flex rounded-full bg-red-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-red-600"
          >
            {t('support.btn911')}
          </a>
          <a
            href="tel:988"
            className="inline-flex rounded-full bg-red-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-red-600"
          >
            {t('support.btn988')}
          </a>
          <a
            href="tel:110"
            className="inline-flex rounded-full border-2 border-red-300 bg-white px-5 py-2.5 text-sm font-bold text-red-900 hover:bg-white"
          >
            {t('support.btn110')}
          </a>
          <a
            href="tel:120"
            className="inline-flex rounded-full border-2 border-red-300 bg-white px-5 py-2.5 text-sm font-bold text-red-900 hover:bg-white"
          >
            {t('support.btn120')}
          </a>
        </div>
        <p className="mt-3 text-xs text-red-900/75">{t('support.emergencyFoot')}</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-xl font-semibold text-stone-900">{t('support.proTitle')}</h2>
        <p className="text-sm text-stone-600">{t('support.proLead')}</p>
        <ActionRow
          title={t('support.us988Title')}
          body={t('support.us988Body')}
          tel="988"
          telLabel={t('support.dial988')}
          href="https://988lifeline.org/"
          linkLabel={t('support.open988site')}
        />
        <ActionRow
          title={t('support.cn12356Title')}
          body={t('support.cn12356Body')}
          tel="12356"
          telLabel={t('support.dial12356')}
          href="https://www.gov.cn/zhengce/zhengceku/202412/content_6994470.htm"
          linkLabel={t('support.openGovNotice')}
        />
      </section>

      <section className="rounded-2xl border border-stone-200 bg-stone-50/80 p-6">
        <div className="flex gap-3">
          <IconShield className="mt-0.5 size-6 shrink-0 text-bridge-600" />
          <div>
            <h2 className="font-display text-lg font-semibold text-stone-900">{t('support.notHereTitle')}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-stone-700">
              <li>{t('support.notHere1')}</li>
              <li>{t('support.notHere2')}</li>
              <li>{t('support.notHere3')}</li>
              <li>{t('support.notHere4')}</li>
              <li>{t('support.notHere5')}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6">
        <h2 className="font-display text-lg font-semibold text-amber-950">{t('support.alertMythTitle')}</h2>
        <p className="mt-3 text-sm leading-relaxed text-amber-950/90">{t('support.alertMythBody')}</p>
      </section>

      <section className="rounded-2xl border border-bridge-200 bg-bridge-50/40 p-6">
        <h2 className="font-display text-lg font-semibold text-bridge-900">{t('support.schoolTitle')}</h2>
        <p className="mt-3 text-sm leading-relaxed text-bridge-950/90">{t('support.schoolBody')}</p>
        <Link
          to="/safety"
          className="mt-4 inline-block text-sm font-bold text-bridge-800 underline-offset-2 hover:underline"
        >
          {t('support.linkSafety')}
        </Link>
      </section>

      <section className="rounded-2xl border border-stone-200 bg-white p-6 text-sm text-stone-600">
        <h2 className="font-display text-lg font-semibold text-stone-900">{t('support.futureTitle')}</h2>
        <p className="mt-3 leading-relaxed">{t('support.futureBody')}</p>
      </section>
    </div>
  )
}
