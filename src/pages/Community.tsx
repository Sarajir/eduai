import { PageHeader } from '../components/PageHeader'
import { IconGithub, IconVideo } from '../components/icons'
import { communityShares, type SharePlatform } from '../data/communityShares'
import { useI18n } from '../i18n/context'

const REPO_ISSUES = 'https://github.com/Sarajir/eduai/issues/new'

function buildIssueUrl(lang: 'en' | 'zh') {
  const title = lang === 'zh' ? '[教师分享] ' : '[Teacher share] '
  const body =
    lang === 'zh'
      ? `- 资源链接（视频 / 录播 / 网盘等）：\n- 标题：\n- 学段或课堂情境：\n- 我已确认有权分享；未在未经同意的情况下出现学生姓名或可识别影像。\n`
      : `- Link (video / recording / Drive / etc.):\n- Short title:\n- Grade band or context:\n- I confirm I have permission to share; no student names or identifiable images without consent.\n`
  return `${REPO_ISSUES}?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`
}

function platformClass(p: SharePlatform) {
  switch (p) {
    case 'youtube':
      return 'bg-red-50 text-red-800 ring-red-100'
    case 'bilibili':
      return 'bg-sky-50 text-sky-900 ring-sky-100'
    case 'loom':
      return 'bg-violet-50 text-violet-900 ring-violet-100'
    case 'drive':
      return 'bg-emerald-50 text-emerald-900 ring-emerald-100'
    default:
      return 'bg-stone-100 text-stone-700 ring-stone-200'
  }
}

export function Community() {
  const { lang, t } = useI18n()
  const issueHref = buildIssueUrl(lang)

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow={t('community.eyebrow')}
        title={t('community.title')}
        description={t('community.lead')}
      />

      <section className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-6 shadow-sm">
        <h2 className="font-display text-lg font-semibold text-amber-950">{t('community.whyTitle')}</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-amber-950/90">
          <li>{t('community.why1')}</li>
          <li>{t('community.why2')}</li>
          <li>{t('community.why3')}</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-bridge-200 bg-gradient-to-br from-bridge-50/80 to-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-bridge-600 text-white shadow-md">
              <IconVideo className="size-6" />
            </span>
            <div>
              <h2 className="font-display text-lg font-semibold text-stone-900">{t('community.submitTitle')}</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-600">{t('community.submitLead')}</p>
              <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-sm text-stone-700">
                <li>{t('community.submitStep1')}</li>
                <li>{t('community.submitStep2')}</li>
                <li>{t('community.submitStep3')}</li>
              </ol>
            </div>
          </div>
          <a
            href={issueHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-stone-800"
          >
            <IconGithub className="size-5" />
            {t('community.submitIssue')}
          </a>
        </div>
      </section>

      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-lg font-semibold text-stone-900">{t('community.privacyTitle')}</h2>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">{t('community.privacyBody')}</p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-stone-900">{t('community.listTitle')}</h2>

        {communityShares.length === 0 ? (
          <div className="mt-6 rounded-3xl border border-dashed border-stone-300 bg-stone-50/60 px-8 py-14 text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-white text-bridge-500 shadow-sm ring-1 ring-stone-200">
              <IconVideo className="size-8" />
            </div>
            <p className="mt-5 font-display text-lg font-semibold text-stone-800">{t('community.emptyTitle')}</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-stone-600">{t('community.emptyBody')}</p>
            <a
              href={issueHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-bridge-700 underline-offset-2 hover:underline"
            >
              <IconGithub className="size-4" />
              {t('community.emptyCta')}
            </a>
          </div>
        ) : (
          <ul className="mt-6 space-y-4">
            {communityShares.map((item) => {
              const title = lang === 'zh' ? item.title.zh : item.title.en
              const by = lang === 'zh' ? item.contributor.zh : item.contributor.en
              const note = item.note ? (lang === 'zh' ? item.note.zh : item.note.en) : null
              return (
                <li
                  key={item.id}
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-bridge-200 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide ring-1 ${platformClass(item.platform)}`}
                      >
                        {t(`community.platform.${item.platform}`)}
                      </span>
                      <h3 className="font-display mt-2 text-lg font-semibold text-stone-900">{title}</h3>
                      <p className="mt-1 text-sm text-stone-500">{by}</p>
                    </div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="shrink-0 rounded-full bg-bridge-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-bridge-500"
                    >
                      {t('community.openLink')}
                    </a>
                  </div>
                  {note ? <p className="mt-3 text-sm text-stone-600">{note}</p> : null}
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </div>
  )
}
